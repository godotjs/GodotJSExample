import { FileAccess, type_string, Variant } from "godot";
import { editor, internal } from "godot-jsb";

const TAB = "    ";

interface IWriter {
    get level(): number;
    line(text: string): void;
    finish(): void;
}

class FileWriter implements IWriter {
    private file: FileAccess;

    constructor(filename: string) {
        this.file = FileAccess.open(filename, FileAccess.ModeFlags.WRITE);
    }

    get level() { return 0; }

    line(text: string): void {
        this.file.store_line(text);
    }

    finish(): void {
        this.file.flush();
    }

    close() {
        this.file.close();
    }
}

class CachedWriter implements IWriter {
    protected lines: Array<string>;
    protected parent: IWriter;

    constructor(parent: IWriter) {
        this.parent = parent;
        this.lines = [];
    }

    get level() { return this.parent.level; }

    line(text: string): void {
        this.lines.push(text);
    }

    finish(): void {
        for (let line of this.lines) {
            this.parent.line(line);
        }
    }
}

class IndentWriter implements IWriter {
    protected base: IWriter;
    protected finish_base: boolean;

    constructor(base: IWriter, finish_base = false) {
        this.base = base;
        this.finish_base = finish_base;
    }

    get level() { return this.base.level + 1; }

    line(text: string): void {
        this.base.line(TAB + text);
    }

    finish(): void {
        if (this.finish_base) {
            this.base.finish();
        }
    }
}

class StaticBindMethodWriter extends IndentWriter {
    constructor(base: IWriter) {
        super(base);

        this.base.line(`static NativeClassID static_bind(const FBindingEnv& p_env)`);
        this.base.line(`{`);
    }

    finish(): void {
        this.base.line(`}`);
    }
}

class StructWriter extends IndentWriter {
    constructor(base: IWriter, name: string) {
        super(base);

        this.base.line(`struct ${name}`);
        this.base.line(`{`);
    }

    finish(): void {
        this.base.line(`};`);
    }
}

class V8FunctionWriter extends IndentWriter {
    constructor(base: IWriter, name: string) {
        super(base);

        this.base.line(`static void ${name}(const v8::FunctionCallbackInfo<v8::Value>& info)`);
        this.base.line(`{`);
        this.line("v8::Isolate* isolate = info.GetIsolate();");
        this.line("v8::Local<v8::Context> context = isolate->GetCurrentContext();");
    }

    finish(): void {
        this.base.line(`}`);
    }
}

class BlockWriter extends IndentWriter {
    constructor(base: IWriter) {
        super(base);
        this.base.line(`{`);
    }

    finish(): void {
        this.base.line(`}`);
    }
}

function BLOCK(w: IWriter) {
    return function (...lines: string[]) {
        let block = new BlockWriter(w);
        lines.forEach(line => block.line(line));
        block.finish();
    }
}

class DoWriter extends IndentWriter {
    constructor(base: IWriter) {
        super(base);
        this.base.line(`do`);
        this.base.line(`{`);
    }

    finish(): void {
        this.base.line(`} while (false);`);
    }
}

class IfWriter extends IndentWriter {
    constructor(base: IWriter, cond: string, expr = "if") {
        super(base);
        this.base.line(`${expr} (${cond})`);
        this.base.line(`{`);
    }

    finish(): void {
        this.base.line(`}`);
    }
}

function IF(w: IWriter, cond: string) {
    return {
        THEN: function (...lines: string[]) {
            let block = new IfWriter(w, cond);
            lines.forEach(line => block.line(line));
            block.finish();
        }
    }
}

interface IConstructor {
    argc: number;
    variants: Array<editor.ConstructorInfo>;
}

interface GeneratedMethod {
    method_name: string;
    method_info: editor.MethodBind;
}

class PrimitiveClassGen {
    private codegen: IWriter;
    private register: IWriter;
    private type: editor.PrimitiveClassInfo;

    constructor(type: editor.PrimitiveClassInfo, codegen: IWriter, register: IWriter) {
        this.type = type;
        this.codegen = codegen;
        this.register = register;
    }

    private emit_constructor_body(body: IWriter, ctor: IConstructor, index: number) {
        const inner = new IfWriter(body, `v8_argc == ${ctor.argc}`, index == 0 ? "if" : "else if");
        if (ctor.variants.length == 1) {
            let args: Array<string> = [];
            ctor.variants[0].arguments.forEach((arg, index) => {
                const arg_type = type_string(arg.type);
                const arg_name = `__${index}__`;
                inner.line(`${arg_type} ${arg_name};`);
                IF(inner, `!TryParseValue(isolate, context, ${arg_name})`).THEN(
                    `jsb_throw(isolate, "bad param at ${index}");`,
                    `return;`
                );
                args.push(arg_name);
            });
            inner.line(`Variant* instance = Environment::alloc_variant();`);
            if (args.length > 1) {
                inner.line(`*instance = ${type_string(this.type.type)}(${args.join(", ")});`);
            } else {
                inner.line(`*instance = ${args[0]};`);
            }
            inner.line(`environment->bind_valuetype(class_id, instance, self);`);
        } else {
            ctor.variants.forEach((variant => {
                let args: Array<string> = [];
                let dw = new DoWriter(inner);
                variant.arguments.forEach((arg, index) => {
                    const arg_type = type_string(arg.type);
                    const arg_name = `__${index}__`;
                    dw.line(`${arg_type} ${arg_name};`);
                    IF(dw, `!TryParseValue(isolate, context, ${arg_name})`).THEN(
                        `break;`
                    );
                    args.push(arg_name);
                });
                dw.line(`Variant* instance = Environment::alloc_variant();`);
                if (args.length > 1) {
                    dw.line(`*instance = ${type_string(this.type.type)}(${args.join(", ")});`);
                } else {
                    dw.line(`*instance = ${args[0]};`);
                }
                dw.line(`environment->bind_valuetype(class_id, instance, self);`);
                dw.finish();
            }));
        }
        inner.finish();
    }

    emit_constructor(struct: IWriter) {
        let func = new V8FunctionWriter(struct, "constructor");
        IF(func, "!info.IsConstructCall()").THEN(
            `jsb_throw(isolate, "bad constructor call");`,
            `return;`,
        );
        func.line("v8::Local<v8::Object> self = info.This();");
        func.line(`const int v8_argc = info.Length();`);
        let combined: Array<IConstructor> = [];
        this.type.constructors.sort((a, b) => a.arguments.length - b.arguments.length);
        this.type.constructors.forEach(value => {
            if (combined.length == 0 || combined[combined.length - 1].argc != value.arguments.length) {
                combined.push({ argc: value.arguments.length, variants: [value] });
            } else {
                combined[combined.length - 1].variants.push(value);
            }
        });
        combined.forEach((value, index) => this.emit_constructor_body(func, value, index));
        func.line(`jsb_throw(isolate, "no suitable constructor");`);
        func.finish();
    }

    emit_method(struct: IWriter, method: editor.MethodBind, generated_methods: Array<GeneratedMethod>) {
        let args: Array<string> = [];
        let name = `method_${method.name}`;
        let func = new V8FunctionWriter(struct, name);
        func.line(`${type_string(this.type.type)}* thiz = GetThis();`);
        method.args_.forEach((value, index) => {
            let arg_name = `__${index}__`;
            let arg_type = type_string(value.type);
            func.line(`${arg_type} ${arg_name};`);
            args.push(arg_name);
            IF(func, `!TryParseValue(isolate, context, ${arg_name})`).THEN(
                `jsb_throw(isolate, "bad param at ${index}");`,
                `return;`
            );
        });
        if (typeof method.return_ != "undefined" && method.return_.type != Variant.Type.TYPE_NIL) {
            func.line(`v8::Local<v8::Value> rval;`);
            IF(func, `WrapValue(isolate, context, thiz->${method.name}(${args.join(", ")}), rval)`).THEN(
                `jsb_throw(isolate, "failed to translate return value")`, 
                `return;`
            );
            func.line(`info.GetReturnValue().Set(rval);`);
        } else {
            func.line(`thiz->${method.name}(${args.join(", ")});`);
        }
        func.finish();
        generated_methods.push({ method_name: name, method_info: method });
    }

    emit() {
        let struct = new StructWriter(this.codegen, `${this.type.name}StaticBinding`);
        let generated_methods: Array<GeneratedMethod> = [];

        this.emit_constructor(struct);
        this.type.methods.forEach(value => this.emit_method(struct, value, generated_methods));

        {
            let bind = new StaticBindMethodWriter(struct);

            bind.line(`const StringName& class_name = p_env.type_name;`);
            bind.line(`const NativeClassID class_id = p_env.environment->add_class(NativeClassType::GodotPrimitive, class_name);`);

            bind.line("v8::Local<v8::FunctionTemplate> function_template = v8::FunctionTemplate::New(p_env.isolate, &constructor);");
            bind.line("function_template->InstanceTemplate()->SetInternalFieldCount(IF_VariantFieldCount);");
            bind.line("function_template->SetClassName(p_env.environment->get_string_value(class_name));");
            bind.line("v8::Local<v8::ObjectTemplate> prototype_template = function_template->PrototypeTemplate();");

            generated_methods.forEach(value => {
                if (value.method_info.is_static) {
                    bind.line(`function_template->Set(..., ${value.method_name});`);
                } else {
                    bind.line(`prototype_template->Set(..., ${value.method_name});`);
                }
            });

            BLOCK(bind)(
                "NativeClassInfo& class_info = p_env.environment->get_native_class(class_id);",
                "class_info.finalizer = &finalizer;",
                "class_info.template_.Reset(p_env.isolate, function_template);",
                "class_info.set_function(p_env.isolate, function_template->GetFunction(p_env.context).ToLocalChecked());",
                "jsb_check(class_info.template_ == function_template);",
                "jsb_check(!class_info.template_.IsEmpty());",
            );

            bind.line(`return class_id;`);
            bind.finish();
        }
        struct.finish();

        this.register.line(`p_realm->add_class_register(Variant::${Variant.Type[this.type.type]}, &${this.type.name}StaticBinding::static_bind);`);
    }
}

class Generator {
    private filename: string;
    private types: editor.PrimitiveClassInfo[];

    constructor(types: editor.PrimitiveClassInfo[], filename: string) {
        this.types = types;
        this.filename = filename;
    }

    emit() {
        let ignored_type = new Set([
            Variant.Type.TYPE_NIL,
            Variant.Type.TYPE_BOOL,
            Variant.Type.TYPE_INT,
            Variant.Type.TYPE_FLOAT,
            Variant.Type.TYPE_STRING,
            Variant.Type.TYPE_STRING_NAME,
            Variant.Type.TYPE_OBJECT,
        ]);
        let codegen = new FileWriter(this.filename);
        let register = new IndentWriter(new CachedWriter(codegen), true);

        codegen.line(`// AUTO-GENERATED`);
        codegen.line(`#include "jsb_primitive_bindings.h"`);
        codegen.line(`#if JSB_WITH_STATIC_PRIMITIVE_TYPE_BINDINGS`);

        codegen.line(`#include "jsb_class_info.h"`);
        codegen.line(`#include "jsb_transpiler.h"`);
        codegen.line(`#include "jsb_v8_helper.h"`);
        codegen.line(`#include "../internal/jsb_variant_info.h"`);
        codegen.line(`#include "../internal/jsb_variant_util.h"`);
        codegen.line(`namespace jsb`);
        codegen.line(`{`); // jsb:begin

        register.line("void register_primitive_bindings(class Realm* p_realm)");
        register.line("{");
        {
            for (let type of this.types) {
                if (ignored_type.has(type.type)) continue;
                new PrimitiveClassGen(type, new IndentWriter(codegen), new IndentWriter(register)).emit();
            }
        }
        register.line("}");
        register.finish();
        codegen.line(`}`); // jsb:end
        codegen.line(`#endif`); // JSB_WITH_STATIC_PRIMITIVE_TYPE_BINDINGS
        codegen.finish();
        codegen.close();
    }
}

export function exec(output_path?: string) {
    let gen = new Generator(editor.get_primitive_types(), output_path ?? "jsb_primitive_bindings_static.cpp");

    gen.emit();
}

if (require.main == module) {
    exec();
}