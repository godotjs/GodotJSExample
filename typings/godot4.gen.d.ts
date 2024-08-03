// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate2dextension.html  
     */
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        constructor(identifier?: any)
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_gravity] and its respective getter. */
        /* gdvirtual */ _get_total_gravity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_linear_damp] and its respective getter. */
        /* gdvirtual */ _get_total_linear_damp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_angular_damp] and its respective getter. */
        /* gdvirtual */ _get_total_angular_damp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass] and its respective getter. */
        /* gdvirtual */ _get_center_of_mass(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass_local] and its respective getter. */
        /* gdvirtual */ _get_center_of_mass_local(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_mass] and its respective getter. */
        /* gdvirtual */ _get_inverse_mass(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_inertia] and its respective getter. */
        /* gdvirtual */ _get_inverse_inertia(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective setter. */
        /* gdvirtual */ _set_linear_velocity(velocity: Vector2): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective getter. */
        /* gdvirtual */ _get_linear_velocity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective setter. */
        /* gdvirtual */ _set_angular_velocity(velocity: float64): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective getter. */
        /* gdvirtual */ _get_angular_velocity(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective setter. */
        /* gdvirtual */ _set_transform(transform: Transform2D): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective getter. */
        /* gdvirtual */ _get_transform(): Transform2D
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_velocity_at_local_position]. */
        /* gdvirtual */ _get_velocity_at_local_position(local_position: Vector2): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_impulse]. */
        /* gdvirtual */ _apply_central_impulse(impulse: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_impulse]. */
        /* gdvirtual */ _apply_impulse(impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque_impulse]. */
        /* gdvirtual */ _apply_torque_impulse(impulse: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_force]. */
        /* gdvirtual */ _apply_central_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_force]. */
        /* gdvirtual */ _apply_force(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque]. */
        /* gdvirtual */ _apply_torque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_central_force]. */
        /* gdvirtual */ _add_constant_central_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_force]. */
        /* gdvirtual */ _add_constant_force(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_torque]. */
        /* gdvirtual */ _add_constant_torque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_force]. */
        /* gdvirtual */ _set_constant_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_force]. */
        /* gdvirtual */ _get_constant_force(): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_torque]. */
        /* gdvirtual */ _set_constant_torque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_torque]. */
        /* gdvirtual */ _get_constant_torque(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective setter. */
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective getter. */
        /* gdvirtual */ _is_sleeping(): boolean
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_count]. */
        /* gdvirtual */ _get_contact_count(): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_position]. */
        /* gdvirtual */ _get_contact_local_position(contact_idx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_normal]. */
        /* gdvirtual */ _get_contact_local_normal(contact_idx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_shape]. */
        /* gdvirtual */ _get_contact_local_shape(contact_idx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_velocity_at_position]. */
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider]. */
        /* gdvirtual */ _get_contact_collider(contact_idx: int64): RID
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_position]. */
        /* gdvirtual */ _get_contact_collider_position(contact_idx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_id]. */
        /* gdvirtual */ _get_contact_collider_id(contact_idx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_object]. */
        /* gdvirtual */ _get_contact_collider_object(contact_idx: int64): Object
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_shape]. */
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position]. */
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_impulse]. */
        /* gdvirtual */ _get_contact_impulse(contact_idx: int64): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.step] and its respective getter. */
        /* gdvirtual */ _get_step(): float64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.integrate_forces]. */
        /* gdvirtual */ _integrate_forces(): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_space_state]. */
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState2D
    }
    /** Provides direct access to a physics body in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate3d.html  
     */
    class PhysicsDirectBodyState3D extends Object {
        constructor(identifier?: any)
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        get_velocity_at_local_position(local_position: Vector3): Vector3
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        apply_central_impulse(impulse: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        apply_torque_impulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        apply_central_force(force: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        apply_torque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        add_constant_central_force(force: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        add_constant_torque(torque: Vector3): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        set_constant_force(force: Vector3): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get_constant_force(): Vector3
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        set_constant_torque(torque: Vector3): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get_constant_torque(): Vector3
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody3D.contact_monitor].  
         */
        get_contact_count(): int64
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        get_contact_local_position(contact_idx: int64): Vector3
        
        /** Returns the local normal at the contact point. */
        get_contact_local_normal(contact_idx: int64): Vector3
        
        /** Impulse created by the contact. */
        get_contact_impulse(contact_idx: int64): Vector3
        
        /** Returns the local shape index of the collision. */
        get_contact_local_shape(contact_idx: int64): int64
        
        /** Returns the linear velocity vector at the body's contact point. */
        get_contact_local_velocity_at_position(contact_idx: int64): Vector3
        
        /** Returns the collider's [RID]. */
        get_contact_collider(contact_idx: int64): RID
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        get_contact_collider_position(contact_idx: int64): Vector3
        
        /** Returns the collider's object id. */
        get_contact_collider_id(contact_idx: int64): int64
        
        /** Returns the collider object. */
        get_contact_collider_object(contact_idx: int64): Object
        
        /** Returns the collider's shape index. */
        get_contact_collider_shape(contact_idx: int64): int64
        
        /** Returns the linear velocity vector at the collider's contact point. */
        get_contact_collider_velocity_at_position(contact_idx: int64): Vector3
        
        /** Calls the built-in force integration code. */
        integrate_forces(): void
        
        /** Returns the current state of the space, useful for queries. */
        get_space_state(): PhysicsDirectSpaceState3D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        
        /** The inverse of the mass of the body. */
        get inverse_mass(): float64
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        get total_angular_damp(): float64
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        get total_linear_damp(): float64
        
        /** The inverse of the inertia of the body. */
        get inverse_inertia(): Vector3
        
        /** The inverse of the inertia tensor of the body. */
        get inverse_inertia_tensor(): Basis
        
        /** The total gravity vector being currently applied to this body. */
        get total_gravity(): Vector3
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        get center_of_mass(): Vector3
        
        /** The body's center of mass position in the body's local coordinate system. */
        get center_of_mass_local(): Vector3
        get principal_inertia_axes(): Basis
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angular_velocity(): Vector3
        set angular_velocity(value: Vector3)
        
        /** The body's linear velocity in units per second. */
        get linear_velocity(): Vector3
        set linear_velocity(value: Vector3)
        
        /** If `true`, this body is currently sleeping (not active). */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** The body's transformation matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate3dextension.html  
     */
    class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _get_total_gravity(): Vector3
        /* gdvirtual */ _get_total_linear_damp(): float64
        /* gdvirtual */ _get_total_angular_damp(): float64
        /* gdvirtual */ _get_center_of_mass(): Vector3
        /* gdvirtual */ _get_center_of_mass_local(): Vector3
        /* gdvirtual */ _get_principal_inertia_axes(): Basis
        /* gdvirtual */ _get_inverse_mass(): float64
        /* gdvirtual */ _get_inverse_inertia(): Vector3
        /* gdvirtual */ _get_inverse_inertia_tensor(): Basis
        /* gdvirtual */ _set_linear_velocity(velocity: Vector3): void
        /* gdvirtual */ _get_linear_velocity(): Vector3
        /* gdvirtual */ _set_angular_velocity(velocity: Vector3): void
        /* gdvirtual */ _get_angular_velocity(): Vector3
        /* gdvirtual */ _set_transform(transform: Transform3D): void
        /* gdvirtual */ _get_transform(): Transform3D
        /* gdvirtual */ _get_velocity_at_local_position(local_position: Vector3): Vector3
        /* gdvirtual */ _apply_central_impulse(impulse: Vector3): void
        /* gdvirtual */ _apply_impulse(impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _apply_torque_impulse(impulse: Vector3): void
        /* gdvirtual */ _apply_central_force(force: Vector3): void
        /* gdvirtual */ _apply_force(force: Vector3, position: Vector3): void
        /* gdvirtual */ _apply_torque(torque: Vector3): void
        /* gdvirtual */ _add_constant_central_force(force: Vector3): void
        /* gdvirtual */ _add_constant_force(force: Vector3, position: Vector3): void
        /* gdvirtual */ _add_constant_torque(torque: Vector3): void
        /* gdvirtual */ _set_constant_force(force: Vector3): void
        /* gdvirtual */ _get_constant_force(): Vector3
        /* gdvirtual */ _set_constant_torque(torque: Vector3): void
        /* gdvirtual */ _get_constant_torque(): Vector3
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        /* gdvirtual */ _is_sleeping(): boolean
        /* gdvirtual */ _get_contact_count(): int64
        /* gdvirtual */ _get_contact_local_position(contact_idx: int64): Vector3
        /* gdvirtual */ _get_contact_local_normal(contact_idx: int64): Vector3
        /* gdvirtual */ _get_contact_impulse(contact_idx: int64): Vector3
        /* gdvirtual */ _get_contact_local_shape(contact_idx: int64): int64
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: int64): Vector3
        /* gdvirtual */ _get_contact_collider(contact_idx: int64): RID
        /* gdvirtual */ _get_contact_collider_position(contact_idx: int64): Vector3
        /* gdvirtual */ _get_contact_collider_id(contact_idx: int64): int64
        /* gdvirtual */ _get_contact_collider_object(contact_idx: int64): Object
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: int64): int64
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: int64): Vector3
        /* gdvirtual */ _get_step(): float64
        /* gdvirtual */ _integrate_forces(): void
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState3D
    }
    /** Provides direct access to a physics space in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate2d.html  
     */
    class PhysicsDirectSpaceState2D extends Object {
        constructor(identifier?: any)
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters2D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** [ConcavePolygonShape2D]s and [CollisionPolygon2D]s in `Segments` build mode are not solid shapes. Therefore, they will not be detected.  
         */
        intersect_point(parameters: PhysicsPointQueryParameters2D, max_results: int64 = 32): Array
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters2D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector2(0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters2D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersect_ray(parameters: PhysicsRayQueryParameters2D): Dictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersect_shape(parameters: PhysicsShapeQueryParameters2D, max_results: int64 = 32): Array
        
        /** Checks how far a [Shape2D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters2D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape2D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape2D]s that the shape is already colliding with.  
         */
        cast_motion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters2D] object, second one is in the collided shape from the physics space.  
         */
        collide_shape(parameters: PhysicsShapeQueryParameters2D, max_results: int64 = 32): Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. If it collides with more than one shape, the nearest one is selected. If the shape did not intersect anything, then an empty dictionary is returned instead.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector2]. If the object is an [Area2D], the result is `(0, 0)`.  
         *  `normal`: The object's surface normal at the intersection point.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         */
        get_rest_info(parameters: PhysicsShapeQueryParameters2D): Dictionary
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate2dextension.html  
     */
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersect_ray(from: Vector2, to: Vector2, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, result: int64): boolean
        /* gdvirtual */ _intersect_point(position: Vector2, canvas_instance_id: int64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, results: int64, max_results: int64): int64
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, result: int64, max_results: int64): int64
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: int64, closest_unsafe: int64): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, results: int64, max_results: int64, result_count: int64): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: int64): boolean
        is_body_excluded_from_query(body: RID): boolean
    }
    /** Provides direct access to a physics space in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate3d.html  
     */
    class PhysicsDirectSpaceState3D extends Object {
        constructor(identifier?: any)
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters3D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersect_point(parameters: PhysicsPointQueryParameters3D, max_results: int64 = 32): Array
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters3D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters3D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `face_index`: The face index at the intersection point.  
         *      
         *  **Note:** Returns a valid number only if the intersected shape is a [ConcavePolygonShape3D]. Otherwise, `-1` is returned.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersect_ray(parameters: PhysicsRayQueryParameters3D): Dictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        intersect_shape(parameters: PhysicsShapeQueryParameters3D, max_results: int64 = 32): Array
        
        /** Checks how far a [Shape3D] can move without colliding. All the parameters for the query, including the shape, are supplied through a [PhysicsShapeQueryParameters3D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape3D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape3D]s that the shape is already colliding with.  
         */
        cast_motion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters3D] object, second one is in the collided shape from the physics space.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        collide_shape(parameters: PhysicsShapeQueryParameters3D, max_results: int64 = 32): Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector3]. If the object is an [Area3D], the result is `(0, 0, 0)`.  
         *  `normal`: The object's surface normal at the intersection point.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        get_rest_info(parameters: PhysicsShapeQueryParameters3D): Dictionary
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate3dextension.html  
     */
    class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersect_ray(from: Vector3, to: Vector3, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, hit_back_faces: boolean, pick_ray: boolean, result: int64): boolean
        /* gdvirtual */ _intersect_point(position: Vector3, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, results: int64, max_results: int64): int64
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, result_count: int64, max_results: int64): int64
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: int64, closest_unsafe: int64, info: int64): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, results: int64, max_results: int64, result_count: int64): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: float64, collision_mask: int64, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: int64): boolean
        /* gdvirtual */ _get_closest_point_to_object_volume(object: RID, point: Vector3): Vector3
        is_body_excluded_from_query(body: RID): boolean
    }
    /** Holds physics-related properties of a surface, namely its roughness and bounciness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsmaterial.html  
     */
    class PhysicsMaterial extends Resource {
        constructor(identifier?: any)
        /** The body's friction. Values range from `0` (frictionless) to `1` (maximum friction). */
        get friction(): float64
        set friction(value: float64)
        
        /** If `true`, the physics engine will use the friction of the object marked as "rough" when two objects collide. If `false`, the physics engine will use the lowest friction of all colliding objects instead. If `true` for both colliding objects, the physics engine will use the highest friction. */
        get rough(): boolean
        set rough(value: boolean)
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicsBody3D] that preserves all its energy over time, set [member bounce] to `1.0`, the body's linear damp mode to **Replace** (if applicable), its linear damp to `0.0`, its angular damp mode to **Replace** (if applicable), and its angular damp to `0.0`.  
         */
        get bounce(): float64
        set bounce(value: float64)
        
        /** If `true`, subtracts the bounciness from the colliding object's bounciness instead of adding it. */
        get absorbent(): boolean
        set absorbent(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicspointqueryparameters2d.html  
     */
    class PhysicsPointQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** If different from `0`, restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].  
         *  If `0`, restricts the query to the Viewport's default canvas layer.  
         */
        get canvas_instance_id(): int64
        set canvas_instance_id(value: int64)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicspointqueryparameters3d.html  
     */
    class PhysicsPointQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector3
        set position(value: Vector3)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsrayqueryparameters2d.html  
     */
    class PhysicsRayQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters2D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector2, to: Vector2, collision_mask: int64 = -1, exclude: Array = []): PhysicsRayQueryParameters2D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector2
        set from(value: Vector2)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector2
        set to(value: Vector2)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        get hit_from_inside(): boolean
        set hit_from_inside(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsrayqueryparameters3d.html  
     */
    class PhysicsRayQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters3D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector3, to: Vector3, collision_mask: int64 = -1, exclude: Array = []): PhysicsRayQueryParameters3D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector3
        set from(value: Vector3)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector3
        set to(value: Vector3)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes. */
        get hit_from_inside(): boolean
        set hit_from_inside(value: boolean)
        
        /** If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hit_back_faces(): boolean
        set hit_back_faces(value: boolean)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsserver2dextension.html  
     */
    class PhysicsServer2DExtension extends PhysicsServer2D {
        constructor(identifier?: any)
        /** Overridable version of [method PhysicsServer2D.world_boundary_shape_create]. */
        /* gdvirtual */ _world_boundary_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.separation_ray_shape_create]. */
        /* gdvirtual */ _separation_ray_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.segment_shape_create]. */
        /* gdvirtual */ _segment_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.circle_shape_create]. */
        /* gdvirtual */ _circle_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.rectangle_shape_create]. */
        /* gdvirtual */ _rectangle_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.capsule_shape_create]. */
        /* gdvirtual */ _capsule_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.convex_polygon_shape_create]. */
        /* gdvirtual */ _convex_polygon_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.concave_polygon_shape_create]. */
        /* gdvirtual */ _concave_polygon_shape_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.shape_set_data]. */
        /* gdvirtual */ _shape_set_data(shape: RID, data: any): void
        
        /** Should set the custom solver bias for the given [param shape]. It defines how much bodies are forced to separate on contact.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shape_set_custom_solver_bias(shape: RID, bias: float64): void
        
        /** Overridable version of [method PhysicsServer2D.shape_get_type]. */
        /* gdvirtual */ _shape_get_type(shape: RID): PhysicsServer2D.ShapeType
        
        /** Overridable version of [method PhysicsServer2D.shape_get_data]. */
        /* gdvirtual */ _shape_get_data(shape: RID): void
        
        /** Should return the custom solver bias of the given [param shape], which defines how much bodies are forced to separate on contact when this shape is involved.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shape_get_custom_solver_bias(shape: RID): float64
        
        /** Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _shape_collide(shape_A: RID, xform_A: Transform2D, motion_A: Vector2, shape_B: RID, xform_B: Transform2D, motion_B: Vector2, results: int64, result_max: int64, result_count: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_create]. */
        /* gdvirtual */ _space_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.space_set_active]. */
        /* gdvirtual */ _space_set_active(space: RID, active: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.space_is_active]. */
        /* gdvirtual */ _space_is_active(space: RID): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_set_param]. */
        /* gdvirtual */ _space_set_param(space: RID, param: PhysicsServer2D.SpaceParameter, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.space_get_param]. */
        /* gdvirtual */ _space_get_param(space: RID, param: PhysicsServer2D.SpaceParameter): float64
        
        /** Overridable version of [method PhysicsServer2D.space_get_direct_state]. */
        /* gdvirtual */ _space_get_direct_state(space: RID): PhysicsDirectSpaceState2D
        
        /** Used internally to allow the given [param space] to store contact points, up to [param max_contacts]. This is automatically set for the main [World2D]'s space when [member SceneTree.debug_collisions_hint] is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.  
         *  Overridable version of [PhysicsServer2D]'s internal `space_set_debug_contacts` method.  
         */
        /* gdvirtual */ _space_set_debug_contacts(space: RID, max_contacts: int64): void
        
        /** Should return the positions of all contacts that have occurred during the last physics step in the given [param space]. See also [method _space_get_contact_count] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contacts` method.  
         */
        /* gdvirtual */ _space_get_contacts(space: RID): PackedVector2Array
        
        /** Should return how many contacts have occurred during the last physics step in the given [param space]. See also [method _space_get_contacts] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contact_count` method.  
         */
        /* gdvirtual */ _space_get_contact_count(space: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_create]. */
        /* gdvirtual */ _area_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.area_set_space]. */
        /* gdvirtual */ _area_set_space(area: RID, space: RID): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_space]. */
        /* gdvirtual */ _area_get_space(area: RID): RID
        
        /** Overridable version of [method PhysicsServer2D.area_add_shape]. */
        /* gdvirtual */ _area_add_shape(area: RID, shape: RID, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape]. */
        /* gdvirtual */ _area_set_shape(area: RID, shape_idx: int64, shape: RID): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_transform]. */
        /* gdvirtual */ _area_set_shape_transform(area: RID, shape_idx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_disabled]. */
        /* gdvirtual */ _area_set_shape_disabled(area: RID, shape_idx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_count]. */
        /* gdvirtual */ _area_get_shape_count(area: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape]. */
        /* gdvirtual */ _area_get_shape(area: RID, shape_idx: int64): RID
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_transform]. */
        /* gdvirtual */ _area_get_shape_transform(area: RID, shape_idx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_remove_shape]. */
        /* gdvirtual */ _area_remove_shape(area: RID, shape_idx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_clear_shapes]. */
        /* gdvirtual */ _area_clear_shapes(area: RID): void
        
        /** Overridable version of [method PhysicsServer2D.area_attach_object_instance_id]. */
        /* gdvirtual */ _area_attach_object_instance_id(area: RID, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_object_instance_id]. */
        /* gdvirtual */ _area_get_object_instance_id(area: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_attach_canvas_instance_id]. */
        /* gdvirtual */ _area_attach_canvas_instance_id(area: RID, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_canvas_instance_id]. */
        /* gdvirtual */ _area_get_canvas_instance_id(area: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_param]. */
        /* gdvirtual */ _area_set_param(area: RID, param: PhysicsServer2D.AreaParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_transform]. */
        /* gdvirtual */ _area_set_transform(area: RID, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_param]. */
        /* gdvirtual */ _area_get_param(area: RID, param: PhysicsServer2D.AreaParameter): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_transform]. */
        /* gdvirtual */ _area_get_transform(area: RID): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_layer]. */
        /* gdvirtual */ _area_set_collision_layer(area: RID, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_layer]. */
        /* gdvirtual */ _area_get_collision_layer(area: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_mask]. */
        /* gdvirtual */ _area_set_collision_mask(area: RID, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_mask]. */
        /* gdvirtual */ _area_get_collision_mask(area: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitorable]. */
        /* gdvirtual */ _area_set_monitorable(area: RID, monitorable: boolean): void
        
        /** If set to `true`, allows the area with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `area_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _area_set_pickable(area: RID, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitor_callback]. */
        /* gdvirtual */ _area_set_monitor_callback(area: RID, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_area_monitor_callback]. */
        /* gdvirtual */ _area_set_area_monitor_callback(area: RID, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_create]. */
        /* gdvirtual */ _body_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.body_set_space]. */
        /* gdvirtual */ _body_set_space(body: RID, space: RID): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_space]. */
        /* gdvirtual */ _body_get_space(body: RID): RID
        
        /** Overridable version of [method PhysicsServer2D.body_set_mode]. */
        /* gdvirtual */ _body_set_mode(body: RID, mode: PhysicsServer2D.BodyMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_mode]. */
        /* gdvirtual */ _body_get_mode(body: RID): PhysicsServer2D.BodyMode
        
        /** Overridable version of [method PhysicsServer2D.body_add_shape]. */
        /* gdvirtual */ _body_add_shape(body: RID, shape: RID, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape]. */
        /* gdvirtual */ _body_set_shape(body: RID, shape_idx: int64, shape: RID): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_transform]. */
        /* gdvirtual */ _body_set_shape_transform(body: RID, shape_idx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_count]. */
        /* gdvirtual */ _body_get_shape_count(body: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape]. */
        /* gdvirtual */ _body_get_shape(body: RID, shape_idx: int64): RID
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_transform]. */
        /* gdvirtual */ _body_get_shape_transform(body: RID, shape_idx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_disabled]. */
        /* gdvirtual */ _body_set_shape_disabled(body: RID, shape_idx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_as_one_way_collision]. */
        /* gdvirtual */ _body_set_shape_as_one_way_collision(body: RID, shape_idx: int64, enable: boolean, margin: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_shape]. */
        /* gdvirtual */ _body_remove_shape(body: RID, shape_idx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_clear_shapes]. */
        /* gdvirtual */ _body_clear_shapes(body: RID): void
        
        /** Overridable version of [method PhysicsServer2D.body_attach_object_instance_id]. */
        /* gdvirtual */ _body_attach_object_instance_id(body: RID, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_object_instance_id]. */
        /* gdvirtual */ _body_get_object_instance_id(body: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.body_attach_canvas_instance_id]. */
        /* gdvirtual */ _body_attach_canvas_instance_id(body: RID, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_canvas_instance_id]. */
        /* gdvirtual */ _body_get_canvas_instance_id(body: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_continuous_collision_detection_mode]. */
        /* gdvirtual */ _body_set_continuous_collision_detection_mode(body: RID, mode: PhysicsServer2D.CCDMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_continuous_collision_detection_mode]. */
        /* gdvirtual */ _body_get_continuous_collision_detection_mode(body: RID): PhysicsServer2D.CCDMode
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_layer]. */
        /* gdvirtual */ _body_set_collision_layer(body: RID, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_layer]. */
        /* gdvirtual */ _body_get_collision_layer(body: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_mask]. */
        /* gdvirtual */ _body_set_collision_mask(body: RID, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_mask]. */
        /* gdvirtual */ _body_get_collision_mask(body: RID): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_priority]. */
        /* gdvirtual */ _body_set_collision_priority(body: RID, priority: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_priority]. */
        /* gdvirtual */ _body_get_collision_priority(body: RID): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_param]. */
        /* gdvirtual */ _body_set_param(body: RID, param: PhysicsServer2D.BodyParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_param]. */
        /* gdvirtual */ _body_get_param(body: RID, param: PhysicsServer2D.BodyParameter): void
        
        /** Overridable version of [method PhysicsServer2D.body_reset_mass_properties]. */
        /* gdvirtual */ _body_reset_mass_properties(body: RID): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_state]. */
        /* gdvirtual */ _body_set_state(body: RID, state: PhysicsServer2D.BodyState, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_state]. */
        /* gdvirtual */ _body_get_state(body: RID, state: PhysicsServer2D.BodyState): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_impulse]. */
        /* gdvirtual */ _body_apply_central_impulse(body: RID, impulse: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque_impulse]. */
        /* gdvirtual */ _body_apply_torque_impulse(body: RID, impulse: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_impulse]. */
        /* gdvirtual */ _body_apply_impulse(body: RID, impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_force]. */
        /* gdvirtual */ _body_apply_central_force(body: RID, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_force]. */
        /* gdvirtual */ _body_apply_force(body: RID, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque]. */
        /* gdvirtual */ _body_apply_torque(body: RID, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_central_force]. */
        /* gdvirtual */ _body_add_constant_central_force(body: RID, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_force]. */
        /* gdvirtual */ _body_add_constant_force(body: RID, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_torque]. */
        /* gdvirtual */ _body_add_constant_torque(body: RID, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_force]. */
        /* gdvirtual */ _body_set_constant_force(body: RID, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_force]. */
        /* gdvirtual */ _body_get_constant_force(body: RID): Vector2
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_torque]. */
        /* gdvirtual */ _body_set_constant_torque(body: RID, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_torque]. */
        /* gdvirtual */ _body_get_constant_torque(body: RID): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_axis_velocity]. */
        /* gdvirtual */ _body_set_axis_velocity(body: RID, axis_velocity: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_collision_exception]. */
        /* gdvirtual */ _body_add_collision_exception(body: RID, excepted_body: RID): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_collision_exception]. */
        /* gdvirtual */ _body_remove_collision_exception(body: RID, excepted_body: RID): void
        
        /** Returns the [RID]s of all bodies added as collision exceptions for the given [param body]. See also [method _body_add_collision_exception] and [method _body_remove_collision_exception].  
         *  Overridable version of [PhysicsServer2D]'s internal `body_get_collision_exceptions` method. Corresponds to [method PhysicsBody2D.get_collision_exceptions].  
         */
        /* gdvirtual */ _body_get_collision_exceptions(body: RID): Array
        
        /** Overridable version of [method PhysicsServer2D.body_set_max_contacts_reported]. */
        /* gdvirtual */ _body_set_max_contacts_reported(body: RID, amount: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_max_contacts_reported]. */
        /* gdvirtual */ _body_get_max_contacts_reported(body: RID): int64
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_set_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _body_set_contacts_reported_depth_threshold(body: RID, threshold: float64): void
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_get_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _body_get_contacts_reported_depth_threshold(body: RID): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_omit_force_integration]. */
        /* gdvirtual */ _body_set_omit_force_integration(body: RID, enable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_is_omitting_force_integration]. */
        /* gdvirtual */ _body_is_omitting_force_integration(body: RID): boolean
        
        /** Assigns the [param body] to call the given [param callable] during the synchronization phase of the loop, before [method _step] is called. See also [method _sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `body_set_state_sync_callback` method.  
         */
        /* gdvirtual */ _body_set_state_sync_callback(body: RID, callable: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_force_integration_callback]. */
        /* gdvirtual */ _body_set_force_integration_callback(body: RID, callable: Callable, userdata: any): void
        
        /** Given a [param body], a [param shape], and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _body_collide_shape(body: RID, body_shape: int64, shape: RID, shape_xform: Transform2D, motion: Vector2, results: int64, result_max: int64, result_count: int64): boolean
        
        /** If set to `true`, allows the body with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `body_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _body_set_pickable(body: RID, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_direct_state]. */
        /* gdvirtual */ _body_get_direct_state(body: RID): PhysicsDirectBodyState2D
        
        /** Overridable version of [method PhysicsServer2D.body_test_motion]. Unlike the exposed implementation, this method does not receive all of the arguments inside a [PhysicsTestMotionParameters2D]. */
        /* gdvirtual */ _body_test_motion(body: RID, from: Transform2D, motion: Vector2, margin: float64, collide_separation_ray: boolean, recovery_as_collision: boolean, result: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_create]. */
        /* gdvirtual */ _joint_create(): RID
        
        /** Overridable version of [method PhysicsServer2D.joint_clear]. */
        /* gdvirtual */ _joint_clear(joint: RID): void
        
        /** Overridable version of [method PhysicsServer2D.joint_set_param]. */
        /* gdvirtual */ _joint_set_param(joint: RID, param: PhysicsServer2D.JointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.joint_get_param]. */
        /* gdvirtual */ _joint_get_param(joint: RID, param: PhysicsServer2D.JointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_disable_collisions_between_bodies]. */
        /* gdvirtual */ _joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.joint_is_disabled_collisions_between_bodies]. */
        /* gdvirtual */ _joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_make_pin]. */
        /* gdvirtual */ _joint_make_pin(joint: RID, anchor: Vector2, body_a: RID, body_b: RID): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_groove]. */
        /* gdvirtual */ _joint_make_groove(joint: RID, a_groove1: Vector2, a_groove2: Vector2, b_anchor: Vector2, body_a: RID, body_b: RID): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_damped_spring]. */
        /* gdvirtual */ _joint_make_damped_spring(joint: RID, anchor_a: Vector2, anchor_b: Vector2, body_a: RID, body_b: RID): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_flag]. */
        /* gdvirtual */ _pin_joint_set_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_flag]. */
        /* gdvirtual */ _pin_joint_get_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag): boolean
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_param]. */
        /* gdvirtual */ _pin_joint_set_param(joint: RID, param: PhysicsServer2D.PinJointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_param]. */
        /* gdvirtual */ _pin_joint_get_param(joint: RID, param: PhysicsServer2D.PinJointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_set_param]. */
        /* gdvirtual */ _damped_spring_joint_set_param(joint: RID, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_get_param]. */
        /* gdvirtual */ _damped_spring_joint_get_param(joint: RID, param: PhysicsServer2D.DampedSpringParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_get_type]. */
        /* gdvirtual */ _joint_get_type(joint: RID): PhysicsServer2D.JointType
        
        /** Overridable version of [method PhysicsServer2D.free_rid]. */
        /* gdvirtual */ _free_rid(rid: RID): void
        
        /** Overridable version of [method PhysicsServer2D.set_active]. */
        /* gdvirtual */ _set_active(active: boolean): void
        
        /** Called when the main loop is initialized and creates a new instance of this physics server. See also [method MainLoop._initialize] and [method _finish].  
         *  Overridable version of [PhysicsServer2D]'s internal `init` method.  
         */
        /* gdvirtual */ _init(): void
        
        /** Called every physics step to process the physics simulation. [param step] is the time elapsed since the last physics step, in seconds. It is usually the same as [method Node.get_physics_process_delta_time].  
         *  Overridable version of [PhysicsServer2D]'s internal [code skip-lint]step` method.  
         */
        /* gdvirtual */ _step(step: float64): void
        
        /** Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also [method _end_sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `sync` method.  
         */
        /* gdvirtual */ _sync(): void
        
        /** Called every physics step before [method _step] to process all remaining queries.  
         *  Overridable version of [PhysicsServer2D]'s internal `flush_queries` method.  
         */
        /* gdvirtual */ _flush_queries(): void
        
        /** Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also [method _sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `end_sync` method.  
         */
        /* gdvirtual */ _end_sync(): void
        
        /** Called when the main loop finalizes to shut down the physics server. See also [method MainLoop._finalize] and [method _init].  
         *  Overridable version of [PhysicsServer2D]'s internal `finish` method.  
         */
        /* gdvirtual */ _finish(): void
        
        /** Overridable method that should return `true` when the physics server is processing queries. See also [method _flush_queries].  
         *  Overridable version of [PhysicsServer2D]'s internal `is_flushing_queries` method.  
         */
        /* gdvirtual */ _is_flushing_queries(): boolean
        
        /** Overridable version of [method PhysicsServer2D.get_process_info]. */
        /* gdvirtual */ _get_process_info(process_info: PhysicsServer2D.ProcessInfo): int64
        
        /** Returns `true` if the body with the given [RID] is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
        body_test_motion_is_excluding_body(body: RID): boolean
        
        /** Returns `true` if the object with the given instance ID is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
        body_test_motion_is_excluding_object(object: int64): boolean
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsserver3dextension.html  
     */
    class PhysicsServer3DExtension extends PhysicsServer3D {
        constructor(identifier?: any)
        /* gdvirtual */ _world_boundary_shape_create(): RID
        /* gdvirtual */ _separation_ray_shape_create(): RID
        /* gdvirtual */ _sphere_shape_create(): RID
        /* gdvirtual */ _box_shape_create(): RID
        /* gdvirtual */ _capsule_shape_create(): RID
        /* gdvirtual */ _cylinder_shape_create(): RID
        /* gdvirtual */ _convex_polygon_shape_create(): RID
        /* gdvirtual */ _concave_polygon_shape_create(): RID
        /* gdvirtual */ _heightmap_shape_create(): RID
        /* gdvirtual */ _custom_shape_create(): RID
        /* gdvirtual */ _shape_set_data(shape: RID, data: any): void
        /* gdvirtual */ _shape_set_custom_solver_bias(shape: RID, bias: float64): void
        /* gdvirtual */ _shape_set_margin(shape: RID, margin: float64): void
        /* gdvirtual */ _shape_get_margin(shape: RID): float64
        /* gdvirtual */ _shape_get_type(shape: RID): PhysicsServer3D.ShapeType
        /* gdvirtual */ _shape_get_data(shape: RID): void
        /* gdvirtual */ _shape_get_custom_solver_bias(shape: RID): float64
        /* gdvirtual */ _space_create(): RID
        /* gdvirtual */ _space_set_active(space: RID, active: boolean): void
        /* gdvirtual */ _space_is_active(space: RID): boolean
        /* gdvirtual */ _space_set_param(space: RID, param: PhysicsServer3D.SpaceParameter, value: float64): void
        /* gdvirtual */ _space_get_param(space: RID, param: PhysicsServer3D.SpaceParameter): float64
        /* gdvirtual */ _space_get_direct_state(space: RID): PhysicsDirectSpaceState3D
        /* gdvirtual */ _space_set_debug_contacts(space: RID, max_contacts: int64): void
        /* gdvirtual */ _space_get_contacts(space: RID): PackedVector3Array
        /* gdvirtual */ _space_get_contact_count(space: RID): int64
        /* gdvirtual */ _area_create(): RID
        /* gdvirtual */ _area_set_space(area: RID, space: RID): void
        /* gdvirtual */ _area_get_space(area: RID): RID
        /* gdvirtual */ _area_add_shape(area: RID, shape: RID, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _area_set_shape(area: RID, shape_idx: int64, shape: RID): void
        /* gdvirtual */ _area_set_shape_transform(area: RID, shape_idx: int64, transform: Transform3D): void
        /* gdvirtual */ _area_set_shape_disabled(area: RID, shape_idx: int64, disabled: boolean): void
        /* gdvirtual */ _area_get_shape_count(area: RID): int64
        /* gdvirtual */ _area_get_shape(area: RID, shape_idx: int64): RID
        /* gdvirtual */ _area_get_shape_transform(area: RID, shape_idx: int64): Transform3D
        /* gdvirtual */ _area_remove_shape(area: RID, shape_idx: int64): void
        /* gdvirtual */ _area_clear_shapes(area: RID): void
        /* gdvirtual */ _area_attach_object_instance_id(area: RID, id: int64): void
        /* gdvirtual */ _area_get_object_instance_id(area: RID): int64
        /* gdvirtual */ _area_set_param(area: RID, param: PhysicsServer3D.AreaParameter, value: any): void
        /* gdvirtual */ _area_set_transform(area: RID, transform: Transform3D): void
        /* gdvirtual */ _area_get_param(area: RID, param: PhysicsServer3D.AreaParameter): void
        /* gdvirtual */ _area_get_transform(area: RID): Transform3D
        /* gdvirtual */ _area_set_collision_layer(area: RID, layer: int64): void
        /* gdvirtual */ _area_get_collision_layer(area: RID): int64
        /* gdvirtual */ _area_set_collision_mask(area: RID, mask: int64): void
        /* gdvirtual */ _area_get_collision_mask(area: RID): int64
        /* gdvirtual */ _area_set_monitorable(area: RID, monitorable: boolean): void
        /* gdvirtual */ _area_set_ray_pickable(area: RID, enable: boolean): void
        /* gdvirtual */ _area_set_monitor_callback(area: RID, callback: Callable): void
        /* gdvirtual */ _area_set_area_monitor_callback(area: RID, callback: Callable): void
        /* gdvirtual */ _body_create(): RID
        /* gdvirtual */ _body_set_space(body: RID, space: RID): void
        /* gdvirtual */ _body_get_space(body: RID): RID
        /* gdvirtual */ _body_set_mode(body: RID, mode: PhysicsServer3D.BodyMode): void
        /* gdvirtual */ _body_get_mode(body: RID): PhysicsServer3D.BodyMode
        /* gdvirtual */ _body_add_shape(body: RID, shape: RID, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _body_set_shape(body: RID, shape_idx: int64, shape: RID): void
        /* gdvirtual */ _body_set_shape_transform(body: RID, shape_idx: int64, transform: Transform3D): void
        /* gdvirtual */ _body_set_shape_disabled(body: RID, shape_idx: int64, disabled: boolean): void
        /* gdvirtual */ _body_get_shape_count(body: RID): int64
        /* gdvirtual */ _body_get_shape(body: RID, shape_idx: int64): RID
        /* gdvirtual */ _body_get_shape_transform(body: RID, shape_idx: int64): Transform3D
        /* gdvirtual */ _body_remove_shape(body: RID, shape_idx: int64): void
        /* gdvirtual */ _body_clear_shapes(body: RID): void
        /* gdvirtual */ _body_attach_object_instance_id(body: RID, id: int64): void
        /* gdvirtual */ _body_get_object_instance_id(body: RID): int64
        /* gdvirtual */ _body_set_enable_continuous_collision_detection(body: RID, enable: boolean): void
        /* gdvirtual */ _body_is_continuous_collision_detection_enabled(body: RID): boolean
        /* gdvirtual */ _body_set_collision_layer(body: RID, layer: int64): void
        /* gdvirtual */ _body_get_collision_layer(body: RID): int64
        /* gdvirtual */ _body_set_collision_mask(body: RID, mask: int64): void
        /* gdvirtual */ _body_get_collision_mask(body: RID): int64
        /* gdvirtual */ _body_set_collision_priority(body: RID, priority: float64): void
        /* gdvirtual */ _body_get_collision_priority(body: RID): float64
        /* gdvirtual */ _body_set_user_flags(body: RID, flags: int64): void
        /* gdvirtual */ _body_get_user_flags(body: RID): int64
        /* gdvirtual */ _body_set_param(body: RID, param: PhysicsServer3D.BodyParameter, value: any): void
        /* gdvirtual */ _body_get_param(body: RID, param: PhysicsServer3D.BodyParameter): void
        /* gdvirtual */ _body_reset_mass_properties(body: RID): void
        /* gdvirtual */ _body_set_state(body: RID, state: PhysicsServer3D.BodyState, value: any): void
        /* gdvirtual */ _body_get_state(body: RID, state: PhysicsServer3D.BodyState): void
        /* gdvirtual */ _body_apply_central_impulse(body: RID, impulse: Vector3): void
        /* gdvirtual */ _body_apply_impulse(body: RID, impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _body_apply_torque_impulse(body: RID, impulse: Vector3): void
        /* gdvirtual */ _body_apply_central_force(body: RID, force: Vector3): void
        /* gdvirtual */ _body_apply_force(body: RID, force: Vector3, position: Vector3): void
        /* gdvirtual */ _body_apply_torque(body: RID, torque: Vector3): void
        /* gdvirtual */ _body_add_constant_central_force(body: RID, force: Vector3): void
        /* gdvirtual */ _body_add_constant_force(body: RID, force: Vector3, position: Vector3): void
        /* gdvirtual */ _body_add_constant_torque(body: RID, torque: Vector3): void
        /* gdvirtual */ _body_set_constant_force(body: RID, force: Vector3): void
        /* gdvirtual */ _body_get_constant_force(body: RID): Vector3
        /* gdvirtual */ _body_set_constant_torque(body: RID, torque: Vector3): void
        /* gdvirtual */ _body_get_constant_torque(body: RID): Vector3
        /* gdvirtual */ _body_set_axis_velocity(body: RID, axis_velocity: Vector3): void
        /* gdvirtual */ _body_set_axis_lock(body: RID, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        /* gdvirtual */ _body_is_axis_locked(body: RID, axis: PhysicsServer3D.BodyAxis): boolean
        /* gdvirtual */ _body_add_collision_exception(body: RID, excepted_body: RID): void
        /* gdvirtual */ _body_remove_collision_exception(body: RID, excepted_body: RID): void
        /* gdvirtual */ _body_get_collision_exceptions(body: RID): Array
        /* gdvirtual */ _body_set_max_contacts_reported(body: RID, amount: int64): void
        /* gdvirtual */ _body_get_max_contacts_reported(body: RID): int64
        /* gdvirtual */ _body_set_contacts_reported_depth_threshold(body: RID, threshold: float64): void
        /* gdvirtual */ _body_get_contacts_reported_depth_threshold(body: RID): float64
        /* gdvirtual */ _body_set_omit_force_integration(body: RID, enable: boolean): void
        /* gdvirtual */ _body_is_omitting_force_integration(body: RID): boolean
        /* gdvirtual */ _body_set_state_sync_callback(body: RID, callable: Callable): void
        /* gdvirtual */ _body_set_force_integration_callback(body: RID, callable: Callable, userdata: any): void
        /* gdvirtual */ _body_set_ray_pickable(body: RID, enable: boolean): void
        /* gdvirtual */ _body_test_motion(body: RID, from: Transform3D, motion: Vector3, margin: float64, max_collisions: int64, collide_separation_ray: boolean, recovery_as_collision: boolean, result: int64): boolean
        /* gdvirtual */ _body_get_direct_state(body: RID): PhysicsDirectBodyState3D
        /* gdvirtual */ _soft_body_create(): RID
        /* gdvirtual */ _soft_body_update_rendering_server(body: RID, rendering_server_handler: PhysicsServer3DRenderingServerHandler): void
        /* gdvirtual */ _soft_body_set_space(body: RID, space: RID): void
        /* gdvirtual */ _soft_body_get_space(body: RID): RID
        /* gdvirtual */ _soft_body_set_ray_pickable(body: RID, enable: boolean): void
        /* gdvirtual */ _soft_body_set_collision_layer(body: RID, layer: int64): void
        /* gdvirtual */ _soft_body_get_collision_layer(body: RID): int64
        /* gdvirtual */ _soft_body_set_collision_mask(body: RID, mask: int64): void
        /* gdvirtual */ _soft_body_get_collision_mask(body: RID): int64
        /* gdvirtual */ _soft_body_add_collision_exception(body: RID, body_b: RID): void
        /* gdvirtual */ _soft_body_remove_collision_exception(body: RID, body_b: RID): void
        /* gdvirtual */ _soft_body_get_collision_exceptions(body: RID): Array
        /* gdvirtual */ _soft_body_set_state(body: RID, state: PhysicsServer3D.BodyState, variant: any): void
        /* gdvirtual */ _soft_body_get_state(body: RID, state: PhysicsServer3D.BodyState): void
        /* gdvirtual */ _soft_body_set_transform(body: RID, transform: Transform3D): void
        /* gdvirtual */ _soft_body_set_simulation_precision(body: RID, simulation_precision: int64): void
        /* gdvirtual */ _soft_body_get_simulation_precision(body: RID): int64
        /* gdvirtual */ _soft_body_set_total_mass(body: RID, total_mass: float64): void
        /* gdvirtual */ _soft_body_get_total_mass(body: RID): float64
        /* gdvirtual */ _soft_body_set_linear_stiffness(body: RID, linear_stiffness: float64): void
        /* gdvirtual */ _soft_body_get_linear_stiffness(body: RID): float64
        /* gdvirtual */ _soft_body_set_pressure_coefficient(body: RID, pressure_coefficient: float64): void
        /* gdvirtual */ _soft_body_get_pressure_coefficient(body: RID): float64
        /* gdvirtual */ _soft_body_set_damping_coefficient(body: RID, damping_coefficient: float64): void
        /* gdvirtual */ _soft_body_get_damping_coefficient(body: RID): float64
        /* gdvirtual */ _soft_body_set_drag_coefficient(body: RID, drag_coefficient: float64): void
        /* gdvirtual */ _soft_body_get_drag_coefficient(body: RID): float64
        /* gdvirtual */ _soft_body_set_mesh(body: RID, mesh: RID): void
        /* gdvirtual */ _soft_body_get_bounds(body: RID): AABB
        /* gdvirtual */ _soft_body_move_point(body: RID, point_index: int64, global_position: Vector3): void
        /* gdvirtual */ _soft_body_get_point_global_position(body: RID, point_index: int64): Vector3
        /* gdvirtual */ _soft_body_remove_all_pinned_points(body: RID): void
        /* gdvirtual */ _soft_body_pin_point(body: RID, point_index: int64, pin: boolean): void
        /* gdvirtual */ _soft_body_is_point_pinned(body: RID, point_index: int64): boolean
        /* gdvirtual */ _joint_create(): RID
        /* gdvirtual */ _joint_clear(joint: RID): void
        /* gdvirtual */ _joint_make_pin(joint: RID, body_A: RID, local_A: Vector3, body_B: RID, local_B: Vector3): void
        /* gdvirtual */ _pin_joint_set_param(joint: RID, param: PhysicsServer3D.PinJointParam, value: float64): void
        /* gdvirtual */ _pin_joint_get_param(joint: RID, param: PhysicsServer3D.PinJointParam): float64
        /* gdvirtual */ _pin_joint_set_local_a(joint: RID, local_A: Vector3): void
        /* gdvirtual */ _pin_joint_get_local_a(joint: RID): Vector3
        /* gdvirtual */ _pin_joint_set_local_b(joint: RID, local_B: Vector3): void
        /* gdvirtual */ _pin_joint_get_local_b(joint: RID): Vector3
        /* gdvirtual */ _joint_make_hinge(joint: RID, body_A: RID, hinge_A: Transform3D, body_B: RID, hinge_B: Transform3D): void
        /* gdvirtual */ _joint_make_hinge_simple(joint: RID, body_A: RID, pivot_A: Vector3, axis_A: Vector3, body_B: RID, pivot_B: Vector3, axis_B: Vector3): void
        /* gdvirtual */ _hinge_joint_set_param(joint: RID, param: PhysicsServer3D.HingeJointParam, value: float64): void
        /* gdvirtual */ _hinge_joint_get_param(joint: RID, param: PhysicsServer3D.HingeJointParam): float64
        /* gdvirtual */ _hinge_joint_set_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        /* gdvirtual */ _hinge_joint_get_flag(joint: RID, flag: PhysicsServer3D.HingeJointFlag): boolean
        /* gdvirtual */ _joint_make_slider(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /* gdvirtual */ _slider_joint_set_param(joint: RID, param: PhysicsServer3D.SliderJointParam, value: float64): void
        /* gdvirtual */ _slider_joint_get_param(joint: RID, param: PhysicsServer3D.SliderJointParam): float64
        /* gdvirtual */ _joint_make_cone_twist(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /* gdvirtual */ _cone_twist_joint_set_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam, value: float64): void
        /* gdvirtual */ _cone_twist_joint_get_param(joint: RID, param: PhysicsServer3D.ConeTwistJointParam): float64
        /* gdvirtual */ _joint_make_generic_6dof(joint: RID, body_A: RID, local_ref_A: Transform3D, body_B: RID, local_ref_B: Transform3D): void
        /* gdvirtual */ _generic_6dof_joint_set_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam, value: float64): void
        /* gdvirtual */ _generic_6dof_joint_get_param(joint: RID, axis: Vector3.Axis, param: PhysicsServer3D.G6DOFJointAxisParam): float64
        /* gdvirtual */ _generic_6dof_joint_set_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag, enable: boolean): void
        /* gdvirtual */ _generic_6dof_joint_get_flag(joint: RID, axis: Vector3.Axis, flag: PhysicsServer3D.G6DOFJointAxisFlag): boolean
        /* gdvirtual */ _joint_get_type(joint: RID): PhysicsServer3D.JointType
        /* gdvirtual */ _joint_set_solver_priority(joint: RID, priority: int64): void
        /* gdvirtual */ _joint_get_solver_priority(joint: RID): int64
        /* gdvirtual */ _joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        /* gdvirtual */ _joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        /* gdvirtual */ _free_rid(rid: RID): void
        /* gdvirtual */ _set_active(active: boolean): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _step(step: float64): void
        /* gdvirtual */ _sync(): void
        /* gdvirtual */ _flush_queries(): void
        /* gdvirtual */ _end_sync(): void
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _is_flushing_queries(): boolean
        /* gdvirtual */ _get_process_info(process_info: PhysicsServer3D.ProcessInfo): int64
        body_test_motion_is_excluding_body(body: RID): boolean
        body_test_motion_is_excluding_object(object: int64): boolean
    }
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsserver3drenderingserverhandler.html  
     */
    class PhysicsServer3DRenderingServerHandler extends Object {
        constructor(identifier?: any)
        /** Called by the [PhysicsServer3D] to set the position for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param vertex] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _set_vertex(vertex_id: int64, vertex: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param normal] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _set_normal(vertex_id: int64, normal: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the bounding box for the [SoftBody3D]. */
        /* gdvirtual */ _set_aabb(aabb: AABB): void
        
        /** Sets the position for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        set_vertex(vertex_id: int64, vertex: Vector3): void
        
        /** Sets the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        set_normal(vertex_id: int64, normal: Vector3): void
        
        /** Sets the bounding box for the [SoftBody3D]. */
        set_aabb(aabb: AABB): void
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsshapequeryparameters2d.html  
     */
    class PhysicsShapeQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** The [Shape2D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        get shape_rid(): RID
        set shape_rid(value: RID)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsshapequeryparameters3d.html  
     */
    class PhysicsShapeQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get exclude(): Array
        set exclude(value: Array)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** The [Shape3D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): Shape3D
        set shape(value: Shape3D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        get shape_rid(): RID
        set shape_rid(value: RID)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
    }
    /** Provides parameters for [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionparameters2d.html  
     */
    class PhysicsTestMotionParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node2D.global_transform] for the current body's transform. */
        get from(): Transform2D
        set from(value: Transform2D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        
        /** If set to `true`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collide_separation_ray(): boolean
        set collide_separation_ray(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get exclude_bodies(): Array
        set exclude_bodies(value: Array)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get exclude_objects(): Array
        set exclude_objects(value: Array)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        get recovery_as_collision(): boolean
        set recovery_as_collision(value: boolean)
    }
    /** Provides parameters for [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionparameters3d.html  
     */
    class PhysicsTestMotionParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node3D.global_transform] for the current body's transform. */
        get from(): Transform3D
        set from(value: Transform3D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector3
        set motion(value: Vector3)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        
        /** Maximum number of returned collisions, between `1` and `32`. Always returns the deepest detected collisions. */
        get max_collisions(): int64
        set max_collisions(value: int64)
        
        /** If set to `true`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collide_separation_ray(): boolean
        set collide_separation_ray(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get exclude_bodies(): Array
        set exclude_bodies(value: Array)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get exclude_objects(): Array
        set exclude_objects(value: Array)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        get recovery_as_collision(): boolean
        set recovery_as_collision(value: boolean)
    }
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionresult2d.html  
     */
    class PhysicsTestMotionResult2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector2
        
        /** Returns the point of collision in global coordinates, if a collision occurred. */
        get_collision_point(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision, if a collision occurred. */
        get_collision_normal(): Vector2
        
        /** Returns the colliding body's velocity, if a collision occurred. */
        get_collider_velocity(): Vector2
        
        /** Returns the unique instance ID of the colliding body's attached [Object], if a collision occurred. See [method Object.get_instance_id]. */
        get_collider_id(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D], if a collision occurred. */
        get_collider_rid(): RID
        
        /** Returns the colliding body's attached [Object], if a collision occurred. */
        get_collider(): Object
        
        /** Returns the colliding body's shape index, if a collision occurred. See [CollisionObject2D]. */
        get_collider_shape(): int64
        
        /** Returns the moving object's colliding shape, if a collision occurred. */
        get_collision_local_shape(): int64
        
        /** Returns the length of overlap along the collision normal, if a collision occurred. */
        get_collision_depth(): float64
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        get_collision_safe_fraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        get_collision_unsafe_fraction(): float64
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionresult3d.html  
     */
    class PhysicsTestMotionResult3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        get_collision_safe_fraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        get_collision_unsafe_fraction(): float64
        
        /** Returns the number of detected collisions. */
        get_collision_count(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_point(collision_index: int64 = 0): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_normal(collision_index: int64 = 0): Vector3
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider_velocity(collision_index: int64 = 0): Vector3
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. See [method Object.get_instance_id]. */
        get_collider_id(collision_index: int64 = 0): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider_rid(collision_index: int64 = 0): RID
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider(collision_index: int64 = 0): Object
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [CollisionObject3D]. */
        get_collider_shape(collision_index: int64 = 0): int64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_local_shape(collision_index: int64 = 0): int64
        
        /** Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_depth(collision_index: int64 = 0): float64
    }
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pinjoint2d.html  
     */
    class PinJoint2D extends Joint2D {
        constructor(identifier?: any)
        /** The higher this value, the more the bond to the pinned partner can flex. */
        get softness(): float64
        set softness(value: float64)
        
        /** If `true`, the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
        get angular_limit_enabled(): boolean
        set angular_limit_enabled(value: boolean)
        
        /** The minimum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angular_limit_lower(): float64
        set angular_limit_lower(value: float64)
        
        /** The maximum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angular_limit_upper(): float64
        set angular_limit_upper(value: float64)
        
        /** When activated, a motor turns the pin. */
        get motor_enabled(): boolean
        set motor_enabled(value: boolean)
        
        /** Target speed for the motor. In radians per second. */
        get motor_target_velocity(): float64
        set motor_target_velocity(value: float64)
    }
    namespace PinJoint3D {
        enum Param {
            /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
            PARAM_BIAS = 0,
            
            /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
            PARAM_DAMPING = 1,
            
            /** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
            PARAM_IMPULSE_CLAMP = 2,
        }
    }
    /** A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pinjoint3d.html  
     */
    class PinJoint3D extends Joint3D {
        constructor(identifier?: any)
    }
    /** A [Cubemap] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdercubemap.html  
     */
    class PlaceholderCubemap extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** A [CubemapArray] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdercubemaparray.html  
     */
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** Placeholder class for a material.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdermaterial.html  
     */
    class PlaceholderMaterial extends Material {
        constructor(identifier?: any)
    }
    /** Placeholder class for a mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdermesh.html  
     */
    class PlaceholderMesh extends Mesh {
        constructor(identifier?: any)
        /** The smallest [AABB] enclosing this mesh in local space. */
        get aabb(): AABB
        set aabb(value: AABB)
    }
    /** Placeholder class for a 2-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture2d.html  
     */
    class PlaceholderTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture2darray.html  
     */
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** Placeholder class for a 3-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture3d.html  
     */
    class PlaceholderTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector3i
        set size(value: Vector3i)
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexturelayered.html  
     */
    class PlaceholderTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** The size of each texture layer (in pixels). */
        get size(): Vector2i
        set size(value: Vector2i)
        
        /** The number of layers in the texture array. */
        get layers(): int64
        set layers(value: int64)
    }
    namespace PlaneMesh {
        enum Orientation {
            /** [PlaneMesh] will face the positive X-axis. */
            FACE_X = 0,
            
            /** [PlaneMesh] will face the positive Y-axis. This matches the behavior of the [PlaneMesh] in Godot 3.x. */
            FACE_Y = 1,
            
            /** [PlaneMesh] will face the positive Z-axis. This matches the behavior of the QuadMesh in Godot 3.x. */
            FACE_Z = 2,
        }
    }
    /** Class representing a planar [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_planemesh.html  
     */
    class PlaneMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Size of the generated plane. */
        get size(): Vector2
        set size(value: Vector2)
        
        /** Number of subdivision along the X axis. */
        get subdivide_width(): int64
        set subdivide_width(value: int64)
        
        /** Number of subdivision along the Z axis. */
        get subdivide_depth(): int64
        set subdivide_depth(value: int64)
        
        /** Offset of the generated plane. Useful for particles. */
        get center_offset(): Vector3
        set center_offset(value: Vector3)
        
        /** Direction that the [PlaneMesh] is facing. See [enum Orientation] for options. */
        get orientation(): int64
        set orientation(value: int64)
    }
    class PluginConfigDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        readonly plugin_ready: Signal2<string, string>
    }
    /** Positional 2D light source.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pointlight2d.html  
     */
    class PointLight2D extends Light2D {
        constructor(identifier?: any)
        /** [Texture2D] used for the light's appearance. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** The offset of the light's [member texture]. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The [member texture]'s scale factor. */
        get texture_scale(): float64
        set texture_scale(value: float64)
        
        /** The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane. */
        get height(): float64
        set height(value: float64)
    }
    /** Mesh with a single Point primitive.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pointmesh.html  
     */
    class PointMesh extends PrimitiveMesh {
        constructor(identifier?: any)
    }
    /** A 2D polygon.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_polygon2d.html  
     */
    class Polygon2D extends Node2D {
        constructor(identifier?: any)
        /** Adds a bone with the specified [param path] and [param weights]. */
        add_bone(path: NodePath | string, weights: PackedFloat32Array | float32[]): void
        
        /** Returns the number of bones in this [Polygon2D]. */
        get_bone_count(): int64
        
        /** Returns the path to the node associated with the specified bone. */
        get_bone_path(index: int64): NodePath
        
        /** Returns the weight values of the specified bone. */
        get_bone_weights(index: int64): PackedFloat32Array
        
        /** Removes the specified bone from this [Polygon2D]. */
        erase_bone(index: int64): void
        
        /** Removes all bones from this [Polygon2D]. */
        clear_bones(): void
        
        /** Sets the path to the node associated with the specified bone. */
        set_bone_path(index: int64, path: NodePath | string): void
        
        /** Sets the weight values for the specified bone. */
        set_bone_weights(index: int64, weights: PackedFloat32Array | float32[]): void
        
        /** The polygon's fill color. If [member texture] is set, it will be multiplied by this color. It will also be the default color for vertices not set in [member vertex_colors]. */
        get color(): Color
        set color(value: Color)
        
        /** The offset applied to each vertex. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, polygon edges will be anti-aliased. */
        get antialiased(): boolean
        set antialiased(value: boolean)
        
        /** The polygon's fill texture. Use [member uv] to set texture coordinates. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Amount to offset the polygon's [member texture]. If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position. */
        get texture_offset(): Vector2
        set texture_offset(value: Vector2)
        
        /** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
        get texture_scale(): Vector2
        set texture_scale(value: Vector2)
        
        /** The texture's rotation in radians. */
        get texture_rotation(): float64
        set texture_rotation(value: float64)
        
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
        
        /** If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
        get invert_enabled(): boolean
        set invert_enabled(value: boolean)
        
        /** Added padding applied to the bounding box when [member invert_enabled] is set to `true`. Setting this value too small may result in a "Bad Polygon" error. */
        get invert_border(): float64
        set invert_border(value: float64)
        
        /** The polygon's list of vertices. The final point will be connected to the first.  
         *      
         *  **Note:** This returns a copy of the [PackedVector2Array] rather than a reference.  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`. */
        get uv(): PackedVector2Array
        set uv(value: PackedVector2Array | Vector2[])
        
        /** Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [member color]. */
        get vertex_colors(): PackedColorArray
        set vertex_colors(value: PackedColorArray | Color[])
        
        /** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
        get polygons(): Array
        set polygons(value: Array)
        
        /** Internal list of [Bone2D] nodes used by the assigned [member skeleton]. Edited using the Polygon2D editor ("UV" button on the top toolbar). */
        get bones(): Array
        set bones(value: Array)
        
        /** Number of internal vertices, used for UV mapping. */
        get internal_vertex_count(): int64
        set internal_vertex_count(value: int64)
    }
    class Polygon2DEditor extends AbstractPolygon2DEditor {
        constructor(identifier?: any)
        _update_bone_list(): void
        _update_polygon_editing_state(): void
    }
    class Polygon2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
        constructor(identifier?: any)
    }
    class Polygon3DEditor extends HBoxContainer {
        constructor(identifier?: any)
        _polygon_draw(): void
    }
    class Polygon3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Flat 2D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_polygonoccluder3d.html  
     */
    class PolygonOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        _has_editable_3d_polygon_no_depth(): boolean
        
        /** The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.  
         *  The polygon must  *not*  have intersecting lines. Otherwise, triangulation will fail (with an error message printed).  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_polygonpathfinder.html */
    class PolygonPathFinder extends Resource {
        constructor(identifier?: any)
        setup(points: PackedVector2Array | Vector2[], connections: PackedInt32Array | int32[]): void
        find_path(from: Vector2, to: Vector2): PackedVector2Array
        get_intersections(from: Vector2, to: Vector2): PackedVector2Array
        get_closest_point(point: Vector2): Vector2
        is_point_inside(point: Vector2): boolean
        set_point_penalty(idx: int64, penalty: float64): void
        get_point_penalty(idx: int64): float64
        get_bounds(): Rect2
        get data(): Dictionary
        set data(value: Dictionary)
    }
    /** Base class for contextual windows and panels with fixed position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popup.html  
     */
    class Popup extends Window {
        constructor(identifier?: any)
        /** Emitted when the popup is hidden. */
        readonly popup_hide: Signal0
    }
    /** A modal window used to display a list of options.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popupmenu.html  
     */
    class PopupMenu extends Popup {
        constructor(identifier?: any)
        /** Checks the provided [param event] against the [PopupMenu]'s shortcuts and accelerators, and activates the first item with matching events. If [param for_global_only] is `true`, only shortcuts and accelerators with `global` set to `true` will be called.  
         *  Returns `true` if an item was successfully activated.  
         *      
         *  **Note:** Certain [Control]s, such as [MenuButton], will call this method automatically.  
         */
        activate_item_by_event(event: InputEvent, for_global_only: boolean = false): boolean
        
        /** Adds a new item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** The provided [param id] is used only in [signal id_pressed] and [signal id_focused] signals. It's not related to the `index` arguments in e.g. [method set_item_checked].  
         */
        add_item(label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a new item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        add_icon_item(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a new checkable item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_check_item(label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a new checkable item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_icon_check_item(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a new radio check button with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_radio_check_item(label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Same as [method add_icon_check_item], but uses a radio check button. */
        add_icon_radio_check_item(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a new multistate item with text [param label].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        add_multistate_item(label: string, max_states: int64, default_state: int64 = 0, id: int64 = -1, accel: Key = 0): void
        
        /** Adds a [Shortcut].  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        add_shortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false, allow_echo: boolean = false): void
        
        /** Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        add_icon_shortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false, allow_echo: boolean = false): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_check_shortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_icon_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        
        /** Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_radio_check_shortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        
        /** Same as [method add_icon_check_shortcut], but uses a radio check button. */
        add_icon_radio_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        add_submenu_item(label: string, submenu: string, id: int64 = -1): void
        
        /** Sets the text of the item at the given [param index]. */
        set_item_text(index: int64, text: string): void
        
        /** Sets item's text base writing direction. */
        set_item_text_direction(index: int64, direction: Control.TextDirection): void
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_item_language(index: int64, language: string): void
        
        /** Replaces the [Texture2D] icon of the item at the given [param index]. */
        set_item_icon(index: int64, icon: Texture2D): void
        
        /** Sets the maximum allowed width of the icon for the item at the given [param index]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_item_icon_max_width(index: int64, width: int64): void
        
        /** Sets a modulating [Color] of the item's icon at the given [param index]. */
        set_item_icon_modulate(index: int64, modulate: Color): void
        
        /** Sets the checkstate status of the item at the given [param index]. */
        set_item_checked(index: int64, checked: boolean): void
        
        /** Sets the [param id] of the item at the given [param index].  
         *  The [param id] is used in [signal id_pressed] and [signal id_focused] signals.  
         */
        set_item_id(index: int64, id: int64): void
        
        /** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). */
        set_item_accelerator(index: int64, accel: Key): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
        set_item_metadata(index: int64, metadata: any): void
        
        /** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
        set_item_disabled(index: int64, disabled: boolean): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
        set_item_submenu(index: int64, submenu: string): void
        
        /** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text. */
        set_item_as_separator(index: int64, enable: boolean): void
        
        /** Sets whether the item at the given [param index] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        set_item_as_checkable(index: int64, enable: boolean): void
        
        /** Sets the type of the item at the given [param index] to radio button. If `false`, sets the type of the item to plain text. */
        set_item_as_radio_checkable(index: int64, enable: boolean): void
        
        /** Sets the [String] tooltip of the item at the given [param index]. */
        set_item_tooltip(index: int64, tooltip: string): void
        
        /** Sets a [Shortcut] for the item at the given [param index]. */
        set_item_shortcut(index: int64, shortcut: Shortcut, global: boolean = false): void
        
        /** Sets the horizontal offset of the item at the given [param index]. */
        set_item_indent(index: int64, indent: int64): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details. */
        set_item_multistate(index: int64, state: int64): void
        
        /** Disables the [Shortcut] of the item at the given [param index]. */
        set_item_shortcut_disabled(index: int64, disabled: boolean): void
        
        /** Toggles the check state of the item at the given [param index]. */
        toggle_item_checked(index: int64): void
        
        /** Cycle to the next state of a multistate item. See [method add_multistate_item] for details. */
        toggle_item_multistate(index: int64): void
        
        /** Returns the text of the item at the given [param index]. */
        get_item_text(index: int64): string
        
        /** Returns item's text base writing direction. */
        get_item_text_direction(index: int64): Control.TextDirection
        
        /** Returns item's text language code. */
        get_item_language(index: int64): string
        
        /** Returns the icon of the item at the given [param index]. */
        get_item_icon(index: int64): Texture2D
        
        /** Returns the maximum allowed width of the icon for the item at the given [param index]. */
        get_item_icon_max_width(index: int64): int64
        
        /** Returns a [Color] modulating the item's icon at the given [param index]. */
        get_item_icon_modulate(index: int64): Color
        
        /** Returns `true` if the item at the given [param index] is checked. */
        is_item_checked(index: int64): boolean
        
        /** Returns the ID of the item at the given [param index]. `id` can be manually assigned, while index can not. */
        get_item_id(index: int64): int64
        
        /** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
        get_item_index(id: int64): int64
        
        /** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns `0` (corresponding to [constant @GlobalScope.KEY_NONE]). */
        get_item_accelerator(index: int64): Key
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
        get_item_metadata(index: int64): any
        
        /** Returns `true` if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         */
        is_item_disabled(index: int64): boolean
        
        /** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
        get_item_submenu(index: int64): string
        
        /** Returns `true` if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
        is_item_separator(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        is_item_checkable(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         */
        is_item_radio_checkable(index: int64): boolean
        
        /** Returns `true` if the specified item's shortcut is disabled. */
        is_item_shortcut_disabled(index: int64): boolean
        
        /** Returns the tooltip associated with the item at the given [param index]. */
        get_item_tooltip(index: int64): string
        
        /** Returns the [Shortcut] associated with the item at the given [param index]. */
        get_item_shortcut(index: int64): Shortcut
        
        /** Returns the horizontal offset of the item at the given [param index]. */
        get_item_indent(index: int64): int64
        
        /** Sets the currently focused item as the given [param index].  
         *  Passing `-1` as the index makes so that no item is focused.  
         */
        set_focused_item(index: int64): void
        
        /** Returns the index of the currently focused item. Returns `-1` if no item is focused. */
        get_focused_item(): int64
        
        /** Moves the scroll view to make the item at the given [param index] visible. */
        scroll_to_item(index: int64): void
        
        /** Removes the item at the given [param index] from the menu.  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         */
        remove_item(index: int64): void
        
        /** Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.  
         *  A [param label] can optionally be provided, which will appear at the center of the separator.  
         */
        add_separator(label: string = '', id: int64 = -1): void
        
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is `true`, the submenu nodes are automatically freed. */
        clear(free_submenus: boolean = false): void
        
        /** If `true`, hides the [PopupMenu] when an item is selected. */
        get hide_on_item_selection(): boolean
        set hide_on_item_selection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a checkbox or radio button is selected. */
        get hide_on_checkable_item_selection(): boolean
        set hide_on_checkable_item_selection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a state item is selected. */
        get hide_on_state_item_selection(): boolean
        set hide_on_state_item_selection(value: boolean)
        
        /** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
        get submenu_popup_delay(): float64
        set submenu_popup_delay(value: float64)
        
        /** If `true`, allows navigating [PopupMenu] with letter keys. */
        get allow_search(): boolean
        set allow_search(value: boolean)
        
        /** The number of items currently in the list. */
        get item_count(): any /*Items,item_*/
        set item_count(value: any /*Items,item_*/)
        
        /** Emitted when an item of some [param id] is pressed or its accelerator is activated.  
         *      
         *  **Note:** If [param id] is negative (either explicitly or due to overflow), this will return the corresponding index instead.  
         */
        readonly id_pressed: Signal1<int64>
        
        /** Emitted when the user navigated to an item of some [param id] using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input action. */
        readonly id_focused: Signal1<int64>
        
        /** Emitted when an item of some [param index] is pressed or its accelerator is activated. */
        readonly index_pressed: Signal1<int64>
        
        /** Emitted when any item is added, modified or removed. */
        readonly menu_changed: Signal0
    }
    /** A popup with a panel background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popuppanel.html  
     */
    class PopupPanel extends Popup {
        constructor(identifier?: any)
    }
    namespace PortableCompressedTexture2D {
        enum CompressionMode {
            COMPRESSION_MODE_LOSSLESS = 0,
            COMPRESSION_MODE_LOSSY = 1,
            COMPRESSION_MODE_BASIS_UNIVERSAL = 2,
            COMPRESSION_MODE_S3TC = 3,
            COMPRESSION_MODE_ETC2 = 4,
            COMPRESSION_MODE_BPTC = 5,
        }
    }
    /** Provides a compressed texture for disk and/or VRAM in a way that is portable.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_portablecompressedtexture2d.html  
     */
    class PortableCompressedTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** Initializes the compressed texture from a base image. The compression mode must be provided.  
         *  [param normal_map] is recommended to ensure optimum quality if this image will be used as a normal map.  
         *  If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.  
         */
        create_from_image(image: Image, compression_mode: PortableCompressedTexture2D.CompressionMode, normal_map: boolean = false, lossy_quality: float64 = 0.8): void
        
        /** Return the image format used (valid after initialized). */
        get_format(): Image.Format
        
        /** Return the compression mode used (valid after initialized). */
        get_compression_mode(): PortableCompressedTexture2D.CompressionMode
        
        /** Overrides the flag globally for all textures of this type. This is used primarily by the editor. */
        static set_keep_all_compressed_buffers(keep: boolean): void
        
        /** Return whether the flag is overridden for all textures of this type. */
        static is_keeping_all_compressed_buffers(): boolean
        get _data(): PackedByteArray
        set _data(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** Allow overriding the texture size (for 2D only). */
        get size_override(): Vector2
        set size_override(value: Vector2)
        
        /** When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.  
         *  This flag allows to keep the compressed data in memory if you intend it to persist after loading.  
         */
        get keep_compressed_buffer(): boolean
        set keep_compressed_buffer(value: boolean)
    }
    class PostImportPluginSkeletonRenamer extends EditorScenePostImportPlugin {
        constructor(identifier?: any)
    }
    class PostImportPluginSkeletonRestFixer extends EditorScenePostImportPlugin {
        constructor(identifier?: any)
    }
    class PostImportPluginSkeletonTrackOrganizer extends EditorScenePostImportPlugin {
        constructor(identifier?: any)
    }
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_primitivemesh.html  
     */
    class PrimitiveMesh extends Mesh {
        constructor(identifier?: any)
        /** Override this method to customize how this primitive mesh should be generated. Should return an [Array] where each element is another Array of values required for the mesh (see the [enum Mesh.ArrayType] constants). */
        /* gdvirtual */ _create_mesh_array(): Array
        _update(): void
        
        /** Returns mesh arrays used to constitute surface of [Mesh]. The result can be passed to [method ArrayMesh.add_surface_from_arrays] to create a new surface. For example:  
         *    
         */
        get_mesh_arrays(): Array
        _request_update(): void
        
        /** The current [Material] of the primitive mesh. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        get custom_aabb(): AABB
        set custom_aabb(value: AABB)
        
        /** If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn.  
         *  This gives the same result as using [constant BaseMaterial3D.CULL_FRONT] in [member BaseMaterial3D.cull_mode].  
         */
        get flip_faces(): boolean
        set flip_faces(value: boolean)
        
        /** If set, generates UV2 UV coordinates applying a padding using the [member uv2_padding] setting. UV2 is needed for lightmapping. */
        get add_uv2(): boolean
        set add_uv2(value: boolean)
        
        /** If [member add_uv2] is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.  
         *  If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.  
         */
        get uv2_padding(): float64
        set uv2_padding(value: float64)
    }
    /** Class representing a prism-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_prismmesh.html  
     */
    class PrismMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Displacement of the upper edge along the X axis. 0.0 positions edge straight above the bottom-left edge. */
        get left_to_right(): float64
        set left_to_right(value: float64)
        
        /** Size of the prism. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Number of added edge loops along the X axis. */
        get subdivide_width(): int64
        set subdivide_width(value: int64)
        
        /** Number of added edge loops along the Y axis. */
        get subdivide_height(): int64
        set subdivide_height(value: int64)
        
        /** Number of added edge loops along the Z axis. */
        get subdivide_depth(): int64
        set subdivide_depth(value: int64)
    }
    /** A material that defines a simple sky for a [Sky] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_proceduralskymaterial.html  
     */
    class ProceduralSkyMaterial extends Material {
        constructor(identifier?: any)
        /** Color of the sky at the top. Blends with [member sky_horizon_color]. */
        get sky_top_color(): Color
        set sky_top_color(value: Color)
        
        /** Color of the sky at the horizon. Blends with [member sky_top_color]. */
        get sky_horizon_color(): Color
        set sky_horizon_color(value: Color)
        
        /** How quickly the [member sky_horizon_color] fades into the [member sky_top_color]. */
        get sky_curve(): float64
        set sky_curve(value: float64)
        
        /** Multiplier for sky color. A higher value will make the sky brighter. */
        get sky_energy_multiplier(): float64
        set sky_energy_multiplier(value: float64)
        
        /** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be  *added*  to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
        get sky_cover(): Texture2D
        set sky_cover(value: Texture2D)
        
        /** The tint to apply to the [member sky_cover] texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [member sky_cover]. */
        get sky_cover_modulate(): Color
        set sky_cover_modulate(value: Color)
        
        /** Color of the ground at the bottom. Blends with [member ground_horizon_color]. */
        get ground_bottom_color(): Color
        set ground_bottom_color(value: Color)
        
        /** Color of the ground at the horizon. Blends with [member ground_bottom_color]. */
        get ground_horizon_color(): Color
        set ground_horizon_color(value: Color)
        
        /** How quickly the [member ground_horizon_color] fades into the [member ground_bottom_color]. */
        get ground_curve(): float64
        set ground_curve(value: float64)
        
        /** Multiplier for ground color. A higher value will make the ground brighter. */
        get ground_energy_multiplier(): float64
        set ground_energy_multiplier(value: float64)
        
        /** Distance from center of sun where it fades out completely. */
        get sun_angle_max(): float64
        set sun_angle_max(value: float64)
        
        /** How quickly the sun fades away between the edge of the sun disk and [member sun_angle_max]. */
        get sun_curve(): float64
        set sun_curve(value: float64)
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        get use_debanding(): boolean
        set use_debanding(value: boolean)
    }
    class ProceduralSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
        constructor(identifier?: any)
    }
    namespace ProgressBar {
        enum FillMode {
            /** The progress bar fills from begin to end horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from left to right, and if it returns `true`, it fills from right to left. */
            FILL_BEGIN_TO_END = 0,
            
            /** The progress bar fills from end to begin horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from right to left, and if it returns `true`, it fills from left to right. */
            FILL_END_TO_BEGIN = 1,
            
            /** The progress fills from top to bottom. */
            FILL_TOP_TO_BOTTOM = 2,
            
            /** The progress fills from bottom to top. */
            FILL_BOTTOM_TO_TOP = 3,
        }
    }
    /** A control used for visual representation of a percentage.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_progressbar.html  
     */
    class ProgressBar extends Range {
        constructor(identifier?: any)
        /** The fill direction. See [enum FillMode] for possible values. */
        get fill_mode(): int64
        set fill_mode(value: int64)
        
        /** If `true`, the fill percentage is displayed on the bar. */
        get show_percentage(): boolean
        set show_percentage(value: boolean)
    }
    class ProgressDialog extends PopupPanel {
        constructor(identifier?: any)
    }
    class ProjectExportDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        _export_all(_unnamed_arg0: boolean): void
        get_current_preset(): any /*EditorExportPreset*/
        get export_path(): string
        set export_path(value: string)
    }
    class ProjectExportTextureFormatError extends HBoxContainer {
        constructor(identifier?: any)
        readonly texture_format_enabled: Signal0
    }
    class ProjectSettingsEditor extends AcceptDialog {
        constructor(identifier?: any)
        queue_save(): void
        _update_action_map_editor(): void
    }
    class PropertySelector extends ConfirmationDialog {
        constructor(identifier?: any)
        readonly selected: Signal1<string>
    }
    /** Interpolates an [Object]'s property over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_propertytweener.html  
     */
    class PropertyTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets a custom initial value to the [PropertyTweener].  
         *  **Example:**  
         *    
         */
        from(value: any): PropertyTweener
        
        /** Makes the [PropertyTweener] use the current property value (i.e. at the time of creating this [PropertyTweener]) as a starting point. This is equivalent of using [method from] with the current value. These two calls will do the same:  
         *    
         */
        from_current(): PropertyTweener
        
        /** When called, the final value will be used as a relative value instead.  
         *  **Example:**  
         *    
         */
        as_relative(): PropertyTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        set_trans(trans: Tween.TransitionType): PropertyTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        set_ease(ease: Tween.EaseType): PropertyTweener
        
        /** Sets the time in seconds after which the [PropertyTweener] will start interpolating. By default there's no delay. */
        set_delay(delay: float64): PropertyTweener
    }
    /** Class representing a square mesh facing the camera.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_quadmesh.html  
     */
    class QuadMesh extends PlaneMesh {
        constructor(identifier?: any)
    }
    /** Flat plane shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_quadoccluder3d.html  
     */
    class QuadOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The quad's size in 3D units. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Attachment format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdattachmentformat.html  
     */
    class RDAttachmentFormat extends RefCounted {
        constructor(identifier?: any)
        /** The attachment's data format. */
        get format(): int64
        set format(value: int64)
        
        /** The number of samples used when sampling the attachment. */
        get samples(): int64
        set samples(value: int64)
        
        /** The attachment's usage flags, which determine what can be done with it. */
        get usage_flags(): int64
        set usage_flags(value: int64)
    }
    /** Framebuffer pass attachment description (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdframebufferpass.html  
     */
    class RDFramebufferPass extends RefCounted {
        /** Attachment is unused. */
        static readonly ATTACHMENT_UNUSED = -1
        constructor(identifier?: any)
        
        /** Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip. */
        get color_attachments(): PackedInt32Array
        set color_attachments(value: PackedInt32Array | int32[])
        
        /** Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [RDUniform] for the uniform set. */
        get input_attachments(): PackedInt32Array
        set input_attachments(value: PackedInt32Array | int32[])
        
        /** If the color attachments are multisampled, non-multisampled resolve attachments can be provided. */
        get resolve_attachments(): PackedInt32Array
        set resolve_attachments(value: PackedInt32Array | int32[])
        
        /** Attachments to preserve in this pass (otherwise they are erased). */
        get preserve_attachments(): PackedInt32Array
        set preserve_attachments(value: PackedInt32Array | int32[])
        
        /** Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass. */
        get depth_attachment(): int64
        set depth_attachment(value: int64)
    }
    /** Pipeline color blend state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinecolorblendstate.html  
     */
    class RDPipelineColorBlendState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, performs the logic operation defined in [member logic_op]. */
        get enable_logic_op(): boolean
        set enable_logic_op(value: boolean)
        
        /** The logic operation to perform for blending. Only effective if [member enable_logic_op] is `true`. */
        get logic_op(): int64
        set logic_op(value: int64)
        
        /** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
        get blend_constant(): Color
        set blend_constant(value: Color)
        
        /** The attachments that are blended together. */
        get attachments(): Array
        set attachments(value: Array)
    }
    /** Pipeline color blend state attachment (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinecolorblendstateattachment.html  
     */
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        constructor(identifier?: any)
        /** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to `true`, [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
        set_as_mix(): void
        
        /** If `true`, performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
        get enable_blend(): boolean
        set enable_blend(value: boolean)
        
        /** Controls how the blend factor for the color channels is determined based on the source's fragments. */
        get src_color_blend_factor(): int64
        set src_color_blend_factor(value: int64)
        
        /** Controls how the blend factor for the color channels is determined based on the destination's fragments. */
        get dst_color_blend_factor(): int64
        set dst_color_blend_factor(value: int64)
        
        /** The blend mode to use for the red/green/blue color channels. */
        get color_blend_op(): int64
        set color_blend_op(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the source's fragments. */
        get src_alpha_blend_factor(): int64
        set src_alpha_blend_factor(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the destination's fragments. */
        get dst_alpha_blend_factor(): int64
        set dst_alpha_blend_factor(value: int64)
        
        /** The blend mode to use for the alpha channel. */
        get alpha_blend_op(): int64
        set alpha_blend_op(value: int64)
        
        /** If `true`, writes the new red color channel to the final result. */
        get write_r(): boolean
        set write_r(value: boolean)
        
        /** If `true`, writes the new green color channel to the final result. */
        get write_g(): boolean
        set write_g(value: boolean)
        
        /** If `true`, writes the new blue color channel to the final result. */
        get write_b(): boolean
        set write_b(value: boolean)
        
        /** If `true`, writes the new alpha channel to the final result. */
        get write_a(): boolean
        set write_a(value: boolean)
    }
    /** Pipeline depth/stencil state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinedepthstencilstate.html  
     */
    class RDPipelineDepthStencilState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer). */
        get enable_depth_test(): boolean
        set enable_depth_test(value: boolean)
        
        /** If `true`, writes to the depth buffer whenever the depth test returns true. Only works when enable_depth_test is also true. */
        get enable_depth_write(): boolean
        set enable_depth_write(value: boolean)
        
        /** The method used for comparing the previous and current depth values. */
        get depth_compare_operator(): int64
        set depth_compare_operator(value: int64)
        
        /** If `true`, each depth value will be tested to see if it is between [member depth_range_min] and [member depth_range_max]. If it is outside of these values, it is discarded. */
        get enable_depth_range(): boolean
        set enable_depth_range(value: boolean)
        
        /** The minimum depth that returns true for [member enable_depth_range]. */
        get depth_range_min(): float64
        set depth_range_min(value: float64)
        
        /** The maximum depth that returns true for [member enable_depth_range]. */
        get depth_range_max(): float64
        set depth_range_max(value: float64)
        
        /** If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each. */
        get enable_stencil(): boolean
        set enable_stencil(value: boolean)
        
        /** The operation to perform on the stencil buffer for front pixels that fail the stencil test. */
        get front_op_fail(): int64
        set front_op_fail(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test. */
        get front_op_pass(): int64
        set front_op_pass(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test. */
        get front_op_depth_fail(): int64
        set front_op_depth_fail(value: int64)
        
        /** The method used for comparing the previous front stencil value and [member front_op_reference]. */
        get front_op_compare(): int64
        set front_op_compare(value: int64)
        
        /** Selects which bits from the front stencil value will be compared. */
        get front_op_compare_mask(): int64
        set front_op_compare_mask(value: int64)
        
        /** Selects which bits from the front stencil value will be changed. */
        get front_op_write_mask(): int64
        set front_op_write_mask(value: int64)
        
        /** The value the previous front stencil value will be compared to. */
        get front_op_reference(): int64
        set front_op_reference(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that fail the stencil test */
        get back_op_fail(): int64
        set back_op_fail(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test. */
        get back_op_pass(): int64
        set back_op_pass(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test. */
        get back_op_depth_fail(): int64
        set back_op_depth_fail(value: int64)
        
        /** The method used for comparing the previous back stencil value and [member back_op_reference]. */
        get back_op_compare(): int64
        set back_op_compare(value: int64)
        
        /** Selects which bits from the back stencil value will be compared. */
        get back_op_compare_mask(): int64
        set back_op_compare_mask(value: int64)
        
        /** Selects which bits from the back stencil value will be changed. */
        get back_op_write_mask(): int64
        set back_op_write_mask(value: int64)
        
        /** The value the previous back stencil value will be compared to. */
        get back_op_reference(): int64
        set back_op_reference(value: int64)
    }
    /** Pipeline multisample state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinemultisamplestate.html  
     */
    class RDPipelineMultisampleState extends RefCounted {
        constructor(identifier?: any)
        /** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is `true`) to perform. Higher values result in better antialiasing, at the cost of performance. */
        get sample_count(): int64
        set sample_count(value: int64)
        
        /** If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
        get enable_sample_shading(): boolean
        set enable_sample_shading(value: boolean)
        
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [member enable_sample_shading] is `true`. If [member min_sample_shading] is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is  *not*  `1.0`. */
        get min_sample_shading(): float64
        set min_sample_shading(value: float64)
        
        /** If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        get enable_alpha_to_coverage(): boolean
        set enable_alpha_to_coverage(value: boolean)
        
        /** If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is `true`. */
        get enable_alpha_to_one(): boolean
        set enable_alpha_to_one(value: boolean)
        
        /** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
        get sample_masks(): Array
        set sample_masks(value: Array)
    }
    /** Pipeline rasterization state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinerasterizationstate.html  
     */
    class RDPipelineRasterizationState extends RefCounted {
        constructor(identifier?: any)
        get enable_depth_clamp(): boolean
        set enable_depth_clamp(value: boolean)
        
        /** If `true`, primitives are discarded immediately before the rasterization stage. */
        get discard_primitives(): boolean
        set discard_primitives(value: boolean)
        
        /** If `true`, performs wireframe rendering for triangles instead of flat or textured rendering. */
        get wireframe(): boolean
        set wireframe(value: boolean)
        
        /** The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden. */
        get cull_mode(): int64
        set cull_mode(value: int64)
        
        /** The winding order to use to determine which face of a triangle is considered its front face. */
        get front_face(): int64
        set front_face(value: int64)
        get depth_bias_enabled(): boolean
        set depth_bias_enabled(value: boolean)
        get depth_bias_constant_factor(): float64
        set depth_bias_constant_factor(value: float64)
        get depth_bias_clamp(): float64
        set depth_bias_clamp(value: float64)
        get depth_bias_slope_factor(): float64
        set depth_bias_slope_factor(value: float64)
        
        /** The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware. */
        get line_width(): float64
        set line_width(value: float64)
        
        /** The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance. */
        get patch_control_points(): int64
        set patch_control_points(value: int64)
    }
    /** Pipeline specialization constant (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinespecializationconstant.html  
     */
    class RDPipelineSpecializationConstant extends RefCounted {
        constructor(identifier?: any)
        /** The specialization constant's value. Only [bool], [int] and [float] types are valid for specialization constants. */
        get value(): any
        set value(value: any)
        
        /** The identifier of the specialization constant. This is a value starting from `0` and that increments for every different specialization constant for a given shader. */
        get constant_id(): int64
        set constant_id(value: int64)
    }
    /** Sampler state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdsamplerstate.html  
     */
    class RDSamplerState extends RefCounted {
        constructor(identifier?: any)
        /** The sampler's magnification filter. */
        get mag_filter(): int64
        set mag_filter(value: int64)
        get min_filter(): int64
        set min_filter(value: int64)
        
        /** The filtering method to use for mipmaps. */
        get mip_filter(): int64
        set mip_filter(value: int64)
        
        /** The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeat_u(): int64
        set repeat_u(value: int64)
        
        /** The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeat_v(): int64
        set repeat_v(value: int64)
        
        /** The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers. */
        get repeat_w(): int64
        set repeat_w(value: int64)
        
        /** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available. */
        get lod_bias(): float64
        set lod_bias(value: float64)
        
        /** If `true`, perform anisotropic sampling. See [member anisotropy_max]. */
        get use_anisotropy(): boolean
        set use_anisotropy(value: boolean)
        
        /** Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.  
         *  If [member anisotropy_max] is `1.0`, forcibly disables anisotropy even if [member use_anisotropy] is `true`.  
         */
        get anisotropy_max(): float64
        set anisotropy_max(value: float64)
        
        /** If `true`, returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
        get enable_compare(): boolean
        set enable_compare(value: boolean)
        
        /** The compare operation to use. Only effective if [member enable_compare] is `true`. */
        get compare_op(): int64
        set compare_op(value: int64)
        
        /** The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available. */
        get min_lod(): float64
        set min_lod(value: float64)
        
        /** The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available. */
        get max_lod(): float64
        set max_lod(value: float64)
        
        /** The border color that will be returned when sampling outside the sampler's bounds and the [member repeat_u], [member repeat_v] or [member repeat_w] modes have repeating disabled. */
        get border_color(): int64
        set border_color(value: int64)
        get unnormalized_uvw(): boolean
        set unnormalized_uvw(value: boolean)
    }
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshaderfile.html  
     */
    class RDShaderFile extends Resource {
        constructor(identifier?: any)
        /** Sets the SPIR-V [param bytecode] that will be compiled for the specified [param version]. */
        set_bytecode(bytecode: RDShaderSPIRV, version: StringName = ''): void
        
        /** Returns the SPIR-V intermediate representation for the specified shader [param version]. */
        get_spirv(version: StringName = ''): RDShaderSPIRV
        
        /** Returns the list of compiled versions for this shader. */
        get_version_list(): Array
        get _versions(): Dictionary
        set _versions(value: Dictionary)
        
        /** The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [RDShaderSPIRV]'s error message members). */
        get base_error(): string
        set base_error(value: string)
    }
    /** SPIR-V intermediate representation as part of a [RDShaderFile] (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshaderspirv.html  
     */
    class RDShaderSPIRV extends Resource {
        constructor(identifier?: any)
    }
    /** Shader source code (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshadersource.html  
     */
    class RDShaderSource extends RefCounted {
        constructor(identifier?: any)
        /** The language the shader is written in. */
        get language(): int64
        set language(value: int64)
    }
    /** Texture format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdtextureformat.html  
     */
    class RDTextureFormat extends RefCounted {
        constructor(identifier?: any)
        add_shareable_format(format: RenderingDevice.DataFormat): void
        remove_shareable_format(format: RenderingDevice.DataFormat): void
        
        /** The texture's pixel data format. */
        get format(): int64
        set format(value: int64)
        
        /** The texture's width (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** The texture's height (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** The texture's depth (in pixels). This is always `1` for 2D textures. */
        get depth(): int64
        set depth(value: int64)
        
        /** The number of layers in the texture. Only relevant for 2D texture arrays. */
        get array_layers(): int64
        set array_layers(value: int64)
        
        /** The number of mipmaps available in the texture. */
        get mipmaps(): int64
        set mipmaps(value: int64)
        
        /** The texture type. */
        get texture_type(): int64
        set texture_type(value: int64)
        
        /** The number of samples used when sampling the texture. */
        get samples(): int64
        set samples(value: int64)
        
        /** The texture's usage bits, which determine what can be done using the texture. */
        get usage_bits(): int64
        set usage_bits(value: int64)
    }
    /** Texture view (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdtextureview.html  
     */
    class RDTextureView extends RefCounted {
        constructor(identifier?: any)
        /** Optional override for the data format to return sampled values in. The default value of [constant RenderingDevice.DATA_FORMAT_MAX] does not override the format. */
        get format_override(): int64
        set format_override(value: int64)
        
        /** The channel to sample when sampling the red color channel. */
        get swizzle_r(): int64
        set swizzle_r(value: int64)
        
        /** The channel to sample when sampling the green color channel. */
        get swizzle_g(): int64
        set swizzle_g(value: int64)
        
        /** The channel to sample when sampling the blue color channel. */
        get swizzle_b(): int64
        set swizzle_b(value: int64)
        
        /** The channel to sample when sampling the alpha channel. */
        get swizzle_a(): int64
        set swizzle_a(value: int64)
    }
    /** Shader uniform (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rduniform.html  
     */
    class RDUniform extends RefCounted {
        constructor(identifier?: any)
        add_id(id: RID): void
        clear_ids(): void
        
        /** The uniform's data type. */
        get uniform_type(): int64
        set uniform_type(value: int64)
        
        /** The uniform's binding. */
        get binding(): int64
        set binding(value: int64)
        get _ids(): Array
        set _ids(value: Array)
    }
    /** Vertex attribute (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdvertexattribute.html  
     */
    class RDVertexAttribute extends RefCounted {
        constructor(identifier?: any)
        get location(): int64
        set location(value: int64)
        get offset(): int64
        set offset(value: int64)
        get format(): int64
        set format(value: int64)
        get stride(): int64
        set stride(value: int64)
        get frequency(): int64
        set frequency(value: int64)
    }
    /** Provides methods for generating pseudo-random numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_randomnumbergenerator.html  
     */
    class RandomNumberGenerator extends RefCounted {
        constructor(identifier?: any)
        /** Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive). */
        randi(): int64
        
        /** Returns a pseudo-random float between `0.0` and `1.0` (inclusive). */
        randf(): float64
        
        /** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url] pseudo-random number, using Box-Muller transform with the specified [param mean] and a standard [param deviation]. This is also called Gaussian distribution. */
        randfn(mean: float64 = 0, deviation: float64 = 1): float64
        
        /** Returns a pseudo-random float between [param from] and [param to] (inclusive). */
        randf_range(from: float64, to: float64): float64
        
        /** Returns a pseudo-random 32-bit signed integer between [param from] and [param to] (inclusive). */
        randi_range(from: int64, to: int64): int64
        
        /** Sets up a time-based seed for this [RandomNumberGenerator] instance. Unlike the [@GlobalScope] random number generation functions, different [RandomNumberGenerator] instances can use different seeds. */
        randomize(): void
        
        /** Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.  
         *      
         *  **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.  
         *      
         *  **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed  *before*  modifying the [member state]:  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         *    
         */
        get seed(): int64
        set seed(value: int64)
        
        /** The current state of the random number generator. Save and restore this property to restore the generator to a previous state:  
         *    
         *      
         *  **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         */
        get state(): int64
        set state(value: int64)
    }
    /** Abstract base class for controls that represent a number within a range.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_range.html  
     */
    class Range extends Control {
        constructor(identifier?: any)
        /** Called when the [Range]'s value is changed (following the same conditions as [signal value_changed]). */
        /* gdvirtual */ _value_changed(new_value: float64): void
        
        /** Sets the [Range]'s current value to the specified [param value], without emitting the [signal value_changed] signal. */
        set_value_no_signal(value: float64): void
        
        /** Binds two [Range]s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group. */
        share(with_: Node): void
        
        /** Stops the [Range] from sharing its member variables with any other. */
        unshare(): void
        
        /** Minimum value. Range is clamped if [member value] is less than [member min_value]. */
        get min_value(): float64
        set min_value(value: float64)
        
        /** Maximum value. Range is clamped if [member value] is greater than [member max_value]. */
        get max_value(): float64
        set max_value(value: float64)
        
        /** If greater than 0, [member value] will always be rounded to a multiple of this property's value. If [member rounded] is also `true`, [member value] will first be rounded to a multiple of this property's value, then rounded to the nearest integer. */
        get step(): float64
        set step(value: float64)
        
        /** Page size. Used mainly for [ScrollBar]. ScrollBar's length is its size multiplied by [member page] over the difference between [member min_value] and [member max_value]. */
        get page(): float64
        set page(value: float64)
        
        /** Range's current value. Changing this property (even via code) will trigger [signal value_changed] signal. Use [method set_value_no_signal] if you want to avoid it. */
        get value(): float64
        set value(value: float64)
        
        /** The value mapped between 0 and 1. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** If `true`, and [member min_value] is greater than 0, [member value] will be represented exponentially rather than linearly. */
        get exp_edit(): boolean
        set exp_edit(value: boolean)
        
        /** If `true`, [member value] will always be rounded to the nearest integer. */
        get rounded(): boolean
        set rounded(value: boolean)
        
        /** If `true`, [member value] may be greater than [member max_value]. */
        get allow_greater(): boolean
        set allow_greater(value: boolean)
        
        /** If `true`, [member value] may be less than [member min_value]. */
        get allow_lesser(): boolean
        set allow_lesser(value: boolean)
        
        /** Emitted when [member value] changes. When used on a [Slider], this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [signal value_changed], consider using a  *debouncing*  [Timer] to call the function less often.  
         *      
         *  **Note:** Unlike signals such as [signal LineEdit.text_changed], [signal value_changed] is also emitted when [param value] is set directly via code.  
         */
        readonly value_changed: Signal1<float64>
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal0
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_raycast2d.html  
     */
    class RayCast2D extends Node2D {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        force_raycast_update(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        get_collider(): Object
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        get_collider_rid(): RID
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject2D] target, use:  
         *    
         */
        get_collider_shape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        get_collision_point(): Vector2
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector2(0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`. */
        get_collision_normal(): Vector2
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        add_exception_rid(rid: RID): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject2D] node. */
        add_exception(node: CollisionObject2D): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [RID]. */
        remove_exception_rid(rid: RID): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [CollisionObject2D] node. */
        remove_exception(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this ray. */
        clear_exceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get exclude_parent(): boolean
        set exclude_parent(value: boolean)
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        get target_position(): Vector2
        set target_position(value: Vector2)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        get hit_from_inside(): boolean
        set hit_from_inside(value: boolean)
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
    }
    /** A ray in 3D space, used to find the first [CollisionObject3D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_raycast3d.html  
     */
    class RayCast3D extends Node3D {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        force_raycast_update(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        get_collider(): Object
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        get_collider_rid(): RID
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject3D] target, use:  
         *    
         */
        get_collider_shape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        get_collision_point(): Vector3
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`. */
        get_collision_normal(): Vector3
        
        /** Returns the collision object's face index at the collision point, or `-1` if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
        get_collision_face_index(): int64
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        add_exception_rid(rid: RID): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject3D] node. */
        add_exception(node: CollisionObject3D): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [RID]. */
        remove_exception_rid(rid: RID): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [CollisionObject3D] node. */
        remove_exception(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this ray. */
        clear_exceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, collisions will be ignored for this RayCast3D's immediate parent. */
        get exclude_parent(): boolean
        set exclude_parent(value: boolean)
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        get target_position(): Vector3
        set target_position(value: Vector3)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect shapes with no volume like concave polygon or heightmap. */
        get hit_from_inside(): boolean
        set hit_from_inside(value: boolean)
        
        /** If `true`, the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hit_back_faces(): boolean
        set hit_back_faces(value: boolean)
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debug_shape_custom_color(): Color
        set debug_shape_custom_color(value: Color)
        
        /** If set to `1`, a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires **Visible Collision Shapes** to be enabled in the **Debug** menu for the debug shape to be visible at run-time. */
        get debug_shape_thickness(): int64
        set debug_shape_thickness(value: int64)
    }
    class RayCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A 2D rectangle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rectangleshape2d.html  
     */
    class RectangleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The rectangle's width and height. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Base class for reference-counted objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_refcounted.html  
     */
    class RefCounted extends Object {
        constructor(identifier?: any)
        /** Initializes the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns whether the initialization was successful.  
         */
        init_ref(): boolean
        
        /** Increments the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the increment was successful, `false` otherwise.  
         */
        reference(): boolean
        
        /** Decrements the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the object should be freed after the decrement, `false` otherwise.  
         */
        unreference(): boolean
        
        /** Returns the current reference count. */
        get_reference_count(): int64
    }
    /** A rectangle hint for designing UIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_referencerect.html  
     */
    class ReferenceRect extends Control {
        constructor(identifier?: any)
        /** Sets the border color of the [ReferenceRect]. */
        get border_color(): Color
        set border_color(value: Color)
        
        /** Sets the border width of the [ReferenceRect]. The border grows both inwards and outwards with respect to the rectangle box. */
        get border_width(): float64
        set border_width(value: float64)
        
        /** If `true`, the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
        get editor_only(): boolean
        set editor_only(value: boolean)
    }
    namespace ReflectionProbe {
        enum UpdateMode {
            /** Update the probe once on the next frame (recommended for most objects). The corresponding radiance map will be generated over the following six frames. This takes more time to update than [constant UPDATE_ALWAYS], but it has a lower performance cost and can result in higher-quality reflections. The ReflectionProbe is updated when its transform changes, but not when nearby geometry changes. You can force a [ReflectionProbe] update by moving the [ReflectionProbe] slightly in any direction. */
            UPDATE_ONCE = 0,
            
            /** Update the probe every frame. This provides better results for fast-moving dynamic objects (such as cars). However, it has a significant performance cost. Due to the cost, it's recommended to only use one ReflectionProbe with [constant UPDATE_ALWAYS] at most per scene. For all other use cases, use [constant UPDATE_ONCE]. */
            UPDATE_ALWAYS = 1,
        }
        enum AmbientMode {
            /** Do not apply any ambient lighting inside the [ReflectionProbe]'s box defined by its [member size]. */
            AMBIENT_DISABLED = 0,
            
            /** Apply automatically-sourced environment lighting inside the [ReflectionProbe]'s box defined by its [member size]. */
            AMBIENT_ENVIRONMENT = 1,
            
            /** Apply custom ambient lighting inside the [ReflectionProbe]'s box defined by its [member size]. See [member ambient_color] and [member ambient_color_energy]. */
            AMBIENT_COLOR = 2,
        }
    }
    /** Captures its surroundings to create fast, accurate reflections from a given point.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_reflectionprobe.html  
     */
    class ReflectionProbe extends VisualInstance3D {
        constructor(identifier?: any)
        /** Sets how frequently the [ReflectionProbe] is updated. Can be [constant UPDATE_ONCE] or [constant UPDATE_ALWAYS]. */
        get update_mode(): int64
        set update_mode(value: int64)
        
        /** Defines the reflection intensity. Intensity modulates the strength of the reflection. */
        get intensity(): float64
        set intensity(value: float64)
        
        /** The maximum distance away from the [ReflectionProbe] an object can be before it is culled. Decrease this to improve performance, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [member max_distance] will not always cull objects from reflections, especially if the reflection probe's box defined by its [member size] is already large.  
         */
        get max_distance(): float64
        set max_distance(value: float64)
        
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.  
         *      
         *  **Note:** To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Sets the origin offset to be used when this [ReflectionProbe] is in [member box_projection] mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection. */
        get origin_offset(): Vector3
        set origin_offset(value: Vector3)
        
        /** If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.  
         *      
         *  **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get box_projection(): boolean
        set box_projection(value: boolean)
        
        /** If `true`, reflections will ignore sky contribution. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [constant UPDATE_ALWAYS] [member update_mode]. */
        get enable_shadows(): boolean
        set enable_shadows(value: boolean)
        
        /** Sets the cull mask which determines what objects are drawn by this probe. Every [VisualInstance3D] with a layer included in this cull mask will be rendered by the probe. To improve performance, it is best to only include large objects which are likely to take up a lot of space in the reflection. */
        get cull_mask(): int64
        set cull_mask(value: int64)
        
        /** The automatic LOD bias to use for meshes rendered within the [ReflectionProbe] (this is analog to [member Viewport.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get mesh_lod_threshold(): float64
        set mesh_lod_threshold(value: float64)
        
        /** The ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. The ambient color will smoothly blend with other [ReflectionProbe]s and the rest of the scene (outside the [ReflectionProbe]'s box defined by its [member size]). */
        get ambient_mode(): int64
        set ambient_mode(value: int64)
        
        /** The custom ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambient_color(): Color
        set ambient_color(value: Color)
        
        /** The custom ambient color energy to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambient_color_energy(): float64
        set ambient_color_energy(value: float64)
    }
    class ReflectionProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Class for searching text for patterns using regular expressions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_regex.html  
     */
    class RegEx extends RefCounted {
        constructor(identifier?: any)
        /** Creates and compiles a new [RegEx] object. */
        static create_from_string(pattern: string): RegEx
        
        /** This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object. */
        clear(): void
        
        /** Compiles and assign the search pattern to use. Returns [constant OK] if the compilation is successful. If an error is encountered, details are printed to standard output and an error is returned. */
        compile(pattern: string): Error
        
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise `null`.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search(subject: string, offset: int64 = 0, end: int64 = -1): RegExMatch
        
        /** Searches the text for the compiled pattern. Returns an array of [RegExMatch] containers for each non-overlapping result. If no results were found, an empty array is returned instead.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search_all(subject: string, offset: int64 = 0, end: int64 = -1): Array
        
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        sub(subject: string, replacement: string, all: boolean = false, offset: int64 = 0, end: int64 = -1): string
        
        /** Returns whether this object has a valid search pattern assigned. */
        is_valid(): boolean
        
        /** Returns the original search pattern that was compiled. */
        get_pattern(): string
        
        /** Returns the number of capturing groups in compiled pattern. */
        get_group_count(): int64
        
        /** Returns an array of names of named capturing groups in the compiled pattern. They are ordered by appearance. */
        get_names(): PackedStringArray
    }
    /** Contains the results of a [RegEx] search.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_regexmatch.html  
     */
    class RegExMatch extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of capturing groups. */
        get_group_count(): int64
        
        /** Returns the substring of the match from the source string. Capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns an empty string if the group did not match or doesn't exist.  
         */
        get_string(name: any = <any> {}): string
        
        /** Returns the starting position of the match within the source string. The starting position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        get_start(name: any = <any> {}): int64
        
        /** Returns the end position of the match within the source string. The end position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        get_end(name: any = <any> {}): int64
        
        /** The source string used with the search pattern to find this matching result. */
        get subject(): string
        
        /** A dictionary of named groups and its corresponding group number. Only groups that were matched are included. If multiple groups have the same name, that name would refer to the first matching one. */
        get names(): Dictionary
        
        /** An [Array] of the match and its capturing groups. */
        get strings(): Array
    }
    /** RemoteTransform2D pushes its own [Transform2D] to another [Node2D] derived node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_remotetransform2d.html  
     */
    class RemoteTransform2D extends Node2D {
        constructor(identifier?: any)
        /** [RemoteTransform2D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        force_update_cache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform2D's position in the scene. */
        get remote_path(): NodePath
        set remote_path(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get use_global_coordinates(): boolean
        set use_global_coordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get update_position(): boolean
        set update_position(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get update_rotation(): boolean
        set update_rotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get update_scale(): boolean
        set update_scale(value: boolean)
    }
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_remotetransform3d.html  
     */
    class RemoteTransform3D extends Node3D {
        constructor(identifier?: any)
        /** [RemoteTransform3D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        force_update_cache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform3D's position in the scene. */
        get remote_path(): NodePath
        set remote_path(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get use_global_coordinates(): boolean
        set use_global_coordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get update_position(): boolean
        set update_position(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get update_rotation(): boolean
        set update_rotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get update_scale(): boolean
        set update_scale(value: boolean)
    }
    class RenameDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        rename(): void
    }
    /** Abstract scene buffers object, created for each viewport for which 3D rendering is done.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffers.html  
     */
    class RenderSceneBuffers extends RefCounted {
        constructor(identifier?: any)
        /** This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
        configure(config: RenderSceneBuffersConfiguration): void
    }
    /** Configuration object used to setup a [RenderSceneBuffers] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersconfiguration.html  
     */
    class RenderSceneBuffersConfiguration extends RefCounted {
        constructor(identifier?: any)
        /** The render target associated with these buffer. */
        get render_target(): RID
        set render_target(value: RID)
        
        /** The size of the 3D render buffer used for rendering. */
        get internal_size(): Vector2i
        set internal_size(value: Vector2i)
        
        /** The target (upscale) size if scaling is used. */
        get target_size(): Vector2i
        set target_size(value: Vector2i)
        
        /** The number of views we're rendering. */
        get view_count(): int64
        set view_count(value: int64)
        
        /** The requested scaling mode with which we upscale/downscale if [member internal_size] and [member target_size] are not equal. */
        get scaling_3d_mode(): int64
        set scaling_3d_mode(value: int64)
        
        /** The MSAA mode we're using for 3D rendering. */
        get msaa_3d(): int64
        set msaa_3d(value: int64)
        
        /** The requested screen space AA applied in post processing. */
        get screen_space_aa(): int64
        set screen_space_aa(value: int64)
        
        /** FSR Sharpness applicable if FSR upscaling is used. */
        get fsr_sharpness(): boolean
        set fsr_sharpness(value: boolean)
        
        /** Bias applied to mipmaps. */
        get texture_mipmap_bias(): boolean
        set texture_mipmap_bias(value: boolean)
    }
    /** This class allows for a RenderSceneBuffer implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersextension.html  
     */
    class RenderSceneBuffersExtension extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Implement this in GDExtension to handle the (re)sizing of a viewport. */
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        
        /** Implement this in GDExtension to record a new FSR sharpness value. */
        /* gdvirtual */ _set_fsr_sharpness(fsr_sharpness: float64): void
        
        /** Implement this in GDExtension to change the texture mipmap bias. */
        /* gdvirtual */ _set_texture_mipmap_bias(texture_mipmap_bias: float64): void
        
        /** Implement this in GDExtension to react to the debanding flag changing. */
        /* gdvirtual */ _set_use_debanding(use_debanding: boolean): void
    }
    class RenderSceneBuffersGLES3 extends RenderSceneBuffers {
        constructor(identifier?: any)
    }
    /** Abstract render scene buffer implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersrd.html  
     */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Returns `true` if a cached texture exists for this name. */
        has_texture(context: StringName, name: StringName): boolean
        
        /** Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists. */
        create_texture(context: StringName, name: StringName, data_format: RenderingDevice.DataFormat, usage_bits: int64, texture_samples: RenderingDevice.TextureSamples, size: Vector2i, layers: int64, mipmaps: int64, unique: boolean): RID
        
        /** Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists. */
        create_texture_from_format(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): RID
        
        /** Create a new texture view for an existing texture and cache this under the given view_name. Will return the existing teture view if it already exists. Will error if the source texture doesn't exist. */
        create_texture_view(context: StringName, name: StringName, view_name: StringName, view: RDTextureView): RID
        
        /** Returns a cached texture with this name. */
        get_texture(context: StringName, name: StringName): RID
        
        /** Returns the texture format information with which a cached texture was created. */
        get_texture_format(context: StringName, name: StringName): RDTextureFormat
        
        /** Returns a specific slice (layer or mipmap) for a cached texture. */
        get_texture_slice(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64): RID
        
        /** Returns a specific view of a slice (layer or mipmap) for a cached texture. */
        get_texture_slice_view(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64, view: RDTextureView): RID
        
        /** Returns the texture size of a given slice of a cached texture. */
        get_texture_slice_size(context: StringName, name: StringName, mipmap: int64): Vector2i
        
        /** Frees all buffers related to this context. */
        clear_context(context: StringName): void
        
        /** Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_color_texture(): RID
        
        /** Returns the specified layer from the color texture we are rendering 3D content to. */
        get_color_layer(layer: int64): RID
        
        /** Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_depth_texture(): RID
        
        /** Returns the specified layer from the depth texture we are rendering 3D content to. */
        get_depth_layer(layer: int64): RID
        
        /** Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_velocity_texture(): RID
        
        /** Returns the specified layer from the velocity texture we are rendering 3D content to. */
        get_velocity_layer(layer: int64): RID
        
        /** Returns the render target associated with this buffers object. */
        get_render_target(): RID
        
        /** Returns the view count for the associated viewport. */
        get_view_count(): int64
        
        /** Returns the internal size of the render buffer (size before upscaling) with which textures are created by default. */
        get_internal_size(): Vector2i
        
        /** Returns `true` if TAA is enabled. */
        get_use_taa(): boolean
    }
    namespace RenderingDevice {
        enum DeviceType {
            /** Rendering device type does not match any of the other enum values or is unknown. */
            DEVICE_TYPE_OTHER = 0,
            
            /** Rendering device is an integrated GPU, which is typically  *(but not always)*  slower than dedicated GPUs ([constant DEVICE_TYPE_DISCRETE_GPU]). On Android and iOS, the rendering device type is always considered to be [constant DEVICE_TYPE_INTEGRATED_GPU]. */
            DEVICE_TYPE_INTEGRATED_GPU = 1,
            
            /** Rendering device is a dedicated GPU, which is typically  *(but not always)*  faster than integrated GPUs ([constant DEVICE_TYPE_INTEGRATED_GPU]). */
            DEVICE_TYPE_DISCRETE_GPU = 2,
            
            /** Rendering device is an emulated GPU in a virtual environment. This is typically much slower than the host GPU, which means the expected performance level on a dedicated GPU will be roughly equivalent to [constant DEVICE_TYPE_INTEGRATED_GPU]. Virtual machine GPU passthrough (such as VFIO) will not report the device type as [constant DEVICE_TYPE_VIRTUAL_GPU]. Instead, the host GPU's device type will be reported as if the GPU was not emulated. */
            DEVICE_TYPE_VIRTUAL_GPU = 3,
            
            /** Rendering device is provided by software emulation (such as Lavapipe or [url=https://github.com/google/swiftshader]SwiftShader[/url]). This is the slowest kind of rendering device available; it's typically much slower than [constant DEVICE_TYPE_INTEGRATED_GPU]. */
            DEVICE_TYPE_CPU = 4,
            
            /** Represents the size of the [enum DeviceType] enum. */
            DEVICE_TYPE_MAX = 5,
        }
        enum DriverResource {
            /** Vulkan device driver resource. This is a "global" resource and ignores the RID passed in */
            DRIVER_RESOURCE_VULKAN_DEVICE = 0,
            
            /** Physical device (graphics card) driver resource. */
            DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE = 1,
            
            /** Vulkan instance driver resource. */
            DRIVER_RESOURCE_VULKAN_INSTANCE = 2,
            
            /** Vulkan queue driver resource. */
            DRIVER_RESOURCE_VULKAN_QUEUE = 3,
            
            /** Vulkan queue family index driver resource. */
            DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX = 4,
            
            /** Vulkan image driver resource. */
            DRIVER_RESOURCE_VULKAN_IMAGE = 5,
            
            /** Vulkan image view driver resource. */
            DRIVER_RESOURCE_VULKAN_IMAGE_VIEW = 6,
            
            /** Vulkan image native texture format driver resource. */
            DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT = 7,
            
            /** Vulkan sampler driver resource. */
            DRIVER_RESOURCE_VULKAN_SAMPLER = 8,
            
            /** Vulkan [url=https://vkguide.dev/docs/chapter-4/descriptors/]descriptor set[/url] driver resource. */
            DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET = 9,
            
            /** Vulkan buffer driver resource. */
            DRIVER_RESOURCE_VULKAN_BUFFER = 10,
            
            /** Vulkan compute pipeline driver resource. */
            DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE = 11,
            
            /** Vulkan render pipeline driver resource. */
            DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE = 12,
        }
        enum DataFormat {
            /** 4-bit-per-channel red/green channel data format, packed into 8 bits. Values are in the `[0.0, 1.0]` range.  
             *      
             *  **Note:** More information on all data formats can be found on the [url=https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html#_identification_of_formats]Identification of formats[/url] section of the Vulkan specification, as well as the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkFormat.html]VkFormat[/url] enum.  
             */
            DATA_FORMAT_R4G4_UNORM_PACK8 = 0,
            
            /** 4-bit-per-channel red/green/blue/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R4G4B4A4_UNORM_PACK16 = 1,
            
            /** 4-bit-per-channel blue/green/red/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B4G4R4A4_UNORM_PACK16 = 2,
            
            /** Red/green/blue channel data format with 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R5G6B5_UNORM_PACK16 = 3,
            
            /** Blue/green/red channel data format with 5 bits of blue, 6 bits of green and 5 bits of red, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B5G6R5_UNORM_PACK16 = 4,
            
            /** Red/green/blue/alpha channel data format with 5 bits of red, 6 bits of green, 5 bits of blue and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R5G5B5A1_UNORM_PACK16 = 5,
            
            /** Blue/green/red/alpha channel data format with 5 bits of blue, 6 bits of green, 5 bits of red and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B5G5R5A1_UNORM_PACK16 = 6,
            
            /** Alpha/red/green/blue channel data format with 1 bit of alpha, 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_A1R5G5B5_UNORM_PACK16 = 7,
            
            /** 8-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8_UNORM = 8,
            
            /** 8-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R8_SNORM = 9,
            
            /** 8-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_R8_USCALED = 10,
            
            /** 8-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_R8_SSCALED = 11,
            
            /** 8-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_R8_UINT = 12,
            
            /** 8-bit-per-channel signed integer red channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_R8_SINT = 13,
            
            /** 8-bit-per-channel unsigned floating-point red channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8_SRGB = 14,
            
            /** 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8_UNORM = 15,
            
            /** 8-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R8G8_SNORM = 16,
            
            /** 8-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_R8G8_USCALED = 17,
            
            /** 8-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_R8G8_SSCALED = 18,
            
            /** 8-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_R8G8_UINT = 19,
            
            /** 8-bit-per-channel signed integer red/green channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_R8G8_SINT = 20,
            
            /** 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8_SRGB = 21,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8_UNORM = 22,
            
            /** 8-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8_SNORM = 23,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_R8G8B8_USCALED = 24,
            
            /** 8-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_R8G8B8_SSCALED = 25,
            
            /** 8-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_R8G8B8_UINT = 26,
            
            /** 8-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_R8G8B8_SINT = 27,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8_SRGB = 28,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8_UNORM = 29,
            
            /** 8-bit-per-channel signed floating-point blue/green/red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8_SNORM = 30,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_B8G8R8_USCALED = 31,
            
            /** 8-bit-per-channel signed floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_B8G8R8_SSCALED = 32,
            
            /** 8-bit-per-channel unsigned integer blue/green/red channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_B8G8R8_UINT = 33,
            
            /** 8-bit-per-channel signed integer blue/green/red channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_B8G8R8_SINT = 34,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8_SRGB = 35,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8A8_UNORM = 36,
            
            /** 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8A8_SNORM = 37,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_R8G8B8A8_USCALED = 38,
            
            /** 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_R8G8B8A8_SSCALED = 39,
            
            /** 8-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_R8G8B8A8_UINT = 40,
            
            /** 8-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_R8G8B8A8_SINT = 41,
            
            /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R8G8B8A8_SRGB = 42,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8A8_UNORM = 43,
            
            /** 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8A8_SNORM = 44,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_B8G8R8A8_USCALED = 45,
            
            /** 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_B8G8R8A8_SSCALED = 46,
            
            /** 8-bit-per-channel unsigned integer blue/green/red/alpha channel data format. Values are in the `[0, 255]` range. */
            DATA_FORMAT_B8G8R8A8_UINT = 47,
            
            /** 8-bit-per-channel signed integer blue/green/red/alpha channel data format. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_B8G8R8A8_SINT = 48,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_B8G8R8A8_SRGB = 49,
            
            /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_A8B8G8R8_UNORM_PACK32 = 50,
            
            /** 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_A8B8G8R8_SNORM_PACK32 = 51,
            
            /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[0.0, 255.0]` range. */
            DATA_FORMAT_A8B8G8R8_USCALED_PACK32 = 52,
            
            /** 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[-127.0, 127.0]` range. */
            DATA_FORMAT_A8B8G8R8_SSCALED_PACK32 = 53,
            
            /** 8-bit-per-channel unsigned integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[0, 255]` range. */
            DATA_FORMAT_A8B8G8R8_UINT_PACK32 = 54,
            
            /** 8-bit-per-channel signed integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[-127, 127]` range. */
            DATA_FORMAT_A8B8G8R8_SINT_PACK32 = 55,
            
            /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value and non-linear sRGB encoding, packed in 32 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_A8B8G8R8_SRGB_PACK32 = 56,
            
            /** Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_A2R10G10B10_UNORM_PACK32 = 57,
            
            /** Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_A2R10G10B10_SNORM_PACK32 = 58,
            
            /** Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1023.0]` range for red/green/blue and `[0.0, 3.0]` for alpha. */
            DATA_FORMAT_A2R10G10B10_USCALED_PACK32 = 59,
            
            /** Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511.0, 511.0]` range for red/green/blue and `[-1.0, 1.0]` for alpha. */
            DATA_FORMAT_A2R10G10B10_SSCALED_PACK32 = 60,
            
            /** Unsigned integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0, 1023]` range for red/green/blue and `[0, 3]` for alpha. */
            DATA_FORMAT_A2R10G10B10_UINT_PACK32 = 61,
            
            /** Signed integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511, 511]` range for red/green/blue and `[-1, 1]` for alpha. */
            DATA_FORMAT_A2R10G10B10_SINT_PACK32 = 62,
            
            /** Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_A2B10G10R10_UNORM_PACK32 = 63,
            
            /** Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_A2B10G10R10_SNORM_PACK32 = 64,
            
            /** Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1023.0]` range for blue/green/red and `[0.0, 3.0]` for alpha. */
            DATA_FORMAT_A2B10G10R10_USCALED_PACK32 = 65,
            
            /** Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511.0, 511.0]` range for blue/green/red and `[-1.0, 1.0]` for alpha. */
            DATA_FORMAT_A2B10G10R10_SSCALED_PACK32 = 66,
            
            /** Unsigned integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0, 1023]` range for blue/green/red and `[0, 3]` for alpha. */
            DATA_FORMAT_A2B10G10R10_UINT_PACK32 = 67,
            
            /** Signed integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511, 511]` range for blue/green/red and `[-1, 1]` for alpha. */
            DATA_FORMAT_A2B10G10R10_SINT_PACK32 = 68,
            
            /** 16-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R16_UNORM = 69,
            
            /** 16-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R16_SNORM = 70,
            
            /** 16-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
            DATA_FORMAT_R16_USCALED = 71,
            
            /** 16-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
            DATA_FORMAT_R16_SSCALED = 72,
            
            /** 16-bit-per-channel unsigned integer red channel data format. Values are in the `[0.0, 65535]` range. */
            DATA_FORMAT_R16_UINT = 73,
            
            /** 16-bit-per-channel signed integer red channel data format. Values are in the `[-32767, 32767]` range. */
            DATA_FORMAT_R16_SINT = 74,
            
            /** 16-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
            DATA_FORMAT_R16_SFLOAT = 75,
            
            /** 16-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R16G16_UNORM = 76,
            
            /** 16-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R16G16_SNORM = 77,
            
            /** 16-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
            DATA_FORMAT_R16G16_USCALED = 78,
            
            /** 16-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
            DATA_FORMAT_R16G16_SSCALED = 79,
            
            /** 16-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0.0, 65535]` range. */
            DATA_FORMAT_R16G16_UINT = 80,
            
            /** 16-bit-per-channel signed integer red/green channel data format. Values are in the `[-32767, 32767]` range. */
            DATA_FORMAT_R16G16_SINT = 81,
            
            /** 16-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
            DATA_FORMAT_R16G16_SFLOAT = 82,
            
            /** 16-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R16G16B16_UNORM = 83,
            
            /** 16-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R16G16B16_SNORM = 84,
            
            /** 16-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
            DATA_FORMAT_R16G16B16_USCALED = 85,
            
            /** 16-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
            DATA_FORMAT_R16G16B16_SSCALED = 86,
            
            /** 16-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0.0, 65535]` range. */
            DATA_FORMAT_R16G16B16_UINT = 87,
            
            /** 16-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-32767, 32767]` range. */
            DATA_FORMAT_R16G16B16_SINT = 88,
            
            /** 16-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
            DATA_FORMAT_R16G16B16_SFLOAT = 89,
            
            /** 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R16G16B16A16_UNORM = 90,
            
            /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
            DATA_FORMAT_R16G16B16A16_SNORM = 91,
            
            /** 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
            DATA_FORMAT_R16G16B16A16_USCALED = 92,
            
            /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
            DATA_FORMAT_R16G16B16A16_SSCALED = 93,
            
            /** 16-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0.0, 65535]` range. */
            DATA_FORMAT_R16G16B16A16_UINT = 94,
            
            /** 16-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-32767, 32767]` range. */
            DATA_FORMAT_R16G16B16A16_SINT = 95,
            
            /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
            DATA_FORMAT_R16G16B16A16_SFLOAT = 96,
            
            /** 32-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^32 - 1]` range. */
            DATA_FORMAT_R32_UINT = 97,
            
            /** 32-bit-per-channel signed integer red channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
            DATA_FORMAT_R32_SINT = 98,
            
            /** 32-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
            DATA_FORMAT_R32_SFLOAT = 99,
            
            /** 32-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^32 - 1]` range. */
            DATA_FORMAT_R32G32_UINT = 100,
            
            /** 32-bit-per-channel signed integer red/green channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
            DATA_FORMAT_R32G32_SINT = 101,
            
            /** 32-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
            DATA_FORMAT_R32G32_SFLOAT = 102,
            
            /** 32-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^32 - 1]` range. */
            DATA_FORMAT_R32G32B32_UINT = 103,
            
            /** 32-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
            DATA_FORMAT_R32G32B32_SINT = 104,
            
            /** 32-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
            DATA_FORMAT_R32G32B32_SFLOAT = 105,
            
            /** 32-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^32 - 1]` range. */
            DATA_FORMAT_R32G32B32A32_UINT = 106,
            
            /** 32-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
            DATA_FORMAT_R32G32B32A32_SINT = 107,
            
            /** 32-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
            DATA_FORMAT_R32G32B32A32_SFLOAT = 108,
            
            /** 64-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^64 - 1]` range. */
            DATA_FORMAT_R64_UINT = 109,
            
            /** 64-bit-per-channel signed integer red channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
            DATA_FORMAT_R64_SINT = 110,
            
            /** 64-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
            DATA_FORMAT_R64_SFLOAT = 111,
            
            /** 64-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^64 - 1]` range. */
            DATA_FORMAT_R64G64_UINT = 112,
            
            /** 64-bit-per-channel signed integer red/green channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
            DATA_FORMAT_R64G64_SINT = 113,
            
            /** 64-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
            DATA_FORMAT_R64G64_SFLOAT = 114,
            
            /** 64-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^64 - 1]` range. */
            DATA_FORMAT_R64G64B64_UINT = 115,
            
            /** 64-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
            DATA_FORMAT_R64G64B64_SINT = 116,
            
            /** 64-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
            DATA_FORMAT_R64G64B64_SFLOAT = 117,
            
            /** 64-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^64 - 1]` range. */
            DATA_FORMAT_R64G64B64A64_UINT = 118,
            
            /** 64-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
            DATA_FORMAT_R64G64B64A64_SINT = 119,
            
            /** 64-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
            DATA_FORMAT_R64G64B64A64_SFLOAT = 120,
            
            /** Unsigned floating-point blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 10 bits of blue channel, 11 bits of green channel and 11 bits of red channel. */
            DATA_FORMAT_B10G11R11_UFLOAT_PACK32 = 121,
            
            /** Unsigned floating-point exposure/blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 5 bits of exposure, 9 bits of blue channel, 9 bits of green channel and 9 bits of red channel. */
            DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 122,
            
            /** 16-bit unsigned floating-point depth data format with normalized value. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_D16_UNORM = 123,
            
            /** 24-bit unsigned floating-point depth data format with normalized value, plus 8 unused bits, packed in 32 bits. Values for depth are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_X8_D24_UNORM_PACK32 = 124,
            
            /** 32-bit signed floating-point depth data format with the value stored as-is. */
            DATA_FORMAT_D32_SFLOAT = 125,
            
            /** 8-bit unsigned integer stencil data format. */
            DATA_FORMAT_S8_UINT = 126,
            
            /** 16-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range. */
            DATA_FORMAT_D16_UNORM_S8_UINT = 127,
            
            /** 24-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range. */
            DATA_FORMAT_D24_UNORM_S8_UINT = 128,
            
            /** 32-bit signed floating-point depth data format with the value stored as-is, plus 8 bits of stencil in unsigned integer format. Values for stencil are in the `[0, 255]` range. */
            DATA_FORMAT_D32_SFLOAT_S8_UINT = 129,
            
            /** VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1). */
            DATA_FORMAT_BC1_RGB_UNORM_BLOCK = 130,
            
            /** VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1). */
            DATA_FORMAT_BC1_RGB_SRGB_BLOCK = 131,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1). */
            DATA_FORMAT_BC1_RGBA_UNORM_BLOCK = 132,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1). */
            DATA_FORMAT_BC1_RGBA_SRGB_BLOCK = 133,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3). */
            DATA_FORMAT_BC2_UNORM_BLOCK = 134,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3). */
            DATA_FORMAT_BC2_SRGB_BLOCK = 135,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5). */
            DATA_FORMAT_BC3_UNORM_BLOCK = 136,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5). */
            DATA_FORMAT_BC3_SRGB_BLOCK = 137,
            
            /** VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression. */
            DATA_FORMAT_BC4_UNORM_BLOCK = 138,
            
            /** VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression. */
            DATA_FORMAT_BC4_SNORM_BLOCK = 139,
            
            /** VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC). */
            DATA_FORMAT_BC5_UNORM_BLOCK = 140,
            
            /** VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC). */
            DATA_FORMAT_BC5_SNORM_BLOCK = 141,
            
            /** VRAM-compressed unsigned red/green/blue channel data format with the floating-point value stored as-is. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC6H texture compression (also known as BPTC HDR). */
            DATA_FORMAT_BC6H_UFLOAT_BLOCK = 142,
            
            /** VRAM-compressed signed red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Using BC7 texture compression (also known as BPTC HDR). */
            DATA_FORMAT_BC6H_SFLOAT_BLOCK = 143,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR. */
            DATA_FORMAT_BC7_UNORM_BLOCK = 144,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR. */
            DATA_FORMAT_BC7_SRGB_BLOCK = 145,
            
            /** VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 146,
            
            /** VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 147,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 148,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 149,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 150,
            
            /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression. */
            DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 151,
            
            /** 11-bit VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_EAC_R11_UNORM_BLOCK = 152,
            
            /** 11-bit VRAM-compressed signed red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_EAC_R11_SNORM_BLOCK = 153,
            
            /** 11-bit VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_EAC_R11G11_UNORM_BLOCK = 154,
            
            /** 11-bit VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
            DATA_FORMAT_EAC_R11G11_SNORM_BLOCK = 155,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_4x4_UNORM_BLOCK = 156,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_4x4_SRGB_BLOCK = 157,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_5x4_UNORM_BLOCK = 158,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_5x4_SRGB_BLOCK = 159,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_5x5_UNORM_BLOCK = 160,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_5x5_SRGB_BLOCK = 161,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_6x5_UNORM_BLOCK = 162,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_6x5_SRGB_BLOCK = 163,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_6x6_UNORM_BLOCK = 164,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_6x6_SRGB_BLOCK = 165,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x5_UNORM_BLOCK = 166,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x5_SRGB_BLOCK = 167,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x6_UNORM_BLOCK = 168,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x6_SRGB_BLOCK = 169,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x8_UNORM_BLOCK = 170,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_8x8_SRGB_BLOCK = 171,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x5_UNORM_BLOCK = 172,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x5_SRGB_BLOCK = 173,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x6_UNORM_BLOCK = 174,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x6_SRGB_BLOCK = 175,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x8_UNORM_BLOCK = 176,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x8_SRGB_BLOCK = 177,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x10_UNORM_BLOCK = 178,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_10x10_SRGB_BLOCK = 179,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_12x10_UNORM_BLOCK = 180,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_12x10_SRGB_BLOCK = 181,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_12x12_UNORM_BLOCK = 182,
            
            /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
            DATA_FORMAT_ASTC_12x12_SRGB_BLOCK = 183,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G8B8G8R8_422_UNORM = 184,
            
            /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_B8G8R8G8_422_UNORM = 185,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM = 186,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM = 187,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM = 188,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM = 189,
            
            /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM = 190,
            
            /** 10-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R10X6_UNORM_PACK16 = 191,
            
            /** 10-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R10X6G10X6_UNORM_2PACK16 = 192,
            
            /** 10-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 193,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
            DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 194,
            
            /** 10-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
            DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 195,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 196,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 197,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 198,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 199,
            
            /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 200,
            
            /** 12-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R12X4_UNORM_PACK16 = 201,
            
            /** 12-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R12X4G12X4_UNORM_2PACK16 = 202,
            
            /** 12-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 203,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
            DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 204,
            
            /** 12-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
            DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 205,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 206,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 207,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 208,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 209,
            
            /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 210,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G16B16G16R16_422_UNORM = 211,
            
            /** 16-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_B16G16R16G16_422_UNORM = 212,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM = 213,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM = 214,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM = 215,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
            DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM = 216,
            
            /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
            DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM = 217,
            
            /** Represents the size of the [enum DataFormat] enum. */
            DATA_FORMAT_MAX = 218,
        }
        enum BarrierMask {
            /** Vertex shader barrier mask. */
            BARRIER_MASK_VERTEX = 1,
            
            /** Fragment shader barrier mask. */
            BARRIER_MASK_FRAGMENT = 8,
            
            /** Compute barrier mask. */
            BARRIER_MASK_COMPUTE = 2,
            
            /** Transfer barrier mask. */
            BARRIER_MASK_TRANSFER = 4,
            
            /** Raster barrier mask (vertex and fragment). Equivalent to `BARRIER_MASK_VERTEX | BARRIER_MASK_FRAGMENT`. */
            BARRIER_MASK_RASTER = 9,
            
            /** Barrier mask for all types (vertex, fragment, compute, transfer). */
            BARRIER_MASK_ALL_BARRIERS = 32767,
            
            /** No barrier for any type. */
            BARRIER_MASK_NO_BARRIER = 32768,
        }
        enum TextureType {
            /** 1-dimensional texture. */
            TEXTURE_TYPE_1D = 0,
            
            /** 2-dimensional texture. */
            TEXTURE_TYPE_2D = 1,
            
            /** 3-dimensional texture. */
            TEXTURE_TYPE_3D = 2,
            
            /** [Cubemap] texture. */
            TEXTURE_TYPE_CUBE = 3,
            
            /** Array of 1-dimensional textures. */
            TEXTURE_TYPE_1D_ARRAY = 4,
            
            /** Array of 2-dimensional textures. */
            TEXTURE_TYPE_2D_ARRAY = 5,
            
            /** Array of [Cubemap] textures. */
            TEXTURE_TYPE_CUBE_ARRAY = 6,
            
            /** Represents the size of the [enum TextureType] enum. */
            TEXTURE_TYPE_MAX = 7,
        }
        enum TextureSamples {
            /** Perform 1 texture sample (this is the fastest but lowest-quality for antialiasing). */
            TEXTURE_SAMPLES_1 = 0,
            
            /** Perform 2 texture samples. */
            TEXTURE_SAMPLES_2 = 1,
            
            /** Perform 4 texture samples. */
            TEXTURE_SAMPLES_4 = 2,
            
            /** Perform 8 texture samples. Not supported on mobile GPUs (including Apple Silicon). */
            TEXTURE_SAMPLES_8 = 3,
            
            /** Perform 16 texture samples. Not supported on mobile GPUs and many desktop GPUs. */
            TEXTURE_SAMPLES_16 = 4,
            
            /** Perform 32 texture samples. Not supported on most GPUs. */
            TEXTURE_SAMPLES_32 = 5,
            
            /** Perform 64 texture samples (this is the slowest but highest-quality for antialiasing). Not supported on most GPUs. */
            TEXTURE_SAMPLES_64 = 6,
            
            /** Represents the size of the [enum TextureSamples] enum. */
            TEXTURE_SAMPLES_MAX = 7,
        }
        enum TextureUsageBits {
            /** Texture can be sampled. */
            TEXTURE_USAGE_SAMPLING_BIT = 1,
            
            /** Texture can be used as a color attachment in a framebuffer. */
            TEXTURE_USAGE_COLOR_ATTACHMENT_BIT = 2,
            
            /** Texture can be used as a depth/stencil attachment in a framebuffer. */
            TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT = 4,
            
            /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url]. */
            TEXTURE_USAGE_STORAGE_BIT = 8,
            
            /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url] with support for atomic operations. */
            TEXTURE_USAGE_STORAGE_ATOMIC_BIT = 16,
            
            /** Texture can be read back on the CPU using [method texture_get_data] faster than without this bit, since it is always kept in the system memory. */
            TEXTURE_USAGE_CPU_READ_BIT = 32,
            
            /** Texture can be updated using [method texture_update]. */
            TEXTURE_USAGE_CAN_UPDATE_BIT = 64,
            
            /** Texture can be a source for [method texture_copy]. */
            TEXTURE_USAGE_CAN_COPY_FROM_BIT = 128,
            
            /** Texture can be a destination for [method texture_copy]. */
            TEXTURE_USAGE_CAN_COPY_TO_BIT = 256,
            
            /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-inputattachment]input attachment[/url] in a framebuffer. */
            TEXTURE_USAGE_INPUT_ATTACHMENT_BIT = 512,
        }
        enum TextureSwizzle {
            /** Return the sampled value as-is. */
            TEXTURE_SWIZZLE_IDENTITY = 0,
            
            /** Always return `0.0` when sampling. */
            TEXTURE_SWIZZLE_ZERO = 1,
            
            /** Always return `1.0` when sampling. */
            TEXTURE_SWIZZLE_ONE = 2,
            
            /** Sample the red color channel. */
            TEXTURE_SWIZZLE_R = 3,
            
            /** Sample the green color channel. */
            TEXTURE_SWIZZLE_G = 4,
            
            /** Sample the blue color channel. */
            TEXTURE_SWIZZLE_B = 5,
            
            /** Sample the alpha channel. */
            TEXTURE_SWIZZLE_A = 6,
            
            /** Represents the size of the [enum TextureSwizzle] enum. */
            TEXTURE_SWIZZLE_MAX = 7,
        }
        enum TextureSliceType {
            /** 2-dimensional texture slice. */
            TEXTURE_SLICE_2D = 0,
            
            /** Cubemap texture slice. */
            TEXTURE_SLICE_CUBEMAP = 1,
            
            /** 3-dimensional texture slice. */
            TEXTURE_SLICE_3D = 2,
        }
        enum SamplerFilter {
            /** Nearest-neighbor sampler filtering. Sampling at higher resolutions than the source will result in a pixelated look. */
            SAMPLER_FILTER_NEAREST = 0,
            
            /** Bilinear sampler filtering. Sampling at higher resolutions than the source will result in a blurry look. */
            SAMPLER_FILTER_LINEAR = 1,
        }
        enum SamplerRepeatMode {
            /** Sample with repeating enabled. */
            SAMPLER_REPEAT_MODE_REPEAT = 0,
            
            /** Sample with mirrored repeating enabled. When sampling outside the `[0.0, 1.0]` range, return a mirrored version of the sampler. This mirrored version is mirrored again if sampling further away, with the pattern repeating indefinitely. */
            SAMPLER_REPEAT_MODE_MIRRORED_REPEAT = 1,
            
            /** Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the color of the last pixel on the edge. */
            SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE = 2,
            
            /** Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the specified [member RDSamplerState.border_color]. */
            SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER = 3,
            
            /** Sample with mirrored repeating enabled, but only once. When sampling in the `[-1.0, 0.0]` range, return a mirrored version of the sampler. When sampling outside the `[-1.0, 1.0]` range, return the color of the last pixel on the edge. */
            SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE = 4,
            
            /** Represents the size of the [enum SamplerRepeatMode] enum. */
            SAMPLER_REPEAT_MODE_MAX = 5,
        }
        enum SamplerBorderColor {
            /** Return a floating-point transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK = 0,
            
            /** Return a integer transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK = 1,
            
            /** Return a floating-point opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK = 2,
            
            /** Return a integer opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK = 3,
            
            /** Return a floating-point opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE = 4,
            
            /** Return a integer opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
            SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE = 5,
            
            /** Represents the size of the [enum SamplerBorderColor] enum. */
            SAMPLER_BORDER_COLOR_MAX = 6,
        }
        enum VertexFrequency {
            /** Vertex attribute addressing is a function of the vertex. This is used to specify the rate at which vertex attributes are pulled from buffers. */
            VERTEX_FREQUENCY_VERTEX = 0,
            
            /** Vertex attribute addressing is a function of the instance index. This is used to specify the rate at which vertex attributes are pulled from buffers. */
            VERTEX_FREQUENCY_INSTANCE = 1,
        }
        enum IndexBufferFormat {
            /** Index buffer in 16-bit unsigned integer format. This limits the maximum index that can be specified to `65535`. */
            INDEX_BUFFER_FORMAT_UINT16 = 0,
            
            /** Index buffer in 32-bit unsigned integer format. This limits the maximum index that can be specified to `4294967295`. */
            INDEX_BUFFER_FORMAT_UINT32 = 1,
        }
        enum StorageBufferUsage {
            STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT = 1,
        }
        enum UniformType {
            /** Sampler uniform. */
            UNIFORM_TYPE_SAMPLER = 0,
            
            /** Sampler uniform with a texture. */
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE = 1,
            
            /** Texture uniform. */
            UNIFORM_TYPE_TEXTURE = 2,
            
            /** Image uniform. */
            UNIFORM_TYPE_IMAGE = 3,
            
            /** Texture buffer uniform. */
            UNIFORM_TYPE_TEXTURE_BUFFER = 4,
            
            /** Sampler uniform with a texture buffer. */
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER = 5,
            
            /** Image buffer uniform. */
            UNIFORM_TYPE_IMAGE_BUFFER = 6,
            
            /** Uniform buffer uniform. */
            UNIFORM_TYPE_UNIFORM_BUFFER = 7,
            
            /** [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]Storage buffer[/url] uniform. */
            UNIFORM_TYPE_STORAGE_BUFFER = 8,
            
            /** Input attachment uniform. */
            UNIFORM_TYPE_INPUT_ATTACHMENT = 9,
            
            /** Represents the size of the [enum UniformType] enum. */
            UNIFORM_TYPE_MAX = 10,
        }
        enum RenderPrimitive {
            /** Point rendering primitive (with constant size, regardless of distance from camera). */
            RENDER_PRIMITIVE_POINTS = 0,
            
            /** Line list rendering primitive. Lines are drawn separated from each other. */
            RENDER_PRIMITIVE_LINES = 1,
            
            /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-lists-with-adjacency]Line list rendering primitive with adjacency.[/url]  
             *      
             *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
             */
            RENDER_PRIMITIVE_LINES_WITH_ADJACENCY = 2,
            
            /** Line strip rendering primitive. Lines drawn are connected to the previous vertex. */
            RENDER_PRIMITIVE_LINESTRIPS = 3,
            
            /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-strips-with-adjacency]Line strip rendering primitive with adjacency.[/url]  
             *      
             *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
             */
            RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY = 4,
            
            /** Triangle list rendering primitive. Triangles are drawn separated from each other. */
            RENDER_PRIMITIVE_TRIANGLES = 5,
            
            /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-lists-with-adjacency]Triangle list rendering primitive with adjacency.[/url]  
             *       
             *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
             */
            RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY = 6,
            
            /** Triangle strip rendering primitive. Triangles drawn are connected to the previous triangle. */
            RENDER_PRIMITIVE_TRIANGLE_STRIPS = 7,
            
            /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-strips-with-adjacency]Triangle strip rendering primitive with adjacency.[/url]  
             *      
             *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
             */
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY = 8,
            
            /** Triangle strip rendering primitive with  *primitive restart*  enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.  
             *      
             *  **Note:** Only compatible with indexed draws.  
             */
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX = 9,
            
            /** Tessellation patch rendering primitive. Only useful with tessellation shaders, which can be used to deform these patches. */
            RENDER_PRIMITIVE_TESSELATION_PATCH = 10,
            
            /** Represents the size of the [enum RenderPrimitive] enum. */
            RENDER_PRIMITIVE_MAX = 11,
        }
        enum PolygonCullMode {
            /** Do not use polygon front face or backface culling. */
            POLYGON_CULL_DISABLED = 0,
            
            /** Use polygon frontface culling (faces pointing towards the camera are hidden). */
            POLYGON_CULL_FRONT = 1,
            
            /** Use polygon backface culling (faces pointing away from the camera are hidden). */
            POLYGON_CULL_BACK = 2,
        }
        enum PolygonFrontFace {
            /** Clockwise winding order to determine which face of a polygon is its front face. */
            POLYGON_FRONT_FACE_CLOCKWISE = 0,
            
            /** Counter-clockwise winding order to determine which face of a polygon is its front face. */
            POLYGON_FRONT_FACE_COUNTER_CLOCKWISE = 1,
        }
        enum StencilOperation {
            /** Keep the current stencil value. */
            STENCIL_OP_KEEP = 0,
            
            /** Set the stencil value to `0`. */
            STENCIL_OP_ZERO = 1,
            
            /** Replace the existing stencil value with the new one. */
            STENCIL_OP_REPLACE = 2,
            
            /** Increment the existing stencil value and clamp to the maximum representable unsigned value if reached. Stencil bits are considered as an unsigned integer. */
            STENCIL_OP_INCREMENT_AND_CLAMP = 3,
            
            /** Decrement the existing stencil value and clamp to the minimum value if reached. Stencil bits are considered as an unsigned integer. */
            STENCIL_OP_DECREMENT_AND_CLAMP = 4,
            
            /** Bitwise-invert the existing stencil value. */
            STENCIL_OP_INVERT = 5,
            
            /** Increment the stencil value and wrap around to `0` if reaching the maximum representable unsigned. Stencil bits are considered as an unsigned integer. */
            STENCIL_OP_INCREMENT_AND_WRAP = 6,
            
            /** Decrement the stencil value and wrap around to the maximum representable unsigned if reaching the minimum. Stencil bits are considered as an unsigned integer. */
            STENCIL_OP_DECREMENT_AND_WRAP = 7,
            
            /** Represents the size of the [enum StencilOperation] enum. */
            STENCIL_OP_MAX = 8,
        }
        enum CompareOperator {
            /** "Never" comparison (opposite of [constant COMPARE_OP_ALWAYS]). */
            COMPARE_OP_NEVER = 0,
            
            /** "Less than" comparison. */
            COMPARE_OP_LESS = 1,
            
            /** "Equal" comparison. */
            COMPARE_OP_EQUAL = 2,
            
            /** "Less than or equal" comparison. */
            COMPARE_OP_LESS_OR_EQUAL = 3,
            
            /** "Greater than" comparison. */
            COMPARE_OP_GREATER = 4,
            
            /** "Not equal" comparison. */
            COMPARE_OP_NOT_EQUAL = 5,
            
            /** "Greater than or equal" comparison. */
            COMPARE_OP_GREATER_OR_EQUAL = 6,
            
            /** "Always" comparison (opposite of [constant COMPARE_OP_NEVER]). */
            COMPARE_OP_ALWAYS = 7,
            
            /** Represents the size of the [enum CompareOperator] enum. */
            COMPARE_OP_MAX = 8,
        }
        enum LogicOperation {
            /** Clear logic operation (result is always `0`). See also [constant LOGIC_OP_SET]. */
            LOGIC_OP_CLEAR = 0,
            
            /** AND logic operation. */
            LOGIC_OP_AND = 1,
            
            /** AND logic operation with the  *destination*  operand being inverted. See also [constant LOGIC_OP_AND_INVERTED]. */
            LOGIC_OP_AND_REVERSE = 2,
            
            /** Copy logic operation (keeps the  *source*  value as-is). See also [constant LOGIC_OP_COPY_INVERTED] and [constant LOGIC_OP_NO_OP]. */
            LOGIC_OP_COPY = 3,
            
            /** AND logic operation with the  *source*  operand being inverted. See also [constant LOGIC_OP_AND_REVERSE]. */
            LOGIC_OP_AND_INVERTED = 4,
            
            /** No-op logic operation (keeps the  *destination*  value as-is). See also [constant LOGIC_OP_COPY]. */
            LOGIC_OP_NO_OP = 5,
            
            /** Exclusive or (XOR) logic operation. */
            LOGIC_OP_XOR = 6,
            
            /** OR logic operation. */
            LOGIC_OP_OR = 7,
            
            /** Not-OR (NOR) logic operation. */
            LOGIC_OP_NOR = 8,
            
            /** Not-XOR (XNOR) logic operation. */
            LOGIC_OP_EQUIVALENT = 9,
            
            /** Invert logic operation. */
            LOGIC_OP_INVERT = 10,
            
            /** OR logic operation with the  *destination*  operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
            LOGIC_OP_OR_REVERSE = 11,
            
            /** NOT logic operation (inverts the value). See also [constant LOGIC_OP_COPY]. */
            LOGIC_OP_COPY_INVERTED = 12,
            
            /** OR logic operation with the  *source*  operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
            LOGIC_OP_OR_INVERTED = 13,
            
            /** Not-AND (NAND) logic operation. */
            LOGIC_OP_NAND = 14,
            
            /** SET logic operation (result is always `1`). See also [constant LOGIC_OP_CLEAR]. */
            LOGIC_OP_SET = 15,
            
            /** Represents the size of the [enum LogicOperation] enum. */
            LOGIC_OP_MAX = 16,
        }
        enum BlendFactor {
            /** Constant `0.0` blend factor. */
            BLEND_FACTOR_ZERO = 0,
            
            /** Constant `1.0` blend factor. */
            BLEND_FACTOR_ONE = 1,
            
            /** Color blend factor is `source color`. Alpha blend factor is `source alpha`. */
            BLEND_FACTOR_SRC_COLOR = 2,
            
            /** Color blend factor is `1.0 - source color`. Alpha blend factor is `1.0 - source alpha`. */
            BLEND_FACTOR_ONE_MINUS_SRC_COLOR = 3,
            
            /** Color blend factor is `destination color`. Alpha blend factor is `destination alpha`. */
            BLEND_FACTOR_DST_COLOR = 4,
            
            /** Color blend factor is `1.0 - destination color`. Alpha blend factor is `1.0 - destination alpha`. */
            BLEND_FACTOR_ONE_MINUS_DST_COLOR = 5,
            
            /** Color and alpha blend factor is `source alpha`. */
            BLEND_FACTOR_SRC_ALPHA = 6,
            
            /** Color and alpha blend factor is `1.0 - source alpha`. */
            BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = 7,
            
            /** Color and alpha blend factor is `destination alpha`. */
            BLEND_FACTOR_DST_ALPHA = 8,
            
            /** Color and alpha blend factor is `1.0 - destination alpha`. */
            BLEND_FACTOR_ONE_MINUS_DST_ALPHA = 9,
            
            /** Color blend factor is `blend constant color`. Alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]). */
            BLEND_FACTOR_CONSTANT_COLOR = 10,
            
            /** Color blend factor is `1.0 - blend constant color`. Alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]). */
            BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = 11,
            
            /** Color and alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]). */
            BLEND_FACTOR_CONSTANT_ALPHA = 12,
            
            /** Color and alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]). */
            BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = 13,
            
            /** Color blend factor is `min(source alpha, 1.0 - destination alpha)`. Alpha blend factor is `1.0`. */
            BLEND_FACTOR_SRC_ALPHA_SATURATE = 14,
            
            /** Color blend factor is `second source color`. Alpha blend factor is `second source alpha`. Only relevant for dual-source blending. */
            BLEND_FACTOR_SRC1_COLOR = 15,
            
            /** Color blend factor is `1.0 - second source color`. Alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending. */
            BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = 16,
            
            /** Color and alpha blend factor is `second source alpha`. Only relevant for dual-source blending. */
            BLEND_FACTOR_SRC1_ALPHA = 17,
            
            /** Color and alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending. */
            BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = 18,
            
            /** Represents the size of the [enum BlendFactor] enum. */
            BLEND_FACTOR_MAX = 19,
        }
        enum BlendOperation {
            /** Additive blending operation (`source + destination`). */
            BLEND_OP_ADD = 0,
            
            /** Subtractive blending operation (`source - destination`). */
            BLEND_OP_SUBTRACT = 1,
            
            /** Reverse subtractive blending operation (`destination - source`). */
            BLEND_OP_REVERSE_SUBTRACT = 2,
            
            /** Minimum blending operation (keep the lowest value of the two). */
            BLEND_OP_MINIMUM = 3,
            
            /** Maximum blending operation (keep the highest value of the two). */
            BLEND_OP_MAXIMUM = 4,
            
            /** Represents the size of the [enum BlendOperation] enum. */
            BLEND_OP_MAX = 5,
        }
        enum PipelineDynamicStateFlags {
            DYNAMIC_STATE_LINE_WIDTH = 1,
            DYNAMIC_STATE_DEPTH_BIAS = 2,
            DYNAMIC_STATE_BLEND_CONSTANTS = 4,
            DYNAMIC_STATE_DEPTH_BOUNDS = 8,
            DYNAMIC_STATE_STENCIL_COMPARE_MASK = 16,
            DYNAMIC_STATE_STENCIL_WRITE_MASK = 32,
            DYNAMIC_STATE_STENCIL_REFERENCE = 64,
        }
        enum InitialAction {
            /** Start rendering and clear the whole framebuffer. */
            INITIAL_ACTION_CLEAR = 0,
            
            /** Start rendering and clear the framebuffer in the specified region. */
            INITIAL_ACTION_CLEAR_REGION = 1,
            
            /** Continue rendering and clear the framebuffer in the specified region. Framebuffer must have been left in [constant FINAL_ACTION_CONTINUE] state as the final action previously. */
            INITIAL_ACTION_CLEAR_REGION_CONTINUE = 2,
            
            /** Start rendering, but keep attached color texture contents. If the framebuffer was previously used to read in a shader, this will automatically insert a layout transition. */
            INITIAL_ACTION_KEEP = 3,
            
            /** Start rendering, ignore what is there; write above it. In general, this is the fastest option when you will be writing every single pixel and you don't need a clear color. */
            INITIAL_ACTION_DROP = 4,
            
            /** Continue rendering. Framebuffer must have been left in [constant FINAL_ACTION_CONTINUE] state as the final action previously. */
            INITIAL_ACTION_CONTINUE = 5,
            
            /** Represents the size of the [enum InitialAction] enum. */
            INITIAL_ACTION_MAX = 6,
        }
        enum FinalAction {
            /** Store the texture for reading and make it read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit (only applies to color, depth and stencil attachments). */
            FINAL_ACTION_READ = 0,
            
            /** Discard the texture data and make it read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit (only applies to color, depth and stencil attachments). */
            FINAL_ACTION_DISCARD = 1,
            
            /** Store the texture and continue for further processing. Similar to [constant FINAL_ACTION_READ], but does not make the texture read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit. */
            FINAL_ACTION_CONTINUE = 2,
            
            /** Represents the size of the [enum FinalAction] enum. */
            FINAL_ACTION_MAX = 3,
        }
        enum ShaderStage {
            /** Vertex shader stage. This can be used to manipulate vertices from a shader (but not create new vertices). */
            SHADER_STAGE_VERTEX = 0,
            
            /** Fragment shader stage (called "pixel shader" in Direct3D). This can be used to manipulate pixels from a shader. */
            SHADER_STAGE_FRAGMENT = 1,
            
            /** Tessellation control shader stage. This can be used to create additional geometry from a shader. */
            SHADER_STAGE_TESSELATION_CONTROL = 2,
            
            /** Tessellation evaluation shader stage. This can be used to create additional geometry from a shader. */
            SHADER_STAGE_TESSELATION_EVALUATION = 3,
            
            /** Compute shader stage. This can be used to run arbitrary computing tasks in a shader, performing them on the GPU instead of the CPU. */
            SHADER_STAGE_COMPUTE = 4,
            
            /** Represents the size of the [enum ShaderStage] enum. */
            SHADER_STAGE_MAX = 5,
            
            /** Vertex shader stage bit (see also [constant SHADER_STAGE_VERTEX]). */
            SHADER_STAGE_VERTEX_BIT = 1,
            
            /** Fragment shader stage bit (see also [constant SHADER_STAGE_FRAGMENT]). */
            SHADER_STAGE_FRAGMENT_BIT = 2,
            
            /** Tessellation control shader stage bit (see also [constant SHADER_STAGE_TESSELATION_CONTROL]). */
            SHADER_STAGE_TESSELATION_CONTROL_BIT = 4,
            
            /** Tessellation evaluation shader stage bit (see also [constant SHADER_STAGE_TESSELATION_EVALUATION]). */
            SHADER_STAGE_TESSELATION_EVALUATION_BIT = 8,
            
            /** Compute shader stage bit (see also [constant SHADER_STAGE_COMPUTE]). */
            SHADER_STAGE_COMPUTE_BIT = 16,
        }
        enum ShaderLanguage {
            /** Khronos' GLSL shading language (used natively by OpenGL and Vulkan). This is the language used for core Godot shaders. */
            SHADER_LANGUAGE_GLSL = 0,
            
            /** Microsoft's High-Level Shading Language (used natively by Direct3D, but can also be used in Vulkan). */
            SHADER_LANGUAGE_HLSL = 1,
        }
        enum PipelineSpecializationConstantType {
            /** Boolean specialization constant. */
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL = 0,
            
            /** Integer specialization constant. */
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT = 1,
            
            /** Floating-point specialization constant. */
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT = 2,
        }
        enum Limit {
            /** Maximum number of uniform sets that can be bound at a given time. */
            LIMIT_MAX_BOUND_UNIFORM_SETS = 0,
            
            /** Maximum number of color framebuffer attachments that can be used at a given time. */
            LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS = 1,
            
            /** Maximum number of textures that can be used per uniform set. */
            LIMIT_MAX_TEXTURES_PER_UNIFORM_SET = 2,
            
            /** Maximum number of samplers that can be used per uniform set. */
            LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET = 3,
            
            /** Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per uniform set. */
            LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET = 4,
            
            /** Maximum number of storage images per uniform set. */
            LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET = 5,
            
            /** Maximum number of uniform buffers per uniform set. */
            LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET = 6,
            
            /** Maximum index for an indexed draw command. */
            LIMIT_MAX_DRAW_INDEXED_INDEX = 7,
            
            /** Maximum height of a framebuffer (in pixels). */
            LIMIT_MAX_FRAMEBUFFER_HEIGHT = 8,
            
            /** Maximum width of a framebuffer (in pixels). */
            LIMIT_MAX_FRAMEBUFFER_WIDTH = 9,
            
            /** Maximum number of texture array layers. */
            LIMIT_MAX_TEXTURE_ARRAY_LAYERS = 10,
            
            /** Maximum supported 1-dimensional texture size (in pixels on a single axis). */
            LIMIT_MAX_TEXTURE_SIZE_1D = 11,
            
            /** Maximum supported 2-dimensional texture size (in pixels on a single axis). */
            LIMIT_MAX_TEXTURE_SIZE_2D = 12,
            
            /** Maximum supported 3-dimensional texture size (in pixels on a single axis). */
            LIMIT_MAX_TEXTURE_SIZE_3D = 13,
            
            /** Maximum supported cubemap texture size (in pixels on a single axis of a single face). */
            LIMIT_MAX_TEXTURE_SIZE_CUBE = 14,
            
            /** Maximum number of textures per shader stage. */
            LIMIT_MAX_TEXTURES_PER_SHADER_STAGE = 15,
            
            /** Maximum number of samplers per shader stage. */
            LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE = 16,
            
            /** Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per shader stage. */
            LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE = 17,
            
            /** Maximum number of storage images per shader stage. */
            LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE = 18,
            
            /** Maximum number of uniform buffers per uniform set. */
            LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE = 19,
            
            /** Maximum size of a push constant. A lot of devices are limited to 128 bytes, so try to avoid exceeding 128 bytes in push constants to ensure compatibility even if your GPU is reporting a higher value. */
            LIMIT_MAX_PUSH_CONSTANT_SIZE = 20,
            
            /** Maximum size of a uniform buffer. */
            LIMIT_MAX_UNIFORM_BUFFER_SIZE = 21,
            
            /** Maximum vertex input attribute offset. */
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET = 22,
            
            /** Maximum number of vertex input attributes. */
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES = 23,
            
            /** Maximum number of vertex input bindings. */
            LIMIT_MAX_VERTEX_INPUT_BINDINGS = 24,
            
            /** Maximum vertex input binding stride. */
            LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE = 25,
            
            /** Minimum uniform buffer offset alignment. */
            LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 26,
            
            /** Maximum shared memory size for compute shaders. */
            LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE = 27,
            
            /** Maximum number of workgroups for compute shaders on the X axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X = 28,
            
            /** Maximum number of workgroups for compute shaders on the Y axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y = 29,
            
            /** Maximum number of workgroups for compute shaders on the Z axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z = 30,
            
            /** Maximum number of workgroup invocations for compute shaders. */
            LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS = 31,
            
            /** Maximum workgroup size for compute shaders on the X axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X = 32,
            
            /** Maximum workgroup size for compute shaders on the Y axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y = 33,
            
            /** Maximum workgroup size for compute shaders on the Z axis. */
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z = 34,
            
            /** Maximum viewport width (in pixels). */
            LIMIT_MAX_VIEWPORT_DIMENSIONS_X = 35,
            
            /** Maximum viewport height (in pixels). */
            LIMIT_MAX_VIEWPORT_DIMENSIONS_Y = 36,
        }
        enum MemoryType {
            /** Memory taken by textures. */
            MEMORY_TEXTURES = 0,
            
            /** Memory taken by buffers. */
            MEMORY_BUFFERS = 1,
            
            /** Total memory taken. This is greater than the sum of [constant MEMORY_TEXTURES] and [constant MEMORY_BUFFERS], as it also includes miscellaneous memory usage. */
            MEMORY_TOTAL = 2,
        }
    }
    /** Abstraction for working with modern low-level graphics APIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderingdevice.html  
     */
    class RenderingDevice extends Object {
        /** Returned by functions that return an ID if a value is invalid. */
        static readonly INVALID_ID = -1
        
        /** Returned by functions that return a format ID if a value is invalid. */
        static readonly INVALID_FORMAT_ID = -1
        constructor(identifier?: any)
        
        /** Creates a new texture. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         *      
         *  **Note:** Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.  
         */
        texture_create(format: RDTextureFormat, view: RDTextureView, data: Array = []): RID
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
        texture_create_shared(view: RDTextureView, with_texture: RID): RID
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared]  
         *  For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.  
         */
        texture_create_shared_from_slice(view: RDTextureView, with_texture: RID, layer: int64, mipmap: int64, mipmaps: int64 = 1, slice_type: RenderingDevice.TextureSliceType = 0): RID
        
        /** Returns an RID for an existing [param image] (`VkImage`) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], and [param layers]. This can be used to allow Godot to render onto foreign images. */
        texture_create_from_extension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usage_flags: RenderingDevice.TextureUsageBits, image: int64, width: int64, height: int64, depth: int64, layers: int64): RID
        
        /** Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be `0`. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** Updating textures is forbidden during creation of a draw or compute list.  
         *      
         *  **Note:** The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.  
         *      
         *  **Note:** The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.  
         */
        texture_update(texture: RID, layer: int64, data: PackedByteArray | byte[] | ArrayBuffer, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         *      
         *  **Note:** [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         */
        texture_get_data(texture: RID, layer: int64): PackedByteArray
        
        /** Returns `true` if the specified [param format] is supported for the given [param usage_flags], `false` otherwise. */
        texture_is_format_supported_for_usage(format: RenderingDevice.DataFormat, usage_flags: RenderingDevice.TextureUsageBits): boolean
        
        /** Returns `true` if the [param texture] is shared, `false` otherwise. See [RDTextureView]. */
        texture_is_shared(texture: RID): boolean
        
        /** Returns `true` if the [param texture] is valid, `false` otherwise. */
        texture_is_valid(texture: RID): boolean
        
        /** Copies the [param from_texture] to [param to_texture] with the specified [param from_pos], [param to_pos] and [param size] coordinates. The Z axis of the [param from_pos], [param to_pos] and [param size] must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns [constant @GlobalScope.OK] if the texture copy was successful or [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param from_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param to_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] must be of the same type (color or depth).  
         */
        texture_copy(from_texture: RID, to_texture: RID, from_pos: Vector3, to_pos: Vector3, size: Vector3, src_mipmap: int64, dst_mipmap: int64, src_layer: int64, dst_layer: int64, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be `0` and [param layer_count] must be `1`.  
         *      
         *  **Note:** [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.  
         */
        texture_clear(texture: RID, color: Color, base_mipmap: int64, mipmap_count: int64, base_layer: int64, layer_count: int64, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Resolves the [param from_texture] texture onto [param to_texture] with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [constant @GlobalScope.OK] if successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] textures must have the same dimension, format and type (color or depth).  
         *      
         *  **Note:** [param from_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param from_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param to_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         */
        texture_resolve_multisample(from_texture: RID, to_texture: RID, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Returns the data format used to create this texture. */
        texture_get_format(texture: RID): RDTextureFormat
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        texture_get_native_handle(texture: RID): int64
        
        /** Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.  
         *  If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.  
         */
        framebuffer_format_create(attachments: Array, view_count: int64 = 1): int64
        
        /** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
        framebuffer_format_create_multipass(attachments: Array, passes: Array, view_count: int64 = 1): int64
        
        /** Creates a new empty framebuffer format with the specified number of [param samples] and returns its ID. */
        framebuffer_format_create_empty(samples: RenderingDevice.TextureSamples = 0): int64
        
        /** Returns the number of texture samples used for the given framebuffer [param format] ID (returned by [method framebuffer_get_format]). */
        framebuffer_format_get_texture_samples(format: int64, render_pass: int64 = 0): RenderingDevice.TextureSamples
        
        /** Creates a new framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create(textures: Array, validate_with_format: int64 = -1, view_count: int64 = 1): RID
        
        /** Creates a new multipass framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create_multipass(textures: Array, passes: Array, validate_with_format: int64 = -1, view_count: int64 = 1): RID
        
        /** Creates a new empty framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create_empty(size: Vector2i, samples: RenderingDevice.TextureSamples = 0, validate_with_format: int64 = -1): RID
        
        /** Returns the format ID of the framebuffer specified by the [param framebuffer] RID. This ID is guaranteed to be unique for the same formats and does not need to be freed. */
        framebuffer_get_format(framebuffer: RID): int64
        
        /** Returns `true` if the framebuffer specified by the [param framebuffer] RID is valid, `false` otherwise. */
        framebuffer_is_valid(framebuffer: RID): boolean
        
        /** Creates a new sampler. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        sampler_create(state: RDSamplerState): RID
        
        /** Returns `true` if implementation supports using a texture of [param format] with the given [param sampler_filter]. */
        sampler_is_format_supported_for_filter(format: RenderingDevice.DataFormat, sampler_filter: RenderingDevice.SamplerFilter): boolean
        
        /** It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        vertex_buffer_create(size_bytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = [], use_as_storage: boolean = false): RID
        
        /** Creates a new vertex format with the specified [param vertex_descriptions]. Returns a unique vertex format ID corresponding to the newly created vertex format. */
        vertex_format_create(vertex_descriptions: Array): int64
        
        /** Creates a vertex array based on the specified buffers. Optionally, [param offsets] (in bytes) may be defined for each buffer. */
        vertex_array_create(vertex_count: int64, vertex_format: int64, src_buffers: Array, offsets: PackedInt64Array | int64[] = []): RID
        
        /** Creates a new index buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        index_buffer_create(size_indices: int64, format: RenderingDevice.IndexBufferFormat, data: PackedByteArray | byte[] | ArrayBuffer = [], use_restart_indices: boolean = false): RID
        
        /** Creates a new index array. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        index_array_create(index_buffer: RID, index_offset: int64, index_count: int64): RID
        
        /** Compiles a SPIR-V from the shader source code in [param shader_source] and returns the SPIR-V as a [RDShaderSPIRV]. This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using [method shader_compile_binary_from_spirv].  
         *  If [param allow_cache] is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If [param allow_cache] is `false`, Godot's shader cache is ignored and the shader will always be recompiled.  
         */
        shader_compile_spirv_from_source(shader_source: RDShaderSource, allow_cache: boolean = true): RDShaderSPIRV
        
        /** Compiles a binary shader from [param spirv_data] and returns the compiled binary data as a [PackedByteArray]. This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also [method shader_compile_spirv_from_source].  
         *  [param name] is an optional human-readable name that can be given to the compiled shader for organizational purposes.  
         */
        shader_compile_binary_from_spirv(spirv_data: RDShaderSPIRV, name: string = ''): PackedByteArray
        
        /** Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_spirv_from_source] and [method shader_create_from_bytecode].  
         */
        shader_create_from_spirv(spirv_data: RDShaderSPIRV, name: string = ''): RID
        
        /** Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_binary_from_spirv] and [method shader_create_from_spirv].  
         */
        shader_create_from_bytecode(binary_data: PackedByteArray | byte[] | ArrayBuffer, placeholder_rid: RID = new RID()): RID
        
        /** Create a placeholder RID by allocating an RID without initializing it for use in [method shader_create_from_bytecode]. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time. */
        shader_create_placeholder(): RID
        
        /** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword). */
        shader_get_vertex_input_attribute_mask(shader: RID): int64
        
        /** Creates a new uniform buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniform_buffer_create(size_bytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = []): RID
        
        /** Creates a [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffer[/url] with the specified [param data] and [param usage]. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        storage_buffer_create(size_bytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = [], usage: RenderingDevice.StorageBufferUsage = 0): RID
        
        /** Creates a new texture buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        texture_buffer_create(size_bytes: int64, format: RenderingDevice.DataFormat, data: PackedByteArray | byte[] | ArrayBuffer = []): RID
        
        /** Creates a new uniform set. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniform_set_create(uniforms: Array, shader: RID, shader_set: int64): RID
        
        /** Checks if the [param uniform_set] is valid, i.e. is owned. */
        uniform_set_is_valid(uniform_set: RID): boolean
        
        /** Updates a region of [param size_bytes] bytes, starting at [param offset], in the buffer, with the specified [param data]. Raises a memory barrier except when [param post_barrier] is set to [constant BARRIER_MASK_NO_BARRIER].  
         *  Prints an error if:  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        buffer_update(buffer: RID, offset: int64, size_bytes: int64, data: PackedByteArray | byte[] | ArrayBuffer, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Clears the contents of the [param buffer], clearing [param size_bytes] bytes, starting at [param offset]. Always raises a memory barrier.  
         *  Prints an error if:  
         *  - the size isn't a multiple of four  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        buffer_clear(buffer: RID, offset: int64, size_bytes: int64, post_barrier: RenderingDevice.BarrierMask = 32767): Error
        
        /** Returns a copy of the data of the specified [param buffer], optionally [param offset_bytes] and [param size_bytes] can be set to copy only a portion of the buffer. */
        buffer_get_data(buffer: RID, offset_bytes: int64 = 0, size_bytes: int64 = 0): PackedByteArray
        
        /** Creates a new render pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        render_pipeline_create(shader: RID, framebuffer_format: int64, vertex_format: int64, primitive: RenderingDevice.RenderPrimitive, rasterization_state: RDPipelineRasterizationState, multisample_state: RDPipelineMultisampleState, stencil_state: RDPipelineDepthStencilState, color_blend_state: RDPipelineColorBlendState, dynamic_state_flags: RenderingDevice.PipelineDynamicStateFlags = 0, for_render_pass: int64 = 0, specialization_constants: Array = []): RID
        
        /** Returns `true` if the render pipeline specified by the [param render_pipeline] RID is valid, `false` otherwise. */
        render_pipeline_is_valid(render_pipeline: RID): boolean
        
        /** Creates a new compute pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        compute_pipeline_create(shader: RID, specialization_constants: Array = []): RID
        
        /** Returns `true` if the compute pipeline specified by the [param compute_pipeline] RID is valid, `false` otherwise. */
        compute_pipeline_is_valid(compute_pipeline: RID): boolean
        
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_height].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_width(screen: int64 = 0): int64
        
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_width].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_height(screen: int64 = 0): int64
        
        /** Returns the screen's framebuffer format.  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_framebuffer_format(): int64
        
        /** High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.  
         *      
         *  **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].  
         */
        draw_list_begin_for_screen(screen: int64 = 0, clear_color: Color = new Color(0, 0, 0, 1)): int64
        
        /** Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.  
         *  Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [method draw_list_end].  
         *  A simple drawing operation might look like this (code is not a complete example):  
         *    
         */
        draw_list_begin(framebuffer: RID, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray | Color[] = [], clear_depth: float64 = 1, clear_stencil: int64 = 0, region: Rect2 = new Rect2(0, 0, 0, 0), storage_textures: Array = []): int64
        
        /** Variant of [method draw_list_begin] with support for multiple splits. The [param splits] parameter determines how many splits are created. */
        draw_list_begin_split(framebuffer: RID, splits: int64, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray | Color[] = [], clear_depth: float64 = 1, clear_stencil: int64 = 0, region: Rect2 = new Rect2(0, 0, 0, 0), storage_textures: Array = []): PackedInt64Array
        
        /** Sets blend constants for the specified [param draw_list] to [param color]. Blend constants are used only if the graphics pipeline is created with [constant DYNAMIC_STATE_BLEND_CONSTANTS] flag set. */
        draw_list_set_blend_constants(draw_list: int64, color: Color): void
        
        /** Binds [param render_pipeline] to the specified [param draw_list]. */
        draw_list_bind_render_pipeline(draw_list: int64, render_pipeline: RID): void
        
        /** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list. */
        draw_list_bind_uniform_set(draw_list: int64, uniform_set: RID, set_index: int64): void
        
        /** Binds [param vertex_array] to the specified [param draw_list]. */
        draw_list_bind_vertex_array(draw_list: int64, vertex_array: RID): void
        
        /** Binds [param index_array] to the specified [param draw_list]. */
        draw_list_bind_index_array(draw_list: int64, index_array: RID): void
        
        /** Sets the push constant data to [param buffer] for the specified [param draw_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        draw_list_set_push_constant(draw_list: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, size_bytes: int64): void
        
        /** Submits [param draw_list] for rendering on the GPU. This is the raster equivalent to [method compute_list_dispatch]. */
        draw_list_draw(draw_list: int64, use_indices: boolean, instances: int64, procedural_vertex_count: int64 = 0): void
        
        /** Creates a scissor rectangle and enables it for the specified [param draw_list]. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [method draw_list_disable_scissor].  
         *      
         *  **Note:** The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.  
         */
        draw_list_enable_scissor(draw_list: int64, rect: Rect2 = new Rect2(0, 0, 0, 0)): void
        
        /** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
        draw_list_disable_scissor(draw_list: int64): void
        
        /** Switches to the next draw pass and returns the split's ID. Equivalent to [method draw_list_switch_to_next_pass_split] with `splits` set to `1`. */
        draw_list_switch_to_next_pass(): int64
        
        /** Switches to the next draw pass, with the number of splits allocated specified in [param splits]. The return value is an array containing the ID of each split. For single-split usage, see [method draw_list_switch_to_next_pass]. */
        draw_list_switch_to_next_pass_split(splits: int64): PackedInt64Array
        
        /** Finishes a list of raster drawing commands created with the `draw_*` methods. */
        draw_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        
        /** Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.  
         *  If [param allow_draw_overlap] is `true`, you may have one draw list running at the same time as one compute list. Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].  
         *  A simple compute operation might look like this (code is not a complete example):  
         *    
         */
        compute_list_begin(allow_draw_overlap: boolean = false): int64
        
        /** Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [method compute_list_dispatch]. */
        compute_list_bind_compute_pipeline(compute_list: int64, compute_pipeline: RID): void
        
        /** Sets the push constant data to [param buffer] for the specified [param compute_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        compute_list_set_push_constant(compute_list: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, size_bytes: int64): void
        
        /** Binds the [param uniform_set] to this [param compute_list]. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier. */
        compute_list_bind_uniform_set(compute_list: int64, uniform_set: RID, set_index: int64): void
        
        /** Submits the compute list for processing on the GPU. This is the compute equivalent to [method draw_list_draw]. */
        compute_list_dispatch(compute_list: int64, x_groups: int64, y_groups: int64, z_groups: int64): void
        
        /** Raises a Vulkan compute barrier in the specified [param compute_list]. */
        compute_list_add_barrier(compute_list: int64): void
        
        /** Finishes a list of compute commands created with the `compute_*` methods. */
        compute_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        
        /** Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly. */
        free_rid(rid: RID): void
        
        /** Creates a timestamp marker with the specified [param name]. This is used for performance reporting with the [method get_captured_timestamp_cpu_time], [method get_captured_timestamp_gpu_time] and [method get_captured_timestamp_name] methods. */
        capture_timestamp(name: string): void
        
        /** Returns the total number of timestamps (rendering steps) available for profiling. */
        get_captured_timestamps_count(): int64
        
        /** Returns the index of the last frame rendered that has rendering timestamps available for querying. */
        get_captured_timestamps_frame(): int64
        
        /** Returns the timestamp in GPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_cpu_time] and [method capture_timestamp]. */
        get_captured_timestamp_gpu_time(index: int64): int64
        
        /** Returns the timestamp in CPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_gpu_time] and [method capture_timestamp]. */
        get_captured_timestamp_cpu_time(index: int64): int64
        
        /** Returns the timestamp's name for the rendering step specified by [param index]. See also [method capture_timestamp]. */
        get_captured_timestamp_name(index: int64): string
        
        /** Returns the value of the specified [param limit]. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.  
         *  Limits for various graphics hardware can be found in the [url=https://vulkan.gpuinfo.org/]Vulkan Hardware Database[/url].  
         */
        limit_get(limit: RenderingDevice.Limit): int64
        
        /** Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main [RenderingDevice], frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local [RenderingDevice]s only have 1 frame. */
        get_frame_delay(): int64
        
        /** Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling [method sync]).  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         */
        submit(): void
        
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         *      
         *  **Note:** [method sync] can only be called after a [method submit].  
         */
        sync(): void
        
        /** Puts a memory barrier in place. This is used for synchronization to avoid data races. See also [method full_barrier], which may be useful for debugging. */
        barrier(from: RenderingDevice.BarrierMask = 32767, to: RenderingDevice.BarrierMask = 32767): void
        
        /** Puts a  *full*  memory barrier in place. This is a memory [method barrier] with all flags enabled. [method full_barrier] it should only be used for debugging as it can severely impact performance. */
        full_barrier(): void
        
        /** Create a new local [RenderingDevice]. This is most useful for performing compute operations on the GPU independently from the rest of the engine. */
        create_local_device(): RenderingDevice
        
        /** Sets the resource name for [param id] to [param name]. This is used for debugging with third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url].  
         *  The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.  
         *      
         *  **Note:** Resource names are only set when the engine runs in verbose mode ([method OS.is_stdout_verbose] = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.  
         */
        set_resource_name(id: RID, name: string): void
        
        /** Create a command buffer debug label region that can be displayed in third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url]. All regions must be ended with a [method draw_command_end_label] call. When viewed from the linear series of submissions to a single queue, calls to [method draw_command_begin_label] and [method draw_command_end_label] must be matched and balanced.  
         *  The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also [method draw_command_insert_label] and [method draw_command_end_label].  
         */
        draw_command_begin_label(name: string, color: Color): void
        
        /** Inserts a command buffer debug label region in the current command buffer. Unlike [method draw_command_begin_label], this region should not be ended with a [method draw_command_end_label] call. */
        draw_command_insert_label(name: string, color: Color): void
        
        /** Ends the command buffer debug label region started by a [method draw_command_begin_label] call. */
        draw_command_end_label(): void
        
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to [method RenderingServer.get_video_adapter_vendor]. See also [method get_device_name]. */
        get_device_vendor_name(): string
        
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to [method RenderingServer.get_video_adapter_name]. See also [method get_device_vendor_name]. */
        get_device_name(): string
        
        /** Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache. */
        get_device_pipeline_cache_uuid(): string
        
        /** Returns the memory usage in bytes corresponding to the given [param type]. When using Vulkan, these statistics are calculated by [url=https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator]Vulkan Memory Allocator[/url]. */
        get_memory_usage(type: RenderingDevice.MemoryType): int64
        
        /** Returns the unique identifier of the driver [param resource] for the specified [param rid]. Some driver resource types ignore the specified [param rid] (see [enum DriverResource] descriptions). [param index] is always ignored but must be specified anyway. */
        get_driver_resource(resource: RenderingDevice.DriverResource, rid: RID, index: int64): int64
    }
    class ReparentDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        _cancel(): void
        readonly reparent: Signal2<NodePath | string, boolean>
    }
    class ReplicationEditor extends VBoxContainer {
        constructor(identifier?: any)
        _update_config(): void
        _update_value(property: NodePath | string, column: int64, value: int64): void
    }
    /** Base class for serializable objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resource.html  
     */
    class Resource extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to return a custom [RID] when [method get_rid] is called. */
        /* gdvirtual */ _get_rid(): RID
        
        /** Override this method to customize the newly duplicated resource created from [method PackedScene.instantiate], if the original's [member resource_local_to_scene] is set to `true`.  
         *  **Example:** Set a random `damage` value to every local resource from an instantiated scene.  
         *    
         */
        /* gdvirtual */ _setup_local_to_scene(): void
        
        /** Sets the [member resource_path] to [param path], potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource. */
        take_over_path(path: string): void
        
        /** Returns the [RID] of this resource (or an empty RID). Many resources (such as [Texture2D], [Mesh], and so on) are high-level abstractions of resources stored in a specialized server ([DisplayServer], [RenderingServer], etc.), so this function will return the original [RID]. */
        get_rid(): RID
        
        /** If [member resource_local_to_scene] is set to `true` and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns `null`. */
        get_local_scene(): Node
        
        /** Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to `true`, this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance.  
         *   *Deprecated.*  This method should only be called internally. Override [method _setup_local_to_scene] instead.  
         */
        setup_local_to_scene(): void
        
        /** Emits the [signal changed] signal. This method is called automatically for some built-in resources.  
         *      
         *  **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [Object]s depending on the resource are properly updated.  
         *    
         */
        emit_changed(): void
        
        /** Duplicates this resource, returning a new resource with its `export`ed or [constant PROPERTY_USAGE_STORAGE] properties copied from the original.  
         *  If [param subresources] is `false`, a shallow copy is returned; nested resources within subresources are not duplicated and are shared from the original resource. If [param subresources] is `true`, a deep copy is returned; nested subresources will be duplicated and are not shared.  
         *  Subresource properties with the [constant PROPERTY_USAGE_ALWAYS_DUPLICATE] flag are always duplicated even with [param subresources] set to `false`, and properties with the [constant PROPERTY_USAGE_NEVER_DUPLICATE] flag are never duplicated even with [param subresources] set to `true`.  
         *      
         *  **Note:** For custom resources, this method will fail if [method Object._init] has been defined with required parameters.  
         */
        duplicate(subresources: boolean = false): Resource
        
        /** If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [method PackedScene.instantiate]).  
         *      
         *  **Note:** Changing this property at run-time has no effect on already created duplicate resources.  
         */
        get resource_local_to_scene(): boolean
        set resource_local_to_scene(value: boolean)
        
        /** The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.  
         *      
         *  **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].  
         */
        get resource_path(): string
        set resource_path(value: string)
        
        /** An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.  
         *      
         *  **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.  
         */
        get resource_name(): string
        set resource_name(value: string)
        
        /** Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].  
         *      
         *  **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.  
         */
        readonly changed: Signal0
        
        /** Emitted by a newly duplicated resource with [member resource_local_to_scene] set to `true`.   
         *   *Deprecated.*  This signal is only emitted when the resource is created. Override [method _setup_local_to_scene] instead.  
         */
        readonly setup_local_to_scene_requested: Signal0
    }
    class ResourceFormatImporterSaver extends ResourceFormatSaver {
        constructor(identifier?: any)
    }
    namespace ResourceFormatLoader {
        enum CacheMode {
            CACHE_MODE_IGNORE = 0,
            CACHE_MODE_REUSE = 1,
            CACHE_MODE_REPLACE = 2,
        }
    }
    /** Loads a specific resource type from a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceformatloader.html  
     */
    class ResourceFormatLoader extends RefCounted {
        constructor(identifier?: any)
        /** Gets the list of extensions for files this loader is able to read. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        
        /** Tells whether or not this loader should load a resource from its resource path for a given type.  
         *  If it is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions], and if the type is within the ones provided by [method _get_resource_type].  
         */
        /* gdvirtual */ _recognize_path(path: string, type: StringName): boolean
        
        /** Tells which resource class this loader can load.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just handle `"Resource"` for them.  
         */
        /* gdvirtual */ _handles_type(type: StringName): boolean
        
        /** Gets the class name of the resource associated with the given path. If the loader cannot handle it, it should return `""`.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _get_resource_type(path: string): string
        
        /** Returns the script class name associated with the [Resource] under the given [param path]. If the resource has no script or the script isn't a named class, it should return `""`. */
        /* gdvirtual */ _get_resource_script_class(path: string): string
        /* gdvirtual */ _get_resource_uid(path: string): int64
        
        /** If implemented, gets the dependencies of a given resource. If [param add_types] is `true`, paths should be appended `::TypeName`, where `TypeName` is the class name of the dependency.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _get_dependencies(path: string, add_types: boolean): PackedStringArray
        
        /** If implemented, renames dependencies within the given resource and saves it. [param renames] is a dictionary `{ String => String }` mapping old dependency paths to new paths.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _rename_dependencies(path: string, renames: Dictionary): Error
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _get_classes_used(path: string): PackedStringArray
        
        /** Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, [param original_path] will target the source file. Returns a [Resource] object on success, or an [enum Error] constant in case of failure.  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        /* gdvirtual */ _load(path: string, original_path: string, use_sub_threads: boolean, cache_mode: int64): void
    }
    /** Saves a specific resource type to a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceformatsaver.html  
     */
    class ResourceFormatSaver extends RefCounted {
        constructor(identifier?: any)
        /** Saves the given resource object to a file at the target [param path]. [param flags] is a bitmask composed with [enum ResourceSaver.SaverFlags] constants.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _save(resource: Resource, path: string, flags: int64): Error
        
        /** Sets a new UID for the resource at the given [param path]. Returns [constant OK] on success, or an [enum Error] constant in case of failure. */
        /* gdvirtual */ _set_uid(path: string, uid: int64): Error
        
        /** Returns whether the given resource object can be saved by this saver. */
        /* gdvirtual */ _recognize(resource: Resource): boolean
        
        /** Returns the list of extensions available for saving the resource object, provided it is recognized (see [method _recognize]). */
        /* gdvirtual */ _get_recognized_extensions(resource: Resource): PackedStringArray
        
        /** Returns `true` if this saver handles a given save path and `false` otherwise.  
         *  If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions].  
         */
        /* gdvirtual */ _recognize_path(resource: Resource, path: string): boolean
    }
    namespace ResourceImporter {
        enum ImportOrder {
            /** The default import order. */
            IMPORT_ORDER_DEFAULT = 0,
            
            /** The import order for scenes, which ensures scenes are imported  *after*  all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources. */
            IMPORT_ORDER_SCENE = 100,
        }
    }
    /** Base class for resource importers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporter.html  
     */
    class ResourceImporter extends RefCounted {
        constructor(identifier?: any)
    }
    /** Imports a bitmap font in the BMFont (`.fnt`) format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterbmfont.html  
     */
    class ResourceImporterBMFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a [BitMap] resource (2D array of boolean values).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterbitmap.html  
     */
    class ResourceImporterBitMap extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports comma-separated values  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportercsvtranslation.html  
     */
    class ResourceImporterCSVTranslation extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterdynamicfont.html  
     */
    class ResourceImporterDynamicFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a image for use in scripting, with no rendering capabilities.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterimage.html  
     */
    class ResourceImporterImage extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a fixed-width bitmap font where all glyphs have the same width and height.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterimagefont.html  
     */
    class ResourceImporterImageFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a 3-dimensional texture ([Texture3D]), a [Texture2DArray], a [Cubemap] or a [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterlayeredtexture.html  
     */
    class ResourceImporterLayeredTexture extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a MP3 audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportermp3.html  
     */
    class ResourceImporterMP3 extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an OBJ 3D model as an independent [Mesh] or scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterobj.html  
     */
    class ResourceImporterOBJ extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an Ogg Vorbis audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporteroggvorbis.html  
     */
    class ResourceImporterOggVorbis extends ResourceImporter {
        constructor(identifier?: any)
        /** This method loads audio data from a PackedByteArray buffer into an AudioStreamOggVorbis object. */
        static load_from_buffer(buffer: PackedByteArray | byte[] | ArrayBuffer): AudioStreamOggVorbis
        
        /** This method loads audio data from a file into an AudioStreamOggVorbis object. The file path is provided as a string. */
        static load_from_file(path: string): AudioStreamOggVorbis
    }
    /** Imports a glTF, FBX, Collada or Blender 3D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterscene.html  
     */
    class ResourceImporterScene extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports native GLSL shaders (not Godot shaders) as a [RDShaderFile].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportershaderfile.html  
     */
    class ResourceImporterShaderFile extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an image for use in 2D or 3D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportertexture.html  
     */
    class ResourceImporterTexture extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a collection of textures from a PNG image into an optimized [AtlasTexture] for 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportertextureatlas.html  
     */
    class ResourceImporterTextureAtlas extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a WAV audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterwav.html  
     */
    class ResourceImporterWAV extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** A node used to preload sub-resources inside a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourcepreloader.html  
     */
    class ResourcePreloader extends Node {
        constructor(identifier?: any)
        /** Adds a resource to the preloader with the given [param name]. If a resource with the given [param name] already exists, the new resource will be renamed to "[param name] N" where N is an incrementing number starting from 2. */
        add_resource(name: StringName, resource: Resource): void
        
        /** Removes the resource associated to [param name] from the preloader. */
        remove_resource(name: StringName): void
        
        /** Renames a resource inside the preloader from [param name] to [param newname]. */
        rename_resource(name: StringName, newname: StringName): void
        
        /** Returns `true` if the preloader contains a resource associated to [param name]. */
        has_resource(name: StringName): boolean
        
        /** Returns the resource associated to [param name]. */
        get_resource(name: StringName): Resource
        
        /** Returns the list of resources inside the preloader. */
        get_resource_list(): PackedStringArray
        get resources(): Array
        set resources(value: Array)
    }
    class ResourcePreloaderEditor extends PanelContainer {
        constructor(identifier?: any)
        _update_library(): void
        _remove_resource(to_remove: string): void
    }
    class ResourcePreloaderEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace RibbonTrailMesh {
        enum Shape {
            /** Gives the mesh a single flat face. */
            SHAPE_FLAT = 0,
            
            /** Gives the mesh two perpendicular flat faces, making a cross shape. */
            SHAPE_CROSS = 1,
        }
    }
    /** Represents a straight ribbon-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_ribbontrailmesh.html  
     */
    class RibbonTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Determines the shape of the ribbon. */
        get shape(): int64
        set shape(value: int64)
        
        /** The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [member curve] at the given distance. */
        get size(): float64
        set size(value: float64)
        
        /** The total number of sections on the ribbon. */
        get sections(): int64
        set sections(value: int64)
        
        /** The length of a section of the ribbon. */
        get section_length(): float64
        set section_length(value: float64)
        
        /** The number of segments in a section. The [member curve] is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance. */
        get section_segments(): int64
        set section_segments(value: int64)
        
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. */
        get curve(): Curve
        set curve(value: Curve)
    }
    /** A custom effect for a [RichTextLabel].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_richtexteffect.html  
     */
    class RichTextEffect extends Resource {
        constructor(identifier?: any)
        /** Override this method to modify properties in [param char_fx]. The method must return `true` if the character could be transformed successfully. If the method returns `false`, it will skip transformation to avoid displaying broken text. */
        /* gdvirtual */ _process_custom_fx(char_fx: CharFXTransform): boolean
    }
    namespace RichTextLabel {
        enum ListType {
            /** Each list item has a number marker. */
            LIST_NUMBERS = 0,
            
            /** Each list item has a letter marker. */
            LIST_LETTERS = 1,
            
            /** Each list item has a roman number marker. */
            LIST_ROMAN = 2,
            
            /** Each list item has a filled circle marker. */
            LIST_DOTS = 3,
        }
        enum MenuItems {
            /** Copies the selected text. */
            MENU_COPY = 0,
            
            /** Selects the whole [RichTextLabel] text. */
            MENU_SELECT_ALL = 1,
            
            /** Represents the size of the [enum MenuItems] enum. */
            MENU_MAX = 2,
        }
        enum ImageUpdateMask {
            /** If this bit is set, [method update_image] changes image texture. */
            UPDATE_TEXTURE = 1,
            
            /** If this bit is set, [method update_image] changes image size. */
            UPDATE_SIZE = 2,
            
            /** If this bit is set, [method update_image] changes image color. */
            UPDATE_COLOR = 4,
            
            /** If this bit is set, [method update_image] changes image inline alignment. */
            UPDATE_ALIGNMENT = 8,
            
            /** If this bit is set, [method update_image] changes image texture region. */
            UPDATE_REGION = 16,
            
            /** If this bit is set, [method update_image] changes image padding. */
            UPDATE_PAD = 32,
            
            /** If this bit is set, [method update_image] changes image tooltip. */
            UPDATE_TOOLTIP = 64,
            
            /** If this bit is set, [method update_image] changes image width from/to percents. */
            UPDATE_WIDTH_IN_PERCENT = 128,
        }
    }
    /** A control for displaying text that can contain different font styles, images, and basic formatting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_richtextlabel.html  
     */
    class RichTextLabel extends Control {
        constructor(identifier?: any)
        /** Returns the text without BBCode mark-up. */
        get_parsed_text(): string
        
        /** Adds raw non-BBCode-parsed text to the tag stack. */
        add_text(text: string): void
        
        /** Adds an image's opening and closing tags to the tag stack, optionally providing a [param width] and [param height] to resize the image, a [param color] to tint the image and a [param region] to only use parts of the image.  
         *  If [param width] or [param height] is set to 0, the image size will be adjusted in order to keep the original aspect ratio.  
         *  If [param width] and [param height] are not set, but [param region] is, the region's rect will be used.  
         *  [param key] is an optional identifier, that can be used to modify the image via [method update_image].  
         *  If [param pad] is set, and the image is smaller than the size specified by [param width] and [param height], the image padding is added to match the size instead of upscaling.  
         *  If [param size_in_percent] is set, [param width] and [param height] values are percentages of the control width instead of pixels.  
         */
        add_image(image: Texture2D, width: int64 = 0, height: int64 = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = new Rect2(0, 0, 0, 0), key: any = <any> {}, pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        
        /** Updates the existing images with the key [param key]. Only properties specified by [param mask] bits are updated. See [method add_image]. */
        update_image(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width: int64 = 0, height: int64 = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = new Rect2(0, 0, 0, 0), pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        
        /** Adds a newline tag to the tag stack. */
        newline(): void
        
        /** Removes a paragraph of content from the label. Returns `true` if the paragraph exists.  
         *  The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.  
         */
        remove_paragraph(paragraph: int64): boolean
        
        /** Adds a [code skip-lint][font]` tag to the tag stack. Overrides default fonts for its duration.  
         *  Passing `0` to [param font_size] will use the existing default font size.  
         */
        push_font(font: Font, font_size: int64 = 0): void
        
        /** Adds a [code skip-lint][font_size]` tag to the tag stack. Overrides default font size for its duration. */
        push_font_size(font_size: int64): void
        
        /** Adds a [code skip-lint][font]` tag with a normal font to the tag stack. */
        push_normal(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold font to the tag stack. This is the same as adding a [code skip-lint]**` tag if not currently in a [code skip-lint] *` tag. */
        push_bold(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold italics font to the tag stack. */
        push_bold_italics(): void
        
        /** Adds a [code skip-lint][font]` tag with an italics font to the tag stack. This is the same as adding an [code skip-lint] *` tag if not currently in a [code skip-lint]**` tag. */
        push_italics(): void
        
        /** Adds a [code skip-lint][font]` tag with a monospace font to the tag stack. */
        push_mono(): void
        
        /** Adds a [code skip-lint][color]` tag to the tag stack. */
        push_color(color: Color): void
        
        /** Adds a [code skip-lint][outline_size]` tag to the tag stack. Overrides default text outline size for its duration. */
        push_outline_size(outline_size: int64): void
        
        /** Adds a [code skip-lint][outline_color]` tag to the tag stack. Adds text outline for its duration. */
        push_outline_color(color: Color): void
        
        /** Adds a [code skip-lint][p]` tag to the tag stack. */
        push_paragraph(alignment: HorizontalAlignment, base_direction: Control.TextDirection = 0, language: string = '', st_parser: TextServer.StructuredTextParser = 0, justification_flags: TextServer.JustificationFlag = 163, tab_stops: PackedFloat32Array | float32[] = []): void
        
        /** Adds an [code skip-lint][indent]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_indent(level: int64): void
        
        /** Adds [code skip-lint][ol]` or [code skip-lint][ul]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_list(level: int64, type: RichTextLabel.ListType, capitalize: boolean, bullet: string = '•'): void
        
        /** Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint][url=something]{text}[/url]`, but supports non-[String] metadata types.  
         *      
         *  **Note:** Meta tags do nothing by default when clicked. To assign behavior when clicked, connect [signal meta_clicked] to a function that is called when the meta tag is clicked.  
         */
        push_meta(data: any): void
        
        /** Adds a [code skip-lint][hint]` tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint]`. */
        push_hint(description: string): void
        
        /** Adds language code used for text shaping algorithm and Open-Type font features. */
        push_language(language: string): void
        
        /** Adds a [code skip-lint][u]` tag to the tag stack. */
        push_underline(): void
        
        /** Adds a [code skip-lint][s]` tag to the tag stack. */
        push_strikethrough(): void
        
        /** Adds a [code skip-lint][table=columns,inline_align]` tag to the tag stack. */
        push_table(columns: int64, inline_align: InlineAlignment = 0, align_to_row: int64 = -1): void
        
        /** Adds a [code skip-lint][dropcap]` tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        push_dropcap(string_: string, font: Font, size: int64, dropcap_margins: Rect2 = new Rect2(0, 0, 0, 0), color: Color = new Color(1, 1, 1, 1), outline_size: int64 = 0, outline_color: Color = new Color(0, 0, 0, 0)): void
        
        /** Edits the selected column's expansion options. If [param expand] is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.  
         *  For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.  
         *  If [param expand] is `false`, the column will not contribute to the total ratio.  
         */
        set_table_column_expand(column: int64, expand: boolean, ratio: int64 = 1): void
        
        /** Sets color of a table cell. Separate colors for alternating rows can be specified. */
        set_cell_row_background_color(odd_row_bg: Color, even_row_bg: Color): void
        
        /** Sets color of a table cell border. */
        set_cell_border_color(color: Color): void
        
        /** Sets minimum and maximum size overrides for a table cell. */
        set_cell_size_override(min_size: Vector2, max_size: Vector2): void
        
        /** Sets inner padding of a table cell. */
        set_cell_padding(padding: Rect2): void
        
        /** Adds a [code skip-lint][cell]` tag to the tag stack. Must be inside a [code skip-lint][table]` tag. See [method push_table] for details. */
        push_cell(): void
        
        /** Adds a [code skip-lint][fgcolor]` tag to the tag stack. */
        push_fgcolor(fgcolor: Color): void
        
        /** Adds a [code skip-lint][bgcolor]` tag to the tag stack. */
        push_bgcolor(bgcolor: Color): void
        
        /** Adds a custom effect tag to the tag stack. The effect does not need to be in [member custom_effects]. The environment is directly passed to the effect. */
        push_customfx(effect: RichTextEffect, env: Dictionary): void
        
        /** Adds a context marker to the tag stack. See [method pop_context]. */
        push_context(): void
        
        /** Terminates tags opened after the last [method push_context] call (including context marker), or all tags if there's no context marker on the stack. */
        pop_context(): void
        
        /** Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods. */
        pop(): void
        
        /** Terminates all tags opened by `push_*` methods. */
        pop_all(): void
        
        /** Clears the tag stack.  
         *      
         *  **Note:** This method will not modify [member text], but setting [member text] to an empty string also clears the stack.  
         */
        clear(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_v_scroll_bar(): VScrollBar
        
        /** Scrolls the window's top line to match [param line]. */
        scroll_to_line(line: int64): void
        
        /** Scrolls the window's top line to match first line of the [param paragraph]. */
        scroll_to_paragraph(paragraph: int64): void
        
        /** Scrolls to the beginning of the current selection. */
        scroll_to_selection(): void
        
        /** Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        get_selection_from(): int64
        
        /** Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        get_selection_to(): int64
        
        /** Select all the text.  
         *  If [member selection_enabled] is `false`, no selection will occur.  
         */
        select_all(): void
        
        /** Returns the current selection text. Does not include BBCodes. */
        get_selected_text(): string
        
        /** Clears the current selection. */
        deselect(): void
        
        /** The assignment version of [method append_text]. Clears the tag stack and inserts the new content. */
        parse_bbcode(bbcode: string): void
        
        /** Parses [param bbcode] and adds tags to the tag stack as needed.  
         *      
         *  **Note:** Using this method, you can't close a tag that was opened in a previous [method append_text] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member text] instead of using [method append_text].  
         */
        append_text(bbcode: string): void
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        is_ready(): boolean
        
        /** Returns the line number of the character position provided. Line and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_character_line(character: int64): int64
        
        /** Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_character_paragraph(character: int64): int64
        
        /** Returns the total number of characters from text tags. Does not include BBCodes. */
        get_total_character_count(): int64
        
        /** Returns the total number of lines in the text. Wrapped text is counted as multiple lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_line_count(): int64
        
        /** Returns the number of visible lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_visible_line_count(): int64
        
        /** Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
        get_paragraph_count(): int64
        
        /** Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_visible_paragraph_count(): int64
        
        /** Returns the height of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_content_height(): int64
        
        /** Returns the width of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_content_width(): int64
        
        /** Returns the vertical offset of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_line_offset(line: int64): float64
        
        /** Returns the vertical offset of the paragraph found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_paragraph_offset(paragraph: int64): float64
        
        /** Parses BBCode parameter [param expressions] into a dictionary. */
        parse_expressions_for_values(expressions: PackedStringArray | string[]): Dictionary
        
        /** Installs a custom effect. This can also be done in the RichTextLabel inspector using the [member custom_effects] property. [param effect] should be a valid [RichTextEffect].  
         *  Example RichTextEffect:  
         *    
         *  Registering the above effect in RichTextLabel from script:  
         *    
         */
        install_effect(effect: any): void
        
        /** Returns the [PopupMenu] of this [RichTextLabel]. By default, this menu is displayed when right-clicking on the [RichTextLabel].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_menu(): PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: int64): void
        _thread_end(): void
        
        /** If `true`, the label uses BBCode formatting. */
        get bbcode_enabled(): boolean
        set bbcode_enabled(value: boolean)
        
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.  
         *      
         *  **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.  
         */
        get text(): string
        set text(value: string)
        
        /** If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
        get fit_content(): boolean
        set fit_content(value: boolean)
        
        /** If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See [method scroll_to_line]. */
        get scroll_active(): boolean
        set scroll_active(value: boolean)
        
        /** If `true`, the window scrolls down to display new content automatically. */
        get scroll_following(): boolean
        set scroll_following(value: boolean)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrap_mode(): int64
        set autowrap_mode(value: int64)
        
        /** The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags. */
        get tab_size(): int64
        set tab_size(value: int64)
        
        /** If `true`, a right-click displays the context menu. */
        get context_menu_enabled(): boolean
        set context_menu_enabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcut_keys_enabled(): boolean
        set shortcut_keys_enabled(value: boolean)
        
        /** The currently installed custom effects. This is an array of [RichTextEffect]s.  
         *  To add a custom effect, it's more convenient to use [method install_effect].  
         */
        get custom_effects(): Array
        set custom_effects(value: Array)
        
        /** If `true`, the label underlines meta tags such as [code skip-lint][url]{text}[/url]`. These tags can call a function when clicked if [signal meta_clicked] is connected to a function. */
        get meta_underlined(): boolean
        set meta_underlined(value: boolean)
        
        /** If `true`, the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint]`. */
        get hint_underlined(): boolean
        set hint_underlined(value: boolean)
        
        /** If `true`, text processing is done in a background thread. */
        get threaded(): boolean
        set threaded(value: boolean)
        
        /** The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.  
         *      
         *  **Note:** Progress bar is displayed only if [member threaded] is enabled.  
         */
        get progress_bar_delay(): int64
        set progress_bar_delay(value: int64)
        
        /** If `true`, the label allows text selection. */
        get selection_enabled(): boolean
        set selection_enabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselect_on_focus_loss_enabled(): boolean
        set deselect_on_focus_loss_enabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get drag_and_drop_selection_enabled(): boolean
        set drag_and_drop_selection_enabled(value: boolean)
        
        /** The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_ratio] accordingly.  
         */
        get visible_characters(): int64
        set visible_characters(value: int64)
        
        /** Sets the clipping behavior when [member visible_characters] or [member visible_ratio] is set. See [enum TextServer.VisibleCharactersBehavior] for more info. */
        get visible_characters_behavior(): int64
        set visible_characters_behavior(value: int64)
        
        /** The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_characters] accordingly.  
         */
        get visible_ratio(): float64
        set visible_ratio(value: float64)
        
        /** Base text writing direction. */
        get text_direction(): int64
        set text_direction(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structured_text_bidi_override(): int64
        set structured_text_bidi_override(value: int64)
        
        /** Set additional options for BiDi override. */
        get structured_text_bidi_override_options(): Array
        set structured_text_bidi_override_options(value: Array)
        
        /** Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. [code skip-lint][url={"key": "value"}]Text[/url]`, then the parameter for this signal will always be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack. Alternatively, you can convert the [String] input to the desired type based on its contents (such as calling [method JSON.parse] on it).  
         *  For example, the following method can be connected to [signal meta_clicked] to open clicked URLs using the user's default web browser:  
         *    
         */
        readonly meta_clicked: Signal1<any>
        
        /** Triggers when the mouse enters a meta tag. */
        readonly meta_hover_started: Signal1<any>
        
        /** Triggers when the mouse exits a meta tag. */
        readonly meta_hover_ended: Signal1<any>
        
        /** Triggered when the document is fully loaded. */
        readonly finished: Signal0
    }
    namespace RigidBody2D {
        enum FreezeMode {
            /** Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path. */
            FREEZE_MODE_STATIC = 0,
            
            /** Kinematic body freeze mode. Similar to [constant FREEZE_MODE_STATIC], but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated. */
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            /** In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass. */
            CENTER_OF_MASS_MODE_AUTO = 0,
            
            /** In this mode, the body's center of mass is set through [member center_of_mass]. Defaults to the body's origin position. */
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            /** In this mode, the body's damping value is added to any value set in areas or the default value. */
            DAMP_MODE_COMBINE = 0,
            
            /** In this mode, the body's damping value replaces any value set in areas or the default value. */
            DAMP_MODE_REPLACE = 1,
        }
        enum CCDMode {
            /** Continuous collision detection disabled. This is the fastest way to detect body collisions, but can miss small, fast-moving objects. */
            CCD_MODE_DISABLED = 0,
            
            /** Continuous collision detection enabled using raycasting. This is faster than shapecasting but less precise. */
            CCD_MODE_CAST_RAY = 1,
            
            /** Continuous collision detection enabled using shapecasting. This is the slowest CCD method and the most precise. */
            CCD_MODE_CAST_SHAPE = 2,
        }
    }
    /** A 2D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rigidbody2d.html  
     */
    class RigidBody2D extends PhysicsBody2D {
        constructor(identifier?: any)
        /** Allows you to read and safely modify the simulation state for the object. Use this instead of [method Node._physics_process] if you need to directly change the body's `position` or other physics properties. By default, it works in addition to the usual physics behavior, but [member custom_integrator] allows you to disable the default behavior and write custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState2D): void
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        get_contact_count(): int64
        
        /** Sets the body's velocity on the given axis. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        set_axis_velocity(axis_velocity: Vector2): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        apply_central_impulse(impulse: Vector2 = Vector2.ZERO): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_impulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        apply_torque_impulse(torque: float64): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        apply_central_force(force: Vector2): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        apply_torque(torque: float64): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        add_constant_central_force(force: Vector2): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        add_constant_torque(torque: float64): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        get_colliding_bodies(): Array
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physics_material_override(): PhysicsMaterial
        set physics_material_override(value: PhysicsMaterial)
        
        /** Multiplies the gravity applied to the body. The body's gravity is calculated from the **Default Gravity** value in **Project > Project Settings > Physics > 2d** and/or any additional gravity vector applied by [Area2D]s. */
        get gravity_scale(): float64
        set gravity_scale(value: float64)
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        get center_of_mass_mode(): int64
        set center_of_mass_mode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
        get center_of_mass(): Vector2
        set center_of_mass(value: Vector2)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to `0`, inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer2D] to get the computed inertia.  
         *    
         */
        get inertia(): float64
        set inertia(value: float64)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get can_sleep(): boolean
        set can_sleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lock_rotation(): boolean
        set lock_rotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freeze_mode(): int64
        set freeze_mode(value: int64)
        
        /** If `true`, internal force integration is disabled for this body. Aside from collision response, the body will only move as determined by the [method _integrate_forces] function. */
        get custom_integrator(): boolean
        set custom_integrator(value: boolean)
        
        /** Continuous collision detection mode.  
         *  Continuous collision detection tries to predict where a moving body will collide instead of moving it and correcting its movement after collision. Continuous collision detection is slower, but more precise and misses fewer collisions with small, fast-moving objects. Raycasting and shapecasting methods are available. See [enum CCDMode] for details.  
         */
        get continuous_cd(): int64
        set continuous_cd(value: int64)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get max_contacts_reported(): int64
        set max_contacts_reported(value: int64)
        
        /** If `true`, the RigidBody2D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contact_monitor(): boolean
        set contact_monitor(value: boolean)
        
        /** The body's linear velocity in pixels per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linear_velocity(): Vector2
        set linear_velocity(value: Vector2)
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        get linear_damp_mode(): int64
        set linear_damp_mode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 2d** or any value override set by an [Area2D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        get linear_damp(): float64
        set linear_damp(value: float64)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angular_velocity(): float64
        set angular_velocity(value: float64)
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        get angular_damp_mode(): int64
        set angular_damp_mode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 2d** or any value override set by an [Area2D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        get angular_damp(): float64
        set angular_damp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constant_force(): Vector2
        set constant_force(value: Vector2)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constant_torque(): float64
        set constant_torque(value: float64)
        
        /** Emitted when one of this RigidBody2D's [Shape2D]s collides with another [PhysicsBody2D] or [TileMap]'s [Shape2D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_entered: Signal4<RID, Node, int64, int64>
        
        /** Emitted when the collision between one of this RigidBody2D's [Shape2D]s and another [PhysicsBody2D] or [TileMap]'s [Shape2D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_exited: Signal4<RID, Node, int64, int64>
        
        /** Emitted when a collision with another [PhysicsBody2D] or [TileMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly body_entered: Signal1<Node>
        
        /** Emitted when the collision with another [PhysicsBody2D] or [TileMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly body_exited: Signal1<Node>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleeping_state_changed: Signal0
    }
    namespace RigidBody3D {
        enum FreezeMode {
            /** Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path. */
            FREEZE_MODE_STATIC = 0,
            
            /** Kinematic body freeze mode. Similar to [constant FREEZE_MODE_STATIC], but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated. */
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            /** In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass. */
            CENTER_OF_MASS_MODE_AUTO = 0,
            
            /** In this mode, the body's center of mass is set through [member center_of_mass]. Defaults to the body's origin position. */
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            /** In this mode, the body's damping value is added to any value set in areas or the default value. */
            DAMP_MODE_COMBINE = 0,
            
            /** In this mode, the body's damping value replaces any value set in areas or the default value. */
            DAMP_MODE_REPLACE = 1,
        }
    }
    /** A 3D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rigidbody3d.html  
     */
    class RigidBody3D extends PhysicsBody3D {
        constructor(identifier?: any)
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        
        /** Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the [RigidBody3D]. */
        get_inverse_inertia_tensor(): Basis
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        get_contact_count(): int64
        
        /** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        set_axis_velocity(axis_velocity: Vector3): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        apply_central_impulse(impulse: Vector3): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        apply_torque_impulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        apply_central_force(force: Vector3): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        apply_torque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        add_constant_central_force(force: Vector3): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        add_constant_torque(torque: Vector3): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        get_colliding_bodies(): Array
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physics_material_override(): PhysicsMaterial
        set physics_material_override(value: PhysicsMaterial)
        
        /** This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce RigidBody3D's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        get gravity_scale(): float64
        set gravity_scale(value: float64)
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        get center_of_mass_mode(): int64
        set center_of_mass_mode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
        get center_of_mass(): Vector3
        set center_of_mass(value: Vector3)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to [constant Vector3.ZERO], inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.  
         *    
         */
        get inertia(): Vector3
        set inertia(value: Vector3)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get can_sleep(): boolean
        set can_sleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lock_rotation(): boolean
        set lock_rotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freeze_mode(): int64
        set freeze_mode(value: int64)
        
        /** If `true`, internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        get custom_integrator(): boolean
        set custom_integrator(value: boolean)
        
        /** If `true`, continuous collision detection is used.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.  
         */
        get continuous_cd(): boolean
        set continuous_cd(value: boolean)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get max_contacts_reported(): int64
        set max_contacts_reported(value: int64)
        
        /** If `true`, the RigidBody3D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contact_monitor(): boolean
        set contact_monitor(value: boolean)
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linear_velocity(): Vector3
        set linear_velocity(value: Vector3)
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        get linear_damp_mode(): int64
        set linear_damp_mode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linear_damp(): float64
        set linear_damp(value: float64)
        
        /** The RigidBody3D's rotational velocity in  *radians*  per second. */
        get angular_velocity(): Vector3
        set angular_velocity(value: Vector3)
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        get angular_damp_mode(): int64
        set angular_damp_mode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angular_damp(): float64
        set angular_damp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constant_force(): Vector3
        set constant_force(value: Vector3)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constant_torque(): Vector3
        set constant_torque(value: Vector3)
        
        /** Emitted when one of this RigidBody3D's [Shape3D]s collides with another [PhysicsBody3D] or [GridMap]'s [Shape3D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_entered: Signal4<RID, Node, int64, int64>
        
        /** Emitted when the collision between one of this RigidBody3D's [Shape3D]s and another [PhysicsBody3D] or [GridMap]'s [Shape3D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D]. [GridMap]s are detected if the Meshes have [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_exited: Signal4<RID, Node, int64, int64>
        
        /** Emitted when a collision with another [PhysicsBody3D] or [GridMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly body_entered: Signal1<Node>
        
        /** Emitted when the collision with another [PhysicsBody3D] or [GridMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly body_exited: Signal1<Node>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleeping_state_changed: Signal0
    }
    /** Editor-only helper for setting up root motion in [AnimationMixer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rootmotionview.html  
     */
    class RootMotionView extends VisualInstance3D {
        constructor(identifier?: any)
        /** Path to an [AnimationMixer] node to use as a basis for root motion. */
        get animation_path(): NodePath
        set animation_path(value: NodePath | string)
        
        /** The grid's color. */
        get color(): Color
        set color(value: Color)
        
        /** The grid's cell size in 3D units. */
        get cell_size(): float64
        set cell_size(value: float64)
        
        /** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
        get radius(): float64
        set radius(value: float64)
        
        /** If `true`, the grid's points will all be on the same Y coordinate ( *local*  Y = 0). If `false`, the points' original Y coordinate is preserved. */
        get zero_y(): boolean
        set zero_y(value: boolean)
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsconsole.html */
    class RsConsole extends RefCounted {
        constructor(identifier?: any)
        process_input(p_text: string): void
        register_command(p_text: string, p_callable: Callable, p_help: string): int64
        unregister_command(p_id: int64): void
        find_objects(p_keyword: string): PackedStringArray
        readonly on_output: Signal0
        readonly on_clear: Signal0
    }
    class RsEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rslist.html */
    class RsList extends RefCounted {
        constructor(identifier?: any)
        append(p_item: any): int64
        index_of(p_item: any): int64
        last_index_of(p_item: any): int64
        remove_at(p_index: int64): boolean
        get_value(p_index: int64): any
        is_valid_index(p_index: int64): boolean
        clear(): void
        grow_if_needed(p_extra_count: int64): void
        reserve(p_size: int64): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsnativebridge.html */
    class RsNativeBridge extends Object {
        constructor(identifier?: any)
        start(): void
        destroy(): void
        update(delta: float64): void
        alloc_damage_number(p_parent: Node, p_secs: float64): Control
        get_position(): Vector3
        is_possessed(): boolean
        set_terrain(p_terrain: RsTerrain): void
        set_root(p_root: Node): void
        get direction(): Vector3
        set direction(value: Vector3)
        get is_moving(): boolean
        set is_moving(value: boolean)
        readonly game_over: Signal0
        readonly damage_emitted: Signal2<Vector3, float64>
        readonly info_updated: Signal
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsoutputdevice.html */
    class RsOutputDevice extends RefCounted {
        constructor(identifier?: any)
        log(...vargargs: any[]): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsterrain.html */
    class RsTerrain extends GeometryInstance3D {
        constructor(identifier?: any)
        set_radius(value: float64): void
        get_radius(): float64
        get_center_position(): Vector3
        _im_update(): void
        get view_position(): Vector3
        set view_position(value: Vector3)
        get shader(): Shader
        set shader(value: Shader)
        get texture(): Texture2D
        set texture(value: Texture2D)
        readonly frame_changed: Signal0
    }
    class RsTerrainGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    class SceneCacheInterface extends RefCounted {
        constructor(identifier?: any)
    }
    class SceneCreateDialog extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    class SceneExporterGLTFPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class SceneImportSettings extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    class SceneImportSettingsData extends Object {
        constructor(identifier?: any)
    }
    /** High-level multiplayer API implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenemultiplayer.html  
     */
    class SceneMultiplayer extends MultiplayerAPI {
        constructor(identifier?: any)
        /** Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing). */
        clear(): void
        
        /** Disconnects the peer identified by [param id], removing it from the list of connected peers, and closing the underlying connection with it. */
        disconnect_peer(id: int64): void
        
        /** Returns the IDs of the peers currently trying to authenticate with this [MultiplayerAPI]. */
        get_authenticating_peers(): PackedInt32Array
        
        /** Sends the specified [param data] to the remote peer identified by [param id] as part of an authentication message. This can be used to authenticate peers, and control when [signal MultiplayerAPI.peer_connected] is emitted (and the remote peer accepted as one of the connected peers). */
        send_auth(id: int64, data: PackedByteArray | byte[] | ArrayBuffer): Error
        
        /** Mark the authentication step as completed for the remote peer identified by [param id]. The [signal MultiplayerAPI.peer_connected] signal will be emitted for this peer once the remote side also completes the authentication. No further authentication messages are expected to be received from this peer.  
         *  If a peer disconnects before completing authentication, either due to a network issue, the [member auth_timeout] expiring, or manually calling [method disconnect_peer], the [signal peer_authentication_failed] signal will be emitted instead of [signal MultiplayerAPI.peer_disconnected].  
         */
        complete_auth(id: int64): Error
        
        /** Sends the given raw [param bytes] to a specific peer identified by [param id] (see [method MultiplayerPeer.set_target_peer]). Default ID is `0`, i.e. broadcast to all peers. */
        send_bytes(bytes: PackedByteArray | byte[] | ArrayBuffer, id: int64 = 0, mode: MultiplayerPeer.TransferMode = 2, channel: int64 = 0): Error
        
        /** The root path to use for RPCs and replication. Instead of an absolute path, a relative path will be used to find the node upon which the RPC should be executed.  
         *  This effectively allows to have different branches of the scene tree to be managed by different MultiplayerAPI, allowing for example to run both client and server in the same scene.  
         */
        get root_path(): NodePath
        set root_path(value: NodePath | string)
        
        /** The callback to execute when when receiving authentication data sent via [method send_auth]. If the [Callable] is empty (default), peers will be automatically accepted as soon as they connect. */
        get auth_callback(): Callable
        set auth_callback(value: Callable)
        
        /** If set to a value greater than `0.0`, the maximum amount of time peers can stay in the authenticating state, after which the authentication will automatically fail. See the [signal peer_authenticating] and [signal peer_authentication_failed] signals. */
        get auth_timeout(): float64
        set auth_timeout(value: float64)
        
        /** If `true`, the MultiplayerAPI will allow encoding and decoding of object during RPCs.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.  
         */
        get allow_object_decoding(): boolean
        set allow_object_decoding(value: boolean)
        
        /** If `true`, the MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] refuses new incoming connections. */
        get refuse_new_connections(): boolean
        set refuse_new_connections(value: boolean)
        
        /** Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is `false`, clients won't be automatically notified of other peers and won't be able to send them packets through the server.  
         *      
         *  **Note:** Changing this option while other peers are connected may lead to unexpected behaviors.  
         *      
         *  **Note:** Support for this feature may depend on the current [MultiplayerPeer] configuration. See [method MultiplayerPeer.is_server_relay_supported].  
         */
        get server_relay(): boolean
        set server_relay(value: boolean)
        
        /** Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [MultiplayerSynchronizer]. */
        get max_sync_packet_size(): int64
        set max_sync_packet_size(value: int64)
        
        /** Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [MultiplayerSynchronizer]. */
        get max_delta_packet_size(): int64
        set max_delta_packet_size(value: int64)
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] connects to a new peer and a valid [member auth_callback] is set. In this case, the [signal MultiplayerAPI.peer_connected] will not be emitted until [method complete_auth] is called with given peer [param id]. While in this state, the peer will not be included in the list returned by [method MultiplayerAPI.get_peers] (but in the one returned by [method get_authenticating_peers]), and only authentication data will be sent or received. See [method send_auth] for sending authentication data. */
        readonly peer_authenticating: Signal1<int64>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] disconnects from a peer for which authentication had not yet completed. See [signal peer_authenticating]. */
        readonly peer_authentication_failed: Signal1<int64>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] receives a [param packet] with custom data (see [method send_bytes]). ID is the peer ID of the peer that sent the packet. */
        readonly peer_packet: Signal2<int64, PackedByteArray | byte[] | ArrayBuffer>
    }
    class SceneRPCInterface extends RefCounted {
        constructor(identifier?: any)
    }
    namespace SceneReplicationConfig {
        enum ReplicationMode {
            /** Do not keep the given property synchronized. */
            REPLICATION_MODE_NEVER = 0,
            
            /** Replicate the given property on process by constantly sending updates using unreliable transfer mode. */
            REPLICATION_MODE_ALWAYS = 1,
            
            /** Replicate the given property on process by sending updates using reliable transfer mode when its value changes. */
            REPLICATION_MODE_ON_CHANGE = 2,
        }
    }
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenereplicationconfig.html  
     */
    class SceneReplicationConfig extends Resource {
        constructor(identifier?: any)
        /** Returns a list of synchronized property [NodePath]s. */
        get_properties(): Array
        
        /** Adds the property identified by the given [param path] to the list of the properties being synchronized, optionally passing an [param index].  
         *      
         *  **Note:** For details on restrictions and limitations on property synchronization, see [MultiplayerSynchronizer].  
         */
        add_property(path: NodePath | string, index: int64 = -1): void
        
        /** Returns whether the given [param path] is configured for synchronization. */
        has_property(path: NodePath | string): boolean
        
        /** Removes the property identified by the given [param path] from the configuration. */
        remove_property(path: NodePath | string): void
        
        /** Finds the index of the given [param path]. */
        property_get_index(path: NodePath | string): int64
        
        /** Returns whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        property_get_spawn(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        property_set_spawn(path: NodePath | string, enabled: boolean): void
        
        /** Returns the replication mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        property_get_replication_mode(path: NodePath | string): SceneReplicationConfig.ReplicationMode
        
        /** Sets the synchronization mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        property_set_replication_mode(path: NodePath | string, mode: SceneReplicationConfig.ReplicationMode): void
        
        /** Returns whether the property identified by the given [param path] is configured to be synchronized on process.  
         *   *Deprecated.*  Use [method property_get_replication_mode] instead.  
         */
        property_get_sync(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on process.  
         *   *Deprecated.*  Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ALWAYS] instead.  
         */
        property_set_sync(path: NodePath | string, enabled: boolean): void
        
        /** Returns whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *   *Deprecated.*  Use [method property_get_replication_mode] instead.  
         */
        property_get_watch(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *   *Deprecated.*  Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ON_CHANGE] instead.  
         */
        property_set_watch(path: NodePath | string, enabled: boolean): void
    }
    class SceneReplicationInterface extends RefCounted {
        constructor(identifier?: any)
    }
    namespace SceneState {
        enum GenEditState {
            /** If passed to [method PackedScene.instantiate], blocks edits to the scene state. */
            GEN_EDIT_STATE_DISABLED = 0,
            
            /** If passed to [method PackedScene.instantiate], provides inherited scene resources to the local scene.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_INSTANCE = 1,
            
            /** If passed to [method PackedScene.instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN = 2,
            
            /** If passed to [method PackedScene.instantiate], it's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    /** Provides access to a scene file's information.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenestate.html  
     */
    class SceneState extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of nodes in the scene.  
         *  The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.  
         */
        get_node_count(): int64
        
        /** Returns the type of the node at [param idx]. */
        get_node_type(idx: int64): StringName
        
        /** Returns the name of the node at [param idx]. */
        get_node_name(idx: int64): StringName
        
        /** Returns the path to the node at [param idx].  
         *  If [param for_parent] is `true`, returns the path of the [param idx] node's parent instead.  
         */
        get_node_path(idx: int64, for_parent: boolean = false): NodePath
        
        /** Returns the path to the owner of the node at [param idx], relative to the root node. */
        get_node_owner_path(idx: int64): NodePath
        
        /** Returns `true` if the node at [param idx] is an [InstancePlaceholder]. */
        is_node_instance_placeholder(idx: int64): boolean
        
        /** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
        get_node_instance_placeholder(idx: int64): string
        
        /** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance. */
        get_node_instance(idx: int64): PackedScene
        
        /** Returns the list of group names associated with the node at [param idx]. */
        get_node_groups(idx: int64): PackedStringArray
        
        /** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
        get_node_index(idx: int64): int64
        
        /** Returns the number of exported or overridden properties for the node at [param idx].  
         *  The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.  
         */
        get_node_property_count(idx: int64): int64
        
        /** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_name(idx: int64, prop_idx: int64): StringName
        
        /** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_value(idx: int64, prop_idx: int64): any
        
        /** Returns the number of signal connections in the scene.  
         *  The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.  
         */
        get_connection_count(): int64
        
        /** Returns the path to the node that owns the signal at [param idx], relative to the root node. */
        get_connection_source(idx: int64): NodePath
        
        /** Returns the name of the signal at [param idx]. */
        get_connection_signal(idx: int64): StringName
        
        /** Returns the path to the node that owns the method connected to the signal at [param idx], relative to the root node. */
        get_connection_target(idx: int64): NodePath
        
        /** Returns the method connected to the signal at [param idx]. */
        get_connection_method(idx: int64): StringName
        
        /** Returns the connection flags for the signal at [param idx]. See [enum Object.ConnectFlags] constants. */
        get_connection_flags(idx: int64): int64
        
        /** Returns the list of bound parameters for the signal at [param idx]. */
        get_connection_binds(idx: int64): Array
        
        /** Returns the number of unbound parameters for the signal at [param idx]. */
        get_connection_unbinds(idx: int64): int64
    }
    class SceneTileProxyObject extends Object {
        constructor(identifier?: any)
        readonly changed: Signal1<string>
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
        constructor(identifier?: any)
        /** Returns `true` if the given group exists.  
         *  A group exists if any [Node] in the tree belongs to it (see [method Node.add_to_group]). Groups without nodes are removed automatically.  
         */
        has_group(name: StringName): boolean
        
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
        create_timer(time_sec: float64, process_always: boolean = true, process_in_physics: boolean = false, ignore_time_scale: boolean = false): SceneTreeTimer
        
        /** Creates and returns a new [Tween]. The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).  
         *      
         *  **Note:** When creating a [Tween] using this method, the [Tween] will not be tied to the [Node] that called it. It will continue to animate even if the [Node] is freed, but it will automatically finish if there's nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].  
         */
        create_tween(): Tween
        
        /** Returns an array of currently existing [Tween]s in the [SceneTree] (both running and paused). */
        get_processed_tweens(): Array
        
        /** Returns the number of nodes in this [SceneTree]. */
        get_node_count(): int64
        
        /** Returns the current frame number, i.e. the total frame count since the application started. */
        get_frame(): int64
        
        /** Quits the application at the end of the current iteration. Argument [param exit_code] can optionally be given (defaulting to 0) to customize the exit status code.  
         *  By convention, an exit code of `0` indicates success whereas a non-zero exit code indicates an error.  
         *  For portability reasons, the exit code should be set between 0 and 125 (inclusive).  
         *      
         *  **Note:** On iOS this method doesn't work. Instead, as recommended by the iOS Human Interface Guidelines, the user is expected to close apps via the Home button.  
         */
        quit(exit_code: int64 = 0): void
        
        /** Queues the given object for deletion, delaying the call to [method Object.free] to the end of the current frame. */
        queue_delete(obj: Object): void
        
        /** Calls [param method] on each member of the given group, respecting the given [enum GroupCallFlags]. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.  
         *    
         *      
         *  **Note:** Group call flags are used to control the method calling behavior. By default, methods will be called immediately in a way similar to [method call_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param flags] argument, methods will be called at the end of the frame in a way similar to [method Object.set_deferred].  
         */
        call_group_flags(flags: int64, group: StringName, method: StringName, ...vargargs: any[]): void
        
        /** Sends the given notification to all members of the [param group], respecting the given [enum GroupCallFlags].  
         *      
         *  **Note:** Group call flags are used to control the notification sending behavior. By default, notifications will be sent immediately in a way similar to [method notify_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, notifications will be sent at the end of the current frame in a way similar to using `Object.call_deferred("notification", ...)`.  
         */
        notify_group_flags(call_flags: int64, group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all members of the given group, respecting the given [enum GroupCallFlags].  
         *      
         *  **Note:** Group call flags are used to control the property setting behavior. By default, properties will be set immediately in a way similar to [method set_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, properties will be set at the end of the frame in a way similar to [method Object.call_deferred].  
         */
        set_group_flags(call_flags: int64, group: StringName, property: string, value: any): void
        
        /** Calls [param method] on each member of the given group. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.  
         *      
         *  **Note:** [method call_group] will call methods immediately on all members at once, which can cause stuttering if an expensive method is called on lots of members.  
         */
        call_group(group: StringName, method: StringName, ...vargargs: any[]): void
        
        /** Sends the given notification to all members of the [param group].  
         *      
         *  **Note:** [method notify_group] will immediately notify all members at once, which can cause stuttering if an expensive method is called as a result of sending the notification to lots of members.  
         */
        notify_group(group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all members of the given group.  
         *      
         *  **Note:** [method set_group] will set the property immediately on all members at once, which can cause stuttering if a property with an expensive setter is set on lots of members.  
         */
        set_group(group: StringName, property: string, value: any): void
        
        /** Returns a list of all nodes assigned to the given group. */
        get_nodes_in_group(group: StringName): Array
        
        /** Returns the first node in the specified group, or `null` if the group is empty or does not exist. */
        get_first_node_in_group(group: StringName): Node
        
        /** Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.  
         *  Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.  
         *      
         *  **Note:** See [method change_scene_to_packed] for details on the order of operations.  
         */
        change_scene_to_file(path: string): Error
        
        /** Changes the running scene to a new instance of the given [PackedScene] (which must be valid).  
         *  Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.  
         *      
         *  **Note:** Operations happen in the following order when [method change_scene_to_packed] is called:  
         *  1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return `null`. [member current_scene] will be `null`, too, because the new scene is not available yet.  
         *  2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [method Node.get_tree] and [member current_scene] will be back to working as usual.  
         *  This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [method Node.queue_free].  
         */
        change_scene_to_packed(packed_scene: PackedScene): Error
        
        /** Reloads the currently active scene.  
         *  Returns [constant OK] on success, [constant ERR_UNCONFIGURED] if no [member current_scene] was defined yet, [constant ERR_CANT_OPEN] if [member current_scene] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if the scene cannot be instantiated.  
         */
        reload_current_scene(): Error
        
        /** If a current scene is loaded, calling this method will unload it. */
        unload_current_scene(): void
        
        /** Sets a custom [MultiplayerAPI] with the given [param root_path] (controlling also the relative subpaths), or override the default one if [param root_path] is empty.  
         *      
         *  **Note:** No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.  
         */
        set_multiplayer(multiplayer: MultiplayerAPI, root_path: NodePath | string = ''): void
        
        /** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
        get_multiplayer(for_path: NodePath | string = ''): MultiplayerAPI
        
        /** If `true`, the application automatically accepts quitting requests.  
         *  For mobile platforms, see [member quit_on_go_back].  
         */
        get auto_accept_quit(): boolean
        set auto_accept_quit(value: boolean)
        
        /** If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).  
         *  To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].  
         */
        get quit_on_go_back(): boolean
        set quit_on_go_back(value: boolean)
        
        /** If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.  
         */
        get debug_collisions_hint(): boolean
        set debug_collisions_hint(value: boolean)
        
        /** If `true`, curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.  
         */
        get debug_paths_hint(): boolean
        set debug_paths_hint(value: boolean)
        
        /** If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.  
         */
        get debug_navigation_hint(): boolean
        set debug_navigation_hint(value: boolean)
        
        /** If `true`, the [SceneTree] is paused. Doing so will have the following behavior:  
         *  - 2D and 3D physics will be stopped. This includes signals and collision detection.  
         *  - [method Node._process], [method Node._physics_process] and [method Node._input] will not be called anymore in nodes.  
         */
        get paused(): boolean
        set paused(value: boolean)
        
        /** The root of the edited scene. */
        get edited_scene_root(): Node
        set edited_scene_root(value: Node)
        
        /** Returns the root node of the currently running scene, regardless of its structure.  
         *  **Warning:** Setting this directly might not work as expected, and will  *not*  add or remove any nodes from the tree, consider using [method change_scene_to_file] or [method change_scene_to_packed] instead.  
         */
        get current_scene(): Node
        set current_scene(value: Node)
        
        /** The [SceneTree]'s root [Window]. */
        get root(): Node
        
        /** If `true` (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].  
         *  If `false`, you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.  
         */
        get multiplayer_poll(): boolean
        set multiplayer_poll(value: boolean)
        
        /** Emitted whenever the [SceneTree] hierarchy changed (children being moved or renamed, etc.). */
        readonly tree_changed: Signal0
        
        /** This signal is only emitted in the editor, it allows the editor to update the visibility of disabled nodes. Emitted whenever any node's [member Node.process_mode] is changed. */
        readonly tree_process_mode_changed: Signal0
        
        /** Emitted whenever a node is added to the [SceneTree]. */
        readonly node_added: Signal1<Node>
        
        /** Emitted whenever a node is removed from the [SceneTree]. */
        readonly node_removed: Signal1<Node>
        
        /** Emitted whenever a node is renamed. */
        readonly node_renamed: Signal1<Node>
        
        /** Emitted when a node's configuration changed. Only emitted in `tool` mode. */
        readonly node_configuration_warning_changed: Signal1<Node>
        
        /** Emitted immediately before [method Node._process] is called on every node in the [SceneTree]. */
        readonly process_frame: Signal0
        
        /** Emitted immediately before [method Node._physics_process] is called on every node in the [SceneTree]. */
        readonly physics_frame: Signal0
    }
    class SceneTreeDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        _cancel(): void
        readonly selected: Signal1<NodePath | string>
    }
    class SceneTreeDock extends VBoxContainer {
        constructor(identifier?: any)
        _set_owners(_unnamed_arg0: Node, _unnamed_arg1: Array): void
        _update_script_button(): void
        instantiate(_unnamed_arg0: string): void
        get_tree_editor(): SceneTreeEditor
        replace_node(_unnamed_arg0: Node, _unnamed_arg1: Node, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        readonly remote_tree_selected: Signal0
        readonly add_node_used: Signal0
        readonly node_created: Signal1<Node>
    }
    class SceneTreeEditor extends Control {
        constructor(identifier?: any)
        _update_tree(_unnamed_arg0: boolean = false): void
        _rename_node(_unnamed_arg0: Node, _unnamed_arg1: string): void
        _test_update_tree(): void
        update_tree(): void
        readonly node_selected: Signal0
        readonly node_renamed: Signal0
        readonly node_prerename: Signal0
        readonly node_changed: Signal0
        readonly nodes_dragged: Signal0
        readonly nodes_rearranged: Signal3<Array, NodePath | string, int64>
        readonly files_dropped: Signal3<PackedStringArray | string[], NodePath | string, int64>
        readonly script_dropped: Signal2<string, NodePath | string>
        readonly rmb_pressed: Signal1<Vector2>
        readonly open: Signal0
        readonly open_script: Signal0
    }
    /** One-shot timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenetreetimer.html  
     */
    class SceneTreeTimer extends RefCounted {
        constructor(identifier?: any)
        /** The time remaining (in seconds). */
        get time_left(): float64
        set time_left(value: float64)
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal0
    }
    class ScreenSelect extends Button {
        constructor(identifier?: any)
        readonly request_open_in_screen: Signal1<int64>
    }
    /** A class stored as a resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_script.html  
     */
    class Script extends Resource {
        constructor(identifier?: any)
        /** Returns `true` if the script can be instantiated. */
        can_instantiate(): boolean
        
        /** Returns `true` if [param base_object] is an instance of this script. */
        instance_has(base_object: Object): boolean
        
        /** Returns `true` if the script contains non-empty source code. */
        has_source_code(): boolean
        
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keep_state: boolean = false): Error
        
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
        get source_code(): string
        set source_code(value: string)
    }
    /** Godot editor's popup dialog for creating new [Script] files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scriptcreatedialog.html  
     */
    class ScriptCreateDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, built_in_enabled: boolean = true, load_enabled: boolean = true): void
        
        /** Emitted when the user clicks the OK button. */
        readonly script_created: Signal1<Script>
    }
    /** Godot editor's script editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scripteditor.html  
     */
    class ScriptEditor extends PanelContainer {
        constructor(identifier?: any)
        _close_docs_tab(): void
        _close_all_tabs(): void
        _close_other_tabs(): void
        _goto_script_line2(_unnamed_arg0: int64): void
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
        goto_line(line_number: int64): void
        
        /** Returns a [Script] that is currently active in editor. */
        get_current_script(): Script
        
        /** Returns an array with all [Script] objects which are currently open in editor. */
        get_open_scripts(): Array
        
        /** Opens the script create dialog. The script will extend [param base_name]. The file extension can be omitted from [param base_path]. It will be added based on the selected scripting language. */
        open_script_create_dialog(base_name: string, base_path: string): void
        
        /** Emitted when user changed active script. Argument is a freshly activated [Script]. */
        readonly editor_script_changed: Signal1<Script>
        
        /** Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed. */
        readonly script_close: Signal1<Script>
    }
    /** Base editor for editing scripts in the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scripteditorbase.html  
     */
    class ScriptEditorBase extends VBoxContainer {
        constructor(identifier?: any)
        /** Returns the underlying [Control] used for editing scripts. For text scripts, this is a [CodeEdit]. */
        get_base_editor(): Control
        
        /** Adds a [EditorSyntaxHighlighter] to the open script. */
        add_syntax_highlighter(highlighter: EditorSyntaxHighlighter): void
        
        /** Emitted after script validation or when the edited resource has changed. */
        readonly name_changed: Signal0
        
        /** Emitted after script validation. */
        readonly edited_script_changed: Signal0
        
        /** Emitted when the user requests contextual help. */
        readonly request_help: Signal1<string>
        
        /** Emitted when the user requests to view a specific line of a script, similar to [signal go_to_method]. */
        readonly request_open_script_at_line: Signal2<Object, int64>
        
        /** Emitted when the user contextual goto and the item is in the same script. */
        readonly request_save_history: Signal0
        
        /** Emitted when the user requests a specific documentation page. */
        readonly go_to_help: Signal1<string>
        
        /** Emitted when the user request to search text in the file system. */
        readonly search_in_files_requested: Signal1<string>
        
        /** Emitted when the user request to find and replace text in the file system. */
        readonly replace_in_files_requested: Signal1<string>
        
        /** Emitted when the user requests to view a specific method of a script, similar to [signal request_open_script_at_line]. */
        readonly go_to_method: Signal2<Object, string>
    }
    class ScriptEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class ScriptEditorQuickOpen extends ConfirmationDialog {
        constructor(identifier?: any)
        readonly goto_line: Signal1<int64>
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_scriptextension.html */
    class ScriptExtension extends Script {
        constructor(identifier?: any)
        /* gdvirtual */ _editor_can_reload_from_file(): boolean
        /* gdvirtual */ _placeholder_erased(placeholder: int64): void
        /* gdvirtual */ _can_instantiate(): boolean
        /* gdvirtual */ _get_base_script(): Script
        /* gdvirtual */ _get_global_name(): StringName
        /* gdvirtual */ _inherits_script(script: Script): boolean
        /* gdvirtual */ _get_instance_base_type(): StringName
        /* gdvirtual */ _instance_create(for_object: Object): int64
        /* gdvirtual */ _placeholder_instance_create(for_object: Object): int64
        /* gdvirtual */ _instance_has(object: Object): boolean
        /* gdvirtual */ _has_source_code(): boolean
        /* gdvirtual */ _get_source_code(): string
        /* gdvirtual */ _set_source_code(code: string): void
        /* gdvirtual */ _reload(keep_state: boolean): Error
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
        /* gdvirtual */ _get_member_line(member: StringName): int64
        /* gdvirtual */ _get_constants(): Dictionary
        /* gdvirtual */ _get_members(): Array
        /* gdvirtual */ _is_placeholder_fallback_enabled(): boolean
        /* gdvirtual */ _get_rpc_config(): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_scriptlanguage.html */
    class ScriptLanguage extends Object {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
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
        /* gdvirtual */ _find_function(class_name: string, function_name: string): int64
        /* gdvirtual */ _make_function(class_name: string, function_name: string, function_args: PackedStringArray | string[]): string
        /* gdvirtual */ _open_in_external_editor(script: Script, line: int64, column: int64): Error
        /* gdvirtual */ _overrides_external_editor(): boolean
        /* gdvirtual */ _complete_code(code: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _lookup_code(code: string, symbol: string, path: string, owner: Object): Dictionary
        /* gdvirtual */ _auto_indent_code(code: string, from_line: int64, to_line: int64): string
        /* gdvirtual */ _add_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _add_named_global_constant(name: StringName, value: any): void
        /* gdvirtual */ _remove_named_global_constant(name: StringName): void
        /* gdvirtual */ _thread_enter(): void
        /* gdvirtual */ _thread_exit(): void
        /* gdvirtual */ _debug_get_error(): string
        /* gdvirtual */ _debug_get_stack_level_count(): int64
        /* gdvirtual */ _debug_get_stack_level_line(level: int64): int64
        /* gdvirtual */ _debug_get_stack_level_function(level: int64): string
        /* gdvirtual */ _debug_get_stack_level_locals(level: int64, max_subitems: int64, max_depth: int64): Dictionary
        /* gdvirtual */ _debug_get_stack_level_members(level: int64, max_subitems: int64, max_depth: int64): Dictionary
        /* gdvirtual */ _debug_get_stack_level_instance(level: int64): int64
        /* gdvirtual */ _debug_get_globals(max_subitems: int64, max_depth: int64): Dictionary
        /* gdvirtual */ _debug_parse_stack_level_expression(level: int64, expression: string, max_subitems: int64, max_depth: int64): string
        /* gdvirtual */ _debug_get_current_stack_info(): Array
        /* gdvirtual */ _reload_all_scripts(): void
        /* gdvirtual */ _reload_tool_script(script: Script, soft_reload: boolean): void
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _get_public_functions(): Array
        /* gdvirtual */ _get_public_constants(): Dictionary
        /* gdvirtual */ _get_public_annotations(): Array
        /* gdvirtual */ _profiling_start(): void
        /* gdvirtual */ _profiling_stop(): void
        /* gdvirtual */ _profiling_get_accumulated_data(info_array: int64, info_max: int64): int64
        /* gdvirtual */ _profiling_get_frame_data(info_array: int64, info_max: int64): int64
        /* gdvirtual */ _frame(): void
        /* gdvirtual */ _handles_global_class_type(type: string): boolean
        /* gdvirtual */ _get_global_class_name(path: string): Dictionary
    }
    class ScriptTextEditor extends ScriptEditorBase {
        constructor(identifier?: any)
    }
    /** Abstract base class for scrollbars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scrollbar.html  
     */
    class ScrollBar extends Range {
        constructor(identifier?: any)
        /** Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get custom_step(): float64
        set custom_step(value: float64)
        
        /** Emitted when the scrollbar is being scrolled. */
        readonly scrolling: Signal0
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
        constructor(identifier?: any)
        _update_scrollbar_position(): void
        
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
        get follow_focus(): boolean
        set follow_focus(value: boolean)
        
        /** The current horizontal scroll value.  
         *      
         *  **Note:** If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.  
         *    
         */
        get scroll_horizontal(): int64
        set scroll_horizontal(value: int64)
        
        /** The current vertical scroll value.  
         *      
         *  **Note:** Setting it early needs to be deferred, just like in [member scroll_horizontal].  
         *    
         */
        get scroll_vertical(): int64
        set scroll_vertical(value: int64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scroll_horizontal_custom_step(): float64
        set scroll_horizontal_custom_step(value: float64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scroll_vertical_custom_step(): float64
        set scroll_vertical_custom_step(value: float64)
        
        /** Controls whether horizontal scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        get horizontal_scroll_mode(): int64
        set horizontal_scroll_mode(value: int64)
        
        /** Controls whether vertical scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        get vertical_scroll_mode(): int64
        set vertical_scroll_mode(value: int64)
        
        /** Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive. */
        get scroll_deadzone(): int64
        set scroll_deadzone(value: int64)
        
        /** Emitted when scrolling starts when dragging the scrollable area w *ith a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scroll_started: Signal0
        
        /** Emitted when scrolling stops when dragging the scrollable area  *with a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scroll_ended: Signal0
    }
    class SectionedInspector extends HSplitContainer {
        constructor(identifier?: any)
        update_category_list(): void
    }
    class SectionedInspectorFilter extends Object {
        constructor(identifier?: any)
    }
    /** A 2D line segment shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_segmentshape2d.html  
     */
    class SegmentShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The segment's first point position. */
        get a(): Vector2
        set a(value: Vector2)
        
        /** The segment's second point position. */
        get b(): Vector2
        set b(value: Vector2)
    }
    /** A synchronization mechanism used to control access to a shared resource by [Thread]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_semaphore.html  
     */
    class Semaphore extends RefCounted {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        get slide_on_slope(): boolean
        set slide_on_slope(value: boolean)
    }
    /** A 3D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_separationrayshape3d.html  
     */
    class SeparationRayShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        get slide_on_slope(): boolean
        set slide_on_slope(value: boolean)
    }
    /** Abstract base class for separators.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_separator.html  
     */
    class Separator extends Control {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
        /** Returns the shader mode for the shader. */
        get_mode(): Shader.Mode
        
        /** Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [ShaderMaterial].  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        set_default_texture_parameter(name: StringName, texture: Texture2D, index: int64 = 0): void
        
        /** Returns the texture that is set as default for the specified parameter.  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        get_default_texture_parameter(name: StringName, index: int64 = 0): Texture2D
        
        /** Get the list of shader uniforms that can be assigned to a [ShaderMaterial], for use with [method ShaderMaterial.set_shader_parameter] and [method ShaderMaterial.get_shader_parameter]. The parameters returned are contained in dictionaries in a similar format to the ones returned by [method Object.get_property_list].  
         *  If argument [param get_groups] is true, parameter grouping hints will be provided.  
         */
        get_shader_uniform_list(get_groups: boolean = false): Array
        
        /** Returns the shader's code as the user has written it, not the full generated code used internally. */
        get code(): string
        set code(value: string)
    }
    class ShaderCreateDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        config(path: string, built_in_enabled: boolean, load_enabled: boolean, _unnamed_arg3: int64 = 1, _unnamed_arg4: int64 = 1): void
        readonly shader_created: Signal1<Shader>
        readonly shader_include_created: Signal1<ShaderInclude>
    }
    class ShaderEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class ShaderFileEditor extends PanelContainer {
        constructor(identifier?: any)
    }
    class ShaderFileEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class ShaderGlobalsEditor extends VBoxContainer {
        constructor(identifier?: any)
        _changed(): void
        readonly globals_changed: Signal0
    }
    class ShaderGlobalsEditorInterface extends Object {
        constructor(identifier?: any)
        _set_var(_unnamed_arg0: StringName, _unnamed_arg1: any, _unnamed_arg2: any): void
        _var_changed(): void
        readonly var_changed: Signal0
    }
    /** A node used to override global shader parameters' values in a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shaderglobalsoverride.html  
     */
    class ShaderGlobalsOverride extends Node {
        constructor(identifier?: any)
        _activate(): void
    }
    /** A snippet of shader code to be included in a [Shader] with `#include`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shaderinclude.html  
     */
    class ShaderInclude extends Resource {
        constructor(identifier?: any)
        /** Returns the code of the shader include file. The returned text is what the user has written, not the full generated code used internally. */
        get code(): string
        set code(value: string)
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shadermaterial.html  
     */
    class ShaderMaterial extends Material {
        constructor(identifier?: any)
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
        get shader(): Shader
        set shader(value: Shader)
    }
    /** Abstract base class for 2D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shape2d.html  
     */
    class Shape2D extends Resource {
        constructor(identifier?: any)
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
        get custom_solver_bias(): float64
        set custom_solver_bias(value: float64)
    }
    /** Abstract base class for 3D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shape3d.html  
     */
    class Shape3D extends Resource {
        constructor(identifier?: any)
        /** Returns the [ArrayMesh] used to draw the debug collision for this [Shape3D]. */
        get_debug_mesh(): ArrayMesh
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.  
         */
        get custom_solver_bias(): float64
        set custom_solver_bias(value: float64)
        
        /** The collision margin for the shape. This is not used in Godot Physics.  
         *  Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.  
         */
        get margin(): float64
        set margin(value: float64)
    }
    /** A 2D shape that sweeps a region of space to detect [CollisionObject2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shapecast2d.html  
     */
    class ShapeCast2D extends Node2D {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        get_collision_count(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** `enabled == true` is not required for this to work.  
         */
        force_shapecast_update(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider(index: int64): Object
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: int64): RID
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider_shape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** this point is in the **global** coordinate system.  
         */
        get_collision_point(index: int64): Vector2
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        get_collision_normal(index: int64): Vector2
        
        /** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
        get_closest_collision_safe_fraction(): float64
        
        /** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
        get_closest_collision_unsafe_fraction(): float64
        
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
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The [Shape2D]-derived shape to be used for collision queries. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get exclude_parent(): boolean
        set exclude_parent(value: boolean)
        
        /** The shape's destination point, relative to this node's `position`. */
        get target_position(): Vector2
        set target_position(value: Vector2)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get max_results(): int64
        set max_results(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
        get collision_result(): Array
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
    }
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shapecast3d.html  
     */
    class ShapeCast3D extends Node3D {
        constructor(identifier?: any)
        /**  *Obsoleted.*  Use [signal Resource.changed] instead. */
        resource_changed(resource: Resource): void
        
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        is_colliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        get_collision_count(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** `enabled == true` is not required for this to work.  
         */
        force_shapecast_update(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider(index: int64): Object
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: int64): RID
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        get_collider_shape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** this point is in the **global** coordinate system.  
         */
        get_collision_point(index: int64): Vector3
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        get_collision_normal(index: int64): Vector3
        
        /** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
        get_closest_collision_safe_fraction(): float64
        
        /** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
        get_closest_collision_unsafe_fraction(): float64
        
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
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The [Shape3D]-derived shape to be used for collision queries. */
        get shape(): Shape3D
        set shape(value: Shape3D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get exclude_parent(): boolean
        set exclude_parent(value: boolean)
        
        /** The shape's destination point, relative to this node's `position`. */
        get target_position(): Vector3
        set target_position(value: Vector3)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get max_results(): int64
        set max_results(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.2/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
        get collision_result(): Array
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collide_with_areas(): boolean
        set collide_with_areas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collide_with_bodies(): boolean
        set collide_with_bodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debug_shape_custom_color(): Color
        set debug_shape_custom_color(value: Color)
    }
    class ShapeCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A shortcut for binding input.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_shortcut.html  
     */
    class Shortcut extends Resource {
        constructor(identifier?: any)
        /** Returns whether [member events] contains an [InputEvent] which is valid. */
        has_valid_event(): boolean
        
        /** Returns whether any [InputEvent] in [member events] equals [param event]. */
        matches_event(event: InputEvent): boolean
        
        /** Returns the shortcut's first valid [InputEvent] as a [String]. */
        get_as_text(): string
        
        /** The shortcut's [InputEvent] array.  
         *  Generally the [InputEvent] used is an [InputEventKey], though it can be any [InputEvent], including an [InputEventAction].  
         */
        get events(): Array
        set events(value: Array)
    }
    class ShortcutBin extends Node {
        constructor(identifier?: any)
    }
    class SizeFlagPresetPicker extends ControlEditorPresetPicker {
        constructor(identifier?: any)
        readonly size_flags_selected: Signal1<int64>
    }
    /** The parent of a hierarchy of [Bone2D]s, used to create a 2D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeleton2d.html  
     */
    class Skeleton2D extends Node2D {
        constructor(identifier?: any)
        _update_bone_setup(): void
        _update_transform(): void
        
        /** Returns the number of [Bone2D] nodes in the node hierarchy parented by Skeleton2D. */
        get_bone_count(): int64
        
        /** Returns a [Bone2D] from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter [param idx]. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling. */
        get_bone(idx: int64): Bone2D
        
        /** Returns the [RID] of a Skeleton2D instance. */
        get_skeleton(): RID
        
        /** Sets the [SkeletonModificationStack2D] attached to this skeleton. */
        set_modification_stack(modification_stack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] attached to this skeleton, if one exists. */
        get_modification_stack(): SkeletonModificationStack2D
        
        /** Executes all the modifications on the [SkeletonModificationStack2D], if the Skeleton2D has one assigned. */
        execute_modifications(delta: float64, execution_mode: int64): void
        
        /** Sets the local pose transform, [param override_pose], for the bone at [param bone_idx].  
         *  [param strength] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!  
         */
        set_bone_local_pose_override(bone_idx: int64, override_pose: Transform2D, strength: float64, persistent: boolean): void
        
        /** Returns the local pose override transform for [param bone_idx]. */
        get_bone_local_pose_override(bone_idx: int64): Transform2D
        
        /** Emitted when the [Bone2D] setup attached to this skeletons changes. This is primarily used internally within the skeleton. */
        readonly bone_setup_changed: Signal0
    }
    class Skeleton2DEditor extends Control {
        constructor(identifier?: any)
    }
    class Skeleton2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
        
        /** Adds a bone, with name [param name]. [method get_bone_count] will become the bone index. */
        add_bone(name: string): void
        
        /** Returns the bone index that matches [param name] as its name. */
        find_bone(name: string): int64
        
        /** Returns the name of the bone at index [param bone_idx]. */
        get_bone_name(bone_idx: int64): string
        set_bone_name(bone_idx: int64, name: string): void
        
        /** Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** The parent bone returned will always be less than [param bone_idx].  
         */
        get_bone_parent(bone_idx: int64): int64
        
        /** Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** [param parent_idx] must be less than [param bone_idx].  
         */
        set_bone_parent(bone_idx: int64, parent_idx: int64): void
        
        /** Returns the number of bones in the skeleton. */
        get_bone_count(): int64
        
        /** Returns the number of times the bone hierarchy has changed within this skeleton, including renames.  
         *  The Skeleton version is not serialized: only use within a single instance of Skeleton3D.  
         *  Use for invalidating caches in IK solvers and other nodes which process bones.  
         */
        get_version(): int64
        
        /** Unparents the bone at [param bone_idx] and sets its rest position to that of its parent prior to being reset. */
        unparent_bone_and_rest(bone_idx: int64): void
        
        /** Returns an array containing the bone indexes of all the child node of the passed in bone, [param bone_idx]. */
        get_bone_children(bone_idx: int64): PackedInt32Array
        
        /** Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton. */
        get_parentless_bones(): PackedInt32Array
        
        /** Returns the rest transform for a bone [param bone_idx]. */
        get_bone_rest(bone_idx: int64): Transform3D
        
        /** Sets the rest transform for bone [param bone_idx]. */
        set_bone_rest(bone_idx: int64, rest: Transform3D): void
        
        /** Returns the global rest transform for [param bone_idx]. */
        get_bone_global_rest(bone_idx: int64): Transform3D
        create_skin_from_rest_transforms(): Skin
        
        /** Binds the given Skin to the Skeleton. */
        register_skin(skin: Skin): SkinReference
        
        /** Returns all bones in the skeleton to their rest poses. */
        localize_rests(): void
        
        /** Clear all the bones in this skeleton. */
        clear_bones(): void
        
        /** Returns the pose transform of the specified bone. */
        get_bone_pose(bone_idx: int64): Transform3D
        
        /** Sets the pose position of the bone at [param bone_idx] to [param position]. [param position] is a [Vector3] describing a position local to the [Skeleton3D] node. */
        set_bone_pose_position(bone_idx: int64, position: Vector3): void
        
        /** Sets the pose rotation of the bone at [param bone_idx] to [param rotation]. [param rotation] is a [Quaternion] describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones. */
        set_bone_pose_rotation(bone_idx: int64, rotation: Quaternion): void
        
        /** Sets the pose scale of the bone at [param bone_idx] to [param scale]. */
        set_bone_pose_scale(bone_idx: int64, scale: Vector3): void
        
        /** Returns the pose position of the bone at [param bone_idx]. The returned [Vector3] is in the local coordinate space of the [Skeleton3D] node. */
        get_bone_pose_position(bone_idx: int64): Vector3
        
        /** Returns the pose rotation of the bone at [param bone_idx]. The returned [Quaternion] is local to the bone with respect to the rotation of any parent bones. */
        get_bone_pose_rotation(bone_idx: int64): Quaternion
        
        /** Returns the pose scale of the bone at [param bone_idx]. */
        get_bone_pose_scale(bone_idx: int64): Vector3
        
        /** Sets the bone pose to rest for [param bone_idx]. */
        reset_bone_pose(bone_idx: int64): void
        
        /** Sets all bone poses to rests. */
        reset_bone_poses(): void
        
        /** Returns whether the bone pose for the bone at [param bone_idx] is enabled. */
        is_bone_enabled(bone_idx: int64): boolean
        
        /** Disables the pose for the bone at [param bone_idx] if `false`, enables the bone pose if `true`. */
        set_bone_enabled(bone_idx: int64, enabled: boolean = true): void
        
        /** Removes the global pose override on all bones in the skeleton. */
        clear_bones_global_pose_override(): void
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *  [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.  
         */
        set_bone_global_pose_override(bone_idx: int64, pose: Transform3D, amount: float64, persistent: boolean = false): void
        
        /** Returns the global pose override transform for [param bone_idx]. */
        get_bone_global_pose_override(bone_idx: int64): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        get_bone_global_pose(bone_idx: int64): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        get_bone_global_pose_no_override(bone_idx: int64): Transform3D
        
        /** Force updates the bone transforms/poses for all bones in the skeleton.  
         *   *Deprecated.*  Do not use.  
         */
        force_update_all_bone_transforms(): void
        
        /** Force updates the bone transform for the bone at [param bone_idx] and all of its children. */
        force_update_bone_child_transform(bone_idx: int64): void
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to stop simulating. */
        physical_bones_stop_simulation(): void
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to start simulating and reacting to the physics world.  
         *  Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.  
         */
        physical_bones_start_simulation(bones: Array = []): void
        
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
        get motion_scale(): float64
        set motion_scale(value: float64)
        
        /** If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited. */
        get show_rest_only(): boolean
        set show_rest_only(value: boolean)
        get animate_physical_bones(): boolean
        set animate_physical_bones(value: boolean)
        
        /** Emitted when the pose is updated, after [constant NOTIFICATION_UPDATE_SKELETON] is received. */
        readonly pose_updated: Signal0
        
        /** This signal is emitted when one of the bones in the Skeleton3D node have changed their pose. This is used to inform nodes that rely on bone positions that one of the bones in the Skeleton3D have changed their transform/pose. */
        readonly bone_pose_changed: Signal1<int64>
        
        /** Emitted when the bone at [param bone_idx] is toggled with [method set_bone_enabled]. Use [method is_bone_enabled] to check the new value. */
        readonly bone_enabled_changed: Signal1<int64>
        
        /** Emitted when the value of [member show_rest_only] changes. */
        readonly show_rest_only_changed: Signal0
    }
    class Skeleton3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class Skeleton3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonik3d.html  
     */
    class SkeletonIK3D extends Node {
        constructor(identifier?: any)
        /** Returns the parent [Skeleton3D] Node that was present when SkeletonIK entered the [SceneTree]. Returns null if the parent node was not a [Skeleton3D] Node when SkeletonIK3D entered the [SceneTree]. */
        get_parent_skeleton(): Skeleton3D
        
        /** Returns `true` if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns `false` if SkeletonIK is stopped or [method start] was used with the `one_time` parameter set to `true`. */
        is_running(): boolean
        
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is `true`, this will take effect immediately but also reset on the next frame. */
        start(one_time: boolean = false): void
        
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        
        /** The name of the current root bone, the first bone in the IK chain. */
        get root_bone(): StringName
        set root_bone(value: StringName)
        
        /** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
        get tip_bone(): StringName
        set tip_bone(value: StringName)
        
        /** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of `1.0` will overwrite all skeleton bone transforms completely while a value of `0.0` will visually disable the SkeletonIK. A value at or below `0.01` also calls [method Skeleton3D.clear_bones_global_pose_override]. */
        get interpolation(): float64
        set interpolation(value: float64)
        
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is `true`, how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        get target(): Transform3D
        set target(value: Transform3D)
        
        /** If `true` overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
        get override_tip_basis(): boolean
        set override_tip_basis(value: boolean)
        
        /** If `true`, instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
        get use_magnet(): boolean
        set use_magnet(value: boolean)
        
        /** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
        get magnet(): Vector3
        set magnet(value: Vector3)
        
        /** Target node [NodePath] for the IK chain. If available, the node's current [Transform3D] is used instead of the [member target] property. */
        get target_node(): NodePath
        set target_node(value: NodePath | string)
        
        /** The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations. */
        get min_distance(): float64
        set min_distance(value: float64)
        
        /** Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results. */
        get max_iterations(): int64
        set max_iterations(value: int64)
    }
    class SkeletonIK3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Base class for resources that operate on [Bone2D]s in a [Skeleton2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2d.html  
     */
    class SkeletonModification2D extends Resource {
        constructor(identifier?: any)
        /** Executes the given modification. This is where the modification performs whatever function it is designed to do. */
        /* gdvirtual */ _execute(delta: float64): void
        
        /** Called when the modification is setup. This is where the modification performs initialization. */
        /* gdvirtual */ _setup_modification(modification_stack: SkeletonModificationStack2D): void
        
        /** Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.  
         *      
         *  **Note:** You will need to use the Skeleton2D from [method SkeletonModificationStack2D.get_skeleton] and it's draw functions, as the [SkeletonModification2D] resource cannot draw on its own.  
         */
        /* gdvirtual */ _draw_editor_gizmo(): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on. */
        get_modification_stack(): SkeletonModificationStack2D
        
        /** Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [SkeletonModificationStack2D] the modification is bound to should handle setting the modification up. */
        set_is_setup(is_setup: boolean): void
        
        /** Returns whether this modification has been successfully setup or not. */
        get_is_setup(): boolean
        
        /** Takes an angle and clamps it so it is within the passed-in [param min] and [param max] range. [param invert] will inversely clamp the angle, clamping it to the range outside of the given bounds. */
        clamp_angle(angle: float64, min: float64, max: float64, invert: boolean): float64
        
        /** Sets whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        set_editor_draw_gizmo(draw_gizmo: boolean): void
        
        /** Returns whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        get_editor_draw_gizmo(): boolean
        
        /** If `true`, the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes. */
        get execution_mode(): int64
        set execution_mode(value: int64)
    }
    /** A modification that uses CCDIK to manipulate a series of bones to reach a target in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dccdik.html  
     */
    class SkeletonModification2DCCDIK extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        set_ccdik_joint_bone2d_node(joint_idx: int64, bone2d_nodepath: NodePath | string): void
        
        /** Returns the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        get_ccdik_joint_bone2d_node(joint_idx: int64): NodePath
        
        /** Sets the bone index, [param bone_idx], of the CCDIK joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the CCDIK joint based on data provided by the linked skeleton. */
        set_ccdik_joint_bone_index(joint_idx: int64, bone_idx: int64): void
        
        /** Returns the index of the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        get_ccdik_joint_bone_index(joint_idx: int64): int64
        
        /** Sets whether the joint at [param joint_idx] is set to rotate from the joint, `true`, or to rotate from the tip, `false`. */
        set_ccdik_joint_rotate_from_joint(joint_idx: int64, rotate_from_joint: boolean): void
        
        /** Returns whether the joint at [param joint_idx] is set to rotate from the joint, `true`, or to rotate from the tip, `false`. The default is to rotate from the tip. */
        get_ccdik_joint_rotate_from_joint(joint_idx: int64): boolean
        
        /** Determines whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. When `true`, constraints will be enabled and taken into account when solving. */
        set_ccdik_joint_enable_constraint(joint_idx: int64, enable_constraint: boolean): void
        
        /** Returns whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. */
        get_ccdik_joint_enable_constraint(joint_idx: int64): boolean
        
        /** Sets the minimum angle constraint for the joint at [param joint_idx]. */
        set_ccdik_joint_constraint_angle_min(joint_idx: int64, angle_min: float64): void
        
        /** Returns the minimum angle constraint for the joint at [param joint_idx]. */
        get_ccdik_joint_constraint_angle_min(joint_idx: int64): float64
        
        /** Sets the maximum angle constraint for the joint at [param joint_idx]. */
        set_ccdik_joint_constraint_angle_max(joint_idx: int64, angle_max: float64): void
        
        /** Returns the maximum angle constraint for the joint at [param joint_idx]. */
        get_ccdik_joint_constraint_angle_max(joint_idx: int64): float64
        
        /** Sets whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint.  
         *  An inverted joint constraint only constraints the CCDIK joint to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        set_ccdik_joint_constraint_angle_invert(joint_idx: int64, invert: boolean): void
        
        /** Returns whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint. See [method set_ccdik_joint_constraint_angle_invert] for details. */
        get_ccdik_joint_constraint_angle_invert(joint_idx: int64): boolean
        
        /** The NodePath to the node that is the target for the CCDIK modification. This node is what the CCDIK chain will attempt to rotate the bone chain to. */
        get target_nodepath(): NodePath
        set target_nodepath(value: NodePath | string)
        
        /** The end position of the CCDIK chain. Typically, this should be a child of a [Bone2D] node attached to the final [Bone2D] in the CCDIK chain. */
        get tip_nodepath(): NodePath
        set tip_nodepath(value: NodePath | string)
        
        /** The number of CCDIK joints in the CCDIK modification. */
        get ccdik_data_chain_length(): int64
        set ccdik_data_chain_length(value: int64)
    }
    /** A modification that uses FABRIK to manipulate a series of [Bone2D] nodes to reach a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dfabrik.html  
     */
    class SkeletonModification2DFABRIK extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        set_fabrik_joint_bone2d_node(joint_idx: int64, bone2d_nodepath: NodePath | string): void
        
        /** Returns the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        get_fabrik_joint_bone2d_node(joint_idx: int64): NodePath
        
        /** Sets the bone index, [param bone_idx], of the FABRIK joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the FABRIK joint based on data provided by the linked skeleton. */
        set_fabrik_joint_bone_index(joint_idx: int64, bone_idx: int64): void
        
        /** Returns the index of the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        get_fabrik_joint_bone_index(joint_idx: int64): int64
        
        /** Sets the magnet position vector for the joint at [param joint_idx]. */
        set_fabrik_joint_magnet_position(joint_idx: int64, magnet_position: Vector2): void
        
        /** Returns the magnet position vector for the joint at [param joint_idx]. */
        get_fabrik_joint_magnet_position(joint_idx: int64): Vector2
        
        /** Sets whether the joint at [param joint_idx] will use the target node's rotation rather than letting FABRIK rotate the node.  
         *      
         *  **Note:** This option only works for the tip/final joint in the chain. For all other nodes, this option will be ignored.  
         */
        set_fabrik_joint_use_target_rotation(joint_idx: int64, use_target_rotation: boolean): void
        
        /** Returns whether the joint is using the target's rotation rather than allowing FABRIK to rotate the joint. This option only applies to the tip/final joint in the chain. */
        get_fabrik_joint_use_target_rotation(joint_idx: int64): boolean
        
        /** The NodePath to the node that is the target for the FABRIK modification. This node is what the FABRIK chain will attempt to rotate the bone chain to. */
        get target_nodepath(): NodePath
        set target_nodepath(value: NodePath | string)
        
        /** The number of FABRIK joints in the FABRIK modification. */
        get fabrik_data_chain_length(): int64
        set fabrik_data_chain_length(value: int64)
    }
    /** A modification that jiggles [Bone2D] nodes as they move towards a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2djiggle.html  
     */
    class SkeletonModification2DJiggle extends SkeletonModification2D {
        constructor(identifier?: any)
        /** If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
        set_use_colliders(use_colliders: boolean): void
        
        /** Returns whether the jiggle modifier is taking physics colliders into account when solving. */
        get_use_colliders(): boolean
        
        /** Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account. */
        set_collision_mask(collision_mask: int64): void
        
        /** Returns the collision mask used by the Jiggle modifier when collisions are enabled. */
        get_collision_mask(): int64
        
        /** Sets the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_bone2d_node(joint_idx: int64, bone2d_node: NodePath | string): void
        
        /** Returns the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_bone2d_node(joint_idx: int64): NodePath
        
        /** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton. */
        set_jiggle_joint_bone_index(joint_idx: int64, bone_idx: int64): void
        
        /** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_bone_index(joint_idx: int64): int64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification. */
        set_jiggle_joint_override(joint_idx: int64, override: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is overriding the default Jiggle joint data defined in the modification. */
        get_jiggle_joint_override(joint_idx: int64): boolean
        
        /** Sets the of stiffness of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_stiffness(joint_idx: int64, stiffness: float64): void
        
        /** Returns the stiffness of the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_stiffness(joint_idx: int64): float64
        
        /** Sets the of mass of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_mass(joint_idx: int64, mass: float64): void
        
        /** Returns the amount of mass of the jiggle joint at [param joint_idx]. */
        get_jiggle_joint_mass(joint_idx: int64): float64
        
        /** Sets the amount of damping of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_damping(joint_idx: int64, damping: float64): void
        
        /** Returns the amount of damping of the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_damping(joint_idx: int64): float64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should use gravity. */
        set_jiggle_joint_use_gravity(joint_idx: int64, use_gravity: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is using gravity or not. */
        get_jiggle_joint_use_gravity(joint_idx: int64): boolean
        
        /** Sets the gravity vector of the Jiggle joint at [param joint_idx]. */
        set_jiggle_joint_gravity(joint_idx: int64, gravity: Vector2): void
        
        /** Returns a [Vector2] representing the amount of gravity the Jiggle joint at [param joint_idx] is influenced by. */
        get_jiggle_joint_gravity(joint_idx: int64): Vector2
        
        /** The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to. */
        get target_nodepath(): NodePath
        set target_nodepath(value: NodePath | string)
        
        /** The amount of Jiggle joints in the Jiggle modification. */
        get jiggle_data_chain_length(): int64
        set jiggle_data_chain_length(value: int64)
        
        /** The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position. */
        get stiffness(): float64
        set stiffness(value: float64)
        
        /** The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting. */
        get mass(): float64
        set mass(value: float64)
        
        /** The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied. */
        get damping(): float64
        set damping(value: float64)
        
        /** Whether the gravity vector, [member gravity], should be applied to the Jiggle joints, assuming they are not overriding the default settings. */
        get use_gravity(): boolean
        set use_gravity(value: boolean)
        
        /** The default amount of gravity applied to the Jiggle joints, if they are not overridden. */
        get gravity(): Vector2
        set gravity(value: Vector2)
    }
    /** A modification that rotates a [Bone2D] node to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dlookat.html  
     */
    class SkeletonModification2DLookAt extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount. */
        set_additional_rotation(rotation: float64): void
        
        /** Returns the amount of additional rotation that is applied after the LookAt modification executes. */
        get_additional_rotation(): float64
        
        /** Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification. */
        set_enable_constraint(enable_constraint: boolean): void
        
        /** Returns `true` if the LookAt modification is using constraints. */
        get_enable_constraint(): boolean
        
        /** Sets the constraint's minimum allowed angle. */
        set_constraint_angle_min(angle_min: float64): void
        
        /** Returns the constraint's minimum allowed angle. */
        get_constraint_angle_min(): float64
        
        /** Sets the constraint's maximum allowed angle. */
        set_constraint_angle_max(angle_max: float64): void
        
        /** Returns the constraint's maximum allowed angle. */
        get_constraint_angle_max(): float64
        
        /** When `true`, the modification will use an inverted joint constraint.  
         *  An inverted joint constraint only constraints the [Bone2D] to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        set_constraint_angle_invert(invert: boolean): void
        
        /** Returns whether the constraints to this modification are inverted or not. */
        get_constraint_angle_invert(): boolean
        
        /** The index of the [Bone2D] node that the modification will operate on. */
        get bone_index(): int64
        set bone_index(value: int64)
        
        /** The [Bone2D] node that the modification will operate on. */
        get bone2d_node(): NodePath
        set bone2d_node(value: NodePath | string)
        
        /** The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [Bone2D] to. */
        get target_nodepath(): NodePath
        set target_nodepath(value: NodePath | string)
    }
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dphysicalbones.html  
     */
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [PhysicalBone2D] node at [param joint_idx].  
         *      
         *  **Note:** This is just the index used for this modification, not the bone index used in the [Skeleton2D].  
         */
        set_physical_bone_node(joint_idx: int64, physicalbone2d_node: NodePath | string): void
        
        /** Returns the [PhysicalBone2D] node at [param joint_idx]. */
        get_physical_bone_node(joint_idx: int64): NodePath
        
        /** Empties the list of [PhysicalBone2D] nodes and populates it with all [PhysicalBone2D] nodes that are children of the [Skeleton2D]. */
        fetch_physical_bones(): void
        
        /** Tell the [PhysicalBone2D] nodes to start simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to start simulating.  
         */
        start_simulation(bones: Array = []): void
        
        /** Tell the [PhysicalBone2D] nodes to stop simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to stop simulating.  
         */
        stop_simulation(bones: Array = []): void
        
        /** The number of [PhysicalBone2D] nodes linked in this modification. */
        get physical_bone_chain_length(): int64
        set physical_bone_chain_length(value: int64)
    }
    /** A modification that holds and executes a [SkeletonModificationStack2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_skeletonmodification2dstackholder.html  
     */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
        /** Sets the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        set_joint_one_bone2d_node(bone2d_node: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        get_joint_one_bone2d_node(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        set_joint_one_bone_idx(bone_idx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        get_joint_one_bone_idx(): int64
        
        /** Sets the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        set_joint_two_bone2d_node(bone2d_node: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        get_joint_two_bone2d_node(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        set_joint_two_bone_idx(bone_idx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        get_joint_two_bone_idx(): int64
        
        /** The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the [Bone2D] nodes. */
        get target_nodepath(): NodePath
        set target_nodepath(value: NodePath | string)
        
        /** The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints. */
        get target_minimum_distance(): float64
        set target_minimum_distance(value: float64)
        
        /** The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints. */
        get target_maximum_distance(): float64
        set target_maximum_distance(value: float64)
        
        /** If `true`, the bones in the modification will blend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting. */
        get flip_bend_direction(): boolean
        set flip_bend_direction(value: boolean)
    }
}
