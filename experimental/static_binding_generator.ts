import { FileAccess, type_string, Variant } from "godot";
import { editor } from "godot-jsb";

const TAB = "    ";
const Util = {
    to_native: function (type: string) { return `StaticBindingUtil<${type}>::get`; },
    to_script: function (type: string) { return `StaticBindingUtil<${type}>::set`; },
    to_this: function (type: string) { return `PrimitiveInstanceUtil<${type}>::get`; },
}
const HEADERS = [
    "jsb_class_info.h",
    "jsb_transpiler.h",
    "jsb_v8_helper.h",
    "jsb_static_binding_util.h",
    "../internal/jsb_variant_info.h",
    "../internal/jsb_variant_util.h",
]

function param_(index: number) { return `loc_${index}`; }

function get_cpp_operator(name: string): string | undefined {
    if (name == "EQUAL") return "==";
    if (name == "NOT_EQUAL") return "!=";
    if (name == "LESS") return "<";
    if (name == "LESS_EQUAL") return "<=";
    if (name == "GREATER") return ">";
    if (name == "GREATER_EQUAL") return ">=";
    if (name == "ADD") return "+";
    if (name == "SUBTRACT") return "-";
    if (name == "MULTIPLY") return "*";
    if (name == "DIVIDE") return "/";
    if (name == "NEGATE") return "-";
    if (name == "POSITIVE") return "+";
    if (name == "MODULE") return "%";

    // --- NOT SUPPORTED ---
    // POWER
    // SHIFT_LEFT
    // SHIFT_RIGHT
    // BIT_AND
    // BIT_OR
    // BIT_XOR
    // BIT_NEGATE
    // AND
    // OR
    // XOR
    // NOT
    // IN
}

function to_cpp_type(type: Variant.Type) {
    if (type == Variant.Type.TYPE_OBJECT) {
        return type_string(type) + "*";
    }
    return type_string(type);
}

interface IWriter {
    get level(): number;
    line(text: string): void;
    finish(): void;
}

interface ITypeRegister {
    type: Variant.Type;
    method_name: string;
}

interface IConstructor {
    argc: number;
    overloads: Array<editor.ConstructorInfo>;
}

interface IOperator {
    name: string;
    is_unary: boolean;

    overloads: Array<editor.OperatorInfo>;
}

interface GeneratedMethod {
    method_name: string;
    method_info: editor.MethodBind;
}

interface GeneratedProperty {
    // property name
    name: string;

    getter_name: string;
    setter_name?: string;
}

interface GeneratedOperator {
    // generated method name (C++)
    method_name: string;

    // method name (javascript)
    op_name: string;
}

class FileWriter implements IWriter {
    private file: FileAccess;

    constructor(filename: string) {
        this.file = FileAccess.open(filename, FileAccess.ModeFlags.WRITE);
    }

    get level() { return 0; }

    comment(text: string): this {
        this.line("// " + text);
        return this;
    }

    include(file: string): this {
        this.line(`#include "${file}"`);
        return this;
    }

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

class RedirectWriter implements IWriter {
    protected parent: IWriter;
    protected finish_parent: boolean;

    constructor(parent: IWriter, finish_parent = false) {
        this.parent = parent;
        this.finish_parent = finish_parent;
    }

    get level() { return this.parent.level; }

    comment(text: string): this {
        this.line("// " + text);
        return this;
    }

    include(file: string): this {
        this.line(`#include "${file}"`);
        return this;
    }

    line(text: string): this {
        this.parent.line(text);
        return this;
    }

    lines(...lines: string[]): this {
        for (let line of lines) {
            this.line(line);
        }
        return this;
    }

    finish(): void {
        if (this.finish_parent) {
            this.parent.finish();
        }
    }
}

class IndentWriter extends RedirectWriter {
    get level() { return this.parent.level + 1; }

    line(text: string) {
        this.parent.line(TAB + text);
        return this;
    }
}

class StaticBindMethodWriter extends IndentWriter {
    constructor(parent: IWriter) {
        super(parent);

        this.parent.line(`static NativeClassID static_bind(const FBindingEnv& p_env)`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`}`);
        super.finish();
    }
}

class StructWriter extends IndentWriter {
    constructor(parent: IWriter, name: string) {
        super(parent);

        this.parent.line(`struct ${name}`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`};`);
        super.finish();
    }
}

class V8FunctionWriter extends IndentWriter {
    constructor(parent: IWriter, name: string) {
        super(parent);

        this.parent.line(`static void ${name}(const v8::FunctionCallbackInfo<v8::Value>& info)`);
        this.parent.line(`{`);
        this.line("v8::Isolate* isolate = info.GetIsolate();");
        this.line("v8::Local<v8::Context> context = isolate->GetCurrentContext();");
    }

    finish(): void {
        this.parent.line(`}`);
        super.finish();
    }
}

class V8LazyDataPropertyWriter extends IndentWriter {
    constructor(parent: IWriter, name: string) {
        super(parent);

        this.parent.line(`static void ${name}(v8::Local<v8::Name> name, const v8::PropertyCallbackInfo<v8::Value>& info)`);
        this.parent.line(`{`);
        this.line("v8::Isolate* isolate = info.GetIsolate();");
        this.line("v8::Local<v8::Context> context = isolate->GetCurrentContext();");
    }

    finish(): void {
        this.parent.line(`}`);
        super.finish();
    }
}

class ConditionalCompiledWriter extends RedirectWriter {
    private preprocessor: string;

    constructor(parent: IWriter, name: string) {
        super(parent);
        this.preprocessor = name;

        this.parent.line(`#if ${this.preprocessor}`);
    }

    finish(): void {
        this.parent.line(`#endif // ${this.preprocessor}`);
        super.finish();
    }
}

class NamespaceWriter extends IndentWriter {
    private ns: string;

    constructor(parent: IWriter, name: string) {
        super(parent);
        this.ns = name;

        this.parent.line(`namespace ${this.ns}`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`} // ${this.ns}`);
    }
}

class CFunctionWriter extends IndentWriter {
    constructor(parent: IWriter, sig: string) {
        super(parent);

        this.parent.line(`${sig}`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`}`);
    }
}

class BlockWriter extends IndentWriter {
    constructor(parent: IWriter) {
        super(parent);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`}`);
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
    constructor(parent: IWriter) {
        super(parent);
        this.parent.line(`do`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`} while (false);`);
    }
}

class IfWriter extends IndentWriter {
    constructor(parent: IWriter, cond: string, expr = "if") {
        super(parent);
        this.parent.line(`${expr} (${cond})`);
        this.parent.line(`{`);
    }

    finish(): void {
        this.parent.line(`}`);
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

class SharedFinalizerAccessGen {
    parent: IWriter;

    constructor(writer: IWriter) {
        this.parent = writer;
    }

    finish() {
        const self_vt = `GetTypeInfo<T>::VARIANT_TYPE`;
        this.parent.line(`
    template<typename T>
    struct FinalizerAccess
    {
        static void dealloc(Environment* environment, void* pointer, bool p_persistent)
        {
            Variant* self = (Variant*) pointer;
            jsb_checkf(Variant::can_convert(self->get_type(), ${self_vt}), "variant type can't convert to %s from %s", Variant::get_type_name(${self_vt}), Variant::get_type_name(self->get_type()));
            if (!p_persistent)
            {
                Environment::dealloc_variant(self);
            }
        }
    };
        `)
    }
}
class SharedConstantAccessorGen {
    parent: IWriter;

    constructor(writer: IWriter) {
        this.parent = writer;
    }

    finish() {
        const self_vt = `GetTypeInfo<T>::VARIANT_TYPE`;
        this.parent.line(`
    template<typename T>
    struct ConstantAccess
    {
        static void _get(v8::Local<v8::Name> name, const v8::PropertyCallbackInfo<v8::Value>& info)
        {
            v8::Isolate* isolate = info.GetIsolate();
            v8::Local<v8::Context> context = isolate->GetCurrentContext();
            // temporarily use reflection version for simplicity
            const StringName constant = V8Helper::to_string(isolate, name);
            bool r_valid;
            const Variant constant_value = Variant::get_constant_value(${self_vt}, constant, &r_valid);
            jsb_check(r_valid);
            v8::Local<v8::Value> rval;
            if (!Realm::gd_var_to_js(isolate, context, constant_value, rval))
            {
                jsb_throw(isolate, "bad translate");
                return;
            }
            info.GetReturnValue().Set(rval);
        }
    };
        `)
    }
}

class SharedIndexAccessorGen {
    parent: IWriter;

    constructor(writer: IWriter) {
        this.parent = writer;
    }

    finish() {
        const self_vt = `GetTypeInfo<T>::VARIANT_TYPE`;
        this.parent.line(`
    template<typename T>
    struct IndexAccess
    {
        static void _set_indexed(const v8::FunctionCallbackInfo<v8::Value>& info)
        {
            v8::Isolate* isolate = info.GetIsolate();
            v8::Local<v8::Context> context = isolate->GetCurrentContext();
            jsb_check(info.This()->InternalFieldCount() == IF_VariantFieldCount);
            const Variant::Type element_type = Variant::get_indexed_element_type(${self_vt});
            if (info.Length() != 2
                || !info[0]->IsInt32()
                || !Realm::can_convert_strict(isolate, context, info[1], element_type))
            {
                jsb_throw(isolate, "bad params");
                return;
            }
            const int32_t index = info[0].As<v8::Int32>()->Value();
            Variant value;
            if (!Realm::js_to_gd_var(isolate, context, info[1], element_type, value))
            {
                jsb_throw(isolate, "bad value");
                return;
            }
            bool r_valid, r_oob;
            Variant* self = (Variant*) info.This()->GetAlignedPointerFromInternalField(IF_Pointer);
            self->set_indexed(index, value, r_valid, r_oob);
            if (!r_valid || r_oob)
            {
                jsb_throw(isolate, "invalid or out of bound");
                return;
            }
        }

        static void _get_indexed(const v8::FunctionCallbackInfo<v8::Value>& info)
        {
            v8::Isolate* isolate = info.GetIsolate();
            v8::Local<v8::Context> context = isolate->GetCurrentContext();
            jsb_check(info.This()->InternalFieldCount() == IF_VariantFieldCount);
            if (info.Length() != 1
                || !info[0]->IsInt32())
            {
                jsb_throw(isolate, "bad params");
                return;
            }
            const int32_t index = info[0].As<v8::Int32>()->Value();
            bool r_valid, r_oob;
            const Variant* self = (Variant*) info.This()->GetAlignedPointerFromInternalField(IF_Pointer);
            const Variant value = self->get_indexed(index, r_valid, r_oob);
            if (!r_valid || r_oob)
            {
                jsb_throw(isolate, "invalid or out of bound");
                return;
            }
            v8::Local<v8::Value> r_val;
            // nil type is treated as any type
            if (const Variant::Type element_type = Variant::get_indexed_element_type(${self_vt});
                !Realm::gd_var_to_js(isolate, context, value, element_type, r_val))
            {
                jsb_throw(isolate, "bad translation");
                return;
            }
            info.GetReturnValue().Set(r_val);
        }
    };
            `)
    }
}

class PrimitiveClassGen {
    private codegen: IWriter;
    private type: editor.PrimitiveClassInfo;

    constructor(type: editor.PrimitiveClassInfo, codegen: IWriter) {
        this.type = type;
        this.codegen = codegen;
    }

    private emit_constructor_body(body: IWriter, ctor: IConstructor, index: number) {
        const inner = new IfWriter(body, `v8_argc == ${ctor.argc}`, index == 0 ? "if" : "else if");
        if (ctor.overloads.length == 1) {
            let args: Array<string> = [];
            ctor.overloads[0].arguments.forEach((arg, index) => {
                const arg_type = to_cpp_type(arg.type);
                const arg_name = param_(index);
                inner.line(`${arg_type} ${arg_name};`);
                IF(inner, `!${Util.to_native(arg_type)}(isolate, context, info[${index}], ${arg_name})`).THEN(
                    `jsb_throw(isolate, "bad param at ${index}");`,
                    `return;`
                );
                args.push(arg_name);
            });
            inner.line(`Variant* instance = Environment::alloc_variant();`);
            inner.line(`*instance = ${to_cpp_type(this.type.type)}(${args.join(", ")});`);
            inner.line(`Environment::wrap(isolate)->bind_valuetype(class_id, instance, self);`);
        } else {
            ctor.overloads.forEach((variant => {
                let args: Array<string> = [];
                let dw = new DoWriter(inner);
                variant.arguments.forEach((arg, index) => {
                    const arg_type = to_cpp_type(arg.type);
                    const arg_name = param_(index);
                    dw.line(`${arg_type} ${arg_name};`);
                    IF(dw, `!${Util.to_native(arg_type)}(isolate, context, info[${index}], ${arg_name})`).THEN(
                        `break;`
                    );
                    args.push(arg_name);
                });
                dw.line(`Variant* instance = Environment::alloc_variant();`);
                dw.line(`*instance = ${to_cpp_type(this.type.type)}(${args.join(", ")});`);
                dw.line(`Environment::wrap(isolate)->bind_valuetype(class_id, instance, self);`);
                dw.finish();
            }));
        }
        inner.finish();
    }

    emit_combined_constructor(struct: IWriter) {
        let func = new V8FunctionWriter(struct, "constructor");
        IF(func, "!info.IsConstructCall()").THEN(
            `jsb_throw(isolate, "bad constructor call");`,
            `return;`,
        );
        func.line("v8::Local<v8::Object> self = info.This();");
        func.line(`const int v8_argc = info.Length();`);
        func.line(`const NativeClassID class_id = (const NativeClassID) info.Data().As<v8::Int32>()->Value();`);
        let combined: Array<IConstructor> = [];
        this.type.constructors.sort((a, b) => a.arguments.length - b.arguments.length);
        this.type.constructors.forEach(value => {
            if (combined.length == 0 || combined[combined.length - 1].argc != value.arguments.length) {
                combined.push({ argc: value.arguments.length, overloads: [value] });
            } else {
                combined[combined.length - 1].overloads.push(value);
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
        let op_call: string;
        const self_type = to_cpp_type(this.type.type);
        if (method.is_static) {
            op_call = `${self_type}::`;
        } else {
            const qualifier = method.is_const ? "const " : "";
            func.line(`${self_type}* thiz = nullptr;`);
            IF(func, `!${Util.to_this(self_type)}(isolate, context, info.This(), thiz)`).THEN(
                `jsb_throw(isolate, "failed to get this");`,
                `return;`
            )
            op_call = `((${qualifier}${self_type}*) thiz)->`;
        }

        method.args_.forEach((value, index) => {
            let arg_name = param_(index);
            let arg_type = to_cpp_type(value.type);
            func.line(`${arg_type} ${arg_name};`);
            args.push(arg_name);
            IF(func, `!${Util.to_native(arg_type)}(isolate, context, info[${index}], ${arg_name})`).THEN(
                `jsb_throw(isolate, "bad param at ${index}");`,
                `return;`
            );
        });
        if (typeof method.return_ != "undefined" && method.return_.type != Variant.Type.TYPE_NIL) {
            const return_type = to_cpp_type(method.return_.type);
            func.line(`v8::Local<v8::Value> rval;`);
            IF(func, `${Util.to_script(return_type)}(isolate, context, ${op_call}${method.name}(${args.join(", ")}), rval)`).THEN(
                `jsb_throw(isolate, "failed to translate return value");`,
                `return;`
            );
            func.line(`info.GetReturnValue().Set(rval);`);
        } else {
            func.line(`${op_call}${method.name}(${args.join(", ")});`);
        }
        func.finish();
        generated_methods.push({ method_name: name, method_info: method });
    }

    emit_property(struct: IWriter, info: editor.PrimitiveGetSetInfo, generated_methods: Array<GeneratedProperty>) {
        const generated: GeneratedProperty = {
            name: info.name,
            getter_name: `get_${info.name}`,
            setter_name: `set_${info.name}`,
        }
        const arg_type = to_cpp_type(info.type);
        const self_type = to_cpp_type(this.type.type);
        {
            let getter = new V8FunctionWriter(struct, generated.getter_name);
            getter.line(`const ${self_type}* thiz = nullptr;`);
            IF(getter, `!${Util.to_this(self_type)}(isolate, context, info.This(), thiz)`).THEN(
                `jsb_throw(isolate, "failed to get this");`,
                `return;`
            )
            getter.line(`v8::Local<v8::Value> rval;`);
            IF(getter, `${Util.to_script(arg_type)}(isolate, context, thiz->get_${info.name}(), rval)`).THEN(
                `jsb_throw(isolate, "failed to translate return value");`,
                `return;`
            );
            getter.line(`info.GetReturnValue().Set(rval);`);
            getter.finish();
        }
        if (typeof generated.setter_name !== "undefined") {
            let setter = new V8FunctionWriter(struct, generated.setter_name);
            setter.line(`${arg_type} rval;`);
            IF(setter, `!${Util.to_native(arg_type)}(isolate, context, info[0], rval)`).THEN(
                `jsb_throw(isolate, "failed to translate return value");`,
                `return;`
            );
            setter.line(`thiz->set_${info.name}(rval);`)
            setter.finish();
        }
        generated_methods.push(generated)
    }

    emit_combined_operator(struct: IWriter, generated_operators: Array<GeneratedOperator>) {
        let map: Map<string, IOperator> = new Map();
        this.type.operators.forEach(value => {
            let operator = map.get(value.name);
            if (typeof operator === "undefined") {
                operator = { name: value.name, is_unary: value.right_type == Variant.Type.TYPE_NIL, overloads: [] };
                map.set(value.name, operator);
            }
            console.assert(operator.is_unary == (value.right_type == Variant.Type.TYPE_NIL));
            operator.overloads.push(value);
        })

        for (let kv of map) {
            if (kv[1].is_unary) {
                console.assert(kv[1].overloads.length == 1, "overloading on unary operator is invalid");
                this.emit_unary_operator_body(struct, kv[1].overloads[0], generated_operators);
            } else {
                this.emit_binary_operator_body(struct, kv[1], generated_operators);
            }
        }
    }

    emit_binary_operator_body(struct: IWriter, info: IOperator, generated_operators: Array<GeneratedOperator>) {
        const generated: GeneratedOperator = {
            method_name: `op_${info.name}`,
            op_name: info.name,
        }
        let func = new V8FunctionWriter(struct, generated.method_name);
        const cpp_op = get_cpp_operator(generated.op_name);

        if (info.overloads.length == 1) {
            // no overload
            let operator = info.overloads[0];
            let left_name = param_(0);
            let right_name = param_(1);
            let left_type = to_cpp_type(operator.left_type);
            let right_type = to_cpp_type(operator.right_type);
            let return_type = to_cpp_type(operator.return_type);
            func.line(`${left_type} ${left_name};`);
            func.line(`${right_type} ${right_name};`);
            IF(func, `!${Util.to_native(left_type)}(isolate, context, info[0], ${left_name}) || !${Util.to_native(right_type)}(isolate, context, info[1], ${right_name})`).THEN(
                `jsb_throw(isolate, "bad param");`,
                `return;`
            );
            func.line(`${return_type} return_value = ${left_name} ${cpp_op} ${right_name};`);
            func.line(`v8::Local<v8::Value> rval;`);
            IF(func, `${Util.to_script(return_type)}(isolate, context, return_value, rval)`).THEN(
                `jsb_throw(isolate, "failed to translate return value");`,
                `return;`
            );
            func.line(`info.GetReturnValue().Set(rval);`);

        } else {
            // overloaded
            let left_name = param_(0);
            let right_name = param_(1);

            for (let operator of info.overloads) {
                let dw = new DoWriter(func);
                let left_type = to_cpp_type(operator.left_type);
                let right_type = to_cpp_type(operator.right_type);
                let return_type = to_cpp_type(operator.return_type);
                dw.line(`${left_type} ${left_name};`);
                dw.line(`${right_type} ${right_name};`);
                IF(dw, `!${Util.to_native(left_type)}(isolate, context, info[0], ${left_name}) || !${Util.to_native(right_type)}(isolate, context, info[1], ${right_name})`).
                    THEN("break;");
                dw.line(`${return_type} return_value = ${left_name} ${cpp_op} ${right_name};`);
                dw.line(`v8::Local<v8::Value> rval;`);
                IF(dw, `${Util.to_script(return_type)}(isolate, context, return_value, rval)`).THEN(
                    `jsb_throw(isolate, "failed to translate return value");`,
                    `return;`
                );
                dw.line(`info.GetReturnValue().Set(rval);`);
                dw.finish();
            }
            func.line(`jsb_throw(isolate, "no suitable overload");`);
        }
        func.finish();
        generated_operators.push(generated)
    }

    emit_unary_operator_body(struct: IWriter, info: editor.OperatorInfo, generated_operators: Array<GeneratedOperator>) {
        const generated: GeneratedOperator = {
            method_name: `op_${info.name}`,
            op_name: info.name,
        }
        let func = new V8FunctionWriter(struct, generated.method_name);
        const cpp_op = get_cpp_operator(generated.op_name);
        console.assert(typeof cpp_op !== "undefined", "NOT IMPLEMENTED");
        // no overload
        let arg_name = param_(0);
        let arg_type = to_cpp_type(info.left_type);
        let return_type = to_cpp_type(info.return_type);
        func.line(`${arg_type} ${arg_name};`);
        IF(func, `!${Util.to_native(arg_type)}(isolate, context, info[0], ${arg_name})`).THEN(
            `jsb_throw(isolate, "bad param");`,
            `return;`
        );
        func.line(`${return_type} return_value = ${cpp_op}${arg_name};`);
        func.line(`v8::Local<v8::Value> rval;`);
        IF(func, `${Util.to_script(return_type)}(isolate, context, return_value, rval)`).THEN(
            `jsb_throw(isolate, "failed to translate return value");`,
            `return;`
        );
        func.line(`info.GetReturnValue().Set(rval);`);
        func.finish();
        generated_operators.push(generated)
    }

    emit_lazy_constant(writer: IWriter) {
        let func = new V8LazyDataPropertyWriter(writer, `_get_constant_value_lazy`);
        func.comment("temporarily use reflection version for simplicity");
        func.line(`const StringName constant = V8Helper::to_string(isolate, name);`);
        func.line(`bool r_valid;`);
        func.line(`const Variant constant_value = Variant::get_constant_value((Variant::Type) ${this.type.type}, constant, &r_valid);`);
        func.line(`jsb_check(r_valid);`);
        func.line(`v8::Local<v8::Value> rval;`);
        IF(func, `!Realm::gd_var_to_js(isolate, context, constant_value, rval)`).THEN(
            `jsb_throw(isolate, "bad translate");`,
            `return;`
        );
        func.line(`info.GetReturnValue().Set(rval);`);
        func.finish();
    }

    emit_key_accessor(writer: IWriter) {
        writer.line(`
            static void _set_keyed(const v8::FunctionCallbackInfo<v8::Value>& info)
            {
                v8::Isolate* isolate = info.GetIsolate();
                v8::Local<v8::Context> context = isolate->GetCurrentContext();
                jsb_check(info.This()->InternalFieldCount() == IF_VariantFieldCount);
                if (info.Length() != 2)
                {
                    jsb_throw(isolate, "bad params");
                    return;
                }

                //TODO it's restricted since we don't know anything about the type
                Variant key;
                Variant value;
                if (!Realm::js_to_gd_var(isolate, context, info[0], key)
                    || !Realm::js_to_gd_var(isolate, context, info[1], value))
                {
                    jsb_throw(isolate, "bad value");
                    return;
                }
                bool r_valid;
                Variant* self = (Variant*) info.This()->GetAlignedPointerFromInternalField(IF_Pointer);
                self->set_keyed(key, value, r_valid);
                if (!r_valid)
                {
                    jsb_throw(isolate, "invalid call");
                    return;
                }
            }

            static void _get_keyed(const v8::FunctionCallbackInfo<v8::Value>& info)
            {
                v8::Isolate* isolate = info.GetIsolate();
                v8::Local<v8::Context> context = isolate->GetCurrentContext();
                jsb_check(info.This()->InternalFieldCount() == IF_VariantFieldCount);
                if (info.Length() != 1)
                {
                    jsb_throw(isolate, "bad params");
                    return;
                }
                Variant key;
                if (!Realm::js_to_gd_var(isolate, context, info[0], key))
                {
                    jsb_throw(isolate, "bad value");
                    return;
                }
                bool r_valid;
                const Variant* self = (Variant*) info.This()->GetAlignedPointerFromInternalField(IF_Pointer);
                const Variant value = self->get_keyed(key, r_valid);
                if (!r_valid)
                {
                    jsb_throw(isolate, "invalid key?");
                    return;
                }
                v8::Local<v8::Value> r_val;
                if (!Realm::gd_var_to_js(isolate, context, value, r_val))
                {
                    jsb_throw(isolate, "bad translation");
                    return;
                }
                info.GetReturnValue().Set(r_val);
            }
            `)
    }

    emit(): ITypeRegister {
        const self_type = to_cpp_type(this.type.type);
        let struct = new StructWriter(this.codegen, `${this.type.name}StaticBinding`);
        let generated_methods: Array<GeneratedMethod> = [];
        let generated_properties: Array<GeneratedProperty> = [];
        let generated_operators: Array<GeneratedOperator> = [];

        this.emit_combined_constructor(struct);
        this.emit_lazy_constant(struct);
        this.type.methods.forEach(value => this.emit_method(struct, value, generated_methods));
        this.type.properties.forEach(value => this.emit_property(struct, value, generated_properties));
        this.emit_combined_operator(struct, generated_operators);
        if (this.type.is_keyed) {
            this.emit_key_accessor(struct);
        }

        {
            let bind = new StaticBindMethodWriter(struct);

            bind.line(`const StringName& class_name = p_env.type_name;`);
            bind.line(`const NativeClassID class_id = p_env.environment->add_class(NativeClassType::GodotPrimitive, class_name);`);

            // constructor (all overrides in one)
            bind.comment("constructor");
            bind.line("v8::Local<v8::FunctionTemplate> function_template = v8::FunctionTemplate::New(p_env.isolate, &constructor, v8::Int32::New(p_env.isolate, class_id));");
            bind.line("function_template->InstanceTemplate()->SetInternalFieldCount(IF_VariantFieldCount);");
            bind.line("function_template->SetClassName(p_env.environment->get_string_value(class_name));");
            bind.line("v8::Local<v8::ObjectTemplate> prototype_template = function_template->PrototypeTemplate();");

            // methods
            bind.comment("methods");
            generated_methods.forEach(value => {
                if (value.method_info.is_static) {
                    bind.line(`function_template->Set(V8Helper::to_string(p_env.isolate, "${value.method_info.name}"), v8::FunctionTemplate::New(p_env.isolate, &${value.method_name}));`);
                } else {
                    bind.line(`prototype_template->Set(V8Helper::to_string(p_env.isolate, "${value.method_info.name}"), v8::FunctionTemplate::New(p_env.isolate, &${value.method_name}));`);
                }
            });

            // enums
            let enum_constants = new Set<string>();
            for (let enum_info of this.type.enums ?? []) {
                bind.comment("enums");
                let block = new BlockWriter(bind);
                block.line(`v8::Local<v8::ObjectTemplate> enum_obj = v8::ObjectTemplate::New(p_env.isolate);`);
                block.line(`function_template->Set(V8Helper::to_string(p_env.isolate, "${enum_info.name}"), enum_obj);`);
                for (let enum_item of enum_info.literals) {
                    let enum_value = this.type.constants!.find(v => v.name == enum_item)!.value;
                    block.line(`enum_obj->Set(V8Helper::to_string(p_env.isolate, "${enum_item}"), v8::Int32::New(p_env.isolate, ${enum_value}));`);
                    enum_constants.add(enum_item);
                }
                block.finish();
            }

            // constants
            if (typeof this.type.constants !== "undefined") {
                bind.comment("constants");
                let block = new BlockWriter(bind);
                for (let const_info of this.type.constants) {
                    // skip constants exported as enum 
                    if (enum_constants.has(const_info.name)) continue;

                    switch (const_info.type) {
                        case Variant.Type.TYPE_FLOAT:
                            block.line(`[NOT_IMPLEMENTED] SET_CONST_NUMBER(${const_info.name}, ${const_info.value});`);
                            break;
                        case Variant.Type.TYPE_INT:
                            block.line(`[NOT_IMPLEMENTED] SET_CONST_INT(${const_info.name}, ${const_info.value});`);
                            break;
                        default:
                            block.line(`function_template->SetLazyDataProperty(V8Helper::to_string(p_env.isolate, "${const_info.name}"), &ConstantAccess<${self_type}>::_get);`);
                            break;
                    }
                }
                block.finish();
            }

            // operators
            bind.comment("operators");
            generated_operators.forEach(value => {
                bind.line(`function_template->Set(V8Helper::to_string(p_env.isolate, "${value.op_name}"), v8::FunctionTemplate::New(p_env.isolate, &${value.method_name}));`)
            })

            // properties (getset)
            bind.comment("properties (getset)");
            generated_properties.forEach(value => {
                bind.line(`prototype_template->SetAccessorProperty(V8Helper::to_string(p_env.isolate, "${value.name}"),`);

                let indent = new IndentWriter(bind);
                indent.line(`v8::FunctionTemplate::New(p_env.isolate, &${value.getter_name}),`);
                if (typeof value.setter_name !== "undefined") {
                    indent.line(`v8::FunctionTemplate::New(p_env.isolate, &${value.setter_name})`);
                }
                indent.finish();
                bind.line(");")
            })

            // indexed accessor
            if (typeof this.type.element_type != "undefined") {
                bind.comment("indexed accessor");
                bind.line(`prototype_template->Set(V8Helper::to_string(p_env.isolate, "set_indexed"), v8::FunctionTemplate::New(p_env.isolate, &IndexAccess<${self_type}>::_set_indexed));`);
                bind.line(`prototype_template->Set(V8Helper::to_string(p_env.isolate, "get_indexed"), v8::FunctionTemplate::New(p_env.isolate, &IndexAccess<${self_type}>::_get_indexed));`);
            }

            // keyed accessor
            if (this.type.is_keyed) {
                bind.comment("keyed accessor");
                bind.line(`prototype_template->Set(V8Helper::to_string(p_env.isolate, "set_keyed"), v8::FunctionTemplate::New(p_env.isolate, &_set_keyed));`);
                bind.line(`prototype_template->Set(V8Helper::to_string(p_env.isolate, "get_keyed"), v8::FunctionTemplate::New(p_env.isolate, &_get_keyed));`);
            }

            bind.comment("wind up");
            BLOCK(bind)(
                "NativeClassInfo& class_info = p_env.environment->get_native_class(class_id);",
                `class_info.finalizer = &FinalizerAccess<${self_type}>::dealloc;`,
                "class_info.template_.Reset(p_env.isolate, function_template);",
                "class_info.set_function(p_env.isolate, function_template->GetFunction(p_env.context).ToLocalChecked());",
                "jsb_check(class_info.template_ == function_template);",
                "jsb_check(!class_info.template_.IsEmpty());",
            );

            bind.line(`return class_id;`);
            bind.finish();
        }
        struct.finish();

        return { type: this.type.type, method_name: `${this.type.name}StaticBinding::static_bind` };
    }
}

class Generator {
    private filepath: string;
    private types: editor.PrimitiveClassInfo[];

    constructor(types: editor.PrimitiveClassInfo[], filepath: string) {
        this.types = types;
        this.filepath = filepath;
    }

    emit() {
        let ignored_types = new Set([
            Variant.Type.TYPE_NIL,
            Variant.Type.TYPE_BOOL,
            Variant.Type.TYPE_INT,
            Variant.Type.TYPE_FLOAT,
            Variant.Type.TYPE_STRING,
            Variant.Type.TYPE_STRING_NAME,
            Variant.Type.TYPE_OBJECT,
        ]);
        const filename = "jsb_primitive_bindings_static";
        let file_writer = new FileWriter(this.filepath + filename + ".cpp");

        file_writer.comment(`AUTO-GENERATED`);
        file_writer.include(`${filename}.h`);
        {
            let codegen = new ConditionalCompiledWriter(file_writer, "JSB_WITH_STATIC_BINDINGS");

            HEADERS.forEach(value => codegen.include(value));
            let ns = new NamespaceWriter(codegen, "jsb");
            let generated_register: Array<ITypeRegister> = [];
            new SharedFinalizerAccessGen(ns).finish();
            new SharedConstantAccessorGen(ns).finish();
            new SharedIndexAccessorGen(ns).finish();
            for (let type of this.types) {
                if (ignored_types.has(type.type)) continue;
                generated_register.push(new PrimitiveClassGen(type, ns).emit());
            }
            let binding = new CFunctionWriter(ns, "void register_primitive_bindings_static(class Realm* p_realm)");
            for (let register of generated_register) {
                binding.line(`p_realm->add_class_register((Variant::Type) ${register.type}, &${register.method_name});`);
            }
            binding.finish();
            ns.finish();
            codegen.finish();
        }
        file_writer.finish();
        file_writer.close();
    }
}

export function exec(output_path?: string) {
    let gen = new Generator(editor.get_primitive_types(), output_path ?? "");

    gen.emit();
}

if (require.main == module) {
    exec();
}