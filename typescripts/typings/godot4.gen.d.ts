// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** Abstract base class for 3D game objects affected by physics. */
    class PhysicsBody3D extends CollisionObject3D {
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  The body will stop if it collides. Returns a [KinematicCollision3D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        move_and_collide(motion: Vector3, test_only: boolean = false, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): KinematicCollision3D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform3D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision3D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would [i]touch[/i] any other bodies.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        test_move(from: Transform3D, motion: Vector3, collision: KinematicCollision3D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): boolean
        
        /** Locks or unlocks the specified linear or rotational [param axis] depending on the value of [param lock]. */
        set_axis_lock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        
        /** Returns `true` if the specified linear or rotational [param axis] is locked. */
        get_axis_lock(axis: PhysicsServer3D.BodyAxis): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        get_collision_exceptions(): Array
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        add_collision_exception_with(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        remove_collision_exception_with(body: Node): void
    }
    /** Provides direct access to a physics body in the [PhysicsServer2D]. */
    class PhysicsDirectBodyState2D extends Object {
        get_total_gravity(): Vector2
        get_total_linear_damp(): number /*f64*/
        get_total_angular_damp(): number /*f64*/
        get_center_of_mass(): Vector2
        get_center_of_mass_local(): Vector2
        get_inverse_mass(): number /*f64*/
        get_inverse_inertia(): number /*f64*/
        set_linear_velocity(velocity: Vector2): void
        get_linear_velocity(): Vector2
        set_angular_velocity(velocity: number /*f64*/): void
        get_angular_velocity(): number /*f64*/
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        get_velocity_at_local_position(local_position: Vector2): Vector2
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        apply_central_impulse(impulse: Vector2): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        apply_torque_impulse(impulse: number /*f64*/): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_impulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        apply_central_force(force: Vector2 = Vector2.ZERO): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        apply_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        apply_torque(torque: number /*f64*/): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        add_constant_central_force(force: Vector2 = Vector2.ZERO): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        add_constant_torque(torque: number /*f64*/): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        set_constant_force(force: Vector2): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get_constant_force(): Vector2
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        set_constant_torque(torque: number /*f64*/): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get_constant_torque(): number /*f64*/
        set_sleep_state(enabled: boolean): void
        is_sleeping(): boolean
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody2D.contact_monitor].  
         */
        get_contact_count(): number /*i64*/
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        get_contact_local_position(contact_idx: number /*i64*/): Vector2
        
        /** Returns the local normal at the contact point. */
        get_contact_local_normal(contact_idx: number /*i64*/): Vector2
        
        /** Returns the local shape index of the collision. */
        get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the velocity vector at the body's contact point. */
        get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector2
        
        /** Returns the collider's [RID]. */
        get_contact_collider(contact_idx: number /*i64*/): RID
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        get_contact_collider_position(contact_idx: number /*i64*/): Vector2
        
        /** Returns the collider's object id. */
        get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the collider object. This depends on how it was created (will return a scene node if such was used to create it). */
        get_contact_collider_object(contact_idx: number /*i64*/): Object
        
        /** Returns the collider's shape index. */
        get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the velocity vector at the collider's contact point. */
        get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector2
        
        /** Returns the impulse created by the contact. */
        get_contact_impulse(contact_idx: number /*i64*/): Vector2
        get_step(): number /*f64*/
        
        /** Calls the built-in force integration code. */
        integrate_forces(): void
        
        /** Returns the current state of the space, useful for queries. */
        get_space_state(): PhysicsDirectSpaceState2D
        
        /** The timestep (delta) used for the simulation. */
        readonly step: number /*f64*/
        
        /** The inverse of the mass of the body. */
        readonly inverse_mass: number /*f64*/
        
        /** The inverse of the inertia of the body. */
        readonly inverse_inertia: number /*f64*/
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        readonly total_angular_damp: number /*f64*/
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        readonly total_linear_damp: number /*f64*/
        
        /** The total gravity vector being currently applied to this body. */
        readonly total_gravity: Vector2
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        readonly center_of_mass: Vector2
        
        /** The body's center of mass position in the body's local coordinate system. */
        readonly center_of_mass_local: Vector2
        
        /** The body's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: number /*f64*/
        
        /** The body's linear velocity in pixels per second. */
        linear_velocity: Vector2
        
        /** If `true`, this body is currently sleeping (not active). */
        sleeping: boolean
        
        /** The body's transformation matrix. */
        transform: Transform2D
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations. */
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_gravity] and its respective getter. */
        /* gdvirtual */ _get_total_gravity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_linear_damp] and its respective getter. */
        /* gdvirtual */ _get_total_linear_damp(): number /*f64*/
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_angular_damp] and its respective getter. */
        /* gdvirtual */ _get_total_angular_damp(): number /*f64*/
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass] and its respective getter. */
        /* gdvirtual */ _get_center_of_mass(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass_local] and its respective getter. */
        /* gdvirtual */ _get_center_of_mass_local(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_mass] and its respective getter. */
        /* gdvirtual */ _get_inverse_mass(): number /*f64*/
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_inertia] and its respective getter. */
        /* gdvirtual */ _get_inverse_inertia(): number /*f64*/
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective setter. */
        /* gdvirtual */ _set_linear_velocity(velocity: Vector2): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective getter. */
        /* gdvirtual */ _get_linear_velocity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective setter. */
        /* gdvirtual */ _set_angular_velocity(velocity: number /*f64*/): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective getter. */
        /* gdvirtual */ _get_angular_velocity(): number /*f64*/
        
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
        /* gdvirtual */ _apply_torque_impulse(impulse: number /*f64*/): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_force]. */
        /* gdvirtual */ _apply_central_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_force]. */
        /* gdvirtual */ _apply_force(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque]. */
        /* gdvirtual */ _apply_torque(torque: number /*f64*/): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_central_force]. */
        /* gdvirtual */ _add_constant_central_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_force]. */
        /* gdvirtual */ _add_constant_force(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_torque]. */
        /* gdvirtual */ _add_constant_torque(torque: number /*f64*/): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_force]. */
        /* gdvirtual */ _set_constant_force(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_force]. */
        /* gdvirtual */ _get_constant_force(): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_torque]. */
        /* gdvirtual */ _set_constant_torque(torque: number /*f64*/): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_torque]. */
        /* gdvirtual */ _get_constant_torque(): number /*f64*/
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective setter. */
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective getter. */
        /* gdvirtual */ _is_sleeping(): boolean
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_count]. */
        /* gdvirtual */ _get_contact_count(): number /*i64*/
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_position]. */
        /* gdvirtual */ _get_contact_local_position(contact_idx: number /*i64*/): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_normal]. */
        /* gdvirtual */ _get_contact_local_normal(contact_idx: number /*i64*/): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_shape]. */
        /* gdvirtual */ _get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_velocity_at_position]. */
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider]. */
        /* gdvirtual */ _get_contact_collider(contact_idx: number /*i64*/): RID
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_position]. */
        /* gdvirtual */ _get_contact_collider_position(contact_idx: number /*i64*/): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_id]. */
        /* gdvirtual */ _get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_object]. */
        /* gdvirtual */ _get_contact_collider_object(contact_idx: number /*i64*/): Object
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_shape]. */
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position]. */
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_impulse]. */
        /* gdvirtual */ _get_contact_impulse(contact_idx: number /*i64*/): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.step] and its respective getter. */
        /* gdvirtual */ _get_step(): number /*f64*/
        
        /** Overridable version of [method PhysicsDirectBodyState2D.integrate_forces]. */
        /* gdvirtual */ _integrate_forces(): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_space_state]. */
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState2D
    }
    /** Provides direct access to a physics body in the [PhysicsServer3D]. */
    class PhysicsDirectBodyState3D extends Object {
        get_total_gravity(): Vector3
        get_total_linear_damp(): number /*f64*/
        get_total_angular_damp(): number /*f64*/
        get_center_of_mass(): Vector3
        get_center_of_mass_local(): Vector3
        get_principal_inertia_axes(): Basis
        get_inverse_mass(): number /*f64*/
        get_inverse_inertia(): Vector3
        get_inverse_inertia_tensor(): Basis
        set_linear_velocity(velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        
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
        set_sleep_state(enabled: boolean): void
        is_sleeping(): boolean
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody3D.contact_monitor].  
         */
        get_contact_count(): number /*i64*/
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        get_contact_local_position(contact_idx: number /*i64*/): Vector3
        
        /** Returns the local normal at the contact point. */
        get_contact_local_normal(contact_idx: number /*i64*/): Vector3
        
        /** Impulse created by the contact. */
        get_contact_impulse(contact_idx: number /*i64*/): Vector3
        
        /** Returns the local shape index of the collision. */
        get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the linear velocity vector at the body's contact point. */
        get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector3
        
        /** Returns the collider's [RID]. */
        get_contact_collider(contact_idx: number /*i64*/): RID
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        get_contact_collider_position(contact_idx: number /*i64*/): Vector3
        
        /** Returns the collider's object id. */
        get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the collider object. */
        get_contact_collider_object(contact_idx: number /*i64*/): Object
        
        /** Returns the collider's shape index. */
        get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        
        /** Returns the linear velocity vector at the collider's contact point. */
        get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector3
        get_step(): number /*f64*/
        
        /** Calls the built-in force integration code. */
        integrate_forces(): void
        
        /** Returns the current state of the space, useful for queries. */
        get_space_state(): PhysicsDirectSpaceState3D
        
        /** The timestep (delta) used for the simulation. */
        readonly step: number /*f64*/
        
        /** The inverse of the mass of the body. */
        readonly inverse_mass: number /*f64*/
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        readonly total_angular_damp: number /*f64*/
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        readonly total_linear_damp: number /*f64*/
        
        /** The inverse of the inertia of the body. */
        readonly inverse_inertia: Vector3
        
        /** The inverse of the inertia tensor of the body. */
        readonly inverse_inertia_tensor: Basis
        
        /** The total gravity vector being currently applied to this body. */
        readonly total_gravity: Vector3
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        readonly center_of_mass: Vector3
        
        /** The body's center of mass position in the body's local coordinate system. */
        readonly center_of_mass_local: Vector3
        readonly principal_inertia_axes: Basis
        
        /** The body's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: Vector3
        
        /** The body's linear velocity in units per second. */
        linear_velocity: Vector3
        
        /** If `true`, this body is currently sleeping (not active). */
        sleeping: boolean
        
        /** The body's transformation matrix. */
        transform: Transform3D
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState3D] implementations. */
    class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
        /* gdvirtual */ _get_total_gravity(): Vector3
        /* gdvirtual */ _get_total_linear_damp(): number /*f64*/
        /* gdvirtual */ _get_total_angular_damp(): number /*f64*/
        /* gdvirtual */ _get_center_of_mass(): Vector3
        /* gdvirtual */ _get_center_of_mass_local(): Vector3
        /* gdvirtual */ _get_principal_inertia_axes(): Basis
        /* gdvirtual */ _get_inverse_mass(): number /*f64*/
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
        /* gdvirtual */ _get_contact_count(): number /*i64*/
        /* gdvirtual */ _get_contact_local_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_local_normal(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_impulse(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_collider(contact_idx: number /*i64*/): RID
        /* gdvirtual */ _get_contact_collider_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_object(contact_idx: number /*i64*/): Object
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector3
        /* gdvirtual */ _get_step(): number /*f64*/
        /* gdvirtual */ _integrate_forces(): void
        /* gdvirtual */ _get_space_state(): PhysicsDirectSpaceState3D
    }
    /** Provides direct access to a physics space in the [PhysicsServer2D]. */
    class PhysicsDirectSpaceState2D extends Object {
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters2D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** [ConcavePolygonShape2D]s and [CollisionPolygon2D]s in `Segments` build mode are not solid shapes. Therefore, they will not be detected.  
         */
        intersect_point(parameters: PhysicsPointQueryParameters2D, max_results: number /*i64*/ = 32): Array
        
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
        intersect_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        
        /** Checks how far a [Shape2D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters2D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape2D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape2D]s that the shape is already colliding with.  
         */
        cast_motion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters2D] object, second one is in the collided shape from the physics space.  
         */
        collide_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        
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
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState2D] implementations. */
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        /* gdvirtual */ _intersect_ray(from: Vector2, to: Vector2, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, result: number /*i64*/): boolean
        /* gdvirtual */ _intersect_point(position: Vector2, canvas_instance_id: number /*i64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, result: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: number /*i64*/, closest_unsafe: number /*i64*/): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/, result_count: number /*i64*/): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: number /*i64*/): boolean
        is_body_excluded_from_query(body: RID): boolean
    }
    /** Provides direct access to a physics space in the [PhysicsServer3D]. */
    class PhysicsDirectSpaceState3D extends Object {
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters3D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersect_point(parameters: PhysicsPointQueryParameters3D, max_results: number /*i64*/ = 32): Array
        
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
        intersect_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        
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
        collide_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        
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
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState3D] implementations. */
    class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
        /* gdvirtual */ _intersect_ray(from: Vector3, to: Vector3, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, hit_back_faces: boolean, pick_ray: boolean, result: number /*i64*/): boolean
        /* gdvirtual */ _intersect_point(position: Vector3, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, result_count: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: number /*i64*/, closest_unsafe: number /*i64*/, info: number /*i64*/): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/, result_count: number /*i64*/): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform3D, motion: Vector3, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: number /*i64*/): boolean
        /* gdvirtual */ _get_closest_point_to_object_volume(object: RID, point: Vector3): Vector3
        is_body_excluded_from_query(body: RID): boolean
    }
    /** Holds physics-related properties of a surface, namely its roughness and bounciness. */
    class PhysicsMaterial extends Resource {
        set_friction(friction: number /*f64*/): void
        get_friction(): number /*f64*/
        set_rough(rough: boolean): void
        is_rough(): boolean
        set_bounce(bounce: number /*f64*/): void
        get_bounce(): number /*f64*/
        set_absorbent(absorbent: boolean): void
        is_absorbent(): boolean
        
        /** The body's friction. Values range from `0` (frictionless) to `1` (maximum friction). */
        friction: number /*f64*/
        
        /** If `true`, the physics engine will use the friction of the object marked as "rough" when two objects collide. If `false`, the physics engine will use the lowest friction of all colliding objects instead. If `true` for both colliding objects, the physics engine will use the highest friction. */
        rough: boolean
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicsBody3D] that preserves all its energy over time, set [member bounce] to `1.0`, the body's linear damp mode to **Replace** (if applicable), its linear damp to `0.0`, its angular damp mode to **Replace** (if applicable), and its angular damp to `0.0`.  
         */
        bounce: number /*f64*/
        
        /** If `true`, subtracts the bounciness from the colliding object's bounciness instead of adding it. */
        absorbent: boolean
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_point]. */
    class PhysicsPointQueryParameters2D extends RefCounted {
        set_position(position: Vector2): void
        get_position(): Vector2
        set_canvas_instance_id(canvas_instance_id: number /*i64*/): void
        get_canvas_instance_id(): number /*i64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        
        /** The position being queried for, in global coordinates. */
        position: Vector2
        
        /** If different from `0`, restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].  
         *  If `0`, restricts the query to the Viewport's default canvas layer.  
         */
        canvas_instance_id: number /*i64*/
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude: Array
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area2D]s into account. */
        collide_with_areas: boolean
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_point]. */
    class PhysicsPointQueryParameters3D extends RefCounted {
        set_position(position: Vector3): void
        get_position(): Vector3
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        
        /** The position being queried for, in global coordinates. */
        position: Vector3
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        exclude: Array
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area3D]s into account. */
        collide_with_areas: boolean
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_ray]. */
    class PhysicsRayQueryParameters2D extends RefCounted {
        /** Returns a new, pre-configured [PhysicsRayQueryParameters2D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector2, to: Vector2, collision_mask: number /*i64*/ = -1, exclude: Array = <any> {} /*compound.type from 28([object Object])*/): PhysicsRayQueryParameters2D
        set_from(from: Vector2): void
        get_from(): Vector2
        set_to(to: Vector2): void
        get_to(): Vector2
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        
        /** The starting point of the ray being queried for, in global coordinates. */
        from: Vector2
        
        /** The ending point of the ray being queried for, in global coordinates. */
        to: Vector2
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude: Array
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area2D]s into account. */
        collide_with_areas: boolean
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        hit_from_inside: boolean
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_ray]. */
    class PhysicsRayQueryParameters3D extends RefCounted {
        /** Returns a new, pre-configured [PhysicsRayQueryParameters3D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector3, to: Vector3, collision_mask: number /*i64*/ = -1, exclude: Array = <any> {} /*compound.type from 28([object Object])*/): PhysicsRayQueryParameters3D
        set_from(from: Vector3): void
        get_from(): Vector3
        set_to(to: Vector3): void
        get_to(): Vector3
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        set_hit_back_faces(enable: boolean): void
        is_hit_back_faces_enabled(): boolean
        
        /** The starting point of the ray being queried for, in global coordinates. */
        from: Vector3
        
        /** The ending point of the ray being queried for, in global coordinates. */
        to: Vector3
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        exclude: Array
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area3D]s into account. */
        collide_with_areas: boolean
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes. */
        hit_from_inside: boolean
        
        /** If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        hit_back_faces: boolean
    }
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies. */
    class PhysicsServer3DRenderingServerHandler extends Object {
        /** Called by the [PhysicsServer3D] to set the position for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param vertex] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _set_vertex(vertex_id: number /*i64*/, vertex: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param normal] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _set_normal(vertex_id: number /*i64*/, normal: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the bounding box for the [SoftBody3D]. */
        /* gdvirtual */ _set_aabb(aabb: AABB): void
        
        /** Sets the position for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        set_vertex(vertex_id: number /*i64*/, vertex: Vector3): void
        
        /** Sets the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        set_normal(vertex_id: number /*i64*/, normal: Vector3): void
        
        /** Sets the bounding box for the [SoftBody3D]. */
        set_aabb(aabb: AABB): void
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_shape]. */
    class PhysicsShapeQueryParameters2D extends RefCounted {
        set_shape(shape: Resource): void
        get_shape(): Resource
        set_shape_rid(shape: RID): void
        get_shape_rid(): RID
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        set_motion(motion: Vector2): void
        get_motion(): Vector2
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude: Array
        
        /** The collision margin for the shape. */
        margin: number /*f64*/
        
        /** The motion of the shape being queried for. */
        motion: Vector2
        
        /** The [Shape2D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        shape: Shape2D
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        shape_rid: RID
        
        /** The queried shape's transform matrix. */
        transform: Transform2D
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area2D]s into account. */
        collide_with_areas: boolean
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_shape]. */
    class PhysicsShapeQueryParameters3D extends RefCounted {
        set_shape(shape: Resource): void
        get_shape(): Resource
        set_shape_rid(shape: RID): void
        get_shape_rid(): RID
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        set_motion(motion: Vector3): void
        get_motion(): Vector3
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        set_collision_mask(collision_mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_exclude(exclude: Array): void
        get_exclude(): Array
        set_collide_with_bodies(enable: boolean): void
        is_collide_with_bodies_enabled(): boolean
        set_collide_with_areas(enable: boolean): void
        is_collide_with_areas_enabled(): boolean
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        exclude: Array
        
        /** The collision margin for the shape. */
        margin: number /*f64*/
        
        /** The motion of the shape being queried for. */
        motion: Vector2
        
        /** The [Shape3D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        shape: Shape3D
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        shape_rid: RID
        
        /** The queried shape's transform matrix. */
        transform: Transform3D
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        
        /** If `true`, the query will take [Area3D]s into account. */
        collide_with_areas: boolean
    }
    /** Provides parameters for [method PhysicsServer2D.body_test_motion]. */
    class PhysicsTestMotionParameters2D extends RefCounted {
        get_from(): Transform2D
        set_from(from: Transform2D): void
        get_motion(): Vector2
        set_motion(motion: Vector2): void
        get_margin(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        is_collide_separation_ray_enabled(): boolean
        set_collide_separation_ray_enabled(enabled: boolean): void
        get_exclude_bodies(): Array
        set_exclude_bodies(exclude_list: Array): void
        get_exclude_objects(): Array
        set_exclude_objects(exclude_list: Array): void
        is_recovery_as_collision_enabled(): boolean
        set_recovery_as_collision_enabled(enabled: boolean): void
        
        /** Transform in global space where the motion should start. Usually set to [member Node2D.global_transform] for the current body's transform. */
        from: Transform2D
        
        /** Motion vector to define the length and direction of the motion to test. */
        motion: Vector2
        
        /** Increases the size of the shapes involved in the collision detection. */
        margin: number /*f64*/
        
        /** If set to `true`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        collide_separation_ray: boolean
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude_bodies: Array
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        exclude_objects: Array
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        recovery_as_collision: boolean
    }
    /** Provides parameters for [method PhysicsServer3D.body_test_motion]. */
    class PhysicsTestMotionParameters3D extends RefCounted {
        get_from(): Transform3D
        set_from(from: Transform3D): void
        get_motion(): Vector3
        set_motion(motion: Vector3): void
        get_margin(): number /*f64*/
        set_margin(margin: number /*f64*/): void
        get_max_collisions(): number /*i64*/
        set_max_collisions(max_collisions: number /*i64*/): void
        is_collide_separation_ray_enabled(): boolean
        set_collide_separation_ray_enabled(enabled: boolean): void
        get_exclude_bodies(): Array
        set_exclude_bodies(exclude_list: Array): void
        get_exclude_objects(): Array
        set_exclude_objects(exclude_list: Array): void
        is_recovery_as_collision_enabled(): boolean
        set_recovery_as_collision_enabled(enabled: boolean): void
        
        /** Transform in global space where the motion should start. Usually set to [member Node3D.global_transform] for the current body's transform. */
        from: Transform3D
        
        /** Motion vector to define the length and direction of the motion to test. */
        motion: Vector3
        
        /** Increases the size of the shapes involved in the collision detection. */
        margin: number /*f64*/
        
        /** Maximum number of returned collisions, between `1` and `32`. Always returns the deepest detected collisions. */
        max_collisions: number /*i64*/
        
        /** If set to `true`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        collide_separation_ray: boolean
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        exclude_bodies: Array
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        exclude_objects: Array
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        recovery_as_collision: boolean
    }
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion]. */
    class PhysicsTestMotionResult2D extends RefCounted {
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
        get_collider_id(): number /*i64*/
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D], if a collision occurred. */
        get_collider_rid(): RID
        
        /** Returns the colliding body's attached [Object], if a collision occurred. */
        get_collider(): Object
        
        /** Returns the colliding body's shape index, if a collision occurred. See [CollisionObject2D]. */
        get_collider_shape(): number /*i64*/
        
        /** Returns the moving object's colliding shape, if a collision occurred. */
        get_collision_local_shape(): number /*i64*/
        
        /** Returns the length of overlap along the collision normal, if a collision occurred. */
        get_collision_depth(): number /*f64*/
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        get_collision_safe_fraction(): number /*f64*/
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        get_collision_unsafe_fraction(): number /*f64*/
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion]. */
    class PhysicsTestMotionResult3D extends RefCounted {
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        get_collision_safe_fraction(): number /*f64*/
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        get_collision_unsafe_fraction(): number /*f64*/
        
        /** Returns the number of detected collisions. */
        get_collision_count(): number /*i64*/
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_point(collision_index: number /*i64*/ = 0): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_normal(collision_index: number /*i64*/ = 0): Vector3
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider_velocity(collision_index: number /*i64*/ = 0): Vector3
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. See [method Object.get_instance_id]. */
        get_collider_id(collision_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider_rid(collision_index: number /*i64*/ = 0): RID
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. */
        get_collider(collision_index: number /*i64*/ = 0): Object
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [CollisionObject3D]. */
        get_collider_shape(collision_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_local_shape(collision_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred. */
        get_collision_depth(collision_index: number /*i64*/ = 0): number /*f64*/
    }
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate. */
    class PinJoint2D extends Joint2D {
        set_softness(softness: number /*f64*/): void
        get_softness(): number /*f64*/
        set_angular_limit_lower(angular_limit_lower: number /*f64*/): void
        get_angular_limit_lower(): number /*f64*/
        set_angular_limit_upper(angular_limit_upper: number /*f64*/): void
        get_angular_limit_upper(): number /*f64*/
        set_motor_target_velocity(motor_target_velocity: number /*f64*/): void
        get_motor_target_velocity(): number /*f64*/
        set_motor_enabled(enabled: boolean): void
        is_motor_enabled(): boolean
        set_angular_limit_enabled(enabled: boolean): void
        is_angular_limit_enabled(): boolean
        
        /** The higher this value, the more the bond to the pinned partner can flex. */
        softness: number /*f64*/
        
        /** If `true`, the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
        angular_limit_enabled: boolean
        
        /** The minimum rotation. Only active if [member angular_limit_enabled] is `true`. */
        angular_limit_lower: number /*f64*/
        
        /** The maximum rotation. Only active if [member angular_limit_enabled] is `true`. */
        angular_limit_upper: number /*f64*/
        
        /** When activated, a motor turns the pin. */
        motor_enabled: boolean
        
        /** Target speed for the motor. In radians per second. */
        motor_target_velocity: number /*f64*/
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
    /** A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate. */
    class PinJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: PinJoint3D.Param, value: number /*f64*/): void
        
        /** Returns the value of the specified parameter. */
        get_param(param: PinJoint3D.Param): number /*f64*/
    }
    /** A [Cubemap] without image data. */
    class PlaceholderCubemap extends PlaceholderTextureLayered {
    }
    /** A [CubemapArray] without image data. */
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
    }
    /** Placeholder class for a material. */
    class PlaceholderMaterial extends Material {
    }
    /** Placeholder class for a mesh. */
    class PlaceholderMesh extends Mesh {
        set_aabb(aabb: AABB): void
        
        /** The smallest [AABB] enclosing this mesh in local space. */
        aabb: AABB
    }
    /** Placeholder class for a 2-dimensional texture. */
    class PlaceholderTexture2D extends Texture2D {
        set_size(size: Vector2): void
        
        /** The texture's size (in pixels). */
        size: Vector2
    }
    /** Placeholder class for a 2-dimensional texture array. */
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
    }
    /** Placeholder class for a 3-dimensional texture. */
    class PlaceholderTexture3D extends Texture3D {
        set_size(size: Vector3i): void
        get_size(): Vector3i
        
        /** The texture's size (in pixels). */
        size: Vector3i
    }
    /** Placeholder class for a 2-dimensional texture array. */
    class PlaceholderTextureLayered extends TextureLayered {
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_layers(layers: number /*i64*/): void
        
        /** The size of each texture layer (in pixels). */
        size: Vector2i
        
        /** The number of layers in the texture array. */
        layers: number /*i64*/
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
    /** Class representing a planar [PrimitiveMesh]. */
    class PlaneMesh extends PrimitiveMesh {
        set_size(size: Vector2): void
        get_size(): Vector2
        set_subdivide_width(subdivide: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_depth(subdivide: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
        set_center_offset(offset: Vector3): void
        get_center_offset(): Vector3
        set_orientation(orientation: PlaneMesh.Orientation): void
        get_orientation(): PlaneMesh.Orientation
        
        /** Size of the generated plane. */
        size: Vector2
        
        /** Number of subdivision along the X axis. */
        subdivide_width: number /*i64*/
        
        /** Number of subdivision along the Z axis. */
        subdivide_depth: number /*i64*/
        
        /** Offset of the generated plane. Useful for particles. */
        center_offset: Vector3
        
        /** Direction that the [PlaneMesh] is facing. See [enum Orientation] for options. */
        orientation: number /*i64*/
    }
    class PluginConfigDialog extends ConfirmationDialog {
        readonly plugin_ready: Signal // script_path: string, activate_name: string => void
    }
    /** Positional 2D light source. */
    class PointLight2D extends Light2D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_offset(texture_offset: Vector2): void
        get_texture_offset(): Vector2
        set_texture_scale(texture_scale: number /*f64*/): void
        get_texture_scale(): number /*f64*/
        
        /** [Texture2D] used for the light's appearance. */
        texture: Texture2D
        
        /** The offset of the light's [member texture]. */
        offset: Vector2
        
        /** The [member texture]'s scale factor. */
        texture_scale: number /*f64*/
        
        /** The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane. */
        height: number /*f64*/
    }
    /** Mesh with a single Point primitive. */
    class PointMesh extends PrimitiveMesh {
    }
    /** A 2D polygon. */
    class Polygon2D extends Node2D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        set_uv(uv: PackedVector2Array): void
        get_uv(): PackedVector2Array
        set_color(color: Color): void
        get_color(): Color
        set_polygons(polygons: Array): void
        get_polygons(): Array
        set_vertex_colors(vertex_colors: PackedColorArray): void
        get_vertex_colors(): PackedColorArray
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_texture_offset(texture_offset: Vector2): void
        get_texture_offset(): Vector2
        set_texture_rotation(texture_rotation: number /*f64*/): void
        get_texture_rotation(): number /*f64*/
        set_texture_scale(texture_scale: Vector2): void
        get_texture_scale(): Vector2
        set_invert_enabled(invert: boolean): void
        get_invert_enabled(): boolean
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        set_invert_border(invert_border: number /*f64*/): void
        get_invert_border(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        
        /** Adds a bone with the specified [param path] and [param weights]. */
        add_bone(path: NodePath, weights: PackedFloat32Array): void
        
        /** Returns the number of bones in this [Polygon2D]. */
        get_bone_count(): number /*i64*/
        
        /** Returns the path to the node associated with the specified bone. */
        get_bone_path(index: number /*i64*/): NodePath
        
        /** Returns the weight values of the specified bone. */
        get_bone_weights(index: number /*i64*/): PackedFloat32Array
        
        /** Removes the specified bone from this [Polygon2D]. */
        erase_bone(index: number /*i64*/): void
        
        /** Removes all bones from this [Polygon2D]. */
        clear_bones(): void
        
        /** Sets the path to the node associated with the specified bone. */
        set_bone_path(index: number /*i64*/, path: NodePath): void
        
        /** Sets the weight values for the specified bone. */
        set_bone_weights(index: number /*i64*/, weights: PackedFloat32Array): void
        set_skeleton(skeleton: NodePath): void
        get_skeleton(): NodePath
        set_internal_vertex_count(internal_vertex_count: number /*i64*/): void
        get_internal_vertex_count(): number /*i64*/
        _set_bones(bones: Array): void
        _get_bones(): Array
        
        /** The polygon's fill color. If [member texture] is set, it will be multiplied by this color. It will also be the default color for vertices not set in [member vertex_colors]. */
        color: Color
        
        /** The offset applied to each vertex. */
        offset: Vector2
        
        /** If `true`, polygon edges will be anti-aliased. */
        antialiased: boolean
        
        /** The polygon's fill texture. Use [member uv] to set texture coordinates. */
        texture: Texture2D
        
        /** Amount to offset the polygon's [member texture]. If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position. */
        texture_offset: Vector2
        
        /** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
        texture_scale: Vector2
        
        /** The texture's rotation in radians. */
        texture_rotation: number /*f64*/
        
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        skeleton: NodePath
        
        /** If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
        invert_enabled: boolean
        
        /** Added padding applied to the bounding box when [member invert_enabled] is set to `true`. Setting this value too small may result in a "Bad Polygon" error. */
        invert_border: number /*f64*/
        
        /** The polygon's list of vertices. The final point will be connected to the first.  
         *      
         *  **Note:** This returns a copy of the [PackedVector2Array] rather than a reference.  
         */
        polygon: PackedVector2Array
        
        /** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`. */
        uv: PackedVector2Array
        
        /** Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [member color]. */
        vertex_colors: PackedColorArray
        
        /** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
        polygons: Array
        
        /** Internal list of [Bone2D] nodes used by the assigned [member skeleton]. Edited using the Polygon2D editor ("UV" button on the top toolbar). */
        bones: Array
        
        /** Number of internal vertices, used for UV mapping. */
        internal_vertex_count: number /*i64*/
    }
    class Polygon2DEditor extends AbstractPolygon2DEditor {
        _update_bone_list(): void
        _update_polygon_editing_state(): void
    }
    class Polygon2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    class Polygon3DEditor extends HBoxContainer {
        _polygon_draw(): void
    }
    class Polygon3DEditorPlugin extends EditorPlugin {
    }
    /** Flat 2D polygon shape for use with occlusion culling in [OccluderInstance3D]. */
    class PolygonOccluder3D extends Occluder3D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        _has_editable_3d_polygon_no_depth(): boolean
        
        /** The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.  
         *  The polygon must [i]not[/i] have intersecting lines. Otherwise, triangulation will fail (with an error message printed).  
         */
        polygon: PackedVector2Array
    }
    class PolygonPathFinder extends Resource {
        setup(points: PackedVector2Array, connections: PackedInt32Array): void
        find_path(from: Vector2, to: Vector2): PackedVector2Array
        get_intersections(from: Vector2, to: Vector2): PackedVector2Array
        get_closest_point(point: Vector2): Vector2
        is_point_inside(point: Vector2): boolean
        set_point_penalty(idx: number /*i64*/, penalty: number /*f64*/): void
        get_point_penalty(idx: number /*i64*/): number /*f64*/
        get_bounds(): Rect2
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        data: Dictionary
    }
    /** Base class for contextual windows and panels with fixed position. */
    class Popup extends Window {
        /** Emitted when the popup is hidden. */
        readonly popup_hide: Signal //  => void
    }
    /** A modal window used to display a list of options. */
    class PopupMenu extends Popup {
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
        add_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a new item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a new checkable item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_check_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a new checkable item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_icon_check_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a new radio check button with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_radio_check_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Same as [method add_icon_check_item], but uses a radio check button. */
        add_icon_radio_check_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a new multistate item with text [param label].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        add_multistate_item(label: string, max_states: number /*i64*/, default_state: number /*i64*/ = 0, id: number /*i64*/ = -1, accel: Key = 0): void
        
        /** Adds a [Shortcut].  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        add_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        
        /** Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        add_icon_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_icon_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        
        /** Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        add_radio_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        
        /** Same as [method add_icon_check_shortcut], but uses a radio check button. */
        add_icon_radio_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        add_submenu_item(label: string, submenu: string, id: number /*i64*/ = -1): void
        
        /** Sets the text of the item at the given [param index]. */
        set_item_text(index: number /*i64*/, text: string): void
        
        /** Sets item's text base writing direction. */
        set_item_text_direction(index: number /*i64*/, direction: Control.TextDirection): void
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_item_language(index: number /*i64*/, language: string): void
        
        /** Replaces the [Texture2D] icon of the item at the given [param index]. */
        set_item_icon(index: number /*i64*/, icon: Texture2D): void
        
        /** Sets the maximum allowed width of the icon for the item at the given [param index]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_item_icon_max_width(index: number /*i64*/, width: number /*i64*/): void
        
        /** Sets a modulating [Color] of the item's icon at the given [param index]. */
        set_item_icon_modulate(index: number /*i64*/, modulate: Color): void
        
        /** Sets the checkstate status of the item at the given [param index]. */
        set_item_checked(index: number /*i64*/, checked: boolean): void
        
        /** Sets the [param id] of the item at the given [param index].  
         *  The [param id] is used in [signal id_pressed] and [signal id_focused] signals.  
         */
        set_item_id(index: number /*i64*/, id: number /*i64*/): void
        
        /** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). */
        set_item_accelerator(index: number /*i64*/, accel: Key): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
        set_item_metadata(index: number /*i64*/, metadata: any): void
        
        /** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
        set_item_disabled(index: number /*i64*/, disabled: boolean): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
        set_item_submenu(index: number /*i64*/, submenu: string): void
        
        /** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text. */
        set_item_as_separator(index: number /*i64*/, enable: boolean): void
        
        /** Sets whether the item at the given [param index] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        set_item_as_checkable(index: number /*i64*/, enable: boolean): void
        
        /** Sets the type of the item at the given [param index] to radio button. If `false`, sets the type of the item to plain text. */
        set_item_as_radio_checkable(index: number /*i64*/, enable: boolean): void
        
        /** Sets the [String] tooltip of the item at the given [param index]. */
        set_item_tooltip(index: number /*i64*/, tooltip: string): void
        
        /** Sets a [Shortcut] for the item at the given [param index]. */
        set_item_shortcut(index: number /*i64*/, shortcut: Shortcut, global: boolean = false): void
        
        /** Sets the horizontal offset of the item at the given [param index]. */
        set_item_indent(index: number /*i64*/, indent: number /*i64*/): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details. */
        set_item_multistate(index: number /*i64*/, state: number /*i64*/): void
        
        /** Disables the [Shortcut] of the item at the given [param index]. */
        set_item_shortcut_disabled(index: number /*i64*/, disabled: boolean): void
        
        /** Toggles the check state of the item at the given [param index]. */
        toggle_item_checked(index: number /*i64*/): void
        
        /** Cycle to the next state of a multistate item. See [method add_multistate_item] for details. */
        toggle_item_multistate(index: number /*i64*/): void
        
        /** Returns the text of the item at the given [param index]. */
        get_item_text(index: number /*i64*/): string
        
        /** Returns item's text base writing direction. */
        get_item_text_direction(index: number /*i64*/): Control.TextDirection
        
        /** Returns item's text language code. */
        get_item_language(index: number /*i64*/): string
        
        /** Returns the icon of the item at the given [param index]. */
        get_item_icon(index: number /*i64*/): Texture2D
        
        /** Returns the maximum allowed width of the icon for the item at the given [param index]. */
        get_item_icon_max_width(index: number /*i64*/): number /*i64*/
        
        /** Returns a [Color] modulating the item's icon at the given [param index]. */
        get_item_icon_modulate(index: number /*i64*/): Color
        
        /** Returns `true` if the item at the given [param index] is checked. */
        is_item_checked(index: number /*i64*/): boolean
        
        /** Returns the ID of the item at the given [param index]. `id` can be manually assigned, while index can not. */
        get_item_id(index: number /*i64*/): number /*i64*/
        
        /** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
        get_item_index(id: number /*i64*/): number /*i64*/
        
        /** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns `0` (corresponding to [constant @GlobalScope.KEY_NONE]). */
        get_item_accelerator(index: number /*i64*/): Key
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
        get_item_metadata(index: number /*i64*/): any
        
        /** Returns `true` if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         */
        is_item_disabled(index: number /*i64*/): boolean
        
        /** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
        get_item_submenu(index: number /*i64*/): string
        
        /** Returns `true` if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
        is_item_separator(index: number /*i64*/): boolean
        
        /** Returns `true` if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        is_item_checkable(index: number /*i64*/): boolean
        
        /** Returns `true` if the item at the given [param index] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         */
        is_item_radio_checkable(index: number /*i64*/): boolean
        
        /** Returns `true` if the specified item's shortcut is disabled. */
        is_item_shortcut_disabled(index: number /*i64*/): boolean
        
        /** Returns the tooltip associated with the item at the given [param index]. */
        get_item_tooltip(index: number /*i64*/): string
        
        /** Returns the [Shortcut] associated with the item at the given [param index]. */
        get_item_shortcut(index: number /*i64*/): Shortcut
        
        /** Returns the horizontal offset of the item at the given [param index]. */
        get_item_indent(index: number /*i64*/): number /*i64*/
        
        /** Sets the currently focused item as the given [param index].  
         *  Passing `-1` as the index makes so that no item is focused.  
         */
        set_focused_item(index: number /*i64*/): void
        
        /** Returns the index of the currently focused item. Returns `-1` if no item is focused. */
        get_focused_item(): number /*i64*/
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        
        /** Moves the scroll view to make the item at the given [param index] visible. */
        scroll_to_item(index: number /*i64*/): void
        
        /** Removes the item at the given [param index] from the menu.  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         */
        remove_item(index: number /*i64*/): void
        
        /** Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.  
         *  A [param label] can optionally be provided, which will appear at the center of the separator.  
         */
        add_separator(label: string = '', id: number /*i64*/ = -1): void
        
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is `true`, the submenu nodes are automatically freed. */
        clear(free_submenus: boolean = false): void
        set_hide_on_item_selection(enable: boolean): void
        is_hide_on_item_selection(): boolean
        set_hide_on_checkable_item_selection(enable: boolean): void
        is_hide_on_checkable_item_selection(): boolean
        set_hide_on_state_item_selection(enable: boolean): void
        is_hide_on_state_item_selection(): boolean
        set_submenu_popup_delay(seconds: number /*f64*/): void
        get_submenu_popup_delay(): number /*f64*/
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        
        /** If `true`, hides the [PopupMenu] when an item is selected. */
        hide_on_item_selection: boolean
        
        /** If `true`, hides the [PopupMenu] when a checkbox or radio button is selected. */
        hide_on_checkable_item_selection: boolean
        
        /** If `true`, hides the [PopupMenu] when a state item is selected. */
        hide_on_state_item_selection: boolean
        
        /** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
        submenu_popup_delay: number /*f64*/
        
        /** If `true`, allows navigating [PopupMenu] with letter keys. */
        allow_search: boolean
        
        /** The number of items currently in the list. */
        item_count: any /*Items,item_*/
        
        /** Emitted when an item of some [param id] is pressed or its accelerator is activated.  
         *      
         *  **Note:** If [param id] is negative (either explicitly or due to overflow), this will return the corresponding index instead.  
         */
        readonly id_pressed: Signal // id: number /*i64*/ => void
        
        /** Emitted when the user navigated to an item of some [param id] using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input action. */
        readonly id_focused: Signal // id: number /*i64*/ => void
        
        /** Emitted when an item of some [param index] is pressed or its accelerator is activated. */
        readonly index_pressed: Signal // index: number /*i64*/ => void
        
        /** Emitted when any item is added, modified or removed. */
        readonly menu_changed: Signal //  => void
    }
    /** A popup with a panel background. */
    class PopupPanel extends Popup {
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
    /** Provides a compressed texture for disk and/or VRAM in a way that is portable. */
    class PortableCompressedTexture2D extends Texture2D {
        /** Initializes the compressed texture from a base image. The compression mode must be provided.  
         *  [param normal_map] is recommended to ensure optimum quality if this image will be used as a normal map.  
         *  If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.  
         */
        create_from_image(image: Image, compression_mode: PortableCompressedTexture2D.CompressionMode, normal_map: boolean = false, lossy_quality: number /*f64*/ = 0.8): void
        
        /** Return the image format used (valid after initialized). */
        get_format(): Image.Format
        
        /** Return the compression mode used (valid after initialized). */
        get_compression_mode(): PortableCompressedTexture2D.CompressionMode
        set_size_override(size: Vector2): void
        get_size_override(): Vector2
        set_keep_compressed_buffer(keep: boolean): void
        is_keeping_compressed_buffer(): boolean
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        
        /** Overrides the flag globally for all textures of this type. This is used primarily by the editor. */
        static set_keep_all_compressed_buffers(keep: boolean): void
        
        /** Return whether the flag is overridden for all textures of this type. */
        static is_keeping_all_compressed_buffers(): boolean
        _data: PackedByteArray
        
        /** Allow overriding the texture size (for 2D only). */
        size_override: Vector2
        
        /** When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.  
         *  This flag allows to keep the compressed data in memory if you intend it to persist after loading.  
         */
        keep_compressed_buffer: boolean
    }
    class PostImportPluginSkeletonRenamer extends EditorScenePostImportPlugin {
    }
    class PostImportPluginSkeletonRestFixer extends EditorScenePostImportPlugin {
    }
    class PostImportPluginSkeletonTrackOrganizer extends EditorScenePostImportPlugin {
    }
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh. */
    class PrimitiveMesh extends Mesh {
        /** Override this method to customize how this primitive mesh should be generated. Should return an [Array] where each element is another Array of values required for the mesh (see the [enum Mesh.ArrayType] constants). */
        /* gdvirtual */ _create_mesh_array(): Array
        _update(): void
        set_material(material: Material): void
        get_material(): Material
        
        /** Returns mesh arrays used to constitute surface of [Mesh]. The result can be passed to [method ArrayMesh.add_surface_from_arrays] to create a new surface. For example:  
         *    
         */
        get_mesh_arrays(): Array
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        set_flip_faces(flip_faces: boolean): void
        get_flip_faces(): boolean
        set_add_uv2(add_uv2: boolean): void
        get_add_uv2(): boolean
        set_uv2_padding(uv2_padding: number /*f64*/): void
        get_uv2_padding(): number /*f64*/
        _request_update(): void
        
        /** The current [Material] of the primitive mesh. */
        material: BaseMaterial3D | ShaderMaterial
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        custom_aabb: AABB
        
        /** If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn.  
         *  This gives the same result as using [constant BaseMaterial3D.CULL_FRONT] in [member BaseMaterial3D.cull_mode].  
         */
        flip_faces: boolean
        
        /** If set, generates UV2 UV coordinates applying a padding using the [member uv2_padding] setting. UV2 is needed for lightmapping. */
        add_uv2: boolean
        
        /** If [member add_uv2] is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.  
         *  If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.  
         */
        uv2_padding: number /*f64*/
    }
    /** Class representing a prism-shaped [PrimitiveMesh]. */
    class PrismMesh extends PrimitiveMesh {
        set_left_to_right(left_to_right: number /*f64*/): void
        get_left_to_right(): number /*f64*/
        set_size(size: Vector3): void
        get_size(): Vector3
        set_subdivide_width(segments: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_height(segments: number /*i64*/): void
        get_subdivide_height(): number /*i64*/
        set_subdivide_depth(segments: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
        
        /** Displacement of the upper edge along the X axis. 0.0 positions edge straight above the bottom-left edge. */
        left_to_right: number /*f64*/
        
        /** Size of the prism. */
        size: Vector3
        
        /** Number of added edge loops along the X axis. */
        subdivide_width: number /*i64*/
        
        /** Number of added edge loops along the Y axis. */
        subdivide_height: number /*i64*/
        
        /** Number of added edge loops along the Z axis. */
        subdivide_depth: number /*i64*/
    }
    /** A material that defines a simple sky for a [Sky] resource. */
    class ProceduralSkyMaterial extends Material {
        set_sky_top_color(color: Color): void
        get_sky_top_color(): Color
        set_sky_horizon_color(color: Color): void
        get_sky_horizon_color(): Color
        set_sky_curve(curve: number /*f64*/): void
        get_sky_curve(): number /*f64*/
        set_sky_energy_multiplier(multiplier: number /*f64*/): void
        get_sky_energy_multiplier(): number /*f64*/
        set_sky_cover(sky_cover: Texture2D): void
        get_sky_cover(): Texture2D
        set_sky_cover_modulate(color: Color): void
        get_sky_cover_modulate(): Color
        set_ground_bottom_color(color: Color): void
        get_ground_bottom_color(): Color
        set_ground_horizon_color(color: Color): void
        get_ground_horizon_color(): Color
        set_ground_curve(curve: number /*f64*/): void
        get_ground_curve(): number /*f64*/
        set_ground_energy_multiplier(energy: number /*f64*/): void
        get_ground_energy_multiplier(): number /*f64*/
        set_sun_angle_max(degrees: number /*f64*/): void
        get_sun_angle_max(): number /*f64*/
        set_sun_curve(curve: number /*f64*/): void
        get_sun_curve(): number /*f64*/
        set_use_debanding(use_debanding: boolean): void
        get_use_debanding(): boolean
        
        /** Color of the sky at the top. Blends with [member sky_horizon_color]. */
        sky_top_color: Color
        
        /** Color of the sky at the horizon. Blends with [member sky_top_color]. */
        sky_horizon_color: Color
        
        /** How quickly the [member sky_horizon_color] fades into the [member sky_top_color]. */
        sky_curve: number /*f64*/
        
        /** Multiplier for sky color. A higher value will make the sky brighter. */
        sky_energy_multiplier: number /*f64*/
        
        /** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be [i]added[/i] to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
        sky_cover: Texture2D
        
        /** The tint to apply to the [member sky_cover] texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [member sky_cover]. */
        sky_cover_modulate: Color
        
        /** Color of the ground at the bottom. Blends with [member ground_horizon_color]. */
        ground_bottom_color: Color
        
        /** Color of the ground at the horizon. Blends with [member ground_bottom_color]. */
        ground_horizon_color: Color
        
        /** How quickly the [member ground_horizon_color] fades into the [member ground_bottom_color]. */
        ground_curve: number /*f64*/
        
        /** Multiplier for ground color. A higher value will make the ground brighter. */
        ground_energy_multiplier: number /*f64*/
        
        /** Distance from center of sun where it fades out completely. */
        sun_angle_max: number /*f64*/
        
        /** How quickly the sun fades away between the edge of the sun disk and [member sun_angle_max]. */
        sun_curve: number /*f64*/
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        use_debanding: boolean
    }
    class ProceduralSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
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
    /** A control used for visual representation of a percentage. */
    class ProgressBar extends Range {
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_show_percentage(visible: boolean): void
        is_percentage_shown(): boolean
        
        /** The fill direction. See [enum FillMode] for possible values. */
        fill_mode: number /*i64*/
        
        /** If `true`, the fill percentage is displayed on the bar. */
        show_percentage: boolean
    }
    class ProgressDialog extends PopupPanel {
    }
    class ProjectExportDialog extends ConfirmationDialog {
        _export_all(_unnamed_arg0: boolean): void
        set_export_path(_unnamed_arg0: string): void
        get_export_path(): string
        get_current_preset(): any /*EditorExportPreset*/
        export_path: string
    }
    class ProjectExportTextureFormatError extends HBoxContainer {
        readonly texture_format_enabled: Signal //  => void
    }
    class ProjectSettingsEditor extends AcceptDialog {
        queue_save(): void
        _update_action_map_editor(): void
    }
    class PropertySelector extends ConfirmationDialog {
        readonly selected: Signal // name: string => void
    }
    /** Interpolates an [Object]'s property over time. */
    class PropertyTweener extends Tweener {
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
        set_delay(delay: number /*f64*/): PropertyTweener
    }
    /** Class representing a square mesh facing the camera. */
    class QuadMesh extends PlaneMesh {
    }
    /** Flat plane shape for use with occlusion culling in [OccluderInstance3D]. */
    class QuadOccluder3D extends Occluder3D {
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The quad's size in 3D units. */
        size: Vector2
    }
    /** Attachment format (used by [RenderingDevice]). */
    class RDAttachmentFormat extends RefCounted {
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_samples(p_member: RenderingDevice.TextureSamples): void
        get_samples(): RenderingDevice.TextureSamples
        set_usage_flags(p_member: number /*i64*/): void
        get_usage_flags(): number /*i64*/
        
        /** The attachment's data format. */
        format: number /*i64*/
        
        /** The number of samples used when sampling the attachment. */
        samples: number /*i64*/
        
        /** The attachment's usage flags, which determine what can be done with it. */
        usage_flags: number /*i64*/
    }
    /** Framebuffer pass attachment description (used by [RenderingDevice]). */
    class RDFramebufferPass extends RefCounted {
        /** Attachment is unused. */
        static readonly ATTACHMENT_UNUSED = -1
        set_color_attachments(p_member: PackedInt32Array): void
        get_color_attachments(): PackedInt32Array
        set_input_attachments(p_member: PackedInt32Array): void
        get_input_attachments(): PackedInt32Array
        set_resolve_attachments(p_member: PackedInt32Array): void
        get_resolve_attachments(): PackedInt32Array
        set_preserve_attachments(p_member: PackedInt32Array): void
        get_preserve_attachments(): PackedInt32Array
        set_depth_attachment(p_member: number /*i64*/): void
        get_depth_attachment(): number /*i64*/
        
        /** Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip. */
        color_attachments: PackedInt32Array
        
        /** Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [RDUniform] for the uniform set. */
        input_attachments: PackedInt32Array
        
        /** If the color attachments are multisampled, non-multisampled resolve attachments can be provided. */
        resolve_attachments: PackedInt32Array
        
        /** Attachments to preserve in this pass (otherwise they are erased). */
        preserve_attachments: PackedInt32Array
        
        /** Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass. */
        depth_attachment: number /*i64*/
    }
    /** Pipeline color blend state (used by [RenderingDevice]). */
    class RDPipelineColorBlendState extends RefCounted {
        set_enable_logic_op(p_member: boolean): void
        get_enable_logic_op(): boolean
        set_logic_op(p_member: RenderingDevice.LogicOperation): void
        get_logic_op(): RenderingDevice.LogicOperation
        set_blend_constant(p_member: Color): void
        get_blend_constant(): Color
        set_attachments(attachments: Array): void
        get_attachments(): Array
        
        /** If `true`, performs the logic operation defined in [member logic_op]. */
        enable_logic_op: boolean
        
        /** The logic operation to perform for blending. Only effective if [member enable_logic_op] is `true`. */
        logic_op: number /*i64*/
        
        /** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
        blend_constant: Color
        
        /** The attachments that are blended together. */
        attachments: Array
    }
    /** Pipeline color blend state attachment (used by [RenderingDevice]). */
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        /** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to `true`, [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
        set_as_mix(): void
        set_enable_blend(p_member: boolean): void
        get_enable_blend(): boolean
        set_src_color_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_src_color_blend_factor(): RenderingDevice.BlendFactor
        set_dst_color_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_dst_color_blend_factor(): RenderingDevice.BlendFactor
        set_color_blend_op(p_member: RenderingDevice.BlendOperation): void
        get_color_blend_op(): RenderingDevice.BlendOperation
        set_src_alpha_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_src_alpha_blend_factor(): RenderingDevice.BlendFactor
        set_dst_alpha_blend_factor(p_member: RenderingDevice.BlendFactor): void
        get_dst_alpha_blend_factor(): RenderingDevice.BlendFactor
        set_alpha_blend_op(p_member: RenderingDevice.BlendOperation): void
        get_alpha_blend_op(): RenderingDevice.BlendOperation
        set_write_r(p_member: boolean): void
        get_write_r(): boolean
        set_write_g(p_member: boolean): void
        get_write_g(): boolean
        set_write_b(p_member: boolean): void
        get_write_b(): boolean
        set_write_a(p_member: boolean): void
        get_write_a(): boolean
        
        /** If `true`, performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
        enable_blend: boolean
        
        /** Controls how the blend factor for the color channels is determined based on the source's fragments. */
        src_color_blend_factor: number /*i64*/
        
        /** Controls how the blend factor for the color channels is determined based on the destination's fragments. */
        dst_color_blend_factor: number /*i64*/
        
        /** The blend mode to use for the red/green/blue color channels. */
        color_blend_op: number /*i64*/
        
        /** Controls how the blend factor for the alpha channel is determined based on the source's fragments. */
        src_alpha_blend_factor: number /*i64*/
        
        /** Controls how the blend factor for the alpha channel is determined based on the destination's fragments. */
        dst_alpha_blend_factor: number /*i64*/
        
        /** The blend mode to use for the alpha channel. */
        alpha_blend_op: number /*i64*/
        
        /** If `true`, writes the new red color channel to the final result. */
        write_r: boolean
        
        /** If `true`, writes the new green color channel to the final result. */
        write_g: boolean
        
        /** If `true`, writes the new blue color channel to the final result. */
        write_b: boolean
        
        /** If `true`, writes the new alpha channel to the final result. */
        write_a: boolean
    }
    /** Pipeline depth/stencil state (used by [RenderingDevice]). */
    class RDPipelineDepthStencilState extends RefCounted {
        set_enable_depth_test(p_member: boolean): void
        get_enable_depth_test(): boolean
        set_enable_depth_write(p_member: boolean): void
        get_enable_depth_write(): boolean
        set_depth_compare_operator(p_member: RenderingDevice.CompareOperator): void
        get_depth_compare_operator(): RenderingDevice.CompareOperator
        set_enable_depth_range(p_member: boolean): void
        get_enable_depth_range(): boolean
        set_depth_range_min(p_member: number /*f64*/): void
        get_depth_range_min(): number /*f64*/
        set_depth_range_max(p_member: number /*f64*/): void
        get_depth_range_max(): number /*f64*/
        set_enable_stencil(p_member: boolean): void
        get_enable_stencil(): boolean
        set_front_op_fail(p_member: RenderingDevice.StencilOperation): void
        get_front_op_fail(): RenderingDevice.StencilOperation
        set_front_op_pass(p_member: RenderingDevice.StencilOperation): void
        get_front_op_pass(): RenderingDevice.StencilOperation
        set_front_op_depth_fail(p_member: RenderingDevice.StencilOperation): void
        get_front_op_depth_fail(): RenderingDevice.StencilOperation
        set_front_op_compare(p_member: RenderingDevice.CompareOperator): void
        get_front_op_compare(): RenderingDevice.CompareOperator
        set_front_op_compare_mask(p_member: number /*i64*/): void
        get_front_op_compare_mask(): number /*i64*/
        set_front_op_write_mask(p_member: number /*i64*/): void
        get_front_op_write_mask(): number /*i64*/
        set_front_op_reference(p_member: number /*i64*/): void
        get_front_op_reference(): number /*i64*/
        set_back_op_fail(p_member: RenderingDevice.StencilOperation): void
        get_back_op_fail(): RenderingDevice.StencilOperation
        set_back_op_pass(p_member: RenderingDevice.StencilOperation): void
        get_back_op_pass(): RenderingDevice.StencilOperation
        set_back_op_depth_fail(p_member: RenderingDevice.StencilOperation): void
        get_back_op_depth_fail(): RenderingDevice.StencilOperation
        set_back_op_compare(p_member: RenderingDevice.CompareOperator): void
        get_back_op_compare(): RenderingDevice.CompareOperator
        set_back_op_compare_mask(p_member: number /*i64*/): void
        get_back_op_compare_mask(): number /*i64*/
        set_back_op_write_mask(p_member: number /*i64*/): void
        get_back_op_write_mask(): number /*i64*/
        set_back_op_reference(p_member: number /*i64*/): void
        get_back_op_reference(): number /*i64*/
        
        /** If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer). */
        enable_depth_test: boolean
        
        /** If `true`, writes to the depth buffer whenever the depth test returns true. Only works when enable_depth_test is also true. */
        enable_depth_write: boolean
        
        /** The method used for comparing the previous and current depth values. */
        depth_compare_operator: number /*i64*/
        
        /** If `true`, each depth value will be tested to see if it is between [member depth_range_min] and [member depth_range_max]. If it is outside of these values, it is discarded. */
        enable_depth_range: boolean
        
        /** The minimum depth that returns true for [member enable_depth_range]. */
        depth_range_min: number /*f64*/
        
        /** The maximum depth that returns true for [member enable_depth_range]. */
        depth_range_max: number /*f64*/
        
        /** If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each. */
        enable_stencil: boolean
        
        /** The operation to perform on the stencil buffer for front pixels that fail the stencil test. */
        front_op_fail: number /*i64*/
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test. */
        front_op_pass: number /*i64*/
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test. */
        front_op_depth_fail: number /*i64*/
        
        /** The method used for comparing the previous front stencil value and [member front_op_reference]. */
        front_op_compare: number /*i64*/
        
        /** Selects which bits from the front stencil value will be compared. */
        front_op_compare_mask: number /*i64*/
        
        /** Selects which bits from the front stencil value will be changed. */
        front_op_write_mask: number /*i64*/
        
        /** The value the previous front stencil value will be compared to. */
        front_op_reference: number /*i64*/
        
        /** The operation to perform on the stencil buffer for back pixels that fail the stencil test */
        back_op_fail: number /*i64*/
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test. */
        back_op_pass: number /*i64*/
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test. */
        back_op_depth_fail: number /*i64*/
        
        /** The method used for comparing the previous back stencil value and [member back_op_reference]. */
        back_op_compare: number /*i64*/
        
        /** Selects which bits from the back stencil value will be compared. */
        back_op_compare_mask: number /*i64*/
        
        /** Selects which bits from the back stencil value will be changed. */
        back_op_write_mask: number /*i64*/
        
        /** The value the previous back stencil value will be compared to. */
        back_op_reference: number /*i64*/
    }
    /** Pipeline multisample state (used by [RenderingDevice]). */
    class RDPipelineMultisampleState extends RefCounted {
        set_sample_count(p_member: RenderingDevice.TextureSamples): void
        get_sample_count(): RenderingDevice.TextureSamples
        set_enable_sample_shading(p_member: boolean): void
        get_enable_sample_shading(): boolean
        set_min_sample_shading(p_member: number /*f64*/): void
        get_min_sample_shading(): number /*f64*/
        set_enable_alpha_to_coverage(p_member: boolean): void
        get_enable_alpha_to_coverage(): boolean
        set_enable_alpha_to_one(p_member: boolean): void
        get_enable_alpha_to_one(): boolean
        set_sample_masks(masks: Array): void
        get_sample_masks(): Array
        
        /** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is `true`) to perform. Higher values result in better antialiasing, at the cost of performance. */
        sample_count: number /*i64*/
        
        /** If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
        enable_sample_shading: boolean
        
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [member enable_sample_shading] is `true`. If [member min_sample_shading] is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is [i]not[/i] `1.0`. */
        min_sample_shading: number /*f64*/
        
        /** If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        enable_alpha_to_coverage: boolean
        
        /** If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is `true`. */
        enable_alpha_to_one: boolean
        
        /** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
        sample_masks: Array
    }
    /** Pipeline rasterization state (used by [RenderingDevice]). */
    class RDPipelineRasterizationState extends RefCounted {
        set_enable_depth_clamp(p_member: boolean): void
        get_enable_depth_clamp(): boolean
        set_discard_primitives(p_member: boolean): void
        get_discard_primitives(): boolean
        set_wireframe(p_member: boolean): void
        get_wireframe(): boolean
        set_cull_mode(p_member: RenderingDevice.PolygonCullMode): void
        get_cull_mode(): RenderingDevice.PolygonCullMode
        set_front_face(p_member: RenderingDevice.PolygonFrontFace): void
        get_front_face(): RenderingDevice.PolygonFrontFace
        set_depth_bias_enabled(p_member: boolean): void
        get_depth_bias_enabled(): boolean
        set_depth_bias_constant_factor(p_member: number /*f64*/): void
        get_depth_bias_constant_factor(): number /*f64*/
        set_depth_bias_clamp(p_member: number /*f64*/): void
        get_depth_bias_clamp(): number /*f64*/
        set_depth_bias_slope_factor(p_member: number /*f64*/): void
        get_depth_bias_slope_factor(): number /*f64*/
        set_line_width(p_member: number /*f64*/): void
        get_line_width(): number /*f64*/
        set_patch_control_points(p_member: number /*i64*/): void
        get_patch_control_points(): number /*i64*/
        enable_depth_clamp: boolean
        
        /** If `true`, primitives are discarded immediately before the rasterization stage. */
        discard_primitives: boolean
        
        /** If `true`, performs wireframe rendering for triangles instead of flat or textured rendering. */
        wireframe: boolean
        
        /** The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden. */
        cull_mode: number /*i64*/
        
        /** The winding order to use to determine which face of a triangle is considered its front face. */
        front_face: number /*i64*/
        depth_bias_enabled: boolean
        depth_bias_constant_factor: number /*f64*/
        depth_bias_clamp: number /*f64*/
        depth_bias_slope_factor: number /*f64*/
        
        /** The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware. */
        line_width: number /*f64*/
        
        /** The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance. */
        patch_control_points: number /*i64*/
    }
    /** Pipeline specialization constant (used by [RenderingDevice]). */
    class RDPipelineSpecializationConstant extends RefCounted {
        set_value(value: any): void
        get_value(): any
        set_constant_id(constant_id: number /*i64*/): void
        get_constant_id(): number /*i64*/
        
        /** The specialization constant's value. Only [bool], [int] and [float] types are valid for specialization constants. */
        value: any
        
        /** The identifier of the specialization constant. This is a value starting from `0` and that increments for every different specialization constant for a given shader. */
        constant_id: number /*i64*/
    }
    /** Sampler state (used by [RenderingDevice]). */
    class RDSamplerState extends RefCounted {
        set_mag_filter(p_member: RenderingDevice.SamplerFilter): void
        get_mag_filter(): RenderingDevice.SamplerFilter
        set_min_filter(p_member: RenderingDevice.SamplerFilter): void
        get_min_filter(): RenderingDevice.SamplerFilter
        set_mip_filter(p_member: RenderingDevice.SamplerFilter): void
        get_mip_filter(): RenderingDevice.SamplerFilter
        set_repeat_u(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_u(): RenderingDevice.SamplerRepeatMode
        set_repeat_v(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_v(): RenderingDevice.SamplerRepeatMode
        set_repeat_w(p_member: RenderingDevice.SamplerRepeatMode): void
        get_repeat_w(): RenderingDevice.SamplerRepeatMode
        set_lod_bias(p_member: number /*f64*/): void
        get_lod_bias(): number /*f64*/
        set_use_anisotropy(p_member: boolean): void
        get_use_anisotropy(): boolean
        set_anisotropy_max(p_member: number /*f64*/): void
        get_anisotropy_max(): number /*f64*/
        set_enable_compare(p_member: boolean): void
        get_enable_compare(): boolean
        set_compare_op(p_member: RenderingDevice.CompareOperator): void
        get_compare_op(): RenderingDevice.CompareOperator
        set_min_lod(p_member: number /*f64*/): void
        get_min_lod(): number /*f64*/
        set_max_lod(p_member: number /*f64*/): void
        get_max_lod(): number /*f64*/
        set_border_color(p_member: RenderingDevice.SamplerBorderColor): void
        get_border_color(): RenderingDevice.SamplerBorderColor
        set_unnormalized_uvw(p_member: boolean): void
        get_unnormalized_uvw(): boolean
        
        /** The sampler's magnification filter. */
        mag_filter: number /*i64*/
        min_filter: number /*i64*/
        
        /** The filtering method to use for mipmaps. */
        mip_filter: number /*i64*/
        
        /** The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        repeat_u: number /*i64*/
        
        /** The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        repeat_v: number /*i64*/
        
        /** The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers. */
        repeat_w: number /*i64*/
        
        /** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available. */
        lod_bias: number /*f64*/
        
        /** If `true`, perform anisotropic sampling. See [member anisotropy_max]. */
        use_anisotropy: boolean
        
        /** Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.  
         *  If [member anisotropy_max] is `1.0`, forcibly disables anisotropy even if [member use_anisotropy] is `true`.  
         */
        anisotropy_max: number /*f64*/
        
        /** If `true`, returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
        enable_compare: boolean
        
        /** The compare operation to use. Only effective if [member enable_compare] is `true`. */
        compare_op: number /*i64*/
        
        /** The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available. */
        min_lod: number /*f64*/
        
        /** The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available. */
        max_lod: number /*f64*/
        
        /** The border color that will be returned when sampling outside the sampler's bounds and the [member repeat_u], [member repeat_v] or [member repeat_w] modes have repeating disabled. */
        border_color: number /*i64*/
        unnormalized_uvw: boolean
    }
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader]. */
    class RDShaderFile extends Resource {
        /** Sets the SPIR-V [param bytecode] that will be compiled for the specified [param version]. */
        set_bytecode(bytecode: RDShaderSPIRV, version: StringName = ''): void
        
        /** Returns the SPIR-V intermediate representation for the specified shader [param version]. */
        get_spirv(version: StringName = ''): RDShaderSPIRV
        
        /** Returns the list of compiled versions for this shader. */
        get_version_list(): Array
        set_base_error(error: string): void
        get_base_error(): string
        _set_versions(versions: Dictionary): void
        _get_versions(): Dictionary
        _versions: Dictionary
        
        /** The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [RDShaderSPIRV]'s error message members). */
        base_error: string
    }
    /** SPIR-V intermediate representation as part of a [RDShaderFile] (used by [RenderingDevice]). */
    class RDShaderSPIRV extends Resource {
        /** Sets the SPIR-V [param bytecode] for the given shader [param stage]. Equivalent to setting one of [member bytecode_compute], [member bytecode_fragment], [member bytecode_tesselation_control], [member bytecode_tesselation_evaluation], [member bytecode_vertex]. */
        set_stage_bytecode(stage: RenderingDevice.ShaderStage, bytecode: PackedByteArray): void
        
        /** Equivalent to getting one of [member bytecode_compute], [member bytecode_fragment], [member bytecode_tesselation_control], [member bytecode_tesselation_evaluation], [member bytecode_vertex]. */
        get_stage_bytecode(stage: RenderingDevice.ShaderStage): PackedByteArray
        
        /** Sets the compilation error message for the given shader [param stage] to [param compile_error]. Equivalent to setting one of [member compile_error_compute], [member compile_error_fragment], [member compile_error_tesselation_control], [member compile_error_tesselation_evaluation], [member compile_error_vertex]. */
        set_stage_compile_error(stage: RenderingDevice.ShaderStage, compile_error: string): void
        
        /** Returns the compilation error message for the given shader [param stage]. Equivalent to getting one of [member compile_error_compute], [member compile_error_fragment], [member compile_error_tesselation_control], [member compile_error_tesselation_evaluation], [member compile_error_vertex]. */
        get_stage_compile_error(stage: RenderingDevice.ShaderStage): string
    }
    /** Shader source code (used by [RenderingDevice]). */
    class RDShaderSource extends RefCounted {
        /** Sets [param source] code for the specified shader [param stage]. Equivalent to setting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
        set_stage_source(stage: RenderingDevice.ShaderStage, source: string): void
        
        /** Returns source code for the specified shader [param stage]. Equivalent to getting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
        get_stage_source(stage: RenderingDevice.ShaderStage): string
        set_language(language: RenderingDevice.ShaderLanguage): void
        get_language(): RenderingDevice.ShaderLanguage
        
        /** The language the shader is written in. */
        language: number /*i64*/
    }
    /** Texture format (used by [RenderingDevice]). */
    class RDTextureFormat extends RefCounted {
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_width(p_member: number /*i64*/): void
        get_width(): number /*i64*/
        set_height(p_member: number /*i64*/): void
        get_height(): number /*i64*/
        set_depth(p_member: number /*i64*/): void
        get_depth(): number /*i64*/
        set_array_layers(p_member: number /*i64*/): void
        get_array_layers(): number /*i64*/
        set_mipmaps(p_member: number /*i64*/): void
        get_mipmaps(): number /*i64*/
        set_texture_type(p_member: RenderingDevice.TextureType): void
        get_texture_type(): RenderingDevice.TextureType
        set_samples(p_member: RenderingDevice.TextureSamples): void
        get_samples(): RenderingDevice.TextureSamples
        set_usage_bits(p_member: RenderingDevice.TextureUsageBits): void
        get_usage_bits(): RenderingDevice.TextureUsageBits
        add_shareable_format(format: RenderingDevice.DataFormat): void
        remove_shareable_format(format: RenderingDevice.DataFormat): void
        
        /** The texture's pixel data format. */
        format: number /*i64*/
        
        /** The texture's width (in pixels). */
        width: number /*i64*/
        
        /** The texture's height (in pixels). */
        height: number /*i64*/
        
        /** The texture's depth (in pixels). This is always `1` for 2D textures. */
        depth: number /*i64*/
        
        /** The number of layers in the texture. Only relevant for 2D texture arrays. */
        array_layers: number /*i64*/
        
        /** The number of mipmaps available in the texture. */
        mipmaps: number /*i64*/
        
        /** The texture type. */
        texture_type: number /*i64*/
        
        /** The number of samples used when sampling the texture. */
        samples: number /*i64*/
        
        /** The texture's usage bits, which determine what can be done using the texture. */
        usage_bits: number /*i64*/
    }
    /** Texture view (used by [RenderingDevice]). */
    class RDTextureView extends RefCounted {
        set_format_override(p_member: RenderingDevice.DataFormat): void
        get_format_override(): RenderingDevice.DataFormat
        set_swizzle_r(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_r(): RenderingDevice.TextureSwizzle
        set_swizzle_g(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_g(): RenderingDevice.TextureSwizzle
        set_swizzle_b(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_b(): RenderingDevice.TextureSwizzle
        set_swizzle_a(p_member: RenderingDevice.TextureSwizzle): void
        get_swizzle_a(): RenderingDevice.TextureSwizzle
        
        /** Optional override for the data format to return sampled values in. The default value of [constant RenderingDevice.DATA_FORMAT_MAX] does not override the format. */
        format_override: number /*i64*/
        
        /** The channel to sample when sampling the red color channel. */
        swizzle_r: number /*i64*/
        
        /** The channel to sample when sampling the green color channel. */
        swizzle_g: number /*i64*/
        
        /** The channel to sample when sampling the blue color channel. */
        swizzle_b: number /*i64*/
        
        /** The channel to sample when sampling the alpha channel. */
        swizzle_a: number /*i64*/
    }
    /** Shader uniform (used by [RenderingDevice]). */
    class RDUniform extends RefCounted {
        set_uniform_type(p_member: RenderingDevice.UniformType): void
        get_uniform_type(): RenderingDevice.UniformType
        set_binding(p_member: number /*i64*/): void
        get_binding(): number /*i64*/
        add_id(id: RID): void
        clear_ids(): void
        _set_ids(ids: Array): void
        get_ids(): Array
        
        /** The uniform's data type. */
        uniform_type: number /*i64*/
        
        /** The uniform's binding. */
        binding: number /*i64*/
        _ids: Array
    }
    /** Vertex attribute (used by [RenderingDevice]). */
    class RDVertexAttribute extends RefCounted {
        set_location(p_member: number /*i64*/): void
        get_location(): number /*i64*/
        set_offset(p_member: number /*i64*/): void
        get_offset(): number /*i64*/
        set_format(p_member: RenderingDevice.DataFormat): void
        get_format(): RenderingDevice.DataFormat
        set_stride(p_member: number /*i64*/): void
        get_stride(): number /*i64*/
        set_frequency(p_member: RenderingDevice.VertexFrequency): void
        get_frequency(): RenderingDevice.VertexFrequency
        location: number /*i64*/
        offset: number /*i64*/
        format: number /*i64*/
        stride: number /*i64*/
        frequency: number /*i64*/
    }
    /** Provides methods for generating pseudo-random numbers. */
    class RandomNumberGenerator extends RefCounted {
        set_seed(seed: number /*i64*/): void
        get_seed(): number /*i64*/
        set_state(state: number /*i64*/): void
        get_state(): number /*i64*/
        
        /** Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive). */
        randi(): number /*i64*/
        
        /** Returns a pseudo-random float between `0.0` and `1.0` (inclusive). */
        randf(): number /*f64*/
        
        /** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url] pseudo-random number, using Box-Muller transform with the specified [param mean] and a standard [param deviation]. This is also called Gaussian distribution. */
        randfn(mean: number /*f64*/ = 0, deviation: number /*f64*/ = 1): number /*f64*/
        
        /** Returns a pseudo-random float between [param from] and [param to] (inclusive). */
        randf_range(from: number /*f64*/, to: number /*f64*/): number /*f64*/
        
        /** Returns a pseudo-random 32-bit signed integer between [param from] and [param to] (inclusive). */
        randi_range(from: number /*i64*/, to: number /*i64*/): number /*i64*/
        
        /** Sets up a time-based seed for this [RandomNumberGenerator] instance. Unlike the [@GlobalScope] random number generation functions, different [RandomNumberGenerator] instances can use different seeds. */
        randomize(): void
        
        /** Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.  
         *      
         *  **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.  
         *      
         *  **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed [i]before[/i] modifying the [member state]:  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         *    
         */
        seed: number /*i64*/
        
        /** The current state of the random number generator. Save and restore this property to restore the generator to a previous state:  
         *    
         *      
         *  **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         */
        state: number /*i64*/
    }
    /** Abstract base class for controls that represent a number within a range. */
    class Range extends Control {
        /** Called when the [Range]'s value is changed (following the same conditions as [signal value_changed]). */
        /* gdvirtual */ _value_changed(new_value: number /*f64*/): void
        get_value(): number /*f64*/
        get_min(): number /*f64*/
        get_max(): number /*f64*/
        get_step(): number /*f64*/
        get_page(): number /*f64*/
        get_as_ratio(): number /*f64*/
        set_value(value: number /*f64*/): void
        
        /** Sets the [Range]'s current value to the specified [param value], without emitting the [signal value_changed] signal. */
        set_value_no_signal(value: number /*f64*/): void
        set_min(minimum: number /*f64*/): void
        set_max(maximum: number /*f64*/): void
        set_step(step: number /*f64*/): void
        set_page(pagesize: number /*f64*/): void
        set_as_ratio(value: number /*f64*/): void
        set_use_rounded_values(enabled: boolean): void
        is_using_rounded_values(): boolean
        set_exp_ratio(enabled: boolean): void
        is_ratio_exp(): boolean
        set_allow_greater(allow: boolean): void
        is_greater_allowed(): boolean
        set_allow_lesser(allow: boolean): void
        is_lesser_allowed(): boolean
        
        /** Binds two [Range]s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group. */
        share(with_: Node): void
        
        /** Stops the [Range] from sharing its member variables with any other. */
        unshare(): void
        
        /** Minimum value. Range is clamped if [member value] is less than [member min_value]. */
        min_value: number /*f64*/
        
        /** Maximum value. Range is clamped if [member value] is greater than [member max_value]. */
        max_value: number /*f64*/
        
        /** If greater than 0, [member value] will always be rounded to a multiple of this property's value. If [member rounded] is also `true`, [member value] will first be rounded to a multiple of this property's value, then rounded to the nearest integer. */
        step: number /*f64*/
        
        /** Page size. Used mainly for [ScrollBar]. ScrollBar's length is its size multiplied by [member page] over the difference between [member min_value] and [member max_value]. */
        page: number /*f64*/
        
        /** Range's current value. Changing this property (even via code) will trigger [signal value_changed] signal. Use [method set_value_no_signal] if you want to avoid it. */
        value: number /*f64*/
        
        /** The value mapped between 0 and 1. */
        ratio: number /*f64*/
        
        /** If `true`, and [member min_value] is greater than 0, [member value] will be represented exponentially rather than linearly. */
        exp_edit: boolean
        
        /** If `true`, [member value] will always be rounded to the nearest integer. */
        rounded: boolean
        
        /** If `true`, [member value] may be greater than [member max_value]. */
        allow_greater: boolean
        
        /** If `true`, [member value] may be less than [member min_value]. */
        allow_lesser: boolean
        
        /** Emitted when [member value] changes. When used on a [Slider], this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [signal value_changed], consider using a [i]debouncing[/i] [Timer] to call the function less often.  
         *      
         *  **Note:** Unlike signals such as [signal LineEdit.text_changed], [signal value_changed] is also emitted when [param value] is set directly via code.  
         */
        readonly value_changed: Signal // value: number /*f64*/ => void
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal //  => void
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects. */
    class RayCast2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_target_position(local_point: Vector2): void
        get_target_position(): Vector2
        
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
        get_collider_shape(): number /*i64*/
        
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
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        
        /** If `true`, collisions will be reported. */
        enabled: boolean
        
        /** If `true`, the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        target_position: Vector2
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        hit_from_inside: boolean
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        collide_with_areas: boolean
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        collide_with_bodies: boolean
    }
    /** A ray in 3D space, used to find the first [CollisionObject3D] it intersects. */
    class RayCast3D extends Node3D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_target_position(local_point: Vector3): void
        get_target_position(): Vector3
        
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
        get_collider_shape(): number /*i64*/
        
        /** Returns the collision point at which the ray intersects the closest object. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        get_collision_point(): Vector3
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`. */
        get_collision_normal(): Vector3
        
        /** Returns the collision object's face index at the collision point, or `-1` if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
        get_collision_face_index(): number /*i64*/
        
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
        set_hit_from_inside(enable: boolean): void
        is_hit_from_inside_enabled(): boolean
        set_hit_back_faces(enable: boolean): void
        is_hit_back_faces_enabled(): boolean
        set_debug_shape_custom_color(debug_shape_custom_color: Color): void
        get_debug_shape_custom_color(): Color
        set_debug_shape_thickness(debug_shape_thickness: number /*i64*/): void
        get_debug_shape_thickness(): number /*i64*/
        
        /** If `true`, collisions will be reported. */
        enabled: boolean
        
        /** If `true`, collisions will be ignored for this RayCast3D's immediate parent. */
        exclude_parent: boolean
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        target_position: Vector3
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect shapes with no volume like concave polygon or heightmap. */
        hit_from_inside: boolean
        
        /** If `true`, the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        hit_back_faces: boolean
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        collide_with_areas: boolean
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        collide_with_bodies: boolean
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        debug_shape_custom_color: Color
        
        /** If set to `1`, a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires **Visible Collision Shapes** to be enabled in the **Debug** menu for the debug shape to be visible at run-time. */
        debug_shape_thickness: number /*i64*/
    }
    class RayCast3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A 2D rectangle shape used for physics collision. */
    class RectangleShape2D extends Shape2D {
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The rectangle's width and height. */
        size: Vector2
    }
    /** Base class for reference-counted objects. */
    class RefCounted extends Object {
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
        get_reference_count(): number /*i64*/
    }
    /** A rectangle hint for designing UIs. */
    class ReferenceRect extends Control {
        get_border_color(): Color
        set_border_color(color: Color): void
        get_border_width(): number /*f64*/
        set_border_width(width: number /*f64*/): void
        get_editor_only(): boolean
        set_editor_only(enabled: boolean): void
        
        /** Sets the border color of the [ReferenceRect]. */
        border_color: Color
        
        /** Sets the border width of the [ReferenceRect]. The border grows both inwards and outwards with respect to the rectangle box. */
        border_width: number /*f64*/
        
        /** If `true`, the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
        editor_only: boolean
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
    /** Captures its surroundings to create fast, accurate reflections from a given point. */
    class ReflectionProbe extends VisualInstance3D {
        set_intensity(intensity: number /*f64*/): void
        get_intensity(): number /*f64*/
        set_ambient_mode(ambient: ReflectionProbe.AmbientMode): void
        get_ambient_mode(): ReflectionProbe.AmbientMode
        set_ambient_color(ambient: Color): void
        get_ambient_color(): Color
        set_ambient_color_energy(ambient_energy: number /*f64*/): void
        get_ambient_color_energy(): number /*f64*/
        set_max_distance(max_distance: number /*f64*/): void
        get_max_distance(): number /*f64*/
        set_mesh_lod_threshold(ratio: number /*f64*/): void
        get_mesh_lod_threshold(): number /*f64*/
        set_size(size: Vector3): void
        get_size(): Vector3
        set_origin_offset(origin_offset: Vector3): void
        get_origin_offset(): Vector3
        set_as_interior(enable: boolean): void
        is_set_as_interior(): boolean
        set_enable_box_projection(enable: boolean): void
        is_box_projection_enabled(): boolean
        set_enable_shadows(enable: boolean): void
        are_shadows_enabled(): boolean
        set_cull_mask(layers: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_update_mode(mode: ReflectionProbe.UpdateMode): void
        get_update_mode(): ReflectionProbe.UpdateMode
        
        /** Sets how frequently the [ReflectionProbe] is updated. Can be [constant UPDATE_ONCE] or [constant UPDATE_ALWAYS]. */
        update_mode: number /*i64*/
        
        /** Defines the reflection intensity. Intensity modulates the strength of the reflection. */
        intensity: number /*f64*/
        
        /** The maximum distance away from the [ReflectionProbe] an object can be before it is culled. Decrease this to improve performance, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [member max_distance] will not always cull objects from reflections, especially if the reflection probe's box defined by its [member size] is already large.  
         */
        max_distance: number /*f64*/
        
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.  
         *      
         *  **Note:** To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        size: Vector3
        
        /** Sets the origin offset to be used when this [ReflectionProbe] is in [member box_projection] mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection. */
        origin_offset: Vector3
        
        /** If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.  
         *      
         *  **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        box_projection: boolean
        
        /** If `true`, reflections will ignore sky contribution. */
        interior: boolean
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [constant UPDATE_ALWAYS] [member update_mode]. */
        enable_shadows: boolean
        
        /** Sets the cull mask which determines what objects are drawn by this probe. Every [VisualInstance3D] with a layer included in this cull mask will be rendered by the probe. To improve performance, it is best to only include large objects which are likely to take up a lot of space in the reflection. */
        cull_mask: number /*i64*/
        
        /** The automatic LOD bias to use for meshes rendered within the [ReflectionProbe] (this is analog to [member Viewport.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        mesh_lod_threshold: number /*f64*/
        
        /** The ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. The ambient color will smoothly blend with other [ReflectionProbe]s and the rest of the scene (outside the [ReflectionProbe]'s box defined by its [member size]). */
        ambient_mode: number /*i64*/
        
        /** The custom ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        ambient_color: Color
        
        /** The custom ambient color energy to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        ambient_color_energy: number /*f64*/
    }
    class ReflectionProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Class for searching text for patterns using regular expressions. */
    class RegEx extends RefCounted {
        /** Creates and compiles a new [RegEx] object. */
        static create_from_string(pattern: string): RegEx
        
        /** This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object. */
        clear(): void
        
        /** Compiles and assign the search pattern to use. Returns [constant OK] if the compilation is successful. If an error is encountered, details are printed to standard output and an error is returned. */
        compile(pattern: string): GodotError
        
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise `null`.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): RegExMatch
        
        /** Searches the text for the compiled pattern. Returns an array of [RegExMatch] containers for each non-overlapping result. If no results were found, an empty array is returned instead.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search_all(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): Array
        
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        sub(subject: string, replacement: string, all: boolean = false, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): string
        
        /** Returns whether this object has a valid search pattern assigned. */
        is_valid(): boolean
        
        /** Returns the original search pattern that was compiled. */
        get_pattern(): string
        
        /** Returns the number of capturing groups in compiled pattern. */
        get_group_count(): number /*i64*/
        
        /** Returns an array of names of named capturing groups in the compiled pattern. They are ordered by appearance. */
        get_names(): PackedStringArray
    }
    /** Contains the results of a [RegEx] search. */
    class RegExMatch extends RefCounted {
        get_subject(): string
        
        /** Returns the number of capturing groups. */
        get_group_count(): number /*i64*/
        get_names(): Dictionary
        get_strings(): PackedStringArray
        
        /** Returns the substring of the match from the source string. Capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns an empty string if the group did not match or doesn't exist.  
         */
        get_string(name: any = <any> {} /*compound.type from nil*/): string
        
        /** Returns the starting position of the match within the source string. The starting position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        get_start(name: any = <any> {} /*compound.type from nil*/): number /*i64*/
        
        /** Returns the end position of the match within the source string. The end position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        get_end(name: any = <any> {} /*compound.type from nil*/): number /*i64*/
        
        /** The source string used with the search pattern to find this matching result. */
        readonly subject: string
        
        /** A dictionary of named groups and its corresponding group number. Only groups that were matched are included. If multiple groups have the same name, that name would refer to the first matching one. */
        readonly names: Dictionary
        
        /** An [Array] of the match and its capturing groups. */
        readonly strings: Array
    }
    /** RemoteTransform2D pushes its own [Transform2D] to another [Node2D] derived node in the scene. */
    class RemoteTransform2D extends Node2D {
        set_remote_node(path: NodePath): void
        get_remote_node(): NodePath
        
        /** [RemoteTransform2D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        force_update_cache(): void
        set_use_global_coordinates(use_global_coordinates: boolean): void
        get_use_global_coordinates(): boolean
        set_update_position(update_remote_position: boolean): void
        get_update_position(): boolean
        set_update_rotation(update_remote_rotation: boolean): void
        get_update_rotation(): boolean
        set_update_scale(update_remote_scale: boolean): void
        get_update_scale(): boolean
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform2D's position in the scene. */
        remote_path: NodePath
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        use_global_coordinates: boolean
        
        /** If `true`, the remote node's position is updated. */
        update_position: boolean
        
        /** If `true`, the remote node's rotation is updated. */
        update_rotation: boolean
        
        /** If `true`, the remote node's scale is updated. */
        update_scale: boolean
    }
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene. */
    class RemoteTransform3D extends Node3D {
        set_remote_node(path: NodePath): void
        get_remote_node(): NodePath
        
        /** [RemoteTransform3D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        force_update_cache(): void
        set_use_global_coordinates(use_global_coordinates: boolean): void
        get_use_global_coordinates(): boolean
        set_update_position(update_remote_position: boolean): void
        get_update_position(): boolean
        set_update_rotation(update_remote_rotation: boolean): void
        get_update_rotation(): boolean
        set_update_scale(update_remote_scale: boolean): void
        get_update_scale(): boolean
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform3D's position in the scene. */
        remote_path: NodePath
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        use_global_coordinates: boolean
        
        /** If `true`, the remote node's position is updated. */
        update_position: boolean
        
        /** If `true`, the remote node's rotation is updated. */
        update_rotation: boolean
        
        /** If `true`, the remote node's scale is updated. */
        update_scale: boolean
    }
    class RenameDialog extends ConfirmationDialog {
        rename(): void
    }
    /** Abstract scene buffers object, created for each viewport for which 3D rendering is done. */
    class RenderSceneBuffers extends RefCounted {
        /** This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
        configure(config: RenderSceneBuffersConfiguration): void
    }
    /** Configuration object used to setup a [RenderSceneBuffers] object. */
    class RenderSceneBuffersConfiguration extends RefCounted {
        get_render_target(): RID
        set_render_target(render_target: RID): void
        get_internal_size(): Vector2i
        set_internal_size(internal_size: Vector2i): void
        get_target_size(): Vector2i
        set_target_size(target_size: Vector2i): void
        get_view_count(): number /*i64*/
        set_view_count(view_count: number /*i64*/): void
        get_scaling_3d_mode(): RenderingServer.ViewportScaling3DMode
        set_scaling_3d_mode(scaling_3d_mode: RenderingServer.ViewportScaling3DMode): void
        get_msaa_3d(): RenderingServer.ViewportMSAA
        set_msaa_3d(msaa_3d: RenderingServer.ViewportMSAA): void
        get_screen_space_aa(): RenderingServer.ViewportScreenSpaceAA
        set_screen_space_aa(screen_space_aa: RenderingServer.ViewportScreenSpaceAA): void
        get_fsr_sharpness(): number /*f64*/
        set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        get_texture_mipmap_bias(): number /*f64*/
        set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        
        /** The render target associated with these buffer. */
        render_target: RID
        
        /** The size of the 3D render buffer used for rendering. */
        internal_size: Vector2i
        
        /** The target (upscale) size if scaling is used. */
        target_size: Vector2i
        
        /** The number of views we're rendering. */
        view_count: number /*i64*/
        
        /** The requested scaling mode with which we upscale/downscale if [member internal_size] and [member target_size] are not equal. */
        scaling_3d_mode: number /*i64*/
        
        /** The MSAA mode we're using for 3D rendering. */
        msaa_3d: number /*i64*/
        
        /** The requested screen space AA applied in post processing. */
        screen_space_aa: number /*i64*/
        
        /** FSR Sharpness applicable if FSR upscaling is used. */
        fsr_sharpness: boolean
        
        /** Bias applied to mipmaps. */
        texture_mipmap_bias: boolean
    }
    /** This class allows for a RenderSceneBuffer implementation to be made in GDExtension. */
    class RenderSceneBuffersExtension extends RenderSceneBuffers {
        /** Implement this in GDExtension to handle the (re)sizing of a viewport. */
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        
        /** Implement this in GDExtension to record a new FSR sharpness value. */
        /* gdvirtual */ _set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        
        /** Implement this in GDExtension to change the texture mipmap bias. */
        /* gdvirtual */ _set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        
        /** Implement this in GDExtension to react to the debanding flag changing. */
        /* gdvirtual */ _set_use_debanding(use_debanding: boolean): void
    }
    class RenderSceneBuffersGLES3 extends RenderSceneBuffers {
    }
    /** Abstract render scene buffer implementation for the RenderingDevice based renderers. */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        /** Returns `true` if a cached texture exists for this name. */
        has_texture(context: StringName, name: StringName): boolean
        
        /** Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists. */
        create_texture(context: StringName, name: StringName, data_format: RenderingDevice.DataFormat, usage_bits: number /*i64*/, texture_samples: RenderingDevice.TextureSamples, size: Vector2i, layers: number /*i64*/, mipmaps: number /*i64*/, unique: boolean): RID
        
        /** Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists. */
        create_texture_from_format(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): RID
        
        /** Create a new texture view for an existing texture and cache this under the given view_name. Will return the existing teture view if it already exists. Will error if the source texture doesn't exist. */
        create_texture_view(context: StringName, name: StringName, view_name: StringName, view: RDTextureView): RID
        
        /** Returns a cached texture with this name. */
        get_texture(context: StringName, name: StringName): RID
        
        /** Returns the texture format information with which a cached texture was created. */
        get_texture_format(context: StringName, name: StringName): RDTextureFormat
        
        /** Returns a specific slice (layer or mipmap) for a cached texture. */
        get_texture_slice(context: StringName, name: StringName, layer: number /*i64*/, mipmap: number /*i64*/, layers: number /*i64*/, mipmaps: number /*i64*/): RID
        
        /** Returns a specific view of a slice (layer or mipmap) for a cached texture. */
        get_texture_slice_view(context: StringName, name: StringName, layer: number /*i64*/, mipmap: number /*i64*/, layers: number /*i64*/, mipmaps: number /*i64*/, view: RDTextureView): RID
        
        /** Returns the texture size of a given slice of a cached texture. */
        get_texture_slice_size(context: StringName, name: StringName, mipmap: number /*i64*/): Vector2i
        
        /** Frees all buffers related to this context. */
        clear_context(context: StringName): void
        
        /** Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_color_texture(): RID
        
        /** Returns the specified layer from the color texture we are rendering 3D content to. */
        get_color_layer(layer: number /*i64*/): RID
        
        /** Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_depth_texture(): RID
        
        /** Returns the specified layer from the depth texture we are rendering 3D content to. */
        get_depth_layer(layer: number /*i64*/): RID
        
        /** Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
        get_velocity_texture(): RID
        
        /** Returns the specified layer from the velocity texture we are rendering 3D content to. */
        get_velocity_layer(layer: number /*i64*/): RID
        
        /** Returns the render target associated with this buffers object. */
        get_render_target(): RID
        
        /** Returns the view count for the associated viewport. */
        get_view_count(): number /*i64*/
        
        /** Returns the internal size of the render buffer (size before upscaling) with which textures are created by default. */
        get_internal_size(): Vector2i
        
        /** Returns `true` if TAA is enabled. */
        get_use_taa(): boolean
    }
    namespace RenderingDevice {
        enum DeviceType {
            /** Rendering device type does not match any of the other enum values or is unknown. */
            DEVICE_TYPE_OTHER = 0,
            
            /** Rendering device is an integrated GPU, which is typically [i](but not always)[/i] slower than dedicated GPUs ([constant DEVICE_TYPE_DISCRETE_GPU]). On Android and iOS, the rendering device type is always considered to be [constant DEVICE_TYPE_INTEGRATED_GPU]. */
            DEVICE_TYPE_INTEGRATED_GPU = 1,
            
            /** Rendering device is a dedicated GPU, which is typically [i](but not always)[/i] faster than integrated GPUs ([constant DEVICE_TYPE_INTEGRATED_GPU]). */
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
            
            /** Triangle strip rendering primitive with [i]primitive restart[/i] enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.  
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
            
            /** AND logic operation with the [i]destination[/i] operand being inverted. See also [constant LOGIC_OP_AND_INVERTED]. */
            LOGIC_OP_AND_REVERSE = 2,
            
            /** Copy logic operation (keeps the [i]source[/i] value as-is). See also [constant LOGIC_OP_COPY_INVERTED] and [constant LOGIC_OP_NO_OP]. */
            LOGIC_OP_COPY = 3,
            
            /** AND logic operation with the [i]source[/i] operand being inverted. See also [constant LOGIC_OP_AND_REVERSE]. */
            LOGIC_OP_AND_INVERTED = 4,
            
            /** No-op logic operation (keeps the [i]destination[/i] value as-is). See also [constant LOGIC_OP_COPY]. */
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
            
            /** OR logic operation with the [i]destination[/i] operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
            LOGIC_OP_OR_REVERSE = 11,
            
            /** NOT logic operation (inverts the value). See also [constant LOGIC_OP_COPY]. */
            LOGIC_OP_COPY_INVERTED = 12,
            
            /** OR logic operation with the [i]source[/i] operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
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
    /** Abstraction for working with modern low-level graphics APIs. */
    class RenderingDevice extends Object {
        /** Returned by functions that return an ID if a value is invalid. */
        static readonly INVALID_ID = -1
        
        /** Returned by functions that return a format ID if a value is invalid. */
        static readonly INVALID_FORMAT_ID = -1
        
        /** Creates a new texture. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         *      
         *  **Note:** Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.  
         */
        texture_create(format: RDTextureFormat, view: RDTextureView, data: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
        texture_create_shared(view: RDTextureView, with_texture: RID): RID
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared]  
         *  For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.  
         */
        texture_create_shared_from_slice(view: RDTextureView, with_texture: RID, layer: number /*i64*/, mipmap: number /*i64*/, mipmaps: number /*i64*/ = 1, slice_type: RenderingDevice.TextureSliceType = 0): RID
        
        /** Returns an RID for an existing [param image] (`VkImage`) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], and [param layers]. This can be used to allow Godot to render onto foreign images. */
        texture_create_from_extension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usage_flags: RenderingDevice.TextureUsageBits, image: number /*i64*/, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, layers: number /*i64*/): RID
        
        /** Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be `0`. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** Updating textures is forbidden during creation of a draw or compute list.  
         *      
         *  **Note:** The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.  
         *      
         *  **Note:** The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.  
         */
        texture_update(texture: RID, layer: number /*i64*/, data: PackedByteArray, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
        /** Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         *      
         *  **Note:** [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         */
        texture_get_data(texture: RID, layer: number /*i64*/): PackedByteArray
        
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
        texture_copy(from_texture: RID, to_texture: RID, from_pos: Vector3, to_pos: Vector3, size: Vector3, src_mipmap: number /*i64*/, dst_mipmap: number /*i64*/, src_layer: number /*i64*/, dst_layer: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
        /** Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be `0` and [param layer_count] must be `1`.  
         *      
         *  **Note:** [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.  
         */
        texture_clear(texture: RID, color: Color, base_mipmap: number /*i64*/, mipmap_count: number /*i64*/, base_layer: number /*i64*/, layer_count: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
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
        texture_resolve_multisample(from_texture: RID, to_texture: RID, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
        /** Returns the data format used to create this texture. */
        texture_get_format(texture: RID): RDTextureFormat
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        texture_get_native_handle(texture: RID): number /*i64*/
        
        /** Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.  
         *  If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.  
         */
        framebuffer_format_create(attachments: Array, view_count: number /*i64*/ = 1): number /*i64*/
        
        /** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
        framebuffer_format_create_multipass(attachments: Array, passes: Array, view_count: number /*i64*/ = 1): number /*i64*/
        
        /** Creates a new empty framebuffer format with the specified number of [param samples] and returns its ID. */
        framebuffer_format_create_empty(samples: RenderingDevice.TextureSamples = 0): number /*i64*/
        
        /** Returns the number of texture samples used for the given framebuffer [param format] ID (returned by [method framebuffer_get_format]). */
        framebuffer_format_get_texture_samples(format: number /*i64*/, render_pass: number /*i64*/ = 0): RenderingDevice.TextureSamples
        
        /** Creates a new framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create(textures: Array, validate_with_format: number /*i64*/ = -1, view_count: number /*i64*/ = 1): RID
        
        /** Creates a new multipass framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create_multipass(textures: Array, passes: Array, validate_with_format: number /*i64*/ = -1, view_count: number /*i64*/ = 1): RID
        
        /** Creates a new empty framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebuffer_create_empty(size: Vector2i, samples: RenderingDevice.TextureSamples = 0, validate_with_format: number /*i64*/ = -1): RID
        
        /** Returns the format ID of the framebuffer specified by the [param framebuffer] RID. This ID is guaranteed to be unique for the same formats and does not need to be freed. */
        framebuffer_get_format(framebuffer: RID): number /*i64*/
        
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
        vertex_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, use_as_storage: boolean = false): RID
        
        /** Creates a new vertex format with the specified [param vertex_descriptions]. Returns a unique vertex format ID corresponding to the newly created vertex format. */
        vertex_format_create(vertex_descriptions: Array): number /*i64*/
        
        /** Creates a vertex array based on the specified buffers. Optionally, [param offsets] (in bytes) may be defined for each buffer. */
        vertex_array_create(vertex_count: number /*i64*/, vertex_format: number /*i64*/, src_buffers: Array, offsets: PackedInt64Array = <any> {} /*compound.type from 31([object Object])*/): RID
        
        /** Creates a new index buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        index_buffer_create(size_indices: number /*i64*/, format: RenderingDevice.IndexBufferFormat, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, use_restart_indices: boolean = false): RID
        
        /** Creates a new index array. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        index_array_create(index_buffer: RID, index_offset: number /*i64*/, index_count: number /*i64*/): RID
        
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
        shader_create_from_bytecode(binary_data: PackedByteArray, placeholder_rid: RID = <any> {} /*compound.type from 23([object Object])*/): RID
        
        /** Create a placeholder RID by allocating an RID without initializing it for use in [method shader_create_from_bytecode]. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time. */
        shader_create_placeholder(): RID
        
        /** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword). */
        shader_get_vertex_input_attribute_mask(shader: RID): number /*i64*/
        
        /** Creates a new uniform buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniform_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): RID
        
        /** Creates a [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffer[/url] with the specified [param data] and [param usage]. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        storage_buffer_create(size_bytes: number /*i64*/, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/, usage: RenderingDevice.StorageBufferUsage = 0): RID
        
        /** Creates a new texture buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        texture_buffer_create(size_bytes: number /*i64*/, format: RenderingDevice.DataFormat, data: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): RID
        
        /** Creates a new uniform set. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniform_set_create(uniforms: Array, shader: RID, shader_set: number /*i64*/): RID
        
        /** Checks if the [param uniform_set] is valid, i.e. is owned. */
        uniform_set_is_valid(uniform_set: RID): boolean
        
        /** Updates a region of [param size_bytes] bytes, starting at [param offset], in the buffer, with the specified [param data]. Raises a memory barrier except when [param post_barrier] is set to [constant BARRIER_MASK_NO_BARRIER].  
         *  Prints an error if:  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        buffer_update(buffer: RID, offset: number /*i64*/, size_bytes: number /*i64*/, data: PackedByteArray, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
        /** Clears the contents of the [param buffer], clearing [param size_bytes] bytes, starting at [param offset]. Always raises a memory barrier.  
         *  Prints an error if:  
         *  - the size isn't a multiple of four  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        buffer_clear(buffer: RID, offset: number /*i64*/, size_bytes: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        
        /** Returns a copy of the data of the specified [param buffer], optionally [param offset_bytes] and [param size_bytes] can be set to copy only a portion of the buffer. */
        buffer_get_data(buffer: RID, offset_bytes: number /*i64*/ = 0, size_bytes: number /*i64*/ = 0): PackedByteArray
        
        /** Creates a new render pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        render_pipeline_create(shader: RID, framebuffer_format: number /*i64*/, vertex_format: number /*i64*/, primitive: RenderingDevice.RenderPrimitive, rasterization_state: RDPipelineRasterizationState, multisample_state: RDPipelineMultisampleState, stencil_state: RDPipelineDepthStencilState, color_blend_state: RDPipelineColorBlendState, dynamic_state_flags: RenderingDevice.PipelineDynamicStateFlags = 0, for_render_pass: number /*i64*/ = 0, specialization_constants: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        
        /** Returns `true` if the render pipeline specified by the [param render_pipeline] RID is valid, `false` otherwise. */
        render_pipeline_is_valid(render_pipeline: RID): boolean
        
        /** Creates a new compute pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        compute_pipeline_create(shader: RID, specialization_constants: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        
        /** Returns `true` if the compute pipeline specified by the [param compute_pipeline] RID is valid, `false` otherwise. */
        compute_pipeline_is_valid(compute_pipeline: RID): boolean
        
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the [i]window[/i] size. See also [method screen_get_height].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_width(screen: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the [i]window[/i] size. See also [method screen_get_width].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_height(screen: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the screen's framebuffer format.  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_framebuffer_format(): number /*i64*/
        
        /** High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.  
         *      
         *  **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].  
         */
        draw_list_begin_for_screen(screen: number /*i64*/ = 0, clear_color: Color = new Color(0, 0, 0, 1)): number /*i64*/
        
        /** Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.  
         *  Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [method draw_list_end].  
         *  A simple drawing operation might look like this (code is not a complete example):  
         *    
         */
        draw_list_begin(framebuffer: RID, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, clear_depth: number /*f64*/ = 1, clear_stencil: number /*i64*/ = 0, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, storage_textures: Array = <any> {} /*compound.type from 28([object Object])*/): number /*i64*/
        
        /** Variant of [method draw_list_begin] with support for multiple splits. The [param splits] parameter determines how many splits are created. */
        draw_list_begin_split(framebuffer: RID, splits: number /*i64*/, initial_color_action: RenderingDevice.InitialAction, final_color_action: RenderingDevice.FinalAction, initial_depth_action: RenderingDevice.InitialAction, final_depth_action: RenderingDevice.FinalAction, clear_color_values: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, clear_depth: number /*f64*/ = 1, clear_stencil: number /*i64*/ = 0, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, storage_textures: Array = <any> {} /*compound.type from 28([object Object])*/): PackedInt64Array
        
        /** Sets blend constants for the specified [param draw_list] to [param color]. Blend constants are used only if the graphics pipeline is created with [constant DYNAMIC_STATE_BLEND_CONSTANTS] flag set. */
        draw_list_set_blend_constants(draw_list: number /*i64*/, color: Color): void
        
        /** Binds [param render_pipeline] to the specified [param draw_list]. */
        draw_list_bind_render_pipeline(draw_list: number /*i64*/, render_pipeline: RID): void
        
        /** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list. */
        draw_list_bind_uniform_set(draw_list: number /*i64*/, uniform_set: RID, set_index: number /*i64*/): void
        
        /** Binds [param vertex_array] to the specified [param draw_list]. */
        draw_list_bind_vertex_array(draw_list: number /*i64*/, vertex_array: RID): void
        
        /** Binds [param index_array] to the specified [param draw_list]. */
        draw_list_bind_index_array(draw_list: number /*i64*/, index_array: RID): void
        
        /** Sets the push constant data to [param buffer] for the specified [param draw_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        draw_list_set_push_constant(draw_list: number /*i64*/, buffer: PackedByteArray, size_bytes: number /*i64*/): void
        
        /** Submits [param draw_list] for rendering on the GPU. This is the raster equivalent to [method compute_list_dispatch]. */
        draw_list_draw(draw_list: number /*i64*/, use_indices: boolean, instances: number /*i64*/, procedural_vertex_count: number /*i64*/ = 0): void
        
        /** Creates a scissor rectangle and enables it for the specified [param draw_list]. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [method draw_list_disable_scissor].  
         *      
         *  **Note:** The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.  
         */
        draw_list_enable_scissor(draw_list: number /*i64*/, rect: Rect2 = <any> {} /*compound.type from 7([object Object])*/): void
        
        /** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
        draw_list_disable_scissor(draw_list: number /*i64*/): void
        
        /** Switches to the next draw pass and returns the split's ID. Equivalent to [method draw_list_switch_to_next_pass_split] with `splits` set to `1`. */
        draw_list_switch_to_next_pass(): number /*i64*/
        
        /** Switches to the next draw pass, with the number of splits allocated specified in [param splits]. The return value is an array containing the ID of each split. For single-split usage, see [method draw_list_switch_to_next_pass]. */
        draw_list_switch_to_next_pass_split(splits: number /*i64*/): PackedInt64Array
        
        /** Finishes a list of raster drawing commands created with the `draw_*` methods. */
        draw_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        
        /** Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.  
         *  If [param allow_draw_overlap] is `true`, you may have one draw list running at the same time as one compute list. Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].  
         *  A simple compute operation might look like this (code is not a complete example):  
         *    
         */
        compute_list_begin(allow_draw_overlap: boolean = false): number /*i64*/
        
        /** Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [method compute_list_dispatch]. */
        compute_list_bind_compute_pipeline(compute_list: number /*i64*/, compute_pipeline: RID): void
        
        /** Sets the push constant data to [param buffer] for the specified [param compute_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        compute_list_set_push_constant(compute_list: number /*i64*/, buffer: PackedByteArray, size_bytes: number /*i64*/): void
        
        /** Binds the [param uniform_set] to this [param compute_list]. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier. */
        compute_list_bind_uniform_set(compute_list: number /*i64*/, uniform_set: RID, set_index: number /*i64*/): void
        
        /** Submits the compute list for processing on the GPU. This is the compute equivalent to [method draw_list_draw]. */
        compute_list_dispatch(compute_list: number /*i64*/, x_groups: number /*i64*/, y_groups: number /*i64*/, z_groups: number /*i64*/): void
        
        /** Raises a Vulkan compute barrier in the specified [param compute_list]. */
        compute_list_add_barrier(compute_list: number /*i64*/): void
        
        /** Finishes a list of compute commands created with the `compute_*` methods. */
        compute_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        
        /** Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly. */
        free_rid(rid: RID): void
        
        /** Creates a timestamp marker with the specified [param name]. This is used for performance reporting with the [method get_captured_timestamp_cpu_time], [method get_captured_timestamp_gpu_time] and [method get_captured_timestamp_name] methods. */
        capture_timestamp(name: string): void
        
        /** Returns the total number of timestamps (rendering steps) available for profiling. */
        get_captured_timestamps_count(): number /*i64*/
        
        /** Returns the index of the last frame rendered that has rendering timestamps available for querying. */
        get_captured_timestamps_frame(): number /*i64*/
        
        /** Returns the timestamp in GPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_cpu_time] and [method capture_timestamp]. */
        get_captured_timestamp_gpu_time(index: number /*i64*/): number /*i64*/
        
        /** Returns the timestamp in CPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_gpu_time] and [method capture_timestamp]. */
        get_captured_timestamp_cpu_time(index: number /*i64*/): number /*i64*/
        
        /** Returns the timestamp's name for the rendering step specified by [param index]. See also [method capture_timestamp]. */
        get_captured_timestamp_name(index: number /*i64*/): string
        
        /** Returns the value of the specified [param limit]. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.  
         *  Limits for various graphics hardware can be found in the [url=https://vulkan.gpuinfo.org/]Vulkan Hardware Database[/url].  
         */
        limit_get(limit: RenderingDevice.Limit): number /*i64*/
        
        /** Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main [RenderingDevice], frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local [RenderingDevice]s only have 1 frame. */
        get_frame_delay(): number /*i64*/
        
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
        
        /** Puts a [i]full[/i] memory barrier in place. This is a memory [method barrier] with all flags enabled. [method full_barrier] it should only be used for debugging as it can severely impact performance. */
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
        get_memory_usage(type: RenderingDevice.MemoryType): number /*i64*/
        
        /** Returns the unique identifier of the driver [param resource] for the specified [param rid]. Some driver resource types ignore the specified [param rid] (see [enum DriverResource] descriptions). [param index] is always ignored but must be specified anyway. */
        get_driver_resource(resource: RenderingDevice.DriverResource, rid: RID, index: number /*i64*/): number /*i64*/
    }
    class ReparentDialog extends ConfirmationDialog {
        _cancel(): void
        readonly reparent: Signal // path: NodePath, keep_global_xform: boolean => void
    }
    class ReplicationEditor extends VBoxContainer {
        _update_config(): void
        _update_value(property: NodePath, column: number /*i64*/, value: number /*i64*/): void
    }
    /** Base class for serializable objects. */
    class Resource extends RefCounted {
        /** Override this method to return a custom [RID] when [method get_rid] is called. */
        /* gdvirtual */ _get_rid(): RID
        
        /** Override this method to customize the newly duplicated resource created from [method PackedScene.instantiate], if the original's [member resource_local_to_scene] is set to `true`.  
         *  **Example:** Set a random `damage` value to every local resource from an instantiated scene.  
         *    
         */
        /* gdvirtual */ _setup_local_to_scene(): void
        set_path(path: string): void
        
        /** Sets the [member resource_path] to [param path], potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource. */
        take_over_path(path: string): void
        get_path(): string
        set_name(name: string): void
        get_name(): string
        
        /** Returns the [RID] of this resource (or an empty RID). Many resources (such as [Texture2D], [Mesh], and so on) are high-level abstractions of resources stored in a specialized server ([DisplayServer], [RenderingServer], etc.), so this function will return the original [RID]. */
        get_rid(): RID
        set_local_to_scene(enable: boolean): void
        is_local_to_scene(): boolean
        
        /** If [member resource_local_to_scene] is set to `true` and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns `null`. */
        get_local_scene(): Node
        
        /** Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to `true`, this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance.  
         *  [i]Deprecated.[/i] This method should only be called internally. Override [method _setup_local_to_scene] instead.  
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
        resource_local_to_scene: boolean
        
        /** The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.  
         *      
         *  **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].  
         */
        resource_path: string
        
        /** An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.  
         *      
         *  **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.  
         */
        resource_name: string
        
        /** Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].  
         *      
         *  **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.  
         */
        readonly changed: Signal //  => void
        
        /** Emitted by a newly duplicated resource with [member resource_local_to_scene] set to `true`.   
         *  [i]Deprecated.[/i] This signal is only emitted when the resource is created. Override [method _setup_local_to_scene] instead.  
         */
        readonly setup_local_to_scene_requested: Signal //  => void
    }
    class ResourceFormatImporterSaver extends ResourceFormatSaver {
    }
    namespace ResourceFormatLoader {
        enum CacheMode {
            CACHE_MODE_IGNORE = 0,
            CACHE_MODE_REUSE = 1,
            CACHE_MODE_REPLACE = 2,
        }
    }
    /** Loads a specific resource type from a file. */
    class ResourceFormatLoader extends RefCounted {
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
        /* gdvirtual */ _get_resource_uid(path: string): number /*i64*/
        
        /** If implemented, gets the dependencies of a given resource. If [param add_types] is `true`, paths should be appended `::TypeName`, where `TypeName` is the class name of the dependency.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _get_dependencies(path: string, add_types: boolean): PackedStringArray
        
        /** If implemented, renames dependencies within the given resource and saves it. [param renames] is a dictionary `{ String => String }` mapping old dependency paths to new paths.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _rename_dependencies(path: string, renames: Dictionary): GodotError
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _get_classes_used(path: string): PackedStringArray
        
        /** Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, [param original_path] will target the source file. Returns a [Resource] object on success, or an [enum Error] constant in case of failure.  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        /* gdvirtual */ _load(path: string, original_path: string, use_sub_threads: boolean, cache_mode: number /*i64*/): void
    }
    /** Saves a specific resource type to a file. */
    class ResourceFormatSaver extends RefCounted {
        /** Saves the given resource object to a file at the target [param path]. [param flags] is a bitmask composed with [enum ResourceSaver.SaverFlags] constants.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _save(resource: Resource, path: string, flags: number /*i64*/): GodotError
        
        /** Sets a new UID for the resource at the given [param path]. Returns [constant OK] on success, or an [enum Error] constant in case of failure. */
        /* gdvirtual */ _set_uid(path: string, uid: number /*i64*/): GodotError
        
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
            
            /** The import order for scenes, which ensures scenes are imported [i]after[/i] all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources. */
            IMPORT_ORDER_SCENE = 100,
        }
    }
    /** Base class for resource importers. */
    class ResourceImporter extends RefCounted {
    }
    /** Imports a bitmap font in the BMFont (`.fnt`) format. */
    class ResourceImporterBMFont extends ResourceImporter {
    }
    /** Imports a [BitMap] resource (2D array of boolean values). */
    class ResourceImporterBitMap extends ResourceImporter {
    }
    /** Imports comma-separated values */
    class ResourceImporterCSVTranslation extends ResourceImporter {
    }
    /** Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size. */
    class ResourceImporterDynamicFont extends ResourceImporter {
    }
    /** Imports a image for use in scripting, with no rendering capabilities. */
    class ResourceImporterImage extends ResourceImporter {
    }
    /** Imports a fixed-width bitmap font where all glyphs have the same width and height. */
    class ResourceImporterImageFont extends ResourceImporter {
    }
    /** Imports a 3-dimensional texture ([Texture3D]), a [Texture2DArray], a [Cubemap] or a [CubemapArray]. */
    class ResourceImporterLayeredTexture extends ResourceImporter {
    }
    /** Imports a MP3 audio file for playback. */
    class ResourceImporterMP3 extends ResourceImporter {
    }
    /** Imports an OBJ 3D model as an independent [Mesh] or scene. */
    class ResourceImporterOBJ extends ResourceImporter {
    }
    /** Imports an Ogg Vorbis audio file for playback. */
    class ResourceImporterOggVorbis extends ResourceImporter {
        /** This method loads audio data from a PackedByteArray buffer into an AudioStreamOggVorbis object. */
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        
        /** This method loads audio data from a file into an AudioStreamOggVorbis object. The file path is provided as a string. */
        static load_from_file(path: string): AudioStreamOggVorbis
    }
    /** Imports a glTF, FBX, Collada or Blender 3D scene. */
    class ResourceImporterScene extends ResourceImporter {
    }
    /** Imports native GLSL shaders (not Godot shaders) as a [RDShaderFile]. */
    class ResourceImporterShaderFile extends ResourceImporter {
    }
    /** Imports an image for use in 2D or 3D rendering. */
    class ResourceImporterTexture extends ResourceImporter {
    }
    /** Imports a collection of textures from a PNG image into an optimized [AtlasTexture] for 2D rendering. */
    class ResourceImporterTextureAtlas extends ResourceImporter {
    }
    /** Imports a WAV audio file for playback. */
    class ResourceImporterWAV extends ResourceImporter {
    }
    /** A node used to preload sub-resources inside a scene. */
    class ResourcePreloader extends Node {
        _set_resources(resources: Array): void
        _get_resources(): Array
        
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
        resources: Array
    }
    class ResourcePreloaderEditor extends PanelContainer {
        _update_library(): void
        _remove_resource(to_remove: string): void
    }
    class ResourcePreloaderEditorPlugin extends EditorPlugin {
    }
    namespace RibbonTrailMesh {
        enum Shape {
            /** Gives the mesh a single flat face. */
            SHAPE_FLAT = 0,
            
            /** Gives the mesh two perpendicular flat faces, making a cross shape. */
            SHAPE_CROSS = 1,
        }
    }
    /** Represents a straight ribbon-shaped [PrimitiveMesh] with variable width. */
    class RibbonTrailMesh extends PrimitiveMesh {
        set_size(size: number /*f64*/): void
        get_size(): number /*f64*/
        set_sections(sections: number /*i64*/): void
        get_sections(): number /*i64*/
        set_section_length(section_length: number /*f64*/): void
        get_section_length(): number /*f64*/
        set_section_segments(section_segments: number /*i64*/): void
        get_section_segments(): number /*i64*/
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_shape(shape: RibbonTrailMesh.Shape): void
        get_shape(): RibbonTrailMesh.Shape
        
        /** Determines the shape of the ribbon. */
        shape: number /*i64*/
        
        /** The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [member curve] at the given distance. */
        size: number /*f64*/
        
        /** The total number of sections on the ribbon. */
        sections: number /*i64*/
        
        /** The length of a section of the ribbon. */
        section_length: number /*f64*/
        
        /** The number of segments in a section. The [member curve] is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance. */
        section_segments: number /*i64*/
        
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. */
        curve: Curve
    }
    /** A custom effect for a [RichTextLabel]. */
    class RichTextEffect extends Resource {
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
    /** A control for displaying text that can contain different font styles, images, and basic formatting. */
    class RichTextLabel extends Control {
        /** Returns the text without BBCode mark-up. */
        get_parsed_text(): string
        
        /** Adds raw non-BBCode-parsed text to the tag stack. */
        add_text(text: string): void
        set_text(text: string): void
        
        /** Adds an image's opening and closing tags to the tag stack, optionally providing a [param width] and [param height] to resize the image, a [param color] to tint the image and a [param region] to only use parts of the image.  
         *  If [param width] or [param height] is set to 0, the image size will be adjusted in order to keep the original aspect ratio.  
         *  If [param width] and [param height] are not set, but [param region] is, the region's rect will be used.  
         *  [param key] is an optional identifier, that can be used to modify the image via [method update_image].  
         *  If [param pad] is set, and the image is smaller than the size specified by [param width] and [param height], the image padding is added to match the size instead of upscaling.  
         *  If [param size_in_percent] is set, [param width] and [param height] values are percentages of the control width instead of pixels.  
         */
        add_image(image: Texture2D, width: number /*i64*/ = 0, height: number /*i64*/ = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, key: any = <any> {} /*compound.type from nil*/, pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        
        /** Updates the existing images with the key [param key]. Only properties specified by [param mask] bits are updated. See [method add_image]. */
        update_image(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width: number /*i64*/ = 0, height: number /*i64*/ = 0, color: Color = new Color(1, 1, 1, 1), inline_align: InlineAlignment = 5, region: Rect2 = <any> {} /*compound.type from 7([object Object])*/, pad: boolean = false, tooltip: string = '', size_in_percent: boolean = false): void
        
        /** Adds a newline tag to the tag stack. */
        newline(): void
        
        /** Removes a paragraph of content from the label. Returns `true` if the paragraph exists.  
         *  The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.  
         */
        remove_paragraph(paragraph: number /*i64*/): boolean
        
        /** Adds a [code skip-lint][font]` tag to the tag stack. Overrides default fonts for its duration.  
         *  Passing `0` to [param font_size] will use the existing default font size.  
         */
        push_font(font: Font, font_size: number /*i64*/ = 0): void
        
        /** Adds a [code skip-lint][font_size]` tag to the tag stack. Overrides default font size for its duration. */
        push_font_size(font_size: number /*i64*/): void
        
        /** Adds a [code skip-lint][font]` tag with a normal font to the tag stack. */
        push_normal(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold font to the tag stack. This is the same as adding a [code skip-lint]**` tag if not currently in a [code skip-lint][i]` tag. */
        push_bold(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold italics font to the tag stack. */
        push_bold_italics(): void
        
        /** Adds a [code skip-lint][font]` tag with an italics font to the tag stack. This is the same as adding an [code skip-lint][i]` tag if not currently in a [code skip-lint]**` tag. */
        push_italics(): void
        
        /** Adds a [code skip-lint][font]` tag with a monospace font to the tag stack. */
        push_mono(): void
        
        /** Adds a [code skip-lint][color]` tag to the tag stack. */
        push_color(color: Color): void
        
        /** Adds a [code skip-lint][outline_size]` tag to the tag stack. Overrides default text outline size for its duration. */
        push_outline_size(outline_size: number /*i64*/): void
        
        /** Adds a [code skip-lint][outline_color]` tag to the tag stack. Adds text outline for its duration. */
        push_outline_color(color: Color): void
        
        /** Adds a [code skip-lint][p]` tag to the tag stack. */
        push_paragraph(alignment: HorizontalAlignment, base_direction: Control.TextDirection = 0, language: string = '', st_parser: TextServer.StructuredTextParser = 0, justification_flags: TextServer.JustificationFlag = 163, tab_stops: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/): void
        
        /** Adds an [code skip-lint][indent]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_indent(level: number /*i64*/): void
        
        /** Adds [code skip-lint][ol]` or [code skip-lint][ul]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_list(level: number /*i64*/, type: RichTextLabel.ListType, capitalize: boolean, bullet: string = '•'): void
        
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
        push_table(columns: number /*i64*/, inline_align: InlineAlignment = 0, align_to_row: number /*i64*/ = -1): void
        
        /** Adds a [code skip-lint][dropcap]` tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        push_dropcap(string_: string, font: Font, size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, color: Color = new Color(1, 1, 1, 1), outline_size: number /*i64*/ = 0, outline_color: Color = new Color(0, 0, 0, 0)): void
        
        /** Edits the selected column's expansion options. If [param expand] is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.  
         *  For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.  
         *  If [param expand] is `false`, the column will not contribute to the total ratio.  
         */
        set_table_column_expand(column: number /*i64*/, expand: boolean, ratio: number /*i64*/ = 1): void
        
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
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_meta_underline(enable: boolean): void
        is_meta_underlined(): boolean
        set_hint_underline(enable: boolean): void
        is_hint_underlined(): boolean
        set_scroll_active(active: boolean): void
        is_scroll_active(): boolean
        set_scroll_follow(follow: boolean): void
        is_scroll_following(): boolean
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_v_scroll_bar(): VScrollBar
        
        /** Scrolls the window's top line to match [param line]. */
        scroll_to_line(line: number /*i64*/): void
        
        /** Scrolls the window's top line to match first line of the [param paragraph]. */
        scroll_to_paragraph(paragraph: number /*i64*/): void
        
        /** Scrolls to the beginning of the current selection. */
        scroll_to_selection(): void
        set_tab_size(spaces: number /*i64*/): void
        get_tab_size(): number /*i64*/
        set_fit_content(enabled: boolean): void
        is_fit_content_enabled(): boolean
        set_selection_enabled(enabled: boolean): void
        is_selection_enabled(): boolean
        set_context_menu_enabled(enabled: boolean): void
        is_context_menu_enabled(): boolean
        set_shortcut_keys_enabled(enabled: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        
        /** Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        get_selection_from(): number /*i64*/
        
        /** Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        get_selection_to(): number /*i64*/
        
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
        get_text(): string
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        is_ready(): boolean
        set_threaded(threaded: boolean): void
        is_threaded(): boolean
        set_progress_bar_delay(delay_ms: number /*i64*/): void
        get_progress_bar_delay(): number /*i64*/
        set_visible_characters(amount: number /*i64*/): void
        get_visible_characters(): number /*i64*/
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: number /*f64*/): void
        get_visible_ratio(): number /*f64*/
        
        /** Returns the line number of the character position provided. Line and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_character_line(character: number /*i64*/): number /*i64*/
        
        /** Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_character_paragraph(character: number /*i64*/): number /*i64*/
        
        /** Returns the total number of characters from text tags. Does not include BBCodes. */
        get_total_character_count(): number /*i64*/
        set_use_bbcode(enable: boolean): void
        is_using_bbcode(): boolean
        
        /** Returns the total number of lines in the text. Wrapped text is counted as multiple lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_line_count(): number /*i64*/
        
        /** Returns the number of visible lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_visible_line_count(): number /*i64*/
        
        /** Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
        get_paragraph_count(): number /*i64*/
        
        /** Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_visible_paragraph_count(): number /*i64*/
        
        /** Returns the height of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_content_height(): number /*i64*/
        
        /** Returns the width of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_content_width(): number /*i64*/
        
        /** Returns the vertical offset of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_line_offset(line: number /*i64*/): number /*f64*/
        
        /** Returns the vertical offset of the paragraph found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.  
         */
        get_paragraph_offset(paragraph: number /*i64*/): number /*f64*/
        
        /** Parses BBCode parameter [param expressions] into a dictionary. */
        parse_expressions_for_values(expressions: PackedStringArray): Dictionary
        set_effects(effects: Array): void
        get_effects(): Array
        
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
        menu_option(option: number /*i64*/): void
        _thread_end(): void
        
        /** If `true`, the label uses BBCode formatting. */
        bbcode_enabled: boolean
        
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.  
         *      
         *  **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.  
         */
        text: string
        
        /** If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
        fit_content: boolean
        
        /** If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See [method scroll_to_line]. */
        scroll_active: boolean
        
        /** If `true`, the window scrolls down to display new content automatically. */
        scroll_following: boolean
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags. */
        tab_size: number /*i64*/
        
        /** If `true`, a right-click displays the context menu. */
        context_menu_enabled: boolean
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        shortcut_keys_enabled: boolean
        
        /** The currently installed custom effects. This is an array of [RichTextEffect]s.  
         *  To add a custom effect, it's more convenient to use [method install_effect].  
         */
        custom_effects: Array
        
        /** If `true`, the label underlines meta tags such as [code skip-lint][url]{text}[/url]`. These tags can call a function when clicked if [signal meta_clicked] is connected to a function. */
        meta_underlined: boolean
        
        /** If `true`, the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint]`. */
        hint_underlined: boolean
        
        /** If `true`, text processing is done in a background thread. */
        threaded: boolean
        
        /** The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.  
         *      
         *  **Note:** Progress bar is displayed only if [member threaded] is enabled.  
         */
        progress_bar_delay: number /*i64*/
        
        /** If `true`, the label allows text selection. */
        selection_enabled: boolean
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        
        /** If `true`, allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        
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
        
        /** Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. [code skip-lint][url={"key": "value"}]Text[/url]`, then the parameter for this signal will always be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack. Alternatively, you can convert the [String] input to the desired type based on its contents (such as calling [method JSON.parse] on it).  
         *  For example, the following method can be connected to [signal meta_clicked] to open clicked URLs using the user's default web browser:  
         *    
         */
        readonly meta_clicked: Signal // meta: any => void
        
        /** Triggers when the mouse enters a meta tag. */
        readonly meta_hover_started: Signal // meta: any => void
        
        /** Triggers when the mouse exits a meta tag. */
        readonly meta_hover_ended: Signal // meta: any => void
        
        /** Triggered when the document is fully loaded. */
        readonly finished: Signal //  => void
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
    /** A 2D physics body that is moved by a physics simulation. */
    class RigidBody2D extends PhysicsBody2D {
        /** Allows you to read and safely modify the simulation state for the object. Use this instead of [method Node._physics_process] if you need to directly change the body's `position` or other physics properties. By default, it works in addition to the usual physics behavior, but [member custom_integrator] allows you to disable the default behavior and write custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState2D): void
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        get_inertia(): number /*f64*/
        set_inertia(inertia: number /*f64*/): void
        set_center_of_mass_mode(mode: RigidBody2D.CenterOfMassMode): void
        get_center_of_mass_mode(): RigidBody2D.CenterOfMassMode
        set_center_of_mass(center_of_mass: Vector2): void
        get_center_of_mass(): Vector2
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: RigidBody2D.DampMode): void
        get_linear_damp_mode(): RigidBody2D.DampMode
        set_angular_damp_mode(angular_damp_mode: RigidBody2D.DampMode): void
        get_angular_damp_mode(): RigidBody2D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_velocity(linear_velocity: Vector2): void
        get_linear_velocity(): Vector2
        set_angular_velocity(angular_velocity: number /*f64*/): void
        get_angular_velocity(): number /*f64*/
        set_max_contacts_reported(amount: number /*i64*/): void
        get_max_contacts_reported(): number /*i64*/
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        get_contact_count(): number /*i64*/
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_contact_monitor(enabled: boolean): void
        is_contact_monitor_enabled(): boolean
        set_continuous_collision_detection_mode(mode: RigidBody2D.CCDMode): void
        get_continuous_collision_detection_mode(): RigidBody2D.CCDMode
        
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
        apply_torque_impulse(torque: number /*f64*/): void
        
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
        apply_torque(torque: number /*f64*/): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        add_constant_central_force(force: Vector2): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        add_constant_torque(torque: number /*f64*/): void
        set_constant_force(force: Vector2): void
        get_constant_force(): Vector2
        set_constant_torque(torque: number /*f64*/): void
        get_constant_torque(): number /*f64*/
        set_sleeping(sleeping: boolean): void
        is_sleeping(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        set_lock_rotation_enabled(lock_rotation: boolean): void
        is_lock_rotation_enabled(): boolean
        set_freeze_enabled(freeze_mode: boolean): void
        is_freeze_enabled(): boolean
        set_freeze_mode(freeze_mode: RigidBody2D.FreezeMode): void
        get_freeze_mode(): RigidBody2D.FreezeMode
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        get_colliding_bodies(): Array
        
        /** The body's mass. */
        mass: number /*f64*/
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** Multiplies the gravity applied to the body. The body's gravity is calculated from the **Default Gravity** value in **Project > Project Settings > Physics > 2d** and/or any additional gravity vector applied by [Area2D]s. */
        gravity_scale: number /*f64*/
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        center_of_mass_mode: number /*i64*/
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
        center_of_mass: Vector2
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to `0`, inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer2D] to get the computed inertia.  
         *    
         */
        inertia: number /*f64*/
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        sleeping: boolean
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        can_sleep: boolean
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        lock_rotation: boolean
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        freeze: boolean
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        freeze_mode: number /*i64*/
        
        /** If `true`, internal force integration is disabled for this body. Aside from collision response, the body will only move as determined by the [method _integrate_forces] function. */
        custom_integrator: boolean
        
        /** Continuous collision detection mode.  
         *  Continuous collision detection tries to predict where a moving body will collide instead of moving it and correcting its movement after collision. Continuous collision detection is slower, but more precise and misses fewer collisions with small, fast-moving objects. Raycasting and shapecasting methods are available. See [enum CCDMode] for details.  
         */
        continuous_cd: number /*i64*/
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        max_contacts_reported: number /*i64*/
        
        /** If `true`, the RigidBody2D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        contact_monitor: boolean
        
        /** The body's linear velocity in pixels per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector2
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 2d** or any value override set by an [Area2D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        linear_damp: number /*f64*/
        
        /** The body's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: number /*f64*/
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 2d** or any value override set by an [Area2D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        angular_damp: number /*f64*/
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        constant_force: Vector2
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        constant_torque: number /*f64*/
        
        /** Emitted when one of this RigidBody2D's [Shape2D]s collides with another [PhysicsBody2D] or [TileMap]'s [Shape2D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_entered: Signal // body_rid: RID, body: Node, body_shape_index: number /*i64*/, local_shape_index: number /*i64*/ => void
        
        /** Emitted when the collision between one of this RigidBody2D's [Shape2D]s and another [PhysicsBody2D] or [TileMap]'s [Shape2D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_exited: Signal // body_rid: RID, body: Node, body_shape_index: number /*i64*/, local_shape_index: number /*i64*/ => void
        
        /** Emitted when a collision with another [PhysicsBody2D] or [TileMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly body_entered: Signal // body: Node => void
        
        /** Emitted when the collision with another [PhysicsBody2D] or [TileMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly body_exited: Signal // body: Node => void
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleeping_state_changed: Signal //  => void
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
    /** A 3D physics body that is moved by a physics simulation. */
    class RigidBody3D extends PhysicsBody3D {
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_inertia(inertia: Vector3): void
        get_inertia(): Vector3
        set_center_of_mass_mode(mode: RigidBody3D.CenterOfMassMode): void
        get_center_of_mass_mode(): RigidBody3D.CenterOfMassMode
        set_center_of_mass(center_of_mass: Vector3): void
        get_center_of_mass(): Vector3
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        set_linear_velocity(linear_velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_angular_velocity(): Vector3
        
        /** Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the [RigidBody3D]. */
        get_inverse_inertia_tensor(): Basis
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: RigidBody3D.DampMode): void
        get_linear_damp_mode(): RigidBody3D.DampMode
        set_angular_damp_mode(angular_damp_mode: RigidBody3D.DampMode): void
        get_angular_damp_mode(): RigidBody3D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_max_contacts_reported(amount: number /*i64*/): void
        get_max_contacts_reported(): number /*i64*/
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        get_contact_count(): number /*i64*/
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_contact_monitor(enabled: boolean): void
        is_contact_monitor_enabled(): boolean
        set_use_continuous_collision_detection(enable: boolean): void
        is_using_continuous_collision_detection(): boolean
        
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
        set_constant_force(force: Vector3): void
        get_constant_force(): Vector3
        set_constant_torque(torque: Vector3): void
        get_constant_torque(): Vector3
        set_sleeping(sleeping: boolean): void
        is_sleeping(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        set_lock_rotation_enabled(lock_rotation: boolean): void
        is_lock_rotation_enabled(): boolean
        set_freeze_enabled(freeze_mode: boolean): void
        is_freeze_enabled(): boolean
        set_freeze_mode(freeze_mode: RigidBody3D.FreezeMode): void
        get_freeze_mode(): RigidBody3D.FreezeMode
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        get_colliding_bodies(): Array
        
        /** The body's mass. */
        mass: number /*f64*/
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce RigidBody3D's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        gravity_scale: number /*f64*/
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        center_of_mass_mode: number /*i64*/
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
        center_of_mass: Vector3
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to [constant Vector3.ZERO], inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.  
         *    
         */
        inertia: Vector3
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        sleeping: boolean
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        can_sleep: boolean
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        lock_rotation: boolean
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        freeze: boolean
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        freeze_mode: number /*i64*/
        
        /** If `true`, internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        custom_integrator: boolean
        
        /** If `true`, continuous collision detection is used.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.  
         */
        continuous_cd: boolean
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        max_contacts_reported: number /*i64*/
        
        /** If `true`, the RigidBody3D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        contact_monitor: boolean
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector3
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        linear_damp: number /*f64*/
        
        /** The RigidBody3D's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: Vector3
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        angular_damp: number /*f64*/
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        constant_force: Vector3
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        constant_torque: Vector3
        
        /** Emitted when one of this RigidBody3D's [Shape3D]s collides with another [PhysicsBody3D] or [GridMap]'s [Shape3D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_entered: Signal // body_rid: RID, body: Node, body_shape_index: number /*i64*/, local_shape_index: number /*i64*/ => void
        
        /** Emitted when the collision between one of this RigidBody3D's [Shape3D]s and another [PhysicsBody3D] or [GridMap]'s [Shape3D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D]. [GridMap]s are detected if the Meshes have [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly body_shape_exited: Signal // body_rid: RID, body: Node, body_shape_index: number /*i64*/, local_shape_index: number /*i64*/ => void
        
        /** Emitted when a collision with another [PhysicsBody3D] or [GridMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly body_entered: Signal // body: Node => void
        
        /** Emitted when the collision with another [PhysicsBody3D] or [GridMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly body_exited: Signal // body: Node => void
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleeping_state_changed: Signal //  => void
    }
    /** Editor-only helper for setting up root motion in [AnimationMixer]. */
    class RootMotionView extends VisualInstance3D {
        set_animation_path(path: NodePath): void
        get_animation_path(): NodePath
        set_color(color: Color): void
        get_color(): Color
        set_cell_size(size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_radius(size: number /*f64*/): void
        get_radius(): number /*f64*/
        set_zero_y(enable: boolean): void
        get_zero_y(): boolean
        
        /** Path to an [AnimationMixer] node to use as a basis for root motion. */
        animation_path: NodePath
        
        /** The grid's color. */
        color: Color
        
        /** The grid's cell size in 3D units. */
        cell_size: number /*f64*/
        
        /** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
        radius: number /*f64*/
        
        /** If `true`, the grid's points will all be on the same Y coordinate ([i]local[/i] Y = 0). If `false`, the points' original Y coordinate is preserved. */
        zero_y: boolean
    }
    class RsConsole extends RefCounted {
        process_input(p_text: string): void
        register_command(p_text: string, p_callable: Callable, p_help: string): number /*i64*/
        unregister_command(p_id: number /*i64*/): void
        find_objects(p_keyword: string): PackedStringArray
        readonly on_output: Signal //  => void
        readonly on_clear: Signal //  => void
    }
    class RsEditorPlugin extends EditorPlugin {
    }
    class RsList extends RefCounted {
        append(p_item: any): number /*i64*/
        index_of(p_item: any): number /*i64*/
        last_index_of(p_item: any): number /*i64*/
        remove_at(p_index: number /*i64*/): boolean
        get_value(p_index: number /*i64*/): any
        is_valid_index(p_index: number /*i64*/): boolean
        clear(): void
        grow_if_needed(p_extra_count: number /*i64*/): void
        reserve(p_size: number /*i64*/): void
    }
    class RsNativeBridge extends Object {
        start(): void
        destroy(): void
        update(delta: number /*f64*/): void
        alloc_damage_number(p_parent: Node, p_secs: number /*f64*/): Control
        get_position(): Vector3
        is_possessed(): boolean
        set_terrain(p_terrain: RsTerrain): void
        set_root(p_root: Node): void
        set_direction(_unnamed_arg0: Vector3): void
        get_direction(): Vector3
        set_is_moving(_unnamed_arg0: boolean): void
        get_is_moving(): boolean
        direction: Vector3
        is_moving: boolean
        readonly game_over: Signal //  => void
        readonly damage_emitted: Signal // pos: Vector3, time: number /*f64*/ => void
        readonly info_updated: Signal // hp: number /*f64*/, hp_max: number /*f64*/, exp: number /*f64*/, exp_max: number /*f64*/, level: number /*i64*/, crowd: number /*i64*/ => void
    }
    class RsOutputDevice extends RefCounted {
        log(...vargargs: any[]): void
    }
    class RsTerrain extends GeometryInstance3D {
        set_radius(value: number /*f64*/): void
        get_radius(): number /*f64*/
        set_view_position(value: Vector3): void
        get_view_position(): Vector3
        get_center_position(): Vector3
        set_shader(value: Shader): void
        get_shader(): Shader
        set_texture(value: Texture2D): void
        get_texture(): Texture2D
        _im_update(): void
        view_position: Vector3
        shader: Shader
        texture: Texture2D
        readonly frame_changed: Signal //  => void
    }
    class RsTerrainGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class SceneCacheInterface extends RefCounted {
    }
    class SceneCreateDialog extends ConfirmationDialog {
    }
    class SceneExporterGLTFPlugin extends EditorPlugin {
    }
    class SceneImportSettings extends ConfirmationDialog {
    }
    class SceneImportSettingsData extends Object {
    }
    /** High-level multiplayer API implementation. */
    class SceneMultiplayer extends MultiplayerAPI {
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        
        /** Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing). */
        clear(): void
        
        /** Disconnects the peer identified by [param id], removing it from the list of connected peers, and closing the underlying connection with it. */
        disconnect_peer(id: number /*i64*/): void
        
        /** Returns the IDs of the peers currently trying to authenticate with this [MultiplayerAPI]. */
        get_authenticating_peers(): PackedInt32Array
        
        /** Sends the specified [param data] to the remote peer identified by [param id] as part of an authentication message. This can be used to authenticate peers, and control when [signal MultiplayerAPI.peer_connected] is emitted (and the remote peer accepted as one of the connected peers). */
        send_auth(id: number /*i64*/, data: PackedByteArray): GodotError
        
        /** Mark the authentication step as completed for the remote peer identified by [param id]. The [signal MultiplayerAPI.peer_connected] signal will be emitted for this peer once the remote side also completes the authentication. No further authentication messages are expected to be received from this peer.  
         *  If a peer disconnects before completing authentication, either due to a network issue, the [member auth_timeout] expiring, or manually calling [method disconnect_peer], the [signal peer_authentication_failed] signal will be emitted instead of [signal MultiplayerAPI.peer_disconnected].  
         */
        complete_auth(id: number /*i64*/): GodotError
        set_auth_callback(callback: Callable): void
        get_auth_callback(): Callable
        set_auth_timeout(timeout: number /*f64*/): void
        get_auth_timeout(): number /*f64*/
        set_refuse_new_connections(refuse: boolean): void
        is_refusing_new_connections(): boolean
        set_allow_object_decoding(enable: boolean): void
        is_object_decoding_allowed(): boolean
        set_server_relay_enabled(enabled: boolean): void
        is_server_relay_enabled(): boolean
        
        /** Sends the given raw [param bytes] to a specific peer identified by [param id] (see [method MultiplayerPeer.set_target_peer]). Default ID is `0`, i.e. broadcast to all peers. */
        send_bytes(bytes: PackedByteArray, id: number /*i64*/ = 0, mode: MultiplayerPeer.TransferMode = 2, channel: number /*i64*/ = 0): GodotError
        get_max_sync_packet_size(): number /*i64*/
        set_max_sync_packet_size(size: number /*i64*/): void
        get_max_delta_packet_size(): number /*i64*/
        set_max_delta_packet_size(size: number /*i64*/): void
        
        /** The root path to use for RPCs and replication. Instead of an absolute path, a relative path will be used to find the node upon which the RPC should be executed.  
         *  This effectively allows to have different branches of the scene tree to be managed by different MultiplayerAPI, allowing for example to run both client and server in the same scene.  
         */
        root_path: NodePath
        
        /** The callback to execute when when receiving authentication data sent via [method send_auth]. If the [Callable] is empty (default), peers will be automatically accepted as soon as they connect. */
        auth_callback: Callable
        
        /** If set to a value greater than `0.0`, the maximum amount of time peers can stay in the authenticating state, after which the authentication will automatically fail. See the [signal peer_authenticating] and [signal peer_authentication_failed] signals. */
        auth_timeout: number /*f64*/
        
        /** If `true`, the MultiplayerAPI will allow encoding and decoding of object during RPCs.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.  
         */
        allow_object_decoding: boolean
        
        /** If `true`, the MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] refuses new incoming connections. */
        refuse_new_connections: boolean
        
        /** Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is `false`, clients won't be automatically notified of other peers and won't be able to send them packets through the server.  
         *      
         *  **Note:** Changing this option while other peers are connected may lead to unexpected behaviors.  
         *      
         *  **Note:** Support for this feature may depend on the current [MultiplayerPeer] configuration. See [method MultiplayerPeer.is_server_relay_supported].  
         */
        server_relay: boolean
        
        /** Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [MultiplayerSynchronizer]. */
        max_sync_packet_size: number /*i64*/
        
        /** Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [MultiplayerSynchronizer]. */
        max_delta_packet_size: number /*i64*/
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] connects to a new peer and a valid [member auth_callback] is set. In this case, the [signal MultiplayerAPI.peer_connected] will not be emitted until [method complete_auth] is called with given peer [param id]. While in this state, the peer will not be included in the list returned by [method MultiplayerAPI.get_peers] (but in the one returned by [method get_authenticating_peers]), and only authentication data will be sent or received. See [method send_auth] for sending authentication data. */
        readonly peer_authenticating: Signal // id: number /*i64*/ => void
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] disconnects from a peer for which authentication had not yet completed. See [signal peer_authenticating]. */
        readonly peer_authentication_failed: Signal // id: number /*i64*/ => void
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] receives a [param packet] with custom data (see [method send_bytes]). ID is the peer ID of the peer that sent the packet. */
        readonly peer_packet: Signal // id: number /*i64*/, packet: PackedByteArray => void
    }
    class SceneRPCInterface extends RefCounted {
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
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer]. */
    class SceneReplicationConfig extends Resource {
        /** Returns a list of synchronized property [NodePath]s. */
        get_properties(): Array
        
        /** Adds the property identified by the given [param path] to the list of the properties being synchronized, optionally passing an [param index].  
         *      
         *  **Note:** For details on restrictions and limitations on property synchronization, see [MultiplayerSynchronizer].  
         */
        add_property(path: NodePath, index: number /*i64*/ = -1): void
        
        /** Returns whether the given [param path] is configured for synchronization. */
        has_property(path: NodePath): boolean
        
        /** Removes the property identified by the given [param path] from the configuration. */
        remove_property(path: NodePath): void
        
        /** Finds the index of the given [param path]. */
        property_get_index(path: NodePath): number /*i64*/
        
        /** Returns whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        property_get_spawn(path: NodePath): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        property_set_spawn(path: NodePath, enabled: boolean): void
        
        /** Returns the replication mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        property_get_replication_mode(path: NodePath): SceneReplicationConfig.ReplicationMode
        
        /** Sets the synchronization mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        property_set_replication_mode(path: NodePath, mode: SceneReplicationConfig.ReplicationMode): void
        
        /** Returns whether the property identified by the given [param path] is configured to be synchronized on process.  
         *  [i]Deprecated.[/i] Use [method property_get_replication_mode] instead.  
         */
        property_get_sync(path: NodePath): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on process.  
         *  [i]Deprecated.[/i] Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ALWAYS] instead.  
         */
        property_set_sync(path: NodePath, enabled: boolean): void
        
        /** Returns whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *  [i]Deprecated.[/i] Use [method property_get_replication_mode] instead.  
         */
        property_get_watch(path: NodePath): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *  [i]Deprecated.[/i] Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ON_CHANGE] instead.  
         */
        property_set_watch(path: NodePath, enabled: boolean): void
    }
    class SceneReplicationInterface extends RefCounted {
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
    /** Provides access to a scene file's information. */
    class SceneState extends RefCounted {
        /** Returns the number of nodes in the scene.  
         *  The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.  
         */
        get_node_count(): number /*i64*/
        
        /** Returns the type of the node at [param idx]. */
        get_node_type(idx: number /*i64*/): StringName
        
        /** Returns the name of the node at [param idx]. */
        get_node_name(idx: number /*i64*/): StringName
        
        /** Returns the path to the node at [param idx].  
         *  If [param for_parent] is `true`, returns the path of the [param idx] node's parent instead.  
         */
        get_node_path(idx: number /*i64*/, for_parent: boolean = false): NodePath
        
        /** Returns the path to the owner of the node at [param idx], relative to the root node. */
        get_node_owner_path(idx: number /*i64*/): NodePath
        
        /** Returns `true` if the node at [param idx] is an [InstancePlaceholder]. */
        is_node_instance_placeholder(idx: number /*i64*/): boolean
        
        /** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
        get_node_instance_placeholder(idx: number /*i64*/): string
        
        /** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance. */
        get_node_instance(idx: number /*i64*/): PackedScene
        
        /** Returns the list of group names associated with the node at [param idx]. */
        get_node_groups(idx: number /*i64*/): PackedStringArray
        
        /** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
        get_node_index(idx: number /*i64*/): number /*i64*/
        
        /** Returns the number of exported or overridden properties for the node at [param idx].  
         *  The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.  
         */
        get_node_property_count(idx: number /*i64*/): number /*i64*/
        
        /** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_name(idx: number /*i64*/, prop_idx: number /*i64*/): StringName
        
        /** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_value(idx: number /*i64*/, prop_idx: number /*i64*/): any
        
        /** Returns the number of signal connections in the scene.  
         *  The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.  
         */
        get_connection_count(): number /*i64*/
        
        /** Returns the path to the node that owns the signal at [param idx], relative to the root node. */
        get_connection_source(idx: number /*i64*/): NodePath
        
        /** Returns the name of the signal at [param idx]. */
        get_connection_signal(idx: number /*i64*/): StringName
        
        /** Returns the path to the node that owns the method connected to the signal at [param idx], relative to the root node. */
        get_connection_target(idx: number /*i64*/): NodePath
        
        /** Returns the method connected to the signal at [param idx]. */
        get_connection_method(idx: number /*i64*/): StringName
        
        /** Returns the connection flags for the signal at [param idx]. See [enum Object.ConnectFlags] constants. */
        get_connection_flags(idx: number /*i64*/): number /*i64*/
        
        /** Returns the list of bound parameters for the signal at [param idx]. */
        get_connection_binds(idx: number /*i64*/): Array
        
        /** Returns the number of unbound parameters for the signal at [param idx]. */
        get_connection_unbinds(idx: number /*i64*/): number /*i64*/
    }
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
    /** Manages the game loop via a hierarchy of nodes. */
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
         *  **Warning:** Setting this directly might not work as expected, and will [i]not[/i] add or remove any nodes from the tree, consider using [method change_scene_to_file] or [method change_scene_to_packed] instead.  
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
    /** One-shot timer. */
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
    /** A class stored as a resource. */
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
    /** Godot editor's popup dialog for creating new [Script] files. */
    class ScriptCreateDialog extends ConfirmationDialog {
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, built_in_enabled: boolean = true, load_enabled: boolean = true): void
        
        /** Emitted when the user clicks the OK button. */
        readonly script_created: Signal // script: Script => void
    }
    /** Godot editor's script editor. */
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
    /** Base editor for editing scripts in the [ScriptEditor]. */
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
        
        /** [i]Deprecated.[/i] This method is not called by the engine. */
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
    /** Abstract base class for scrollbars. */
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
    /** A container used to provide scrollbars to a child control when needed. */
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
        
        /** Emitted when scrolling starts when dragging the scrollable area w[i]ith a touch event[/i]. This signal is [i]not[/i] emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scroll_started: Signal //  => void
        
        /** Emitted when scrolling stops when dragging the scrollable area [i]with a touch event[/i]. This signal is [i]not[/i] emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
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
    /** A 2D line segment shape used for physics collision. */
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
    /** A synchronization mechanism used to control access to a shared resource by [Thread]s. */
    class Semaphore extends RefCounted {
        /** Waits for the [Semaphore], if its value is zero, blocks until non-zero. */
        wait(): void
        
        /** Like [method wait], but won't block, so if the value is zero, fails immediately and returns `false`. If non-zero, it returns `true` to report success. */
        try_wait(): boolean
        
        /** Lowers the [Semaphore], allowing one more thread in. */
        post(): void
    }
    /** A 2D ray shape used for physics collision that tries to separate itself from any collider. */
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
    /** A 3D ray shape used for physics collision that tries to separate itself from any collider. */
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
    /** Abstract base class for separators. */
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
    /** A shader implemented in the Godot shading language. */
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
    /** A node used to override global shader parameters' values in a scene. */
    class ShaderGlobalsOverride extends Node {
        _activate(): void
    }
    /** A snippet of shader code to be included in a [Shader] with `#include`. */
    class ShaderInclude extends Resource {
        set_code(code: string): void
        get_code(): string
        
        /** Returns the code of the shader include file. The returned text is what the user has written, not the full generated code used internally. */
        code: string
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters. */
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
    /** Abstract base class for 2D shapes used for physics collision. */
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
    /** Abstract base class for 3D shapes used for physics collision. */
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
    /** A 2D shape that sweeps a region of space to detect [CollisionObject2D]s. */
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
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s. */
    class ShapeCast3D extends Node3D {
        /** [i]Obsoleted.[/i] Use [signal Resource.changed] instead. */
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
    /** A shortcut for binding input. */
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
    /** The parent of a hierarchy of [Bone2D]s, used to create a 2D skeletal animation. */
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
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation. */
    class Skeleton3D extends Node3D {
        /** Notification received when this skeleton's pose needs to be updated.  
         *  This notification is received [i]before[/i] the related [signal pose_updated] signal.  
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
         *  [i]Deprecated.[/i] Do not use.  
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
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position. */
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
    /** Base class for resources that operate on [Bone2D]s in a [Skeleton2D]. */
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
    /** A modification that uses CCDIK to manipulate a series of bones to reach a target in 2D. */
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
         *  An inverted joint constraint only constraints the CCDIK joint to the angles [i]outside of[/i] the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
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
    /** A modification that uses FABRIK to manipulate a series of [Bone2D] nodes to reach a target. */
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
    /** A modification that jiggles [Bone2D] nodes as they move towards a target. */
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
    /** A modification that rotates a [Bone2D] node to look at a target. */
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
         *  An inverted joint constraint only constraints the [Bone2D] to the angles [i]outside of[/i] the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
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
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes. */
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
    /** A modification that holds and executes a [SkeletonModificationStack2D]. */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        /** Sets the [SkeletonModificationStack2D] that this modification is holding. This modification stack will then be executed when this modification is executed. */
        set_held_modification_stack(held_modification_stack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is holding. */
        get_held_modification_stack(): SkeletonModificationStack2D
    }
    /** A modification that rotates two bones using the law of cosines to reach the target. */
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
    /** A resource that holds a stack of [SkeletonModification2D]s. */
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
    /** Base class for a profile of a virtual skeleton used as a target for retargeting. */
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
    /** A humanoid [SkeletonProfile] preset. */
    class SkeletonProfileHumanoid extends SkeletonProfile {
    }
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
    /** Defines a 3D environment's background by using a [Material]. */
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
    /** Abstract base class for sliders. */
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
    /** A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body. */
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
    /** A deformable 3D physics mesh. */
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
}
