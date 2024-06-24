// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class GodotError {}
    // // Singleton Class
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
    /** Exposes performance-related data. */
    class Performance extends Object {
        /** Returns the value of one of the available built-in monitors. You should provide one of the [enum Monitor] constants as the argument, like this:
         *  
         *  See [method get_custom_monitor] to query custom performance monitors' values.
         */
        static get_monitor(monitor: Performance.Monitor): number /*f64*/
        /** Adds a custom monitor with the name [param id]. You can specify the category of the monitor using slash delimiters in [param id] (for example: [code]"Game/NumberOfNPCs"[/code]). If there is more than one slash delimiter, then the default category is used. The default category is [code]"Custom"[/code]. Prints an error if given [param id] is already present.
         *  
         *  The debugger calls the callable to get the value of custom monitor. The callable must return a zero or positive integer or floating-point number.
         *  Callables are called with arguments supplied in argument array.
         */
        static add_custom_monitor(id: StringName, callable: Callable, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): void
        /** Removes the custom monitor with given [param id]. Prints an error if the given [param id] is already absent. */
        static remove_custom_monitor(id: StringName): void
        /** Returns [code]true[/code] if custom monitor with the given [param id] is present, [code]false[/code] otherwise. */
        static has_custom_monitor(id: StringName): boolean
        /** Returns the value of custom monitor with given [param id]. The callable is called to get the value of custom monitor. See also [method has_custom_monitor]. Prints an error if the given [param id] is absent. */
        static get_custom_monitor(id: StringName): any
        /** Returns the last tick in which custom monitor was added/removed (in microseconds since the engine started). This is set to [method Time.get_ticks_usec] when the monitor is updated. */
        static get_monitor_modification_time(): number /*i64*/
        /** Returns the names of active custom monitors in an [Array]. */
        static get_custom_monitor_names(): Array
    }
    // // Singleton Class
    /** A singleton for managing [TextServer] implementations. */
    class TextServerManager extends Object {
        /** Registers a [TextServer] interface. */
        static add_interface(interface: TextServer): void
        /** Returns the number of interfaces currently registered. */
        static get_interface_count(): number /*i64*/
        /** Removes an interface. All fonts and shaped text caches should be freed before removing an interface. */
        static remove_interface(interface: TextServer): void
        /** Returns the interface registered at a given index. */
        static get_interface(idx: number /*i64*/): TextServer
        /** Returns a list of available interfaces, with the index and name of each interface. */
        static get_interfaces(): Array
        /** Finds an interface by its [param name]. */
        static find_interface(name: string): TextServer
        /** Sets the primary [TextServer] interface. */
        static set_primary_interface(index: TextServer): void
        /** Returns the primary [TextServer] interface currently in use. */
        static get_primary_interface(): TextServer
        static readonly interface_added: Signal
        static readonly interface_removed: Signal
    }
    // // Singleton Class
    /** A singleton for managing [PhysicsServer2D] implementations. */
    class PhysicsServer2DManager extends Object {
        /** Register a [PhysicsServer2D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer2D] object. */
        static register_server(name: string, create_callback: Callable): void
        /** Set the default [PhysicsServer2D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static set_default_server(name: string, priority: number /*i64*/): void
    }
    // // Singleton Class
    /** A singleton for managing [PhysicsServer3D] implementations. */
    class PhysicsServer3DManager extends Object {
        /** Register a [PhysicsServer3D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer3D] object. */
        static register_server(name: string, create_callback: Callable): void
        /** Set the default [PhysicsServer3D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static set_default_server(name: string, priority: number /*i64*/): void
    }
    // // Singleton Class
    /** Helper class for creating and clearing navigation meshes. */
    class NavigationMeshGenerator extends Object {
        /** The bake function is deprecated due to core threading changes. To upgrade existing code, first create a [NavigationMeshSourceGeometryData3D] resource. Use this resource with [method parse_source_geometry_data] to parse the SceneTree for nodes that should contribute to the navigation mesh baking. The SceneTree parsing needs to happen on the main thread. After the parsing is finished use the resource with [method bake_from_source_geometry_data] to bake a navigation mesh. */
        static bake(navigation_mesh: NavigationMesh, root_node: Node): void
        /** Removes all polygons and vertices from the provided [param navigation_mesh] resource. */
        static clear(navigation_mesh: NavigationMesh): void
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.
         *  [b]Note:[/b] This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.
         *  [b]Performance:[/b] While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.
         */
        static parse_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, root_node: Node, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
    }
    // // Singleton Class
    /** Stores globally-accessible variables. */
    class ProjectSettings extends Object {
        /** Returns [code]true[/code] if a configuration value is present. */
        static has_setting(name: string): boolean
        /** Sets the value of a setting.
         *  [b]Example:[/b]
         *  
         *  This can also be used to erase custom project settings. To do this change the setting value to [code]null[/code].
         */
        static set_setting(name: string, value: any): void
        /** Returns the value of the setting identified by [param name]. If the setting doesn't exist and [param default_value] is specified, the value of [param default_value] is returned. Otherwise, [code]null[/code] is returned.
         *  [b]Example:[/b]
         *  
         *  [b]Note:[/b] This method doesn't take potential feature overrides into account automatically. Use [method get_setting_with_override] to handle seamlessly.
         */
        static get_setting(name: string, default_value: any = <any> {} /*compound.type from nil*/): any
        /** Similar to [method get_setting], but applies feature tag overrides if any exists and is valid.
         *  [b]Example:[/b]
         *  If the following setting override exists "application/config/name.windows", and the following code is executed:
         *  
         *  Then the overridden setting will be returned instead if the project is running on the [i]Windows[/i] operating system.
         */
        static get_setting_with_override(name: StringName): any
        /** Returns an [Array] of registered global classes. Each global class is represented as a [Dictionary] that contains the following entries:
         *  - [code]base[/code] is a name of the base class;
         *  - [code]class[/code] is a name of the registered global class;
         *  - [code]icon[/code] is a path to a custom icon of the global class, if it has any;
         *  - [code]language[/code] is a name of a programming language in which the global class is written;
         *  - [code]path[/code] is a path to a file containing the global class.
         *  [b]Note:[/b] Both the script and the icon paths are local to the project filesystem, i.e. they start with [code]res://[/code].
         */
        static get_global_class_list(): Array
        /** Sets the order of a configuration value (influences when saved to the config file). */
        static set_order(name: string, position: number /*i64*/): void
        /** Returns the order of a configuration value (influences when saved to the config file). */
        static get_order(name: string): number /*i64*/
        /** Sets the specified setting's initial value. This is the value the setting reverts to. */
        static set_initial_value(name: string, value: any): void
        /** Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option. */
        static set_as_basic(name: string, basic: boolean): void
        /** Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user. */
        static set_as_internal(name: string, internal: boolean): void
        /** Adds a custom property info to a property. The dictionary must contain:
         *  - [code]"name"[/code]: [String] (the property's name)
         *  - [code]"type"[/code]: [int] (see [enum Variant.Type])
         *  - optionally [code]"hint"[/code]: [int] (see [enum PropertyHint]) and [code]"hint_string"[/code]: [String]
         *  [b]Example:[/b]
         *  
         */
        static add_property_info(hint: Dictionary): void
        /** Sets whether a setting requires restarting the editor to properly take effect.
         *  [b]Note:[/b] This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling [method set_restart_if_changed] does [i]not[/i] delay the setting being set when changed.
         */
        static set_restart_if_changed(name: string, restart: boolean): void
        /** Clears the whole configuration (not recommended, may break things). */
        static clear(name: string): void
        /** Returns the localized path (starting with [code]res://[/code]) corresponding to the absolute, native OS [param path]. See also [method globalize_path]. */
        static localize_path(path: string): string
        /** Returns the absolute, native OS path corresponding to the localized [param path] (starting with [code]res://[/code] or [code]user://[/code]). The returned path will vary depending on the operating system and user preferences. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] to see what those paths convert to. See also [method localize_path].
         *  [b]Note:[/b] [method globalize_path] with [code]res://[/code] will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:
         *  
         */
        static globalize_path(path: string): string
        /** Saves the configuration to the [code]project.godot[/code] file.
         *  [b]Note:[/b] This method is intended to be used by editor plugins, as modified [ProjectSettings] can't be loaded back in the running app. If you want to change project settings in exported projects, use [method save_custom] to save [code]override.cfg[/code] file.
         */
        static save(): GodotError
        /** Loads the contents of the .pck or .zip file specified by [param pack] into the resource filesystem ([code]res://[/code]). Returns [code]true[/code] on success.
         *  [b]Note:[/b] If a file from [param pack] shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from [param pack] unless [param replace_files] is set to [code]false[/code].
         *  [b]Note:[/b] The optional [param offset] parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.
         */
        static load_resource_pack(pack: string, replace_files: boolean = true, offset: number /*i64*/ = 0): boolean
        /** Saves the configuration to a custom file. The file extension must be [code].godot[/code] (to save in text-based [ConfigFile] format) or [code].binary[/code] (to save in binary format). You can also save [code]override.cfg[/code] file, which is also text, but can be used in exported projects unlike other formats. */
        static save_custom(file: string): GodotError
        static readonly settings_changed: Signal
    }
    // // Singleton Class
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
    /** Internet protocol (IP) support functions such as DNS resolution. */
    class IP extends Object {
        static readonly RESOLVER_MAX_QUERIES = 256
        static readonly RESOLVER_INVALID_ID = -1
        /** Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the [enum Type] constant given as [param ip_type]. */
        static resolve_hostname(host: string, ip_type: IP.Type = 3): string
        /** Resolves a given hostname in a blocking way. Addresses are returned as an [Array] of IPv4 or IPv6 addresses depending on [param ip_type]. */
        static resolve_hostname_addresses(host: string, ip_type: IP.Type = 3): PackedStringArray
        /** Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the [enum Type] constant given as [param ip_type]. Returns the queue ID if successful, or [constant RESOLVER_INVALID_ID] on error. */
        static resolve_hostname_queue_item(host: string, ip_type: IP.Type = 3): number /*i64*/
        /** Returns a queued hostname's status as a [enum ResolverStatus] constant, given its queue [param id]. */
        static get_resolve_item_status(id: number /*i64*/): IP.ResolverStatus
        /** Returns a queued hostname's IP address, given its queue [param id]. Returns an empty string on error or if resolution hasn't happened yet (see [method get_resolve_item_status]). */
        static get_resolve_item_address(id: number /*i64*/): string
        /** Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see [method get_resolve_item_status]). */
        static get_resolve_item_addresses(id: number /*i64*/): Array
        /** Removes a given item [param id] from the queue. This should be used to free a queue after it has completed to enable more queries to happen. */
        static erase_resolve_item(id: number /*i64*/): void
        /** Returns all the user's current IPv4 and IPv6 addresses as an array. */
        static get_local_addresses(): PackedStringArray
        /** Returns all network adapters as an array.
         *  Each adapter is a dictionary of the form:
         *  
         */
        static get_local_interfaces(): Array
        /** Removes all of a [param hostname]'s cached references. If no [param hostname] is given, all cached IP addresses are removed. */
        static clear_cache(hostname: string = ''): void
    }
    // // Singleton Class
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
    /** Provides methods for some common 2D geometric operations. */
    class Geometry2D extends Object {
        /** Returns [code]true[/code] if [param point] is inside the circle or if it's located exactly [i]on[/i] the circle's boundary, otherwise returns [code]false[/code]. */
        static is_point_in_circle(point: Vector2, circle_position: Vector2, circle_radius: number /*f64*/): boolean
        /** Given the 2D segment ([param segment_from], [param segment_to]), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position [param circle_position] and has radius [param circle_radius]. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not). */
        static segment_intersects_circle(segment_from: Vector2, segment_to: Vector2, circle_position: Vector2, circle_radius: number /*f64*/): number /*f64*/
        /** Checks if the two segments ([param from_a], [param to_a]) and ([param from_b], [param to_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns [code]null[/code]. */
        static segment_intersects_segment(from_a: Vector2, to_a: Vector2, from_b: Vector2, to_b: Vector2): any
        /** Checks if the two lines ([param from_a], [param dir_a]) and ([param from_b], [param dir_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns [code]null[/code].
         *  [b]Note:[/b] The lines are specified using direction vectors, not end points.
         */
        static line_intersects_line(from_a: Vector2, dir_a: Vector2, from_b: Vector2, dir_b: Vector2): any
        /** Given the two 2D segments ([param p1], [param q1]) and ([param p2], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector2Array] that contains this point on ([param p1], [param q1]) as well the accompanying point on ([param p2], [param q2]). */
        static get_closest_points_between_segments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array
        /** Returns the 2D point on the 2D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static get_closest_point_to_segment(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        /** Returns the 2D point on the 2D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static get_closest_point_to_segment_uncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        /** Returns if [param point] is inside the triangle specified by [param a], [param b] and [param c]. */
        static point_is_inside_triangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean
        /** Returns [code]true[/code] if [param polygon]'s vertices are ordered in clockwise order, otherwise returns [code]false[/code]. */
        static is_polygon_clockwise(polygon: PackedVector2Array): boolean
        /** Returns [code]true[/code] if [param point] is inside [param polygon] or if it's located exactly [i]on[/i] polygon's boundary, otherwise returns [code]false[/code]. */
        static is_point_in_polygon(point: Vector2, polygon: PackedVector2Array): boolean
        /** Triangulates the polygon specified by the points in [param polygon]. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param polygon] (i.e. the returned array will have [code]n * 3[/code] elements, with [code]n[/code] being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulate_polygon(polygon: PackedVector2Array): PackedInt32Array
        /** Triangulates the area specified by discrete set of [param points] such that no point is inside the circumcircle of any resulting triangle. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param points] (i.e. the returned array will have [code]n * 3[/code] elements, with [code]n[/code] being the number of found triangles). If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulate_delaunay(points: PackedVector2Array): PackedInt32Array
        /** Given an array of [Vector2]s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one. */
        static convex_hull(points: PackedVector2Array): PackedVector2Array
        /** Decomposes the [param polygon] into multiple convex hulls and returns an array of [PackedVector2Array]. */
        static decompose_polygon_in_convex(polygon: PackedVector2Array): Array
        /** Merges (combines) [param polygon_a] and [param polygon_b] and returns an array of merged polygons. This performs [constant OPERATION_UNION] between polygons.
         *  The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling [method is_polygon_clockwise].
         */
        static merge_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        /** Clips [param polygon_a] against [param polygon_b] and returns an array of clipped polygons. This performs [constant OPERATION_DIFFERENCE] between polygons. Returns an empty array if [param polygon_b] completely overlaps [param polygon_a].
         *  If [param polygon_b] is enclosed by [param polygon_a], returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling [method is_polygon_clockwise].
         */
        static clip_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        /** Intersects [param polygon_a] with [param polygon_b] and returns an array of intersected polygons. This performs [constant OPERATION_INTERSECTION] between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
         */
        static intersect_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        /** Mutually excludes common area defined by intersection of [param polygon_a] and [param polygon_b] (see [method intersect_polygons]) and returns an array of excluded polygons. This performs [constant OPERATION_XOR] between polygons. In other words, returns all but common area between polygons.
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
         */
        static exclude_polygons(polygon_a: PackedVector2Array, polygon_b: PackedVector2Array): Array
        /** Clips [param polyline] against [param polygon] and returns an array of clipped polylines. This performs [constant OPERATION_DIFFERENCE] between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape. */
        static clip_polyline_with_polygon(polyline: PackedVector2Array, polygon: PackedVector2Array): Array
        /** Intersects [param polyline] with [param polygon] and returns an array of intersected polylines. This performs [constant OPERATION_INTERSECTION] between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape. */
        static intersect_polyline_with_polygon(polyline: PackedVector2Array, polygon: PackedVector2Array): Array
        /** Inflates or deflates [param polygon] by [param delta] units (pixels). If [param delta] is positive, makes the polygon grow outward. If [param delta] is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if [param delta] is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
         *  [b]Note:[/b] To translate the polygon's vertices specifically, multiply them to a [Transform2D]:
         *  
         */
        static offset_polygon(polygon: PackedVector2Array, delta: number /*f64*/, join_type: Geometry2D.PolyJoinType = 0): Array
        /** Inflates or deflates [param polyline] by [param delta] units (pixels), producing polygons. If [param delta] is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If [param delta] is negative, returns an empty array.
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].
         *  Each polygon's endpoints will be rounded as determined by [param end_type], see [enum PolyEndType].
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
         */
        static offset_polyline(polyline: PackedVector2Array, delta: number /*f64*/, join_type: Geometry2D.PolyJoinType = 0, end_type: Geometry2D.PolyEndType = 3): Array
        /** Given an array of [Vector2]s representing tiles, builds an atlas. The returned dictionary has two keys: [code]points[/code] is a [PackedVector2Array] that specifies the positions of each tile, [code]size[/code] contains the overall size of the whole atlas as [Vector2i]. */
        static make_atlas(sizes: PackedVector2Array): Dictionary
    }
    // // Singleton Class
    /** Provides methods for some common 3D geometric operations. */
    class Geometry3D extends Object {
        /** Calculates and returns all the vertex points of a convex shape defined by an array of [param planes]. */
        static compute_convex_mesh_points(planes: Array): PackedVector3Array
        /** Returns an array with 6 [Plane]s that describe the sides of a box centered at the origin. The box size is defined by [param extents], which represents one (positive) corner of the box (i.e. half its actual size). */
        static build_box_planes(extents: Vector3): Array
        /** Returns an array of [Plane]s closely bounding a faceted cylinder centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the round part of the cylinder. The parameter [param axis] describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z). */
        static build_cylinder_planes(radius: number /*f64*/, height: number /*f64*/, sides: number /*i64*/, axis: Vector3.Axis = 2): Array
        /** Returns an array of [Plane]s closely bounding a faceted capsule centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the side part of the capsule, whereas [param lats] gives the number of latitudinal steps at the bottom and top of the capsule. The parameter [param axis] describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z). */
        static build_capsule_planes(radius: number /*f64*/, height: number /*f64*/, sides: number /*i64*/, lats: number /*i64*/, axis: Vector3.Axis = 2): Array
        /** Given the two 3D segments ([param p1], [param p2]) and ([param q1], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector3Array] that contains this point on ([param p1], [param p2]) as well the accompanying point on ([param q1], [param q2]). */
        static get_closest_points_between_segments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array
        /** Returns the 3D point on the 3D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static get_closest_point_to_segment(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        /** Returns the 3D point on the 3D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static get_closest_point_to_segment_uncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        /** Returns a [Vector3] containing weights based on how close a 3D position ([param point]) is to a triangle's different vertices ([param a], [param b] and [param c]). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.
         *  [url=https://en.wikipedia.org/wiki/Barycentric_coordinate_system]Here is a more detailed explanation of barycentric coordinates.[/url]
         */
        static get_triangle_barycentric_coords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
        /** Tests if the 3D ray starting at [param from] with the direction of [param dir] intersects the triangle specified by [param a], [param b] and [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns [code]null[/code]. */
        static ray_intersects_triangle(from: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        /** Tests if the segment ([param from], [param to]) intersects the triangle [param a], [param b], [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns [code]null[/code]. */
        static segment_intersects_triangle(from: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        /** Checks if the segment ([param from], [param to]) intersects the sphere that is located at [param sphere_position] and has radius [param sphere_radius]. If no, returns an empty [PackedVector3Array]. If yes, returns a [PackedVector3Array] containing the point of intersection and the sphere's normal at the point of intersection. */
        static segment_intersects_sphere(from: Vector3, to: Vector3, sphere_position: Vector3, sphere_radius: number /*f64*/): PackedVector3Array
        /** Checks if the segment ([param from], [param to]) intersects the cylinder with height [param height] that is centered at the origin and has radius [param radius]. If no, returns an empty [PackedVector3Array]. If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection. */
        static segment_intersects_cylinder(from: Vector3, to: Vector3, height: number /*f64*/, radius: number /*f64*/): PackedVector3Array
        /** Given a convex hull defined though the [Plane]s in the array [param planes], tests if the segment ([param from], [param to]) intersects with that hull. If an intersection is found, returns a [PackedVector3Array] containing the point the intersection and the hull's normal. Otherwise, returns an empty array. */
        static segment_intersects_convex(from: Vector3, to: Vector3, planes: Array): PackedVector3Array
        /** Clips the polygon defined by the points in [param points] against the [param plane] and returns the points of the clipped polygon. */
        static clip_polygon(points: PackedVector3Array, plane: Plane): PackedVector3Array
    }
    // // Singleton Class
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
    /** A singleton for loading resource files. */
    class ResourceLoader extends Object {
        /** Loads the resource using threads. If [param use_sub_threads] is [code]true[/code], multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.
         */
        static load_threaded_request(path: string, type_hint: string = '', use_sub_threads: boolean = false, cache_mode: ResourceLoader.CacheMode = 1): GodotError
        /** Returns the status of a threaded loading operation started with [method load_threaded_request] for the resource at [param path]. See [enum ThreadLoadStatus] for possible return values.
         *  An array variable can optionally be passed via [param progress], and will return a one-element array containing the percentage of completion of the threaded loading.
         */
        static load_threaded_get_status(path: string, progress: Array = <any> {} /*compound.type from 28([object Object])*/): ResourceLoader.ThreadLoadStatus
        /** Returns the resource loaded by [method load_threaded_request].
         *  If this is called before the loading thread is done (i.e. [method load_threaded_get_status] is not [constant THREAD_LOAD_LOADED]), the calling thread will be blocked until the resource has finished loading.
         */
        static load_threaded_get(path: string): Resource
        /** Loads a resource at the given [param path], caching the result for further access.
         *  The registered [ResourceFormatLoader]s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.
         *  Returns an empty resource if no [ResourceFormatLoader] could handle the file.
         *  GDScript has a simplified [method @GDScript.load] built-in method which can be used in most situations, leaving the use of [ResourceLoader] for more advanced scenarios.
         *  [b]Note:[/b] If [member ProjectSettings.editor/export/convert_text_resources_to_binary] is [code]true[/code], [method @GDScript.load] will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [member ProjectSettings.editor/export/convert_text_resources_to_binary] to [code]false[/code].
         *  [b]Note:[/b] Relative paths will be prefixed with [code]"res://"[/code] before loading, to avoid unexpected results make sure your paths are absolute.
         */
        static load(path: string, type_hint: string = '', cache_mode: ResourceLoader.CacheMode = 1): Resource
        /** Returns the list of recognized extensions for a resource type. */
        static get_recognized_extensions_for_type(type: string): PackedStringArray
        /** Registers a new [ResourceFormatLoader]. The ResourceLoader will use the ResourceFormatLoader as described in [method load].
         *  This method is performed implicitly for ResourceFormatLoaders written in GDScript (see [ResourceFormatLoader] for more information).
         */
        static add_resource_format_loader(format_loader: ResourceFormatLoader, at_front: boolean = false): void
        /** Unregisters the given [ResourceFormatLoader]. */
        static remove_resource_format_loader(format_loader: ResourceFormatLoader): void
        /** Changes the behavior on missing sub-resources. The default behavior is to abort loading. */
        static set_abort_on_missing_resources(abort: boolean): void
        /** Returns the dependencies for the resource at the given [param path].
         *  [b]Note:[/b] The dependencies are returned with slices separated by [code]::[/code]. You can use [method String.get_slice] to get their components.
         *  
         */
        static get_dependencies(path: string): PackedStringArray
        /** Returns whether a cached resource is available for the given [param path].
         *  Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the [method load] method will use the cached version. The cached resource can be overridden by using [method Resource.take_over_path] on a new resource for that same path.
         */
        static has_cached(path: string): boolean
        /** Returns whether a recognized resource exists for the given [param path].
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].
         */
        static exists(path: string, type_hint: string = ''): boolean
        /** Returns the ID associated with a given resource path, or [code]-1[/code] when no such ID exists. */
        static get_resource_uid(path: string): number /*i64*/
    }
    // // Singleton Class
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
    /** A singleton for saving [Resource]s to the filesystem. */
    class ResourceSaver extends Object {
        /** Saves a resource to disk to the given path, using a [ResourceFormatSaver] that recognizes the resource object. If [param path] is empty, [ResourceSaver] will try to use [member Resource.resource_path].
         *  The [param flags] bitmask can be specified to customize the save behavior using [enum SaverFlags] flags.
         *  Returns [constant OK] on success.
         *  [b]Note:[/b] When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.
         */
        static save(resource: Resource, path: string = '', flags: ResourceSaver.SaverFlags = 0): GodotError
        /** Returns the list of extensions available for saving a resource of a given type. */
        static get_recognized_extensions(type: Resource): PackedStringArray
        /** Registers a new [ResourceFormatSaver]. The ResourceSaver will use the ResourceFormatSaver as described in [method save].
         *  This method is performed implicitly for ResourceFormatSavers written in GDScript (see [ResourceFormatSaver] for more information).
         */
        static add_resource_format_saver(format_saver: ResourceFormatSaver, at_front: boolean = false): void
        /** Unregisters the given [ResourceFormatSaver]. */
        static remove_resource_format_saver(format_saver: ResourceFormatSaver): void
    }
    // // Singleton Class
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
    /** Provides access to common operating system functionalities. */
    class OS extends Object {
        /** Returns an array of MIDI device names.
         *  The returned array will be empty if the system MIDI driver has not previously been initialized with [method open_midi_inputs].
         *  [b]Note:[/b] This method is implemented on Linux, macOS and Windows.
         */
        static get_connected_midi_inputs(): PackedStringArray
        /** Initializes the singleton for the system MIDI driver.
         *  [b]Note:[/b] This method is implemented on Linux, macOS and Windows.
         */
        static open_midi_inputs(): void
        /** Shuts down system MIDI driver.
         *  [b]Note:[/b] This method is implemented on Linux, macOS and Windows.
         */
        static close_midi_inputs(): void
        /** Displays a modal dialog box using the host OS' facilities. Execution is blocked until the dialog is closed. */
        static alert(text: string, title: string = 'Alert!'): void
        /** Crashes the engine (or the editor if called within a [code]@tool[/code] script). This should [i]only[/i] be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [method @GDScript.assert], [method @GlobalScope.push_error] or [method alert]. See also [method kill]. */
        static crash(message: string): void
        static set_low_processor_usage_mode(enable: boolean): void
        static is_in_low_processor_usage_mode(): boolean
        static set_low_processor_usage_mode_sleep_usec(usec: number /*i64*/): void
        static get_low_processor_usage_mode_sleep_usec(): number /*i64*/
        static set_delta_smoothing(delta_smoothing_enabled: boolean): void
        static is_delta_smoothing_enabled(): boolean
        /** Returns the number of [i]logical[/i] CPU cores available on the host machine. On CPUs with HyperThreading enabled, this number will be greater than the number of [i]physical[/i] CPU cores. */
        static get_processor_count(): number /*i64*/
        /** Returns the name of the CPU model on the host machine (e.g. "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz").
         *  [b]Note:[/b] This method is only implemented on Windows, macOS, Linux and iOS. On Android and Web, [method get_processor_name] returns an empty string.
         */
        static get_processor_name(): string
        /** Returns list of font family names available.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static get_system_fonts(): PackedStringArray
        /** Returns path to the system font file with [param font_name] and style. Returns empty string if no matching fonts found.
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".
         *  [b]Note:[/b] Returned font might have different style if the requested style is not available.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static get_system_font_path(font_name: string, weight: number /*i64*/ = 400, stretch: number /*i64*/ = 100, italic: boolean = false): string
        /** Returns an array of the system substitute font file paths, which are similar to the font with [param font_name] and style for the specified text, locale and script. Returns empty array if no matching fonts found.
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".
         *  [b]Note:[/b] Depending on OS, it's not guaranteed that any of the returned fonts will be suitable for rendering specified text. Fonts should be loaded and checked in the order they are returned, and the first suitable one used.
         *  [b]Note:[/b] Returned fonts might have different style if the requested style is not available or belong to a different font family.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static get_system_font_path_for_text(font_name: string, text: string, locale: string = '', script: string = '', weight: number /*i64*/ = 400, stretch: number /*i64*/ = 100, italic: boolean = false): PackedStringArray
        /** Returns the path to the current engine executable.
         *  [b]Note:[/b] On macOS, always use [method create_instance] instead of relying on executable path.
         */
        static get_executable_path(): string
        /** Reads a user input string from the standard input (usually the terminal). This operation is [i]blocking[/i], which causes the window to freeze if [method read_string_from_stdin] is called on the main thread. The thread calling [method read_string_from_stdin] will block until the program receives a line break in standard input (usually by the user pressing [kbd]Enter[/kbd]).
         *  [b]Note:[/b] This method is implemented on Linux, macOS and Windows.
         */
        static read_string_from_stdin(): string
        /** Executes a command. The file specified in [param path] must exist and be executable. Platform path resolution will be used. The [param arguments] are used in the given order, separated by spaces, and wrapped in quotes. If an [param output] [Array] is provided, the complete shell output of the process will be appended as a single [String] element in [param output]. If [param read_stderr] is [code]true[/code], the output to the standard error stream will be included too.
         *  On Windows, if [param open_console] is [code]true[/code] and the process is a console app, a new terminal window will be opened. This is ignored on other platforms.
         *  If the command is successfully executed, the method will return the exit code of the command, or [code]-1[/code] if it fails.
         *  [b]Note:[/b] The Godot thread will pause its execution until the executed command terminates. Use [Thread] to create a separate thread that will not pause the Godot thread, or use [method create_process] to create a completely independent process.
         *  For example, to retrieve a list of the working directory's contents:
         *  
         *  If you wish to access a shell built-in or execute a composite command, a platform-specific shell can be invoked. For example:
         *  
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         *  [b]Note:[/b] To execute a Windows command interpreter built-in command, specify [code]cmd.exe[/code] in [param path], [code]/c[/code] as the first argument, and the desired command as the second argument.
         *  [b]Note:[/b] To execute a PowerShell built-in command, specify [code]powershell.exe[/code] in [param path], [code]-Command[/code] as the first argument, and the desired command as the second argument.
         *  [b]Note:[/b] To execute a Unix shell built-in command, specify shell executable name in [param path], [code]-c[/code] as the first argument, and the desired command as the second argument.
         *  [b]Note:[/b] On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export.
         *  [b]Note:[/b] On Android, system commands such as [code]dumpsys[/code] can only be run on a rooted device.
         */
        static execute(path: string, arguments_: PackedStringArray, output: Array = <any> {} /*compound.type from 28([object Object])*/, read_stderr: boolean = false, open_console: boolean = false): number /*i64*/
        /** Creates a new process that runs independently of Godot. It will not terminate if Godot terminates. The path specified in [param path] must exist and be executable file or macOS .app bundle. Platform path resolution will be used. The [param arguments] are used in the given order and separated by a space.
         *  On Windows, if [param open_console] is [code]true[/code] and the process is a console app, a new terminal window will be opened. This is ignored on other platforms.
         *  If the process creation succeeds, the method will return the new process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process creation fails, the method will return [code]-1[/code].
         *  For example, running another instance of the project:
         *  
         *  See [method execute] if you wish to run an external command and retrieve the results.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         *  [b]Note:[/b] On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.
         */
        static create_process(path: string, arguments_: PackedStringArray, open_console: boolean = false): number /*i64*/
        /** Creates a new instance of Godot that runs independently. The [param arguments] are used in the given order and separated by a space.
         *  If the process creation succeeds, the method will return the new process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process creation fails, the method will return [code]-1[/code].
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static create_instance(arguments_: PackedStringArray): number /*i64*/
        /** Kill (terminate) the process identified by the given process ID ([param pid]), e.g. the one returned by [method execute] in non-blocking mode. See also [method crash].
         *  [b]Note:[/b] This method can also be used to kill processes that were not spawned by the game.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static kill(pid: number /*i64*/): GodotError
        /** Requests the OS to open a resource with the most appropriate program. For example:
         *  - [code]OS.shell_open("C:\\Users\name\Downloads")[/code] on Windows opens the file explorer at the user's Downloads folder.
         *  - [code]OS.shell_open("https://godotengine.org")[/code] opens the default web browser on the official Godot website.
         *  - [code]OS.shell_open("mailto:example@example.com")[/code] opens the default email client with the "To" field set to [code]example@example.com[/code]. See [url=https://datatracker.ietf.org/doc/html/rfc2368]RFC 2368 - The [code]mailto[/code] URL scheme[/url] for a list of fields that can be added.
         *  Use [method ProjectSettings.globalize_path] to convert a [code]res://[/code] or [code]user://[/code] path into a system path for use with this method.
         *  [b]Note:[/b] Use [method String.uri_encode] to encode characters within URLs in a URL-safe, portable way. This is especially required for line breaks. Otherwise, [method shell_open] may not work correctly in a project exported to the Web platform.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux, macOS and Windows.
         */
        static shell_open(uri: string): GodotError
        /** Requests the OS to open the file manager, then navigate to the given [param file_or_dir_path] and select the target file or folder.
         *  If [param file_or_dir_path] is a valid directory path, and [param open_folder] is [code]true[/code], the method will open the file manager and enter the target folder without selecting anything.
         *  Use [method ProjectSettings.globalize_path] to convert a [code]res://[/code] or [code]user://[/code] path into a system path for use with this method.
         *  [b]Note:[/b] Currently this method is only implemented on Windows and macOS. On other platforms, it will fallback to [method shell_open] with a directory path of [param file_or_dir_path] with prefix [code]file://[/code].
         */
        static shell_show_in_file_manager(file_or_dir_path: string, open_folder: boolean = true): GodotError
        /** Returns [code]true[/code] if the child process ID ([param pid]) is still running or [code]false[/code] if it has terminated.
         *  Must be a valid ID generated from [method create_process].
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static is_process_running(pid: number /*i64*/): boolean
        /** Returns the project's process ID.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Linux, macOS and Windows.
         */
        static get_process_id(): number /*i64*/
        /** Returns [code]true[/code] if the environment variable with the name [param variable] exists.
         *  [b]Note:[/b] Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.
         */
        static has_environment(variable: string): boolean
        /** Returns the value of an environment variable. Returns an empty string if the environment variable doesn't exist.
         *  [b]Note:[/b] Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.
         */
        static get_environment(variable: string): string
        /** Sets the value of the environment variable [param variable] to [param value]. The environment variable will be set for the Godot process and any process executed with [method execute] after running [method set_environment]. The environment variable will [i]not[/i] persist to processes run after the Godot process was terminated.
         *  [b]Note:[/b] Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the [code]=[/code] character. On Windows, there is a 32767 characters limit for the combined length of [param variable], [param value], and the [code]=[/code] and null terminator characters that will be registered in the environment block.
         */
        static set_environment(variable: string, value: string): void
        /** Removes the environment [param variable] from the current environment, if it exists. The environment variable will be removed for the Godot process and any process executed with [method execute] after running [method unset_environment]. The removal of the environment variable will [i]not[/i] persist to processes run after the Godot process was terminated.
         *  [b]Note:[/b] Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the [code]=[/code] character.
         */
        static unset_environment(variable: string): void
        /** Returns the name of the host OS.
         *  On Windows, this is [code]"Windows"[/code].
         *  On macOS, this is [code]"macOS"[/code].
         *  On Linux-based operating systems, this is [code]"Linux"[/code].
         *  On BSD-based operating systems, this is [code]"FreeBSD"[/code], [code]"NetBSD"[/code], [code]"OpenBSD"[/code], or [code]"BSD"[/code] as a fallback.
         *  On Android, this is [code]"Android"[/code].
         *  On iOS, this is [code]"iOS"[/code].
         *  On the web, this is [code]"Web"[/code].
         *  [b]Note:[/b] Custom builds of the engine may support additional platforms, such as consoles, yielding other return values.
         *  
         */
        static get_name(): string
        /** Returns the name of the distribution for Linux and BSD platforms (e.g. Ubuntu, Manjaro, OpenBSD, etc.).
         *  Returns the same value as [method get_name] for stock Android ROMs, but attempts to return the custom ROM name for popular Android derivatives such as LineageOS.
         *  Returns the same value as [method get_name] for other platforms.
         *  [b]Note:[/b] This method is not supported on the web platform. It returns an empty string.
         */
        static get_distribution_name(): string
        /** Returns the exact production and build version of the operating system. This is different from the branded version used in marketing. This helps to distinguish between different releases of operating systems, including minor versions, and insider and custom builds.
         *  For Windows, the major and minor version are returned, as well as the build number. For example, the returned string can look like [code]10.0.9926[/code] for a build of Windows 10, and it can look like [code]6.1.7601[/code] for a build of Windows 7 SP1.
         *  For rolling distributions, such as Arch Linux, an empty string is returned.
         *  For macOS and iOS, the major and minor version are returned, as well as the patch number.
         *  For Android, the SDK version and the incremental build number are returned. If it's a custom ROM, it attempts to return its version instead.
         *  [b]Note:[/b] This method is not supported on the web platform. It returns an empty string.
         */
        static get_version(): string
        /** Returns the command-line arguments passed to the engine.
         *  Command-line arguments can be written in any form, including both [code]--key value[/code] and [code]--key=value[/code] forms so they can be properly parsed, as long as custom command-line arguments do not conflict with engine arguments.
         *  You can also incorporate environment variables using the [method get_environment] method.
         *  You can set [member ProjectSettings.editor/run/main_run_args] to define command-line arguments to be passed by the editor when running the project.
         *  Here's a minimal example on how to parse command-line arguments into a dictionary using the [code]--key=value[/code] form for arguments:
         *  
         *  [b]Note:[/b] Passing custom user arguments directly is not recommended, as the engine may discard or modify them. Instead, the best way is to use the standard UNIX double dash ([code]--[/code]) and then pass custom arguments, which the engine itself will ignore. These can be read via [method get_cmdline_user_args].
         */
        static get_cmdline_args(): PackedStringArray
        /** Similar to [method get_cmdline_args], but this returns the user arguments (any argument passed after the double dash [code]--[/code] or double plus [code]++[/code] argument). These are left untouched by Godot for the user. [code]++[/code] can be used in situations where [code]--[/code] is intercepted by another program (such as [code]startx[/code]).
         *  For example, in the command line below, [code]--fullscreen[/code] will not be returned in [method get_cmdline_user_args] and [code]--level 1[/code] will only be returned in [method get_cmdline_user_args]:
         *  
         */
        static get_cmdline_user_args(): PackedStringArray
        /** Returns the video adapter driver name and version for the user's currently active graphics card. See also [method RenderingServer.get_video_adapter_api_version].
         *  The first element holds the driver name, such as [code]nvidia[/code], [code]amdgpu[/code], etc.
         *  The second element holds the driver version. For e.g. the [code]nvidia[/code] driver on a Linux/BSD platform, the version is in the format [code]510.85.02[/code]. For Windows, the driver's format is [code]31.0.15.1659[/code].
         *  [b]Note:[/b] This method is only supported on the platforms Linux/BSD and Windows when not running in headless mode. It returns an empty array on other platforms.
         */
        static get_video_adapter_driver_info(): PackedStringArray
        /** If [param restart] is [code]true[/code], restarts the project automatically when it is exited with [method SceneTree.quit] or [constant Node.NOTIFICATION_WM_CLOSE_REQUEST]. Command line [param arguments] can be supplied. To restart the project with the same command line arguments as originally used to run the project, pass [method get_cmdline_args] as the value for [param arguments].
         *  [method set_restart_on_exit] can be used to apply setting changes that require a restart. See also [method is_restart_on_exit_set] and [method get_restart_on_exit_arguments].
         *  [b]Note:[/b] This method is only effective on desktop platforms, and only when the project isn't started from the editor. It will have no effect on mobile and Web platforms, or when the project is started from the editor.
         *  [b]Note:[/b] If the project process crashes or is [i]killed[/i] by the user (by sending [code]SIGKILL[/code] instead of the usual [code]SIGTERM[/code]), the project won't restart automatically.
         */
        static set_restart_on_exit(restart: boolean, arguments_: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/): void
        /** Returns [code]true[/code] if the project will automatically restart when it exits for any reason, [code]false[/code] otherwise. See also [method set_restart_on_exit] and [method get_restart_on_exit_arguments]. */
        static is_restart_on_exit_set(): boolean
        /** Returns the list of command line arguments that will be used when the project automatically restarts using [method set_restart_on_exit]. See also [method is_restart_on_exit_set]. */
        static get_restart_on_exit_arguments(): PackedStringArray
        /** Delays execution of the current thread by [param usec] microseconds. [param usec] must be greater than or equal to [code]0[/code]. Otherwise, [method delay_usec] will do nothing and will print an error message.
         *  [b]Note:[/b] [method delay_usec] is a [i]blocking[/i] way to delay code execution. To delay code execution in a non-blocking way, see [method SceneTree.create_timer]. Awaiting with [method SceneTree.create_timer] will delay the execution of code placed below the [code]await[/code] without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).
         *  [b]Note:[/b] When [method delay_usec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_usec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).
         */
        static delay_usec(usec: number /*i64*/): void
        /** Delays execution of the current thread by [param msec] milliseconds. [param msec] must be greater than or equal to [code]0[/code]. Otherwise, [method delay_msec] will do nothing and will print an error message.
         *  [b]Note:[/b] [method delay_msec] is a [i]blocking[/i] way to delay code execution. To delay code execution in a non-blocking way, see [method SceneTree.create_timer]. Awaiting with [method SceneTree.create_timer] will delay the execution of code placed below the [code]await[/code] without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).
         *  [b]Note:[/b] When [method delay_msec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_msec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).
         */
        static delay_msec(msec: number /*i64*/): void
        /** Returns the host OS locale as a string of the form [code]language_Script_COUNTRY_VARIANT@extra[/code]. If you want only the language code and not the fully specified locale from the OS, you can use [method get_locale_language].
         *  [code]language[/code] - 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url], in lower case.
         *  [code skip-lint]Script[/code] - optional, 4-letter [url=https://en.wikipedia.org/wiki/ISO_15924]script code[/url], in title case.
         *  [code]COUNTRY[/code] - optional, 2 or 3-letter [url=https://en.wikipedia.org/wiki/ISO_3166-1]country code[/url], in upper case.
         *  [code]VARIANT[/code] - optional, language variant, region and sort order. Variant can have any number of underscored keywords.
         *  [code]extra[/code] - optional, semicolon separated list of additional key words. Currency, calendar, sort order and numbering system information.
         */
        static get_locale(): string
        /** Returns the host OS locale's 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url] as a string which should be consistent on all platforms. This is equivalent to extracting the [code]language[/code] part of the [method get_locale] string.
         *  This can be used to narrow down fully specified locale strings to only the "common" language code, when you don't need the additional information about country code or variants. For example, for a French Canadian user with [code]fr_CA[/code] locale, this would return [code]fr[/code].
         */
        static get_locale_language(): string
        /** Returns the model name of the current device.
         *  [b]Note:[/b] This method is implemented on Android and iOS. Returns [code]"GenericDevice"[/code] on unsupported platforms.
         */
        static get_model_name(): string
        /** If [code]true[/code], the [code]user://[/code] file system is persistent, so that its state is the same after a player quits and starts the game again. Relevant to the Web platform, where this persistence may be unavailable. */
        static is_userfs_persistent(): boolean
        /** Returns [code]true[/code] if the engine was executed with the [code]--verbose[/code] or [code]-v[/code] command line argument, or if [member ProjectSettings.debug/settings/stdout/verbose_stdout] is [code]true[/code]. See also [method @GlobalScope.print_verbose]. */
        static is_stdout_verbose(): boolean
        /** Returns [code]true[/code] if the Godot binary used to run the project is a [i]debug[/i] export template, or when running in the editor.
         *  Returns [code]false[/code] if the Godot binary used to run the project is a [i]release[/i] export template.
         *  To check whether the Godot binary used to run the project is an export template (debug or release), use [code]OS.has_feature("template")[/code] instead.
         */
        static is_debug_build(): boolean
        /** Returns the amount of static memory being used by the program in bytes (only works in debug). */
        static get_static_memory_usage(): number /*i64*/
        /** Returns the maximum amount of static memory used (only works in debug). */
        static get_static_memory_peak_usage(): number /*i64*/
        /** Returns the [Dictionary] with the following keys:
         *  [code]"physical"[/code] - total amount of usable physical memory, in bytes or [code]-1[/code] if unknown. This value can be slightly less than the actual physical memory amount, since it does not include memory reserved by kernel and devices.
         *  [code]"free"[/code] - amount of physical memory, that can be immediately allocated without disk access or other costly operation, in bytes or [code]-1[/code] if unknown. The process might be able to allocate more physical memory, but such allocation will require moving inactive pages to disk and can take some time.
         *  [code]"available"[/code] - amount of memory, that can be allocated without extending the swap file(s), in bytes or [code]-1[/code] if unknown. This value include both physical memory and swap.
         *  [code]"stack"[/code] - size of the current thread stack, in bytes or [code]-1[/code] if unknown.
         */
        static get_memory_info(): Dictionary
        /** Moves the file or directory to the system's recycle bin. See also [method DirAccess.remove].
         *  The method takes only global paths, so you may need to use [method ProjectSettings.globalize_path]. Do not use it for files in [code]res://[/code] as it will not work in exported projects.
         *  [b]Note:[/b] If the user has disabled the recycle bin on their system, the file will be permanently deleted instead.
         *  
         */
        static move_to_trash(path: string): GodotError
        /** Returns the absolute directory path where user data is written ([code]user://[/code]).
         *  On Windows, this is [code]%AppData%\Godot\app_userdata\[project_name][/code], or [code]%AppData%\[custom_name][/code] if [code]use_custom_user_dir[/code] is set. [code]%AppData%[/code] expands to [code]%UserProfile%\AppData\Roaming[/code].
         *  On macOS, this is [code]~/Library/Application Support/Godot/app_userdata/[project_name][/code], or [code]~/Library/Application Support/[custom_name][/code] if [code]use_custom_user_dir[/code] is set.
         *  On Linux and BSD, this is [code]~/.local/share/godot/app_userdata/[project_name][/code], or [code]~/.local/share/[custom_name][/code] if [code]use_custom_user_dir[/code] is set.
         *  On Android and iOS, this is a sandboxed directory in either internal or external storage, depending on the user's configuration.
         *  On the web, this is a virtual directory managed by the browser.
         *  If the project name is empty, [code][project_name][/code] falls back to [code][unnamed project][/code].
         *  Not to be confused with [method get_data_dir], which returns the [i]global[/i] (non-project-specific) user home directory.
         */
        static get_user_data_dir(): string
        /** Returns the actual path to commonly used folders across different platforms. Available locations are specified in [enum SystemDir].
         *  [b]Note:[/b] This method is implemented on Android, Linux, macOS and Windows.
         *  [b]Note:[/b] Shared storage is implemented on Android and allows to differentiate between app specific and shared directories. Shared directories have additional restrictions on Android.
         */
        static get_system_dir(dir: OS.SystemDir, shared_storage: boolean = true): string
        /** Returns the [i]global[/i] user configuration directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the [code]XDG_CONFIG_HOME[/code] environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_data_dir].
         *  Not to be confused with [method get_user_data_dir], which returns the [i]project-specific[/i] user data path.
         */
        static get_config_dir(): string
        /** Returns the [i]global[/i] user data directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the [code]XDG_DATA_HOME[/code] environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_config_dir].
         *  Not to be confused with [method get_user_data_dir], which returns the [i]project-specific[/i] user data path.
         */
        static get_data_dir(): string
        /** Returns the [i]global[/i] cache data directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the [code]XDG_CACHE_HOME[/code] environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_config_dir] and [method get_data_dir].
         *  Not to be confused with [method get_user_data_dir], which returns the [i]project-specific[/i] user data path.
         */
        static get_cache_dir(): string
        /** Returns a string that is unique to the device.
         *  [b]Note:[/b] This string may change without notice if the user reinstalls/upgrades their operating system or changes their hardware. This means it should generally not be used to encrypt persistent data as the data saved before an unexpected ID change would become inaccessible. The returned string may also be falsified using external programs, so do not rely on the string returned by [method get_unique_id] for security purposes.
         *  [b]Note:[/b] Returns an empty string and prints an error on Web, as this method cannot be implemented on this platform.
         */
        static get_unique_id(): string
        /** Returns the given keycode as a string (e.g. Return values: [code]"Escape"[/code], [code]"Shift+Escape"[/code]).
         *  See also [member InputEventKey.keycode] and [method InputEventKey.get_keycode_with_modifiers].
         */
        static get_keycode_string(code: Key): string
        /** Returns [code]true[/code] if the input keycode corresponds to a Unicode character. */
        static is_keycode_unicode(code: number /*i64*/): boolean
        /** Returns the keycode of the given string (e.g. "Escape"). */
        static find_keycode_from_string(string_: string): Key
        /** Enables backup saves if [param enabled] is [code]true[/code]. */
        static set_use_file_access_save_and_swap(enabled: boolean): void
        /** Sets the name of the current thread. */
        static set_thread_name(name: string): GodotError
        /** Returns the ID of the current thread. This can be used in logs to ease debugging of multi-threaded applications.
         *  [b]Note:[/b] Thread IDs are not deterministic and may be reused across application restarts.
         */
        static get_thread_caller_id(): number /*i64*/
        /** Returns the ID of the main thread. See [method get_thread_caller_id].
         *  [b]Note:[/b] Thread IDs are not deterministic and may be reused across application restarts.
         */
        static get_main_thread_id(): number /*i64*/
        /** Returns [code]true[/code] if the feature for the given feature tag is supported in the currently running instance, depending on the platform, build, etc. Can be used to check whether you're currently running a debug build, on a certain platform or arch, etc. Refer to the [url=$DOCS_URL/tutorials/export/feature_tags.html]Feature Tags[/url] documentation for more details.
         *  [b]Note:[/b] Tag names are case-sensitive.
         *  [b]Note:[/b] On the web platform, one of the following additional tags is defined to indicate host platform: [code]web_android[/code], [code]web_ios[/code], [code]web_linuxbsd[/code], [code]web_macos[/code], or [code]web_windows[/code].
         *  [b]Note:[/b] On the iOS simulator, the additional [code]simulator[/code] tag is defined.
         */
        static has_feature(tag_name: string): boolean
        /** Returns [code]true[/code] if application is running in the sandbox.
         *  [b]Note:[/b] This method is implemented on macOS and Linux.
         */
        static is_sandboxed(): boolean
        /** At the moment this function is only used by [code]AudioDriverOpenSL[/code] to request permission for [code]RECORD_AUDIO[/code] on Android. */
        static request_permission(name: string): boolean
        /** With this function, you can request dangerous permissions since normal permissions are automatically granted at install time in Android applications.
         *  [b]Note:[/b] This method is implemented only on Android.
         */
        static request_permissions(): boolean
        /** On Android devices: With this function, you can get the list of dangerous permissions that have been granted.
         *  On macOS (sandboxed applications only): This function returns the list of user selected folders accessible to the application. Use native file dialog to request folder access permission.
         */
        static get_granted_permissions(): PackedStringArray
        /** On macOS (sandboxed applications only), this function clears list of user selected folders accessible to the application. */
        static revoke_granted_permissions(): void
        /** If [code]true[/code], the engine optimizes for low processor usage by only refreshing the screen if needed. Can improve battery consumption on mobile. */
        low_processor_usage_mode: boolean
        /** The amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU usage. */
        low_processor_usage_mode_sleep_usec: number /*i64*/
        /** If [code]true[/code], the engine filters the time delta measured between each frame, and attempts to compensate for random variation. This will only operate on systems where V-Sync is active. */
        delta_smoothing: boolean
    }
    // // Singleton Class
    /** Provides access to engine properties. */
    class Engine extends Object {
        static set_physics_ticks_per_second(physics_ticks_per_second: number /*i64*/): void
        static get_physics_ticks_per_second(): number /*i64*/
        static set_max_physics_steps_per_frame(max_physics_steps: number /*i64*/): void
        static get_max_physics_steps_per_frame(): number /*i64*/
        static set_physics_jitter_fix(physics_jitter_fix: number /*f64*/): void
        static get_physics_jitter_fix(): number /*f64*/
        /** Returns the fraction through the current physics tick we are at the time of rendering the frame. This can be used to implement fixed timestep interpolation. */
        static get_physics_interpolation_fraction(): number /*f64*/
        static set_max_fps(max_fps: number /*i64*/): void
        static get_max_fps(): number /*i64*/
        static set_time_scale(time_scale: number /*f64*/): void
        static get_time_scale(): number /*f64*/
        /** Returns the total number of frames drawn. On headless platforms, or if the render loop is disabled with [code]--disable-render-loop[/code] via command line, [method get_frames_drawn] always returns [code]0[/code]. See [method get_process_frames]. */
        static get_frames_drawn(): number /*i64*/
        /** Returns the frames per second of the running game. */
        static get_frames_per_second(): number /*f64*/
        /** Returns the total number of frames passed since engine initialization which is advanced on each [b]physics frame[/b]. See also [method get_process_frames].
         *  [method get_physics_frames] can be used to run expensive logic less often without relying on a [Timer]:
         *  
         */
        static get_physics_frames(): number /*i64*/
        /** Returns the total number of frames passed since engine initialization which is advanced on each [b]process frame[/b], regardless of whether the render loop is enabled. See also [method get_frames_drawn] and [method get_physics_frames].
         *  [method get_process_frames] can be used to run expensive logic less often without relying on a [Timer]:
         *  
         */
        static get_process_frames(): number /*i64*/
        /** Returns the main loop object (see [MainLoop] and [SceneTree]). */
        static get_main_loop(): MainLoop
        /** Returns the current engine version information in a Dictionary.
         *  [code]major[/code]    - Holds the major version number as an int
         *  [code]minor[/code]    - Holds the minor version number as an int
         *  [code]patch[/code]    - Holds the patch version number as an int
         *  [code]hex[/code]      - Holds the full version number encoded as a hexadecimal int with one byte (2 places) per number (see example below)
         *  [code]status[/code]   - Holds the status (e.g. "beta", "rc1", "rc2", ... "stable") as a String
         *  [code]build[/code]    - Holds the build name (e.g. "custom_build") as a String
         *  [code]hash[/code]     - Holds the full Git commit hash as a String
         *  [code]year[/code]     - Holds the year the version was released in as an int
         *  [code]string[/code]   - [code]major[/code] + [code]minor[/code] + [code]patch[/code] + [code]status[/code] + [code]build[/code] in a single String
         *  The [code]hex[/code] value is encoded as follows, from left to right: one byte for the major, one byte for the minor, one byte for the patch version. For example, "3.1.12" would be [code]0x03010C[/code]. [b]Note:[/b] It's still an int internally, and printing it will give you its decimal representation, which is not particularly meaningful. Use hexadecimal literals for easy version comparisons from code:
         *  
         */
        static get_version_info(): Dictionary
        /** Returns engine author information in a Dictionary.
         *  [code]lead_developers[/code]    - Array of Strings, lead developer names
         *  [code]founders[/code]           - Array of Strings, founder names
         *  [code]project_managers[/code]   - Array of Strings, project manager names
         *  [code]developers[/code]         - Array of Strings, developer names
         */
        static get_author_info(): Dictionary
        /** Returns an Array of copyright information Dictionaries.
         *  [code]name[/code]    - String, component name
         *  [code]parts[/code]   - Array of Dictionaries {[code]files[/code], [code]copyright[/code], [code]license[/code]} describing subsections of the component
         */
        static get_copyright_info(): Array
        /** Returns a Dictionary of Arrays of donor names.
         *  {[code]platinum_sponsors[/code], [code]gold_sponsors[/code], [code]silver_sponsors[/code], [code]bronze_sponsors[/code], [code]mini_sponsors[/code], [code]gold_donors[/code], [code]silver_donors[/code], [code]bronze_donors[/code]}
         */
        static get_donor_info(): Dictionary
        /** Returns Dictionary of licenses used by Godot and included third party components. */
        static get_license_info(): Dictionary
        /** Returns Godot license text. */
        static get_license_text(): string
        /** Returns the name of the CPU architecture the Godot binary was built for. Possible return values are [code]x86_64[/code], [code]x86_32[/code], [code]arm64[/code], [code]arm32[/code], [code]rv64[/code], [code]riscv[/code], [code]ppc64[/code], [code]ppc[/code], [code]wasm64[/code] and [code]wasm32[/code].
         *  To detect whether the current CPU architecture is 64-bit, you can use the fact that all 64-bit architecture names have [code]64[/code] in their name:
         *  
         *  [b]Note:[/b] [method get_architecture_name] does [i]not[/i] return the name of the host CPU architecture. For example, if running an x86_32 Godot binary on a x86_64 system, the returned value will be [code]x86_32[/code].
         */
        static get_architecture_name(): string
        /** Returns [code]true[/code] if the game is inside the fixed process and physics phase of the game loop. */
        static is_in_physics_frame(): boolean
        /** Returns [code]true[/code] if a singleton with given [param name] exists in global scope. */
        static has_singleton(name: StringName): boolean
        /** Returns a global singleton with given [param name]. Often used for plugins, e.g. GodotPayments. */
        static get_singleton(name: StringName): Object
        /** Registers the given object as a singleton, globally available under [param name]. */
        static register_singleton(name: StringName, instance: Object): void
        /** Unregisters the singleton registered under [param name]. The singleton object is not freed. Only works with user-defined singletons created with [method register_singleton]. */
        static unregister_singleton(name: StringName): void
        /** Returns a list of available global singletons. */
        static get_singleton_list(): PackedStringArray
        /** Registers a [ScriptLanguage] instance to be available with [code]ScriptServer[/code].
         *  Returns:
         *  - [constant OK] on success
         *  - [constant ERR_UNAVAILABLE] if [code]ScriptServer[/code] has reached it limit and cannot register any new language
         *  - [constant ERR_ALREADY_EXISTS] if [code]ScriptServer[/code] already contains a language with similar extension/name/type
         */
        static register_script_language(language: ScriptLanguage): GodotError
        /** Unregisters the [ScriptLanguage] instance from [code]ScriptServer[/code].
         *  Returns:
         *  - [constant OK] on success
         *  - [constant ERR_DOES_NOT_EXIST] if the language is already not registered in [code]ScriptServer[/code]
         */
        static unregister_script_language(language: ScriptLanguage): GodotError
        /** Returns the number of available script languages. Use with [method get_script_language]. */
        static get_script_language_count(): number /*i64*/
        /** Returns an instance of a [ScriptLanguage] with the given index. */
        static get_script_language(index: number /*i64*/): ScriptLanguage
        /** Returns [code]true[/code] if the script is currently running inside the editor, [code]false[/code] otherwise. This is useful for [code]@tool[/code] scripts to conditionally draw editor helpers, or prevent accidentally running "game" code that would affect the scene state while in the editor:
         *  
         *  See [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]Running code in the editor[/url] in the documentation for more information.
         *  [b]Note:[/b] To detect whether the script is run from an editor [i]build[/i] (e.g. when pressing [kbd]F5[/kbd]), use [method OS.has_feature] with the [code]"editor"[/code] argument instead. [code]OS.has_feature("editor")[/code] will evaluate to [code]true[/code] both when the code is running in the editor and when running the project from the editor, but it will evaluate to [code]false[/code] when the code is run from an exported project.
         */
        static is_editor_hint(): boolean
        /** Returns the path to the [MovieWriter]'s output file, or an empty string if the engine wasn't started in Movie Maker mode. This path can be absolute or relative depending on how the user specified it. */
        static get_write_movie_path(): string
        static set_print_error_messages(enabled: boolean): void
        static is_printing_error_messages(): boolean
        /** If [code]false[/code], stops printing error and warning messages to the console and editor Output log. This can be used to hide error and warning messages during unit test suite runs. This property is equivalent to the [member ProjectSettings.application/run/disable_stderr] project setting.
         *  [b]Warning:[/b] If you set this to [code]false[/code] anywhere in the project, important error messages may be hidden even if they are emitted from other scripts. If this is set to [code]false[/code] in a [code]@tool[/code] script, this will also impact the editor itself. Do [i]not[/i] report bugs before ensuring error messages are enabled (as they are by default).
         *  [b]Note:[/b] This property does not impact the editor's Errors tab when running a project from the editor.
         */
        print_error_messages: boolean
        /** The number of fixed iterations per second. This controls how often physics simulation and [method Node._physics_process] methods are run. This value should generally always be set to [code]60[/code] or above, as Godot doesn't interpolate the physics step. As a result, values lower than [code]60[/code] will look stuttery. This value can be increased to make input more reactive or work around collision tunneling issues, but keep in mind doing so will increase CPU usage. See also [member max_fps] and [member ProjectSettings.physics/common/physics_ticks_per_second].
         *  [b]Note:[/b] Only [member max_physics_steps_per_frame] physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if [code]delta[/code] is used consistently in physics calculations). Therefore, it is recommended to also increase [member max_physics_steps_per_frame] if increasing [member physics_ticks_per_second] significantly above its default value.
         */
        physics_ticks_per_second: number /*i64*/
        /** Controls the maximum number of physics steps that can be simulated each rendered frame. The default value is tuned to avoid "spiral of death" situations where expensive physics simulations trigger more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than [code]1 / max_physics_steps_per_frame[/code] of [member physics_ticks_per_second]. This occurs even if [code]delta[/code] is consistently used in physics calculations. To avoid this, increase [member max_physics_steps_per_frame] if you have increased [member physics_ticks_per_second] significantly above its default value. */
        max_physics_steps_per_frame: number /*i64*/
        /** The maximum number of frames per second that can be rendered. A value of [code]0[/code] means "no limit". The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project logic and rendering.
         *  Limiting the FPS can be useful to reduce system power consumption, which reduces heat and noise emissions (and improves battery life on mobile devices).
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is [code]Enabled[/code] or [code]Adaptive[/code], it takes precedence and the forced FPS number cannot exceed the monitor's refresh rate.
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is [code]Enabled[/code], on monitors with variable refresh rate enabled (G-Sync/FreeSync), using a FPS limit a few frames lower than the monitor's refresh rate will [url=https://blurbusters.com/howto-low-lag-vsync-on/]reduce input lag while avoiding tearing[/url].
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is [code]Disabled[/code], limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.
         *  See also [member physics_ticks_per_second] and [member ProjectSettings.application/run/max_fps].
         */
        max_fps: number /*i64*/
        /** Controls how fast or slow the in-game clock ticks versus the real life one. It defaults to 1.0. A value of 2.0 means the game moves twice as fast as real life, whilst a value of 0.5 means the game moves at half the regular speed. This also affects [Timer] and [SceneTreeTimer] (see [method SceneTree.create_timer] for how to control this). */
        time_scale: number /*f64*/
        /** Controls how much physics ticks are synchronized with real time. For 0 or less, the ticks are synchronized. Such values are recommended for network games, where clock synchronization matters. Higher values cause higher deviation of the in-game clock and real clock but smooth out framerate jitters. The default value of 0.5 should be good enough for most; values above 2 could cause the game to react to dropped frames with a noticeable delay and are not recommended.
         *  [b]Note:[/b] For best results, when using a custom physics interpolation solution, the physics jitter fix should be disabled by setting [member physics_jitter_fix] to [code]0[/code].
         */
        physics_jitter_fix: number /*f64*/
    }
    // // Singleton Class
    /** A class information repository. */
    class ClassDB extends Object {
        /** Returns the names of all the classes available. */
        static get_class_list(): PackedStringArray
        /** Returns the names of all the classes that directly or indirectly inherit from [param class]. */
        static get_inheriters_from_class(class_: StringName): PackedStringArray
        /** Returns the parent class of [param class]. */
        static get_parent_class(class_: StringName): StringName
        /** Returns whether the specified [param class] is available or not. */
        static class_exists(class_: StringName): boolean
        /** Returns whether [param inherits] is an ancestor of [param class] or not. */
        static is_parent_class(class_: StringName, inherits: StringName): boolean
        /** Returns [code]true[/code] if objects can be instantiated from the specified [param class], otherwise returns [code]false[/code]. */
        static can_instantiate(class_: StringName): boolean
        /** Creates an instance of [param class]. */
        static instantiate(class_: StringName): any
        /** Returns whether [param class] or its ancestry has a signal called [param signal] or not. */
        static class_has_signal(class_: StringName, signal: StringName): boolean
        /** Returns the [param signal] data of [param class] or its ancestry. The returned value is a [Dictionary] with the following keys: [code]args[/code], [code]default_args[/code], [code]flags[/code], [code]id[/code], [code]name[/code], [code]return: (class_name, hint, hint_string, name, type, usage)[/code]. */
        static class_get_signal(class_: StringName, signal: StringName): Dictionary
        /** Returns an array with all the signals of [param class] or its ancestry if [param no_inheritance] is [code]false[/code]. Every element of the array is a [Dictionary] as described in [method class_get_signal]. */
        static class_get_signal_list(class_: StringName, no_inheritance: boolean = false): Array
        /** Returns an array with all the properties of [param class] or its ancestry if [param no_inheritance] is [code]false[/code]. */
        static class_get_property_list(class_: StringName, no_inheritance: boolean = false): Array
        /** Returns the value of [param property] of [param object] or its ancestry. */
        static class_get_property(object: Object, property: StringName): any
        /** Sets [param property] value of [param object] to [param value]. */
        static class_set_property(object: Object, property: StringName, value: any): GodotError
        /** Returns whether [param class] (or its ancestry if [param no_inheritance] is [code]false[/code]) has a method called [param method] or not. */
        static class_has_method(class_: StringName, method: StringName, no_inheritance: boolean = false): boolean
        /** Returns an array with all the methods of [param class] or its ancestry if [param no_inheritance] is [code]false[/code]. Every element of the array is a [Dictionary] with the following keys: [code]args[/code], [code]default_args[/code], [code]flags[/code], [code]id[/code], [code]name[/code], [code]return: (class_name, hint, hint_string, name, type, usage)[/code].
         *  [b]Note:[/b] In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.
         */
        static class_get_method_list(class_: StringName, no_inheritance: boolean = false): Array
        /** Returns an array with the names all the integer constants of [param class] or its ancestry. */
        static class_get_integer_constant_list(class_: StringName, no_inheritance: boolean = false): PackedStringArray
        /** Returns whether [param class] or its ancestry has an integer constant called [param name] or not. */
        static class_has_integer_constant(class_: StringName, name: StringName): boolean
        /** Returns the value of the integer constant [param name] of [param class] or its ancestry. Always returns 0 when the constant could not be found. */
        static class_get_integer_constant(class_: StringName, name: StringName): number /*i64*/
        /** Returns whether [param class] or its ancestry has an enum called [param name] or not. */
        static class_has_enum(class_: StringName, name: StringName, no_inheritance: boolean = false): boolean
        /** Returns an array with all the enums of [param class] or its ancestry. */
        static class_get_enum_list(class_: StringName, no_inheritance: boolean = false): PackedStringArray
        /** Returns an array with all the keys in [param enum] of [param class] or its ancestry. */
        static class_get_enum_constants(class_: StringName, enum_: StringName, no_inheritance: boolean = false): PackedStringArray
        /** Returns which enum the integer constant [param name] of [param class] or its ancestry belongs to. */
        static class_get_integer_constant_enum(class_: StringName, name: StringName, no_inheritance: boolean = false): StringName
        /** Returns whether this [param class] is enabled or not. */
        static is_class_enabled(class_: StringName): boolean
    }
    // // Singleton Class
    /** Data transformation (marshaling) and encoding helpers. */
    class Marshalls extends Object {
        /** Returns a Base64-encoded string of the [Variant] [param variant]. If [param full_objects] is [code]true[/code], encoding objects is allowed (and can potentially include code).
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
         */
        static variant_to_base64(variant: any, full_objects: boolean = false): string
        /** Returns a decoded [Variant] corresponding to the Base64-encoded string [param base64_str]. If [param allow_objects] is [code]true[/code], decoding objects is allowed.
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
         *  [b]Warning:[/b] Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
         */
        static base64_to_variant(base64_str: string, allow_objects: boolean = false): any
        /** Returns a Base64-encoded string of a given [PackedByteArray]. */
        static raw_to_base64(array: PackedByteArray): string
        /** Returns a decoded [PackedByteArray] corresponding to the Base64-encoded string [param base64_str]. */
        static base64_to_raw(base64_str: string): PackedByteArray
        /** Returns a Base64-encoded string of the UTF-8 string [param utf8_str]. */
        static utf8_to_base64(utf8_str: string): string
        /** Returns a decoded string corresponding to the Base64-encoded string [param base64_str]. */
        static base64_to_utf8(base64_str: string): string
    }
    // // Singleton Class
    /** The server responsible for language translations. */
    class TranslationServer extends Object {
        /** Sets the locale of the project. The [param locale] string will be standardized to match known locales (e.g. [code]en-US[/code] would be matched to [code]en_US[/code]).
         *  If translations have been loaded beforehand for the new locale, they will be applied.
         */
        static set_locale(locale: string): void
        /** Returns the current locale of the project.
         *  See also [method OS.get_locale] and [method OS.get_locale_language] to query the locale of the user system.
         */
        static get_locale(): string
        /** Returns the current locale of the editor.
         *  [b]Note:[/b] When called from an exported project returns the same value as [method get_locale].
         */
        static get_tool_locale(): string
        /** Compares two locales and returns a similarity score between [code]0[/code] (no match) and [code]10[/code] (full match). */
        static compare_locales(locale_a: string, locale_b: string): number /*i64*/
        /** Returns a [param locale] string standardized to match known locales (e.g. [code]en-US[/code] would be matched to [code]en_US[/code]). */
        static standardize_locale(locale: string): string
        /** Returns array of known language codes. */
        static get_all_languages(): PackedStringArray
        /** Returns a readable language name for the [param language] code. */
        static get_language_name(language: string): string
        /** Returns an array of known script codes. */
        static get_all_scripts(): PackedStringArray
        /** Returns a readable script name for the [param script] code. */
        static get_script_name(script: string): string
        /** Returns an array of known country codes. */
        static get_all_countries(): PackedStringArray
        /** Returns a readable country name for the [param country] code. */
        static get_country_name(country: string): string
        /** Returns a locale's language and its variant (e.g. [code]"en_US"[/code] would return [code]"English (United States)"[/code]). */
        static get_locale_name(locale: string): string
        /** Returns the current locale's translation for the given message (key) and context. */
        static translate(message: StringName, context: StringName = ''): StringName
        /** Returns the current locale's translation for the given message (key), plural message and context.
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
         */
        static translate_plural(message: StringName, plural_message: StringName, n: number /*i64*/, context: StringName = ''): StringName
        /** Adds a [Translation] resource. */
        static add_translation(translation: Translation): void
        /** Removes the given translation from the server. */
        static remove_translation(translation: Translation): void
        /** Returns the [Translation] instance based on the [param locale] passed in.
         *  It will return [code]null[/code] if there is no [Translation] instance that matches the [param locale].
         */
        static get_translation_object(locale: string): Translation
        /** Clears the server from all translations. */
        static clear(): void
        /** Returns an array of all loaded locales of the project. */
        static get_loaded_locales(): PackedStringArray
        static is_pseudolocalization_enabled(): boolean
        static set_pseudolocalization_enabled(enabled: boolean): void
        /** Reparses the pseudolocalization options and reloads the translation. */
        static reload_pseudolocalization(): void
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        static pseudolocalize(message: StringName): StringName
        /** If [code]true[/code], enables the use of pseudolocalization. See [member ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization] for details. */
        pseudolocalization_enabled: boolean
    }
    // // Singleton Class
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
    /** A singleton for handling inputs. */
    class Input extends Object {
        /** Returns [code]true[/code] if any action, key, joypad button, or mouse button is being pressed. This will also return [code]true[/code] if any action is simulated via code by calling [method action_press]. */
        static is_anything_pressed(): boolean
        /** Returns [code]true[/code] if you are pressing the Latin key in the current keyboard layout. You can pass a [enum Key] constant.
         *  [method is_key_pressed] is only recommended over [method is_physical_key_pressed] in non-game applications. This ensures that shortcut keys behave as expected depending on the user's keyboard layout, as keyboard shortcuts are generally dependent on the keyboard layout in non-game applications. If in doubt, use [method is_physical_key_pressed].
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_key_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         */
        static is_key_pressed(keycode: Key): boolean
        /** Returns [code]true[/code] if you are pressing the key in the physical location on the 101/102-key US QWERTY keyboard. You can pass a [enum Key] constant.
         *  [method is_physical_key_pressed] is recommended over [method is_key_pressed] for in-game actions, as it will make [kbd]W[/kbd]/[kbd]A[/kbd]/[kbd]S[/kbd]/[kbd]D[/kbd] layouts work regardless of the user's keyboard layout. [method is_physical_key_pressed] will also ensure that the top row number keys work on any keyboard layout. If in doubt, use [method is_physical_key_pressed].
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_physical_key_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         */
        static is_physical_key_pressed(keycode: Key): boolean
        /** Returns [code]true[/code] if you are pressing the key with the [param keycode] printed on it. You can pass a [enum Key] constant or any Unicode character code. */
        static is_key_label_pressed(keycode: Key): boolean
        /** Returns [code]true[/code] if you are pressing the mouse button specified with [enum MouseButton]. */
        static is_mouse_button_pressed(button: MouseButton): boolean
        /** Returns [code]true[/code] if you are pressing the joypad button (see [enum JoyButton]). */
        static is_joy_button_pressed(device: number /*i64*/, button: JoyButton): boolean
        /** Returns [code]true[/code] if you are pressing the action event.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_action_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         */
        static is_action_pressed(action: StringName, exact_match: boolean = false): boolean
        /** Returns [code]true[/code] when the user has [i]started[/i] pressing the action event in the current frame or physics tick. It will only return [code]true[/code] on the frame or tick that the user pressed down the button.
         *  This is useful for code that needs to run only once when an action is pressed, instead of every frame while it's pressed.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         *  [b]Note:[/b] Returning [code]true[/code] does not imply that the action is [i]still[/i] pressed. An action can be pressed and released again rapidly, and [code]true[/code] will still be returned so as not to miss input.
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_action_just_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         *  [b]Note:[/b] During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_pressed] instead to query the action state of the current event.
         */
        static is_action_just_pressed(action: StringName, exact_match: boolean = false): boolean
        /** Returns [code]true[/code] when the user [i]stops[/i] pressing the action event in the current frame or physics tick. It will only return [code]true[/code] on the frame or tick that the user releases the button.
         *  [b]Note:[/b] Returning [code]true[/code] does not imply that the action is [i]still[/i] not pressed. An action can be released and pressed again rapidly, and [code]true[/code] will still be returned so as not to miss input.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         *  [b]Note:[/b] During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_released] instead to query the action state of the current event.
         */
        static is_action_just_released(action: StringName, exact_match: boolean = false): boolean
        /** Returns a value between 0 and 1 representing the intensity of the given action. In a joypad, for example, the further away the axis (analog sticks or L2, R2 triggers) is from the dead zone, the closer the value will be to 1. If the action is mapped to a control that has no axis such as the keyboard, the value returned will be 0 or 1.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        static get_action_strength(action: StringName, exact_match: boolean = false): number /*f64*/
        /** Returns a value between 0 and 1 representing the raw intensity of the given action, ignoring the action's deadzone. In most cases, you should use [method get_action_strength] instead.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        static get_action_raw_strength(action: StringName, exact_match: boolean = false): number /*f64*/
        /** Get axis input by specifying two actions, one negative and one positive.
         *  This is a shorthand for writing [code]Input.get_action_strength("positive_action") - Input.get_action_strength("negative_action")[/code].
         */
        static get_axis(negative_action: StringName, positive_action: StringName): number /*f64*/
        /** Gets an input vector by specifying four actions for the positive and negative X and Y axes.
         *  This method is useful when getting vector input, such as from a joystick, directional pad, arrows, or WASD. The vector has its length limited to 1 and has a circular deadzone, which is useful for using vector input as movement.
         *  By default, the deadzone is automatically calculated from the average of the action deadzones. However, you can override the deadzone to be whatever you want (on the range of 0 to 1).
         */
        static get_vector(negative_x: StringName, positive_x: StringName, negative_y: StringName, positive_y: StringName, deadzone: number /*f64*/ = -1): Vector2
        /** Adds a new mapping entry (in SDL2 format) to the mapping database. Optionally update already connected devices. */
        static add_joy_mapping(mapping: string, update_existing: boolean = false): void
        /** Removes all mappings from the internal database that match the given GUID. */
        static remove_joy_mapping(guid: string): void
        /** Returns [code]true[/code] if the system knows the specified device. This means that it sets all button and axis indices. Unknown joypads are not expected to match these constants, but you can still retrieve events from them. */
        static is_joy_known(device: number /*i64*/): boolean
        /** Returns the current value of the joypad axis at given index (see [enum JoyAxis]). */
        static get_joy_axis(device: number /*i64*/, axis: JoyAxis): number /*f64*/
        /** Returns the name of the joypad at the specified device index, e.g. [code]PS4 Controller[/code]. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names. */
        static get_joy_name(device: number /*i64*/): string
        /** Returns a SDL2-compatible device GUID on platforms that use gamepad remapping, e.g. [code]030000004c050000c405000000010000[/code]. Returns [code]"Default Gamepad"[/code] otherwise. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names and mappings based on this GUID. */
        static get_joy_guid(device: number /*i64*/): string
        /** Returns a dictionary with extra platform-specific information about the device, e.g. the raw gamepad name from the OS or the Steam Input index.
         *  On Windows the dictionary contains the following fields:
         *  [code]xinput_index[/code]: The index of the controller in the XInput system.
         *  On Linux:
         *  [code]raw_name[/code]: The name of the controller as it came from the OS, before getting renamed by the godot controller database.
         *  [code]vendor_id[/code]: The USB vendor ID of the device.
         *  [code]product_id[/code]: The USB product ID of the device.
         *  [code]steam_input_index[/code]: The Steam Input gamepad index, if the device is not a Steam Input device this key won't be present.
         */
        static get_joy_info(device: number /*i64*/): Dictionary
        /** Queries whether an input device should be ignored or not. Devices can be ignored by setting the environment variable [code]SDL_GAMECONTROLLER_IGNORE_DEVICES[/code]. Read the [url=https://wiki.libsdl.org/SDL2]SDL documentation[/url] for more information.
         *  [b]Note:[/b] Some 3rd party tools can contribute to the list of ignored devices. For example, [i]SteamInput[/i] creates virtual devices from physical devices for remapping purposes. To avoid handling the same input device twice, the original device is added to the ignore list.
         */
        static should_ignore_device(vendor_id: number /*i64*/, product_id: number /*i64*/): boolean
        /** Returns an [Array] containing the device IDs of all currently connected joypads. */
        static get_connected_joypads(): Array
        /** Returns the strength of the joypad vibration: x is the strength of the weak motor, and y is the strength of the strong motor. */
        static get_joy_vibration_strength(device: number /*i64*/): Vector2
        /** Returns the duration of the current vibration effect in seconds. */
        static get_joy_vibration_duration(device: number /*i64*/): number /*f64*/
        /** Starts to vibrate the joypad. Joypads usually come with two rumble motors, a strong and a weak one. [param weak_magnitude] is the strength of the weak motor (between 0 and 1) and [param strong_magnitude] is the strength of the strong motor (between 0 and 1). [param duration] is the duration of the effect in seconds (a duration of 0 will try to play the vibration indefinitely). The vibration can be stopped early by calling [method stop_joy_vibration].
         *  [b]Note:[/b] Not every hardware is compatible with long effect durations; it is recommended to restart an effect if it has to be played for more than a few seconds.
         */
        static start_joy_vibration(device: number /*i64*/, weak_magnitude: number /*f64*/, strong_magnitude: number /*f64*/, duration: number /*f64*/ = 0): void
        /** Stops the vibration of the joypad started with [method start_joy_vibration]. */
        static stop_joy_vibration(device: number /*i64*/): void
        /** Vibrate the handheld device for the specified duration in milliseconds.
         *  [b]Note:[/b] This method is implemented on Android, iOS, and Web. It has no effect on other platforms.
         *  [b]Note:[/b] For Android, [method vibrate_handheld] requires enabling the [code]VIBRATE[/code] permission in the export preset. Otherwise, [method vibrate_handheld] will have no effect.
         *  [b]Note:[/b] For iOS, specifying the duration is only supported in iOS 13 and later.
         *  [b]Note:[/b] Some web browsers such as Safari and Firefox for Android do not support [method vibrate_handheld].
         */
        static vibrate_handheld(duration_ms: number /*i64*/ = 500): void
        /** Returns the gravity in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
         *  [b]Note:[/b] This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
         */
        static get_gravity(): Vector3
        /** Returns the acceleration in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
         *  Note this method returns an empty [Vector3] when running from the editor even when your device has an accelerometer. You must export your project to a supported device to read values from the accelerometer.
         *  [b]Note:[/b] This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
         */
        static get_accelerometer(): Vector3
        /** Returns the magnetic field strength in micro-Tesla for all axes of the device's magnetometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
         *  [b]Note:[/b] This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
         */
        static get_magnetometer(): Vector3
        /** Returns the rotation rate in rad/s around a device's X, Y, and Z axes of the gyroscope sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
         *  [b]Note:[/b] This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
         */
        static get_gyroscope(): Vector3
        /** Sets the gravity value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
         *  [b]Note:[/b] This value can be immediately overwritten by the hardware sensor value on Android and iOS.
         */
        static set_gravity(value: Vector3): void
        /** Sets the acceleration value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
         *  [b]Note:[/b] This value can be immediately overwritten by the hardware sensor value on Android and iOS.
         */
        static set_accelerometer(value: Vector3): void
        /** Sets the value of the magnetic field of the magnetometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
         *  [b]Note:[/b] This value can be immediately overwritten by the hardware sensor value on Android and iOS.
         */
        static set_magnetometer(value: Vector3): void
        /** Sets the value of the rotation rate of the gyroscope sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
         *  [b]Note:[/b] This value can be immediately overwritten by the hardware sensor value on Android and iOS.
         */
        static set_gyroscope(value: Vector3): void
        /** Returns the last mouse velocity. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
        static get_last_mouse_velocity(): Vector2
        /** Returns mouse buttons as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method DisplayServer.mouse_get_button_state]. */
        static get_mouse_button_mask(): MouseButtonMask
        static set_mouse_mode(mode: Input.MouseMode): void
        static get_mouse_mode(): Input.MouseMode
        /** Sets the mouse position to the specified vector, provided in pixels and relative to an origin at the upper left corner of the currently focused Window Manager game window.
         *  Mouse position is clipped to the limits of the screen resolution, or to the limits of the game window if [enum MouseMode] is set to [constant MOUSE_MODE_CONFINED] or [constant MOUSE_MODE_CONFINED_HIDDEN].
         *  [b]Note:[/b] [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
         */
        static warp_mouse(position: Vector2): void
        /** This will simulate pressing the specified action.
         *  The strength can be used for non-boolean actions, it's ranged between 0 and 1 representing the intensity of the given action.
         *  [b]Note:[/b] This method will not cause any [method Node._input] calls. It is intended to be used with [method is_action_pressed] and [method is_action_just_pressed]. If you want to simulate [code]_input[/code], use [method parse_input_event] instead.
         */
        static action_press(action: StringName, strength: number /*f64*/ = 1): void
        /** If the specified action is already pressed, this will release it. */
        static action_release(action: StringName): void
        /** Sets the default cursor shape to be used in the viewport instead of [constant CURSOR_ARROW].
         *  [b]Note:[/b] If you want to change the default cursor shape for [Control]'s nodes, use [member Control.mouse_default_cursor_shape] instead.
         *  [b]Note:[/b] This method generates an [InputEventMouseMotion] to update cursor immediately.
         */
        static set_default_cursor_shape(shape: Input.CursorShape = 0): void
        /** Returns the currently assigned cursor shape (see [enum CursorShape]). */
        static get_current_cursor_shape(): Input.CursorShape
        /** Sets a custom mouse cursor image, which is only visible inside the game window. The hotspot can also be specified. Passing [code]null[/code] to the image parameter resets to the system cursor. See [enum CursorShape] for the list of shapes.
         *  [param image]'s size must be lower than or equal to 256×256. To avoid rendering issues, sizes lower than or equal to 128×128 are recommended.
         *  [param hotspot] must be within [param image]'s size.
         *  [b]Note:[/b] [AnimatedTexture]s aren't supported as custom mouse cursors. If using an [AnimatedTexture], only the first frame will be displayed.
         *  [b]Note:[/b] The [b]Lossless[/b], [b]Lossy[/b] or [b]Uncompressed[/b] compression modes are recommended. The [b]Video RAM[/b] compression mode can be used, but it will be decompressed on the CPU, which means loading times are slowed down and no memory is saved compared to lossless modes.
         *  [b]Note:[/b] On the web platform, the maximum allowed cursor image size is 128×128. Cursor images larger than 32×32 will also only be displayed if the mouse cursor image is entirely located within the page for [url=https://chromestatus.com/feature/5825971391299584]security reasons[/url].
         */
        static set_custom_mouse_cursor(image: Resource, shape: Input.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        /** Feeds an [InputEvent] to the game. Can be used to artificially trigger input events from code. Also generates [method Node._input] calls.
         *  [b]Example:[/b]
         *  
         *  [b]Note:[/b] Calling this function has no influence on the operating system. So for example sending an [InputEventMouseMotion] will not move the OS mouse cursor to the specified position (use [method warp_mouse] instead) and sending [kbd]Alt/Cmd + Tab[/kbd] as [InputEventKey] won't toggle between active windows.
         */
        static parse_input_event(event: InputEvent): void
        static set_use_accumulated_input(enable: boolean): void
        static is_using_accumulated_input(): boolean
        /** Sends all input events which are in the current buffer to the game loop. These events may have been buffered as a result of accumulated input ([member use_accumulated_input]) or agile input flushing ([member ProjectSettings.input_devices/buffering/agile_event_flushing]).
         *  The engine will already do this itself at key execution points (at least once per frame). However, this can be useful in advanced cases where you want precise control over the timing of event handling.
         */
        static flush_buffered_events(): void
        /** Controls the mouse mode. See [enum MouseMode] for more information. */
        mouse_mode: number /*i64*/
        /** If [code]true[/code], similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.
         *  Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage. In applications where drawing freehand lines is required, input accumulation should generally be disabled while the user is drawing the line to get results that closely follow the actual input.
         *  [b]Note:[/b] Input accumulation is [i]enabled[/i] by default.
         */
        use_accumulated_input: boolean
        static readonly joy_connection_changed: Signal
    }
    // // Singleton Class
    /** A singleton that manages all [InputEventAction]s. */
    class InputMap extends Object {
        /** Returns [code]true[/code] if the [InputMap] has a registered action with the given name. */
        static has_action(action: StringName): boolean
        /** Returns an array of all actions in the [InputMap]. */
        static get_actions(): Array
        /** Adds an empty action to the [InputMap] with a configurable [param deadzone].
         *  An [InputEvent] can then be added to this action with [method action_add_event].
         */
        static add_action(action: StringName, deadzone: number /*f64*/ = 0.5): void
        /** Removes an action from the [InputMap]. */
        static erase_action(action: StringName): void
        /** Sets a deadzone value for the action. */
        static action_set_deadzone(action: StringName, deadzone: number /*f64*/): void
        /** Returns a deadzone value for the action. */
        static action_get_deadzone(action: StringName): number /*f64*/
        /** Adds an [InputEvent] to an action. This [InputEvent] will trigger the action. */
        static action_add_event(action: StringName, event: InputEvent): void
        /** Returns [code]true[/code] if the action has the given [InputEvent] associated with it. */
        static action_has_event(action: StringName, event: InputEvent): boolean
        /** Removes an [InputEvent] from an action. */
        static action_erase_event(action: StringName, event: InputEvent): void
        /** Removes all events from an action. */
        static action_erase_events(action: StringName): void
        /** Returns an array of [InputEvent]s associated with a given action.
         *  [b]Note:[/b] When used in the editor (e.g. a tool script or [EditorPlugin]), this method will return events for the editor action. If you want to access your project's input binds from the editor, read the [code]input/*[/code] settings from [ProjectSettings].
         */
        static action_get_events(action: StringName): Array
        /** Returns [code]true[/code] if the given event is part of an existing action. This method ignores keyboard modifiers if the given [InputEvent] is not pressed (for proper release detection). See [method action_has_event] if you don't want this behavior.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        static event_is_action(event: InputEvent, action: StringName, exact_match: boolean = false): boolean
        /** Clears all [InputEventAction] in the [InputMap] and load it anew from [ProjectSettings]. */
        static load_from_project_settings(): void
    }
    // // Singleton Class
    /** Exposes the internal debugger. */
    class EngineDebugger extends Object {
        /** Returns [code]true[/code] if the debugger is active otherwise [code]false[/code]. */
        static is_active(): boolean
        /** Registers a profiler with the given [param name]. See [EngineProfiler] for more information. */
        static register_profiler(name: StringName, profiler: EngineProfiler): void
        /** Unregisters a profiler with given [param name]. */
        static unregister_profiler(name: StringName): void
        /** Returns [code]true[/code] if a profiler with the given name is present and active otherwise [code]false[/code]. */
        static is_profiling(name: StringName): boolean
        /** Returns [code]true[/code] if a profiler with the given name is present otherwise [code]false[/code]. */
        static has_profiler(name: StringName): boolean
        /** Calls the [code]add[/code] callable of the profiler with given [param name] and [param data]. */
        static profiler_add_frame_data(name: StringName, data: Array): void
        /** Calls the [code]toggle[/code] callable of the profiler with given [param name] and [param arguments]. Enables/Disables the same profiler depending on [param enable] argument. */
        static profiler_enable(name: StringName, enable: boolean, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): void
        /** Registers a message capture with given [param name]. If [param name] is "my_message" then messages starting with "my_message:" will be called with the given callable.
         *  Callable must accept a message string and a data array as argument. If the message and data are valid then callable must return [code]true[/code] otherwise [code]false[/code].
         */
        static register_message_capture(name: StringName, callable: Callable): void
        /** Unregisters the message capture with given [param name]. */
        static unregister_message_capture(name: StringName): void
        /** Returns [code]true[/code] if a capture with the given name is present otherwise [code]false[/code]. */
        static has_capture(name: StringName): boolean
        /** Sends a message with given [param message] and [param data] array. */
        static send_message(message: string, data: Array): void
    }
    // // Singleton Class
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
    /** A singleton for working with time data. */
    class Time extends Object {
        /** Converts the given Unix timestamp to a dictionary of keys: [code]year[/code], [code]month[/code], [code]day[/code], [code]weekday[/code], [code]hour[/code], [code]minute[/code], and [code]second[/code].
         *  The returned Dictionary's values will be the same as the [method get_datetime_dict_from_system] if the Unix timestamp is the current time, with the exception of Daylight Savings Time as it cannot be determined from the epoch.
         */
        static get_datetime_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        /** Converts the given Unix timestamp to a dictionary of keys: [code]year[/code], [code]month[/code], [code]day[/code], and [code]weekday[/code]. */
        static get_date_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        /** Converts the given time to a dictionary of keys: [code]hour[/code], [code]minute[/code], and [code]second[/code]. */
        static get_time_dict_from_unix_time(unix_time_val: number /*i64*/): Dictionary
        /** Converts the given Unix timestamp to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
         *  If [param use_space] is [code]true[/code], the date and time bits are separated by an empty space character instead of the letter T.
         */
        static get_datetime_string_from_unix_time(unix_time_val: number /*i64*/, use_space: boolean = false): string
        /** Converts the given Unix timestamp to an ISO 8601 date string (YYYY-MM-DD). */
        static get_date_string_from_unix_time(unix_time_val: number /*i64*/): string
        /** Converts the given Unix timestamp to an ISO 8601 time string (HH:MM:SS). */
        static get_time_string_from_unix_time(unix_time_val: number /*i64*/): string
        /** Converts the given ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS) to a dictionary of keys: [code]year[/code], [code]month[/code], [code]day[/code], [code skip-lint]weekday[/code], [code]hour[/code], [code]minute[/code], and [code]second[/code].
         *  If [param weekday] is [code]false[/code], then the [code skip-lint]weekday[/code] entry is excluded (the calculation is relatively expensive).
         *  [b]Note:[/b] Any decimal fraction in the time string will be ignored silently.
         */
        static get_datetime_dict_from_datetime_string(datetime: string, weekday: boolean): Dictionary
        /** Converts the given dictionary of keys to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
         *  The given dictionary can be populated with the following keys: [code]year[/code], [code]month[/code], [code]day[/code], [code]hour[/code], [code]minute[/code], and [code]second[/code]. Any other entries (including [code]dst[/code]) are ignored.
         *  If the dictionary is empty, [code]0[/code] is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).
         *  If [param use_space] is [code]true[/code], the date and time bits are separated by an empty space character instead of the letter T.
         */
        static get_datetime_string_from_datetime_dict(datetime: Dictionary, use_space: boolean): string
        /** Converts a dictionary of time values to a Unix timestamp.
         *  The given dictionary can be populated with the following keys: [code]year[/code], [code]month[/code], [code]day[/code], [code]hour[/code], [code]minute[/code], and [code]second[/code]. Any other entries (including [code]dst[/code]) are ignored.
         *  If the dictionary is empty, [code]0[/code] is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).
         *  You can pass the output from [method get_datetime_dict_from_unix_time] directly into this function and get the same as what was put in.
         *  [b]Note:[/b] Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime dictionary.
         */
        static get_unix_time_from_datetime_dict(datetime: Dictionary): number /*i64*/
        /** Converts the given ISO 8601 date and/or time string to a Unix timestamp. The string can contain a date only, a time only, or both.
         *  [b]Note:[/b] Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime string.
         *  [b]Note:[/b] Any decimal fraction in the time string will be ignored silently.
         */
        static get_unix_time_from_datetime_string(datetime: string): number /*i64*/
        /** Converts the given timezone offset in minutes to a timezone offset string. For example, -480 returns "-08:00", 345 returns "+05:45", and 0 returns "+00:00". */
        static get_offset_string_from_offset_minutes(offset_minutes: number /*i64*/): string
        /** Returns the current date as a dictionary of keys: [code]year[/code], [code]month[/code], [code]day[/code], [code]weekday[/code], [code]hour[/code], [code]minute[/code], [code]second[/code], and [code]dst[/code] (Daylight Savings Time). */
        static get_datetime_dict_from_system(utc: boolean = false): Dictionary
        /** Returns the current date as a dictionary of keys: [code]year[/code], [code]month[/code], [code]day[/code], and [code]weekday[/code].
         *  The returned values are in the system's local time when [param utc] is [code]false[/code], otherwise they are in UTC.
         */
        static get_date_dict_from_system(utc: boolean = false): Dictionary
        /** Returns the current time as a dictionary of keys: [code]hour[/code], [code]minute[/code], and [code]second[/code].
         *  The returned values are in the system's local time when [param utc] is [code]false[/code], otherwise they are in UTC.
         */
        static get_time_dict_from_system(utc: boolean = false): Dictionary
        /** Returns the current date and time as an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
         *  The returned values are in the system's local time when [param utc] is [code]false[/code], otherwise they are in UTC.
         *  If [param use_space] is [code]true[/code], the date and time bits are separated by an empty space character instead of the letter T.
         */
        static get_datetime_string_from_system(utc: boolean = false, use_space: boolean = false): string
        /** Returns the current date as an ISO 8601 date string (YYYY-MM-DD).
         *  The returned values are in the system's local time when [param utc] is [code]false[/code], otherwise they are in UTC.
         */
        static get_date_string_from_system(utc: boolean = false): string
        /** Returns the current time as an ISO 8601 time string (HH:MM:SS).
         *  The returned values are in the system's local time when [param utc] is [code]false[/code], otherwise they are in UTC.
         */
        static get_time_string_from_system(utc: boolean = false): string
        /** Returns the current time zone as a dictionary of keys: [code]bias[/code] and [code]name[/code]. 
         *  - [code]bias[/code] is the offset from UTC in minutes, since not all time zones are multiples of an hour from UTC.
         *  - [code]name[/code] is the localized name of the time zone, according to the OS locale settings of the current user.
         */
        static get_time_zone_from_system(): Dictionary
        /** Returns the current Unix timestamp in seconds based on the system time in UTC. This method is implemented by the operating system and always returns the time in UTC. The Unix timestamp is the number of seconds passed since 1970-01-01 at 00:00:00, the [url=https://en.wikipedia.org/wiki/Unix_time]Unix epoch[/url].
         *  [b]Note:[/b] Unlike other methods that use integer timestamps, this method returns the timestamp as a [float] for sub-second precision.
         */
        static get_unix_time_from_system(): number /*f64*/
        /** Returns the amount of time passed in milliseconds since the engine started.
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly 500 million years).
         */
        static get_ticks_msec(): number /*i64*/
        /** Returns the amount of time passed in microseconds since the engine started.
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly half a million years).
         */
        static get_ticks_usec(): number /*i64*/
    }
    // // Singleton Class
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
        static readonly extensions_reloaded: Signal
    }
    // // Singleton Class
    /** A singleton that manages the unique identifiers of all resources within a project. */
    class ResourceUID extends Object {
        static readonly INVALID_ID = -1
        /** Converts the given UID to a [code]uid://[/code] string value. */
        static id_to_text(id: number /*i64*/): string
        /** Extracts the UID value from the given [code]uid://[/code] string. */
        static text_to_id(text_id: string): number /*i64*/
        /** Generates a random resource UID which is guaranteed to be unique within the list of currently loaded UIDs.
         *  In order for this UID to be registered, you must call [method add_id] or [method set_id].
         */
        static create_id(): number /*i64*/
        /** Returns whether the given UID value is known to the cache. */
        static has_id(id: number /*i64*/): boolean
        /** Adds a new UID value which is mapped to the given resource path.
         *  Fails with an error if the UID already exists, so be sure to check [method has_id] beforehand, or use [method set_id] instead.
         */
        static add_id(id: number /*i64*/, path: string): void
        /** Updates the resource path of an existing UID.
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand, or use [method add_id] instead.
         */
        static set_id(id: number /*i64*/, path: string): void
        /** Returns the path that the given UID value refers to.
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.
         */
        static get_id_path(id: number /*i64*/): string
        /** Removes a loaded UID value from the cache.
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.
         */
        static remove_id(id: number /*i64*/): void
    }
    // // Singleton Class
    /** A singleton that allocates some [Thread]s on startup, used to offload tasks to these threads. */
    class WorkerThreadPool extends Object {
        /** Adds [param action] as a task to be executed by a worker thread. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.
         *  Returns a task ID that can be used by other methods.
         */
        static add_task(action: Callable, high_priority: boolean = false, description: string = ''): number /*i64*/
        /** Returns [code]true[/code] if the task with the given ID is completed. */
        static is_task_completed(task_id: number /*i64*/): boolean
        /** Pauses the thread that calls this method until the task with the given ID is completed.
         *  Returns [constant @GlobalScope.OK] if the task could be successfully awaited.
         *  Returns [constant @GlobalScope.ERR_INVALID_PARAMETER] if a task with the passed ID does not exist (maybe because it was already awaited and disposed of).
         *  Returns [constant @GlobalScope.ERR_BUSY] if the call is made from another running task and, due to task scheduling, the task to await is at a lower level in the call stack and therefore can't progress. This is an advanced situation that should only matter when some tasks depend on others.
         */
        static wait_for_task_completion(task_id: number /*i64*/): GodotError
        /** Adds [param action] as a group task to be executed by the worker threads. The [Callable] will be called a number of times based on [param elements], with the first thread calling it with the value [code]0[/code] as a parameter, and each consecutive execution incrementing this value by 1 until it reaches [code]element - 1[/code].
         *  The number of threads the task is distributed to is defined by [param tasks_needed], where the default value [code]-1[/code] means it is distributed to all worker threads. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.
         *  Returns a group task ID that can be used by other methods.
         */
        static add_group_task(action: Callable, elements: number /*i64*/, tasks_needed: number /*i64*/ = -1, high_priority: boolean = false, description: string = ''): number /*i64*/
        /** Returns [code]true[/code] if the group task with the given ID is completed. */
        static is_group_task_completed(group_id: number /*i64*/): boolean
        /** Returns how many times the [Callable] of the group task with the given ID has already been executed by the worker threads.
         *  [b]Note:[/b] If a thread has started executing the [Callable] but is yet to finish, it won't be counted.
         */
        static get_group_processed_element_count(group_id: number /*i64*/): number /*i64*/
        /** Pauses the thread that calls this method until the group task with the given ID is completed. */
        static wait_for_group_task_completion(group_id: number /*i64*/): void
    }
    // // Singleton Class
    /** A singleton that provides access to static information about [Theme] resources used by the engine and by your project. */
    class ThemeDB extends Object {
        /** Returns a reference to the default engine [Theme]. This theme resource is responsible for the out-of-the-box look of [Control] nodes and cannot be overridden. */
        static get_default_theme(): Theme
        /** Returns a reference to the custom project [Theme]. This theme resources allows to override the default engine theme for every control node in the project.
         *  To set the project theme, see [member ProjectSettings.gui/theme/custom].
         */
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
        /** The fallback base scale factor of every [Control] node and [Theme] resource. Used when no other value is available to the control.
         *  See also [member Theme.default_base_scale].
         */
        fallback_base_scale: number /*f64*/
        /** The fallback font of every [Control] node and [Theme] resource. Used when no other value is available to the control.
         *  See also [member Theme.default_font].
         */
        fallback_font: Font
        /** The fallback font size of every [Control] node and [Theme] resource. Used when no other value is available to the control.
         *  See also [member Theme.default_font_size].
         */
        fallback_font_size: number /*i64*/
        /** The fallback icon of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        fallback_icon: Texture2D
        /** The fallback stylebox of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        fallback_stylebox: StyleBox
        static readonly fallback_changed: Signal
    }
    // // Singleton Class
    /** Godot editor's interface. */
    class EditorInterface extends Object {
        /** Restarts the editor. This closes the editor and then opens the same project. If [param save] is [code]true[/code], the project will be saved before restarting. */
        static restart_editor(save: boolean = true): void
        /** Returns the editor's [EditorCommandPalette] instance.
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        static get_command_palette(): EditorCommandPalette
        /** Returns the editor's [EditorFileSystem] instance. */
        static get_resource_filesystem(): EditorFileSystem
        /** Returns the [EditorPaths] singleton. */
        static get_editor_paths(): EditorPaths
        /** Returns the editor's [EditorResourcePreview] instance. */
        static get_resource_previewer(): EditorResourcePreview
        /** Returns the editor's [EditorSelection] instance. */
        static get_selection(): EditorSelection
        /** Returns the editor's [EditorSettings] instance. */
        static get_editor_settings(): EditorSettings
        /** Returns mesh previews rendered at the given size as an [Array] of [Texture2D]s. */
        static make_mesh_previews(meshes: Array, preview_size: number /*i64*/): Array
        /** Sets the enabled status of a plugin. The plugin name is the same as its directory name. */
        static set_plugin_enabled(plugin: string, enabled: boolean): void
        /** Returns [code]true[/code] if the specified [param plugin] is enabled. The plugin name is the same as its directory name. */
        static is_plugin_enabled(plugin: string): boolean
        /** Returns the editor's [Theme].
         *  [b]Note:[/b] When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the [code]get_theme_*[/code] methods.
         */
        static get_editor_theme(): Theme
        /** Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.
         *  [b]Warning:[/b] Removing and freeing this node will render the editor useless and may cause a crash.
         */
        static get_base_control(): Control
        /** Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement [method EditorPlugin._has_main_screen].
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        static get_editor_main_screen(): VBoxContainer
        /** Returns the editor's [ScriptEditor] instance.
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        static get_script_editor(): ScriptEditor
        /** Returns the 2D editor [SubViewport]. It does not have a camera. Instead, the view transforms are done directly and can be accessed with [member Viewport.global_canvas_transform]. */
        static get_editor_viewport_2d(): SubViewport
        /** Returns the specified 3D editor [SubViewport], from [code]0[/code] to [code]3[/code]. The viewport can be used to access the active editor cameras with [method Viewport.get_camera_3d]. */
        static get_editor_viewport_3d(idx: number /*i64*/ = 0): SubViewport
        /** Sets the editor's current main screen to the one specified in [param name]. [param name] must match the title of the tab in question exactly (e.g. [code]2D[/code], [code]3D[/code], [code skip-lint]Script[/code], or [code]AssetLib[/code] for default tabs). */
        static set_main_screen_editor(name: string): void
        static set_distraction_free_mode(enter: boolean): void
        static is_distraction_free_mode_enabled(): boolean
        /** Returns the actual scale of the editor UI ([code]1.0[/code] being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.
         *  [b]Note:[/b] This value is set via the [code]interface/editor/display_scale[/code] and [code]interface/editor/custom_display_scale[/code] editor settings. Editor must be restarted for changes to be properly applied.
         */
        static get_editor_scale(): number /*f64*/
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive]. The dialog must have no current parent, otherwise the method fails.
         *  See also [method Window.set_unparent_when_invisible].
         */
        static popup_dialog(dialog: Window, rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered]. The dialog must have no current parent, otherwise the method fails.
         *  See also [method Window.set_unparent_when_invisible].
         */
        static popup_dialog_centered(dialog: Window, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_ratio]. The dialog must have no current parent, otherwise the method fails.
         *  See also [method Window.set_unparent_when_invisible].
         */
        static popup_dialog_centered_ratio(dialog: Window, ratio: number /*f64*/ = 0.8): void
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_clamped]. The dialog must have no current parent, otherwise the method fails.
         *  See also [method Window.set_unparent_when_invisible].
         */
        static popup_dialog_centered_clamped(dialog: Window, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/, fallback_ratio: number /*f64*/ = 0.75): void
        /** Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.
         *  In order to get a reference to the [EditorFeatureProfile], you must load the feature profile using [method EditorFeatureProfile.load_from_file].
         *  [b]Note:[/b] Feature profiles created via the user interface are loaded from the [code]feature_profiles[/code] directory, as a file with the [code].profile[/code] extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
         */
        static get_current_feature_profile(): string
        /** Selects and activates the specified feature profile with the given [param profile_name]. Set [param profile_name] to an empty string to reset to the default feature profile.
         *  A feature profile can be created programmatically using the [EditorFeatureProfile] class.
         *  [b]Note:[/b] The feature profile that gets activated must be located in the [code]feature_profiles[/code] directory, as a file with the [code].profile[/code] extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
         */
        static set_current_feature_profile(profile_name: string): void
        /** Returns the editor's [FileSystemDock] instance.
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        static get_file_system_dock(): FileSystemDock
        /** Selects the file, with the path provided by [param file], in the FileSystem dock. */
        static select_file(file: string): void
        /** Returns an array containing the paths of the currently selected files (and directories) in the [FileSystemDock]. */
        static get_selected_paths(): PackedStringArray
        /** Returns the current path being viewed in the [FileSystemDock]. */
        static get_current_path(): string
        /** Returns the current directory being viewed in the [FileSystemDock]. If a file is selected, its base directory will be returned using [method String.get_base_dir] instead. */
        static get_current_directory(): string
        /** Returns the editor's [EditorInspector] instance.
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        static get_inspector(): EditorInspector
        /** Shows the given property on the given [param object] in the editor's Inspector dock. If [param inspector_only] is [code]true[/code], plugins will not attempt to edit [param object]. */
        static inspect_object(object: Object, for_property: string = '', inspector_only: boolean = false): void
        /** Edits the given [Resource]. If the resource is a [Script] you can also edit it with [method edit_script] to specify the line and column position. */
        static edit_resource(resource: Resource): void
        /** Edits the given [Node]. The node will be also selected if it's inside the scene tree. */
        static edit_node(node: Node): void
        /** Edits the given [Script]. The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor. */
        static edit_script(script: Script, line: number /*i64*/ = -1, column: number /*i64*/ = 0, grab_focus: boolean = true): void
        /** Opens the scene at the given path. */
        static open_scene_from_path(scene_filepath: string): void
        /** Reloads the scene at the given path. */
        static reload_scene_from_path(scene_filepath: string): void
        /** Returns an [Array] with the file paths of the currently opened scenes. */
        static get_open_scenes(): PackedStringArray
        /** Returns the edited (current) scene's root [Node]. */
        static get_edited_scene_root(): Node
        /** Saves the currently active scene. Returns either [constant OK] or [constant ERR_CANT_CREATE]. */
        static save_scene(): GodotError
        /** Saves the currently active scene as a file at [param path]. */
        static save_scene_as(path: string, with_preview: boolean = true): void
        /** Saves all opened scenes in the editor. */
        static save_all_scenes(): void
        /** Marks the current scene tab as unsaved. */
        static mark_scene_as_unsaved(): void
        /** Plays the main scene. */
        static play_main_scene(): void
        /** Plays the currently active scene. */
        static play_current_scene(): void
        /** Plays the scene specified by its filepath. */
        static play_custom_scene(scene_filepath: string): void
        /** Stops the scene that is currently playing. */
        static stop_playing_scene(): void
        /** Returns [code]true[/code] if a scene is currently being played, [code]false[/code] otherwise. Paused scenes are considered as being played. */
        static is_playing_scene(): boolean
        /** Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string. */
        static get_playing_scene(): string
        static set_movie_maker_enabled(enabled: boolean): void
        static is_movie_maker_enabled(): boolean
        /** If [code]true[/code], enables distraction-free mode which hides side docks to increase the space available for the main view. */
        distraction_free_mode: boolean
        /** If [code]true[/code], the Movie Maker mode is enabled in the editor. See [MovieWriter] for more information. */
        movie_maker_enabled: boolean
    }
    // // Singleton Class
    class JavaClassWrapper extends Object {
        static wrap(name: string): JavaClass
    }
    // // Singleton Class
    /** Singleton that connects the engine with the browser's JavaScript context in Web export. */
    class JavaScriptBridge extends Object {
        /** Execute the string [param code] as JavaScript code within the browser window. This is a call to the actual global JavaScript function [code skip-lint]eval()[/code].
         *  If [param use_global_execution_context] is [code]true[/code], the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.
         */
        static eval(code: string, use_global_execution_context: boolean = false): any
        /** Returns an interface to a JavaScript object that can be used by scripts. The [param interface] must be a valid property of the JavaScript [code]window[/code]. The callback must accept a single [Array] argument, which will contain the JavaScript [code]arguments[/code]. See [JavaScriptObject] for usage. */
        static get_interface(interface: string): JavaScriptObject
        /** Creates a reference to a [Callable] that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See [JavaScriptObject] for usage. */
        static create_callback(callable: Callable): JavaScriptObject
        /** Creates a new JavaScript object using the [code]new[/code] constructor. The [param object] must a valid property of the JavaScript [code]window[/code]. See [JavaScriptObject] for usage. */
        static create_object(object: string, ...vargargs: any[]): any
        /** Prompts the user to download a file containing the specified [param buffer]. The file will have the given [param name] and [param mime] type.
         *  [b]Note:[/b] The browser may override the [url=https://en.wikipedia.org/wiki/Media_type]MIME type[/url] provided based on the file [param name]'s extension.
         *  [b]Note:[/b] Browsers might block the download if [method download_buffer] is not being called from a user interaction (e.g. button click).
         *  [b]Note:[/b] Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.
         */
        static download_buffer(buffer: PackedByteArray, name: string, mime: string = 'application/octet-stream'): void
        /** Returns [code]true[/code] if a new version of the progressive web app is waiting to be activated.
         *  [b]Note:[/b] Only relevant when exported as a Progressive Web App.
         */
        static pwa_needs_update(): boolean
        /** Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.
         *  [b]Note:[/b] Your application will be [b]reloaded in all browser tabs[/b].
         *  [b]Note:[/b] Only relevant when exported as a Progressive Web App and [method pwa_needs_update] returns [code]true[/code].
         */
        static pwa_update(): GodotError
        /** Force synchronization of the persistent file system (when enabled).
         *  [b]Note:[/b] This is only useful for modules or extensions that can't use [FileAccess] to write files.
         */
        static force_fs_sync(): void
        static readonly pwa_update_available: Signal
    }
    // // Singleton Class
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
    /** A server interface for low-level window management. */
    class DisplayServer extends Object {
        static readonly SCREEN_WITH_MOUSE_FOCUS = -4
        static readonly SCREEN_WITH_KEYBOARD_FOCUS = -3
        static readonly SCREEN_PRIMARY = -2
        static readonly SCREEN_OF_MAIN_WINDOW = -1
        static readonly MAIN_WINDOW_ID = 0
        static readonly INVALID_WINDOW_ID = -1
        /** Returns [code]true[/code] if the specified [param feature] is supported by the current [DisplayServer], [code]false[/code] otherwise. */
        static has_feature(feature: DisplayServer.Feature): boolean
        /** Returns the name of the [DisplayServer] currently in use. Most operating systems only have a single [DisplayServer], but Linux has access to more than one [DisplayServer] (although only X11 is currently implemented in Godot).
         *  The names of built-in display servers are [code]Windows[/code], [code]macOS[/code], [code]X11[/code] (Linux), [code]Android[/code], [code]iOS[/code], [code]web[/code] (HTML5) and [code]headless[/code] (when started with the [code]--headless[/code] [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url]).
         */
        static get_name(): string
        /** Registers callables to emit when the menu is respectively about to show or closed. */
        static global_menu_set_popup_callbacks(menu_root: string, open_callback: Callable, close_callback: Callable): void
        /** Adds an item that will act as a submenu of the global menu [param menu_root]. The [param submenu] argument is the ID of the global menu root that will be shown when the item is clicked.
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_submenu_item(menu_root: string, label: string, submenu: string, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new item with text [param label] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_item(menu_root: string, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new checkable item with text [param label] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_check_item(menu_root: string, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_icon_item(menu_root: string, icon: Texture2D, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_icon_check_item(menu_root: string, icon: Texture2D, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new radio-checkable item with text [param label] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_radio_check_item(menu_root: string, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new radio-checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_icon_radio_check_item(menu_root: string, icon: Texture2D, label: string, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a new item with text [param label] to the global menu with ID [param menu_root].
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] By default, there's no indication of the current item state, it should be changed manually.
         *  [b]Note:[/b] The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_multistate_item(menu_root: string, label: string, max_states: number /*i64*/, default_state: number /*i64*/, callback: Callable = <any> {} /*compound.type from 25([object Object])*/, key_callback: Callable = <any> {} /*compound.type from 25([object Object])*/, tag: any = <any> {} /*compound.type from nil*/, accelerator: Key = 0, index: number /*i64*/ = -1): number /*i64*/
        /** Adds a separator between items to the global menu with ID [param menu_root]. Separators also occupy an index.
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_add_separator(menu_root: string, index: number /*i64*/ = -1): number /*i64*/
        /** Returns the index of the item with the specified [param text]. Index is automatically assigned to each item by the engine. Index can not be set manually.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_index_from_text(menu_root: string, text: string): number /*i64*/
        /** Returns the index of the item with the specified [param tag]. Index is automatically assigned to each item by the engine. Index can not be set manually.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_index_from_tag(menu_root: string, tag: any): number /*i64*/
        /** Returns [code]true[/code] if the item at index [param idx] is checked.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_is_item_checked(menu_root: string, idx: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at index [param idx] is checkable in some way, i.e. if it has a checkbox or radio button.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_is_item_checkable(menu_root: string, idx: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at index [param idx] has radio button-style checkability.
         *  [b]Note:[/b] This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_is_item_radio_checkable(menu_root: string, idx: number /*i64*/): boolean
        /** Returns the callback of the item at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_callback(menu_root: string, idx: number /*i64*/): Callable
        /** Returns the callback of the item accelerator at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_key_callback(menu_root: string, idx: number /*i64*/): Callable
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method global_menu_set_item_tag], which provides a simple way of assigning context data to items.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_tag(menu_root: string, idx: number /*i64*/): any
        /** Returns the text of the item at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_text(menu_root: string, idx: number /*i64*/): string
        /** Returns the submenu ID of the item at index [param idx]. See [method global_menu_add_submenu_item] for more info on how to add a submenu.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_submenu(menu_root: string, idx: number /*i64*/): string
        /** Returns the accelerator of the item at index [param idx]. Accelerators are special combinations of keys that activate the item, no matter which control is focused.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_accelerator(menu_root: string, idx: number /*i64*/): Key
        /** Returns [code]true[/code] if the item at index [param idx] is disabled. When it is disabled it can't be selected, or its action invoked.
         *  See [method global_menu_set_item_disabled] for more info on how to disable an item.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_is_item_disabled(menu_root: string, idx: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at index [param idx] is hidden.
         *  See [method global_menu_set_item_hidden] for more info on how to hide an item.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_is_item_hidden(menu_root: string, idx: number /*i64*/): boolean
        /** Returns the tooltip associated with the specified index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_tooltip(menu_root: string, idx: number /*i64*/): string
        /** Returns the state of a multistate item. See [method global_menu_add_multistate_item] for details.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_state(menu_root: string, idx: number /*i64*/): number /*i64*/
        /** Returns number of states of a multistate item. See [method global_menu_add_multistate_item] for details.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_max_states(menu_root: string, idx: number /*i64*/): number /*i64*/
        /** Returns the icon of the item at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_icon(menu_root: string, idx: number /*i64*/): Texture2D
        /** Returns the horizontal offset of the item at the given [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_indentation_level(menu_root: string, idx: number /*i64*/): number /*i64*/
        /** Sets the checkstate status of the item at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_checked(menu_root: string, idx: number /*i64*/, checked: boolean): void
        /** Sets whether the item at index [param idx] has a checkbox. If [code]false[/code], sets the type of the item to plain text.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_checkable(menu_root: string, idx: number /*i64*/, checkable: boolean): void
        /** Sets the type of the item at the specified index [param idx] to radio button. If [code]false[/code], sets the type of the item to plain text.
         *  [b]Note:[/b] This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_radio_checkable(menu_root: string, idx: number /*i64*/, checkable: boolean): void
        /** Sets the callback of the item at index [param idx]. Callback is emitted when an item is pressed.
         *  [b]Note:[/b] The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the [code]tag[/code] parameter when the menu item was created.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_callback(menu_root: string, idx: number /*i64*/, callback: Callable): void
        /** Sets the callback of the item at index [param idx]. The callback is emitted when an item is hovered.
         *  [b]Note:[/b] The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the [code]tag[/code] parameter when the menu item was created.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_hover_callbacks(menu_root: string, idx: number /*i64*/, callback: Callable): void
        /** Sets the callback of the item at index [param idx]. Callback is emitted when its accelerator is activated.
         *  [b]Note:[/b] The [param key_callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the [code]tag[/code] parameter when the menu item was created.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_key_callback(menu_root: string, idx: number /*i64*/, key_callback: Callable): void
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method global_menu_get_item_tag], which provides a simple way of assigning context data to items.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_tag(menu_root: string, idx: number /*i64*/, tag: any): void
        /** Sets the text of the item at index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_text(menu_root: string, idx: number /*i64*/, text: string): void
        /** Sets the submenu of the item at index [param idx]. The submenu is the ID of a global menu root that would be shown when the item is clicked.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_submenu(menu_root: string, idx: number /*i64*/, submenu: string): void
        /** Sets the accelerator of the item at index [param idx]. [param keycode] can be a single [enum Key], or a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]).
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_accelerator(menu_root: string, idx: number /*i64*/, keycode: Key): void
        /** Enables/disables the item at index [param idx]. When it is disabled, it can't be selected and its action can't be invoked.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_disabled(menu_root: string, idx: number /*i64*/, disabled: boolean): void
        /** Hides/shows the item at index [param idx]. When it is hidden, an item does not appear in a menu and its action cannot be invoked.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_hidden(menu_root: string, idx: number /*i64*/, hidden: boolean): void
        /** Sets the [String] tooltip of the item at the specified index [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_tooltip(menu_root: string, idx: number /*i64*/, tooltip: string): void
        /** Sets the state of a multistate item. See [method global_menu_add_multistate_item] for details.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_state(menu_root: string, idx: number /*i64*/, state: number /*i64*/): void
        /** Sets number of state of a multistate item. See [method global_menu_add_multistate_item] for details.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_max_states(menu_root: string, idx: number /*i64*/, max_states: number /*i64*/): void
        /** Replaces the [Texture2D] icon of the specified [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Note:[/b] This method is not supported by macOS "_dock" menu items.
         */
        static global_menu_set_item_icon(menu_root: string, idx: number /*i64*/, icon: Texture2D): void
        /** Sets the horizontal offset of the item at the given [param idx].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_set_item_indentation_level(menu_root: string, idx: number /*i64*/, level: number /*i64*/): void
        /** Returns number of items in the global menu with ID [param menu_root].
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_get_item_count(menu_root: string): number /*i64*/
        /** Removes the item at index [param idx] from the global menu [param menu_root].
         *  [b]Note:[/b] The indices of items after the removed item will be shifted by one.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static global_menu_remove_item(menu_root: string, idx: number /*i64*/): void
        /** Removes all items from the global menu with ID [param menu_root].
         *  [b]Note:[/b] This method is implemented only on macOS.
         *  [b]Supported system menu IDs:[/b]
         *  
         */
        static global_menu_clear(menu_root: string): void
        /** Returns [code]true[/code] if the synthesizer is generating speech, or have utterance waiting in the queue.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_is_speaking(): boolean
        /** Returns [code]true[/code] if the synthesizer is in a paused state.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_is_paused(): boolean
        /** Returns an [Array] of voice information dictionaries.
         *  Each [Dictionary] contains two [String] entries:
         *  - [code]name[/code] is voice name.
         *  - [code]id[/code] is voice identifier.
         *  - [code]language[/code] is language code in [code]lang_Variant[/code] format. The [code]lang[/code] part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The [code skip-lint]Variant[/code] part is an engine-dependent string describing country, region or/and dialect.
         *  Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_get_voices(): Array
        /** Returns an [PackedStringArray] of voice identifiers for the [param language].
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_get_voices_for_language(language: string): PackedStringArray
        /** Adds an utterance to the queue. If [param interrupt] is [code]true[/code], the queue is cleared first.
         *  - [param voice] identifier is one of the [code]"id"[/code] values returned by [method tts_get_voices] or one of the values returned by [method tts_get_voices_for_language].
         *  - [param volume] ranges from [code]0[/code] (lowest) to [code]100[/code] (highest).
         *  - [param pitch] ranges from [code]0.0[/code] (lowest) to [code]2.0[/code] (highest), [code]1.0[/code] is default pitch for the current voice.
         *  - [param rate] ranges from [code]0.1[/code] (lowest) to [code]10.0[/code] (highest), [code]1.0[/code] is a normal speaking rate. Other values act as a percentage relative.
         *  - [param utterance_id] is passed as a parameter to the callback functions.
         *  [b]Note:[/b] On Windows and Linux (X11), utterance [param text] can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling [method tts_speak].
         *  [b]Note:[/b] The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_speak(text: string, voice: string, volume: number /*i64*/ = 50, pitch: number /*f64*/ = 1, rate: number /*f64*/ = 1, utterance_id: number /*i64*/ = 0, interrupt: boolean = false): void
        /** Puts the synthesizer into a paused state.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_pause(): void
        /** Resumes the synthesizer if it was paused.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_resume(): void
        /** Stops synthesis in progress and removes all utterances from the queue.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_stop(): void
        /** Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.
         *  - [constant TTS_UTTERANCE_STARTED], [constant TTS_UTTERANCE_ENDED], and [constant TTS_UTTERANCE_CANCELED] callable's method should take one [int] parameter, the utterance ID.
         *  - [constant TTS_UTTERANCE_BOUNDARY] callable's method should take two [int] parameters, the index of the character and the utterance ID.
         *  [b]Note:[/b] The granularity of the boundary callbacks is engine dependent.
         *  [b]Note:[/b] This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] [member ProjectSettings.audio/general/text_to_speech] should be [code]true[/code] to use text-to-speech.
         */
        static tts_set_utterance_callback(event: DisplayServer.TTSUtteranceEvent, callable: Callable): void
        static _tts_post_utterance_event(event: DisplayServer.TTSUtteranceEvent, id: number /*i64*/, char_pos: number /*i64*/): void
        /** Returns [code]true[/code] if OS supports dark mode.
         *  [b]Note:[/b] This method is implemented on Android, iOS, macOS, Windows, and Linux (X11).
         */
        static is_dark_mode_supported(): boolean
        /** Returns [code]true[/code] if OS is using dark mode.
         *  [b]Note:[/b] This method is implemented on Android, iOS, macOS, Windows, and Linux (X11).
         */
        static is_dark_mode(): boolean
        /** Returns OS theme accent color. Returns [code]Color(0, 0, 0, 0)[/code], if accent color is unknown.
         *  [b]Note:[/b] This method is implemented on macOS and Windows.
         */
        static get_accent_color(): Color
        /** Sets the current mouse mode. See also [method mouse_get_mode]. */
        static mouse_set_mode(mouse_mode: DisplayServer.MouseMode): void
        /** Returns the current mouse mode. See also [method mouse_set_mode]. */
        static mouse_get_mode(): DisplayServer.MouseMode
        /** Sets the mouse cursor position to the given [param position] relative to an origin at the upper left corner of the currently focused game Window Manager window.
         *  [b]Note:[/b] [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
         */
        static warp_mouse(position: Vector2i): void
        /** Returns the mouse cursor's current position in screen coordinates. */
        static mouse_get_position(): Vector2i
        /** Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method Input.get_mouse_button_mask]. */
        static mouse_get_button_state(): MouseButtonMask
        /** Sets the user's clipboard content to the given string. */
        static clipboard_set(clipboard: string): void
        /** Returns the user's clipboard as a string if possible. */
        static clipboard_get(): string
        /** Returns the user's clipboard as an image if possible. */
        static clipboard_get_image(): Image
        /** Returns [code]true[/code] if there is a text content on the user's clipboard. */
        static clipboard_has(): boolean
        /** Returns [code]true[/code] if there is an image content on the user's clipboard. */
        static clipboard_has_image(): boolean
        /** Sets the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
         *  [b]Note:[/b] This method is only implemented on Linux (X11).
         */
        static clipboard_set_primary(clipboard_primary: string): void
        /** Returns the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
         *  [b]Note:[/b] This method is only implemented on Linux (X11).
         */
        static clipboard_get_primary(): string
        /** Returns an [Array] of [Rect2], each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also [method get_display_safe_area].
         *  [b]Note:[/b] Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.
         */
        static get_display_cutouts(): Array
        /** Returns the unobscured area of the display where interactive controls should be rendered. See also [method get_display_cutouts]. */
        static get_display_safe_area(): Rect2i
        /** Returns the number of displays available. */
        static get_screen_count(): number /*i64*/
        /** Returns index of the primary screen. */
        static get_primary_screen(): number /*i64*/
        /** Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window. */
        static get_keyboard_focus_screen(): number /*i64*/
        /** Returns index of the screen which contains specified rectangle. */
        static get_screen_from_rect(rect: Rect2): number /*i64*/
        /** Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
         *  
         *  See also [method screen_get_size].
         */
        static screen_get_position(screen: number /*i64*/ = -1): Vector2i
        /** Returns the screen's size in pixels. See also [method screen_get_position] and [method screen_get_usable_rect]. */
        static screen_get_size(screen: number /*i64*/ = -1): Vector2i
        /** Returns the portion of the screen that is not obstructed by a status bar in pixels. See also [method screen_get_size]. */
        static screen_get_usable_rect(screen: number /*i64*/ = -1): Rect2i
        /** Returns the dots per inch density of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.
         *  [b]Note:[/b] On macOS, returned value is inaccurate if fractional display scaling mode is used.
         *  [b]Note:[/b] On Android devices, the actual screen densities are grouped into six generalized densities:
         *  
         *  [b]Note:[/b] This method is implemented on Android, Linux (X11), macOS and Windows. Returns [code]72[/code] on unsupported platforms.
         */
        static screen_get_dpi(screen: number /*i64*/ = -1): number /*i64*/
        /** Returns the scale factor of the specified screen by index.
         *  [b]Note:[/b] On macOS returned value is [code]2.0[/code] for hiDPI (Retina) screen, and [code]1.0[/code] for all other cases.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static screen_get_scale(screen: number /*i64*/ = -1): number /*f64*/
        /** Returns [code]true[/code] if touch events are available (Android or iOS), the capability is detected on the Web platform or if [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is [code]true[/code]. */
        static is_touchscreen_available(): boolean
        /** Returns the greatest scale factor of all screens.
         *  [b]Note:[/b] On macOS returned value is [code]2.0[/code] if there is at least one hiDPI (Retina) screen in the system, and [code]1.0[/code] in all other cases.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static screen_get_max_scale(): number /*f64*/
        /** Returns the current refresh rate of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.
         *  [b]Note:[/b] Returns [code]-1.0[/code] if the DisplayServer fails to find the refresh rate for the specified screen. On Web, [method screen_get_refresh_rate] will always return [code]-1.0[/code] as there is no way to retrieve the refresh rate on that platform.
         *  To fallback to a default refresh rate if the method fails, try:
         *  
         */
        static screen_get_refresh_rate(screen: number /*i64*/ = -1): number /*f64*/
        /** Returns color of the display pixel at the [param position].
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
         */
        static screen_get_pixel(position: Vector2i): Color
        /** Returns screenshot of the [param screen].
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS, and Windows.
         *  [b]Note:[/b] On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
         */
        static screen_get_image(screen: number /*i64*/ = -1): Image
        /** Sets the [param screen]'s [param orientation]. See also [method screen_get_orientation].
         *  [b]Note:[/b] On iOS, this method has no effect if [member ProjectSettings.display/window/handheld/orientation] is not set to [constant SCREEN_SENSOR].
         */
        static screen_set_orientation(orientation: DisplayServer.ScreenOrientation, screen: number /*i64*/ = -1): void
        /** Returns the [param screen]'s current orientation. See also [method screen_set_orientation].
         *  [b]Note:[/b] This method is implemented on Android and iOS.
         */
        static screen_get_orientation(screen: number /*i64*/ = -1): DisplayServer.ScreenOrientation
        /** Sets whether the screen should never be turned off by the operating system's power-saving measures. See also [method screen_is_kept_on]. */
        static screen_set_keep_on(enable: boolean): void
        /** Returns [code]true[/code] if the screen should never be turned off by the operating system's power-saving measures. See also [method screen_set_keep_on]. */
        static screen_is_kept_on(): boolean
        /** Returns the list of Godot window IDs belonging to this process.
         *  [b]Note:[/b] Native dialogs are not included in this list.
         */
        static get_window_list(): PackedInt32Array
        /** Returns the ID of the window at the specified screen [param position] (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
         *  
         */
        static get_window_at_screen_position(position: Vector2i): number /*i64*/
        /** Returns internal structure pointers for use in plugins.
         *  [b]Note:[/b] This method is implemented on Android, Linux (X11), macOS and Windows.
         */
        static window_get_native_handle(handle_type: DisplayServer.HandleType, window_id: number /*i64*/ = 0): number /*i64*/
        /** Returns ID of the active popup window, or [constant INVALID_WINDOW_ID] if there is none. */
        static window_get_active_popup(): number /*i64*/
        /** Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup. */
        static window_set_popup_safe_rect(window: number /*i64*/, rect: Rect2i): void
        /** Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. */
        static window_get_popup_safe_rect(window: number /*i64*/): Rect2i
        /** Sets the title of the given window to [param title].
         *  [b]Note:[/b] It's recommended to change this value using [member Window.title] instead.
         *  [b]Note:[/b] Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.
         */
        static window_set_title(title: string, window_id: number /*i64*/ = 0): void
        /** Returns the estimated window title bar size (including text and window buttons) for the window specified by [param window_id] (in pixels). This method does not change the window title.
         *  [b]Note:[/b] This method is implemented on macOS and Windows.
         */
        static window_get_title_size(title: string, window_id: number /*i64*/ = 0): Vector2i
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
         *  
         *  [b]Note:[/b] On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static window_set_mouse_passthrough(region: PackedVector2Array, window_id: number /*i64*/ = 0): void
        /** Returns the screen the window specified by [param window_id] is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also [method window_set_current_screen]. */
        static window_get_current_screen(window_id: number /*i64*/ = 0): number /*i64*/
        /** Moves the window specified by [param window_id] to the specified [param screen]. See also [method window_get_current_screen]. */
        static window_set_current_screen(screen: number /*i64*/, window_id: number /*i64*/ = 0): void
        /** Returns the position of the client area of the given window on the screen. */
        static window_get_position(window_id: number /*i64*/ = 0): Vector2i
        /** Returns the position of the given window on the screen including the borders drawn by the operating system. See also [method window_get_position]. */
        static window_get_position_with_decorations(window_id: number /*i64*/ = 0): Vector2i
        /** Sets the position of the given window to [param position]. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
         *  
         *  See also [method window_get_position] and [method window_set_size].
         *  [b]Note:[/b] It's recommended to change this value using [member Window.position] instead.
         */
        static window_set_position(position: Vector2i, window_id: number /*i64*/ = 0): void
        /** Returns the size of the window specified by [param window_id] (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also [method window_get_size_with_decorations], [method window_set_size] and [method window_get_position]. */
        static window_get_size(window_id: number /*i64*/ = 0): Vector2i
        /** Sets the size of the given window to [param size] (in pixels). See also [method window_get_size] and [method window_get_position].
         *  [b]Note:[/b] It's recommended to change this value using [member Window.size] instead.
         */
        static window_set_size(size: Vector2i, window_id: number /*i64*/ = 0): void
        /** Sets the [param callback] that will be called when the window specified by [param window_id] is moved or resized.
         *  [b]Warning:[/b] Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
         */
        static window_set_rect_changed_callback(callback: Callable, window_id: number /*i64*/ = 0): void
        /** Sets the [param callback] that will be called when an event occurs in the window specified by [param window_id].
         *  [b]Warning:[/b] Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
         */
        static window_set_window_event_callback(callback: Callable, window_id: number /*i64*/ = 0): void
        /** Sets the [param callback] that should be called when any [InputEvent] is sent to the window specified by [param window_id].
         *  [b]Warning:[/b] Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
         */
        static window_set_input_event_callback(callback: Callable, window_id: number /*i64*/ = 0): void
        /** Sets the [param callback] that should be called when text is entered using the virtual keyboard to the window specified by [param window_id].
         *  [b]Warning:[/b] Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
         */
        static window_set_input_text_callback(callback: Callable, window_id: number /*i64*/ = 0): void
        /** Sets the [param callback] that should be called when files are dropped from the operating system's file manager to the window specified by [param window_id].
         *  [b]Warning:[/b] Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
         *  [b]Note:[/b] This method is implemented on Windows, macOS, Linux (X11) and Web.
         */
        static window_set_drop_files_callback(callback: Callable, window_id: number /*i64*/ = 0): void
        /** Returns the [method Object.get_instance_id] of the [Window] the [param window_id] is attached to. */
        static window_get_attached_instance_id(window_id: number /*i64*/ = 0): number /*i64*/
        /** Returns the window's maximum size (in pixels). See also [method window_set_max_size]. */
        static window_get_max_size(window_id: number /*i64*/ = 0): Vector2i
        /** Sets the maximum size of the window specified by [param window_id] in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also [method window_get_max_size].
         *  [b]Note:[/b] It's recommended to change this value using [member Window.max_size] instead.
         *  [b]Note:[/b] Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
         */
        static window_set_max_size(max_size: Vector2i, window_id: number /*i64*/ = 0): void
        /** Returns the window's minimum size (in pixels). See also [method window_set_min_size]. */
        static window_get_min_size(window_id: number /*i64*/ = 0): Vector2i
        /** Sets the minimum size for the given window to [param min_size] (in pixels). Normally, the user will not be able to drag the window to make it larger than the specified size. See also [method window_get_min_size].
         *  [b]Note:[/b] It's recommended to change this value using [member Window.min_size] instead.
         *  [b]Note:[/b] By default, the main window has a minimum size of [code]Vector2i(64, 64)[/code]. This prevents issues that can arise when the window is resized to a near-zero size.
         *  [b]Note:[/b] Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
         */
        static window_set_min_size(min_size: Vector2i, window_id: number /*i64*/ = 0): void
        /** Returns the size of the window specified by [param window_id] (in pixels), including the borders drawn by the operating system. See also [method window_get_size]. */
        static window_get_size_with_decorations(window_id: number /*i64*/ = 0): Vector2i
        /** Returns the mode of the given window. */
        static window_get_mode(window_id: number /*i64*/ = 0): DisplayServer.WindowMode
        /** Sets window mode for the given window to [param mode]. See [enum WindowMode] for possible values and how each mode behaves.
         *  [b]Note:[/b] Setting the window to full screen forcibly sets the borderless flag to [code]true[/code], so make sure to set it back to [code]false[/code] when not wanted.
         */
        static window_set_mode(mode: DisplayServer.WindowMode, window_id: number /*i64*/ = 0): void
        /** Enables or disables the given window's given [param flag]. See [enum WindowFlags] for possible values and their behavior. */
        static window_set_flag(flag: DisplayServer.WindowFlags, enabled: boolean, window_id: number /*i64*/ = 0): void
        /** Returns the current value of the given window's [param flag]. */
        static window_get_flag(flag: DisplayServer.WindowFlags, window_id: number /*i64*/ = 0): boolean
        /** When [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set, set offset to the center of the first titlebar button.
         *  [b]Note:[/b] This flag is implemented only on macOS.
         */
        static window_set_window_buttons_offset(offset: Vector2i, window_id: number /*i64*/ = 0): void
        /** Returns left margins ([code]x[/code]), right margins ([code]y[/code]) and height ([code]z[/code]) of the title that are safe to use (contains no buttons or other elements) when [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set. */
        static window_get_safe_title_margins(window_id: number /*i64*/ = 0): Vector3i
        /** Makes the window specified by [param window_id] request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system. */
        static window_request_attention(window_id: number /*i64*/ = 0): void
        /** Moves the window specified by [param window_id] to the foreground, so that it is visible over other windows. */
        static window_move_to_foreground(window_id: number /*i64*/ = 0): void
        /** Returns [code]true[/code] if the window specified by [param window_id] is focused. */
        static window_is_focused(window_id: number /*i64*/ = 0): boolean
        /** Returns [code]true[/code] if anything can be drawn in the window specified by [param window_id], [code]false[/code] otherwise. Using the [code]--disable-render-loop[/code] command line argument or a headless build will return [code]false[/code]. */
        static window_can_draw(window_id: number /*i64*/ = 0): boolean
        /** Sets window transient parent. Transient window is will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
         *  [b]Note:[/b] It's recommended to change this value using [member Window.transient] instead.
         *  [b]Note:[/b] The behavior might be different depending on the platform.
         */
        static window_set_transient(window_id: number /*i64*/, parent_window_id: number /*i64*/): void
        /** If set to [code]true[/code], this window will always stay on top of its parent window, parent window will ignore input while this window is opened.
         *  [b]Note:[/b] On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.
         *  [b]Note:[/b] This method is implemented on macOS and Windows.
         */
        static window_set_exclusive(window_id: number /*i64*/, exclusive: boolean): void
        /** Sets whether [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] should be enabled for the window specified by [param window_id]. See also [method window_set_ime_position]. */
        static window_set_ime_active(active: boolean, window_id: number /*i64*/ = 0): void
        /** Sets the position of the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] popup for the specified [param window_id]. Only effective if [method window_set_ime_active] was set to [code]true[/code] for the specified [param window_id]. */
        static window_set_ime_position(position: Vector2i, window_id: number /*i64*/ = 0): void
        /** Sets the V-Sync mode of the given window. See also [member ProjectSettings.display/window/vsync/vsync_mode].
         *  See [enum DisplayServer.VSyncMode] for possible values and how they affect the behavior of your application.
         *  Depending on the platform and used renderer, the engine will fall back to [constant VSYNC_ENABLED] if the desired mode is not supported.
         *  [b]Note:[/b] V-Sync modes other than [constant VSYNC_ENABLED] are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
         */
        static window_set_vsync_mode(vsync_mode: DisplayServer.VSyncMode, window_id: number /*i64*/ = 0): void
        /** Returns the V-Sync mode of the given window. */
        static window_get_vsync_mode(window_id: number /*i64*/ = 0): DisplayServer.VSyncMode
        /** Returns [code]true[/code] if the given window can be maximized (the maximize button is enabled). */
        static window_is_maximize_allowed(window_id: number /*i64*/ = 0): boolean
        /** Returns [code]true[/code], if double-click on a window title should maximize it.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static window_maximize_on_title_dbl_click(): boolean
        /** Returns [code]true[/code], if double-click on a window title should minimize it.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static window_minimize_on_title_dbl_click(): boolean
        /** Returns the text selection in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] composition string, with the [Vector2i]'s [code]x[/code] component being the caret position and [code]y[/code] being the length of the selection.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static ime_get_selection(): Vector2i
        /** Returns the composition string contained within the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] window.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static ime_get_text(): string
        /** Shows the virtual keyboard if the platform has one.
         *  [param existing_text] parameter is useful for implementing your own [LineEdit] or [TextEdit], as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).
         *  [param position] parameter is the screen space [Rect2] of the edited text.
         *  [param type] parameter allows configuring which type of virtual keyboard to show.
         *  [param max_length] limits the number of characters that can be entered if different from [code]-1[/code].
         *  [param cursor_start] can optionally define the current text cursor position if [param cursor_end] is not set.
         *  [param cursor_start] and [param cursor_end] can optionally define the current text selection.
         *  [b]Note:[/b] This method is implemented on Android, iOS and Web.
         */
        static virtual_keyboard_show(existing_text: string, position: Rect2 = <any> {} /*compound.type from 7([object Object])*/, type: DisplayServer.VirtualKeyboardType = 0, max_length: number /*i64*/ = -1, cursor_start: number /*i64*/ = -1, cursor_end: number /*i64*/ = -1): void
        /** Hides the virtual keyboard if it is shown, does nothing otherwise. */
        static virtual_keyboard_hide(): void
        /** Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden. */
        static virtual_keyboard_get_height(): number /*i64*/
        /** Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also [method cursor_get_shape] and [method cursor_set_custom_image]. */
        static cursor_set_shape(shape: DisplayServer.CursorShape): void
        /** Returns the default mouse cursor shape set by [method cursor_set_shape]. */
        static cursor_get_shape(): DisplayServer.CursorShape
        /** Sets a custom mouse cursor image for the defined [param shape]. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance. The image must be [code]256x256[/code] or smaller for correct appearance. [param hotspot] can optionally be set to define the area where the cursor will click. By default, [param hotspot] is set to [code]Vector2(0, 0)[/code], which is the top-left corner of the image. See also [method cursor_set_shape]. */
        static cursor_set_custom_image(cursor: Resource, shape: DisplayServer.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        /** Returns [code]true[/code] if positions of [b]OK[/b] and [b]Cancel[/b] buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing [member ProjectSettings.gui/common/swap_cancel_ok].
         *  [b]Note:[/b] This doesn't affect native dialogs such as the ones spawned by [method DisplayServer.dialog_show].
         */
        static get_swap_cancel_ok(): boolean
        /** Allows the [param process_id] PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.
         *  [b]Note:[/b] This method is implemented only on Windows.
         */
        static enable_for_stealing_focus(process_id: number /*i64*/): void
        /** Shows a text dialog which uses the operating system's native look-and-feel. [param callback] will be called when the dialog is closed for any reason.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static dialog_show(title: string, description: string, buttons: PackedStringArray, callback: Callable): GodotError
        /** Shows a text input dialog which uses the operating system's native look-and-feel. [param callback] will be called with a [String] argument equal to the text field's contents when the dialog is closed for any reason.
         *  [b]Note:[/b] This method is implemented only on macOS.
         */
        static dialog_input_text(title: string, description: string, existing_text: string, callback: Callable): GodotError
        /** Displays OS native dialog for selecting files or directories in the file system.
         *  Callbacks have the following arguments: [code]bool status, PackedStringArray selected_paths, int selected_filter_index[/code].
         *  [b]Note:[/b] This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG] feature.
         *  [b]Note:[/b] This method is implemented on Linux, Windows and macOS.
         *  [b]Note:[/b] [param current_directory] might be ignored.
         *  [b]Note:[/b] On Linux, [param show_hidden] is ignored.
         *  [b]Note:[/b] On macOS, native file dialogs have no title.
         *  [b]Note:[/b] On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.
         */
        static file_dialog_show(title: string, current_directory: string, filename: string, show_hidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray, callback: Callable): GodotError
        /** Returns the number of keyboard layouts.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_layout_count(): number /*i64*/
        /** Returns active keyboard layout index.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_current_layout(): number /*i64*/
        /** Sets the active keyboard layout.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_set_current_layout(index: number /*i64*/): void
        /** Returns the ISO-639/BCP-47 language code of the keyboard layout at position [param index].
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_layout_language(index: number /*i64*/): string
        /** Returns the localized name of the keyboard layout at position [param index].
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_layout_name(index: number /*i64*/): string
        /** Converts a physical (US QWERTY) [param keycode] to one in the active keyboard layout.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_keycode_from_physical(keycode: Key): Key
        /** Converts a physical (US QWERTY) [param keycode] to localized label printed on the key in the active keyboard layout.
         *  [b]Note:[/b] This method is implemented on Linux (X11), macOS and Windows.
         */
        static keyboard_get_label_from_physical(keycode: Key): Key
        /** Perform window manager processing, including input flushing. See also [method force_process_and_drop_events], [method Input.flush_buffered_events] and [member Input.use_accumulated_input]. */
        static process_events(): void
        /** Forces window manager processing while ignoring all [InputEvent]s. See also [method process_events].
         *  [b]Note:[/b] This method is implemented on Windows and macOS.
         */
        static force_process_and_drop_events(): void
        /** Sets the window icon (usually displayed in the top-left corner) in the operating system's [i]native[/i] format. The file at [param filename] must be in [code].ico[/code] format on Windows or [code].icns[/code] on macOS. By using specially crafted [code].ico[/code] or [code].icns[/code] icons, [method set_native_icon] allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use [method set_icon] instead. */
        static set_native_icon(filename: string): void
        /** Sets the window icon (usually displayed in the top-left corner) with an [Image]. To use icons in the operating system's native format, use [method set_native_icon] instead. */
        static set_icon(image: Image): void
        /** Returns the total number of available tablet drivers.
         *  [b]Note:[/b] This method is implemented only on Windows.
         */
        static tablet_get_driver_count(): number /*i64*/
        /** Returns the tablet driver name for the given index.
         *  [b]Note:[/b] This method is implemented only on Windows.
         */
        static tablet_get_driver_name(idx: number /*i64*/): string
        /** Returns current active tablet driver name.
         *  [b]Note:[/b] This method is implemented only on Windows.
         */
        static tablet_get_current_driver(): string
        /** Set active tablet driver name.
         *  [b]Note:[/b] This method is implemented only on Windows.
         */
        static tablet_set_current_driver(name: string): void
    }
    // // Singleton Class
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
    /** Server for anything visible. */
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
        /** Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]texture_2d_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [Texture2D].
         *  [b]Note:[/b] Not to be confused with [method RenderingDevice.texture_create], which creates the graphics API's own texture type as opposed to the Godot-specific [Texture2D] resource.
         */
        static texture_2d_create(image: Image): RID
        /** Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]texture_2d_layered_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [TextureLayered].
         */
        static texture_2d_layered_create(layers: Array, layered_type: RenderingServer.TextureLayeredType): RID
        /** [b]Note:[/b] The equivalent resource is [Texture3D]. */
        static texture_3d_create(format: Image.Format, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, mipmaps: boolean, data: Array): RID
        /** [i]Deprecated.[/i] ProxyTexture was removed in Godot 4, so this method does nothing when called and always returns a null [RID]. */
        static texture_proxy_create(base: RID): RID
        /** Updates the texture specified by the [param texture] [RID] with the data in [param image]. A [param layer] must also be specified, which should be [code]0[/code] when updating a single-layer texture ([Texture2D]).
         *  [b]Note:[/b] The [param image] must have the same width, height and format as the current [param texture] data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use [method texture_replace] instead.
         */
        static texture_2d_update(texture: RID, image: Image, layer: number /*i64*/): void
        /** Updates the texture specified by the [param texture] [RID]'s data with the data in [param data]. All the texture's layers must be replaced at once.
         *  [b]Note:[/b] The [param texture] must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use [method texture_replace] instead.
         */
        static texture_3d_update(texture: RID, data: Array): void
        /** [i]Deprecated.[/i] ProxyTexture was removed in Godot 4, so this method cannot be used anymore. */
        static texture_proxy_update(texture: RID, proxy_to: RID): void
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]texture_2d_layered_*[/code] RenderingServer functions, although it does nothing when used. See also [method texture_2d_layered_placeholder_create]
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [PlaceholderTexture2D].
         */
        static texture_2d_placeholder_create(): RID
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]texture_2d_layered_*[/code] RenderingServer functions, although it does nothing when used. See also [method texture_2d_placeholder_create].
         *  [b]Note:[/b] The equivalent resource is [PlaceholderTextureLayered].
         */
        static texture_2d_layered_placeholder_create(layered_type: RenderingServer.TextureLayeredType): RID
        /** Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]texture_3d_*[/code] RenderingServer functions, although it does nothing when used.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [PlaceholderTexture3D].
         */
        static texture_3d_placeholder_create(): RID
        /** Returns an [Image] instance from the given [param texture] [RID].
         *  Example of getting the test texture from [method get_test_texture] and applying it to a [Sprite2D] node:
         *  
         */
        static texture_2d_get(texture: RID): Image
        /** Returns an [Image] instance from the given [param texture] [RID] and [param layer]. */
        static texture_2d_layer_get(texture: RID, layer: number /*i64*/): Image
        /** Returns 3D texture data as an array of [Image]s for the specified texture [RID]. */
        static texture_3d_get(texture: RID): Array
        /** Replaces [param texture]'s texture data by the texture specified by the [param by_texture] RID, without changing [param texture]'s RID. */
        static texture_replace(texture: RID, by_texture: RID): void
        static texture_set_size_override(texture: RID, width: number /*i64*/, height: number /*i64*/): void
        static texture_set_path(texture: RID, path: string): void
        static texture_get_path(texture: RID): string
        /** Returns the [enum Image.Format] for the texture. */
        static texture_get_format(texture: RID): Image.Format
        static texture_set_force_redraw_if_visible(texture: RID, enable: boolean): void
        /** Creates a new texture object based on a texture created directly on the [RenderingDevice]. If the texture contains layers, [param layer_type] is used to define the layer type. */
        static texture_rd_create(rd_texture: RID, layer_type: RenderingServer.TextureLayeredType = 0): RID
        /** Returns a texture [RID] that can be used with [RenderingDevice]. */
        static texture_get_rd_texture(texture: RID, srgb: boolean = false): RID
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
         *  [b]Note:[/b] This function returns a [code]uint64_t[/code] which internally maps to a [code]GLuint[/code] (OpenGL) or [code]VkImage[/code] (Vulkan).
         */
        static texture_get_native_handle(texture: RID, srgb: boolean = false): number /*i64*/
        /** Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]shader_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [Shader].
         */
        static shader_create(): RID
        /** Sets the shader's source code (which triggers recompilation after being changed). */
        static shader_set_code(shader: RID, code: string): void
        /** Sets the path hint for the specified shader. This should generally match the [Shader] resource's [member Resource.resource_path]. */
        static shader_set_path_hint(shader: RID, path: string): void
        /** Returns a shader's source code as a string. */
        static shader_get_code(shader: RID): string
        /** Returns the parameters of a shader. */
        static get_shader_parameter_list(shader: RID): Array
        /** Returns the default value for the specified shader uniform. This is usually the value written in the shader source code. */
        static shader_get_parameter_default(shader: RID, name: StringName): any
        /** Sets a shader's default texture. Overwrites the texture given by name.
         *  [b]Note:[/b] If the sampler array is used use [param index] to access the specified texture.
         */
        static shader_set_default_texture_parameter(shader: RID, name: StringName, texture: RID, index: number /*i64*/ = 0): void
        /** Returns a default texture from a shader searched by name.
         *  [b]Note:[/b] If the sampler array is used use [param index] to access the specified texture.
         */
        static shader_get_default_texture_parameter(shader: RID, name: StringName, index: number /*i64*/ = 0): RID
        /** Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]material_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [Material].
         */
        static material_create(): RID
        /** Sets a shader material's shader. */
        static material_set_shader(shader_material: RID, shader: RID): void
        /** Sets a material's parameter. */
        static material_set_param(material: RID, parameter: StringName, value: any): void
        /** Returns the value of a certain material's parameter. */
        static material_get_param(material: RID, parameter: StringName): any
        /** Sets a material's render priority. */
        static material_set_render_priority(material: RID, priority: number /*i64*/): void
        /** Sets an object's next material. */
        static material_set_next_pass(material: RID, next_material: RID): void
        static mesh_create_from_surfaces(surfaces: Array, blend_shape_count: number /*i64*/ = 0): RID
        /** Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]mesh_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent resource is [Mesh].
         */
        static mesh_create(): RID
        /** Returns the offset of a given attribute by [param array_index] in the start of its respective buffer. */
        static mesh_surface_get_format_offset(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/, array_index: number /*i64*/): number /*i64*/
        /** Returns the stride of the vertex positions for a mesh with given [param format]. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents). */
        static mesh_surface_get_format_vertex_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        /** Returns the stride of the combined normals and tangents for a mesh with given [param format]. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions. */
        static mesh_surface_get_format_normal_tangent_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        /** Returns the stride of the attribute buffer for a mesh with given [param format]. */
        static mesh_surface_get_format_attribute_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        /** Returns the stride of the skin buffer for a mesh with given [param format]. */
        static mesh_surface_get_format_skin_stride(format: RenderingServer.ArrayFormat, vertex_count: number /*i64*/): number /*i64*/
        static mesh_add_surface(mesh: RID, surface: Dictionary): void
        static mesh_add_surface_from_arrays(mesh: RID, primitive: RenderingServer.PrimitiveType, arrays: Array, blend_shapes: Array = <any> {} /*compound.type from 28([object Object])*/, lods: Dictionary = <any> {} /*compound.type from 27([object Object])*/, compress_format: RenderingServer.ArrayFormat = 0): void
        /** Returns a mesh's blend shape count. */
        static mesh_get_blend_shape_count(mesh: RID): number /*i64*/
        /** Sets a mesh's blend shape mode. */
        static mesh_set_blend_shape_mode(mesh: RID, mode: RenderingServer.BlendShapeMode): void
        /** Returns a mesh's blend shape mode. */
        static mesh_get_blend_shape_mode(mesh: RID): RenderingServer.BlendShapeMode
        /** Sets a mesh's surface's material. */
        static mesh_surface_set_material(mesh: RID, surface: number /*i64*/, material: RID): void
        /** Returns a mesh's surface's material. */
        static mesh_surface_get_material(mesh: RID, surface: number /*i64*/): RID
        static mesh_get_surface(mesh: RID, surface: number /*i64*/): Dictionary
        /** Returns a mesh's surface's buffer arrays. */
        static mesh_surface_get_arrays(mesh: RID, surface: number /*i64*/): Array
        /** Returns a mesh's surface's arrays for blend shapes. */
        static mesh_surface_get_blend_shape_arrays(mesh: RID, surface: number /*i64*/): Array
        /** Returns a mesh's number of surfaces. */
        static mesh_get_surface_count(mesh: RID): number /*i64*/
        /** Sets a mesh's custom aabb. */
        static mesh_set_custom_aabb(mesh: RID, aabb: AABB): void
        /** Returns a mesh's custom aabb. */
        static mesh_get_custom_aabb(mesh: RID): AABB
        /** Removes all surfaces from a mesh. */
        static mesh_clear(mesh: RID): void
        static mesh_surface_update_vertex_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_surface_update_attribute_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_surface_update_skin_region(mesh: RID, surface: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        static mesh_set_shadow_mesh(mesh: RID, shadow_mesh: RID): void
        /** Creates a new multimesh on the RenderingServer and returns an [RID] handle. This RID will be used in all [code]multimesh_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this multimesh to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent resource is [MultiMesh].
         */
        static multimesh_create(): RID
        static multimesh_allocate_data(multimesh: RID, instances: number /*i64*/, transform_format: RenderingServer.MultimeshTransformFormat, color_format: boolean = false, custom_data_format: boolean = false): void
        /** Returns the number of instances allocated for this multimesh. */
        static multimesh_get_instance_count(multimesh: RID): number /*i64*/
        /** Sets the mesh to be drawn by the multimesh. Equivalent to [member MultiMesh.mesh]. */
        static multimesh_set_mesh(multimesh: RID, mesh: RID): void
        /** Sets the [Transform3D] for this instance. Equivalent to [method MultiMesh.set_instance_transform]. */
        static multimesh_instance_set_transform(multimesh: RID, index: number /*i64*/, transform: Transform3D): void
        /** Sets the [Transform2D] for this instance. For use when multimesh is used in 2D. Equivalent to [method MultiMesh.set_instance_transform_2d]. */
        static multimesh_instance_set_transform_2d(multimesh: RID, index: number /*i64*/, transform: Transform2D): void
        /** Sets the color by which this instance will be modulated. Equivalent to [method MultiMesh.set_instance_color]. */
        static multimesh_instance_set_color(multimesh: RID, index: number /*i64*/, color: Color): void
        /** Sets the custom data for this instance. Custom data is passed as a [Color], but is interpreted as a [code]vec4[/code] in the shader. Equivalent to [method MultiMesh.set_instance_custom_data]. */
        static multimesh_instance_set_custom_data(multimesh: RID, index: number /*i64*/, custom_data: Color): void
        /** Returns the RID of the mesh that will be used in drawing this multimesh. */
        static multimesh_get_mesh(multimesh: RID): RID
        /** Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh. */
        static multimesh_get_aabb(multimesh: RID): AABB
        /** Returns the [Transform3D] of the specified instance. */
        static multimesh_instance_get_transform(multimesh: RID, index: number /*i64*/): Transform3D
        /** Returns the [Transform2D] of the specified instance. For use when the multimesh is set to use 2D transforms. */
        static multimesh_instance_get_transform_2d(multimesh: RID, index: number /*i64*/): Transform2D
        /** Returns the color by which the specified instance will be modulated. */
        static multimesh_instance_get_color(multimesh: RID, index: number /*i64*/): Color
        /** Returns the custom data associated with the specified instance. */
        static multimesh_instance_get_custom_data(multimesh: RID, index: number /*i64*/): Color
        /** Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to [member MultiMesh.visible_instance_count]. */
        static multimesh_set_visible_instances(multimesh: RID, visible: number /*i64*/): void
        /** Returns the number of visible instances for this multimesh. */
        static multimesh_get_visible_instances(multimesh: RID): number /*i64*/
        /** Set the entire data to use for drawing the [param multimesh] at once to [param buffer] (such as instance transforms and colors). [param buffer]'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also [method multimesh_get_buffer].
         *  The per-instance data size and expected data order is:
         *  
         */
        static multimesh_set_buffer(multimesh: RID, buffer: PackedFloat32Array): void
        /** Returns the MultiMesh data (such as instance transforms, colors, etc). See [method multimesh_set_buffer] for a description of the returned data.
         *  [b]Note:[/b] If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means [method multimesh_get_buffer] is potentially a slow operation and should be avoided whenever possible.
         */
        static multimesh_get_buffer(multimesh: RID): PackedFloat32Array
        /** Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]skeleton_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         */
        static skeleton_create(): RID
        static skeleton_allocate_data(skeleton: RID, bones: number /*i64*/, is_2d_skeleton: boolean = false): void
        /** Returns the number of bones allocated for this skeleton. */
        static skeleton_get_bone_count(skeleton: RID): number /*i64*/
        /** Sets the [Transform3D] for a specific bone of this skeleton. */
        static skeleton_bone_set_transform(skeleton: RID, bone: number /*i64*/, transform: Transform3D): void
        /** Returns the [Transform3D] set for a specific bone of this skeleton. */
        static skeleton_bone_get_transform(skeleton: RID, bone: number /*i64*/): Transform3D
        /** Sets the [Transform2D] for a specific bone of this skeleton. */
        static skeleton_bone_set_transform_2d(skeleton: RID, bone: number /*i64*/, transform: Transform2D): void
        /** Returns the [Transform2D] set for a specific bone of this skeleton. */
        static skeleton_bone_get_transform_2d(skeleton: RID, bone: number /*i64*/): Transform2D
        static skeleton_set_base_transform_2d(skeleton: RID, base_transform: Transform2D): void
        /** Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most [code]light_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this directional light to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent node is [DirectionalLight3D].
         */
        static directional_light_create(): RID
        /** Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most [code]light_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this omni light to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent node is [OmniLight3D].
         */
        static omni_light_create(): RID
        /** Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most [code]light_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this spot light to an instance using [method instance_set_base] using the returned RID.
         */
        static spot_light_create(): RID
        /** Sets the color of the light. Equivalent to [member Light3D.light_color]. */
        static light_set_color(light: RID, color: Color): void
        /** Sets the specified 3D light parameter. See [enum LightParam] for options. Equivalent to [method Light3D.set_param]. */
        static light_set_param(light: RID, param: RenderingServer.LightParam, value: number /*f64*/): void
        /** If [code]true[/code], light will cast shadows. Equivalent to [member Light3D.shadow_enabled]. */
        static light_set_shadow(light: RID, enabled: boolean): void
        /** Sets the projector texture to use for the specified 3D light. Equivalent to [member Light3D.light_projector]. */
        static light_set_projector(light: RID, texture: RID): void
        /** If [code]true[/code], the 3D light will subtract light instead of adding light. Equivalent to [member Light3D.light_negative]. */
        static light_set_negative(light: RID, enable: boolean): void
        /** Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to [member Light3D.light_cull_mask]. */
        static light_set_cull_mask(light: RID, mask: number /*i64*/): void
        /** Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to [member Light3D.distance_fade_enabled], [member Light3D.distance_fade_begin], [member Light3D.distance_fade_shadow], and [member Light3D.distance_fade_length]. */
        static light_set_distance_fade(decal: RID, enabled: boolean, begin: number /*f64*/, shadow: number /*f64*/, length: number /*f64*/): void
        /** If [code]true[/code], reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [method instance_geometry_set_cast_shadows_setting]. Equivalent to [member Light3D.shadow_reverse_cull_face]. */
        static light_set_reverse_cull_face_mode(light: RID, enabled: boolean): void
        /** Sets the bake mode to use for the specified 3D light. Equivalent to [member Light3D.light_bake_mode]. */
        static light_set_bake_mode(light: RID, bake_mode: RenderingServer.LightBakeMode): void
        /** Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera. */
        static light_set_max_sdfgi_cascade(light: RID, cascade: number /*i64*/): void
        /** Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to [member OmniLight3D.omni_shadow_mode]. */
        static light_omni_set_shadow_mode(light: RID, mode: RenderingServer.LightOmniShadowMode): void
        /** Sets the shadow mode for this directional light. Equivalent to [member DirectionalLight3D.directional_shadow_mode]. See [enum LightDirectionalShadowMode] for options. */
        static light_directional_set_shadow_mode(light: RID, mode: RenderingServer.LightDirectionalShadowMode): void
        /** If [code]true[/code], this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to [member DirectionalLight3D.directional_shadow_blend_splits]. */
        static light_directional_set_blend_splits(light: RID, enable: boolean): void
        /** If [code]true[/code], this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon. */
        static light_directional_set_sky_mode(light: RID, mode: RenderingServer.LightDirectionalSkyMode): void
        /** Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis. */
        static light_projectors_set_filter(filter: RenderingServer.LightProjectorFilter): void
        /** Sets the filter quality for omni and spot light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static positional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        /** Sets the filter [param quality] for directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static directional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        /** Sets the [param size] of the directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/size]. This parameter is global and cannot be set on a per-viewport basis. */
        static directional_shadow_atlas_set_size(size: number /*i64*/, is_16bits: boolean): void
        /** Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]reflection_probe_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this reflection probe to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent node is [ReflectionProbe].
         */
        static reflection_probe_create(): RID
        /** Sets how often the reflection probe updates. Can either be once or every frame. See [enum ReflectionProbeUpdateMode] for options. */
        static reflection_probe_set_update_mode(probe: RID, mode: RenderingServer.ReflectionProbeUpdateMode): void
        /** Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to [member ReflectionProbe.intensity]. */
        static reflection_probe_set_intensity(probe: RID, intensity: number /*f64*/): void
        /** Sets the reflection probe's ambient light mode. Equivalent to [member ReflectionProbe.ambient_mode]. */
        static reflection_probe_set_ambient_mode(probe: RID, mode: RenderingServer.ReflectionProbeAmbientMode): void
        /** Sets the reflection probe's custom ambient light color. Equivalent to [member ReflectionProbe.ambient_color]. */
        static reflection_probe_set_ambient_color(probe: RID, color: Color): void
        /** Sets the reflection probe's custom ambient light energy. Equivalent to [member ReflectionProbe.ambient_color_energy]. */
        static reflection_probe_set_ambient_energy(probe: RID, energy: number /*f64*/): void
        /** Sets the max distance away from the probe an object can be before it is culled. Equivalent to [member ReflectionProbe.max_distance]. */
        static reflection_probe_set_max_distance(probe: RID, distance: number /*f64*/): void
        /** Sets the size of the area that the reflection probe will capture. Equivalent to [member ReflectionProbe.size]. */
        static reflection_probe_set_size(probe: RID, size: Vector3): void
        /** Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to [member ReflectionProbe.origin_offset]. */
        static reflection_probe_set_origin_offset(probe: RID, offset: Vector3): void
        /** If [code]true[/code], reflections will ignore sky contribution. Equivalent to [member ReflectionProbe.interior]. */
        static reflection_probe_set_as_interior(probe: RID, enable: boolean): void
        /** If [code]true[/code], uses box projection. This can make reflections look more correct in certain situations. Equivalent to [member ReflectionProbe.box_projection]. */
        static reflection_probe_set_enable_box_projection(probe: RID, enable: boolean): void
        /** If [code]true[/code], computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to [member ReflectionProbe.enable_shadows]. */
        static reflection_probe_set_enable_shadows(probe: RID, enable: boolean): void
        /** Sets the render cull mask for this reflection probe. Only instances with a matching cull mask will be rendered by this probe. Equivalent to [member ReflectionProbe.cull_mask]. */
        static reflection_probe_set_cull_mask(probe: RID, layers: number /*i64*/): void
        /** Sets the resolution to use when rendering the specified reflection probe. The [param resolution] is specified for each cubemap face: for instance, specifying [code]512[/code] will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels). */
        static reflection_probe_set_resolution(probe: RID, resolution: number /*i64*/): void
        /** Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to [member ReflectionProbe.mesh_lod_threshold]. */
        static reflection_probe_set_mesh_lod_threshold(probe: RID, pixels: number /*f64*/): void
        /** Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]decal_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this decal to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent node is [Decal].
         */
        static decal_create(): RID
        /** Sets the [param size] of the decal specified by the [param decal] RID. Equivalent to [member Decal.size]. */
        static decal_set_size(decal: RID, size: Vector3): void
        /** Sets the [param texture] in the given texture [param type] slot for the specified decal. Equivalent to [method Decal.set_texture]. */
        static decal_set_texture(decal: RID, type: RenderingServer.DecalTexture, texture: RID): void
        /** Sets the emission [param energy] in the decal specified by the [param decal] RID. Equivalent to [member Decal.emission_energy]. */
        static decal_set_emission_energy(decal: RID, energy: number /*f64*/): void
        /** Sets the [param albedo_mix] in the decal specified by the [param decal] RID. Equivalent to [member Decal.albedo_mix]. */
        static decal_set_albedo_mix(decal: RID, albedo_mix: number /*f64*/): void
        /** Sets the color multiplier in the decal specified by the [param decal] RID to [param color]. Equivalent to [member Decal.modulate]. */
        static decal_set_modulate(decal: RID, color: Color): void
        /** Sets the cull [param mask] in the decal specified by the [param decal] RID. Equivalent to [member Decal.cull_mask]. */
        static decal_set_cull_mask(decal: RID, mask: number /*i64*/): void
        /** Sets the distance fade parameters in the decal specified by the [param decal] RID. Equivalent to [member Decal.distance_fade_enabled], [member Decal.distance_fade_begin] and [member Decal.distance_fade_length]. */
        static decal_set_distance_fade(decal: RID, enabled: boolean, begin: number /*f64*/, length: number /*f64*/): void
        /** Sets the upper fade ([param above]) and lower fade ([param below]) in the decal specified by the [param decal] RID. Equivalent to [member Decal.upper_fade] and [member Decal.lower_fade]. */
        static decal_set_fade(decal: RID, above: number /*f64*/, below: number /*f64*/): void
        /** Sets the normal [param fade] in the decal specified by the [param decal] RID. Equivalent to [member Decal.normal_fade]. */
        static decal_set_normal_fade(decal: RID, fade: number /*f64*/): void
        /** Sets the texture [param filter] mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis. */
        static decals_set_filter(filter: RenderingServer.DecalFilter): void
        /** If [param half_resolution] is [code]true[/code], renders [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [LightmapGI] rendering is not affected by this setting. Equivalent to [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution]. */
        static gi_set_use_half_resolution(half_resolution: boolean): void
        /** Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]voxel_gi_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [VoxelGI].
         */
        static voxel_gi_create(): RID
        static voxel_gi_allocate_data(voxel_gi: RID, to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3i, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        static voxel_gi_get_octree_size(voxel_gi: RID): Vector3i
        static voxel_gi_get_octree_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_data_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_distance_field(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_level_counts(voxel_gi: RID): PackedInt32Array
        static voxel_gi_get_to_cell_xform(voxel_gi: RID): Transform3D
        /** Sets the [member VoxelGIData.dynamic_range] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_dynamic_range(voxel_gi: RID, range: number /*f64*/): void
        /** Sets the [member VoxelGIData.propagation] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_propagation(voxel_gi: RID, amount: number /*f64*/): void
        /** Sets the [member VoxelGIData.energy] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_energy(voxel_gi: RID, energy: number /*f64*/): void
        /** Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static voxel_gi_set_baked_exposure_normalization(voxel_gi: RID, baked_exposure: number /*f64*/): void
        /** Sets the [member VoxelGIData.bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_bias(voxel_gi: RID, bias: number /*f64*/): void
        /** Sets the [member VoxelGIData.normal_bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_normal_bias(voxel_gi: RID, bias: number /*f64*/): void
        /** Sets the [member VoxelGIData.interior] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_interior(voxel_gi: RID, enable: boolean): void
        /** Sets the [member VoxelGIData.use_two_bounces] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_use_two_bounces(voxel_gi: RID, enable: boolean): void
        /** Sets the [member ProjectSettings.rendering/global_illumination/voxel_gi/quality] value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis. */
        static voxel_gi_set_quality(quality: RenderingServer.VoxelGIQuality): void
        /** Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]lightmap_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [LightmapGI].
         */
        static lightmap_create(): RID
        /** Set the textures on the given [param lightmap] GI instance to the texture array pointed to by the [param light] RID. If the lightmap texture was baked with [member LightmapGI.directional] set to [code]true[/code], then [param uses_sh] must also be [code]true[/code]. */
        static lightmap_set_textures(lightmap: RID, light: RID, uses_sh: boolean): void
        static lightmap_set_probe_bounds(lightmap: RID, bounds: AABB): void
        static lightmap_set_probe_interior(lightmap: RID, interior: boolean): void
        static lightmap_set_probe_capture_data(lightmap: RID, points: PackedVector3Array, point_sh: PackedColorArray, tetrahedra: PackedInt32Array, bsp_tree: PackedInt32Array): void
        static lightmap_get_probe_capture_points(lightmap: RID): PackedVector3Array
        static lightmap_get_probe_capture_sh(lightmap: RID): PackedColorArray
        static lightmap_get_probe_capture_tetrahedra(lightmap: RID): PackedInt32Array
        static lightmap_get_probe_capture_bsp_tree(lightmap: RID): PackedInt32Array
        /** Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static lightmap_set_baked_exposure_normalization(lightmap: RID, baked_exposure: number /*f64*/): void
        static lightmap_set_probe_capture_update_speed(speed: number /*f64*/): void
        /** Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]particles_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach these particles to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent nodes are [GPUParticles2D] and [GPUParticles3D].
         *  [b]Note:[/b] All [code]particles_*[/code] methods only apply to GPU-based particles, not CPU-based particles. [CPUParticles2D] and [CPUParticles3D] do not have equivalent RenderingServer functions available, as these use [MultiMeshInstance2D] and [MultiMeshInstance3D] under the hood (see [code]multimesh_*[/code] methods).
         */
        static particles_create(): RID
        /** Sets whether the GPU particles specified by the [param particles] RID should be rendered in 2D or 3D according to [param mode]. */
        static particles_set_mode(particles: RID, mode: RenderingServer.ParticlesMode): void
        /** If [code]true[/code], particles will emit over time. Setting to false does not reset the particles, but only stops their emission. Equivalent to [member GPUParticles3D.emitting]. */
        static particles_set_emitting(particles: RID, emitting: boolean): void
        /** Returns [code]true[/code] if particles are currently set to emitting. */
        static particles_get_emitting(particles: RID): boolean
        /** Sets the number of particles to be drawn and allocates the memory for them. Equivalent to [member GPUParticles3D.amount]. */
        static particles_set_amount(particles: RID, amount: number /*i64*/): void
        /** Sets the amount ratio for particles to be emitted. Equivalent to [member GPUParticles3D.amount_ratio]. */
        static particles_set_amount_ratio(particles: RID, ratio: number /*f64*/): void
        /** Sets the lifetime of each particle in the system. Equivalent to [member GPUParticles3D.lifetime]. */
        static particles_set_lifetime(particles: RID, lifetime: number /*f64*/): void
        /** If [code]true[/code], particles will emit once and then stop. Equivalent to [member GPUParticles3D.one_shot]. */
        static particles_set_one_shot(particles: RID, one_shot: boolean): void
        /** Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to [member GPUParticles3D.preprocess]. */
        static particles_set_pre_process_time(particles: RID, time: number /*f64*/): void
        /** Sets the explosiveness ratio. Equivalent to [member GPUParticles3D.explosiveness]. */
        static particles_set_explosiveness_ratio(particles: RID, ratio: number /*f64*/): void
        /** Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to [member GPUParticles3D.randomness]. */
        static particles_set_randomness_ratio(particles: RID, ratio: number /*f64*/): void
        /** Sets the value that informs a [ParticleProcessMaterial] to rush all particles towards the end of their lifetime. */
        static particles_set_interp_to_end(particles: RID, factor: number /*f64*/): void
        /** Sets the velocity of a particle node, that will be used by [member ParticleProcessMaterial.inherit_velocity_ratio]. */
        static particles_set_emitter_velocity(particles: RID, velocity: Vector3): void
        /** Sets a custom axis-aligned bounding box for the particle system. Equivalent to [member GPUParticles3D.visibility_aabb]. */
        static particles_set_custom_aabb(particles: RID, aabb: AABB): void
        /** Sets the speed scale of the particle system. Equivalent to [member GPUParticles3D.speed_scale]. */
        static particles_set_speed_scale(particles: RID, scale: number /*f64*/): void
        /** If [code]true[/code], particles use local coordinates. If [code]false[/code] they use global coordinates. Equivalent to [member GPUParticles3D.local_coords]. */
        static particles_set_use_local_coordinates(particles: RID, enable: boolean): void
        /** Sets the material for processing the particles.
         *  [b]Note:[/b] This is not the material used to draw the materials. Equivalent to [member GPUParticles3D.process_material].
         */
        static particles_set_process_material(particles: RID, material: RID): void
        /** Sets the frame rate that the particle system rendering will be fixed to. Equivalent to [member GPUParticles3D.fixed_fps]. */
        static particles_set_fixed_fps(particles: RID, fps: number /*i64*/): void
        static particles_set_interpolate(particles: RID, enable: boolean): void
        /** If [code]true[/code], uses fractional delta which smooths the movement of the particles. Equivalent to [member GPUParticles3D.fract_delta]. */
        static particles_set_fractional_delta(particles: RID, enable: boolean): void
        static particles_set_collision_base_size(particles: RID, size: number /*f64*/): void
        static particles_set_transform_align(particles: RID, align: RenderingServer.ParticlesTransformAlign): void
        /** If [param enable] is [code]true[/code], enables trails for the [param particles] with the specified [param length_sec] in seconds. Equivalent to [member GPUParticles3D.trail_enabled] and [member GPUParticles3D.trail_lifetime]. */
        static particles_set_trails(particles: RID, enable: boolean, length_sec: number /*f64*/): void
        static particles_set_trail_bind_poses(particles: RID, bind_poses: Array): void
        /** Returns [code]true[/code] if particles are not emitting and particles are set to inactive. */
        static particles_is_inactive(particles: RID): boolean
        /** Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to [method instances_cull_aabb], [method instances_cull_convex], or [method instances_cull_ray]. */
        static particles_request_process(particles: RID): void
        /** Reset the particles on the next update. Equivalent to [method GPUParticles3D.restart]. */
        static particles_restart(particles: RID): void
        static particles_set_subemitter(particles: RID, subemitter_particles: RID): void
        /** Manually emits particles from the [param particles] instance. */
        static particles_emit(particles: RID, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emit_flags: number /*i64*/): void
        /** Sets the draw order of the particles to one of the named enums from [enum ParticlesDrawOrder]. See [enum ParticlesDrawOrder] for options. Equivalent to [member GPUParticles3D.draw_order]. */
        static particles_set_draw_order(particles: RID, order: RenderingServer.ParticlesDrawOrder): void
        /** Sets the number of draw passes to use. Equivalent to [member GPUParticles3D.draw_passes]. */
        static particles_set_draw_passes(particles: RID, count: number /*i64*/): void
        /** Sets the mesh to be used for the specified draw pass. Equivalent to [member GPUParticles3D.draw_pass_1], [member GPUParticles3D.draw_pass_2], [member GPUParticles3D.draw_pass_3], and [member GPUParticles3D.draw_pass_4]. */
        static particles_set_draw_pass_mesh(particles: RID, pass: number /*i64*/, mesh: RID): void
        /** Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to [method GPUParticles3D.capture_aabb]. */
        static particles_get_current_aabb(particles: RID): AABB
        /** Sets the [Transform3D] that will be used by the particles when they first emit. */
        static particles_set_emission_transform(particles: RID, transform: Transform3D): void
        /** Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most [code]particles_collision_*[/code] RenderingServer functions.
         *  [b]Note:[/b] The equivalent nodes are [GPUParticlesCollision3D] and [GPUParticlesAttractor3D].
         */
        static particles_collision_create(): RID
        /** Sets the collision or attractor shape [param type] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. */
        static particles_collision_set_collision_type(particles_collision: RID, type: RenderingServer.ParticlesCollisionType): void
        /** Sets the cull [param mask] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollision3D.cull_mask] or [member GPUParticlesAttractor3D.cull_mask] depending on the [param particles_collision] type. */
        static particles_collision_set_cull_mask(particles_collision: RID, mask: number /*i64*/): void
        /** Sets the [param radius] for the 3D GPU particles sphere collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSphere3D.radius] or [member GPUParticlesAttractorSphere3D.radius] depending on the [param particles_collision] type. */
        static particles_collision_set_sphere_radius(particles_collision: RID, radius: number /*f64*/): void
        /** Sets the [param extents] for the 3D GPU particles collision by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionBox3D.size], [member GPUParticlesCollisionSDF3D.size], [member GPUParticlesCollisionHeightField3D.size], [member GPUParticlesAttractorBox3D.size] or [member GPUParticlesAttractorVectorField3D.size] depending on the [param particles_collision] type. */
        static particles_collision_set_box_extents(particles_collision: RID, extents: Vector3): void
        /** Sets the [param strength] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.strength]. */
        static particles_collision_set_attractor_strength(particles_collision: RID, strength: number /*f64*/): void
        /** Sets the directionality [param amount] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.directionality]. */
        static particles_collision_set_attractor_directionality(particles_collision: RID, amount: number /*f64*/): void
        /** Sets the attenuation [param curve] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.attenuation]. */
        static particles_collision_set_attractor_attenuation(particles_collision: RID, curve: number /*f64*/): void
        /** Sets the signed distance field [param texture] for the 3D GPU particles collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSDF3D.texture] or [member GPUParticlesAttractorVectorField3D.texture] depending on the [param particles_collision] type. */
        static particles_collision_set_field_texture(particles_collision: RID, texture: RID): void
        /** Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its [member GPUParticlesCollisionHeightField3D.update_mode]. */
        static particles_collision_height_field_update(particles_collision: RID): void
        /** Sets the heightmap [param resolution] for the 3D GPU particles heightfield collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionHeightField3D.resolution]. */
        static particles_collision_set_height_field_resolution(particles_collision: RID, resolution: RenderingServer.ParticlesCollisionHeightfieldResolution): void
        /** Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]fog_volume_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [FogVolume].
         */
        static fog_volume_create(): RID
        /** Sets the shape of the fog volume to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        static fog_volume_set_shape(fog_volume: RID, shape: RenderingServer.FogVolumeShape): void
        /** Sets the size of the fog volume when shape is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX]. */
        static fog_volume_set_size(fog_volume: RID, size: Vector3): void
        /** Sets the [Material] of the fog volume. Can be either a [FogMaterial] or a custom [ShaderMaterial]. */
        static fog_volume_set_material(fog_volume: RID, material: RID): void
        /** Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]visibility_notifier_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.
         *  [b]Note:[/b] The equivalent node is [VisibleOnScreenNotifier3D].
         */
        static visibility_notifier_create(): RID
        static visibility_notifier_set_aabb(notifier: RID, aabb: AABB): void
        static visibility_notifier_set_callbacks(notifier: RID, enter_callable: Callable, exit_callable: Callable): void
        /** Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]occluder_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [Occluder3D] (not to be confused with the [OccluderInstance3D] node).
         */
        static occluder_create(): RID
        /** Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed. */
        static occluder_set_mesh(occluder: RID, vertices: PackedVector3Array, indices: PackedInt32Array): void
        /** Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]camera_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [Camera3D].
         */
        static camera_create(): RID
        /** Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away. */
        static camera_set_perspective(camera: RID, fovy_degrees: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
        static camera_set_orthogonal(camera: RID, size: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Sets camera to use frustum projection. This mode allows adjusting the [param offset] argument to create "tilted frustum" effects. */
        static camera_set_frustum(camera: RID, size: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Sets [Transform3D] of camera. */
        static camera_set_transform(camera: RID, transform: Transform3D): void
        /** Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to [member Camera3D.cull_mask]. */
        static camera_set_cull_mask(camera: RID, layers: number /*i64*/): void
        /** Sets the environment used by this camera. Equivalent to [member Camera3D.environment]. */
        static camera_set_environment(camera: RID, env: RID): void
        /** Sets the camera_attributes created with [method camera_attributes_create] to the given camera. */
        static camera_set_camera_attributes(camera: RID, effects: RID): void
        /** If [code]true[/code], preserves the horizontal aspect ratio which is equivalent to [constant Camera3D.KEEP_WIDTH]. If [code]false[/code], preserves the vertical aspect ratio which is equivalent to [constant Camera3D.KEEP_HEIGHT]. */
        static camera_set_use_vertical_aspect(camera: RID, enable: boolean): void
        /** Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]viewport_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [Viewport].
         */
        static viewport_create(): RID
        /** If [code]true[/code], the viewport uses augmented or virtual reality technologies. See [XRInterface]. */
        static viewport_set_use_xr(viewport: RID, use_xr: boolean): void
        /** Sets the viewport's width and height in pixels. */
        static viewport_set_size(viewport: RID, width: number /*i64*/, height: number /*i64*/): void
        /** If [code]true[/code], sets the viewport active, else sets it inactive. */
        static viewport_set_active(viewport: RID, active: boolean): void
        /** Sets the viewport's parent to the viewport specified by the [param parent_viewport] RID. */
        static viewport_set_parent_viewport(viewport: RID, parent_viewport: RID): void
        /** Copies the viewport to a region of the screen specified by [param rect]. If [method viewport_set_render_direct_to_screen] is [code]true[/code], then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.
         *  For example, you can set the root viewport to not render at all with the following code:
         *  FIXME: The method seems to be non-existent.
         *  
         *  Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see [method viewport_set_render_direct_to_screen].
         */
        static viewport_attach_to_screen(viewport: RID, rect: Rect2 = <any> {} /*compound.type from 7([object Object])*/, screen: number /*i64*/ = 0): void
        /** If [code]true[/code], render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size. */
        static viewport_set_render_direct_to_screen(viewport: RID, enabled: boolean): void
        /** Sets the rendering mask associated with this [Viewport]. Only [CanvasItem] nodes with a matching rendering visibility layer will be rendered by this [Viewport]. */
        static viewport_set_canvas_cull_mask(viewport: RID, canvas_cull_mask: number /*i64*/): void
        /** Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible. */
        static viewport_set_scaling_3d_mode(viewport: RID, scaling_3d_mode: RenderingServer.ViewportScaling3DMode): void
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [enum ViewportScaling3DMode] to scale the output image to the full viewport size. Values lower than [code]1.0[/code] can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than [code]1.0[/code] are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [enum ViewportMSAA] for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
         */
        static viewport_set_scaling_3d_scale(viewport: RID, scale: number /*f64*/): void
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference. */
        static viewport_set_fsr_sharpness(viewport: RID, sharpness: number /*f64*/): void
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between [code]-0.75[/code] and [code]0.0[/code]. Enabling temporal antialiasing ([member ProjectSettings.rendering/anti_aliasing/quality/use_taa]) can help reduce the graininess visible when using negative mipmap bias.
         *  [b]Note:[/b] When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is [code]-log2(1.0 / scale) + mipmap_bias[/code].
         */
        static viewport_set_texture_mipmap_bias(viewport: RID, mipmap_bias: number /*f64*/): void
        /** Sets when the viewport should be updated. See [enum ViewportUpdateMode] constants for options. */
        static viewport_set_update_mode(viewport: RID, update_mode: RenderingServer.ViewportUpdateMode): void
        /** Sets the clear mode of a viewport. See [enum ViewportClearMode] for options. */
        static viewport_set_clear_mode(viewport: RID, clear_mode: RenderingServer.ViewportClearMode): void
        /** Returns the render target for the viewport. */
        static viewport_get_render_target(viewport: RID): RID
        /** Returns the viewport's last rendered frame. */
        static viewport_get_texture(viewport: RID): RID
        /** If [code]true[/code], the viewport's 3D elements are not rendered. */
        static viewport_set_disable_3d(viewport: RID, disable: boolean): void
        /** If [code]true[/code], the viewport's canvas (i.e. 2D and GUI elements) is not rendered. */
        static viewport_set_disable_2d(viewport: RID, disable: boolean): void
        /** Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is [constant ENV_BG_CANVAS]. The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then the behavior will be the same as if it was set to [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
        static viewport_set_environment_mode(viewport: RID, mode: RenderingServer.ViewportEnvironmentMode): void
        /** Sets a viewport's camera. */
        static viewport_attach_camera(viewport: RID, camera: RID): void
        /** Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc. */
        static viewport_set_scenario(viewport: RID, scenario: RID): void
        /** Sets a viewport's canvas. */
        static viewport_attach_canvas(viewport: RID, canvas: RID): void
        /** Detaches a viewport from a canvas and vice versa. */
        static viewport_remove_canvas(viewport: RID, canvas: RID): void
        /** If [code]true[/code], canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel]. */
        static viewport_set_snap_2d_transforms_to_pixel(viewport: RID, enabled: boolean): void
        /** If [code]true[/code], canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel]. */
        static viewport_set_snap_2d_vertices_to_pixel(viewport: RID, enabled: boolean): void
        /** Sets the default texture filtering mode for the specified [param viewport] RID. See [enum CanvasItemTextureFilter] for options. */
        static viewport_set_default_canvas_item_texture_filter(viewport: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        /** Sets the default texture repeat mode for the specified [param viewport] RID. See [enum CanvasItemTextureRepeat] for options. */
        static viewport_set_default_canvas_item_texture_repeat(viewport: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        /** Sets the transformation of a viewport's canvas. */
        static viewport_set_canvas_transform(viewport: RID, canvas: RID, offset: Transform2D): void
        /** Sets the stacking order for a viewport's canvas.
         *  [param layer] is the actual canvas layer, while [param sublayer] specifies the stacking order of the canvas among those in the same layer.
         */
        static viewport_set_canvas_stacking(viewport: RID, canvas: RID, layer: number /*i64*/, sublayer: number /*i64*/): void
        /** If [code]true[/code], the viewport renders its background as transparent. */
        static viewport_set_transparent_background(viewport: RID, enabled: boolean): void
        /** Sets the viewport's global transformation matrix. */
        static viewport_set_global_canvas_transform(viewport: RID, transform: Transform2D): void
        /** Sets the viewport's 2D signed distance field [member ProjectSettings.rendering/2d/sdf/oversize] and [member ProjectSettings.rendering/2d/sdf/scale]. This is used when sampling the signed distance field in [CanvasItem] shaders as well as [GPUParticles2D] collision. This is [i]not[/i] used by SDFGI in 3D rendering. */
        static viewport_set_sdf_oversize_and_scale(viewport: RID, oversize: RenderingServer.ViewportSDFOversize, scale: RenderingServer.ViewportSDFScale): void
        /** Sets the [param size] of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the [param viewport] RID. The value is rounded up to the nearest power of 2. If [param use_16_bits] is [code]true[/code], use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
         *  [b]Note:[/b] If this is set to [code]0[/code], no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
         */
        static viewport_set_positional_shadow_atlas_size(viewport: RID, size: number /*i64*/, use_16_bits: boolean = false): void
        /** Sets the number of subdivisions to use in the specified shadow atlas [param quadrant] for omni and spot shadows. See also [method Viewport.set_positional_shadow_atlas_quadrant_subdiv]. */
        static viewport_set_positional_shadow_atlas_quadrant_subdivision(viewport: RID, quadrant: number /*i64*/, subdivision: number /*i64*/): void
        /** Sets the multisample anti-aliasing mode for 3D on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
        static viewport_set_msaa_3d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        /** Sets the multisample anti-aliasing mode for 2D/Canvas on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
        static viewport_set_msaa_2d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        /** If [code]true[/code], 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a [code]RGBA16[/code] framebuffer, while when using the Mobile renderer it will be a [code]RGB10_A2[/code] framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the [code]0-1[/code] range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as [member Viewport.use_hdr_2d].
         *  [b]Note:[/b] This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.
         */
        static viewport_set_use_hdr_2d(viewport: RID, enabled: boolean): void
        /** Sets the viewport's screen-space antialiasing mode. */
        static viewport_set_screen_space_aa(viewport: RID, mode: RenderingServer.ViewportScreenSpaceAA): void
        /** If [code]true[/code], use Temporal Anti-Aliasing. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_taa]. */
        static viewport_set_use_taa(viewport: RID, enable: boolean): void
        /** If [code]true[/code], enables debanding on the specified viewport. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding]. */
        static viewport_set_use_debanding(viewport: RID, enable: boolean): void
        /** If [code]true[/code], enables occlusion culling on the specified viewport. Equivalent to [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling]. */
        static viewport_set_use_occlusion_culling(viewport: RID, enable: boolean): void
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewport_set_occlusion_rays_per_thread(rays_per_thread: number /*i64*/): void
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/bvh_build_quality] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewport_set_occlusion_culling_build_quality(quality: RenderingServer.ViewportOcclusionCullingBuildQuality): void
        /** Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass [param type]s, each of them having the same [param info]s you can query (different passes will return different values). See [enum RenderingServer.ViewportRenderInfoType] for a list of render pass types and [enum RenderingServer.ViewportRenderInfo] for a list of information that can be queried.
         *  See also [method get_rendering_info], which returns global information across all viewports.
         *  [b]Note:[/b] Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method viewport_get_render_info] returns [code]0[/code]. To print rendering information in [code]_ready()[/code] successfully, use the following:
         *  
         */
        static viewport_get_render_info(viewport: RID, type: RenderingServer.ViewportRenderInfoType, info: RenderingServer.ViewportRenderInfo): number /*i64*/
        /** Sets the debug draw mode of a viewport. See [enum ViewportDebugDraw] for options. */
        static viewport_set_debug_draw(viewport: RID, draw: RenderingServer.ViewportDebugDraw): void
        /** Sets the measurement for the given [param viewport] RID (obtained using [method Viewport.get_viewport_rid]). Once enabled, [method viewport_get_measured_render_time_cpu] and [method viewport_get_measured_render_time_gpu] will return values greater than [code]0.0[/code] when queried with the given [param viewport]. */
        static viewport_set_measure_render_time(viewport: RID, enable: boolean): void
        /** Returns the CPU time taken to render the last frame in milliseconds. This [i]only[/i] includes time spent in rendering-related operations; scripts' [code]_process[/code] functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus [method get_frame_setup_time_cpu]. Unlike [method Engine.get_frames_per_second], this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].
         *  [b]Note:[/b] Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns [code]0.0[/code].
         */
        static viewport_get_measured_render_time_cpu(viewport: RID): number /*f64*/
        /** Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike [method Engine.get_frames_per_second], this method accurately reflects GPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].
         *  [b]Note:[/b] Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns [code]0.0[/code].
         *  [b]Note:[/b] When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using [method viewport_get_measured_render_time_gpu]. This behavior can be overridden in the graphics driver settings at the cost of higher power usage.
         */
        static viewport_get_measured_render_time_gpu(viewport: RID): number /*f64*/
        /** Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to [member ProjectSettings.rendering/vrs/mode]. */
        static viewport_set_vrs_mode(viewport: RID, mode: RenderingServer.ViewportVRSMode): void
        /** The texture to use when the VRS mode is set to [constant RenderingServer.VIEWPORT_VRS_TEXTURE]. Equivalent to [member ProjectSettings.rendering/vrs/texture]. */
        static viewport_set_vrs_texture(viewport: RID, texture: RID): void
        /** Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]sky_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         */
        static sky_create(): RID
        /** Sets the [param radiance_size] of the sky specified by the [param sky] RID (in pixels). Equivalent to [member Sky.radiance_size]. */
        static sky_set_radiance_size(sky: RID, radiance_size: number /*i64*/): void
        /** Sets the process [param mode] of the sky specified by the [param sky] RID. Equivalent to [member Sky.process_mode]. */
        static sky_set_mode(sky: RID, mode: RenderingServer.SkyMode): void
        /** Sets the material that the sky uses to render the background, ambient and reflection maps. */
        static sky_set_material(sky: RID, material: RID): void
        /** Generates and returns an [Image] containing the radiance map for the specified [param sky] RID. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is [code]true[/code], the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method environment_bake_panorama].
         *  [b]Note:[/b] The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. [param energy] values above [code]1.0[/code] can be used to brighten the resulting image.
         *  [b]Note:[/b] [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
         */
        static sky_bake_panorama(sky: RID, energy: number /*f64*/, bake_irradiance: boolean, size: Vector2i): Image
        /** Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]environment_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [Environment].
         */
        static environment_create(): RID
        /** Sets the environment's background mode. Equivalent to [member Environment.background_mode]. */
        static environment_set_background(env: RID, bg: RenderingServer.EnvironmentBG): void
        /** Sets the [Sky] to be used as the environment's background when using [i]BGMode[/i] sky. Equivalent to [member Environment.sky]. */
        static environment_set_sky(env: RID, sky: RID): void
        /** Sets a custom field of view for the background [Sky]. Equivalent to [member Environment.sky_custom_fov]. */
        static environment_set_sky_custom_fov(env: RID, scale: number /*f64*/): void
        /** Sets the rotation of the background [Sky] expressed as a [Basis]. Equivalent to [member Environment.sky_rotation], where the rotation vector is used to construct the [Basis]. */
        static environment_set_sky_orientation(env: RID, orientation: Basis): void
        /** Color displayed for clear areas of the scene. Only effective if using the [constant ENV_BG_COLOR] background mode. */
        static environment_set_bg_color(env: RID, color: Color): void
        /** Sets the intensity of the background color. */
        static environment_set_bg_energy(env: RID, multiplier: number /*f64*/, exposure_value: number /*f64*/): void
        /** Sets the maximum layer to use if using Canvas background mode. */
        static environment_set_canvas_max_layer(env: RID, max_layer: number /*i64*/): void
        /** Sets the values to be used for ambient light rendering. See [Environment] for more details. */
        static environment_set_ambient_light(env: RID, color: Color, ambient: RenderingServer.EnvironmentAmbientSource = 0, energy: number /*f64*/ = 1, sky_contibution: number /*f64*/ = 0, reflection_source: RenderingServer.EnvironmentReflectionSource = 0): void
        /** Configures glow for the specified environment RID. See [code]glow_*[/code] properties in [Environment] for more information. */
        static environment_set_glow(env: RID, enable: boolean, levels: PackedFloat32Array, intensity: number /*f64*/, strength: number /*f64*/, mix: number /*f64*/, bloom_threshold: number /*f64*/, blend_mode: RenderingServer.EnvironmentGlowBlendMode, hdr_bleed_threshold: number /*f64*/, hdr_bleed_scale: number /*f64*/, hdr_luminance_cap: number /*f64*/, glow_map_strength: number /*f64*/, glow_map: RID): void
        /** Sets the variables to be used with the "tonemap" post-process effect. See [Environment] for more details. */
        static environment_set_tonemap(env: RID, tone_mapper: RenderingServer.EnvironmentToneMapper, exposure: number /*f64*/, white: number /*f64*/): void
        /** Sets the values to be used with the "adjustments" post-process effect. See [Environment] for more details. */
        static environment_set_adjustment(env: RID, enable: boolean, brightness: number /*f64*/, contrast: number /*f64*/, saturation: number /*f64*/, use_1d_color_correction: boolean, color_correction: RID): void
        /** Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See [Environment] for more details. */
        static environment_set_ssr(env: RID, enable: boolean, max_steps: number /*i64*/, fade_in: number /*f64*/, fade_out: number /*f64*/, depth_tolerance: number /*f64*/): void
        /** Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environment_set_ssao(env: RID, enable: boolean, radius: number /*f64*/, intensity: number /*f64*/, power: number /*f64*/, detail: number /*f64*/, horizon: number /*f64*/, sharpness: number /*f64*/, light_affect: number /*f64*/, ao_channel_affect: number /*f64*/): void
        /** Configures fog for the specified environment RID. See [code]fog_*[/code] properties in [Environment] for more information. */
        static environment_set_fog(env: RID, enable: boolean, light_color: Color, light_energy: number /*f64*/, sun_scatter: number /*f64*/, density: number /*f64*/, height: number /*f64*/, height_density: number /*f64*/, aerial_perspective: number /*f64*/, sky_affect: number /*f64*/): void
        /** Configures signed distance field global illumination for the specified environment RID. See [code]sdfgi_*[/code] properties in [Environment] for more information. */
        static environment_set_sdfgi(env: RID, enable: boolean, cascades: number /*i64*/, min_cell_size: number /*f64*/, y_scale: RenderingServer.EnvironmentSDFGIYScale, use_occlusion: boolean, bounce_feedback: number /*f64*/, read_sky: boolean, energy: number /*f64*/, normal_bias: number /*f64*/, probe_bias: number /*f64*/): void
        /** Sets the variables to be used with the volumetric fog post-process effect. See [Environment] for more details. */
        static environment_set_volumetric_fog(env: RID, enable: boolean, density: number /*f64*/, albedo: Color, emission: Color, emission_energy: number /*f64*/, anisotropy: number /*f64*/, length: number /*f64*/, p_detail_spread: number /*f64*/, gi_inject: number /*f64*/, temporal_reprojection: boolean, temporal_reprojection_amount: number /*f64*/, ambient_inject: number /*f64*/, sky_affect: number /*f64*/): void
        /** If [param enable] is [code]true[/code], enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to [member ProjectSettings.rendering/environment/glow/upscale_mode]. */
        static environment_glow_set_use_bicubic_upscale(enable: boolean): void
        static environment_set_ssr_roughness_quality(quality: RenderingServer.EnvironmentSSRRoughnessQuality): void
        /** Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environment_set_ssao_quality(quality: RenderingServer.EnvironmentSSAOQuality, half_size: boolean, adaptive_target: number /*f64*/, blur_passes: number /*i64*/, fadeout_from: number /*f64*/, fadeout_to: number /*f64*/): void
        /** Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See [Environment] for more details. */
        static environment_set_ssil_quality(quality: RenderingServer.EnvironmentSSILQuality, half_size: boolean, adaptive_target: number /*f64*/, blur_passes: number /*i64*/, fadeout_from: number /*f64*/, fadeout_to: number /*f64*/): void
        /** Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count]. */
        static environment_set_sdfgi_ray_count(ray_count: RenderingServer.EnvironmentSDFGIRayCount): void
        /** Sets the number of frames to use for converging signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge]. */
        static environment_set_sdfgi_frames_to_converge(frames: RenderingServer.EnvironmentSDFGIFramesToConverge): void
        /** Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
        static environment_set_sdfgi_frames_to_update_light(frames: RenderingServer.EnvironmentSDFGIFramesToUpdateLight): void
        /** Sets the resolution of the volumetric fog's froxel buffer. [param size] is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While [param depth] is directly used to set the depth of the buffer. */
        static environment_set_volumetric_fog_volume_size(size: number /*i64*/, depth: number /*i64*/): void
        /** Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts. */
        static environment_set_volumetric_fog_filter_active(active: boolean): void
        /** Generates and returns an [Image] containing the radiance map for the specified [param environment] RID's sky. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is [code]true[/code], the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method sky_bake_panorama].
         *  [b]Note:[/b] The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.
         *  [b]Note:[/b] [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
         */
        static environment_bake_panorama(environment: RID, bake_irradiance: boolean, size: Vector2i): Image
        /** Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled], [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount] and [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit]. */
        static screen_space_roughness_limiter_set_active(enable: boolean, amount: number /*f64*/, limit: number /*f64*/): void
        /** Sets [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality] to use when rendering materials that have subsurface scattering enabled. */
        static sub_surface_scattering_set_quality(quality: RenderingServer.SubSurfaceScatteringQuality): void
        /** Sets the [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale] and [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale] to use when rendering materials that have subsurface scattering enabled. */
        static sub_surface_scattering_set_scale(scale: number /*f64*/, depth_scale: number /*f64*/): void
        /** Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]camera_attributes_[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [CameraAttributes].
         */
        static camera_attributes_create(): RID
        /** Sets the quality level of the DOF blur effect to one of the options in [enum DOFBlurQuality]. [param use_jitter] can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy. */
        static camera_attributes_set_dof_blur_quality(quality: RenderingServer.DOFBlurQuality, use_jitter: boolean): void
        /** Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see [enum DOFBokehShape]. */
        static camera_attributes_set_dof_blur_bokeh_shape(shape: RenderingServer.DOFBokehShape): void
        /** Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in [CameraAttributesPractical]. */
        static camera_attributes_set_dof_blur(camera_attributes: RID, far_enable: boolean, far_distance: number /*f64*/, far_transition: number /*f64*/, near_enable: boolean, near_distance: number /*f64*/, near_transition: number /*f64*/, amount: number /*f64*/): void
        /** Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.
         *  The normalization factor can be calculated from exposure value (EV100) as follows:
         *  
         *  The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:
         *  
         */
        static camera_attributes_set_exposure(camera_attributes: RID, multiplier: number /*f64*/, normalization: number /*f64*/): void
        /** Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in [CameraAttributes] and [CameraAttributesPractical]. */
        static camera_attributes_set_auto_exposure(camera_attributes: RID, enable: boolean, min_sensitivity: number /*f64*/, max_sensitivity: number /*f64*/, speed: number /*f64*/, scale: number /*f64*/): void
        /** Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]scenario_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  The scenario is the 3D world that all the visual instances exist in.
         */
        static scenario_create(): RID
        /** Sets the environment that will be used with this scenario. See also [Environment]. */
        static scenario_set_environment(scenario: RID, environment: RID): void
        /** Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment. */
        static scenario_set_fallback_environment(scenario: RID, environment: RID): void
        /** Sets the camera attributes ([param effects]) that will be used with this scenario. See also [CameraAttributes]. */
        static scenario_set_camera_attributes(scenario: RID, effects: RID): void
        /** Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all [code]instance_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. This is a shorthand for using [method instance_create] and setting the base and scenario manually.
         */
        static instance_create2(base: RID, scenario: RID): RID
        /** Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]instance_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using [method instance_set_base].
         *  [b]Note:[/b] The equivalent node is [VisualInstance3D].
         */
        static instance_create(): RID
        /** Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario. */
        static instance_set_base(instance: RID, base: RID): void
        /** Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in. */
        static instance_set_scenario(instance: RID, scenario: RID): void
        /** Sets the render layers that this instance will be drawn to. Equivalent to [member VisualInstance3D.layers]. */
        static instance_set_layer_mask(instance: RID, mask: number /*i64*/): void
        /** Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting. */
        static instance_set_pivot_data(instance: RID, sorting_offset: number /*f64*/, use_aabb_center: boolean): void
        /** Sets the world space transform of the instance. Equivalent to [member Node3D.global_transform]. */
        static instance_set_transform(instance: RID, transform: Transform3D): void
        /** Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with [method instances_cull_aabb], [method instances_cull_convex], and [method instances_cull_ray]. */
        static instance_attach_object_instance_id(instance: RID, id: number /*i64*/): void
        /** Sets the weight for a given blend shape associated with this instance. */
        static instance_set_blend_shape_weight(instance: RID, shape: number /*i64*/, weight: number /*f64*/): void
        /** Sets the override material of a specific surface. Equivalent to [method MeshInstance3D.set_surface_override_material]. */
        static instance_set_surface_override_material(instance: RID, surface: number /*i64*/, material: RID): void
        /** Sets whether an instance is drawn or not. Equivalent to [member Node3D.visible]. */
        static instance_set_visible(instance: RID, visible: boolean): void
        /** Sets the transparency for the given geometry instance. Equivalent to [member GeometryInstance3D.transparency].
         *  A transparency of [code]0.0[/code] is fully opaque, while [code]1.0[/code] is fully transparent. Values greater than [code]0.0[/code] (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [param transparency] to a value greater than [code]0.0[/code] (exclusive) will [i]not[/i] disable shadow rendering.
         *  In spatial shaders, [code]1.0 - transparency[/code] is set as the default value of the [code]ALPHA[/code] built-in.
         *  [b]Note:[/b] [param transparency] is clamped between [code]0.0[/code] and [code]1.0[/code], so this property cannot be used to make transparent materials more opaque than they originally are.
         */
        static instance_geometry_set_transparency(instance: RID, transparency: number /*f64*/): void
        /** Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting [member GeometryInstance3D.custom_aabb]. */
        static instance_set_custom_aabb(instance: RID, aabb: AABB): void
        /** Attaches a skeleton to an instance. Removes the previous skeleton from the instance. */
        static instance_attach_skeleton(instance: RID, skeleton: RID): void
        /** Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to [member GeometryInstance3D.extra_cull_margin]. */
        static instance_set_extra_visibility_margin(instance: RID, margin: number /*f64*/): void
        /** Sets the visibility parent for the given instance. Equivalent to [member Node3D.visibility_parent]. */
        static instance_set_visibility_parent(instance: RID, parent: RID): void
        /** If [code]true[/code], ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as [member GeometryInstance3D.ignore_occlusion_culling], which only ignores occlusion culling and leaves frustum culling intact. */
        static instance_set_ignore_culling(instance: RID, enabled: boolean): void
        /** Sets the flag for a given [enum InstanceFlags]. See [enum InstanceFlags] for more details. */
        static instance_geometry_set_flag(instance: RID, flag: RenderingServer.InstanceFlags, enabled: boolean): void
        /** Sets the shadow casting setting to one of [enum ShadowCastingSetting]. Equivalent to [member GeometryInstance3D.cast_shadow]. */
        static instance_geometry_set_cast_shadows_setting(instance: RID, shadow_casting_setting: RenderingServer.ShadowCastingSetting): void
        /** Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_override]. */
        static instance_geometry_set_material_override(instance: RID, material: RID): void
        /** Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_overlay]. */
        static instance_geometry_set_material_overlay(instance: RID, material: RID): void
        /** Sets the visibility range values for the given geometry instance. Equivalent to [member GeometryInstance3D.visibility_range_begin] and related properties. */
        static instance_geometry_set_visibility_range(instance: RID, min: number /*f64*/, max: number /*f64*/, min_margin: number /*f64*/, max_margin: number /*f64*/, fade_mode: RenderingServer.VisibilityRangeFadeMode): void
        /** Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to [member GeometryInstance3D.gi_lightmap_scale]) and lightmap atlas slice must also be specified. */
        static instance_geometry_set_lightmap(instance: RID, lightmap: RID, lightmap_uv_scale: Rect2, lightmap_slice: number /*i64*/): void
        /** Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to [member GeometryInstance3D.lod_bias]. */
        static instance_geometry_set_lod_bias(instance: RID, lod_bias: number /*f64*/): void
        /** Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.set_instance_shader_parameter]. */
        static instance_geometry_set_shader_parameter(instance: RID, parameter: StringName, value: any): void
        /** Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter].
         *  [b]Note:[/b] Per-instance shader parameter names are case-sensitive.
         */
        static instance_geometry_get_shader_parameter(instance: RID, parameter: StringName): any
        /** Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instance_geometry_get_shader_parameter_default_value(instance: RID, parameter: StringName): any
        /** Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys [code]name[/code], [code]class_name[/code], [code]type[/code], [code]hint[/code], [code]hint_string[/code] and [code]usage[/code]. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instance_geometry_get_shader_parameter_list(instance: RID): Array
        /** Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
         *  [b]Warning:[/b] This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
         */
        static instances_cull_aabb(aabb: AABB, scenario: RID = <any> {} /*compound.type from 23([object Object])*/): PackedInt64Array
        /** Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
         *  [b]Warning:[/b] This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
         */
        static instances_cull_ray(from: Vector3, to: Vector3, scenario: RID = <any> {} /*compound.type from 23([object Object])*/): PackedInt64Array
        /** Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
         *  [b]Warning:[/b] This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
         */
        static instances_cull_convex(convex: Array, scenario: RID = <any> {} /*compound.type from 23([object Object])*/): PackedInt64Array
        /** Bakes the material data of the Mesh passed in the [param base] parameter with optional [param material_overrides] to a set of [Image]s of size [param image_size]. Returns an array of [Image]s containing material properties as specified in [enum BakeChannels]. */
        static bake_render_uv2(base: RID, material_overrides: Array, image_size: Vector2i): Array
        /** Creates a canvas and returns the assigned [RID]. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  Canvas has no [Resource] or [Node] equivalent.
         */
        static canvas_create(): RID
        /** A copy of the canvas item will be drawn with a local offset of the mirroring [Vector2]. */
        static canvas_set_item_mirroring(canvas: RID, item: RID, mirroring: Vector2): void
        /** Modulates all colors in the given canvas. */
        static canvas_set_modulate(canvas: RID, color: Color): void
        static canvas_set_disable_scale(disable: boolean): void
        /** Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_texture_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. See also [method texture_2d_create].
         *  [b]Note:[/b] The equivalent resource is [CanvasTexture] and is only meant to be used in 2D rendering, not 3D.
         */
        static canvas_texture_create(): RID
        /** Sets the [param channel]'s [param texture] for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.diffuse_texture], [member CanvasTexture.normal_texture] and [member CanvasTexture.specular_texture]. */
        static canvas_texture_set_channel(canvas_texture: RID, channel: RenderingServer.CanvasTextureChannel, texture: RID): void
        /** Sets the [param base_color] and [param shininess] to use for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.specular_color] and [member CanvasTexture.specular_shininess]. */
        static canvas_texture_set_shading_parameters(canvas_texture: RID, base_color: Color, shininess: number /*f64*/): void
        /** Sets the texture [param filter] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvas_texture_set_texture_filter(canvas_texture: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        /** Sets the texture [param repeat] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvas_texture_set_texture_repeat(canvas_texture: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        /** Creates a new CanvasItem instance and returns its [RID]. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_item_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [CanvasItem].
         */
        static canvas_item_create(): RID
        /** Sets a parent [CanvasItem] to the [CanvasItem]. The item will inherit transform, modulation and visibility from its parent, like [CanvasItem] nodes in the scene tree. */
        static canvas_item_set_parent(item: RID, parent: RID): void
        /** Sets the default texture filter mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_filter]. */
        static canvas_item_set_default_texture_filter(item: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        /** Sets the default texture repeat mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_repeat]. */
        static canvas_item_set_default_texture_repeat(item: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        /** Sets the visibility of the [CanvasItem]. */
        static canvas_item_set_visible(item: RID, visible: boolean): void
        /** Sets the light [param mask] for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.light_mask]. */
        static canvas_item_set_light_mask(item: RID, mask: number /*i64*/): void
        /** Sets the rendering visibility layer associated with this [CanvasItem]. Only [Viewport] nodes with a matching rendering mask will render this [CanvasItem]. */
        static canvas_item_set_visibility_layer(item: RID, visibility_layer: number /*i64*/): void
        /** Sets the [param transform] of the canvas item specified by the [param item] RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to [member Node2D.transform]. */
        static canvas_item_set_transform(item: RID, transform: Transform2D): void
        /** If [param clip] is [code]true[/code], makes the canvas item specified by the [param item] RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use [method canvas_item_set_canvas_group_mode] instead.
         *  [b]Note:[/b] The equivalent node functionality is found in [member Label.clip_text], [RichTextLabel] (always enabled) and more.
         */
        static canvas_item_set_clip(item: RID, clip: boolean): void
        /** If [param enabled] is [code]true[/code], enables multichannel signed distance field rendering mode for the canvas item specified by the [param item] RID. This is meant to be used for font rendering, or with specially generated images using [url=https://github.com/Chlumsky/msdfgen]msdfgen[/url]. */
        static canvas_item_set_distance_field_mode(item: RID, enabled: boolean): void
        /** If [param use_custom_rect] is [code]true[/code], sets the custom visibility rectangle (used for culling) to [param rect] for the canvas item specified by [param item]. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If [param use_custom_rect] is [code]false[/code], automatically computes a visibility rectangle based on the canvas item's draw commands. */
        static canvas_item_set_custom_rect(item: RID, use_custom_rect: boolean, rect: Rect2 = <any> {} /*compound.type from 7([object Object])*/): void
        /** Multiplies the color of the canvas item specified by the [param item] RID, while affecting its children. See also [method canvas_item_set_self_modulate]. Equivalent to [member CanvasItem.modulate]. */
        static canvas_item_set_modulate(item: RID, color: Color): void
        /** Multiplies the color of the canvas item specified by the [param item] RID, without affecting its children. See also [method canvas_item_set_modulate]. Equivalent to [member CanvasItem.self_modulate]. */
        static canvas_item_set_self_modulate(item: RID, color: Color): void
        /** If [param enabled] is [code]true[/code], draws the canvas item specified by the [param item] RID behind its parent. Equivalent to [member CanvasItem.show_behind_parent]. */
        static canvas_item_set_draw_behind_parent(item: RID, enabled: boolean): void
        /** Draws a line on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_line]. */
        static canvas_item_add_line(item: RID, from: Vector2, to: Vector2, color: Color, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws a 2D polyline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_polyline] and [method CanvasItem.draw_polyline_colors]. */
        static canvas_item_add_polyline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws a 2D multiline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multiline] and [method CanvasItem.draw_multiline_colors]. */
        static canvas_item_add_multiline(item: RID, points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/ = -1): void
        /** Draws a rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_rect]. */
        static canvas_item_add_rect(item: RID, rect: Rect2, color: Color): void
        /** Draws a circle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_circle]. */
        static canvas_item_add_circle(item: RID, pos: Vector2, radius: number /*f64*/, color: Color): void
        /** Draws a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect] and [method Texture2D.draw_rect]. */
        static canvas_item_add_texture_rect(item: RID, rect: Rect2, texture: RID, tile: boolean = false, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        /** See also [method CanvasItem.draw_msdf_texture_rect_region]. */
        static canvas_item_add_msdf_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outline_size: number /*i64*/ = 0, px_range: number /*f64*/ = 1, scale: number /*f64*/ = 1): void
        /** See also [method CanvasItem.draw_lcd_texture_rect_region]. */
        static canvas_item_add_lcd_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color): void
        /** Draws the specified region of a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect_region] and [method Texture2D.draw_rect_region]. */
        static canvas_item_add_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        /** Draws a nine-patch rectangle on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvas_item_add_nine_patch(item: RID, rect: Rect2, source: Rect2, texture: RID, topleft: Vector2, bottomright: Vector2, x_axis_mode: RenderingServer.NinePatchAxisMode = 0, y_axis_mode: RenderingServer.NinePatchAxisMode = 0, draw_center: boolean = true, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Draws a 2D primitive on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_primitive]. */
        static canvas_item_add_primitive(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: RID): void
        /** Draws a 2D polygon on the [CanvasItem] pointed to by the [param item] [RID]. If you need more flexibility (such as being able to use bones), use [method canvas_item_add_triangle_array] instead. See also [method CanvasItem.draw_polygon]. */
        static canvas_item_add_polygon(item: RID, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, texture: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Draws a triangle array on the [CanvasItem] pointed to by the [param item] [RID]. This is internally used by [Line2D] and [StyleBoxFlat] for rendering. [method canvas_item_add_triangle_array] is highly flexible, but more complex to use than [method canvas_item_add_polygon].
         *  [b]Note:[/b] [param count] is unused and can be left unspecified.
         */
        static canvas_item_add_triangle_array(item: RID, indices: PackedInt32Array, points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, bones: PackedInt32Array = <any> {} /*compound.type from 30([object Object])*/, weights: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/, texture: RID = <any> {} /*compound.type from 23([object Object])*/, count: number /*i64*/ = -1): void
        /** Draws a mesh created with [method mesh_create] with given [param transform], [param modulate] color, and [param texture]. This is used internally by [MeshInstance2D]. */
        static canvas_item_add_mesh(item: RID, mesh: RID, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, modulate: Color = new Color(1, 1, 1, 1), texture: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Draws a 2D [MultiMesh] on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multimesh]. */
        static canvas_item_add_multimesh(item: RID, mesh: RID, texture: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Draws particles on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvas_item_add_particles(item: RID, particles: RID, texture: RID): void
        /** Sets a [Transform2D] that will be used to transform subsequent canvas item commands. */
        static canvas_item_add_set_transform(item: RID, transform: Transform2D): void
        /** If [param ignore] is [code]true[/code], ignore clipping on items drawn with this canvas item until this is called again with [param ignore] set to false. */
        static canvas_item_add_clip_ignore(item: RID, ignore: boolean): void
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        static canvas_item_add_animation_slice(item: RID, animation_length: number /*f64*/, slice_begin: number /*f64*/, slice_end: number /*f64*/, offset: number /*f64*/ = 0): void
        /** If [param enabled] is [code]true[/code], child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the [param item] RID, not the canvas item itself. Equivalent to [member CanvasItem.y_sort_enabled]. */
        static canvas_item_set_sort_children_by_y(item: RID, enabled: boolean): void
        /** Sets the [CanvasItem]'s Z index, i.e. its draw order (lower indexes are drawn first). */
        static canvas_item_set_z_index(item: RID, z_index: number /*i64*/): void
        /** If this is enabled, the Z index of the parent will be added to the children's Z index. */
        static canvas_item_set_z_as_relative_to_parent(item: RID, enabled: boolean): void
        /** Sets the [CanvasItem] to copy a rect to the backbuffer. */
        static canvas_item_set_copy_to_backbuffer(item: RID, enabled: boolean, rect: Rect2): void
        /** Clears the [CanvasItem] and removes all commands in it. */
        static canvas_item_clear(item: RID): void
        /** Sets the index for the [CanvasItem]. */
        static canvas_item_set_draw_index(item: RID, index: number /*i64*/): void
        /** Sets a new [param material] to the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.material]. */
        static canvas_item_set_material(item: RID, material: RID): void
        /** Sets if the [CanvasItem] uses its parent's material. */
        static canvas_item_set_use_parent_material(item: RID, enabled: boolean): void
        /** Sets the given [CanvasItem] as visibility notifier. [param area] defines the area of detecting visibility. [param enter_callable] is called when the [CanvasItem] enters the screen, [param exit_callable] is called when the [CanvasItem] exits the screen. If [param enable] is [code]false[/code], the item will no longer function as notifier.
         *  This method can be used to manually mimic [VisibleOnScreenNotifier2D].
         */
        static canvas_item_set_visibility_notifier(item: RID, enable: boolean, area: Rect2, enter_callable: Callable, exit_callable: Callable): void
        /** Sets the canvas group mode used during 2D rendering for the canvas item specified by the [param item] RID. For faster but more limited clipping, use [method canvas_item_set_clip] instead.
         *  [b]Note:[/b] The equivalent node functionality is found in [CanvasGroup] and [member CanvasItem.clip_children].
         */
        static canvas_item_set_canvas_group_mode(item: RID, mode: RenderingServer.CanvasGroupMode, clear_margin: number /*f64*/ = 5, fit_empty: boolean = false, fit_margin: number /*f64*/ = 0, blur_mipmaps: boolean = false): void
        /** Returns the bounding rectangle for a canvas item in local space, as calculated by the renderer. This bound is used internally for culling.
         *  [b]Warning:[/b] This function is intended for debugging in the editor, and will pass through and return a zero [Rect2] in exported projects.
         */
        static debug_canvas_item_get_rect(item: RID): Rect2
        /** Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_light_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [Light2D].
         */
        static canvas_light_create(): RID
        /** Attaches the canvas light to the canvas. Removes it from its previous canvas. */
        static canvas_light_attach_to_canvas(light: RID, canvas: RID): void
        /** Enables or disables a canvas light. */
        static canvas_light_set_enabled(light: RID, enabled: boolean): void
        /** Sets the scale factor of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.texture_scale]. */
        static canvas_light_set_texture_scale(light: RID, scale: number /*f64*/): void
        /** Sets the canvas light's [Transform2D]. */
        static canvas_light_set_transform(light: RID, transform: Transform2D): void
        /** Sets the texture to be used by a [PointLight2D]. Equivalent to [member PointLight2D.texture]. */
        static canvas_light_set_texture(light: RID, texture: RID): void
        /** Sets the offset of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.offset]. */
        static canvas_light_set_texture_offset(light: RID, offset: Vector2): void
        /** Sets the color for a light. */
        static canvas_light_set_color(light: RID, color: Color): void
        /** Sets a canvas light's height. */
        static canvas_light_set_height(light: RID, height: number /*f64*/): void
        /** Sets a canvas light's energy. */
        static canvas_light_set_energy(light: RID, energy: number /*f64*/): void
        /** Sets the Z range of objects that will be affected by this light. Equivalent to [member Light2D.range_z_min] and [member Light2D.range_z_max]. */
        static canvas_light_set_z_range(light: RID, min_z: number /*i64*/, max_z: number /*i64*/): void
        /** The layer range that gets rendered with this light. */
        static canvas_light_set_layer_range(light: RID, min_layer: number /*i64*/, max_layer: number /*i64*/): void
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_set_item_cull_mask(light: RID, mask: number /*i64*/): void
        /** The binary mask used to determine which layers this canvas light's shadows affects. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_set_item_shadow_cull_mask(light: RID, mask: number /*i64*/): void
        /** The mode of the light, see [enum CanvasLightMode] constants. */
        static canvas_light_set_mode(light: RID, mode: RenderingServer.CanvasLightMode): void
        /** Enables or disables the canvas light's shadow. */
        static canvas_light_set_shadow_enabled(light: RID, enabled: boolean): void
        /** Sets the canvas light's shadow's filter, see [enum CanvasLightShadowFilter] constants. */
        static canvas_light_set_shadow_filter(light: RID, filter: RenderingServer.CanvasLightShadowFilter): void
        /** Sets the color of the canvas light's shadow. */
        static canvas_light_set_shadow_color(light: RID, color: Color): void
        /** Smoothens the shadow. The lower, the smoother. */
        static canvas_light_set_shadow_smooth(light: RID, smooth: number /*f64*/): void
        /** Sets the blend mode for the given canvas light. See [enum CanvasLightBlendMode] for options. Equivalent to [member Light2D.blend_mode]. */
        static canvas_light_set_blend_mode(light: RID, mode: RenderingServer.CanvasLightBlendMode): void
        /** Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_light_occluder_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent node is [LightOccluder2D].
         */
        static canvas_light_occluder_create(): RID
        /** Attaches a light occluder to the canvas. Removes it from its previous canvas. */
        static canvas_light_occluder_attach_to_canvas(occluder: RID, canvas: RID): void
        /** Enables or disables light occluder. */
        static canvas_light_occluder_set_enabled(occluder: RID, enabled: boolean): void
        /** Sets a light occluder's polygon. */
        static canvas_light_occluder_set_polygon(occluder: RID, polygon: RID): void
        static canvas_light_occluder_set_as_sdf_collision(occluder: RID, enable: boolean): void
        /** Sets a light occluder's [Transform2D]. */
        static canvas_light_occluder_set_transform(occluder: RID, transform: Transform2D): void
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_occluder_set_light_mask(occluder: RID, mask: number /*i64*/): void
        /** Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all [code]canvas_occluder_polygon_*[/code] RenderingServer functions.
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
         *  [b]Note:[/b] The equivalent resource is [OccluderPolygon2D].
         */
        static canvas_occluder_polygon_create(): RID
        /** Sets the shape of the occluder polygon. */
        static canvas_occluder_polygon_set_shape(occluder_polygon: RID, shape: PackedVector2Array, closed: boolean): void
        /** Sets an occluder polygons cull mode. See [enum CanvasOccluderPolygonCullMode] constants. */
        static canvas_occluder_polygon_set_cull_mode(occluder_polygon: RID, mode: RenderingServer.CanvasOccluderPolygonCullMode): void
        /** Sets the [member ProjectSettings.rendering/2d/shadow_atlas/size] to use for [Light2D] shadow rendering (in pixels). The value is rounded up to the nearest power of 2. */
        static canvas_set_shadow_texture_size(size: number /*i64*/): void
        /** Creates a new global shader uniform.
         *  [b]Note:[/b] Global shader parameter names are case-sensitive.
         */
        static global_shader_parameter_add(name: StringName, type: RenderingServer.GlobalShaderParameterType, default_value: any): void
        /** Removes the global shader uniform specified by [param name]. */
        static global_shader_parameter_remove(name: StringName): void
        /** Returns the list of global shader uniform names.
         *  [b]Note:[/b] [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
         */
        static global_shader_parameter_get_list(): Array
        /** Sets the global shader uniform [param name] to [param value]. */
        static global_shader_parameter_set(name: StringName, value: any): void
        /** Overrides the global shader uniform [param name] with [param value]. Equivalent to the [ShaderGlobalsOverride] node. */
        static global_shader_parameter_set_override(name: StringName, value: any): void
        /** Returns the value of the global shader uniform specified by [param name].
         *  [b]Note:[/b] [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
         */
        static global_shader_parameter_get(name: StringName): any
        /** Returns the type associated to the global shader uniform specified by [param name].
         *  [b]Note:[/b] [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
         */
        static global_shader_parameter_get_type(name: StringName): RenderingServer.GlobalShaderParameterType
        /** Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly. */
        static free_rid(rid: RID): void
        /** Schedules a callback to the given callable after a frame has been drawn. */
        static request_frame_drawn_callback(callable: Callable): void
        /** Returns [code]true[/code] if changes have been made to the RenderingServer's data. [method force_draw] is usually called if this happens. */
        static has_changed(): boolean
        /** Returns a statistic about the rendering engine which can be used for performance profiling. See [enum RenderingServer.RenderingInfo] for a list of values that can be queried. See also [method viewport_get_render_info], which returns information specific to a viewport.
         *  [b]Note:[/b] Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.
         *  [b]Note:[/b] Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method get_rendering_info] returns [code]0[/code]. To print rendering information in [code]_ready()[/code] successfully, use the following:
         *  
         */
        static get_rendering_info(info: RenderingServer.RenderingInfo): number /*i64*/
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").
         *  [b]Note:[/b] When running a headless or server binary, this function returns an empty string.
         *  [b]Note:[/b] On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.
         */
        static get_video_adapter_name(): string
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").
         *  [b]Note:[/b] When running a headless or server binary, this function returns an empty string.
         */
        static get_video_adapter_vendor(): string
        /** Returns the type of the video adapter. Since dedicated graphics cards from a given generation will [i]usually[/i] be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.
         *  [b]Note:[/b] When using the OpenGL backend or when running in headless mode, this function always returns [constant RenderingDevice.DEVICE_TYPE_OTHER].
         */
        static get_video_adapter_type(): RenderingDevice.DeviceType
        /** Returns the version of the graphics video adapter [i]currently in use[/i] (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also [method OS.get_video_adapter_driver_info].
         *  [b]Note:[/b] When running a headless or server binary, this function returns an empty string.
         */
        static get_video_adapter_api_version(): string
        /** Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also [method get_test_cube]. */
        static make_sphere_mesh(latitudes: number /*i64*/, longitudes: number /*i64*/, radius: number /*f64*/): RID
        /** Returns the RID of the test cube. This mesh will be created and returned on the first call to [method get_test_cube], then it will be cached for subsequent calls. See also [method make_sphere_mesh]. */
        static get_test_cube(): RID
        /** Returns the RID of a 256×256 texture with a testing pattern on it (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_test_texture], then it will be cached for subsequent calls. See also [method get_white_texture].
         *  Example of getting the test texture and applying it to a [Sprite2D] node:
         *  
         */
        static get_test_texture(): RID
        /** Returns the ID of a 4×4 white texture (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_white_texture], then it will be cached for subsequent calls. See also [method get_test_texture].
         *  Example of getting the white texture and applying it to a [Sprite2D] node:
         *  
         */
        static get_white_texture(): RID
        /** Sets a boot image. The color defines the background color. If [param scale] is [code]true[/code], the image will be scaled to fit the screen size. If [param use_filter] is [code]true[/code], the image will be scaled with linear interpolation. If [param use_filter] is [code]false[/code], the image will be scaled with nearest-neighbor interpolation. */
        static set_boot_image(image: Image, color: Color, scale: boolean, use_filter: boolean = true): void
        /** Returns the default clear color which is used when a specific clear color has not been selected. See also [method set_default_clear_color]. */
        static get_default_clear_color(): Color
        /** Sets the default clear color which is used when a specific clear color has not been selected. See also [method get_default_clear_color]. */
        static set_default_clear_color(color: Color): void
        /** Not yet implemented. Always returns [code]false[/code]. */
        static has_feature(feature: RenderingServer.Features): boolean
        /** Returns [code]true[/code] if the OS supports a certain [param feature]. Features might be [code]s3tc[/code], [code]etc[/code], and [code]etc2[/code]. */
        static has_os_feature(feature: string): boolean
        /** This method is currently unimplemented and does nothing if called with [param generate] set to [code]true[/code]. */
        static set_debug_generate_wireframes(generate: boolean): void
        static is_render_loop_enabled(): boolean
        static set_render_loop_enabled(enabled: boolean): void
        /** Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does [i]not[/i] require [method viewport_set_measure_render_time] to be enabled on a viewport to be queried. See also [method viewport_get_measured_render_time_cpu]. */
        static get_frame_setup_time_cpu(): number /*f64*/
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost. */
        static force_sync(): void
        /** Forces redrawing of all viewports at once. Must be called from the main thread. */
        static force_draw(swap_buffers: boolean = true, frame_step: number /*f64*/ = 0): void
        /** Returns the global RenderingDevice.
         *  [b]Note:[/b] When using the OpenGL backend or when running in headless mode, this function always returns [code]null[/code].
         */
        static get_rendering_device(): RenderingDevice
        /** Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.
         *  [b]Note:[/b] When using the OpenGL backend or when running in headless mode, this function always returns [code]null[/code].
         */
        static create_local_rendering_device(): RenderingDevice
        /** As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as [RenderingDevice] and similar RD classes), push a callable via this function so it will be executed on the render thread. */
        static call_on_render_thread(callable: Callable): void
        /** If [code]false[/code], disables rendering completely, but the engine logic is still being processed. You can call [method force_draw] to draw a frame even with rendering disabled. */
        render_loop_enabled: boolean
        static readonly frame_pre_draw: Signal
        static readonly frame_post_draw: Signal
    }
    // // Singleton Class
    namespace AudioServer {
        enum SpeakerMode {
            SPEAKER_MODE_STEREO = 0,
            SPEAKER_SURROUND_31 = 1,
            SPEAKER_SURROUND_51 = 2,
            SPEAKER_SURROUND_71 = 3,
        }
    }
    /** Server interface for low-level audio access. */
    class AudioServer extends Object {
        static set_bus_count(amount: number /*i64*/): void
        static get_bus_count(): number /*i64*/
        /** Removes the bus at index [param index]. */
        static remove_bus(index: number /*i64*/): void
        /** Adds a bus at [param at_position]. */
        static add_bus(at_position: number /*i64*/ = -1): void
        /** Moves the bus from index [param index] to index [param to_index]. */
        static move_bus(index: number /*i64*/, to_index: number /*i64*/): void
        /** Sets the name of the bus at index [param bus_idx] to [param name]. */
        static set_bus_name(bus_idx: number /*i64*/, name: string): void
        /** Returns the name of the bus with the index [param bus_idx]. */
        static get_bus_name(bus_idx: number /*i64*/): string
        /** Returns the index of the bus with the name [param bus_name]. Returns [code]-1[/code] if no bus with the specified name exist. */
        static get_bus_index(bus_name: StringName): number /*i64*/
        /** Returns the number of channels of the bus at index [param bus_idx]. */
        static get_bus_channels(bus_idx: number /*i64*/): number /*i64*/
        /** Sets the volume of the bus at index [param bus_idx] to [param volume_db]. */
        static set_bus_volume_db(bus_idx: number /*i64*/, volume_db: number /*f64*/): void
        /** Returns the volume of the bus at index [param bus_idx] in dB. */
        static get_bus_volume_db(bus_idx: number /*i64*/): number /*f64*/
        /** Connects the output of the bus at [param bus_idx] to the bus named [param send]. */
        static set_bus_send(bus_idx: number /*i64*/, send: StringName): void
        /** Returns the name of the bus that the bus at index [param bus_idx] sends to. */
        static get_bus_send(bus_idx: number /*i64*/): StringName
        /** If [code]true[/code], the bus at index [param bus_idx] is in solo mode. */
        static set_bus_solo(bus_idx: number /*i64*/, enable: boolean): void
        /** If [code]true[/code], the bus at index [param bus_idx] is in solo mode. */
        static is_bus_solo(bus_idx: number /*i64*/): boolean
        /** If [code]true[/code], the bus at index [param bus_idx] is muted. */
        static set_bus_mute(bus_idx: number /*i64*/, enable: boolean): void
        /** If [code]true[/code], the bus at index [param bus_idx] is muted. */
        static is_bus_mute(bus_idx: number /*i64*/): boolean
        /** If [code]true[/code], the bus at index [param bus_idx] is bypassing effects. */
        static set_bus_bypass_effects(bus_idx: number /*i64*/, enable: boolean): void
        /** If [code]true[/code], the bus at index [param bus_idx] is bypassing effects. */
        static is_bus_bypassing_effects(bus_idx: number /*i64*/): boolean
        /** Adds an [AudioEffect] effect to the bus [param bus_idx] at [param at_position]. */
        static add_bus_effect(bus_idx: number /*i64*/, effect: AudioEffect, at_position: number /*i64*/ = -1): void
        /** Removes the effect at index [param effect_idx] from the bus at index [param bus_idx]. */
        static remove_bus_effect(bus_idx: number /*i64*/, effect_idx: number /*i64*/): void
        /** Returns the number of effects on the bus at [param bus_idx]. */
        static get_bus_effect_count(bus_idx: number /*i64*/): number /*i64*/
        /** Returns the [AudioEffect] at position [param effect_idx] in bus [param bus_idx]. */
        static get_bus_effect(bus_idx: number /*i64*/, effect_idx: number /*i64*/): AudioEffect
        /** Returns the [AudioEffectInstance] assigned to the given bus and effect indices (and optionally channel). */
        static get_bus_effect_instance(bus_idx: number /*i64*/, effect_idx: number /*i64*/, channel: number /*i64*/ = 0): AudioEffectInstance
        /** Swaps the position of two effects in bus [param bus_idx]. */
        static swap_bus_effects(bus_idx: number /*i64*/, effect_idx: number /*i64*/, by_effect_idx: number /*i64*/): void
        /** If [code]true[/code], the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static set_bus_effect_enabled(bus_idx: number /*i64*/, effect_idx: number /*i64*/, enabled: boolean): void
        /** If [code]true[/code], the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static is_bus_effect_enabled(bus_idx: number /*i64*/, effect_idx: number /*i64*/): boolean
        /** Returns the peak volume of the left speaker at bus index [param bus_idx] and channel index [param channel]. */
        static get_bus_peak_volume_left_db(bus_idx: number /*i64*/, channel: number /*i64*/): number /*f64*/
        /** Returns the peak volume of the right speaker at bus index [param bus_idx] and channel index [param channel]. */
        static get_bus_peak_volume_right_db(bus_idx: number /*i64*/, channel: number /*i64*/): number /*f64*/
        static set_playback_speed_scale(scale: number /*f64*/): void
        static get_playback_speed_scale(): number /*f64*/
        /** Locks the audio driver's main loop.
         *  [b]Note:[/b] Remember to unlock it afterwards.
         */
        static lock(): void
        /** Unlocks the audio driver's main loop. (After locking it, you should always unlock it.) */
        static unlock(): void
        /** Returns the speaker configuration. */
        static get_speaker_mode(): AudioServer.SpeakerMode
        /** Returns the sample rate at the output of the [AudioServer]. */
        static get_mix_rate(): number /*f64*/
        /** Returns the names of all audio output devices detected on the system. */
        static get_output_device_list(): PackedStringArray
        static get_output_device(): string
        static set_output_device(name: string): void
        /** Returns the relative time until the next mix occurs. */
        static get_time_to_next_mix(): number /*f64*/
        /** Returns the relative time since the last mix occurred. */
        static get_time_since_last_mix(): number /*f64*/
        /** Returns the audio driver's effective output latency. This is based on [member ProjectSettings.audio/driver/output_latency], but the exact returned value will differ depending on the operating system and audio driver.
         *  [b]Note:[/b] This can be expensive; it is not recommended to call [method get_output_latency] every frame.
         */
        static get_output_latency(): number /*f64*/
        /** Returns the names of all audio input devices detected on the system.
         *  [b]Note:[/b] [member ProjectSettings.audio/driver/enable_input] must be [code]true[/code] for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
         */
        static get_input_device_list(): PackedStringArray
        static get_input_device(): string
        static set_input_device(name: string): void
        /** Overwrites the currently used [AudioBusLayout]. */
        static set_bus_layout(bus_layout: AudioBusLayout): void
        /** Generates an [AudioBusLayout] using the available buses and effects. */
        static generate_bus_layout(): AudioBusLayout
        /** If set to [code]true[/code], all instances of [AudioStreamPlayback] will call [method AudioStreamPlayback._tag_used_streams] every mix step.
         *  [b]Note:[/b] This is enabled by default in the editor, as it is used by editor plugins for the audio stream previews.
         */
        static set_enable_tagging_used_audio_streams(enable: boolean): void
        /** Number of available audio buses. */
        bus_count: number /*i64*/
        /** Name of the current device for audio output (see [method get_output_device_list]). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value [code]"Default"[/code] will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to [code]"Default"[/code]. */
        output_device: string
        /** Name of the current device for audio input (see [method get_input_device_list]). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value [code]"Default"[/code] will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to [code]"Default"[/code].
         *  [b]Note:[/b] [member ProjectSettings.audio/driver/enable_input] must be [code]true[/code] for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
         */
        input_device: string
        /** Scales the rate at which audio is played (i.e. setting it to [code]0.5[/code] will make the audio be played at half its speed). */
        playback_speed_scale: number /*f64*/
        static readonly bus_layout_changed: Signal
        static readonly bus_renamed: Signal
    }
    // // Singleton Class
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
    /** A server interface for low-level 2D physics access. */
    class PhysicsServer2D extends Object {
        /** Creates a 2D world boundary shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's normal direction and distance properties. */
        static world_boundary_shape_create(): RID
        /** Creates a 2D separation ray shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's [code]length[/code] and [code]slide_on_slope[/code] properties. */
        static separation_ray_shape_create(): RID
        /** Creates a 2D segment shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the segment's start and end points. */
        static segment_shape_create(): RID
        /** Creates a 2D circle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the circle's radius. */
        static circle_shape_create(): RID
        /** Creates a 2D rectangle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the rectangle's half-extents. */
        static rectangle_shape_create(): RID
        /** Creates a 2D capsule shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the capsule's height and radius. */
        static capsule_shape_create(): RID
        /** Creates a 2D convex polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the convex polygon's points. */
        static convex_polygon_shape_create(): RID
        /** Creates a 2D concave polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the concave polygon's segments. */
        static concave_polygon_shape_create(): RID
        /** Sets the shape data that defines the configuration of the shape. The [param data] to be passed depends on the shape's type (see [method shape_get_type]):
         *  - [constant SHAPE_WORLD_BOUNDARY]: an array of length two containing a [Vector2] [code]normal[/code] direction and a [float] distance [code]d[/code],
         *  - [constant SHAPE_SEPARATION_RAY]: a dictionary containing the key [code]length[/code] with a [float] value and the key [code]slide_on_slope[/code] with a [bool] value,
         *  - [constant SHAPE_SEGMENT]: a [Rect2] [code]rect[/code] containing the first point of the segment in [code]rect.position[/code] and the second point of the segment in [code]rect.size[/code],
         *  - [constant SHAPE_CIRCLE]: a [float] [code]radius[/code],
         *  - [constant SHAPE_RECTANGLE]: a [Vector2] [code]half_extents[/code],
         *  - [constant SHAPE_CAPSULE]: an array of length two (or a [Vector2]) containing a [float] [code]height[/code] and a [float] [code]radius[/code],
         *  - [constant SHAPE_CONVEX_POLYGON]: either a [PackedVector2Array] of points defining a convex polygon in counterclockwise order (the clockwise outward normal of each segment formed by consecutive points is calculated internally), or a [PackedFloat32Array] of length divisible by four so that every 4-tuple of [float]s contains the coordinates of a point followed by the coordinates of the clockwise outward normal vector to the segment between the current point and the next point,
         *  - [constant SHAPE_CONCAVE_POLYGON]: a [PackedVector2Array] of length divisible by two (each pair of points forms one segment).
         *  [b]Warning:[/b] In the case of [constant SHAPE_CONVEX_POLYGON], this method does not check if the points supplied actually form a convex polygon (unlike the [member CollisionPolygon2D.polygon] property).
         */
        static shape_set_data(shape: RID, data: any): void
        /** Returns the shape's type (see [enum ShapeType]). */
        static shape_get_type(shape: RID): PhysicsServer2D.ShapeType
        /** Returns the shape data that defines the configuration of the shape, such as the half-extents of a rectangle or the segments of a concave shape. See [method shape_set_data] for the precise format of this data in each case. */
        static shape_get_data(shape: RID): any
        /** Creates a 2D space in the physics server, and returns the [RID] that identifies it. A space contains bodies and areas, and controls the stepping of the physics simulation of the objects in it. */
        static space_create(): RID
        /** Activates or deactivates the space. If [param active] is [code]false[/code], then the physics server will not do anything with this space in its physics step. */
        static space_set_active(space: RID, active: boolean): void
        /** Returns [code]true[/code] if the space is active. */
        static space_is_active(space: RID): boolean
        /** Sets the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static space_set_param(space: RID, param: PhysicsServer2D.SpaceParameter, value: number /*f64*/): void
        /** Returns the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static space_get_param(space: RID, param: PhysicsServer2D.SpaceParameter): number /*f64*/
        /** Returns the state of a space, a [PhysicsDirectSpaceState2D]. This object can be used for collision/intersection queries. */
        static space_get_direct_state(space: RID): PhysicsDirectSpaceState2D
        /** Creates a 2D area object in the physics server, and returns the [RID] that identifies it. Use [method area_add_shape] to add shapes to it, use [method area_set_transform] to set its transform, and use [method area_set_space] to add the area to a space. */
        static area_create(): RID
        /** Adds the area to the given space, after removing the area from the previously assigned space (if any).
         *  [b]Note:[/b] To remove an area from a space without immediately adding it back elsewhere, use [code]PhysicsServer2D.area_set_space(area, RID())[/code].
         */
        static area_set_space(area: RID, space: RID): void
        /** Returns the [RID] of the space assigned to the area. Returns an empty [RID] if no space is assigned. */
        static area_get_space(area: RID): RID
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of an area are usually referenced by their index in this array. */
        static area_add_shape(area: RID, shape: RID, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, disabled: boolean = false): void
        /** Replaces the area's shape at the given index by another shape, while not affecting the [code]transform[/code] and [code]disabled[/code] properties at the same index. */
        static area_set_shape(area: RID, shape_idx: number /*i64*/, shape: RID): void
        /** Sets the local transform matrix of the area's shape with the given index. */
        static area_set_shape_transform(area: RID, shape_idx: number /*i64*/, transform: Transform2D): void
        /** Sets the disabled property of the area's shape with the given index. If [param disabled] is [code]true[/code], then the shape will not detect any other shapes entering or exiting it. */
        static area_set_shape_disabled(area: RID, shape_idx: number /*i64*/, disabled: boolean): void
        /** Returns the number of shapes added to the area. */
        static area_get_shape_count(area: RID): number /*i64*/
        /** Returns the [RID] of the shape with the given index in the area's array of shapes. */
        static area_get_shape(area: RID, shape_idx: number /*i64*/): RID
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static area_get_shape_transform(area: RID, shape_idx: number /*i64*/): Transform2D
        /** Removes the shape with the given index from the area's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the area's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static area_remove_shape(area: RID, shape_idx: number /*i64*/): void
        /** Removes all shapes from the area. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static area_clear_shapes(area: RID): void
        /** Assigns the area to one or many physics layers, via a bitmask. */
        static area_set_collision_layer(area: RID, layer: number /*i64*/): void
        /** Returns the physics layer or layers the area belongs to, as a bitmask. */
        static area_get_collision_layer(area: RID): number /*i64*/
        /** Sets which physics layers the area will monitor, via a bitmask. */
        static area_set_collision_mask(area: RID, mask: number /*i64*/): void
        /** Returns the physics layer or layers the area can contact with, as a bitmask. */
        static area_get_collision_mask(area: RID): number /*i64*/
        /** Sets the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static area_set_param(area: RID, param: PhysicsServer2D.AreaParameter, value: any): void
        /** Sets the transform matrix of the area. */
        static area_set_transform(area: RID, transform: Transform2D): void
        /** Returns the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static area_get_param(area: RID, param: PhysicsServer2D.AreaParameter): any
        /** Returns the transform matrix of the area. */
        static area_get_transform(area: RID): Transform2D
        /** Attaches the [code]ObjectID[/code] of an [Object] to the area. Use [method Object.get_instance_id] to get the [code]ObjectID[/code] of a [CollisionObject2D]. */
        static area_attach_object_instance_id(area: RID, id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero [code]ObjectID[/code]. */
        static area_get_object_instance_id(area: RID): number /*i64*/
        /** Attaches the [code]ObjectID[/code] of a canvas to the area. Use [method Object.get_instance_id] to get the [code]ObjectID[/code] of a [CanvasLayer]. */
        static area_attach_canvas_instance_id(area: RID, id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the canvas attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero [code]ObjectID[/code]. */
        static area_get_canvas_instance_id(area: RID): number /*i64*/
        /** Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:
         *  1. an integer [code]status[/code]: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,
         *  2. an [RID] [code]body_rid[/code]: the [RID] of the body that entered or exited the area,
         *  3. an integer [code]instance_id[/code]: the [code]ObjectID[/code] attached to the body,
         *  4. an integer [code]body_shape_idx[/code]: the index of the shape of the body that entered or exited the area,
         *  5. an integer [code]self_shape_idx[/code]: the index of the shape of the area where the body entered or exited.
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.
         */
        static area_set_monitor_callback(area: RID, callback: Callable): void
        /** Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:
         *  1. an integer [code]status[/code]: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,
         *  2. an [RID] [code]area_rid[/code]: the [RID] of the other area that entered or exited the area,
         *  3. an integer [code]instance_id[/code]: the [code]ObjectID[/code] attached to the other area,
         *  4. an integer [code]area_shape_idx[/code]: the index of the shape of the other area that entered or exited the area,
         *  5. an integer [code]self_shape_idx[/code]: the index of the shape of the area where the other area entered or exited.
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.
         */
        static area_set_area_monitor_callback(area: RID, callback: Callable): void
        /** Sets whether the area is monitorable or not. If [param monitorable] is [code]true[/code], the area monitoring callback of other areas will be called when this area enters or exits them. */
        static area_set_monitorable(area: RID, monitorable: boolean): void
        /** Creates a 2D body object in the physics server, and returns the [RID] that identifies it. Use [method body_add_shape] to add shapes to it, use [method body_set_state] to set its transform, and use [method body_set_space] to add the body to a space. */
        static body_create(): RID
        /** Adds the body to the given space, after removing the body from the previously assigned space (if any). If the body's mode is set to [constant BODY_MODE_RIGID], then adding the body to a space will have the following additional effects:
         *  - If the parameter [constant BODY_PARAM_CENTER_OF_MASS] has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.
         *  - If the parameter [constant BODY_PARAM_INERTIA] is set to a value [code]<= 0.0[/code], then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.
         *  [b]Note:[/b] To remove a body from a space without immediately adding it back elsewhere, use [code]PhysicsServer2D.body_set_space(body, RID())[/code].
         */
        static body_set_space(body: RID, space: RID): void
        /** Returns the [RID] of the space assigned to the body. Returns an empty [RID] if no space is assigned. */
        static body_get_space(body: RID): RID
        /** Sets the body's mode. See [enum BodyMode] for the list of available modes. */
        static body_set_mode(body: RID, mode: PhysicsServer2D.BodyMode): void
        /** Returns the body's mode (see [enum BodyMode]). */
        static body_get_mode(body: RID): PhysicsServer2D.BodyMode
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of a body are usually referenced by their index in this array. */
        static body_add_shape(body: RID, shape: RID, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, disabled: boolean = false): void
        /** Replaces the body's shape at the given index by another shape, while not affecting the [code]transform[/code], [code]disabled[/code], and one-way collision properties at the same index. */
        static body_set_shape(body: RID, shape_idx: number /*i64*/, shape: RID): void
        /** Sets the local transform matrix of the body's shape with the given index. */
        static body_set_shape_transform(body: RID, shape_idx: number /*i64*/, transform: Transform2D): void
        /** Returns the number of shapes added to the body. */
        static body_get_shape_count(body: RID): number /*i64*/
        /** Returns the [RID] of the shape with the given index in the body's array of shapes. */
        static body_get_shape(body: RID, shape_idx: number /*i64*/): RID
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static body_get_shape_transform(body: RID, shape_idx: number /*i64*/): Transform2D
        /** Removes the shape with the given index from the body's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the body's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static body_remove_shape(body: RID, shape_idx: number /*i64*/): void
        /** Removes all shapes from the body. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static body_clear_shapes(body: RID): void
        /** Sets the disabled property of the body's shape with the given index. If [param disabled] is [code]true[/code], then the shape will be ignored in all collision detection. */
        static body_set_shape_disabled(body: RID, shape_idx: number /*i64*/, disabled: boolean): void
        /** Sets the one-way collision properties of the body's shape with the given index. If [param enable] is [code]true[/code], the one-way collision direction given by the shape's local upward axis [code]body_get_shape_transform(body, shape_idx).y[/code] will be used to ignore collisions with the shape in the opposite direction, and to ensure depenetration of kinematic bodies happens in this direction. */
        static body_set_shape_as_one_way_collision(body: RID, shape_idx: number /*i64*/, enable: boolean, margin: number /*f64*/): void
        /** Attaches the [code]ObjectID[/code] of an [Object] to the body. Use [method Object.get_instance_id] to get the [code]ObjectID[/code] of a [CollisionObject2D]. */
        static body_attach_object_instance_id(body: RID, id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero [code]ObjectID[/code]. */
        static body_get_object_instance_id(body: RID): number /*i64*/
        /** Attaches the [code]ObjectID[/code] of a canvas to the body. Use [method Object.get_instance_id] to get the [code]ObjectID[/code] of a [CanvasLayer]. */
        static body_attach_canvas_instance_id(body: RID, id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the canvas attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero [code]ObjectID[/code]. */
        static body_get_canvas_instance_id(body: RID): number /*i64*/
        /** Sets the continuous collision detection mode using one of the [enum CCDMode] constants.
         *  Continuous collision detection tries to predict where a moving body would collide in between physics updates, instead of moving it and correcting its movement if it collided.
         */
        static body_set_continuous_collision_detection_mode(body: RID, mode: PhysicsServer2D.CCDMode): void
        /** Returns the body's continuous collision detection mode (see [enum CCDMode]). */
        static body_get_continuous_collision_detection_mode(body: RID): PhysicsServer2D.CCDMode
        /** Sets the physics layer or layers the body belongs to, via a bitmask. */
        static body_set_collision_layer(body: RID, layer: number /*i64*/): void
        /** Returns the physics layer or layers the body belongs to, as a bitmask. */
        static body_get_collision_layer(body: RID): number /*i64*/
        /** Sets the physics layer or layers the body can collide with, via a bitmask. */
        static body_set_collision_mask(body: RID, mask: number /*i64*/): void
        /** Returns the physics layer or layers the body can collide with, as a bitmask. */
        static body_get_collision_mask(body: RID): number /*i64*/
        /** Sets the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static body_set_collision_priority(body: RID, priority: number /*f64*/): void
        /** Returns the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static body_get_collision_priority(body: RID): number /*f64*/
        /** Sets the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static body_set_param(body: RID, param: PhysicsServer2D.BodyParameter, value: any): void
        /** Returns the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static body_get_param(body: RID, param: PhysicsServer2D.BodyParameter): any
        /** Restores the default inertia and center of mass of the body based on its shapes. This undoes any custom values previously set using [method body_set_param]. */
        static body_reset_mass_properties(body: RID): void
        /** Sets the value of a body's state. See [enum BodyState] for the list of available states.
         *  [b]Note:[/b] The state change doesn't take effect immediately. The state will change on the next physics frame.
         */
        static body_set_state(body: RID, state: PhysicsServer2D.BodyState, value: any): void
        /** Returns the value of the given state of the body. See [enum BodyState] for the list of available states. */
        static body_get_state(body: RID, state: PhysicsServer2D.BodyState): any
        /** Applies a directional impulse to the body, at the body's center of mass. The impulse does not affect rotation.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         *  This is equivalent to using [method body_apply_impulse] at the body's center of mass.
         */
        static body_apply_central_impulse(body: RID, impulse: Vector2): void
        /** Applies a rotational impulse to the body. The impulse does not affect position.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         */
        static body_apply_torque_impulse(body: RID, impulse: number /*f64*/): void
        /** Applies a positioned impulse to the body. The impulse can affect rotation if [param position] is different from the body's center of mass.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_apply_impulse(body: RID, impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        /** Applies a directional force to the body, at the body's center of mass. The force does not affect rotation. A force is time dependent and meant to be applied every physics update.
         *  This is equivalent to using [method body_apply_force] at the body's center of mass.
         */
        static body_apply_central_force(body: RID, force: Vector2): void
        /** Applies a positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. A force is time dependent and meant to be applied every physics update.
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_apply_force(body: RID, force: Vector2, position: Vector2 = Vector2.ZERO): void
        /** Applies a rotational force to the body. The force does not affect position. A force is time dependent and meant to be applied every physics update. */
        static body_apply_torque(body: RID, torque: number /*f64*/): void
        /** Adds a constant directional force to the body. The force does not affect rotation. The force remains applied over time until cleared with [code]PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))[/code].
         *  This is equivalent to using [method body_add_constant_force] at the body's center of mass.
         */
        static body_add_constant_central_force(body: RID, force: Vector2): void
        /** Adds a constant positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. The force remains applied over time until cleared with [code]PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_add_constant_force(body: RID, force: Vector2, position: Vector2 = Vector2.ZERO): void
        /** Adds a constant rotational force to the body. The force does not affect position. The force remains applied over time until cleared with [code]PhysicsServer2D.body_set_constant_torque(body, 0)[/code]. */
        static body_add_constant_torque(body: RID, torque: number /*f64*/): void
        /** Sets the body's total constant positional force applied during each physics update.
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].
         */
        static body_set_constant_force(body: RID, force: Vector2): void
        /** Returns the body's total constant positional force applied during each physics update.
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].
         */
        static body_get_constant_force(body: RID): Vector2
        /** Sets the body's total constant rotational force applied during each physics update.
         *  See [method body_add_constant_torque].
         */
        static body_set_constant_torque(body: RID, torque: number /*f64*/): void
        /** Returns the body's total constant rotational force applied during each physics update.
         *  See [method body_add_constant_torque].
         */
        static body_get_constant_torque(body: RID): number /*f64*/
        /** Modifies the body's linear velocity so that its projection to the axis [code]axis_velocity.normalized()[/code] is exactly [code]axis_velocity.length()[/code]. This is useful for jumping behavior. */
        static body_set_axis_velocity(body: RID, axis_velocity: Vector2): void
        /** Adds [param excepted_body] to the body's list of collision exceptions, so that collisions with it are ignored. */
        static body_add_collision_exception(body: RID, excepted_body: RID): void
        /** Removes [param excepted_body] from the body's list of collision exceptions, so that collisions with it are no longer ignored. */
        static body_remove_collision_exception(body: RID, excepted_body: RID): void
        /** Sets the maximum number of contacts that the body can report. If [param amount] is greater than zero, then the body will keep track of at most this many contacts with other bodies. */
        static body_set_max_contacts_reported(body: RID, amount: number /*i64*/): void
        /** Returns the maximum number of contacts that the body can report. See [method body_set_max_contacts_reported]. */
        static body_get_max_contacts_reported(body: RID): number /*i64*/
        /** Sets whether the body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
        static body_set_omit_force_integration(body: RID, enable: boolean): void
        /** Returns [code]true[/code] if the body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
        static body_is_omitting_force_integration(body: RID): boolean
        /** Sets the function used to calculate physics for the body, if that body allows it (see [method body_set_omit_force_integration]).
         *  The force integration function takes the following two parameters:
         *  1. a [PhysicsDirectBodyState2D] [code]state[/code]: used to retrieve and modify the body's state,
         *  2. a [Variant] [param userdata]: optional user data.
         *  [b]Note:[/b] This callback is currently not called in Godot Physics.
         */
        static body_set_force_integration_callback(body: RID, callable: Callable, userdata: any = <any> {} /*compound.type from nil*/): void
        /** Returns [code]true[/code] if a collision would result from moving the body along a motion vector from a given point in space. See [PhysicsTestMotionParameters2D] for the available motion parameters. Optionally a [PhysicsTestMotionResult2D] object can be passed, which will be used to store the information about the resulting collision. */
        static body_test_motion(body: RID, parameters: PhysicsTestMotionParameters2D, result: PhysicsTestMotionResult2D = <any> {} /*compound.type from nil*/): boolean
        /** Returns the [PhysicsDirectBodyState2D] of the body. Returns [code]null[/code] if the body is destroyed or not assigned to a space. */
        static body_get_direct_state(body: RID): PhysicsDirectBodyState2D
        /** Creates a 2D joint in the physics server, and returns the [RID] that identifies it. To set the joint type, use [method joint_make_damped_spring], [method joint_make_groove] or [method joint_make_pin]. Use [method joint_set_param] to set generic joint parameters. */
        static joint_create(): RID
        /** Destroys the joint with the given [RID], creates a new uninitialized joint, and makes the [RID] refer to this new joint. */
        static joint_clear(joint: RID): void
        /** Sets the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static joint_set_param(joint: RID, param: PhysicsServer2D.JointParam, value: number /*f64*/): void
        /** Returns the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static joint_get_param(joint: RID, param: PhysicsServer2D.JointParam): number /*f64*/
        /** Sets whether the bodies attached to the [Joint2D] will collide with each other. */
        static joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        /** Returns whether the bodies attached to the [Joint2D] will collide with each other. */
        static joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        /** Makes the joint a pin joint. If [param body_b] is an empty [RID], then [param body_a] is pinned to the point [param anchor] (given in global coordinates); otherwise, [param body_a] is pinned to [param body_b] at the point [param anchor] (given in global coordinates). To set the parameters which are specific to the pin joint, see [method pin_joint_set_param]. */
        static joint_make_pin(joint: RID, anchor: Vector2, body_a: RID, body_b: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Makes the joint a groove joint. */
        static joint_make_groove(joint: RID, groove1_a: Vector2, groove2_a: Vector2, anchor_b: Vector2, body_a: RID = <any> {} /*compound.type from 23([object Object])*/, body_b: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Makes the joint a damped spring joint, attached at the point [param anchor_a] (given in global coordinates) on the body [param body_a] and at the point [param anchor_b] (given in global coordinates) on the body [param body_b]. To set the parameters which are specific to the damped spring, see [method damped_spring_joint_set_param]. */
        static joint_make_damped_spring(joint: RID, anchor_a: Vector2, anchor_b: Vector2, body_a: RID, body_b: RID = <any> {} /*compound.type from 23([object Object])*/): void
        /** Sets a pin joint flag (see [enum PinJointFlag] constants). */
        static pin_joint_set_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        /** Gets a pin joint flag (see [enum PinJointFlag] constants). */
        static pin_joint_get_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag): boolean
        /** Sets a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pin_joint_set_param(joint: RID, param: PhysicsServer2D.PinJointParam, value: number /*f64*/): void
        /** Returns the value of a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pin_joint_get_param(joint: RID, param: PhysicsServer2D.PinJointParam): number /*f64*/
        /** Sets the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static damped_spring_joint_set_param(joint: RID, param: PhysicsServer2D.DampedSpringParam, value: number /*f64*/): void
        /** Returns the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static damped_spring_joint_get_param(joint: RID, param: PhysicsServer2D.DampedSpringParam): number /*f64*/
        /** Returns the joint's type (see [enum JointType]). */
        static joint_get_type(joint: RID): PhysicsServer2D.JointType
        /** Destroys any of the objects created by PhysicsServer2D. If the [RID] passed is not one of the objects that can be created by PhysicsServer2D, an error will be printed to the console. */
        static free_rid(rid: RID): void
        /** Activates or deactivates the 2D physics server. If [param active] is [code]false[/code], then the physics server will not do anything in its physics step. */
        static set_active(active: boolean): void
        /** Returns information about the current state of the 2D physics engine. See [enum ProcessInfo] for the list of available states. */
        static get_process_info(process_info: PhysicsServer2D.ProcessInfo): number /*i64*/
    }
    // // Singleton Class
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
    /** A server interface for low-level 3D physics access. */
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
        /** Sets the shape data that defines its shape and size. The data to be passed depends on the kind of shape created [method shape_get_type]. */
        static shape_set_data(shape: RID, data: any): void
        /** Returns the type of shape (see [enum ShapeType] constants). */
        static shape_get_type(shape: RID): PhysicsServer3D.ShapeType
        /** Returns the shape data. */
        static shape_get_data(shape: RID): any
        /** Creates a space. A space is a collection of parameters for the physics engine that can be assigned to an area or a body. It can be assigned to an area with [method area_set_space], or to a body with [method body_set_space]. */
        static space_create(): RID
        /** Marks a space as active. It will not have an effect, unless it is assigned to an area or body. */
        static space_set_active(space: RID, active: boolean): void
        /** Returns whether the space is active. */
        static space_is_active(space: RID): boolean
        /** Sets the value for a space parameter. A list of available parameters is on the [enum SpaceParameter] constants. */
        static space_set_param(space: RID, param: PhysicsServer3D.SpaceParameter, value: number /*f64*/): void
        /** Returns the value of a space parameter. */
        static space_get_param(space: RID, param: PhysicsServer3D.SpaceParameter): number /*f64*/
        /** Returns the state of a space, a [PhysicsDirectSpaceState3D]. This object can be used to make collision/intersection queries. */
        static space_get_direct_state(space: RID): PhysicsDirectSpaceState3D
        /** Creates an [Area3D]. */
        static area_create(): RID
        /** Assigns a space to the area. */
        static area_set_space(area: RID, space: RID): void
        /** Returns the space assigned to the area. */
        static area_get_space(area: RID): RID
        /** Adds a shape to the area, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
        static area_add_shape(area: RID, shape: RID, transform: Transform3D = <any> {} /*compound.type from 18([object Object])*/, disabled: boolean = false): void
        /** Substitutes a given area shape by another. The old shape is selected by its index, the new one by its [RID]. */
        static area_set_shape(area: RID, shape_idx: number /*i64*/, shape: RID): void
        /** Sets the transform matrix for an area shape. */
        static area_set_shape_transform(area: RID, shape_idx: number /*i64*/, transform: Transform3D): void
        static area_set_shape_disabled(area: RID, shape_idx: number /*i64*/, disabled: boolean): void
        /** Returns the number of shapes assigned to an area. */
        static area_get_shape_count(area: RID): number /*i64*/
        /** Returns the [RID] of the nth shape of an area. */
        static area_get_shape(area: RID, shape_idx: number /*i64*/): RID
        /** Returns the transform matrix of a shape within an area. */
        static area_get_shape_transform(area: RID, shape_idx: number /*i64*/): Transform3D
        /** Removes a shape from an area. It does not delete the shape, so it can be reassigned later. */
        static area_remove_shape(area: RID, shape_idx: number /*i64*/): void
        /** Removes all shapes from an area. It does not delete the shapes, so they can be reassigned later. */
        static area_clear_shapes(area: RID): void
        /** Assigns the area to one or many physics layers. */
        static area_set_collision_layer(area: RID, layer: number /*i64*/): void
        /** Returns the physics layer or layers an area belongs to. */
        static area_get_collision_layer(area: RID): number /*i64*/
        /** Sets which physics layers the area will monitor. */
        static area_set_collision_mask(area: RID, mask: number /*i64*/): void
        /** Returns the physics layer or layers an area can contact with. */
        static area_get_collision_mask(area: RID): number /*i64*/
        /** Sets the value for an area parameter. A list of available parameters is on the [enum AreaParameter] constants. */
        static area_set_param(area: RID, param: PhysicsServer3D.AreaParameter, value: any): void
        /** Sets the transform matrix for an area. */
        static area_set_transform(area: RID, transform: Transform3D): void
        /** Returns an area parameter value. A list of available parameters is on the [enum AreaParameter] constants. */
        static area_get_param(area: RID, param: PhysicsServer3D.AreaParameter): any
        /** Returns the transform matrix for an area. */
        static area_get_transform(area: RID): Transform3D
        /** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
        static area_attach_object_instance_id(area: RID, id: number /*i64*/): void
        /** Gets the instance ID of the object the area is assigned to. */
        static area_get_object_instance_id(area: RID): number /*i64*/
        /** Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:
         *  1. an integer [code]status[/code]: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,
         *  2. an [RID] [code]body_rid[/code]: the [RID] of the body that entered or exited the area,
         *  3. an integer [code]instance_id[/code]: the [code]ObjectID[/code] attached to the body,
         *  4. an integer [code]body_shape_idx[/code]: the index of the shape of the body that entered or exited the area,
         *  5. an integer [code]self_shape_idx[/code]: the index of the shape of the area where the body entered or exited.
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.
         */
        static area_set_monitor_callback(area: RID, callback: Callable): void
        /** Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:
         *  1. an integer [code]status[/code]: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,
         *  2. an [RID] [code]area_rid[/code]: the [RID] of the other area that entered or exited the area,
         *  3. an integer [code]instance_id[/code]: the [code]ObjectID[/code] attached to the other area,
         *  4. an integer [code]area_shape_idx[/code]: the index of the shape of the other area that entered or exited the area,
         *  5. an integer [code]self_shape_idx[/code]: the index of the shape of the area where the other area entered or exited.
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.
         */
        static area_set_area_monitor_callback(area: RID, callback: Callable): void
        static area_set_monitorable(area: RID, monitorable: boolean): void
        /** Sets object pickable with rays. */
        static area_set_ray_pickable(area: RID, enable: boolean): void
        static body_create(): RID
        /** Assigns a space to the body (see [method space_create]). */
        static body_set_space(body: RID, space: RID): void
        /** Returns the [RID] of the space assigned to a body. */
        static body_get_space(body: RID): RID
        /** Sets the body mode, from one of the [enum BodyMode] constants. */
        static body_set_mode(body: RID, mode: PhysicsServer3D.BodyMode): void
        /** Returns the body mode. */
        static body_get_mode(body: RID): PhysicsServer3D.BodyMode
        /** Sets the physics layer or layers a body belongs to. */
        static body_set_collision_layer(body: RID, layer: number /*i64*/): void
        /** Returns the physics layer or layers a body belongs to. */
        static body_get_collision_layer(body: RID): number /*i64*/
        /** Sets the physics layer or layers a body can collide with. */
        static body_set_collision_mask(body: RID, mask: number /*i64*/): void
        /** Returns the physics layer or layers a body can collide with. */
        static body_get_collision_mask(body: RID): number /*i64*/
        /** Sets the body's collision priority. */
        static body_set_collision_priority(body: RID, priority: number /*f64*/): void
        /** Returns the body's collision priority. */
        static body_get_collision_priority(body: RID): number /*f64*/
        /** Adds a shape to the body, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
        static body_add_shape(body: RID, shape: RID, transform: Transform3D = <any> {} /*compound.type from 18([object Object])*/, disabled: boolean = false): void
        /** Substitutes a given body shape by another. The old shape is selected by its index, the new one by its [RID]. */
        static body_set_shape(body: RID, shape_idx: number /*i64*/, shape: RID): void
        /** Sets the transform matrix for a body shape. */
        static body_set_shape_transform(body: RID, shape_idx: number /*i64*/, transform: Transform3D): void
        static body_set_shape_disabled(body: RID, shape_idx: number /*i64*/, disabled: boolean): void
        /** Returns the number of shapes assigned to a body. */
        static body_get_shape_count(body: RID): number /*i64*/
        /** Returns the [RID] of the nth shape of a body. */
        static body_get_shape(body: RID, shape_idx: number /*i64*/): RID
        /** Returns the transform matrix of a body shape. */
        static body_get_shape_transform(body: RID, shape_idx: number /*i64*/): Transform3D
        /** Removes a shape from a body. The shape is not deleted, so it can be reused afterwards. */
        static body_remove_shape(body: RID, shape_idx: number /*i64*/): void
        /** Removes all shapes from a body. */
        static body_clear_shapes(body: RID): void
        /** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
        static body_attach_object_instance_id(body: RID, id: number /*i64*/): void
        /** Gets the instance ID of the object the area is assigned to. */
        static body_get_object_instance_id(body: RID): number /*i64*/
        /** If [code]true[/code], the continuous collision detection mode is enabled.
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
         */
        static body_set_enable_continuous_collision_detection(body: RID, enable: boolean): void
        /** If [code]true[/code], the continuous collision detection mode is enabled. */
        static body_is_continuous_collision_detection_enabled(body: RID): boolean
        /** Sets a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
        static body_set_param(body: RID, param: PhysicsServer3D.BodyParameter, value: any): void
        /** Returns the value of a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
        static body_get_param(body: RID, param: PhysicsServer3D.BodyParameter): any
        /** Restores the default inertia and center of mass based on shapes to cancel any custom values previously set using [method body_set_param]. */
        static body_reset_mass_properties(body: RID): void
        /** Sets a body state (see [enum BodyState] constants). */
        static body_set_state(body: RID, state: PhysicsServer3D.BodyState, value: any): void
        /** Returns a body state. */
        static body_get_state(body: RID, state: PhysicsServer3D.BodyState): any
        /** Applies a directional impulse without affecting rotation.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         *  This is equivalent to using [method body_apply_impulse] at the body's center of mass.
         */
        static body_apply_central_impulse(body: RID, impulse: Vector3): void
        /** Applies a positioned impulse to the body.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_apply_impulse(body: RID, impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        /** Applies a rotational impulse to the body without affecting the position.
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
         */
        static body_apply_torque_impulse(body: RID, impulse: Vector3): void
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.
         *  This is equivalent to using [method body_apply_force] at the body's center of mass.
         */
        static body_apply_central_force(body: RID, force: Vector3): void
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_apply_force(body: RID, force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update. */
        static body_apply_torque(body: RID, torque: Vector3): void
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with [code]body_set_constant_force(body, Vector3(0, 0, 0))[/code].
         *  This is equivalent to using [method body_add_constant_force] at the body's center of mass.
         */
        static body_add_constant_central_force(body: RID, force: Vector3): void
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with [code]body_set_constant_force(body, Vector3(0, 0, 0))[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        static body_add_constant_force(body: RID, force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]body_set_constant_torque(body, Vector3(0, 0, 0))[/code]. */
        static body_add_constant_torque(body: RID, torque: Vector3): void
        /** Sets the body's total constant positional forces applied during each physics update.
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].
         */
        static body_set_constant_force(body: RID, force: Vector3): void
        /** Returns the body's total constant positional forces applied during each physics update.
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].
         */
        static body_get_constant_force(body: RID): Vector3
        /** Sets the body's total constant rotational forces applied during each physics update.
         *  See [method body_add_constant_torque].
         */
        static body_set_constant_torque(body: RID, torque: Vector3): void
        /** Returns the body's total constant rotational forces applied during each physics update.
         *  See [method body_add_constant_torque].
         */
        static body_get_constant_torque(body: RID): Vector3
        /** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        static body_set_axis_velocity(body: RID, axis_velocity: Vector3): void
        static body_set_axis_lock(body: RID, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        static body_is_axis_locked(body: RID, axis: PhysicsServer3D.BodyAxis): boolean
        /** Adds a body to the list of bodies exempt from collisions. */
        static body_add_collision_exception(body: RID, excepted_body: RID): void
        /** Removes a body from the list of bodies exempt from collisions.
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
         */
        static body_remove_collision_exception(body: RID, excepted_body: RID): void
        /** Sets the maximum contacts to report. Bodies can keep a log of the contacts with other bodies. This is enabled by setting the maximum number of contacts reported to a number greater than 0. */
        static body_set_max_contacts_reported(body: RID, amount: number /*i64*/): void
        /** Returns the maximum contacts that can be reported. See [method body_set_max_contacts_reported]. */
        static body_get_max_contacts_reported(body: RID): number /*i64*/
        /** Sets whether a body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
        static body_set_omit_force_integration(body: RID, enable: boolean): void
        /** Returns whether a body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
        static body_is_omitting_force_integration(body: RID): boolean
        /** Sets the function used to calculate physics for an object, if that object allows it (see [method body_set_omit_force_integration]). The force integration function takes 2 arguments:
         *  - [code]state[/code] — [PhysicsDirectBodyState3D] used to retrieve and modify the body's state.
         *  - [code skip-lint]userdata[/code] — optional user data passed to [method body_set_force_integration_callback].
         */
        static body_set_force_integration_callback(body: RID, callable: Callable, userdata: any = <any> {} /*compound.type from nil*/): void
        /** Sets the body pickable with rays if [param enable] is set. */
        static body_set_ray_pickable(body: RID, enable: boolean): void
        /** Returns [code]true[/code] if a collision would result from moving along a motion vector from a given point in space. [PhysicsTestMotionParameters3D] is passed to set motion parameters. [PhysicsTestMotionResult3D] can be passed to return additional information. */
        static body_test_motion(body: RID, parameters: PhysicsTestMotionParameters3D, result: PhysicsTestMotionResult3D = <any> {} /*compound.type from nil*/): boolean
        /** Returns the [PhysicsDirectBodyState3D] of the body. Returns [code]null[/code] if the body is destroyed or removed from the physics space. */
        static body_get_direct_state(body: RID): PhysicsDirectBodyState3D
        static soft_body_get_bounds(body: RID): AABB
        static joint_create(): RID
        static joint_clear(joint: RID): void
        static joint_make_pin(joint: RID, body_A: RID, local_A: Vector3, body_B: RID, local_B: Vector3): void
        /** Sets a pin_joint parameter (see [enum PinJointParam] constants). */
        static pin_joint_set_param(joint: RID, param: PhysicsServer3D.PinJointParam, value: number /*f64*/): void
        /** Gets a pin_joint parameter (see [enum PinJointParam] constants). */
        static pin_joint_get_param(joint: RID, param: PhysicsServer3D.PinJointParam): number /*f64*/
        /** Sets position of the joint in the local space of body a of the joint. */
        static pin_joint_set_local_a(joint: RID, local_A: Vector3): void
        /** Returns position of the joint in the local space of body a of the joint. */
        static pin_joint_get_local_a(joint: RID): Vector3
        /** Sets position of the joint in the local space of body b of the joint. */
        static pin_joint_set_local_b(joint: RID, local_B: Vector3): void
        /** Returns position of the joint in the local space of body b of the joint. */
        static pin_joint_get_local_b(joint: RID): Vector3
        static joint_make_hinge(joint: RID, body_A: RID, hinge_A: Transform3D, body_B: RID, hinge_B: Transform3D): void
        /** Sets a hinge_joint parameter (see [enum HingeJointParam] constants). */
        static hinge_joint_set_param(joint: RID, param: PhysicsServer3D.HingeJointParam, value: number /*f64*/): void
        /** Gets a hinge_joint parameter (see [enum HingeJointParam]). */
        static hinge_joint_get_param(joint: RID, param: PhysicsServer3D.HingeJointParam): number /*f64*/
        /** Sets a hinge_joint flag (see [enum HingeJointFlag] constants). */
        static hinge_joint_set_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        /** Gets a hinge_joint flag (see [enum HingeJointFlag] constants). */
        static hinge_joint_get_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag): boolean
        static joint_make_slider(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
        static slider_joint_set_param(joint: RID, param: PhysicsServer3D.SliderJointParam, value: number /*f64*/): void
        /** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
        static slider_joint_get_param(joint: RID, param: PhysicsServer3D.SliderJointParam): number /*f64*/
        static joint_make_cone_twist(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /** Sets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
        static cone_twist_joint_set_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam, value: number /*f64*/): void
        /** Gets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
        static cone_twist_joint_get_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam): number /*f64*/
        /** Returns the type of the Joint3D. */
        static joint_get_type(joint: RID): PhysicsServer3D.JointType
        /** Sets the priority value of the Joint3D. */
        static joint_set_solver_priority(joint: RID, priority: number /*i64*/): void
        /** Gets the priority value of the Joint3D. */
        static joint_get_solver_priority(joint: RID): number /*i64*/
        /** Sets whether the bodies attached to the [Joint3D] will collide with each other. */
        static joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        /** Returns whether the bodies attached to the [Joint3D] will collide with each other. */
        static joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        static joint_make_generic_6dof(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /** Sets a generic_6_DOF_joint parameter (see [enum G6DOFJointAxisParam] constants). */
        static generic_6dof_joint_set_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam, value: number /*f64*/): void
        /** Gets a generic_6_DOF_joint parameter (see [enum G6DOFJointAxisParam] constants). */
        static generic_6dof_joint_get_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam): number /*f64*/
        /** Sets a generic_6_DOF_joint flag (see [enum G6DOFJointAxisFlag] constants). */
        static generic_6dof_joint_set_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag, enable: boolean): void
        /** Gets a generic_6_DOF_joint flag (see [enum G6DOFJointAxisFlag] constants). */
        static generic_6dof_joint_get_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag): boolean
        /** Destroys any of the objects created by PhysicsServer3D. If the [RID] passed is not one of the objects that can be created by PhysicsServer3D, an error will be sent to the console. */
        static free_rid(rid: RID): void
        /** Activates or deactivates the 3D physics engine. */
        static set_active(active: boolean): void
        /** Returns information about the current state of the 3D physics engine. See [enum ProcessInfo] for a list of available states. */
        static get_process_info(process_info: PhysicsServer3D.ProcessInfo): number /*i64*/
    }
    // // Singleton Class
    /** A server interface for low-level 2D navigation access. */
    class NavigationServer2D extends Object {
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static get_maps(): Array
        /** Create a new map. */
        static map_create(): RID
        /** Sets the map active. */
        static map_set_active(map: RID, active: boolean): void
        /** Returns true if the map is active. */
        static map_is_active(map: RID): boolean
        /** Sets the map cell size used to rasterize the navigation mesh vertices. Must match with the cell size of the used navigation meshes. */
        static map_set_cell_size(map: RID, cell_size: number /*f64*/): void
        /** Returns the map cell size used to rasterize the navigation mesh vertices. */
        static map_get_cell_size(map: RID): number /*f64*/
        /** Set the navigation [param map] edge connection use. If [param enabled] is [code]true[/code], the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        /** Returns whether the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_get_use_edge_connections(map: RID): boolean
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static map_set_edge_connection_margin(map: RID, margin: number /*f64*/): void
        /** Returns the edge connection margin of the map. The edge connection margin is a distance used to connect two regions. */
        static map_get_edge_connection_margin(map: RID): number /*f64*/
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static map_set_link_connection_radius(map: RID, radius: number /*f64*/): void
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static map_get_link_connection_radius(map: RID): number /*f64*/
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static map_get_path(map: RID, origin: Vector2, destination: Vector2, optimize: boolean, navigation_layers: number /*i64*/ = 1): PackedVector2Array
        /** Returns the point closest to the provided [param to_point] on the navigation mesh surface. */
        static map_get_closest_point(map: RID, to_point: Vector2): Vector2
        /** Returns the owner region RID for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_owner(map: RID, to_point: Vector2): RID
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_links(map: RID): Array
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_regions(map: RID): Array
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_agents(map: RID): Array
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_obstacles(map: RID): Array
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.
         *  Avoidance processing and dispatch of the [code]safe_velocity[/code] signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.
         *  [b]Note:[/b] With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.
         */
        static map_force_update(map: RID): void
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters2D]. Updates the provided [NavigationPathQueryResult2D] result object with the path among other results requested by the query. */
        static query_path(parameters: NavigationPathQueryParameters2D, result: NavigationPathQueryResult2D): void
        /** Creates a new region. */
        static region_create(): RID
        /** If [param enabled] is [code]true[/code] the specified [param region] will contribute to its current navigation map. */
        static region_set_enabled(region: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the specified [param region] is enabled. */
        static region_get_enabled(region: RID): boolean
        /** If [param enabled] is [code]true[/code], the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        /** Returns whether the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_get_use_edge_connections(region: RID): boolean
        /** Sets the [param enter_cost] for this [param region]. */
        static region_set_enter_cost(region: RID, enter_cost: number /*f64*/): void
        /** Returns the enter cost of this [param region]. */
        static region_get_enter_cost(region: RID): number /*f64*/
        /** Sets the [param travel_cost] for this [param region]. */
        static region_set_travel_cost(region: RID, travel_cost: number /*f64*/): void
        /** Returns the travel cost of this [param region]. */
        static region_get_travel_cost(region: RID): number /*f64*/
        /** Set the [code]ObjectID[/code] of the object which manages this region. */
        static region_set_owner_id(region: RID, owner_id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the object which manages this region. */
        static region_get_owner_id(region: RID): number /*i64*/
        /** Returns [code]true[/code] if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.
         *  [b]Note:[/b] If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.
         */
        static region_owns_point(region: RID, point: Vector2): boolean
        /** Sets the map for the region. */
        static region_set_map(region: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static region_get_map(region: RID): RID
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer2D.map_get_path]). */
        static region_set_navigation_layers(region: RID, navigation_layers: number /*i64*/): void
        /** Returns the region's navigation layers. */
        static region_get_navigation_layers(region: RID): number /*i64*/
        /** Sets the global transformation for the region. */
        static region_set_transform(region: RID, transform: Transform2D): void
        /** Sets the [param navigation_polygon] for the region. */
        static region_set_navigation_polygon(region: RID, navigation_polygon: NavigationPolygon): void
        /** Returns how many connections this [param region] has with other regions in the map. */
        static region_get_connections_count(region: RID): number /*i64*/
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_start(region: RID, connection: number /*i64*/): Vector2
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_end(region: RID, connection: number /*i64*/): Vector2
        /** Create a new link between two positions on a map. */
        static link_create(): RID
        /** Sets the navigation map [RID] for the link. */
        static link_set_map(link: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static link_get_map(link: RID): RID
        /** If [param enabled] is [code]true[/code], the specified [param link] will contribute to its current navigation map. */
        static link_set_enabled(link: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the specified [param link] is enabled. */
        static link_get_enabled(link: RID): boolean
        /** Sets whether this [param link] can be travelled in both directions. */
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        /** Returns whether this [param link] can be travelled in both directions. */
        static link_is_bidirectional(link: RID): boolean
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer2D.map_get_path]). */
        static link_set_navigation_layers(link: RID, navigation_layers: number /*i64*/): void
        /** Returns the navigation layers for this [param link]. */
        static link_get_navigation_layers(link: RID): number /*i64*/
        /** Sets the entry position for this [param link]. */
        static link_set_start_position(link: RID, position: Vector2): void
        /** Returns the starting position of this [param link]. */
        static link_get_start_position(link: RID): Vector2
        /** Sets the exit position for the [param link]. */
        static link_set_end_position(link: RID, position: Vector2): void
        /** Returns the ending position of this [param link]. */
        static link_get_end_position(link: RID): Vector2
        /** Sets the [param enter_cost] for this [param link]. */
        static link_set_enter_cost(link: RID, enter_cost: number /*f64*/): void
        /** Returns the enter cost of this [param link]. */
        static link_get_enter_cost(link: RID): number /*f64*/
        /** Sets the [param travel_cost] for this [param link]. */
        static link_set_travel_cost(link: RID, travel_cost: number /*f64*/): void
        /** Returns the travel cost of this [param link]. */
        static link_get_travel_cost(link: RID): number /*f64*/
        /** Set the [code]ObjectID[/code] of the object which manages this link. */
        static link_set_owner_id(link: RID, owner_id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the object which manages this link. */
        static link_get_owner_id(link: RID): number /*i64*/
        /** Creates the agent. */
        static agent_create(): RID
        /** If [param enabled] is [code]true[/code], the specified [param agent] uses avoidance. */
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        /** Return [code]true[/code] if the specified [param agent] uses avoidance. */
        static agent_get_avoidance_enabled(agent: RID): boolean
        /** Puts the agent in the map. */
        static agent_set_map(agent: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agent_get_map(agent: RID): RID
        /** If [param paused] is true the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agent_set_paused(agent: RID, paused: boolean): void
        /** Returns [code]true[/code] if the specified [param agent] is paused. */
        static agent_get_paused(agent: RID): boolean
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_neighbor_distance(agent: RID, distance: number /*f64*/): void
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_max_neighbors(agent: RID, count: number /*i64*/): void
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_agents(agent: RID, time_horizon: number /*f64*/): void
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: number /*f64*/): void
        /** Sets the radius of the agent. */
        static agent_set_radius(agent: RID, radius: number /*f64*/): void
        /** Sets the maximum speed of the agent. Must be positive. */
        static agent_set_max_speed(agent: RID, max_speed: number /*f64*/): void
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position far away this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agent_set_velocity_forced(agent: RID, velocity: Vector2): void
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position far away use [method agent_set_velocity_forced] instead to reset the internal velocity state. */
        static agent_set_velocity(agent: RID, velocity: Vector2): void
        /** Sets the position of the agent in world space. */
        static agent_set_position(agent: RID, position: Vector2): void
        /** Returns true if the map got changed the previous frame. */
        static agent_is_map_changed(agent: RID): boolean
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated [code]safe_velocity[/code] will be dispatched with a signal to the object just before the physics calculations.
         *  [b]Note:[/b] Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].
         */
        static agent_set_avoidance_callback(agent: RID, callback: Callable): void
        /** Set the agent's [code]avoidance_layers[/code] bitmask. */
        static agent_set_avoidance_layers(agent: RID, layers: number /*i64*/): void
        /** Set the agent's [code]avoidance_mask[/code] bitmask. */
        static agent_set_avoidance_mask(agent: RID, mask: number /*i64*/): void
        /** Set the agent's [code]avoidance_priority[/code] with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).
         *  The specified [param agent] does not adjust the velocity for other agents that would match the [code]avoidance_mask[/code] but have a lower [code] avoidance_priority[/code]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.
         */
        static agent_set_avoidance_priority(agent: RID, priority: number /*f64*/): void
        /** Creates a new navigation obstacle. */
        static obstacle_create(): RID
        /** If [param enabled] is [code]true[/code], the provided [param obstacle] affects avoidance using agents. */
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the provided [param obstacle] has avoidance enabled. */
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        /** Sets the navigation map [RID] for the obstacle. */
        static obstacle_set_map(obstacle: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacle_get_map(obstacle: RID): RID
        /** If [param paused] is true the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        /** Returns [code]true[/code] if the specified [param obstacle] is paused. */
        static obstacle_get_paused(obstacle: RID): boolean
        /** Sets the radius of the dynamic obstacle. */
        static obstacle_set_radius(obstacle: RID, radius: number /*f64*/): void
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacle_set_velocity(obstacle: RID, velocity: Vector2): void
        /** Sets the position of the obstacle in world space. */
        static obstacle_set_position(obstacle: RID, position: Vector2): void
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector2Array): void
        /** Set the obstacles's [code]avoidance_layers[/code] bitmask. */
        static obstacle_set_avoidance_layers(obstacle: RID, layers: number /*i64*/): void
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_polygon]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.
         *  [b]Note:[/b] This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.
         *  [b]Performance:[/b] While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.
         */
        static parse_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, root_node: Node, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data_async(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Destroys the given RID. */
        static free_rid(rid: RID): void
        /** If [code]true[/code] enables debug mode on the NavigationServer. */
        static set_debug_enabled(enabled: boolean): void
        /** Returns [code]true[/code] when the NavigationServer has debug enabled. */
        static get_debug_enabled(): boolean
        static readonly map_changed: Signal
        static readonly navigation_debug_changed: Signal
    }
    // // Singleton Class
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
    /** A server interface for low-level 3D navigation access. */
    class NavigationServer3D extends Object {
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static get_maps(): Array
        /** Create a new map. */
        static map_create(): RID
        /** Sets the map active. */
        static map_set_active(map: RID, active: boolean): void
        /** Returns true if the map is active. */
        static map_is_active(map: RID): boolean
        /** Sets the map up direction. */
        static map_set_up(map: RID, up: Vector3): void
        /** Returns the map's up direction. */
        static map_get_up(map: RID): Vector3
        /** Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes. */
        static map_set_cell_size(map: RID, cell_size: number /*f64*/): void
        /** Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane. */
        static map_get_cell_size(map: RID): number /*f64*/
        /** Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes. */
        static map_set_cell_height(map: RID, cell_height: number /*f64*/): void
        /** Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis. */
        static map_get_cell_height(map: RID): number /*f64*/
        /** Set the navigation [param map] edge connection use. If [param enabled] is [code]true[/code], the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        /** Returns true if the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_get_use_edge_connections(map: RID): boolean
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static map_set_edge_connection_margin(map: RID, margin: number /*f64*/): void
        /** Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions. */
        static map_get_edge_connection_margin(map: RID): number /*f64*/
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static map_set_link_connection_radius(map: RID, radius: number /*f64*/): void
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static map_get_link_connection_radius(map: RID): number /*f64*/
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static map_get_path(map: RID, origin: Vector3, destination: Vector3, optimize: boolean, navigation_layers: number /*i64*/ = 1): PackedVector3Array
        /** Returns the closest point between the navigation surface and the segment. */
        static map_get_closest_point_to_segment(map: RID, start: Vector3, end: Vector3, use_collision: boolean = false): Vector3
        /** Returns the point closest to the provided [param to_point] on the navigation mesh surface. */
        static map_get_closest_point(map: RID, to_point: Vector3): Vector3
        /** Returns the normal for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_normal(map: RID, to_point: Vector3): Vector3
        /** Returns the owner region RID for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_owner(map: RID, to_point: Vector3): RID
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_links(map: RID): Array
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_regions(map: RID): Array
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_agents(map: RID): Array
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_obstacles(map: RID): Array
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.
         *  Avoidance processing and dispatch of the [code]safe_velocity[/code] signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.
         *  [b]Note:[/b] With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.
         */
        static map_force_update(map: RID): void
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters3D]. Updates the provided [NavigationPathQueryResult3D] result object with the path among other results requested by the query. */
        static query_path(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D): void
        /** Creates a new region. */
        static region_create(): RID
        /** If [param enabled] is [code]true[/code], the specified [param region] will contribute to its current navigation map. */
        static region_set_enabled(region: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the specified [param region] is enabled. */
        static region_get_enabled(region: RID): boolean
        /** If [param enabled] is [code]true[/code], the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        /** Returns true if the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_get_use_edge_connections(region: RID): boolean
        /** Sets the [param enter_cost] for this [param region]. */
        static region_set_enter_cost(region: RID, enter_cost: number /*f64*/): void
        /** Returns the enter cost of this [param region]. */
        static region_get_enter_cost(region: RID): number /*f64*/
        /** Sets the [param travel_cost] for this [param region]. */
        static region_set_travel_cost(region: RID, travel_cost: number /*f64*/): void
        /** Returns the travel cost of this [param region]. */
        static region_get_travel_cost(region: RID): number /*f64*/
        /** Set the [code]ObjectID[/code] of the object which manages this region. */
        static region_set_owner_id(region: RID, owner_id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the object which manages this region. */
        static region_get_owner_id(region: RID): number /*i64*/
        /** Returns [code]true[/code] if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.
         *  [b]Note:[/b] If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.
         */
        static region_owns_point(region: RID, point: Vector3): boolean
        /** Sets the map for the region. */
        static region_set_map(region: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static region_get_map(region: RID): RID
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer3D.map_get_path]). */
        static region_set_navigation_layers(region: RID, navigation_layers: number /*i64*/): void
        /** Returns the region's navigation layers. */
        static region_get_navigation_layers(region: RID): number /*i64*/
        /** Sets the global transformation for the region. */
        static region_set_transform(region: RID, transform: Transform3D): void
        /** Sets the navigation mesh for the region. */
        static region_set_navigation_mesh(region: RID, navigation_mesh: NavigationMesh): void
        /** Bakes the [param navigation_mesh] with bake source geometry collected starting from the [param root_node].
         *  [i]Deprecated.[/i] This function is deprecated due to core threading changes. To upgrade existing code, first create a [NavigationMeshSourceGeometryData3D] resource. Use this resource with [method parse_source_geometry_data] to parse the SceneTree for nodes that should contribute to the navigation mesh baking. The SceneTree parsing needs to happen on the main thread. After the parsing is finished use the resource with [method bake_from_source_geometry_data] to bake a navigation mesh.
         */
        static region_bake_navigation_mesh(navigation_mesh: NavigationMesh, root_node: Node): void
        /** Returns how many connections this [param region] has with other regions in the map. */
        static region_get_connections_count(region: RID): number /*i64*/
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_start(region: RID, connection: number /*i64*/): Vector3
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_end(region: RID, connection: number /*i64*/): Vector3
        /** Create a new link between two positions on a map. */
        static link_create(): RID
        /** Sets the navigation map [RID] for the link. */
        static link_set_map(link: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static link_get_map(link: RID): RID
        /** If [param enabled] is [code]true[/code], the specified [param link] will contribute to its current navigation map. */
        static link_set_enabled(link: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the specified [param link] is enabled. */
        static link_get_enabled(link: RID): boolean
        /** Sets whether this [param link] can be travelled in both directions. */
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        /** Returns whether this [param link] can be travelled in both directions. */
        static link_is_bidirectional(link: RID): boolean
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer3D.map_get_path]). */
        static link_set_navigation_layers(link: RID, navigation_layers: number /*i64*/): void
        /** Returns the navigation layers for this [param link]. */
        static link_get_navigation_layers(link: RID): number /*i64*/
        /** Sets the entry position for this [param link]. */
        static link_set_start_position(link: RID, position: Vector3): void
        /** Returns the starting position of this [param link]. */
        static link_get_start_position(link: RID): Vector3
        /** Sets the exit position for the [param link]. */
        static link_set_end_position(link: RID, position: Vector3): void
        /** Returns the ending position of this [param link]. */
        static link_get_end_position(link: RID): Vector3
        /** Sets the [param enter_cost] for this [param link]. */
        static link_set_enter_cost(link: RID, enter_cost: number /*f64*/): void
        /** Returns the enter cost of this [param link]. */
        static link_get_enter_cost(link: RID): number /*f64*/
        /** Sets the [param travel_cost] for this [param link]. */
        static link_set_travel_cost(link: RID, travel_cost: number /*f64*/): void
        /** Returns the travel cost of this [param link]. */
        static link_get_travel_cost(link: RID): number /*f64*/
        /** Set the [code]ObjectID[/code] of the object which manages this link. */
        static link_set_owner_id(link: RID, owner_id: number /*i64*/): void
        /** Returns the [code]ObjectID[/code] of the object which manages this link. */
        static link_get_owner_id(link: RID): number /*i64*/
        /** Creates the agent. */
        static agent_create(): RID
        /** If [param enabled] is [code]true[/code], the provided [param agent] calculates avoidance. */
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the provided [param agent] has avoidance enabled. */
        static agent_get_avoidance_enabled(agent: RID): boolean
        /** Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.
         *  If [code]true[/code] the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, underwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.
         *  If [code]false[/code] the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.
         */
        static agent_set_use_3d_avoidance(agent: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the provided [param agent] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static agent_get_use_3d_avoidance(agent: RID): boolean
        /** Puts the agent in the map. */
        static agent_set_map(agent: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agent_get_map(agent: RID): RID
        /** If [param paused] is true the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agent_set_paused(agent: RID, paused: boolean): void
        /** Returns [code]true[/code] if the specified [param agent] is paused. */
        static agent_get_paused(agent: RID): boolean
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_neighbor_distance(agent: RID, distance: number /*f64*/): void
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_max_neighbors(agent: RID, count: number /*i64*/): void
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_agents(agent: RID, time_horizon: number /*f64*/): void
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: number /*f64*/): void
        /** Sets the radius of the agent. */
        static agent_set_radius(agent: RID, radius: number /*f64*/): void
        /** Updates the provided [param agent] [param height]. */
        static agent_set_height(agent: RID, height: number /*f64*/): void
        /** Sets the maximum speed of the agent. Must be positive. */
        static agent_set_max_speed(agent: RID, max_speed: number /*f64*/): void
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agent_set_velocity_forced(agent: RID, velocity: Vector3): void
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use [method agent_set_velocity_forced] as well to reset the internal simulation velocity. */
        static agent_set_velocity(agent: RID, velocity: Vector3): void
        /** Sets the position of the agent in world space. */
        static agent_set_position(agent: RID, position: Vector3): void
        /** Returns true if the map got changed the previous frame. */
        static agent_is_map_changed(agent: RID): boolean
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated [code]safe_velocity[/code] will be dispatched with a signal to the object just before the physics calculations.
         *  [b]Note:[/b] Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].
         */
        static agent_set_avoidance_callback(agent: RID, callback: Callable): void
        /** Set the agent's [code]avoidance_layers[/code] bitmask. */
        static agent_set_avoidance_layers(agent: RID, layers: number /*i64*/): void
        /** Set the agent's [code]avoidance_mask[/code] bitmask. */
        static agent_set_avoidance_mask(agent: RID, mask: number /*i64*/): void
        /** Set the agent's [code]avoidance_priority[/code] with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).
         *  The specified [param agent] does not adjust the velocity for other agents that would match the [code]avoidance_mask[/code] but have a lower [code] avoidance_priority[/code]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.
         */
        static agent_set_avoidance_priority(agent: RID, priority: number /*f64*/): void
        /** Creates a new obstacle. */
        static obstacle_create(): RID
        /** If [param enabled] is [code]true[/code], the provided [param obstacle] affects avoidance using agents. */
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the provided [param obstacle] has avoidance enabled. */
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        /** Sets if the [param obstacle] uses the 2D avoidance or the 3D avoidance while avoidance is enabled. */
        static obstacle_set_use_3d_avoidance(obstacle: RID, enabled: boolean): void
        /** Returns [code]true[/code] if the provided [param obstacle] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static obstacle_get_use_3d_avoidance(obstacle: RID): boolean
        /** Assigns the [param obstacle] to a navigation map. */
        static obstacle_set_map(obstacle: RID, map: RID): void
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacle_get_map(obstacle: RID): RID
        /** If [param paused] is true the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        /** Returns [code]true[/code] if the specified [param obstacle] is paused. */
        static obstacle_get_paused(obstacle: RID): boolean
        /** Sets the radius of the dynamic obstacle. */
        static obstacle_set_radius(obstacle: RID, radius: number /*f64*/): void
        /** Sets the [param height] for the [param obstacle]. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance. */
        static obstacle_set_height(obstacle: RID, height: number /*f64*/): void
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacle_set_velocity(obstacle: RID, velocity: Vector3): void
        /** Updates the [param position] in world space for the [param obstacle]. */
        static obstacle_set_position(obstacle: RID, position: Vector3): void
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector3Array): void
        /** Set the obstacles's [code]avoidance_layers[/code] bitmask. */
        static obstacle_set_avoidance_layers(obstacle: RID, layers: number /*i64*/): void
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.
         *  [b]Note:[/b] This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.
         *  [b]Performance:[/b] While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.
         */
        static parse_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, root_node: Node, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data_async(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: Callable = <any> {} /*compound.type from 25([object Object])*/): void
        /** Destroys the given RID. */
        static free_rid(rid: RID): void
        /** Control activation of this server. */
        static set_active(active: boolean): void
        /** If [code]true[/code] enables debug mode on the NavigationServer. */
        static set_debug_enabled(enabled: boolean): void
        /** Returns [code]true[/code] when the NavigationServer has debug enabled. */
        static get_debug_enabled(): boolean
        /** Returns information about the current state of the NavigationServer. See [enum ProcessInfo] for a list of available states. */
        static get_process_info(process_info: NavigationServer3D.ProcessInfo): number /*i64*/
        static readonly map_changed: Signal
        static readonly navigation_debug_changed: Signal
        static readonly avoidance_debug_changed: Signal
    }
    // // Singleton Class
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
    /** Server for AR and VR features. */
    class XRServer extends Object {
        static get_world_scale(): number /*f64*/
        static set_world_scale(scale: number /*f64*/): void
        static get_world_origin(): Transform3D
        static set_world_origin(world_origin: Transform3D): void
        /** Returns the reference frame transform. Mostly used internally and exposed for GDExtension build interfaces. */
        static get_reference_frame(): Transform3D
        /** This is an important function to understand correctly. AR and VR platforms all handle positioning slightly differently.
         *  For platforms that do not offer spatial tracking, our origin point (0, 0, 0) is the location of our HMD, but you have little control over the direction the player is facing in the real world.
         *  For platforms that do offer spatial tracking, our origin point depends very much on the system. For OpenVR, our origin point is usually the center of the tracking space, on the ground. For other platforms, it's often the location of the tracking camera.
         *  This method allows you to center your tracker on the location of the HMD. It will take the current location of the HMD and use that to adjust all your tracking data; in essence, realigning the real world to your player's current position in the game world.
         *  For this method to produce usable results, tracking information must be available. This often takes a few frames after starting your game.
         *  You should call this method after a few seconds have passed. For example, when the user requests a realignment of the display holding a designated button on a controller for a short period of time, or when implementing a teleport mechanism.
         */
        static center_on_hmd(rotation_mode: XRServer.RotationMode, keep_height: boolean): void
        /** Returns the primary interface's transformation. */
        static get_hmd_transform(): Transform3D
        /** Registers an [XRInterface] object. */
        static add_interface(interface: XRInterface): void
        /** Returns the number of interfaces currently registered with the AR/VR server. If your project supports multiple AR/VR platforms, you can look through the available interface, and either present the user with a selection or simply try to initialize each interface and use the first one that returns [code]true[/code]. */
        static get_interface_count(): number /*i64*/
        /** Removes this [param interface]. */
        static remove_interface(interface: XRInterface): void
        /** Returns the interface registered at the given [param idx] index in the list of interfaces. */
        static get_interface(idx: number /*i64*/): XRInterface
        /** Returns a list of available interfaces the ID and name of each interface. */
        static get_interfaces(): Array
        /** Finds an interface by its [param name]. For example, if your project uses capabilities of an AR/VR platform, you can find the interface for that platform by name and initialize it. */
        static find_interface(name: string): XRInterface
        /** Registers a new [XRPositionalTracker] that tracks a spatial location in real space. */
        static add_tracker(tracker: XRPositionalTracker): void
        /** Removes this positional [param tracker]. */
        static remove_tracker(tracker: XRPositionalTracker): void
        /** Returns a dictionary of trackers for [param tracker_types]. */
        static get_trackers(tracker_types: number /*i64*/): Dictionary
        /** Returns the positional tracker with the given [param tracker_name]. */
        static get_tracker(tracker_name: StringName): XRPositionalTracker
        static get_primary_interface(): XRInterface
        static set_primary_interface(interface: XRInterface): void
        /** The scale of the game world compared to the real world. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        world_scale: number /*f64*/
        /** The current origin of our tracking space in the virtual world. This is used by the renderer to properly position the camera with new tracking data.
         *  [b]Note:[/b] This property is managed by the current [XROrigin3D] node. It is exposed for access from GDExtensions.
         */
        world_origin: Vector3
        /** The primary [XRInterface] currently bound to the [XRServer]. */
        primary_interface: Object
        static readonly interface_added: Signal
        static readonly interface_removed: Signal
        static readonly tracker_added: Signal
        static readonly tracker_updated: Signal
        static readonly tracker_removed: Signal
    }
    // // Singleton Class
    namespace CameraServer {
        enum FeedImage {
            FEED_RGBA_IMAGE = 0,
            FEED_YCBCR_IMAGE = 0,
            FEED_Y_IMAGE = 0,
            FEED_CBCR_IMAGE = 1,
        }
    }
    /** Server keeping track of different cameras accessible in Godot. */
    class CameraServer extends Object {
        /** Returns the [CameraFeed] corresponding to the camera with the given [param index]. */
        static get_feed(index: number /*i64*/): CameraFeed
        /** Returns the number of [CameraFeed]s registered. */
        static get_feed_count(): number /*i64*/
        /** Returns an array of [CameraFeed]s. */
        static feeds(): Array
        /** Adds the camera [param feed] to the camera server. */
        static add_feed(feed: CameraFeed): void
        /** Removes the specified camera [param feed]. */
        static remove_feed(feed: CameraFeed): void
        static readonly camera_feed_added: Signal
        static readonly camera_feed_removed: Signal
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
    /** Provides access to AES encryption/decryption of raw data. */
    class AESContext extends RefCounted {
        /** Start the AES context in the given [param mode]. A [param key] of either 16 or 32 bytes must always be provided, while an [param iv] (initialization vector) of exactly 16 bytes, is only needed when [param mode] is either [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT]. */
        start(mode: AESContext.Mode, key: PackedByteArray, iv: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): GodotError
        /** Run the desired operation for this AES context. Will return a [PackedByteArray] containing the result of encrypting (or decrypting) the given [param src]. See [method start] for mode of operation.
         *  [b]Note:[/b] The size of [param src] must be a multiple of 16. Apply some padding if needed.
         */
        update(src: PackedByteArray): PackedByteArray
        /** Get the current IV state for this context (IV gets updated when calling [method update]). You normally don't need this function.
         *  [b]Note:[/b] This function only makes sense when the context is started with [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT].
         */
        get_iv_state(): PackedByteArray
        /** Close this AES context so it can be started again. See [method start]. */
        finish(): void
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 2D space. */
    class AStar2D extends RefCounted {
        /* gdvirtual */ _estimate_cost(from_id: number /*i64*/, to_id: number /*i64*/): number /*f64*/
        /* gdvirtual */ _compute_cost(from_id: number /*i64*/, to_id: number /*i64*/): number /*f64*/
        /** Returns the next available point ID with no point associated to it. */
        get_available_point_id(): number /*i64*/
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.
         *  
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.
         */
        add_point(id: number /*i64*/, position: Vector2, weight_scale: number /*f64*/ = 1): void
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: number /*i64*/): Vector2
        /** Sets the [param position] for the point with the given [param id]. */
        set_point_position(id: number /*i64*/, position: Vector2): void
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: number /*i64*/): number /*f64*/
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        set_point_weight_scale(id: number /*i64*/, weight_scale: number /*f64*/): void
        /** Removes the point associated with the given [param id] from the points pool. */
        remove_point(id: number /*i64*/): void
        /** Returns whether a point associated with the given [param id] exists. */
        has_point(id: number /*i64*/): boolean
        /** Returns an array with the IDs of the points that form the connection with the given point.
         *  
         */
        get_point_connections(id: number /*i64*/): PackedInt64Array
        /** Returns an array of all point IDs. */
        get_point_ids(): PackedInt64Array
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        set_point_disabled(id: number /*i64*/, disabled: boolean = true): void
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        is_point_disabled(id: number /*i64*/): boolean
        /** Creates a segment between the given points. If [param bidirectional] is [code]false[/code], only movement from [param id] to [param to_id] is allowed, not the reverse direction.
         *  
         */
        connect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): void
        /** Deletes the segment between the given points. If [param bidirectional] is [code]false[/code], only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): void
        /** Returns whether there is a connection/segment between the given points. If [param bidirectional] is [code]false[/code], returns whether movement from [param id] to [param to_id] is possible through this segment. */
        are_points_connected(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): boolean
        /** Returns the number of points currently in the points pool. */
        get_point_count(): number /*i64*/
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        get_point_capacity(): number /*i64*/
        /** Reserves space internally for [param num_nodes] points, useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
        reserve_space(num_nodes: number /*i64*/): void
        /** Clears all the points and segments. */
        clear(): void
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns [code]-1[/code] if there are no points in the points pool.
         *  [b]Note:[/b] If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.
         */
        get_closest_point(to_position: Vector2, include_disabled: boolean = false): number /*i64*/
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.
         *  
         *  The result is in the segment that goes from [code]y = 0[/code] to [code]y = 5[/code]. It's the closest position in the segment to the given point.
         */
        get_closest_position_in_segment(to_position: Vector2): Vector2
        /** Returns an array with the points that are in the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
         *  [b]Note:[/b] This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector2Array] and will print an error message.
         */
        get_point_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedVector2Array
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
         *  
         *  If you change the 2nd point's weight to 3, then the result will be [code][1, 4, 3][/code] instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.
         */
        get_id_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedInt64Array
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 3D space. */
    class AStar3D extends RefCounted {
        /* gdvirtual */ _estimate_cost(from_id: number /*i64*/, to_id: number /*i64*/): number /*f64*/
        /* gdvirtual */ _compute_cost(from_id: number /*i64*/, to_id: number /*i64*/): number /*f64*/
        /** Returns the next available point ID with no point associated to it. */
        get_available_point_id(): number /*i64*/
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.
         *  
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.
         */
        add_point(id: number /*i64*/, position: Vector3, weight_scale: number /*f64*/ = 1): void
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: number /*i64*/): Vector3
        /** Sets the [param position] for the point with the given [param id]. */
        set_point_position(id: number /*i64*/, position: Vector3): void
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: number /*i64*/): number /*f64*/
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        set_point_weight_scale(id: number /*i64*/, weight_scale: number /*f64*/): void
        /** Removes the point associated with the given [param id] from the points pool. */
        remove_point(id: number /*i64*/): void
        /** Returns whether a point associated with the given [param id] exists. */
        has_point(id: number /*i64*/): boolean
        /** Returns an array with the IDs of the points that form the connection with the given point.
         *  
         */
        get_point_connections(id: number /*i64*/): PackedInt64Array
        /** Returns an array of all point IDs. */
        get_point_ids(): PackedInt64Array
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        set_point_disabled(id: number /*i64*/, disabled: boolean = true): void
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        is_point_disabled(id: number /*i64*/): boolean
        /** Creates a segment between the given points. If [param bidirectional] is [code]false[/code], only movement from [param id] to [param to_id] is allowed, not the reverse direction.
         *  
         */
        connect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): void
        /** Deletes the segment between the given points. If [param bidirectional] is [code]false[/code], only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnect_points(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): void
        /** Returns whether the two given points are directly connected by a segment. If [param bidirectional] is [code]false[/code], returns whether movement from [param id] to [param to_id] is possible through this segment. */
        are_points_connected(id: number /*i64*/, to_id: number /*i64*/, bidirectional: boolean = true): boolean
        /** Returns the number of points currently in the points pool. */
        get_point_count(): number /*i64*/
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        get_point_capacity(): number /*i64*/
        /** Reserves space internally for [param num_nodes] points. Useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
        reserve_space(num_nodes: number /*i64*/): void
        /** Clears all the points and segments. */
        clear(): void
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns [code]-1[/code] if there are no points in the points pool.
         *  [b]Note:[/b] If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.
         */
        get_closest_point(to_position: Vector3, include_disabled: boolean = false): number /*i64*/
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.
         *  
         *  The result is in the segment that goes from [code]y = 0[/code] to [code]y = 5[/code]. It's the closest position in the segment to the given point.
         */
        get_closest_position_in_segment(to_position: Vector3): Vector3
        /** Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
         *  [b]Note:[/b] This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector3Array] and will print an error message.
         */
        get_point_path(from_id: number /*i64*/, to_id: number /*i64*/): PackedVector3Array
        /** Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
         *  
         *  If you change the 2nd point's weight to 3, then the result will be [code][1, 4, 3][/code] instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.
         */
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
    /** An implementation of A* for finding the shortest path between two points on a partial 2D grid. */
    class AStarGrid2D extends RefCounted {
        /* gdvirtual */ _estimate_cost(from_id: Vector2i, to_id: Vector2i): number /*f64*/
        /* gdvirtual */ _compute_cost(from_id: Vector2i, to_id: Vector2i): number /*f64*/
        set_region(region: Rect2i): void
        get_region(): Rect2i
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_cell_size(cell_size: Vector2): void
        get_cell_size(): Vector2
        /** Returns [code]true[/code] if the [param x] and [param y] is a valid grid coordinate (id), i.e. if it is inside [member region]. Equivalent to [code]region.has_point(Vector2i(x, y))[/code]. */
        is_in_bounds(x: number /*i64*/, y: number /*i64*/): boolean
        /** Returns [code]true[/code] if the [param id] vector is a valid grid coordinate, i.e. if it is inside [member region]. Equivalent to [code]region.has_point(id)[/code]. */
        is_in_boundsv(id: Vector2i): boolean
        /** Indicates that the grid parameters were changed and [method update] needs to be called. */
        is_dirty(): boolean
        /** Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [member region], [member cell_size] or [member offset] are changed. [method is_dirty] will return [code]true[/code] if this is the case and this needs to be called.
         *  [b]Note:[/b] All point data (solidity and weight scale) will be cleared.
         */
        update(): void
        set_jumping_enabled(enabled: boolean): void
        is_jumping_enabled(): boolean
        set_diagonal_mode(mode: AStarGrid2D.DiagonalMode): void
        get_diagonal_mode(): AStarGrid2D.DiagonalMode
        set_default_compute_heuristic(heuristic: AStarGrid2D.Heuristic): void
        get_default_compute_heuristic(): AStarGrid2D.Heuristic
        set_default_estimate_heuristic(heuristic: AStarGrid2D.Heuristic): void
        get_default_estimate_heuristic(): AStarGrid2D.Heuristic
        /** Disables or enables the specified point for pathfinding. Useful for making an obstacle. By default, all points are enabled.
         *  [b]Note:[/b] Calling [method update] is not needed after the call of this function.
         */
        set_point_solid(id: Vector2i, solid: boolean = true): void
        /** Returns [code]true[/code] if a point is disabled for pathfinding. By default, all points are enabled. */
        is_point_solid(id: Vector2i): boolean
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point.
         *  [b]Note:[/b] Calling [method update] is not needed after the call of this function.
         */
        set_point_weight_scale(id: Vector2i, weight_scale: number /*f64*/): void
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: Vector2i): number /*f64*/
        /** Fills the given [param region] on the grid with the specified value for the solid flag.
         *  [b]Note:[/b] Calling [method update] is not needed after the call of this function.
         */
        fill_solid_region(region: Rect2i, solid: boolean = true): void
        /** Fills the given [param region] on the grid with the specified value for the weight scale.
         *  [b]Note:[/b] Calling [method update] is not needed after the call of this function.
         */
        fill_weight_scale_region(region: Rect2i, weight_scale: number /*f64*/): void
        /** Clears the grid and sets the [member region] to [code]Rect2i(0, 0, 0, 0)[/code]. */
        clear(): void
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: Vector2i): Vector2
        /** Returns an array with the points that are in the path found by [AStarGrid2D] between the given points. The array is ordered from the starting point to the ending point of the path.
         *  [b]Note:[/b] This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector2Array] and will print an error message.
         */
        get_point_path(from_id: Vector2i, to_id: Vector2i): PackedVector2Array
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path. */
        get_id_path(from_id: Vector2i, to_id: Vector2i): Array
        /** The region of grid cells available for pathfinding. If changed, [method update] needs to be called before finding the next path. */
        region: Rect2i
        /** The size of the grid (number of cells of size [member cell_size] on each axis). If changed, [method update] needs to be called before finding the next path.
         *  [i]Deprecated.[/i] Use [member region] instead.
         */
        size: Vector2i
        /** The offset of the grid which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        offset: Vector2
        /** The size of the point cell which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        cell_size: Vector2
        /** Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.
         *  [b]Note:[/b] Currently, toggling it on disables the consideration of weight scaling in pathfinding.
         */
        jumping_enabled: boolean
        /** The default [enum Heuristic] which will be used to calculate the cost between two points if [method _compute_cost] was not overridden. */
        default_compute_heuristic: number /*i64*/
        /** The default [enum Heuristic] which will be used to calculate the cost between the point and the end point if [method _estimate_cost] was not overridden. */
        default_estimate_heuristic: number /*i64*/
        /** A specific [enum DiagonalMode] mode which will force the path to avoid or accept the specified diagonals. */
        diagonal_mode: number /*i64*/
    }
    class AbstractPolygon2DEditor extends HBoxContainer {
    }
    class AbstractPolygon2DEditorPlugin extends EditorPlugin {
    }
    /** A base dialog used for user notification. */
    class AcceptDialog extends Window {
        /** Returns the OK [Button] instance.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_ok_button(): Button
        /** Returns the label used for built-in text.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_label(): Label
        set_hide_on_ok(enabled: boolean): void
        get_hide_on_ok(): boolean
        set_close_on_escape(enabled: boolean): void
        get_close_on_escape(): boolean
        /** Adds a button with label [param text] and a custom [param action] to the dialog and returns the created button. [param action] will be passed to the [signal custom_action] signal when pressed.
         *  If [code]true[/code], [param right] will place the button to the right of any sibling buttons.
         *  You can use [method remove_button] method to remove a button created with this method from the dialog.
         */
        add_button(text: string, right: boolean = false, action: string = ''): Button
        /** Adds a button with label [param name] and a cancel action to the dialog and returns the created button.
         *  You can use [method remove_button] method to remove a button created with this method from the dialog.
         */
        add_cancel_button(name: string): Button
        /** Removes the [param button] from the dialog. Does NOT free the [param button]. The [param button] must be a [Button] added with [method add_button] or [method add_cancel_button] method. After removal, pressing the [param button] will no longer emit this dialog's [signal custom_action] or [signal canceled] signals. */
        remove_button(button: Control): void
        /** Registers a [LineEdit] in the dialog. When the enter key is pressed, the dialog will be accepted. */
        register_text_enter(line_edit: Control): void
        set_text(text: string): void
        get_text(): string
        set_autowrap(autowrap: boolean): void
        has_autowrap(): boolean
        set_ok_button_text(text: string): void
        get_ok_button_text(): string
        /** The text displayed by the OK button (see [method get_ok_button]). */
        ok_button_text: string
        /** The text displayed by the dialog. */
        dialog_text: string
        /** If [code]true[/code], the dialog is hidden when the OK button is pressed. You can set it to [code]false[/code] if you want to do e.g. input validation when receiving the [signal confirmed] signal, and handle hiding the dialog in your own logic.
         *  [b]Note:[/b] Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example [FileDialog] defaults to [code]false[/code], and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in [FileDialog] to disable hiding the dialog when pressing OK.
         */
        dialog_hide_on_ok: boolean
        /** If [code]true[/code], the dialog will be hidden when the escape key ([constant KEY_ESCAPE]) is pressed. */
        dialog_close_on_escape: boolean
        /** Sets autowrapping for the text in the dialog. */
        dialog_autowrap: boolean
        readonly confirmed: Signal
        readonly canceled: Signal
        readonly custom_action: Signal
    }
    class ActionMapEditor extends Control {
        readonly action_added: Signal
        readonly action_edited: Signal
        readonly action_removed: Signal
        readonly action_renamed: Signal
        readonly action_reordered: Signal
        readonly filter_focused: Signal
        readonly filter_unfocused: Signal
    }
    class AnchorPresetPicker extends ControlEditorPresetPicker {
        readonly anchors_preset_selected: Signal
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path. */
    class AnimatableBody2D extends StaticBody2D {
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
        /** If [code]true[/code], the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do [b]not[/b] use together with [method PhysicsBody2D.move_and_collide]. */
        sync_to_physics: boolean
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path. */
    class AnimatableBody3D extends StaticBody3D {
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
        /** If [code]true[/code], the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do [b]not[/b] use together with [method PhysicsBody3D.move_and_collide]. */
        sync_to_physics: boolean
    }
    /** Sprite node that contains multiple textures as frames to play for animation. */
    class AnimatedSprite2D extends Node2D {
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        /** Returns [code]true[/code] if an animation is currently playing (even if [member speed_scale] and/or [code]custom_speed[/code] are [code]0[/code]). */
        is_playing(): boolean
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is [code]true[/code], the animation will play backwards (which is equivalent to calling [method play_backwards]).
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.
         */
        play(name: StringName = '', custom_speed: number /*f64*/ = 1, from_end: boolean = false): void
        /** Plays the animation with key [param name] in reverse.
         *  This method is a shorthand for [method play] with [code]custom_speed = -1.0[/code] and [code]from_end = true[/code], so see its description for more information.
         */
        play_backwards(name: StringName = ''): void
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.
         *  See also [method stop].
         */
        pause(): void
        /** Stops the currently playing animation. The animation position is reset to [code]0[/code] and the [code]custom_speed[/code] is reset to [code]1.0[/code]. See also [method pause]. */
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
        /** The setter of [member frame] resets the [member frame_progress] to [code]0.0[/code] implicitly, but this method avoids that.
         *  This is useful when you want to carry over the current [member frame_progress] to another [member frame].
         *  [b]Example:[/b]
         *  
         */
        set_frame_and_progress(frame: number /*i64*/, progress: number /*f64*/): void
        set_speed_scale(speed_scale: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        /** Returns the actual playing speed of current animation or [code]0[/code] if not playing. This speed is the [member speed_scale] property multiplied by [code]custom_speed[/code] argument specified when calling the [method play] method.
         *  Returns a negative value if the current animation is playing backwards.
         */
        get_playing_speed(): number /*f64*/
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        sprite_frames: SpriteFrames
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        animation: StringName
        /** The key of the animation to play when the scene loads. */
        autoplay: StringName
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        frame: number /*i64*/
        /** The progress value between [code]0.0[/code] and [code]1.0[/code] until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from [code]1.0[/code] to [code]0.0[/code]. */
        frame_progress: number /*f64*/
        /** The speed scaling ratio. For example, if this value is [code]1[/code], then the animation plays at normal speed. If it's [code]0.5[/code], then it plays at half speed. If it's [code]2[/code], then it plays at double speed.
         *  If set to a negative value, the animation is played in reverse. If set to [code]0[/code], the animation will not advance.
         */
        speed_scale: number /*f64*/
        /** If [code]true[/code], texture will be centered. */
        centered: boolean
        /** The texture's drawing offset. */
        offset: Vector2
        /** If [code]true[/code], texture is flipped horizontally. */
        flip_h: boolean
        /** If [code]true[/code], texture is flipped vertically. */
        flip_v: boolean
        readonly sprite_frames_changed: Signal
        readonly animation_changed: Signal
        readonly frame_changed: Signal
        readonly animation_looped: Signal
        readonly animation_finished: Signal
    }
    /** 2D sprite node in 3D world, that can use multiple 2D textures for animation. */
    class AnimatedSprite3D extends SpriteBase3D {
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        /** Returns [code]true[/code] if an animation is currently playing (even if [member speed_scale] and/or [code]custom_speed[/code] are [code]0[/code]). */
        is_playing(): boolean
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is [code]true[/code], the animation will play backwards (which is equivalent to calling [method play_backwards]).
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.
         */
        play(name: StringName = '', custom_speed: number /*f64*/ = 1, from_end: boolean = false): void
        /** Plays the animation with key [param name] in reverse.
         *  This method is a shorthand for [method play] with [code]custom_speed = -1.0[/code] and [code]from_end = true[/code], so see its description for more information.
         */
        play_backwards(name: StringName = ''): void
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.
         *  See also [method stop].
         */
        pause(): void
        /** Stops the currently playing animation. The animation position is reset to [code]0[/code] and the [code]custom_speed[/code] is reset to [code]1.0[/code]. See also [method pause]. */
        stop(): void
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_progress(progress: number /*f64*/): void
        get_frame_progress(): number /*f64*/
        /** The setter of [member frame] resets the [member frame_progress] to [code]0.0[/code] implicitly, but this method avoids that.
         *  This is useful when you want to carry over the current [member frame_progress] to another [member frame].
         *  [b]Example:[/b]
         *  
         */
        set_frame_and_progress(frame: number /*i64*/, progress: number /*f64*/): void
        set_speed_scale(speed_scale: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        /** Returns the actual playing speed of current animation or [code]0[/code] if not playing. This speed is the [member speed_scale] property multiplied by [code]custom_speed[/code] argument specified when calling the [method play] method.
         *  Returns a negative value if the current animation is playing backwards.
         */
        get_playing_speed(): number /*f64*/
        _res_changed(): void
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        sprite_frames: SpriteFrames
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        animation: StringName
        /** The key of the animation to play when the scene loads. */
        autoplay: StringName
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        frame: number /*i64*/
        /** The progress value between [code]0.0[/code] and [code]1.0[/code] until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from [code]1.0[/code] to [code]0.0[/code]. */
        frame_progress: number /*f64*/
        /** The speed scaling ratio. For example, if this value is [code]1[/code], then the animation plays at normal speed. If it's [code]0.5[/code], then it plays at half speed. If it's [code]2[/code], then it plays at double speed.
         *  If set to a negative value, the animation is played in reverse. If set to [code]0[/code], the animation will not advance.
         */
        speed_scale: number /*f64*/
        readonly sprite_frames_changed: Signal
        readonly animation_changed: Signal
        readonly frame_changed: Signal
        readonly animation_looped: Signal
        readonly animation_finished: Signal
    }
    /** Proxy texture for simple frame-based animations. */
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
        /** Assigns a [Texture2D] to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID [member frames] - 1.
         *  You can define any number of textures up to [constant MAX_FRAMES], but keep in mind that only frames from 0 to [member frames] - 1 will be part of the animation.
         */
        set_frame_texture(frame: number /*i64*/, texture: Texture2D): void
        /** Returns the given frame's [Texture2D]. */
        get_frame_texture(frame: number /*i64*/): Texture2D
        /** Sets the duration of any given [param frame]. The final duration is affected by the [member speed_scale]. If set to [code]0[/code], the frame is skipped during playback. */
        set_frame_duration(frame: number /*i64*/, duration: number /*f64*/): void
        /** Returns the given [param frame]'s duration, in seconds. */
        get_frame_duration(frame: number /*i64*/): number /*f64*/
        /** Number of frames to use in the animation. While you can create the frames independently with [method set_frame_texture], you need to set this value for the animation to take new frames into account. The maximum number of frames is [constant MAX_FRAMES]. */
        frames: number /*i64*/
        /** Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration. */
        current_frame: number /*i64*/
        /** If [code]true[/code], the animation will pause where it currently is (i.e. at [member current_frame]). The animation will continue from where it was paused when changing this property to [code]false[/code]. */
        pause: boolean
        /** If [code]true[/code], the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set [member pause] to [code]true[/code]. */
        one_shot: boolean
        /** The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse. */
        speed_scale: number /*f64*/
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
    /** Holds data that can be used to animate anything in the engine. */
    class Animation extends Resource {
        /** Adds a track to the Animation. */
        add_track(type: Animation.TrackType, at_position: number /*i64*/ = -1): number /*i64*/
        /** Removes a track by specifying the track index. */
        remove_track(track_idx: number /*i64*/): void
        /** Returns the amount of tracks in the animation. */
        get_track_count(): number /*i64*/
        /** Gets the type of a track. */
        track_get_type(track_idx: number /*i64*/): Animation.TrackType
        /** Gets the path of a track. For more information on the path format, see [method track_set_path]. */
        track_get_path(track_idx: number /*i64*/): NodePath
        /** Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the parent node of the node that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by [code]":"[/code].
         *  For example, [code]"character/skeleton:ankle"[/code] or [code]"character/mesh:transform/local"[/code].
         */
        track_set_path(track_idx: number /*i64*/, path: NodePath): void
        /** Returns the index of the specified track. If the track is not found, return -1. */
        find_track(path: NodePath, type: Animation.TrackType): number /*i64*/
        /** Moves a track up. */
        track_move_up(track_idx: number /*i64*/): void
        /** Moves a track down. */
        track_move_down(track_idx: number /*i64*/): void
        /** Changes the index position of track [param track_idx] to the one defined in [param to_idx]. */
        track_move_to(track_idx: number /*i64*/, to_idx: number /*i64*/): void
        /** Swaps the track [param track_idx]'s index position with the track [param with_idx]. */
        track_swap(track_idx: number /*i64*/, with_idx: number /*i64*/): void
        /** Sets the given track as imported or not. */
        track_set_imported(track_idx: number /*i64*/, imported: boolean): void
        /** Returns [code]true[/code] if the given track is imported. Else, return [code]false[/code]. */
        track_is_imported(track_idx: number /*i64*/): boolean
        /** Enables/disables the given track. Tracks are enabled by default. */
        track_set_enabled(track_idx: number /*i64*/, enabled: boolean): void
        /** Returns [code]true[/code] if the track at index [param track_idx] is enabled. */
        track_is_enabled(track_idx: number /*i64*/): boolean
        /** Inserts a key in a given 3D position track. Returns the key index. */
        position_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, position: Vector3): number /*i64*/
        /** Inserts a key in a given 3D rotation track. Returns the key index. */
        rotation_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, rotation: Quaternion): number /*i64*/
        /** Inserts a key in a given 3D scale track. Returns the key index. */
        scale_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, scale: Vector3): number /*i64*/
        /** Inserts a key in a given blend shape track. Returns the key index. */
        blend_shape_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, amount: number /*f64*/): number /*i64*/
        /** Returns the interpolated position value at the given time (in seconds). The [param track_idx] must be the index of a 3D position track. */
        position_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Vector3
        /** Returns the interpolated rotation value at the given time (in seconds). The [param track_idx] must be the index of a 3D rotation track. */
        rotation_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Quaternion
        /** Returns the interpolated scale value at the given time (in seconds). The [param track_idx] must be the index of a 3D scale track. */
        scale_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): Vector3
        /** Returns the interpolated blend shape value at the given time (in seconds). The [param track_idx] must be the index of a blend shape track. */
        blend_shape_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): number /*f64*/
        /** Inserts a generic key in a given track. Returns the key index. */
        track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, key: any, transition: number /*f64*/ = 1): number /*i64*/
        /** Removes a key by index in a given track. */
        track_remove_key(track_idx: number /*i64*/, key_idx: number /*i64*/): void
        /** Removes a key at [param time] in a given track. */
        track_remove_key_at_time(track_idx: number /*i64*/, time: number /*f64*/): void
        /** Sets the value of an existing key. */
        track_set_key_value(track_idx: number /*i64*/, key: number /*i64*/, value: any): void
        /** Sets the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        track_set_key_transition(track_idx: number /*i64*/, key_idx: number /*i64*/, transition: number /*f64*/): void
        /** Sets the time of an existing key. */
        track_set_key_time(track_idx: number /*i64*/, key_idx: number /*i64*/, time: number /*f64*/): void
        /** Returns the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        track_get_key_transition(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        /** Returns the number of keys in a given track. */
        track_get_key_count(track_idx: number /*i64*/): number /*i64*/
        /** Returns the value of a given key in a given track. */
        track_get_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/): any
        /** Returns the time at which the key is located. */
        track_get_key_time(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        /** Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given. */
        track_find_key(track_idx: number /*i64*/, time: number /*f64*/, find_mode: Animation.FindMode = 0): number /*i64*/
        /** Sets the interpolation type of a given track. */
        track_set_interpolation_type(track_idx: number /*i64*/, interpolation: Animation.InterpolationType): void
        /** Returns the interpolation type of a given track. */
        track_get_interpolation_type(track_idx: number /*i64*/): Animation.InterpolationType
        /** If [code]true[/code], the track at [param track_idx] wraps the interpolation loop. */
        track_set_interpolation_loop_wrap(track_idx: number /*i64*/, interpolation: boolean): void
        /** Returns [code]true[/code] if the track at [param track_idx] wraps the interpolation loop. New tracks wrap the interpolation loop by default. */
        track_get_interpolation_loop_wrap(track_idx: number /*i64*/): boolean
        /** Returns [code]true[/code] if the track is compressed, [code]false[/code] otherwise. See also [method compress]. */
        track_is_compressed(track_idx: number /*i64*/): boolean
        /** Sets the update mode (see [enum UpdateMode]) of a value track. */
        value_track_set_update_mode(track_idx: number /*i64*/, mode: Animation.UpdateMode): void
        /** Returns the update mode of a value track. */
        value_track_get_update_mode(track_idx: number /*i64*/): Animation.UpdateMode
        /** Returns the interpolated value at the given time (in seconds). The [param track_idx] must be the index of a value track. */
        value_track_interpolate(track_idx: number /*i64*/, time_sec: number /*f64*/): any
        /** Returns the method name of a method track. */
        method_track_get_name(track_idx: number /*i64*/, key_idx: number /*i64*/): StringName
        /** Returns the arguments values to be called on a method track for a given key in a given track. */
        method_track_get_params(track_idx: number /*i64*/, key_idx: number /*i64*/): Array
        /** Inserts a Bezier Track key at the given [param time] in seconds. The [param track_idx] must be the index of a Bezier Track.
         *  [param in_handle] is the left-side weight of the added Bezier curve point, [param out_handle] is the right-side one, while [param value] is the actual value at this point.
         */
        bezier_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, value: number /*f64*/, in_handle: Vector2 = Vector2.ZERO, out_handle: Vector2 = Vector2.ZERO): number /*i64*/
        /** Sets the value of the key identified by [param key_idx] to the given value. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/, value: number /*f64*/): void
        /** Sets the in handle of the key identified by [param key_idx] to value [param in_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_in_handle(track_idx: number /*i64*/, key_idx: number /*i64*/, in_handle: Vector2, balanced_value_time_ratio: number /*f64*/ = 1): void
        /** Sets the out handle of the key identified by [param key_idx] to value [param out_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_out_handle(track_idx: number /*i64*/, key_idx: number /*i64*/, out_handle: Vector2, balanced_value_time_ratio: number /*f64*/ = 1): void
        /** Returns the value of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_value(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        /** Returns the in handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_in_handle(track_idx: number /*i64*/, key_idx: number /*i64*/): Vector2
        /** Returns the out handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_out_handle(track_idx: number /*i64*/, key_idx: number /*i64*/): Vector2
        /** Returns the interpolated value at the given [param time] (in seconds). The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_interpolate(track_idx: number /*i64*/, time: number /*f64*/): number /*f64*/
        /** Inserts an Audio Track key at the given [param time] in seconds. The [param track_idx] must be the index of an Audio Track.
         *  [param stream] is the [AudioStream] resource to play. [param start_offset] is the number of seconds cut off at the beginning of the audio stream, while [param end_offset] is at the ending.
         */
        audio_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, stream: Resource, start_offset: number /*f64*/ = 0, end_offset: number /*f64*/ = 0): number /*i64*/
        /** Sets the stream of the key identified by [param key_idx] to value [param stream]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_stream(track_idx: number /*i64*/, key_idx: number /*i64*/, stream: Resource): void
        /** Sets the start offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_start_offset(track_idx: number /*i64*/, key_idx: number /*i64*/, offset: number /*f64*/): void
        /** Sets the end offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_end_offset(track_idx: number /*i64*/, key_idx: number /*i64*/, offset: number /*f64*/): void
        /** Returns the audio stream of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_get_key_stream(track_idx: number /*i64*/, key_idx: number /*i64*/): Resource
        /** Returns the start offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.
         *  Start offset is the number of seconds cut off at the beginning of the audio stream.
         */
        audio_track_get_key_start_offset(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        /** Returns the end offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.
         *  End offset is the number of seconds cut off at the ending of the audio stream.
         */
        audio_track_get_key_end_offset(track_idx: number /*i64*/, key_idx: number /*i64*/): number /*f64*/
        /** Sets whether the track will be blended with other animations. If [code]true[/code], the audio playback volume changes depending on the blend value. */
        audio_track_set_use_blend(track_idx: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if the track at [param track_idx] will be blended with other animations. */
        audio_track_is_use_blend(track_idx: number /*i64*/): boolean
        /** Inserts a key with value [param animation] at the given [param time] (in seconds). The [param track_idx] must be the index of an Animation Track. */
        animation_track_insert_key(track_idx: number /*i64*/, time: number /*f64*/, animation: StringName): number /*i64*/
        /** Sets the key identified by [param key_idx] to value [param animation]. The [param track_idx] must be the index of an Animation Track. */
        animation_track_set_key_animation(track_idx: number /*i64*/, key_idx: number /*i64*/, animation: StringName): void
        /** Returns the animation name at the key identified by [param key_idx]. The [param track_idx] must be the index of an Animation Track. */
        animation_track_get_key_animation(track_idx: number /*i64*/, key_idx: number /*i64*/): StringName
        set_length(time_sec: number /*f64*/): void
        get_length(): number /*f64*/
        set_loop_mode(loop_mode: Animation.LoopMode): void
        get_loop_mode(): Animation.LoopMode
        set_step(size_sec: number /*f64*/): void
        get_step(): number /*f64*/
        /** Clear the animation (clear all tracks and reset all). */
        clear(): void
        /** Adds a new track to [param to_animation] that is a copy of the given track from this animation. */
        copy_track(track_idx: number /*i64*/, to_animation: Animation): void
        /** Compress the animation and all its tracks in-place. This will make [method track_is_compressed] return [code]true[/code] once called on this [Animation]. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.
         *  [b]Note:[/b] Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.
         */
        compress(page_size: number /*i64*/ = 8192, fps: number /*i64*/ = 120, split_tolerance: number /*f64*/ = 4): void
        /** The total length of the animation (in seconds).
         *  [b]Note:[/b] Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.
         */
        length: number /*f64*/
        /** Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation. */
        loop_mode: number /*i64*/
        /** The animation step value. */
        step: number /*f64*/
    }
    class AnimationBezierTrackEdit extends Control {
        _clear_selection(): void
        _clear_selection_for_anim(_unnamed_arg0: Animation): void
        _select_at_anim(_unnamed_arg0: Animation, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*f64*/): void
        _update_hidden_tracks_after(_unnamed_arg0: number /*i64*/): void
        _update_locked_tracks_after(_unnamed_arg0: number /*i64*/): void
        _bezier_track_insert_key(_unnamed_arg0: number /*i64*/, _unnamed_arg1: number /*f64*/, _unnamed_arg2: number /*f64*/, _unnamed_arg3: Vector2, _unnamed_arg4: Vector2, _unnamed_arg5: any /*Animation.HandleMode*/): void
        readonly timeline_changed: Signal
        readonly remove_request: Signal
        readonly insert_key: Signal
        readonly select_key: Signal
        readonly clear_selection: Signal
        readonly close_request: Signal
        readonly move_selection_begin: Signal
        readonly move_selection: Signal
        readonly move_selection_commit: Signal
        readonly move_selection_cancel: Signal
    }
    /** Container for [Animation] resources. */
    class AnimationLibrary extends Resource {
        /** Adds the [param animation] to the library, accessible by the key [param name]. */
        add_animation(name: StringName, animation: Animation): GodotError
        /** Removes the [Animation] with the key [param name]. */
        remove_animation(name: StringName): void
        /** Changes the key of the [Animation] associated with the key [param name] to [param newname]. */
        rename_animation(name: StringName, newname: StringName): void
        /** Returns [code]true[/code] if the library stores an [Animation] with [param name] as the key. */
        has_animation(name: StringName): boolean
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, [code]null[/code] is returned and an error is logged. */
        get_animation(name: StringName): Animation
        /** Returns the keys for the [Animation]s stored in the library. */
        get_animation_list(): Array
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        _data: Dictionary
        readonly animation_added: Signal
        readonly animation_removed: Signal
        readonly animation_renamed: Signal
        readonly animation_changed: Signal
    }
    class AnimationLibraryEditor extends AcceptDialog {
        _update_editor(mixer: Object): void
        readonly update_editor: Signal
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
    /** Base class for [AnimationPlayer] and [AnimationTree]. */
    class AnimationMixer extends Node {
        /* gdvirtual */ _post_process_key_value(animation: Animation, track: number /*i64*/, value: any, object: Object, object_idx: number /*i64*/): void
        /** Adds [param library] to the animation player, under the key [param name]. */
        add_animation_library(name: StringName, library: AnimationLibrary): GodotError
        /** Removes the [AnimationLibrary] associated with the key [param name]. */
        remove_animation_library(name: StringName): void
        /** Moves the [AnimationLibrary] associated with the key [param name] to the key [param newname]. */
        rename_animation_library(name: StringName, newname: StringName): void
        /** Returns [code]true[/code] if the [AnimationPlayer] stores an [AnimationLibrary] with key [param name]. */
        has_animation_library(name: StringName): boolean
        /** Returns the first [AnimationLibrary] with key [param name] or [code]null[/code] if not found.
         *  To get the [AnimationPlayer]'s global animation library, use [code]get_animation_library("")[/code].
         */
        get_animation_library(name: StringName): AnimationLibrary
        /** Returns the list of stored library keys. */
        get_animation_library_list(): Array
        /** Returns [code]true[/code] if the [AnimationPlayer] stores an [Animation] with key [param name]. */
        has_animation(name: StringName): boolean
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, [code]null[/code] is returned and an error is logged. */
        get_animation(name: StringName): Animation
        /** Returns the list of stored animation keys. */
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
        /** Retrieve the motion delta of position with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_POSITION_3D], returns [code]Vector3(0, 0, 0)[/code].
         *  See also [member root_motion_track] and [RootMotionView].
         *  The most basic example is applying position to [CharacterBody3D]:
         *  
         *  By using this in combination with [method get_root_motion_position_accumulator], you can apply the root motion position more correctly to account for the rotation of the node.
         *  
         */
        get_root_motion_position(): Vector3
        /** Retrieve the motion delta of rotation with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_ROTATION_3D], returns [code]Quaternion(0, 0, 0, 1)[/code].
         *  See also [member root_motion_track] and [RootMotionView].
         *  The most basic example is applying rotation to [CharacterBody3D]:
         *  
         */
        get_root_motion_rotation(): Quaternion
        /** Retrieve the motion delta of scale with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_SCALE_3D], returns [code]Vector3(0, 0, 0)[/code].
         *  See also [member root_motion_track] and [RootMotionView].
         *  The most basic example is applying scale to [CharacterBody3D]:
         *  
         */
        get_root_motion_scale(): Vector3
        /** Retrieve the blended value of the position tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
         *  This is useful in cases where you want to respect the initial key values of the animation.
         *  For example, if an animation with only one key [code]Vector3(0, 0, 0)[/code] is played in the previous frame and then an animation with only one key [code]Vector3(1, 0, 1)[/code] is played in the next frame, the difference can be calculated as follows:
         *  
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
         */
        get_root_motion_position_accumulator(): Vector3
        /** Retrieve the blended value of the rotation tracks with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.
         *  This is necessary to apply the root motion position correctly, taking rotation into account. See also [method get_root_motion_position].
         *  Also, this is useful in cases where you want to respect the initial key values of the animation.
         *  For example, if an animation with only one key [code]Quaternion(0, 0, 0, 1)[/code] is played in the previous frame and then an animation with only one key [code]Quaternion(0, 0.707, 0, 0.707)[/code] is played in the next frame, the difference can be calculated as follows:
         *  
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
         */
        get_root_motion_rotation_accumulator(): Quaternion
        /** Retrieve the blended value of the scale tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
         *  For example, if an animation with only one key [code]Vector3(1, 1, 1)[/code] is played in the previous frame and then an animation with only one key [code]Vector3(2, 2, 2)[/code] is played in the next frame, the difference can be calculated as follows:
         *  
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
         */
        get_root_motion_scale_accumulator(): Vector3
        /** [AnimationMixer] caches animated nodes. It may not notice if a node disappears; [method clear_caches] forces it to update the cache again. */
        clear_caches(): void
        /** Manually advance the animations by the specified time (in seconds). */
        advance(delta: number /*f64*/): void
        set_reset_on_save_enabled(enabled: boolean): void
        is_reset_on_save_enabled(): boolean
        _reset(): void
        _restore(backup: any /*AnimatedValuesBackup*/): void
        /** Returns the key of [param animation] or an empty [StringName] if not found. */
        find_animation(animation: Animation): StringName
        /** Returns the key for the [AnimationLibrary] that contains [param animation] or an empty [StringName] if not found. */
        find_animation_library(animation: Animation): StringName
        /** If [code]true[/code], the [AnimationMixer] will be processing. */
        active: boolean
        /** If [code]true[/code], the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value ([code]0[/code] or a [code]"RESET"[/code] animation if present).
         *  This means that if the total amount of blending is [code]0.0[/code], the result is equal to the [code]"RESET"[/code] animation.
         *  If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.
         *  If [code]false[/code], The blend does not use the deterministic algorithm. The total weight is normalized and always [code]1.0[/code]. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.
         *  [b]Note:[/b] In [AnimationTree], the blending with [AnimationNodeAdd2], [AnimationNodeAdd3], [AnimationNodeSub2] or the weight greater than [code]1.0[/code] may produce unexpected results.
         *  For example, if [AnimationNodeAdd2] blends two nodes with the amount [code]1.0[/code], then total weight is [code]2.0[/code] but it will be normalized to make the total amount [code]1.0[/code] and the result will be equal to [AnimationNodeBlend2] with the amount [code]0.5[/code].
         */
        deterministic: boolean
        /** This is used by the editor. If set to [code]true[/code], the scene will be saved with the effects of the reset animation (the animation with the key [code]"RESET"[/code]) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.
         *  This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.
         */
        reset_on_save: boolean
        /** The node from which node path references will travel. */
        root_node: NodePath
        /** The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. To specify a track that controls properties or bones, append its name after the path, separated by [code]":"[/code]. For example, [code]"character/skeleton:ankle"[/code] or [code]"character/mesh:transform/local"[/code].
         *  If the track has type [constant Animation.TYPE_POSITION_3D], [constant Animation.TYPE_ROTATION_3D] or [constant Animation.TYPE_SCALE_3D] the transformation will be canceled visually, and the animation will appear to stay in place. See also [method get_root_motion_position], [method get_root_motion_rotation], [method get_root_motion_scale] and [RootMotionView].
         */
        root_motion_track: NodePath
        /** The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.
         *  For example, if this value is [code]32[/code] and the animation has two audio tracks, the two [AudioStreamPlayer]s assigned can play simultaneously up to [code]32[/code] voices each.
         */
        audio_max_polyphony: number /*i64*/
        /** The process notification in which to update animations. */
        callback_mode_process: number /*i64*/
        /** The call mode to use for Call Method tracks. */
        callback_mode_method: number /*i64*/
        readonly mixer_updated: Signal
        readonly animation_list_changed: Signal
        readonly animation_libraries_updated: Signal
        readonly animation_finished: Signal
        readonly animation_started: Signal
        readonly caches_cleared: Signal
    }
    namespace AnimationNode {
        enum FilterAction {
            FILTER_IGNORE = 0,
            FILTER_PASS = 1,
            FILTER_STOP = 2,
            FILTER_BLEND = 3,
        }
    }
    /** Base class for [AnimationTree] nodes. Not related to scene nodes. */
    class AnimationNode extends Resource {
        /* gdvirtual */ _get_child_nodes(): Dictionary
        /* gdvirtual */ _get_parameter_list(): Array
        /* gdvirtual */ _get_child_by_name(name: StringName): AnimationNode
        /* gdvirtual */ _get_parameter_default_value(parameter: StringName): void
        /* gdvirtual */ _is_parameter_read_only(parameter: StringName): boolean
        /* gdvirtual */ _process(time: number /*f64*/, seek: boolean, is_external_seeking: boolean, test_only: boolean): number /*f64*/
        /* gdvirtual */ _get_caption(): string
        /* gdvirtual */ _has_filter(): boolean
        /** Adds an input to the animation node. This is only useful for animation nodes created for use in an [AnimationNodeBlendTree]. If the addition fails, returns [code]false[/code]. */
        add_input(name: string): boolean
        /** Removes an input, call this only when inactive. */
        remove_input(index: number /*i64*/): void
        /** Sets the name of the input at the given [param input] index. If the setting fails, returns [code]false[/code]. */
        set_input_name(input: number /*i64*/, name: string): boolean
        /** Gets the name of an input by index. */
        get_input_name(input: number /*i64*/): string
        /** Amount of inputs in this animation node, only useful for animation nodes that go into [AnimationNodeBlendTree]. */
        get_input_count(): number /*i64*/
        /** Returns the input index which corresponds to [param name]. If not found, returns [code]-1[/code]. */
        find_input(name: string): number /*i64*/
        /** Adds or removes a path for the filter. */
        set_filter_path(path: NodePath, enable: boolean): void
        /** Returns whether the given path is filtered. */
        is_path_filtered(path: NodePath): boolean
        set_filter_enabled(enable: boolean): void
        is_filter_enabled(): boolean
        _set_filters(filters: Array): void
        _get_filters(): Array
        /** Blend an animation by [param blend] amount (name must be valid in the linked [AnimationPlayer]). A [param time] and [param delta] may be passed, as well as whether [param seeked] happened.
         *  A [param looped_flag] is used by internal processing immediately after the loop. See also [enum Animation.LoopedFlag].
         */
        blend_animation(animation: StringName, time: number /*f64*/, delta: number /*f64*/, seeked: boolean, is_external_seeking: boolean, blend: number /*f64*/, looped_flag: Animation.LoopedFlag = 0): void
        /** Blend another animation node (in case this animation node contains child animation nodes). This function is only useful if you inherit from [AnimationRootNode] instead, otherwise editors will not display your animation node for addition. */
        blend_node(name: StringName, node: AnimationNode, time: number /*f64*/, seek: boolean, is_external_seeking: boolean, blend: number /*f64*/, filter: AnimationNode.FilterAction = 0, sync: boolean = true, test_only: boolean = false): number /*f64*/
        /** Blend an input. This is only useful for animation nodes created for an [AnimationNodeBlendTree]. The [param time] parameter is a relative delta, unless [param seek] is [code]true[/code], in which case it is absolute. A filter mode may be optionally passed (see [enum FilterAction] for options). */
        blend_input(input_index: number /*i64*/, time: number /*f64*/, seek: boolean, is_external_seeking: boolean, blend: number /*f64*/, filter: AnimationNode.FilterAction = 0, sync: boolean = true, test_only: boolean = false): number /*f64*/
        /** Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes. */
        set_parameter(name: StringName, value: any): void
        /** Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        get_parameter(name: StringName): any
        /** If [code]true[/code], filtering is enabled. */
        filter_enabled: boolean
        filters: Array
        readonly tree_changed: Signal
        readonly animation_node_renamed: Signal
        readonly animation_node_removed: Signal
    }
    /** Blends two animations additively inside of an [AnimationNodeBlendTree]. */
    class AnimationNodeAdd2 extends AnimationNodeSync {
    }
    /** Blends two of three animations additively inside of an [AnimationNodeBlendTree]. */
    class AnimationNodeAdd3 extends AnimationNodeSync {
    }
    namespace AnimationNodeAnimation {
        enum PlayMode {
            PLAY_MODE_FORWARD = 0,
            PLAY_MODE_BACKWARD = 1,
        }
    }
    /** An input animation for an [AnimationNodeBlendTree]. */
    class AnimationNodeAnimation extends AnimationRootNode {
        set_animation(name: StringName): void
        get_animation(): StringName
        set_play_mode(mode: AnimationNodeAnimation.PlayMode): void
        get_play_mode(): AnimationNodeAnimation.PlayMode
        /** Animation to use as an output. It is one of the animations provided by [member AnimationTree.anim_player]. */
        animation: StringName
        /** Determines the playback direction of the animation. */
        play_mode: number /*i64*/
    }
    /** Blends two animations linearly inside of an [AnimationNodeBlendTree]. */
    class AnimationNodeBlend2 extends AnimationNodeSync {
    }
    /** Blends two of three animations linearly inside of an [AnimationNodeBlendTree]. */
    class AnimationNodeBlend3 extends AnimationNodeSync {
    }
    namespace AnimationNodeBlendSpace1D {
        enum BlendMode {
            BLEND_MODE_INTERPOLATED = 0,
            BLEND_MODE_DISCRETE = 1,
            BLEND_MODE_DISCRETE_CARRY = 2,
        }
    }
    /** A set of [AnimationRootNode]s placed on a virtual axis, crossfading between the two adjacent ones. Used by [AnimationTree]. */
    class AnimationNodeBlendSpace1D extends AnimationRootNode {
        /** Adds a new point that represents a [param node] on the virtual axis at a given position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_blend_point(node: AnimationRootNode, pos: number /*f64*/, at_index: number /*i64*/ = -1): void
        /** Updates the position of the point at index [param point] on the blend axis. */
        set_blend_point_position(point: number /*i64*/, pos: number /*f64*/): void
        /** Returns the position of the point at index [param point]. */
        get_blend_point_position(point: number /*i64*/): number /*f64*/
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        set_blend_point_node(point: number /*i64*/, node: AnimationRootNode): void
        /** Returns the [AnimationNode] referenced by the point at index [param point]. */
        get_blend_point_node(point: number /*i64*/): AnimationRootNode
        /** Removes the point at index [param point] from the blend axis. */
        remove_blend_point(point: number /*i64*/): void
        /** Returns the number of points on the blend axis. */
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
        /** The blend space's axis's lower limit for the points' position. See [method add_blend_point]. */
        min_space: number /*f64*/
        /** The blend space's axis's upper limit for the points' position. See [method add_blend_point]. */
        max_space: number /*f64*/
        /** Position increment to snap to when moving a point on the axis. */
        snap: number /*f64*/
        /** Label of the virtual axis of the blend space. */
        value_label: string
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        blend_mode: number /*i64*/
        /** If [code]false[/code], the blended animations' frame are stopped when the blend value is [code]0[/code].
         *  If [code]true[/code], forcing the blended animations to advance frame.
         */
        sync: boolean
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
    /** A set of [AnimationRootNode]s placed on 2D coordinates, crossfading between the three adjacent ones. Used by [AnimationTree]. */
    class AnimationNodeBlendSpace2D extends AnimationRootNode {
        /** Adds a new point that represents a [param node] at the position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_blend_point(node: AnimationRootNode, pos: Vector2, at_index: number /*i64*/ = -1): void
        /** Updates the position of the point at index [param point] on the blend axis. */
        set_blend_point_position(point: number /*i64*/, pos: Vector2): void
        /** Returns the position of the point at index [param point]. */
        get_blend_point_position(point: number /*i64*/): Vector2
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        set_blend_point_node(point: number /*i64*/, node: AnimationRootNode): void
        /** Returns the [AnimationRootNode] referenced by the point at index [param point]. */
        get_blend_point_node(point: number /*i64*/): AnimationRootNode
        /** Removes the point at index [param point] from the blend space. */
        remove_blend_point(point: number /*i64*/): void
        /** Returns the number of points in the blend space. */
        get_blend_point_count(): number /*i64*/
        /** Creates a new triangle using three points [param x], [param y], and [param z]. Triangles can overlap. You can insert the triangle at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_triangle(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/, at_index: number /*i64*/ = -1): void
        /** Returns the position of the point at index [param point] in the triangle of index [param triangle]. */
        get_triangle_point(triangle: number /*i64*/, point: number /*i64*/): number /*i64*/
        /** Removes the triangle at index [param triangle] from the blend space. */
        remove_triangle(triangle: number /*i64*/): void
        /** Returns the number of triangles in the blend space. */
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
        /** If [code]true[/code], the blend space is triangulated automatically. The mesh updates every time you add or remove points with [method add_blend_point] and [method remove_blend_point]. */
        auto_triangles: boolean
        triangles: PackedInt32Array
        /** The blend space's X and Y axes' lower limit for the points' position. See [method add_blend_point]. */
        min_space: Vector2
        /** The blend space's X and Y axes' upper limit for the points' position. See [method add_blend_point]. */
        max_space: Vector2
        /** Position increment to snap to when moving a point. */
        snap: Vector2
        /** Name of the blend space's X axis. */
        x_label: string
        /** Name of the blend space's Y axis. */
        y_label: string
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        blend_mode: number /*i64*/
        /** If [code]false[/code], the blended animations' frame are stopped when the blend value is [code]0[/code].
         *  If [code]true[/code], forcing the blended animations to advance frame.
         */
        sync: boolean
        readonly triangles_updated: Signal
    }
    class AnimationNodeBlendSpace2DEditor extends AnimationTreeNodeEditorPlugin {
        _update_space(): void
        _update_tool_erase(): void
        _update_edited_point_pos(): void
    }
    /** A sub-tree of many type [AnimationNode]s used for complex animations. Used by [AnimationTree]. */
    class AnimationNodeBlendTree extends AnimationRootNode {
        static readonly CONNECTION_OK = 0
        static readonly CONNECTION_ERROR_NO_INPUT = 1
        static readonly CONNECTION_ERROR_NO_INPUT_INDEX = 2
        static readonly CONNECTION_ERROR_NO_OUTPUT = 3
        static readonly CONNECTION_ERROR_SAME_NODE = 4
        static readonly CONNECTION_ERROR_CONNECTION_EXISTS = 5
        /** Adds an [AnimationNode] at the given [param position]. The [param name] is used to identify the created sub animation node later. */
        add_node(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        /** Returns the sub animation node with the specified [param name]. */
        get_node(name: StringName): AnimationNode
        /** Removes a sub animation node. */
        remove_node(name: StringName): void
        /** Changes the name of a sub animation node. */
        rename_node(name: StringName, new_name: StringName): void
        /** Returns [code]true[/code] if a sub animation node with specified [param name] exists. */
        has_node(name: StringName): boolean
        /** Connects the output of an [AnimationNode] as input for another [AnimationNode], at the input port specified by [param input_index]. */
        connect_node(input_node: StringName, input_index: number /*i64*/, output_node: StringName): void
        /** Disconnects the animation node connected to the specified input. */
        disconnect_node(input_node: StringName, input_index: number /*i64*/): void
        /** Modifies the position of a sub animation node. */
        set_node_position(name: StringName, position: Vector2): void
        /** Returns the position of the sub animation node with the specified [param name]. */
        get_node_position(name: StringName): Vector2
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        /** The global offset of all sub animation nodes. */
        graph_offset: Vector2
        readonly node_changed: Signal
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
    /** Plays an animation once in an [AnimationNodeBlendTree]. */
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
        /** The blend type. */
        mix_mode: number /*i64*/
        /** The fade-in duration. For example, setting this to [code]1.0[/code] for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation. */
        fadein_time: number /*f64*/
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        fadein_curve: Curve
        /** The fade-out duration. For example, setting this to [code]1.0[/code] for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation. */
        fadeout_time: number /*f64*/
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        fadeout_curve: Curve
        /** If [code]true[/code], the sub-animation will restart automatically after finishing.
         *  In other words, to start auto restarting, the animation must be played once with the [constant ONE_SHOT_REQUEST_FIRE] request. The [constant ONE_SHOT_REQUEST_ABORT] request stops the auto restarting, but it does not disable the [member autorestart] itself. So, the [constant ONE_SHOT_REQUEST_FIRE] request will start auto restarting again.
         */
        autorestart: boolean
        /** The delay after which the automatic restart is triggered, in seconds. */
        autorestart_delay: number /*f64*/
        /** If [member autorestart] is [code]true[/code], a random additional delay (in seconds) between 0 and this value will be added to [member autorestart_delay]. */
        autorestart_random_delay: number /*f64*/
    }
    /** The animation output node of an [AnimationNodeBlendTree]. */
    class AnimationNodeOutput extends AnimationNode {
    }
    namespace AnimationNodeStateMachine {
        enum StateMachineType {
            STATE_MACHINE_TYPE_ROOT = 0,
            STATE_MACHINE_TYPE_NESTED = 1,
            STATE_MACHINE_TYPE_GROUPED = 2,
        }
    }
    /** A state machine with multiple [AnimationRootNode]s, used by [AnimationTree]. */
    class AnimationNodeStateMachine extends AnimationRootNode {
        /** Adds a new animation node to the graph. The [param position] is used for display in the editor. */
        add_node(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        replace_node(name: StringName, node: AnimationNode): void
        /** Returns the animation node with the given name. */
        get_node(name: StringName): AnimationNode
        /** Deletes the given animation node from the graph. */
        remove_node(name: StringName): void
        /** Renames the given animation node. */
        rename_node(name: StringName, new_name: StringName): void
        /** Returns [code]true[/code] if the graph contains the given animation node. */
        has_node(name: StringName): boolean
        /** Returns the given animation node's name. */
        get_node_name(node: AnimationNode): StringName
        /** Sets the animation node's coordinates. Used for display in the editor. */
        set_node_position(name: StringName, position: Vector2): void
        /** Returns the given animation node's coordinates. Used for display in the editor. */
        get_node_position(name: StringName): Vector2
        /** Returns [code]true[/code] if there is a transition between the given animation nodes. */
        has_transition(from: StringName, to: StringName): boolean
        /** Adds a transition between the given animation nodes. */
        add_transition(from: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void
        /** Returns the given transition. */
        get_transition(idx: number /*i64*/): AnimationNodeStateMachineTransition
        /** Returns the given transition's start node. */
        get_transition_from(idx: number /*i64*/): StringName
        /** Returns the given transition's end node. */
        get_transition_to(idx: number /*i64*/): StringName
        /** Returns the number of connections in the graph. */
        get_transition_count(): number /*i64*/
        /** Deletes the given transition by index. */
        remove_transition_by_index(idx: number /*i64*/): void
        /** Deletes the transition between the two specified animation nodes. */
        remove_transition(from: StringName, to: StringName): void
        /** Sets the draw offset of the graph. Used for display in the editor. */
        set_graph_offset(offset: Vector2): void
        /** Returns the draw offset of the graph. Used for display in the editor. */
        get_graph_offset(): Vector2
        set_state_machine_type(state_machine_type: AnimationNodeStateMachine.StateMachineType): void
        get_state_machine_type(): AnimationNodeStateMachine.StateMachineType
        set_allow_transition_to_self(enable: boolean): void
        is_allow_transition_to_self(): boolean
        set_reset_ends(enable: boolean): void
        are_ends_reset(): boolean
        /** This property can define the process of transitions for different use cases. See also [enum AnimationNodeStateMachine.StateMachineType]. */
        state_machine_type: number /*i64*/
        /** If [code]true[/code], allows teleport to the self state with [method AnimationNodeStateMachinePlayback.travel]. When the reset option is enabled in [method AnimationNodeStateMachinePlayback.travel], the animation is restarted. If [code]false[/code], nothing happens on the teleportation to the self state. */
        allow_transition_to_self: boolean
        /** If [code]true[/code], treat the cross-fade to the start and end nodes as a blend with the RESET animation.
         *  In most cases, when additional cross-fades are performed in the parent [AnimationNode] of the state machine, setting this property to [code]false[/code] and matching the cross-fade time of the parent [AnimationNode] and the state machine's start node and end node gives good results.
         */
        reset_ends: boolean
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
    /** Provides playback control for an [AnimationNodeStateMachine]. */
    class AnimationNodeStateMachinePlayback extends Resource {
        /** Transitions from the current state to another one, following the shortest path.
         *  If the path does not connect from the current state, the animation will play after the state teleports.
         *  If [param reset_on_teleport] is [code]true[/code], the animation is played from the beginning when the travel cause a teleportation.
         */
        travel(to_node: StringName, reset_on_teleport: boolean = true): void
        /** Starts playing the given animation.
         *  If [param reset] is [code]true[/code], the animation is played from the beginning.
         */
        start(node: StringName, reset: boolean = true): void
        /** If there is a next path by travel or auto advance, immediately transitions from the current state to the next state. */
        next(): void
        /** Stops the currently playing animation. */
        stop(): void
        /** Returns [code]true[/code] if an animation is playing. */
        is_playing(): boolean
        /** Returns the currently playing animation state.
         *  [b]Note:[/b] When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.
         */
        get_current_node(): StringName
        /** Returns the playback position within the current animation state. */
        get_current_play_position(): number /*f64*/
        /** Returns the current state length.
         *  [b]Note:[/b] It is possible that any [AnimationRootNode] can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.
         */
        get_current_length(): number /*f64*/
        /** Returns the starting state of currently fading animation. */
        get_fading_from_node(): StringName
        /** Returns the current travel path as computed internally by the A* algorithm. */
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
    /** A transition within an [AnimationNodeStateMachine] connecting two [AnimationRootNode]s. */
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
        /** The time to cross-fade between this state and the next. */
        xfade_time: number /*f64*/
        /** Ease curve for better control over cross-fade between this state and the next. */
        xfade_curve: Curve
        /** If [code]true[/code], the destination animation is played back from the beginning when switched. */
        reset: boolean
        /** Lower priority transitions are preferred when travelling through the tree via [method AnimationNodeStateMachinePlayback.travel] or [member advance_mode] is set to [constant ADVANCE_MODE_AUTO]. */
        priority: number /*i64*/
        /** The transition type. */
        switch_mode: number /*i64*/
        /** Determines whether the transition should disabled, enabled when using [method AnimationNodeStateMachinePlayback.travel], or traversed automatically if the [member advance_condition] and [member advance_expression] checks are true (if assigned). */
        advance_mode: number /*i64*/
        /** Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the [AnimationTree] that can be controlled from code (see [url=$DOCS_URL/tutorials/animation/animation_tree.html#controlling-from-code]Using AnimationTree[/url]). For example, if [member AnimationTree.tree_root] is an [AnimationNodeStateMachine] and [member advance_condition] is set to [code]"idle"[/code]:
         *  
         */
        advance_condition: StringName
        /** Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code. */
        advance_expression: string
        readonly advance_condition_changed: Signal
    }
    /** Blends two animations subtractively inside of an [AnimationNodeBlendTree]. */
    class AnimationNodeSub2 extends AnimationNodeSync {
    }
    /** Base class for [AnimationNode]s with more than two input ports that must be synchronized. */
    class AnimationNodeSync extends AnimationNode {
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        /** If [code]false[/code], the blended animations' frame are stopped when the blend value is [code]0[/code].
         *  If [code]true[/code], forcing the blended animations to advance frame.
         */
        sync: boolean
    }
    /** A time-scaling animation node used in [AnimationTree]. */
    class AnimationNodeTimeScale extends AnimationNode {
    }
    /** A time-seeking animation node used in [AnimationTree]. */
    class AnimationNodeTimeSeek extends AnimationNode {
    }
    /** A transition within an [AnimationTree] connecting two [AnimationNode]s. */
    class AnimationNodeTransition extends AnimationNodeSync {
        set_input_count(input_count: number /*i64*/): void
        /** Enables or disables auto-advance for the given [param input] index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first. */
        set_input_as_auto_advance(input: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if auto-advance is enabled for the given [param input] index. */
        is_input_set_as_auto_advance(input: number /*i64*/): boolean
        /** If [code]true[/code], the destination animation is restarted when the animation transitions. */
        set_input_reset(input: number /*i64*/, enable: boolean): void
        /** Returns whether the animation restarts when the animation transitions from the other animation. */
        is_input_reset(input: number /*i64*/): boolean
        set_xfade_time(time: number /*f64*/): void
        get_xfade_time(): number /*f64*/
        set_xfade_curve(curve: Curve): void
        get_xfade_curve(): Curve
        set_allow_transition_to_self(enable: boolean): void
        is_allow_transition_to_self(): boolean
        /** Cross-fading time (in seconds) between each animation connected to the inputs. */
        xfade_time: number /*f64*/
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        xfade_curve: Curve
        /** If [code]true[/code], allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If [code]false[/code], nothing happens on the transition to the self state. */
        allow_transition_to_self: boolean
        /** The number of enabled input ports for this animation node. */
        input_count: any /*Inputs,input_*/
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
    /** A node used for animation playback. */
    class AnimationPlayer extends AnimationMixer {
        /** Triggers the [param animation_to] animation when the [param animation_from] animation completes. */
        animation_set_next(animation_from: StringName, animation_to: StringName): void
        /** Returns the key of the animation which is queued to play after the [param animation_from] animation. */
        animation_get_next(animation_from: StringName): StringName
        /** Specifies a blend time (in seconds) between two animations, referenced by their keys. */
        set_blend_time(animation_from: StringName, animation_to: StringName, sec: number /*f64*/): void
        /** Returns the blend time (in seconds) between two animations, referenced by their keys. */
        get_blend_time(animation_from: StringName, animation_to: StringName): number /*f64*/
        set_default_blend_time(sec: number /*f64*/): void
        get_default_blend_time(): number /*f64*/
        /** Plays the animation with key [param name]. Custom blend times and speed can be set.
         *  The [param from_end] option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If [param custom_speed] is negative and [param from_end] is [code]true[/code], the animation will play backwards (which is equivalent to calling [method play_backwards]).
         *  The [AnimationPlayer] keeps track of its current or last played animation with [member assigned_animation]. If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.
         *  [b]Note:[/b] The animation will be updated the next time the [AnimationPlayer] is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call [code]advance(0)[/code].
         */
        play(name: StringName = '', custom_blend: number /*f64*/ = -1, custom_speed: number /*f64*/ = 1, from_end: boolean = false): void
        /** Plays the animation with key [param name] in reverse.
         *  This method is a shorthand for [method play] with [code]custom_speed = -1.0[/code] and [code]from_end = true[/code], so see its description for more information.
         */
        play_backwards(name: StringName = '', custom_blend: number /*f64*/ = -1): void
        /** Pauses the currently playing animation. The [member current_animation_position] will be kept and calling [method play] or [method play_backwards] without arguments or with the same animation name as [member assigned_animation] will resume the animation.
         *  See also [method stop].
         */
        pause(): void
        /** Stops the currently playing animation. The animation position is reset to [code]0[/code] and the [code]custom_speed[/code] is reset to [code]1.0[/code]. See also [method pause].
         *  If [param keep_state] is [code]true[/code], the animation state is not updated visually.
         *  [b]Note:[/b] The method / audio / animation playback tracks will not be processed by this method.
         */
        stop(keep_state: boolean = false): void
        /** Returns [code]true[/code] if an animation is currently playing (even if [member speed_scale] and/or [code]custom_speed[/code] are [code]0[/code]). */
        is_playing(): boolean
        set_current_animation(animation: string): void
        get_current_animation(): string
        set_assigned_animation(animation: string): void
        get_assigned_animation(): string
        /** Queues an animation for playback once the current one is done.
         *  [b]Note:[/b] If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.
         */
        queue(name: StringName): void
        /** Returns a list of the animation keys that are currently queued to play. */
        get_queue(): PackedStringArray
        /** Clears all queued, unplayed animations. */
        clear_queue(): void
        set_speed_scale(speed: number /*f64*/): void
        get_speed_scale(): number /*f64*/
        /** Returns the actual playing speed of current animation or [code]0[/code] if not playing. This speed is the [member speed_scale] property multiplied by [code]custom_speed[/code] argument specified when calling the [method play] method.
         *  Returns a negative value if the current animation is playing backwards.
         */
        get_playing_speed(): number /*f64*/
        set_autoplay(name: string): void
        get_autoplay(): string
        set_movie_quit_on_finish_enabled(enabled: boolean): void
        is_movie_quit_on_finish_enabled(): boolean
        get_current_animation_position(): number /*f64*/
        get_current_animation_length(): number /*f64*/
        /** Seeks the animation to the [param seconds] point in time (in seconds). If [param update] is [code]true[/code], the animation updates too, otherwise it updates at process time. Events between the current frame and [param seconds] are skipped.
         *  If [param update_only] is true, the method / audio / animation playback tracks will not be processed.
         *  [b]Note:[/b] Seeking to the end of the animation doesn't emit [signal AnimationMixer.animation_finished]. If you want to skip animation and emit the signal, use [method AnimationMixer.advance].
         */
        seek(seconds: number /*f64*/, update: boolean = false, update_only: boolean = false): void
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
        set_process_callback(mode: AnimationPlayer.AnimationProcessCallback): void
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
        get_process_callback(): AnimationPlayer.AnimationProcessCallback
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeMethod]. */
        set_method_call_mode(mode: AnimationPlayer.AnimationMethodCallMode): void
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeMethod]. */
        get_method_call_mode(): AnimationPlayer.AnimationMethodCallMode
        /** For backward compatibility. See [member AnimationMixer.root_node]. */
        set_root(path: NodePath): void
        /** For backward compatibility. See [member AnimationMixer.root_node]. */
        get_root(): NodePath
        /** The key of the currently playing animation. If no animation is playing, the property's value is an empty string. Changing this value does not restart the animation. See [method play] for more information on playing animations.
         *  [b]Note:[/b] While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see [Animation].
         */
        current_animation: StringName
        /** If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also [member current_animation]. */
        assigned_animation: StringName
        /** The key of the animation to play when the scene loads. */
        autoplay: StringName
        /** The length (in seconds) of the currently playing animation. */
        readonly current_animation_length: number /*f64*/
        /** The position (in seconds) of the currently playing animation. */
        readonly current_animation_position: number /*f64*/
        /** The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision. */
        playback_default_blend_time: number /*f64*/
        /** The speed scaling ratio. For example, if this value is [code]1[/code], then the animation plays at normal speed. If it's [code]0.5[/code], then it plays at half speed. If it's [code]2[/code], then it plays at double speed.
         *  If set to a negative value, the animation is played in reverse. If set to [code]0[/code], the animation will not advance.
         */
        speed_scale: number /*f64*/
        /** If [code]true[/code] and the engine is running in Movie Maker mode (see [MovieWriter]), exits the engine with [method SceneTree.quit] as soon as an animation is done playing in this [AnimationPlayer]. A message is printed when the engine quits for this reason.
         *  [b]Note:[/b] This obeys the same logic as the [signal AnimationMixer.animation_finished] signal, so it will not quit the engine if the animation is set to be looping.
         */
        movie_quit_on_finish: boolean
        readonly current_animation_changed: Signal
        readonly animation_changed: Signal
    }
    class AnimationPlayerEditor extends VBoxContainer {
        _animation_player_changed(_unnamed_arg0: Object): void
        _start_onion_skinning(): void
        _stop_onion_skinning(): void
        readonly animation_selected: Signal
    }
    class AnimationPlayerEditorPlugin extends EditorPlugin {
    }
    /** Base class for [AnimationNode]s that hold one or multiple composite animations. Usually used for [member AnimationTree.tree_root]. */
    class AnimationRootNode extends AnimationNode {
    }
    class AnimationTimelineEdit extends Range {
        update_values(): void
        readonly zoom_changed: Signal
        readonly name_limit_changed: Signal
        readonly timeline_changed: Signal
        readonly track_added: Signal
        readonly length_changed: Signal
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
        _bezier_track_set_key_handle_mode(animation: Animation, track_idx: number /*i64*/, key_idx: number /*i64*/, key_handle_mode: any /*Animation.HandleMode*/, key_handle_set_mode: any /*Animation.HandleSetMode*/ = 0): void
        readonly timeline_changed: Signal
        readonly keying_changed: Signal
        readonly animation_len_changed: Signal
        readonly animation_step_changed: Signal
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
    /** A node used for advanced animation transitions in an [AnimationPlayer]. */
    class AnimationTree extends AnimationMixer {
        set_tree_root(animation_node: AnimationRootNode): void
        get_tree_root(): AnimationRootNode
        set_advance_expression_base_node(path: NodePath): void
        get_advance_expression_base_node(): NodePath
        set_animation_player(path: NodePath): void
        get_animation_player(): NodePath
        _update_properties(): void
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
        set_process_callback(mode: AnimationTree.AnimationProcessCallback): void
        /** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
        get_process_callback(): AnimationTree.AnimationProcessCallback
        /** The root animation node of this [AnimationTree]. See [AnimationRootNode]. */
        tree_root: AnimationRootNode
        /** The path to the [Node] used to evaluate the [AnimationNode] [Expression] if one is not explicitly specified internally. */
        advance_expression_base_node: NodePath
        /** The path to the [AnimationPlayer] used for animating. */
        anim_player: NodePath
        readonly animation_player_changed: Signal
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
    /** A region of 2D space that detects other [CollisionObject2D]s entering or exiting it. */
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
        /** Returns a list of intersecting [PhysicsBody2D]s and [TileMap]s. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        get_overlapping_bodies(): Array
        /** Returns a list of intersecting [Area2D]s. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        get_overlapping_areas(): Array
        /** Returns [code]true[/code] if intersecting any [PhysicsBody2D]s or [TileMap]s, otherwise returns [code]false[/code]. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        has_overlapping_bodies(): boolean
        /** Returns [code]true[/code] if intersecting any [Area2D]s, otherwise returns [code]false[/code]. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        has_overlapping_areas(): boolean
        /** Returns [code]true[/code] if the given physics body intersects or overlaps this [Area2D], [code]false[/code] otherwise.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
         *  The [param body] argument can either be a [PhysicsBody2D] or a [TileMap] instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.
         */
        overlaps_body(body: Node): boolean
        /** Returns [code]true[/code] if the given [Area2D] intersects or overlaps this [Area2D], [code]false[/code] otherwise.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
         */
        overlaps_area(area: Node): boolean
        set_audio_bus_name(name: StringName): void
        get_audio_bus_name(): StringName
        set_audio_bus_override(enable: boolean): void
        is_overriding_audio_bus(): boolean
        /** If [code]true[/code], the area detects bodies or areas entering and exiting it. */
        monitoring: boolean
        /** If [code]true[/code], other monitoring areas can detect this area. */
        monitorable: boolean
        /** The area's priority. Higher priority areas are processed first. The [World2D]'s physics is always processed last, after all areas. */
        priority: number /*i64*/
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        gravity_space_override: number /*i64*/
        /** If [code]true[/code], gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        gravity_point: boolean
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
         */
        gravity_point_unit_distance: number /*f64*/
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        gravity_point_center: Vector2
        /** The area's gravity vector (not normalized). */
        gravity_direction: Vector2
        /** The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        gravity: number /*f64*/
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        linear_damp_space_override: number /*i64*/
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.
         */
        linear_damp: number /*f64*/
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        angular_damp_space_override: number /*i64*/
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.
         */
        angular_damp: number /*f64*/
        /** If [code]true[/code], the area's audio bus overrides the default audio bus. */
        audio_bus_override: boolean
        /** The name of the area's audio bus. */
        audio_bus_name: StringName
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly area_shape_entered: Signal
        readonly area_shape_exited: Signal
        readonly area_entered: Signal
        readonly area_exited: Signal
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
    /** A region of 3D space that detects other [CollisionObject3D]s entering or exiting it. */
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
        /** Returns a list of intersecting [PhysicsBody3D]s and [GridMap]s. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        get_overlapping_bodies(): Array
        /** Returns a list of intersecting [Area3D]s. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        get_overlapping_areas(): Array
        /** Returns [code]true[/code] if intersecting any [PhysicsBody3D]s or [GridMap]s, otherwise returns [code]false[/code]. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        has_overlapping_bodies(): boolean
        /** Returns [code]true[/code] if intersecting any [Area3D]s, otherwise returns [code]false[/code]. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
         */
        has_overlapping_areas(): boolean
        /** Returns [code]true[/code] if the given physics body intersects or overlaps this [Area3D], [code]false[/code] otherwise.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
         *  The [param body] argument can either be a [PhysicsBody3D] or a [GridMap] instance. While GridMaps are not physics body themselves, they register their tiles with collision shapes as a virtual physics body.
         */
        overlaps_body(body: Node): boolean
        /** Returns [code]true[/code] if the given [Area3D] intersects or overlaps this [Area3D], [code]false[/code] otherwise.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
         */
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
        /** If [code]true[/code], the area detects bodies or areas entering and exiting it. */
        monitoring: boolean
        /** If [code]true[/code], other monitoring areas can detect this area. */
        monitorable: boolean
        /** The area's priority. Higher priority areas are processed first. The [World3D]'s physics is always processed last, after all areas. */
        priority: number /*i64*/
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        gravity_space_override: number /*i64*/
        /** If [code]true[/code], gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        gravity_point: boolean
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
         */
        gravity_point_unit_distance: number /*f64*/
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        gravity_point_center: Vector3
        /** The area's gravity vector (not normalized). */
        gravity_direction: Vector3
        /** The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        gravity: number /*f64*/
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        linear_damp_space_override: number /*i64*/
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.
         */
        linear_damp: number /*f64*/
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        angular_damp_space_override: number /*i64*/
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.
         */
        angular_damp: number /*f64*/
        /** The magnitude of area-specific wind force. */
        wind_force_magnitude: number /*f64*/
        /** The exponential rate at which wind force decreases with distance from its origin. */
        wind_attenuation_factor: number /*f64*/
        /** The [Node3D] which is used to specify the direction and origin of an area-specific wind force. The direction is opposite to the z-axis of the [Node3D]'s local transform, and its origin is the origin of the [Node3D]'s local transform. */
        wind_source_path: NodePath
        /** If [code]true[/code], the area's audio bus overrides the default audio bus. */
        audio_bus_override: boolean
        /** The name of the area's audio bus. */
        audio_bus_name: StringName
        /** If [code]true[/code], the area applies reverb to its associated audio. */
        reverb_bus_enabled: boolean
        /** The name of the reverb bus to use for this area's associated audio. */
        reverb_bus_name: StringName
        /** The degree to which this area applies reverb to its associated audio. Ranges from [code]0[/code] to [code]1[/code] with [code]0.1[/code] precision. */
        reverb_bus_amount: number /*f64*/
        /** The degree to which this area's reverb is a uniform effect. Ranges from [code]0[/code] to [code]1[/code] with [code]0.1[/code] precision. */
        reverb_bus_uniformity: number /*f64*/
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly area_shape_entered: Signal
        readonly area_shape_exited: Signal
        readonly area_entered: Signal
        readonly area_exited: Signal
    }
    /** [Mesh] type that provides utility for constructing a surface from arrays. */
    class ArrayMesh extends Mesh {
        /** Adds name for a blend shape that will be added with [method add_surface_from_arrays]. Must be called before surface is added. */
        add_blend_shape(name: StringName): void
        /** Returns the number of blend shapes that the [ArrayMesh] holds. */
        get_blend_shape_count(): number /*i64*/
        /** Returns the name of the blend shape at this index. */
        get_blend_shape_name(index: number /*i64*/): StringName
        /** Sets the name of the blend shape at this index. */
        set_blend_shape_name(index: number /*i64*/, name: StringName): void
        /** Removes all blend shapes from this [ArrayMesh]. */
        clear_blend_shapes(): void
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        get_blend_shape_mode(): Mesh.BlendShapeMode
        /** Creates a new surface. [method Mesh.get_surface_count] will become the [code]surf_idx[/code] for this new surface.
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or [code]null[/code] if it is not used by the surface. For example, [code]arrays[0][/code] is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are [code]null[/code].
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents a LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of a LOD also increases the distance that the objects has to be from the camera before the LOD is used.
         *  The [param flags] argument is the bitwise or of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by [code]ARRAY_FORMAT_CUSTOMn_SHIFT[/code] for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].
         *  [b]Note:[/b] When using indices, it is recommended to only use points, lines, or triangles.
         */
        add_surface_from_arrays(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array = <any> {} /*compound.type from 28([object Object])*/, lods: Dictionary = <any> {} /*compound.type from 27([object Object])*/, flags: Mesh.ArrayFormat = 0): void
        /** Removes all surfaces from this [ArrayMesh]. */
        clear_surfaces(): void
        surface_update_vertex_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        surface_update_attribute_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        surface_update_skin_region(surf_idx: number /*i64*/, offset: number /*i64*/, data: PackedByteArray): void
        /** Returns the length in vertices of the vertex array in the requested surface (see [method add_surface_from_arrays]). */
        surface_get_array_len(surf_idx: number /*i64*/): number /*i64*/
        /** Returns the length in indices of the index array in the requested surface (see [method add_surface_from_arrays]). */
        surface_get_array_index_len(surf_idx: number /*i64*/): number /*i64*/
        /** Returns the format mask of the requested surface (see [method add_surface_from_arrays]). */
        surface_get_format(surf_idx: number /*i64*/): Mesh.ArrayFormat
        /** Returns the primitive type of the requested surface (see [method add_surface_from_arrays]). */
        surface_get_primitive_type(surf_idx: number /*i64*/): Mesh.PrimitiveType
        /** Returns the index of the first surface with this name held within this [ArrayMesh]. If none are found, -1 is returned. */
        surface_find_by_name(name: string): number /*i64*/
        /** Sets a name for a given surface. */
        surface_set_name(surf_idx: number /*i64*/, name: string): void
        /** Gets the name assigned to this surface. */
        surface_get_name(surf_idx: number /*i64*/): string
        /** Regenerates tangents for each of the [ArrayMesh]'s surfaces. */
        regen_normal_maps(): void
        /** Performs a UV unwrap on the [ArrayMesh] to prepare the mesh for lightmapping. */
        lightmap_unwrap(transform: Transform3D, texel_size: number /*f64*/): GodotError
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        set_shadow_mesh(mesh: ArrayMesh): void
        get_shadow_mesh(): ArrayMesh
        _set_blend_shape_names(blend_shape_names: PackedStringArray): void
        _get_blend_shape_names(): PackedStringArray
        _set_surfaces(surfaces: Array): void
        _get_surfaces(): Array
        _blend_shape_names: PackedStringArray
        _surfaces: Array
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        blend_shape_mode: number /*i64*/
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        custom_aabb: AABB
        /** An optional mesh which is used for rendering shadows and can be used for the depth prepass. Can be used to increase performance of shadow rendering by using a mesh that only contains vertex position data (without normals, UVs, colors, etc.). */
        shadow_mesh: ArrayMesh
    }
    /** 3D polygon shape for use with occlusion culling in [OccluderInstance3D]. */
    class ArrayOccluder3D extends Occluder3D {
        /** Sets [member indices] and [member vertices], while updating the final occluder only once after both values are set. */
        set_arrays(vertices: PackedVector3Array, indices: PackedInt32Array): void
        set_vertices(vertices: PackedVector3Array): void
        set_indices(indices: PackedInt32Array): void
        /** The occluder's vertex positions in local 3D coordinates.
         *  [b]Note:[/b] The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.
         */
        vertices: PackedVector3Array
        /** The occluder's index position. Indices determine which points from the [member vertices] array should be drawn, and in which order.
         *  [b]Note:[/b] The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.
         */
        indices: PackedInt32Array
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
    /** A container that preserves the proportions of its child controls. */
    class AspectRatioContainer extends Container {
        set_ratio(ratio: number /*f64*/): void
        get_ratio(): number /*f64*/
        set_stretch_mode(stretch_mode: AspectRatioContainer.StretchMode): void
        get_stretch_mode(): AspectRatioContainer.StretchMode
        set_alignment_horizontal(alignment_horizontal: AspectRatioContainer.AlignmentMode): void
        get_alignment_horizontal(): AspectRatioContainer.AlignmentMode
        set_alignment_vertical(alignment_vertical: AspectRatioContainer.AlignmentMode): void
        get_alignment_vertical(): AspectRatioContainer.AlignmentMode
        /** The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the [member stretch_mode]. */
        ratio: number /*f64*/
        /** The stretch mode used to align child controls. */
        stretch_mode: number /*i64*/
        /** Specifies the horizontal relative position of child controls. */
        alignment_horizontal: number /*i64*/
        /** Specifies the vertical relative position of child controls. */
        alignment_vertical: number /*i64*/
    }
    class AssetLibraryEditorPlugin extends EditorPlugin {
    }
    class AtlasMergingDialog extends ConfirmationDialog {
    }
    /** A texture that crops out part of another Texture2D. */
    class AtlasTexture extends Texture2D {
        set_atlas(atlas: Texture2D): void
        get_atlas(): Texture2D
        set_region(region: Rect2): void
        get_region(): Rect2
        set_margin(margin: Rect2): void
        get_margin(): Rect2
        set_filter_clip(enable: boolean): void
        has_filter_clip(): boolean
        /** The texture that contains the atlas. Can be any type inheriting from [Texture2D], including another [AtlasTexture]. */
        atlas: Texture2D
        /** The region used to draw the [member atlas]. */
        region: Rect2
        /** The margin around the [member region]. Useful for small adjustments. If the [member Rect2.size] of this property ("w" and "h" in the editor) is set, the drawn texture is resized to fit within the margin. */
        margin: Rect2
        /** If [code]true[/code], the area outside of the [member region] is clipped to avoid bleeding of the surrounding texture pixels. */
        filter_clip: boolean
    }
    class AtlasTileProxyObject extends Object {
        readonly changed: Signal
    }
    /** Stores information about the audio buses. */
    class AudioBusLayout extends Resource {
    }
    class AudioBusesEditorPlugin extends EditorPlugin {
    }
    /** Audio effect for audio. */
    class AudioEffect extends Resource {
        /* gdvirtual */ _instantiate(): AudioEffectInstance
    }
    /** Adds an amplifying audio effect to an audio bus. */
    class AudioEffectAmplify extends AudioEffect {
        set_volume_db(volume: number /*f64*/): void
        get_volume_db(): number /*f64*/
        /** Amount of amplification in decibels. Positive values make the sound louder, negative values make it quieter. Value can range from -80 to 24. */
        volume_db: number /*f64*/
    }
    /** Adds a band limit filter to the audio bus. */
    class AudioEffectBandLimitFilter extends AudioEffectFilter {
    }
    /** Adds a band pass filter to the audio bus. */
    class AudioEffectBandPassFilter extends AudioEffectFilter {
    }
    /** Captures audio from an audio bus in real-time. */
    class AudioEffectCapture extends AudioEffect {
        /** Returns [code]true[/code] if at least [param frames] audio frames are available to read in the internal ring buffer. */
        can_get_buffer(frames: number /*i64*/): boolean
        /** Gets the next [param frames] audio samples from the internal ring buffer.
         *  Returns a [PackedVector2Array] containing exactly [param frames] audio samples if available, or an empty [PackedVector2Array] if insufficient data was available.
         */
        get_buffer(frames: number /*i64*/): PackedVector2Array
        /** Clears the internal ring buffer. */
        clear_buffer(): void
        set_buffer_length(buffer_length_seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
        /** Returns the number of frames available to read using [method get_buffer]. */
        get_frames_available(): number /*i64*/
        /** Returns the number of audio frames discarded from the audio bus due to full buffer. */
        get_discarded_frames(): number /*i64*/
        /** Returns the total size of the internal ring buffer in frames. */
        get_buffer_length_frames(): number /*i64*/
        /** Returns the number of audio frames inserted from the audio bus. */
        get_pushed_frames(): number /*i64*/
        /** Length of the internal ring buffer, in seconds. Setting the buffer length will have no effect if already initialized. */
        buffer_length: number /*f64*/
    }
    /** Adds a chorus audio effect. */
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
        /** The number of voices in the effect. */
        voice_count: number /*i64*/
        /** The effect's raw signal. */
        dry: number /*f64*/
        /** The effect's processed signal. */
        wet: number /*f64*/
    }
    /** Adds a compressor audio effect to an audio bus.
     *  Reduces sounds that exceed a certain threshold level, smooths out the dynamics and increases the overall volume.
     */
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
        /** The level above which compression is applied to the audio. Value can range from -60 to 0. */
        threshold: number /*f64*/
        /** Amount of compression applied to the audio once it passes the threshold level. The higher the ratio, the more the loud parts of the audio will be compressed. Value can range from 1 to 48. */
        ratio: number /*f64*/
        /** Gain applied to the output signal. */
        gain: number /*f64*/
        /** Compressor's reaction time when the signal exceeds the threshold, in microseconds. Value can range from 20 to 2000. */
        attack_us: number /*f64*/
        /** Compressor's delay time to stop reducing the signal after the signal level falls below the threshold, in milliseconds. Value can range from 20 to 2000. */
        release_ms: number /*f64*/
        /** Balance between original signal and effect signal. Value can range from 0 (totally dry) to 1 (totally wet). */
        mix: number /*f64*/
        /** Reduce the sound level using another audio bus for threshold detection. */
        sidechain: StringName
    }
    /** Adds a delay audio effect to an audio bus. Plays input signal back after a period of time.
     *  Two tap delay and feedback options.
     */
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
        /** Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1. */
        dry: number /*f64*/
        /** If [code]true[/code], the first tap will be enabled. */
        tap1_active: boolean
        /** First tap delay time in milliseconds. */
        tap1_delay_ms: number /*f64*/
        /** Sound level for the first tap. */
        tap1_level_db: number /*f64*/
        /** Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right). */
        tap1_pan: number /*f64*/
        /** If [code]true[/code], the second tap will be enabled. */
        tap2_active: boolean
        /** Second tap delay time in milliseconds. */
        tap2_delay_ms: number /*f64*/
        /** Sound level for the second tap. */
        tap2_level_db: number /*f64*/
        /** Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right). */
        tap2_pan: number /*f64*/
        /** If [code]true[/code], feedback is enabled. */
        feedback_active: boolean
        /** Feedback delay time in milliseconds. */
        feedback_delay_ms: number /*f64*/
        /** Sound level for feedback. */
        feedback_level_db: number /*f64*/
        /** Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal. */
        feedback_lowpass: number /*f64*/
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
    /** Adds a distortion audio effect to an Audio bus.
     *  Modifies the sound to make it distorted.
     */
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
        /** Distortion type. */
        mode: number /*i64*/
        /** Increases or decreases the volume before the effect, in decibels. Value can range from -60 to 60. */
        pre_gain: number /*f64*/
        /** High-pass filter, in Hz. Frequencies higher than this value will not be affected by the distortion. Value can range from 1 to 20000. */
        keep_hf_hz: number /*f64*/
        /** Distortion power. Value can range from 0 to 1. */
        drive: number /*f64*/
        /** Increases or decreases the volume after the effect, in decibels. Value can range from -80 to 24. */
        post_gain: number /*f64*/
    }
    /** Base class for audio equalizers. Gives you control over frequencies.
     *  Use it to create a custom equalizer if [AudioEffectEQ6], [AudioEffectEQ10] or [AudioEffectEQ21] don't fit your needs.
     */
    class AudioEffectEQ extends AudioEffect {
        /** Sets band's gain at the specified index, in dB. */
        set_band_gain_db(band_idx: number /*i64*/, volume_db: number /*f64*/): void
        /** Returns the band's gain at the specified index, in dB. */
        get_band_gain_db(band_idx: number /*i64*/): number /*f64*/
        /** Returns the number of bands of the equalizer. */
        get_band_count(): number /*i64*/
    }
    /** Adds a 10-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 31 Hz to 16000 Hz.
     *  Each frequency can be modulated between -60/+24 dB.
     */
    class AudioEffectEQ10 extends AudioEffectEQ {
    }
    /** Adds a 21-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 22 Hz to 22000 Hz.
     *  Each frequency can be modulated between -60/+24 dB.
     */
    class AudioEffectEQ21 extends AudioEffectEQ {
    }
    /** Adds a 6-band equalizer audio effect to an audio bus. Gives you control over frequencies from 32 Hz to 10000 Hz.
     *  Each frequency can be modulated between -60/+24 dB.
     */
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
    /** Adds a filter to the audio bus. */
    class AudioEffectFilter extends AudioEffect {
        set_cutoff(freq: number /*f64*/): void
        get_cutoff(): number /*f64*/
        set_resonance(amount: number /*f64*/): void
        get_resonance(): number /*f64*/
        set_gain(amount: number /*f64*/): void
        get_gain(): number /*f64*/
        set_db(amount: AudioEffectFilter.FilterDB): void
        get_db(): AudioEffectFilter.FilterDB
        /** Threshold frequency for the filter, in Hz. */
        cutoff_hz: number /*f64*/
        /** Amount of boost in the frequency range near the cutoff frequency. */
        resonance: number /*f64*/
        /** Gain amount of the frequencies after the filter. */
        gain: number /*f64*/
        db: number /*i64*/
    }
    /** Adds a high-pass filter to the audio bus. */
    class AudioEffectHighPassFilter extends AudioEffectFilter {
    }
    /** Adds a high-shelf filter to the audio bus. */
    class AudioEffectHighShelfFilter extends AudioEffectFilter {
    }
    class AudioEffectInstance extends RefCounted {
        /* gdvirtual */ _process(src_buffer: number /*i64*/, dst_buffer: number /*i64*/, frame_count: number /*i64*/): void
        /* gdvirtual */ _process_silence(): boolean
    }
    /** Adds a soft-clip limiter audio effect to an Audio bus. */
    class AudioEffectLimiter extends AudioEffect {
        set_ceiling_db(ceiling: number /*f64*/): void
        get_ceiling_db(): number /*f64*/
        set_threshold_db(threshold: number /*f64*/): void
        get_threshold_db(): number /*f64*/
        set_soft_clip_db(soft_clip: number /*f64*/): void
        get_soft_clip_db(): number /*f64*/
        set_soft_clip_ratio(soft_clip: number /*f64*/): void
        get_soft_clip_ratio(): number /*f64*/
        /** The waveform's maximum allowed value, in decibels. Value can range from -20 to -0.1. */
        ceiling_db: number /*f64*/
        /** Threshold from which the limiter begins to be active, in decibels. Value can range from -30 to 0. */
        threshold_db: number /*f64*/
        /** Applies a gain to the limited waves, in decibels. Value can range from 0 to 6. */
        soft_clip_db: number /*f64*/
        soft_clip_ratio: number /*f64*/
    }
    /** Adds a low-pass filter to the audio bus. */
    class AudioEffectLowPassFilter extends AudioEffectFilter {
    }
    /** Adds a low-shelf filter to the audio bus. */
    class AudioEffectLowShelfFilter extends AudioEffectFilter {
    }
    /** Adds a notch filter to the Audio bus. */
    class AudioEffectNotchFilter extends AudioEffectFilter {
    }
    /** Adds a panner audio effect to an audio bus. Pans sound left or right. */
    class AudioEffectPanner extends AudioEffect {
        set_pan(cpanume: number /*f64*/): void
        get_pan(): number /*f64*/
        /** Pan position. Value can range from -1 (fully left) to 1 (fully right). */
        pan: number /*f64*/
    }
    /** Adds a phaser audio effect to an audio bus.
     *  Combines the original signal with a copy that is slightly out of phase with the original.
     */
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
        /** Determines the minimum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        range_min_hz: number /*f64*/
        /** Determines the maximum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        range_max_hz: number /*f64*/
        /** Adjusts the rate in Hz at which the effect sweeps up and down across the frequency range. */
        rate_hz: number /*f64*/
        /** Output percent of modified sound. Value can range from 0.1 to 0.9. */
        feedback: number /*f64*/
        /** Governs how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from 0.1 to 4. */
        depth: number /*f64*/
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
    /** Adds a pitch-shifting audio effect to an audio bus.
     *  Raises or lowers the pitch of original sound.
     */
    class AudioEffectPitchShift extends AudioEffect {
        set_pitch_scale(rate: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        set_oversampling(amount: number /*i64*/): void
        get_oversampling(): number /*i64*/
        set_fft_size(size: AudioEffectPitchShift.FFTSize): void
        get_fft_size(): AudioEffectPitchShift.FFTSize
        /** The pitch scale to use. [code]1.0[/code] is the default pitch and plays sounds unaffected. [member pitch_scale] can range from [code]0.0[/code] (infinitely low pitch, inaudible) to [code]16[/code] (16 times higher than the initial pitch). */
        pitch_scale: number /*f64*/
        /** The oversampling factor to use. Higher values result in better quality, but are more demanding on the CPU and may cause audio cracking if the CPU can't keep up. */
        oversampling: number /*f64*/
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the effect over time, but have greater latency. The effects of this higher latency are especially noticeable on sounds that have sudden amplitude changes. */
        fft_size: number /*i64*/
    }
    /** Audio effect used for recording the sound from an audio bus. */
    class AudioEffectRecord extends AudioEffect {
        /** If [code]true[/code], the sound will be recorded. Note that restarting the recording will remove the previously recorded sample. */
        set_recording_active(record: boolean): void
        /** Returns whether the recording is active or not. */
        is_recording_active(): boolean
        set_format(format: AudioStreamWAV.Format): void
        get_format(): AudioStreamWAV.Format
        /** Returns the recorded sample. */
        get_recording(): AudioStreamWAV
        /** Specifies the format in which the sample will be recorded. See [enum AudioStreamWAV.Format] for available formats. */
        format: number /*i64*/
    }
    /** Adds a reverberation audio effect to an Audio bus. */
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
        /** Time between the original signal and the early reflections of the reverb signal, in milliseconds. */
        predelay_msec: number /*f64*/
        /** Output percent of predelay. Value can range from 0 to 1. */
        predelay_feedback: number /*f64*/
        /** Dimensions of simulated room. Bigger means more echoes. Value can range from 0 to 1. */
        room_size: number /*f64*/
        /** Defines how reflective the imaginary room's walls are. Value can range from 0 to 1. */
        damping: number /*f64*/
        /** Widens or narrows the stereo image of the reverb tail. 1 means fully widens. Value can range from 0 to 1. */
        spread: number /*f64*/
        /** High-pass filter passes signals with a frequency higher than a certain cutoff frequency and attenuates signals with frequencies lower than the cutoff frequency. Value can range from 0 to 1. */
        hipass: number /*f64*/
        /** Output percent of original sound. At 0, only modified sound is outputted. Value can range from 0 to 1. */
        dry: number /*f64*/
        /** Output percent of modified sound. At 0, only original sound is outputted. Value can range from 0 to 1. */
        wet: number /*f64*/
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
    /** Audio effect that can be used for real-time audio visualizations. */
    class AudioEffectSpectrumAnalyzer extends AudioEffect {
        set_buffer_length(seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
        set_tap_back_pos(seconds: number /*f64*/): void
        get_tap_back_pos(): number /*f64*/
        set_fft_size(size: AudioEffectSpectrumAnalyzer.FFTSize): void
        get_fft_size(): AudioEffectSpectrumAnalyzer.FFTSize
        /** The length of the buffer to keep (in seconds). Higher values keep data around for longer, but require more memory. */
        buffer_length: number /*f64*/
        tap_back_pos: number /*f64*/
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the spectrum analysis over time, but have greater latency. The effects of this higher latency are especially noticeable with sudden amplitude changes. */
        fft_size: number /*i64*/
    }
    namespace AudioEffectSpectrumAnalyzerInstance {
        enum MagnitudeMode {
            MAGNITUDE_AVERAGE = 0,
            MAGNITUDE_MAX = 1,
        }
    }
    class AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
        get_magnitude_for_frequency_range(from_hz: number /*f64*/, to_hz: number /*f64*/, mode: AudioEffectSpectrumAnalyzerInstance.MagnitudeMode = 1): Vector2
    }
    /** An audio effect that can be used to adjust the intensity of stereo panning. */
    class AudioEffectStereoEnhance extends AudioEffect {
        set_pan_pullout(amount: number /*f64*/): void
        get_pan_pullout(): number /*f64*/
        set_time_pullout(amount: number /*f64*/): void
        get_time_pullout(): number /*f64*/
        set_surround(amount: number /*f64*/): void
        get_surround(): number /*f64*/
        /** Values greater than 1.0 increase intensity of any panning on audio passing through this effect, whereas values less than 1.0 will decrease the panning intensity. A value of 0.0 will downmix audio to mono. */
        pan_pullout: number /*f64*/
        time_pullout_ms: number /*f64*/
        surround: number /*f64*/
    }
    /** Overrides the location sounds are heard from. */
    class AudioListener2D extends Node2D {
        /** Makes the [AudioListener2D] active, setting it as the hearing point for the sounds. If there is already another active [AudioListener2D], it will be disabled.
         *  This method will have no effect if the [AudioListener2D] is not added to [SceneTree].
         */
        make_current(): void
        /** Disables the [AudioListener2D]. If it's not set as current, this method will have no effect. */
        clear_current(): void
        /** Returns [code]true[/code] if this [AudioListener2D] is currently active. */
        is_current(): boolean
    }
    /** Overrides the location sounds are heard from. */
    class AudioListener3D extends Node3D {
        /** Enables the listener. This will override the current camera's listener. */
        make_current(): void
        /** Disables the listener to use the current camera's listener instead. */
        clear_current(): void
        /** Returns [code]true[/code] if the listener was made current using [method make_current], [code]false[/code] otherwise.
         *  [b]Note:[/b] There may be more than one AudioListener3D marked as "current" in the scene tree, but only the one that was made current last will be used.
         */
        is_current(): boolean
        /** Returns the listener's global orthonormalized [Transform3D]. */
        get_listener_transform(): Transform3D
    }
    class AudioListener3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Base class for audio streams. */
    class AudioStream extends Resource {
        /* gdvirtual */ _instantiate_playback(): AudioStreamPlayback
        /* gdvirtual */ _get_stream_name(): string
        /* gdvirtual */ _get_length(): number /*f64*/
        /* gdvirtual */ _is_monophonic(): boolean
        /* gdvirtual */ _get_bpm(): number /*f64*/
        /* gdvirtual */ _get_beat_count(): number /*i64*/
        /** Returns the length of the audio stream in seconds. */
        get_length(): number /*f64*/
        /** Returns [code]true[/code] if this audio stream only supports one channel ([i]monophony[/i]), or [code]false[/code] if the audio stream supports two or more channels ([i]polyphony[/i]). */
        is_monophonic(): boolean
        /** Returns a newly created [AudioStreamPlayback] intended to play this audio stream. Useful for when you want to extend [method _instantiate_playback] but call [method instantiate_playback] from an internally held AudioStream subresource. An example of this can be found in the source code for [code]AudioStreamRandomPitch::instantiate_playback[/code]. */
        instantiate_playback(): AudioStreamPlayback
    }
    class AudioStreamEditorPlugin extends EditorPlugin {
    }
    /** An audio stream with utilities for procedural sound generation. */
    class AudioStreamGenerator extends AudioStream {
        set_mix_rate(hz: number /*f64*/): void
        get_mix_rate(): number /*f64*/
        set_buffer_length(seconds: number /*f64*/): void
        get_buffer_length(): number /*f64*/
        /** The sample rate to use (in Hz). Higher values are more demanding for the CPU to generate, but result in better quality.
         *  In games, common sample rates in use are [code]11025[/code], [code]16000[/code], [code]22050[/code], [code]32000[/code], [code]44100[/code], and [code]48000[/code].
         *  According to the [url=https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem]Nyquist-Shannon sampling theorem[/url], there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are generating lower-pitched sounds such as voices, lower sample rates such as [code]32000[/code] or [code]22050[/code] may be usable with no loss in quality.
         */
        mix_rate: number /*f64*/
        /** The length of the buffer to generate (in seconds). Lower values result in less latency, but require the script to generate audio data faster, resulting in increased CPU usage and more risk for audio cracking if the CPU can't keep up. */
        buffer_length: number /*f64*/
    }
    /** Plays back audio generated using [AudioStreamGenerator]. */
    class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
        /** Pushes a single audio data frame to the buffer. This is usually less efficient than [method push_buffer] in C# and compiled languages via GDExtension, but [method push_frame] may be [i]more[/i] efficient in GDScript. */
        push_frame(frame: Vector2): boolean
        /** Returns [code]true[/code] if a buffer of the size [param amount] can be pushed to the audio sample data buffer without overflowing it, [code]false[/code] otherwise. */
        can_push_buffer(amount: number /*i64*/): boolean
        /** Pushes several audio data frames to the buffer. This is usually more efficient than [method push_frame] in C# and compiled languages via GDExtension, but [method push_buffer] may be [i]less[/i] efficient in GDScript. */
        push_buffer(frames: PackedVector2Array): boolean
        /** Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is [code]0[/code], the buffer is full. */
        get_frames_available(): number /*i64*/
        /** Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback. */
        get_skips(): number /*i64*/
        /** Clears the audio sample data buffer. */
        clear_buffer(): void
    }
    class AudioStreamImportSettings extends ConfirmationDialog {
    }
    /** MP3 audio stream driver. */
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
        /** Contains the audio data in bytes.
         *  You can load a file without having to import it beforehand using the code snippet below. Keep in mind that this snippet loads the whole file into memory and may not be ideal for huge files (hundreds of megabytes or more).
         *  
         */
        data: PackedByteArray
        bpm: number /*f64*/
        beat_count: number /*i64*/
        bar_beats: number /*i64*/
        /** If [code]true[/code], the stream will automatically loop when it reaches the end. */
        loop: boolean
        /** Time in seconds at which the stream starts after being looped. */
        loop_offset: number /*f64*/
    }
    /** Plays real-time audio input data. */
    class AudioStreamMicrophone extends AudioStream {
    }
    /** A class representing an Ogg Vorbis audio stream. */
    class AudioStreamOggVorbis extends AudioStream {
        /** Creates a new AudioStreamOggVorbis instance from the given buffer. The buffer must contain Ogg Vorbis data. */
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        /** Creates a new AudioStreamOggVorbis instance from the given file path. The file must be in Ogg Vorbis format. */
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
        /** Contains the raw Ogg data for this stream. */
        packet_sequence: Object
        bpm: number /*f64*/
        beat_count: number /*i64*/
        bar_beats: number /*i64*/
        /** If [code]true[/code], the audio will play again from the specified [member loop_offset] once it is done playing. Useful for ambient sounds and background music. */
        loop: boolean
        /** Time in seconds at which the stream starts after being looped. */
        loop_offset: number /*f64*/
    }
    /** Meta class for playing back audio. */
    class AudioStreamPlayback extends RefCounted {
        /* gdvirtual */ _start(from_pos: number /*f64*/): void
        /* gdvirtual */ _stop(): void
        /* gdvirtual */ _is_playing(): boolean
        /* gdvirtual */ _get_loop_count(): number /*i64*/
        /* gdvirtual */ _get_playback_position(): number /*f64*/
        /* gdvirtual */ _seek(position: number /*f64*/): void
        /* gdvirtual */ _mix(buffer: number /*i64*/, rate_scale: number /*f64*/, frames: number /*i64*/): number /*i64*/
        /* gdvirtual */ _tag_used_streams(): void
    }
    class AudioStreamPlaybackOggVorbis extends AudioStreamPlaybackResampled {
    }
    /** Playback instance for [AudioStreamPolyphonic]. */
    class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
        static readonly INVALID_ID = -1
        /** Play an [AudioStream] at a given offset, volume and pitch scale. Playback starts immediately.
         *  The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.
         *  This ID becomes invalid when the stream ends (if it does not loop), when the [AudioStreamPlaybackPolyphonic] is stopped, or when [method stop_stream] is called.
         *  This function returns [constant INVALID_ID] if the amount of streams currently playing equals [member AudioStreamPolyphonic.polyphony]. If you need a higher amount of maximum polyphony, raise this value.
         */
        play_stream(stream: AudioStream, from_offset: number /*f64*/ = 0, volume_db: number /*f64*/ = 0, pitch_scale: number /*f64*/ = 1): number /*i64*/
        /** Change the stream volume (in db). The [param stream] argument is an integer ID returned by [method play_stream]. */
        set_stream_volume(stream: number /*i64*/, volume_db: number /*f64*/): void
        /** Change the stream pitch scale. The [param stream] argument is an integer ID returned by [method play_stream]. */
        set_stream_pitch_scale(stream: number /*i64*/, pitch_scale: number /*f64*/): void
        /** Return true whether the stream associated with an integer ID is still playing. Check [method play_stream] for information on when this ID becomes invalid. */
        is_stream_playing(stream: number /*i64*/): boolean
        /** Stop a stream. The [param stream] argument is an integer ID returned by [method play_stream], which becomes invalid after calling this function. */
        stop_stream(stream: number /*i64*/): void
    }
    class AudioStreamPlaybackResampled extends AudioStreamPlayback {
        /* gdvirtual */ _mix_resampled(dst_buffer: number /*i64*/, frame_count: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_stream_sampling_rate(): number /*f64*/
        begin_resample(): void
    }
    namespace AudioStreamPlayer {
        enum MixTarget {
            MIX_TARGET_STEREO = 0,
            MIX_TARGET_SURROUND = 1,
            MIX_TARGET_CENTER = 2,
        }
    }
    /** Plays back audio non-positionally. */
    class AudioStreamPlayer extends Node {
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_pitch_scale(pitch_scale: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        /** Plays the audio from the given [param from_position], in seconds. */
        play(from_position: number /*f64*/ = 0): void
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: number /*f64*/): void
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        /** Returns the position in the [AudioStream] in seconds. */
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
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer]. */
        get_stream_playback(): AudioStreamPlayback
        /** The [AudioStream] object to be played. */
        stream: AudioStream
        /** Volume of sound, in dB. */
        volume_db: number /*f64*/
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        pitch_scale: number /*f64*/
        /** If [code]true[/code], audio is playing. */
        playing: boolean
        /** If [code]true[/code], audio plays when added to scene tree. */
        autoplay: boolean
        /** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
        stream_paused: boolean
        /** If the audio configuration has more than two speakers, this sets the target channels. See [enum MixTarget] constants. */
        mix_target: number /*i64*/
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        max_polyphony: number /*i64*/
        /** Bus on which this audio is playing.
         *  [b]Note:[/b] When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to [code]"Master"[/code].
         */
        bus: StringName
        readonly finished: Signal
    }
    /** Plays positional sound in 2D space. */
    class AudioStreamPlayer2D extends Node2D {
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_pitch_scale(pitch_scale: number /*f64*/): void
        get_pitch_scale(): number /*f64*/
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(from_position: number /*f64*/ = 0): void
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: number /*f64*/): void
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        /** Returns the position in the [AudioStream]. */
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
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer2D]. */
        get_stream_playback(): AudioStreamPlayback
        /** The [AudioStream] object to be played. */
        stream: AudioStream
        /** Base volume before attenuation. */
        volume_db: number /*f64*/
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        pitch_scale: number /*f64*/
        /** If [code]true[/code], audio is playing or is queued to be played (see [method play]). */
        playing: boolean
        /** If [code]true[/code], audio plays when added to scene tree. */
        autoplay: boolean
        /** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
        stream_paused: boolean
        /** Maximum distance from which audio is still hearable. */
        max_distance: number /*f64*/
        /** The volume is attenuated over distance with this as an exponent. */
        attenuation: number /*f64*/
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        max_polyphony: number /*i64*/
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/2d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
        panning_strength: number /*f64*/
        /** Bus on which this audio is playing.
         *  [b]Note:[/b] When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to [code]"Master"[/code].
         */
        bus: StringName
        /** Determines which [Area2D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        area_mask: number /*i64*/
        readonly finished: Signal
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
    /** Plays positional sound in 3D space. */
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
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(from_position: number /*f64*/ = 0): void
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: number /*f64*/): void
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        /** Returns the position in the [AudioStream]. */
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
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer3D]. */
        get_stream_playback(): AudioStreamPlayback
        /** The [AudioStream] resource to be played. */
        stream: AudioStream
        /** Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation. */
        attenuation_model: number /*i64*/
        /** The base sound level before attenuation, in decibels. */
        volume_db: number /*f64*/
        /** The factor for the attenuation effect. Higher values make the sound audible over a larger distance. */
        unit_size: number /*f64*/
        /** Sets the absolute maximum of the sound level, in decibels. */
        max_db: number /*f64*/
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        pitch_scale: number /*f64*/
        /** If [code]true[/code], audio is playing or is queued to be played (see [method play]). */
        playing: boolean
        /** If [code]true[/code], audio plays when the AudioStreamPlayer3D node is added to scene tree. */
        autoplay: boolean
        /** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
        stream_paused: boolean
        /** The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than [code]0.0[/code]. [member max_distance] works in tandem with [member unit_size]. However, unlike [member unit_size] whose behavior depends on the [member attenuation_model], [member max_distance] always works in a linear fashion. This can be used to prevent the [AudioStreamPlayer3D] from requiring audio mixing when the listener is far away, which saves CPU resources. */
        max_distance: number /*f64*/
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        max_polyphony: number /*i64*/
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/3d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
        panning_strength: number /*f64*/
        /** The bus on which this audio is playing.
         *  [b]Note:[/b] When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to [code]"Master"[/code].
         */
        bus: StringName
        /** Determines which [Area3D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        area_mask: number /*i64*/
        /** If [code]true[/code], the audio should be attenuated according to the direction of the sound. */
        emission_angle_enabled: boolean
        /** The angle in which the audio reaches a listener unattenuated. */
        emission_angle_degrees: number /*f64*/
        /** Attenuation factor used if listener is outside of [member emission_angle_degrees] and [member emission_angle_enabled] is set, in decibels. */
        emission_angle_filter_attenuation_db: number /*f64*/
        /** The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to [code]20500[/code] as this frequency is above the human hearing limit. */
        attenuation_filter_cutoff_hz: number /*f64*/
        /** Amount how much the filter affects the loudness, in decibels. */
        attenuation_filter_db: number /*f64*/
        /** Decides in which step the Doppler effect should be calculated. */
        doppler_tracking: number /*i64*/
        readonly finished: Signal
    }
    class AudioStreamPlayer3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player. */
    class AudioStreamPolyphonic extends AudioStream {
        set_polyphony(voices: number /*i64*/): void
        get_polyphony(): number /*i64*/
        /** Maximum amount of simultaneous streams that can be played. */
        polyphony: number /*i64*/
    }
    class AudioStreamPreviewGenerator extends Node {
        _update_emit(_unnamed_arg0: number /*i64*/): void
        generate_preview(stream: AudioStream): any /*AudioStreamPreview*/
        readonly preview_updated: Signal
    }
    namespace AudioStreamRandomizer {
        enum PlaybackMode {
            PLAYBACK_RANDOM_NO_REPEATS = 0,
            PLAYBACK_RANDOM = 1,
            PLAYBACK_SEQUENTIAL = 2,
        }
    }
    /** Wraps a pool of audio streams with pitch and volume shifting. */
    class AudioStreamRandomizer extends AudioStream {
        /** Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool. */
        add_stream(index: number /*i64*/, stream: AudioStream, weight: number /*f64*/ = 1): void
        /** Move a stream from one index to another. */
        move_stream(index_from: number /*i64*/, index_to: number /*i64*/): void
        /** Remove the stream at the specified index. */
        remove_stream(index: number /*i64*/): void
        /** Set the AudioStream at the specified index. */
        set_stream(index: number /*i64*/, stream: AudioStream): void
        /** Returns the stream at the specified index. */
        get_stream(index: number /*i64*/): AudioStream
        /** Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes. */
        set_stream_probability_weight(index: number /*i64*/, weight: number /*f64*/): void
        /** Returns the probability weight associated with the stream at the given index. */
        get_stream_probability_weight(index: number /*i64*/): number /*f64*/
        set_streams_count(count: number /*i64*/): void
        get_streams_count(): number /*i64*/
        set_random_pitch(scale: number /*f64*/): void
        get_random_pitch(): number /*f64*/
        set_random_volume_offset_db(db_offset: number /*f64*/): void
        get_random_volume_offset_db(): number /*f64*/
        set_playback_mode(mode: AudioStreamRandomizer.PlaybackMode): void
        get_playback_mode(): AudioStreamRandomizer.PlaybackMode
        /** Controls how this AudioStreamRandomizer picks which AudioStream to play next. */
        playback_mode: number /*i64*/
        /** The intensity of random pitch variation. A value of 1 means no variation. */
        random_pitch: number /*f64*/
        /** The intensity of random volume variation. A value of 0 means no variation. */
        random_volume_offset_db: number /*f64*/
        /** The number of streams in the stream pool. */
        streams_count: number /*i64*/
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
    /** Stores audio data loaded from WAV files. */
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
        /** Saves the AudioStreamWAV as a WAV file to [param path]. Samples with IMA ADPCM format can't be saved.
         *  [b]Note:[/b] A [code].wav[/code] extension is automatically appended to [param path] if it is missing.
         */
        save_to_wav(path: string): GodotError
        /** Contains the audio data in bytes.
         *  [b]Note:[/b] This property expects signed PCM8 data. To convert unsigned PCM8 to signed PCM8, subtract 128 from each byte.
         */
        data: PackedByteArray
        /** Audio format. See [enum Format] constants for values. */
        format: number /*i64*/
        /** The loop mode. This information will be imported automatically from the WAV file if present. See [enum LoopMode] constants for values. */
        loop_mode: number /*i64*/
        /** The loop start point (in number of samples, relative to the beginning of the sample). This information will be imported automatically from the WAV file if present. */
        loop_begin: number /*i64*/
        /** The loop end point (in number of samples, relative to the beginning of the sample). This information will be imported automatically from the WAV file if present. */
        loop_end: number /*i64*/
        /** The sample rate for mixing this audio. Higher values require more storage space, but result in better quality.
         *  In games, common sample rates in use are [code]11025[/code], [code]16000[/code], [code]22050[/code], [code]32000[/code], [code]44100[/code], and [code]48000[/code].
         *  According to the [url=https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem]Nyquist-Shannon sampling theorem[/url], there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are using lower-pitched sounds such as voices, lower sample rates such as [code]32000[/code] or [code]22050[/code] may be usable with no loss in quality.
         */
        mix_rate: number /*i64*/
        /** If [code]true[/code], audio is stereo. */
        stereo: boolean
    }
    namespace BackBufferCopy {
        enum CopyMode {
            COPY_MODE_DISABLED = 0,
            COPY_MODE_RECT = 1,
            COPY_MODE_VIEWPORT = 2,
        }
    }
    /** A node that copies a region of the screen to a buffer for access in shader code. */
    class BackBufferCopy extends Node2D {
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        set_copy_mode(copy_mode: BackBufferCopy.CopyMode): void
        get_copy_mode(): BackBufferCopy.CopyMode
        /** Buffer mode. See [enum CopyMode] constants. */
        copy_mode: number /*i64*/
        /** The area covered by the [BackBufferCopy]. Only used if [member copy_mode] is [constant COPY_MODE_RECT]. */
        rect: Rect2
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
    /** Abstract base class for GUI buttons. */
    class BaseButton extends Control {
        /* gdvirtual */ _pressed(): void
        /* gdvirtual */ _toggled(toggled_on: boolean): void
        set_pressed(pressed: boolean): void
        is_pressed(): boolean
        /** Changes the [member button_pressed] state of the button, without emitting [signal toggled]. Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if [member toggle_mode] is [code]true[/code].
         *  [b]Note:[/b] This method doesn't unpress other buttons in [member button_group].
         */
        set_pressed_no_signal(pressed: boolean): void
        /** Returns [code]true[/code] if the mouse has entered the button and has not left it yet. */
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
        /** Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the [enum DrawMode] enum. */
        get_draw_mode(): BaseButton.DrawMode
        set_keep_pressed_outside(enabled: boolean): void
        is_keep_pressed_outside(): boolean
        set_shortcut_feedback(enabled: boolean): void
        is_shortcut_feedback(): boolean
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
        set_button_group(button_group: ButtonGroup): void
        get_button_group(): ButtonGroup
        /** If [code]true[/code], the button is in disabled state and can't be clicked or toggled. */
        disabled: boolean
        /** If [code]true[/code], the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked. */
        toggle_mode: boolean
        /** If [code]true[/code], the button's state is pressed. Means the button is pressed down or toggled (if [member toggle_mode] is active). Only works if [member toggle_mode] is [code]true[/code].
         *  [b]Note:[/b] Setting [member button_pressed] will result in [signal toggled] to be emitted. If you want to change the pressed state without emitting that signal, use [method set_pressed_no_signal].
         */
        button_pressed: boolean
        /** Determines when the button is considered clicked, one of the [enum ActionMode] constants. */
        action_mode: number /*i64*/
        /** Binary mask to choose which mouse buttons this button will respond to.
         *  To allow both left-click and right-click, use [code]MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT[/code].
         */
        button_mask: number /*i64*/
        /** If [code]true[/code], the button stays pressed when moving the cursor outside the button while pressing it.
         *  [b]Note:[/b] This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.
         */
        keep_pressed_outside: boolean
        /** The [ButtonGroup] associated with the button. Not to be confused with node groups.
         *  [b]Note:[/b] The button will be configured as a radio button if a [ButtonGroup] is assigned to it.
         */
        button_group: ButtonGroup
        /** [Shortcut] associated to the button. */
        shortcut: Shortcut
        /** If [code]true[/code], the button will highlight for a short amount of time when its shortcut is activated. If [code]false[/code] and [member toggle_mode] is [code]false[/code], the shortcut will activate without any visual feedback. */
        shortcut_feedback: boolean
        /** If [code]true[/code], the button will add information about its shortcut in the tooltip. */
        shortcut_in_tooltip: boolean
        readonly pressed: Signal
        readonly button_up: Signal
        readonly button_down: Signal
        readonly toggled: Signal
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
    /** Abstract base class for defining the 3D rendering properties of meshes. */
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
        /** If [code]true[/code], enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to [code]true[/code]. See [enum Flags] enumerator for options. */
        set_flag(flag: BaseMaterial3D.Flags, enable: boolean): void
        /** Returns [code]true[/code], if the specified flag is enabled. See [enum Flags] enumerator for options. */
        get_flag(flag: BaseMaterial3D.Flags): boolean
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        /** If [code]true[/code], enables the specified [enum Feature]. Many features that are available in [BaseMaterial3D]s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to [code]true[/code]. */
        set_feature(feature: BaseMaterial3D.Feature, enable: boolean): void
        /** Returns [code]true[/code], if the specified [enum Feature] is enabled. */
        get_feature(feature: BaseMaterial3D.Feature): boolean
        /** Sets the texture for the slot specified by [param param]. See [enum TextureParam] for available slots. */
        set_texture(param: BaseMaterial3D.TextureParam, texture: Texture2D): void
        /** Returns the [Texture2D] associated with the specified [enum TextureParam]. */
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
        /** The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [constant TRANSPARENCY_DISABLED] has a greater performance impact compared to opaque rendering. See also [member blend_mode]. */
        transparency: number /*i64*/
        /** Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing [member alpha_scissor_threshold]. If the material disappears at a distance, try decreasing [member alpha_scissor_threshold]. */
        alpha_scissor_threshold: number /*f64*/
        /** The hashing scale for Alpha Hash. Recommended values between [code]0[/code] and [code]2[/code]. */
        alpha_hash_scale: number /*f64*/
        /** The type of alpha antialiasing to apply. See [enum AlphaAntiAliasing]. */
        alpha_antialiasing_mode: number /*i64*/
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        alpha_antialiasing_edge: number /*f64*/
        /** The material's blend mode.
         *  [b]Note:[/b] Values other than [code]Mix[/code] force the object into the transparent pipeline. See [enum BlendMode].
         */
        blend_mode: number /*i64*/
        /** Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See [enum CullMode]. */
        cull_mode: number /*i64*/
        /** Determines when depth rendering takes place. See [enum DepthDrawMode]. See also [member transparency]. */
        depth_draw_mode: number /*i64*/
        /** Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights.
         *  [b]Note:[/b] Setting the shading mode vertex shading currently has no effect, as vertex shading is not implemented yet.
         */
        shading_mode: number /*i64*/
        /** The algorithm used for diffuse light scattering. See [enum DiffuseMode]. */
        diffuse_mode: number /*i64*/
        /** The method for rendering the specular blob. See [enum SpecularMode].
         *  [b]Note:[/b] [member specular_mode] only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, [VoxelGI], SDFGI or [ReflectionProbe]s. To disable reflections from these sources as well, set [member metallic_specular] to [code]0.0[/code] instead.
         */
        specular_mode: number /*i64*/
        /** The material's base color.
         *  [b]Note:[/b] If [member detail_enabled] is [code]true[/code] and a [member detail_albedo] texture is specified, [member albedo_color] will [i]not[/i] modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent [member detail_albedo] texture instead.
         */
        albedo_color: Color
        /** A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between [code]0[/code] and [code]1[/code] should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [member roughness]. */
        metallic: number /*f64*/
        /** Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to [code]0.0[/code], no specular reflections will be visible. This differs from the [constant SPECULAR_DISABLED] [enum SpecularMode] as [constant SPECULAR_DISABLED] only applies to the specular lobe from the light source.
         *  [b]Note:[/b] Unlike [member metallic], this is not energy-conserving, so it should be left at [code]0.5[/code] in most cases. See also [member roughness].
         */
        metallic_specular: number /*f64*/
        /** Specifies the channel of the [member metallic_texture] in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        metallic_texture_channel: number /*i64*/
        /** Surface reflection. A value of [code]0[/code] represents a perfect mirror while a value of [code]1[/code] completely blurs the reflection. See also [member metallic]. */
        roughness: number /*f64*/
        /** Specifies the channel of the [member roughness_texture] in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        roughness_texture_channel: number /*i64*/
        /** The emitted light's color. See [member emission_enabled]. */
        emission: Color
        /** Multiplier for emitted light. See [member emission_enabled]. */
        emission_energy_multiplier: number /*f64*/
        /** Luminance of emitted light, measured in nits (candela per square meter). Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default is roughly equivalent to an indoor lightbulb. */
        emission_intensity: number /*f64*/
        /** Sets how [member emission] interacts with [member emission_texture]. Can either add or multiply. See [enum EmissionOperator] for options. */
        emission_operator: number /*i64*/
        /** The strength of the normal map's effect. */
        normal_scale: number /*f64*/
        /** Sets the strength of the rim lighting effect. */
        rim: number /*f64*/
        /** The amount of to blend light and albedo color when rendering rim effect. If [code]0[/code] the light color is used, while [code]1[/code] means albedo color is used. An intermediate value generally works best. */
        rim_tint: number /*f64*/
        /** Sets the strength of the clearcoat effect. Setting to [code]0[/code] looks the same as disabling the clearcoat effect. */
        clearcoat: number /*f64*/
        /** Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat. */
        clearcoat_roughness: number /*f64*/
        /** The strength of the anisotropy effect. This is multiplied by [member anisotropy_flowmap]'s alpha channel if a texture is defined there and the texture contains an alpha channel. */
        anisotropy: number /*f64*/
        /** Amount that ambient occlusion affects lighting from lights. If [code]0[/code], ambient occlusion only affects ambient light. If [code]1[/code], ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic. */
        ao_light_affect: number /*f64*/
        /** Specifies the channel of the [member ao_texture] in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        ao_texture_channel: number /*i64*/
        /** The heightmap scale to use for the parallax effect (see [member heightmap_enabled]). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using [member heightmap_flip_texture] as the material will also appear to be "closer" to the camera. In most cases, [member heightmap_scale] should be kept to a positive value.
         *  [b]Note:[/b] If the height map effect looks strange regardless of this value, try adjusting [member heightmap_flip_binormal] and [member heightmap_flip_tangent]. See also [member heightmap_texture] for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how [member heightmap_scale] behaves.
         */
        heightmap_scale: number /*f64*/
        /** If [code]true[/code], uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see [member heightmap_enabled]). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference. */
        heightmap_deep_parallax: boolean
        /** The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
         *  [b]Note:[/b] Only effective if [member heightmap_deep_parallax] is [code]true[/code].
         */
        heightmap_min_layers: number /*i64*/
        /** The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
         *  [b]Note:[/b] Only effective if [member heightmap_deep_parallax] is [code]true[/code].
         */
        heightmap_max_layers: number /*i64*/
        /** If [code]true[/code], flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to [code]true[/code]. */
        heightmap_flip_tangent: boolean
        /** If [code]true[/code], flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to [code]true[/code]. */
        heightmap_flip_binormal: boolean
        /** The strength of the subsurface scattering effect. The depth of the effect is also controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale], which is set globally. */
        subsurf_scatter_strength: number /*f64*/
        /** The color to multiply the subsurface scattering transmittance effect with. Ignored if [member subsurf_scatter_skin_mode] is [code]true[/code]. */
        subsurf_scatter_transmittance_color: Color
        /** The depth of the subsurface scattering transmittance effect. */
        subsurf_scatter_transmittance_depth: number /*f64*/
        /** The intensity of the subsurface scattering transmittance effect. */
        subsurf_scatter_transmittance_boost: number /*f64*/
        /** The color used by the backlight effect. Represents the light passing through an object. */
        backlight: Color
        /** The strength of the refraction effect. */
        refraction_scale: number /*f64*/
        /** Specifies the channel of the [member refraction_texture] in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        refraction_texture_channel: number /*i64*/
        /** Specifies how the [member detail_albedo] should blend with the current [code]ALBEDO[/code]. See [enum BlendMode] for options. */
        detail_blend_mode: number /*i64*/
        /** Specifies whether to use [code]UV[/code] or [code]UV2[/code] for the detail layer. See [enum DetailUV] for options. */
        detail_uv_layer: number /*i64*/
        /** How much to scale the [code]UV[/code] coordinates. This is multiplied by [code]UV[/code] in the vertex function. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        uv1_scale: Vector3
        /** How much to offset the [code]UV[/code] coordinates. This amount will be added to [code]UV[/code] in the vertex function. This can be used to offset a texture. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        uv1_offset: Vector3
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.
         *  [b]Note:[/b] [member uv1_triplanar_sharpness] is clamped between [code]0.0[/code] and [code]150.0[/code] (inclusive) as values outside that range can look broken depending on the mesh.
         */
        uv1_triplanar_sharpness: number /*f64*/
        /** How much to scale the [code]UV2[/code] coordinates. This is multiplied by [code]UV2[/code] in the vertex function. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        uv2_scale: Vector3
        /** How much to offset the [code]UV2[/code] coordinates. This amount will be added to [code]UV2[/code] in the vertex function. This can be used to offset a texture. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        uv2_offset: Vector3
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.
         *  [b]Note:[/b] [member uv2_triplanar_sharpness] is clamped between [code]0.0[/code] and [code]150.0[/code] (inclusive) as values outside that range can look broken depending on the mesh.
         */
        uv2_triplanar_sharpness: number /*f64*/
        /** Filter flags for the texture. See [enum TextureFilter] for options.
         *  [b]Note:[/b] [member heightmap_texture] is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.
         */
        texture_filter: number /*i64*/
        /** Controls how the object faces the camera. See [enum BillboardMode].
         *  [b]Note:[/b] Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See [url=https://github.com/godotengine/godot/issues/41567]GitHub issue #41567[/url] for details.
         */
        billboard_mode: number /*i64*/
        /** The number of horizontal frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        particles_anim_h_frames: number /*i64*/
        /** The number of vertical frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        particles_anim_v_frames: number /*i64*/
        /** If [code]true[/code], particle animations are looped. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        particles_anim_loop: boolean
        /** If [code]true[/code], enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [member cull_mode] set to [constant CULL_FRONT]. See also [member grow_amount].
         *  [b]Note:[/b] Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [url=https://wiki.polycount.com/wiki/Face_weighted_normals]face weighted normals[/url] in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.
         */
        grow: boolean
        /** Grows object vertices in the direction of their normals. Only effective if [member grow] is [code]true[/code]. */
        grow_amount: number /*f64*/
        /** The point size in pixels. See [member use_point_size]. */
        point_size: number /*f64*/
        /** If [code]true[/code], the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object. */
        proximity_fade_enabled: boolean
        /** Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade. */
        proximity_fade_distance: number /*f64*/
        /** The width of the range around the shape between the minimum and maximum representable signed distance. */
        msdf_pixel_range: number /*f64*/
        /** The width of the shape outline. */
        msdf_outline_size: number /*f64*/
        /** Specifies which type of fade to use. Can be any of the [enum DistanceFadeMode]s. */
        distance_fade_mode: number /*i64*/
        /** Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.
         *  [b]Note:[/b] If [member distance_fade_min_distance] is greater than [member distance_fade_max_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].
         */
        distance_fade_min_distance: number /*f64*/
        /** Distance at which the object appears fully opaque.
         *  [b]Note:[/b] If [member distance_fade_max_distance] is less than [member distance_fade_min_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].
         */
        distance_fade_max_distance: number /*f64*/
    }
}
