
declare namespace jsb {
    const DEV_ENABLED: boolean;
    const TOOLS_ENABLED: boolean;

    //TODO remove this later
    enum GodotVariantType {
        NIL,

        // atomic types
        BOOL,
        INT,
        FLOAT,
        STRING,

        // math types
        VECTOR2,
        VECTOR2I,
        RECT2,
        RECT2I,
        VECTOR3,
        VECTOR3I,
        TRANSFORM2D,
        VECTOR4,
        VECTOR4I,
        PLANE,
        QUATERNION,
        AABB,
        BASIS,
        TRANSFORM3D,
        PROJECTION,

        // misc types
        COLOR,
        STRING_NAME,
        NODE_PATH,
        RID,
        OBJECT,
        CALLABLE,
        SIGNAL,
        DICTIONARY,
        ARRAY,

        // typed arrays
        PACKED_BYTE_ARRAY,
        PACKED_INT32_ARRAY,
        PACKED_INT64_ARRAY,
        PACKED_FLOAT32_ARRAY,
        PACKED_FLOAT64_ARRAY,
        PACKED_STRING_ARRAY,
        PACKED_VECTOR2_ARRAY,
        PACKED_VECTOR3_ARRAY,
        PACKED_COLOR_ARRAY,

        VARIANT_MAX
    };


    namespace editor {
        interface ConstantInfo {
            name: string;
            value: number; /** int64_t */
        }

        interface EnumInfo {
            name: string;

            literals: Array<string>;
            is_bitfield: boolean;
        }

        // COPIED FROM GODOT SOURCE CODE
        enum MethodFlags {
            METHOD_FLAG_NORMAL = 1,
            METHOD_FLAG_EDITOR = 2,
            METHOD_FLAG_CONST = 4,
            METHOD_FLAG_VIRTUAL = 8,
            METHOD_FLAG_VARARG = 16,
            METHOD_FLAG_STATIC = 32,
            METHOD_FLAG_OBJECT_CORE = 64,
            METHOD_FLAGS_DEFAULT = METHOD_FLAG_NORMAL,
        }

        // COPIED FROM GODOT SOURCE CODE
        enum PropertyHint {
            PROPERTY_HINT_NONE, ///< no hint provided.
            PROPERTY_HINT_RANGE, ///< hint_text = "min,max[,step][,or_greater][,or_less][,hide_slider][,radians_as_degrees][,degrees][,exp][,suffix:<keyword>] range.
            PROPERTY_HINT_ENUM, ///< hint_text= "val1,val2,val3,etc"
            PROPERTY_HINT_ENUM_SUGGESTION, ///< hint_text= "val1,val2,val3,etc"
            PROPERTY_HINT_EXP_EASING, /// exponential easing function (Math::ease) use "attenuation" hint string to revert (flip h), "positive_only" to exclude in-out and out-in. (ie: "attenuation,positive_only")
            PROPERTY_HINT_LINK,
            PROPERTY_HINT_FLAGS, ///< hint_text= "flag1,flag2,etc" (as bit flags)
            PROPERTY_HINT_LAYERS_2D_RENDER,
            PROPERTY_HINT_LAYERS_2D_PHYSICS,
            PROPERTY_HINT_LAYERS_2D_NAVIGATION,
            PROPERTY_HINT_LAYERS_3D_RENDER,
            PROPERTY_HINT_LAYERS_3D_PHYSICS,
            PROPERTY_HINT_LAYERS_3D_NAVIGATION,
            PROPERTY_HINT_FILE, ///< a file path must be passed, hint_text (optionally) is a filter "*.png,*.wav,*.doc,"
            PROPERTY_HINT_DIR, ///< a directory path must be passed
            PROPERTY_HINT_GLOBAL_FILE, ///< a file path must be passed, hint_text (optionally) is a filter "*.png,*.wav,*.doc,"
            PROPERTY_HINT_GLOBAL_DIR, ///< a directory path must be passed
            PROPERTY_HINT_RESOURCE_TYPE, ///< a resource object type
            PROPERTY_HINT_MULTILINE_TEXT, ///< used for string properties that can contain multiple lines
            PROPERTY_HINT_EXPRESSION, ///< used for string properties that can contain multiple lines
            PROPERTY_HINT_PLACEHOLDER_TEXT, ///< used to set a placeholder text for string properties
            PROPERTY_HINT_COLOR_NO_ALPHA, ///< used for ignoring alpha component when editing a color
            PROPERTY_HINT_OBJECT_ID,
            PROPERTY_HINT_TYPE_STRING, ///< a type string, the hint is the base type to choose
            PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE, // Deprecated.
            PROPERTY_HINT_OBJECT_TOO_BIG, ///< object is too big to send
            PROPERTY_HINT_NODE_PATH_VALID_TYPES,
            PROPERTY_HINT_SAVE_FILE, ///< a file path must be passed, hint_text (optionally) is a filter "*.png,*.wav,*.doc,". This opens a save dialog
            PROPERTY_HINT_GLOBAL_SAVE_FILE, ///< a file path must be passed, hint_text (optionally) is a filter "*.png,*.wav,*.doc,". This opens a save dialog
            PROPERTY_HINT_INT_IS_OBJECTID, // Deprecated.
            PROPERTY_HINT_INT_IS_POINTER,
            PROPERTY_HINT_ARRAY_TYPE,
            PROPERTY_HINT_LOCALE_ID,
            PROPERTY_HINT_LOCALIZABLE_STRING,
            PROPERTY_HINT_NODE_TYPE, ///< a node object type
            PROPERTY_HINT_HIDE_QUATERNION_EDIT, /// Only Node3D::transform should hide the quaternion editor.
            PROPERTY_HINT_PASSWORD,
            PROPERTY_HINT_LAYERS_AVOIDANCE,
            PROPERTY_HINT_MAX,
        }

        // COPIED FROM GODOT SOURCE CODE
        enum PropertyUsageFlags {
            PROPERTY_USAGE_NONE = 0,
            PROPERTY_USAGE_STORAGE = 1 << 1,
            PROPERTY_USAGE_EDITOR = 1 << 2,
            PROPERTY_USAGE_INTERNAL = 1 << 3,
            PROPERTY_USAGE_CHECKABLE = 1 << 4, // Used for editing global variables.
            PROPERTY_USAGE_CHECKED = 1 << 5, // Used for editing global variables.
            PROPERTY_USAGE_GROUP = 1 << 6, // Used for grouping props in the editor.
            PROPERTY_USAGE_CATEGORY = 1 << 7,
            PROPERTY_USAGE_SUBGROUP = 1 << 8,
            PROPERTY_USAGE_CLASS_IS_BITFIELD = 1 << 9,
            PROPERTY_USAGE_NO_INSTANCE_STATE = 1 << 10,
            PROPERTY_USAGE_RESTART_IF_CHANGED = 1 << 11,
            PROPERTY_USAGE_SCRIPT_VARIABLE = 1 << 12,
            PROPERTY_USAGE_STORE_IF_NULL = 1 << 13,
            PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 1 << 14,
            PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 1 << 15, // Deprecated.
            PROPERTY_USAGE_CLASS_IS_ENUM = 1 << 16,
            PROPERTY_USAGE_NIL_IS_VARIANT = 1 << 17,
            PROPERTY_USAGE_ARRAY = 1 << 18, // Used in the inspector to group properties as elements of an array.
            PROPERTY_USAGE_ALWAYS_DUPLICATE = 1 << 19, // When duplicating a resource, always duplicate, even with subresource duplication disabled.
            PROPERTY_USAGE_NEVER_DUPLICATE = 1 << 20, // When duplicating a resource, never duplicate, even with subresource duplication enabled.
            PROPERTY_USAGE_HIGH_END_GFX = 1 << 21,
            PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 1 << 22,
            PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 1 << 23,
            PROPERTY_USAGE_KEYING_INCREMENTS = 1 << 24, // Used in inspector to increment property when keyed in animation player.
            PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 1 << 25, // Deprecated.
            PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 1 << 26, // For Object properties, instantiate them when creating in editor.
            PROPERTY_USAGE_EDITOR_BASIC_SETTING = 1 << 27, //for project or editor settings, show when basic settings are selected.
            PROPERTY_USAGE_READ_ONLY = 1 << 28, // Mark a property as read-only in the inspector.
            PROPERTY_USAGE_SECRET = 1 << 29, // Export preset credentials that should be stored separately from the rest of the export config.

            PROPERTY_USAGE_DEFAULT = PROPERTY_USAGE_STORAGE | PROPERTY_USAGE_EDITOR,
            PROPERTY_USAGE_NO_EDITOR = PROPERTY_USAGE_STORAGE,
        }

        interface MethodInfo {
            id: number;
            name: string;
            hint_flags: MethodFlags;
            is_static: boolean;
            is_const: boolean;
            is_vararg: boolean;
            argument_count: number; /** int32_t */

            args_: Array<PropertyInfo>;
            return_: PropertyInfo | undefined;
        }

        interface PropertyInfo {
            name: string;
            type: Type;
            class_name: string;
            hint: PropertyHint;
            hint_string: string;
            usage: PropertyUsageFlags;
        }

        interface SignalInfo {
            id: number;
            name: string;
            name_: string;
            flags: MethodFlags;
            // return_val: FieldInfo;
            // arguments: Array<FieldInfo>;
        }

        interface ClassInfo {
            name: string;
            super: string;

            // fields: Array<FieldInfo>;
            // properties: Array<PropertyInfo>;
            methods: Array<MethodInfo>;
            constants: Array<ConstantInfo>;
            enums: Array<EnumInfo>;
            signals: Array<SignalInfo>;
        }

        interface SingletonInfo {
            name: string;
            class_name: string;
            user_created: boolean;
            editor_only: boolean;
        }

        interface GlobalConstantInfo {
            name: string;
            values: { [name: string]: number /** int64_t */ };
        }

        /**
         * get a list of all classes registered in ClassDB
         */
        function get_classes(): Array<ClassInfo>;

        function get_singletons(): Array<SingletonInfo>;

        function get_global_constants(): Array<GlobalConstantInfo>;

        function delete_file(filepath: string): void;
    }
}

