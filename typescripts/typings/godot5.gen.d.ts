// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class SceneTileProxyObject extends Object {
        readonly changed: Signal // what: string => void
    }
    namespace SceneTree {
        enum GroupCallFlags {
            /** Call a group with no flags (default). */
            GROUP_CALL_DEFAULT = 0,
            
            /** Call a group in reverse scene order. */
            GROUP_CALL_REVERSE = 1,
            
            /** Call a group at the end of the current frame (process or physics). */
            GROUP_CALL_DEFERRED = 2,
            
            /** Call a group only once even if the call is executed many times.  
             *      
             *  **Note:** Arguments are not taken into account when deciding whether the call is unique or not. Therefore when the same method is called with different arguments, only the first call will be performed.  
             */
            GROUP_CALL_UNIQUE = 4,
        }
    }
    /** Manages the game loop via a hierarchy of nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenetree.html  
     */
    class SceneTree extends MainLoop {
        get_root(): Window
        
        /** Returns `true` if the given group exists.  
         *  A group exists if any [Node] in the tree belongs to it (see [method Node.add_to_group]). Groups without nodes are removed automatically.  
         */
        has_group(name: StringName): boolean
        is_auto_accept_quit(): boolean
        set_auto_accept_quit(enabled: boolean): void
        is_quit_on_go_back(): boolean
        set_quit_on_go_back(enabled: boolean): void
        set_debug_collisions_hint(enable: boolean): void
        is_debugging_collisions_hint(): boolean
        set_debug_paths_hint(enable: boolean): void
        is_debugging_paths_hint(): boolean
        set_debug_navigation_hint(enable: boolean): void
        is_debugging_navigation_hint(): boolean
        set_edited_scene_root(scene: Node): void
        get_edited_scene_root(): Node
        set_pause(enable: boolean): void
        is_paused(): boolean
        
        /** Returns a [SceneTreeTimer] which will emit [signal SceneTreeTimer.timeout] after the given time in seconds elapsed in this [SceneTree].  
         *  If [param process_always] is set to `false`, pausing the [SceneTree] will also pause the timer.  
         *  If [param process_in_physics] is set to `true`, will update the [SceneTreeTimer] during the physics frame instead of the process frame (fixed framerate processing).  
         *  If [param ignore_time_scale] is set to `true`, will ignore [member Engine.time_scale] and update the [SceneTreeTimer] with the actual frame delta.  
         *  Commonly used to create a one-shot delay timer as in the following example:  
         *    
         *  The timer will be automatically freed after its time elapses.  
         *      
         *  **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the timer (or [method Node._physics_process] if [param process_in_physics] is set to `true`).  
         */
        create_timer(time_sec: number /*f64*/, process_always: boolean = true, process_in_physics: boolean = false, ignore_time_scale: boolean = false): SceneTreeTimer
        
        /** Creates and returns a new [Tween]. The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).  
         *      
         *  **Note:** When creating a [Tween] using this method, the [Tween] will not be tied to the [Node] that called it. It will continue to animate even if the [Node] is freed, but it will automatically finish if there's nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].  
         */
        create_tween(): Tween
        
        /** Returns an array of currently existing [Tween]s in the [SceneTree] (both running and paused). */
        get_processed_tweens(): Array
        
        /** Returns the number of nodes in this [SceneTree]. */
        get_node_count(): number /*i64*/
        
        /** Returns the current frame number, i.e. the total frame count since the application started. */
        get_frame(): number /*i64*/
        
        /** Quits the application at the end of the current iteration. Argument [param exit_code] can optionally be given (defaulting to 0) to customize the exit status code.  
         *  By convention, an exit code of `0` indicates success whereas a non-zero exit code indicates an error.  
         *  For portability reasons, the exit code should be set between 0 and 125 (inclusive).  
         *      
         *  **Note:** On iOS this method doesn't work. Instead, as recommended by the iOS Human Interface Guidelines, the user is expected to close apps via the Home button.  
         */
        quit(exit_code: number /*i64*/ = 0): void
        
        /** Queues the given object for deletion, delaying the call to [method Object.free] to the end of the current frame. */
        queue_delete(obj: Object): void
        
        /** Calls [param method] on each member of the given group, respecting the given [enum GroupCallFlags]. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.  
         *    
         *      
         *  **Note:** Group call flags are used to control the method calling behavior. By default, methods will be called immediately in a way similar to [method call_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param flags] argument, methods will be called at the end of the frame in a way similar to [method Object.set_deferred].  
         */
        call_group_flags(flags: number /*i64*/, group: StringName, method: StringName, ...vargargs: any[]): void
        
        /** Sends the given notification to all members of the [param group], respecting the given [enum GroupCallFlags].  
         *      
         *  **Note:** Group call flags are used to control the notification sending behavior. By default, notifications will be sent immediately in a way similar to [method notify_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, notifications will be sent at the end of the current frame in a way similar to using `Object.call_deferred("notification", ...)`.  
         */
        notify_group_flags(call_flags: number /*i64*/, group: StringName, notification: number /*i64*/): void
        
        /** Sets the given [param property] to [param value] on all members of the given group, respecting the given [enum GroupCallFlags].  
         *      
         *  **Note:** Group call flags are used to control the property setting behavior. By default, properties will be set immediately in a way similar to [method set_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, properties will be set at the end of the frame in a way similar to [method Object.call_deferred].  
         */
        set_group_flags(call_flags: number /*i64*/, group: StringName, property: string, value: any): void
        
        /** Calls [param method] on each member of the given group. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.  
         *      
         *  **Note:** [method call_group] will call methods immediately on all members at once, which can cause stuttering if an expensive method is called on lots of members.  
         */
        call_group(group: StringName, method: StringName, ...vargargs: any[]): void
        
        /** Sends the given notification to all members of the [param group].  
         *      
         *  **Note:** [method notify_group] will immediately notify all members at once, which can cause stuttering if an expensive method is called as a result of sending the notification to lots of members.  
         */
        notify_group(group: StringName, notification: number /*i64*/): void
        
        /** Sets the given [param property] to [param value] on all members of the given group.  
         *      
         *  **Note:** [method set_group] will set the property immediately on all members at once, which can cause stuttering if a property with an expensive setter is set on lots of members.  
         */
        set_group(group: StringName, property: string, value: any): void
        
        /** Returns a list of all nodes assigned to the given group. */
        get_nodes_in_group(group: StringName): Array
        
        /** Returns the first node in the specified group, or `null` if the group is empty or does not exist. */
        get_first_node_in_group(group: StringName): Node
        set_current_scene(child_node: Node): void
        get_current_scene(): Node
        
        /** Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.  
         *  Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.  
         *      
         *  **Note:** See [method change_scene_to_packed] for details on the order of operations.  
         */
        change_scene_to_file(path: string): GodotError
        
        /** Changes the running scene to a new instance of the given [PackedScene] (which must be valid).  
         *  Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.  
         *      
         *  **Note:** Operations happen in the following order when [method change_scene_to_packed] is called:  
         *  1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return `null`. [member current_scene] will be `null`, too, because the new scene is not available yet.  
         *  2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [method Node.get_tree] and [member current_scene] will be back to working as usual.  
         *  This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [method Node.queue_free].  
         */
        change_scene_to_packed(packed_scene: PackedScene): GodotError
        
        /** Reloads the currently active scene.  
         *  Returns [constant OK] on success, [constant ERR_UNCONFIGURED] if no [member current_scene] was defined yet, [constant ERR_CANT_OPEN] if [member current_scene] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if the scene cannot be instantiated.  
         */
        reload_current_scene(): GodotError
        
        /** If a current scene is loaded, calling this method will unload it. */
        unload_current_scene(): void
        
        /** Sets a custom [MultiplayerAPI] with the given [param root_path] (controlling also the relative subpaths), or override the default one if [param root_path] is empty.  
         *      
         *  **Note:** No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.  
         */
        set_multiplayer(multiplayer: MultiplayerAPI, root_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        
        /** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
        get_multiplayer(for_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): MultiplayerAPI
        set_multiplayer_poll_enabled(enabled: boolean): void
        is_multiplayer_poll_enabled(): boolean
        
        /** If `true`, the application automatically accepts quitting requests.  
         *  For mobile platforms, see [member quit_on_go_back].  
         */
        auto_accept_quit: boolean
        
        /** If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).  
         *  To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].  
         */
        quit_on_go_back: boolean
        
        /** If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.  
         */
        debug_collisions_hint: boolean
        
        /** If `true`, curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.  
         */
        debug_paths_hint: boolean
        
        /** If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.  
         */
        debug_navigation_hint: boolean
        
        /** If `true`, the [SceneTree] is paused. Doing so will have the following behavior:  
         *  - 2D and 3D physics will be stopped. This includes signals and collision detection.  
         *  - [method Node._process], [method Node._physics_process] and [method Node._input] will not be called anymore in nodes.  
         */
        paused: boolean
        
        /** The root of the edited scene. */
        edited_scene_root: Node
        
        /** Returns the root node of the currently running scene, regardless of its structure.  
         *  **Warning:** Setting this directly might not work as expected, and will  *not*  add or remove any nodes from the tree, consider using [method change_scene_to_file] or [method change_scene_to_packed] instead.  
         */
        current_scene: Node
        
        /** The [SceneTree]'s root [Window]. */
        readonly root: Node
        
        /** If `true` (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].  
         *  If `false`, you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.  
         */
        multiplayer_poll: boolean
        
        /** Emitted whenever the [SceneTree] hierarchy changed (children being moved or renamed, etc.). */
        readonly tree_changed: Signal //  => void
        
        /** This signal is only emitted in the editor, it allows the editor to update the visibility of disabled nodes. Emitted whenever any node's [member Node.process_mode] is changed. */
        readonly tree_process_mode_changed: Signal //  => void
        
        /** Emitted whenever a node is added to the [SceneTree]. */
        readonly node_added: Signal // node: Node => void
        
        /** Emitted whenever a node is removed from the [SceneTree]. */
        readonly node_removed: Signal // node: Node => void
        
        /** Emitted whenever a node is renamed. */
        readonly node_renamed: Signal // node: Node => void
        
        /** Emitted when a node's configuration changed. Only emitted in `tool` mode. */
        readonly node_configuration_warning_changed: Signal // node: Node => void
        
        /** Emitted immediately before [method Node._process] is called on every node in the [SceneTree]. */
        readonly process_frame: Signal //  => void
        
        /** Emitted immediately before [method Node._physics_process] is called on every node in the [SceneTree]. */
        readonly physics_frame: Signal //  => void
    }
    class SceneTreeDialog extends ConfirmationDialog {
        _cancel(): void
        readonly selected: Signal // path: NodePath => void
    }
    class SceneTreeDock extends VBoxContainer {
        _set_owners(_unnamed_arg0: Node, _unnamed_arg1: Array): void
        _update_script_button(): void
        instantiate(_unnamed_arg0: string): void
        get_tree_editor(): SceneTreeEditor
        replace_node(_unnamed_arg0: Node, _unnamed_arg1: Node, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        readonly remote_tree_selected: Signal //  => void
        readonly add_node_used: Signal //  => void
        readonly node_created: Signal // node: Node => void
    }
    class SceneTreeEditor extends Control {
        _update_tree(_unnamed_arg0: boolean = false): void
        _rename_node(_unnamed_arg0: Node, _unnamed_arg1: string): void
        _test_update_tree(): void
        update_tree(): void
        readonly node_selected: Signal //  => void
        readonly node_renamed: Signal //  => void
        readonly node_prerename: Signal //  => void
        readonly node_changed: Signal //  => void
        readonly nodes_dragged: Signal //  => void
        readonly nodes_rearranged: Signal // paths: Array, to_path: NodePath, type: number /*i64*/ => void
        readonly files_dropped: Signal // files: PackedStringArray, to_path: NodePath, type: number /*i64*/ => void
        readonly script_dropped: Signal // file: string, to_path: NodePath => void
        readonly rmb_pressed: Signal // position: Vector2 => void
        readonly open: Signal //  => void
        readonly open_script: Signal //  => void
    }
    /** One-shot timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenetreetimer.html  
     */
    class SceneTreeTimer extends RefCounted {
        set_time_left(time: number /*f64*/): void
        get_time_left(): number /*f64*/
        
        /** The time remaining (in seconds). */
        time_left: number /*f64*/
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal //  => void
    }
    class ScreenSelect extends Button {
        readonly request_open_in_screen: Signal // screen: number /*i64*/ => void
    }
    /** A class stored as a resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_script.html  
     */
    class Script extends Resource {
        /** Returns `true` if the script can be instantiated. */
        can_instantiate(): boolean
        
        /** Returns `true` if [param base_object] is an instance of this script. */
        instance_has(base_object: Object): boolean
        
        /** Returns `true` if the script contains non-empty source code. */
        has_source_code(): boolean
        get_source_code(): string
        set_source_code(source: string): void
        
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keep_state: boolean = false): GodotError
        
        /** Returns the script directly inherited by this script. */
        get_base_script(): Script
        
        /** Returns the script's base type. */
        get_instance_base_type(): StringName
        
        /** Returns `true` if the script, or a base class, defines a signal with the given name. */
        has_script_signal(signal_name: StringName): boolean
        
        /** Returns the list of properties in this [Script]. */
        get_script_property_list(): Array
        
        /** Returns the list of methods in this [Script]. */
        get_script_method_list(): Array
        
        /** Returns the list of user signals defined in this [Script]. */
        get_script_signal_list(): Array
        
        /** Returns a dictionary containing constant names and their values. */
        get_script_constant_map(): Dictionary
        
        /** Returns the default value of the specified property. */
        get_property_default_value(property: StringName): any
        
        /** Returns `true` if the script is a tool script. A tool script can run in the editor. */
        is_tool(): boolean
        
        /** Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
        is_abstract(): boolean
        
        /** The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically. */
        source_code: string
    }
    /** Godot editor's popup dialog for creating new [Script] files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scriptcreatedialog.html  
     */
    class ScriptCreateDialog extends ConfirmationDialog {
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, built_in_enabled: boolean = true, load_enabled: boolean = true): void
        
        /** Emitted when the user clicks the OK button. */
        readonly script_created: Signal // script: Script => void
    }
    /** Godot editor's script editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scripteditor.html  
     */
    class ScriptEditor extends PanelContainer {
        _close_docs_tab(): void
        _close_all_tabs(): void
        _close_other_tabs(): void
        _goto_script_line2(_unnamed_arg0: number /*i64*/): void
        _copy_script_path(): void
        _help_class_open(_unnamed_arg0: string): void
        _help_tab_goto(_unnamed_arg0: string, _unnamed_arg1: string): boolean
        _live_auto_reload_running_scripts(): void
        _update_members_overview(): void
        _update_recent_scripts(): void
        
        /** Returns the [ScriptEditorBase] object that the user is currently editing. */
        get_current_editor(): ScriptEditorBase
        
        /** Returns an array with all [ScriptEditorBase] objects which are currently open in editor. */
        get_open_script_editors(): Array
        
        /** Registers the [EditorSyntaxHighlighter] to the editor, the [EditorSyntaxHighlighter] will be available on all open scripts.  
         *      
         *  **Note:** Does not apply to scripts that are already opened.  
         */
        register_syntax_highlighter(syntax_highlighter: EditorSyntaxHighlighter): void
        
        /** Unregisters the [EditorSyntaxHighlighter] from the editor.  
         *      
         *  **Note:** The [EditorSyntaxHighlighter] will still be applied to scripts that are already opened.  
         */
        unregister_syntax_highlighter(syntax_highlighter: EditorSyntaxHighlighter): void
        
        /** Goes to the specified line in the current script. */
        goto_line(line_number: number /*i64*/): void
        
        /** Returns a [Script] that is currently active in editor. */
        get_current_script(): Script
        
        /** Returns an array with all [Script] objects which are currently open in editor. */
        get_open_scripts(): Array
        
        /** Opens the script create dialog. The script will extend [param base_name]. The file extension can be omitted from [param base_path]. It will be added based on the selected scripting language. */
        open_script_create_dialog(base_name: string, base_path: string): void
        
        /** Emitted when user changed active script. Argument is a freshly activated [Script]. */
        readonly editor_script_changed: Signal // script: Script => void
        
        /** Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed. */
        readonly script_close: Signal // script: Script => void
    }
    /** Base editor for editing scripts in the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scripteditorbase.html  
     */
    class ScriptEditorBase extends VBoxContainer {
        /** Returns the underlying [Control] used for editing scripts. For text scripts, this is a [CodeEdit]. */
        get_base_editor(): Control
        
        /** Adds a [EditorSyntaxHighlighter] to the open script. */
        add_syntax_highlighter(highlighter: EditorSyntaxHighlighter): void
        
        /** Emitted after script validation or when the edited resource has changed. */
        readonly name_changed: Signal //  => void
        
        /** Emitted after script validation. */
        readonly edited_script_changed: Signal //  => void
        
        /** Emitted when the user requests contextual help. */
        readonly request_help: Signal // topic: string => void
        
        /** Emitted when the user requests to view a specific line of a script, similar to [signal go_to_method]. */
        readonly request_open_script_at_line: Signal // script: Object, line: number /*i64*/ => void
        
        /** Emitted when the user contextual goto and the item is in the same script. */
        readonly request_save_history: Signal //  => void
        
        /** Emitted when the user requests a specific documentation page. */
        readonly go_to_help: Signal // what: string => void
        
        /** Emitted when the user request to search text in the file system. */
        readonly search_in_files_requested: Signal // text: string => void
        
        /** Emitted when the user request to find and replace text in the file system. */
        readonly replace_in_files_requested: Signal // text: string => void
        
        /** Emitted when the user requests to view a specific method of a script, similar to [signal request_open_script_at_line]. */
        readonly go_to_method: Signal // script: Object, method: string => void
    }
    class ScriptEditorDebugger extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        request_remote_object(id: number /*i64*/): void
        update_remote_object(id: number /*i64*/, property: string, value: any): void
        readonly started: Signal //  => void
        readonly stopped: Signal //  => void
        readonly stop_requested: Signal //  => void
        readonly stack_frame_selected: Signal // frame: number /*i64*/ => void
        readonly error_selected: Signal // error: number /*i64*/ => void
        readonly breakpoint_selected: Signal // : any /*script*/, line: number /*i64*/ => void
        readonly set_execution: Signal // : any /*script*/, line: number /*i64*/ => void
        readonly clear_execution: Signal // : any /*script*/ => void
        readonly breaked: Signal // reallydid: boolean, can_debug: boolean, reason: string, has_stackdump: boolean => void
        readonly remote_object_requested: Signal // id: number /*i64*/ => void
        readonly remote_object_updated: Signal // id: number /*i64*/ => void
        readonly remote_object_property_updated: Signal // id: number /*i64*/, property: string => void
        readonly remote_tree_updated: Signal //  => void
        readonly output: Signal //  => void
        readonly stack_dump: Signal // stack_dump: Array => void
        readonly stack_frame_vars: Signal // num_vars: number /*i64*/ => void
        readonly stack_frame_var: Signal // data: Array => void
        readonly debug_data: Signal // msg: string, data: Array => void
        readonly set_breakpoint: Signal // : any /*script*/, line: number /*i64*/, enabled: boolean => void
        readonly clear_breakpoints: Signal //  => void
        readonly errors_cleared: Signal //  => void
    }
    class ScriptEditorPlugin extends EditorPlugin {
    }
    class ScriptEditorQuickOpen extends ConfirmationDialog {
        readonly goto_line: Signal // line: number /*i64*/ => void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_scriptextension.html */
    class ScriptExtension extends Script {
        /* gdvirtual */ _editor_can_reload_from_file(): boolean
        /* gdvirtual */ _placeholder_erased(placeholder: number /*i64*/): void
        /* gdvirtual */ _can_instantiate(): boolean
        /* gdvirtual */ _get_base_script(): Script
        /* gdvirtual */ _get_global_name(): StringName
        /* gdvirtual */ _inherits_script(script: Script): boolean
        /* gdvirtual */ _get_instance_base_type(): StringName
        /* gdvirtual */ _instance_create(for_object: Object): number /*i64*/
        /* gdvirtual */ _placeholder_instance_create(for_object: Object): number /*i64*/
        /* gdvirtual */ _instance_has(object: Object): boolean
        /* gdvirtual */ _has_source_code(): boolean
        /* gdvirtual */ _get_source_code(): string
        /* gdvirtual */ _set_source_code(code: string): void
        /* gdvirtual */ _reload(keep_state: boolean): GodotError
        /* gdvirtual */ _get_documentation(): Array
        /* gdvirtual */ _get_class_icon_path(): string
        /* gdvirtual */ _has_method(method: StringName): boolean
        /* gdvirtual */ _has_static_method(method: StringName): boolean
        /* gdvirtual */ _get_method_info(method: StringName): Dictionary
        /* gdvirtual */ _is_tool(): boolean
        /* gdvirtual */ _is_valid(): boolean
        
        /** Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
        /* gdvirtual */ _is_abstract(): boolean
        /* gdvirtual */ _get_language(): ScriptLanguage
        /* gdvirtual */ _has_script_signal(signal: StringName): boolean
        /* gdvirtual */ _get_script_signal_list(): Array
        /* gdvirtual */ _has_property_default_value(property: StringName): boolean
        /* gdvirtual */ _get_property_default_value(property: StringName): void
        /* gdvirtual */ _update_exports(): void
        /* gdvirtual */ _get_script_method_list(): Array
        /* gdvirtual */ _get_script_property_list(): Array
        /* gdvirtual */ _get_member_line(member: StringName): number /*i64*/
        /* gdvirtual */ _get_constants(): Dictionary
        /* gdvirtual */ _get_members(): Array
        /* gdvirtual */ _is_placeholder_fallback_enabled(): boolean
        /* gdvirtual */ _get_rpc_config(): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_scriptlanguage.html */
    class ScriptLanguage extends Object {
    }
    namespace ScriptLanguageExtension {
        enum LookupResultType {
            LOOKUP_RESULT_SCRIPT_LOCATION = 0,
            LOOKUP_RESULT_CLASS = 1,
            LOOKUP_RESULT_CLASS_CONSTANT = 2,
            LOOKUP_RESULT_CLASS_PROPERTY = 3,
            LOOKUP_RESULT_CLASS_METHOD = 4,
            LOOKUP_RESULT_CLASS_SIGNAL = 5,
            LOOKUP_RESULT_CLASS_ENUM = 6,
            LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE = 7,
            LOOKUP_RESULT_CLASS_ANNOTATION = 8,
            LOOKUP_RESULT_MAX = 9,
        }
        enum CodeCompletionLocation {
            /** The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes). */
            LOCATION_LOCAL = 0,
            
            /** The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. 0 for the local class, 1 for the parent, 2 for the grandparent, etc) to store the depth of an option in the class or a parent class. */
            LOCATION_PARENT_MASK = 256,
            
            /** The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons). */
            LOCATION_OTHER_USER_CODE = 512,
            
            /** The option is from other engine code, not covered by the other enum constants - e.g. built-in classes. */
            LOCATION_OTHER = 1024,
        }
        enum CodeCompletionKind {
            CODE_COMPLETION_KIND_CLASS = 0,
            CODE_COMPLETION_KIND_FUNCTION = 1,
            CODE_COMPLETION_KIND_SIGNAL = 2,
            CODE_COMPLETION_KIND_VARIABLE = 3,
            CODE_COMPLETION_KIND_MEMBER = 4,
            CODE_COMPLETION_KIND_ENUM = 5,
            CODE_COMPLETION_KIND_CONSTANT = 6,
            CODE_COMPLETION_KIND_NODE_PATH = 7,
            CODE_COMPLETION_KIND_FILE_PATH = 8,
            CODE_COMPLETION_KIND_PLAIN_TEXT = 9,
            CODE_COMPLETION_KIND_MAX = 10,
        }
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_scriptlanguageextension.html */
    class ScriptLanguageExtension extends ScriptLanguage {
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _get_type(): string
        /* gdvirtual */ _get_extension(): string
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _get_reserved_words(): PackedStringArray
        /* gdvirtual */ _is_control_flow_keyword(keyword: string): boolean
        /* gdvirtual */ _get_comment_delimiters(): PackedStringArray
        /* gdvirtual */ _get_doc_comment_delimiters(): PackedStringArray
        /* gdvirtual */ _get_string_delimiters(): PackedStringArray
        /* gdvirtual */ _make_template(template: string, class_name: string, base_class_name: string): Script
        /* gdvirtual */ _get_built_in_templates(object: StringName): Array
        /* gdvirtual */ _is_using_templates(): boolean
        /* gdvirtual */ _validate(script: string, path: string, validate_functions: boolean, validate_errors: boolean, validate_warnings: boolean, validate_safe_lines: boolean): Dictionary
        /* gdvirtual */ _validate_path(path: string): string
        /* gdvirtual */ _create_script(): Object
        
        /**  *Deprecated.*  This method is not called by the engine. */
        /* gdvirtual */ _has_named_classes(): boolean
        /* gdvirtual */ _supports_builtin_mode(): boolean
        /* gdvirtual */ _supports_documentation(): boolean
        /* gdvirtual */ _can_inherit_from_file(): boolean
        /* gdvirtual */ _find_function(class_name: string, function_name: string): number /*i64*/
        /* gdvirtual */ _make_function(class_name: string, function_name: string, function_args: PackedStringArray): string
        /* gdvirtual */ _open_in_external_editor(script: Script, line: number /*i64*/, column: number /*i64*/): GodotError
        /* gdvirtual */ _overrides_external_editor(): boolean
        /* gdvirtual */ _complete_code(code: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _lookup_code(code: string, symbol: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _auto_indent_code(code: string, from_line: number /*i64*/, to_line: number /*i64*/): string
        /* gdvirtual */ _add_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _add_named_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _remove_named_global_constant(name: StringName): void
        /* gdvirtual */ _thread_enter(): void
        /* gdvirtual */ _thread_exit(): void
        /* gdvirtual */ _debug_get_error(): string
        /* gdvirtual */ _debug_get_stack_level_count(): number /*i64*/
        /* gdvirtual */ _debug_get_stack_level_line(level: number /*i64*/): number /*i64*/
        /* gdvirtual */ _debug_get_stack_level_function(level: number /*i64*/): string
        /* gdvirtual */ _debug_get_stack_level_locals(level: number /*i64*/, max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_get_stack_level_members(level: number /*i64*/, max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_get_stack_level_instance(level: number /*i64*/): number /*i64*/
        /* gdvirtual */ _debug_get_globals(max_subitems: number /*i64*/, max_depth: number /*i64*/): Dictionary
        /* gdvirtual */ _debug_parse_stack_level_expression(level: number /*i64*/, expression: string, max_subitems: number /*i64*/, max_depth: number /*i64*/): string
        /* gdvirtual */ _debug_get_current_stack_info(): Array
        /* gdvirtual */ _reload_all_scripts(): void
        /* gdvirtual */ _reload_tool_script(script: Script, soft_reload: boolean): void
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _get_public_functions(): Array
        /* gdvirtual */ _get_public_constants(): Dictionary
        /* gdvirtual */ _get_public_annotations(): Array
        /* gdvirtual */ _profiling_start(): void
        /* gdvirtual */ _profiling_stop(): void
        /* gdvirtual */ _profiling_get_accumulated_data(info_array: number /*i64*/, info_max: number /*i64*/): number /*i64*/
        /* gdvirtual */ _profiling_get_frame_data(info_array: number /*i64*/, info_max: number /*i64*/): number /*i64*/
        /* gdvirtual */ _frame(): void
        /* gdvirtual */ _handles_global_class_type(type: string): boolean
        /* gdvirtual */ _get_global_class_name(path: string): Dictionary
    }
    class ScriptTextEditor extends ScriptEditorBase {
    }
    /** Abstract base class for scrollbars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scrollbar.html  
     */
    class ScrollBar extends Range {
        set_custom_step(step: number /*f64*/): void
        get_custom_step(): number /*f64*/
        
        /** Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        custom_step: number /*f64*/
        
        /** Emitted when the scrollbar is being scrolled. */
        readonly scrolling: Signal //  => void
    }
    namespace ScrollContainer {
        enum ScrollMode {
            /** Scrolling disabled, scrollbar will be invisible. */
            SCROLL_MODE_DISABLED = 0,
            
            /** Scrolling enabled, scrollbar will be visible only if necessary, i.e. container's content is bigger than the container. */
            SCROLL_MODE_AUTO = 1,
            
            /** Scrolling enabled, scrollbar will be always visible. */
            SCROLL_MODE_SHOW_ALWAYS = 2,
            
            /** Scrolling enabled, scrollbar will be hidden. */
            SCROLL_MODE_SHOW_NEVER = 3,
        }
    }
    /** A container used to provide scrollbars to a child control when needed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scrollcontainer.html  
     */
    class ScrollContainer extends Container {
        _update_scrollbar_position(): void
        set_h_scroll(value: number /*i64*/): void
        get_h_scroll(): number /*i64*/
        set_v_scroll(value: number /*i64*/): void
        get_v_scroll(): number /*i64*/
        set_horizontal_custom_step(value: number /*f64*/): void
        get_horizontal_custom_step(): number /*f64*/
        set_vertical_custom_step(value: number /*f64*/): void
        get_vertical_custom_step(): number /*f64*/
        set_horizontal_scroll_mode(enable: ScrollContainer.ScrollMode): void
        get_horizontal_scroll_mode(): ScrollContainer.ScrollMode
        set_vertical_scroll_mode(enable: ScrollContainer.ScrollMode): void
        get_vertical_scroll_mode(): ScrollContainer.ScrollMode
        set_deadzone(deadzone: number /*i64*/): void
        get_deadzone(): number /*i64*/
        set_follow_focus(enabled: boolean): void
        is_following_focus(): boolean
        
        /** Returns the horizontal scrollbar [HScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member horizontal_scroll_mode].  
         */
        get_h_scroll_bar(): HScrollBar
        
        /** Returns the vertical scrollbar [VScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member vertical_scroll_mode].  
         */
        get_v_scroll_bar(): VScrollBar
        
        /** Ensures the given [param control] is visible (must be a direct or indirect child of the ScrollContainer). Used by [member follow_focus].  
         *      
         *  **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [signal SceneTree.process_frame]:  
         *    
         */
        ensure_control_visible(control: Control): void
        
        /** If `true`, the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible. */
        follow_focus: boolean
        
        /** The current horizontal scroll value.  
         *      
         *  **Note:** If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.  
         *    
         */
        scroll_horizontal: number /*i64*/
        
        /** The current vertical scroll value.  
         *      
         *  **Note:** Setting it early needs to be deferred, just like in [member scroll_horizontal].  
         *    
         */
        scroll_vertical: number /*i64*/
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        scroll_horizontal_custom_step: number /*f64*/
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        scroll_vertical_custom_step: number /*f64*/
        
        /** Controls whether horizontal scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        horizontal_scroll_mode: number /*i64*/
        
        /** Controls whether vertical scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        vertical_scroll_mode: number /*i64*/
        
        /** Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive. */
        scroll_deadzone: number /*i64*/
        
        /** Emitted when scrolling starts when dragging the scrollable area w *ith a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scroll_started: Signal //  => void
        
        /** Emitted when scrolling stops when dragging the scrollable area  *with a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scroll_ended: Signal //  => void
    }
    class SectionedInspector extends HSplitContainer {
        update_category_list(): void
    }
    class SectionedInspectorFilter extends Object {
    }
    /** A 2D line segment shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_segmentshape2d.html  
     */
    class SegmentShape2D extends Shape2D {
        set_a(a: Vector2): void
        get_a(): Vector2
        set_b(b: Vector2): void
        get_b(): Vector2
        
        /** The segment's first point position. */
        a: Vector2
        
        /** The segment's second point position. */
        b: Vector2
    }
    /** A synchronization mechanism used to control access to a shared resource by [Thread]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_semaphore.html  
     */
    class Semaphore extends RefCounted {
        /** Waits for the [Semaphore], if its value is zero, blocks until non-zero. */
        wait(): void
        
        /** Like [method wait], but won't block, so if the value is zero, fails immediately and returns `false`. If non-zero, it returns `true` to report success. */
        try_wait(): boolean
        
        /** Lowers the [Semaphore], allowing one more thread in. */
        post(): void
    }
    /** A 2D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_separationrayshape2d.html  
     */
    class SeparationRayShape2D extends Shape2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_slide_on_slope(active: boolean): void
        get_slide_on_slope(): boolean
        
        /** The ray's length. */
        length: number /*f64*/
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        slide_on_slope: boolean
    }
    /** A 3D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_separationrayshape3d.html  
     */
    class SeparationRayShape3D extends Shape3D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_slide_on_slope(active: boolean): void
        get_slide_on_slope(): boolean
        
        /** The ray's length. */
        length: number /*f64*/
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        slide_on_slope: boolean
    }
    /** Abstract base class for separators.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_separator.html  
     */
    class Separator extends Control {
    }
    namespace Shader {
        enum Mode {
            /** Mode used to draw all 3D objects. */
            MODE_SPATIAL = 0,
            
            /** Mode used to draw all 2D objects. */
            MODE_CANVAS_ITEM = 1,
            
            /** Mode used to calculate particle information on a per-particle basis. Not used for drawing. */
            MODE_PARTICLES = 2,
            
            /** Mode used for drawing skies. Only works with shaders attached to [Sky] objects. */
            MODE_SKY = 3,
            
            /** Mode used for setting the color and density of volumetric fog effect. */
            MODE_FOG = 4,
        }
    }
    /** A shader implemented in the Godot shading language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shader.html  
     */
    class Shader extends Resource {
        /** Returns the shader mode for the shader. */
        get_mode(): Shader.Mode
        set_code(code: string): void
        get_code(): string
        
        /** Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [ShaderMaterial].  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        set_default_texture_parameter(name: StringName, texture: Texture2D, index: number /*i64*/ = 0): void
        
        /** Returns the texture that is set as default for the specified parameter.  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        get_default_texture_parameter(name: StringName, index: number /*i64*/ = 0): Texture2D
        
        /** Get the list of shader uniforms that can be assigned to a [ShaderMaterial], for use with [method ShaderMaterial.set_shader_parameter] and [method ShaderMaterial.get_shader_parameter]. The parameters returned are contained in dictionaries in a similar format to the ones returned by [method Object.get_property_list].  
         *  If argument [param get_groups] is true, parameter grouping hints will be provided.  
         */
        get_shader_uniform_list(get_groups: boolean = false): Array
        
        /** Returns the shader's code as the user has written it, not the full generated code used internally. */
        code: string
    }
    class ShaderCreateDialog extends ConfirmationDialog {
        config(path: string, built_in_enabled: boolean, load_enabled: boolean, _unnamed_arg3: number /*i64*/ = 1, _unnamed_arg4: number /*i64*/ = 1): void
        readonly shader_created: Signal // shader: Shader => void
        readonly shader_include_created: Signal // shader_include: ShaderInclude => void
    }
    class ShaderEditorPlugin extends EditorPlugin {
    }
    class ShaderFileEditor extends PanelContainer {
    }
    class ShaderFileEditorPlugin extends EditorPlugin {
    }
    class ShaderGlobalsEditor extends VBoxContainer {
        _changed(): void
        readonly globals_changed: Signal //  => void
    }
    class ShaderGlobalsEditorInterface extends Object {
        _set_var(_unnamed_arg0: StringName, _unnamed_arg1: any, _unnamed_arg2: any): void
        _var_changed(): void
        readonly var_changed: Signal //  => void
    }
    /** A node used to override global shader parameters' values in a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shaderglobalsoverride.html  
     */
    class ShaderGlobalsOverride extends Node {
        _activate(): void
    }
    /** A snippet of shader code to be included in a [Shader] with `#include`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shaderinclude.html  
     */
    class ShaderInclude extends Resource {
        set_code(code: string): void
        get_code(): string
        
        /** Returns the code of the shader include file. The returned text is what the user has written, not the full generated code used internally. */
        code: string
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shadermaterial.html  
     */
    class ShaderMaterial extends Material {
        set_shader(shader: Shader): void
        get_shader(): Shader
        
        /** Changes the value set for this material of a uniform in the shader.  
         *      
         *  **Note:** [param param] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Changes to the shader uniform will be effective on all instances using this [ShaderMaterial]. To prevent this, use per-instance uniforms with [method GeometryInstance3D.set_instance_shader_parameter] or duplicate the [ShaderMaterial] resource using [method Resource.duplicate]. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the [ShaderMaterial] when possible.  
         */
        set_shader_parameter(param: StringName, value: any): void
        
        /** Returns the current value set for this material of a uniform in the shader. */
        get_shader_parameter(param: StringName): any
        
        /** The [Shader] program used to render this material. */
        shader: Shader
    }
    class ShaderTextEditor extends CodeTextEditor {
        readonly script_validated: Signal // valid: boolean => void
    }
    /** Abstract base class for 2D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shape2d.html  
     */
    class Shape2D extends Resource {
        set_custom_solver_bias(bias: number /*f64*/): void
        get_custom_solver_bias(): number /*f64*/
        
        /** Returns `true` if this shape is colliding with another.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collide(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): boolean
        
        /** Returns whether this shape would collide with another, if a given movement was applied.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collide_with_motion(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): boolean
        
        /** Returns a list of contact point pairs where this shape touches another.  
         *  If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collide_and_get_contacts(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): PackedVector2Array
        
        /** Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.  
         *  If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collide_with_motion_and_get_contacts(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): PackedVector2Array
        
        /** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
        draw(canvas_item: RID, color: Color): void
        
        /** Returns a [Rect2] representing the shapes boundary. */
        get_rect(): Rect2
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_contact_bias] is used.  
         */
        custom_solver_bias: number /*f64*/
    }
    /** Abstract base class for 3D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shape3d.html  
     */
    class Shape3D extends Resource {
        set_custom_solver_bias(bias: number /*f64*/): void
        get_custom_solver_bias(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        
        /** Returns the [ArrayMesh] used to draw the debug collision for this [Shape3D]. */
        get_debug_mesh(): ArrayMesh
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.  
         */
        custom_solver_bias: number /*f64*/
        
        /** The collision margin for the shape. This is not used in Godot Physics.  
         *  Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.  
         */
        margin: number /*f64*/
    }
    /** A 2D shape that sweeps a region of space to detect [CollisionObject2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shapecast2d.html  
     */
    class ShapeCast2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_target_position(local_point: Vector2): void
        get_target_position(): Vector2
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_max_results(max_results: number /*i64*/): void
        get_max_results(): number /*i64*/
        
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        get_collision_count(): number /*i64*/
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** `enabled == true` is not required for this to work.  
         */
        force_shapecast_update(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider(index: number /*i64*/): Object
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: number /*i64*/): RID
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider_shape(index: number /*i64*/): number /*i64*/
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** this point is in the **global** coordinate system.  
         */
        get_collision_point(index: number /*i64*/): Vector2
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        get_collision_normal(index: number /*i64*/): Vector2
        
        /** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
        get_closest_collision_safe_fraction(): number /*f64*/
        
        /** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
        get_closest_collision_unsafe_fraction(): number /*f64*/
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        add_exception_rid(rid: RID): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified [CollisionObject2D] node. */
        add_exception(node: CollisionObject2D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        remove_exception_rid(rid: RID): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [CollisionObject2D] node. */
        remove_exception(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this shape. */
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        _get_collision_result(): Array
        
        /** If `true`, collisions will be reported. */
        enabled: boolean
        
        /** The [Shape2D]-derived shape to be used for collision queries. */
        shape: Shape2D
        
        /** If `true`, the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        
        /** The shape's destination point, relative to this node's `position`. */
        target_position: Vector2
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        margin: number /*f64*/
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        max_results: number /*i64*/
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. */
        collision_mask: number /*i64*/
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
        readonly collision_result: Array
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        collide_with_areas: boolean
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        collide_with_bodies: boolean
    }
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shapecast3d.html  
     */
    class ShapeCast3D extends Node3D {
        /**  *Obsoleted.*  Use [signal Resource.changed] instead. */
        resource_changed(resource: Resource): void
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        set_target_position(local_point: Vector3): void
        get_target_position(): Vector3
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_max_results(max_results: number /*i64*/): void
        get_max_results(): number /*i64*/
        
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        get_collision_count(): number /*i64*/
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** `enabled == true` is not required for this to work.  
         */
        force_shapecast_update(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider(index: number /*i64*/): Object
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: number /*i64*/): RID
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider_shape(index: number /*i64*/): number /*i64*/
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** this point is in the **global** coordinate system.  
         */
        get_collision_point(index: number /*i64*/): Vector3
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        get_collision_normal(index: number /*i64*/): Vector3
        
        /** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
        get_closest_collision_safe_fraction(): number /*f64*/
        
        /** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
        get_closest_collision_unsafe_fraction(): number /*f64*/
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        add_exception_rid(rid: RID): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified [CollisionObject3D] node. */
        add_exception(node: CollisionObject3D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        remove_exception_rid(rid: RID): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [CollisionObject3D] node. */
        remove_exception(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this [ShapeCast3D]. */
        clear_exceptions(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_exclude_parent_body(mask: boolean): void
        get_exclude_parent_body(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        _get_collision_result(): Array
        set_debug_shape_custom_color(debug_shape_custom_color: Color): void
        get_debug_shape_custom_color(): Color
        
        /** If `true`, collisions will be reported. */
        enabled: boolean
        
        /** The [Shape3D]-derived shape to be used for collision queries. */
        shape: Shape3D
        
        /** If `true`, the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        
        /** The shape's destination point, relative to this node's `position`. */
        target_position: Vector3
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        margin: number /*f64*/
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        max_results: number /*i64*/
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
        readonly collision_result: Array
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        collide_with_areas: boolean
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        collide_with_bodies: boolean
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        debug_shape_custom_color: Color
    }
    class ShapeCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A shortcut for binding input.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shortcut.html  
     */
    class Shortcut extends Resource {
        set_events(events: Array): void
        get_events(): Array
        
        /** Returns whether [member events] contains an [InputEvent] which is valid. */
        has_valid_event(): boolean
        
        /** Returns whether any [InputEvent] in [member events] equals [param event]. */
        matches_event(event: InputEvent): boolean
        
        /** Returns the shortcut's first valid [InputEvent] as a [String]. */
        get_as_text(): string
        
        /** The shortcut's [InputEvent] array.  
         *  Generally the [InputEvent] used is an [InputEventKey], though it can be any [InputEvent], including an [InputEventAction].  
         */
        events: Array
    }
    class ShortcutBin extends Node {
    }
    class SizeFlagPresetPicker extends ControlEditorPresetPicker {
        readonly size_flags_selected: Signal // size_flags: number /*i64*/ => void
    }
    /** The parent of a hierarchy of [Bone2D]s, used to create a 2D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeleton2d.html  
     */
    class Skeleton2D extends Node2D {
        _update_bone_setup(): void
        _update_transform(): void
        
        /** Returns the number of [Bone2D] nodes in the node hierarchy parented by Skeleton2D. */
        get_bone_count(): number /*i64*/
        
        /** Returns a [Bone2D] from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter [param idx]. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling. */
        get_bone(idx: number /*i64*/): Bone2D
        
        /** Returns the [RID] of a Skeleton2D instance. */
        get_skeleton(): RID
        
        /** Sets the [SkeletonModificationStack2D] attached to this skeleton. */
        set_modification_stack(modification_stack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] attached to this skeleton, if one exists. */
        get_modification_stack(): SkeletonModificationStack2D
        
        /** Executes all the modifications on the [SkeletonModificationStack2D], if the Skeleton2D has one assigned. */
        execute_modifications(delta: number /*f64*/, execution_mode: number /*i64*/): void
        
        /** Sets the local pose transform, [param override_pose], for the bone at [param bone_idx].  
         *  [param strength] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!  
         */
        set_bone_local_pose_override(bone_idx: number /*i64*/, override_pose: Transform2D, strength: number /*f64*/, persistent: boolean): void
        
        /** Returns the local pose override transform for [param bone_idx]. */
        get_bone_local_pose_override(bone_idx: number /*i64*/): Transform2D
        
        /** Emitted when the [Bone2D] setup attached to this skeletons changes. This is primarily used internally within the skeleton. */
        readonly bone_setup_changed: Signal //  => void
    }
    class Skeleton2DEditor extends Control {
    }
    class Skeleton2DEditorPlugin extends EditorPlugin {
    }
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeleton3d.html  
     */
    class Skeleton3D extends Node3D {
        /** Notification received when this skeleton's pose needs to be updated.  
         *  This notification is received  *before*  the related [signal pose_updated] signal.  
         */
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        
        /** Adds a bone, with name [param name]. [method get_bone_count] will become the bone index. */
        add_bone(name: string): void
        
        /** Returns the bone index that matches [param name] as its name. */
        find_bone(name: string): number /*i64*/
        
        /** Returns the name of the bone at index [param bone_idx]. */
        get_bone_name(bone_idx: number /*i64*/): string
        set_bone_name(bone_idx: number /*i64*/, name: string): void
        
        /** Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** The parent bone returned will always be less than [param bone_idx].  
         */
        get_bone_parent(bone_idx: number /*i64*/): number /*i64*/
        
        /** Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** [param parent_idx] must be less than [param bone_idx].  
         */
        set_bone_parent(bone_idx: number /*i64*/, parent_idx: number /*i64*/): void
        
        /** Returns the number of bones in the skeleton. */
        get_bone_count(): number /*i64*/
        
        /** Returns the number of times the bone hierarchy has changed within this skeleton, including renames.  
         *  The Skeleton version is not serialized: only use within a single instance of Skeleton3D.  
         *  Use for invalidating caches in IK solvers and other nodes which process bones.  
         */
        get_version(): number /*i64*/
        
        /** Unparents the bone at [param bone_idx] and sets its rest position to that of its parent prior to being reset. */
        unparent_bone_and_rest(bone_idx: number /*i64*/): void
        
        /** Returns an array containing the bone indexes of all the child node of the passed in bone, [param bone_idx]. */
        get_bone_children(bone_idx: number /*i64*/): PackedInt32Array
        
        /** Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton. */
        get_parentless_bones(): PackedInt32Array
        
        /** Returns the rest transform for a bone [param bone_idx]. */
        get_bone_rest(bone_idx: number /*i64*/): Transform3D
        
        /** Sets the rest transform for bone [param bone_idx]. */
        set_bone_rest(bone_idx: number /*i64*/, rest: Transform3D): void
        
        /** Returns the global rest transform for [param bone_idx]. */
        get_bone_global_rest(bone_idx: number /*i64*/): Transform3D
        create_skin_from_rest_transforms(): Skin
        
        /** Binds the given Skin to the Skeleton. */
        register_skin(skin: Skin): SkinReference
        
        /** Returns all bones in the skeleton to their rest poses. */
        localize_rests(): void
        
        /** Clear all the bones in this skeleton. */
        clear_bones(): void
        
        /** Returns the pose transform of the specified bone. */
        get_bone_pose(bone_idx: number /*i64*/): Transform3D
        
        /** Sets the pose position of the bone at [param bone_idx] to [param position]. [param position] is a [Vector3] describing a position local to the [Skeleton3D] node. */
        set_bone_pose_position(bone_idx: number /*i64*/, position: Vector3): void
        
        /** Sets the pose rotation of the bone at [param bone_idx] to [param rotation]. [param rotation] is a [Quaternion] describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones. */
        set_bone_pose_rotation(bone_idx: number /*i64*/, rotation: Quaternion): void
        
        /** Sets the pose scale of the bone at [param bone_idx] to [param scale]. */
        set_bone_pose_scale(bone_idx: number /*i64*/, scale: Vector3): void
        
        /** Returns the pose position of the bone at [param bone_idx]. The returned [Vector3] is in the local coordinate space of the [Skeleton3D] node. */
        get_bone_pose_position(bone_idx: number /*i64*/): Vector3
        
        /** Returns the pose rotation of the bone at [param bone_idx]. The returned [Quaternion] is local to the bone with respect to the rotation of any parent bones. */
        get_bone_pose_rotation(bone_idx: number /*i64*/): Quaternion
        
        /** Returns the pose scale of the bone at [param bone_idx]. */
        get_bone_pose_scale(bone_idx: number /*i64*/): Vector3
        
        /** Sets the bone pose to rest for [param bone_idx]. */
        reset_bone_pose(bone_idx: number /*i64*/): void
        
        /** Sets all bone poses to rests. */
        reset_bone_poses(): void
        
        /** Returns whether the bone pose for the bone at [param bone_idx] is enabled. */
        is_bone_enabled(bone_idx: number /*i64*/): boolean
        
        /** Disables the pose for the bone at [param bone_idx] if `false`, enables the bone pose if `true`. */
        set_bone_enabled(bone_idx: number /*i64*/, enabled: boolean = true): void
        
        /** Removes the global pose override on all bones in the skeleton. */
        clear_bones_global_pose_override(): void
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *  [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.  
         */
        set_bone_global_pose_override(bone_idx: number /*i64*/, pose: Transform3D, amount: number /*f64*/, persistent: boolean = false): void
        
        /** Returns the global pose override transform for [param bone_idx]. */
        get_bone_global_pose_override(bone_idx: number /*i64*/): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        get_bone_global_pose(bone_idx: number /*i64*/): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        get_bone_global_pose_no_override(bone_idx: number /*i64*/): Transform3D
        
        /** Force updates the bone transforms/poses for all bones in the skeleton.  
         *   *Deprecated.*  Do not use.  
         */
        force_update_all_bone_transforms(): void
        
        /** Force updates the bone transform for the bone at [param bone_idx] and all of its children. */
        force_update_bone_child_transform(bone_idx: number /*i64*/): void
        set_motion_scale(motion_scale: number /*f64*/): void
        get_motion_scale(): number /*f64*/
        set_show_rest_only(enabled: boolean): void
        is_show_rest_only(): boolean
        set_animate_physical_bones(enabled: boolean): void
        get_animate_physical_bones(): boolean
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to stop simulating. */
        physical_bones_stop_simulation(): void
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to start simulating and reacting to the physics world.  
         *  Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.  
         */
        physical_bones_start_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Adds a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physical_bones_add_collision_exception(exception: RID): void
        
        /** Removes a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physical_bones_remove_collision_exception(exception: RID): void
        
        /** Multiplies the 3D position track animation.  
         *      
         *  **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.  
         */
        motion_scale: number /*f64*/
        
        /** If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited. */
        show_rest_only: boolean
        animate_physical_bones: boolean
        
        /** Emitted when the pose is updated, after [constant NOTIFICATION_UPDATE_SKELETON] is received. */
        readonly pose_updated: Signal //  => void
        
        /** This signal is emitted when one of the bones in the Skeleton3D node have changed their pose. This is used to inform nodes that rely on bone positions that one of the bones in the Skeleton3D have changed their transform/pose. */
        readonly bone_pose_changed: Signal // bone_idx: number /*i64*/ => void
        
        /** Emitted when the bone at [param bone_idx] is toggled with [method set_bone_enabled]. Use [method is_bone_enabled] to check the new value. */
        readonly bone_enabled_changed: Signal // bone_idx: number /*i64*/ => void
        
        /** Emitted when the value of [member show_rest_only] changes. */
        readonly show_rest_only_changed: Signal //  => void
    }
    class Skeleton3DEditorPlugin extends EditorPlugin {
    }
    class Skeleton3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonik3d.html  
     */
    class SkeletonIK3D extends Node {
        set_root_bone(root_bone: StringName): void
        get_root_bone(): StringName
        set_tip_bone(tip_bone: StringName): void
        get_tip_bone(): StringName
        set_interpolation(interpolation: number /*f64*/): void
        get_interpolation(): number /*f64*/
        set_target_transform(target: Transform3D): void
        get_target_transform(): Transform3D
        set_target_node(node: NodePath): void
        get_target_node(): NodePath
        set_override_tip_basis(override: boolean): void
        is_override_tip_basis(): boolean
        set_use_magnet(use: boolean): void
        is_using_magnet(): boolean
        set_magnet_position(local_position: Vector3): void
        get_magnet_position(): Vector3
        
        /** Returns the parent [Skeleton3D] Node that was present when SkeletonIK entered the [SceneTree]. Returns null if the parent node was not a [Skeleton3D] Node when SkeletonIK3D entered the [SceneTree]. */
        get_parent_skeleton(): Skeleton3D
        
        /** Returns `true` if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns `false` if SkeletonIK is stopped or [method start] was used with the `one_time` parameter set to `true`. */
        is_running(): boolean
        set_min_distance(min_distance: number /*f64*/): void
        get_min_distance(): number /*f64*/
        set_max_iterations(iterations: number /*i64*/): void
        get_max_iterations(): number /*i64*/
        
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is `true`, this will take effect immediately but also reset on the next frame. */
        start(one_time: boolean = false): void
        
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        
        /** The name of the current root bone, the first bone in the IK chain. */
        root_bone: StringName
        
        /** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
        tip_bone: StringName
        
        /** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of `1.0` will overwrite all skeleton bone transforms completely while a value of `0.0` will visually disable the SkeletonIK. A value at or below `0.01` also calls [method Skeleton3D.clear_bones_global_pose_override]. */
        interpolation: number /*f64*/
        
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is `true`, how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        target: Transform3D
        
        /** If `true` overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
        override_tip_basis: boolean
        
        /** If `true`, instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
        use_magnet: boolean
        
        /** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
        magnet: Vector3
        
        /** Target node [NodePath] for the IK chain. If available, the node's current [Transform3D] is used instead of the [member target] property. */
        target_node: NodePath
        
        /** The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations. */
        min_distance: number /*f64*/
        
        /** Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results. */
        max_iterations: number /*i64*/
    }
    class SkeletonIK3DEditorPlugin extends EditorPlugin {
    }
    /** Base class for resources that operate on [Bone2D]s in a [Skeleton2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2d.html  
     */
    class SkeletonModification2D extends Resource {
        /** Executes the given modification. This is where the modification performs whatever function it is designed to do. */
        /* gdvirtual */ _execute(delta: number /*f64*/): void
        
        /** Called when the modification is setup. This is where the modification performs initialization. */
        /* gdvirtual */ _setup_modification(modification_stack: SkeletonModificationStack2D): void
        
        /** Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.  
         *      
         *  **Note:** You will need to use the Skeleton2D from [method SkeletonModificationStack2D.get_skeleton] and it's draw functions, as the [SkeletonModification2D] resource cannot draw on its own.  
         */
        /* gdvirtual */ _draw_editor_gizmo(): void
        set_enabled(enabled: boolean): void
        get_enabled(): boolean
        
        /** Returns the [SkeletonModificationStack2D] that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on. */
        get_modification_stack(): SkeletonModificationStack2D
        
        /** Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [SkeletonModificationStack2D] the modification is bound to should handle setting the modification up. */
        set_is_setup(is_setup: boolean): void
        
        /** Returns whether this modification has been successfully setup or not. */
        get_is_setup(): boolean
        set_execution_mode(execution_mode: number /*i64*/): void
        get_execution_mode(): number /*i64*/
        
        /** Takes an angle and clamps it so it is within the passed-in [param min] and [param max] range. [param invert] will inversely clamp the angle, clamping it to the range outside of the given bounds. */
        clamp_angle(angle: number /*f64*/, min: number /*f64*/, max: number /*f64*/, invert: boolean): number /*f64*/
        
        /** Sets whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        set_editor_draw_gizmo(draw_gizmo: boolean): void
        
        /** Returns whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        get_editor_draw_gizmo(): boolean
        
        /** If `true`, the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
        enabled: boolean
        
        /** The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes. */
        execution_mode: number /*i64*/
    }
    /** A modification that uses CCDIK to manipulate a series of bones to reach a target in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dccdik.html  
     */
    class SkeletonModification2DCCDIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_tip_node(tip_nodepath: NodePath): void
        get_tip_node(): NodePath
        set_ccdik_data_chain_length(length: number /*i64*/): void
        get_ccdik_data_chain_length(): number /*i64*/
        
        /** Sets the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        set_ccdik_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_nodepath: NodePath): void
        
        /** Returns the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        get_ccdik_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        
        /** Sets the bone index, [param bone_idx], of the CCDIK joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the CCDIK joint based on data provided by the linked skeleton. */
        set_ccdik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        
        /** Returns the index of the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        get_ccdik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        
        /** Sets whether the joint at [param joint_idx] is set to rotate from the joint, `true`, or to rotate from the tip, `false`. */
        set_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/, rotate_from_joint: boolean): void
        
        /** Returns whether the joint at [param joint_idx] is set to rotate from the joint, `true`, or to rotate from the tip, `false`. The default is to rotate from the tip. */
        get_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/): boolean
        
        /** Determines whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. When `true`, constraints will be enabled and taken into account when solving. */
        set_ccdik_joint_enable_constraint(joint_idx: number /*i64*/, enable_constraint: boolean): void
        
        /** Returns whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. */
        get_ccdik_joint_enable_constraint(joint_idx: number /*i64*/): boolean
        
        /** Sets the minimum angle constraint for the joint at [param joint_idx]. */
        set_ccdik_joint_constraint_angle_min(joint_idx: number /*i64*/, angle_min: number /*f64*/): void
        
        /** Returns the minimum angle constraint for the joint at [param joint_idx]. */
        get_ccdik_joint_constraint_angle_min(joint_idx: number /*i64*/): number /*f64*/
        
        /** Sets the maximum angle constraint for the joint at [param joint_idx]. */
        set_ccdik_joint_constraint_angle_max(joint_idx: number /*i64*/, angle_max: number /*f64*/): void
        
        /** Returns the maximum angle constraint for the joint at [param joint_idx]. */
        get_ccdik_joint_constraint_angle_max(joint_idx: number /*i64*/): number /*f64*/
        
        /** Sets whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint.  
         *  An inverted joint constraint only constraints the CCDIK joint to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        set_ccdik_joint_constraint_angle_invert(joint_idx: number /*i64*/, invert: boolean): void
        
        /** Returns whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint. See [method set_ccdik_joint_constraint_angle_invert] for details. */
        get_ccdik_joint_constraint_angle_invert(joint_idx: number /*i64*/): boolean
        
        /** The NodePath to the node that is the target for the CCDIK modification. This node is what the CCDIK chain will attempt to rotate the bone chain to. */
        target_nodepath: NodePath
        
        /** The end position of the CCDIK chain. Typically, this should be a child of a [Bone2D] node attached to the final [Bone2D] in the CCDIK chain. */
        tip_nodepath: NodePath
        
        /** The number of CCDIK joints in the CCDIK modification. */
        ccdik_data_chain_length: number /*i64*/
    }
    /** A modification that uses FABRIK to manipulate a series of [Bone2D] nodes to reach a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dfabrik.html  
     */
    class SkeletonModification2DFABRIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_fabrik_data_chain_length(length: number /*i64*/): void
        get_fabrik_data_chain_length(): number /*i64*/
        
        /** Sets the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        set_fabrik_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_nodepath: NodePath): void
        
        /** Returns the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        get_fabrik_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        
        /** Sets the bone index, [param bone_idx], of the FABRIK joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the FABRIK joint based on data provided by the linked skeleton. */
        set_fabrik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        
        /** Returns the index of the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        get_fabrik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        
        /** Sets the magnet position vector for the joint at [param joint_idx]. */
        set_fabrik_joint_magnet_position(joint_idx: number /*i64*/, magnet_position: Vector2): void
        
        /** Returns the magnet position vector for the joint at [param joint_idx]. */
        get_fabrik_joint_magnet_position(joint_idx: number /*i64*/): Vector2
        
        /** Sets whether the joint at [param joint_idx] will use the target node's rotation rather than letting FABRIK rotate the node.  
         *      
         *  **Note:** This option only works for the tip/final joint in the chain. For all other nodes, this option will be ignored.  
         */
        set_fabrik_joint_use_target_rotation(joint_idx: number /*i64*/, use_target_rotation: boolean): void
        
        /** Returns whether the joint is using the target's rotation rather than allowing FABRIK to rotate the joint. This option only applies to the tip/final joint in the chain. */
        get_fabrik_joint_use_target_rotation(joint_idx: number /*i64*/): boolean
        
        /** The NodePath to the node that is the target for the FABRIK modification. This node is what the FABRIK chain will attempt to rotate the bone chain to. */
        target_nodepath: NodePath
        
        /** The number of FABRIK joints in the FABRIK modification. */
        fabrik_data_chain_length: number /*i64*/
    }
    /** A modification that jiggles [Bone2D] nodes as they move towards a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2djiggle.html  
     */
    class SkeletonModification2DJiggle extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_jiggle_data_chain_length(length: number /*i64*/): void
        get_jiggle_data_chain_length(): number /*i64*/
        set_stiffness(stiffness: number /*f64*/): void
        get_stiffness(): number /*f64*/
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_damping(damping: number /*f64*/): void
        get_damping(): number /*f64*/
        set_use_gravity(use_gravity: boolean): void
        get_use_gravity(): boolean
        set_gravity(gravity: Vector2): void
        get_gravity(): Vector2
        
        /** If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
        set_use_colliders(use_colliders: boolean): void
        
        /** Returns whether the jiggle modifier is taking physics colliders into account when solving. */
        get_use_colliders(): boolean
        
        /** Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account. */
        set_collision_mask(collision_mask: number /*i64*/): void
        
        /** Returns the collision mask used by the Jiggle modifier when collisions are enabled. */
        get_collision_mask(): number /*i64*/
        
        /** Sets the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_bone2d_node(joint_idx: number /*i64*/, bone2d_node: NodePath): void
        
        /** Returns the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_bone2d_node(joint_idx: number /*i64*/): NodePath
        
        /** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton. */
        set_jiggle_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        
        /** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        
        /** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification. */
        set_jiggle_joint_override(joint_idx: number /*i64*/, override: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is overriding the default Jiggle joint data defined in the modification. */
        get_jiggle_joint_override(joint_idx: number /*i64*/): boolean
        
        /** Sets the of stiffness of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_stiffness(joint_idx: number /*i64*/, stiffness: number /*f64*/): void
        
        /** Returns the stiffness of the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_stiffness(joint_idx: number /*i64*/): number /*f64*/
        
        /** Sets the of mass of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_mass(joint_idx: number /*i64*/, mass: number /*f64*/): void
        
        /** Returns the amount of mass of the jiggle joint at [param joint_idx]. */
        get_jiggle_joint_mass(joint_idx: number /*i64*/): number /*f64*/
        
        /** Sets the amount of damping of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_damping(joint_idx: number /*i64*/, damping: number /*f64*/): void
        
        /** Returns the amount of damping of the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_damping(joint_idx: number /*i64*/): number /*f64*/
        
        /** Sets whether the Jiggle joint at [param joint_idx] should use gravity. */
        set_jiggle_joint_use_gravity(joint_idx: number /*i64*/, use_gravity: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is using gravity or not. */
        get_jiggle_joint_use_gravity(joint_idx: number /*i64*/): boolean
        
        /** Sets the gravity vector of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_gravity(joint_idx: number /*i64*/, gravity: Vector2): void
        
        /** Returns a [Vector2] representing the amount of gravity the Jiggle joint at [param joint_idx] is influenced by. */
        get_jiggle_joint_gravity(joint_idx: number /*i64*/): Vector2
        
        /** The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to. */
        target_nodepath: NodePath
        
        /** The amount of Jiggle joints in the Jiggle modification. */
        jiggle_data_chain_length: number /*i64*/
        
        /** The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position. */
        stiffness: number /*f64*/
        
        /** The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting. */
        mass: number /*f64*/
        
        /** The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied. */
        damping: number /*f64*/
        
        /** Whether the gravity vector, [member gravity], should be applied to the Jiggle joints, assuming they are not overriding the default settings. */
        use_gravity: boolean
        
        /** The default amount of gravity applied to the Jiggle joints, if they are not overridden. */
        gravity: Vector2
    }
    /** A modification that rotates a [Bone2D] node to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dlookat.html  
     */
    class SkeletonModification2DLookAt extends SkeletonModification2D {
        set_bone2d_node(bone2d_nodepath: NodePath): void
        get_bone2d_node(): NodePath
        set_bone_index(bone_idx: number /*i64*/): void
        get_bone_index(): number /*i64*/
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        
        /** Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount. */
        set_additional_rotation(rotation: number /*f64*/): void
        
        /** Returns the amount of additional rotation that is applied after the LookAt modification executes. */
        get_additional_rotation(): number /*f64*/
        
        /** Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification. */
        set_enable_constraint(enable_constraint: boolean): void
        
        /** Returns `true` if the LookAt modification is using constraints. */
        get_enable_constraint(): boolean
        
        /** Sets the constraint's minimum allowed angle. */
        set_constraint_angle_min(angle_min: number /*f64*/): void
        
        /** Returns the constraint's minimum allowed angle. */
        get_constraint_angle_min(): number /*f64*/
        
        /** Sets the constraint's maximum allowed angle. */
        set_constraint_angle_max(angle_max: number /*f64*/): void
        
        /** Returns the constraint's maximum allowed angle. */
        get_constraint_angle_max(): number /*f64*/
        
        /** When `true`, the modification will use an inverted joint constraint.  
         *  An inverted joint constraint only constraints the [Bone2D] to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        set_constraint_angle_invert(invert: boolean): void
        
        /** Returns whether the constraints to this modification are inverted or not. */
        get_constraint_angle_invert(): boolean
        
        /** The index of the [Bone2D] node that the modification will operate on. */
        bone_index: number /*i64*/
        
        /** The [Bone2D] node that the modification will operate on. */
        bone2d_node: NodePath
        
        /** The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [Bone2D] to. */
        target_nodepath: NodePath
    }
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dphysicalbones.html  
     */
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        set_physical_bone_chain_length(length: number /*i64*/): void
        get_physical_bone_chain_length(): number /*i64*/
        
        /** Sets the [PhysicalBone2D] node at [param joint_idx].  
         *      
         *  **Note:** This is just the index used for this modification, not the bone index used in the [Skeleton2D].  
         */
        set_physical_bone_node(joint_idx: number /*i64*/, physicalbone2d_node: NodePath): void
        
        /** Returns the [PhysicalBone2D] node at [param joint_idx]. */
        get_physical_bone_node(joint_idx: number /*i64*/): NodePath
        
        /** Empties the list of [PhysicalBone2D] nodes and populates it with all [PhysicalBone2D] nodes that are children of the [Skeleton2D]. */
        fetch_physical_bones(): void
        
        /** Tell the [PhysicalBone2D] nodes to start simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to start simulating.  
         */
        start_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Tell the [PhysicalBone2D] nodes to stop simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to stop simulating.  
         */
        stop_simulation(bones: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** The number of [PhysicalBone2D] nodes linked in this modification. */
        physical_bone_chain_length: number /*i64*/
    }
    /** A modification that holds and executes a [SkeletonModificationStack2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dstackholder.html  
     */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        /** Sets the [SkeletonModificationStack2D] that this modification is holding. This modification stack will then be executed when this modification is executed. */
        set_held_modification_stack(held_modification_stack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is holding. */
        get_held_modification_stack(): SkeletonModificationStack2D
    }
    /** A modification that rotates two bones using the law of cosines to reach the target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dtwoboneik.html  
     */
    class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
        set_target_node(target_nodepath: NodePath): void
        get_target_node(): NodePath
        set_target_minimum_distance(minimum_distance: number /*f64*/): void
        get_target_minimum_distance(): number /*f64*/
        set_target_maximum_distance(maximum_distance: number /*f64*/): void
        get_target_maximum_distance(): number /*f64*/
        set_flip_bend_direction(flip_direction: boolean): void
        get_flip_bend_direction(): boolean
        
        /** Sets the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        set_joint_one_bone2d_node(bone2d_node: NodePath): void
        
        /** Returns the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        get_joint_one_bone2d_node(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        set_joint_one_bone_idx(bone_idx: number /*i64*/): void
        
        /** Returns the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        get_joint_one_bone_idx(): number /*i64*/
        
        /** Sets the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        set_joint_two_bone2d_node(bone2d_node: NodePath): void
        
        /** Returns the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        get_joint_two_bone2d_node(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        set_joint_two_bone_idx(bone_idx: number /*i64*/): void
        
        /** Returns the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        get_joint_two_bone_idx(): number /*i64*/
        
        /** The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the [Bone2D] nodes. */
        target_nodepath: NodePath
        
        /** The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints. */
        target_minimum_distance: number /*f64*/
        
        /** The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints. */
        target_maximum_distance: number /*f64*/
        
        /** If `true`, the bones in the modification will blend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting. */
        flip_bend_direction: boolean
    }
    /** A resource that holds a stack of [SkeletonModification2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodificationstack2d.html  
     */
    class SkeletonModificationStack2D extends Resource {
        /** Sets up the modification stack so it can execute. This function should be called by [Skeleton2D] and shouldn't be manually called unless you know what you are doing. */
        setup(): void
        
        /** Executes all of the [SkeletonModification2D]s in the stack that use the same execution mode as the passed-in [param execution_mode], starting from index `0` to [member modification_count].  
         *      
         *  **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.  
         */
        execute(delta: number /*f64*/, execution_mode: number /*i64*/): void
        
        /** Enables all [SkeletonModification2D]s in the stack. */
        enable_all_modifications(enabled: boolean): void
        
        /** Returns the [SkeletonModification2D] at the passed-in index, [param mod_idx]. */
        get_modification(mod_idx: number /*i64*/): SkeletonModification2D
        
        /** Adds the passed-in [SkeletonModification2D] to the stack. */
        add_modification(modification: SkeletonModification2D): void
        
        /** Deletes the [SkeletonModification2D] at the index position [param mod_idx], if it exists. */
        delete_modification(mod_idx: number /*i64*/): void
        
        /** Sets the modification at [param mod_idx] to the passed-in modification, [param modification]. */
        set_modification(mod_idx: number /*i64*/, modification: SkeletonModification2D): void
        set_modification_count(count: number /*i64*/): void
        get_modification_count(): number /*i64*/
        
        /** Returns a boolean that indicates whether the modification stack is setup and can execute. */
        get_is_setup(): boolean
        set_enabled(enabled: boolean): void
        get_enabled(): boolean
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        
        /** Returns the [Skeleton2D] node that the SkeletonModificationStack2D is bound to. */
        get_skeleton(): Skeleton2D
        
        /** If `true`, the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
        enabled: boolean
        
        /** The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
        strength: number /*f64*/
        
        /** The number of modifications in the stack. */
        modification_count: any /*Modifications,modifications/*/
    }
    namespace SkeletonProfile {
        enum TailDirection {
            /** Direction to the average coordinates of bone children. */
            TAIL_DIRECTION_AVERAGE_CHILDREN = 0,
            
            /** Direction to the coordinates of specified bone child. */
            TAIL_DIRECTION_SPECIFIC_CHILD = 1,
            
            /** Direction is not calculated. */
            TAIL_DIRECTION_END = 2,
        }
    }
    /** Base class for a profile of a virtual skeleton used as a target for retargeting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonprofile.html  
     */
    class SkeletonProfile extends Resource {
        set_root_bone(bone_name: StringName): void
        get_root_bone(): StringName
        set_scale_base_bone(bone_name: StringName): void
        get_scale_base_bone(): StringName
        set_group_size(size: number /*i64*/): void
        get_group_size(): number /*i64*/
        
        /** Returns the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        get_group_name(group_idx: number /*i64*/): StringName
        
        /** Sets the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        set_group_name(group_idx: number /*i64*/, group_name: StringName): void
        
        /** Returns the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        get_texture(group_idx: number /*i64*/): Texture2D
        
        /** Sets the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        set_texture(group_idx: number /*i64*/, texture: Texture2D): void
        set_bone_size(size: number /*i64*/): void
        get_bone_size(): number /*i64*/
        
        /** Returns the bone index that matches [param bone_name] as its name. */
        find_bone(bone_name: StringName): number /*i64*/
        
        /** Returns the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the returned bone name is the bone name of the target skeleton.  
         */
        get_bone_name(bone_idx: number /*i64*/): StringName
        
        /** Sets the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the setting bone name is the bone name of the target skeleton.  
         */
        set_bone_name(bone_idx: number /*i64*/, bone_name: StringName): void
        
        /** Returns the name of the bone which is the parent to the bone at [param bone_idx]. The result is empty if the bone has no parent. */
        get_bone_parent(bone_idx: number /*i64*/): StringName
        
        /** Sets the bone with name [param bone_parent] as the parent of the bone at [param bone_idx]. If an empty string is passed, then the bone has no parent. */
        set_bone_parent(bone_idx: number /*i64*/, bone_parent: StringName): void
        
        /** Returns the tail direction of the bone at [param bone_idx]. */
        get_tail_direction(bone_idx: number /*i64*/): SkeletonProfile.TailDirection
        
        /** Sets the tail direction of the bone at [param bone_idx].  
         *      
         *  **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.  
         */
        set_tail_direction(bone_idx: number /*i64*/, tail_direction: SkeletonProfile.TailDirection): void
        
        /** Returns the name of the bone which is the tail of the bone at [param bone_idx]. */
        get_bone_tail(bone_idx: number /*i64*/): StringName
        
        /** Sets the bone with name [param bone_tail] as the tail of the bone at [param bone_idx]. */
        set_bone_tail(bone_idx: number /*i64*/, bone_tail: StringName): void
        
        /** Returns the reference pose transform for bone [param bone_idx]. */
        get_reference_pose(bone_idx: number /*i64*/): Transform3D
        
        /** Sets the reference pose transform for bone [param bone_idx]. */
        set_reference_pose(bone_idx: number /*i64*/, bone_name: Transform3D): void
        
        /** Returns the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        get_handle_offset(bone_idx: number /*i64*/): Vector2
        
        /** Sets the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        set_handle_offset(bone_idx: number /*i64*/, handle_offset: Vector2): void
        
        /** Returns the group of the bone at [param bone_idx]. */
        get_group(bone_idx: number /*i64*/): StringName
        
        /** Sets the group of the bone at [param bone_idx]. */
        set_group(bone_idx: number /*i64*/, group: StringName): void
        
        /** A bone name that will be used as the root bone in [AnimationTree]. This should be the bone of the parent of hips that exists at the world origin. */
        root_bone: StringName
        
        /** A bone name which will use model's height as the coefficient for normalization. For example, [SkeletonProfileHumanoid] defines it as `Hips`. */
        scale_base_bone: StringName
        
        /** The amount of groups of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 4 groups.  
         *  This property exists to separate the bone list into several sections in the editor.  
         */
        group_size: any /*Groups,groups/*/
        
        /** The amount of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 56 bones.  
         *  The size of elements in [BoneMap] updates when changing this property in it's assigned [SkeletonProfile].  
         */
        bone_size: any /*Bones,bones/*/
        
        /** This signal is emitted when change the value in profile. This is used to update key name in the [BoneMap] and to redraw the [BoneMap] editor.  
         *      
         *  **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the [BoneMap].  
         */
        readonly profile_updated: Signal //  => void
    }
    /** A humanoid [SkeletonProfile] preset.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonprofilehumanoid.html  
     */
    class SkeletonProfileHumanoid extends SkeletonProfile {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_skin.html */
    class Skin extends Resource {
        set_bind_count(bind_count: number /*i64*/): void
        get_bind_count(): number /*i64*/
        add_bind(bone: number /*i64*/, pose: Transform3D): void
        add_named_bind(name: string, pose: Transform3D): void
        set_bind_pose(bind_index: number /*i64*/, pose: Transform3D): void
        get_bind_pose(bind_index: number /*i64*/): Transform3D
        set_bind_name(bind_index: number /*i64*/, name: StringName): void
        get_bind_name(bind_index: number /*i64*/): StringName
        set_bind_bone(bind_index: number /*i64*/, bone: number /*i64*/): void
        get_bind_bone(bind_index: number /*i64*/): number /*i64*/
        clear_binds(): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_skinreference.html */
    class SkinReference extends RefCounted {
        get_skeleton(): RID
        get_skin(): Skin
    }
    namespace Sky {
        enum RadianceSize {
            /** Radiance texture size is 32×32 pixels. */
            RADIANCE_SIZE_32 = 0,
            
            /** Radiance texture size is 64×64 pixels. */
            RADIANCE_SIZE_64 = 1,
            
            /** Radiance texture size is 128×128 pixels. */
            RADIANCE_SIZE_128 = 2,
            
            /** Radiance texture size is 256×256 pixels. */
            RADIANCE_SIZE_256 = 3,
            
            /** Radiance texture size is 512×512 pixels. */
            RADIANCE_SIZE_512 = 4,
            
            /** Radiance texture size is 1024×1024 pixels. */
            RADIANCE_SIZE_1024 = 5,
            
            /** Radiance texture size is 2048×2048 pixels. */
            RADIANCE_SIZE_2048 = 6,
            
            /** Represents the size of the [enum RadianceSize] enum. */
            RADIANCE_SIZE_MAX = 7,
        }
        enum ProcessMode {
            /** Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant PROCESS_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant PROCESS_MODE_INCREMENTAL]. Otherwise, this defaults to [constant PROCESS_MODE_QUALITY]. */
            PROCESS_MODE_AUTOMATIC = 0,
            
            /** Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant PROCESS_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples]. */
            PROCESS_MODE_QUALITY = 1,
            
            /** Uses the same high quality importance sampling to process the radiance map as [constant PROCESS_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly. */
            PROCESS_MODE_INCREMENTAL = 2,
            
            /** Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].  
             *      
             *  **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [member radiance_size] must be set to [constant RADIANCE_SIZE_256]. Otherwise, a warning is printed and the overridden radiance size is ignored.  
             */
            PROCESS_MODE_REALTIME = 3,
        }
    }
    /** Defines a 3D environment's background by using a [Material].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sky.html  
     */
    class Sky extends Resource {
        set_radiance_size(size: Sky.RadianceSize): void
        get_radiance_size(): Sky.RadianceSize
        set_process_mode(mode: Sky.ProcessMode): void
        get_process_mode(): Sky.ProcessMode
        set_material(material: Material): void
        get_material(): Material
        
        /** [Material] used to draw the background. Can be [PanoramaSkyMaterial], [ProceduralSkyMaterial], [PhysicalSkyMaterial], or even a [ShaderMaterial] if you want to use your own custom shader. */
        sky_material: ShaderMaterial | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial
        
        /** Sets the method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. See [enum ProcessMode] for options. */
        process_mode: number /*i64*/
        
        /** The [Sky]'s radiance map size. The higher the radiance map size, the more detailed the lighting from the [Sky] will be.  
         *  See [enum RadianceSize] constants for values.  
         *      
         *  **Note:** Some hardware will have trouble with higher radiance sizes, especially [constant RADIANCE_SIZE_512] and above. Only use such high values on high-end hardware.  
         */
        radiance_size: number /*i64*/
    }
    /** Abstract base class for sliders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_slider.html  
     */
    class Slider extends Range {
        set_ticks(count: number /*i64*/): void
        get_ticks(): number /*i64*/
        get_ticks_on_borders(): boolean
        set_ticks_on_borders(ticks_on_border: boolean): void
        set_editable(editable: boolean): void
        is_editable(): boolean
        set_scrollable(scrollable: boolean): void
        is_scrollable(): boolean
        
        /** If `true`, the slider can be interacted with. If `false`, the value can be changed only by code. */
        editable: boolean
        
        /** If `true`, the value can be changed using the mouse wheel. */
        scrollable: boolean
        
        /** Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers. */
        tick_count: number /*i64*/
        
        /** If `true`, the slider will display ticks for minimum and maximum values. */
        ticks_on_borders: boolean
        
        /** Emitted when dragging is started. */
        readonly drag_started: Signal //  => void
        
        /** Emitted when dragging stops. If [param value_changed] is true, [member Range.value] is different from the value when you started the dragging. */
        readonly drag_ended: Signal // value_changed: boolean => void
    }
    namespace SliderJoint3D {
        enum Param {
            /** The maximum difference between the pivot points on their X axis before damping happens. */
            PARAM_LINEAR_LIMIT_UPPER = 0,
            
            /** The minimum difference between the pivot points on their X axis before damping happens. */
            PARAM_LINEAR_LIMIT_LOWER = 1,
            
            /** A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement. */
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            
            /** The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost. */
            PARAM_LINEAR_LIMIT_RESTITUTION = 3,
            
            /** The amount of damping once the slider limits are surpassed. */
            PARAM_LINEAR_LIMIT_DAMPING = 4,
            
            /** A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement. */
            PARAM_LINEAR_MOTION_SOFTNESS = 5,
            
            /** The amount of restitution inside the slider limits. */
            PARAM_LINEAR_MOTION_RESTITUTION = 6,
            
            /** The amount of damping inside the slider limits. */
            PARAM_LINEAR_MOTION_DAMPING = 7,
            
            /** A factor applied to the movement across axes orthogonal to the slider. */
            PARAM_LINEAR_ORTHOGONAL_SOFTNESS = 8,
            
            /** The amount of restitution when movement is across axes orthogonal to the slider. */
            PARAM_LINEAR_ORTHOGONAL_RESTITUTION = 9,
            
            /** The amount of damping when movement is across axes orthogonal to the slider. */
            PARAM_LINEAR_ORTHOGONAL_DAMPING = 10,
            
            /** The upper limit of rotation in the slider. */
            PARAM_ANGULAR_LIMIT_UPPER = 11,
            
            /** The lower limit of rotation in the slider. */
            PARAM_ANGULAR_LIMIT_LOWER = 12,
            
            /** A factor applied to the all rotation once the limit is surpassed. */
            PARAM_ANGULAR_LIMIT_SOFTNESS = 13,
            
            /** The amount of restitution of the rotation when the limit is surpassed. */
            PARAM_ANGULAR_LIMIT_RESTITUTION = 14,
            
            /** The amount of damping of the rotation when the limit is surpassed. */
            PARAM_ANGULAR_LIMIT_DAMPING = 15,
            
            /** A factor applied to the all rotation in the limits. */
            PARAM_ANGULAR_MOTION_SOFTNESS = 16,
            
            /** The amount of restitution of the rotation in the limits. */
            PARAM_ANGULAR_MOTION_RESTITUTION = 17,
            
            /** The amount of damping of the rotation in the limits. */
            PARAM_ANGULAR_MOTION_DAMPING = 18,
            
            /** A factor applied to the all rotation across axes orthogonal to the slider. */
            PARAM_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
            
            /** The amount of restitution of the rotation across axes orthogonal to the slider. */
            PARAM_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
            
            /** The amount of damping of the rotation across axes orthogonal to the slider. */
            PARAM_ANGULAR_ORTHOGONAL_DAMPING = 21,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 22,
        }
    }
    /** A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sliderjoint3d.html  
     */
    class SliderJoint3D extends Joint3D {
        set_param(param: SliderJoint3D.Param, value: number /*f64*/): void
        get_param(param: SliderJoint3D.Param): number /*f64*/
    }
    class SnapDialog extends ConfirmationDialog {
    }
    namespace SoftBody3D {
        enum DisableMode {
            /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [SoftBody3D].  
             *  Automatically re-added to the physics simulation when the [Node] is processed again.  
             */
            DISABLE_MODE_REMOVE = 0,
            
            /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
            DISABLE_MODE_KEEP_ACTIVE = 1,
        }
    }
    /** A deformable 3D physics mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_softbody3d.html  
     */
    class SoftBody3D extends MeshInstance3D {
        /** Returns the internal [RID] used by the [PhysicsServer3D] for this body. */
        get_physics_rid(): RID
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_layer(collision_layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_parent_collision_ignore(parent_collision_ignore: NodePath): void
        get_parent_collision_ignore(): NodePath
        set_disable_mode(mode: SoftBody3D.DisableMode): void
        get_disable_mode(): SoftBody3D.DisableMode
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        get_collision_exceptions(): Array
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        add_collision_exception_with(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        remove_collision_exception_with(body: Node): void
        set_simulation_precision(simulation_precision: number /*i64*/): void
        get_simulation_precision(): number /*i64*/
        set_total_mass(mass: number /*f64*/): void
        get_total_mass(): number /*f64*/
        set_linear_stiffness(linear_stiffness: number /*f64*/): void
        get_linear_stiffness(): number /*f64*/
        set_pressure_coefficient(pressure_coefficient: number /*f64*/): void
        get_pressure_coefficient(): number /*f64*/
        set_damping_coefficient(damping_coefficient: number /*f64*/): void
        get_damping_coefficient(): number /*f64*/
        set_drag_coefficient(drag_coefficient: number /*f64*/): void
        get_drag_coefficient(): number /*f64*/
        
        /** Returns local translation of a vertex in the surface array. */
        get_point_transform(point_index: number /*i64*/): Vector3
        
        /** Sets the pinned state of a surface vertex. When set to `true`, the optional [param attachment_path] can define a [Node3D] the pinned vertex will be attached to. */
        set_point_pinned(point_index: number /*i64*/, pinned: boolean, attachment_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        
        /** Returns `true` if vertex is set to pinned. */
        is_point_pinned(point_index: number /*i64*/): boolean
        set_ray_pickable(ray_pickable: boolean): void
        is_ray_pickable(): boolean
        
        /** The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        collision_layer: number /*i64*/
        
        /** The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        collision_mask: number /*i64*/
        
        /** [NodePath] to a [CollisionObject3D] this SoftBody3D should avoid clipping. */
        parent_collision_ignore: NodePath
        
        /** Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
        simulation_precision: number /*i64*/
        
        /** The SoftBody3D's mass. */
        total_mass: number /*f64*/
        
        /** Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive). */
        linear_stiffness: number /*f64*/
        
        /** The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect. */
        pressure_coefficient: number /*f64*/
        
        /** The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied. */
        damping_coefficient: number /*f64*/
        
        /** The body's drag coefficient. Higher values increase this body's air resistance.  
         *      
         *  **Note:** This value is currently unused by Godot's default physics implementation.  
         */
        drag_coefficient: number /*f64*/
        
        /** If `true`, the [SoftBody3D] will respond to [RayCast3D]s. */
        ray_pickable: boolean
        
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        disable_mode: number /*i64*/
    }
    class SoftBody3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Class representing a spherical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_spheremesh.html  
     */
    class SphereMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(radial_segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_is_hemisphere(is_hemisphere: boolean): void
        get_is_hemisphere(): boolean
        
        /** Radius of sphere. */
        radius: number /*f64*/
        
        /** Full height of the sphere. */
        height: number /*f64*/
        
        /** Number of radial segments on the sphere. */
        radial_segments: number /*i64*/
        
        /** Number of segments along the height of the sphere. */
        rings: number /*i64*/
        
        /** If `true`, a hemisphere is created rather than a full sphere.  
         *      
         *  **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.  
         */
        is_hemisphere: boolean
    }
    /** Spherical shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sphereoccluder3d.html  
     */
    class SphereOccluder3D extends Occluder3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The sphere's radius in 3D units. */
        radius: number /*f64*/
    }
    /** A 3D sphere shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sphereshape3d.html  
     */
    class SphereShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The sphere's radius. The shape's diameter is double the radius. */
        radius: number /*f64*/
    }
    /** An input field for numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_spinbox.html  
     */
    class SpinBox extends Range {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_suffix(suffix: string): void
        get_suffix(): string
        set_prefix(prefix: string): void
        get_prefix(): string
        set_editable(enabled: boolean): void
        set_custom_arrow_step(arrow_step: number /*f64*/): void
        get_custom_arrow_step(): number /*f64*/
        is_editable(): boolean
        set_update_on_text_changed(enabled: boolean): void
        get_update_on_text_changed(): boolean
        set_select_all_on_focus(enabled: boolean): void
        is_select_all_on_focus(): boolean
        
        /** Applies the current value of this [SpinBox]. */
        apply(): void
        
        /** Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_line_edit(): LineEdit
        
        /** Changes the alignment of the underlying [LineEdit]. */
        alignment: number /*i64*/
        
        /** If `true`, the [SpinBox] will be editable. Otherwise, it will be read only. */
        editable: boolean
        
        /** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is  *changed*  instead of  *submitted* . See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted]. */
        update_on_text_changed: boolean
        
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        prefix: string
        
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        suffix: string
        
        /** If not `0`, [member Range.value] will always be rounded to a multiple of [member custom_arrow_step] when interacting with the arrow buttons of the [SpinBox]. */
        custom_arrow_step: number /*f64*/
        
        /** If `true`, the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
        select_all_on_focus: boolean
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            /** The split dragger is visible when the cursor hovers it. */
            DRAGGER_VISIBLE = 0,
            
            /** The split dragger is never visible. */
            DRAGGER_HIDDEN = 1,
            
            /** The split dragger is never visible and its space collapsed. */
            DRAGGER_HIDDEN_COLLAPSED = 2,
        }
    }
    /** A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_splitcontainer.html  
     */
    class SplitContainer extends Container {
        set_split_offset(offset: number /*i64*/): void
        get_split_offset(): number /*i64*/
        
        /** Clamps the [member split_offset] value to not go outside the currently possible minimal and maximum values. */
        clamp_split_offset(): void
        set_collapsed(collapsed: boolean): void
        is_collapsed(): boolean
        set_dragger_visibility(mode: SplitContainer.DraggerVisibility): void
        get_dragger_visibility(): SplitContainer.DraggerVisibility
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The initial offset of the splitting between the two [Control]s, with `0` being at the end of the first [Control]. */
        split_offset: number /*i64*/
        
        /** If `true`, the area of the first [Control] will be collapsed and the dragger will be disabled. */
        collapsed: boolean
        
        /** Determines the dragger's visibility. See [enum DraggerVisibility] for details. */
        dragger_visibility: number /*i64*/
        
        /** If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].  
         */
        vertical: boolean
        
        /** Emitted when the dragger is dragged by user. */
        readonly dragged: Signal // offset: number /*i64*/ => void
    }
    class SplitContainerDragger extends Control {
    }
    /** A spotlight, such as a reflector spotlight or a lantern.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_spotlight3d.html  
     */
    class SpotLight3D extends Light3D {
    }
    /** A 3D raycast that dynamically moves its children near the collision point.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_springarm3d.html  
     */
    class SpringArm3D extends Node3D {
        /** Returns the spring arm's current length. */
        get_hit_length(): number /*f64*/
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        
        /** Adds the [PhysicsBody3D] object with the given [RID] to the list of [PhysicsBody3D] objects excluded from the collision check. */
        add_excluded_object(RID: RID): void
        
        /** Removes the given [RID] from the list of [PhysicsBody3D] objects excluded from the collision check. */
        remove_excluded_object(RID: RID): boolean
        
        /** Clears the list of [PhysicsBody3D] objects excluded from the collision check. */
        clear_excluded_objects(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        
        /** The layers against which the collision check shall be done. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The [Shape3D] to use for the SpringArm3D.  
         *  When the shape is set, the SpringArm3D will cast the [Shape3D] on its z axis instead of performing a ray cast.  
         */
        shape: Shape3D
        
        /** The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.  
         *  To know more about how to perform a shape cast or a ray cast, please consult the [PhysicsDirectSpaceState3D] documentation.  
         */
        spring_length: number /*f64*/
        
        /** When the collision check is made, a candidate length for the SpringArm3D is given.  
         *  The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.  
         *  This margin is useful for when the SpringArm3D has a [Camera3D] as a child node: without the margin, the [Camera3D] would be placed on the exact point of collision, while with the margin the [Camera3D] would be placed close to the point of collision.  
         */
        margin: number /*f64*/
    }
    class SpringArm3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** General-purpose sprite node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sprite2d.html  
     */
    class Sprite2D extends Node2D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        
        /** Returns `true`, if the pixel at the given position is opaque and `false` in other case.  
         *      
         *  **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.  
         */
        is_pixel_opaque(pos: Vector2): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_region_filter_clip_enabled(enabled: boolean): void
        is_region_filter_clip_enabled(): boolean
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        
        /** Returns a [Rect2] representing the Sprite2D's boundary in local coordinates. Can be used to detect if the Sprite2D was clicked.  
         *  **Example:**  
         *    
         */
        get_rect(): Rect2
        
        /** [Texture2D] object to draw. */
        texture: Texture2D
        
        /** If `true`, texture is centered. */
        centered: boolean
        
        /** The texture's drawing offset. */
        offset: Vector2
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        hframes: number /*i64*/
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        vframes: number /*i64*/
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        frame: number /*i64*/
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2i
        
        /** If `true`, texture is cut from a larger atlas texture. See [member region_rect]. */
        region_enabled: boolean
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        region_rect: Rect2
        
        /** If `true`, the outermost pixels get blurred out. [member region_enabled] must be `true`. */
        region_filter_clip_enabled: boolean
        
        /** Emitted when the [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the [member texture] changes. */
        readonly texture_changed: Signal //  => void
    }
    class Sprite2DEditor extends Control {
        _add_as_sibling_or_child(_unnamed_arg0: Node, _unnamed_arg1: Node): void
    }
    class Sprite2DEditorPlugin extends EditorPlugin {
    }
    /** 2D sprite node in a 3D world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_sprite3d.html  
     */
    class Sprite3D extends SpriteBase3D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        
        /** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
        texture: Texture2D
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        hframes: number /*i64*/
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        vframes: number /*i64*/
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        frame: number /*i64*/
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2
        
        /** If `true`, the sprite will use [member region_rect] and display only the specified part of its texture. */
        region_enabled: boolean
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        region_rect: Rect2
        
        /** Emitted when the [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the [member texture] changes. */
        readonly texture_changed: Signal //  => void
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            /** If set, the texture's transparency and the opacity are used to make those parts of the sprite invisible. */
            FLAG_TRANSPARENT = 0,
            
            /** If set, lights in the environment affect the sprite. */
            FLAG_SHADED = 1,
            
            /** If set, texture can be seen from the back as well. If not, the texture is invisible when looking at it from behind. */
            FLAG_DOUBLE_SIDED = 2,
            
            /** Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it. */
            FLAG_DISABLE_DEPTH_TEST = 3,
            
            /** Label is scaled by depth so that it always appears the same size on screen. */
            FLAG_FIXED_SIZE = 4,
            
            /** Represents the size of the [enum DrawFlags] enum. */
            FLAG_MAX = 5,
        }
        enum AlphaCutMode {
            /** This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. */
            ALPHA_CUT_DISABLED = 0,
            
            /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). On the bright side, this mode doesn't suffer from transparency sorting issues when multiple transparent materials are overlapping. This mode is also known as  *alpha testing*  or  *1-bit transparency* . */
            ALPHA_CUT_DISCARD = 1,
            
            /** This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting. */
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            
            /** This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque. */
            ALPHA_CUT_HASH = 3,
        }
    }
    /** 2D sprite node in 3D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_spritebase3d.html  
     */
    class SpriteBase3D extends GeometryInstance3D {
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_axis(axis: Vector3.Axis): void
        get_axis(): Vector3.Axis
        
        /** If `true`, the specified flag will be enabled. See [enum SpriteBase3D.DrawFlags] for a list of flags. */
        set_draw_flag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        get_draw_flag(flag: SpriteBase3D.DrawFlags): boolean
        set_alpha_cut_mode(mode: SpriteBase3D.AlphaCutMode): void
        get_alpha_cut_mode(): SpriteBase3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        
        /** Returns the rectangle representing this sprite. */
        get_item_rect(): Rect2
        
        /** Returns a [TriangleMesh] with the sprite's vertices following its current configuration (such as its [member axis] and [member pixel_size]). */
        generate_triangle_mesh(): TriangleMesh
        
        /** If `true`, texture will be centered. */
        centered: boolean
        
        /** The texture's drawing offset. */
        offset: Vector2
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
        
        /** A color value used to  *multiply*  the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.  
         *      
         *  **Note:** Unlike [member CanvasItem.modulate] for 2D, colors with values above `1.0` (overbright) are not supported.  
         *      
         *  **Note:** If a [member GeometryInstance3D.material_override] is defined on the [SpriteBase3D], the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [member modulate] will be ignored. For a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] must be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.  
         */
        modulate: Color
        
        /** The size of one pixel's width on the sprite to scale it in 3D. */
        pixel_size: number /*f64*/
        
        /** The direction in which the front of the texture faces. */
        axis: number /*i64*/
        
        /** The billboard mode to use for the sprite. See [enum BaseMaterial3D.BillboardMode] for possible values. */
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
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options.  
         *      
         *  **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.  
         */
        texture_filter: number /*i64*/
        
        /** Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        render_priority: number /*i64*/
    }
    class SpriteBase3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_spriteframes.html  
     */
    class SpriteFrames extends Resource {
        /** Adds a new [param anim] animation to the library. */
        add_animation(anim: StringName): void
        
        /** Returns `true` if the [param anim] animation exists. */
        has_animation(anim: StringName): boolean
        
        /** Removes the [param anim] animation. */
        remove_animation(anim: StringName): void
        
        /** Changes the [param anim] animation's name to [param newname]. */
        rename_animation(anim: StringName, newname: StringName): void
        
        /** Returns an array containing the names associated to each animation. Values are placed in alphabetical order. */
        get_animation_names(): PackedStringArray
        
        /** Sets the speed for the [param anim] animation in frames per second. */
        set_animation_speed(anim: StringName, fps: number /*f64*/): void
        
        /** Returns the speed in frames per second for the [param anim] animation. */
        get_animation_speed(anim: StringName): number /*f64*/
        
        /** If [param loop] is `true`, the [param anim] animation will loop when it reaches the end, or the start if it is played in reverse. */
        set_animation_loop(anim: StringName, loop: boolean): void
        
        /** Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`. */
        get_animation_loop(anim: StringName): boolean
        
        /** Adds a frame to the [param anim] animation. If [param at_position] is `-1`, the frame will be added to the end of the animation. */
        add_frame(anim: StringName, texture: Texture2D, duration: number /*f64*/ = 1, at_position: number /*i64*/ = -1): void
        
        /** Sets the [param texture] and the [param duration] of the frame [param idx] in the [param anim] animation. */
        set_frame(anim: StringName, idx: number /*i64*/, texture: Texture2D, duration: number /*f64*/ = 1): void
        
        /** Removes the [param anim] animation's frame [param idx]. */
        remove_frame(anim: StringName, idx: number /*i64*/): void
        
        /** Returns the number of frames for the [param anim] animation. */
        get_frame_count(anim: StringName): number /*i64*/
        
        /** Returns the texture of the frame [param idx] in the [param anim] animation. */
        get_frame_texture(anim: StringName, idx: number /*i64*/): Texture2D
        
        /** Returns a relative duration of the frame [param idx] in the [param anim] animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:  
         *    
         *  In this example, `playing_speed` refers to either [method AnimatedSprite2D.get_playing_speed] or [method AnimatedSprite3D.get_playing_speed].  
         */
        get_frame_duration(anim: StringName, idx: number /*i64*/): number /*f64*/
        
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        
        /** Removes all animations. An empty `default` animation will be created. */
        clear_all(): void
        _set_animations(animations: Array): void
        _get_animations(): Array
        animations: Array
    }
    class SpriteFramesEditor extends HSplitContainer {
        _update_library(skipsel: boolean = false): void
        _select_animation(name: string, update_node: boolean = true): void
    }
    class SpriteFramesEditorPlugin extends EditorPlugin {
    }
    /** A PBR (Physically Based Rendering) material to be used on 3D objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_standardmaterial3d.html  
     */
    class StandardMaterial3D extends BaseMaterial3D {
    }
    class StandardMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_staticbody2d.html  
     */
    class StaticBody2D extends PhysicsBody2D {
        set_constant_linear_velocity(vel: Vector2): void
        set_constant_angular_velocity(vel: number /*f64*/): void
        get_constant_linear_velocity(): Vector2
        get_constant_angular_velocity(): number /*f64*/
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        constant_linear_velocity: Vector2
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        constant_angular_velocity: number /*f64*/
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_staticbody3d.html  
     */
    class StaticBody3D extends PhysicsBody3D {
        set_constant_linear_velocity(vel: Vector3): void
        set_constant_angular_velocity(vel: Vector3): void
        get_constant_linear_velocity(): Vector3
        get_constant_angular_velocity(): Vector3
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        constant_linear_velocity: Vector3
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        constant_angular_velocity: Vector3
    }
    /** Abstract base class for interacting with streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_streampeer.html  
     */
    class StreamPeer extends RefCounted {
        /** Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [enum Error] code. */
        put_data(data: PackedByteArray): GodotError
        
        /** Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [enum Error] code and an integer, describing how much data was actually sent. */
        put_partial_data(data: PackedByteArray): Array
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [enum Error] code and a data array. */
        get_data(bytes: number /*i64*/): Array
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the "bytes" argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values, an [enum Error] code, and a data array. */
        get_partial_data(bytes: number /*i64*/): Array
        
        /** Returns the number of bytes this [StreamPeer] has available. */
        get_available_bytes(): number /*i64*/
        set_big_endian(enable: boolean): void
        is_big_endian_enabled(): boolean
        
        /** Puts a signed byte into the stream. */
        put_8(value: number /*i64*/): void
        
        /** Puts an unsigned byte into the stream. */
        put_u8(value: number /*i64*/): void
        
        /** Puts a signed 16-bit value into the stream. */
        put_16(value: number /*i64*/): void
        
        /** Puts an unsigned 16-bit value into the stream. */
        put_u16(value: number /*i64*/): void
        
        /** Puts a signed 32-bit value into the stream. */
        put_32(value: number /*i64*/): void
        
        /** Puts an unsigned 32-bit value into the stream. */
        put_u32(value: number /*i64*/): void
        
        /** Puts a signed 64-bit value into the stream. */
        put_64(value: number /*i64*/): void
        
        /** Puts an unsigned 64-bit value into the stream. */
        put_u64(value: number /*i64*/): void
        
        /** Puts a single-precision float into the stream. */
        put_float(value: number /*f64*/): void
        
        /** Puts a double-precision float into the stream. */
        put_double(value: number /*f64*/): void
        
        /** Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.  
         *      
         *  **Note:** To put an ASCII string without prepending its size, you can use [method put_data]:  
         *    
         */
        put_string(value: string): void
        
        /** Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.  
         *      
         *  **Note:** To put a UTF-8 string without prepending its size, you can use [method put_data]:  
         *    
         */
        put_utf8_string(value: string): void
        
        /** Puts a Variant into the stream. If [param full_objects] is `true` encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        put_var(value: any, full_objects: boolean = false): void
        
        /** Gets a signed byte from the stream. */
        get_8(): number /*i64*/
        
        /** Gets an unsigned byte from the stream. */
        get_u8(): number /*i64*/
        
        /** Gets a signed 16-bit value from the stream. */
        get_16(): number /*i64*/
        
        /** Gets an unsigned 16-bit value from the stream. */
        get_u16(): number /*i64*/
        
        /** Gets a signed 32-bit value from the stream. */
        get_32(): number /*i64*/
        
        /** Gets an unsigned 32-bit value from the stream. */
        get_u32(): number /*i64*/
        
        /** Gets a signed 64-bit value from the stream. */
        get_64(): number /*i64*/
        
        /** Gets an unsigned 64-bit value from the stream. */
        get_u64(): number /*i64*/
        
        /** Gets a single-precision float from the stream. */
        get_float(): number /*f64*/
        
        /** Gets a double-precision float from the stream. */
        get_double(): number /*f64*/
        
        /** Gets an ASCII string with byte-length [param bytes] from the stream. If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_string]. */
        get_string(bytes: number /*i64*/ = -1): string
        
        /** Gets a UTF-8 string with byte-length [param bytes] from the stream (this decodes the string sent as UTF-8). If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_utf8_string]. */
        get_utf8_string(bytes: number /*i64*/ = -1): string
        
        /** Gets a Variant from the stream. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** If `true`, this [StreamPeer] will using big-endian format for encoding and decoding. */
        big_endian: boolean
    }
    /** A stream peer used to handle binary data streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_streampeerbuffer.html  
     */
    class StreamPeerBuffer extends StreamPeer {
        /** Moves the cursor to the specified position. [param position] must be a valid index of [member data_array]. */
        seek(position: number /*i64*/): void
        
        /** Returns the size of [member data_array]. */
        get_size(): number /*i64*/
        
        /** Returns the current cursor position. */
        get_position(): number /*i64*/
        
        /** Resizes the [member data_array]. This  *doesn't*  update the cursor. */
        resize(size: number /*i64*/): void
        set_data_array(data: PackedByteArray): void
        get_data_array(): PackedByteArray
        
        /** Clears the [member data_array] and resets the cursor. */
        clear(): void
        
        /** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
        duplicate(): StreamPeerBuffer
        
        /** The underlying data buffer. Setting this value resets the cursor. */
        data_array: PackedByteArray
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_streampeerextension.html */
    class StreamPeerExtension extends StreamPeer {
        /* gdvirtual */ _get_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _get_partial_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _put_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _put_partial_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_bytes(): number /*i64*/
    }
    /** A stream peer that handles GZIP and deflate compression/decompression.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_streampeergzip.html  
     */
    class StreamPeerGZIP extends StreamPeer {
        /** Start the stream in compression mode with the given [param buffer_size], if [param use_deflate] is `true` uses deflate instead of GZIP. */
        start_compression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        
        /** Start the stream in decompression mode with the given [param buffer_size], if [param use_deflate] is `true` uses deflate instead of GZIP. */
        start_decompression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        
        /** Finalizes the stream, compressing or decompressing any buffered chunk left. */
        finish(): GodotError
        
        /** Clears this stream, resetting the internal state. */
        clear(): void
    }
    namespace StreamPeerTCP {
        enum Status {
            /** The initial status of the [StreamPeerTCP]. This is also the status after disconnecting. */
            STATUS_NONE = 0,
            
            /** A status representing a [StreamPeerTCP] that is connecting to a host. */
            STATUS_CONNECTING = 1,
            
            /** A status representing a [StreamPeerTCP] that is connected to a host. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [StreamPeerTCP] in error state. */
            STATUS_ERROR = 3,
        }
    }
    /** A stream peer that handles TCP connections.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_streampeertcp.html  
     */
    class StreamPeerTCP extends StreamPeer {
        /** Opens the TCP socket, and binds it to the specified local address.  
         *  This method is generally not needed, and only used to force the subsequent call to [method connect_to_host] to use the specified [param host] and [param port] as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.  
         */
        bind(port: number /*i64*/, host: string = '*'): GodotError
        
        /** Connects to the specified `host:port` pair. A hostname will be resolved if valid. Returns [constant OK] on success. */
        connect_to_host(host: string, port: number /*i64*/): GodotError
        
        /** Poll the socket, updating its state. See [method get_status]. */
        poll(): GodotError
        
        /** Returns the status of the connection, see [enum Status]. */
        get_status(): StreamPeerTCP.Status
        
        /** Returns the IP of this peer. */
        get_connected_host(): string
        
        /** Returns the port of this peer. */
        get_connected_port(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Disconnects from host. */
        disconnect_from_host(): void
        
        /** If [param enabled] is `true`, packets will be sent immediately. If [param enabled] is `false` (the default), packet transfers will be delayed and combined using [url=https://en.wikipedia.org/wiki/Nagle%27s_algorithm]Nagle's algorithm[/url].  
         *      
         *  **Note:** It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.  
         */
        set_no_delay(enabled: boolean): void
    }
    namespace StreamPeerTLS {
        enum Status {
            /** A status representing a [StreamPeerTLS] that is disconnected. */
            STATUS_DISCONNECTED = 0,
            
            /** A status representing a [StreamPeerTLS] during handshaking. */
            STATUS_HANDSHAKING = 1,
            
            /** A status representing a [StreamPeerTLS] that is connected to a host. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [StreamPeerTLS] in error state. */
            STATUS_ERROR = 3,
            
            /** An error status that shows a mismatch in the TLS certificate domain presented by the host and the domain requested for validation. */
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    /** A stream peer that handles TLS connections.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_streampeertls.html  
     */
    class StreamPeerTLS extends StreamPeer {
        /** Poll the connection to check for incoming bytes. Call this right before [method StreamPeer.get_available_bytes] for it to work properly. */
        poll(): void
        
        /** Accepts a peer connection as a server using the given [param server_options]. See [method TLSOptions.server]. */
        accept_stream(stream: StreamPeer, server_options: TLSOptions): GodotError
        
        /** Connects to a peer using an underlying [StreamPeer] [param stream] and verifying the remote certificate is correctly signed for the given [param common_name]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        connect_to_stream(stream: StreamPeer, common_name: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Returns the status of the connection. See [enum Status] for values. */
        get_status(): StreamPeerTLS.Status
        
        /** Returns the underlying [StreamPeer] connection, used in [method accept_stream] or [method connect_to_stream]. */
        get_stream(): StreamPeer
        
        /** Disconnects from host. */
        disconnect_from_stream(): void
    }
    /** Abstract base class for defining stylized boxes for UI elements.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_stylebox.html  
     */
    class StyleBox extends Resource {
        /* gdvirtual */ _draw(to_canvas_item: RID, rect: Rect2): void
        /* gdvirtual */ _get_draw_rect(rect: Rect2): Rect2
        
        /** Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [method get_minimum_size] only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes. */
        /* gdvirtual */ _get_minimum_size(): Vector2
        /* gdvirtual */ _test_mask(point: Vector2, rect: Rect2): boolean
        
        /** Returns the minimum size that this stylebox can be shrunk to. */
        get_minimum_size(): Vector2
        
        /** Sets the default value of the specified [enum Side] to [param offset] pixels. */
        set_content_margin(margin: Side, offset: number /*f64*/): void
        
        /** Sets the default margin to [param offset] pixels for all sides. */
        set_content_margin_all(offset: number /*f64*/): void
        
        /** Returns the default margin of the specified [enum Side]. */
        get_content_margin(margin: Side): number /*f64*/
        
        /** Returns the content margin offset for the specified [enum Side].  
         *  Positive values reduce size inwards, unlike [Control]'s margin values.  
         */
        get_margin(margin: Side): number /*f64*/
        
        /** Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`. */
        get_offset(): Vector2
        
        /** Draws this stylebox using a canvas item identified by the given [RID].  
         *  The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].  
         */
        draw(canvas_item: RID, rect: Rect2): void
        
        /** Returns the [CanvasItem] that handles its [constant CanvasItem.NOTIFICATION_DRAW] or [method CanvasItem._draw] callback at this moment. */
        get_current_item_drawn(): CanvasItem
        
        /** Test a position in a rectangle, return whether it passes the mask test. */
        test_mask(point: Vector2, rect: Rect2): boolean
    }
    class StyleBoxEditorPlugin extends EditorPlugin {
    }
    /** An empty [StyleBox] (does not display anything).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_styleboxempty.html  
     */
    class StyleBoxEmpty extends StyleBox {
    }
    /** A customizable [StyleBox] that doesn't use a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_styleboxflat.html  
     */
    class StyleBoxFlat extends StyleBox {
        set_bg_color(color: Color): void
        get_bg_color(): Color
        set_border_color(color: Color): void
        get_border_color(): Color
        
        /** Sets the border width to [param width] pixels for all sides. */
        set_border_width_all(width: number /*i64*/): void
        
        /** Returns the smallest border width out of all four borders. */
        get_border_width_min(): number /*i64*/
        
        /** Sets the specified [enum Side]'s border width to [param width] pixels. */
        set_border_width(margin: Side, width: number /*i64*/): void
        
        /** Returns the specified [enum Side]'s border width. */
        get_border_width(margin: Side): number /*i64*/
        set_border_blend(blend: boolean): void
        get_border_blend(): boolean
        
        /** Sets the corner radius to [param radius] pixels for all corners. */
        set_corner_radius_all(radius: number /*i64*/): void
        
        /** Sets the corner radius to [param radius] pixels for the given [param corner]. See [enum Corner] for possible values. */
        set_corner_radius(corner: Corner, radius: number /*i64*/): void
        
        /** Returns the given [param corner]'s radius. See [enum Corner] for possible values. */
        get_corner_radius(corner: Corner): number /*i64*/
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        set_expand_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        set_expand_margin_all(size: number /*f64*/): void
        
        /** Returns the size of the specified [enum Side]'s expand margin. */
        get_expand_margin(margin: Side): number /*f64*/
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_skew(skew: Vector2): void
        get_skew(): Vector2
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        set_anti_aliased(anti_aliased: boolean): void
        is_anti_aliased(): boolean
        set_aa_size(size: number /*f64*/): void
        get_aa_size(): number /*f64*/
        set_corner_detail(detail: number /*i64*/): void
        get_corner_detail(): number /*i64*/
        
        /** The background color of the stylebox. */
        bg_color: Color
        
        /** Toggles drawing of the inner part of the stylebox. */
        draw_center: boolean
        
        /** If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).  
         *      
         *  **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.  
         */
        skew: Vector2
        
        /** Sets the color of the border. */
        border_color: Color
        
        /** If `true`, the border will fade into the background color. */
        border_blend: boolean
        
        /** This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.  
         *  For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.  
         *  A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.  
         */
        corner_detail: number /*i64*/
        
        /** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
        shadow_color: Color
        
        /** The shadow size in pixels. */
        shadow_size: number /*i64*/
        
        /** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
        shadow_offset: Vector2
        
        /** Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].  
         *      
         *  **Note:** When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to `false` to ensure crisp visuals and avoid possible visual glitches.  
         */
        anti_aliasing: boolean
        
        /** This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.  
         *      
         *  **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.  
         */
        anti_aliasing_size: number /*f64*/
    }
    /** A [StyleBox] that displays a single line of a given color and thickness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_styleboxline.html  
     */
    class StyleBoxLine extends StyleBox {
        set_color(color: Color): void
        get_color(): Color
        set_thickness(thickness: number /*i64*/): void
        get_thickness(): number /*i64*/
        set_grow_begin(offset: number /*f64*/): void
        get_grow_begin(): number /*f64*/
        set_grow_end(offset: number /*f64*/): void
        get_grow_end(): number /*f64*/
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The line's color. */
        color: Color
        
        /** The number of pixels the line will extend before the [StyleBoxLine]'s bounds. If set to a negative value, the line will begin inside the [StyleBoxLine]'s bounds. */
        grow_begin: number /*f64*/
        
        /** The number of pixels the line will extend past the [StyleBoxLine]'s bounds. If set to a negative value, the line will end inside the [StyleBoxLine]'s bounds. */
        grow_end: number /*f64*/
        
        /** The line's thickness in pixels. */
        thickness: number /*i64*/
        
        /** If `true`, the line will be vertical. If `false`, the line will be horizontal. */
        vertical: boolean
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            /** Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly. */
            AXIS_STRETCH_MODE_STRETCH = 0,
            
            /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. */
            AXIS_STRETCH_MODE_TILE = 1,
            
            /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike [constant AXIS_STRETCH_MODE_TILE], the texture may be slightly stretched to make the nine-patch texture tile seamlessly. */
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    /** A texture-based nine-patch [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_styleboxtexture.html  
     */
    class StyleBoxTexture extends StyleBox {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** Sets the margin to [param size] pixels for the specified [enum Side]. */
        set_texture_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the margin to [param size] pixels for all sides. */
        set_texture_margin_all(size: number /*f64*/): void
        
        /** Returns the margin size of the specified [enum Side]. */
        get_texture_margin(margin: Side): number /*f64*/
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        set_expand_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        set_expand_margin_all(size: number /*f64*/): void
        
        /** Returns the expand margin size of the specified [enum Side]. */
        get_expand_margin(margin: Side): number /*f64*/
        set_region_rect(region: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(enable: boolean): void
        is_draw_center_enabled(): boolean
        set_modulate(color: Color): void
        get_modulate(): Color
        set_h_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_h_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        set_v_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_v_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        
        /** The texture to use when drawing this style box. */
        texture: Texture2D
        
        /** Controls how the stylebox's texture will be stretched or tiled horizontally. See [enum AxisStretchMode] for possible values. */
        axis_stretch_horizontal: number /*i64*/
        
        /** Controls how the stylebox's texture will be stretched or tiled vertically. See [enum AxisStretchMode] for possible values. */
        axis_stretch_vertical: number /*i64*/
        
        /** Species a sub-region of the texture to use.  
         *  This is equivalent to first wrapping the texture in an [AtlasTexture] with the same region.  
         *  If empty (`Rect2(0, 0, 0, 0)`), the whole texture will be used.  
         */
        region_rect: Rect2
        
        /** Modulates the color of the texture when this style box is drawn. */
        modulate_color: Color
        
        /** If `true`, the nine-patch texture's center tile will be drawn. */
        draw_center: boolean
    }
    namespace SubViewport {
        enum ClearMode {
            /** Always clear the render target before drawing. */
            CLEAR_MODE_ALWAYS = 0,
            
            /** Never clear the render target. */
            CLEAR_MODE_NEVER = 1,
            
            /** Clear the render target on the next frame, then switch to [constant CLEAR_MODE_NEVER]. */
            CLEAR_MODE_ONCE = 2,
        }
        enum UpdateMode {
            /** Do not update the render target. */
            UPDATE_DISABLED = 0,
            
            /** Update the render target once, then switch to [constant UPDATE_DISABLED]. */
            UPDATE_ONCE = 1,
            
            /** Update the render target only when it is visible. This is the default value. */
            UPDATE_WHEN_VISIBLE = 2,
            
            /** Update the render target only when its parent is visible. */
            UPDATE_WHEN_PARENT_VISIBLE = 3,
            
            /** Always update the render target. */
            UPDATE_ALWAYS = 4,
        }
    }
    /** An interface to a game world that doesn't create a window or draw to the screen directly.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_subviewport.html  
     */
    class SubViewport extends Viewport {
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_size_2d_override(size: Vector2i): void
        get_size_2d_override(): Vector2i
        set_size_2d_override_stretch(enable: boolean): void
        is_size_2d_override_stretch_enabled(): boolean
        set_update_mode(mode: SubViewport.UpdateMode): void
        get_update_mode(): SubViewport.UpdateMode
        set_clear_mode(mode: SubViewport.ClearMode): void
        get_clear_mode(): SubViewport.ClearMode
        
        /** The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.  
         *      
         *  **Note:** If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is `true`, the viewport size cannot be changed manually.  
         */
        size: Vector2i
        
        /** The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled. */
        size_2d_override: Vector2i
        
        /** If `true`, the 2D size override affects stretch as well. */
        size_2d_override_stretch: boolean
        
        /** The clear mode when the sub-viewport is used as a render target.  
         *      
         *  **Note:** This property is intended for 2D usage.  
         */
        render_target_clear_mode: number /*i64*/
        
        /** The update mode when the sub-viewport is used as a render target. */
        render_target_update_mode: number /*i64*/
    }
    /** A container used for displaying the contents of a [SubViewport].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_subviewportcontainer.html  
     */
    class SubViewportContainer extends Container {
        /** Virtual method to be implemented by the user. If it returns `true`, the [param event] is propagated to [SubViewport] children. Propagation doesn't happen if it returns `false`. If the function is not implemented, all events are propagated to SubViewports. */
        /* gdvirtual */ _propagate_input_event(event: InputEvent): boolean
        set_stretch(enable: boolean): void
        is_stretch_enabled(): boolean
        set_stretch_shrink(amount: number /*i64*/): void
        get_stretch_shrink(): number /*i64*/
        
        /** If `true`, the sub-viewport will be automatically resized to the control's size.  
         *      
         *  **Note:** If `true`, this will prohibit changing [member SubViewport.size] of its children manually.  
         */
        stretch: boolean
        
        /** Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.  
         *  For example, a 1280×720 sub-viewport with [member stretch_shrink] set to `2` will be rendered at 640×360 while occupying the same size in the container.  
         *      
         *  **Note:** [member stretch] must be `true` for this property to work.  
         */
        stretch_shrink: number /*i64*/
    }
    class SubViewportPreviewEditorPlugin extends EditorPlugin {
    }
    namespace SurfaceTool {
        enum CustomFormat {
            /** Limits range of data passed to [method set_custom] to unsigned normalized 0 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_UNORM]. */
            CUSTOM_RGBA8_UNORM = 0,
            
            /** Limits range of data passed to [method set_custom] to signed normalized -1 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_SNORM]. */
            CUSTOM_RGBA8_SNORM = 1,
            
            /** Stores data passed to [method set_custom] as half precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_HALF]. */
            CUSTOM_RG_HALF = 2,
            
            /** Stores data passed to [method set_custom] as half precision floats and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_HALF]. */
            CUSTOM_RGBA_HALF = 3,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red color channel. See [constant Mesh.ARRAY_CUSTOM_R_FLOAT]. */
            CUSTOM_R_FLOAT = 4,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_FLOAT]. */
            CUSTOM_RG_FLOAT = 5,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red, green and blue color channels. See [constant Mesh.ARRAY_CUSTOM_RGB_FLOAT]. */
            CUSTOM_RGB_FLOAT = 6,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_FLOAT]. */
            CUSTOM_RGBA_FLOAT = 7,
            
            /** Used to indicate a disabled custom channel. */
            CUSTOM_MAX = 8,
        }
        enum SkinWeightCount {
            /** Each individual vertex can be influenced by only 4 bone weights. */
            SKIN_4_WEIGHTS = 0,
            
            /** Each individual vertex can be influenced by up to 8 bone weights. */
            SKIN_8_WEIGHTS = 1,
        }
    }
    /** Helper tool to create geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_surfacetool.html  
     */
    class SurfaceTool extends RefCounted {
        /** Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.  
         *  By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS])  
         *      
         *  **Note:** This function takes an enum, not the exact number of weights.  
         */
        set_skin_weight_count(count: SurfaceTool.SkinWeightCount): void
        
        /** By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.  
         *  Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.  
         *      
         *  **Note:** This function returns an enum, not the exact number of weights.  
         */
        get_skin_weight_count(): SurfaceTool.SkinWeightCount
        
        /** Sets the color format for this custom [param channel_index]. Use [constant CUSTOM_MAX] to disable.  
         *  Must be invoked after [method begin] and should be set before [method commit] or [method commit_to_arrays].  
         */
        set_custom_format(channel_index: number /*i64*/, format: SurfaceTool.CustomFormat): void
        
        /** Returns the format for custom [param channel_index] (currently up to 4). Returns [constant CUSTOM_MAX] if this custom channel is unused. */
        get_custom_format(channel_index: number /*i64*/): SurfaceTool.CustomFormat
        
        /** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
        begin(primitive: Mesh.PrimitiveType): void
        
        /** Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV). */
        add_vertex(vertex: Vector3): void
        
        /** Specifies a [Color] to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.  
         *      
         *  **Note:** The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.  
         */
        set_color(color: Color): void
        
        /** Specifies a normal to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_normal(normal: Vector3): void
        
        /** Specifies a tangent to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_tangent(tangent: Plane): void
        
        /** Specifies a set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_uv(uv: Vector2): void
        
        /** Specifies an optional second set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_uv2(uv2: Vector2): void
        
        /** Specifies an array of bones to use for the  *next*  vertex. [param bones] must contain 4 integers. */
        set_bones(bones: PackedInt32Array): void
        
        /** Specifies weight values to use for the  *next*  vertex. [param weights] must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_weights(weights: PackedFloat32Array): void
        
        /** Sets the custom value on this vertex for [param channel_index].  
         *  [method set_custom_format] must be called first for this [param channel_index]. Formats which are not RGBA will ignore other color channels.  
         */
        set_custom(channel_index: number /*i64*/, custom_color: Color): void
        
        /** Specifies the smooth group to use for the  *next*  vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.  
         *      
         *  **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.  
         */
        set_smooth_group(index: number /*i64*/): void
        
        /** Inserts a triangle fan made of array data into [Mesh] being constructed.  
         *  Requires the primitive type be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        add_triangle_fan(vertices: PackedVector3Array, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, colors: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, uv2s: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, normals: PackedVector3Array = <any> {} /*compound.type from 36([object Object])*/, tangents: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices. */
        add_index(index: number /*i64*/): void
        
        /** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
        index(): void
        
        /** Removes the index array by expanding the vertex array. */
        deindex(): void
        
        /** Generates normals from vertices so you do not have to do it manually. If [param flip] is `true`, the resulting normals will be inverted. [method generate_normals] should be called  *after*  generating geometry and  *before*  committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].  
         *      
         *  **Note:** [method generate_normals] only works if the primitive type to be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         *      
         *  **Note:** [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [method set_smooth_group] or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [method set_smooth_group] prior to adding vertices.  
         */
        generate_normals(flip: boolean = false): void
        
        /** Generates a tangent vector for each vertex. Requires that each vertex have UVs and normals set already (see [method generate_normals]). */
        generate_tangents(): void
        
        /** Optimizes triangle sorting for performance. Requires that [method get_primitive_type] is [constant Mesh.PRIMITIVE_TRIANGLES]. */
        optimize_indices_for_cache(): void
        
        /** Returns the axis-aligned bounding box of the vertex positions. */
        get_aabb(): AABB
        
        /** Generates a LOD for a given [param nd_threshold] in linear units (square root of quadric error metric), using at most [param target_index_count] indices.  
         *   *Deprecated.*  Unused internally and fails to preserve normals or UVs. Consider using [method ImporterMesh.generate_lods] instead.  
         */
        generate_lod(nd_threshold: number /*f64*/, target_index_count: number /*i64*/ = 3): PackedInt32Array
        
        /** Sets [Material] to be used by the [Mesh] you are constructing. */
        set_material(material: Material): void
        
        /** Returns the type of mesh geometry, such as [constant Mesh.PRIMITIVE_TRIANGLES]. */
        get_primitive_type(): Mesh.PrimitiveType
        
        /** Clear all information passed into the surface tool so far. */
        clear(): void
        
        /** Creates a vertex array from an existing [Mesh]. */
        create_from(existing: Mesh, surface: number /*i64*/): void
        
        /** Creates a vertex array from the specified blend shape of an existing [Mesh]. This can be used to extract a specific pose from a blend shape. */
        create_from_blend_shape(existing: Mesh, surface: number /*i64*/, blend_shape: string): void
        
        /** Append vertices from a given [Mesh] surface onto the current vertex array with specified [Transform3D]. */
        append_from(existing: Mesh, surface: number /*i64*/, transform: Transform3D): void
        
        /** Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].  
         *  **FIXME:** Document possible values for [param flags], it changed in 4.0. Likely some combinations of [enum Mesh.ArrayFormat].  
         */
        commit(existing: ArrayMesh = <any> {} /*compound.type from nil*/, flags: number /*i64*/ = 0): ArrayMesh
        
        /** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] API. */
        commit_to_arrays(): Array
    }
    class SurfaceUpgradeDialog extends ConfirmationDialog {
    }
    class SurfaceUpgradeTool extends Object {
        readonly upgrade_finished: Signal //  => void
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_syntaxhighlighter.html  
     */
    class SyntaxHighlighter extends Resource {
        /** Virtual method which can be overridden to return syntax highlighting data.  
         *  See [method get_line_syntax_highlighting] for more details.  
         */
        /* gdvirtual */ _get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        
        /** Virtual method which can be overridden to clear any local caches. */
        /* gdvirtual */ _clear_highlighting_cache(): void
        
        /** Virtual method which can be overridden to update any local caches. */
        /* gdvirtual */ _update_cache(): void
        
        /** Returns syntax highlighting data for a single line. If the line is not cached, calls [method _get_line_syntax_highlighting] to calculate the data.  
         *  The return [Dictionary] is column number to [Dictionary]. The column number notes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region, currently only the key "color" is supported.  
         *  **Example return:**  
         *    
         *  This will color columns 0-4 red, and columns 5-eol in green.  
         */
        get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        
        /** Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.  
         *      
         *  **Note:** This is called automatically when the associated [TextEdit] node, updates its own cache.  
         */
        update_cache(): void
        
        /** Clears all cached syntax highlighting data.  
         *  Then calls overridable method [method _clear_highlighting_cache].  
         */
        clear_highlighting_cache(): void
        
        /** Returns the associated [TextEdit] node. */
        get_text_edit(): TextEdit
    }
    /** A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_systemfont.html  
     */
    class SystemFont extends Font {
        set_antialiasing(antialiasing: TextServer.FontAntialiasing): void
        get_antialiasing(): TextServer.FontAntialiasing
        set_generate_mipmaps(generate_mipmaps: boolean): void
        get_generate_mipmaps(): boolean
        set_allow_system_fallback(allow_system_fallback: boolean): void
        is_allow_system_fallback(): boolean
        set_force_autohinter(force_autohinter: boolean): void
        is_force_autohinter(): boolean
        set_hinting(hinting: TextServer.Hinting): void
        get_hinting(): TextServer.Hinting
        set_subpixel_positioning(subpixel_positioning: TextServer.SubpixelPositioning): void
        get_subpixel_positioning(): TextServer.SubpixelPositioning
        set_multichannel_signed_distance_field(msdf: boolean): void
        is_multichannel_signed_distance_field(): boolean
        set_msdf_pixel_range(msdf_pixel_range: number /*i64*/): void
        get_msdf_pixel_range(): number /*i64*/
        set_msdf_size(msdf_size: number /*i64*/): void
        get_msdf_size(): number /*i64*/
        set_oversampling(oversampling: number /*f64*/): void
        get_oversampling(): number /*f64*/
        get_font_names(): PackedStringArray
        set_font_names(names: PackedStringArray): void
        get_font_italic(): boolean
        set_font_italic(italic: boolean): void
        set_font_weight(weight: number /*i64*/): void
        set_font_stretch(stretch: number /*i64*/): void
        
        /** Array of font family names to search, first matching font found is used. */
        font_names: PackedStringArray
        
        /** If set to `true`, italic or oblique font is preferred. */
        font_italic: boolean
        
        /** Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_weight: number /*i64*/
        
        /** Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_stretch: number /*i64*/
        
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        
        /** If set to `true`, generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. */
        force_autohinter: boolean
        
        /** Font hinting mode. */
        hinting: number /*i64*/
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        multichannel_signed_distance_field: boolean
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        msdf_pixel_range: number /*i64*/
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        
        /** Font oversampling factor, if set to `0.0` global oversampling factor is used instead. */
        oversampling: number /*f64*/
    }
    /** A TCP server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tcpserver.html  
     */
    class TCPServer extends RefCounted {
        /** Listen on the [param port] binding to [param bind_address].  
         *  If [param bind_address] is set as `"*"` (default), the server will listen on all available addresses (both IPv4 and IPv6).  
         *  If [param bind_address] is set as `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the server will listen on all available addresses matching that IP type.  
         *  If [param bind_address] is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc), the server will only listen on the interface with that addresses (or fail if no interface with the given address exists).  
         */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        
        /** Returns `true` if a connection is available for taking. */
        is_connection_available(): boolean
        
        /** Returns `true` if the server is currently listening for connections. */
        is_listening(): boolean
        
        /** Returns the local port this server is listening to. */
        get_local_port(): number /*i64*/
        
        /** If a connection is available, returns a StreamPeerTCP with the connection. */
        take_connection(): StreamPeerTCP
        
        /** Stops listening. */
        stop(): void
    }
    /** TLS configuration for clients and servers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tlsoptions.html  
     */
    class TLSOptions extends RefCounted {
        /** Creates a TLS client configuration which validates certificates and their common names (fully qualified domain names).  
         *  You can specify a custom [param trusted_chain] of certification authorities (the default CA list will be used if `null`), and optionally provide a [param common_name_override] if you expect the certificate to have a common name other than the server FQDN.  
         *      
         *  **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.  
         */
        static client(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/, common_name_override: string = ''): TLSOptions
        
        /** Creates an **unsafe** TLS client configuration where certificate validation is optional. You can optionally provide a valid [param trusted_chain], but the common name of the certificates will never be checked. Using this configuration for purposes other than testing **is not recommended**.  
         *      
         *  **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.  
         */
        static client_unsafe(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/): TLSOptions
        
        /** Creates a TLS server configuration using the provided [param key] and [param certificate].  
         *      
         *  **Note:** The [param certificate] should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).  
         */
        static server(key: CryptoKey, certificate: X509Certificate): TLSOptions
    }
    namespace TabBar {
        enum AlignmentMode {
            /** Places tabs to the left. */
            ALIGNMENT_LEFT = 0,
            
            /** Places tabs in the middle. */
            ALIGNMENT_CENTER = 1,
            
            /** Places tabs to the right. */
            ALIGNMENT_RIGHT = 2,
            
            /** Represents the size of the [enum AlignmentMode] enum. */
            ALIGNMENT_MAX = 3,
        }
        enum CloseButtonDisplayPolicy {
            /** Never show the close buttons. */
            CLOSE_BUTTON_SHOW_NEVER = 0,
            
            /** Only show the close button on the currently active tab. */
            CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1,
            
            /** Show the close button on all tabs. */
            CLOSE_BUTTON_SHOW_ALWAYS = 2,
            
            /** Represents the size of the [enum CloseButtonDisplayPolicy] enum. */
            CLOSE_BUTTON_MAX = 3,
        }
    }
    /** A control that provides a horizontal bar with tabs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tabbar.html  
     */
    class TabBar extends Control {
        set_tab_count(count: number /*i64*/): void
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        
        /** Returns the previously active tab index. */
        get_previous_tab(): number /*i64*/
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        select_previous_available(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        select_next_available(): boolean
        
        /** Sets a [param title] for the tab at index [param tab_idx]. */
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. */
        get_tab_title(tab_idx: number /*i64*/): string
        
        /** Sets tab title base writing direction. */
        set_tab_text_direction(tab_idx: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns tab title text base writing direction. */
        get_tab_text_direction(tab_idx: number /*i64*/): Control.TextDirection
        
        /** Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_tab_language(tab_idx: number /*i64*/, language: string): void
        
        /** Returns tab title language code. */
        get_tab_language(tab_idx: number /*i64*/): string
        
        /** Sets an [param icon] for the tab at index [param tab_idx]. */
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon for the tab at index [param tab_idx] or `null` if the tab has no icon. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_tab_icon_max_width(tab_idx: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        get_tab_icon_max_width(tab_idx: number /*i64*/): number /*i64*/
        
        /** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a `null` value will hide the button. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon for the right button of the tab at index [param tab_idx] or `null` if the right button has no icon. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        
        /** Removes the tab at index [param tab_idx]. */
        remove_tab(tab_idx: number /*i64*/): void
        
        /** Adds a new tab. */
        add_tab(title: string = '', icon: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        
        /** Returns the number of hidden tabs offsetted to the left. */
        get_tab_offset(): number /*i64*/
        
        /** Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
        get_offset_buttons_visible(): boolean
        
        /** Moves the scroll view to make the tab visible. */
        ensure_tab_visible(idx: number /*i64*/): void
        
        /** Returns tab [Rect2] with local position and size. */
        get_tab_rect(tab_idx: number /*i64*/): Rect2
        
        /** Moves a tab from [param from] to [param to]. */
        move_tab(from: number /*i64*/, to: number /*i64*/): void
        set_tab_close_display_policy(policy: TabBar.CloseButtonDisplayPolicy): void
        get_tab_close_display_policy(): TabBar.CloseButtonDisplayPolicy
        set_max_tab_width(width: number /*i64*/): void
        get_max_tab_width(): number /*i64*/
        set_scrolling_enabled(enabled: boolean): void
        get_scrolling_enabled(): boolean
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_scroll_to_selected(enabled: boolean): void
        get_scroll_to_selected(): boolean
        set_select_with_rmb(enabled: boolean): void
        get_select_with_rmb(): boolean
        
        /** Clears all tabs. */
        clear_tabs(): void
        
        /** The number of tabs currently in the bar. */
        tab_count: any /*Tabs,tab_*/
        
        /** Select tab at index `tab_idx`. */
        current_tab: number /*i64*/
        
        /** Sets the position at which tabs will be placed. See [enum AlignmentMode] for details. */
        tab_alignment: number /*i64*/
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        
        /** Sets when the close button will appear on the tabs. See [enum CloseButtonDisplayPolicy] for details. */
        tab_close_display_policy: number /*i64*/
        
        /** Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`. */
        max_tab_width: number /*i64*/
        
        /** if `true`, the mouse's scroll wheel can be used to navigate the scroll view. */
        scrolling_enabled: boolean
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        
        /** [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabBar]s.  
         */
        tabs_rearrange_group: number /*i64*/
        
        /** If `true`, the tab offset will be changed to keep the currently selected tab visible. */
        scroll_to_selected: boolean
        
        /** If `true`, enables selecting a tab with the right mouse button. */
        select_with_rmb: boolean
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tab_selected: Signal // tab: number /*i64*/ => void
        
        /** Emitted when switching to another tab. */
        readonly tab_changed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tab_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is right-clicked. [member select_with_rmb] must be enabled. */
        readonly tab_rmb_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab's close button is pressed.  
         *      
         *  **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:  
         *    
         */
        readonly tab_close_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab's right button is pressed. See [method set_tab_button_icon]. */
        readonly tab_button_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tab_hovered: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly active_tab_rearranged: Signal // idx_to: number /*i64*/ => void
    }
    /** A container that creates a tab for each child control, displaying only the active tab's control.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tabcontainer.html  
     */
    class TabContainer extends Container {
        /** Returns the number of tabs. */
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        
        /** Returns the previously active tab index. */
        get_previous_tab(): number /*i64*/
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        select_previous_available(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        select_next_available(): boolean
        
        /** Returns the child [Control] node located at the active tab index. */
        get_current_tab_control(): Control
        
        /** Returns the [TabBar] contained in this container.  
         *  **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].  
         */
        get_tab_bar(): TabBar
        
        /** Returns the [Control] node from the tab at index [param tab_idx]. */
        get_tab_control(tab_idx: number /*i64*/): Control
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        set_tabs_visible(visible: boolean): void
        are_tabs_visible(): boolean
        set_all_tabs_in_front(is_front: boolean): void
        is_all_tabs_in_front(): boolean
        
        /** Sets a custom title for the tab at index [param tab_idx] (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again. */
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. Tab titles default to the name of the indexed child node, but this can be overridden with [method set_tab_title]. */
        get_tab_title(tab_idx: number /*i64*/): string
        
        /** Sets an icon for the tab at index [param tab_idx]. */
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the [Texture2D] for the tab at index [param tab_idx] or `null` if the tab has no [Texture2D]. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        
        /** Sets the button icon from the tab at index [param tab_idx]. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the button icon from the tab at index [param tab_idx]. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        
        /** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
        get_tab_idx_from_control(control: Control): number /*i64*/
        
        /** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to `null` will make it go away). Clicking it will expand the [Popup] node. */
        set_popup(popup: Node): void
        
        /** Returns the [Popup] node instance if one has been set already with [method set_popup].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): Popup
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_use_hidden_tabs_for_min_size(enabled: boolean): void
        get_use_hidden_tabs_for_min_size(): boolean
        set_tab_focus_mode(focus_mode: Control.FocusMode): void
        get_tab_focus_mode(): Control.FocusMode
        
        /** Sets the position at which tabs will be placed. See [enum TabBar.AlignmentMode] for details. */
        tab_alignment: number /*i64*/
        
        /** The current tab index. When set, this index's [Control] node's `visible` property is set to `true` and all others are set to `false`. */
        current_tab: number /*i64*/
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        
        /** If `true`, tabs are visible. If `false`, tabs' content and titles are hidden. */
        tabs_visible: boolean
        
        /** If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel. */
        all_tabs_in_front: boolean
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        
        /** [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabContainer]s.  
         */
        tabs_rearrange_group: number /*i64*/
        
        /** If `true`, child [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
        use_hidden_tabs_for_min_size: boolean
        
        /** The focus access mode for the internal [TabBar] node. */
        tab_focus_mode: number /*i64*/
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly active_tab_rearranged: Signal // idx_to: number /*i64*/ => void
        
        /** Emitted when switching to another tab. */
        readonly tab_changed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tab_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tab_hovered: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tab_selected: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the user clicks on the button icon on this tab. */
        readonly tab_button_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the [TabContainer]'s [Popup] button is clicked. See [method set_popup] for details. */
        readonly pre_popup_pressed: Signal //  => void
    }
    namespace TextEdit {
        enum MenuItems {
            /** Cuts (copies and clears) the selected text. */
            MENU_CUT = 0,
            
            /** Copies the selected text. */
            MENU_COPY = 1,
            
            /** Pastes the clipboard text over the selected text (or at the cursor's position). */
            MENU_PASTE = 2,
            
            /** Erases the whole [TextEdit] text. */
            MENU_CLEAR = 3,
            
            /** Selects the whole [TextEdit] text. */
            MENU_SELECT_ALL = 4,
            
            /** Undoes the previous action. */
            MENU_UNDO = 5,
            
            /** Redoes the previous action. */
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
        enum EditAction {
            /** No current action. */
            ACTION_NONE = 0,
            
            /** A typing action. */
            ACTION_TYPING = 1,
            
            /** A backwards delete action. */
            ACTION_BACKSPACE = 2,
            
            /** A forward delete action. */
            ACTION_DELETE = 3,
        }
        enum SearchFlags {
            /** Match case when searching. */
            SEARCH_MATCH_CASE = 1,
            
            /** Match whole words when searching. */
            SEARCH_WHOLE_WORDS = 2,
            
            /** Search from end to beginning. */
            SEARCH_BACKWARDS = 4,
        }
        enum CaretType {
            /** Vertical line caret. */
            CARET_TYPE_LINE = 0,
            
            /** Block caret. */
            CARET_TYPE_BLOCK = 1,
        }
        enum SelectionMode {
            /** Not selecting. */
            SELECTION_MODE_NONE = 0,
            
            /** Select as if `shift` is pressed. */
            SELECTION_MODE_SHIFT = 1,
            
            /** Select single characters as if the user single clicked. */
            SELECTION_MODE_POINTER = 2,
            
            /** Select whole words as if the user double clicked. */
            SELECTION_MODE_WORD = 3,
            
            /** Select whole lines as if the user triple clicked. */
            SELECTION_MODE_LINE = 4,
        }
        enum LineWrappingMode {
            /** Line wrapping is disabled. */
            LINE_WRAPPING_NONE = 0,
            
            /** Line wrapping occurs at the control boundary, beyond what would normally be visible. */
            LINE_WRAPPING_BOUNDARY = 1,
        }
        enum GutterType {
            /** Draw a string. */
            GUTTER_TYPE_STRING = 0,
            
            /** Draw an icon. */
            GUTTER_TYPE_ICON = 1,
            
            /** Custom draw. */
            GUTTER_TYPE_CUSTOM = 2,
        }
    }
    /** A multiline text editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textedit.html  
     */
    class TextEdit extends Control {
        /** Override this method to define what happens when the user types in the provided key [param unicode_char]. */
        /* gdvirtual */ _handle_unicode_input(unicode_char: number /*i64*/, caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user presses the backspace key. */
        /* gdvirtual */ _backspace(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a cut operation. */
        /* gdvirtual */ _cut(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a copy operation. */
        /* gdvirtual */ _copy(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a paste operation. */
        /* gdvirtual */ _paste(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a paste operation with middle mouse button.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        /* gdvirtual */ _paste_primary_clipboard(caret_index: number /*i64*/): void
        _text_changed_emit(): void
        
        /** Returns if the user has IME text. */
        has_ime_text(): boolean
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        
        /** Sets the tab size for the [TextEdit] to use. */
        set_tab_size(size: number /*i64*/): void
        
        /** Returns the [TextEdit]'s' tab size. */
        get_tab_size(): number /*i64*/
        
        /** If `true`, sets the user into overtype mode. When the user types in this mode, it will override existing text. */
        set_overtype_mode_enabled(enabled: boolean): void
        
        /** Returns whether the user is in overtype mode. */
        is_overtype_mode_enabled(): boolean
        set_context_menu_enabled(enabled: boolean): void
        is_context_menu_enabled(): boolean
        set_shortcut_keys_enabled(enabled: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_virtual_keyboard_enabled(enabled: boolean): void
        is_virtual_keyboard_enabled(): boolean
        set_middle_mouse_paste_enabled(enabled: boolean): void
        is_middle_mouse_paste_enabled(): boolean
        
        /** Performs a full reset of [TextEdit], including undo history. */
        clear(): void
        set_text(text: string): void
        get_text(): string
        
        /** Returns the number of lines in the text. */
        get_line_count(): number /*i64*/
        set_placeholder(text: string): void
        get_placeholder(): string
        
        /** Sets the text for a specific line. */
        set_line(line: number /*i64*/, new_text: string): void
        
        /** Returns the text of a specific line. */
        get_line(line: number /*i64*/): string
        
        /** Returns the width in pixels of the [param wrap_index] on [param line]. */
        get_line_width(line: number /*i64*/, wrap_index: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the maximum value of the line height among all lines.  
         *      
         *  **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.  
         */
        get_line_height(): number /*i64*/
        
        /** Returns the number of spaces and `tab * tab_size` before the first char. */
        get_indent_level(line: number /*i64*/): number /*i64*/
        
        /** Returns the first column containing a non-whitespace character. */
        get_first_non_whitespace_column(line: number /*i64*/): number /*i64*/
        
        /** Swaps the two lines. */
        swap_lines(from_line: number /*i64*/, to_line: number /*i64*/): void
        
        /** Inserts a new line with [param text] at [param line]. */
        insert_line_at(line: number /*i64*/, text: string): void
        
        /** Insert the specified text at the caret position. */
        insert_text_at_caret(text: string, caret_index: number /*i64*/ = -1): void
        
        /** Removes text between the given positions.  
         *      
         *  **Note:** This does not adjust the caret or selection, which as a result it can end up in an invalid position.  
         */
        remove_text(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/): void
        
        /** Returns the last unhidden line in the entire [TextEdit]. */
        get_last_unhidden_line(): number /*i64*/
        
        /** Returns the count to the next visible line from [param line] to `line + visible_amount`. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3. */
        get_next_visible_line_offset_from(line: number /*i64*/, visible_amount: number /*i64*/): number /*i64*/
        
        /** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index. */
        get_next_visible_line_index_offset_from(line: number /*i64*/, wrap_index: number /*i64*/, visible_amount: number /*i64*/): Vector2i
        
        /** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
        backspace(caret_index: number /*i64*/ = -1): void
        
        /** Cut's the current selection. Can be overridden with [method _cut]. */
        cut(caret_index: number /*i64*/ = -1): void
        
        /** Copies the current text selection. Can be overridden with [method _copy]. */
        copy(caret_index: number /*i64*/ = -1): void
        
        /** Paste at the current location. Can be overridden with [method _paste]. */
        paste(caret_index: number /*i64*/ = -1): void
        
        /** Pastes the primary clipboard. */
        paste_primary_clipboard(caret_index: number /*i64*/ = -1): void
        
        /** Starts an action, will end the current action if [param action] is different.  
         *  An action will also end after a call to [method end_action], after [member ProjectSettings.gui/timers/text_edit_idle_detect_sec] is triggered or a new undoable step outside the [method start_action] and [method end_action] calls.  
         */
        start_action(action: TextEdit.EditAction): void
        
        /** Marks the end of steps in the current action started with [method start_action]. */
        end_action(): void
        
        /** Starts a multipart edit. All edits will be treated as one action until [method end_complex_operation] is called. */
        begin_complex_operation(): void
        
        /** Ends a multipart edit, started with [method begin_complex_operation]. If called outside a complex operation, the current operation is pushed onto the undo/redo stack. */
        end_complex_operation(): void
        
        /** Returns `true` if an "undo" action is available. */
        has_undo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        has_redo(): boolean
        
        /** Perform undo operation. */
        undo(): void
        
        /** Perform redo operation. */
        redo(): void
        
        /** Clears the undo history. */
        clear_undo_history(): void
        
        /** Tag the current version as saved. */
        tag_saved_version(): void
        
        /** Returns the current version of the [TextEdit]. The version is a count of recorded operations by the undo/redo history. */
        get_version(): number /*i64*/
        
        /** Returns the last tagged saved version from [method tag_saved_version]. */
        get_saved_version(): number /*i64*/
        
        /** Sets the search text. See [method set_search_flags]. */
        set_search_text(search_text: string): void
        
        /** Sets the search [param flags]. This is used with [method set_search_text] to highlight occurrences of the searched text. Search flags can be specified from the [enum SearchFlags] enum. */
        set_search_flags(flags: number /*i64*/): void
        
        /** Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.  
         *  In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.  
         *    
         */
        search(text: string, flags: number /*i64*/, from_line: number /*i64*/, from_colum: number /*i64*/): Vector2i
        
        /** Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`. */
        set_tooltip_request_func(callback: Callable): void
        
        /** Returns the local mouse position adjusted for the text direction. */
        get_local_mouse_pos(): Vector2
        
        /** Returns the word at [param position]. */
        get_word_at_pos(position: Vector2): string
        
        /** Returns the line and column at the given position. In the returned vector, `x` is the column, `y` is the line. If [param allow_out_of_bounds] is `false` and the position is not over the text, both vector values will be set to `-1`. */
        get_line_column_at_pos(position: Vector2i, allow_out_of_bounds: boolean = true): Vector2i
        
        /** Returns the local position for the given [param line] and [param column]. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.  
         */
        get_pos_at_line_column(line: number /*i64*/, column: number /*i64*/): Vector2i
        
        /** Returns the local position and size for the grapheme at the given [param line] and [param column]. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.  
         */
        get_rect_at_line_column(line: number /*i64*/, column: number /*i64*/): Rect2i
        
        /** Returns the equivalent minimap line at [param position]. */
        get_minimap_line_at_pos(position: Vector2i): number /*i64*/
        
        /** Returns `true` if the user is dragging their mouse for scrolling or selecting. */
        is_dragging_cursor(): boolean
        
        /** Returns whether the mouse is over selection. If [param edges] is `true`, the edges are considered part of the selection. */
        is_mouse_over_selection(edges: boolean, caret_index: number /*i64*/ = -1): boolean
        _emit_caret_changed(): void
        set_caret_type(type: TextEdit.CaretType): void
        get_caret_type(): TextEdit.CaretType
        set_caret_blink_enabled(enable: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_draw_caret_when_editable_disabled(enable: boolean): void
        is_drawing_caret_when_editable_disabled(): boolean
        set_move_caret_on_right_click_enabled(enable: boolean): void
        is_move_caret_on_right_click_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_multiple_carets_enabled(enabled: boolean): void
        is_multiple_carets_enabled(): boolean
        
        /** Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid. */
        add_caret(line: number /*i64*/, col: number /*i64*/): number /*i64*/
        
        /** Removes the given caret index.  
         *      
         *  **Note:** This can result in adjustment of all other caret indices.  
         */
        remove_caret(caret: number /*i64*/): void
        
        /** Removes all additional carets. */
        remove_secondary_carets(): void
        
        /** Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.  
         *      
         *  **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.  
         */
        merge_overlapping_carets(): void
        
        /** Returns the number of carets in this [TextEdit]. */
        get_caret_count(): number /*i64*/
        
        /** Adds an additional caret above or below every caret. If [param below] is true the new caret will be added below and above otherwise. */
        add_caret_at_carets(below: boolean): void
        
        /** Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [method insert_text_at_caret] are applied. */
        get_caret_index_edit_order(): PackedInt32Array
        
        /** Reposition the carets affected by the edit. This assumes edits are applied in edit order, see [method get_caret_index_edit_order]. */
        adjust_carets_after_edit(caret: number /*i64*/, from_line: number /*i64*/, from_col: number /*i64*/, to_line: number /*i64*/, to_col: number /*i64*/): void
        
        /** Returns `true` if the caret is visible on the screen. */
        is_caret_visible(caret_index: number /*i64*/ = 0): boolean
        
        /** Returns the caret pixel draw position. */
        get_caret_draw_pos(caret_index: number /*i64*/ = 0): Vector2
        
        /** Moves the caret to the specified [param line] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *  If [param can_be_hidden] is `true`, the specified [param line] can be hidden.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        set_caret_line(line: number /*i64*/, adjust_viewport: boolean = true, can_be_hidden: boolean = true, wrap_index: number /*i64*/ = 0, caret_index: number /*i64*/ = 0): void
        
        /** Returns the line the editing caret is on. */
        get_caret_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Moves the caret to the specified [param column] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        set_caret_column(column: number /*i64*/, adjust_viewport: boolean = true, caret_index: number /*i64*/ = 0): void
        
        /** Returns the column the editing caret is at. */
        get_caret_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the wrap index the editing caret is on. */
        get_caret_wrap_index(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns a [String] text with the word under the caret's location. */
        get_word_under_caret(caret_index: number /*i64*/ = -1): string
        set_selecting_enabled(enable: boolean): void
        is_selecting_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        
        /** Sets the current selection mode. */
        set_selection_mode(mode: TextEdit.SelectionMode, line: number /*i64*/ = -1, column: number /*i64*/ = -1, caret_index: number /*i64*/ = 0): void
        
        /** Returns the current selection mode. */
        get_selection_mode(): TextEdit.SelectionMode
        
        /** Select all the text.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        select_all(): void
        
        /** Selects the word under the caret. */
        select_word_under_caret(caret_index: number /*i64*/ = -1): void
        
        /** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
        add_selection_for_next_occurrence(): void
        
        /** Perform selection, from line/column to line/column.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        select(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/, caret_index: number /*i64*/ = 0): void
        
        /** Returns `true` if the user has selected text. */
        has_selection(caret_index: number /*i64*/ = -1): boolean
        
        /** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value `-1`. */
        get_selected_text(caret_index: number /*i64*/ = -1): string
        
        /** Returns the original start line of the selection. */
        get_selection_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the original start column of the selection. */
        get_selection_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection begin line. */
        get_selection_from_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection begin column. */
        get_selection_from_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection end line. */
        get_selection_to_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection end column. */
        get_selection_to_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Deselects the current selection. */
        deselect(caret_index: number /*i64*/ = -1): void
        
        /** Deletes the selected text. */
        delete_selection(caret_index: number /*i64*/ = -1): void
        _update_wrap_at_column(force: boolean = false): void
        set_line_wrapping_mode(mode: TextEdit.LineWrappingMode): void
        get_line_wrapping_mode(): TextEdit.LineWrappingMode
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        
        /** Returns if the given line is wrapped. */
        is_line_wrapped(line: number /*i64*/): boolean
        
        /** Returns the number of times the given line is wrapped. */
        get_line_wrap_count(line: number /*i64*/): number /*i64*/
        
        /** Returns the wrap index of the given line column. */
        get_line_wrap_index_at_column(line: number /*i64*/, column: number /*i64*/): number /*i64*/
        
        /** Returns an array of [String]s representing each wrapped index. */
        get_line_wrapped_text(line: number /*i64*/): PackedStringArray
        set_smooth_scroll_enabled(enable: boolean): void
        is_smooth_scroll_enabled(): boolean
        
        /** Returns the [VScrollBar] of the [TextEdit]. */
        get_v_scroll_bar(): VScrollBar
        
        /** Returns the [HScrollBar] used by [TextEdit]. */
        get_h_scroll_bar(): HScrollBar
        set_v_scroll(value: number /*f64*/): void
        get_v_scroll(): number /*f64*/
        set_h_scroll(value: number /*i64*/): void
        get_h_scroll(): number /*i64*/
        set_scroll_past_end_of_file_enabled(enable: boolean): void
        is_scroll_past_end_of_file_enabled(): boolean
        set_v_scroll_speed(speed: number /*f64*/): void
        get_v_scroll_speed(): number /*f64*/
        set_fit_content_height_enabled(enabled: boolean): void
        is_fit_content_height_enabled(): boolean
        
        /** Returns the scroll position for [param wrap_index] of [param line]. */
        get_scroll_pos_for_line(line: number /*i64*/, wrap_index: number /*i64*/ = 0): number /*f64*/
        
        /** Positions the [param wrap_index] of [param line] at the top of the viewport. */
        set_line_as_first_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Returns the first visible line. */
        get_first_visible_line(): number /*i64*/
        
        /** Positions the [param wrap_index] of [param line] at the center of the viewport. */
        set_line_as_center_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Positions the [param wrap_index] of [param line] at the bottom of the viewport. */
        set_line_as_last_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Returns the last visible line. Use [method get_last_full_visible_line_wrap_index] for the wrap index. */
        get_last_full_visible_line(): number /*i64*/
        
        /** Returns the last visible wrap index of the last visible line. */
        get_last_full_visible_line_wrap_index(): number /*i64*/
        
        /** Returns the number of visible lines, including wrapped text. */
        get_visible_line_count(): number /*i64*/
        
        /** Returns the total number of visible + wrapped lines between the two lines. */
        get_visible_line_count_in_range(from_line: number /*i64*/, to_line: number /*i64*/): number /*i64*/
        
        /** Returns the number of lines that may be drawn. */
        get_total_visible_line_count(): number /*i64*/
        
        /** Adjust the viewport so the caret is visible. */
        adjust_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        
        /** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to `0`. */
        center_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        set_draw_minimap(enabled: boolean): void
        is_drawing_minimap(): boolean
        set_minimap_width(width: number /*i64*/): void
        get_minimap_width(): number /*i64*/
        
        /** Returns the number of lines that may be drawn on the minimap. */
        get_minimap_visible_lines(): number /*i64*/
        
        /** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of `-1` appends the gutter to the right. */
        add_gutter(at: number /*i64*/ = -1): void
        
        /** Removes the gutter from this [TextEdit]. */
        remove_gutter(gutter: number /*i64*/): void
        
        /** Returns the number of gutters registered. */
        get_gutter_count(): number /*i64*/
        
        /** Sets the name of the gutter. */
        set_gutter_name(gutter: number /*i64*/, name: string): void
        
        /** Returns the name of the gutter at the given index. */
        get_gutter_name(gutter: number /*i64*/): string
        
        /** Sets the type of gutter. */
        set_gutter_type(gutter: number /*i64*/, type: TextEdit.GutterType): void
        
        /** Returns the type of the gutter at the given index. */
        get_gutter_type(gutter: number /*i64*/): TextEdit.GutterType
        
        /** Set the width of the gutter. */
        set_gutter_width(gutter: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the width of the gutter at the given index. */
        get_gutter_width(gutter: number /*i64*/): number /*i64*/
        
        /** Sets whether the gutter should be drawn. */
        set_gutter_draw(gutter: number /*i64*/, draw: boolean): void
        
        /** Returns whether the gutter is currently drawn. */
        is_gutter_drawn(gutter: number /*i64*/): boolean
        
        /** Sets the gutter as clickable. This will change the mouse cursor to a pointing hand when hovering over the gutter. */
        set_gutter_clickable(gutter: number /*i64*/, clickable: boolean): void
        
        /** Returns whether the gutter is clickable. */
        is_gutter_clickable(gutter: number /*i64*/): boolean
        
        /** Sets the gutter to overwritable. See [method merge_gutters]. */
        set_gutter_overwritable(gutter: number /*i64*/, overwritable: boolean): void
        
        /** Returns whether the gutter is overwritable. */
        is_gutter_overwritable(gutter: number /*i64*/): boolean
        
        /** Merge the gutters from [param from_line] into [param to_line]. Only overwritable gutters will be copied. */
        merge_gutters(from_line: number /*i64*/, to_line: number /*i64*/): void
        
        /** Set a custom draw method for the gutter. The callback method must take the following args: `line: int, gutter: int, Area: Rect2`. */
        set_gutter_custom_draw(column: number /*i64*/, draw_callback: Callable): void
        
        /** Returns the total width of all gutters and internal padding. */
        get_total_gutter_width(): number /*i64*/
        
        /** Sets the metadata for [param gutter] on [param line] to [param metadata]. */
        set_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/, metadata: any): void
        
        /** Returns the metadata currently in [param gutter] at [param line]. */
        get_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/): any
        
        /** Sets the text for [param gutter] on [param line] to [param text]. */
        set_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/, text: string): void
        
        /** Returns the text currently in [param gutter] at [param line]. */
        get_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/): string
        
        /** Sets the icon for [param gutter] on [param line] to [param icon]. */
        set_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon currently in [param gutter] at [param line]. */
        get_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/): Texture2D
        
        /** Sets the color for [param gutter] on [param line] to [param color]. */
        set_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/, color: Color): void
        
        /** Returns the color currently in [param gutter] at [param line]. */
        get_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/): Color
        
        /** If [param clickable] is `true`, makes the [param gutter] on [param line] clickable. See [signal gutter_clicked]. */
        set_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/, clickable: boolean): void
        
        /** Returns whether the gutter on the given line is clickable. */
        is_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/): boolean
        
        /** Sets the current background color of the line. Set to `Color(0, 0, 0, 0)` for no color. */
        set_line_background_color(line: number /*i64*/, color: Color): void
        
        /** Returns the current background color of the line. `Color(0, 0, 0, 0)` is returned if no color is set. */
        get_line_background_color(line: number /*i64*/): Color
        set_syntax_highlighter(syntax_highlighter: SyntaxHighlighter): void
        get_syntax_highlighter(): SyntaxHighlighter
        set_highlight_current_line(enabled: boolean): void
        is_highlight_current_line_enabled(): boolean
        set_highlight_all_occurrences(enabled: boolean): void
        is_highlight_all_occurrences_enabled(): boolean
        get_draw_control_chars(): boolean
        set_draw_control_chars(enabled: boolean): void
        set_draw_tabs(enabled: boolean): void
        is_drawing_tabs(): boolean
        set_draw_spaces(enabled: boolean): void
        is_drawing_spaces(): boolean
        
        /** Returns the [PopupMenu] of this [TextEdit]. By default, this menu is displayed when right-clicking on the [TextEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_menu(): PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        
        /** String value of the [TextEdit]. */
        text: string
        
        /** Text shown when the [TextEdit] is empty. It is **not** the [TextEdit]'s default value (see [member text]). */
        placeholder_text: string
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        editable: boolean
        
        /** If `true`, a right-click displays the context menu. */
        context_menu_enabled: boolean
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        shortcut_keys_enabled: boolean
        
        /** If `true`, text can be selected.  
         *  If `false`, text can not be selected by the user or by the [method select] or [method select_all] methods.  
         */
        selecting_enabled: boolean
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        
        /** If `true`, allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        
        /** If `true`, the native virtual keyboard is shown when focused on platforms that support it. */
        virtual_keyboard_enabled: boolean
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        middle_mouse_paste_enabled: boolean
        
        /** Sets the line wrapping mode to use. */
        wrap_mode: number /*i64*/
        
        /** If [member wrap_mode] is set to [constant LINE_WRAPPING_BOUNDARY], sets text wrapping mode. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Scroll smoothly over the text rather than jumping to the next location. */
        scroll_smooth: boolean
        
        /** Sets the scroll speed with the minimap or when [member scroll_smooth] is enabled. */
        scroll_v_scroll_speed: number /*f64*/
        
        /** Allow scrolling past the last line into "virtual" space. */
        scroll_past_end_of_file: boolean
        
        /** If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line. */
        scroll_vertical: number /*f64*/
        
        /** If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels. */
        scroll_horizontal: number /*i64*/
        
        /** If `true`, [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. */
        scroll_fit_content_height: boolean
        
        /** If `true`, a minimap is shown, providing an outline of your source code. */
        minimap_draw: boolean
        
        /** The width, in pixels, of the minimap. */
        minimap_width: number /*i64*/
        
        /** Set the type of caret to draw. */
        caret_type: number /*i64*/
        
        /** If `true`, makes the caret blink. */
        caret_blink: boolean
        
        /** The interval at which the caret blinks (in seconds). */
        caret_blink_interval: number /*f64*/
        
        /** If `true`, caret will be visible when [member editable] is disabled. */
        caret_draw_when_editable_disabled: boolean
        
        /** If `true`, a right-click moves the caret at the mouse position before displaying the context menu.  
         *  If `false`, the context menu ignores mouse location.  
         */
        caret_move_on_right_click: boolean
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        caret_mid_grapheme: boolean
        
        /** Sets if multiple carets are allowed. */
        caret_multiple: boolean
        
        /** Sets the [SyntaxHighlighter] to use. */
        syntax_highlighter: SyntaxHighlighter
        
        /** If `true`, all occurrences of the selected text will be highlighted. */
        highlight_all_occurrences: boolean
        
        /** If `true`, the line containing the cursor is highlighted. */
        highlight_current_line: boolean
        
        /** If `true`, control characters are displayed. */
        draw_control_chars: boolean
        
        /** If `true`, the "tab" character will have a visible representation. */
        draw_tabs: boolean
        
        /** If `true`, the "space" character will have a visible representation. */
        draw_spaces: boolean
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
        
        /** Emitted when [method clear] is called or [member text] is set. */
        readonly text_set: Signal //  => void
        
        /** Emitted when the text changes. */
        readonly text_changed: Signal //  => void
        
        /** Emitted immediately when the text changes.  
         *  When text is added [param from_line] will be less than [param to_line]. On a remove [param to_line] will be less than [param from_line].  
         */
        readonly lines_edited_from: Signal // from_line: number /*i64*/, to_line: number /*i64*/ => void
        
        /** Emitted when the caret changes position. */
        readonly caret_changed: Signal //  => void
        
        /** Emitted when a gutter is clicked. */
        readonly gutter_clicked: Signal // line: number /*i64*/, gutter: number /*i64*/ => void
        
        /** Emitted when a gutter is added. */
        readonly gutter_added: Signal //  => void
        
        /** Emitted when a gutter is removed. */
        readonly gutter_removed: Signal //  => void
    }
    /** Holds a line of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textline.html  
     */
    class TextLine extends RefCounted {
        /** Clears text line (removes text and inline objects). */
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        set_bidi_override(override: Array): void
        
        /** Adds text span and font to draw it. */
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        
        /** Aligns text to the given tab-stops. */
        tab_align(tab_stops: PackedFloat32Array): void
        set_flags(flags: TextServer.JustificationFlag): void
        get_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        
        /** Returns array of inline objects. */
        get_objects(): Array
        
        /** Returns bounding rectangle of the inline object. */
        get_object_rect(key: any): Rect2
        
        /** Returns size of the bounding box of the text. */
        get_size(): Vector2
        
        /** Returns TextServer buffer RID. */
        get_rid(): RID
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        get_line_ascent(): number /*f64*/
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        get_line_descent(): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        get_line_width(): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        get_line_underline_position(): number /*f64*/
        
        /** Returns thickness of the underline. */
        get_line_underline_thickness(): number /*f64*/
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        hit_test(coords: number /*f64*/): number /*i64*/
        
        /** Text writing direction. */
        direction: number /*i64*/
        
        /** Text orientation. */
        orientation: number /*i64*/
        
        /** If set to `true` text will display invalid characters. */
        preserve_invalid: boolean
        
        /** If set to `true` text will display control characters. */
        preserve_control: boolean
        
        /** Text line width. */
        width: number /*f64*/
        
        /** Sets text alignment within the line as if the line was horizontal. */
        alignment: number /*i64*/
        
        /** Line alignment rules. For more info see [TextServer]. */
        flags: number /*i64*/
        
        /** Sets the clipping behavior when the text exceeds the text line's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
    }
    /** Generate an [PrimitiveMesh] from the text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textmesh.html  
     */
    class TextMesh extends PrimitiveMesh {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_text(text: string): void
        get_text(): string
        set_font(font: Font): void
        get_font(): Font
        set_font_size(font_size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_curve_step(curve_step: number /*f64*/): void
        get_curve_step(): number /*f64*/
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
        _font_changed(): void
        
        /** The text to generate mesh from. */
        text: string
        
        /** Font configuration used to display text. */
        font: Font
        
        /** Font size of the [TextMesh]'s text. */
        font_size: number /*i64*/
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        
        /** If `true`, all the text displays as UPPERCASE. */
        uppercase: boolean
        
        /** Vertical space between lines in multiline [TextMesh]. */
        line_spacing: number /*f64*/
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** The size of one pixel's width on the text to scale it in 3D. */
        pixel_size: number /*f64*/
        
        /** Step (in pixels) used to approximate Bézier curves. */
        curve_step: number /*f64*/
        
        /** Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
        depth: number /*f64*/
        
        /** Text width (in pixels), used for fill alignment. */
        width: number /*f64*/
        
        /** The text drawing offset (in pixels). */
        offset: Vector2
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    /** Holds a paragraph of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textparagraph.html  
     */
    class TextParagraph extends RefCounted {
        /** Clears text paragraph (removes text and inline objects). */
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_custom_punctuation(custom_punctuation: string): void
        get_custom_punctuation(): string
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        set_bidi_override(override: Array): void
        
        /** Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        set_dropcap(text: string, font: Font, font_size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, language: string = ''): boolean
        
        /** Removes dropcap. */
        clear_dropcap(): void
        
        /** Adds text span and font to draw it. */
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_alignment(alignment: HorizontalAlignment): void
        get_alignment(): HorizontalAlignment
        
        /** Aligns paragraph to the given tab-stops. */
        tab_align(tab_stops: PackedFloat32Array): void
        set_break_flags(flags: TextServer.LineBreakFlag): void
        get_break_flags(): TextServer.LineBreakFlag
        set_justification_flags(flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        
        /** Returns the size of the bounding box of the paragraph, without line breaks. */
        get_non_wrapped_size(): Vector2
        
        /** Returns the size of the bounding box of the paragraph. */
        get_size(): Vector2
        
        /** Returns TextServer full string buffer RID. */
        get_rid(): RID
        
        /** Returns TextServer line buffer RID. */
        get_line_rid(line: number /*i64*/): RID
        
        /** Returns drop cap text buffer RID. */
        get_dropcap_rid(): RID
        
        /** Returns number of lines in the paragraph. */
        get_line_count(): number /*i64*/
        set_max_lines_visible(max_lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        
        /** Returns array of inline objects in the line. */
        get_line_objects(line: number /*i64*/): Array
        
        /** Returns bounding rectangle of the inline object. */
        get_line_object_rect(line: number /*i64*/, key: any): Rect2
        
        /** Returns size of the bounding box of the line of text. */
        get_line_size(line: number /*i64*/): Vector2
        
        /** Returns character range of the line. */
        get_line_range(line: number /*i64*/): Vector2i
        
        /** Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        get_line_ascent(line: number /*i64*/): number /*f64*/
        
        /** Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        get_line_descent(line: number /*i64*/): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the line of text. */
        get_line_width(line: number /*i64*/): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        get_line_underline_position(line: number /*i64*/): number /*f64*/
        
        /** Returns thickness of the underline. */
        get_line_underline_thickness(line: number /*i64*/): number /*f64*/
        
        /** Returns drop cap bounding box size. */
        get_dropcap_size(): Vector2
        
        /** Returns number of lines used by dropcap. */
        get_dropcap_lines(): number /*i64*/
        
        /** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_line(canvas: RID, pos: Vector2, line: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw outline of the single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_line_outline(canvas: RID, pos: Vector2, line: number /*i64*/, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_dropcap(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw drop cap outline into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_dropcap_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns caret character offset at the specified coordinates. This function always returns a valid position. */
        hit_test(coords: Vector2): number /*i64*/
        
        /** Text writing direction. */
        direction: number /*i64*/
        
        /** Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        custom_punctuation: string
        
        /** Text orientation. */
        orientation: number /*i64*/
        
        /** If set to `true` text will display invalid characters. */
        preserve_invalid: boolean
        
        /** If set to `true` text will display control characters. */
        preserve_control: boolean
        
        /** Paragraph horizontal alignment. */
        alignment: number /*i64*/
        
        /** Line breaking rules. For more info see [TextServer]. */
        break_flags: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** Sets the clipping behavior when the text exceeds the paragraph's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        
        /** Paragraph width. */
        width: number /*f64*/
        
        /** Limits the lines of text shown. */
        max_lines_visible: number /*i64*/
    }
    namespace TextServer {
        enum FontAntialiasing {
            /** Font glyphs are rasterized as 1-bit bitmaps. */
            FONT_ANTIALIASING_NONE = 0,
            
            /** Font glyphs are rasterized as 8-bit grayscale anti-aliased bitmaps. */
            FONT_ANTIALIASING_GRAY = 1,
            
            /** Font glyphs are rasterized for LCD screens.  
             *  LCD subpixel layout is determined by the value of `gui/theme/lcd_subpixel_layout` project settings.  
             *  LCD subpixel anti-aliasing mode is suitable only for rendering horizontal, unscaled text in 2D.  
             */
            FONT_ANTIALIASING_LCD = 2,
        }
        enum FontLCDSubpixelLayout {
            /** Unknown or unsupported subpixel layout, LCD subpixel antialiasing is disabled. */
            FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0,
            
            /** Horizontal RGB subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1,
            
            /** Horizontal BGR subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2,
            
            /** Vertical RGB subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3,
            
            /** Vertical BGR subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4,
            
            /** Represents the size of the [enum FontLCDSubpixelLayout] enum. */
            FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5,
        }
        enum Direction {
            /** Text direction is determined based on contents and current locale. */
            DIRECTION_AUTO = 0,
            
            /** Text is written from left to right. */
            DIRECTION_LTR = 1,
            
            /** Text is written from right to left. */
            DIRECTION_RTL = 2,
            
            /** Text writing direction is the same as base string writing direction. Used for BiDi override only. */
            DIRECTION_INHERITED = 3,
        }
        enum Orientation {
            /** Text is written horizontally. */
            ORIENTATION_HORIZONTAL = 0,
            
            /** Left to right text is written vertically from top to bottom.  
             *  Right to left text is written vertically from bottom to top.  
             */
            ORIENTATION_VERTICAL = 1,
        }
        enum JustificationFlag {
            /** Do not justify text. */
            JUSTIFICATION_NONE = 0,
            
            /** Justify text by adding and removing kashidas. */
            JUSTIFICATION_KASHIDA = 1,
            
            /** Justify text by changing width of the spaces between the words. */
            JUSTIFICATION_WORD_BOUND = 2,
            
            /** Remove trailing and leading spaces from the justified text. */
            JUSTIFICATION_TRIM_EDGE_SPACES = 4,
            
            /** Only apply justification to the part of the text after the last tab. */
            JUSTIFICATION_AFTER_LAST_TAB = 8,
            
            /** Apply justification to the trimmed line with ellipsis. */
            JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16,
            
            /** Do not apply justification to the last line of the paragraph. */
            JUSTIFICATION_SKIP_LAST_LINE = 32,
            
            /** Do not apply justification to the last line of the paragraph with visible characters (takes precedence over [constant JUSTIFICATION_SKIP_LAST_LINE]). */
            JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64,
            
            /** Always apply justification to the paragraphs with a single line ([constant JUSTIFICATION_SKIP_LAST_LINE] and [constant JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS] are ignored). */
            JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128,
        }
        enum AutowrapMode {
            /** Autowrap is disabled. */
            AUTOWRAP_OFF = 0,
            
            /** Wraps the text inside the node's bounding rectangle by allowing to break lines at arbitrary positions, which is useful when very limited space is available. */
            AUTOWRAP_ARBITRARY = 1,
            
            /** Wraps the text inside the node's bounding rectangle by soft-breaking between words. */
            AUTOWRAP_WORD = 2,
            
            /** Behaves similarly to [constant AUTOWRAP_WORD], but force-breaks a word if that single word does not fit in one line. */
            AUTOWRAP_WORD_SMART = 3,
        }
        enum LineBreakFlag {
            /** Do not break the line. */
            BREAK_NONE = 0,
            
            /** Break the line at the line mandatory break characters (e.g. `"\n"`). */
            BREAK_MANDATORY = 1,
            
            /** Break the line between the words. */
            BREAK_WORD_BOUND = 2,
            
            /** Break the line between any unconnected graphemes. */
            BREAK_GRAPHEME_BOUND = 4,
            
            /** Should be used only in conjunction with [constant BREAK_WORD_BOUND], break the line between any unconnected graphemes, if it's impossible to break it between the words. */
            BREAK_ADAPTIVE = 8,
            
            /** Remove edge spaces from the broken line segments. */
            BREAK_TRIM_EDGE_SPACES = 16,
        }
        enum VisibleCharactersBehavior {
            /** Trims text before the shaping. e.g, increasing [member Label.visible_characters] or [member RichTextLabel.visible_characters] value is visually identical to typing the text. */
            VC_CHARS_BEFORE_SHAPING = 0,
            
            /** Displays glyphs that are mapped to the first [member Label.visible_characters] or [member RichTextLabel.visible_characters] characters from the beginning of the text. */
            VC_CHARS_AFTER_SHAPING = 1,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left or from the right, depending on [member Control.layout_direction] value. */
            VC_GLYPHS_AUTO = 2,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left. */
            VC_GLYPHS_LTR = 3,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the right. */
            VC_GLYPHS_RTL = 4,
        }
        enum OverrunBehavior {
            /** No text trimming is performed. */
            OVERRUN_NO_TRIMMING = 0,
            
            /** Trims the text per character. */
            OVERRUN_TRIM_CHAR = 1,
            
            /** Trims the text per word. */
            OVERRUN_TRIM_WORD = 2,
            
            /** Trims the text per character and adds an ellipsis to indicate that parts are hidden. */
            OVERRUN_TRIM_ELLIPSIS = 3,
            
            /** Trims the text per word and adds an ellipsis to indicate that parts are hidden. */
            OVERRUN_TRIM_WORD_ELLIPSIS = 4,
        }
        enum TextOverrunFlag {
            /** No trimming is performed. */
            OVERRUN_NO_TRIM = 0,
            
            /** Trims the text when it exceeds the given width. */
            OVERRUN_TRIM = 1,
            
            /** Trims the text per word instead of per grapheme. */
            OVERRUN_TRIM_WORD_ONLY = 2,
            
            /** Determines whether an ellipsis should be added at the end of the text. */
            OVERRUN_ADD_ELLIPSIS = 4,
            
            /** Determines whether the ellipsis at the end of the text is enforced and may not be hidden. */
            OVERRUN_ENFORCE_ELLIPSIS = 8,
            
            /** Accounts for the text being justified before attempting to trim it (see [enum JustificationFlag]). */
            OVERRUN_JUSTIFICATION_AWARE = 16,
        }
        enum GraphemeFlag {
            /** Grapheme is supported by the font, and can be drawn. */
            GRAPHEME_IS_VALID = 1,
            
            /** Grapheme is part of right-to-left or bottom-to-top run. */
            GRAPHEME_IS_RTL = 2,
            
            /** Grapheme is not part of source text, it was added by justification process. */
            GRAPHEME_IS_VIRTUAL = 4,
            
            /** Grapheme is whitespace. */
            GRAPHEME_IS_SPACE = 8,
            
            /** Grapheme is mandatory break point (e.g. `"\n"`). */
            GRAPHEME_IS_BREAK_HARD = 16,
            
            /** Grapheme is optional break point (e.g. space). */
            GRAPHEME_IS_BREAK_SOFT = 32,
            
            /** Grapheme is the tabulation character. */
            GRAPHEME_IS_TAB = 64,
            
            /** Grapheme is kashida. */
            GRAPHEME_IS_ELONGATION = 128,
            
            /** Grapheme is punctuation character. */
            GRAPHEME_IS_PUNCTUATION = 256,
            
            /** Grapheme is underscore character. */
            GRAPHEME_IS_UNDERSCORE = 512,
            
            /** Grapheme is connected to the previous grapheme. Breaking line before this grapheme is not safe. */
            GRAPHEME_IS_CONNECTED = 1024,
            
            /** It is safe to insert a U+0640 before this grapheme for elongation. */
            GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048,
            
            /** Grapheme is an object replacement character for the embedded object. */
            GRAPHEME_IS_EMBEDDED_OBJECT = 4096,
        }
        enum Hinting {
            /** Disables font hinting (smoother but less crisp). */
            HINTING_NONE = 0,
            
            /** Use the light font hinting mode. */
            HINTING_LIGHT = 1,
            
            /** Use the default font hinting mode (crisper but less smooth).  
             *      
             *  **Note:** This hinting mode changes both horizontal and vertical glyph metrics. If applied to monospace font, some glyphs might have different width.  
             */
            HINTING_NORMAL = 2,
        }
        enum SubpixelPositioning {
            /** Glyph horizontal position is rounded to the whole pixel size, each glyph is rasterized once. */
            SUBPIXEL_POSITIONING_DISABLED = 0,
            
            /** Glyph horizontal position is rounded based on font size.  
             *  - To one quarter of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE].  
             *  - To one half of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE].  
             *  - To the whole pixel size for larger fonts.  
             */
            SUBPIXEL_POSITIONING_AUTO = 1,
            
            /** Glyph horizontal position is rounded to one half of the pixel size, each glyph is rasterized up to two times. */
            SUBPIXEL_POSITIONING_ONE_HALF = 2,
            
            /** Glyph horizontal position is rounded to one quarter of the pixel size, each glyph is rasterized up to four times. */
            SUBPIXEL_POSITIONING_ONE_QUARTER = 3,
            
            /** Maximum font size which will use one half of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
            SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20,
            
            /** Maximum font size which will use one quarter of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
            SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16,
        }
        enum Feature {
            /** TextServer supports simple text layouts. */
            FEATURE_SIMPLE_LAYOUT = 1,
            
            /** TextServer supports bidirectional text layouts. */
            FEATURE_BIDI_LAYOUT = 2,
            
            /** TextServer supports vertical layouts. */
            FEATURE_VERTICAL_LAYOUT = 4,
            
            /** TextServer supports complex text shaping. */
            FEATURE_SHAPING = 8,
            
            /** TextServer supports justification using kashidas. */
            FEATURE_KASHIDA_JUSTIFICATION = 16,
            
            /** TextServer supports complex line/word breaking rules (e.g. dictionary based). */
            FEATURE_BREAK_ITERATORS = 32,
            
            /** TextServer supports loading bitmap fonts. */
            FEATURE_FONT_BITMAP = 64,
            
            /** TextServer supports loading dynamic (TrueType, OpeType, etc.) fonts. */
            FEATURE_FONT_DYNAMIC = 128,
            
            /** TextServer supports multichannel signed distance field dynamic font rendering. */
            FEATURE_FONT_MSDF = 256,
            
            /** TextServer supports loading system fonts. */
            FEATURE_FONT_SYSTEM = 512,
            
            /** TextServer supports variable fonts. */
            FEATURE_FONT_VARIABLE = 1024,
            
            /** TextServer supports locale dependent and context sensitive case conversion. */
            FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048,
            
            /** TextServer require external data file for some features, see [method load_support_data]. */
            FEATURE_USE_SUPPORT_DATA = 4096,
            
            /** TextServer supports UAX #31 identifier validation, see [method is_valid_identifier]. */
            FEATURE_UNICODE_IDENTIFIERS = 8192,
            
            /** TextServer supports [url=https://unicode.org/reports/tr36/]Unicode Technical Report #36[/url] and [url=https://unicode.org/reports/tr39/]Unicode Technical Standard #39[/url] based spoof detection features. */
            FEATURE_UNICODE_SECURITY = 16384,
        }
        enum ContourPointTag {
            /** Contour point is on the curve. */
            CONTOUR_CURVE_TAG_ON = 1,
            
            /** Contour point isn't on the curve, but serves as a control point for a conic (quadratic) Bézier arc. */
            CONTOUR_CURVE_TAG_OFF_CONIC = 0,
            
            /** Contour point isn't on the curve, but serves as a control point for a cubic Bézier arc. */
            CONTOUR_CURVE_TAG_OFF_CUBIC = 2,
        }
        enum SpacingType {
            /** Spacing for each glyph. */
            SPACING_GLYPH = 0,
            
            /** Spacing for the space character. */
            SPACING_SPACE = 1,
            
            /** Spacing at the top of the line. */
            SPACING_TOP = 2,
            
            /** Spacing at the bottom of the line. */
            SPACING_BOTTOM = 3,
            
            /** Represents the size of the [enum SpacingType] enum. */
            SPACING_MAX = 4,
        }
        enum FontStyle {
            /** Font is bold. */
            FONT_BOLD = 1,
            
            /** Font is italic or oblique. */
            FONT_ITALIC = 2,
            
            /** Font have fixed-width characters. */
            FONT_FIXED_WIDTH = 4,
        }
        enum StructuredTextParser {
            /** Use default Unicode BiDi algorithm. */
            STRUCTURED_TEXT_DEFAULT = 0,
            
            /** BiDi override for URI. */
            STRUCTURED_TEXT_URI = 1,
            
            /** BiDi override for file path. */
            STRUCTURED_TEXT_FILE = 2,
            
            /** BiDi override for email. */
            STRUCTURED_TEXT_EMAIL = 3,
            
            /** BiDi override for lists. Structured text options: list separator [String]. */
            STRUCTURED_TEXT_LIST = 4,
            
            /** BiDi override for GDScript. */
            STRUCTURED_TEXT_GDSCRIPT = 5,
            
            /** User defined structured text BiDi override function. */
            STRUCTURED_TEXT_CUSTOM = 6,
        }
        enum FixedSizeScaleMode {
            /** Bitmap font is not scaled. */
            FIXED_SIZE_SCALE_DISABLE = 0,
            
            /** Bitmap font is scaled to the closest integer multiple of the font's fixed size. This is the recommended option for pixel art fonts. */
            FIXED_SIZE_SCALE_INTEGER_ONLY = 1,
            
            /** Bitmap font is scaled to an arbitrary (fractional) size. This is the recommended option for non-pixel art fonts. */
            FIXED_SIZE_SCALE_ENABLED = 2,
        }
    }
    /** A server interface for font management and text rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textserver.html  
     */
    class TextServer extends RefCounted {
        /** Returns `true` if the server supports a feature. */
        has_feature(feature: TextServer.Feature): boolean
        
        /** Returns the name of the server interface. */
        get_name(): string
        
        /** Returns text server features, see [enum Feature]. */
        get_features(): number /*i64*/
        
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries).  
         *      
         *  **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.  
         */
        load_support_data(filename: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        get_support_data_filename(): string
        
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        get_support_data_info(): string
        
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.  
         *      
         *  **Note:** This function is used by during project export, to include TextServer database.  
         */
        save_support_data(filename: string): boolean
        
        /** Returns `true` if locale is right-to-left. */
        is_locale_right_to_left(locale: string): boolean
        
        /** Converts readable feature, variation, script or language name to OpenType tag. */
        name_to_tag(name: string): number /*i64*/
        
        /** Converts OpenType tag to readable feature, variation, script or language name. */
        tag_to_name(tag: number /*i64*/): string
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        has(rid: RID): boolean
        
        /** Frees an object created by this [TextServer]. */
        free_rid(rid: RID): void
        
        /** Creates a new, empty font cache entry resource. To free the resulting resource, use the [method free_rid] method. */
        create_font(): RID
        
        /** Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the [method free_rid] method. */
        create_font_linked_variation(font_rid: RID): RID
        
        /** Sets font source data, e.g contents of the dynamic font source file. */
        font_set_data(font_rid: RID, data: PackedByteArray): void
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        font_get_face_index(font_rid: RID): number /*i64*/
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        font_get_face_count(font_rid: RID): number /*i64*/
        
        /** Sets the font style flags, see [enum FontStyle].  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], [method font_set_embolden], or [method font_set_transform] instead.  
         */
        font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        
        /** Returns font style flags, see [enum FontStyle]. */
        font_get_style(font_rid: RID): TextServer.FontStyle
        
        /** Sets the font family name. */
        font_set_name(font_rid: RID, name: string): void
        
        /** Returns font family name. */
        font_get_name(font_rid: RID): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        font_get_ot_name_strings(font_rid: RID): Dictionary
        
        /** Sets the font style name. */
        font_set_style_name(font_rid: RID, name: string): void
        
        /** Returns font style name. */
        font_get_style_name(font_rid: RID): string
        
        /** Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_embolden] instead.  
         */
        font_set_weight(font_rid: RID, weight: number /*i64*/): void
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_get_weight(font_rid: RID): number /*i64*/
        
        /** Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_transform] instead.  
         */
        font_set_stretch(font_rid: RID, weight: number /*i64*/): void
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_get_stretch(font_rid: RID): number /*i64*/
        
        /** Sets font anti-aliasing mode. */
        font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        
        /** Returns font anti-aliasing mode. */
        font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        
        /** If set to `true` font texture mipmap generation is enabled. */
        font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        
        /** Returns `true` if font texture mipmap generation is enabled. */
        font_get_generate_mipmaps(font_rid: RID): boolean
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        
        /** Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        
        /** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
        font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        
        /** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
        font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        
        /** Sets source font size used to generate MSDF textures. */
        font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        
        /** Returns source font size used to generate MSDF textures. */
        font_get_msdf_size(font_rid: RID): number /*i64*/
        
        /** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
        font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        
        /** Returns bitmap font fixed size. */
        font_get_fixed_size(font_rid: RID): number /*i64*/
        
        /** Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero. */
        font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        
        /** Returns bitmap font scaling mode. */
        font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        
        /** Returns `true` if system fonts can be automatically used as fallbacks. */
        font_is_allow_system_fallback(font_rid: RID): boolean
        
        /** If set to `true` auto-hinting is preferred over font built-in hinting. */
        font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        
        /** Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only. */
        font_is_force_autohinter(font_rid: RID): boolean
        
        /** Sets font hinting mode. Used by dynamic fonts only. */
        font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        
        /** Returns the font hinting mode. Used by dynamic fonts only. */
        font_get_hinting(font_rid: RID): TextServer.Hinting
        
        /** Sets font subpixel glyph positioning mode. */
        font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        
        /** Returns font subpixel glyph positioning mode. */
        font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        
        /** Returns font embolden strength. */
        font_get_embolden(font_rid: RID): number /*f64*/
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Returns the spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        font_set_transform(font_rid: RID, transform: Transform2D): void
        
        /** Returns 2D transform applied to the font outlines. */
        font_get_transform(font_rid: RID): Transform2D
        
        /** Sets variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_get_variation_coordinates(font_rid: RID): Dictionary
        
        /** Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only. */
        font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        
        /** Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only. */
        font_get_oversampling(font_rid: RID): number /*f64*/
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        font_get_size_cache_list(font_rid: RID): Array
        
        /** Removes all font sizes from the cache entry. */
        font_clear_size_cache(font_rid: RID): void
        
        /** Removes specified font size from the cache entry. */
        font_remove_size_cache(font_rid: RID, size: Vector2i): void
        
        /** Sets the font ascent (number of pixels above the baseline). */
        font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets the font descent (number of pixels below the baseline). */
        font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets pixel offset of the underline below the baseline. */
        font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        
        /** Returns pixel offset of the underline below the baseline. */
        font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets thickness of the underline in pixels. */
        font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        
        /** Returns thickness of the underline in pixels. */
        font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets scaling factor of the color bitmap font. */
        font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        
        /** Returns scaling factor of the color bitmap font. */
        font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Returns number of textures used by font cache entry. */
        font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method font_remove_glyph] to remove them manually.  
         */
        font_clear_textures(font_rid: RID, size: Vector2i): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, remove them manually, using [method font_remove_glyph].  
         */
        font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        
        /** Sets font cache texture image data. */
        font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        
        /** Returns font cache texture image data. */
        font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        
        /** Sets array containing glyph packing data. */
        font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        
        /** Returns array containing glyph packing data. */
        font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        
        /** Removes all rendered glyphs information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        font_clear_glyphs(font_rid: RID, size: Vector2i): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets glyph offset from the baseline. */
        font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        
        /** Returns size of the glyph. */
        font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets size of the glyph. */
        font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        
        /** Returns index of the cache texture containing the glyph. */
        font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        
        /** Sets index of the cache texture containing the glyph. */
        font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        
        /** Returns resource ID of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        
        /** Returns size of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Returns outline contours of the glyph as a [Dictionary] with the following contents:  
         *  `points`         - [PackedVector3Array], containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the [enum ContourPointTag] values.  
         *  `contours`       - [PackedInt32Array], containing indices the end points of each contour.  
         *  `orientation`    - [bool], contour orientation. If `true`, clockwise contours must be filled.  
         */
        font_get_glyph_contours(font: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        
        /** Returns list of the kerning overrides. */
        font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        
        /** Removes all kerning overrides. */
        font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        
        /** Removes kerning override for the pair of glyphs. */
        font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        
        /** Sets kerning for the pair of glyphs. */
        font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. See [method font_get_char_from_glyph_index]. */
        font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method font_get_glyph_index]. */
        font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        font_has_char(font_rid: RID, char: number /*i64*/): boolean
        
        /** Returns a string containing all the characters available in the font. */
        font_get_supported_chars(font_rid: RID): string
        
        /** Renders the range of characters to the font cache texture. */
        font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        
        /** Renders specified glyph to the font cache texture. */
        font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size].  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size].  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        font_is_language_supported(font_rid: RID, language: string): boolean
        
        /** Adds override for [method font_is_language_supported]. */
        font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        font_get_language_support_override(font_rid: RID, language: string): boolean
        
        /** Remove language support override. */
        font_remove_language_support_override(font_rid: RID, language: string): void
        
        /** Returns list of language support overrides. */
        font_get_language_support_overrides(font_rid: RID): PackedStringArray
        
        /** Returns `true`, if font supports given script (ISO 15924 code). */
        font_is_script_supported(font_rid: RID, script: string): boolean
        
        /** Adds override for [method font_is_script_supported]. */
        font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        font_get_script_support_override(font_rid: RID, script: string): boolean
        
        /** Removes script support override. */
        font_remove_script_support_override(font_rid: RID, script: string): void
        
        /** Returns list of script support overrides. */
        font_get_script_support_overrides(font_rid: RID): PackedStringArray
        
        /** Sets font OpenType feature set override. */
        font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        
        /** Returns font OpenType feature set override. */
        font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        
        /** Returns the dictionary of the supported OpenType features. */
        font_supported_feature_list(font_rid: RID): Dictionary
        
        /** Returns the dictionary of the supported OpenType variation coordinates. */
        font_supported_variation_list(font_rid: RID): Dictionary
        
        /** Returns the font oversampling factor, shared by all fonts in the TextServer. */
        font_get_global_oversampling(): number /*f64*/
        
        /** Sets oversampling factor, shared by all font in the TextServer.  
         *      
         *  **Note:** This value can be automatically changed by display server.  
         */
        font_set_global_oversampling(oversampling: number /*f64*/): void
        
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        
        /** Draws box displaying character hexadecimal code. Used for replacing missing characters. */
        draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        
        /** Creates new buffer for complex text layout, with the given [param direction] and [param orientation]. To free the resulting buffer, use [method free_rid] method.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        create_shaped_text(direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): RID
        
        /** Clears text buffer (removes text and inline objects). */
        shaped_text_clear(rid: RID): void
        
        /** Sets desired text direction. If set to [constant DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shaped_text_set_direction(shaped: RID, direction: TextServer.Direction = 0): void
        
        /** Returns direction of the text. */
        shaped_text_get_direction(shaped: RID): TextServer.Direction
        
        /** Returns direction of the text, inferred by the BiDi algorithm. */
        shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        shaped_text_set_bidi_override(shaped: RID, override: Array): void
        
        /** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        
        /** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shaped_text_get_custom_punctuation(shaped: RID): string
        
        /** Sets desired text orientation.  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation = 0): void
        
        /** Returns text orientation. */
        shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        
        /** If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.  
         *      
         *  **Note:** If set to `false`, nothing is displayed in place of invalid characters.  
         */
        shaped_text_get_preserve_invalid(shaped: RID): boolean
        
        /** If set to `true` text buffer will display control characters. */
        shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display control characters. */
        shaped_text_get_preserve_control(shaped: RID): boolean
        
        /** Sets extra spacing added between glyphs or lines in pixels. */
        shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Returns extra spacing added between glyphs or lines in pixels. */
        shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        
        /** Adds text span and font to draw it to the text buffer. */
        shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        
        /** Returns number of text spans added using [method shaped_text_add_string] or [method shaped_text_add_object]. */
        shaped_get_span_count(shaped: RID): number /*i64*/
        
        /** Returns text span metadata. */
        shaped_get_span_meta(shaped: RID, index: number /*i64*/): any
        
        /** Changes text span font, font size and OpenType features, without changing the text. */
        shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/): void
        
        /** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
        shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        
        /** Returns the parent buffer from which the substring originates. */
        shaped_text_get_parent(shaped: RID): RID
        
        /** Adjusts text width to fit to specified width, returns new text width. */
        shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag = 3): number /*f64*/
        
        /** Aligns shaped text to the given tab-stops. */
        shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        
        /** Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.  
         *      
         *  **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.  
         */
        shaped_text_shape(shaped: RID): boolean
        
        /** Returns `true` if buffer is successfully shaped. */
        shaped_text_is_ready(shaped: RID): boolean
        
        /** Returns `true` if text buffer contains any visible characters. */
        shaped_text_has_visible_chars(shaped: RID): boolean
        
        /** Returns an array of glyphs in the visual order. */
        shaped_text_get_glyphs(shaped: RID): Array
        
        /** Returns text glyphs in the logical order. */
        shaped_text_sort_logical(shaped: RID): Array
        
        /** Returns number of glyphs in the buffer. */
        shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        
        /** Returns substring buffer character range in the parent buffer. */
        shaped_text_get_range(shaped: RID): Vector2i
        
        /** Breaks text to the lines and columns. Returns character ranges for each segment. */
        shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/ = 0, once: boolean = true, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        
        /** Breaks text to the lines and returns character ranges for each line. */
        shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/ = 0, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        
        /** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking (see [enum GraphemeFlag]). */
        shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag = 264): PackedInt32Array
        
        /** Returns the position of the overrun trim. */
        shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        
        /** Returns position of the ellipsis. */
        shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        
        /** Returns array of the glyphs in the ellipsis. */
        shaped_text_get_ellipsis_glyphs(shaped: RID): Array
        
        /** Returns number of glyphs in the ellipsis. */
        shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        
        /** Trims text if it exceeds the given width. */
        shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/ = 0, overrun_trim_flags: TextServer.TextOverrunFlag = 0): void
        
        /** Returns array of inline objects. */
        shaped_text_get_objects(shaped: RID): Array
        
        /** Returns bounding rectangle of the inline object. */
        shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        
        /** Returns size of the text. */
        shaped_text_get_size(shaped: RID): Vector2
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).  
         *      
         *  **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.  
         */
        shaped_text_get_ascent(shaped: RID): number /*f64*/
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).  
         *      
         *  **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.  
         */
        shaped_text_get_descent(shaped: RID): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        shaped_text_get_width(shaped: RID): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        shaped_text_get_underline_position(shaped: RID): number /*f64*/
        
        /** Returns thickness of the underline. */
        shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        
        /** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
        shaped_text_get_carets(shaped: RID, position: number /*i64*/): Dictionary
        
        /** Returns selection rectangles for the specified character range. */
        shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        
        /** Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found. */
        shaped_text_hit_test_grapheme(shaped: RID, coords: number /*f64*/): number /*i64*/
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        shaped_text_hit_test_position(shaped: RID, coords: number /*f64*/): number /*i64*/
        
        /** Returns composite character's bounds as offsets from the start of the line. */
        shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        
        /** Returns grapheme end position closest to the [param pos]. */
        shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns grapheme start position closest to the [param pos]. */
        shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns array of the composite character boundaries. */
        shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        
        /** Returns composite character end position closest to the [param pos]. */
        shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns composite character start position closest to the [param pos]. */
        shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns composite character position closest to the [param pos]. */
        shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). */
        shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). */
        shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns dominant direction of in the range of text. */
        shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): TextServer.Direction
        
        /** Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language].  
         *  If [param language] is omitted, the active locale will be used.  
         */
        format_number(number: string, language: string = ''): string
        
        /** Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9). */
        parse_number(number: string, language: string = ''): string
        
        /** Returns percent sign used in the [param language]. */
        percent_sign(language: string = ''): string
        
        /** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.  
         *  When [param chars_per_line] is greater than zero, line break boundaries are returned instead.  
         *    
         */
        string_get_word_breaks(string_: string, language: string = '', chars_per_line: number /*i64*/ = 0): PackedInt32Array
        
        /** Returns array of the composite character boundaries.  
         *    
         */
        string_get_character_breaks(string_: string, language: string = ''): PackedInt32Array
        
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found.  
         *      
         *  **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with [method spoof_check].  
         *      
         *  **Note:** Always returns `-1` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        
        /** Returns `true` if [param string] is likely to be an attempt at confusing the reader.  
         *      
         *  **Note:** Always returns `false` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        spoof_check(string_: string): boolean
        
        /** Strips diacritics from the string.  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        strip_diacritics(string_: string): string
        
        /** Returns `true` if [param string] is a valid identifier.  
         *  If the text server supports the [constant FEATURE_UNICODE_IDENTIFIERS] feature, a valid identifier must:  
         *  - Conform to normalization form C.  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         *  - Use UAX #31 recommended scripts only (mixed scripts are allowed).  
         *  If the [constant FEATURE_UNICODE_IDENTIFIERS] feature is not supported, a valid identifier must:  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         */
        is_valid_identifier(string_: string): boolean
        
        /** Returns the string converted to uppercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        string_to_upper(string_: string, language: string = ''): string
        
        /** Returns the string converted to lowercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        string_to_lower(string_: string, language: string = ''): string
        
        /** Default implementation of the BiDi algorithm override function. See [enum StructuredTextParser] for more info. */
        parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
    }
    /** An advanced text server with support for BiDi, complex text layout, and contextual OpenType features. Used in Godot by default.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textserveradvanced.html  
     */
    class TextServerAdvanced extends TextServerExtension {
    }
    /** A dummy text server that can't render text or manage fonts.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textserverdummy.html  
     */
    class TextServerDummy extends TextServerExtension {
    }
    /** Base class for custom [TextServer] implementations (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textserverextension.html  
     */
    class TextServerExtension extends TextServer {
        /* gdvirtual */ _has_feature(feature: TextServer.Feature): boolean
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_features(): number /*i64*/
        /* gdvirtual */ _free_rid(rid: RID): void
        /* gdvirtual */ _has(rid: RID): boolean
        /* gdvirtual */ _load_support_data(filename: string): boolean
        /* gdvirtual */ _get_support_data_filename(): string
        /* gdvirtual */ _get_support_data_info(): string
        /* gdvirtual */ _save_support_data(filename: string): boolean
        /* gdvirtual */ _is_locale_right_to_left(locale: string): boolean
        /* gdvirtual */ _name_to_tag(name: string): number /*i64*/
        /* gdvirtual */ _tag_to_name(tag: number /*i64*/): string
        /* gdvirtual */ _create_font(): RID
        /* gdvirtual */ _create_font_linked_variation(font_rid: RID): RID
        /* gdvirtual */ _font_set_data(font_rid: RID, data: PackedByteArray): void
        /* gdvirtual */ _font_set_data_ptr(font_rid: RID, data_ptr: number /*i64*/, data_size: number /*i64*/): void
        /* gdvirtual */ _font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        /* gdvirtual */ _font_get_face_index(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_get_face_count(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        /* gdvirtual */ _font_get_style(font_rid: RID): TextServer.FontStyle
        /* gdvirtual */ _font_set_name(font_rid: RID, name: string): void
        /* gdvirtual */ _font_get_name(font_rid: RID): string
        /* gdvirtual */ _font_get_ot_name_strings(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_style_name(font_rid: RID, name_style: string): void
        /* gdvirtual */ _font_get_style_name(font_rid: RID): string
        /* gdvirtual */ _font_set_weight(font_rid: RID, weight: number /*i64*/): void
        /* gdvirtual */ _font_get_weight(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_stretch(font_rid: RID, stretch: number /*i64*/): void
        /* gdvirtual */ _font_get_stretch(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        /* gdvirtual */ _font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        /* gdvirtual */ _font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        /* gdvirtual */ _font_get_generate_mipmaps(font_rid: RID): boolean
        /* gdvirtual */ _font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        /* gdvirtual */ _font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        /* gdvirtual */ _font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        /* gdvirtual */ _font_get_fixed_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        /* gdvirtual */ _font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        /* gdvirtual */ _font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        /* gdvirtual */ _font_is_allow_system_fallback(font_rid: RID): boolean
        /* gdvirtual */ _font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        /* gdvirtual */ _font_is_force_autohinter(font_rid: RID): boolean
        /* gdvirtual */ _font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        /* gdvirtual */ _font_get_hinting(font_rid: RID): TextServer.Hinting
        /* gdvirtual */ _font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        /* gdvirtual */ _font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        /* gdvirtual */ _font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        /* gdvirtual */ _font_get_embolden(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _font_set_transform(font_rid: RID, transform: Transform2D): void
        /* gdvirtual */ _font_get_transform(font_rid: RID): Transform2D
        /* gdvirtual */ _font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        /* gdvirtual */ _font_get_variation_coordinates(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        /* gdvirtual */ _font_get_oversampling(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_get_size_cache_list(font_rid: RID): Array
        /* gdvirtual */ _font_clear_size_cache(font_rid: RID): void
        /* gdvirtual */ _font_remove_size_cache(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        /* gdvirtual */ _font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        /* gdvirtual */ _font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        /* gdvirtual */ _font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        /* gdvirtual */ _font_clear_textures(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        /* gdvirtual */ _font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        /* gdvirtual */ _font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        /* gdvirtual */ _font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        /* gdvirtual */ _font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        /* gdvirtual */ _font_clear_glyphs(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        /* gdvirtual */ _font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        /* gdvirtual */ _font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        /* gdvirtual */ _font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        /* gdvirtual */ _font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        /* gdvirtual */ _font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        /* gdvirtual */ _font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_get_glyph_contours(font_rid: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        /* gdvirtual */ _font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        /* gdvirtual */ _font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        /* gdvirtual */ _font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        /* gdvirtual */ _font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        /* gdvirtual */ _font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        /* gdvirtual */ _font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_has_char(font_rid: RID, char: number /*i64*/): boolean
        /* gdvirtual */ _font_get_supported_chars(font_rid: RID): string
        /* gdvirtual */ _font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        /* gdvirtual */ _font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        /* gdvirtual */ _font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_is_language_supported(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        /* gdvirtual */ _font_get_language_support_override(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_remove_language_support_override(font_rid: RID, language: string): void
        /* gdvirtual */ _font_get_language_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_is_script_supported(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        /* gdvirtual */ _font_get_script_support_override(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_remove_script_support_override(font_rid: RID, script: string): void
        /* gdvirtual */ _font_get_script_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        /* gdvirtual */ _font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_feature_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_variation_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_get_global_oversampling(): number /*f64*/
        /* gdvirtual */ _font_set_global_oversampling(oversampling: number /*f64*/): void
        /* gdvirtual */ _get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        /* gdvirtual */ _draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _create_shaped_text(direction: TextServer.Direction, orientation: TextServer.Orientation): RID
        /* gdvirtual */ _shaped_text_clear(shaped: RID): void
        /* gdvirtual */ _shaped_text_set_direction(shaped: RID, direction: TextServer.Direction): void
        /* gdvirtual */ _shaped_text_get_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_set_bidi_override(shaped: RID, override: Array): void
        /* gdvirtual */ _shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        /* gdvirtual */ _shaped_text_get_custom_punctuation(shaped: RID): string
        /* gdvirtual */ _shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation): void
        /* gdvirtual */ _shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        /* gdvirtual */ _shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_invalid(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_control(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary, language: string, meta: any): boolean
        /* gdvirtual */ _shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, length: number /*i64*/, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_get_span_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_get_span_meta(shaped: RID, index: number /*i64*/): void
        /* gdvirtual */ _shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary): void
        /* gdvirtual */ _shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        /* gdvirtual */ _shaped_text_get_parent(shaped: RID): RID
        /* gdvirtual */ _shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag): number /*f64*/
        /* gdvirtual */ _shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        /* gdvirtual */ _shaped_text_shape(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_breaks(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_justification_ops(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_is_ready(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_get_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_sort_logical(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_range(shaped: RID): Vector2i
        /* gdvirtual */ _shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/, once: boolean, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/, trim_flags: TextServer.TextOverrunFlag): void
        /* gdvirtual */ _shaped_text_get_objects(shaped: RID): Array
        /* gdvirtual */ _shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        /* gdvirtual */ _shaped_text_get_size(shaped: RID): Vector2
        /* gdvirtual */ _shaped_text_get_ascent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_descent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_width(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_position(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_carets(shaped: RID, position: number /*i64*/, caret: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        /* gdvirtual */ _shaped_text_hit_test_grapheme(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_hit_test_position(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, color: Color): void
        /* gdvirtual */ _shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, outline_size: number /*i64*/, color: Color): void
        /* gdvirtual */ _shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        /* gdvirtual */ _shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        /* gdvirtual */ _shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _format_number(string_: string, language: string): string
        /* gdvirtual */ _parse_number(string_: string, language: string): string
        /* gdvirtual */ _percent_sign(language: string): string
        /* gdvirtual */ _strip_diacritics(string_: string): string
        /* gdvirtual */ _is_valid_identifier(string_: string): boolean
        /* gdvirtual */ _string_get_word_breaks(string_: string, language: string, chars_per_line: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _string_get_character_breaks(string_: string, language: string): PackedInt32Array
        /* gdvirtual */ _is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        /* gdvirtual */ _spoof_check(string_: string): boolean
        /* gdvirtual */ _string_to_upper(string_: string, language: string): string
        /* gdvirtual */ _string_to_lower(string_: string, language: string): string
        /* gdvirtual */ _parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
        /* gdvirtual */ _cleanup(): void
    }
    class TextShaderEditor extends MarginContainer {
        _show_warnings_panel(_unnamed_arg0: boolean): void
        _warning_clicked(_unnamed_arg0: any): void
        readonly validation_changed: Signal //  => void
    }
    /** Base class for all texture types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture.html  
     */
    class Texture extends Resource {
    }
    /** Texture for 2D and 3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2d.html  
     */
    class Texture2D extends Texture {
        /** Called when the [Texture2D]'s width is queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [Texture2D]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when a pixel's opaque state in the [Texture2D] is queried at the specified `(x, y)` position. */
        /* gdvirtual */ _is_pixel_opaque(x: number /*i64*/, y: number /*i64*/): boolean
        
        /** Called when the presence of an alpha channel in the [Texture2D] is queried. */
        /* gdvirtual */ _has_alpha(): boolean
        
        /** Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw(to_canvas_item: RID, pos: Vector2, modulate: Color, transpose: boolean): void
        
        /** Called when the [Texture2D] is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw_rect(to_canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        
        /** Called when a part of the [Texture2D] specified by [param src_rect]'s coordinates is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw_rect_region(to_canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        
        /** Returns the texture width in pixels. */
        get_width(): number /*i64*/
        
        /** Returns the texture height in pixels. */
        get_height(): number /*i64*/
        
        /** Returns the texture size in pixels. */
        get_size(): Vector2
        
        /** Returns `true` if this [Texture2D] has an alpha channel. */
        has_alpha(): boolean
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvas_item: RID, position: Vector2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect(canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect_region(canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        
        /** Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.  
         *      
         *  **Note:** This will return `null` if this [Texture2D] is invalid.  
         *      
         *  **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused.  
         */
        get_image(): Image
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture2D]). */
        create_placeholder(): Resource
    }
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2darray.html  
     */
    class Texture2DArray extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
        create_placeholder(): Resource
    }
    /** Texture Array for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2darrayrd.html  
     */
    class Texture2DArrayRD extends TextureLayeredRD {
    }
    /** Texture for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2drd.html  
     */
    class Texture2DRD extends Texture2D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    /** Base class for 3-dimensional textures.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture3d.html  
     */
    class Texture3D extends Texture {
        /** Called when the [Texture3D]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the [Texture3D]'s width is queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [Texture3D]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the [Texture3D]'s depth is queried. */
        /* gdvirtual */ _get_depth(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [Texture3D] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the [Texture3D]'s data is queried. */
        /* gdvirtual */ _get_data(): Array
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        get_depth(): number /*i64*/
        
        /** Returns `true` if the [Texture3D] has generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a  *slice*  of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
        get_data(): Array
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
        create_placeholder(): Resource
    }
    class Texture3DEditorPlugin extends EditorPlugin {
    }
    /** Texture for 3D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture3drd.html  
     */
    class Texture3DRD extends Texture3D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    namespace TextureButton {
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** Texture-based button. Supports Pressed, Hover, Disabled and Focused states.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturebutton.html  
     */
    class TextureButton extends BaseButton {
        set_texture_normal(texture: Texture2D): void
        set_texture_pressed(texture: Texture2D): void
        set_texture_hover(texture: Texture2D): void
        set_texture_disabled(texture: Texture2D): void
        set_texture_focused(texture: Texture2D): void
        set_click_mask(mask: BitMap): void
        set_ignore_texture_size(ignore: boolean): void
        set_stretch_mode(mode: TextureButton.StretchMode): void
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        get_texture_normal(): Texture2D
        get_texture_pressed(): Texture2D
        get_texture_hover(): Texture2D
        get_texture_disabled(): Texture2D
        get_texture_focused(): Texture2D
        get_click_mask(): BitMap
        get_ignore_texture_size(): boolean
        get_stretch_mode(): TextureButton.StretchMode
        
        /** Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
        texture_normal: Texture2D
        
        /** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. */
        texture_pressed: Texture2D
        
        /** Texture to display when the mouse hovers the node. */
        texture_hover: Texture2D
        
        /** Texture to display when the node is disabled. See [member BaseButton.disabled]. */
        texture_disabled: Texture2D
        
        /** Texture to display when the node has mouse or keyboard focus. [member texture_focused] is displayed  *over*  the base texture, so a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
        texture_focused: Texture2D
        
        /** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
        texture_click_mask: BitMap
        
        /** If `true`, the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        ignore_texture_size: bool
        
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        stretch_mode: number /*i64*/
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: bool
        
        /** If `true`, texture is flipped vertically. */
        flip_v: bool
    }
    /** Texture Array for Cubemaps that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturecubemaparrayrd.html  
     */
    class TextureCubemapArrayRD extends TextureLayeredRD {
    }
    /** Texture for Cubemap that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturecubemaprd.html  
     */
    class TextureCubemapRD extends TextureLayeredRD {
    }
    class TextureEditorPlugin extends EditorPlugin {
    }
    namespace TextureLayered {
        enum LayeredType {
            /** Texture is a generic [Texture2DArray]. */
            LAYERED_TYPE_2D_ARRAY = 0,
            
            /** Texture is a [Cubemap], with each side in its own layer (6 in total). */
            LAYERED_TYPE_CUBEMAP = 1,
            
            /** Texture is a [CubemapArray], with each cubemap being made of 6 layers. */
            LAYERED_TYPE_CUBEMAP_ARRAY = 2,
        }
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturelayered.html  
     */
    class TextureLayered extends Texture {
        /** Called when the [TextureLayered]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the layers' type in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layered_type(): number /*i64*/
        
        /** Called when the [TextureLayered]'s width queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [TextureLayered]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the number of layers in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layers(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [TextureLayered] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the data for a layer in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layer_data(layer_index: number /*i64*/): Image
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
        get_layered_type(): TextureLayered.LayeredType
        
        /** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the number of referenced [Image]s. */
        get_layers(): number /*i64*/
        
        /** Returns `true` if the layers have generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns an [Image] resource with the data from specified [param layer]. */
        get_layer_data(layer: number /*i64*/): Image
    }
    class TextureLayeredEditorPlugin extends EditorPlugin {
    }
    /** Abstract base class for layered texture RD types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturelayeredrd.html  
     */
    class TextureLayeredRD extends TextureLayered {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    namespace TextureProgressBar {
        enum FillMode {
            /** The [member texture_progress] fills from left to right. */
            FILL_LEFT_TO_RIGHT = 0,
            
            /** The [member texture_progress] fills from right to left. */
            FILL_RIGHT_TO_LEFT = 1,
            
            /** The [member texture_progress] fills from top to bottom. */
            FILL_TOP_TO_BOTTOM = 2,
            
            /** The [member texture_progress] fills from bottom to top. */
            FILL_BOTTOM_TO_TOP = 3,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills clockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE = 4,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_COUNTER_CLOCKWISE = 5,
            
            /** The [member texture_progress] fills from the center, expanding both towards the left and the right. */
            FILL_BILINEAR_LEFT_AND_RIGHT = 6,
            
            /** The [member texture_progress] fills from the center, expanding both towards the top and the bottom. */
            FILL_BILINEAR_TOP_AND_BOTTOM = 7,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills radially from the center, expanding both clockwise and counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8,
        }
    }
    /** Texture-based progress bar. Useful for loading screens and life or stamina bars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textureprogressbar.html  
     */
    class TextureProgressBar extends Range {
        set_under_texture(tex: Texture2D): void
        get_under_texture(): Texture2D
        set_progress_texture(tex: Texture2D): void
        get_progress_texture(): Texture2D
        set_over_texture(tex: Texture2D): void
        get_over_texture(): Texture2D
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_tint_under(tint: Color): void
        get_tint_under(): Color
        set_tint_progress(tint: Color): void
        get_tint_progress(): Color
        set_tint_over(tint: Color): void
        get_tint_over(): Color
        set_texture_progress_offset(offset: Vector2): void
        get_texture_progress_offset(): Vector2
        set_radial_initial_angle(mode: number /*f64*/): void
        get_radial_initial_angle(): number /*f64*/
        set_radial_center_offset(mode: Vector2): void
        get_radial_center_offset(): Vector2
        set_fill_degrees(mode: number /*f64*/): void
        get_fill_degrees(): number /*f64*/
        
        /** Sets the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        set_stretch_margin(margin: Side, value: number /*i64*/): void
        
        /** Returns the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        get_stretch_margin(margin: Side): number /*i64*/
        set_nine_patch_stretch(stretch: boolean): void
        get_nine_patch_stretch(): boolean
        
        /** The fill direction. See [enum FillMode] for possible values. */
        fill_mode: number /*i64*/
        
        /** If `true`, Godot treats the bar's textures like in [NinePatchRect]. Use the `stretch_margin_*` properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will enable stretching. */
        nine_patch_stretch: boolean
        
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        texture_under: Texture2D
        
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        texture_over: Texture2D
        
        /** [Texture2D] that clips based on the node's `value` and [member fill_mode]. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.  
         *  The `value` property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].  
         */
        texture_progress: Texture2D
        
        /** The offset of [member texture_progress]. Useful for [member texture_over] and [member texture_under] with fancy borders, to avoid transparent margins in your progress texture. */
        texture_progress_offset: Vector2
        
        /** Multiplies the color of the bar's [member texture_under] texture. */
        tint_under: Color
        
        /** Multiplies the color of the bar's [member texture_over] texture. The effect is similar to [member CanvasItem.modulate], except it only affects this specific texture instead of the entire node. */
        tint_over: Color
        
        /** Multiplies the color of the bar's [member texture_progress] texture. */
        tint_progress: Color
        
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [member radial_fill_degrees]. */
        radial_initial_angle: number /*f64*/
        
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.  
         *  See [member Range.value], [member Range.max_value].  
         */
        radial_fill_degrees: number /*f64*/
        
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. */
        radial_center_offset: Vector2
    }
    namespace TextureRect {
        enum ExpandMode {
            /** The minimum size will be equal to texture size, i.e. [TextureRect] can't be smaller than the texture. */
            EXPAND_KEEP_SIZE = 0,
            
            /** The size of the texture won't be considered for minimum size calculation, so the [TextureRect] can be shrunk down past the texture size. */
            EXPAND_IGNORE_SIZE = 1,
            
            /** The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [HBoxContainer]. */
            EXPAND_FIT_WIDTH = 2,
            
            /** Same as [constant EXPAND_FIT_WIDTH], but keeps texture's aspect ratio. */
            EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
            
            /** The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [VBoxContainer]. */
            EXPAND_FIT_HEIGHT = 4,
            
            /** Same as [constant EXPAND_FIT_HEIGHT], but keeps texture's aspect ratio. */
            EXPAND_FIT_HEIGHT_PROPORTIONAL = 5,
        }
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** A control that displays a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturerect.html  
     */
    class TextureRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_expand_mode(expand_mode: TextureRect.ExpandMode): void
        get_expand_mode(): TextureRect.ExpandMode
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        set_stretch_mode(stretch_mode: TextureRect.StretchMode): void
        get_stretch_mode(): TextureRect.StretchMode
        
        /** The node's [Texture2D] resource. */
        texture: Texture2D
        
        /** Defines how minimum size is determined based on the texture's size. See [enum ExpandMode] for options.  
         *      
         *  **Note:** Using [constant EXPAND_FIT_WIDTH], [constant EXPAND_FIT_WIDTH_PROPORTIONAL], [constant EXPAND_FIT_HEIGHT] or [constant EXPAND_FIT_HEIGHT_PROPORTIONAL] may result in unstable behavior in some containers. This functionality is being re-evaluated and will change in the future.  
         */
        expand_mode: number /*i64*/
        
        /** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
        stretch_mode: number /*i64*/
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
    }
    class TextureRegionEditor extends AcceptDialog {
        _update_rect(): void
    }
    class TextureRegionEditorPlugin extends EditorPlugin {
    }
    namespace Theme {
        enum DataType {
            /** Theme's [Color] item type. */
            DATA_TYPE_COLOR = 0,
            
            /** Theme's constant item type. */
            DATA_TYPE_CONSTANT = 1,
            
            /** Theme's [Font] item type. */
            DATA_TYPE_FONT = 2,
            
            /** Theme's font size item type. */
            DATA_TYPE_FONT_SIZE = 3,
            
            /** Theme's icon [Texture2D] item type. */
            DATA_TYPE_ICON = 4,
            
            /** Theme's [StyleBox] item type. */
            DATA_TYPE_STYLEBOX = 5,
            
            /** Maximum value for the DataType enum. */
            DATA_TYPE_MAX = 6,
        }
    }
    /** A resource used for styling/skinning [Control]s and [Window]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_theme.html  
     */
    class Theme extends Resource {
        /** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
        set_icon(name: StringName, theme_type: StringName, texture: Texture2D): void
        
        /** Returns the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.  
         */
        get_icon(name: StringName, theme_type: StringName): Texture2D
        
        /** Returns `true` if the icon property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_icon] to define it.  
         */
        has_icon(name: StringName, theme_type: StringName): boolean
        
        /** Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.  
         */
        rename_icon(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_icon] to check for existence.  
         */
        clear_icon(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
        get_icon_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_icon_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
        set_stylebox(name: StringName, theme_type: StringName, texture: StyleBox): void
        
        /** Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.  
         */
        get_stylebox(name: StringName, theme_type: StringName): StyleBox
        
        /** Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.  
         */
        has_stylebox(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.  
         */
        rename_stylebox(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_stylebox] to check for existence.  
         */
        clear_stylebox(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
        get_stylebox_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_stylebox_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
        set_font(name: StringName, theme_type: StringName, font: Font): void
        
        /** Returns the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.  
         *  Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).  
         */
        get_font(name: StringName, theme_type: StringName): Font
        
        /** Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).  
         *  Returns `false` if neither exist. Use [method set_font] to define the property.  
         */
        has_font(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.  
         */
        rename_font(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font] to check for existence.  
         */
        clear_font(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
        get_font_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_type_list(): PackedStringArray
        
        /** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
        set_font_size(name: StringName, theme_type: StringName, font_size: number /*i64*/): void
        
        /** Returns the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.  
         *  Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).  
         */
        get_font_size(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).  
         *  Returns `false` if neither exist. Use [method set_font_size] to define the property.  
         */
        has_font_size(name: StringName, theme_type: StringName): boolean
        
        /** Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.  
         */
        rename_font_size(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font_size] to check for existence.  
         */
        clear_font_size(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
        get_font_size_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_size_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
        set_color(name: StringName, theme_type: StringName, color: Color): void
        
        /** Returns the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.  
         */
        get_color(name: StringName, theme_type: StringName): Color
        
        /** Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_color] to define it.  
         */
        has_color(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.  
         */
        rename_color(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_color] to check for existence.  
         */
        clear_color(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
        get_color_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_color_type_list(): PackedStringArray
        
        /** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
        set_constant(name: StringName, theme_type: StringName, constant: number /*i64*/): void
        
        /** Returns the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.  
         */
        get_constant(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the constant property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_constant] to define it.  
         */
        has_constant(name: StringName, theme_type: StringName): boolean
        
        /** Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.  
         */
        rename_constant(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_constant] to check for existence.  
         */
        clear_constant(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
        get_constant_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_constant_type_list(): PackedStringArray
        set_default_base_scale(base_scale: number /*f64*/): void
        get_default_base_scale(): number /*f64*/
        
        /** Returns `true` if [member default_base_scale] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.  
         */
        has_default_base_scale(): boolean
        set_default_font(font: Font): void
        get_default_font(): Font
        
        /** Returns `true` if [member default_font] has a valid value.  
         *  Returns `false` if it doesn't.  
         */
        has_default_font(): boolean
        set_default_font_size(font_size: number /*i64*/): void
        get_default_font_size(): number /*i64*/
        
        /** Returns `true` if [member default_font_size] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.  
         */
        has_default_font_size(): boolean
        
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.  
         *  Fails if the [param value] type is not accepted by [param data_type].  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        set_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName, value: any): void
        
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): any
        
        /** Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        has_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): boolean
        
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        rename_theme_item(data_type: Theme.DataType, old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        clear_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_list(data_type: Theme.DataType, theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_type_list(data_type: Theme.DataType): PackedStringArray
        
        /** Marks [param theme_type] as a variation of [param base_type].  
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.  
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.  
         *      
         *  **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].  
         */
        set_type_variation(theme_type: StringName, base_type: StringName): void
        
        /** Returns `true` if [param theme_type] is marked as a variation of [param base_type]. */
        is_type_variation(theme_type: StringName, base_type: StringName): boolean
        
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clear_type_variation(theme_type: StringName): void
        
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        get_type_variation_base(theme_type: StringName): StringName
        
        /** Returns a list of all type variations for the given [param base_type]. */
        get_type_variation_list(base_type: StringName): PackedStringArray
        
        /** Adds an empty theme type for every valid data type.  
         *      
         *  **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.  
         */
        add_type(theme_type: StringName): void
        
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        remove_type(theme_type: StringName): void
        
        /** Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type. */
        get_type_list(): PackedStringArray
        
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.  
         *      
         *  **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.  
         */
        merge_with(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).  
         *  Use [method has_default_base_scale] to check if this value is valid.  
         */
        default_base_scale: number /*f64*/
        
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).  
         *  Use [method has_default_font] to check if this value is valid.  
         */
        default_font: Font
        
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).  
         *  Values below `0` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.  
         */
        default_font_size: number /*i64*/
    }
    class ThemeContext extends Object {
        readonly changed: Signal //  => void
    }
    class ThemeEditor extends VBoxContainer {
    }
    class ThemeEditorPlugin extends EditorPlugin {
    }
    class ThemeEditorPreview extends VBoxContainer {
        readonly control_picked: Signal // class_name: string => void
    }
    class ThemeItemEditorDialog extends AcceptDialog {
        _update_edit_types(): void
        _update_edit_item_tree(_unnamed_arg0: string): void
    }
    class ThemeItemImportTree extends VBoxContainer {
        readonly items_imported: Signal //  => void
    }
    class ThemeTypeDialog extends ConfirmationDialog {
        readonly type_selected: Signal // type_name: string => void
    }
    class ThemeTypeEditor extends MarginContainer {
        _update_type_items(): void
        _pin_leading_stylebox(_unnamed_arg0: string, _unnamed_arg1: StyleBox): void
        _unpin_leading_stylebox(): void
        _change_pinned_stylebox(): void
    }
    namespace Thread {
        enum Priority {
            /** A thread running with lower priority than normally. */
            PRIORITY_LOW = 0,
            
            /** A thread with a standard priority. */
            PRIORITY_NORMAL = 1,
            
            /** A thread running with higher priority than normally. */
            PRIORITY_HIGH = 2,
        }
    }
    /** A unit of execution in a process.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_thread.html  
     */
    class Thread extends RefCounted {
        /** Starts a new [Thread] that calls [param callable].  
         *  If the method takes some arguments, you can pass them using [method Callable.bind].  
         *  The [param priority] of the [Thread] can be changed by passing a value from the [enum Priority] enum.  
         *  Returns [constant OK] on success, or [constant ERR_CANT_CREATE] on failure.  
         */
        start(callable: Callable, priority: Thread.Priority = 1): GodotError
        
        /** Returns the current [Thread]'s ID, uniquely identifying it among all threads. If the [Thread] has not started running or if [method wait_to_finish] has been called, this returns an empty string. */
        get_id(): string
        
        /** Returns `true` if this [Thread] has been started. Once started, this will return `true` until it is joined using [method wait_to_finish]. For checking if a [Thread] is still executing its task, use [method is_alive]. */
        is_started(): boolean
        
        /** Returns `true` if this [Thread] is currently running the provided function. This is useful for determining if [method wait_to_finish] can be called without blocking the calling thread.  
         *  To check if a [Thread] is joinable, use [method is_started].  
         */
        is_alive(): boolean
        
        /** Joins the [Thread] and waits for it to finish. Returns the output of the [Callable] passed to [method start].  
         *  Should either be used when you want to retrieve the value returned from the method called by the [Thread] or before freeing the instance that contains the [Thread].  
         *  To determine if this can be called without blocking the calling thread, check if [method is_alive] is `false`.  
         */
        wait_to_finish(): any
        
        /** Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [Node]) should happen **on the current thread**.  
         *  The default, for every thread, is that they are enabled (as if called with [param enabled] being `true`).  
         *  Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.  
         *  Because of that, there may be cases where the user may want to disable them ([param enabled] being `false`) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [Mutex]) for those objects that are otherwise protected by the engine.  
         *      
         *  **Note:** This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.  
         *      
         *  **Note:** This is useful for scripts running on either arbitrary [Thread] objects or tasks submitted to the [WorkerThreadPool]. It doesn't apply to code running during [Node] group processing, where the checks will be always performed.  
         *      
         *  **Note:** Even in the case of having disabled the checks in a [WorkerThreadPool] task, there's no need to re-enable them at the end. The engine will do so.  
         */
        static set_thread_safety_checks_enabled(enabled: boolean): void
    }
    class TileAtlasView extends Control {
        readonly transform_changed: Signal // zoom: number /*f64*/, scroll: Vector2 => void
    }
    /** Settings for a single tile in a [TileSet].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tiledata.html  
     */
    class TileData extends Object {
        set_flip_h(flip_h: boolean): void
        get_flip_h(): boolean
        set_flip_v(flip_v: boolean): void
        get_flip_v(): boolean
        set_transpose(transpose: boolean): void
        get_transpose(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_texture_origin(texture_origin: Vector2i): void
        get_texture_origin(): Vector2i
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_z_index(z_index: number /*i64*/): void
        get_z_index(): number /*i64*/
        set_y_sort_origin(y_sort_origin: number /*i64*/): void
        get_y_sort_origin(): number /*i64*/
        
        /** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
        set_occluder(layer_id: number /*i64*/, occluder_polygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id]. */
        get_occluder(layer_id: number /*i64*/): OccluderPolygon2D
        
        /** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
        set_constant_linear_velocity(layer_id: number /*i64*/, velocity: Vector2): void
        
        /** Returns the constant linear velocity applied to objects colliding with this tile. */
        get_constant_linear_velocity(layer_id: number /*i64*/): Vector2
        
        /** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
        set_constant_angular_velocity(layer_id: number /*i64*/, velocity: number /*f64*/): void
        
        /** Returns the constant angular velocity applied to objects colliding with this tile. */
        get_constant_angular_velocity(layer_id: number /*i64*/): number /*f64*/
        
        /** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
        set_collision_polygons_count(layer_id: number /*i64*/, polygons_count: number /*i64*/): void
        
        /** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
        get_collision_polygons_count(layer_id: number /*i64*/): number /*i64*/
        
        /** Adds a collision polygon to the tile on the given TileSet physics layer. */
        add_collision_polygon(layer_id: number /*i64*/): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        remove_collision_polygon(layer_id: number /*i64*/, polygon_index: number /*i64*/): void
        
        /** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/, polygon: PackedVector2Array): void
        
        /** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/): PackedVector2Array
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way: boolean): void
        
        /** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        is_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/): boolean
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way_margin: number /*f64*/): void
        
        /** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/): number /*f64*/
        set_terrain_set(terrain_set: number /*i64*/): void
        get_terrain_set(): number /*i64*/
        set_terrain(terrain: number /*i64*/): void
        get_terrain(): number /*i64*/
        
        /** Sets the tile's terrain bit for the given [param peering_bit] direction. */
        set_terrain_peering_bit(peering_bit: TileSet.CellNeighbor, terrain: number /*i64*/): void
        
        /** Returns the tile's terrain bit for the given [param peering_bit] direction. */
        get_terrain_peering_bit(peering_bit: TileSet.CellNeighbor): number /*i64*/
        
        /** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
        set_navigation_polygon(layer_id: number /*i64*/, navigation_polygon: NavigationPolygon): void
        
        /** Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id]. */
        get_navigation_polygon(layer_id: number /*i64*/): NavigationPolygon
        set_probability(probability: number /*f64*/): void
        get_probability(): number /*f64*/
        
        /** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
        set_custom_data(layer_name: string, value: any): void
        
        /** Returns the custom data value for custom data layer named [param layer_name]. */
        get_custom_data(layer_name: string): any
        
        /** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
        set_custom_data_by_layer_id(layer_id: number /*i64*/, value: any): void
        
        /** Returns the custom data value for custom data layer with index [param layer_id]. */
        get_custom_data_by_layer_id(layer_id: number /*i64*/): any
        
        /** If `true`, the tile will have its texture flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, the tile will have its texture flipped vertically. */
        flip_v: boolean
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        transpose: boolean
        
        /** Offsets the position of where the tile is drawn. */
        texture_origin: Vector2i
        
        /** Color modulation of the tile. */
        modulate: Color
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        material: CanvasItemMaterial | ShaderMaterial
        
        /** Ordering index of this tile, relative to [TileMap]. */
        z_index: number /*i64*/
        
        /** Vertical point of the tile used for determining y-sorted order. */
        y_sort_origin: number /*i64*/
        
        /** ID of the terrain set that the tile uses. */
        terrain_set: number /*i64*/
        
        /** ID of the terrain from the terrain set that the tile uses. */
        terrain: number /*i64*/
        
        /** Relative probability of this tile being selected when drawing a pattern of random tiles. */
        probability: number /*f64*/
        
        /** Emitted when any of the properties are changed. */
        readonly changed: Signal //  => void
    }
    namespace TileMap {
        enum VisibilityMode {
            /** Use the debug settings to determine visibility. */
            VISIBILITY_MODE_DEFAULT = 0,
            
            /** Always hide. */
            VISIBILITY_MODE_FORCE_HIDE = 2,
            
            /** Always show. */
            VISIBILITY_MODE_FORCE_SHOW = 1,
        }
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilemap.html  
     */
    class TileMap extends Node2D {
        /** Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.  
         *  **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _use_tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i): boolean
        
        /** Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i, tile_data: TileData): void
        
        /** See [method set_layer_navigation_map]. */
        set_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** See [method get_layer_navigation_map]. */
        get_navigation_map(layer: number /*i64*/): RID
        
        /**  *Deprecated.*  See [method notify_runtime_tile_data_update] and [method update_internals]. */
        force_update(layer: number /*i64*/ = -1): void
        set_tileset(tileset: TileSet): void
        get_tileset(): TileSet
        set_rendering_quadrant_size(size: number /*i64*/): void
        get_rendering_quadrant_size(): number /*i64*/
        
        /** Returns the number of layers in the TileMap. */
        get_layers_count(): number /*i64*/
        
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with `-1` adding the layer at the end of the array. */
        add_layer(to_position: number /*i64*/): void
        
        /** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
        move_layer(layer: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the layer at index [param layer]. */
        remove_layer(layer: number /*i64*/): void
        
        /** Sets a layer's name. This is mostly useful in the editor.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_name(layer: number /*i64*/, name: string): void
        
        /** Returns a TileMap layer's name.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_name(layer: number /*i64*/): string
        
        /** Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc...).  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer is enabled.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_modulate(layer: number /*i64*/, modulate: Color): void
        
        /** Returns a TileMap layer's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_modulate(layer: number /*i64*/): Color
        
        /** Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.  
         *  Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_enabled(layer: number /*i64*/, y_sort_enabled: boolean): void
        
        /** Returns if a layer Y-sorts its tiles.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_y_sort_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.  
         *  This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_origin(layer: number /*i64*/, y_sort_origin: number /*i64*/): void
        
        /** Returns a TileMap layer's Y sort origin.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_y_sort_origin(layer: number /*i64*/): number /*i64*/
        
        /** Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_z_index(layer: number /*i64*/, z_index: number /*i64*/): void
        
        /** Returns a TileMap layer's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_z_index(layer: number /*i64*/): number /*i64*/
        
        /** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
        set_layer_navigation_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer's built-in navigation regions generation is enabled. */
        is_layer_navigation_enabled(layer: number /*i64*/): boolean
        
        /** Assigns a [NavigationServer2D] navigation map [RID] to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** Returns the [NavigationServer2D] navigation map [RID] currently assigned to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_navigation_map(layer: number /*i64*/): RID
        set_collision_animatable(enabled: boolean): void
        is_collision_animatable(): boolean
        set_collision_visibility_mode(collision_visibility_mode: TileMap.VisibilityMode): void
        get_collision_visibility_mode(): TileMap.VisibilityMode
        set_navigation_visibility_mode(navigation_visibility_mode: TileMap.VisibilityMode): void
        get_navigation_visibility_mode(): TileMap.VisibilityMode
        
        /** Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_cell(layer: number /*i64*/, coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = 0): void
        
        /** Erases the cell on layer [param layer] at coordinates [param coords].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        erase_cell(layer: number /*i64*/, coords: Vector2i): void
        
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_source_id(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_atlas_coords(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): Vector2i
        
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_alternative_tile(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *    
         */
        get_cell_tile_data(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): TileData
        
        /** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_coords_for_body_rid(body: RID): Vector2i
        
        /** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_layer_for_body_rid(body: RID): number /*i64*/
        
        /** Creates a new [TileMapPattern] from the given layer and set of cells.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_pattern(layer: number /*i64*/, coords_array: Array): TileMapPattern
        
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        map_pattern(position_in_tilemap: Vector2i, coords_in_pattern: Vector2i, pattern: TileMapPattern): Vector2i
        
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_pattern(layer: number /*i64*/, position: Vector2i, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_connect(layer: number /*i64*/, cells: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_path(layer: number /*i64*/, path: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Clears cells that do not exist in the tileset. */
        fix_invalid_tiles(): void
        
        /** Clears all cells on the given layer.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        clear_layer(layer: number /*i64*/): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        update_internals(): void
        
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.  
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notify_runtime_tile_data_update(layer: number /*i64*/ = -1): void
        
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        get_surrounding_cells(coords: Vector2i): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells(layer: number /*i64*/): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells_by_id(layer: number /*i64*/, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): Array
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        get_used_rect(): Rect2i
        
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        map_to_local(map_position: Vector2i): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector2): Vector2i
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        get_neighbor_cell(coords: Vector2i, neighbor: TileSet.CellNeighbor): Vector2i
        
        /** The assigned [TileSet]. */
        tile_set: TileSet
        
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quandrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on Y-sorted layers, as tiles are be grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.  
         */
        rendering_quadrant_size: number /*i64*/
        
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.  
         *      
         *  **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.  
         */
        collision_animatable: boolean
        
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        collision_visibility_mode: number /*i64*/
        
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        navigation_visibility_mode: number /*i64*/
        
        /** Emitted when the [TileSet] of this TileMap changes. */
        readonly changed: Signal //  => void
    }
    class TileMapEditor extends VBoxContainer {
    }
    class TileMapEditorPlugin extends EditorPlugin {
    }
    class TileMapEditorTerrainsPlugin extends Object {
    }
    class TileMapEditorTilesPlugin extends Object {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _set_tile_map_selection(selection: Array): void
        _get_tile_map_selection(): Array
    }
    /** Holds a pattern to be copied from or pasted into [TileMap]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilemappattern.html  
     */
    class TileMapPattern extends Resource {
        /** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
        set_cell(coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): void
        
        /** Returns whether the pattern has a tile at the given coordinates. */
        has_cell(coords: Vector2i): boolean
        
        /** Remove the cell at the given coordinates. */
        remove_cell(coords: Vector2i, update_size: boolean): void
        
        /** Returns the tile source ID of the cell at [param coords]. */
        get_cell_source_id(coords: Vector2i): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell at [param coords]. */
        get_cell_atlas_coords(coords: Vector2i): Vector2i
        
        /** Returns the tile alternative ID of the cell at [param coords]. */
        get_cell_alternative_tile(coords: Vector2i): number /*i64*/
        
        /** Returns the list of used cell coordinates in the pattern. */
        get_used_cells(): Array
        
        /** Returns the size, in cells, of the pattern. */
        get_size(): Vector2i
        
        /** Sets the size of the pattern. */
        set_size(size: Vector2i): void
        
        /** Returns whether the pattern is empty or not. */
        is_empty(): boolean
    }
    class TileProxiesManagerDialog extends ConfirmationDialog {
        _update_lists(): void
        _unhandled_key_input(_unnamed_arg0: InputEvent): void
    }
    namespace TileSet {
        enum TileShape {
            /** Rectangular tile shape. */
            TILE_SHAPE_SQUARE = 0,
            
            /** Diamond tile shape (for isometric look).  
             *      
             *  **Note:** Isometric [TileSet] works best if [TileMap] and all its layers have Y-sort enabled.  
             */
            TILE_SHAPE_ISOMETRIC = 1,
            
            /** Rectangular tile shape with one row/column out of two offset by half a tile. */
            TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
            
            /** Hexagonal tile shape. */
            TILE_SHAPE_HEXAGON = 3,
        }
        enum TileLayout {
            /** Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis. */
            TILE_LAYOUT_STACKED = 0,
            
            /** Same as [constant TILE_LAYOUT_STACKED], but the first half-offset is negative instead of positive. */
            TILE_LAYOUT_STACKED_OFFSET = 1,
            
            /** Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right. */
            TILE_LAYOUT_STAIRS_RIGHT = 2,
            
            /** Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right. */
            TILE_LAYOUT_STAIRS_DOWN = 3,
            
            /** Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right. */
            TILE_LAYOUT_DIAMOND_RIGHT = 4,
            
            /** Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left. */
            TILE_LAYOUT_DIAMOND_DOWN = 5,
        }
        enum TileOffsetAxis {
            /** Horizontal half-offset. */
            TILE_OFFSET_AXIS_HORIZONTAL = 0,
            
            /** Vertical half-offset. */
            TILE_OFFSET_AXIS_VERTICAL = 1,
        }
        enum CellNeighbor {
            /** Neighbor on the right side. */
            CELL_NEIGHBOR_RIGHT_SIDE = 0,
            
            /** Neighbor in the right corner. */
            CELL_NEIGHBOR_RIGHT_CORNER = 1,
            
            /** Neighbor on the bottom right side. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
            
            /** Neighbor in the bottom right corner. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
            
            /** Neighbor on the bottom side. */
            CELL_NEIGHBOR_BOTTOM_SIDE = 4,
            
            /** Neighbor in the bottom corner. */
            CELL_NEIGHBOR_BOTTOM_CORNER = 5,
            
            /** Neighbor on the bottom left side. */
            CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
            
            /** Neighbor in the bottom left corner. */
            CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
            
            /** Neighbor on the left side. */
            CELL_NEIGHBOR_LEFT_SIDE = 8,
            
            /** Neighbor in the left corner. */
            CELL_NEIGHBOR_LEFT_CORNER = 9,
            
            /** Neighbor on the top left side. */
            CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
            
            /** Neighbor in the top left corner. */
            CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
            
            /** Neighbor on the top side. */
            CELL_NEIGHBOR_TOP_SIDE = 12,
            
            /** Neighbor in the top corner. */
            CELL_NEIGHBOR_TOP_CORNER = 13,
            
            /** Neighbor on the top right side. */
            CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
            
            /** Neighbor in the top right corner. */
            CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15,
        }
        enum TerrainMode {
            /** Requires both corners and side to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
            
            /** Requires corners to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS = 1,
            
            /** Requires sides to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_SIDES = 2,
        }
    }
    /** Tile library for tilemaps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tileset.html  
     */
    class TileSet extends Resource {
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        get_next_source_id(): number /*i64*/
        
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.  
         *  The function returns the added source ID or -1 if the source could not be added.  
         *  **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.  
         */
        add_source(source: TileSetSource, atlas_source_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Removes the source with the given source ID. */
        remove_source(source_id: number /*i64*/): void
        
        /** Changes a source's ID. */
        set_source_id(source_id: number /*i64*/, new_source_id: number /*i64*/): void
        
        /** Returns the number of [TileSetSource] in this TileSet. */
        get_source_count(): number /*i64*/
        
        /** Returns the source ID for source with index [param index]. */
        get_source_id(index: number /*i64*/): number /*i64*/
        
        /** Returns if this TileSet has a source for the given source ID. */
        has_source(source_id: number /*i64*/): boolean
        
        /** Returns the [TileSetSource] with ID [param source_id]. */
        get_source(source_id: number /*i64*/): TileSetSource
        set_tile_shape(shape: TileSet.TileShape): void
        get_tile_shape(): TileSet.TileShape
        set_tile_layout(layout: TileSet.TileLayout): void
        get_tile_layout(): TileSet.TileLayout
        set_tile_offset_axis(alignment: TileSet.TileOffsetAxis): void
        get_tile_offset_axis(): TileSet.TileOffsetAxis
        set_tile_size(size: Vector2i): void
        get_tile_size(): Vector2i
        set_uv_clipping(uv_clipping: boolean): void
        is_uv_clipping(): boolean
        
        /** Returns the occlusion layers count. */
        get_occlusion_layers_count(): number /*i64*/
        
        /** Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Occlusion layers allow assigning occlusion polygons to atlas tiles.  
         */
        add_occlusion_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_occlusion_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_occlusion_layer(layer_index: number /*i64*/): void
        
        /** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_light_mask(layer_index: number /*i64*/, light_mask: number /*i64*/): void
        
        /** Returns the light mask of the occlusion layer. */
        get_occlusion_layer_light_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_sdf_collision(layer_index: number /*i64*/, sdf_collision: boolean): void
        
        /** Returns if the occluders from this layer use `sdf_collision`. */
        get_occlusion_layer_sdf_collision(layer_index: number /*i64*/): boolean
        
        /** Returns the physics layers count. */
        get_physics_layers_count(): number /*i64*/
        
        /** Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Physics layers allow assigning collision polygons to atlas tiles.  
         */
        add_physics_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_physics_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_physics_layer(layer_index: number /*i64*/): void
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_layer(layer_index: number /*i64*/, layer: number /*i64*/): void
        
        /** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
        get_physics_layer_collision_layer(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_mask(layer_index: number /*i64*/, mask: number /*i64*/): void
        
        /** Returns the collision mask of bodies on the given TileSet's physics layer. */
        get_physics_layer_collision_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics material for bodies in the given TileSet physics layer. */
        set_physics_layer_physics_material(layer_index: number /*i64*/, physics_material: PhysicsMaterial): void
        
        /** Returns the physics material of bodies on the given TileSet's physics layer. */
        get_physics_layer_physics_material(layer_index: number /*i64*/): PhysicsMaterial
        
        /** Returns the terrain sets count. */
        get_terrain_sets_count(): number /*i64*/
        
        /** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain_set(to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain_set(terrain_set: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain_set(terrain_set: number /*i64*/): void
        
        /** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
        set_terrain_set_mode(terrain_set: number /*i64*/, mode: TileSet.TerrainMode): void
        
        /** Returns a terrain set mode. */
        get_terrain_set_mode(terrain_set: number /*i64*/): TileSet.TerrainMode
        
        /** Returns the number of terrains in the given terrain set. */
        get_terrains_count(terrain_set: number /*i64*/): number /*i64*/
        
        /** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain(terrain_set: number /*i64*/, to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/): void
        
        /** Sets a terrain's name. */
        set_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/, name: string): void
        
        /** Returns a terrain's name. */
        get_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/): string
        
        /** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
        set_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/, color: Color): void
        
        /** Returns a terrain's color. */
        get_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/): Color
        
        /** Returns the navigation layers count. */
        get_navigation_layers_count(): number /*i64*/
        
        /** Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Navigation layers allow assigning a navigable area to atlas tiles.  
         */
        add_navigation_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_navigation_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_navigation_layer(layer_index: number /*i64*/): void
        
        /** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
        set_navigation_layer_layers(layer_index: number /*i64*/, layers: number /*i64*/): void
        
        /** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
        get_navigation_layer_layers(layer_index: number /*i64*/): number /*i64*/
        
        /** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
        set_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
        get_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/): boolean
        
        /** Returns the custom data layers count. */
        get_custom_data_layers_count(): number /*i64*/
        
        /** Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Custom data layers allow assigning custom properties to atlas tiles.  
         */
        add_custom_data_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_custom_data_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_custom_data_layer(layer_index: number /*i64*/): void
        
        /** Returns the index of the custom data layer identified by the given name. */
        get_custom_data_layer_by_name(layer_name: string): number /*i64*/
        
        /** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
        set_custom_data_layer_name(layer_index: number /*i64*/, layer_name: string): void
        
        /** Returns the name of the custom data layer identified by the given index. */
        get_custom_data_layer_name(layer_index: number /*i64*/): string
        
        /** Sets the type of the custom data layer identified by the given index. */
        set_custom_data_layer_type(layer_index: number /*i64*/, layer_type: Variant.Type): void
        
        /** Returns the type of the custom data layer identified by the given index. */
        get_custom_data_layer_type(layer_index: number /*i64*/): Variant.Type
        
        /** Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.  
         *  This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_source_level_tile_proxy(source_from: number /*i64*/, source_to: number /*i64*/): void
        
        /** Returns the source-level proxy for the given source identifier.  
         *  If the TileSet has no proxy for the given identifier, returns -1.  
         */
        get_source_level_tile_proxy(source_from: number /*i64*/): number /*i64*/
        
        /** Returns if there is a source-level proxy for the given source ID. */
        has_source_level_tile_proxy(source_from: number /*i64*/): boolean
        
        /** Removes a source-level tile proxy. */
        remove_source_level_tile_proxy(source_from: number /*i64*/): void
        
        /** Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_coords_level_tile_proxy(p_source_from: number /*i64*/, coords_from: Vector2i, source_to: number /*i64*/, coords_to: Vector2i): void
        
        /** Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): Array
        
        /** Returns if there is a coodinates-level proxy for the given identifiers. */
        has_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): boolean
        
        /** Removes a coordinates-level proxy for the given identifiers. */
        remove_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): void
        
        /** Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/, source_to: number /*i64*/, coords_to: Vector2i, alternative_to: number /*i64*/): void
        
        /** Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Returns if there is an alternative-level proxy for the given identifiers. */
        has_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): boolean
        
        /** Removes an alternative-level proxy for the given identifiers. */
        remove_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): void
        
        /** According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.  
         *  This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.  
         *  If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.  
         */
        map_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Clears tile proxies pointing to invalid tiles. */
        cleanup_invalid_tile_proxies(): void
        
        /** Clears all tile proxies. */
        clear_tile_proxies(): void
        
        /** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
        add_pattern(pattern: TileMapPattern, index: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the [TileMapPattern] at the given [param index]. */
        get_pattern(index: number /*i64*/ = -1): TileMapPattern
        
        /** Remove the [TileMapPattern] at the given index. */
        remove_pattern(index: number /*i64*/): void
        
        /** Returns the number of [TileMapPattern] this tile set handles. */
        get_patterns_count(): number /*i64*/
        
        /** The tile shape. */
        tile_shape: number /*i64*/
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid. */
        tile_layout: number /*i64*/
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
        tile_offset_axis: number /*i64*/
        
        /** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
        tile_size: Vector2i
        
        /** Enables/Disable uv clipping when rendering the tiles. */
        uv_clipping: boolean
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            /** Tile animations start at same time, looking identical. */
            TILE_ANIMATION_MODE_DEFAULT = 0,
            
            /** Tile animations start at random times, looking varied. */
            TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
            
            /** Represents the size of the [enum TileAnimationMode] enum. */
            TILE_ANIMATION_MODE_MAX = 2,
        }
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetatlassource.html  
     */
    class TileSetAtlasSource extends TileSetSource {
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMap] to flip placed tiles by altering their alternative IDs.  
         *    
         */
        static readonly TRANSFORM_FLIP_H = 4096
        
        /** Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_FLIP_V = 8192
        
        /** Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_TRANSPOSE = 16384
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_margins(margins: Vector2i): void
        get_margins(): Vector2i
        set_separation(separation: Vector2i): void
        get_separation(): Vector2i
        set_texture_region_size(texture_region_size: Vector2i): void
        get_texture_region_size(): Vector2i
        set_use_texture_padding(use_texture_padding: boolean): void
        get_use_texture_padding(): boolean
        
        /** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
        create_tile(atlas_coords: Vector2i, size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Remove a tile and its alternative at coordinates [param atlas_coords]. */
        remove_tile(atlas_coords: Vector2i): void
        
        /** Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.  
         *  If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.  
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].  
         */
        move_tile_in_atlas(atlas_coords: Vector2i, new_atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, new_size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        get_tile_size_in_atlas(atlas_coords: Vector2i): Vector2i
        
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        has_room_for_tile(atlas_coords: Vector2i, size: Vector2i, animation_columns: number /*i64*/, animation_separation: Vector2i, frames_count: number /*i64*/, ignored_tile: Vector2i = <any> {} /*compound.type from 6([object Object])*/): boolean
        
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        get_tiles_to_be_removed_on_change(texture: Texture2D, margins: Vector2i, separation: Vector2i, texture_region_size: Vector2i): PackedVector2Array
        
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise. */
        get_tile_at_coords(atlas_coords: Vector2i): Vector2i
        
        /** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
        has_tiles_outside_texture(): boolean
        
        /** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
        clear_tiles_outside_texture(): void
        
        /** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
        set_tile_animation_columns(atlas_coords: Vector2i, frame_columns: number /*i64*/): void
        
        /** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
        get_tile_animation_columns(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_separation(atlas_coords: Vector2i, separation: Vector2i): void
        
        /** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
        get_tile_animation_separation(atlas_coords: Vector2i): Vector2i
        
        /** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_speed(atlas_coords: Vector2i, speed: number /*f64*/): void
        
        /** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
        get_tile_animation_speed(atlas_coords: Vector2i): number /*f64*/
        
        /** Sets the [enum TileAnimationMode] of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
        set_tile_animation_mode(atlas_coords: Vector2i, mode: TileSetAtlasSource.TileAnimationMode): void
        
        /** Returns the [enum TileAnimationMode] of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
        get_tile_animation_mode(atlas_coords: Vector2i): TileSetAtlasSource.TileAnimationMode
        
        /** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_frames_count(atlas_coords: Vector2i, frames_count: number /*i64*/): void
        
        /** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frames_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        set_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/, duration: number /*f64*/): void
        
        /** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/): number /*f64*/
        
        /** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
        get_tile_animation_total_duration(atlas_coords: Vector2i): number /*f64*/
        
        /** Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.  
         *  Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].  
         */
        create_alternative_tile(atlas_coords: Vector2i, alternative_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Remove a tile's alternative with alternative ID [param alternative_tile].  
         *  Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.  
         */
        remove_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): void
        
        /** Change a tile's alternative ID from [param alternative_tile] to [param new_id].  
         *  Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.  
         */
        set_alternative_tile_id(atlas_coords: Vector2i, alternative_tile: number /*i64*/, new_id: number /*i64*/): void
        
        /** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
        get_next_alternative_tile_id(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
        get_tile_data(atlas_coords: Vector2i, alternative_tile: number /*i64*/): TileData
        
        /** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
        get_atlas_grid_size(): Vector2i
        
        /** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
        get_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/ = 0): Rect2i
        _update_padded_texture(): void
        
        /** If [member use_texture_padding] is `false`, returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        get_runtime_texture(): Texture2D
        
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].  
         *      
         *  **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].  
         */
        get_runtime_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/): Rect2i
        
        /** The atlas texture. */
        texture: Texture2D
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        margins: Vector2i
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        separation: Vector2i
        
        /** The base tile size in the texture (in pixel). This size must be bigger than the TileSet's `tile_size` value. */
        texture_region_size: Vector2i
        
        /** If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.  
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.  
         */
        use_texture_padding: boolean
    }
    class TileSetAtlasSourceEditor extends HSplitContainer {
        _set_selection_from_array(_unnamed_arg0: Array): void
        _check_outside_tiles(): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    class TileSetAtlasSourceProxyObject extends Object {
        readonly changed: Signal // what: string => void
    }
    class TileSetEditor extends Control {
    }
    class TileSetEditorPlugin extends EditorPlugin {
    }
    class TileSetScenesCollectionProxyObject extends Object {
        set_id(id: number /*i64*/): void
        get_id(): number /*i64*/
        id: number /*i64*/
        readonly changed: Signal // what: string => void
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetscenescollectionsource.html  
     */
    class TileSetScenesCollectionSource extends TileSetSource {
        /** Returns the number or scene tiles this TileSet source has. */
        get_scene_tiles_count(): number /*i64*/
        
        /** Returns the scene tile ID of the scene tile at [param index]. */
        get_scene_tile_id(index: number /*i64*/): number /*i64*/
        
        /** Returns whether this TileSet source has a scene tile with [param id]. */
        has_scene_tile_id(id: number /*i64*/): boolean
        
        /** Creates a scene-based tile out of the given scene.  
         *  Returns a newly generated unique ID.  
         */
        create_scene_tile(packed_scene: PackedScene, id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
        set_scene_tile_id(id: number /*i64*/, new_id: number /*i64*/): void
        
        /** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap. */
        set_scene_tile_scene(id: number /*i64*/, packed_scene: PackedScene): void
        
        /** Returns the [PackedScene] resource of scene tile with [param id]. */
        get_scene_tile_scene(id: number /*i64*/): PackedScene
        
        /** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
        set_scene_tile_display_placeholder(id: number /*i64*/, display_placeholder: boolean): void
        
        /** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
        get_scene_tile_display_placeholder(id: number /*i64*/): boolean
        
        /** Remove the scene tile with [param id]. */
        remove_scene_tile(id: number /*i64*/): void
        
        /** Returns the scene ID a following call to [method create_scene_tile] would return. */
        get_next_scene_tile_id(): number /*i64*/
    }
    class TileSetScenesCollectionSourceEditor extends HBoxContainer {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    /** Exposes a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetsource.html  
     */
    class TileSetSource extends Resource {
        /** Returns how many tiles this atlas source defines (not including alternative tiles). */
        get_tiles_count(): number /*i64*/
        
        /** Returns the tile coordinates ID of the tile with index [param index]. */
        get_tile_id(index: number /*i64*/): Vector2i
        
        /** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
        has_tile(atlas_coords: Vector2i): boolean
        
        /** Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].  
         *  For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.  
         *  Returns -1 if there is not tile at the given coords.  
         */
        get_alternative_tiles_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
        get_alternative_tile_id(atlas_coords: Vector2i, index: number /*i64*/): number /*i64*/
        
        /** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
        has_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): boolean
    }
    class TileSourceInspectorPlugin extends EditorInspectorPlugin {
    }
    class TilesEditorUtils extends Object {
    }
    namespace Timer {
        enum TimerProcessCallback {
            /** Update the timer during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            TIMER_PROCESS_PHYSICS = 0,
            
            /** Update the timer during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            TIMER_PROCESS_IDLE = 1,
        }
    }
    /** A countdown timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_timer.html  
     */
    class Timer extends Node {
        set_wait_time(time_sec: number /*f64*/): void
        get_wait_time(): number /*f64*/
        set_one_shot(enable: boolean): void
        is_one_shot(): boolean
        set_autostart(enable: boolean): void
        has_autostart(): boolean
        
        /** Starts the timer. Sets [member wait_time] to [param time_sec] if `time_sec > 0`. This also resets the remaining time to [member wait_time].  
         *      
         *  **Note:** This method will not resume a paused timer. See [member paused].  
         */
        start(time_sec: number /*f64*/ = -1): void
        
        /** Stops the timer. */
        stop(): void
        set_paused(paused: boolean): void
        is_paused(): boolean
        
        /** Returns `true` if the timer is stopped. */
        is_stopped(): boolean
        get_time_left(): number /*f64*/
        set_timer_process_callback(callback: Timer.TimerProcessCallback): void
        get_timer_process_callback(): Timer.TimerProcessCallback
        
        /** Processing callback. See [enum TimerProcessCallback]. */
        process_callback: number /*i64*/
        
        /** The wait time in seconds.  
         *      
         *  **Note:** Timers can only emit once per rendered frame at most (or once per physics frame if [member process_callback] is [constant TIMER_PROCESS_PHYSICS]). This means very low wait times (lower than 0.05 seconds) will behave in significantly different ways depending on the rendered framerate. For very low wait times, it is recommended to use a process loop in a script instead of using a Timer node. Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.  
         */
        wait_time: number /*f64*/
        
        /** If `true`, the timer will stop when reaching 0. If `false`, it will restart. */
        one_shot: boolean
        
        /** If `true`, the timer will automatically start when entering the scene tree.  
         *      
         *  **Note:** This property is automatically set to `false` after the timer enters the scene tree and starts.  
         */
        autostart: boolean
        
        /** If `true`, the timer is paused and will not process until it is unpaused again, even if [method start] is called. */
        paused: boolean
        
        /** The timer's remaining time in seconds. Returns 0 if the timer is inactive.  
         *      
         *  **Note:** This value is read-only and cannot be set. It is based on [member wait_time], which can be set using [method start].  
         */
        readonly time_left: number /*f64*/
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal //  => void
    }
    /** Class representing a torus [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_torusmesh.html  
     */
    class TorusMesh extends PrimitiveMesh {
        set_inner_radius(radius: number /*f64*/): void
        get_inner_radius(): number /*f64*/
        set_outer_radius(radius: number /*f64*/): void
        get_outer_radius(): number /*f64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_ring_segments(rings: number /*i64*/): void
        get_ring_segments(): number /*i64*/
        
        /** The inner radius of the torus. */
        inner_radius: number /*f64*/
        
        /** The outer radius of the torus. */
        outer_radius: number /*f64*/
        
        /** The number of slices the torus is constructed of. */
        rings: number /*i64*/
        
        /** The number of edges each ring of the torus is constructed of. */
        ring_segments: number /*i64*/
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            /** Always visible. */
            VISIBILITY_ALWAYS = 0,
            
            /** Visible on touch screens only. */
            VISIBILITY_TOUCHSCREEN_ONLY = 1,
        }
    }
    /** Button for touch screen devices for gameplay use.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_touchscreenbutton.html  
     */
    class TouchScreenButton extends Node2D {
        set_texture_normal(texture: Texture2D): void
        get_texture_normal(): Texture2D
        set_texture_pressed(texture: Texture2D): void
        get_texture_pressed(): Texture2D
        set_bitmask(bitmask: BitMap): void
        get_bitmask(): BitMap
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_shape_centered(bool: boolean): void
        is_shape_centered(): boolean
        set_shape_visible(bool: boolean): void
        is_shape_visible(): boolean
        set_action(action: string): void
        get_action(): string
        set_visibility_mode(mode: TouchScreenButton.VisibilityMode): void
        get_visibility_mode(): TouchScreenButton.VisibilityMode
        set_passby_press(enabled: boolean): void
        is_passby_press_enabled(): boolean
        
        /** Returns `true` if this button is currently pressed. */
        is_pressed(): boolean
        
        /** The button's texture for the normal state. */
        texture_normal: Texture2D
        
        /** The button's texture for the pressed state. */
        texture_pressed: Texture2D
        
        /** The button's bitmask. */
        bitmask: BitMap
        
        /** The button's shape. */
        shape: Shape2D
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        shape_centered: boolean
        
        /** If `true`, the button's shape is visible in the editor. */
        shape_visible: boolean
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        passby_press: boolean
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        action: StringName
        
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        visibility_mode: number /*i64*/
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal //  => void
        
        /** Emitted when the button is released (up). */
        readonly released: Signal //  => void
    }
    /** A language translation that maps a collection of strings to their individual translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_translation.html  
     */
    class Translation extends Resource {
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _get_message(src_message: StringName, context: StringName): StringName
        set_locale(locale: string): void
        get_locale(): string
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_message(src_message: StringName, xlated_message: StringName, context: StringName = ''): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_plural_message(src_message: StringName, xlated_messages: PackedStringArray, context: StringName = ''): void
        
        /** Returns a message's translation. */
        get_message(src_message: StringName, context: StringName = ''): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName = ''): StringName
        
        /** Erases a message. */
        erase_message(src_message: StringName, context: StringName = ''): void
        
        /** Returns all the messages (keys). */
        get_message_list(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        get_translated_message_list(): PackedStringArray
        
        /** Returns the number of existing messages. */
        get_message_count(): number /*i64*/
        _set_messages(messages: Dictionary): void
        _get_messages(): Dictionary
        messages: Dictionary
        
        /** The locale of the translation. */
        locale: string
    }
    namespace Tree {
        enum SelectMode {
            /** Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_SINGLE = 0,
            
            /** Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_ROW = 1,
            
            /** Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.  
             *  The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.  
             */
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            /** Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].  
             *      
             *  **Note:** This is the default flag, it has no effect when combined with other flags.  
             */
            DROP_MODE_DISABLED = 0,
            
            /** Enables the "on item" drop section. This drop section covers the entire item.  
             *  When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.  
             */
            DROP_MODE_ON_ITEM = 1,
            
            /** Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.  
             *  When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.  
             */
            DROP_MODE_INBETWEEN = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tree.html  
     */
    class Tree extends Control {
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        create_item(parent: TreeItem = <any> {} /*compound.type from nil*/, index: number /*i64*/ = -1): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        get_root(): TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        set_column_custom_minimum_width(column: number /*i64*/, min_width: number /*i64*/): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        set_column_expand(column: number /*i64*/, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        set_column_expand_ratio(column: number /*i64*/, ratio: number /*i64*/): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        set_column_clip_content(column: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        is_column_expanding(column: number /*i64*/): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        is_column_clipping_content(column: number /*i64*/): boolean
        
        /** Returns the expand ratio assigned to the column. */
        get_column_expand_ratio(column: number /*i64*/): number /*i64*/
        
        /** Returns the column's width in pixels. */
        get_column_width(column: number /*i64*/): number /*i64*/
        set_hide_root(enable: boolean): void
        is_root_hidden(): boolean
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        get_next_selected(from: TreeItem): TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        get_selected(): TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        set_selected(item: TreeItem, column: number /*i64*/): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        get_selected_column(): number /*i64*/
        
        /** Returns the last pressed button's index. */
        get_pressed_button(): number /*i64*/
        set_select_mode(mode: Tree.SelectMode): void
        get_select_mode(): Tree.SelectMode
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselect_all(): void
        set_columns(amount: number /*i64*/): void
        get_columns(): number /*i64*/
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        get_edited(): TreeItem
        
        /** Returns the column for the currently edited item. */
        get_edited_column(): number /*i64*/
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        edit_selected(force_edit: boolean = false): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        get_custom_popup_rect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        get_item_area_rect(item: TreeItem, column: number /*i64*/ = -1, button_index: number /*i64*/ = -1): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        get_item_at_position(position: Vector2): TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        get_column_at_position(position: Vector2): number /*i64*/
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        get_drop_section_at_position(position: Vector2): number /*i64*/
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        get_button_id_at_position(position: Vector2): number /*i64*/
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensure_cursor_is_visible(): void
        set_column_titles_visible(visible: boolean): void
        are_column_titles_visible(): boolean
        
        /** Sets the title of a column. */
        set_column_title(column: number /*i64*/, title: string): void
        
        /** Returns the column's title. */
        get_column_title(column: number /*i64*/): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        set_column_title_alignment(column: number /*i64*/, title_alignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        get_column_title_alignment(column: number /*i64*/): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        set_column_title_direction(column: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        get_column_title_direction(column: number /*i64*/): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_column_title_language(column: number /*i64*/, language: string): void
        
        /** Returns column title language code. */
        get_column_title_language(column: number /*i64*/): string
        
        /** Returns the current scrolling position. */
        get_scroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scroll_to_item(item: TreeItem, center_on_item: boolean = false): void
        set_h_scroll_enabled(h_scroll: boolean): void
        is_h_scroll_enabled(): boolean
        set_v_scroll_enabled(h_scroll: boolean): void
        is_v_scroll_enabled(): boolean
        set_hide_folding(hide: boolean): void
        is_folding_hidden(): boolean
        set_enable_recursive_folding(enable: boolean): void
        is_recursive_folding_enabled(): boolean
        set_drop_mode_flags(flags: number /*i64*/): void
        get_drop_mode_flags(): number /*i64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        
        /** The number of columns. */
        columns: number /*i64*/
        
        /** If `true`, column titles are visible. */
        column_titles_visible: boolean
        
        /** If `true`, the currently selected cell may be selected again. */
        allow_reselect: boolean
        
        /** If `true`, a right mouse button click can select items. */
        allow_rmb_select: boolean
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        allow_search: boolean
        
        /** If `true`, the folding arrow is hidden. */
        hide_folding: boolean
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down Shift while clicking the fold arrow collapses or uncollapses the [TreeItem] and all its descendants. */
        enable_recursive_folding: boolean
        
        /** If `true`, the tree's root is hidden. */
        hide_root: boolean
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        drop_mode_flags: number /*i64*/
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        select_mode: number /*i64*/
        
        /** If `true`, enables horizontal scrolling. */
        scroll_horizontal_enabled: boolean
        
        /** If `true`, enables vertical scrolling. */
        scroll_vertical_enabled: boolean
        
        /** Emitted when an item is selected. */
        readonly item_selected: Signal //  => void
        
        /** Emitted when a cell is selected. */
        readonly cell_selected: Signal //  => void
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multi_selected: Signal // item: TreeItem, column: number /*i64*/, selected: boolean => void
        
        /** Emitted when an item is selected with a mouse button. */
        readonly item_mouse_selected: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly empty_clicked: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item is edited. */
        readonly item_edited: Signal //  => void
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly custom_item_clicked: Signal // mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly item_icon_double_clicked: Signal //  => void
        
        /** Emitted when an item is collapsed by a click on the folding arrow. */
        readonly item_collapsed: Signal // item: TreeItem => void
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly check_propagated_to_item: Signal // item: TreeItem, column: number /*i64*/ => void
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly button_clicked: Signal // item: TreeItem, column: number /*i64*/, id: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly custom_popup_edited: Signal // arrow_clicked: boolean => void
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly item_activated: Signal //  => void
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly column_title_clicked: Signal // column: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothing_selected: Signal //  => void
    }
}
