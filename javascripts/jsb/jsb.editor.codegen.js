"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
if (!jsb.TOOLS_ENABLED) {
    throw new Error("codegen is only allowed in editor mode");
}
//TODO remove all these lines after all primitive types implemented
const MockLines = [
    "class GodotError {}",
    "class Dictionary {}",
    "class Array {}",
    "class Rect2 {}",
    "class Rect2i {}",
    "class Vector2 {}",
    "class Vector2i {}",
    "class Vector3 {}",
    "class Vector3i {}",
    "class Vector4 {}",
    "class Vector4i {}",
    "class AABB {}",
    "class Plane {}",
    "class Basis {}",
    "class Color {}",
    "class NodePath {}",
    "class StringName {}",
    "class RID {}",
    "class Transform2D {}",
    "class Transform3D {}",
    "class Projection {}",
    "class Quaternion {}",
    "class PackedByteArray {}",
    "class PackedInt32Array {}",
    "class PackedInt64Array {}",
    "class PackedFloat32Array {}",
    "class PackedFloat64Array {}",
    "class PackedStringArray {}",
    "class PackedVector2Array {}",
    "class PackedVector3Array {}",
    "class PackedColorArray {}",
    "namespace Vector2 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }",
    "namespace Vector2i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }",
    "namespace Vector3 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }",
    "namespace Vector3i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }",
    "namespace Vector4 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z, AXIS_W } }",
    "namespace Vector4i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z, AXIS_W } }",
];
const KeywordReplacement = {
    ["default"]: "default_",
    ["let"]: "let_",
    ["var"]: "var_",
    ["const"]: "const_",
    ["of"]: "of_",
    ["for"]: "for_",
    ["in"]: "in_",
    ["out"]: "out_",
    ["with"]: "with_",
    ["break"]: "break_",
    ["else"]: "else_",
    ["enum"]: "enum_",
    ["class"]: "class_",
    ["string"]: "string_",
    ["Symbol"]: "Symbol_",
    ["typeof"]: "typeof_",
};
const PrimitiveTypes = {
    [jsb.GodotVariantType.NIL]: "any",
    [jsb.GodotVariantType.BOOL]: "boolean",
    [jsb.GodotVariantType.INT]: "number /*i64*/",
    [jsb.GodotVariantType.FLOAT]: "number /*f64*/",
    [jsb.GodotVariantType.STRING]: "string",
    // math types
    [jsb.GodotVariantType.VECTOR2]: "Vector2",
    [jsb.GodotVariantType.VECTOR2I]: "Vector2i",
    [jsb.GodotVariantType.RECT2]: "Rect2",
    [jsb.GodotVariantType.RECT2I]: "Rect2i",
    [jsb.GodotVariantType.VECTOR3]: "Vector3",
    [jsb.GodotVariantType.VECTOR3I]: "Vector3i",
    [jsb.GodotVariantType.TRANSFORM2D]: "Transform2D",
    [jsb.GodotVariantType.VECTOR4]: "Vector4",
    [jsb.GodotVariantType.VECTOR4I]: "Vector4i",
    [jsb.GodotVariantType.PLANE]: "Plane",
    [jsb.GodotVariantType.QUATERNION]: "Quaternion",
    [jsb.GodotVariantType.AABB]: "AABB",
    [jsb.GodotVariantType.BASIS]: "Basis",
    [jsb.GodotVariantType.TRANSFORM3D]: "Transform3D",
    [jsb.GodotVariantType.PROJECTION]: "Projection",
    // misc types
    [jsb.GodotVariantType.COLOR]: "Color",
    [jsb.GodotVariantType.STRING_NAME]: "StringName",
    [jsb.GodotVariantType.NODE_PATH]: "NodePath",
    [jsb.GodotVariantType.RID]: "RID",
    [jsb.GodotVariantType.OBJECT]: "Object",
    [jsb.GodotVariantType.CALLABLE]: "any /*CALLABLE*/",
    [jsb.GodotVariantType.SIGNAL]: "any /*SIGNAL*/",
    [jsb.GodotVariantType.DICTIONARY]: "Dictionary",
    [jsb.GodotVariantType.ARRAY]: "Array",
    // typed arrays
    [jsb.GodotVariantType.PACKED_BYTE_ARRAY]: "PackedByteArray",
    [jsb.GodotVariantType.PACKED_INT32_ARRAY]: "PackedInt32Array",
    [jsb.GodotVariantType.PACKED_INT64_ARRAY]: "PackedInt64Array",
    [jsb.GodotVariantType.PACKED_FLOAT32_ARRAY]: "PackedFloat32Array",
    [jsb.GodotVariantType.PACKED_FLOAT64_ARRAY]: "PackedFloat64Array",
    [jsb.GodotVariantType.PACKED_STRING_ARRAY]: "PackedStringArray",
    [jsb.GodotVariantType.PACKED_VECTOR2_ARRAY]: "PackedVector2Array",
    [jsb.GodotVariantType.PACKED_VECTOR3_ARRAY]: "PackedVector3Array",
    [jsb.GodotVariantType.PACKED_COLOR_ARRAY]: "PackedColorArray",
};
const RemapTypes = {
    ["Error"]: "GodotError",
};
const IgnoredTypes = new Set([
    "IPUnix",
    "GodotNavigationServer2D",
    "GodotPhysicsServer2D",
    "GodotPhysicsServer3D",
    "PhysicsServer2DExtension",
    "PhysicsServer3DExtension",
]);
const ReservedTypes = new Set([
    "Vector3.Axis",
]);
function replace(name) {
    const rep = KeywordReplacement[name];
    return typeof rep !== "undefined" ? rep : name;
}
class AbstractWriter {
    constructor() { }
    enum_(name) {
        if (name.indexOf('.') >= 0) {
            let layers = name.split('.');
            name = layers.splice(layers.length - 1)[0];
            return new EnumWriter(this.namespace_(layers.join(".")), name).auto();
        }
        return new EnumWriter(this, name);
    }
    namespace_(name) {
        return new NamespaceWriter(this, name);
    }
    class_(name, super_, singleton_mode) {
        return new ClassWriter(this, name, super_, singleton_mode);
    }
    // singleton_(info: jsb.editor.SingletonInfo): SingletonWriter {
    //     return new SingletonWriter(this, info);
    // }
    line_comment_(text) {
        this.line(`// ${text}`);
    }
}
const tab = "    ";
class IndentWriter extends AbstractWriter {
    constructor(base) {
        super();
        this._size = 0;
        this._base = base;
        this._lines = [];
    }
    get size() { return this._size; }
    get lineno() { return this._lines.length; }
    get types() { return this._base.types; }
    finish() {
        for (var line of this._lines) {
            this._base.line(tab + line);
        }
    }
    line(text) {
        this._lines.push(text);
        this._size += tab.length + text.length;
    }
}
class ModuleWriter extends IndentWriter {
    constructor(base, name) {
        super(base);
        this._name = name;
    }
    finish() {
        this._base.line(`declare module "${this._name}" {`);
        super.finish();
        this._base.line('}');
    }
}
class NamespaceWriter extends IndentWriter {
    constructor(base, name) {
        super(base);
        this._name = name;
    }
    finish() {
        if (this._lines.length == 0) {
            return;
        }
        this._base.line(`namespace ${this._name} {`);
        super.finish();
        this._base.line('}');
    }
}
class ClassWriter extends IndentWriter {
    constructor(base, name, super_, singleton_mode) {
        super(base);
        this._name = name;
        this._super = super_;
        this._singleton_mode = singleton_mode;
    }
    head() {
        if (typeof this._super !== "string" || this._super.length == 0) {
            return `class ${this._name}`;
        }
        return `class ${this._name} extends ${this._super}`;
    }
    make_method_prefix(method_info) {
        return this._singleton_mode || method_info.is_static ? "static " : "";
    }
    finish() {
        this._base.line(`${this.head()} {`);
        super.finish();
        this._base.line('}');
    }
    constant_(constant) {
        this.line(`static readonly ${constant.name} = ${constant.value}`);
    }
    make_typename(info) {
        if (info.class_name.length == 0) {
            const primitive_name = PrimitiveTypes[info.type];
            if (typeof primitive_name !== "undefined") {
                return primitive_name;
            }
            return `any /*unhandled: ${info.type}*/`;
        }
        const remap_name = RemapTypes[info.class_name];
        if (typeof remap_name !== "undefined") {
            return remap_name;
        }
        if (info.class_name in this.types.classes) {
            return info.class_name;
        }
        else {
            if (info.class_name.indexOf(".") >= 0) {
                const layers = info.class_name.split(".");
                if (layers.length == 2) {
                    const cls = this.types.classes[layers[0]];
                    if (typeof cls !== "undefined" && cls.enums.findIndex(v => v.name == layers[1]) >= 0) {
                        return info.class_name;
                    }
                }
            }
            if (info.class_name in this.types.globals) {
                return info.class_name;
            }
            if (info.class_name in this.types.singletons) {
                return info.class_name;
            }
            if (ReservedTypes.has(info.class_name)) {
                return info.class_name;
            }
            console.warn("undefined class", info.class_name);
            return `any /*${info.class_name}*/`;
        }
    }
    make_arg(info) {
        return `${replace(info.name)}: ${this.make_typename(info)}`;
    }
    make_args(method_info) {
        //TODO
        if (method_info.args_.length == 0) {
            return "";
        }
        return method_info.args_.map(it => this.make_arg(it)).join(", ");
    }
    make_return(method_info) {
        //TODO
        if (typeof method_info.return_ != "undefined") {
            return this.make_typename(method_info.return_);
        }
        return "void";
    }
    method_(method_info) {
        if (method_info.name.indexOf('/') >= 0 || method_info.name.indexOf('.') >= 0) {
            const args = this.make_args(method_info);
            const rval = this.make_return(method_info);
            const prefix = this.make_method_prefix(method_info);
            this.line(`${prefix}["${method_info.name}"]: (${args}) => ${rval}`);
            return;
        }
        const args = this.make_args(method_info);
        const rval = this.make_return(method_info);
        const prefix = this.make_method_prefix(method_info);
        this.line(`${prefix}${method_info.name}(${args}): ${rval}`);
    }
    function_(method_info) {
        const args = this.make_args(method_info);
        const rval = this.make_return(method_info);
        this.line(`function ${method_info.name}(${args}): ${rval}`);
    }
    signal_(signal_info) {
        this.line_comment_(`SIGNAL: ${signal_info.name}`);
    }
}
class EnumWriter extends IndentWriter {
    constructor(base, name) {
        super(base);
        this._auto = false;
        this._name = name;
    }
    /**
     * the base writer will also be marked as `finished` automatically by the current writer when it's `finished`.
     * NOTE usually used when `base` writer is fully managed by the current writer.
     */
    auto() {
        this._auto = true;
        return this;
    }
    finish() {
        if (this._lines.length != 0) {
            this._base.line(`enum ${this._name} {`);
            super.finish();
            this._base.line('}');
        }
        if (this._auto) {
            this._base.finish();
        }
    }
    element_(name, value) {
        this.line(`${name} = ${value},`);
    }
}
class FileWriter extends AbstractWriter {
    constructor(types, file) {
        super();
        this._size = 0;
        this._lineno = 0;
        this._types = types;
        this._file = file;
    }
    get size() { return this._size; }
    get lineno() { return this._lineno; }
    get types() { return this._types; }
    line(text) {
        this._file.store_line(text);
        this._size += text.length;
        this._lineno += 1;
    }
    finish() {
        this._file.flush();
    }
}
class FileSplitter {
    constructor(types, filePath) {
        this._types = types;
        this._file = godot_1.FileAccess.open(filePath, godot_1.FileAccess.ModeFlags.WRITE);
        this._toplevel = new ModuleWriter(new FileWriter(this._types, this._file), "godot");
        this._file.store_line("// AUTO-GENERATED");
        this._file.store_line('/// <reference no-default-lib="true"/>');
    }
    close() {
        this._toplevel.finish();
        this._file.flush();
        this._file.close();
    }
    get_writer() {
        return this._toplevel;
    }
    get_size() { return this._toplevel.size; }
    get_lineno() { return this._toplevel.lineno; }
}
class TypeDB {
    constructor() {
        this.singletons = {};
        this.classes = {};
        this.globals = {};
    }
}
// d.ts generator
class TSDCodeGen {
    constructor(outDir) {
        this._types = new TypeDB();
        this._split_index = 0;
        this._outDir = outDir;
        const classes = jsb.editor.get_classes();
        const singletons = jsb.editor.get_singletons();
        const globals = jsb.editor.get_global_constants();
        for (let cls of classes) {
            this._types.classes[cls.name] = cls;
        }
        for (let singleton of singletons) {
            this._types.singletons[singleton.name] = singleton;
        }
        for (let global_ of globals) {
            this._types.globals[global_.name] = global_;
        }
    }
    make_path(index) {
        const filename = `godot${index}.gen.d.ts`;
        if (typeof this._outDir !== "string" || this._outDir.length == 0) {
            return filename;
        }
        if (this._outDir.endsWith("/")) {
            return this._outDir + filename;
        }
        return this._outDir + "/" + filename;
    }
    new_splitter() {
        if (this._splitter !== undefined) {
            this._splitter.close();
        }
        const filename = this.make_path(this._split_index++);
        console.log("new writer", filename);
        this._splitter = new FileSplitter(this._types, filename);
        return this._splitter;
    }
    // the returned writer will be `finished` automatically
    split() {
        if (this._splitter == undefined) {
            return this.new_splitter().get_writer();
        }
        const len = this._splitter.get_size();
        const lineno = this._splitter.get_lineno();
        if (len > 1024 * 900 || lineno > 12000) {
            return this.new_splitter().get_writer();
        }
        return this._splitter.get_writer();
    }
    cleanup() {
        while (true) {
            const path = this.make_path(this._split_index++);
            if (!godot_1.FileAccess.file_exists(path)) {
                break;
            }
            console.warn("delete file", path);
            jsb.editor.delete_file(path);
        }
    }
    has_class(name) {
        return typeof this._types.classes[name] !== "undefined";
    }
    emit() {
        var _a;
        this.emit_mock();
        this.emit_singletons();
        this.emit_godot();
        this.emit_globals();
        (_a = this._splitter) === null || _a === void 0 ? void 0 : _a.close();
        this.cleanup();
    }
    emit_mock() {
        const cg = this.split();
        for (let line of MockLines) {
            cg.line(line);
        }
    }
    emit_singletons() {
        const cg = this.split();
        for (let singleton_name in this._types.singletons) {
            const singleton = this._types.singletons[singleton_name];
            const cls = this._types.classes[singleton.class_name];
            if (typeof cls !== "undefined") {
                this.emit_godot_class(cg, cls, true);
            }
            else {
                cg.line_comment_(`ERROR: singleton ${singleton.name} without class info ${singleton.class_name}`);
            }
        }
    }
    emit_globals() {
        for (let global_name in this._types.globals) {
            const global_obj = this._types.globals[global_name];
            const cg = this.split();
            const ns = cg.enum_(global_obj.name);
            for (let name in global_obj.values) {
                ns.element_(name, global_obj.values[name]);
            }
            ns.finish();
        }
    }
    emit_godot() {
        for (let class_name in this._types.classes) {
            const cls = this._types.classes[class_name];
            if (IgnoredTypes.has(class_name)) {
                continue;
            }
            if (typeof this._types.singletons[class_name] !== "undefined") {
                console.log("ignored singleton class", class_name);
                continue;
            }
            this.emit_godot_class(this.split(), cls, false);
        }
    }
    emit_godot_class(cg, cls, singleton_mode) {
        const ignored_consts = new Set();
        const class_ns_cg = cg.namespace_(cls.name);
        for (let enum_info of cls.enums) {
            const enum_cg = class_ns_cg.enum_(enum_info.name);
            for (let name of enum_info.literals) {
                const value = cls.constants.find(v => v.name == name).value;
                enum_cg.element_(name, value);
                ignored_consts.add(name);
            }
            enum_cg.finish();
        }
        class_ns_cg.finish();
        const class_cg = cg.class_(cls.name, this.has_class(cls.super) ? cls.super : "", singleton_mode);
        for (let constant of cls.constants) {
            if (!ignored_consts.has(constant.name)) {
                class_cg.constant_(constant);
            }
        }
        for (let method_info of cls.methods) {
            class_cg.method_(method_info);
        }
        for (let signal_info of cls.signals) {
            class_cg.signal_(signal_info);
        }
        class_cg.finish();
    }
}
exports.default = TSDCodeGen;
//# sourceMappingURL=jsb.editor.codegen.js.map