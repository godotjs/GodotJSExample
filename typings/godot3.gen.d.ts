// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class GPUParticles2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace GPUParticles3D {
        enum DrawOrder {
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
            
            /** Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
            DRAW_ORDER_REVERSE_LIFETIME = 2,
            
            /** Particles are drawn in order of depth. */
            DRAW_ORDER_VIEW_DEPTH = 3,
        }
        enum EmitFlags {
            /** Particle starts at the specified position. */
            EMIT_FLAG_POSITION = 1,
            
            /** Particle starts with specified rotation and scale. */
            EMIT_FLAG_ROTATION_SCALE = 2,
            
            /** Particle starts with the specified velocity vector, which defines the emission direction and speed. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** Particle starts with specified color. */
            EMIT_FLAG_COLOR = 8,
            
            /** Particle starts with specified `CUSTOM` data. */
            EMIT_FLAG_CUSTOM = 16,
        }
        enum TransformAlign {
            TRANSFORM_ALIGN_DISABLED = 0,
            TRANSFORM_ALIGN_Z_BILLBOARD = 1,
            TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
            TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3,
        }
    }
    /** A 3D particle emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticles3d.html  
     */
    class GPUParticles3D extends GeometryInstance3D {
        /** Maximum number of draw passes supported. */
        static readonly MAX_DRAW_PASSES = 4
        constructor(identifier?: any)
        set_emitting(emitting: boolean): void
        set_amount(amount: int64): void
        set_lifetime(secs: float64): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: float64): void
        set_explosiveness_ratio(ratio: float64): void
        set_randomness_ratio(ratio: float64): void
        set_visibility_aabb(aabb: AABB): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: int64): void
        set_fractional_delta(enable: boolean): void
        set_interpolate(enable: boolean): void
        set_process_material(material: Material): void
        set_speed_scale(scale: float64): void
        set_collision_base_size(size: float64): void
        set_interp_to_end(interp: float64): void
        is_emitting(): boolean
        get_amount(): int64
        get_lifetime(): float64
        get_one_shot(): boolean
        get_pre_process_time(): float64
        get_explosiveness_ratio(): float64
        get_randomness_ratio(): float64
        get_visibility_aabb(): AABB
        get_use_local_coordinates(): boolean
        get_fixed_fps(): int64
        get_fractional_delta(): boolean
        get_interpolate(): boolean
        get_process_material(): Material
        get_speed_scale(): float64
        get_collision_base_size(): float64
        get_interp_to_end(): float64
        set_draw_order(order: GPUParticles3D.DrawOrder): void
        get_draw_order(): GPUParticles3D.DrawOrder
        set_draw_passes(passes: int64): void
        
        /** Sets the [Mesh] that is drawn at index [param pass]. */
        set_draw_pass_mesh(pass: int64, mesh: Mesh): void
        get_draw_passes(): int64
        
        /** Returns the [Mesh] that is drawn at index [param pass]. */
        get_draw_pass_mesh(pass: int64): Mesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        
        /** Restarts the particle emission, clearing existing particles. */
        restart(): void
        
        /** Returns the axis-aligned bounding box that contains all the particles that are active in the current frame. */
        capture_aabb(): AABB
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        
        /** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
        emit_particle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: int64): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: float64): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): float64
        set_transform_align(align: GPUParticles3D.TransformAlign): void
        get_transform_align(): GPUParticles3D.TransformAlign
        
        /** Sets this node's properties to match a given [CPUParticles3D] node. */
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: float64): void
        get_amount_ratio(): float64
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        get emitting(): boolean
        set emitting(value: boolean)
        
        /** The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.  
         *      
         *  **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.  
         */
        get amount(): int64
        set amount(value: int64)
        
        /** The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.  
         *      
         *  **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.  
         */
        get amount_ratio(): float64
        set amount_ratio(value: float64)
        
        /** Path to another [GPUParticles3D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.  
         *      
         *  **Note:** When [member sub_emitter] is set, the target [GPUParticles3D] node will no longer emit particles on its own.  
         */
        get sub_emitter(): NodePath
        set sub_emitter(value: NodePath)
        
        /** The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. */
        get lifetime(): float64
        set lifetime(value: float64)
        
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.  
         *      
         *  **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.  
         */
        get interp_to_end(): float64
        set interp_to_end(value: float64)
        
        /** If `true`, only the number of particles equal to [member amount] will be emitted. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** Amount of time to preprocess the particles before animation starts. Lets you start the animation some time after particles have started emitting. */
        get preprocess(): float64
        set preprocess(value: float64)
        
        /** Speed scaling ratio. A value of `0` can be used to pause the particles. */
        get speed_scale(): float64
        set speed_scale(value: float64)
        
        /** Time ratio between each emission. If `0`, particles are emitted continuously. If `1`, all particles are emitted simultaneously. */
        get explosiveness(): float64
        set explosiveness(value: float64)
        
        /** Emission randomness ratio. */
        get randomness(): float64
        set randomness(value: float64)
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        get fixed_fps(): int64
        set fixed_fps(value: int64)
        
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        get interpolate(): boolean
        set interpolate(value: boolean)
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        get fract_delta(): boolean
        set fract_delta(value: boolean)
        
        /** The base diameter for particle collision in meters. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].  
         *      
         *  **Note:** Particles always have a spherical collision shape.  
         */
        get collision_base_size(): float64
        set collision_base_size(value: float64)
        
        /** The [AABB] that determines the node's region which needs to be visible on screen for the particle system to be active. [member GeometryInstance3D.extra_cull_margin] is added on each of the AABB's axes. Particle collisions and attraction will only occur within this area.  
         *  Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [AABB] can be grown via code or with the **Particles → Generate AABB** editor tool.  
         *      
         *  **Note:** [member visibility_aabb] is overridden by [member GeometryInstance3D.custom_aabb] if that property is set to a non-default value.  
         */
        get visibility_aabb(): AABB
        set visibility_aabb(value: AABB)
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. */
        get local_coords(): boolean
        set local_coords(value: boolean)
        
        /** Particle draw order. Uses [enum DrawOrder] values.  
         *      
         *  **Note:** [constant DRAW_ORDER_INDEX] is the only option that supports motion vectors for effects like TAA. It is suggested to use this draw order if the particles are opaque to fix ghosting artifacts.  
         */
        get draw_order(): int64
        set draw_order(value: int64)
        get transform_align(): int64
        set transform_align(value: int64)
        
        /** If `true`, enables particle trails using a mesh skinning system. Designed to work with [RibbonTrailMesh] and [TubeTrailMesh].  
         *      
         *  **Note:** [member BaseMaterial3D.use_particle_trails] must also be enabled on the particle mesh's material. Otherwise, setting [member trail_enabled] to `true` will have no effect.  
         *      
         *  **Note:** Unlike [GPUParticles2D], the number of trail sections and subdivisions is set in the [RibbonTrailMesh] or the [TubeTrailMesh]'s properties.  
         */
        get trail_enabled(): boolean
        set trail_enabled(value: boolean)
        
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is `true`. */
        get trail_lifetime(): float64
        set trail_lifetime(value: float64)
        
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        get process_material(): ShaderMaterial | ParticleProcessMaterial
        set process_material(value: ShaderMaterial | ParticleProcessMaterial)
        
        /** The number of draw passes when rendering particles. */
        get draw_passes(): int64
        set draw_passes(value: int64)
        get draw_skin(): Skin
        set draw_skin(value: Skin)
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.  
         *      
         *  **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.  
         */
        readonly finished: Signal //  => void
    }
    class GPUParticles3DEditor extends GPUParticles3DEditorBase {
        constructor(identifier?: any)
    }
    class GPUParticles3DEditorBase extends Control {
        constructor(identifier?: any)
    }
    class GPUParticles3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class GPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Abstract base class for 3D particle attractors.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractor3d.html  
     */
    class GPUParticlesAttractor3D extends VisualInstance3D {
        constructor(identifier?: any)
        set_cull_mask(mask: int64): void
        get_cull_mask(): int64
        set_strength(strength: float64): void
        get_strength(): float64
        set_attenuation(attenuation: float64): void
        get_attenuation(): float64
        set_directionality(amount: float64): void
        get_directionality(): float64
        
        /** Adjusts the strength of the attractor. If [member strength] is negative, particles will be pushed in the opposite direction. Particles will be pushed  *away*  from the attractor's origin if [member directionality] is `0.0`, or towards local +Z if [member directionality] is greater than `0.0`. */
        get strength(): float64
        set strength(value: float64)
        
        /** The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges. */
        get attenuation(): float64
        set attenuation(value: float64)
        
        /** Adjusts how directional the attractor is. At `0.0`, the attractor is not directional at all: it will attract particles towards its center. At `1.0`, the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [member strength] is negative).  
         *      
         *  **Note:** If [member directionality] is greater than `0.0`, the direction in which particles are pushed can be changed by rotating the [GPUParticlesAttractor3D] node.  
         */
        get directionality(): float64
        set directionality(value: float64)
        
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the attractor. By default, all particles are affected by an attractor.  
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.  
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.  
         */
        get cull_mask(): int64
        set cull_mask(value: int64)
    }
    /** A box-shaped attractor that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorbox3d.html  
     */
    class GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The attractor box's size in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A spheroid-shaped attractor that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorsphere3d.html  
     */
    class GPUParticlesAttractorSphere3D extends GPUParticlesAttractor3D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        
        /** The attractor sphere's radius in 3D units.  
         *      
         *  **Note:** Stretched ellipses can be obtained by using non-uniform scaling on the [GPUParticlesAttractorSphere3D] node.  
         */
        get radius(): float64
        set radius(value: float64)
    }
    /** A box-shaped attractor with varying directions and strengths defined in it that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorvectorfield3d.html  
     */
    class GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        
        /** The size of the vector field box in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The 3D texture to be used. Values are linearly interpolated between the texture's pixels.  
         *      
         *  **Note:** To get better performance, the 3D texture's resolution should reflect the [member size] of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.  
         */
        get texture(): Texture3D
        set texture(value: Texture3D)
    }
    /** Abstract base class for 3D particle collision shapes affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollision3d.html  
     */
    class GPUParticlesCollision3D extends VisualInstance3D {
        constructor(identifier?: any)
        set_cull_mask(mask: int64): void
        get_cull_mask(): int64
        
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the collision shape. By default, all particles that have [member ParticleProcessMaterial.collision_mode] set to [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] will be affected by a collision shape.  
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.  
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.  
         */
        get cull_mask(): int64
        set cull_mask(value: int64)
    }
    class GPUParticlesCollision3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** A box-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionbox3d.html  
     */
    class GPUParticlesCollisionBox3D extends GPUParticlesCollision3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The collision box's size in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
    }
    namespace GPUParticlesCollisionHeightField3D {
        enum Resolution {
            /** Generate a 256×256 heightmap. Intended for small-scale scenes, or larger scenes with no distant particles. */
            RESOLUTION_256 = 0,
            
            /** Generate a 512×512 heightmap. Intended for medium-scale scenes, or larger scenes with no distant particles. */
            RESOLUTION_512 = 1,
            
            /** Generate a 1024×1024 heightmap. Intended for large scenes with distant particles. */
            RESOLUTION_1024 = 2,
            
            /** Generate a 2048×2048 heightmap. Intended for very large scenes with distant particles. */
            RESOLUTION_2048 = 3,
            
            /** Generate a 4096×4096 heightmap. Intended for huge scenes with distant particles. */
            RESOLUTION_4096 = 4,
            
            /** Generate a 8192×8192 heightmap. Intended for gigantic scenes with distant particles. */
            RESOLUTION_8192 = 5,
            
            /** Represents the size of the [enum Resolution] enum. */
            RESOLUTION_MAX = 6,
        }
        enum UpdateMode {
            /** Only update the heightmap when the [GPUParticlesCollisionHeightField3D] node is moved, or when the camera moves if [member follow_camera_enabled] is `true`. An update can be forced by slightly moving the [GPUParticlesCollisionHeightField3D] in any direction, or by calling [method RenderingServer.particles_collision_height_field_update]. */
            UPDATE_MODE_WHEN_MOVED = 0,
            
            /** Update the heightmap every frame. This has a significant performance cost. This update should only be used when geometry that particles can collide with changes significantly during gameplay. */
            UPDATE_MODE_ALWAYS = 1,
        }
    }
    /** A real-time heightmap-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionheightfield3d.html  
     */
    class GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionHeightField3D.Resolution): void
        get_resolution(): GPUParticlesCollisionHeightField3D.Resolution
        set_update_mode(update_mode: GPUParticlesCollisionHeightField3D.UpdateMode): void
        get_update_mode(): GPUParticlesCollisionHeightField3D.UpdateMode
        set_follow_camera_enabled(enabled: boolean): void
        is_follow_camera_enabled(): boolean
        
        /** The collision heightmap's size in 3D units. To improve heightmap quality, [member size] should be set as small as possible while covering the parts of the scene you need. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Higher resolutions can represent small details more accurately in large scenes, at the cost of lower performance. If [member update_mode] is [constant UPDATE_MODE_ALWAYS], consider using the lowest resolution possible. */
        get resolution(): int64
        set resolution(value: int64)
        
        /** The update policy to use for the generated heightmap. */
        get update_mode(): int64
        set update_mode(value: int64)
        
        /** If `true`, the [GPUParticlesCollisionHeightField3D] will follow the current camera in global space. The [GPUParticlesCollisionHeightField3D] does not need to be a child of the [Camera3D] node for this to work.  
         *  Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering [member resolution] to improve performance if [member follow_camera_enabled] is `true`.  
         */
        get follow_camera_enabled(): boolean
        set follow_camera_enabled(value: boolean)
    }
    namespace GPUParticlesCollisionSDF3D {
        enum Resolution {
            /** Bake a 16×16×16 signed distance field. This is the fastest option, but also the least precise. */
            RESOLUTION_16 = 0,
            
            /** Bake a 32×32×32 signed distance field. */
            RESOLUTION_32 = 1,
            
            /** Bake a 64×64×64 signed distance field. */
            RESOLUTION_64 = 2,
            
            /** Bake a 128×128×128 signed distance field. */
            RESOLUTION_128 = 3,
            
            /** Bake a 256×256×256 signed distance field. */
            RESOLUTION_256 = 4,
            
            /** Bake a 512×512×512 signed distance field. This is the slowest option, but also the most precise. */
            RESOLUTION_512 = 5,
            
            /** Represents the size of the [enum Resolution] enum. */
            RESOLUTION_MAX = 6,
        }
    }
    /** A baked signed distance field 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionsdf3d.html  
     */
    class GPUParticlesCollisionSDF3D extends GPUParticlesCollision3D {
        constructor(identifier?: any)
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionSDF3D.Resolution): void
        get_resolution(): GPUParticlesCollisionSDF3D.Resolution
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        set_thickness(thickness: float64): void
        get_thickness(): float64
        set_bake_mask(mask: int64): void
        get_bake_mask(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        set_bake_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_bake_mask_value(layer_number: int64): boolean
        
        /** The collision SDF's size in 3D units. To improve SDF quality, the [member size] should be set as small as possible while covering the parts of the scene you need. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The bake resolution to use for the signed distance field [member texture]. The texture must be baked again for changes to the [member resolution] property to be effective. Higher resolutions have a greater performance cost and take more time to bake. Higher resolutions also result in larger baked textures, leading to increased VRAM and storage space requirements. To improve performance and reduce bake times, use the lowest resolution possible for the object you're representing the collision of. */
        get resolution(): int64
        set resolution(value: int64)
        
        /** The collision shape's thickness. Unlike other particle colliders, [GPUParticlesCollisionSDF3D] is actually hollow on the inside. [member thickness] can be increased to prevent particles from tunneling through the collision shape at high speeds, or when the [GPUParticlesCollisionSDF3D] is moved. */
        get thickness(): float64
        set thickness(value: float64)
        
        /** The visual layers to account for when baking the particle collision SDF. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated particle collision SDF. By default, all objects are taken into account for the particle collision SDF baking. */
        get bake_mask(): int64
        set bake_mask(value: int64)
        
        /** The 3D texture representing the signed distance field. */
        get texture(): Texture3D
        set texture(value: Texture3D)
    }
    class GPUParticlesCollisionSDF3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A sphere-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionsphere3d.html  
     */
    class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
        constructor(identifier?: any)
        set_radius(radius: float64): void
        get_radius(): float64
        
        /** The collision sphere's radius in 3D units. */
        get radius(): float64
        set radius(value: float64)
    }
    namespace Generic6DOFJoint3D {
        enum Param {
            /** The minimum difference between the pivot points' axes. */
            PARAM_LINEAR_LOWER_LIMIT = 0,
            
            /** The maximum difference between the pivot points' axes. */
            PARAM_LINEAR_UPPER_LIMIT = 1,
            
            /** A factor applied to the movement across the axes. The lower, the slower the movement. */
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            
            /** The amount of restitution on the axes' movement. The lower, the more momentum gets lost. */
            PARAM_LINEAR_RESTITUTION = 3,
            
            /** The amount of damping that happens at the linear motion across the axes. */
            PARAM_LINEAR_DAMPING = 4,
            
            /** The velocity the linear motor will try to reach. */
            PARAM_LINEAR_MOTOR_TARGET_VELOCITY = 5,
            
            /** The maximum force the linear motor will apply while trying to reach the velocity target. */
            PARAM_LINEAR_MOTOR_FORCE_LIMIT = 6,
            PARAM_LINEAR_SPRING_STIFFNESS = 7,
            PARAM_LINEAR_SPRING_DAMPING = 8,
            PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT = 9,
            
            /** The minimum rotation in negative direction to break loose and rotate around the axes. */
            PARAM_ANGULAR_LOWER_LIMIT = 10,
            
            /** The minimum rotation in positive direction to break loose and rotate around the axes. */
            PARAM_ANGULAR_UPPER_LIMIT = 11,
            
            /** The speed of all rotations across the axes. */
            PARAM_ANGULAR_LIMIT_SOFTNESS = 12,
            
            /** The amount of rotational damping across the axes. The lower, the more damping occurs. */
            PARAM_ANGULAR_DAMPING = 13,
            
            /** The amount of rotational restitution across the axes. The lower, the more restitution occurs. */
            PARAM_ANGULAR_RESTITUTION = 14,
            
            /** The maximum amount of force that can occur, when rotating around the axes. */
            PARAM_ANGULAR_FORCE_LIMIT = 15,
            
            /** When rotating across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower. */
            PARAM_ANGULAR_ERP = 16,
            
            /** Target speed for the motor at the axes. */
            PARAM_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
            
            /** Maximum acceleration for the motor at the axes. */
            PARAM_ANGULAR_MOTOR_FORCE_LIMIT = 18,
            PARAM_ANGULAR_SPRING_STIFFNESS = 19,
            PARAM_ANGULAR_SPRING_DAMPING = 20,
            PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 22,
        }
        enum Flag {
            /** If enabled, linear motion is possible within the given limits. */
            FLAG_ENABLE_LINEAR_LIMIT = 0,
            
            /** If enabled, rotational motion is possible within the given limits. */
            FLAG_ENABLE_ANGULAR_LIMIT = 1,
            FLAG_ENABLE_LINEAR_SPRING = 3,
            FLAG_ENABLE_ANGULAR_SPRING = 2,
            
            /** If enabled, there is a rotational motor across these axes. */
            FLAG_ENABLE_MOTOR = 4,
            
            /** If enabled, there is a linear motor across these axes. */
            FLAG_ENABLE_LINEAR_MOTOR = 5,
            
            /** Represents the size of the [enum Flag] enum. */
            FLAG_MAX = 6,
        }
    }
    /** A physics joint that allows for complex movement and rotation between two 3D physics bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_generic6dofjoint3d.html  
     */
    class Generic6DOFJoint3D extends Joint3D {
        constructor(identifier?: any)
        set_param_x(param: Generic6DOFJoint3D.Param, value: float64): void
        get_param_x(param: Generic6DOFJoint3D.Param): float64
        set_param_y(param: Generic6DOFJoint3D.Param, value: float64): void
        get_param_y(param: Generic6DOFJoint3D.Param): float64
        set_param_z(param: Generic6DOFJoint3D.Param, value: float64): void
        get_param_z(param: Generic6DOFJoint3D.Param): float64
        set_flag_x(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_x(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_y(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_y(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_z(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_z(flag: Generic6DOFJoint3D.Flag): boolean
    }
    namespace GeometryInstance3D {
        enum ShadowCastingSetting {
            /** Will not cast any shadows. Use this to improve performance for small geometry that is unlikely to cast noticeable shadows (such as debris). */
            SHADOW_CASTING_SETTING_OFF = 0,
            
            /** Will cast shadows from all visible faces in the GeometryInstance3D.  
             *  Will take culling into account, so faces not being rendered will not be taken into account when shadow casting.  
             */
            SHADOW_CASTING_SETTING_ON = 1,
            
            /** Will cast shadows from all visible faces in the GeometryInstance3D.  
             *  Will not take culling into account, so all faces will be taken into account when shadow casting.  
             */
            SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
            
            /** Will only show the shadows casted from this object.  
             *  In other words, the actual mesh will not be visible, only the shadows casted from the mesh will be.  
             */
            SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3,
        }
        enum GIMode {
            /** Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [VoxelGI] and SDFGI, the geometry will  *receive*  indirect lighting and reflections but the geometry will not be considered in GI baking. */
            GI_MODE_DISABLED = 0,
            
            /** Baked global illumination mode. Use for static objects that contribute to global illumination (such as level geometry). This GI mode is effective when using [VoxelGI], SDFGI and [LightmapGI]. */
            GI_MODE_STATIC = 1,
            
            /** Dynamic global illumination mode. Use for dynamic objects that contribute to global illumination. This GI mode is only effective when using [VoxelGI], but it has a higher performance impact than [constant GI_MODE_STATIC]. When using other GI methods, this will act the same as [constant GI_MODE_DISABLED]. When using [LightmapGI], the object will receive indirect lighting using lightmap probes instead of using the baked lightmap texture. */
            GI_MODE_DYNAMIC = 2,
        }
        enum LightmapScale {
            /** The standard texel density for lightmapping with [LightmapGI]. */
            LIGHTMAP_SCALE_1X = 0,
            
            /** Multiplies texel density by 2× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 1.5 and 3.0. */
            LIGHTMAP_SCALE_2X = 1,
            
            /** Multiplies texel density by 4× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 3.0 and 6.0. */
            LIGHTMAP_SCALE_4X = 2,
            
            /** Multiplies texel density by 8× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor greater than 6.0. */
            LIGHTMAP_SCALE_8X = 3,
            
            /** Represents the size of the [enum LightmapScale] enum. */
            LIGHTMAP_SCALE_MAX = 4,
        }
        enum VisibilityRangeFadeMode {
            /** Will not fade itself nor its visibility dependencies, hysteresis will be used instead. This is the fastest approach to manual LOD, but it can result in noticeable LOD transitions depending on how the LOD meshes are authored. See [member visibility_range_begin] and [member Node3D.visibility_parent] for more information. */
            VISIBILITY_RANGE_FADE_DISABLED = 0,
            
            /** Will fade-out itself when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin]. */
            VISIBILITY_RANGE_FADE_SELF = 1,
            
            /** Will fade-in its visibility dependencies (see [member Node3D.visibility_parent]) when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin]. */
            VISIBILITY_RANGE_FADE_DEPENDENCIES = 2,
        }
    }
    /** Base node for geometry-based visual instances.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_geometryinstance3d.html  
     */
    class GeometryInstance3D extends VisualInstance3D {
        constructor(identifier?: any)
        set_material_override(material: Material): void
        get_material_override(): Material
        set_material_overlay(material: Material): void
        get_material_overlay(): Material
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
        set_lod_bias(bias: float64): void
        get_lod_bias(): float64
        set_transparency(transparency: float64): void
        get_transparency(): float64
        set_visibility_range_end_margin(distance: float64): void
        get_visibility_range_end_margin(): float64
        set_visibility_range_end(distance: float64): void
        get_visibility_range_end(): float64
        set_visibility_range_begin_margin(distance: float64): void
        get_visibility_range_begin_margin(): float64
        set_visibility_range_begin(distance: float64): void
        get_visibility_range_begin(): float64
        set_visibility_range_fade_mode(mode: GeometryInstance3D.VisibilityRangeFadeMode): void
        get_visibility_range_fade_mode(): GeometryInstance3D.VisibilityRangeFadeMode
        
        /** Set the value of a shader uniform for this instance only ([url=$DOCS_URL/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].  
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it  *must*  be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.  
         */
        set_instance_shader_parameter(name: StringName, value: any): void
        
        /** Get the value of a shader parameter as set on this instance. */
        get_instance_shader_parameter(name: StringName): any
        set_extra_cull_margin(margin: float64): void
        get_extra_cull_margin(): float64
        set_lightmap_scale(scale: GeometryInstance3D.LightmapScale): void
        get_lightmap_scale(): GeometryInstance3D.LightmapScale
        set_gi_mode(mode: GeometryInstance3D.GIMode): void
        get_gi_mode(): GeometryInstance3D.GIMode
        set_ignore_occlusion_culling(ignore_culling: boolean): void
        is_ignoring_occlusion_culling(): boolean
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        
        /** The material override for the whole geometry.  
         *  If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.  
         */
        get material_override(): BaseMaterial3D | ShaderMaterial
        set material_override(value: BaseMaterial3D | ShaderMaterial)
        
        /** The material overlay for the whole geometry.  
         *  If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.  
         */
        get material_overlay(): BaseMaterial3D | ShaderMaterial
        set material_overlay(value: BaseMaterial3D | ShaderMaterial)
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         */
        get transparency(): float64
        set transparency(value: float64)
        
        /** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
        get cast_shadow(): int64
        set cast_shadow(value: int64)
        
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        get extra_cull_margin(): float64
        set extra_cull_margin(value: float64)
        
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to `0.0`. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        get custom_aabb(): AABB
        set custom_aabb(value: AABB)
        
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.  
         *  Useful for testing level of detail transitions in the editor.  
         */
        get lod_bias(): float64
        set lod_bias(value: float64)
        
        /** If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.  
         *      
         *  **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.  
         */
        get ignore_occlusion_culling(): boolean
        set ignore_occlusion_culling(value: boolean)
        
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).  
         *      
         *  **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].  
         */
        get gi_mode(): int64
        set gi_mode(value: int64)
        
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes. */
        get gi_lightmap_scale(): int64
        set gi_lightmap_scale(value: int64)
        
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibility_range_begin(): float64
        set visibility_range_begin(value: float64)
        
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibility_range_begin_margin(): float64
        set visibility_range_begin_margin(value: float64)
        
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibility_range_end(): float64
        set visibility_range_end(value: float64)
        
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibility_range_end_margin(): float64
        set visibility_range_end_margin(value: float64)
        
        /** Controls which instances will be faded when approaching the limits of the visibility range. See [enum VisibilityRangeFadeMode] for possible values. */
        get visibility_range_fade_mode(): int64
        set visibility_range_fade_mode(value: int64)
    }
    class Gizmo3DHelper extends RefCounted {
        constructor(identifier?: any)
    }
    class GodotNavigationServer2D extends NavigationServer2D {
        constructor(identifier?: any)
    }
    class GodotPhysicsDirectSpaceState2D extends PhysicsDirectSpaceState2D {
        constructor(identifier?: any)
    }
    class GodotPhysicsServer2D extends PhysicsServer2D {
        constructor(identifier?: any)
    }
    class GodotPhysicsServer3D extends PhysicsServer3D {
        constructor(identifier?: any)
    }
    class GotoLineDialog extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    namespace Gradient {
        enum InterpolationMode {
            /** Linear interpolation. */
            GRADIENT_INTERPOLATE_LINEAR = 0,
            
            /** Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases. */
            GRADIENT_INTERPOLATE_CONSTANT = 1,
            
            /** Cubic interpolation. */
            GRADIENT_INTERPOLATE_CUBIC = 2,
        }
        enum ColorSpace {
            /** sRGB color space. */
            GRADIENT_COLOR_SPACE_SRGB = 0,
            
            /** Linear sRGB color space. */
            GRADIENT_COLOR_SPACE_LINEAR_SRGB = 1,
            
            /** [url=https://bottosson.github.io/posts/oklab/]Oklab[/url] color space. This color space provides a smooth and uniform-looking transition between colors. */
            GRADIENT_COLOR_SPACE_OKLAB = 2,
        }
    }
    /** A color transition.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradient.html  
     */
    class Gradient extends Resource {
        constructor(identifier?: any)
        /** Adds the specified color to the gradient, with the specified offset. */
        add_point(offset: float64, color: Color): void
        
        /** Removes the color at index [param point]. */
        remove_point(point: int64): void
        
        /** Sets the offset for the gradient color at index [param point]. */
        set_offset(point: int64, offset: float64): void
        
        /** Returns the offset of the gradient color at index [param point]. */
        get_offset(point: int64): float64
        
        /** Reverses/mirrors the gradient.  
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        reverse(): void
        
        /** Sets the color of the gradient color at index [param point]. */
        set_color(point: int64, color: Color): void
        
        /** Returns the color of the gradient color at index [param point]. */
        get_color(point: int64): Color
        
        /** Returns the interpolated color specified by [param offset]. */
        sample(offset: float64): Color
        
        /** Returns the number of colors in the gradient. */
        get_point_count(): int64
        set_offsets(offsets: PackedFloat32Array): void
        get_offsets(): PackedFloat32Array
        set_colors(colors: PackedColorArray): void
        get_colors(): PackedColorArray
        set_interpolation_mode(interpolation_mode: Gradient.InterpolationMode): void
        get_interpolation_mode(): Gradient.InterpolationMode
        set_interpolation_color_space(interpolation_color_space: Gradient.ColorSpace): void
        get_interpolation_color_space(): Gradient.ColorSpace
        
        /** The algorithm used to interpolate between points of the gradient. See [enum InterpolationMode] for available modes. */
        get interpolation_mode(): int64
        set interpolation_mode(value: int64)
        
        /** The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [enum ColorSpace] for available modes.  
         *      
         *  **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        get interpolation_color_space(): int64
        set interpolation_color_space(value: int64)
        
        /** Gradient's offsets returned as a [PackedFloat32Array].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_offset] method (for updating offsets individually) or assign to this property directly (for bulk-updating all offsets at once).  
         */
        get offsets(): PackedFloat32Array
        set offsets(value: PackedFloat32Array)
        
        /** Gradient's colors returned as a [PackedColorArray].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_color] method (for updating colors individually) or assign to this property directly (for bulk-updating all colors at once).  
         */
        get colors(): PackedColorArray
        set colors(value: PackedColorArray)
    }
    class GradientEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A 1D texture that uses colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradienttexture1d.html  
     */
    class GradientTexture1D extends Texture2D {
        constructor(identifier?: any)
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: int64): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
        
        /** The [Gradient] used to fill the texture. */
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The number of color samples that will be obtained from the [Gradient]. */
        get width(): int64
        set width(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get use_hdr(): boolean
        set use_hdr(value: boolean)
    }
    namespace GradientTexture2D {
        enum Fill {
            /** The colors are linearly interpolated in a straight line. */
            FILL_LINEAR = 0,
            
            /** The colors are linearly interpolated in a circular pattern. */
            FILL_RADIAL = 1,
            
            /** The colors are linearly interpolated in a square pattern. */
            FILL_SQUARE = 2,
        }
        enum Repeat {
            /** The gradient fill is restricted to the range defined by [member fill_from] to [member fill_to] offsets. */
            REPEAT_NONE = 0,
            
            /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, repeating the same pattern in both directions. */
            REPEAT = 1,
            
            /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, mirroring the pattern in both directions. */
            REPEAT_MIRROR = 2,
        }
    }
    /** A 2D texture that creates a pattern with colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradienttexture2d.html  
     */
    class GradientTexture2D extends Texture2D {
        constructor(identifier?: any)
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: int64): void
        set_height(height: int64): void
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
        
        /** The [Gradient] used to fill the texture. */
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        get width(): int64
        set width(value: int64)
        
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        get height(): int64
        set height(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get use_hdr(): boolean
        set use_hdr(value: boolean)
        
        /** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
        get fill(): int64
        set fill(value: int64)
        
        /** The initial offset used to fill the texture specified in UV coordinates. */
        get fill_from(): Vector2
        set fill_from(value: Vector2)
        
        /** The final offset used to fill the texture specified in UV coordinates. */
        get fill_to(): Vector2
        set fill_to(value: Vector2)
        
        /** The gradient repeat type, one of the [enum Repeat] values. The texture is filled starting from [member fill_from] to [member fill_to] offsets by default, but the gradient fill can be repeated to cover the entire texture. */
        get repeat(): int64
        set repeat(value: int64)
    }
    class GradientTexture2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace GraphEdit {
        enum PanningScheme {
            /** [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view. */
            SCROLL_ZOOMS = 0,
            
            /** [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom. */
            SCROLL_PANS = 1,
        }
    }
    /** An editor for graph-like structures, using [GraphNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_graphedit.html  
     */
    class GraphEdit extends Control {
        constructor(identifier?: any)
        /** Returns whether the [param mouse_position] is in the input hot zone.  
         *  By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_input_hotzone(in_node: Object, in_port: int64, mouse_position: Vector2): boolean
        
        /** Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_output_hotzone(in_node: Object, in_port: int64, mouse_position: Vector2): boolean
        
        /** Virtual method which can be overridden to customize how connections are drawn. */
        /* gdvirtual */ _get_connection_line(from_position: Vector2, to_position: Vector2): PackedVector2Array
        
        /** This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.  
         *  Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.  
         *  In this example a connection to same node is suppressed:  
         *    
         */
        /* gdvirtual */ _is_node_hover_valid(from_node: StringName, from_port: int64, to_node: StringName, to_port: int64): boolean
        
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created. */
        connect_node(from_node: StringName, from_port: int64, to_node: StringName, to_port: int64): Error
        
        /** Returns `true` if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        is_node_connected(from_node: StringName, from_port: int64, to_node: StringName, to_port: int64): boolean
        
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnect_node(from_node: StringName, from_port: int64, to_node: StringName, to_port: int64): void
        
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        set_connection_activity(from_node: StringName, from_port: int64, to_node: StringName, to_port: int64, amount: float64): void
        
        /** Returns an Array containing the list of connections. A connection consists in a structure of the form `{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }`. */
        get_connection_list(): Array
        
        /** Removes all connections between nodes. */
        clear_connections(): void
        
        /** Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.  
         *  This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.  
         *      
         *  **Note:** This method suppresses any other connection request signals apart from [signal connection_drag_ended].  
         */
        force_connection_drag_end(): void
        get_scroll_offset(): Vector2
        set_scroll_offset(offset: Vector2): void
        
        /** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
        add_valid_right_disconnect_type(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
        remove_valid_right_disconnect_type(type: int64): void
        
        /** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
        add_valid_left_disconnect_type(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
        remove_valid_left_disconnect_type(type: int64): void
        
        /** Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type] and [method remove_valid_connection_type].  
         */
        add_valid_connection_type(from_type: int64, to_type: int64): void
        
        /** Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type].  
         */
        remove_valid_connection_type(from_type: int64, to_type: int64): void
        
        /** Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method add_valid_connection_type] and [method remove_valid_connection_type].  
         */
        is_valid_connection_type(from_type: int64, to_type: int64): boolean
        
        /** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
        get_connection_line(from_node: Vector2, to_node: Vector2): PackedVector2Array
        set_panning_scheme(scheme: GraphEdit.PanningScheme): void
        get_panning_scheme(): GraphEdit.PanningScheme
        set_zoom(zoom: float64): void
        get_zoom(): float64
        set_zoom_min(zoom_min: float64): void
        get_zoom_min(): float64
        set_zoom_max(zoom_max: float64): void
        get_zoom_max(): float64
        set_zoom_step(zoom_step: float64): void
        get_zoom_step(): float64
        set_show_grid(enable: boolean): void
        is_showing_grid(): boolean
        set_snapping_enabled(enable: boolean): void
        is_snapping_enabled(): boolean
        set_snapping_distance(pixels: int64): void
        get_snapping_distance(): int64
        set_connection_lines_curvature(curvature: float64): void
        get_connection_lines_curvature(): float64
        set_connection_lines_thickness(pixels: float64): void
        get_connection_lines_thickness(): float64
        set_connection_lines_antialiased(pixels: boolean): void
        is_connection_lines_antialiased(): boolean
        set_minimap_size(size: Vector2): void
        get_minimap_size(): Vector2
        set_minimap_opacity(opacity: float64): void
        get_minimap_opacity(): float64
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
        
        /** Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_menu_hbox(): HBoxContainer
        
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrange_nodes(): void
        
        /** Sets the specified [param node] as the one selected. */
        set_selected(node: Node): void
        
        /** The scroll offset. */
        get scroll_offset(): Vector2
        set scroll_offset(value: Vector2)
        
        /** If `true`, the grid is visible. */
        get show_grid(): boolean
        set show_grid(value: boolean)
        
        /** If `true`, enables snapping. */
        get snapping_enabled(): boolean
        set snapping_enabled(value: boolean)
        
        /** The snapping distance in pixels, also determines the grid line distance. */
        get snapping_distance(): int64
        set snapping_distance(value: int64)
        
        /** Defines the control scheme for panning with mouse wheel. */
        get panning_scheme(): int64
        set panning_scheme(value: int64)
        
        /** If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        get right_disconnects(): boolean
        set right_disconnects(value: boolean)
        
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        get connection_lines_curvature(): float64
        set connection_lines_curvature(value: float64)
        
        /** The thickness of the lines between the nodes. */
        get connection_lines_thickness(): float64
        set connection_lines_thickness(value: float64)
        
        /** If `true`, the lines between nodes will use antialiasing. */
        get connection_lines_antialiased(): boolean
        set connection_lines_antialiased(value: boolean)
        
        /** The current zoom value. */
        get zoom(): float64
        set zoom(value: float64)
        
        /** The lower zoom limit. */
        get zoom_min(): float64
        set zoom_min(value: float64)
        
        /** The upper zoom limit. */
        get zoom_max(): float64
        set zoom_max(value: float64)
        
        /** The step of each zoom level. */
        get zoom_step(): float64
        set zoom_step(value: float64)
        
        /** If `true`, the minimap is visible. */
        get minimap_enabled(): boolean
        set minimap_enabled(value: boolean)
        
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        get minimap_size(): Vector2
        set minimap_size(value: Vector2)
        
        /** The opacity of the minimap rectangle. */
        get minimap_opacity(): float64
        set minimap_opacity(value: float64)
        
        /** If `true`, the menu toolbar is visible. */
        get show_menu(): boolean
        set show_menu(value: boolean)
        
        /** If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents. */
        get show_zoom_label(): boolean
        set show_zoom_label(value: boolean)
        
        /** If `true`, buttons that allow to change and reset the zoom level are visible. */
        get show_zoom_buttons(): boolean
        set show_zoom_buttons(value: boolean)
        
        /** If `true`, buttons that allow to configure grid and snapping options are visible. */
        get show_grid_buttons(): boolean
        set show_grid_buttons(value: boolean)
        
        /** If `true`, the button to toggle the minimap is visible. */
        get show_minimap_button(): boolean
        set show_minimap_button(value: boolean)
        
        /** If `true`, the button to automatically arrange graph nodes is visible. */
        get show_arrange_button(): boolean
        set show_arrange_button(value: boolean)
        
        /** Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created. */
        readonly connection_request: Signal // from_node: StringName, from_port: int64, to_node: StringName, to_port: int64 => void
        
        /** Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed. */
        readonly disconnection_request: Signal // from_node: StringName, from_port: int64, to_node: StringName, to_port: int64 => void
        
        /** Emitted when user drags a connection from an output port into the empty space of the graph. */
        readonly connection_to_empty: Signal // from_node: StringName, from_port: int64, release_position: Vector2 => void
        
        /** Emitted when user drags a connection from an input port into the empty space of the graph. */
        readonly connection_from_empty: Signal // to_node: StringName, to_port: int64, release_position: Vector2 => void
        
        /** Emitted at the beginning of a connection drag. */
        readonly connection_drag_started: Signal // from_node: StringName, from_port: int64, is_output: boolean => void
        
        /** Emitted at the end of a connection drag. */
        readonly connection_drag_ended: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_copy` action ([kbd]Ctrl + C[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be copied. */
        readonly copy_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_paste` action ([kbd]Ctrl + V[/kbd] by default). In general, this signal indicates that previously copied [GraphElement]s should be pasted. */
        readonly paste_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_duplicate` action ([kbd]Ctrl + D[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be duplicated. */
        readonly duplicate_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_delete` action ([kbd]Delete[/kbd] by default).  
         *  [param nodes] is an array of node names that should be removed. These usually include all selected nodes.  
         */
        readonly delete_nodes_request: Signal // nodes: Array => void
        
        /** Emitted when the given [GraphElement] node is selected. */
        readonly node_selected: Signal // node: Node => void
        
        /** Emitted when the given [GraphElement] node is deselected. */
        readonly node_deselected: Signal // node: Node => void
        
        /** Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. [param position] is the position of the mouse pointer when the signal is sent. */
        readonly popup_request: Signal // position: Vector2 => void
        
        /** Emitted at the beginning of a [GraphElement]'s movement. */
        readonly begin_node_move: Signal //  => void
        
        /** Emitted at the end of a [GraphElement]'s movement. */
        readonly end_node_move: Signal //  => void
        
        /** Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code. */
        readonly scroll_offset_changed: Signal // offset: Vector2 => void
    }
    class GraphEditFilter extends Control {
        constructor(identifier?: any)
    }
    class GraphEditMinimap extends Control {
        constructor(identifier?: any)
    }
    /** A container that represents a basic element that can be placed inside a [GraphEdit] control.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_graphelement.html  
     */
    class GraphElement extends Container {
        constructor(identifier?: any)
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
        
        /** The offset of the GraphElement, relative to the scroll offset of the [GraphEdit]. */
        get position_offset(): Vector2
        set position_offset(value: Vector2)
        
        /** If `true`, the user can resize the GraphElement.  
         *      
         *  **Note:** Dragging the handle will only emit the [signal resize_request] signal, the GraphElement needs to be resized manually.  
         */
        get resizable(): boolean
        set resizable(value: boolean)
        
        /** If `true`, the user can drag the GraphElement. */
        get draggable(): boolean
        set draggable(value: boolean)
        
        /** If `true`, the user can select the GraphElement. */
        get selectable(): boolean
        set selectable(value: boolean)
        
        /** If `true`, the GraphElement is selected. */
        get selected(): boolean
        set selected(value: boolean)
        
        /** Emitted when the GraphElement is selected. */
        readonly node_selected: Signal //  => void
        
        /** Emitted when the GraphElement is deselected. */
        readonly node_deselected: Signal //  => void
        
        /** Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement. */
        readonly raise_request: Signal //  => void
        
        /** Emitted when removing the GraphElement is requested. */
        readonly delete_request: Signal //  => void
        
        /** Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see [member resizable]). */
        readonly resize_request: Signal // new_minsize: Vector2 => void
        
        /** Emitted when the GraphElement is dragged. */
        readonly dragged: Signal // from: Vector2, to: Vector2 => void
        
        /** Emitted when the GraphElement is moved. */
        readonly position_offset_changed: Signal //  => void
    }
    /** A container with connection ports, representing a node in a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_graphnode.html  
     */
    class GraphNode extends GraphElement {
        constructor(identifier?: any)
        /* gdvirtual */ _draw_port(slot_index: int64, position: Vector2i, left: boolean, color: Color): void
        set_title(title: string): void
        get_title(): string
        
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons. */
        get_titlebar_hbox(): HBoxContainer
        
        /** Sets properties of the slot with the given [param slot_index].  
         *  If [param enable_left_port]/[param enable_right_port] is `true`, a port will appear and the slot will be able to be connected from this side.  
         *  With [param type_left]/[param type_right] an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent [GraphEdit] (see [method GraphEdit.add_valid_connection_type]). Keep in mind that the [GraphEdit] has the final say in accepting the connection. Type compatibility simply allows the [signal GraphEdit.connection_request] signal to be emitted.  
         *  Ports can be further customized using [param color_left]/[param color_right] and [param custom_icon_left]/[param custom_icon_right]. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.  
         *  Additionally, [param draw_stylebox] can be used to enable or disable drawing of the background stylebox for each slot. See [theme_item slot].  
         *  Individual properties can also be set using one of the `set_slot_*` methods.  
         *      
         *  **Note:** This method only sets properties of the slot. To create the slot itself, add a [Control]-derived child to the GraphNode.  
         */
        set_slot(slot_index: int64, enable_left_port: boolean, type_left: int64, color_left: Color, enable_right_port: boolean, type_right: int64, color_right: Color, custom_icon_left: Texture2D = <any> {} /*compound.type from nil*/, custom_icon_right: Texture2D = <any> {} /*compound.type from nil*/, draw_stylebox: boolean = true): void
        
        /** Disables the slot with the given [param slot_index]. This will remove the corresponding input and output port from the GraphNode. */
        clear_slot(slot_index: int64): void
        
        /** Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode. */
        clear_all_slots(): void
        
        /** Returns `true` if left (input) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_left(slot_index: int64): boolean
        
        /** Toggles the left (input) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the left side and the slot will be able to be connected from this side. */
        set_slot_enabled_left(slot_index: int64, enable: boolean): void
        
        /** Sets the left (input) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        set_slot_type_left(slot_index: int64, type: int64): void
        
        /** Returns the left (input) type of the slot with the given [param slot_index]. */
        get_slot_type_left(slot_index: int64): int64
        
        /** Sets the [Color] of the left (input) side of the slot with the given [param slot_index] to [param color]. */
        set_slot_color_left(slot_index: int64, color: Color): void
        
        /** Returns the left (input) [Color] of the slot with the given [param slot_index]. */
        get_slot_color_left(slot_index: int64): Color
        
        /** Returns `true` if right (output) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_right(slot_index: int64): boolean
        
        /** Toggles the right (output) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the right side and the slot will be able to be connected from this side. */
        set_slot_enabled_right(slot_index: int64, enable: boolean): void
        
        /** Sets the right (output) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        set_slot_type_right(slot_index: int64, type: int64): void
        
        /** Returns the right (output) type of the slot with the given [param slot_index]. */
        get_slot_type_right(slot_index: int64): int64
        
        /** Sets the [Color] of the right (output) side of the slot with the given [param slot_index] to [param color]. */
        set_slot_color_right(slot_index: int64, color: Color): void
        
        /** Returns the right (output) [Color] of the slot with the given [param slot_index]. */
        get_slot_color_right(slot_index: int64): Color
        
        /** Returns true if the background [StyleBox] of the slot with the given [param slot_index] is drawn. */
        is_slot_draw_stylebox(slot_index: int64): boolean
        
        /** Toggles the background [StyleBox] of the slot with the given [param slot_index]. */
        set_slot_draw_stylebox(slot_index: int64, enable: boolean): void
        
        /** Returns the number of slots with an enabled input port. */
        get_input_port_count(): int64
        
        /** Returns the position of the input port with the given [param port_idx]. */
        get_input_port_position(port_idx: int64): Vector2
        
        /** Returns the type of the input port with the given [param port_idx]. */
        get_input_port_type(port_idx: int64): int64
        
        /** Returns the [Color] of the input port with the given [param port_idx]. */
        get_input_port_color(port_idx: int64): Color
        
        /** Returns the corresponding slot index of the input port with the given [param port_idx]. */
        get_input_port_slot(port_idx: int64): int64
        
        /** Returns the number of slots with an enabled output port. */
        get_output_port_count(): int64
        
        /** Returns the position of the output port with the given [param port_idx]. */
        get_output_port_position(port_idx: int64): Vector2
        
        /** Returns the type of the output port with the given [param port_idx]. */
        get_output_port_type(port_idx: int64): int64
        
        /** Returns the [Color] of the output port with the given [param port_idx]. */
        get_output_port_color(port_idx: int64): Color
        
        /** Returns the corresponding slot index of the output port with the given [param port_idx]. */
        get_output_port_slot(port_idx: int64): int64
        
        /** The text displayed in the GraphNode's title bar. */
        get title(): string
        set title(value: string)
        
        /** Emitted when any GraphNode's slot is updated. */
        readonly slot_updated: Signal // slot_index: int64 => void
    }
    /** A container that arranges its child controls in a grid layout.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gridcontainer.html  
     */
    class GridContainer extends Container {
        constructor(identifier?: any)
        set_columns(columns: int64): void
        get_columns(): int64
        
        /** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
        get columns(): int64
        set columns(value: int64)
    }
    /** Node for 3D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gridmap.html  
     */
    class GridMap extends Node3D {
        /** Invalid cell item that can be used in [method set_cell_item] to clear cells (or represent an empty cell in [method get_cell_item]). */
        static readonly INVALID_CELL_ITEM = -1
        constructor(identifier?: any)
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
        set_physics_material(material: PhysicsMaterial): void
        get_physics_material(): PhysicsMaterial
        set_bake_navigation(bake_navigation: boolean): void
        is_baking_navigation(): boolean
        
        /** Sets the [RID] of the navigation map this GridMap node should use for its cell baked navigation meshes. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map this GridMap node uses for its cell baked navigation meshes.  
         *  This function returns always the map set on the GridMap node and not the map on the NavigationServer. If the map is changed directly with the NavigationServer API the GridMap node will not be aware of the map change.  
         */
        get_navigation_map(): RID
        set_mesh_library(mesh_library: MeshLibrary): void
        get_mesh_library(): MeshLibrary
        set_cell_size(size: Vector3): void
        get_cell_size(): Vector3
        set_cell_scale(scale: float64): void
        get_cell_scale(): float64
        set_octant_size(size: int64): void
        get_octant_size(): int64
        
        /** Sets the mesh index for the cell referenced by its grid coordinates.  
         *  A negative item index such as [constant INVALID_CELL_ITEM] will clear the cell.  
         *  Optionally, the item's orientation can be passed. For valid orientation values, see [method get_orthogonal_index_from_basis].  
         */
        set_cell_item(position: Vector3i, item: int64, orientation: int64 = 0): void
        
        /** The [MeshLibrary] item index located at the given grid coordinates. If the cell is empty, [constant INVALID_CELL_ITEM] will be returned. */
        get_cell_item(position: Vector3i): int64
        
        /** The orientation of the cell at the given grid coordinates. `-1` is returned if the cell is empty. */
        get_cell_item_orientation(position: Vector3i): int64
        
        /** Returns the basis that gives the specified cell its orientation. */
        get_cell_item_basis(position: Vector3i): Basis
        
        /** Returns one of 24 possible rotations that lie along the vectors (x,y,z) with each component being either -1, 0, or 1. For further details, refer to the Godot source code. */
        get_basis_with_orthogonal_index(index: int64): Basis
        
        /** This function considers a discretization of rotations into 24 points on unit sphere, lying along the vectors (x,y,z) with each component being either -1, 0, or 1, and returns the index (in the range from 0 to 23) of the point best representing the orientation of the object. For further details, refer to the Godot source code. */
        get_orthogonal_index_from_basis(basis: Basis): int64
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node3D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector3): Vector3i
        
        /** Returns the position of a grid cell in the GridMap's local coordinate space. To convert the returned value into global coordinates, use [method Node3D.to_global]. See also [method map_to_local]. */
        map_to_local(map_position: Vector3i): Vector3
        _update_octants_callback(): void
        
        /**  *Obsoleted.*  Use [signal Resource.changed] instead. */
        resource_changed(resource: Resource): void
        set_center_x(enable: boolean): void
        get_center_x(): boolean
        set_center_y(enable: boolean): void
        get_center_y(): boolean
        set_center_z(enable: boolean): void
        get_center_z(): boolean
        
        /** Clear all cells. */
        clear(): void
        
        /** Returns an array of [Vector3] with the non-empty cell coordinates in the grid map. */
        get_used_cells(): Array
        
        /** Returns an array of all cells with the given item index specified in [param item]. */
        get_used_cells_by_item(item: int64): Array
        
        /** Returns an array of [Transform3D] and [Mesh] references corresponding to the non-empty cells in the grid. The transforms are specified in local space. */
        get_meshes(): Array
        
        /** Returns an array of [ArrayMesh]es and [Transform3D] references of all bake meshes that exist within the current GridMap. */
        get_bake_meshes(): Array
        
        /** Returns [RID] of a baked mesh with the given [param idx]. */
        get_bake_mesh_instance(idx: int64): RID
        
        /** Clears all baked meshes. See [method make_baked_meshes]. */
        clear_baked_meshes(): void
        
        /** Bakes lightmap data for all meshes in the assigned [MeshLibrary]. */
        make_baked_meshes(gen_lightmap_uv: boolean = false, lightmap_uv_texel_size: float64 = 0.1): void
        
        /** The assigned [MeshLibrary]. */
        get mesh_library(): MeshLibrary
        set mesh_library(value: MeshLibrary)
        
        /** Overrides the default friction and bounce physics properties for the whole [GridMap]. */
        get physics_material(): PhysicsMaterial
        set physics_material(value: PhysicsMaterial)
        
        /** The dimensions of the grid's cells.  
         *  This does not affect the size of the meshes. See [member cell_scale].  
         */
        get cell_size(): Vector3
        set cell_size(value: Vector3)
        
        /** The size of each octant measured in number of cells. This applies to all three axis. */
        get cell_octant_size(): int64
        set cell_octant_size(value: int64)
        
        /** If `true`, grid items are centered on the X axis. */
        get cell_center_x(): boolean
        set cell_center_x(value: boolean)
        
        /** If `true`, grid items are centered on the Y axis. */
        get cell_center_y(): boolean
        set cell_center_y(value: boolean)
        
        /** If `true`, grid items are centered on the Z axis. */
        get cell_center_z(): boolean
        set cell_center_z(value: boolean)
        
        /** The scale of the cell items.  
         *  This does not affect the size of the grid cells themselves, only the items in them. This can be used to make cell items overlap their neighbors.  
         */
        get cell_scale(): float64
        set cell_scale(value: float64)
        
        /** The physics layers this GridMap is in.  
         *  GridMaps act as static bodies, meaning they aren't affected by gravity or other forces. They only affect other physics bodies that collide with them.  
         */
        get collision_layer(): int64
        set collision_layer(value: int64)
        
        /** The physics layers this GridMap detects collisions in. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collision_mask(): int64
        set collision_mask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collision_priority(): float64
        set collision_priority(value: float64)
        
        /** If `true`, this GridMap creates a navigation region for each cell that uses a [member mesh_library] item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [MeshLibrary]'s item. */
        get bake_navigation(): boolean
        set bake_navigation(value: boolean)
        
        /** Emitted when [member cell_size] changes. */
        readonly cell_size_changed: Signal // cell_size: Vector3 => void
        
        /** Emitted when the [MeshLibrary] of this GridMap changes. */
        readonly changed: Signal //  => void
    }
    class GridMapEditor extends VBoxContainer {
        constructor(identifier?: any)
        _configure(): void
        _set_selection(_unnamed_arg0: boolean, _unnamed_arg1: Vector3, _unnamed_arg2: Vector3): void
    }
    class GridMapEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_groovejoint2d.html  
     */
    class GrooveJoint2D extends Joint2D {
        constructor(identifier?: any)
        set_length(length: float64): void
        get_length(): float64
        set_initial_offset(offset: float64): void
        get_initial_offset(): float64
        
        /** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
        get length(): float64
        set length(value: float64)
        
        /** The body B's initial anchor position defined by the joint's origin and a local offset [member initial_offset] along the joint's Y axis (along the groove). */
        get initial_offset(): float64
        set initial_offset(value: float64)
    }
    class GroupDialog extends AcceptDialog {
        constructor(identifier?: any)
        _delete_group_item(_unnamed_arg0: string): void
        _add_group(_unnamed_arg0: string): void
        _rename_group_item(_unnamed_arg0: string, _unnamed_arg1: string): void
        _group_selected(): void
        readonly group_edited: Signal //  => void
    }
    class GroupsEditor extends VBoxContainer {
        constructor(identifier?: any)
        update_tree(): void
        _group_selected(): void
    }
    /** A container that arranges its child controls horizontally.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hboxcontainer.html  
     */
    class HBoxContainer extends BoxContainer {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls horizontally and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hflowcontainer.html  
     */
    class HFlowContainer extends FlowContainer {
        constructor(identifier?: any)
    }
    /** Used to create an HMAC for a message using a key.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hmaccontext.html  
     */
    class HMACContext extends RefCounted {
        constructor(identifier?: any)
        /** Initializes the HMACContext. This method cannot be called again on the same HMACContext until [method finish] has been called. */
        start(hash_type: HashingContext.HashType, key: PackedByteArray): Error
        
        /** Updates the message to be HMACed. This can be called multiple times before [method finish] is called to append [param data] to the message, but cannot be called until [method start] has been called. */
        update(data: PackedByteArray): Error
        
        /** Returns the resulting HMAC. If the HMAC failed, an empty [PackedByteArray] is returned. */
        finish(): PackedByteArray
    }
    /** A horizontal scrollbar that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hscrollbar.html  
     */
    class HScrollBar extends ScrollBar {
        constructor(identifier?: any)
    }
    /** A horizontal line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hseparator.html  
     */
    class HSeparator extends Separator {
        constructor(identifier?: any)
    }
    /** A horizontal slider that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hslider.html  
     */
    class HSlider extends Slider {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls horizontally and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hsplitcontainer.html  
     */
    class HSplitContainer extends SplitContainer {
        constructor(identifier?: any)
    }
    namespace HTTPClient {
        enum Method {
            /** HTTP GET method. The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. */
            METHOD_GET = 0,
            
            /** HTTP HEAD method. The HEAD method asks for a response identical to that of a GET request, but without the response body. This is useful to request metadata like HTTP headers or to check if a resource exists. */
            METHOD_HEAD = 1,
            
            /** HTTP POST method. The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server. This is often used for forms and submitting data or uploading files. */
            METHOD_POST = 2,
            
            /** HTTP PUT method. The PUT method asks to replace all current representations of the target resource with the request payload. (You can think of POST as "create or update" and PUT as "update", although many services tend to not make a clear distinction or change their meaning). */
            METHOD_PUT = 3,
            
            /** HTTP DELETE method. The DELETE method requests to delete the specified resource. */
            METHOD_DELETE = 4,
            
            /** HTTP OPTIONS method. The OPTIONS method asks for a description of the communication options for the target resource. Rarely used. */
            METHOD_OPTIONS = 5,
            
            /** HTTP TRACE method. The TRACE method performs a message loop-back test along the path to the target resource. Returns the entire HTTP request received in the response body. Rarely used. */
            METHOD_TRACE = 6,
            
            /** HTTP CONNECT method. The CONNECT method establishes a tunnel to the server identified by the target resource. Rarely used. */
            METHOD_CONNECT = 7,
            
            /** HTTP PATCH method. The PATCH method is used to apply partial modifications to a resource. */
            METHOD_PATCH = 8,
            
            /** Represents the size of the [enum Method] enum. */
            METHOD_MAX = 9,
        }
        enum Status {
            /** Status: Disconnected from the server. */
            STATUS_DISCONNECTED = 0,
            
            /** Status: Currently resolving the hostname for the given URL into an IP. */
            STATUS_RESOLVING = 1,
            
            /** Status: DNS failure: Can't resolve the hostname for the given URL. */
            STATUS_CANT_RESOLVE = 2,
            
            /** Status: Currently connecting to server. */
            STATUS_CONNECTING = 3,
            
            /** Status: Can't connect to the server. */
            STATUS_CANT_CONNECT = 4,
            
            /** Status: Connection established. */
            STATUS_CONNECTED = 5,
            
            /** Status: Currently sending request. */
            STATUS_REQUESTING = 6,
            
            /** Status: HTTP body received. */
            STATUS_BODY = 7,
            
            /** Status: Error in HTTP connection. */
            STATUS_CONNECTION_ERROR = 8,
            
            /** Status: Error in TLS handshake. */
            STATUS_TLS_HANDSHAKE_ERROR = 9,
        }
        enum ResponseCode {
            /** HTTP status code `100 Continue`. Interim response that indicates everything so far is OK and that the client should continue with the request (or ignore this status if already finished). */
            RESPONSE_CONTINUE = 100,
            
            /** HTTP status code `101 Switching Protocol`. Sent in response to an `Upgrade` request header by the client. Indicates the protocol the server is switching to. */
            RESPONSE_SWITCHING_PROTOCOLS = 101,
            
            /** HTTP status code `102 Processing` (WebDAV). Indicates that the server has received and is processing the request, but no response is available yet. */
            RESPONSE_PROCESSING = 102,
            
            /** HTTP status code `200 OK`. The request has succeeded. Default response for successful requests. Meaning varies depending on the request. GET: The resource has been fetched and is transmitted in the message body. HEAD: The entity headers are in the message body. POST: The resource describing the result of the action is transmitted in the message body. TRACE: The message body contains the request message as received by the server. */
            RESPONSE_OK = 200,
            
            /** HTTP status code `201 Created`. The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request. */
            RESPONSE_CREATED = 201,
            
            /** HTTP status code `202 Accepted`. The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing. */
            RESPONSE_ACCEPTED = 202,
            
            /** HTTP status code `203 Non-Authoritative Information`. This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response. */
            RESPONSE_NON_AUTHORITATIVE_INFORMATION = 203,
            
            /** HTTP status code `204 No Content`. There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones. */
            RESPONSE_NO_CONTENT = 204,
            
            /** HTTP status code `205 Reset Content`. The server has fulfilled the request and desires that the client resets the "document view" that caused the request to be sent to its original state as received from the origin server. */
            RESPONSE_RESET_CONTENT = 205,
            
            /** HTTP status code `206 Partial Content`. This response code is used because of a range header sent by the client to separate download into multiple streams. */
            RESPONSE_PARTIAL_CONTENT = 206,
            
            /** HTTP status code `207 Multi-Status` (WebDAV). A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate. */
            RESPONSE_MULTI_STATUS = 207,
            
            /** HTTP status code `208 Already Reported` (WebDAV). Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly. */
            RESPONSE_ALREADY_REPORTED = 208,
            
            /** HTTP status code `226 IM Used` (WebDAV). The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
            RESPONSE_IM_USED = 226,
            
            /** HTTP status code `300 Multiple Choice`. The request has more than one possible responses and there is no standardized way to choose one of the responses. User-agent or user should choose one of them. */
            RESPONSE_MULTIPLE_CHOICES = 300,
            
            /** HTTP status code `301 Moved Permanently`. Redirection. This response code means the URI of requested resource has been changed. The new URI is usually included in the response. */
            RESPONSE_MOVED_PERMANENTLY = 301,
            
            /** HTTP status code `302 Found`. Temporary redirection. This response code means the URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests. */
            RESPONSE_FOUND = 302,
            
            /** HTTP status code `303 See Other`. The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request. */
            RESPONSE_SEE_OTHER = 303,
            
            /** HTTP status code `304 Not Modified`. A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to `false`. */
            RESPONSE_NOT_MODIFIED = 304,
            
            /**  *Deprecated.*  HTTP status code `305 Use Proxy`. */
            RESPONSE_USE_PROXY = 305,
            
            /**  *Deprecated.*  HTTP status code `306 Switch Proxy`. */
            RESPONSE_SWITCH_PROXY = 306,
            
            /** HTTP status code `307 Temporary Redirect`. The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI. */
            RESPONSE_TEMPORARY_REDIRECT = 307,
            
            /** HTTP status code `308 Permanent Redirect`. The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs. */
            RESPONSE_PERMANENT_REDIRECT = 308,
            
            /** HTTP status code `400 Bad Request`. The request was invalid. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, invalid request contents, or deceptive request routing). */
            RESPONSE_BAD_REQUEST = 400,
            
            /** HTTP status code `401 Unauthorized`. Credentials required. The request has not been applied because it lacks valid authentication credentials for the target resource. */
            RESPONSE_UNAUTHORIZED = 401,
            
            /** HTTP status code `402 Payment Required`. This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems, however this is not currently used. */
            RESPONSE_PAYMENT_REQUIRED = 402,
            
            /** HTTP status code `403 Forbidden`. The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike `401`, the client's identity is known to the server. */
            RESPONSE_FORBIDDEN = 403,
            
            /** HTTP status code `404 Not Found`. The server can not find requested resource. Either the URL is not recognized or the endpoint is valid but the resource itself does not exist. May also be sent instead of 403 to hide existence of a resource if the client is not authorized. */
            RESPONSE_NOT_FOUND = 404,
            
            /** HTTP status code `405 Method Not Allowed`. The request's HTTP method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code. */
            RESPONSE_METHOD_NOT_ALLOWED = 405,
            
            /** HTTP status code `406 Not Acceptable`. The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request. Used when negotiation content. */
            RESPONSE_NOT_ACCEPTABLE = 406,
            
            /** HTTP status code `407 Proxy Authentication Required`. Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy. */
            RESPONSE_PROXY_AUTHENTICATION_REQUIRED = 407,
            
            /** HTTP status code `408 Request Timeout`. The server did not receive a complete request message within the time that it was prepared to wait. */
            RESPONSE_REQUEST_TIMEOUT = 408,
            
            /** HTTP status code `409 Conflict`. The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request. */
            RESPONSE_CONFLICT = 409,
            
            /** HTTP status code `410 Gone`. The target resource is no longer available at the origin server and this condition is likely permanent. */
            RESPONSE_GONE = 410,
            
            /** HTTP status code `411 Length Required`. The server refuses to accept the request without a defined Content-Length header. */
            RESPONSE_LENGTH_REQUIRED = 411,
            
            /** HTTP status code `412 Precondition Failed`. One or more conditions given in the request header fields evaluated to `false` when tested on the server. */
            RESPONSE_PRECONDITION_FAILED = 412,
            
            /** HTTP status code `413 Entity Too Large`. The server is refusing to process a request because the request payload is larger than the server is willing or able to process. */
            RESPONSE_REQUEST_ENTITY_TOO_LARGE = 413,
            
            /** HTTP status code `414 Request-URI Too Long`. The server is refusing to service the request because the request-target is longer than the server is willing to interpret. */
            RESPONSE_REQUEST_URI_TOO_LONG = 414,
            
            /** HTTP status code `415 Unsupported Media Type`. The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource. */
            RESPONSE_UNSUPPORTED_MEDIA_TYPE = 415,
            
            /** HTTP status code `416 Requested Range Not Satisfiable`. None of the ranges in the request's Range header field overlap the current extent of the selected resource or the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges. */
            RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
            
            /** HTTP status code `417 Expectation Failed`. The expectation given in the request's Expect header field could not be met by at least one of the inbound servers. */
            RESPONSE_EXPECTATION_FAILED = 417,
            
            /** HTTP status code `418 I'm A Teapot`. Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. */
            RESPONSE_IM_A_TEAPOT = 418,
            
            /** HTTP status code `421 Misdirected Request`. The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI. */
            RESPONSE_MISDIRECTED_REQUEST = 421,
            
            /** HTTP status code `422 Unprocessable Entity` (WebDAV). The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions. */
            RESPONSE_UNPROCESSABLE_ENTITY = 422,
            
            /** HTTP status code `423 Locked` (WebDAV). The source or destination resource of a method is locked. */
            RESPONSE_LOCKED = 423,
            
            /** HTTP status code `424 Failed Dependency` (WebDAV). The method could not be performed on the resource because the requested action depended on another action and that action failed. */
            RESPONSE_FAILED_DEPENDENCY = 424,
            
            /** HTTP status code `426 Upgrade Required`. The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. */
            RESPONSE_UPGRADE_REQUIRED = 426,
            
            /** HTTP status code `428 Precondition Required`. The origin server requires the request to be conditional. */
            RESPONSE_PRECONDITION_REQUIRED = 428,
            
            /** HTTP status code `429 Too Many Requests`. The user has sent too many requests in a given amount of time (see "rate limiting"). Back off and increase time between requests or try again later. */
            RESPONSE_TOO_MANY_REQUESTS = 429,
            
            /** HTTP status code `431 Request Header Fields Too Large`. The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields. */
            RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
            
            /** HTTP status code `451 Response Unavailable For Legal Reasons`. The server is denying access to the resource as a consequence of a legal demand. */
            RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS = 451,
            
            /** HTTP status code `500 Internal Server Error`. The server encountered an unexpected condition that prevented it from fulfilling the request. */
            RESPONSE_INTERNAL_SERVER_ERROR = 500,
            
            /** HTTP status code `501 Not Implemented`. The server does not support the functionality required to fulfill the request. */
            RESPONSE_NOT_IMPLEMENTED = 501,
            
            /** HTTP status code `502 Bad Gateway`. The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request. Usually returned by load balancers or proxies. */
            RESPONSE_BAD_GATEWAY = 502,
            
            /** HTTP status code `503 Service Unavailable`. The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. Try again later. */
            RESPONSE_SERVICE_UNAVAILABLE = 503,
            
            /** HTTP status code `504 Gateway Timeout`. The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request. Usually returned by load balancers or proxies. */
            RESPONSE_GATEWAY_TIMEOUT = 504,
            
            /** HTTP status code `505 HTTP Version Not Supported`. The server does not support, or refuses to support, the major version of HTTP that was used in the request message. */
            RESPONSE_HTTP_VERSION_NOT_SUPPORTED = 505,
            
            /** HTTP status code `506 Variant Also Negotiates`. The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process. */
            RESPONSE_VARIANT_ALSO_NEGOTIATES = 506,
            
            /** HTTP status code `507 Insufficient Storage`. The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. */
            RESPONSE_INSUFFICIENT_STORAGE = 507,
            
            /** HTTP status code `508 Loop Detected`. The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed. */
            RESPONSE_LOOP_DETECTED = 508,
            
            /** HTTP status code `510 Not Extended`. The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request. */
            RESPONSE_NOT_EXTENDED = 510,
            
            /** HTTP status code `511 Network Authentication Required`. The client needs to authenticate to gain network access. */
            RESPONSE_NETWORK_AUTH_REQUIRED = 511,
        }
    }
    /** Low-level hyper-text transfer protocol client.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_httpclient.html  
     */
    class HTTPClient extends RefCounted {
        constructor(identifier?: any)
        /** Connects to a host. This needs to be done before any requests are sent.  
         *  If no [param port] is specified (or `-1` is used), it is automatically set to 80 for HTTP and 443 for HTTPS. You can pass the optional [param tls_options] parameter to customize the trusted certification authorities, or the common name verification when using HTTPS. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         */
        connect_to_host(host: string, port: int64 = -1, tls_options: TLSOptions = <any> {} /*compound.type from nil*/): Error
        set_connection(connection: StreamPeer): void
        get_connection(): StreamPeer
        
        /** Sends a raw request to the connected host.  
         *  The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).  
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].  
         *  Sends the body data raw, as a byte array and does not encode it in any way.  
         */
        request_raw(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: PackedByteArray): Error
        
        /** Sends a request to the connected host.  
         *  The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).  
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].  
         *  To create a POST request with query strings to push to the server, do:  
         *    
         *      
         *  **Note:** The [param body] parameter is ignored if [param method] is [constant HTTPClient.METHOD_GET]. This is because GET methods can't contain request data. As a workaround, you can pass request data as a query string in the URL. See [method String.uri_encode] for an example.  
         */
        request(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: string = ''): Error
        
        /** Closes the current connection, allowing reuse of this [HTTPClient]. */
        close(): void
        
        /** If `true`, this [HTTPClient] has a response available. */
        has_response(): boolean
        
        /** If `true`, this [HTTPClient] has a response that is chunked. */
        is_response_chunked(): boolean
        
        /** Returns the response's HTTP status code. */
        get_response_code(): int64
        
        /** Returns the response headers. */
        get_response_headers(): PackedStringArray
        
        /** Returns all response headers as a Dictionary of structure `{ "key": "value1; value2" }` where the case-sensitivity of the keys and values is kept like the server delivers it. A value is a simple String, this string can have more than one value where "; " is used as separator.  
         *  **Example:**  
         *    
         */
        get_response_headers_as_dictionary(): Dictionary
        
        /** Returns the response's body length.  
         *      
         *  **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.  
         *      
         *  **Note:** This function always returns `-1` on the Web platform due to browsers limitations.  
         */
        get_response_body_length(): int64
        
        /** Reads one chunk from the response. */
        read_response_body_chunk(): PackedByteArray
        set_read_chunk_size(bytes: int64): void
        get_read_chunk_size(): int64
        set_blocking_mode(enabled: boolean): void
        is_blocking_mode_enabled(): boolean
        
        /** Returns a [enum Status] constant. Need to call [method poll] in order to get status updates. */
        get_status(): HTTPClient.Status
        
        /** This needs to be called in order to have any request processed. Check results with [method get_status]. */
        poll(): Error
        
        /** Sets the proxy server for HTTP requests.  
         *  The proxy server is unset if [param host] is empty or [param port] is -1.  
         */
        set_http_proxy(host: string, port: int64): void
        
        /** Sets the proxy server for HTTPS requests.  
         *  The proxy server is unset if [param host] is empty or [param port] is -1.  
         */
        set_https_proxy(host: string, port: int64): void
        
        /** Generates a GET/POST application/x-www-form-urlencoded style query string from a provided dictionary, e.g.:  
         *    
         *  Furthermore, if a key has a `null` value, only the key itself is added, without equal sign and value. If the value is an array, for each value in it a pair with the same key is added.  
         *    
         */
        query_string_from_dict(fields: Dictionary): string
        
        /** If `true`, execution will block until all data is read from the response. */
        get blocking_mode_enabled(): boolean
        set blocking_mode_enabled(value: boolean)
        
        /** The connection to use for this client. */
        get connection(): StreamPeer
        set connection(value: StreamPeer)
        
        /** The size of the buffer used and maximum bytes to read per iteration. See [method read_response_body_chunk]. */
        get read_chunk_size(): int64
        set read_chunk_size(value: int64)
    }
    namespace HTTPRequest {
        enum Result {
            /** Request successful. */
            RESULT_SUCCESS = 0,
            RESULT_CHUNKED_BODY_SIZE_MISMATCH = 1,
            
            /** Request failed while connecting. */
            RESULT_CANT_CONNECT = 2,
            
            /** Request failed while resolving. */
            RESULT_CANT_RESOLVE = 3,
            
            /** Request failed due to connection (read/write) error. */
            RESULT_CONNECTION_ERROR = 4,
            
            /** Request failed on TLS handshake. */
            RESULT_TLS_HANDSHAKE_ERROR = 5,
            
            /** Request does not have a response (yet). */
            RESULT_NO_RESPONSE = 6,
            
            /** Request exceeded its maximum size limit, see [member body_size_limit]. */
            RESULT_BODY_SIZE_LIMIT_EXCEEDED = 7,
            RESULT_BODY_DECOMPRESS_FAILED = 8,
            
            /** Request failed (currently unused). */
            RESULT_REQUEST_FAILED = 9,
            
            /** HTTPRequest couldn't open the download file. */
            RESULT_DOWNLOAD_FILE_CANT_OPEN = 10,
            
            /** HTTPRequest couldn't write to the download file. */
            RESULT_DOWNLOAD_FILE_WRITE_ERROR = 11,
            
            /** Request reached its maximum redirect limit, see [member max_redirects]. */
            RESULT_REDIRECT_LIMIT_REACHED = 12,
            
            /** Request failed due to a timeout. If you expect requests to take a long time, try increasing the value of [member timeout] or setting it to `0.0` to remove the timeout completely. */
            RESULT_TIMEOUT = 13,
        }
    }
    /** A node with the ability to send HTTP(S) requests.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_httprequest.html  
     */
    class HTTPRequest extends Node {
        constructor(identifier?: any)
        /** Creates request on the underlying [HTTPClient]. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].  
         *  Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.  
         *      
         *  **Note:** When [param method] is [constant HTTPClient.METHOD_GET], the payload sent via [param request_data] might be ignored by the server or even cause the server to reject the request (check [url=https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1]RFC 7231 section 4.3.1[/url] for more details). As a workaround, you can send data as a query string in the URL (see [method String.uri_encode] for an example).  
         *      
         *  **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.  
         */
        request(url: string, custom_headers: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/, method: HTTPClient.Method = 0, request_data: string = ''): Error
        
        /** Creates request on the underlying [HTTPClient] using a raw array of bytes for the request body. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].  
         *  Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.  
         */
        request_raw(url: string, custom_headers: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/, method: HTTPClient.Method = 0, request_data_raw: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): Error
        
        /** Cancels the current request. */
        cancel_request(): void
        
        /** Sets the [TLSOptions] to be used when connecting to an HTTPS server. See [method TLSOptions.client]. */
        set_tls_options(client_options: TLSOptions): void
        
        /** Returns the current status of the underlying [HTTPClient]. See [enum HTTPClient.Status]. */
        get_http_client_status(): HTTPClient.Status
        set_use_threads(enable: boolean): void
        is_using_threads(): boolean
        set_accept_gzip(enable: boolean): void
        is_accepting_gzip(): boolean
        set_body_size_limit(bytes: int64): void
        get_body_size_limit(): int64
        set_max_redirects(amount: int64): void
        get_max_redirects(): int64
        set_download_file(path: string): void
        get_download_file(): string
        
        /** Returns the number of bytes this HTTPRequest downloaded. */
        get_downloaded_bytes(): int64
        
        /** Returns the response body length.  
         *      
         *  **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.  
         */
        get_body_size(): int64
        _request_done(_unnamed_arg0: int64, _unnamed_arg1: int64, _unnamed_arg2: PackedStringArray, _unnamed_arg3: PackedByteArray): void
        set_timeout(timeout: float64): void
        get_timeout(): float64
        set_download_chunk_size(chunk_size: int64): void
        get_download_chunk_size(): int64
        
        /** Sets the proxy server for HTTP requests.  
         *  The proxy server is unset if [param host] is empty or [param port] is -1.  
         */
        set_http_proxy(host: string, port: int64): void
        
        /** Sets the proxy server for HTTPS requests.  
         *  The proxy server is unset if [param host] is empty or [param port] is -1.  
         */
        set_https_proxy(host: string, port: int64): void
        
        /** The file to download into. Will output any received file into it. */
        get download_file(): string
        set download_file(value: string)
        
        /** The size of the buffer used and maximum bytes to read per iteration. See [member HTTPClient.read_chunk_size].  
         *  Set this to a lower value (e.g. 4096 for 4 KiB) when downloading small files to decrease memory usage at the cost of download speeds.  
         */
        get download_chunk_size(): int64
        set download_chunk_size(value: int64)
        
        /** If `true`, multithreading is used to improve performance. */
        get use_threads(): boolean
        set use_threads(value: boolean)
        
        /** If `true`, this header will be added to each request: `Accept-Encoding: gzip, deflate` telling servers that it's okay to compress response bodies.  
         *  Any Response body declaring a `Content-Encoding` of either `gzip` or `deflate` will then be automatically decompressed, and the uncompressed bytes will be delivered via [signal request_completed].  
         *  If the user has specified their own `Accept-Encoding` header, then no header will be added regardless of [member accept_gzip].  
         *  If `false` no header will be added, and no decompression will be performed on response bodies. The raw bytes of the response body will be returned via [signal request_completed].  
         */
        get accept_gzip(): boolean
        set accept_gzip(value: boolean)
        
        /** Maximum allowed size for response bodies. If the response body is compressed, this will be used as the maximum allowed size for the decompressed body. */
        get body_size_limit(): int64
        set body_size_limit(value: int64)
        
        /** Maximum number of allowed redirects. */
        get max_redirects(): int64
        set max_redirects(value: int64)
        
        /** The duration to wait in seconds before a request times out. If [member timeout] is set to `0.0` then the request will never time out. For simple requests, such as communication with a REST API, it is recommended that [member timeout] is set to a value suitable for the server response time (e.g. between `1.0` and `10.0`). This will help prevent unwanted timeouts caused by variation in server response times while still allowing the application to detect when a request has timed out. For larger requests such as file downloads it is suggested the [member timeout] be set to `0.0`, disabling the timeout functionality. This will help to prevent large transfers from failing due to exceeding the timeout value. */
        get timeout(): float64
        set timeout(value: float64)
        
        /** Emitted when a request is completed. */
        readonly request_completed: Signal // result: int64, response_code: int64, headers: PackedStringArray, body: PackedByteArray => void
    }
    namespace HashingContext {
        enum HashType {
            /** Hashing algorithm: MD5. */
            HASH_MD5 = 0,
            
            /** Hashing algorithm: SHA-1. */
            HASH_SHA1 = 1,
            
            /** Hashing algorithm: SHA-256. */
            HASH_SHA256 = 2,
        }
    }
    /** Provides functionality for computing cryptographic hashes chunk by chunk.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hashingcontext.html  
     */
    class HashingContext extends RefCounted {
        constructor(identifier?: any)
        /** Starts a new hash computation of the given [param type] (e.g. [constant HASH_SHA256] to start computation of a SHA-256). */
        start(type: HashingContext.HashType): Error
        
        /** Updates the computation with the given [param chunk] of data. */
        update(chunk: PackedByteArray): Error
        
        /** Closes the current context, and return the computed hash. */
        finish(): PackedByteArray
    }
    /** A 3D height map shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_heightmapshape3d.html  
     */
    class HeightMapShape3D extends Shape3D {
        constructor(identifier?: any)
        set_map_width(width: int64): void
        get_map_width(): int64
        set_map_depth(height: int64): void
        get_map_depth(): int64
        set_map_data(data: PackedFloat32Array): void
        get_map_data(): PackedFloat32Array
        
        /** Number of vertices in the width of the height map. Changing this will resize the [member map_data]. */
        get map_width(): int64
        set map_width(value: int64)
        
        /** Number of vertices in the depth of the height map. Changing this will resize the [member map_data]. */
        get map_depth(): int64
        set map_depth(value: int64)
        
        /** Height map data, pool array must be of [member map_width] * [member map_depth] size. */
        get map_data(): PackedFloat32Array
        set map_data(value: PackedFloat32Array)
    }
    namespace HingeJoint3D {
        enum Param {
            /** The speed with which the two bodies get pulled together when they move in different directions. */
            PARAM_BIAS = 0,
            
            /** The maximum rotation. Only active if [member angular_limit/enable] is `true`. */
            PARAM_LIMIT_UPPER = 1,
            
            /** The minimum rotation. Only active if [member angular_limit/enable] is `true`. */
            PARAM_LIMIT_LOWER = 2,
            
            /** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
            PARAM_LIMIT_BIAS = 3,
            PARAM_LIMIT_SOFTNESS = 4,
            
            /** The lower this value, the more the rotation gets slowed down. */
            PARAM_LIMIT_RELAXATION = 5,
            
            /** Target speed for the motor. */
            PARAM_MOTOR_TARGET_VELOCITY = 6,
            
            /** Maximum acceleration for the motor. */
            PARAM_MOTOR_MAX_IMPULSE = 7,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 8,
        }
        enum Flag {
            /** If `true`, the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects. */
            FLAG_USE_LIMIT = 0,
            
            /** When activated, a motor turns the hinge. */
            FLAG_ENABLE_MOTOR = 1,
            
            /** Represents the size of the [enum Flag] enum. */
            FLAG_MAX = 2,
        }
    }
    /** A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_hingejoint3d.html  
     */
    class HingeJoint3D extends Joint3D {
        constructor(identifier?: any)
        /** Sets the value of the specified parameter. */
        set_param(param: HingeJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        get_param(param: HingeJoint3D.Param): float64
        
        /** If `true`, enables the specified flag. */
        set_flag(flag: HingeJoint3D.Flag, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        get_flag(flag: HingeJoint3D.Flag): boolean
    }
    class HistoryDock extends VBoxContainer {
        constructor(identifier?: any)
    }
    namespace Image {
        enum Format {
            /** Texture format with a single 8-bit depth representing luminance. */
            FORMAT_L8 = 0,
            
            /** OpenGL texture format with two values, luminance and alpha each stored with 8 bits. */
            FORMAT_LA8 = 1,
            
            /** OpenGL texture format `RED` with a single component and a bitdepth of 8. */
            FORMAT_R8 = 2,
            
            /** OpenGL texture format `RG` with two components and a bitdepth of 8 for each. */
            FORMAT_RG8 = 3,
            
            /** OpenGL texture format `RGB` with three components, each with a bitdepth of 8.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_RGB8 = 4,
            
            /** OpenGL texture format `RGBA` with four components, each with a bitdepth of 8.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_RGBA8 = 5,
            
            /** OpenGL texture format `RGBA` with four components, each with a bitdepth of 4. */
            FORMAT_RGBA4444 = 6,
            
            /** OpenGL texture format `RGB` with three components. Red and blue have a bitdepth of 5, and green has a bitdepth of 6. */
            FORMAT_RGB565 = 7,
            
            /** OpenGL texture format `GL_R32F` where there's one component, a 32-bit floating-point value. */
            FORMAT_RF = 8,
            
            /** OpenGL texture format `GL_RG32F` where there are two components, each a 32-bit floating-point values. */
            FORMAT_RGF = 9,
            
            /** OpenGL texture format `GL_RGB32F` where there are three components, each a 32-bit floating-point values. */
            FORMAT_RGBF = 10,
            
            /** OpenGL texture format `GL_RGBA32F` where there are four components, each a 32-bit floating-point values. */
            FORMAT_RGBAF = 11,
            
            /** OpenGL texture format `GL_R16F` where there's one component, a 16-bit "half-precision" floating-point value. */
            FORMAT_RH = 12,
            
            /** OpenGL texture format `GL_RG16F` where there are two components, each a 16-bit "half-precision" floating-point value. */
            FORMAT_RGH = 13,
            
            /** OpenGL texture format `GL_RGB16F` where there are three components, each a 16-bit "half-precision" floating-point value. */
            FORMAT_RGBH = 14,
            
            /** OpenGL texture format `GL_RGBA16F` where there are four components, each a 16-bit "half-precision" floating-point value. */
            FORMAT_RGBAH = 15,
            
            /** A special OpenGL texture format where the three color components have 9 bits of precision and all three share a single 5-bit exponent. */
            FORMAT_RGBE9995 = 16,
            
            /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 1, and is the smallest variation of S3TC, only providing 1 bit of alpha and color data being premultiplied with alpha.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_DXT1 = 17,
            
            /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 2, and color data is interpreted as not having been premultiplied by alpha. Well suited for images with sharp alpha transitions between translucent and opaque areas.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_DXT3 = 18,
            
            /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format also known as Block Compression 3 or BC3 that contains 64 bits of alpha channel data followed by 64 bits of DXT1-encoded color data. Color data is not premultiplied by alpha, same as DXT3. DXT5 generally produces superior results for transparent gradients compared to DXT3.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_DXT5 = 19,
            
            /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red channel data using the same compression algorithm that DXT5 uses for the alpha channel. */
            FORMAT_RGTC_R = 20,
            
            /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red and green channel data using the same compression algorithm that DXT5 uses for the alpha channel. */
            FORMAT_RGTC_RG = 21,
            
            /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned normalized RGBA components.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_BPTC_RGBA = 22,
            
            /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with signed floating-point RGB components. */
            FORMAT_BPTC_RGBF = 23,
            
            /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned floating-point RGB components. */
            FORMAT_BPTC_RGBFU = 24,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC1]Ericsson Texture Compression format 1[/url], also referred to as "ETC1", and is part of the OpenGL ES graphics standard. This format cannot store an alpha channel. */
            FORMAT_ETC = 25,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`R11_EAC` variant), which provides one channel of unsigned data. */
            FORMAT_ETC2_R11 = 26,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_R11_EAC` variant), which provides one channel of signed data. */
            FORMAT_ETC2_R11S = 27,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RG11_EAC` variant), which provides two channels of unsigned data. */
            FORMAT_ETC2_RG11 = 28,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_RG11_EAC` variant), which provides two channels of signed data. */
            FORMAT_ETC2_RG11S = 29,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8` variant), which is a follow-up of ETC1 and compresses RGB888 data.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_ETC2_RGB8 = 30,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGBA8`variant), which compresses RGBA8888 data with full alpha support.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_ETC2_RGBA8 = 31,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8_PUNCHTHROUGH_ALPHA1` variant), which compresses RGBA data to make alpha either fully transparent or fully opaque.  
             *      
             *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
             */
            FORMAT_ETC2_RGB8A1 = 32,
            
            /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGBA8` variant), which compresses RA data and interprets it as two channels (red and green). See also [constant FORMAT_ETC2_RGBA8]. */
            FORMAT_ETC2_RA_AS_RG = 33,
            
            /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format also known as Block Compression 3 or BC3, which compresses RA data and interprets it as two channels (red and green). See also [constant FORMAT_DXT5]. */
            FORMAT_DXT5_RA_AS_RG = 34,
            
            /** [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 4x4 (high quality) mode. */
            FORMAT_ASTC_4x4 = 35,
            
            /** Same format as [constant FORMAT_ASTC_4x4], but with the hint to let the GPU know it is used for HDR. */
            FORMAT_ASTC_4x4_HDR = 36,
            
            /** [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 8x8 (low quality) mode. */
            FORMAT_ASTC_8x8 = 37,
            
            /** Same format as [constant FORMAT_ASTC_8x8], but with the hint to let the GPU know it is used for HDR. */
            FORMAT_ASTC_8x8_HDR = 38,
            
            /** Represents the size of the [enum Format] enum. */
            FORMAT_MAX = 39,
        }
        enum Interpolation {
            /** Performs nearest-neighbor interpolation. If the image is resized, it will be pixelated. */
            INTERPOLATE_NEAREST = 0,
            
            /** Performs bilinear interpolation. If the image is resized, it will be blurry. This mode is faster than [constant INTERPOLATE_CUBIC], but it results in lower quality. */
            INTERPOLATE_BILINEAR = 1,
            
            /** Performs cubic interpolation. If the image is resized, it will be blurry. This mode often gives better results compared to [constant INTERPOLATE_BILINEAR], at the cost of being slower. */
            INTERPOLATE_CUBIC = 2,
            
            /** Performs bilinear separately on the two most-suited mipmap levels, then linearly interpolates between them.  
             *  It's slower than [constant INTERPOLATE_BILINEAR], but produces higher-quality results with far fewer aliasing artifacts.  
             *  If the image does not have mipmaps, they will be generated and used internally, but no mipmaps will be generated on the resulting image.  
             *      
             *  **Note:** If you intend to scale multiple copies of the original image, it's better to call [method generate_mipmaps]] on it in advance, to avoid wasting processing power in generating them again and again.  
             *  On the other hand, if the image already has mipmaps, they will be used, and a new set will be generated for the resulting image.  
             */
            INTERPOLATE_TRILINEAR = 3,
            
            /** Performs Lanczos interpolation. This is the slowest image resizing mode, but it typically gives the best results, especially when downscaling images. */
            INTERPOLATE_LANCZOS = 4,
        }
        enum AlphaMode {
            /** Image does not have alpha. */
            ALPHA_NONE = 0,
            
            /** Image stores alpha in a single bit. */
            ALPHA_BIT = 1,
            
            /** Image uses alpha. */
            ALPHA_BLEND = 2,
        }
        enum CompressMode {
            /** Use S3TC compression. */
            COMPRESS_S3TC = 0,
            
            /** Use ETC compression. */
            COMPRESS_ETC = 1,
            
            /** Use ETC2 compression. */
            COMPRESS_ETC2 = 2,
            
            /** Use BPTC compression. */
            COMPRESS_BPTC = 3,
            
            /** Use ASTC compression. */
            COMPRESS_ASTC = 4,
            
            /** Represents the size of the [enum CompressMode] enum. */
            COMPRESS_MAX = 5,
        }
        enum UsedChannels {
            /** The image only uses one channel for luminance (grayscale). */
            USED_CHANNELS_L = 0,
            
            /** The image uses two channels for luminance and alpha, respectively. */
            USED_CHANNELS_LA = 1,
            
            /** The image only uses the red channel. */
            USED_CHANNELS_R = 2,
            
            /** The image uses two channels for red and green. */
            USED_CHANNELS_RG = 3,
            
            /** The image uses three channels for red, green, and blue. */
            USED_CHANNELS_RGB = 4,
            
            /** The image uses four channels for red, green, blue, and alpha. */
            USED_CHANNELS_RGBA = 5,
        }
        enum CompressSource {
            /** Source texture (before compression) is a regular texture. Default for all textures. */
            COMPRESS_SOURCE_GENERIC = 0,
            
            /** Source texture (before compression) is in sRGB space. */
            COMPRESS_SOURCE_SRGB = 1,
            
            /** Source texture (before compression) is a normal texture (e.g. it can be compressed into two channels). */
            COMPRESS_SOURCE_NORMAL = 2,
        }
        enum ASTCFormat {
            /** Hint to indicate that the high quality 4x4 ASTC compression format should be used. */
            ASTC_FORMAT_4x4 = 0,
            
            /** Hint to indicate that the low quality 8x8 ASTC compression format should be used. */
            ASTC_FORMAT_8x8 = 1,
        }
    }
    /** Image datatype.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_image.html  
     */
    class Image extends Resource {
        /** The maximal width allowed for [Image] resources. */
        static readonly MAX_WIDTH = 16777216
        
        /** The maximal height allowed for [Image] resources. */
        static readonly MAX_HEIGHT = 16777216
        constructor(identifier?: any)
        
        /** Returns the image's width. */
        get_width(): int64
        
        /** Returns the image's height. */
        get_height(): int64
        
        /** Returns the image's size (width and height). */
        get_size(): Vector2i
        
        /** Returns `true` if the image has generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns the image's format. See [enum Format] constants. */
        get_format(): Image.Format
        
        /** Returns a copy of the image's raw data. */
        get_data(): PackedByteArray
        
        /** Converts the image's format. See [enum Format] constants. */
        convert(format: Image.Format): void
        
        /** Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count. */
        get_mipmap_count(): int64
        
        /** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
        get_mipmap_offset(mipmap: int64): int64
        
        /** Resizes the image to the nearest power of 2 for the width and height. If [param square] is `true` then set width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize_to_po2(square: boolean = false, interpolation: Image.Interpolation = 1): void
        
        /** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize(width: int64, height: int64, interpolation: Image.Interpolation = 1): void
        
        /** Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4). */
        shrink_x2(): void
        
        /** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
        crop(width: int64, height: int64): void
        
        /** Flips the image horizontally. */
        flip_x(): void
        
        /** Flips the image vertically. */
        flip_y(): void
        
        /** Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.  
         *  It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.  
         */
        generate_mipmaps(renormalize: boolean = false): Error
        
        /** Removes the image's mipmaps. */
        clear_mipmaps(): void
        
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is `true`, then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: int64, height: int64, use_mipmaps: boolean, format: Image.Format): Image
        
        /** Creates a new image of given size and format. See [enum Format] constants. Fills the image with the given raw data. If [param use_mipmaps] is `true` then loads mipmaps for this image from [param data]. See [method generate_mipmaps]. */
        static create_from_data(width: int64, height: int64, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): Image
        
        /** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
        set_data(width: int64, height: int64, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): void
        
        /** Returns `true` if the image has no data. */
        is_empty(): boolean
        
        /** Loads an image from file [param path]. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.  
         *  See also [ImageTexture] description for usage examples.  
         */
        load(path: string): Error
        
        /** Creates a new [Image] and loads data from the specified file. */
        static load_from_file(path: string): Image
        
        /** Saves the image as a PNG file to the file at [param path]. */
        save_png(path: string): Error
        
        /** Saves the image as a PNG file to a byte array. */
        save_png_to_buffer(): PackedByteArray
        
        /** Saves the image as a JPEG file to [param path] with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.  
         */
        save_jpg(path: string, quality: float64 = 0.75): Error
        
        /** Saves the image as a JPEG file to a byte array with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.  
         */
        save_jpg_to_buffer(quality: float64 = 0.75): PackedByteArray
        
        /** Saves the image as an EXR file to [param path]. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        save_exr(path: string, grayscale: boolean = false): Error
        
        /** Saves the image as an EXR file to a byte array. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return an empty byte array when it is called from an exported project.  
         */
        save_exr_to_buffer(grayscale: boolean = false): PackedByteArray
        
        /** Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        save_webp(path: string, lossy: boolean = false, quality: float64 = 0.75): Error
        
        /** Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        save_webp_to_buffer(lossy: boolean = false, quality: float64 = 0.75): PackedByteArray
        
        /** Returns [constant ALPHA_BLEND] if the image has data for alpha values. Returns [constant ALPHA_BIT] if all the alpha values are stored in a single bit. Returns [constant ALPHA_NONE] if no data for alpha values is found. */
        detect_alpha(): Image.AlphaMode
        
        /** Returns `true` if all the image's pixels have an alpha value of 0. Returns `false` if any pixel has an alpha value higher than 0. */
        is_invisible(): boolean
        
        /** Returns the color channels used by this image, as one of the [enum UsedChannels] constants. If the image is compressed, the original [param source] must be specified. */
        detect_used_channels(source: Image.CompressSource = 0): Image.UsedChannels
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress(mode: Image.CompressMode, source: Image.CompressSource = 0, astc_format: Image.ASTCFormat = 0): Error
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress_from_channels(mode: Image.CompressMode, channels: Image.UsedChannels, astc_format: Image.ASTCFormat = 0): Error
        
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].  
         *      
         *  **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.  
         */
        decompress(): Error
        
        /** Returns `true` if the image is compressed. */
        is_compressed(): boolean
        
        /** Rotates the image in the specified [param direction] by `90` degrees. The width and height of the image must be greater than `1`. If the width and height are not equal, the image will be resized. */
        rotate_90(direction: ClockDirection): void
        
        /** Rotates the image by `180` degrees. The width and height of the image must be greater than `1`. */
        rotate_180(): void
        
        /** Blends low-alpha pixels with nearby pixels. */
        fix_alpha_edges(): void
        
        /** Multiplies color values with alpha values. Resulting color values for a pixel are `(color * alpha)/256`. See also [member CanvasItemMaterial.blend_mode]. */
        premultiply_alpha(): void
        
        /** Converts the raw data from the sRGB colorspace to a linear scale. */
        srgb_to_linear(): void
        
        /** Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count. */
        normal_map_to_xy(): void
        
        /** Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image. */
        rgbe_to_srgb(): Image
        
        /** Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel. */
        bump_map_to_normal_map(bump_scale: float64 = 1): void
        
        /** Compute image metrics on the current image and the compared image.  
         *  The dictionary contains `max`, `mean`, `mean_squared`, `root_mean_squared` and `peak_snr`.  
         */
        compute_image_metrics(compared_image: Image, use_luma: boolean): Dictionary
        
        /** Copies [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty. */
        blit_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        
        /** Blits [param src_rect] area from [param src] image to this image at the coordinates given by [param dst], clipped accordingly to both image bounds. [param src] pixel is copied onto [param dst] if the corresponding [param mask] pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blit_rect_mask(src: Image, mask: Image, src_rect: Rect2i, dst: Vector2i): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty. */
        blend_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image using [param mask] image at coordinates [param dst], clipped accordingly to both image bounds. Alpha channels are required for both [param src] and [param mask]. [param dst] pixels and [param src] pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blend_rect_mask(src: Image, mask: Image, src_rect: Rect2i, dst: Vector2i): void
        
        /** Fills the image with [param color]. */
        fill(color: Color): void
        
        /** Fills [param rect] with [param color]. */
        fill_rect(rect: Rect2i, color: Color): void
        
        /** Returns a [Rect2i] enclosing the visible portion of the image, considering each pixel with a non-zero alpha channel as visible. */
        get_used_rect(): Rect2i
        
        /** Returns a new [Image] that is a copy of this [Image]'s area specified with [param region]. */
        get_region(region: Rect2i): Image
        
        /** Copies [param src] image to this image. */
        copy_from(src: Image): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        
        /** Returns the color of the pixel at [param point].  
         *  This is the same as [method get_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        get_pixelv(point: Vector2i): Color
        
        /** Returns the color of the pixel at `(x, y)`.  
         *  This is the same as [method get_pixelv], but with two integer arguments instead of a [Vector2i] argument.  
         */
        get_pixel(x: int64, y: int64): Color
        
        /** Sets the [Color] of the pixel at [param point] to [param color].  
         *  **Example:**  
         *    
         *  This is the same as [method set_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        set_pixelv(point: Vector2i, color: Color): void
        
        /** Sets the [Color] of the pixel at `(x, y)` to [param color].  
         *  **Example:**  
         *    
         *  This is the same as [method set_pixelv], but with a two integer arguments instead of a [Vector2i] argument.  
         */
        set_pixel(x: int64, y: int64, color: Color): void
        
        /** Adjusts this image's [param brightness], [param contrast], and [param saturation] by the given values. Does not work if the image is compressed (see [method is_compressed]). */
        adjust_bcs(brightness: float64, contrast: float64, saturation: float64): void
        
        /** Loads an image from the binary contents of a PNG file. */
        load_png_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the binary contents of a JPEG file. */
        load_jpg_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the binary contents of a WebP file. */
        load_webp_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the binary contents of a TGA file.  
         *      
         *  **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.  
         */
        load_tga_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the binary contents of a BMP file.  
         *      
         *  **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.  
         *      
         *  **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.  
         */
        load_bmp_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.  
         *      
         *  **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.  
         *      
         *  **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.  
         */
        load_ktx_from_buffer(buffer: PackedByteArray): Error
        
        /** Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).  
         *      
         *  **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        load_svg_from_buffer(buffer: PackedByteArray, scale: float64 = 1): Error
        
        /** Loads an image from the string contents of a SVG file (**.svg**).  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        load_svg_from_string(svg_str: string, scale: float64 = 1): Error
        
        /** Holds all the image's color data in a given format. See [enum Format] constants. */
        get data(): Dictionary
        set data(value: Dictionary)
    }
    namespace ImageFormatLoader {
        enum LoaderFlags {
            FLAG_NONE = 0,
            FLAG_FORCE_LINEAR = 1,
            FLAG_CONVERT_COLORS = 2,
        }
    }
    /** Base class to add support for specific image formats.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_imageformatloader.html  
     */
    class ImageFormatLoader extends RefCounted {
        constructor(identifier?: any)
    }
    /** Base class for creating [ImageFormatLoader] extensions (adding support for extra image formats).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_imageformatloaderextension.html  
     */
    class ImageFormatLoaderExtension extends ImageFormatLoader {
        constructor(identifier?: any)
        /** Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        
        /** Loads the content of [param fileaccess] into the provided [param image]. */
        /* gdvirtual */ _load_image(image: Image, fileaccess: FileAccess, flags: ImageFormatLoader.LoaderFlags, scale: float64): Error
        
        /** Add this format loader to the engine, allowing it to recognize the file extensions returned by [method _get_recognized_extensions]. */
        add_format_loader(): void
        
        /** Remove this format loader from the engine. */
        remove_format_loader(): void
    }
    /** A [Texture2D] based on an [Image].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_imagetexture.html  
     */
    class ImageTexture extends Texture2D {
        constructor(identifier?: any)
        /** Creates a new [ImageTexture] and initializes it by allocating and setting the data from an [Image]. */
        static create_from_image(image: Image): ImageTexture
        
        /** Returns the format of the texture, one of [enum Image.Format]. */
        get_format(): Image.Format
        
        /** Replaces the texture's data with a new [Image]. This will re-allocate new memory for the texture.  
         *  If you want to update the image, but don't need to change its parameters (format, size), use [method update] instead for better performance.  
         */
        set_image(image: Image): void
        
        /** Replaces the texture's data with a new [Image].  
         *      
         *  **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.  
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.  
         */
        update(image: Image): void
        
        /** Resizes the texture to the specified dimensions. */
        set_size_override(size: Vector2i): void
    }
    /** Texture with 3 dimensions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_imagetexture3d.html  
     */
    class ImageTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** Creates the [ImageTexture3D] with specified [param width], [param height], and [param depth]. See [enum Image.Format] for [param format] options. If [param use_mipmaps] is `true`, then generate mipmaps for the [ImageTexture3D]. */
        create(format: Image.Format, width: int64, height: int64, depth: int64, use_mipmaps: boolean, data: Array): Error
        
        /** Replaces the texture's existing data with the layers specified in [param data]. The size of [param data] must match the parameters that were used for [method create]. In other words, the texture cannot be resized or have its format changed by calling [method update]. */
        update(data: Array): void
        _get_images(): Array
        _set_images(images: Array): void
        get _images(): Array
        set _images(value: Array)
    }
    /** Base class for texture types which contain the data of multiple [ImageTexture]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_imagetexturelayered.html  
     */
    class ImageTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** Creates an [ImageTextureLayered] from an array of [Image]s. See [method Image.create] for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images  *must*  have the same width, height, image format and mipmapping setting.  
         *  Each [Image] represents one `layer`.  
         */
        create_from_images(images: Array): Error
        
        /** Replaces the existing [Image] data at the given [param layer] with this new image.  
         *  The given [Image] must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.  
         *  If the image format is unsupported, it will be decompressed and converted to a similar and supported [enum Image.Format].  
         *  The update is immediate: it's synchronized with drawing.  
         */
        update_layer(image: Image, layer: int64): void
        _get_images(): Array
        _set_images(images: Array): void
        get _images(): Array
        set _images(value: Array)
    }
    /** Mesh optimized for creating geometry manually.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_immediatemesh.html  
     */
    class ImmediateMesh extends Mesh {
        constructor(identifier?: any)
        /** Begin a new surface. */
        surface_begin(primitive: Mesh.PrimitiveType, material: Material = <any> {} /*compound.type from nil*/): void
        
        /** Set the color attribute that will be pushed with the next vertex. */
        surface_set_color(color: Color): void
        
        /** Set the normal attribute that will be pushed with the next vertex. */
        surface_set_normal(normal: Vector3): void
        
        /** Set the tangent attribute that will be pushed with the next vertex. */
        surface_set_tangent(tangent: Plane): void
        
        /** Set the UV attribute that will be pushed with the next vertex. */
        surface_set_uv(uv: Vector2): void
        
        /** Set the UV2 attribute that will be pushed with the next vertex. */
        surface_set_uv2(uv2: Vector2): void
        
        /** Add a 3D vertex using the current attributes previously set. */
        surface_add_vertex(vertex: Vector3): void
        
        /** Add a 2D vertex using the current attributes previously set. */
        surface_add_vertex_2d(vertex: Vector2): void
        
        /** End and commit current surface. Note that surface being created will not be visible until this function is called. */
        surface_end(): void
        
        /** Clear all surfaces. */
        clear_surfaces(): void
    }
    class ImportDefaultsEditor extends VBoxContainer {
        constructor(identifier?: any)
    }
    class ImportDefaultsEditorSettings extends Object {
        constructor(identifier?: any)
    }
    class ImportDock extends VBoxContainer {
        constructor(identifier?: any)
        _reimport(): void
    }
    class ImportDockParameters extends Object {
        constructor(identifier?: any)
    }
    /** A [Resource] that contains vertex array-based geometry during the import process.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_importermesh.html  
     */
    class ImporterMesh extends Resource {
        constructor(identifier?: any)
        /** Adds name for a blend shape that will be added with [method add_surface]. Must be called before surface is added. */
        add_blend_shape(name: string): void
        
        /** Returns the number of blend shapes that the mesh holds. */
        get_blend_shape_count(): int64
        
        /** Returns the name of the blend shape at this index. */
        get_blend_shape_name(blend_shape_idx: int64): string
        
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        
        /** Returns the blend shape mode for this Mesh. */
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
        add_surface(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array = <any> {} /*compound.type from 28([object Object])*/, lods: Dictionary = <any> {} /*compound.type from 27([object Object])*/, material: Material = <any> {} /*compound.type from nil*/, name: string = '', flags: int64 = 0): void
        
        /** Returns the number of surfaces that the mesh holds. */
        get_surface_count(): int64
        
        /** Returns the primitive type of the requested surface (see [method add_surface]). */
        get_surface_primitive_type(surface_idx: int64): Mesh.PrimitiveType
        
        /** Gets the name assigned to this surface. */
        get_surface_name(surface_idx: int64): string
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [method add_surface]. */
        get_surface_arrays(surface_idx: int64): Array
        
        /** Returns a single set of blend shape arrays for the requested blend shape index for a surface. */
        get_surface_blend_shape_arrays(surface_idx: int64, blend_shape_idx: int64): Array
        
        /** Returns the number of lods that the mesh holds on a given surface. */
        get_surface_lod_count(surface_idx: int64): int64
        
        /** Returns the screen ratio which activates a lod for a surface. */
        get_surface_lod_size(surface_idx: int64, lod_idx: int64): float64
        
        /** Returns the index buffer of a lod for a surface. */
        get_surface_lod_indices(surface_idx: int64, lod_idx: int64): PackedInt32Array
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material. */
        get_surface_material(surface_idx: int64): Material
        
        /** Returns the format of the surface that the mesh holds. */
        get_surface_format(surface_idx: int64): int64
        
        /** Sets a name for a given surface. */
        set_surface_name(surface_idx: int64, name: string): void
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material. */
        set_surface_material(surface_idx: int64, material: Material): void
        
        /** Generates all lods for this ImporterMesh.  
         *  [param normal_merge_angle] and [param normal_split_angle] are in degrees and used in the same way as the importer settings in `lods`. As a good default, use 25 and 60 respectively.  
         *  The number of generated lods can be accessed using [method get_surface_lod_count], and each LOD is available in [method get_surface_lod_size] and [method get_surface_lod_indices].  
         *  [param bone_transform_array] is an [Array] which can be either empty or contain [Transform3D]s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.  
         */
        generate_lods(normal_merge_angle: float64, normal_split_angle: float64, bone_transform_array: Array): void
        
        /** Returns the mesh data represented by this [ImporterMesh] as a usable [ArrayMesh].  
         *  This method caches the returned mesh, and subsequent calls will return the cached data until [method clear] is called.  
         *  If not yet cached and [param base_mesh] is provided, [param base_mesh] will be used and mutated.  
         */
        get_mesh(base_mesh: ArrayMesh = <any> {} /*compound.type from nil*/): ArrayMesh
        
        /** Removes all surfaces and blend shapes from this [ImporterMesh]. */
        clear(): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        
        /** Sets the size hint of this mesh for lightmap-unwrapping in UV-space. */
        set_lightmap_size_hint(size: Vector2i): void
        
        /** Returns the size hint of this mesh for lightmap-unwrapping in UV-space. */
        get_lightmap_size_hint(): Vector2i
        get _data(): Dictionary
        set _data(value: Dictionary)
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_importermeshinstance3d.html */
    class ImporterMeshInstance3D extends Node3D {
        constructor(identifier?: any)
        set_mesh(mesh: ImporterMesh): void
        get_mesh(): ImporterMesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_layer_mask(layer_mask: int64): void
        get_layer_mask(): int64
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
        set_visibility_range_end_margin(distance: float64): void
        get_visibility_range_end_margin(): float64
        set_visibility_range_end(distance: float64): void
        get_visibility_range_end(): float64
        set_visibility_range_begin_margin(distance: float64): void
        get_visibility_range_begin_margin(): float64
        set_visibility_range_begin(distance: float64): void
        get_visibility_range_begin(): float64
        set_visibility_range_fade_mode(mode: GeometryInstance3D.VisibilityRangeFadeMode): void
        get_visibility_range_fade_mode(): GeometryInstance3D.VisibilityRangeFadeMode
        get mesh(): ImporterMesh
        set mesh(value: ImporterMesh)
        get skin(): Skin
        set skin(value: Skin)
        get skeleton_path(): NodePath
        set skeleton_path(value: NodePath)
        get layer_mask(): int64
        set layer_mask(value: int64)
        get cast_shadow(): int64
        set cast_shadow(value: int64)
        get visibility_range_begin(): float64
        set visibility_range_begin(value: float64)
        get visibility_range_begin_margin(): float64
        set visibility_range_begin_margin(value: float64)
        get visibility_range_end(): float64
        set visibility_range_end(value: float64)
        get visibility_range_end_margin(): float64
        set visibility_range_end_margin(value: float64)
        get visibility_range_fade_mode(): int64
        set visibility_range_fade_mode(value: int64)
    }
    /** Abstract base class for input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputevent.html  
     */
    class InputEvent extends Resource {
        constructor(identifier?: any)
        set_device(device: int64): void
        get_device(): int64
        
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
        get_action_strength(action: StringName, exact_match: boolean = false): float64
        
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
        get device(): int64
        set device(value: int64)
    }
    /** An input event type for actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventaction.html  
     */
    class InputEventAction extends InputEvent {
        constructor(identifier?: any)
        set_action(action: StringName): void
        get_action(): StringName
        set_pressed(pressed: boolean): void
        set_strength(strength: float64): void
        get_strength(): float64
        
        /** The action's name. Actions are accessed via this [String]. */
        get action(): StringName
        set action(value: StringName)
        
        /** If `true`, the action's state is pressed. If `false`, the action's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        get strength(): float64
        set strength(value: float64)
    }
    class InputEventConfigurationDialog extends ConfirmationDialog {
        constructor(identifier?: any)
    }
    class InputEventEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Abstract base class for [Viewport]-based input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventfromwindow.html  
     */
    class InputEventFromWindow extends InputEvent {
        constructor(identifier?: any)
        set_window_id(id: int64): void
        get_window_id(): int64
        
        /** The ID of a [Window] that received this event. */
        get window_id(): int64
        set window_id(value: int64)
    }
    /** Abstract base class for touch gestures.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventgesture.html  
     */
    class InputEventGesture extends InputEventWithModifiers {
        constructor(identifier?: any)
        set_position(position: Vector2): void
        get_position(): Vector2
        
        /** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
        get position(): Vector2
        set position(value: Vector2)
    }
    /** Represents a gamepad button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventjoypadbutton.html  
     */
    class InputEventJoypadButton extends InputEvent {
        constructor(identifier?: any)
        set_button_index(button_index: JoyButton): void
        get_button_index(): JoyButton
        set_pressure(pressure: float64): void
        get_pressure(): float64
        set_pressed(pressed: boolean): void
        
        /** Button identifier. One of the [enum JoyButton] button constants. */
        get button_index(): int64
        set button_index(value: int64)
        
        /** Represents the pressure the user puts on a pressure-sensitive button.  
         *   *Deprecated.*  This property is never set by the engine and is always `0`.  
         */
        get pressure(): float64
        set pressure(value: float64)
        
        /** If `true`, the button's state is pressed. If `false`, the button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
    }
    /** Represents axis motions (such as joystick or analog triggers) from a gamepad.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventjoypadmotion.html  
     */
    class InputEventJoypadMotion extends InputEvent {
        constructor(identifier?: any)
        set_axis(axis: JoyAxis): void
        get_axis(): JoyAxis
        set_axis_value(axis_value: float64): void
        get_axis_value(): float64
        
        /** Axis identifier. Use one of the [enum JoyAxis] axis constants. */
        get axis(): int64
        set axis(value: int64)
        
        /** Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position. */
        get axis_value(): float64
        set axis_value(value: float64)
    }
    /** Represents a key on a keyboard being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventkey.html  
     */
    class InputEventKey extends InputEventWithModifiers {
        constructor(identifier?: any)
        set_pressed(pressed: boolean): void
        set_keycode(keycode: Key): void
        get_keycode(): Key
        set_physical_keycode(physical_keycode: Key): void
        get_physical_keycode(): Key
        set_key_label(key_label: Key): void
        get_key_label(): Key
        set_unicode(unicode: int64): void
        get_unicode(): int64
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
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.keycode)` where `event` is the [InputEventKey].  
         *    
         */
        get keycode(): int64
        set keycode(value: int64)
        
        /** Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:  
         *    
         */
        get physical_keycode(): int64
        set physical_keycode(value: int64)
        
        /** Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.  
         *  For keyboard layouts with a single label on the key, it is equivalent to [member keycode].  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.key_label)` where `event` is the [InputEventKey].  
         *    
         */
        get key_label(): int64
        set key_label(value: int64)
        
        /** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
        get unicode(): int64
        set unicode(value: int64)
        
        /** If `true`, the key was already pressed before this event. It means the user is holding the key down. */
        get echo(): boolean
        set echo(value: boolean)
    }
    /** Represents a MIDI message from a MIDI device, such as a musical keyboard.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventmidi.html  
     */
    class InputEventMIDI extends InputEvent {
        constructor(identifier?: any)
        set_channel(channel: int64): void
        get_channel(): int64
        set_message(message: MIDIMessage): void
        get_message(): MIDIMessage
        set_pitch(pitch: int64): void
        get_pitch(): int64
        set_velocity(velocity: int64): void
        get_velocity(): int64
        set_instrument(instrument: int64): void
        get_instrument(): int64
        set_pressure(pressure: int64): void
        get_pressure(): int64
        set_controller_number(controller_number: int64): void
        get_controller_number(): int64
        set_controller_value(controller_value: int64): void
        get_controller_value(): int64
        
        /** The MIDI channel of this message, ranging from `0` to `15`. MIDI channel `9` is reserved for percussion instruments. */
        get channel(): int64
        set channel(value: int64)
        
        /** Represents the type of MIDI message (see the [enum MIDIMessage] enum).  
         *  For more information, see the [url=https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes]MIDI message status byte list chart[/url].  
         */
        get message(): int64
        set message(value: int64)
        
        /** The pitch index number of this MIDI message. This value ranges from `0` to `127`.  
         *  On a piano, the **middle C** is `60`, followed by a **C-sharp** (`61`), then a **D** (`62`), and so on. Each octave is split in offsets of 12. See the "MIDI note number" column of the [url=https://en.wikipedia.org/wiki/Piano_key_frequencies]piano key frequency chart[/url] a full list.  
         */
        get pitch(): int64
        set pitch(value: int64)
        
        /** The velocity of the MIDI message. This value ranges from `0` to `127`. For a musical keyboard, this corresponds to how quickly the key was pressed, and is rarely above `110` in practice.  
         *      
         *  **Note:** Some MIDI devices may send a [constant MIDI_MESSAGE_NOTE_ON] message with `0` velocity and expect it to be treated the same as a [constant MIDI_MESSAGE_NOTE_OFF] message. If necessary, this can be handled with a few lines of code:  
         *    
         */
        get velocity(): int64
        set velocity(value: int64)
        
        /** The instrument (also called  *program*  or  *preset* ) used on this MIDI message. This value ranges from `0` to `127`.  
         *  To see what each value means, refer to the [url=https://en.wikipedia.org/wiki/General_MIDI#Program_change_events]General MIDI's instrument list[/url]. Keep in mind that the list is off by 1 because it does not begin from 0. A value of `0` corresponds to the acoustic grand piano.  
         */
        get instrument(): int64
        set instrument(value: int64)
        
        /** The strength of the key being pressed. This value ranges from `0` to `127`.  
         *      
         *  **Note:** For many devices, this value is always `0`. Other devices such as musical keyboards may simulate pressure by changing the [member velocity], instead.  
         */
        get pressure(): int64
        set pressure(value: int64)
        
        /** The unique number of the controller, if [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], otherwise this is `0`. This value can be used to identify sliders for volume, balance, and panning, as well as switches and pedals on the MIDI device. See the [url=https://en.wikipedia.org/wiki/General_MIDI#Controller_events]General MIDI specification[/url] for a small list. */
        get controller_number(): int64
        set controller_number(value: int64)
        
        /** The value applied to the controller. If [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], this value ranges from `0` to `127`, otherwise it is `0`. See also [member controller_value]. */
        get controller_value(): int64
        set controller_value(value: int64)
    }
    /** Represents a magnifying touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventmagnifygesture.html  
     */
    class InputEventMagnifyGesture extends InputEventGesture {
        constructor(identifier?: any)
        set_factor(factor: float64): void
        get_factor(): float64
        
        /** The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed. */
        get factor(): float64
        set factor(value: float64)
    }
    /** Base input event type for mouse events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventmouse.html  
     */
    class InputEventMouse extends InputEventWithModifiers {
        constructor(identifier?: any)
        set_button_mask(button_mask: MouseButtonMask): void
        get_button_mask(): MouseButtonMask
        set_position(position: Vector2): void
        get_position(): Vector2
        set_global_position(global_position: Vector2): void
        get_global_position(): Vector2
        
        /** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
        get button_mask(): int64
        set button_mask(value: int64)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].  
         */
        get position(): Vector2
        set position(value: Vector2)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].  
         */
        get global_position(): Vector2
        set global_position(value: Vector2)
    }
    /** Represents a mouse button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventmousebutton.html  
     */
    class InputEventMouseButton extends InputEventMouse {
        constructor(identifier?: any)
        set_factor(factor: float64): void
        get_factor(): float64
        set_button_index(button_index: MouseButton): void
        get_button_index(): MouseButton
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_click(double_click: boolean): void
        is_double_click(): boolean
        
        /** The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported. */
        get factor(): float64
        set factor(value: float64)
        
        /** The mouse button identifier, one of the [enum MouseButton] button or button wheel constants. */
        get button_index(): int64
        set button_index(value: int64)
        
        /** If `true`, the mouse button event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the mouse button's state is a double-click. */
        get double_click(): boolean
        set double_click(value: boolean)
    }
    /** Represents a mouse or a pen movement.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventmousemotion.html  
     */
    class InputEventMouseMotion extends InputEventMouse {
        constructor(identifier?: any)
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: float64): void
        get_pressure(): float64
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen.  
         *      
         *  **Note:** This property is implemented on Linux, macOS and Windows.  
         */
        get pen_inverted(): boolean
        set pen_inverted(value: boolean)
        
        /** The mouse position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] is only emitted when the mouse moves, the last event won't have a relative position of `Vector2(0, 0)` when the user stops moving the mouse.  
         */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The mouse velocity in pixels per second. */
        get velocity(): Vector2
        set velocity(value: Vector2)
    }
    /** Represents a panning touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventpangesture.html  
     */
    class InputEventPanGesture extends InputEventGesture {
        constructor(identifier?: any)
        set_delta(delta: Vector2): void
        get_delta(): Vector2
        
        /** Panning amount since last pan event. */
        get delta(): Vector2
        set delta(value: Vector2)
    }
    /** Represents a screen drag event.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventscreendrag.html  
     */
    class InputEventScreenDrag extends InputEventFromWindow {
        constructor(identifier?: any)
        set_index(index: int64): void
        get_index(): int64
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: float64): void
        get_pressure(): float64
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_position(position: Vector2): void
        get_position(): Vector2
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        
        /** The drag event index in the case of a multi-drag event. */
        get index(): int64
        set index(value: int64)
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen. */
        get pen_inverted(): boolean
        set pen_inverted(value: boolean)
        
        /** The drag position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** The drag position relative to the previous position (position at the last frame). */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The drag velocity. */
        get velocity(): Vector2
        set velocity(value: Vector2)
    }
    /** Represents a screen touch event.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventscreentouch.html  
     */
    class InputEventScreenTouch extends InputEventFromWindow {
        constructor(identifier?: any)
        set_index(index: int64): void
        get_index(): int64
        set_position(position: Vector2): void
        get_position(): Vector2
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_tap(double_tap: boolean): void
        is_double_tap(): boolean
        
        /** The touch index in the case of a multi-touch event. One index = one finger. */
        get index(): int64
        set index(value: int64)
        
        /** The touch position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** If `true`, the touch event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the touch's state is pressed. If `false`, the touch's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the touch's state is a double tap. */
        get double_tap(): boolean
        set double_tap(value: boolean)
    }
    /** Represents a triggered keyboard [Shortcut].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventshortcut.html  
     */
    class InputEventShortcut extends InputEvent {
        constructor(identifier?: any)
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
        
        /** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return `true` for this event. */
        get shortcut(): Shortcut
        set shortcut(value: Shortcut)
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_inputeventwithmodifiers.html  
     */
    class InputEventWithModifiers extends InputEventFromWindow {
        constructor(identifier?: any)
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
        get command_or_control_autoremap(): boolean
        set command_or_control_autoremap(value: boolean)
        
        /** State of the [kbd]Alt[/kbd] modifier. */
        get alt_pressed(): boolean
        set alt_pressed(value: boolean)
        
        /** State of the [kbd]Shift[/kbd] modifier. */
        get shift_pressed(): boolean
        set shift_pressed(value: boolean)
        
        /** State of the [kbd]Ctrl[/kbd] modifier. */
        get ctrl_pressed(): boolean
        set ctrl_pressed(value: boolean)
        
        /** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
        get meta_pressed(): boolean
        set meta_pressed(value: boolean)
    }
    class InspectorDock extends VBoxContainer {
        constructor(identifier?: any)
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
        constructor(identifier?: any)
    }
    /** Placeholder for the root [Node] of a [PackedScene].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_instanceplaceholder.html  
     */
    class InstancePlaceholder extends Node {
        constructor(identifier?: any)
        /** Returns the list of properties that will be applied to the node when [method create_instance] is called.  
         *  If [param with_order] is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).  
         */
        get_stored_values(with_order: boolean = false): Dictionary
        
        /** Call this method to actually load in the node. The created node will be placed as a sibling  *above*  the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.  
         *      
         *  **Note:** [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.  
         */
        create_instance(replace: boolean = false, custom_scene: PackedScene = <any> {} /*compound.type from nil*/): Node
        
        /** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
        get_instance_path(): string
    }
    /** Creates an idle interval in a [Tween] animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_intervaltweener.html  
     */
    class IntervalTweener extends Tweener {
        constructor(identifier?: any)
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
    /** A vertical list of selectable items with one or multiple columns.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_itemlist.html  
     */
    class ItemList extends Control {
        constructor(identifier?: any)
        /** Adds an item to the item list with specified text. Returns the index of an added item.  
         *  Specify an [param icon], or use `null` as the [param icon] for a list item with no icon.  
         *  If selectable is `true`, the list item will be selectable.  
         */
        add_item(text: string, icon: Texture2D = <any> {} /*compound.type from nil*/, selectable: boolean = true): int64
        
        /** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
        add_icon_item(icon: Texture2D, selectable: boolean = true): int64
        
        /** Sets text of the item associated with the specified index. */
        set_item_text(idx: int64, text: string): void
        
        /** Returns the text associated with the specified index. */
        get_item_text(idx: int64): string
        
        /** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
        set_item_icon(idx: int64, icon: Texture2D): void
        
        /** Returns the icon associated with the specified index. */
        get_item_icon(idx: int64): Texture2D
        
        /** Sets item's text base writing direction. */
        set_item_text_direction(idx: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        get_item_text_direction(idx: int64): Control.TextDirection
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_item_language(idx: int64, language: string): void
        
        /** Returns item's text language code. */
        get_item_language(idx: int64): string
        
        /** Sets whether the item icon will be drawn transposed. */
        set_item_icon_transposed(idx: int64, transposed: boolean): void
        
        /** Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
        is_item_icon_transposed(idx: int64): boolean
        
        /** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
        set_item_icon_region(idx: int64, rect: Rect2): void
        
        /** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
        get_item_icon_region(idx: int64): Rect2
        
        /** Sets a modulating [Color] of the item associated with the specified index. */
        set_item_icon_modulate(idx: int64, modulate: Color): void
        
        /** Returns a [Color] modulating item's icon at the specified index. */
        get_item_icon_modulate(idx: int64): Color
        
        /** Allows or disallows selection of the item associated with the specified index. */
        set_item_selectable(idx: int64, selectable: boolean): void
        
        /** Returns `true` if the item at the specified index is selectable. */
        is_item_selectable(idx: int64): boolean
        
        /** Disables (or enables) the item at the specified index.  
         *  Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).  
         */
        set_item_disabled(idx: int64, disabled: boolean): void
        
        /** Returns `true` if the item at the specified index is disabled. */
        is_item_disabled(idx: int64): boolean
        
        /** Sets a value (of any type) to be stored with the item associated with the specified index. */
        set_item_metadata(idx: int64, metadata: any): void
        
        /** Returns the metadata value of the specified index. */
        get_item_metadata(idx: int64): any
        
        /** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_bg_color(idx: int64, custom_bg_color: Color): void
        
        /** Returns the custom background color of the item specified by [param idx] index. */
        get_item_custom_bg_color(idx: int64): Color
        
        /** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_fg_color(idx: int64, custom_fg_color: Color): void
        
        /** Returns the custom foreground color of the item specified by [param idx] index. */
        get_item_custom_fg_color(idx: int64): Color
        
        /** Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is `true` the last column expands to fill the rest of the row.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        get_item_rect(idx: int64, expand: boolean = true): Rect2
        
        /** Sets whether the tooltip hint is enabled for specified item index. */
        set_item_tooltip_enabled(idx: int64, enable: boolean): void
        
        /** Returns `true` if the tooltip is enabled for specified item index. */
        is_item_tooltip_enabled(idx: int64): boolean
        
        /** Sets the tooltip hint for the item associated with the specified index. */
        set_item_tooltip(idx: int64, tooltip: string): void
        
        /** Returns the tooltip hint associated with the specified index. */
        get_item_tooltip(idx: int64): string
        
        /** Select the item at the specified index.  
         *      
         *  **Note:** This method does not trigger the item selection signal.  
         */
        select(idx: int64, single: boolean = true): void
        
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: int64): void
        
        /** Ensures there are no items selected. */
        deselect_all(): void
        
        /** Returns `true` if the item at the specified index is currently selected. */
        is_selected(idx: int64): boolean
        
        /** Returns an array with the indexes of the selected items. */
        get_selected_items(): PackedInt32Array
        
        /** Moves item from index [param from_idx] to [param to_idx]. */
        move_item(from_idx: int64, to_idx: int64): void
        set_item_count(count: int64): void
        get_item_count(): int64
        
        /** Removes the item specified by [param idx] index from the list. */
        remove_item(idx: int64): void
        
        /** Removes all items from the list. */
        clear(): void
        
        /** Sorts items in the list by their text. */
        sort_items_by_text(): void
        set_fixed_column_width(width: int64): void
        get_fixed_column_width(): int64
        set_same_column_width(enable: boolean): void
        is_same_column_width(): boolean
        set_max_text_lines(lines: int64): void
        get_max_text_lines(): int64
        set_max_columns(amount: int64): void
        get_max_columns(): int64
        set_select_mode(mode: ItemList.SelectMode): void
        get_select_mode(): ItemList.SelectMode
        set_icon_mode(mode: ItemList.IconMode): void
        get_icon_mode(): ItemList.IconMode
        set_fixed_icon_size(size: Vector2i): void
        get_fixed_icon_size(): Vector2i
        set_icon_scale(scale: float64): void
        get_icon_scale(): float64
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
        get_item_at_position(position: Vector2, exact: boolean = false): int64
        
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
        get select_mode(): int64
        set select_mode(value: int64)
        
        /** If `true`, the currently selected item can be selected again. */
        get allow_reselect(): boolean
        set allow_reselect(value: boolean)
        
        /** If `true`, right mouse button click can select items. */
        get allow_rmb_select(): boolean
        set allow_rmb_select(value: boolean)
        
        /** If `true`, allows navigating the [ItemList] with letter keys through incremental search. */
        get allow_search(): boolean
        set allow_search(value: boolean)
        
        /** Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.  
         *      
         *  **Note:** This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.  
         */
        get max_text_lines(): int64
        set max_text_lines(value: int64)
        
        /** If `true`, the control will automatically resize the height to fit its content. */
        get auto_height(): boolean
        set auto_height(value: boolean)
        
        /** Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get text_overrun_behavior(): int64
        set text_overrun_behavior(value: int64)
        
        /** The number of items currently in the list. */
        get item_count(): any /*Items,item_*/
        set item_count(value: any /*Items,item_*/)
        
        /** Maximum columns the list will have.  
         *  If greater than zero, the content will be split among the specified columns.  
         *  A value of zero means unlimited columns, i.e. all items will be put in the same row.  
         */
        get max_columns(): int64
        set max_columns(value: int64)
        
        /** Whether all columns will have the same width.  
         *  If `true`, the width is equal to the largest column width of all columns.  
         */
        get same_column_width(): boolean
        set same_column_width(value: boolean)
        
        /** The width all columns will be adjusted to.  
         *  A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.  
         */
        get fixed_column_width(): int64
        set fixed_column_width(value: int64)
        
        /** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
        get icon_mode(): int64
        set icon_mode(value: int64)
        
        /** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
        get icon_scale(): float64
        set icon_scale(value: float64)
        
        /** The size all icons will be adjusted to.  
         *  If either X or Y component is not greater than zero, icon size won't be affected.  
         */
        get fixed_icon_size(): Vector2i
        set fixed_icon_size(value: Vector2i)
        
        /** Triggered when specified item has been selected.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly item_selected: Signal // index: int64 => void
        
        /** Triggered when any mouse click is issued within the rect of the list but on empty space. */
        readonly empty_clicked: Signal // at_position: Vector2, mouse_button_index: int64 => void
        
        /** Triggered when specified list item has been clicked with any mouse button.  
         *  The click position is also provided to allow appropriate popup of context menus at the correct location.  
         */
        readonly item_clicked: Signal // index: int64, at_position: Vector2, mouse_button_index: int64 => void
        
        /** Triggered when a multiple selection is altered on a list allowing multiple selection. */
        readonly multi_selected: Signal // index: int64, selected: boolean => void
        
        /** Triggered when specified list item is activated via double-clicking or by pressing [kbd]Enter[/kbd]. */
        readonly item_activated: Signal // index: int64 => void
    }
    /** Singleton that connects the engine with Android plugins to interface with native Android code.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_jnisingleton.html  
     */
    class JNISingleton extends Object {
        constructor(identifier?: any)
    }
    /** Helper class for creating and parsing JSON data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_json.html  
     */
    class JSON extends Resource {
        constructor(identifier?: any)
        /** Converts a [Variant] var to JSON text and returns the result. Useful for serializing data to store or send over the network.  
         *      
         *  **Note:** The JSON specification does not define integer or float types, but only a  *number*  type. Therefore, converting a Variant to JSON text will convert all numerical values to [float] types.  
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
        parse(json_text: string, keep_text: boolean = false): Error
        get_data(): any
        set_data(data: any): void
        
        /** Return the text parsed by [method parse] as long as the function is instructed to keep it. */
        get_parsed_text(): string
        
        /** Returns `0` if the last call to [method parse] was successful, or the line number where the parse failed. */
        get_error_line(): int64
        
        /** Returns an empty string if the last call to [method parse] was successful, or the error message if it failed. */
        get_error_message(): string
        
        /** Contains the parsed JSON data in [Variant] form. */
        get data(): any
        set data(value: any)
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
    /** A helper to handle dictionaries which look like JSONRPC documents.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_jsonrpc.html  
     */
    class JSONRPC extends Object {
        constructor(identifier?: any)
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
        make_response_error(code: int64, message: string, id: any = <any> {} /*compound.type from nil*/): Dictionary
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_javaclass.html */
    class JavaClass extends RefCounted {
        constructor(identifier?: any)
    }
    /** A wrapper class for web native JavaScript objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_javascriptobject.html  
     */
    class JavaScriptObject extends RefCounted {
        constructor(identifier?: any)
    }
    /** Abstract base class for all 2D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_joint2d.html  
     */
    class Joint2D extends Node2D {
        constructor(identifier?: any)
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_bias(bias: float64): void
        get_bias(): float64
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        
        /** Returns the joint's [RID]. */
        get_rid(): RID
        
        /** The first body attached to the joint. Must derive from [PhysicsBody2D]. */
        get node_a(): NodePath
        set node_a(value: NodePath)
        
        /** The second body attached to the joint. Must derive from [PhysicsBody2D]. */
        get node_b(): NodePath
        set node_b(value: NodePath)
        
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.  
         */
        get bias(): float64
        set bias(value: float64)
        
        /** If `true`, [member node_a] and [member node_b] can not collide. */
        get disable_collision(): boolean
        set disable_collision(value: boolean)
    }
    /** Abstract base class for all 3D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_joint3d.html  
     */
    class Joint3D extends Node3D {
        constructor(identifier?: any)
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_solver_priority(priority: int64): void
        get_solver_priority(): int64
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        
        /** Returns the joint's [RID]. */
        get_rid(): RID
        
        /** The node attached to the first side (A) of the joint. */
        get node_a(): NodePath
        set node_a(value: NodePath)
        
        /** The node attached to the second side (B) of the joint. */
        get node_b(): NodePath
        set node_b(value: NodePath)
        
        /** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
        get solver_priority(): int64
        set solver_priority(value: int64)
        
        /** If `true`, the two bodies of the nodes are not able to collide with each other. */
        get exclude_nodes_from_collision(): boolean
        set exclude_nodes_from_collision(value: boolean)
    }
    class Joint3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Holds collision data from the movement of a [PhysicsBody2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_kinematiccollision2d.html  
     */
    class KinematicCollision2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the point of collision in global coordinates. */
        get_position(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision. */
        get_normal(): Vector2
        
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector2
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
        get_angle(up_direction: Vector2 = new Vector2(0, -1)): float64
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): float64
        
        /** Returns the moving object's colliding shape. */
        get_local_shape(): Object
        
        /** Returns the colliding body's attached [Object]. */
        get_collider(): Object
        
        /** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
        get_collider_id(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
        get_collider_rid(): RID
        
        /** Returns the colliding body's shape. */
        get_collider_shape(): Object
        
        /** Returns the colliding body's shape index. See [CollisionObject2D]. */
        get_collider_shape_index(): int64
        
        /** Returns the colliding body's velocity. */
        get_collider_velocity(): Vector2
    }
    /** Holds collision data from the movement of a [PhysicsBody3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_kinematiccollision3d.html  
     */
    class KinematicCollision3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): float64
        
        /** Returns the number of detected collisions. */
        get_collision_count(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
        get_position(collision_index: int64 = 0): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
        get_normal(collision_index: int64 = 0): Vector3
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
        get_angle(collision_index: int64 = 0, up_direction: Vector3 = Vector3.ZERO): float64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
        get_local_shape(collision_index: int64 = 0): Object
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
        get_collider(collision_index: int64 = 0): Object
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
        get_collider_id(collision_index: int64 = 0): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
        get_collider_rid(collision_index: int64 = 0): RID
        
        /** Returns the colliding body's shape given a collision index (the deepest collision by default). */
        get_collider_shape(collision_index: int64 = 0): Object
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
        get_collider_shape_index(collision_index: int64 = 0): int64
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
        get_collider_velocity(collision_index: int64 = 0): Vector3
    }
    /** A control for displaying plain text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_label.html  
     */
    class Label extends Control {
        constructor(identifier?: any)
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
        get_line_height(line: int64 = -1): int64
        
        /** Returns the number of lines of text the Label has. */
        get_line_count(): int64
        
        /** Returns the number of lines shown. Useful if the [Label]'s height cannot currently display all lines. */
        get_visible_line_count(): int64
        
        /** Returns the total number of printable characters in the text (excluding spaces and newlines). */
        get_total_character_count(): int64
        set_visible_characters(amount: int64): void
        get_visible_characters(): int64
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: float64): void
        get_visible_ratio(): float64
        set_lines_skipped(lines_skipped: int64): void
        get_lines_skipped(): int64
        set_max_lines_visible(lines_visible: int64): void
        get_max_lines_visible(): int64
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** A [LabelSettings] resource that can be shared between multiple [Label] nodes. Takes priority over theme properties. */
        get label_settings(): LabelSettings
        set label_settings(value: LabelSettings)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        get horizontal_alignment(): int64
        set horizontal_alignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [enum VerticalAlignment] constants. */
        get vertical_alignment(): int64
        set vertical_alignment(value: int64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrap_mode(): int64
        set autowrap_mode(value: int64)
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        get justification_flags(): int64
        set justification_flags(value: int64)
        
        /** If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally. */
        get clip_text(): boolean
        set clip_text(value: boolean)
        
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get text_overrun_behavior(): int64
        set text_overrun_behavior(value: int64)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Aligns text to the given tab-stops. */
        get tab_stops(): PackedFloat32Array
        set tab_stops(value: PackedFloat32Array)
        
        /** The number of the lines ignored and not displayed from the start of the [member text] value. */
        get lines_skipped(): int64
        set lines_skipped(value: int64)
        
        /** Limits the lines of text the node shows on screen. */
        get max_lines_visible(): int64
        set max_lines_visible(value: int64)
        
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
            
            /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). This mode is also known as  *alpha testing*  or  *1-bit transparency* .  
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
    /** A node for displaying plain text in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_label3d.html  
     */
    class Label3D extends GeometryInstance3D {
        constructor(identifier?: any)
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
        set_render_priority(priority: int64): void
        get_render_priority(): int64
        set_outline_render_priority(priority: int64): void
        get_outline_render_priority(): int64
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: int64): void
        get_font_size(): int64
        set_outline_size(outline_size: int64): void
        get_outline_size(): int64
        set_line_spacing(line_spacing: float64): void
        get_line_spacing(): float64
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_width(width: float64): void
        get_width(): float64
        set_pixel_size(pixel_size: float64): void
        get_pixel_size(): float64
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
        set_alpha_scissor_threshold(threshold: float64): void
        get_alpha_scissor_threshold(): float64
        set_alpha_hash_scale(threshold: float64): void
        get_alpha_hash_scale(): float64
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: float64): void
        get_alpha_antialiasing_edge(): float64
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        
        /** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
        generate_triangle_mesh(): TriangleMesh
        
        /** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
        get pixel_size(): float64
        set pixel_size(value: float64)
        
        /** The text drawing offset (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The billboard mode to use for the label. See [enum BaseMaterial3D.BillboardMode] for possible values. */
        get billboard(): int64
        set billboard(value: int64)
        
        /** The alpha cutting mode to use for the sprite. See [enum AlphaCutMode] for possible values. */
        get alpha_cut(): int64
        set alpha_cut(value: int64)
        
        /** Threshold at which the alpha scissor will discard values. */
        get alpha_scissor_threshold(): float64
        set alpha_scissor_threshold(value: float64)
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        get alpha_hash_scale(): float64
        set alpha_hash_scale(value: float64)
        
        /** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
        get alpha_antialiasing_mode(): int64
        set alpha_antialiasing_mode(value: int64)
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        get alpha_antialiasing_edge(): float64
        set alpha_antialiasing_edge(value: float64)
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options. */
        get texture_filter(): int64
        set texture_filter(value: int64)
        
        /** Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get render_priority(): int64
        set render_priority(value: int64)
        
        /** Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get outline_render_priority(): int64
        set outline_render_priority(value: int64)
        
        /** Text [Color] of the [Label3D]. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The tint of text outline. */
        get outline_modulate(): Color
        set outline_modulate(value: Color)
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): Font
        set font(value: Font)
        
        /** Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.  
         *  Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.  
         */
        get font_size(): int64
        set font_size(value: int64)
        
        /** Text outline size. */
        get outline_size(): int64
        set outline_size(value: int64)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        get horizontal_alignment(): int64
        set horizontal_alignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        get vertical_alignment(): int64
        set vertical_alignment(value: int64)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Vertical space between lines in multiline [Label3D]. */
        get line_spacing(): float64
        set line_spacing(value: float64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrap_mode(): int64
        set autowrap_mode(value: int64)
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        get justification_flags(): int64
        set justification_flags(value: int64)
        
        /** Text width (in pixels), used for autowrap and fill alignment. */
        get width(): float64
        set width(value: float64)
        
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
    }
    class Label3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Provides common settings to customize the text in a [Label].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_labelsettings.html  
     */
    class LabelSettings extends Resource {
        constructor(identifier?: any)
        set_line_spacing(spacing: float64): void
        get_line_spacing(): float64
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: int64): void
        get_font_size(): int64
        set_font_color(color: Color): void
        get_font_color(): Color
        set_outline_size(size: int64): void
        get_outline_size(): int64
        set_outline_color(color: Color): void
        get_outline_color(): Color
        set_shadow_size(size: int64): void
        get_shadow_size(): int64
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        
        /** Vertical space between lines when the text is multiline. */
        get line_spacing(): float64
        set line_spacing(value: float64)
        
        /** [Font] used for the text. */
        get font(): Font
        set font(value: Font)
        
        /** Size of the text. */
        get font_size(): int64
        set font_size(value: int64)
        
        /** Color of the text. */
        get font_color(): Color
        set font_color(value: Color)
        
        /** Text outline size. */
        get outline_size(): int64
        set outline_size(value: int64)
        
        /** The color of the outline. */
        get outline_color(): Color
        set outline_color(value: Color)
        
        /** Size of the shadow effect. */
        get shadow_size(): int64
        set shadow_size(value: int64)
        
        /** Color of the shadow effect. If alpha is `0`, no shadow will be drawn. */
        get shadow_color(): Color
        set shadow_color(value: Color)
        
        /** Offset of the shadow effect, in pixels. */
        get shadow_offset(): Vector2
        set shadow_offset(value: Vector2)
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
    /** Casts light in a 2D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_light2d.html  
     */
    class Light2D extends Node2D {
        constructor(identifier?: any)
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_color(color: Color): void
        get_color(): Color
        set_energy(energy: float64): void
        get_energy(): float64
        set_z_range_min(z: int64): void
        get_z_range_min(): int64
        set_z_range_max(z: int64): void
        get_z_range_max(): int64
        set_layer_range_min(layer: int64): void
        get_layer_range_min(): int64
        set_layer_range_max(layer: int64): void
        get_layer_range_max(): int64
        set_item_cull_mask(item_cull_mask: int64): void
        get_item_cull_mask(): int64
        set_item_shadow_cull_mask(item_shadow_cull_mask: int64): void
        get_item_shadow_cull_mask(): int64
        set_shadow_enabled(enabled: boolean): void
        is_shadow_enabled(): boolean
        set_shadow_smooth(smooth: float64): void
        get_shadow_smooth(): float64
        set_shadow_filter(filter: Light2D.ShadowFilter): void
        get_shadow_filter(): Light2D.ShadowFilter
        set_shadow_color(shadow_color: Color): void
        get_shadow_color(): Color
        set_blend_mode(mode: Light2D.BlendMode): void
        get_blend_mode(): Light2D.BlendMode
        
        /** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        set_height(height: float64): void
        
        /** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        get_height(): float64
        
        /** If `true`, Light2D will emit light. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, Light2D will only appear when editing the scene. */
        get editor_only(): boolean
        set editor_only(value: boolean)
        
        /** The Light2D's [Color]. */
        get color(): Color
        set color(value: Color)
        
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        get energy(): float64
        set energy(value: float64)
        
        /** The Light2D's blend mode. See [enum BlendMode] constants for values. */
        get blend_mode(): int64
        set blend_mode(value: int64)
        
        /** Minimum `z` value of objects that are affected by the Light2D. */
        get range_z_min(): int64
        set range_z_min(value: int64)
        
        /** Maximum `z` value of objects that are affected by the Light2D. */
        get range_z_max(): int64
        set range_z_max(value: int64)
        
        /** Minimum layer value of objects that are affected by the Light2D. */
        get range_layer_min(): int64
        set range_layer_min(value: int64)
        
        /** Maximum layer value of objects that are affected by the Light2D. */
        get range_layer_max(): int64
        set range_layer_max(value: int64)
        
        /** The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.  
         *      
         *  **Note:** [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].  
         */
        get range_item_cull_mask(): int64
        set range_item_cull_mask(value: int64)
        
        /** If `true`, the Light2D will cast shadows. */
        get shadow_enabled(): boolean
        set shadow_enabled(value: boolean)
        
        /** [Color] of shadows cast by the Light2D. */
        get shadow_color(): Color
        set shadow_color(value: Color)
        
        /** Shadow filter type. See [enum ShadowFilter] for possible values. */
        get shadow_filter(): int64
        set shadow_filter(value: int64)
        
        /** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
        get shadow_filter_smooth(): float64
        set shadow_filter_smooth(value: float64)
        
        /** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can  *receive*  the light. */
        get shadow_item_cull_mask(): int64
        set shadow_item_cull_mask(value: int64)
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
             *  **Note:** Hiding a light does  *not*  affect baking [LightmapGI]. Hiding a light will still affect baking [VoxelGI] and SDFGI (see [member Environment.sdfgi_enabled).  
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
    /** Provides a base class for different kinds of light nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_light3d.html  
     */
    class Light3D extends VisualInstance3D {
        constructor(identifier?: any)
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        
        /** Sets the value of the specified [enum Light3D.Param] parameter. */
        set_param(param: Light3D.Param, value: float64): void
        
        /** Returns the value of the specified [enum Light3D.Param] parameter. */
        get_param(param: Light3D.Param): float64
        set_shadow(enabled: boolean): void
        has_shadow(): boolean
        set_negative(enabled: boolean): void
        is_negative(): boolean
        set_cull_mask(cull_mask: int64): void
        get_cull_mask(): int64
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: float64): void
        get_distance_fade_begin(): float64
        set_distance_fade_shadow(distance: float64): void
        get_distance_fade_shadow(): float64
        set_distance_fade_length(distance: float64): void
        get_distance_fade_length(): float64
        set_color(color: Color): void
        get_color(): Color
        set_shadow_reverse_cull_face(enable: boolean): void
        get_shadow_reverse_cull_face(): boolean
        set_bake_mode(bake_mode: Light3D.BakeMode): void
        get_bake_mode(): Light3D.BakeMode
        set_projector(projector: Texture2D): void
        get_projector(): Texture2D
        set_temperature(temperature: float64): void
        get_temperature(): float64
        
        /** Returns the [Color] of an idealized blackbody at the given [member light_temperature]. This value is calculated internally based on the [member light_temperature]. This [Color] is multiplied by [member light_color] before being sent to the [RenderingServer]. */
        get_correlated_color(): Color
        
        /** Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [member light_color].  
         *  The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.  
         */
        get light_temperature(): float64
        set light_temperature(value: float64)
        
        /** The light's color. An  *overbright*  color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
        get light_color(): Color
        set light_color(value: Color)
        
        /** [Texture2D] projected by light. [member shadow_enabled] must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get light_projector(): Texture2D
        set light_projector(value: Texture2D)
        
        /** If `true`, the light's effect is reversed, darkening areas and casting bright shadows. */
        get light_negative(): boolean
        set light_negative(value: boolean)
        
        /** The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See [enum BakeMode].  
         *      
         *  **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See [member GeometryInstance3D.gi_mode].  
         */
        get light_bake_mode(): int64
        set light_bake_mode(value: int64)
        
        /** The light will affect objects in the selected layers. */
        get light_cull_mask(): int64
        set light_cull_mask(value: int64)
        
        /** If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [member distance_fade_enabled] to hide the light when far away from the [Camera3D]. */
        get shadow_enabled(): boolean
        set shadow_enabled(value: boolean)
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
        get shadow_reverse_cull_face(): boolean
        set shadow_reverse_cull_face(value: boolean)
        
        /** If `true`, the light will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. This acts as a form of level of detail (LOD). The light will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distance_fade_enabled(): boolean
        set distance_fade_enabled(value: boolean)
        
        /** The distance from the camera at which the light begins to fade away (in 3D units).  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distance_fade_begin(): float64
        set distance_fade_begin(value: float64)
        
        /** The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [member distance_fade_begin] + [member distance_fade_length] to further improve performance, as shadow rendering is often more expensive than light rendering itself.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D], and only when [member shadow_enabled] is `true`.  
         */
        get distance_fade_shadow(): float64
        set distance_fade_shadow(value: float64)
        
        /** Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distance_fade_length(): float64
        set distance_fade_length(value: float64)
        
        /** If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in [LightmapGI] regardless of its [member light_bake_mode]. */
        get editor_only(): boolean
        set editor_only(value: boolean)
    }
    class Light3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Occludes light cast by a Light2D, casting shadows.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightoccluder2d.html  
     */
    class LightOccluder2D extends Node2D {
        constructor(identifier?: any)
        set_occluder_polygon(polygon: OccluderPolygon2D): void
        get_occluder_polygon(): OccluderPolygon2D
        set_occluder_light_mask(mask: int64): void
        get_occluder_light_mask(): int64
        set_as_sdf_collision(enable: boolean): void
        is_set_as_sdf_collision(): boolean
        
        /** The [OccluderPolygon2D] used to compute the shadow. */
        get occluder(): OccluderPolygon2D
        set occluder(value: OccluderPolygon2D)
        
        /** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
        get sdf_collision(): boolean
        set sdf_collision(value: boolean)
        
        /** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
        get occluder_light_mask(): int64
        set occluder_light_mask(value: int64)
    }
    class LightOccluder2DEditor extends AbstractPolygon2DEditor {
        constructor(identifier?: any)
    }
    class LightOccluder2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
        constructor(identifier?: any)
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
             *  **Note:** If baking lightmaps in a scene with no [WorldEnvironment] node, this will act like [constant ENVIRONMENT_MODE_DISABLED]. The editor's preview sky and sun is  *not*  taken into account by [LightmapGI] when baking lightmaps.  
             */
            ENVIRONMENT_MODE_SCENE = 1,
            
            /** Use [member environment_custom_sky] as a source of environment lighting when baking lightmaps. */
            ENVIRONMENT_MODE_CUSTOM_SKY = 2,
            
            /** Use [member environment_custom_color] multiplied by [member environment_custom_energy] as a constant source of environment lighting when baking lightmaps. */
            ENVIRONMENT_MODE_CUSTOM_COLOR = 3,
        }
    }
    /** Computes and stores baked lightmaps for fast global illumination.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightmapgi.html  
     */
    class LightmapGI extends VisualInstance3D {
        constructor(identifier?: any)
        set_light_data(data: LightmapGIData): void
        get_light_data(): LightmapGIData
        set_bake_quality(bake_quality: LightmapGI.BakeQuality): void
        get_bake_quality(): LightmapGI.BakeQuality
        set_bounces(bounces: int64): void
        get_bounces(): int64
        set_bounce_indirect_energy(bounce_indirect_energy: float64): void
        get_bounce_indirect_energy(): float64
        set_generate_probes(subdivision: LightmapGI.GenerateProbes): void
        get_generate_probes(): LightmapGI.GenerateProbes
        set_bias(bias: float64): void
        get_bias(): float64
        set_environment_mode(mode: LightmapGI.EnvironmentMode): void
        get_environment_mode(): LightmapGI.EnvironmentMode
        set_environment_custom_sky(sky: Sky): void
        get_environment_custom_sky(): Sky
        set_environment_custom_color(color: Color): void
        get_environment_custom_color(): Color
        set_environment_custom_energy(energy: float64): void
        get_environment_custom_energy(): float64
        set_max_texture_size(max_texture_size: int64): void
        get_max_texture_size(): int64
        set_use_denoiser(use_denoiser: boolean): void
        is_using_denoiser(): boolean
        set_denoiser_strength(denoiser_strength: float64): void
        get_denoiser_strength(): float64
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
        get quality(): int64
        set quality(value: int64)
        
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked. */
        get bounces(): int64
        set bounces(value: int64)
        
        /** The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of `1.0` represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [member bounces] then increasing [member bounce_indirect_energy].  
         *      
         *  **Note:** [member bounce_indirect_energy] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get bounce_indirect_energy(): float64
        set bounce_indirect_energy(value: float64)
        
        /** If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.  
         *      
         *  **Note:** The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.  
         */
        get directional(): boolean
        set directional(value: boolean)
        
        /** If `true`, a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [member use_texture_for_bounces] at its default value of `true` if unsure.  
         *      
         *  **Note:** [member use_texture_for_bounces] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get use_texture_for_bounces(): boolean
        set use_texture_for_bounces(value: boolean)
        
        /** If `true`, ignore environment lighting when baking lightmaps. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image. */
        get use_denoiser(): boolean
        set use_denoiser(value: boolean)
        
        /** The strength of denoising step applied to the generated lightmaps. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        get denoiser_strength(): float64
        set denoiser_strength(value: float64)
        
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        get bias(): float64
        set bias(value: float64)
        
        /** The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [member max_texture_size] at its default value of `16384` if unsure. */
        get max_texture_size(): int64
        set max_texture_size(value: int64)
        
        /** The environment mode to use when baking lightmaps. */
        get environment_mode(): int64
        set environment_mode(value: int64)
        
        /** The sky to use as a source of environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_SKY]. */
        get environment_custom_sky(): Sky
        set environment_custom_sky(value: Sky)
        
        /** The color to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environment_custom_color(): Color
        set environment_custom_color(value: Color)
        
        /** The color multiplier to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environment_custom_energy(): float64
        set environment_custom_energy(value: float64)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [LightmapGI] will have banding artifacts or may have over-exposure artifacts. */
        get camera_attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The level of subdivision to use when automatically generating [LightmapProbe]s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.  
         *      
         *  **Note:** Automatically generated [LightmapProbe]s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.  
         *      
         *  **Note:** Regardless of [member generate_probes_subdiv], direct lighting on dynamic objects is always applied using [Light3D] nodes in real-time.  
         */
        get generate_probes_subdiv(): int64
        set generate_probes_subdiv(value: int64)
        
        /** The [LightmapGIData] associated to this [LightmapGI] node. This resource is automatically created after baking, and is not meant to be created manually. */
        get light_data(): LightmapGIData
        set light_data(value: LightmapGIData)
    }
    /** Contains baked lightmap and dynamic object probe data for [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightmapgidata.html  
     */
    class LightmapGIData extends Resource {
        constructor(identifier?: any)
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
        add_user(path: NodePath, uv_scale: Rect2, slice_index: int64, sub_instance: int64): void
        
        /** Returns the number of objects that are considered baked within this [LightmapGIData]. */
        get_user_count(): int64
        
        /** Returns the [NodePath] of the baked object at index [param user_idx]. */
        get_user_path(user_idx: int64): NodePath
        
        /** Clear all objects that are considered baked within this [LightmapGIData]. */
        clear_users(): void
        _set_probe_data(data: Dictionary): void
        _get_probe_data(): Dictionary
        set_light_texture(light_texture: TextureLayered): void
        get_light_texture(): TextureLayered
        _set_light_textures_data(data: Array): void
        _get_light_textures_data(): Array
        
        /** The lightmap atlas textures generated by the lightmapper. */
        get lightmap_textures(): Array
        set lightmap_textures(value: Array)
        get uses_spherical_harmonics(): boolean
        set uses_spherical_harmonics(value: boolean)
        get user_data(): Array
        set user_data(value: Array)
        get probe_data(): Dictionary
        set probe_data(value: Dictionary)
        
        /** The lightmap atlas texture generated by the lightmapper.  
         *   *Deprecated.*  The lightmap atlas can now have multiple textures. See [member lightmap_textures].  
         */
        get light_texture(): TextureLayered
        set light_texture(value: TextureLayered)
        get light_textures(): Array
        set light_textures(value: Array)
    }
    class LightmapGIEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
        _bake(): void
    }
    class LightmapGIGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightmapprobe.html  
     */
    class LightmapProbe extends Node3D {
        constructor(identifier?: any)
    }
    class LightmapProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Abstract class extended by lightmappers, for use in [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightmapper.html  
     */
    class Lightmapper extends RefCounted {
        constructor(identifier?: any)
    }
    /** The built-in GPU-based lightmapper for use with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lightmapperrd.html  
     */
    class LightmapperRD extends Lightmapper {
        constructor(identifier?: any)
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
    /** A 2D polyline that can optionally be textured.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_line2d.html  
     */
    class Line2D extends Node2D {
        constructor(identifier?: any)
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        
        /** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
        set_point_position(index: int64, position: Vector2): void
        
        /** Returns the position of the point at index [param index]. */
        get_point_position(index: int64): Vector2
        
        /** Returns the number of points in the polyline. */
        get_point_count(): int64
        
        /** Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].  
         */
        add_point(position: Vector2, index: int64 = -1): void
        
        /** Removes the point at index [param index] from the polyline. */
        remove_point(index: int64): void
        
        /** Removes all points from the polyline, making it empty. */
        clear_points(): void
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_width(width: float64): void
        get_width(): float64
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
        set_sharp_limit(limit: float64): void
        get_sharp_limit(): float64
        set_round_precision(precision: int64): void
        get_round_precision(): int64
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        
        /** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
        get points(): PackedVector2Array
        set points(value: PackedVector2Array)
        
        /** If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.  
         *      
         *  **Note:** The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.  
         *      
         *  **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.  
         */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The polyline's width. */
        get width(): float64
        set width(value: float64)
        
        /** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. */
        get width_curve(): Curve
        set width_curve(value: Curve)
        
        /** The color of the polyline. Will not be used if a gradient is set. */
        get default_color(): Color
        set default_color(value: Color)
        
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** The style to render the [member texture] of the polyline. Use [enum LineTextureMode] constants. */
        get texture_mode(): int64
        set texture_mode(value: int64)
        
        /** The style of the connections between segments of the polyline. Use [enum LineJointMode] constants. */
        get joint_mode(): int64
        set joint_mode(value: int64)
        
        /** The style of the beginning of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        get begin_cap_mode(): int64
        set begin_cap_mode(value: int64)
        
        /** The style of the end of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        get end_cap_mode(): int64
        set end_cap_mode(value: int64)
        
        /** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
        get sharp_limit(): float64
        set sharp_limit(value: float64)
        
        /** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
        get round_precision(): int64
        set round_precision(value: int64)
        
        /** If `true`, the polyline's border will be anti-aliased.  
         *      
         *  **Note:** [Line2D] is not accelerated by batching when being anti-aliased.  
         */
        get antialiased(): boolean
        set antialiased(value: boolean)
    }
    class Line2DEditor extends AbstractPolygon2DEditor {
        constructor(identifier?: any)
    }
    class Line2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
        constructor(identifier?: any)
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
    /** An input field for single-line text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_lineedit.html  
     */
    class LineEdit extends Control {
        constructor(identifier?: any)
        _text_changed(): void
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.  
         *    
         */
        select(from: int64 = 0, to: int64 = -1): void
        
        /** Selects the whole [String]. */
        select_all(): void
        
        /** Clears the current selection. */
        deselect(): void
        
        /** Returns `true` if the user has selected text. */
        has_selection(): boolean
        
        /** Returns the text inside the selection. */
        get_selected_text(): string
        
        /** Returns the selection begin column. */
        get_selection_from_column(): int64
        
        /** Returns the selection end column. */
        get_selection_to_column(): int64
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
        set_caret_column(position: int64): void
        get_caret_column(): int64
        
        /** Returns the scroll offset due to [member caret_column], as a number of characters. */
        get_scroll_offset(): float64
        set_expand_to_text_length_enabled(enabled: boolean): void
        is_expand_to_text_length_enabled(): boolean
        set_caret_blink_enabled(enabled: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_caret_force_displayed(enabled: boolean): void
        is_caret_force_displayed(): boolean
        set_caret_blink_interval(interval: float64): void
        get_caret_blink_interval(): float64
        set_max_length(chars: int64): void
        get_max_length(): int64
        
        /** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
        insert_text_at_caret(text: string): void
        
        /** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
        delete_char_at_caret(): void
        
        /** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
        delete_text(from_column: int64, to_column: int64): void
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_secret(enabled: boolean): void
        is_secret(): boolean
        set_secret_character(character: string): void
        get_secret_character(): string
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: int64): void
        
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
        get text(): string
        set text(value: string)
        
        /** Text shown when the [LineEdit] is empty. It is **not** the [LineEdit]'s default value (see [member text]). */
        get placeholder_text(): string
        set placeholder_text(value: string)
        
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Maximum number of characters that can be entered inside the [LineEdit]. If `0`, there is no limit.  
         *  When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting. If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as parameter.  
         *  **Example:**  
         *    
         */
        get max_length(): int64
        set max_length(value: int64)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the [LineEdit] width will increase to stay longer than the [member text]. It will **not** compress if the [member text] is shortened. */
        get expand_to_text_length(): boolean
        set expand_to_text_length(value: boolean)
        
        /** If `true`, the context menu will appear when right-clicked. */
        get context_menu_enabled(): boolean
        set context_menu_enabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is shown when focused on platforms that support it. */
        get virtual_keyboard_enabled(): boolean
        set virtual_keyboard_enabled(value: boolean)
        
        /** Specifies the type of virtual keyboard to show. */
        get virtual_keyboard_type(): int64
        set virtual_keyboard_type(value: int64)
        
        /** If `true`, the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
        get clear_button_enabled(): boolean
        set clear_button_enabled(value: boolean)
        
        /** If `false`, using shortcuts will be disabled. */
        get shortcut_keys_enabled(): boolean
        set shortcut_keys_enabled(value: boolean)
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        get middle_mouse_paste_enabled(): boolean
        set middle_mouse_paste_enabled(value: boolean)
        
        /** If `false`, it's impossible to select the text using mouse nor keyboard. */
        get selecting_enabled(): boolean
        set selecting_enabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselect_on_focus_loss_enabled(): boolean
        set deselect_on_focus_loss_enabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get drag_and_drop_selection_enabled(): boolean
        set drag_and_drop_selection_enabled(value: boolean)
        
        /** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to `false`. */
        get right_icon(): Texture2D
        set right_icon(value: Texture2D)
        
        /** If `true`, the [LineEdit] doesn't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** If `true`, control characters are displayed. */
        get draw_control_chars(): boolean
        set draw_control_chars(value: boolean)
        
        /** If `true`, the [LineEdit] will select the whole text when it gains focus. */
        get select_all_on_focus(): boolean
        set select_all_on_focus(value: boolean)
        
        /** If `true`, makes the caret blink. */
        get caret_blink(): boolean
        set caret_blink(value: boolean)
        
        /** The interval at which the caret blinks (in seconds). */
        get caret_blink_interval(): float64
        set caret_blink_interval(value: float64)
        
        /** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
        get caret_column(): int64
        set caret_column(value: int64)
        
        /** If `true`, the [LineEdit] will always show the caret, even if focus is lost. */
        get caret_force_displayed(): boolean
        set caret_force_displayed(value: boolean)
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        get caret_mid_grapheme(): boolean
        set caret_mid_grapheme(value: boolean)
        
        /** If `true`, every character is replaced with the secret character (see [member secret_character]). */
        get secret(): boolean
        set secret(value: boolean)
        
        /** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
        get secret_character(): string
        set secret_character(value: string)
        
        /** Base text writing direction. */
        get text_direction(): int64
        set text_direction(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structured_text_bidi_override(): int64
        set structured_text_bidi_override(value: int64)
        
        /** Set additional options for BiDi override. */
        get structured_text_bidi_override_options(): Array
        set structured_text_bidi_override_options(value: Array)
        
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
    /** A button that represents a link.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_linkbutton.html  
     */
    class LinkButton extends BaseButton {
        constructor(identifier?: any)
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
        get text(): string
        set text(value: string)
        
        /** The underline mode to use for the text. See [enum LinkButton.UnderlineMode] for the available modes. */
        get underline(): int64
        set underline(value: int64)
        
        /** The [url=https://en.wikipedia.org/wiki/Uniform_Resource_Identifier]URI[/url] for this [LinkButton]. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [method OS.shell_open]). HTTP and HTTPS URLs open the default web browser.  
         *  **Examples:**  
         *    
         */
        get uri(): string
        set uri(value: string)
        
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
    }
    class LocalizationEditor extends VBoxContainer {
        constructor(identifier?: any)
        update_translations(): void
        readonly localization_changed: Signal //  => void
    }
    /** Abstract base class for the game's main loop.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_mainloop.html  
     */
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
        constructor(identifier?: any)
        
        /** Called once during initialization. */
        /* gdvirtual */ _initialize(): void
        
        /** Called each physics frame with the time since the last physics frame as argument ([param delta], in seconds). Equivalent to [method Node._physics_process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         */
        /* gdvirtual */ _physics_process(delta: float64): boolean
        
        /** Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to [method Node._process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         */
        /* gdvirtual */ _process(delta: float64): boolean
        
        /** Called before the program exits. */
        /* gdvirtual */ _finalize(): void
        
        /** Emitted when a user responds to a permission request. */
        readonly on_request_permissions_result: Signal // permission: string, granted: boolean => void
    }
    /** A container that keeps a margin around its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_margincontainer.html  
     */
    class MarginContainer extends Container {
        constructor(identifier?: any)
    }
    /** Generic 2D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_marker2d.html  
     */
    class Marker2D extends Node2D {
        constructor(identifier?: any)
        set_gizmo_extents(extents: float64): void
        get_gizmo_extents(): float64
        
        /** Size of the gizmo cross that appears in the editor. */
        get gizmo_extents(): float64
        set gizmo_extents(value: float64)
    }
    /** Generic 3D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_marker3d.html  
     */
    class Marker3D extends Node3D {
        constructor(identifier?: any)
        set_gizmo_extents(extents: float64): void
        get_gizmo_extents(): float64
        
        /** Size of the gizmo cross that appears in the editor. */
        get gizmo_extents(): float64
        set gizmo_extents(value: float64)
    }
    class Marker3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Virtual base class for applying visual properties to an object, such as color and roughness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_material.html  
     */
    class Material extends Resource {
        /** Maximum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MAX = 127
        
        /** Minimum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MIN = -128
        constructor(identifier?: any)
        
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
        set_render_priority(priority: int64): void
        get_render_priority(): int64
        
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
        get render_priority(): int64
        set render_priority(value: int64)
        
        /** Sets the [Material] to be used for the next pass. This renders the object again using a different material.  
         *      
         *  **Note:** [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         */
        get next_pass(): Material
        set next_pass(value: Material)
    }
    class MaterialEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A horizontal menu bar that creates a [MenuButton] for each [PopupMenu] child.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_menubar.html  
     */
    class MenuBar extends Control {
        constructor(identifier?: any)
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        set_prefer_global_menu(enabled: boolean): void
        is_prefer_global_menu(): boolean
        
        /** Returns `true`, if system global menu is supported and used by this [MenuBar]. */
        is_native_menu(): boolean
        
        /** Returns number of menu items. */
        get_menu_count(): int64
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_start_index(enabled: int64): void
        get_start_index(): int64
        
        /** Sets menu item title. */
        set_menu_title(menu: int64, title: string): void
        
        /** Returns menu item title. */
        get_menu_title(menu: int64): string
        
        /** Sets menu item tooltip. */
        set_menu_tooltip(menu: int64, tooltip: string): void
        
        /** Returns menu item tooltip. */
        get_menu_tooltip(menu: int64): string
        
        /** If `true`, menu item is disabled. */
        set_menu_disabled(menu: int64, disabled: boolean): void
        
        /** Returns `true`, if menu item is disabled. */
        is_menu_disabled(menu: int64): boolean
        
        /** If `true`, menu item is hidden. */
        set_menu_hidden(menu: int64, hidden: boolean): void
        
        /** Returns `true`, if menu item is hidden. */
        is_menu_hidden(menu: int64): boolean
        
        /** Returns [PopupMenu] associated with menu item. */
        get_menu_popup(menu: int64): PopupMenu
        
        /** Flat [MenuBar] don't display item decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Position in the global menu to insert first [MenuBar] item at. */
        get start_index(): int64
        set start_index(value: int64)
        
        /** If `true`, when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
        get switch_on_hover(): boolean
        set switch_on_hover(value: boolean)
        
        /** If `true`, [MenuBar] will use system global menu when supported. */
        get prefer_global_menu(): boolean
        set prefer_global_menu(value: boolean)
        
        /** Base text writing direction. */
        get text_direction(): int64
        set text_direction(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
    }
    /** A button that brings up a [PopupMenu] when clicked.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_menubutton.html  
     */
    class MenuButton extends Button {
        constructor(identifier?: any)
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
        set_item_count(count: int64): void
        get_item_count(): int64
        
        /** If `true`, when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
        get switch_on_hover(): boolean
        set switch_on_hover(value: boolean)
        
        /** The number of items currently in the list. */
        get item_count(): any /*Items,popup/item_*/
        set item_count(value: any /*Items,popup/item_*/)
        
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
            
            /** [PackedInt32Array] of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the  *i* 'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.  
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
    /** A [Resource] that contains vertex array-based geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_mesh.html  
     */
    class Mesh extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override the surface count for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_surface_count(): int64
        
        /** Virtual method to override the surface array length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_array_len(index: int64): int64
        
        /** Virtual method to override the surface array index length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_array_index_len(index: int64): int64
        
        /** Virtual method to override the surface arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_arrays(index: int64): Array
        
        /** Virtual method to override the blend shape arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_blend_shape_arrays(index: int64): Array
        
        /** Virtual method to override the surface LODs for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_lods(index: int64): Dictionary
        
        /** Virtual method to override the surface format for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_format(index: int64): int64
        
        /** Virtual method to override the surface primitive type for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_primitive_type(index: int64): int64
        
        /** Virtual method to override the setting of a [param material] at the given [param index] for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_set_material(index: int64, material: Material): void
        
        /** Virtual method to override the surface material for a custom class extending [Mesh]. */
        /* gdvirtual */ _surface_get_material(index: int64): Material
        
        /** Virtual method to override the number of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_blend_shape_count(): int64
        
        /** Virtual method to override the retrieval of blend shape names for a custom class extending [Mesh]. */
        /* gdvirtual */ _get_blend_shape_name(index: int64): StringName
        
        /** Virtual method to override the names of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _set_blend_shape_name(index: int64, name: StringName): void
        
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
        get_surface_count(): int64
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
        surface_get_arrays(surf_idx: int64): Array
        
        /** Returns the blend shape arrays for the requested surface. */
        surface_get_blend_shape_arrays(surf_idx: int64): Array
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material.  
         *      
         *  **Note:** This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.  
         */
        surface_set_material(surf_idx: int64, material: Material): void
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material.  
         *      
         *  **Note:** This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.  
         */
        surface_get_material(surf_idx: int64): Material
        
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
        create_outline(margin: float64): Mesh
        
        /** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
        generate_triangle_mesh(): TriangleMesh
        
        /** Sets a hint to be used for lightmap resolution. */
        get lightmap_size_hint(): Vector2i
        set lightmap_size_hint(value: Vector2i)
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            /** Constant for voxel-based approximate convex decomposition. */
            CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
            
            /** Constant for tetrahedron-based approximate convex decomposition. */
            CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1,
        }
    }
    /** Parameters to be used with a [Mesh] convex decomposition operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshconvexdecompositionsettings.html  
     */
    class MeshConvexDecompositionSettings extends RefCounted {
        constructor(identifier?: any)
        set_max_concavity(max_concavity: float64): void
        get_max_concavity(): float64
        set_symmetry_planes_clipping_bias(symmetry_planes_clipping_bias: float64): void
        get_symmetry_planes_clipping_bias(): float64
        set_revolution_axes_clipping_bias(revolution_axes_clipping_bias: float64): void
        get_revolution_axes_clipping_bias(): float64
        set_min_volume_per_convex_hull(min_volume_per_convex_hull: float64): void
        get_min_volume_per_convex_hull(): float64
        set_resolution(min_volume_per_convex_hull: int64): void
        get_resolution(): int64
        set_max_num_vertices_per_convex_hull(max_num_vertices_per_convex_hull: int64): void
        get_max_num_vertices_per_convex_hull(): int64
        set_plane_downsampling(plane_downsampling: int64): void
        get_plane_downsampling(): int64
        set_convex_hull_downsampling(convex_hull_downsampling: int64): void
        get_convex_hull_downsampling(): int64
        set_normalize_mesh(normalize_mesh: boolean): void
        get_normalize_mesh(): boolean
        set_mode(mode: MeshConvexDecompositionSettings.Mode): void
        get_mode(): MeshConvexDecompositionSettings.Mode
        set_convex_hull_approximation(convex_hull_approximation: boolean): void
        get_convex_hull_approximation(): boolean
        set_max_convex_hulls(max_convex_hulls: int64): void
        get_max_convex_hulls(): int64
        set_project_hull_vertices(project_hull_vertices: boolean): void
        get_project_hull_vertices(): boolean
        
        /** Maximum concavity. Ranges from `0.0` to `1.0`. */
        get max_concavity(): float64
        set max_concavity(value: float64)
        
        /** Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`. */
        get symmetry_planes_clipping_bias(): float64
        set symmetry_planes_clipping_bias(value: float64)
        
        /** Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`. */
        get revolution_axes_clipping_bias(): float64
        set revolution_axes_clipping_bias(value: float64)
        
        /** Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`. */
        get min_volume_per_convex_hull(): float64
        set min_volume_per_convex_hull(value: float64)
        
        /** Maximum number of voxels generated during the voxelization stage. */
        get resolution(): int64
        set resolution(value: int64)
        
        /** Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`. */
        get max_num_vertices_per_convex_hull(): int64
        set max_num_vertices_per_convex_hull(value: int64)
        
        /** Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`. */
        get plane_downsampling(): int64
        set plane_downsampling(value: int64)
        
        /** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`. */
        get convex_hull_downsampling(): int64
        set convex_hull_downsampling(value: int64)
        
        /** If enabled normalizes the mesh before applying the convex decomposition. */
        get normalize_mesh(): boolean
        set normalize_mesh(value: boolean)
        
        /** Mode for the approximate convex decomposition. */
        get mode(): int64
        set mode(value: int64)
        
        /** If enabled uses approximation for computing convex hulls. */
        get convex_hull_approximation(): boolean
        set convex_hull_approximation(value: boolean)
        
        /** The maximum number of convex hulls to produce from the merge operation. */
        get max_convex_hulls(): int64
        set max_convex_hulls(value: int64)
        
        /** If enabled projects output convex hull vertices onto original source mesh to increase floating point accuracy of the results. */
        get project_hull_vertices(): boolean
        set project_hull_vertices(value: boolean)
    }
    /** Helper tool to access and edit [Mesh] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshdatatool.html  
     */
    class MeshDataTool extends RefCounted {
        constructor(identifier?: any)
        /** Clears all data currently in MeshDataTool. */
        clear(): void
        
        /** Uses specified surface of given [Mesh] to populate data for MeshDataTool.  
         *  Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        create_from_surface(mesh: ArrayMesh, surface: int64): Error
        
        /** Adds a new surface to specified [Mesh] with edited data. */
        commit_to_surface(mesh: ArrayMesh, compression_flags: int64 = 0): Error
        
        /** Returns the [Mesh]'s format. Format is an integer made up of [Mesh] format flags combined together. For example, a mesh containing both vertices and normals would return a format of `3` because [constant Mesh.ARRAY_FORMAT_VERTEX] is `1` and [constant Mesh.ARRAY_FORMAT_NORMAL] is `2`.  
         *  See [enum Mesh.ArrayFormat] for a list of format flags.  
         */
        get_format(): int64
        
        /** Returns the total number of vertices in [Mesh]. */
        get_vertex_count(): int64
        
        /** Returns the number of edges in this [Mesh]. */
        get_edge_count(): int64
        
        /** Returns the number of faces in this [Mesh]. */
        get_face_count(): int64
        
        /** Sets the position of the given vertex. */
        set_vertex(idx: int64, vertex: Vector3): void
        
        /** Returns the position of the given vertex. */
        get_vertex(idx: int64): Vector3
        
        /** Sets the normal of the given vertex. */
        set_vertex_normal(idx: int64, normal: Vector3): void
        
        /** Returns the normal of the given vertex. */
        get_vertex_normal(idx: int64): Vector3
        
        /** Sets the tangent of the given vertex. */
        set_vertex_tangent(idx: int64, tangent: Plane): void
        
        /** Returns the tangent of the given vertex. */
        get_vertex_tangent(idx: int64): Plane
        
        /** Sets the UV of the given vertex. */
        set_vertex_uv(idx: int64, uv: Vector2): void
        
        /** Returns the UV of the given vertex. */
        get_vertex_uv(idx: int64): Vector2
        
        /** Sets the UV2 of the given vertex. */
        set_vertex_uv2(idx: int64, uv2: Vector2): void
        
        /** Returns the UV2 of the given vertex. */
        get_vertex_uv2(idx: int64): Vector2
        
        /** Sets the color of the given vertex. */
        set_vertex_color(idx: int64, color: Color): void
        
        /** Returns the color of the given vertex. */
        get_vertex_color(idx: int64): Color
        
        /** Sets the bones of the given vertex. */
        set_vertex_bones(idx: int64, bones: PackedInt32Array): void
        
        /** Returns the bones of the given vertex. */
        get_vertex_bones(idx: int64): PackedInt32Array
        
        /** Sets the bone weights of the given vertex. */
        set_vertex_weights(idx: int64, weights: PackedFloat32Array): void
        
        /** Returns bone weights of the given vertex. */
        get_vertex_weights(idx: int64): PackedFloat32Array
        
        /** Sets the metadata associated with the given vertex. */
        set_vertex_meta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given vertex. */
        get_vertex_meta(idx: int64): any
        
        /** Returns an array of edges that share the given vertex. */
        get_vertex_edges(idx: int64): PackedInt32Array
        
        /** Returns an array of faces that share the given vertex. */
        get_vertex_faces(idx: int64): PackedInt32Array
        
        /** Returns index of specified vertex connected to given edge.  
         *  Vertex argument can only be 0 or 1 because edges are comprised of two vertices.  
         */
        get_edge_vertex(idx: int64, vertex: int64): int64
        
        /** Returns array of faces that touch given edge. */
        get_edge_faces(idx: int64): PackedInt32Array
        
        /** Sets the metadata of the given edge. */
        set_edge_meta(idx: int64, meta: any): void
        
        /** Returns meta information assigned to given edge. */
        get_edge_meta(idx: int64): any
        
        /** Returns the specified vertex index of the given face.  
         *  Vertex argument must be either 0, 1, or 2 because faces contain three vertices.  
         *  **Example:**  
         *    
         */
        get_face_vertex(idx: int64, vertex: int64): int64
        
        /** Returns specified edge associated with given face.  
         *  Edge argument must be either 0, 1, or 2 because a face only has three edges.  
         */
        get_face_edge(idx: int64, edge: int64): int64
        
        /** Sets the metadata of the given face. */
        set_face_meta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given face. */
        get_face_meta(idx: int64): any
        
        /** Calculates and returns the face normal of the given face. */
        get_face_normal(idx: int64): Vector3
        
        /** Sets the material to be used by newly-constructed [Mesh]. */
        set_material(material: Material): void
        
        /** Returns the material assigned to the [Mesh]. */
        get_material(): Material
    }
    class MeshEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Node used for displaying a [Mesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshinstance2d.html  
     */
    class MeshInstance2D extends Node2D {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly texture_changed: Signal //  => void
    }
    /** Node that instances meshes into a scenario.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshinstance3d.html  
     */
    class MeshInstance3D extends GeometryInstance3D {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_skin(skin: Skin): void
        get_skin(): Skin
        
        /** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
        get_surface_override_material_count(): int64
        
        /** Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].  
         *      
         *  **Note:** This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        set_surface_override_material(surface: int64, material: Material): void
        
        /** Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].  
         *      
         *  **Note:** This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        get_surface_override_material(surface: int64): Material
        
        /** Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.  
         *  Returns `null` if no material is active, including when [member mesh] is `null`.  
         */
        get_active_material(surface: int64): Material
        
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
        get_blend_shape_count(): int64
        
        /** Returns the index of the blend shape with the given [param name]. Returns `-1` if no blend shape with this name exists, including when [member mesh] is `null`. */
        find_blend_shape_by_name(name: StringName): int64
        
        /** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns `0.0` and produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        get_blend_shape_value(blend_shape_idx: int64): float64
        
        /** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        set_blend_shape_value(blend_shape_idx: int64, value: float64): void
        
        /** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
        create_debug_tangents(): void
        
        /** The [Mesh] resource for the instance. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** The [Skin] to be used by this instance. */
        get skin(): Skin
        set skin(value: Skin)
        
        /** [NodePath] to the [Skeleton3D] associated with the instance. */
        get skeleton(): NodePath
        set skeleton(value: NodePath)
    }
    class MeshInstance3DEditor extends Control {
        constructor(identifier?: any)
    }
    class MeshInstance3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class MeshInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Library of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshlibrary.html  
     */
    class MeshLibrary extends Resource {
        constructor(identifier?: any)
        /** Creates a new item in the library with the given ID.  
         *  You can get an unused ID from [method get_last_unused_item_id].  
         */
        create_item(id: int64): void
        
        /** Sets the item's name.  
         *  This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].  
         */
        set_item_name(id: int64, name: string): void
        
        /** Sets the item's mesh. */
        set_item_mesh(id: int64, mesh: Mesh): void
        
        /** Sets the transform to apply to the item's mesh. */
        set_item_mesh_transform(id: int64, mesh_transform: Transform3D): void
        
        /** Sets the item's navigation mesh. */
        set_item_navigation_mesh(id: int64, navigation_mesh: NavigationMesh): void
        
        /** Sets the transform to apply to the item's navigation mesh. */
        set_item_navigation_mesh_transform(id: int64, navigation_mesh: Transform3D): void
        
        /** Sets the item's navigation layers bitmask. */
        set_item_navigation_layers(id: int64, navigation_layers: int64): void
        
        /** Sets an item's collision shapes.  
         *  The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].  
         */
        set_item_shapes(id: int64, shapes: Array): void
        
        /** Sets a texture to use as the item's preview icon in the editor. */
        set_item_preview(id: int64, texture: Texture2D): void
        
        /** Returns the item's name. */
        get_item_name(id: int64): string
        
        /** Returns the item's mesh. */
        get_item_mesh(id: int64): Mesh
        
        /** Returns the transform applied to the item's mesh. */
        get_item_mesh_transform(id: int64): Transform3D
        
        /** Returns the item's navigation mesh. */
        get_item_navigation_mesh(id: int64): NavigationMesh
        
        /** Returns the transform applied to the item's navigation mesh. */
        get_item_navigation_mesh_transform(id: int64): Transform3D
        
        /** Returns the item's navigation layers bitmask. */
        get_item_navigation_layers(id: int64): int64
        
        /** Returns an item's collision shapes.  
         *  The array consists of each [Shape3D] followed by its [Transform3D].  
         */
        get_item_shapes(id: int64): Array
        
        /** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
        get_item_preview(id: int64): Texture2D
        
        /** Removes the item. */
        remove_item(id: int64): void
        
        /** Returns the first item with the given name. */
        find_item_by_name(name: string): int64
        
        /** Clears the library. */
        clear(): void
        
        /** Returns the list of item IDs in use. */
        get_item_list(): PackedInt32Array
        
        /** Gets an unused ID for a new item. */
        get_last_unused_item_id(): int64
    }
    class MeshLibraryEditor extends Control {
        constructor(identifier?: any)
    }
    class MeshLibraryEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Simple texture that uses a mesh to draw itself.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_meshtexture.html  
     */
    class MeshTexture extends Texture2D {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_image_size(size: Vector2): void
        get_image_size(): Vector2
        set_base_texture(texture: Texture2D): void
        get_base_texture(): Texture2D
        
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** Sets the base texture that the Mesh will use to draw. */
        get base_texture(): Texture2D
        set base_texture(value: Texture2D)
        
        /** Sets the size of the image, needed for reference. */
        get image_size(): Vector2
        set image_size(value: Vector2)
    }
    /** Interpolates an abstract value and supplies it to a method called over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_methodtweener.html  
     */
    class MethodTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
        set_delay(delay: float64): MethodTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        set_trans(trans: Tween.TransitionType): MethodTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        set_ease(ease: Tween.EaseType): MethodTweener
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_missingnode.html  
     */
    class MissingNode extends Node {
        constructor(identifier?: any)
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        
        /** Returns the name of the type this node was originally. */
        get original_class(): string
        set original_class(value: string)
        get recording_properties(): boolean
        set recording_properties(value: boolean)
    }
    /** An internal editor class intended for keeping the data of unrecognized resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_missingresource.html  
     */
    class MissingResource extends Resource {
        constructor(identifier?: any)
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        
        /** Returns the name of the class this resource was originally. */
        get original_class(): string
        set original_class(value: string)
        get recording_properties(): boolean
        set recording_properties(value: boolean)
    }
    /** Generic mobile VR implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_mobilevrinterface.html  
     */
    class MobileVRInterface extends XRInterface {
        constructor(identifier?: any)
        set_eye_height(eye_height: float64): void
        get_eye_height(): float64
        set_iod(iod: float64): void
        get_iod(): float64
        set_display_width(display_width: float64): void
        get_display_width(): float64
        set_display_to_lens(display_to_lens: float64): void
        get_display_to_lens(): float64
        set_oversample(oversample: float64): void
        get_oversample(): float64
        set_k1(k: float64): void
        get_k1(): float64
        set_k2(k: float64): void
        get_k2(): float64
        
        /** The height at which the camera is placed in relation to the ground (i.e. [XROrigin3D] node). */
        get eye_height(): float64
        set eye_height(value: float64)
        
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        get iod(): float64
        set iod(value: float64)
        
        /** The width of the display in centimeters. */
        get display_width(): float64
        set display_width(value: float64)
        
        /** The distance between the display and the lenses inside of the device in centimeters. */
        get display_to_lens(): float64
        set display_to_lens(value: float64)
        
        /** The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance. */
        get oversample(): float64
        set oversample(value: float64)
        
        /** The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect. */
        get k1(): float64
        set k1(value: float64)
        
        /** The k2 lens factor, see k1. */
        get k2(): float64
        set k2(value: float64)
    }
    /** Abstract class for non-real-time video recording encoders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_moviewriter.html  
     */
    class MovieWriter extends Object {
        constructor(identifier?: any)
        /** Called when the audio sample rate used for recording the audio is requested by the engine. The value returned must be specified in Hz. Defaults to 48000 Hz if [method _get_audio_mix_rate] is not overridden. */
        /* gdvirtual */ _get_audio_mix_rate(): int64
        
        /** Called when the audio speaker mode used for recording the audio is requested by the engine. This can affect the number of output channels in the resulting audio file/stream. Defaults to [constant AudioServer.SPEAKER_MODE_STEREO] if [method _get_audio_speaker_mode] is not overridden. */
        /* gdvirtual */ _get_audio_speaker_mode(): AudioServer.SpeakerMode
        
        /** Called when the engine determines whether this [MovieWriter] is able to handle the file at [param path]. Must return `true` if this [MovieWriter] is able to handle the given file path, `false` otherwise. Typically, [method _handles_file] is overridden as follows to allow the user to record a file at any path with a given file extension:  
         *    
         */
        /* gdvirtual */ _handles_file(path: string): boolean
        
        /** Called once before the engine starts writing video and audio data. [param movie_size] is the width and height of the video to save. [param fps] is the number of frames per second specified in the project settings or using the `--fixed-fps <fps>` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url]. */
        /* gdvirtual */ _write_begin(movie_size: Vector2i, fps: int64, base_path: string): Error
        
        /** Called at the end of every rendered frame. The [param frame_image] and [param audio_frame_block] function arguments should be written to. */
        /* gdvirtual */ _write_frame(frame_image: Image, audio_frame_block: int64): Error
        
        /** Called when the engine finishes writing. This occurs when the engine quits by pressing the window manager's close button, or when [method SceneTree.quit] is called.  
         *      
         *  **Note:** Pressing [kbd]Ctrl + C[/kbd] on the terminal running the editor/project does  *not*  result in [method _write_end] being called.  
         */
        /* gdvirtual */ _write_end(): void
        
        /** Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [method _handles_file].  
         *      
         *  **Note:** [method add_writer] must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.  
         */
        static add_writer(writer: MovieWriter): void
    }
    class MovieWriterMJPEG extends MovieWriter {
        constructor(identifier?: any)
    }
    class MovieWriterPNGWAV extends MovieWriter {
        constructor(identifier?: any)
    }
    namespace MultiMesh {
        enum TransformFormat {
            /** Use this when using 2D transforms. */
            TRANSFORM_2D = 0,
            
            /** Use this when using 3D transforms. */
            TRANSFORM_3D = 1,
        }
    }
    /** Provides high-performance drawing of a mesh multiple times using GPU instancing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multimesh.html  
     */
    class MultiMesh extends Resource {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_colors(enable: boolean): void
        is_using_colors(): boolean
        set_use_custom_data(enable: boolean): void
        is_using_custom_data(): boolean
        set_transform_format(format: MultiMesh.TransformFormat): void
        get_transform_format(): MultiMesh.TransformFormat
        set_instance_count(count: int64): void
        get_instance_count(): int64
        set_visible_instance_count(count: int64): void
        get_visible_instance_count(): int64
        
        /** Sets the [Transform3D] for a specific instance. */
        set_instance_transform(instance: int64, transform: Transform3D): void
        
        /** Sets the [Transform2D] for a specific instance. */
        set_instance_transform_2d(instance: int64, transform: Transform2D): void
        
        /** Returns the [Transform3D] of a specific instance. */
        get_instance_transform(instance: int64): Transform3D
        
        /** Returns the [Transform2D] of a specific instance. */
        get_instance_transform_2d(instance: int64): Transform2D
        
        /** Sets the color of a specific instance by  *multiplying*  the mesh's existing vertex colors. This allows for different color tinting per instance.  
         *  For the color to take effect, ensure that [member use_colors] is `true` on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).  
         */
        set_instance_color(instance: int64, color: Color): void
        
        /** Gets a specific instance's color multiplier. */
        get_instance_color(instance: int64): Color
        
        /** Sets custom data for a specific instance. Although [Color] is used, it is just a container for 4 floating point numbers.  
         *  For the custom data to be used, ensure that [member use_custom_data] is `true`.  
         *  This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.  
         */
        set_instance_custom_data(instance: int64, custom_data: Color): void
        
        /** Returns the custom data that has been set for a specific instance. */
        get_instance_custom_data(instance: int64): Color
        
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
        get transform_format(): int64
        set transform_format(value: int64)
        
        /** If `true`, the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get use_colors(): boolean
        set use_colors(value: boolean)
        
        /** If `true`, the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get use_custom_data(): boolean
        set use_custom_data(value: boolean)
        
        /** Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.  
         *  By default, all instances are drawn but you can limit this with [member visible_instance_count].  
         */
        get instance_count(): int64
        set instance_count(value: int64)
        
        /** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
        get visible_instance_count(): int64
        set visible_instance_count(value: int64)
        
        /** [Mesh] resource to be instanced.  
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].  
         */
        get mesh(): Mesh
        set mesh(value: Mesh)
        get buffer(): PackedFloat32Array
        set buffer(value: PackedFloat32Array)
        
        /** See [method set_instance_transform]. */
        get transform_array(): PackedVector3Array
        set transform_array(value: PackedVector3Array)
        
        /** See [method set_instance_transform_2d]. */
        get transform_2d_array(): PackedVector2Array
        set transform_2d_array(value: PackedVector2Array)
        
        /** See [method set_instance_color]. */
        get color_array(): PackedColorArray
        set color_array(value: PackedColorArray)
        
        /** See [method set_instance_custom_data]. */
        get custom_data_array(): PackedColorArray
        set custom_data_array(value: PackedColorArray)
    }
    class MultiMeshEditor extends Control {
        constructor(identifier?: any)
    }
    class MultiMeshEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Node that instances a [MultiMesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multimeshinstance2d.html  
     */
    class MultiMeshInstance2D extends Node2D {
        constructor(identifier?: any)
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        get multimesh(): MultiMesh
        set multimesh(value: MultiMesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly texture_changed: Signal //  => void
    }
    /** Node that instances a [MultiMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multimeshinstance3d.html  
     */
    class MultiMeshInstance3D extends GeometryInstance3D {
        constructor(identifier?: any)
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        get multimesh(): MultiMesh
        set multimesh(value: MultiMesh)
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
    /** High-level multiplayer API interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayerapi.html  
     */
    class MultiplayerAPI extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if there is a [member multiplayer_peer] set. */
        has_multiplayer_peer(): boolean
        get_multiplayer_peer(): MultiplayerPeer
        set_multiplayer_peer(peer: MultiplayerPeer): void
        
        /** Returns the unique peer ID of this MultiplayerAPI's [member multiplayer_peer]. */
        get_unique_id(): int64
        
        /** Returns `true` if this MultiplayerAPI's [member multiplayer_peer] is valid and in server mode (listening for connections). */
        is_server(): boolean
        
        /** Returns the sender's peer ID for the RPC currently being executed.  
         *      
         *  **Note:** If not inside an RPC this method will return 0.  
         */
        get_remote_sender_id(): int64
        
        /** Method used for polling the MultiplayerAPI. You only need to worry about this if you set [member SceneTree.multiplayer_poll] to `false`. By default, [SceneTree] will poll its MultiplayerAPI(s) for you.  
         *      
         *  **Note:** This method results in RPCs being called, so they will be executed in the same context of this function (e.g. `_process`, `physics`, [Thread]).  
         */
        poll(): Error
        
        /** Sends an RPC to the target [param peer]. The given [param method] will be called on the remote [param object] with the provided [param arguments]. The RPC may also be called locally depending on the implementation and RPC configuration. See [method Node.rpc] and [method Node.rpc_config].  
         *      
         *  **Note:** Prefer using [method Node.rpc], [method Node.rpc_id], or `my_method.rpc(peer, arg1, arg2, ...)` (in GDScript), since they are faster. This method is mostly useful in conjunction with [MultiplayerAPIExtension] when augmenting or replacing the multiplayer capabilities.  
         */
        rpc(peer: int64, object: Object, method: StringName, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): Error
        
        /** Notifies the MultiplayerAPI of a new [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and a valid [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.  
         *      
         *  **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].  
         */
        object_configuration_add(object: Object, configuration: any): Error
        
        /** Notifies the MultiplayerAPI to remove a [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and an empty [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.  
         *      
         *  **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].  
         */
        object_configuration_remove(object: Object, configuration: any): Error
        
        /** Returns the peer IDs of all connected peers of this MultiplayerAPI's [member multiplayer_peer]. */
        get_peers(): PackedInt32Array
        
        /** Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by [SceneTree] when the engine starts. */
        static set_default_interface(interface_name: StringName): void
        
        /** Returns the default MultiplayerAPI implementation class name. This is usually `"SceneMultiplayer"` when [SceneMultiplayer] is available. See [method set_default_interface]. */
        static get_default_interface(): StringName
        
        /** Returns a new instance of the default MultiplayerAPI. */
        static create_default_interface(): MultiplayerAPI
        
        /** The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with [method is_server]) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals. */
        get multiplayer_peer(): MultiplayerPeer
        set multiplayer_peer(value: MultiplayerPeer)
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] connects with a new peer. ID is the peer ID of the new peer. Clients get notified when other clients connect to the same server. Upon connecting to a server, a client also receives this signal for the server (with ID being 1). */
        readonly peer_connected: Signal // id: int64 => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from a peer. Clients get notified when other clients disconnect from the same server. */
        readonly peer_disconnected: Signal // id: int64 => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] successfully connected to a server. Only emitted on clients. */
        readonly connected_to_server: Signal //  => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] fails to establish a connection to a server. Only emitted on clients. */
        readonly connection_failed: Signal //  => void
        
        /** Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from server. Only emitted on clients. */
        readonly server_disconnected: Signal //  => void
    }
    /** Base class used for extending the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayerapiextension.html  
     */
    class MultiplayerAPIExtension extends MultiplayerAPI {
        constructor(identifier?: any)
        /** Callback for [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): Error
        
        /** Called when the [member MultiplayerAPI.multiplayer_peer] is set. */
        /* gdvirtual */ _set_multiplayer_peer(multiplayer_peer: MultiplayerPeer): void
        
        /** Called when the [member MultiplayerAPI.multiplayer_peer] is retrieved. */
        /* gdvirtual */ _get_multiplayer_peer(): MultiplayerPeer
        
        /** Callback for [method MultiplayerAPI.get_unique_id]. */
        /* gdvirtual */ _get_unique_id(): int64
        
        /** Callback for [method MultiplayerAPI.get_peers]. */
        /* gdvirtual */ _get_peer_ids(): PackedInt32Array
        
        /** Callback for [method MultiplayerAPI.rpc]. */
        /* gdvirtual */ _rpc(peer: int64, object: Object, method: StringName, args: Array): Error
        
        /** Callback for [method MultiplayerAPI.get_remote_sender_id]. */
        /* gdvirtual */ _get_remote_sender_id(): int64
        
        /** Callback for [method MultiplayerAPI.object_configuration_add]. */
        /* gdvirtual */ _object_configuration_add(object: Object, configuration: any): Error
        
        /** Callback for [method MultiplayerAPI.object_configuration_remove]. */
        /* gdvirtual */ _object_configuration_remove(object: Object, configuration: any): Error
    }
    class MultiplayerEditorDebugger extends EditorDebuggerPlugin {
        constructor(identifier?: any)
        readonly open_request: Signal // path: string => void
    }
    class MultiplayerEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
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
    /** Abstract class for specialized [PacketPeer]s used by the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayerpeer.html  
     */
    class MultiplayerPeer extends PacketPeer {
        /** Packets are sent to all connected peers. */
        static readonly TARGET_PEER_BROADCAST = 0
        
        /** Packets are sent to the remote peer acting as server. */
        static readonly TARGET_PEER_SERVER = 1
        constructor(identifier?: any)
        set_transfer_channel(channel: int64): void
        get_transfer_channel(): int64
        set_transfer_mode(mode: MultiplayerPeer.TransferMode): void
        get_transfer_mode(): MultiplayerPeer.TransferMode
        
        /** Sets the peer to which packets will be sent.  
         *  The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].  
         */
        set_target_peer(id: int64): void
        
        /** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_peer(): int64
        
        /** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
        get_packet_channel(): int64
        
        /** Returns the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_mode(): MultiplayerPeer.TransferMode
        
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        
        /** Disconnects the given [param peer] from this host. If [param force] is `true` the [signal peer_disconnected] signal will not be emitted for this peer. */
        disconnect_peer(peer: int64, force: boolean = false): void
        
        /** Returns the current state of the connection. See [enum ConnectionStatus]. */
        get_connection_status(): MultiplayerPeer.ConnectionStatus
        
        /** Returns the ID of this [MultiplayerPeer]. */
        get_unique_id(): int64
        
        /** Returns a randomly generated integer that can be used as a network unique ID. */
        generate_unique_id(): int64
        set_refuse_new_connections(enable: boolean): void
        is_refusing_new_connections(): boolean
        
        /** Returns true if the server can act as a relay in the current configuration (i.e. if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them). */
        is_server_relay_supported(): boolean
        
        /** If `true`, this [MultiplayerPeer] refuses new connections. */
        get refuse_new_connections(): boolean
        set refuse_new_connections(value: boolean)
        
        /** The manner in which to send packets to the target peer. See [enum TransferMode], and the [method set_target_peer] method. */
        get transfer_mode(): int64
        set transfer_mode(value: int64)
        
        /** The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.  
         *      
         *  **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.  
         */
        get transfer_channel(): int64
        set transfer_channel(value: int64)
        
        /** Emitted when a remote peer connects. */
        readonly peer_connected: Signal // id: int64 => void
        
        /** Emitted when a remote peer has disconnected. */
        readonly peer_disconnected: Signal // id: int64 => void
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayerpeerextension.html  
     */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Called when a packet needs to be received by the [MultiplayerAPI], with [param r_buffer_size] being the size of the binary [param r_buffer] in bytes. */
        /* gdvirtual */ _get_packet(r_buffer: int64, r_buffer_size: int64): Error
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], with [param p_buffer_size] being the size of the binary [param p_buffer] in bytes. */
        /* gdvirtual */ _put_packet(p_buffer: int64, p_buffer_size: int64): Error
        
        /** Called when the available packet count is internally requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _get_available_packet_count(): int64
        
        /** Called when the maximum allowed packet size (in bytes) is requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _get_max_packet_size(): int64
        
        /** Called when a packet needs to be received by the [MultiplayerAPI], if [method _get_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _get_packet_script(): PackedByteArray
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], if [method _put_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _put_packet_script(p_buffer: PackedByteArray): Error
        
        /** Called to get the channel over which the next available packet was received. See [method MultiplayerPeer.get_packet_channel]. */
        /* gdvirtual */ _get_packet_channel(): int64
        
        /** Called to get the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method MultiplayerPeer.get_packet_mode]. */
        /* gdvirtual */ _get_packet_mode(): MultiplayerPeer.TransferMode
        
        /** Called when the channel to use is set for this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _set_transfer_channel(p_channel: int64): void
        
        /** Called when the transfer channel to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _get_transfer_channel(): int64
        
        /** Called when the transfer mode is set on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _set_transfer_mode(p_mode: MultiplayerPeer.TransferMode): void
        
        /** Called when the transfer mode to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _get_transfer_mode(): MultiplayerPeer.TransferMode
        
        /** Called when the target peer to use is set for this [MultiplayerPeer] (see [method MultiplayerPeer.set_target_peer]). */
        /* gdvirtual */ _set_target_peer(p_peer: int64): void
        
        /** Called when the ID of the [MultiplayerPeer] who sent the most recent packet is requested (see [method MultiplayerPeer.get_packet_peer]). */
        /* gdvirtual */ _get_packet_peer(): int64
        
        /** Called when the "is server" status is requested on the [MultiplayerAPI]. See [method MultiplayerAPI.is_server]. */
        /* gdvirtual */ _is_server(): boolean
        
        /** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): void
        
        /** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
        /* gdvirtual */ _close(): void
        
        /** Called when the connected [param p_peer] should be forcibly disconnected (see [method MultiplayerPeer.disconnect_peer]). */
        /* gdvirtual */ _disconnect_peer(p_peer: int64, p_force: boolean): void
        
        /** Called when the unique ID of this [MultiplayerPeer] is requested (see [method MultiplayerPeer.get_unique_id]). The value must be between `1` and `2147483647`. */
        /* gdvirtual */ _get_unique_id(): int64
        
        /** Called when the "refuse new connections" status is set on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _set_refuse_new_connections(p_enable: boolean): void
        
        /** Called when the "refuse new connections" status is requested on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _is_refusing_new_connections(): boolean
        
        /** Called to check if the server can act as a relay in the current configuration. See [method MultiplayerPeer.is_server_relay_supported]. */
        /* gdvirtual */ _is_server_relay_supported(): boolean
        
        /** Called when the connection status is requested on the [MultiplayerPeer] (see [method MultiplayerPeer.get_connection_status]). */
        /* gdvirtual */ _get_connection_status(): MultiplayerPeer.ConnectionStatus
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayerspawner.html  
     */
    class MultiplayerSpawner extends Node {
        constructor(identifier?: any)
        /** Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [member spawn_path]. */
        add_spawnable_scene(path: string): void
        
        /** Returns the count of spawnable scene paths. */
        get_spawnable_scene_count(): int64
        
        /** Returns the spawnable scene path by index. */
        get_spawnable_scene(index: int64): string
        
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
        get_spawn_limit(): int64
        set_spawn_limit(limit: int64): void
        get_spawn_function(): Callable
        set_spawn_function(spawn_function: Callable): void
        get _spawnable_scenes(): PackedStringArray
        set _spawnable_scenes(value: PackedStringArray)
        
        /** Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers. */
        get spawn_path(): NodePath
        set spawn_path(value: NodePath)
        
        /** Maximum nodes that is allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.  
         *  When set to `0` (the default), there is no limit.  
         */
        get spawn_limit(): int64
        set spawn_limit(value: int64)
        
        /** Method called on all peers when for every custom [method spawn] requested by the authority. Will receive the `data` parameter, and should return a [Node] that is not in the scene tree.  
         *      
         *  **Note:** The returned node should **not** be added to the scene with [method Node.add_child]. This is done automatically.  
         */
        get spawn_function(): Callable
        set spawn_function(value: Callable)
        
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
    /** Synchronizes properties from the multiplayer authority to the remote peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_multiplayersynchronizer.html  
     */
    class MultiplayerSynchronizer extends Node {
        constructor(identifier?: any)
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        set_replication_interval(milliseconds: float64): void
        get_replication_interval(): float64
        set_delta_interval(milliseconds: float64): void
        get_delta_interval(): float64
        set_replication_config(config: SceneReplicationConfig): void
        get_replication_config(): SceneReplicationConfig
        set_visibility_update_mode(mode: MultiplayerSynchronizer.VisibilityUpdateMode): void
        get_visibility_update_mode(): MultiplayerSynchronizer.VisibilityUpdateMode
        
        /** Updates the visibility of [param for_peer] according to visibility filters. If [param for_peer] is `0` (the default), all peers' visibilties are updated. */
        update_visibility(for_peer: int64 = 0): void
        set_visibility_public(visible: boolean): void
        is_visibility_public(): boolean
        
        /** Adds a peer visibility filter for this synchronizer.  
         *  [param filter] should take a peer ID [int] and return a [bool].  
         */
        add_visibility_filter(filter: Callable): void
        
        /** Removes a peer visibility filter from this synchronizer. */
        remove_visibility_filter(filter: Callable): void
        
        /** Sets the visibility of [param peer] to [param visible]. If [param peer] is `0`, the value of [member public_visibility] will be updated instead. */
        set_visibility_for(peer: int64, visible: boolean): void
        
        /** Queries the current visibility for peer [param peer]. */
        get_visibility_for(peer: int64): boolean
        
        /** Node path that replicated properties are relative to.  
         *  If [member root_path] was spawned by a [MultiplayerSpawner], the node will be also be spawned and despawned based on this synchronizer visibility options.  
         */
        get root_path(): NodePath
        set root_path(value: NodePath)
        
        /** Time interval between synchronizations. When set to `0.0` (the default), synchronizations happen every network process frame. */
        get replication_interval(): float64
        set replication_interval(value: float64)
        
        /** Time interval between delta synchronizations. When set to `0.0` (the default), delta synchronizations happen every network process frame. */
        get delta_interval(): float64
        set delta_interval(value: float64)
        
        /** Resource containing which properties to synchronize. */
        get replication_config(): SceneReplicationConfig
        set replication_config(value: SceneReplicationConfig)
        
        /** Specifies when visibility filters are updated (see [enum VisibilityUpdateMode] for options). */
        get visibility_update_mode(): int64
        set visibility_update_mode(value: int64)
        
        /** Whether synchronization should be visible to all peers by default. See [method set_visibility_for] and [method add_visibility_filter] for ways of configuring fine-grained visibility options. */
        get public_visibility(): boolean
        set public_visibility(value: boolean)
        
        /** Emitted when a new synchronization state is received by this synchronizer after the properties have been updated. */
        readonly synchronized: Signal //  => void
        
        /** Emitted when a new delta synchronization state is received by this synchronizer after the properties have been updated. */
        readonly delta_synchronized: Signal //  => void
        
        /** Emitted when visibility of [param for_peer] is updated. See [method update_visibility]. */
        readonly visibility_changed: Signal // for_peer: int64 => void
    }
    /** A binary [Semaphore] for synchronization of multiple [Thread]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_mutex.html  
     */
    class Mutex extends RefCounted {
        constructor(identifier?: any)
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
    /** A 2D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationagent2d.html  
     */
    class NavigationAgent2D extends Node {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: float64): void
        get_path_desired_distance(): float64
        set_target_desired_distance(desired_distance: float64): void
        get_target_desired_distance(): float64
        set_radius(radius: float64): void
        get_radius(): float64
        set_neighbor_distance(neighbor_distance: float64): void
        get_neighbor_distance(): float64
        set_max_neighbors(max_neighbors: int64): void
        get_max_neighbors(): int64
        set_time_horizon_agents(time_horizon: float64): void
        get_time_horizon_agents(): float64
        set_time_horizon_obstacles(time_horizon: float64): void
        get_time_horizon_obstacles(): float64
        set_max_speed(max_speed: float64): void
        get_max_speed(): float64
        set_path_max_distance(max_speed: float64): void
        get_path_max_distance(): float64
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: int64): boolean
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
        distance_to_target(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult2D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector2Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
        get_current_navigation_path_index(): int64
        
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
        set_avoidance_layers(layers: int64): void
        get_avoidance_layers(): int64
        set_avoidance_mask(mask: int64): void
        get_avoidance_mask(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: int64): boolean
        set_avoidance_priority(priority: float64): void
        get_avoidance_priority(): float64
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: float64): void
        get_debug_path_custom_point_size(): float64
        set_debug_path_custom_line_width(line_width: float64): void
        get_debug_path_custom_line_width(): float64
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get target_position(): Vector2
        set target_position(value: Vector2)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        get path_desired_distance(): float64
        set path_desired_distance(value: float64)
        
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        get target_desired_distance(): float64
        set target_desired_distance(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get path_max_distance(): float64
        set path_max_distance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfinding_algorithm(): int64
        set pathfinding_algorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get path_postprocessing(): int64
        set path_postprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get path_metadata_flags(): int64
        set path_metadata_flags(value: int64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a `safe_velocity` Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidance_enabled(): boolean
        set avoidance_enabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighbor_distance(): float64
        set neighbor_distance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get max_neighbors(): int64
        set max_neighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get time_horizon_agents(): float64
        set time_horizon_agents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get time_horizon_obstacles(): float64
        set time_horizon_obstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get max_speed(): float64
        set max_speed(value: float64)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidance_layers(): int64
        set avoidance_layers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidance_mask(): int64
        set avoidance_mask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidance_priority(): float64
        set avoidance_priority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debug_enabled(): boolean
        set debug_enabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debug_use_custom(): boolean
        set debug_use_custom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debug_path_custom_color(): Color
        set debug_path_custom_color(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debug_path_custom_point_size(): float64
        set debug_path_custom_point_size(value: float64)
        
        /** If [member debug_use_custom] is `true` uses this line width for rendering paths for this agent instead of global line width. */
        get debug_path_custom_line_width(): float64
        set debug_path_custom_line_width(value: float64)
        
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
    /** A 3D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationagent3d.html  
     */
    class NavigationAgent3D extends Node {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: float64): void
        get_path_desired_distance(): float64
        set_target_desired_distance(desired_distance: float64): void
        get_target_desired_distance(): float64
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        set_path_height_offset(path_height_offset: float64): void
        get_path_height_offset(): float64
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        set_keep_y_velocity(enabled: boolean): void
        get_keep_y_velocity(): boolean
        set_neighbor_distance(neighbor_distance: float64): void
        get_neighbor_distance(): float64
        set_max_neighbors(max_neighbors: int64): void
        get_max_neighbors(): int64
        set_time_horizon_agents(time_horizon: float64): void
        get_time_horizon_agents(): float64
        set_time_horizon_obstacles(time_horizon: float64): void
        get_time_horizon_obstacles(): float64
        set_max_speed(max_speed: float64): void
        get_max_speed(): float64
        set_path_max_distance(max_speed: float64): void
        get_path_max_distance(): float64
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: int64): boolean
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
        distance_to_target(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult3D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector3Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector3Array]. */
        get_current_navigation_path_index(): int64
        
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
        set_avoidance_layers(layers: int64): void
        get_avoidance_layers(): int64
        set_avoidance_mask(mask: int64): void
        get_avoidance_mask(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: int64): boolean
        set_avoidance_priority(priority: float64): void
        get_avoidance_priority(): float64
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: float64): void
        get_debug_path_custom_point_size(): float64
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get target_position(): Vector3
        set target_position(value: Vector3)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        get path_desired_distance(): float64
        set path_desired_distance(value: float64)
        
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        get target_desired_distance(): float64
        set target_desired_distance(value: float64)
        
        /** The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents. */
        get path_height_offset(): float64
        set path_height_offset(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get path_max_distance(): float64
        set path_max_distance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfinding_algorithm(): int64
        set pathfinding_algorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get path_postprocessing(): int64
        set path_postprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get path_metadata_flags(): int64
        set path_metadata_flags(value: int64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer3D]. When [member velocity] is set and the processing is completed a `safe_velocity` Vector3 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidance_enabled(): boolean
        set avoidance_enabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone. */
        get height(): float64
        set height(value: float64)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighbor_distance(): float64
        set neighbor_distance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get max_neighbors(): int64
        set max_neighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get time_horizon_agents(): float64
        set time_horizon_agents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get time_horizon_obstacles(): float64
        set time_horizon_obstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get max_speed(): float64
        set max_speed(value: float64)
        
        /** If `true`, the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.  
         *  If `false`, the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [member height] are ignored.  
         */
        get use_3d_avoidance(): boolean
        set use_3d_avoidance(value: boolean)
        
        /** If `true`, and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help mitigate the most obvious clipping on uneven 3D geometry. */
        get keep_y_velocity(): boolean
        set keep_y_velocity(value: boolean)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidance_layers(): int64
        set avoidance_layers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidance_mask(): int64
        set avoidance_mask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidance_priority(): float64
        set avoidance_priority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debug_enabled(): boolean
        set debug_enabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debug_use_custom(): boolean
        set debug_use_custom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debug_path_custom_color(): Color
        set debug_path_custom_color(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debug_path_custom_point_size(): float64
        set debug_path_custom_point_size(value: float64)
        
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
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationlink2d.html  
     */
    class NavigationLink2D extends Node2D {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer2D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: int64): boolean
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
        set_enter_cost(enter_cost: float64): void
        get_enter_cost(): float64
        set_travel_cost(travel_cost: float64): void
        get_travel_cost(): float64
        
        /** Whether this link is currently active. If `false`, [method NavigationServer2D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer2D.map_get_path]. */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get start_position(): Vector2
        set start_position(value: Vector2)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get end_position(): Vector2
        set end_position(value: Vector2)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enter_cost(): float64
        set enter_cost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travel_cost(): float64
        set travel_cost(value: float64)
    }
    class NavigationLink2DEditor extends Control {
        constructor(identifier?: any)
    }
    class NavigationLink2DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationlink3d.html  
     */
    class NavigationLink3D extends Node3D {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer3D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: int64): boolean
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
        set_enter_cost(enter_cost: float64): void
        get_enter_cost(): float64
        set_travel_cost(travel_cost: float64): void
        get_travel_cost(): float64
        
        /** Whether this link is currently active. If `false`, [method NavigationServer3D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get start_position(): Vector3
        set start_position(value: Vector3)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get end_position(): Vector3
        set end_position(value: Vector3)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enter_cost(): float64
        set enter_cost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travel_cost(): float64
        set travel_cost(value: float64)
    }
    class NavigationLink3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
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
    /** A navigation mesh that defines traversable areas and obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationmesh.html  
     */
    class NavigationMesh extends Resource {
        constructor(identifier?: any)
        set_sample_partition_type(sample_partition_type: NavigationMesh.SamplePartitionType): void
        get_sample_partition_type(): NavigationMesh.SamplePartitionType
        set_parsed_geometry_type(geometry_type: NavigationMesh.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationMesh.ParsedGeometryType
        set_collision_mask(mask: int64): void
        get_collision_mask(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: int64): boolean
        set_source_geometry_mode(mask: NavigationMesh.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationMesh.SourceGeometryMode
        set_source_group_name(mask: StringName): void
        get_source_group_name(): StringName
        set_cell_size(cell_size: float64): void
        get_cell_size(): float64
        set_cell_height(cell_height: float64): void
        get_cell_height(): float64
        set_agent_height(agent_height: float64): void
        get_agent_height(): float64
        set_agent_radius(agent_radius: float64): void
        get_agent_radius(): float64
        set_agent_max_climb(agent_max_climb: float64): void
        get_agent_max_climb(): float64
        set_agent_max_slope(agent_max_slope: float64): void
        get_agent_max_slope(): float64
        set_region_min_size(region_min_size: float64): void
        get_region_min_size(): float64
        set_region_merge_size(region_merge_size: float64): void
        get_region_merge_size(): float64
        set_edge_max_length(edge_max_length: float64): void
        get_edge_max_length(): float64
        set_edge_max_error(edge_max_error: float64): void
        get_edge_max_error(): float64
        set_vertices_per_polygon(vertices_per_polygon: float64): void
        get_vertices_per_polygon(): float64
        set_detail_sample_distance(detail_sample_dist: float64): void
        get_detail_sample_distance(): float64
        set_detail_sample_max_error(detail_sample_max_error: float64): void
        get_detail_sample_max_error(): float64
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
        get_polygon_count(): int64
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        get_polygon(idx: int64): PackedInt32Array
        
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
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array)
        get polygons(): Array
        set polygons(value: Array)
        
        /** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
        get sample_partition_type(): int64
        set sample_partition_type(value: int64)
        
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        get geometry_parsed_geometry_type(): int64
        set geometry_parsed_geometry_type(value: int64)
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        get geometry_collision_mask(): int64
        set geometry_collision_mask(value: int64)
        
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        get geometry_source_geometry_mode(): int64
        set geometry_source_geometry_mode(value: int64)
        
        /** The name of the group to scan for geometry.  
         *  Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        get geometry_source_group_name(): string
        set geometry_source_group_name(value: string)
        
        /** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
        get cell_size(): float64
        set cell_size(value: float64)
        
        /** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
        get cell_height(): float64
        set cell_height(value: float64)
        
        /** The minimum floor to ceiling height that will still allow the floor area to be considered walkable.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_height].  
         */
        get agent_height(): float64
        set agent_height(value: float64)
        
        /** The distance to erode/shrink the walkable area of the heightfield away from obstructions.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get agent_radius(): float64
        set agent_radius(value: float64)
        
        /** The minimum ledge height that is considered to still be traversable.  
         *      
         *  **Note:** While baking, this value will be rounded down to the nearest multiple of [member cell_height].  
         */
        get agent_max_climb(): float64
        set agent_max_climb(value: float64)
        
        /** The maximum slope that is considered walkable, in degrees. */
        get agent_max_slope(): float64
        set agent_max_slope(value: float64)
        
        /** The minimum size of a region for it to be created.  
         *      
         *  **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.  
         */
        get region_min_size(): float64
        set region_min_size(value: float64)
        
        /** Any regions with a size smaller than this will be merged with larger regions if possible.  
         *      
         *  **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.  
         */
        get region_merge_size(): float64
        set region_merge_size(value: float64)
        
        /** The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get edge_max_length(): float64
        set edge_max_length(value: float64)
        
        /** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
        get edge_max_error(): float64
        set edge_max_error(value: float64)
        
        /** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
        get vertices_per_polygon(): float64
        set vertices_per_polygon(value: float64)
        
        /** The sampling distance to use when generating the detail mesh, in cell unit. */
        get detail_sample_distance(): float64
        set detail_sample_distance(value: float64)
        
        /** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
        get detail_sample_max_error(): float64
        set detail_sample_max_error(value: float64)
        
        /** If `true`, marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
        get filter_low_hanging_obstacles(): boolean
        set filter_low_hanging_obstacles(value: boolean)
        
        /** If `true`, marks spans that are ledges as non-walkable. */
        get filter_ledge_spans(): boolean
        set filter_ledge_spans(value: boolean)
        
        /** If `true`, marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
        get filter_walkable_low_height_spans(): boolean
        set filter_walkable_low_height_spans(value: boolean)
        
        /** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
        get filter_baking_aabb(): AABB
        set filter_baking_aabb(value: AABB)
        
        /** The position offset applied to the [member filter_baking_aabb] [AABB]. */
        get filter_baking_aabb_offset(): Vector3
        set filter_baking_aabb_offset(value: Vector3)
    }
    class NavigationMeshEditor extends Control {
        constructor(identifier?: any)
    }
    class NavigationMeshEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationmeshsourcegeometrydata2d.html  
     */
    class NavigationMeshSourceGeometryData2D extends Resource {
        constructor(identifier?: any)
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
        get traversable_outlines(): Array
        set traversable_outlines(value: Array)
        get obstruction_outlines(): Array
        set obstruction_outlines(value: Array)
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationmeshsourcegeometrydata3d.html  
     */
    class NavigationMeshSourceGeometryData3D extends Resource {
        constructor(identifier?: any)
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
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array)
        get indices(): PackedInt32Array
        set indices(value: PackedInt32Array)
    }
    /** 2D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationobstacle2d.html  
     */
    class NavigationObstacle2D extends Node2D {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: float64): void
        get_radius(): float64
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        set_avoidance_layers(layers: int64): void
        get_avoidance_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: int64): boolean
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidance_enabled(): boolean
        set avoidance_enabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidance_layers(): int64
        set avoidance_layers(value: int64)
    }
    class NavigationObstacle2DEditor extends AbstractPolygon2DEditor {
        constructor(identifier?: any)
    }
    class NavigationObstacle2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
        constructor(identifier?: any)
    }
    /** 3D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationobstacle3d.html  
     */
    class NavigationObstacle3D extends Node3D {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: float64): void
        get_radius(): float64
        set_height(height: float64): void
        get_height(): float64
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        set_avoidance_layers(layers: int64): void
        get_avoidance_layers(): int64
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: int64): boolean
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidance_enabled(): boolean
        set avoidance_enabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them. */
        get height(): float64
        set height(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidance_layers(): int64
        set avoidance_layers(value: int64)
        
        /** If `true` the obstacle affects 3D avoidance using agent's with obstacle [member radius].  
         *  If `false` the obstacle affects 2D avoidance using agent's with both obstacle [member vertices] as well as obstacle [member radius].  
         */
        get use_3d_avoidance(): boolean
        set use_3d_avoidance(value: boolean)
    }
    class NavigationObstacle3DEditor extends HBoxContainer {
        constructor(identifier?: any)
        _polygon_draw(): void
    }
    class NavigationObstacle3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
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
    /** Provides parameters for 2D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationpathqueryparameters2d.html  
     */
    class NavigationPathQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
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
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        set_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        
        /** The navigation map [RID] used in the path query. */
        get map(): RID
        set map(value: RID)
        
        /** The pathfinding start position in global coordinates. */
        get start_position(): Vector2
        set start_position(value: Vector2)
        
        /** The pathfinding target position in global coordinates. */
        get target_position(): Vector2
        set target_position(value: Vector2)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfinding_algorithm(): int64
        set pathfinding_algorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get path_postprocessing(): int64
        set path_postprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadata_flags(): int64
        set metadata_flags(value: int64)
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
    /** Provides parameters for 3D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationpathqueryparameters3d.html  
     */
    class NavigationPathQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
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
        set_navigation_layers(navigation_layers: int64): void
        get_navigation_layers(): int64
        set_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        
        /** The navigation map [RID] used in the path query. */
        get map(): RID
        set map(value: RID)
        
        /** The pathfinding start position in global coordinates. */
        get start_position(): Vector3
        set start_position(value: Vector3)
        
        /** The pathfinding target position in global coordinates. */
        get target_position(): Vector3
        set target_position(value: Vector3)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigation_layers(): int64
        set navigation_layers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfinding_algorithm(): int64
        set pathfinding_algorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get path_postprocessing(): int64
        set path_postprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadata_flags(): int64
        set metadata_flags(value: int64)
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            /** This segment of the path goes through a region. */
            PATH_SEGMENT_TYPE_REGION = 0,
            
            /** This segment of the path goes through a link. */
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 2D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationpathqueryresult2d.html  
     */
    class NavigationPathQueryResult2D extends RefCounted {
        constructor(identifier?: any)
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
        get path(): PackedVector2Array
        set path(value: PackedVector2Array)
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get path_types(): PackedInt32Array
        set path_types(value: PackedInt32Array)
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get path_rids(): Array
        set path_rids(value: Array)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get path_owner_ids(): PackedInt64Array
        set path_owner_ids(value: PackedInt64Array)
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            /** This segment of the path goes through a region. */
            PATH_SEGMENT_TYPE_REGION = 0,
            
            /** This segment of the path goes through a link. */
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 3D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_navigationpathqueryresult3d.html  
     */
    class NavigationPathQueryResult3D extends RefCounted {
        constructor(identifier?: any)
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
        get path(): PackedVector3Array
        set path(value: PackedVector3Array)
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get path_types(): PackedInt32Array
        set path_types(value: PackedInt32Array)
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get path_rids(): Array
        set path_rids(value: Array)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get path_owner_ids(): PackedInt64Array
        set path_owner_ids(value: PackedInt64Array)
    }
}
