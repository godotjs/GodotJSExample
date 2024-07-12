// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    enum JoyAxis {
        /** An invalid game controller axis. */
        JOY_AXIS_INVALID = -1,
        
        /** Game controller left joystick x-axis. */
        JOY_AXIS_LEFT_X = 0,
        
        /** Game controller left joystick y-axis. */
        JOY_AXIS_LEFT_Y = 1,
        
        /** Game controller right joystick x-axis. */
        JOY_AXIS_RIGHT_X = 2,
        
        /** Game controller right joystick y-axis. */
        JOY_AXIS_RIGHT_Y = 3,
        
        /** Game controller left trigger axis. */
        JOY_AXIS_TRIGGER_LEFT = 4,
        
        /** Game controller right trigger axis. */
        JOY_AXIS_TRIGGER_RIGHT = 5,
        
        /** The number of SDL game controller axes. */
        JOY_AXIS_SDL_MAX = 6,
        
        /** The maximum number of game controller axes: OpenVR supports up to 5 Joysticks making a total of 10 axes. */
        JOY_AXIS_MAX = 10,
    }
    enum MIDIMessage {
        /** Does not correspond to any MIDI message. This is the default value of [member InputEventMIDI.message]. */
        MIDI_MESSAGE_NONE = 0,
        
        /** MIDI message sent when a note is released.  
         *      
         *  **Note:** Not all MIDI devices send this message; some may send [constant MIDI_MESSAGE_NOTE_ON] with [member InputEventMIDI.velocity] set to `0`.  
         */
        MIDI_MESSAGE_NOTE_OFF = 8,
        
        /** MIDI message sent when a note is pressed. */
        MIDI_MESSAGE_NOTE_ON = 9,
        
        /** MIDI message sent to indicate a change in pressure while a note is being pressed down, also called aftertouch. */
        MIDI_MESSAGE_AFTERTOUCH = 10,
        
        /** MIDI message sent when a controller value changes. In a MIDI device, a controller is any input that doesn't play notes. These may include sliders for volume, balance, and panning, as well as switches and pedals. See the [url=https://en.wikipedia.org/wiki/General_MIDI#Controller_events]General MIDI specification[/url] for a small list. */
        MIDI_MESSAGE_CONTROL_CHANGE = 11,
        
        /** MIDI message sent when the MIDI device changes its current instrument (also called  *program*  or  *preset* ). */
        MIDI_MESSAGE_PROGRAM_CHANGE = 12,
        
        /** MIDI message sent to indicate a change in pressure for the whole channel. Some MIDI devices may send this instead of [constant MIDI_MESSAGE_AFTERTOUCH]. */
        MIDI_MESSAGE_CHANNEL_PRESSURE = 13,
        
        /** MIDI message sent when the value of the pitch bender changes, usually a wheel on the MIDI device. */
        MIDI_MESSAGE_PITCH_BEND = 14,
        
        /** MIDI system exclusive (SysEx) message. This type of message is not standardized and it's highly dependent on the MIDI device sending it.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SYSTEM_EXCLUSIVE = 240,
        
        /** MIDI message sent every quarter frame to keep connected MIDI devices synchronized. Related to [constant MIDI_MESSAGE_TIMING_CLOCK].  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_QUARTER_FRAME = 241,
        
        /** MIDI message sent to jump onto a new position in the current sequence or song.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SONG_POSITION_POINTER = 242,
        
        /** MIDI message sent to select a sequence or song to play.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SONG_SELECT = 243,
        
        /** MIDI message sent to request a tuning calibration. Used on analog synthesizers. Most modern MIDI devices do not need this message. */
        MIDI_MESSAGE_TUNE_REQUEST = 246,
        
        /** MIDI message sent 24 times after [constant MIDI_MESSAGE_QUARTER_FRAME], to keep connected MIDI devices synchronized. */
        MIDI_MESSAGE_TIMING_CLOCK = 248,
        
        /** MIDI message sent to start the current sequence or song from the beginning. */
        MIDI_MESSAGE_START = 250,
        
        /** MIDI message sent to resume from the point the current sequence or song was paused. */
        MIDI_MESSAGE_CONTINUE = 251,
        
        /** MIDI message sent to pause the current sequence or song. */
        MIDI_MESSAGE_STOP = 252,
        
        /** MIDI message sent repeatedly while the MIDI device is idle, to tell the receiver that the connection is alive. Most MIDI devices do not send this message. */
        MIDI_MESSAGE_ACTIVE_SENSING = 254,
        
        /** MIDI message sent to reset a MIDI device to its default state, as if it was just turned on. It should not be sent when the MIDI device is being turned on. */
        MIDI_MESSAGE_SYSTEM_RESET = 255,
    }
    enum Error {
        /** Methods that return [enum Error] return [constant OK] when no error occurred.  
         *  Since [constant OK] has value 0, and all other error constants are positive integers, it can also be used in boolean checks.  
         *  **Example:**  
         *    
         *      
         *  **Note:** Many functions do not return an error code, but will print error messages to standard output.  
         */
        OK = 0,
        
        /** Generic error. */
        FAILED = 1,
        
        /** Unavailable error. */
        ERR_UNAVAILABLE = 2,
        
        /** Unconfigured error. */
        ERR_UNCONFIGURED = 3,
        
        /** Unauthorized error. */
        ERR_UNAUTHORIZED = 4,
        
        /** Parameter range error. */
        ERR_PARAMETER_RANGE_ERROR = 5,
        
        /** Out of memory (OOM) error. */
        ERR_OUT_OF_MEMORY = 6,
        
        /** File: Not found error. */
        ERR_FILE_NOT_FOUND = 7,
        
        /** File: Bad drive error. */
        ERR_FILE_BAD_DRIVE = 8,
        
        /** File: Bad path error. */
        ERR_FILE_BAD_PATH = 9,
        
        /** File: No permission error. */
        ERR_FILE_NO_PERMISSION = 10,
        
        /** File: Already in use error. */
        ERR_FILE_ALREADY_IN_USE = 11,
        
        /** File: Can't open error. */
        ERR_FILE_CANT_OPEN = 12,
        
        /** File: Can't write error. */
        ERR_FILE_CANT_WRITE = 13,
        
        /** File: Can't read error. */
        ERR_FILE_CANT_READ = 14,
        
        /** File: Unrecognized error. */
        ERR_FILE_UNRECOGNIZED = 15,
        
        /** File: Corrupt error. */
        ERR_FILE_CORRUPT = 16,
        
        /** File: Missing dependencies error. */
        ERR_FILE_MISSING_DEPENDENCIES = 17,
        
        /** File: End of file (EOF) error. */
        ERR_FILE_EOF = 18,
        
        /** Can't open error. */
        ERR_CANT_OPEN = 19,
        
        /** Can't create error. */
        ERR_CANT_CREATE = 20,
        
        /** Query failed error. */
        ERR_QUERY_FAILED = 21,
        
        /** Already in use error. */
        ERR_ALREADY_IN_USE = 22,
        
        /** Locked error. */
        ERR_LOCKED = 23,
        
        /** Timeout error. */
        ERR_TIMEOUT = 24,
        
        /** Can't connect error. */
        ERR_CANT_CONNECT = 25,
        
        /** Can't resolve error. */
        ERR_CANT_RESOLVE = 26,
        
        /** Connection error. */
        ERR_CONNECTION_ERROR = 27,
        
        /** Can't acquire resource error. */
        ERR_CANT_ACQUIRE_RESOURCE = 28,
        
        /** Can't fork process error. */
        ERR_CANT_FORK = 29,
        
        /** Invalid data error. */
        ERR_INVALID_DATA = 30,
        
        /** Invalid parameter error. */
        ERR_INVALID_PARAMETER = 31,
        
        /** Already exists error. */
        ERR_ALREADY_EXISTS = 32,
        
        /** Does not exist error. */
        ERR_DOES_NOT_EXIST = 33,
        
        /** Database: Read error. */
        ERR_DATABASE_CANT_READ = 34,
        
        /** Database: Write error. */
        ERR_DATABASE_CANT_WRITE = 35,
        
        /** Compilation failed error. */
        ERR_COMPILATION_FAILED = 36,
        
        /** Method not found error. */
        ERR_METHOD_NOT_FOUND = 37,
        
        /** Linking failed error. */
        ERR_LINK_FAILED = 38,
        
        /** Script failed error. */
        ERR_SCRIPT_FAILED = 39,
        
        /** Cycling link (import cycle) error. */
        ERR_CYCLIC_LINK = 40,
        
        /** Invalid declaration error. */
        ERR_INVALID_DECLARATION = 41,
        
        /** Duplicate symbol error. */
        ERR_DUPLICATE_SYMBOL = 42,
        
        /** Parse error. */
        ERR_PARSE_ERROR = 43,
        
        /** Busy error. */
        ERR_BUSY = 44,
        
        /** Skip error. */
        ERR_SKIP = 45,
        
        /** Help error. Used internally when passing `--version` or `--help` as executable options. */
        ERR_HELP = 46,
        
        /** Bug error, caused by an implementation issue in the method.  
         *      
         *  **Note:** If a built-in method returns this code, please open an issue on [url=https://github.com/godotengine/godot/issues]the GitHub Issue Tracker[/url].  
         */
        ERR_BUG = 47,
        
        /** Printer on fire error (This is an easter egg, no built-in methods return this error code). */
        ERR_PRINTER_ON_FIRE = 48,
    }
    enum PropertyHint {
        /** The property has no hint for the editor. */
        PROPERTY_HINT_NONE = 0,
        
        /** Hints that an [int] or [float] property should be within a range specified via the hint string `"min,max"` or `"min,max,step"`. The hint string can optionally include `"or_greater"` and/or `"or_less"` to allow manual input going respectively above the max or below the min values.  
         *  **Example:** `"-360,360,1,or_greater,or_less"`.  
         *  Additionally, other keywords can be included: `"exp"` for exponential range editing, `"radians_as_degrees"` for editing radian angles in degrees (the range values are also in degrees), `"degrees"` to hint at an angle and `"hide_slider"` to hide the slider.  
         */
        PROPERTY_HINT_RANGE = 1,
        
        /** Hints that an [int] or [String] property is an enumerated value to pick in a list specified via a hint string.  
         *  The hint string is a comma separated list of names such as `"Hello,Something,Else"`. Whitespaces are **not** removed from either end of a name. For integer properties, the first name in the list has value 0, the next 1, and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"Zero,One,Three:3,Four,Six:6"`.  
         */
        PROPERTY_HINT_ENUM = 2,
        
        /** Hints that a [String] property can be an enumerated value to pick in a list specified via a hint string such as `"Hello,Something,Else"`.  
         *  Unlike [constant PROPERTY_HINT_ENUM], a property with this hint still accepts arbitrary values and can be empty. The list of values serves to suggest possible values.  
         */
        PROPERTY_HINT_ENUM_SUGGESTION = 3,
        
        /** Hints that a [float] property should be edited via an exponential easing function. The hint string can include `"attenuation"` to flip the curve horizontally and/or `"positive_only"` to exclude in/out easing and limit values to be greater than or equal to zero. */
        PROPERTY_HINT_EXP_EASING = 4,
        
        /** Hints that a vector property should allow its components to be linked. For example, this allows [member Vector2.x] and [member Vector2.y] to be edited together. */
        PROPERTY_HINT_LINK = 5,
        
        /** Hints that an [int] property is a bitmask with named bit flags.  
         *  The hint string is a comma separated list of names such as `"Bit0,Bit1,Bit2,Bit3"`. Whitespaces are **not** removed from either end of a name. The first name in the list has value 1, the next 2, then 4, 8, 16 and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"A:4,B:8,C:16"`. You can also combine several flags (`"A:4,B:8,AB:12,C:16"`).  
         *      
         *  **Note:** A flag value must be at least `1` and at most `2 ** 32 - 1`.  
         *      
         *  **Note:** Unlike [constant PROPERTY_HINT_ENUM], the previous explicit value is not taken into account. For the hint `"A:16,B,C"`, A is 16, B is 2, C is 4.  
         */
        PROPERTY_HINT_FLAGS = 6,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D render layers. */
        PROPERTY_HINT_LAYERS_2D_RENDER = 7,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D physics layers. */
        PROPERTY_HINT_LAYERS_2D_PHYSICS = 8,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D navigation layers. */
        PROPERTY_HINT_LAYERS_2D_NAVIGATION = 9,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D render layers. */
        PROPERTY_HINT_LAYERS_3D_RENDER = 10,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D physics layers. */
        PROPERTY_HINT_LAYERS_3D_PHYSICS = 11,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D navigation layers. */
        PROPERTY_HINT_LAYERS_3D_NAVIGATION = 12,
        
        /** Hints that an integer property is a bitmask using the optionally named avoidance layers. */
        PROPERTY_HINT_LAYERS_AVOIDANCE = 37,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. */
        PROPERTY_HINT_FILE = 13,
        
        /** Hints that a [String] property is a path to a directory. Editing it will show a file dialog for picking the path. */
        PROPERTY_HINT_DIR = 14,
        
        /** Hints that a [String] property is an absolute path to a file outside the project folder. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards, like `"*.png,*.jpg"`. */
        PROPERTY_HINT_GLOBAL_FILE = 15,
        
        /** Hints that a [String] property is an absolute path to a directory outside the project folder. Editing it will show a file dialog for picking the path. */
        PROPERTY_HINT_GLOBAL_DIR = 16,
        
        /** Hints that a property is an instance of a [Resource]-derived type, optionally specified via the hint string (e.g. `"Texture2D"`). Editing it will show a popup menu of valid resource types to instantiate. */
        PROPERTY_HINT_RESOURCE_TYPE = 17,
        
        /** Hints that a [String] property is text with line breaks. Editing it will show a text input field where line breaks can be typed. */
        PROPERTY_HINT_MULTILINE_TEXT = 18,
        
        /** Hints that a [String] property is an [Expression]. */
        PROPERTY_HINT_EXPRESSION = 19,
        
        /** Hints that a [String] property should show a placeholder text on its input field, if empty. The hint string is the placeholder text to use. */
        PROPERTY_HINT_PLACEHOLDER_TEXT = 20,
        
        /** Hints that a [Color] property should be edited without affecting its transparency ([member Color.a] is not editable). */
        PROPERTY_HINT_COLOR_NO_ALPHA = 21,
        
        /** Hints that the property's value is an object encoded as object ID, with its type specified in the hint string. Used by the debugger. */
        PROPERTY_HINT_OBJECT_ID = 22,
        
        /** If a property is [String], hints that the property represents a particular type (class). This allows to select a type from the create dialog. The property will store the selected type as a string.  
         *  If a property is [Array], hints the editor how to show elements. The `hint_string` must encode nested types using `":"` and `"/"`.  
         *    
         *  Examples:  
         *    
         *      
         *  **Note:** The trailing colon is required for properly detecting built-in types.  
         */
        PROPERTY_HINT_TYPE_STRING = 23,
        
        /**  *Deprecated.*  This hint is not used anywhere and will be removed in the future. */
        PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE = 24,
        
        /** Hints that an object is too big to be sent via the debugger. */
        PROPERTY_HINT_OBJECT_TOO_BIG = 25,
        
        /** Hints that the hint string specifies valid node types for property of type [NodePath]. */
        PROPERTY_HINT_NODE_PATH_VALID_TYPES = 26,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the project's directory. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters]. */
        PROPERTY_HINT_SAVE_FILE = 27,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the entire filesystem. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters]. */
        PROPERTY_HINT_GLOBAL_SAVE_FILE = 28,
        
        /** Hints that an [int] property is an object ID.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_HINT_INT_IS_OBJECTID = 29,
        
        /** Hints that an [int] property is a pointer. Used by GDExtension. */
        PROPERTY_HINT_INT_IS_POINTER = 30,
        
        /** Hints that a property is an [Array] with the stored type specified in the hint string. */
        PROPERTY_HINT_ARRAY_TYPE = 31,
        
        /** Hints that a string property is a locale code. Editing it will show a locale dialog for picking language and country. */
        PROPERTY_HINT_LOCALE_ID = 32,
        
        /** Hints that a dictionary property is string translation map. Dictionary keys are locale codes and, values are translated strings. */
        PROPERTY_HINT_LOCALIZABLE_STRING = 33,
        
        /** Hints that a property is an instance of a [Node]-derived type, optionally specified via the hint string (e.g. `"Node2D"`). Editing it will show a dialog for picking a node from the scene. */
        PROPERTY_HINT_NODE_TYPE = 34,
        
        /** Hints that a quaternion property should disable the temporary euler editor. */
        PROPERTY_HINT_HIDE_QUATERNION_EDIT = 35,
        
        /** Hints that a string property is a password, and every character is replaced with the secret character. */
        PROPERTY_HINT_PASSWORD = 36,
        
        /** Represents the size of the [enum PropertyHint] enum. */
        PROPERTY_HINT_MAX = 38,
    }
    enum PropertyUsageFlags {
        /** The property is not stored, and does not display in the editor. This is the default for non-exported properties. */
        PROPERTY_USAGE_NONE = 0,
        
        /** The property is serialized and saved in the scene file (default). */
        PROPERTY_USAGE_STORAGE = 2,
        
        /** The property is shown in the [EditorInspector] (default). */
        PROPERTY_USAGE_EDITOR = 4,
        
        /** The property is excluded from the class reference. */
        PROPERTY_USAGE_INTERNAL = 8,
        
        /** The property can be checked in the [EditorInspector]. */
        PROPERTY_USAGE_CHECKABLE = 16,
        
        /** The property is checked in the [EditorInspector]. */
        PROPERTY_USAGE_CHECKED = 32,
        
        /** Used to group properties together in the editor. See [EditorInspector]. */
        PROPERTY_USAGE_GROUP = 64,
        
        /** Used to categorize properties together in the editor. */
        PROPERTY_USAGE_CATEGORY = 128,
        
        /** Used to group properties together in the editor in a subgroup (under a group). See [EditorInspector]. */
        PROPERTY_USAGE_SUBGROUP = 256,
        
        /** The property is a bitfield, i.e. it contains multiple flags represented as bits. */
        PROPERTY_USAGE_CLASS_IS_BITFIELD = 512,
        
        /** The property does not save its state in [PackedScene]. */
        PROPERTY_USAGE_NO_INSTANCE_STATE = 1024,
        
        /** Editing the property prompts the user for restarting the editor. */
        PROPERTY_USAGE_RESTART_IF_CHANGED = 2048,
        
        /** The property is a script variable which should be serialized and saved in the scene file. */
        PROPERTY_USAGE_SCRIPT_VARIABLE = 4096,
        
        /** The property value of type [Object] will be stored even if its value is `null`. */
        PROPERTY_USAGE_STORE_IF_NULL = 8192,
        
        /** If this property is modified, all inspector fields will be refreshed. */
        PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 16384,
        
        /** Signifies a default value from a placeholder script instance.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 32768,
        
        /** The property is an enum, i.e. it only takes named integer constants from its associated enumeration. */
        PROPERTY_USAGE_CLASS_IS_ENUM = 65536,
        
        /** If property has `nil` as default value, its type will be [Variant]. */
        PROPERTY_USAGE_NIL_IS_VARIANT = 131072,
        
        /** The property is an array. */
        PROPERTY_USAGE_ARRAY = 262144,
        
        /** When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should always be duplicated, regardless of the `subresources` bool parameter. */
        PROPERTY_USAGE_ALWAYS_DUPLICATE = 524288,
        
        /** When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should never be duplicated, regardless of the `subresources` bool parameter. */
        PROPERTY_USAGE_NEVER_DUPLICATE = 1048576,
        
        /** The property is only shown in the editor if modern renderers are supported (the Compatibility rendering method is excluded). */
        PROPERTY_USAGE_HIGH_END_GFX = 2097152,
        
        /** The [NodePath] property will always be relative to the scene's root. Mostly useful for local resources. */
        PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 4194304,
        
        /** Use when a resource is created on the fly, i.e. the getter will always return a different instance. [ResourceSaver] needs this information to properly save such resources. */
        PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 8388608,
        
        /** Inserting an animation key frame of this property will automatically increment the value, allowing to easily keyframe multiple values in a row. */
        PROPERTY_USAGE_KEYING_INCREMENTS = 16777216,
        
        /** When loading, the resource for this property can be set at the end of loading.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 33554432,
        
        /** When this property is a [Resource] and base object is a [Node], a resource instance will be automatically created whenever the node is created in the editor. */
        PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 67108864,
        
        /** The property is considered a basic setting and will appear even when advanced mode is disabled. Used for project settings. */
        PROPERTY_USAGE_EDITOR_BASIC_SETTING = 134217728,
        
        /** The property is read-only in the [EditorInspector]. */
        PROPERTY_USAGE_READ_ONLY = 268435456,
        
        /** An export preset property with this flag contains confidential information and is stored separately from the rest of the export preset configuration. */
        PROPERTY_USAGE_SECRET = 536870912,
        
        /** Default usage (storage and editor). */
        PROPERTY_USAGE_DEFAULT = 6,
        
        /** Default usage but without showing the property in the editor (storage). */
        PROPERTY_USAGE_NO_EDITOR = 2,
    }
    enum MethodFlags {
        /** Flag for a normal method. */
        METHOD_FLAG_NORMAL = 1,
        
        /** Flag for an editor method. */
        METHOD_FLAG_EDITOR = 2,
        
        /** Flag for a constant method. */
        METHOD_FLAG_CONST = 4,
        
        /** Flag for a virtual method. */
        METHOD_FLAG_VIRTUAL = 8,
        
        /** Flag for a method with a variable number of arguments. */
        METHOD_FLAG_VARARG = 16,
        
        /** Flag for a static method. */
        METHOD_FLAG_STATIC = 32,
        
        /** Used internally. Allows to not dump core virtual methods (such as [method Object._notification]) to the JSON API. */
        METHOD_FLAG_OBJECT_CORE = 64,
        
        /** Default method flags (normal). */
        METHOD_FLAGS_DEFAULT = 1,
    }
    namespace Variant {
        enum Type {
            /** Variable is `null`. */
            TYPE_NIL = 0,
            
            /** Variable is of type [bool]. */
            TYPE_BOOL = 1,
            
            /** Variable is of type [int]. */
            TYPE_INT = 2,
            
            /** Variable is of type [float]. */
            TYPE_FLOAT = 3,
            
            /** Variable is of type [String]. */
            TYPE_STRING = 4,
            
            /** Variable is of type [Vector2]. */
            TYPE_VECTOR2 = 5,
            
            /** Variable is of type [Vector2i]. */
            TYPE_VECTOR2I = 6,
            
            /** Variable is of type [Rect2]. */
            TYPE_RECT2 = 7,
            
            /** Variable is of type [Rect2i]. */
            TYPE_RECT2I = 8,
            
            /** Variable is of type [Vector3]. */
            TYPE_VECTOR3 = 9,
            
            /** Variable is of type [Vector3i]. */
            TYPE_VECTOR3I = 10,
            
            /** Variable is of type [Transform2D]. */
            TYPE_TRANSFORM2D = 11,
            
            /** Variable is of type [Vector4]. */
            TYPE_VECTOR4 = 12,
            
            /** Variable is of type [Vector4i]. */
            TYPE_VECTOR4I = 13,
            
            /** Variable is of type [Plane]. */
            TYPE_PLANE = 14,
            
            /** Variable is of type [Quaternion]. */
            TYPE_QUATERNION = 15,
            
            /** Variable is of type [AABB]. */
            TYPE_AABB = 16,
            
            /** Variable is of type [Basis]. */
            TYPE_BASIS = 17,
            
            /** Variable is of type [Transform3D]. */
            TYPE_TRANSFORM3D = 18,
            
            /** Variable is of type [Projection]. */
            TYPE_PROJECTION = 19,
            
            /** Variable is of type [Color]. */
            TYPE_COLOR = 20,
            
            /** Variable is of type [StringName]. */
            TYPE_STRING_NAME = 21,
            
            /** Variable is of type [NodePath]. */
            TYPE_NODE_PATH = 22,
            
            /** Variable is of type [RID]. */
            TYPE_RID = 23,
            
            /** Variable is of type [Object]. */
            TYPE_OBJECT = 24,
            
            /** Variable is of type [Callable]. */
            TYPE_CALLABLE = 25,
            
            /** Variable is of type [Signal]. */
            TYPE_SIGNAL = 26,
            
            /** Variable is of type [Dictionary]. */
            TYPE_DICTIONARY = 27,
            
            /** Variable is of type [Array]. */
            TYPE_ARRAY = 28,
            
            /** Variable is of type [PackedByteArray]. */
            TYPE_PACKED_BYTE_ARRAY = 29,
            
            /** Variable is of type [PackedInt32Array]. */
            TYPE_PACKED_INT32_ARRAY = 30,
            
            /** Variable is of type [PackedInt64Array]. */
            TYPE_PACKED_INT64_ARRAY = 31,
            
            /** Variable is of type [PackedFloat32Array]. */
            TYPE_PACKED_FLOAT32_ARRAY = 32,
            
            /** Variable is of type [PackedFloat64Array]. */
            TYPE_PACKED_FLOAT64_ARRAY = 33,
            
            /** Variable is of type [PackedStringArray]. */
            TYPE_PACKED_STRING_ARRAY = 34,
            
            /** Variable is of type [PackedVector2Array]. */
            TYPE_PACKED_VECTOR2_ARRAY = 35,
            
            /** Variable is of type [PackedVector3Array]. */
            TYPE_PACKED_VECTOR3_ARRAY = 36,
            
            /** Variable is of type [PackedColorArray]. */
            TYPE_PACKED_COLOR_ARRAY = 37,
            
            /** Represents the size of the [enum Variant.Type] enum. */
            TYPE_MAX = 38,
        }
    }
    namespace Variant {
        enum Operator {
            /** Equality operator (`==`). */
            OP_EQUAL = 0,
            
            /** Inequality operator (`!=`). */
            OP_NOT_EQUAL = 1,
            
            /** Less than operator (`<`). */
            OP_LESS = 2,
            
            /** Less than or equal operator (`<=`). */
            OP_LESS_EQUAL = 3,
            
            /** Greater than operator (`>`). */
            OP_GREATER = 4,
            
            /** Greater than or equal operator (`>=`). */
            OP_GREATER_EQUAL = 5,
            
            /** Addition operator (`+`). */
            OP_ADD = 6,
            
            /** Subtraction operator (`-`). */
            OP_SUBTRACT = 7,
            
            /** Multiplication operator (`*`). */
            OP_MULTIPLY = 8,
            
            /** Division operator (`/`). */
            OP_DIVIDE = 9,
            
            /** Unary negation operator (`-`). */
            OP_NEGATE = 10,
            
            /** Unary plus operator (`+`). */
            OP_POSITIVE = 11,
            
            /** Remainder/modulo operator (`%`). */
            OP_MODULE = 12,
            
            /** Power operator (`**`). */
            OP_POWER = 13,
            
            /** Left shift operator (`<<`). */
            OP_SHIFT_LEFT = 14,
            
            /** Right shift operator (`>>`). */
            OP_SHIFT_RIGHT = 15,
            
            /** Bitwise AND operator (`&`). */
            OP_BIT_AND = 16,
            
            /** Bitwise OR operator (`|`). */
            OP_BIT_OR = 17,
            
            /** Bitwise XOR operator (`^`). */
            OP_BIT_XOR = 18,
            
            /** Bitwise NOT operator (`~`). */
            OP_BIT_NEGATE = 19,
            
            /** Logical AND operator (`and` or `&&`). */
            OP_AND = 20,
            
            /** Logical OR operator (`or` or `||`). */
            OP_OR = 21,
            
            /** Logical XOR operator (not implemented in GDScript). */
            OP_XOR = 22,
            
            /** Logical NOT operator (`not` or `!`). */
            OP_NOT = 23,
            
            /** Logical IN operator (`in`). */
            OP_IN = 24,
            
            /** Represents the size of the [enum Variant.Operator] enum. */
            OP_MAX = 25,
        }
    }
    /** Returns the sine of angle [param angle_rad] in radians.  
     *    
     */
    static function sin(angle_rad: float64): float64
    
    /** Returns the cosine of angle [param angle_rad] in radians.  
     *    
     */
    static function cos(angle_rad: float64): float64
    
    /** Returns the tangent of angle [param angle_rad] in radians.  
     *    
     */
    static function tan(angle_rad: float64): float64
    
    /** Returns the hyperbolic sine of [param x].  
     *    
     */
    static function sinh(x: float64): float64
    
    /** Returns the hyperbolic cosine of [param x] in radians.  
     *    
     */
    static function cosh(x: float64): float64
    
    /** Returns the hyperbolic tangent of [param x].  
     *    
     */
    static function tanh(x: float64): float64
    
    /** Returns the arc sine of [param x] in radians. Use to get the angle of sine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method asin] from returning [constant @GDScript.NAN].  
     *    
     */
    static function asin(x: float64): float64
    
    /** Returns the arc cosine of [param x] in radians. Use to get the angle of cosine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method acos] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acos(x: float64): float64
    
    /** Returns the arc tangent of [param x] in radians. Use it to get the angle from an angle's tangent in trigonometry.  
     *  The method cannot know in which quadrant the angle should fall. See [method atan2] if you have both `y` and [code skip-lint]x`.  
     *    
     *  If [param x] is between `-PI / 2` and `PI / 2` (inclusive), `atan(tan(x))` is equal to [param x].  
     */
    static function atan(x: float64): float64
    
    /** Returns the arc tangent of `y/x` in radians. Use to get the angle of tangent `y/x`. To compute the value, the method takes into account the sign of both arguments in order to determine the quadrant.  
     *  Important note: The Y coordinate comes first, by convention.  
     *    
     */
    static function atan2(y: float64, x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) sine of [param x], returning a value in radians. Use it to get the angle from an angle's sine in hyperbolic space.  
     *    
     */
    static function asinh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) cosine of [param x], returning a value in radians. Use it to get the angle from an angle's cosine in hyperbolic space if [param x] is larger or equal to 1. For values of [param x] lower than 1, it will return 0, in order to prevent [method acosh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acosh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) tangent of [param x], returning a value in radians. Use it to get the angle from an angle's tangent in hyperbolic space if [param x] is between -1 and 1 (non-inclusive).  
     *  In mathematics, the inverse hyperbolic tangent is only defined for -1 < [param x] < 1 in the real set, so values equal or lower to -1 for [param x] return negative [constant @GDScript.INF] and values equal or higher than 1 return positive [constant @GDScript.INF] in order to prevent [method atanh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function atanh(x: float64): float64
    
    /** Returns the square root of [param x], where [param x] is a non-negative number.  
     *    
     *      
     *  **Note:** Negative values of [param x] return NaN ("Not a Number"). in C#, if you need negative inputs, use `System.Numerics.Complex`.  
     */
    static function sqrt(x: float64): float64
    
    /** Returns the floating-point remainder of [param x] divided by [param y], keeping the sign of [param x].  
     *    
     *  For the integer remainder operation, use the `%` operator.  
     */
    static function fmod(x: float64, y: float64): float64
    
    /** Returns the floating-point modulus of [param x] divided by [param y], wrapping equally in positive and negative.  
     *    
     *  Produces:  
     *    
     */
    static function fposmod(x: float64, y: float64): float64
    
    /** Returns the integer modulus of [param x] divided by [param y] that wraps equally in positive and negative.  
     *    
     *  Produces:  
     *    
     */
    static function posmod(x: int64, y: int64): int64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method floorf], [method floori], [method Vector2.floor], [method Vector3.floor], or [method Vector4.floor].  
     */
    static function floor(x: any): void
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning a [float].  
     */
    static function floorf(x: float64): float64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning an [int].  
     *      
     *  **Note:** This function is  *not*  the same as `int(x)`, which rounds towards 0.  
     */
    static function floori(x: float64): int64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method ceilf], [method ceili], [method Vector2.ceil], [method Vector3.ceil], or [method Vector4.ceil].  
     */
    static function ceil(x: any): void
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning a [float].  
     */
    static function ceilf(x: float64): float64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning an [int].  
     */
    static function ceili(x: float64): int64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method ceil], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method roundf], [method roundi], [method Vector2.round], [method Vector3.round], or [method Vector4.round].  
     */
    static function round(x: any): void
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning a [float].  
     */
    static function roundf(x: float64): float64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning an [int].  
     */
    static function roundi(x: float64): int64
    
    /** Returns the absolute value of a [Variant] parameter [param x] (i.e. non-negative value). Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method absf], [method absi], [method Vector2.abs], [method Vector2i.abs], [method Vector3.abs], [method Vector3i.abs], [method Vector4.abs], or [method Vector4i.abs].  
     */
    static function abs(x: any): void
    
    /** Returns the absolute value of float parameter [param x] (i.e. positive value).  
     *    
     */
    static function absf(x: float64): float64
    
    /** Returns the absolute value of int parameter [param x] (i.e. positive value).  
     *    
     */
    static function absi(x: int64): int64
    
    /** Returns the same type of [Variant] as [param x], with `-1` for negative values, `1` for positive values, and `0` for zeros. For `nan` values it returns 0.  
     *  Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method signf], [method signi], [method Vector2.sign], [method Vector2i.sign], [method Vector3.sign], [method Vector3i.sign], [method Vector4.sign], or [method Vector4i.sign].  
     */
    static function sign(x: any): void
    
    /** Returns `-1.0` if [param x] is negative, `1.0` if [param x] is positive, and `0.0` if [param x] is zero. For `nan` values of [param x] it returns 0.0.  
     *    
     */
    static function signf(x: float64): float64
    
    /** Returns `-1` if [param x] is negative, `1` if [param x] is positive, and `0` if if [param x] is zero.  
     *    
     */
    static function signi(x: int64): int64
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating point number to an arbitrary number of decimals.  
     *  The returned value is the same type of [Variant] as [param step]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method floor], and [method round].  
     *      
     *  **Note:** For better type safety, use [method snappedf], [method snappedi], [method Vector2.snapped], [method Vector2i.snapped], [method Vector3.snapped], [method Vector3i.snapped], [method Vector4.snapped], or [method Vector4i.snapped].  
     */
    static function snapped(x: any, step: any): void
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating point number to an arbitrary number of decimals.  
     *  A type-safe version of [method snapped], returning a [float].  
     *    
     */
    static function snappedf(x: float64, step: float64): float64
    
    /** Returns the multiple of [param step] that is the closest to [param x].  
     *  A type-safe version of [method snapped], returning an [int].  
     *    
     */
    static function snappedi(x: float64, step: int64): int64
    
    /** Returns the result of [param base] raised to the power of [param exp].  
     *  In GDScript, this is the equivalent of the `**` operator.  
     *    
     */
    static function pow(base: float64, exp: float64): float64
    
    /** Returns the [url=https://en.wikipedia.org/wiki/Natural_logarithm]natural logarithm[/url] of [param x] (base [url=https://en.wikipedia.org/wiki/E_(mathematical_constant)] *e* [/url], with  *e*  being approximately 2.71828). This is the amount of time needed to reach a certain level of continuous growth.  
     *      
     *  **Note:** This is not the same as the "log" function on most calculators, which uses a base 10 logarithm. To use base 10 logarithm, use `log(x) / log(10)`.  
     *    
     *      
     *  **Note:** The logarithm of `0` returns `-inf`, while negative values return `-nan`.  
     */
    static function log(x: float64): float64
    
    /** The natural exponential function. It raises the mathematical constant  *e*  to the power of [param x] and returns it.  
     *   *e*  has an approximate value of 2.71828, and can be obtained with `exp(1)`.  
     *  For exponents to other bases use the method [method pow].  
     *    
     */
    static function exp(x: float64): float64
    
    /** Returns `true` if [param x] is a NaN ("Not a Number" or invalid) value. */
    static function is_nan(x: float64): boolean
    
    /** Returns `true` if [param x] is either positive infinity or negative infinity. */
    static function is_inf(x: float64): boolean
    
    /** Returns `true` if [param a] and [param b] are approximately equal to each other.  
     *  Here, "approximately equal" means that [param a] and [param b] are within a small internal epsilon of each other, which scales with the magnitude of the numbers.  
     *  Infinity values of the same sign are considered equal.  
     */
    static function is_equal_approx(a: float64, b: float64): boolean
    
    /** Returns `true` if [param x] is zero or almost zero. The comparison is done using a tolerance calculation with a small internal epsilon.  
     *  This function is faster than using [method is_equal_approx] with one value as zero.  
     */
    static function is_zero_approx(x: float64): boolean
    
    /** Returns whether [param x] is a finite value, i.e. it is not [constant @GDScript.NAN], positive infinity, or negative infinity. */
    static function is_finite(x: float64): boolean
    
    /** Returns an "eased" value of [param x] based on an easing function defined with [param curve]. This easing function is based on an exponent. The [param curve] can be any floating-point number, with specific values leading to the following behaviors:  
     *    
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/ease_cheatsheet.png]ease() curve values cheatsheet[/url]  
     *  See also [method smoothstep]. If you need to perform more advanced transitions, use [method Tween.interpolate_value].  
     */
    static function ease(x: float64, curve: float64): float64
    
    /** Returns the position of the first non-zero digit, after the decimal point. Note that the maximum return value is 10, which is a design decision in the implementation.  
     *    
     */
    static function step_decimals(x: float64): int64
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clamp] on the result of this function.  
     *  Both [param from] and [param to] must be the same type. Supported types: [int], [float], [Vector2], [Vector3], [Vector4], [Color], [Quaternion], [Basis].  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep]. See also [method remap] to map a continuous series of values to another.  
     *      
     *  **Note:** For better type safety, use [method lerpf], [method Vector2.lerp], [method Vector3.lerp], [method Vector4.lerp], [method Color.lerp], [method Quaternion.slerp] or [method Basis.slerp].  
     */
    static function lerp(from: any, to: any, weight: any): void
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clampf] on the result of this function.  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep].  
     */
    static function lerpf(from: float64, to: float64, weight: float64): float64
    
    /** Cubic interpolates between two values by the factor defined in [param weight] with [param pre] and [param post] values. */
    static function cubic_interpolate(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    
    /** Cubic interpolates between two rotation values with shortest path by the factor defined in [param weight] with [param pre] and [param post] values. See also [method lerp_angle]. */
    static function cubic_interpolate_angle(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    
    /** Cubic interpolates between two values by the factor defined in [param weight] with [param pre] and [param post] values.  
     *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
     */
    static function cubic_interpolate_in_time(from: float64, to: float64, pre: float64, post: float64, weight: float64, to_t: float64, pre_t: float64, post_t: float64): float64
    
    /** Cubic interpolates between two rotation values with shortest path by the factor defined in [param weight] with [param pre] and [param post] values. See also [method lerp_angle].  
     *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
     */
    static function cubic_interpolate_angle_in_time(from: float64, to: float64, pre: float64, post: float64, weight: float64, to_t: float64, pre_t: float64, post_t: float64): float64
    
    /** Returns the point at the given [param t] on a one-dimensional [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by the given [param control_1], [param control_2], and [param end] points. */
    static function bezier_interpolate(start: float64, control_1: float64, control_2: float64, end: float64, t: float64): float64
    
    /** Returns the derivative at the given [param t] on a one-dimensional [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by the given [param control_1], [param control_2], and [param end] points. */
    static function bezier_derivative(start: float64, control_1: float64, control_2: float64, end: float64, t: float64): float64
    
    /** Returns the difference between the two angles, in the range of `[-PI, +PI]`. When [param from] and [param to] are opposite, returns `-PI` if [param from] is smaller than [param to], or `PI` otherwise. */
    static function angle_difference(from: float64, to: float64): float64
    
    /** Linearly interpolates between two angles (in radians) by a [param weight] value between 0.0 and 1.0.  
     *  Similar to [method lerp], but interpolates correctly when the angles wrap around [constant @GDScript.TAU]. To perform eased interpolation with [method lerp_angle], combine it with [method ease] or [method smoothstep].  
     *    
     *      
     *  **Note:** This function lerps through the shortest path between [param from] and [param to]. However, when these two angles are approximately `PI + k * TAU` apart for any integer `k`, it's not obvious which way they lerp due to floating-point precision errors. For example, `lerp_angle(0, PI, weight)` lerps counter-clockwise, while `lerp_angle(0, PI + 5 * TAU, weight)` lerps clockwise.  
     */
    static function lerp_angle(from: float64, to: float64, weight: float64): float64
    
    /** Returns an interpolation or extrapolation factor considering the range specified in [param from] and [param to], and the interpolated value specified in [param weight]. The returned value will be between `0.0` and `1.0` if [param weight] is between [param from] and [param to] (inclusive). If [param weight] is located outside this range, then an extrapolation factor will be returned (return value lower than `0.0` or greater than `1.0`). Use [method clamp] on the result of [method inverse_lerp] if this is not desired.  
     *    
     *  See also [method lerp], which performs the reverse of this operation, and [method remap] to map a continuous series of values to another.  
     */
    static function inverse_lerp(from: float64, to: float64, weight: float64): float64
    
    /** Maps a [param value] from range `[istart, istop]` to `[ostart, ostop]`. See also [method lerp] and [method inverse_lerp]. If [param value] is outside `[istart, istop]`, then the resulting value will also be outside `[ostart, ostop]`. If this is not desired, use [method clamp] on the result of this function.  
     *    
     *  For complex use cases where multiple ranges are needed, consider using [Curve] or [Gradient] instead.  
     */
    static function remap(value: float64, istart: float64, istop: float64, ostart: float64, ostop: float64): float64
    
    /** Returns the result of smoothly interpolating the value of [param x] between `0` and `1`, based on the where [param x] lies with respect to the edges [param from] and [param to].  
     *  The return value is `0` if `x <= from`, and `1` if `x >= to`. If [param x] lies between [param from] and [param to], the returned value follows an S-shaped curve that maps [param x] between `0` and `1`.  
     *  This S-shaped curve is the cubic Hermite interpolator, given by `f(y) = 3*y^2 - 2*y^3` where `y = (x-from) / (to-from)`.  
     *    
     *  Compared to [method ease] with a curve value of `-1.6521`, [method smoothstep] returns the smoothest possible curve with no sudden changes in the derivative. If you need to perform more advanced transitions, use [Tween] or [AnimationPlayer].  
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/smoothstep_ease_comparison.png]Comparison between smoothstep() and ease(x, -1.6521) return values[/url]  
     */
    static function smoothstep(from: float64, to: float64, x: float64): float64
    
    /** Moves [param from] toward [param to] by the [param delta] amount. Will not go past [param to].  
     *  Use a negative [param delta] value to move away.  
     *    
     */
    static function move_toward(from: float64, to: float64, delta: float64): float64
    
    /** Rotates [param from] toward [param to] by the [param delta] amount. Will not go past [param to].  
     *  Similar to [method move_toward], but interpolates correctly when the angles wrap around [constant @GDScript.TAU].  
     *  If [param delta] is negative, this function will rotate away from [param to], toward the opposite angle, and will not go past the opposite angle.  
     */
    static function rotate_toward(from: float64, to: float64, delta: float64): float64
    
    /** Converts an angle expressed in degrees to radians.  
     *    
     */
    static function deg_to_rad(deg: float64): float64
    
    /** Converts an angle expressed in radians to degrees.  
     *    
     */
    static function rad_to_deg(rad: float64): float64
    
    /** Converts from linear energy to decibels (audio). This can be used to implement volume sliders that behave as expected (since volume isn't linear).  
     *  **Example:**  
     *    
     */
    static function linear_to_db(lin: float64): float64
    
    /** Converts from decibels to linear energy (audio). */
    static function db_to_linear(db: float64): float64
    
    /** Wraps the [Variant] [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *  Variant types [int] and [float] are supported. If any of the arguments is [float] this function returns a [float], otherwise it returns an [int].  
     *    
     */
    static function wrap(value: any, min: any, max: any): void
    
    /** Wraps the integer [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     */
    static function wrapi(value: int64, min: int64, max: int64): int64
    
    /** Wraps the float [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     *    
     *      
     *  **Note:** If [param min] is `0`, this is equivalent to [method fposmod], so prefer using that instead.  
     *  [method wrapf] is more flexible than using the [method fposmod] approach by giving the user control over the minimum value.  
     */
    static function wrapf(value: float64, min: float64, max: float64): float64
    
    /** Returns the maximum of the given numeric values. This function can take any number of arguments.  
     *    
     */
    static function max(...vargargs: any[]): void
    
    /** Returns the maximum of two [int] values.  
     *    
     */
    static function maxi(a: int64, b: int64): int64
    
    /** Returns the maximum of two [float] values.  
     *    
     */
    static function maxf(a: float64, b: float64): float64
    
    /** Returns the minimum of the given numeric values. This function can take any number of arguments.  
     *    
     */
    static function min(...vargargs: any[]): void
    
    /** Returns the minimum of two [int] values.  
     *    
     */
    static function mini(a: int64, b: int64): int64
    
    /** Returns the minimum of two [float] values.  
     *    
     */
    static function minf(a: float64, b: float64): float64
    
    /** Clamps the [param value], returning a [Variant] not less than [param min] and not more than [param max]. Any values that can be compared with the less than and greater than operators will work.  
     *    
     *      
     *  **Note:** For better type safety, use [method clampf], [method clampi], [method Vector2.clamp], [method Vector2i.clamp], [method Vector3.clamp], [method Vector3i.clamp], [method Vector4.clamp], [method Vector4i.clamp], or [method Color.clamp] (not currently supported by this method).  
     *      
     *  **Note:** When using this on vectors it will  *not*  perform component-wise clamping, and will pick [param min] if `value < min` or [param max] if `value > max`. To perform component-wise clamping use the methods listed above.  
     */
    static function clamp(value: any, min: any, max: any): void
    
    /** Clamps the [param value], returning an [int] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampi(value: int64, min: int64, max: int64): int64
    
    /** Clamps the [param value], returning a [float] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampf(value: float64, min: float64, max: float64): float64
    
    /** Returns the smallest integer power of 2 that is greater than or equal to [param value].  
     *    
     *  **Warning:** Due to its implementation, this method returns `0` rather than `1` for values less than or equal to `0`, with an exception for [param value] being the smallest negative 64-bit integer (`-9223372036854775808`) in which case the [param value] is returned unchanged.  
     */
    static function nearest_po2(value: int64): int64
    
    /** Wraps [param value] between `0` and the [param length]. If the limit is reached, the next value the function returns is decreased to the `0` side or increased to the [param length] side (like a triangle wave). If [param length] is less than zero, it becomes positive.  
     *    
     */
    static function pingpong(value: float64, length: float64): float64
    
    /** Randomizes the seed (or the internal state) of the random number generator. The current implementation uses a number based on the device's time.  
     *      
     *  **Note:** This function is called automatically when the project is run. If you need to fix the seed to have consistent, reproducible results, use [method seed] to initialize the random number generator.  
     */
    static function randomize(): void
    
    /** Returns a random unsigned 32-bit integer. Use remainder to obtain a random value in the interval `[0, N - 1]` (where N is smaller than 2^32).  
     *    
     */
    static function randi(): int64
    
    /** Returns a random floating point value between `0.0` and `1.0` (inclusive).  
     *    
     */
    static function randf(): float64
    
    /** Returns a random signed 32-bit integer between [param from] and [param to] (inclusive). If [param to] is lesser than [param from], they are swapped.  
     *    
     */
    static function randi_range(from: int64, to: int64): int64
    
    /** Returns a random floating point value between [param from] and [param to] (inclusive).  
     *    
     */
    static function randf_range(from: float64, to: float64): float64
    
    /** Returns a normally-distributed pseudo-random floating point value using Box-Muller transform with the specified [param mean] and a standard [param deviation]. This is also called Gaussian distribution. */
    static function randfn(mean: float64, deviation: float64): float64
    
    /** Sets the seed for the random number generator to [param base]. Setting the seed manually can ensure consistent, repeatable results for most random functions.  
     *    
     */
    static function seed(base: int64): void
    
    /** Given a [param seed], returns a [PackedInt64Array] of size `2`, where its first element is the randomized [int] value, and the second element is the same as [param seed]. Passing the same [param seed] consistently returns the same array.  
     *      
     *  **Note:** "Seed" here refers to the internal state of the pseudo random number generator, currently implemented as a 64 bit integer.  
     *    
     */
    static function rand_from_seed(seed: int64): PackedInt64Array
    
    /** Returns a [WeakRef] instance holding a weak reference to [param obj]. Returns an empty [WeakRef] instance if [param obj] is `null`. Prints an error and returns `null` if [param obj] is neither [Object]-derived nor `null`.  
     *  A weak reference to an object is not enough to keep the object alive: when the only remaining references to a referent are weak references, garbage collection is free to destroy the referent and reuse its memory for something else. However, until the object is actually destroyed the weak reference may return the object even if there are no strong references to it.  
     */
    static function weakref(obj: any): void
    
    /** Returns the internal type of the given [param variable], using the [enum Variant.Type] values.  
     *    
     *  See also [method type_string].  
     */
    // [INVALID_NAME]: static function typeof(variable: any): int64
    
    /** Converts the given [param variant] to the given [param type], using the [enum Variant.Type] values. This method is generous with how it handles types, it can automatically convert between array types, convert numeric [String]s to [int], and converting most things to [String].  
     *  If the type conversion cannot be done, this method will return the default value for that type, for example converting [Rect2] to [Vector2] will always return [constant Vector2.ZERO]. This method will never show error messages as long as [param type] is a valid Variant type.  
     *  The returned value is a [Variant], but the data inside and the [enum Variant.Type] will be the same as the requested type.  
     *    
     */
    static function type_convert(variant: any, type: int64): void
    
    /** Converts one or more arguments of any [Variant] type to a [String] in the best way possible.  
     *    
     */
    static function str(...vargargs: any[]): string
    
    /** Returns a human-readable name for the given [enum Error] code.  
     *    
     */
    static function error_string(error: int64): string
    
    /** Returns a human-readable name of the given [param type], using the [enum Variant.Type] values.  
     *    
     *  See also [method typeof].  
     */
    static function type_string(type: int64): string
    
    /** Converts one or more arguments of any type to string in the best way possible and prints them to the console.  
     *    
     *      
     *  **Note:** Consider using [method push_error] and [method push_warning] to print error and warning messages instead of [method print] or [method print_rich]. This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed.  
     */
    static function print(...vargargs: any[]): void
    
    /** Converts one or more arguments of any type to string in the best way possible and prints them to the console.  
     *  The following BBCode tags are supported: `b`, `i`, `u`, `s`, `indent`, `code`, `url`, `center`, `right`, `color`, `bgcolor`, `fgcolor`.  
     *  Color tags only support the following named colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `pink`, `purple`, `cyan`, `white`, `orange`, `gray`. Hexadecimal color codes are not supported.  
     *  URL tags only support URLs wrapped by a URL tag, not URLs with a different title.  
     *  When printing to standard output, the supported subset of BBCode is converted to ANSI escape codes for the terminal emulator to display. Support for ANSI escape codes varies across terminal emulators, especially for italic and strikethrough. In standard output, `code` is represented with faint text but without any font change. Unsupported tags are left as-is in standard output.  
     *    
     *      
     *  **Note:** Consider using [method push_error] and [method push_warning] to print error and warning messages instead of [method print] or [method print_rich]. This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed.  
     *      
     *  **Note:** On Windows, only Windows 10 and later correctly displays ANSI escape codes in standard output.  
     */
    static function print_rich(...vargargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to standard error line.  
     *    
     */
    static function printerr(...vargargs: any[]): void
    
    /** Prints one or more arguments to the console with a tab between each argument.  
     *    
     */
    static function printt(...vargargs: any[]): void
    
    /** Prints one or more arguments to the console with a space between each argument.  
     *    
     */
    static function prints(...vargargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to the OS terminal. Unlike [method print], no newline is automatically added at the end.  
     *    
     */
    static function printraw(...vargargs: any[]): void
    
    /** If verbose mode is enabled ([method OS.is_stdout_verbose] returning `true`), converts one or more arguments of any type to string in the best way possible and prints them to the console. */
    static function print_verbose(...vargargs: any[]): void
    
    /** Pushes an error message to Godot's built-in debugger and to the OS terminal.  
     *    
     *      
     *  **Note:** This function does not pause project execution. To print an error message and pause project execution in debug builds, use `assert(false, "test error")` instead.  
     */
    static function push_error(...vargargs: any[]): void
    
    /** Pushes a warning message to Godot's built-in debugger and to the OS terminal.  
     *    
     */
    static function push_warning(...vargargs: any[]): void
    
    /** Converts a [Variant] [param variable] to a formatted [String] that can then be parsed using [method str_to_var].  
     *    
     *  Prints:  
     *    
     *      
     *  **Note:** Converting [Signal] or [Callable] is not supported and will result in an empty value for these types, regardless of their data.  
     */
    static function var_to_str(variable: any): string
    
    /** Converts a formatted [param string] that was returned by [method var_to_str] to the original [Variant].  
     *    
     */
    static function str_to_var(string_: string): void
    
    /** Encodes a [Variant] value to a byte array, without encoding objects. Deserialization can be done with [method bytes_to_var].  
     *      
     *  **Note:** If you need object serialization, see [method var_to_bytes_with_objects].  
     *      
     *  **Note:** Encoding [Callable] is not supported and will result in an empty value, regardless of the data.  
     */
    static function var_to_bytes(variable: any): PackedByteArray
    
    /** Decodes a byte array back to a [Variant] value, without decoding objects.  
     *      
     *  **Note:** If you need object deserialization, see [method bytes_to_var_with_objects].  
     */
    static function bytes_to_var(bytes: PackedByteArray): void
    
    /** Encodes a [Variant] value to a byte array. Encoding objects is allowed (and can potentially include executable code). Deserialization can be done with [method bytes_to_var_with_objects].  
     *      
     *  **Note:** Encoding [Callable] is not supported and will result in an empty value, regardless of the data.  
     */
    static function var_to_bytes_with_objects(variable: any): PackedByteArray
    
    /** Decodes a byte array back to a [Variant] value. Decoding objects is allowed.  
     *  **Warning:** Deserialized object can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats (remote code execution).  
     */
    static function bytes_to_var_with_objects(bytes: PackedByteArray): void
    
    /** Returns the integer hash of the passed [param variable].  
     *    
     */
    static function hash(variable: any): int64
    
    /** Returns the [Object] that corresponds to [param instance_id]. All Objects have a unique instance ID. See also [method Object.get_instance_id].  
     *    
     */
    static function instance_from_id(instance_id: int64): Object
    
    /** Returns `true` if the Object that corresponds to [param id] is a valid object (e.g. has not been deleted from memory). All Objects have a unique instance ID. */
    static function is_instance_id_valid(id: int64): boolean
    
    /** Returns `true` if [param instance] is a valid Object (e.g. has not been deleted from memory). */
    static function is_instance_valid(instance: any): boolean
    
    /** Allocates a unique ID which can be used by the implementation to construct a RID. This is used mainly from native extensions to implement servers. */
    static function rid_allocate_id(): int64
    
    /** Creates a RID from a [param base]. This is used mainly from native extensions to build servers. */
    static function rid_from_int64(base: int64): RID
    
    /** Returns `true`, for value types, if [param a] and [param b] share the same value. Returns `true`, for reference types, if the references of [param a] and [param b] are the same.  
     *    
     *  These are [Variant] value types: `null`, [bool], [int], [float], [String], [StringName], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i], [Rect2], [Rect2i], [Transform2D], [Transform3D], [Plane], [Quaternion], [AABB], [Basis], [Projection], [Color], [NodePath], [RID], [Callable] and [Signal].  
     *  These are [Variant] reference types: [Object], [Dictionary], [Array], [PackedByteArray], [PackedInt32Array], [PackedInt64Array], [PackedFloat32Array], [PackedFloat64Array], [PackedStringArray], [PackedVector2Array], [PackedVector3Array] and [PackedColorArray].  
     */
    static function is_same(a: any, b: any): boolean
}
