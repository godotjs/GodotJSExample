// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class GodotError {}
    class Dictionary {}
    class Array {}
    class Rect2 {}
    class Rect2i {}
    class Vector2 {}
    class Vector2i {}
    class Vector3 {}
    class Vector3i {}
    class Vector4 {}
    class Vector4i {}
    class AABB {}
    class Plane {}
    class Basis {}
    class Color {}
    class NodePath {}
    class StringName {}
    class RID {}
    class Transform2D {}
    class Transform3D {}
    class Projection {}
    class Quaternion {}
    class PackedByteArray {}
    class PackedInt32Array {}
    class PackedInt64Array {}
    class PackedFloat32Array {}
    class PackedFloat64Array {}
    class PackedStringArray {}
    class PackedVector2Array {}
    class PackedVector3Array {}
    class PackedColorArray {}
    namespace Vector2 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }
    namespace Vector2i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }
    namespace Vector3 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }
    namespace Vector3i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z } }
    namespace Vector4 { enum Axis { AXIS_X, AXIS_Y, AXIS_Z, AXIS_W } }
    namespace Vector4i { enum Axis { AXIS_X, AXIS_Y, AXIS_Z, AXIS_W } }
    namespace Performance {
        enum Monitor {
            TIME_FPS = 0,
            TIME_PROCESS = 1,
            TIME_PHYSICS_PROCESS = 2,
            TIME_NAVIGATION_PROCESS = 3,
            MEMORY_STATIC = 4,
            MEMORY_STATIC_MAX = 5,
            MEMORY_MESSAGE_BUFFER_MAX = 6,
            OBJECT_COUNT = 7,
            OBJECT_RESOURCE_COUNT = 8,
            OBJECT_NODE_COUNT = 9,
            OBJECT_ORPHAN_NODE_COUNT = 10,
            RENDER_TOTAL_OBJECTS_IN_FRAME = 11,
            RENDER_TOTAL_PRIMITIVES_IN_FRAME = 12,
            RENDER_TOTAL_DRAW_CALLS_IN_FRAME = 13,
            RENDER_VIDEO_MEM_USED = 14,
            RENDER_TEXTURE_MEM_USED = 15,
            RENDER_BUFFER_MEM_USED = 16,
            PHYSICS_2D_ACTIVE_OBJECTS = 17,
            PHYSICS_2D_COLLISION_PAIRS = 18,
            PHYSICS_2D_ISLAND_COUNT = 19,
            PHYSICS_3D_ACTIVE_OBJECTS = 20,
            PHYSICS_3D_COLLISION_PAIRS = 21,
            PHYSICS_3D_ISLAND_COUNT = 22,
            AUDIO_OUTPUT_LATENCY = 23,
            NAVIGATION_ACTIVE_MAPS = 24,
            NAVIGATION_REGION_COUNT = 25,
            NAVIGATION_AGENT_COUNT = 26,
            NAVIGATION_LINK_COUNT = 27,
            NAVIGATION_POLYGON_COUNT = 28,
            NAVIGATION_EDGE_COUNT = 29,
            NAVIGATION_EDGE_MERGE_COUNT = 30,
            NAVIGATION_EDGE_CONNECTION_COUNT = 31,
            NAVIGATION_EDGE_FREE_COUNT = 32,
            MONITOR_MAX = 33,
        }
    }
    class Performance extends Object {
        static get_monitor(monitor: Performance.Monitor): number /*f64*/
        static add_custom_monitor(id: StringName, callable: any /*CALLABLE*/, arguments: Array): void
        static remove_custom_monitor(id: StringName): void
        static has_custom_monitor(id: StringName): boolean
        static get_custom_monitor(id: StringName): any
        static get_monitor_modification_time(): number /*i64*/
        static get_custom_monitor_names(): Array
    }
    class TextServerManager extends Object {
        static add_interface(interface: TextServer): void
        static get_interface_count(): number /*i64*/
        static remove_interface(interface: TextServer): void
        static get_interface(idx: number /*i64*/): TextServer
        static get_interfaces(): Array
        static find_interface(name: string): TextServer
        static set_primary_interface(index: TextServer): void
        static get_primary_interface(): TextServer
        // SIGNAL: interface_added
        // SIGNAL: interface_removed
    }
    class PhysicsServer2DManager extends Object {
        static register_server(name: string, create_callback: any /*CALLABLE*/): void
        static set_default_server(name: string, priority: number /*i64*/): void
    }
    class PhysicsServer3DManager extends Object {
        static register_server(name: string, create_callback: any /*CALLABLE*/): void
        static set_default_server(name: string, priority: number /*i64*/): void
    }
    class NavigationMeshGenerator extends Object {
        static bake(navigation_mesh: NavigationMesh, root_node: Node): void
        static clear(navigation_mesh: NavigationMesh): void
        static parse_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, root_node: Node, callback: any /*CALLABLE*/): void
        static bake_from_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: any /*CALLABLE*/): void
    }
    class ProjectSettings extends Object {
        static has_setting(name: string): boolean
        static set_setting(name: string, value: any): void
        static get_setting(name: string, default_value: any): any
        static get_setting_with_override(name: StringName): any
        static get_global_class_list(): Array
        static set_order(name: string, position: number /*i64*/): void
        static get_order(name: string): number /*i64*/
        static set_initial_value(name: string, value: any): void
        static set_as_basic(name: string, basic: boolean): void
        static set_as_internal(name: string, internal: boolean): void
        static add_property_info(hint: Dictionary): void
        static set_restart_if_changed(name: string, restart: boolean): void
        static clear(name: string): void
        static localize_path(path: string): string
        static globalize_path(path: string): string
        static save(): GodotError
        static load_resource_pack(pack: string, replace_files: boolean, offset: number /*i64*/): boolean
        static save_custom(file: string): GodotError
        // SIGNAL: settings_changed
    }
    namespace IP {
        enum ResolverStatus {
            RESOLVER_STATUS_NONE = 0,
            RESOLVER_STATUS_WAITING = 1,
            RESOLVER_STATUS_DONE = 2,
            RESOLVER_STATUS_ERROR = 3,
        }
        enum Type {
            TYPE_NONE = 0,
            TYPE_IPV4 = 1,
            TYPE_IPV6 = 2,
            TYPE_ANY = 3,
        }
    }
    class IP extends Object {
        static readonly RESOLVER_MAX_QUERIES = 256
        static readonly RESOLVER_INVALID_ID = -1
        static resolve_hostname(host: string, ip_type: IP.Type): string
        static resolve_hostname_addresses(host: string, ip_type: IP.Type): PackedStringArray
        static resolve_hostname_queue_item(host: string, ip_type: IP.Type): number /*i64*/
        static get_resolve_item_status(id: number /*i64*/): IP.ResolverStatus
        static get_resolve_item_address(id: number /*i64*/): string
        static get_resolve_item_addresses(id: number /*i64*/): Array
        static erase_resolve_item(id: number /*i64*/): void
        static get_local_addresses(): PackedStringArray
        static get_local_interfaces(): Array
        static clear_cache(hostname: string): void
    }
    namespace Geometry2D {
        enum PolyBooleanOperation {
            OPERATION_UNION = 0,
            OPERATION_DIFFERENCE = 1,
            OPERATION_INTERSECTION = 2,
            OPERATION_XOR = 3,
        }
        enum PolyJoinType {
            JOIN_SQUARE = 0,
            JOIN_ROUND = 1,
            JOIN_MITER = 2,
        }
        enum PolyEndType {
            END_POLYGON = 0,
            END_JOINED = 1,
            END_BUTT = 2,
            END_SQUARE = 3,
            END_ROUND = 4,
        }
    }
    class Geometry2D extends Object {
        static is_point_in_circle(point: Vector2, circle_position: Vector2, circle_radius: number /*f64*/): boolean
        static segment_intersects_circle(segment_from: Vector2, segment_to: Vector2, circle_position: Vector2, circle_radius: number /*f64*/): number /*f64*/
        static segment_intersects_segment(from_a: Vector2, to_a: Vector2, from_b: Vector2, to_b: Vector2): any
        static line_intersects_line(from_a: Vector2, dir_a: Vector2, from_b: Vector2, dir_b: Vector2): any
        static get_closest_points_between_segments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array
        static get_closest_point_to_segment(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        static get_closest_point_to_segment_uncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        static point_is_inside_triangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean
        static is_polygon_clockwise(polygon: PackedVector2Array): boolean
        static is_point_in_polygon(point: Vector2, polygon: PackedVector2Array): boolean
        static triangulate_polygon(polygon: PackedVector2Array): PackedInt32Array
        static triangulate_delaunay(points: PackedVector2Array): PackedInt32Array
        static convex_hull(points: PackedVector2Array): PackedVector2Array
        static decompose_polygon_in_convex(polygon: PackedVector2Array): Array
        static merge_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        static clip_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        static intersect_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        static exclude_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        static clip_polyline_with_polygon(polyline: PackedVector2Array, polygon: PackedVector2Array): Array
        static intersect_polyline_with_polygon(polyline: PackedVector2Array, polygon: PackedVector2Array): Array
        static offset_polygon(polygon: PackedVector2Array, delta: number /*f64*/, join_type: Geometry2D.PolyJoinType): Array
        static offset_polyline(polyline: PackedVector2Array, delta: number /*f64*/, join_type: Geometry2D.PolyJoinType, end_type: Geometry2D.PolyEndType): Array
        static make_atlas(sizes: PackedVector2Array): Dictionary
    }
    class Geometry3D extends Object {
        static compute_convex_mesh_points(planes: Array): PackedVector3Array
        static build_box_planes(extents: Vector3): Array
        static build_cylinder_planes(radius: number /*f64*/, height: number /*f64*/, sides: number /*i64*/, axis: Vector3.Axis): Array
        static build_capsule_planes(radius: number /*f64*/, height: number /*f64*/, sides: number /*i64*/, lats: number /*i64*/, axis: Vector3.Axis): Array
        static get_closest_points_between_segments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array
        static get_closest_point_to_segment(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        static get_closest_point_to_segment_uncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        static get_triangle_barycentric_coords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
        static ray_intersects_triangle(from: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        static segment_intersects_triangle(from: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        static segment_intersects_sphere(from: Vector3, to: Vector3, sphere_position: Vector3, sphere_radius: number /*f64*/): PackedVector3Array
        static segment_intersects_cylinder(from: Vector3, to: Vector3, height: number /*f64*/, radius: number /*f64*/): PackedVector3Array
        static segment_intersects_convex(from: Vector3, to: Vector3, planes: Array): PackedVector3Array
        static clip_polygon(points: PackedVector3Array, plane: Plane): PackedVector3Array
    }
    namespace ResourceLoader {
        enum ThreadLoadStatus {
            THREAD_LOAD_INVALID_RESOURCE = 0,
            THREAD_LOAD_IN_PROGRESS = 1,
            THREAD_LOAD_FAILED = 2,
            THREAD_LOAD_LOADED = 3,
        }
        enum CacheMode {
            CACHE_MODE_IGNORE = 0,
            CACHE_MODE_REUSE = 1,
            CACHE_MODE_REPLACE = 2,
        }
    }
    class ResourceLoader extends Object {
        static load_threaded_request(path: string, type_hint: string, use_sub_threads: boolean, cache_mode: ResourceLoader.CacheMode): GodotError
        static load_threaded_get_status(path: string, progress: Array): ResourceLoader.ThreadLoadStatus
        static load_threaded_get(path: string): Resource
        static load(path: string, type_hint: string, cache_mode: ResourceLoader.CacheMode): Resource
        static get_recognized_extensions_for_type(type: string): PackedStringArray
        static add_resource_format_loader(format_loader: ResourceFormatLoader, at_front: boolean): void
        static remove_resource_format_loader(format_loader: ResourceFormatLoader): void
        static set_abort_on_missing_resources(abort: boolean): void
        static get_dependencies(path: string): PackedStringArray
        static has_cached(path: string): boolean
        static exists(path: string, type_hint: string): boolean
        static get_resource_uid(path: string): number /*i64*/
    }
    namespace ResourceSaver {
        enum SaverFlags {
            FLAG_NONE = 0,
            FLAG_RELATIVE_PATHS = 1,
            FLAG_BUNDLE_RESOURCES = 2,
            FLAG_CHANGE_PATH = 4,
            FLAG_OMIT_EDITOR_PROPERTIES = 8,
            FLAG_SAVE_BIG_ENDIAN = 16,
            FLAG_COMPRESS = 32,
            FLAG_REPLACE_SUBRESOURCE_PATHS = 64,
        }
    }
    class ResourceSaver extends Object {
        static save(resource: Resource, path: string, flags: ResourceSaver.SaverFlags): GodotError
        static get_recognized_extensions(type: Resource): PackedStringArray
        static add_resource_format_saver(format_saver: ResourceFormatSaver, at_front: boolean): void
        static remove_resource_format_saver(format_saver: ResourceFormatSaver): void
    }
    namespace OS {
        enum RenderingDriver {
            RENDERING_DRIVER_VULKAN = 0,
            RENDERING_DRIVER_OPENGL3 = 1,
        }
        enum SystemDir {
            SYSTEM_DIR_DESKTOP = 0,
            SYSTEM_DIR_DCIM = 1,
            SYSTEM_DIR_DOCUMENTS = 2,
            SYSTEM_DIR_DOWNLOADS = 3,
            SYSTEM_DIR_MOVIES = 4,
            SYSTEM_DIR_MUSIC = 5,
            SYSTEM_DIR_PICTURES = 6,
            SYSTEM_DIR_RINGTONES = 7,
        }
    }
    class OS extends Object {
        static get_connected_midi_inputs(): PackedStringArray
        static open_midi_inputs(): void
        static close_midi_inputs(): void
        static alert(text: string, title: string): void
        static crash(message: string): void
        static set_low_processor_usage_mode(enable: boolean): void
        static is_in_low_processor_usage_mode(): boolean
        static set_low_processor_usage_mode_sleep_usec(usec: number /*i64*/): void
        static get_low_processor_usage_mode_sleep_usec(): number /*i64*/
        static set_delta_smoothing(delta_smoothing_enabled: boolean): void
        static is_delta_smoothing_enabled(): boolean
        static get_processor_count(): number /*i64*/
        static get_processor_name(): string
        static get_system_fonts(): PackedStringArray
        static get_system_font_path(font_name: string, weight: number /*i64*/, stretch: number /*i64*/, italic: boolean): string
        static get_system_font_path_for_text(font_name: string, text: string, locale: string, script: string, weight: number /*i64*/, stretch: number /*i64*/, italic: boolean): PackedStringArray
        static get_executable_path(): string
        static read_string_from_stdin(): string
        static execute(path: string, arguments: PackedStringArray, output: Array, read_stderr: boolean, open_console: boolean): number /*i64*/
        static create_process(path: string, arguments: PackedStringArray, open_console: boolean): number /*i64*/
        static create_instance(arguments: PackedStringArray): number /*i64*/
        static kill(pid: number /*i64*/): GodotError
        static shell_open(uri: string): GodotError
        static shell_show_in_file_manager(file_or_dir_path: string, open_folder: boolean): GodotError
        static is_process_running(pid: number /*i64*/): boolean
        static get_process_id(): number /*i64*/
        static has_environment(variable: string): boolean
        static get_environment(variable: string): string
        static set_environment(variable: string, value: string): void
        static unset_environment(variable: string): void
        static get_name(): string
        static get_distribution_name(): string
        static get_version(): string
        static get_cmdline_args(): PackedStringArray
        static get_cmdline_user_args(): PackedStringArray
        static get_video_adapter_driver_info(): PackedStringArray
        static set_restart_on_exit(restart: boolean, arguments: PackedStringArray): void
        static is_restart_on_exit_set(): boolean
        static get_restart_on_exit_arguments(): PackedStringArray
        static delay_usec(usec: number /*i64*/): void
        static delay_msec(msec: number /*i64*/): void
        static get_locale(): string
        static get_locale_language(): string
        static get_model_name(): string
        static is_userfs_persistent(): boolean
        static is_stdout_verbose(): boolean
        static is_debug_build(): boolean
        static get_static_memory_usage(): number /*i64*/
        static get_static_memory_peak_usage(): number /*i64*/
        static get_memory_info(): Dictionary
        static move_to_trash(path: string): GodotError
        static get_user_data_dir(): string
        static get_system_dir(dir: OS.SystemDir, shared_storage: boolean): string
        static get_config_dir(): string
        static get_data_dir(): string
        static get_cache_dir(): string
        static get_unique_id(): string
        static get_keycode_string(code: Key): string
        static is_keycode_unicode(code: number /*i64*/): boolean
        static find_keycode_from_string(string_: string): Key
        static set_use_file_access_save_and_swap(enabled: boolean): void
        static set_thread_name(name: string): GodotError
        static get_thread_caller_id(): number /*i64*/
        static get_main_thread_id(): number /*i64*/
        static has_feature(tag_name: string): boolean
        static is_sandboxed(): boolean
        static request_permission(name: string): boolean
        static request_permissions(): boolean
        static get_granted_permissions(): PackedStringArray
        static revoke_granted_permissions(): void
    }
    class Engine extends Object {
        static set_physics_ticks_per_second(physics_ticks_per_second: number /*i64*/): void
        static get_physics_ticks_per_second(): number /*i64*/
        static set_max_physics_steps_per_frame(max_physics_steps: number /*i64*/): void
        static get_max_physics_steps_per_frame(): number /*i64*/
        static set_physics_jitter_fix(physics_jitter_fix: number /*f64*/): void
        static get_physics_jitter_fix(): number /*f64*/
        static get_physics_interpolation_fraction(): number /*f64*/
        static set_max_fps(max_fps: number /*i64*/): void
        static get_max_fps(): number /*i64*/
        static set_time_scale(time_scale: number /*f64*/): void
        static get_time_scale(): number /*f64*/
        static get_frames_drawn(): number /*i64*/
        static get_frames_per_second(): number /*f64*/
        static get_physics_frames(): number /*i64*/
        static get_process_frames(): number /*i64*/
        static get_main_loop(): MainLoop
        static get_version_info(): Dictionary
        static get_author_info(): Dictionary
        static get_copyright_info(): Array
        static get_donor_info(): Dictionary
        static get_license_info(): Dictionary
        static get_license_text(): string
        static get_architecture_name(): string
        static is_in_physics_frame(): boolean
        static has_singleton(name: StringName): boolean
        static get_singleton(name: StringName): Object
        static register_singleton(name: StringName, instance: Object): void
        static unregister_singleton(name: StringName): void
        static get_singleton_list(): PackedStringArray
        static register_script_language(language: ScriptLanguage): GodotError
        static unregister_script_language(language: ScriptLanguage): GodotError
        static get_script_language_count(): number /*i64*/
        static get_script_language(index: number /*i64*/): ScriptLanguage
        static is_editor_hint(): boolean
        static get_write_movie_path(): string
        static set_print_error_messages(enabled: boolean): void
        static is_printing_error_messages(): boolean
    }
    class ClassDB extends Object {
        static get_class_list(): PackedStringArray
        static get_inheriters_from_class(class_: StringName): PackedStringArray
        static get_parent_class(class_: StringName): StringName
        static class_exists(class_: StringName): boolean
        static is_parent_class(class_: StringName, inherits: StringName): boolean
        static can_instantiate(class_: StringName): boolean
        static instantiate(class_: StringName): any
        static class_has_signal(class_: StringName, signal: StringName): boolean
        static class_get_signal(class_: StringName, signal: StringName): Dictionary
        static class_get_signal_list(class_: StringName, no_inheritance: boolean): Array
        static class_get_property_list(class_: StringName, no_inheritance: boolean): Array
        static class_get_property(object: Object, property: StringName): any
        static class_set_property(object: Object, property: StringName, value: any): GodotError
        static class_has_method(class_: StringName, method: StringName, no_inheritance: boolean): boolean
        static class_get_method_list(class_: StringName, no_inheritance: boolean): Array
        static class_get_integer_constant_list(class_: StringName, no_inheritance: boolean): PackedStringArray
        static class_has_integer_constant(class_: StringName, name: StringName): boolean
        static class_get_integer_constant(class_: StringName, name: StringName): number /*i64*/
        static class_has_enum(class_: StringName, name: StringName, no_inheritance: boolean): boolean
        static class_get_enum_list(class_: StringName, no_inheritance: boolean): PackedStringArray
        static class_get_enum_constants(class_: StringName, enum_: StringName, no_inheritance: boolean): PackedStringArray
        static class_get_integer_constant_enum(class_: StringName, name: StringName, no_inheritance: boolean): StringName
        static is_class_enabled(class_: StringName): boolean
    }
    class Marshalls extends Object {
        static variant_to_base64(variant: any, full_objects: boolean): string
        static base64_to_variant(base64_str: string, allow_objects: boolean): any
        static raw_to_base64(array: PackedByteArray): string
        static base64_to_raw(base64_str: string): PackedByteArray
        static utf8_to_base64(utf8_str: string): string
        static base64_to_utf8(base64_str: string): string
    }
    class TranslationServer extends Object {
        static set_locale(locale: string): void
        static get_locale(): string
        static get_tool_locale(): string
        static compare_locales(locale_a: string, locale_b: string): number /*i64*/
        static standardize_locale(locale: string): string
        static get_all_languages(): PackedStringArray
        static get_language_name(language: string): string
        static get_all_scripts(): PackedStringArray
        static get_script_name(script: string): string
        static get_all_countries(): PackedStringArray
        static get_country_name(country: string): string
        static get_locale_name(locale: string): string
        static translate(message: StringName, context: StringName): StringName
        static translate_plural(message: StringName, plural_message: StringName, n: number /*i64*/, context: StringName): StringName
        static add_translation(translation: Translation): void
        static remove_translation(translation: Translation): void
        static get_translation_object(locale: string): Translation
        static clear(): void
        static get_loaded_locales(): PackedStringArray
        static is_pseudolocalization_enabled(): boolean
        static set_pseudolocalization_enabled(enabled: boolean): void
        static reload_pseudolocalization(): void
        static pseudolocalize(message: StringName): StringName
    }
    namespace Input {
        enum MouseMode {
            MOUSE_MODE_VISIBLE = 0,
            MOUSE_MODE_HIDDEN = 1,
            MOUSE_MODE_CAPTURED = 2,
            MOUSE_MODE_CONFINED = 3,
            MOUSE_MODE_CONFINED_HIDDEN = 4,
        }
        enum CursorShape {
            CURSOR_ARROW = 0,
            CURSOR_IBEAM = 1,
            CURSOR_POINTING_HAND = 2,
            CURSOR_CROSS = 3,
            CURSOR_WAIT = 4,
            CURSOR_BUSY = 5,
            CURSOR_DRAG = 6,
            CURSOR_CAN_DROP = 7,
            CURSOR_FORBIDDEN = 8,
            CURSOR_VSIZE = 9,
            CURSOR_HSIZE = 10,
            CURSOR_BDIAGSIZE = 11,
            CURSOR_FDIAGSIZE = 12,
            CURSOR_MOVE = 13,
            CURSOR_VSPLIT = 14,
            CURSOR_HSPLIT = 15,
            CURSOR_HELP = 16,
        }
    }
    class Input extends Object {
        static is_anything_pressed(): boolean
        static is_key_pressed(keycode: Key): boolean
        static is_physical_key_pressed(keycode: Key): boolean
        static is_key_label_pressed(keycode: Key): boolean
        static is_mouse_button_pressed(button: MouseButton): boolean
        static is_joy_button_pressed(device: number /*i64*/, button: JoyButton): boolean
        static is_action_pressed(action: StringName, exact_match: boolean): boolean
        static is_action_just_pressed(action: StringName, exact_match: boolean): boolean
        static is_action_just_released(action: StringName, exact_match: boolean): boolean
        static get_action_strength(action: StringName, exact_match: boolean): number /*f64*/
        static get_action_raw_strength(action: StringName, exact_match: boolean): number /*f64*/
        static get_axis(negative_action: StringName, positive_action: StringName): number /*f64*/
        static get_vector(negative_x: StringName, positive_x: StringName, negative_y: StringName, positive_y: StringName, deadzone: number /*f64*/): Vector2
        static add_joy_mapping(mapping: string, update_existing: boolean): void
        static remove_joy_mapping(guid: string): void
        static is_joy_known(device: number /*i64*/): boolean
        static get_joy_axis(device: number /*i64*/, axis: JoyAxis): number /*f64*/
        static get_joy_name(device: number /*i64*/): string
        static get_joy_guid(device: number /*i64*/): string
        static get_joy_info(device: number /*i64*/): Dictionary
        static should_ignore_device(vendor_id: number /*i64*/, product_id: number /*i64*/): boolean
        static get_connected_joypads(): Array
        static get_joy_vibration_strength(device: number /*i64*/): Vector2
        static get_joy_vibration_duration(device: number /*i64*/): number /*f64*/
        static start_joy_vibration(device: number /*i64*/, weak_magnitude: number /*f64*/, strong_magnitude: number /*f64*/, duration: number /*f64*/): void
        static stop_joy_vibration(device: number /*i64*/): void
        static vibrate_handheld(duration_ms: number /*i64*/): void
        static get_gravity(): Vector3
        static get_accelerometer(): Vector3
        static get_magnetometer(): Vector3
        static get_gyroscope(): Vector3
        static set_gravity(value: Vector3): void
        static set_accelerometer(value: Vector3): void
        static set_magnetometer(value: Vector3): void
        static set_gyroscope(value: Vector3): void
        static get_last_mouse_velocity(): Vector2
        static get_mouse_button_mask(): MouseButtonMask
        static set_mouse_mode(mode: Input.MouseMode): void
        static get_mouse_mode(): Input.MouseMode
        static warp_mouse(position: Vector2): void
        static action_press(action: StringName, strength: number /*f64*/): void
        static action_release(action: StringName): void
        static set_default_cursor_shape(shape: Input.CursorShape): void
        static get_current_cursor_shape(): Input.CursorShape
        static set_custom_mouse_cursor(image: Resource, shape: Input.CursorShape, hotspot: Vector2): void
        static parse_input_event(event: InputEvent): void
        static set_use_accumulated_input(enable: boolean): void
        static is_using_accumulated_input(): boolean
        static flush_buffered_events(): void
        // SIGNAL: joy_connection_changed
    }
    class InputMap extends Object {
        static has_action(action: StringName): boolean
        static get_actions(): Array
        static add_action(action: StringName, deadzone: number /*f64*/): void
        static erase_action(action: StringName): void
        static action_set_deadzone(action: StringName, deadzone: number /*f64*/): void
        static action_get_deadzone(action: StringName): number /*f64*/
        static action_add_event(action: StringName, event: InputEvent): void
        static action_has_event(action: StringName, event: InputEvent): boolean
        static action_erase_event(action: StringName, event: InputEvent): void
        static action_erase_events(action: StringName): void
        static action_get_events(action: StringName): Array
        static event_is_action(event: InputEvent, action: StringName, exact_match: boolean): boolean
        static load_from_project_settings(): void
    }
    class EngineDebugger extends Object {
        static is_active(): boolean
        static register_profiler(name: StringName, profiler: EngineProfiler): void
        static unregister_profiler(name: StringName): void
        static is_profiling(name: StringName): boolean
        static has_profiler(name: StringName): boolean
        static profiler_add_frame_data(name: StringName, data: Array): void
        static profiler_enable(name: StringName, enable: boolean, arguments: Array): void
        static register_message_capture(name: StringName, callable: any /*CALLABLE*/): void
        static unregister_message_capture(name: StringName): void
        static has_capture(name: StringName): boolean
        static send_message(message: string, data: Array): void
    }
    namespace Time {
        enum Month {
            MONTH_JANUARY = 1,
            MONTH_FEBRUARY = 2,
            MONTH_MARCH = 3,
            MONTH_APRIL = 4,
            MONTH_MAY = 5,
            MONTH_JUNE = 6,
            MONTH_JULY = 7,
            MONTH_AUGUST = 8,
            MONTH_SEPTEMBER = 9,
            MONTH_OCTOBER = 10,
            MONTH_NOVEMBER = 11,
            MONTH_DECEMBER = 12,
        }
        enum Weekday {
            WEEKDAY_SUNDAY = 0,
            WEEKDAY_MONDAY = 1,
            WEEKDAY_TUESDAY = 2,
            WEEKDAY_WEDNESDAY = 3,
            WEEKDAY_THURSDAY = 4,
            WEEKDAY_FRIDAY = 5,
            WEEKDAY_SATURDAY = 6,
        }
    }
    class Time extends Object {
        static get_datetime_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        static get_date_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        static get_time_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        static get_datetime_string_from_unix_time(unix_time_val: number /*i64*/, use_space: boolean): string
        static get_date_string_from_unix_time(unix_time_val: number /*i64*/): string
        static get_time_string_from_unix_time(unix_time_val: number /*i64*/): string
        static get_datetime_dict_from_datetime_string(datetime: string, weekday: boolean): Dictionary
        static get_datetime_string_from_datetime_dict(datetime: Dictionary, use_space: boolean): string
        static get_unix_time_from_datetime_dict(datetime: Dictionary): number /*i64*/
        static get_unix_time_from_datetime_string(datetime: string): number /*i64*/
        static get_offset_string_from_offset_minutes(offset_minutes: number /*i64*/): string
        static get_datetime_dict_from_system(utc: boolean): Dictionary
        static get_date_dict_from_system(utc: boolean): Dictionary
        static get_time_dict_from_system(utc: boolean): Dictionary
        static get_datetime_string_from_system(utc: boolean, use_space: boolean): string
        static get_date_string_from_system(utc: boolean): string
        static get_time_string_from_system(utc: boolean): string
        static get_time_zone_from_system(): Dictionary
        static get_unix_time_from_system(): number /*f64*/
        static get_ticks_msec(): number /*i64*/
        static get_ticks_usec(): number /*i64*/
    }
    namespace GDExtensionManager {
        enum LoadStatus {
            LOAD_STATUS_OK = 0,
            LOAD_STATUS_FAILED = 1,
            LOAD_STATUS_ALREADY_LOADED = 2,
            LOAD_STATUS_NOT_LOADED = 3,
            LOAD_STATUS_NEEDS_RESTART = 4,
        }
    }
    class GDExtensionManager extends Object {
        static load_extension(path: string): GDExtensionManager.LoadStatus
        static reload_extension(path: string): GDExtensionManager.LoadStatus
        static unload_extension(path: string): GDExtensionManager.LoadStatus
        static is_extension_loaded(path: string): boolean
        static get_loaded_extensions(): PackedStringArray
        static get_extension(path: string): GDExtension
        // SIGNAL: extensions_reloaded
    }
    class ResourceUID extends Object {
        static readonly INVALID_ID = -1
        static id_to_text(id: number /*i64*/): string
        static text_to_id(text_id: string): number /*i64*/
        static create_id(): number /*i64*/
        static has_id(id: number /*i64*/): boolean
        static add_id(id: number /*i64*/, path: string): void
        static set_id(id: number /*i64*/, path: string): void
        static get_id_path(id: number /*i64*/): string
        static remove_id(id: number /*i64*/): void
    }
    class WorkerThreadPool extends Object {
        static add_task(action: any /*CALLABLE*/, high_priority: boolean, description: string): number /*i64*/
        static is_task_completed(task_id: number /*i64*/): boolean
        static wait_for_task_completion(task_id: number /*i64*/): GodotError
        static add_group_task(action: any /*CALLABLE*/, elements: number /*i64*/, tasks_needed: number /*i64*/, high_priority: boolean, description: string): number /*i64*/
        static is_group_task_completed(group_id: number /*i64*/): boolean
        static get_group_processed_element_count(group_id: number /*i64*/): number /*i64*/
        static wait_for_group_task_completion(group_id: number /*i64*/): void
    }
    class ThemeDB extends Object {
        static get_default_theme(): Theme
        static get_project_theme(): Theme
        static set_fallback_base_scale(base_scale: number /*f64*/): void
        static get_fallback_base_scale(): number /*f64*/
        static set_fallback_font(font: Font): void
        static get_fallback_font(): Font
        static set_fallback_font_size(font_size: number /*i64*/): void
        static get_fallback_font_size(): number /*i64*/
        static set_fallback_icon(icon: Texture2D): void
        static get_fallback_icon(): Texture2D
        static set_fallback_stylebox(stylebox: StyleBox): void
        static get_fallback_stylebox(): StyleBox
        // SIGNAL: fallback_changed
    }
    class EditorInterface extends Object {
        static restart_editor(save: boolean): void
        static get_command_palette(): EditorCommandPalette
        static get_resource_filesystem(): EditorFileSystem
        static get_editor_paths(): EditorPaths
        static get_resource_previewer(): EditorResourcePreview
        static get_selection(): EditorSelection
        static get_editor_settings(): EditorSettings
        static make_mesh_previews(meshes: Array, preview_size: number /*i64*/): Array
        static set_plugin_enabled(plugin: string, enabled: boolean): void
        static is_plugin_enabled(plugin: string): boolean
        static get_editor_theme(): Theme
        static get_base_control(): Control
        static get_editor_main_screen(): VBoxContainer
        static get_script_editor(): ScriptEditor
        static get_editor_viewport_2d(): SubViewport
        static get_editor_viewport_3d(idx: number /*i64*/): SubViewport
        static set_main_screen_editor(name: string): void
        static set_distraction_free_mode(enter: boolean): void
        static is_distraction_free_mode_enabled(): boolean
        static get_editor_scale(): number /*f64*/
        static popup_dialog(dialog: Window, rect: Rect2i): void
        static popup_dialog_centered(dialog: Window, minsize: Vector2i): void
        static popup_dialog_centered_ratio(dialog: Window, ratio: number /*f64*/): void
        static popup_dialog_centered_clamped(dialog: Window, minsize: Vector2i, fallback_ratio: number /*f64*/): void
        static get_current_feature_profile(): string
        static set_current_feature_profile(profile_name: string): void
        static get_file_system_dock(): FileSystemDock
        static select_file(file: string): void
        static get_selected_paths(): PackedStringArray
        static get_current_path(): string
        static get_current_directory(): string
        static get_inspector(): EditorInspector
        static inspect_object(object: Object, for_property: string, inspector_only: boolean): void
        static edit_resource(resource: Resource): void
        static edit_node(node: Node): void
        static edit_script(script: Script, line: number /*i64*/, column: number /*i64*/, grab_focus: boolean): void
        static open_scene_from_path(scene_filepath: string): void
        static reload_scene_from_path(scene_filepath: string): void
        static get_open_scenes(): PackedStringArray
        static get_edited_scene_root(): Node
        static save_scene(): GodotError
        static save_scene_as(path: string, with_preview: boolean): void
        static save_all_scenes(): void
        static mark_scene_as_unsaved(): void
        static play_main_scene(): void
        static play_current_scene(): void
        static play_custom_scene(scene_filepath: string): void
        static stop_playing_scene(): void
        static is_playing_scene(): boolean
        static get_playing_scene(): string
        static set_movie_maker_enabled(enabled: boolean): void
        static is_movie_maker_enabled(): boolean
    }
    class JavaClassWrapper extends Object {
        static wrap(name: string): JavaClass
    }
    class JavaScriptBridge extends Object {
        static eval(code: string, use_global_execution_context: boolean): any
        static get_interface(interface: string): JavaScriptObject
        static create_callback(callable: any /*CALLABLE*/): JavaScriptObject
        static create_object(object: string): any
        static download_buffer(buffer: PackedByteArray, name: string, mime: string): void
        static pwa_needs_update(): boolean
        static pwa_update(): GodotError
        static force_fs_sync(): void
        // SIGNAL: pwa_update_available
    }
    namespace DisplayServer {
        enum Feature {
            FEATURE_GLOBAL_MENU = 0,
            FEATURE_SUBWINDOWS = 1,
            FEATURE_TOUCHSCREEN = 2,
            FEATURE_MOUSE = 3,
            FEATURE_MOUSE_WARP = 4,
            FEATURE_CLIPBOARD = 5,
            FEATURE_VIRTUAL_KEYBOARD = 6,
            FEATURE_CURSOR_SHAPE = 7,
            FEATURE_CUSTOM_CURSOR_SHAPE = 8,
            FEATURE_NATIVE_DIALOG = 9,
            FEATURE_IME = 10,
            FEATURE_WINDOW_TRANSPARENCY = 11,
            FEATURE_HIDPI = 12,
            FEATURE_ICON = 13,
            FEATURE_NATIVE_ICON = 14,
            FEATURE_ORIENTATION = 15,
            FEATURE_SWAP_BUFFERS = 16,
            FEATURE_CLIPBOARD_PRIMARY = 18,
            FEATURE_TEXT_TO_SPEECH = 19,
            FEATURE_EXTEND_TO_TITLE = 20,
            FEATURE_SCREEN_CAPTURE = 21,
        }
        enum MouseMode {
            MOUSE_MODE_VISIBLE = 0,
            MOUSE_MODE_HIDDEN = 1,
            MOUSE_MODE_CAPTURED = 2,
            MOUSE_MODE_CONFINED = 3,
            MOUSE_MODE_CONFINED_HIDDEN = 4,
        }
        enum ScreenOrientation {
            SCREEN_LANDSCAPE = 0,
            SCREEN_PORTRAIT = 1,
            SCREEN_REVERSE_LANDSCAPE = 2,
            SCREEN_REVERSE_PORTRAIT = 3,
            SCREEN_SENSOR_LANDSCAPE = 4,
            SCREEN_SENSOR_PORTRAIT = 5,
            SCREEN_SENSOR = 6,
        }
        enum VirtualKeyboardType {
            KEYBOARD_TYPE_DEFAULT = 0,
            KEYBOARD_TYPE_MULTILINE = 1,
            KEYBOARD_TYPE_NUMBER = 2,
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            KEYBOARD_TYPE_PHONE = 4,
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            KEYBOARD_TYPE_PASSWORD = 6,
            KEYBOARD_TYPE_URL = 7,
        }
        enum CursorShape {
            CURSOR_ARROW = 0,
            CURSOR_IBEAM = 1,
            CURSOR_POINTING_HAND = 2,
            CURSOR_CROSS = 3,
            CURSOR_WAIT = 4,
            CURSOR_BUSY = 5,
            CURSOR_DRAG = 6,
            CURSOR_CAN_DROP = 7,
            CURSOR_FORBIDDEN = 8,
            CURSOR_VSIZE = 9,
            CURSOR_HSIZE = 10,
            CURSOR_BDIAGSIZE = 11,
            CURSOR_FDIAGSIZE = 12,
            CURSOR_MOVE = 13,
            CURSOR_VSPLIT = 14,
            CURSOR_HSPLIT = 15,
            CURSOR_HELP = 16,
            CURSOR_MAX = 17,
        }
        enum FileDialogMode {
            FILE_DIALOG_MODE_OPEN_FILE = 0,
            FILE_DIALOG_MODE_OPEN_FILES = 1,
            FILE_DIALOG_MODE_OPEN_DIR = 2,
            FILE_DIALOG_MODE_OPEN_ANY = 3,
            FILE_DIALOG_MODE_SAVE_FILE = 4,
        }
        enum WindowMode {
            WINDOW_MODE_WINDOWED = 0,
            WINDOW_MODE_MINIMIZED = 1,
            WINDOW_MODE_MAXIMIZED = 2,
            WINDOW_MODE_FULLSCREEN = 3,
            WINDOW_MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum WindowFlags {
            WINDOW_FLAG_RESIZE_DISABLED = 0,
            WINDOW_FLAG_BORDERLESS = 1,
            WINDOW_FLAG_ALWAYS_ON_TOP = 2,
            WINDOW_FLAG_TRANSPARENT = 3,
            WINDOW_FLAG_NO_FOCUS = 4,
            WINDOW_FLAG_POPUP = 5,
            WINDOW_FLAG_EXTEND_TO_TITLE = 6,
            WINDOW_FLAG_MOUSE_PASSTHROUGH = 7,
            WINDOW_FLAG_MAX = 8,
        }
        enum WindowEvent {
            WINDOW_EVENT_MOUSE_ENTER = 0,
            WINDOW_EVENT_MOUSE_EXIT = 1,
            WINDOW_EVENT_FOCUS_IN = 2,
            WINDOW_EVENT_FOCUS_OUT = 3,
            WINDOW_EVENT_CLOSE_REQUEST = 4,
            WINDOW_EVENT_GO_BACK_REQUEST = 5,
            WINDOW_EVENT_DPI_CHANGE = 6,
            WINDOW_EVENT_TITLEBAR_CHANGE = 7,
        }
        enum VSyncMode {
            VSYNC_DISABLED = 0,
            VSYNC_ENABLED = 1,
            VSYNC_ADAPTIVE = 2,
            VSYNC_MAILBOX = 3,
        }
        enum HandleType {
            DISPLAY_HANDLE = 0,
            WINDOW_HANDLE = 1,
            WINDOW_VIEW = 2,
            OPENGL_CONTEXT = 3,
        }
        enum TTSUtteranceEvent {
            TTS_UTTERANCE_STARTED = 0,
            TTS_UTTERANCE_ENDED = 1,
            TTS_UTTERANCE_CANCELED = 2,
            TTS_UTTERANCE_BOUNDARY = 3,
        }
    }
    class DisplayServer extends Object {
        static readonly SCREEN_WITH_MOUSE_FOCUS = -4
        static readonly SCREEN_WITH_KEYBOARD_FOCUS = -3
        static readonly SCREEN_PRIMARY = -2
        static readonly SCREEN_OF_MAIN_WINDOW = -1
        static readonly MAIN_WINDOW_ID = 0
        static readonly INVALID_WINDOW_ID = -1
        static has_feature(feature: DisplayServer.Feature): boolean
        static get_name(): string
        static global_menu_set_popup_callbacks(menu_root: string, open_callback: any /*CALLABLE*/, close_callback: any /*CALLABLE*/): void
        static global_menu_add_submenu_item(menu_root: string, label: string, submenu: string, index: number /*i64*/): number /*i64*/
        static global_menu_add_item(menu_root: string, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_check_item(menu_root: string, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_icon_item(menu_root: string, icon: Texture2D, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_icon_check_item(menu_root: string, icon: Texture2D, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_radio_check_item(menu_root: string, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_icon_radio_check_item(menu_root: string, icon: Texture2D, label: string, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_multistate_item(menu_root: string, label: string, max_states: number /*i64*/, default_state: number /*i64*/, callback: any /*CALLABLE*/, key_callback: any /*CALLABLE*/, tag: any, accelerator: Key, index: number /*i64*/): number /*i64*/
        static global_menu_add_separator(menu_root: string, index: number /*i64*/): number /*i64*/
        static global_menu_get_item_index_from_text(menu_root: string, text: string): number /*i64*/
        static global_menu_get_item_index_from_tag(menu_root: string, tag: any): number /*i64*/
        static global_menu_is_item_checked(menu_root: string, idx: number /*i64*/): boolean
        static global_menu_is_item_checkable(menu_root: string, idx: number /*i64*/): boolean
        static global_menu_is_item_radio_checkable(menu_root: string, idx: number /*i64*/): boolean
        static global_menu_get_item_callback(menu_root: string, idx: number /*i64*/): any /*CALLABLE*/
        static global_menu_get_item_key_callback(menu_root: string, idx: number /*i64*/): any /*CALLABLE*/
        static global_menu_get_item_tag(menu_root: string, idx: number /*i64*/): any
        static global_menu_get_item_text(menu_root: string, idx: number /*i64*/): string
        static global_menu_get_item_submenu(menu_root: string, idx: number /*i64*/): string
        static global_menu_get_item_accelerator(menu_root: string, idx: number /*i64*/): Key
        static global_menu_is_item_disabled(menu_root: string, idx: number /*i64*/): boolean
        static global_menu_is_item_hidden(menu_root: string, idx: number /*i64*/): boolean
        static global_menu_get_item_tooltip(menu_root: string, idx: number /*i64*/): string
        static global_menu_get_item_state(menu_root: string, idx: number /*i64*/): number /*i64*/
        static global_menu_get_item_max_states(menu_root: string, idx: number /*i64*/): number /*i64*/
        static global_menu_get_item_icon(menu_root: string, idx: number /*i64*/): Texture2D
        static global_menu_get_item_indentation_level(menu_root: string, idx: number /*i64*/): number /*i64*/
        static global_menu_set_item_checked(menu_root: string, idx: number /*i64*/, checked: boolean): void
        static global_menu_set_item_checkable(menu_root: string, idx: number /*i64*/, checkable: boolean): void
        static global_menu_set_item_radio_checkable(menu_root: string, idx: number /*i64*/, checkable: boolean): void
        static global_menu_set_item_callback(menu_root: string, idx: number /*i64*/, callback: any /*CALLABLE*/): void
        static global_menu_set_item_hover_callbacks(menu_root: string, idx: number /*i64*/, callback: any /*CALLABLE*/): void
        static global_menu_set_item_key_callback(menu_root: string, idx: number /*i64*/, key_callback: any /*CALLABLE*/): void
        static global_menu_set_item_tag(menu_root: string, idx: number /*i64*/, tag: any): void
        static global_menu_set_item_text(menu_root: string, idx: number /*i64*/, text: string): void
        static global_menu_set_item_submenu(menu_root: string, idx: number /*i64*/, submenu: string): void
        static global_menu_set_item_accelerator(menu_root: string, idx: number /*i64*/, keycode: Key): void
        static global_menu_set_item_disabled(menu_root: string, idx: number /*i64*/, disabled: boolean): void
        static global_menu_set_item_hidden(menu_root: string, idx: number /*i64*/, hidden: boolean): void
        static global_menu_set_item_tooltip(menu_root: string, idx: number /*i64*/, tooltip: string): void
        static global_menu_set_item_state(menu_root: string, idx: number /*i64*/, state: number /*i64*/): void
        static global_menu_set_item_max_states(menu_root: string, idx: number /*i64*/, max_states: number /*i64*/): void
        static global_menu_set_item_icon(menu_root: string, idx: number /*i64*/, icon: Texture2D): void
        static global_menu_set_item_indentation_level(menu_root: string, idx: number /*i64*/, level: number /*i64*/): void
        static global_menu_get_item_count(menu_root: string): number /*i64*/
        static global_menu_remove_item(menu_root: string, idx: number /*i64*/): void
        static global_menu_clear(menu_root: string): void
        static tts_is_speaking(): boolean
        static tts_is_paused(): boolean
        static tts_get_voices(): Array
        static tts_get_voices_for_language(language: string): PackedStringArray
        static tts_speak(text: string, voice: string, volume: number /*i64*/, pitch: number /*f64*/, rate: number /*f64*/, utterance_id: number /*i64*/, interrupt: boolean): void
        static tts_pause(): void
        static tts_resume(): void
        static tts_stop(): void
        static tts_set_utterance_callback(event: DisplayServer.TTSUtteranceEvent, callable: any /*CALLABLE*/): void
        static _tts_post_utterance_event(event: DisplayServer.TTSUtteranceEvent, id: number /*i64*/, char_pos: number /*i64*/): void
        static is_dark_mode_supported(): boolean
        static is_dark_mode(): boolean
        static get_accent_color(): Color
        static mouse_set_mode(mouse_mode: DisplayServer.MouseMode): void
        static mouse_get_mode(): DisplayServer.MouseMode
        static warp_mouse(position: Vector2i): void
        static mouse_get_position(): Vector2i
        static mouse_get_button_state(): MouseButtonMask
        static clipboard_set(clipboard: string): void
        static clipboard_get(): string
        static clipboard_get_image(): Image
        static clipboard_has(): boolean
        static clipboard_has_image(): boolean
        static clipboard_set_primary(clipboard_primary: string): void
        static clipboard_get_primary(): string
        static get_display_cutouts(): Array
        static get_display_safe_area(): Rect2i
        static get_screen_count(): number /*i64*/
        static get_primary_screen(): number /*i64*/
        static get_keyboard_focus_screen(): number /*i64*/
        static get_screen_from_rect(rect: Rect2): number /*i64*/
        static screen_get_position(screen: number /*i64*/): Vector2i
        static screen_get_size(screen: number /*i64*/): Vector2i
        static screen_get_usable_rect(screen: number /*i64*/): Rect2i
        static screen_get_dpi(screen: number /*i64*/): number /*i64*/
        static screen_get_scale(screen: number /*i64*/): number /*f64*/
        static is_touchscreen_available(): boolean
        static screen_get_max_scale(): number /*f64*/
        static screen_get_refresh_rate(screen: number /*i64*/): number /*f64*/
        static screen_get_pixel(position: Vector2i): Color
        static screen_get_image(screen: number /*i64*/): Image
        static screen_set_orientation(orientation: DisplayServer.ScreenOrientation, screen: number /*i64*/): void
        static screen_get_orientation(screen: number /*i64*/): DisplayServer.ScreenOrientation
        static screen_set_keep_on(enable: boolean): void
        static screen_is_kept_on(): boolean
        static get_window_list(): PackedInt32Array
        static get_window_at_screen_position(position: Vector2i): number /*i64*/
        static window_get_native_handle(handle_type: DisplayServer.HandleType, window_id: number /*i64*/): number /*i64*/
        static window_get_active_popup(): number /*i64*/
        static window_set_popup_safe_rect(window: number /*i64*/, rect: Rect2i): void
        static window_get_popup_safe_rect(window: number /*i64*/): Rect2i
        static window_set_title(title: string, window_id: number /*i64*/): void
        static window_get_title_size(title: string, window_id: number /*i64*/): Vector2i
        static window_set_mouse_passthrough(region: PackedVector2Array, window_id: number /*i64*/): void
        static window_get_current_screen(window_id: number /*i64*/): number /*i64*/
        static window_set_current_screen(screen: number /*i64*/, window_id: number /*i64*/): void
        static window_get_position(window_id: number /*i64*/): Vector2i
        static window_get_position_with_decorations(window_id: number /*i64*/): Vector2i
        static window_set_position(position: Vector2i, window_id: number /*i64*/): void
        static window_get_size(window_id: number /*i64*/): Vector2i
        static window_set_size(size: Vector2i, window_id: number /*i64*/): void
        static window_set_rect_changed_callback(callback: any /*CALLABLE*/, window_id: number /*i64*/): void
        static window_set_window_event_callback(callback: any /*CALLABLE*/, window_id: number /*i64*/): void
        static window_set_input_event_callback(callback: any /*CALLABLE*/, window_id: number /*i64*/): void
        static window_set_input_text_callback(callback: any /*CALLABLE*/, window_id: number /*i64*/): void
        static window_set_drop_files_callback(callback: any /*CALLABLE*/, window_id: number /*i64*/): void
        static window_get_attached_instance_id(window_id: number /*i64*/): number /*i64*/
        static window_get_max_size(window_id: number /*i64*/): Vector2i
        static window_set_max_size(max_size: Vector2i, window_id: number /*i64*/): void
        static window_get_min_size(window_id: number /*i64*/): Vector2i
        static window_set_min_size(min_size: Vector2i, window_id: number /*i64*/): void
        static window_get_size_with_decorations(window_id: number /*i64*/): Vector2i
        static window_get_mode(window_id: number /*i64*/): DisplayServer.WindowMode
        static window_set_mode(mode: DisplayServer.WindowMode, window_id: number /*i64*/): void
        static window_set_flag(flag: DisplayServer.WindowFlags, enabled: boolean, window_id: number /*i64*/): void
        static window_get_flag(flag: DisplayServer.WindowFlags, window_id: number /*i64*/): boolean
        static window_set_window_buttons_offset(offset: Vector2i, window_id: number /*i64*/): void
        static window_get_safe_title_margins(window_id: number /*i64*/): Vector3i
        static window_request_attention(window_id: number /*i64*/): void
        static window_move_to_foreground(window_id: number /*i64*/): void
        static window_is_focused(window_id: number /*i64*/): boolean
        static window_can_draw(window_id: number /*i64*/): boolean
        static window_set_transient(window_id: number /*i64*/, parent_window_id: number /*i64*/): void
        static window_set_exclusive(window_id: number /*i64*/, exclusive: boolean): void
        static window_set_ime_active(active: boolean, window_id: number /*i64*/): void
        static window_set_ime_position(position: Vector2i, window_id: number /*i64*/): void
        static window_set_vsync_mode(vsync_mode: DisplayServer.VSyncMode, window_id: number /*i64*/): void
        static window_get_vsync_mode(window_id: number /*i64*/): DisplayServer.VSyncMode
        static window_is_maximize_allowed(window_id: number /*i64*/): boolean
        static window_maximize_on_title_dbl_click(): boolean
        static window_minimize_on_title_dbl_click(): boolean
        static ime_get_selection(): Vector2i
        static ime_get_text(): string
        static virtual_keyboard_show(existing_text: string, position: Rect2, type: DisplayServer.VirtualKeyboardType, max_length: number /*i64*/, cursor_start: number /*i64*/, cursor_end: number /*i64*/): void
        static virtual_keyboard_hide(): void
        static virtual_keyboard_get_height(): number /*i64*/
        static cursor_set_shape(shape: DisplayServer.CursorShape): void
        static cursor_get_shape(): DisplayServer.CursorShape
        static cursor_set_custom_image(cursor: Resource, shape: DisplayServer.CursorShape, hotspot: Vector2): void
        static get_swap_cancel_ok(): boolean
        static enable_for_stealing_focus(process_id: number /*i64*/): void
        static dialog_show(title: string, description: string, buttons: PackedStringArray, callback: any /*CALLABLE*/): GodotError
        static dialog_input_text(title: string, description: string, existing_text: string, callback: any /*CALLABLE*/): GodotError
        static file_dialog_show(title: string, current_directory: string, filename: string, show_hidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray, callback: any /*CALLABLE*/): GodotError
        static keyboard_get_layout_count(): number /*i64*/
        static keyboard_get_current_layout(): number /*i64*/
        static keyboard_set_current_layout(index: number /*i64*/): void
        static keyboard_get_layout_language(index: number /*i64*/): string
        static keyboard_get_layout_name(index: number /*i64*/): string
        static keyboard_get_keycode_from_physical(keycode: Key): Key
        static keyboard_get_label_from_physical(keycode: Key): Key
        static process_events(): void
        static force_process_and_drop_events(): void
        static set_native_icon(filename: string): void
        static set_icon(image: Image): void
        static tablet_get_driver_count(): number /*i64*/
        static tablet_get_driver_name(idx: number /*i64*/): string
        static tablet_get_current_driver(): string
        static tablet_set_current_driver(name: string): void
    }
    namespace RenderingServer {
        enum TextureLayeredType {
            TEXTURE_LAYERED_2D_ARRAY = 0,
            TEXTURE_LAYERED_CUBEMAP = 1,
            TEXTURE_LAYERED_CUBEMAP_ARRAY = 2,
        }
        enum CubeMapLayer {
            CUBEMAP_LAYER_LEFT = 0,
            CUBEMAP_LAYER_RIGHT = 1,
            CUBEMAP_LAYER_BOTTOM = 2,
            CUBEMAP_LAYER_TOP = 3,
            CUBEMAP_LAYER_FRONT = 4,
            CUBEMAP_LAYER_BACK = 5,
        }
        enum ShaderMode {
            SHADER_SPATIAL = 0,
            SHADER_CANVAS_ITEM = 1,
            SHADER_PARTICLES = 2,
            SHADER_SKY = 3,
            SHADER_FOG = 4,
            SHADER_MAX = 5,
        }
        enum ArrayType {
            ARRAY_VERTEX = 0,
            ARRAY_NORMAL = 1,
            ARRAY_TANGENT = 2,
            ARRAY_COLOR = 3,
            ARRAY_TEX_UV = 4,
            ARRAY_TEX_UV2 = 5,
            ARRAY_CUSTOM0 = 6,
            ARRAY_CUSTOM1 = 7,
            ARRAY_CUSTOM2 = 8,
            ARRAY_CUSTOM3 = 9,
            ARRAY_BONES = 10,
            ARRAY_WEIGHTS = 11,
            ARRAY_INDEX = 12,
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            ARRAY_CUSTOM_RG_HALF = 2,
            ARRAY_CUSTOM_RGBA_HALF = 3,
            ARRAY_CUSTOM_R_FLOAT = 4,
            ARRAY_CUSTOM_RG_FLOAT = 5,
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            ARRAY_FORMAT_VERTEX = 1,
            ARRAY_FORMAT_NORMAL = 2,
            ARRAY_FORMAT_TANGENT = 4,
            ARRAY_FORMAT_COLOR = 8,
            ARRAY_FORMAT_TEX_UV = 16,
            ARRAY_FORMAT_TEX_UV2 = 32,
            ARRAY_FORMAT_CUSTOM0 = 64,
            ARRAY_FORMAT_CUSTOM1 = 128,
            ARRAY_FORMAT_CUSTOM2 = 256,
            ARRAY_FORMAT_CUSTOM3 = 512,
            ARRAY_FORMAT_BONES = 1024,
            ARRAY_FORMAT_WEIGHTS = 2048,
            ARRAY_FORMAT_INDEX = 4096,
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
            ARRAY_FLAG_FORMAT_VERSION_BASE = 35,
            ARRAY_FLAG_FORMAT_VERSION_SHIFT = 35,
            ARRAY_FLAG_FORMAT_VERSION_1 = 0,
            ARRAY_FLAG_FORMAT_VERSION_2 = 34359738368,
            ARRAY_FLAG_FORMAT_CURRENT_VERSION = 34359738368,
            ARRAY_FLAG_FORMAT_VERSION_MASK = 255,
        }
        enum PrimitiveType {
            PRIMITIVE_POINTS = 0,
            PRIMITIVE_LINES = 1,
            PRIMITIVE_LINE_STRIP = 2,
            PRIMITIVE_TRIANGLES = 3,
            PRIMITIVE_TRIANGLE_STRIP = 4,
            PRIMITIVE_MAX = 5,
        }
        enum BlendShapeMode {
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
        enum MultimeshTransformFormat {
            MULTIMESH_TRANSFORM_2D = 0,
            MULTIMESH_TRANSFORM_3D = 1,
        }
        enum LightProjectorFilter {
            LIGHT_PROJECTOR_FILTER_NEAREST = 0,
            LIGHT_PROJECTOR_FILTER_LINEAR = 1,
            LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS = 2,
            LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS = 3,
            LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
            LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5,
        }
        enum LightType {
            LIGHT_DIRECTIONAL = 0,
            LIGHT_OMNI = 1,
            LIGHT_SPOT = 2,
        }
        enum LightParam {
            LIGHT_PARAM_ENERGY = 0,
            LIGHT_PARAM_INDIRECT_ENERGY = 1,
            LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            LIGHT_PARAM_SPECULAR = 3,
            LIGHT_PARAM_RANGE = 4,
            LIGHT_PARAM_SIZE = 5,
            LIGHT_PARAM_ATTENUATION = 6,
            LIGHT_PARAM_SPOT_ANGLE = 7,
            LIGHT_PARAM_SPOT_ATTENUATION = 8,
            LIGHT_PARAM_SHADOW_MAX_DISTANCE = 9,
            LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            LIGHT_PARAM_SHADOW_FADE_START = 13,
            LIGHT_PARAM_SHADOW_NORMAL_BIAS = 14,
            LIGHT_PARAM_SHADOW_BIAS = 15,
            LIGHT_PARAM_SHADOW_PANCAKE_SIZE = 16,
            LIGHT_PARAM_SHADOW_OPACITY = 17,
            LIGHT_PARAM_SHADOW_BLUR = 18,
            LIGHT_PARAM_TRANSMITTANCE_BIAS = 19,
            LIGHT_PARAM_INTENSITY = 20,
            LIGHT_PARAM_MAX = 21,
        }
        enum LightBakeMode {
            LIGHT_BAKE_DISABLED = 0,
            LIGHT_BAKE_STATIC = 1,
            LIGHT_BAKE_DYNAMIC = 2,
        }
        enum LightOmniShadowMode {
            LIGHT_OMNI_SHADOW_DUAL_PARABOLOID = 0,
            LIGHT_OMNI_SHADOW_CUBE = 1,
        }
        enum LightDirectionalShadowMode {
            LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL = 0,
            LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS = 1,
            LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS = 2,
        }
        enum LightDirectionalSkyMode {
            LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY = 0,
            LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY = 1,
            LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY = 2,
        }
        enum ShadowQuality {
            SHADOW_QUALITY_HARD = 0,
            SHADOW_QUALITY_SOFT_VERY_LOW = 1,
            SHADOW_QUALITY_SOFT_LOW = 2,
            SHADOW_QUALITY_SOFT_MEDIUM = 3,
            SHADOW_QUALITY_SOFT_HIGH = 4,
            SHADOW_QUALITY_SOFT_ULTRA = 5,
            SHADOW_QUALITY_MAX = 6,
        }
        enum ReflectionProbeUpdateMode {
            REFLECTION_PROBE_UPDATE_ONCE = 0,
            REFLECTION_PROBE_UPDATE_ALWAYS = 1,
        }
        enum ReflectionProbeAmbientMode {
            REFLECTION_PROBE_AMBIENT_DISABLED = 0,
            REFLECTION_PROBE_AMBIENT_ENVIRONMENT = 1,
            REFLECTION_PROBE_AMBIENT_COLOR = 2,
        }
        enum DecalTexture {
            DECAL_TEXTURE_ALBEDO = 0,
            DECAL_TEXTURE_NORMAL = 1,
            DECAL_TEXTURE_ORM = 2,
            DECAL_TEXTURE_EMISSION = 3,
            DECAL_TEXTURE_MAX = 4,
        }
        enum DecalFilter {
            DECAL_FILTER_NEAREST = 0,
            DECAL_FILTER_LINEAR = 1,
            DECAL_FILTER_NEAREST_MIPMAPS = 2,
            DECAL_FILTER_LINEAR_MIPMAPS = 3,
            DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
            DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5,
        }
        enum VoxelGIQuality {
            VOXEL_GI_QUALITY_LOW = 0,
            VOXEL_GI_QUALITY_HIGH = 1,
        }
        enum ParticlesMode {
            PARTICLES_MODE_2D = 0,
            PARTICLES_MODE_3D = 1,
        }
        enum ParticlesTransformAlign {
            PARTICLES_TRANSFORM_ALIGN_DISABLED = 0,
            PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD = 1,
            PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
            PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3,
        }
        enum ParticlesDrawOrder {
            PARTICLES_DRAW_ORDER_INDEX = 0,
            PARTICLES_DRAW_ORDER_LIFETIME = 1,
            PARTICLES_DRAW_ORDER_REVERSE_LIFETIME = 2,
            PARTICLES_DRAW_ORDER_VIEW_DEPTH = 3,
        }
        enum ParticlesCollisionType {
            PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT = 0,
            PARTICLES_COLLISION_TYPE_BOX_ATTRACT = 1,
            PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT = 2,
            PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE = 3,
            PARTICLES_COLLISION_TYPE_BOX_COLLIDE = 4,
            PARTICLES_COLLISION_TYPE_SDF_COLLIDE = 5,
            PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE = 6,
        }
        enum ParticlesCollisionHeightfieldResolution {
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256 = 0,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512 = 1,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024 = 2,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048 = 3,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096 = 4,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192 = 5,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX = 6,
        }
        enum FogVolumeShape {
            FOG_VOLUME_SHAPE_ELLIPSOID = 0,
            FOG_VOLUME_SHAPE_CONE = 1,
            FOG_VOLUME_SHAPE_CYLINDER = 2,
            FOG_VOLUME_SHAPE_BOX = 3,
            FOG_VOLUME_SHAPE_WORLD = 4,
            FOG_VOLUME_SHAPE_MAX = 5,
        }
        enum ViewportScaling3DMode {
            VIEWPORT_SCALING_3D_MODE_BILINEAR = 0,
            VIEWPORT_SCALING_3D_MODE_FSR = 1,
            VIEWPORT_SCALING_3D_MODE_FSR2 = 2,
            VIEWPORT_SCALING_3D_MODE_MAX = 3,
        }
        enum ViewportUpdateMode {
            VIEWPORT_UPDATE_DISABLED = 0,
            VIEWPORT_UPDATE_ONCE = 1,
            VIEWPORT_UPDATE_WHEN_VISIBLE = 2,
            VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE = 3,
            VIEWPORT_UPDATE_ALWAYS = 4,
        }
        enum ViewportClearMode {
            VIEWPORT_CLEAR_ALWAYS = 0,
            VIEWPORT_CLEAR_NEVER = 1,
            VIEWPORT_CLEAR_ONLY_NEXT_FRAME = 2,
        }
        enum ViewportEnvironmentMode {
            VIEWPORT_ENVIRONMENT_DISABLED = 0,
            VIEWPORT_ENVIRONMENT_ENABLED = 1,
            VIEWPORT_ENVIRONMENT_INHERIT = 2,
            VIEWPORT_ENVIRONMENT_MAX = 3,
        }
        enum ViewportSDFOversize {
            VIEWPORT_SDF_OVERSIZE_100_PERCENT = 0,
            VIEWPORT_SDF_OVERSIZE_120_PERCENT = 1,
            VIEWPORT_SDF_OVERSIZE_150_PERCENT = 2,
            VIEWPORT_SDF_OVERSIZE_200_PERCENT = 3,
            VIEWPORT_SDF_OVERSIZE_MAX = 4,
        }
        enum ViewportSDFScale {
            VIEWPORT_SDF_SCALE_100_PERCENT = 0,
            VIEWPORT_SDF_SCALE_50_PERCENT = 1,
            VIEWPORT_SDF_SCALE_25_PERCENT = 2,
            VIEWPORT_SDF_SCALE_MAX = 3,
        }
        enum ViewportMSAA {
            VIEWPORT_MSAA_DISABLED = 0,
            VIEWPORT_MSAA_2X = 1,
            VIEWPORT_MSAA_4X = 2,
            VIEWPORT_MSAA_8X = 3,
            VIEWPORT_MSAA_MAX = 4,
        }
        enum ViewportScreenSpaceAA {
            VIEWPORT_SCREEN_SPACE_AA_DISABLED = 0,
            VIEWPORT_SCREEN_SPACE_AA_FXAA = 1,
            VIEWPORT_SCREEN_SPACE_AA_MAX = 2,
        }
        enum ViewportOcclusionCullingBuildQuality {
            VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW = 0,
            VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM = 1,
            VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH = 2,
        }
        enum ViewportRenderInfo {
            VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME = 0,
            VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            VIEWPORT_RENDER_INFO_MAX = 3,
        }
        enum ViewportRenderInfoType {
            VIEWPORT_RENDER_INFO_TYPE_VISIBLE = 0,
            VIEWPORT_RENDER_INFO_TYPE_SHADOW = 1,
            VIEWPORT_RENDER_INFO_TYPE_MAX = 2,
        }
        enum ViewportDebugDraw {
            VIEWPORT_DEBUG_DRAW_DISABLED = 0,
            VIEWPORT_DEBUG_DRAW_UNSHADED = 1,
            VIEWPORT_DEBUG_DRAW_LIGHTING = 2,
            VIEWPORT_DEBUG_DRAW_OVERDRAW = 3,
            VIEWPORT_DEBUG_DRAW_WIREFRAME = 4,
            VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER = 5,
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS = 9,
            VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE = 11,
            VIEWPORT_DEBUG_DRAW_SSAO = 12,
            VIEWPORT_DEBUG_DRAW_SSIL = 13,
            VIEWPORT_DEBUG_DRAW_PSSM_SPLITS = 14,
            VIEWPORT_DEBUG_DRAW_DECAL_ATLAS = 15,
            VIEWPORT_DEBUG_DRAW_SDFGI = 16,
            VIEWPORT_DEBUG_DRAW_SDFGI_PROBES = 17,
            VIEWPORT_DEBUG_DRAW_GI_BUFFER = 18,
            VIEWPORT_DEBUG_DRAW_DISABLE_LOD = 19,
            VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS = 22,
            VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            VIEWPORT_DEBUG_DRAW_OCCLUDERS = 24,
            VIEWPORT_DEBUG_DRAW_MOTION_VECTORS = 25,
            VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum ViewportVRSMode {
            VIEWPORT_VRS_DISABLED = 0,
            VIEWPORT_VRS_TEXTURE = 1,
            VIEWPORT_VRS_XR = 2,
            VIEWPORT_VRS_MAX = 3,
        }
        enum SkyMode {
            SKY_MODE_AUTOMATIC = 0,
            SKY_MODE_QUALITY = 1,
            SKY_MODE_INCREMENTAL = 2,
            SKY_MODE_REALTIME = 3,
        }
        enum EnvironmentBG {
            ENV_BG_CLEAR_COLOR = 0,
            ENV_BG_COLOR = 1,
            ENV_BG_SKY = 2,
            ENV_BG_CANVAS = 3,
            ENV_BG_KEEP = 4,
            ENV_BG_CAMERA_FEED = 5,
            ENV_BG_MAX = 6,
        }
        enum EnvironmentAmbientSource {
            ENV_AMBIENT_SOURCE_BG = 0,
            ENV_AMBIENT_SOURCE_DISABLED = 1,
            ENV_AMBIENT_SOURCE_COLOR = 2,
            ENV_AMBIENT_SOURCE_SKY = 3,
        }
        enum EnvironmentReflectionSource {
            ENV_REFLECTION_SOURCE_BG = 0,
            ENV_REFLECTION_SOURCE_DISABLED = 1,
            ENV_REFLECTION_SOURCE_SKY = 2,
        }
        enum EnvironmentGlowBlendMode {
            ENV_GLOW_BLEND_MODE_ADDITIVE = 0,
            ENV_GLOW_BLEND_MODE_SCREEN = 1,
            ENV_GLOW_BLEND_MODE_SOFTLIGHT = 2,
            ENV_GLOW_BLEND_MODE_REPLACE = 3,
            ENV_GLOW_BLEND_MODE_MIX = 4,
        }
        enum EnvironmentToneMapper {
            ENV_TONE_MAPPER_LINEAR = 0,
            ENV_TONE_MAPPER_REINHARD = 1,
            ENV_TONE_MAPPER_FILMIC = 2,
            ENV_TONE_MAPPER_ACES = 3,
        }
        enum EnvironmentSSRRoughnessQuality {
            ENV_SSR_ROUGHNESS_QUALITY_DISABLED = 0,
            ENV_SSR_ROUGHNESS_QUALITY_LOW = 1,
            ENV_SSR_ROUGHNESS_QUALITY_MEDIUM = 2,
            ENV_SSR_ROUGHNESS_QUALITY_HIGH = 3,
        }
        enum EnvironmentSSAOQuality {
            ENV_SSAO_QUALITY_VERY_LOW = 0,
            ENV_SSAO_QUALITY_LOW = 1,
            ENV_SSAO_QUALITY_MEDIUM = 2,
            ENV_SSAO_QUALITY_HIGH = 3,
            ENV_SSAO_QUALITY_ULTRA = 4,
        }
        enum EnvironmentSSILQuality {
            ENV_SSIL_QUALITY_VERY_LOW = 0,
            ENV_SSIL_QUALITY_LOW = 1,
            ENV_SSIL_QUALITY_MEDIUM = 2,
            ENV_SSIL_QUALITY_HIGH = 3,
            ENV_SSIL_QUALITY_ULTRA = 4,
        }
        enum EnvironmentSDFGIYScale {
            ENV_SDFGI_Y_SCALE_50_PERCENT = 0,
            ENV_SDFGI_Y_SCALE_75_PERCENT = 1,
            ENV_SDFGI_Y_SCALE_100_PERCENT = 2,
        }
        enum EnvironmentSDFGIRayCount {
            ENV_SDFGI_RAY_COUNT_4 = 0,
            ENV_SDFGI_RAY_COUNT_8 = 1,
            ENV_SDFGI_RAY_COUNT_16 = 2,
            ENV_SDFGI_RAY_COUNT_32 = 3,
            ENV_SDFGI_RAY_COUNT_64 = 4,
            ENV_SDFGI_RAY_COUNT_96 = 5,
            ENV_SDFGI_RAY_COUNT_128 = 6,
            ENV_SDFGI_RAY_COUNT_MAX = 7,
        }
        enum EnvironmentSDFGIFramesToConverge {
            ENV_SDFGI_CONVERGE_IN_5_FRAMES = 0,
            ENV_SDFGI_CONVERGE_IN_10_FRAMES = 1,
            ENV_SDFGI_CONVERGE_IN_15_FRAMES = 2,
            ENV_SDFGI_CONVERGE_IN_20_FRAMES = 3,
            ENV_SDFGI_CONVERGE_IN_25_FRAMES = 4,
            ENV_SDFGI_CONVERGE_IN_30_FRAMES = 5,
            ENV_SDFGI_CONVERGE_MAX = 6,
        }
        enum EnvironmentSDFGIFramesToUpdateLight {
            ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME = 0,
            ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES = 1,
            ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES = 2,
            ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES = 3,
            ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES = 4,
            ENV_SDFGI_UPDATE_LIGHT_MAX = 5,
        }
        enum SubSurfaceScatteringQuality {
            SUB_SURFACE_SCATTERING_QUALITY_DISABLED = 0,
            SUB_SURFACE_SCATTERING_QUALITY_LOW = 1,
            SUB_SURFACE_SCATTERING_QUALITY_MEDIUM = 2,
            SUB_SURFACE_SCATTERING_QUALITY_HIGH = 3,
        }
        enum DOFBokehShape {
            DOF_BOKEH_BOX = 0,
            DOF_BOKEH_HEXAGON = 1,
            DOF_BOKEH_CIRCLE = 2,
        }
        enum DOFBlurQuality {
            DOF_BLUR_QUALITY_VERY_LOW = 0,
            DOF_BLUR_QUALITY_LOW = 1,
            DOF_BLUR_QUALITY_MEDIUM = 2,
            DOF_BLUR_QUALITY_HIGH = 3,
        }
        enum InstanceType {
            INSTANCE_NONE = 0,
            INSTANCE_MESH = 1,
            INSTANCE_MULTIMESH = 2,
            INSTANCE_PARTICLES = 3,
            INSTANCE_PARTICLES_COLLISION = 4,
            INSTANCE_LIGHT = 5,
            INSTANCE_REFLECTION_PROBE = 6,
            INSTANCE_DECAL = 7,
            INSTANCE_VOXEL_GI = 8,
            INSTANCE_LIGHTMAP = 9,
            INSTANCE_OCCLUDER = 10,
            INSTANCE_VISIBLITY_NOTIFIER = 11,
            INSTANCE_FOG_VOLUME = 12,
            INSTANCE_MAX = 13,
            INSTANCE_GEOMETRY_MASK = 14,
        }
        enum InstanceFlags {
            INSTANCE_FLAG_USE_BAKED_LIGHT = 0,
            INSTANCE_FLAG_USE_DYNAMIC_GI = 1,
            INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE = 2,
            INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING = 3,
            INSTANCE_FLAG_MAX = 4,
        }
        enum ShadowCastingSetting {
            SHADOW_CASTING_SETTING_OFF = 0,
            SHADOW_CASTING_SETTING_ON = 1,
            SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
            SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3,
        }
        enum VisibilityRangeFadeMode {
            VISIBILITY_RANGE_FADE_DISABLED = 0,
            VISIBILITY_RANGE_FADE_SELF = 1,
            VISIBILITY_RANGE_FADE_DEPENDENCIES = 2,
        }
        enum BakeChannels {
            BAKE_CHANNEL_ALBEDO_ALPHA = 0,
            BAKE_CHANNEL_NORMAL = 1,
            BAKE_CHANNEL_ORM = 2,
            BAKE_CHANNEL_EMISSION = 3,
        }
        enum CanvasTextureChannel {
            CANVAS_TEXTURE_CHANNEL_DIFFUSE = 0,
            CANVAS_TEXTURE_CHANNEL_NORMAL = 1,
            CANVAS_TEXTURE_CHANNEL_SPECULAR = 2,
        }
        enum NinePatchAxisMode {
            NINE_PATCH_STRETCH = 0,
            NINE_PATCH_TILE = 1,
            NINE_PATCH_TILE_FIT = 2,
        }
        enum CanvasItemTextureFilter {
            CANVAS_ITEM_TEXTURE_FILTER_DEFAULT = 0,
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 1,
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 2,
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
            CANVAS_ITEM_TEXTURE_FILTER_MAX = 7,
        }
        enum CanvasItemTextureRepeat {
            CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT = 0,
            CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 1,
            CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 2,
            CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 3,
            CANVAS_ITEM_TEXTURE_REPEAT_MAX = 4,
        }
        enum CanvasGroupMode {
            CANVAS_GROUP_MODE_DISABLED = 0,
            CANVAS_GROUP_MODE_CLIP_ONLY = 1,
            CANVAS_GROUP_MODE_CLIP_AND_DRAW = 2,
            CANVAS_GROUP_MODE_TRANSPARENT = 3,
        }
        enum CanvasLightMode {
            CANVAS_LIGHT_MODE_POINT = 0,
            CANVAS_LIGHT_MODE_DIRECTIONAL = 1,
        }
        enum CanvasLightBlendMode {
            CANVAS_LIGHT_BLEND_MODE_ADD = 0,
            CANVAS_LIGHT_BLEND_MODE_SUB = 1,
            CANVAS_LIGHT_BLEND_MODE_MIX = 2,
        }
        enum CanvasLightShadowFilter {
            CANVAS_LIGHT_FILTER_NONE = 0,
            CANVAS_LIGHT_FILTER_PCF5 = 1,
            CANVAS_LIGHT_FILTER_PCF13 = 2,
            CANVAS_LIGHT_FILTER_MAX = 3,
        }
        enum CanvasOccluderPolygonCullMode {
            CANVAS_OCCLUDER_POLYGON_CULL_DISABLED = 0,
            CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE = 1,
            CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE = 2,
        }
        enum GlobalShaderParameterType {
            GLOBAL_VAR_TYPE_BOOL = 0,
            GLOBAL_VAR_TYPE_BVEC2 = 1,
            GLOBAL_VAR_TYPE_BVEC3 = 2,
            GLOBAL_VAR_TYPE_BVEC4 = 3,
            GLOBAL_VAR_TYPE_INT = 4,
            GLOBAL_VAR_TYPE_IVEC2 = 5,
            GLOBAL_VAR_TYPE_IVEC3 = 6,
            GLOBAL_VAR_TYPE_IVEC4 = 7,
            GLOBAL_VAR_TYPE_RECT2I = 8,
            GLOBAL_VAR_TYPE_UINT = 9,
            GLOBAL_VAR_TYPE_UVEC2 = 10,
            GLOBAL_VAR_TYPE_UVEC3 = 11,
            GLOBAL_VAR_TYPE_UVEC4 = 12,
            GLOBAL_VAR_TYPE_FLOAT = 13,
            GLOBAL_VAR_TYPE_VEC2 = 14,
            GLOBAL_VAR_TYPE_VEC3 = 15,
            GLOBAL_VAR_TYPE_VEC4 = 16,
            GLOBAL_VAR_TYPE_COLOR = 17,
            GLOBAL_VAR_TYPE_RECT2 = 18,
            GLOBAL_VAR_TYPE_MAT2 = 19,
            GLOBAL_VAR_TYPE_MAT3 = 20,
            GLOBAL_VAR_TYPE_MAT4 = 21,
            GLOBAL_VAR_TYPE_TRANSFORM_2D = 22,
            GLOBAL_VAR_TYPE_TRANSFORM = 23,
            GLOBAL_VAR_TYPE_SAMPLER2D = 24,
            GLOBAL_VAR_TYPE_SAMPLER2DARRAY = 25,
            GLOBAL_VAR_TYPE_SAMPLER3D = 26,
            GLOBAL_VAR_TYPE_SAMPLERCUBE = 27,
            GLOBAL_VAR_TYPE_MAX = 28,
        }
        enum RenderingInfo {
            RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME = 0,
            RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME = 1,
            RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME = 2,
            RENDERING_INFO_TEXTURE_MEM_USED = 3,
            RENDERING_INFO_BUFFER_MEM_USED = 4,
            RENDERING_INFO_VIDEO_MEM_USED = 5,
        }
        enum Features {
            FEATURE_SHADERS = 0,
            FEATURE_MULTITHREADED = 1,
        }
    }
    class RenderingServer extends Object {
        static readonly NO_INDEX_ARRAY = -1
        static readonly ARRAY_WEIGHTS_SIZE = 4
        static readonly CANVAS_ITEM_Z_MIN = -4096
        static readonly CANVAS_ITEM_Z_MAX = 4096
        static readonly MAX_GLOW_LEVELS = 7
        static readonly MAX_CURSORS = 8
        static readonly MAX_2D_DIRECTIONAL_LIGHTS = 8
        static readonly MATERIAL_RENDER_PRIORITY_MIN = -128
        static readonly MATERIAL_RENDER_PRIORITY_MAX = 127
        static readonly ARRAY_CUSTOM_COUNT = 4
        static readonly PARTICLES_EMIT_FLAG_POSITION = 1
        static readonly PARTICLES_EMIT_FLAG_ROTATION_SCALE = 2
        static readonly PARTICLES_EMIT_FLAG_VELOCITY = 4
        static readonly PARTICLES_EMIT_FLAG_COLOR = 8
        static readonly PARTICLES_EMIT_FLAG_CUSTOM = 16
        static texture_2d_create(image: Image): RID
        static texture_2d_layered_create(layers: Array, layered_type: RenderingServer.TextureLayeredType): RID
        static texture_3d_create(format: Image.Format, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, mipmaps: boolean, data: Array): RID
        static texture_proxy_create(base: RID): RID
        static texture_2d_update(texture: RID, image: Image, layer: number /*i64*/): void
        static texture_3d_update(texture: RID, data: Array): void
        static texture_proxy_update(texture: RID, proxy_to: RID): void
        static texture_2d_placeholder_create(): RID
        static texture_2d_layered_placeholder_create(layered_type: RenderingServer.TextureLayeredType): RID
        static texture_3d_placeholder_create(): RID
        static texture_2d_get(texture: RID): Image
        static texture_2d_layer_get(texture: RID, layer: number /*i64*/): Image
        static texture_3d_get(texture: RID): Array
        static texture_replace(texture: RID, by_texture: RID): void
        static texture_set_size_override(texture: RID, width: number /*i64*/, height: number /*i64*/): void
        static texture_set_path(texture: RID, path: string): void
        static texture_get_path(texture: RID): string
        static texture_get_format(texture: RID): Image.Format
        static texture_set_force_redraw_if_visible(texture: RID, enable: boolean): void
        static texture_rd_create(rd_texture: RID, layer_type: RenderingServer.TextureLayeredType): RID
        static texture_get_rd_texture(texture: RID, srgb: boolean): RID
        static texture_get_native_handle(texture: RID, srgb: boolean): number /*i64*/
        static shader_create(): RID
        static shader_set_code(shader: RID, code: string): void
        static shader_set_path_hint(shader: RID, path: string): void
        static shader_get_code(shader: RID): string
        static get_shader_parameter_list(shader: RID): Array
        static shader_get_parameter_default(shader: RID, name: StringName): any
        static shader_set_default_texture_parameter(shader: RID, name: StringName, texture: RID, index: number /*i64*/): void
        static shader_get_default_texture_parameter(shader: RID, name: StringName, index: number /*i64*/): RID
        static material_create(): RID
        static material_set_shader(shader_material: RID, shader: RID): void
        static material_set_param(material: RID, parameter: StringName, value: any): void
        static material_get_param(material: RID, parameter: StringName): any
        static material_set_render_priority(material: RID, priority: number /*i64*/): void
        static material_set_next_pass(material: RID, next_material: RID): void
        static mesh_create_from_surfaces(surfaces: Array, blend_shape_count: number /*i64*/): RID
        static mesh_create(): RID
        static mesh_surface_get_format_offset(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/, array_index: number /*i64*/): number /*i64*/
        static mesh_surface_get_format_vertex_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        static mesh_surface_get_format_normal_tangent_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        static mesh_surface_get_format_attribute_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        static mesh_surface_get_format_skin_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        static mesh_add_surface(mesh: RID, surface: Dictionary): void
        static mesh_add_surface_from_arrays(mesh: RID, primitive: RenderingServer.PrimitiveType, arrays: Array, blend_shapes: Array, lods: Dictionary, compress_format: RenderingServer.ArrayFormat): void
        static mesh_get_blend_shape_count(mesh: RID): number /*i64*/
        static mesh_set_blend_shape_mode(mesh: RID, mode: RenderingServer.BlendShapeMode): void
        static mesh_get_blend_shape_mode(mesh: RID): RenderingServer.BlendShapeMode
        static mesh_surface_set_material(mesh: RID, surface: number /*i64*/, material: RID): void
        static mesh_surface_get_material(mesh: RID, surface: number /*i64*/): RID
        static mesh_get_surface(mesh: RID, surface: number /*i64*/): Dictionary
        static mesh_surface_get_arrays(mesh: RID, surface: number /*i64*/): Array
        static mesh_surface_get_blend_shape_arrays(mesh: RID, surface: number /*i64*/): Array
        static mesh_get_surface_count(mesh: RID): number /*i64*/
        static mesh_set_custom_aabb(mesh: RID, aabb: AABB): void
        static mesh_get_custom_aabb(mesh: RID): AABB
        static mesh_clear(mesh: RID): void
        static mesh_surface_update_vertex_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_surface_update_attribute_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_surface_update_skin_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_set_shadow_mesh(mesh: RID, shadow_mesh: RID): void
        static multimesh_create(): RID
        static multimesh_allocate_data(multimesh: RID, instances: number /*i64*/, transform_format: RenderingServer.MultimeshTransformFormat, color_format: boolean, custom_data_format: boolean): void
        static multimesh_get_instance_count(multimesh: RID): number /*i64*/
        static multimesh_set_mesh(multimesh: RID, mesh: RID): void
        static multimesh_instance_set_transform(multimesh: RID, index: number /*i64*/, transform: Transform3D): void
        static multimesh_instance_set_transform_2d(multimesh: RID, index: number /*i64*/, transform: Transform2D): void
        static multimesh_instance_set_color(multimesh: RID, index: number /*i64*/, color: Color): void
        static multimesh_instance_set_custom_data(multimesh: RID, index: number /*i64*/, custom_data: Color): void
        static multimesh_get_mesh(multimesh: RID): RID
        static multimesh_get_aabb(multimesh: RID): AABB
        static multimesh_instance_get_transform(multimesh: RID, index: number /*i64*/): Transform3D
        static multimesh_instance_get_transform_2d(multimesh: RID, index: number /*i64*/): Transform2D
        static multimesh_instance_get_color(multimesh: RID, index: number /*i64*/): Color
        static multimesh_instance_get_custom_data(multimesh: RID, index: number /*i64*/): Color
        static multimesh_set_visible_instances(multimesh: RID, visible: number /*i64*/): void
        static multimesh_get_visible_instances(multimesh: RID): number /*i64*/
        static multimesh_set_buffer(multimesh: RID, buffer: PackedFloat32Array): void
        static multimesh_get_buffer(multimesh: RID): PackedFloat32Array
        static skeleton_create(): RID
        static skeleton_allocate_data(skeleton: RID, bones: number /*i64*/, is_2d_skeleton: boolean): void
        static skeleton_get_bone_count(skeleton: RID): number /*i64*/
        static skeleton_bone_set_transform(skeleton: RID, bone: number /*i64*/, transform: Transform3D): void
        static skeleton_bone_get_transform(skeleton: RID, bone: number /*i64*/): Transform3D
        static skeleton_bone_set_transform_2d(skeleton: RID, bone: number /*i64*/, transform: Transform2D): void
        static skeleton_bone_get_transform_2d(skeleton: RID, bone: number /*i64*/): Transform2D
        static skeleton_set_base_transform_2d(skeleton: RID, base_transform: Transform2D): void
        static directional_light_create(): RID
        static omni_light_create(): RID
        static spot_light_create(): RID
        static light_set_color(light: RID, color: Color): void
        static light_set_param(light: RID, param: RenderingServer.LightParam, value: number /*f64*/): void
        static light_set_shadow(light: RID, enabled: boolean): void
        static light_set_projector(light: RID, texture: RID): void
        static light_set_negative(light: RID, enable: boolean): void
        static light_set_cull_mask(light: RID, mask: number /*i64*/): void
        static light_set_distance_fade(decal: RID, enabled: boolean, begin: number /*f64*/, shadow: number /*f64*/, length: number /*f64*/): void
        static light_set_reverse_cull_face_mode(light: RID, enabled: boolean): void
        static light_set_bake_mode(light: RID, bake_mode: RenderingServer.LightBakeMode): void
        static light_set_max_sdfgi_cascade(light: RID, cascade: number /*i64*/): void
        static light_omni_set_shadow_mode(light: RID, mode: RenderingServer.LightOmniShadowMode): void
        static light_directional_set_shadow_mode(light: RID, mode: RenderingServer.LightDirectionalShadowMode): void
        static light_directional_set_blend_splits(light: RID, enable: boolean): void
        static light_directional_set_sky_mode(light: RID, mode: RenderingServer.LightDirectionalSkyMode): void
        static light_projectors_set_filter(filter: RenderingServer.LightProjectorFilter): void
        static positional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        static directional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        static directional_shadow_atlas_set_size(size: number /*i64*/, is_16bits: boolean): void
        static reflection_probe_create(): RID
        static reflection_probe_set_update_mode(probe: RID, mode: RenderingServer.ReflectionProbeUpdateMode): void
        static reflection_probe_set_intensity(probe: RID, intensity: number /*f64*/): void
        static reflection_probe_set_ambient_mode(probe: RID, mode: RenderingServer.ReflectionProbeAmbientMode): void
        static reflection_probe_set_ambient_color(probe: RID, color: Color): void
        static reflection_probe_set_ambient_energy(probe: RID, energy: number /*f64*/): void
        static reflection_probe_set_max_distance(probe: RID, distance: number /*f64*/): void
        static reflection_probe_set_size(probe: RID, size: Vector3): void
        static reflection_probe_set_origin_offset(probe: RID, offset: Vector3): void
        static reflection_probe_set_as_interior(probe: RID, enable: boolean): void
        static reflection_probe_set_enable_box_projection(probe: RID, enable: boolean): void
        static reflection_probe_set_enable_shadows(probe: RID, enable: boolean): void
        static reflection_probe_set_cull_mask(probe: RID, layers: number /*i64*/): void
        static reflection_probe_set_resolution(probe: RID, resolution: number /*i64*/): void
        static reflection_probe_set_mesh_lod_threshold(probe: RID, pixels: number /*f64*/): void
        static decal_create(): RID
        static decal_set_size(decal: RID, size: Vector3): void
        static decal_set_texture(decal: RID, type: RenderingServer.DecalTexture, texture: RID): void
        static decal_set_emission_energy(decal: RID, energy: number /*f64*/): void
        static decal_set_albedo_mix(decal: RID, albedo_mix: number /*f64*/): void
        static decal_set_modulate(decal: RID, color: Color): void
        static decal_set_cull_mask(decal: RID, mask: number /*i64*/): void
        static decal_set_distance_fade(decal: RID, enabled: boolean, begin: number /*f64*/, length: number /*f64*/): void
        static decal_set_fade(decal: RID, above: number /*f64*/, below: number /*f64*/): void
        static decal_set_normal_fade(decal: RID, fade: number /*f64*/): void
        static decals_set_filter(filter: RenderingServer.DecalFilter): void
        static gi_set_use_half_resolution(half_resolution: boolean): void
        static voxel_gi_create(): RID
        static voxel_gi_allocate_data(voxel_gi: RID, to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3i, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        static voxel_gi_get_octree_size(voxel_gi: RID): Vector3i
        static voxel_gi_get_octree_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_data_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_distance_field(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_level_counts(voxel_gi: RID): PackedInt32Array
        static voxel_gi_get_to_cell_xform(voxel_gi: RID): Transform3D
        static voxel_gi_set_dynamic_range(voxel_gi: RID, range: number /*f64*/): void
        static voxel_gi_set_propagation(voxel_gi: RID, amount: number /*f64*/): void
        static voxel_gi_set_energy(voxel_gi: RID, energy: number /*f64*/): void
        static voxel_gi_set_baked_exposure_normalization(voxel_gi: RID, baked_exposure: number /*f64*/): void
        static voxel_gi_set_bias(voxel_gi: RID, bias: number /*f64*/): void
        static voxel_gi_set_normal_bias(voxel_gi: RID, bias: number /*f64*/): void
        static voxel_gi_set_interior(voxel_gi: RID, enable: boolean): void
        static voxel_gi_set_use_two_bounces(voxel_gi: RID, enable: boolean): void
        static voxel_gi_set_quality(quality: RenderingServer.VoxelGIQuality): void
        static lightmap_create(): RID
        static lightmap_set_textures(lightmap: RID, light: RID, uses_sh: boolean): void
        static lightmap_set_probe_bounds(lightmap: RID, bounds: AABB): void
        static lightmap_set_probe_interior(lightmap: RID, interior: boolean): void
        static lightmap_set_probe_capture_data(lightmap: RID, points: PackedVector3Array, point_sh: PackedColorArray, tetrahedra: PackedInt32Array, bsp_tree: PackedInt32Array): void
        static lightmap_get_probe_capture_points(lightmap: RID): PackedVector3Array
        static lightmap_get_probe_capture_sh(lightmap: RID): PackedColorArray
        static lightmap_get_probe_capture_tetrahedra(lightmap: RID): PackedInt32Array
        static lightmap_get_probe_capture_bsp_tree(lightmap: RID): PackedInt32Array
        static lightmap_set_baked_exposure_normalization(lightmap: RID, baked_exposure: number /*f64*/): void
        static lightmap_set_probe_capture_update_speed(speed: number /*f64*/): void
        static particles_create(): RID
        static particles_set_mode(particles: RID, mode: RenderingServer.ParticlesMode): void
        static particles_set_emitting(particles: RID, emitting: boolean): void
        static particles_get_emitting(particles: RID): boolean
        static particles_set_amount(particles: RID, amount: number /*i64*/): void
        static particles_set_amount_ratio(particles: RID, ratio: number /*f64*/): void
        static particles_set_lifetime(particles: RID, lifetime: number /*f64*/): void
        static particles_set_one_shot(particles: RID, one_shot: boolean): void
        static particles_set_pre_process_time(particles: RID, time: number /*f64*/): void
        static particles_set_explosiveness_ratio(particles: RID, ratio: number /*f64*/): void
        static particles_set_randomness_ratio(particles: RID, ratio: number /*f64*/): void
        static particles_set_interp_to_end(particles: RID, factor: number /*f64*/): void
        static particles_set_emitter_velocity(particles: RID, velocity: Vector3): void
        static particles_set_custom_aabb(particles: RID, aabb: AABB): void
        static particles_set_speed_scale(particles: RID, scale: number /*f64*/): void
        static particles_set_use_local_coordinates(particles: RID, enable: boolean): void
        static particles_set_process_material(particles: RID, material: RID): void
        static particles_set_fixed_fps(particles: RID, fps: number /*i64*/): void
        static particles_set_interpolate(particles: RID, enable: boolean): void
        static particles_set_fractional_delta(particles: RID, enable: boolean): void
        static particles_set_collision_base_size(particles: RID, size: number /*f64*/): void
        static particles_set_transform_align(particles: RID, align: RenderingServer.ParticlesTransformAlign): void
        static particles_set_trails(particles: RID, enable: boolean, length_sec: number /*f64*/): void
        static particles_set_trail_bind_poses(particles: RID, bind_poses: Array): void
        static particles_is_inactive(particles: RID): boolean
        static particles_request_process(particles: RID): void
        static particles_restart(particles: RID): void
        static particles_set_subemitter(particles: RID, subemitter_particles: RID): void
        static particles_emit(particles: RID, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emit_flags: number /*i64*/): void
        static particles_set_draw_order(particles: RID, order: RenderingServer.ParticlesDrawOrder): void
        static particles_set_draw_passes(particles: RID, count: number /*i64*/): void
        static particles_set_draw_pass_mesh(particles: RID, pass: number /*i64*/, mesh: RID): void
        static particles_get_current_aabb(particles: RID): AABB
        static particles_set_emission_transform(particles: RID, transform: Transform3D): void
        static particles_collision_create(): RID
        static particles_collision_set_collision_type(particles_collision: RID, type: RenderingServer.ParticlesCollisionType): void
        static particles_collision_set_cull_mask(particles_collision: RID, mask: number /*i64*/): void
        static particles_collision_set_sphere_radius(particles_collision: RID, radius: number /*f64*/): void
        static particles_collision_set_box_extents(particles_collision: RID, extents: Vector3): void
        static particles_collision_set_attractor_strength(particles_collision: RID, strength: number /*f64*/): void
        static particles_collision_set_attractor_directionality(particles_collision: RID, amount: number /*f64*/): void
        static particles_collision_set_attractor_attenuation(particles_collision: RID, curve: number /*f64*/): void
        static particles_collision_set_field_texture(particles_collision: RID, texture: RID): void
        static particles_collision_height_field_update(particles_collision: RID): void
        static particles_collision_set_height_field_resolution(particles_collision: RID, resolution: RenderingServer.ParticlesCollisionHeightfieldResolution): void
        static fog_volume_create(): RID
        static fog_volume_set_shape(fog_volume: RID, shape: RenderingServer.FogVolumeShape): void
        static fog_volume_set_size(fog_volume: RID, size: Vector3): void
        static fog_volume_set_material(fog_volume: RID, material: RID): void
        static visibility_notifier_create(): RID
        static visibility_notifier_set_aabb(notifier: RID, aabb: AABB): void
        static visibility_notifier_set_callbacks(notifier: RID, enter_callable: any /*CALLABLE*/, exit_callable: any /*CALLABLE*/): void
        static occluder_create(): RID
        static occluder_set_mesh(occluder: RID, vertices: PackedVector3Array, indices: PackedInt32Array): void
        static camera_create(): RID
        static camera_set_perspective(camera: RID, fovy_degrees: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        static camera_set_orthogonal(camera: RID, size: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        static camera_set_frustum(camera: RID, size: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/): void
        static camera_set_transform(camera: RID, transform: Transform3D): void
        static camera_set_cull_mask(camera: RID, layers: number /*i64*/): void
        static camera_set_environment(camera: RID, env: RID): void
        static camera_set_camera_attributes(camera: RID, effects: RID): void
        static camera_set_use_vertical_aspect(camera: RID, enable: boolean): void
        static viewport_create(): RID
        static viewport_set_use_xr(viewport: RID, use_xr: boolean): void
        static viewport_set_size(viewport: RID, width: number /*i64*/, height: number /*i64*/): void
        static viewport_set_active(viewport: RID, active: boolean): void
        static viewport_set_parent_viewport(viewport: RID, parent_viewport: RID): void
        static viewport_attach_to_screen(viewport: RID, rect: Rect2, screen: number /*i64*/): void
        static viewport_set_render_direct_to_screen(viewport: RID, enabled: boolean): void
        static viewport_set_canvas_cull_mask(viewport: RID, canvas_cull_mask: number /*i64*/): void
        static viewport_set_scaling_3d_mode(viewport: RID, scaling_3d_mode: RenderingServer.ViewportScaling3DMode): void
        static viewport_set_scaling_3d_scale(viewport: RID, scale: number /*f64*/): void
        static viewport_set_fsr_sharpness(viewport: RID, sharpness: number /*f64*/): void
        static viewport_set_texture_mipmap_bias(viewport: RID, mipmap_bias: number /*f64*/): void
        static viewport_set_update_mode(viewport: RID, update_mode: RenderingServer.ViewportUpdateMode): void
        static viewport_set_clear_mode(viewport: RID, clear_mode: RenderingServer.ViewportClearMode): void
        static viewport_get_render_target(viewport: RID): RID
        static viewport_get_texture(viewport: RID): RID
        static viewport_set_disable_3d(viewport: RID, disable: boolean): void
        static viewport_set_disable_2d(viewport: RID, disable: boolean): void
        static viewport_set_environment_mode(viewport: RID, mode: RenderingServer.ViewportEnvironmentMode): void
        static viewport_attach_camera(viewport: RID, camera: RID): void
        static viewport_set_scenario(viewport: RID, scenario: RID): void
        static viewport_attach_canvas(viewport: RID, canvas: RID): void
        static viewport_remove_canvas(viewport: RID, canvas: RID): void
        static viewport_set_snap_2d_transforms_to_pixel(viewport: RID, enabled: boolean): void
        static viewport_set_snap_2d_vertices_to_pixel(viewport: RID, enabled: boolean): void
        static viewport_set_default_canvas_item_texture_filter(viewport: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        static viewport_set_default_canvas_item_texture_repeat(viewport: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static viewport_set_canvas_transform(viewport: RID, canvas: RID, offset: Transform2D): void
        static viewport_set_canvas_stacking(viewport: RID, canvas: RID, layer: number /*i64*/, sublayer: number /*i64*/): void
        static viewport_set_transparent_background(viewport: RID, enabled: boolean): void
        static viewport_set_global_canvas_transform(viewport: RID, transform: Transform2D): void
        static viewport_set_sdf_oversize_and_scale(viewport: RID, oversize: RenderingServer.ViewportSDFOversize, scale: RenderingServer.ViewportSDFScale): void
        static viewport_set_positional_shadow_atlas_size(viewport: RID, size: number /*i64*/, use_16_bits: boolean): void
        static viewport_set_positional_shadow_atlas_quadrant_subdivision(viewport: RID, quadrant: number /*i64*/, subdivision: number /*i64*/): void
        static viewport_set_msaa_3d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        static viewport_set_msaa_2d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        static viewport_set_use_hdr_2d(viewport: RID, enabled: boolean): void
        static viewport_set_screen_space_aa(viewport: RID, mode: RenderingServer.ViewportScreenSpaceAA): void
        static viewport_set_use_taa(viewport: RID, enable: boolean): void
        static viewport_set_use_debanding(viewport: RID, enable: boolean): void
        static viewport_set_use_occlusion_culling(viewport: RID, enable: boolean): void
        static viewport_set_occlusion_rays_per_thread(rays_per_thread: number /*i64*/): void
        static viewport_set_occlusion_culling_build_quality(quality: RenderingServer.ViewportOcclusionCullingBuildQuality): void
        static viewport_get_render_info(viewport: RID, type: RenderingServer.ViewportRenderInfoType, info: RenderingServer.ViewportRenderInfo): number /*i64*/
        static viewport_set_debug_draw(viewport: RID, draw: RenderingServer.ViewportDebugDraw): void
        static viewport_set_measure_render_time(viewport: RID, enable: boolean): void
        static viewport_get_measured_render_time_cpu(viewport: RID): number /*f64*/
        static viewport_get_measured_render_time_gpu(viewport: RID): number /*f64*/
        static viewport_set_vrs_mode(viewport: RID, mode: RenderingServer.ViewportVRSMode): void
        static viewport_set_vrs_texture(viewport: RID, texture: RID): void
        static sky_create(): RID
        static sky_set_radiance_size(sky: RID, radiance_size: number /*i64*/): void
        static sky_set_mode(sky: RID, mode: RenderingServer.SkyMode): void
        static sky_set_material(sky: RID, material: RID): void
        static sky_bake_panorama(sky: RID, energy: number /*f64*/, bake_irradiance: boolean, size: Vector2i): Image
        static environment_create(): RID
        static environment_set_background(env: RID, bg: RenderingServer.EnvironmentBG): void
        static environment_set_sky(env: RID, sky: RID): void
        static environment_set_sky_custom_fov(env: RID, scale: number /*f64*/): void
        static environment_set_sky_orientation(env: RID, orientation: Basis): void
        static environment_set_bg_color(env: RID, color: Color): void
        static environment_set_bg_energy(env: RID, multiplier: number /*f64*/, exposure_value: number /*f64*/): void
        static environment_set_canvas_max_layer(env: RID, max_layer: number /*i64*/): void
        static environment_set_ambient_light(env: RID, color: Color, ambient: RenderingServer.EnvironmentAmbientSource, energy: number /*f64*/, sky_contibution: number /*f64*/, reflection_source: RenderingServer.EnvironmentReflectionSource): void
        static environment_set_glow(env: RID, enable: boolean, levels: PackedFloat32Array, intensity: number /*f64*/, strength: number /*f64*/, mix: number /*f64*/, bloom_threshold: number /*f64*/, blend_mode: RenderingServer.EnvironmentGlowBlendMode, hdr_bleed_threshold: number /*f64*/, hdr_bleed_scale: number /*f64*/, hdr_luminance_cap: number /*f64*/, glow_map_strength: number /*f64*/, glow_map: RID): void
        static environment_set_tonemap(env: RID, tone_mapper: RenderingServer.EnvironmentToneMapper, exposure: number /*f64*/, white: number /*f64*/): void
        static environment_set_adjustment(env: RID, enable: boolean, brightness: number /*f64*/, contrast: number /*f64*/, saturation: number /*f64*/, use_1d_color_correction: boolean, color_correction: RID): void
        static environment_set_ssr(env: RID, enable: boolean, max_steps: number /*i64*/, fade_in: number /*f64*/, fade_out: number /*f64*/, depth_tolerance: number /*f64*/): void
        static environment_set_ssao(env: RID, enable: boolean, radius: number /*f64*/, intensity: number /*f64*/, power: number /*f64*/, detail: number /*f64*/, horizon: number /*f64*/, sharpness: number /*f64*/, light_affect: number /*f64*/, ao_channel_affect: number /*f64*/): void
        static environment_set_fog(env: RID, enable: boolean, light_color: Color, light_energy: number /*f64*/, sun_scatter: number /*f64*/, density: number /*f64*/, height: number /*f64*/, height_density: number /*f64*/, aerial_perspective: number /*f64*/, sky_affect: number /*f64*/): void
        static environment_set_sdfgi(env: RID, enable: boolean, cascades: number /*i64*/, min_cell_size: number /*f64*/, y_scale: RenderingServer.EnvironmentSDFGIYScale, use_occlusion: boolean, bounce_feedback: number /*f64*/, read_sky: boolean, energy: number /*f64*/, normal_bias: number /*f64*/, probe_bias: number /*f64*/): void
        static environment_set_volumetric_fog(env: RID, enable: boolean, density: number /*f64*/, albedo: Color, emission: Color, emission_energy: number /*f64*/, anisotropy: number /*f64*/, length: number /*f64*/, p_detail_spread: number /*f64*/, gi_inject: number /*f64*/, temporal_reprojection: boolean, temporal_reprojection_amount: number /*f64*/, ambient_inject: number /*f64*/, sky_affect: number /*f64*/): void
        static environment_glow_set_use_bicubic_upscale(enable: boolean): void
        static environment_set_ssr_roughness_quality(quality: RenderingServer.EnvironmentSSRRoughnessQuality): void
        static environment_set_ssao_quality(quality: RenderingServer.EnvironmentSSAOQuality, half_size: boolean, adaptive_target: number /*f64*/, blur_passes: number /*i64*/, fadeout_from: number /*f64*/, fadeout_to: number /*f64*/): void
        static environment_set_ssil_quality(quality: RenderingServer.EnvironmentSSILQuality, half_size: boolean, adaptive_target: number /*f64*/, blur_passes: number /*i64*/, fadeout_from: number /*f64*/, fadeout_to: number /*f64*/): void
        static environment_set_sdfgi_ray_count(ray_count: RenderingServer.EnvironmentSDFGIRayCount): void
        static environment_set_sdfgi_frames_to_converge(frames: RenderingServer.EnvironmentSDFGIFramesToConverge): void
        static environment_set_sdfgi_frames_to_update_light(frames: RenderingServer.EnvironmentSDFGIFramesToUpdateLight): void
        static environment_set_volumetric_fog_volume_size(size: number /*i64*/, depth: number /*i64*/): void
        static environment_set_volumetric_fog_filter_active(active: boolean): void
        static environment_bake_panorama(environment: RID, bake_irradiance: boolean, size: Vector2i): Image
        static screen_space_roughness_limiter_set_active(enable: boolean, amount: number /*f64*/, limit: number /*f64*/): void
        static sub_surface_scattering_set_quality(quality: RenderingServer.SubSurfaceScatteringQuality): void
        static sub_surface_scattering_set_scale(scale: number /*f64*/, depth_scale: number /*f64*/): void
        static camera_attributes_create(): RID
        static camera_attributes_set_dof_blur_quality(quality: RenderingServer.DOFBlurQuality, use_jitter: boolean): void
        static camera_attributes_set_dof_blur_bokeh_shape(shape: RenderingServer.DOFBokehShape): void
        static camera_attributes_set_dof_blur(camera_attributes: RID, far_enable: boolean, far_distance: number /*f64*/, far_transition: number /*f64*/, near_enable: boolean, near_distance: number /*f64*/, near_transition: number /*f64*/, amount: number /*f64*/): void
        static camera_attributes_set_exposure(camera_attributes: RID, multiplier: number /*f64*/, normalization: number /*f64*/): void
        static camera_attributes_set_auto_exposure(camera_attributes: RID, enable: boolean, min_sensitivity: number /*f64*/, max_sensitivity: number /*f64*/, speed: number /*f64*/, scale: number /*f64*/): void
        static scenario_create(): RID
        static scenario_set_environment(scenario: RID, environment: RID): void
        static scenario_set_fallback_environment(scenario: RID, environment: RID): void
        static scenario_set_camera_attributes(scenario: RID, effects: RID): void
        static instance_create2(base: RID, scenario: RID): RID
        static instance_create(): RID
        static instance_set_base(instance: RID, base: RID): void
        static instance_set_scenario(instance: RID, scenario: RID): void
        static instance_set_layer_mask(instance: RID, mask: number /*i64*/): void
        static instance_set_pivot_data(instance: RID, sorting_offset: number /*f64*/, use_aabb_center: boolean): void
        static instance_set_transform(instance: RID, transform: Transform3D): void
        static instance_attach_object_instance_id(instance: RID, id: number /*i64*/): void
        static instance_set_blend_shape_weight(instance: RID, shape: number /*i64*/, weight: number /*f64*/): void
        static instance_set_surface_override_material(instance: RID, surface: number /*i64*/, material: RID): void
        static instance_set_visible(instance: RID, visible: boolean): void
        static instance_geometry_set_transparency(instance: RID, transparency: number /*f64*/): void
        static instance_set_custom_aabb(instance: RID, aabb: AABB): void
        static instance_attach_skeleton(instance: RID, skeleton: RID): void
        static instance_set_extra_visibility_margin(instance: RID, margin: number /*f64*/): void
        static instance_set_visibility_parent(instance: RID, parent: RID): void
        static instance_set_ignore_culling(instance: RID, enabled: boolean): void
        static instance_geometry_set_flag(instance: RID, flag: RenderingServer.InstanceFlags, enabled: boolean): void
        static instance_geometry_set_cast_shadows_setting(instance: RID, shadow_casting_setting: RenderingServer.ShadowCastingSetting): void
        static instance_geometry_set_material_override(instance: RID, material: RID): void
        static instance_geometry_set_material_overlay(instance: RID, material: RID): void
        static instance_geometry_set_visibility_range(instance: RID, min: number /*f64*/, max: number /*f64*/, min_margin: number /*f64*/, max_margin: number /*f64*/, fade_mode: RenderingServer.VisibilityRangeFadeMode): void
        static instance_geometry_set_lightmap(instance: RID, lightmap: RID, lightmap_uv_scale: Rect2, lightmap_slice: number /*i64*/): void
        static instance_geometry_set_lod_bias(instance: RID, lod_bias: number /*f64*/): void
        static instance_geometry_set_shader_parameter(instance: RID, parameter: StringName, value: any): void
        static instance_geometry_get_shader_parameter(instance: RID, parameter: StringName): any
        static instance_geometry_get_shader_parameter_default_value(instance: RID, parameter: StringName): any
        static instance_geometry_get_shader_parameter_list(instance: RID): Array
        static instances_cull_aabb(aabb: AABB, scenario: RID): PackedInt64Array
        static instances_cull_ray(from: Vector3, to: Vector3, scenario: RID): PackedInt64Array
        static instances_cull_convex(convex: Array, scenario: RID): PackedInt64Array
        static bake_render_uv2(base: RID, material_overrides: Array, image_size: Vector2i): Array
        static canvas_create(): RID
        static canvas_set_item_mirroring(canvas: RID, item: RID, mirroring: Vector2): void
        static canvas_set_modulate(canvas: RID, color: Color): void
        static canvas_set_disable_scale(disable: boolean): void
        static canvas_texture_create(): RID
        static canvas_texture_set_channel(canvas_texture: RID, channel: RenderingServer.CanvasTextureChannel, texture: RID): void
        static canvas_texture_set_shading_parameters(canvas_texture: RID, base_color: Color, shininess: number /*f64*/): void
        static canvas_texture_set_texture_filter(canvas_texture: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        static canvas_texture_set_texture_repeat(canvas_texture: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static canvas_item_create(): RID
        static canvas_item_set_parent(item: RID, parent: RID): void
        static canvas_item_set_default_texture_filter(item: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        static canvas_item_set_default_texture_repeat(item: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static canvas_item_set_visible(item: RID, visible: boolean): void
        static canvas_item_set_light_mask(item: RID, mask: number /*i64*/): void
        static canvas_item_set_visibility_layer(item: RID, visibility_layer: number /*i64*/): void
        static canvas_item_set_transform(item: RID, transform: Transform2D): void
        static canvas_item_set_clip(item: RID, clip: boolean): void
        static canvas_item_set_distance_field_mode(item: RID, enabled: boolean): void
        static canvas_item_set_custom_rect(item: RID, use_custom_rect: boolean, rect: Rect2): void
        static canvas_item_set_modulate(item: RID, color: Color): void
        static canvas_item_set_self_modulate(item: RID, color: Color): void
        static canvas_item_set_draw_behind_parent(item: RID, enabled: boolean): void
        static canvas_item_add_line(item: RID, from: Vector2, to: Vector2, color: Color, width: number /*f64*/, antialiased: boolean): void
        static canvas_item_add_polyline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/, antialiased: boolean): void
        static canvas_item_add_multiline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/): void
        static canvas_item_add_rect(item: RID, rect: Rect2, color: Color): void
        static canvas_item_add_circle(item: RID, pos: Vector2, radius: number /*f64*/, color: Color): void
        static canvas_item_add_texture_rect(item: RID, rect: Rect2, texture: RID, tile: boolean, modulate: Color, transpose: boolean): void
        static canvas_item_add_msdf_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color, outline_size: number /*i64*/, px_range: number /*f64*/, scale: number /*f64*/): void
        static canvas_item_add_lcd_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color): void
        static canvas_item_add_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        static canvas_item_add_nine_patch(item: RID, rect: Rect2, source: Rect2, texture: RID, topleft: Vector2, bottomright: Vector2, x_axis_mode: RenderingServer.NinePatchAxisMode, y_axis_mode: RenderingServer.NinePatchAxisMode, draw_center: boolean, modulate: Color): void
        static canvas_item_add_primitive(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: RID): void
        static canvas_item_add_polygon(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: RID): void
        static canvas_item_add_triangle_array(item: RID, indices: PackedInt32Array, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, bones: PackedInt32Array, weights: PackedFloat32Array, texture: RID, count: number /*i64*/): void
        static canvas_item_add_mesh(item: RID, mesh: RID, transform: Transform2D, modulate: Color, texture: RID): void
        static canvas_item_add_multimesh(item: RID, mesh: RID, texture: RID): void
        static canvas_item_add_particles(item: RID, particles: RID, texture: RID): void
        static canvas_item_add_set_transform(item: RID, transform: Transform2D): void
        static canvas_item_add_clip_ignore(item: RID, ignore: boolean): void
        static canvas_item_add_animation_slice(item: RID, animation_length: number /*f64*/, slice_begin: number /*f64*/, slice_end: number /*f64*/, offset: number /*f64*/): void
        static canvas_item_set_sort_children_by_y(item: RID, enabled: boolean): void
        static canvas_item_set_z_index(item: RID, z_index: number /*i64*/): void
        static canvas_item_set_z_as_relative_to_parent(item: RID, enabled: boolean): void
        static canvas_item_set_copy_to_backbuffer(item: RID, enabled: boolean, rect: Rect2): void
        static canvas_item_clear(item: RID): void
        static canvas_item_set_draw_index(item: RID, index: number /*i64*/): void
        static canvas_item_set_material(item: RID, material: RID): void
        static canvas_item_set_use_parent_material(item: RID, enabled: boolean): void
        static canvas_item_set_visibility_notifier(item: RID, enable: boolean, area: Rect2, enter_callable: any /*CALLABLE*/, exit_callable: any /*CALLABLE*/): void
        static canvas_item_set_canvas_group_mode(item: RID, mode: RenderingServer.CanvasGroupMode, clear_margin: number /*f64*/, fit_empty: boolean, fit_margin: number /*f64*/, blur_mipmaps: boolean): void
        static debug_canvas_item_get_rect(item: RID): Rect2
        static canvas_light_create(): RID
        static canvas_light_attach_to_canvas(light: RID, canvas: RID): void
        static canvas_light_set_enabled(light: RID, enabled: boolean): void
        static canvas_light_set_texture_scale(light: RID, scale: number /*f64*/): void
        static canvas_light_set_transform(light: RID, transform: Transform2D): void
        static canvas_light_set_texture(light: RID, texture: RID): void
        static canvas_light_set_texture_offset(light: RID, offset: Vector2): void
        static canvas_light_set_color(light: RID, color: Color): void
        static canvas_light_set_height(light: RID, height: number /*f64*/): void
        static canvas_light_set_energy(light: RID, energy: number /*f64*/): void
        static canvas_light_set_z_range(light: RID, min_z: number /*i64*/, max_z: number /*i64*/): void
        static canvas_light_set_layer_range(light: RID, min_layer: number /*i64*/, max_layer: number /*i64*/): void
        static canvas_light_set_item_cull_mask(light: RID, mask: number /*i64*/): void
        static canvas_light_set_item_shadow_cull_mask(light: RID, mask: number /*i64*/): void
        static canvas_light_set_mode(light: RID, mode: RenderingServer.CanvasLightMode): void
        static canvas_light_set_shadow_enabled(light: RID, enabled: boolean): void
        static canvas_light_set_shadow_filter(light: RID, filter: RenderingServer.CanvasLightShadowFilter): void
        static canvas_light_set_shadow_color(light: RID, color: Color): void
        static canvas_light_set_shadow_smooth(light: RID, smooth: number /*f64*/): void
        static canvas_light_set_blend_mode(light: RID, mode: RenderingServer.CanvasLightBlendMode): void
        static canvas_light_occluder_create(): RID
        static canvas_light_occluder_attach_to_canvas(occluder: RID, canvas: RID): void
        static canvas_light_occluder_set_enabled(occluder: RID, enabled: boolean): void
        static canvas_light_occluder_set_polygon(occluder: RID, polygon: RID): void
        static canvas_light_occluder_set_as_sdf_collision(occluder: RID, enable: boolean): void
        static canvas_light_occluder_set_transform(occluder: RID, transform: Transform2D): void
        static canvas_light_occluder_set_light_mask(occluder: RID, mask: number /*i64*/): void
        static canvas_occluder_polygon_create(): RID
        static canvas_occluder_polygon_set_shape(occluder_polygon: RID, shape: PackedVector2Array, closed: boolean): void
        static canvas_occluder_polygon_set_cull_mode(occluder_polygon: RID, mode: RenderingServer.CanvasOccluderPolygonCullMode): void
        static canvas_set_shadow_texture_size(size: number /*i64*/): void
        static global_shader_parameter_add(name: StringName, type: RenderingServer.GlobalShaderParameterType, default_value: any): void
        static global_shader_parameter_remove(name: StringName): void
        static global_shader_parameter_get_list(): Array
        static global_shader_parameter_set(name: StringName, value: any): void
        static global_shader_parameter_set_override(name: StringName, value: any): void
        static global_shader_parameter_get(name: StringName): any
        static global_shader_parameter_get_type(name: StringName): RenderingServer.GlobalShaderParameterType
        static free_rid(rid: RID): void
        static request_frame_drawn_callback(callable: any /*CALLABLE*/): void
        static has_changed(): boolean
        static get_rendering_info(info: RenderingServer.RenderingInfo): number /*i64*/
        static get_video_adapter_name(): string
        static get_video_adapter_vendor(): string
        static get_video_adapter_type(): RenderingDevice.DeviceType
        static get_video_adapter_api_version(): string
        static make_sphere_mesh(latitudes: number /*i64*/, longitudes: number /*i64*/, radius: number /*f64*/): RID
        static get_test_cube(): RID
        static get_test_texture(): RID
        static get_white_texture(): RID
        static set_boot_image(image: Image, color: Color, scale: boolean, use_filter: boolean): void
        static get_default_clear_color(): Color
        static set_default_clear_color(color: Color): void
        static has_feature(feature: RenderingServer.Features): boolean
        static has_os_feature(feature: string): boolean
        static set_debug_generate_wireframes(generate: boolean): void
        static is_render_loop_enabled(): boolean
        static set_render_loop_enabled(enabled: boolean): void
        static get_frame_setup_time_cpu(): number /*f64*/
        static force_sync(): void
        static force_draw(swap_buffers: boolean, frame_step: number /*f64*/): void
        static get_rendering_device(): RenderingDevice
        static create_local_rendering_device(): RenderingDevice
        static call_on_render_thread(callable: any /*CALLABLE*/): void
        // SIGNAL: frame_pre_draw
        // SIGNAL: frame_post_draw
    }
    namespace AudioServer {
        enum SpeakerMode {
            SPEAKER_MODE_STEREO = 0,
            SPEAKER_SURROUND_31 = 1,
            SPEAKER_SURROUND_51 = 2,
            SPEAKER_SURROUND_71 = 3,
        }
    }
    class AudioServer extends Object {
        static set_bus_count(amount: number /*i64*/): void
        static get_bus_count(): number /*i64*/
        static remove_bus(index: number /*i64*/): void
        static add_bus(at_position: number /*i64*/): void
        static move_bus(index: number /*i64*/, to_index: number /*i64*/): void
        static set_bus_name(bus_idx: number /*i64*/, name: string): void
        static get_bus_name(bus_idx: number /*i64*/): string
        static get_bus_index(bus_name: StringName): number /*i64*/
        static get_bus_channels(bus_idx: number /*i64*/): number /*i64*/
        static set_bus_volume_db(bus_idx: number /*i64*/, volume_db: number /*f64*/): void
        static get_bus_volume_db(bus_idx: number /*i64*/): number /*f64*/
        static set_bus_send(bus_idx: number /*i64*/, send: StringName): void
        static get_bus_send(bus_idx: number /*i64*/): StringName
        static set_bus_solo(bus_idx: number /*i64*/, enable: boolean): void
        static is_bus_solo(bus_idx: number /*i64*/): boolean
        static set_bus_mute(bus_idx: number /*i64*/, enable: boolean): void
        static is_bus_mute(bus_idx: number /*i64*/): boolean
        static set_bus_bypass_effects(bus_idx: number /*i64*/, enable: boolean): void
        static is_bus_bypassing_effects(bus_idx: number /*i64*/): boolean
        static add_bus_effect(bus_idx: number /*i64*/, effect: AudioEffect, at_position: number /*i64*/): void
        static remove_bus_effect(bus_idx: number /*i64*/, effect_idx: number /*i64*/): void
        static get_bus_effect_count(bus_idx: number /*i64*/): number /*i64*/
        static get_bus_effect(bus_idx: number /*i64*/, effect_idx: number /*i64*/): AudioEffect
        static get_bus_effect_instance(bus_idx: number /*i64*/, effect_idx: number /*i64*/, channel: number /*i64*/): AudioEffectInstance
        static swap_bus_effects(bus_idx: number /*i64*/, effect_idx: number /*i64*/, by_effect_idx: number /*i64*/): void
        static set_bus_effect_enabled(bus_idx: number /*i64*/, effect_idx: number /*i64*/, enabled: boolean): void
        static is_bus_effect_enabled(bus_idx: number /*i64*/, effect_idx: number /*i64*/): boolean
        static get_bus_peak_volume_left_db(bus_idx: number /*i64*/, channel: number /*i64*/): number /*f64*/
        static get_bus_peak_volume_right_db(bus_idx: number /*i64*/, channel: number /*i64*/): number /*f64*/
        static set_playback_speed_scale(scale: number /*f64*/): void
        static get_playback_speed_scale(): number /*f64*/
        static lock(): void
        static unlock(): void
        static get_speaker_mode(): AudioServer.SpeakerMode
        static get_mix_rate(): number /*f64*/
        static get_output_device_list(): PackedStringArray
        static get_output_device(): string
        static set_output_device(name: string): void
        static get_time_to_next_mix(): number /*f64*/
        static get_time_since_last_mix(): number /*f64*/
        static get_output_latency(): number /*f64*/
        static get_input_device_list(): PackedStringArray
        static get_input_device(): string
        static set_input_device(name: string): void
        static set_bus_layout(bus_layout: AudioBusLayout): void
        static generate_bus_layout(): AudioBusLayout
        static set_enable_tagging_used_audio_streams(enable: boolean): void
        // SIGNAL: bus_layout_changed
        // SIGNAL: bus_renamed
    }
    namespace PhysicsServer2D {
        enum SpaceParameter {
            SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0,
            SPACE_PARAM_CONTACT_MAX_SEPARATION = 1,
            SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2,
            SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3,
            SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4,
            SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5,
            SPACE_PARAM_BODY_TIME_TO_SLEEP = 6,
            SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS = 7,
            SPACE_PARAM_SOLVER_ITERATIONS = 8,
        }
        enum ShapeType {
            SHAPE_WORLD_BOUNDARY = 0,
            SHAPE_SEPARATION_RAY = 1,
            SHAPE_SEGMENT = 2,
            SHAPE_CIRCLE = 3,
            SHAPE_RECTANGLE = 4,
            SHAPE_CAPSULE = 5,
            SHAPE_CONVEX_POLYGON = 6,
            SHAPE_CONCAVE_POLYGON = 7,
            SHAPE_CUSTOM = 8,
        }
        enum AreaParameter {
            AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0,
            AREA_PARAM_GRAVITY = 1,
            AREA_PARAM_GRAVITY_VECTOR = 2,
            AREA_PARAM_GRAVITY_IS_POINT = 3,
            AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4,
            AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5,
            AREA_PARAM_LINEAR_DAMP = 6,
            AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7,
            AREA_PARAM_ANGULAR_DAMP = 8,
            AREA_PARAM_PRIORITY = 9,
        }
        enum AreaSpaceOverrideMode {
            AREA_SPACE_OVERRIDE_DISABLED = 0,
            AREA_SPACE_OVERRIDE_COMBINE = 1,
            AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            AREA_SPACE_OVERRIDE_REPLACE = 3,
            AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
        enum BodyMode {
            BODY_MODE_STATIC = 0,
            BODY_MODE_KINEMATIC = 1,
            BODY_MODE_RIGID = 2,
            BODY_MODE_RIGID_LINEAR = 3,
        }
        enum BodyParameter {
            BODY_PARAM_BOUNCE = 0,
            BODY_PARAM_FRICTION = 1,
            BODY_PARAM_MASS = 2,
            BODY_PARAM_INERTIA = 3,
            BODY_PARAM_CENTER_OF_MASS = 4,
            BODY_PARAM_GRAVITY_SCALE = 5,
            BODY_PARAM_LINEAR_DAMP_MODE = 6,
            BODY_PARAM_ANGULAR_DAMP_MODE = 7,
            BODY_PARAM_LINEAR_DAMP = 8,
            BODY_PARAM_ANGULAR_DAMP = 9,
            BODY_PARAM_MAX = 10,
        }
        enum BodyDampMode {
            BODY_DAMP_MODE_COMBINE = 0,
            BODY_DAMP_MODE_REPLACE = 1,
        }
        enum BodyState {
            BODY_STATE_TRANSFORM = 0,
            BODY_STATE_LINEAR_VELOCITY = 1,
            BODY_STATE_ANGULAR_VELOCITY = 2,
            BODY_STATE_SLEEPING = 3,
            BODY_STATE_CAN_SLEEP = 4,
        }
        enum JointType {
            JOINT_TYPE_PIN = 0,
            JOINT_TYPE_GROOVE = 1,
            JOINT_TYPE_DAMPED_SPRING = 2,
            JOINT_TYPE_MAX = 3,
        }
        enum JointParam {
            JOINT_PARAM_BIAS = 0,
            JOINT_PARAM_MAX_BIAS = 1,
            JOINT_PARAM_MAX_FORCE = 2,
        }
        enum PinJointParam {
            PIN_JOINT_SOFTNESS = 0,
            PIN_JOINT_LIMIT_UPPER = 1,
            PIN_JOINT_LIMIT_LOWER = 2,
            PIN_JOINT_MOTOR_TARGET_VELOCITY = 3,
        }
        enum PinJointFlag {
            PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED = 0,
            PIN_JOINT_FLAG_MOTOR_ENABLED = 1,
        }
        enum DampedSpringParam {
            DAMPED_SPRING_REST_LENGTH = 0,
            DAMPED_SPRING_STIFFNESS = 1,
            DAMPED_SPRING_DAMPING = 2,
        }
        enum CCDMode {
            CCD_MODE_DISABLED = 0,
            CCD_MODE_CAST_RAY = 1,
            CCD_MODE_CAST_SHAPE = 2,
        }
        enum AreaBodyStatus {
            AREA_BODY_ADDED = 0,
            AREA_BODY_REMOVED = 1,
        }
        enum ProcessInfo {
            INFO_ACTIVE_OBJECTS = 0,
            INFO_COLLISION_PAIRS = 1,
            INFO_ISLAND_COUNT = 2,
        }
    }
    class PhysicsServer2D extends Object {
        static world_boundary_shape_create(): RID
        static separation_ray_shape_create(): RID
        static segment_shape_create(): RID
        static circle_shape_create(): RID
        static rectangle_shape_create(): RID
        static capsule_shape_create(): RID
        static convex_polygon_shape_create(): RID
        static concave_polygon_shape_create(): RID
        static shape_set_data(shape: RID, data: any): void
        static shape_get_type(shape: RID): PhysicsServer2D.ShapeType
        static shape_get_data(shape: RID): any
        static space_create(): RID
        static space_set_active(space: RID, active: boolean): void
        static space_is_active(space: RID): boolean
        static space_set_param(space: RID, param: PhysicsServer2D.SpaceParameter, value: number /*f64*/): void
        static space_get_param(space: RID, param: PhysicsServer2D.SpaceParameter): number /*f64*/
        static space_get_direct_state(space: RID): PhysicsDirectSpaceState2D
        static area_create(): RID
        static area_set_space(area: RID, space: RID): void
        static area_get_space(area: RID): RID
        static area_add_shape(area: RID, shape: RID, transform: Transform2D, disabled: boolean): void
        static area_set_shape(area: RID, shape_idx: number /*i64*/, shape: RID): void
        static area_set_shape_transform(area: RID, shape_idx: number /*i64*/, transform: Transform2D): void
        static area_set_shape_disabled(area: RID, shape_idx: number /*i64*/, disabled: boolean): void
        static area_get_shape_count(area: RID): number /*i64*/
        static area_get_shape(area: RID, shape_idx: number /*i64*/): RID
        static area_get_shape_transform(area: RID, shape_idx: number /*i64*/): Transform2D
        static area_remove_shape(area: RID, shape_idx: number /*i64*/): void
        static area_clear_shapes(area: RID): void
        static area_set_collision_layer(area: RID, layer: number /*i64*/): void
        static area_get_collision_layer(area: RID): number /*i64*/
        static area_set_collision_mask(area: RID, mask: number /*i64*/): void
        static area_get_collision_mask(area: RID): number /*i64*/
        static area_set_param(area: RID, param: PhysicsServer2D.AreaParameter, value: any): void
        static area_set_transform(area: RID, transform: Transform2D): void
        static area_get_param(area: RID, param: PhysicsServer2D.AreaParameter): any
        static area_get_transform(area: RID): Transform2D
        static area_attach_object_instance_id(area: RID, id: number /*i64*/): void
        static area_get_object_instance_id(area: RID): number /*i64*/
        static area_attach_canvas_instance_id(area: RID, id: number /*i64*/): void
        static area_get_canvas_instance_id(area: RID): number /*i64*/
        static area_set_monitor_callback(area: RID, callback: any /*CALLABLE*/): void
        static area_set_area_monitor_callback(area: RID, callback: any /*CALLABLE*/): void
        static area_set_monitorable(area: RID, monitorable: boolean): void
        static body_create(): RID
        static body_set_space(body: RID, space: RID): void
        static body_get_space(body: RID): RID
        static body_set_mode(body: RID, mode: PhysicsServer2D.BodyMode): void
        static body_get_mode(body: RID): PhysicsServer2D.BodyMode
        static body_add_shape(body: RID, shape: RID, transform: Transform2D, disabled: boolean): void
        static body_set_shape(body: RID, shape_idx: number /*i64*/, shape: RID): void
        static body_set_shape_transform(body: RID, shape_idx: number /*i64*/, transform: Transform2D): void
        static body_get_shape_count(body: RID): number /*i64*/
        static body_get_shape(body: RID, shape_idx: number /*i64*/): RID
        static body_get_shape_transform(body: RID, shape_idx: number /*i64*/): Transform2D
        static body_remove_shape(body: RID, shape_idx: number /*i64*/): void
        static body_clear_shapes(body: RID): void
        static body_set_shape_disabled(body: RID, shape_idx: number /*i64*/, disabled: boolean): void
        static body_set_shape_as_one_way_collision(body: RID, shape_idx: number /*i64*/, enable: boolean, margin: number /*f64*/): void
        static body_attach_object_instance_id(body: RID, id: number /*i64*/): void
        static body_get_object_instance_id(body: RID): number /*i64*/
        static body_attach_canvas_instance_id(body: RID, id: number /*i64*/): void
        static body_get_canvas_instance_id(body: RID): number /*i64*/
        static body_set_continuous_collision_detection_mode(body: RID, mode: PhysicsServer2D.CCDMode): void
        static body_get_continuous_collision_detection_mode(body: RID): PhysicsServer2D.CCDMode
        static body_set_collision_layer(body: RID, layer: number /*i64*/): void
        static body_get_collision_layer(body: RID): number /*i64*/
        static body_set_collision_mask(body: RID, mask: number /*i64*/): void
        static body_get_collision_mask(body: RID): number /*i64*/
        static body_set_collision_priority(body: RID, priority: number /*f64*/): void
        static body_get_collision_priority(body: RID): number /*f64*/
        static body_set_param(body: RID, param: PhysicsServer2D.BodyParameter, value: any): void
        static body_get_param(body: RID, param: PhysicsServer2D.BodyParameter): any
        static body_reset_mass_properties(body: RID): void
        static body_set_state(body: RID, state: PhysicsServer2D.BodyState, value: any): void
        static body_get_state(body: RID, state: PhysicsServer2D.BodyState): any
        static body_apply_central_impulse(body: RID, impulse: Vector2): void
        static body_apply_torque_impulse(body: RID, impulse: number /*f64*/): void
        static body_apply_impulse(body: RID, impulse: Vector2, position: Vector2): void
        static body_apply_central_force(body: RID, force: Vector2): void
        static body_apply_force(body: RID, force: Vector2, position: Vector2): void
        static body_apply_torque(body: RID, torque: number /*f64*/): void
        static body_add_constant_central_force(body: RID, force: Vector2): void
        static body_add_constant_force(body: RID, force: Vector2, position: Vector2): void
        static body_add_constant_torque(body: RID, torque: number /*f64*/): void
        static body_set_constant_force(body: RID, force: Vector2): void
        static body_get_constant_force(body: RID): Vector2
        static body_set_constant_torque(body: RID, torque: number /*f64*/): void
        static body_get_constant_torque(body: RID): number /*f64*/
        static body_set_axis_velocity(body: RID, axis_velocity: Vector2): void
        static body_add_collision_exception(body: RID, excepted_body: RID): void
        static body_remove_collision_exception(body: RID, excepted_body: RID): void
        static body_set_max_contacts_reported(body: RID, amount: number /*i64*/): void
        static body_get_max_contacts_reported(body: RID): number /*i64*/
        static body_set_omit_force_integration(body: RID, enable: boolean): void
        static body_is_omitting_force_integration(body: RID): boolean
        static body_set_force_integration_callback(body: RID, callable: any /*CALLABLE*/, userdata: any): void
        static body_test_motion(body: RID, parameters: PhysicsTestMotionParameters2D, result: PhysicsTestMotionResult2D): boolean
        static body_get_direct_state(body: RID): PhysicsDirectBodyState2D
        static joint_create(): RID
        static joint_clear(joint: RID): void
        static joint_set_param(joint: RID, param: PhysicsServer2D.JointParam, value: number /*f64*/): void
        static joint_get_param(joint: RID, param: PhysicsServer2D.JointParam): number /*f64*/
        static joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        static joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        static joint_make_pin(joint: RID, anchor: Vector2, body_a: RID, body_b: RID): void
        static joint_make_groove(joint: RID, groove1_a: Vector2, groove2_a: Vector2, anchor_b: Vector2, body_a: RID, body_b: RID): void
        static joint_make_damped_spring(joint: RID, anchor_a: Vector2, anchor_b: Vector2, body_a: RID, body_b: RID): void
        static pin_joint_set_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        static pin_joint_get_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag): boolean
        static pin_joint_set_param(joint: RID, param: PhysicsServer2D.PinJointParam, value: number /*f64*/): void
        static pin_joint_get_param(joint: RID, param: PhysicsServer2D.PinJointParam): number /*f64*/
        static damped_spring_joint_set_param(joint: RID, param: PhysicsServer2D.DampedSpringParam, value: number /*f64*/): void
        static damped_spring_joint_get_param(joint: RID, param: PhysicsServer2D.DampedSpringParam): number /*f64*/
        static joint_get_type(joint: RID): PhysicsServer2D.JointType
        static free_rid(rid: RID): void
        static set_active(active: boolean): void
        static get_process_info(process_info: PhysicsServer2D.ProcessInfo): number /*i64*/
    }
    namespace PhysicsServer3D {
        enum JointType {
            JOINT_TYPE_PIN = 0,
            JOINT_TYPE_HINGE = 1,
            JOINT_TYPE_SLIDER = 2,
            JOINT_TYPE_CONE_TWIST = 3,
            JOINT_TYPE_6DOF = 4,
            JOINT_TYPE_MAX = 5,
        }
        enum PinJointParam {
            PIN_JOINT_BIAS = 0,
            PIN_JOINT_DAMPING = 1,
            PIN_JOINT_IMPULSE_CLAMP = 2,
        }
        enum HingeJointParam {
            HINGE_JOINT_BIAS = 0,
            HINGE_JOINT_LIMIT_UPPER = 1,
            HINGE_JOINT_LIMIT_LOWER = 2,
            HINGE_JOINT_LIMIT_BIAS = 3,
            HINGE_JOINT_LIMIT_SOFTNESS = 4,
            HINGE_JOINT_LIMIT_RELAXATION = 5,
            HINGE_JOINT_MOTOR_TARGET_VELOCITY = 6,
            HINGE_JOINT_MOTOR_MAX_IMPULSE = 7,
        }
        enum HingeJointFlag {
            HINGE_JOINT_FLAG_USE_LIMIT = 0,
            HINGE_JOINT_FLAG_ENABLE_MOTOR = 1,
        }
        enum SliderJointParam {
            SLIDER_JOINT_LINEAR_LIMIT_UPPER = 0,
            SLIDER_JOINT_LINEAR_LIMIT_LOWER = 1,
            SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS = 2,
            SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION = 3,
            SLIDER_JOINT_LINEAR_LIMIT_DAMPING = 4,
            SLIDER_JOINT_LINEAR_MOTION_SOFTNESS = 5,
            SLIDER_JOINT_LINEAR_MOTION_RESTITUTION = 6,
            SLIDER_JOINT_LINEAR_MOTION_DAMPING = 7,
            SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS = 8,
            SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION = 9,
            SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING = 10,
            SLIDER_JOINT_ANGULAR_LIMIT_UPPER = 11,
            SLIDER_JOINT_ANGULAR_LIMIT_LOWER = 12,
            SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS = 13,
            SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION = 14,
            SLIDER_JOINT_ANGULAR_LIMIT_DAMPING = 15,
            SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS = 16,
            SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION = 17,
            SLIDER_JOINT_ANGULAR_MOTION_DAMPING = 18,
            SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
            SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
            SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING = 21,
            SLIDER_JOINT_MAX = 22,
        }
        enum ConeTwistJointParam {
            CONE_TWIST_JOINT_SWING_SPAN = 0,
            CONE_TWIST_JOINT_TWIST_SPAN = 1,
            CONE_TWIST_JOINT_BIAS = 2,
            CONE_TWIST_JOINT_SOFTNESS = 3,
            CONE_TWIST_JOINT_RELAXATION = 4,
        }
        enum G6DOFJointAxisParam {
            G6DOF_JOINT_LINEAR_LOWER_LIMIT = 0,
            G6DOF_JOINT_LINEAR_UPPER_LIMIT = 1,
            G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS = 2,
            G6DOF_JOINT_LINEAR_RESTITUTION = 3,
            G6DOF_JOINT_LINEAR_DAMPING = 4,
            G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY = 5,
            G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT = 6,
            G6DOF_JOINT_ANGULAR_LOWER_LIMIT = 10,
            G6DOF_JOINT_ANGULAR_UPPER_LIMIT = 11,
            G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS = 12,
            G6DOF_JOINT_ANGULAR_DAMPING = 13,
            G6DOF_JOINT_ANGULAR_RESTITUTION = 14,
            G6DOF_JOINT_ANGULAR_FORCE_LIMIT = 15,
            G6DOF_JOINT_ANGULAR_ERP = 16,
            G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
            G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT = 18,
        }
        enum G6DOFJointAxisFlag {
            G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT = 0,
            G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT = 1,
            G6DOF_JOINT_FLAG_ENABLE_MOTOR = 4,
            G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR = 5,
        }
        enum ShapeType {
            SHAPE_WORLD_BOUNDARY = 0,
            SHAPE_SEPARATION_RAY = 1,
            SHAPE_SPHERE = 2,
            SHAPE_BOX = 3,
            SHAPE_CAPSULE = 4,
            SHAPE_CYLINDER = 5,
            SHAPE_CONVEX_POLYGON = 6,
            SHAPE_CONCAVE_POLYGON = 7,
            SHAPE_HEIGHTMAP = 8,
            SHAPE_SOFT_BODY = 9,
            SHAPE_CUSTOM = 10,
        }
        enum AreaParameter {
            AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0,
            AREA_PARAM_GRAVITY = 1,
            AREA_PARAM_GRAVITY_VECTOR = 2,
            AREA_PARAM_GRAVITY_IS_POINT = 3,
            AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4,
            AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5,
            AREA_PARAM_LINEAR_DAMP = 6,
            AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7,
            AREA_PARAM_ANGULAR_DAMP = 8,
            AREA_PARAM_PRIORITY = 9,
            AREA_PARAM_WIND_FORCE_MAGNITUDE = 10,
            AREA_PARAM_WIND_SOURCE = 11,
            AREA_PARAM_WIND_DIRECTION = 12,
            AREA_PARAM_WIND_ATTENUATION_FACTOR = 13,
        }
        enum AreaSpaceOverrideMode {
            AREA_SPACE_OVERRIDE_DISABLED = 0,
            AREA_SPACE_OVERRIDE_COMBINE = 1,
            AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            AREA_SPACE_OVERRIDE_REPLACE = 3,
            AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
        enum BodyMode {
            BODY_MODE_STATIC = 0,
            BODY_MODE_KINEMATIC = 1,
            BODY_MODE_RIGID = 2,
            BODY_MODE_RIGID_LINEAR = 3,
        }
        enum BodyParameter {
            BODY_PARAM_BOUNCE = 0,
            BODY_PARAM_FRICTION = 1,
            BODY_PARAM_MASS = 2,
            BODY_PARAM_INERTIA = 3,
            BODY_PARAM_CENTER_OF_MASS = 4,
            BODY_PARAM_GRAVITY_SCALE = 5,
            BODY_PARAM_LINEAR_DAMP_MODE = 6,
            BODY_PARAM_ANGULAR_DAMP_MODE = 7,
            BODY_PARAM_LINEAR_DAMP = 8,
            BODY_PARAM_ANGULAR_DAMP = 9,
            BODY_PARAM_MAX = 10,
        }
        enum BodyDampMode {
            BODY_DAMP_MODE_COMBINE = 0,
            BODY_DAMP_MODE_REPLACE = 1,
        }
        enum BodyState {
            BODY_STATE_TRANSFORM = 0,
            BODY_STATE_LINEAR_VELOCITY = 1,
            BODY_STATE_ANGULAR_VELOCITY = 2,
            BODY_STATE_SLEEPING = 3,
            BODY_STATE_CAN_SLEEP = 4,
        }
        enum AreaBodyStatus {
            AREA_BODY_ADDED = 0,
            AREA_BODY_REMOVED = 1,
        }
        enum ProcessInfo {
            INFO_ACTIVE_OBJECTS = 0,
            INFO_COLLISION_PAIRS = 1,
            INFO_ISLAND_COUNT = 2,
        }
        enum SpaceParameter {
            SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0,
            SPACE_PARAM_CONTACT_MAX_SEPARATION = 1,
            SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2,
            SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3,
            SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4,
            SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5,
            SPACE_PARAM_BODY_TIME_TO_SLEEP = 6,
            SPACE_PARAM_SOLVER_ITERATIONS = 7,
        }
        enum BodyAxis {
            BODY_AXIS_LINEAR_X = 1,
            BODY_AXIS_LINEAR_Y = 2,
            BODY_AXIS_LINEAR_Z = 4,
            BODY_AXIS_ANGULAR_X = 8,
            BODY_AXIS_ANGULAR_Y = 16,
            BODY_AXIS_ANGULAR_Z = 32,
        }
    }
    class PhysicsServer3D extends Object {
        static world_boundary_shape_create(): RID
        static separation_ray_shape_create(): RID
        static sphere_shape_create(): RID
        static box_shape_create(): RID
        static capsule_shape_create(): RID
        static cylinder_shape_create(): RID
        static convex_polygon_shape_create(): RID
        static concave_polygon_shape_create(): RID
        static heightmap_shape_create(): RID
        static custom_shape_create(): RID
        static shape_set_data(shape: RID, data: any): void
        static shape_get_type(shape: RID): PhysicsServer3D.ShapeType
        static shape_get_data(shape: RID): any
        static space_create(): RID
        static space_set_active(space: RID, active: boolean): void
        static space_is_active(space: RID): boolean
        static space_set_param(space: RID, param: PhysicsServer3D.SpaceParameter, value: number /*f64*/): void
        static space_get_param(space: RID, param: PhysicsServer3D.SpaceParameter): number /*f64*/
        static space_get_direct_state(space: RID): PhysicsDirectSpaceState3D
        static area_create(): RID
        static area_set_space(area: RID, space: RID): void
        static area_get_space(area: RID): RID
        static area_add_shape(area: RID, shape: RID, transform: Transform3D, disabled: boolean): void
        static area_set_shape(area: RID, shape_idx: number /*i64*/, shape: RID): void
        static area_set_shape_transform(area: RID, shape_idx: number /*i64*/, transform: Transform3D): void
        static area_set_shape_disabled(area: RID, shape_idx: number /*i64*/, disabled: boolean): void
        static area_get_shape_count(area: RID): number /*i64*/
        static area_get_shape(area: RID, shape_idx: number /*i64*/): RID
        static area_get_shape_transform(area: RID, shape_idx: number /*i64*/): Transform3D
        static area_remove_shape(area: RID, shape_idx: number /*i64*/): void
        static area_clear_shapes(area: RID): void
        static area_set_collision_layer(area: RID, layer: number /*i64*/): void
        static area_get_collision_layer(area: RID): number /*i64*/
        static area_set_collision_mask(area: RID, mask: number /*i64*/): void
        static area_get_collision_mask(area: RID): number /*i64*/
        static area_set_param(area: RID, param: PhysicsServer3D.AreaParameter, value: any): void
        static area_set_transform(area: RID, transform: Transform3D): void
        static area_get_param(area: RID, param: PhysicsServer3D.AreaParameter): any
        static area_get_transform(area: RID): Transform3D
        static area_attach_object_instance_id(area: RID, id: number /*i64*/): void
        static area_get_object_instance_id(area: RID): number /*i64*/
        static area_set_monitor_callback(area: RID, callback: any /*CALLABLE*/): void
        static area_set_area_monitor_callback(area: RID, callback: any /*CALLABLE*/): void
        static area_set_monitorable(area: RID, monitorable: boolean): void
        static area_set_ray_pickable(area: RID, enable: boolean): void
        static body_create(): RID
        static body_set_space(body: RID, space: RID): void
        static body_get_space(body: RID): RID
        static body_set_mode(body: RID, mode: PhysicsServer3D.BodyMode): void
        static body_get_mode(body: RID): PhysicsServer3D.BodyMode
        static body_set_collision_layer(body: RID, layer: number /*i64*/): void
        static body_get_collision_layer(body: RID): number /*i64*/
        static body_set_collision_mask(body: RID, mask: number /*i64*/): void
        static body_get_collision_mask(body: RID): number /*i64*/
        static body_set_collision_priority(body: RID, priority: number /*f64*/): void
        static body_get_collision_priority(body: RID): number /*f64*/
        static body_add_shape(body: RID, shape: RID, transform: Transform3D, disabled: boolean): void
        static body_set_shape(body: RID, shape_idx: number /*i64*/, shape: RID): void
        static body_set_shape_transform(body: RID, shape_idx: number /*i64*/, transform: Transform3D): void
        static body_set_shape_disabled(body: RID, shape_idx: number /*i64*/, disabled: boolean): void
        static body_get_shape_count(body: RID): number /*i64*/
        static body_get_shape(body: RID, shape_idx: number /*i64*/): RID
        static body_get_shape_transform(body: RID, shape_idx: number /*i64*/): Transform3D
        static body_remove_shape(body: RID, shape_idx: number /*i64*/): void
        static body_clear_shapes(body: RID): void
        static body_attach_object_instance_id(body: RID, id: number /*i64*/): void
        static body_get_object_instance_id(body: RID): number /*i64*/
        static body_set_enable_continuous_collision_detection(body: RID, enable: boolean): void
        static body_is_continuous_collision_detection_enabled(body: RID): boolean
        static body_set_param(body: RID, param: PhysicsServer3D.BodyParameter, value: any): void
        static body_get_param(body: RID, param: PhysicsServer3D.BodyParameter): any
        static body_reset_mass_properties(body: RID): void
        static body_set_state(body: RID, state: PhysicsServer3D.BodyState, value: any): void
        static body_get_state(body: RID, state: PhysicsServer3D.BodyState): any
        static body_apply_central_impulse(body: RID, impulse: Vector3): void
        static body_apply_impulse(body: RID, impulse: Vector3, position: Vector3): void
        static body_apply_torque_impulse(body: RID, impulse: Vector3): void
        static body_apply_central_force(body: RID, force: Vector3): void
        static body_apply_force(body: RID, force: Vector3, position: Vector3): void
        static body_apply_torque(body: RID, torque: Vector3): void
        static body_add_constant_central_force(body: RID, force: Vector3): void
        static body_add_constant_force(body: RID, force: Vector3, position: Vector3): void
        static body_add_constant_torque(body: RID, torque: Vector3): void
        static body_set_constant_force(body: RID, force: Vector3): void
        static body_get_constant_force(body: RID): Vector3
        static body_set_constant_torque(body: RID, torque: Vector3): void
        static body_get_constant_torque(body: RID): Vector3
        static body_set_axis_velocity(body: RID, axis_velocity: Vector3): void
        static body_set_axis_lock(body: RID, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        static body_is_axis_locked(body: RID, axis: PhysicsServer3D.BodyAxis): boolean
        static body_add_collision_exception(body: RID, excepted_body: RID): void
        static body_remove_collision_exception(body: RID, excepted_body: RID): void
        static body_set_max_contacts_reported(body: RID, amount: number /*i64*/): void
        static body_get_max_contacts_reported(body: RID): number /*i64*/
        static body_set_omit_force_integration(body: RID, enable: boolean): void
        static body_is_omitting_force_integration(body: RID): boolean
        static body_set_force_integration_callback(body: RID, callable: any /*CALLABLE*/, userdata: any): void
        static body_set_ray_pickable(body: RID, enable: boolean): void
        static body_test_motion(body: RID, parameters: PhysicsTestMotionParameters3D, result: PhysicsTestMotionResult3D): boolean
        static body_get_direct_state(body: RID): PhysicsDirectBodyState3D
        static soft_body_get_bounds(body: RID): AABB
        static joint_create(): RID
        static joint_clear(joint: RID): void
        static joint_make_pin(joint: RID, body_A: RID, local_A: Vector3, body_B: RID, local_B: Vector3): void
        static pin_joint_set_param(joint: RID, param: PhysicsServer3D.PinJointParam, value: number /*f64*/): void
        static pin_joint_get_param(joint: RID, param: PhysicsServer3D.PinJointParam): number /*f64*/
        static pin_joint_set_local_a(joint: RID, local_A: Vector3): void
        static pin_joint_get_local_a(joint: RID): Vector3
        static pin_joint_set_local_b(joint: RID, local_B: Vector3): void
        static pin_joint_get_local_b(joint: RID): Vector3
        static joint_make_hinge(joint: RID, body_A: RID, hinge_A: Transform3D, body_B: RID, hinge_B: Transform3D): void
        static hinge_joint_set_param(joint: RID, param: PhysicsServer3D.HingeJointParam, value: number /*f64*/): void
        static hinge_joint_get_param(joint: RID, param: PhysicsServer3D.HingeJointParam): number /*f64*/
        static hinge_joint_set_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        static hinge_joint_get_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag): boolean
        static joint_make_slider(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        static slider_joint_set_param(joint: RID, param: PhysicsServer3D.SliderJointParam, value: number /*f64*/): void
        static slider_joint_get_param(joint: RID, param: PhysicsServer3D.SliderJointParam): number /*f64*/
        static joint_make_cone_twist(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        static cone_twist_joint_set_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam, value: number /*f64*/): void
        static cone_twist_joint_get_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam): number /*f64*/
        static joint_get_type(joint: RID): PhysicsServer3D.JointType
        static joint_set_solver_priority(joint: RID, priority: number /*i64*/): void
        static joint_get_solver_priority(joint: RID): number /*i64*/
        static joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        static joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        static joint_make_generic_6dof(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        static generic_6dof_joint_set_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam, value: number /*f64*/): void
        static generic_6dof_joint_get_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam): number /*f64*/
        static generic_6dof_joint_set_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag, enable: boolean): void
        static generic_6dof_joint_get_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag): boolean
        static free_rid(rid: RID): void
        static set_active(active: boolean): void
        static get_process_info(process_info: PhysicsServer3D.ProcessInfo): number /*i64*/
    }
    class NavigationServer2D extends Object {
        static get_maps(): Array
        static map_create(): RID
        static map_set_active(map: RID, active: boolean): void
        static map_is_active(map: RID): boolean
        static map_set_cell_size(map: RID, cell_size: number /*f64*/): void
        static map_get_cell_size(map: RID): number /*f64*/
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        static map_get_use_edge_connections(map: RID): boolean
        static map_set_edge_connection_margin(map: RID, margin: number /*f64*/): void
        static map_get_edge_connection_margin(map: RID): number /*f64*/
        static map_set_link_connection_radius(map: RID, radius: number /*f64*/): void
        static map_get_link_connection_radius(map: RID): number /*f64*/
        static map_get_path(map: RID, origin: Vector2, destination: Vector2, optimize: boolean, navigation_layers: number /*i64*/): PackedVector2Array
        static map_get_closest_point(map: RID, to_point: Vector2): Vector2
        static map_get_closest_point_owner(map: RID, to_point: Vector2): RID
        static map_get_links(map: RID): Array
        static map_get_regions(map: RID): Array
        static map_get_agents(map: RID): Array
        static map_get_obstacles(map: RID): Array
        static map_force_update(map: RID): void
        static query_path(parameters: NavigationPathQueryParameters2D, result: NavigationPathQueryResult2D): void
        static region_create(): RID
        static region_set_enabled(region: RID, enabled: boolean): void
        static region_get_enabled(region: RID): boolean
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        static region_get_use_edge_connections(region: RID): boolean
        static region_set_enter_cost(region: RID, enter_cost: number /*f64*/): void
        static region_get_enter_cost(region: RID): number /*f64*/
        static region_set_travel_cost(region: RID, travel_cost: number /*f64*/): void
        static region_get_travel_cost(region: RID): number /*f64*/
        static region_set_owner_id(region: RID, owner_id: number /*i64*/): void
        static region_get_owner_id(region: RID): number /*i64*/
        static region_owns_point(region: RID, point: Vector2): boolean
        static region_set_map(region: RID, map: RID): void
        static region_get_map(region: RID): RID
        static region_set_navigation_layers(region: RID, navigation_layers: number /*i64*/): void
        static region_get_navigation_layers(region: RID): number /*i64*/
        static region_set_transform(region: RID, transform: Transform2D): void
        static region_set_navigation_polygon(region: RID, navigation_polygon: NavigationPolygon): void
        static region_get_connections_count(region: RID): number /*i64*/
        static region_get_connection_pathway_start(region: RID, connection: number /*i64*/): Vector2
        static region_get_connection_pathway_end(region: RID, connection: number /*i64*/): Vector2
        static link_create(): RID
        static link_set_map(link: RID, map: RID): void
        static link_get_map(link: RID): RID
        static link_set_enabled(link: RID, enabled: boolean): void
        static link_get_enabled(link: RID): boolean
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        static link_is_bidirectional(link: RID): boolean
        static link_set_navigation_layers(link: RID, navigation_layers: number /*i64*/): void
        static link_get_navigation_layers(link: RID): number /*i64*/
        static link_set_start_position(link: RID, position: Vector2): void
        static link_get_start_position(link: RID): Vector2
        static link_set_end_position(link: RID, position: Vector2): void
        static link_get_end_position(link: RID): Vector2
        static link_set_enter_cost(link: RID, enter_cost: number /*f64*/): void
        static link_get_enter_cost(link: RID): number /*f64*/
        static link_set_travel_cost(link: RID, travel_cost: number /*f64*/): void
        static link_get_travel_cost(link: RID): number /*f64*/
        static link_set_owner_id(link: RID, owner_id: number /*i64*/): void
        static link_get_owner_id(link: RID): number /*i64*/
        static agent_create(): RID
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        static agent_get_avoidance_enabled(agent: RID): boolean
        static agent_set_map(agent: RID, map: RID): void
        static agent_get_map(agent: RID): RID
        static agent_set_paused(agent: RID, paused: boolean): void
        static agent_get_paused(agent: RID): boolean
        static agent_set_neighbor_distance(agent: RID, distance: number /*f64*/): void
        static agent_set_max_neighbors(agent: RID, count: number /*i64*/): void
        static agent_set_time_horizon_agents(agent: RID, time_horizon: number /*f64*/): void
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: number /*f64*/): void
        static agent_set_radius(agent: RID, radius: number /*f64*/): void
        static agent_set_max_speed(agent: RID, max_speed: number /*f64*/): void
        static agent_set_velocity_forced(agent: RID, velocity: Vector2): void
        static agent_set_velocity(agent: RID, velocity: Vector2): void
        static agent_set_position(agent: RID, position: Vector2): void
        static agent_is_map_changed(agent: RID): boolean
        static agent_set_avoidance_callback(agent: RID, callback: any /*CALLABLE*/): void
        static agent_set_avoidance_layers(agent: RID, layers: number /*i64*/): void
        static agent_set_avoidance_mask(agent: RID, mask: number /*i64*/): void
        static agent_set_avoidance_priority(agent: RID, priority: number /*f64*/): void
        static obstacle_create(): RID
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        static obstacle_set_map(obstacle: RID, map: RID): void
        static obstacle_get_map(obstacle: RID): RID
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        static obstacle_get_paused(obstacle: RID): boolean
        static obstacle_set_radius(obstacle: RID, radius: number /*f64*/): void
        static obstacle_set_velocity(obstacle: RID, velocity: Vector2): void
        static obstacle_set_position(obstacle: RID, position: Vector2): void
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector2Array): void
        static obstacle_set_avoidance_layers(obstacle: RID, layers: number /*i64*/): void
        static parse_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, root_node: Node, callback: any /*CALLABLE*/): void
        static bake_from_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: any /*CALLABLE*/): void
        static bake_from_source_geometry_data_async(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: any /*CALLABLE*/): void
        static free_rid(rid: RID): void
        static set_debug_enabled(enabled: boolean): void
        static get_debug_enabled(): boolean
        // SIGNAL: map_changed
        // SIGNAL: navigation_debug_changed
    }
    namespace NavigationServer3D {
        enum ProcessInfo {
            INFO_ACTIVE_MAPS = 0,
            INFO_REGION_COUNT = 1,
            INFO_AGENT_COUNT = 2,
            INFO_LINK_COUNT = 3,
            INFO_POLYGON_COUNT = 4,
            INFO_EDGE_COUNT = 5,
            INFO_EDGE_MERGE_COUNT = 6,
            INFO_EDGE_CONNECTION_COUNT = 7,
            INFO_EDGE_FREE_COUNT = 8,
        }
    }
    class NavigationServer3D extends Object {
        static get_maps(): Array
        static map_create(): RID
        static map_set_active(map: RID, active: boolean): void
        static map_is_active(map: RID): boolean
        static map_set_up(map: RID, up: Vector3): void
        static map_get_up(map: RID): Vector3
        static map_set_cell_size(map: RID, cell_size: number /*f64*/): void
        static map_get_cell_size(map: RID): number /*f64*/
        static map_set_cell_height(map: RID, cell_height: number /*f64*/): void
        static map_get_cell_height(map: RID): number /*f64*/
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        static map_get_use_edge_connections(map: RID): boolean
        static map_set_edge_connection_margin(map: RID, margin: number /*f64*/): void
        static map_get_edge_connection_margin(map: RID): number /*f64*/
        static map_set_link_connection_radius(map: RID, radius: number /*f64*/): void
        static map_get_link_connection_radius(map: RID): number /*f64*/
        static map_get_path(map: RID, origin: Vector3, destination: Vector3, optimize: boolean, navigation_layers: number /*i64*/): PackedVector3Array
        static map_get_closest_point_to_segment(map: RID, start: Vector3, end: Vector3, use_collision: boolean): Vector3
        static map_get_closest_point(map: RID, to_point: Vector3): Vector3
        static map_get_closest_point_normal(map: RID, to_point: Vector3): Vector3
        static map_get_closest_point_owner(map: RID, to_point: Vector3): RID
        static map_get_links(map: RID): Array
        static map_get_regions(map: RID): Array
        static map_get_agents(map: RID): Array
        static map_get_obstacles(map: RID): Array
        static map_force_update(map: RID): void
        static query_path(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D): void
        static region_create(): RID
        static region_set_enabled(region: RID, enabled: boolean): void
        static region_get_enabled(region: RID): boolean
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        static region_get_use_edge_connections(region: RID): boolean
        static region_set_enter_cost(region: RID, enter_cost: number /*f64*/): void
        static region_get_enter_cost(region: RID): number /*f64*/
        static region_set_travel_cost(region: RID, travel_cost: number /*f64*/): void
        static region_get_travel_cost(region: RID): number /*f64*/
        static region_set_owner_id(region: RID, owner_id: number /*i64*/): void
        static region_get_owner_id(region: RID): number /*i64*/
        static region_owns_point(region: RID, point: Vector3): boolean
        static region_set_map(region: RID, map: RID): void
        static region_get_map(region: RID): RID
        static region_set_navigation_layers(region: RID, navigation_layers: number /*i64*/): void
        static region_get_navigation_layers(region: RID): number /*i64*/
        static region_set_transform(region: RID, transform: Transform3D): void
        static region_set_navigation_mesh(region: RID, navigation_mesh: NavigationMesh): void
        static region_bake_navigation_mesh(navigation_mesh: NavigationMesh, root_node: Node): void
        static region_get_connections_count(region: RID): number /*i64*/
        static region_get_connection_pathway_start(region: RID, connection: number /*i64*/): Vector3
        static region_get_connection_pathway_end(region: RID, connection: number /*i64*/): Vector3
        static link_create(): RID
        static link_set_map(link: RID, map: RID): void
        static link_get_map(link: RID): RID
        static link_set_enabled(link: RID, enabled: boolean): void
        static link_get_enabled(link: RID): boolean
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        static link_is_bidirectional(link: RID): boolean
        static link_set_navigation_layers(link: RID, navigation_layers: number /*i64*/): void
        static link_get_navigation_layers(link: RID): number /*i64*/
        static link_set_start_position(link: RID, position: Vector3): void
        static link_get_start_position(link: RID): Vector3
        static link_set_end_position(link: RID, position: Vector3): void
        static link_get_end_position(link: RID): Vector3
        static link_set_enter_cost(link: RID, enter_cost: number /*f64*/): void
        static link_get_enter_cost(link: RID): number /*f64*/
        static link_set_travel_cost(link: RID, travel_cost: number /*f64*/): void
        static link_get_travel_cost(link: RID): number /*f64*/
        static link_set_owner_id(link: RID, owner_id: number /*i64*/): void
        static link_get_owner_id(link: RID): number /*i64*/
        static agent_create(): RID
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        static agent_get_avoidance_enabled(agent: RID): boolean
        static agent_set_use_3d_avoidance(agent: RID, enabled: boolean): void
        static agent_get_use_3d_avoidance(agent: RID): boolean
        static agent_set_map(agent: RID, map: RID): void
        static agent_get_map(agent: RID): RID
        static agent_set_paused(agent: RID, paused: boolean): void
        static agent_get_paused(agent: RID): boolean
        static agent_set_neighbor_distance(agent: RID, distance: number /*f64*/): void
        static agent_set_max_neighbors(agent: RID, count: number /*i64*/): void
        static agent_set_time_horizon_agents(agent: RID, time_horizon: number /*f64*/): void
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: number /*f64*/): void
        static agent_set_radius(agent: RID, radius: number /*f64*/): void
        static agent_set_height(agent: RID, height: number /*f64*/): void
        static agent_set_max_speed(agent: RID, max_speed: number /*f64*/): void
        static agent_set_velocity_forced(agent: RID, velocity: Vector3): void
        static agent_set_velocity(agent: RID, velocity: Vector3): void
        static agent_set_position(agent: RID, position: Vector3): void
        static agent_is_map_changed(agent: RID): boolean
        static agent_set_avoidance_callback(agent: RID, callback: any /*CALLABLE*/): void
        static agent_set_avoidance_layers(agent: RID, layers: number /*i64*/): void
        static agent_set_avoidance_mask(agent: RID, mask: number /*i64*/): void
        static agent_set_avoidance_priority(agent: RID, priority: number /*f64*/): void
        static obstacle_create(): RID
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        static obstacle_set_use_3d_avoidance(obstacle: RID, enabled: boolean): void
        static obstacle_get_use_3d_avoidance(obstacle: RID): boolean
        static obstacle_set_map(obstacle: RID, map: RID): void
        static obstacle_get_map(obstacle: RID): RID
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        static obstacle_get_paused(obstacle: RID): boolean
        static obstacle_set_radius(obstacle: RID, radius: number /*f64*/): void
        static obstacle_set_height(obstacle: RID, height: number /*f64*/): void
        static obstacle_set_velocity(obstacle: RID, velocity: Vector3): void
        static obstacle_set_position(obstacle: RID, position: Vector3): void
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector3Array): void
        static obstacle_set_avoidance_layers(obstacle: RID, layers: number /*i64*/): void
        static parse_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, root_node: Node, callback: any /*CALLABLE*/): void
        static bake_from_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: any /*CALLABLE*/): void
        static bake_from_source_geometry_data_async(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: any /*CALLABLE*/): void
        static free_rid(rid: RID): void
        static set_active(active: boolean): void
        static set_debug_enabled(enabled: boolean): void
        static get_debug_enabled(): boolean
        static get_process_info(process_info: NavigationServer3D.ProcessInfo): number /*i64*/
        // SIGNAL: map_changed
        // SIGNAL: navigation_debug_changed
        // SIGNAL: avoidance_debug_changed
    }
    namespace XRServer {
        enum TrackerType {
            TRACKER_HEAD = 1,
            TRACKER_CONTROLLER = 2,
            TRACKER_BASESTATION = 4,
            TRACKER_ANCHOR = 8,
            TRACKER_ANY_KNOWN = 127,
            TRACKER_UNKNOWN = 128,
            TRACKER_ANY = 255,
        }
        enum RotationMode {
            RESET_FULL_ROTATION = 0,
            RESET_BUT_KEEP_TILT = 1,
            DONT_RESET_ROTATION = 2,
        }
    }
    class XRServer extends Object {
        static get_world_scale(): number /*f64*/
        static set_world_scale(scale: number /*f64*/): void
        static get_world_origin(): Transform3D
        static set_world_origin(world_origin: Transform3D): void
        static get_reference_frame(): Transform3D
        static center_on_hmd(rotation_mode: XRServer.RotationMode, keep_height: boolean): void
        static get_hmd_transform(): Transform3D
        static add_interface(interface: XRInterface): void
        static get_interface_count(): number /*i64*/
        static remove_interface(interface: XRInterface): void
        static get_interface(idx: number /*i64*/): XRInterface
        static get_interfaces(): Array
        static find_interface(name: string): XRInterface
        static add_tracker(tracker: XRPositionalTracker): void
        static remove_tracker(tracker: XRPositionalTracker): void
        static get_trackers(tracker_types: number /*i64*/): Dictionary
        static get_tracker(tracker_name: StringName): XRPositionalTracker
        static get_primary_interface(): XRInterface
        static set_primary_interface(interface: XRInterface): void
        // SIGNAL: interface_added
        // SIGNAL: interface_removed
        // SIGNAL: tracker_added
        // SIGNAL: tracker_updated
        // SIGNAL: tracker_removed
    }
    namespace CameraServer {
        enum FeedImage {
            FEED_RGBA_IMAGE = 0,
            FEED_YCBCR_IMAGE = 0,
            FEED_Y_IMAGE = 0,
            FEED_CBCR_IMAGE = 1,
        }
    }
    class CameraServer extends Object {
        static get_feed(index: number /*i64*/): CameraFeed
        static get_feed_count(): number /*i64*/
        static feeds(): Array
        static add_feed(feed: CameraFeed): void
        static remove_feed(feed: CameraFeed): void
        // SIGNAL: camera_feed_added
        // SIGNAL: camera_feed_removed
    }
    namespace AESContext {
        enum Mode {
            MODE_ECB_ENCRYPT = 0,
            MODE_ECB_DECRYPT = 1,
            MODE_CBC_ENCRYPT = 2,
            MODE_CBC_DECRYPT = 3,
            MODE_MAX = 4,
        }
    }
    class AESContext extends RefCounted {
        start(mode: AESContext.Mode, key: PackedByteArray, iv: PackedByteArray): GodotError
        update(src: PackedByteArray): PackedByteArray
        get_iv_state(): PackedByteArray
        finish(): void
    }
    class AStar2D extends RefCounted {
        get_available_point_id(): number /*i64*/
        add_point(id: number /*i64*/, position: Vector2, weight_scale: number /*f64*/): void
        get_point_position(id: number /*i64*/): Vector2
        set_point_position(id: number /*i64*/, position: Vector2): void
        get_point_weight_scale(id: number /*i64*/): number /*f64*/
        set_point_weight_scale(id: number /*i64*/, weight_scale: number /*f64*/): void
        remove_point(id: number /*i64*/): void
        has_point(id: number /*i64*/): boolean
        get_point_connections(id: number /*i64*/): PackedInt64Array
        get_point_ids(): PackedInt64Array
        set_point_disabled(id: number /*i64*/, disabled: boolean): void
        is_point_disabled(id: number /*i64*/): boolean
        connect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): void
        disconnect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): void
        are_points_connected(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): boolean
        get_point_count(): number /*i64*/
        get_point_capacity(): number /*i64*/
        reserve_space(num_nodes: number /*i64*/): void
        clear(): void
        get_closest_point(to_position: Vector2, include_disabled: boolean): number /*i64*/
        get_closest_position_in_segment(to_position: Vector2): Vector2
        get_point_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedVector2Array
        get_id_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedInt64Array
    }
    class AStar3D extends RefCounted {
        get_available_point_id(): number /*i64*/
        add_point(id: number /*i64*/, position: Vector3, weight_scale: number /*f64*/): void
        get_point_position(id: number /*i64*/): Vector3
        set_point_position(id: number /*i64*/, position: Vector3): void
        get_point_weight_scale(id: number /*i64*/): number /*f64*/
        set_point_weight_scale(id: number /*i64*/, weight_scale: number /*f64*/): void
        remove_point(id: number /*i64*/): void
        has_point(id: number /*i64*/): boolean
        get_point_connections(id: number /*i64*/): PackedInt64Array
        get_point_ids(): PackedInt64Array
        set_point_disabled(id: number /*i64*/, disabled: boolean): void
        is_point_disabled(id: number /*i64*/): boolean
        connect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): void
        disconnect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): void
        are_points_connected(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean): boolean
        get_point_count(): number /*i64*/
        get_point_capacity(): number /*i64*/
        reserve_space(num_nodes: number /*i64*/): void
        clear(): void
        get_closest_point(to_position: Vector3, include_disabled: boolean): number /*i64*/
        get_closest_position_in_segment(to_position: Vector3): Vector3
        get_point_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedVector3Array
        get_id_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedInt64Array
    }
    namespace AStarGrid2D {
        enum Heuristic {
            HEURISTIC_EUCLIDEAN = 0,
            HEURISTIC_MANHATTAN = 1,
            HEURISTIC_OCTILE = 2,
            HEURISTIC_CHEBYSHEV = 3,
            HEURISTIC_MAX = 4,
        }
        enum DiagonalMode {
            DIAGONAL_MODE_ALWAYS = 0,
            DIAGONAL_MODE_NEVER = 1,
            DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE = 2,
            DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES = 3,
            DIAGONAL_MODE_MAX = 4,
        }
    }
    class AStarGrid2D extends RefCounted {
        set_region(region: Rect2i): void
        get_region(): Rect2i
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_cell_size(cell_size: Vector2): void
        get_cell_size(): Vector2
        is_in_bounds(x: number /*i64*/, y: number /*i64*/): boolean
        is_in_boundsv(id: Vector2i): boolean
        is_dirty(): boolean
        update(): void
        set_jumping_enabled(enabled: boolean): void
        is_jumping_enabled(): boolean
        set_diagonal_mode(mode: AStarGrid2D.DiagonalMode): void
        get_diagonal_mode(): AStarGrid2D.DiagonalMode
        set_default_compute_heuristic(heuristic: AStarGrid2D.Heuristic): void
        get_default_compute_heuristic(): AStarGrid2D.Heuristic
        set_default_estimate_heuristic(heuristic: AStarGrid2D.Heuristic): void
        get_default_estimate_heuristic(): AStarGrid2D.Heuristic
        set_point_solid(id: Vector2i, solid: boolean): void
        is_point_solid(id: Vector2i): boolean
        set_point_weight_scale(id: Vector2i, weight_scale: number /*f64*/): void
        get_point_weight_scale(id: Vector2i): number /*f64*/
        fill_solid_region(region: Rect2i, solid: boolean): void
        fill_weight_scale_region(region: Rect2i, weight_scale: number /*f64*/): void
        clear(): void
        get_point_position(id: Vector2i): Vector2
        get_point_path(from_id: Vector2i, to_id: Vector2i): PackedVector2Array
        get_id_path(from_id: Vector2i, to_id: Vector2i): Array
    }
    class AbstractPolygon2DEditor extends HBoxContainer {
    }
    class AbstractPolygon2DEditorPlugin extends EditorPlugin {
    }
    class AcceptDialog extends Window {
        get_ok_button(): Button
        get_label(): Label
        set_hide_on_ok(enabled: boolean): void
        get_hide_on_ok(): boolean
        set_close_on_escape(enabled: boolean): void
        get_close_on_escape(): boolean
        add_button(text: string, right: boolean, action: string): Button
        add_cancel_button(name: string): Button
        remove_button(button: Control): void
        register_text_enter(line_edit: Control): void
        set_text(text: string): void
        get_text(): string
        set_autowrap(autowrap: boolean): void
        has_autowrap(): boolean
        set_ok_button_text(text: string): void
        get_ok_button_text(): string
        // SIGNAL: confirmed
        // SIGNAL: canceled
        // SIGNAL: custom_action
    }
    class ActionMapEditor extends Control {
        // SIGNAL: action_added
        // SIGNAL: action_edited
        // SIGNAL: action_removed
        // SIGNAL: action_renamed
        // SIGNAL: action_reordered
        // SIGNAL: filter_focused
        // SIGNAL: filter_unfocused
    }
    class AnchorPresetPicker extends ControlEditorPresetPicker {
        // SIGNAL: anchors_preset_selected
    }
    class AnimatableBody2D extends StaticBody2D {
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
    }
    class AnimatableBody3D extends StaticBody3D {
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
    }
    class AnimatedSprite2D extends Node2D {
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        is_playing(): boolean
        play(name: StringName, custom_speed: number /*f64*/, from_end: boolean): void
        play_backwards(name: StringName): void
        pause(): void
        stop(): void
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_progress(progress: number /*f64*/): void
        get_frame_progress(): number /*f64*/
        set_frame_and_progress(frame: number /*i64*/, progress: number /*f64*/): void
        set_speed_scale(speed_scale: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        get_playing_speed(): number /*f64*/
        // SIGNAL: sprite_frames_changed
        // SIGNAL: animation_changed
        // SIGNAL: frame_changed
        // SIGNAL: animation_looped
        // SIGNAL: animation_finished
    }
    class AnimatedSprite3D extends SpriteBase3D {
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        is_playing(): boolean
        play(name: StringName, custom_speed: number /*f64*/, from_end: boolean): void
        play_backwards(name: StringName): void
        pause(): void
        stop(): void
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_progress(progress: number /*f64*/): void
        get_frame_progress(): number /*f64*/
        set_frame_and_progress(frame: number /*i64*/, progress: number /*f64*/): void
        set_speed_scale(speed_scale: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        get_playing_speed(): number /*f64*/
        _res_changed(): void
        // SIGNAL: sprite_frames_changed
        // SIGNAL: animation_changed
        // SIGNAL: frame_changed
        // SIGNAL: animation_looped
        // SIGNAL: animation_finished
    }
    class AnimatedTexture extends Texture2D {
        static readonly MAX_FRAMES = 256
        set_frames(frames: number /*i64*/): void
        get_frames(): number /*i64*/
        set_current_frame(frame: number /*i64*/): void
        get_current_frame(): number /*i64*/
        set_pause(pause: boolean): void
        get_pause(): boolean
        set_one_shot(one_shot: boolean): void
        get_one_shot(): boolean
        set_speed_scale(scale: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        set_frame_texture(frame: number /*i64*/, texture: Texture2D): void
        get_frame_texture(frame: number /*i64*/): Texture2D
        set_frame_duration(frame: number /*i64*/, duration: number /*f64*/): void
        get_frame_duration(frame: number /*i64*/): number /*f64*/
    }
    namespace Animation {
        enum TrackType {
            TYPE_VALUE = 0,
            TYPE_POSITION_3D = 1,
            TYPE_ROTATION_3D = 2,
            TYPE_SCALE_3D = 3,
            TYPE_BLEND_SHAPE = 4,
            TYPE_METHOD = 5,
            TYPE_BEZIER = 6,
            TYPE_AUDIO = 7,
            TYPE_ANIMATION = 8,
        }
        enum InterpolationType {
            INTERPOLATION_NEAREST = 0,
            INTERPOLATION_LINEAR = 1,
            INTERPOLATION_CUBIC = 2,
            INTERPOLATION_LINEAR_ANGLE = 3,
            INTERPOLATION_CUBIC_ANGLE = 4,
        }
        enum UpdateMode {
            UPDATE_CONTINUOUS = 0,
            UPDATE_DISCRETE = 1,
            UPDATE_CAPTURE = 2,
        }
        enum LoopMode {
            LOOP_NONE = 0,
            LOOP_LINEAR = 1,
            LOOP_PINGPONG = 2,
        }
        enum LoopedFlag {
            LOOPED_FLAG_NONE = 0,
            LOOPED_FLAG_END = 1,
            LOOPED_FLAG_START = 2,
        }
        enum FindMode {
            FIND_MODE_NEAREST = 0,
            FIND_MODE_APPROX = 1,
            FIND_MODE_EXACT = 2,
        }
    }
    class Animation extends Resource {
        add_track(type: Animation.TrackType, at_position: number /*i64*/): number /*i64*/
        remove_track(track_idx: number /*i64*/): void
        get_track_count(): number /*i64*/
        track_get_type(track_idx: number /*i64*/): Animation.TrackType
        track_get_path(track_idx: number /*i64*/): NodePath
        track_set_path(track_idx: number /*i64*/, path: NodePath): void
        find_track(path: NodePath, type: Animation.TrackType): number /*i64*/
        track_move_up(track_idx: number /*i64*/): void
        track_move_down(track_idx: number /*i64*/): void
        track_move_to(track_idx: number /*i64*/, to_idx: number /*i64*/): void
        track_swap(track_idx: number /*i64*/, with_idx: number /*i64*/): void
        track_set_imported(track_idx: number /*i64*/, imported: boolean): void
        track_is_imported(track_idx: number /*i64*/): boolean
        track_set_enabled(track_idx: number /*i64*/, enabled: boolean): void
        track_is_enabled(track_idx: number /*i64*/): boolean
        position_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, position: Vector3): number /*i64*/
        rotation_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, rotation: Quaternion): number /*i64*/
        scale_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, scale: Vector3): number /*i64*/
        blend_shape_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, amount: number /*f64*/): number /*i64*/
        position_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Vector3
        rotation_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Quaternion
        scale_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Vector3
        blend_shape_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): number /*f64*/
        track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, key: any, transition: number /*f64*/): number /*i64*/
        track_remove_key(track_idx: number /*i64*/, key_idx: number /*i64*/): void
        track_remove_key_at_time(track_idx: number /*i64*/, time: number /*f64*/): void
        track_set_key_value(track_idx: number /*i64*/, key: number /*i64*/, value: any): void
        track_set_key_transition(track_idx: number /*i64*/, key_idx: number /*i64*/, transition: number /*f64*/): void
        track_set_key_time(track_idx: number /*i64*/, key_idx: number /*i64*/, time: number /*f64*/): void
        track_get_key_transition(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        track_get_key_count(track_idx: number /*i64*/): number /*i64*/
        track_get_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/): any
        track_get_key_time(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        track_find_key(track_idx: number /*i64*/, time: number /*f64*/, find_mode: Animation.FindMode): number /*i64*/
        track_set_interpolation_type(track_idx: number /*i64*/, interpolation: Animation.InterpolationType): void
        track_get_interpolation_type(track_idx: number /*i64*/): Animation.InterpolationType
        track_set_interpolation_loop_wrap(track_idx: number /*i64*/, interpolation: boolean): void
        track_get_interpolation_loop_wrap(track_idx: number /*i64*/): boolean
        track_is_compressed(track_idx: number /*i64*/): boolean
        value_track_set_update_mode(track_idx: number /*i64*/, mode: Animation.UpdateMode): void
        value_track_get_update_mode(track_idx: number /*i64*/): Animation.UpdateMode
        value_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): any
        method_track_get_name(track_idx: number /*i64*/, key_idx: number /*i64*/): StringName
        method_track_get_params(track_idx: number /*i64*/, key_idx: number /*i64*/): Array
        bezier_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, value: number /*f64*/, in_handle: Vector2, out_handle: Vector2): number /*i64*/
        bezier_track_set_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/, value: number /*f64*/): void
        bezier_track_set_key_in_handle(track_idx: number /*i64*/, key_idx: number /*i64*/, in_handle: Vector2, balanced_value_time_ratio: number /*f64*/): void
        bezier_track_set_key_out_handle(track_idx: number /*i64*/, key_idx: number /*i64*/, out_handle: Vector2, balanced_value_time_ratio: number /*f64*/): void
        bezier_track_get_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        bezier_track_get_key_in_handle(track_idx: number /*i64*/, key_idx: number /*i64*/): Vector2
        bezier_track_get_key_out_handle(track_idx: number /*i64*/, key_idx: number /*i64*/): Vector2
        bezier_track_interpolate(track_idx: number /*i64*/, time: number /*f64*/): number /*f64*/
        audio_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, stream: Resource, start_offset: number /*f64*/, end_offset: number /*f64*/): number /*i64*/
        audio_track_set_key_stream(track_idx: number /*i64*/, key_idx: number /*i64*/, stream: Resource): void
        audio_track_set_key_start_offset(track_idx: number /*i64*/, key_idx: number /*i64*/, offset: number /*f64*/): void
        audio_track_set_key_end_offset(track_idx: number /*i64*/, key_idx: number /*i64*/, offset: number /*f64*/): void
        audio_track_get_key_stream(track_idx: number /*i64*/, key_idx: number /*i64*/): Resource
        audio_track_get_key_start_offset(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        audio_track_get_key_end_offset(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        audio_track_set_use_blend(track_idx: number /*i64*/, enable: boolean): void
        audio_track_is_use_blend(track_idx: number /*i64*/): boolean
        animation_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, animation: StringName): number /*i64*/
        animation_track_set_key_animation(track_idx: number /*i64*/, key_idx: number /*i64*/, animation: StringName): void
        animation_track_get_key_animation(track_idx: number /*i64*/, key_idx: number /*i64*/): StringName
        set_length(time_sec: number /*f64*/): void
        get_length(): number /*f64*/
        set_loop_mode(loop_mode: Animation.LoopMode): void
        get_loop_mode(): Animation.LoopMode
        set_step(size_sec: number /*f64*/): void
        get_step(): number /*f64*/
        clear(): void
        copy_track(track_idx: number /*i64*/, to_animation: Animation): void
        compress(page_size: number /*i64*/, fps: number /*i64*/, split_tolerance: number /*f64*/): void
    }
    class AnimationBezierTrackEdit extends Control {
        _clear_selection(): void
        _clear_selection_for_anim(_unnamed_arg0: Animation): void
        _select_at_anim(_unnamed_arg0: Animation, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*f64*/): void
        _update_hidden_tracks_after(_unnamed_arg0: number /*i64*/): void
        _update_locked_tracks_after(_unnamed_arg0: number /*i64*/): void
        _bezier_track_insert_key(_unnamed_arg0: number /*i64*/, _unnamed_arg1: number /*f64*/, _unnamed_arg2: number /*f64*/, _unnamed_arg3: Vector2, _unnamed_arg4: Vector2, _unnamed_arg5: any /*Animation.HandleMode*/): void
        // SIGNAL: timeline_changed
        // SIGNAL: remove_request
        // SIGNAL: insert_key
        // SIGNAL: select_key
        // SIGNAL: clear_selection
        // SIGNAL: close_request
        // SIGNAL: move_selection_begin
        // SIGNAL: move_selection
        // SIGNAL: move_selection_commit
        // SIGNAL: move_selection_cancel
    }
    class AnimationLibrary extends Resource {
        add_animation(name: StringName, animation: Animation): GodotError
        remove_animation(name: StringName): void
        rename_animation(name: StringName, newname: StringName): void
        has_animation(name: StringName): boolean
        get_animation(name: StringName): Animation
        get_animation_list(): Array
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        // SIGNAL: animation_added
        // SIGNAL: animation_removed
        // SIGNAL: animation_renamed
        // SIGNAL: animation_changed
    }
    class AnimationLibraryEditor extends AcceptDialog {
        _update_editor(mixer: Object): void
        // SIGNAL: update_editor
    }
    namespace AnimationMixer {
        enum AnimationCallbackModeProcess {
            ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS = 0,
            ANIMATION_CALLBACK_MODE_PROCESS_IDLE = 1,
            ANIMATION_CALLBACK_MODE_PROCESS_MANUAL = 2,
        }
        enum AnimationCallbackModeMethod {
            ANIMATION_CALLBACK_MODE_METHOD_DEFERRED = 0,
            ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE = 1,
        }
    }
    class AnimationMixer extends Node {
        add_animation_library(name: StringName, library: AnimationLibrary): GodotError
        remove_animation_library(name: StringName): void
        rename_animation_library(name: StringName, newname: StringName): void
        has_animation_library(name: StringName): boolean
        get_animation_library(name: StringName): AnimationLibrary
        get_animation_library_list(): Array
        has_animation(name: StringName): boolean
        get_animation(name: StringName): Animation
        get_animation_list(): PackedStringArray
        set_active(active: boolean): void
        is_active(): boolean
        set_deterministic(deterministic: boolean): void
        is_deterministic(): boolean
        set_root_node(path: NodePath): void
        get_root_node(): NodePath
        set_callback_mode_process(mode: AnimationMixer.AnimationCallbackModeProcess): void
        get_callback_mode_process(): AnimationMixer.AnimationCallbackModeProcess
        set_callback_mode_method(mode: AnimationMixer.AnimationCallbackModeMethod): void
        get_callback_mode_method(): AnimationMixer.AnimationCallbackModeMethod
        set_audio_max_polyphony(max_polyphony: number /*i64*/): void
        get_audio_max_polyphony(): number /*i64*/
        set_root_motion_track(path: NodePath): void
        get_root_motion_track(): NodePath
        get_root_motion_position(): Vector3
        get_root_motion_rotation(): Quaternion
        get_root_motion_scale(): Vector3
        get_root_motion_position_accumulator(): Vector3
        get_root_motion_rotation_accumulator(): Quaternion
        get_root_motion_scale_accumulator(): Vector3
        clear_caches(): void
        advance(delta: number /*f64*/): void
        set_reset_on_save_enabled(enabled: boolean): void
        is_reset_on_save_enabled(): boolean
        _reset(): void
        _restore(backup: any /*AnimatedValuesBackup*/): void
        find_animation(animation: Animation): StringName
        find_animation_library(animation: Animation): StringName
        // SIGNAL: mixer_updated
        // SIGNAL: animation_list_changed
        // SIGNAL: animation_libraries_updated
        // SIGNAL: animation_finished
        // SIGNAL: animation_started
        // SIGNAL: caches_cleared
    }
    namespace AnimationNode {
        enum FilterAction {
            FILTER_IGNORE = 0,
            FILTER_PASS = 1,
            FILTER_STOP = 2,
            FILTER_BLEND = 3,
        }
    }
    class AnimationNode extends Resource {
        add_input(name: string): boolean
        remove_input(index: number /*i64*/): void
        set_input_name(input: number /*i64*/, name: string): boolean
        get_input_name(input: number /*i64*/): string
        get_input_count(): number /*i64*/
        find_input(name: string): number /*i64*/
        set_filter_path(path: NodePath, enable: boolean): void
        is_path_filtered(path: NodePath): boolean
        set_filter_enabled(enable: boolean): void
        is_filter_enabled(): boolean
        _set_filters(filters: Array): void
        _get_filters(): Array
        blend_animation(animation: StringName, time: number /*f64*/, delta: number /*f64*/, seeked: boolean, is_external_seeking: boolean, blend: number /*f64*/, looped_flag: Animation.LoopedFlag): void
        blend_node(name: StringName, node: AnimationNode, time: number /*f64*/, seek: boolean, is_external_seeking: boolean, blend: number /*f64*/, filter: AnimationNode.FilterAction, sync: boolean, test_only: boolean): number /*f64*/
        blend_input(input_index: number /*i64*/, time: number /*f64*/, seek: boolean, is_external_seeking: boolean, blend: number /*f64*/, filter: AnimationNode.FilterAction, sync: boolean, test_only: boolean): number /*f64*/
        set_parameter(name: StringName, value: any): void
        get_parameter(name: StringName): any
        // SIGNAL: tree_changed
        // SIGNAL: animation_node_renamed
        // SIGNAL: animation_node_removed
    }
    class AnimationNodeAdd2 extends AnimationNodeSync {
    }
    class AnimationNodeAdd3 extends AnimationNodeSync {
    }
    namespace AnimationNodeAnimation {
        enum PlayMode {
            PLAY_MODE_FORWARD = 0,
            PLAY_MODE_BACKWARD = 1,
        }
    }
    class AnimationNodeAnimation extends AnimationRootNode {
        set_animation(name: StringName): void
        get_animation(): StringName
        set_play_mode(mode: AnimationNodeAnimation.PlayMode): void
        get_play_mode(): AnimationNodeAnimation.PlayMode
    }
    class AnimationNodeBlend2 extends AnimationNodeSync {
    }
    class AnimationNodeBlend3 extends AnimationNodeSync {
    }
    namespace AnimationNodeBlendSpace1D {
        enum BlendMode {
            BLEND_MODE_INTERPOLATED = 0,
            BLEND_MODE_DISCRETE = 1,
            BLEND_MODE_DISCRETE_CARRY = 2,
        }
    }
    class AnimationNodeBlendSpace1D extends AnimationRootNode {
        add_blend_point(node: AnimationRootNode, pos: number /*f64*/, at_index: number /*i64*/): void
        set_blend_point_position(point: number /*i64*/, pos: number /*f64*/): void
        get_blend_point_position(point: number /*i64*/): number /*f64*/
        set_blend_point_node(point: number /*i64*/, node: AnimationRootNode): void
        get_blend_point_node(point: number /*i64*/): AnimationRootNode
        remove_blend_point(point: number /*i64*/): void
        get_blend_point_count(): number /*i64*/
        set_min_space(min_space: number /*f64*/): void
        get_min_space(): number /*f64*/
        set_max_space(max_space: number /*f64*/): void
        get_max_space(): number /*f64*/
        set_snap(snap: number /*f64*/): void
        get_snap(): number /*f64*/
        set_value_label(text: string): void
        get_value_label(): string
        set_blend_mode(mode: AnimationNodeBlendSpace1D.BlendMode): void
        get_blend_mode(): AnimationNodeBlendSpace1D.BlendMode
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        _add_blend_point(index: number /*i64*/, node: AnimationRootNode): void
    }
    class AnimationNodeBlendSpace1DEditor extends AnimationTreeNodeEditorPlugin {
        _update_space(): void
        _update_tool_erase(): void
        _update_edited_point_pos(): void
    }
    namespace AnimationNodeBlendSpace2D {
        enum BlendMode {
            BLEND_MODE_INTERPOLATED = 0,
            BLEND_MODE_DISCRETE = 1,
            BLEND_MODE_DISCRETE_CARRY = 2,
        }
    }
    class AnimationNodeBlendSpace2D extends AnimationRootNode {
        add_blend_point(node: AnimationRootNode, pos: Vector2, at_index: number /*i64*/): void
        set_blend_point_position(point: number /*i64*/, pos: Vector2): void
        get_blend_point_position(point: number /*i64*/): Vector2
        set_blend_point_node(point: number /*i64*/, node: AnimationRootNode): void
        get_blend_point_node(point: number /*i64*/): AnimationRootNode
        remove_blend_point(point: number /*i64*/): void
        get_blend_point_count(): number /*i64*/
        add_triangle(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/, at_index: number /*i64*/): void
        get_triangle_point(triangle: number /*i64*/, point: number /*i64*/): number /*i64*/
        remove_triangle(triangle: number /*i64*/): void
        get_triangle_count(): number /*i64*/
        set_min_space(min_space: Vector2): void
        get_min_space(): Vector2
        set_max_space(max_space: Vector2): void
        get_max_space(): Vector2
        set_snap(snap: Vector2): void
        get_snap(): Vector2
        set_x_label(text: string): void
        get_x_label(): string
        set_y_label(text: string): void
        get_y_label(): string
        _add_blend_point(index: number /*i64*/, node: AnimationRootNode): void
        _set_triangles(triangles: PackedInt32Array): void
        _get_triangles(): PackedInt32Array
        set_auto_triangles(enable: boolean): void
        get_auto_triangles(): boolean
        set_blend_mode(mode: AnimationNodeBlendSpace2D.BlendMode): void
        get_blend_mode(): AnimationNodeBlendSpace2D.BlendMode
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        _update_triangles(): void
        // SIGNAL: triangles_updated
    }
    class AnimationNodeBlendSpace2DEditor extends AnimationTreeNodeEditorPlugin {
        _update_space(): void
        _update_tool_erase(): void
        _update_edited_point_pos(): void
    }
    class AnimationNodeBlendTree extends AnimationRootNode {
        static readonly CONNECTION_OK = 0
        static readonly CONNECTION_ERROR_NO_INPUT = 1
        static readonly CONNECTION_ERROR_NO_INPUT_INDEX = 2
        static readonly CONNECTION_ERROR_NO_OUTPUT = 3
        static readonly CONNECTION_ERROR_SAME_NODE = 4
        static readonly CONNECTION_ERROR_CONNECTION_EXISTS = 5
        add_node(name: StringName, node: AnimationNode, position: Vector2): void
        get_node(name: StringName): AnimationNode
        remove_node(name: StringName): void
        rename_node(name: StringName, new_name: StringName): void
        has_node(name: StringName): boolean
        connect_node(input_node: StringName, input_index: number /*i64*/, output_node: StringName): void
        disconnect_node(input_node: StringName, input_index: number /*i64*/): void
        set_node_position(name: StringName, position: Vector2): void
        get_node_position(name: StringName): Vector2
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        // SIGNAL: node_changed
    }
    class AnimationNodeBlendTreeEditor extends AnimationTreeNodeEditorPlugin {
        update_graph(): void
        _update_filters(_unnamed_arg0: AnimationNode): boolean
    }
    namespace AnimationNodeOneShot {
        enum OneShotRequest {
            ONE_SHOT_REQUEST_NONE = 0,
            ONE_SHOT_REQUEST_FIRE = 1,
            ONE_SHOT_REQUEST_ABORT = 2,
            ONE_SHOT_REQUEST_FADE_OUT = 3,
        }
        enum MixMode {
            MIX_MODE_BLEND = 0,
            MIX_MODE_ADD = 1,
        }
    }
    class AnimationNodeOneShot extends AnimationNodeSync {
        set_fadein_time(time: number /*f64*/): void
        get_fadein_time(): number /*f64*/
        set_fadein_curve(curve: Curve): void
        get_fadein_curve(): Curve
        set_fadeout_time(time: number /*f64*/): void
        get_fadeout_time(): number /*f64*/
        set_fadeout_curve(curve: Curve): void
        get_fadeout_curve(): Curve
        set_autorestart(active: boolean): void
        has_autorestart(): boolean
        set_autorestart_delay(time: number /*f64*/): void
        get_autorestart_delay(): number /*f64*/
        set_autorestart_random_delay(time: number /*f64*/): void
        get_autorestart_random_delay(): number /*f64*/
        set_mix_mode(mode: AnimationNodeOneShot.MixMode): void
        get_mix_mode(): AnimationNodeOneShot.MixMode
    }
    class AnimationNodeOutput extends AnimationNode {
    }
    namespace AnimationNodeStateMachine {
        enum StateMachineType {
            STATE_MACHINE_TYPE_ROOT = 0,
            STATE_MACHINE_TYPE_NESTED = 1,
            STATE_MACHINE_TYPE_GROUPED = 2,
        }
    }
    class AnimationNodeStateMachine extends AnimationRootNode {
        add_node(name: StringName, node: AnimationNode, position: Vector2): void
        replace_node(name: StringName, node: AnimationNode): void
        get_node(name: StringName): AnimationNode
        remove_node(name: StringName): void
        rename_node(name: StringName, new_name: StringName): void
        has_node(name: StringName): boolean
        get_node_name(node: AnimationNode): StringName
        set_node_position(name: StringName, position: Vector2): void
        get_node_position(name: StringName): Vector2
        has_transition(from: StringName, to: StringName): boolean
        add_transition(from: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void
        get_transition(idx: number /*i64*/): AnimationNodeStateMachineTransition
        get_transition_from(idx: number /*i64*/): StringName
        get_transition_to(idx: number /*i64*/): StringName
        get_transition_count(): number /*i64*/
        remove_transition_by_index(idx: number /*i64*/): void
        remove_transition(from: StringName, to: StringName): void
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        set_state_machine_type(state_machine_type: AnimationNodeStateMachine.StateMachineType): void
        get_state_machine_type(): AnimationNodeStateMachine.StateMachineType
        set_allow_transition_to_self(enable: boolean): void
        is_allow_transition_to_self(): boolean
        set_reset_ends(enable: boolean): void
        are_ends_reset(): boolean
    }
    class AnimationNodeStateMachineEditor extends AnimationTreeNodeEditorPlugin {
        _update_graph(): void
        _open_editor(_unnamed_arg0: string): void
        _connect_to(_unnamed_arg0: number /*i64*/): void
        _stop_connecting(): void
        _delete_selected(): void
        _delete_all(): void
        _delete_tree_draw(): void
    }
    class AnimationNodeStateMachinePlayback extends Resource {
        travel(to_node: StringName, reset_on_teleport: boolean): void
        start(node: StringName, reset: boolean): void
        next(): void
        stop(): void
        is_playing(): boolean
        get_current_node(): StringName
        get_current_play_position(): number /*f64*/
        get_current_length(): number /*f64*/
        get_fading_from_node(): StringName
        get_travel_path(): Array
    }
    namespace AnimationNodeStateMachineTransition {
        enum SwitchMode {
            SWITCH_MODE_IMMEDIATE = 0,
            SWITCH_MODE_SYNC = 1,
            SWITCH_MODE_AT_END = 2,
        }
        enum AdvanceMode {
            ADVANCE_MODE_DISABLED = 0,
            ADVANCE_MODE_ENABLED = 1,
            ADVANCE_MODE_AUTO = 2,
        }
    }
    class AnimationNodeStateMachineTransition extends Resource {
        set_switch_mode(mode: AnimationNodeStateMachineTransition.SwitchMode): void
        get_switch_mode(): AnimationNodeStateMachineTransition.SwitchMode
        set_advance_mode(mode: AnimationNodeStateMachineTransition.AdvanceMode): void
        get_advance_mode(): AnimationNodeStateMachineTransition.AdvanceMode
        set_advance_condition(name: StringName): void
        get_advance_condition(): StringName
        set_xfade_time(secs: number /*f64*/): void
        get_xfade_time(): number /*f64*/
        set_xfade_curve(curve: Curve): void
        get_xfade_curve(): Curve
        set_reset(reset: boolean): void
        is_reset(): boolean
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        set_advance_expression(text: string): void
        get_advance_expression(): string
        // SIGNAL: advance_condition_changed
    }
    class AnimationNodeSub2 extends AnimationNodeSync {
    }
    class AnimationNodeSync extends AnimationNode {
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
    }
    class AnimationNodeTimeScale extends AnimationNode {
    }
    class AnimationNodeTimeSeek extends AnimationNode {
    }
    class AnimationNodeTransition extends AnimationNodeSync {
        set_input_count(input_count: number /*i64*/): void
        set_input_as_auto_advance(input: number /*i64*/, enable: boolean): void
        is_input_set_as_auto_advance(input: number /*i64*/): boolean
        set_input_reset(input: number /*i64*/, enable: boolean): void
        is_input_reset(input: number /*i64*/): boolean
        set_xfade_time(time: number /*f64*/): void
        get_xfade_time(): number /*f64*/
        set_xfade_curve(curve: Curve): void
        get_xfade_curve(): Curve
        set_allow_transition_to_self(enable: boolean): void
        is_allow_transition_to_self(): boolean
    }
    namespace AnimationPlayer {
        enum AnimationProcessCallback {
            ANIMATION_PROCESS_PHYSICS = 0,
            ANIMATION_PROCESS_IDLE = 1,
            ANIMATION_PROCESS_MANUAL = 2,
        }
        enum AnimationMethodCallMode {
            ANIMATION_METHOD_CALL_DEFERRED = 0,
            ANIMATION_METHOD_CALL_IMMEDIATE = 1,
        }
    }
    class AnimationPlayer extends AnimationMixer {
        animation_set_next(animation_from: StringName, animation_to: StringName): void
        animation_get_next(animation_from: StringName): StringName
        set_blend_time(animation_from: StringName, animation_to: StringName, sec: number /*f64*/): void
        get_blend_time(animation_from: StringName, animation_to: StringName): number /*f64*/
        set_default_blend_time(sec: number /*f64*/): void
        get_default_blend_time(): number /*f64*/
        play(name: StringName, custom_blend: number /*f64*/, custom_speed: number /*f64*/, from_end: boolean): void
        play_backwards(name: StringName, custom_blend: number /*f64*/): void
        pause(): void
        stop(keep_state: boolean): void
        is_playing(): boolean
        set_current_animation(animation: string): void
        get_current_animation(): string
        set_assigned_animation(animation: string): void
        get_assigned_animation(): string
        queue(name: StringName): void
        get_queue(): PackedStringArray
        clear_queue(): void
        set_speed_scale(speed: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        get_playing_speed(): number /*f64*/
        set_autoplay(name: string): void
        get_autoplay(): string
        set_movie_quit_on_finish_enabled(enabled: boolean): void
        is_movie_quit_on_finish_enabled(): boolean
        get_current_animation_position(): number /*f64*/
        get_current_animation_length(): number /*f64*/
        seek(seconds: number /*f64*/, update: boolean, update_only: boolean): void
        set_process_callback(mode: AnimationPlayer.AnimationProcessCallback): void
        get_process_callback(): AnimationPlayer.AnimationProcessCallback
        set_method_call_mode(mode: AnimationPlayer.AnimationMethodCallMode): void
        get_method_call_mode(): AnimationPlayer.AnimationMethodCallMode
        set_root(path: NodePath): void
        get_root(): NodePath
        // SIGNAL: current_animation_changed
        // SIGNAL: animation_changed
    }
    class AnimationPlayerEditor extends VBoxContainer {
        _animation_player_changed(_unnamed_arg0: Object): void
        _start_onion_skinning(): void
        _stop_onion_skinning(): void
        // SIGNAL: animation_selected
    }
    class AnimationPlayerEditorPlugin extends EditorPlugin {
    }
    class AnimationRootNode extends AnimationNode {
    }
    class AnimationTimelineEdit extends Range {
        update_values(): void
        // SIGNAL: zoom_changed
        // SIGNAL: name_limit_changed
        // SIGNAL: timeline_changed
        // SIGNAL: track_added
        // SIGNAL: length_changed
    }
    class AnimationTrackEditDefaultPlugin extends AnimationTrackEditPlugin {
    }
    class AnimationTrackEditPlugin extends RefCounted {
    }
    class AnimationTrackEditor extends VBoxContainer {
        _animation_update(): void
        _track_grab_focus(_unnamed_arg0: number /*i64*/): void
        _redraw_tracks(): void
        _clear_selection_for_anim(_unnamed_arg0: Animation): void
        _select_at_anim(_unnamed_arg0: Animation, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*f64*/): void
        _clear_selection(_unnamed_arg0: boolean): void
        _bezier_track_set_key_handle_mode(animation: Animation, track_idx: number /*i64*/, key_idx: number /*i64*/, key_handle_mode: any /*Animation.HandleMode*/, key_handle_set_mode: any /*Animation.HandleSetMode*/): void
        // SIGNAL: timeline_changed
        // SIGNAL: keying_changed
        // SIGNAL: animation_len_changed
        // SIGNAL: animation_step_changed
    }
    class AnimationTrackKeyEditEditorPlugin extends EditorPlugin {
    }
    namespace AnimationTree {
        enum AnimationProcessCallback {
            ANIMATION_PROCESS_PHYSICS = 0,
            ANIMATION_PROCESS_IDLE = 1,
            ANIMATION_PROCESS_MANUAL = 2,
        }
    }
    class AnimationTree extends AnimationMixer {
        set_tree_root(animation_node: AnimationRootNode): void
        get_tree_root(): AnimationRootNode
        set_advance_expression_base_node(path: NodePath): void
        get_advance_expression_base_node(): NodePath
        set_animation_player(path: NodePath): void
        get_animation_player(): NodePath
        _update_properties(): void
        set_process_callback(mode: AnimationTree.AnimationProcessCallback): void
        get_process_callback(): AnimationTree.AnimationProcessCallback
        // SIGNAL: animation_player_changed
    }
    class AnimationTreeEditor extends VBoxContainer {
    }
    class AnimationTreeEditorPlugin extends EditorPlugin {
    }
    class AnimationTreeNodeEditorPlugin extends VBoxContainer {
    }
    namespace Area2D {
        enum SpaceOverride {
            SPACE_OVERRIDE_DISABLED = 0,
            SPACE_OVERRIDE_COMBINE = 1,
            SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            SPACE_OVERRIDE_REPLACE = 3,
            SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
    }
    class Area2D extends CollisionObject2D {
        set_gravity_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_gravity_space_override_mode(): Area2D.SpaceOverride
        set_gravity_is_point(enable: boolean): void
        is_gravity_a_point(): boolean
        set_gravity_point_unit_distance(distance_scale: number /*f64*/): void
        get_gravity_point_unit_distance(): number /*f64*/
        set_gravity_point_center(center: Vector2): void
        get_gravity_point_center(): Vector2
        set_gravity_direction(direction: Vector2): void
        get_gravity_direction(): Vector2
        set_gravity(gravity: number /*f64*/): void
        get_gravity(): number /*f64*/
        set_linear_damp_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_linear_damp_space_override_mode(): Area2D.SpaceOverride
        set_angular_damp_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_angular_damp_space_override_mode(): Area2D.SpaceOverride
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        set_monitoring(enable: boolean): void
        is_monitoring(): boolean
        set_monitorable(enable: boolean): void
        is_monitorable(): boolean
        get_overlapping_bodies(): Array
        get_overlapping_areas(): Array
        has_overlapping_bodies(): boolean
        has_overlapping_areas(): boolean
        overlaps_body(body: Node): boolean
        overlaps_area(area: Node): boolean
        set_audio_bus_name(name: StringName): void
        get_audio_bus_name(): StringName
        set_audio_bus_override(enable: boolean): void
        is_overriding_audio_bus(): boolean
        // SIGNAL: body_shape_entered
        // SIGNAL: body_shape_exited
        // SIGNAL: body_entered
        // SIGNAL: body_exited
        // SIGNAL: area_shape_entered
        // SIGNAL: area_shape_exited
        // SIGNAL: area_entered
        // SIGNAL: area_exited
    }
    namespace Area3D {
        enum SpaceOverride {
            SPACE_OVERRIDE_DISABLED = 0,
            SPACE_OVERRIDE_COMBINE = 1,
            SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            SPACE_OVERRIDE_REPLACE = 3,
            SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
    }
    class Area3D extends CollisionObject3D {
        set_gravity_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_gravity_space_override_mode(): Area3D.SpaceOverride
        set_gravity_is_point(enable: boolean): void
        is_gravity_a_point(): boolean
        set_gravity_point_unit_distance(distance_scale: number /*f64*/): void
        get_gravity_point_unit_distance(): number /*f64*/
        set_gravity_point_center(center: Vector3): void
        get_gravity_point_center(): Vector3
        set_gravity_direction(direction: Vector3): void
        get_gravity_direction(): Vector3
        set_gravity(gravity: number /*f64*/): void
        get_gravity(): number /*f64*/
        set_linear_damp_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_linear_damp_space_override_mode(): Area3D.SpaceOverride
        set_angular_damp_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_angular_damp_space_override_mode(): Area3D.SpaceOverride
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        set_wind_force_magnitude(wind_force_magnitude: number /*f64*/): void
        get_wind_force_magnitude(): number /*f64*/
        set_wind_attenuation_factor(wind_attenuation_factor: number /*f64*/): void
        get_wind_attenuation_factor(): number /*f64*/
        set_wind_source_path(wind_source_path: NodePath): void
        get_wind_source_path(): NodePath
        set_monitorable(enable: boolean): void
        is_monitorable(): boolean
        set_monitoring(enable: boolean): void
        is_monitoring(): boolean
        get_overlapping_bodies(): Array
        get_overlapping_areas(): Array
        has_overlapping_bodies(): boolean
        has_overlapping_areas(): boolean
        overlaps_body(body: Node): boolean
        overlaps_area(area: Node): boolean
        set_audio_bus_override(enable: boolean): void
        is_overriding_audio_bus(): boolean
        set_audio_bus_name(name: StringName): void
        get_audio_bus_name(): StringName
        set_use_reverb_bus(enable: boolean): void
        is_using_reverb_bus(): boolean
        set_reverb_bus_name(name: StringName): void
        get_reverb_bus_name(): StringName
        set_reverb_amount(amount: number /*f64*/): void
        get_reverb_amount(): number /*f64*/
        set_reverb_uniformity(amount: number /*f64*/): void
        get_reverb_uniformity(): number /*f64*/
        // SIGNAL: body_shape_entered
        // SIGNAL: body_shape_exited
        // SIGNAL: body_entered
        // SIGNAL: body_exited
        // SIGNAL: area_shape_entered
        // SIGNAL: area_shape_exited
        // SIGNAL: area_entered
        // SIGNAL: area_exited
    }
    class ArrayMesh extends Mesh {
        add_blend_shape(name: StringName): void
        get_blend_shape_count(): number /*i64*/
        get_blend_shape_name(index: number /*i64*/): StringName
        set_blend_shape_name(index: number /*i64*/, name: StringName): void
        clear_blend_shapes(): void
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        get_blend_shape_mode(): Mesh.BlendShapeMode
        add_surface_from_arrays(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array, lods: Dictionary, flags: Mesh.ArrayFormat): void
        clear_surfaces(): void
        surface_update_vertex_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        surface_update_attribute_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        surface_update_skin_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        surface_get_array_len(surf_idx: number /*i64*/): number /*i64*/
        surface_get_array_index_len(surf_idx: number /*i64*/): number /*i64*/
        surface_get_format(surf_idx: number /*i64*/): Mesh.ArrayFormat
        surface_get_primitive_type(surf_idx: number /*i64*/): Mesh.PrimitiveType
        surface_find_by_name(name: string): number /*i64*/
        surface_set_name(surf_idx: number /*i64*/, name: string): void
        surface_get_name(surf_idx: number /*i64*/): string
        regen_normal_maps(): void
        lightmap_unwrap(transform: Transform3D, texel_size: number /*f64*/): GodotError
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        set_shadow_mesh(mesh: ArrayMesh): void
        get_shadow_mesh(): ArrayMesh
        _set_blend_shape_names(blend_shape_names: PackedStringArray): void
        _get_blend_shape_names(): PackedStringArray
        _set_surfaces(surfaces: Array): void
        _get_surfaces(): Array
    }
    class ArrayOccluder3D extends Occluder3D {
        set_arrays(vertices: PackedVector3Array, indices: PackedInt32Array): void
        set_vertices(vertices: PackedVector3Array): void
        set_indices(indices: PackedInt32Array): void
    }
    namespace AspectRatioContainer {
        enum StretchMode {
            STRETCH_WIDTH_CONTROLS_HEIGHT = 0,
            STRETCH_HEIGHT_CONTROLS_WIDTH = 1,
            STRETCH_FIT = 2,
            STRETCH_COVER = 3,
        }
        enum AlignmentMode {
            ALIGNMENT_BEGIN = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_END = 2,
        }
    }
    class AspectRatioContainer extends Container {
        set_ratio(ratio: number /*f64*/): void
        get_ratio(): number /*f64*/
        set_stretch_mode(stretch_mode: AspectRatioContainer.StretchMode): void
        get_stretch_mode(): AspectRatioContainer.StretchMode
        set_alignment_horizontal(alignment_horizontal: AspectRatioContainer.AlignmentMode): void
        get_alignment_horizontal(): AspectRatioContainer.AlignmentMode
        set_alignment_vertical(alignment_vertical: AspectRatioContainer.AlignmentMode): void
        get_alignment_vertical(): AspectRatioContainer.AlignmentMode
    }
    class AssetLibraryEditorPlugin extends EditorPlugin {
    }
    class AtlasMergingDialog extends ConfirmationDialog {
    }
    class AtlasTexture extends Texture2D {
        set_atlas(atlas: Texture2D): void
        get_atlas(): Texture2D
        set_region(region: Rect2): void
        get_region(): Rect2
        set_margin(margin: Rect2): void
        get_margin(): Rect2
        set_filter_clip(enable: boolean): void
        has_filter_clip(): boolean
    }
    class AtlasTileProxyObject extends Object {
        // SIGNAL: changed
    }
    class AudioBusLayout extends Resource {
    }
    class AudioBusesEditorPlugin extends EditorPlugin {
    }
    class AudioEffect extends Resource {
    }
    class AudioEffectAmplify extends AudioEffect {
        set_volume_db(volume: number /*f64*/): void
        get_volume_db(): number /*f64*/
    }
    class AudioEffectBandLimitFilter extends AudioEffectFilter {
    }
    class AudioEffectBandPassFilter extends AudioEffectFilter {
    }
    class AudioEffectCapture extends AudioEffect {
        can_get_buffer(frames: number /*i64*/): boolean
        get_buffer(frames: number /*i64*/): PackedVector2Array
        clear_buffer(): void
        set_buffer_length(buffer_length_seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
        get_frames_available(): number /*i64*/
        get_discarded_frames(): number /*i64*/
        get_buffer_length_frames(): number /*i64*/
        get_pushed_frames(): number /*i64*/
    }
    class AudioEffectChorus extends AudioEffect {
        set_voice_count(voices: number /*i64*/): void
        get_voice_count(): number /*i64*/
        set_voice_delay_ms(voice_idx: number /*i64*/, delay_ms: number /*f64*/): void
        get_voice_delay_ms(voice_idx: number /*i64*/): number /*f64*/
        set_voice_rate_hz(voice_idx: number /*i64*/, rate_hz: number /*f64*/): void
        get_voice_rate_hz(voice_idx: number /*i64*/): number /*f64*/
        set_voice_depth_ms(voice_idx: number /*i64*/, depth_ms: number /*f64*/): void
        get_voice_depth_ms(voice_idx: number /*i64*/): number /*f64*/
        set_voice_level_db(voice_idx: number /*i64*/, level_db: number /*f64*/): void
        get_voice_level_db(voice_idx: number /*i64*/): number /*f64*/
        set_voice_cutoff_hz(voice_idx: number /*i64*/, cutoff_hz: number /*f64*/): void
        get_voice_cutoff_hz(voice_idx: number /*i64*/): number /*f64*/
        set_voice_pan(voice_idx: number /*i64*/, pan: number /*f64*/): void
        get_voice_pan(voice_idx: number /*i64*/): number /*f64*/
        set_wet(amount: number /*f64*/): void
        get_wet(): number /*f64*/
        set_dry(amount: number /*f64*/): void
        get_dry(): number /*f64*/
    }
    class AudioEffectCompressor extends AudioEffect {
        set_threshold(threshold: number /*f64*/): void
        get_threshold(): number /*f64*/
        set_ratio(ratio: number /*f64*/): void
        get_ratio(): number /*f64*/
        set_gain(gain: number /*f64*/): void
        get_gain(): number /*f64*/
        set_attack_us(attack_us: number /*f64*/): void
        get_attack_us(): number /*f64*/
        set_release_ms(release_ms: number /*f64*/): void
        get_release_ms(): number /*f64*/
        set_mix(mix: number /*f64*/): void
        get_mix(): number /*f64*/
        set_sidechain(sidechain: StringName): void
        get_sidechain(): StringName
    }
    class AudioEffectDelay extends AudioEffect {
        set_dry(amount: number /*f64*/): void
        get_dry(): number /*f64*/
        set_tap1_active(amount: boolean): void
        is_tap1_active(): boolean
        set_tap1_delay_ms(amount: number /*f64*/): void
        get_tap1_delay_ms(): number /*f64*/
        set_tap1_level_db(amount: number /*f64*/): void
        get_tap1_level_db(): number /*f64*/
        set_tap1_pan(amount: number /*f64*/): void
        get_tap1_pan(): number /*f64*/
        set_tap2_active(amount: boolean): void
        is_tap2_active(): boolean
        set_tap2_delay_ms(amount: number /*f64*/): void
        get_tap2_delay_ms(): number /*f64*/
        set_tap2_level_db(amount: number /*f64*/): void
        get_tap2_level_db(): number /*f64*/
        set_tap2_pan(amount: number /*f64*/): void
        get_tap2_pan(): number /*f64*/
        set_feedback_active(amount: boolean): void
        is_feedback_active(): boolean
        set_feedback_delay_ms(amount: number /*f64*/): void
        get_feedback_delay_ms(): number /*f64*/
        set_feedback_level_db(amount: number /*f64*/): void
        get_feedback_level_db(): number /*f64*/
        set_feedback_lowpass(amount: number /*f64*/): void
        get_feedback_lowpass(): number /*f64*/
    }
    namespace AudioEffectDistortion {
        enum Mode {
            MODE_CLIP = 0,
            MODE_ATAN = 1,
            MODE_LOFI = 2,
            MODE_OVERDRIVE = 3,
            MODE_WAVESHAPE = 4,
        }
    }
    class AudioEffectDistortion extends AudioEffect {
        set_mode(mode: AudioEffectDistortion.Mode): void
        get_mode(): AudioEffectDistortion.Mode
        set_pre_gain(pre_gain: number /*f64*/): void
        get_pre_gain(): number /*f64*/
        set_keep_hf_hz(keep_hf_hz: number /*f64*/): void
        get_keep_hf_hz(): number /*f64*/
        set_drive(drive: number /*f64*/): void
        get_drive(): number /*f64*/
        set_post_gain(post_gain: number /*f64*/): void
        get_post_gain(): number /*f64*/
    }
    class AudioEffectEQ extends AudioEffect {
        set_band_gain_db(band_idx: number /*i64*/, volume_db: number /*f64*/): void
        get_band_gain_db(band_idx: number /*i64*/): number /*f64*/
        get_band_count(): number /*i64*/
    }
    class AudioEffectEQ10 extends AudioEffectEQ {
    }
    class AudioEffectEQ21 extends AudioEffectEQ {
    }
    class AudioEffectEQ6 extends AudioEffectEQ {
    }
    namespace AudioEffectFilter {
        enum FilterDB {
            FILTER_6DB = 0,
            FILTER_12DB = 1,
            FILTER_18DB = 2,
            FILTER_24DB = 3,
        }
    }
    class AudioEffectFilter extends AudioEffect {
        set_cutoff(freq: number /*f64*/): void
        get_cutoff(): number /*f64*/
        set_resonance(amount: number /*f64*/): void
        get_resonance(): number /*f64*/
        set_gain(amount: number /*f64*/): void
        get_gain(): number /*f64*/
        set_db(amount: AudioEffectFilter.FilterDB): void
        get_db(): AudioEffectFilter.FilterDB
    }
    class AudioEffectHighPassFilter extends AudioEffectFilter {
    }
    class AudioEffectHighShelfFilter extends AudioEffectFilter {
    }
    class AudioEffectInstance extends RefCounted {
    }
    class AudioEffectLimiter extends AudioEffect {
        set_ceiling_db(ceiling: number /*f64*/): void
        get_ceiling_db(): number /*f64*/
        set_threshold_db(threshold: number /*f64*/): void
        get_threshold_db(): number /*f64*/
        set_soft_clip_db(soft_clip: number /*f64*/): void
        get_soft_clip_db(): number /*f64*/
        set_soft_clip_ratio(soft_clip: number /*f64*/): void
        get_soft_clip_ratio(): number /*f64*/
    }
    class AudioEffectLowPassFilter extends AudioEffectFilter {
    }
    class AudioEffectLowShelfFilter extends AudioEffectFilter {
    }
    class AudioEffectNotchFilter extends AudioEffectFilter {
    }
    class AudioEffectPanner extends AudioEffect {
        set_pan(cpanume: number /*f64*/): void
        get_pan(): number /*f64*/
    }
    class AudioEffectPhaser extends AudioEffect {
        set_range_min_hz(hz: number /*f64*/): void
        get_range_min_hz(): number /*f64*/
        set_range_max_hz(hz: number /*f64*/): void
        get_range_max_hz(): number /*f64*/
        set_rate_hz(hz: number /*f64*/): void
        get_rate_hz(): number /*f64*/
        set_feedback(fbk: number /*f64*/): void
        get_feedback(): number /*f64*/
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
    }
    namespace AudioEffectPitchShift {
        enum FFTSize {
            FFT_SIZE_256 = 0,
            FFT_SIZE_512 = 1,
            FFT_SIZE_1024 = 2,
            FFT_SIZE_2048 = 3,
            FFT_SIZE_4096 = 4,
            FFT_SIZE_MAX = 5,
        }
    }
    class AudioEffectPitchShift extends AudioEffect {
        set_pitch_scale(rate: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        set_oversampling(amount: number /*i64*/): void
        get_oversampling(): number /*i64*/
        set_fft_size(size: AudioEffectPitchShift.FFTSize): void
        get_fft_size(): AudioEffectPitchShift.FFTSize
    }
    class AudioEffectRecord extends AudioEffect {
        set_recording_active(record: boolean): void
        is_recording_active(): boolean
        set_format(format: AudioStreamWAV.Format): void
        get_format(): AudioStreamWAV.Format
        get_recording(): AudioStreamWAV
    }
    class AudioEffectReverb extends AudioEffect {
        set_predelay_msec(msec: number /*f64*/): void
        get_predelay_msec(): number /*f64*/
        set_predelay_feedback(feedback: number /*f64*/): void
        get_predelay_feedback(): number /*f64*/
        set_room_size(size: number /*f64*/): void
        get_room_size(): number /*f64*/
        set_damping(amount: number /*f64*/): void
        get_damping(): number /*f64*/
        set_spread(amount: number /*f64*/): void
        get_spread(): number /*f64*/
        set_dry(amount: number /*f64*/): void
        get_dry(): number /*f64*/
        set_wet(amount: number /*f64*/): void
        get_wet(): number /*f64*/
        set_hpf(amount: number /*f64*/): void
        get_hpf(): number /*f64*/
    }
    namespace AudioEffectSpectrumAnalyzer {
        enum FFTSize {
            FFT_SIZE_256 = 0,
            FFT_SIZE_512 = 1,
            FFT_SIZE_1024 = 2,
            FFT_SIZE_2048 = 3,
            FFT_SIZE_4096 = 4,
            FFT_SIZE_MAX = 5,
        }
    }
    class AudioEffectSpectrumAnalyzer extends AudioEffect {
        set_buffer_length(seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
        set_tap_back_pos(seconds: number /*f64*/): void
        get_tap_back_pos(): number /*f64*/
        set_fft_size(size: AudioEffectSpectrumAnalyzer.FFTSize): void
        get_fft_size(): AudioEffectSpectrumAnalyzer.FFTSize
    }
    namespace AudioEffectSpectrumAnalyzerInstance {
        enum MagnitudeMode {
            MAGNITUDE_AVERAGE = 0,
            MAGNITUDE_MAX = 1,
        }
    }
    class AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
        get_magnitude_for_frequency_range(from_hz: number /*f64*/, to_hz: number /*f64*/, mode: AudioEffectSpectrumAnalyzerInstance.MagnitudeMode): Vector2
    }
    class AudioEffectStereoEnhance extends AudioEffect {
        set_pan_pullout(amount: number /*f64*/): void
        get_pan_pullout(): number /*f64*/
        set_time_pullout(amount: number /*f64*/): void
        get_time_pullout(): number /*f64*/
        set_surround(amount: number /*f64*/): void
        get_surround(): number /*f64*/
    }
    class AudioListener2D extends Node2D {
        make_current(): void
        clear_current(): void
        is_current(): boolean
    }
    class AudioListener3D extends Node3D {
        make_current(): void
        clear_current(): void
        is_current(): boolean
        get_listener_transform(): Transform3D
    }
    class AudioListener3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class AudioStream extends Resource {
        get_length(): number /*f64*/
        is_monophonic(): boolean
        instantiate_playback(): AudioStreamPlayback
    }
    class AudioStreamEditorPlugin extends EditorPlugin {
    }
    class AudioStreamGenerator extends AudioStream {
        set_mix_rate(hz: number /*f64*/): void
        get_mix_rate(): number /*f64*/
        set_buffer_length(seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
    }
    class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
        push_frame(frame: Vector2): boolean
        can_push_buffer(amount: number /*i64*/): boolean
        push_buffer(frames: PackedVector2Array): boolean
        get_frames_available(): number /*i64*/
        get_skips(): number /*i64*/
        clear_buffer(): void
    }
    class AudioStreamImportSettings extends ConfirmationDialog {
    }
    class AudioStreamMP3 extends AudioStream {
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_loop(enable: boolean): void
        has_loop(): boolean
        set_loop_offset(seconds: number /*f64*/): void
        get_loop_offset(): number /*f64*/
        set_bpm(bpm: number /*f64*/): void
        get_bpm(): number /*f64*/
        set_beat_count(count: number /*i64*/): void
        get_beat_count(): number /*i64*/
        set_bar_beats(count: number /*i64*/): void
        get_bar_beats(): number /*i64*/
    }
    class AudioStreamMicrophone extends AudioStream {
    }
    class AudioStreamOggVorbis extends AudioStream {
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        static load_from_file(path: string): AudioStreamOggVorbis
        set_packet_sequence(packet_sequence: OggPacketSequence): void
        get_packet_sequence(): OggPacketSequence
        set_loop(enable: boolean): void
        has_loop(): boolean
        set_loop_offset(seconds: number /*f64*/): void
        get_loop_offset(): number /*f64*/
        set_bpm(bpm: number /*f64*/): void
        get_bpm(): number /*f64*/
        set_beat_count(count: number /*i64*/): void
        get_beat_count(): number /*i64*/
        set_bar_beats(count: number /*i64*/): void
        get_bar_beats(): number /*i64*/
    }
    class AudioStreamPlayback extends RefCounted {
    }
    class AudioStreamPlaybackOggVorbis extends AudioStreamPlaybackResampled {
    }
    class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
        static readonly INVALID_ID = -1
        play_stream(stream: AudioStream, from_offset: number /*f64*/, volume_db: number /*f64*/, pitch_scale: number /*f64*/): number /*i64*/
        set_stream_volume(stream: number /*i64*/, volume_db: number /*f64*/): void
        set_stream_pitch_scale(stream: number /*i64*/, pitch_scale: number /*f64*/): void
        is_stream_playing(stream: number /*i64*/): boolean
        stop_stream(stream: number /*i64*/): void
    }
    class AudioStreamPlaybackResampled extends AudioStreamPlayback {
        begin_resample(): void
    }
    namespace AudioStreamPlayer {
        enum MixTarget {
            MIX_TARGET_STEREO = 0,
            MIX_TARGET_SURROUND = 1,
            MIX_TARGET_CENTER = 2,
        }
    }
    class AudioStreamPlayer extends Node {
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_pitch_scale(pitch_scale: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        play(from_position: number /*f64*/): void
        seek(to_position: number /*f64*/): void
        stop(): void
        is_playing(): boolean
        get_playback_position(): number /*f64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        set_autoplay(enable: boolean): void
        is_autoplay_enabled(): boolean
        set_mix_target(mix_target: AudioStreamPlayer.MixTarget): void
        get_mix_target(): AudioStreamPlayer.MixTarget
        _set_playing(enable: boolean): void
        _is_active(): boolean
        set_stream_paused(pause: boolean): void
        get_stream_paused(): boolean
        set_max_polyphony(max_polyphony: number /*i64*/): void
        get_max_polyphony(): number /*i64*/
        has_stream_playback(): boolean
        get_stream_playback(): AudioStreamPlayback
        // SIGNAL: finished
    }
    class AudioStreamPlayer2D extends Node2D {
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_pitch_scale(pitch_scale: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        play(from_position: number /*f64*/): void
        seek(to_position: number /*f64*/): void
        stop(): void
        is_playing(): boolean
        get_playback_position(): number /*f64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        set_autoplay(enable: boolean): void
        is_autoplay_enabled(): boolean
        _set_playing(enable: boolean): void
        _is_active(): boolean
        set_max_distance(pixels: number /*f64*/): void
        get_max_distance(): number /*f64*/
        set_attenuation(curve: number /*f64*/): void
        get_attenuation(): number /*f64*/
        set_area_mask(mask: number /*i64*/): void
        get_area_mask(): number /*i64*/
        set_stream_paused(pause: boolean): void
        get_stream_paused(): boolean
        set_max_polyphony(max_polyphony: number /*i64*/): void
        get_max_polyphony(): number /*i64*/
        set_panning_strength(panning_strength: number /*f64*/): void
        get_panning_strength(): number /*f64*/
        has_stream_playback(): boolean
        get_stream_playback(): AudioStreamPlayback
        // SIGNAL: finished
    }
    namespace AudioStreamPlayer3D {
        enum AttenuationModel {
            ATTENUATION_INVERSE_DISTANCE = 0,
            ATTENUATION_INVERSE_SQUARE_DISTANCE = 1,
            ATTENUATION_LOGARITHMIC = 2,
            ATTENUATION_DISABLED = 3,
        }
        enum DopplerTracking {
            DOPPLER_TRACKING_DISABLED = 0,
            DOPPLER_TRACKING_IDLE_STEP = 1,
            DOPPLER_TRACKING_PHYSICS_STEP = 2,
        }
    }
    class AudioStreamPlayer3D extends Node3D {
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_unit_size(unit_size: number /*f64*/): void
        get_unit_size(): number /*f64*/
        set_max_db(max_db: number /*f64*/): void
        get_max_db(): number /*f64*/
        set_pitch_scale(pitch_scale: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        play(from_position: number /*f64*/): void
        seek(to_position: number /*f64*/): void
        stop(): void
        is_playing(): boolean
        get_playback_position(): number /*f64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        set_autoplay(enable: boolean): void
        is_autoplay_enabled(): boolean
        _set_playing(enable: boolean): void
        _is_active(): boolean
        set_max_distance(meters: number /*f64*/): void
        get_max_distance(): number /*f64*/
        set_area_mask(mask: number /*i64*/): void
        get_area_mask(): number /*i64*/
        set_emission_angle(degrees: number /*f64*/): void
        get_emission_angle(): number /*f64*/
        set_emission_angle_enabled(enabled: boolean): void
        is_emission_angle_enabled(): boolean
        set_emission_angle_filter_attenuation_db(db: number /*f64*/): void
        get_emission_angle_filter_attenuation_db(): number /*f64*/
        set_attenuation_filter_cutoff_hz(degrees: number /*f64*/): void
        get_attenuation_filter_cutoff_hz(): number /*f64*/
        set_attenuation_filter_db(db: number /*f64*/): void
        get_attenuation_filter_db(): number /*f64*/
        set_attenuation_model(model: AudioStreamPlayer3D.AttenuationModel): void
        get_attenuation_model(): AudioStreamPlayer3D.AttenuationModel
        set_doppler_tracking(mode: AudioStreamPlayer3D.DopplerTracking): void
        get_doppler_tracking(): AudioStreamPlayer3D.DopplerTracking
        set_stream_paused(pause: boolean): void
        get_stream_paused(): boolean
        set_max_polyphony(max_polyphony: number /*i64*/): void
        get_max_polyphony(): number /*i64*/
        set_panning_strength(panning_strength: number /*f64*/): void
        get_panning_strength(): number /*f64*/
        has_stream_playback(): boolean
        get_stream_playback(): AudioStreamPlayback
        // SIGNAL: finished
    }
    class AudioStreamPlayer3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class AudioStreamPolyphonic extends AudioStream {
        set_polyphony(voices: number /*i64*/): void
        get_polyphony(): number /*i64*/
    }
    class AudioStreamPreviewGenerator extends Node {
        _update_emit(_unnamed_arg0: number /*i64*/): void
        generate_preview(stream: AudioStream): any /*AudioStreamPreview*/
        // SIGNAL: preview_updated
    }
    namespace AudioStreamRandomizer {
        enum PlaybackMode {
            PLAYBACK_RANDOM_NO_REPEATS = 0,
            PLAYBACK_RANDOM = 1,
            PLAYBACK_SEQUENTIAL = 2,
        }
    }
    class AudioStreamRandomizer extends AudioStream {
        add_stream(index: number /*i64*/, stream: AudioStream, weight: number /*f64*/): void
        move_stream(index_from: number /*i64*/, index_to: number /*i64*/): void
        remove_stream(index: number /*i64*/): void
        set_stream(index: number /*i64*/, stream: AudioStream): void
        get_stream(index: number /*i64*/): AudioStream
        set_stream_probability_weight(index: number /*i64*/, weight: number /*f64*/): void
        get_stream_probability_weight(index: number /*i64*/): number /*f64*/
        set_streams_count(count: number /*i64*/): void
        get_streams_count(): number /*i64*/
        set_random_pitch(scale: number /*f64*/): void
        get_random_pitch(): number /*f64*/
        set_random_volume_offset_db(db_offset: number /*f64*/): void
        get_random_volume_offset_db(): number /*f64*/
        set_playback_mode(mode: AudioStreamRandomizer.PlaybackMode): void
        get_playback_mode(): AudioStreamRandomizer.PlaybackMode
    }
    class AudioStreamRandomizerEditorPlugin extends EditorPlugin {
    }
    namespace AudioStreamWAV {
        enum Format {
            FORMAT_8_BITS = 0,
            FORMAT_16_BITS = 1,
            FORMAT_IMA_ADPCM = 2,
        }
        enum LoopMode {
            LOOP_DISABLED = 0,
            LOOP_FORWARD = 1,
            LOOP_PINGPONG = 2,
            LOOP_BACKWARD = 3,
        }
    }
    class AudioStreamWAV extends AudioStream {
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_format(format: AudioStreamWAV.Format): void
        get_format(): AudioStreamWAV.Format
        set_loop_mode(loop_mode: AudioStreamWAV.LoopMode): void
        get_loop_mode(): AudioStreamWAV.LoopMode
        set_loop_begin(loop_begin: number /*i64*/): void
        get_loop_begin(): number /*i64*/
        set_loop_end(loop_end: number /*i64*/): void
        get_loop_end(): number /*i64*/
        set_mix_rate(mix_rate: number /*i64*/): void
        get_mix_rate(): number /*i64*/
        set_stereo(stereo: boolean): void
        is_stereo(): boolean
        save_to_wav(path: string): GodotError
    }
    namespace BackBufferCopy {
        enum CopyMode {
            COPY_MODE_DISABLED = 0,
            COPY_MODE_RECT = 1,
            COPY_MODE_VIEWPORT = 2,
        }
    }
    class BackBufferCopy extends Node2D {
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        set_copy_mode(copy_mode: BackBufferCopy.CopyMode): void
        get_copy_mode(): BackBufferCopy.CopyMode
    }
    class BackgroundProgress extends HBoxContainer {
        _add_task(_unnamed_arg0: string, _unnamed_arg1: string, _unnamed_arg2: number /*i64*/): void
        _task_step(_unnamed_arg0: string, _unnamed_arg1: number /*i64*/): void
        _end_task(_unnamed_arg0: string): void
        _update(): void
    }
    namespace BaseButton {
        enum DrawMode {
            DRAW_NORMAL = 0,
            DRAW_PRESSED = 1,
            DRAW_HOVER = 2,
            DRAW_DISABLED = 3,
            DRAW_HOVER_PRESSED = 4,
        }
        enum ActionMode {
            ACTION_MODE_BUTTON_PRESS = 0,
            ACTION_MODE_BUTTON_RELEASE = 1,
        }
    }
    class BaseButton extends Control {
        set_pressed(pressed: boolean): void
        is_pressed(): boolean
        set_pressed_no_signal(pressed: boolean): void
        is_hovered(): boolean
        set_toggle_mode(enabled: boolean): void
        is_toggle_mode(): boolean
        set_shortcut_in_tooltip(enabled: boolean): void
        is_shortcut_in_tooltip_enabled(): boolean
        set_disabled(disabled: boolean): void
        is_disabled(): boolean
        set_action_mode(mode: BaseButton.ActionMode): void
        get_action_mode(): BaseButton.ActionMode
        set_button_mask(mask: MouseButtonMask): void
        get_button_mask(): MouseButtonMask
        get_draw_mode(): BaseButton.DrawMode
        set_keep_pressed_outside(enabled: boolean): void
        is_keep_pressed_outside(): boolean
        set_shortcut_feedback(enabled: boolean): void
        is_shortcut_feedback(): boolean
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
        set_button_group(button_group: ButtonGroup): void
        get_button_group(): ButtonGroup
        // SIGNAL: pressed
        // SIGNAL: button_up
        // SIGNAL: button_down
        // SIGNAL: toggled
    }
    namespace BaseMaterial3D {
        enum TextureParam {
            TEXTURE_ALBEDO = 0,
            TEXTURE_METALLIC = 1,
            TEXTURE_ROUGHNESS = 2,
            TEXTURE_EMISSION = 3,
            TEXTURE_NORMAL = 4,
            TEXTURE_RIM = 5,
            TEXTURE_CLEARCOAT = 6,
            TEXTURE_FLOWMAP = 7,
            TEXTURE_AMBIENT_OCCLUSION = 8,
            TEXTURE_HEIGHTMAP = 9,
            TEXTURE_SUBSURFACE_SCATTERING = 10,
            TEXTURE_SUBSURFACE_TRANSMITTANCE = 11,
            TEXTURE_BACKLIGHT = 12,
            TEXTURE_REFRACTION = 13,
            TEXTURE_DETAIL_MASK = 14,
            TEXTURE_DETAIL_ALBEDO = 15,
            TEXTURE_DETAIL_NORMAL = 16,
            TEXTURE_ORM = 17,
            TEXTURE_MAX = 18,
        }
        enum TextureFilter {
            TEXTURE_FILTER_NEAREST = 0,
            TEXTURE_FILTER_LINEAR = 1,
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 2,
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 3,
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 4,
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 5,
            TEXTURE_FILTER_MAX = 6,
        }
        enum DetailUV {
            DETAIL_UV_1 = 0,
            DETAIL_UV_2 = 1,
        }
        enum Transparency {
            TRANSPARENCY_DISABLED = 0,
            TRANSPARENCY_ALPHA = 1,
            TRANSPARENCY_ALPHA_SCISSOR = 2,
            TRANSPARENCY_ALPHA_HASH = 3,
            TRANSPARENCY_ALPHA_DEPTH_PRE_PASS = 4,
            TRANSPARENCY_MAX = 5,
        }
        enum ShadingMode {
            SHADING_MODE_UNSHADED = 0,
            SHADING_MODE_PER_PIXEL = 1,
            SHADING_MODE_PER_VERTEX = 2,
            SHADING_MODE_MAX = 3,
        }
        enum Feature {
            FEATURE_EMISSION = 0,
            FEATURE_NORMAL_MAPPING = 1,
            FEATURE_RIM = 2,
            FEATURE_CLEARCOAT = 3,
            FEATURE_ANISOTROPY = 4,
            FEATURE_AMBIENT_OCCLUSION = 5,
            FEATURE_HEIGHT_MAPPING = 6,
            FEATURE_SUBSURFACE_SCATTERING = 7,
            FEATURE_SUBSURFACE_TRANSMITTANCE = 8,
            FEATURE_BACKLIGHT = 9,
            FEATURE_REFRACTION = 10,
            FEATURE_DETAIL = 11,
            FEATURE_MAX = 12,
        }
        enum BlendMode {
            BLEND_MODE_MIX = 0,
            BLEND_MODE_ADD = 1,
            BLEND_MODE_SUB = 2,
            BLEND_MODE_MUL = 3,
        }
        enum AlphaAntiAliasing {
            ALPHA_ANTIALIASING_OFF = 0,
            ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE = 1,
            ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE = 2,
        }
        enum DepthDrawMode {
            DEPTH_DRAW_OPAQUE_ONLY = 0,
            DEPTH_DRAW_ALWAYS = 1,
            DEPTH_DRAW_DISABLED = 2,
        }
        enum CullMode {
            CULL_BACK = 0,
            CULL_FRONT = 1,
            CULL_DISABLED = 2,
        }
        enum Flags {
            FLAG_DISABLE_DEPTH_TEST = 0,
            FLAG_ALBEDO_FROM_VERTEX_COLOR = 1,
            FLAG_SRGB_VERTEX_COLOR = 2,
            FLAG_USE_POINT_SIZE = 3,
            FLAG_FIXED_SIZE = 4,
            FLAG_BILLBOARD_KEEP_SCALE = 5,
            FLAG_UV1_USE_TRIPLANAR = 6,
            FLAG_UV2_USE_TRIPLANAR = 7,
            FLAG_UV1_USE_WORLD_TRIPLANAR = 8,
            FLAG_UV2_USE_WORLD_TRIPLANAR = 9,
            FLAG_AO_ON_UV2 = 10,
            FLAG_EMISSION_ON_UV2 = 11,
            FLAG_ALBEDO_TEXTURE_FORCE_SRGB = 12,
            FLAG_DONT_RECEIVE_SHADOWS = 13,
            FLAG_DISABLE_AMBIENT_LIGHT = 14,
            FLAG_USE_SHADOW_TO_OPACITY = 15,
            FLAG_USE_TEXTURE_REPEAT = 16,
            FLAG_INVERT_HEIGHTMAP = 17,
            FLAG_SUBSURFACE_MODE_SKIN = 18,
            FLAG_PARTICLE_TRAILS_MODE = 19,
            FLAG_ALBEDO_TEXTURE_MSDF = 20,
            FLAG_DISABLE_FOG = 21,
            FLAG_MAX = 22,
        }
        enum DiffuseMode {
            DIFFUSE_BURLEY = 0,
            DIFFUSE_LAMBERT = 1,
            DIFFUSE_LAMBERT_WRAP = 2,
            DIFFUSE_TOON = 3,
        }
        enum SpecularMode {
            SPECULAR_SCHLICK_GGX = 0,
            SPECULAR_TOON = 1,
            SPECULAR_DISABLED = 2,
        }
        enum BillboardMode {
            BILLBOARD_DISABLED = 0,
            BILLBOARD_ENABLED = 1,
            BILLBOARD_FIXED_Y = 2,
            BILLBOARD_PARTICLES = 3,
        }
        enum TextureChannel {
            TEXTURE_CHANNEL_RED = 0,
            TEXTURE_CHANNEL_GREEN = 1,
            TEXTURE_CHANNEL_BLUE = 2,
            TEXTURE_CHANNEL_ALPHA = 3,
            TEXTURE_CHANNEL_GRAYSCALE = 4,
        }
        enum EmissionOperator {
            EMISSION_OP_ADD = 0,
            EMISSION_OP_MULTIPLY = 1,
        }
        enum DistanceFadeMode {
            DISTANCE_FADE_DISABLED = 0,
            DISTANCE_FADE_PIXEL_ALPHA = 1,
            DISTANCE_FADE_PIXEL_DITHER = 2,
            DISTANCE_FADE_OBJECT_DITHER = 3,
        }
    }
    class BaseMaterial3D extends Material {
        set_albedo(albedo: Color): void
        get_albedo(): Color
        set_transparency(transparency: BaseMaterial3D.Transparency): void
        get_transparency(): BaseMaterial3D.Transparency
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_shading_mode(shading_mode: BaseMaterial3D.ShadingMode): void
        get_shading_mode(): BaseMaterial3D.ShadingMode
        set_specular(specular: number /*f64*/): void
        get_specular(): number /*f64*/
        set_metallic(metallic: number /*f64*/): void
        get_metallic(): number /*f64*/
        set_roughness(roughness: number /*f64*/): void
        get_roughness(): number /*f64*/
        set_emission(emission: Color): void
        get_emission(): Color
        set_emission_energy_multiplier(emission_energy_multiplier: number /*f64*/): void
        get_emission_energy_multiplier(): number /*f64*/
        set_emission_intensity(emission_energy_multiplier: number /*f64*/): void
        get_emission_intensity(): number /*f64*/
        set_normal_scale(normal_scale: number /*f64*/): void
        get_normal_scale(): number /*f64*/
        set_rim(rim: number /*f64*/): void
        get_rim(): number /*f64*/
        set_rim_tint(rim_tint: number /*f64*/): void
        get_rim_tint(): number /*f64*/
        set_clearcoat(clearcoat: number /*f64*/): void
        get_clearcoat(): number /*f64*/
        set_clearcoat_roughness(clearcoat_roughness: number /*f64*/): void
        get_clearcoat_roughness(): number /*f64*/
        set_anisotropy(anisotropy: number /*f64*/): void
        get_anisotropy(): number /*f64*/
        set_heightmap_scale(heightmap_scale: number /*f64*/): void
        get_heightmap_scale(): number /*f64*/
        set_subsurface_scattering_strength(strength: number /*f64*/): void
        get_subsurface_scattering_strength(): number /*f64*/
        set_transmittance_color(color: Color): void
        get_transmittance_color(): Color
        set_transmittance_depth(depth: number /*f64*/): void
        get_transmittance_depth(): number /*f64*/
        set_transmittance_boost(boost: number /*f64*/): void
        get_transmittance_boost(): number /*f64*/
        set_backlight(backlight: Color): void
        get_backlight(): Color
        set_refraction(refraction: number /*f64*/): void
        get_refraction(): number /*f64*/
        set_point_size(point_size: number /*f64*/): void
        get_point_size(): number /*f64*/
        set_detail_uv(detail_uv: BaseMaterial3D.DetailUV): void
        get_detail_uv(): BaseMaterial3D.DetailUV
        set_blend_mode(blend_mode: BaseMaterial3D.BlendMode): void
        get_blend_mode(): BaseMaterial3D.BlendMode
        set_depth_draw_mode(depth_draw_mode: BaseMaterial3D.DepthDrawMode): void
        get_depth_draw_mode(): BaseMaterial3D.DepthDrawMode
        set_cull_mode(cull_mode: BaseMaterial3D.CullMode): void
        get_cull_mode(): BaseMaterial3D.CullMode
        set_diffuse_mode(diffuse_mode: BaseMaterial3D.DiffuseMode): void
        get_diffuse_mode(): BaseMaterial3D.DiffuseMode
        set_specular_mode(specular_mode: BaseMaterial3D.SpecularMode): void
        get_specular_mode(): BaseMaterial3D.SpecularMode
        set_flag(flag: BaseMaterial3D.Flags, enable: boolean): void
        get_flag(flag: BaseMaterial3D.Flags): boolean
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        set_feature(feature: BaseMaterial3D.Feature, enable: boolean): void
        get_feature(feature: BaseMaterial3D.Feature): boolean
        set_texture(param: BaseMaterial3D.TextureParam, texture: Texture2D): void
        get_texture(param: BaseMaterial3D.TextureParam): Texture2D
        set_detail_blend_mode(detail_blend_mode: BaseMaterial3D.BlendMode): void
        get_detail_blend_mode(): BaseMaterial3D.BlendMode
        set_uv1_scale(scale: Vector3): void
        get_uv1_scale(): Vector3
        set_uv1_offset(offset: Vector3): void
        get_uv1_offset(): Vector3
        set_uv1_triplanar_blend_sharpness(sharpness: number /*f64*/): void
        get_uv1_triplanar_blend_sharpness(): number /*f64*/
        set_uv2_scale(scale: Vector3): void
        get_uv2_scale(): Vector3
        set_uv2_offset(offset: Vector3): void
        get_uv2_offset(): Vector3
        set_uv2_triplanar_blend_sharpness(sharpness: number /*f64*/): void
        get_uv2_triplanar_blend_sharpness(): number /*f64*/
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_particles_anim_h_frames(frames: number /*i64*/): void
        get_particles_anim_h_frames(): number /*i64*/
        set_particles_anim_v_frames(frames: number /*i64*/): void
        get_particles_anim_v_frames(): number /*i64*/
        set_particles_anim_loop(loop: boolean): void
        get_particles_anim_loop(): boolean
        set_heightmap_deep_parallax(enable: boolean): void
        is_heightmap_deep_parallax_enabled(): boolean
        set_heightmap_deep_parallax_min_layers(layer: number /*i64*/): void
        get_heightmap_deep_parallax_min_layers(): number /*i64*/
        set_heightmap_deep_parallax_max_layers(layer: number /*i64*/): void
        get_heightmap_deep_parallax_max_layers(): number /*i64*/
        set_heightmap_deep_parallax_flip_tangent(flip: boolean): void
        get_heightmap_deep_parallax_flip_tangent(): boolean
        set_heightmap_deep_parallax_flip_binormal(flip: boolean): void
        get_heightmap_deep_parallax_flip_binormal(): boolean
        set_grow(amount: number /*f64*/): void
        get_grow(): number /*f64*/
        set_emission_operator(operator: BaseMaterial3D.EmissionOperator): void
        get_emission_operator(): BaseMaterial3D.EmissionOperator
        set_ao_light_affect(amount: number /*f64*/): void
        get_ao_light_affect(): number /*f64*/
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_grow_enabled(enable: boolean): void
        is_grow_enabled(): boolean
        set_metallic_texture_channel(channel: BaseMaterial3D.TextureChannel): void
        get_metallic_texture_channel(): BaseMaterial3D.TextureChannel
        set_roughness_texture_channel(channel: BaseMaterial3D.TextureChannel): void
        get_roughness_texture_channel(): BaseMaterial3D.TextureChannel
        set_ao_texture_channel(channel: BaseMaterial3D.TextureChannel): void
        get_ao_texture_channel(): BaseMaterial3D.TextureChannel
        set_refraction_texture_channel(channel: BaseMaterial3D.TextureChannel): void
        get_refraction_texture_channel(): BaseMaterial3D.TextureChannel
        set_proximity_fade_enabled(enabled: boolean): void
        is_proximity_fade_enabled(): boolean
        set_proximity_fade_distance(distance: number /*f64*/): void
        get_proximity_fade_distance(): number /*f64*/
        set_msdf_pixel_range(range: number /*f64*/): void
        get_msdf_pixel_range(): number /*f64*/
        set_msdf_outline_size(size: number /*f64*/): void
        get_msdf_outline_size(): number /*f64*/
        set_distance_fade(mode: BaseMaterial3D.DistanceFadeMode): void
        get_distance_fade(): BaseMaterial3D.DistanceFadeMode
        set_distance_fade_max_distance(distance: number /*f64*/): void
        get_distance_fade_max_distance(): number /*f64*/
        set_distance_fade_min_distance(distance: number /*f64*/): void
        get_distance_fade_min_distance(): number /*f64*/
    }
    class BitMap extends Resource {
        create(size: Vector2i): void
        create_from_image_alpha(image: Image, threshold: number /*f64*/): void
        set_bitv(position: Vector2i, bit: boolean): void
        set_bit(x: number /*i64*/, y: number /*i64*/, bit: boolean): void
        get_bitv(position: Vector2i): boolean
        get_bit(x: number /*i64*/, y: number /*i64*/): boolean
        set_bit_rect(rect: Rect2i, bit: boolean): void
        get_true_bit_count(): number /*i64*/
        get_size(): Vector2i
        resize(new_size: Vector2i): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        grow_mask(pixels: number /*i64*/, rect: Rect2i): void
        convert_to_image(): Image
        opaque_to_polygons(rect: Rect2i, epsilon: number /*f64*/): Array
    }
    class BitMapEditorPlugin extends EditorPlugin {
    }
    class Bone2D extends Node2D {
        set_rest(rest: Transform2D): void
        get_rest(): Transform2D
        apply_rest(): void
        get_skeleton_rest(): Transform2D
        get_index_in_skeleton(): number /*i64*/
        set_autocalculate_length_and_angle(auto_calculate: boolean): void
        get_autocalculate_length_and_angle(): boolean
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_bone_angle(angle: number /*f64*/): void
        get_bone_angle(): number /*f64*/
    }
    class BoneAttachment3D extends Node3D {
        set_bone_name(bone_name: string): void
        get_bone_name(): string
        set_bone_idx(bone_idx: number /*i64*/): void
        get_bone_idx(): number /*i64*/
        on_bone_pose_update(bone_index: number /*i64*/): void
        set_override_pose(override_pose: boolean): void
        get_override_pose(): boolean
        set_use_external_skeleton(use_external_skeleton: boolean): void
        get_use_external_skeleton(): boolean
        set_external_skeleton(external_skeleton: NodePath): void
        get_external_skeleton(): NodePath
    }
    class BoneMap extends Resource {
        get_profile(): SkeletonProfile
        set_profile(profile: SkeletonProfile): void
        get_skeleton_bone_name(profile_bone_name: StringName): StringName
        set_skeleton_bone_name(profile_bone_name: StringName, skeleton_bone_name: StringName): void
        find_profile_bone_name(skeleton_bone_name: StringName): StringName
        // SIGNAL: bone_map_updated
        // SIGNAL: profile_updated
    }
    class BoneMapEditorPlugin extends EditorPlugin {
    }
    namespace BoxContainer {
        enum AlignmentMode {
            ALIGNMENT_BEGIN = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_END = 2,
        }
    }
    class BoxContainer extends Container {
        add_spacer(begin: boolean): Control
        set_alignment(alignment: BoxContainer.AlignmentMode): void
        get_alignment(): BoxContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
    }
    class BoxMesh extends PrimitiveMesh {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_subdivide_width(subdivide: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_height(divisions: number /*i64*/): void
        get_subdivide_height(): number /*i64*/
        set_subdivide_depth(divisions: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
    }
    class BoxOccluder3D extends Occluder3D {
        set_size(size: Vector3): void
        get_size(): Vector3
    }
    class BoxShape3D extends Shape3D {
        set_size(size: Vector3): void
        get_size(): Vector3
    }
    class Button extends BaseButton {
        set_text(text: string): void
        get_text(): string
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_button_icon(texture: Texture2D): void
        get_button_icon(): Texture2D
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_clip_text(enabled: boolean): void
        get_clip_text(): boolean
        set_text_alignment(alignment: HorizontalAlignment): void
        get_text_alignment(): HorizontalAlignment
        set_icon_alignment(icon_alignment: HorizontalAlignment): void
        get_icon_alignment(): HorizontalAlignment
        set_vertical_icon_alignment(vertical_icon_alignment: VerticalAlignment): void
        get_vertical_icon_alignment(): VerticalAlignment
        set_expand_icon(enabled: boolean): void
        is_expand_icon(): boolean
    }
    class ButtonGroup extends Resource {
        get_pressed_button(): BaseButton
        get_buttons(): Array
        set_allow_unpress(enabled: boolean): void
        is_allow_unpress(): boolean
        // SIGNAL: pressed
    }
    namespace CPUParticles2D {
        enum DrawOrder {
            DRAW_ORDER_INDEX = 0,
            DRAW_ORDER_LIFETIME = 1,
        }
        enum Parameter {
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            PARAM_ANGULAR_VELOCITY = 1,
            PARAM_ORBIT_VELOCITY = 2,
            PARAM_LINEAR_ACCEL = 3,
            PARAM_RADIAL_ACCEL = 4,
            PARAM_TANGENTIAL_ACCEL = 5,
            PARAM_DAMPING = 6,
            PARAM_ANGLE = 7,
            PARAM_SCALE = 8,
            PARAM_HUE_VARIATION = 9,
            PARAM_ANIM_SPEED = 10,
            PARAM_ANIM_OFFSET = 11,
            PARAM_MAX = 12,
        }
        enum ParticleFlags {
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            PARTICLE_FLAG_ROTATE_Y = 1,
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_MAX = 3,
        }
        enum EmissionShape {
            EMISSION_SHAPE_POINT = 0,
            EMISSION_SHAPE_SPHERE = 1,
            EMISSION_SHAPE_SPHERE_SURFACE = 2,
            EMISSION_SHAPE_RECTANGLE = 3,
            EMISSION_SHAPE_POINTS = 4,
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            EMISSION_SHAPE_MAX = 6,
        }
    }
    class CPUParticles2D extends Node2D {
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_lifetime_randomness(random: number /*f64*/): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_speed_scale(scale: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_lifetime_randomness(): number /*f64*/
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_speed_scale(): number /*f64*/
        set_draw_order(order: CPUParticles2D.DrawOrder): void
        get_draw_order(): CPUParticles2D.DrawOrder
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        restart(): void
        set_direction(direction: Vector2): void
        get_direction(): Vector2
        set_spread(spread: number /*f64*/): void
        get_spread(): number /*f64*/
        set_param_min(param: CPUParticles2D.Parameter, value: number /*f64*/): void
        get_param_min(param: CPUParticles2D.Parameter): number /*f64*/
        set_param_max(param: CPUParticles2D.Parameter, value: number /*f64*/): void
        get_param_max(param: CPUParticles2D.Parameter): number /*f64*/
        set_param_curve(param: CPUParticles2D.Parameter, curve: Curve): void
        get_param_curve(param: CPUParticles2D.Parameter): Curve
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Gradient): void
        get_color_ramp(): Gradient
        set_color_initial_ramp(ramp: Gradient): void
        get_color_initial_ramp(): Gradient
        set_particle_flag(particle_flag: CPUParticles2D.ParticleFlags, enable: boolean): void
        get_particle_flag(particle_flag: CPUParticles2D.ParticleFlags): boolean
        set_emission_shape(shape: CPUParticles2D.EmissionShape): void
        get_emission_shape(): CPUParticles2D.EmissionShape
        set_emission_sphere_radius(radius: number /*f64*/): void
        get_emission_sphere_radius(): number /*f64*/
        set_emission_rect_extents(extents: Vector2): void
        get_emission_rect_extents(): Vector2
        set_emission_points(array: PackedVector2Array): void
        get_emission_points(): PackedVector2Array
        set_emission_normals(array: PackedVector2Array): void
        get_emission_normals(): PackedVector2Array
        set_emission_colors(array: PackedColorArray): void
        get_emission_colors(): PackedColorArray
        get_gravity(): Vector2
        set_gravity(accel_vec: Vector2): void
        get_split_scale(): boolean
        set_split_scale(split_scale: boolean): void
        get_scale_curve_x(): Curve
        set_scale_curve_x(scale_curve: Curve): void
        get_scale_curve_y(): Curve
        set_scale_curve_y(scale_curve: Curve): void
        convert_from_particles(particles: Node): void
        // SIGNAL: finished
    }
    class CPUParticles2DEditorPlugin extends EditorPlugin {
    }
    namespace CPUParticles3D {
        enum DrawOrder {
            DRAW_ORDER_INDEX = 0,
            DRAW_ORDER_LIFETIME = 1,
            DRAW_ORDER_VIEW_DEPTH = 2,
        }
        enum Parameter {
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            PARAM_ANGULAR_VELOCITY = 1,
            PARAM_ORBIT_VELOCITY = 2,
            PARAM_LINEAR_ACCEL = 3,
            PARAM_RADIAL_ACCEL = 4,
            PARAM_TANGENTIAL_ACCEL = 5,
            PARAM_DAMPING = 6,
            PARAM_ANGLE = 7,
            PARAM_SCALE = 8,
            PARAM_HUE_VARIATION = 9,
            PARAM_ANIM_SPEED = 10,
            PARAM_ANIM_OFFSET = 11,
            PARAM_MAX = 12,
        }
        enum ParticleFlags {
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            PARTICLE_FLAG_ROTATE_Y = 1,
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_MAX = 3,
        }
        enum EmissionShape {
            EMISSION_SHAPE_POINT = 0,
            EMISSION_SHAPE_SPHERE = 1,
            EMISSION_SHAPE_SPHERE_SURFACE = 2,
            EMISSION_SHAPE_BOX = 3,
            EMISSION_SHAPE_POINTS = 4,
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            EMISSION_SHAPE_RING = 6,
            EMISSION_SHAPE_MAX = 7,
        }
    }
    class CPUParticles3D extends GeometryInstance3D {
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_lifetime_randomness(random: number /*f64*/): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_speed_scale(scale: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_lifetime_randomness(): number /*f64*/
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_speed_scale(): number /*f64*/
        set_draw_order(order: CPUParticles3D.DrawOrder): void
        get_draw_order(): CPUParticles3D.DrawOrder
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        restart(): void
        set_direction(direction: Vector3): void
        get_direction(): Vector3
        set_spread(degrees: number /*f64*/): void
        get_spread(): number /*f64*/
        set_flatness(amount: number /*f64*/): void
        get_flatness(): number /*f64*/
        set_param_min(param: CPUParticles3D.Parameter, value: number /*f64*/): void
        get_param_min(param: CPUParticles3D.Parameter): number /*f64*/
        set_param_max(param: CPUParticles3D.Parameter, value: number /*f64*/): void
        get_param_max(param: CPUParticles3D.Parameter): number /*f64*/
        set_param_curve(param: CPUParticles3D.Parameter, curve: Curve): void
        get_param_curve(param: CPUParticles3D.Parameter): Curve
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Gradient): void
        get_color_ramp(): Gradient
        set_color_initial_ramp(ramp: Gradient): void
        get_color_initial_ramp(): Gradient
        set_particle_flag(particle_flag: CPUParticles3D.ParticleFlags, enable: boolean): void
        get_particle_flag(particle_flag: CPUParticles3D.ParticleFlags): boolean
        set_emission_shape(shape: CPUParticles3D.EmissionShape): void
        get_emission_shape(): CPUParticles3D.EmissionShape
        set_emission_sphere_radius(radius: number /*f64*/): void
        get_emission_sphere_radius(): number /*f64*/
        set_emission_box_extents(extents: Vector3): void
        get_emission_box_extents(): Vector3
        set_emission_points(array: PackedVector3Array): void
        get_emission_points(): PackedVector3Array
        set_emission_normals(array: PackedVector3Array): void
        get_emission_normals(): PackedVector3Array
        set_emission_colors(array: PackedColorArray): void
        get_emission_colors(): PackedColorArray
        set_emission_ring_axis(axis: Vector3): void
        get_emission_ring_axis(): Vector3
        set_emission_ring_height(height: number /*f64*/): void
        get_emission_ring_height(): number /*f64*/
        set_emission_ring_radius(radius: number /*f64*/): void
        get_emission_ring_radius(): number /*f64*/
        set_emission_ring_inner_radius(inner_radius: number /*f64*/): void
        get_emission_ring_inner_radius(): number /*f64*/
        get_gravity(): Vector3
        set_gravity(accel_vec: Vector3): void
        get_split_scale(): boolean
        set_split_scale(split_scale: boolean): void
        get_scale_curve_x(): Curve
        set_scale_curve_x(scale_curve: Curve): void
        get_scale_curve_y(): Curve
        set_scale_curve_y(scale_curve: Curve): void
        get_scale_curve_z(): Curve
        set_scale_curve_z(scale_curve: Curve): void
        convert_from_particles(particles: Node): void
        // SIGNAL: finished
    }
    class CPUParticles3DEditor extends GPUParticles3DEditorBase {
    }
    class CPUParticles3DEditorPlugin extends EditorPlugin {
    }
    class CPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class CSGBox3D extends CSGPrimitive3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_material(material: Material): void
        get_material(): Material
    }
    class CSGCombiner3D extends CSGShape3D {
    }
    class CSGCylinder3D extends CSGPrimitive3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_sides(sides: number /*i64*/): void
        get_sides(): number /*i64*/
        set_cone(cone: boolean): void
        is_cone(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
    }
    class CSGMesh3D extends CSGPrimitive3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_material(material: Material): void
        get_material(): Material
    }
    namespace CSGPolygon3D {
        enum Mode {
            MODE_DEPTH = 0,
            MODE_SPIN = 1,
            MODE_PATH = 2,
        }
        enum PathRotation {
            PATH_ROTATION_POLYGON = 0,
            PATH_ROTATION_PATH = 1,
            PATH_ROTATION_PATH_FOLLOW = 2,
        }
        enum PathIntervalType {
            PATH_INTERVAL_DISTANCE = 0,
            PATH_INTERVAL_SUBDIVIDE = 1,
        }
    }
    class CSGPolygon3D extends CSGPrimitive3D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_mode(mode: CSGPolygon3D.Mode): void
        get_mode(): CSGPolygon3D.Mode
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
        set_spin_degrees(degrees: number /*f64*/): void
        get_spin_degrees(): number /*f64*/
        set_spin_sides(spin_sides: number /*i64*/): void
        get_spin_sides(): number /*i64*/
        set_path_node(path: NodePath): void
        get_path_node(): NodePath
        set_path_interval_type(interval_type: CSGPolygon3D.PathIntervalType): void
        get_path_interval_type(): CSGPolygon3D.PathIntervalType
        set_path_interval(interval: number /*f64*/): void
        get_path_interval(): number /*f64*/
        set_path_simplify_angle(degrees: number /*f64*/): void
        get_path_simplify_angle(): number /*f64*/
        set_path_rotation(path_rotation: CSGPolygon3D.PathRotation): void
        get_path_rotation(): CSGPolygon3D.PathRotation
        set_path_local(enable: boolean): void
        is_path_local(): boolean
        set_path_continuous_u(enable: boolean): void
        is_path_continuous_u(): boolean
        set_path_u_distance(distance: number /*f64*/): void
        get_path_u_distance(): number /*f64*/
        set_path_joined(enable: boolean): void
        is_path_joined(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        _is_editable_3d_polygon(): boolean
        _has_editable_3d_polygon_no_depth(): boolean
    }
    class CSGPrimitive3D extends CSGShape3D {
        set_flip_faces(flip_faces: boolean): void
        get_flip_faces(): boolean
    }
    namespace CSGShape3D {
        enum Operation {
            OPERATION_UNION = 0,
            OPERATION_INTERSECTION = 1,
            OPERATION_SUBTRACTION = 2,
        }
    }
    class CSGShape3D extends GeometryInstance3D {
        _update_shape(): void
        is_root_shape(): boolean
        set_operation(operation: CSGShape3D.Operation): void
        get_operation(): CSGShape3D.Operation
        set_snap(snap: number /*f64*/): void
        get_snap(): number /*f64*/
        set_use_collision(operation: boolean): void
        is_using_collision(): boolean
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_calculate_tangents(enabled: boolean): void
        is_calculating_tangents(): boolean
        get_meshes(): Array
    }
    class CSGShape3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class CSGSphere3D extends CSGPrimitive3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_radial_segments(radial_segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        set_material(material: Material): void
        get_material(): Material
    }
    class CSGTorus3D extends CSGPrimitive3D {
        set_inner_radius(radius: number /*f64*/): void
        get_inner_radius(): number /*f64*/
        set_outer_radius(radius: number /*f64*/): void
        get_outer_radius(): number /*f64*/
        set_sides(sides: number /*i64*/): void
        get_sides(): number /*i64*/
        set_ring_sides(sides: number /*i64*/): void
        get_ring_sides(): number /*i64*/
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
    }
    class CallbackTweener extends Tweener {
        set_delay(delay: number /*f64*/): CallbackTweener
    }
    namespace Camera2D {
        enum AnchorMode {
            ANCHOR_MODE_FIXED_TOP_LEFT = 0,
            ANCHOR_MODE_DRAG_CENTER = 1,
        }
        enum Camera2DProcessCallback {
            CAMERA2D_PROCESS_PHYSICS = 0,
            CAMERA2D_PROCESS_IDLE = 1,
        }
    }
    class Camera2D extends Node2D {
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_anchor_mode(anchor_mode: Camera2D.AnchorMode): void
        get_anchor_mode(): Camera2D.AnchorMode
        set_ignore_rotation(ignore: boolean): void
        is_ignoring_rotation(): boolean
        _update_scroll(): void
        set_process_callback(mode: Camera2D.Camera2DProcessCallback): void
        get_process_callback(): Camera2D.Camera2DProcessCallback
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        make_current(): void
        is_current(): boolean
        _make_current(_unnamed_arg0: Object): void
        set_limit(margin: Side, limit: number /*i64*/): void
        get_limit(margin: Side): number /*i64*/
        set_limit_smoothing_enabled(limit_smoothing_enabled: boolean): void
        is_limit_smoothing_enabled(): boolean
        set_drag_vertical_enabled(enabled: boolean): void
        is_drag_vertical_enabled(): boolean
        set_drag_horizontal_enabled(enabled: boolean): void
        is_drag_horizontal_enabled(): boolean
        set_drag_vertical_offset(offset: number /*f64*/): void
        get_drag_vertical_offset(): number /*f64*/
        set_drag_horizontal_offset(offset: number /*f64*/): void
        get_drag_horizontal_offset(): number /*f64*/
        set_drag_margin(margin: Side, drag_margin: number /*f64*/): void
        get_drag_margin(margin: Side): number /*f64*/
        get_target_position(): Vector2
        get_screen_center_position(): Vector2
        set_zoom(zoom: Vector2): void
        get_zoom(): Vector2
        set_custom_viewport(viewport: Node): void
        get_custom_viewport(): Node
        set_position_smoothing_speed(position_smoothing_speed: number /*f64*/): void
        get_position_smoothing_speed(): number /*f64*/
        set_position_smoothing_enabled(position_smoothing_speed: boolean): void
        is_position_smoothing_enabled(): boolean
        set_rotation_smoothing_enabled(enabled: boolean): void
        is_rotation_smoothing_enabled(): boolean
        set_rotation_smoothing_speed(speed: number /*f64*/): void
        get_rotation_smoothing_speed(): number /*f64*/
        force_update_scroll(): void
        reset_smoothing(): void
        align(): void
        _set_old_smoothing(follow_smoothing: number /*f64*/): void
        set_screen_drawing_enabled(screen_drawing_enabled: boolean): void
        is_screen_drawing_enabled(): boolean
        set_limit_drawing_enabled(limit_drawing_enabled: boolean): void
        is_limit_drawing_enabled(): boolean
        set_margin_drawing_enabled(margin_drawing_enabled: boolean): void
        is_margin_drawing_enabled(): boolean
    }
    namespace Camera3D {
        enum ProjectionType {
            PROJECTION_PERSPECTIVE = 0,
            PROJECTION_ORTHOGONAL = 1,
            PROJECTION_FRUSTUM = 2,
        }
        enum KeepAspect {
            KEEP_WIDTH = 0,
            KEEP_HEIGHT = 1,
        }
        enum DopplerTracking {
            DOPPLER_TRACKING_DISABLED = 0,
            DOPPLER_TRACKING_IDLE_STEP = 1,
            DOPPLER_TRACKING_PHYSICS_STEP = 2,
        }
    }
    class Camera3D extends Node3D {
        project_ray_normal(screen_point: Vector2): Vector3
        project_local_ray_normal(screen_point: Vector2): Vector3
        project_ray_origin(screen_point: Vector2): Vector3
        unproject_position(world_point: Vector3): Vector2
        is_position_behind(world_point: Vector3): boolean
        project_position(screen_point: Vector2, z_depth: number /*f64*/): Vector3
        set_perspective(fov: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        set_orthogonal(size: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        set_frustum(size: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/): void
        make_current(): void
        clear_current(enable_next: boolean): void
        set_current(enabled: boolean): void
        is_current(): boolean
        get_camera_transform(): Transform3D
        get_camera_projection(): Projection
        get_fov(): number /*f64*/
        get_frustum_offset(): Vector2
        get_size(): number /*f64*/
        get_far(): number /*f64*/
        get_near(): number /*f64*/
        set_fov(fov: number /*f64*/): void
        set_frustum_offset(offset: Vector2): void
        set_size(size: number /*f64*/): void
        set_far(far: number /*f64*/): void
        set_near(near: number /*f64*/): void
        get_projection(): Camera3D.ProjectionType
        set_projection(mode: Camera3D.ProjectionType): void
        set_h_offset(offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_environment(env: Environment): void
        get_environment(): Environment
        set_attributes(env: CameraAttributes): void
        get_attributes(): CameraAttributes
        set_keep_aspect_mode(mode: Camera3D.KeepAspect): void
        get_keep_aspect_mode(): Camera3D.KeepAspect
        set_doppler_tracking(mode: Camera3D.DopplerTracking): void
        get_doppler_tracking(): Camera3D.DopplerTracking
        get_frustum(): Array
        is_position_in_frustum(world_point: Vector3): boolean
        get_camera_rid(): RID
        get_pyramid_shape_rid(): RID
        set_cull_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_cull_mask_value(layer_number: number /*i64*/): boolean
    }
    class Camera3DEditorPlugin extends EditorPlugin {
    }
    class Camera3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class CameraAttributes extends Resource {
        set_exposure_multiplier(multiplier: number /*f64*/): void
        get_exposure_multiplier(): number /*f64*/
        set_exposure_sensitivity(sensitivity: number /*f64*/): void
        get_exposure_sensitivity(): number /*f64*/
        set_auto_exposure_enabled(enabled: boolean): void
        is_auto_exposure_enabled(): boolean
        set_auto_exposure_speed(exposure_speed: number /*f64*/): void
        get_auto_exposure_speed(): number /*f64*/
        set_auto_exposure_scale(exposure_grey: number /*f64*/): void
        get_auto_exposure_scale(): number /*f64*/
    }
    class CameraAttributesPhysical extends CameraAttributes {
        set_aperture(aperture: number /*f64*/): void
        get_aperture(): number /*f64*/
        set_shutter_speed(shutter_speed: number /*f64*/): void
        get_shutter_speed(): number /*f64*/
        set_focal_length(focal_length: number /*f64*/): void
        get_focal_length(): number /*f64*/
        set_focus_distance(focus_distance: number /*f64*/): void
        get_focus_distance(): number /*f64*/
        set_near(near: number /*f64*/): void
        get_near(): number /*f64*/
        set_far(far: number /*f64*/): void
        get_far(): number /*f64*/
        get_fov(): number /*f64*/
        set_auto_exposure_max_exposure_value(exposure_value_max: number /*f64*/): void
        get_auto_exposure_max_exposure_value(): number /*f64*/
        set_auto_exposure_min_exposure_value(exposure_value_min: number /*f64*/): void
        get_auto_exposure_min_exposure_value(): number /*f64*/
    }
    class CameraAttributesPractical extends CameraAttributes {
        set_dof_blur_far_enabled(enabled: boolean): void
        is_dof_blur_far_enabled(): boolean
        set_dof_blur_far_distance(distance: number /*f64*/): void
        get_dof_blur_far_distance(): number /*f64*/
        set_dof_blur_far_transition(distance: number /*f64*/): void
        get_dof_blur_far_transition(): number /*f64*/
        set_dof_blur_near_enabled(enabled: boolean): void
        is_dof_blur_near_enabled(): boolean
        set_dof_blur_near_distance(distance: number /*f64*/): void
        get_dof_blur_near_distance(): number /*f64*/
        set_dof_blur_near_transition(distance: number /*f64*/): void
        get_dof_blur_near_transition(): number /*f64*/
        set_dof_blur_amount(amount: number /*f64*/): void
        get_dof_blur_amount(): number /*f64*/
        set_auto_exposure_max_sensitivity(max_sensitivity: number /*f64*/): void
        get_auto_exposure_max_sensitivity(): number /*f64*/
        set_auto_exposure_min_sensitivity(min_sensitivity: number /*f64*/): void
        get_auto_exposure_min_sensitivity(): number /*f64*/
    }
    namespace CameraFeed {
        enum FeedDataType {
            FEED_NOIMAGE = 0,
            FEED_RGB = 1,
            FEED_YCBCR = 2,
            FEED_YCBCR_SEP = 3,
        }
        enum FeedPosition {
            FEED_UNSPECIFIED = 0,
            FEED_FRONT = 1,
            FEED_BACK = 2,
        }
    }
    class CameraFeed extends RefCounted {
        get_id(): number /*i64*/
        is_active(): boolean
        set_active(active: boolean): void
        get_name(): string
        _set_name(name: string): void
        get_position(): CameraFeed.FeedPosition
        _set_position(position: CameraFeed.FeedPosition): void
        get_transform(): Transform2D
        set_transform(transform: Transform2D): void
        _set_RGB_img(rgb_img: Image): void
        _set_YCbCr_img(ycbcr_img: Image): void
        get_datatype(): CameraFeed.FeedDataType
    }
    class CameraTexture extends Texture2D {
        set_camera_feed_id(feed_id: number /*i64*/): void
        get_camera_feed_id(): number /*i64*/
        set_which_feed(which_feed: CameraServer.FeedImage): void
        get_which_feed(): CameraServer.FeedImage
        set_camera_active(active: boolean): void
        get_camera_active(): boolean
    }
    class CanvasGroup extends Node2D {
        set_fit_margin(fit_margin: number /*f64*/): void
        get_fit_margin(): number /*f64*/
        set_clear_margin(clear_margin: number /*f64*/): void
        get_clear_margin(): number /*f64*/
        set_use_mipmaps(use_mipmaps: boolean): void
        is_using_mipmaps(): boolean
    }
    namespace CanvasItem {
        enum TextureFilter {
            TEXTURE_FILTER_PARENT_NODE = 0,
            TEXTURE_FILTER_NEAREST = 1,
            TEXTURE_FILTER_LINEAR = 2,
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
            TEXTURE_FILTER_MAX = 7,
        }
        enum TextureRepeat {
            TEXTURE_REPEAT_PARENT_NODE = 0,
            TEXTURE_REPEAT_DISABLED = 1,
            TEXTURE_REPEAT_ENABLED = 2,
            TEXTURE_REPEAT_MIRROR = 3,
            TEXTURE_REPEAT_MAX = 4,
        }
        enum ClipChildrenMode {
            CLIP_CHILDREN_DISABLED = 0,
            CLIP_CHILDREN_ONLY = 1,
            CLIP_CHILDREN_AND_DRAW = 2,
            CLIP_CHILDREN_MAX = 3,
        }
    }
    class CanvasItem extends Node {
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35
        static readonly NOTIFICATION_DRAW = 30
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 31
        static readonly NOTIFICATION_ENTER_CANVAS = 32
        static readonly NOTIFICATION_EXIT_CANVAS = 33
        static readonly NOTIFICATION_WORLD_2D_CHANGED = 36
        _top_level_raise_self(): void
        _edit_set_state(state: Dictionary): void
        _edit_get_state(): Dictionary
        _edit_set_position(position: Vector2): void
        _edit_get_position(): Vector2
        _edit_set_scale(scale: Vector2): void
        _edit_get_scale(): Vector2
        _edit_set_rect(rect: Rect2): void
        _edit_get_rect(): Rect2
        _edit_use_rect(): boolean
        _edit_set_rotation(degrees: number /*f64*/): void
        _edit_get_rotation(): number /*f64*/
        _edit_use_rotation(): boolean
        _edit_set_pivot(pivot: Vector2): void
        _edit_get_pivot(): Vector2
        _edit_use_pivot(): boolean
        _edit_get_transform(): Transform2D
        get_canvas_item(): RID
        set_visible(visible: boolean): void
        is_visible(): boolean
        is_visible_in_tree(): boolean
        show(): void
        hide(): void
        queue_redraw(): void
        move_to_front(): void
        set_as_top_level(enable: boolean): void
        is_set_as_top_level(): boolean
        set_light_mask(light_mask: number /*i64*/): void
        get_light_mask(): number /*i64*/
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_self_modulate(self_modulate: Color): void
        get_self_modulate(): Color
        set_z_index(z_index: number /*i64*/): void
        get_z_index(): number /*i64*/
        set_z_as_relative(enable: boolean): void
        is_z_relative(): boolean
        set_y_sort_enabled(enabled: boolean): void
        is_y_sort_enabled(): boolean
        set_draw_behind_parent(enable: boolean): void
        is_draw_behind_parent_enabled(): boolean
        draw_line(from: Vector2, to: Vector2, color: Color, width: number /*f64*/, antialiased: boolean): void
        draw_dashed_line(from: Vector2, to: Vector2, color: Color, width: number /*f64*/, dash: number /*f64*/, aligned: boolean): void
        draw_polyline(points: PackedVector2Array, color: Color, width: number /*f64*/, antialiased: boolean): void
        draw_polyline_colors(points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/, antialiased: boolean): void
        draw_arc(center: Vector2, radius: number /*f64*/, start_angle: number /*f64*/, end_angle: number /*f64*/, point_count: number /*i64*/, color: Color, width: number /*f64*/, antialiased: boolean): void
        draw_multiline(points: PackedVector2Array, color: Color, width: number /*f64*/): void
        draw_multiline_colors(points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/): void
        draw_rect(rect: Rect2, color: Color, filled: boolean, width: number /*f64*/): void
        draw_circle(position: Vector2, radius: number /*f64*/, color: Color): void
        draw_texture(texture: Texture2D, position: Vector2, modulate: Color): void
        draw_texture_rect(texture: Texture2D, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        draw_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        draw_msdf_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color, outline: number /*f64*/, pixel_range: number /*f64*/, scale: number /*f64*/): void
        draw_lcd_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color): void
        draw_style_box(style_box: StyleBox, rect: Rect2): void
        draw_primitive(points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: Texture2D): void
        draw_polygon(points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: Texture2D): void
        draw_colored_polygon(points: PackedVector2Array, color: Color, uvs: PackedVector2Array, texture: Texture2D): void
        draw_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, modulate: Color, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_multiline_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, max_lines: number /*i64*/, modulate: Color, brk_flags: TextServer.LineBreakFlag, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, size: number /*i64*/, modulate: Color, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_multiline_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, max_lines: number /*i64*/, size: number /*i64*/, modulate: Color, brk_flags: TextServer.LineBreakFlag, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_char(font: Font, pos: Vector2, char: string, font_size: number /*i64*/, modulate: Color): void
        draw_char_outline(font: Font, pos: Vector2, char: string, font_size: number /*i64*/, size: number /*i64*/, modulate: Color): void
        draw_mesh(mesh: Mesh, texture: Texture2D, transform: Transform2D, modulate: Color): void
        draw_multimesh(multimesh: MultiMesh, texture: Texture2D): void
        draw_set_transform(position: Vector2, rotation: number /*f64*/, scale: Vector2): void
        draw_set_transform_matrix(xform: Transform2D): void
        draw_animation_slice(animation_length: number /*f64*/, slice_begin: number /*f64*/, slice_end: number /*f64*/, offset: number /*f64*/): void
        draw_end_animation(): void
        get_transform(): Transform2D
        get_global_transform(): Transform2D
        get_global_transform_with_canvas(): Transform2D
        get_viewport_transform(): Transform2D
        get_viewport_rect(): Rect2
        get_canvas_transform(): Transform2D
        get_screen_transform(): Transform2D
        get_local_mouse_position(): Vector2
        get_global_mouse_position(): Vector2
        get_canvas(): RID
        get_world_2d(): World2D
        set_material(material: Material): void
        get_material(): Material
        set_use_parent_material(enable: boolean): void
        get_use_parent_material(): boolean
        set_notify_local_transform(enable: boolean): void
        is_local_transform_notification_enabled(): boolean
        set_notify_transform(enable: boolean): void
        is_transform_notification_enabled(): boolean
        force_update_transform(): void
        make_canvas_position_local(screen_point: Vector2): Vector2
        make_input_local(event: InputEvent): InputEvent
        set_visibility_layer(layer: number /*i64*/): void
        get_visibility_layer(): number /*i64*/
        set_visibility_layer_bit(layer: number /*i64*/, enabled: boolean): void
        get_visibility_layer_bit(layer: number /*i64*/): boolean
        set_texture_filter(mode: CanvasItem.TextureFilter): void
        get_texture_filter(): CanvasItem.TextureFilter
        set_texture_repeat(mode: CanvasItem.TextureRepeat): void
        get_texture_repeat(): CanvasItem.TextureRepeat
        set_clip_children_mode(mode: CanvasItem.ClipChildrenMode): void
        get_clip_children_mode(): CanvasItem.ClipChildrenMode
        // SIGNAL: draw
        // SIGNAL: visibility_changed
        // SIGNAL: hidden
        // SIGNAL: item_rect_changed
    }
    class CanvasItemEditor extends VBoxContainer {
        _get_editor_data(_unnamed_arg0: Object): Object
        update_viewport(): void
        center_at(position: Vector2): void
        _set_owner_for_node_and_children(_unnamed_arg0: Node, _unnamed_arg1: Node): void
        // SIGNAL: item_lock_status_changed
        // SIGNAL: item_group_status_changed
    }
    class CanvasItemEditorPlugin extends EditorPlugin {
    }
    class CanvasItemEditorViewport extends Control {
    }
    namespace CanvasItemMaterial {
        enum BlendMode {
            BLEND_MODE_MIX = 0,
            BLEND_MODE_ADD = 1,
            BLEND_MODE_SUB = 2,
            BLEND_MODE_MUL = 3,
            BLEND_MODE_PREMULT_ALPHA = 4,
        }
        enum LightMode {
            LIGHT_MODE_NORMAL = 0,
            LIGHT_MODE_UNSHADED = 1,
            LIGHT_MODE_LIGHT_ONLY = 2,
        }
    }
    class CanvasItemMaterial extends Material {
        set_blend_mode(blend_mode: CanvasItemMaterial.BlendMode): void
        get_blend_mode(): CanvasItemMaterial.BlendMode
        set_light_mode(light_mode: CanvasItemMaterial.LightMode): void
        get_light_mode(): CanvasItemMaterial.LightMode
        set_particles_animation(particles_anim: boolean): void
        get_particles_animation(): boolean
        set_particles_anim_h_frames(frames: number /*i64*/): void
        get_particles_anim_h_frames(): number /*i64*/
        set_particles_anim_v_frames(frames: number /*i64*/): void
        get_particles_anim_v_frames(): number /*i64*/
        set_particles_anim_loop(loop: boolean): void
        get_particles_anim_loop(): boolean
    }
    class CanvasItemMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    class CanvasLayer extends Node {
        set_layer(layer: number /*i64*/): void
        get_layer(): number /*i64*/
        set_visible(visible: boolean): void
        is_visible(): boolean
        show(): void
        hide(): void
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        get_final_transform(): Transform2D
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_rotation(radians: number /*f64*/): void
        get_rotation(): number /*f64*/
        set_scale(scale: Vector2): void
        get_scale(): Vector2
        set_follow_viewport(enable: boolean): void
        is_following_viewport(): boolean
        set_follow_viewport_scale(scale: number /*f64*/): void
        get_follow_viewport_scale(): number /*f64*/
        set_custom_viewport(viewport: Node): void
        get_custom_viewport(): Node
        get_canvas(): RID
        // SIGNAL: visibility_changed
    }
    class CanvasModulate extends Node2D {
        set_color(color: Color): void
        get_color(): Color
    }
    class CanvasTexture extends Texture2D {
        set_diffuse_texture(texture: Texture2D): void
        get_diffuse_texture(): Texture2D
        set_normal_texture(texture: Texture2D): void
        get_normal_texture(): Texture2D
        set_specular_texture(texture: Texture2D): void
        get_specular_texture(): Texture2D
        set_specular_color(color: Color): void
        get_specular_color(): Color
        set_specular_shininess(shininess: number /*f64*/): void
        get_specular_shininess(): number /*f64*/
        set_texture_filter(filter: CanvasItem.TextureFilter): void
        get_texture_filter(): CanvasItem.TextureFilter
        set_texture_repeat(repeat: CanvasItem.TextureRepeat): void
        get_texture_repeat(): CanvasItem.TextureRepeat
    }
    class CapsuleMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
    }
    class CapsuleShape2D extends Shape2D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
    }
    class CapsuleShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
    }
    class Cast2DEditor extends Control {
    }
    class Cast2DEditorPlugin extends EditorPlugin {
    }
    class CenterContainer extends Container {
        set_use_top_left(enable: boolean): void
        is_using_top_left(): boolean
    }
    class CharFXTransform extends RefCounted {
        get_transform(): Transform2D
        set_transform(transform: Transform2D): void
        get_range(): Vector2i
        set_range(range: Vector2i): void
        get_elapsed_time(): number /*f64*/
        set_elapsed_time(time: number /*f64*/): void
        is_visible(): boolean
        set_visibility(visibility: boolean): void
        is_outline(): boolean
        set_outline(outline: boolean): void
        get_offset(): Vector2
        set_offset(offset: Vector2): void
        get_color(): Color
        set_color(color: Color): void
        get_environment(): Dictionary
        set_environment(environment: Dictionary): void
        get_glyph_index(): number /*i64*/
        set_glyph_index(glyph_index: number /*i64*/): void
        get_relative_index(): number /*i64*/
        set_relative_index(relative_index: number /*i64*/): void
        get_glyph_count(): number /*i64*/
        set_glyph_count(glyph_count: number /*i64*/): void
        get_glyph_flags(): number /*i64*/
        set_glyph_flags(glyph_flags: number /*i64*/): void
        get_font(): RID
        set_font(font: RID): void
    }
    namespace CharacterBody2D {
        enum MotionMode {
            MOTION_MODE_GROUNDED = 0,
            MOTION_MODE_FLOATING = 1,
        }
        enum PlatformOnLeave {
            PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
            PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
            PLATFORM_ON_LEAVE_DO_NOTHING = 2,
        }
    }
    class CharacterBody2D extends PhysicsBody2D {
        move_and_slide(): boolean
        apply_floor_snap(): void
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_safe_margin(margin: number /*f64*/): void
        get_safe_margin(): number /*f64*/
        is_floor_stop_on_slope_enabled(): boolean
        set_floor_stop_on_slope_enabled(enabled: boolean): void
        set_floor_constant_speed_enabled(enabled: boolean): void
        is_floor_constant_speed_enabled(): boolean
        set_floor_block_on_wall_enabled(enabled: boolean): void
        is_floor_block_on_wall_enabled(): boolean
        set_slide_on_ceiling_enabled(enabled: boolean): void
        is_slide_on_ceiling_enabled(): boolean
        set_platform_floor_layers(exclude_layer: number /*i64*/): void
        get_platform_floor_layers(): number /*i64*/
        set_platform_wall_layers(exclude_layer: number /*i64*/): void
        get_platform_wall_layers(): number /*i64*/
        get_max_slides(): number /*i64*/
        set_max_slides(max_slides: number /*i64*/): void
        get_floor_max_angle(): number /*f64*/
        set_floor_max_angle(radians: number /*f64*/): void
        get_floor_snap_length(): number /*f64*/
        set_floor_snap_length(floor_snap_length: number /*f64*/): void
        get_wall_min_slide_angle(): number /*f64*/
        set_wall_min_slide_angle(radians: number /*f64*/): void
        get_up_direction(): Vector2
        set_up_direction(up_direction: Vector2): void
        set_motion_mode(mode: CharacterBody2D.MotionMode): void
        get_motion_mode(): CharacterBody2D.MotionMode
        set_platform_on_leave(on_leave_apply_velocity: CharacterBody2D.PlatformOnLeave): void
        get_platform_on_leave(): CharacterBody2D.PlatformOnLeave
        is_on_floor(): boolean
        is_on_floor_only(): boolean
        is_on_ceiling(): boolean
        is_on_ceiling_only(): boolean
        is_on_wall(): boolean
        is_on_wall_only(): boolean
        get_floor_normal(): Vector2
        get_wall_normal(): Vector2
        get_last_motion(): Vector2
        get_position_delta(): Vector2
        get_real_velocity(): Vector2
        get_floor_angle(up_direction: Vector2): number /*f64*/
        get_platform_velocity(): Vector2
        get_slide_collision_count(): number /*i64*/
        get_slide_collision(slide_idx: number /*i64*/): KinematicCollision2D
        get_last_slide_collision(): KinematicCollision2D
    }
    namespace CharacterBody3D {
        enum MotionMode {
            MOTION_MODE_GROUNDED = 0,
            MOTION_MODE_FLOATING = 1,
        }
        enum PlatformOnLeave {
            PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
            PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
            PLATFORM_ON_LEAVE_DO_NOTHING = 2,
        }
    }
    class CharacterBody3D extends PhysicsBody3D {
        move_and_slide(): boolean
        apply_floor_snap(): void
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_safe_margin(margin: number /*f64*/): void
        get_safe_margin(): number /*f64*/
        is_floor_stop_on_slope_enabled(): boolean
        set_floor_stop_on_slope_enabled(enabled: boolean): void
        set_floor_constant_speed_enabled(enabled: boolean): void
        is_floor_constant_speed_enabled(): boolean
        set_floor_block_on_wall_enabled(enabled: boolean): void
        is_floor_block_on_wall_enabled(): boolean
        set_slide_on_ceiling_enabled(enabled: boolean): void
        is_slide_on_ceiling_enabled(): boolean
        set_platform_floor_layers(exclude_layer: number /*i64*/): void
        get_platform_floor_layers(): number /*i64*/
        set_platform_wall_layers(exclude_layer: number /*i64*/): void
        get_platform_wall_layers(): number /*i64*/
        get_max_slides(): number /*i64*/
        set_max_slides(max_slides: number /*i64*/): void
        get_floor_max_angle(): number /*f64*/
        set_floor_max_angle(radians: number /*f64*/): void
        get_floor_snap_length(): number /*f64*/
        set_floor_snap_length(floor_snap_length: number /*f64*/): void
        get_wall_min_slide_angle(): number /*f64*/
        set_wall_min_slide_angle(radians: number /*f64*/): void
        get_up_direction(): Vector3
        set_up_direction(up_direction: Vector3): void
        set_motion_mode(mode: CharacterBody3D.MotionMode): void
        get_motion_mode(): CharacterBody3D.MotionMode
        set_platform_on_leave(on_leave_apply_velocity: CharacterBody3D.PlatformOnLeave): void
        get_platform_on_leave(): CharacterBody3D.PlatformOnLeave
        is_on_floor(): boolean
        is_on_floor_only(): boolean
        is_on_ceiling(): boolean
        is_on_ceiling_only(): boolean
        is_on_wall(): boolean
        is_on_wall_only(): boolean
        get_floor_normal(): Vector3
        get_wall_normal(): Vector3
        get_last_motion(): Vector3
        get_position_delta(): Vector3
        get_real_velocity(): Vector3
        get_floor_angle(up_direction: Vector3): number /*f64*/
        get_platform_velocity(): Vector3
        get_platform_angular_velocity(): Vector3
        get_slide_collision_count(): number /*i64*/
        get_slide_collision(slide_idx: number /*i64*/): KinematicCollision3D
        get_last_slide_collision(): KinematicCollision3D
    }
    class CheckBox extends Button {
    }
    class CheckButton extends Button {
    }
    class CircleShape2D extends Shape2D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
    }
    namespace CodeEdit {
        enum CodeCompletionKind {
            KIND_CLASS = 0,
            KIND_FUNCTION = 1,
            KIND_SIGNAL = 2,
            KIND_VARIABLE = 3,
            KIND_MEMBER = 4,
            KIND_ENUM = 5,
            KIND_CONSTANT = 6,
            KIND_NODE_PATH = 7,
            KIND_FILE_PATH = 8,
            KIND_PLAIN_TEXT = 9,
        }
        enum CodeCompletionLocation {
            LOCATION_LOCAL = 0,
            LOCATION_PARENT_MASK = 256,
            LOCATION_OTHER_USER_CODE = 512,
            LOCATION_OTHER = 1024,
        }
    }
    class CodeEdit extends TextEdit {
        set_indent_size(size: number /*i64*/): void
        get_indent_size(): number /*i64*/
        set_indent_using_spaces(use_spaces: boolean): void
        is_indent_using_spaces(): boolean
        set_auto_indent_enabled(enable: boolean): void
        is_auto_indent_enabled(): boolean
        set_auto_indent_prefixes(prefixes: Array): void
        get_auto_indent_prefixes(): Array
        do_indent(): void
        indent_lines(): void
        unindent_lines(): void
        convert_indent(from_line: number /*i64*/, to_line: number /*i64*/): void
        set_auto_brace_completion_enabled(enable: boolean): void
        is_auto_brace_completion_enabled(): boolean
        set_highlight_matching_braces_enabled(enable: boolean): void
        is_highlight_matching_braces_enabled(): boolean
        add_auto_brace_completion_pair(start_key: string, end_key: string): void
        set_auto_brace_completion_pairs(pairs: Dictionary): void
        get_auto_brace_completion_pairs(): Dictionary
        has_auto_brace_completion_open_key(open_key: string): boolean
        has_auto_brace_completion_close_key(close_key: string): boolean
        get_auto_brace_completion_close_key(open_key: string): string
        set_draw_breakpoints_gutter(enable: boolean): void
        is_drawing_breakpoints_gutter(): boolean
        set_draw_bookmarks_gutter(enable: boolean): void
        is_drawing_bookmarks_gutter(): boolean
        set_draw_executing_lines_gutter(enable: boolean): void
        is_drawing_executing_lines_gutter(): boolean
        set_line_as_breakpoint(line: number /*i64*/, breakpointed: boolean): void
        is_line_breakpointed(line: number /*i64*/): boolean
        clear_breakpointed_lines(): void
        get_breakpointed_lines(): PackedInt32Array
        set_line_as_bookmarked(line: number /*i64*/, bookmarked: boolean): void
        is_line_bookmarked(line: number /*i64*/): boolean
        clear_bookmarked_lines(): void
        get_bookmarked_lines(): PackedInt32Array
        set_line_as_executing(line: number /*i64*/, executing: boolean): void
        is_line_executing(line: number /*i64*/): boolean
        clear_executing_lines(): void
        get_executing_lines(): PackedInt32Array
        set_draw_line_numbers(enable: boolean): void
        is_draw_line_numbers_enabled(): boolean
        set_line_numbers_zero_padded(enable: boolean): void
        is_line_numbers_zero_padded(): boolean
        set_draw_fold_gutter(enable: boolean): void
        is_drawing_fold_gutter(): boolean
        set_line_folding_enabled(enabled: boolean): void
        is_line_folding_enabled(): boolean
        can_fold_line(line: number /*i64*/): boolean
        fold_line(line: number /*i64*/): void
        unfold_line(line: number /*i64*/): void
        fold_all_lines(): void
        unfold_all_lines(): void
        toggle_foldable_line(line: number /*i64*/): void
        is_line_folded(line: number /*i64*/): boolean
        get_folded_lines(): Array
        create_code_region(): void
        get_code_region_start_tag(): string
        get_code_region_end_tag(): string
        set_code_region_tags(start: string, end: string): void
        is_line_code_region_start(line: number /*i64*/): boolean
        is_line_code_region_end(line: number /*i64*/): boolean
        add_string_delimiter(start_key: string, end_key: string, line_only: boolean): void
        remove_string_delimiter(start_key: string): void
        has_string_delimiter(start_key: string): boolean
        set_string_delimiters(string_delimiters: Array): void
        clear_string_delimiters(): void
        get_string_delimiters(): Array
        is_in_string(line: number /*i64*/, column: number /*i64*/): number /*i64*/
        add_comment_delimiter(start_key: string, end_key: string, line_only: boolean): void
        remove_comment_delimiter(start_key: string): void
        has_comment_delimiter(start_key: string): boolean
        set_comment_delimiters(comment_delimiters: Array): void
        clear_comment_delimiters(): void
        get_comment_delimiters(): Array
        is_in_comment(line: number /*i64*/, column: number /*i64*/): number /*i64*/
        get_delimiter_start_key(delimiter_index: number /*i64*/): string
        get_delimiter_end_key(delimiter_index: number /*i64*/): string
        get_delimiter_start_position(line: number /*i64*/, column: number /*i64*/): Vector2
        get_delimiter_end_position(line: number /*i64*/, column: number /*i64*/): Vector2
        set_code_hint(code_hint: string): void
        set_code_hint_draw_below(draw_below: boolean): void
        get_text_for_code_completion(): string
        request_code_completion(force: boolean): void
        add_code_completion_option(type: CodeEdit.CodeCompletionKind, display_text: string, insert_text: string, text_color: Color, icon: Resource, value: any, location: number /*i64*/): void
        update_code_completion_options(force: boolean): void
        get_code_completion_options(): Array
        get_code_completion_option(index: number /*i64*/): Dictionary
        get_code_completion_selected_index(): number /*i64*/
        set_code_completion_selected_index(index: number /*i64*/): void
        confirm_code_completion(replace: boolean): void
        cancel_code_completion(): void
        set_code_completion_enabled(enable: boolean): void
        is_code_completion_enabled(): boolean
        set_code_completion_prefixes(prefixes: Array): void
        get_code_completion_prefixes(): Array
        set_line_length_guidelines(guideline_columns: Array): void
        get_line_length_guidelines(): Array
        set_symbol_lookup_on_click_enabled(enable: boolean): void
        is_symbol_lookup_on_click_enabled(): boolean
        get_text_for_symbol_lookup(): string
        get_text_with_cursor_char(line: number /*i64*/, column: number /*i64*/): string
        set_symbol_lookup_word_as_valid(valid: boolean): void
        duplicate_lines(): void
        // SIGNAL: breakpoint_toggled
        // SIGNAL: code_completion_requested
        // SIGNAL: symbol_lookup
        // SIGNAL: symbol_validate
    }
    class CodeHighlighter extends SyntaxHighlighter {
        add_keyword_color(keyword: string, color: Color): void
        remove_keyword_color(keyword: string): void
        has_keyword_color(keyword: string): boolean
        get_keyword_color(keyword: string): Color
        set_keyword_colors(keywords: Dictionary): void
        clear_keyword_colors(): void
        get_keyword_colors(): Dictionary
        add_member_keyword_color(member_keyword: string, color: Color): void
        remove_member_keyword_color(member_keyword: string): void
        has_member_keyword_color(member_keyword: string): boolean
        get_member_keyword_color(member_keyword: string): Color
        set_member_keyword_colors(member_keyword: Dictionary): void
        clear_member_keyword_colors(): void
        get_member_keyword_colors(): Dictionary
        add_color_region(start_key: string, end_key: string, color: Color, line_only: boolean): void
        remove_color_region(start_key: string): void
        has_color_region(start_key: string): boolean
        set_color_regions(color_regions: Dictionary): void
        clear_color_regions(): void
        get_color_regions(): Dictionary
        set_function_color(color: Color): void
        get_function_color(): Color
        set_number_color(color: Color): void
        get_number_color(): Color
        set_symbol_color(color: Color): void
        get_symbol_color(): Color
        set_member_variable_color(color: Color): void
        get_member_variable_color(): Color
    }
    namespace CollisionObject2D {
        enum DisableMode {
            DISABLE_MODE_REMOVE = 0,
            DISABLE_MODE_MAKE_STATIC = 1,
            DISABLE_MODE_KEEP_ACTIVE = 2,
        }
    }
    class CollisionObject2D extends Node2D {
        get_rid(): RID
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_disable_mode(mode: CollisionObject2D.DisableMode): void
        get_disable_mode(): CollisionObject2D.DisableMode
        set_pickable(enabled: boolean): void
        is_pickable(): boolean
        create_shape_owner(owner: Object): number /*i64*/
        remove_shape_owner(owner_id: number /*i64*/): void
        get_shape_owners(): PackedInt32Array
        shape_owner_set_transform(owner_id: number /*i64*/, transform: Transform2D): void
        shape_owner_get_transform(owner_id: number /*i64*/): Transform2D
        shape_owner_get_owner(owner_id: number /*i64*/): Object
        shape_owner_set_disabled(owner_id: number /*i64*/, disabled: boolean): void
        is_shape_owner_disabled(owner_id: number /*i64*/): boolean
        shape_owner_set_one_way_collision(owner_id: number /*i64*/, enable: boolean): void
        is_shape_owner_one_way_collision_enabled(owner_id: number /*i64*/): boolean
        shape_owner_set_one_way_collision_margin(owner_id: number /*i64*/, margin: number /*f64*/): void
        get_shape_owner_one_way_collision_margin(owner_id: number /*i64*/): number /*f64*/
        shape_owner_add_shape(owner_id: number /*i64*/, shape: Shape2D): void
        shape_owner_get_shape_count(owner_id: number /*i64*/): number /*i64*/
        shape_owner_get_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): Shape2D
        shape_owner_get_shape_index(owner_id: number /*i64*/, shape_id: number /*i64*/): number /*i64*/
        shape_owner_remove_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): void
        shape_owner_clear_shapes(owner_id: number /*i64*/): void
        shape_find_owner(shape_index: number /*i64*/): number /*i64*/
        // SIGNAL: input_event
        // SIGNAL: mouse_entered
        // SIGNAL: mouse_exited
        // SIGNAL: mouse_shape_entered
        // SIGNAL: mouse_shape_exited
    }
    namespace CollisionObject3D {
        enum DisableMode {
            DISABLE_MODE_REMOVE = 0,
            DISABLE_MODE_MAKE_STATIC = 1,
            DISABLE_MODE_KEEP_ACTIVE = 2,
        }
    }
    class CollisionObject3D extends Node3D {
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_disable_mode(mode: CollisionObject3D.DisableMode): void
        get_disable_mode(): CollisionObject3D.DisableMode
        set_ray_pickable(ray_pickable: boolean): void
        is_ray_pickable(): boolean
        set_capture_input_on_drag(enable: boolean): void
        get_capture_input_on_drag(): boolean
        get_rid(): RID
        create_shape_owner(owner: Object): number /*i64*/
        remove_shape_owner(owner_id: number /*i64*/): void
        get_shape_owners(): PackedInt32Array
        shape_owner_set_transform(owner_id: number /*i64*/, transform: Transform3D): void
        shape_owner_get_transform(owner_id: number /*i64*/): Transform3D
        shape_owner_get_owner(owner_id: number /*i64*/): Object
        shape_owner_set_disabled(owner_id: number /*i64*/, disabled: boolean): void
        is_shape_owner_disabled(owner_id: number /*i64*/): boolean
        shape_owner_add_shape(owner_id: number /*i64*/, shape: Shape3D): void
        shape_owner_get_shape_count(owner_id: number /*i64*/): number /*i64*/
        shape_owner_get_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): Shape3D
        shape_owner_get_shape_index(owner_id: number /*i64*/, shape_id: number /*i64*/): number /*i64*/
        shape_owner_remove_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): void
        shape_owner_clear_shapes(owner_id: number /*i64*/): void
        shape_find_owner(shape_index: number /*i64*/): number /*i64*/
        // SIGNAL: input_event
        // SIGNAL: mouse_entered
        // SIGNAL: mouse_exited
    }
    class CollisionObject3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace CollisionPolygon2D {
        enum BuildMode {
            BUILD_SOLIDS = 0,
            BUILD_SEGMENTS = 1,
        }
    }
    class CollisionPolygon2D extends Node2D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_build_mode(build_mode: CollisionPolygon2D.BuildMode): void
        get_build_mode(): CollisionPolygon2D.BuildMode
        set_disabled(disabled: boolean): void
        is_disabled(): boolean
        set_one_way_collision(enabled: boolean): void
        is_one_way_collision_enabled(): boolean
        set_one_way_collision_margin(margin: number /*f64*/): void
        get_one_way_collision_margin(): number /*f64*/
    }
    class CollisionPolygon2DEditor extends AbstractPolygon2DEditor {
    }
    class CollisionPolygon2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    class CollisionPolygon3D extends Node3D {
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_disabled(disabled: boolean): void
        is_disabled(): boolean
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        _is_editable_3d_polygon(): boolean
    }
    class CollisionPolygon3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class CollisionShape2D extends Node2D {
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_disabled(disabled: boolean): void
        is_disabled(): boolean
        set_one_way_collision(enabled: boolean): void
        is_one_way_collision_enabled(): boolean
        set_one_way_collision_margin(margin: number /*f64*/): void
        get_one_way_collision_margin(): number /*f64*/
        set_debug_color(color: Color): void
        get_debug_color(): Color
    }
    class CollisionShape2DEditor extends Control {
    }
    class CollisionShape2DEditorPlugin extends EditorPlugin {
    }
    class CollisionShape3D extends Node3D {
        resource_changed(resource: Resource): void
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        set_disabled(enable: boolean): void
        is_disabled(): boolean
        make_convex_from_siblings(): void
    }
    class CollisionShape3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace ColorPicker {
        enum ColorModeType {
            MODE_RGB = 0,
            MODE_HSV = 1,
            MODE_RAW = 2,
            MODE_OKHSL = 3,
        }
        enum PickerShapeType {
            SHAPE_HSV_RECTANGLE = 0,
            SHAPE_HSV_WHEEL = 1,
            SHAPE_VHS_CIRCLE = 2,
            SHAPE_OKHSL_CIRCLE = 3,
            SHAPE_NONE = 4,
        }
    }
    class ColorPicker extends VBoxContainer {
        set_pick_color(color: Color): void
        get_pick_color(): Color
        set_deferred_mode(mode: boolean): void
        is_deferred_mode(): boolean
        set_color_mode(color_mode: ColorPicker.ColorModeType): void
        get_color_mode(): ColorPicker.ColorModeType
        set_edit_alpha(show: boolean): void
        is_editing_alpha(): boolean
        set_can_add_swatches(enabled: boolean): void
        are_swatches_enabled(): boolean
        set_presets_visible(visible: boolean): void
        are_presets_visible(): boolean
        set_modes_visible(visible: boolean): void
        are_modes_visible(): boolean
        set_sampler_visible(visible: boolean): void
        is_sampler_visible(): boolean
        set_sliders_visible(visible: boolean): void
        are_sliders_visible(): boolean
        set_hex_visible(visible: boolean): void
        is_hex_visible(): boolean
        add_preset(color: Color): void
        erase_preset(color: Color): void
        get_presets(): PackedColorArray
        add_recent_preset(color: Color): void
        erase_recent_preset(color: Color): void
        get_recent_presets(): PackedColorArray
        set_picker_shape(shape: ColorPicker.PickerShapeType): void
        get_picker_shape(): ColorPicker.PickerShapeType
        // SIGNAL: color_changed
        // SIGNAL: preset_added
        // SIGNAL: preset_removed
    }
    class ColorPickerButton extends Button {
        set_pick_color(color: Color): void
        get_pick_color(): Color
        get_picker(): ColorPicker
        get_popup(): PopupPanel
        set_edit_alpha(show: boolean): void
        is_editing_alpha(): boolean
        _about_to_popup(): void
        // SIGNAL: color_changed
        // SIGNAL: popup_closed
        // SIGNAL: picker_created
    }
    class ColorRect extends Control {
        set_color(color: Color): void
        get_color(): Color
    }
    class CompressedCubemap extends CompressedTextureLayered {
    }
    class CompressedCubemapArray extends CompressedTextureLayered {
    }
    class CompressedTexture2D extends Texture2D {
        load(path: string): GodotError
        get_load_path(): string
    }
    class CompressedTexture2DArray extends CompressedTextureLayered {
    }
    class CompressedTexture3D extends Texture3D {
        load(path: string): GodotError
        get_load_path(): string
    }
    class CompressedTextureLayered extends TextureLayered {
        load(path: string): GodotError
        get_load_path(): string
    }
    class ConcavePolygonShape2D extends Shape2D {
        set_segments(segments: PackedVector2Array): void
        get_segments(): PackedVector2Array
    }
    class ConcavePolygonShape3D extends Shape3D {
        set_faces(faces: PackedVector3Array): void
        get_faces(): PackedVector3Array
        set_backface_collision_enabled(enabled: boolean): void
        is_backface_collision_enabled(): boolean
    }
    namespace ConeTwistJoint3D {
        enum Param {
            PARAM_SWING_SPAN = 0,
            PARAM_TWIST_SPAN = 1,
            PARAM_BIAS = 2,
            PARAM_SOFTNESS = 3,
            PARAM_RELAXATION = 4,
            PARAM_MAX = 5,
        }
    }
    class ConeTwistJoint3D extends Joint3D {
        set_param(param: ConeTwistJoint3D.Param, value: number /*f64*/): void
        get_param(param: ConeTwistJoint3D.Param): number /*f64*/
    }
    class ConfigFile extends RefCounted {
        set_value(section: string, key: string, value: any): void
        get_value(section: string, key: string, default_: any): any
        has_section(section: string): boolean
        has_section_key(section: string, key: string): boolean
        get_sections(): PackedStringArray
        get_section_keys(section: string): PackedStringArray
        erase_section(section: string): void
        erase_section_key(section: string, key: string): void
        load(path: string): GodotError
        parse(data: string): GodotError
        save(path: string): GodotError
        encode_to_text(): string
        load_encrypted(path: string, key: PackedByteArray): GodotError
        load_encrypted_pass(path: string, password: string): GodotError
        save_encrypted(path: string, key: PackedByteArray): GodotError
        save_encrypted_pass(path: string, password: string): GodotError
        clear(): void
    }
    class ConfirmationDialog extends AcceptDialog {
        get_cancel_button(): Button
        set_cancel_button_text(text: string): void
        get_cancel_button_text(): string
    }
    class ConnectDialog extends ConfirmationDialog {
        // SIGNAL: connected
    }
    class ConnectDialogBinds extends Object {
    }
    class ConnectionsDock extends VBoxContainer {
        update_tree(): void
    }
    class Container extends Control {
        static readonly NOTIFICATION_PRE_SORT_CHILDREN = 50
        static readonly NOTIFICATION_SORT_CHILDREN = 51
        queue_sort(): void
        fit_child_in_rect(child: Control, rect: Rect2): void
        // SIGNAL: pre_sort_children
        // SIGNAL: sort_children
    }
    namespace Control {
        enum FocusMode {
            FOCUS_NONE = 0,
            FOCUS_CLICK = 1,
            FOCUS_ALL = 2,
        }
        enum CursorShape {
            CURSOR_ARROW = 0,
            CURSOR_IBEAM = 1,
            CURSOR_POINTING_HAND = 2,
            CURSOR_CROSS = 3,
            CURSOR_WAIT = 4,
            CURSOR_BUSY = 5,
            CURSOR_DRAG = 6,
            CURSOR_CAN_DROP = 7,
            CURSOR_FORBIDDEN = 8,
            CURSOR_VSIZE = 9,
            CURSOR_HSIZE = 10,
            CURSOR_BDIAGSIZE = 11,
            CURSOR_FDIAGSIZE = 12,
            CURSOR_MOVE = 13,
            CURSOR_VSPLIT = 14,
            CURSOR_HSPLIT = 15,
            CURSOR_HELP = 16,
        }
        enum LayoutPreset {
            PRESET_TOP_LEFT = 0,
            PRESET_TOP_RIGHT = 1,
            PRESET_BOTTOM_LEFT = 2,
            PRESET_BOTTOM_RIGHT = 3,
            PRESET_CENTER_LEFT = 4,
            PRESET_CENTER_TOP = 5,
            PRESET_CENTER_RIGHT = 6,
            PRESET_CENTER_BOTTOM = 7,
            PRESET_CENTER = 8,
            PRESET_LEFT_WIDE = 9,
            PRESET_TOP_WIDE = 10,
            PRESET_RIGHT_WIDE = 11,
            PRESET_BOTTOM_WIDE = 12,
            PRESET_VCENTER_WIDE = 13,
            PRESET_HCENTER_WIDE = 14,
            PRESET_FULL_RECT = 15,
        }
        enum LayoutPresetMode {
            PRESET_MODE_MINSIZE = 0,
            PRESET_MODE_KEEP_WIDTH = 1,
            PRESET_MODE_KEEP_HEIGHT = 2,
            PRESET_MODE_KEEP_SIZE = 3,
        }
        enum SizeFlags {
            SIZE_SHRINK_BEGIN = 0,
            SIZE_FILL = 1,
            SIZE_EXPAND = 2,
            SIZE_EXPAND_FILL = 3,
            SIZE_SHRINK_CENTER = 4,
            SIZE_SHRINK_END = 8,
        }
        enum MouseFilter {
            MOUSE_FILTER_STOP = 0,
            MOUSE_FILTER_PASS = 1,
            MOUSE_FILTER_IGNORE = 2,
        }
        enum GrowDirection {
            GROW_DIRECTION_BEGIN = 0,
            GROW_DIRECTION_END = 1,
            GROW_DIRECTION_BOTH = 2,
        }
        enum Anchor {
            ANCHOR_BEGIN = 0,
            ANCHOR_END = 1,
        }
        enum LayoutDirection {
            LAYOUT_DIRECTION_INHERITED = 0,
            LAYOUT_DIRECTION_LOCALE = 1,
            LAYOUT_DIRECTION_LTR = 2,
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum TextDirection {
            TEXT_DIRECTION_INHERITED = 3,
            TEXT_DIRECTION_AUTO = 0,
            TEXT_DIRECTION_LTR = 1,
            TEXT_DIRECTION_RTL = 2,
        }
    }
    class Control extends CanvasItem {
        static readonly NOTIFICATION_RESIZED = 40
        static readonly NOTIFICATION_MOUSE_ENTER = 41
        static readonly NOTIFICATION_MOUSE_EXIT = 42
        static readonly NOTIFICATION_MOUSE_ENTER_SELF = 60
        static readonly NOTIFICATION_MOUSE_EXIT_SELF = 61
        static readonly NOTIFICATION_FOCUS_ENTER = 43
        static readonly NOTIFICATION_FOCUS_EXIT = 44
        static readonly NOTIFICATION_THEME_CHANGED = 45
        static readonly NOTIFICATION_SCROLL_BEGIN = 47
        static readonly NOTIFICATION_SCROLL_END = 48
        static readonly NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49
        accept_event(): void
        get_minimum_size(): Vector2
        get_combined_minimum_size(): Vector2
        _set_layout_mode(mode: any /*Control.LayoutMode*/): void
        _get_layout_mode(): any /*Control.LayoutMode*/
        _set_anchors_layout_preset(preset: number /*i64*/): void
        _get_anchors_layout_preset(): number /*i64*/
        set_anchors_preset(preset: Control.LayoutPreset, keep_offsets: boolean): void
        set_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode, margin: number /*i64*/): void
        set_anchors_and_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode, margin: number /*i64*/): void
        _set_anchor(side: Side, anchor: number /*f64*/): void
        set_anchor(side: Side, anchor: number /*f64*/, keep_offset: boolean, push_opposite_anchor: boolean): void
        get_anchor(side: Side): number /*f64*/
        set_offset(side: Side, offset: number /*f64*/): void
        get_offset(offset: Side): number /*f64*/
        set_anchor_and_offset(side: Side, anchor: number /*f64*/, offset: number /*f64*/, push_opposite_anchor: boolean): void
        set_begin(position: Vector2): void
        set_end(position: Vector2): void
        set_position(position: Vector2, keep_offsets: boolean): void
        _set_position(position: Vector2): void
        set_size(size: Vector2, keep_offsets: boolean): void
        reset_size(): void
        _set_size(size: Vector2): void
        set_custom_minimum_size(size: Vector2): void
        set_global_position(position: Vector2, keep_offsets: boolean): void
        _set_global_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_scale(scale: Vector2): void
        set_pivot_offset(pivot_offset: Vector2): void
        get_begin(): Vector2
        get_end(): Vector2
        get_position(): Vector2
        get_size(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_scale(): Vector2
        get_pivot_offset(): Vector2
        get_custom_minimum_size(): Vector2
        get_parent_area_size(): Vector2
        get_global_position(): Vector2
        get_screen_position(): Vector2
        get_rect(): Rect2
        get_global_rect(): Rect2
        set_focus_mode(mode: Control.FocusMode): void
        get_focus_mode(): Control.FocusMode
        has_focus(): boolean
        grab_focus(): void
        release_focus(): void
        find_prev_valid_focus(): Control
        find_next_valid_focus(): Control
        find_valid_focus_neighbor(side: Side): Control
        set_h_size_flags(flags: Control.SizeFlags): void
        get_h_size_flags(): Control.SizeFlags
        set_stretch_ratio(ratio: number /*f64*/): void
        get_stretch_ratio(): number /*f64*/
        set_v_size_flags(flags: Control.SizeFlags): void
        get_v_size_flags(): Control.SizeFlags
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
        get_parent_control(): Control
        set_h_grow_direction(direction: Control.GrowDirection): void
        get_h_grow_direction(): Control.GrowDirection
        set_v_grow_direction(direction: Control.GrowDirection): void
        get_v_grow_direction(): Control.GrowDirection
        set_tooltip_text(hint: string): void
        get_tooltip_text(): string
        get_tooltip(at_position: Vector2): string
        set_default_cursor_shape(shape: Control.CursorShape): void
        get_default_cursor_shape(): Control.CursorShape
        get_cursor_shape(position: Vector2): Control.CursorShape
        set_focus_neighbor(side: Side, neighbor: NodePath): void
        get_focus_neighbor(side: Side): NodePath
        set_focus_next(next: NodePath): void
        get_focus_next(): NodePath
        set_focus_previous(previous: NodePath): void
        get_focus_previous(): NodePath
        force_drag(data: any, preview: Control): void
        set_mouse_filter(filter: Control.MouseFilter): void
        get_mouse_filter(): Control.MouseFilter
        set_force_pass_scroll_events(force_pass_scroll_events: boolean): void
        is_force_pass_scroll_events(): boolean
        set_clip_contents(enable: boolean): void
        is_clipping_contents(): boolean
        grab_click_focus(): void
        set_drag_forwarding(drag_func: any /*CALLABLE*/, can_drop_func: any /*CALLABLE*/, drop_func: any /*CALLABLE*/): void
        set_drag_preview(control: Control): void
        is_drag_successful(): boolean
        warp_mouse(position: Vector2): void
        set_shortcut_context(node: Node): void
        get_shortcut_context(): Node
        update_minimum_size(): void
        set_layout_direction(direction: Control.LayoutDirection): void
        get_layout_direction(): Control.LayoutDirection
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        set_localize_numeral_system(enable: boolean): void
        is_localizing_numeral_system(): boolean
        // SIGNAL: resized
        // SIGNAL: gui_input
        // SIGNAL: mouse_entered
        // SIGNAL: mouse_exited
        // SIGNAL: focus_entered
        // SIGNAL: focus_exited
        // SIGNAL: size_flags_changed
        // SIGNAL: minimum_size_changed
        // SIGNAL: theme_changed
    }
    class ControlEditorPlugin extends EditorPlugin {
    }
    class ControlEditorPopupButton extends Button {
    }
    class ControlEditorPresetPicker extends MarginContainer {
    }
    class ControlEditorToolbar extends HBoxContainer {
    }
    class ConvexPolygonShape2D extends Shape2D {
        set_point_cloud(point_cloud: PackedVector2Array): void
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
    }
    class ConvexPolygonShape3D extends Shape3D {
        set_points(points: PackedVector3Array): void
        get_points(): PackedVector3Array
    }
    class CreateDialog extends ConfirmationDialog {
        // SIGNAL: create
        // SIGNAL: favorites_updated
    }
    class Crypto extends RefCounted {
        generate_random_bytes(size: number /*i64*/): PackedByteArray
        generate_rsa(size: number /*i64*/): CryptoKey
        generate_self_signed_certificate(key: CryptoKey, issuer_name: string, not_before: string, not_after: string): X509Certificate
        sign(hash_type: HashingContext.HashType, hash: PackedByteArray, key: CryptoKey): PackedByteArray
        verify(hash_type: HashingContext.HashType, hash: PackedByteArray, signature: PackedByteArray, key: CryptoKey): boolean
        encrypt(key: CryptoKey, plaintext: PackedByteArray): PackedByteArray
        decrypt(key: CryptoKey, ciphertext: PackedByteArray): PackedByteArray
        hmac_digest(hash_type: HashingContext.HashType, key: PackedByteArray, msg: PackedByteArray): PackedByteArray
        constant_time_compare(trusted: PackedByteArray, received: PackedByteArray): boolean
    }
    class CryptoKey extends Resource {
        save(path: string, public_only: boolean): GodotError
        load(path: string, public_only: boolean): GodotError
        is_public_only(): boolean
        save_to_string(public_only: boolean): string
        load_from_string(string_key: string, public_only: boolean): GodotError
    }
    class Cubemap extends ImageTextureLayered {
        create_placeholder(): Resource
    }
    class CubemapArray extends ImageTextureLayered {
        create_placeholder(): Resource
    }
    namespace Curve {
        enum TangentMode {
            TANGENT_FREE = 0,
            TANGENT_LINEAR = 1,
            TANGENT_MODE_COUNT = 2,
        }
    }
    class Curve extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        add_point(position: Vector2, left_tangent: number /*f64*/, right_tangent: number /*f64*/, left_mode: Curve.TangentMode, right_mode: Curve.TangentMode): number /*i64*/
        remove_point(index: number /*i64*/): void
        clear_points(): void
        get_point_position(index: number /*i64*/): Vector2
        set_point_value(index: number /*i64*/, y: number /*f64*/): void
        set_point_offset(index: number /*i64*/, offset: number /*f64*/): number /*i64*/
        sample(offset: number /*f64*/): number /*f64*/
        sample_baked(offset: number /*f64*/): number /*f64*/
        get_point_left_tangent(index: number /*i64*/): number /*f64*/
        get_point_right_tangent(index: number /*i64*/): number /*f64*/
        get_point_left_mode(index: number /*i64*/): Curve.TangentMode
        get_point_right_mode(index: number /*i64*/): Curve.TangentMode
        set_point_left_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        set_point_right_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        set_point_left_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        set_point_right_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        get_min_value(): number /*f64*/
        set_min_value(min: number /*f64*/): void
        get_max_value(): number /*f64*/
        set_max_value(max: number /*f64*/): void
        clean_dupes(): void
        bake(): void
        get_bake_resolution(): number /*i64*/
        set_bake_resolution(resolution: number /*i64*/): void
        _get_data(): Array
        _set_data(data: Array): void
        // SIGNAL: range_changed
    }
    class Curve2D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        add_point(position: Vector2, in_: Vector2, out_: Vector2, index: number /*i64*/): void
        set_point_position(idx: number /*i64*/, position: Vector2): void
        get_point_position(idx: number /*i64*/): Vector2
        set_point_in(idx: number /*i64*/, position: Vector2): void
        get_point_in(idx: number /*i64*/): Vector2
        set_point_out(idx: number /*i64*/, position: Vector2): void
        get_point_out(idx: number /*i64*/): Vector2
        remove_point(idx: number /*i64*/): void
        clear_points(): void
        sample(idx: number /*i64*/, t: number /*f64*/): Vector2
        samplef(fofs: number /*f64*/): Vector2
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        get_baked_length(): number /*f64*/
        sample_baked(offset: number /*f64*/, cubic: boolean): Vector2
        sample_baked_with_rotation(offset: number /*f64*/, cubic: boolean): Transform2D
        get_baked_points(): PackedVector2Array
        get_closest_point(to_point: Vector2): Vector2
        get_closest_offset(to_point: Vector2): number /*f64*/
        tessellate(max_stages: number /*i64*/, tolerance_degrees: number /*f64*/): PackedVector2Array
        tessellate_even_length(max_stages: number /*i64*/, tolerance_length: number /*f64*/): PackedVector2Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
    }
    class Curve3D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        add_point(position: Vector3, in_: Vector3, out_: Vector3, index: number /*i64*/): void
        set_point_position(idx: number /*i64*/, position: Vector3): void
        get_point_position(idx: number /*i64*/): Vector3
        set_point_tilt(idx: number /*i64*/, tilt: number /*f64*/): void
        get_point_tilt(idx: number /*i64*/): number /*f64*/
        set_point_in(idx: number /*i64*/, position: Vector3): void
        get_point_in(idx: number /*i64*/): Vector3
        set_point_out(idx: number /*i64*/, position: Vector3): void
        get_point_out(idx: number /*i64*/): Vector3
        remove_point(idx: number /*i64*/): void
        clear_points(): void
        sample(idx: number /*i64*/, t: number /*f64*/): Vector3
        samplef(fofs: number /*f64*/): Vector3
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        set_up_vector_enabled(enable: boolean): void
        is_up_vector_enabled(): boolean
        get_baked_length(): number /*f64*/
        sample_baked(offset: number /*f64*/, cubic: boolean): Vector3
        sample_baked_with_rotation(offset: number /*f64*/, cubic: boolean, apply_tilt: boolean): Transform3D
        sample_baked_up_vector(offset: number /*f64*/, apply_tilt: boolean): Vector3
        get_baked_points(): PackedVector3Array
        get_baked_tilts(): PackedFloat32Array
        get_baked_up_vectors(): PackedVector3Array
        get_closest_point(to_point: Vector3): Vector3
        get_closest_offset(to_point: Vector3): number /*f64*/
        tessellate(max_stages: number /*i64*/, tolerance_degrees: number /*f64*/): PackedVector3Array
        tessellate_even_length(max_stages: number /*i64*/, tolerance_length: number /*f64*/): PackedVector3Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
    }
    class CurveEditorPlugin extends EditorPlugin {
    }
    class CurvePreviewGenerator extends EditorResourcePreviewGenerator {
    }
    namespace CurveTexture {
        enum TextureMode {
            TEXTURE_MODE_RGB = 0,
            TEXTURE_MODE_RED = 1,
        }
    }
    class CurveTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_texture_mode(texture_mode: CurveTexture.TextureMode): void
        get_texture_mode(): CurveTexture.TextureMode
        _update(): void
    }
    class CurveXYZTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve_x(curve: Curve): void
        get_curve_x(): Curve
        set_curve_y(curve: Curve): void
        get_curve_y(): Curve
        set_curve_z(curve: Curve): void
        get_curve_z(): Curve
        _update(): void
    }
    class CylinderMesh extends PrimitiveMesh {
        set_top_radius(radius: number /*f64*/): void
        get_top_radius(): number /*f64*/
        set_bottom_radius(radius: number /*f64*/): void
        get_bottom_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_cap_top(cap_top: boolean): void
        is_cap_top(): boolean
        set_cap_bottom(cap_bottom: boolean): void
        is_cap_bottom(): boolean
    }
    class CylinderShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
    }
    class DTLSServer extends RefCounted {
        setup(server_options: TLSOptions): GodotError
        take_connection(udp_peer: PacketPeerUDP): PacketPeerDTLS
    }
    class DampedSpringJoint2D extends Joint2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_rest_length(rest_length: number /*f64*/): void
        get_rest_length(): number /*f64*/
        set_stiffness(stiffness: number /*f64*/): void
        get_stiffness(): number /*f64*/
        set_damping(damping: number /*f64*/): void
        get_damping(): number /*f64*/
    }
    class DebugAdapterParser extends Object {
        req_initialize(params: Dictionary): Dictionary
        req_disconnect(params: Dictionary): Dictionary
        req_launch(params: Dictionary): Dictionary
        req_attach(params: Dictionary): Dictionary
        req_restart(params: Dictionary): Dictionary
        req_terminate(params: Dictionary): Dictionary
        req_configurationDone(params: Dictionary): Dictionary
        req_pause(params: Dictionary): Dictionary
        req_continue(params: Dictionary): Dictionary
        req_threads(params: Dictionary): Dictionary
        req_stackTrace(params: Dictionary): Dictionary
        req_setBreakpoints(params: Dictionary): Dictionary
        req_breakpointLocations(params: Dictionary): Dictionary
        req_scopes(params: Dictionary): Dictionary
        req_variables(params: Dictionary): Dictionary
        req_next(params: Dictionary): Dictionary
        req_stepIn(params: Dictionary): Dictionary
        req_evaluate(params: Dictionary): Dictionary
        ["req_godot/put_msg"]: (params: Dictionary) => Dictionary
    }
    class DebugAdapterServer extends EditorPlugin {
    }
    class DebuggerEditorPlugin extends EditorPlugin {
    }
    namespace Decal {
        enum DecalTexture {
            TEXTURE_ALBEDO = 0,
            TEXTURE_NORMAL = 1,
            TEXTURE_ORM = 2,
            TEXTURE_EMISSION = 3,
            TEXTURE_MAX = 4,
        }
    }
    class Decal extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_texture(type: Decal.DecalTexture, texture: Texture2D): void
        get_texture(type: Decal.DecalTexture): Texture2D
        set_emission_energy(energy: number /*f64*/): void
        get_emission_energy(): number /*f64*/
        set_albedo_mix(energy: number /*f64*/): void
        get_albedo_mix(): number /*f64*/
        set_modulate(color: Color): void
        get_modulate(): Color
        set_upper_fade(fade: number /*f64*/): void
        get_upper_fade(): number /*f64*/
        set_lower_fade(fade: number /*f64*/): void
        get_lower_fade(): number /*f64*/
        set_normal_fade(fade: number /*f64*/): void
        get_normal_fade(): number /*f64*/
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: number /*f64*/): void
        get_distance_fade_begin(): number /*f64*/
        set_distance_fade_length(distance: number /*f64*/): void
        get_distance_fade_length(): number /*f64*/
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
    }
    class DecalGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class DefaultThemeEditorPreview extends ThemeEditorPreview {
    }
    class DependencyEditor extends AcceptDialog {
    }
    class DependencyEditorOwners extends AcceptDialog {
    }
    class DependencyErrorDialog extends ConfirmationDialog {
    }
    class DependencyRemoveDialog extends ConfirmationDialog {
        // SIGNAL: resource_removed
        // SIGNAL: file_removed
        // SIGNAL: folder_removed
    }
    class DirAccess extends RefCounted {
        static open(path: string): DirAccess
        static get_open_error(): GodotError
        list_dir_begin(): GodotError
        get_next(): string
        current_is_dir(): boolean
        list_dir_end(): void
        get_files(): PackedStringArray
        static get_files_at(path: string): PackedStringArray
        get_directories(): PackedStringArray
        static get_directories_at(path: string): PackedStringArray
        static get_drive_count(): number /*i64*/
        static get_drive_name(idx: number /*i64*/): string
        get_current_drive(): number /*i64*/
        change_dir(to_dir: string): GodotError
        get_current_dir(include_drive: boolean): string
        make_dir(path: string): GodotError
        static make_dir_absolute(path: string): GodotError
        make_dir_recursive(path: string): GodotError
        static make_dir_recursive_absolute(path: string): GodotError
        file_exists(path: string): boolean
        dir_exists(path: string): boolean
        static dir_exists_absolute(path: string): boolean
        get_space_left(): number /*i64*/
        copy(from: string, to: string, chmod_flags: number /*i64*/): GodotError
        static copy_absolute(from: string, to: string, chmod_flags: number /*i64*/): GodotError
        rename(from: string, to: string): GodotError
        static rename_absolute(from: string, to: string): GodotError
        remove(path: string): GodotError
        static remove_absolute(path: string): GodotError
        set_include_navigational(enable: boolean): void
        get_include_navigational(): boolean
        set_include_hidden(enable: boolean): void
        get_include_hidden(): boolean
        is_case_sensitive(path: string): boolean
    }
    class DirectionalLight2D extends Light2D {
        set_max_distance(pixels: number /*f64*/): void
        get_max_distance(): number /*f64*/
    }
    namespace DirectionalLight3D {
        enum ShadowMode {
            SHADOW_ORTHOGONAL = 0,
            SHADOW_PARALLEL_2_SPLITS = 1,
            SHADOW_PARALLEL_4_SPLITS = 2,
        }
        enum SkyMode {
            SKY_MODE_LIGHT_AND_SKY = 0,
            SKY_MODE_LIGHT_ONLY = 1,
            SKY_MODE_SKY_ONLY = 2,
        }
    }
    class DirectionalLight3D extends Light3D {
        set_shadow_mode(mode: DirectionalLight3D.ShadowMode): void
        get_shadow_mode(): DirectionalLight3D.ShadowMode
        set_blend_splits(enabled: boolean): void
        is_blend_splits_enabled(): boolean
        set_sky_mode(mode: DirectionalLight3D.SkyMode): void
        get_sky_mode(): DirectionalLight3D.SkyMode
    }
    class DirectoryCreateDialog extends ConfirmationDialog {
        // SIGNAL: dir_created
    }
    class DynamicFontImportSettings extends ConfirmationDialog {
    }
    class DynamicFontImportSettingsData extends RefCounted {
    }
    namespace ENetConnection {
        enum CompressionMode {
            COMPRESS_NONE = 0,
            COMPRESS_RANGE_CODER = 1,
            COMPRESS_FASTLZ = 2,
            COMPRESS_ZLIB = 3,
            COMPRESS_ZSTD = 4,
        }
        enum EventType {
            EVENT_ERROR = -1,
            EVENT_NONE = 0,
            EVENT_CONNECT = 1,
            EVENT_DISCONNECT = 2,
            EVENT_RECEIVE = 3,
        }
        enum HostStatistic {
            HOST_TOTAL_SENT_DATA = 0,
            HOST_TOTAL_SENT_PACKETS = 1,
            HOST_TOTAL_RECEIVED_DATA = 2,
            HOST_TOTAL_RECEIVED_PACKETS = 3,
        }
    }
    class ENetConnection extends RefCounted {
        create_host_bound(bind_address: string, bind_port: number /*i64*/, max_peers: number /*i64*/, max_channels: number /*i64*/, in_bandwidth: number /*i64*/, out_bandwidth: number /*i64*/): GodotError
        create_host(max_peers: number /*i64*/, max_channels: number /*i64*/, in_bandwidth: number /*i64*/, out_bandwidth: number /*i64*/): GodotError
        destroy(): void
        connect_to_host(address: string, port: number /*i64*/, channels: number /*i64*/, data: number /*i64*/): ENetPacketPeer
        service(timeout: number /*i64*/): Array
        flush(): void
        bandwidth_limit(in_bandwidth: number /*i64*/, out_bandwidth: number /*i64*/): void
        channel_limit(limit: number /*i64*/): void
        broadcast(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): void
        compress(mode: ENetConnection.CompressionMode): void
        dtls_server_setup(server_options: TLSOptions): GodotError
        dtls_client_setup(hostname: string, client_options: TLSOptions): GodotError
        refuse_new_connections(refuse: boolean): void
        pop_statistic(statistic: ENetConnection.HostStatistic): number /*f64*/
        get_max_channels(): number /*i64*/
        get_local_port(): number /*i64*/
        get_peers(): Array
        socket_send(destination_address: string, destination_port: number /*i64*/, packet: PackedByteArray): void
    }
    class ENetMultiplayerPeer extends MultiplayerPeer {
        create_server(port: number /*i64*/, max_clients: number /*i64*/, max_channels: number /*i64*/, in_bandwidth: number /*i64*/, out_bandwidth: number /*i64*/): GodotError
        create_client(address: string, port: number /*i64*/, channel_count: number /*i64*/, in_bandwidth: number /*i64*/, out_bandwidth: number /*i64*/, local_port: number /*i64*/): GodotError
        create_mesh(unique_id: number /*i64*/): GodotError
        add_mesh_peer(peer_id: number /*i64*/, host: ENetConnection): GodotError
        set_bind_ip(ip: string): void
        get_host(): ENetConnection
        get_peer(id: number /*i64*/): ENetPacketPeer
    }
    namespace ENetPacketPeer {
        enum PeerState {
            STATE_DISCONNECTED = 0,
            STATE_CONNECTING = 1,
            STATE_ACKNOWLEDGING_CONNECT = 2,
            STATE_CONNECTION_PENDING = 3,
            STATE_CONNECTION_SUCCEEDED = 4,
            STATE_CONNECTED = 5,
            STATE_DISCONNECT_LATER = 6,
            STATE_DISCONNECTING = 7,
            STATE_ACKNOWLEDGING_DISCONNECT = 8,
            STATE_ZOMBIE = 9,
        }
        enum PeerStatistic {
            PEER_PACKET_LOSS = 0,
            PEER_PACKET_LOSS_VARIANCE = 1,
            PEER_PACKET_LOSS_EPOCH = 2,
            PEER_ROUND_TRIP_TIME = 3,
            PEER_ROUND_TRIP_TIME_VARIANCE = 4,
            PEER_LAST_ROUND_TRIP_TIME = 5,
            PEER_LAST_ROUND_TRIP_TIME_VARIANCE = 6,
            PEER_PACKET_THROTTLE = 7,
            PEER_PACKET_THROTTLE_LIMIT = 8,
            PEER_PACKET_THROTTLE_COUNTER = 9,
            PEER_PACKET_THROTTLE_EPOCH = 10,
            PEER_PACKET_THROTTLE_ACCELERATION = 11,
            PEER_PACKET_THROTTLE_DECELERATION = 12,
            PEER_PACKET_THROTTLE_INTERVAL = 13,
        }
    }
    class ENetPacketPeer extends PacketPeer {
        static readonly PACKET_LOSS_SCALE = 65536
        static readonly PACKET_THROTTLE_SCALE = 32
        static readonly FLAG_RELIABLE = 1
        static readonly FLAG_UNSEQUENCED = 2
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        peer_disconnect(data: number /*i64*/): void
        peer_disconnect_later(data: number /*i64*/): void
        peer_disconnect_now(data: number /*i64*/): void
        ping(): void
        ping_interval(ping_interval: number /*i64*/): void
        reset(): void
        send(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): GodotError
        throttle_configure(interval: number /*i64*/, acceleration: number /*i64*/, deceleration: number /*i64*/): void
        set_timeout(timeout: number /*i64*/, timeout_min: number /*i64*/, timeout_max: number /*i64*/): void
        get_remote_address(): string
        get_remote_port(): number /*i64*/
        get_statistic(statistic: ENetPacketPeer.PeerStatistic): number /*f64*/
        get_state(): ENetPacketPeer.PeerState
        get_channels(): number /*i64*/
        is_active(): boolean
    }
    class EditorAbout extends AcceptDialog {
        _version_button_pressed(): void
    }
    class EditorAssetLibrary extends PanelContainer {
        // SIGNAL: install_asset
    }
    class EditorAudioBus extends PanelContainer {
        update_bus(): void
        update_send(): void
        // SIGNAL: duplicate_request
        // SIGNAL: delete_request
        // SIGNAL: vol_reset_request
        // SIGNAL: drop_end_request
        // SIGNAL: dropped
    }
    class EditorAudioBuses extends VBoxContainer {
        _update_bus(_unnamed_arg0: number /*i64*/): void
        _update_sends(): void
        _select_layout(): void
    }
    class EditorAudioMeterNotches extends Control {
        add_notch(_unnamed_arg0: number /*f64*/, _unnamed_arg1: number /*f64*/, _unnamed_arg2: boolean): void
        _draw_audio_notches(): void
    }
    class EditorAudioStreamPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorAutoloadSettings extends VBoxContainer {
        update_autoload(): void
        autoload_add(_unnamed_arg0: string, _unnamed_arg1: string): boolean
        autoload_remove(_unnamed_arg0: string): void
        // SIGNAL: autoload_changed
    }
    class EditorBitmapPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    namespace EditorBuildProfile {
        enum BuildOption {
            BUILD_OPTION_3D = 0,
            BUILD_OPTION_PHYSICS_2D = 1,
            BUILD_OPTION_PHYSICS_3D = 2,
            BUILD_OPTION_NAVIGATION = 3,
            BUILD_OPTION_XR = 4,
            BUILD_OPTION_RENDERING_DEVICE = 5,
            BUILD_OPTION_OPENGL = 6,
            BUILD_OPTION_VULKAN = 7,
            BUILD_OPTION_TEXT_SERVER_FALLBACK = 8,
            BUILD_OPTION_TEXT_SERVER_ADVANCED = 9,
            BUILD_OPTION_DYNAMIC_FONTS = 10,
            BUILD_OPTION_WOFF2_FONTS = 11,
            BUILD_OPTION_GRPAHITE_FONTS = 12,
            BUILD_OPTION_MSDFGEN = 13,
            BUILD_OPTION_MAX = 14,
        }
        enum BuildOptionCategory {
            BUILD_OPTION_CATEGORY_GENERAL = 0,
            BUILD_OPTION_CATEGORY_TEXT_SERVER = 1,
            BUILD_OPTION_CATEGORY_MAX = 2,
        }
    }
    class EditorBuildProfile extends RefCounted {
        set_disable_class(class_name: StringName, disable: boolean): void
        is_class_disabled(class_name: StringName): boolean
        set_disable_build_option(build_option: EditorBuildProfile.BuildOption, disable: boolean): void
        is_build_option_disabled(build_option: EditorBuildProfile.BuildOption): boolean
        get_build_option_name(build_option: EditorBuildProfile.BuildOption): string
        save_to_file(path: string): GodotError
        load_from_file(path: string): GodotError
    }
    class EditorBuildProfileManager extends AcceptDialog {
        _update_selected_profile(): void
    }
    class EditorCommandPalette extends ConfirmationDialog {
        add_command(command_name: string, key_name: string, binded_callable: any /*CALLABLE*/, shortcut_text: string): void
        remove_command(key_name: string): void
    }
    class EditorDebuggerInspector extends EditorInspector {
        // SIGNAL: object_selected
        // SIGNAL: object_edited
        // SIGNAL: object_property_updated
    }
    class EditorDebuggerNode extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        // SIGNAL: goto_script_line
        // SIGNAL: set_execution
        // SIGNAL: clear_execution
        // SIGNAL: breaked
        // SIGNAL: breakpoint_toggled
        // SIGNAL: breakpoint_set_in_tree
        // SIGNAL: breakpoints_cleared_in_tree
    }
    class EditorDebuggerPlugin extends RefCounted {
        get_session(id: number /*i64*/): EditorDebuggerSession
        get_sessions(): Array
    }
    class EditorDebuggerRemoteObject extends Object {
        get_title(): string
        get_variant(_unnamed_arg0: StringName): any
        clear(): void
        get_remote_object_id(): number /*i64*/
        // SIGNAL: value_edited
    }
    class EditorDebuggerSession extends RefCounted {
        send_message(message: string, data: Array): void
        toggle_profiler(profiler: string, enable: boolean, data: Array): void
        is_breaked(): boolean
        is_debuggable(): boolean
        is_active(): boolean
        add_session_tab(control: Control): void
        remove_session_tab(control: Control): void
        // SIGNAL: started
        // SIGNAL: stopped
        // SIGNAL: breaked
        // SIGNAL: continued
    }
    class EditorDebuggerTree extends Tree {
        // SIGNAL: object_selected
        // SIGNAL: save_node
        // SIGNAL: open
    }
    class EditorDirDialog extends ConfirmationDialog {
        // SIGNAL: dir_selected
    }
    class EditorExport extends Node {
        // SIGNAL: export_presets_updated
    }
    class EditorExportGDScript extends EditorExportPlugin {
    }
    class EditorExportPlatform extends RefCounted {
        get_os_name(): string
    }
    class EditorExportPlatformAndroid extends EditorExportPlatform {
    }
    class EditorExportPlatformIOS extends EditorExportPlatform {
    }
    class EditorExportPlatformLinuxBSD extends EditorExportPlatformPC {
    }
    class EditorExportPlatformMacOS extends EditorExportPlatform {
    }
    class EditorExportPlatformPC extends EditorExportPlatform {
    }
    class EditorExportPlatformWeb extends EditorExportPlatform {
    }
    class EditorExportPlatformWindows extends EditorExportPlatformPC {
    }
    class EditorExportPlugin extends RefCounted {
        add_shared_object(path: string, tags: PackedStringArray, target: string): void
        add_ios_project_static_lib(path: string): void
        add_file(path: string, file: PackedByteArray, remap: boolean): void
        add_ios_framework(path: string): void
        add_ios_embedded_framework(path: string): void
        add_ios_plist_content(plist_content: string): void
        add_ios_linker_flags(flags: string): void
        add_ios_bundle_file(path: string): void
        add_ios_cpp_code(code: string): void
        add_macos_plugin_file(path: string): void
        skip(): void
        get_option(name: StringName): any
    }
    namespace EditorFeatureProfile {
        enum Feature {
            FEATURE_3D = 0,
            FEATURE_SCRIPT = 1,
            FEATURE_ASSET_LIB = 2,
            FEATURE_SCENE_TREE = 3,
            FEATURE_NODE_DOCK = 4,
            FEATURE_FILESYSTEM_DOCK = 5,
            FEATURE_IMPORT_DOCK = 6,
            FEATURE_HISTORY_DOCK = 7,
            FEATURE_MAX = 8,
        }
    }
    class EditorFeatureProfile extends RefCounted {
        set_disable_class(class_name: StringName, disable: boolean): void
        is_class_disabled(class_name: StringName): boolean
        set_disable_class_editor(class_name: StringName, disable: boolean): void
        is_class_editor_disabled(class_name: StringName): boolean
        set_disable_class_property(class_name: StringName, property: StringName, disable: boolean): void
        is_class_property_disabled(class_name: StringName, property: StringName): boolean
        set_disable_feature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        is_feature_disabled(feature: EditorFeatureProfile.Feature): boolean
        get_feature_name(feature: EditorFeatureProfile.Feature): string
        save_to_file(path: string): GodotError
        load_from_file(path: string): GodotError
    }
    class EditorFeatureProfileManager extends AcceptDialog {
        // SIGNAL: current_feature_profile_changed
    }
    namespace EditorFileDialog {
        enum FileMode {
            FILE_MODE_OPEN_FILE = 0,
            FILE_MODE_OPEN_FILES = 1,
            FILE_MODE_OPEN_DIR = 2,
            FILE_MODE_OPEN_ANY = 3,
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            ACCESS_RESOURCES = 0,
            ACCESS_USERDATA = 1,
            ACCESS_FILESYSTEM = 2,
        }
        enum DisplayMode {
            DISPLAY_THUMBNAILS = 0,
            DISPLAY_LIST = 1,
        }
    }
    class EditorFileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        clear_filters(): void
        add_filter(filter: string, description: string): void
        set_filters(filters: PackedStringArray): void
        get_filters(): PackedStringArray
        get_current_dir(): string
        get_current_file(): string
        get_current_path(): string
        set_current_dir(dir: string): void
        set_current_file(file: string): void
        set_current_path(path: string): void
        set_file_mode(mode: EditorFileDialog.FileMode): void
        get_file_mode(): EditorFileDialog.FileMode
        get_vbox(): VBoxContainer
        get_line_edit(): LineEdit
        set_access(access: EditorFileDialog.Access): void
        get_access(): EditorFileDialog.Access
        set_show_hidden_files(show: boolean): void
        is_showing_hidden_files(): boolean
        _thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        set_display_mode(mode: EditorFileDialog.DisplayMode): void
        get_display_mode(): EditorFileDialog.DisplayMode
        _thumbnail_result(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        set_disable_overwrite_warning(disable: boolean): void
        is_overwrite_warning_disabled(): boolean
        add_side_menu(menu: Control, title: string): void
        invalidate(): void
        // SIGNAL: file_selected
        // SIGNAL: files_selected
        // SIGNAL: dir_selected
    }
    class EditorFileServer extends Object {
    }
    class EditorFileSystem extends Node {
        get_filesystem(): EditorFileSystemDirectory
        is_scanning(): boolean
        get_scanning_progress(): number /*f64*/
        scan(): void
        scan_sources(): void
        update_file(path: string): void
        get_filesystem_path(path: string): EditorFileSystemDirectory
        get_file_type(path: string): string
        reimport_files(files: PackedStringArray): void
        // SIGNAL: filesystem_changed
        // SIGNAL: script_classes_updated
        // SIGNAL: sources_changed
        // SIGNAL: resources_reimported
        // SIGNAL: resources_reload
    }
    class EditorFileSystemDirectory extends Object {
        get_subdir_count(): number /*i64*/
        get_subdir(idx: number /*i64*/): EditorFileSystemDirectory
        get_file_count(): number /*i64*/
        get_file(idx: number /*i64*/): string
        get_file_path(idx: number /*i64*/): string
        get_file_type(idx: number /*i64*/): StringName
        get_file_script_class_name(idx: number /*i64*/): string
        get_file_script_class_extends(idx: number /*i64*/): string
        get_file_import_is_valid(idx: number /*i64*/): boolean
        get_name(): string
        get_path(): string
        get_parent(): EditorFileSystemDirectory
        find_file_index(name: string): number /*i64*/
        find_dir_index(name: string): number /*i64*/
    }
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
    }
    class EditorFileSystemImportFormatSupportQueryFBX extends EditorFileSystemImportFormatSupportQuery {
    }
    class EditorFontPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorGradientPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorHelpBit extends MarginContainer {
        set_text(text: string): void
        // SIGNAL: request_hide
    }
    class EditorHelpSearch extends ConfirmationDialog {
        // SIGNAL: go_to_help
    }
    class EditorImagePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorImportBlendRunner extends Node {
    }
    class EditorImportPlugin extends ResourceImporter {
        append_import_external_resource(path: string, custom_options: Dictionary, custom_importer: string, generator_parameters: any): GodotError
    }
    class EditorInspector extends ScrollContainer {
        _edit_request_change(_unnamed_arg0: Object, _unnamed_arg1: string): void
        get_selected_path(): string
        get_edited_object(): Object
        // SIGNAL: property_selected
        // SIGNAL: property_keyed
        // SIGNAL: property_deleted
        // SIGNAL: resource_selected
        // SIGNAL: object_id_selected
        // SIGNAL: property_edited
        // SIGNAL: property_toggled
        // SIGNAL: edited_object_changed
        // SIGNAL: restart_requested
    }
    class EditorInspectorCategory extends Control {
    }
    class EditorInspectorDefaultPlugin extends EditorInspectorPlugin {
    }
    class EditorInspectorPlugin extends RefCounted {
        add_custom_control(control: Control): void
        add_property_editor(property: string, editor: Control, add_to_end: boolean): void
        add_property_editor_for_multiple_properties(label: string, properties: PackedStringArray, editor: Control): void
    }
    class EditorInspectorPlugin3DTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginAnimationTrackKeyEdit extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginAudioStream extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginBitMap extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginBoneMap extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginControl extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginCurve extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginFontPreview extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginFontVariation extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginGradient extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginGradientTexture2D extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginInputEvent extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginLayeredTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginMaterial extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginMesh extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginPackedScene extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginSkeleton extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginStyleBox extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginSubViewportPreview extends EditorInspectorPluginTexture {
    }
    class EditorInspectorPluginSystemFont extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTextureRegion extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTileData extends EditorInspectorPlugin {
    }
    class EditorInspectorRootMotionPlugin extends EditorInspectorPlugin {
    }
    class EditorInspectorVisualShaderModePlugin extends EditorInspectorPlugin {
    }
    class EditorJSONSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    class EditorLayoutsDialog extends ConfirmationDialog {
        // SIGNAL: name_confirmed
    }
    class EditorLocaleDialog extends ConfirmationDialog {
        // SIGNAL: locale_selected
    }
    class EditorLog extends HBoxContainer {
    }
    class EditorMaterialPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorMeshPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorNativeShaderSourceVisualizer extends AcceptDialog {
        _inspect_shader(_unnamed_arg0: RID): void
    }
    class EditorNetworkProfiler extends VBoxContainer {
        // SIGNAL: enable_profiling
        // SIGNAL: open_request
    }
    class EditorNode extends Node {
        push_item(object: Object, property: string, inspector_only: boolean): void
        set_edited_scene(_unnamed_arg0: Node): void
        open_request(_unnamed_arg0: string): void
        edit_foreign_resource(_unnamed_arg0: Resource): void
        is_resource_read_only(_unnamed_arg0: Resource, _unnamed_arg1: boolean): boolean
        stop_child_process(_unnamed_arg0: number /*i64*/): void
        _set_main_scene_state(_unnamed_arg0: Dictionary, _unnamed_arg1: Node): void
        _update_recent_scenes(): void
        // SIGNAL: request_help_search
        // SIGNAL: script_add_function_request
        // SIGNAL: resource_saved
        // SIGNAL: scene_saved
        // SIGNAL: scene_changed
        // SIGNAL: scene_closed
    }
    class EditorNode3DGizmo extends Node3DGizmo {
        add_lines(lines: PackedVector3Array, material: Material, billboard: boolean, modulate: Color): void
        add_mesh(mesh: Mesh, material: Material, transform: Transform3D, skeleton: SkinReference): void
        add_collision_segments(segments: PackedVector3Array): void
        add_collision_triangles(triangles: TriangleMesh): void
        add_unscaled_billboard(material: Material, default_scale: number /*f64*/, modulate: Color): void
        add_handles(handles: PackedVector3Array, material: Material, ids: PackedInt32Array, billboard: boolean, secondary: boolean): void
        set_node_3d(node: Node): void
        get_node_3d(): Node3D
        get_plugin(): EditorNode3DGizmoPlugin
        clear(): void
        set_hidden(hidden: boolean): void
        is_subgizmo_selected(id: number /*i64*/): boolean
        get_subgizmo_selection(): PackedInt32Array
    }
    class EditorNode3DGizmoPlugin extends Resource {
        create_material(name: string, color: Color, billboard: boolean, on_top: boolean, use_vertex_color: boolean): void
        create_icon_material(name: string, texture: Texture2D, on_top: boolean, color: Color): void
        create_handle_material(name: string, billboard: boolean, texture: Texture2D): void
        add_material(name: string, material: StandardMaterial3D): void
        get_material(name: string, gizmo: EditorNode3DGizmo): StandardMaterial3D
    }
    class EditorOBJImporter extends EditorSceneFormatImporter {
    }
    class EditorObjectSelector extends Button {
    }
    class EditorPackedScenePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorPaths extends Object {
        get_data_dir(): string
        get_config_dir(): string
        get_cache_dir(): string
        is_self_contained(): boolean
        get_self_contained_file(): string
        get_project_settings_dir(): string
    }
    class EditorPerformanceProfiler extends HSplitContainer {
    }
    namespace EditorPlugin {
        enum CustomControlContainer {
            CONTAINER_TOOLBAR = 0,
            CONTAINER_SPATIAL_EDITOR_MENU = 1,
            CONTAINER_SPATIAL_EDITOR_SIDE_LEFT = 2,
            CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT = 3,
            CONTAINER_SPATIAL_EDITOR_BOTTOM = 4,
            CONTAINER_CANVAS_EDITOR_MENU = 5,
            CONTAINER_CANVAS_EDITOR_SIDE_LEFT = 6,
            CONTAINER_CANVAS_EDITOR_SIDE_RIGHT = 7,
            CONTAINER_CANVAS_EDITOR_BOTTOM = 8,
            CONTAINER_INSPECTOR_BOTTOM = 9,
            CONTAINER_PROJECT_SETTING_TAB_LEFT = 10,
            CONTAINER_PROJECT_SETTING_TAB_RIGHT = 11,
        }
        enum DockSlot {
            DOCK_SLOT_LEFT_UL = 0,
            DOCK_SLOT_LEFT_BL = 1,
            DOCK_SLOT_LEFT_UR = 2,
            DOCK_SLOT_LEFT_BR = 3,
            DOCK_SLOT_RIGHT_UL = 4,
            DOCK_SLOT_RIGHT_BL = 5,
            DOCK_SLOT_RIGHT_UR = 6,
            DOCK_SLOT_RIGHT_BR = 7,
            DOCK_SLOT_MAX = 8,
        }
        enum AfterGUIInput {
            AFTER_GUI_INPUT_PASS = 0,
            AFTER_GUI_INPUT_STOP = 1,
            AFTER_GUI_INPUT_CUSTOM = 2,
        }
    }
    class EditorPlugin extends Node {
        add_control_to_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        add_control_to_bottom_panel(control: Control, title: string): Button
        add_control_to_dock(slot: EditorPlugin.DockSlot, control: Control): void
        remove_control_from_docks(control: Control): void
        remove_control_from_bottom_panel(control: Control): void
        remove_control_from_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        add_tool_menu_item(name: string, callable: any /*CALLABLE*/): void
        add_tool_submenu_item(name: string, submenu: PopupMenu): void
        remove_tool_menu_item(name: string): void
        get_export_as_menu(): PopupMenu
        add_custom_type(type: string, base: string, script: Script, icon: Texture2D): void
        remove_custom_type(type: string): void
        add_autoload_singleton(name: string, path: string): void
        remove_autoload_singleton(name: string): void
        update_overlays(): number /*i64*/
        make_bottom_panel_item_visible(item: Control): void
        hide_bottom_panel(): void
        get_undo_redo(): EditorUndoRedoManager
        add_undo_redo_inspector_hook_callback(callable: any /*CALLABLE*/): void
        remove_undo_redo_inspector_hook_callback(callable: any /*CALLABLE*/): void
        queue_save_layout(): void
        add_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        remove_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        add_import_plugin(importer: EditorImportPlugin, first_priority: boolean): void
        remove_import_plugin(importer: EditorImportPlugin): void
        add_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter, first_priority: boolean): void
        remove_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter): void
        add_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin, first_priority: boolean): void
        remove_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin): void
        add_export_plugin(plugin: EditorExportPlugin): void
        remove_export_plugin(plugin: EditorExportPlugin): void
        add_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        remove_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        add_inspector_plugin(plugin: EditorInspectorPlugin): void
        remove_inspector_plugin(plugin: EditorInspectorPlugin): void
        add_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        remove_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        set_input_event_forwarding_always_enabled(): void
        set_force_draw_over_forwarding_enabled(): void
        get_editor_interface(): EditorInterface
        get_script_create_dialog(): ScriptCreateDialog
        add_debugger_plugin(script: EditorDebuggerPlugin): void
        remove_debugger_plugin(script: EditorDebuggerPlugin): void
        get_plugin_version(): string
        // SIGNAL: scene_changed
        // SIGNAL: scene_closed
        // SIGNAL: main_screen_changed
        // SIGNAL: resource_saved
        // SIGNAL: project_settings_changed
    }
    class EditorPluginCSG extends EditorPlugin {
    }
    class EditorPluginSettings extends VBoxContainer {
    }
    class EditorProfiler extends VBoxContainer {
        // SIGNAL: enable_profiling
        // SIGNAL: break_request
    }
    class EditorProperty extends Container {
        set_label(text: string): void
        get_label(): string
        set_read_only(read_only: boolean): void
        is_read_only(): boolean
        set_checkable(checkable: boolean): void
        is_checkable(): boolean
        set_checked(checked: boolean): void
        is_checked(): boolean
        set_draw_warning(draw_warning: boolean): void
        is_draw_warning(): boolean
        set_keying(keying: boolean): void
        is_keying(): boolean
        set_deletable(deletable: boolean): void
        is_deletable(): boolean
        get_edited_property(): StringName
        get_edited_object(): Object
        update_property(): void
        add_focusable(control: Control): void
        set_bottom_editor(editor: Control): void
        emit_changed(property: StringName, value: any, field: StringName, changing: boolean): void
        _update_editor_property_status(): void
        // SIGNAL: property_changed
        // SIGNAL: multiple_properties_changed
        // SIGNAL: property_keyed
        // SIGNAL: property_deleted
        // SIGNAL: property_keyed_with_value
        // SIGNAL: property_checked
        // SIGNAL: property_pinned
        // SIGNAL: property_can_revert_changed
        // SIGNAL: resource_selected
        // SIGNAL: object_id_selected
        // SIGNAL: selected
    }
    class EditorPropertyCheck extends EditorProperty {
    }
    class EditorPropertyDictionaryObject extends RefCounted {
    }
    class EditorPropertyInteger extends EditorProperty {
    }
    class EditorPropertyLocalizableString extends EditorProperty {
    }
    class EditorPropertyMultilineText extends EditorProperty {
    }
    class EditorPropertyNameProcessor extends Node {
    }
    class EditorPropertyPath extends EditorProperty {
    }
    class EditorPropertyResource extends EditorProperty {
    }
    class EditorPropertyText extends EditorProperty {
    }
    class EditorPropertyVector2i extends EditorPropertyVectorN {
    }
    class EditorPropertyVectorN extends EditorProperty {
    }
    class EditorQuickOpen extends ConfirmationDialog {
        // SIGNAL: quick_open
    }
    class EditorResourceConversionPlugin extends RefCounted {
    }
    class EditorResourcePicker extends HBoxContainer {
        _update_resource_preview(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: number /*i64*/): void
        set_base_type(base_type: string): void
        get_base_type(): string
        get_allowed_types(): PackedStringArray
        set_edited_resource(resource: Resource): void
        get_edited_resource(): Resource
        set_toggle_mode(enable: boolean): void
        is_toggle_mode(): boolean
        set_toggle_pressed(pressed: boolean): void
        set_editable(enable: boolean): void
        is_editable(): boolean
        // SIGNAL: resource_selected
        // SIGNAL: resource_changed
    }
    class EditorResourcePreview extends Node {
        queue_resource_preview(path: string, receiver: Object, receiver_func: StringName, userdata: any): void
        queue_edited_resource_preview(resource: Resource, receiver: Object, receiver_func: StringName, userdata: any): void
        add_preview_generator(generator: EditorResourcePreviewGenerator): void
        remove_preview_generator(generator: EditorResourcePreviewGenerator): void
        check_for_invalidation(path: string): void
        // SIGNAL: preview_invalidated
    }
    class EditorResourcePreviewGenerator extends RefCounted {
    }
    class EditorResourceTooltipPlugin extends RefCounted {
        _thumbnail_ready(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        request_thumbnail(path: string, control: TextureRect): void
    }
    class EditorRunBar extends MarginContainer {
        // SIGNAL: play_pressed
        // SIGNAL: stop_pressed
    }
    class EditorRunNative extends HBoxContainer {
        // SIGNAL: native_run
    }
    class EditorSceneFormatImporter extends RefCounted {
        static readonly IMPORT_SCENE = 1
        static readonly IMPORT_ANIMATION = 2
        static readonly IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4
        static readonly IMPORT_GENERATE_TANGENT_ARRAYS = 8
        static readonly IMPORT_USE_NAMED_SKIN_BINDS = 16
        static readonly IMPORT_DISCARD_MESHES_AND_MATERIALS = 32
        static readonly IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64
    }
    class EditorSceneFormatImporterBlend extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterCollada extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterESCN extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterFBX extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterGLTF extends EditorSceneFormatImporter {
    }
    class EditorScenePostImport extends RefCounted {
        get_source_file(): string
    }
    namespace EditorScenePostImportPlugin {
        enum InternalImportCategory {
            INTERNAL_IMPORT_CATEGORY_NODE = 0,
            INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE = 1,
            INTERNAL_IMPORT_CATEGORY_MESH = 2,
            INTERNAL_IMPORT_CATEGORY_MATERIAL = 3,
            INTERNAL_IMPORT_CATEGORY_ANIMATION = 4,
            INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE = 5,
            INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE = 6,
            INTERNAL_IMPORT_CATEGORY_MAX = 7,
        }
    }
    class EditorScenePostImportPlugin extends RefCounted {
        get_option_value(name: StringName): any
        add_import_option(name: string, value: any): void
        add_import_option_advanced(type: Variant.Type, name: string, default_value: any, hint: PropertyHint, hint_string: string, usage_flags: number /*i64*/): void
    }
    class EditorSceneTabs extends MarginContainer {
        _tab_preview_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        // SIGNAL: tab_changed
        // SIGNAL: tab_closed
    }
    class EditorScript extends RefCounted {
        add_root_node(node: Node): void
        get_scene(): Node
        get_editor_interface(): EditorInterface
    }
    class EditorScriptPicker extends EditorResourcePicker {
        set_script_owner(owner_node: Node): void
        get_script_owner(): Node
    }
    class EditorScriptPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorSelection extends Object {
        clear(): void
        add_node(node: Node): void
        remove_node(node: Node): void
        get_selected_nodes(): Array
        get_transformable_selected_nodes(): Array
        _emit_change(): void
        // SIGNAL: selection_changed
    }
    class EditorSettings extends Resource {
        static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000
        has_setting(name: string): boolean
        set_setting(name: string, value: any): void
        get_setting(name: string): any
        erase(property: string): void
        set_initial_value(name: StringName, value: any, update_current: boolean): void
        add_property_info(info: Dictionary): void
        set_project_metadata(section: string, key: string, data: any): void
        get_project_metadata(section: string, key: string, default_: any): any
        set_favorites(dirs: PackedStringArray): void
        get_favorites(): PackedStringArray
        set_recent_dirs(dirs: PackedStringArray): void
        get_recent_dirs(): PackedStringArray
        set_builtin_action_override(name: string, actions_list: Array): void
        check_changed_settings_in_group(setting_prefix: string): boolean
        get_changed_settings(): PackedStringArray
        mark_setting_changed(setting: string): void
        // SIGNAL: settings_changed
    }
    class EditorSettingsDialog extends AcceptDialog {
        _update_shortcuts(): void
        _settings_changed(): void
    }
    class EditorSpinSlider extends Range {
        set_label(label: string): void
        get_label(): string
        set_suffix(suffix: string): void
        get_suffix(): string
        set_read_only(read_only: boolean): void
        is_read_only(): boolean
        set_flat(flat: boolean): void
        is_flat(): boolean
        set_hide_slider(hide_slider: boolean): void
        is_hiding_slider(): boolean
        // SIGNAL: grabbed
        // SIGNAL: ungrabbed
        // SIGNAL: value_focus_entered
        // SIGNAL: value_focus_exited
    }
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        _get_edited_resource(): RefCounted
    }
    class EditorTexturePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorTextureTooltipPlugin extends EditorResourceTooltipPlugin {
    }
    class EditorTheme extends Theme {
    }
    class EditorTitleBar extends HBoxContainer {
    }
    class EditorToaster extends HBoxContainer {
        _popup_str(message: string, severity: any /*EditorToaster.Severity*/, tooltip: string): void
    }
    class EditorTranslationParserPlugin extends RefCounted {
    }
    namespace EditorUndoRedoManager {
        enum SpecialHistory {
            GLOBAL_HISTORY = 0,
            REMOTE_HISTORY = -9,
            INVALID_HISTORY = -99,
        }
    }
    class EditorUndoRedoManager extends Object {
        create_action(name: string, merge_mode: UndoRedo.MergeMode, custom_context: Object, backward_undo_ops: boolean): void
        commit_action(execute: boolean): void
        is_committing_action(): boolean
        add_do_method(object: Object, method: StringName): void
        add_undo_method(object: Object, method: StringName): void
        add_do_property(object: Object, property: StringName, value: any): void
        add_undo_property(object: Object, property: StringName, value: any): void
        add_do_reference(object: Object): void
        add_undo_reference(object: Object): void
        get_object_history_id(object: Object): number /*i64*/
        get_history_undo_redo(id: number /*i64*/): UndoRedo
        // SIGNAL: history_changed
        // SIGNAL: version_changed
    }
    namespace EditorVCSInterface {
        enum ChangeType {
            CHANGE_TYPE_NEW = 0,
            CHANGE_TYPE_MODIFIED = 1,
            CHANGE_TYPE_RENAMED = 2,
            CHANGE_TYPE_DELETED = 3,
            CHANGE_TYPE_TYPECHANGE = 4,
            CHANGE_TYPE_UNMERGED = 5,
        }
        enum TreeArea {
            TREE_AREA_COMMIT = 0,
            TREE_AREA_STAGED = 1,
            TREE_AREA_UNSTAGED = 2,
        }
    }
    class EditorVCSInterface extends Object {
        create_diff_line(new_line_no: number /*i64*/, old_line_no: number /*i64*/, content: string, status: string): Dictionary
        create_diff_hunk(old_start: number /*i64*/, new_start: number /*i64*/, old_lines: number /*i64*/, new_lines: number /*i64*/): Dictionary
        create_diff_file(new_file: string, old_file: string): Dictionary
        create_commit(msg: string, author: string, id: string, unix_timestamp: number /*i64*/, offset_minutes: number /*i64*/): Dictionary
        create_status_file(file_path: string, change_type: EditorVCSInterface.ChangeType, area: EditorVCSInterface.TreeArea): Dictionary
        add_diff_hunks_into_diff_file(diff_file: Dictionary, diff_hunks: Array): Dictionary
        add_line_diffs_into_diff_hunk(diff_hunk: Dictionary, line_diffs: Array): Dictionary
        popup_error(msg: string): void
    }
    class EditorValidationPanel extends PanelContainer {
    }
    class EditorVisualProfiler extends VBoxContainer {
        // SIGNAL: enable_profiling
    }
    class EditorZoomWidget extends HBoxContainer {
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_by_increments(increment: number /*i64*/, integer_only: boolean): void
        // SIGNAL: zoom_changed
    }
    class EncodedObjectAsID extends RefCounted {
        set_object_id(id: number /*i64*/): void
        get_object_id(): number /*i64*/
    }
    class EngineProfiler extends RefCounted {
    }
    namespace Environment {
        enum BGMode {
            BG_CLEAR_COLOR = 0,
            BG_COLOR = 1,
            BG_SKY = 2,
            BG_CANVAS = 3,
            BG_KEEP = 4,
            BG_CAMERA_FEED = 5,
            BG_MAX = 6,
        }
        enum AmbientSource {
            AMBIENT_SOURCE_BG = 0,
            AMBIENT_SOURCE_DISABLED = 1,
            AMBIENT_SOURCE_COLOR = 2,
            AMBIENT_SOURCE_SKY = 3,
        }
        enum ReflectionSource {
            REFLECTION_SOURCE_BG = 0,
            REFLECTION_SOURCE_DISABLED = 1,
            REFLECTION_SOURCE_SKY = 2,
        }
        enum ToneMapper {
            TONE_MAPPER_LINEAR = 0,
            TONE_MAPPER_REINHARDT = 1,
            TONE_MAPPER_FILMIC = 2,
            TONE_MAPPER_ACES = 3,
        }
        enum GlowBlendMode {
            GLOW_BLEND_MODE_ADDITIVE = 0,
            GLOW_BLEND_MODE_SCREEN = 1,
            GLOW_BLEND_MODE_SOFTLIGHT = 2,
            GLOW_BLEND_MODE_REPLACE = 3,
            GLOW_BLEND_MODE_MIX = 4,
        }
        enum SDFGIYScale {
            SDFGI_Y_SCALE_50_PERCENT = 0,
            SDFGI_Y_SCALE_75_PERCENT = 1,
            SDFGI_Y_SCALE_100_PERCENT = 2,
        }
    }
    class Environment extends Resource {
        set_background(mode: Environment.BGMode): void
        get_background(): Environment.BGMode
        set_sky(sky: Sky): void
        get_sky(): Sky
        set_sky_custom_fov(scale: number /*f64*/): void
        get_sky_custom_fov(): number /*f64*/
        set_sky_rotation(euler_radians: Vector3): void
        get_sky_rotation(): Vector3
        set_bg_color(color: Color): void
        get_bg_color(): Color
        set_bg_energy_multiplier(energy: number /*f64*/): void
        get_bg_energy_multiplier(): number /*f64*/
        set_bg_intensity(energy: number /*f64*/): void
        get_bg_intensity(): number /*f64*/
        set_canvas_max_layer(layer: number /*i64*/): void
        get_canvas_max_layer(): number /*i64*/
        set_camera_feed_id(id: number /*i64*/): void
        get_camera_feed_id(): number /*i64*/
        set_ambient_light_color(color: Color): void
        get_ambient_light_color(): Color
        set_ambient_source(source: Environment.AmbientSource): void
        get_ambient_source(): Environment.AmbientSource
        set_ambient_light_energy(energy: number /*f64*/): void
        get_ambient_light_energy(): number /*f64*/
        set_ambient_light_sky_contribution(ratio: number /*f64*/): void
        get_ambient_light_sky_contribution(): number /*f64*/
        set_reflection_source(source: Environment.ReflectionSource): void
        get_reflection_source(): Environment.ReflectionSource
        set_tonemapper(mode: Environment.ToneMapper): void
        get_tonemapper(): Environment.ToneMapper
        set_tonemap_exposure(exposure: number /*f64*/): void
        get_tonemap_exposure(): number /*f64*/
        set_tonemap_white(white: number /*f64*/): void
        get_tonemap_white(): number /*f64*/
        set_ssr_enabled(enabled: boolean): void
        is_ssr_enabled(): boolean
        set_ssr_max_steps(max_steps: number /*i64*/): void
        get_ssr_max_steps(): number /*i64*/
        set_ssr_fade_in(fade_in: number /*f64*/): void
        get_ssr_fade_in(): number /*f64*/
        set_ssr_fade_out(fade_out: number /*f64*/): void
        get_ssr_fade_out(): number /*f64*/
        set_ssr_depth_tolerance(depth_tolerance: number /*f64*/): void
        get_ssr_depth_tolerance(): number /*f64*/
        set_ssao_enabled(enabled: boolean): void
        is_ssao_enabled(): boolean
        set_ssao_radius(radius: number /*f64*/): void
        get_ssao_radius(): number /*f64*/
        set_ssao_intensity(intensity: number /*f64*/): void
        get_ssao_intensity(): number /*f64*/
        set_ssao_power(power: number /*f64*/): void
        get_ssao_power(): number /*f64*/
        set_ssao_detail(detail: number /*f64*/): void
        get_ssao_detail(): number /*f64*/
        set_ssao_horizon(horizon: number /*f64*/): void
        get_ssao_horizon(): number /*f64*/
        set_ssao_sharpness(sharpness: number /*f64*/): void
        get_ssao_sharpness(): number /*f64*/
        set_ssao_direct_light_affect(amount: number /*f64*/): void
        get_ssao_direct_light_affect(): number /*f64*/
        set_ssao_ao_channel_affect(amount: number /*f64*/): void
        get_ssao_ao_channel_affect(): number /*f64*/
        set_ssil_enabled(enabled: boolean): void
        is_ssil_enabled(): boolean
        set_ssil_radius(radius: number /*f64*/): void
        get_ssil_radius(): number /*f64*/
        set_ssil_intensity(intensity: number /*f64*/): void
        get_ssil_intensity(): number /*f64*/
        set_ssil_sharpness(sharpness: number /*f64*/): void
        get_ssil_sharpness(): number /*f64*/
        set_ssil_normal_rejection(normal_rejection: number /*f64*/): void
        get_ssil_normal_rejection(): number /*f64*/
        set_sdfgi_enabled(enabled: boolean): void
        is_sdfgi_enabled(): boolean
        set_sdfgi_cascades(amount: number /*i64*/): void
        get_sdfgi_cascades(): number /*i64*/
        set_sdfgi_min_cell_size(size: number /*f64*/): void
        get_sdfgi_min_cell_size(): number /*f64*/
        set_sdfgi_max_distance(distance: number /*f64*/): void
        get_sdfgi_max_distance(): number /*f64*/
        set_sdfgi_cascade0_distance(distance: number /*f64*/): void
        get_sdfgi_cascade0_distance(): number /*f64*/
        set_sdfgi_y_scale(scale: Environment.SDFGIYScale): void
        get_sdfgi_y_scale(): Environment.SDFGIYScale
        set_sdfgi_use_occlusion(enable: boolean): void
        is_sdfgi_using_occlusion(): boolean
        set_sdfgi_bounce_feedback(amount: number /*f64*/): void
        get_sdfgi_bounce_feedback(): number /*f64*/
        set_sdfgi_read_sky_light(enable: boolean): void
        is_sdfgi_reading_sky_light(): boolean
        set_sdfgi_energy(amount: number /*f64*/): void
        get_sdfgi_energy(): number /*f64*/
        set_sdfgi_normal_bias(bias: number /*f64*/): void
        get_sdfgi_normal_bias(): number /*f64*/
        set_sdfgi_probe_bias(bias: number /*f64*/): void
        get_sdfgi_probe_bias(): number /*f64*/
        set_glow_enabled(enabled: boolean): void
        is_glow_enabled(): boolean
        set_glow_level(idx: number /*i64*/, intensity: number /*f64*/): void
        get_glow_level(idx: number /*i64*/): number /*f64*/
        set_glow_normalized(normalize: boolean): void
        is_glow_normalized(): boolean
        set_glow_intensity(intensity: number /*f64*/): void
        get_glow_intensity(): number /*f64*/
        set_glow_strength(strength: number /*f64*/): void
        get_glow_strength(): number /*f64*/
        set_glow_mix(mix: number /*f64*/): void
        get_glow_mix(): number /*f64*/
        set_glow_bloom(amount: number /*f64*/): void
        get_glow_bloom(): number /*f64*/
        set_glow_blend_mode(mode: Environment.GlowBlendMode): void
        get_glow_blend_mode(): Environment.GlowBlendMode
        set_glow_hdr_bleed_threshold(threshold: number /*f64*/): void
        get_glow_hdr_bleed_threshold(): number /*f64*/
        set_glow_hdr_bleed_scale(scale: number /*f64*/): void
        get_glow_hdr_bleed_scale(): number /*f64*/
        set_glow_hdr_luminance_cap(amount: number /*f64*/): void
        get_glow_hdr_luminance_cap(): number /*f64*/
        set_glow_map_strength(strength: number /*f64*/): void
        get_glow_map_strength(): number /*f64*/
        set_glow_map(mode: Texture): void
        get_glow_map(): Texture
        set_fog_enabled(enabled: boolean): void
        is_fog_enabled(): boolean
        set_fog_light_color(light_color: Color): void
        get_fog_light_color(): Color
        set_fog_light_energy(light_energy: number /*f64*/): void
        get_fog_light_energy(): number /*f64*/
        set_fog_sun_scatter(sun_scatter: number /*f64*/): void
        get_fog_sun_scatter(): number /*f64*/
        set_fog_density(density: number /*f64*/): void
        get_fog_density(): number /*f64*/
        set_fog_height(height: number /*f64*/): void
        get_fog_height(): number /*f64*/
        set_fog_height_density(height_density: number /*f64*/): void
        get_fog_height_density(): number /*f64*/
        set_fog_aerial_perspective(aerial_perspective: number /*f64*/): void
        get_fog_aerial_perspective(): number /*f64*/
        set_fog_sky_affect(sky_affect: number /*f64*/): void
        get_fog_sky_affect(): number /*f64*/
        set_volumetric_fog_enabled(enabled: boolean): void
        is_volumetric_fog_enabled(): boolean
        set_volumetric_fog_emission(color: Color): void
        get_volumetric_fog_emission(): Color
        set_volumetric_fog_albedo(color: Color): void
        get_volumetric_fog_albedo(): Color
        set_volumetric_fog_density(density: number /*f64*/): void
        get_volumetric_fog_density(): number /*f64*/
        set_volumetric_fog_emission_energy(begin: number /*f64*/): void
        get_volumetric_fog_emission_energy(): number /*f64*/
        set_volumetric_fog_anisotropy(anisotropy: number /*f64*/): void
        get_volumetric_fog_anisotropy(): number /*f64*/
        set_volumetric_fog_length(length: number /*f64*/): void
        get_volumetric_fog_length(): number /*f64*/
        set_volumetric_fog_detail_spread(detail_spread: number /*f64*/): void
        get_volumetric_fog_detail_spread(): number /*f64*/
        set_volumetric_fog_gi_inject(gi_inject: number /*f64*/): void
        get_volumetric_fog_gi_inject(): number /*f64*/
        set_volumetric_fog_ambient_inject(enabled: number /*f64*/): void
        get_volumetric_fog_ambient_inject(): number /*f64*/
        set_volumetric_fog_sky_affect(sky_affect: number /*f64*/): void
        get_volumetric_fog_sky_affect(): number /*f64*/
        set_volumetric_fog_temporal_reprojection_enabled(enabled: boolean): void
        is_volumetric_fog_temporal_reprojection_enabled(): boolean
        set_volumetric_fog_temporal_reprojection_amount(temporal_reprojection_amount: number /*f64*/): void
        get_volumetric_fog_temporal_reprojection_amount(): number /*f64*/
        set_adjustment_enabled(enabled: boolean): void
        is_adjustment_enabled(): boolean
        set_adjustment_brightness(brightness: number /*f64*/): void
        get_adjustment_brightness(): number /*f64*/
        set_adjustment_contrast(contrast: number /*f64*/): void
        get_adjustment_contrast(): number /*f64*/
        set_adjustment_saturation(saturation: number /*f64*/): void
        get_adjustment_saturation(): number /*f64*/
        set_adjustment_color_correction(color_correction: Texture): void
        get_adjustment_color_correction(): Texture
    }
    class EventListenerLineEdit extends LineEdit {
        // SIGNAL: event_changed
    }
    class ExportTemplateManager extends AcceptDialog {
    }
    class Expression extends RefCounted {
        parse(expression: string, input_names: PackedStringArray): GodotError
        execute(inputs: Array, base_instance: Object, show_error: boolean, const_calls_only: boolean): any
        has_execute_failed(): boolean
        get_error_text(): string
    }
    class FBXImporterManager extends ConfirmationDialog {
    }
    namespace FastNoiseLite {
        enum NoiseType {
            TYPE_VALUE = 5,
            TYPE_VALUE_CUBIC = 4,
            TYPE_PERLIN = 3,
            TYPE_CELLULAR = 2,
            TYPE_SIMPLEX = 0,
            TYPE_SIMPLEX_SMOOTH = 1,
        }
        enum FractalType {
            FRACTAL_NONE = 0,
            FRACTAL_FBM = 1,
            FRACTAL_RIDGED = 2,
            FRACTAL_PING_PONG = 3,
        }
        enum CellularDistanceFunction {
            DISTANCE_EUCLIDEAN = 0,
            DISTANCE_EUCLIDEAN_SQUARED = 1,
            DISTANCE_MANHATTAN = 2,
            DISTANCE_HYBRID = 3,
        }
        enum CellularReturnType {
            RETURN_CELL_VALUE = 0,
            RETURN_DISTANCE = 1,
            RETURN_DISTANCE2 = 2,
            RETURN_DISTANCE2_ADD = 3,
            RETURN_DISTANCE2_SUB = 4,
            RETURN_DISTANCE2_MUL = 5,
            RETURN_DISTANCE2_DIV = 6,
        }
        enum DomainWarpType {
            DOMAIN_WARP_SIMPLEX = 0,
            DOMAIN_WARP_SIMPLEX_REDUCED = 1,
            DOMAIN_WARP_BASIC_GRID = 2,
        }
        enum DomainWarpFractalType {
            DOMAIN_WARP_FRACTAL_NONE = 0,
            DOMAIN_WARP_FRACTAL_PROGRESSIVE = 1,
            DOMAIN_WARP_FRACTAL_INDEPENDENT = 2,
        }
    }
    class FastNoiseLite extends Noise {
        set_noise_type(type: FastNoiseLite.NoiseType): void
        get_noise_type(): FastNoiseLite.NoiseType
        set_seed(seed: number /*i64*/): void
        get_seed(): number /*i64*/
        set_frequency(freq: number /*f64*/): void
        get_frequency(): number /*f64*/
        set_offset(offset: Vector3): void
        get_offset(): Vector3
        set_fractal_type(type: FastNoiseLite.FractalType): void
        get_fractal_type(): FastNoiseLite.FractalType
        set_fractal_octaves(octave_count: number /*i64*/): void
        get_fractal_octaves(): number /*i64*/
        set_fractal_lacunarity(lacunarity: number /*f64*/): void
        get_fractal_lacunarity(): number /*f64*/
        set_fractal_gain(gain: number /*f64*/): void
        get_fractal_gain(): number /*f64*/
        set_fractal_weighted_strength(weighted_strength: number /*f64*/): void
        get_fractal_weighted_strength(): number /*f64*/
        set_fractal_ping_pong_strength(ping_pong_strength: number /*f64*/): void
        get_fractal_ping_pong_strength(): number /*f64*/
        set_cellular_distance_function(func: FastNoiseLite.CellularDistanceFunction): void
        get_cellular_distance_function(): FastNoiseLite.CellularDistanceFunction
        set_cellular_jitter(jitter: number /*f64*/): void
        get_cellular_jitter(): number /*f64*/
        set_cellular_return_type(ret: FastNoiseLite.CellularReturnType): void
        get_cellular_return_type(): FastNoiseLite.CellularReturnType
        set_domain_warp_enabled(domain_warp_enabled: boolean): void
        is_domain_warp_enabled(): boolean
        set_domain_warp_type(domain_warp_type: FastNoiseLite.DomainWarpType): void
        get_domain_warp_type(): FastNoiseLite.DomainWarpType
        set_domain_warp_amplitude(domain_warp_amplitude: number /*f64*/): void
        get_domain_warp_amplitude(): number /*f64*/
        set_domain_warp_frequency(domain_warp_frequency: number /*f64*/): void
        get_domain_warp_frequency(): number /*f64*/
        set_domain_warp_fractal_type(domain_warp_fractal_type: FastNoiseLite.DomainWarpFractalType): void
        get_domain_warp_fractal_type(): FastNoiseLite.DomainWarpFractalType
        set_domain_warp_fractal_octaves(domain_warp_octave_count: number /*i64*/): void
        get_domain_warp_fractal_octaves(): number /*i64*/
        set_domain_warp_fractal_lacunarity(domain_warp_lacunarity: number /*f64*/): void
        get_domain_warp_fractal_lacunarity(): number /*f64*/
        set_domain_warp_fractal_gain(domain_warp_gain: number /*f64*/): void
        get_domain_warp_fractal_gain(): number /*f64*/
        _changed(): void
    }
    namespace FileAccess {
        enum ModeFlags {
            READ = 1,
            WRITE = 2,
            READ_WRITE = 3,
            WRITE_READ = 7,
        }
        enum CompressionMode {
            COMPRESSION_FASTLZ = 0,
            COMPRESSION_DEFLATE = 1,
            COMPRESSION_ZSTD = 2,
            COMPRESSION_GZIP = 3,
            COMPRESSION_BROTLI = 4,
        }
        enum UnixPermissionFlags {
            UNIX_READ_OWNER = 256,
            UNIX_WRITE_OWNER = 128,
            UNIX_EXECUTE_OWNER = 64,
            UNIX_READ_GROUP = 32,
            UNIX_WRITE_GROUP = 16,
            UNIX_EXECUTE_GROUP = 8,
            UNIX_READ_OTHER = 4,
            UNIX_WRITE_OTHER = 2,
            UNIX_EXECUTE_OTHER = 1,
            UNIX_SET_USER_ID = 2048,
            UNIX_SET_GROUP_ID = 1024,
            UNIX_RESTRICTED_DELETE = 512,
        }
    }
    class FileAccess extends RefCounted {
        static open(path: string, flags: FileAccess.ModeFlags): FileAccess
        static open_encrypted(path: string, mode_flags: FileAccess.ModeFlags, key: PackedByteArray): FileAccess
        static open_encrypted_with_pass(path: string, mode_flags: FileAccess.ModeFlags, pass: string): FileAccess
        static open_compressed(path: string, mode_flags: FileAccess.ModeFlags, compression_mode: FileAccess.CompressionMode): FileAccess
        static get_open_error(): GodotError
        static get_file_as_bytes(path: string): PackedByteArray
        static get_file_as_string(path: string): string
        flush(): void
        get_path(): string
        get_path_absolute(): string
        is_open(): boolean
        seek(position: number /*i64*/): void
        seek_end(position: number /*i64*/): void
        get_position(): number /*i64*/
        get_length(): number /*i64*/
        eof_reached(): boolean
        get_8(): number /*i64*/
        get_16(): number /*i64*/
        get_32(): number /*i64*/
        get_64(): number /*i64*/
        get_float(): number /*f64*/
        get_double(): number /*f64*/
        get_real(): number /*f64*/
        get_buffer(length: number /*i64*/): PackedByteArray
        get_line(): string
        get_csv_line(delim: string): PackedStringArray
        get_as_text(skip_cr: boolean): string
        static get_md5(path: string): string
        static get_sha256(path: string): string
        is_big_endian(): boolean
        set_big_endian(big_endian: boolean): void
        get_error(): GodotError
        get_var(allow_objects: boolean): any
        store_8(value: number /*i64*/): void
        store_16(value: number /*i64*/): void
        store_32(value: number /*i64*/): void
        store_64(value: number /*i64*/): void
        store_float(value: number /*f64*/): void
        store_double(value: number /*f64*/): void
        store_real(value: number /*f64*/): void
        store_buffer(buffer: PackedByteArray): void
        store_line(line: string): void
        store_csv_line(values: PackedStringArray, delim: string): void
        store_string(string_: string): void
        store_var(value: any, full_objects: boolean): void
        store_pascal_string(string_: string): void
        get_pascal_string(): string
        close(): void
        static file_exists(path: string): boolean
        static get_modified_time(file: string): number /*i64*/
        static get_unix_permissions(file: string): FileAccess.UnixPermissionFlags
        static set_unix_permissions(file: string, permissions: FileAccess.UnixPermissionFlags): GodotError
        static get_hidden_attribute(file: string): boolean
        static set_hidden_attribute(file: string, hidden: boolean): GodotError
        static set_read_only_attribute(file: string, ro: boolean): GodotError
        static get_read_only_attribute(file: string): boolean
    }
    namespace FileDialog {
        enum FileMode {
            FILE_MODE_OPEN_FILE = 0,
            FILE_MODE_OPEN_FILES = 1,
            FILE_MODE_OPEN_DIR = 2,
            FILE_MODE_OPEN_ANY = 3,
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            ACCESS_RESOURCES = 0,
            ACCESS_USERDATA = 1,
            ACCESS_FILESYSTEM = 2,
        }
    }
    class FileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        clear_filters(): void
        add_filter(filter: string, description: string): void
        set_filters(filters: PackedStringArray): void
        get_filters(): PackedStringArray
        get_current_dir(): string
        get_current_file(): string
        get_current_path(): string
        set_current_dir(dir: string): void
        set_current_file(file: string): void
        set_current_path(path: string): void
        set_mode_overrides_title(override: boolean): void
        is_mode_overriding_title(): boolean
        set_file_mode(mode: FileDialog.FileMode): void
        get_file_mode(): FileDialog.FileMode
        get_vbox(): VBoxContainer
        get_line_edit(): LineEdit
        set_access(access: FileDialog.Access): void
        get_access(): FileDialog.Access
        set_root_subfolder(dir: string): void
        get_root_subfolder(): string
        set_show_hidden_files(show: boolean): void
        is_showing_hidden_files(): boolean
        set_use_native_dialog(native: boolean): void
        get_use_native_dialog(): boolean
        deselect_all(): void
        invalidate(): void
        // SIGNAL: file_selected
        // SIGNAL: files_selected
        // SIGNAL: dir_selected
    }
    class FileSystemDock extends VBoxContainer {
        _update_tree(_unnamed_arg0: PackedStringArray, _unnamed_arg1: boolean, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        _file_list_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _tree_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _select_file(_unnamed_arg0: string, _unnamed_arg1: boolean): void
        navigate_to_path(path: string): void
        _update_import_dock(): void
        add_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        remove_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        // SIGNAL: inherit
        // SIGNAL: instantiate
        // SIGNAL: resource_removed
        // SIGNAL: file_removed
        // SIGNAL: folder_removed
        // SIGNAL: files_moved
        // SIGNAL: folder_moved
        // SIGNAL: display_mode_changed
    }
    class FileSystemList extends ItemList {
        // SIGNAL: item_edited
    }
    class FindInFiles extends Node {
        // SIGNAL: result_found
        // SIGNAL: finished
    }
    class FindInFilesDialog extends AcceptDialog {
        // SIGNAL: find_requested
        // SIGNAL: replace_requested
    }
    class FindInFilesPanel extends Control {
        _on_result_found(_unnamed_arg0: string, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*i64*/, _unnamed_arg3: number /*i64*/, _unnamed_arg4: string): void
        _on_finished(): void
        _draw_result_text(_unnamed_arg0: Object, _unnamed_arg1: Rect2): void
        // SIGNAL: result_selected
        // SIGNAL: files_modified
    }
    class FindReplaceBar extends HBoxContainer {
        _search_current(): boolean
        // SIGNAL: error
    }
    namespace FlowContainer {
        enum AlignmentMode {
            ALIGNMENT_BEGIN = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_END = 2,
        }
    }
    class FlowContainer extends Container {
        get_line_count(): number /*i64*/
        set_alignment(alignment: FlowContainer.AlignmentMode): void
        get_alignment(): FlowContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
    }
    class FogMaterial extends Material {
        set_density(density: number /*f64*/): void
        get_density(): number /*f64*/
        set_albedo(albedo: Color): void
        get_albedo(): Color
        set_emission(emission: Color): void
        get_emission(): Color
        set_height_falloff(height_falloff: number /*f64*/): void
        get_height_falloff(): number /*f64*/
        set_edge_fade(edge_fade: number /*f64*/): void
        get_edge_fade(): number /*f64*/
        set_density_texture(density_texture: Texture3D): void
        get_density_texture(): Texture3D
    }
    class FogMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    class FogVolume extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_shape(shape: RenderingServer.FogVolumeShape): void
        get_shape(): RenderingServer.FogVolumeShape
        set_material(material: Material): void
        get_material(): Material
    }
    class FogVolumeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Font extends Resource {
        set_fallbacks(fallbacks: Array): void
        get_fallbacks(): Array
        find_variation(variation_coordinates: Dictionary, face_index: number /*i64*/, strength: number /*f64*/, transform: Transform2D, spacing_top: number /*i64*/, spacing_bottom: number /*i64*/, spacing_space: number /*i64*/, spacing_glyph: number /*i64*/): RID
        get_rids(): Array
        get_height(font_size: number /*i64*/): number /*f64*/
        get_ascent(font_size: number /*i64*/): number /*f64*/
        get_descent(font_size: number /*i64*/): number /*f64*/
        get_underline_position(font_size: number /*i64*/): number /*f64*/
        get_underline_thickness(font_size: number /*i64*/): number /*f64*/
        get_font_name(): string
        get_font_style_name(): string
        get_ot_name_strings(): Dictionary
        get_font_style(): TextServer.FontStyle
        get_font_weight(): number /*i64*/
        get_font_stretch(): number /*i64*/
        get_spacing(spacing: TextServer.SpacingType): number /*i64*/
        get_opentype_features(): Dictionary
        set_cache_capacity(single_line: number /*i64*/, multi_line: number /*i64*/): void
        get_string_size(text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): Vector2
        get_multiline_string_size(text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, max_lines: number /*i64*/, brk_flags: TextServer.LineBreakFlag, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): Vector2
        draw_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, modulate: Color, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_multiline_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, max_lines: number /*i64*/, modulate: Color, brk_flags: TextServer.LineBreakFlag, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, size: number /*i64*/, modulate: Color, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        draw_multiline_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment, width: number /*f64*/, font_size: number /*i64*/, max_lines: number /*i64*/, size: number /*i64*/, modulate: Color, brk_flags: TextServer.LineBreakFlag, justification_flags: TextServer.JustificationFlag, direction: TextServer.Direction, orientation: TextServer.Orientation): void
        get_char_size(char: number /*i64*/, font_size: number /*i64*/): Vector2
        draw_char(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, modulate: Color): number /*f64*/
        draw_char_outline(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, size: number /*i64*/, modulate: Color): number /*f64*/
        has_char(char: number /*i64*/): boolean
        get_supported_chars(): string
        is_language_supported(language: string): boolean
        is_script_supported(script: string): boolean
        get_supported_feature_list(): Dictionary
        get_supported_variation_list(): Dictionary
        get_face_count(): number /*i64*/
    }
    class FontEditorPlugin extends EditorPlugin {
    }
    class FontFile extends Font {
        load_bitmap_font(path: string): GodotError
        load_dynamic_font(path: string): GodotError
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_font_name(name: string): void
        set_font_style_name(name: string): void
        set_font_style(style: TextServer.FontStyle): void
        set_font_weight(weight: number /*i64*/): void
        set_font_stretch(stretch: number /*i64*/): void
        set_antialiasing(antialiasing: TextServer.FontAntialiasing): void
        get_antialiasing(): TextServer.FontAntialiasing
        set_generate_mipmaps(generate_mipmaps: boolean): void
        get_generate_mipmaps(): boolean
        set_multichannel_signed_distance_field(msdf: boolean): void
        is_multichannel_signed_distance_field(): boolean
        set_msdf_pixel_range(msdf_pixel_range: number /*i64*/): void
        get_msdf_pixel_range(): number /*i64*/
        set_msdf_size(msdf_size: number /*i64*/): void
        get_msdf_size(): number /*i64*/
        set_fixed_size(fixed_size: number /*i64*/): void
        get_fixed_size(): number /*i64*/
        set_fixed_size_scale_mode(fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        get_fixed_size_scale_mode(): TextServer.FixedSizeScaleMode
        set_allow_system_fallback(allow_system_fallback: boolean): void
        is_allow_system_fallback(): boolean
        set_force_autohinter(force_autohinter: boolean): void
        is_force_autohinter(): boolean
        set_hinting(hinting: TextServer.Hinting): void
        get_hinting(): TextServer.Hinting
        set_subpixel_positioning(subpixel_positioning: TextServer.SubpixelPositioning): void
        get_subpixel_positioning(): TextServer.SubpixelPositioning
        set_oversampling(oversampling: number /*f64*/): void
        get_oversampling(): number /*f64*/
        get_cache_count(): number /*i64*/
        clear_cache(): void
        remove_cache(cache_index: number /*i64*/): void
        get_size_cache_list(cache_index: number /*i64*/): Array
        clear_size_cache(cache_index: number /*i64*/): void
        remove_size_cache(cache_index: number /*i64*/, size: Vector2i): void
        set_variation_coordinates(cache_index: number /*i64*/, variation_coordinates: Dictionary): void
        get_variation_coordinates(cache_index: number /*i64*/): Dictionary
        set_embolden(cache_index: number /*i64*/, strength: number /*f64*/): void
        get_embolden(cache_index: number /*i64*/): number /*f64*/
        set_transform(cache_index: number /*i64*/, transform: Transform2D): void
        get_transform(cache_index: number /*i64*/): Transform2D
        set_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType, value: number /*i64*/): void
        get_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType): number /*i64*/
        set_face_index(cache_index: number /*i64*/, face_index: number /*i64*/): void
        get_face_index(cache_index: number /*i64*/): number /*i64*/
        set_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/, ascent: number /*f64*/): void
        get_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        set_cache_descent(cache_index: number /*i64*/, size: number /*i64*/, descent: number /*f64*/): void
        get_cache_descent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        set_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/, underline_position: number /*f64*/): void
        get_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        set_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/, underline_thickness: number /*f64*/): void
        get_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        set_cache_scale(cache_index: number /*i64*/, size: number /*i64*/, scale: number /*f64*/): void
        get_cache_scale(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        get_texture_count(cache_index: number /*i64*/, size: Vector2i): number /*i64*/
        clear_textures(cache_index: number /*i64*/, size: Vector2i): void
        remove_texture(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): void
        set_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        get_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): Image
        set_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        get_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        get_glyph_list(cache_index: number /*i64*/, size: Vector2i): PackedInt32Array
        clear_glyphs(cache_index: number /*i64*/, size: Vector2i): void
        remove_glyph(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): void
        set_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        get_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/): Vector2
        set_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        get_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        set_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        get_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        set_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        get_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Rect2
        set_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        get_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        get_kerning_list(cache_index: number /*i64*/, size: number /*i64*/): Array
        clear_kerning_map(cache_index: number /*i64*/, size: number /*i64*/): void
        remove_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): void
        set_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        get_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        render_range(cache_index: number /*i64*/, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        render_glyph(cache_index: number /*i64*/, size: Vector2i, index: number /*i64*/): void
        set_language_support_override(language: string, supported: boolean): void
        get_language_support_override(language: string): boolean
        remove_language_support_override(language: string): void
        get_language_support_overrides(): PackedStringArray
        set_script_support_override(script: string, supported: boolean): void
        get_script_support_override(script: string): boolean
        remove_script_support_override(script: string): void
        get_script_support_overrides(): PackedStringArray
        set_opentype_feature_overrides(overrides: Dictionary): void
        get_opentype_feature_overrides(): Dictionary
        get_glyph_index(size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        get_char_from_glyph_index(size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
    }
    class FontVariation extends Font {
        set_base_font(font: Font): void
        get_base_font(): Font
        set_variation_opentype(coords: Dictionary): void
        get_variation_opentype(): Dictionary
        set_variation_embolden(strength: number /*f64*/): void
        get_variation_embolden(): number /*f64*/
        set_variation_face_index(face_index: number /*i64*/): void
        get_variation_face_index(): number /*i64*/
        set_variation_transform(transform: Transform2D): void
        get_variation_transform(): Transform2D
        set_opentype_features(features: Dictionary): void
        set_spacing(spacing: TextServer.SpacingType, value: number /*i64*/): void
    }
    class FramebufferCacheRD extends Object {
    }
    namespace GDExtension {
        enum InitializationLevel {
            INITIALIZATION_LEVEL_CORE = 0,
            INITIALIZATION_LEVEL_SERVERS = 1,
            INITIALIZATION_LEVEL_SCENE = 2,
            INITIALIZATION_LEVEL_EDITOR = 3,
        }
    }
    class GDExtension extends Resource {
        open_library(path: string, entry_symbol: string): GodotError
        close_library(): void
        is_library_open(): boolean
        get_minimum_library_initialization_level(): GDExtension.InitializationLevel
        initialize_library(level: GDExtension.InitializationLevel): void
    }
    class GDScript extends Script {
        new(): any
    }
    class GDScriptEditorTranslationParserPlugin extends EditorTranslationParserPlugin {
    }
    class GDScriptNativeClass extends RefCounted {
        new(): any
    }
    class GDScriptSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    class GLTFAccessor extends Resource {
        get_buffer_view(): number /*i64*/
        set_buffer_view(buffer_view: number /*i64*/): void
        get_byte_offset(): number /*i64*/
        set_byte_offset(byte_offset: number /*i64*/): void
        get_component_type(): number /*i64*/
        set_component_type(component_type: number /*i64*/): void
        get_normalized(): boolean
        set_normalized(normalized: boolean): void
        get_count(): number /*i64*/
        set_count(count: number /*i64*/): void
        get_type(): number /*i64*/
        set_type(type: number /*i64*/): void
        get_min(): PackedFloat64Array
        set_min(min: PackedFloat64Array): void
        get_max(): PackedFloat64Array
        set_max(max: PackedFloat64Array): void
        get_sparse_count(): number /*i64*/
        set_sparse_count(sparse_count: number /*i64*/): void
        get_sparse_indices_buffer_view(): number /*i64*/
        set_sparse_indices_buffer_view(sparse_indices_buffer_view: number /*i64*/): void
        get_sparse_indices_byte_offset(): number /*i64*/
        set_sparse_indices_byte_offset(sparse_indices_byte_offset: number /*i64*/): void
        get_sparse_indices_component_type(): number /*i64*/
        set_sparse_indices_component_type(sparse_indices_component_type: number /*i64*/): void
        get_sparse_values_buffer_view(): number /*i64*/
        set_sparse_values_buffer_view(sparse_values_buffer_view: number /*i64*/): void
        get_sparse_values_byte_offset(): number /*i64*/
        set_sparse_values_byte_offset(sparse_values_byte_offset: number /*i64*/): void
    }
    class GLTFAnimation extends Resource {
        get_loop(): boolean
        set_loop(loop: boolean): void
    }
    class GLTFBufferView extends Resource {
        get_buffer(): number /*i64*/
        set_buffer(buffer: number /*i64*/): void
        get_byte_offset(): number /*i64*/
        set_byte_offset(byte_offset: number /*i64*/): void
        get_byte_length(): number /*i64*/
        set_byte_length(byte_length: number /*i64*/): void
        get_byte_stride(): number /*i64*/
        set_byte_stride(byte_stride: number /*i64*/): void
        get_indices(): boolean
        set_indices(indices: boolean): void
    }
    class GLTFCamera extends Resource {
        static from_node(camera_node: Camera3D): GLTFCamera
        to_node(): Camera3D
        static from_dictionary(dictionary: Dictionary): GLTFCamera
        to_dictionary(): Dictionary
        get_perspective(): boolean
        set_perspective(perspective: boolean): void
        get_fov(): number /*f64*/
        set_fov(fov: number /*f64*/): void
        get_size_mag(): number /*f64*/
        set_size_mag(size_mag: number /*f64*/): void
        get_depth_far(): number /*f64*/
        set_depth_far(zdepth_far: number /*f64*/): void
        get_depth_near(): number /*f64*/
        set_depth_near(zdepth_near: number /*f64*/): void
    }
    namespace GLTFDocument {
        enum RootNodeMode {
            ROOT_NODE_MODE_SINGLE_ROOT = 0,
            ROOT_NODE_MODE_KEEP_ROOT = 1,
            ROOT_NODE_MODE_MULTI_ROOT = 2,
        }
    }
    class GLTFDocument extends Resource {
        append_from_file(path: string, state: GLTFState, flags: number /*i64*/, base_path: string): GodotError
        append_from_buffer(bytes: PackedByteArray, base_path: string, state: GLTFState, flags: number /*i64*/): GodotError
        append_from_scene(node: Node, state: GLTFState, flags: number /*i64*/): GodotError
        generate_scene(state: GLTFState, bake_fps: number /*f64*/, trimming: boolean, remove_immutable_tracks: boolean): Node
        generate_buffer(state: GLTFState): PackedByteArray
        write_to_filesystem(state: GLTFState, path: string): GodotError
        set_image_format(image_format: string): void
        get_image_format(): string
        set_lossy_quality(lossy_quality: number /*f64*/): void
        get_lossy_quality(): number /*f64*/
        set_root_node_mode(root_node_mode: GLTFDocument.RootNodeMode): void
        get_root_node_mode(): GLTFDocument.RootNodeMode
        static register_gltf_document_extension(extension: GLTFDocumentExtension, first_priority: boolean): void
        static unregister_gltf_document_extension(extension: GLTFDocumentExtension): void
    }
    class GLTFDocumentExtension extends Resource {
    }
    class GLTFDocumentExtensionConvertImporterMesh extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionPhysics extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureKTX extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureWebP extends GLTFDocumentExtension {
    }
    class GLTFLight extends Resource {
        static from_node(light_node: Light3D): GLTFLight
        to_node(): Light3D
        static from_dictionary(dictionary: Dictionary): GLTFLight
        to_dictionary(): Dictionary
        get_color(): Color
        set_color(color: Color): void
        get_intensity(): number /*f64*/
        set_intensity(intensity: number /*f64*/): void
        get_light_type(): string
        set_light_type(light_type: string): void
        get_range(): number /*f64*/
        set_range(range: number /*f64*/): void
        get_inner_cone_angle(): number /*f64*/
        set_inner_cone_angle(inner_cone_angle: number /*f64*/): void
        get_outer_cone_angle(): number /*f64*/
        set_outer_cone_angle(outer_cone_angle: number /*f64*/): void
    }
    class GLTFMesh extends Resource {
        get_mesh(): ImporterMesh
        set_mesh(mesh: ImporterMesh): void
        get_blend_weights(): PackedFloat32Array
        set_blend_weights(blend_weights: PackedFloat32Array): void
        get_instance_materials(): Array
        set_instance_materials(instance_materials: Array): void
    }
    class GLTFNode extends Resource {
        get_parent(): number /*i64*/
        set_parent(parent: number /*i64*/): void
        get_height(): number /*i64*/
        set_height(height: number /*i64*/): void
        get_xform(): Transform3D
        set_xform(xform: Transform3D): void
        get_mesh(): number /*i64*/
        set_mesh(mesh: number /*i64*/): void
        get_camera(): number /*i64*/
        set_camera(camera: number /*i64*/): void
        get_skin(): number /*i64*/
        set_skin(skin: number /*i64*/): void
        get_skeleton(): number /*i64*/
        set_skeleton(skeleton: number /*i64*/): void
        get_position(): Vector3
        set_position(position: Vector3): void
        get_rotation(): Quaternion
        set_rotation(rotation: Quaternion): void
        get_scale(): Vector3
        set_scale(scale: Vector3): void
        get_children(): PackedInt32Array
        set_children(children: PackedInt32Array): void
        get_light(): number /*i64*/
        set_light(light: number /*i64*/): void
        get_additional_data(extension_name: StringName): any
        set_additional_data(extension_name: StringName, additional_data: any): void
    }
    class GLTFPhysicsBody extends Resource {
        static from_node(body_node: CollisionObject3D): GLTFPhysicsBody
        to_node(): CollisionObject3D
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsBody
        to_dictionary(): Dictionary
        get_body_type(): string
        set_body_type(body_type: string): void
        get_mass(): number /*f64*/
        set_mass(mass: number /*f64*/): void
        get_linear_velocity(): Vector3
        set_linear_velocity(linear_velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_center_of_mass(): Vector3
        set_center_of_mass(center_of_mass: Vector3): void
        get_inertia_tensor(): Basis
        set_inertia_tensor(inertia_tensor: Basis): void
    }
    class GLTFPhysicsShape extends Resource {
        static from_node(shape_node: CollisionShape3D): GLTFPhysicsShape
        to_node(cache_shapes: boolean): CollisionShape3D
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsShape
        to_dictionary(): Dictionary
        get_shape_type(): string
        set_shape_type(shape_type: string): void
        get_size(): Vector3
        set_size(size: Vector3): void
        get_radius(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_height(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_is_trigger(): boolean
        set_is_trigger(is_trigger: boolean): void
        get_mesh_index(): number /*i64*/
        set_mesh_index(mesh_index: number /*i64*/): void
        get_importer_mesh(): ImporterMesh
        set_importer_mesh(importer_mesh: ImporterMesh): void
    }
    class GLTFSkeleton extends Resource {
        get_joints(): PackedInt32Array
        set_joints(joints: PackedInt32Array): void
        get_roots(): PackedInt32Array
        set_roots(roots: PackedInt32Array): void
        get_godot_skeleton(): Skeleton3D
        get_unique_names(): Array
        set_unique_names(unique_names: Array): void
        get_godot_bone_node(): Dictionary
        set_godot_bone_node(godot_bone_node: Dictionary): void
        get_bone_attachment_count(): number /*i64*/
        get_bone_attachment(idx: number /*i64*/): BoneAttachment3D
    }
    class GLTFSkin extends Resource {
        get_skin_root(): number /*i64*/
        set_skin_root(skin_root: number /*i64*/): void
        get_joints_original(): PackedInt32Array
        set_joints_original(joints_original: PackedInt32Array): void
        get_inverse_binds(): Array
        set_inverse_binds(inverse_binds: Array): void
        get_joints(): PackedInt32Array
        set_joints(joints: PackedInt32Array): void
        get_non_joints(): PackedInt32Array
        set_non_joints(non_joints: PackedInt32Array): void
        get_roots(): PackedInt32Array
        set_roots(roots: PackedInt32Array): void
        get_skeleton(): number /*i64*/
        set_skeleton(skeleton: number /*i64*/): void
        get_joint_i_to_bone_i(): Dictionary
        set_joint_i_to_bone_i(joint_i_to_bone_i: Dictionary): void
        get_joint_i_to_name(): Dictionary
        set_joint_i_to_name(joint_i_to_name: Dictionary): void
        get_godot_skin(): Skin
        set_godot_skin(godot_skin: Skin): void
    }
    class GLTFSpecGloss extends Resource {
        get_diffuse_img(): Image
        set_diffuse_img(diffuse_img: Image): void
        get_diffuse_factor(): Color
        set_diffuse_factor(diffuse_factor: Color): void
        get_gloss_factor(): number /*f64*/
        set_gloss_factor(gloss_factor: number /*f64*/): void
        get_specular_factor(): Color
        set_specular_factor(specular_factor: Color): void
        get_spec_gloss_img(): Image
        set_spec_gloss_img(spec_gloss_img: Image): void
    }
    class GLTFState extends Resource {
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        add_used_extension(extension_name: string, required: boolean): void
        get_json(): Dictionary
        set_json(json: Dictionary): void
        get_major_version(): number /*i64*/
        set_major_version(major_version: number /*i64*/): void
        get_minor_version(): number /*i64*/
        set_minor_version(minor_version: number /*i64*/): void
        get_copyright(): string
        set_copyright(copyright: string): void
        get_glb_data(): PackedByteArray
        set_glb_data(glb_data: PackedByteArray): void
        get_use_named_skin_binds(): boolean
        set_use_named_skin_binds(use_named_skin_binds: boolean): void
        get_nodes(): Array
        set_nodes(nodes: Array): void
        get_buffers(): Array
        set_buffers(buffers: Array): void
        get_buffer_views(): Array
        set_buffer_views(buffer_views: Array): void
        get_accessors(): Array
        set_accessors(accessors: Array): void
        get_meshes(): Array
        set_meshes(meshes: Array): void
        get_animation_players_count(idx: number /*i64*/): number /*i64*/
        get_animation_player(idx: number /*i64*/): AnimationPlayer
        get_materials(): Array
        set_materials(materials: Array): void
        get_scene_name(): string
        set_scene_name(scene_name: string): void
        get_base_path(): string
        set_base_path(base_path: string): void
        get_filename(): string
        set_filename(filename: string): void
        get_root_nodes(): PackedInt32Array
        set_root_nodes(root_nodes: PackedInt32Array): void
        get_textures(): Array
        set_textures(textures: Array): void
        get_texture_samplers(): Array
        set_texture_samplers(texture_samplers: Array): void
        get_images(): Array
        set_images(images: Array): void
        get_skins(): Array
        set_skins(skins: Array): void
        get_cameras(): Array
        set_cameras(cameras: Array): void
        get_lights(): Array
        set_lights(lights: Array): void
        get_unique_names(): Array
        set_unique_names(unique_names: Array): void
        get_unique_animation_names(): Array
        set_unique_animation_names(unique_animation_names: Array): void
        get_skeletons(): Array
        set_skeletons(skeletons: Array): void
        get_create_animations(): boolean
        set_create_animations(create_animations: boolean): void
        get_animations(): Array
        set_animations(animations: Array): void
        get_scene_node(idx: number /*i64*/): Node
        get_node_index(scene_node: Node): number /*i64*/
        get_additional_data(extension_name: StringName): any
        set_additional_data(extension_name: StringName, additional_data: any): void
        get_handle_binary_image(): number /*i64*/
        set_handle_binary_image(method: number /*i64*/): void
    }
    class GLTFTexture extends Resource {
        get_src_image(): number /*i64*/
        set_src_image(src_image: number /*i64*/): void
        get_sampler(): number /*i64*/
        set_sampler(sampler: number /*i64*/): void
    }
    class GLTFTextureSampler extends Resource {
        get_mag_filter(): number /*i64*/
        set_mag_filter(filter_mode: number /*i64*/): void
        get_min_filter(): number /*i64*/
        set_min_filter(filter_mode: number /*i64*/): void
        get_wrap_s(): number /*i64*/
        set_wrap_s(wrap_mode: number /*i64*/): void
        get_wrap_t(): number /*i64*/
        set_wrap_t(wrap_mode: number /*i64*/): void
    }
    namespace GPUParticles2D {
        enum DrawOrder {
            DRAW_ORDER_INDEX = 0,
            DRAW_ORDER_LIFETIME = 1,
            DRAW_ORDER_REVERSE_LIFETIME = 2,
        }
        enum EmitFlags {
            EMIT_FLAG_POSITION = 1,
            EMIT_FLAG_ROTATION_SCALE = 2,
            EMIT_FLAG_VELOCITY = 4,
            EMIT_FLAG_COLOR = 8,
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    class GPUParticles2D extends Node2D {
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(secs: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_visibility_rect(visibility_rect: Rect2): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_interpolate(enable: boolean): void
        set_process_material(material: Material): void
        set_speed_scale(scale: number /*f64*/): void
        set_collision_base_size(size: number /*f64*/): void
        set_interp_to_end(interp: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_visibility_rect(): Rect2
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_interpolate(): boolean
        get_process_material(): Material
        get_speed_scale(): number /*f64*/
        get_collision_base_size(): number /*f64*/
        get_interp_to_end(): number /*f64*/
        set_draw_order(order: GPUParticles2D.DrawOrder): void
        get_draw_order(): GPUParticles2D.DrawOrder
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        capture_rect(): Rect2
        restart(): void
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        emit_particle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_trail_sections(sections: number /*i64*/): void
        get_trail_sections(): number /*i64*/
        set_trail_section_subdivisions(subdivisions: number /*i64*/): void
        get_trail_section_subdivisions(): number /*i64*/
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        // SIGNAL: finished
    }
    class GPUParticles2DEditorPlugin extends EditorPlugin {
    }
    namespace GPUParticles3D {
        enum DrawOrder {
            DRAW_ORDER_INDEX = 0,
            DRAW_ORDER_LIFETIME = 1,
            DRAW_ORDER_REVERSE_LIFETIME = 2,
            DRAW_ORDER_VIEW_DEPTH = 3,
        }
        enum EmitFlags {
            EMIT_FLAG_POSITION = 1,
            EMIT_FLAG_ROTATION_SCALE = 2,
            EMIT_FLAG_VELOCITY = 4,
            EMIT_FLAG_COLOR = 8,
            EMIT_FLAG_CUSTOM = 16,
        }
        enum TransformAlign {
            TRANSFORM_ALIGN_DISABLED = 0,
            TRANSFORM_ALIGN_Z_BILLBOARD = 1,
            TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
            TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3,
        }
    }
    class GPUParticles3D extends GeometryInstance3D {
        static readonly MAX_DRAW_PASSES = 4
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_visibility_aabb(aabb: AABB): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_interpolate(enable: boolean): void
        set_process_material(material: Material): void
        set_speed_scale(scale: number /*f64*/): void
        set_collision_base_size(size: number /*f64*/): void
        set_interp_to_end(interp: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_visibility_aabb(): AABB
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_interpolate(): boolean
        get_process_material(): Material
        get_speed_scale(): number /*f64*/
        get_collision_base_size(): number /*f64*/
        get_interp_to_end(): number /*f64*/
        set_draw_order(order: GPUParticles3D.DrawOrder): void
        get_draw_order(): GPUParticles3D.DrawOrder
        set_draw_passes(passes: number /*i64*/): void
        set_draw_pass_mesh(pass: number /*i64*/, mesh: Mesh): void
        get_draw_passes(): number /*i64*/
        get_draw_pass_mesh(pass: number /*i64*/): Mesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        restart(): void
        capture_aabb(): AABB
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        emit_particle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_transform_align(align: GPUParticles3D.TransformAlign): void
        get_transform_align(): GPUParticles3D.TransformAlign
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        // SIGNAL: finished
    }
    class GPUParticles3DEditor extends GPUParticles3DEditorBase {
    }
    class GPUParticles3DEditorBase extends Control {
    }
    class GPUParticles3DEditorPlugin extends EditorPlugin {
    }
    class GPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class GPUParticlesAttractor3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        set_attenuation(attenuation: number /*f64*/): void
        get_attenuation(): number /*f64*/
        set_directionality(amount: number /*f64*/): void
        get_directionality(): number /*f64*/
    }
    class GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
    }
    class GPUParticlesAttractorSphere3D extends GPUParticlesAttractor3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
    }
    class GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
    }
    class GPUParticlesCollision3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
    }
    class GPUParticlesCollision3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class GPUParticlesCollisionBox3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
    }
    namespace GPUParticlesCollisionHeightField3D {
        enum Resolution {
            RESOLUTION_256 = 0,
            RESOLUTION_512 = 1,
            RESOLUTION_1024 = 2,
            RESOLUTION_2048 = 3,
            RESOLUTION_4096 = 4,
            RESOLUTION_8192 = 5,
            RESOLUTION_MAX = 6,
        }
        enum UpdateMode {
            UPDATE_MODE_WHEN_MOVED = 0,
            UPDATE_MODE_ALWAYS = 1,
        }
    }
    class GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionHeightField3D.Resolution): void
        get_resolution(): GPUParticlesCollisionHeightField3D.Resolution
        set_update_mode(update_mode: GPUParticlesCollisionHeightField3D.UpdateMode): void
        get_update_mode(): GPUParticlesCollisionHeightField3D.UpdateMode
        set_follow_camera_enabled(enabled: boolean): void
        is_follow_camera_enabled(): boolean
    }
    namespace GPUParticlesCollisionSDF3D {
        enum Resolution {
            RESOLUTION_16 = 0,
            RESOLUTION_32 = 1,
            RESOLUTION_64 = 2,
            RESOLUTION_128 = 3,
            RESOLUTION_256 = 4,
            RESOLUTION_512 = 5,
            RESOLUTION_MAX = 6,
        }
    }
    class GPUParticlesCollisionSDF3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionSDF3D.Resolution): void
        get_resolution(): GPUParticlesCollisionSDF3D.Resolution
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        set_thickness(thickness: number /*f64*/): void
        get_thickness(): number /*f64*/
        set_bake_mask(mask: number /*i64*/): void
        get_bake_mask(): number /*i64*/
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_bake_mask_value(layer_number: number /*i64*/): boolean
    }
    class GPUParticlesCollisionSDF3DEditorPlugin extends EditorPlugin {
    }
    class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
    }
    namespace Generic6DOFJoint3D {
        enum Param {
            PARAM_LINEAR_LOWER_LIMIT = 0,
            PARAM_LINEAR_UPPER_LIMIT = 1,
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            PARAM_LINEAR_RESTITUTION = 3,
            PARAM_LINEAR_DAMPING = 4,
            PARAM_LINEAR_MOTOR_TARGET_VELOCITY = 5,
            PARAM_LINEAR_MOTOR_FORCE_LIMIT = 6,
            PARAM_LINEAR_SPRING_STIFFNESS = 7,
            PARAM_LINEAR_SPRING_DAMPING = 8,
            PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT = 9,
            PARAM_ANGULAR_LOWER_LIMIT = 10,
            PARAM_ANGULAR_UPPER_LIMIT = 11,
            PARAM_ANGULAR_LIMIT_SOFTNESS = 12,
            PARAM_ANGULAR_DAMPING = 13,
            PARAM_ANGULAR_RESTITUTION = 14,
            PARAM_ANGULAR_FORCE_LIMIT = 15,
            PARAM_ANGULAR_ERP = 16,
            PARAM_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
            PARAM_ANGULAR_MOTOR_FORCE_LIMIT = 18,
            PARAM_ANGULAR_SPRING_STIFFNESS = 19,
            PARAM_ANGULAR_SPRING_DAMPING = 20,
            PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21,
            PARAM_MAX = 22,
        }
        enum Flag {
            FLAG_ENABLE_LINEAR_LIMIT = 0,
            FLAG_ENABLE_ANGULAR_LIMIT = 1,
            FLAG_ENABLE_LINEAR_SPRING = 3,
            FLAG_ENABLE_ANGULAR_SPRING = 2,
            FLAG_ENABLE_MOTOR = 4,
            FLAG_ENABLE_LINEAR_MOTOR = 5,
            FLAG_MAX = 6,
        }
    }
    class Generic6DOFJoint3D extends Joint3D {
        set_param_x(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_x(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_param_y(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_y(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_param_z(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_z(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_flag_x(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_x(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_y(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_y(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_z(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_z(flag: Generic6DOFJoint3D.Flag): boolean
    }
    namespace GeometryInstance3D {
        enum ShadowCastingSetting {
            SHADOW_CASTING_SETTING_OFF = 0,
            SHADOW_CASTING_SETTING_ON = 1,
            SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
            SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3,
        }
        enum GIMode {
            GI_MODE_DISABLED = 0,
            GI_MODE_STATIC = 1,
            GI_MODE_DYNAMIC = 2,
        }
        enum LightmapScale {
            LIGHTMAP_SCALE_1X = 0,
            LIGHTMAP_SCALE_2X = 1,
            LIGHTMAP_SCALE_4X = 2,
            LIGHTMAP_SCALE_8X = 3,
            LIGHTMAP_SCALE_MAX = 4,
        }
        enum VisibilityRangeFadeMode {
            VISIBILITY_RANGE_FADE_DISABLED = 0,
            VISIBILITY_RANGE_FADE_SELF = 1,
            VISIBILITY_RANGE_FADE_DEPENDENCIES = 2,
        }
    }
    class GeometryInstance3D extends VisualInstance3D {
        set_material_override(material: Material): void
        get_material_override(): Material
        set_material_overlay(material: Material): void
        get_material_overlay(): Material
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
        set_lod_bias(bias: number /*f64*/): void
        get_lod_bias(): number /*f64*/
        set_transparency(transparency: number /*f64*/): void
        get_transparency(): number /*f64*/
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
        set_instance_shader_parameter(name: StringName, value: any): void
        get_instance_shader_parameter(name: StringName): any
        set_extra_cull_margin(margin: number /*f64*/): void
        get_extra_cull_margin(): number /*f64*/
        set_lightmap_scale(scale: GeometryInstance3D.LightmapScale): void
        get_lightmap_scale(): GeometryInstance3D.LightmapScale
        set_gi_mode(mode: GeometryInstance3D.GIMode): void
        get_gi_mode(): GeometryInstance3D.GIMode
        set_ignore_occlusion_culling(ignore_culling: boolean): void
        is_ignoring_occlusion_culling(): boolean
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
    }
    class Gizmo3DHelper extends RefCounted {
    }
    class GodotJSEditorPlugin extends EditorPlugin {
    }
    class GodotPhysicsDirectSpaceState2D extends PhysicsDirectSpaceState2D {
    }
    namespace Gradient {
        enum InterpolationMode {
            GRADIENT_INTERPOLATE_LINEAR = 0,
            GRADIENT_INTERPOLATE_CONSTANT = 1,
            GRADIENT_INTERPOLATE_CUBIC = 2,
        }
        enum ColorSpace {
            GRADIENT_COLOR_SPACE_SRGB = 0,
            GRADIENT_COLOR_SPACE_LINEAR_SRGB = 1,
            GRADIENT_COLOR_SPACE_OKLAB = 2,
        }
    }
    class Gradient extends Resource {
        add_point(offset: number /*f64*/, color: Color): void
        remove_point(point: number /*i64*/): void
        set_offset(point: number /*i64*/, offset: number /*f64*/): void
        get_offset(point: number /*i64*/): number /*f64*/
        reverse(): void
        set_color(point: number /*i64*/, color: Color): void
        get_color(point: number /*i64*/): Color
        sample(offset: number /*f64*/): Color
        get_point_count(): number /*i64*/
        set_offsets(offsets: PackedFloat32Array): void
        get_offsets(): PackedFloat32Array
        set_colors(colors: PackedColorArray): void
        get_colors(): PackedColorArray
        set_interpolation_mode(interpolation_mode: Gradient.InterpolationMode): void
        get_interpolation_mode(): Gradient.InterpolationMode
        set_interpolation_color_space(interpolation_color_space: Gradient.ColorSpace): void
        get_interpolation_color_space(): Gradient.ColorSpace
    }
    class GradientEditorPlugin extends EditorPlugin {
    }
    class GradientTexture1D extends Texture2D {
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: number /*i64*/): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
    }
    namespace GradientTexture2D {
        enum Fill {
            FILL_LINEAR = 0,
            FILL_RADIAL = 1,
            FILL_SQUARE = 2,
        }
        enum Repeat {
            REPEAT_NONE = 0,
            REPEAT = 1,
            REPEAT_MIRROR = 2,
        }
    }
    class GradientTexture2D extends Texture2D {
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
        set_fill(fill: GradientTexture2D.Fill): void
        get_fill(): GradientTexture2D.Fill
        set_fill_from(fill_from: Vector2): void
        get_fill_from(): Vector2
        set_fill_to(fill_to: Vector2): void
        get_fill_to(): Vector2
        set_repeat(repeat: GradientTexture2D.Repeat): void
        get_repeat(): GradientTexture2D.Repeat
    }
    class GradientTexture2DEditorPlugin extends EditorPlugin {
    }
    namespace GraphEdit {
        enum PanningScheme {
            SCROLL_ZOOMS = 0,
            SCROLL_PANS = 1,
        }
    }
    class GraphEdit extends Control {
        connect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): GodotError
        is_node_connected(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        disconnect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): void
        set_connection_activity(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/, amount: number /*f64*/): void
        get_connection_list(): Array
        clear_connections(): void
        force_connection_drag_end(): void
        get_scroll_offset(): Vector2
        set_scroll_offset(offset: Vector2): void
        add_valid_right_disconnect_type(type: number /*i64*/): void
        remove_valid_right_disconnect_type(type: number /*i64*/): void
        add_valid_left_disconnect_type(type: number /*i64*/): void
        remove_valid_left_disconnect_type(type: number /*i64*/): void
        add_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        remove_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        is_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): boolean
        get_connection_line(from_node: Vector2, to_node: Vector2): PackedVector2Array
        set_panning_scheme(scheme: GraphEdit.PanningScheme): void
        get_panning_scheme(): GraphEdit.PanningScheme
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_min(zoom_min: number /*f64*/): void
        get_zoom_min(): number /*f64*/
        set_zoom_max(zoom_max: number /*f64*/): void
        get_zoom_max(): number /*f64*/
        set_zoom_step(zoom_step: number /*f64*/): void
        get_zoom_step(): number /*f64*/
        set_show_grid(enable: boolean): void
        is_showing_grid(): boolean
        set_snapping_enabled(enable: boolean): void
        is_snapping_enabled(): boolean
        set_snapping_distance(pixels: number /*i64*/): void
        get_snapping_distance(): number /*i64*/
        set_connection_lines_curvature(curvature: number /*f64*/): void
        get_connection_lines_curvature(): number /*f64*/
        set_connection_lines_thickness(pixels: number /*f64*/): void
        get_connection_lines_thickness(): number /*f64*/
        set_connection_lines_antialiased(pixels: boolean): void
        is_connection_lines_antialiased(): boolean
        set_minimap_size(size: Vector2): void
        get_minimap_size(): Vector2
        set_minimap_opacity(opacity: number /*f64*/): void
        get_minimap_opacity(): number /*f64*/
        set_minimap_enabled(enable: boolean): void
        is_minimap_enabled(): boolean
        set_show_menu(hidden: boolean): void
        is_showing_menu(): boolean
        set_show_zoom_label(enable: boolean): void
        is_showing_zoom_label(): boolean
        set_show_grid_buttons(hidden: boolean): void
        is_showing_grid_buttons(): boolean
        set_show_zoom_buttons(hidden: boolean): void
        is_showing_zoom_buttons(): boolean
        set_show_minimap_button(hidden: boolean): void
        is_showing_minimap_button(): boolean
        set_show_arrange_button(hidden: boolean): void
        is_showing_arrange_button(): boolean
        set_right_disconnects(enable: boolean): void
        is_right_disconnects_enabled(): boolean
        get_menu_hbox(): HBoxContainer
        arrange_nodes(): void
        set_selected(node: Node): void
        // SIGNAL: connection_request
        // SIGNAL: disconnection_request
        // SIGNAL: connection_to_empty
        // SIGNAL: connection_from_empty
        // SIGNAL: connection_drag_started
        // SIGNAL: connection_drag_ended
        // SIGNAL: copy_nodes_request
        // SIGNAL: paste_nodes_request
        // SIGNAL: duplicate_nodes_request
        // SIGNAL: delete_nodes_request
        // SIGNAL: node_selected
        // SIGNAL: node_deselected
        // SIGNAL: popup_request
        // SIGNAL: begin_node_move
        // SIGNAL: end_node_move
        // SIGNAL: scroll_offset_changed
    }
    class GraphEditFilter extends Control {
    }
    class GraphEditMinimap extends Control {
    }
    class GraphElement extends Container {
        set_resizable(resizable: boolean): void
        is_resizable(): boolean
        set_draggable(draggable: boolean): void
        is_draggable(): boolean
        set_selectable(selectable: boolean): void
        is_selectable(): boolean
        set_selected(selected: boolean): void
        is_selected(): boolean
        set_position_offset(offset: Vector2): void
        get_position_offset(): Vector2
        // SIGNAL: node_selected
        // SIGNAL: node_deselected
        // SIGNAL: raise_request
        // SIGNAL: delete_request
        // SIGNAL: resize_request
        // SIGNAL: dragged
        // SIGNAL: position_offset_changed
    }
    class GraphNode extends GraphElement {
        set_title(title: string): void
        get_title(): string
        get_titlebar_hbox(): HBoxContainer
        set_slot(slot_index: number /*i64*/, enable_left_port: boolean, type_left: number /*i64*/, color_left: Color, enable_right_port: boolean, type_right: number /*i64*/, color_right: Color, custom_icon_left: Texture2D, custom_icon_right: Texture2D, draw_stylebox: boolean): void
        clear_slot(slot_index: number /*i64*/): void
        clear_all_slots(): void
        is_slot_enabled_left(slot_index: number /*i64*/): boolean
        set_slot_enabled_left(slot_index: number /*i64*/, enable: boolean): void
        set_slot_type_left(slot_index: number /*i64*/, type: number /*i64*/): void
        get_slot_type_left(slot_index: number /*i64*/): number /*i64*/
        set_slot_color_left(slot_index: number /*i64*/, color: Color): void
        get_slot_color_left(slot_index: number /*i64*/): Color
        is_slot_enabled_right(slot_index: number /*i64*/): boolean
        set_slot_enabled_right(slot_index: number /*i64*/, enable: boolean): void
        set_slot_type_right(slot_index: number /*i64*/, type: number /*i64*/): void
        get_slot_type_right(slot_index: number /*i64*/): number /*i64*/
        set_slot_color_right(slot_index: number /*i64*/, color: Color): void
        get_slot_color_right(slot_index: number /*i64*/): Color
        is_slot_draw_stylebox(slot_index: number /*i64*/): boolean
        set_slot_draw_stylebox(slot_index: number /*i64*/, enable: boolean): void
        get_input_port_count(): number /*i64*/
        get_input_port_position(port_idx: number /*i64*/): Vector2
        get_input_port_type(port_idx: number /*i64*/): number /*i64*/
        get_input_port_color(port_idx: number /*i64*/): Color
        get_input_port_slot(port_idx: number /*i64*/): number /*i64*/
        get_output_port_count(): number /*i64*/
        get_output_port_position(port_idx: number /*i64*/): Vector2
        get_output_port_type(port_idx: number /*i64*/): number /*i64*/
        get_output_port_color(port_idx: number /*i64*/): Color
        get_output_port_slot(port_idx: number /*i64*/): number /*i64*/
        // SIGNAL: slot_updated
    }
    class GridContainer extends Container {
        set_columns(columns: number /*i64*/): void
        get_columns(): number /*i64*/
    }
    class GridMap extends Node3D {
        static readonly INVALID_CELL_ITEM = -1
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_physics_material(material: PhysicsMaterial): void
        get_physics_material(): PhysicsMaterial
        set_bake_navigation(bake_navigation: boolean): void
        is_baking_navigation(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_mesh_library(mesh_library: MeshLibrary): void
        get_mesh_library(): MeshLibrary
        set_cell_size(size: Vector3): void
        get_cell_size(): Vector3
        set_cell_scale(scale: number /*f64*/): void
        get_cell_scale(): number /*f64*/
        set_octant_size(size: number /*i64*/): void
        get_octant_size(): number /*i64*/
        set_cell_item(position: Vector3i, item: number /*i64*/, orientation: number /*i64*/): void
        get_cell_item(position: Vector3i): number /*i64*/
        get_cell_item_orientation(position: Vector3i): number /*i64*/
        get_cell_item_basis(position: Vector3i): Basis
        get_basis_with_orthogonal_index(index: number /*i64*/): Basis
        get_orthogonal_index_from_basis(basis: Basis): number /*i64*/
        local_to_map(local_position: Vector3): Vector3i
        map_to_local(map_position: Vector3i): Vector3
        _update_octants_callback(): void
        resource_changed(resource: Resource): void
        set_center_x(enable: boolean): void
        get_center_x(): boolean
        set_center_y(enable: boolean): void
        get_center_y(): boolean
        set_center_z(enable: boolean): void
        get_center_z(): boolean
        clear(): void
        get_used_cells(): Array
        get_used_cells_by_item(item: number /*i64*/): Array
        get_meshes(): Array
        get_bake_meshes(): Array
        get_bake_mesh_instance(idx: number /*i64*/): RID
        clear_baked_meshes(): void
        make_baked_meshes(gen_lightmap_uv: boolean, lightmap_uv_texel_size: number /*f64*/): void
        // SIGNAL: cell_size_changed
        // SIGNAL: changed
    }
    class GridMapEditor extends VBoxContainer {
        _configure(): void
        _set_selection(_unnamed_arg0: boolean, _unnamed_arg1: Vector3, _unnamed_arg2: Vector3): void
    }
    class GridMapEditorPlugin extends EditorPlugin {
    }
    class GrooveJoint2D extends Joint2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_initial_offset(offset: number /*f64*/): void
        get_initial_offset(): number /*f64*/
    }
    class GroupDialog extends AcceptDialog {
        _delete_group_item(_unnamed_arg0: string): void
        _add_group(_unnamed_arg0: string): void
        _rename_group_item(_unnamed_arg0: string, _unnamed_arg1: string): void
        _group_selected(): void
        // SIGNAL: group_edited
    }
    class GroupsEditor extends VBoxContainer {
        update_tree(): void
        _group_selected(): void
    }
    class HBoxContainer extends BoxContainer {
    }
    class HFlowContainer extends FlowContainer {
    }
    class HMACContext extends RefCounted {
        start(hash_type: HashingContext.HashType, key: PackedByteArray): GodotError
        update(data: PackedByteArray): GodotError
        finish(): PackedByteArray
    }
    class HScrollBar extends ScrollBar {
    }
    class HSeparator extends Separator {
    }
    class HSlider extends Slider {
    }
    class HSplitContainer extends SplitContainer {
    }
    namespace HTTPClient {
        enum Method {
            METHOD_GET = 0,
            METHOD_HEAD = 1,
            METHOD_POST = 2,
            METHOD_PUT = 3,
            METHOD_DELETE = 4,
            METHOD_OPTIONS = 5,
            METHOD_TRACE = 6,
            METHOD_CONNECT = 7,
            METHOD_PATCH = 8,
            METHOD_MAX = 9,
        }
        enum Status {
            STATUS_DISCONNECTED = 0,
            STATUS_RESOLVING = 1,
            STATUS_CANT_RESOLVE = 2,
            STATUS_CONNECTING = 3,
            STATUS_CANT_CONNECT = 4,
            STATUS_CONNECTED = 5,
            STATUS_REQUESTING = 6,
            STATUS_BODY = 7,
            STATUS_CONNECTION_ERROR = 8,
            STATUS_TLS_HANDSHAKE_ERROR = 9,
        }
        enum ResponseCode {
            RESPONSE_CONTINUE = 100,
            RESPONSE_SWITCHING_PROTOCOLS = 101,
            RESPONSE_PROCESSING = 102,
            RESPONSE_OK = 200,
            RESPONSE_CREATED = 201,
            RESPONSE_ACCEPTED = 202,
            RESPONSE_NON_AUTHORITATIVE_INFORMATION = 203,
            RESPONSE_NO_CONTENT = 204,
            RESPONSE_RESET_CONTENT = 205,
            RESPONSE_PARTIAL_CONTENT = 206,
            RESPONSE_MULTI_STATUS = 207,
            RESPONSE_ALREADY_REPORTED = 208,
            RESPONSE_IM_USED = 226,
            RESPONSE_MULTIPLE_CHOICES = 300,
            RESPONSE_MOVED_PERMANENTLY = 301,
            RESPONSE_FOUND = 302,
            RESPONSE_SEE_OTHER = 303,
            RESPONSE_NOT_MODIFIED = 304,
            RESPONSE_USE_PROXY = 305,
            RESPONSE_SWITCH_PROXY = 306,
            RESPONSE_TEMPORARY_REDIRECT = 307,
            RESPONSE_PERMANENT_REDIRECT = 308,
            RESPONSE_BAD_REQUEST = 400,
            RESPONSE_UNAUTHORIZED = 401,
            RESPONSE_PAYMENT_REQUIRED = 402,
            RESPONSE_FORBIDDEN = 403,
            RESPONSE_NOT_FOUND = 404,
            RESPONSE_METHOD_NOT_ALLOWED = 405,
            RESPONSE_NOT_ACCEPTABLE = 406,
            RESPONSE_PROXY_AUTHENTICATION_REQUIRED = 407,
            RESPONSE_REQUEST_TIMEOUT = 408,
            RESPONSE_CONFLICT = 409,
            RESPONSE_GONE = 410,
            RESPONSE_LENGTH_REQUIRED = 411,
            RESPONSE_PRECONDITION_FAILED = 412,
            RESPONSE_REQUEST_ENTITY_TOO_LARGE = 413,
            RESPONSE_REQUEST_URI_TOO_LONG = 414,
            RESPONSE_UNSUPPORTED_MEDIA_TYPE = 415,
            RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
            RESPONSE_EXPECTATION_FAILED = 417,
            RESPONSE_IM_A_TEAPOT = 418,
            RESPONSE_MISDIRECTED_REQUEST = 421,
            RESPONSE_UNPROCESSABLE_ENTITY = 422,
            RESPONSE_LOCKED = 423,
            RESPONSE_FAILED_DEPENDENCY = 424,
            RESPONSE_UPGRADE_REQUIRED = 426,
            RESPONSE_PRECONDITION_REQUIRED = 428,
            RESPONSE_TOO_MANY_REQUESTS = 429,
            RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
            RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS = 451,
            RESPONSE_INTERNAL_SERVER_ERROR = 500,
            RESPONSE_NOT_IMPLEMENTED = 501,
            RESPONSE_BAD_GATEWAY = 502,
            RESPONSE_SERVICE_UNAVAILABLE = 503,
            RESPONSE_GATEWAY_TIMEOUT = 504,
            RESPONSE_HTTP_VERSION_NOT_SUPPORTED = 505,
            RESPONSE_VARIANT_ALSO_NEGOTIATES = 506,
            RESPONSE_INSUFFICIENT_STORAGE = 507,
            RESPONSE_LOOP_DETECTED = 508,
            RESPONSE_NOT_EXTENDED = 510,
            RESPONSE_NETWORK_AUTH_REQUIRED = 511,
        }
    }
    class HTTPClient extends RefCounted {
        connect_to_host(host: string, port: number /*i64*/, tls_options: TLSOptions): GodotError
        set_connection(connection: StreamPeer): void
        get_connection(): StreamPeer
        request_raw(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: PackedByteArray): GodotError
        request(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: string): GodotError
        close(): void
        has_response(): boolean
        is_response_chunked(): boolean
        get_response_code(): number /*i64*/
        get_response_headers(): PackedStringArray
        get_response_headers_as_dictionary(): Dictionary
        get_response_body_length(): number /*i64*/
        read_response_body_chunk(): PackedByteArray
        set_read_chunk_size(bytes: number /*i64*/): void
        get_read_chunk_size(): number /*i64*/
        set_blocking_mode(enabled: boolean): void
        is_blocking_mode_enabled(): boolean
        get_status(): HTTPClient.Status
        poll(): GodotError
        set_http_proxy(host: string, port: number /*i64*/): void
        set_https_proxy(host: string, port: number /*i64*/): void
        query_string_from_dict(fields: Dictionary): string
    }
    namespace HTTPRequest {
        enum Result {
            RESULT_SUCCESS = 0,
            RESULT_CHUNKED_BODY_SIZE_MISMATCH = 1,
            RESULT_CANT_CONNECT = 2,
            RESULT_CANT_RESOLVE = 3,
            RESULT_CONNECTION_ERROR = 4,
            RESULT_TLS_HANDSHAKE_ERROR = 5,
            RESULT_NO_RESPONSE = 6,
            RESULT_BODY_SIZE_LIMIT_EXCEEDED = 7,
            RESULT_BODY_DECOMPRESS_FAILED = 8,
            RESULT_REQUEST_FAILED = 9,
            RESULT_DOWNLOAD_FILE_CANT_OPEN = 10,
            RESULT_DOWNLOAD_FILE_WRITE_ERROR = 11,
            RESULT_REDIRECT_LIMIT_REACHED = 12,
            RESULT_TIMEOUT = 13,
        }
    }
    class HTTPRequest extends Node {
        request(url: string, custom_headers: PackedStringArray, method: HTTPClient.Method, request_data: string): GodotError
        request_raw(url: string, custom_headers: PackedStringArray, method: HTTPClient.Method, request_data_raw: PackedByteArray): GodotError
        cancel_request(): void
        set_tls_options(client_options: TLSOptions): void
        get_http_client_status(): HTTPClient.Status
        set_use_threads(enable: boolean): void
        is_using_threads(): boolean
        set_accept_gzip(enable: boolean): void
        is_accepting_gzip(): boolean
        set_body_size_limit(bytes: number /*i64*/): void
        get_body_size_limit(): number /*i64*/
        set_max_redirects(amount: number /*i64*/): void
        get_max_redirects(): number /*i64*/
        set_download_file(path: string): void
        get_download_file(): string
        get_downloaded_bytes(): number /*i64*/
        get_body_size(): number /*i64*/
        _request_done(_unnamed_arg0: number /*i64*/, _unnamed_arg1: number /*i64*/, _unnamed_arg2: PackedStringArray, _unnamed_arg3: PackedByteArray): void
        set_timeout(timeout: number /*f64*/): void
        get_timeout(): number /*f64*/
        set_download_chunk_size(chunk_size: number /*i64*/): void
        get_download_chunk_size(): number /*i64*/
        set_http_proxy(host: string, port: number /*i64*/): void
        set_https_proxy(host: string, port: number /*i64*/): void
        // SIGNAL: request_completed
    }
    namespace HashingContext {
        enum HashType {
            HASH_MD5 = 0,
            HASH_SHA1 = 1,
            HASH_SHA256 = 2,
        }
    }
    class HashingContext extends RefCounted {
        start(type: HashingContext.HashType): GodotError
        update(chunk: PackedByteArray): GodotError
        finish(): PackedByteArray
    }
    class HeightMapShape3D extends Shape3D {
        set_map_width(width: number /*i64*/): void
        get_map_width(): number /*i64*/
        set_map_depth(height: number /*i64*/): void
        get_map_depth(): number /*i64*/
        set_map_data(data: PackedFloat32Array): void
        get_map_data(): PackedFloat32Array
    }
    namespace HingeJoint3D {
        enum Param {
            PARAM_BIAS = 0,
            PARAM_LIMIT_UPPER = 1,
            PARAM_LIMIT_LOWER = 2,
            PARAM_LIMIT_BIAS = 3,
            PARAM_LIMIT_SOFTNESS = 4,
            PARAM_LIMIT_RELAXATION = 5,
            PARAM_MOTOR_TARGET_VELOCITY = 6,
            PARAM_MOTOR_MAX_IMPULSE = 7,
            PARAM_MAX = 8,
        }
        enum Flag {
            FLAG_USE_LIMIT = 0,
            FLAG_ENABLE_MOTOR = 1,
            FLAG_MAX = 2,
        }
    }
    class HingeJoint3D extends Joint3D {
        set_param(param: HingeJoint3D.Param, value: number /*f64*/): void
        get_param(param: HingeJoint3D.Param): number /*f64*/
        set_flag(flag: HingeJoint3D.Flag, enabled: boolean): void
        get_flag(flag: HingeJoint3D.Flag): boolean
    }
    class HistoryDock extends VBoxContainer {
    }
    namespace Image {
        enum Format {
            FORMAT_L8 = 0,
            FORMAT_LA8 = 1,
            FORMAT_R8 = 2,
            FORMAT_RG8 = 3,
            FORMAT_RGB8 = 4,
            FORMAT_RGBA8 = 5,
            FORMAT_RGBA4444 = 6,
            FORMAT_RGB565 = 7,
            FORMAT_RF = 8,
            FORMAT_RGF = 9,
            FORMAT_RGBF = 10,
            FORMAT_RGBAF = 11,
            FORMAT_RH = 12,
            FORMAT_RGH = 13,
            FORMAT_RGBH = 14,
            FORMAT_RGBAH = 15,
            FORMAT_RGBE9995 = 16,
            FORMAT_DXT1 = 17,
            FORMAT_DXT3 = 18,
            FORMAT_DXT5 = 19,
            FORMAT_RGTC_R = 20,
            FORMAT_RGTC_RG = 21,
            FORMAT_BPTC_RGBA = 22,
            FORMAT_BPTC_RGBF = 23,
            FORMAT_BPTC_RGBFU = 24,
            FORMAT_ETC = 25,
            FORMAT_ETC2_R11 = 26,
            FORMAT_ETC2_R11S = 27,
            FORMAT_ETC2_RG11 = 28,
            FORMAT_ETC2_RG11S = 29,
            FORMAT_ETC2_RGB8 = 30,
            FORMAT_ETC2_RGBA8 = 31,
            FORMAT_ETC2_RGB8A1 = 32,
            FORMAT_ETC2_RA_AS_RG = 33,
            FORMAT_DXT5_RA_AS_RG = 34,
            FORMAT_ASTC_4x4 = 35,
            FORMAT_ASTC_4x4_HDR = 36,
            FORMAT_ASTC_8x8 = 37,
            FORMAT_ASTC_8x8_HDR = 38,
            FORMAT_MAX = 39,
        }
        enum Interpolation {
            INTERPOLATE_NEAREST = 0,
            INTERPOLATE_BILINEAR = 1,
            INTERPOLATE_CUBIC = 2,
            INTERPOLATE_TRILINEAR = 3,
            INTERPOLATE_LANCZOS = 4,
        }
        enum AlphaMode {
            ALPHA_NONE = 0,
            ALPHA_BIT = 1,
            ALPHA_BLEND = 2,
        }
        enum CompressMode {
            COMPRESS_S3TC = 0,
            COMPRESS_ETC = 1,
            COMPRESS_ETC2 = 2,
            COMPRESS_BPTC = 3,
            COMPRESS_ASTC = 4,
            COMPRESS_MAX = 5,
        }
        enum UsedChannels {
            USED_CHANNELS_L = 0,
            USED_CHANNELS_LA = 1,
            USED_CHANNELS_R = 2,
            USED_CHANNELS_RG = 3,
            USED_CHANNELS_RGB = 4,
            USED_CHANNELS_RGBA = 5,
        }
        enum CompressSource {
            COMPRESS_SOURCE_GENERIC = 0,
            COMPRESS_SOURCE_SRGB = 1,
            COMPRESS_SOURCE_NORMAL = 2,
        }
        enum ASTCFormat {
            ASTC_FORMAT_4x4 = 0,
            ASTC_FORMAT_8x8 = 1,
        }
    }
    class Image extends Resource {
        static readonly MAX_WIDTH = 16777216
        static readonly MAX_HEIGHT = 16777216
        get_width(): number /*i64*/
        get_height(): number /*i64*/
        get_size(): Vector2i
        has_mipmaps(): boolean
        get_format(): Image.Format
        get_data(): PackedByteArray
        convert(format: Image.Format): void
        get_mipmap_count(): number /*i64*/
        get_mipmap_offset(mipmap: number /*i64*/): number /*i64*/
        resize_to_po2(square: boolean, interpolation: Image.Interpolation): void
        resize(width: number /*i64*/, height: number /*i64*/, interpolation: Image.Interpolation): void
        shrink_x2(): void
        crop(width: number /*i64*/, height: number /*i64*/): void
        flip_x(): void
        flip_y(): void
        generate_mipmaps(renormalize: boolean): GodotError
        clear_mipmaps(): void
        static create(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format): Image
        static create_from_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): Image
        set_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): void
        is_empty(): boolean
        load(path: string): GodotError
        static load_from_file(path: string): Image
        save_png(path: string): GodotError
        save_png_to_buffer(): PackedByteArray
        save_jpg(path: string, quality: number /*f64*/): GodotError
        save_jpg_to_buffer(quality: number /*f64*/): PackedByteArray
        save_exr(path: string, grayscale: boolean): GodotError
        save_exr_to_buffer(grayscale: boolean): PackedByteArray
        save_webp(path: string, lossy: boolean, quality: number /*f64*/): GodotError
        save_webp_to_buffer(lossy: boolean, quality: number /*f64*/): PackedByteArray
        detect_alpha(): Image.AlphaMode
        is_invisible(): boolean
        detect_used_channels(source: Image.CompressSource): Image.UsedChannels
        compress(mode: Image.CompressMode, source: Image.CompressSource, astc_format: Image.ASTCFormat): GodotError
        compress_from_channels(mode: Image.CompressMode, channels: Image.UsedChannels, astc_format: Image.ASTCFormat): GodotError
        decompress(): GodotError
        is_compressed(): boolean
        rotate_90(direction: ClockDirection): void
        rotate_180(): void
        fix_alpha_edges(): void
        premultiply_alpha(): void
        srgb_to_linear(): void
        normal_map_to_xy(): void
        rgbe_to_srgb(): Image
        bump_map_to_normal_map(bump_scale: number /*f64*/): void
        compute_image_metrics(compared_image: Image, use_luma: boolean): Dictionary
        blit_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        blit_rect_mask(src: Image, mask: Image, src_rect: Rect2i, dst: Vector2i): void
        blend_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        blend_rect_mask(src: Image, mask: Image, src_rect: Rect2i, dst: Vector2i): void
        fill(color: Color): void
        fill_rect(rect: Rect2i, color: Color): void
        get_used_rect(): Rect2i
        get_region(region: Rect2i): Image
        copy_from(src: Image): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        get_pixelv(point: Vector2i): Color
        get_pixel(x: number /*i64*/, y: number /*i64*/): Color
        set_pixelv(point: Vector2i, color: Color): void
        set_pixel(x: number /*i64*/, y: number /*i64*/, color: Color): void
        adjust_bcs(brightness: number /*f64*/, contrast: number /*f64*/, saturation: number /*f64*/): void
        load_png_from_buffer(buffer: PackedByteArray): GodotError
        load_jpg_from_buffer(buffer: PackedByteArray): GodotError
        load_webp_from_buffer(buffer: PackedByteArray): GodotError
        load_tga_from_buffer(buffer: PackedByteArray): GodotError
        load_bmp_from_buffer(buffer: PackedByteArray): GodotError
        load_ktx_from_buffer(buffer: PackedByteArray): GodotError
        load_svg_from_buffer(buffer: PackedByteArray, scale: number /*f64*/): GodotError
        load_svg_from_string(svg_str: string, scale: number /*f64*/): GodotError
    }
    namespace ImageFormatLoader {
        enum LoaderFlags {
            FLAG_NONE = 0,
            FLAG_FORCE_LINEAR = 1,
            FLAG_CONVERT_COLORS = 2,
        }
    }
    class ImageFormatLoader extends RefCounted {
    }
    class ImageFormatLoaderExtension extends ImageFormatLoader {
        add_format_loader(): void
        remove_format_loader(): void
    }
    class ImageTexture extends Texture2D {
        static create_from_image(image: Image): ImageTexture
        get_format(): Image.Format
        set_image(image: Image): void
        update(image: Image): void
        set_size_override(size: Vector2i): void
    }
    class ImageTexture3D extends Texture3D {
        create(format: Image.Format, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, use_mipmaps: boolean, data: Array): GodotError
        update(data: Array): void
        _get_images(): Array
        _set_images(images: Array): void
    }
    class ImageTextureLayered extends TextureLayered {
        create_from_images(images: Array): GodotError
        update_layer(image: Image, layer: number /*i64*/): void
        _get_images(): Array
        _set_images(images: Array): void
    }
    class ImmediateMesh extends Mesh {
        surface_begin(primitive: Mesh.PrimitiveType, material: Material): void
        surface_set_color(color: Color): void
        surface_set_normal(normal: Vector3): void
        surface_set_tangent(tangent: Plane): void
        surface_set_uv(uv: Vector2): void
        surface_set_uv2(uv2: Vector2): void
        surface_add_vertex(vertex: Vector3): void
        surface_add_vertex_2d(vertex: Vector2): void
        surface_end(): void
        clear_surfaces(): void
    }
    class ImportDefaultsEditor extends VBoxContainer {
    }
    class ImportDefaultsEditorSettings extends Object {
    }
    class ImportDock extends VBoxContainer {
        _reimport(): void
    }
    class ImportDockParameters extends Object {
    }
    class ImporterMesh extends Resource {
        add_blend_shape(name: string): void
        get_blend_shape_count(): number /*i64*/
        get_blend_shape_name(blend_shape_idx: number /*i64*/): string
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        get_blend_shape_mode(): Mesh.BlendShapeMode
        add_surface(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array, lods: Dictionary, material: Material, name: string, flags: number /*i64*/): void
        get_surface_count(): number /*i64*/
        get_surface_primitive_type(surface_idx: number /*i64*/): Mesh.PrimitiveType
        get_surface_name(surface_idx: number /*i64*/): string
        get_surface_arrays(surface_idx: number /*i64*/): Array
        get_surface_blend_shape_arrays(surface_idx: number /*i64*/, blend_shape_idx: number /*i64*/): Array
        get_surface_lod_count(surface_idx: number /*i64*/): number /*i64*/
        get_surface_lod_size(surface_idx: number /*i64*/, lod_idx: number /*i64*/): number /*f64*/
        get_surface_lod_indices(surface_idx: number /*i64*/, lod_idx: number /*i64*/): PackedInt32Array
        get_surface_material(surface_idx: number /*i64*/): Material
        get_surface_format(surface_idx: number /*i64*/): number /*i64*/
        set_surface_name(surface_idx: number /*i64*/, name: string): void
        set_surface_material(surface_idx: number /*i64*/, material: Material): void
        generate_lods(normal_merge_angle: number /*f64*/, normal_split_angle: number /*f64*/, bone_transform_array: Array): void
        get_mesh(base_mesh: ArrayMesh): ArrayMesh
        clear(): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        set_lightmap_size_hint(size: Vector2i): void
        get_lightmap_size_hint(): Vector2i
    }
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
    }
    class InputEvent extends Resource {
        set_device(device: number /*i64*/): void
        get_device(): number /*i64*/
        is_action(action: StringName, exact_match: boolean): boolean
        is_action_pressed(action: StringName, allow_echo: boolean, exact_match: boolean): boolean
        is_action_released(action: StringName, exact_match: boolean): boolean
        get_action_strength(action: StringName, exact_match: boolean): number /*f64*/
        is_canceled(): boolean
        is_pressed(): boolean
        is_released(): boolean
        is_echo(): boolean
        as_text(): string
        is_match(event: InputEvent, exact_match: boolean): boolean
        is_action_type(): boolean
        accumulate(with_event: InputEvent): boolean
        xformed_by(xform: Transform2D, local_ofs: Vector2): InputEvent
    }
    class InputEventAction extends InputEvent {
        set_action(action: StringName): void
        get_action(): StringName
        set_pressed(pressed: boolean): void
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
    }
    class InputEventConfigurationDialog extends ConfirmationDialog {
    }
    class InputEventEditorPlugin extends EditorPlugin {
    }
    class InputEventFromWindow extends InputEvent {
        set_window_id(id: number /*i64*/): void
        get_window_id(): number /*i64*/
    }
    class InputEventGesture extends InputEventWithModifiers {
        set_position(position: Vector2): void
        get_position(): Vector2
    }
    class InputEventJoypadButton extends InputEvent {
        set_button_index(button_index: JoyButton): void
        get_button_index(): JoyButton
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pressed(pressed: boolean): void
    }
    class InputEventJoypadMotion extends InputEvent {
        set_axis(axis: JoyAxis): void
        get_axis(): JoyAxis
        set_axis_value(axis_value: number /*f64*/): void
        get_axis_value(): number /*f64*/
    }
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
        get_keycode_with_modifiers(): Key
        get_physical_keycode_with_modifiers(): Key
        get_key_label_with_modifiers(): Key
        as_text_keycode(): string
        as_text_physical_keycode(): string
        as_text_key_label(): string
    }
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
    }
    class InputEventMagnifyGesture extends InputEventGesture {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
    }
    class InputEventMouse extends InputEventWithModifiers {
        set_button_mask(button_mask: MouseButtonMask): void
        get_button_mask(): MouseButtonMask
        set_position(position: Vector2): void
        get_position(): Vector2
        set_global_position(global_position: Vector2): void
        get_global_position(): Vector2
    }
    class InputEventMouseButton extends InputEventMouse {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
        set_button_index(button_index: MouseButton): void
        get_button_index(): MouseButton
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_click(double_click: boolean): void
        is_double_click(): boolean
    }
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
    }
    class InputEventPanGesture extends InputEventGesture {
        set_delta(delta: Vector2): void
        get_delta(): Vector2
    }
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
    }
    class InputEventScreenTouch extends InputEventFromWindow {
        set_index(index: number /*i64*/): void
        get_index(): number /*i64*/
        set_position(position: Vector2): void
        get_position(): Vector2
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_tap(double_tap: boolean): void
        is_double_tap(): boolean
    }
    class InputEventShortcut extends InputEvent {
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
    }
    class InputEventWithModifiers extends InputEventFromWindow {
        set_command_or_control_autoremap(enable: boolean): void
        is_command_or_control_autoremap(): boolean
        is_command_or_control_pressed(): boolean
        set_alt_pressed(pressed: boolean): void
        is_alt_pressed(): boolean
        set_shift_pressed(pressed: boolean): void
        is_shift_pressed(): boolean
        set_ctrl_pressed(pressed: boolean): void
        is_ctrl_pressed(): boolean
        set_meta_pressed(pressed: boolean): void
        is_meta_pressed(): boolean
        get_modifiers_mask(): KeyModifierMask
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
        // SIGNAL: request_help
    }
    class InstancePlaceholder extends Node {
        get_stored_values(with_order: boolean): Dictionary
        create_instance(replace: boolean, custom_scene: PackedScene): Node
        get_instance_path(): string
    }
    class IntervalTweener extends Tweener {
    }
    namespace ItemList {
        enum IconMode {
            ICON_MODE_TOP = 0,
            ICON_MODE_LEFT = 1,
        }
        enum SelectMode {
            SELECT_SINGLE = 0,
            SELECT_MULTI = 1,
        }
    }
    class ItemList extends Control {
        add_item(text: string, icon: Texture2D, selectable: boolean): number /*i64*/
        add_icon_item(icon: Texture2D, selectable: boolean): number /*i64*/
        set_item_text(idx: number /*i64*/, text: string): void
        get_item_text(idx: number /*i64*/): string
        set_item_icon(idx: number /*i64*/, icon: Texture2D): void
        get_item_icon(idx: number /*i64*/): Texture2D
        set_item_text_direction(idx: number /*i64*/, direction: Control.TextDirection): void
        get_item_text_direction(idx: number /*i64*/): Control.TextDirection
        set_item_language(idx: number /*i64*/, language: string): void
        get_item_language(idx: number /*i64*/): string
        set_item_icon_transposed(idx: number /*i64*/, transposed: boolean): void
        is_item_icon_transposed(idx: number /*i64*/): boolean
        set_item_icon_region(idx: number /*i64*/, rect: Rect2): void
        get_item_icon_region(idx: number /*i64*/): Rect2
        set_item_icon_modulate(idx: number /*i64*/, modulate: Color): void
        get_item_icon_modulate(idx: number /*i64*/): Color
        set_item_selectable(idx: number /*i64*/, selectable: boolean): void
        is_item_selectable(idx: number /*i64*/): boolean
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        is_item_disabled(idx: number /*i64*/): boolean
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        get_item_metadata(idx: number /*i64*/): any
        set_item_custom_bg_color(idx: number /*i64*/, custom_bg_color: Color): void
        get_item_custom_bg_color(idx: number /*i64*/): Color
        set_item_custom_fg_color(idx: number /*i64*/, custom_fg_color: Color): void
        get_item_custom_fg_color(idx: number /*i64*/): Color
        get_item_rect(idx: number /*i64*/, expand: boolean): Rect2
        set_item_tooltip_enabled(idx: number /*i64*/, enable: boolean): void
        is_item_tooltip_enabled(idx: number /*i64*/): boolean
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        get_item_tooltip(idx: number /*i64*/): string
        select(idx: number /*i64*/, single: boolean): void
        deselect(idx: number /*i64*/): void
        deselect_all(): void
        is_selected(idx: number /*i64*/): boolean
        get_selected_items(): PackedInt32Array
        move_item(from_idx: number /*i64*/, to_idx: number /*i64*/): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        remove_item(idx: number /*i64*/): void
        clear(): void
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
        is_anything_selected(): boolean
        get_item_at_position(position: Vector2, exact: boolean): number /*i64*/
        ensure_current_is_visible(): void
        get_v_scroll_bar(): VScrollBar
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        force_update_list_size(): void
        // SIGNAL: item_selected
        // SIGNAL: empty_clicked
        // SIGNAL: item_clicked
        // SIGNAL: multi_selected
        // SIGNAL: item_activated
    }
    class JNISingleton extends Object {
    }
    class JSON extends Resource {
        static stringify(data: any, indent: string, sort_keys: boolean, full_precision: boolean): string
        static parse_string(json_string: string): any
        parse(json_text: string, keep_text: boolean): GodotError
        get_data(): any
        set_data(data: any): void
        get_parsed_text(): string
        get_error_line(): number /*i64*/
        get_error_message(): string
    }
    namespace JSONRPC {
        enum ErrorCode {
            PARSE_ERROR = -32700,
            INVALID_REQUEST = -32600,
            METHOD_NOT_FOUND = -32601,
            INVALID_PARAMS = -32602,
            INTERNAL_ERROR = -32603,
        }
    }
    class JSONRPC extends Object {
        set_scope(scope: string, target: Object): void
        process_action(action: any, recurse: boolean): any
        process_string(action: string): string
        make_request(method: string, params: any, id: any): Dictionary
        make_response(result: any, id: any): Dictionary
        make_notification(method: string, params: any): Dictionary
        make_response_error(code: number /*i64*/, message: string, id: any): Dictionary
    }
    class JavaClass extends RefCounted {
    }
    class JavaScriptObject extends RefCounted {
    }
    class Joint2D extends Node2D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        get_rid(): RID
    }
    class Joint3D extends Node3D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_solver_priority(priority: number /*i64*/): void
        get_solver_priority(): number /*i64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        get_rid(): RID
    }
    class Joint3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class KinematicCollision2D extends RefCounted {
        get_position(): Vector2
        get_normal(): Vector2
        get_travel(): Vector2
        get_remainder(): Vector2
        get_angle(up_direction: Vector2): number /*f64*/
        get_depth(): number /*f64*/
        get_local_shape(): Object
        get_collider(): Object
        get_collider_id(): number /*i64*/
        get_collider_rid(): RID
        get_collider_shape(): Object
        get_collider_shape_index(): number /*i64*/
        get_collider_velocity(): Vector2
    }
    class KinematicCollision3D extends RefCounted {
        get_travel(): Vector3
        get_remainder(): Vector3
        get_depth(): number /*f64*/
        get_collision_count(): number /*i64*/
        get_position(collision_index: number /*i64*/): Vector3
        get_normal(collision_index: number /*i64*/): Vector3
        get_angle(collision_index: number /*i64*/, up_direction: Vector3): number /*f64*/
        get_local_shape(collision_index: number /*i64*/): Object
        get_collider(collision_index: number /*i64*/): Object
        get_collider_id(collision_index: number /*i64*/): number /*i64*/
        get_collider_rid(collision_index: number /*i64*/): RID
        get_collider_shape(collision_index: number /*i64*/): Object
        get_collider_shape_index(collision_index: number /*i64*/): number /*i64*/
        get_collider_velocity(collision_index: number /*i64*/): Vector3
    }
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
        get_line_height(line: number /*i64*/): number /*i64*/
        get_line_count(): number /*i64*/
        get_visible_line_count(): number /*i64*/
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
    }
    namespace Label3D {
        enum DrawFlags {
            FLAG_SHADED = 0,
            FLAG_DOUBLE_SIDED = 1,
            FLAG_DISABLE_DEPTH_TEST = 2,
            FLAG_FIXED_SIZE = 3,
            FLAG_MAX = 4,
        }
        enum AlphaCutMode {
            ALPHA_CUT_DISABLED = 0,
            ALPHA_CUT_DISCARD = 1,
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            ALPHA_CUT_HASH = 3,
        }
    }
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
        set_draw_flag(flag: Label3D.DrawFlags, enabled: boolean): void
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
        generate_triangle_mesh(): TriangleMesh
    }
    class Label3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
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
    }
    namespace Light2D {
        enum ShadowFilter {
            SHADOW_FILTER_NONE = 0,
            SHADOW_FILTER_PCF5 = 1,
            SHADOW_FILTER_PCF13 = 2,
        }
        enum BlendMode {
            BLEND_MODE_ADD = 0,
            BLEND_MODE_SUB = 1,
            BLEND_MODE_MIX = 2,
        }
    }
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
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
    }
    namespace Light3D {
        enum Param {
            PARAM_ENERGY = 0,
            PARAM_INDIRECT_ENERGY = 1,
            PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            PARAM_SPECULAR = 3,
            PARAM_RANGE = 4,
            PARAM_SIZE = 5,
            PARAM_ATTENUATION = 6,
            PARAM_SPOT_ANGLE = 7,
            PARAM_SPOT_ATTENUATION = 8,
            PARAM_SHADOW_MAX_DISTANCE = 9,
            PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            PARAM_SHADOW_FADE_START = 13,
            PARAM_SHADOW_NORMAL_BIAS = 14,
            PARAM_SHADOW_BIAS = 15,
            PARAM_SHADOW_PANCAKE_SIZE = 16,
            PARAM_SHADOW_OPACITY = 17,
            PARAM_SHADOW_BLUR = 18,
            PARAM_TRANSMITTANCE_BIAS = 19,
            PARAM_INTENSITY = 20,
            PARAM_MAX = 21,
        }
        enum BakeMode {
            BAKE_DISABLED = 0,
            BAKE_STATIC = 1,
            BAKE_DYNAMIC = 2,
        }
    }
    class Light3D extends VisualInstance3D {
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_param(param: Light3D.Param, value: number /*f64*/): void
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
        get_correlated_color(): Color
    }
    class Light3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class LightOccluder2D extends Node2D {
        set_occluder_polygon(polygon: OccluderPolygon2D): void
        get_occluder_polygon(): OccluderPolygon2D
        set_occluder_light_mask(mask: number /*i64*/): void
        get_occluder_light_mask(): number /*i64*/
        set_as_sdf_collision(enable: boolean): void
        is_set_as_sdf_collision(): boolean
    }
    class LightOccluder2DEditor extends AbstractPolygon2DEditor {
    }
    class LightOccluder2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LightmapGI {
        enum BakeQuality {
            BAKE_QUALITY_LOW = 0,
            BAKE_QUALITY_MEDIUM = 1,
            BAKE_QUALITY_HIGH = 2,
            BAKE_QUALITY_ULTRA = 3,
        }
        enum GenerateProbes {
            GENERATE_PROBES_DISABLED = 0,
            GENERATE_PROBES_SUBDIV_4 = 1,
            GENERATE_PROBES_SUBDIV_8 = 2,
            GENERATE_PROBES_SUBDIV_16 = 3,
            GENERATE_PROBES_SUBDIV_32 = 4,
        }
        enum BakeError {
            BAKE_ERROR_OK = 0,
            BAKE_ERROR_NO_SCENE_ROOT = 1,
            BAKE_ERROR_FOREIGN_DATA = 2,
            BAKE_ERROR_NO_LIGHTMAPPER = 3,
            BAKE_ERROR_NO_SAVE_PATH = 4,
            BAKE_ERROR_NO_MESHES = 5,
            BAKE_ERROR_MESHES_INVALID = 6,
            BAKE_ERROR_CANT_CREATE_IMAGE = 7,
            BAKE_ERROR_USER_ABORTED = 8,
            BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9,
        }
        enum EnvironmentMode {
            ENVIRONMENT_MODE_DISABLED = 0,
            ENVIRONMENT_MODE_SCENE = 1,
            ENVIRONMENT_MODE_CUSTOM_SKY = 2,
            ENVIRONMENT_MODE_CUSTOM_COLOR = 3,
        }
    }
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
    }
    class LightmapGIData extends Resource {
        _set_user_data(data: Array): void
        _get_user_data(): Array
        set_lightmap_textures(light_textures: Array): void
        get_lightmap_textures(): Array
        set_uses_spherical_harmonics(uses_spherical_harmonics: boolean): void
        is_using_spherical_harmonics(): boolean
        add_user(path: NodePath, uv_scale: Rect2, slice_index: number /*i64*/, sub_instance: number /*i64*/): void
        get_user_count(): number /*i64*/
        get_user_path(user_idx: number /*i64*/): NodePath
        clear_users(): void
        _set_probe_data(data: Dictionary): void
        _get_probe_data(): Dictionary
        set_light_texture(light_texture: TextureLayered): void
        get_light_texture(): TextureLayered
        _set_light_textures_data(data: Array): void
        _get_light_textures_data(): Array
    }
    class LightmapGIEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class LightmapGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class LightmapProbe extends Node3D {
    }
    class LightmapProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Lightmapper extends RefCounted {
    }
    class LightmapperRD extends Lightmapper {
    }
    namespace Line2D {
        enum LineJointMode {
            LINE_JOINT_SHARP = 0,
            LINE_JOINT_BEVEL = 1,
            LINE_JOINT_ROUND = 2,
        }
        enum LineCapMode {
            LINE_CAP_NONE = 0,
            LINE_CAP_BOX = 1,
            LINE_CAP_ROUND = 2,
        }
        enum LineTextureMode {
            LINE_TEXTURE_NONE = 0,
            LINE_TEXTURE_TILE = 1,
            LINE_TEXTURE_STRETCH = 2,
        }
    }
    class Line2D extends Node2D {
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        set_point_position(index: number /*i64*/, position: Vector2): void
        get_point_position(index: number /*i64*/): Vector2
        get_point_count(): number /*i64*/
        add_point(position: Vector2, index: number /*i64*/): void
        remove_point(index: number /*i64*/): void
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
    }
    class Line2DEditor extends AbstractPolygon2DEditor {
    }
    class Line2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LineEdit {
        enum MenuItems {
            MENU_CUT = 0,
            MENU_COPY = 1,
            MENU_PASTE = 2,
            MENU_CLEAR = 3,
            MENU_SELECT_ALL = 4,
            MENU_UNDO = 5,
            MENU_REDO = 6,
            MENU_SUBMENU_TEXT_DIR = 7,
            MENU_DIR_INHERITED = 8,
            MENU_DIR_AUTO = 9,
            MENU_DIR_LTR = 10,
            MENU_DIR_RTL = 11,
            MENU_DISPLAY_UCC = 12,
            MENU_SUBMENU_INSERT_UCC = 13,
            MENU_INSERT_LRM = 14,
            MENU_INSERT_RLM = 15,
            MENU_INSERT_LRE = 16,
            MENU_INSERT_RLE = 17,
            MENU_INSERT_LRO = 18,
            MENU_INSERT_RLO = 19,
            MENU_INSERT_PDF = 20,
            MENU_INSERT_ALM = 21,
            MENU_INSERT_LRI = 22,
            MENU_INSERT_RLI = 23,
            MENU_INSERT_FSI = 24,
            MENU_INSERT_PDI = 25,
            MENU_INSERT_ZWJ = 26,
            MENU_INSERT_ZWNJ = 27,
            MENU_INSERT_WJ = 28,
            MENU_INSERT_SHY = 29,
            MENU_MAX = 30,
        }
        enum VirtualKeyboardType {
            KEYBOARD_TYPE_DEFAULT = 0,
            KEYBOARD_TYPE_MULTILINE = 1,
            KEYBOARD_TYPE_NUMBER = 2,
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            KEYBOARD_TYPE_PHONE = 4,
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            KEYBOARD_TYPE_PASSWORD = 6,
            KEYBOARD_TYPE_URL = 7,
        }
    }
    class LineEdit extends Control {
        _text_changed(): void
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        clear(): void
        select(from: number /*i64*/, to: number /*i64*/): void
        select_all(): void
        deselect(): void
        has_selection(): boolean
        get_selected_text(): string
        get_selection_from_column(): number /*i64*/
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
        insert_text_at_caret(text: string): void
        delete_char_at_caret(): void
        delete_text(from_column: number /*i64*/, to_column: number /*i64*/): void
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_secret(enabled: boolean): void
        is_secret(): boolean
        set_secret_character(character: string): void
        get_secret_character(): string
        menu_option(option: number /*i64*/): void
        get_menu(): PopupMenu
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
        // SIGNAL: text_changed
        // SIGNAL: text_change_rejected
        // SIGNAL: text_submitted
    }
    namespace LinkButton {
        enum UnderlineMode {
            UNDERLINE_MODE_ALWAYS = 0,
            UNDERLINE_MODE_ON_HOVER = 1,
            UNDERLINE_MODE_NEVER = 2,
        }
    }
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
    }
    class LocalizationEditor extends VBoxContainer {
        update_translations(): void
        // SIGNAL: localization_changed
    }
    class MainLoop extends Object {
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        static readonly NOTIFICATION_WM_ABOUT = 2011
        static readonly NOTIFICATION_CRASH = 2012
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        // SIGNAL: on_request_permissions_result
    }
    class MarginContainer extends Container {
    }
    class Marker2D extends Node2D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
    }
    class Marker3D extends Node3D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
    }
    class Marker3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class Material extends Resource {
        static readonly RENDER_PRIORITY_MAX = 127
        static readonly RENDER_PRIORITY_MIN = -128
        set_next_pass(next_pass: Material): void
        get_next_pass(): Material
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        inspect_native_shader_code(): void
        create_placeholder(): Resource
    }
    class MaterialEditorPlugin extends EditorPlugin {
    }
    class MenuBar extends Control {
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        set_disable_shortcuts(disabled: boolean): void
        set_prefer_global_menu(enabled: boolean): void
        is_prefer_global_menu(): boolean
        is_native_menu(): boolean
        get_menu_count(): number /*i64*/
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_start_index(enabled: number /*i64*/): void
        get_start_index(): number /*i64*/
        set_menu_title(menu: number /*i64*/, title: string): void
        get_menu_title(menu: number /*i64*/): string
        set_menu_tooltip(menu: number /*i64*/, tooltip: string): void
        get_menu_tooltip(menu: number /*i64*/): string
        set_menu_disabled(menu: number /*i64*/, disabled: boolean): void
        is_menu_disabled(menu: number /*i64*/): boolean
        set_menu_hidden(menu: number /*i64*/, hidden: boolean): void
        is_menu_hidden(menu: number /*i64*/): boolean
        get_menu_popup(menu: number /*i64*/): PopupMenu
    }
    class MenuButton extends Button {
        get_popup(): PopupMenu
        show_popup(): void
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        set_disable_shortcuts(disabled: boolean): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        // SIGNAL: about_to_popup
    }
    namespace Mesh {
        enum PrimitiveType {
            PRIMITIVE_POINTS = 0,
            PRIMITIVE_LINES = 1,
            PRIMITIVE_LINE_STRIP = 2,
            PRIMITIVE_TRIANGLES = 3,
            PRIMITIVE_TRIANGLE_STRIP = 4,
        }
        enum ArrayType {
            ARRAY_VERTEX = 0,
            ARRAY_NORMAL = 1,
            ARRAY_TANGENT = 2,
            ARRAY_COLOR = 3,
            ARRAY_TEX_UV = 4,
            ARRAY_TEX_UV2 = 5,
            ARRAY_CUSTOM0 = 6,
            ARRAY_CUSTOM1 = 7,
            ARRAY_CUSTOM2 = 8,
            ARRAY_CUSTOM3 = 9,
            ARRAY_BONES = 10,
            ARRAY_WEIGHTS = 11,
            ARRAY_INDEX = 12,
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            ARRAY_CUSTOM_RG_HALF = 2,
            ARRAY_CUSTOM_RGBA_HALF = 3,
            ARRAY_CUSTOM_R_FLOAT = 4,
            ARRAY_CUSTOM_RG_FLOAT = 5,
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            ARRAY_FORMAT_VERTEX = 1,
            ARRAY_FORMAT_NORMAL = 2,
            ARRAY_FORMAT_TANGENT = 4,
            ARRAY_FORMAT_COLOR = 8,
            ARRAY_FORMAT_TEX_UV = 16,
            ARRAY_FORMAT_TEX_UV2 = 32,
            ARRAY_FORMAT_CUSTOM0 = 64,
            ARRAY_FORMAT_CUSTOM1 = 128,
            ARRAY_FORMAT_CUSTOM2 = 256,
            ARRAY_FORMAT_CUSTOM3 = 512,
            ARRAY_FORMAT_BONES = 1024,
            ARRAY_FORMAT_WEIGHTS = 2048,
            ARRAY_FORMAT_INDEX = 4096,
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
        }
        enum BlendShapeMode {
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
    }
    class Mesh extends Resource {
        set_lightmap_size_hint(size: Vector2i): void
        get_lightmap_size_hint(): Vector2i
        get_aabb(): AABB
        get_faces(): PackedVector3Array
        get_surface_count(): number /*i64*/
        surface_get_arrays(surf_idx: number /*i64*/): Array
        surface_get_blend_shape_arrays(surf_idx: number /*i64*/): Array
        surface_set_material(surf_idx: number /*i64*/, material: Material): void
        surface_get_material(surf_idx: number /*i64*/): Material
        create_placeholder(): Resource
        create_trimesh_shape(): ConcavePolygonShape3D
        create_convex_shape(clean: boolean, simplify: boolean): ConvexPolygonShape3D
        create_outline(margin: number /*f64*/): Mesh
        generate_triangle_mesh(): TriangleMesh
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
            CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1,
        }
    }
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
    }
    class MeshDataTool extends RefCounted {
        clear(): void
        create_from_surface(mesh: ArrayMesh, surface: number /*i64*/): GodotError
        commit_to_surface(mesh: ArrayMesh, compression_flags: number /*i64*/): GodotError
        get_format(): number /*i64*/
        get_vertex_count(): number /*i64*/
        get_edge_count(): number /*i64*/
        get_face_count(): number /*i64*/
        set_vertex(idx: number /*i64*/, vertex: Vector3): void
        get_vertex(idx: number /*i64*/): Vector3
        set_vertex_normal(idx: number /*i64*/, normal: Vector3): void
        get_vertex_normal(idx: number /*i64*/): Vector3
        set_vertex_tangent(idx: number /*i64*/, tangent: Plane): void
        get_vertex_tangent(idx: number /*i64*/): Plane
        set_vertex_uv(idx: number /*i64*/, uv: Vector2): void
        get_vertex_uv(idx: number /*i64*/): Vector2
        set_vertex_uv2(idx: number /*i64*/, uv2: Vector2): void
        get_vertex_uv2(idx: number /*i64*/): Vector2
        set_vertex_color(idx: number /*i64*/, color: Color): void
        get_vertex_color(idx: number /*i64*/): Color
        set_vertex_bones(idx: number /*i64*/, bones: PackedInt32Array): void
        get_vertex_bones(idx: number /*i64*/): PackedInt32Array
        set_vertex_weights(idx: number /*i64*/, weights: PackedFloat32Array): void
        get_vertex_weights(idx: number /*i64*/): PackedFloat32Array
        set_vertex_meta(idx: number /*i64*/, meta: any): void
        get_vertex_meta(idx: number /*i64*/): any
        get_vertex_edges(idx: number /*i64*/): PackedInt32Array
        get_vertex_faces(idx: number /*i64*/): PackedInt32Array
        get_edge_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        get_edge_faces(idx: number /*i64*/): PackedInt32Array
        set_edge_meta(idx: number /*i64*/, meta: any): void
        get_edge_meta(idx: number /*i64*/): any
        get_face_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        get_face_edge(idx: number /*i64*/, edge: number /*i64*/): number /*i64*/
        set_face_meta(idx: number /*i64*/, meta: any): void
        get_face_meta(idx: number /*i64*/): any
        get_face_normal(idx: number /*i64*/): Vector3
        set_material(material: Material): void
        get_material(): Material
    }
    class MeshEditorPlugin extends EditorPlugin {
    }
    class MeshInstance2D extends Node2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        // SIGNAL: texture_changed
    }
    class MeshInstance3D extends GeometryInstance3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_skin(skin: Skin): void
        get_skin(): Skin
        get_surface_override_material_count(): number /*i64*/
        set_surface_override_material(surface: number /*i64*/, material: Material): void
        get_surface_override_material(surface: number /*i64*/): Material
        get_active_material(surface: number /*i64*/): Material
        create_trimesh_collision(): void
        create_convex_collision(clean: boolean, simplify: boolean): void
        create_multiple_convex_collisions(settings: MeshConvexDecompositionSettings): void
        get_blend_shape_count(): number /*i64*/
        find_blend_shape_by_name(name: StringName): number /*i64*/
        get_blend_shape_value(blend_shape_idx: number /*i64*/): number /*f64*/
        set_blend_shape_value(blend_shape_idx: number /*i64*/, value: number /*f64*/): void
        create_debug_tangents(): void
    }
    class MeshInstance3DEditor extends Control {
    }
    class MeshInstance3DEditorPlugin extends EditorPlugin {
    }
    class MeshInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class MeshLibrary extends Resource {
        create_item(id: number /*i64*/): void
        set_item_name(id: number /*i64*/, name: string): void
        set_item_mesh(id: number /*i64*/, mesh: Mesh): void
        set_item_mesh_transform(id: number /*i64*/, mesh_transform: Transform3D): void
        set_item_navigation_mesh(id: number /*i64*/, navigation_mesh: NavigationMesh): void
        set_item_navigation_mesh_transform(id: number /*i64*/, navigation_mesh: Transform3D): void
        set_item_navigation_layers(id: number /*i64*/, navigation_layers: number /*i64*/): void
        set_item_shapes(id: number /*i64*/, shapes: Array): void
        set_item_preview(id: number /*i64*/, texture: Texture2D): void
        get_item_name(id: number /*i64*/): string
        get_item_mesh(id: number /*i64*/): Mesh
        get_item_mesh_transform(id: number /*i64*/): Transform3D
        get_item_navigation_mesh(id: number /*i64*/): NavigationMesh
        get_item_navigation_mesh_transform(id: number /*i64*/): Transform3D
        get_item_navigation_layers(id: number /*i64*/): number /*i64*/
        get_item_shapes(id: number /*i64*/): Array
        get_item_preview(id: number /*i64*/): Texture2D
        remove_item(id: number /*i64*/): void
        find_item_by_name(name: string): number /*i64*/
        clear(): void
        get_item_list(): PackedInt32Array
        get_last_unused_item_id(): number /*i64*/
    }
    class MeshLibraryEditor extends Control {
    }
    class MeshLibraryEditorPlugin extends EditorPlugin {
    }
    class MeshTexture extends Texture2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_image_size(size: Vector2): void
        get_image_size(): Vector2
        set_base_texture(texture: Texture2D): void
        get_base_texture(): Texture2D
    }
    class MethodTweener extends Tweener {
        set_delay(delay: number /*f64*/): MethodTweener
        set_trans(trans: Tween.TransitionType): MethodTweener
        set_ease(ease: Tween.EaseType): MethodTweener
    }
    class MissingNode extends Node {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
    }
    class MissingResource extends Resource {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
    }
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
    }
    class MovieWriter extends Object {
        static add_writer(writer: MovieWriter): void
    }
    class MovieWriterMJPEG extends MovieWriter {
    }
    class MovieWriterPNGWAV extends MovieWriter {
    }
    namespace MultiMesh {
        enum TransformFormat {
            TRANSFORM_2D = 0,
            TRANSFORM_3D = 1,
        }
    }
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
        set_instance_transform(instance: number /*i64*/, transform: Transform3D): void
        set_instance_transform_2d(instance: number /*i64*/, transform: Transform2D): void
        get_instance_transform(instance: number /*i64*/): Transform3D
        get_instance_transform_2d(instance: number /*i64*/): Transform2D
        set_instance_color(instance: number /*i64*/, color: Color): void
        get_instance_color(instance: number /*i64*/): Color
        set_instance_custom_data(instance: number /*i64*/, custom_data: Color): void
        get_instance_custom_data(instance: number /*i64*/): Color
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
    }
    class MultiMeshEditor extends Control {
    }
    class MultiMeshEditorPlugin extends EditorPlugin {
    }
    class MultiMeshInstance2D extends Node2D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        // SIGNAL: texture_changed
    }
    class MultiMeshInstance3D extends GeometryInstance3D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
    }
    namespace MultiplayerAPI {
        enum RPCMode {
            RPC_MODE_DISABLED = 0,
            RPC_MODE_ANY_PEER = 1,
            RPC_MODE_AUTHORITY = 2,
        }
    }
    class MultiplayerAPI extends RefCounted {
        has_multiplayer_peer(): boolean
        get_multiplayer_peer(): MultiplayerPeer
        set_multiplayer_peer(peer: MultiplayerPeer): void
        get_unique_id(): number /*i64*/
        is_server(): boolean
        get_remote_sender_id(): number /*i64*/
        poll(): GodotError
        rpc(peer: number /*i64*/, object: Object, method: StringName, arguments: Array): GodotError
        object_configuration_add(object: Object, configuration: any): GodotError
        object_configuration_remove(object: Object, configuration: any): GodotError
        get_peers(): PackedInt32Array
        static set_default_interface(interface_name: StringName): void
        static get_default_interface(): StringName
        static create_default_interface(): MultiplayerAPI
        // SIGNAL: peer_connected
        // SIGNAL: peer_disconnected
        // SIGNAL: connected_to_server
        // SIGNAL: connection_failed
        // SIGNAL: server_disconnected
    }
    class MultiplayerAPIExtension extends MultiplayerAPI {
    }
    class MultiplayerEditorDebugger extends EditorDebuggerPlugin {
        // SIGNAL: open_request
    }
    class MultiplayerEditorPlugin extends EditorPlugin {
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            CONNECTION_DISCONNECTED = 0,
            CONNECTION_CONNECTING = 1,
            CONNECTION_CONNECTED = 2,
        }
        enum TransferMode {
            TRANSFER_MODE_UNRELIABLE = 0,
            TRANSFER_MODE_UNRELIABLE_ORDERED = 1,
            TRANSFER_MODE_RELIABLE = 2,
        }
    }
    class MultiplayerPeer extends PacketPeer {
        static readonly TARGET_PEER_BROADCAST = 0
        static readonly TARGET_PEER_SERVER = 1
        set_transfer_channel(channel: number /*i64*/): void
        get_transfer_channel(): number /*i64*/
        set_transfer_mode(mode: MultiplayerPeer.TransferMode): void
        get_transfer_mode(): MultiplayerPeer.TransferMode
        set_target_peer(id: number /*i64*/): void
        get_packet_peer(): number /*i64*/
        get_packet_channel(): number /*i64*/
        get_packet_mode(): MultiplayerPeer.TransferMode
        poll(): void
        close(): void
        disconnect_peer(peer: number /*i64*/, force: boolean): void
        get_connection_status(): MultiplayerPeer.ConnectionStatus
        get_unique_id(): number /*i64*/
        generate_unique_id(): number /*i64*/
        set_refuse_new_connections(enable: boolean): void
        is_refusing_new_connections(): boolean
        is_server_relay_supported(): boolean
        // SIGNAL: peer_connected
        // SIGNAL: peer_disconnected
    }
    class MultiplayerPeerExtension extends MultiplayerPeer {
    }
    class MultiplayerSpawner extends Node {
        add_spawnable_scene(path: string): void
        get_spawnable_scene_count(): number /*i64*/
        get_spawnable_scene(index: number /*i64*/): string
        clear_spawnable_scenes(): void
        _get_spawnable_scenes(): PackedStringArray
        _set_spawnable_scenes(scenes: PackedStringArray): void
        spawn(data: any): Node
        get_spawn_path(): NodePath
        set_spawn_path(path: NodePath): void
        get_spawn_limit(): number /*i64*/
        set_spawn_limit(limit: number /*i64*/): void
        get_spawn_function(): any /*CALLABLE*/
        set_spawn_function(spawn_function: any /*CALLABLE*/): void
        // SIGNAL: despawned
        // SIGNAL: spawned
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            VISIBILITY_PROCESS_IDLE = 0,
            VISIBILITY_PROCESS_PHYSICS = 1,
            VISIBILITY_PROCESS_NONE = 2,
        }
    }
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
        update_visibility(for_peer: number /*i64*/): void
        set_visibility_public(visible: boolean): void
        is_visibility_public(): boolean
        add_visibility_filter(filter: any /*CALLABLE*/): void
        remove_visibility_filter(filter: any /*CALLABLE*/): void
        set_visibility_for(peer: number /*i64*/, visible: boolean): void
        get_visibility_for(peer: number /*i64*/): boolean
        // SIGNAL: synchronized
        // SIGNAL: delta_synchronized
        // SIGNAL: visibility_changed
    }
    class Mutex extends RefCounted {
        lock(): void
        try_lock(): boolean
        unlock(): void
    }
    class NavigationAgent2D extends Node {
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
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_target_position(position: Vector2): void
        get_target_position(): Vector2
        get_next_path_position(): Vector2
        set_velocity_forced(velocity: Vector2): void
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        distance_to_target(): number /*f64*/
        get_current_navigation_result(): NavigationPathQueryResult2D
        get_current_navigation_path(): PackedVector2Array
        get_current_navigation_path_index(): number /*i64*/
        is_target_reached(): boolean
        is_target_reachable(): boolean
        is_navigation_finished(): boolean
        get_final_position(): Vector2
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
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
        // SIGNAL: path_changed
        // SIGNAL: target_reached
        // SIGNAL: waypoint_reached
        // SIGNAL: link_reached
        // SIGNAL: navigation_finished
        // SIGNAL: velocity_computed
    }
    class NavigationAgent3D extends Node {
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
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_target_position(position: Vector3): void
        get_target_position(): Vector3
        get_next_path_position(): Vector3
        set_velocity_forced(velocity: Vector3): void
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        distance_to_target(): number /*f64*/
        get_current_navigation_result(): NavigationPathQueryResult3D
        get_current_navigation_path(): PackedVector3Array
        get_current_navigation_path_index(): number /*i64*/
        is_target_reached(): boolean
        is_target_reachable(): boolean
        is_navigation_finished(): boolean
        get_final_position(): Vector3
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
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
        // SIGNAL: path_changed
        // SIGNAL: target_reached
        // SIGNAL: waypoint_reached
        // SIGNAL: link_reached
        // SIGNAL: navigation_finished
        // SIGNAL: velocity_computed
    }
    class NavigationLink2D extends Node2D {
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector2): void
        get_start_position(): Vector2
        set_end_position(position: Vector2): void
        get_end_position(): Vector2
        set_global_start_position(position: Vector2): void
        get_global_start_position(): Vector2
        set_global_end_position(position: Vector2): void
        get_global_end_position(): Vector2
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
    }
    class NavigationLink2DEditor extends Control {
    }
    class NavigationLink2DEditorPlugin extends EditorPlugin {
    }
    class NavigationLink3D extends Node3D {
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_start_position(position: Vector3): void
        get_start_position(): Vector3
        set_end_position(position: Vector3): void
        get_end_position(): Vector3
        set_global_start_position(position: Vector3): void
        get_global_start_position(): Vector3
        set_global_end_position(position: Vector3): void
        get_global_end_position(): Vector3
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
    }
    class NavigationLink3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            SAMPLE_PARTITION_WATERSHED = 0,
            SAMPLE_PARTITION_MONOTONE = 1,
            SAMPLE_PARTITION_LAYERS = 2,
            SAMPLE_PARTITION_MAX = 3,
        }
        enum ParsedGeometryType {
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            PARSED_GEOMETRY_BOTH = 2,
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    class NavigationMesh extends Resource {
        set_sample_partition_type(sample_partition_type: NavigationMesh.SamplePartitionType): void
        get_sample_partition_type(): NavigationMesh.SamplePartitionType
        set_parsed_geometry_type(geometry_type: NavigationMesh.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationMesh.ParsedGeometryType
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
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
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        add_polygon(polygon: PackedInt32Array): void
        get_polygon_count(): number /*i64*/
        get_polygon(idx: number /*i64*/): PackedInt32Array
        clear_polygons(): void
        create_from_mesh(mesh: Mesh): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        clear(): void
    }
    class NavigationMeshEditor extends Control {
    }
    class NavigationMeshEditorPlugin extends EditorPlugin {
    }
    class NavigationMeshSourceGeometryData2D extends Resource {
        clear(): void
        has_data(): boolean
        set_traversable_outlines(traversable_outlines: Array): void
        get_traversable_outlines(): Array
        set_obstruction_outlines(obstruction_outlines: Array): void
        get_obstruction_outlines(): Array
        add_traversable_outline(shape_outline: PackedVector2Array): void
        add_obstruction_outline(shape_outline: PackedVector2Array): void
    }
    class NavigationMeshSourceGeometryData3D extends Resource {
        set_vertices(vertices: PackedFloat32Array): void
        get_vertices(): PackedFloat32Array
        set_indices(indices: PackedInt32Array): void
        get_indices(): PackedInt32Array
        clear(): void
        has_data(): boolean
        add_mesh(mesh: Mesh, xform: Transform3D): void
        add_mesh_array(mesh_array: Array, xform: Transform3D): void
        add_faces(faces: PackedVector3Array, xform: Transform3D): void
    }
    class NavigationObstacle2D extends Node2D {
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_navigation_map(navigation_map: RID): void
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
    }
    class NavigationObstacle2DEditor extends AbstractPolygon2DEditor {
    }
}
