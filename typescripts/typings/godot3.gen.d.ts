// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class ImporterMeshInstance3D extends Node3D {
        set_mesh(mesh: ImporterMesh): void
        get_mesh(): ImporterMesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_layer_mask(layer_mask: number /*i64*/): void
        get_layer_mask(): number /*i64*/
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
        set_visibility_range_end_margin(distance: number /*f64*/): void
        get_visibility_range_end_margin(): number /*f64*/
        set_visibility_range_end(distance: number /*f64*/): void
        get_visibility_range_end(): number /*f64*/
        set_visibility_range_begin_margin(distance: number /*f64*/): void
        get_visibility_range_begin_margin(): number /*f64*/
        set_visibility_range_begin(distance: number /*f64*/): void
        get_visibility_range_begin(): number /*f64*/
        set_visibility_range_fade_mode(mode: GeometryInstance3D.VisibilityRangeFadeMode): void
        get_visibility_range_fade_mode(): GeometryInstance3D.VisibilityRangeFadeMode
        mesh: ImporterMesh
        skin: Skin
        skeleton_path: NodePath
        layer_mask: number /*i64*/
        cast_shadow: number /*i64*/
        visibility_range_begin: number /*f64*/
        visibility_range_begin_margin: number /*f64*/
        visibility_range_end: number /*f64*/
        visibility_range_end_margin: number /*f64*/
        visibility_range_fade_mode: number /*i64*/
    }
    /** Abstract base class for input events. */
    class InputEvent extends Resource {
        set_device(device: number /*i64*/): void
        get_device(): number /*i64*/
        
        /** Returns `true` if this input event matches a pre-defined action of any type.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        is_action(action: StringName, exact_match: boolean = false): boolean
        
        /** Returns `true` if the given action is being pressed (and is not an echo event for [InputEventKey] events, unless [param allow_echo] is `true`). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        is_action_pressed(action: StringName, allow_echo: boolean = false, exact_match: boolean = false): boolean
        
        /** Returns `true` if the given action is released (i.e. not pressed). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        is_action_released(action: StringName, exact_match: boolean = false): boolean
        
        /** Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [InputEventJoypadMotion].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        get_action_strength(action: StringName, exact_match: boolean = false): number /*f64*/
        
        /** Returns `true` if this input event has been canceled. */
        is_canceled(): boolean
        
        /** Returns `true` if this input event is pressed. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        is_pressed(): boolean
        
        /** Returns `true` if this input event is released. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag]. */
        is_released(): boolean
        
        /** Returns `true` if this input event is an echo event (only for events of type [InputEventKey]). Any other event type returns `false`. */
        is_echo(): boolean
        
        /** Returns a [String] representation of the event. */
        as_text(): string
        
        /** Returns `true` if the specified [param event] matches this event. Only valid for action events i.e key ([InputEventKey]), button ([InputEventMouseButton] or [InputEventJoypadButton]), axis [InputEventJoypadMotion] or action ([InputEventAction]) events.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        is_match(event: InputEvent, exact_match: boolean = true): boolean
        
        /** Returns `true` if this input event's type is one that can be assigned to an input action. */
        is_action_type(): boolean
        
        /** Returns `true` if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).  
         *  The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.  
         */
        accumulate(with_event: InputEvent): boolean
        
        /** Returns a copy of the given input event which has been offset by [param local_ofs] and transformed by [param xform]. Relevant for events of type [InputEventMouseButton], [InputEventMouseMotion], [InputEventScreenTouch], [InputEventScreenDrag], [InputEventMagnifyGesture] and [InputEventPanGesture]. */
        xformed_by(xform: Transform2D, local_ofs: Vector2 = Vector2.ZERO): InputEvent
        
        /** The event's device ID.  
         *      
         *  **Note:** This device ID will always be `-1` for emulated mouse input from a touchscreen. This can be used to distinguish emulated mouse input from physical mouse input.  
         */
        device: number /*i64*/
    }
    /** An input event type for actions. */
    class InputEventAction extends InputEvent {
        set_action(action: StringName): void
        get_action(): StringName
        set_pressed(pressed: boolean): void
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        
        /** The action's name. Actions are accessed via this [String]. */
        action: StringName
        
        /** If `true`, the action's state is pressed. If `false`, the action's state is released. */
        pressed: boolean
        
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        strength: number /*f64*/
    }
    class InputEventConfigurationDialog extends ConfirmationDialog {
    }
    class InputEventEditorPlugin extends EditorPlugin {
    }
    /** Abstract base class for [Viewport]-based input events. */
    class InputEventFromWindow extends InputEvent {
        set_window_id(id: number /*i64*/): void
        get_window_id(): number /*i64*/
        
        /** The ID of a [Window] that received this event. */
        window_id: number /*i64*/
    }
    /** Abstract base class for touch gestures. */
    class InputEventGesture extends InputEventWithModifiers {
        set_position(position: Vector2): void
        get_position(): Vector2
        
        /** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
        position: Vector2
    }
    /** Represents a gamepad button being pressed or released. */
    class InputEventJoypadButton extends InputEvent {
        set_button_index(button_index: JoyButton): void
        get_button_index(): JoyButton
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pressed(pressed: boolean): void
        
        /** Button identifier. One of the [enum JoyButton] button constants. */
        button_index: number /*i64*/
        
        /** Represents the pressure the user puts on a pressure-sensitive button.  
         *  [i]Deprecated.[/i] This property is never set by the engine and is always `0`.  
         */
        pressure: number /*f64*/
        
        /** If `true`, the button's state is pressed. If `false`, the button's state is released. */
        pressed: boolean
    }
    /** Represents axis motions (such as joystick or analog triggers) from a gamepad. */
    class InputEventJoypadMotion extends InputEvent {
        set_axis(axis: JoyAxis): void
        get_axis(): JoyAxis
        set_axis_value(axis_value: number /*f64*/): void
        get_axis_value(): number /*f64*/
        
        /** Axis identifier. Use one of the [enum JoyAxis] axis constants. */
        axis: number /*i64*/
        
        /** Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position. */
        axis_value: number /*f64*/
    }
    /** Represents a key on a keyboard being pressed or released. */
    class InputEventKey extends InputEventWithModifiers {
        set_pressed(pressed: boolean): void
        set_keycode(keycode: Key): void
        get_keycode(): Key
        set_physical_keycode(physical_keycode: Key): void
        get_physical_keycode(): Key
        set_key_label(key_label: Key): void
        get_key_label(): Key
        set_unicode(unicode: number /*i64*/): void
        get_unicode(): number /*i64*/
        set_echo(echo: boolean): void
        
        /** Returns the Latin keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        get_keycode_with_modifiers(): Key
        
        /** Returns the physical keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        get_physical_keycode_with_modifiers(): Key
        
        /** Returns the localized key label combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the [InputEventKey].  
         */
        get_key_label_with_modifiers(): Key
        
        /** Returns a [String] representation of the event's [member keycode] and modifiers. */
        as_text_keycode(): string
        
        /** Returns a [String] representation of the event's [member physical_keycode] and modifiers. */
        as_text_physical_keycode(): string
        
        /** Returns a [String] representation of the event's [member key_label] and modifiers. */
        as_text_key_label(): string
        
        /** If `true`, the key's state is pressed. If `false`, the key's state is released. */
        pressed: boolean
        
        /** Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.keycode)` where `event` is the [InputEventKey].  
         *    
         */
        keycode: number /*i64*/
        
        /** Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:  
         *    
         */
        physical_keycode: number /*i64*/
        
        /** Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.  
         *  For keyboard layouts with a single label on the key, it is equivalent to [member keycode].  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.key_label)` where `event` is the [InputEventKey].  
         *    
         */
        key_label: number /*i64*/
        
        /** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
        unicode: number /*i64*/
        
        /** If `true`, the key was already pressed before this event. It means the user is holding the key down. */
        echo: boolean
    }
    /** Represents a MIDI message from a MIDI device, such as a musical keyboard. */
    class InputEventMIDI extends InputEvent {
        set_channel(channel: number /*i64*/): void
        get_channel(): number /*i64*/
        set_message(message: MIDIMessage): void
        get_message(): MIDIMessage
        set_pitch(pitch: number /*i64*/): void
        get_pitch(): number /*i64*/
        set_velocity(velocity: number /*i64*/): void
        get_velocity(): number /*i64*/
        set_instrument(instrument: number /*i64*/): void
        get_instrument(): number /*i64*/
        set_pressure(pressure: number /*i64*/): void
        get_pressure(): number /*i64*/
        set_controller_number(controller_number: number /*i64*/): void
        get_controller_number(): number /*i64*/
        set_controller_value(controller_value: number /*i64*/): void
        get_controller_value(): number /*i64*/
        
        /** The MIDI channel of this message, ranging from `0` to `15`. MIDI channel `9` is reserved for percussion instruments. */
        channel: number /*i64*/
        
        /** Represents the type of MIDI message (see the [enum MIDIMessage] enum).  
         *  For more information, see the [url=https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes]MIDI message status byte list chart[/url].  
         */
        message: number /*i64*/
        
        /** The pitch index number of this MIDI message. This value ranges from `0` to `127`.  
         *  On a piano, the **middle C** is `60`, followed by a **C-sharp** (`61`), then a **D** (`62`), and so on. Each octave is split in offsets of 12. See the "MIDI note number" column of the [url=https://en.wikipedia.org/wiki/Piano_key_frequencies]piano key frequency chart[/url] a full list.  
         */
        pitch: number /*i64*/
        
        /** The velocity of the MIDI message. This value ranges from `0` to `127`. For a musical keyboard, this corresponds to how quickly the key was pressed, and is rarely above `110` in practice.  
         *      
         *  **Note:** Some MIDI devices may send a [constant MIDI_MESSAGE_NOTE_ON] message with `0` velocity and expect it to be treated the same as a [constant MIDI_MESSAGE_NOTE_OFF] message. If necessary, this can be handled with a few lines of code:  
         *    
         */
        velocity: number /*i64*/
        
        /** The instrument (also called [i]program[/i] or [i]preset[/i]) used on this MIDI message. This value ranges from `0` to `127`.  
         *  To see what each value means, refer to the [url=https://en.wikipedia.org/wiki/General_MIDI#Program_change_events]General MIDI's instrument list[/url]. Keep in mind that the list is off by 1 because it does not begin from 0. A value of `0` corresponds to the acoustic grand piano.  
         */
        instrument: number /*i64*/
        
        /** The strength of the key being pressed. This value ranges from `0` to `127`.  
         *      
         *  **Note:** For many devices, this value is always `0`. Other devices such as musical keyboards may simulate pressure by changing the [member velocity], instead.  
         */
        pressure: number /*i64*/
        
        /** The unique number of the controller, if [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], otherwise this is `0`. This value can be used to identify sliders for volume, balance, and panning, as well as switches and pedals on the MIDI device. See the [url=https://en.wikipedia.org/wiki/General_MIDI#Controller_events]General MIDI specification[/url] for a small list. */
        controller_number: number /*i64*/
        
        /** The value applied to the controller. If [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], this value ranges from `0` to `127`, otherwise it is `0`. See also [member controller_value]. */
        controller_value: number /*i64*/
    }
    /** Represents a magnifying touch gesture. */
    class InputEventMagnifyGesture extends InputEventGesture {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
        
        /** The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed. */
        factor: number /*f64*/
    }
    /** Base input event type for mouse events. */
    class InputEventMouse extends InputEventWithModifiers {
        set_button_mask(button_mask: MouseButtonMask): void
        get_button_mask(): MouseButtonMask
        set_position(position: Vector2): void
        get_position(): Vector2
        set_global_position(global_position: Vector2): void
        get_global_position(): Vector2
        
        /** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
        button_mask: number /*i64*/
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].  
         */
        position: Vector2
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].  
         */
        global_position: Vector2
    }
    /** Represents a mouse button being pressed or released. */
    class InputEventMouseButton extends InputEventMouse {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
        set_button_index(button_index: MouseButton): void
        get_button_index(): MouseButton
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_click(double_click: boolean): void
        is_double_click(): boolean
        
        /** The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported. */
        factor: number /*f64*/
        
        /** The mouse button identifier, one of the [enum MouseButton] button or button wheel constants. */
        button_index: number /*i64*/
        
        /** If `true`, the mouse button event has been canceled. */
        canceled: boolean
        
        /** If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released. */
        pressed: boolean
        
        /** If `true`, the mouse button's state is a double-click. */
        double_click: boolean
    }
    /** Represents a mouse or a pen movement. */
    class InputEventMouseMotion extends InputEventMouse {
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        tilt: Vector2
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        pressure: number /*f64*/
        
        /** Returns `true` when using the eraser end of a stylus pen.  
         *      
         *  **Note:** This property is implemented on Linux, macOS and Windows.  
         */
        pen_inverted: boolean
        
        /** The mouse position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] is only emitted when the mouse moves, the last event won't have a relative position of `Vector2(0, 0)` when the user stops moving the mouse.  
         */
        relative: Vector2
        
        /** The mouse velocity in pixels per second. */
        velocity: Vector2
    }
    /** Represents a panning touch gesture. */
    class InputEventPanGesture extends InputEventGesture {
        set_delta(delta: Vector2): void
        get_delta(): Vector2
        
        /** Panning amount since last pan event. */
        delta: Vector2
    }
    /** Represents a screen drag event. */
    class InputEventScreenDrag extends InputEventFromWindow {
        set_index(index: number /*i64*/): void
        get_index(): number /*i64*/
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_position(position: Vector2): void
        get_position(): Vector2
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        
        /** The drag event index in the case of a multi-drag event. */
        index: number /*i64*/
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        tilt: Vector2
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        pressure: number /*f64*/
        
        /** Returns `true` when using the eraser end of a stylus pen. */
        pen_inverted: boolean
        
        /** The drag position in the viewport the node is in, using the coordinate system of this viewport. */
        position: Vector2
        
        /** The drag position relative to the previous position (position at the last frame). */
        relative: Vector2
        
        /** The drag velocity. */
        velocity: Vector2
    }
    /** Represents a screen touch event. */
    class InputEventScreenTouch extends InputEventFromWindow {
        set_index(index: number /*i64*/): void
        get_index(): number /*i64*/
        set_position(position: Vector2): void
        get_position(): Vector2
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_tap(double_tap: boolean): void
        is_double_tap(): boolean
        
        /** The touch index in the case of a multi-touch event. One index = one finger. */
        index: number /*i64*/
        
        /** The touch position in the viewport the node is in, using the coordinate system of this viewport. */
        position: Vector2
        
        /** If `true`, the touch event has been canceled. */
        canceled: boolean
        
        /** If `true`, the touch's state is pressed. If `false`, the touch's state is released. */
        pressed: boolean
        
        /** If `true`, the touch's state is a double tap. */
        double_tap: boolean
    }
    /** Represents a triggered keyboard [Shortcut]. */
    class InputEventShortcut extends InputEvent {
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
        
        /** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return `true` for this event. */
        shortcut: Shortcut
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd]. */
    class InputEventWithModifiers extends InputEventFromWindow {
        set_command_or_control_autoremap(enable: boolean): void
        is_command_or_control_autoremap(): boolean
        
        /** On macOS, returns `true` if [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) is pressed.  
         *  On other platforms, returns `true` if [kbd]Ctrl[/kbd] is pressed.  
         */
        is_command_or_control_pressed(): boolean
        set_alt_pressed(pressed: boolean): void
        is_alt_pressed(): boolean
        set_shift_pressed(pressed: boolean): void
        is_shift_pressed(): boolean
        set_ctrl_pressed(pressed: boolean): void
        is_ctrl_pressed(): boolean
        set_meta_pressed(pressed: boolean): void
        is_meta_pressed(): boolean
        
        /** Returns the keycode combination of modifier keys. */
        get_modifiers_mask(): KeyModifierMask
        
        /** Automatically use [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) on macOS and [kbd]Ctrl[/kbd] on other platforms. If `true`, [member ctrl_pressed] and [member meta_pressed] cannot be set. */
        command_or_control_autoremap: boolean
        
        /** State of the [kbd]Alt[/kbd] modifier. */
        alt_pressed: boolean
        
        /** State of the [kbd]Shift[/kbd] modifier. */
        shift_pressed: boolean
        
        /** State of the [kbd]Ctrl[/kbd] modifier. */
        ctrl_pressed: boolean
        
        /** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
        meta_pressed: boolean
    }
    class InspectorDock extends VBoxContainer {
        _unref_resource(): void
        _paste_resource(): void
        _copy_resource(): void
        _menu_collapseall(): void
        _menu_expandall(): void
        edit_resource(_unnamed_arg0: Resource): void
        store_script_properties(_unnamed_arg0: Object): void
        apply_script_properties(_unnamed_arg0: Object): void
        readonly request_help: Signal //  => void
    }
    class InstallGodotJSPresetConfirmationDialog extends ConfirmationDialog {
    }
    /** Placeholder for the root [Node] of a [PackedScene]. */
    class InstancePlaceholder extends Node {
        /** Returns the list of properties that will be applied to the node when [method create_instance] is called.  
         *  If [param with_order] is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).  
         */
        get_stored_values(with_order: boolean = false): Dictionary
        
        /** Call this method to actually load in the node. The created node will be placed as a sibling [i]above[/i] the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.  
         *      
         *  **Note:** [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.  
         */
        create_instance(replace: boolean = false, custom_scene: PackedScene = <any> {} /*compound.type from nil*/): Node
        
        /** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
        get_instance_path(): string
    }
    /** Creates an idle interval in a [Tween] animation. */
    class IntervalTweener extends Tweener {
    }
    namespace ItemList {
        enum IconMode {
            /** Icon is drawn above the text. */
            ICON_MODE_TOP = 0,
            
            /** Icon is drawn to the left of the text. */
            ICON_MODE_LEFT = 1,
        }
        enum SelectMode {
            /** Only allow selecting a single item. */
            SELECT_SINGLE = 0,
            
            /** Allows selecting multiple items by holding [kbd]Ctrl[/kbd] or [kbd]Shift[/kbd]. */
            SELECT_MULTI = 1,
        }
    }
    /** A vertical list of selectable items with one or multiple columns. */
    class ItemList extends Control {
        /** Adds an item to the item list with specified text. Returns the index of an added item.  
         *  Specify an [param icon], or use `null` as the [param icon] for a list item with no icon.  
         *  If selectable is `true`, the list item will be selectable.  
         */
        add_item(text: string, icon: Texture2D = <any> {} /*compound.type from nil*/, selectable: boolean = true): number /*i64*/
        
        /** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
        add_icon_item(icon: Texture2D, selectable: boolean = true): number /*i64*/
        
        /** Sets text of the item associated with the specified index. */
        set_item_text(idx: number /*i64*/, text: string): void
        
        /** Returns the text associated with the specified index. */
        get_item_text(idx: number /*i64*/): string
        
        /** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
        set_item_icon(idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon associated with the specified index. */
        get_item_icon(idx: number /*i64*/): Texture2D
        
        /** Sets item's text base writing direction. */
        set_item_text_direction(idx: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        get_item_text_direction(idx: number /*i64*/): Control.TextDirection
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_item_language(idx: number /*i64*/, language: string): void
        
        /** Returns item's text language code. */
        get_item_language(idx: number /*i64*/): string
        
        /** Sets whether the item icon will be drawn transposed. */
        set_item_icon_transposed(idx: number /*i64*/, transposed: boolean): void
        
        /** Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
        is_item_icon_transposed(idx: number /*i64*/): boolean
        
        /** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
        set_item_icon_region(idx: number /*i64*/, rect: Rect2): void
        
        /** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
        get_item_icon_region(idx: number /*i64*/): Rect2
        
        /** Sets a modulating [Color] of the item associated with the specified index. */
        set_item_icon_modulate(idx: number /*i64*/, modulate: Color): void
        
        /** Returns a [Color] modulating item's icon at the specified index. */
        get_item_icon_modulate(idx: number /*i64*/): Color
        
        /** Allows or disallows selection of the item associated with the specified index. */
        set_item_selectable(idx: number /*i64*/, selectable: boolean): void
        
        /** Returns `true` if the item at the specified index is selectable. */
        is_item_selectable(idx: number /*i64*/): boolean
        
        /** Disables (or enables) the item at the specified index.  
         *  Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).  
         */
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        
        /** Returns `true` if the item at the specified index is disabled. */
        is_item_disabled(idx: number /*i64*/): boolean
        
        /** Sets a value (of any type) to be stored with the item associated with the specified index. */
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        
        /** Returns the metadata value of the specified index. */
        get_item_metadata(idx: number /*i64*/): any
        
        /** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_bg_color(idx: number /*i64*/, custom_bg_color: Color): void
        
        /** Returns the custom background color of the item specified by [param idx] index. */
        get_item_custom_bg_color(idx: number /*i64*/): Color
        
        /** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_fg_color(idx: number /*i64*/, custom_fg_color: Color): void
        
        /** Returns the custom foreground color of the item specified by [param idx] index. */
        get_item_custom_fg_color(idx: number /*i64*/): Color
        
        /** Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is `true` the last column expands to fill the rest of the row.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        get_item_rect(idx: number /*i64*/, expand: boolean = true): Rect2
        
        /** Sets whether the tooltip hint is enabled for specified item index. */
        set_item_tooltip_enabled(idx: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if the tooltip is enabled for specified item index. */
        is_item_tooltip_enabled(idx: number /*i64*/): boolean
        
        /** Sets the tooltip hint for the item associated with the specified index. */
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        
        /** Returns the tooltip hint associated with the specified index. */
        get_item_tooltip(idx: number /*i64*/): string
        
        /** Select the item at the specified index.  
         *      
         *  **Note:** This method does not trigger the item selection signal.  
         */
        select(idx: number /*i64*/, single: boolean = true): void
        
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: number /*i64*/): void
        
        /** Ensures there are no items selected. */
        deselect_all(): void
        
        /** Returns `true` if the item at the specified index is currently selected. */
        is_selected(idx: number /*i64*/): boolean
        
        /** Returns an array with the indexes of the selected items. */
        get_selected_items(): PackedInt32Array
        
        /** Moves item from index [param from_idx] to [param to_idx]. */
        move_item(from_idx: number /*i64*/, to_idx: number /*i64*/): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        
        /** Removes the item specified by [param idx] index from the list. */
        remove_item(idx: number /*i64*/): void
        
        /** Removes all items from the list. */
        clear(): void
        
        /** Sorts items in the list by their text. */
        sort_items_by_text(): void
        set_fixed_column_width(width: number /*i64*/): void
        get_fixed_column_width(): number /*i64*/
        set_same_column_width(enable: boolean): void
        is_same_column_width(): boolean
        set_max_text_lines(lines: number /*i64*/): void
        get_max_text_lines(): number /*i64*/
        set_max_columns(amount: number /*i64*/): void
        get_max_columns(): number /*i64*/
        set_select_mode(mode: ItemList.SelectMode): void
        get_select_mode(): ItemList.SelectMode
        set_icon_mode(mode: ItemList.IconMode): void
        get_icon_mode(): ItemList.IconMode
        set_fixed_icon_size(size: Vector2i): void
        get_fixed_icon_size(): Vector2i
        set_icon_scale(scale: number /*f64*/): void
        get_icon_scale(): number /*f64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        set_auto_height(enable: boolean): void
        has_auto_height(): boolean
        
        /** Returns `true` if one or more items are selected. */
        is_anything_selected(): boolean
        
        /** Returns the item index at the given [param position].  
         *  When there is no item at that point, -1 will be returned if [param exact] is `true`, and the closest item index will be returned otherwise.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        get_item_at_position(position: Vector2, exact: boolean = false): number /*i64*/
        
        /** Ensure current selection is visible, adjusting the scroll position as necessary. */
        ensure_current_is_visible(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_v_scroll_bar(): VScrollBar
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        
        /** Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [member auto_height], change. The method can be used to trigger the update ahead of next drawing pass. */
        force_update_list_size(): void
        
        /** Allows single or multiple item selection. See the [enum SelectMode] constants. */
        select_mode: number /*i64*/
        
        /** If `true`, the currently selected item can be selected again. */
        allow_reselect: boolean
        
        /** If `true`, right mouse button click can select items. */
        allow_rmb_select: boolean
        
        /** If `true`, allows navigating the [ItemList] with letter keys through incremental search. */
        allow_search: boolean
        
        /** Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.  
         *      
         *  **Note:** This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.  
         */
        max_text_lines: number /*i64*/
        
        /** If `true`, the control will automatically resize the height to fit its content. */
        auto_height: boolean
        
        /** Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        
        /** The number of items currently in the list. */
        item_count: any /*Items,item_*/
        
        /** Maximum columns the list will have.  
         *  If greater than zero, the content will be split among the specified columns.  
         *  A value of zero means unlimited columns, i.e. all items will be put in the same row.  
         */
        max_columns: number /*i64*/
        
        /** Whether all columns will have the same width.  
         *  If `true`, the width is equal to the largest column width of all columns.  
         */
        same_column_width: boolean
        
        /** The width all columns will be adjusted to.  
         *  A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.  
         */
        fixed_column_width: number /*i64*/
        
        /** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
        icon_mode: number /*i64*/
        
        /** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
        icon_scale: number /*f64*/
        
        /** The size all icons will be adjusted to.  
         *  If either X or Y component is not greater than zero, icon size won't be affected.  
         */
        fixed_icon_size: Vector2i
        
        /** Triggered when specified item has been selected.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly item_selected: Signal // index: number /*i64*/ => void
        
        /** Triggered when any mouse click is issued within the rect of the list but on empty space. */
        readonly empty_clicked: Signal // at_position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Triggered when specified list item has been clicked with any mouse button.  
         *  The click position is also provided to allow appropriate popup of context menus at the correct location.  
         */
        readonly item_clicked: Signal // index: number /*i64*/, at_position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Triggered when a multiple selection is altered on a list allowing multiple selection. */
        readonly multi_selected: Signal // index: number /*i64*/, selected: boolean => void
        
        /** Triggered when specified list item is activated via double-clicking or by pressing [kbd]Enter[/kbd]. */
        readonly item_activated: Signal // index: number /*i64*/ => void
    }
    /** Singleton that connects the engine with Android plugins to interface with native Android code. */
    class JNISingleton extends Object {
    }
    /** Helper class for creating and parsing JSON data. */
    class JSON extends Resource {
        /** Converts a [Variant] var to JSON text and returns the result. Useful for serializing data to store or send over the network.  
         *      
         *  **Note:** The JSON specification does not define integer or float types, but only a [i]number[/i] type. Therefore, converting a Variant to JSON text will convert all numerical values to [float] types.  
         *      
         *  **Note:** If [param full_precision] is `true`, when stringifying floats, the unreliable digits are stringified in addition to the reliable digits to guarantee exact decoding.  
         *  The [param indent] parameter controls if and how something is indented, the string used for this parameter will be used where there should be an indent in the output, even spaces like `"   "` will work. `\t` and `\n` can also be used for a tab indent, or to make a newline for each indent respectively.  
         *  **Example output:**  
         *    
         */
        static stringify(data: any, indent: string = '', sort_keys: boolean = true, full_precision: boolean = false): string
        
        /** Attempts to parse the [param json_string] provided and returns the parsed data. Returns `null` if parse failed. */
        static parse_string(json_string: string): any
        
        /** Attempts to parse the [param json_text] provided.  
         *  Returns an [enum Error]. If the parse was successful, it returns [constant OK] and the result can be retrieved using [member data]. If unsuccessful, use [method get_error_line] and [method get_error_message] for identifying the source of the failure.  
         *  Non-static variant of [method parse_string], if you want custom error handling.  
         *  The optional [param keep_text] argument instructs the parser to keep a copy of the original text. This text can be obtained later by using the [method get_parsed_text] function and is used when saving the resource (instead of generating new text from [member data]).  
         */
        parse(json_text: string, keep_text: boolean = false): GodotError
        get_data(): any
        set_data(data: any): void
        
        /** Return the text parsed by [method parse] as long as the function is instructed to keep it. */
        get_parsed_text(): string
        
        /** Returns `0` if the last call to [method parse] was successful, or the line number where the parse failed. */
        get_error_line(): number /*i64*/
        
        /** Returns an empty string if the last call to [method parse] was successful, or the error message if it failed. */
        get_error_message(): string
        
        /** Contains the parsed JSON data in [Variant] form. */
        data: any
    }
    namespace JSONRPC {
        enum ErrorCode {
            PARSE_ERROR = -32700,
            INVALID_REQUEST = -32600,
            
            /** A method call was requested but no function of that name existed in the JSONRPC subclass. */
            METHOD_NOT_FOUND = -32601,
            INVALID_PARAMS = -32602,
            INTERNAL_ERROR = -32603,
        }
    }
    /** A helper to handle dictionaries which look like JSONRPC documents. */
    class JSONRPC extends Object {
        set_scope(scope: string, target: Object): void
        
        /** Given a Dictionary which takes the form of a JSON-RPC request: unpack the request and run it. Methods are resolved by looking at the field called "method" and looking for an equivalently named function in the JSONRPC object. If one is found that method is called.  
         *  To add new supported methods extend the JSONRPC class and call [method process_action] on your subclass.  
         *  [param action]: The action to be run, as a Dictionary in the form of a JSON-RPC request or notification.  
         */
        process_action(action: any, recurse: boolean = false): any
        process_string(action: string): string
        
        /** Returns a dictionary in the form of a JSON-RPC request. Requests are sent to a server with the expectation of a response. The ID field is used for the server to specify which exact request it is responding to.  
         *  - [param method]: Name of the method being called.  
         *  - [param params]: An array or dictionary of parameters being passed to the method.  
         *  - [param id]: Uniquely identifies this request. The server is expected to send a response with the same ID.  
         */
        make_request(method: string, params: any, id: any): Dictionary
        
        /** When a server has received and processed a request, it is expected to send a response. If you did not want a response then you need to have sent a Notification instead.  
         *  - [param result]: The return value of the function which was called.  
         *  - [param id]: The ID of the request this response is targeted to.  
         */
        make_response(result: any, id: any): Dictionary
        
        /** Returns a dictionary in the form of a JSON-RPC notification. Notifications are one-shot messages which do not expect a response.  
         *  - [param method]: Name of the method being called.  
         *  - [param params]: An array or dictionary of parameters being passed to the method.  
         */
        make_notification(method: string, params: any): Dictionary
        
        /** Creates a response which indicates a previous reply has failed in some way.  
         *  - [param code]: The error code corresponding to what kind of error this is. See the [enum ErrorCode] constants.  
         *  - [param message]: A custom message about this error.  
         *  - [param id]: The request this error is a response to.  
         */
        make_response_error(code: number /*i64*/, message: string, id: any = <any> {} /*compound.type from nil*/): Dictionary
    }
    class JavaClass extends RefCounted {
    }
    /** A wrapper class for web native JavaScript objects. */
    class JavaScriptObject extends RefCounted {
    }
    /** Abstract base class for all 2D physics joints. */
    class Joint2D extends Node2D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        
        /** Returns the joint's [RID]. */
        get_rid(): RID
        
        /** The first body attached to the joint. Must derive from [PhysicsBody2D]. */
        node_a: NodePath
        
        /** The second body attached to the joint. Must derive from [PhysicsBody2D]. */
        node_b: NodePath
        
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.  
         */
        bias: number /*f64*/
        
        /** If `true`, [member node_a] and [member node_b] can not collide. */
        disable_collision: boolean
    }
    /** Abstract base class for all 3D physics joints. */
    class Joint3D extends Node3D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_solver_priority(priority: number /*i64*/): void
        get_solver_priority(): number /*i64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        
        /** Returns the joint's [RID]. */
        get_rid(): RID
        
        /** The node attached to the first side (A) of the joint. */
        node_a: NodePath
        
        /** The node attached to the second side (B) of the joint. */
        node_b: NodePath
        
        /** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
        solver_priority: number /*i64*/
        
        /** If `true`, the two bodies of the nodes are not able to collide with each other. */
        exclude_nodes_from_collision: boolean
    }
    class Joint3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Holds collision data from the movement of a [PhysicsBody2D]. */
    class KinematicCollision2D extends RefCounted {
        /** Returns the point of collision in global coordinates. */
        get_position(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision. */
        get_normal(): Vector2
        
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector2
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
        get_angle(up_direction: Vector2 = new Vector2(0, -1)): number /*f64*/
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): number /*f64*/
        
        /** Returns the moving object's colliding shape. */
        get_local_shape(): Object
        
        /** Returns the colliding body's attached [Object]. */
        get_collider(): Object
        
        /** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
        get_collider_id(): number /*i64*/
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
        get_collider_rid(): RID
        
        /** Returns the colliding body's shape. */
        get_collider_shape(): Object
        
        /** Returns the colliding body's shape index. See [CollisionObject2D]. */
        get_collider_shape_index(): number /*i64*/
        
        /** Returns the colliding body's velocity. */
        get_collider_velocity(): Vector2
    }
    /** Holds collision data from the movement of a [PhysicsBody3D]. */
    class KinematicCollision3D extends RefCounted {
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): number /*f64*/
        
        /** Returns the number of detected collisions. */
        get_collision_count(): number /*i64*/
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
        get_position(collision_index: number /*i64*/ = 0): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
        get_normal(collision_index: number /*i64*/ = 0): Vector3
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
        get_angle(collision_index: number /*i64*/ = 0, up_direction: Vector3 = Vector3.ZERO): number /*f64*/
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
        get_local_shape(collision_index: number /*i64*/ = 0): Object
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
        get_collider(collision_index: number /*i64*/ = 0): Object
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
        get_collider_id(collision_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
        get_collider_rid(collision_index: number /*i64*/ = 0): RID
        
        /** Returns the colliding body's shape given a collision index (the deepest collision by default). */
        get_collider_shape(collision_index: number /*i64*/ = 0): Object
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
        get_collider_shape_index(collision_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
        get_collider_velocity(collision_index: number /*i64*/ = 0): Vector3
    }
    /** A control for displaying plain text. */
    class Label extends Control {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_text(text: string): void
        get_text(): string
        set_label_settings(settings: LabelSettings): void
        get_label_settings(): LabelSettings
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_clip_text(enable: boolean): void
        is_clipping_text(): boolean
        set_tab_stops(tab_stops: PackedFloat32Array): void
        get_tab_stops(): PackedFloat32Array
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_uppercase(enable: boolean): void
        is_uppercase(): boolean
        
        /** Returns the height of the line [param line].  
         *  If [param line] is set to `-1`, returns the biggest line height.  
         *  If there are no lines, returns font size in pixels.  
         */
        get_line_height(line: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of lines of text the Label has. */
        get_line_count(): number /*i64*/
        
        /** Returns the number of lines shown. Useful if the [Label]'s height cannot currently display all lines. */
        get_visible_line_count(): number /*i64*/
        
        /** Returns the total number of printable characters in the text (excluding spaces and newlines). */
        get_total_character_count(): number /*i64*/
        set_visible_characters(amount: number /*i64*/): void
        get_visible_characters(): number /*i64*/
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: number /*f64*/): void
        get_visible_ratio(): number /*f64*/
        set_lines_skipped(lines_skipped: number /*i64*/): void
        get_lines_skipped(): number /*i64*/
        set_max_lines_visible(lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        
        /** The text to display on screen. */
        text: string
        
        /** A [LabelSettings] resource that can be shared between multiple [Label] nodes. Takes priority over theme properties. */
        label_settings: LabelSettings
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally. */
        clip_text: boolean
        
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        
        /** If `true`, all the text displays as UPPERCASE. */
        uppercase: boolean
        
        /** Aligns text to the given tab-stops. */
        tab_stops: PackedFloat32Array
        
        /** The number of the lines ignored and not displayed from the start of the [member text] value. */
        lines_skipped: number /*i64*/
        
        /** Limits the lines of text the node shows on screen. */
        max_lines_visible: number /*i64*/
        
        /** The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_ratio] accordingly.  
         */
        visible_characters: number /*i64*/
        
        /** Sets the clipping behavior when [member visible_characters] or [member visible_ratio] is set. See [enum TextServer.VisibleCharactersBehavior] for more info. */
        visible_characters_behavior: number /*i64*/
        
        /** The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_characters] accordingly.  
         */
        visible_ratio: number /*f64*/
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    namespace Label3D {
        enum DrawFlags {
            /** If set, lights in the environment affect the label. */
            FLAG_SHADED = 0,
            
            /** If set, text can be seen from the back as well. If not, the text is invisible when looking at it from behind. */
            FLAG_DOUBLE_SIDED = 1,
            
            /** Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it. */
            FLAG_DISABLE_DEPTH_TEST = 2,
            
            /** Label is scaled by depth so that it always appears the same size on screen. */
            FLAG_FIXED_SIZE = 3,
            
            /** Represents the size of the [enum DrawFlags] enum. */
            FLAG_MAX = 4,
        }
        enum AlphaCutMode {
            /** This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. [member GeometryInstance3D.cast_shadow] has no effect when this transparency mode is used; the [Label3D] will never cast shadows. */
            ALPHA_CUT_DISABLED = 0,
            
            /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). This mode is also known as [i]alpha testing[/i] or [i]1-bit transparency[/i].  
             *      
             *  **Note:** This mode might have issues with anti-aliased fonts and outlines, try adjusting [member alpha_scissor_threshold] or using MSDF font.  
             *      
             *  **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.  
             */
            ALPHA_CUT_DISCARD = 1,
            
            /** This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting.  
             *      
             *  **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.  
             */
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            
            /** This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque. */
            ALPHA_CUT_HASH = 3,
        }
    }
    /** A node for displaying plain text in 3D space. */
    class Label3D extends GeometryInstance3D {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_outline_modulate(modulate: Color): void
        get_outline_modulate(): Color
        set_text(text: string): void
        get_text(): string
        set_text_direction(direction: TextServer.Direction): void
        get_text_direction(): TextServer.Direction
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_uppercase(enable: boolean): void
        is_uppercase(): boolean
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_outline_render_priority(priority: number /*i64*/): void
        get_outline_render_priority(): number /*i64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_outline_size(outline_size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        
        /** If `true`, the specified flag will be enabled. See [enum Label3D.DrawFlags] for a list of flags. */
        set_draw_flag(flag: Label3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        get_draw_flag(flag: Label3D.DrawFlags): boolean
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_alpha_cut_mode(mode: Label3D.AlphaCutMode): void
        get_alpha_cut_mode(): Label3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        
        /** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
        generate_triangle_mesh(): TriangleMesh
        
        /** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
        pixel_size: number /*f64*/
        
        /** The text drawing offset (in pixels). */
        offset: Vector2
        
        /** The billboard mode to use for the label. See [enum BaseMaterial3D.BillboardMode] for possible values. */
        billboard: number /*i64*/
        
        /** The alpha cutting mode to use for the sprite. See [enum AlphaCutMode] for possible values. */
        alpha_cut: number /*i64*/
        
        /** Threshold at which the alpha scissor will discard values. */
        alpha_scissor_threshold: number /*f64*/
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        alpha_hash_scale: number /*f64*/
        
        /** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
        alpha_antialiasing_mode: number /*i64*/
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        alpha_antialiasing_edge: number /*f64*/
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options. */
        texture_filter: number /*i64*/
        
        /** Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        render_priority: number /*i64*/
        
        /** Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        outline_render_priority: number /*i64*/
        
        /** Text [Color] of the [Label3D]. */
        modulate: Color
        
        /** The tint of text outline. */
        outline_modulate: Color
        
        /** The text to display on screen. */
        text: string
        
        /** Font configuration used to display text. */
        font: Font
        
        /** Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.  
         *  Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.  
         */
        font_size: number /*i64*/
        
        /** Text outline size. */
        outline_size: number /*i64*/
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        
        /** If `true`, all the text displays as UPPERCASE. */
        uppercase: boolean
        
        /** Vertical space between lines in multiline [Label3D]. */
        line_spacing: number /*f64*/
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** Text width (in pixels), used for autowrap and fill alignment. */
        width: number /*f64*/
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    class Label3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Provides common settings to customize the text in a [Label]. */
    class LabelSettings extends Resource {
        set_line_spacing(spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_font_color(color: Color): void
        get_font_color(): Color
        set_outline_size(size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_outline_color(color: Color): void
        get_outline_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        
        /** Vertical space between lines when the text is multiline. */
        line_spacing: number /*f64*/
        
        /** [Font] used for the text. */
        font: Font
        
        /** Size of the text. */
        font_size: number /*i64*/
        
        /** Color of the text. */
        font_color: Color
        
        /** Text outline size. */
        outline_size: number /*i64*/
        
        /** The color of the outline. */
        outline_color: Color
        
        /** Size of the shadow effect. */
        shadow_size: number /*i64*/
        
        /** Color of the shadow effect. If alpha is `0`, no shadow will be drawn. */
        shadow_color: Color
        
        /** Offset of the shadow effect, in pixels. */
        shadow_offset: Vector2
    }
    namespace Light2D {
        enum ShadowFilter {
            /** No filter applies to the shadow map. This provides hard shadow edges and is the fastest to render. See [member shadow_filter]. */
            SHADOW_FILTER_NONE = 0,
            
            /** Percentage closer filtering (5 samples) applies to the shadow map. This is slower compared to hard shadow rendering. See [member shadow_filter]. */
            SHADOW_FILTER_PCF5 = 1,
            
            /** Percentage closer filtering (13 samples) applies to the shadow map. This is the slowest shadow filtering mode, and should be used sparingly. See [member shadow_filter]. */
            SHADOW_FILTER_PCF13 = 2,
        }
        enum BlendMode {
            /** Adds the value of pixels corresponding to the Light2D to the values of pixels under it. This is the common behavior of a light. */
            BLEND_MODE_ADD = 0,
            
            /** Subtracts the value of pixels corresponding to the Light2D to the values of pixels under it, resulting in inversed light effect. */
            BLEND_MODE_SUB = 1,
            
            /** Mix the value of pixels corresponding to the Light2D to the values of pixels under it by linear interpolation. */
            BLEND_MODE_MIX = 2,
        }
    }
    /** Casts light in a 2D environment. */
    class Light2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_color(color: Color): void
        get_color(): Color
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_z_range_min(z: number /*i64*/): void
        get_z_range_min(): number /*i64*/
        set_z_range_max(z: number /*i64*/): void
        get_z_range_max(): number /*i64*/
        set_layer_range_min(layer: number /*i64*/): void
        get_layer_range_min(): number /*i64*/
        set_layer_range_max(layer: number /*i64*/): void
        get_layer_range_max(): number /*i64*/
        set_item_cull_mask(item_cull_mask: number /*i64*/): void
        get_item_cull_mask(): number /*i64*/
        set_item_shadow_cull_mask(item_shadow_cull_mask: number /*i64*/): void
        get_item_shadow_cull_mask(): number /*i64*/
        set_shadow_enabled(enabled: boolean): void
        is_shadow_enabled(): boolean
        set_shadow_smooth(smooth: number /*f64*/): void
        get_shadow_smooth(): number /*f64*/
        set_shadow_filter(filter: Light2D.ShadowFilter): void
        get_shadow_filter(): Light2D.ShadowFilter
        set_shadow_color(shadow_color: Color): void
        get_shadow_color(): Color
        set_blend_mode(mode: Light2D.BlendMode): void
        get_blend_mode(): Light2D.BlendMode
        
        /** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        set_height(height: number /*f64*/): void
        
        /** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        get_height(): number /*f64*/
        
        /** If `true`, Light2D will emit light. */
        enabled: boolean
        
        /** If `true`, Light2D will only appear when editing the scene. */
        editor_only: boolean
        
        /** The Light2D's [Color]. */
        color: Color
        
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        energy: number /*f64*/
        
        /** The Light2D's blend mode. See [enum BlendMode] constants for values. */
        blend_mode: number /*i64*/
        
        /** Minimum `z` value of objects that are affected by the Light2D. */
        range_z_min: number /*i64*/
        
        /** Maximum `z` value of objects that are affected by the Light2D. */
        range_z_max: number /*i64*/
        
        /** Minimum layer value of objects that are affected by the Light2D. */
        range_layer_min: number /*i64*/
        
        /** Maximum layer value of objects that are affected by the Light2D. */
        range_layer_max: number /*i64*/
        
        /** The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.  
         *      
         *  **Note:** [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].  
         */
        range_item_cull_mask: number /*i64*/
        
        /** If `true`, the Light2D will cast shadows. */
        shadow_enabled: boolean
        
        /** [Color] of shadows cast by the Light2D. */
        shadow_color: Color
        
        /** Shadow filter type. See [enum ShadowFilter] for possible values. */
        shadow_filter: number /*i64*/
        
        /** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
        shadow_filter_smooth: number /*f64*/
        
        /** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can [i]receive[/i] the light. */
        shadow_item_cull_mask: number /*i64*/
    }
    namespace Light3D {
        enum Param {
            /** Constant for accessing [member light_energy]. */
            PARAM_ENERGY = 0,
            
            /** Constant for accessing [member light_indirect_energy]. */
            PARAM_INDIRECT_ENERGY = 1,
            
            /** Constant for accessing [member light_volumetric_fog_energy]. */
            PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            
            /** Constant for accessing [member light_specular]. */
            PARAM_SPECULAR = 3,
            
            /** Constant for accessing [member OmniLight3D.omni_range] or [member SpotLight3D.spot_range]. */
            PARAM_RANGE = 4,
            
            /** Constant for accessing [member light_size]. */
            PARAM_SIZE = 5,
            
            /** Constant for accessing [member OmniLight3D.omni_attenuation] or [member SpotLight3D.spot_attenuation]. */
            PARAM_ATTENUATION = 6,
            
            /** Constant for accessing [member SpotLight3D.spot_angle]. */
            PARAM_SPOT_ANGLE = 7,
            
            /** Constant for accessing [member SpotLight3D.spot_angle_attenuation]. */
            PARAM_SPOT_ATTENUATION = 8,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_max_distance]. */
            PARAM_SHADOW_MAX_DISTANCE = 9,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_1]. */
            PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_2]. */
            PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_3]. */
            PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_fade_start]. */
            PARAM_SHADOW_FADE_START = 13,
            
            /** Constant for accessing [member shadow_normal_bias]. */
            PARAM_SHADOW_NORMAL_BIAS = 14,
            
            /** Constant for accessing [member shadow_bias]. */
            PARAM_SHADOW_BIAS = 15,
            
            /** Constant for accessing [member DirectionalLight3D.directional_shadow_pancake_size]. */
            PARAM_SHADOW_PANCAKE_SIZE = 16,
            
            /** Constant for accessing [member shadow_opacity]. */
            PARAM_SHADOW_OPACITY = 17,
            
            /** Constant for accessing [member shadow_blur]. */
            PARAM_SHADOW_BLUR = 18,
            
            /** Constant for accessing [member shadow_transmittance_bias]. */
            PARAM_TRANSMITTANCE_BIAS = 19,
            
            /** Constant for accessing [member light_intensity_lumens] and [member light_intensity_lux]. Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. */
            PARAM_INTENSITY = 20,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 21,
        }
        enum BakeMode {
            /** Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.  
             *      
             *  **Note:** Hiding a light does [i]not[/i] affect baking [LightmapGI]. Hiding a light will still affect baking [VoxelGI] and SDFGI (see [member Environment.sdfgi_enabled).  
             */
            BAKE_DISABLED = 0,
            
            /** Light is taken into account in static baking ([VoxelGI], [LightmapGI], SDFGI ([member Environment.sdfgi_enabled])). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.  
             *      
             *  **Note:** The light is not baked in [LightmapGI] if [member editor_only] is `true`.  
             */
            BAKE_STATIC = 1,
            
            /** Light is taken into account in dynamic baking ([VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [constant BAKE_STATIC]. This has a greater performance cost compared to [constant BAKE_STATIC]. When using SDFGI, the update speed of dynamic lights is affected by [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
            BAKE_DYNAMIC = 2,
        }
    }
    /** Provides a base class for different kinds of light nodes. */
    class Light3D extends VisualInstance3D {
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        
        /** Sets the value of the specified [enum Light3D.Param] parameter. */
        set_param(param: Light3D.Param, value: number /*f64*/): void
        
        /** Returns the value of the specified [enum Light3D.Param] parameter. */
        get_param(param: Light3D.Param): number /*f64*/
        set_shadow(enabled: boolean): void
        has_shadow(): boolean
        set_negative(enabled: boolean): void
        is_negative(): boolean
        set_cull_mask(cull_mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: number /*f64*/): void
        get_distance_fade_begin(): number /*f64*/
        set_distance_fade_shadow(distance: number /*f64*/): void
        get_distance_fade_shadow(): number /*f64*/
        set_distance_fade_length(distance: number /*f64*/): void
        get_distance_fade_length(): number /*f64*/
        set_color(color: Color): void
        get_color(): Color
        set_shadow_reverse_cull_face(enable: boolean): void
        get_shadow_reverse_cull_face(): boolean
        set_bake_mode(bake_mode: Light3D.BakeMode): void
        get_bake_mode(): Light3D.BakeMode
        set_projector(projector: Texture2D): void
        get_projector(): Texture2D
        set_temperature(temperature: number /*f64*/): void
        get_temperature(): number /*f64*/
        
        /** Returns the [Color] of an idealized blackbody at the given [member light_temperature]. This value is calculated internally based on the [member light_temperature]. This [Color] is multiplied by [member light_color] before being sent to the [RenderingServer]. */
        get_correlated_color(): Color
        
        /** Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [member light_color].  
         *  The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.  
         */
        light_temperature: number /*f64*/
        
        /** The light's color. An [i]overbright[/i] color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
        light_color: Color
        
        /** [Texture2D] projected by light. [member shadow_enabled] must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        light_projector: Texture2D
        
        /** If `true`, the light's effect is reversed, darkening areas and casting bright shadows. */
        light_negative: boolean
        
        /** The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See [enum BakeMode].  
         *      
         *  **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See [member GeometryInstance3D.gi_mode].  
         */
        light_bake_mode: number /*i64*/
        
        /** The light will affect objects in the selected layers. */
        light_cull_mask: number /*i64*/
        
        /** If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [member distance_fade_enabled] to hide the light when far away from the [Camera3D]. */
        shadow_enabled: boolean
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
        shadow_reverse_cull_face: boolean
        
        /** If `true`, the light will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. This acts as a form of level of detail (LOD). The light will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        distance_fade_enabled: boolean
        
        /** The distance from the camera at which the light begins to fade away (in 3D units).  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        distance_fade_begin: number /*f64*/
        
        /** The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [member distance_fade_begin] + [member distance_fade_length] to further improve performance, as shadow rendering is often more expensive than light rendering itself.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D], and only when [member shadow_enabled] is `true`.  
         */
        distance_fade_shadow: number /*f64*/
        
        /** Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        distance_fade_length: number /*f64*/
        
        /** If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in [LightmapGI] regardless of its [member light_bake_mode]. */
        editor_only: boolean
    }
    class Light3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Occludes light cast by a Light2D, casting shadows. */
    class LightOccluder2D extends Node2D {
        set_occluder_polygon(polygon: OccluderPolygon2D): void
        get_occluder_polygon(): OccluderPolygon2D
        set_occluder_light_mask(mask: number /*i64*/): void
        get_occluder_light_mask(): number /*i64*/
        set_as_sdf_collision(enable: boolean): void
        is_set_as_sdf_collision(): boolean
        
        /** The [OccluderPolygon2D] used to compute the shadow. */
        occluder: OccluderPolygon2D
        
        /** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
        sdf_collision: boolean
        
        /** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
        occluder_light_mask: number /*i64*/
    }
    class LightOccluder2DEditor extends AbstractPolygon2DEditor {
    }
    class LightOccluder2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LightmapGI {
        enum BakeQuality {
            /** Low bake quality (fastest bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/low_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/low_quality_probe_ray_count]. */
            BAKE_QUALITY_LOW = 0,
            
            /** Medium bake quality (fast bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_probe_ray_count]. */
            BAKE_QUALITY_MEDIUM = 1,
            
            /** High bake quality (slow bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/high_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/high_quality_probe_ray_count]. */
            BAKE_QUALITY_HIGH = 2,
            
            /** Highest bake quality (slowest bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count]. */
            BAKE_QUALITY_ULTRA = 3,
        }
        enum GenerateProbes {
            /** Don't generate lightmap probes for lighting dynamic objects. */
            GENERATE_PROBES_DISABLED = 0,
            
            /** Lowest level of subdivision (fastest bake times, smallest file sizes). */
            GENERATE_PROBES_SUBDIV_4 = 1,
            
            /** Low level of subdivision (fast bake times, small file sizes). */
            GENERATE_PROBES_SUBDIV_8 = 2,
            
            /** High level of subdivision (slow bake times, large file sizes). */
            GENERATE_PROBES_SUBDIV_16 = 3,
            
            /** Highest level of subdivision (slowest bake times, largest file sizes). */
            GENERATE_PROBES_SUBDIV_32 = 4,
        }
        enum BakeError {
            /** Lightmap baking was successful. */
            BAKE_ERROR_OK = 0,
            
            /** Lightmap baking failed because the root node for the edited scene could not be accessed. */
            BAKE_ERROR_NO_SCENE_ROOT = 1,
            
            /** Lightmap baking failed as the lightmap data resource is embedded in a foreign resource. */
            BAKE_ERROR_FOREIGN_DATA = 2,
            
            /** Lightmap baking failed as there is no lightmapper available in this Godot build. */
            BAKE_ERROR_NO_LIGHTMAPPER = 3,
            
            /** Lightmap baking failed as the [LightmapGIData] save path isn't configured in the resource. */
            BAKE_ERROR_NO_SAVE_PATH = 4,
            
            /** Lightmap baking failed as there are no meshes whose [member GeometryInstance3D.gi_mode] is [constant GeometryInstance3D.GI_MODE_STATIC] and with valid UV2 mapping in the current scene. You may need to select 3D scenes in the Import dock and change their global illumination mode accordingly. */
            BAKE_ERROR_NO_MESHES = 5,
            
            /** Lightmap baking failed as the lightmapper failed to analyze some of the meshes marked as static for baking. */
            BAKE_ERROR_MESHES_INVALID = 6,
            
            /** Lightmap baking failed as the resulting image couldn't be saved or imported by Godot after it was saved. */
            BAKE_ERROR_CANT_CREATE_IMAGE = 7,
            
            /** The user aborted the lightmap baking operation (typically by clicking the **Cancel** button in the progress dialog). */
            BAKE_ERROR_USER_ABORTED = 8,
            
            /** Lightmap baking failed as the maximum texture size is too small to fit some of the meshes marked for baking. */
            BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9,
        }
        enum EnvironmentMode {
            /** Ignore environment lighting when baking lightmaps. */
            ENVIRONMENT_MODE_DISABLED = 0,
            
            /** Use the scene's environment lighting when baking lightmaps.  
             *      
             *  **Note:** If baking lightmaps in a scene with no [WorldEnvironment] node, this will act like [constant ENVIRONMENT_MODE_DISABLED]. The editor's preview sky and sun is [i]not[/i] taken into account by [LightmapGI] when baking lightmaps.  
             */
            ENVIRONMENT_MODE_SCENE = 1,
            
            /** Use [member environment_custom_sky] as a source of environment lighting when baking lightmaps. */
            ENVIRONMENT_MODE_CUSTOM_SKY = 2,
            
            /** Use [member environment_custom_color] multiplied by [member environment_custom_energy] as a constant source of environment lighting when baking lightmaps. */
            ENVIRONMENT_MODE_CUSTOM_COLOR = 3,
        }
    }
    /** Computes and stores baked lightmaps for fast global illumination. */
    class LightmapGI extends VisualInstance3D {
        set_light_data(data: LightmapGIData): void
        get_light_data(): LightmapGIData
        set_bake_quality(bake_quality: LightmapGI.BakeQuality): void
        get_bake_quality(): LightmapGI.BakeQuality
        set_bounces(bounces: number /*i64*/): void
        get_bounces(): number /*i64*/
        set_bounce_indirect_energy(bounce_indirect_energy: number /*f64*/): void
        get_bounce_indirect_energy(): number /*f64*/
        set_generate_probes(subdivision: LightmapGI.GenerateProbes): void
        get_generate_probes(): LightmapGI.GenerateProbes
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_environment_mode(mode: LightmapGI.EnvironmentMode): void
        get_environment_mode(): LightmapGI.EnvironmentMode
        set_environment_custom_sky(sky: Sky): void
        get_environment_custom_sky(): Sky
        set_environment_custom_color(color: Color): void
        get_environment_custom_color(): Color
        set_environment_custom_energy(energy: number /*f64*/): void
        get_environment_custom_energy(): number /*f64*/
        set_max_texture_size(max_texture_size: number /*i64*/): void
        get_max_texture_size(): number /*i64*/
        set_use_denoiser(use_denoiser: boolean): void
        is_using_denoiser(): boolean
        set_denoiser_strength(denoiser_strength: number /*f64*/): void
        get_denoiser_strength(): number /*f64*/
        set_interior(enable: boolean): void
        is_interior(): boolean
        set_directional(directional: boolean): void
        is_directional(): boolean
        set_use_texture_for_bounces(use_texture_for_bounces: boolean): void
        is_using_texture_for_bounces(): boolean
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        
        /** The quality preset to use when baking lightmaps. This affects bake times, but output file sizes remain mostly identical across quality levels.  
         *  To further speed up bake times, decrease [member bounces], disable [member use_denoiser] and increase the lightmap texel size on 3D scenes in the Import doc.  
         */
        quality: number /*i64*/
        
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked. */
        bounces: number /*i64*/
        
        /** The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of `1.0` represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [member bounces] then increasing [member bounce_indirect_energy].  
         *      
         *  **Note:** [member bounce_indirect_energy] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        bounce_indirect_energy: number /*f64*/
        
        /** If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.  
         *      
         *  **Note:** The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.  
         */
        directional: boolean
        
        /** If `true`, a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [member use_texture_for_bounces] at its default value of `true` if unsure.  
         *      
         *  **Note:** [member use_texture_for_bounces] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        use_texture_for_bounces: boolean
        
        /** If `true`, ignore environment lighting when baking lightmaps. */
        interior: boolean
        
        /** If `true`, uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image. */
        use_denoiser: boolean
        
        /** The strength of denoising step applied to the generated lightmaps. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        denoiser_strength: number /*f64*/
        
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        bias: number /*f64*/
        
        /** The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [member max_texture_size] at its default value of `16384` if unsure. */
        max_texture_size: number /*i64*/
        
        /** The environment mode to use when baking lightmaps. */
        environment_mode: number /*i64*/
        
        /** The sky to use as a source of environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_SKY]. */
        environment_custom_sky: Sky
        
        /** The color to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        environment_custom_color: Color
        
        /** The color multiplier to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        environment_custom_energy: number /*f64*/
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [LightmapGI] will have banding artifacts or may have over-exposure artifacts. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        
        /** The level of subdivision to use when automatically generating [LightmapProbe]s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.  
         *      
         *  **Note:** Automatically generated [LightmapProbe]s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.  
         *      
         *  **Note:** Regardless of [member generate_probes_subdiv], direct lighting on dynamic objects is always applied using [Light3D] nodes in real-time.  
         */
        generate_probes_subdiv: number /*i64*/
        
        /** The [LightmapGIData] associated to this [LightmapGI] node. This resource is automatically created after baking, and is not meant to be created manually. */
        light_data: LightmapGIData
    }
    /** Contains baked lightmap and dynamic object probe data for [LightmapGI]. */
    class LightmapGIData extends Resource {
        _set_user_data(data: Array): void
        _get_user_data(): Array
        set_lightmap_textures(light_textures: Array): void
        get_lightmap_textures(): Array
        
        /** If [param uses_spherical_harmonics] is `true`, tells the engine to treat the lightmap data as if it was baked with directional information.  
         *      
         *  **Note:** Changing this value on already baked lightmaps will not cause them to be baked again. This means the material appearance will look incorrect until lightmaps are baked again, in which case the value set here is discarded as the entire [LightmapGIData] resource is replaced by the lightmapper.  
         */
        set_uses_spherical_harmonics(uses_spherical_harmonics: boolean): void
        
        /** If `true`, lightmaps were baked with directional information. See also [member LightmapGI.directional]. */
        is_using_spherical_harmonics(): boolean
        
        /** Adds an object that is considered baked within this [LightmapGIData]. */
        add_user(path: NodePath, uv_scale: Rect2, slice_index: number /*i64*/, sub_instance: number /*i64*/): void
        
        /** Returns the number of objects that are considered baked within this [LightmapGIData]. */
        get_user_count(): number /*i64*/
        
        /** Returns the [NodePath] of the baked object at index [param user_idx]. */
        get_user_path(user_idx: number /*i64*/): NodePath
        
        /** Clear all objects that are considered baked within this [LightmapGIData]. */
        clear_users(): void
        _set_probe_data(data: Dictionary): void
        _get_probe_data(): Dictionary
        set_light_texture(light_texture: TextureLayered): void
        get_light_texture(): TextureLayered
        _set_light_textures_data(data: Array): void
        _get_light_textures_data(): Array
        
        /** The lightmap atlas textures generated by the lightmapper. */
        lightmap_textures: Array
        uses_spherical_harmonics: boolean
        user_data: Array
        probe_data: Dictionary
        
        /** The lightmap atlas texture generated by the lightmapper.  
         *  [i]Deprecated.[/i] The lightmap atlas can now have multiple textures. See [member lightmap_textures].  
         */
        light_texture: TextureLayered
        light_textures: Array
    }
    class LightmapGIEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class LightmapGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI]. */
    class LightmapProbe extends Node3D {
    }
    class LightmapProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract class extended by lightmappers, for use in [LightmapGI]. */
    class Lightmapper extends RefCounted {
    }
    /** The built-in GPU-based lightmapper for use with [LightmapGI]. */
    class LightmapperRD extends Lightmapper {
    }
    namespace Line2D {
        enum LineJointMode {
            /** Makes the polyline's joints pointy, connecting the sides of the two segments by extending them until they intersect. If the rotation of a joint is too big (based on [member sharp_limit]), the joint falls back to [constant LINE_JOINT_BEVEL] to prevent very long miters. */
            LINE_JOINT_SHARP = 0,
            
            /** Makes the polyline's joints bevelled/chamfered, connecting the sides of the two segments with a simple line. */
            LINE_JOINT_BEVEL = 1,
            
            /** Makes the polyline's joints rounded, connecting the sides of the two segments with an arc. The detail of this arc depends on [member round_precision]. */
            LINE_JOINT_ROUND = 2,
        }
        enum LineCapMode {
            /** Draws no line cap. */
            LINE_CAP_NONE = 0,
            
            /** Draws the line cap as a box, slightly extending the first/last segment. */
            LINE_CAP_BOX = 1,
            
            /** Draws the line cap as a semicircle attached to the first/last segment. */
            LINE_CAP_ROUND = 2,
        }
        enum LineTextureMode {
            /** Takes the left pixels of the texture and renders them over the whole polyline. */
            LINE_TEXTURE_NONE = 0,
            
            /** Tiles the texture over the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_ENABLED] or [constant CanvasItem.TEXTURE_REPEAT_MIRROR] for it to work properly. */
            LINE_TEXTURE_TILE = 1,
            
            /** Stretches the texture across the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_DISABLED] for best results. */
            LINE_TEXTURE_STRETCH = 2,
        }
    }
    /** A 2D polyline that can optionally be textured. */
    class Line2D extends Node2D {
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        
        /** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
        set_point_position(index: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the point at index [param index]. */
        get_point_position(index: number /*i64*/): Vector2
        
        /** Returns the number of points in the polyline. */
        get_point_count(): number /*i64*/
        
        /** Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].  
         */
        add_point(position: Vector2, index: number /*i64*/ = -1): void
        
        /** Removes the point at index [param index] from the polyline. */
        remove_point(index: number /*i64*/): void
        
        /** Removes all points from the polyline, making it empty. */
        clear_points(): void
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_default_color(color: Color): void
        get_default_color(): Color
        set_gradient(color: Gradient): void
        get_gradient(): Gradient
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_mode(mode: Line2D.LineTextureMode): void
        get_texture_mode(): Line2D.LineTextureMode
        set_joint_mode(mode: Line2D.LineJointMode): void
        get_joint_mode(): Line2D.LineJointMode
        set_begin_cap_mode(mode: Line2D.LineCapMode): void
        get_begin_cap_mode(): Line2D.LineCapMode
        set_end_cap_mode(mode: Line2D.LineCapMode): void
        get_end_cap_mode(): Line2D.LineCapMode
        set_sharp_limit(limit: number /*f64*/): void
        get_sharp_limit(): number /*f64*/
        set_round_precision(precision: number /*i64*/): void
        get_round_precision(): number /*i64*/
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        
        /** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
        points: PackedVector2Array
        
        /** If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.  
         *      
         *  **Note:** The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.  
         *      
         *  **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.  
         */
        closed: boolean
        
        /** The polyline's width. */
        width: number /*f64*/
        
        /** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. */
        width_curve: Curve
        
        /** The color of the polyline. Will not be used if a gradient is set. */
        default_color: Color
        
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        gradient: Gradient
        
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        texture: Texture2D
        
        /** The style to render the [member texture] of the polyline. Use [enum LineTextureMode] constants. */
        texture_mode: number /*i64*/
        
        /** The style of the connections between segments of the polyline. Use [enum LineJointMode] constants. */
        joint_mode: number /*i64*/
        
        /** The style of the beginning of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        begin_cap_mode: number /*i64*/
        
        /** The style of the end of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        end_cap_mode: number /*i64*/
        
        /** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
        sharp_limit: number /*f64*/
        
        /** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
        round_precision: number /*i64*/
        
        /** If `true`, the polyline's border will be anti-aliased.  
         *      
         *  **Note:** [Line2D] is not accelerated by batching when being anti-aliased.  
         */
        antialiased: boolean
    }
    class Line2DEditor extends AbstractPolygon2DEditor {
    }
    class Line2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LineEdit {
        enum MenuItems {
            /** Cuts (copies and clears) the selected text. */
            MENU_CUT = 0,
            
            /** Copies the selected text. */
            MENU_COPY = 1,
            
            /** Pastes the clipboard text over the selected text (or at the caret's position).  
             *  Non-printable escape characters are automatically stripped from the OS clipboard via [method String.strip_escapes].  
             */
            MENU_PASTE = 2,
            
            /** Erases the whole [LineEdit] text. */
            MENU_CLEAR = 3,
            
            /** Selects the whole [LineEdit] text. */
            MENU_SELECT_ALL = 4,
            
            /** Undoes the previous action. */
            MENU_UNDO = 5,
            
            /** Reverse the last undo action. */
            MENU_REDO = 6,
            
            /** ID of "Text Writing Direction" submenu. */
            MENU_SUBMENU_TEXT_DIR = 7,
            
            /** Sets text direction to inherited. */
            MENU_DIR_INHERITED = 8,
            
            /** Sets text direction to automatic. */
            MENU_DIR_AUTO = 9,
            
            /** Sets text direction to left-to-right. */
            MENU_DIR_LTR = 10,
            
            /** Sets text direction to right-to-left. */
            MENU_DIR_RTL = 11,
            
            /** Toggles control character display. */
            MENU_DISPLAY_UCC = 12,
            
            /** ID of "Insert Control Character" submenu. */
            MENU_SUBMENU_INSERT_UCC = 13,
            
            /** Inserts left-to-right mark (LRM) character. */
            MENU_INSERT_LRM = 14,
            
            /** Inserts right-to-left mark (RLM) character. */
            MENU_INSERT_RLM = 15,
            
            /** Inserts start of left-to-right embedding (LRE) character. */
            MENU_INSERT_LRE = 16,
            
            /** Inserts start of right-to-left embedding (RLE) character. */
            MENU_INSERT_RLE = 17,
            
            /** Inserts start of left-to-right override (LRO) character. */
            MENU_INSERT_LRO = 18,
            
            /** Inserts start of right-to-left override (RLO) character. */
            MENU_INSERT_RLO = 19,
            
            /** Inserts pop direction formatting (PDF) character. */
            MENU_INSERT_PDF = 20,
            
            /** Inserts Arabic letter mark (ALM) character. */
            MENU_INSERT_ALM = 21,
            
            /** Inserts left-to-right isolate (LRI) character. */
            MENU_INSERT_LRI = 22,
            
            /** Inserts right-to-left isolate (RLI) character. */
            MENU_INSERT_RLI = 23,
            
            /** Inserts first strong isolate (FSI) character. */
            MENU_INSERT_FSI = 24,
            
            /** Inserts pop direction isolate (PDI) character. */
            MENU_INSERT_PDI = 25,
            
            /** Inserts zero width joiner (ZWJ) character. */
            MENU_INSERT_ZWJ = 26,
            
            /** Inserts zero width non-joiner (ZWNJ) character. */
            MENU_INSERT_ZWNJ = 27,
            
            /** Inserts word joiner (WJ) character. */
            MENU_INSERT_WJ = 28,
            
            /** Inserts soft hyphen (SHY) character. */
            MENU_INSERT_SHY = 29,
            
            /** Represents the size of the [enum MenuItems] enum. */
            MENU_MAX = 30,
        }
        enum VirtualKeyboardType {
            /** Default text virtual keyboard. */
            KEYBOARD_TYPE_DEFAULT = 0,
            
            /** Multiline virtual keyboard. */
            KEYBOARD_TYPE_MULTILINE = 1,
            
            /** Virtual number keypad, useful for PIN entry. */
            KEYBOARD_TYPE_NUMBER = 2,
            
            /** Virtual number keypad, useful for entering fractional numbers. */
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            
            /** Virtual phone number keypad. */
            KEYBOARD_TYPE_PHONE = 4,
            
            /** Virtual keyboard with additional keys to assist with typing email addresses. */
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            
            /** Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.  
             *      
             *  **Note:** This is not supported on Web. Instead, this behaves identically to [constant KEYBOARD_TYPE_DEFAULT].  
             */
            KEYBOARD_TYPE_PASSWORD = 6,
            
            /** Virtual keyboard with additional keys to assist with typing URLs. */
            KEYBOARD_TYPE_URL = 7,
        }
    }
    /** An input field for single-line text. */
    class LineEdit extends Control {
        _text_changed(): void
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.  
         *    
         */
        select(from: number /*i64*/ = 0, to: number /*i64*/ = -1): void
        
        /** Selects the whole [String]. */
        select_all(): void
        
        /** Clears the current selection. */
        deselect(): void
        
        /** Returns `true` if the user has selected text. */
        has_selection(): boolean
        
        /** Returns the text inside the selection. */
        get_selected_text(): string
        
        /** Returns the selection begin column. */
        get_selection_from_column(): number /*i64*/
        
        /** Returns the selection end column. */
        get_selection_to_column(): number /*i64*/
        set_text(text: string): void
        get_text(): string
        get_draw_control_chars(): boolean
        set_draw_control_chars(enable: boolean): void
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_placeholder(text: string): void
        get_placeholder(): string
        set_caret_column(position: number /*i64*/): void
        get_caret_column(): number /*i64*/
        
        /** Returns the scroll offset due to [member caret_column], as a number of characters. */
        get_scroll_offset(): number /*f64*/
        set_expand_to_text_length_enabled(enabled: boolean): void
        is_expand_to_text_length_enabled(): boolean
        set_caret_blink_enabled(enabled: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_caret_force_displayed(enabled: boolean): void
        is_caret_force_displayed(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_max_length(chars: number /*i64*/): void
        get_max_length(): number /*i64*/
        
        /** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
        insert_text_at_caret(text: string): void
        
        /** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
        delete_char_at_caret(): void
        
        /** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
        delete_text(from_column: number /*i64*/, to_column: number /*i64*/): void
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_secret(enabled: boolean): void
        is_secret(): boolean
        set_secret_character(character: string): void
        get_secret_character(): string
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        
        /** Returns the [PopupMenu] of this [LineEdit]. By default, this menu is displayed when right-clicking on the [LineEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_menu(): PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        set_context_menu_enabled(enable: boolean): void
        is_context_menu_enabled(): boolean
        set_virtual_keyboard_enabled(enable: boolean): void
        is_virtual_keyboard_enabled(): boolean
        set_virtual_keyboard_type(type: LineEdit.VirtualKeyboardType): void
        get_virtual_keyboard_type(): LineEdit.VirtualKeyboardType
        set_clear_button_enabled(enable: boolean): void
        is_clear_button_enabled(): boolean
        set_shortcut_keys_enabled(enable: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_middle_mouse_paste_enabled(enable: boolean): void
        is_middle_mouse_paste_enabled(): boolean
        set_selecting_enabled(enable: boolean): void
        is_selecting_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        set_right_icon(icon: Texture2D): void
        get_right_icon(): Texture2D
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_select_all_on_focus(enabled: boolean): void
        is_select_all_on_focus(): boolean
        
        /** String value of the [LineEdit].  
         *      
         *  **Note:** Changing text using this property won't emit the [signal text_changed] signal.  
         */
        text: string
        
        /** Text shown when the [LineEdit] is empty. It is **not** the [LineEdit]'s default value (see [member text]). */
        placeholder_text: string
        
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        alignment: number /*i64*/
        
        /** Maximum number of characters that can be entered inside the [LineEdit]. If `0`, there is no limit.  
         *  When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting. If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as parameter.  
         *  **Example:**  
         *    
         */
        max_length: number /*i64*/
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        editable: boolean
        
        /** If `true`, the [LineEdit] width will increase to stay longer than the [member text]. It will **not** compress if the [member text] is shortened. */
        expand_to_text_length: boolean
        
        /** If `true`, the context menu will appear when right-clicked. */
        context_menu_enabled: boolean
        
        /** If `true`, the native virtual keyboard is shown when focused on platforms that support it. */
        virtual_keyboard_enabled: boolean
        
        /** Specifies the type of virtual keyboard to show. */
        virtual_keyboard_type: number /*i64*/
        
        /** If `true`, the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
        clear_button_enabled: boolean
        
        /** If `false`, using shortcuts will be disabled. */
        shortcut_keys_enabled: boolean
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        middle_mouse_paste_enabled: boolean
        
        /** If `false`, it's impossible to select the text using mouse nor keyboard. */
        selecting_enabled: boolean
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        
        /** If `true`, allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        
        /** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to `false`. */
        right_icon: Texture2D
        
        /** If `true`, the [LineEdit] doesn't display decoration. */
        flat: boolean
        
        /** If `true`, control characters are displayed. */
        draw_control_chars: boolean
        
        /** If `true`, the [LineEdit] will select the whole text when it gains focus. */
        select_all_on_focus: boolean
        
        /** If `true`, makes the caret blink. */
        caret_blink: boolean
        
        /** The interval at which the caret blinks (in seconds). */
        caret_blink_interval: number /*f64*/
        
        /** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
        caret_column: number /*i64*/
        
        /** If `true`, the [LineEdit] will always show the caret, even if focus is lost. */
        caret_force_displayed: boolean
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        caret_mid_grapheme: boolean
        
        /** If `true`, every character is replaced with the secret character (see [member secret_character]). */
        secret: boolean
        
        /** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
        secret_character: string
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
        
        /** Emitted when the text changes. */
        readonly text_changed: Signal // new_text: string => void
        
        /** Emitted when appending text that overflows the [member max_length]. The appended text is truncated to fit [member max_length], and the part that couldn't fit is passed as the [param rejected_substring] argument. */
        readonly text_change_rejected: Signal // rejected_substring: string => void
        
        /** Emitted when the user presses [constant KEY_ENTER] on the [LineEdit]. */
        readonly text_submitted: Signal // new_text: string => void
    }
    namespace LinkButton {
        enum UnderlineMode {
            /** The LinkButton will always show an underline at the bottom of its text. */
            UNDERLINE_MODE_ALWAYS = 0,
            
            /** The LinkButton will show an underline at the bottom of its text when the mouse cursor is over it. */
            UNDERLINE_MODE_ON_HOVER = 1,
            
            /** The LinkButton will never show an underline at the bottom of its text. */
            UNDERLINE_MODE_NEVER = 2,
        }
    }
    /** A button that represents a link. */
    class LinkButton extends BaseButton {
        set_text(text: string): void
        get_text(): string
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_uri(uri: string): void
        get_uri(): string
        set_underline_mode(underline_mode: LinkButton.UnderlineMode): void
        get_underline_mode(): LinkButton.UnderlineMode
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        
        /** The button's text that will be displayed inside the button's area. */
        text: string
        
        /** The underline mode to use for the text. See [enum LinkButton.UnderlineMode] for the available modes. */
        underline: number /*i64*/
        
        /** The [url=https://en.wikipedia.org/wiki/Uniform_Resource_Identifier]URI[/url] for this [LinkButton]. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [method OS.shell_open]). HTTP and HTTPS URLs open the default web browser.  
         *  **Examples:**  
         *    
         */
        uri: string
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    class LocalizationEditor extends VBoxContainer {
        update_translations(): void
        readonly localization_changed: Signal //  => void
    }
    /** Abstract base class for the game's main loop. */
    class MainLoop extends Object {
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Specific to the iOS platform.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr]. */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Specific to the macOS platform.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Specific to the macOS platform.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Specific to the Android platform.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Specific to the Android platform.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when text server is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        
        /** Called once during initialization. */
        /* gdvirtual */ _initialize(): void
        
        /** Called each physics frame with the time since the last physics frame as argument ([param delta], in seconds). Equivalent to [method Node._physics_process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         */
        /* gdvirtual */ _physics_process(delta: number /*f64*/): boolean
        
        /** Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to [method Node._process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         */
        /* gdvirtual */ _process(delta: number /*f64*/): boolean
        
        /** Called before the program exits. */
        /* gdvirtual */ _finalize(): void
        
        /** Emitted when a user responds to a permission request. */
        readonly on_request_permissions_result: Signal // permission: string, granted: boolean => void
    }
    /** A container that keeps a margin around its child controls. */
    class MarginContainer extends Container {
    }
    /** Generic 2D position hint for editing. */
    class Marker2D extends Node2D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        
        /** Size of the gizmo cross that appears in the editor. */
        gizmo_extents: number /*f64*/
    }
    /** Generic 3D position hint for editing. */
    class Marker3D extends Node3D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        
        /** Size of the gizmo cross that appears in the editor. */
        gizmo_extents: number /*f64*/
    }
    class Marker3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Virtual base class for applying visual properties to an object, such as color and roughness. */
    class Material extends Resource {
        /** Maximum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MAX = 127
        
        /** Minimum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MIN = -128
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. Used to access the RID of the [Material]'s [Shader]. */
        /* gdvirtual */ _get_shader_rid(): RID
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. */
        /* gdvirtual */ _get_shader_mode(): Shader.Mode
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member next_pass] should be shown in the editor or not. */
        /* gdvirtual */ _can_do_next_pass(): boolean
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member render_priority] should be shown in the editor or not. */
        /* gdvirtual */ _can_use_render_priority(): boolean
        set_next_pass(next_pass: Material): void
        get_next_pass(): Material
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. */
        inspect_native_shader_code(): void
        
        /** Creates a placeholder version of this resource ([PlaceholderMaterial]). */
        create_placeholder(): Resource
        
        /** Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [member render_priority] `1` will render before all objects with [member render_priority] `0`).  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         *      
         *  **Note:** This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.  
         */
        render_priority: number /*i64*/
        
        /** Sets the [Material] to be used for the next pass. This renders the object again using a different material.  
         *      
         *  **Note:** [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         */
        next_pass: Material
    }
    class MaterialEditorPlugin extends EditorPlugin {
    }
    /** A horizontal menu bar that creates a [MenuButton] for each [PopupMenu] child. */
    class MenuBar extends Control {
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        set_prefer_global_menu(enabled: boolean): void
        is_prefer_global_menu(): boolean
        
        /** Returns `true`, if system global menu is supported and used by this [MenuBar]. */
        is_native_menu(): boolean
        
        /** Returns number of menu items. */
        get_menu_count(): number /*i64*/
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_start_index(enabled: number /*i64*/): void
        get_start_index(): number /*i64*/
        
        /** Sets menu item title. */
        set_menu_title(menu: number /*i64*/, title: string): void
        
        /** Returns menu item title. */
        get_menu_title(menu: number /*i64*/): string
        
        /** Sets menu item tooltip. */
        set_menu_tooltip(menu: number /*i64*/, tooltip: string): void
        
        /** Returns menu item tooltip. */
        get_menu_tooltip(menu: number /*i64*/): string
        
        /** If `true`, menu item is disabled. */
        set_menu_disabled(menu: number /*i64*/, disabled: boolean): void
        
        /** Returns `true`, if menu item is disabled. */
        is_menu_disabled(menu: number /*i64*/): boolean
        
        /** If `true`, menu item is hidden. */
        set_menu_hidden(menu: number /*i64*/, hidden: boolean): void
        
        /** Returns `true`, if menu item is hidden. */
        is_menu_hidden(menu: number /*i64*/): boolean
        
        /** Returns [PopupMenu] associated with menu item. */
        get_menu_popup(menu: number /*i64*/): PopupMenu
        
        /** Flat [MenuBar] don't display item decoration. */
        flat: boolean
        
        /** Position in the global menu to insert first [MenuBar] item at. */
        start_index: number /*i64*/
        
        /** If `true`, when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
        switch_on_hover: boolean
        
        /** If `true`, [MenuBar] will use system global menu when supported. */
        prefer_global_menu: boolean
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
    }
    /** A button that brings up a [PopupMenu] when clicked. */
    class MenuButton extends Button {
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): PopupMenu
        
        /** Adjusts popup position and sizing for the [MenuButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        show_popup(): void
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        
        /** If `true`, when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
        switch_on_hover: boolean
        
        /** The number of items currently in the list. */
        item_count: any /*Items,popup/item_*/
        
        /** Emitted when the [PopupMenu] of this MenuButton is about to show. */
        readonly about_to_popup: Signal //  => void
    }
    namespace Mesh {
        enum PrimitiveType {
            /** Render array as points (one vertex equals one point). */
            PRIMITIVE_POINTS = 0,
            
            /** Render array as lines (every two vertices a line is created). */
            PRIMITIVE_LINES = 1,
            
            /** Render array as line strip. */
            PRIMITIVE_LINE_STRIP = 2,
            
            /** Render array as triangles (every three vertices a triangle is created). */
            PRIMITIVE_TRIANGLES = 3,
            
            /** Render array as triangle strips. */
            PRIMITIVE_TRIANGLE_STRIP = 4,
        }
        enum ArrayType {
            /** [PackedVector3Array], [PackedVector2Array], or [Array] of vertex positions. */
            ARRAY_VERTEX = 0,
            
            /** [PackedVector3Array] of vertex normals. */
            ARRAY_NORMAL = 1,
            
            /** [PackedFloat32Array] of vertex tangents. Each element in groups of 4 floats, first 3 floats determine the tangent, and the last the binormal direction as -1 or 1. */
            ARRAY_TANGENT = 2,
            
            /** [PackedColorArray] of vertex colors. */
            ARRAY_COLOR = 3,
            
            /** [PackedVector2Array] for UV coordinates. */
            ARRAY_TEX_UV = 4,
            
            /** [PackedVector2Array] for second UV coordinates. */
            ARRAY_TEX_UV2 = 5,
            
            /** Contains custom color channel 0. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM0_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
            ARRAY_CUSTOM0 = 6,
            
            /** Contains custom color channel 1. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM1_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
            ARRAY_CUSTOM1 = 7,
            
            /** Contains custom color channel 2. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM2_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
            ARRAY_CUSTOM2 = 8,
            
            /** Contains custom color channel 3. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM3_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
            ARRAY_CUSTOM3 = 9,
            
            /** [PackedFloat32Array] or [PackedInt32Array] of bone indices. Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag. */
            ARRAY_BONES = 10,
            
            /** [PackedFloat32Array] or [PackedFloat64Array] of bone weights in the range `0.0` to `1.0` (inclusive). Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag. */
            ARRAY_WEIGHTS = 11,
            
            /** [PackedInt32Array] of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the [i]i[/i]'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.  
             *  For triangles, the index array is interpreted as triples, referring to the vertices of each triangle. For lines, the index array is in pairs indicating the start and end of each line.  
             */
            ARRAY_INDEX = 12,
            
            /** Represents the size of the [enum ArrayType] enum. */
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            /** Indicates this custom channel contains unsigned normalized byte colors from 0 to 1, encoded as [PackedByteArray]. */
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            
            /** Indicates this custom channel contains signed normalized byte colors from -1 to 1, encoded as [PackedByteArray]. */
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            
            /** Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray]. Only red and green channels are used. */
            ARRAY_CUSTOM_RG_HALF = 2,
            
            /** Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray]. */
            ARRAY_CUSTOM_RGBA_HALF = 3,
            
            /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only the red channel is used. */
            ARRAY_CUSTOM_R_FLOAT = 4,
            
            /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red and green channels are used. */
            ARRAY_CUSTOM_RG_FLOAT = 5,
            
            /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red, green and blue channels are used. */
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            
            /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. */
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            
            /** Represents the size of the [enum ArrayCustomFormat] enum. */
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            /** Mesh array contains vertices. All meshes require a vertex array so this should always be present. */
            ARRAY_FORMAT_VERTEX = 1,
            
            /** Mesh array contains normals. */
            ARRAY_FORMAT_NORMAL = 2,
            
            /** Mesh array contains tangents. */
            ARRAY_FORMAT_TANGENT = 4,
            
            /** Mesh array contains colors. */
            ARRAY_FORMAT_COLOR = 8,
            
            /** Mesh array contains UVs. */
            ARRAY_FORMAT_TEX_UV = 16,
            
            /** Mesh array contains second UV. */
            ARRAY_FORMAT_TEX_UV2 = 32,
            
            /** Mesh array contains custom channel index 0. */
            ARRAY_FORMAT_CUSTOM0 = 64,
            
            /** Mesh array contains custom channel index 1. */
            ARRAY_FORMAT_CUSTOM1 = 128,
            
            /** Mesh array contains custom channel index 2. */
            ARRAY_FORMAT_CUSTOM2 = 256,
            
            /** Mesh array contains custom channel index 3. */
            ARRAY_FORMAT_CUSTOM3 = 512,
            
            /** Mesh array contains bones. */
            ARRAY_FORMAT_BONES = 1024,
            
            /** Mesh array contains bone weights. */
            ARRAY_FORMAT_WEIGHTS = 2048,
            
            /** Mesh array uses indices. */
            ARRAY_FORMAT_INDEX = 4096,
            
            /** Mask of mesh channels permitted in blend shapes. */
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            
            /** Shift of first custom channel. */
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            
            /** Number of format bits per custom channel. See [enum ArrayCustomFormat]. */
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            
            /** Amount to shift [enum ArrayCustomFormat] for custom channel index 0. */
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            
            /** Amount to shift [enum ArrayCustomFormat] for custom channel index 1. */
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            
            /** Amount to shift [enum ArrayCustomFormat] for custom channel index 2. */
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            
            /** Amount to shift [enum ArrayCustomFormat] for custom channel index 3. */
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            
            /** Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See [enum ArrayCustomFormat]. */
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            
            /** Shift of first compress flag. Compress flags should be passed to [method ArrayMesh.add_surface_from_arrays] and [method SurfaceTool.commit]. */
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            
            /** Flag used to mark that the array contains 2D vertices. */
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            
            /** Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan. */
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            
            /** Flag used to mark that the mesh contains up to 8 bone influences per vertex. This flag indicates that [constant ARRAY_BONES] and [constant ARRAY_WEIGHTS] elements will have double length. */
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            
            /** Flag used to mark that the mesh intentionally contains no vertex array. */
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            
            /** Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can. */
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
        }
        enum BlendShapeMode {
            /** Blend shapes are normalized. */
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            
            /** Blend shapes are relative to base weight. */
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
    }
    /** A [Resource] that contains vertex array-based geometry. */
    class Mesh extends Resource {
        /** Virtual method to override the surface count for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_surface_count(): number /*i64*/
        
        /** Virtual method to override the surface array length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_array_len(index: number /*i64*/): number /*i64*/
        
        /** Virtual method to override the surface array index length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_array_index_len(index: number /*i64*/): number /*i64*/
        
        /** Virtual method to override the surface arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_arrays(index: number /*i64*/): Array
        
        /** Virtual method to override the blend shape arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_blend_shape_arrays(index: number /*i64*/): Array
        
        /** Virtual method to override the surface LODs for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_lods(index: number /*i64*/): Dictionary
        
        /** Virtual method to override the surface format for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_format(index: number /*i64*/): number /*i64*/
        
        /** Virtual method to override the surface primitive type for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_primitive_type(index: number /*i64*/): number /*i64*/
        
        /** Virtual method to override the setting of a [param material] at the given [param index] for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_set_material(index: number /*i64*/, material: Material): void
        
        /** Virtual method to override the surface material for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_material(index: number /*i64*/): Material
        
        /** Virtual method to override the number of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_blend_shape_count(): number /*i64*/
        
        /** Virtual method to override the retrieval of blend shape names for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_blend_shape_name(index: number /*i64*/): StringName
        
        /** Virtual method to override the names of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _set_blend_shape_name(index: number /*i64*/, name: StringName): void
        
        /** Virtual method to override the [AABB] for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_aabb(): AABB
        set_lightmap_size_hint(size: Vector2i): void
        get_lightmap_size_hint(): Vector2i
        
        /** Returns the smallest [AABB] enclosing this mesh in local space. Not affected by `custom_aabb`.  
         *      
         *  **Note:** This is only implemented for [ArrayMesh] and [PrimitiveMesh].  
         */
        get_aabb(): AABB
        
        /** Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle. */
        get_faces(): PackedVector3Array
        
        /** Returns the number of surfaces that the [Mesh] holds. This is equivalent to [method MeshInstance3D.get_surface_override_material_count]. */
        get_surface_count(): number /*i64*/
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
        surface_get_arrays(surf_idx: number /*i64*/): Array
        
        /** Returns the blend shape arrays for the requested surface. */
        surface_get_blend_shape_arrays(surf_idx: number /*i64*/): Array
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material.  
         *      
         *  **Note:** This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.  
         */
        surface_set_material(surf_idx: number /*i64*/, material: Material): void
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material.  
         *      
         *  **Note:** This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.  
         */
        surface_get_material(surf_idx: number /*i64*/): Material
        
        /** Creates a placeholder version of this resource ([PlaceholderMesh]). */
        create_placeholder(): Resource
        
        /** Calculate a [ConcavePolygonShape3D] from the mesh. */
        create_trimesh_shape(): ConcavePolygonShape3D
        
        /** Calculate a [ConvexPolygonShape3D] from the mesh.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        create_convex_shape(clean: boolean = true, simplify: boolean = false): ConvexPolygonShape3D
        
        /** Calculate an outline mesh at a defined offset (margin) from the original mesh.  
         *      
         *  **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).  
         */
        create_outline(margin: number /*f64*/): Mesh
        
        /** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
        generate_triangle_mesh(): TriangleMesh
        
        /** Sets a hint to be used for lightmap resolution. */
        lightmap_size_hint: Vector2i
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            /** Constant for voxel-based approximate convex decomposition. */
            CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
            
            /** Constant for tetrahedron-based approximate convex decomposition. */
            CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1,
        }
    }
    /** Parameters to be used with a [Mesh] convex decomposition operation. */
    class MeshConvexDecompositionSettings extends RefCounted {
        set_max_concavity(max_concavity: number /*f64*/): void
        get_max_concavity(): number /*f64*/
        set_symmetry_planes_clipping_bias(symmetry_planes_clipping_bias: number /*f64*/): void
        get_symmetry_planes_clipping_bias(): number /*f64*/
        set_revolution_axes_clipping_bias(revolution_axes_clipping_bias: number /*f64*/): void
        get_revolution_axes_clipping_bias(): number /*f64*/
        set_min_volume_per_convex_hull(min_volume_per_convex_hull: number /*f64*/): void
        get_min_volume_per_convex_hull(): number /*f64*/
        set_resolution(min_volume_per_convex_hull: number /*i64*/): void
        get_resolution(): number /*i64*/
        set_max_num_vertices_per_convex_hull(max_num_vertices_per_convex_hull: number /*i64*/): void
        get_max_num_vertices_per_convex_hull(): number /*i64*/
        set_plane_downsampling(plane_downsampling: number /*i64*/): void
        get_plane_downsampling(): number /*i64*/
        set_convex_hull_downsampling(convex_hull_downsampling: number /*i64*/): void
        get_convex_hull_downsampling(): number /*i64*/
        set_normalize_mesh(normalize_mesh: boolean): void
        get_normalize_mesh(): boolean
        set_mode(mode: MeshConvexDecompositionSettings.Mode): void
        get_mode(): MeshConvexDecompositionSettings.Mode
        set_convex_hull_approximation(convex_hull_approximation: boolean): void
        get_convex_hull_approximation(): boolean
        set_max_convex_hulls(max_convex_hulls: number /*i64*/): void
        get_max_convex_hulls(): number /*i64*/
        set_project_hull_vertices(project_hull_vertices: boolean): void
        get_project_hull_vertices(): boolean
        
        /** Maximum concavity. Ranges from `0.0` to `1.0`. */
        max_concavity: number /*f64*/
        
        /** Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`. */
        symmetry_planes_clipping_bias: number /*f64*/
        
        /** Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`. */
        revolution_axes_clipping_bias: number /*f64*/
        
        /** Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`. */
        min_volume_per_convex_hull: number /*f64*/
        
        /** Maximum number of voxels generated during the voxelization stage. */
        resolution: number /*i64*/
        
        /** Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`. */
        max_num_vertices_per_convex_hull: number /*i64*/
        
        /** Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`. */
        plane_downsampling: number /*i64*/
        
        /** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`. */
        convex_hull_downsampling: number /*i64*/
        
        /** If enabled normalizes the mesh before applying the convex decomposition. */
        normalize_mesh: boolean
        
        /** Mode for the approximate convex decomposition. */
        mode: number /*i64*/
        
        /** If enabled uses approximation for computing convex hulls. */
        convex_hull_approximation: boolean
        
        /** The maximum number of convex hulls to produce from the merge operation. */
        max_convex_hulls: number /*i64*/
        
        /** If enabled projects output convex hull vertices onto original source mesh to increase floating point accuracy of the results. */
        project_hull_vertices: boolean
    }
    /** Helper tool to access and edit [Mesh] data. */
    class MeshDataTool extends RefCounted {
        /** Clears all data currently in MeshDataTool. */
        clear(): void
        
        /** Uses specified surface of given [Mesh] to populate data for MeshDataTool.  
         *  Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        create_from_surface(mesh: ArrayMesh, surface: number /*i64*/): GodotError
        
        /** Adds a new surface to specified [Mesh] with edited data. */
        commit_to_surface(mesh: ArrayMesh, compression_flags: number /*i64*/ = 0): GodotError
        
        /** Returns the [Mesh]'s format. Format is an integer made up of [Mesh] format flags combined together. For example, a mesh containing both vertices and normals would return a format of `3` because [constant Mesh.ARRAY_FORMAT_VERTEX] is `1` and [constant Mesh.ARRAY_FORMAT_NORMAL] is `2`.  
         *  See [enum Mesh.ArrayFormat] for a list of format flags.  
         */
        get_format(): number /*i64*/
        
        /** Returns the total number of vertices in [Mesh]. */
        get_vertex_count(): number /*i64*/
        
        /** Returns the number of edges in this [Mesh]. */
        get_edge_count(): number /*i64*/
        
        /** Returns the number of faces in this [Mesh]. */
        get_face_count(): number /*i64*/
        
        /** Sets the position of the given vertex. */
        set_vertex(idx: number /*i64*/, vertex: Vector3): void
        
        /** Returns the position of the given vertex. */
        get_vertex(idx: number /*i64*/): Vector3
        
        /** Sets the normal of the given vertex. */
        set_vertex_normal(idx: number /*i64*/, normal: Vector3): void
        
        /** Returns the normal of the given vertex. */
        get_vertex_normal(idx: number /*i64*/): Vector3
        
        /** Sets the tangent of the given vertex. */
        set_vertex_tangent(idx: number /*i64*/, tangent: Plane): void
        
        /** Returns the tangent of the given vertex. */
        get_vertex_tangent(idx: number /*i64*/): Plane
        
        /** Sets the UV of the given vertex. */
        set_vertex_uv(idx: number /*i64*/, uv: Vector2): void
        
        /** Returns the UV of the given vertex. */
        get_vertex_uv(idx: number /*i64*/): Vector2
        
        /** Sets the UV2 of the given vertex. */
        set_vertex_uv2(idx: number /*i64*/, uv2: Vector2): void
        
        /** Returns the UV2 of the given vertex. */
        get_vertex_uv2(idx: number /*i64*/): Vector2
        
        /** Sets the color of the given vertex. */
        set_vertex_color(idx: number /*i64*/, color: Color): void
        
        /** Returns the color of the given vertex. */
        get_vertex_color(idx: number /*i64*/): Color
        
        /** Sets the bones of the given vertex. */
        set_vertex_bones(idx: number /*i64*/, bones: PackedInt32Array): void
        
        /** Returns the bones of the given vertex. */
        get_vertex_bones(idx: number /*i64*/): PackedInt32Array
        
        /** Sets the bone weights of the given vertex. */
        set_vertex_weights(idx: number /*i64*/, weights: PackedFloat32Array): void
        
        /** Returns bone weights of the given vertex. */
        get_vertex_weights(idx: number /*i64*/): PackedFloat32Array
        
        /** Sets the metadata associated with the given vertex. */
        set_vertex_meta(idx: number /*i64*/, meta: any): void
        
        /** Returns the metadata associated with the given vertex. */
        get_vertex_meta(idx: number /*i64*/): any
        
        /** Returns an array of edges that share the given vertex. */
        get_vertex_edges(idx: number /*i64*/): PackedInt32Array
        
        /** Returns an array of faces that share the given vertex. */
        get_vertex_faces(idx: number /*i64*/): PackedInt32Array
        
        /** Returns index of specified vertex connected to given edge.  
         *  Vertex argument can only be 0 or 1 because edges are comprised of two vertices.  
         */
        get_edge_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        
        /** Returns array of faces that touch given edge. */
        get_edge_faces(idx: number /*i64*/): PackedInt32Array
        
        /** Sets the metadata of the given edge. */
        set_edge_meta(idx: number /*i64*/, meta: any): void
        
        /** Returns meta information assigned to given edge. */
        get_edge_meta(idx: number /*i64*/): any
        
        /** Returns the specified vertex index of the given face.  
         *  Vertex argument must be either 0, 1, or 2 because faces contain three vertices.  
         *  **Example:**  
         *    
         */
        get_face_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        
        /** Returns specified edge associated with given face.  
         *  Edge argument must be either 0, 1, or 2 because a face only has three edges.  
         */
        get_face_edge(idx: number /*i64*/, edge: number /*i64*/): number /*i64*/
        
        /** Sets the metadata of the given face. */
        set_face_meta(idx: number /*i64*/, meta: any): void
        
        /** Returns the metadata associated with the given face. */
        get_face_meta(idx: number /*i64*/): any
        
        /** Calculates and returns the face normal of the given face. */
        get_face_normal(idx: number /*i64*/): Vector3
        
        /** Sets the material to be used by newly-constructed [Mesh]. */
        set_material(material: Material): void
        
        /** Returns the material assigned to the [Mesh]. */
        get_material(): Material
    }
    class MeshEditorPlugin extends EditorPlugin {
    }
    /** Node used for displaying a [Mesh] in 2D. */
    class MeshInstance2D extends Node2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        mesh: Mesh
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        texture: Texture2D
        
        /** Emitted when the [member texture] is changed. */
        readonly texture_changed: Signal //  => void
    }
    /** Node that instances meshes into a scenario. */
    class MeshInstance3D extends GeometryInstance3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_skin(skin: Skin): void
        get_skin(): Skin
        
        /** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
        get_surface_override_material_count(): number /*i64*/
        
        /** Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].  
         *      
         *  **Note:** This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        set_surface_override_material(surface: number /*i64*/, material: Material): void
        
        /** Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].  
         *      
         *  **Note:** This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        get_surface_override_material(surface: number /*i64*/): Material
        
        /** Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.  
         *  Returns `null` if no material is active, including when [member mesh] is `null`.  
         */
        get_active_material(surface: number /*i64*/): Material
        
        /** This helper creates a [StaticBody3D] child node with a [ConcavePolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing. */
        create_trimesh_collision(): void
        
        /** This helper creates a [StaticBody3D] child node with a [ConvexPolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        create_convex_collision(clean: boolean = true, simplify: boolean = false): void
        
        /** This helper creates a [StaticBody3D] child node with multiple [ConvexPolygonShape3D] collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional [param settings]. */
        create_multiple_convex_collisions(settings: MeshConvexDecompositionSettings = <any> {} /*compound.type from nil*/): void
        
        /** Returns the number of blend shapes available. Produces an error if [member mesh] is `null`. */
        get_blend_shape_count(): number /*i64*/
        
        /** Returns the index of the blend shape with the given [param name]. Returns `-1` if no blend shape with this name exists, including when [member mesh] is `null`. */
        find_blend_shape_by_name(name: StringName): number /*i64*/
        
        /** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns `0.0` and produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        get_blend_shape_value(blend_shape_idx: number /*i64*/): number /*f64*/
        
        /** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        set_blend_shape_value(blend_shape_idx: number /*i64*/, value: number /*f64*/): void
        
        /** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
        create_debug_tangents(): void
        
        /** The [Mesh] resource for the instance. */
        mesh: Mesh
        
        /** The [Skin] to be used by this instance. */
        skin: Skin
        
        /** [NodePath] to the [Skeleton3D] associated with the instance. */
        skeleton: NodePath
    }
    class MeshInstance3DEditor extends Control {
    }
    class MeshInstance3DEditorPlugin extends EditorPlugin {
    }
    class MeshInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Library of meshes. */
    class MeshLibrary extends Resource {
        /** Creates a new item in the library with the given ID.  
         *  You can get an unused ID from [method get_last_unused_item_id].  
         */
        create_item(id: number /*i64*/): void
        
        /** Sets the item's name.  
         *  This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].  
         */
        set_item_name(id: number /*i64*/, name: string): void
        
        /** Sets the item's mesh. */
        set_item_mesh(id: number /*i64*/, mesh: Mesh): void
        
        /** Sets the transform to apply to the item's mesh. */
        set_item_mesh_transform(id: number /*i64*/, mesh_transform: Transform3D): void
        
        /** Sets the item's navigation mesh. */
        set_item_navigation_mesh(id: number /*i64*/, navigation_mesh: NavigationMesh): void
        
        /** Sets the transform to apply to the item's navigation mesh. */
        set_item_navigation_mesh_transform(id: number /*i64*/, navigation_mesh: Transform3D): void
        
        /** Sets the item's navigation layers bitmask. */
        set_item_navigation_layers(id: number /*i64*/, navigation_layers: number /*i64*/): void
        
        /** Sets an item's collision shapes.  
         *  The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].  
         */
        set_item_shapes(id: number /*i64*/, shapes: Array): void
        
        /** Sets a texture to use as the item's preview icon in the editor. */
        set_item_preview(id: number /*i64*/, texture: Texture2D): void
        
        /** Returns the item's name. */
        get_item_name(id: number /*i64*/): string
        
        /** Returns the item's mesh. */
        get_item_mesh(id: number /*i64*/): Mesh
        
        /** Returns the transform applied to the item's mesh. */
        get_item_mesh_transform(id: number /*i64*/): Transform3D
        
        /** Returns the item's navigation mesh. */
        get_item_navigation_mesh(id: number /*i64*/): NavigationMesh
        
        /** Returns the transform applied to the item's navigation mesh. */
        get_item_navigation_mesh_transform(id: number /*i64*/): Transform3D
        
        /** Returns the item's navigation layers bitmask. */
        get_item_navigation_layers(id: number /*i64*/): number /*i64*/
        
        /** Returns an item's collision shapes.  
         *  The array consists of each [Shape3D] followed by its [Transform3D].  
         */
        get_item_shapes(id: number /*i64*/): Array
        
        /** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
        get_item_preview(id: number /*i64*/): Texture2D
        
        /** Removes the item. */
        remove_item(id: number /*i64*/): void
        
        /** Returns the first item with the given name. */
        find_item_by_name(name: string): number /*i64*/
        
        /** Clears the library. */
        clear(): void
        
        /** Returns the list of item IDs in use. */
        get_item_list(): PackedInt32Array
        
        /** Gets an unused ID for a new item. */
        get_last_unused_item_id(): number /*i64*/
    }
    class MeshLibraryEditor extends Control {
    }
    class MeshLibraryEditorPlugin extends EditorPlugin {
    }
    /** Simple texture that uses a mesh to draw itself. */
    class MeshTexture extends Texture2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_image_size(size: Vector2): void
        get_image_size(): Vector2
        set_base_texture(texture: Texture2D): void
        get_base_texture(): Texture2D
        
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        mesh: Mesh
        
        /** Sets the base texture that the Mesh will use to draw. */
        base_texture: Texture2D
        
        /** Sets the size of the image, needed for reference. */
        image_size: Vector2
    }
    /** Interpolates an abstract value and supplies it to a method called over time. */
    class MethodTweener extends Tweener {
        /** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
        set_delay(delay: number /*f64*/): MethodTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        set_trans(trans: Tween.TransitionType): MethodTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        set_ease(ease: Tween.EaseType): MethodTweener
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes. */
    class MissingNode extends Node {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        
        /** Returns the name of the type this node was originally. */
        original_class: string
        recording_properties: boolean
    }
    /** An internal editor class intended for keeping the data of unrecognized resources. */
    class MissingResource extends Resource {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        
        /** Returns the name of the class this resource was originally. */
        original_class: string
        recording_properties: boolean
    }
    /** Generic mobile VR implementation. */
    class MobileVRInterface extends XRInterface {
        set_eye_height(eye_height: number /*f64*/): void
        get_eye_height(): number /*f64*/
        set_iod(iod: number /*f64*/): void
        get_iod(): number /*f64*/
        set_display_width(display_width: number /*f64*/): void
        get_display_width(): number /*f64*/
        set_display_to_lens(display_to_lens: number /*f64*/): void
        get_display_to_lens(): number /*f64*/
        set_oversample(oversample: number /*f64*/): void
        get_oversample(): number /*f64*/
        set_k1(k: number /*f64*/): void
        get_k1(): number /*f64*/
        set_k2(k: number /*f64*/): void
        get_k2(): number /*f64*/
        
        /** The height at which the camera is placed in relation to the ground (i.e. [XROrigin3D] node). */
        eye_height: number /*f64*/
        
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        iod: number /*f64*/
        
        /** The width of the display in centimeters. */
        display_width: number /*f64*/
        
        /** The distance between the display and the lenses inside of the device in centimeters. */
        display_to_lens: number /*f64*/
        
        /** The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance. */
        oversample: number /*f64*/
        
        /** The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect. */
        k1: number /*f64*/
        
        /** The k2 lens factor, see k1. */
        k2: number /*f64*/
    }
    /** Abstract class for non-real-time video recording encoders. */
    class MovieWriter extends Object {
        /** Called when the audio sample rate used for recording the audio is requested by the engine. The value returned must be specified in Hz. Defaults to 48000 Hz if [method _get_audio_mix_rate] is not overridden. */
        /* gdvirtual */ _get_audio_mix_rate(): number /*i64*/
        
        /** Called when the audio speaker mode used for recording the audio is requested by the engine. This can affect the number of output channels in the resulting audio file/stream. Defaults to [constant AudioServer.SPEAKER_MODE_STEREO] if [method _get_audio_speaker_mode] is not overridden. */
        /* gdvirtual */ _get_audio_speaker_mode(): AudioServer.SpeakerMode
        
        /** Called when the engine determines whether this [MovieWriter] is able to handle the file at [param path]. Must return `true` if this [MovieWriter] is able to handle the given file path, `false` otherwise. Typically, [method _handles_file] is overridden as follows to allow the user to record a file at any path with a given file extension:  
         *    
         */
        /* gdvirtual */ _handles_file(path: string): boolean
        
        /** Called once before the engine starts writing video and audio data. [param movie_size] is the width and height of the video to save. [param fps] is the number of frames per second specified in the project settings or using the `--fixed-fps <fps>` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url]. */
        /* gdvirtual */ _write_begin(movie_size: Vector2i, fps: number /*i64*/, base_path: string): GodotError
        
        /** Called at the end of every rendered frame. The [param frame_image] and [param audio_frame_block] function arguments should be written to. */
        /* gdvirtual */ _write_frame(frame_image: Image, audio_frame_block: number /*i64*/): GodotError
        
        /** Called when the engine finishes writing. This occurs when the engine quits by pressing the window manager's close button, or when [method SceneTree.quit] is called.  
         *      
         *  **Note:** Pressing [kbd]Ctrl + C[/kbd] on the terminal running the editor/project does [i]not[/i] result in [method _write_end] being called.  
         */
        /* gdvirtual */ _write_end(): void
        
        /** Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [method _handles_file].  
         *      
         *  **Note:** [method add_writer] must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.  
         */
        static add_writer(writer: MovieWriter): void
    }
    class MovieWriterMJPEG extends MovieWriter {
    }
    class MovieWriterPNGWAV extends MovieWriter {
    }
    namespace MultiMesh {
        enum TransformFormat {
            /** Use this when using 2D transforms. */
            TRANSFORM_2D = 0,
            
            /** Use this when using 3D transforms. */
            TRANSFORM_3D = 1,
        }
    }
    /** Provides high-performance drawing of a mesh multiple times using GPU instancing. */
    class MultiMesh extends Resource {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_colors(enable: boolean): void
        is_using_colors(): boolean
        set_use_custom_data(enable: boolean): void
        is_using_custom_data(): boolean
        set_transform_format(format: MultiMesh.TransformFormat): void
        get_transform_format(): MultiMesh.TransformFormat
        set_instance_count(count: number /*i64*/): void
        get_instance_count(): number /*i64*/
        set_visible_instance_count(count: number /*i64*/): void
        get_visible_instance_count(): number /*i64*/
        
        /** Sets the [Transform3D] for a specific instance. */
        set_instance_transform(instance: number /*i64*/, transform: Transform3D): void
        
        /** Sets the [Transform2D] for a specific instance. */
        set_instance_transform_2d(instance: number /*i64*/, transform: Transform2D): void
        
        /** Returns the [Transform3D] of a specific instance. */
        get_instance_transform(instance: number /*i64*/): Transform3D
        
        /** Returns the [Transform2D] of a specific instance. */
        get_instance_transform_2d(instance: number /*i64*/): Transform2D
        
        /** Sets the color of a specific instance by [i]multiplying[/i] the mesh's existing vertex colors. This allows for different color tinting per instance.  
         *  For the color to take effect, ensure that [member use_colors] is `true` on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).  
         */
        set_instance_color(instance: number /*i64*/, color: Color): void
        
        /** Gets a specific instance's color multiplier. */
        get_instance_color(instance: number /*i64*/): Color
        
        /** Sets custom data for a specific instance. Although [Color] is used, it is just a container for 4 floating point numbers.  
         *  For the custom data to be used, ensure that [member use_custom_data] is `true`.  
         *  This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.  
         */
        set_instance_custom_data(instance: number /*i64*/, custom_data: Color): void
        
        /** Returns the custom data that has been set for a specific instance. */
        get_instance_custom_data(instance: number /*i64*/): Color
        
        /** Returns the visibility axis-aligned bounding box in local space. */
        get_aabb(): AABB
        get_buffer(): PackedFloat32Array
        set_buffer(buffer: PackedFloat32Array): void
        _set_transform_array(array: PackedVector3Array): void
        _get_transform_array(): PackedVector3Array
        _set_transform_2d_array(array: PackedVector2Array): void
        _get_transform_2d_array(): PackedVector2Array
        _set_color_array(array: PackedColorArray): void
        _get_color_array(): PackedColorArray
        _set_custom_data_array(array: PackedColorArray): void
        _get_custom_data_array(): PackedColorArray
        
        /** Format of transform used to transform mesh, either 2D or 3D. */
        transform_format: number /*i64*/
        
        /** If `true`, the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        use_colors: boolean
        
        /** If `true`, the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        use_custom_data: boolean
        
        /** Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.  
         *  By default, all instances are drawn but you can limit this with [member visible_instance_count].  
         */
        instance_count: number /*i64*/
        
        /** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
        visible_instance_count: number /*i64*/
        
        /** [Mesh] resource to be instanced.  
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].  
         */
        mesh: Mesh
        buffer: PackedFloat32Array
        
        /** See [method set_instance_transform]. */
        transform_array: PackedVector3Array
        
        /** See [method set_instance_transform_2d]. */
        transform_2d_array: PackedVector2Array
        
        /** See [method set_instance_color]. */
        color_array: PackedColorArray
        
        /** See [method set_instance_custom_data]. */
        custom_data_array: PackedColorArray
    }
    class MultiMeshEditor extends Control {
    }
    class MultiMeshEditorPlugin extends EditorPlugin {
    }
    /** Node that instances a [MultiMesh] in 2D. */
    class MultiMeshInstance2D extends Node2D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        multimesh: MultiMesh
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        texture: Texture2D
        
        /** Emitted when the [member texture] is changed. */
        readonly texture_changed: Signal //  => void
    }
    /** Node that instances a [MultiMesh]. */
    class MultiMeshInstance3D extends GeometryInstance3D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        multimesh: MultiMesh
    }
    namespace MultiplayerAPI {
        enum RPCMode {
            /** Used with [method Node.rpc_config] to disable a method or property for all RPC calls, making it unavailable. Default for all methods. */
            RPC_MODE_DISABLED = 0,
            
            /** Used with [method Node.rpc_config] to set a method to be callable remotely by any peer. Analogous to the `@rpc("any_peer")` annotation. Calls are accepted from all remote peers, no matter if they are node's authority or not. */
            RPC_MODE_ANY_PEER = 1,
            
            /** Used with [method Node.rpc_config] to set a method to be callable remotely only by the current multiplayer authority (which is the server by default). Analogous to the `@rpc("authority")` annotation. See [method Node.set_multiplayer_authority]. */
            RPC_MODE_AUTHORITY = 2,
        }
    }
    /** High-level multiplayer API interface. */
    class MultiplayerAPI extends RefCounted {
        /** Returns `true` if there is a [member multiplayer_peer] set. */
        has_multiplayer_peer(): boolean
        get_multiplayer_peer(): MultiplayerPeer
        set_multiplayer_peer(peer: MultiplayerPeer): void
        
        /** Returns the unique peer ID of this MultiplayerAPI's [member multiplayer_peer]. */
        get_unique_id(): number /*i64*/
        
        /** Returns `true` if this MultiplayerAPI's [member multiplayer_peer] is valid and in server mode (listening for connections). */
        is_server(): boolean
        
        /** Returns the sender's peer ID for the RPC currently being executed.  
         *      
         *  **Note:** If not inside an RPC this method will return 0.  
         */
        get_remote_sender_id(): number /*i64*/
        
        /** Method used for polling the MultiplayerAPI. You only need to worry about this if you set [member SceneTree.multiplayer_poll] to `false`. By default, [SceneTree] will poll its MultiplayerAPI(s) for you.  
         *      
         *  **Note:** This method results in RPCs being called, so they will be executed in the same context of this function (e.g. `_process`, `physics`, [Thread]).  
         */
        poll(): GodotError
        
        /** Sends an RPC to the target [param peer]. The given [param method] will be called on the remote [param object] with the provided [param arguments]. The RPC may also be called locally depending on the implementation and RPC configuration. See [method Node.rpc] and [method Node.rpc_config].  
         *      
         *  **Note:** Prefer using [method Node.rpc], [method Node.rpc_id], or `my_method.rpc(peer, arg1, arg2, ...)` (in GDScript), since they are faster. This method is mostly useful in conjunction with [MultiplayerAPIExtension] when augmenting or replacing the multiplayer capabilities.  
         */
        rpc(peer: number /*i64*/, object: Object, method: StringName, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Notifies the MultiplayerAPI of a new [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and a valid [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.  
         *      
         *  **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].  
         */
        object_configuration_add(object: Object, configuration: any): GodotError
        
        /** Notifies the MultiplayerAPI to remove a [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and an empty [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.  
         *      
         *  **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].  
         */
        object_configuration_remove(object: Object, configuration: any): GodotError
        
        /** Returns the peer IDs of all connected peers of this MultiplayerAPI's [member multiplayer_peer]. */
        get_peers(): PackedInt32Array
        
        /** Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by [SceneTree] when the engine starts. */
        static set_default_interface(interface_name: StringName): void
        
        /** Returns the default MultiplayerAPI implementation class name. This is usually `"SceneMultiplayer"` when [SceneMultiplayer] is available. See [method set_default_interface]. */
        static get_default_interface(): StringName
        
        /** Returns a new instance of the default MultiplayerAPI. */
        static create_default_interface(): MultiplayerAPI
        
        /** The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with [method is_server]) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals. */
        multiplayer_peer: MultiplayerPeer
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] connects with a new peer. ID is the peer ID of the new peer. Clients get notified when other clients connect to the same server. Upon connecting to a server, a client also receives this signal for the server (with ID being 1). */
        readonly peer_connected: Signal // id: number /*i64*/ => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from a peer. Clients get notified when other clients disconnect from the same server. */
        readonly peer_disconnected: Signal // id: number /*i64*/ => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] successfully connected to a server. Only emitted on clients. */
        readonly connected_to_server: Signal //  => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] fails to establish a connection to a server. Only emitted on clients. */
        readonly connection_failed: Signal //  => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from server. Only emitted on clients. */
        readonly server_disconnected: Signal //  => void
    }
    /** Base class used for extending the [MultiplayerAPI]. */
    class MultiplayerAPIExtension extends MultiplayerAPI {
        /** Callback for [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): GodotError
        
        /** Called when the [member MultiplayerAPI.multiplayer_peer] is set. */
        /* gdvirtual */ _set_multiplayer_peer(multiplayer_peer: MultiplayerPeer): void
        
        /** Called when the [member MultiplayerAPI.multiplayer_peer] is retrieved. */
        /* gdvirtual */ _get_multiplayer_peer(): MultiplayerPeer
        
        /** Callback for [method MultiplayerAPI.get_unique_id]. */
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        
        /** Callback for [method MultiplayerAPI.get_peers]. */
        /* gdvirtual */ _get_peer_ids(): PackedInt32Array
        
        /** Callback for [method MultiplayerAPI.rpc]. */
        /* gdvirtual */ _rpc(peer: number /*i64*/, object: Object, method: StringName, args: Array): GodotError
        
        /** Callback for [method MultiplayerAPI.get_remote_sender_id]. */
        /* gdvirtual */ _get_remote_sender_id(): number /*i64*/
        
        /** Callback for [method MultiplayerAPI.object_configuration_add]. */
        /* gdvirtual */ _object_configuration_add(object: Object, configuration: any): GodotError
        
        /** Callback for [method MultiplayerAPI.object_configuration_remove]. */
        /* gdvirtual */ _object_configuration_remove(object: Object, configuration: any): GodotError
    }
    class MultiplayerEditorDebugger extends EditorDebuggerPlugin {
        readonly open_request: Signal // path: string => void
    }
    class MultiplayerEditorPlugin extends EditorPlugin {
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            /** The MultiplayerPeer is disconnected. */
            CONNECTION_DISCONNECTED = 0,
            
            /** The MultiplayerPeer is currently connecting to a server. */
            CONNECTION_CONNECTING = 1,
            
            /** This MultiplayerPeer is connected. */
            CONNECTION_CONNECTED = 2,
        }
        enum TransferMode {
            /** Packets are not acknowledged, no resend attempts are made for lost packets. Packets may arrive in any order. Potentially faster than [constant TRANSFER_MODE_UNRELIABLE_ORDERED]. Use for non-critical data, and always consider whether the order matters. */
            TRANSFER_MODE_UNRELIABLE = 0,
            
            /** Packets are not acknowledged, no resend attempts are made for lost packets. Packets are received in the order they were sent in. Potentially faster than [constant TRANSFER_MODE_RELIABLE]. Use for non-critical data or data that would be outdated if received late due to resend attempt(s) anyway, for example movement and positional data. */
            TRANSFER_MODE_UNRELIABLE_ORDERED = 1,
            
            /** Packets must be received and resend attempts should be made until the packets are acknowledged. Packets must be received in the order they were sent in. Most reliable transfer mode, but potentially the slowest due to the overhead. Use for critical data that must be transmitted and arrive in order, for example an ability being triggered or a chat message. Consider carefully if the information really is critical, and use sparingly. */
            TRANSFER_MODE_RELIABLE = 2,
        }
    }
    /** Abstract class for specialized [PacketPeer]s used by the [MultiplayerAPI]. */
    class MultiplayerPeer extends PacketPeer {
        /** Packets are sent to all connected peers. */
        static readonly TARGET_PEER_BROADCAST = 0
        
        /** Packets are sent to the remote peer acting as server. */
        static readonly TARGET_PEER_SERVER = 1
        set_transfer_channel(channel: number /*i64*/): void
        get_transfer_channel(): number /*i64*/
        set_transfer_mode(mode: MultiplayerPeer.TransferMode): void
        get_transfer_mode(): MultiplayerPeer.TransferMode
        
        /** Sets the peer to which packets will be sent.  
         *  The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].  
         */
        set_target_peer(id: number /*i64*/): void
        
        /** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_peer(): number /*i64*/
        
        /** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
        get_packet_channel(): number /*i64*/
        
        /** Returns the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_mode(): MultiplayerPeer.TransferMode
        
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        
        /** Disconnects the given [param peer] from this host. If [param force] is `true` the [signal peer_disconnected] signal will not be emitted for this peer. */
        disconnect_peer(peer: number /*i64*/, force: boolean = false): void
        
        /** Returns the current state of the connection. See [enum ConnectionStatus]. */
        get_connection_status(): MultiplayerPeer.ConnectionStatus
        
        /** Returns the ID of this [MultiplayerPeer]. */
        get_unique_id(): number /*i64*/
        
        /** Returns a randomly generated integer that can be used as a network unique ID. */
        generate_unique_id(): number /*i64*/
        set_refuse_new_connections(enable: boolean): void
        is_refusing_new_connections(): boolean
        
        /** Returns true if the server can act as a relay in the current configuration (i.e. if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them). */
        is_server_relay_supported(): boolean
        
        /** If `true`, this [MultiplayerPeer] refuses new connections. */
        refuse_new_connections: boolean
        
        /** The manner in which to send packets to the target peer. See [enum TransferMode], and the [method set_target_peer] method. */
        transfer_mode: number /*i64*/
        
        /** The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.  
         *      
         *  **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.  
         */
        transfer_channel: number /*i64*/
        
        /** Emitted when a remote peer connects. */
        readonly peer_connected: Signal // id: number /*i64*/ => void
        
        /** Emitted when a remote peer has disconnected. */
        readonly peer_disconnected: Signal // id: number /*i64*/ => void
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension. */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        /** Called when a packet needs to be received by the [MultiplayerAPI], with [param r_buffer_size] being the size of the binary [param r_buffer] in bytes. */
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], with [param p_buffer_size] being the size of the binary [param p_buffer] in bytes. */
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        
        /** Called when the available packet count is internally requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        
        /** Called when the maximum allowed packet size (in bytes) is requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
        
        /** Called when a packet needs to be received by the [MultiplayerAPI], if [method _get_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _get_packet_script(): PackedByteArray
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], if [method _put_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _put_packet_script(p_buffer: PackedByteArray): GodotError
        
        /** Called to get the channel over which the next available packet was received. See [method MultiplayerPeer.get_packet_channel]. */
        /* gdvirtual */ _get_packet_channel(): number /*i64*/
        
        /** Called to get the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method MultiplayerPeer.get_packet_mode]. */
        /* gdvirtual */ _get_packet_mode(): MultiplayerPeer.TransferMode
        
        /** Called when the channel to use is set for this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _set_transfer_channel(p_channel: number /*i64*/): void
        
        /** Called when the transfer channel to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _get_transfer_channel(): number /*i64*/
        
        /** Called when the transfer mode is set on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _set_transfer_mode(p_mode: MultiplayerPeer.TransferMode): void
        
        /** Called when the transfer mode to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _get_transfer_mode(): MultiplayerPeer.TransferMode
        
        /** Called when the target peer to use is set for this [MultiplayerPeer] (see [method MultiplayerPeer.set_target_peer]). */
        /* gdvirtual */ _set_target_peer(p_peer: number /*i64*/): void
        
        /** Called when the ID of the [MultiplayerPeer] who sent the most recent packet is requested (see [method MultiplayerPeer.get_packet_peer]). */
        /* gdvirtual */ _get_packet_peer(): number /*i64*/
        
        /** Called when the "is server" status is requested on the [MultiplayerAPI]. See [method MultiplayerAPI.is_server]. */
        /* gdvirtual */ _is_server(): boolean
        
        /** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): void
        
        /** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
        /* gdvirtual */ _close(): void
        
        /** Called when the connected [param p_peer] should be forcibly disconnected (see [method MultiplayerPeer.disconnect_peer]). */
        /* gdvirtual */ _disconnect_peer(p_peer: number /*i64*/, p_force: boolean): void
        
        /** Called when the unique ID of this [MultiplayerPeer] is requested (see [method MultiplayerPeer.get_unique_id]). The value must be between `1` and `2147483647`. */
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        
        /** Called when the "refuse new connections" status is set on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _set_refuse_new_connections(p_enable: boolean): void
        
        /** Called when the "refuse new connections" status is requested on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _is_refusing_new_connections(): boolean
        
        /** Called to check if the server can act as a relay in the current configuration. See [method MultiplayerPeer.is_server_relay_supported]. */
        /* gdvirtual */ _is_server_relay_supported(): boolean
        
        /** Called when the connection status is requested on the [MultiplayerPeer] (see [method MultiplayerPeer.get_connection_status]). */
        /* gdvirtual */ _get_connection_status(): MultiplayerPeer.ConnectionStatus
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers. */
    class MultiplayerSpawner extends Node {
        /** Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [member spawn_path]. */
        add_spawnable_scene(path: string): void
        
        /** Returns the count of spawnable scene paths. */
        get_spawnable_scene_count(): number /*i64*/
        
        /** Returns the spawnable scene path by index. */
        get_spawnable_scene(index: number /*i64*/): string
        
        /** Clears all spawnable scenes. Does not despawn existing instances on remote peers. */
        clear_spawnable_scenes(): void
        _get_spawnable_scenes(): PackedStringArray
        _set_spawnable_scenes(scenes: PackedStringArray): void
        
        /** Requests a custom spawn, with [param data] passed to [member spawn_function] on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [member spawn_path].  
         *      
         *  **Note:** Spawnable scenes are spawned automatically. [method spawn] is only needed for custom spawns.  
         */
        spawn(data: any = <any> {} /*compound.type from nil*/): Node
        get_spawn_path(): NodePath
        set_spawn_path(path: NodePath): void
        get_spawn_limit(): number /*i64*/
        set_spawn_limit(limit: number /*i64*/): void
        get_spawn_function(): Callable
        set_spawn_function(spawn_function: Callable): void
        _spawnable_scenes: PackedStringArray
        
        /** Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers. */
        spawn_path: NodePath
        
        /** Maximum nodes that is allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.  
         *  When set to `0` (the default), there is no limit.  
         */
        spawn_limit: number /*i64*/
        
        /** Method called on all peers when for every custom [method spawn] requested by the authority. Will receive the `data` parameter, and should return a [Node] that is not in the scene tree.  
         *      
         *  **Note:** The returned node should **not** be added to the scene with [method Node.add_child]. This is done automatically.  
         */
        spawn_function: Callable
        
        /** Emitted when a spawnable scene or custom spawn was despawned by the multiplayer authority. Only called on puppets. */
        readonly despawned: Signal // node: Node => void
        
        /** Emitted when a spawnable scene or custom spawn was spawned by the multiplayer authority. Only called on puppets. */
        readonly spawned: Signal // node: Node => void
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            /** Visibility filters are updated during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            VISIBILITY_PROCESS_IDLE = 0,
            
            /** Visibility filters are updated during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            VISIBILITY_PROCESS_PHYSICS = 1,
            
            /** Visibility filters are not updated automatically, and must be updated manually by calling [method update_visibility]. */
            VISIBILITY_PROCESS_NONE = 2,
        }
    }
    /** Synchronizes properties from the multiplayer authority to the remote peers. */
    class MultiplayerSynchronizer extends Node {
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        set_replication_interval(milliseconds: number /*f64*/): void
        get_replication_interval(): number /*f64*/
        set_delta_interval(milliseconds: number /*f64*/): void
        get_delta_interval(): number /*f64*/
        set_replication_config(config: SceneReplicationConfig): void
        get_replication_config(): SceneReplicationConfig
        set_visibility_update_mode(mode: MultiplayerSynchronizer.VisibilityUpdateMode): void
        get_visibility_update_mode(): MultiplayerSynchronizer.VisibilityUpdateMode
        
        /** Updates the visibility of [param for_peer] according to visibility filters. If [param for_peer] is `0` (the default), all peers' visibilties are updated. */
        update_visibility(for_peer: number /*i64*/ = 0): void
        set_visibility_public(visible: boolean): void
        is_visibility_public(): boolean
        
        /** Adds a peer visibility filter for this synchronizer.  
         *  [param filter] should take a peer ID [int] and return a [bool].  
         */
        add_visibility_filter(filter: Callable): void
        
        /** Removes a peer visibility filter from this synchronizer. */
        remove_visibility_filter(filter: Callable): void
        
        /** Sets the visibility of [param peer] to [param visible]. If [param peer] is `0`, the value of [member public_visibility] will be updated instead. */
        set_visibility_for(peer: number /*i64*/, visible: boolean): void
        
        /** Queries the current visibility for peer [param peer]. */
        get_visibility_for(peer: number /*i64*/): boolean
        
        /** Node path that replicated properties are relative to.  
         *  If [member root_path] was spawned by a [MultiplayerSpawner], the node will be also be spawned and despawned based on this synchronizer visibility options.  
         */
        root_path: NodePath
        
        /** Time interval between synchronizations. When set to `0.0` (the default), synchronizations happen every network process frame. */
        replication_interval: number /*f64*/
        
        /** Time interval between delta synchronizations. When set to `0.0` (the default), delta synchronizations happen every network process frame. */
        delta_interval: number /*f64*/
        
        /** Resource containing which properties to synchronize. */
        replication_config: SceneReplicationConfig
        
        /** Specifies when visibility filters are updated (see [enum VisibilityUpdateMode] for options). */
        visibility_update_mode: number /*i64*/
        
        /** Whether synchronization should be visible to all peers by default. See [method set_visibility_for] and [method add_visibility_filter] for ways of configuring fine-grained visibility options. */
        public_visibility: boolean
        
        /** Emitted when a new synchronization state is received by this synchronizer after the properties have been updated. */
        readonly synchronized: Signal //  => void
        
        /** Emitted when a new delta synchronization state is received by this synchronizer after the properties have been updated. */
        readonly delta_synchronized: Signal //  => void
        
        /** Emitted when visibility of [param for_peer] is updated. See [method update_visibility]. */
        readonly visibility_changed: Signal // for_peer: number /*i64*/ => void
    }
    /** A binary [Semaphore] for synchronization of multiple [Thread]s. */
    class Mutex extends RefCounted {
        /** Locks this [Mutex], blocks until it is unlocked by the current owner.  
         *      
         *  **Note:** This function returns without blocking if the thread already has ownership of the mutex.  
         */
        lock(): void
        
        /** Tries locking this [Mutex], but does not block. Returns `true` on success, `false` otherwise.  
         *      
         *  **Note:** This function returns `true` if the thread already has ownership of the mutex.  
         */
        try_lock(): boolean
        
        /** Unlocks this [Mutex], leaving it to other threads.  
         *      
         *  **Note:** If a thread called [method lock] or [method try_lock] multiple times while already having ownership of the mutex, it must also call [method unlock] the same number of times in order to unlock it correctly.  
         *  **Warning:** Calling [method unlock] more times that [method lock] on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.  
         */
        unlock(): void
    }
    /** A 2D agent used to pathfind to a position while avoiding obstacles. */
    class NavigationAgent2D extends Node {
        /** Returns the [RID] of this agent on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        get_navigation_map(): RID
        set_target_position(position: Vector2): void
        get_target_position(): Vector2
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        get_next_path_position(): Vector2
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        set_velocity_forced(velocity: Vector2): void
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distance_to_target(): number /*f64*/
        
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult2D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector2Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
        get_current_navigation_path_index(): number /*i64*/
        
        /** Returns true if [member target_position] is reached. It may not always be possible to reach the target position. It should always be possible to reach the final position though. See [method get_final_position]. */
        is_target_reached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        is_target_reachable(): boolean
        
        /** Returns `true` if the end of the currently loaded navigation path has been reached.  
         *      
         *  **Note:** While true prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        is_navigation_finished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        get_final_position(): Vector2
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        set_debug_path_custom_line_width(line_width: number /*f64*/): void
        get_debug_path_custom_line_width(): number /*f64*/
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        target_position: Vector2
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        path_desired_distance: number /*f64*/
        
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        target_desired_distance: number /*f64*/
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        path_max_distance: number /*f64*/
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        navigation_layers: number /*i64*/
        
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        
        /** Additional information to return with the navigation path. */
        path_metadata_flags: number /*i64*/
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a `safe_velocity` Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        avoidance_enabled: boolean
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        velocity: Vector2
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        radius: number /*f64*/
        
        /** The distance to search for other agents. */
        neighbor_distance: number /*f64*/
        
        /** The maximum number of neighbors for the agent to consider. */
        max_neighbors: number /*i64*/
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_agents: number /*f64*/
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_obstacles: number /*f64*/
        
        /** The maximum speed that an agent can move. */
        max_speed: number /*f64*/
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        avoidance_layers: number /*i64*/
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        avoidance_mask: number /*i64*/
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        avoidance_priority: number /*f64*/
        
        /** If `true` shows debug visuals for this agent. */
        debug_enabled: boolean
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        debug_use_custom: boolean
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        debug_path_custom_color: Color
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        debug_path_custom_point_size: number /*f64*/
        
        /** If [member debug_use_custom] is `true` uses this line width for rendering paths for this agent instead of global line width. */
        debug_path_custom_line_width: number /*f64*/
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly path_changed: Signal //  => void
        
        /** Emitted once per loaded path when the agent's global position is the first time within [member target_desired_distance] to the [member target_position]. */
        readonly target_reached: Signal //  => void
        
        /** Notifies when a waypoint along the path has been reached.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypoint_reached: Signal // details: Dictionary => void
        
        /** Notifies when a navigation link has been reached.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult2D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink2D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly link_reached: Signal // details: Dictionary => void
        
        /** Emitted once per loaded path when the agent internal navigation path index reaches the last index of the loaded path array. The agent internal navigation path index can be received with [method get_current_navigation_path_index]. */
        readonly navigation_finished: Signal //  => void
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted when [member velocity] is set. Only emitted when [member avoidance_enabled] is true. */
        readonly velocity_computed: Signal // safe_velocity: Vector2 => void
    }
    /** A 3D agent used to pathfind to a position while avoiding obstacles. */
    class NavigationAgent3D extends Node {
        /** Returns the [RID] of this agent on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_path_height_offset(path_height_offset: number /*f64*/): void
        get_path_height_offset(): number /*f64*/
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        set_keep_y_velocity(enabled: boolean): void
        get_keep_y_velocity(): boolean
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        get_navigation_map(): RID
        set_target_position(position: Vector3): void
        get_target_position(): Vector3
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        get_next_path_position(): Vector3
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        set_velocity_forced(velocity: Vector3): void
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distance_to_target(): number /*f64*/
        
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult3D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector3Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector3Array]. */
        get_current_navigation_path_index(): number /*i64*/
        
        /** Returns true if [member target_position] is reached. It may not always be possible to reach the target position. It should always be possible to reach the final position though. See [method get_final_position]. */
        is_target_reached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        is_target_reachable(): boolean
        
        /** Returns `true` if the end of the currently loaded navigation path has been reached.  
         *      
         *  **Note:** While true prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        is_navigation_finished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        get_final_position(): Vector3
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        target_position: Vector3
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        path_desired_distance: number /*f64*/
        
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        target_desired_distance: number /*f64*/
        
        /** The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents. */
        path_height_offset: number /*f64*/
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        path_max_distance: number /*f64*/
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        navigation_layers: number /*i64*/
        
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        
        /** Additional information to return with the navigation path. */
        path_metadata_flags: number /*i64*/
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer3D]. When [member velocity] is set and the processing is completed a `safe_velocity` Vector3 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        avoidance_enabled: boolean
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        velocity: Vector3
        
        /** The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone. */
        height: number /*f64*/
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        radius: number /*f64*/
        
        /** The distance to search for other agents. */
        neighbor_distance: number /*f64*/
        
        /** The maximum number of neighbors for the agent to consider. */
        max_neighbors: number /*i64*/
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_agents: number /*f64*/
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_obstacles: number /*f64*/
        
        /** The maximum speed that an agent can move. */
        max_speed: number /*f64*/
        
        /** If `true`, the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.  
         *  If `false`, the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [member height] are ignored.  
         */
        use_3d_avoidance: boolean
        
        /** If `true`, and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help mitigate the most obvious clipping on uneven 3D geometry. */
        keep_y_velocity: boolean
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        avoidance_layers: number /*i64*/
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        avoidance_mask: number /*i64*/
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        avoidance_priority: number /*f64*/
        
        /** If `true` shows debug visuals for this agent. */
        debug_enabled: boolean
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        debug_use_custom: boolean
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        debug_path_custom_color: Color
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        debug_path_custom_point_size: number /*f64*/
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly path_changed: Signal //  => void
        
        /** Emitted once per loaded path when the agent's global position is the first time within [member target_desired_distance] to the [member target_position]. */
        readonly target_reached: Signal //  => void
        
        /** Notifies when a waypoint along the path has been reached.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypoint_reached: Signal // details: Dictionary => void
        
        /** Notifies when a navigation link has been reached.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult3D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink3D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly link_reached: Signal // details: Dictionary => void
        
        /** Emitted once per loaded path when the agent internal navigation path index reaches the last index of the loaded path array. The agent internal navigation path index can be received with [method get_current_navigation_path_index]. */
        readonly navigation_finished: Signal //  => void
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted when [member velocity] is set. Only emitted when [member avoidance_enabled] is true. */
        readonly velocity_computed: Signal // safe_velocity: Vector3 => void
    }
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through. */
    class NavigationLink2D extends Node2D {
        /** Returns the [RID] of this link on the [NavigationServer2D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector2): void
        get_start_position(): Vector2
        set_end_position(position: Vector2): void
        get_end_position(): Vector2
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        set_global_start_position(position: Vector2): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        get_global_start_position(): Vector2
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        set_global_end_position(position: Vector2): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        get_global_end_position(): Vector2
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        
        /** Whether this link is currently active. If `false`, [method NavigationServer2D.map_get_path] will ignore this link. */
        enabled: boolean
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        bidirectional: boolean
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer2D.map_get_path]. */
        navigation_layers: number /*i64*/
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        start_position: Vector2
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        end_position: Vector2
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
    }
    class NavigationLink2DEditor extends Control {
    }
    class NavigationLink2DEditorPlugin extends EditorPlugin {
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through. */
    class NavigationLink3D extends Node3D {
        /** Returns the [RID] of this link on the [NavigationServer3D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector3): void
        get_start_position(): Vector3
        set_end_position(position: Vector3): void
        get_end_position(): Vector3
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        set_global_start_position(position: Vector3): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        get_global_start_position(): Vector3
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        set_global_end_position(position: Vector3): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        get_global_end_position(): Vector3
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        
        /** Whether this link is currently active. If `false`, [method NavigationServer3D.map_get_path] will ignore this link. */
        enabled: boolean
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        bidirectional: boolean
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
        navigation_layers: number /*i64*/
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        start_position: Vector3
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        end_position: Vector3
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
    }
    class NavigationLink3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            /** Watershed partitioning. Generally the best choice if you precompute the navigation mesh, use this if you have large open areas. */
            SAMPLE_PARTITION_WATERSHED = 0,
            
            /** Monotone partitioning. Use this if you want fast navigation mesh generation. */
            SAMPLE_PARTITION_MONOTONE = 1,
            
            /** Layer partitioning. Good choice to use for tiled navigation mesh with medium and small sized tiles. */
            SAMPLE_PARTITION_LAYERS = 2,
            
            /** Represents the size of the [enum SamplePartitionType] enum. */
            SAMPLE_PARTITION_MAX = 3,
        }
        enum ParsedGeometryType {
            /** Parses mesh instances as geometry. This includes [MeshInstance3D], [CSGShape3D], and [GridMap] nodes. */
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            
            /** Parses [StaticBody3D] colliders as geometry. The collider should be in any of the layers specified by [member geometry_collision_mask]. */
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            
            /** Both [constant PARSED_GEOMETRY_MESH_INSTANCES] and [constant PARSED_GEOMETRY_STATIC_COLLIDERS]. */
            PARSED_GEOMETRY_BOTH = 2,
            
            /** Represents the size of the [enum ParsedGeometryType] enum. */
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            /** Scans the child nodes of the root node recursively for geometry. */
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            
            /** Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member geometry_source_group_name]. */
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            
            /** Uses nodes in a group for geometry. The group is specified by [member geometry_source_group_name]. */
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            
            /** Represents the size of the [enum SourceGeometryMode] enum. */
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    /** A navigation mesh that defines traversable areas and obstacles. */
    class NavigationMesh extends Resource {
        set_sample_partition_type(sample_partition_type: NavigationMesh.SamplePartitionType): void
        get_sample_partition_type(): NavigationMesh.SamplePartitionType
        set_parsed_geometry_type(geometry_type: NavigationMesh.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationMesh.ParsedGeometryType
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(mask: NavigationMesh.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationMesh.SourceGeometryMode
        set_source_group_name(mask: StringName): void
        get_source_group_name(): StringName
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_cell_height(cell_height: number /*f64*/): void
        get_cell_height(): number /*f64*/
        set_agent_height(agent_height: number /*f64*/): void
        get_agent_height(): number /*f64*/
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        set_agent_max_climb(agent_max_climb: number /*f64*/): void
        get_agent_max_climb(): number /*f64*/
        set_agent_max_slope(agent_max_slope: number /*f64*/): void
        get_agent_max_slope(): number /*f64*/
        set_region_min_size(region_min_size: number /*f64*/): void
        get_region_min_size(): number /*f64*/
        set_region_merge_size(region_merge_size: number /*f64*/): void
        get_region_merge_size(): number /*f64*/
        set_edge_max_length(edge_max_length: number /*f64*/): void
        get_edge_max_length(): number /*f64*/
        set_edge_max_error(edge_max_error: number /*f64*/): void
        get_edge_max_error(): number /*f64*/
        set_vertices_per_polygon(vertices_per_polygon: number /*f64*/): void
        get_vertices_per_polygon(): number /*f64*/
        set_detail_sample_distance(detail_sample_dist: number /*f64*/): void
        get_detail_sample_distance(): number /*f64*/
        set_detail_sample_max_error(detail_sample_max_error: number /*f64*/): void
        get_detail_sample_max_error(): number /*f64*/
        set_filter_low_hanging_obstacles(filter_low_hanging_obstacles: boolean): void
        get_filter_low_hanging_obstacles(): boolean
        set_filter_ledge_spans(filter_ledge_spans: boolean): void
        get_filter_ledge_spans(): boolean
        set_filter_walkable_low_height_spans(filter_walkable_low_height_spans: boolean): void
        get_filter_walkable_low_height_spans(): boolean
        set_filter_baking_aabb(baking_aabb: AABB): void
        get_filter_baking_aabb(): AABB
        set_filter_baking_aabb_offset(baking_aabb_offset: Vector3): void
        get_filter_baking_aabb_offset(): Vector3
        
        /** Sets the vertices that can be then indexed to create polygons with the [method add_polygon] method. */
        set_vertices(vertices: PackedVector3Array): void
        
        /** Returns a [PackedVector3Array] containing all the vertices being used to create the polygons. */
        get_vertices(): PackedVector3Array
        
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        add_polygon(polygon: PackedInt32Array): void
        
        /** Returns the number of polygons in the navigation mesh. */
        get_polygon_count(): number /*i64*/
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        get_polygon(idx: number /*i64*/): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of vertices. */
        clear_polygons(): void
        
        /** Initializes the navigation mesh by setting the vertices and indices according to a [Mesh].  
         *      
         *  **Note:** The given [param mesh] must be of type [constant Mesh.PRIMITIVE_TRIANGLES] and have an index array.  
         */
        create_from_mesh(mesh: Mesh): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        vertices: PackedVector3Array
        polygons: Array
        
        /** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
        sample_partition_type: number /*i64*/
        
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        geometry_parsed_geometry_type: number /*i64*/
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        geometry_collision_mask: number /*i64*/
        
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        geometry_source_geometry_mode: number /*i64*/
        
        /** The name of the group to scan for geometry.  
         *  Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        geometry_source_group_name: string
        
        /** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
        cell_size: number /*f64*/
        
        /** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
        cell_height: number /*f64*/
        
        /** The minimum floor to ceiling height that will still allow the floor area to be considered walkable.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_height].  
         */
        agent_height: number /*f64*/
        
        /** The distance to erode/shrink the walkable area of the heightfield away from obstructions.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        agent_radius: number /*f64*/
        
        /** The minimum ledge height that is considered to still be traversable.  
         *      
         *  **Note:** While baking, this value will be rounded down to the nearest multiple of [member cell_height].  
         */
        agent_max_climb: number /*f64*/
        
        /** The maximum slope that is considered walkable, in degrees. */
        agent_max_slope: number /*f64*/
        
        /** The minimum size of a region for it to be created.  
         *      
         *  **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.  
         */
        region_min_size: number /*f64*/
        
        /** Any regions with a size smaller than this will be merged with larger regions if possible.  
         *      
         *  **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.  
         */
        region_merge_size: number /*f64*/
        
        /** The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        edge_max_length: number /*f64*/
        
        /** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
        edge_max_error: number /*f64*/
        
        /** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
        vertices_per_polygon: number /*f64*/
        
        /** The sampling distance to use when generating the detail mesh, in cell unit. */
        detail_sample_distance: number /*f64*/
        
        /** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
        detail_sample_max_error: number /*f64*/
        
        /** If `true`, marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
        filter_low_hanging_obstacles: boolean
        
        /** If `true`, marks spans that are ledges as non-walkable. */
        filter_ledge_spans: boolean
        
        /** If `true`, marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
        filter_walkable_low_height_spans: boolean
        
        /** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
        filter_baking_aabb: AABB
        
        /** The position offset applied to the [member filter_baking_aabb] [AABB]. */
        filter_baking_aabb_offset: Vector3
    }
    class NavigationMeshEditor extends Control {
    }
    class NavigationMeshEditorPlugin extends EditorPlugin {
    }
    /** Container for parsed source geometry data used in navigation mesh baking. */
    class NavigationMeshSourceGeometryData2D extends Resource {
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        has_data(): boolean
        
        /** Sets all the traversable area outlines arrays. */
        set_traversable_outlines(traversable_outlines: Array): void
        
        /** Returns all the traversable area outlines arrays. */
        get_traversable_outlines(): Array
        
        /** Sets all the obstructed area outlines arrays. */
        set_obstruction_outlines(obstruction_outlines: Array): void
        
        /** Returns all the obstructed area outlines arrays. */
        get_obstruction_outlines(): Array
        
        /** Adds the outline points of a shape as traversable area. */
        add_traversable_outline(shape_outline: PackedVector2Array): void
        
        /** Adds the outline points of a shape as obstructed area. */
        add_obstruction_outline(shape_outline: PackedVector2Array): void
        traversable_outlines: Array
        obstruction_outlines: Array
    }
    /** Container for parsed source geometry data used in navigation mesh baking. */
    class NavigationMeshSourceGeometryData3D extends Resource {
        /** Sets the parsed source geometry data vertices. The vertices need to be matched with appropriated indices.  
         *  **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.  
         */
        set_vertices(vertices: PackedFloat32Array): void
        
        /** Returns the parsed source geometry data vertices array. */
        get_vertices(): PackedFloat32Array
        
        /** Sets the parsed source geometry data indices. The indices need to be matched with appropriated vertices.  
         *  **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.  
         */
        set_indices(indices: PackedInt32Array): void
        
        /** Returns the parsed source geometry data indices array. */
        get_indices(): PackedInt32Array
        
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        has_data(): boolean
        
        /** Adds the geometry data of a [Mesh] resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_mesh(mesh: Mesh, xform: Transform3D): void
        
        /** Adds an [Array] the size of [constant Mesh.ARRAY_MAX] and with vertices at index [constant Mesh.ARRAY_VERTEX] and indices at index [constant Mesh.ARRAY_INDEX] to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_mesh_array(mesh_array: Array, xform: Transform3D): void
        
        /** Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_faces(faces: PackedVector3Array, xform: Transform3D): void
        vertices: PackedVector3Array
        indices: PackedInt32Array
    }
    /** 2D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. */
    class NavigationObstacle2D extends Node2D {
        /** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        
        /** If `true` the obstacle affects avoidance using agents. */
        avoidance_enabled: boolean
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        velocity: Vector2
        
        /** Sets the avoidance radius for the obstacle. */
        radius: number /*f64*/
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        vertices: PackedVector2Array
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        avoidance_layers: number /*i64*/
    }
    class NavigationObstacle2DEditor extends AbstractPolygon2DEditor {
    }
    class NavigationObstacle2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    /** 3D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. */
    class NavigationObstacle3D extends Node3D {
        /** Returns the [RID] of this obstacle on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        
        /** If `true` the obstacle affects avoidance using agents. */
        avoidance_enabled: boolean
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        velocity: Vector3
        
        /** Sets the avoidance radius for the obstacle. */
        radius: number /*f64*/
        
        /** Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them. */
        height: number /*f64*/
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        vertices: PackedVector3Array
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        avoidance_layers: number /*i64*/
        
        /** If `true` the obstacle affects 3D avoidance using agent's with obstacle [member radius].  
         *  If `false` the obstacle affects 2D avoidance using agent's with both obstacle [member vertices] as well as obstacle [member radius].  
         */
        use_3d_avoidance: boolean
    }
    class NavigationObstacle3DEditor extends HBoxContainer {
        _polygon_draw(): void
    }
    class NavigationObstacle3DEditorPlugin extends EditorPlugin {
    }
    namespace NavigationPathQueryParameters2D {
        enum PathfindingAlgorithm {
            /** The path query uses the default A* pathfinding algorithm. */
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            /** Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes. */
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            
            /** Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center. */
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            /** Don't include any additional metadata about the returned path. */
            PATH_METADATA_INCLUDE_NONE = 0,
            
            /** Include the type of navigation primitive (region or link) that each point of the path goes through. */
            PATH_METADATA_INCLUDE_TYPES = 1,
            
            /** Include the [RID]s of the regions and links that each point of the path goes through. */
            PATH_METADATA_INCLUDE_RIDS = 2,
            
            /** Include the `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
            PATH_METADATA_INCLUDE_OWNERS = 4,
            
            /** Include all available metadata about the returned path. */
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    /** Provides parameters for 2D navigation path queries. */
    class NavigationPathQueryParameters2D extends RefCounted {
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_map(map: RID): void
        get_map(): RID
        set_start_position(start_position: Vector2): void
        get_start_position(): Vector2
        set_target_position(target_position: Vector2): void
        get_target_position(): Vector2
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        
        /** The navigation map [RID] used in the path query. */
        map: RID
        
        /** The pathfinding start position in global coordinates. */
        start_position: Vector2
        
        /** The pathfinding target position in global coordinates. */
        target_position: Vector2
        
        /** The navigation layers the query will use (as a bitmask). */
        navigation_layers: number /*i64*/
        
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        
        /** Additional information to include with the navigation path. */
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryParameters3D {
        enum PathfindingAlgorithm {
            /** The path query uses the default A* pathfinding algorithm. */
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            /** Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes. */
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            
            /** Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center. */
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            /** Don't include any additional metadata about the returned path. */
            PATH_METADATA_INCLUDE_NONE = 0,
            
            /** Include the type of navigation primitive (region or link) that each point of the path goes through. */
            PATH_METADATA_INCLUDE_TYPES = 1,
            
            /** Include the [RID]s of the regions and links that each point of the path goes through. */
            PATH_METADATA_INCLUDE_RIDS = 2,
            
            /** Include the `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
            PATH_METADATA_INCLUDE_OWNERS = 4,
            
            /** Include all available metadata about the returned path. */
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    /** Provides parameters for 3D navigation path queries. */
    class NavigationPathQueryParameters3D extends RefCounted {
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_map(map: RID): void
        get_map(): RID
        set_start_position(start_position: Vector3): void
        get_start_position(): Vector3
        set_target_position(target_position: Vector3): void
        get_target_position(): Vector3
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        
        /** The navigation map [RID] used in the path query. */
        map: RID
        
        /** The pathfinding start position in global coordinates. */
        start_position: Vector3
        
        /** The pathfinding target position in global coordinates. */
        target_position: Vector3
        
        /** The navigation layers the query will use (as a bitmask). */
        navigation_layers: number /*i64*/
        
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        
        /** Additional information to include with the navigation path. */
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            /** This segment of the path goes through a region. */
            PATH_SEGMENT_TYPE_REGION = 0,
            
            /** This segment of the path goes through a link. */
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 2D pathfinding query. */
    class NavigationPathQueryResult2D extends RefCounted {
        set_path(path: PackedVector2Array): void
        get_path(): PackedVector2Array
        set_path_types(path_types: PackedInt32Array): void
        get_path_types(): PackedInt32Array
        set_path_rids(path_rids: Array): void
        get_path_rids(): Array
        set_path_owner_ids(path_owner_ids: PackedInt64Array): void
        get_path_owner_ids(): PackedInt64Array
        
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer2D.map_get_path]. */
        path: PackedVector2Array
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        path_types: PackedInt32Array
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        path_rids: Array
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            /** This segment of the path goes through a region. */
            PATH_SEGMENT_TYPE_REGION = 0,
            
            /** This segment of the path goes through a link. */
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 3D pathfinding query. */
    class NavigationPathQueryResult3D extends RefCounted {
        set_path(path: PackedVector3Array): void
        get_path(): PackedVector3Array
        set_path_types(path_types: PackedInt32Array): void
        get_path_types(): PackedInt32Array
        set_path_rids(path_rids: Array): void
        get_path_rids(): Array
        set_path_owner_ids(path_owner_ids: PackedInt64Array): void
        get_path_owner_ids(): PackedInt64Array
        
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer3D.map_get_path]. */
        path: PackedVector3Array
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        path_types: PackedInt32Array
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        path_rids: Array
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPolygon {
        enum ParsedGeometryType {
            /** Parses mesh instances as obstruction geometry. This includes [Polygon2D], [MeshInstance2D], [MultiMeshInstance2D], and [TileMap] nodes.  
             *  Meshes are only parsed when they use a 2D vertices surface format.  
             */
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            
            /** Parses [StaticBody2D] and [TileMap] colliders as obstruction geometry. The collider should be in any of the layers specified by [member parsed_collision_mask]. */
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            
            /** Both [constant PARSED_GEOMETRY_MESH_INSTANCES] and [constant PARSED_GEOMETRY_STATIC_COLLIDERS]. */
            PARSED_GEOMETRY_BOTH = 2,
            
            /** Represents the size of the [enum ParsedGeometryType] enum. */
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            /** Scans the child nodes of the root node recursively for geometry. */
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            
            /** Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member source_geometry_group_name]. */
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            
            /** Uses nodes in a group for geometry. The group is specified by [member source_geometry_group_name]. */
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            
            /** Represents the size of the [enum SourceGeometryMode] enum. */
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    /** A 2D navigation mesh that describes a traversable surface for pathfinding. */
    class NavigationPolygon extends Resource {
        /** Sets the vertices that can be then indexed to create polygons with the [method add_polygon] method. */
        set_vertices(vertices: PackedVector2Array): void
        
        /** Returns a [PackedVector2Array] containing all the vertices being used to create the polygons. */
        get_vertices(): PackedVector2Array
        
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        add_polygon(polygon: PackedInt32Array): void
        
        /** Returns the count of all polygons. */
        get_polygon_count(): number /*i64*/
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        get_polygon(idx: number /*i64*/): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of outlines and vertices. */
        clear_polygons(): void
        
        /** Returns the [NavigationMesh] resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [method NavigationServer3D.region_set_navigation_mesh] API directly (as 2D uses the 3D server behind the scene). */
        get_navigation_mesh(): NavigationMesh
        
        /** Appends a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines. */
        add_outline(outline: PackedVector2Array): void
        
        /** Adds a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position. */
        add_outline_at_index(outline: PackedVector2Array, index: number /*i64*/): void
        
        /** Returns the number of outlines that were created in the editor or by script. */
        get_outline_count(): number /*i64*/
        
        /** Changes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        set_outline(idx: number /*i64*/, outline: PackedVector2Array): void
        
        /** Returns a [PackedVector2Array] containing the vertices of an outline that was created in the editor or by script. */
        get_outline(idx: number /*i64*/): PackedVector2Array
        
        /** Removes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        remove_outline(idx: number /*i64*/): void
        
        /** Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them. */
        clear_outlines(): void
        
        /** Creates polygons from the outlines added in the editor or by script.  
         *  [i]Deprecated.[/i] This function is deprecated, and might be removed in a future release. Use [method NavigationServer2D.parse_source_geometry_data] and [method NavigationServer2D.bake_from_source_geometry_data] instead.  
         */
        make_polygons_from_outlines(): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        _set_outlines(outlines: Array): void
        _get_outlines(): Array
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_parsed_geometry_type(geometry_type: NavigationPolygon.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationPolygon.ParsedGeometryType
        set_parsed_collision_mask(mask: number /*i64*/): void
        get_parsed_collision_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member parsed_collision_mask], given a [param layer_number] between 1 and 32. */
        set_parsed_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member parsed_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_parsed_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(geometry_mode: NavigationPolygon.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationPolygon.SourceGeometryMode
        set_source_geometry_group_name(group_name: StringName): void
        get_source_geometry_group_name(): StringName
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        vertices: PackedVector2Array
        polygons: Array
        outlines: Array
        
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        parsed_geometry_type: number /*i64*/
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        parsed_collision_mask: number /*i64*/
        
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        source_geometry_mode: number /*i64*/
        
        /** The group name of nodes that should be parsed for baking source geometry.  
         *  Only used when [member source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        source_geometry_group_name: string
        
        /** The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map. */
        cell_size: number /*f64*/
        
        /** The distance to erode/shrink the walkable surface when baking the navigation mesh. */
        agent_radius: number /*f64*/
    }
    class NavigationPolygonEditor extends AbstractPolygon2DEditor {
    }
    class NavigationPolygonEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    /** A traversable 2D region that [NavigationAgent2D]s can use for pathfinding. */
    class NavigationRegion2D extends Node2D {
        /** Returns the [RID] of this region on the [NavigationServer2D]. Combined with [method NavigationServer2D.map_get_closest_point_owner] can be used to identify the [NavigationRegion2D] closest to a point on the merged navigation map. */
        get_rid(): RID
        set_navigation_polygon(navigation_polygon: NavigationPolygon): void
        get_navigation_polygon(): NavigationPolygon
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the current navigation map [RID] used by this region. */
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_constrain_avoidance(enabled: boolean): void
        get_constrain_avoidance(): boolean
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer2D].  
         *  [i]Deprecated.[/i] Use [method get_rid] instead.  
         */
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        
        /** Bakes the [NavigationPolygon]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. */
        bake_navigation_polygon(on_thread: boolean = true): void
        _navigation_polygon_changed(): void
        
        /** The [NavigationPolygon] resource to use. */
        navigation_polygon: NavigationPolygon
        
        /** Determines if the [NavigationRegion2D] is enabled or disabled. */
        enabled: boolean
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        use_edge_connections: boolean
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer2D.map_get_path]. */
        navigation_layers: number /*i64*/
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
        
        /** If `true` constraints avoidance agent's with an avoidance mask bit that matches with a bit of the [member avoidance_layers] to the navigation polygon. Due to each navigation polygon outline creating an obstacle and each polygon edge creating an avoidance line constrain keep the navigation polygon shape as simple as possible for performance.  
         *  **Experimental:** This is an experimental feature and should not be used in production as agent's can get stuck on the navigation polygon corners and edges especially at high frame rate.  
         */
        constrain_avoidance: boolean
        
        /** A bitfield determining all avoidance layers for the avoidance constrain. */
        avoidance_layers: number /*i64*/
        
        /** Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed. */
        readonly navigation_polygon_changed: Signal //  => void
        
        /** Emitted when a navigation polygon bake operation is completed. */
        readonly bake_finished: Signal //  => void
    }
    /** A traversable 3D region that [NavigationAgent3D]s can use for pathfinding. */
    class NavigationRegion3D extends Node3D {
        /** Returns the [RID] of this region on the [NavigationServer3D]. Combined with [method NavigationServer3D.map_get_closest_point_owner] can be used to identify the [NavigationRegion3D] closest to a point on the merged navigation map. */
        get_rid(): RID
        set_navigation_mesh(navigation_mesh: NavigationMesh): void
        get_navigation_mesh(): NavigationMesh
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the current navigation map [RID] used by this region. */
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer3D].  
         *  [i]Deprecated.[/i] Use [method get_rid] instead.  
         */
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        
        /** Bakes the [NavigationMesh]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new [NavigationMesh]. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled). */
        bake_navigation_mesh(on_thread: boolean = true): void
        _bake_finished(navigation_mesh: NavigationMesh): void
        
        /** The [NavigationMesh] resource to use. */
        navigation_mesh: NavigationMesh
        
        /** Determines if the [NavigationRegion3D] is enabled or disabled. */
        enabled: boolean
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        use_edge_connections: boolean
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. */
        navigation_layers: number /*i64*/
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
        
        /** Notifies when the [NavigationMesh] has changed. */
        readonly navigation_mesh_changed: Signal //  => void
        
        /** Notifies when the navigation mesh bake operation is completed. */
        readonly bake_finished: Signal //  => void
    }
    class NavigationRegion3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NinePatchRect {
        enum AxisStretchMode {
            /** Stretches the center texture across the NinePatchRect. This may cause the texture to be distorted. */
            AXIS_STRETCH_MODE_STRETCH = 0,
            
            /** Repeats the center texture across the NinePatchRect. This won't cause any visible distortion. The texture must be seamless for this to work without displaying artifacts between edges. */
            AXIS_STRETCH_MODE_TILE = 1,
            
            /** Repeats the center texture across the NinePatchRect, but will also stretch the texture to make sure each tile is visible in full. This may cause the texture to be distorted, but less than [constant AXIS_STRETCH_MODE_STRETCH]. The texture must be seamless for this to work without displaying artifacts between edges. */
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    /** A control that displays a texture by keeping its corners intact, but tiling its edges and center. */
    class NinePatchRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** Sets the size of the margin on the specified [enum Side] to [param value] pixels. */
        set_patch_margin(margin: Side, value: number /*i64*/): void
        
        /** Returns the size of the margin on the specified [enum Side]. */
        get_patch_margin(margin: Side): number /*i64*/
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_h_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_h_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        set_v_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_v_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        
        /** The node's texture resource. */
        texture: Texture2D
        
        /** If `true`, draw the panel's center. Else, only draw the 9-slice's borders. */
        draw_center: boolean
        
        /** Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture. */
        region_rect: Rect2
        
        /** The stretch mode to use for horizontal stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        axis_stretch_horizontal: number /*i64*/
        
        /** The stretch mode to use for vertical stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        axis_stretch_vertical: number /*i64*/
        
        /** Emitted when the node's texture changes. */
        readonly texture_changed: Signal //  => void
    }
    namespace Node {
        enum ProcessMode {
            /** Inherits [member process_mode] from the node's parent. For the root node, it is equivalent to [constant PROCESS_MODE_PAUSABLE]. This is the default for any newly created node. */
            PROCESS_MODE_INHERIT = 0,
            
            /** Stops processing when [member SceneTree.paused] is `true`. This is the inverse of [constant PROCESS_MODE_WHEN_PAUSED]. */
            PROCESS_MODE_PAUSABLE = 1,
            
            /** Process **only** when [member SceneTree.paused] is `true`. This is the inverse of [constant PROCESS_MODE_PAUSABLE]. */
            PROCESS_MODE_WHEN_PAUSED = 2,
            
            /** Always process. Keeps processing, ignoring [member SceneTree.paused]. This is the inverse of [constant PROCESS_MODE_DISABLED]. */
            PROCESS_MODE_ALWAYS = 3,
            
            /** Never process. Completely disables processing, ignoring [member SceneTree.paused]. This is the inverse of [constant PROCESS_MODE_ALWAYS]. */
            PROCESS_MODE_DISABLED = 4,
        }
        enum ProcessThreadGroup {
            /** Process this node based on the thread group mode of the first parent (or grandparent) node that has a thread group mode that is not inherit. See [member process_thread_group] for more information. */
            PROCESS_THREAD_GROUP_INHERIT = 0,
            
            /** Process this node (and child nodes set to inherit) on the main thread. See [member process_thread_group] for more information. */
            PROCESS_THREAD_GROUP_MAIN_THREAD = 1,
            
            /** Process this node (and child nodes set to inherit) on a sub-thread. See [member process_thread_group] for more information. */
            PROCESS_THREAD_GROUP_SUB_THREAD = 2,
        }
        enum ProcessThreadMessages {
            FLAG_PROCESS_THREAD_MESSAGES = 1,
            FLAG_PROCESS_THREAD_MESSAGES_PHYSICS = 2,
            FLAG_PROCESS_THREAD_MESSAGES_ALL = 3,
        }
        enum DuplicateFlags {
            /** Duplicate the node's signal connections. */
            DUPLICATE_SIGNALS = 1,
            
            /** Duplicate the node's groups. */
            DUPLICATE_GROUPS = 2,
            
            /** Duplicate the node's script (including the ancestor's script, if combined with [constant DUPLICATE_USE_INSTANTIATION]). */
            DUPLICATE_SCRIPTS = 4,
            
            /** Duplicate using [method PackedScene.instantiate]. If the node comes from a scene saved on disk, re-uses [method PackedScene.instantiate] as the base for the duplicated node and its children. */
            DUPLICATE_USE_INSTANTIATION = 8,
        }
        enum InternalMode {
            /** The node will not be internal. */
            INTERNAL_MODE_DISABLED = 0,
            
            /** The node will be placed at the beginning of the parent's children, before any non-internal sibling. */
            INTERNAL_MODE_FRONT = 1,
            
            /** The node will be placed at the end of the parent's children, after any non-internal sibling. */
            INTERNAL_MODE_BACK = 2,
        }
    }
    /** Base class for all scene objects. */
    class Node extends Object {
        /** Notification received when the node enters a [SceneTree]. See [method _enter_tree].  
         *  This notification is received [i]before[/i] the related [signal tree_entered] signal.  
         */
        static readonly NOTIFICATION_ENTER_TREE = 10
        
        /** Notification received when the node is about to exit a [SceneTree]. See [method _exit_tree].  
         *  This notification is received [i]after[/i] the related [signal tree_exiting] signal.  
         */
        static readonly NOTIFICATION_EXIT_TREE = 11
        
        /** [i]Deprecated.[/i] This notification is no longer emitted. Use [constant NOTIFICATION_CHILD_ORDER_CHANGED] instead. */
        static readonly NOTIFICATION_MOVED_IN_PARENT = 12
        
        /** Notification received when the node is ready. See [method _ready]. */
        static readonly NOTIFICATION_READY = 13
        
        /** Notification received when the node is paused. See [member process_mode]. */
        static readonly NOTIFICATION_PAUSED = 14
        
        /** Notification received when the node is unpaused. See [member process_mode]. */
        static readonly NOTIFICATION_UNPAUSED = 15
        
        /** Notification received from the tree every physics frame when [method is_physics_processing] returns `true`. See [method _physics_process]. */
        static readonly NOTIFICATION_PHYSICS_PROCESS = 16
        
        /** Notification received from the tree every rendered frame when [method is_processing] returns `true`. See [method _process]. */
        static readonly NOTIFICATION_PROCESS = 17
        
        /** Notification received when the node is set as a child of another node (see [method add_child] and [method add_sibling]).  
         *      
         *  **Note:** This does [i]not[/i] mean that the node entered the [SceneTree].  
         */
        static readonly NOTIFICATION_PARENTED = 18
        
        /** Notification received when the parent node calls [method remove_child] on this node.  
         *      
         *  **Note:** This does [i]not[/i] mean that the node exited the [SceneTree].  
         */
        static readonly NOTIFICATION_UNPARENTED = 19
        
        /** Notification received [i]only[/i] by the newly instantiated scene root node, when [method PackedScene.instantiate] is completed. */
        static readonly NOTIFICATION_SCENE_INSTANTIATED = 20
        
        /** Notification received when a drag operation begins. All nodes receive this notification, not only the dragged one.  
         *  Can be triggered either by dragging a [Control] that provides drag data (see [method Control._get_drag_data]) or using [method Control.force_drag].  
         *  Use [method Viewport.gui_get_drag_data] to get the dragged data.  
         */
        static readonly NOTIFICATION_DRAG_BEGIN = 21
        
        /** Notification received when a drag operation ends.  
         *  Use [method Viewport.gui_is_drag_successful] to check if the drag succeeded.  
         */
        static readonly NOTIFICATION_DRAG_END = 22
        
        /** Notification received when the node's [member name] or one of its ancestors' [member name] is changed. This notification is [i]not[/i] received when the node is removed from the [SceneTree]. */
        static readonly NOTIFICATION_PATH_RENAMED = 23
        
        /** Notification received when the list of children is changed. This happens when child nodes are added, moved or removed. */
        static readonly NOTIFICATION_CHILD_ORDER_CHANGED = 24
        
        /** Notification received from the tree every rendered frame when [method is_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PROCESS = 25
        
        /** Notification received from the tree every physics frame when [method is_physics_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26
        
        /** Notification received when the node enters the tree, just before [constant NOTIFICATION_READY] may be received. Unlike the latter, it is sent every time the node enters tree, not just once. */
        static readonly NOTIFICATION_POST_ENTER_TREE = 27
        
        /** Notification received when the node is disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_DISABLED = 28
        
        /** Notification received when the node is enabled again after being disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_ENABLED = 29
        
        /** Notification received right before the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_PRE_SAVE = 9001
        
        /** Notification received right after the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_POST_SAVE = 9002
        
        /** Notification received when the mouse enters the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_ENTER = 1002
        
        /** Notification received when the mouse leaves the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_EXIT = 1003
        
        /** Notification received from the OS when the node's [Window] ancestor is focused. This may be a change of focus between two windows of the same engine instance, or from the OS desktop or a third-party application to a window of the game (in which case [constant NOTIFICATION_APPLICATION_FOCUS_IN] is also received).  
         *  A [Window] node receives this notification when it is focused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004
        
        /** Notification received from the OS when the node's [Window] ancestor is defocused. This may be a change of focus between two windows of the same engine instance, or from a window of the game to the OS desktop or a third-party application (in which case [constant NOTIFICATION_APPLICATION_FOCUS_OUT] is also received).  
         *  A [Window] node receives this notification when it is defocused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005
        
        /** Notification received from the OS when a close request is sent (e.g. closing the window with a "Close" button or [kbd]Alt + F4[/kbd]).  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_WM_CLOSE_REQUEST = 1006
        
        /** Notification received from the OS when a go back request is sent (e.g. pressing the "Back" button on Android).  
         *  Implemented only on iOS.  
         */
        static readonly NOTIFICATION_WM_GO_BACK_REQUEST = 1007
        
        /** Notification received when the window is resized.  
         *      
         *  **Note:** Only the resized [Window] node receives this notification, and it's not propagated to the child nodes.  
         */
        static readonly NOTIFICATION_WM_SIZE_CHANGED = 1008
        
        /** Notification received from the OS when the screen's dots per inch (DPI) scale is changed. Only implemented on macOS. */
        static readonly NOTIFICATION_WM_DPI_CHANGE = 1009
        
        /** Notification received when the mouse cursor enters the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_ENTER = 1010
        
        /** Notification received when the mouse cursor leaves the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_EXIT = 1011
        
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Implemented only on iOS.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr]. */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Implemented only on macOS.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms, if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Implemented only on macOS.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Implemented only on Android.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Implemented only on Android.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a third-party application to any open window of the Godot instance.  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a third-party application.  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when the [TextServer] is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        
        /** Called during the processing step of the main loop. Processing happens at every frame and as fast as possible, so the [param delta] time since the previous frame is not constant. [param delta] is in seconds.  
         *  It is only called if processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process].  
         *  Corresponds to the [constant NOTIFICATION_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _process(delta: number /*f64*/): void
        
        /** Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics, i.e. the [param delta] variable should be constant. [param delta] is in seconds.  
         *  It is only called if physics processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_physics_process].  
         *  Corresponds to the [constant NOTIFICATION_PHYSICS_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _physics_process(delta: number /*f64*/): void
        
        /** Called when the node enters the [SceneTree] (e.g. upon instantiating, scene changing, or after calling [method add_child] in a script). If the node has children, its [method _enter_tree] callback will be called first, and then that of the children.  
         *  Corresponds to the [constant NOTIFICATION_ENTER_TREE] notification in [method Object._notification].  
         */
        /* gdvirtual */ _enter_tree(): void
        
        /** Called when the node is about to leave the [SceneTree] (e.g. upon freeing, scene changing, or after calling [method remove_child] in a script). If the node has children, its [method _exit_tree] callback will be called last, after all its children have left the tree.  
         *  Corresponds to the [constant NOTIFICATION_EXIT_TREE] notification in [method Object._notification] and signal [signal tree_exiting]. To get notified when the node has already left the active tree, connect to the [signal tree_exited].  
         */
        /* gdvirtual */ _exit_tree(): void
        
        /** Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [method _ready] callbacks get triggered first, and the parent node will receive the ready notification afterwards.  
         *  Corresponds to the [constant NOTIFICATION_READY] notification in [method Object._notification]. See also the `@onready` annotation for variables.  
         *  Usually used for initialization. For even earlier initialization, [method Object._init] may be used. See also [method _enter_tree].  
         *      
         *  **Note:** This method may be called only once for each node. After removing a node from the scene tree and adding it again, [method _ready] will **not** be called a second time. This can be bypassed by requesting another call with [method request_ready], which may be called anywhere before adding the node again.  
         */
        /* gdvirtual */ _ready(): void
        
        /** The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script.  
         *  Returning an empty array produces no warnings.  
         *  Call [method update_configuration_warnings] when the warnings need to be updated for this node.  
         *    
         */
        /* gdvirtual */ _get_configuration_warnings(): PackedStringArray
        
        /** Called when there is an input event. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, [method _unhandled_input] and [method _unhandled_key_input] are usually a better fit as they allow the GUI to intercept the events first.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _input(event: InputEvent): void
        
        /** Called when an [InputEventKey], [InputEventShortcut], or [InputEventJoypadButton] hasn't been consumed by [method _input] or any GUI [Control] item. It is called before [method _unhandled_key_input] and [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if shortcut processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_shortcut_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle shortcuts. For generic GUI events, use [method _input] instead. Gameplay events should usually be handled with either [method _unhandled_input] or [method _unhandled_key_input].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not orphan).  
         */
        /* gdvirtual */ _shortcut_input(event: InputEvent): void
        
        /** Called when an [InputEvent] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] and after [method _unhandled_key_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, this method is usually a better fit than [method _input], as GUI events need a higher priority. For keyboard shortcuts, consider using [method _shortcut_input] instead, as it is called before this method. Finally, to handle keyboard events, consider using [method _unhandled_key_input] for performance reasons.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandled_input(event: InputEvent): void
        
        /** Called when an [InputEventKey] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] but before [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled key input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_key_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle Unicode character input with [kbd]Alt[/kbd], [kbd]Alt + Ctrl[/kbd], and [kbd]Alt + Shift[/kbd] modifiers, after shortcuts were handled.  
         *  For gameplay input, this and [method _unhandled_input] are usually a better fit than [method _input], as GUI events should be handled first. This method also performs better than [method _unhandled_input], since unrelated events such as [InputEventMouseMotion] are automatically filtered. For shortcuts, consider using [method _shortcut_input] instead.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandled_key_input(event: InputEvent): void
        
        /** Prints all orphan nodes (nodes outside the [SceneTree]). Useful for debugging.  
         *      
         *  **Note:** This method only works in debug builds. Does nothing in a project exported in release mode.  
         */
        static print_orphan_nodes(): void
        
        /** Adds a [param sibling] node to this node's parent, and moves the added sibling right below this node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param sibling]. If not named, the [param sibling] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  Use [method add_child] instead of this method if you don't need the child node to be added below a specific node in the list of children.  
         *      
         *  **Note:** If this node is internal, the added sibling will be internal too (see [method add_child]'s `internal` parameter).  
         */
        add_sibling(sibling: Node, force_readable_name: boolean = false): void
        set_name(name: string): void
        get_name(): StringName
        
        /** Adds a child [param node]. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param node]. If not named, the [param node] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  If [param internal] is different than [constant INTERNAL_MODE_DISABLED], the child will be added as internal node. These nodes are ignored by methods like [method get_children], unless their parameter `include_internal` is `true`. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [ColorPicker]. See [enum InternalMode] for available modes.  
         *      
         *  **Note:** If [param node] already has a parent, this method will fail. Use [method remove_child] first to remove [param node] from its current parent. For example:  
         *    
         *  If you need the child node to be added below a specific node in the list of children, use [method add_sibling] instead of this method.  
         *      
         *  **Note:** If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=$DOCS_URL/tutorials/plugins/editor/index.html]editor plugins[/url]. If [method add_child] is called without setting [member owner], the newly added [Node] will not be visible in the scene tree, though it will be visible in the 2D/3D view.  
         */
        add_child(node: Node, force_readable_name: boolean = false, internal: Node.InternalMode = 0): void
        
        /** Removes a child [param node]. The [param node], along with its children, are **not** deleted. To delete a node, see [method queue_free].  
         *      
         *  **Note:** When this node is inside the tree, this method sets the [member owner] of the removed [param node] (or its descendants) to `null`, if their [member owner] is no longer an ancestor (see [method is_ancestor_of]).  
         */
        remove_child(node: Node): void
        
        /** Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent.  
         *  If [param keep_global_transform] is `true`, the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).  
         */
        reparent(new_parent: Node, keep_global_transform: boolean = true): void
        
        /** Returns the number of children of this node.  
         *  If [param include_internal] is `false`, internal children are not counted (see [method add_child]'s `internal` parameter).  
         */
        get_child_count(include_internal: boolean = false): number /*i64*/
        
        /** Returns all children of this node inside an [Array].  
         *  If [param include_internal] is `false`, excludes internal children from the returned array (see [method add_child]'s `internal` parameter).  
         */
        get_children(include_internal: boolean = false): Array
        
        /** Fetches a child node by its index. Each child node has an index relative its siblings (see [method get_index]). The first child is at index 0. Negative values can also be used to start from the end of the list. This method can be used in combination with [method get_child_count] to iterate over this node's children. If no child exists at the given index, this method returns `null` and an error is generated.  
         *  If [param include_internal] is `false`, internal children are ignored (see [method add_child]'s `internal` parameter).  
         *    
         *      
         *  **Note:** To fetch a node by [NodePath], use [method get_node].  
         */
        get_child(idx: number /*i64*/, include_internal: boolean = false): Node
        
        /** Returns `true` if the [param path] points to a valid node. See also [method get_node]. */
        has_node(path: NodePath): boolean
        
        /** Fetches a node. The [NodePath] can either be a relative path (from this node), or an absolute path (from the [member SceneTree.root]) to a node. If [param path] does not point to a valid node, generates an error and returns `null`. Attempts to access methods on the return value will result in an [i]"Attempt to call <method> on a null instance."[/i] error.  
         *      
         *  **Note:** Fetching by absolute path only works when the node is inside the scene tree (see [method is_inside_tree]).  
         *  **Example:** Assume this method is called from the Character node, inside the following tree:  
         *    
         *  The following calls will return a valid node:  
         *    
         */
        get_node(path: NodePath): Node
        
        /** Fetches a node by [NodePath]. Similar to [method get_node], but does not generate an error if [param path] does not point to a valid node. */
        get_node_or_null(path: NodePath): Node
        
        /** Returns this node's parent node, or `null` if the node doesn't have a parent. */
        get_parent(): Node
        
        /** Finds the first descendant of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done against node names, [i]not[/i] their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         *      
         *  **Note:** To find all descendant nodes matching a pattern or a class type, see [method find_children].  
         */
        find_child(pattern: string, recursive: boolean = true, owned: boolean = true): Node
        
        /** Finds all descendants of this node whose names match [param pattern], returning an empty [Array] if no match is found. The matching is done against node names, [i]not[/i] their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param type] is not empty, only ancestors inheriting from [param type] are included (see [method Object.is_class]).  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing references to the found nodes in a variable.  
         *      
         *  **Note:** To find a single descendant node matching a pattern, see [method find_child].  
         */
        find_children(pattern: string, type: string = '', recursive: boolean = true, owned: boolean = true): Array
        
        /** Finds the first ancestor of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character. See also [method find_child] and [method find_children].  
         *      
         *  **Note:** As this method walks upwards in the scene tree, it can be slow in large, deeply nested nodes. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         */
        find_parent(pattern: string): Node
        
        /** Returns `true` if [param path] points to a valid node and its subnames point to a valid [Resource], e.g. `Area2D/CollisionShape2D:shape`. Properties that are not [Resource] types (such as nodes or other [Variant] types) are not considered. See also [method get_node_and_resource]. */
        has_node_and_resource(path: NodePath): boolean
        
        /** Fetches a node and its most nested resource as specified by the [NodePath]'s subname. Returns an [Array] of size `3` where:  
         *  - Element `0` is the [Node], or `null` if not found;  
         *  - Element `1` is the subname's last nested [Resource], or `null` if not found;  
         *  - Element `2` is the remaining [NodePath], referring to an existing, non-[Resource] property (see [method Object.get_indexed]).  
         *  **Example:** Assume that the child's [member Sprite2D.texture] has been assigned a [AtlasTexture]:  
         *    
         */
        get_node_and_resource(path: NodePath): Array
        
        /** Returns `true` if this node is currently inside a [SceneTree]. See also [method get_tree]. */
        is_inside_tree(): boolean
        
        /** Returns `true` if the given [param node] is a direct or indirect child of this node. */
        is_ancestor_of(node: Node): boolean
        
        /** Returns `true` if the given [param node] occurs later in the scene hierarchy than this node. A node occurring later is usually processed last. */
        is_greater_than(node: Node): boolean
        
        /** Returns the node's absolute path, relative to the [member SceneTree.root]. If the node is not inside the scene tree, this method fails and returns an empty [NodePath]. */
        get_path(): NodePath
        
        /** Returns the relative [NodePath] from this node to the specified [param node]. Both nodes must be in the same [SceneTree], otherwise this method fails and returns an empty [NodePath].  
         *  If [param use_unique_path] is `true`, returns the shortest path accounting for this node's unique name (see [member unique_name_in_owner]).  
         *      
         *  **Note:** If you get a relative path which starts from a unique node, the path may be longer than a normal relative path, due to the addition of the unique node's name.  
         */
        get_path_to(node: Node, use_unique_path: boolean = false): NodePath
        
        /** Adds the node to the [param group]. Groups can be helpful to organize a subset of nodes, for example `"enemies"` or `"collectables"`. See notes in the description, and the group methods in [SceneTree].  
         *  If [param persistent] is `true`, the group will be stored when saved inside a [PackedScene]. All groups created and displayed in the Node dock are persistent.  
         *      
         *  **Note:** To improve performance, the order of group names is [i]not[/i] guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** [SceneTree]'s group methods will [i]not[/i] work on this node if not inside the tree (see [method is_inside_tree]).  
         */
        add_to_group(group: StringName, persistent: boolean = false): void
        
        /** Removes the node from the given [param group]. Does nothing if the node is not in the [param group]. See also notes in the description, and the [SceneTree]'s group methods. */
        remove_from_group(group: StringName): void
        
        /** Returns `true` if this node has been added to the given [param group]. See [method add_to_group] and [method remove_from_group]. See also notes in the description, and the [SceneTree]'s group methods. */
        is_in_group(group: StringName): boolean
        
        /** Moves [param child_node] to the given index. A node's index is the order among its siblings. If [param to_index] is negative, the index is counted from the end of the list. See also [method get_child] and [method get_index].  
         *      
         *  **Note:** The processing order of several engine callbacks ([method _ready], [method _process], etc.) and notifications sent through [method propagate_notification] is affected by tree order. [CanvasItem] nodes are also rendered in tree order. See also [member process_priority].  
         */
        move_child(child_node: Node, to_index: number /*i64*/): void
        
        /** Returns an [Array] of group names that the node has been added to.  
         *      
         *  **Note:** To improve performance, the order of group names is [i]not[/i] guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** This method may also return some group names starting with an underscore (`_`). These are internally used by the engine. To avoid conflicts, do not use custom groups starting with underscores. To exclude internal groups, see the following code snippet:  
         *    
         */
        get_groups(): Array
        set_owner(owner: Node): void
        get_owner(): Node
        
        /** Returns this node's order among its siblings. The first node's index is `0`. See also [method get_child].  
         *  If [param include_internal] is `false`, returns the index ignoring internal children. The first, non-internal child will have an index of `0` (see [method add_child]'s `internal` parameter).  
         */
        get_index(include_internal: boolean = false): number /*i64*/
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. This method outputs [NodePath]s relative to this node, and is good for copy/pasting into [method get_node]. See also [method print_tree_pretty].  
         *  **Example output:**  
         *    
         */
        print_tree(): void
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. Similar to [method print_tree], but the graphical representation looks like what is displayed in the editor's Scene dock. It is useful for inspecting larger trees.  
         *  **Example output:**  
         *    
         */
        print_tree_pretty(): void
        
        /** Returns the tree as a [String]. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function. It also can be used in game UI/UX.  
         *  **Example output:**  
         *    
         */
        get_tree_string(): string
        
        /** Similar to [method get_tree_string], this returns the tree as a [String]. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.  
         *  **Example output:**  
         *    
         */
        get_tree_string_pretty(): string
        set_scene_file_path(scene_file_path: string): void
        get_scene_file_path(): string
        
        /** Calls [method Object.notification] with [param what] on this node and all of its children, recursively. */
        propagate_notification(what: number /*i64*/): void
        
        /** Calls the given [param method] name, passing [param args] as arguments, on this node and all of its children, recursively.  
         *  If [param parent_first] is `true`, the method is called on this node first, then on all of its children. If `false`, the children's methods are called first.  
         */
        propagate_call(method: StringName, args: Array = <any> {} /*compound.type from 28([object Object])*/, parent_first: boolean = false): void
        
        /** If set to `true`, enables physics (fixed framerate) processing. When a node is being processed, it will receive a [constant NOTIFICATION_PHYSICS_PROCESS] at a fixed (usually 60 FPS, see [member Engine.physics_ticks_per_second] to change) interval (and the [method _physics_process] callback will be called if exists). Enabled automatically if [method _physics_process] is overridden. */
        set_physics_process(enable: boolean): void
        
        /** Returns the time elapsed (in seconds) since the last physics callback. This value is identical to [method _physics_process]'s `delta` parameter, and is often consistent at run-time, unless [member Engine.physics_ticks_per_second] is changed. See also [constant NOTIFICATION_PHYSICS_PROCESS]. */
        get_physics_process_delta_time(): number /*f64*/
        
        /** Returns `true` if physics processing is enabled (see [method set_physics_process]). */
        is_physics_processing(): boolean
        
        /** Returns the time elapsed (in seconds) since the last process callback. This value is identical to [method _process]'s `delta` parameter, and may vary from frame to frame. See also [constant NOTIFICATION_PROCESS]. */
        get_process_delta_time(): number /*f64*/
        
        /** If set to `true`, enables processing. When a node is being processed, it will receive a [constant NOTIFICATION_PROCESS] on every drawn frame (and the [method _process] callback will be called if exists). Enabled automatically if [method _process] is overridden. */
        set_process(enable: boolean): void
        set_process_priority(priority: number /*i64*/): void
        get_process_priority(): number /*i64*/
        set_physics_process_priority(priority: number /*i64*/): void
        get_physics_process_priority(): number /*i64*/
        
        /** Returns `true` if processing is enabled (see [method set_process]). */
        is_processing(): boolean
        
        /** If set to `true`, enables input processing. This is not required for GUI controls! Enabled automatically if [method _input] is overridden. */
        set_process_input(enable: boolean): void
        
        /** Returns `true` if the node is processing input (see [method set_process_input]). */
        is_processing_input(): boolean
        
        /** If set to `true`, enables shortcut processing for this node. Enabled automatically if [method _shortcut_input] is overridden. */
        set_process_shortcut_input(enable: boolean): void
        
        /** Returns `true` if the node is processing shortcuts (see [method set_process_shortcut_input]). */
        is_processing_shortcut_input(): boolean
        
        /** If set to `true`, enables unhandled input processing. This is not required for GUI controls! It enables the node to receive all input that was not previously handled (usually by a [Control]). Enabled automatically if [method _unhandled_input] is overridden. */
        set_process_unhandled_input(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled input (see [method set_process_unhandled_input]). */
        is_processing_unhandled_input(): boolean
        
        /** If set to `true`, enables unhandled key input processing. Enabled automatically if [method _unhandled_key_input] is overridden. */
        set_process_unhandled_key_input(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled key input (see [method set_process_unhandled_key_input]). */
        is_processing_unhandled_key_input(): boolean
        set_process_mode(mode: Node.ProcessMode): void
        get_process_mode(): Node.ProcessMode
        
        /** Returns `true` if the node can receive processing notifications and input callbacks ([constant NOTIFICATION_PROCESS], [method _input], etc) from the [SceneTree] and [Viewport]. The value depends on both the current [member process_mode] and [member SceneTree.paused]. Returns `false` if the node is not inside the tree. */
        can_process(): boolean
        set_process_thread_group(mode: Node.ProcessThreadGroup): void
        get_process_thread_group(): Node.ProcessThreadGroup
        set_process_thread_messages(flags: Node.ProcessThreadMessages): void
        get_process_thread_messages(): Node.ProcessThreadMessages
        set_process_thread_group_order(order: number /*i64*/): void
        get_process_thread_group_order(): number /*i64*/
        
        /** If set to `true`, the node appears folded in the Scene dock. As a result, all of its children are hidden. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_displayed_folded]. */
        set_display_folded(fold: boolean): void
        
        /** Returns `true` if the node is folded (collapsed) in the Scene dock. This method is intended to be used in editor plugins and tools. See also [method set_display_folded]. */
        is_displayed_folded(): boolean
        
        /** If set to `true`, enables internal processing for this node. Internal processing happens in isolation from the normal [method _process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([method set_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        set_process_internal(enable: boolean): void
        
        /** Returns `true` if internal processing is enabled (see [method set_process_internal]). */
        is_processing_internal(): boolean
        
        /** If set to `true`, enables internal physics for this node. Internal physics processing happens in isolation from the normal [method _physics_process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([method set_physics_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        set_physics_process_internal(enable: boolean): void
        
        /** Returns `true` if internal physics processing is enabled (see [method set_physics_process_internal]). */
        is_physics_processing_internal(): boolean
        
        /** Returns the [Window] that contains this node. If the node is in the main window, this is equivalent to getting the root node (`get_tree().get_root()`). */
        get_window(): Window
        
        /** Returns the [Window] that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node. */
        get_last_exclusive_window(): Window
        
        /** Returns the [SceneTree] that contains this node. If this node is not inside the tree, generates an error and returns `null`. See also [method is_inside_tree]. */
        get_tree(): SceneTree
        
        /** Creates a new [Tween] and binds it to this node. Fails if the node is not inside the tree.  
         *  This is the equivalent of doing:  
         *    
         *  The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).  
         */
        create_tween(): Tween
        
        /** Duplicates the node, returning a new node with all of its properties, signals and groups copied from the original. The behavior can be tweaked through the [param flags] (see [enum DuplicateFlags]).  
         *      
         *  **Note:** For nodes with a [Script] attached, if [method Object._init] has been defined with required parameters, the duplicated node will not have a [Script].  
         */
        duplicate(flags: number /*i64*/ = 15): Node
        
        /** Replaces this node by the given [param node]. All children of this node are moved to [param node].  
         *  If [param keep_groups] is `true`, the [param node] is added to the same groups that the replaced node is in (see [method add_to_group]).  
         *  **Warning:** The replaced node is removed from the tree, but it is **not** deleted. To prevent memory leaks, store a reference to the node in a variable, or use [method Object.free].  
         */
        replace_by(node: Node, keep_groups: boolean = false): void
        
        /** If set to `true`, the node becomes a [InstancePlaceholder] when packed and instantiated from a [PackedScene]. See also [method get_scene_instance_load_placeholder]. */
        set_scene_instance_load_placeholder(load_placeholder: boolean): void
        
        /** Returns `true` if this node is an instance load placeholder. See [InstancePlaceholder] and [method set_scene_instance_load_placeholder]. */
        get_scene_instance_load_placeholder(): boolean
        
        /** Set to `true` to allow all nodes owned by [param node] to be available, and editable, in the Scene dock, even if their [member owner] is not the scene root. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_editable_instance]. */
        set_editable_instance(node: Node, is_editable: boolean): void
        
        /** Returns `true` if [param node] has editable children enabled relative to this node. This method is intended to be used in editor plugins and tools. See also [method set_editable_instance]. */
        is_editable_instance(node: Node): boolean
        
        /** Returns the node's closest [Viewport] ancestor, if the node is inside the tree. Otherwise, returns `null`. */
        get_viewport(): Viewport
        
        /** Queues this node to be deleted at the end of the current frame. When deleted, all of its children are deleted as well, and all references to the node and its children become invalid.  
         *  Unlike with [method Object.free], the node is not deleted instantly, and it can still be accessed before deletion. It is also safe to call [method queue_free] multiple times. Use [method Object.is_queued_for_deletion] to check if the node will be deleted at the end of the frame.  
         *      
         *  **Note:** The node will only be freed after all other deferred calls are finished. Using this method is not always the same as calling [method Object.free] through [method Object.call_deferred].  
         */
        queue_free(): void
        
        /** Requests [method _ready] to be called again the next time the node enters the tree. Does **not** immediately call [method _ready].  
         *      
         *  **Note:** This method only affects the current node. If the node's children also need to request ready, this method needs to be called for each one of them. When the node and its children enter the tree again, the order of [method _ready] callbacks will be the same as normal.  
         */
        request_ready(): void
        
        /** Returns `true` if the node is ready, i.e. it's inside scene tree and all its children are initialized.  
         *  [method request_ready] resets it back to `false`.  
         */
        is_node_ready(): boolean
        
        /** Sets the node's multiplayer authority to the peer with the given peer [param id]. The multiplayer authority is the peer that has authority over the node on the network. Defaults to peer ID 1 (the server). Useful in conjunction with [method rpc_config] and the [MultiplayerAPI].  
         *  If [param recursive] is `true`, the given peer is recursively set as the authority for all children of this node.  
         *  **Warning:** This does **not** automatically replicate the new authority to other peers. It is the developer's responsibility to do so. You may replicate the new authority's information using [member MultiplayerSpawner.spawn_function], an RPC, or a [MultiplayerSynchronizer]. Furthermore, the parent's authority does **not** propagate to newly added children.  
         */
        set_multiplayer_authority(id: number /*i64*/, recursive: boolean = true): void
        
        /** Returns the peer ID of the multiplayer authority for this node. See [method set_multiplayer_authority]. */
        get_multiplayer_authority(): number /*i64*/
        
        /** Returns `true` if the local system is the multiplayer authority of this node. */
        is_multiplayer_authority(): boolean
        get_multiplayer(): MultiplayerAPI
        
        /** Changes the RPC configuration for the given [param method]. [param config] should either be `null` to disable the feature (as by default), or a [Dictionary] containing the following entries:  
         *  - `rpc_mode`: see [enum MultiplayerAPI.RPCMode];  
         *  - `transfer_mode`: see [enum MultiplayerPeer.TransferMode];  
         *  - `call_local`: if `true`, the method will also be called locally;  
         *  - `channel`: an [int] representing the channel to send the RPC on.  
         *      
         *  **Note:** In GDScript, this method corresponds to the [annotation @GDScript.@rpc] annotation, with various parameters passed (`@rpc(any)`, `@rpc(authority)`...). See also the [url=$DOCS_URL/tutorials/networking/high_level_multiplayer.html]high-level multiplayer[/url] tutorial.  
         */
        rpc_config(method: StringName, config: any): void
        set_editor_description(editor_description: string): void
        get_editor_description(): string
        _set_import_path(import_path: NodePath): void
        _get_import_path(): NodePath
        set_unique_name_in_owner(enable: boolean): void
        is_unique_name_in_owner(): boolean
        _set_property_pinned(property: string, pinned: boolean): void
        
        /** Sends a remote procedure call request for the given [param method] to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [NodePath], including the exact same [member name]. Behavior depends on the RPC configuration for the given [param method] (see [method rpc_config] and [annotation @GDScript.@rpc]). By default, methods are not exposed to RPCs.  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         *      
         *  **Note:** You can only safely use RPCs on clients after you received the [signal MultiplayerAPI.connected_to_server] signal from the [MultiplayerAPI]. You also need to keep track of the connection state, either by the [MultiplayerAPI] signals like [signal MultiplayerAPI.server_disconnected] or by checking (`get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED`).  
         */
        rpc(method: StringName, ...vargargs: any[]): GodotError
        
        /** Sends a [method rpc] to a specific peer identified by [param peer_id] (see [method MultiplayerPeer.set_target_peer]).  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         */
        rpc_id(peer_id: number /*i64*/, method: StringName, ...vargargs: any[]): GodotError
        
        /** Refreshes the warnings displayed for this node in the Scene dock. Use [method _get_configuration_warnings] to customize the warning messages to display. */
        update_configuration_warnings(): void
        
        /** This function is similar to [method Object.call_deferred] except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [constant NOTIFICATION_PROCESS] or [constant NOTIFICATION_PHYSICS_PROCESS], the [method _process] or [method _physics_process] or their internal versions are called. */
        call_deferred_thread_group(method: StringName, ...vargargs: any[]): any
        
        /** Similar to [method call_deferred_thread_group], but for setting properties. */
        set_deferred_thread_group(property: StringName, value: any): void
        
        /** Similar to [method call_deferred_thread_group], but for notifications. */
        notify_deferred_thread_group(what: number /*i64*/): void
        
        /** This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly. */
        call_thread_safe(method: StringName, ...vargargs: any[]): any
        
        /** Similar to [method call_thread_safe], but for setting properties. */
        set_thread_safe(property: StringName, value: any): void
        
        /** Similar to [method call_thread_safe], but for notifications. */
        notify_thread_safe(what: number /*i64*/): void
        _import_path: NodePath
        
        /** If `true`, the node can be accessed from any node sharing the same [member owner] or from the [member owner] itself, with special `%Name` syntax in [method get_node].  
         *      
         *  **Note:** If another node with the same [member owner] shares the same [member name] as this node, the other node will no longer be accessible as unique.  
         */
        unique_name_in_owner: boolean
        
        /** The original scene's file path, if the node has been instantiated from a [PackedScene] file. Only scene root nodes contains this. */
        scene_file_path: string
        
        /** The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [PackedScene], all the nodes it owns are also saved with it.   
         *      
         *  **Note:** In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will **not** be saved. To prevent this, remember to set the owner after calling [method add_child]. See also (see [member unique_name_in_owner])  
         */
        owner: Node
        
        /** The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].  
         *      
         *  **Note:** Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.  
         */
        readonly multiplayer: MultiplayerAPI
        
        /** The node's processing behavior (see [enum ProcessMode]). To check if the node is able to process, with the current mode and [member SceneTree.paused], use [method can_process]. */
        process_mode: number /*i64*/
        
        /** The node's execution order of the process callbacks ([method _process], [method _physics_process], and internal processing). Nodes whose priority value is [i]lower[/i] call their process callbacks first, regardless of tree order. */
        process_priority: number /*i64*/
        
        /** Similar to [member process_priority] but for [constant NOTIFICATION_PHYSICS_PROCESS], [method _physics_process] or the internal version. */
        process_physics_priority: number /*i64*/
        
        /** Set the process thread group for this node (basically, whether it receives [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS], [method _process] or [method _physics_process] (and the internal versions) on the main thread or in a sub-thread.  
         *  By default, the thread group is [constant PROCESS_THREAD_GROUP_INHERIT], which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [member process_thread_group_order]). If the value is set is [constant PROCESS_THREAD_GROUP_SUB_THREAD], this thread group will occur on a sub thread (not the main thread), otherwise if set to [constant PROCESS_THREAD_GROUP_MAIN_THREAD] it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the [i]default thread group[/i]. This default group will process on the main thread and its group order is 0.  
         *  During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [method Object.call_deferred], [method call_thread_safe], [method call_deferred_thread_group] and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).  
         *  To better understand process thread groups, the idea is that any node set to any other value than [constant PROCESS_THREAD_GROUP_INHERIT] will include any child (and grandchild) nodes set to inherit into its process thread group. This means that the processing of all the nodes in the group will happen together, at the same time as the node including them.  
         */
        process_thread_group: number /*i64*/
        
        /** Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example. */
        process_thread_group_order: number /*i64*/
        
        /** Set whether the current thread group will process messages (calls to [method call_deferred_thread_group] on threads, and whether it wants to receive them during regular process or physics process callbacks. */
        process_thread_messages: number /*i64*/
        
        /** An optional description to the node. It will be displayed as a tooltip when hovering over the node in the editor's Scene dock. */
        editor_description: string
        
        /** Emitted when the node is considered ready, after [method _ready] is called. */
        readonly ready: Signal //  => void
        
        /** Emitted when the node's [member name] is changed, if the node is inside the tree. */
        readonly renamed: Signal //  => void
        
        /** Emitted when the node enters the tree.  
         *  This signal is emitted [i]after[/i] the related [constant NOTIFICATION_ENTER_TREE] notification.  
         */
        readonly tree_entered: Signal //  => void
        
        /** Emitted when the node is just about to exit the tree. The node is still valid. As such, this is the right place for de-initialization (or a "destructor", if you will).  
         *  This signal is emitted [i]after[/i] the node's [method _exit_tree], and [i]before[/i] the related [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly tree_exiting: Signal //  => void
        
        /** Emitted after the node exits the tree and is no longer active.  
         *  This signal is emitted [i]after[/i] the related [constant NOTIFICATION_EXIT_TREE] notification.  
         */
        readonly tree_exited: Signal //  => void
        
        /** Emitted when the child [param node] enters the [SceneTree], usually because this node entered the tree (see [signal tree_entered]), or [method add_child] has been called.  
         *  This signal is emitted [i]after[/i] the child node's own [constant NOTIFICATION_ENTER_TREE] and [signal tree_entered].  
         */
        readonly child_entered_tree: Signal // node: Node => void
        
        /** Emitted when the child [param node] is about to exit the [SceneTree], usually because this node is exiting the tree (see [signal tree_exiting]), or because the child [param node] is being removed or freed.  
         *  When this signal is received, the child [param node] is still accessible inside the tree. This signal is emitted [i]after[/i] the child node's own [signal tree_exiting] and [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly child_exiting_tree: Signal // node: Node => void
        
        /** Emitted when the list of children is changed. This happens when child nodes are added, moved or removed. */
        readonly child_order_changed: Signal //  => void
        
        /** Emitted when this node is being replaced by the [param node], see [method replace_by].  
         *  This signal is emitted [i]after[/i] [param node] has been added as a child of the original parent node, but [i]before[/i] all original child nodes have been reparented to [param node].  
         */
        readonly replacing_by: Signal // node: Node => void
    }
    /** A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and Z index. */
    class Node2D extends CanvasItem {
        set_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_skew(radians: number /*f64*/): void
        set_scale(scale: Vector2): void
        get_position(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_skew(): number /*f64*/
        get_scale(): Vector2
        
        /** Applies a rotation to the node, in radians, starting from its current rotation. */
        rotate(radians: number /*f64*/): void
        
        /** Applies a local translation on the node's X axis based on the [method Node._process]'s [param delta]. If [param scaled] is `false`, normalizes the movement. */
        move_local_x(delta: number /*f64*/, scaled: boolean = false): void
        
        /** Applies a local translation on the node's Y axis based on the [method Node._process]'s [param delta]. If [param scaled] is `false`, normalizes the movement. */
        move_local_y(delta: number /*f64*/, scaled: boolean = false): void
        
        /** Translates the node by the given [param offset] in local coordinates. */
        translate(offset: Vector2): void
        
        /** Adds the [param offset] vector to the node's global position. */
        global_translate(offset: Vector2): void
        
        /** Multiplies the current scale by the [param ratio] vector. */
        apply_scale(ratio: Vector2): void
        set_global_position(position: Vector2): void
        get_global_position(): Vector2
        set_global_rotation(radians: number /*f64*/): void
        set_global_rotation_degrees(degrees: number /*f64*/): void
        get_global_rotation(): number /*f64*/
        get_global_rotation_degrees(): number /*f64*/
        set_global_skew(radians: number /*f64*/): void
        get_global_skew(): number /*f64*/
        set_global_scale(scale: Vector2): void
        get_global_scale(): Vector2
        set_transform(xform: Transform2D): void
        set_global_transform(xform: Transform2D): void
        
        /** Rotates the node so it points towards the [param point], which is expected to use global coordinates. */
        look_at(point: Vector2): void
        
        /** Returns the angle between the node and the [param point] in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/node2d_get_angle_to.png]Illustration of the returned angle.[/url]  
         */
        get_angle_to(point: Vector2): number /*f64*/
        
        /** Transforms the provided global position into a position in local coordinate space. The output will be local relative to the [Node2D] it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent. */
        to_local(global_point: Vector2): Vector2
        
        /** Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the [Node2D] it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position. */
        to_global(local_point: Vector2): Vector2
        
        /** Returns the [Transform2D] relative to this node's parent. */
        get_relative_transform_to_parent(parent: Node): Transform2D
        
        /** Position, relative to the node's parent. */
        position: Vector2
        
        /** Rotation in radians, relative to the node's parent.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        rotation: number /*f64*/
        
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: number /*f64*/
        
        /** The node's scale. Unscaled value: `(1, 1)`.  
         *      
         *  **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.  
         */
        scale: Vector2
        
        /** Slants the node.  
         *      
         *  **Note:** Skew is X axis only.  
         */
        skew: number /*f64*/
        
        /** Local [Transform2D]. */
        transform: Transform2D
        
        /** Global position. */
        global_position: Vector2
        
        /** Global rotation in radians. */
        global_rotation: number /*f64*/
        
        /** Helper property to access [member global_rotation] in degrees instead of radians. */
        global_rotation_degrees: number /*f64*/
        
        /** Global scale. */
        global_scale: Vector2
        
        /** Global skew in radians. */
        global_skew: number /*f64*/
        
        /** Global [Transform2D]. */
        global_transform: Transform2D
    }
    namespace Node3D {
        enum RotationEditMode {
            /** The rotation is edited using [Vector3] Euler angles. */
            ROTATION_EDIT_MODE_EULER = 0,
            
            /** The rotation is edited using a [Quaternion]. */
            ROTATION_EDIT_MODE_QUATERNION = 1,
            
            /** The rotation is edited using a [Basis]. In this mode, [member scale] can't be edited separately. */
            ROTATION_EDIT_MODE_BASIS = 2,
        }
    }
    /** Most basic 3D game object, parent of all 3D-related nodes. */
    class Node3D extends Node {
        /** [Node3D] nodes receive this notification when their global transform changes. This means that either the current or a parent node changed its transform.  
         *  In order for [constant NOTIFICATION_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_transform]. The notification is also sent if the node is in the editor context and it has at least one valid gizmo.  
         */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** [Node3D] nodes receive this notification when they are registered to new [World3D] resource. */
        static readonly NOTIFICATION_ENTER_WORLD = 41
        
        /** [Node3D] nodes receive this notification when they are unregistered from current [World3D] resource. */
        static readonly NOTIFICATION_EXIT_WORLD = 42
        
        /** [Node3D] nodes receive this notification when their visibility changes. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        
        /** [Node3D] nodes receive this notification when their local transform changes. This is not received when the transform of a parent node is changed.  
         *  In order for [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_local_transform].  
         */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        set_transform(local: Transform3D): void
        get_transform(): Transform3D
        set_position(position: Vector3): void
        get_position(): Vector3
        set_rotation(euler_radians: Vector3): void
        get_rotation(): Vector3
        set_rotation_degrees(euler_degrees: Vector3): void
        get_rotation_degrees(): Vector3
        set_rotation_order(order: EulerOrder): void
        get_rotation_order(): EulerOrder
        set_rotation_edit_mode(edit_mode: Node3D.RotationEditMode): void
        get_rotation_edit_mode(): Node3D.RotationEditMode
        set_scale(scale: Vector3): void
        get_scale(): Vector3
        set_quaternion(quaternion: Quaternion): void
        get_quaternion(): Quaternion
        set_basis(basis: Basis): void
        get_basis(): Basis
        set_global_transform(global: Transform3D): void
        get_global_transform(): Transform3D
        set_global_position(position: Vector3): void
        get_global_position(): Vector3
        set_global_basis(basis: Basis): void
        get_global_basis(): Basis
        set_global_rotation(euler_radians: Vector3): void
        get_global_rotation(): Vector3
        set_global_rotation_degrees(euler_degrees: Vector3): void
        get_global_rotation_degrees(): Vector3
        
        /** Returns the parent [Node3D], or `null` if no parent exists, the parent is not of type [Node3D], or [member top_level] is `true`.  
         *      
         *  **Note:** Calling this method is not equivalent to `get_parent() as Node3D`, which does not take [member top_level] into account.  
         */
        get_parent_node_3d(): Node3D
        
        /** Sets whether the node ignores notification that its transformation (global or local) changed. */
        set_ignore_transform_notification(enabled: boolean): void
        set_as_top_level(enable: boolean): void
        is_set_as_top_level(): boolean
        
        /** Sets whether the node uses a scale of `(1, 1, 1)` or its local transformation scale. Changes to the local transformation scale are preserved. */
        set_disable_scale(disable: boolean): void
        
        /** Returns whether this node uses a scale of `(1, 1, 1)` or its local transformation scale. */
        is_scale_disabled(): boolean
        
        /** Returns the current [World3D] resource this [Node3D] node is registered to. */
        get_world_3d(): World3D
        
        /** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
        force_update_transform(): void
        set_visibility_parent(path: NodePath): void
        get_visibility_parent(): NodePath
        
        /** Updates all the [Node3D] gizmos attached to this node. */
        update_gizmos(): void
        
        /** Attach an editor gizmo to this [Node3D].  
         *      
         *  **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].  
         */
        add_gizmo(gizmo: Node3DGizmo): void
        
        /** Returns all the gizmos attached to this [Node3D]. */
        get_gizmos(): Array
        
        /** Clear all gizmos attached to this [Node3D]. */
        clear_gizmos(): void
        
        /** Set subgizmo selection for this node in the editor.  
         *      
         *  **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].  
         */
        set_subgizmo_selection(gizmo: Node3DGizmo, id: number /*i64*/, transform: Transform3D): void
        
        /** Clears subgizmo selection for this node in the editor. Useful when subgizmo IDs become invalid after a property change. */
        clear_subgizmo_selection(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        
        /** Returns `true` if the node is present in the [SceneTree], its [member visible] property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree. */
        is_visible_in_tree(): boolean
        
        /** Enables rendering of this node. Changes [member visible] to `true`. */
        show(): void
        
        /** Disables rendering of this node. Changes [member visible] to `false`. */
        hide(): void
        
        /** Sets whether the node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
        set_notify_local_transform(enable: boolean): void
        
        /** Returns whether node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
        is_local_transform_notification_enabled(): boolean
        
        /** Sets whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default, unless it is in the editor context and it has a valid gizmo. */
        set_notify_transform(enable: boolean): void
        
        /** Returns whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default. */
        is_transform_notification_enabled(): boolean
        
        /** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. */
        rotate(axis: Vector3, angle: number /*f64*/): void
        
        /** Rotates the global (world) transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in global coordinate system. */
        global_rotate(axis: Vector3, angle: number /*f64*/): void
        
        /** Scales the global (world) transformation by the given [Vector3] scale factors. */
        global_scale(scale: Vector3): void
        
        /** Moves the global (world) transformation by [Vector3] offset. The offset is in global coordinate system. */
        global_translate(offset: Vector3): void
        
        /** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in object-local coordinate system. */
        rotate_object_local(axis: Vector3, angle: number /*f64*/): void
        
        /** Scales the local transformation by given 3D scale factors in object-local coordinate system. */
        scale_object_local(scale: Vector3): void
        
        /** Changes the node's position by the given offset [Vector3] in local space. */
        translate_object_local(offset: Vector3): void
        
        /** Rotates the local transformation around the X axis by angle in radians. */
        rotate_x(angle: number /*f64*/): void
        
        /** Rotates the local transformation around the Y axis by angle in radians. */
        rotate_y(angle: number /*f64*/): void
        
        /** Rotates the local transformation around the Z axis by angle in radians. */
        rotate_z(angle: number /*f64*/): void
        
        /** Changes the node's position by the given offset [Vector3].  
         *  Note that the translation [param offset] is affected by the node's scale, so if scaled by e.g. `(10, 1, 1)`, a translation by an offset of `(2, 0, 0)` would actually add 20 (`2 * 10`) to the X coordinate.  
         */
        translate(offset: Vector3): void
        
        /** Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's [Transform3D]. */
        orthonormalize(): void
        
        /** Reset all transformations for this node (sets its [Transform3D] to the identity matrix). */
        set_identity(): void
        
        /** Rotates the node so that the local forward axis (-Z, [constant Vector3.FORWARD]) points toward the [param target] position.  
         *  The local up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.  
         *  The [param target] position cannot be the same as the node's position, the [param up] vector cannot be zero, and the direction from the node's position to the [param target] vector cannot be parallel to the [param up] vector.  
         *  Operations take place in global space, which means that the node must be in the scene tree.  
         *  If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).  
         */
        look_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        
        /** Moves the node to the specified [param position], and then rotates the node to point toward the [param target] as per [method look_at]. Operations take place in global space. */
        look_at_from_position(position: Vector3, target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        
        /** Transforms [param global_point] from world space to this node's local space. */
        to_local(global_point: Vector3): Vector3
        
        /** Transforms [param local_point] from this node's local space to world space. */
        to_global(local_point: Vector3): Vector3
        
        /** Local space [Transform3D] of this node, with respect to the parent node. */
        transform: Transform3D
        
        /** World3D space (global) [Transform3D] of this node. */
        global_transform: Transform3D
        
        /** Local position or translation of this node relative to the parent. This is equivalent to `transform.origin`. */
        position: Vector3
        
        /** Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the [member rotation_order] property.  
         *      
         *  **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        rotation: Vector3
        
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: Vector3
        
        /** Access to the node rotation as a [Quaternion]. This property is ideal for tweening complex rotations. */
        quaternion: Quaternion
        
        /** Direct access to the 3x3 basis of the [member transform] property. */
        basis: Basis
        
        /** Scale part of the local transformation.  
         *      
         *  **Note:** Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.  
         *      
         *  **Note:** Not all nodes are visually scaled by the [member scale] property. For example, [Light3D]s are not visually affected by [member scale].  
         */
        scale: Vector3
        
        /** Specify how rotation (and scale) will be presented in the editor. */
        rotation_edit_mode: number /*i64*/
        
        /** Specify the axis rotation order of the [member rotation] property. The final orientation is constructed by rotating the Euler angles in the order specified by this property. */
        rotation_order: number /*i64*/
        
        /** If `true`, the node will not inherit its transformations from its parent. Node transformations are only in global space. */
        top_level: boolean
        
        /** Global position of this node. This is equivalent to `global_transform.origin`. */
        global_position: Vector3
        
        /** Global basis of this node. This is equivalent to `global_transform.basis`. */
        global_basis: Basis
        
        /** Rotation part of the global transformation in radians, specified in terms of YXZ-Euler angles in the format (X angle, Y angle, Z angle).  
         *      
         *  **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.  
         */
        global_rotation: Vector3
        
        /** Helper property to access [member global_rotation] in degrees instead of radians. */
        global_rotation_degrees: Vector3
        
        /** If `true`, this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return `true`). */
        visible: boolean
        
        /** Defines the visibility range parent for this node and its subtree. The visibility parent must be a GeometryInstance3D. Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [member GeometryInstance3D.visibility_range_begin]. Nodes hidden via the [member Node3D.visible] property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its ancestors into account. */
        visibility_parent: NodePath
        
        /** Emitted when node visibility changes. */
        readonly visibility_changed: Signal //  => void
    }
    class Node3DEditor extends VBoxContainer {
        _get_editor_data(_unnamed_arg0: Object): Object
        _request_gizmo(_unnamed_arg0: Object): void
        _request_gizmo_for_id(_unnamed_arg0: number /*i64*/): void
        _set_subgizmo_selection(_unnamed_arg0: Object, _unnamed_arg1: Node3DGizmo, _unnamed_arg2: number /*i64*/, _unnamed_arg3: Transform3D): void
        _clear_subgizmo_selection(_unnamed_arg0: Object): void
        _refresh_menu_icons(): void
        readonly transform_key_request: Signal //  => void
        readonly item_lock_status_changed: Signal //  => void
        readonly item_group_status_changed: Signal //  => void
    }
    class Node3DEditorPlugin extends EditorPlugin {
    }
    class Node3DEditorViewport extends Control {
        update_transform_gizmo_view(): void
        readonly toggle_maximize_view: Signal // viewport: Object => void
        readonly clicked: Signal // viewport: Object => void
    }
    class Node3DEditorViewportContainer extends Container {
    }
    /** Abstract class to expose editor gizmos for [Node3D]. */
    class Node3DGizmo extends RefCounted {
    }
    class NodeDock extends VBoxContainer {
    }
    /** Abstract base class for noise generators. */
    class Noise extends Resource {
        /** Returns the 1D noise value at the given (x) coordinate. */
        get_noise_1d(x: number /*f64*/): number /*f64*/
        
        /** Returns the 2D noise value at the given position. */
        get_noise_2d(x: number /*f64*/, y: number /*f64*/): number /*f64*/
        
        /** Returns the 2D noise value at the given position. */
        get_noise_2dv(v: Vector2): number /*f64*/
        
        /** Returns the 3D noise value at the given position. */
        get_noise_3d(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/): number /*f64*/
        
        /** Returns the 3D noise value at the given position. */
        get_noise_3dv(v: Vector3): number /*f64*/
        
        /** Returns an [Image] containing 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        get_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, normalize: boolean = true): Image
        
        /** Returns an [Image] containing seamless 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        get_seamless_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Image
        
        /** Returns an [Array] of [Image]s containing 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        get_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, normalize: boolean = true): Array
        
        /** Returns an [Array] of [Image]s containing seamless 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        get_seamless_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Array
    }
    class NoiseEditorInspectorPlugin extends EditorInspectorPlugin {
    }
    class NoiseEditorPlugin extends EditorPlugin {
    }
    /** A 2D texture filled with noise generated by a [Noise] object. */
    class NoiseTexture2D extends Texture2D {
        _update_texture(): void
        _generate_texture(): Image
        _thread_done(image: Image): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_in_3d_space(enable: boolean): void
        is_in_3d_space(): boolean
        set_generate_mipmaps(invert: boolean): void
        is_generating_mipmaps(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_as_normal_map(as_normal_map: boolean): void
        is_normal_map(): boolean
        set_bump_strength(bump_strength: number /*f64*/): void
        get_bump_strength(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        
        /** Width of the generated texture (in pixels). */
        width: number /*i64*/
        
        /** Height of the generated texture (in pixels). */
        height: number /*i64*/
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        invert: boolean
        
        /** Determines whether the noise image is calculated in 3D space. May result in reduced contrast. */
        in_3d_space: boolean
        
        /** Determines whether mipmaps are generated for this texture. Enabling this results in less texture aliasing in the distance, at the cost of increasing memory usage by roughly 33% and making the noise texture generation take longer.  
         *      
         *  **Note:** [member generate_mipmaps] requires mipmap filtering to be enabled on the material using the [NoiseTexture2D] to have an effect.  
         */
        generate_mipmaps: boolean
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        seamless: boolean
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        seamless_blend_skirt: number /*f64*/
        
        /** If `true`, the resulting texture contains a normal map created from the original noise interpreted as a bump map. */
        as_normal_map: boolean
        
        /** Strength of the bump maps used in this texture. A higher value will make the bump maps appear larger while a lower value will make them appear softer. */
        bump_strength: number /*f64*/
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        normalize: boolean
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        color_ramp: Gradient
        
        /** The instance of the [Noise] object. */
        noise: Noise
    }
    /** A 3D texture filled with noise generated by a [Noise] object. */
    class NoiseTexture3D extends Texture3D {
        _update_texture(): void
        _generate_texture(): Array
        _thread_done(image: Array): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_depth(depth: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        
        /** Width of the generated texture (in pixels). */
        width: number /*i64*/
        
        /** Height of the generated texture (in pixels). */
        height: number /*i64*/
        
        /** Depth of the generated texture (in pixels). */
        depth: number /*i64*/
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        invert: boolean
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        seamless: boolean
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        seamless_blend_skirt: number /*f64*/
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        normalize: boolean
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        color_ramp: Gradient
        
        /** The instance of the [Noise] object. */
        noise: Noise
    }
    /** A PBR (Physically Based Rendering) material to be used on 3D objects. Uses an ORM texture. */
    class ORMMaterial3D extends BaseMaterial3D {
    }
    class ORMMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace Object {
        enum ConnectFlags {
            /** Deferred connections trigger their [Callable]s on idle time (at the end of the frame), rather than instantly. */
            CONNECT_DEFERRED = 1,
            
            /** Persisting connections are stored when the object is serialized (such as when using [method PackedScene.pack]). In the editor, connections created through the Node dock are always persisting. */
            CONNECT_PERSIST = 2,
            
            /** One-shot connections disconnect themselves after emission. */
            CONNECT_ONE_SHOT = 4,
            
            /** Reference-counted connections can be assigned to the same [Callable] multiple times. Each disconnection decreases the internal counter. The signal fully disconnects only when the counter reaches 0. */
            CONNECT_REFERENCE_COUNTED = 8,
        }
    }
    /** Base class for all other classes in the engine. */
    class Object {
        /** Notification received when the object is initialized, before its script is attached. Used internally. */
        static readonly NOTIFICATION_POSTINITIALIZE = 0
        
        /** Notification received when the object is about to be deleted. Can act as the deconstructor of some programming languages. */
        static readonly NOTIFICATION_PREDELETE = 1
        
        /** Notification received when the object finishes hot reloading. This notification is only sent for extensions classes and derived. */
        static readonly NOTIFICATION_EXTENSION_RELOADED = 2
        
        /** Deletes the object from memory. Pre-existing references to the object become invalid, and any attempt to access them will result in a run-time error. Checking the references with [method @GlobalScope.is_instance_valid] will return `false`. */
        /* gdvirtual */ free(): void
        
        /** Called when the object receives a notification, which can be identified in [param what] by comparing it with a constant. See also [method notification].  
         *    
         *      
         *  **Note:** The base [Object] defines a few notifications ([constant NOTIFICATION_POSTINITIALIZE] and [constant NOTIFICATION_PREDELETE]). Inheriting classes such as [Node] define a lot more notifications, which are also received by this method.  
         */
        /* gdvirtual */ _notification(what: number /*i64*/): void
        
        /** Override this method to customize the behavior of [method set]. Should set the [param property] to [param value] and return `true`, or `false` if the [param property] should be handled normally. The [i]exact[/i] way to set the [param property] is up to this method's implementation.  
         *  Combined with [method _get] and [method _get_property_list], this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property [i]must[/i] be present in [method get_property_list], otherwise this method will not be called.  
         *    
         */
        /* gdvirtual */ _set(property: StringName, value: any): boolean
        
        /** Override this method to customize the behavior of [method get]. Should return the given [param property]'s value, or `null` if the [param property] should be handled normally.  
         *  Combined with [method _set] and [method _get_property_list], this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property must be present in [method get_property_list], otherwise this method will not be called.  
         *    
         */
        /* gdvirtual */ _get(property: StringName): void
        
        /** Override this method to customize how script properties should be handled by the engine.  
         *  Should return a property list, as an [Array] of dictionaries. The result is added to the array of [method get_property_list], and should be formatted in the same way. Each [Dictionary] must at least contain the `name` and `type` entries.  
         *  The example below displays `hammer_type` in the Inspector dock, only if `holding_hammer` is `true`:  
         *    
         *      
         *  **Note:** This method is intended for advanced purposes. For most common use cases, the scripting languages offer easier ways to handle properties. See [annotation @GDScript.@export], [annotation @GDScript.@export_enum], [annotation @GDScript.@export_group], etc.  
         *      
         *  **Note:** If the object's script is not [annotation @GDScript.@tool], this method will not be called in the editor.  
         */
        /* gdvirtual */ _get_property_list(): Array
        
        /** Override this method to customize existing properties. Every property info goes through this method. The dictionary contents is the same as in [method _get_property_list].  
         *    
         */
        /* gdvirtual */ _validate_property(property: Dictionary): void
        
        /** Override this method to customize the given [param property]'s revert behavior. Should return `true` if the [param property] can be reverted in the Inspector dock. Use [method _property_get_revert] to specify the [param property]'s default value.  
         *      
         *  **Note:** This method must return consistently, regardless of the current value of the [param property].  
         */
        /* gdvirtual */ _property_can_revert(property: StringName): boolean
        
        /** Override this method to customize the given [param property]'s revert behavior. Should return the default value for the [param property]. If the default value differs from the [param property]'s current value, a revert icon is displayed in the Inspector dock.  
         *      
         *  **Note:** [method _property_can_revert] must also be overridden for this method to be called.  
         */
        /* gdvirtual */ _property_get_revert(property: StringName): void
        
        /** Called when the object's script is instantiated, oftentimes after the object is initialized in memory (through `Object.new()` in GDScript, or `new GodotObject` in C#). It can be also defined to take in parameters. This method is similar to a constructor in most programming languages.  
         *      
         *  **Note:** If [method _init] is defined with [i]required[/i] parameters, the Object with script may only be created directly. If any other means (such as [method PackedScene.instantiate] or [method Node.duplicate]) are used, the script's initialization will fail.  
         */
        /* gdvirtual */ _init(): void
        
        /** Override this method to customize the return value of [method to_string], and therefore the object's representation as a [String].  
         *    
         */
        /* gdvirtual */ _to_string(): string
        
        /** Returns the object's built-in class name, as a [String]. See also [method is_class].  
         *      
         *  **Note:** This method ignores `class_name` declarations. If this object's script has defined a `class_name`, the base, built-in class name is returned instead.  
         */
        get_class(): string
        
        /** Returns `true` if the object inherits from the given [param class]. See also [method get_class].  
         *    
         *      
         *  **Note:** This method ignores `class_name` declarations in the object's script.  
         */
        is_class(class_: string): boolean
        
        /** Assigns [param value] to the given [param property]. If the property does not exist or the given [param value]'s type doesn't match, nothing happens.  
         *    
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        set(property: StringName, value: any): void
        
        /** Returns the [Variant] value of the given [param property]. If the [param property] does not exist, this method returns `null`.  
         *    
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        get(property: StringName): any
        
        /** Assigns a new [param value] to the property identified by the [param property_path]. The path should be a [NodePath] relative to this object, and can use the colon character (`:`) to access nested properties.  
         *    
         *      
         *  **Note:** In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        set_indexed(property_path: NodePath, value: any): void
        
        /** Gets the object's property indexed by the given [param property_path]. The path should be a [NodePath] relative to the current object and can use the colon character (`:`) to access nested properties.  
         *  **Examples:** `"position:x"` or `"material:next_pass:blend_mode"`.  
         *    
         *      
         *  **Note:** In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         *      
         *  **Note:** This method does not support actual paths to nodes in the [SceneTree], only sub-property paths. In the context of nodes, use [method Node.get_node_and_resource] instead.  
         */
        get_indexed(property_path: NodePath): any
        
        /** Returns the object's property list as an [Array] of dictionaries. Each [Dictionary] contains the following entries:  
         *  - `name` is the property's name, as a [String];  
         *  - `class_name` is an empty [StringName], unless the property is [constant TYPE_OBJECT] and it inherits from a class;  
         *  - `type` is the property's type, as an [int] (see [enum Variant.Type]);  
         *  - `hint` is [i]how[/i] the property is meant to be edited (see [enum PropertyHint]);  
         *  - `hint_string` depends on the hint (see [enum PropertyHint]);  
         *  - `usage` is a combination of [enum PropertyUsageFlags].  
         *      
         *  **Note:** In GDScript, all class members are treated as properties. In C# and GDExtension, it may be necessary to explicitly mark class members as Godot properties using decorators or attributes.  
         */
        get_property_list(): Array
        
        /** Returns this object's methods and their signatures as an [Array] of dictionaries. Each [Dictionary] contains the following entries:  
         *  - `name` is the name of the method, as a [String];  
         *  - `args` is an [Array] of dictionaries representing the arguments;  
         *  - `default_args` is the default arguments as an [Array] of variants;  
         *  - `flags` is a combination of [enum MethodFlags];  
         *  - `id` is the method's internal identifier [int];  
         *  - `return` is the returned value, as a [Dictionary];  
         *      
         *  **Note:** The dictionaries of `args` and `return` are formatted identically to the results of [method get_property_list], although not all entries are used.  
         */
        get_method_list(): Array
        
        /** Returns `true` if the given [param property] has a custom default value. Use [method property_get_revert] to get the [param property]'s default value.  
         *      
         *  **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_can_revert] to customize the default value. If [method _property_can_revert] is not implemented, this method returns `false`.  
         */
        property_can_revert(property: StringName): boolean
        
        /** Returns the custom default value of the given [param property]. Use [method property_can_revert] to check if the [param property] has a custom default value.  
         *      
         *  **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_get_revert] to customize the default value. If [method _property_get_revert] is not implemented, this method returns `null`.  
         */
        property_get_revert(property: StringName): any
        
        /** Sends the given [param what] notification to all classes inherited by the object, triggering calls to [method _notification], starting from the highest ancestor (the [Object] class) and going down to the object's script.  
         *  If [param reversed] is `true`, the call order is reversed.  
         *    
         */
        notification(what: number /*i64*/, reversed: boolean = false): void
        
        /** Returns a [String] representing the object. Defaults to `"<ClassName#RID>"`. Override [method _to_string] to customize the string representation of the object. */
        to_string(): string
        
        /** Returns the object's unique instance ID. This ID can be saved in [EncodedObjectAsID], and can be used to retrieve this object instance with [method @GlobalScope.instance_from_id]. */
        get_instance_id(): number /*i64*/
        
        /** Attaches [param script] to the object, and instantiates it. As a result, the script's [method _init] is called. A [Script] is used to extend the object's functionality.  
         *  If a script already exists, its instance is detached, and its property values and state are lost. Built-in property values are still kept.  
         */
        set_script(script: any): void
        
        /** Returns the object's [Script] instance, or `null` if no script is attached. */
        get_script(): any
        
        /** Adds or changes the entry [param name] inside the object's metadata. The metadata [param value] can be any [Variant], although some types cannot be serialized correctly.  
         *  If [param value] is `null`, the entry is removed. This is the equivalent of using [method remove_meta]. See also [method has_meta] and [method get_meta].  
         *      
         *  **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.  
         *      
         *  **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.  
         */
        set_meta(name: StringName, value: any): void
        
        /** Removes the given entry [param name] from the object's metadata. See also [method has_meta], [method get_meta] and [method set_meta].  
         *      
         *  **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.  
         *      
         *  **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.  
         */
        remove_meta(name: StringName): void
        
        /** Returns the object's metadata value for the given entry [param name]. If the entry does not exist, returns [param default]. If [param default] is `null`, an error is also generated.  
         *      
         *  **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.  
         *      
         *  **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.  
         */
        get_meta(name: StringName, default_: any = <any> {} /*compound.type from nil*/): any
        
        /** Returns `true` if a metadata entry is found with the given [param name]. See also [method get_meta], [method set_meta] and [method remove_meta].  
         *      
         *  **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.  
         *      
         *  **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.  
         */
        has_meta(name: StringName): boolean
        
        /** Returns the object's metadata entry names as a [PackedStringArray]. */
        get_meta_list(): Array
        
        /** Adds a user-defined [param signal]. Optional arguments for the signal can be added as an [Array] of dictionaries, each defining a `name` [String] and a `type` [int] (see [enum Variant.Type]). See also [method has_user_signal].  
         *    
         */
        add_user_signal(signal: string, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Returns `true` if the given user-defined [param signal] name exists. Only signals added with [method add_user_signal] are included. */
        has_user_signal(signal: StringName): boolean
        
        /** Emits the given [param signal] by name. The signal must exist, so it should be a built-in signal of this class or one of its inherited classes, or a user-defined signal (see [method add_user_signal]). This method supports a variable number of arguments, so parameters can be passed as a comma separated list.  
         *  Returns [constant ERR_UNAVAILABLE] if [param signal] does not exist or the parameters are invalid.  
         *    
         *      
         *  **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot signals. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.  
         */
        emit_signal(signal: StringName, ...vargargs: any[]): GodotError
        
        /** Calls the [param method] on the object and returns the result. This method supports a variable number of arguments, so parameters can be passed as a comma separated list.  
         *    
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        call(method: StringName, ...vargargs: any[]): any
        
        /** Calls the [param method] on the object during idle time. Always returns null, **not** the method's result.  
         *  Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.  
         *  This method supports a variable number of arguments, so parameters can be passed as a comma separated list.  
         *    
         *  See also [method Callable.call_deferred].  
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         *      
         *  **Note:** If you're looking to delay the function call by a frame, refer to the [signal SceneTree.process_frame] and [signal SceneTree.physics_frame] signals.  
         *    
         */
        call_deferred(method: StringName, ...vargargs: any[]): any
        
        /** Assigns [param value] to the given [param property], at the end of the current frame. This is equivalent to calling [method set] through [method call_deferred].  
         *    
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        set_deferred(property: StringName, value: any): void
        
        /** Calls the [param method] on the object and returns the result. Unlike [method call], this method expects all parameters to be contained inside [param arg_array].  
         *    
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        callv(method: StringName, arg_array: Array): any
        
        /** Returns `true` if the given [param method] name exists in the object.  
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        has_method(method: StringName): boolean
        
        /** Returns `true` if the given [param signal] name exists in the object.  
         *      
         *  **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.  
         */
        has_signal(signal: StringName): boolean
        
        /** Returns the list of existing signals as an [Array] of dictionaries.  
         *      
         *  **Note:** Due of the implementation, each [Dictionary] is formatted very similarly to the returned values of [method get_method_list].  
         */
        get_signal_list(): Array
        
        /** Returns an [Array] of connections for the given [param signal] name. Each connection is represented as a [Dictionary] that contains three entries:  
         *  - [code skip-lint]signal` is a reference to the [Signal];  
         *  - `callable` is a reference to the connected [Callable];  
         *  - `flags` is a combination of [enum ConnectFlags].  
         */
        get_signal_connection_list(signal: StringName): Array
        
        /** Returns an [Array] of signal connections received by this object. Each connection is represented as a [Dictionary] that contains three entries:  
         *  - `signal` is a reference to the [Signal];  
         *  - `callable` is a reference to the [Callable];  
         *  - `flags` is a combination of [enum ConnectFlags].  
         */
        get_incoming_connections(): Array
        
        /** Connects a [param signal] by name to a [param callable]. Optional [param flags] can be also added to configure the connection's behavior (see [enum ConnectFlags] constants).  
         *  A signal can only be connected once to the same [Callable]. If the signal is already connected, this method returns [constant ERR_INVALID_PARAMETER] and pushes an error message, unless the signal is connected with [constant CONNECT_REFERENCE_COUNTED]. To prevent this, use [method is_connected] first to check for existing connections.  
         *  If the [param callable]'s object is freed, the connection will be lost.  
         *  **Examples with recommended syntax:**  
         *  Connecting signals is one of the most common operations in Godot and the API gives many options to do so, which are described further down. The code block below shows the recommended approach.  
         *    
         *  **[code skip-lint]Object.connect()` or [code skip-lint]Signal.connect()`?**  
         *  As seen above, the recommended method to connect signals is not [method Object.connect]. The code block below shows the four options for connecting signals, using either this legacy method or the recommended [method Signal.connect], and using either an implicit [Callable] or a manually defined one.  
         *    
         *  While all options have the same outcome (`button`'s [signal BaseButton.button_down] signal will be connected to `_on_button_down`), **option 3** offers the best validation: it will print a compile-time error if either the `button_down` [Signal] or the `_on_button_down` [Callable] are not defined. On the other hand, **option 2** only relies on string names and will only be able to validate either names at runtime: it will print a runtime error if `"button_down"` doesn't correspond to a signal, or if `"_on_button_down"` is not a registered method in the object `self`. The main reason for using options 1, 2, or 4 would be if you actually need to use strings (e.g. to connect signals programmatically based on strings read from a configuration file). Otherwise, option 3 is the recommended (and fastest) method.  
         *  **Binding and passing parameters:**  
         *  The syntax to bind parameters is through [method Callable.bind], which returns a copy of the [Callable] with its parameters bound.  
         *  When calling [method emit_signal], the signal parameters can be also passed. The examples below show the relationship between these signal parameters and bound parameters.  
         *    
         */
        connect(signal: StringName, callable: Callable, flags: number /*i64*/ = 0): GodotError
        
        /** Disconnects a [param signal] by name from a given [param callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
        disconnect(signal: StringName, callable: Callable): void
        
        /** Returns `true` if a connection exists between the given [param signal] name and [param callable].  
         *      
         *  **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.  
         */
        is_connected(signal: StringName, callable: Callable): boolean
        
        /** If set to `true`, the object becomes unable to emit signals. As such, [method emit_signal] and signal connections will not work, until it is set to `false`. */
        set_block_signals(enable: boolean): void
        
        /** Returns `true` if the object is blocking its signals from being emitted. See [method set_block_signals]. */
        is_blocking_signals(): boolean
        
        /** Emits the [signal property_list_changed] signal. This is mainly used to refresh the editor, so that the Inspector and editor plugins are properly updated. */
        notify_property_list_changed(): void
        
        /** If set to `true`, allows the object to translate messages with [method tr] and [method tr_n]. Enabled by default. See also [method can_translate_messages]. */
        set_message_translation(enable: boolean): void
        
        /** Returns `true` if the object is allowed to translate messages with [method tr] and [method tr_n]. See also [method set_message_translation]. */
        can_translate_messages(): boolean
        
        /** Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.  
         *  If [method can_translate_messages] is `false`, or no translation is available, this method returns the [param message] without changes. See [method set_message_translation].  
         *  For detailed examples, see [url=$DOCS_URL/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].  
         */
        tr(message: StringName, context: StringName = ''): string
        
        /** Translates a [param message] or [param plural_message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.  
         *  If [method can_translate_messages] is `false`, or no translation is available, this method returns [param message] or [param plural_message], without changes. See [method set_message_translation].  
         *  The [param n] is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.  
         *  For detailed examples, see [url=$DOCS_URL/tutorials/i18n/localization_using_gettext.html]Localization using gettext[/url].  
         *      
         *  **Note:** Negative and [float] numbers may not properly apply to some countable subjects. It's recommended handling these cases with [method tr].  
         */
        tr_n(message: StringName, plural_message: StringName, n: number /*i64*/, context: StringName = ''): string
        
        /** Returns `true` if the [method Node.queue_free] method was called for the object. */
        is_queued_for_deletion(): boolean
        
        /** If this method is called during [constant NOTIFICATION_PREDELETE], this object will reject being freed and will remain allocated. This is mostly an internal function used for error handling to avoid the user from freeing objects when they are not intended to. */
        cancel_free(): void
        
        /** Emitted when the object's script is changed.  
         *      
         *  **Note:** When this signal is emitted, the new script is not initialized yet. If you need to access the new script, defer connections to this signal with [constant CONNECT_DEFERRED].  
         */
        readonly script_changed: Signal //  => void
        
        /** Emitted when [method notify_property_list_changed] is called. */
        readonly property_list_changed: Signal //  => void
    }
    /** Occluder shape resource for use with occlusion culling in [OccluderInstance3D]. */
    class Occluder3D extends Resource {
        /** Returns the occluder shape's vertex positions. */
        get_vertices(): PackedVector3Array
        
        /** Returns the occluder shape's vertex indices. */
        get_indices(): PackedInt32Array
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas. */
    class OccluderInstance3D extends Node3D {
        set_bake_mask(mask: number /*i64*/): void
        get_bake_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_bake_mask_value(layer_number: number /*i64*/): boolean
        set_bake_simplification_distance(simplification_distance: number /*f64*/): void
        get_bake_simplification_distance(): number /*f64*/
        set_occluder(occluder: Occluder3D): void
        get_occluder(): Occluder3D
        _is_editable_3d_polygon(): boolean
        _get_editable_3d_polygon_resource(): Resource
        
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.  
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.  
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].  
         */
        occluder: Occluder3D
        
        /** The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with [i]opaque[/i] materials are taken into account for the occluder baking.  
         *  To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].  
         */
        bake_mask: number /*i64*/
        
        /** The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.  
         *  The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry [i]perceptually[/i] unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.  
         *  Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.  
         *      
         *  **Note:** This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.  
         */
        bake_simplification_distance: number /*f64*/
    }
    class OccluderInstance3DEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class OccluderInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace OccluderPolygon2D {
        enum CullMode {
            /** Culling is disabled. See [member cull_mode]. */
            CULL_DISABLED = 0,
            
            /** Culling is performed in the clockwise direction. See [member cull_mode]. */
            CULL_CLOCKWISE = 1,
            
            /** Culling is performed in the counterclockwise direction. See [member cull_mode]. */
            CULL_COUNTER_CLOCKWISE = 2,
        }
    }
    /** Defines a 2D polygon for LightOccluder2D. */
    class OccluderPolygon2D extends Resource {
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_cull_mode(cull_mode: OccluderPolygon2D.CullMode): void
        get_cull_mode(): OccluderPolygon2D.CullMode
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        
        /** If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction. */
        closed: boolean
        
        /** The culling mode to use. */
        cull_mode: number /*i64*/
        
        /** A [Vector2] array with the index for polygon's vertices positions.  
         *      
         *  **Note:** The returned value is a copy of the underlying array, rather than a reference.  
         */
        polygon: PackedVector2Array
    }
    /** A [MultiplayerPeer] which is always connected and acts as a server. */
    class OfflineMultiplayerPeer extends MultiplayerPeer {
    }
    /** A sequence of Ogg packets. */
    class OggPacketSequence extends Resource {
        set_packet_data(packet_data: Array): void
        get_packet_data(): Array
        set_packet_granule_positions(granule_positions: PackedInt64Array): void
        get_packet_granule_positions(): PackedInt64Array
        set_sampling_rate(sampling_rate: number /*f64*/): void
        get_sampling_rate(): number /*f64*/
        
        /** The length of this stream, in seconds. */
        get_length(): number /*f64*/
        
        /** Contains the raw packets that make up this OggPacketSequence. */
        packet_data: Array
        
        /** Contains the granule positions for each page in this packet sequence. */
        granule_positions: PackedInt64Array
        
        /** Holds sample rate information about this sequence. Must be set by another class that actually understands the codec. */
        sampling_rate: number /*f64*/
    }
    class OggPacketSequencePlayback extends RefCounted {
    }
    namespace OmniLight3D {
        enum ShadowMode {
            /** Shadows are rendered to a dual-paraboloid texture. Faster than [constant SHADOW_CUBE], but lower-quality. */
            SHADOW_DUAL_PARABOLOID = 0,
            
            /** Shadows are rendered to a cubemap. Slower than [constant SHADOW_DUAL_PARABOLOID], but higher-quality. */
            SHADOW_CUBE = 1,
        }
    }
    /** Omnidirectional light, such as a light bulb or a candle. */
    class OmniLight3D extends Light3D {
        set_shadow_mode(mode: OmniLight3D.ShadowMode): void
        get_shadow_mode(): OmniLight3D.ShadowMode
        
        /** See [enum ShadowMode]. */
        omni_shadow_mode: number /*i64*/
    }
    /** Makes the OpenXR API available for GDExtension. */
    class OpenXRAPIExtension extends RefCounted {
        /** Returns the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrInstance.html]XrInstance[/url] created during the initialization of the OpenXR API. */
        get_instance(): number /*i64*/
        
        /** Returns the id of the system, which is a [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSystemId.html]XrSystemId[/url] cast to an integer. */
        get_system_id(): number /*i64*/
        
        /** Returns the OpenXR session, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSession.html]XrSession[/url] cast to an integer. */
        get_session(): number /*i64*/
        
        /** Creates a [Transform3D] from an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrPosef.html]XrPosef[/url]. */
        transform_from_pose(pose: number /*i64*/): Transform3D
        
        /** Returns `true` if the provided [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] (cast to an integer) is successful. Otherwise returns `false` and prints the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] converted to a string, with the specified additional information. */
        xr_result(result: number /*i64*/, format: string, args: Array): boolean
        
        /** Returns `true` if OpenXR is enabled. */
        static openxr_is_enabled(check_run_in_editor: boolean): boolean
        
        /** Returns the function pointer of the OpenXR function with the specified name, cast to an integer. If the function with the given name does not exist, the method returns `0`.  
         *      
         *  **Note:** `openxr/util.h` contains utility macros for acquiring OpenXR functions, e.g. `GDEXTENSION_INIT_XR_FUNC_V(xrCreateAction)`.  
         */
        get_instance_proc_addr(name: string): number /*i64*/
        
        /** Returns an error string for the given [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url]. */
        get_error_string(result: number /*i64*/): string
        
        /** Returns the name of the specified swapchain format. */
        get_swapchain_format_name(swapchain_format: number /*i64*/): string
        
        /** Returns `true` if OpenXR is initialized. */
        is_initialized(): boolean
        
        /** Returns `true` if OpenXR is running ([url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/xrBeginSession.html]xrBeginSession[/url] was successfully called and the swapchains were created). */
        is_running(): boolean
        
        /** Returns the play space, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSpace.html]XrSpace[/url] cast to an integer. */
        get_play_space(): number /*i64*/
        
        /** Returns the timing for the next frame. */
        get_next_frame_time(): number /*i64*/
        
        /** Returns `true` if OpenXR is initialized for rendering with an XR viewport. */
        can_render(): boolean
    }
    namespace OpenXRAction {
        enum ActionType {
            /** This action provides a boolean value. */
            OPENXR_ACTION_BOOL = 0,
            
            /** This action provides a float value between `0.0` and `1.0` for any analog input such as triggers. */
            OPENXR_ACTION_FLOAT = 1,
            
            /** This action provides a [Vector2] value and can be bound to embedded trackpads and joysticks. */
            OPENXR_ACTION_VECTOR2 = 2,
            OPENXR_ACTION_POSE = 3,
        }
    }
    /** An OpenXR action. */
    class OpenXRAction extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_action_type(action_type: OpenXRAction.ActionType): void
        get_action_type(): OpenXRAction.ActionType
        set_toplevel_paths(toplevel_paths: PackedStringArray): void
        get_toplevel_paths(): PackedStringArray
        
        /** The localized description of this action. */
        localized_name: string
        
        /** The type of action. */
        action_type: number /*i64*/
        
        /** A collections of toplevel paths to which this action can be bound. */
        toplevel_paths: PackedStringArray
    }
    /** Collection of [OpenXRActionSet] and [OpenXRInteractionProfile] resources for the OpenXR module. */
    class OpenXRActionMap extends Resource {
        set_action_sets(action_sets: Array): void
        get_action_sets(): Array
        
        /** Retrieve the number of actions sets in our action map. */
        get_action_set_count(): number /*i64*/
        
        /** Retrieve an action set by name. */
        find_action_set(name: string): OpenXRActionSet
        
        /** Retrieve the action set at this index. */
        get_action_set(idx: number /*i64*/): OpenXRActionSet
        
        /** Add an action set. */
        add_action_set(action_set: OpenXRActionSet): void
        
        /** Remove an action set. */
        remove_action_set(action_set: OpenXRActionSet): void
        set_interaction_profiles(interaction_profiles: Array): void
        get_interaction_profiles(): Array
        
        /** Retrieve the number of interaction profiles in our action map. */
        get_interaction_profile_count(): number /*i64*/
        
        /** Find an interaction profile by its name (path). */
        find_interaction_profile(name: string): OpenXRInteractionProfile
        
        /** Get the interaction profile at this index. */
        get_interaction_profile(idx: number /*i64*/): OpenXRInteractionProfile
        
        /** Add an interaction profile. */
        add_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        
        /** Remove an interaction profile. */
        remove_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        
        /** Setup this action set with our default actions. */
        create_default_action_sets(): void
        
        /** Collection of [OpenXRActionSet]s that are part of this action map. */
        action_sets: OpenXRActionSet
        
        /** Collection of [OpenXRInteractionProfile]s that are part of this action map. */
        interaction_profiles: OpenXRInteractionProfile
    }
    /** Collection of [OpenXRAction] resources that make up an action set. */
    class OpenXRActionSet extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        
        /** Retrieve the number of actions in our action set. */
        get_action_count(): number /*i64*/
        set_actions(actions: Array): void
        get_actions(): Array
        
        /** Add an action to this action set. */
        add_action(action: OpenXRAction): void
        
        /** Remove an action from this action set. */
        remove_action(action: OpenXRAction): void
        
        /** The localized name of this action set. */
        localized_name: string
        
        /** The priority for this action set. */
        priority: number /*i64*/
        
        /** Collection of actions for this action set. */
        actions: OpenXRAction
    }
    /** Allows clients to implement OpenXR extensions with GDExtension. */
    class OpenXRExtensionWrapperExtension extends Object {
        /** Returns a [Dictionary] of OpenXR extensions related to this extension. The [Dictionary] should contain the name of the extension, mapped to a `bool *` cast to an integer:  
         *  - If the `bool *` is a `nullptr` this extension is mandatory.  
         *  - If the `bool *` points to a boolean, the boolean will be updated to `true` if the extension is enabled.  
         */
        /* gdvirtual */ _get_requested_extensions(): Dictionary
        
        /** Adds additional data structures when interogating OpenXR system abilities. */
        /* gdvirtual */ _set_system_properties_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when the OpenXR instance is created. */
        /* gdvirtual */ _set_instance_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when the OpenXR session is created. */
        /* gdvirtual */ _set_session_create_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when creating OpenXR swapchains. */
        /* gdvirtual */ _set_swapchain_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Allows extensions to register additional controller metadata. This function is called even when the OpenXR API is not constructed as the metadata needs to be available to the editor.  
         *  Extensions should also provide metadata regardless of whether they are supported on the host system. The controller data is used to setup action maps for users who may have access to the relevant hardware.  
         */
        /* gdvirtual */ _on_register_metadata(): void
        
        /** Called before the OpenXR instance is created. */
        /* gdvirtual */ _on_before_instance_created(): void
        
        /** Called right after the OpenXR instance is created. */
        /* gdvirtual */ _on_instance_created(instance: number /*i64*/): void
        
        /** Called right before the OpenXR instance is destroyed. */
        /* gdvirtual */ _on_instance_destroyed(): void
        
        /** Called right after the OpenXR session is created. */
        /* gdvirtual */ _on_session_created(session: number /*i64*/): void
        
        /** Called as part of the OpenXR process handling. This happens right before general and physics processing steps of the main loop. During this step controller data is queried and made available to game logic. */
        /* gdvirtual */ _on_process(): void
        
        /** Called right before the XR viewports begin their rendering step. */
        /* gdvirtual */ _on_pre_render(): void
        
        /** Called right before the OpenXR session is destroyed. */
        /* gdvirtual */ _on_session_destroyed(): void
        
        /** Called when the OpenXR session state is changed to idle. */
        /* gdvirtual */ _on_state_idle(): void
        
        /** Called when the OpenXR session state is changed to ready. This means OpenXR is ready to set up the session. */
        /* gdvirtual */ _on_state_ready(): void
        
        /** Called when the OpenXR session state is changed to synchronized. OpenXR also returns to this state when the application loses focus. */
        /* gdvirtual */ _on_state_synchronized(): void
        
        /** Called when the OpenXR session state is changed to visible. This means OpenXR is now ready to receive frames. */
        /* gdvirtual */ _on_state_visible(): void
        
        /** Called when the OpenXR session state is changed to focused. This state is the active state when the game runs. */
        /* gdvirtual */ _on_state_focused(): void
        
        /** Called when the OpenXR session state is changed to stopping. */
        /* gdvirtual */ _on_state_stopping(): void
        
        /** Called when the OpenXR session state is changed to loss pending. */
        /* gdvirtual */ _on_state_loss_pending(): void
        
        /** Called when the OpenXR session state is changed to exiting. */
        /* gdvirtual */ _on_state_exiting(): void
        
        /** Called when there is an OpenXR event to process. When implementing, return `true` if the event was handled, return `false` otherwise. */
        /* gdvirtual */ _on_event_polled(event: number /*i64*/): boolean
        
        /** Returns the created [OpenXRAPIExtension], which can be used to access the OpenXR API. */
        get_openxr_api(): OpenXRAPIExtension
        
        /** Registers the extension. This should happen at core module initialization level. */
        register_extension_wrapper(): void
    }
    namespace OpenXRHand {
        enum Hands {
            /** Tracking the player's left hand. */
            HAND_LEFT = 0,
            
            /** Tracking the player's right hand. */
            HAND_RIGHT = 1,
            
            /** Maximum supported hands. */
            HAND_MAX = 2,
        }
        enum MotionRange {
            /** When player grips, hand skeleton will form a full fist. */
            MOTION_RANGE_UNOBSTRUCTED = 0,
            
            /** When player grips, hand skeleton conforms to the controller the player is holding. */
            MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            
            /** Maximum supported motion ranges. */
            MOTION_RANGE_MAX = 2,
        }
    }
    /** Node supporting finger tracking in OpenXR. */
    class OpenXRHand extends Node3D {
        set_hand(hand: OpenXRHand.Hands): void
        get_hand(): OpenXRHand.Hands
        set_hand_skeleton(hand_skeleton: NodePath): void
        get_hand_skeleton(): NodePath
        set_motion_range(motion_range: OpenXRHand.MotionRange): void
        get_motion_range(): OpenXRHand.MotionRange
        
        /** Specifies whether this node tracks the left or right hand of the player. */
        hand: number /*i64*/
        
        /** Set the motion range (if supported) limiting the hand motion. */
        motion_range: number /*i64*/
        
        /** Set a [Skeleton3D] node for which the pose positions will be updated. */
        hand_skeleton: NodePath
    }
    /** Defines a binding between an [OpenXRAction] and an XR input or output. */
    class OpenXRIPBinding extends Resource {
        set_action(action: OpenXRAction): void
        get_action(): OpenXRAction
        
        /** Get the number of input/output paths in this binding. */
        get_path_count(): number /*i64*/
        set_paths(paths: PackedStringArray): void
        get_paths(): PackedStringArray
        
        /** Returns `true` if this input/output path is part of this binding. */
        has_path(path: string): boolean
        
        /** Add an input/output path to this binding. */
        add_path(path: string): void
        
        /** Removes this input/output path from this binding. */
        remove_path(path: string): void
        
        /** [OpenXRAction] that is bound to these paths. */
        action: OpenXRAction
        
        /** Paths that define the inputs or outputs bound on the device. */
        paths: PackedStringArray
    }
    /** Suggested bindings object for OpenXR. */
    class OpenXRInteractionProfile extends Resource {
        set_interaction_profile_path(interaction_profile_path: string): void
        get_interaction_profile_path(): string
        
        /** Get the number of bindings in this interaction profile. */
        get_binding_count(): number /*i64*/
        
        /** Retrieve the binding at this index. */
        get_binding(index: number /*i64*/): OpenXRIPBinding
        set_bindings(bindings: Array): void
        get_bindings(): Array
        
        /** The interaction profile path identifying the XR device. */
        interaction_profile_path: string
        
        /** Action bindings for this interaction profile. */
        bindings: OpenXRIPBinding
    }
    /** Meta class registering supported devices in OpenXR. */
    class OpenXRInteractionProfileMetadata extends Object {
        /** Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps. */
        register_profile_rename(old_name: string, new_name: string): void
        
        /** Registers a top level path to which profiles can be bound. For instance `/user/hand/left` refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register `/user/body/vest`.  
         *  [param display_name] is the name shown to the user. [param openxr_path] is the top level path being registered. [param openxr_extension_name] is optional and ensures the top level path is only used if the specified extension is available/enabled.  
         *  When a top level path ends up being bound by OpenXR, a [XRPositionalTracker] is instantiated to manage the state of the device.  
         */
        register_top_level_path(display_name: string, openxr_path: string, openxr_extension_name: string): void
        
        /** Registers an interaction profile using its OpenXR designation (e.g. `/interaction_profiles/khr/simple_controller` is the profile for OpenXR's simple controller profile).  
         *  [param display_name] is the description shown to the user. [param openxr_path] is the interaction profile path being registered. [param openxr_extension_name] optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.  
         */
        register_interaction_profile(display_name: string, openxr_path: string, openxr_extension_name: string): void
        
        /** Registers an input/output path for the given [param interaction_profile]. The profile should previously have been registered using [method register_interaction_profile]. [param display_name] is the description shown to the user. [param toplevel_path] specifies the bind path this input/output can be bound to (e.g. `/user/hand/left` or `/user/hand/right`). [param openxr_path] is the action input/output being registered (e.g. `/user/hand/left/input/aim/pose`). [param openxr_extension_name] restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. `XR_EXT_palm_pose` that introduces `…/input/palm_ext/pose` input paths). [param action_type] defines the type of input or output provided by OpenXR. */
        register_io_path(interaction_profile: string, display_name: string, toplevel_path: string, openxr_path: string, openxr_extension_name: string, action_type: OpenXRAction.ActionType): void
    }
    namespace OpenXRInterface {
        enum Hand {
            /** Left hand. */
            HAND_LEFT = 0,
            
            /** Right hand. */
            HAND_RIGHT = 1,
            
            /** Maximum value for the hand enum. */
            HAND_MAX = 2,
        }
        enum HandMotionRange {
            HAND_MOTION_RANGE_UNOBSTRUCTED = 0,
            HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            HAND_MOTION_RANGE_MAX = 2,
        }
        enum HandJoints {
            /** Palm joint. */
            HAND_JOINT_PALM = 0,
            
            /** Wrist joint. */
            HAND_JOINT_WRIST = 1,
            
            /** Thumb metacarpal joint. */
            HAND_JOINT_THUMB_METACARPAL = 2,
            
            /** Thumb proximal joint. */
            HAND_JOINT_THUMB_PROXIMAL = 3,
            
            /** Thumb distal joint. */
            HAND_JOINT_THUMB_DISTAL = 4,
            
            /** Thumb tip joint. */
            HAND_JOINT_THUMB_TIP = 5,
            
            /** Index metacarpal joint. */
            HAND_JOINT_INDEX_METACARPAL = 6,
            
            /** Index proximal joint. */
            HAND_JOINT_INDEX_PROXIMAL = 7,
            
            /** Index intermediate joint. */
            HAND_JOINT_INDEX_INTERMEDIATE = 8,
            
            /** Index distal joint. */
            HAND_JOINT_INDEX_DISTAL = 9,
            
            /** Index tip joint. */
            HAND_JOINT_INDEX_TIP = 10,
            
            /** Middle metacarpal joint. */
            HAND_JOINT_MIDDLE_METACARPAL = 11,
            
            /** Middle proximal joint. */
            HAND_JOINT_MIDDLE_PROXIMAL = 12,
            
            /** Middle intermediate joint. */
            HAND_JOINT_MIDDLE_INTERMEDIATE = 13,
            
            /** Middle distal joint. */
            HAND_JOINT_MIDDLE_DISTAL = 14,
            
            /** Middle tip joint. */
            HAND_JOINT_MIDDLE_TIP = 15,
            
            /** Ring metacarpal joint. */
            HAND_JOINT_RING_METACARPAL = 16,
            
            /** Ring proximal joint. */
            HAND_JOINT_RING_PROXIMAL = 17,
            
            /** Ring intermediate joint. */
            HAND_JOINT_RING_INTERMEDIATE = 18,
            
            /** Ring distal joint. */
            HAND_JOINT_RING_DISTAL = 19,
            
            /** Ring tip joint. */
            HAND_JOINT_RING_TIP = 20,
            
            /** Little metacarpal joint. */
            HAND_JOINT_LITTLE_METACARPAL = 21,
            
            /** Little proximal joint. */
            HAND_JOINT_LITTLE_PROXIMAL = 22,
            
            /** Little intermediate joint. */
            HAND_JOINT_LITTLE_INTERMEDIATE = 23,
            
            /** Little distal joint. */
            HAND_JOINT_LITTLE_DISTAL = 24,
            
            /** Little tip joint. */
            HAND_JOINT_LITTLE_TIP = 25,
            
            /** Maximum value for the hand joint enum. */
            HAND_JOINT_MAX = 26,
        }
        enum HandJointFlags {
            /** No flags are set. */
            HAND_JOINT_NONE = 0,
            
            /** If set, the orientation data is valid, otherwise, the orientation data is unreliable and should not be used. */
            HAND_JOINT_ORIENTATION_VALID = 1,
            
            /** If set, the orientation data comes from tracking data, otherwise, the orientation data contains predicted data. */
            HAND_JOINT_ORIENTATION_TRACKED = 2,
            
            /** If set, the positional data is valid, otherwise, the positional data is unreliable and should not be used. */
            HAND_JOINT_POSITION_VALID = 4,
            
            /** If set, the positional data comes from tracking data, otherwise, the positional data contains predicted data. */
            HAND_JOINT_POSITION_TRACKED = 8,
            
            /** If set, our linear velocity data is valid, otherwise, the linear velocity data is unreliable and should not be used. */
            HAND_JOINT_LINEAR_VELOCITY_VALID = 16,
            
            /** If set, our angular velocity data is valid, otherwise, the angular velocity data is unreliable and should not be used. */
            HAND_JOINT_ANGULAR_VELOCITY_VALID = 32,
        }
    }
    /** Our OpenXR interface. */
    class OpenXRInterface extends XRInterface {
        get_display_refresh_rate(): number /*f64*/
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        get_render_target_size_multiplier(): number /*f64*/
        set_render_target_size_multiplier(multiplier: number /*f64*/): void
        
        /** Returns `true` if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.  
         *      
         *  **Note:** This feature is only available on the compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [member Viewport.vrs_mode] to `VRS_XR` on desktop.  
         */
        is_foveation_supported(): boolean
        get_foveation_level(): number /*i64*/
        set_foveation_level(foveation_level: number /*i64*/): void
        get_foveation_dynamic(): boolean
        set_foveation_dynamic(foveation_dynamic: boolean): void
        
        /** Returns `true` if the given action set is active. */
        is_action_set_active(name: string): boolean
        
        /** Sets the given action set as active or inactive. */
        set_action_set_active(name: string, active: boolean): void
        
        /** Returns a list of action sets registered with Godot (loaded from the action map at runtime). */
        get_action_sets(): Array
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        get_available_display_refresh_rates(): Array
        
        /** If handtracking is enabled and motion range is supported, sets the currently configured motion range for [param hand] to [param motion_range]. */
        set_motion_range(hand: OpenXRInterface.Hand, motion_range: OpenXRInterface.HandMotionRange): void
        
        /** If handtracking is enabled and motion range is supported, gets the currently configured motion range for [param hand]. */
        get_motion_range(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        
        /** If handtracking is enabled, returns flags that inform us of the validity of the tracking data. */
        get_hand_joint_flags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        
        /** If handtracking is enabled, returns the rotation of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. */
        get_hand_joint_rotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        
        /** If handtracking is enabled, returns the position of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        get_hand_joint_position(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the radius of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is without worldscale applied! */
        get_hand_joint_radius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): number /*f64*/
        
        /** If handtracking is enabled, returns the linear velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        get_hand_joint_linear_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the angular velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D]! */
        get_hand_joint_angular_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** Returns `true` if OpenXR's hand tracking is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        is_hand_tracking_supported(): boolean
        
        /** Returns the capabilities of the eye gaze interaction extension.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        is_eye_gaze_interaction_supported(): boolean
        
        /** The display refresh rate for the current HMD. Only functional if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        display_refresh_rate: number /*f64*/
        
        /** The render size multiplier for the current HMD. Must be set before the interface has been initialized. */
        render_target_size_multiplier: number /*f64*/
        
        /** Set foveation level from 0 (off) to 3 (high), the interface must be initialized before this is accessible. */
        foveation_level: number /*i64*/
        
        /** Enable dynamic foveation adjustment, the interface must be initialized before this is accessible. If enabled foveation will automatically adjusted between low and [member foveation_level]. */
        foveation_dynamic: boolean
        
        /** Informs our OpenXR session has been started. */
        readonly session_begun: Signal //  => void
        
        /** Informs our OpenXR session is stopping. */
        readonly session_stopping: Signal //  => void
        
        /** Informs our OpenXR session now has focus. */
        readonly session_focussed: Signal //  => void
        
        /** Informs our OpenXR session is now visible (output is being sent to the HMD). */
        readonly session_visible: Signal //  => void
        
        /** Informs the user queued a recenter of the player position. */
        readonly pose_recentered: Signal //  => void
    }
    /** An optimized translation, used by default for CSV Translations. */
    class OptimizedTranslation extends Translation {
        /** Generates and sets an optimized translation from the given [Translation] resource. */
        generate(from: Translation): void
    }
    /** A button that brings up a dropdown with selectable options when pressed. */
    class OptionButton extends Button {
        /** Adds an item, with text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        add_item(label: string, id: number /*i64*/ = -1): void
        
        /** Adds an item, with a [param texture] icon, text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1): void
        
        /** Sets the text of the item at index [param idx]. */
        set_item_text(idx: number /*i64*/, text: string): void
        
        /** Sets the icon of the item at index [param idx]. */
        set_item_icon(idx: number /*i64*/, texture: Texture2D): void
        
        /** Sets whether the item at index [param idx] is disabled.  
         *  Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.  
         */
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        
        /** Sets the ID of the item at index [param idx]. */
        set_item_id(idx: number /*i64*/, id: number /*i64*/): void
        
        /** Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID. */
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        
        /** Sets the tooltip of the item at index [param idx]. */
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        
        /** Returns the text of the item at index [param idx]. */
        get_item_text(idx: number /*i64*/): string
        
        /** Returns the icon of the item at index [param idx]. */
        get_item_icon(idx: number /*i64*/): Texture2D
        
        /** Returns the ID of the item at index [param idx]. */
        get_item_id(idx: number /*i64*/): number /*i64*/
        
        /** Returns the index of the item with the given [param id]. */
        get_item_index(id: number /*i64*/): number /*i64*/
        
        /** Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID. */
        get_item_metadata(idx: number /*i64*/): any
        
        /** Returns the tooltip of the item at index [param idx]. */
        get_item_tooltip(idx: number /*i64*/): string
        
        /** Returns `true` if the item at index [param idx] is disabled. */
        is_item_disabled(idx: number /*i64*/): boolean
        
        /** Returns `true` if the item at index [param idx] is marked as a separator. */
        is_item_separator(idx: number /*i64*/): boolean
        
        /** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
        add_separator(text: string = ''): void
        
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.  
         *  Passing `-1` as the index deselects any currently selected item.  
         */
        select(idx: number /*i64*/): void
        get_selected(): number /*i64*/
        
        /** Returns the ID of the selected item, or `-1` if no item is selected. */
        get_selected_id(): number /*i64*/
        
        /** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
        get_selected_metadata(): any
        
        /** Removes the item at index [param idx]. */
        remove_item(idx: number /*i64*/): void
        _select_int(idx: number /*i64*/): void
        
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): PopupMenu
        
        /** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        show_popup(): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        
        /** Returns `true` if this button contains at least one item which is not disabled, or marked as a separator. */
        has_selectable_items(): boolean
        
        /** Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is `true`, the items will be searched in reverse order.  
         *  Returns `-1` if no item is found.  
         */
        get_selectable_item(from_last: boolean = false): number /*i64*/
        set_fit_to_longest_item(fit: boolean): void
        is_fit_to_longest_item(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        
        /** The number of items to select from. */
        item_count: any /*Items,popup/item_*/
        
        /** The index of the currently selected item, or `-1` if no item is selected. */
        selected: number /*i64*/
        
        /** If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.  
         *      
         *  **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.  
         */
        fit_to_longest_item: boolean
        
        /** If `true`, the currently selected item can be selected again. */
        allow_reselect: boolean
        
        /** Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly item_selected: Signal // index: number /*i64*/ => void
        
        /** Emitted when the user navigates to an item using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input actions. The index of the item selected is passed as argument. */
        readonly item_focused: Signal // index: number /*i64*/ => void
    }
    class OrphanResourcesDialog extends ConfirmationDialog {
    }
    /** Creates packages that can be loaded into a running project. */
    class PCKPacker extends RefCounted {
        /** Creates a new PCK file with the name [param pck_name]. The `.pck` file extension isn't added automatically, so it should be part of [param pck_name] (even though it's not required). */
        pck_start(pck_name: string, alignment: number /*i64*/ = 32, key: string = '0000000000000000000000000000000000000000000000000000000000000000', encrypt_directory: boolean = false): GodotError
        
        /** Adds the [param source_path] file to the current PCK package at the [param pck_path] internal path (should start with `res://`). */
        add_file(pck_path: string, source_path: string, encrypt: boolean = false): GodotError
        
        /** Writes the files specified using all [method add_file] calls since the last flush. If [param verbose] is `true`, a list of files added will be printed to the console for easier debugging. */
        flush(verbose: boolean = false): GodotError
    }
    /** Efficiently packs and serializes [Array] or [Dictionary]. */
    class PackedDataContainer extends Resource {
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
        
        /** Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.  
         *      
         *  **Note:** Subsequent calls to this method will overwrite the existing data.  
         */
        pack(value: any): GodotError
        
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        __data__: PackedByteArray
    }
    /** An internal class used by [PackedDataContainer] to pack nested arrays and dictionaries. */
    class PackedDataContainerRef extends RefCounted {
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
    }
    namespace PackedScene {
        enum GenEditState {
            /** If passed to [method instantiate], blocks edits to the scene state. */
            GEN_EDIT_STATE_DISABLED = 0,
            
            /** If passed to [method instantiate], provides local scene resources to the local scene.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_INSTANCE = 1,
            
            /** If passed to [method instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN = 2,
            
            /** It's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    /** An abstraction of a serialized scene. */
    class PackedScene extends Resource {
        /** Pack will ignore any sub-nodes not owned by given node. See [member Node.owner]. */
        pack(path: Node): GodotError
        
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(edit_state: PackedScene.GenEditState = 0): Node
        
        /** Returns `true` if the scene file has nodes. */
        can_instantiate(): boolean
        _set_bundled_scene(scene: Dictionary): void
        _get_bundled_scene(): Dictionary
        
        /** Returns the [SceneState] representing the scene file contents. */
        get_state(): SceneState
        
        /** A dictionary representation of the scene contents.  
         *  Available keys include "rnames" and "variants" for resources, "node_count", "nodes", "node_paths" for nodes, "editable_instances" for paths to overridden nodes, "conn_count" and "conns" for signal connections, and "version" for the format style of the PackedScene.  
         */
        _bundled: Dictionary
    }
    class PackedSceneEditorPlugin extends EditorPlugin {
    }
    class PackedSceneEditorTranslationParserPlugin extends EditorTranslationParserPlugin {
    }
    /** Abstraction and base class for packet-based protocols. */
    class PacketPeer extends RefCounted {
        /** Gets a Variant. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** Sends a [Variant] as a packet. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        put_var(var_: any, full_objects: boolean = false): GodotError
        
        /** Gets a raw packet. */
        get_packet(): PackedByteArray
        
        /** Sends a raw packet. */
        put_packet(buffer: PackedByteArray): GodotError
        
        /** Returns the error state of the last packet received (via [method get_packet] and [method get_var]). */
        get_packet_error(): GodotError
        
        /** Returns the number of packets currently available in the ring-buffer. */
        get_available_packet_count(): number /*i64*/
        get_encode_buffer_max_size(): number /*i64*/
        set_encode_buffer_max_size(max_size: number /*i64*/): void
        
        /** Maximum buffer size allowed when encoding [Variant]s. Raise this value to support heavier memory allocations.  
         *  The [method put_var] method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [Variant]. If the [Variant] is bigger than [member encode_buffer_max_size], the method will error out with [constant ERR_OUT_OF_MEMORY].  
         */
        encode_buffer_max_size: number /*i64*/
    }
    namespace PacketPeerDTLS {
        enum Status {
            /** A status representing a [PacketPeerDTLS] that is disconnected. */
            STATUS_DISCONNECTED = 0,
            
            /** A status representing a [PacketPeerDTLS] that is currently performing the handshake with a remote peer. */
            STATUS_HANDSHAKING = 1,
            
            /** A status representing a [PacketPeerDTLS] that is connected to a remote peer. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [PacketPeerDTLS] in a generic error state. */
            STATUS_ERROR = 3,
            
            /** An error status that shows a mismatch in the DTLS certificate domain presented by the host and the domain requested for validation. */
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    /** DTLS packet peer. */
    class PacketPeerDTLS extends PacketPeer {
        /** Poll the connection to check for incoming packets. Call this frequently to update the status and keep the connection working. */
        poll(): void
        
        /** Connects a [param packet_peer] beginning the DTLS handshake using the underlying [PacketPeerUDP] which must be connected (see [method PacketPeerUDP.connect_to_host]). You can optionally specify the [param client_options] to be used while verifying the TLS connections. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        connect_to_peer(packet_peer: PacketPeerUDP, hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Returns the status of the connection. See [enum Status] for values. */
        get_status(): PacketPeerDTLS.Status
        
        /** Disconnects this peer, terminating the DTLS session. */
        disconnect_from_peer(): void
    }
    class PacketPeerExtension extends PacketPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
    }
    /** Wrapper to use a PacketPeer over a StreamPeer. */
    class PacketPeerStream extends PacketPeer {
        set_stream_peer(peer: StreamPeer): void
        get_stream_peer(): StreamPeer
        set_input_buffer_max_size(max_size_bytes: number /*i64*/): void
        set_output_buffer_max_size(max_size_bytes: number /*i64*/): void
        get_input_buffer_max_size(): number /*i64*/
        get_output_buffer_max_size(): number /*i64*/
        input_buffer_max_size: number /*i64*/
        output_buffer_max_size: number /*i64*/
        
        /** The wrapped [StreamPeer] object. */
        stream_peer: StreamPeer
    }
    /** UDP packet peer. */
    class PacketPeerUDP extends PacketPeer {
        /** Binds this [PacketPeerUDP] to the specified [param port] and [param bind_address] with a buffer size [param recv_buf_size], allowing it to receive incoming packets.  
         *  If [param bind_address] is set to `"*"` (default), the peer will be bound on all available addresses (both IPv4 and IPv6).  
         *  If [param bind_address] is set to `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the peer will be bound to all available addresses matching that IP type.  
         *  If [param bind_address] is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc), the peer will only be bound to the interface with that addresses (or fail if no interface with the given address exists).  
         */
        bind(port: number /*i64*/, bind_address: string = '*', recv_buf_size: number /*i64*/ = 65536): GodotError
        
        /** Closes the [PacketPeerUDP]'s underlying UDP socket. */
        close(): void
        
        /** Waits for a packet to arrive on the bound address. See [method bind].  
         *      
         *  **Note:** [method wait] can't be interrupted once it has been called. This can be worked around by allowing the other party to send a specific "death pill" packet like this:  
         *    
         */
        wait(): GodotError
        
        /** Returns whether this [PacketPeerUDP] is bound to an address and can receive packets. */
        is_bound(): boolean
        
        /** Calling this method connects this UDP peer to the given [param host]/[param port] pair. UDP is in reality connectionless, so this option only means that incoming packets from different addresses are automatically discarded, and that outgoing packets are always sent to the connected address (future calls to [method set_dest_address] are not allowed). This method does not send any data to the remote peer, to do that, use [method PacketPeer.put_var] or [method PacketPeer.put_packet] as usual. See also [UDPServer].  
         *      
         *  **Note:** Connecting to the remote peer does not help to protect from malicious attacks like IP spoofing, etc. Think about using an encryption technique like TLS or DTLS if you feel like your application is transferring sensitive information.  
         */
        connect_to_host(host: string, port: number /*i64*/): GodotError
        
        /** Returns `true` if the UDP socket is open and has been connected to a remote address. See [method connect_to_host]. */
        is_socket_connected(): boolean
        
        /** Returns the IP of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_ip(): string
        
        /** Returns the port of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_port(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Sets the destination address and port for sending packets and variables. A hostname will be resolved using DNS if needed.  
         *      
         *  **Note:** [method set_broadcast_enabled] must be enabled before sending packets to a broadcast address (e.g. `255.255.255.255`).  
         */
        set_dest_address(host: string, port: number /*i64*/): GodotError
        
        /** Enable or disable sending of broadcast packets (e.g. `set_dest_address("255.255.255.255", 4343)`. This option is disabled by default.  
         *      
         *  **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission and this option to be enabled to receive broadcast packets too.  
         */
        set_broadcast_enabled(enabled: boolean): void
        
        /** Joins the multicast group specified by [param multicast_address] using the interface identified by [param interface_name].  
         *  You can join the same multicast group with multiple interfaces. Use [method IP.get_local_interfaces] to know which are available.  
         *      
         *  **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission for multicast to work.  
         */
        join_multicast_group(multicast_address: string, interface_name: string): GodotError
        
        /** Removes the interface identified by [param interface_name] from the multicast group specified by [param multicast_address]. */
        leave_multicast_group(multicast_address: string, interface_name: string): GodotError
    }
    /** A GUI control that displays a [StyleBox]. */
    class Panel extends Control {
    }
    /** A container that keeps its child controls within the area of a [StyleBox]. */
    class PanelContainer extends Container {
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama. */
    class PanoramaSkyMaterial extends Material {
        set_panorama(texture: Texture2D): void
        get_panorama(): Texture2D
        set_filtering_enabled(enabled: boolean): void
        is_filtering_enabled(): boolean
        
        /** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
        panorama: Texture2D
        
        /** A boolean value to determine if the background texture should be filtered or not. */
        filter: boolean
    }
    class PanoramaSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A node used to create a parallax scrolling background. */
    class ParallaxBackground extends CanvasLayer {
        _camera_moved(_unnamed_arg0: Transform2D, _unnamed_arg1: Vector2): void
        set_scroll_offset(offset: Vector2): void
        get_scroll_offset(): Vector2
        set_scroll_base_offset(offset: Vector2): void
        get_scroll_base_offset(): Vector2
        set_scroll_base_scale(scale: Vector2): void
        get_scroll_base_scale(): Vector2
        set_limit_begin(offset: Vector2): void
        get_limit_begin(): Vector2
        set_limit_end(offset: Vector2): void
        get_limit_end(): Vector2
        set_ignore_camera_zoom(ignore: boolean): void
        is_ignore_camera_zoom(): boolean
        
        /** The ParallaxBackground's scroll value. Calculated automatically when using a [Camera2D], but can be used to manually manage scrolling when no camera is present. */
        scroll_offset: Vector2
        
        /** The base position offset for all [ParallaxLayer] children. */
        scroll_base_offset: Vector2
        
        /** The base motion scale for all [ParallaxLayer] children. */
        scroll_base_scale: Vector2
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than [member scroll_limit_end] to work. */
        scroll_limit_begin: Vector2
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than [member scroll_limit_begin] to work. */
        scroll_limit_end: Vector2
        
        /** If `true`, elements in [ParallaxLayer] child aren't affected by the zoom level of the camera. */
        scroll_ignore_camera_zoom: boolean
    }
    /** A parallax scrolling layer to be used with [ParallaxBackground]. */
    class ParallaxLayer extends Node2D {
        set_motion_scale(scale: Vector2): void
        get_motion_scale(): Vector2
        set_motion_offset(offset: Vector2): void
        get_motion_offset(): Vector2
        set_mirroring(mirror: Vector2): void
        get_mirroring(): Vector2
        
        /** Multiplies the ParallaxLayer's motion. If an axis is set to `0`, it will not scroll. */
        motion_scale: Vector2
        
        /** The ParallaxLayer's offset relative to the parent ParallaxBackground's [member ParallaxBackground.scroll_offset]. */
        motion_offset: Vector2
        
        /** The interval, in pixels, at which the [ParallaxLayer] is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to `0`, the [ParallaxLayer] will be drawn only once along that direction.  
         *      
         *  **Note:** If you want the repetition to pixel-perfect match a [Texture2D] displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [Sprite2D] scaled to `0.5` to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to `Vector2(300, 0)`.  
         *      
         *  **Note:** If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [ParallaxBackground]'s position, not the layer's own position. So, if you use mirroring, **do not** change the [ParallaxLayer] position relative to its parent. Instead, if you need to adjust the background's position, set the [member CanvasLayer.offset] property in the parent [ParallaxBackground].  
         *      
         *  **Note:** Despite the name, the layer will not be mirrored, it will only be repeated.  
         */
        motion_mirroring: Vector2
    }
    namespace ParticleProcessMaterial {
        enum Parameter {
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set initial velocity properties. */
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angular velocity properties. */
            PARAM_ANGULAR_VELOCITY = 1,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set orbital velocity properties. */
            PARAM_ORBIT_VELOCITY = 2,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set linear acceleration properties. */
            PARAM_LINEAR_ACCEL = 3,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial acceleration properties. */
            PARAM_RADIAL_ACCEL = 4,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set tangential acceleration properties. */
            PARAM_TANGENTIAL_ACCEL = 5,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set damping properties. */
            PARAM_DAMPING = 6,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angle properties. */
            PARAM_ANGLE = 7,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale properties. */
            PARAM_SCALE = 8,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set hue variation properties. */
            PARAM_HUE_VARIATION = 9,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation speed properties. */
            PARAM_ANIM_SPEED = 10,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation offset properties. */
            PARAM_ANIM_OFFSET = 11,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial velocity properties. */
            PARAM_RADIAL_VELOCITY = 15,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set directional velocity properties. */
            PARAM_DIRECTIONAL_VELOCITY = 16,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale over velocity properties. */
            PARAM_SCALE_OVER_VELOCITY = 17,
            
            /** Represents the size of the [enum Parameter] enum. */
            PARAM_MAX = 18,
            
            /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum und maximum influence on each particles velocity. */
            PARAM_TURB_VEL_INFLUENCE = 13,
            
            /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum and maximum displacement of the particles spawn position. */
            PARAM_TURB_INIT_DISPLACEMENT = 14,
            
            /** Use with [method set_param_texture] to set the turbulence influence over the particles life time. */
            PARAM_TURB_INFLUENCE_OVER_LIFE = 12,
        }
        enum ParticleFlags {
            /** Use with [method set_particle_flag] to set [member particle_flag_align_y]. */
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_rotate_y]. */
            PARTICLE_FLAG_ROTATE_Y = 1,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_disable_z]. */
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_DAMPING_AS_FRICTION = 3,
            
            /** Represents the size of the [enum ParticleFlags] enum. */
            PARTICLE_FLAG_MAX = 4,
        }
        enum EmissionShape {
            /** All particles will be emitted from a single point. */
            EMISSION_SHAPE_POINT = 0,
            
            /** Particles will be emitted in the volume of a sphere. */
            EMISSION_SHAPE_SPHERE = 1,
            
            /** Particles will be emitted on the surface of a sphere. */
            EMISSION_SHAPE_SPHERE_SURFACE = 2,
            
            /** Particles will be emitted in the volume of a box. */
            EMISSION_SHAPE_BOX = 3,
            
            /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle color will be modulated by [member emission_color_texture]. */
            EMISSION_SHAPE_POINTS = 4,
            
            /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle velocity and rotation will be set based on [member emission_normal_texture]. Particle color will be modulated by [member emission_color_texture]. */
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            
            /** Particles will be emitted in a ring or cylinder. */
            EMISSION_SHAPE_RING = 6,
            
            /** Represents the size of the [enum EmissionShape] enum. */
            EMISSION_SHAPE_MAX = 7,
        }
        enum SubEmitterMode {
            SUB_EMITTER_DISABLED = 0,
            SUB_EMITTER_CONSTANT = 1,
            SUB_EMITTER_AT_END = 2,
            SUB_EMITTER_AT_COLLISION = 3,
            
            /** Represents the size of the [enum SubEmitterMode] enum. */
            SUB_EMITTER_MAX = 4,
        }
        enum CollisionMode {
            /** No collision for particles. Particles will go through [GPUParticlesCollision3D] nodes. */
            COLLISION_DISABLED = 0,
            
            /** [RigidBody3D]-style collision for particles using [GPUParticlesCollision3D] nodes. */
            COLLISION_RIGID = 1,
            
            /** Hide particles instantly when colliding with a [GPUParticlesCollision3D] node. This can be combined with a subemitter that uses the [constant COLLISION_RIGID] collision mode to "replace" the parent particle with the subemitter on impact. */
            COLLISION_HIDE_ON_CONTACT = 2,
            
            /** Represents the size of the [enum CollisionMode] enum. */
            COLLISION_MAX = 3,
        }
    }
    /** Holds a particle configuration for [GPUParticles2D] or [GPUParticles3D] nodes. */
    class ParticleProcessMaterial extends Material {
        set_direction(degrees: Vector3): void
        get_direction(): Vector3
        set_inherit_velocity_ratio(ratio: number /*f64*/): void
        get_inherit_velocity_ratio(): number /*f64*/
        set_spread(degrees: number /*f64*/): void
        get_spread(): number /*f64*/
        set_flatness(amount: number /*f64*/): void
        get_flatness(): number /*f64*/
        
        /** Sets the minimum value range for the given parameter. */
        set_param_min(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: ParticleProcessMaterial.Parameter): number /*f64*/
        
        /** Sets the maximum value range for the given parameter. */
        set_param_max(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: ParticleProcessMaterial.Parameter): number /*f64*/
        
        /** Sets the [Texture2D] for the specified [enum Parameter]. */
        set_param_texture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        
        /** Returns the [Texture2D] used by the specified parameter. */
        get_param_texture(param: ParticleProcessMaterial.Parameter): Texture2D
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Texture2D): void
        get_color_ramp(): Texture2D
        set_alpha_curve(curve: Texture2D): void
        get_alpha_curve(): Texture2D
        set_emission_curve(curve: Texture2D): void
        get_emission_curve(): Texture2D
        set_color_initial_ramp(ramp: Texture2D): void
        get_color_initial_ramp(): Texture2D
        set_velocity_limit_curve(curve: Texture2D): void
        get_velocity_limit_curve(): Texture2D
        
        /** If `true`, enables the specified particle flag. See [enum ParticleFlags] for options. */
        set_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        
        /** Returns `true` if the specified particle flag is enabled. See [enum ParticleFlags] for options. */
        get_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags): boolean
        set_velocity_pivot(pivot: Vector3): void
        get_velocity_pivot(): Vector3
        set_emission_shape(shape: ParticleProcessMaterial.EmissionShape): void
        get_emission_shape(): ParticleProcessMaterial.EmissionShape
        set_emission_sphere_radius(radius: number /*f64*/): void
        get_emission_sphere_radius(): number /*f64*/
        set_emission_box_extents(extents: Vector3): void
        get_emission_box_extents(): Vector3
        set_emission_point_texture(texture: Texture2D): void
        get_emission_point_texture(): Texture2D
        set_emission_normal_texture(texture: Texture2D): void
        get_emission_normal_texture(): Texture2D
        set_emission_color_texture(texture: Texture2D): void
        get_emission_color_texture(): Texture2D
        set_emission_point_count(point_count: number /*i64*/): void
        get_emission_point_count(): number /*i64*/
        set_emission_ring_axis(axis: Vector3): void
        get_emission_ring_axis(): Vector3
        set_emission_ring_height(height: number /*f64*/): void
        get_emission_ring_height(): number /*f64*/
        set_emission_ring_radius(radius: number /*f64*/): void
        get_emission_ring_radius(): number /*f64*/
        set_emission_ring_inner_radius(inner_radius: number /*f64*/): void
        get_emission_ring_inner_radius(): number /*f64*/
        set_emission_shape_offset(emission_shape_offset: Vector3): void
        get_emission_shape_offset(): Vector3
        set_emission_shape_scale(emission_shape_scale: Vector3): void
        get_emission_shape_scale(): Vector3
        get_turbulence_enabled(): boolean
        set_turbulence_enabled(turbulence_enabled: boolean): void
        get_turbulence_noise_strength(): number /*f64*/
        set_turbulence_noise_strength(turbulence_noise_strength: number /*f64*/): void
        get_turbulence_noise_scale(): number /*f64*/
        set_turbulence_noise_scale(turbulence_noise_scale: number /*f64*/): void
        get_turbulence_noise_speed_random(): number /*f64*/
        set_turbulence_noise_speed_random(turbulence_noise_speed_random: number /*f64*/): void
        get_turbulence_noise_speed(): Vector3
        set_turbulence_noise_speed(turbulence_noise_speed: Vector3): void
        get_gravity(): Vector3
        set_gravity(accel_vec: Vector3): void
        set_lifetime_randomness(randomness: number /*f64*/): void
        get_lifetime_randomness(): number /*f64*/
        get_sub_emitter_mode(): ParticleProcessMaterial.SubEmitterMode
        set_sub_emitter_mode(mode: ParticleProcessMaterial.SubEmitterMode): void
        get_sub_emitter_frequency(): number /*f64*/
        set_sub_emitter_frequency(hz: number /*f64*/): void
        get_sub_emitter_amount_at_end(): number /*i64*/
        set_sub_emitter_amount_at_end(amount: number /*i64*/): void
        get_sub_emitter_amount_at_collision(): number /*i64*/
        set_sub_emitter_amount_at_collision(amount: number /*i64*/): void
        get_sub_emitter_keep_velocity(): boolean
        set_sub_emitter_keep_velocity(enable: boolean): void
        set_attractor_interaction_enabled(enabled: boolean): void
        is_attractor_interaction_enabled(): boolean
        set_collision_mode(mode: ParticleProcessMaterial.CollisionMode): void
        get_collision_mode(): ParticleProcessMaterial.CollisionMode
        set_collision_use_scale(radius: boolean): void
        is_collision_using_scale(): boolean
        set_collision_friction(friction: number /*f64*/): void
        get_collision_friction(): number /*f64*/
        set_collision_bounce(bounce: number /*f64*/): void
        get_collision_bounce(): number /*f64*/
        
        /** Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a [member lifetime_randomness] of `0.4` scales the lifetime between `0.6` to `1.0` of its original value. */
        lifetime_randomness: number /*f64*/
        
        /** The offset for the [member emission_shape], in local space. */
        emission_shape_offset: Vector3
        
        /** The scale of the [member emission_shape], in local space. */
        emission_shape_scale: Vector3
        
        /** Particles will be emitted inside this region. Use [enum EmissionShape] constants for values. */
        emission_shape: number /*i64*/
        
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        emission_sphere_radius: number /*f64*/
        
        /** The box's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
        emission_box_extents: Vector3
        
        /** Particles will be emitted at positions determined by sampling this texture at a random position. Used with [constant EMISSION_SHAPE_POINTS] and [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        emission_point_texture: Texture2D
        
        /** Particle velocity and rotation will be set by sampling this texture at the same point as the [member emission_point_texture]. Used only in [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        emission_normal_texture: Texture2D
        
        /** Particle color will be modulated by color determined by sampling this texture at the same point as the [member emission_point_texture].  
         *      
         *  **Note:** [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_color_texture] will have no visible effect.  
         */
        emission_color_texture: Texture2D
        
        /** The number of emission points if [member emission_shape] is set to [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_point_count: number /*i64*/
        
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_axis: Vector3
        
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_height: number /*f64*/
        
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_radius: number /*f64*/
        
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_inner_radius: number /*f64*/
        
        /** Percentage of the velocity of the respective [GPUParticles2D] or [GPUParticles3D] inherited by each particle when spawning. */
        inherit_velocity_ratio: number /*f64*/
        
        /** A pivot point used to calculate radial and orbital velocity of particles. */
        velocity_pivot: Vector3
        
        /** Unit vector specifying the particles' emission direction. */
        direction: Vector3
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. */
        spread: number /*f64*/
        
        /** Amount of [member spread] along the Y axis. */
        flatness: number /*f64*/
        
        /** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
        velocity_limit_curve: CurveTexture
        
        /** Gravity applied to every particle. */
        gravity: Vector3
        
        /** If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
        attractor_interaction_enabled: boolean
        
        /** Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        color: Color
        
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).  
         *      
         *  **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.  
         */
        color_ramp: GradientTexture1D
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).  
         *      
         *  **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.  
         */
        color_initial_ramp: GradientTexture1D
        
        /** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime. */
        alpha_curve: CurveTexture
        
        /** Each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** This property won't have a visible effect unless the render material is marked as unshaded.  
         */
        emission_curve: CurveTexture
        
        /** If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.  
         *      
         *  **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.  
         */
        turbulence_enabled: boolean
        
        /** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
        turbulence_noise_strength: number /*f64*/
        
        /** This value controls the overall scale/frequency of the turbulence noise pattern.  
         *  A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.  
         */
        turbulence_noise_scale: number /*f64*/
        
        /** A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.  
         *  The default value of `Vector3(0, 0, 0)` turns off the scrolling.  
         */
        turbulence_noise_speed: Vector3
        
        /** The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.  
         *  A value of 0.0 will result in a fixed pattern.  
         */
        turbulence_noise_speed_random: number /*f64*/
        
        /** The particles' collision mode.  
         *      
         *  **Note:** 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].  
         *      
         *  **Note:** 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.  
         */
        collision_mode: number /*i64*/
        
        /** The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_friction: number /*f64*/
        
        /** The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_bounce: number /*f64*/
        
        /** If `true`, [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
        collision_use_scale: boolean
        
        /** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
        sub_emitter_mode: number /*i64*/
        
        /** The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_frequency: number /*f64*/
        
        /** The amount of particles to spawn from the subemitter node when the particle expires.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_amount_at_end: number /*i64*/
        
        /** The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_amount_at_collision: number /*i64*/
        
        /** If `true`, the subemitter inherits the parent particle's velocity when it spawns. */
        sub_emitter_keep_velocity: boolean
    }
    class ParticleProcessMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow. */
    class Path2D extends Node2D {
        set_curve(curve: Curve2D): void
        get_curve(): Curve2D
        
        /** A [Curve2D] describing the path. */
        curve: Curve2D
    }
    class Path2DEditor extends HBoxContainer {
    }
    class Path2DEditorPlugin extends EditorPlugin {
    }
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow. */
    class Path3D extends Node3D {
        set_curve(curve: Curve3D): void
        get_curve(): Curve3D
        
        /** A [Curve3D] describing the path. */
        curve: Curve3D
        
        /** Emitted when the [member curve] changes. */
        readonly curve_changed: Signal //  => void
    }
    class Path3DEditorPlugin extends EditorPlugin {
    }
    class Path3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Point sampler for a [Path2D]. */
    class PathFollow2D extends Node2D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotates(enabled: boolean): void
        is_rotating(): boolean
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        
        /** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
        progress: number /*f64*/
        
        /** The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length. */
        progress_ratio: number /*f64*/
        
        /** The node's offset along the curve. */
        h_offset: number /*f64*/
        
        /** The node's offset perpendicular to the curve. */
        v_offset: number /*f64*/
        
        /** If `true`, this node rotates to follow the path, with the +X direction facing forward on the path. */
        rotates: boolean
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        cubic_interp: boolean
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
    }
    namespace PathFollow3D {
        enum RotationMode {
            /** Forbids the PathFollow3D to rotate. */
            ROTATION_NONE = 0,
            
            /** Allows the PathFollow3D to rotate in the Y axis only. */
            ROTATION_Y = 1,
            
            /** Allows the PathFollow3D to rotate in both the X, and Y axes. */
            ROTATION_XY = 2,
            
            /** Allows the PathFollow3D to rotate in any axis. */
            ROTATION_XYZ = 3,
            
            /** Uses the up vector information in a [Curve3D] to enforce orientation. This rotation mode requires the [Path3D]'s [member Curve3D.up_vector_enabled] property to be set to `true`. */
            ROTATION_ORIENTED = 4,
        }
    }
    /** Point sampler for a [Path3D]. */
    class PathFollow3D extends Node3D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotation_mode(rotation_mode: PathFollow3D.RotationMode): void
        get_rotation_mode(): PathFollow3D.RotationMode
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_use_model_front(enabled: boolean): void
        is_using_model_front(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_tilt_enabled(enabled: boolean): void
        is_tilt_enabled(): boolean
        
        /** Correct the [param transform]. [param rotation_mode] implicitly specifies how posture (forward, up and sideway direction) is calculated. */
        static correct_posture(transform: Transform3D, rotation_mode: PathFollow3D.RotationMode): Transform3D
        
        /** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
        progress: number /*f64*/
        
        /** The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length. */
        progress_ratio: number /*f64*/
        
        /** The node's offset along the curve. */
        h_offset: number /*f64*/
        
        /** The node's offset perpendicular to the curve. */
        v_offset: number /*f64*/
        
        /** Allows or forbids rotation on one or more axes, depending on the [enum RotationMode] constants being used. */
        rotation_mode: number /*i64*/
        
        /** If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
        use_model_front: boolean
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        cubic_interp: boolean
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
        
        /** If `true`, the tilt property of [Curve3D] takes effect. */
        tilt_enabled: boolean
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics. */
    class PhysicalBone2D extends RigidBody2D {
        /** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
        get_joint(): Joint2D
        get_auto_configure_joint(): boolean
        set_auto_configure_joint(auto_configure_joint: boolean): void
        set_simulate_physics(simulate_physics: boolean): void
        get_simulate_physics(): boolean
        
        /** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When `true`, the PhysicalBone2D node is using physics. */
        is_simulating_physics(): boolean
        set_bone2d_nodepath(nodepath: NodePath): void
        get_bone2d_nodepath(): NodePath
        set_bone2d_index(bone_index: number /*i64*/): void
        get_bone2d_index(): number /*i64*/
        set_follow_bone_when_simulating(follow_bone: boolean): void
        get_follow_bone_when_simulating(): boolean
        
        /** The [NodePath] to the [Bone2D] that this [PhysicalBone2D] should simulate. */
        bone2d_nodepath: NodePath
        
        /** The index of the [Bone2D] that this [PhysicalBone2D] should simulate. */
        bone2d_index: number /*i64*/
        
        /** If `true`, the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
        auto_configure_joint: boolean
        
        /** If `true`, the [PhysicalBone2D] will start simulating using physics. If `false`, the [PhysicalBone2D] will follow the transform of the [Bone2D] node.  
         *      
         *  **Note:** To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.  
         */
        simulate_physics: boolean
        
        /** If `true`, the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
        follow_bone_when_simulating: boolean
    }
    namespace PhysicalBone3D {
        enum DampMode {
            /** In this mode, the body's damping value is added to any value set in areas or the default value. */
            DAMP_MODE_COMBINE = 0,
            
            /** In this mode, the body's damping value replaces any value set in areas or the default value. */
            DAMP_MODE_REPLACE = 1,
        }
        enum JointType {
            JOINT_TYPE_NONE = 0,
            JOINT_TYPE_PIN = 1,
            JOINT_TYPE_CONE = 2,
            JOINT_TYPE_HINGE = 3,
            JOINT_TYPE_SLIDER = 4,
            JOINT_TYPE_6DOF = 5,
        }
    }
    /** A physics body used to make bones in a [Skeleton3D] react to physics. */
    class PhysicalBone3D extends PhysicsBody3D {
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        apply_central_impulse(impulse: Vector3): void
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        set_joint_type(joint_type: PhysicalBone3D.JointType): void
        get_joint_type(): PhysicalBone3D.JointType
        set_joint_offset(offset: Transform3D): void
        get_joint_offset(): Transform3D
        set_joint_rotation(euler: Vector3): void
        get_joint_rotation(): Vector3
        set_body_offset(offset: Transform3D): void
        get_body_offset(): Transform3D
        get_simulate_physics(): boolean
        is_simulating_physics(): boolean
        get_bone_id(): number /*i64*/
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_friction(friction: number /*f64*/): void
        get_friction(): number /*f64*/
        set_bounce(bounce: number /*f64*/): void
        get_bounce(): number /*f64*/
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: PhysicalBone3D.DampMode): void
        get_linear_damp_mode(): PhysicalBone3D.DampMode
        set_angular_damp_mode(angular_damp_mode: PhysicalBone3D.DampMode): void
        get_angular_damp_mode(): PhysicalBone3D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_velocity(linear_velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        
        /** Sets the joint type. See [enum JointType] for possible values. */
        joint_type: number /*i64*/
        
        /** Sets the joint's transform. */
        joint_offset: Transform3D
        
        /** Sets the joint's rotation in radians. */
        joint_rotation: Vector3
        
        /** Sets the body's transform. */
        body_offset: Transform3D
        
        /** The body's mass. */
        mass: number /*f64*/
        
        /** The body's friction, from `0` (frictionless) to `1` (max friction). */
        friction: number /*f64*/
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicalBone3D] that preserves all its energy over time, set [member bounce] to `1.0`, [member linear_damp_mode] to [constant DAMP_MODE_REPLACE], [member linear_damp] to `0.0`, [member angular_damp_mode] to [constant DAMP_MODE_REPLACE], and [member angular_damp] to `0.0`.  
         */
        bounce: number /*f64*/
        
        /** This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce the body's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        gravity_scale: number /*f64*/
        
        /** If `true`, internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        custom_integrator: boolean
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        linear_damp: number /*f64*/
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        angular_damp: number /*f64*/
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector3
        
        /** The PhysicalBone3D's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: Vector3
        
        /** If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
        can_sleep: boolean
    }
    class PhysicalBone3DEditorPlugin extends EditorPlugin {
    }
    class PhysicalBone3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties. */
    class PhysicalSkyMaterial extends Material {
        set_rayleigh_coefficient(rayleigh: number /*f64*/): void
        get_rayleigh_coefficient(): number /*f64*/
        set_rayleigh_color(color: Color): void
        get_rayleigh_color(): Color
        set_mie_coefficient(mie: number /*f64*/): void
        get_mie_coefficient(): number /*f64*/
        set_mie_eccentricity(eccentricity: number /*f64*/): void
        get_mie_eccentricity(): number /*f64*/
        set_mie_color(color: Color): void
        get_mie_color(): Color
        set_turbidity(turbidity: number /*f64*/): void
        get_turbidity(): number /*f64*/
        set_sun_disk_scale(scale: number /*f64*/): void
        get_sun_disk_scale(): number /*f64*/
        set_ground_color(color: Color): void
        get_ground_color(): Color
        set_energy_multiplier(multiplier: number /*f64*/): void
        get_energy_multiplier(): number /*f64*/
        set_use_debanding(use_debanding: boolean): void
        get_use_debanding(): boolean
        set_night_sky(night_sky: Texture2D): void
        get_night_sky(): Texture2D
        
        /** Controls the strength of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky. */
        rayleigh_coefficient: number /*f64*/
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red [Color] results in a Mars-looking atmosphere with a corresponding blue sunset. */
        rayleigh_color: Color
        
        /** Controls the strength of [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon. */
        mie_coefficient: number /*f64*/
        
        /** Controls the direction of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url]. A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards. */
        mie_eccentricity: number /*f64*/
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] effect. While not physically accurate, this allows for the creation of alien-looking planets. */
        mie_color: Color
        
        /** Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere. */
        turbidity: number /*f64*/
        
        /** Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth. */
        sun_disk_scale: number /*f64*/
        
        /** Modulates the [Color] on the bottom half of the sky to represent the ground. */
        ground_color: Color
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        energy_multiplier: number /*f64*/
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        use_debanding: boolean
        
        /** [Texture2D] for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day. */
        night_sky: Texture2D
    }
    class PhysicalSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Abstract base class for 2D game objects affected by physics. */
    class PhysicsBody2D extends CollisionObject2D {
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         */
        move_and_collide(motion: Vector2, test_only: boolean = false, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): KinematicCollision2D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would [i]touch[/i] any other bodies.  
         */
        test_move(from: Transform2D, motion: Vector2, collision: KinematicCollision2D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        get_collision_exceptions(): Array
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        add_collision_exception_with(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        remove_collision_exception_with(body: Node): void
    }
}
