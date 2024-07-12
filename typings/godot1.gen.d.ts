// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    namespace AESContext {
        enum Mode {
            /** AES electronic codebook encryption mode. */
            MODE_ECB_ENCRYPT = 0,
            
            /** AES electronic codebook decryption mode. */
            MODE_ECB_DECRYPT = 1,
            
            /** AES cipher blocker chaining encryption mode. */
            MODE_CBC_ENCRYPT = 2,
            
            /** AES cipher blocker chaining decryption mode. */
            MODE_CBC_DECRYPT = 3,
            
            /** Maximum value for the mode enum. */
            MODE_MAX = 4,
        }
    }
    /** Provides access to AES encryption/decryption of raw data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_aescontext.html  
     */
    class AESContext extends RefCounted {
        constructor(identifier?: any)
        /** Start the AES context in the given [param mode]. A [param key] of either 16 or 32 bytes must always be provided, while an [param iv] (initialization vector) of exactly 16 bytes, is only needed when [param mode] is either [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT]. */
        start(mode: AESContext.Mode, key: PackedByteArray, iv: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): Error
        
        /** Run the desired operation for this AES context. Will return a [PackedByteArray] containing the result of encrypting (or decrypting) the given [param src]. See [method start] for mode of operation.  
         *      
         *  **Note:** The size of [param src] must be a multiple of 16. Apply some padding if needed.  
         */
        update(src: PackedByteArray): PackedByteArray
        
        /** Get the current IV state for this context (IV gets updated when calling [method update]). You normally don't need this function.  
         *      
         *  **Note:** This function only makes sense when the context is started with [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT].  
         */
        get_iv_state(): PackedByteArray
        
        /** Close this AES context so it can be started again. See [method start]. */
        finish(): void
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_astar2d.html  
     */
    class AStar2D extends RefCounted {
        constructor(identifier?: any)
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStar2D] class.  
         */
        /* gdvirtual */ _estimate_cost(from_id: int64, to_id: int64): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStar2D] class.  
         */
        /* gdvirtual */ _compute_cost(from_id: int64, to_id: int64): float64
        
        /** Returns the next available point ID with no point associated to it. */
        get_available_point_id(): int64
        
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.  
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.  
         *    
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.  
         */
        add_point(id: int64, position: Vector2, weight_scale: float64 = 1): void
        
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: int64): Vector2
        
        /** Sets the [param position] for the point with the given [param id]. */
        set_point_position(id: int64, position: Vector2): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: int64): float64
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        set_point_weight_scale(id: int64, weight_scale: float64): void
        
        /** Removes the point associated with the given [param id] from the points pool. */
        remove_point(id: int64): void
        
        /** Returns whether a point associated with the given [param id] exists. */
        has_point(id: int64): boolean
        
        /** Returns an array with the IDs of the points that form the connection with the given point.  
         *    
         */
        get_point_connections(id: int64): PackedInt64Array
        
        /** Returns an array of all point IDs. */
        get_point_ids(): PackedInt64Array
        
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        set_point_disabled(id: int64, disabled: boolean = true): void
        
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        is_point_disabled(id: int64): boolean
        
        /** Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.  
         *    
         */
        connect_points(id: int64, to_id: int64, bidirectional: boolean = true): void
        
        /** Deletes the segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnect_points(id: int64, to_id: int64, bidirectional: boolean = true): void
        
        /** Returns whether there is a connection/segment between the given points. If [param bidirectional] is `false`, returns whether movement from [param id] to [param to_id] is possible through this segment. */
        are_points_connected(id: int64, to_id: int64, bidirectional: boolean = true): boolean
        
        /** Returns the number of points currently in the points pool. */
        get_point_count(): int64
        
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        get_point_capacity(): int64
        
        /** Reserves space internally for [param num_nodes] points, useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
        reserve_space(num_nodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.  
         *      
         *  **Note:** If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.  
         */
        get_closest_point(to_position: Vector2, include_disabled: boolean = false): int64
        
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.  
         *    
         *  The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.  
         */
        get_closest_position_in_segment(to_position: Vector2): Vector2
        
        /** Returns an array with the points that are in the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector2Array] and will print an error message.  
         */
        get_point_path(from_id: int64, to_id: int64): PackedVector2Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *    
         *  If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.  
         */
        get_id_path(from_id: int64, to_id: int64): PackedInt64Array
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_astar3d.html  
     */
    class AStar3D extends RefCounted {
        constructor(identifier?: any)
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStar3D] class.  
         */
        /* gdvirtual */ _estimate_cost(from_id: int64, to_id: int64): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStar3D] class.  
         */
        /* gdvirtual */ _compute_cost(from_id: int64, to_id: int64): float64
        
        /** Returns the next available point ID with no point associated to it. */
        get_available_point_id(): int64
        
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.  
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.  
         *    
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.  
         */
        add_point(id: int64, position: Vector3, weight_scale: float64 = 1): void
        
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: int64): Vector3
        
        /** Sets the [param position] for the point with the given [param id]. */
        set_point_position(id: int64, position: Vector3): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: int64): float64
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        set_point_weight_scale(id: int64, weight_scale: float64): void
        
        /** Removes the point associated with the given [param id] from the points pool. */
        remove_point(id: int64): void
        
        /** Returns whether a point associated with the given [param id] exists. */
        has_point(id: int64): boolean
        
        /** Returns an array with the IDs of the points that form the connection with the given point.  
         *    
         */
        get_point_connections(id: int64): PackedInt64Array
        
        /** Returns an array of all point IDs. */
        get_point_ids(): PackedInt64Array
        
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        set_point_disabled(id: int64, disabled: boolean = true): void
        
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        is_point_disabled(id: int64): boolean
        
        /** Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.  
         *    
         */
        connect_points(id: int64, to_id: int64, bidirectional: boolean = true): void
        
        /** Deletes the segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnect_points(id: int64, to_id: int64, bidirectional: boolean = true): void
        
        /** Returns whether the two given points are directly connected by a segment. If [param bidirectional] is `false`, returns whether movement from [param id] to [param to_id] is possible through this segment. */
        are_points_connected(id: int64, to_id: int64, bidirectional: boolean = true): boolean
        
        /** Returns the number of points currently in the points pool. */
        get_point_count(): int64
        
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        get_point_capacity(): int64
        
        /** Reserves space internally for [param num_nodes] points. Useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
        reserve_space(num_nodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.  
         *      
         *  **Note:** If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.  
         */
        get_closest_point(to_position: Vector3, include_disabled: boolean = false): int64
        
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.  
         *    
         *  The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.  
         */
        get_closest_position_in_segment(to_position: Vector3): Vector3
        
        /** Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector3Array] and will print an error message.  
         */
        get_point_path(from_id: int64, to_id: int64): PackedVector3Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *    
         *  If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.  
         */
        get_id_path(from_id: int64, to_id: int64): PackedInt64Array
    }
    namespace AStarGrid2D {
        enum Heuristic {
            /** The [url=https://en.wikipedia.org/wiki/Euclidean_distance]Euclidean heuristic[/url] to be used for the pathfinding using the following formula:  
             *    
             *      
             *  **Note:** This is also the internal heuristic used in [AStar3D] and [AStar2D] by default (with the inclusion of possible z-axis coordinate).  
             */
            HEURISTIC_EUCLIDEAN = 0,
            
            /** The [url=https://en.wikipedia.org/wiki/Taxicab_geometry]Manhattan heuristic[/url] to be used for the pathfinding using the following formula:  
             *    
             *      
             *  **Note:** This heuristic is intended to be used with 4-side orthogonal movements, provided by setting the [member diagonal_mode] to [constant DIAGONAL_MODE_NEVER].  
             */
            HEURISTIC_MANHATTAN = 1,
            
            /** The Octile heuristic to be used for the pathfinding using the following formula:  
             *    
             */
            HEURISTIC_OCTILE = 2,
            
            /** The [url=https://en.wikipedia.org/wiki/Chebyshev_distance]Chebyshev heuristic[/url] to be used for the pathfinding using the following formula:  
             *    
             */
            HEURISTIC_CHEBYSHEV = 3,
            
            /** Represents the size of the [enum Heuristic] enum. */
            HEURISTIC_MAX = 4,
        }
        enum DiagonalMode {
            /** The pathfinding algorithm will ignore solid neighbors around the target cell and allow passing using diagonals. */
            DIAGONAL_MODE_ALWAYS = 0,
            
            /** The pathfinding algorithm will ignore all diagonals and the way will be always orthogonal. */
            DIAGONAL_MODE_NEVER = 1,
            
            /** The pathfinding algorithm will avoid using diagonals if at least two obstacles have been placed around the neighboring cells of the specific path segment. */
            DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE = 2,
            
            /** The pathfinding algorithm will avoid using diagonals if any obstacle has been placed around the neighboring cells of the specific path segment. */
            DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES = 3,
            
            /** Represents the size of the [enum DiagonalMode] enum. */
            DIAGONAL_MODE_MAX = 4,
        }
    }
    /** An implementation of A* for finding the shortest path between two points on a partial 2D grid.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_astargrid2d.html  
     */
    class AStarGrid2D extends RefCounted {
        constructor(identifier?: any)
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStarGrid2D] class.  
         */
        /* gdvirtual */ _estimate_cost(from_id: Vector2i, to_id: Vector2i): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStarGrid2D] class.  
         */
        /* gdvirtual */ _compute_cost(from_id: Vector2i, to_id: Vector2i): float64
        set_region(region: Rect2i): void
        get_region(): Rect2i
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_cell_size(cell_size: Vector2): void
        get_cell_size(): Vector2
        
        /** Returns `true` if the [param x] and [param y] is a valid grid coordinate (id), i.e. if it is inside [member region]. Equivalent to `region.has_point(Vector2i(x, y))`. */
        is_in_bounds(x: int64, y: int64): boolean
        
        /** Returns `true` if the [param id] vector is a valid grid coordinate, i.e. if it is inside [member region]. Equivalent to `region.has_point(id)`. */
        is_in_boundsv(id: Vector2i): boolean
        
        /** Indicates that the grid parameters were changed and [method update] needs to be called. */
        is_dirty(): boolean
        
        /** Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [member region], [member cell_size] or [member offset] are changed. [method is_dirty] will return `true` if this is the case and this needs to be called.  
         *      
         *  **Note:** All point data (solidity and weight scale) will be cleared.  
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
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        set_point_solid(id: Vector2i, solid: boolean = true): void
        
        /** Returns `true` if a point is disabled for pathfinding. By default, all points are enabled. */
        is_point_solid(id: Vector2i): boolean
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        set_point_weight_scale(id: Vector2i, weight_scale: float64): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        get_point_weight_scale(id: Vector2i): float64
        
        /** Fills the given [param region] on the grid with the specified value for the solid flag.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        fill_solid_region(region: Rect2i, solid: boolean = true): void
        
        /** Fills the given [param region] on the grid with the specified value for the weight scale.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        fill_weight_scale_region(region: Rect2i, weight_scale: float64): void
        
        /** Clears the grid and sets the [member region] to `Rect2i(0, 0, 0, 0)`. */
        clear(): void
        
        /** Returns the position of the point associated with the given [param id]. */
        get_point_position(id: Vector2i): Vector2
        
        /** Returns an array with the points that are in the path found by [AStarGrid2D] between the given points. The array is ordered from the starting point to the ending point of the path.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector2Array] and will print an error message.  
         */
        get_point_path(from_id: Vector2i, to_id: Vector2i): PackedVector2Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path. */
        get_id_path(from_id: Vector2i, to_id: Vector2i): Array
        
        /** The region of grid cells available for pathfinding. If changed, [method update] needs to be called before finding the next path. */
        get region(): Rect2i
        set region(value: Rect2i)
        
        /** The size of the grid (number of cells of size [member cell_size] on each axis). If changed, [method update] needs to be called before finding the next path.  
         *   *Deprecated.*  Use [member region] instead.  
         */
        get size(): Vector2i
        set size(value: Vector2i)
        
        /** The offset of the grid which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The size of the point cell which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        get cell_size(): Vector2
        set cell_size(value: Vector2)
        
        /** Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.  
         *      
         *  **Note:** Currently, toggling it on disables the consideration of weight scaling in pathfinding.  
         */
        get jumping_enabled(): boolean
        set jumping_enabled(value: boolean)
        
        /** The default [enum Heuristic] which will be used to calculate the cost between two points if [method _compute_cost] was not overridden. */
        get default_compute_heuristic(): int64
        set default_compute_heuristic(value: int64)
        
        /** The default [enum Heuristic] which will be used to calculate the cost between the point and the end point if [method _estimate_cost] was not overridden. */
        get default_estimate_heuristic(): int64
        set default_estimate_heuristic(value: int64)
        
        /** A specific [enum DiagonalMode] mode which will force the path to avoid or accept the specified diagonals. */
        get diagonal_mode(): int64
        set diagonal_mode(value: int64)
    }
    class AbstractPolygon2DEditor extends HBoxContainer {
        constructor(identifier?: any)
    }
    class AbstractPolygon2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A base dialog used for user notification.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_acceptdialog.html  
     */
    class AcceptDialog extends Window {
        constructor(identifier?: any)
        /** Returns the OK [Button] instance.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_ok_button(): Button
        
        /** Returns the label used for built-in text.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_label(): Label
        set_hide_on_ok(enabled: boolean): void
        get_hide_on_ok(): boolean
        set_close_on_escape(enabled: boolean): void
        get_close_on_escape(): boolean
        
        /** Adds a button with label [param text] and a custom [param action] to the dialog and returns the created button. [param action] will be passed to the [signal custom_action] signal when pressed.  
         *  If `true`, [param right] will place the button to the right of any sibling buttons.  
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
        get ok_button_text(): string
        set ok_button_text(value: string)
        
        /** The text displayed by the dialog. */
        get dialog_text(): string
        set dialog_text(value: string)
        
        /** If `true`, the dialog is hidden when the OK button is pressed. You can set it to `false` if you want to do e.g. input validation when receiving the [signal confirmed] signal, and handle hiding the dialog in your own logic.  
         *      
         *  **Note:** Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example [FileDialog] defaults to `false`, and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in [FileDialog] to disable hiding the dialog when pressing OK.  
         */
        get dialog_hide_on_ok(): boolean
        set dialog_hide_on_ok(value: boolean)
        
        /** If `true`, the dialog will be hidden when the escape key ([constant KEY_ESCAPE]) is pressed. */
        get dialog_close_on_escape(): boolean
        set dialog_close_on_escape(value: boolean)
        
        /** Sets autowrapping for the text in the dialog. */
        get dialog_autowrap(): boolean
        set dialog_autowrap(value: boolean)
        
        /** Emitted when the dialog is accepted, i.e. the OK button is pressed. */
        readonly confirmed: Signal //  => void
        
        /** Emitted when the dialog is closed or the button created with [method add_cancel_button] is pressed. */
        readonly canceled: Signal //  => void
        
        /** Emitted when a custom button is pressed. See [method add_button]. */
        readonly custom_action: Signal // action: StringName => void
    }
    class ActionMapEditor extends Control {
        constructor(identifier?: any)
        readonly action_added: Signal // name: string => void
        readonly action_edited: Signal // name: string, new_action: Dictionary => void
        readonly action_removed: Signal // name: string => void
        readonly action_renamed: Signal // old_name: string, new_name: string => void
        readonly action_reordered: Signal // action_name: string, relative_to: string, before: boolean => void
        readonly filter_focused: Signal //  => void
        readonly filter_unfocused: Signal //  => void
    }
    class AnchorPresetPicker extends ControlEditorPresetPicker {
        constructor(identifier?: any)
        readonly anchors_preset_selected: Signal // preset: int64 => void
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animatablebody2d.html  
     */
    class AnimatableBody2D extends StaticBody2D {
        constructor(identifier?: any)
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
        
        /** If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do **not** use together with [method PhysicsBody2D.move_and_collide]. */
        get sync_to_physics(): boolean
        set sync_to_physics(value: boolean)
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animatablebody3d.html  
     */
    class AnimatableBody3D extends StaticBody3D {
        constructor(identifier?: any)
        set_sync_to_physics(enable: boolean): void
        is_sync_to_physics_enabled(): boolean
        
        /** If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do **not** use together with [method PhysicsBody3D.move_and_collide]. */
        get sync_to_physics(): boolean
        set sync_to_physics(value: boolean)
    }
    /** Sprite node that contains multiple textures as frames to play for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animatedsprite2d.html  
     */
    class AnimatedSprite2D extends Node2D {
        constructor(identifier?: any)
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        is_playing(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name: StringName = '', custom_speed: float64 = 1, from_end: boolean = false): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        play_backwards(name: StringName = ''): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_frame(frame: int64): void
        get_frame(): int64
        set_frame_progress(progress: float64): void
        get_frame_progress(): float64
        
        /** The setter of [member frame] resets the [member frame_progress] to `0.0` implicitly, but this method avoids that.  
         *  This is useful when you want to carry over the current [member frame_progress] to another [member frame].  
         *  **Example:**  
         *    
         */
        set_frame_and_progress(frame: int64, progress: float64): void
        set_speed_scale(speed_scale: float64): void
        get_speed_scale(): float64
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        get_playing_speed(): float64
        
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        get sprite_frames(): SpriteFrames
        set sprite_frames(value: SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        
        /** The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`. */
        get frame_progress(): float64
        set frame_progress(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** If `true`, texture will be centered. */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flip_h(): boolean
        set flip_h(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flip_v(): boolean
        set flip_v(value: boolean)
        
        /** Emitted when [member sprite_frames] changes. */
        readonly sprite_frames_changed: Signal //  => void
        
        /** Emitted when [member animation] changes. */
        readonly animation_changed: Signal //  => void
        
        /** Emitted when [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the animation loops. */
        readonly animation_looped: Signal //  => void
        
        /** Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback. */
        readonly animation_finished: Signal //  => void
    }
    /** 2D sprite node in 3D world, that can use multiple 2D textures for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animatedsprite3d.html  
     */
    class AnimatedSprite3D extends SpriteBase3D {
        constructor(identifier?: any)
        set_sprite_frames(sprite_frames: SpriteFrames): void
        get_sprite_frames(): SpriteFrames
        set_animation(name: StringName): void
        get_animation(): StringName
        set_autoplay(name: string): void
        get_autoplay(): string
        
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        is_playing(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name: StringName = '', custom_speed: float64 = 1, from_end: boolean = false): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        play_backwards(name: StringName = ''): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        set_frame(frame: int64): void
        get_frame(): int64
        set_frame_progress(progress: float64): void
        get_frame_progress(): float64
        
        /** The setter of [member frame] resets the [member frame_progress] to `0.0` implicitly, but this method avoids that.  
         *  This is useful when you want to carry over the current [member frame_progress] to another [member frame].  
         *  **Example:**  
         *    
         */
        set_frame_and_progress(frame: int64, progress: float64): void
        set_speed_scale(speed_scale: float64): void
        get_speed_scale(): float64
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        get_playing_speed(): float64
        _res_changed(): void
        
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        get sprite_frames(): SpriteFrames
        set sprite_frames(value: SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        
        /** The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`. */
        get frame_progress(): float64
        set frame_progress(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** Emitted when [member sprite_frames] changes. */
        readonly sprite_frames_changed: Signal //  => void
        
        /** Emitted when [member animation] changes. */
        readonly animation_changed: Signal //  => void
        
        /** Emitted when [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the animation loops. */
        readonly animation_looped: Signal //  => void
        
        /** Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback. */
        readonly animation_finished: Signal //  => void
    }
    /** Proxy texture for simple frame-based animations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animatedtexture.html  
     */
    class AnimatedTexture extends Texture2D {
        /** The maximum number of frames supported by [AnimatedTexture]. If you need more frames in your animation, use [AnimationPlayer] or [AnimatedSprite2D]. */
        static readonly MAX_FRAMES = 256
        constructor(identifier?: any)
        set_frames(frames: int64): void
        get_frames(): int64
        set_current_frame(frame: int64): void
        get_current_frame(): int64
        set_pause(pause: boolean): void
        get_pause(): boolean
        set_one_shot(one_shot: boolean): void
        get_one_shot(): boolean
        set_speed_scale(scale: float64): void
        get_speed_scale(): float64
        
        /** Assigns a [Texture2D] to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID [member frames] - 1.  
         *  You can define any number of textures up to [constant MAX_FRAMES], but keep in mind that only frames from 0 to [member frames] - 1 will be part of the animation.  
         */
        set_frame_texture(frame: int64, texture: Texture2D): void
        
        /** Returns the given frame's [Texture2D]. */
        get_frame_texture(frame: int64): Texture2D
        
        /** Sets the duration of any given [param frame]. The final duration is affected by the [member speed_scale]. If set to `0`, the frame is skipped during playback. */
        set_frame_duration(frame: int64, duration: float64): void
        
        /** Returns the given [param frame]'s duration, in seconds. */
        get_frame_duration(frame: int64): float64
        
        /** Number of frames to use in the animation. While you can create the frames independently with [method set_frame_texture], you need to set this value for the animation to take new frames into account. The maximum number of frames is [constant MAX_FRAMES]. */
        get frames(): int64
        set frames(value: int64)
        
        /** Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration. */
        get current_frame(): int64
        set current_frame(value: int64)
        
        /** If `true`, the animation will pause where it currently is (i.e. at [member current_frame]). The animation will continue from where it was paused when changing this property to `false`. */
        get pause(): boolean
        set pause(value: boolean)
        
        /** If `true`, the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set [member pause] to `true`. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse. */
        get speed_scale(): float64
        set speed_scale(value: float64)
    }
    namespace Animation {
        enum TrackType {
            /** Value tracks set values in node properties, but only those which can be interpolated. For 3D position/rotation/scale, using the dedicated [constant TYPE_POSITION_3D], [constant TYPE_ROTATION_3D] and [constant TYPE_SCALE_3D] track types instead of [constant TYPE_VALUE] is recommended for performance reasons. */
            TYPE_VALUE = 0,
            
            /** 3D position track (values are stored in [Vector3]s). */
            TYPE_POSITION_3D = 1,
            
            /** 3D rotation track (values are stored in [Quaternion]s). */
            TYPE_ROTATION_3D = 2,
            
            /** 3D scale track (values are stored in [Vector3]s). */
            TYPE_SCALE_3D = 3,
            
            /** Blend shape track. */
            TYPE_BLEND_SHAPE = 4,
            
            /** Method tracks call functions with given arguments per key. */
            TYPE_METHOD = 5,
            
            /** Bezier tracks are used to interpolate a value using custom curves. They can also be used to animate sub-properties of vectors and colors (e.g. alpha value of a [Color]). */
            TYPE_BEZIER = 6,
            
            /** Audio tracks are used to play an audio stream with either type of [AudioStreamPlayer]. The stream can be trimmed and previewed in the animation. */
            TYPE_AUDIO = 7,
            
            /** Animation tracks play animations in other [AnimationPlayer] nodes. */
            TYPE_ANIMATION = 8,
        }
        enum InterpolationType {
            /** No interpolation (nearest value). */
            INTERPOLATION_NEAREST = 0,
            
            /** Linear interpolation. */
            INTERPOLATION_LINEAR = 1,
            
            /** Cubic interpolation. This looks smoother than linear interpolation, but is more expensive to interpolate. Stick to [constant INTERPOLATION_LINEAR] for complex 3D animations imported from external software, even if it requires using a higher animation framerate in return. */
            INTERPOLATION_CUBIC = 2,
            
            /** Linear interpolation with shortest path rotation.  
             *      
             *  **Note:** The result value is always normalized and may not match the key value.  
             */
            INTERPOLATION_LINEAR_ANGLE = 3,
            
            /** Cubic interpolation with shortest path rotation.  
             *      
             *  **Note:** The result value is always normalized and may not match the key value.  
             */
            INTERPOLATION_CUBIC_ANGLE = 4,
        }
        enum UpdateMode {
            /** Update between keyframes and hold the value. */
            UPDATE_CONTINUOUS = 0,
            
            /** Update at the keyframes. */
            UPDATE_DISCRETE = 1,
            
            /** Same as linear interpolation, but also interpolates from the current value (i.e. dynamically at runtime) if the first key isn't at 0 seconds. */
            UPDATE_CAPTURE = 2,
        }
        enum LoopMode {
            /** At both ends of the animation, the animation will stop playing. */
            LOOP_NONE = 0,
            
            /** At both ends of the animation, the animation will be repeated without changing the playback direction. */
            LOOP_LINEAR = 1,
            
            /** Repeats playback and reverse playback at both ends of the animation. */
            LOOP_PINGPONG = 2,
        }
        enum LoopedFlag {
            /** This flag indicates that the animation proceeds without any looping. */
            LOOPED_FLAG_NONE = 0,
            
            /** This flag indicates that the animation has reached the end of the animation and just after loop processed. */
            LOOPED_FLAG_END = 1,
            
            /** This flag indicates that the animation has reached the start of the animation and just after loop processed. */
            LOOPED_FLAG_START = 2,
        }
        enum FindMode {
            /** Finds the nearest time key. */
            FIND_MODE_NEAREST = 0,
            
            /** Finds only the key with approximating the time. */
            FIND_MODE_APPROX = 1,
            
            /** Finds only the key with matching the time. */
            FIND_MODE_EXACT = 2,
        }
    }
    /** Holds data that can be used to animate anything in the engine.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animation.html  
     */
    class Animation extends Resource {
        constructor(identifier?: any)
        /** Adds a track to the Animation. */
        add_track(type: Animation.TrackType, at_position: int64 = -1): int64
        
        /** Removes a track by specifying the track index. */
        remove_track(track_idx: int64): void
        
        /** Returns the amount of tracks in the animation. */
        get_track_count(): int64
        
        /** Gets the type of a track. */
        track_get_type(track_idx: int64): Animation.TrackType
        
        /** Gets the path of a track. For more information on the path format, see [method track_set_path]. */
        track_get_path(track_idx: int64): NodePath
        
        /** Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the parent node of the node that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by `":"`.  
         *  For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.  
         */
        track_set_path(track_idx: int64, path: NodePath): void
        
        /** Returns the index of the specified track. If the track is not found, return -1. */
        find_track(path: NodePath, type: Animation.TrackType): int64
        
        /** Moves a track up. */
        track_move_up(track_idx: int64): void
        
        /** Moves a track down. */
        track_move_down(track_idx: int64): void
        
        /** Changes the index position of track [param track_idx] to the one defined in [param to_idx]. */
        track_move_to(track_idx: int64, to_idx: int64): void
        
        /** Swaps the track [param track_idx]'s index position with the track [param with_idx]. */
        track_swap(track_idx: int64, with_idx: int64): void
        
        /** Sets the given track as imported or not. */
        track_set_imported(track_idx: int64, imported: boolean): void
        
        /** Returns `true` if the given track is imported. Else, return `false`. */
        track_is_imported(track_idx: int64): boolean
        
        /** Enables/disables the given track. Tracks are enabled by default. */
        track_set_enabled(track_idx: int64, enabled: boolean): void
        
        /** Returns `true` if the track at index [param track_idx] is enabled. */
        track_is_enabled(track_idx: int64): boolean
        
        /** Inserts a key in a given 3D position track. Returns the key index. */
        position_track_insert_key(track_idx: int64, time: float64, position: Vector3): int64
        
        /** Inserts a key in a given 3D rotation track. Returns the key index. */
        rotation_track_insert_key(track_idx: int64, time: float64, rotation: Quaternion): int64
        
        /** Inserts a key in a given 3D scale track. Returns the key index. */
        scale_track_insert_key(track_idx: int64, time: float64, scale: Vector3): int64
        
        /** Inserts a key in a given blend shape track. Returns the key index. */
        blend_shape_track_insert_key(track_idx: int64, time: float64, amount: float64): int64
        
        /** Returns the interpolated position value at the given time (in seconds). The [param track_idx] must be the index of a 3D position track. */
        position_track_interpolate(track_idx: int64, time_sec: float64): Vector3
        
        /** Returns the interpolated rotation value at the given time (in seconds). The [param track_idx] must be the index of a 3D rotation track. */
        rotation_track_interpolate(track_idx: int64, time_sec: float64): Quaternion
        
        /** Returns the interpolated scale value at the given time (in seconds). The [param track_idx] must be the index of a 3D scale track. */
        scale_track_interpolate(track_idx: int64, time_sec: float64): Vector3
        
        /** Returns the interpolated blend shape value at the given time (in seconds). The [param track_idx] must be the index of a blend shape track. */
        blend_shape_track_interpolate(track_idx: int64, time_sec: float64): float64
        
        /** Inserts a generic key in a given track. Returns the key index. */
        track_insert_key(track_idx: int64, time: float64, key: any, transition: float64 = 1): int64
        
        /** Removes a key by index in a given track. */
        track_remove_key(track_idx: int64, key_idx: int64): void
        
        /** Removes a key at [param time] in a given track. */
        track_remove_key_at_time(track_idx: int64, time: float64): void
        
        /** Sets the value of an existing key. */
        track_set_key_value(track_idx: int64, key: int64, value: any): void
        
        /** Sets the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        track_set_key_transition(track_idx: int64, key_idx: int64, transition: float64): void
        
        /** Sets the time of an existing key. */
        track_set_key_time(track_idx: int64, key_idx: int64, time: float64): void
        
        /** Returns the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        track_get_key_transition(track_idx: int64, key_idx: int64): float64
        
        /** Returns the number of keys in a given track. */
        track_get_key_count(track_idx: int64): int64
        
        /** Returns the value of a given key in a given track. */
        track_get_key_value(track_idx: int64, key_idx: int64): any
        
        /** Returns the time at which the key is located. */
        track_get_key_time(track_idx: int64, key_idx: int64): float64
        
        /** Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given. */
        track_find_key(track_idx: int64, time: float64, find_mode: Animation.FindMode = 0): int64
        
        /** Sets the interpolation type of a given track. */
        track_set_interpolation_type(track_idx: int64, interpolation: Animation.InterpolationType): void
        
        /** Returns the interpolation type of a given track. */
        track_get_interpolation_type(track_idx: int64): Animation.InterpolationType
        
        /** If `true`, the track at [param track_idx] wraps the interpolation loop. */
        track_set_interpolation_loop_wrap(track_idx: int64, interpolation: boolean): void
        
        /** Returns `true` if the track at [param track_idx] wraps the interpolation loop. New tracks wrap the interpolation loop by default. */
        track_get_interpolation_loop_wrap(track_idx: int64): boolean
        
        /** Returns `true` if the track is compressed, `false` otherwise. See also [method compress]. */
        track_is_compressed(track_idx: int64): boolean
        
        /** Sets the update mode (see [enum UpdateMode]) of a value track. */
        value_track_set_update_mode(track_idx: int64, mode: Animation.UpdateMode): void
        
        /** Returns the update mode of a value track. */
        value_track_get_update_mode(track_idx: int64): Animation.UpdateMode
        
        /** Returns the interpolated value at the given time (in seconds). The [param track_idx] must be the index of a value track. */
        value_track_interpolate(track_idx: int64, time_sec: float64): any
        
        /** Returns the method name of a method track. */
        method_track_get_name(track_idx: int64, key_idx: int64): StringName
        
        /** Returns the arguments values to be called on a method track for a given key in a given track. */
        method_track_get_params(track_idx: int64, key_idx: int64): Array
        
        /** Inserts a Bezier Track key at the given [param time] in seconds. The [param track_idx] must be the index of a Bezier Track.  
         *  [param in_handle] is the left-side weight of the added Bezier curve point, [param out_handle] is the right-side one, while [param value] is the actual value at this point.  
         */
        bezier_track_insert_key(track_idx: int64, time: float64, value: float64, in_handle: Vector2 = Vector2.ZERO, out_handle: Vector2 = Vector2.ZERO): int64
        
        /** Sets the value of the key identified by [param key_idx] to the given value. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_value(track_idx: int64, key_idx: int64, value: float64): void
        
        /** Sets the in handle of the key identified by [param key_idx] to value [param in_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_in_handle(track_idx: int64, key_idx: int64, in_handle: Vector2, balanced_value_time_ratio: float64 = 1): void
        
        /** Sets the out handle of the key identified by [param key_idx] to value [param out_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_set_key_out_handle(track_idx: int64, key_idx: int64, out_handle: Vector2, balanced_value_time_ratio: float64 = 1): void
        
        /** Returns the value of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_value(track_idx: int64, key_idx: int64): float64
        
        /** Returns the in handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_in_handle(track_idx: int64, key_idx: int64): Vector2
        
        /** Returns the out handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_get_key_out_handle(track_idx: int64, key_idx: int64): Vector2
        
        /** Returns the interpolated value at the given [param time] (in seconds). The [param track_idx] must be the index of a Bezier Track. */
        bezier_track_interpolate(track_idx: int64, time: float64): float64
        
        /** Inserts an Audio Track key at the given [param time] in seconds. The [param track_idx] must be the index of an Audio Track.  
         *  [param stream] is the [AudioStream] resource to play. [param start_offset] is the number of seconds cut off at the beginning of the audio stream, while [param end_offset] is at the ending.  
         */
        audio_track_insert_key(track_idx: int64, time: float64, stream: Resource, start_offset: float64 = 0, end_offset: float64 = 0): int64
        
        /** Sets the stream of the key identified by [param key_idx] to value [param stream]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_stream(track_idx: int64, key_idx: int64, stream: Resource): void
        
        /** Sets the start offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_start_offset(track_idx: int64, key_idx: int64, offset: float64): void
        
        /** Sets the end offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_set_key_end_offset(track_idx: int64, key_idx: int64, offset: float64): void
        
        /** Returns the audio stream of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track. */
        audio_track_get_key_stream(track_idx: int64, key_idx: int64): Resource
        
        /** Returns the start offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.  
         *  Start offset is the number of seconds cut off at the beginning of the audio stream.  
         */
        audio_track_get_key_start_offset(track_idx: int64, key_idx: int64): float64
        
        /** Returns the end offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.  
         *  End offset is the number of seconds cut off at the ending of the audio stream.  
         */
        audio_track_get_key_end_offset(track_idx: int64, key_idx: int64): float64
        
        /** Sets whether the track will be blended with other animations. If `true`, the audio playback volume changes depending on the blend value. */
        audio_track_set_use_blend(track_idx: int64, enable: boolean): void
        
        /** Returns `true` if the track at [param track_idx] will be blended with other animations. */
        audio_track_is_use_blend(track_idx: int64): boolean
        
        /** Inserts a key with value [param animation] at the given [param time] (in seconds). The [param track_idx] must be the index of an Animation Track. */
        animation_track_insert_key(track_idx: int64, time: float64, animation: StringName): int64
        
        /** Sets the key identified by [param key_idx] to value [param animation]. The [param track_idx] must be the index of an Animation Track. */
        animation_track_set_key_animation(track_idx: int64, key_idx: int64, animation: StringName): void
        
        /** Returns the animation name at the key identified by [param key_idx]. The [param track_idx] must be the index of an Animation Track. */
        animation_track_get_key_animation(track_idx: int64, key_idx: int64): StringName
        set_length(time_sec: float64): void
        get_length(): float64
        set_loop_mode(loop_mode: Animation.LoopMode): void
        get_loop_mode(): Animation.LoopMode
        set_step(size_sec: float64): void
        get_step(): float64
        
        /** Clear the animation (clear all tracks and reset all). */
        clear(): void
        
        /** Adds a new track to [param to_animation] that is a copy of the given track from this animation. */
        copy_track(track_idx: int64, to_animation: Animation): void
        
        /** Compress the animation and all its tracks in-place. This will make [method track_is_compressed] return `true` once called on this [Animation]. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.  
         *      
         *  **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.  
         */
        compress(page_size: int64 = 8192, fps: int64 = 120, split_tolerance: float64 = 4): void
        
        /** The total length of the animation (in seconds).  
         *      
         *  **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.  
         */
        get length(): float64
        set length(value: float64)
        
        /** Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation. */
        get loop_mode(): int64
        set loop_mode(value: int64)
        
        /** The animation step value. */
        get step(): float64
        set step(value: float64)
    }
    class AnimationBezierTrackEdit extends Control {
        constructor(identifier?: any)
        _clear_selection(): void
        _clear_selection_for_anim(_unnamed_arg0: Animation): void
        _select_at_anim(_unnamed_arg0: Animation, _unnamed_arg1: int64, _unnamed_arg2: float64): void
        _update_hidden_tracks_after(_unnamed_arg0: int64): void
        _update_locked_tracks_after(_unnamed_arg0: int64): void
        _bezier_track_insert_key(_unnamed_arg0: int64, _unnamed_arg1: float64, _unnamed_arg2: float64, _unnamed_arg3: Vector2, _unnamed_arg4: Vector2, _unnamed_arg5: any /*Animation.HandleMode*/): void
        readonly timeline_changed: Signal // position: float64 => void
        readonly remove_request: Signal // track: int64 => void
        readonly insert_key: Signal // offset: float64 => void
        readonly select_key: Signal // index: int64, single: boolean, track: int64 => void
        readonly clear_selection: Signal //  => void
        readonly close_request: Signal //  => void
        readonly move_selection_begin: Signal //  => void
        readonly move_selection: Signal // offset: float64 => void
        readonly move_selection_commit: Signal //  => void
        readonly move_selection_cancel: Signal //  => void
    }
    /** Container for [Animation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationlibrary.html  
     */
    class AnimationLibrary extends Resource {
        constructor(identifier?: any)
        /** Adds the [param animation] to the library, accessible by the key [param name]. */
        add_animation(name: StringName, animation: Animation): Error
        
        /** Removes the [Animation] with the key [param name]. */
        remove_animation(name: StringName): void
        
        /** Changes the key of the [Animation] associated with the key [param name] to [param newname]. */
        rename_animation(name: StringName, newname: StringName): void
        
        /** Returns `true` if the library stores an [Animation] with [param name] as the key. */
        has_animation(name: StringName): boolean
        
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, `null` is returned and an error is logged. */
        get_animation(name: StringName): Animation
        
        /** Returns the keys for the [Animation]s stored in the library. */
        get_animation_list(): Array
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        get _data(): Dictionary
        set _data(value: Dictionary)
        
        /** Emitted when an [Animation] is added, under the key [param name]. */
        readonly animation_added: Signal // name: StringName => void
        
        /** Emitted when an [Animation] stored with the key [param name] is removed. */
        readonly animation_removed: Signal // name: StringName => void
        
        /** Emitted when the key for an [Animation] is changed, from [param name] to [param to_name]. */
        readonly animation_renamed: Signal // name: StringName, to_name: StringName => void
        
        /** Emitted when there's a change in one of the animations, e.g. tracks are added, moved or have changed paths. [param name] is the key of the animation that was changed.  
         *  See also [signal Resource.changed], which this acts as a relay for.  
         */
        readonly animation_changed: Signal // name: StringName => void
    }
    class AnimationLibraryEditor extends AcceptDialog {
        constructor(identifier?: any)
        _update_editor(mixer: Object): void
        readonly update_editor: Signal //  => void
    }
    namespace AnimationMixer {
        enum AnimationCallbackModeProcess {
            /** Process animation during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). This is especially useful when animating physics bodies. */
            ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS = 0,
            
            /** Process animation during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            ANIMATION_CALLBACK_MODE_PROCESS_IDLE = 1,
            
            /** Do not process animation. Use [method advance] to process the animation manually. */
            ANIMATION_CALLBACK_MODE_PROCESS_MANUAL = 2,
        }
        enum AnimationCallbackModeMethod {
            /** Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing. */
            ANIMATION_CALLBACK_MODE_METHOD_DEFERRED = 0,
            
            /** Make method calls immediately when reached in the animation. */
            ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE = 1,
        }
    }
    /** Base class for [AnimationPlayer] and [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationmixer.html  
     */
    class AnimationMixer extends Node {
        constructor(identifier?: any)
        /** A virtual function for processing after key getting during playback. */
        /* gdvirtual */ _post_process_key_value(animation: Animation, track: int64, value: any, object: Object, object_idx: int64): void
        
        /** Adds [param library] to the animation player, under the key [param name]. */
        add_animation_library(name: StringName, library: AnimationLibrary): Error
        
        /** Removes the [AnimationLibrary] associated with the key [param name]. */
        remove_animation_library(name: StringName): void
        
        /** Moves the [AnimationLibrary] associated with the key [param name] to the key [param newname]. */
        rename_animation_library(name: StringName, newname: StringName): void
        
        /** Returns `true` if the [AnimationPlayer] stores an [AnimationLibrary] with key [param name]. */
        has_animation_library(name: StringName): boolean
        
        /** Returns the first [AnimationLibrary] with key [param name] or `null` if not found.  
         *  To get the [AnimationPlayer]'s global animation library, use `get_animation_library("")`.  
         */
        get_animation_library(name: StringName): AnimationLibrary
        
        /** Returns the list of stored library keys. */
        get_animation_library_list(): Array
        
        /** Returns `true` if the [AnimationPlayer] stores an [Animation] with key [param name]. */
        has_animation(name: StringName): boolean
        
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, `null` is returned and an error is logged. */
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
        set_audio_max_polyphony(max_polyphony: int64): void
        get_audio_max_polyphony(): int64
        set_root_motion_track(path: NodePath): void
        get_root_motion_track(): NodePath
        
        /** Retrieve the motion delta of position with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_POSITION_3D], returns `Vector3(0, 0, 0)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying position to [CharacterBody3D]:  
         *    
         *  By using this in combination with [method get_root_motion_position_accumulator], you can apply the root motion position more correctly to account for the rotation of the node.  
         *    
         */
        get_root_motion_position(): Vector3
        
        /** Retrieve the motion delta of rotation with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_ROTATION_3D], returns `Quaternion(0, 0, 0, 1)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying rotation to [CharacterBody3D]:  
         *    
         */
        get_root_motion_rotation(): Quaternion
        
        /** Retrieve the motion delta of scale with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_SCALE_3D], returns `Vector3(0, 0, 0)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying scale to [CharacterBody3D]:  
         *    
         */
        get_root_motion_scale(): Vector3
        
        /** Retrieve the blended value of the position tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  This is useful in cases where you want to respect the initial key values of the animation.  
         *  For example, if an animation with only one key `Vector3(0, 0, 0)` is played in the previous frame and then an animation with only one key `Vector3(1, 0, 1)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        get_root_motion_position_accumulator(): Vector3
        
        /** Retrieve the blended value of the rotation tracks with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.  
         *  This is necessary to apply the root motion position correctly, taking rotation into account. See also [method get_root_motion_position].  
         *  Also, this is useful in cases where you want to respect the initial key values of the animation.  
         *  For example, if an animation with only one key `Quaternion(0, 0, 0, 1)` is played in the previous frame and then an animation with only one key `Quaternion(0, 0.707, 0, 0.707)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        get_root_motion_rotation_accumulator(): Quaternion
        
        /** Retrieve the blended value of the scale tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  For example, if an animation with only one key `Vector3(1, 1, 1)` is played in the previous frame and then an animation with only one key `Vector3(2, 2, 2)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        get_root_motion_scale_accumulator(): Vector3
        
        /** [AnimationMixer] caches animated nodes. It may not notice if a node disappears; [method clear_caches] forces it to update the cache again. */
        clear_caches(): void
        
        /** Manually advance the animations by the specified time (in seconds). */
        advance(delta: float64): void
        set_reset_on_save_enabled(enabled: boolean): void
        is_reset_on_save_enabled(): boolean
        _reset(): void
        _restore(backup: any /*AnimatedValuesBackup*/): void
        
        /** Returns the key of [param animation] or an empty [StringName] if not found. */
        find_animation(animation: Animation): StringName
        
        /** Returns the key for the [AnimationLibrary] that contains [param animation] or an empty [StringName] if not found. */
        find_animation_library(animation: Animation): StringName
        
        /** If `true`, the [AnimationMixer] will be processing. */
        get active(): boolean
        set active(value: boolean)
        
        /** If `true`, the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value (`0` or a `"RESET"` animation if present).  
         *  This means that if the total amount of blending is `0.0`, the result is equal to the `"RESET"` animation.  
         *  If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.  
         *  If `false`, The blend does not use the deterministic algorithm. The total weight is normalized and always `1.0`. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.  
         *      
         *  **Note:** In [AnimationTree], the blending with [AnimationNodeAdd2], [AnimationNodeAdd3], [AnimationNodeSub2] or the weight greater than `1.0` may produce unexpected results.  
         *  For example, if [AnimationNodeAdd2] blends two nodes with the amount `1.0`, then total weight is `2.0` but it will be normalized to make the total amount `1.0` and the result will be equal to [AnimationNodeBlend2] with the amount `0.5`.  
         */
        get deterministic(): boolean
        set deterministic(value: boolean)
        
        /** This is used by the editor. If set to `true`, the scene will be saved with the effects of the reset animation (the animation with the key `"RESET"`) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.  
         *  This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.  
         */
        get reset_on_save(): boolean
        set reset_on_save(value: boolean)
        
        /** The node from which node path references will travel. */
        get root_node(): NodePath
        set root_node(value: NodePath)
        
        /** The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. To specify a track that controls properties or bones, append its name after the path, separated by `":"`. For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.  
         *  If the track has type [constant Animation.TYPE_POSITION_3D], [constant Animation.TYPE_ROTATION_3D] or [constant Animation.TYPE_SCALE_3D] the transformation will be canceled visually, and the animation will appear to stay in place. See also [method get_root_motion_position], [method get_root_motion_rotation], [method get_root_motion_scale] and [RootMotionView].  
         */
        get root_motion_track(): NodePath
        set root_motion_track(value: NodePath)
        
        /** The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.  
         *  For example, if this value is `32` and the animation has two audio tracks, the two [AudioStreamPlayer]s assigned can play simultaneously up to `32` voices each.  
         */
        get audio_max_polyphony(): int64
        set audio_max_polyphony(value: int64)
        
        /** The process notification in which to update animations. */
        get callback_mode_process(): int64
        set callback_mode_process(value: int64)
        
        /** The call mode to use for Call Method tracks. */
        get callback_mode_method(): int64
        set callback_mode_method(value: int64)
        
        /** Editor only. Notifies when the property have been updated to update dummy [AnimationPlayer] in animation player editor. */
        readonly mixer_updated: Signal //  => void
        
        /** Notifies when an animation list is changed. */
        readonly animation_list_changed: Signal //  => void
        
        /** Notifies when the animation libraries have changed. */
        readonly animation_libraries_updated: Signal //  => void
        
        /** Notifies when an animation finished playing.  
         *      
         *  **Note:** This signal is not emitted if an animation is looping.  
         */
        readonly animation_finished: Signal // anim_name: StringName => void
        
        /** Notifies when an animation starts playing. */
        readonly animation_started: Signal // anim_name: StringName => void
        
        /** Notifies when the caches have been cleared, either automatically, or manually via [method clear_caches]. */
        readonly caches_cleared: Signal //  => void
    }
    namespace AnimationNode {
        enum FilterAction {
            /** Do not use filtering. */
            FILTER_IGNORE = 0,
            
            /** Paths matching the filter will be allowed to pass. */
            FILTER_PASS = 1,
            
            /** Paths matching the filter will be discarded. */
            FILTER_STOP = 2,
            
            /** Paths matching the filter will be blended (by the blend value). */
            FILTER_BLEND = 3,
        }
    }
    /** Base class for [AnimationTree] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnode.html  
     */
    class AnimationNode extends Resource {
        constructor(identifier?: any)
        /** When inheriting from [AnimationRootNode], implement this virtual method to return all child animation nodes in order as a `name: node` dictionary. */
        /* gdvirtual */ _get_child_nodes(): Dictionary
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return a list of the properties on this animation node. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. Format is similar to [method Object.get_property_list]. */
        /* gdvirtual */ _get_parameter_list(): Array
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return a child animation node by its [param name]. */
        /* gdvirtual */ _get_child_by_name(name: StringName): AnimationNode
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return the default value of a [param parameter]. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        /* gdvirtual */ _get_parameter_default_value(parameter: StringName): void
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return whether the [param parameter] is read-only. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        /* gdvirtual */ _is_parameter_read_only(parameter: StringName): boolean
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to run some code when this animation node is processed. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute.  
         *  Here, call the [method blend_input], [method blend_node] or [method blend_animation] functions. You can also use [method get_parameter] and [method set_parameter] to modify local memory.  
         *  This function should return the time left for the current animation to finish (if unsure, pass the value from the main blend being called).  
         */
        /* gdvirtual */ _process(time: float64, seek: boolean, is_external_seeking: boolean, test_only: boolean): float64
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to override the text caption for this animation node. */
        /* gdvirtual */ _get_caption(): string
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return whether the blend tree editor should display filter editing on this animation node. */
        /* gdvirtual */ _has_filter(): boolean
        
        /** Adds an input to the animation node. This is only useful for animation nodes created for use in an [AnimationNodeBlendTree]. If the addition fails, returns `false`. */
        add_input(name: string): boolean
        
        /** Removes an input, call this only when inactive. */
        remove_input(index: int64): void
        
        /** Sets the name of the input at the given [param input] index. If the setting fails, returns `false`. */
        set_input_name(input: int64, name: string): boolean
        
        /** Gets the name of an input by index. */
        get_input_name(input: int64): string
        
        /** Amount of inputs in this animation node, only useful for animation nodes that go into [AnimationNodeBlendTree]. */
        get_input_count(): int64
        
        /** Returns the input index which corresponds to [param name]. If not found, returns `-1`. */
        find_input(name: string): int64
        
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
        blend_animation(animation: StringName, time: float64, delta: float64, seeked: boolean, is_external_seeking: boolean, blend: float64, looped_flag: Animation.LoopedFlag = 0): void
        
        /** Blend another animation node (in case this animation node contains child animation nodes). This function is only useful if you inherit from [AnimationRootNode] instead, otherwise editors will not display your animation node for addition. */
        blend_node(name: StringName, node: AnimationNode, time: float64, seek: boolean, is_external_seeking: boolean, blend: float64, filter: AnimationNode.FilterAction = 0, sync: boolean = true, test_only: boolean = false): float64
        
        /** Blend an input. This is only useful for animation nodes created for an [AnimationNodeBlendTree]. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute. A filter mode may be optionally passed (see [enum FilterAction] for options). */
        blend_input(input_index: int64, time: float64, seek: boolean, is_external_seeking: boolean, blend: float64, filter: AnimationNode.FilterAction = 0, sync: boolean = true, test_only: boolean = false): float64
        
        /** Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes. */
        set_parameter(name: StringName, value: any): void
        
        /** Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        get_parameter(name: StringName): any
        
        /** If `true`, filtering is enabled. */
        get filter_enabled(): boolean
        set filter_enabled(value: boolean)
        get filters(): Array
        set filters(value: Array)
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], [AnimationNodeBlendTree] and [AnimationNodeTransition]. */
        readonly tree_changed: Signal //  => void
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation node names changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree]. */
        readonly animation_node_renamed: Signal // object_id: int64, old_name: string, new_name: string => void
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes removes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree]. */
        readonly animation_node_removed: Signal // object_id: int64, name: string => void
    }
    /** Blends two animations additively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeadd2.html  
     */
    class AnimationNodeAdd2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Blends two of three animations additively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeadd3.html  
     */
    class AnimationNodeAdd3 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    namespace AnimationNodeAnimation {
        enum PlayMode {
            /** Plays animation in forward direction. */
            PLAY_MODE_FORWARD = 0,
            
            /** Plays animation in backward direction. */
            PLAY_MODE_BACKWARD = 1,
        }
    }
    /** An input animation for an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeanimation.html  
     */
    class AnimationNodeAnimation extends AnimationRootNode {
        constructor(identifier?: any)
        set_animation(name: StringName): void
        get_animation(): StringName
        set_play_mode(mode: AnimationNodeAnimation.PlayMode): void
        get_play_mode(): AnimationNodeAnimation.PlayMode
        
        /** Animation to use as an output. It is one of the animations provided by [member AnimationTree.anim_player]. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** Determines the playback direction of the animation. */
        get play_mode(): int64
        set play_mode(value: int64)
    }
    /** Blends two animations linearly inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeblend2.html  
     */
    class AnimationNodeBlend2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Blends two of three animations linearly inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeblend3.html  
     */
    class AnimationNodeBlend3 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    namespace AnimationNodeBlendSpace1D {
        enum BlendMode {
            /** The interpolation between animations is linear. */
            BLEND_MODE_INTERPOLATED = 0,
            
            /** The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations. */
            BLEND_MODE_DISCRETE = 1,
            
            /** Similar to [constant BLEND_MODE_DISCRETE], but starts the new animation at the last animation's playback position. */
            BLEND_MODE_DISCRETE_CARRY = 2,
        }
    }
    /** A set of [AnimationRootNode]s placed on a virtual axis, crossfading between the two adjacent ones. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeblendspace1d.html  
     */
    class AnimationNodeBlendSpace1D extends AnimationRootNode {
        constructor(identifier?: any)
        /** Adds a new point that represents a [param node] on the virtual axis at a given position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_blend_point(node: AnimationRootNode, pos: float64, at_index: int64 = -1): void
        
        /** Updates the position of the point at index [param point] on the blend axis. */
        set_blend_point_position(point: int64, pos: float64): void
        
        /** Returns the position of the point at index [param point]. */
        get_blend_point_position(point: int64): float64
        
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        set_blend_point_node(point: int64, node: AnimationRootNode): void
        
        /** Returns the [AnimationNode] referenced by the point at index [param point]. */
        get_blend_point_node(point: int64): AnimationRootNode
        
        /** Removes the point at index [param point] from the blend axis. */
        remove_blend_point(point: int64): void
        
        /** Returns the number of points on the blend axis. */
        get_blend_point_count(): int64
        set_min_space(min_space: float64): void
        get_min_space(): float64
        set_max_space(max_space: float64): void
        get_max_space(): float64
        set_snap(snap: float64): void
        get_snap(): float64
        set_value_label(text: string): void
        get_value_label(): string
        set_blend_mode(mode: AnimationNodeBlendSpace1D.BlendMode): void
        get_blend_mode(): AnimationNodeBlendSpace1D.BlendMode
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        _add_blend_point(index: int64, node: AnimationRootNode): void
        
        /** The blend space's axis's lower limit for the points' position. See [method add_blend_point]. */
        get min_space(): float64
        set min_space(value: float64)
        
        /** The blend space's axis's upper limit for the points' position. See [method add_blend_point]. */
        get max_space(): float64
        set max_space(value: float64)
        
        /** Position increment to snap to when moving a point on the axis. */
        get snap(): float64
        set snap(value: float64)
        
        /** Label of the virtual axis of the blend space. */
        get value_label(): string
        set value_label(value: string)
        
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        get blend_mode(): int64
        set blend_mode(value: int64)
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
    }
    class AnimationNodeBlendSpace1DEditor extends AnimationTreeNodeEditorPlugin {
        constructor(identifier?: any)
        _update_space(): void
        _update_tool_erase(): void
        _update_edited_point_pos(): void
    }
    namespace AnimationNodeBlendSpace2D {
        enum BlendMode {
            /** The interpolation between animations is linear. */
            BLEND_MODE_INTERPOLATED = 0,
            
            /** The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations. */
            BLEND_MODE_DISCRETE = 1,
            
            /** Similar to [constant BLEND_MODE_DISCRETE], but starts the new animation at the last animation's playback position. */
            BLEND_MODE_DISCRETE_CARRY = 2,
        }
    }
    /** A set of [AnimationRootNode]s placed on 2D coordinates, crossfading between the three adjacent ones. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeblendspace2d.html  
     */
    class AnimationNodeBlendSpace2D extends AnimationRootNode {
        constructor(identifier?: any)
        /** Adds a new point that represents a [param node] at the position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_blend_point(node: AnimationRootNode, pos: Vector2, at_index: int64 = -1): void
        
        /** Updates the position of the point at index [param point] on the blend axis. */
        set_blend_point_position(point: int64, pos: Vector2): void
        
        /** Returns the position of the point at index [param point]. */
        get_blend_point_position(point: int64): Vector2
        
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        set_blend_point_node(point: int64, node: AnimationRootNode): void
        
        /** Returns the [AnimationRootNode] referenced by the point at index [param point]. */
        get_blend_point_node(point: int64): AnimationRootNode
        
        /** Removes the point at index [param point] from the blend space. */
        remove_blend_point(point: int64): void
        
        /** Returns the number of points in the blend space. */
        get_blend_point_count(): int64
        
        /** Creates a new triangle using three points [param x], [param y], and [param z]. Triangles can overlap. You can insert the triangle at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        add_triangle(x: int64, y: int64, z: int64, at_index: int64 = -1): void
        
        /** Returns the position of the point at index [param point] in the triangle of index [param triangle]. */
        get_triangle_point(triangle: int64, point: int64): int64
        
        /** Removes the triangle at index [param triangle] from the blend space. */
        remove_triangle(triangle: int64): void
        
        /** Returns the number of triangles in the blend space. */
        get_triangle_count(): int64
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
        _add_blend_point(index: int64, node: AnimationRootNode): void
        _set_triangles(triangles: PackedInt32Array): void
        _get_triangles(): PackedInt32Array
        set_auto_triangles(enable: boolean): void
        get_auto_triangles(): boolean
        set_blend_mode(mode: AnimationNodeBlendSpace2D.BlendMode): void
        get_blend_mode(): AnimationNodeBlendSpace2D.BlendMode
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        _update_triangles(): void
        
        /** If `true`, the blend space is triangulated automatically. The mesh updates every time you add or remove points with [method add_blend_point] and [method remove_blend_point]. */
        get auto_triangles(): boolean
        set auto_triangles(value: boolean)
        get triangles(): PackedInt32Array
        set triangles(value: PackedInt32Array)
        
        /** The blend space's X and Y axes' lower limit for the points' position. See [method add_blend_point]. */
        get min_space(): Vector2
        set min_space(value: Vector2)
        
        /** The blend space's X and Y axes' upper limit for the points' position. See [method add_blend_point]. */
        get max_space(): Vector2
        set max_space(value: Vector2)
        
        /** Position increment to snap to when moving a point. */
        get snap(): Vector2
        set snap(value: Vector2)
        
        /** Name of the blend space's X axis. */
        get x_label(): string
        set x_label(value: string)
        
        /** Name of the blend space's Y axis. */
        get y_label(): string
        set y_label(value: string)
        
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        get blend_mode(): int64
        set blend_mode(value: int64)
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
        
        /** Emitted every time the blend space's triangles are created, removed, or when one of their vertices changes position. */
        readonly triangles_updated: Signal //  => void
    }
    class AnimationNodeBlendSpace2DEditor extends AnimationTreeNodeEditorPlugin {
        constructor(identifier?: any)
        _update_space(): void
        _update_tool_erase(): void
        _update_edited_point_pos(): void
    }
    /** A sub-tree of many type [AnimationNode]s used for complex animations. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeblendtree.html  
     */
    class AnimationNodeBlendTree extends AnimationRootNode {
        /** The connection was successful. */
        static readonly CONNECTION_OK = 0
        
        /** The input node is `null`. */
        static readonly CONNECTION_ERROR_NO_INPUT = 1
        
        /** The specified input port is out of range. */
        static readonly CONNECTION_ERROR_NO_INPUT_INDEX = 2
        
        /** The output node is `null`. */
        static readonly CONNECTION_ERROR_NO_OUTPUT = 3
        
        /** Input and output nodes are the same. */
        static readonly CONNECTION_ERROR_SAME_NODE = 4
        
        /** The specified connection already exists. */
        static readonly CONNECTION_ERROR_CONNECTION_EXISTS = 5
        constructor(identifier?: any)
        
        /** Adds an [AnimationNode] at the given [param position]. The [param name] is used to identify the created sub animation node later. */
        add_node(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        
        /** Returns the sub animation node with the specified [param name]. */
        get_node(name: StringName): AnimationNode
        
        /** Removes a sub animation node. */
        remove_node(name: StringName): void
        
        /** Changes the name of a sub animation node. */
        rename_node(name: StringName, new_name: StringName): void
        
        /** Returns `true` if a sub animation node with specified [param name] exists. */
        has_node(name: StringName): boolean
        
        /** Connects the output of an [AnimationNode] as input for another [AnimationNode], at the input port specified by [param input_index]. */
        connect_node(input_node: StringName, input_index: int64, output_node: StringName): void
        
        /** Disconnects the animation node connected to the specified input. */
        disconnect_node(input_node: StringName, input_index: int64): void
        
        /** Modifies the position of a sub animation node. */
        set_node_position(name: StringName, position: Vector2): void
        
        /** Returns the position of the sub animation node with the specified [param name]. */
        get_node_position(name: StringName): Vector2
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        
        /** The global offset of all sub animation nodes. */
        get graph_offset(): Vector2
        set graph_offset(value: Vector2)
        
        /** Emitted when the input port information is changed. */
        readonly node_changed: Signal // node_name: StringName => void
    }
    class AnimationNodeBlendTreeEditor extends AnimationTreeNodeEditorPlugin {
        constructor(identifier?: any)
        update_graph(): void
        _update_filters(_unnamed_arg0: AnimationNode): boolean
    }
    namespace AnimationNodeOneShot {
        enum OneShotRequest {
            /** The default state of the request. Nothing is done. */
            ONE_SHOT_REQUEST_NONE = 0,
            
            /** The request to play the animation connected to "shot" port. */
            ONE_SHOT_REQUEST_FIRE = 1,
            
            /** The request to stop the animation connected to "shot" port. */
            ONE_SHOT_REQUEST_ABORT = 2,
            
            /** The request to fade out the animation connected to "shot" port. */
            ONE_SHOT_REQUEST_FADE_OUT = 3,
        }
        enum MixMode {
            /** Blends two animations. See also [AnimationNodeBlend2]. */
            MIX_MODE_BLEND = 0,
            
            /** Blends two animations additively. See also [AnimationNodeAdd2]. */
            MIX_MODE_ADD = 1,
        }
    }
    /** Plays an animation once in an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeoneshot.html  
     */
    class AnimationNodeOneShot extends AnimationNodeSync {
        constructor(identifier?: any)
        set_fadein_time(time: float64): void
        get_fadein_time(): float64
        set_fadein_curve(curve: Curve): void
        get_fadein_curve(): Curve
        set_fadeout_time(time: float64): void
        get_fadeout_time(): float64
        set_fadeout_curve(curve: Curve): void
        get_fadeout_curve(): Curve
        set_autorestart(active: boolean): void
        has_autorestart(): boolean
        set_autorestart_delay(time: float64): void
        get_autorestart_delay(): float64
        set_autorestart_random_delay(time: float64): void
        get_autorestart_random_delay(): float64
        set_mix_mode(mode: AnimationNodeOneShot.MixMode): void
        get_mix_mode(): AnimationNodeOneShot.MixMode
        
        /** The blend type. */
        get mix_mode(): int64
        set mix_mode(value: int64)
        
        /** The fade-in duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation. */
        get fadein_time(): float64
        set fadein_time(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        get fadein_curve(): Curve
        set fadein_curve(value: Curve)
        
        /** The fade-out duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation. */
        get fadeout_time(): float64
        set fadeout_time(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        get fadeout_curve(): Curve
        set fadeout_curve(value: Curve)
        
        /** If `true`, the sub-animation will restart automatically after finishing.  
         *  In other words, to start auto restarting, the animation must be played once with the [constant ONE_SHOT_REQUEST_FIRE] request. The [constant ONE_SHOT_REQUEST_ABORT] request stops the auto restarting, but it does not disable the [member autorestart] itself. So, the [constant ONE_SHOT_REQUEST_FIRE] request will start auto restarting again.  
         */
        get autorestart(): boolean
        set autorestart(value: boolean)
        
        /** The delay after which the automatic restart is triggered, in seconds. */
        get autorestart_delay(): float64
        set autorestart_delay(value: float64)
        
        /** If [member autorestart] is `true`, a random additional delay (in seconds) between 0 and this value will be added to [member autorestart_delay]. */
        get autorestart_random_delay(): float64
        set autorestart_random_delay(value: float64)
    }
    /** The animation output node of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodeoutput.html  
     */
    class AnimationNodeOutput extends AnimationNode {
        constructor(identifier?: any)
    }
    namespace AnimationNodeStateMachine {
        enum StateMachineType {
            /** Seeking to the beginning is treated as playing from the start state. Transition to the end state is treated as exiting the state machine. */
            STATE_MACHINE_TYPE_ROOT = 0,
            
            /** Seeking to the beginning is treated as seeking to the beginning of the animation in the current state. Transition to the end state, or the absence of transitions in each state, is treated as exiting the state machine. */
            STATE_MACHINE_TYPE_NESTED = 1,
            
            /** This is a grouped state machine that can be controlled from a parent state machine. It does not work independently. There must be a state machine with [member state_machine_type] of [constant STATE_MACHINE_TYPE_ROOT] or [constant STATE_MACHINE_TYPE_NESTED] in the parent or ancestor. */
            STATE_MACHINE_TYPE_GROUPED = 2,
        }
    }
    /** A state machine with multiple [AnimationRootNode]s, used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodestatemachine.html  
     */
    class AnimationNodeStateMachine extends AnimationRootNode {
        constructor(identifier?: any)
        /** Adds a new animation node to the graph. The [param position] is used for display in the editor. */
        add_node(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        replace_node(name: StringName, node: AnimationNode): void
        
        /** Returns the animation node with the given name. */
        get_node(name: StringName): AnimationNode
        
        /** Deletes the given animation node from the graph. */
        remove_node(name: StringName): void
        
        /** Renames the given animation node. */
        rename_node(name: StringName, new_name: StringName): void
        
        /** Returns `true` if the graph contains the given animation node. */
        has_node(name: StringName): boolean
        
        /** Returns the given animation node's name. */
        get_node_name(node: AnimationNode): StringName
        
        /** Sets the animation node's coordinates. Used for display in the editor. */
        set_node_position(name: StringName, position: Vector2): void
        
        /** Returns the given animation node's coordinates. Used for display in the editor. */
        get_node_position(name: StringName): Vector2
        
        /** Returns `true` if there is a transition between the given animation nodes. */
        has_transition(from: StringName, to: StringName): boolean
        
        /** Adds a transition between the given animation nodes. */
        add_transition(from: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void
        
        /** Returns the given transition. */
        get_transition(idx: int64): AnimationNodeStateMachineTransition
        
        /** Returns the given transition's start node. */
        get_transition_from(idx: int64): StringName
        
        /** Returns the given transition's end node. */
        get_transition_to(idx: int64): StringName
        
        /** Returns the number of connections in the graph. */
        get_transition_count(): int64
        
        /** Deletes the given transition by index. */
        remove_transition_by_index(idx: int64): void
        
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
        get state_machine_type(): int64
        set state_machine_type(value: int64)
        
        /** If `true`, allows teleport to the self state with [method AnimationNodeStateMachinePlayback.travel]. When the reset option is enabled in [method AnimationNodeStateMachinePlayback.travel], the animation is restarted. If `false`, nothing happens on the teleportation to the self state. */
        get allow_transition_to_self(): boolean
        set allow_transition_to_self(value: boolean)
        
        /** If `true`, treat the cross-fade to the start and end nodes as a blend with the RESET animation.  
         *  In most cases, when additional cross-fades are performed in the parent [AnimationNode] of the state machine, setting this property to `false` and matching the cross-fade time of the parent [AnimationNode] and the state machine's start node and end node gives good results.  
         */
        get reset_ends(): boolean
        set reset_ends(value: boolean)
    }
    class AnimationNodeStateMachineEditor extends AnimationTreeNodeEditorPlugin {
        constructor(identifier?: any)
        _update_graph(): void
        _open_editor(_unnamed_arg0: string): void
        _connect_to(_unnamed_arg0: int64): void
        _stop_connecting(): void
        _delete_selected(): void
        _delete_all(): void
        _delete_tree_draw(): void
    }
    /** Provides playback control for an [AnimationNodeStateMachine].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodestatemachineplayback.html  
     */
    class AnimationNodeStateMachinePlayback extends Resource {
        constructor(identifier?: any)
        /** Transitions from the current state to another one, following the shortest path.  
         *  If the path does not connect from the current state, the animation will play after the state teleports.  
         *  If [param reset_on_teleport] is `true`, the animation is played from the beginning when the travel cause a teleportation.  
         */
        travel(to_node: StringName, reset_on_teleport: boolean = true): void
        
        /** Starts playing the given animation.  
         *  If [param reset] is `true`, the animation is played from the beginning.  
         */
        start(node: StringName, reset: boolean = true): void
        
        /** If there is a next path by travel or auto advance, immediately transitions from the current state to the next state. */
        next(): void
        
        /** Stops the currently playing animation. */
        stop(): void
        
        /** Returns `true` if an animation is playing. */
        is_playing(): boolean
        
        /** Returns the currently playing animation state.  
         *      
         *  **Note:** When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.  
         */
        get_current_node(): StringName
        
        /** Returns the playback position within the current animation state. */
        get_current_play_position(): float64
        
        /** Returns the current state length.  
         *      
         *  **Note:** It is possible that any [AnimationRootNode] can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.  
         */
        get_current_length(): float64
        
        /** Returns the starting state of currently fading animation. */
        get_fading_from_node(): StringName
        
        /** Returns the current travel path as computed internally by the A* algorithm. */
        get_travel_path(): Array
    }
    namespace AnimationNodeStateMachineTransition {
        enum SwitchMode {
            /** Switch to the next state immediately. The current state will end and blend into the beginning of the new one. */
            SWITCH_MODE_IMMEDIATE = 0,
            
            /** Switch to the next state immediately, but will seek the new state to the playback position of the old state. */
            SWITCH_MODE_SYNC = 1,
            
            /** Wait for the current state playback to end, then switch to the beginning of the next state animation. */
            SWITCH_MODE_AT_END = 2,
        }
        enum AdvanceMode {
            /** Don't use this transition. */
            ADVANCE_MODE_DISABLED = 0,
            
            /** Only use this transition during [method AnimationNodeStateMachinePlayback.travel]. */
            ADVANCE_MODE_ENABLED = 1,
            
            /** Automatically use this transition if the [member advance_condition] and [member advance_expression] checks are true (if assigned). */
            ADVANCE_MODE_AUTO = 2,
        }
    }
    /** A transition within an [AnimationNodeStateMachine] connecting two [AnimationRootNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodestatemachinetransition.html  
     */
    class AnimationNodeStateMachineTransition extends Resource {
        constructor(identifier?: any)
        set_switch_mode(mode: AnimationNodeStateMachineTransition.SwitchMode): void
        get_switch_mode(): AnimationNodeStateMachineTransition.SwitchMode
        set_advance_mode(mode: AnimationNodeStateMachineTransition.AdvanceMode): void
        get_advance_mode(): AnimationNodeStateMachineTransition.AdvanceMode
        set_advance_condition(name: StringName): void
        get_advance_condition(): StringName
        set_xfade_time(secs: float64): void
        get_xfade_time(): float64
        set_xfade_curve(curve: Curve): void
        get_xfade_curve(): Curve
        set_reset(reset: boolean): void
        is_reset(): boolean
        set_priority(priority: int64): void
        get_priority(): int64
        set_advance_expression(text: string): void
        get_advance_expression(): string
        
        /** The time to cross-fade between this state and the next. */
        get xfade_time(): float64
        set xfade_time(value: float64)
        
        /** Ease curve for better control over cross-fade between this state and the next. */
        get xfade_curve(): Curve
        set xfade_curve(value: Curve)
        
        /** If `true`, the destination animation is played back from the beginning when switched. */
        get reset(): boolean
        set reset(value: boolean)
        
        /** Lower priority transitions are preferred when travelling through the tree via [method AnimationNodeStateMachinePlayback.travel] or [member advance_mode] is set to [constant ADVANCE_MODE_AUTO]. */
        get priority(): int64
        set priority(value: int64)
        
        /** The transition type. */
        get switch_mode(): int64
        set switch_mode(value: int64)
        
        /** Determines whether the transition should disabled, enabled when using [method AnimationNodeStateMachinePlayback.travel], or traversed automatically if the [member advance_condition] and [member advance_expression] checks are true (if assigned). */
        get advance_mode(): int64
        set advance_mode(value: int64)
        
        /** Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the [AnimationTree] that can be controlled from code (see [url=https://docs.godotengine.org/en/4.2/tutorials/animation/animation_tree.html#controlling-from-code]Using AnimationTree[/url]). For example, if [member AnimationTree.tree_root] is an [AnimationNodeStateMachine] and [member advance_condition] is set to `"idle"`:  
         *    
         */
        get advance_condition(): StringName
        set advance_condition(value: StringName)
        
        /** Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code. */
        get advance_expression(): string
        set advance_expression(value: string)
        
        /** Emitted when [member advance_condition] is changed. */
        readonly advance_condition_changed: Signal //  => void
    }
    /** Blends two animations subtractively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodesub2.html  
     */
    class AnimationNodeSub2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Base class for [AnimationNode]s with more than two input ports that must be synchronized.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodesync.html  
     */
    class AnimationNodeSync extends AnimationNode {
        constructor(identifier?: any)
        set_use_sync(enable: boolean): void
        is_using_sync(): boolean
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
    }
    /** A time-scaling animation node used in [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodetimescale.html  
     */
    class AnimationNodeTimeScale extends AnimationNode {
        constructor(identifier?: any)
    }
    /** A time-seeking animation node used in [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodetimeseek.html  
     */
    class AnimationNodeTimeSeek extends AnimationNode {
        constructor(identifier?: any)
    }
    /** A transition within an [AnimationTree] connecting two [AnimationNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationnodetransition.html  
     */
    class AnimationNodeTransition extends AnimationNodeSync {
        constructor(identifier?: any)
        set_input_count(input_count: int64): void
        
        /** Enables or disables auto-advance for the given [param input] index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first. */
        set_input_as_auto_advance(input: int64, enable: boolean): void
        
        /** Returns `true` if auto-advance is enabled for the given [param input] index. */
        is_input_set_as_auto_advance(input: int64): boolean
        
        /** If `true`, the destination animation is restarted when the animation transitions. */
        set_input_reset(input: int64, enable: boolean): void
        
        /** Returns whether the animation restarts when the animation transitions from the other animation. */
        is_input_reset(input: int64): boolean
        set_xfade_time(time: float64): void
        get_xfade_time(): float64
        set_xfade_curve(curve: Curve): void
        get_xfade_curve(): Curve
        set_allow_transition_to_self(enable: boolean): void
        is_allow_transition_to_self(): boolean
        
        /** Cross-fading time (in seconds) between each animation connected to the inputs. */
        get xfade_time(): float64
        set xfade_time(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
        get xfade_curve(): Curve
        set xfade_curve(value: Curve)
        
        /** If `true`, allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If `false`, nothing happens on the transition to the self state. */
        get allow_transition_to_self(): boolean
        set allow_transition_to_self(value: boolean)
        
        /** The number of enabled input ports for this animation node. */
        get input_count(): any /*Inputs,input_*/
        set input_count(value: any /*Inputs,input_*/)
    }
    namespace AnimationPlayer {
        enum AnimationProcessCallback {
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS]. */
            ANIMATION_PROCESS_PHYSICS = 0,
            
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE]. */
            ANIMATION_PROCESS_IDLE = 1,
            
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL]. */
            ANIMATION_PROCESS_MANUAL = 2,
        }
        enum AnimationMethodCallMode {
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_DEFERRED]. */
            ANIMATION_METHOD_CALL_DEFERRED = 0,
            
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE]. */
            ANIMATION_METHOD_CALL_IMMEDIATE = 1,
        }
    }
    /** A node used for animation playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationplayer.html  
     */
    class AnimationPlayer extends AnimationMixer {
        constructor(identifier?: any)
        /** Triggers the [param animation_to] animation when the [param animation_from] animation completes. */
        animation_set_next(animation_from: StringName, animation_to: StringName): void
        
        /** Returns the key of the animation which is queued to play after the [param animation_from] animation. */
        animation_get_next(animation_from: StringName): StringName
        
        /** Specifies a blend time (in seconds) between two animations, referenced by their keys. */
        set_blend_time(animation_from: StringName, animation_to: StringName, sec: float64): void
        
        /** Returns the blend time (in seconds) between two animations, referenced by their keys. */
        get_blend_time(animation_from: StringName, animation_to: StringName): float64
        set_default_blend_time(sec: float64): void
        get_default_blend_time(): float64
        
        /** Plays the animation with key [param name]. Custom blend times and speed can be set.  
         *  The [param from_end] option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  The [AnimationPlayer] keeps track of its current or last played animation with [member assigned_animation]. If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         *      
         *  **Note:** The animation will be updated the next time the [AnimationPlayer] is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.  
         */
        play(name: StringName = '', custom_blend: float64 = -1, custom_speed: float64 = 1, from_end: boolean = false): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        play_backwards(name: StringName = '', custom_blend: float64 = -1): void
        
        /** Pauses the currently playing animation. The [member current_animation_position] will be kept and calling [method play] or [method play_backwards] without arguments or with the same animation name as [member assigned_animation] will resume the animation.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause].  
         *  If [param keep_state] is `true`, the animation state is not updated visually.  
         *      
         *  **Note:** The method / audio / animation playback tracks will not be processed by this method.  
         */
        stop(keep_state: boolean = false): void
        
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        is_playing(): boolean
        set_current_animation(animation: string): void
        get_current_animation(): string
        set_assigned_animation(animation: string): void
        get_assigned_animation(): string
        
        /** Queues an animation for playback once the current one is done.  
         *      
         *  **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.  
         */
        queue(name: StringName): void
        
        /** Returns a list of the animation keys that are currently queued to play. */
        get_queue(): PackedStringArray
        
        /** Clears all queued, unplayed animations. */
        clear_queue(): void
        set_speed_scale(speed: float64): void
        get_speed_scale(): float64
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        get_playing_speed(): float64
        set_autoplay(name: string): void
        get_autoplay(): string
        set_movie_quit_on_finish_enabled(enabled: boolean): void
        is_movie_quit_on_finish_enabled(): boolean
        get_current_animation_position(): float64
        get_current_animation_length(): float64
        
        /** Seeks the animation to the [param seconds] point in time (in seconds). If [param update] is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and [param seconds] are skipped.  
         *  If [param update_only] is true, the method / audio / animation playback tracks will not be processed.  
         *      
         *  **Note:** Seeking to the end of the animation doesn't emit [signal AnimationMixer.animation_finished]. If you want to skip animation and emit the signal, use [method AnimationMixer.advance].  
         */
        seek(seconds: float64, update: boolean = false, update_only: boolean = false): void
        
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
         *      
         *  **Note:** While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see [Animation].  
         */
        get current_animation(): StringName
        set current_animation(value: StringName)
        
        /** If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also [member current_animation]. */
        get assigned_animation(): StringName
        set assigned_animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The length (in seconds) of the currently playing animation. */
        get current_animation_length(): float64
        
        /** The position (in seconds) of the currently playing animation. */
        get current_animation_position(): float64
        
        /** The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision. */
        get playback_default_blend_time(): float64
        set playback_default_blend_time(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** If `true` and the engine is running in Movie Maker mode (see [MovieWriter]), exits the engine with [method SceneTree.quit] as soon as an animation is done playing in this [AnimationPlayer]. A message is printed when the engine quits for this reason.  
         *      
         *  **Note:** This obeys the same logic as the [signal AnimationMixer.animation_finished] signal, so it will not quit the engine if the animation is set to be looping.  
         */
        get movie_quit_on_finish(): boolean
        set movie_quit_on_finish(value: boolean)
        
        /** Emitted when [member current_animation] changes. */
        readonly current_animation_changed: Signal // name: string => void
        
        /** Emitted when a queued animation plays after the previous animation finished. See also [method AnimationPlayer.queue].  
         *      
         *  **Note:** The signal is not emitted when the animation is changed via [method AnimationPlayer.play] or by an [AnimationTree].  
         */
        readonly animation_changed: Signal // old_name: StringName, new_name: StringName => void
    }
    class AnimationPlayerEditor extends VBoxContainer {
        constructor(identifier?: any)
        _animation_player_changed(_unnamed_arg0: Object): void
        _start_onion_skinning(): void
        _stop_onion_skinning(): void
        readonly animation_selected: Signal // name: string => void
    }
    class AnimationPlayerEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Base class for [AnimationNode]s that hold one or multiple composite animations. Usually used for [member AnimationTree.tree_root].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationrootnode.html  
     */
    class AnimationRootNode extends AnimationNode {
        constructor(identifier?: any)
    }
    class AnimationTimelineEdit extends Range {
        constructor(identifier?: any)
        update_values(): void
        readonly zoom_changed: Signal //  => void
        readonly name_limit_changed: Signal //  => void
        readonly timeline_changed: Signal // position: float64, timeline_only: boolean => void
        readonly track_added: Signal // track: int64 => void
        readonly length_changed: Signal // size: float64 => void
    }
    class AnimationTrackEditDefaultPlugin extends AnimationTrackEditPlugin {
        constructor(identifier?: any)
    }
    class AnimationTrackEditPlugin extends RefCounted {
        constructor(identifier?: any)
    }
    class AnimationTrackEditor extends VBoxContainer {
        constructor(identifier?: any)
        _animation_update(): void
        _track_grab_focus(_unnamed_arg0: int64): void
        _redraw_tracks(): void
        _clear_selection_for_anim(_unnamed_arg0: Animation): void
        _select_at_anim(_unnamed_arg0: Animation, _unnamed_arg1: int64, _unnamed_arg2: float64): void
        _clear_selection(_unnamed_arg0: boolean): void
        _bezier_track_set_key_handle_mode(animation: Animation, track_idx: int64, key_idx: int64, key_handle_mode: any /*Animation.HandleMode*/, key_handle_set_mode: any /*Animation.HandleSetMode*/ = 0): void
        readonly timeline_changed: Signal // position: float64, timeline_only: boolean => void
        readonly keying_changed: Signal //  => void
        readonly animation_len_changed: Signal // len: float64 => void
        readonly animation_step_changed: Signal // step: float64 => void
    }
    class AnimationTrackKeyEditEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace AnimationTree {
        enum AnimationProcessCallback {
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS]. */
            ANIMATION_PROCESS_PHYSICS = 0,
            
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE]. */
            ANIMATION_PROCESS_IDLE = 1,
            
            /** For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL]. */
            ANIMATION_PROCESS_MANUAL = 2,
        }
    }
    /** A node used for advanced animation transitions in an [AnimationPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_animationtree.html  
     */
    class AnimationTree extends AnimationMixer {
        constructor(identifier?: any)
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
        get tree_root(): AnimationRootNode
        set tree_root(value: AnimationRootNode)
        
        /** The path to the [Node] used to evaluate the [AnimationNode] [Expression] if one is not explicitly specified internally. */
        get advance_expression_base_node(): NodePath
        set advance_expression_base_node(value: NodePath)
        
        /** The path to the [AnimationPlayer] used for animating. */
        get anim_player(): NodePath
        set anim_player(value: NodePath)
        
        /** Emitted when the [member anim_player] is changed. */
        readonly animation_player_changed: Signal //  => void
    }
    class AnimationTreeEditor extends VBoxContainer {
        constructor(identifier?: any)
    }
    class AnimationTreeEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class AnimationTreeNodeEditorPlugin extends VBoxContainer {
        constructor(identifier?: any)
    }
    namespace Area2D {
        enum SpaceOverride {
            /** This area does not affect gravity/damping. */
            SPACE_OVERRIDE_DISABLED = 0,
            
            /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order). */
            SPACE_OVERRIDE_COMBINE = 1,
            
            /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order), ignoring any lower priority areas. */
            SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            
            /** This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas. */
            SPACE_OVERRIDE_REPLACE = 3,
            
            /** This area replaces any gravity/damping calculated so far (in [member priority] order), but keeps calculating the rest of the areas. */
            SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
    }
    /** A region of 2D space that detects other [CollisionObject2D]s entering or exiting it.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_area2d.html  
     */
    class Area2D extends CollisionObject2D {
        constructor(identifier?: any)
        set_gravity_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_gravity_space_override_mode(): Area2D.SpaceOverride
        set_gravity_is_point(enable: boolean): void
        is_gravity_a_point(): boolean
        set_gravity_point_unit_distance(distance_scale: float64): void
        get_gravity_point_unit_distance(): float64
        set_gravity_point_center(center: Vector2): void
        get_gravity_point_center(): Vector2
        set_gravity_direction(direction: Vector2): void
        get_gravity_direction(): Vector2
        set_gravity(gravity: float64): void
        get_gravity(): float64
        set_linear_damp_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_linear_damp_space_override_mode(): Area2D.SpaceOverride
        set_angular_damp_space_override_mode(space_override_mode: Area2D.SpaceOverride): void
        get_angular_damp_space_override_mode(): Area2D.SpaceOverride
        set_linear_damp(linear_damp: float64): void
        get_linear_damp(): float64
        set_angular_damp(angular_damp: float64): void
        get_angular_damp(): float64
        set_priority(priority: int64): void
        get_priority(): int64
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
        
        /** Returns `true` if intersecting any [PhysicsBody2D]s or [TileMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        has_overlapping_bodies(): boolean
        
        /** Returns `true` if intersecting any [Area2D]s, otherwise returns `false`. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        has_overlapping_areas(): boolean
        
        /** Returns `true` if the given physics body intersects or overlaps this [Area2D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         *  The [param body] argument can either be a [PhysicsBody2D] or a [TileMap] instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.  
         */
        overlaps_body(body: Node): boolean
        
        /** Returns `true` if the given [Area2D] intersects or overlaps this [Area2D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         */
        overlaps_area(area: Node): boolean
        set_audio_bus_name(name: StringName): void
        get_audio_bus_name(): StringName
        set_audio_bus_override(enable: boolean): void
        is_overriding_audio_bus(): boolean
        
        /** If `true`, the area detects bodies or areas entering and exiting it. */
        get monitoring(): boolean
        set monitoring(value: boolean)
        
        /** If `true`, other monitoring areas can detect this area. */
        get monitorable(): boolean
        set monitorable(value: boolean)
        
        /** The area's priority. Higher priority areas are processed first. The [World2D]'s physics is always processed last, after all areas. */
        get priority(): int64
        set priority(value: int64)
        
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        get gravity_space_override(): int64
        set gravity_space_override(value: int64)
        
        /** If `true`, gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        get gravity_point(): boolean
        set gravity_point(value: boolean)
        
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.  
         */
        get gravity_point_unit_distance(): float64
        set gravity_point_unit_distance(value: float64)
        
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        get gravity_point_center(): Vector2
        set gravity_point_center(value: Vector2)
        
        /** The area's gravity vector (not normalized). */
        get gravity_direction(): Vector2
        set gravity_direction(value: Vector2)
        
        /** The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get linear_damp_space_override(): int64
        set linear_damp_space_override(value: int64)
        
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        get linear_damp(): float64
        set linear_damp(value: float64)
        
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get angular_damp_space_override(): int64
        set angular_damp_space_override(value: int64)
        
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        get angular_damp(): float64
        set angular_damp(value: float64)
        
        /** If `true`, the area's audio bus overrides the default audio bus. */
        get audio_bus_override(): boolean
        set audio_bus_override(value: boolean)
        
        /** The name of the area's audio bus. */
        get audio_bus_name(): StringName
        set audio_bus_name(value: StringName)
        
        /** Emitted when a [Shape2D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer2D].  
         *  **Example of getting the** [CollisionShape2D] **node from the shape index:**  
         *    
         */
        readonly body_shape_entered: Signal // body_rid: RID, body: Node2D, body_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when a [Shape2D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  See also [signal body_shape_entered].  
         */
        readonly body_shape_exited: Signal // body_rid: RID, body: Node2D, body_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly body_entered: Signal // body: Node2D => void
        
        /** Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly body_exited: Signal // body: Node2D => void
        
        /** Emitted when a [Shape2D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer2D].  
         *  **Example of getting the** [CollisionShape2D] **node from the shape index:**  
         *    
         */
        readonly area_shape_entered: Signal // area_rid: RID, area: Area2D, area_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when a [Shape2D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  See also [signal area_shape_entered].  
         */
        readonly area_shape_exited: Signal // area_rid: RID, area: Area2D, area_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when the received [param area] enters this area. Requires [member monitoring] to be set to `true`. */
        readonly area_entered: Signal // area: Area2D => void
        
        /** Emitted when the received [param area] exits this area. Requires [member monitoring] to be set to `true`. */
        readonly area_exited: Signal // area: Area2D => void
    }
    namespace Area3D {
        enum SpaceOverride {
            /** This area does not affect gravity/damping. */
            SPACE_OVERRIDE_DISABLED = 0,
            
            /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order). */
            SPACE_OVERRIDE_COMBINE = 1,
            
            /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order), ignoring any lower priority areas. */
            SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            
            /** This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas. */
            SPACE_OVERRIDE_REPLACE = 3,
            
            /** This area replaces any gravity/damping calculated so far (in [member priority] order), but keeps calculating the rest of the areas. */
            SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
    }
    /** A region of 3D space that detects other [CollisionObject3D]s entering or exiting it.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_area3d.html  
     */
    class Area3D extends CollisionObject3D {
        constructor(identifier?: any)
        set_gravity_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_gravity_space_override_mode(): Area3D.SpaceOverride
        set_gravity_is_point(enable: boolean): void
        is_gravity_a_point(): boolean
        set_gravity_point_unit_distance(distance_scale: float64): void
        get_gravity_point_unit_distance(): float64
        set_gravity_point_center(center: Vector3): void
        get_gravity_point_center(): Vector3
        set_gravity_direction(direction: Vector3): void
        get_gravity_direction(): Vector3
        set_gravity(gravity: float64): void
        get_gravity(): float64
        set_linear_damp_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_linear_damp_space_override_mode(): Area3D.SpaceOverride
        set_angular_damp_space_override_mode(space_override_mode: Area3D.SpaceOverride): void
        get_angular_damp_space_override_mode(): Area3D.SpaceOverride
        set_angular_damp(angular_damp: float64): void
        get_angular_damp(): float64
        set_linear_damp(linear_damp: float64): void
        get_linear_damp(): float64
        set_priority(priority: int64): void
        get_priority(): int64
        set_wind_force_magnitude(wind_force_magnitude: float64): void
        get_wind_force_magnitude(): float64
        set_wind_attenuation_factor(wind_attenuation_factor: float64): void
        get_wind_attenuation_factor(): float64
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
        
        /** Returns `true` if intersecting any [PhysicsBody3D]s or [GridMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        has_overlapping_bodies(): boolean
        
        /** Returns `true` if intersecting any [Area3D]s, otherwise returns `false`. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        has_overlapping_areas(): boolean
        
        /** Returns `true` if the given physics body intersects or overlaps this [Area3D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         *  The [param body] argument can either be a [PhysicsBody3D] or a [GridMap] instance. While GridMaps are not physics body themselves, they register their tiles with collision shapes as a virtual physics body.  
         */
        overlaps_body(body: Node): boolean
        
        /** Returns `true` if the given [Area3D] intersects or overlaps this [Area3D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
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
        set_reverb_amount(amount: float64): void
        get_reverb_amount(): float64
        set_reverb_uniformity(amount: float64): void
        get_reverb_uniformity(): float64
        
        /** If `true`, the area detects bodies or areas entering and exiting it. */
        get monitoring(): boolean
        set monitoring(value: boolean)
        
        /** If `true`, other monitoring areas can detect this area. */
        get monitorable(): boolean
        set monitorable(value: boolean)
        
        /** The area's priority. Higher priority areas are processed first. The [World3D]'s physics is always processed last, after all areas. */
        get priority(): int64
        set priority(value: int64)
        
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        get gravity_space_override(): int64
        set gravity_space_override(value: int64)
        
        /** If `true`, gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        get gravity_point(): boolean
        set gravity_point(value: boolean)
        
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.  
         */
        get gravity_point_unit_distance(): float64
        set gravity_point_unit_distance(value: float64)
        
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        get gravity_point_center(): Vector3
        set gravity_point_center(value: Vector3)
        
        /** The area's gravity vector (not normalized). */
        get gravity_direction(): Vector3
        set gravity_direction(value: Vector3)
        
        /** The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get linear_damp_space_override(): int64
        set linear_damp_space_override(value: int64)
        
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linear_damp(): float64
        set linear_damp(value: float64)
        
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get angular_damp_space_override(): int64
        set angular_damp_space_override(value: int64)
        
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angular_damp(): float64
        set angular_damp(value: float64)
        
        /** The magnitude of area-specific wind force. */
        get wind_force_magnitude(): float64
        set wind_force_magnitude(value: float64)
        
        /** The exponential rate at which wind force decreases with distance from its origin. */
        get wind_attenuation_factor(): float64
        set wind_attenuation_factor(value: float64)
        
        /** The [Node3D] which is used to specify the direction and origin of an area-specific wind force. The direction is opposite to the z-axis of the [Node3D]'s local transform, and its origin is the origin of the [Node3D]'s local transform. */
        get wind_source_path(): NodePath
        set wind_source_path(value: NodePath)
        
        /** If `true`, the area's audio bus overrides the default audio bus. */
        get audio_bus_override(): boolean
        set audio_bus_override(value: boolean)
        
        /** The name of the area's audio bus. */
        get audio_bus_name(): StringName
        set audio_bus_name(value: StringName)
        
        /** If `true`, the area applies reverb to its associated audio. */
        get reverb_bus_enabled(): boolean
        set reverb_bus_enabled(value: boolean)
        
        /** The name of the reverb bus to use for this area's associated audio. */
        get reverb_bus_name(): StringName
        set reverb_bus_name(value: StringName)
        
        /** The degree to which this area applies reverb to its associated audio. Ranges from `0` to `1` with `0.1` precision. */
        get reverb_bus_amount(): float64
        set reverb_bus_amount(value: float64)
        
        /** The degree to which this area's reverb is a uniform effect. Ranges from `0` to `1` with `0.1` precision. */
        get reverb_bus_uniformity(): float64
        set reverb_bus_uniformity(value: float64)
        
        /** Emitted when a [Shape3D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer3D].  
         *  **Example of getting the** [CollisionShape3D] **node from the shape index:**  
         *    
         */
        readonly body_shape_entered: Signal // body_rid: RID, body: Node3D, body_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when a [Shape3D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  See also [signal body_shape_entered].  
         */
        readonly body_shape_exited: Signal // body_rid: RID, body: Node3D, body_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly body_entered: Signal // body: Node3D => void
        
        /** Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly body_exited: Signal // body: Node3D => void
        
        /** Emitted when a [Shape3D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer3D].  
         *  **Example of getting the** [CollisionShape3D] **node from the shape index:**  
         *    
         */
        readonly area_shape_entered: Signal // area_rid: RID, area: Area3D, area_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when a [Shape3D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  See also [signal area_shape_entered].  
         */
        readonly area_shape_exited: Signal // area_rid: RID, area: Area3D, area_shape_index: int64, local_shape_index: int64 => void
        
        /** Emitted when the received [param area] enters this area. Requires [member monitoring] to be set to `true`. */
        readonly area_entered: Signal // area: Area3D => void
        
        /** Emitted when the received [param area] exits this area. Requires [member monitoring] to be set to `true`. */
        readonly area_exited: Signal // area: Area3D => void
    }
    /** [Mesh] type that provides utility for constructing a surface from arrays.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_arraymesh.html  
     */
    class ArrayMesh extends Mesh {
        constructor(identifier?: any)
        /** Adds name for a blend shape that will be added with [method add_surface_from_arrays]. Must be called before surface is added. */
        add_blend_shape(name: StringName): void
        
        /** Returns the number of blend shapes that the [ArrayMesh] holds. */
        get_blend_shape_count(): int64
        
        /** Returns the name of the blend shape at this index. */
        get_blend_shape_name(index: int64): StringName
        
        /** Sets the name of the blend shape at this index. */
        set_blend_shape_name(index: int64, name: StringName): void
        
        /** Removes all blend shapes from this [ArrayMesh]. */
        clear_blend_shapes(): void
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        get_blend_shape_mode(): Mesh.BlendShapeMode
        
        /** Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.  
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].  
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.  
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.  
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents a LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of a LOD also increases the distance that the objects has to be from the camera before the LOD is used.  
         *  The [param flags] argument is the bitwise or of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         *      
         *  **Note:** When using indices, it is recommended to only use points, lines, or triangles.  
         */
        add_surface_from_arrays(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array = <any> {} /*compound.type from 28([object Object])*/, lods: Dictionary = <any> {} /*compound.type from 27([object Object])*/, flags: Mesh.ArrayFormat = 0): void
        
        /** Removes all surfaces from this [ArrayMesh]. */
        clear_surfaces(): void
        surface_update_vertex_region(surf_idx: int64, offset: int64, data: PackedByteArray): void
        surface_update_attribute_region(surf_idx: int64, offset: int64, data: PackedByteArray): void
        surface_update_skin_region(surf_idx: int64, offset: int64, data: PackedByteArray): void
        
        /** Returns the length in vertices of the vertex array in the requested surface (see [method add_surface_from_arrays]). */
        surface_get_array_len(surf_idx: int64): int64
        
        /** Returns the length in indices of the index array in the requested surface (see [method add_surface_from_arrays]). */
        surface_get_array_index_len(surf_idx: int64): int64
        
        /** Returns the format mask of the requested surface (see [method add_surface_from_arrays]). */
        surface_get_format(surf_idx: int64): Mesh.ArrayFormat
        
        /** Returns the primitive type of the requested surface (see [method add_surface_from_arrays]). */
        surface_get_primitive_type(surf_idx: int64): Mesh.PrimitiveType
        
        /** Returns the index of the first surface with this name held within this [ArrayMesh]. If none are found, -1 is returned. */
        surface_find_by_name(name: string): int64
        
        /** Sets a name for a given surface. */
        surface_set_name(surf_idx: int64, name: string): void
        
        /** Gets the name assigned to this surface. */
        surface_get_name(surf_idx: int64): string
        
        /** Regenerates tangents for each of the [ArrayMesh]'s surfaces. */
        regen_normal_maps(): void
        
        /** Performs a UV unwrap on the [ArrayMesh] to prepare the mesh for lightmapping. */
        lightmap_unwrap(transform: Transform3D, texel_size: float64): Error
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        set_shadow_mesh(mesh: ArrayMesh): void
        get_shadow_mesh(): ArrayMesh
        _set_blend_shape_names(blend_shape_names: PackedStringArray): void
        _get_blend_shape_names(): PackedStringArray
        _set_surfaces(surfaces: Array): void
        _get_surfaces(): Array
        get _blend_shape_names(): PackedStringArray
        set _blend_shape_names(value: PackedStringArray)
        get _surfaces(): Array
        set _surfaces(value: Array)
        
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        get blend_shape_mode(): int64
        set blend_shape_mode(value: int64)
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        get custom_aabb(): AABB
        set custom_aabb(value: AABB)
        
        /** An optional mesh which is used for rendering shadows and can be used for the depth prepass. Can be used to increase performance of shadow rendering by using a mesh that only contains vertex position data (without normals, UVs, colors, etc.). */
        get shadow_mesh(): ArrayMesh
        set shadow_mesh(value: ArrayMesh)
    }
    /** 3D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_arrayoccluder3d.html  
     */
    class ArrayOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** Sets [member indices] and [member vertices], while updating the final occluder only once after both values are set. */
        set_arrays(vertices: PackedVector3Array, indices: PackedInt32Array): void
        set_vertices(vertices: PackedVector3Array): void
        set_indices(indices: PackedInt32Array): void
        
        /** The occluder's vertex positions in local 3D coordinates.  
         *      
         *  **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.  
         */
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array)
        
        /** The occluder's index position. Indices determine which points from the [member vertices] array should be drawn, and in which order.  
         *      
         *  **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.  
         */
        get indices(): PackedInt32Array
        set indices(value: PackedInt32Array)
    }
    namespace AspectRatioContainer {
        enum StretchMode {
            /** The height of child controls is automatically adjusted based on the width of the container. */
            STRETCH_WIDTH_CONTROLS_HEIGHT = 0,
            
            /** The width of child controls is automatically adjusted based on the height of the container. */
            STRETCH_HEIGHT_CONTROLS_WIDTH = 1,
            
            /** The bounding rectangle of child controls is automatically adjusted to fit inside the container while keeping the aspect ratio. */
            STRETCH_FIT = 2,
            
            /** The width and height of child controls is automatically adjusted to make their bounding rectangle cover the entire area of the container while keeping the aspect ratio.  
             *  When the bounding rectangle of child controls exceed the container's size and [member Control.clip_contents] is enabled, this allows to show only the container's area restricted by its own bounding rectangle.  
             */
            STRETCH_COVER = 3,
        }
        enum AlignmentMode {
            /** Aligns child controls with the beginning (left or top) of the container. */
            ALIGNMENT_BEGIN = 0,
            
            /** Aligns child controls with the center of the container. */
            ALIGNMENT_CENTER = 1,
            
            /** Aligns child controls with the end (right or bottom) of the container. */
            ALIGNMENT_END = 2,
        }
    }
    /** A container that preserves the proportions of its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_aspectratiocontainer.html  
     */
    class AspectRatioContainer extends Container {
        constructor(identifier?: any)
        set_ratio(ratio: float64): void
        get_ratio(): float64
        set_stretch_mode(stretch_mode: AspectRatioContainer.StretchMode): void
        get_stretch_mode(): AspectRatioContainer.StretchMode
        set_alignment_horizontal(alignment_horizontal: AspectRatioContainer.AlignmentMode): void
        get_alignment_horizontal(): AspectRatioContainer.AlignmentMode
        set_alignment_vertical(alignment_vertical: AspectRatioContainer.AlignmentMode): void
        get_alignment_vertical(): AspectRatioContainer.AlignmentMode
        
        /** The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the [member stretch_mode]. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** The stretch mode used to align child controls. */
        get stretch_mode(): int64
        set stretch_mode(value: int64)
        
        /** Specifies the horizontal relative position of child controls. */
        get alignment_horizontal(): int64
        set alignment_horizontal(value: int64)
        
        /** Specifies the vertical relative position of child controls. */
        get alignment_vertical(): int64
        set alignment_vertical(value: int64)
    }
    class AssetLibraryEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class AtlasMergingDialog extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    /** A texture that crops out part of another Texture2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_atlastexture.html  
     */
    class AtlasTexture extends Texture2D {
        constructor(identifier?: any)
        set_atlas(atlas: Texture2D): void
        get_atlas(): Texture2D
        set_region(region: Rect2): void
        get_region(): Rect2
        set_margin(margin: Rect2): void
        get_margin(): Rect2
        set_filter_clip(enable: boolean): void
        has_filter_clip(): boolean
        
        /** The texture that contains the atlas. Can be any type inheriting from [Texture2D], including another [AtlasTexture]. */
        get atlas(): Texture2D
        set atlas(value: Texture2D)
        
        /** The region used to draw the [member atlas]. */
        get region(): Rect2
        set region(value: Rect2)
        
        /** The margin around the [member region]. Useful for small adjustments. If the [member Rect2.size] of this property ("w" and "h" in the editor) is set, the drawn texture is resized to fit within the margin. */
        get margin(): Rect2
        set margin(value: Rect2)
        
        /** If `true`, the area outside of the [member region] is clipped to avoid bleeding of the surrounding texture pixels. */
        get filter_clip(): boolean
        set filter_clip(value: boolean)
    }
    class AtlasTileProxyObject extends Object {
        constructor(identifier?: any)
        readonly changed: Signal // what: string => void
    }
    /** Stores information about the audio buses.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiobuslayout.html  
     */
    class AudioBusLayout extends Resource {
        constructor(identifier?: any)
    }
    class AudioBusesEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Audio effect for audio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffect.html  
     */
    class AudioEffect extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _instantiate(): AudioEffectInstance
    }
    /** Adds an amplifying audio effect to an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectamplify.html  
     */
    class AudioEffectAmplify extends AudioEffect {
        constructor(identifier?: any)
        set_volume_db(volume: float64): void
        get_volume_db(): float64
        
        /** Amount of amplification in decibels. Positive values make the sound louder, negative values make it quieter. Value can range from -80 to 24. */
        get volume_db(): float64
        set volume_db(value: float64)
    }
    /** Adds a band limit filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectbandlimitfilter.html  
     */
    class AudioEffectBandLimitFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a band pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectbandpassfilter.html  
     */
    class AudioEffectBandPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Captures audio from an audio bus in real-time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectcapture.html  
     */
    class AudioEffectCapture extends AudioEffect {
        constructor(identifier?: any)
        /** Returns `true` if at least [param frames] audio frames are available to read in the internal ring buffer. */
        can_get_buffer(frames: int64): boolean
        
        /** Gets the next [param frames] audio samples from the internal ring buffer.  
         *  Returns a [PackedVector2Array] containing exactly [param frames] audio samples if available, or an empty [PackedVector2Array] if insufficient data was available.  
         */
        get_buffer(frames: int64): PackedVector2Array
        
        /** Clears the internal ring buffer. */
        clear_buffer(): void
        set_buffer_length(buffer_length_seconds: float64): void
        get_buffer_length(): float64
        
        /** Returns the number of frames available to read using [method get_buffer]. */
        get_frames_available(): int64
        
        /** Returns the number of audio frames discarded from the audio bus due to full buffer. */
        get_discarded_frames(): int64
        
        /** Returns the total size of the internal ring buffer in frames. */
        get_buffer_length_frames(): int64
        
        /** Returns the number of audio frames inserted from the audio bus. */
        get_pushed_frames(): int64
        
        /** Length of the internal ring buffer, in seconds. Setting the buffer length will have no effect if already initialized. */
        get buffer_length(): float64
        set buffer_length(value: float64)
    }
    /** Adds a chorus audio effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectchorus.html  
     */
    class AudioEffectChorus extends AudioEffect {
        constructor(identifier?: any)
        set_voice_count(voices: int64): void
        get_voice_count(): int64
        set_voice_delay_ms(voice_idx: int64, delay_ms: float64): void
        get_voice_delay_ms(voice_idx: int64): float64
        set_voice_rate_hz(voice_idx: int64, rate_hz: float64): void
        get_voice_rate_hz(voice_idx: int64): float64
        set_voice_depth_ms(voice_idx: int64, depth_ms: float64): void
        get_voice_depth_ms(voice_idx: int64): float64
        set_voice_level_db(voice_idx: int64, level_db: float64): void
        get_voice_level_db(voice_idx: int64): float64
        set_voice_cutoff_hz(voice_idx: int64, cutoff_hz: float64): void
        get_voice_cutoff_hz(voice_idx: int64): float64
        set_voice_pan(voice_idx: int64, pan: float64): void
        get_voice_pan(voice_idx: int64): float64
        set_wet(amount: float64): void
        get_wet(): float64
        set_dry(amount: float64): void
        get_dry(): float64
        
        /** The number of voices in the effect. */
        get voice_count(): int64
        set voice_count(value: int64)
        
        /** The effect's raw signal. */
        get dry(): float64
        set dry(value: float64)
        
        /** The effect's processed signal. */
        get wet(): float64
        set wet(value: float64)
    }
    /** Adds a compressor audio effect to an audio bus.  
     *  Reduces sounds that exceed a certain threshold level, smooths out the dynamics and increases the overall volume.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectcompressor.html  
     */
    class AudioEffectCompressor extends AudioEffect {
        constructor(identifier?: any)
        set_threshold(threshold: float64): void
        get_threshold(): float64
        set_ratio(ratio: float64): void
        get_ratio(): float64
        set_gain(gain: float64): void
        get_gain(): float64
        set_attack_us(attack_us: float64): void
        get_attack_us(): float64
        set_release_ms(release_ms: float64): void
        get_release_ms(): float64
        set_mix(mix: float64): void
        get_mix(): float64
        set_sidechain(sidechain: StringName): void
        get_sidechain(): StringName
        
        /** The level above which compression is applied to the audio. Value can range from -60 to 0. */
        get threshold(): float64
        set threshold(value: float64)
        
        /** Amount of compression applied to the audio once it passes the threshold level. The higher the ratio, the more the loud parts of the audio will be compressed. Value can range from 1 to 48. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** Gain applied to the output signal. */
        get gain(): float64
        set gain(value: float64)
        
        /** Compressor's reaction time when the signal exceeds the threshold, in microseconds. Value can range from 20 to 2000. */
        get attack_us(): float64
        set attack_us(value: float64)
        
        /** Compressor's delay time to stop reducing the signal after the signal level falls below the threshold, in milliseconds. Value can range from 20 to 2000. */
        get release_ms(): float64
        set release_ms(value: float64)
        
        /** Balance between original signal and effect signal. Value can range from 0 (totally dry) to 1 (totally wet). */
        get mix(): float64
        set mix(value: float64)
        
        /** Reduce the sound level using another audio bus for threshold detection. */
        get sidechain(): StringName
        set sidechain(value: StringName)
    }
    /** Adds a delay audio effect to an audio bus. Plays input signal back after a period of time.  
     *  Two tap delay and feedback options.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectdelay.html  
     */
    class AudioEffectDelay extends AudioEffect {
        constructor(identifier?: any)
        set_dry(amount: float64): void
        get_dry(): float64
        set_tap1_active(amount: boolean): void
        is_tap1_active(): boolean
        set_tap1_delay_ms(amount: float64): void
        get_tap1_delay_ms(): float64
        set_tap1_level_db(amount: float64): void
        get_tap1_level_db(): float64
        set_tap1_pan(amount: float64): void
        get_tap1_pan(): float64
        set_tap2_active(amount: boolean): void
        is_tap2_active(): boolean
        set_tap2_delay_ms(amount: float64): void
        get_tap2_delay_ms(): float64
        set_tap2_level_db(amount: float64): void
        get_tap2_level_db(): float64
        set_tap2_pan(amount: float64): void
        get_tap2_pan(): float64
        set_feedback_active(amount: boolean): void
        is_feedback_active(): boolean
        set_feedback_delay_ms(amount: float64): void
        get_feedback_delay_ms(): float64
        set_feedback_level_db(amount: float64): void
        get_feedback_level_db(): float64
        set_feedback_lowpass(amount: float64): void
        get_feedback_lowpass(): float64
        
        /** Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1. */
        get dry(): float64
        set dry(value: float64)
        
        /** If `true`, the first tap will be enabled. */
        get tap1_active(): boolean
        set tap1_active(value: boolean)
        
        /** First tap delay time in milliseconds. */
        get tap1_delay_ms(): float64
        set tap1_delay_ms(value: float64)
        
        /** Sound level for the first tap. */
        get tap1_level_db(): float64
        set tap1_level_db(value: float64)
        
        /** Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right). */
        get tap1_pan(): float64
        set tap1_pan(value: float64)
        
        /** If `true`, the second tap will be enabled. */
        get tap2_active(): boolean
        set tap2_active(value: boolean)
        
        /** Second tap delay time in milliseconds. */
        get tap2_delay_ms(): float64
        set tap2_delay_ms(value: float64)
        
        /** Sound level for the second tap. */
        get tap2_level_db(): float64
        set tap2_level_db(value: float64)
        
        /** Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right). */
        get tap2_pan(): float64
        set tap2_pan(value: float64)
        
        /** If `true`, feedback is enabled. */
        get feedback_active(): boolean
        set feedback_active(value: boolean)
        
        /** Feedback delay time in milliseconds. */
        get feedback_delay_ms(): float64
        set feedback_delay_ms(value: float64)
        
        /** Sound level for feedback. */
        get feedback_level_db(): float64
        set feedback_level_db(value: float64)
        
        /** Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal. */
        get feedback_lowpass(): float64
        set feedback_lowpass(value: float64)
    }
    namespace AudioEffectDistortion {
        enum Mode {
            /** Digital distortion effect which cuts off peaks at the top and bottom of the waveform. */
            MODE_CLIP = 0,
            MODE_ATAN = 1,
            
            /** Low-resolution digital distortion effect (bit depth reduction). You can use it to emulate the sound of early digital audio devices. */
            MODE_LOFI = 2,
            
            /** Emulates the warm distortion produced by a field effect transistor, which is commonly used in solid-state musical instrument amplifiers. The [member drive] property has no effect in this mode. */
            MODE_OVERDRIVE = 3,
            
            /** Waveshaper distortions are used mainly by electronic musicians to achieve an extra-abrasive sound. */
            MODE_WAVESHAPE = 4,
        }
    }
    /** Adds a distortion audio effect to an Audio bus.  
     *  Modifies the sound to make it distorted.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectdistortion.html  
     */
    class AudioEffectDistortion extends AudioEffect {
        constructor(identifier?: any)
        set_mode(mode: AudioEffectDistortion.Mode): void
        get_mode(): AudioEffectDistortion.Mode
        set_pre_gain(pre_gain: float64): void
        get_pre_gain(): float64
        set_keep_hf_hz(keep_hf_hz: float64): void
        get_keep_hf_hz(): float64
        set_drive(drive: float64): void
        get_drive(): float64
        set_post_gain(post_gain: float64): void
        get_post_gain(): float64
        
        /** Distortion type. */
        get mode(): int64
        set mode(value: int64)
        
        /** Increases or decreases the volume before the effect, in decibels. Value can range from -60 to 60. */
        get pre_gain(): float64
        set pre_gain(value: float64)
        
        /** High-pass filter, in Hz. Frequencies higher than this value will not be affected by the distortion. Value can range from 1 to 20000. */
        get keep_hf_hz(): float64
        set keep_hf_hz(value: float64)
        
        /** Distortion power. Value can range from 0 to 1. */
        get drive(): float64
        set drive(value: float64)
        
        /** Increases or decreases the volume after the effect, in decibels. Value can range from -80 to 24. */
        get post_gain(): float64
        set post_gain(value: float64)
    }
    /** Base class for audio equalizers. Gives you control over frequencies.  
     *  Use it to create a custom equalizer if [AudioEffectEQ6], [AudioEffectEQ10] or [AudioEffectEQ21] don't fit your needs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecteq.html  
     */
    class AudioEffectEQ extends AudioEffect {
        constructor(identifier?: any)
        /** Sets band's gain at the specified index, in dB. */
        set_band_gain_db(band_idx: int64, volume_db: float64): void
        
        /** Returns the band's gain at the specified index, in dB. */
        get_band_gain_db(band_idx: int64): float64
        
        /** Returns the number of bands of the equalizer. */
        get_band_count(): int64
    }
    /** Adds a 10-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 31 Hz to 16000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecteq10.html  
     */
    class AudioEffectEQ10 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    /** Adds a 21-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 22 Hz to 22000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecteq21.html  
     */
    class AudioEffectEQ21 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    /** Adds a 6-band equalizer audio effect to an audio bus. Gives you control over frequencies from 32 Hz to 10000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecteq6.html  
     */
    class AudioEffectEQ6 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    namespace AudioEffectFilter {
        enum FilterDB {
            FILTER_6DB = 0,
            FILTER_12DB = 1,
            FILTER_18DB = 2,
            FILTER_24DB = 3,
        }
    }
    /** Adds a filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectfilter.html  
     */
    class AudioEffectFilter extends AudioEffect {
        constructor(identifier?: any)
        set_cutoff(freq: float64): void
        get_cutoff(): float64
        set_resonance(amount: float64): void
        get_resonance(): float64
        set_gain(amount: float64): void
        get_gain(): float64
        set_db(amount: AudioEffectFilter.FilterDB): void
        get_db(): AudioEffectFilter.FilterDB
        
        /** Threshold frequency for the filter, in Hz. */
        get cutoff_hz(): float64
        set cutoff_hz(value: float64)
        
        /** Amount of boost in the frequency range near the cutoff frequency. */
        get resonance(): float64
        set resonance(value: float64)
        
        /** Gain amount of the frequencies after the filter. */
        get gain(): float64
        set gain(value: float64)
        get db(): int64
        set db(value: int64)
    }
    /** Adds a high-pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecthighpassfilter.html  
     */
    class AudioEffectHighPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a high-shelf filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffecthighshelffilter.html  
     */
    class AudioEffectHighShelfFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectinstance.html */
    class AudioEffectInstance extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _process(src_buffer: int64, dst_buffer: int64, frame_count: int64): void
        /* gdvirtual */ _process_silence(): boolean
    }
    /** Adds a soft-clip limiter audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectlimiter.html  
     */
    class AudioEffectLimiter extends AudioEffect {
        constructor(identifier?: any)
        set_ceiling_db(ceiling: float64): void
        get_ceiling_db(): float64
        set_threshold_db(threshold: float64): void
        get_threshold_db(): float64
        set_soft_clip_db(soft_clip: float64): void
        get_soft_clip_db(): float64
        set_soft_clip_ratio(soft_clip: float64): void
        get_soft_clip_ratio(): float64
        
        /** The waveform's maximum allowed value, in decibels. Value can range from -20 to -0.1. */
        get ceiling_db(): float64
        set ceiling_db(value: float64)
        
        /** Threshold from which the limiter begins to be active, in decibels. Value can range from -30 to 0. */
        get threshold_db(): float64
        set threshold_db(value: float64)
        
        /** Applies a gain to the limited waves, in decibels. Value can range from 0 to 6. */
        get soft_clip_db(): float64
        set soft_clip_db(value: float64)
        get soft_clip_ratio(): float64
        set soft_clip_ratio(value: float64)
    }
    /** Adds a low-pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectlowpassfilter.html  
     */
    class AudioEffectLowPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a low-shelf filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectlowshelffilter.html  
     */
    class AudioEffectLowShelfFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a notch filter to the Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectnotchfilter.html  
     */
    class AudioEffectNotchFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a panner audio effect to an audio bus. Pans sound left or right.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectpanner.html  
     */
    class AudioEffectPanner extends AudioEffect {
        constructor(identifier?: any)
        set_pan(cpanume: float64): void
        get_pan(): float64
        
        /** Pan position. Value can range from -1 (fully left) to 1 (fully right). */
        get pan(): float64
        set pan(value: float64)
    }
    /** Adds a phaser audio effect to an audio bus.  
     *  Combines the original signal with a copy that is slightly out of phase with the original.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectphaser.html  
     */
    class AudioEffectPhaser extends AudioEffect {
        constructor(identifier?: any)
        set_range_min_hz(hz: float64): void
        get_range_min_hz(): float64
        set_range_max_hz(hz: float64): void
        get_range_max_hz(): float64
        set_rate_hz(hz: float64): void
        get_rate_hz(): float64
        set_feedback(fbk: float64): void
        get_feedback(): float64
        set_depth(depth: float64): void
        get_depth(): float64
        
        /** Determines the minimum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        get range_min_hz(): float64
        set range_min_hz(value: float64)
        
        /** Determines the maximum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        get range_max_hz(): float64
        set range_max_hz(value: float64)
        
        /** Adjusts the rate in Hz at which the effect sweeps up and down across the frequency range. */
        get rate_hz(): float64
        set rate_hz(value: float64)
        
        /** Output percent of modified sound. Value can range from 0.1 to 0.9. */
        get feedback(): float64
        set feedback(value: float64)
        
        /** Governs how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from 0.1 to 4. */
        get depth(): float64
        set depth(value: float64)
    }
    namespace AudioEffectPitchShift {
        enum FFTSize {
            /** Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time. */
            FFT_SIZE_256 = 0,
            
            /** Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time. */
            FFT_SIZE_512 = 1,
            
            /** Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time. */
            FFT_SIZE_1024 = 2,
            
            /** Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time. */
            FFT_SIZE_2048 = 3,
            
            /** Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time. */
            FFT_SIZE_4096 = 4,
            
            /** Represents the size of the [enum FFTSize] enum. */
            FFT_SIZE_MAX = 5,
        }
    }
    /** Adds a pitch-shifting audio effect to an audio bus.  
     *  Raises or lowers the pitch of original sound.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectpitchshift.html  
     */
    class AudioEffectPitchShift extends AudioEffect {
        constructor(identifier?: any)
        set_pitch_scale(rate: float64): void
        get_pitch_scale(): float64
        set_oversampling(amount: int64): void
        get_oversampling(): int64
        set_fft_size(size: AudioEffectPitchShift.FFTSize): void
        get_fft_size(): AudioEffectPitchShift.FFTSize
        
        /** The pitch scale to use. `1.0` is the default pitch and plays sounds unaffected. [member pitch_scale] can range from `0.0` (infinitely low pitch, inaudible) to `16` (16 times higher than the initial pitch). */
        get pitch_scale(): float64
        set pitch_scale(value: float64)
        
        /** The oversampling factor to use. Higher values result in better quality, but are more demanding on the CPU and may cause audio cracking if the CPU can't keep up. */
        get oversampling(): float64
        set oversampling(value: float64)
        
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the effect over time, but have greater latency. The effects of this higher latency are especially noticeable on sounds that have sudden amplitude changes. */
        get fft_size(): int64
        set fft_size(value: int64)
    }
    /** Audio effect used for recording the sound from an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectrecord.html  
     */
    class AudioEffectRecord extends AudioEffect {
        constructor(identifier?: any)
        /** If `true`, the sound will be recorded. Note that restarting the recording will remove the previously recorded sample. */
        set_recording_active(record: boolean): void
        
        /** Returns whether the recording is active or not. */
        is_recording_active(): boolean
        set_format(format: AudioStreamWAV.Format): void
        get_format(): AudioStreamWAV.Format
        
        /** Returns the recorded sample. */
        get_recording(): AudioStreamWAV
        
        /** Specifies the format in which the sample will be recorded. See [enum AudioStreamWAV.Format] for available formats. */
        get format(): int64
        set format(value: int64)
    }
    /** Adds a reverberation audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectreverb.html  
     */
    class AudioEffectReverb extends AudioEffect {
        constructor(identifier?: any)
        set_predelay_msec(msec: float64): void
        get_predelay_msec(): float64
        set_predelay_feedback(feedback: float64): void
        get_predelay_feedback(): float64
        set_room_size(size: float64): void
        get_room_size(): float64
        set_damping(amount: float64): void
        get_damping(): float64
        set_spread(amount: float64): void
        get_spread(): float64
        set_dry(amount: float64): void
        get_dry(): float64
        set_wet(amount: float64): void
        get_wet(): float64
        set_hpf(amount: float64): void
        get_hpf(): float64
        
        /** Time between the original signal and the early reflections of the reverb signal, in milliseconds. */
        get predelay_msec(): float64
        set predelay_msec(value: float64)
        
        /** Output percent of predelay. Value can range from 0 to 1. */
        get predelay_feedback(): float64
        set predelay_feedback(value: float64)
        
        /** Dimensions of simulated room. Bigger means more echoes. Value can range from 0 to 1. */
        get room_size(): float64
        set room_size(value: float64)
        
        /** Defines how reflective the imaginary room's walls are. Value can range from 0 to 1. */
        get damping(): float64
        set damping(value: float64)
        
        /** Widens or narrows the stereo image of the reverb tail. 1 means fully widens. Value can range from 0 to 1. */
        get spread(): float64
        set spread(value: float64)
        
        /** High-pass filter passes signals with a frequency higher than a certain cutoff frequency and attenuates signals with frequencies lower than the cutoff frequency. Value can range from 0 to 1. */
        get hipass(): float64
        set hipass(value: float64)
        
        /** Output percent of original sound. At 0, only modified sound is outputted. Value can range from 0 to 1. */
        get dry(): float64
        set dry(value: float64)
        
        /** Output percent of modified sound. At 0, only original sound is outputted. Value can range from 0 to 1. */
        get wet(): float64
        set wet(value: float64)
    }
    namespace AudioEffectSpectrumAnalyzer {
        enum FFTSize {
            /** Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time. */
            FFT_SIZE_256 = 0,
            
            /** Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time. */
            FFT_SIZE_512 = 1,
            
            /** Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time. */
            FFT_SIZE_1024 = 2,
            
            /** Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time. */
            FFT_SIZE_2048 = 3,
            
            /** Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time. */
            FFT_SIZE_4096 = 4,
            
            /** Represents the size of the [enum FFTSize] enum. */
            FFT_SIZE_MAX = 5,
        }
    }
    /** Audio effect that can be used for real-time audio visualizations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectspectrumanalyzer.html  
     */
    class AudioEffectSpectrumAnalyzer extends AudioEffect {
        constructor(identifier?: any)
        set_buffer_length(seconds: float64): void
        get_buffer_length(): float64
        set_tap_back_pos(seconds: float64): void
        get_tap_back_pos(): float64
        set_fft_size(size: AudioEffectSpectrumAnalyzer.FFTSize): void
        get_fft_size(): AudioEffectSpectrumAnalyzer.FFTSize
        
        /** The length of the buffer to keep (in seconds). Higher values keep data around for longer, but require more memory. */
        get buffer_length(): float64
        set buffer_length(value: float64)
        get tap_back_pos(): float64
        set tap_back_pos(value: float64)
        
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the spectrum analysis over time, but have greater latency. The effects of this higher latency are especially noticeable with sudden amplitude changes. */
        get fft_size(): int64
        set fft_size(value: int64)
    }
    namespace AudioEffectSpectrumAnalyzerInstance {
        enum MagnitudeMode {
            /** Use the average value as magnitude. */
            MAGNITUDE_AVERAGE = 0,
            
            /** Use the maximum value as magnitude. */
            MAGNITUDE_MAX = 1,
        }
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectspectrumanalyzerinstance.html */
    class AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
        constructor(identifier?: any)
        get_magnitude_for_frequency_range(from_hz: float64, to_hz: float64, mode: AudioEffectSpectrumAnalyzerInstance.MagnitudeMode = 1): Vector2
    }
    /** An audio effect that can be used to adjust the intensity of stereo panning.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audioeffectstereoenhance.html  
     */
    class AudioEffectStereoEnhance extends AudioEffect {
        constructor(identifier?: any)
        set_pan_pullout(amount: float64): void
        get_pan_pullout(): float64
        set_time_pullout(amount: float64): void
        get_time_pullout(): float64
        set_surround(amount: float64): void
        get_surround(): float64
        
        /** Values greater than 1.0 increase intensity of any panning on audio passing through this effect, whereas values less than 1.0 will decrease the panning intensity. A value of 0.0 will downmix audio to mono. */
        get pan_pullout(): float64
        set pan_pullout(value: float64)
        get time_pullout_ms(): float64
        set time_pullout_ms(value: float64)
        get surround(): float64
        set surround(value: float64)
    }
    /** Overrides the location sounds are heard from.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiolistener2d.html  
     */
    class AudioListener2D extends Node2D {
        constructor(identifier?: any)
        /** Makes the [AudioListener2D] active, setting it as the hearing point for the sounds. If there is already another active [AudioListener2D], it will be disabled.  
         *  This method will have no effect if the [AudioListener2D] is not added to [SceneTree].  
         */
        make_current(): void
        
        /** Disables the [AudioListener2D]. If it's not set as current, this method will have no effect. */
        clear_current(): void
        
        /** Returns `true` if this [AudioListener2D] is currently active. */
        is_current(): boolean
    }
    /** Overrides the location sounds are heard from.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiolistener3d.html  
     */
    class AudioListener3D extends Node3D {
        constructor(identifier?: any)
        /** Enables the listener. This will override the current camera's listener. */
        make_current(): void
        
        /** Disables the listener to use the current camera's listener instead. */
        clear_current(): void
        
        /** Returns `true` if the listener was made current using [method make_current], `false` otherwise.  
         *      
         *  **Note:** There may be more than one AudioListener3D marked as "current" in the scene tree, but only the one that was made current last will be used.  
         */
        is_current(): boolean
        
        /** Returns the listener's global orthonormalized [Transform3D]. */
        get_listener_transform(): Transform3D
    }
    class AudioListener3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Base class for audio streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostream.html  
     */
    class AudioStream extends Resource {
        constructor(identifier?: any)
        /** Override this method to customize the returned value of [method instantiate_playback]. Should returned a new [AudioStreamPlayback] created when the stream is played (such as by an [AudioStreamPlayer]).. */
        /* gdvirtual */ _instantiate_playback(): AudioStreamPlayback
        
        /** Override this method to customize the name assigned to this audio stream. Unused by the engine. */
        /* gdvirtual */ _get_stream_name(): string
        
        /** Override this method to customize the returned value of [method get_length]. Should return the length of this audio stream, in seconds. */
        /* gdvirtual */ _get_length(): float64
        
        /** Override this method to customize the returned value of [method is_monophonic]. Should return `true` if this audio stream only supports one channel. */
        /* gdvirtual */ _is_monophonic(): boolean
        
        /** Overridable method. Should return the tempo of this audio stream, in beats per minute (BPM). Used by the engine to determine the position of every beat.  
         *  Ideally, the returned value should be based off the stream's sample rate ([member AudioStreamWAV.mix_rate], for example).  
         */
        /* gdvirtual */ _get_bpm(): float64
        
        /** Overridable method. Should return the total number of beats of this audio stream. Used by the engine to determine the position of every beat.  
         *  Ideally, the returned value should be based off the stream's sample rate ([member AudioStreamWAV.mix_rate], for example).  
         */
        /* gdvirtual */ _get_beat_count(): int64
        
        /** Returns the length of the audio stream in seconds. */
        get_length(): float64
        
        /** Returns `true` if this audio stream only supports one channel ( *monophony* ), or `false` if the audio stream supports two or more channels ( *polyphony* ). */
        is_monophonic(): boolean
        
        /** Returns a newly created [AudioStreamPlayback] intended to play this audio stream. Useful for when you want to extend [method _instantiate_playback] but call [method instantiate_playback] from an internally held AudioStream subresource. An example of this can be found in the source code for `AudioStreamRandomPitch::instantiate_playback`. */
        instantiate_playback(): AudioStreamPlayback
    }
    class AudioStreamEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** An audio stream with utilities for procedural sound generation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamgenerator.html  
     */
    class AudioStreamGenerator extends AudioStream {
        constructor(identifier?: any)
        set_mix_rate(hz: float64): void
        get_mix_rate(): float64
        set_buffer_length(seconds: float64): void
        get_buffer_length(): float64
        
        /** The sample rate to use (in Hz). Higher values are more demanding for the CPU to generate, but result in better quality.  
         *  In games, common sample rates in use are `11025`, `16000`, `22050`, `32000`, `44100`, and `48000`.  
         *  According to the [url=https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem]Nyquist-Shannon sampling theorem[/url], there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are generating lower-pitched sounds such as voices, lower sample rates such as `32000` or `22050` may be usable with no loss in quality.  
         */
        get mix_rate(): float64
        set mix_rate(value: float64)
        
        /** The length of the buffer to generate (in seconds). Lower values result in less latency, but require the script to generate audio data faster, resulting in increased CPU usage and more risk for audio cracking if the CPU can't keep up. */
        get buffer_length(): float64
        set buffer_length(value: float64)
    }
    /** Plays back audio generated using [AudioStreamGenerator].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamgeneratorplayback.html  
     */
    class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
        /** Pushes a single audio data frame to the buffer. This is usually less efficient than [method push_buffer] in C# and compiled languages via GDExtension, but [method push_frame] may be  *more*  efficient in GDScript. */
        push_frame(frame: Vector2): boolean
        
        /** Returns `true` if a buffer of the size [param amount] can be pushed to the audio sample data buffer without overflowing it, `false` otherwise. */
        can_push_buffer(amount: int64): boolean
        
        /** Pushes several audio data frames to the buffer. This is usually more efficient than [method push_frame] in C# and compiled languages via GDExtension, but [method push_buffer] may be  *less*  efficient in GDScript. */
        push_buffer(frames: PackedVector2Array): boolean
        
        /** Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is `0`, the buffer is full. */
        get_frames_available(): int64
        
        /** Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback. */
        get_skips(): int64
        
        /** Clears the audio sample data buffer. */
        clear_buffer(): void
    }
    class AudioStreamImportSettings extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    /** MP3 audio stream driver.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreammp3.html  
     */
    class AudioStreamMP3 extends AudioStream {
        constructor(identifier?: any)
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_loop(enable: boolean): void
        has_loop(): boolean
        set_loop_offset(seconds: float64): void
        get_loop_offset(): float64
        set_bpm(bpm: float64): void
        get_bpm(): float64
        set_beat_count(count: int64): void
        get_beat_count(): int64
        set_bar_beats(count: int64): void
        get_bar_beats(): int64
        
        /** Contains the audio data in bytes.  
         *  You can load a file without having to import it beforehand using the code snippet below. Keep in mind that this snippet loads the whole file into memory and may not be ideal for huge files (hundreds of megabytes or more).  
         *    
         */
        get data(): PackedByteArray
        set data(value: PackedByteArray)
        get bpm(): float64
        set bpm(value: float64)
        get beat_count(): int64
        set beat_count(value: int64)
        get bar_beats(): int64
        set bar_beats(value: int64)
        
        /** If `true`, the stream will automatically loop when it reaches the end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Time in seconds at which the stream starts after being looped. */
        get loop_offset(): float64
        set loop_offset(value: float64)
    }
    /** Plays real-time audio input data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreammicrophone.html  
     */
    class AudioStreamMicrophone extends AudioStream {
        constructor(identifier?: any)
    }
    /** A class representing an Ogg Vorbis audio stream.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamoggvorbis.html  
     */
    class AudioStreamOggVorbis extends AudioStream {
        constructor(identifier?: any)
        /** Creates a new AudioStreamOggVorbis instance from the given buffer. The buffer must contain Ogg Vorbis data. */
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        
        /** Creates a new AudioStreamOggVorbis instance from the given file path. The file must be in Ogg Vorbis format. */
        static load_from_file(path: string): AudioStreamOggVorbis
        set_packet_sequence(packet_sequence: OggPacketSequence): void
        get_packet_sequence(): OggPacketSequence
        set_loop(enable: boolean): void
        has_loop(): boolean
        set_loop_offset(seconds: float64): void
        get_loop_offset(): float64
        set_bpm(bpm: float64): void
        get_bpm(): float64
        set_beat_count(count: int64): void
        get_beat_count(): int64
        set_bar_beats(count: int64): void
        get_bar_beats(): int64
        
        /** Contains the raw Ogg data for this stream. */
        get packet_sequence(): Object
        set packet_sequence(value: Object)
        get bpm(): float64
        set bpm(value: float64)
        get beat_count(): int64
        set beat_count(value: int64)
        get bar_beats(): int64
        set bar_beats(value: int64)
        
        /** If `true`, the audio will play again from the specified [member loop_offset] once it is done playing. Useful for ambient sounds and background music. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Time in seconds at which the stream starts after being looped. */
        get loop_offset(): float64
        set loop_offset(value: float64)
    }
    /** Meta class for playing back audio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplayback.html  
     */
    class AudioStreamPlayback extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to customize what happens when the playback starts at the given position, such as by calling [method AudioStreamPlayer.play]. */
        /* gdvirtual */ _start(from_pos: float64): void
        
        /** Override this method to customize what happens when the playback is stopped, such as by calling [method AudioStreamPlayer.stop]. */
        /* gdvirtual */ _stop(): void
        
        /** Overridable method. Should return `true` if this playback is active and playing its audio stream. */
        /* gdvirtual */ _is_playing(): boolean
        
        /** Overridable method. Should return how many times this audio stream has looped. Most built-in playbacks always return `0`. */
        /* gdvirtual */ _get_loop_count(): int64
        
        /** Overridable method. Should return the current progress along the audio stream, in seconds. */
        /* gdvirtual */ _get_playback_position(): float64
        
        /** Override this method to customize what happens when seeking this audio stream at the given [param position], such as by calling [method AudioStreamPlayer.seek]. */
        /* gdvirtual */ _seek(position: float64): void
        
        /** Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.  
         *      
         *  **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.  
         */
        /* gdvirtual */ _mix(buffer: int64, rate_scale: float64, frames: int64): int64
        
        /** Overridable method. Called whenever the audio stream is mixed if the playback is active and [method AudioServer.set_enable_tagging_used_audio_streams] has been set to `true`. Editor plugins may use this method to "tag" the current position along the audio stream and display it in a preview. */
        /* gdvirtual */ _tag_used_streams(): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplaybackoggvorbis.html */
    class AudioStreamPlaybackOggVorbis extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
    }
    /** Playback instance for [AudioStreamPolyphonic].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplaybackpolyphonic.html  
     */
    class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
        /** Returned by [method play_stream] in case it could not allocate a stream for playback. */
        static readonly INVALID_ID = -1
        constructor(identifier?: any)
        
        /** Play an [AudioStream] at a given offset, volume and pitch scale. Playback starts immediately.  
         *  The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.  
         *  This ID becomes invalid when the stream ends (if it does not loop), when the [AudioStreamPlaybackPolyphonic] is stopped, or when [method stop_stream] is called.  
         *  This function returns [constant INVALID_ID] if the amount of streams currently playing equals [member AudioStreamPolyphonic.polyphony]. If you need a higher amount of maximum polyphony, raise this value.  
         */
        play_stream(stream: AudioStream, from_offset: float64 = 0, volume_db: float64 = 0, pitch_scale: float64 = 1): int64
        
        /** Change the stream volume (in db). The [param stream] argument is an integer ID returned by [method play_stream]. */
        set_stream_volume(stream: int64, volume_db: float64): void
        
        /** Change the stream pitch scale. The [param stream] argument is an integer ID returned by [method play_stream]. */
        set_stream_pitch_scale(stream: int64, pitch_scale: float64): void
        
        /** Return true whether the stream associated with an integer ID is still playing. Check [method play_stream] for information on when this ID becomes invalid. */
        is_stream_playing(stream: int64): boolean
        
        /** Stop a stream. The [param stream] argument is an integer ID returned by [method play_stream], which becomes invalid after calling this function. */
        stop_stream(stream: int64): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplaybackresampled.html */
    class AudioStreamPlaybackResampled extends AudioStreamPlayback {
        constructor(identifier?: any)
        /* gdvirtual */ _mix_resampled(dst_buffer: int64, frame_count: int64): int64
        /* gdvirtual */ _get_stream_sampling_rate(): float64
        begin_resample(): void
    }
    namespace AudioStreamPlayer {
        enum MixTarget {
            /** The audio will be played only on the first channel. */
            MIX_TARGET_STEREO = 0,
            
            /** The audio will be played on all surround channels. */
            MIX_TARGET_SURROUND = 1,
            
            /** The audio will be played on the second channel, which is usually the center. */
            MIX_TARGET_CENTER = 2,
        }
    }
    /** Plays back audio non-positionally.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplayer.html  
     */
    class AudioStreamPlayer extends Node {
        constructor(identifier?: any)
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: float64): void
        get_volume_db(): float64
        set_pitch_scale(pitch_scale: float64): void
        get_pitch_scale(): float64
        
        /** Plays the audio from the given [param from_position], in seconds. */
        play(from_position: float64 = 0): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: float64): void
        
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        
        /** Returns the position in the [AudioStream] in seconds. */
        get_playback_position(): float64
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
        set_max_polyphony(max_polyphony: int64): void
        get_max_polyphony(): int64
        
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer]. */
        get_stream_playback(): AudioStreamPlayback
        
        /** The [AudioStream] object to be played. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        
        /** Volume of sound, in dB. */
        get volume_db(): float64
        set volume_db(value: float64)
        
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        get pitch_scale(): float64
        set pitch_scale(value: float64)
        
        /** If `true`, audio is playing. */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the playback is paused. You can resume it by setting [member stream_paused] to `false`. */
        get stream_paused(): boolean
        set stream_paused(value: boolean)
        
        /** If the audio configuration has more than two speakers, this sets the target channels. See [enum MixTarget] constants. */
        get mix_target(): int64
        set mix_target(value: int64)
        
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        get max_polyphony(): int64
        set max_polyphony(value: int64)
        
        /** Bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal //  => void
    }
    /** Plays positional sound in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplayer2d.html  
     */
    class AudioStreamPlayer2D extends Node2D {
        constructor(identifier?: any)
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: float64): void
        get_volume_db(): float64
        set_pitch_scale(pitch_scale: float64): void
        get_pitch_scale(): float64
        
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(from_position: float64 = 0): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: float64): void
        
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        
        /** Returns the position in the [AudioStream]. */
        get_playback_position(): float64
        set_bus(bus: StringName): void
        get_bus(): StringName
        set_autoplay(enable: boolean): void
        is_autoplay_enabled(): boolean
        _set_playing(enable: boolean): void
        _is_active(): boolean
        set_max_distance(pixels: float64): void
        get_max_distance(): float64
        set_attenuation(curve: float64): void
        get_attenuation(): float64
        set_area_mask(mask: int64): void
        get_area_mask(): int64
        set_stream_paused(pause: boolean): void
        get_stream_paused(): boolean
        set_max_polyphony(max_polyphony: int64): void
        get_max_polyphony(): int64
        set_panning_strength(panning_strength: float64): void
        get_panning_strength(): float64
        
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer2D]. */
        get_stream_playback(): AudioStreamPlayback
        
        /** The [AudioStream] object to be played. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        
        /** Base volume before attenuation. */
        get volume_db(): float64
        set volume_db(value: float64)
        
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        get pitch_scale(): float64
        set pitch_scale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the playback is paused. You can resume it by setting [member stream_paused] to `false`. */
        get stream_paused(): boolean
        set stream_paused(value: boolean)
        
        /** Maximum distance from which audio is still hearable. */
        get max_distance(): float64
        set max_distance(value: float64)
        
        /** The volume is attenuated over distance with this as an exponent. */
        get attenuation(): float64
        set attenuation(value: float64)
        
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        get max_polyphony(): int64
        set max_polyphony(value: int64)
        
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/2d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
        get panning_strength(): float64
        set panning_strength(value: float64)
        
        /** Bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Determines which [Area2D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        get area_mask(): int64
        set area_mask(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal //  => void
    }
    namespace AudioStreamPlayer3D {
        enum AttenuationModel {
            /** Attenuation of loudness according to linear distance. */
            ATTENUATION_INVERSE_DISTANCE = 0,
            
            /** Attenuation of loudness according to squared distance. */
            ATTENUATION_INVERSE_SQUARE_DISTANCE = 1,
            
            /** Attenuation of loudness according to logarithmic distance. */
            ATTENUATION_LOGARITHMIC = 2,
            
            /** No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an [AudioStreamPlayer]. [constant ATTENUATION_DISABLED] can be combined with a [member max_distance] value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size. */
            ATTENUATION_DISABLED = 3,
        }
        enum DopplerTracking {
            /** Disables doppler tracking. */
            DOPPLER_TRACKING_DISABLED = 0,
            
            /** Executes doppler tracking during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            DOPPLER_TRACKING_IDLE_STEP = 1,
            
            /** Executes doppler tracking during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            DOPPLER_TRACKING_PHYSICS_STEP = 2,
        }
    }
    /** Plays positional sound in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamplayer3d.html  
     */
    class AudioStreamPlayer3D extends Node3D {
        constructor(identifier?: any)
        set_stream(stream: AudioStream): void
        get_stream(): AudioStream
        set_volume_db(volume_db: float64): void
        get_volume_db(): float64
        set_unit_size(unit_size: float64): void
        get_unit_size(): float64
        set_max_db(max_db: float64): void
        get_max_db(): float64
        set_pitch_scale(pitch_scale: float64): void
        get_pitch_scale(): float64
        
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(from_position: float64 = 0): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(to_position: float64): void
        
        /** Stops the audio. */
        stop(): void
        is_playing(): boolean
        
        /** Returns the position in the [AudioStream]. */
        get_playback_position(): float64
        set_bus(bus: StringName): void
        get_bus(): StringName
        set_autoplay(enable: boolean): void
        is_autoplay_enabled(): boolean
        _set_playing(enable: boolean): void
        _is_active(): boolean
        set_max_distance(meters: float64): void
        get_max_distance(): float64
        set_area_mask(mask: int64): void
        get_area_mask(): int64
        set_emission_angle(degrees: float64): void
        get_emission_angle(): float64
        set_emission_angle_enabled(enabled: boolean): void
        is_emission_angle_enabled(): boolean
        set_emission_angle_filter_attenuation_db(db: float64): void
        get_emission_angle_filter_attenuation_db(): float64
        set_attenuation_filter_cutoff_hz(degrees: float64): void
        get_attenuation_filter_cutoff_hz(): float64
        set_attenuation_filter_db(db: float64): void
        get_attenuation_filter_db(): float64
        set_attenuation_model(model: AudioStreamPlayer3D.AttenuationModel): void
        get_attenuation_model(): AudioStreamPlayer3D.AttenuationModel
        set_doppler_tracking(mode: AudioStreamPlayer3D.DopplerTracking): void
        get_doppler_tracking(): AudioStreamPlayer3D.DopplerTracking
        set_stream_paused(pause: boolean): void
        get_stream_paused(): boolean
        set_max_polyphony(max_polyphony: int64): void
        get_max_polyphony(): int64
        set_panning_strength(panning_strength: float64): void
        get_panning_strength(): float64
        
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        has_stream_playback(): boolean
        
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer3D]. */
        get_stream_playback(): AudioStreamPlayback
        
        /** The [AudioStream] resource to be played. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        
        /** Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation. */
        get attenuation_model(): int64
        set attenuation_model(value: int64)
        
        /** The base sound level before attenuation, in decibels. */
        get volume_db(): float64
        set volume_db(value: float64)
        
        /** The factor for the attenuation effect. Higher values make the sound audible over a larger distance. */
        get unit_size(): float64
        set unit_size(value: float64)
        
        /** Sets the absolute maximum of the sound level, in decibels. */
        get max_db(): float64
        set max_db(value: float64)
        
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        get pitch_scale(): float64
        set pitch_scale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when the AudioStreamPlayer3D node is added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the playback is paused. You can resume it by setting [member stream_paused] to `false`. */
        get stream_paused(): boolean
        set stream_paused(value: boolean)
        
        /** The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than `0.0`. [member max_distance] works in tandem with [member unit_size]. However, unlike [member unit_size] whose behavior depends on the [member attenuation_model], [member max_distance] always works in a linear fashion. This can be used to prevent the [AudioStreamPlayer3D] from requiring audio mixing when the listener is far away, which saves CPU resources. */
        get max_distance(): float64
        set max_distance(value: float64)
        
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        get max_polyphony(): int64
        set max_polyphony(value: int64)
        
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/3d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
        get panning_strength(): float64
        set panning_strength(value: float64)
        
        /** The bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Determines which [Area3D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        get area_mask(): int64
        set area_mask(value: int64)
        
        /** If `true`, the audio should be attenuated according to the direction of the sound. */
        get emission_angle_enabled(): boolean
        set emission_angle_enabled(value: boolean)
        
        /** The angle in which the audio reaches a listener unattenuated. */
        get emission_angle_degrees(): float64
        set emission_angle_degrees(value: float64)
        
        /** Attenuation factor used if listener is outside of [member emission_angle_degrees] and [member emission_angle_enabled] is set, in decibels. */
        get emission_angle_filter_attenuation_db(): float64
        set emission_angle_filter_attenuation_db(value: float64)
        
        /** The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to `20500` as this frequency is above the human hearing limit. */
        get attenuation_filter_cutoff_hz(): float64
        set attenuation_filter_cutoff_hz(value: float64)
        
        /** Amount how much the filter affects the loudness, in decibels. */
        get attenuation_filter_db(): float64
        set attenuation_filter_db(value: float64)
        
        /** Decides in which step the Doppler effect should be calculated. */
        get doppler_tracking(): int64
        set doppler_tracking(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal //  => void
    }
    class AudioStreamPlayer3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreampolyphonic.html  
     */
    class AudioStreamPolyphonic extends AudioStream {
        constructor(identifier?: any)
        set_polyphony(voices: int64): void
        get_polyphony(): int64
        
        /** Maximum amount of simultaneous streams that can be played. */
        get polyphony(): int64
        set polyphony(value: int64)
    }
    class AudioStreamPreviewGenerator extends Node {
        constructor(identifier?: any)
        _update_emit(_unnamed_arg0: int64): void
        generate_preview(stream: AudioStream): any /*AudioStreamPreview*/
        readonly preview_updated: Signal // obj_id: int64 => void
    }
    namespace AudioStreamRandomizer {
        enum PlaybackMode {
            /** Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur. */
            PLAYBACK_RANDOM_NO_REPEATS = 0,
            
            /** Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play. */
            PLAYBACK_RANDOM = 1,
            
            /** Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play. */
            PLAYBACK_SEQUENTIAL = 2,
        }
    }
    /** Wraps a pool of audio streams with pitch and volume shifting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamrandomizer.html  
     */
    class AudioStreamRandomizer extends AudioStream {
        constructor(identifier?: any)
        /** Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool. */
        add_stream(index: int64, stream: AudioStream, weight: float64 = 1): void
        
        /** Move a stream from one index to another. */
        move_stream(index_from: int64, index_to: int64): void
        
        /** Remove the stream at the specified index. */
        remove_stream(index: int64): void
        
        /** Set the AudioStream at the specified index. */
        set_stream(index: int64, stream: AudioStream): void
        
        /** Returns the stream at the specified index. */
        get_stream(index: int64): AudioStream
        
        /** Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes. */
        set_stream_probability_weight(index: int64, weight: float64): void
        
        /** Returns the probability weight associated with the stream at the given index. */
        get_stream_probability_weight(index: int64): float64
        set_streams_count(count: int64): void
        get_streams_count(): int64
        set_random_pitch(scale: float64): void
        get_random_pitch(): float64
        set_random_volume_offset_db(db_offset: float64): void
        get_random_volume_offset_db(): float64
        set_playback_mode(mode: AudioStreamRandomizer.PlaybackMode): void
        get_playback_mode(): AudioStreamRandomizer.PlaybackMode
        
        /** Controls how this AudioStreamRandomizer picks which AudioStream to play next. */
        get playback_mode(): int64
        set playback_mode(value: int64)
        
        /** The intensity of random pitch variation. A value of 1 means no variation. */
        get random_pitch(): float64
        set random_pitch(value: float64)
        
        /** The intensity of random volume variation. A value of 0 means no variation. */
        get random_volume_offset_db(): float64
        set random_volume_offset_db(value: float64)
        
        /** The number of streams in the stream pool. */
        get streams_count(): int64
        set streams_count(value: int64)
    }
    class AudioStreamRandomizerEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace AudioStreamWAV {
        enum Format {
            /** 8-bit audio codec. */
            FORMAT_8_BITS = 0,
            
            /** 16-bit audio codec. */
            FORMAT_16_BITS = 1,
            
            /** Audio is compressed using IMA ADPCM. */
            FORMAT_IMA_ADPCM = 2,
        }
        enum LoopMode {
            /** Audio does not loop. */
            LOOP_DISABLED = 0,
            
            /** Audio loops the data between [member loop_begin] and [member loop_end], playing forward only. */
            LOOP_FORWARD = 1,
            
            /** Audio loops the data between [member loop_begin] and [member loop_end], playing back and forth. */
            LOOP_PINGPONG = 2,
            
            /** Audio loops the data between [member loop_begin] and [member loop_end], playing backward only. */
            LOOP_BACKWARD = 3,
        }
    }
    /** Stores audio data loaded from WAV files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_audiostreamwav.html  
     */
    class AudioStreamWAV extends AudioStream {
        constructor(identifier?: any)
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_format(format: AudioStreamWAV.Format): void
        get_format(): AudioStreamWAV.Format
        set_loop_mode(loop_mode: AudioStreamWAV.LoopMode): void
        get_loop_mode(): AudioStreamWAV.LoopMode
        set_loop_begin(loop_begin: int64): void
        get_loop_begin(): int64
        set_loop_end(loop_end: int64): void
        get_loop_end(): int64
        set_mix_rate(mix_rate: int64): void
        get_mix_rate(): int64
        set_stereo(stereo: boolean): void
        is_stereo(): boolean
        
        /** Saves the AudioStreamWAV as a WAV file to [param path]. Samples with IMA ADPCM format can't be saved.  
         *      
         *  **Note:** A `.wav` extension is automatically appended to [param path] if it is missing.  
         */
        save_to_wav(path: string): Error
        
        /** Contains the audio data in bytes.  
         *      
         *  **Note:** This property expects signed PCM8 data. To convert unsigned PCM8 to signed PCM8, subtract 128 from each byte.  
         */
        get data(): PackedByteArray
        set data(value: PackedByteArray)
        
        /** Audio format. See [enum Format] constants for values. */
        get format(): int64
        set format(value: int64)
        
        /** The loop mode. This information will be imported automatically from the WAV file if present. See [enum LoopMode] constants for values. */
        get loop_mode(): int64
        set loop_mode(value: int64)
        
        /** The loop start point (in number of samples, relative to the beginning of the sample). This information will be imported automatically from the WAV file if present. */
        get loop_begin(): int64
        set loop_begin(value: int64)
        
        /** The loop end point (in number of samples, relative to the beginning of the sample). This information will be imported automatically from the WAV file if present. */
        get loop_end(): int64
        set loop_end(value: int64)
        
        /** The sample rate for mixing this audio. Higher values require more storage space, but result in better quality.  
         *  In games, common sample rates in use are `11025`, `16000`, `22050`, `32000`, `44100`, and `48000`.  
         *  According to the [url=https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem]Nyquist-Shannon sampling theorem[/url], there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are using lower-pitched sounds such as voices, lower sample rates such as `32000` or `22050` may be usable with no loss in quality.  
         */
        get mix_rate(): int64
        set mix_rate(value: int64)
        
        /** If `true`, audio is stereo. */
        get stereo(): boolean
        set stereo(value: boolean)
    }
    namespace BackBufferCopy {
        enum CopyMode {
            /** Disables the buffering mode. This means the [BackBufferCopy] node will directly use the portion of screen it covers. */
            COPY_MODE_DISABLED = 0,
            
            /** [BackBufferCopy] buffers a rectangular region. */
            COPY_MODE_RECT = 1,
            
            /** [BackBufferCopy] buffers the entire screen. */
            COPY_MODE_VIEWPORT = 2,
        }
    }
    /** A node that copies a region of the screen to a buffer for access in shader code.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_backbuffercopy.html  
     */
    class BackBufferCopy extends Node2D {
        constructor(identifier?: any)
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        set_copy_mode(copy_mode: BackBufferCopy.CopyMode): void
        get_copy_mode(): BackBufferCopy.CopyMode
        
        /** Buffer mode. See [enum CopyMode] constants. */
        get copy_mode(): int64
        set copy_mode(value: int64)
        
        /** The area covered by the [BackBufferCopy]. Only used if [member copy_mode] is [constant COPY_MODE_RECT]. */
        get rect(): Rect2
        set rect(value: Rect2)
    }
    class BackgroundProgress extends HBoxContainer {
        constructor(identifier?: any)
        _add_task(_unnamed_arg0: string, _unnamed_arg1: string, _unnamed_arg2: int64): void
        _task_step(_unnamed_arg0: string, _unnamed_arg1: int64): void
        _end_task(_unnamed_arg0: string): void
        _update(): void
    }
    namespace BaseButton {
        enum DrawMode {
            /** The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons. */
            DRAW_NORMAL = 0,
            
            /** The state of buttons are pressed. */
            DRAW_PRESSED = 1,
            
            /** The state of buttons are hovered. */
            DRAW_HOVER = 2,
            
            /** The state of buttons are disabled. */
            DRAW_DISABLED = 3,
            
            /** The state of buttons are both hovered and pressed. */
            DRAW_HOVER_PRESSED = 4,
        }
        enum ActionMode {
            /** Require just a press to consider the button clicked. */
            ACTION_MODE_BUTTON_PRESS = 0,
            
            /** Require a press and a subsequent release before considering the button clicked. */
            ACTION_MODE_BUTTON_RELEASE = 1,
        }
    }
    /** Abstract base class for GUI buttons.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_basebutton.html  
     */
    class BaseButton extends Control {
        constructor(identifier?: any)
        /** Called when the button is pressed. If you need to know the button's pressed state (and [member toggle_mode] is active), use [method _toggled] instead. */
        /* gdvirtual */ _pressed(): void
        
        /** Called when the button is toggled (only if [member toggle_mode] is active). */
        /* gdvirtual */ _toggled(toggled_on: boolean): void
        set_pressed(pressed: boolean): void
        is_pressed(): boolean
        
        /** Changes the [member button_pressed] state of the button, without emitting [signal toggled]. Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if [member toggle_mode] is `true`.  
         *      
         *  **Note:** This method doesn't unpress other buttons in [member button_group].  
         */
        set_pressed_no_signal(pressed: boolean): void
        
        /** Returns `true` if the mouse has entered the button and has not left it yet. */
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
        
        /** If `true`, the button is in disabled state and can't be clicked or toggled. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** If `true`, the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked. */
        get toggle_mode(): boolean
        set toggle_mode(value: boolean)
        
        /** If `true`, the button's state is pressed. Means the button is pressed down or toggled (if [member toggle_mode] is active). Only works if [member toggle_mode] is `true`.  
         *      
         *  **Note:** Setting [member button_pressed] will result in [signal toggled] to be emitted. If you want to change the pressed state without emitting that signal, use [method set_pressed_no_signal].  
         */
        get button_pressed(): boolean
        set button_pressed(value: boolean)
        
        /** Determines when the button is considered clicked, one of the [enum ActionMode] constants. */
        get action_mode(): int64
        set action_mode(value: int64)
        
        /** Binary mask to choose which mouse buttons this button will respond to.  
         *  To allow both left-click and right-click, use `MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT`.  
         */
        get button_mask(): int64
        set button_mask(value: int64)
        
        /** If `true`, the button stays pressed when moving the cursor outside the button while pressing it.  
         *      
         *  **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.  
         */
        get keep_pressed_outside(): boolean
        set keep_pressed_outside(value: boolean)
        
        /** The [ButtonGroup] associated with the button. Not to be confused with node groups.  
         *      
         *  **Note:** The button will be configured as a radio button if a [ButtonGroup] is assigned to it.  
         */
        get button_group(): ButtonGroup
        set button_group(value: ButtonGroup)
        
        /** [Shortcut] associated to the button. */
        get shortcut(): Shortcut
        set shortcut(value: Shortcut)
        
        /** If `true`, the button will highlight for a short amount of time when its shortcut is activated. If `false` and [member toggle_mode] is `false`, the shortcut will activate without any visual feedback. */
        get shortcut_feedback(): boolean
        set shortcut_feedback(value: boolean)
        
        /** If `true`, the button will add information about its shortcut in the tooltip. */
        get shortcut_in_tooltip(): boolean
        set shortcut_in_tooltip(value: boolean)
        
        /** Emitted when the button is toggled or pressed. This is on [signal button_down] if [member action_mode] is [constant ACTION_MODE_BUTTON_PRESS] and on [signal button_up] otherwise.  
         *  If you need to know the button's pressed state (and [member toggle_mode] is active), use [signal toggled] instead.  
         */
        readonly pressed: Signal //  => void
        
        /** Emitted when the button stops being held down. */
        readonly button_up: Signal //  => void
        
        /** Emitted when the button starts being held down. */
        readonly button_down: Signal //  => void
        
        /** Emitted when the button was just toggled between pressed and normal states (only if [member toggle_mode] is active). The new state is contained in the [param toggled_on] argument. */
        readonly toggled: Signal // toggled_on: boolean => void
    }
    namespace BaseMaterial3D {
        enum TextureParam {
            /** Texture specifying per-pixel color. */
            TEXTURE_ALBEDO = 0,
            
            /** Texture specifying per-pixel metallic value. */
            TEXTURE_METALLIC = 1,
            
            /** Texture specifying per-pixel roughness value. */
            TEXTURE_ROUGHNESS = 2,
            
            /** Texture specifying per-pixel emission color. */
            TEXTURE_EMISSION = 3,
            
            /** Texture specifying per-pixel normal vector. */
            TEXTURE_NORMAL = 4,
            
            /** Texture specifying per-pixel rim value. */
            TEXTURE_RIM = 5,
            
            /** Texture specifying per-pixel clearcoat value. */
            TEXTURE_CLEARCOAT = 6,
            
            /** Texture specifying per-pixel flowmap direction for use with [member anisotropy]. */
            TEXTURE_FLOWMAP = 7,
            
            /** Texture specifying per-pixel ambient occlusion value. */
            TEXTURE_AMBIENT_OCCLUSION = 8,
            
            /** Texture specifying per-pixel height. */
            TEXTURE_HEIGHTMAP = 9,
            
            /** Texture specifying per-pixel subsurface scattering. */
            TEXTURE_SUBSURFACE_SCATTERING = 10,
            
            /** Texture specifying per-pixel transmittance for subsurface scattering. */
            TEXTURE_SUBSURFACE_TRANSMITTANCE = 11,
            
            /** Texture specifying per-pixel backlight color. */
            TEXTURE_BACKLIGHT = 12,
            
            /** Texture specifying per-pixel refraction strength. */
            TEXTURE_REFRACTION = 13,
            
            /** Texture specifying per-pixel detail mask blending value. */
            TEXTURE_DETAIL_MASK = 14,
            
            /** Texture specifying per-pixel detail color. */
            TEXTURE_DETAIL_ALBEDO = 15,
            
            /** Texture specifying per-pixel detail normal. */
            TEXTURE_DETAIL_NORMAL = 16,
            
            /** Texture holding ambient occlusion, roughness, and metallic. */
            TEXTURE_ORM = 17,
            
            /** Represents the size of the [enum TextureParam] enum. */
            TEXTURE_MAX = 18,
        }
        enum TextureFilter {
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            TEXTURE_FILTER_NEAREST = 0,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            TEXTURE_FILTER_LINEAR = 1,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance. */
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 2,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance. */
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 3,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 4,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 5,
            
            /** Represents the size of the [enum TextureFilter] enum. */
            TEXTURE_FILTER_MAX = 6,
        }
        enum DetailUV {
            /** Use `UV` with the detail texture. */
            DETAIL_UV_1 = 0,
            
            /** Use `UV2` with the detail texture. */
            DETAIL_UV_2 = 1,
        }
        enum Transparency {
            /** The material will not use transparency. This is the fastest to render. */
            TRANSPARENCY_DISABLED = 0,
            
            /** The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting. */
            TRANSPARENCY_ALPHA = 1,
            
            /** The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. */
            TRANSPARENCY_ALPHA_SCISSOR = 2,
            
            /** The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering. */
            TRANSPARENCY_ALPHA_HASH = 3,
            
            /** The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows. */
            TRANSPARENCY_ALPHA_DEPTH_PRE_PASS = 4,
            
            /** Represents the size of the [enum Transparency] enum. */
            TRANSPARENCY_MAX = 5,
        }
        enum ShadingMode {
            /** The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights. */
            SHADING_MODE_UNSHADED = 0,
            
            /** The object will be shaded per pixel. Useful for realistic shading effects. */
            SHADING_MODE_PER_PIXEL = 1,
            
            /** The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality. Not implemented yet (this mode will act like [constant SHADING_MODE_PER_PIXEL]). */
            SHADING_MODE_PER_VERTEX = 2,
            
            /** Represents the size of the [enum ShadingMode] enum. */
            SHADING_MODE_MAX = 3,
        }
        enum Feature {
            /** Constant for setting [member emission_enabled]. */
            FEATURE_EMISSION = 0,
            
            /** Constant for setting [member normal_enabled]. */
            FEATURE_NORMAL_MAPPING = 1,
            
            /** Constant for setting [member rim_enabled]. */
            FEATURE_RIM = 2,
            
            /** Constant for setting [member clearcoat_enabled]. */
            FEATURE_CLEARCOAT = 3,
            
            /** Constant for setting [member anisotropy_enabled]. */
            FEATURE_ANISOTROPY = 4,
            
            /** Constant for setting [member ao_enabled]. */
            FEATURE_AMBIENT_OCCLUSION = 5,
            
            /** Constant for setting [member heightmap_enabled]. */
            FEATURE_HEIGHT_MAPPING = 6,
            
            /** Constant for setting [member subsurf_scatter_enabled]. */
            FEATURE_SUBSURFACE_SCATTERING = 7,
            
            /** Constant for setting [member subsurf_scatter_transmittance_enabled]. */
            FEATURE_SUBSURFACE_TRANSMITTANCE = 8,
            
            /** Constant for setting [member backlight_enabled]. */
            FEATURE_BACKLIGHT = 9,
            
            /** Constant for setting [member refraction_enabled]. */
            FEATURE_REFRACTION = 10,
            
            /** Constant for setting [member detail_enabled]. */
            FEATURE_DETAIL = 11,
            
            /** Represents the size of the [enum Feature] enum. */
            FEATURE_MAX = 12,
        }
        enum BlendMode {
            /** Default blend mode. The color of the object is blended over the background based on the object's alpha value. */
            BLEND_MODE_MIX = 0,
            
            /** The color of the object is added to the background. */
            BLEND_MODE_ADD = 1,
            
            /** The color of the object is subtracted from the background. */
            BLEND_MODE_SUB = 2,
            
            /** The color of the object is multiplied by the background. */
            BLEND_MODE_MUL = 3,
        }
        enum AlphaAntiAliasing {
            /** Disables Alpha AntiAliasing for the material. */
            ALPHA_ANTIALIASING_OFF = 0,
            
            /** Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask. */
            ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE = 1,
            
            /** Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask. */
            ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE = 2,
        }
        enum DepthDrawMode {
            /** Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass. */
            DEPTH_DRAW_OPAQUE_ONLY = 0,
            
            /** Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.  
             *      
             *  **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see [enum Transparency].  
             */
            DEPTH_DRAW_ALWAYS = 1,
            
            /** Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled). */
            DEPTH_DRAW_DISABLED = 2,
        }
        enum CullMode {
            /** Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible. */
            CULL_BACK = 0,
            
            /** Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior. */
            CULL_FRONT = 1,
            
            /** No face culling is performed; both the front face and back face will be visible. */
            CULL_DISABLED = 2,
        }
        enum Flags {
            /** Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth. */
            FLAG_DISABLE_DEPTH_TEST = 0,
            
            /** Set `ALBEDO` to the per-vertex color specified in the mesh. */
            FLAG_ALBEDO_FROM_VERTEX_COLOR = 1,
            
            /** Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also [member vertex_color_is_srgb].  
             *      
             *  **Note:** Only effective when using the Forward+ and Mobile rendering methods.  
             */
            FLAG_SRGB_VERTEX_COLOR = 2,
            
            /** Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`. */
            FLAG_USE_POINT_SIZE = 3,
            
            /** Object is scaled by depth so that it always appears the same size on screen. */
            FLAG_FIXED_SIZE = 4,
            
            /** Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when [member billboard_mode] is [constant BILLBOARD_ENABLED]. */
            FLAG_BILLBOARD_KEEP_SCALE = 5,
            
            /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
            FLAG_UV1_USE_TRIPLANAR = 6,
            
            /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
            FLAG_UV2_USE_TRIPLANAR = 7,
            
            /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
            FLAG_UV1_USE_WORLD_TRIPLANAR = 8,
            
            /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
            FLAG_UV2_USE_WORLD_TRIPLANAR = 9,
            
            /** Use `UV2` coordinates to look up from the [member ao_texture]. */
            FLAG_AO_ON_UV2 = 10,
            
            /** Use `UV2` coordinates to look up from the [member emission_texture]. */
            FLAG_EMISSION_ON_UV2 = 11,
            
            /** Forces the shader to convert albedo from sRGB space to linear space. See also [member albedo_texture_force_srgb]. */
            FLAG_ALBEDO_TEXTURE_FORCE_SRGB = 12,
            
            /** Disables receiving shadows from other objects. */
            FLAG_DONT_RECEIVE_SHADOWS = 13,
            
            /** Disables receiving ambient light. */
            FLAG_DISABLE_AMBIENT_LIGHT = 14,
            
            /** Enables the shadow to opacity feature. */
            FLAG_USE_SHADOW_TO_OPACITY = 15,
            
            /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
            FLAG_USE_TEXTURE_REPEAT = 16,
            
            /** Invert values read from a depth texture to convert them to height values (heightmap). */
            FLAG_INVERT_HEIGHTMAP = 17,
            
            /** Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin. */
            FLAG_SUBSURFACE_MODE_SKIN = 18,
            
            /** Enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering. */
            FLAG_PARTICLE_TRAILS_MODE = 19,
            
            /** Enables multichannel signed distance field rendering shader. */
            FLAG_ALBEDO_TEXTURE_MSDF = 20,
            
            /** Disables receiving depth-based or volumetric fog. */
            FLAG_DISABLE_FOG = 21,
            
            /** Represents the size of the [enum Flags] enum. */
            FLAG_MAX = 22,
        }
        enum DiffuseMode {
            /** Default diffuse scattering algorithm. */
            DIFFUSE_BURLEY = 0,
            
            /** Diffuse scattering ignores roughness. */
            DIFFUSE_LAMBERT = 1,
            
            /** Extends Lambert to cover more than 90 degrees when roughness increases. */
            DIFFUSE_LAMBERT_WRAP = 2,
            
            /** Uses a hard cut for lighting, with smoothing affected by roughness. */
            DIFFUSE_TOON = 3,
        }
        enum SpecularMode {
            /** Default specular blob. */
            SPECULAR_SCHLICK_GGX = 0,
            
            /** Toon blob which changes size based on roughness. */
            SPECULAR_TOON = 1,
            
            /** No specular blob. This is slightly faster to render than other specular modes. */
            SPECULAR_DISABLED = 2,
        }
        enum BillboardMode {
            /** Billboard mode is disabled. */
            BILLBOARD_DISABLED = 0,
            
            /** The object's Z axis will always face the camera. */
            BILLBOARD_ENABLED = 1,
            
            /** The object's X axis will always face the camera. */
            BILLBOARD_FIXED_Y = 2,
            
            /** Used for particle systems when assigned to [GPUParticles3D] and [CPUParticles3D] nodes (flipbook animation). Enables `particles_anim_*` properties.  
             *  The [member ParticleProcessMaterial.anim_speed_min] or [member CPUParticles3D.anim_speed_min] should also be set to a value bigger than zero for the animation to play.  
             */
            BILLBOARD_PARTICLES = 3,
        }
        enum TextureChannel {
            /** Used to read from the red channel of a texture. */
            TEXTURE_CHANNEL_RED = 0,
            
            /** Used to read from the green channel of a texture. */
            TEXTURE_CHANNEL_GREEN = 1,
            
            /** Used to read from the blue channel of a texture. */
            TEXTURE_CHANNEL_BLUE = 2,
            
            /** Used to read from the alpha channel of a texture. */
            TEXTURE_CHANNEL_ALPHA = 3,
            
            /** Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture. */
            TEXTURE_CHANNEL_GRAYSCALE = 4,
        }
        enum EmissionOperator {
            /** Adds the emission color to the color from the emission texture. */
            EMISSION_OP_ADD = 0,
            
            /** Multiplies the emission color by the color from the emission texture. */
            EMISSION_OP_MULTIPLY = 1,
        }
        enum DistanceFadeMode {
            /** Do not use distance fade. */
            DISTANCE_FADE_DISABLED = 0,
            
            /** Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel. */
            DISTANCE_FADE_PIXEL_ALPHA = 1,
            
            /** Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA]. */
            DISTANCE_FADE_PIXEL_DITHER = 2,
            
            /** Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA] and [constant DISTANCE_FADE_PIXEL_DITHER]. */
            DISTANCE_FADE_OBJECT_DITHER = 3,
        }
    }
    /** Abstract base class for defining the 3D rendering properties of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_basematerial3d.html  
     */
    class BaseMaterial3D extends Material {
        constructor(identifier?: any)
        set_albedo(albedo: Color): void
        get_albedo(): Color
        set_transparency(transparency: BaseMaterial3D.Transparency): void
        get_transparency(): BaseMaterial3D.Transparency
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: float64): void
        get_alpha_antialiasing_edge(): float64
        set_shading_mode(shading_mode: BaseMaterial3D.ShadingMode): void
        get_shading_mode(): BaseMaterial3D.ShadingMode
        set_specular(specular: float64): void
        get_specular(): float64
        set_metallic(metallic: float64): void
        get_metallic(): float64
        set_roughness(roughness: float64): void
        get_roughness(): float64
        set_emission(emission: Color): void
        get_emission(): Color
        set_emission_energy_multiplier(emission_energy_multiplier: float64): void
        get_emission_energy_multiplier(): float64
        set_emission_intensity(emission_energy_multiplier: float64): void
        get_emission_intensity(): float64
        set_normal_scale(normal_scale: float64): void
        get_normal_scale(): float64
        set_rim(rim: float64): void
        get_rim(): float64
        set_rim_tint(rim_tint: float64): void
        get_rim_tint(): float64
        set_clearcoat(clearcoat: float64): void
        get_clearcoat(): float64
        set_clearcoat_roughness(clearcoat_roughness: float64): void
        get_clearcoat_roughness(): float64
        set_anisotropy(anisotropy: float64): void
        get_anisotropy(): float64
        set_heightmap_scale(heightmap_scale: float64): void
        get_heightmap_scale(): float64
        set_subsurface_scattering_strength(strength: float64): void
        get_subsurface_scattering_strength(): float64
        set_transmittance_color(color: Color): void
        get_transmittance_color(): Color
        set_transmittance_depth(depth: float64): void
        get_transmittance_depth(): float64
        set_transmittance_boost(boost: float64): void
        get_transmittance_boost(): float64
        set_backlight(backlight: Color): void
        get_backlight(): Color
        set_refraction(refraction: float64): void
        get_refraction(): float64
        set_point_size(point_size: float64): void
        get_point_size(): float64
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
        
        /** If `true`, enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to `true`. See [enum Flags] enumerator for options. */
        set_flag(flag: BaseMaterial3D.Flags, enable: boolean): void
        
        /** Returns `true`, if the specified flag is enabled. See [enum Flags] enumerator for options. */
        get_flag(flag: BaseMaterial3D.Flags): boolean
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        
        /** If `true`, enables the specified [enum Feature]. Many features that are available in [BaseMaterial3D]s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to `true`. */
        set_feature(feature: BaseMaterial3D.Feature, enable: boolean): void
        
        /** Returns `true`, if the specified [enum Feature] is enabled. */
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
        set_uv1_triplanar_blend_sharpness(sharpness: float64): void
        get_uv1_triplanar_blend_sharpness(): float64
        set_uv2_scale(scale: Vector3): void
        get_uv2_scale(): Vector3
        set_uv2_offset(offset: Vector3): void
        get_uv2_offset(): Vector3
        set_uv2_triplanar_blend_sharpness(sharpness: float64): void
        get_uv2_triplanar_blend_sharpness(): float64
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_particles_anim_h_frames(frames: int64): void
        get_particles_anim_h_frames(): int64
        set_particles_anim_v_frames(frames: int64): void
        get_particles_anim_v_frames(): int64
        set_particles_anim_loop(loop: boolean): void
        get_particles_anim_loop(): boolean
        set_heightmap_deep_parallax(enable: boolean): void
        is_heightmap_deep_parallax_enabled(): boolean
        set_heightmap_deep_parallax_min_layers(layer: int64): void
        get_heightmap_deep_parallax_min_layers(): int64
        set_heightmap_deep_parallax_max_layers(layer: int64): void
        get_heightmap_deep_parallax_max_layers(): int64
        set_heightmap_deep_parallax_flip_tangent(flip: boolean): void
        get_heightmap_deep_parallax_flip_tangent(): boolean
        set_heightmap_deep_parallax_flip_binormal(flip: boolean): void
        get_heightmap_deep_parallax_flip_binormal(): boolean
        set_grow(amount: float64): void
        get_grow(): float64
        set_emission_operator(operator: BaseMaterial3D.EmissionOperator): void
        get_emission_operator(): BaseMaterial3D.EmissionOperator
        set_ao_light_affect(amount: float64): void
        get_ao_light_affect(): float64
        set_alpha_scissor_threshold(threshold: float64): void
        get_alpha_scissor_threshold(): float64
        set_alpha_hash_scale(threshold: float64): void
        get_alpha_hash_scale(): float64
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
        set_proximity_fade_distance(distance: float64): void
        get_proximity_fade_distance(): float64
        set_msdf_pixel_range(range: float64): void
        get_msdf_pixel_range(): float64
        set_msdf_outline_size(size: float64): void
        get_msdf_outline_size(): float64
        set_distance_fade(mode: BaseMaterial3D.DistanceFadeMode): void
        get_distance_fade(): BaseMaterial3D.DistanceFadeMode
        set_distance_fade_max_distance(distance: float64): void
        get_distance_fade_max_distance(): float64
        set_distance_fade_min_distance(distance: float64): void
        get_distance_fade_min_distance(): float64
        
        /** The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [constant TRANSPARENCY_DISABLED] has a greater performance impact compared to opaque rendering. See also [member blend_mode]. */
        get transparency(): int64
        set transparency(value: int64)
        
        /** Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing [member alpha_scissor_threshold]. If the material disappears at a distance, try decreasing [member alpha_scissor_threshold]. */
        get alpha_scissor_threshold(): float64
        set alpha_scissor_threshold(value: float64)
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        get alpha_hash_scale(): float64
        set alpha_hash_scale(value: float64)
        
        /** The type of alpha antialiasing to apply. See [enum AlphaAntiAliasing]. */
        get alpha_antialiasing_mode(): int64
        set alpha_antialiasing_mode(value: int64)
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        get alpha_antialiasing_edge(): float64
        set alpha_antialiasing_edge(value: float64)
        
        /** The material's blend mode.  
         *      
         *  **Note:** Values other than `Mix` force the object into the transparent pipeline. See [enum BlendMode].  
         */
        get blend_mode(): int64
        set blend_mode(value: int64)
        
        /** Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See [enum CullMode]. */
        get cull_mode(): int64
        set cull_mode(value: int64)
        
        /** Determines when depth rendering takes place. See [enum DepthDrawMode]. See also [member transparency]. */
        get depth_draw_mode(): int64
        set depth_draw_mode(value: int64)
        
        /** Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights.  
         *      
         *  **Note:** Setting the shading mode vertex shading currently has no effect, as vertex shading is not implemented yet.  
         */
        get shading_mode(): int64
        set shading_mode(value: int64)
        
        /** The algorithm used for diffuse light scattering. See [enum DiffuseMode]. */
        get diffuse_mode(): int64
        set diffuse_mode(value: int64)
        
        /** The method for rendering the specular blob. See [enum SpecularMode].  
         *      
         *  **Note:** [member specular_mode] only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, [VoxelGI], SDFGI or [ReflectionProbe]s. To disable reflections from these sources as well, set [member metallic_specular] to `0.0` instead.  
         */
        get specular_mode(): int64
        set specular_mode(value: int64)
        
        /** The material's base color.  
         *      
         *  **Note:** If [member detail_enabled] is `true` and a [member detail_albedo] texture is specified, [member albedo_color] will  *not*  modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent [member detail_albedo] texture instead.  
         */
        get albedo_color(): Color
        set albedo_color(value: Color)
        
        /** A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between `0` and `1` should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [member roughness]. */
        get metallic(): float64
        set metallic(value: float64)
        
        /** Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to `0.0`, no specular reflections will be visible. This differs from the [constant SPECULAR_DISABLED] [enum SpecularMode] as [constant SPECULAR_DISABLED] only applies to the specular lobe from the light source.  
         *      
         *  **Note:** Unlike [member metallic], this is not energy-conserving, so it should be left at `0.5` in most cases. See also [member roughness].  
         */
        get metallic_specular(): float64
        set metallic_specular(value: float64)
        
        /** Specifies the channel of the [member metallic_texture] in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get metallic_texture_channel(): int64
        set metallic_texture_channel(value: int64)
        
        /** Surface reflection. A value of `0` represents a perfect mirror while a value of `1` completely blurs the reflection. See also [member metallic]. */
        get roughness(): float64
        set roughness(value: float64)
        
        /** Specifies the channel of the [member roughness_texture] in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get roughness_texture_channel(): int64
        set roughness_texture_channel(value: int64)
        
        /** The emitted light's color. See [member emission_enabled]. */
        get emission(): Color
        set emission(value: Color)
        
        /** Multiplier for emitted light. See [member emission_enabled]. */
        get emission_energy_multiplier(): float64
        set emission_energy_multiplier(value: float64)
        
        /** Luminance of emitted light, measured in nits (candela per square meter). Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default is roughly equivalent to an indoor lightbulb. */
        get emission_intensity(): float64
        set emission_intensity(value: float64)
        
        /** Sets how [member emission] interacts with [member emission_texture]. Can either add or multiply. See [enum EmissionOperator] for options. */
        get emission_operator(): int64
        set emission_operator(value: int64)
        
        /** The strength of the normal map's effect. */
        get normal_scale(): float64
        set normal_scale(value: float64)
        
        /** Sets the strength of the rim lighting effect. */
        get rim(): float64
        set rim(value: float64)
        
        /** The amount of to blend light and albedo color when rendering rim effect. If `0` the light color is used, while `1` means albedo color is used. An intermediate value generally works best. */
        get rim_tint(): float64
        set rim_tint(value: float64)
        
        /** Sets the strength of the clearcoat effect. Setting to `0` looks the same as disabling the clearcoat effect. */
        get clearcoat(): float64
        set clearcoat(value: float64)
        
        /** Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat. */
        get clearcoat_roughness(): float64
        set clearcoat_roughness(value: float64)
        
        /** The strength of the anisotropy effect. This is multiplied by [member anisotropy_flowmap]'s alpha channel if a texture is defined there and the texture contains an alpha channel. */
        get anisotropy(): float64
        set anisotropy(value: float64)
        
        /** Amount that ambient occlusion affects lighting from lights. If `0`, ambient occlusion only affects ambient light. If `1`, ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic. */
        get ao_light_affect(): float64
        set ao_light_affect(value: float64)
        
        /** Specifies the channel of the [member ao_texture] in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get ao_texture_channel(): int64
        set ao_texture_channel(value: int64)
        
        /** The heightmap scale to use for the parallax effect (see [member heightmap_enabled]). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using [member heightmap_flip_texture] as the material will also appear to be "closer" to the camera. In most cases, [member heightmap_scale] should be kept to a positive value.  
         *      
         *  **Note:** If the height map effect looks strange regardless of this value, try adjusting [member heightmap_flip_binormal] and [member heightmap_flip_tangent]. See also [member heightmap_texture] for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how [member heightmap_scale] behaves.  
         */
        get heightmap_scale(): float64
        set heightmap_scale(value: float64)
        
        /** If `true`, uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see [member heightmap_enabled]). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference. */
        get heightmap_deep_parallax(): boolean
        set heightmap_deep_parallax(value: boolean)
        
        /** The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.  
         *      
         *  **Note:** Only effective if [member heightmap_deep_parallax] is `true`.  
         */
        get heightmap_min_layers(): int64
        set heightmap_min_layers(value: int64)
        
        /** The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.  
         *      
         *  **Note:** Only effective if [member heightmap_deep_parallax] is `true`.  
         */
        get heightmap_max_layers(): int64
        set heightmap_max_layers(value: int64)
        
        /** If `true`, flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to `true`. */
        get heightmap_flip_tangent(): boolean
        set heightmap_flip_tangent(value: boolean)
        
        /** If `true`, flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to `true`. */
        get heightmap_flip_binormal(): boolean
        set heightmap_flip_binormal(value: boolean)
        
        /** The strength of the subsurface scattering effect. The depth of the effect is also controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale], which is set globally. */
        get subsurf_scatter_strength(): float64
        set subsurf_scatter_strength(value: float64)
        
        /** The color to multiply the subsurface scattering transmittance effect with. Ignored if [member subsurf_scatter_skin_mode] is `true`. */
        get subsurf_scatter_transmittance_color(): Color
        set subsurf_scatter_transmittance_color(value: Color)
        
        /** The depth of the subsurface scattering transmittance effect. */
        get subsurf_scatter_transmittance_depth(): float64
        set subsurf_scatter_transmittance_depth(value: float64)
        
        /** The intensity of the subsurface scattering transmittance effect. */
        get subsurf_scatter_transmittance_boost(): float64
        set subsurf_scatter_transmittance_boost(value: float64)
        
        /** The color used by the backlight effect. Represents the light passing through an object. */
        get backlight(): Color
        set backlight(value: Color)
        
        /** The strength of the refraction effect. */
        get refraction_scale(): float64
        set refraction_scale(value: float64)
        
        /** Specifies the channel of the [member refraction_texture] in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get refraction_texture_channel(): int64
        set refraction_texture_channel(value: int64)
        
        /** Specifies how the [member detail_albedo] should blend with the current `ALBEDO`. See [enum BlendMode] for options. */
        get detail_blend_mode(): int64
        set detail_blend_mode(value: int64)
        
        /** Specifies whether to use `UV` or `UV2` for the detail layer. See [enum DetailUV] for options. */
        get detail_uv_layer(): int64
        set detail_uv_layer(value: int64)
        
        /** How much to scale the `UV` coordinates. This is multiplied by `UV` in the vertex function. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        get uv1_scale(): Vector3
        set uv1_scale(value: Vector3)
        
        /** How much to offset the `UV` coordinates. This amount will be added to `UV` in the vertex function. This can be used to offset a texture. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        get uv1_offset(): Vector3
        set uv1_offset(value: Vector3)
        
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.  
         *      
         *  **Note:** [member uv1_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.  
         */
        get uv1_triplanar_sharpness(): float64
        set uv1_triplanar_sharpness(value: float64)
        
        /** How much to scale the `UV2` coordinates. This is multiplied by `UV2` in the vertex function. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        get uv2_scale(): Vector3
        set uv2_scale(value: Vector3)
        
        /** How much to offset the `UV2` coordinates. This amount will be added to `UV2` in the vertex function. This can be used to offset a texture. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        get uv2_offset(): Vector3
        set uv2_offset(value: Vector3)
        
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.  
         *      
         *  **Note:** [member uv2_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.  
         */
        get uv2_triplanar_sharpness(): float64
        set uv2_triplanar_sharpness(value: float64)
        
        /** Filter flags for the texture. See [enum TextureFilter] for options.  
         *      
         *  **Note:** [member heightmap_texture] is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.  
         */
        get texture_filter(): int64
        set texture_filter(value: int64)
        
        /** Controls how the object faces the camera. See [enum BillboardMode].  
         *      
         *  **Note:** Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See [url=https://github.com/godotengine/godot/issues/41567]GitHub issue #41567[/url] for details.  
         */
        get billboard_mode(): int64
        set billboard_mode(value: int64)
        
        /** The number of horizontal frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particles_anim_h_frames(): int64
        set particles_anim_h_frames(value: int64)
        
        /** The number of vertical frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particles_anim_v_frames(): int64
        set particles_anim_v_frames(value: int64)
        
        /** If `true`, particle animations are looped. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particles_anim_loop(): boolean
        set particles_anim_loop(value: boolean)
        
        /** If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [member cull_mode] set to [constant CULL_FRONT]. See also [member grow_amount].  
         *      
         *  **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [url=https://wiki.polycount.com/wiki/Face_weighted_normals]face weighted normals[/url] in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.  
         */
        get grow(): boolean
        set grow(value: boolean)
        
        /** Grows object vertices in the direction of their normals. Only effective if [member grow] is `true`. */
        get grow_amount(): float64
        set grow_amount(value: float64)
        
        /** The point size in pixels. See [member use_point_size]. */
        get point_size(): float64
        set point_size(value: float64)
        
        /** If `true`, the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object. */
        get proximity_fade_enabled(): boolean
        set proximity_fade_enabled(value: boolean)
        
        /** Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade. */
        get proximity_fade_distance(): float64
        set proximity_fade_distance(value: float64)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. */
        get msdf_pixel_range(): float64
        set msdf_pixel_range(value: float64)
        
        /** The width of the shape outline. */
        get msdf_outline_size(): float64
        set msdf_outline_size(value: float64)
        
        /** Specifies which type of fade to use. Can be any of the [enum DistanceFadeMode]s. */
        get distance_fade_mode(): int64
        set distance_fade_mode(value: int64)
        
        /** Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.  
         *      
         *  **Note:** If [member distance_fade_min_distance] is greater than [member distance_fade_max_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].  
         */
        get distance_fade_min_distance(): float64
        set distance_fade_min_distance(value: float64)
        
        /** Distance at which the object appears fully opaque.  
         *      
         *  **Note:** If [member distance_fade_max_distance] is less than [member distance_fade_min_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].  
         */
        get distance_fade_max_distance(): float64
        set distance_fade_max_distance(value: float64)
    }
    /** Boolean matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_bitmap.html  
     */
    class BitMap extends Resource {
        constructor(identifier?: any)
        /** Creates a bitmap with the specified size, filled with `false`. */
        create(size: Vector2i): void
        
        /** Creates a bitmap that matches the given image dimensions, every element of the bitmap is set to `false` if the alpha value of the image at that position is equal to [param threshold] or less, and `true` in other case. */
        create_from_image_alpha(image: Image, threshold: float64 = 0.1): void
        
        /** Sets the bitmap's element at the specified position, to the specified value. */
        set_bitv(position: Vector2i, bit: boolean): void
        
        /** Sets the bitmap's element at the specified position, to the specified value. */
        set_bit(x: int64, y: int64, bit: boolean): void
        
        /** Returns bitmap's value at the specified position. */
        get_bitv(position: Vector2i): boolean
        
        /** Returns bitmap's value at the specified position. */
        get_bit(x: int64, y: int64): boolean
        
        /** Sets a rectangular portion of the bitmap to the specified value. */
        set_bit_rect(rect: Rect2i, bit: boolean): void
        
        /** Returns the number of bitmap elements that are set to `true`. */
        get_true_bit_count(): int64
        
        /** Returns bitmap's dimensions. */
        get_size(): Vector2i
        
        /** Resizes the image to [param new_size]. */
        resize(new_size: Vector2i): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        
        /** Applies morphological dilation or erosion to the bitmap. If [param pixels] is positive, dilation is applied to the bitmap. If [param pixels] is negative, erosion is applied to the bitmap. [param rect] defines the area where the morphological operation is applied. Pixels located outside the [param rect] are unaffected by [method grow_mask]. */
        grow_mask(pixels: int64, rect: Rect2i): void
        
        /** Returns an image of the same size as the bitmap and with a [enum Image.Format] of type [constant Image.FORMAT_L8]. `true` bits of the bitmap are being converted into white pixels, and `false` bits into black. */
        convert_to_image(): Image
        
        /** Creates an [Array] of polygons covering a rectangular portion of the bitmap. It uses a marching squares algorithm, followed by Ramer-Douglas-Peucker (RDP) reduction of the number of vertices. Each polygon is described as a [PackedVector2Array] of its vertices.  
         *  To get polygons covering the whole bitmap, pass:  
         *    
         *  [param epsilon] is passed to RDP to control how accurately the polygons cover the bitmap: a lower [param epsilon] corresponds to more points in the polygons.  
         */
        opaque_to_polygons(rect: Rect2i, epsilon: float64 = 2): Array
        get data(): Dictionary
        set data(value: Dictionary)
    }
    class BitMapEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A joint used with [Skeleton2D] to control and animate other nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_bone2d.html  
     */
    class Bone2D extends Node2D {
        constructor(identifier?: any)
        set_rest(rest: Transform2D): void
        get_rest(): Transform2D
        
        /** Resets the bone to the rest pose. This is equivalent to setting [member Node2D.transform] to [member rest]. */
        apply_rest(): void
        
        /** Returns the node's [member rest] [Transform2D] if it doesn't have a parent, or its rest pose relative to its parent. */
        get_skeleton_rest(): Transform2D
        
        /** Returns the node's index as part of the entire skeleton. See [Skeleton2D]. */
        get_index_in_skeleton(): int64
        
        /** When set to `true`, the [Bone2D] node will attempt to automatically calculate the bone angle and length using the first child [Bone2D] node, if one exists. If none exist, the [Bone2D] cannot automatically calculate these values and will print a warning. */
        set_autocalculate_length_and_angle(auto_calculate: boolean): void
        
        /** Returns whether this [Bone2D] is going to autocalculate its length and bone angle using its first [Bone2D] child node, if one exists. If there are no [Bone2D] children, then it cannot autocalculate these values and will print a warning. */
        get_autocalculate_length_and_angle(): boolean
        
        /** Sets the length of the bone in the [Bone2D]. */
        set_length(length: float64): void
        
        /** Returns the length of the bone in the [Bone2D] node. */
        get_length(): float64
        
        /** Sets the bone angle for the [Bone2D]. This is typically set to the rotation from the [Bone2D] to a child [Bone2D] node.  
         *      
         *  **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].  
         */
        set_bone_angle(angle: float64): void
        
        /** Returns the angle of the bone in the [Bone2D].  
         *      
         *  **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].  
         */
        get_bone_angle(): float64
        
        /** Rest transform of the bone. You can reset the node's transforms to this value using [method apply_rest]. */
        get rest(): Transform2D
        set rest(value: Transform2D)
    }
    /** А node that dynamically copies or overrides the 3D transform of a bone in its parent [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_boneattachment3d.html  
     */
    class BoneAttachment3D extends Node3D {
        constructor(identifier?: any)
        set_bone_name(bone_name: string): void
        get_bone_name(): string
        set_bone_idx(bone_idx: int64): void
        get_bone_idx(): int64
        
        /** A function that is called automatically when the [Skeleton3D] the BoneAttachment3D node is using has a bone that has changed its pose. This function is where the BoneAttachment3D node updates its position so it is correctly bound when it is  *not*  set to override the bone pose. */
        on_bone_pose_update(bone_index: int64): void
        set_override_pose(override_pose: boolean): void
        get_override_pose(): boolean
        
        /** Sets whether the BoneAttachment3D node will use an external [Skeleton3D] node rather than attempting to use its parent node as the [Skeleton3D]. When set to `true`, the BoneAttachment3D node will use the external [Skeleton3D] node set in [method set_external_skeleton]. */
        set_use_external_skeleton(use_external_skeleton: boolean): void
        
        /** Returns whether the BoneAttachment3D node is using an external [Skeleton3D] rather than attempting to use its parent node as the [Skeleton3D]. */
        get_use_external_skeleton(): boolean
        
        /** Sets the [NodePath] to the external skeleton that the BoneAttachment3D node should use. See [method set_use_external_skeleton] to enable the external [Skeleton3D] node. */
        set_external_skeleton(external_skeleton: NodePath): void
        
        /** Returns the [NodePath] to the external [Skeleton3D] node, if one has been set. */
        get_external_skeleton(): NodePath
        
        /** The name of the attached bone. */
        get bone_name(): StringName
        set bone_name(value: StringName)
        
        /** The index of the attached bone. */
        get bone_idx(): int64
        set bone_idx(value: int64)
        
        /** Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to `true`, the BoneAttachment3D node can change the pose of the bone. When set to `false`, the BoneAttachment3D will always be set to the bone's transform. */
        get override_pose(): boolean
        set override_pose(value: boolean)
    }
    /** Describes a mapping of bone names for retargeting [Skeleton3D] into common names defined by a [SkeletonProfile].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_bonemap.html  
     */
    class BoneMap extends Resource {
        constructor(identifier?: any)
        get_profile(): SkeletonProfile
        set_profile(profile: SkeletonProfile): void
        
        /** Returns a skeleton bone name is mapped to [param profile_bone_name].  
         *  In the retargeting process, the returned bone name is the bone name of the source skeleton.  
         */
        get_skeleton_bone_name(profile_bone_name: StringName): StringName
        
        /** Maps a skeleton bone name to [param profile_bone_name].  
         *  In the retargeting process, the setting bone name is the bone name of the source skeleton.  
         */
        set_skeleton_bone_name(profile_bone_name: StringName, skeleton_bone_name: StringName): void
        
        /** Returns a profile bone name having [param skeleton_bone_name]. If not found, an empty [StringName] will be returned.  
         *  In the retargeting process, the returned bone name is the bone name of the target skeleton.  
         */
        find_profile_bone_name(skeleton_bone_name: StringName): StringName
        
        /** A [SkeletonProfile] of the mapping target. Key names in the [BoneMap] are synchronized with it. */
        get profile(): SkeletonProfile
        set profile(value: SkeletonProfile)
        
        /** This signal is emitted when change the key value in the [BoneMap]. This is used to validate mapping and to update [BoneMap] editor. */
        readonly bone_map_updated: Signal //  => void
        
        /** This signal is emitted when change the value in profile or change the reference of profile. This is used to update key names in the [BoneMap] and to redraw the [BoneMap] editor. */
        readonly profile_updated: Signal //  => void
    }
    class BoneMapEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace BoxContainer {
        enum AlignmentMode {
            /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
            ALIGNMENT_BEGIN = 0,
            
            /** The child controls will be centered in the container. */
            ALIGNMENT_CENTER = 1,
            
            /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
            ALIGNMENT_END = 2,
        }
    }
    /** A container that arranges its child controls horizontally or vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_boxcontainer.html  
     */
    class BoxContainer extends Container {
        constructor(identifier?: any)
        /** Adds a [Control] node to the box as a spacer. If [param begin] is `true`, it will insert the [Control] node in front of all other children. */
        add_spacer(begin: boolean): Control
        set_alignment(alignment: BoxContainer.AlignmentMode): void
        get_alignment(): BoxContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [BoxContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HBoxContainer] and [VBoxContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
    }
    /** Generate an axis-aligned box [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_boxmesh.html  
     */
    class BoxMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        set_subdivide_width(subdivide: int64): void
        get_subdivide_width(): int64
        set_subdivide_height(divisions: int64): void
        get_subdivide_height(): int64
        set_subdivide_depth(divisions: int64): void
        get_subdivide_depth(): int64
        
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Number of extra edge loops inserted along the X axis. */
        get subdivide_width(): int64
        set subdivide_width(value: int64)
        
        /** Number of extra edge loops inserted along the Y axis. */
        get subdivide_height(): int64
        set subdivide_height(value: int64)
        
        /** Number of extra edge loops inserted along the Z axis. */
        get subdivide_depth(): int64
        set subdivide_depth(value: int64)
    }
    /** Cuboid shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_boxoccluder3d.html  
     */
    class BoxOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The box's size in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A 3D box shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_boxshape3d.html  
     */
    class BoxShape3D extends Shape3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A themed button that can contain text and an icon.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_button.html  
     */
    class Button extends BaseButton {
        constructor(identifier?: any)
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
        
        /** The button's text that will be displayed inside the button's area. */
        get text(): string
        set text(value: string)
        
        /** Button's icon, if text is present the icon will be placed before the text.  
         *  To edit margin and spacing of the icon, use [theme_item h_separation] theme property and `content_margin_*` properties of the used [StyleBox]es.  
         */
        get icon(): Texture2D
        set icon(value: Texture2D)
        
        /** Flat buttons don't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Text alignment policy for the button's text, use one of the [enum HorizontalAlignment] constants. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get text_overrun_behavior(): int64
        set text_overrun_behavior(value: int64)
        
        /** When this property is enabled, text that is too large to fit the button is clipped, when disabled the Button will always be wide enough to hold the text. */
        get clip_text(): boolean
        set clip_text(value: boolean)
        
        /** Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same [enum HorizontalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        get icon_alignment(): int64
        set icon_alignment(value: int64)
        
        /** Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same [enum VerticalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        get vertical_icon_alignment(): int64
        set vertical_icon_alignment(value: int64)
        
        /** When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [theme_item icon_max_width]. */
        get expand_icon(): boolean
        set expand_icon(value: boolean)
        
        /** Base text writing direction. */
        get text_direction(): int64
        set text_direction(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
    }
    /** A group of buttons that doesn't allow more than one button to be pressed at a time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_buttongroup.html  
     */
    class ButtonGroup extends Resource {
        constructor(identifier?: any)
        /** Returns the current pressed button. */
        get_pressed_button(): BaseButton
        
        /** Returns an [Array] of [Button]s who have this as their [ButtonGroup] (see [member BaseButton.button_group]). */
        get_buttons(): Array
        set_allow_unpress(enabled: boolean): void
        is_allow_unpress(): boolean
        
        /** If `true`, it is possible to unpress all buttons in this [ButtonGroup]. */
        get allow_unpress(): boolean
        set allow_unpress(value: boolean)
        
        /** Emitted when one of the buttons of the group is pressed. */
        readonly pressed: Signal // button: BaseButton => void
    }
    namespace CPUParticles2D {
        enum DrawOrder {
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
        }
        enum Parameter {
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set initial velocity properties. */
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angular velocity properties. */
            PARAM_ANGULAR_VELOCITY = 1,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set orbital velocity properties. */
            PARAM_ORBIT_VELOCITY = 2,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set linear acceleration properties. */
            PARAM_LINEAR_ACCEL = 3,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set radial acceleration properties. */
            PARAM_RADIAL_ACCEL = 4,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set tangential acceleration properties. */
            PARAM_TANGENTIAL_ACCEL = 5,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set damping properties. */
            PARAM_DAMPING = 6,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angle properties. */
            PARAM_ANGLE = 7,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set scale properties. */
            PARAM_SCALE = 8,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set hue variation properties. */
            PARAM_HUE_VARIATION = 9,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation speed properties. */
            PARAM_ANIM_SPEED = 10,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation offset properties. */
            PARAM_ANIM_OFFSET = 11,
            
            /** Represents the size of the [enum Parameter] enum. */
            PARAM_MAX = 12,
        }
        enum ParticleFlags {
            /** Use with [method set_particle_flag] to set [member particle_flag_align_y]. */
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            
            /** Present for consistency with 3D particle nodes, not used in 2D. */
            PARTICLE_FLAG_ROTATE_Y = 1,
            
            /** Present for consistency with 3D particle nodes, not used in 2D. */
            PARTICLE_FLAG_DISABLE_Z = 2,
            
            /** Represents the size of the [enum ParticleFlags] enum. */
            PARTICLE_FLAG_MAX = 3,
        }
        enum EmissionShape {
            /** All particles will be emitted from a single point. */
            EMISSION_SHAPE_POINT = 0,
            
            /** Particles will be emitted in the volume of a sphere flattened to two dimensions. */
            EMISSION_SHAPE_SPHERE = 1,
            
            /** Particles will be emitted on the surface of a sphere flattened to two dimensions. */
            EMISSION_SHAPE_SPHERE_SURFACE = 2,
            
            /** Particles will be emitted in the area of a rectangle. */
            EMISSION_SHAPE_RECTANGLE = 3,
            
            /** Particles will be emitted at a position chosen randomly among [member emission_points]. Particle color will be modulated by [member emission_colors]. */
            EMISSION_SHAPE_POINTS = 4,
            
            /** Particles will be emitted at a position chosen randomly among [member emission_points]. Particle velocity and rotation will be set based on [member emission_normals]. Particle color will be modulated by [member emission_colors]. */
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            
            /** Represents the size of the [enum EmissionShape] enum. */
            EMISSION_SHAPE_MAX = 6,
        }
    }
    /** A CPU-based 2D particle emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cpuparticles2d.html  
     */
    class CPUParticles2D extends Node2D {
        constructor(identifier?: any)
        set_emitting(emitting: boolean): void
        set_amount(amount: int64): void
        set_lifetime(secs: float64): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: float64): void
        set_explosiveness_ratio(ratio: float64): void
        set_randomness_ratio(ratio: float64): void
        set_lifetime_randomness(random: float64): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: int64): void
        set_fractional_delta(enable: boolean): void
        set_speed_scale(scale: float64): void
        is_emitting(): boolean
        get_amount(): int64
        get_lifetime(): float64
        get_one_shot(): boolean
        get_pre_process_time(): float64
        get_explosiveness_ratio(): float64
        get_randomness_ratio(): float64
        get_lifetime_randomness(): float64
        get_use_local_coordinates(): boolean
        get_fixed_fps(): int64
        get_fractional_delta(): boolean
        get_speed_scale(): float64
        set_draw_order(order: CPUParticles2D.DrawOrder): void
        get_draw_order(): CPUParticles2D.DrawOrder
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** Restarts the particle emitter. */
        restart(): void
        set_direction(direction: Vector2): void
        get_direction(): Vector2
        set_spread(spread: float64): void
        get_spread(): float64
        
        /** Sets the minimum value for the given parameter. */
        set_param_min(param: CPUParticles2D.Parameter, value: float64): void
        
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: CPUParticles2D.Parameter): float64
        
        /** Sets the maximum value for the given parameter. */
        set_param_max(param: CPUParticles2D.Parameter, value: float64): void
        
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: CPUParticles2D.Parameter): float64
        
        /** Sets the [Curve] of the parameter specified by [enum Parameter]. */
        set_param_curve(param: CPUParticles2D.Parameter, curve: Curve): void
        
        /** Returns the [Curve] of the parameter specified by [enum Parameter]. */
        get_param_curve(param: CPUParticles2D.Parameter): Curve
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Gradient): void
        get_color_ramp(): Gradient
        set_color_initial_ramp(ramp: Gradient): void
        get_color_initial_ramp(): Gradient
        
        /** Enables or disables the given flag (see [enum ParticleFlags] for options). */
        set_particle_flag(particle_flag: CPUParticles2D.ParticleFlags, enable: boolean): void
        
        /** Returns the enabled state of the given flag (see [enum ParticleFlags] for options). */
        get_particle_flag(particle_flag: CPUParticles2D.ParticleFlags): boolean
        set_emission_shape(shape: CPUParticles2D.EmissionShape): void
        get_emission_shape(): CPUParticles2D.EmissionShape
        set_emission_sphere_radius(radius: float64): void
        get_emission_sphere_radius(): float64
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
        
        /** Sets this node's properties to match a given [GPUParticles2D] node with an assigned [ParticleProcessMaterial]. */
        convert_from_particles(particles: Node): void
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        get emitting(): boolean
        set emitting(value: boolean)
        
        /** Number of particles emitted in one emission cycle. */
        get amount(): int64
        set amount(value: int64)
        
        /** Amount of time each particle will exist. */
        get lifetime(): float64
        set lifetime(value: float64)
        
        /** If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** Particle system starts as if it had already run for this many seconds. */
        get preprocess(): float64
        set preprocess(value: float64)
        
        /** Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles. */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins. */
        get explosiveness(): float64
        set explosiveness(value: float64)
        
        /** Emission lifetime randomness ratio. */
        get randomness(): float64
        set randomness(value: float64)
        
        /** Particle lifetime randomness ratio. */
        get lifetime_randomness(): float64
        set lifetime_randomness(value: float64)
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        get fixed_fps(): int64
        set fixed_fps(value: int64)
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        get fract_delta(): boolean
        set fract_delta(value: boolean)
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. */
        get local_coords(): boolean
        set local_coords(value: boolean)
        
        /** Particle draw order. Uses [enum DrawOrder] values. */
        get draw_order(): int64
        set draw_order(value: int64)
        
        /** Particle texture. If `null`, particles will be squares. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
        get emission_shape(): int64
        set emission_shape(value: int64)
        
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        get emission_sphere_radius(): float64
        set emission_sphere_radius(value: float64)
        
        /** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_RECTANGLE]. */
        get emission_rect_extents(): Vector2
        set emission_rect_extents(value: Vector2)
        
        /** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emission_points(): PackedVector2Array
        set emission_points(value: PackedVector2Array)
        
        /** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emission_normals(): PackedVector2Array
        set emission_normals(value: PackedVector2Array)
        
        /** Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emission_colors(): PackedColorArray
        set emission_colors(value: PackedColorArray)
        
        /** Unit vector specifying the particles' emission direction. */
        get direction(): Vector2
        set direction(value: Vector2)
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. */
        get spread(): float64
        set spread(value: float64)
        
        /** Gravity applied to every particle. */
        get gravity(): Vector2
        set gravity(value: Vector2)
        
        /** If `true`, the scale curve will be split into x and y components. See [member scale_curve_x] and [member scale_curve_y]. */
        get split_scale(): boolean
        set split_scale(value: boolean)
        
        /** Each particle's horizontal scale will vary along this [Curve].  
         *  [member split_scale] must be enabled.  
         */
        get scale_curve_x(): Curve
        set scale_curve_x(value: Curve)
        
        /** Each particle's vertical scale will vary along this [Curve].  
         *  [member split_scale] must be enabled.  
         */
        get scale_curve_y(): Curve
        set scale_curve_y(value: Curve)
        
        /** Each particle's initial color. If [member texture] is defined, it will be multiplied by this color. */
        get color(): Color
        set color(value: Color)
        
        /** Each particle's color will vary along this [Gradient] (multiplied with [member color]). */
        get color_ramp(): Gradient
        set color_ramp(value: Gradient)
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]). */
        get color_initial_ramp(): Gradient
        set color_initial_ramp(value: Gradient)
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted. */
        readonly finished: Signal //  => void
    }
    class CPUParticles2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace CPUParticles3D {
        enum DrawOrder {
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
            
            /** Particles are drawn in order of depth. */
            DRAW_ORDER_VIEW_DEPTH = 2,
        }
        enum Parameter {
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set initial velocity properties. */
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angular velocity properties. */
            PARAM_ANGULAR_VELOCITY = 1,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set orbital velocity properties. */
            PARAM_ORBIT_VELOCITY = 2,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set linear acceleration properties. */
            PARAM_LINEAR_ACCEL = 3,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set radial acceleration properties. */
            PARAM_RADIAL_ACCEL = 4,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set tangential acceleration properties. */
            PARAM_TANGENTIAL_ACCEL = 5,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set damping properties. */
            PARAM_DAMPING = 6,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angle properties. */
            PARAM_ANGLE = 7,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set scale properties. */
            PARAM_SCALE = 8,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set hue variation properties. */
            PARAM_HUE_VARIATION = 9,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation speed properties. */
            PARAM_ANIM_SPEED = 10,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation offset properties. */
            PARAM_ANIM_OFFSET = 11,
            
            /** Represents the size of the [enum Parameter] enum. */
            PARAM_MAX = 12,
        }
        enum ParticleFlags {
            /** Use with [method set_particle_flag] to set [member particle_flag_align_y]. */
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_rotate_y]. */
            PARTICLE_FLAG_ROTATE_Y = 1,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_disable_z]. */
            PARTICLE_FLAG_DISABLE_Z = 2,
            
            /** Represents the size of the [enum ParticleFlags] enum. */
            PARTICLE_FLAG_MAX = 3,
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
            
            /** Particles will be emitted at a position chosen randomly among [member emission_points]. Particle color will be modulated by [member emission_colors]. */
            EMISSION_SHAPE_POINTS = 4,
            
            /** Particles will be emitted at a position chosen randomly among [member emission_points]. Particle velocity and rotation will be set based on [member emission_normals]. Particle color will be modulated by [member emission_colors]. */
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            
            /** Particles will be emitted in a ring or cylinder. */
            EMISSION_SHAPE_RING = 6,
            
            /** Represents the size of the [enum EmissionShape] enum. */
            EMISSION_SHAPE_MAX = 7,
        }
    }
    /** A CPU-based 3D particle emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cpuparticles3d.html  
     */
    class CPUParticles3D extends GeometryInstance3D {
        constructor(identifier?: any)
        set_emitting(emitting: boolean): void
        set_amount(amount: int64): void
        set_lifetime(secs: float64): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: float64): void
        set_explosiveness_ratio(ratio: float64): void
        set_randomness_ratio(ratio: float64): void
        set_lifetime_randomness(random: float64): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: int64): void
        set_fractional_delta(enable: boolean): void
        set_speed_scale(scale: float64): void
        is_emitting(): boolean
        get_amount(): int64
        get_lifetime(): float64
        get_one_shot(): boolean
        get_pre_process_time(): float64
        get_explosiveness_ratio(): float64
        get_randomness_ratio(): float64
        get_lifetime_randomness(): float64
        get_use_local_coordinates(): boolean
        get_fixed_fps(): int64
        get_fractional_delta(): boolean
        get_speed_scale(): float64
        set_draw_order(order: CPUParticles3D.DrawOrder): void
        get_draw_order(): CPUParticles3D.DrawOrder
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        
        /** Restarts the particle emitter. */
        restart(): void
        set_direction(direction: Vector3): void
        get_direction(): Vector3
        set_spread(degrees: float64): void
        get_spread(): float64
        set_flatness(amount: float64): void
        get_flatness(): float64
        
        /** Sets the minimum value for the given parameter. */
        set_param_min(param: CPUParticles3D.Parameter, value: float64): void
        
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: CPUParticles3D.Parameter): float64
        
        /** Sets the maximum value for the given parameter. */
        set_param_max(param: CPUParticles3D.Parameter, value: float64): void
        
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: CPUParticles3D.Parameter): float64
        
        /** Sets the [Curve] of the parameter specified by [enum Parameter]. */
        set_param_curve(param: CPUParticles3D.Parameter, curve: Curve): void
        
        /** Returns the [Curve] of the parameter specified by [enum Parameter]. */
        get_param_curve(param: CPUParticles3D.Parameter): Curve
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Gradient): void
        get_color_ramp(): Gradient
        set_color_initial_ramp(ramp: Gradient): void
        get_color_initial_ramp(): Gradient
        
        /** Enables or disables the given particle flag (see [enum ParticleFlags] for options). */
        set_particle_flag(particle_flag: CPUParticles3D.ParticleFlags, enable: boolean): void
        
        /** Returns the enabled state of the given particle flag (see [enum ParticleFlags] for options). */
        get_particle_flag(particle_flag: CPUParticles3D.ParticleFlags): boolean
        set_emission_shape(shape: CPUParticles3D.EmissionShape): void
        get_emission_shape(): CPUParticles3D.EmissionShape
        set_emission_sphere_radius(radius: float64): void
        get_emission_sphere_radius(): float64
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
        set_emission_ring_height(height: float64): void
        get_emission_ring_height(): float64
        set_emission_ring_radius(radius: float64): void
        get_emission_ring_radius(): float64
        set_emission_ring_inner_radius(inner_radius: float64): void
        get_emission_ring_inner_radius(): float64
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
        
        /** Sets this node's properties to match a given [GPUParticles3D] node with an assigned [ParticleProcessMaterial]. */
        convert_from_particles(particles: Node): void
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        get emitting(): boolean
        set emitting(value: boolean)
        
        /** Number of particles emitted in one emission cycle. */
        get amount(): int64
        set amount(value: int64)
        
        /** Amount of time each particle will exist. */
        get lifetime(): float64
        set lifetime(value: float64)
        
        /** If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** Particle system starts as if it had already run for this many seconds. */
        get preprocess(): float64
        set preprocess(value: float64)
        
        /** Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles. */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins. */
        get explosiveness(): float64
        set explosiveness(value: float64)
        
        /** Emission lifetime randomness ratio. */
        get randomness(): float64
        set randomness(value: float64)
        
        /** Particle lifetime randomness ratio. */
        get lifetime_randomness(): float64
        set lifetime_randomness(value: float64)
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the particle system itself. */
        get fixed_fps(): int64
        set fixed_fps(value: int64)
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        get fract_delta(): boolean
        set fract_delta(value: boolean)
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. */
        get local_coords(): boolean
        set local_coords(value: boolean)
        
        /** Particle draw order. Uses [enum DrawOrder] values. */
        get draw_order(): int64
        set draw_order(value: int64)
        
        /** The [Mesh] used for each particle. If `null`, particles will be spheres. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
        get emission_shape(): int64
        set emission_shape(value: int64)
        
        /** The sphere's radius if [enum EmissionShape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        get emission_sphere_radius(): float64
        set emission_sphere_radius(value: float64)
        
        /** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
        get emission_box_extents(): Vector3
        set emission_box_extents(value: Vector3)
        
        /** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emission_points(): PackedVector3Array
        set emission_points(value: PackedVector3Array)
        
        /** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emission_normals(): PackedVector3Array
        set emission_normals(value: PackedVector3Array)
        
        /** Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS].  
         *      
         *  **Note:** [member emission_colors] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_colors] will have no visible effect.  
         */
        get emission_colors(): PackedColorArray
        set emission_colors(value: PackedColorArray)
        
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emission_ring_axis(): Vector3
        set emission_ring_axis(value: Vector3)
        
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emission_ring_height(): float64
        set emission_ring_height(value: float64)
        
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emission_ring_radius(): float64
        set emission_ring_radius(value: float64)
        
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emission_ring_inner_radius(): float64
        set emission_ring_inner_radius(value: float64)
        
        /** Unit vector specifying the particles' emission direction. */
        get direction(): Vector3
        set direction(value: Vector3)
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. Applied to X/Z plane and Y/Z planes. */
        get spread(): float64
        set spread(value: float64)
        
        /** Amount of [member spread] in Y/Z plane. A value of `1` restricts particles to X/Z plane. */
        get flatness(): float64
        set flatness(value: float64)
        
        /** Gravity applied to every particle. */
        get gravity(): Vector3
        set gravity(value: Vector3)
        
        /** If set to `true`, three different scale curves can be specified, one per scale axis. */
        get split_scale(): boolean
        set split_scale(value: boolean)
        
        /** Curve for the scale over life, along the x axis. */
        get scale_curve_x(): Curve
        set scale_curve_x(value: Curve)
        
        /** Curve for the scale over life, along the y axis. */
        get scale_curve_y(): Curve
        set scale_curve_y(value: Curve)
        
        /** Curve for the scale over life, along the z axis. */
        get scale_curve_z(): Curve
        set scale_curve_z(value: Curve)
        
        /** Each particle's initial color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        get color(): Color
        set color(value: Color)
        
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).  
         *      
         *  **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.  
         */
        get color_ramp(): Gradient
        set color_ramp(value: Gradient)
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).  
         *      
         *  **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.  
         */
        get color_initial_ramp(): Gradient
        set color_initial_ramp(value: Gradient)
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted. */
        readonly finished: Signal //  => void
    }
    class CPUParticles3DEditor extends GPUParticles3DEditorBase {
        constructor(identifier?: any)
    }
    class CPUParticles3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class CPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A CSG Box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgbox3d.html  
     */
    class CSGBox3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        set_material(material: Material): void
        get_material(): Material
        
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The material used to render the box. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** A CSG node that allows you to combine other CSG modifiers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgcombiner3d.html  
     */
    class CSGCombiner3D extends CSGShape3D {
        constructor(identifier?: any)
    }
    /** A CSG Cylinder shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgcylinder3d.html  
     */
    class CSGCylinder3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        set_sides(sides: int64): void
        get_sides(): int64
        set_cone(cone: boolean): void
        is_cone(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        
        /** The radius of the cylinder. */
        get radius(): float64
        set radius(value: float64)
        
        /** The height of the cylinder. */
        get height(): float64
        set height(value: float64)
        
        /** The number of sides of the cylinder, the higher this number the more detail there will be in the cylinder. */
        get sides(): int64
        set sides(value: int64)
        
        /** If `true` a cone is created, the [member radius] will only apply to one side. */
        get cone(): boolean
        set cone(value: boolean)
        
        /** If `true` the normals of the cylinder are set to give a smooth effect making the cylinder seem rounded. If `false` the cylinder will have a flat shaded look. */
        get smooth_faces(): boolean
        set smooth_faces(value: boolean)
        
        /** The material used to render the cylinder. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** A CSG Mesh shape that uses a mesh resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgmesh3d.html  
     */
    class CSGMesh3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_material(material: Material): void
        get_material(): Material
        
        /** The [Mesh] resource to use as a CSG shape.  
         *      
         *  **Note:** When using an [ArrayMesh], all vertex attributes except [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL] and [constant Mesh.ARRAY_TEX_UV] are left unused. Only [constant Mesh.ARRAY_VERTEX] and [constant Mesh.ARRAY_TEX_UV] will be passed to the GPU.  
         *  [constant Mesh.ARRAY_NORMAL] is only used to determine which faces require the use of flat shading. By default, CSGMesh will ignore the mesh's vertex normals, recalculate them for each vertex and use a smooth shader. If a flat shader is required for a face, ensure that all vertex normals of the face are approximately equal.  
         */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** The [Material] used in drawing the CSG shape. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    namespace CSGPolygon3D {
        enum Mode {
            /** The [member polygon] shape is extruded along the negative Z axis. */
            MODE_DEPTH = 0,
            
            /** The [member polygon] shape is extruded by rotating it around the Y axis. */
            MODE_SPIN = 1,
            
            /** The [member polygon] shape is extruded along the [Path3D] specified in [member path_node]. */
            MODE_PATH = 2,
        }
        enum PathRotation {
            /** The [member polygon] shape is not rotated.  
             *      
             *  **Note:** Requires the path Z coordinates to continually decrease to ensure viable shapes.  
             */
            PATH_ROTATION_POLYGON = 0,
            
            /** The [member polygon] shape is rotated along the path, but it is not rotated around the path axis.  
             *      
             *  **Note:** Requires the path Z coordinates to continually decrease to ensure viable shapes.  
             */
            PATH_ROTATION_PATH = 1,
            
            /** The [member polygon] shape follows the path and its rotations around the path axis. */
            PATH_ROTATION_PATH_FOLLOW = 2,
        }
        enum PathIntervalType {
            /** When [member mode] is set to [constant MODE_PATH], [member path_interval] will determine the distance, in meters, each interval of the path will extrude. */
            PATH_INTERVAL_DISTANCE = 0,
            
            /** When [member mode] is set to [constant MODE_PATH], [member path_interval] will subdivide the polygons along the path. */
            PATH_INTERVAL_SUBDIVIDE = 1,
        }
    }
    /** Extrudes a 2D polygon shape to create a 3D mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgpolygon3d.html  
     */
    class CSGPolygon3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_mode(mode: CSGPolygon3D.Mode): void
        get_mode(): CSGPolygon3D.Mode
        set_depth(depth: float64): void
        get_depth(): float64
        set_spin_degrees(degrees: float64): void
        get_spin_degrees(): float64
        set_spin_sides(spin_sides: int64): void
        get_spin_sides(): int64
        set_path_node(path: NodePath): void
        get_path_node(): NodePath
        set_path_interval_type(interval_type: CSGPolygon3D.PathIntervalType): void
        get_path_interval_type(): CSGPolygon3D.PathIntervalType
        set_path_interval(interval: float64): void
        get_path_interval(): float64
        set_path_simplify_angle(degrees: float64): void
        get_path_simplify_angle(): float64
        set_path_rotation(path_rotation: CSGPolygon3D.PathRotation): void
        get_path_rotation(): CSGPolygon3D.PathRotation
        set_path_local(enable: boolean): void
        is_path_local(): boolean
        set_path_continuous_u(enable: boolean): void
        is_path_continuous_u(): boolean
        set_path_u_distance(distance: float64): void
        get_path_u_distance(): float64
        set_path_joined(enable: boolean): void
        is_path_joined(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        _is_editable_3d_polygon(): boolean
        _has_editable_3d_polygon_no_depth(): boolean
        
        /** The point array that defines the 2D polygon that is extruded. This can be a convex or concave polygon with 3 or more points. The polygon must  *not*  have any intersecting edges. Otherwise, triangulation will fail and no mesh will be generated.  
         *      
         *  **Note:** If only 1 or 2 points are defined in [member polygon], no mesh will be generated.  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array)
        
        /** The [member mode] used to extrude the [member polygon]. */
        get mode(): int64
        set mode(value: int64)
        
        /** When [member mode] is [constant MODE_DEPTH], the depth of the extrusion. */
        get depth(): float64
        set depth(value: float64)
        
        /** When [member mode] is [constant MODE_SPIN], the total number of degrees the [member polygon] is rotated when extruding. */
        get spin_degrees(): float64
        set spin_degrees(value: float64)
        
        /** When [member mode] is [constant MODE_SPIN], the number of extrusions made. */
        get spin_sides(): int64
        set spin_sides(value: int64)
        
        /** When [member mode] is [constant MODE_PATH], the location of the [Path3D] object used to extrude the [member polygon]. */
        get path_node(): NodePath
        set path_node(value: NodePath)
        
        /** When [member mode] is [constant MODE_PATH], this will determine if the interval should be by distance ([constant PATH_INTERVAL_DISTANCE]) or subdivision fractions ([constant PATH_INTERVAL_SUBDIVIDE]). */
        get path_interval_type(): int64
        set path_interval_type(value: int64)
        
        /** When [member mode] is [constant MODE_PATH], the path interval or ratio of path points to extrusions. */
        get path_interval(): float64
        set path_interval(value: float64)
        
        /** When [member mode] is [constant MODE_PATH], extrusions that are less than this angle, will be merged together to reduce polygon count. */
        get path_simplify_angle(): float64
        set path_simplify_angle(value: float64)
        
        /** When [member mode] is [constant MODE_PATH], the [enum PathRotation] method used to rotate the [member polygon] as it is extruded. */
        get path_rotation(): int64
        set path_rotation(value: int64)
        
        /** When [member mode] is [constant MODE_PATH], if `true` the [Transform3D] of the [CSGPolygon3D] is used as the starting point for the extrusions, not the [Transform3D] of the [member path_node]. */
        get path_local(): boolean
        set path_local(value: boolean)
        
        /** When [member mode] is [constant MODE_PATH], by default, the top half of the [member material] is stretched along the entire length of the extruded shape. If `false` the top half of the material is repeated every step of the extrusion. */
        get path_continuous_u(): boolean
        set path_continuous_u(value: boolean)
        
        /** When [member mode] is [constant MODE_PATH], this is the distance along the path, in meters, the texture coordinates will tile. When set to 0, texture coordinates will match geometry exactly with no tiling. */
        get path_u_distance(): float64
        set path_u_distance(value: float64)
        
        /** When [member mode] is [constant MODE_PATH], if `true` the ends of the path are joined, by adding an extrusion between the last and first points of the path. */
        get path_joined(): boolean
        set path_joined(value: boolean)
        
        /** If `true`, applies smooth shading to the extrusions. */
        get smooth_faces(): boolean
        set smooth_faces(value: boolean)
        
        /** Material to use for the resulting mesh. The UV maps the top half of the material to the extruded shape (U along the length of the extrusions and V around the outline of the [member polygon]), the bottom-left quarter to the front end face, and the bottom-right quarter to the back end face. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** Base class for CSG primitives.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgprimitive3d.html  
     */
    class CSGPrimitive3D extends CSGShape3D {
        constructor(identifier?: any)
        set_flip_faces(flip_faces: boolean): void
        get_flip_faces(): boolean
        
        /** If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn. */
        get flip_faces(): boolean
        set flip_faces(value: boolean)
    }
    namespace CSGShape3D {
        enum Operation {
            /** Geometry of both primitives is merged, intersecting geometry is removed. */
            OPERATION_UNION = 0,
            
            /** Only intersecting geometry remains, the rest is removed. */
            OPERATION_INTERSECTION = 1,
            
            /** The second shape is subtracted from the first, leaving a dent with its shape. */
            OPERATION_SUBTRACTION = 2,
        }
    }
    /** The CSG base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgshape3d.html  
     */
    class CSGShape3D extends GeometryInstance3D {
        constructor(identifier?: any)
        _update_shape(): void
        
        /** Returns `true` if this is a root shape and is thus the object that is rendered. */
        is_root_shape(): boolean
        set_operation(operation: CSGShape3D.Operation): void
        get_operation(): CSGShape3D.Operation
        set_snap(snap: float64): void
        get_snap(): float64
        set_use_collision(operation: boolean): void
        is_using_collision(): boolean
        set_collision_layer(layer: int64): void
        get_collision_layer(): int64
        set_collision_mask(mask: int64): void
        get_collision_mask(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: int64): boolean
        set_collision_priority(priority: float64): void
        get_collision_priority(): float64
        set_calculate_tangents(enabled: boolean): void
        is_calculating_tangents(): boolean
        
        /** Returns an [Array] with two elements, the first is the [Transform3D] of this node and the second is the root [Mesh] of this node. Only works when this node is the root shape. */
        get_meshes(): Array
        
        /** The operation that is performed on this shape. This is ignored for the first CSG child node as the operation is between this node and the previous child of this nodes parent. */
        get operation(): int64
        set operation(value: int64)
        
        /** Snap makes the mesh vertices snap to a given distance so that the faces of two meshes can be perfectly aligned. A lower value results in greater precision but may be harder to adjust. */
        get snap(): float64
        set snap(value: float64)
        
        /** Calculate tangents for the CSG shape which allows the use of normal maps. This is only applied on the root shape, this setting is ignored on any child. */
        get calculate_tangents(): boolean
        set calculate_tangents(value: boolean)
        
        /** Adds a collision shape to the physics engine for our CSG shape. This will always act like a static body. Note that the collision shape is still active even if the CSG shape itself is hidden. See also [member collision_mask] and [member collision_priority]. */
        get use_collision(): boolean
        set use_collision(value: boolean)
        
        /** The physics layers this area is in.  
         *  Collidable objects can exist in any of 32 different layers. These layers work like a tagging system, and are not visual. A collidable can use these layers to select with which objects it can collide, using the collision_mask property.  
         *  A contact is detected if object A is in any of the layers that object B scans, or object B is in any layer scanned by object A. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collision_layer(): int64
        set collision_layer(value: int64)
        
        /** The physics layers this CSG shape scans for collisions. Only effective if [member use_collision] is `true`. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. Only effective if [member use_collision] is `true`. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collision_priority(): float64
        set collision_priority(value: float64)
    }
    class CSGShape3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A CSG Sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgsphere3d.html  
     */
    class CSGSphere3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        set_radial_segments(radial_segments: int64): void
        get_radial_segments(): int64
        set_rings(rings: int64): void
        get_rings(): int64
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        set_material(material: Material): void
        get_material(): Material
        
        /** Radius of the sphere. */
        get radius(): float64
        set radius(value: float64)
        
        /** Number of vertical slices for the sphere. */
        get radial_segments(): int64
        set radial_segments(value: int64)
        
        /** Number of horizontal slices for the sphere. */
        get rings(): int64
        set rings(value: int64)
        
        /** If `true` the normals of the sphere are set to give a smooth effect making the sphere seem rounded. If `false` the sphere will have a flat shaded look. */
        get smooth_faces(): boolean
        set smooth_faces(value: boolean)
        
        /** The material used to render the sphere. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** A CSG Torus shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_csgtorus3d.html  
     */
    class CSGTorus3D extends CSGPrimitive3D {
        constructor(identifier?: any)
        set_inner_radius(radius: float64): void
        get_inner_radius(): float64
        set_outer_radius(radius: float64): void
        get_outer_radius(): float64
        set_sides(sides: int64): void
        get_sides(): int64
        set_ring_sides(sides: int64): void
        get_ring_sides(): int64
        set_material(material: Material): void
        get_material(): Material
        set_smooth_faces(smooth_faces: boolean): void
        get_smooth_faces(): boolean
        
        /** The inner radius of the torus. */
        get inner_radius(): float64
        set inner_radius(value: float64)
        
        /** The outer radius of the torus. */
        get outer_radius(): float64
        set outer_radius(value: float64)
        
        /** The number of slices the torus is constructed of. */
        get sides(): int64
        set sides(value: int64)
        
        /** The number of edges each ring of the torus is constructed of. */
        get ring_sides(): int64
        set ring_sides(value: int64)
        
        /** If `true` the normals of the torus are set to give a smooth effect making the torus seem rounded. If `false` the torus will have a flat shaded look. */
        get smooth_faces(): boolean
        set smooth_faces(value: boolean)
        
        /** The material used to render the torus. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** Calls the specified method after optional delay.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_callbacktweener.html  
     */
    class CallbackTweener extends Tweener {
        constructor(identifier?: any)
        /** Makes the callback call delayed by given time in seconds.  
         *  **Example:**  
         *    
         */
        set_delay(delay: float64): CallbackTweener
    }
    namespace Camera2D {
        enum AnchorMode {
            /** The camera's position is fixed so that the top-left corner is always at the origin. */
            ANCHOR_MODE_FIXED_TOP_LEFT = 0,
            
            /** The camera's position takes into account vertical/horizontal offsets and the screen size. */
            ANCHOR_MODE_DRAG_CENTER = 1,
        }
        enum Camera2DProcessCallback {
            /** The camera updates during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            CAMERA2D_PROCESS_PHYSICS = 0,
            
            /** The camera updates during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            CAMERA2D_PROCESS_IDLE = 1,
        }
    }
    /** Camera node for 2D scenes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_camera2d.html  
     */
    class Camera2D extends Node2D {
        constructor(identifier?: any)
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
        
        /** Forces this [Camera2D] to become the current active one. [member enabled] must be `true`. */
        make_current(): void
        
        /** Returns `true` if this [Camera2D] is the active camera (see [method Viewport.get_camera_2d]). */
        is_current(): boolean
        _make_current(_unnamed_arg0: Object): void
        
        /** Sets the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
        set_limit(margin: Side, limit: int64): void
        
        /** Returns the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
        get_limit(margin: Side): int64
        set_limit_smoothing_enabled(limit_smoothing_enabled: boolean): void
        is_limit_smoothing_enabled(): boolean
        set_drag_vertical_enabled(enabled: boolean): void
        is_drag_vertical_enabled(): boolean
        set_drag_horizontal_enabled(enabled: boolean): void
        is_drag_horizontal_enabled(): boolean
        set_drag_vertical_offset(offset: float64): void
        get_drag_vertical_offset(): float64
        set_drag_horizontal_offset(offset: float64): void
        get_drag_horizontal_offset(): float64
        
        /** Sets the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        set_drag_margin(margin: Side, drag_margin: float64): void
        
        /** Returns the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        get_drag_margin(margin: Side): float64
        
        /** Returns this camera's target position, in global coordinates.  
         *      
         *  **Note:** The returned value is not the same as [member Node2D.global_position], as it is affected by the drag properties. It is also not the same as the current position if [member position_smoothing_enabled] is `true` (see [method get_screen_center_position]).  
         */
        get_target_position(): Vector2
        
        /** Returns the center of the screen from this camera's point of view, in global coordinates.  
         *      
         *  **Note:** The exact targeted position of the camera may be different. See [method get_target_position].  
         */
        get_screen_center_position(): Vector2
        set_zoom(zoom: Vector2): void
        get_zoom(): Vector2
        set_custom_viewport(viewport: Node): void
        get_custom_viewport(): Node
        set_position_smoothing_speed(position_smoothing_speed: float64): void
        get_position_smoothing_speed(): float64
        set_position_smoothing_enabled(position_smoothing_speed: boolean): void
        is_position_smoothing_enabled(): boolean
        set_rotation_smoothing_enabled(enabled: boolean): void
        is_rotation_smoothing_enabled(): boolean
        set_rotation_smoothing_speed(speed: float64): void
        get_rotation_smoothing_speed(): float64
        
        /** Forces the camera to update scroll immediately. */
        force_update_scroll(): void
        
        /** Sets the camera's position immediately to its current smoothing destination.  
         *  This method has no effect if [member position_smoothing_enabled] is `false`.  
         */
        reset_smoothing(): void
        
        /** Aligns the camera to the tracked node. */
        align(): void
        _set_old_smoothing(follow_smoothing: float64): void
        set_screen_drawing_enabled(screen_drawing_enabled: boolean): void
        is_screen_drawing_enabled(): boolean
        set_limit_drawing_enabled(limit_drawing_enabled: boolean): void
        is_limit_drawing_enabled(): boolean
        set_margin_drawing_enabled(margin_drawing_enabled: boolean): void
        is_margin_drawing_enabled(): boolean
        
        /** The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in [member limit_top], [member limit_bottom], [member limit_left] and [member limit_right]. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The Camera2D's anchor point. See [enum AnchorMode] constants. */
        get anchor_mode(): int64
        set anchor_mode(value: int64)
        
        /** If `true`, the camera's rendered view is not affected by its [member Node2D.rotation] and [member Node2D.global_rotation]. */
        get ignore_rotation(): boolean
        set ignore_rotation(value: boolean)
        
        /** Controls whether the camera can be active or not. If `true`, the [Camera2D] will become the main camera when it enters the scene tree and there is no active camera currently (see [method Viewport.get_camera_2d]).  
         *  When the camera is currently active and [member enabled] is set to `false`, the next enabled [Camera2D] in the scene tree will become active.  
         */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The camera's zoom. A zoom of `Vector(2, 2)` doubles the size seen in the viewport. A zoom of `Vector(0.5, 0.5)` halves the size seen in the viewport.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Camera2D] zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a [CanvasLayer] that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         */
        get zoom(): Vector2
        set zoom(value: Vector2)
        
        /** The custom [Viewport] node attached to the [Camera2D]. If `null` or not a [Viewport], uses the default viewport instead. */
        get custom_viewport(): Viewport
        set custom_viewport(value: Viewport)
        
        /** The camera's process callback. See [enum Camera2DProcessCallback]. */
        get process_callback(): int64
        set process_callback(value: int64)
        
        /** If `true`, the camera smoothly stops when reaches its limits.  
         *  This property has no effect if [member position_smoothing_enabled] is `false`.  
         *      
         *  **Note:** To immediately update the camera's position to be within limits without smoothing, even with this setting enabled, invoke [method reset_smoothing].  
         */
        get limit_smoothed(): boolean
        set limit_smoothed(value: boolean)
        
        /** If `true`, the camera's view smoothly moves towards its target position at [member position_smoothing_speed]. */
        get position_smoothing_enabled(): boolean
        set position_smoothing_enabled(value: boolean)
        
        /** Speed in pixels per second of the camera's smoothing effect when [member position_smoothing_enabled] is `true`. */
        get position_smoothing_speed(): float64
        set position_smoothing_speed(value: float64)
        
        /** If `true`, the camera's view smoothly rotates, via asymptotic smoothing, to align with its target rotation at [member rotation_smoothing_speed].  
         *      
         *  **Note:** This property has no effect if [member ignore_rotation] is `true`.  
         */
        get rotation_smoothing_enabled(): boolean
        set rotation_smoothing_enabled(value: boolean)
        
        /** The angular, asymptotic speed of the camera's rotation smoothing effect when [member rotation_smoothing_enabled] is `true`. */
        get rotation_smoothing_speed(): float64
        set rotation_smoothing_speed(value: float64)
        
        /** If `true`, the camera only moves when reaching the horizontal (left and right) drag margins. If `false`, the camera moves horizontally regardless of margins. */
        get drag_horizontal_enabled(): boolean
        set drag_horizontal_enabled(value: boolean)
        
        /** If `true`, the camera only moves when reaching the vertical (top and bottom) drag margins. If `false`, the camera moves vertically regardless of the drag margins. */
        get drag_vertical_enabled(): boolean
        set drag_vertical_enabled(value: boolean)
        
        /** The relative horizontal drag offset of the camera between the right (`-1`) and left (`1`) drag margins.  
         *      
         *  **Note:** Used to set the initial horizontal drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_horizontal_enabled] is `true` or the drag margins are changed.  
         */
        get drag_horizontal_offset(): float64
        set drag_horizontal_offset(value: float64)
        
        /** The relative vertical drag offset of the camera between the bottom (`-1`) and top (`1`) drag margins.  
         *      
         *  **Note:** Used to set the initial vertical drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_vertical_enabled] is `true` or the drag margins are changed.  
         */
        get drag_vertical_offset(): float64
        set drag_vertical_offset(value: float64)
        
        /** If `true`, draws the camera's screen rectangle in the editor. */
        get editor_draw_screen(): boolean
        set editor_draw_screen(value: boolean)
        
        /** If `true`, draws the camera's limits rectangle in the editor. */
        get editor_draw_limits(): boolean
        set editor_draw_limits(value: boolean)
        
        /** If `true`, draws the camera's drag margin rectangle in the editor. */
        get editor_draw_drag_margin(): boolean
        set editor_draw_drag_margin(value: boolean)
    }
    namespace Camera3D {
        enum ProjectionType {
            /** Perspective projection. Objects on the screen becomes smaller when they are far away. */
            PROJECTION_PERSPECTIVE = 0,
            
            /** Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
            PROJECTION_ORTHOGONAL = 1,
            
            /** Frustum projection. This mode allows adjusting [member frustum_offset] to create "tilted frustum" effects. */
            PROJECTION_FRUSTUM = 2,
        }
        enum KeepAspect {
            /** Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV. */
            KEEP_WIDTH = 0,
            
            /** Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV. */
            KEEP_HEIGHT = 1,
        }
        enum DopplerTracking {
            /** Disables [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] simulation (default). */
            DOPPLER_TRACKING_DISABLED = 0,
            
            /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
            DOPPLER_TRACKING_IDLE_STEP = 1,
            
            /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
            DOPPLER_TRACKING_PHYSICS_STEP = 2,
        }
    }
    /** Camera node, displays from a point of view.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_camera3d.html  
     */
    class Camera3D extends Node3D {
        constructor(identifier?: any)
        /** Returns a normal vector in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        project_ray_normal(screen_point: Vector2): Vector3
        
        /** Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc. */
        project_local_ray_normal(screen_point: Vector2): Vector3
        
        /** Returns a 3D position in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        project_ray_origin(screen_point: Vector2): Vector3
        
        /** Returns the 2D coordinate in the [Viewport] rectangle that maps to the given 3D point in world space.  
         *      
         *  **Note:** When using this to position GUI elements over a 3D viewport, use [method is_position_behind] to prevent them from appearing if the 3D point is behind the camera:  
         *    
         */
        unproject_position(world_point: Vector3): Vector2
        
        /** Returns `true` if the given position is behind the camera (the blue part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods.  
         *      
         *  **Note:** A position which returns `false` may still be outside the camera's field of view.  
         */
        is_position_behind(world_point: Vector3): boolean
        
        /** Returns the 3D point in world space that maps to the given 2D coordinate in the [Viewport] rectangle on a plane that is the given [param z_depth] distance into the scene away from the camera. */
        project_position(screen_point: Vector2, z_depth: float64): Vector3
        
        /** Sets the camera projection to perspective mode (see [constant PROJECTION_PERSPECTIVE]), by specifying a [param fov] (field of view) angle in degrees, and the [param z_near] and [param z_far] clip planes in world space units. */
        set_perspective(fov: float64, z_near: float64, z_far: float64): void
        
        /** Sets the camera projection to orthogonal mode (see [constant PROJECTION_ORTHOGONAL]), by specifying a [param size], and the [param z_near] and [param z_far] clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.) */
        set_orthogonal(size: float64, z_near: float64, z_far: float64): void
        
        /** Sets the camera projection to frustum mode (see [constant PROJECTION_FRUSTUM]), by specifying a [param size], an [param offset], and the [param z_near] and [param z_far] clip planes in world space units. See also [member frustum_offset]. */
        set_frustum(size: float64, offset: Vector2, z_near: float64, z_far: float64): void
        
        /** Makes this camera the current camera for the [Viewport] (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added. */
        make_current(): void
        
        /** If this is the current camera, remove it from being current. If [param enable_next] is `true`, request to make the next camera current, if any. */
        clear_current(enable_next: boolean = true): void
        set_current(enabled: boolean): void
        is_current(): boolean
        
        /** Returns the transform of the camera plus the vertical ([member v_offset]) and horizontal ([member h_offset]) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [XRCamera3D]. */
        get_camera_transform(): Transform3D
        
        /** Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function. */
        get_camera_projection(): Projection
        get_fov(): float64
        get_frustum_offset(): Vector2
        get_size(): float64
        get_far(): float64
        get_near(): float64
        set_fov(fov: float64): void
        set_frustum_offset(offset: Vector2): void
        set_size(size: float64): void
        set_far(far: float64): void
        set_near(near: float64): void
        get_projection(): Camera3D.ProjectionType
        set_projection(mode: Camera3D.ProjectionType): void
        set_h_offset(offset: float64): void
        get_h_offset(): float64
        set_v_offset(offset: float64): void
        get_v_offset(): float64
        set_cull_mask(mask: int64): void
        get_cull_mask(): int64
        set_environment(env: Environment): void
        get_environment(): Environment
        set_attributes(env: CameraAttributes): void
        get_attributes(): CameraAttributes
        set_keep_aspect_mode(mode: Camera3D.KeepAspect): void
        get_keep_aspect_mode(): Camera3D.KeepAspect
        set_doppler_tracking(mode: Camera3D.DopplerTracking): void
        get_doppler_tracking(): Camera3D.DopplerTracking
        
        /** Returns the camera's frustum planes in world space units as an array of [Plane]s in the following order: near, far, left, top, right, bottom. Not to be confused with [member frustum_offset]. */
        get_frustum(): Array
        
        /** Returns `true` if the given position is inside the camera's frustum (the green part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods. */
        is_position_in_frustum(world_point: Vector3): boolean
        
        /** Returns the camera's RID from the [RenderingServer]. */
        get_camera_rid(): RID
        
        /** Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera. */
        get_pyramid_shape_rid(): RID
        
        /** Based on [param value], enables or disables the specified layer in the [member cull_mask], given a [param layer_number] between 1 and 20. */
        set_cull_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member cull_mask] is enabled, given a [param layer_number] between 1 and 20. */
        get_cull_mask_value(layer_number: int64): boolean
        
        /** The axis to lock during [member fov]/[member size] adjustments. Can be either [constant KEEP_WIDTH] or [constant KEEP_HEIGHT]. */
        get keep_aspect(): int64
        set keep_aspect(value: int64)
        
        /** The culling mask that describes which [member VisualInstance3D.layers] are rendered by this camera. By default, all 20 user-visible layers are rendered.  
         *      
         *  **Note:** Since the [member cull_mask] allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting [member cull_mask] using a script allows you to toggle those reserved layers, which can be useful for editor plugins.  
         *  To adjust [member cull_mask] more easily using a script, use [method get_cull_mask_value] and [method set_cull_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get cull_mask(): int64
        set cull_mask(value: int64)
        
        /** The [Environment] to use for this camera. */
        get environment(): Environment
        set environment(value: Environment)
        
        /** The [CameraAttributes] to use for this camera. */
        get attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The horizontal (X) offset of the camera viewport. */
        get h_offset(): float64
        set h_offset(value: float64)
        
        /** The vertical (Y) offset of the camera viewport. */
        get v_offset(): float64
        set v_offset(value: float64)
        
        /** If not [constant DOPPLER_TRACKING_DISABLED], this camera will simulate the [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] for objects changed in particular `_process` methods. See [enum DopplerTracking] for possible values. */
        get doppler_tracking(): int64
        set doppler_tracking(value: int64)
        
        /** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
        get projection(): int64
        set projection(value: int64)
        
        /** If `true`, the ancestor [Viewport] is currently using this camera.  
         *  If multiple cameras are in the scene, one will always be made current. For example, if two [Camera3D] nodes are present in the scene and only one is current, setting one camera's [member current] to `false` will cause the other camera to be made current.  
         */
        get current(): boolean
        set current(value: boolean)
        
        /** The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, [member fov] sets the other axis' field of view angle.  
         *  For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:  
         *  - ~91.31 degrees in a 4:3 viewport  
         *  - ~101.67 degrees in a 16:10 viewport  
         *  - ~107.51 degrees in a 16:9 viewport  
         *  - ~121.63 degrees in a 21:9 viewport  
         */
        get fov(): float64
        set fov(value: float64)
        
        /** The camera's size in meters measured as the diameter of the width or height, depending on [member keep_aspect]. Only applicable in orthogonal and frustum modes. */
        get size(): float64
        set size(value: float64)
        
        /** The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [url=https://zdoom.org/wiki/Y-shearing]Y-shearing[/url].  
         *      
         *  **Note:** Only effective if [member projection] is [constant PROJECTION_FRUSTUM].  
         */
        get frustum_offset(): Vector2
        set frustum_offset(value: Vector2)
        
        /** The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the  *entire*  range. Values lower than the default can lead to increased Z-fighting. */
        get near(): float64
        set near(value: float64)
        
        /** The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [member far] can improve performance if it results in objects being partially or fully culled. */
        get far(): float64
        set far(value: float64)
    }
    class Camera3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class Camera3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Parent class for camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cameraattributes.html  
     */
    class CameraAttributes extends Resource {
        constructor(identifier?: any)
        set_exposure_multiplier(multiplier: float64): void
        get_exposure_multiplier(): float64
        set_exposure_sensitivity(sensitivity: float64): void
        get_exposure_sensitivity(): float64
        set_auto_exposure_enabled(enabled: boolean): void
        is_auto_exposure_enabled(): boolean
        set_auto_exposure_speed(exposure_speed: float64): void
        get_auto_exposure_speed(): float64
        set_auto_exposure_scale(exposure_grey: float64): void
        get_auto_exposure_scale(): float64
        
        /** Sensitivity of camera sensors, measured in ISO. A higher sensitivity results in a brighter image. Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. When [member auto_exposure_enabled] this can be used as a method of exposure compensation, doubling the value will increase the exposure value (measured in EV100) by 1 stop. */
        get exposure_sensitivity(): float64
        set exposure_sensitivity(value: float64)
        
        /** Multiplier for the exposure amount. A higher value results in a brighter image. */
        get exposure_multiplier(): float64
        set exposure_multiplier(value: float64)
        
        /** If `true`, enables the tonemapping auto exposure mode of the scene renderer. If `true`, the renderer will automatically determine the exposure setting to adapt to the scene's illumination and the observed light. */
        get auto_exposure_enabled(): boolean
        set auto_exposure_enabled(value: boolean)
        
        /** The scale of the auto exposure effect. Affects the intensity of auto exposure. */
        get auto_exposure_scale(): float64
        set auto_exposure_scale(value: float64)
        
        /** The speed of the auto exposure effect. Affects the time needed for the camera to perform auto exposure. */
        get auto_exposure_speed(): float64
        set auto_exposure_speed(value: float64)
    }
    /** Physically-based camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cameraattributesphysical.html  
     */
    class CameraAttributesPhysical extends CameraAttributes {
        constructor(identifier?: any)
        set_aperture(aperture: float64): void
        get_aperture(): float64
        set_shutter_speed(shutter_speed: float64): void
        get_shutter_speed(): float64
        set_focal_length(focal_length: float64): void
        get_focal_length(): float64
        set_focus_distance(focus_distance: float64): void
        get_focus_distance(): float64
        set_near(near: float64): void
        get_near(): float64
        set_far(far: float64): void
        get_far(): float64
        
        /** Returns the vertical field of view that corresponds to the [member frustum_focal_length]. This value is calculated internally whenever [member frustum_focal_length] is changed. */
        get_fov(): float64
        set_auto_exposure_max_exposure_value(exposure_value_max: float64): void
        get_auto_exposure_max_exposure_value(): float64
        set_auto_exposure_min_exposure_value(exposure_value_min: float64): void
        get_auto_exposure_min_exposure_value(): float64
        
        /** Distance from camera of object that will be in focus, measured in meters. Internally this will be clamped to be at least 1 millimeter larger than [member frustum_focal_length]. */
        get frustum_focus_distance(): float64
        set frustum_focus_distance(value: float64)
        
        /** Distance between camera lens and camera aperture, measured in millimeters. Controls field of view and depth of field. A larger focal length will result in a smaller field of view and a narrower depth of field meaning fewer objects will be in focus. A smaller focal length will result in a wider field of view and a larger depth of field meaning more objects will be in focus. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.fov] property and the [member Camera3D.keep_aspect] property. */
        get frustum_focal_length(): float64
        set frustum_focal_length(value: float64)
        
        /** Override value for [member Camera3D.near]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.near] property. */
        get frustum_near(): float64
        set frustum_near(value: float64)
        
        /** Override value for [member Camera3D.far]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.far] property. */
        get frustum_far(): float64
        set frustum_far(value: float64)
        
        /** Size of the aperture of the camera, measured in f-stops. An f-stop is a unitless ratio between the focal length of the camera and the diameter of the aperture. A high aperture setting will result in a smaller aperture which leads to a dimmer image and sharper focus. A low aperture results in a wide aperture which lets in more light resulting in a brighter, less-focused image. Default is appropriate for outdoors at daytime (i.e. for use with a default [DirectionalLight3D]), for indoor lighting, a value between 2 and 4 is more appropriate.  
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.  
         */
        get exposure_aperture(): float64
        set exposure_aperture(value: float64)
        
        /** Time for shutter to open and close, evaluated as `1 / shutter_speed` seconds. A higher value will allow less light (leading to a darker image), while a lower value will allow more light (leading to a brighter image).  
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.  
         */
        get exposure_shutter_speed(): float64
        set exposure_shutter_speed(value: float64)
        
        /** The minimum luminance luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        get auto_exposure_min_exposure_value(): float64
        set auto_exposure_min_exposure_value(value: float64)
        
        /** The maximum luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        get auto_exposure_max_exposure_value(): float64
        set auto_exposure_max_exposure_value(value: float64)
    }
    /** Camera settings in an easy to use format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cameraattributespractical.html  
     */
    class CameraAttributesPractical extends CameraAttributes {
        constructor(identifier?: any)
        set_dof_blur_far_enabled(enabled: boolean): void
        is_dof_blur_far_enabled(): boolean
        set_dof_blur_far_distance(distance: float64): void
        get_dof_blur_far_distance(): float64
        set_dof_blur_far_transition(distance: float64): void
        get_dof_blur_far_transition(): float64
        set_dof_blur_near_enabled(enabled: boolean): void
        is_dof_blur_near_enabled(): boolean
        set_dof_blur_near_distance(distance: float64): void
        get_dof_blur_near_distance(): float64
        set_dof_blur_near_transition(distance: float64): void
        get_dof_blur_near_transition(): float64
        set_dof_blur_amount(amount: float64): void
        get_dof_blur_amount(): float64
        set_auto_exposure_max_sensitivity(max_sensitivity: float64): void
        get_auto_exposure_max_sensitivity(): float64
        set_auto_exposure_min_sensitivity(min_sensitivity: float64): void
        get_auto_exposure_min_sensitivity(): float64
        
        /** Enables depth of field blur for objects further than [member dof_blur_far_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_far_transition].  
         *      
         *  **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get dof_blur_far_enabled(): boolean
        set dof_blur_far_enabled(value: boolean)
        
        /** Objects further from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        get dof_blur_far_distance(): float64
        set dof_blur_far_distance(value: float64)
        
        /** When positive, distance over which (starting from [member dof_blur_far_distance]) blur effect will scale from 0 to [member dof_blur_amount]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_far_distance] and will increase in a physically accurate way as objects get further from the [Camera3D]. */
        get dof_blur_far_transition(): float64
        set dof_blur_far_transition(value: float64)
        
        /** Enables depth of field blur for objects closer than [member dof_blur_near_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_near_transition].  
         *      
         *  **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get dof_blur_near_enabled(): boolean
        set dof_blur_near_enabled(value: boolean)
        
        /** Objects closer from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        get dof_blur_near_distance(): float64
        set dof_blur_near_distance(value: float64)
        
        /** When positive, distance over which blur effect will scale from 0 to [member dof_blur_amount], ending at [member dof_blur_near_distance]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_near_distance] and will increase in a physically accurate way as objects get closer to the [Camera3D]. */
        get dof_blur_near_transition(): float64
        set dof_blur_near_transition(value: float64)
        
        /** Sets the maximum amount of blur. When using physically-based blur amounts, will instead act as a multiplier. High values lead to an increased amount of blurriness, but can be much more expensive to calculate. It is best to keep this as low as possible for a given art style. */
        get dof_blur_amount(): float64
        set dof_blur_amount(value: float64)
        
        /** The minimum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        get auto_exposure_min_sensitivity(): float64
        set auto_exposure_min_sensitivity(value: float64)
        
        /** The maximum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        get auto_exposure_max_sensitivity(): float64
        set auto_exposure_max_sensitivity(value: float64)
    }
    namespace CameraFeed {
        enum FeedDataType {
            /** No image set for the feed. */
            FEED_NOIMAGE = 0,
            
            /** Feed supplies RGB images. */
            FEED_RGB = 1,
            
            /** Feed supplies YCbCr images that need to be converted to RGB. */
            FEED_YCBCR = 2,
            
            /** Feed supplies separate Y and CbCr images that need to be combined and converted to RGB. */
            FEED_YCBCR_SEP = 3,
        }
        enum FeedPosition {
            /** Unspecified position. */
            FEED_UNSPECIFIED = 0,
            
            /** Camera is mounted at the front of the device. */
            FEED_FRONT = 1,
            
            /** Camera is mounted at the back of the device. */
            FEED_BACK = 2,
        }
    }
    /** A camera feed gives you access to a single physical camera attached to your device.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_camerafeed.html  
     */
    class CameraFeed extends RefCounted {
        constructor(identifier?: any)
        /** Returns the unique ID for this feed. */
        get_id(): int64
        is_active(): boolean
        set_active(active: boolean): void
        
        /** Returns the camera's name. */
        get_name(): string
        _set_name(name: string): void
        
        /** Returns the position of camera on the device. */
        get_position(): CameraFeed.FeedPosition
        _set_position(position: CameraFeed.FeedPosition): void
        get_transform(): Transform2D
        set_transform(transform: Transform2D): void
        _set_RGB_img(rgb_img: Image): void
        _set_YCbCr_img(ycbcr_img: Image): void
        
        /** Returns feed image data type. */
        get_datatype(): CameraFeed.FeedDataType
        
        /** If `true`, the feed is active. */
        get feed_is_active(): boolean
        set feed_is_active(value: boolean)
        
        /** The transform applied to the camera's image. */
        get feed_transform(): Transform2D
        set feed_transform(value: Transform2D)
    }
    /** Texture provided by a [CameraFeed].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cameratexture.html  
     */
    class CameraTexture extends Texture2D {
        constructor(identifier?: any)
        set_camera_feed_id(feed_id: int64): void
        get_camera_feed_id(): int64
        set_which_feed(which_feed: CameraServer.FeedImage): void
        get_which_feed(): CameraServer.FeedImage
        set_camera_active(active: boolean): void
        get_camera_active(): boolean
        
        /** The ID of the [CameraFeed] for which we want to display the image. */
        get camera_feed_id(): int64
        set camera_feed_id(value: int64)
        
        /** Which image within the [CameraFeed] we want access to, important if the camera image is split in a Y and CbCr component. */
        get which_feed(): int64
        set which_feed(value: int64)
        
        /** Convenience property that gives access to the active property of the [CameraFeed]. */
        get camera_is_active(): boolean
        set camera_is_active(value: boolean)
    }
    /** Merges several 2D nodes into a single draw operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvasgroup.html  
     */
    class CanvasGroup extends Node2D {
        constructor(identifier?: any)
        set_fit_margin(fit_margin: float64): void
        get_fit_margin(): float64
        set_clear_margin(clear_margin: float64): void
        get_clear_margin(): float64
        set_use_mipmaps(use_mipmaps: boolean): void
        is_using_mipmaps(): boolean
        
        /** Sets the size of a margin used to expand the drawable rect of this [CanvasGroup]. The size of the [CanvasGroup] is determined by fitting a rect around its children then expanding that rect by [member fit_margin]. This increases both the backbuffer area used and the area covered by the [CanvasGroup] both of which can reduce performance. This should be kept as small as possible and should only be expanded when an increased size is needed (e.g. for custom shader effects). */
        get fit_margin(): float64
        set fit_margin(value: float64)
        
        /** Sets the size of the margin used to expand the clearing rect of this [CanvasGroup]. This expands the area of the backbuffer that will be used by the [CanvasGroup]. A smaller margin will reduce the area of the backbuffer used which can increase performance, however if [member use_mipmaps] is enabled, a small margin may result in mipmap errors at the edge of the [CanvasGroup]. Accordingly, this should be left as small as possible, but should be increased if artifacts appear along the edges of the canvas group. */
        get clear_margin(): float64
        set clear_margin(value: float64)
        
        /** If `true`, calculates mipmaps for the backbuffer before drawing the [CanvasGroup] so that mipmaps can be used in a custom [ShaderMaterial] attached to the [CanvasGroup]. Generating mipmaps has a performance cost so this should not be enabled unless required. */
        get use_mipmaps(): boolean
        set use_mipmaps(value: boolean)
    }
    namespace CanvasItem {
        enum TextureFilter {
            /** The [CanvasItem] will inherit the filter from its parent. */
            TEXTURE_FILTER_PARENT_NODE = 0,
            
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            TEXTURE_FILTER_NEAREST = 1,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            TEXTURE_FILTER_LINEAR = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.  
             */
            TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.  
             */
            TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
            
            /** Represents the size of the [enum TextureFilter] enum. */
            TEXTURE_FILTER_MAX = 7,
        }
        enum TextureRepeat {
            /** The [CanvasItem] will inherit the filter from its parent. */
            TEXTURE_REPEAT_PARENT_NODE = 0,
            
            /** Texture will not repeat. */
            TEXTURE_REPEAT_DISABLED = 1,
            
            /** Texture will repeat normally. */
            TEXTURE_REPEAT_ENABLED = 2,
            
            /** Texture will repeat in a 2x2 tiled mode, where elements at even positions are mirrored. */
            TEXTURE_REPEAT_MIRROR = 3,
            
            /** Represents the size of the [enum TextureRepeat] enum. */
            TEXTURE_REPEAT_MAX = 4,
        }
        enum ClipChildrenMode {
            /** Child draws over parent and is not clipped. */
            CLIP_CHILDREN_DISABLED = 0,
            
            /** Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn. */
            CLIP_CHILDREN_ONLY = 1,
            
            /** Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area. */
            CLIP_CHILDREN_AND_DRAW = 2,
            
            /** Represents the size of the [enum ClipChildrenMode] enum. */
            CLIP_CHILDREN_MAX = 3,
        }
    }
    /** Abstract base class for everything in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvasitem.html  
     */
    class CanvasItem extends Node {
        /** The [CanvasItem]'s global transform has changed. This notification is only received if enabled by [method set_notify_transform]. */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** The [CanvasItem]'s local transform has changed. This notification is only received if enabled by [method set_notify_local_transform]. */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35
        
        /** The [CanvasItem] is requested to draw (see [method _draw]). */
        static readonly NOTIFICATION_DRAW = 30
        
        /** The [CanvasItem]'s visibility has changed. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 31
        
        /** The [CanvasItem] has entered the canvas. */
        static readonly NOTIFICATION_ENTER_CANVAS = 32
        
        /** The [CanvasItem] has exited the canvas. */
        static readonly NOTIFICATION_EXIT_CANVAS = 33
        
        /** The [CanvasItem]'s active [World2D] changed. */
        static readonly NOTIFICATION_WORLD_2D_CHANGED = 36
        constructor(identifier?: any)
        
        /** Called when [CanvasItem] has been requested to redraw (after [method queue_redraw] is called, either manually or by the engine).  
         *  Corresponds to the [constant NOTIFICATION_DRAW] notification in [method Object._notification].  
         */
        /* gdvirtual */ _draw(): void
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
        _edit_set_rotation(degrees: float64): void
        _edit_get_rotation(): float64
        _edit_use_rotation(): boolean
        _edit_set_pivot(pivot: Vector2): void
        _edit_get_pivot(): Vector2
        _edit_use_pivot(): boolean
        _edit_get_transform(): Transform2D
        
        /** Returns the canvas item RID used by [RenderingServer] for this item. */
        get_canvas_item(): RID
        set_visible(visible: boolean): void
        is_visible(): boolean
        
        /** Returns `true` if the node is present in the [SceneTree], its [member visible] property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is therefore not drawn (see [method _draw]). */
        is_visible_in_tree(): boolean
        
        /** Show the [CanvasItem] if it's currently hidden. This is equivalent to setting [member visible] to `true`. For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead. */
        show(): void
        
        /** Hide the [CanvasItem] if it's currently visible. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        
        /** Queues the [CanvasItem] to redraw. During idle time, if [CanvasItem] is visible, [constant NOTIFICATION_DRAW] is sent and [method _draw] is called. This only occurs **once** per frame, even if this method has been called multiple times. */
        queue_redraw(): void
        
        /** Moves this node to display on top of its siblings.  
         *  Internally, the node is moved to the bottom of parent's child list. The method has no effect on nodes without a parent.  
         */
        move_to_front(): void
        set_as_top_level(enable: boolean): void
        is_set_as_top_level(): boolean
        set_light_mask(light_mask: int64): void
        get_light_mask(): int64
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_self_modulate(self_modulate: Color): void
        get_self_modulate(): Color
        set_z_index(z_index: int64): void
        get_z_index(): int64
        set_z_as_relative(enable: boolean): void
        is_z_relative(): boolean
        set_y_sort_enabled(enabled: boolean): void
        is_y_sort_enabled(): boolean
        set_draw_behind_parent(enable: boolean): void
        is_draw_behind_parent_enabled(): boolean
        
        /** Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also [method draw_multiline] and [method draw_polyline].  
         *  If [param width] is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_line(from: Vector2, to: Vector2, color: Color, width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws a dashed line from a 2D point to another, with a given color and width. See also [method draw_multiline] and [method draw_polyline].  
         *  If [param width] is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_dashed_line(from: Vector2, to: Vector2, color: Color, width: float64 = -1, dash: float64 = 2, aligned: boolean = true): void
        
        /** Draws interconnected line segments with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline] instead. See also [method draw_polygon].  
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_polyline(points: PackedVector2Array, color: Color, width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws interconnected line segments with a uniform [param width], point-by-point coloring, and optional antialiasing (supported only for positive [param width]). Colors assigned to line points match by index between [param points] and [param colors], i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline_colors] instead. See also [method draw_polygon].  
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_polyline_colors(points: PackedVector2Array, colors: PackedColorArray, width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws an unfilled arc between the given angles with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). The larger the value of [param point_count], the smoother the curve. See also [method draw_circle].  
         *  If [param width] is negative, it will be ignored and the arc will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *  The arc is drawn from [param start_angle] towards the value of [param end_angle] so in clockwise direction if `start_angle < end_angle` and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of [param start_angle] and [param end_angle] is greater than [constant @GDScript.TAU] radians, then a full circle arc is drawn (i.e. arc will not overlap itself).  
         */
        draw_arc(center: Vector2, radius: float64, start_angle: float64, end_angle: float64, point_count: int64, color: Color, width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws multiple disconnected lines with a uniform [param width] and [param color]. Each line is defined by two consecutive points from [param points] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline] instead.  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_multiline(points: PackedVector2Array, color: Color, width: float64 = -1): void
        
        /** Draws multiple disconnected lines with a uniform [param width] and segment-by-segment coloring. Each segment is defined by two consecutive points from [param points] array and a corresponding color from [param colors] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints and has `colors *` color. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline_colors] instead.  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        draw_multiline_colors(points: PackedVector2Array, colors: PackedColorArray, width: float64 = -1): void
        
        /** Draws a rectangle. If [param filled] is `true`, the rectangle will be filled with the [param color] specified. If [param filled] is `false`, the rectangle will be drawn as a stroke with the [param color] and [param width] specified. See also [method draw_texture_rect].  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *      
         *  **Note:** [param width] is only effective if [param filled] is `false`.  
         *      
         *  **Note:** Unfilled rectangles drawn with a negative [param width] may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent [param color]).  
         */
        draw_rect(rect: Rect2, color: Color, filled: boolean = true, width: float64 = -1): void
        
        /** Draws a colored, filled circle. See also [method draw_arc], [method draw_polyline] and [method draw_polygon]. */
        draw_circle(position: Vector2, radius: float64, color: Color): void
        
        /** Draws a texture at a given position. */
        draw_texture(texture: Texture2D, position: Vector2, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a textured rectangle at a given position, optionally modulated by a color. If [param transpose] is `true`, the texture will have its X and Y coordinates swapped. See also [method draw_rect] and [method draw_texture_rect_region]. */
        draw_texture_rect(texture: Texture2D, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** Draws a textured rectangle from a texture's region (specified by [param src_rect]) at a given position, optionally modulated by a color. If [param transpose] is `true`, the texture will have its X and Y coordinates swapped. See also [method draw_texture_rect]. */
        draw_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        
        /** Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See [member FontFile.multichannel_signed_distance_field] for more information and caveats about MSDF font rendering.  
         *  If [param outline] is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the [param outline] radius.  
         *  Value of the [param pixel_range] should the same that was used during distance field texture generation.  
         */
        draw_msdf_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outline: float64 = 0, pixel_range: float64 = 4, scale: float64 = 1): void
        
        /** Draws a textured rectangle region of the font texture with LCD subpixel anti-aliasing at a given position, optionally modulated by a color.  
         *  Texture is drawn using the following blend operation, blend mode of the [CanvasItemMaterial] is ignored:  
         *    
         */
        draw_lcd_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a styled rectangle. */
        draw_style_box(style_box: StyleBox, rect: Rect2): void
        
        /** Draws a custom primitive. 1 point for a point, 2 points for a line, 3 points for a triangle, and 4 points for a quad. If 0 points or more than 4 points are specified, nothing will be drawn and an error message will be printed. See also [method draw_line], [method draw_polyline], [method draw_polygon], and [method draw_rect]. */
        draw_primitive(points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array, texture: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Draws a solid polygon of any number of points, convex or concave. Unlike [method draw_colored_polygon], each point's color can be changed individually. See also [method draw_polyline] and [method draw_polyline_colors]. If you need more flexibility (such as being able to use bones), use [method RenderingServer.canvas_item_add_triangle_array] instead. */
        draw_polygon(points: PackedVector2Array, colors: PackedColorArray, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, texture: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Draws a colored polygon of any number of points, convex or concave. Unlike [method draw_polygon], a single color must be specified for the whole polygon. */
        draw_colored_polygon(points: PackedVector2Array, color: Color, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, texture: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Draws [param text] using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width.  
         *  **Example using the default project font:**  
         *    
         *  See also [method Font.draw_string].  
         */
        draw_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, font_size: int64 = 16, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Breaks [param text] into lines and draws it using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_multiline_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, font_size: int64 = 16, max_lines: int64 = -1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Draws [param text] outline using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, font_size: int64 = 16, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Breaks [param text] to the lines and draws text outline using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_multiline_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, font_size: int64 = 16, max_lines: int64 = -1, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Draws a string first character using a custom font. */
        draw_char(font: Font, pos: Vector2, char: string, font_size: int64 = 16, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a string first character outline using a custom font. */
        draw_char_outline(font: Font, pos: Vector2, char: string, font_size: int64 = 16, size: int64 = -1, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a [Mesh] in 2D, using the provided texture. See [MeshInstance2D] for related documentation. */
        draw_mesh(mesh: Mesh, texture: Texture2D, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a [MultiMesh] in 2D with the provided texture. See [MultiMeshInstance2D] for related documentation. */
        draw_multimesh(multimesh: MultiMesh, texture: Texture2D): void
        
        /** Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [param scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         */
        draw_set_transform(position: Vector2, rotation: float64 = 0, scale: Vector2 = Vector2.ONE): void
        
        /** Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this. */
        draw_set_transform_matrix(xform: Transform2D): void
        
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        draw_animation_slice(animation_length: float64, slice_begin: float64, slice_end: float64, offset: float64 = 0): void
        
        /** After submitting all animations slices via [method draw_animation_slice], this function can be used to revert drawing to its default state (all subsequent drawing commands will be visible). If you don't care about this particular use case, usage of this function after submitting the slices is not required. */
        draw_end_animation(): void
        
        /** Returns the transform matrix of this item. */
        get_transform(): Transform2D
        
        /** Returns the global transform matrix of this item, i.e. the combined transform up to the topmost [CanvasItem] node. The topmost item is a [CanvasItem] that either has no parent, has non-[CanvasItem] parent or it has [member top_level] enabled. */
        get_global_transform(): Transform2D
        
        /** Returns the transform from the local coordinate system of this [CanvasItem] to the [Viewport]s coordinate system. */
        get_global_transform_with_canvas(): Transform2D
        
        /** Returns the transform from the coordinate system of the canvas, this item is in, to the [Viewport]s embedders coordinate system. */
        get_viewport_transform(): Transform2D
        
        /** Returns the viewport's boundaries as a [Rect2]. */
        get_viewport_rect(): Rect2
        
        /** Returns the transform from the coordinate system of the canvas, this item is in, to the [Viewport]s coordinate system. */
        get_canvas_transform(): Transform2D
        
        /** Returns the transform of this [CanvasItem] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.  
         *  Equals to [method get_global_transform] if the window is embedded (see [member Viewport.gui_embed_subwindows]).  
         */
        get_screen_transform(): Transform2D
        
        /** Returns the mouse's position in this [CanvasItem] using the local coordinate system of this [CanvasItem]. */
        get_local_mouse_position(): Vector2
        
        /** Returns the mouse's position in the [CanvasLayer] that this [CanvasItem] is in using the coordinate system of the [CanvasLayer].  
         *      
         *  **Note:** For screen-space coordinates (e.g. when using a non-embedded [Popup]), you can use [method DisplayServer.mouse_get_position].  
         */
        get_global_mouse_position(): Vector2
        
        /** Returns the [RID] of the [World2D] canvas where this item is in. */
        get_canvas(): RID
        
        /** Returns the [World2D] where this item is in. */
        get_world_2d(): World2D
        set_material(material: Material): void
        get_material(): Material
        set_use_parent_material(enable: boolean): void
        get_use_parent_material(): boolean
        
        /** If [param enable] is `true`, this node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] when its local transform changes. */
        set_notify_local_transform(enable: boolean): void
        
        /** Returns `true` if local transform notifications are communicated to children. */
        is_local_transform_notification_enabled(): boolean
        
        /** If [param enable] is `true`, this node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] when its global transform changes. */
        set_notify_transform(enable: boolean): void
        
        /** Returns `true` if global transform notifications are communicated to children. */
        is_transform_notification_enabled(): boolean
        
        /** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
        force_update_transform(): void
        
        /** Assigns [param screen_point] as this node's new local transform. */
        make_canvas_position_local(screen_point: Vector2): Vector2
        
        /** Transformations issued by [param event]'s inputs are applied in local space instead of global space. */
        make_input_local(event: InputEvent): InputEvent
        set_visibility_layer(layer: int64): void
        get_visibility_layer(): int64
        
        /** Set/clear individual bits on the rendering visibility layer. This simplifies editing this [CanvasItem]'s visibility layer. */
        set_visibility_layer_bit(layer: int64, enabled: boolean): void
        
        /** Returns an individual bit on the rendering visibility layer. */
        get_visibility_layer_bit(layer: int64): boolean
        set_texture_filter(mode: CanvasItem.TextureFilter): void
        get_texture_filter(): CanvasItem.TextureFilter
        set_texture_repeat(mode: CanvasItem.TextureRepeat): void
        get_texture_repeat(): CanvasItem.TextureRepeat
        set_clip_children_mode(mode: CanvasItem.ClipChildrenMode): void
        get_clip_children_mode(): CanvasItem.ClipChildrenMode
        
        /** If `true`, this [CanvasItem] is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return `true`).  
         *      
         *  **Note:** For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The color applied to this [CanvasItem]. This property does affect child [CanvasItem]s, unlike [member self_modulate] which only affects the node itself. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The color applied to this [CanvasItem]. This property does **not** affect child [CanvasItem]s, unlike [member modulate] which affects both the node itself and its children.  
         *      
         *  **Note:** Internal children (e.g. sliders in [ColorPicker] or tab bar in [TabContainer]) are also not affected by this property (see `include_internal` parameter of [method Node.get_child] and other similar methods).  
         */
        get self_modulate(): Color
        set self_modulate(value: Color)
        
        /** If `true`, the object draws behind its parent. */
        get show_behind_parent(): boolean
        set show_behind_parent(value: boolean)
        
        /** If `true`, this [CanvasItem] will  *not*  inherit its transform from parent [CanvasItem]s. Its draw order will also be changed to make it draw on top of other [CanvasItem]s that do not have [member top_level] set to `true`. The [CanvasItem] will effectively act as if it was placed as a child of a bare [Node]. */
        get top_level(): boolean
        set top_level(value: boolean)
        
        /** Allows the current node to clip child nodes, essentially acting as a mask. */
        get clip_children(): int64
        set clip_children(value: int64)
        
        /** The rendering layers in which this [CanvasItem] responds to [Light2D] nodes. */
        get light_mask(): int64
        set light_mask(value: int64)
        
        /** The rendering layer in which this [CanvasItem] is rendered by [Viewport] nodes. A [Viewport] will render a [CanvasItem] if it and all its parents share a layer with the [Viewport]'s canvas cull mask. */
        get visibility_layer(): int64
        set visibility_layer(value: int64)
        
        /** Z index. Controls the order in which the nodes render. A node with a higher Z index will display in front of others. Must be between [constant RenderingServer.CANVAS_ITEM_Z_MIN] and [constant RenderingServer.CANVAS_ITEM_Z_MAX] (inclusive).  
         *      
         *  **Note:** Changing the Z index of a [Control] only affects the drawing order, not the order in which input events are handled. This can be useful to implement certain UI animations, e.g. a menu where hovered items are scaled and should overlap others.  
         */
        get z_index(): int64
        set z_index(value: int64)
        
        /** If `true`, the node's Z index is relative to its parent's Z index. If this node's Z index is 2 and its parent's effective Z index is 3, then this node's effective Z index will be 2 + 3 = 5. */
        get z_as_relative(): boolean
        set z_as_relative(value: boolean)
        
        /** If `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. If `false`, Y-sorting is disabled. Y-sorting only affects children that inherit from [CanvasItem].  
         *  You can nest nodes with Y-sorting. Child Y-sorted nodes are sorted in the same space as the parent Y-sort. This feature allows you to organize a scene better or divide it into multiple ones without changing your scene tree.  
         */
        get y_sort_enabled(): boolean
        set y_sort_enabled(value: boolean)
        
        /** The texture filtering mode to use on this [CanvasItem]. */
        get texture_filter(): int64
        set texture_filter(value: int64)
        
        /** The texture repeating mode to use on this [CanvasItem]. */
        get texture_repeat(): int64
        set texture_repeat(value: int64)
        
        /** The material applied to this [CanvasItem]. */
        get material(): CanvasItemMaterial | ShaderMaterial
        set material(value: CanvasItemMaterial | ShaderMaterial)
        
        /** If `true`, the parent [CanvasItem]'s [member material] property is used as this one's material. */
        get use_parent_material(): boolean
        set use_parent_material(value: boolean)
        
        /** Emitted when the [CanvasItem] must redraw,  *after*  the related [constant NOTIFICATION_DRAW] notification, and  *before*  [method _draw] is called.  
         *      
         *  **Note:** Deferred connections do not allow drawing through the `draw_*` methods.  
         */
        readonly draw: Signal //  => void
        
        /** Emitted when the visibility (hidden/visible) changes. */
        readonly visibility_changed: Signal //  => void
        
        /** Emitted when becoming hidden. */
        readonly hidden: Signal //  => void
        
        /** Emitted when the item's [Rect2] boundaries (position or size) have changed, or when an action is taking place that may have impacted these boundaries (e.g. changing [member Sprite2D.texture]). */
        readonly item_rect_changed: Signal //  => void
    }
    class CanvasItemEditor extends VBoxContainer {
        constructor(identifier?: any)
        _get_editor_data(_unnamed_arg0: Object): Object
        update_viewport(): void
        center_at(position: Vector2): void
        _set_owner_for_node_and_children(_unnamed_arg0: Node, _unnamed_arg1: Node): void
        readonly item_lock_status_changed: Signal //  => void
        readonly item_group_status_changed: Signal //  => void
    }
    class CanvasItemEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class CanvasItemEditorViewport extends Control {
        constructor(identifier?: any)
    }
    namespace CanvasItemMaterial {
        enum BlendMode {
            /** Mix blending mode. Colors are assumed to be independent of the alpha (opacity) value. */
            BLEND_MODE_MIX = 0,
            
            /** Additive blending mode. */
            BLEND_MODE_ADD = 1,
            
            /** Subtractive blending mode. */
            BLEND_MODE_SUB = 2,
            
            /** Multiplicative blending mode. */
            BLEND_MODE_MUL = 3,
            
            /** Mix blending mode. Colors are assumed to be premultiplied by the alpha (opacity) value. */
            BLEND_MODE_PREMULT_ALPHA = 4,
        }
        enum LightMode {
            /** Render the material using both light and non-light sensitive material properties. */
            LIGHT_MODE_NORMAL = 0,
            
            /** Render the material as if there were no light. */
            LIGHT_MODE_UNSHADED = 1,
            
            /** Render the material as if there were only light. */
            LIGHT_MODE_LIGHT_ONLY = 2,
        }
    }
    /** A material for [CanvasItem]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvasitemmaterial.html  
     */
    class CanvasItemMaterial extends Material {
        constructor(identifier?: any)
        set_blend_mode(blend_mode: CanvasItemMaterial.BlendMode): void
        get_blend_mode(): CanvasItemMaterial.BlendMode
        set_light_mode(light_mode: CanvasItemMaterial.LightMode): void
        get_light_mode(): CanvasItemMaterial.LightMode
        set_particles_animation(particles_anim: boolean): void
        get_particles_animation(): boolean
        set_particles_anim_h_frames(frames: int64): void
        get_particles_anim_h_frames(): int64
        set_particles_anim_v_frames(frames: int64): void
        get_particles_anim_v_frames(): int64
        set_particles_anim_loop(loop: boolean): void
        get_particles_anim_loop(): boolean
        
        /** The manner in which a material's rendering is applied to underlying textures. */
        get blend_mode(): int64
        set blend_mode(value: int64)
        
        /** The manner in which material reacts to lighting. */
        get light_mode(): int64
        set light_mode(value: int64)
        
        /** If `true`, enable spritesheet-based animation features when assigned to [GPUParticles2D] and [CPUParticles2D] nodes. The [member ParticleProcessMaterial.anim_speed_max] or [member CPUParticles2D.anim_speed_max] should also be set to a positive value for the animation to play.  
         *  This property (and other `particles_anim_*` properties that depend on it) has no effect on other types of nodes.  
         */
        get particles_animation(): boolean
        set particles_animation(value: boolean)
        
        /** The number of columns in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particles_anim_h_frames(): int64
        set particles_anim_h_frames(value: int64)
        
        /** The number of rows in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particles_anim_v_frames(): int64
        set particles_anim_v_frames(value: int64)
        
        /** If `true`, the particles animation will loop.  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particles_anim_loop(): boolean
        set particles_anim_loop(value: boolean)
    }
    class CanvasItemMaterialConversionPlugin extends EditorResourceConversionPlugin {
        constructor(identifier?: any)
    }
    /** A node used for independent rendering of objects within a 2D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvaslayer.html  
     */
    class CanvasLayer extends Node {
        constructor(identifier?: any)
        set_layer(layer: int64): void
        get_layer(): int64
        set_visible(visible: boolean): void
        is_visible(): boolean
        
        /** Shows any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `true`. */
        show(): void
        
        /** Hides any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        
        /** Returns the transform from the [CanvasLayer]s coordinate system to the [Viewport]s coordinate system. */
        get_final_transform(): Transform2D
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_rotation(radians: float64): void
        get_rotation(): float64
        set_scale(scale: Vector2): void
        get_scale(): Vector2
        set_follow_viewport(enable: boolean): void
        is_following_viewport(): boolean
        set_follow_viewport_scale(scale: float64): void
        get_follow_viewport_scale(): float64
        set_custom_viewport(viewport: Node): void
        get_custom_viewport(): Node
        
        /** Returns the RID of the canvas used by this layer. */
        get_canvas(): RID
        
        /** Layer index for draw order. Lower values are drawn behind higher values.  
         *      
         *  **Note:** If multiple CanvasLayers have the same layer index, [CanvasItem] children of one CanvasLayer are drawn behind the [CanvasItem] children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.  
         */
        get layer(): int64
        set layer(value: int64)
        
        /** If `false`, any [CanvasItem] under this [CanvasLayer] will be hidden.  
         *  Unlike [member CanvasItem.visible], visibility of a [CanvasLayer] isn't propagated to underlying layers.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The layer's base offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The layer's rotation in radians. */
        get rotation(): float64
        set rotation(value: float64)
        
        /** The layer's scale. */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** The layer's transform. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** The custom [Viewport] node assigned to the [CanvasLayer]. If `null`, uses the default viewport instead. */
        get custom_viewport(): Viewport
        set custom_viewport(value: Viewport)
        
        /** If enabled, the [CanvasLayer] will use the viewport's transform, so it will move when camera moves instead of being anchored in a fixed position on the screen.  
         *  Together with [member follow_viewport_scale] it can be used for a pseudo 3D effect.  
         */
        get follow_viewport_enabled(): boolean
        set follow_viewport_enabled(value: boolean)
        
        /** Scales the layer when using [member follow_viewport_enabled]. Layers moving into the foreground should have increasing scales, while layers moving into the background should have decreasing scales. */
        get follow_viewport_scale(): float64
        set follow_viewport_scale(value: float64)
        
        /** Emitted when visibility of the layer is changed. See [member visible]. */
        readonly visibility_changed: Signal //  => void
    }
    /** A node that applies a color tint to a canvas.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvasmodulate.html  
     */
    class CanvasModulate extends Node2D {
        constructor(identifier?: any)
        set_color(color: Color): void
        get_color(): Color
        
        /** The tint color to apply. */
        get color(): Color
        set color(value: Color)
    }
    /** Texture with optional normal and specular maps for use in 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_canvastexture.html  
     */
    class CanvasTexture extends Texture2D {
        constructor(identifier?: any)
        set_diffuse_texture(texture: Texture2D): void
        get_diffuse_texture(): Texture2D
        set_normal_texture(texture: Texture2D): void
        get_normal_texture(): Texture2D
        set_specular_texture(texture: Texture2D): void
        get_specular_texture(): Texture2D
        set_specular_color(color: Color): void
        get_specular_color(): Color
        set_specular_shininess(shininess: float64): void
        get_specular_shininess(): float64
        set_texture_filter(filter: CanvasItem.TextureFilter): void
        get_texture_filter(): CanvasItem.TextureFilter
        set_texture_repeat(repeat: CanvasItem.TextureRepeat): void
        get_texture_repeat(): CanvasItem.TextureRepeat
        
        /** The diffuse (color) texture to use. This is the main texture you want to set in most cases. */
        get diffuse_texture(): Texture2D
        set diffuse_texture(value: Texture2D)
        
        /** The normal map texture to use. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture].  
         *      
         *  **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.  
         */
        get normal_texture(): Texture2D
        set normal_texture(value: Texture2D)
        
        /** The specular map to use for [Light2D] specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher [member specular_shininess] value. Using a colored [member specular_texture] allows controlling specular shininess on a per-channel basis. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specular_texture(): Texture2D
        set specular_texture(value: Texture2D)
        
        /** The multiplier for specular reflection colors. The [Light2D]'s color is also taken into account when determining the reflection color. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specular_color(): Color
        set specular_color(value: Color)
        
        /** The specular exponent for [Light2D] specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of `1.0` disables specular reflections entirely. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specular_shininess(): float64
        set specular_shininess(value: float64)
        
        /** The texture filtering mode to use when drawing this [CanvasTexture]. */
        get texture_filter(): int64
        set texture_filter(value: int64)
        
        /** The texture repeat mode to use when drawing this [CanvasTexture]. */
        get texture_repeat(): int64
        set texture_repeat(value: int64)
    }
    /** Class representing a capsule-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_capsulemesh.html  
     */
    class CapsuleMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        set_radial_segments(segments: int64): void
        get_radial_segments(): int64
        set_rings(rings: int64): void
        get_rings(): int64
        
        /** Radius of the capsule mesh. */
        get radius(): float64
        set radius(value: float64)
        
        /** Total height of the capsule mesh (including the hemispherical ends). */
        get height(): float64
        set height(value: float64)
        
        /** Number of radial segments on the capsule mesh. */
        get radial_segments(): int64
        set radial_segments(value: int64)
        
        /** Number of rings along the height of the capsule. */
        get rings(): int64
        set rings(value: int64)
    }
    /** A 2D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_capsuleshape2d.html  
     */
    class CapsuleShape2D extends Shape2D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's height. */
        get height(): float64
        set height(value: float64)
    }
    /** A 3D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_capsuleshape3d.html  
     */
    class CapsuleShape3D extends Shape3D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's height. */
        get height(): float64
        set height(value: float64)
    }
    class Cast2DEditor extends Control {
        constructor(identifier?: any)
    }
    class Cast2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A container that keeps child controls in its center.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_centercontainer.html  
     */
    class CenterContainer extends Container {
        constructor(identifier?: any)
        set_use_top_left(enable: boolean): void
        is_using_top_left(): boolean
        
        /** If `true`, centers children relative to the [CenterContainer]'s top left corner. */
        get use_top_left(): boolean
        set use_top_left(value: boolean)
    }
    /** Controls how an individual character will be displayed in a [RichTextEffect].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_charfxtransform.html  
     */
    class CharFXTransform extends RefCounted {
        constructor(identifier?: any)
        get_transform(): Transform2D
        set_transform(transform: Transform2D): void
        get_range(): Vector2i
        set_range(range: Vector2i): void
        get_elapsed_time(): float64
        set_elapsed_time(time: float64): void
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
        get_glyph_index(): int64
        set_glyph_index(glyph_index: int64): void
        get_relative_index(): int64
        set_relative_index(relative_index: int64): void
        get_glyph_count(): int64
        set_glyph_count(glyph_count: int64): void
        get_glyph_flags(): int64
        set_glyph_flags(glyph_flags: int64): void
        get_font(): RID
        set_font(font: RID): void
        
        /** The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** Absolute character range in the string, corresponding to the glyph. Setting this property won't affect drawing. */
        get range(): Vector2i
        set range(value: Vector2i)
        
        /** The time elapsed since the [RichTextLabel] was added to the scene tree (in seconds). Time stops when the [RichTextLabel] is paused (see [member Node.process_mode]). Resets when the text in the [RichTextLabel] is changed.  
         *      
         *  **Note:** Time still passes while the [RichTextLabel] is hidden.  
         */
        get elapsed_time(): float64
        set elapsed_time(value: float64)
        
        /** If `true`, the character will be drawn. If `false`, the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [member color] to `Color(1, 1, 1, 0)` instead. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, FX transform is called for outline drawing. Setting this property won't affect drawing. */
        get outline(): boolean
        set outline(value: boolean)
        
        /** The position offset the character will be drawn with (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The color the character will be drawn with. */
        get color(): Color
        set color(value: Color)
        
        /** Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque [Color]. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.  
         *  For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following [Dictionary]:  
         *    
         */
        get env(): Dictionary
        set env(value: Dictionary)
        
        /** Font specific glyph index. */
        get glyph_index(): int64
        set glyph_index(value: int64)
        
        /** Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster. Setting this property won't affect drawing. */
        get glyph_count(): int64
        set glyph_count(value: int64)
        
        /** Glyph flags. See [enum TextServer.GraphemeFlag] for more info. Setting this property won't affect drawing. */
        get glyph_flags(): int64
        set glyph_flags(value: int64)
        
        /** The character offset of the glyph, relative to the current [RichTextEffect] custom block. Setting this property won't affect drawing. */
        get relative_index(): int64
        set relative_index(value: int64)
        
        /** Font resource used to render glyph. */
        get font(): RID
        set font(value: RID)
    }
    namespace CharacterBody2D {
        enum MotionMode {
            /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for sided games like platformers. */
            MOTION_MODE_GROUNDED = 0,
            
            /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for top-down games. */
            MOTION_MODE_FLOATING = 1,
        }
        enum PlatformOnLeave {
            /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
            PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
            
            /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
            PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
            
            /** Do nothing when leaving a platform. */
            PLATFORM_ON_LEAVE_DO_NOTHING = 2,
        }
    }
    /** A 2D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_characterbody2d.html  
     */
    class CharacterBody2D extends PhysicsBody2D {
        constructor(identifier?: any)
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body (by default only on floor) rather than stop immediately. If the other body is a [CharacterBody2D] or [RigidBody2D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.  
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for detailed information about collisions that occurred, use [method get_slide_collision].  
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.  
         *  The general behavior and available properties change according to the [member motion_mode].  
         *  Returns `true` if the body collided, otherwise, returns `false`.  
         */
        move_and_slide(): boolean
        
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns `true`. */
        apply_floor_snap(): void
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_safe_margin(margin: float64): void
        get_safe_margin(): float64
        is_floor_stop_on_slope_enabled(): boolean
        set_floor_stop_on_slope_enabled(enabled: boolean): void
        set_floor_constant_speed_enabled(enabled: boolean): void
        is_floor_constant_speed_enabled(): boolean
        set_floor_block_on_wall_enabled(enabled: boolean): void
        is_floor_block_on_wall_enabled(): boolean
        set_slide_on_ceiling_enabled(enabled: boolean): void
        is_slide_on_ceiling_enabled(): boolean
        set_platform_floor_layers(exclude_layer: int64): void
        get_platform_floor_layers(): int64
        set_platform_wall_layers(exclude_layer: int64): void
        get_platform_wall_layers(): int64
        get_max_slides(): int64
        set_max_slides(max_slides: int64): void
        get_floor_max_angle(): float64
        set_floor_max_angle(radians: float64): void
        get_floor_snap_length(): float64
        set_floor_snap_length(floor_snap_length: float64): void
        get_wall_min_slide_angle(): float64
        set_wall_min_slide_angle(radians: float64): void
        get_up_direction(): Vector2
        set_up_direction(up_direction: Vector2): void
        set_motion_mode(mode: CharacterBody2D.MotionMode): void
        get_motion_mode(): CharacterBody2D.MotionMode
        set_platform_on_leave(on_leave_apply_velocity: CharacterBody2D.PlatformOnLeave): void
        get_platform_on_leave(): CharacterBody2D.PlatformOnLeave
        
        /** Returns `true` if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor(): boolean
        
        /** Returns `true` if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor_only(): boolean
        
        /** Returns `true` if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling(): boolean
        
        /** Returns `true` if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling_only(): boolean
        
        /** Returns `true` if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall(): boolean
        
        /** Returns `true` if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall_only(): boolean
        
        /** Returns the surface normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        get_floor_normal(): Vector2
        
        /** Returns the surface normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns `true`. */
        get_wall_normal(): Vector2
        
        /** Returns the last motion applied to the [CharacterBody2D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        get_last_motion(): Vector2
        
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        get_position_delta(): Vector2
        
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        get_real_velocity(): Vector2
        
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        get_floor_angle(up_direction: Vector2 = new Vector2(0, -1)): float64
        
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_velocity(): Vector2
        
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        get_slide_collision_count(): int64
        
        /** Returns a [KinematicCollision2D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1).  
         *  **Example usage:**  
         *    
         */
        get_slide_collision(slide_idx: int64): KinematicCollision2D
        
        /** Returns a [KinematicCollision2D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        get_last_slide_collision(): KinematicCollision2D
        
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        get motion_mode(): int64
        set motion_mode(value: int64)
        
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector2.UP]. As the vector will be normalized it can't be equal to [constant Vector2.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        get up_direction(): Vector2
        set up_direction(value: Vector2)
        
        /** Current velocity vector in pixels per second, used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically. */
        get slide_on_ceiling(): boolean
        set slide_on_ceiling(value: boolean)
        
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. */
        get max_slides(): int64
        set max_slides(value: int64)
        
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. This property only affects movement when [member motion_mode] is [constant MOTION_MODE_FLOATING]. */
        get wall_min_slide_angle(): float64
        set wall_min_slide_angle(value: float64)
        
        /** If `true`, the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.  
         *  If `false`, the body will slide on floor's slopes when [member velocity] applies a downward force.  
         */
        get floor_stop_on_slope(): boolean
        set floor_stop_on_slope(value: boolean)
        
        /** If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.  
         *  If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.  
         */
        get floor_constant_speed(): boolean
        set floor_constant_speed(value: boolean)
        
        /** If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        get floor_block_on_wall(): boolean
        set floor_block_on_wall(value: boolean)
        
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        get floor_max_angle(): float64
        set floor_max_angle(value: float64)
        
        /** Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].  
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].  
         */
        get floor_snap_length(): float64
        set floor_snap_length(value: float64)
        
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        get platform_on_leave(): int64
        set platform_on_leave(value: int64)
        
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all floor bodies are detected and propagate their velocity. */
        get platform_floor_layers(): int64
        set platform_floor_layers(value: int64)
        
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all wall bodies are ignored. */
        get platform_wall_layers(): int64
        set platform_wall_layers(value: int64)
        
        /** Extra margin used for collision recovery when calling [method move_and_slide].  
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.  
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.  
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.  
         */
        get safe_margin(): float64
        set safe_margin(value: float64)
    }
    namespace CharacterBody3D {
        enum MotionMode {
            /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for grounded games like platformers. */
            MOTION_MODE_GROUNDED = 0,
            
            /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for games without ground like space games. */
            MOTION_MODE_FLOATING = 1,
        }
        enum PlatformOnLeave {
            /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
            PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
            
            /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
            PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
            
            /** Do nothing when leaving a platform. */
            PLATFORM_ON_LEAVE_DO_NOTHING = 2,
        }
    }
    /** A 3D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_characterbody3d.html  
     */
    class CharacterBody3D extends PhysicsBody3D {
        constructor(identifier?: any)
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body rather than stop immediately. If the other body is a [CharacterBody3D] or [RigidBody3D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.  
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for more detailed information about collisions that occurred, use [method get_slide_collision].  
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.  
         *  Returns `true` if the body collided, otherwise, returns `false`.  
         */
        move_and_slide(): boolean
        
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns `true`. */
        apply_floor_snap(): void
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_safe_margin(margin: float64): void
        get_safe_margin(): float64
        is_floor_stop_on_slope_enabled(): boolean
        set_floor_stop_on_slope_enabled(enabled: boolean): void
        set_floor_constant_speed_enabled(enabled: boolean): void
        is_floor_constant_speed_enabled(): boolean
        set_floor_block_on_wall_enabled(enabled: boolean): void
        is_floor_block_on_wall_enabled(): boolean
        set_slide_on_ceiling_enabled(enabled: boolean): void
        is_slide_on_ceiling_enabled(): boolean
        set_platform_floor_layers(exclude_layer: int64): void
        get_platform_floor_layers(): int64
        set_platform_wall_layers(exclude_layer: int64): void
        get_platform_wall_layers(): int64
        get_max_slides(): int64
        set_max_slides(max_slides: int64): void
        get_floor_max_angle(): float64
        set_floor_max_angle(radians: float64): void
        get_floor_snap_length(): float64
        set_floor_snap_length(floor_snap_length: float64): void
        get_wall_min_slide_angle(): float64
        set_wall_min_slide_angle(radians: float64): void
        get_up_direction(): Vector3
        set_up_direction(up_direction: Vector3): void
        set_motion_mode(mode: CharacterBody3D.MotionMode): void
        get_motion_mode(): CharacterBody3D.MotionMode
        set_platform_on_leave(on_leave_apply_velocity: CharacterBody3D.PlatformOnLeave): void
        get_platform_on_leave(): CharacterBody3D.PlatformOnLeave
        
        /** Returns `true` if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor(): boolean
        
        /** Returns `true` if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor_only(): boolean
        
        /** Returns `true` if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling(): boolean
        
        /** Returns `true` if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling_only(): boolean
        
        /** Returns `true` if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall(): boolean
        
        /** Returns `true` if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall_only(): boolean
        
        /** Returns the surface normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        get_floor_normal(): Vector3
        
        /** Returns the surface normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns `true`. */
        get_wall_normal(): Vector3
        
        /** Returns the last motion applied to the [CharacterBody3D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        get_last_motion(): Vector3
        
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        get_position_delta(): Vector3
        
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        get_real_velocity(): Vector3
        
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        get_floor_angle(up_direction: Vector3 = Vector3.ZERO): float64
        
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_velocity(): Vector3
        
        /** Returns the angular velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_angular_velocity(): Vector3
        
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        get_slide_collision_count(): int64
        
        /** Returns a [KinematicCollision3D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1). */
        get_slide_collision(slide_idx: int64): KinematicCollision3D
        
        /** Returns a [KinematicCollision3D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        get_last_slide_collision(): KinematicCollision3D
        
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        get motion_mode(): int64
        set motion_mode(value: int64)
        
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector3.UP]. As the vector will be normalized it can't be equal to [constant Vector3.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        get up_direction(): Vector3
        set up_direction(value: Vector3)
        
        /** If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically. */
        get slide_on_ceiling(): boolean
        set slide_on_ceiling(value: boolean)
        
        /** Current velocity vector (typically meters per second), used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. */
        get max_slides(): int64
        set max_slides(value: int64)
        
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. When [member motion_mode] is [constant MOTION_MODE_GROUNDED], it only affects movement if [member floor_block_on_wall] is `true`. */
        get wall_min_slide_angle(): float64
        set wall_min_slide_angle(value: float64)
        
        /** If `true`, the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.  
         *  If `false`, the body will slide on floor's slopes when [member velocity] applies a downward force.  
         */
        get floor_stop_on_slope(): boolean
        set floor_stop_on_slope(value: boolean)
        
        /** If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.  
         *  If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.  
         */
        get floor_constant_speed(): boolean
        set floor_constant_speed(value: boolean)
        
        /** If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        get floor_block_on_wall(): boolean
        set floor_block_on_wall(value: boolean)
        
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        get floor_max_angle(): float64
        set floor_max_angle(value: float64)
        
        /** Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].  
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].  
         */
        get floor_snap_length(): float64
        set floor_snap_length(value: float64)
        
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        get platform_on_leave(): int64
        set platform_on_leave(value: int64)
        
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all floor bodies are detected and propagate their velocity. */
        get platform_floor_layers(): int64
        set platform_floor_layers(value: int64)
        
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all wall bodies are ignored. */
        get platform_wall_layers(): int64
        set platform_wall_layers(value: int64)
        
        /** Extra margin used for collision recovery when calling [method move_and_slide].  
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.  
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.  
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.  
         */
        get safe_margin(): float64
        set safe_margin(value: float64)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_checkbox.html  
     */
    class CheckBox extends Button {
        constructor(identifier?: any)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_checkbutton.html  
     */
    class CheckButton extends Button {
        constructor(identifier?: any)
    }
    /** A 2D circle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_circleshape2d.html  
     */
    class CircleShape2D extends Shape2D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        
        /** The circle's radius. */
        get radius(): float64
        set radius(value: float64)
    }
    namespace CodeEdit {
        enum CodeCompletionKind {
            /** Marks the option as a class. */
            KIND_CLASS = 0,
            
            /** Marks the option as a function. */
            KIND_FUNCTION = 1,
            
            /** Marks the option as a Godot signal. */
            KIND_SIGNAL = 2,
            
            /** Marks the option as a variable. */
            KIND_VARIABLE = 3,
            
            /** Marks the option as a member. */
            KIND_MEMBER = 4,
            
            /** Marks the option as an enum entry. */
            KIND_ENUM = 5,
            
            /** Marks the option as a constant. */
            KIND_CONSTANT = 6,
            
            /** Marks the option as a Godot node path. */
            KIND_NODE_PATH = 7,
            
            /** Marks the option as a file path. */
            KIND_FILE_PATH = 8,
            
            /** Marks the option as unclassified or plain text. */
            KIND_PLAIN_TEXT = 9,
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
    }
    /** A multiline text editor designed for editing code.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_codeedit.html  
     */
    class CodeEdit extends TextEdit {
        constructor(identifier?: any)
        /** Override this method to define how the selected entry should be inserted. If [param replace] is true, any existing text should be replaced. */
        /* gdvirtual */ _confirm_code_completion(replace: boolean): void
        
        /** Override this method to define what happens when the user requests code completion. If [param force] is true, any checks should be bypassed. */
        /* gdvirtual */ _request_code_completion(force: boolean): void
        
        /** Override this method to define what items in [param candidates] should be displayed.  
         *  Both [param candidates] and the return is a [Array] of [Dictionary], see [method get_code_completion_option] for [Dictionary] content.  
         */
        /* gdvirtual */ _filter_code_completion_candidates(candidates: Array): Array
        set_indent_size(size: int64): void
        get_indent_size(): int64
        set_indent_using_spaces(use_spaces: boolean): void
        is_indent_using_spaces(): boolean
        set_auto_indent_enabled(enable: boolean): void
        is_auto_indent_enabled(): boolean
        set_auto_indent_prefixes(prefixes: Array): void
        get_auto_indent_prefixes(): Array
        
        /** Perform an indent as if the user activated the "ui_text_indent" action. */
        do_indent(): void
        
        /** Indents selected lines, or in the case of no selection the caret line by one. */
        indent_lines(): void
        
        /** Unindents selected lines, or in the case of no selection the caret line by one. Same as performing "ui_text_unindent" action. */
        unindent_lines(): void
        
        /** Converts the indents of lines between [param from_line] and [param to_line] to tabs or spaces as set by [member indent_use_spaces].  
         *  Values of `-1` convert the entire text.  
         */
        convert_indent(from_line: int64 = -1, to_line: int64 = -1): void
        set_auto_brace_completion_enabled(enable: boolean): void
        is_auto_brace_completion_enabled(): boolean
        set_highlight_matching_braces_enabled(enable: boolean): void
        is_highlight_matching_braces_enabled(): boolean
        
        /** Adds a brace pair.  
         *  Both the start and end keys must be symbols. Only the start key has to be unique.  
         */
        add_auto_brace_completion_pair(start_key: string, end_key: string): void
        set_auto_brace_completion_pairs(pairs: Dictionary): void
        get_auto_brace_completion_pairs(): Dictionary
        
        /** Returns `true` if open key [param open_key] exists. */
        has_auto_brace_completion_open_key(open_key: string): boolean
        
        /** Returns `true` if close key [param close_key] exists. */
        has_auto_brace_completion_close_key(close_key: string): boolean
        
        /** Gets the matching auto brace close key for [param open_key]. */
        get_auto_brace_completion_close_key(open_key: string): string
        set_draw_breakpoints_gutter(enable: boolean): void
        is_drawing_breakpoints_gutter(): boolean
        set_draw_bookmarks_gutter(enable: boolean): void
        is_drawing_bookmarks_gutter(): boolean
        set_draw_executing_lines_gutter(enable: boolean): void
        is_drawing_executing_lines_gutter(): boolean
        
        /** Sets the line as breakpointed. */
        set_line_as_breakpoint(line: int64, breakpointed: boolean): void
        
        /** Returns whether the line at the specified index is breakpointed or not. */
        is_line_breakpointed(line: int64): boolean
        
        /** Clears all breakpointed lines. */
        clear_breakpointed_lines(): void
        
        /** Gets all breakpointed lines. */
        get_breakpointed_lines(): PackedInt32Array
        
        /** Sets the line as bookmarked. */
        set_line_as_bookmarked(line: int64, bookmarked: boolean): void
        
        /** Returns whether the line at the specified index is bookmarked or not. */
        is_line_bookmarked(line: int64): boolean
        
        /** Clears all bookmarked lines. */
        clear_bookmarked_lines(): void
        
        /** Gets all bookmarked lines. */
        get_bookmarked_lines(): PackedInt32Array
        
        /** Sets the line as executing. */
        set_line_as_executing(line: int64, executing: boolean): void
        
        /** Returns whether the line at the specified index is marked as executing or not. */
        is_line_executing(line: int64): boolean
        
        /** Clears all executed lines. */
        clear_executing_lines(): void
        
        /** Gets all executing lines. */
        get_executing_lines(): PackedInt32Array
        set_draw_line_numbers(enable: boolean): void
        is_draw_line_numbers_enabled(): boolean
        set_line_numbers_zero_padded(enable: boolean): void
        is_line_numbers_zero_padded(): boolean
        set_draw_fold_gutter(enable: boolean): void
        is_drawing_fold_gutter(): boolean
        set_line_folding_enabled(enabled: boolean): void
        is_line_folding_enabled(): boolean
        
        /** Returns if the given line is foldable, that is, it has indented lines right below it or a comment / string block. */
        can_fold_line(line: int64): boolean
        
        /** Folds the given line, if possible (see [method can_fold_line]). */
        fold_line(line: int64): void
        
        /** Unfolds all lines that were previously folded. */
        unfold_line(line: int64): void
        
        /** Folds all lines that are possible to be folded (see [method can_fold_line]). */
        fold_all_lines(): void
        
        /** Unfolds all lines, folded or not. */
        unfold_all_lines(): void
        
        /** Toggle the folding of the code block at the given line. */
        toggle_foldable_line(line: int64): void
        
        /** Returns whether the line at the specified index is folded or not. */
        is_line_folded(line: int64): boolean
        
        /** Returns all lines that are current folded. */
        get_folded_lines(): Array
        
        /** Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see [method add_comment_delimiter]).  
         *  A code region is a part of code that is highlighted when folded and can help organize your script.  
         *  Code region start and end tags can be customized (see [method set_code_region_tags]).  
         *  Code regions are delimited using start and end tags (respectively `region` and `endregion` by default) preceded by one line comment delimiter. (eg. `#region` and `#endregion`)  
         */
        create_code_region(): void
        
        /** Returns the code region start tag (without comment delimiter). */
        get_code_region_start_tag(): string
        
        /** Returns the code region end tag (without comment delimiter). */
        get_code_region_end_tag(): string
        
        /** Sets the code region start and end tags (without comment delimiter). */
        set_code_region_tags(start: string = 'region', end: string = 'endregion'): void
        
        /** Returns whether the line at the specified index is a code region start. */
        is_line_code_region_start(line: int64): boolean
        
        /** Returns whether the line at the specified index is a code region end. */
        is_line_code_region_end(line: int64): boolean
        
        /** Adds a string delimiter.  
         *  Both the start and end keys must be symbols. Only the start key has to be unique.  
         *  [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to `true`.  
         */
        add_string_delimiter(start_key: string, end_key: string, line_only: boolean = false): void
        
        /** Removes the string delimiter with [param start_key]. */
        remove_string_delimiter(start_key: string): void
        
        /** Returns `true` if string [param start_key] exists. */
        has_string_delimiter(start_key: string): boolean
        set_string_delimiters(string_delimiters: Array): void
        
        /** Removes all string delimiters. */
        clear_string_delimiters(): void
        get_string_delimiters(): Array
        
        /** Returns the delimiter index if [param line] [param column] is in a string. If [param column] is not provided, will return the delimiter index if the entire [param line] is a string. Otherwise `-1`. */
        is_in_string(line: int64, column: int64 = -1): int64
        
        /** Adds a comment delimiter.  
         *  Both the start and end keys must be symbols. Only the start key has to be unique.  
         *  [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to `true`.  
         */
        add_comment_delimiter(start_key: string, end_key: string, line_only: boolean = false): void
        
        /** Removes the comment delimiter with [param start_key]. */
        remove_comment_delimiter(start_key: string): void
        
        /** Returns `true` if comment [param start_key] exists. */
        has_comment_delimiter(start_key: string): boolean
        set_comment_delimiters(comment_delimiters: Array): void
        
        /** Removes all comment delimiters. */
        clear_comment_delimiters(): void
        get_comment_delimiters(): Array
        
        /** Returns delimiter index if [param line] [param column] is in a comment. If [param column] is not provided, will return delimiter index if the entire [param line] is a comment. Otherwise `-1`. */
        is_in_comment(line: int64, column: int64 = -1): int64
        
        /** Gets the start key for a string or comment region index. */
        get_delimiter_start_key(delimiter_index: int64): string
        
        /** Gets the end key for a string or comment region index. */
        get_delimiter_end_key(delimiter_index: int64): string
        
        /** If [param line] [param column] is in a string or comment, returns the start position of the region. If not or no start could be found, both [Vector2] values will be `-1`. */
        get_delimiter_start_position(line: int64, column: int64): Vector2
        
        /** If [param line] [param column] is in a string or comment, returns the end position of the region. If not or no end could be found, both [Vector2] values will be `-1`. */
        get_delimiter_end_position(line: int64, column: int64): Vector2
        
        /** Sets the code hint text. Pass an empty string to clear. */
        set_code_hint(code_hint: string): void
        
        /** Sets if the code hint should draw below the text. */
        set_code_hint_draw_below(draw_below: boolean): void
        
        /** Returns the full text with char `0xFFFF` at the caret location. */
        get_text_for_code_completion(): string
        
        /** Emits [signal code_completion_requested], if [param force] is true will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path or signal. */
        request_code_completion(force: boolean = false): void
        
        /** Submits an item to the queue of potential candidates for the autocomplete menu. Call [method update_code_completion_options] to update the list.  
         *  [param location] indicates location of the option relative to the location of the code completion query. See [enum CodeEdit.CodeCompletionLocation] for how to set this value.  
         *      
         *  **Note:** This list will replace all current candidates.  
         */
        add_code_completion_option(type: CodeEdit.CodeCompletionKind, display_text: string, insert_text: string, text_color: Color = new Color(1, 1, 1, 1), icon: Resource = <any> {} /*compound.type from nil*/, value: any = <any> {} /*compound.type from nil*/, location: int64 = 1024): void
        
        /** Submits all completion options added with [method add_code_completion_option]. Will try to force the autocomplete menu to popup, if [param force] is `true`.  
         *      
         *  **Note:** This will replace all current candidates.  
         */
        update_code_completion_options(force: boolean): void
        
        /** Gets all completion options, see [method get_code_completion_option] for return content. */
        get_code_completion_options(): Array
        
        /** Gets the completion option at [param index]. The return [Dictionary] has the following key-values:  
         *  `kind`: [enum CodeCompletionKind]  
         *  `display_text`: Text that is shown on the autocomplete menu.  
         *  `insert_text`: Text that is to be inserted when this item is selected.  
         *  `font_color`: Color of the text on the autocomplete menu.  
         *  `icon`: Icon to draw on the autocomplete menu.  
         *  `default_value`: Value of the symbol.  
         */
        get_code_completion_option(index: int64): Dictionary
        
        /** Gets the index of the current selected completion option. */
        get_code_completion_selected_index(): int64
        
        /** Sets the current selected completion option. */
        set_code_completion_selected_index(index: int64): void
        
        /** Inserts the selected entry into the text. If [param replace] is true, any existing text is replaced rather than merged. */
        confirm_code_completion(replace: boolean = false): void
        
        /** Cancels the autocomplete menu. */
        cancel_code_completion(): void
        set_code_completion_enabled(enable: boolean): void
        is_code_completion_enabled(): boolean
        set_code_completion_prefixes(prefixes: Array): void
        get_code_completion_prefixes(): Array
        set_line_length_guidelines(guideline_columns: Array): void
        get_line_length_guidelines(): Array
        set_symbol_lookup_on_click_enabled(enable: boolean): void
        is_symbol_lookup_on_click_enabled(): boolean
        
        /** Returns the full text with char `0xFFFF` at the cursor location. */
        get_text_for_symbol_lookup(): string
        
        /** Returns the full text with char `0xFFFF` at the specified location. */
        get_text_with_cursor_char(line: int64, column: int64): string
        
        /** Sets the symbol emitted by [signal symbol_validate] as a valid lookup. */
        set_symbol_lookup_word_as_valid(valid: boolean): void
        
        /** Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line. */
        duplicate_lines(): void
        
        /** Set when a validated word from [signal symbol_validate] is clicked, the [signal symbol_lookup] should be emitted. */
        get symbol_lookup_on_click(): boolean
        set symbol_lookup_on_click(value: boolean)
        
        /** Sets whether line folding is allowed. */
        get line_folding(): boolean
        set line_folding(value: boolean)
        
        /** Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is draw more prominently. */
        get line_length_guidelines(): PackedInt32Array
        set line_length_guidelines(value: PackedInt32Array)
        
        /** Sets if breakpoints should be drawn in the gutter. This gutter is shared with bookmarks and executing lines. */
        get gutters_draw_breakpoints_gutter(): boolean
        set gutters_draw_breakpoints_gutter(value: boolean)
        
        /** Sets if bookmarked should be drawn in the gutter. This gutter is shared with breakpoints and executing lines. */
        get gutters_draw_bookmarks(): boolean
        set gutters_draw_bookmarks(value: boolean)
        
        /** Sets if executing lines should be marked in the gutter. This gutter is shared with breakpoints and bookmarks lines. */
        get gutters_draw_executing_lines(): boolean
        set gutters_draw_executing_lines(value: boolean)
        
        /** Sets if line numbers should be drawn in the gutter. */
        get gutters_draw_line_numbers(): boolean
        set gutters_draw_line_numbers(value: boolean)
        
        /** Sets if line numbers drawn in the gutter are zero padded. */
        get gutters_zero_pad_line_numbers(): boolean
        set gutters_zero_pad_line_numbers(value: boolean)
        
        /** Sets if foldable lines icons should be drawn in the gutter. */
        get gutters_draw_fold_gutter(): boolean
        set gutters_draw_fold_gutter(value: boolean)
        
        /** Sets the string delimiters. All existing string delimiters will be removed. */
        get delimiter_strings(): PackedStringArray
        set delimiter_strings(value: PackedStringArray)
        
        /** Sets the comment delimiters. All existing comment delimiters will be removed. */
        get delimiter_comments(): PackedStringArray
        set delimiter_comments(value: PackedStringArray)
        
        /** Sets whether code completion is allowed. */
        get code_completion_enabled(): boolean
        set code_completion_enabled(value: boolean)
        
        /** Sets prefixes that will trigger code completion. */
        get code_completion_prefixes(): PackedStringArray
        set code_completion_prefixes(value: PackedStringArray)
        
        /** Size of the tabulation indent (one [kbd]Tab[/kbd] press) in characters. If [member indent_use_spaces] is enabled the number of spaces to use. */
        get indent_size(): int64
        set indent_size(value: int64)
        
        /** Use spaces instead of tabs for indentation. */
        get indent_use_spaces(): boolean
        set indent_use_spaces(value: boolean)
        
        /** Sets whether automatic indent are enabled, this will add an extra indent if a prefix or brace is found. */
        get indent_automatic(): boolean
        set indent_automatic(value: boolean)
        
        /** Prefixes to trigger an automatic indent. */
        get indent_automatic_prefixes(): PackedStringArray
        set indent_automatic_prefixes(value: PackedStringArray)
        
        /** Sets whether brace pairs should be autocompleted. */
        get auto_brace_completion_enabled(): boolean
        set auto_brace_completion_enabled(value: boolean)
        
        /** Highlight mismatching brace pairs. */
        get auto_brace_completion_highlight_matching(): boolean
        set auto_brace_completion_highlight_matching(value: boolean)
        
        /** Sets the brace pairs to be autocompleted. */
        get auto_brace_completion_pairs(): Dictionary
        set auto_brace_completion_pairs(value: Dictionary)
        
        /** Emitted when a breakpoint is added or removed from a line. If the line is moved via backspace a removed is emitted at the old line. */
        readonly breakpoint_toggled: Signal // line: int64 => void
        
        /** Emitted when the user requests code completion. */
        readonly code_completion_requested: Signal //  => void
        
        /** Emitted when the user has clicked on a valid symbol. */
        readonly symbol_lookup: Signal // symbol: string, line: int64, column: int64 => void
        
        /** Emitted when the user hovers over a symbol. The symbol should be validated and responded to, by calling [method set_symbol_lookup_word_as_valid]. */
        readonly symbol_validate: Signal // symbol: string => void
    }
}
