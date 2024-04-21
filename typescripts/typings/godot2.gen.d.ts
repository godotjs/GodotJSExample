// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    namespace VisualShaderNodeColorOp {
        enum Operator {
            OP_SCREEN = 0,
            OP_DIFFERENCE = 1,
            OP_DARKEN = 2,
            OP_LIGHTEN = 3,
            OP_OVERLAY = 4,
            OP_DODGE = 5,
            OP_BURN = 6,
            OP_SOFT_LIGHT = 7,
            OP_HARD_LIGHT = 8,
            OP_MAX = 9,
        }
    }
    class VisualShaderNodeColorOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeColorOp.Operator): void
        get_operator(): VisualShaderNodeColorOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Color): void
        get_default_value(): Color
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: Color
    }
    class VisualShaderNodeComment extends VisualShaderNodeResizableBase {
        set_title(title: string): void
        get_title(): string
        set_description(description: string): void
        get_description(): string
        // // godot.getset: title: string
        // // godot.getset: description: string
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            CTYPE_SCALAR = 0,
            CTYPE_SCALAR_INT = 1,
            CTYPE_SCALAR_UINT = 2,
            CTYPE_VECTOR_2D = 3,
            CTYPE_VECTOR_3D = 4,
            CTYPE_VECTOR_4D = 5,
            CTYPE_BOOLEAN = 6,
            CTYPE_TRANSFORM = 7,
            CTYPE_MAX = 8,
        }
        enum Function {
            FUNC_EQUAL = 0,
            FUNC_NOT_EQUAL = 1,
            FUNC_GREATER_THAN = 2,
            FUNC_GREATER_THAN_EQUAL = 3,
            FUNC_LESS_THAN = 4,
            FUNC_LESS_THAN_EQUAL = 5,
            FUNC_MAX = 6,
        }
        enum Condition {
            COND_ALL = 0,
            COND_ANY = 1,
            COND_MAX = 2,
        }
    }
    class VisualShaderNodeCompare extends VisualShaderNode {
        set_comparison_type(type: VisualShaderNodeCompare.ComparisonType): void
        get_comparison_type(): VisualShaderNodeCompare.ComparisonType
        set_function(func: VisualShaderNodeCompare.Function): void
        get_function(): VisualShaderNodeCompare.Function
        set_condition(condition: VisualShaderNodeCompare.Condition): void
        get_condition(): VisualShaderNodeCompare.Condition
        // // godot.getset: type: number /*i64*/
        // // godot.getset: function: number /*i64*/
        // // godot.getset: condition: number /*i64*/
    }
    class VisualShaderNodeConstant extends VisualShaderNode {
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_PORT = 1,
            SOURCE_MAX = 2,
        }
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_MAX = 3,
        }
    }
    class VisualShaderNodeCubemap extends VisualShaderNode {
        set_source(value: VisualShaderNodeCubemap.Source): void
        get_source(): VisualShaderNodeCubemap.Source
        set_cube_map(value: Cubemap): void
        get_cube_map(): Cubemap
        set_texture_type(value: VisualShaderNodeCubemap.TextureType): void
        get_texture_type(): VisualShaderNodeCubemap.TextureType
        // // godot.getset: source: number /*i64*/
        // // godot.getset: cube_map: Object
        // // godot.getset: texture_type: number /*i64*/
    }
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
    }
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveTexture): void
        get_texture(): CurveTexture
        // // godot.getset: texture: Object
    }
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveXYZTexture): void
        get_texture(): CurveXYZTexture
        // // godot.getset: texture: Object
    }
    class VisualShaderNodeCustom extends VisualShaderNode {
        _set_initialized(enabled: boolean): void
        _is_initialized(): boolean
        _set_input_port_default_value(port: number /*i64*/, value: any): void
        _set_option_index(option: number /*i64*/, value: number /*i64*/): void
        _set_properties(properties: string): void
        _get_properties(): string
        get_option_index(option: number /*i64*/): number /*i64*/
        // // godot.getset: initialized: boolean
        // // godot.getset: properties: string
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
        enum Function {
            FUNC_SUM = 0,
            FUNC_X = 1,
            FUNC_Y = 2,
            FUNC_MAX = 3,
        }
        enum Precision {
            PRECISION_NONE = 0,
            PRECISION_COARSE = 1,
            PRECISION_FINE = 2,
            PRECISION_MAX = 3,
        }
    }
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeDerivativeFunc.OpType): void
        get_op_type(): VisualShaderNodeDerivativeFunc.OpType
        set_function(func: VisualShaderNodeDerivativeFunc.Function): void
        get_function(): VisualShaderNodeDerivativeFunc.Function
        set_precision(precision: VisualShaderNodeDerivativeFunc.Precision): void
        get_precision(): VisualShaderNodeDerivativeFunc.Precision
        // // godot.getset: op_type: number /*i64*/
        // // godot.getset: function: number /*i64*/
        // // godot.getset: precision: number /*i64*/
    }
    class VisualShaderNodeDeterminant extends VisualShaderNode {
    }
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
    }
    class VisualShaderNodeDotProduct extends VisualShaderNode {
    }
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        set_expression(expression: string): void
        get_expression(): string
        // // godot.getset: expression: string
    }
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
    }
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*f64*/): void
        get_constant(): number /*f64*/
        // // godot.getset: constant: number /*f64*/
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            FUNC_SIN = 0,
            FUNC_COS = 1,
            FUNC_TAN = 2,
            FUNC_ASIN = 3,
            FUNC_ACOS = 4,
            FUNC_ATAN = 5,
            FUNC_SINH = 6,
            FUNC_COSH = 7,
            FUNC_TANH = 8,
            FUNC_LOG = 9,
            FUNC_EXP = 10,
            FUNC_SQRT = 11,
            FUNC_ABS = 12,
            FUNC_SIGN = 13,
            FUNC_FLOOR = 14,
            FUNC_ROUND = 15,
            FUNC_CEIL = 16,
            FUNC_FRACT = 17,
            FUNC_SATURATE = 18,
            FUNC_NEGATE = 19,
            FUNC_ACOSH = 20,
            FUNC_ASINH = 21,
            FUNC_ATANH = 22,
            FUNC_DEGREES = 23,
            FUNC_EXP2 = 24,
            FUNC_INVERSE_SQRT = 25,
            FUNC_LOG2 = 26,
            FUNC_RADIANS = 27,
            FUNC_RECIPROCAL = 28,
            FUNC_ROUNDEVEN = 29,
            FUNC_TRUNC = 30,
            FUNC_ONEMINUS = 31,
            FUNC_MAX = 32,
        }
    }
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeFloatFunc.Function): void
        get_function(): VisualShaderNodeFloatFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_POW = 5,
            OP_MAX = 6,
            OP_MIN = 7,
            OP_ATAN2 = 8,
            OP_STEP = 9,
            OP_ENUM_SIZE = 10,
        }
    }
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeFloatOp.Operator): void
        get_operator(): VisualShaderNodeFloatOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            HINT_NONE = 0,
            HINT_RANGE = 1,
            HINT_RANGE_STEP = 2,
            HINT_MAX = 3,
        }
    }
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        set_hint(hint: VisualShaderNodeFloatParameter.Hint): void
        get_hint(): VisualShaderNodeFloatParameter.Hint
        set_min(value: number /*f64*/): void
        get_min(): number /*f64*/
        set_max(value: number /*f64*/): void
        get_max(): number /*f64*/
        set_step(value: number /*f64*/): void
        get_step(): number /*f64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*f64*/): void
        get_default_value(): number /*f64*/
        // // godot.getset: hint: number /*i64*/
        // // godot.getset: min: number /*f64*/
        // // godot.getset: max: number /*f64*/
        // // godot.getset: step: number /*f64*/
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: number /*f64*/
    }
    class VisualShaderNodeFresnel extends VisualShaderNode {
    }
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
    }
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        set_inputs(inputs: string): void
        get_inputs(): string
        set_outputs(outputs: string): void
        get_outputs(): string
        is_valid_port_name(name: string): boolean
        add_input_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        remove_input_port(id: number /*i64*/): void
        get_input_port_count(): number /*i64*/
        has_input_port(id: number /*i64*/): boolean
        clear_input_ports(): void
        add_output_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        remove_output_port(id: number /*i64*/): void
        get_output_port_count(): number /*i64*/
        has_output_port(id: number /*i64*/): boolean
        clear_output_ports(): void
        set_input_port_name(id: number /*i64*/, name: string): void
        set_input_port_type(id: number /*i64*/, type: number /*i64*/): void
        set_output_port_name(id: number /*i64*/, name: string): void
        set_output_port_type(id: number /*i64*/, type: number /*i64*/): void
        get_free_input_port_id(): number /*i64*/
        get_free_output_port_id(): number /*i64*/
    }
    class VisualShaderNodeIf extends VisualShaderNode {
    }
    class VisualShaderNodeInput extends VisualShaderNode {
        set_input_name(name: string): void
        get_input_name(): string
        get_input_real_name(): string
        // // godot.getset: input_name: StringName
        input_type_changed: Signal
    }
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        // // godot.getset: constant: number /*i64*/
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            FUNC_ABS = 0,
            FUNC_NEGATE = 1,
            FUNC_SIGN = 2,
            FUNC_BITWISE_NOT = 3,
            FUNC_MAX = 4,
        }
    }
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeIntFunc.Function): void
        get_function(): VisualShaderNodeIntFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_MAX = 5,
            OP_MIN = 6,
            OP_BITWISE_AND = 7,
            OP_BITWISE_OR = 8,
            OP_BITWISE_XOR = 9,
            OP_BITWISE_LEFT_SHIFT = 10,
            OP_BITWISE_RIGHT_SHIFT = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    class VisualShaderNodeIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeIntOp.Operator): void
        get_operator(): VisualShaderNodeIntOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            HINT_NONE = 0,
            HINT_RANGE = 1,
            HINT_RANGE_STEP = 2,
            HINT_MAX = 3,
        }
    }
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        set_hint(hint: VisualShaderNodeIntParameter.Hint): void
        get_hint(): VisualShaderNodeIntParameter.Hint
        set_min(value: number /*i64*/): void
        get_min(): number /*i64*/
        set_max(value: number /*i64*/): void
        get_max(): number /*i64*/
        set_step(value: number /*i64*/): void
        get_step(): number /*i64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        // // godot.getset: hint: number /*i64*/
        // // godot.getset: min: number /*i64*/
        // // godot.getset: max: number /*i64*/
        // // godot.getset: step: number /*i64*/
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: number /*i64*/
    }
    namespace VisualShaderNodeIs {
        enum Function {
            FUNC_IS_INF = 0,
            FUNC_IS_NAN = 1,
            FUNC_MAX = 2,
        }
    }
    class VisualShaderNodeIs extends VisualShaderNode {
        set_function(func: VisualShaderNodeIs.Function): void
        get_function(): VisualShaderNodeIs.Function
        // // godot.getset: function: number /*i64*/
    }
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    class VisualShaderNodeMix extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeMix.OpType): void
        get_op_type(): VisualShaderNodeMix.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
    }
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeMultiplyAdd.OpType): void
        get_op_type(): VisualShaderNodeMultiplyAdd.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
    }
    class VisualShaderNodeOutput extends VisualShaderNode {
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            QUAL_NONE = 0,
            QUAL_GLOBAL = 1,
            QUAL_INSTANCE = 2,
            QUAL_MAX = 3,
        }
    }
    class VisualShaderNodeParameter extends VisualShaderNode {
        set_parameter_name(name: string): void
        get_parameter_name(): string
        set_qualifier(qualifier: VisualShaderNodeParameter.Qualifier): void
        get_qualifier(): VisualShaderNodeParameter.Qualifier
        // // godot.getset: parameter_name: StringName
        // // godot.getset: qualifier: number /*i64*/
    }
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        set_parameter_name(name: string): void
        get_parameter_name(): string
        _set_parameter_type(type: number /*i64*/): void
        _get_parameter_type(): number /*i64*/
        // // godot.getset: parameter_name: StringName
        // // godot.getset: param_type: number /*i64*/
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            MODE_LINEAR = 0,
            MODE_RADIAL = 1,
            MODE_TANGENTIAL = 2,
            MODE_MAX = 3,
        }
    }
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        set_mode(mode: VisualShaderNodeParticleAccelerator.Mode): void
        get_mode(): VisualShaderNodeParticleAccelerator.Mode
        // // godot.getset: mode: number /*i64*/
    }
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
    }
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            EMIT_FLAG_POSITION = 1,
            EMIT_FLAG_ROT_SCALE = 2,
            EMIT_FLAG_VELOCITY = 4,
            EMIT_FLAG_COLOR = 8,
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        set_flags(flags: VisualShaderNodeParticleEmit.EmitFlags): void
        get_flags(): VisualShaderNodeParticleEmit.EmitFlags
        // // godot.getset: flags: number /*i64*/
    }
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        set_mode_2d(enabled: boolean): void
        is_mode_2d(): boolean
        // // godot.getset: mode_2d: boolean
    }
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_all_surfaces(enabled: boolean): void
        is_use_all_surfaces(): boolean
        set_surface_index(surface_index: number /*i64*/): void
        get_surface_index(): number /*i64*/
        // // godot.getset: mesh: Object
        // // godot.getset: use_all_surfaces: boolean
        // // godot.getset: surface_index: number /*i64*/
    }
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        set_degrees_mode(enabled: boolean): void
        is_degrees_mode(): boolean
        // // godot.getset: degrees_mode: boolean
    }
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
    }
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeParticleRandomness.OpType): void
        get_op_type(): VisualShaderNodeParticleRandomness.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
    }
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
    }
    class VisualShaderNodeProximityFade extends VisualShaderNode {
    }
    class VisualShaderNodeRandomRange extends VisualShaderNode {
    }
    class VisualShaderNodeRemap extends VisualShaderNode {
    }
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        set_size(size: Vector2): void
        get_size(): Vector2
        // // godot.getset: size: Vector2
    }
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
    }
    class VisualShaderNodeSDFRaymarch extends VisualShaderNode {
    }
    class VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_PORT = 1,
            SOURCE_MAX = 2,
        }
    }
    class VisualShaderNodeSample3D extends VisualShaderNode {
        set_source(value: VisualShaderNodeSample3D.Source): void
        get_source(): VisualShaderNodeSample3D.Source
        // // godot.getset: source: number /*i64*/
    }
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
    }
    class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeSmoothStep.OpType): void
        get_op_type(): VisualShaderNodeSmoothStep.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    class VisualShaderNodeStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeStep.OpType): void
        get_op_type(): VisualShaderNodeStep.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            OP_TYPE_FLOAT = 0,
            OP_TYPE_INT = 1,
            OP_TYPE_UINT = 2,
            OP_TYPE_VECTOR_2D = 3,
            OP_TYPE_VECTOR_3D = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_BOOLEAN = 6,
            OP_TYPE_TRANSFORM = 7,
            OP_TYPE_MAX = 8,
        }
    }
    class VisualShaderNodeSwitch extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeSwitch.OpType): void
        get_op_type(): VisualShaderNodeSwitch.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_SCREEN = 1,
            SOURCE_2D_TEXTURE = 2,
            SOURCE_2D_NORMAL = 3,
            SOURCE_DEPTH = 4,
            SOURCE_PORT = 5,
            SOURCE_3D_NORMAL = 6,
            SOURCE_ROUGHNESS = 7,
            SOURCE_MAX = 8,
        }
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_MAX = 3,
        }
    }
    class VisualShaderNodeTexture extends VisualShaderNode {
        set_source(value: VisualShaderNodeTexture.Source): void
        get_source(): VisualShaderNodeTexture.Source
        set_texture(value: Texture2D): void
        get_texture(): Texture2D
        set_texture_type(value: VisualShaderNodeTexture.TextureType): void
        get_texture_type(): VisualShaderNodeTexture.TextureType
        // // godot.getset: source: number /*i64*/
        // // godot.getset: texture: Object
        // // godot.getset: texture_type: number /*i64*/
    }
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        set_texture_array(value: Texture2DArray): void
        get_texture_array(): Texture2DArray
        // // godot.getset: texture_array: Object
    }
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
    }
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
    }
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        set_texture(value: Texture3D): void
        get_texture(): Texture3D
        // // godot.getset: texture: Object
    }
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_ANISOTROPY = 3,
            TYPE_MAX = 4,
        }
        enum ColorDefault {
            COLOR_DEFAULT_WHITE = 0,
            COLOR_DEFAULT_BLACK = 1,
            COLOR_DEFAULT_TRANSPARENT = 2,
            COLOR_DEFAULT_MAX = 3,
        }
        enum TextureFilter {
            FILTER_DEFAULT = 0,
            FILTER_NEAREST = 1,
            FILTER_LINEAR = 2,
            FILTER_NEAREST_MIPMAP = 3,
            FILTER_LINEAR_MIPMAP = 4,
            FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
            FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
            FILTER_MAX = 7,
        }
        enum TextureRepeat {
            REPEAT_DEFAULT = 0,
            REPEAT_ENABLED = 1,
            REPEAT_DISABLED = 2,
            REPEAT_MAX = 3,
        }
        enum TextureSource {
            SOURCE_NONE = 0,
            SOURCE_SCREEN = 1,
            SOURCE_DEPTH = 2,
            SOURCE_NORMAL_ROUGHNESS = 3,
            SOURCE_MAX = 4,
        }
    }
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        set_texture_type(type: VisualShaderNodeTextureParameter.TextureType): void
        get_texture_type(): VisualShaderNodeTextureParameter.TextureType
        set_color_default(color: VisualShaderNodeTextureParameter.ColorDefault): void
        get_color_default(): VisualShaderNodeTextureParameter.ColorDefault
        set_texture_filter(filter: VisualShaderNodeTextureParameter.TextureFilter): void
        get_texture_filter(): VisualShaderNodeTextureParameter.TextureFilter
        set_texture_repeat(repeat: VisualShaderNodeTextureParameter.TextureRepeat): void
        get_texture_repeat(): VisualShaderNodeTextureParameter.TextureRepeat
        set_texture_source(source: VisualShaderNodeTextureParameter.TextureSource): void
        get_texture_source(): VisualShaderNodeTextureParameter.TextureSource
        // // godot.getset: texture_type: number /*i64*/
        // // godot.getset: color_default: number /*i64*/
        // // godot.getset: texture_filter: number /*i64*/
        // // godot.getset: texture_repeat: number /*i64*/
        // // godot.getset: texture_source: number /*i64*/
    }
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
    }
    class VisualShaderNodeTextureSDF extends VisualShaderNode {
    }
    class VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
    }
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
    }
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        set_constant(constant: Transform3D): void
        get_constant(): Transform3D
        // // godot.getset: constant: Transform3D
    }
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            FUNC_INVERSE = 0,
            FUNC_TRANSPOSE = 1,
            FUNC_MAX = 2,
        }
    }
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeTransformFunc.Function): void
        get_function(): VisualShaderNodeTransformFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            OP_AxB = 0,
            OP_BxA = 1,
            OP_AxB_COMP = 2,
            OP_BxA_COMP = 3,
            OP_ADD = 4,
            OP_A_MINUS_B = 5,
            OP_B_MINUS_A = 6,
            OP_A_DIV_B = 7,
            OP_B_DIV_A = 8,
            OP_MAX = 9,
        }
    }
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformOp.Operator): void
        get_operator(): VisualShaderNodeTransformOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Transform3D): void
        get_default_value(): Transform3D
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: Transform3D
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            OP_AxB = 0,
            OP_BxA = 1,
            OP_3x3_AxB = 2,
            OP_3x3_BxA = 3,
            OP_MAX = 4,
        }
    }
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformVecMult.Operator): void
        get_operator(): VisualShaderNodeTransformVecMult.Operator
        // // godot.getset: operator: number /*i64*/
    }
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        // // godot.getset: constant: number /*i64*/
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            FUNC_NEGATE = 0,
            FUNC_BITWISE_NOT = 1,
            FUNC_MAX = 2,
        }
    }
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUIntFunc.Function): void
        get_function(): VisualShaderNodeUIntFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_MAX = 5,
            OP_MIN = 6,
            OP_BITWISE_AND = 7,
            OP_BITWISE_OR = 8,
            OP_BITWISE_XOR = 9,
            OP_BITWISE_LEFT_SHIFT = 10,
            OP_BITWISE_RIGHT_SHIFT = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeUIntOp.Operator): void
        get_operator(): VisualShaderNodeUIntOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: number /*i64*/
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            FUNC_PANNING = 0,
            FUNC_SCALING = 1,
            FUNC_MAX = 2,
        }
    }
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUVFunc.Function): void
        get_function(): VisualShaderNodeUVFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
    }
    class VisualShaderNodeVarying extends VisualShaderNode {
        set_varying_name(name: string): void
        get_varying_name(): string
        set_varying_type(type: VisualShader.VaryingType): void
        get_varying_type(): VisualShader.VaryingType
        // // godot.getset: varying_name: StringName
        // // godot.getset: varying_type: number /*i64*/
    }
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
    }
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
    }
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector2): void
        get_constant(): Vector2
        // // godot.getset: constant: Vector2
    }
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector2): void
        get_default_value(): Vector2
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: Vector2
    }
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector3): void
        get_constant(): Vector3
        // // godot.getset: constant: Vector3
    }
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector3): void
        get_default_value(): Vector3
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: Vector3
    }
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        set_constant(constant: Quaternion): void
        get_constant(): Quaternion
        // // godot.getset: constant: Quaternion
    }
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector4): void
        get_default_value(): Vector4
        // // godot.getset: default_value_enabled: boolean
        // // godot.getset: default_value: Vector4
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            OP_TYPE_VECTOR_2D = 0,
            OP_TYPE_VECTOR_3D = 1,
            OP_TYPE_VECTOR_4D = 2,
            OP_TYPE_MAX = 3,
        }
    }
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeVectorBase.OpType): void
        get_op_type(): VisualShaderNodeVectorBase.OpType
        // // godot.getset: op_type: number /*i64*/
    }
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
    }
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
    }
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            FUNC_NORMALIZE = 0,
            FUNC_SATURATE = 1,
            FUNC_NEGATE = 2,
            FUNC_RECIPROCAL = 3,
            FUNC_ABS = 4,
            FUNC_ACOS = 5,
            FUNC_ACOSH = 6,
            FUNC_ASIN = 7,
            FUNC_ASINH = 8,
            FUNC_ATAN = 9,
            FUNC_ATANH = 10,
            FUNC_CEIL = 11,
            FUNC_COS = 12,
            FUNC_COSH = 13,
            FUNC_DEGREES = 14,
            FUNC_EXP = 15,
            FUNC_EXP2 = 16,
            FUNC_FLOOR = 17,
            FUNC_FRACT = 18,
            FUNC_INVERSE_SQRT = 19,
            FUNC_LOG = 20,
            FUNC_LOG2 = 21,
            FUNC_RADIANS = 22,
            FUNC_ROUND = 23,
            FUNC_ROUNDEVEN = 24,
            FUNC_SIGN = 25,
            FUNC_SIN = 26,
            FUNC_SINH = 27,
            FUNC_SQRT = 28,
            FUNC_TAN = 29,
            FUNC_TANH = 30,
            FUNC_TRUNC = 31,
            FUNC_ONEMINUS = 32,
            FUNC_MAX = 33,
        }
    }
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        set_function(func: VisualShaderNodeVectorFunc.Function): void
        get_function(): VisualShaderNodeVectorFunc.Function
        // // godot.getset: function: number /*i64*/
    }
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_POW = 5,
            OP_MAX = 6,
            OP_MIN = 7,
            OP_CROSS = 8,
            OP_ATAN2 = 9,
            OP_REFLECT = 10,
            OP_STEP = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        set_operator(op: VisualShaderNodeVectorOp.Operator): void
        get_operator(): VisualShaderNodeVectorOp.Operator
        // // godot.getset: operator: number /*i64*/
    }
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
    }
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
    }
    namespace VoxelGI {
        enum Subdiv {
            SUBDIV_64 = 0,
            SUBDIV_128 = 1,
            SUBDIV_256 = 2,
            SUBDIV_512 = 3,
            SUBDIV_MAX = 4,
        }
    }
    class VoxelGI extends VisualInstance3D {
        set_probe_data(data: VoxelGIData): void
        get_probe_data(): VoxelGIData
        set_subdiv(subdiv: VoxelGI.Subdiv): void
        get_subdiv(): VoxelGI.Subdiv
        set_size(size: Vector3): void
        get_size(): Vector3
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        bake(from_node: Node, create_visual_debug: boolean): void
        debug_bake(): void
        // // godot.getset: subdiv: number /*i64*/
        // // godot.getset: size: Vector3
        // // godot.getset: camera_attributes: Object
        // // godot.getset: data: Object
    }
    class VoxelGIData extends Resource {
        allocate(to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        get_bounds(): AABB
        get_octree_size(): Vector3
        get_to_cell_xform(): Transform3D
        get_octree_cells(): PackedByteArray
        get_data_cells(): PackedByteArray
        get_level_counts(): PackedInt32Array
        set_dynamic_range(dynamic_range: number /*f64*/): void
        get_dynamic_range(): number /*f64*/
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_normal_bias(bias: number /*f64*/): void
        get_normal_bias(): number /*f64*/
        set_propagation(propagation: number /*f64*/): void
        get_propagation(): number /*f64*/
        set_interior(interior: boolean): void
        is_interior(): boolean
        set_use_two_bounces(enable: boolean): void
        is_using_two_bounces(): boolean
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        // // godot.getset: _data: Dictionary
        // // godot.getset: dynamic_range: number /*f64*/
        // // godot.getset: energy: number /*f64*/
        // // godot.getset: bias: number /*f64*/
        // // godot.getset: normal_bias: number /*f64*/
        // // godot.getset: propagation: number /*f64*/
        // // godot.getset: use_two_bounces: boolean
        // // godot.getset: interior: boolean
    }
    class VoxelGIEditorPlugin extends EditorPlugin {
    }
    class VoxelGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class WeakRef extends RefCounted {
        get_ref(): any
    }
    namespace WebRTCDataChannel {
        enum WriteMode {
            WRITE_MODE_TEXT = 0,
            WRITE_MODE_BINARY = 1,
        }
        enum ChannelState {
            STATE_CONNECTING = 0,
            STATE_OPEN = 1,
            STATE_CLOSING = 2,
            STATE_CLOSED = 3,
        }
    }
    class WebRTCDataChannel extends PacketPeer {
        poll(): GodotError
        close(): void
        was_string_packet(): boolean
        set_write_mode(write_mode: WebRTCDataChannel.WriteMode): void
        get_write_mode(): WebRTCDataChannel.WriteMode
        get_ready_state(): WebRTCDataChannel.ChannelState
        get_label(): string
        is_ordered(): boolean
        get_id(): number /*i64*/
        get_max_packet_life_time(): number /*i64*/
        get_max_retransmits(): number /*i64*/
        get_protocol(): string
        is_negotiated(): boolean
        get_buffered_amount(): number /*i64*/
        // // godot.getset: write_mode: number /*i64*/
    }
    class WebRTCDataChannelExtension extends WebRTCDataChannel {
    }
    class WebRTCMultiplayerPeer extends MultiplayerPeer {
        create_server(channels_config: Array): GodotError
        create_client(peer_id: number /*i64*/, channels_config: Array): GodotError
        create_mesh(peer_id: number /*i64*/, channels_config: Array): GodotError
        add_peer(peer: WebRTCPeerConnection, peer_id: number /*i64*/, unreliable_lifetime: number /*i64*/): GodotError
        remove_peer(peer_id: number /*i64*/): void
        has_peer(peer_id: number /*i64*/): boolean
        get_peer(peer_id: number /*i64*/): Dictionary
        get_peers(): Dictionary
    }
    namespace WebRTCPeerConnection {
        enum ConnectionState {
            STATE_NEW = 0,
            STATE_CONNECTING = 1,
            STATE_CONNECTED = 2,
            STATE_DISCONNECTED = 3,
            STATE_FAILED = 4,
            STATE_CLOSED = 5,
        }
        enum GatheringState {
            GATHERING_STATE_NEW = 0,
            GATHERING_STATE_GATHERING = 1,
            GATHERING_STATE_COMPLETE = 2,
        }
        enum SignalingState {
            SIGNALING_STATE_STABLE = 0,
            SIGNALING_STATE_HAVE_LOCAL_OFFER = 1,
            SIGNALING_STATE_HAVE_REMOTE_OFFER = 2,
            SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3,
            SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4,
            SIGNALING_STATE_CLOSED = 5,
        }
    }
    class WebRTCPeerConnection extends RefCounted {
        static set_default_extension(extension_class: StringName): void
        initialize(configuration: Dictionary): GodotError
        create_data_channel(label: string, options: Dictionary): WebRTCDataChannel
        create_offer(): GodotError
        set_local_description(type: string, sdp: string): GodotError
        set_remote_description(type: string, sdp: string): GodotError
        add_ice_candidate(media: string, index: number /*i64*/, name: string): GodotError
        poll(): GodotError
        close(): void
        get_connection_state(): WebRTCPeerConnection.ConnectionState
        get_gathering_state(): WebRTCPeerConnection.GatheringState
        get_signaling_state(): WebRTCPeerConnection.SignalingState
        session_description_created: Signal
        ice_candidate_created: Signal
        data_channel_received: Signal
    }
    class WebRTCPeerConnectionExtension extends WebRTCPeerConnection {
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            TARGET_RAY_MODE_UNKNOWN = 0,
            TARGET_RAY_MODE_GAZE = 1,
            TARGET_RAY_MODE_TRACKED_POINTER = 2,
            TARGET_RAY_MODE_SCREEN = 3,
        }
    }
    class WebXRInterface extends XRInterface {
        is_session_supported(session_mode: string): void
        set_session_mode(session_mode: string): void
        get_session_mode(): string
        set_required_features(required_features: string): void
        get_required_features(): string
        set_optional_features(optional_features: string): void
        get_optional_features(): string
        get_reference_space_type(): string
        set_requested_reference_space_types(requested_reference_space_types: string): void
        get_requested_reference_space_types(): string
        is_input_source_active(input_source_id: number /*i64*/): boolean
        get_input_source_tracker(input_source_id: number /*i64*/): XRPositionalTracker
        get_input_source_target_ray_mode(input_source_id: number /*i64*/): WebXRInterface.TargetRayMode
        get_visibility_state(): string
        get_display_refresh_rate(): number /*f64*/
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        get_available_display_refresh_rates(): Array
        // // godot.getset: session_mode: string
        // // godot.getset: required_features: string
        // // godot.getset: optional_features: string
        // // godot.getset: requested_reference_space_types: string
        // // godot.getset: reference_space_type: string
        // // godot.getset: visibility_state: string
        session_supported: Signal
        session_started: Signal
        session_ended: Signal
        session_failed: Signal
        selectstart: Signal
        select: Signal
        selectend: Signal
        squeezestart: Signal
        squeeze: Signal
        squeezeend: Signal
        visibility_state_changed: Signal
        reference_space_reset: Signal
        display_refresh_rate_changed: Signal
    }
    namespace Window {
        enum Mode {
            MODE_WINDOWED = 0,
            MODE_MINIMIZED = 1,
            MODE_MAXIMIZED = 2,
            MODE_FULLSCREEN = 3,
            MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum Flags {
            FLAG_RESIZE_DISABLED = 0,
            FLAG_BORDERLESS = 1,
            FLAG_ALWAYS_ON_TOP = 2,
            FLAG_TRANSPARENT = 3,
            FLAG_NO_FOCUS = 4,
            FLAG_POPUP = 5,
            FLAG_EXTEND_TO_TITLE = 6,
            FLAG_MOUSE_PASSTHROUGH = 7,
            FLAG_MAX = 8,
        }
        enum ContentScaleMode {
            CONTENT_SCALE_MODE_DISABLED = 0,
            CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
            CONTENT_SCALE_MODE_VIEWPORT = 2,
        }
        enum ContentScaleAspect {
            CONTENT_SCALE_ASPECT_IGNORE = 0,
            CONTENT_SCALE_ASPECT_KEEP = 1,
            CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
            CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
            CONTENT_SCALE_ASPECT_EXPAND = 4,
        }
        enum ContentScaleStretch {
            CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
            CONTENT_SCALE_STRETCH_INTEGER = 1,
        }
        enum LayoutDirection {
            LAYOUT_DIRECTION_INHERITED = 0,
            LAYOUT_DIRECTION_LOCALE = 1,
            LAYOUT_DIRECTION_LTR = 2,
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum WindowInitialPosition {
            WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
            WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
            WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
            WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5,
        }
    }
    class Window extends Viewport {
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        static readonly NOTIFICATION_THEME_CHANGED = 32
        set_title(title: string): void
        get_title(): string
        get_window_id(): number /*i64*/
        set_initial_position(initial_position: Window.WindowInitialPosition): void
        get_initial_position(): Window.WindowInitialPosition
        set_current_screen(index: number /*i64*/): void
        get_current_screen(): number /*i64*/
        set_position(position: Vector2i): void
        get_position(): Vector2i
        move_to_center(): void
        set_size(size: Vector2i): void
        get_size(): Vector2i
        reset_size(): void
        get_position_with_decorations(): Vector2i
        get_size_with_decorations(): Vector2i
        set_max_size(max_size: Vector2i): void
        get_max_size(): Vector2i
        set_min_size(min_size: Vector2i): void
        get_min_size(): Vector2i
        set_mode(mode: Window.Mode): void
        get_mode(): Window.Mode
        set_flag(flag: Window.Flags, enabled: boolean): void
        get_flag(flag: Window.Flags): boolean
        is_maximize_allowed(): boolean
        request_attention(): void
        move_to_foreground(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        hide(): void
        show(): void
        set_transient(transient: boolean): void
        is_transient(): boolean
        set_exclusive(exclusive: boolean): void
        is_exclusive(): boolean
        set_unparent_when_invisible(unparent: boolean): void
        can_draw(): boolean
        has_focus(): boolean
        grab_focus(): void
        set_ime_active(active: boolean): void
        set_ime_position(position: Vector2i): void
        is_embedded(): boolean
        get_contents_minimum_size(): Vector2
        set_content_scale_size(size: Vector2i): void
        get_content_scale_size(): Vector2i
        set_content_scale_mode(mode: Window.ContentScaleMode): void
        get_content_scale_mode(): Window.ContentScaleMode
        set_content_scale_aspect(aspect: Window.ContentScaleAspect): void
        get_content_scale_aspect(): Window.ContentScaleAspect
        set_content_scale_stretch(stretch: Window.ContentScaleStretch): void
        get_content_scale_stretch(): Window.ContentScaleStretch
        set_keep_title_visible(title_visible: boolean): void
        get_keep_title_visible(): boolean
        set_content_scale_factor(factor: number /*f64*/): void
        get_content_scale_factor(): number /*f64*/
        set_use_font_oversampling(enable: boolean): void
        is_using_font_oversampling(): boolean
        set_mouse_passthrough_polygon(polygon: PackedVector2Array): void
        get_mouse_passthrough_polygon(): PackedVector2Array
        set_wrap_controls(enable: boolean): void
        is_wrapping_controls(): boolean
        child_controls_changed(): void
        _update_child_controls(): void
        _update_embedded_window(): void
        set_theme(theme: Theme): void
        get_theme(): Theme
        set_theme_type_variation(theme_type: StringName): void
        get_theme_type_variation(): StringName
        begin_bulk_theme_override(): void
        end_bulk_theme_override(): void
        add_theme_icon_override(name: StringName, texture: Texture2D): void
        add_theme_stylebox_override(name: StringName, stylebox: StyleBox): void
        add_theme_font_override(name: StringName, font: Font): void
        add_theme_font_size_override(name: StringName, font_size: number /*i64*/): void
        add_theme_color_override(name: StringName, color: Color): void
        add_theme_constant_override(name: StringName, constant: number /*i64*/): void
        remove_theme_icon_override(name: StringName): void
        remove_theme_stylebox_override(name: StringName): void
        remove_theme_font_override(name: StringName): void
        remove_theme_font_size_override(name: StringName): void
        remove_theme_color_override(name: StringName): void
        remove_theme_constant_override(name: StringName): void
        get_theme_icon(name: StringName, theme_type: StringName): Texture2D
        get_theme_stylebox(name: StringName, theme_type: StringName): StyleBox
        get_theme_font(name: StringName, theme_type: StringName): Font
        get_theme_font_size(name: StringName, theme_type: StringName): number /*i64*/
        get_theme_color(name: StringName, theme_type: StringName): Color
        get_theme_constant(name: StringName, theme_type: StringName): number /*i64*/
        has_theme_icon_override(name: StringName): boolean
        has_theme_stylebox_override(name: StringName): boolean
        has_theme_font_override(name: StringName): boolean
        has_theme_font_size_override(name: StringName): boolean
        has_theme_color_override(name: StringName): boolean
        has_theme_constant_override(name: StringName): boolean
        has_theme_icon(name: StringName, theme_type: StringName): boolean
        has_theme_stylebox(name: StringName, theme_type: StringName): boolean
        has_theme_font(name: StringName, theme_type: StringName): boolean
        has_theme_font_size(name: StringName, theme_type: StringName): boolean
        has_theme_color(name: StringName, theme_type: StringName): boolean
        has_theme_constant(name: StringName, theme_type: StringName): boolean
        get_theme_default_base_scale(): number /*f64*/
        get_theme_default_font(): Font
        get_theme_default_font_size(): number /*i64*/
        set_layout_direction(direction: Window.LayoutDirection): void
        get_layout_direction(): Window.LayoutDirection
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        popup(rect: Rect2i): void
        popup_on_parent(parent_rect: Rect2i): void
        popup_centered(minsize: Vector2i): void
        popup_centered_ratio(ratio: number /*f64*/): void
        popup_centered_clamped(minsize: Vector2i, fallback_ratio: number /*f64*/): void
        popup_exclusive(from_node: Node, rect: Rect2i): void
        popup_exclusive_on_parent(from_node: Node, parent_rect: Rect2i): void
        popup_exclusive_centered(from_node: Node, minsize: Vector2i): void
        popup_exclusive_centered_ratio(from_node: Node, ratio: number /*f64*/): void
        popup_exclusive_centered_clamped(from_node: Node, minsize: Vector2i, fallback_ratio: number /*f64*/): void
        // // godot.getset: mode: number /*i64*/
        // // godot.getset: title: string
        // // godot.getset: initial_position: number /*i64*/
        // // godot.getset: position: Vector2i
        // // godot.getset: size: Vector2i
        // // godot.getset: current_screen: number /*i64*/
        // // godot.getset: mouse_passthrough_polygon: PackedVector2Array
        // // godot.getset: visible: boolean
        // // godot.getset: wrap_controls: boolean
        // // godot.getset: transient: boolean
        // // godot.getset: exclusive: boolean
        // // godot.getset: unresizable: boolean
        // // godot.getset: borderless: boolean
        // // godot.getset: always_on_top: boolean
        // // godot.getset: transparent: boolean
        // // godot.getset: unfocusable: boolean
        // // godot.getset: popup_window: boolean
        // // godot.getset: extend_to_title: boolean
        // // godot.getset: mouse_passthrough: boolean
        // // godot.getset: min_size: Vector2i
        // // godot.getset: max_size: Vector2i
        // // godot.getset: keep_title_visible: boolean
        // // godot.getset: content_scale_size: Vector2i
        // // godot.getset: content_scale_mode: number /*i64*/
        // // godot.getset: content_scale_aspect: number /*i64*/
        // // godot.getset: content_scale_stretch: number /*i64*/
        // // godot.getset: content_scale_factor: number /*f64*/
        // // godot.getset: auto_translate: boolean
        // // godot.getset: theme: Object
        // // godot.getset: theme_type_variation: string
        window_input: Signal
        files_dropped: Signal
        mouse_entered: Signal
        mouse_exited: Signal
        focus_entered: Signal
        focus_exited: Signal
        close_requested: Signal
        go_back_requested: Signal
        visibility_changed: Signal
        about_to_popup: Signal
        theme_changed: Signal
        dpi_changed: Signal
        titlebar_changed: Signal
    }
    class WindowWrapper extends MarginContainer {
        window_visibility_changed: Signal
        window_close_requested: Signal
    }
    class World2D extends Resource {
        get_canvas(): RID
        get_space(): RID
        get_navigation_map(): RID
        get_direct_space_state(): PhysicsDirectSpaceState2D
        // // godot.getset: canvas: RID
        // // godot.getset: space: RID
        // // godot.getset: navigation_map: RID
        // // godot.getset: direct_space_state: Object
    }
    class World3D extends Resource {
        get_space(): RID
        get_navigation_map(): RID
        get_scenario(): RID
        set_environment(env: Environment): void
        get_environment(): Environment
        set_fallback_environment(env: Environment): void
        get_fallback_environment(): Environment
        set_camera_attributes(attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        get_direct_space_state(): PhysicsDirectSpaceState3D
        // // godot.getset: environment: Object
        // // godot.getset: fallback_environment: Object
        // // godot.getset: camera_attributes: Object
        // // godot.getset: space: RID
        // // godot.getset: navigation_map: RID
        // // godot.getset: scenario: RID
        // // godot.getset: direct_space_state: Object
    }
    class WorldBoundaryShape2D extends Shape2D {
        set_normal(normal: Vector2): void
        get_normal(): Vector2
        set_distance(distance: number /*f64*/): void
        get_distance(): number /*f64*/
        // // godot.getset: normal: Vector2
        // // godot.getset: distance: number /*f64*/
    }
    class WorldBoundaryShape3D extends Shape3D {
        set_plane(plane: Plane): void
        get_plane(): Plane
        // // godot.getset: plane: Plane
    }
    class WorldEnvironment extends Node {
        set_environment(env: Environment): void
        get_environment(): Environment
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        // // godot.getset: environment: Object
        // // godot.getset: camera_attributes: Object
    }
    class X509Certificate extends Resource {
        save(path: string): GodotError
        load(path: string): GodotError
        save_to_string(): string
        load_from_string(string_: string): GodotError
    }
    namespace XMLParser {
        enum NodeType {
            NODE_NONE = 0,
            NODE_ELEMENT = 1,
            NODE_ELEMENT_END = 2,
            NODE_TEXT = 3,
            NODE_COMMENT = 4,
            NODE_CDATA = 5,
            NODE_UNKNOWN = 6,
        }
    }
    class XMLParser extends RefCounted {
        read(): GodotError
        get_node_type(): XMLParser.NodeType
        get_node_name(): string
        get_node_data(): string
        get_node_offset(): number /*i64*/
        get_attribute_count(): number /*i64*/
        get_attribute_name(idx: number /*i64*/): string
        get_attribute_value(idx: number /*i64*/): string
        has_attribute(name: string): boolean
        get_named_attribute_value(name: string): string
        get_named_attribute_value_safe(name: string): string
        is_empty(): boolean
        get_current_line(): number /*i64*/
        skip_section(): void
        seek(position: number /*i64*/): GodotError
        open(file: string): GodotError
        open_buffer(buffer: PackedByteArray): GodotError
    }
    class XRAnchor3D extends XRNode3D {
        get_size(): Vector3
        get_plane(): Plane
    }
    class XRCamera3D extends Camera3D {
    }
    class XRController3D extends XRNode3D {
        is_button_pressed(name: StringName): boolean
        get_input(name: StringName): any
        get_float(name: StringName): number /*f64*/
        get_vector2(name: StringName): Vector2
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        button_pressed: Signal
        button_released: Signal
        input_float_changed: Signal
        input_vector2_changed: Signal
    }
    namespace XRInterface {
        enum Capabilities {
            XR_NONE = 0,
            XR_MONO = 1,
            XR_STEREO = 2,
            XR_QUAD = 4,
            XR_VR = 8,
            XR_AR = 16,
            XR_EXTERNAL = 32,
        }
        enum TrackingStatus {
            XR_NORMAL_TRACKING = 0,
            XR_EXCESSIVE_MOTION = 1,
            XR_INSUFFICIENT_FEATURES = 2,
            XR_UNKNOWN_TRACKING = 3,
            XR_NOT_TRACKING = 4,
        }
        enum PlayAreaMode {
            XR_PLAY_AREA_UNKNOWN = 0,
            XR_PLAY_AREA_3DOF = 1,
            XR_PLAY_AREA_SITTING = 2,
            XR_PLAY_AREA_ROOMSCALE = 3,
            XR_PLAY_AREA_STAGE = 4,
        }
        enum EnvironmentBlendMode {
            XR_ENV_BLEND_MODE_OPAQUE = 0,
            XR_ENV_BLEND_MODE_ADDITIVE = 1,
            XR_ENV_BLEND_MODE_ALPHA_BLEND = 2,
        }
    }
    class XRInterface extends RefCounted {
        get_name(): StringName
        get_capabilities(): number /*i64*/
        is_primary(): boolean
        set_primary(primary: boolean): void
        is_initialized(): boolean
        initialize(): boolean
        uninitialize(): void
        get_system_info(): Dictionary
        get_tracking_status(): XRInterface.TrackingStatus
        get_render_target_size(): Vector2
        get_view_count(): number /*i64*/
        trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        get_play_area_mode(): XRInterface.PlayAreaMode
        set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        get_play_area(): PackedVector3Array
        get_anchor_detection_is_enabled(): boolean
        set_anchor_detection_is_enabled(enable: boolean): void
        get_camera_feed_id(): number /*i64*/
        is_passthrough_supported(): boolean
        is_passthrough_enabled(): boolean
        start_passthrough(): boolean
        stop_passthrough(): void
        get_transform_for_view(view: number /*i64*/, cam_transform: Transform3D): Transform3D
        get_projection_for_view(view: number /*i64*/, aspect: number /*f64*/, near: number /*f64*/, far: number /*f64*/): Projection
        get_supported_environment_blend_modes(): Array
        set_environment_blend_mode(mode: XRInterface.EnvironmentBlendMode): boolean
        get_environment_blend_mode(): XRInterface.EnvironmentBlendMode
        // // godot.getset: interface_is_primary: boolean
        // // godot.getset: xr_play_area_mode: number /*i64*/
        // // godot.getset: environment_blend_mode: number /*i64*/
        // // godot.getset: ar_is_anchor_detection_enabled: boolean
        play_area_changed: Signal
    }
    class XRInterfaceExtension extends XRInterface {
        get_color_texture(): RID
        get_depth_texture(): RID
        get_velocity_texture(): RID
        add_blit(render_target: RID, src_rect: Rect2, dst_rect: Rect2i, use_layer: boolean, layer: number /*i64*/, apply_lens_distortion: boolean, eye_center: Vector2, k1: number /*f64*/, k2: number /*f64*/, upscale: number /*f64*/, aspect_ratio: number /*f64*/): void
        get_render_target_texture(render_target: RID): RID
    }
    class XRNode3D extends Node3D {
        set_tracker(tracker_name: StringName): void
        get_tracker(): StringName
        set_pose_name(pose: StringName): void
        get_pose_name(): StringName
        get_is_active(): boolean
        get_has_tracking_data(): boolean
        get_pose(): XRPose
        trigger_haptic_pulse(action_name: string, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        // // godot.getset: tracker: string
        // // godot.getset: pose: string
        tracking_changed: Signal
    }
    class XROrigin3D extends Node3D {
        set_world_scale(world_scale: number /*f64*/): void
        get_world_scale(): number /*f64*/
        set_current(enabled: boolean): void
        is_current(): boolean
        // // godot.getset: world_scale: number /*f64*/
        // // godot.getset: current: boolean
    }
    namespace XRPose {
        enum TrackingConfidence {
            XR_TRACKING_CONFIDENCE_NONE = 0,
            XR_TRACKING_CONFIDENCE_LOW = 1,
            XR_TRACKING_CONFIDENCE_HIGH = 2,
        }
    }
    class XRPose extends RefCounted {
        set_has_tracking_data(has_tracking_data: boolean): void
        get_has_tracking_data(): boolean
        set_name(name: StringName): void
        get_name(): StringName
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        get_adjusted_transform(): Transform3D
        set_linear_velocity(velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_tracking_confidence(tracking_confidence: XRPose.TrackingConfidence): void
        get_tracking_confidence(): XRPose.TrackingConfidence
        // // godot.getset: has_tracking_data: boolean
        // // godot.getset: name: string
        // // godot.getset: transform: string
        // // godot.getset: linear_velocity: string
        // // godot.getset: angular_velocity: string
        // // godot.getset: tracking_confidence: number /*i64*/
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            TRACKER_HAND_UNKNOWN = 0,
            TRACKER_HAND_LEFT = 1,
            TRACKER_HAND_RIGHT = 2,
        }
    }
    class XRPositionalTracker extends RefCounted {
        get_tracker_type(): XRServer.TrackerType
        set_tracker_type(type: XRServer.TrackerType): void
        get_tracker_name(): StringName
        set_tracker_name(name: StringName): void
        get_tracker_desc(): string
        set_tracker_desc(description: string): void
        get_tracker_profile(): string
        set_tracker_profile(profile: string): void
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        set_tracker_hand(hand: XRPositionalTracker.TrackerHand): void
        has_pose(name: StringName): boolean
        get_pose(name: StringName): XRPose
        invalidate_pose(name: StringName): void
        set_pose(name: StringName, transform: Transform3D, linear_velocity: Vector3, angular_velocity: Vector3, tracking_confidence: XRPose.TrackingConfidence): void
        get_input(name: StringName): any
        set_input(name: StringName, value: any): void
        // // godot.getset: type: number /*i64*/
        // // godot.getset: name: string
        // // godot.getset: description: string
        // // godot.getset: profile: string
        // // godot.getset: hand: number /*i64*/
        pose_changed: Signal
        pose_lost_tracking: Signal
        button_pressed: Signal
        button_released: Signal
        input_float_changed: Signal
        input_vector2_changed: Signal
        profile_changed: Signal
    }
    namespace ZIPPacker {
        enum ZipAppend {
            APPEND_CREATE = 0,
            APPEND_CREATEAFTER = 1,
            APPEND_ADDINZIP = 2,
        }
    }
    class ZIPPacker extends RefCounted {
        open(path: string, append: ZIPPacker.ZipAppend): GodotError
        start_file(path: string): GodotError
        write_file(data: PackedByteArray): GodotError
        close_file(): GodotError
        close(): GodotError
    }
    class ZIPReader extends RefCounted {
        open(path: string): GodotError
        close(): GodotError
        get_files(): PackedStringArray
        read_file(path: string, case_sensitive: boolean): PackedByteArray
        file_exists(path: string, case_sensitive: boolean): boolean
    }
    namespace Vector2 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
        }
    }
    class Vector2 {
        static readonly ZERO: Vector2
        static readonly ONE: Vector2
        static readonly INF: Vector2
        static readonly LEFT: Vector2
        static readonly RIGHT: Vector2
        static readonly UP: Vector2
        static readonly DOWN: Vector2
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2i)
        constructor(x: number /*f64*/, y: number /*f64*/)
        angle(): number /*f64*/
        angle_to(to: Vector2): number /*f64*/
        angle_to_point(to: Vector2): number /*f64*/
        direction_to(to: Vector2): Vector2
        distance_to(to: Vector2): number /*f64*/
        distance_squared_to(to: Vector2): number /*f64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        limit_length(length: number /*f64*/): Vector2
        normalized(): Vector2
        is_normalized(): boolean
        is_equal_approx(to: Vector2): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        posmod(mod: number /*f64*/): Vector2
        posmodv(modv: Vector2): Vector2
        project(b: Vector2): Vector2
        lerp(to: Vector2, weight: number /*f64*/): Vector2
        slerp(to: Vector2, weight: number /*f64*/): Vector2
        cubic_interpolate(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/): Vector2
        cubic_interpolate_in_time(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector2
        bezier_interpolate(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        bezier_derivative(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        max_axis_index(): number /*i64*/
        min_axis_index(): number /*i64*/
        move_toward(to: Vector2, delta: number /*f64*/): Vector2
        rotated(angle: number /*f64*/): Vector2
        orthogonal(): Vector2
        floor(): Vector2
        ceil(): Vector2
        round(): Vector2
        aspect(): number /*f64*/
        dot(with_: Vector2): number /*f64*/
        slide(n: Vector2): Vector2
        bounce(n: Vector2): Vector2
        reflect(n: Vector2): Vector2
        cross(with_: Vector2): number /*f64*/
        abs(): Vector2
        sign(): Vector2
        clamp(min: Vector2, max: Vector2): Vector2
        snapped(step: Vector2): Vector2
        static from_angle(angle: number /*f64*/): Vector2
        static op_ADD(left: Vector2, right: Vector2): Vector2
        static op_SUBTRACT(left: Vector2, right: Vector2): Vector2
        static op_MULTIPLY(left: Vector2, right: Vector2): Vector2
        static op_MULTIPLY(left: number /*f64*/, right: Vector2): Vector2
        static op_MULTIPLY(left: Vector2, right: number /*f64*/): Vector2
        static op_DIVIDE(left: Vector2, right: Vector2): Vector2
        static op_DIVIDE(left: Vector2, right: number /*f64*/): Vector2
        x: number /*f64*/
        y: number /*f64*/
    }
    namespace Vector2i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
        }
    }
    class Vector2i {
        static readonly ZERO: Vector2i
        static readonly ONE: Vector2i
        static readonly MIN: Vector2i
        static readonly MAX: Vector2i
        static readonly LEFT: Vector2i
        static readonly RIGHT: Vector2i
        static readonly UP: Vector2i
        static readonly DOWN: Vector2i
        constructor()
        constructor(from: Vector2i)
        constructor(from: Vector2)
        constructor(x: number /*i64*/, y: number /*i64*/)
        aspect(): number /*f64*/
        max_axis_index(): number /*i64*/
        min_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector2i
        abs(): Vector2i
        clamp(min: Vector2i, max: Vector2i): Vector2i
        snapped(step: Vector2i): Vector2i
        x: number /*i64*/
        y: number /*i64*/
    }
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2i)
        constructor(position: Vector2, size: Vector2)
        constructor(x: number /*f64*/, y: number /*f64*/, width: number /*f64*/, height: number /*f64*/)
        get_center(): Vector2
        get_area(): number /*f64*/
        has_area(): boolean
        has_point(point: Vector2): boolean
        is_equal_approx(rect: Rect2): boolean
        is_finite(): boolean
        intersects(b: Rect2, include_borders: boolean): boolean
        encloses(b: Rect2): boolean
        intersection(b: Rect2): Rect2
        merge(b: Rect2): Rect2
        expand(to: Vector2): Rect2
        grow(amount: number /*f64*/): Rect2
        grow_side(side: number /*i64*/, amount: number /*f64*/): Rect2
        grow_individual(left: number /*f64*/, top: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/): Rect2
        abs(): Rect2
        position: Vector2
        size: Vector2
        end: Vector2
    }
    class Rect2i {
        constructor()
        constructor(from: Rect2i)
        constructor(from: Rect2)
        constructor(position: Vector2i, size: Vector2i)
        constructor(x: number /*i64*/, y: number /*i64*/, width: number /*i64*/, height: number /*i64*/)
        get_center(): Vector2i
        get_area(): number /*i64*/
        has_area(): boolean
        has_point(point: Vector2i): boolean
        intersects(b: Rect2i): boolean
        encloses(b: Rect2i): boolean
        intersection(b: Rect2i): Rect2i
        merge(b: Rect2i): Rect2i
        expand(to: Vector2i): Rect2i
        grow(amount: number /*i64*/): Rect2i
        grow_side(side: number /*i64*/, amount: number /*i64*/): Rect2i
        grow_individual(left: number /*i64*/, top: number /*i64*/, right: number /*i64*/, bottom: number /*i64*/): Rect2i
        abs(): Rect2i
        position: Vector2i
        size: Vector2i
        end: Vector2i
    }
    namespace Vector3 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
        }
    }
    class Vector3 {
        static readonly ZERO: Vector3
        static readonly ONE: Vector3
        static readonly INF: Vector3
        static readonly LEFT: Vector3
        static readonly RIGHT: Vector3
        static readonly UP: Vector3
        static readonly DOWN: Vector3
        static readonly FORWARD: Vector3
        static readonly BACK: Vector3
        static readonly MODEL_LEFT: Vector3
        static readonly MODEL_RIGHT: Vector3
        static readonly MODEL_TOP: Vector3
        static readonly MODEL_BOTTOM: Vector3
        static readonly MODEL_FRONT: Vector3
        static readonly MODEL_REAR: Vector3
        constructor()
        constructor(from: Vector3)
        constructor(from: Vector3i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        angle_to(to: Vector3): number /*f64*/
        signed_angle_to(to: Vector3, axis: Vector3): number /*f64*/
        direction_to(to: Vector3): Vector3
        distance_to(to: Vector3): number /*f64*/
        distance_squared_to(to: Vector3): number /*f64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        limit_length(length: number /*f64*/): Vector3
        normalized(): Vector3
        is_normalized(): boolean
        is_equal_approx(to: Vector3): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        inverse(): Vector3
        clamp(min: Vector3, max: Vector3): Vector3
        snapped(step: Vector3): Vector3
        rotated(axis: Vector3, angle: number /*f64*/): Vector3
        lerp(to: Vector3, weight: number /*f64*/): Vector3
        slerp(to: Vector3, weight: number /*f64*/): Vector3
        cubic_interpolate(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/): Vector3
        cubic_interpolate_in_time(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector3
        bezier_interpolate(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        bezier_derivative(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        move_toward(to: Vector3, delta: number /*f64*/): Vector3
        dot(with_: Vector3): number /*f64*/
        cross(with_: Vector3): Vector3
        outer(with_: Vector3): Basis
        abs(): Vector3
        floor(): Vector3
        ceil(): Vector3
        round(): Vector3
        posmod(mod: number /*f64*/): Vector3
        posmodv(modv: Vector3): Vector3
        project(b: Vector3): Vector3
        slide(n: Vector3): Vector3
        bounce(n: Vector3): Vector3
        reflect(n: Vector3): Vector3
        sign(): Vector3
        octahedron_encode(): Vector2
        static octahedron_decode(uv: Vector2): Vector3
        static op_ADD(left: Vector3, right: Vector3): Vector3
        static op_SUBTRACT(left: Vector3, right: Vector3): Vector3
        static op_MULTIPLY(left: Vector3, right: Vector3): Vector3
        static op_MULTIPLY(left: number /*f64*/, right: Vector3): Vector3
        static op_MULTIPLY(left: Vector3, right: number /*f64*/): Vector3
        static op_DIVIDE(left: Vector3, right: Vector3): Vector3
        static op_DIVIDE(left: Vector3, right: number /*f64*/): Vector3
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
    }
    namespace Vector3i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
        }
    }
    class Vector3i {
        static readonly ZERO: Vector3i
        static readonly ONE: Vector3i
        static readonly MIN: Vector3i
        static readonly MAX: Vector3i
        static readonly LEFT: Vector3i
        static readonly RIGHT: Vector3i
        static readonly UP: Vector3i
        static readonly DOWN: Vector3i
        static readonly FORWARD: Vector3i
        static readonly BACK: Vector3i
        constructor()
        constructor(from: Vector3i)
        constructor(from: Vector3)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector3i
        abs(): Vector3i
        clamp(min: Vector3i, max: Vector3i): Vector3i
        snapped(step: Vector3i): Vector3i
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
    }
    class Transform2D {
        static readonly IDENTITY: Transform2D
        static readonly FLIP_X: Transform2D
        static readonly FLIP_Y: Transform2D
        constructor()
        constructor(from: Transform2D)
        constructor(rotation: number /*f64*/, position: Vector2)
        constructor(rotation: number /*f64*/, scale: Vector2, skew: number /*f64*/, position: Vector2)
        constructor(x_axis: Vector2, y_axis: Vector2, origin: Vector2)
        inverse(): Transform2D
        affine_inverse(): Transform2D
        get_rotation(): number /*f64*/
        get_origin(): Vector2
        get_scale(): Vector2
        get_skew(): number /*f64*/
        orthonormalized(): Transform2D
        rotated(angle: number /*f64*/): Transform2D
        rotated_local(angle: number /*f64*/): Transform2D
        scaled(scale: Vector2): Transform2D
        scaled_local(scale: Vector2): Transform2D
        translated(offset: Vector2): Transform2D
        translated_local(offset: Vector2): Transform2D
        determinant(): number /*f64*/
        basis_xform(v: Vector2): Vector2
        basis_xform_inv(v: Vector2): Vector2
        interpolate_with(xform: Transform2D, weight: number /*f64*/): Transform2D
        is_conformal(): boolean
        is_equal_approx(xform: Transform2D): boolean
        is_finite(): boolean
        looking_at(target: Vector2): Transform2D
        x: Vector2
        y: Vector2
        origin: Vector2
    }
    namespace Vector4 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
            AXIS_W = 3,
        }
    }
    class Vector4 {
        static readonly ZERO: Vector4
        static readonly ONE: Vector4
        static readonly INF: Vector4
        constructor()
        constructor(from: Vector4)
        constructor(from: Vector4i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        abs(): Vector4
        sign(): Vector4
        floor(): Vector4
        ceil(): Vector4
        round(): Vector4
        lerp(to: Vector4, weight: number /*f64*/): Vector4
        cubic_interpolate(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/): Vector4
        cubic_interpolate_in_time(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector4
        posmod(mod: number /*f64*/): Vector4
        posmodv(modv: Vector4): Vector4
        snapped(step: Vector4): Vector4
        clamp(min: Vector4, max: Vector4): Vector4
        normalized(): Vector4
        is_normalized(): boolean
        direction_to(to: Vector4): Vector4
        distance_to(to: Vector4): number /*f64*/
        distance_squared_to(to: Vector4): number /*f64*/
        dot(with_: Vector4): number /*f64*/
        inverse(): Vector4
        is_equal_approx(to: Vector4): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
    }
    namespace Vector4i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
            AXIS_W = 3,
        }
    }
    class Vector4i {
        static readonly ZERO: Vector4i
        static readonly ONE: Vector4i
        static readonly MIN: Vector4i
        static readonly MAX: Vector4i
        constructor()
        constructor(from: Vector4i)
        constructor(from: Vector4)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/, w: number /*i64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector4i
        abs(): Vector4i
        clamp(min: Vector4i, max: Vector4i): Vector4i
        snapped(step: Vector4i): Vector4i
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
        w: number /*i64*/
    }
    class Plane {
        static readonly PLANE_YZ: Plane
        static readonly PLANE_XZ: Plane
        static readonly PLANE_XY: Plane
        constructor()
        constructor(from: Plane)
        constructor(normal: Vector3)
        constructor(normal: Vector3, d: number /*f64*/)
        constructor(normal: Vector3, point: Vector3)
        constructor(point1: Vector3, point2: Vector3, point3: Vector3)
        constructor(a: number /*f64*/, b: number /*f64*/, c: number /*f64*/, d: number /*f64*/)
        normalized(): Plane
        get_center(): Vector3
        is_equal_approx(to_plane: Plane): boolean
        is_finite(): boolean
        is_point_over(point: Vector3): boolean
        distance_to(point: Vector3): number /*f64*/
        has_point(point: Vector3, tolerance: number /*f64*/): boolean
        project(point: Vector3): Vector3
        intersect_3(b: Plane, c: Plane): void
        intersects_ray(from: Vector3, dir: Vector3): void
        intersects_segment(from: Vector3, to: Vector3): void
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        d: number /*f64*/
        normal: Vector3
    }
    class Quaternion {
        static readonly IDENTITY: Quaternion
        constructor()
        constructor(from: Quaternion)
        constructor(from: Basis)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(arc_from: Vector3, arc_to: Vector3)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        length(): number /*f64*/
        length_squared(): number /*f64*/
        normalized(): Quaternion
        is_normalized(): boolean
        is_equal_approx(to: Quaternion): boolean
        is_finite(): boolean
        inverse(): Quaternion
        log(): Quaternion
        exp(): Quaternion
        angle_to(to: Quaternion): number /*f64*/
        dot(with_: Quaternion): number /*f64*/
        slerp(to: Quaternion, weight: number /*f64*/): Quaternion
        slerpni(to: Quaternion, weight: number /*f64*/): Quaternion
        spherical_cubic_interpolate(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/): Quaternion
        spherical_cubic_interpolate_in_time(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Quaternion
        get_euler(order: number /*i64*/): Vector3
        static from_euler(euler: Vector3): Quaternion
        get_axis(): Vector3
        get_angle(): number /*f64*/
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
    }
    class AABB {
        constructor()
        constructor(from: AABB)
        constructor(position: Vector3, size: Vector3)
        abs(): AABB
        get_center(): Vector3
        get_volume(): number /*f64*/
        has_volume(): boolean
        has_surface(): boolean
        has_point(point: Vector3): boolean
        is_equal_approx(aabb: AABB): boolean
        is_finite(): boolean
        intersects(with_: AABB): boolean
        encloses(with_: AABB): boolean
        intersects_plane(plane: Plane): boolean
        intersection(with_: AABB): AABB
        merge(with_: AABB): AABB
        expand(to_point: Vector3): AABB
        grow(by: number /*f64*/): AABB
        get_support(dir: Vector3): Vector3
        get_longest_axis(): Vector3
        get_longest_axis_index(): number /*i64*/
        get_longest_axis_size(): number /*f64*/
        get_shortest_axis(): Vector3
        get_shortest_axis_index(): number /*i64*/
        get_shortest_axis_size(): number /*f64*/
        get_endpoint(idx: number /*i64*/): Vector3
        intersects_segment(from: Vector3, to: Vector3): void
        intersects_ray(from: Vector3, dir: Vector3): void
        position: Vector3
        size: Vector3
        end: Vector3
    }
    class Basis {
        static readonly IDENTITY: Basis
        static readonly FLIP_X: Basis
        static readonly FLIP_Y: Basis
        static readonly FLIP_Z: Basis
        constructor()
        constructor(from: Basis)
        constructor(from: Quaternion)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3)
        inverse(): Basis
        transposed(): Basis
        orthonormalized(): Basis
        determinant(): number /*f64*/
        rotated(axis: Vector3, angle: number /*f64*/): Basis
        scaled(scale: Vector3): Basis
        get_scale(): Vector3
        get_euler(order: number /*i64*/): Vector3
        tdotx(with_: Vector3): number /*f64*/
        tdoty(with_: Vector3): number /*f64*/
        tdotz(with_: Vector3): number /*f64*/
        slerp(to: Basis, weight: number /*f64*/): Basis
        is_conformal(): boolean
        is_equal_approx(b: Basis): boolean
        is_finite(): boolean
        get_rotation_quaternion(): Quaternion
        static looking_at(target: Vector3, up: Vector3, use_model_front: boolean): Basis
        static from_scale(scale: Vector3): Basis
        static from_euler(euler: Vector3, order: number /*i64*/): Basis
        x: Vector3
        y: Vector3
        z: Vector3
    }
    class Transform3D {
        static readonly IDENTITY: Transform3D
        static readonly FLIP_X: Transform3D
        static readonly FLIP_Y: Transform3D
        static readonly FLIP_Z: Transform3D
        constructor()
        constructor(from: Transform3D)
        constructor(basis: Basis, origin: Vector3)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3, origin: Vector3)
        constructor(from: Projection)
        inverse(): Transform3D
        affine_inverse(): Transform3D
        orthonormalized(): Transform3D
        rotated(axis: Vector3, angle: number /*f64*/): Transform3D
        rotated_local(axis: Vector3, angle: number /*f64*/): Transform3D
        scaled(scale: Vector3): Transform3D
        scaled_local(scale: Vector3): Transform3D
        translated(offset: Vector3): Transform3D
        translated_local(offset: Vector3): Transform3D
        looking_at(target: Vector3, up: Vector3, use_model_front: boolean): Transform3D
        interpolate_with(xform: Transform3D, weight: number /*f64*/): Transform3D
        is_equal_approx(xform: Transform3D): boolean
        is_finite(): boolean
        basis: Basis
        origin: Vector3
    }
    namespace Projection {
        enum Planes {
            PLANE_NEAR = 0,
            PLANE_FAR = 1,
            PLANE_LEFT = 2,
            PLANE_TOP = 3,
            PLANE_RIGHT = 4,
            PLANE_BOTTOM = 5,
        }
    }
    class Projection {
        static readonly IDENTITY: Projection
        static readonly ZERO: Projection
        constructor()
        constructor(from: Projection)
        constructor(from: Transform3D)
        constructor(x_axis: Vector4, y_axis: Vector4, z_axis: Vector4, w_axis: Vector4)
        static create_depth_correction(flip_y: boolean): Projection
        static create_light_atlas_rect(rect: Rect2): Projection
        static create_perspective(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean): Projection
        static create_perspective_hmd(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean, eye: number /*i64*/, intraocular_dist: number /*f64*/, convergence_dist: number /*f64*/): Projection
        static create_for_hmd(eye: number /*i64*/, aspect: number /*f64*/, intraocular_dist: number /*f64*/, display_width: number /*f64*/, display_to_lens: number /*f64*/, oversample: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_orthogonal(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_orthogonal_aspect(size: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean): Projection
        static create_frustum(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_frustum_aspect(size: number /*f64*/, aspect: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean): Projection
        static create_fit_aabb(aabb: AABB): Projection
        determinant(): number /*f64*/
        perspective_znear_adjusted(new_znear: number /*f64*/): Projection
        get_projection_plane(plane: number /*i64*/): Plane
        flipped_y(): Projection
        jitter_offseted(offset: Vector2): Projection
        static get_fovy(fovx: number /*f64*/, aspect: number /*f64*/): number /*f64*/
        get_z_far(): number /*f64*/
        get_z_near(): number /*f64*/
        get_aspect(): number /*f64*/
        get_fov(): number /*f64*/
        is_orthogonal(): boolean
        get_viewport_half_extents(): Vector2
        get_far_plane_half_extents(): Vector2
        inverse(): Projection
        get_pixels_per_meter(for_pixel_width: number /*i64*/): number /*i64*/
        get_lod_multiplier(): number /*f64*/
        x: Vector4
        y: Vector4
        z: Vector4
        w: Vector4
    }
    class Color {
        static readonly ALICE_BLUE: Color
        static readonly ANTIQUE_WHITE: Color
        static readonly AQUA: Color
        static readonly AQUAMARINE: Color
        static readonly AZURE: Color
        static readonly BEIGE: Color
        static readonly BISQUE: Color
        static readonly BLACK: Color
        static readonly BLANCHED_ALMOND: Color
        static readonly BLUE: Color
        static readonly BLUE_VIOLET: Color
        static readonly BROWN: Color
        static readonly BURLYWOOD: Color
        static readonly CADET_BLUE: Color
        static readonly CHARTREUSE: Color
        static readonly CHOCOLATE: Color
        static readonly CORAL: Color
        static readonly CORNFLOWER_BLUE: Color
        static readonly CORNSILK: Color
        static readonly CRIMSON: Color
        static readonly CYAN: Color
        static readonly DARK_BLUE: Color
        static readonly DARK_CYAN: Color
        static readonly DARK_GOLDENROD: Color
        static readonly DARK_GRAY: Color
        static readonly DARK_GREEN: Color
        static readonly DARK_KHAKI: Color
        static readonly DARK_MAGENTA: Color
        static readonly DARK_OLIVE_GREEN: Color
        static readonly DARK_ORANGE: Color
        static readonly DARK_ORCHID: Color
        static readonly DARK_RED: Color
        static readonly DARK_SALMON: Color
        static readonly DARK_SEA_GREEN: Color
        static readonly DARK_SLATE_BLUE: Color
        static readonly DARK_SLATE_GRAY: Color
        static readonly DARK_TURQUOISE: Color
        static readonly DARK_VIOLET: Color
        static readonly DEEP_PINK: Color
        static readonly DEEP_SKY_BLUE: Color
        static readonly DIM_GRAY: Color
        static readonly DODGER_BLUE: Color
        static readonly FIREBRICK: Color
        static readonly FLORAL_WHITE: Color
        static readonly FOREST_GREEN: Color
        static readonly FUCHSIA: Color
        static readonly GAINSBORO: Color
        static readonly GHOST_WHITE: Color
        static readonly GOLD: Color
        static readonly GOLDENROD: Color
        static readonly GRAY: Color
        static readonly GREEN: Color
        static readonly GREEN_YELLOW: Color
        static readonly HONEYDEW: Color
        static readonly HOT_PINK: Color
        static readonly INDIAN_RED: Color
        static readonly INDIGO: Color
        static readonly IVORY: Color
        static readonly KHAKI: Color
        static readonly LAVENDER: Color
        static readonly LAVENDER_BLUSH: Color
        static readonly LAWN_GREEN: Color
        static readonly LEMON_CHIFFON: Color
        static readonly LIGHT_BLUE: Color
        static readonly LIGHT_CORAL: Color
        static readonly LIGHT_CYAN: Color
        static readonly LIGHT_GOLDENROD: Color
        static readonly LIGHT_GRAY: Color
        static readonly LIGHT_GREEN: Color
        static readonly LIGHT_PINK: Color
        static readonly LIGHT_SALMON: Color
        static readonly LIGHT_SEA_GREEN: Color
        static readonly LIGHT_SKY_BLUE: Color
        static readonly LIGHT_SLATE_GRAY: Color
        static readonly LIGHT_STEEL_BLUE: Color
        static readonly LIGHT_YELLOW: Color
        static readonly LIME: Color
        static readonly LIME_GREEN: Color
        static readonly LINEN: Color
        static readonly MAGENTA: Color
        static readonly MAROON: Color
        static readonly MEDIUM_AQUAMARINE: Color
        static readonly MEDIUM_BLUE: Color
        static readonly MEDIUM_ORCHID: Color
        static readonly MEDIUM_PURPLE: Color
        static readonly MEDIUM_SEA_GREEN: Color
        static readonly MEDIUM_SLATE_BLUE: Color
        static readonly MEDIUM_SPRING_GREEN: Color
        static readonly MEDIUM_TURQUOISE: Color
        static readonly MEDIUM_VIOLET_RED: Color
        static readonly MIDNIGHT_BLUE: Color
        static readonly MINT_CREAM: Color
        static readonly MISTY_ROSE: Color
        static readonly MOCCASIN: Color
        static readonly NAVAJO_WHITE: Color
        static readonly NAVY_BLUE: Color
        static readonly OLD_LACE: Color
        static readonly OLIVE: Color
        static readonly OLIVE_DRAB: Color
        static readonly ORANGE: Color
        static readonly ORANGE_RED: Color
        static readonly ORCHID: Color
        static readonly PALE_GOLDENROD: Color
        static readonly PALE_GREEN: Color
        static readonly PALE_TURQUOISE: Color
        static readonly PALE_VIOLET_RED: Color
        static readonly PAPAYA_WHIP: Color
        static readonly PEACH_PUFF: Color
        static readonly PERU: Color
        static readonly PINK: Color
        static readonly PLUM: Color
        static readonly POWDER_BLUE: Color
        static readonly PURPLE: Color
        static readonly REBECCA_PURPLE: Color
        static readonly RED: Color
        static readonly ROSY_BROWN: Color
        static readonly ROYAL_BLUE: Color
        static readonly SADDLE_BROWN: Color
        static readonly SALMON: Color
        static readonly SANDY_BROWN: Color
        static readonly SEA_GREEN: Color
        static readonly SEASHELL: Color
        static readonly SIENNA: Color
        static readonly SILVER: Color
        static readonly SKY_BLUE: Color
        static readonly SLATE_BLUE: Color
        static readonly SLATE_GRAY: Color
        static readonly SNOW: Color
        static readonly SPRING_GREEN: Color
        static readonly STEEL_BLUE: Color
        static readonly TAN: Color
        static readonly TEAL: Color
        static readonly THISTLE: Color
        static readonly TOMATO: Color
        static readonly TRANSPARENT: Color
        static readonly TURQUOISE: Color
        static readonly VIOLET: Color
        static readonly WEB_GRAY: Color
        static readonly WEB_GREEN: Color
        static readonly WEB_MAROON: Color
        static readonly WEB_PURPLE: Color
        static readonly WHEAT: Color
        static readonly WHITE: Color
        static readonly WHITE_SMOKE: Color
        static readonly YELLOW: Color
        static readonly YELLOW_GREEN: Color
        constructor()
        constructor(from: Color)
        constructor(from: Color, alpha: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/, a: number /*f64*/)
        constructor(code: string)
        constructor(code: string, alpha: number /*f64*/)
        to_argb32(): number /*i64*/
        to_abgr32(): number /*i64*/
        to_rgba32(): number /*i64*/
        to_argb64(): number /*i64*/
        to_abgr64(): number /*i64*/
        to_rgba64(): number /*i64*/
        to_html(with_alpha: boolean): string
        clamp(min: Color, max: Color): Color
        inverted(): Color
        lerp(to: Color, weight: number /*f64*/): Color
        lightened(amount: number /*f64*/): Color
        darkened(amount: number /*f64*/): Color
        blend(over: Color): Color
        get_luminance(): number /*f64*/
        srgb_to_linear(): Color
        linear_to_srgb(): Color
        is_equal_approx(to: Color): boolean
        static hex(hex: number /*i64*/): Color
        static hex64(hex: number /*i64*/): Color
        static html(rgba: string): Color
        static html_is_valid(color: string): boolean
        static from_string(str: string, default_: Color): Color
        static from_hsv(h: number /*f64*/, s: number /*f64*/, v: number /*f64*/, alpha: number /*f64*/): Color
        static from_ok_hsl(h: number /*f64*/, s: number /*f64*/, l: number /*f64*/, alpha: number /*f64*/): Color
        static from_rgbe9995(rgbe: number /*i64*/): Color
        r: number /*f64*/
        g: number /*f64*/
        b: number /*f64*/
        a: number /*f64*/
        r8: number /*i64*/
        g8: number /*i64*/
        b8: number /*i64*/
        a8: number /*i64*/
        h: number /*f64*/
        s: number /*f64*/
        v: number /*f64*/
    }
    class RID {
        constructor()
        constructor(from: RID)
        is_valid(): boolean
        get_id(): number /*i64*/
    }
    class Callable {
        constructor()
        constructor(from: Callable)
        constructor(object: Object, method: StringName)
        callv(arguments: Array): void
        is_null(): boolean
        is_custom(): boolean
        is_standard(): boolean
        is_valid(): boolean
        get_object(): Object
        get_object_id(): number /*i64*/
        get_method(): StringName
        get_bound_arguments_count(): number /*i64*/
        get_bound_arguments(): Array
        hash(): number /*i64*/
        bindv(arguments: Array): Callable
        unbind(argcount: number /*i64*/): Callable
        call(): void
        call_deferred(): void
        rpc(): void
        rpc_id(peer_id: number /*i64*/): void
        bind(): Callable
    }
    class Signal {
        constructor()
        constructor(from: Signal)
        constructor(object: Object, signal: StringName)
        is_null(): boolean
        get_object(): Object
        get_object_id(): number /*i64*/
        get_name(): StringName
        connect(callable: Callable, flags: number /*i64*/): number /*i64*/
        disconnect(callable: Callable): void
        is_connected(callable: Callable): boolean
        get_connections(): Array
        emit(): void
    }
    class Dictionary {
        constructor()
        constructor(from: Dictionary)
        size(): number /*i64*/
        is_empty(): boolean
        clear(): void
        merge(dictionary: Dictionary, overwrite: boolean): void
        has(key: any): boolean
        has_all(keys: Array): boolean
        find_key(value: any): void
        erase(key: any): boolean
        hash(): number /*i64*/
        keys(): Array
        values(): Array
        duplicate(deep: boolean): Dictionary
        get(key: any, default_: any): void
        make_read_only(): void
        is_read_only(): boolean
    }
    class Array {
        constructor()
        constructor(from: Array)
        constructor(base: Array, type: number /*i64*/, class_name: StringName, script: any)
        constructor(from: PackedByteArray)
        constructor(from: PackedInt32Array)
        constructor(from: PackedInt64Array)
        constructor(from: PackedFloat32Array)
        constructor(from: PackedFloat64Array)
        constructor(from: PackedStringArray)
        constructor(from: PackedVector2Array)
        constructor(from: PackedVector3Array)
        constructor(from: PackedColorArray)
        size(): number /*i64*/
        is_empty(): boolean
        clear(): void
        hash(): number /*i64*/
        assign(array: Array): void
        push_back(value: any): void
        push_front(value: any): void
        append(value: any): void
        append_array(array: Array): void
        resize(size: number /*i64*/): number /*i64*/
        insert(position: number /*i64*/, value: any): number /*i64*/
        remove_at(position: number /*i64*/): void
        fill(value: any): void
        erase(value: any): void
        front(): void
        back(): void
        pick_random(): void
        find(what: any, from: number /*i64*/): number /*i64*/
        rfind(what: any, from: number /*i64*/): number /*i64*/
        count(value: any): number /*i64*/
        has(value: any): boolean
        pop_back(): void
        pop_front(): void
        pop_at(position: number /*i64*/): void
        sort(): void
        sort_custom(func: Callable): void
        shuffle(): void
        bsearch(value: any, before: boolean): number /*i64*/
        bsearch_custom(value: any, func: Callable, before: boolean): number /*i64*/
        reverse(): void
        duplicate(deep: boolean): Array
        slice(begin: number /*i64*/, end: number /*i64*/, step: number /*i64*/, deep: boolean): Array
        filter(method: Callable): Array
        map(method: Callable): Array
        reduce(method: Callable, accum: any): void
        any(method: Callable): boolean
        all(method: Callable): boolean
        max(): void
        min(): void
        is_typed(): boolean
        is_same_typed(array: Array): boolean
        get_typed_builtin(): number /*i64*/
        get_typed_class_name(): StringName
        get_typed_script(): void
        make_read_only(): void
        is_read_only(): boolean
    }
    class PackedByteArray {
        constructor()
        constructor(from: PackedByteArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedByteArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean): number /*i64*/
        duplicate(): PackedByteArray
        find(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
        get_string_from_ascii(): string
        get_string_from_utf8(): string
        get_string_from_utf16(): string
        get_string_from_utf32(): string
        get_string_from_wchar(): string
        hex_encode(): string
        compress(compression_mode: number /*i64*/): PackedByteArray
        decompress(buffer_size: number /*i64*/, compression_mode: number /*i64*/): PackedByteArray
        decompress_dynamic(max_output_size: number /*i64*/, compression_mode: number /*i64*/): PackedByteArray
        decode_u8(byte_offset: number /*i64*/): number /*i64*/
        decode_s8(byte_offset: number /*i64*/): number /*i64*/
        decode_u16(byte_offset: number /*i64*/): number /*i64*/
        decode_s16(byte_offset: number /*i64*/): number /*i64*/
        decode_u32(byte_offset: number /*i64*/): number /*i64*/
        decode_s32(byte_offset: number /*i64*/): number /*i64*/
        decode_u64(byte_offset: number /*i64*/): number /*i64*/
        decode_s64(byte_offset: number /*i64*/): number /*i64*/
        decode_half(byte_offset: number /*i64*/): number /*f64*/
        decode_float(byte_offset: number /*i64*/): number /*f64*/
        decode_double(byte_offset: number /*i64*/): number /*f64*/
        has_encoded_var(byte_offset: number /*i64*/, allow_objects: boolean): boolean
        decode_var(byte_offset: number /*i64*/, allow_objects: boolean): void
        decode_var_size(byte_offset: number /*i64*/, allow_objects: boolean): number /*i64*/
        to_int32_array(): PackedInt32Array
        to_int64_array(): PackedInt64Array
        to_float32_array(): PackedFloat32Array
        to_float64_array(): PackedFloat64Array
        encode_u8(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s8(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u16(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s16(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u32(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s32(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u64(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s64(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_half(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_float(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_double(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_var(byte_offset: number /*i64*/, value: any, allow_objects: boolean): number /*i64*/
    }
    class PackedInt32Array {
        constructor()
        constructor(from: PackedInt32Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedInt32Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedInt32Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean): number /*i64*/
        duplicate(): PackedInt32Array
        find(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
    }
    class PackedInt64Array {
        constructor()
        constructor(from: PackedInt64Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedInt64Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedInt64Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean): number /*i64*/
        duplicate(): PackedInt64Array
        find(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
    }
    class PackedFloat32Array {
        constructor()
        constructor(from: PackedFloat32Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*f64*/): void
        push_back(value: number /*f64*/): boolean
        append(value: number /*f64*/): boolean
        append_array(array: PackedFloat32Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        fill(value: number /*f64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*f64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedFloat32Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*f64*/, before: boolean): number /*i64*/
        duplicate(): PackedFloat32Array
        find(value: number /*f64*/, from: number /*i64*/): number /*i64*/
        rfind(value: number /*f64*/, from: number /*i64*/): number /*i64*/
        count(value: number /*f64*/): number /*i64*/
    }
    class PackedFloat64Array {
        constructor()
        constructor(from: PackedFloat64Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*f64*/): void
        push_back(value: number /*f64*/): boolean
        append(value: number /*f64*/): boolean
        append_array(array: PackedFloat64Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        fill(value: number /*f64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*f64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedFloat64Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*f64*/, before: boolean): number /*i64*/
        duplicate(): PackedFloat64Array
        find(value: number /*f64*/, from: number /*i64*/): number /*i64*/
        rfind(value: number /*f64*/, from: number /*i64*/): number /*i64*/
        count(value: number /*f64*/): number /*i64*/
    }
    class PackedStringArray {
        constructor()
        constructor(from: PackedStringArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: string): void
        push_back(value: string): boolean
        append(value: string): boolean
        append_array(array: PackedStringArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: string): number /*i64*/
        fill(value: string): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: string): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedStringArray
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: string, before: boolean): number /*i64*/
        duplicate(): PackedStringArray
        find(value: string, from: number /*i64*/): number /*i64*/
        rfind(value: string, from: number /*i64*/): number /*i64*/
        count(value: string): number /*i64*/
    }
    class PackedVector2Array {
        constructor()
        constructor(from: PackedVector2Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Vector2): void
        push_back(value: Vector2): boolean
        append(value: Vector2): boolean
        append_array(array: PackedVector2Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Vector2): number /*i64*/
        fill(value: Vector2): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Vector2): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedVector2Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Vector2, before: boolean): number /*i64*/
        duplicate(): PackedVector2Array
        find(value: Vector2, from: number /*i64*/): number /*i64*/
        rfind(value: Vector2, from: number /*i64*/): number /*i64*/
        count(value: Vector2): number /*i64*/
    }
    class PackedVector3Array {
        constructor()
        constructor(from: PackedVector3Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Vector3): void
        push_back(value: Vector3): boolean
        append(value: Vector3): boolean
        append_array(array: PackedVector3Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Vector3): number /*i64*/
        fill(value: Vector3): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Vector3): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedVector3Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Vector3, before: boolean): number /*i64*/
        duplicate(): PackedVector3Array
        find(value: Vector3, from: number /*i64*/): number /*i64*/
        rfind(value: Vector3, from: number /*i64*/): number /*i64*/
        count(value: Vector3): number /*i64*/
    }
    class PackedColorArray {
        constructor()
        constructor(from: PackedColorArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Color): void
        push_back(value: Color): boolean
        append(value: Color): boolean
        append_array(array: PackedColorArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Color): number /*i64*/
        fill(value: Color): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Color): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/): PackedColorArray
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Color, before: boolean): number /*i64*/
        duplicate(): PackedColorArray
        find(value: Color, from: number /*i64*/): number /*i64*/
        rfind(value: Color, from: number /*i64*/): number /*i64*/
        count(value: Color): number /*i64*/
    }
    enum Side {
        SIDE_LEFT = 0,
        SIDE_TOP = 1,
        SIDE_RIGHT = 2,
        SIDE_BOTTOM = 3,
    }
    enum Corner {
        CORNER_TOP_LEFT = 0,
        CORNER_TOP_RIGHT = 1,
        CORNER_BOTTOM_RIGHT = 2,
        CORNER_BOTTOM_LEFT = 3,
    }
    enum Orientation {
        VERTICAL = 1,
        HORIZONTAL = 0,
    }
    enum ClockDirection {
        CLOCKWISE = 0,
        COUNTERCLOCKWISE = 1,
    }
    enum HorizontalAlignment {
        HORIZONTAL_ALIGNMENT_LEFT = 0,
        HORIZONTAL_ALIGNMENT_CENTER = 1,
        HORIZONTAL_ALIGNMENT_RIGHT = 2,
        HORIZONTAL_ALIGNMENT_FILL = 3,
    }
    enum VerticalAlignment {
        VERTICAL_ALIGNMENT_TOP = 0,
        VERTICAL_ALIGNMENT_CENTER = 1,
        VERTICAL_ALIGNMENT_BOTTOM = 2,
        VERTICAL_ALIGNMENT_FILL = 3,
    }
    enum InlineAlignment {
        INLINE_ALIGNMENT_TOP_TO = 0,
        INLINE_ALIGNMENT_CENTER_TO = 1,
        INLINE_ALIGNMENT_BASELINE_TO = 3,
        INLINE_ALIGNMENT_BOTTOM_TO = 2,
        INLINE_ALIGNMENT_TO_TOP = 0,
        INLINE_ALIGNMENT_TO_CENTER = 4,
        INLINE_ALIGNMENT_TO_BASELINE = 8,
        INLINE_ALIGNMENT_TO_BOTTOM = 12,
        INLINE_ALIGNMENT_TOP = 0,
        INLINE_ALIGNMENT_CENTER = 5,
        INLINE_ALIGNMENT_BOTTOM = 14,
        INLINE_ALIGNMENT_IMAGE_MASK = 3,
        INLINE_ALIGNMENT_TEXT_MASK = 12,
    }
    enum EulerOrder {
        EULER_ORDER_XYZ = 0,
        EULER_ORDER_XZY = 1,
        EULER_ORDER_YXZ = 2,
        EULER_ORDER_YZX = 3,
        EULER_ORDER_ZXY = 4,
        EULER_ORDER_ZYX = 5,
    }
    enum Key {
        KEY_NONE = 0,
        KEY_SPECIAL = 4194304,
        KEY_ESCAPE = 4194305,
        KEY_TAB = 4194306,
        KEY_BACKTAB = 4194307,
        KEY_BACKSPACE = 4194308,
        KEY_ENTER = 4194309,
        KEY_KP_ENTER = 4194310,
        KEY_INSERT = 4194311,
        KEY_DELETE = 4194312,
        KEY_PAUSE = 4194313,
        KEY_PRINT = 4194314,
        KEY_SYSREQ = 4194315,
        KEY_CLEAR = 4194316,
        KEY_HOME = 4194317,
        KEY_END = 4194318,
        KEY_LEFT = 4194319,
        KEY_UP = 4194320,
        KEY_RIGHT = 4194321,
        KEY_DOWN = 4194322,
        KEY_PAGEUP = 4194323,
        KEY_PAGEDOWN = 4194324,
        KEY_SHIFT = 4194325,
        KEY_CTRL = 4194326,
        KEY_META = 4194327,
        KEY_ALT = 4194328,
        KEY_CAPSLOCK = 4194329,
        KEY_NUMLOCK = 4194330,
        KEY_SCROLLLOCK = 4194331,
        KEY_F1 = 4194332,
        KEY_F2 = 4194333,
        KEY_F3 = 4194334,
        KEY_F4 = 4194335,
        KEY_F5 = 4194336,
        KEY_F6 = 4194337,
        KEY_F7 = 4194338,
        KEY_F8 = 4194339,
        KEY_F9 = 4194340,
        KEY_F10 = 4194341,
        KEY_F11 = 4194342,
        KEY_F12 = 4194343,
        KEY_F13 = 4194344,
        KEY_F14 = 4194345,
        KEY_F15 = 4194346,
        KEY_F16 = 4194347,
        KEY_F17 = 4194348,
        KEY_F18 = 4194349,
        KEY_F19 = 4194350,
        KEY_F20 = 4194351,
        KEY_F21 = 4194352,
        KEY_F22 = 4194353,
        KEY_F23 = 4194354,
        KEY_F24 = 4194355,
        KEY_F25 = 4194356,
        KEY_F26 = 4194357,
        KEY_F27 = 4194358,
        KEY_F28 = 4194359,
        KEY_F29 = 4194360,
        KEY_F30 = 4194361,
        KEY_F31 = 4194362,
        KEY_F32 = 4194363,
        KEY_F33 = 4194364,
        KEY_F34 = 4194365,
        KEY_F35 = 4194366,
        KEY_KP_MULTIPLY = 4194433,
        KEY_KP_DIVIDE = 4194434,
        KEY_KP_SUBTRACT = 4194435,
        KEY_KP_PERIOD = 4194436,
        KEY_KP_ADD = 4194437,
        KEY_KP_0 = 4194438,
        KEY_KP_1 = 4194439,
        KEY_KP_2 = 4194440,
        KEY_KP_3 = 4194441,
        KEY_KP_4 = 4194442,
        KEY_KP_5 = 4194443,
        KEY_KP_6 = 4194444,
        KEY_KP_7 = 4194445,
        KEY_KP_8 = 4194446,
        KEY_KP_9 = 4194447,
        KEY_MENU = 4194370,
        KEY_HYPER = 4194371,
        KEY_HELP = 4194373,
        KEY_BACK = 4194376,
        KEY_FORWARD = 4194377,
        KEY_STOP = 4194378,
        KEY_REFRESH = 4194379,
        KEY_VOLUMEDOWN = 4194380,
        KEY_VOLUMEMUTE = 4194381,
        KEY_VOLUMEUP = 4194382,
        KEY_MEDIAPLAY = 4194388,
        KEY_MEDIASTOP = 4194389,
        KEY_MEDIAPREVIOUS = 4194390,
        KEY_MEDIANEXT = 4194391,
        KEY_MEDIARECORD = 4194392,
        KEY_HOMEPAGE = 4194393,
        KEY_FAVORITES = 4194394,
        KEY_SEARCH = 4194395,
        KEY_STANDBY = 4194396,
        KEY_OPENURL = 4194397,
        KEY_LAUNCHMAIL = 4194398,
        KEY_LAUNCHMEDIA = 4194399,
        KEY_LAUNCH0 = 4194400,
        KEY_LAUNCH1 = 4194401,
        KEY_LAUNCH2 = 4194402,
        KEY_LAUNCH3 = 4194403,
        KEY_LAUNCH4 = 4194404,
        KEY_LAUNCH5 = 4194405,
        KEY_LAUNCH6 = 4194406,
        KEY_LAUNCH7 = 4194407,
        KEY_LAUNCH8 = 4194408,
        KEY_LAUNCH9 = 4194409,
        KEY_LAUNCHA = 4194410,
        KEY_LAUNCHB = 4194411,
        KEY_LAUNCHC = 4194412,
        KEY_LAUNCHD = 4194413,
        KEY_LAUNCHE = 4194414,
        KEY_LAUNCHF = 4194415,
        KEY_GLOBE = 4194416,
        KEY_KEYBOARD = 4194417,
        KEY_JIS_EISU = 4194418,
        KEY_JIS_KANA = 4194419,
        KEY_UNKNOWN = 8388607,
        KEY_SPACE = 32,
        KEY_EXCLAM = 33,
        KEY_QUOTEDBL = 34,
        KEY_NUMBERSIGN = 35,
        KEY_DOLLAR = 36,
        KEY_PERCENT = 37,
        KEY_AMPERSAND = 38,
        KEY_APOSTROPHE = 39,
        KEY_PARENLEFT = 40,
        KEY_PARENRIGHT = 41,
        KEY_ASTERISK = 42,
        KEY_PLUS = 43,
        KEY_COMMA = 44,
        KEY_MINUS = 45,
        KEY_PERIOD = 46,
        KEY_SLASH = 47,
        KEY_0 = 48,
        KEY_1 = 49,
        KEY_2 = 50,
        KEY_3 = 51,
        KEY_4 = 52,
        KEY_5 = 53,
        KEY_6 = 54,
        KEY_7 = 55,
        KEY_8 = 56,
        KEY_9 = 57,
        KEY_COLON = 58,
        KEY_SEMICOLON = 59,
        KEY_LESS = 60,
        KEY_EQUAL = 61,
        KEY_GREATER = 62,
        KEY_QUESTION = 63,
        KEY_AT = 64,
        KEY_A = 65,
        KEY_B = 66,
        KEY_C = 67,
        KEY_D = 68,
        KEY_E = 69,
        KEY_F = 70,
        KEY_G = 71,
        KEY_H = 72,
        KEY_I = 73,
        KEY_J = 74,
        KEY_K = 75,
        KEY_L = 76,
        KEY_M = 77,
        KEY_N = 78,
        KEY_O = 79,
        KEY_P = 80,
        KEY_Q = 81,
        KEY_R = 82,
        KEY_S = 83,
        KEY_T = 84,
        KEY_U = 85,
        KEY_V = 86,
        KEY_W = 87,
        KEY_X = 88,
        KEY_Y = 89,
        KEY_Z = 90,
        KEY_BRACKETLEFT = 91,
        KEY_BACKSLASH = 92,
        KEY_BRACKETRIGHT = 93,
        KEY_ASCIICIRCUM = 94,
        KEY_UNDERSCORE = 95,
        KEY_QUOTELEFT = 96,
        KEY_BRACELEFT = 123,
        KEY_BAR = 124,
        KEY_BRACERIGHT = 125,
        KEY_ASCIITILDE = 126,
        KEY_YEN = 165,
        KEY_SECTION = 167,
    }
    enum KeyModifierMask {
        KEY_CODE_MASK = 8388607,
        KEY_MODIFIER_MASK = 532676608,
        KEY_MASK_CMD_OR_CTRL = 16777216,
        KEY_MASK_SHIFT = 33554432,
        KEY_MASK_ALT = 67108864,
        KEY_MASK_META = 134217728,
        KEY_MASK_CTRL = 268435456,
        KEY_MASK_KPAD = 536870912,
        KEY_MASK_GROUP_SWITCH = 1073741824,
    }
    enum MouseButton {
        MOUSE_BUTTON_NONE = 0,
        MOUSE_BUTTON_LEFT = 1,
        MOUSE_BUTTON_RIGHT = 2,
        MOUSE_BUTTON_MIDDLE = 3,
        MOUSE_BUTTON_WHEEL_UP = 4,
        MOUSE_BUTTON_WHEEL_DOWN = 5,
        MOUSE_BUTTON_WHEEL_LEFT = 6,
        MOUSE_BUTTON_WHEEL_RIGHT = 7,
        MOUSE_BUTTON_XBUTTON1 = 8,
        MOUSE_BUTTON_XBUTTON2 = 9,
    }
    enum MouseButtonMask {
        MOUSE_BUTTON_MASK_LEFT = 1,
        MOUSE_BUTTON_MASK_RIGHT = 2,
        MOUSE_BUTTON_MASK_MIDDLE = 4,
        MOUSE_BUTTON_MASK_MB_XBUTTON1 = 128,
        MOUSE_BUTTON_MASK_MB_XBUTTON2 = 256,
    }
    enum JoyButton {
        JOY_BUTTON_INVALID = -1,
        JOY_BUTTON_A = 0,
        JOY_BUTTON_B = 1,
        JOY_BUTTON_X = 2,
        JOY_BUTTON_Y = 3,
        JOY_BUTTON_BACK = 4,
        JOY_BUTTON_GUIDE = 5,
        JOY_BUTTON_START = 6,
        JOY_BUTTON_LEFT_STICK = 7,
        JOY_BUTTON_RIGHT_STICK = 8,
        JOY_BUTTON_LEFT_SHOULDER = 9,
        JOY_BUTTON_RIGHT_SHOULDER = 10,
        JOY_BUTTON_DPAD_UP = 11,
        JOY_BUTTON_DPAD_DOWN = 12,
        JOY_BUTTON_DPAD_LEFT = 13,
        JOY_BUTTON_DPAD_RIGHT = 14,
        JOY_BUTTON_MISC1 = 15,
        JOY_BUTTON_PADDLE1 = 16,
        JOY_BUTTON_PADDLE2 = 17,
        JOY_BUTTON_PADDLE3 = 18,
        JOY_BUTTON_PADDLE4 = 19,
        JOY_BUTTON_TOUCHPAD = 20,
        JOY_BUTTON_SDL_MAX = 21,
        JOY_BUTTON_MAX = 128,
    }
    enum JoyAxis {
        JOY_AXIS_INVALID = -1,
        JOY_AXIS_LEFT_X = 0,
        JOY_AXIS_LEFT_Y = 1,
        JOY_AXIS_RIGHT_X = 2,
        JOY_AXIS_RIGHT_Y = 3,
        JOY_AXIS_TRIGGER_LEFT = 4,
        JOY_AXIS_TRIGGER_RIGHT = 5,
        JOY_AXIS_SDL_MAX = 6,
        JOY_AXIS_MAX = 10,
    }
    enum MIDIMessage {
        MIDI_MESSAGE_NONE = 0,
        MIDI_MESSAGE_NOTE_OFF = 8,
        MIDI_MESSAGE_NOTE_ON = 9,
        MIDI_MESSAGE_AFTERTOUCH = 10,
        MIDI_MESSAGE_CONTROL_CHANGE = 11,
        MIDI_MESSAGE_PROGRAM_CHANGE = 12,
        MIDI_MESSAGE_CHANNEL_PRESSURE = 13,
        MIDI_MESSAGE_PITCH_BEND = 14,
        MIDI_MESSAGE_SYSTEM_EXCLUSIVE = 240,
        MIDI_MESSAGE_QUARTER_FRAME = 241,
        MIDI_MESSAGE_SONG_POSITION_POINTER = 242,
        MIDI_MESSAGE_SONG_SELECT = 243,
        MIDI_MESSAGE_TUNE_REQUEST = 246,
        MIDI_MESSAGE_TIMING_CLOCK = 248,
        MIDI_MESSAGE_START = 250,
        MIDI_MESSAGE_CONTINUE = 251,
        MIDI_MESSAGE_STOP = 252,
        MIDI_MESSAGE_ACTIVE_SENSING = 254,
        MIDI_MESSAGE_SYSTEM_RESET = 255,
    }
    enum Error {
        OK = 0,
        FAILED = 1,
        ERR_UNAVAILABLE = 2,
        ERR_UNCONFIGURED = 3,
        ERR_UNAUTHORIZED = 4,
        ERR_PARAMETER_RANGE_ERROR = 5,
        ERR_OUT_OF_MEMORY = 6,
        ERR_FILE_NOT_FOUND = 7,
        ERR_FILE_BAD_DRIVE = 8,
        ERR_FILE_BAD_PATH = 9,
        ERR_FILE_NO_PERMISSION = 10,
        ERR_FILE_ALREADY_IN_USE = 11,
        ERR_FILE_CANT_OPEN = 12,
        ERR_FILE_CANT_WRITE = 13,
        ERR_FILE_CANT_READ = 14,
        ERR_FILE_UNRECOGNIZED = 15,
        ERR_FILE_CORRUPT = 16,
        ERR_FILE_MISSING_DEPENDENCIES = 17,
        ERR_FILE_EOF = 18,
        ERR_CANT_OPEN = 19,
        ERR_CANT_CREATE = 20,
        ERR_QUERY_FAILED = 21,
        ERR_ALREADY_IN_USE = 22,
        ERR_LOCKED = 23,
        ERR_TIMEOUT = 24,
        ERR_CANT_CONNECT = 25,
        ERR_CANT_RESOLVE = 26,
        ERR_CONNECTION_ERROR = 27,
        ERR_CANT_ACQUIRE_RESOURCE = 28,
        ERR_CANT_FORK = 29,
        ERR_INVALID_DATA = 30,
        ERR_INVALID_PARAMETER = 31,
        ERR_ALREADY_EXISTS = 32,
        ERR_DOES_NOT_EXIST = 33,
        ERR_DATABASE_CANT_READ = 34,
        ERR_DATABASE_CANT_WRITE = 35,
        ERR_COMPILATION_FAILED = 36,
        ERR_METHOD_NOT_FOUND = 37,
        ERR_LINK_FAILED = 38,
        ERR_SCRIPT_FAILED = 39,
        ERR_CYCLIC_LINK = 40,
        ERR_INVALID_DECLARATION = 41,
        ERR_DUPLICATE_SYMBOL = 42,
        ERR_PARSE_ERROR = 43,
        ERR_BUSY = 44,
        ERR_SKIP = 45,
        ERR_HELP = 46,
        ERR_BUG = 47,
        ERR_PRINTER_ON_FIRE = 48,
    }
    enum PropertyHint {
        PROPERTY_HINT_NONE = 0,
        PROPERTY_HINT_RANGE = 1,
        PROPERTY_HINT_ENUM = 2,
        PROPERTY_HINT_ENUM_SUGGESTION = 3,
        PROPERTY_HINT_EXP_EASING = 4,
        PROPERTY_HINT_LINK = 5,
        PROPERTY_HINT_FLAGS = 6,
        PROPERTY_HINT_LAYERS_2D_RENDER = 7,
        PROPERTY_HINT_LAYERS_2D_PHYSICS = 8,
        PROPERTY_HINT_LAYERS_2D_NAVIGATION = 9,
        PROPERTY_HINT_LAYERS_3D_RENDER = 10,
        PROPERTY_HINT_LAYERS_3D_PHYSICS = 11,
        PROPERTY_HINT_LAYERS_3D_NAVIGATION = 12,
        PROPERTY_HINT_LAYERS_AVOIDANCE = 37,
        PROPERTY_HINT_FILE = 13,
        PROPERTY_HINT_DIR = 14,
        PROPERTY_HINT_GLOBAL_FILE = 15,
        PROPERTY_HINT_GLOBAL_DIR = 16,
        PROPERTY_HINT_RESOURCE_TYPE = 17,
        PROPERTY_HINT_MULTILINE_TEXT = 18,
        PROPERTY_HINT_EXPRESSION = 19,
        PROPERTY_HINT_PLACEHOLDER_TEXT = 20,
        PROPERTY_HINT_COLOR_NO_ALPHA = 21,
        PROPERTY_HINT_OBJECT_ID = 22,
        PROPERTY_HINT_TYPE_STRING = 23,
        PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE = 24,
        PROPERTY_HINT_OBJECT_TOO_BIG = 25,
        PROPERTY_HINT_NODE_PATH_VALID_TYPES = 26,
        PROPERTY_HINT_SAVE_FILE = 27,
        PROPERTY_HINT_GLOBAL_SAVE_FILE = 28,
        PROPERTY_HINT_INT_IS_OBJECTID = 29,
        PROPERTY_HINT_INT_IS_POINTER = 30,
        PROPERTY_HINT_ARRAY_TYPE = 31,
        PROPERTY_HINT_LOCALE_ID = 32,
        PROPERTY_HINT_LOCALIZABLE_STRING = 33,
        PROPERTY_HINT_NODE_TYPE = 34,
        PROPERTY_HINT_HIDE_QUATERNION_EDIT = 35,
        PROPERTY_HINT_PASSWORD = 36,
        PROPERTY_HINT_MAX = 38,
    }
    enum PropertyUsageFlags {
        PROPERTY_USAGE_NONE = 0,
        PROPERTY_USAGE_STORAGE = 2,
        PROPERTY_USAGE_EDITOR = 4,
        PROPERTY_USAGE_INTERNAL = 8,
        PROPERTY_USAGE_CHECKABLE = 16,
        PROPERTY_USAGE_CHECKED = 32,
        PROPERTY_USAGE_GROUP = 64,
        PROPERTY_USAGE_CATEGORY = 128,
        PROPERTY_USAGE_SUBGROUP = 256,
        PROPERTY_USAGE_CLASS_IS_BITFIELD = 512,
        PROPERTY_USAGE_NO_INSTANCE_STATE = 1024,
        PROPERTY_USAGE_RESTART_IF_CHANGED = 2048,
        PROPERTY_USAGE_SCRIPT_VARIABLE = 4096,
        PROPERTY_USAGE_STORE_IF_NULL = 8192,
        PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 16384,
        PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 32768,
        PROPERTY_USAGE_CLASS_IS_ENUM = 65536,
        PROPERTY_USAGE_NIL_IS_VARIANT = 131072,
        PROPERTY_USAGE_ARRAY = 262144,
        PROPERTY_USAGE_ALWAYS_DUPLICATE = 524288,
        PROPERTY_USAGE_NEVER_DUPLICATE = 1048576,
        PROPERTY_USAGE_HIGH_END_GFX = 2097152,
        PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 4194304,
        PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 8388608,
        PROPERTY_USAGE_KEYING_INCREMENTS = 16777216,
        PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 33554432,
        PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 67108864,
        PROPERTY_USAGE_EDITOR_BASIC_SETTING = 134217728,
        PROPERTY_USAGE_READ_ONLY = 268435456,
        PROPERTY_USAGE_SECRET = 536870912,
        PROPERTY_USAGE_DEFAULT = 6,
        PROPERTY_USAGE_NO_EDITOR = 2,
    }
    enum MethodFlags {
        METHOD_FLAG_NORMAL = 1,
        METHOD_FLAG_EDITOR = 2,
        METHOD_FLAG_CONST = 4,
        METHOD_FLAG_VIRTUAL = 8,
        METHOD_FLAG_VARARG = 16,
        METHOD_FLAG_STATIC = 32,
        METHOD_FLAG_OBJECT_CORE = 64,
        METHOD_FLAGS_DEFAULT = 1,
    }
    namespace Variant {
        enum Type {
            TYPE_NIL = 0,
            TYPE_BOOL = 1,
            TYPE_INT = 2,
            TYPE_FLOAT = 3,
            TYPE_STRING = 4,
            TYPE_VECTOR2 = 5,
            TYPE_VECTOR2I = 6,
            TYPE_RECT2 = 7,
            TYPE_RECT2I = 8,
            TYPE_VECTOR3 = 9,
            TYPE_VECTOR3I = 10,
            TYPE_TRANSFORM2D = 11,
            TYPE_VECTOR4 = 12,
            TYPE_VECTOR4I = 13,
            TYPE_PLANE = 14,
            TYPE_QUATERNION = 15,
            TYPE_AABB = 16,
            TYPE_BASIS = 17,
            TYPE_TRANSFORM3D = 18,
            TYPE_PROJECTION = 19,
            TYPE_COLOR = 20,
            TYPE_STRING_NAME = 21,
            TYPE_NODE_PATH = 22,
            TYPE_RID = 23,
            TYPE_OBJECT = 24,
            TYPE_CALLABLE = 25,
            TYPE_SIGNAL = 26,
            TYPE_DICTIONARY = 27,
            TYPE_ARRAY = 28,
            TYPE_PACKED_BYTE_ARRAY = 29,
            TYPE_PACKED_INT32_ARRAY = 30,
            TYPE_PACKED_INT64_ARRAY = 31,
            TYPE_PACKED_FLOAT32_ARRAY = 32,
            TYPE_PACKED_FLOAT64_ARRAY = 33,
            TYPE_PACKED_STRING_ARRAY = 34,
            TYPE_PACKED_VECTOR2_ARRAY = 35,
            TYPE_PACKED_VECTOR3_ARRAY = 36,
            TYPE_PACKED_COLOR_ARRAY = 37,
            TYPE_MAX = 38,
        }
    }
    namespace Variant {
        enum Operator {
            OP_EQUAL = 0,
            OP_NOT_EQUAL = 1,
            OP_LESS = 2,
            OP_LESS_EQUAL = 3,
            OP_GREATER = 4,
            OP_GREATER_EQUAL = 5,
            OP_ADD = 6,
            OP_SUBTRACT = 7,
            OP_MULTIPLY = 8,
            OP_DIVIDE = 9,
            OP_NEGATE = 10,
            OP_POSITIVE = 11,
            OP_MODULE = 12,
            OP_POWER = 13,
            OP_SHIFT_LEFT = 14,
            OP_SHIFT_RIGHT = 15,
            OP_BIT_AND = 16,
            OP_BIT_OR = 17,
            OP_BIT_XOR = 18,
            OP_BIT_NEGATE = 19,
            OP_AND = 20,
            OP_OR = 21,
            OP_XOR = 22,
            OP_NOT = 23,
            OP_IN = 24,
            OP_MAX = 25,
        }
    }
}
