// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** Boolean matrix. */
    class BitMap extends Resource {
        /** Creates a bitmap with the specified size, filled with [code]false[/code]. */
        create(size: Vector2i): void
        /** Creates a bitmap that matches the given image dimensions, every element of the bitmap is set to [code]false[/code] if the alpha value of the image at that position is equal to [param threshold] or less, and [code]true[/code] in other case. */
        create_from_image_alpha(image: Image, threshold: number /*f64*/ = 0.1): void
        /** Sets the bitmap's element at the specified position, to the specified value. */
        set_bitv(position: Vector2i, bit: boolean): void
        /** Sets the bitmap's element at the specified position, to the specified value. */
        set_bit(x: number /*i64*/, y: number /*i64*/, bit: boolean): void
        /** Returns bitmap's value at the specified position. */
        get_bitv(position: Vector2i): boolean
        /** Returns bitmap's value at the specified position. */
        get_bit(x: number /*i64*/, y: number /*i64*/): boolean
        /** Sets a rectangular portion of the bitmap to the specified value. */
        set_bit_rect(rect: Rect2i, bit: boolean): void
        /** Returns the number of bitmap elements that are set to [code]true[/code]. */
        get_true_bit_count(): number /*i64*/
        /** Returns bitmap's dimensions. */
        get_size(): Vector2i
        /** Resizes the image to [param new_size]. */
        resize(new_size: Vector2i): void
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        /** Applies morphological dilation or erosion to the bitmap. If [param pixels] is positive, dilation is applied to the bitmap. If [param pixels] is negative, erosion is applied to the bitmap. [param rect] defines the area where the morphological operation is applied. Pixels located outside the [param rect] are unaffected by [method grow_mask]. */
        grow_mask(pixels: number /*i64*/, rect: Rect2i): void
        /** Returns an image of the same size as the bitmap and with a [enum Image.Format] of type [constant Image.FORMAT_L8]. [code]true[/code] bits of the bitmap are being converted into white pixels, and [code]false[/code] bits into black. */
        convert_to_image(): Image
        /** Creates an [Array] of polygons covering a rectangular portion of the bitmap. It uses a marching squares algorithm, followed by Ramer-Douglas-Peucker (RDP) reduction of the number of vertices. Each polygon is described as a [PackedVector2Array] of its vertices.
         *  To get polygons covering the whole bitmap, pass:
         *  
         *  [param epsilon] is passed to RDP to control how accurately the polygons cover the bitmap: a lower [param epsilon] corresponds to more points in the polygons.
         */
        opaque_to_polygons(rect: Rect2i, epsilon: number /*f64*/ = 2): Array
        data: Dictionary
    }
    class BitMapEditorPlugin extends EditorPlugin {
    }
    /** A joint used with [Skeleton2D] to control and animate other nodes. */
    class Bone2D extends Node2D {
        set_rest(rest: Transform2D): void
        get_rest(): Transform2D
        /** Resets the bone to the rest pose. This is equivalent to setting [member Node2D.transform] to [member rest]. */
        apply_rest(): void
        /** Returns the node's [member rest] [Transform2D] if it doesn't have a parent, or its rest pose relative to its parent. */
        get_skeleton_rest(): Transform2D
        /** Returns the node's index as part of the entire skeleton. See [Skeleton2D]. */
        get_index_in_skeleton(): number /*i64*/
        /** When set to [code]true[/code], the [Bone2D] node will attempt to automatically calculate the bone angle and length using the first child [Bone2D] node, if one exists. If none exist, the [Bone2D] cannot automatically calculate these values and will print a warning. */
        set_autocalculate_length_and_angle(auto_calculate: boolean): void
        /** Returns whether this [Bone2D] is going to autocalculate its length and bone angle using its first [Bone2D] child node, if one exists. If there are no [Bone2D] children, then it cannot autocalculate these values and will print a warning. */
        get_autocalculate_length_and_angle(): boolean
        /** Sets the length of the bone in the [Bone2D]. */
        set_length(length: number /*f64*/): void
        /** Returns the length of the bone in the [Bone2D] node. */
        get_length(): number /*f64*/
        /** Sets the bone angle for the [Bone2D]. This is typically set to the rotation from the [Bone2D] to a child [Bone2D] node.
         *  [b]Note:[/b] This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].
         */
        set_bone_angle(angle: number /*f64*/): void
        /** Returns the angle of the bone in the [Bone2D].
         *  [b]Note:[/b] This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].
         */
        get_bone_angle(): number /*f64*/
        /** Rest transform of the bone. You can reset the node's transforms to this value using [method apply_rest]. */
        rest: Transform2D
    }
    /** А node that dynamically copies or overrides the 3D transform of a bone in its parent [Skeleton3D]. */
    class BoneAttachment3D extends Node3D {
        set_bone_name(bone_name: string): void
        get_bone_name(): string
        set_bone_idx(bone_idx: number /*i64*/): void
        get_bone_idx(): number /*i64*/
        /** A function that is called automatically when the [Skeleton3D] the BoneAttachment3D node is using has a bone that has changed its pose. This function is where the BoneAttachment3D node updates its position so it is correctly bound when it is [i]not[/i] set to override the bone pose. */
        on_bone_pose_update(bone_index: number /*i64*/): void
        set_override_pose(override_pose: boolean): void
        get_override_pose(): boolean
        /** Sets whether the BoneAttachment3D node will use an external [Skeleton3D] node rather than attempting to use its parent node as the [Skeleton3D]. When set to [code]true[/code], the BoneAttachment3D node will use the external [Skeleton3D] node set in [method set_external_skeleton]. */
        set_use_external_skeleton(use_external_skeleton: boolean): void
        /** Returns whether the BoneAttachment3D node is using an external [Skeleton3D] rather than attempting to use its parent node as the [Skeleton3D]. */
        get_use_external_skeleton(): boolean
        /** Sets the [NodePath] to the external skeleton that the BoneAttachment3D node should use. See [method set_use_external_skeleton] to enable the external [Skeleton3D] node. */
        set_external_skeleton(external_skeleton: NodePath): void
        /** Returns the [NodePath] to the external [Skeleton3D] node, if one has been set. */
        get_external_skeleton(): NodePath
        /** The name of the attached bone. */
        bone_name: StringName
        /** The index of the attached bone. */
        bone_idx: number /*i64*/
        /** Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to [code]true[/code], the BoneAttachment3D node can change the pose of the bone. When set to [code]false[/code], the BoneAttachment3D will always be set to the bone's transform. */
        override_pose: boolean
    }
    /** Describes a mapping of bone names for retargeting [Skeleton3D] into common names defined by a [SkeletonProfile]. */
    class BoneMap extends Resource {
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
        profile: SkeletonProfile
        readonly bone_map_updated: Signal
        readonly profile_updated: Signal
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
    /** A container that arranges its child controls horizontally or vertically. */
    class BoxContainer extends Container {
        /** Adds a [Control] node to the box as a spacer. If [param begin] is [code]true[/code], it will insert the [Control] node in front of all other children. */
        add_spacer(begin: boolean): Control
        set_alignment(alignment: BoxContainer.AlignmentMode): void
        get_alignment(): BoxContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        alignment: number /*i64*/
        /** If [code]true[/code], the [BoxContainer] will arrange its children vertically, rather than horizontally.
         *  Can't be changed when using [HBoxContainer] and [VBoxContainer].
         */
        vertical: boolean
    }
    /** Generate an axis-aligned box [PrimitiveMesh]. */
    class BoxMesh extends PrimitiveMesh {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_subdivide_width(subdivide: number /*i64*/): void
        get_subdivide_width(): number /*i64*/
        set_subdivide_height(divisions: number /*i64*/): void
        get_subdivide_height(): number /*i64*/
        set_subdivide_depth(divisions: number /*i64*/): void
        get_subdivide_depth(): number /*i64*/
        /** The box's width, height and depth. */
        size: Vector3
        /** Number of extra edge loops inserted along the X axis. */
        subdivide_width: number /*i64*/
        /** Number of extra edge loops inserted along the Y axis. */
        subdivide_height: number /*i64*/
        /** Number of extra edge loops inserted along the Z axis. */
        subdivide_depth: number /*i64*/
    }
    /** Cuboid shape for use with occlusion culling in [OccluderInstance3D]. */
    class BoxOccluder3D extends Occluder3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        /** The box's size in 3D units. */
        size: Vector3
    }
    /** A 3D box shape used for physics collision. */
    class BoxShape3D extends Shape3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        /** The box's width, height and depth. */
        size: Vector3
    }
    /** A themed button that can contain text and an icon. */
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
        /** The button's text that will be displayed inside the button's area. */
        text: string
        /** Button's icon, if text is present the icon will be placed before the text.
         *  To edit margin and spacing of the icon, use [theme_item h_separation] theme property and [code]content_margin_*[/code] properties of the used [StyleBox]es.
         */
        icon: Texture2D
        /** Flat buttons don't display decoration. */
        flat: boolean
        /** Text alignment policy for the button's text, use one of the [enum HorizontalAlignment] constants. */
        alignment: number /*i64*/
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        /** When this property is enabled, text that is too large to fit the button is clipped, when disabled the Button will always be wide enough to hold the text. */
        clip_text: boolean
        /** Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same [enum HorizontalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        icon_alignment: number /*i64*/
        /** Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same [enum VerticalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        vertical_icon_alignment: number /*i64*/
        /** When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [theme_item icon_max_width]. */
        expand_icon: boolean
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
    }
    /** A group of buttons that doesn't allow more than one button to be pressed at a time. */
    class ButtonGroup extends Resource {
        /** Returns the current pressed button. */
        get_pressed_button(): BaseButton
        /** Returns an [Array] of [Button]s who have this as their [ButtonGroup] (see [member BaseButton.button_group]). */
        get_buttons(): Array
        set_allow_unpress(enabled: boolean): void
        is_allow_unpress(): boolean
        /** If [code]true[/code], it is possible to unpress all buttons in this [ButtonGroup]. */
        allow_unpress: boolean
        readonly pressed: Signal
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
    /** A CPU-based 2D particle emitter. */
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
        /** Restarts the particle emitter. */
        restart(): void
        set_direction(direction: Vector2): void
        get_direction(): Vector2
        set_spread(spread: number /*f64*/): void
        get_spread(): number /*f64*/
        /** Sets the minimum value for the given parameter. */
        set_param_min(param: CPUParticles2D.Parameter, value: number /*f64*/): void
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: CPUParticles2D.Parameter): number /*f64*/
        /** Sets the maximum value for the given parameter. */
        set_param_max(param: CPUParticles2D.Parameter, value: number /*f64*/): void
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: CPUParticles2D.Parameter): number /*f64*/
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
        /** Sets this node's properties to match a given [GPUParticles2D] node with an assigned [ParticleProcessMaterial]. */
        convert_from_particles(particles: Node): void
        /** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        /** Number of particles emitted in one emission cycle. */
        amount: number /*i64*/
        /** Amount of time each particle will exist. */
        lifetime: number /*f64*/
        /** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
        one_shot: boolean
        /** Particle system starts as if it had already run for this many seconds. */
        preprocess: number /*f64*/
        /** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
        speed_scale: number /*f64*/
        /** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
        explosiveness: number /*f64*/
        /** Emission lifetime randomness ratio. */
        randomness: number /*f64*/
        /** Particle lifetime randomness ratio. */
        lifetime_randomness: number /*f64*/
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        /** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        /** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        /** Particle draw order. Uses [enum DrawOrder] values. */
        draw_order: number /*i64*/
        /** Particle texture. If [code]null[/code], particles will be squares. */
        texture: Texture2D
        /** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
        emission_shape: number /*i64*/
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        emission_sphere_radius: number /*f64*/
        /** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_RECTANGLE]. */
        emission_rect_extents: Vector2
        /** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_points: PackedVector2Array
        /** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_normals: PackedVector2Array
        /** Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_colors: PackedColorArray
        /** Unit vector specifying the particles' emission direction. */
        direction: Vector2
        /** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. */
        spread: number /*f64*/
        /** Gravity applied to every particle. */
        gravity: Vector2
        /** If [code]true[/code], the scale curve will be split into x and y components. See [member scale_curve_x] and [member scale_curve_y]. */
        split_scale: boolean
        /** Each particle's horizontal scale will vary along this [Curve].
         *  [member split_scale] must be enabled.
         */
        scale_curve_x: Curve
        /** Each particle's vertical scale will vary along this [Curve].
         *  [member split_scale] must be enabled.
         */
        scale_curve_y: Curve
        /** Each particle's initial color. If [member texture] is defined, it will be multiplied by this color. */
        color: Color
        /** Each particle's color will vary along this [Gradient] (multiplied with [member color]). */
        color_ramp: Gradient
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]). */
        color_initial_ramp: Gradient
        readonly finished: Signal
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
    /** A CPU-based 3D particle emitter. */
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
        /** Restarts the particle emitter. */
        restart(): void
        set_direction(direction: Vector3): void
        get_direction(): Vector3
        set_spread(degrees: number /*f64*/): void
        get_spread(): number /*f64*/
        set_flatness(amount: number /*f64*/): void
        get_flatness(): number /*f64*/
        /** Sets the minimum value for the given parameter. */
        set_param_min(param: CPUParticles3D.Parameter, value: number /*f64*/): void
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: CPUParticles3D.Parameter): number /*f64*/
        /** Sets the maximum value for the given parameter. */
        set_param_max(param: CPUParticles3D.Parameter, value: number /*f64*/): void
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: CPUParticles3D.Parameter): number /*f64*/
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
        /** Sets this node's properties to match a given [GPUParticles3D] node with an assigned [ParticleProcessMaterial]. */
        convert_from_particles(particles: Node): void
        /** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        /** Number of particles emitted in one emission cycle. */
        amount: number /*i64*/
        /** Amount of time each particle will exist. */
        lifetime: number /*f64*/
        /** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
        one_shot: boolean
        /** Particle system starts as if it had already run for this many seconds. */
        preprocess: number /*f64*/
        /** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
        speed_scale: number /*f64*/
        /** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
        explosiveness: number /*f64*/
        /** Emission lifetime randomness ratio. */
        randomness: number /*f64*/
        /** Particle lifetime randomness ratio. */
        lifetime_randomness: number /*f64*/
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the particle system itself. */
        fixed_fps: number /*i64*/
        /** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        /** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        /** Particle draw order. Uses [enum DrawOrder] values. */
        draw_order: number /*i64*/
        /** The [Mesh] used for each particle. If [code]null[/code], particles will be spheres. */
        mesh: Mesh
        /** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
        emission_shape: number /*i64*/
        /** The sphere's radius if [enum EmissionShape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        emission_sphere_radius: number /*f64*/
        /** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
        emission_box_extents: Vector3
        /** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_points: PackedVector3Array
        /** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_normals: PackedVector3Array
        /** Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS].
         *  [b]Note:[/b] [member emission_colors] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member emission_colors] will have no visible effect.
         */
        emission_colors: PackedColorArray
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_axis: Vector3
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_height: number /*f64*/
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_radius: number /*f64*/
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_inner_radius: number /*f64*/
        /** Unit vector specifying the particles' emission direction. */
        direction: Vector3
        /** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. Applied to X/Z plane and Y/Z planes. */
        spread: number /*f64*/
        /** Amount of [member spread] in Y/Z plane. A value of [code]1[/code] restricts particles to X/Z plane. */
        flatness: number /*f64*/
        /** Gravity applied to every particle. */
        gravity: Vector3
        /** If set to [code]true[/code], three different scale curves can be specified, one per scale axis. */
        split_scale: boolean
        /** Curve for the scale over life, along the x axis. */
        scale_curve_x: Curve
        /** Curve for the scale over life, along the y axis. */
        scale_curve_y: Curve
        /** Curve for the scale over life, along the z axis. */
        scale_curve_z: Curve
        /** Each particle's initial color.
         *  [b]Note:[/b] [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color] will have no visible effect.
         */
        color: Color
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).
         *  [b]Note:[/b] [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color_ramp] will have no visible effect.
         */
        color_ramp: Gradient
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).
         *  [b]Note:[/b] [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color_initial_ramp] will have no visible effect.
         */
        color_initial_ramp: Gradient
        readonly finished: Signal
    }
    class CPUParticles3DEditor extends GPUParticles3DEditorBase {
    }
    class CPUParticles3DEditorPlugin extends EditorPlugin {
    }
    class CPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A CSG Box shape. */
    class CSGBox3D extends CSGPrimitive3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_material(material: Material): void
        get_material(): Material
        /** The box's width, height and depth. */
        size: Vector3
        /** The material used to render the box. */
        material: BaseMaterial3D | ShaderMaterial
    }
    /** A CSG node that allows you to combine other CSG modifiers. */
    class CSGCombiner3D extends CSGShape3D {
    }
    /** A CSG Cylinder shape. */
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
        /** The radius of the cylinder. */
        radius: number /*f64*/
        /** The height of the cylinder. */
        height: number /*f64*/
        /** The number of sides of the cylinder, the higher this number the more detail there will be in the cylinder. */
        sides: number /*i64*/
        /** If [code]true[/code] a cone is created, the [member radius] will only apply to one side. */
        cone: boolean
        /** If [code]true[/code] the normals of the cylinder are set to give a smooth effect making the cylinder seem rounded. If [code]false[/code] the cylinder will have a flat shaded look. */
        smooth_faces: boolean
        /** The material used to render the cylinder. */
        material: BaseMaterial3D | ShaderMaterial
    }
    /** A CSG Mesh shape that uses a mesh resource. */
    class CSGMesh3D extends CSGPrimitive3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_material(material: Material): void
        get_material(): Material
        /** The [Mesh] resource to use as a CSG shape.
         *  [b]Note:[/b] When using an [ArrayMesh], all vertex attributes except [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL] and [constant Mesh.ARRAY_TEX_UV] are left unused. Only [constant Mesh.ARRAY_VERTEX] and [constant Mesh.ARRAY_TEX_UV] will be passed to the GPU.
         *  [constant Mesh.ARRAY_NORMAL] is only used to determine which faces require the use of flat shading. By default, CSGMesh will ignore the mesh's vertex normals, recalculate them for each vertex and use a smooth shader. If a flat shader is required for a face, ensure that all vertex normals of the face are approximately equal.
         */
        mesh: Mesh
        /** The [Material] used in drawing the CSG shape. */
        material: BaseMaterial3D | ShaderMaterial
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
    /** Extrudes a 2D polygon shape to create a 3D mesh. */
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
        /** The point array that defines the 2D polygon that is extruded. This can be a convex or concave polygon with 3 or more points. The polygon must [i]not[/i] have any intersecting edges. Otherwise, triangulation will fail and no mesh will be generated.
         *  [b]Note:[/b] If only 1 or 2 points are defined in [member polygon], no mesh will be generated.
         */
        polygon: PackedVector2Array
        /** The [member mode] used to extrude the [member polygon]. */
        mode: number /*i64*/
        /** When [member mode] is [constant MODE_DEPTH], the depth of the extrusion. */
        depth: number /*f64*/
        /** When [member mode] is [constant MODE_SPIN], the total number of degrees the [member polygon] is rotated when extruding. */
        spin_degrees: number /*f64*/
        /** When [member mode] is [constant MODE_SPIN], the number of extrusions made. */
        spin_sides: number /*i64*/
        /** When [member mode] is [constant MODE_PATH], the location of the [Path3D] object used to extrude the [member polygon]. */
        path_node: NodePath
        /** When [member mode] is [constant MODE_PATH], this will determine if the interval should be by distance ([constant PATH_INTERVAL_DISTANCE]) or subdivision fractions ([constant PATH_INTERVAL_SUBDIVIDE]). */
        path_interval_type: number /*i64*/
        /** When [member mode] is [constant MODE_PATH], the path interval or ratio of path points to extrusions. */
        path_interval: number /*f64*/
        /** When [member mode] is [constant MODE_PATH], extrusions that are less than this angle, will be merged together to reduce polygon count. */
        path_simplify_angle: number /*f64*/
        /** When [member mode] is [constant MODE_PATH], the [enum PathRotation] method used to rotate the [member polygon] as it is extruded. */
        path_rotation: number /*i64*/
        /** When [member mode] is [constant MODE_PATH], if [code]true[/code] the [Transform3D] of the [CSGPolygon3D] is used as the starting point for the extrusions, not the [Transform3D] of the [member path_node]. */
        path_local: boolean
        /** When [member mode] is [constant MODE_PATH], by default, the top half of the [member material] is stretched along the entire length of the extruded shape. If [code]false[/code] the top half of the material is repeated every step of the extrusion. */
        path_continuous_u: boolean
        /** When [member mode] is [constant MODE_PATH], this is the distance along the path, in meters, the texture coordinates will tile. When set to 0, texture coordinates will match geometry exactly with no tiling. */
        path_u_distance: number /*f64*/
        /** When [member mode] is [constant MODE_PATH], if [code]true[/code] the ends of the path are joined, by adding an extrusion between the last and first points of the path. */
        path_joined: boolean
        /** If [code]true[/code], applies smooth shading to the extrusions. */
        smooth_faces: boolean
        /** Material to use for the resulting mesh. The UV maps the top half of the material to the extruded shape (U along the length of the extrusions and V around the outline of the [member polygon]), the bottom-left quarter to the front end face, and the bottom-right quarter to the back end face. */
        material: BaseMaterial3D | ShaderMaterial
    }
    /** Base class for CSG primitives. */
    class CSGPrimitive3D extends CSGShape3D {
        set_flip_faces(flip_faces: boolean): void
        get_flip_faces(): boolean
        /** If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn. */
        flip_faces: boolean
    }
    namespace CSGShape3D {
        enum Operation {
            OPERATION_UNION = 0,
            OPERATION_INTERSECTION = 1,
            OPERATION_SUBTRACTION = 2,
        }
    }
    /** The CSG base class. */
    class CSGShape3D extends GeometryInstance3D {
        _update_shape(): void
        /** Returns [code]true[/code] if this is a root shape and is thus the object that is rendered. */
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
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_calculate_tangents(enabled: boolean): void
        is_calculating_tangents(): boolean
        /** Returns an [Array] with two elements, the first is the [Transform3D] of this node and the second is the root [Mesh] of this node. Only works when this node is the root shape. */
        get_meshes(): Array
        /** The operation that is performed on this shape. This is ignored for the first CSG child node as the operation is between this node and the previous child of this nodes parent. */
        operation: number /*i64*/
        /** Snap makes the mesh vertices snap to a given distance so that the faces of two meshes can be perfectly aligned. A lower value results in greater precision but may be harder to adjust. */
        snap: number /*f64*/
        /** Calculate tangents for the CSG shape which allows the use of normal maps. This is only applied on the root shape, this setting is ignored on any child. */
        calculate_tangents: boolean
        /** Adds a collision shape to the physics engine for our CSG shape. This will always act like a static body. Note that the collision shape is still active even if the CSG shape itself is hidden. See also [member collision_mask] and [member collision_priority]. */
        use_collision: boolean
        /** The physics layers this area is in.
         *  Collidable objects can exist in any of 32 different layers. These layers work like a tagging system, and are not visual. A collidable can use these layers to select with which objects it can collide, using the collision_mask property.
         *  A contact is detected if object A is in any of the layers that object B scans, or object B is in any layer scanned by object A. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_layer: number /*i64*/
        /** The physics layers this CSG shape scans for collisions. Only effective if [member use_collision] is [code]true[/code]. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** The priority used to solve colliding when occurring penetration. Only effective if [member use_collision] is [code]true[/code]. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        collision_priority: number /*f64*/
    }
    class CSGShape3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A CSG Sphere shape. */
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
        /** Radius of the sphere. */
        radius: number /*f64*/
        /** Number of vertical slices for the sphere. */
        radial_segments: number /*i64*/
        /** Number of horizontal slices for the sphere. */
        rings: number /*i64*/
        /** If [code]true[/code] the normals of the sphere are set to give a smooth effect making the sphere seem rounded. If [code]false[/code] the sphere will have a flat shaded look. */
        smooth_faces: boolean
        /** The material used to render the sphere. */
        material: BaseMaterial3D | ShaderMaterial
    }
    /** A CSG Torus shape. */
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
        /** The inner radius of the torus. */
        inner_radius: number /*f64*/
        /** The outer radius of the torus. */
        outer_radius: number /*f64*/
        /** The number of slices the torus is constructed of. */
        sides: number /*i64*/
        /** The number of edges each ring of the torus is constructed of. */
        ring_sides: number /*i64*/
        /** If [code]true[/code] the normals of the torus are set to give a smooth effect making the torus seem rounded. If [code]false[/code] the torus will have a flat shaded look. */
        smooth_faces: boolean
        /** The material used to render the torus. */
        material: BaseMaterial3D | ShaderMaterial
    }
    /** Calls the specified method after optional delay. */
    class CallbackTweener extends Tweener {
        /** Makes the callback call delayed by given time in seconds.
         *  [b]Example:[/b]
         *  
         */
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
    /** Camera node for 2D scenes. */
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
        /** Forces this [Camera2D] to become the current active one. [member enabled] must be [code]true[/code]. */
        make_current(): void
        /** Returns [code]true[/code] if this [Camera2D] is the active camera (see [method Viewport.get_camera_2d]). */
        is_current(): boolean
        _make_current(_unnamed_arg0: Object): void
        /** Sets the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
        set_limit(margin: Side, limit: number /*i64*/): void
        /** Returns the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
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
        /** Sets the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        set_drag_margin(margin: Side, drag_margin: number /*f64*/): void
        /** Returns the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        get_drag_margin(margin: Side): number /*f64*/
        /** Returns this camera's target position, in global coordinates.
         *  [b]Note:[/b] The returned value is not the same as [member Node2D.global_position], as it is affected by the drag properties. It is also not the same as the current position if [member position_smoothing_enabled] is [code]true[/code] (see [method get_screen_center_position]).
         */
        get_target_position(): Vector2
        /** Returns the center of the screen from this camera's point of view, in global coordinates.
         *  [b]Note:[/b] The exact targeted position of the camera may be different. See [method get_target_position].
         */
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
        /** Forces the camera to update scroll immediately. */
        force_update_scroll(): void
        /** Sets the camera's position immediately to its current smoothing destination.
         *  This method has no effect if [member position_smoothing_enabled] is [code]false[/code].
         */
        reset_smoothing(): void
        /** Aligns the camera to the tracked node. */
        align(): void
        _set_old_smoothing(follow_smoothing: number /*f64*/): void
        set_screen_drawing_enabled(screen_drawing_enabled: boolean): void
        is_screen_drawing_enabled(): boolean
        set_limit_drawing_enabled(limit_drawing_enabled: boolean): void
        is_limit_drawing_enabled(): boolean
        set_margin_drawing_enabled(margin_drawing_enabled: boolean): void
        is_margin_drawing_enabled(): boolean
        /** The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in [member limit_top], [member limit_bottom], [member limit_left] and [member limit_right]. */
        offset: Vector2
        /** The Camera2D's anchor point. See [enum AnchorMode] constants. */
        anchor_mode: number /*i64*/
        /** If [code]true[/code], the camera's rendered view is not affected by its [member Node2D.rotation] and [member Node2D.global_rotation]. */
        ignore_rotation: boolean
        /** Controls whether the camera can be active or not. If [code]true[/code], the [Camera2D] will become the main camera when it enters the scene tree and there is no active camera currently (see [method Viewport.get_camera_2d]).
         *  When the camera is currently active and [member enabled] is set to [code]false[/code], the next enabled [Camera2D] in the scene tree will become active.
         */
        enabled: boolean
        /** The camera's zoom. A zoom of [code]Vector(2, 2)[/code] doubles the size seen in the viewport. A zoom of [code]Vector(0.5, 0.5)[/code] halves the size seen in the viewport.
         *  [b]Note:[/b] [member FontFile.oversampling] does [i]not[/i] take [Camera2D] zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a [CanvasLayer] that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling [b]Multichannel Signed Distance Field[/b] in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.
         */
        zoom: Vector2
        /** The custom [Viewport] node attached to the [Camera2D]. If [code]null[/code] or not a [Viewport], uses the default viewport instead. */
        custom_viewport: Viewport
        /** The camera's process callback. See [enum Camera2DProcessCallback]. */
        process_callback: number /*i64*/
        /** If [code]true[/code], the camera smoothly stops when reaches its limits.
         *  This property has no effect if [member position_smoothing_enabled] is [code]false[/code].
         *  [b]Note:[/b] To immediately update the camera's position to be within limits without smoothing, even with this setting enabled, invoke [method reset_smoothing].
         */
        limit_smoothed: boolean
        /** If [code]true[/code], the camera's view smoothly moves towards its target position at [member position_smoothing_speed]. */
        position_smoothing_enabled: boolean
        /** Speed in pixels per second of the camera's smoothing effect when [member position_smoothing_enabled] is [code]true[/code]. */
        position_smoothing_speed: number /*f64*/
        /** If [code]true[/code], the camera's view smoothly rotates, via asymptotic smoothing, to align with its target rotation at [member rotation_smoothing_speed].
         *  [b]Note:[/b] This property has no effect if [member ignore_rotation] is [code]true[/code].
         */
        rotation_smoothing_enabled: boolean
        /** The angular, asymptotic speed of the camera's rotation smoothing effect when [member rotation_smoothing_enabled] is [code]true[/code]. */
        rotation_smoothing_speed: number /*f64*/
        /** If [code]true[/code], the camera only moves when reaching the horizontal (left and right) drag margins. If [code]false[/code], the camera moves horizontally regardless of margins. */
        drag_horizontal_enabled: boolean
        /** If [code]true[/code], the camera only moves when reaching the vertical (top and bottom) drag margins. If [code]false[/code], the camera moves vertically regardless of the drag margins. */
        drag_vertical_enabled: boolean
        /** The relative horizontal drag offset of the camera between the right ([code]-1[/code]) and left ([code]1[/code]) drag margins.
         *  [b]Note:[/b] Used to set the initial horizontal drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_horizontal_enabled] is [code]true[/code] or the drag margins are changed.
         */
        drag_horizontal_offset: number /*f64*/
        /** The relative vertical drag offset of the camera between the bottom ([code]-1[/code]) and top ([code]1[/code]) drag margins.
         *  [b]Note:[/b] Used to set the initial vertical drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_vertical_enabled] is [code]true[/code] or the drag margins are changed.
         */
        drag_vertical_offset: number /*f64*/
        /** If [code]true[/code], draws the camera's screen rectangle in the editor. */
        editor_draw_screen: boolean
        /** If [code]true[/code], draws the camera's limits rectangle in the editor. */
        editor_draw_limits: boolean
        /** If [code]true[/code], draws the camera's drag margin rectangle in the editor. */
        editor_draw_drag_margin: boolean
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
    /** Camera node, displays from a point of view. */
    class Camera3D extends Node3D {
        /** Returns a normal vector in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        project_ray_normal(screen_point: Vector2): Vector3
        /** Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc. */
        project_local_ray_normal(screen_point: Vector2): Vector3
        /** Returns a 3D position in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        project_ray_origin(screen_point: Vector2): Vector3
        /** Returns the 2D coordinate in the [Viewport] rectangle that maps to the given 3D point in world space.
         *  [b]Note:[/b] When using this to position GUI elements over a 3D viewport, use [method is_position_behind] to prevent them from appearing if the 3D point is behind the camera:
         *  
         */
        unproject_position(world_point: Vector3): Vector2
        /** Returns [code]true[/code] if the given position is behind the camera (the blue part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods.
         *  [b]Note:[/b] A position which returns [code]false[/code] may still be outside the camera's field of view.
         */
        is_position_behind(world_point: Vector3): boolean
        /** Returns the 3D point in world space that maps to the given 2D coordinate in the [Viewport] rectangle on a plane that is the given [param z_depth] distance into the scene away from the camera. */
        project_position(screen_point: Vector2, z_depth: number /*f64*/): Vector3
        /** Sets the camera projection to perspective mode (see [constant PROJECTION_PERSPECTIVE]), by specifying a [param fov] (field of view) angle in degrees, and the [param z_near] and [param z_far] clip planes in world space units. */
        set_perspective(fov: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Sets the camera projection to orthogonal mode (see [constant PROJECTION_ORTHOGONAL]), by specifying a [param size], and the [param z_near] and [param z_far] clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.) */
        set_orthogonal(size: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Sets the camera projection to frustum mode (see [constant PROJECTION_FRUSTUM]), by specifying a [param size], an [param offset], and the [param z_near] and [param z_far] clip planes in world space units. See also [member frustum_offset]. */
        set_frustum(size: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/): void
        /** Makes this camera the current camera for the [Viewport] (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added. */
        make_current(): void
        /** If this is the current camera, remove it from being current. If [param enable_next] is [code]true[/code], request to make the next camera current, if any. */
        clear_current(enable_next: boolean = true): void
        set_current(enabled: boolean): void
        is_current(): boolean
        /** Returns the transform of the camera plus the vertical ([member v_offset]) and horizontal ([member h_offset]) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [XRCamera3D]. */
        get_camera_transform(): Transform3D
        /** Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function. */
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
        /** Returns the camera's frustum planes in world space units as an array of [Plane]s in the following order: near, far, left, top, right, bottom. Not to be confused with [member frustum_offset]. */
        get_frustum(): Array
        /** Returns [code]true[/code] if the given position is inside the camera's frustum (the green part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods. */
        is_position_in_frustum(world_point: Vector3): boolean
        /** Returns the camera's RID from the [RenderingServer]. */
        get_camera_rid(): RID
        /** Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera. */
        get_pyramid_shape_rid(): RID
        /** Based on [param value], enables or disables the specified layer in the [member cull_mask], given a [param layer_number] between 1 and 20. */
        set_cull_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member cull_mask] is enabled, given a [param layer_number] between 1 and 20. */
        get_cull_mask_value(layer_number: number /*i64*/): boolean
        /** The axis to lock during [member fov]/[member size] adjustments. Can be either [constant KEEP_WIDTH] or [constant KEEP_HEIGHT]. */
        keep_aspect: number /*i64*/
        /** The culling mask that describes which [member VisualInstance3D.layers] are rendered by this camera. By default, all 20 user-visible layers are rendered.
         *  [b]Note:[/b] Since the [member cull_mask] allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting [member cull_mask] using a script allows you to toggle those reserved layers, which can be useful for editor plugins.
         *  To adjust [member cull_mask] more easily using a script, use [method get_cull_mask_value] and [method set_cull_mask_value].
         *  [b]Note:[/b] [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.
         */
        cull_mask: number /*i64*/
        /** The [Environment] to use for this camera. */
        environment: Environment
        /** The [CameraAttributes] to use for this camera. */
        attributes: CameraAttributesPractical | CameraAttributesPhysical
        /** The horizontal (X) offset of the camera viewport. */
        h_offset: number /*f64*/
        /** The vertical (Y) offset of the camera viewport. */
        v_offset: number /*f64*/
        /** If not [constant DOPPLER_TRACKING_DISABLED], this camera will simulate the [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] for objects changed in particular [code]_process[/code] methods. See [enum DopplerTracking] for possible values. */
        doppler_tracking: number /*i64*/
        /** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
        projection: number /*i64*/
        /** If [code]true[/code], the ancestor [Viewport] is currently using this camera.
         *  If multiple cameras are in the scene, one will always be made current. For example, if two [Camera3D] nodes are present in the scene and only one is current, setting one camera's [member current] to [code]false[/code] will cause the other camera to be made current.
         */
        current: boolean
        /** The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, [member fov] sets the other axis' field of view angle.
         *  For reference, the default vertical field of view value ([code]75.0[/code]) is equivalent to a horizontal FOV of:
         *  - ~91.31 degrees in a 4:3 viewport
         *  - ~101.67 degrees in a 16:10 viewport
         *  - ~107.51 degrees in a 16:9 viewport
         *  - ~121.63 degrees in a 21:9 viewport
         */
        fov: number /*f64*/
        /** The camera's size in meters measured as the diameter of the width or height, depending on [member keep_aspect]. Only applicable in orthogonal and frustum modes. */
        size: number /*f64*/
        /** The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [url=https://zdoom.org/wiki/Y-shearing]Y-shearing[/url].
         *  [b]Note:[/b] Only effective if [member projection] is [constant PROJECTION_FRUSTUM].
         */
        frustum_offset: Vector2
        /** The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the [i]entire[/i] range. Values lower than the default can lead to increased Z-fighting. */
        near: number /*f64*/
        /** The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [member far] can improve performance if it results in objects being partially or fully culled. */
        far: number /*f64*/
    }
    class Camera3DEditorPlugin extends EditorPlugin {
    }
    class Camera3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Parent class for camera settings. */
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
        /** Sensitivity of camera sensors, measured in ISO. A higher sensitivity results in a brighter image. Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. When [member auto_exposure_enabled] this can be used as a method of exposure compensation, doubling the value will increase the exposure value (measured in EV100) by 1 stop. */
        exposure_sensitivity: number /*f64*/
        /** Multiplier for the exposure amount. A higher value results in a brighter image. */
        exposure_multiplier: number /*f64*/
        /** If [code]true[/code], enables the tonemapping auto exposure mode of the scene renderer. If [code]true[/code], the renderer will automatically determine the exposure setting to adapt to the scene's illumination and the observed light. */
        auto_exposure_enabled: boolean
        /** The scale of the auto exposure effect. Affects the intensity of auto exposure. */
        auto_exposure_scale: number /*f64*/
        /** The speed of the auto exposure effect. Affects the time needed for the camera to perform auto exposure. */
        auto_exposure_speed: number /*f64*/
    }
    /** Physically-based camera settings. */
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
        /** Returns the vertical field of view that corresponds to the [member frustum_focal_length]. This value is calculated internally whenever [member frustum_focal_length] is changed. */
        get_fov(): number /*f64*/
        set_auto_exposure_max_exposure_value(exposure_value_max: number /*f64*/): void
        get_auto_exposure_max_exposure_value(): number /*f64*/
        set_auto_exposure_min_exposure_value(exposure_value_min: number /*f64*/): void
        get_auto_exposure_min_exposure_value(): number /*f64*/
        /** Distance from camera of object that will be in focus, measured in meters. Internally this will be clamped to be at least 1 millimeter larger than [member frustum_focal_length]. */
        frustum_focus_distance: number /*f64*/
        /** Distance between camera lens and camera aperture, measured in millimeters. Controls field of view and depth of field. A larger focal length will result in a smaller field of view and a narrower depth of field meaning fewer objects will be in focus. A smaller focal length will result in a wider field of view and a larger depth of field meaning more objects will be in focus. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.fov] property and the [member Camera3D.keep_aspect] property. */
        frustum_focal_length: number /*f64*/
        /** Override value for [member Camera3D.near]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.near] property. */
        frustum_near: number /*f64*/
        /** Override value for [member Camera3D.far]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.far] property. */
        frustum_far: number /*f64*/
        /** Size of the aperture of the camera, measured in f-stops. An f-stop is a unitless ratio between the focal length of the camera and the diameter of the aperture. A high aperture setting will result in a smaller aperture which leads to a dimmer image and sharper focus. A low aperture results in a wide aperture which lets in more light resulting in a brighter, less-focused image. Default is appropriate for outdoors at daytime (i.e. for use with a default [DirectionalLight3D]), for indoor lighting, a value between 2 and 4 is more appropriate.
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.
         */
        exposure_aperture: number /*f64*/
        /** Time for shutter to open and close, evaluated as [code]1 / shutter_speed[/code] seconds. A higher value will allow less light (leading to a darker image), while a lower value will allow more light (leading to a brighter image).
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.
         */
        exposure_shutter_speed: number /*f64*/
        /** The minimum luminance luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        auto_exposure_min_exposure_value: number /*f64*/
        /** The maximum luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        auto_exposure_max_exposure_value: number /*f64*/
    }
    /** Camera settings in an easy to use format. */
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
        /** Enables depth of field blur for objects further than [member dof_blur_far_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_far_transition].
         *  [b]Note:[/b] Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
         */
        dof_blur_far_enabled: boolean
        /** Objects further from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        dof_blur_far_distance: number /*f64*/
        /** When positive, distance over which (starting from [member dof_blur_far_distance]) blur effect will scale from 0 to [member dof_blur_amount]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_far_distance] and will increase in a physically accurate way as objects get further from the [Camera3D]. */
        dof_blur_far_transition: number /*f64*/
        /** Enables depth of field blur for objects closer than [member dof_blur_near_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_near_transition].
         *  [b]Note:[/b] Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
         */
        dof_blur_near_enabled: boolean
        /** Objects closer from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        dof_blur_near_distance: number /*f64*/
        /** When positive, distance over which blur effect will scale from 0 to [member dof_blur_amount], ending at [member dof_blur_near_distance]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_near_distance] and will increase in a physically accurate way as objects get closer to the [Camera3D]. */
        dof_blur_near_transition: number /*f64*/
        /** Sets the maximum amount of blur. When using physically-based blur amounts, will instead act as a multiplier. High values lead to an increased amount of blurriness, but can be much more expensive to calculate. It is best to keep this as low as possible for a given art style. */
        dof_blur_amount: number /*f64*/
        /** The minimum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        auto_exposure_min_sensitivity: number /*f64*/
        /** The maximum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        auto_exposure_max_sensitivity: number /*f64*/
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
    /** A camera feed gives you access to a single physical camera attached to your device. */
    class CameraFeed extends RefCounted {
        /** Returns the unique ID for this feed. */
        get_id(): number /*i64*/
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
        /** If [code]true[/code], the feed is active. */
        feed_is_active: boolean
        /** The transform applied to the camera's image. */
        feed_transform: Transform2D
    }
    /** Texture provided by a [CameraFeed]. */
    class CameraTexture extends Texture2D {
        set_camera_feed_id(feed_id: number /*i64*/): void
        get_camera_feed_id(): number /*i64*/
        set_which_feed(which_feed: CameraServer.FeedImage): void
        get_which_feed(): CameraServer.FeedImage
        set_camera_active(active: boolean): void
        get_camera_active(): boolean
        /** The ID of the [CameraFeed] for which we want to display the image. */
        camera_feed_id: number /*i64*/
        /** Which image within the [CameraFeed] we want access to, important if the camera image is split in a Y and CbCr component. */
        which_feed: number /*i64*/
        /** Convenience property that gives access to the active property of the [CameraFeed]. */
        camera_is_active: boolean
    }
    /** Merges several 2D nodes into a single draw operation. */
    class CanvasGroup extends Node2D {
        set_fit_margin(fit_margin: number /*f64*/): void
        get_fit_margin(): number /*f64*/
        set_clear_margin(clear_margin: number /*f64*/): void
        get_clear_margin(): number /*f64*/
        set_use_mipmaps(use_mipmaps: boolean): void
        is_using_mipmaps(): boolean
        /** Sets the size of a margin used to expand the drawable rect of this [CanvasGroup]. The size of the [CanvasGroup] is determined by fitting a rect around its children then expanding that rect by [member fit_margin]. This increases both the backbuffer area used and the area covered by the [CanvasGroup] both of which can reduce performance. This should be kept as small as possible and should only be expanded when an increased size is needed (e.g. for custom shader effects). */
        fit_margin: number /*f64*/
        /** Sets the size of the margin used to expand the clearing rect of this [CanvasGroup]. This expands the area of the backbuffer that will be used by the [CanvasGroup]. A smaller margin will reduce the area of the backbuffer used which can increase performance, however if [member use_mipmaps] is enabled, a small margin may result in mipmap errors at the edge of the [CanvasGroup]. Accordingly, this should be left as small as possible, but should be increased if artifacts appear along the edges of the canvas group. */
        clear_margin: number /*f64*/
        /** If [code]true[/code], calculates mipmaps for the backbuffer before drawing the [CanvasGroup] so that mipmaps can be used in a custom [ShaderMaterial] attached to the [CanvasGroup]. Generating mipmaps has a performance cost so this should not be enabled unless required. */
        use_mipmaps: boolean
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
    /** Abstract base class for everything in 2D space. */
    class CanvasItem extends Node {
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35
        static readonly NOTIFICATION_DRAW = 30
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 31
        static readonly NOTIFICATION_ENTER_CANVAS = 32
        static readonly NOTIFICATION_EXIT_CANVAS = 33
        static readonly NOTIFICATION_WORLD_2D_CHANGED = 36
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
        _edit_set_rotation(degrees: number /*f64*/): void
        _edit_get_rotation(): number /*f64*/
        _edit_use_rotation(): boolean
        _edit_set_pivot(pivot: Vector2): void
        _edit_get_pivot(): Vector2
        _edit_use_pivot(): boolean
        _edit_get_transform(): Transform2D
        /** Returns the canvas item RID used by [RenderingServer] for this item. */
        get_canvas_item(): RID
        set_visible(visible: boolean): void
        is_visible(): boolean
        /** Returns [code]true[/code] if the node is present in the [SceneTree], its [member visible] property is [code]true[/code] and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is therefore not drawn (see [method _draw]). */
        is_visible_in_tree(): boolean
        /** Show the [CanvasItem] if it's currently hidden. This is equivalent to setting [member visible] to [code]true[/code]. For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple [code]popup*()[/code] functions instead. */
        show(): void
        /** Hide the [CanvasItem] if it's currently visible. This is equivalent to setting [member visible] to [code]false[/code]. */
        hide(): void
        /** Queues the [CanvasItem] to redraw. During idle time, if [CanvasItem] is visible, [constant NOTIFICATION_DRAW] is sent and [method _draw] is called. This only occurs [b]once[/b] per frame, even if this method has been called multiple times. */
        queue_redraw(): void
        /** Moves this node to display on top of its siblings.
         *  Internally, the node is moved to the bottom of parent's child list. The method has no effect on nodes without a parent.
         */
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
        /** Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also [method draw_multiline] and [method draw_polyline].
         *  If [param width] is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_line(from: Vector2, to: Vector2, color: Color, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws a dashed line from a 2D point to another, with a given color and width. See also [method draw_multiline] and [method draw_polyline].
         *  If [param width] is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_dashed_line(from: Vector2, to: Vector2, color: Color, width: number /*f64*/ = -1, dash: number /*f64*/ = 2, aligned: boolean = true): void
        /** Draws interconnected line segments with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline] instead. See also [method draw_polygon].
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_polyline(points: PackedVector2Array, color: Color, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws interconnected line segments with a uniform [param width], point-by-point coloring, and optional antialiasing (supported only for positive [param width]). Colors assigned to line points match by index between [param points] and [param colors], i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline_colors] instead. See also [method draw_polygon].
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_polyline_colors(points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws an unfilled arc between the given angles with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). The larger the value of [param point_count], the smoother the curve. See also [method draw_circle].
         *  If [param width] is negative, it will be ignored and the arc will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         *  The arc is drawn from [param start_angle] towards the value of [param end_angle] so in clockwise direction if [code]start_angle < end_angle[/code] and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of [param start_angle] and [param end_angle] is greater than [constant @GDScript.TAU] radians, then a full circle arc is drawn (i.e. arc will not overlap itself).
         */
        draw_arc(center: Vector2, radius: number /*f64*/, start_angle: number /*f64*/, end_angle: number /*f64*/, point_count: number /*i64*/, color: Color, width: number /*f64*/ = -1, antialiased: boolean = false): void
        /** Draws multiple disconnected lines with a uniform [param width] and [param color]. Each line is defined by two consecutive points from [param points] array, i.e. i-th segment consists of [code]points[2 * i][/code], [code]points[2 * i + 1][/code] endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline] instead.
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_multiline(points: PackedVector2Array, color: Color, width: number /*f64*/ = -1): void
        /** Draws multiple disconnected lines with a uniform [param width] and segment-by-segment coloring. Each segment is defined by two consecutive points from [param points] array and a corresponding color from [param colors] array, i.e. i-th segment consists of [code]points[2 * i][/code], [code]points[2 * i + 1][/code] endpoints and has [code]colors[i][/code] color. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline_colors] instead.
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         */
        draw_multiline_colors(points: PackedVector2Array, colors: PackedColorArray, width: number /*f64*/ = -1): void
        /** Draws a rectangle. If [param filled] is [code]true[/code], the rectangle will be filled with the [param color] specified. If [param filled] is [code]false[/code], the rectangle will be drawn as a stroke with the [param color] and [param width] specified. See also [method draw_texture_rect].
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like [code]1.0[/code].
         *  [b]Note:[/b] [param width] is only effective if [param filled] is [code]false[/code].
         *  [b]Note:[/b] Unfilled rectangles drawn with a negative [param width] may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent [param color]).
         */
        draw_rect(rect: Rect2, color: Color, filled: boolean = true, width: number /*f64*/ = -1): void
        /** Draws a colored, filled circle. See also [method draw_arc], [method draw_polyline] and [method draw_polygon]. */
        draw_circle(position: Vector2, radius: number /*f64*/, color: Color): void
        /** Draws a texture at a given position. */
        draw_texture(texture: Texture2D, position: Vector2, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Draws a textured rectangle at a given position, optionally modulated by a color. If [param transpose] is [code]true[/code], the texture will have its X and Y coordinates swapped. See also [method draw_rect] and [method draw_texture_rect_region]. */
        draw_texture_rect(texture: Texture2D, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        /** Draws a textured rectangle from a texture's region (specified by [param src_rect]) at a given position, optionally modulated by a color. If [param transpose] is [code]true[/code], the texture will have its X and Y coordinates swapped. See also [method draw_texture_rect]. */
        draw_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        /** Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See [member FontFile.multichannel_signed_distance_field] for more information and caveats about MSDF font rendering.
         *  If [param outline] is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the [param outline] radius.
         *  Value of the [param pixel_range] should the same that was used during distance field texture generation.
         */
        draw_msdf_texture_rect_region(texture: Texture2D, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outline: number /*f64*/ = 0, pixel_range: number /*f64*/ = 4, scale: number /*f64*/ = 1): void
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
         *  [b]Example using the default project font:[/b]
         *  
         *  See also [method Font.draw_string].
         */
        draw_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Breaks [param text] into lines and draws it using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_multiline_string(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Draws [param text] outline using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Breaks [param text] to the lines and draws text outline using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
        draw_multiline_string_outline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Draws a string first character using a custom font. */
        draw_char(font: Font, pos: Vector2, char: string, font_size: number /*i64*/ = 16, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Draws a string first character outline using a custom font. */
        draw_char_outline(font: Font, pos: Vector2, char: string, font_size: number /*i64*/ = 16, size: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Draws a [Mesh] in 2D, using the provided texture. See [MeshInstance2D] for related documentation. */
        draw_mesh(mesh: Mesh, texture: Texture2D, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Draws a [MultiMesh] in 2D with the provided texture. See [MultiMeshInstance2D] for related documentation. */
        draw_multimesh(multimesh: MultiMesh, texture: Texture2D): void
        /** Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.
         *  [b]Note:[/b] [member FontFile.oversampling] does [i]not[/i] take [param scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling [b]Multichannel Signed Distance Field[/b] in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.
         */
        draw_set_transform(position: Vector2, rotation: number /*f64*/ = 0, scale: Vector2 = Vector2.ONE): void
        /** Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this. */
        draw_set_transform_matrix(xform: Transform2D): void
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        draw_animation_slice(animation_length: number /*f64*/, slice_begin: number /*f64*/, slice_end: number /*f64*/, offset: number /*f64*/ = 0): void
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
         *  [b]Note:[/b] For screen-space coordinates (e.g. when using a non-embedded [Popup]), you can use [method DisplayServer.mouse_get_position].
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
        /** If [param enable] is [code]true[/code], this node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] when its local transform changes. */
        set_notify_local_transform(enable: boolean): void
        /** Returns [code]true[/code] if local transform notifications are communicated to children. */
        is_local_transform_notification_enabled(): boolean
        /** If [param enable] is [code]true[/code], this node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] when its global transform changes. */
        set_notify_transform(enable: boolean): void
        /** Returns [code]true[/code] if global transform notifications are communicated to children. */
        is_transform_notification_enabled(): boolean
        /** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
        force_update_transform(): void
        /** Assigns [param screen_point] as this node's new local transform. */
        make_canvas_position_local(screen_point: Vector2): Vector2
        /** Transformations issued by [param event]'s inputs are applied in local space instead of global space. */
        make_input_local(event: InputEvent): InputEvent
        set_visibility_layer(layer: number /*i64*/): void
        get_visibility_layer(): number /*i64*/
        /** Set/clear individual bits on the rendering visibility layer. This simplifies editing this [CanvasItem]'s visibility layer. */
        set_visibility_layer_bit(layer: number /*i64*/, enabled: boolean): void
        /** Returns an individual bit on the rendering visibility layer. */
        get_visibility_layer_bit(layer: number /*i64*/): boolean
        set_texture_filter(mode: CanvasItem.TextureFilter): void
        get_texture_filter(): CanvasItem.TextureFilter
        set_texture_repeat(mode: CanvasItem.TextureRepeat): void
        get_texture_repeat(): CanvasItem.TextureRepeat
        set_clip_children_mode(mode: CanvasItem.ClipChildrenMode): void
        get_clip_children_mode(): CanvasItem.ClipChildrenMode
        /** If [code]true[/code], this [CanvasItem] is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return [code]true[/code]).
         *  [b]Note:[/b] For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple [code]popup*()[/code] functions instead.
         */
        visible: boolean
        /** The color applied to this [CanvasItem]. This property does affect child [CanvasItem]s, unlike [member self_modulate] which only affects the node itself. */
        modulate: Color
        /** The color applied to this [CanvasItem]. This property does [b]not[/b] affect child [CanvasItem]s, unlike [member modulate] which affects both the node itself and its children.
         *  [b]Note:[/b] Internal children (e.g. sliders in [ColorPicker] or tab bar in [TabContainer]) are also not affected by this property (see [code]include_internal[/code] parameter of [method Node.get_child] and other similar methods).
         */
        self_modulate: Color
        /** If [code]true[/code], the object draws behind its parent. */
        show_behind_parent: boolean
        /** If [code]true[/code], this [CanvasItem] will [i]not[/i] inherit its transform from parent [CanvasItem]s. Its draw order will also be changed to make it draw on top of other [CanvasItem]s that do not have [member top_level] set to [code]true[/code]. The [CanvasItem] will effectively act as if it was placed as a child of a bare [Node]. */
        top_level: boolean
        /** Allows the current node to clip child nodes, essentially acting as a mask. */
        clip_children: number /*i64*/
        /** The rendering layers in which this [CanvasItem] responds to [Light2D] nodes. */
        light_mask: number /*i64*/
        /** The rendering layer in which this [CanvasItem] is rendered by [Viewport] nodes. A [Viewport] will render a [CanvasItem] if it and all its parents share a layer with the [Viewport]'s canvas cull mask. */
        visibility_layer: number /*i64*/
        /** Z index. Controls the order in which the nodes render. A node with a higher Z index will display in front of others. Must be between [constant RenderingServer.CANVAS_ITEM_Z_MIN] and [constant RenderingServer.CANVAS_ITEM_Z_MAX] (inclusive).
         *  [b]Note:[/b] Changing the Z index of a [Control] only affects the drawing order, not the order in which input events are handled. This can be useful to implement certain UI animations, e.g. a menu where hovered items are scaled and should overlap others.
         */
        z_index: number /*i64*/
        /** If [code]true[/code], the node's Z index is relative to its parent's Z index. If this node's Z index is 2 and its parent's effective Z index is 3, then this node's effective Z index will be 2 + 3 = 5. */
        z_as_relative: boolean
        /** If [code]true[/code], child nodes with the lowest Y position are drawn before those with a higher Y position. If [code]false[/code], Y-sorting is disabled. Y-sorting only affects children that inherit from [CanvasItem].
         *  You can nest nodes with Y-sorting. Child Y-sorted nodes are sorted in the same space as the parent Y-sort. This feature allows you to organize a scene better or divide it into multiple ones without changing your scene tree.
         */
        y_sort_enabled: boolean
        /** The texture filtering mode to use on this [CanvasItem]. */
        texture_filter: number /*i64*/
        /** The texture repeating mode to use on this [CanvasItem]. */
        texture_repeat: number /*i64*/
        /** The material applied to this [CanvasItem]. */
        material: CanvasItemMaterial | ShaderMaterial
        /** If [code]true[/code], the parent [CanvasItem]'s [member material] property is used as this one's material. */
        use_parent_material: boolean
        readonly draw: Signal
        readonly visibility_changed: Signal
        readonly hidden: Signal
        readonly item_rect_changed: Signal
    }
    class CanvasItemEditor extends VBoxContainer {
        _get_editor_data(_unnamed_arg0: Object): Object
        update_viewport(): void
        center_at(position: Vector2): void
        _set_owner_for_node_and_children(_unnamed_arg0: Node, _unnamed_arg1: Node): void
        readonly item_lock_status_changed: Signal
        readonly item_group_status_changed: Signal
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
    /** A material for [CanvasItem]s. */
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
        /** The manner in which a material's rendering is applied to underlying textures. */
        blend_mode: number /*i64*/
        /** The manner in which material reacts to lighting. */
        light_mode: number /*i64*/
        /** If [code]true[/code], enable spritesheet-based animation features when assigned to [GPUParticles2D] and [CPUParticles2D] nodes. The [member ParticleProcessMaterial.anim_speed_max] or [member CPUParticles2D.anim_speed_max] should also be set to a positive value for the animation to play.
         *  This property (and other [code]particles_anim_*[/code] properties that depend on it) has no effect on other types of nodes.
         */
        particles_animation: boolean
        /** The number of columns in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].
         *  [b]Note:[/b] This property is only used and visible in the editor if [member particles_animation] is [code]true[/code].
         */
        particles_anim_h_frames: number /*i64*/
        /** The number of rows in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].
         *  [b]Note:[/b] This property is only used and visible in the editor if [member particles_animation] is [code]true[/code].
         */
        particles_anim_v_frames: number /*i64*/
        /** If [code]true[/code], the particles animation will loop.
         *  [b]Note:[/b] This property is only used and visible in the editor if [member particles_animation] is [code]true[/code].
         */
        particles_anim_loop: boolean
    }
    class CanvasItemMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A node used for independent rendering of objects within a 2D scene. */
    class CanvasLayer extends Node {
        set_layer(layer: number /*i64*/): void
        get_layer(): number /*i64*/
        set_visible(visible: boolean): void
        is_visible(): boolean
        /** Shows any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to [code]true[/code]. */
        show(): void
        /** Hides any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to [code]false[/code]. */
        hide(): void
        set_transform(transform: Transform2D): void
        get_transform(): Transform2D
        /** Returns the transform from the [CanvasLayer]s coordinate system to the [Viewport]s coordinate system. */
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
        /** Returns the RID of the canvas used by this layer. */
        get_canvas(): RID
        /** Layer index for draw order. Lower values are drawn behind higher values.
         *  [b]Note:[/b] If multiple CanvasLayers have the same layer index, [CanvasItem] children of one CanvasLayer are drawn behind the [CanvasItem] children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.
         */
        layer: number /*i64*/
        /** If [code]false[/code], any [CanvasItem] under this [CanvasLayer] will be hidden.
         *  Unlike [member CanvasItem.visible], visibility of a [CanvasLayer] isn't propagated to underlying layers.
         */
        visible: boolean
        /** The layer's base offset. */
        offset: Vector2
        /** The layer's rotation in radians. */
        rotation: number /*f64*/
        /** The layer's scale. */
        scale: Vector2
        /** The layer's transform. */
        transform: Transform2D
        /** The custom [Viewport] node assigned to the [CanvasLayer]. If [code]null[/code], uses the default viewport instead. */
        custom_viewport: Viewport
        /** If enabled, the [CanvasLayer] will use the viewport's transform, so it will move when camera moves instead of being anchored in a fixed position on the screen.
         *  Together with [member follow_viewport_scale] it can be used for a pseudo 3D effect.
         */
        follow_viewport_enabled: boolean
        /** Scales the layer when using [member follow_viewport_enabled]. Layers moving into the foreground should have increasing scales, while layers moving into the background should have decreasing scales. */
        follow_viewport_scale: number /*f64*/
        readonly visibility_changed: Signal
    }
    /** A node that applies a color tint to a canvas. */
    class CanvasModulate extends Node2D {
        set_color(color: Color): void
        get_color(): Color
        /** The tint color to apply. */
        color: Color
    }
    /** Texture with optional normal and specular maps for use in 2D rendering. */
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
        /** The diffuse (color) texture to use. This is the main texture you want to set in most cases. */
        diffuse_texture: Texture2D
        /** The normal map texture to use. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture].
         *  [b]Note:[/b] Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.
         */
        normal_texture: Texture2D
        /** The specular map to use for [Light2D] specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher [member specular_shininess] value. Using a colored [member specular_texture] allows controlling specular shininess on a per-channel basis. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        specular_texture: Texture2D
        /** The multiplier for specular reflection colors. The [Light2D]'s color is also taken into account when determining the reflection color. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        specular_color: Color
        /** The specular exponent for [Light2D] specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of [code]1.0[/code] disables specular reflections entirely. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        specular_shininess: number /*f64*/
        /** The texture filtering mode to use when drawing this [CanvasTexture]. */
        texture_filter: number /*i64*/
        /** The texture repeat mode to use when drawing this [CanvasTexture]. */
        texture_repeat: number /*i64*/
    }
    /** Class representing a capsule-shaped [PrimitiveMesh]. */
    class CapsuleMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        /** Radius of the capsule mesh. */
        radius: number /*f64*/
        /** Total height of the capsule mesh (including the hemispherical ends). */
        height: number /*f64*/
        /** Number of radial segments on the capsule mesh. */
        radial_segments: number /*i64*/
        /** Number of rings along the height of the capsule. */
        rings: number /*i64*/
    }
    /** A 2D capsule shape used for physics collision. */
    class CapsuleShape2D extends Shape2D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        /** The capsule's radius. */
        radius: number /*f64*/
        /** The capsule's height. */
        height: number /*f64*/
    }
    /** A 3D capsule shape used for physics collision. */
    class CapsuleShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        /** The capsule's radius. */
        radius: number /*f64*/
        /** The capsule's height. */
        height: number /*f64*/
    }
    class Cast2DEditor extends Control {
    }
    class Cast2DEditorPlugin extends EditorPlugin {
    }
    /** A container that keeps child controls in its center. */
    class CenterContainer extends Container {
        set_use_top_left(enable: boolean): void
        is_using_top_left(): boolean
        /** If [code]true[/code], centers children relative to the [CenterContainer]'s top left corner. */
        use_top_left: boolean
    }
    /** Controls how an individual character will be displayed in a [RichTextEffect]. */
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
        /** The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects. */
        transform: Transform2D
        /** Absolute character range in the string, corresponding to the glyph. Setting this property won't affect drawing. */
        range: Vector2i
        /** The time elapsed since the [RichTextLabel] was added to the scene tree (in seconds). Time stops when the [RichTextLabel] is paused (see [member Node.process_mode]). Resets when the text in the [RichTextLabel] is changed.
         *  [b]Note:[/b] Time still passes while the [RichTextLabel] is hidden.
         */
        elapsed_time: number /*f64*/
        /** If [code]true[/code], the character will be drawn. If [code]false[/code], the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [member color] to [code]Color(1, 1, 1, 0)[/code] instead. */
        visible: boolean
        /** If [code]true[/code], FX transform is called for outline drawing. Setting this property won't affect drawing. */
        outline: boolean
        /** The position offset the character will be drawn with (in pixels). */
        offset: Vector2
        /** The color the character will be drawn with. */
        color: Color
        /** Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form [code]#rrggbb[/code] or [code]#rgb[/code] will be converted to an opaque [Color]. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.
         *  For example, the opening BBCode tag [code][example foo=hello bar=true baz=42 color=#ffffff][/code] will map to the following [Dictionary]:
         *  
         */
        env: Dictionary
        /** Font specific glyph index. */
        glyph_index: number /*i64*/
        /** Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster. Setting this property won't affect drawing. */
        glyph_count: number /*i64*/
        /** Glyph flags. See [enum TextServer.GraphemeFlag] for more info. Setting this property won't affect drawing. */
        glyph_flags: number /*i64*/
        /** The character offset of the glyph, relative to the current [RichTextEffect] custom block. Setting this property won't affect drawing. */
        relative_index: number /*i64*/
        /** Font resource used to render glyph. */
        font: RID
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
    /** A 2D physics body specialized for characters moved by script. */
    class CharacterBody2D extends PhysicsBody2D {
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body (by default only on floor) rather than stop immediately. If the other body is a [CharacterBody2D] or [RigidBody2D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for detailed information about collisions that occurred, use [method get_slide_collision].
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.
         *  The general behavior and available properties change according to the [member motion_mode].
         *  Returns [code]true[/code] if the body collided, otherwise, returns [code]false[/code].
         */
        move_and_slide(): boolean
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns [code]true[/code]. */
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
        /** Returns [code]true[/code] if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor(): boolean
        /** Returns [code]true[/code] if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor_only(): boolean
        /** Returns [code]true[/code] if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling(): boolean
        /** Returns [code]true[/code] if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling_only(): boolean
        /** Returns [code]true[/code] if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall(): boolean
        /** Returns [code]true[/code] if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall_only(): boolean
        /** Returns the surface normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
        get_floor_normal(): Vector2
        /** Returns the surface normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns [code]true[/code]. */
        get_wall_normal(): Vector2
        /** Returns the last motion applied to the [CharacterBody2D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        get_last_motion(): Vector2
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        get_position_delta(): Vector2
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        get_real_velocity(): Vector2
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
        get_floor_angle(up_direction: Vector2 = new Vector2(0, -1)): number /*f64*/
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_velocity(): Vector2
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        get_slide_collision_count(): number /*i64*/
        /** Returns a [KinematicCollision2D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1).
         *  [b]Example usage:[/b]
         *  
         */
        get_slide_collision(slide_idx: number /*i64*/): KinematicCollision2D
        /** Returns a [KinematicCollision2D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        get_last_slide_collision(): KinematicCollision2D
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        motion_mode: number /*i64*/
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector2.UP]. As the vector will be normalized it can't be equal to [constant Vector2.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        up_direction: Vector2
        /** Current velocity vector in pixels per second, used and modified during calls to [method move_and_slide]. */
        velocity: Vector2
        /** If [code]true[/code], during a jump against the ceiling, the body will slide, if [code]false[/code] it will be stopped and will fall vertically. */
        slide_on_ceiling: boolean
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. */
        max_slides: number /*i64*/
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. This property only affects movement when [member motion_mode] is [constant MOTION_MODE_FLOATING]. */
        wall_min_slide_angle: number /*f64*/
        /** If [code]true[/code], the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.
         *  If [code]false[/code], the body will slide on floor's slopes when [member velocity] applies a downward force.
         */
        floor_stop_on_slope: boolean
        /** If [code]false[/code] (by default), the body will move faster on downward slopes and slower on upward slopes.
         *  If [code]true[/code], the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.
         */
        floor_constant_speed: boolean
        /** If [code]true[/code], the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        floor_block_on_wall: boolean
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        floor_max_angle: number /*f64*/
        /** Sets a snapping distance. When set to a value different from [code]0.0[/code], the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].
         */
        floor_snap_length: number /*f64*/
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        platform_on_leave: number /*i64*/
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all floor bodies are detected and propagate their velocity. */
        platform_floor_layers: number /*i64*/
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all wall bodies are ignored. */
        platform_wall_layers: number /*i64*/
        /** Extra margin used for collision recovery when calling [method move_and_slide].
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.
         */
        safe_margin: number /*f64*/
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
    /** A 3D physics body specialized for characters moved by script. */
    class CharacterBody3D extends PhysicsBody3D {
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body rather than stop immediately. If the other body is a [CharacterBody3D] or [RigidBody3D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for more detailed information about collisions that occurred, use [method get_slide_collision].
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.
         *  Returns [code]true[/code] if the body collided, otherwise, returns [code]false[/code].
         */
        move_and_slide(): boolean
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns [code]true[/code]. */
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
        /** Returns [code]true[/code] if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor(): boolean
        /** Returns [code]true[/code] if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        is_on_floor_only(): boolean
        /** Returns [code]true[/code] if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling(): boolean
        /** Returns [code]true[/code] if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        is_on_ceiling_only(): boolean
        /** Returns [code]true[/code] if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall(): boolean
        /** Returns [code]true[/code] if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        is_on_wall_only(): boolean
        /** Returns the surface normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
        get_floor_normal(): Vector3
        /** Returns the surface normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns [code]true[/code]. */
        get_wall_normal(): Vector3
        /** Returns the last motion applied to the [CharacterBody3D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        get_last_motion(): Vector3
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        get_position_delta(): Vector3
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        get_real_velocity(): Vector3
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
        get_floor_angle(up_direction: Vector3 = Vector3.ZERO): number /*f64*/
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_velocity(): Vector3
        /** Returns the angular velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        get_platform_angular_velocity(): Vector3
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        get_slide_collision_count(): number /*i64*/
        /** Returns a [KinematicCollision3D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1). */
        get_slide_collision(slide_idx: number /*i64*/): KinematicCollision3D
        /** Returns a [KinematicCollision3D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        get_last_slide_collision(): KinematicCollision3D
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        motion_mode: number /*i64*/
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector3.UP]. As the vector will be normalized it can't be equal to [constant Vector3.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        up_direction: Vector3
        /** If [code]true[/code], during a jump against the ceiling, the body will slide, if [code]false[/code] it will be stopped and will fall vertically. */
        slide_on_ceiling: boolean
        /** Current velocity vector (typically meters per second), used and modified during calls to [method move_and_slide]. */
        velocity: Vector3
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. */
        max_slides: number /*i64*/
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. When [member motion_mode] is [constant MOTION_MODE_GROUNDED], it only affects movement if [member floor_block_on_wall] is [code]true[/code]. */
        wall_min_slide_angle: number /*f64*/
        /** If [code]true[/code], the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.
         *  If [code]false[/code], the body will slide on floor's slopes when [member velocity] applies a downward force.
         */
        floor_stop_on_slope: boolean
        /** If [code]false[/code] (by default), the body will move faster on downward slopes and slower on upward slopes.
         *  If [code]true[/code], the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.
         */
        floor_constant_speed: boolean
        /** If [code]true[/code], the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        floor_block_on_wall: boolean
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        floor_max_angle: number /*f64*/
        /** Sets a snapping distance. When set to a value different from [code]0.0[/code], the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].
         */
        floor_snap_length: number /*f64*/
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        platform_on_leave: number /*i64*/
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all floor bodies are detected and propagate their velocity. */
        platform_floor_layers: number /*i64*/
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all wall bodies are ignored. */
        platform_wall_layers: number /*i64*/
        /** Extra margin used for collision recovery when calling [method move_and_slide].
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.
         */
        safe_margin: number /*f64*/
    }
    /** A button that represents a binary choice. */
    class CheckBox extends Button {
    }
    /** A button that represents a binary choice. */
    class CheckButton extends Button {
    }
    /** A 2D circle shape used for physics collision. */
    class CircleShape2D extends Shape2D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        /** The circle's radius. */
        radius: number /*f64*/
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
    /** A multiline text editor designed for editing code. */
    class CodeEdit extends TextEdit {
        /* gdvirtual */ _confirm_code_completion(replace: boolean): void
        /* gdvirtual */ _request_code_completion(force: boolean): void
        /* gdvirtual */ _filter_code_completion_candidates(candidates: Array): Array
        set_indent_size(size: number /*i64*/): void
        get_indent_size(): number /*i64*/
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
         *  Values of [code]-1[/code] convert the entire text.
         */
        convert_indent(from_line: number /*i64*/ = -1, to_line: number /*i64*/ = -1): void
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
        /** Returns [code]true[/code] if open key [param open_key] exists. */
        has_auto_brace_completion_open_key(open_key: string): boolean
        /** Returns [code]true[/code] if close key [param close_key] exists. */
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
        set_line_as_breakpoint(line: number /*i64*/, breakpointed: boolean): void
        /** Returns whether the line at the specified index is breakpointed or not. */
        is_line_breakpointed(line: number /*i64*/): boolean
        /** Clears all breakpointed lines. */
        clear_breakpointed_lines(): void
        /** Gets all breakpointed lines. */
        get_breakpointed_lines(): PackedInt32Array
        /** Sets the line as bookmarked. */
        set_line_as_bookmarked(line: number /*i64*/, bookmarked: boolean): void
        /** Returns whether the line at the specified index is bookmarked or not. */
        is_line_bookmarked(line: number /*i64*/): boolean
        /** Clears all bookmarked lines. */
        clear_bookmarked_lines(): void
        /** Gets all bookmarked lines. */
        get_bookmarked_lines(): PackedInt32Array
        /** Sets the line as executing. */
        set_line_as_executing(line: number /*i64*/, executing: boolean): void
        /** Returns whether the line at the specified index is marked as executing or not. */
        is_line_executing(line: number /*i64*/): boolean
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
        can_fold_line(line: number /*i64*/): boolean
        /** Folds the given line, if possible (see [method can_fold_line]). */
        fold_line(line: number /*i64*/): void
        /** Unfolds all lines that were previously folded. */
        unfold_line(line: number /*i64*/): void
        /** Folds all lines that are possible to be folded (see [method can_fold_line]). */
        fold_all_lines(): void
        /** Unfolds all lines, folded or not. */
        unfold_all_lines(): void
        /** Toggle the folding of the code block at the given line. */
        toggle_foldable_line(line: number /*i64*/): void
        /** Returns whether the line at the specified index is folded or not. */
        is_line_folded(line: number /*i64*/): boolean
        /** Returns all lines that are current folded. */
        get_folded_lines(): Array
        /** Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see [method add_comment_delimiter]).
         *  A code region is a part of code that is highlighted when folded and can help organize your script.
         *  Code region start and end tags can be customized (see [method set_code_region_tags]).
         *  Code regions are delimited using start and end tags (respectively [code]region[/code] and [code]endregion[/code] by default) preceded by one line comment delimiter. (eg. [code]#region[/code] and [code]#endregion[/code])
         */
        create_code_region(): void
        /** Returns the code region start tag (without comment delimiter). */
        get_code_region_start_tag(): string
        /** Returns the code region end tag (without comment delimiter). */
        get_code_region_end_tag(): string
        /** Sets the code region start and end tags (without comment delimiter). */
        set_code_region_tags(start: string = 'region', end: string = 'endregion'): void
        /** Returns whether the line at the specified index is a code region start. */
        is_line_code_region_start(line: number /*i64*/): boolean
        /** Returns whether the line at the specified index is a code region end. */
        is_line_code_region_end(line: number /*i64*/): boolean
        /** Adds a string delimiter.
         *  Both the start and end keys must be symbols. Only the start key has to be unique.
         *  [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to [code]true[/code].
         */
        add_string_delimiter(start_key: string, end_key: string, line_only: boolean = false): void
        /** Removes the string delimiter with [param start_key]. */
        remove_string_delimiter(start_key: string): void
        /** Returns [code]true[/code] if string [param start_key] exists. */
        has_string_delimiter(start_key: string): boolean
        set_string_delimiters(string_delimiters: Array): void
        /** Removes all string delimiters. */
        clear_string_delimiters(): void
        get_string_delimiters(): Array
        /** Returns the delimiter index if [param line] [param column] is in a string. If [param column] is not provided, will return the delimiter index if the entire [param line] is a string. Otherwise [code]-1[/code]. */
        is_in_string(line: number /*i64*/, column: number /*i64*/ = -1): number /*i64*/
        /** Adds a comment delimiter.
         *  Both the start and end keys must be symbols. Only the start key has to be unique.
         *  [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to [code]true[/code].
         */
        add_comment_delimiter(start_key: string, end_key: string, line_only: boolean = false): void
        /** Removes the comment delimiter with [param start_key]. */
        remove_comment_delimiter(start_key: string): void
        /** Returns [code]true[/code] if comment [param start_key] exists. */
        has_comment_delimiter(start_key: string): boolean
        set_comment_delimiters(comment_delimiters: Array): void
        /** Removes all comment delimiters. */
        clear_comment_delimiters(): void
        get_comment_delimiters(): Array
        /** Returns delimiter index if [param line] [param column] is in a comment. If [param column] is not provided, will return delimiter index if the entire [param line] is a comment. Otherwise [code]-1[/code]. */
        is_in_comment(line: number /*i64*/, column: number /*i64*/ = -1): number /*i64*/
        /** Gets the start key for a string or comment region index. */
        get_delimiter_start_key(delimiter_index: number /*i64*/): string
        /** Gets the end key for a string or comment region index. */
        get_delimiter_end_key(delimiter_index: number /*i64*/): string
        /** If [param line] [param column] is in a string or comment, returns the start position of the region. If not or no start could be found, both [Vector2] values will be [code]-1[/code]. */
        get_delimiter_start_position(line: number /*i64*/, column: number /*i64*/): Vector2
        /** If [param line] [param column] is in a string or comment, returns the end position of the region. If not or no end could be found, both [Vector2] values will be [code]-1[/code]. */
        get_delimiter_end_position(line: number /*i64*/, column: number /*i64*/): Vector2
        /** Sets the code hint text. Pass an empty string to clear. */
        set_code_hint(code_hint: string): void
        /** Sets if the code hint should draw below the text. */
        set_code_hint_draw_below(draw_below: boolean): void
        /** Returns the full text with char [code]0xFFFF[/code] at the caret location. */
        get_text_for_code_completion(): string
        /** Emits [signal code_completion_requested], if [param force] is true will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path or signal. */
        request_code_completion(force: boolean = false): void
        /** Submits an item to the queue of potential candidates for the autocomplete menu. Call [method update_code_completion_options] to update the list.
         *  [param location] indicates location of the option relative to the location of the code completion query. See [enum CodeEdit.CodeCompletionLocation] for how to set this value.
         *  [b]Note:[/b] This list will replace all current candidates.
         */
        add_code_completion_option(type: CodeEdit.CodeCompletionKind, display_text: string, insert_text: string, text_color: Color = new Color(1, 1, 1, 1), icon: Resource = <any> {} /*compound.type from nil*/, value: any = <any> {} /*compound.type from nil*/, location: number /*i64*/ = 1024): void
        /** Submits all completion options added with [method add_code_completion_option]. Will try to force the autocomplete menu to popup, if [param force] is [code]true[/code].
         *  [b]Note:[/b] This will replace all current candidates.
         */
        update_code_completion_options(force: boolean): void
        /** Gets all completion options, see [method get_code_completion_option] for return content. */
        get_code_completion_options(): Array
        /** Gets the completion option at [param index]. The return [Dictionary] has the following key-values:
         *  [code]kind[/code]: [enum CodeCompletionKind]
         *  [code]display_text[/code]: Text that is shown on the autocomplete menu.
         *  [code]insert_text[/code]: Text that is to be inserted when this item is selected.
         *  [code]font_color[/code]: Color of the text on the autocomplete menu.
         *  [code]icon[/code]: Icon to draw on the autocomplete menu.
         *  [code]default_value[/code]: Value of the symbol.
         */
        get_code_completion_option(index: number /*i64*/): Dictionary
        /** Gets the index of the current selected completion option. */
        get_code_completion_selected_index(): number /*i64*/
        /** Sets the current selected completion option. */
        set_code_completion_selected_index(index: number /*i64*/): void
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
        /** Returns the full text with char [code]0xFFFF[/code] at the cursor location. */
        get_text_for_symbol_lookup(): string
        /** Returns the full text with char [code]0xFFFF[/code] at the specified location. */
        get_text_with_cursor_char(line: number /*i64*/, column: number /*i64*/): string
        /** Sets the symbol emitted by [signal symbol_validate] as a valid lookup. */
        set_symbol_lookup_word_as_valid(valid: boolean): void
        /** Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line. */
        duplicate_lines(): void
        /** Set when a validated word from [signal symbol_validate] is clicked, the [signal symbol_lookup] should be emitted. */
        symbol_lookup_on_click: boolean
        /** Sets whether line folding is allowed. */
        line_folding: boolean
        /** Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is draw more prominently. */
        line_length_guidelines: PackedInt32Array
        /** Sets if breakpoints should be drawn in the gutter. This gutter is shared with bookmarks and executing lines. */
        gutters_draw_breakpoints_gutter: boolean
        /** Sets if bookmarked should be drawn in the gutter. This gutter is shared with breakpoints and executing lines. */
        gutters_draw_bookmarks: boolean
        /** Sets if executing lines should be marked in the gutter. This gutter is shared with breakpoints and bookmarks lines. */
        gutters_draw_executing_lines: boolean
        /** Sets if line numbers should be drawn in the gutter. */
        gutters_draw_line_numbers: boolean
        /** Sets if line numbers drawn in the gutter are zero padded. */
        gutters_zero_pad_line_numbers: boolean
        /** Sets if foldable lines icons should be drawn in the gutter. */
        gutters_draw_fold_gutter: boolean
        /** Sets the string delimiters. All existing string delimiters will be removed. */
        delimiter_strings: PackedStringArray
        /** Sets the comment delimiters. All existing comment delimiters will be removed. */
        delimiter_comments: PackedStringArray
        /** Sets whether code completion is allowed. */
        code_completion_enabled: boolean
        /** Sets prefixes that will trigger code completion. */
        code_completion_prefixes: PackedStringArray
        /** Size of the tabulation indent (one [kbd]Tab[/kbd] press) in characters. If [member indent_use_spaces] is enabled the number of spaces to use. */
        indent_size: number /*i64*/
        /** Use spaces instead of tabs for indentation. */
        indent_use_spaces: boolean
        /** Sets whether automatic indent are enabled, this will add an extra indent if a prefix or brace is found. */
        indent_automatic: boolean
        /** Prefixes to trigger an automatic indent. */
        indent_automatic_prefixes: PackedStringArray
        /** Sets whether brace pairs should be autocompleted. */
        auto_brace_completion_enabled: boolean
        /** Highlight mismatching brace pairs. */
        auto_brace_completion_highlight_matching: boolean
        /** Sets the brace pairs to be autocompleted. */
        auto_brace_completion_pairs: Dictionary
        readonly breakpoint_toggled: Signal
        readonly code_completion_requested: Signal
        readonly symbol_lookup: Signal
        readonly symbol_validate: Signal
    }
    /** A syntax highlighter intended for code. */
    class CodeHighlighter extends SyntaxHighlighter {
        /** Sets the color for a keyword.
         *  The keyword cannot contain any symbols except '_'.
         */
        add_keyword_color(keyword: string, color: Color): void
        /** Removes the keyword. */
        remove_keyword_color(keyword: string): void
        /** Returns [code]true[/code] if the keyword exists, else [code]false[/code]. */
        has_keyword_color(keyword: string): boolean
        /** Returns the color for a keyword. */
        get_keyword_color(keyword: string): Color
        set_keyword_colors(keywords: Dictionary): void
        /** Removes all keywords. */
        clear_keyword_colors(): void
        get_keyword_colors(): Dictionary
        /** Sets the color for a member keyword.
         *  The member keyword cannot contain any symbols except '_'.
         *  It will not be highlighted if preceded by a '.'.
         */
        add_member_keyword_color(member_keyword: string, color: Color): void
        /** Removes the member keyword. */
        remove_member_keyword_color(member_keyword: string): void
        /** Returns [code]true[/code] if the member keyword exists, else [code]false[/code]. */
        has_member_keyword_color(member_keyword: string): boolean
        /** Returns the color for a member keyword. */
        get_member_keyword_color(member_keyword: string): Color
        set_member_keyword_colors(member_keyword: Dictionary): void
        /** Removes all member keywords. */
        clear_member_keyword_colors(): void
        get_member_keyword_colors(): Dictionary
        /** Adds a color region such as comments or strings.
         *  Both the start and end keys must be symbols. Only the start key has to be unique.
         *  [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to [code]true[/code].
         */
        add_color_region(start_key: string, end_key: string, color: Color, line_only: boolean = false): void
        /** Removes the color region that uses that start key. */
        remove_color_region(start_key: string): void
        /** Returns [code]true[/code] if the start key exists, else [code]false[/code]. */
        has_color_region(start_key: string): boolean
        set_color_regions(color_regions: Dictionary): void
        /** Removes all color regions. */
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
        /** Sets the color for numbers. */
        number_color: Color
        /** Sets the color for symbols. */
        symbol_color: Color
        /** Sets color for functions. A function is a non-keyword string followed by a '('. */
        function_color: Color
        /** Sets color for member variables. A member variable is non-keyword, non-function string proceeded with a '.'. */
        member_variable_color: Color
        /** Sets the keyword colors. All existing keywords will be removed. The [Dictionary] key is the keyword. The value is the keyword color. */
        keyword_colors: Dictionary
        /** Sets the member keyword colors. All existing member keyword will be removed. The [Dictionary] key is the member keyword. The value is the member keyword color. */
        member_keyword_colors: Dictionary
        /** Sets the color regions. All existing regions will be removed. The [Dictionary] key is the region start and end key, separated by a space. The value is the region color. */
        color_regions: Dictionary
    }
    class CodeTextEditor extends VBoxContainer {
        readonly validate_script: Signal
        readonly load_theme_settings: Signal
        readonly show_errors_panel: Signal
        readonly show_warnings_panel: Signal
    }
    namespace CollisionObject2D {
        enum DisableMode {
            DISABLE_MODE_REMOVE = 0,
            DISABLE_MODE_MAKE_STATIC = 1,
            DISABLE_MODE_KEEP_ACTIVE = 2,
        }
    }
    /** Abstract base class for 2D physics objects. */
    class CollisionObject2D extends Node2D {
        /* gdvirtual */ _input_event(viewport: Viewport, event: InputEvent, shape_idx: number /*i64*/): void
        /* gdvirtual */ _mouse_enter(): void
        /* gdvirtual */ _mouse_exit(): void
        /* gdvirtual */ _mouse_shape_enter(shape_idx: number /*i64*/): void
        /* gdvirtual */ _mouse_shape_exit(shape_idx: number /*i64*/): void
        /** Returns the object's [RID]. */
        get_rid(): RID
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_disable_mode(mode: CollisionObject2D.DisableMode): void
        get_disable_mode(): CollisionObject2D.DisableMode
        set_pickable(enabled: boolean): void
        is_pickable(): boolean
        /** Creates a new shape owner for the given object. Returns [code]owner_id[/code] of the new owner for future reference. */
        create_shape_owner(owner: Object): number /*i64*/
        /** Removes the given shape owner. */
        remove_shape_owner(owner_id: number /*i64*/): void
        /** Returns an [Array] of [code]owner_id[/code] identifiers. You can use these ids in other methods that take [code]owner_id[/code] as an argument. */
        get_shape_owners(): PackedInt32Array
        /** Sets the [Transform2D] of the given shape owner. */
        shape_owner_set_transform(owner_id: number /*i64*/, transform: Transform2D): void
        /** Returns the shape owner's [Transform2D]. */
        shape_owner_get_transform(owner_id: number /*i64*/): Transform2D
        /** Returns the parent object of the given shape owner. */
        shape_owner_get_owner(owner_id: number /*i64*/): Object
        /** If [code]true[/code], disables the given shape owner. */
        shape_owner_set_disabled(owner_id: number /*i64*/, disabled: boolean): void
        /** If [code]true[/code], the shape owner and its shapes are disabled. */
        is_shape_owner_disabled(owner_id: number /*i64*/): boolean
        /** If [param enable] is [code]true[/code], collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
        shape_owner_set_one_way_collision(owner_id: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
        is_shape_owner_one_way_collision_enabled(owner_id: number /*i64*/): boolean
        /** Sets the [code]one_way_collision_margin[/code] of the shape owner identified by given [param owner_id] to [param margin] pixels. */
        shape_owner_set_one_way_collision_margin(owner_id: number /*i64*/, margin: number /*f64*/): void
        /** Returns the [code]one_way_collision_margin[/code] of the shape owner identified by given [param owner_id]. */
        get_shape_owner_one_way_collision_margin(owner_id: number /*i64*/): number /*f64*/
        /** Adds a [Shape2D] to the shape owner. */
        shape_owner_add_shape(owner_id: number /*i64*/, shape: Shape2D): void
        /** Returns the number of shapes the given shape owner contains. */
        shape_owner_get_shape_count(owner_id: number /*i64*/): number /*i64*/
        /** Returns the [Shape2D] with the given ID from the given shape owner. */
        shape_owner_get_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): Shape2D
        /** Returns the child index of the [Shape2D] with the given ID from the given shape owner. */
        shape_owner_get_shape_index(owner_id: number /*i64*/, shape_id: number /*i64*/): number /*i64*/
        /** Removes a shape from the given shape owner. */
        shape_owner_remove_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): void
        /** Removes all shapes from the shape owner. */
        shape_owner_clear_shapes(owner_id: number /*i64*/): void
        /** Returns the [code]owner_id[/code] of the given shape. */
        shape_find_owner(shape_index: number /*i64*/): number /*i64*/
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        disable_mode: number /*i64*/
        /** The physics layers this CollisionObject2D is in. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_layer: number /*i64*/
        /** The physics layers this CollisionObject2D scans. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_mask: number /*i64*/
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        collision_priority: number /*f64*/
        /** If [code]true[/code], this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
        input_pickable: boolean
        readonly input_event: Signal
        readonly mouse_entered: Signal
        readonly mouse_exited: Signal
        readonly mouse_shape_entered: Signal
        readonly mouse_shape_exited: Signal
    }
    namespace CollisionObject3D {
        enum DisableMode {
            DISABLE_MODE_REMOVE = 0,
            DISABLE_MODE_MAKE_STATIC = 1,
            DISABLE_MODE_KEEP_ACTIVE = 2,
        }
    }
    /** Abstract base class for 3D physics objects. */
    class CollisionObject3D extends Node3D {
        /* gdvirtual */ _input_event(camera: Camera3D, event: InputEvent, position: Vector3, normal: Vector3, shape_idx: number /*i64*/): void
        /* gdvirtual */ _mouse_enter(): void
        /* gdvirtual */ _mouse_exit(): void
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
        set_disable_mode(mode: CollisionObject3D.DisableMode): void
        get_disable_mode(): CollisionObject3D.DisableMode
        set_ray_pickable(ray_pickable: boolean): void
        is_ray_pickable(): boolean
        set_capture_input_on_drag(enable: boolean): void
        get_capture_input_on_drag(): boolean
        /** Returns the object's [RID]. */
        get_rid(): RID
        /** Creates a new shape owner for the given object. Returns [code]owner_id[/code] of the new owner for future reference. */
        create_shape_owner(owner: Object): number /*i64*/
        /** Removes the given shape owner. */
        remove_shape_owner(owner_id: number /*i64*/): void
        /** Returns an [Array] of [code]owner_id[/code] identifiers. You can use these ids in other methods that take [code]owner_id[/code] as an argument. */
        get_shape_owners(): PackedInt32Array
        /** Sets the [Transform3D] of the given shape owner. */
        shape_owner_set_transform(owner_id: number /*i64*/, transform: Transform3D): void
        /** Returns the shape owner's [Transform3D]. */
        shape_owner_get_transform(owner_id: number /*i64*/): Transform3D
        /** Returns the parent object of the given shape owner. */
        shape_owner_get_owner(owner_id: number /*i64*/): Object
        /** If [code]true[/code], disables the given shape owner. */
        shape_owner_set_disabled(owner_id: number /*i64*/, disabled: boolean): void
        /** If [code]true[/code], the shape owner and its shapes are disabled. */
        is_shape_owner_disabled(owner_id: number /*i64*/): boolean
        /** Adds a [Shape3D] to the shape owner. */
        shape_owner_add_shape(owner_id: number /*i64*/, shape: Shape3D): void
        /** Returns the number of shapes the given shape owner contains. */
        shape_owner_get_shape_count(owner_id: number /*i64*/): number /*i64*/
        /** Returns the [Shape3D] with the given ID from the given shape owner. */
        shape_owner_get_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): Shape3D
        /** Returns the child index of the [Shape3D] with the given ID from the given shape owner. */
        shape_owner_get_shape_index(owner_id: number /*i64*/, shape_id: number /*i64*/): number /*i64*/
        /** Removes a shape from the given shape owner. */
        shape_owner_remove_shape(owner_id: number /*i64*/, shape_id: number /*i64*/): void
        /** Removes all shapes from the shape owner. */
        shape_owner_clear_shapes(owner_id: number /*i64*/): void
        /** Returns the [code]owner_id[/code] of the given shape. */
        shape_find_owner(shape_index: number /*i64*/): number /*i64*/
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        disable_mode: number /*i64*/
        /** The physics layers this CollisionObject3D [b]is in[/b]. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_layer: number /*i64*/
        /** The physics layers this CollisionObject3D [b]scans[/b]. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_mask: number /*i64*/
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        collision_priority: number /*f64*/
        /** If [code]true[/code], this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
        input_ray_pickable: boolean
        /** If [code]true[/code], the [CollisionObject3D] will continue to receive input events as the mouse is dragged across its shapes. */
        input_capture_on_drag: boolean
        readonly input_event: Signal
        readonly mouse_entered: Signal
        readonly mouse_exited: Signal
    }
    class CollisionObject3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace CollisionPolygon2D {
        enum BuildMode {
            BUILD_SOLIDS = 0,
            BUILD_SEGMENTS = 1,
        }
    }
    /** A node that provides a polygon shape to a [CollisionObject2D] parent. */
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
        /** Collision build mode. Use one of the [enum BuildMode] constants. */
        build_mode: number /*i64*/
        /** The polygon's list of vertices. Each point will be connected to the next, and the final point will be connected to the first.
         *  [b]Note:[/b] The returned vertices are in the local coordinate space of the given [CollisionPolygon2D].
         *  [b]Warning:[/b] The returned value is a clone of the [PackedVector2Array], not a reference.
         */
        polygon: PackedVector2Array
        /** If [code]true[/code], no collisions will be detected. */
        disabled: boolean
        /** If [code]true[/code], only edges that face up, relative to [CollisionPolygon2D]'s rotation, will collide with other objects.
         *  [b]Note:[/b] This property has no effect if this [CollisionPolygon2D] is a child of an [Area2D] node.
         */
        one_way_collision: boolean
        /** The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the polygon at a high velocity. */
        one_way_collision_margin: number /*f64*/
    }
    class CollisionPolygon2DEditor extends AbstractPolygon2DEditor {
    }
    class CollisionPolygon2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    /** A node that provides a thickened polygon shape (a prism) to a [CollisionObject3D] parent. */
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
        /** Length that the resulting collision extends in either direction perpendicular to its 2D polygon. */
        depth: number /*f64*/
        /** If [code]true[/code], no collision will be produced. */
        disabled: boolean
        /** Array of vertices which define the 2D polygon in the local XY plane.
         *  [b]Note:[/b] The returned value is a copy of the original. Methods which mutate the size or properties of the return value will not impact the original polygon. To change properties of the polygon, assign it to a temporary variable and make changes before reassigning the class property.
         */
        polygon: PackedVector2Array
        /** The collision margin for the generated [Shape3D]. See [member Shape3D.margin] for more details. */
        margin: number /*f64*/
    }
    class CollisionPolygon3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A node that provides a [Shape2D] to a [CollisionObject2D] parent. */
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
        /** The actual shape owned by this collision shape. */
        shape: Shape2D
        /** A disabled collision shape has no effect in the world. This property should be changed with [method Object.set_deferred]. */
        disabled: boolean
        /** Sets whether this collision shape should only detect collision on one side (top or bottom).
         *  [b]Note:[/b] This property has no effect if this [CollisionShape2D] is a child of an [Area2D] node.
         */
        one_way_collision: boolean
        /** The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the shape at a high velocity. */
        one_way_collision_margin: number /*f64*/
        /** The collision shape debug color.
         *  [b]Note:[/b] The default value is [member ProjectSettings.debug/shapes/collision/shape_color]. The [code]Color(0, 0, 0, 1)[/code] value documented here is a placeholder, and not the actual default debug color.
         */
        debug_color: Color
    }
    class CollisionShape2DEditor extends Control {
    }
    class CollisionShape2DEditorPlugin extends EditorPlugin {
    }
    /** A node that provides a [Shape3D] to a [CollisionObject3D] parent. */
    class CollisionShape3D extends Node3D {
        /** [i]Obsoleted.[/i] Use [signal Resource.changed] instead. */
        resource_changed(resource: Resource): void
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        set_disabled(enable: boolean): void
        is_disabled(): boolean
        /** Sets the collision shape's shape to the addition of all its convexed [MeshInstance3D] siblings geometry. */
        make_convex_from_siblings(): void
        /** The actual shape owned by this collision shape. */
        shape: Shape3D
        /** A disabled collision shape has no effect in the world. */
        disabled: boolean
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
    /** A widget that provides an interface for selecting or modifying a color. */
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
        /** Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.
         *  [b]Note:[/b] The presets list is only for [i]this[/i] color picker.
         */
        add_preset(color: Color): void
        /** Removes the given color from the list of color presets of this color picker. */
        erase_preset(color: Color): void
        /** Returns the list of colors in the presets of the color picker. */
        get_presets(): PackedColorArray
        /** Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.
         *  [b]Note:[/b] The recent presets list is only for [i]this[/i] color picker.
         */
        add_recent_preset(color: Color): void
        /** Removes the given color from the list of color recent presets of this color picker. */
        erase_recent_preset(color: Color): void
        /** Returns the list of colors in the recent presets of the color picker. */
        get_recent_presets(): PackedColorArray
        set_picker_shape(shape: ColorPicker.PickerShapeType): void
        get_picker_shape(): ColorPicker.PickerShapeType
        /** The currently selected color. */
        color: Color
        /** If [code]true[/code], shows an alpha channel slider (opacity). */
        edit_alpha: boolean
        /** The currently selected color mode. See [enum ColorModeType]. */
        color_mode: number /*i64*/
        /** If [code]true[/code], the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues). */
        deferred_mode: boolean
        /** The shape of the color space view. See [enum PickerShapeType]. */
        picker_shape: number /*i64*/
        /** If [code]true[/code], it's possible to add presets under Swatches. If [code]false[/code], the button to add presets is disabled. */
        can_add_swatches: boolean
        /** If [code]true[/code], the color sampler and color preview are visible. */
        sampler_visible: boolean
        /** If [code]true[/code], the color mode buttons are visible. */
        color_modes_visible: boolean
        /** If [code]true[/code], the color sliders are visible. */
        sliders_visible: boolean
        /** If [code]true[/code], the hex color code input field is visible. */
        hex_visible: boolean
        /** If [code]true[/code], the Swatches and Recent Colors presets are visible. */
        presets_visible: boolean
        readonly color_changed: Signal
        readonly preset_added: Signal
        readonly preset_removed: Signal
    }
    /** A button that brings up a [ColorPicker] when pressed. */
    class ColorPickerButton extends Button {
        set_pick_color(color: Color): void
        get_pick_color(): Color
        /** Returns the [ColorPicker] that this node toggles.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_picker(): ColorPicker
        /** Returns the control's [PopupPanel] which allows you to connect to popup signals. This allows you to handle events when the ColorPicker is shown or hidden.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_popup(): PopupPanel
        set_edit_alpha(show: boolean): void
        is_editing_alpha(): boolean
        _about_to_popup(): void
        /** The currently selected color. */
        color: Color
        /** If [code]true[/code], the alpha channel in the displayed [ColorPicker] will be visible. */
        edit_alpha: boolean
        readonly color_changed: Signal
        readonly popup_closed: Signal
        readonly picker_created: Signal
    }
    /** A control that displays a solid color rectangle. */
    class ColorRect extends Control {
        set_color(color: Color): void
        get_color(): Color
        /** The fill color of the rectangle. */
        color: Color
    }
    /** An optionally compressed [Cubemap]. */
    class CompressedCubemap extends CompressedTextureLayered {
    }
    /** An optionally compressed [CubemapArray]. */
    class CompressedCubemapArray extends CompressedTextureLayered {
    }
    /** Texture with 2 dimensions, optionally compressed. */
    class CompressedTexture2D extends Texture2D {
        /** Loads the texture from the specified [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        /** The [CompressedTexture2D]'s file path to a [code].ctex[/code] file. */
        load_path: string
    }
    /** Array of 2-dimensional textures, optionally compressed. */
    class CompressedTexture2DArray extends CompressedTextureLayered {
    }
    /** Texture with 3 dimensions, optionally compressed. */
    class CompressedTexture3D extends Texture3D {
        /** Loads the texture from the specified [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        /** The [CompressedTexture3D]'s file path to a [code].ctex3d[/code] file. */
        load_path: string
    }
    /** Base class for texture arrays that can optionally be compressed. */
    class CompressedTextureLayered extends TextureLayered {
        /** Loads the texture at [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        /** The path the texture should be loaded from. */
        load_path: string
    }
    /** A 2D polyline shape used for physics collision. */
    class ConcavePolygonShape2D extends Shape2D {
        set_segments(segments: PackedVector2Array): void
        get_segments(): PackedVector2Array
        /** The array of points that make up the [ConcavePolygonShape2D]'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment. */
        segments: PackedVector2Array
    }
    /** A 3D trimesh shape used for physics collision. */
    class ConcavePolygonShape3D extends Shape3D {
        /** Sets the faces of the trimesh shape from an array of vertices. The [param faces] array should be composed of triples such that each triple of vertices defines a triangle. */
        set_faces(faces: PackedVector3Array): void
        /** Returns the faces of the trimesh shape as an array of vertices. The array (of length divisible by three) is naturally divided into triples; each triple of vertices defines a triangle. */
        get_faces(): PackedVector3Array
        set_backface_collision_enabled(enabled: boolean): void
        is_backface_collision_enabled(): boolean
        data: PackedVector3Array
        /** If set to [code]true[/code], collisions occur on both sides of the concave shape faces. Otherwise they occur only along the face normals. */
        backface_collision: boolean
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
    /** A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint. */
    class ConeTwistJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: ConeTwistJoint3D.Param, value: number /*f64*/): void
        /** Returns the value of the specified parameter. */
        get_param(param: ConeTwistJoint3D.Param): number /*f64*/
    }
    /** Helper class to handle INI-style files. */
    class ConfigFile extends RefCounted {
        /** Assigns a value to the specified key of the specified section. If either the section or the key do not exist, they are created. Passing a [code]null[/code] value deletes the specified key if it exists, and deletes the section if it ends up empty once the key has been removed. */
        set_value(section: string, key: string, value: any): void
        /** Returns the current value for the specified section and key. If either the section or the key do not exist, the method returns the fallback [param default] value. If [param default] is not specified or set to [code]null[/code], an error is also raised. */
        get_value(section: string, key: string, default_: any = <any> {} /*compound.type from nil*/): any
        /** Returns [code]true[/code] if the specified section exists. */
        has_section(section: string): boolean
        /** Returns [code]true[/code] if the specified section-key pair exists. */
        has_section_key(section: string, key: string): boolean
        /** Returns an array of all defined section identifiers. */
        get_sections(): PackedStringArray
        /** Returns an array of all defined key identifiers in the specified section. Raises an error and returns an empty array if the section does not exist. */
        get_section_keys(section: string): PackedStringArray
        /** Deletes the specified section along with all the key-value pairs inside. Raises an error if the section does not exist. */
        erase_section(section: string): void
        /** Deletes the specified key in a section. Raises an error if either the section or the key do not exist. */
        erase_section_key(section: string, key: string): void
        /** Loads the config file specified as a parameter. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        load(path: string): GodotError
        /** Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        parse(data: string): GodotError
        /** Saves the contents of the [ConfigFile] object to the file specified as a parameter. The output file uses an INI-style structure.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        save(path: string): GodotError
        /** Obtain the text version of this config file (the same text that would be written to a file). */
        encode_to_text(): string
        /** Loads the encrypted config file specified as a parameter, using the provided [param key] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        load_encrypted(path: string, key: PackedByteArray): GodotError
        /** Loads the encrypted config file specified as a parameter, using the provided [param password] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        load_encrypted_pass(path: string, password: string): GodotError
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param key] to encrypt it. The output file uses an INI-style structure.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        save_encrypted(path: string, key: PackedByteArray): GodotError
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param password] to encrypt it. The output file uses an INI-style structure.
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.
         */
        save_encrypted_pass(path: string, password: string): GodotError
        /** Removes the entire contents of the config. */
        clear(): void
    }
    /** A dialog used for confirmation of actions. */
    class ConfirmationDialog extends AcceptDialog {
        /** Returns the cancel button.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_cancel_button(): Button
        set_cancel_button_text(text: string): void
        get_cancel_button_text(): string
        /** The text displayed by the cancel button (see [method get_cancel_button]). */
        cancel_button_text: string
    }
    class ConnectDialog extends ConfirmationDialog {
        readonly connected: Signal
    }
    class ConnectDialogBinds extends Object {
    }
    class ConnectionInfoDialog extends AcceptDialog {
    }
    class ConnectionsDock extends VBoxContainer {
        update_tree(): void
    }
    /** Base class for all GUI containers. */
    class Container extends Control {
        static readonly NOTIFICATION_PRE_SORT_CHILDREN = 50
        static readonly NOTIFICATION_SORT_CHILDREN = 51
        /* gdvirtual */ _get_allowed_size_flags_horizontal(): PackedInt32Array
        /* gdvirtual */ _get_allowed_size_flags_vertical(): PackedInt32Array
        /** Queue resort of the contained children. This is called automatically anyway, but can be called upon request. */
        queue_sort(): void
        /** Fit a child control in a given rect. This is mainly a helper for creating custom container classes. */
        fit_child_in_rect(child: Control, rect: Rect2): void
        readonly pre_sort_children: Signal
        readonly sort_children: Signal
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
    /** Base class for all GUI controls. Adapts its position and size based on its parent control. */
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
        /* gdvirtual */ _has_point(point: Vector2): boolean
        /* gdvirtual */ _structured_text_parser(args: Array, text: string): Array
        /* gdvirtual */ _get_minimum_size(): Vector2
        /* gdvirtual */ _get_tooltip(at_position: Vector2): string
        /* gdvirtual */ _get_drag_data(at_position: Vector2): void
        /* gdvirtual */ _can_drop_data(at_position: Vector2, data: any): boolean
        /* gdvirtual */ _drop_data(at_position: Vector2, data: any): void
        /* gdvirtual */ _make_custom_tooltip(for_text: string): Object
        /* gdvirtual */ _gui_input(event: InputEvent): void
        /** Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to [method Node._unhandled_input] or [method Node._unhandled_key_input].
         *  [b]Note:[/b] This does not affect the methods in [Input], only the way events are propagated.
         */
        accept_event(): void
        /** Returns the minimum size for this control. See [member custom_minimum_size]. */
        get_minimum_size(): Vector2
        /** Returns combined minimum size from [member custom_minimum_size] and [method get_minimum_size]. */
        get_combined_minimum_size(): Vector2
        _set_layout_mode(mode: any /*Control.LayoutMode*/): void
        _get_layout_mode(): any /*Control.LayoutMode*/
        _set_anchors_layout_preset(preset: number /*i64*/): void
        _get_anchors_layout_preset(): number /*i64*/
        /** Sets the anchors to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.
         *  If [param keep_offsets] is [code]true[/code], control's position will also be updated.
         */
        set_anchors_preset(preset: Control.LayoutPreset, keep_offsets: boolean = false): void
        /** Sets the offsets to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.
         *  Use parameter [param resize_mode] with constants from [enum Control.LayoutPresetMode] to better determine the resulting size of the [Control]. Constant size will be ignored if used with presets that change size, e.g. [constant PRESET_LEFT_WIDE].
         *  Use parameter [param margin] to determine the gap between the [Control] and the edges.
         */
        set_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode = 0, margin: number /*i64*/ = 0): void
        /** Sets both anchor preset and offset preset. See [method set_anchors_preset] and [method set_offsets_preset]. */
        set_anchors_and_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode = 0, margin: number /*i64*/ = 0): void
        _set_anchor(side: Side, anchor: number /*f64*/): void
        /** Sets the anchor for the specified [enum Side] to [param anchor]. A setter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top].
         *  If [param keep_offset] is [code]true[/code], offsets aren't updated after this operation.
         *  If [param push_opposite_anchor] is [code]true[/code] and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If [param push_opposite_anchor] was [code]false[/code], the left anchor would get value 0.5.
         */
        set_anchor(side: Side, anchor: number /*f64*/, keep_offset: boolean = false, push_opposite_anchor: boolean = true): void
        /** Returns the anchor for the specified [enum Side]. A getter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top]. */
        get_anchor(side: Side): number /*f64*/
        /** Sets the offset for the specified [enum Side] to [param offset]. A setter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        set_offset(side: Side, offset: number /*f64*/): void
        /** Returns the offset for the specified [enum Side]. A getter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        get_offset(offset: Side): number /*f64*/
        /** Works the same as [method set_anchor], but instead of [code]keep_offset[/code] argument and automatic update of offset, it allows to set the offset yourself (see [method set_offset]). */
        set_anchor_and_offset(side: Side, anchor: number /*f64*/, offset: number /*f64*/, push_opposite_anchor: boolean = false): void
        /** Sets [member offset_left] and [member offset_top] at the same time. Equivalent of changing [member position]. */
        set_begin(position: Vector2): void
        /** Sets [member offset_right] and [member offset_bottom] at the same time. */
        set_end(position: Vector2): void
        /** Sets the [member position] to given [param position].
         *  If [param keep_offsets] is [code]true[/code], control's anchors will be updated instead of offsets.
         */
        set_position(position: Vector2, keep_offsets: boolean = false): void
        _set_position(position: Vector2): void
        /** Sets the size (see [member size]).
         *  If [param keep_offsets] is [code]true[/code], control's anchors will be updated instead of offsets.
         */
        set_size(size: Vector2, keep_offsets: boolean = false): void
        /** Resets the size to [method get_combined_minimum_size]. This is equivalent to calling [code]set_size(Vector2())[/code] (or any size below the minimum). */
        reset_size(): void
        _set_size(size: Vector2): void
        set_custom_minimum_size(size: Vector2): void
        /** Sets the [member global_position] to given [param position].
         *  If [param keep_offsets] is [code]true[/code], control's anchors will be updated instead of offsets.
         */
        set_global_position(position: Vector2, keep_offsets: boolean = false): void
        _set_global_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_scale(scale: Vector2): void
        set_pivot_offset(pivot_offset: Vector2): void
        /** Returns [member offset_left] and [member offset_top]. See also [member position]. */
        get_begin(): Vector2
        /** Returns [member offset_right] and [member offset_bottom]. */
        get_end(): Vector2
        get_position(): Vector2
        get_size(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_scale(): Vector2
        get_pivot_offset(): Vector2
        get_custom_minimum_size(): Vector2
        /** Returns the width/height occupied in the parent control. */
        get_parent_area_size(): Vector2
        get_global_position(): Vector2
        /** Returns the position of this [Control] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.
         *  Equals to [member global_position] if the window is embedded (see [member Viewport.gui_embed_subwindows]).
         *  [b]Example usage for showing a popup:[/b]
         *  
         */
        get_screen_position(): Vector2
        /** Returns the position and size of the control in the coordinate system of the containing node. See [member position], [member scale] and [member size].
         *  [b]Note:[/b] If [member rotation] is not the default rotation, the resulting size is not meaningful.
         *  [b]Note:[/b] Setting [member Viewport.gui_snap_controls_to_pixels] to [code]true[/code] can lead to rounding inaccuracies between the displayed control and the returned [Rect2].
         */
        get_rect(): Rect2
        /** Returns the position and size of the control relative to the containing canvas. See [member global_position] and [member size].
         *  [b]Note:[/b] If the node itself or any parent [CanvasItem] between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.
         *  [b]Note:[/b] Setting [member Viewport.gui_snap_controls_to_pixels] to [code]true[/code] can lead to rounding inaccuracies between the displayed control and the returned [Rect2].
         */
        get_global_rect(): Rect2
        set_focus_mode(mode: Control.FocusMode): void
        get_focus_mode(): Control.FocusMode
        /** Returns [code]true[/code] if this is the current focused control. See [member focus_mode]. */
        has_focus(): boolean
        /** Steal the focus from another control and become the focused control (see [member focus_mode]).
         *  [b]Note:[/b] Using this method together with [method Callable.call_deferred] makes it more reliable, especially when called inside [method Node._ready].
         */
        grab_focus(): void
        /** Give up the focus. No other control will be able to receive input. */
        release_focus(): void
        /** Finds the previous (above in the tree) [Control] that can receive the focus. */
        find_prev_valid_focus(): Control
        /** Finds the next (below in the tree) [Control] that can receive the focus. */
        find_next_valid_focus(): Control
        /** Finds the next [Control] that can receive the focus on the specified [enum Side].
         *  [b]Note:[/b] This is different from [method get_focus_neighbor], which returns the path of a specified focus neighbor.
         */
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
        /** Prevents [code]*_theme_*_override[/code] methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        begin_bulk_theme_override(): void
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        end_bulk_theme_override(): void
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].
         *  See also [method get_theme_icon].
         */
        add_theme_icon_override(name: StringName, texture: Texture2D): void
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].
         *  See also [method get_theme_stylebox].
         *  [b]Example of modifying a property in a StyleBox by duplicating it:[/b]
         *  
         */
        add_theme_stylebox_override(name: StringName, stylebox: StyleBox): void
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].
         *  See also [method get_theme_font].
         */
        add_theme_font_override(name: StringName, font: Font): void
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].
         *  See also [method get_theme_font_size].
         */
        add_theme_font_size_override(name: StringName, font_size: number /*i64*/): void
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].
         *  See also [method get_theme_color].
         *  [b]Example of overriding a label's color and resetting it later:[/b]
         *  
         */
        add_theme_color_override(name: StringName, color: Color): void
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].
         *  See also [method get_theme_constant].
         */
        add_theme_constant_override(name: StringName, constant: number /*i64*/): void
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        remove_theme_icon_override(name: StringName): void
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        remove_theme_stylebox_override(name: StringName): void
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        remove_theme_font_override(name: StringName): void
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        remove_theme_font_size_override(name: StringName): void
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        remove_theme_color_override(name: StringName): void
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        remove_theme_constant_override(name: StringName): void
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        get_theme_icon(name: StringName, theme_type: StringName = ''): Texture2D
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        get_theme_stylebox(name: StringName, theme_type: StringName = ''): StyleBox
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        get_theme_font(name: StringName, theme_type: StringName = ''): Font
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        get_theme_font_size(name: StringName, theme_type: StringName = ''): number /*i64*/
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type]. If [param theme_type] is omitted the class name of the current control is used as the type, or [member theme_type_variation] if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.
         *  For the current control its local overrides are considered first (see [method add_theme_color_override]), then its assigned [member theme]. After the current control, each parent control and its assigned [member theme] are considered; controls without a [member theme] assigned are skipped. If no matching [Theme] is found in the tree, the custom project [Theme] (see [member ProjectSettings.gui/theme/custom]) and the default [Theme] are used (see [ThemeDB]).
         *  
         */
        get_theme_color(name: StringName, theme_type: StringName = ''): Color
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        get_theme_constant(name: StringName, theme_type: StringName = ''): number /*i64*/
        /** Returns [code]true[/code] if there is a local override for a theme icon with the specified [param name] in this [Control] node.
         *  See [method add_theme_icon_override].
         */
        has_theme_icon_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.
         *  See [method add_theme_stylebox_override].
         */
        has_theme_stylebox_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.
         *  See [method add_theme_font_override].
         */
        has_theme_font_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a local override for a theme font size with the specified [param name] in this [Control] node.
         *  See [method add_theme_font_size_override].
         */
        has_theme_font_size_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.
         *  See [method add_theme_color_override].
         */
        has_theme_color_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a local override for a theme constant with the specified [param name] in this [Control] node.
         *  See [method add_theme_constant_override].
         */
        has_theme_constant_override(name: StringName): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_icon(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_stylebox(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_font(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_font_size(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_color(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].
         *  See [method get_theme_color] for details.
         */
        has_theme_constant(name: StringName, theme_type: StringName = ''): boolean
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.
         *  See [method get_theme_color] for details.
         */
        get_theme_default_base_scale(): number /*f64*/
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.
         *  See [method get_theme_color] for details.
         */
        get_theme_default_font(): Font
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.
         *  See [method get_theme_color] for details.
         */
        get_theme_default_font_size(): number /*i64*/
        /** Returns the parent control node. */
        get_parent_control(): Control
        set_h_grow_direction(direction: Control.GrowDirection): void
        get_h_grow_direction(): Control.GrowDirection
        set_v_grow_direction(direction: Control.GrowDirection): void
        get_v_grow_direction(): Control.GrowDirection
        set_tooltip_text(hint: string): void
        get_tooltip_text(): string
        /** Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns [member tooltip_text].
         *  This method can be overridden to customize its behavior. See [method _get_tooltip].
         *  [b]Note:[/b] If this method returns an empty [String], no tooltip is displayed.
         */
        get_tooltip(at_position: Vector2 = Vector2.ZERO): string
        set_default_cursor_shape(shape: Control.CursorShape): void
        get_default_cursor_shape(): Control.CursorShape
        /** Returns the mouse cursor shape the control displays on mouse hover. See [enum CursorShape]. */
        get_cursor_shape(position: Vector2 = Vector2.ZERO): Control.CursorShape
        /** Sets the focus neighbor for the specified [enum Side] to the [Control] at [param neighbor] node path. A setter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top]. */
        set_focus_neighbor(side: Side, neighbor: NodePath): void
        /** Returns the focus neighbor for the specified [enum Side]. A getter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top].
         *  [b]Note:[/b] To find the next [Control] on the specific [enum Side], even if a neighbor is not assigned, use [method find_valid_focus_neighbor].
         */
        get_focus_neighbor(side: Side): NodePath
        set_focus_next(next: NodePath): void
        get_focus_next(): NodePath
        set_focus_previous(previous: NodePath): void
        get_focus_previous(): NodePath
        /** Forces drag and bypasses [method _get_drag_data] and [method set_drag_preview] by passing [param data] and [param preview]. Drag will start even if the mouse is neither over nor pressed on this control.
         *  The methods [method _can_drop_data] and [method _drop_data] must be implemented on controls that want to receive drop data.
         */
        force_drag(data: any, preview: Control): void
        set_mouse_filter(filter: Control.MouseFilter): void
        get_mouse_filter(): Control.MouseFilter
        set_force_pass_scroll_events(force_pass_scroll_events: boolean): void
        is_force_pass_scroll_events(): boolean
        set_clip_contents(enable: boolean): void
        is_clipping_contents(): boolean
        /** Creates an [InputEventMouseButton] that attempts to click the control. If the event is received, the control acquires focus.
         *  
         */
        grab_click_focus(): void
        /** Forwards the handling of this control's [method _get_drag_data],  [method _can_drop_data] and [method _drop_data] virtual functions to delegate callables.
         *  For each argument, if not empty, the delegate callable is used, otherwise the local (virtual) function is used.
         *  The function format for each callable should be exactly the same as the virtual functions described above.
         */
        set_drag_forwarding(drag_func: Callable, can_drop_func: Callable, drop_func: Callable): void
        /** Shows the given control at the mouse pointer. A good time to call this method is in [method _get_drag_data]. The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.
         *  
         */
        set_drag_preview(control: Control): void
        /** Returns [code]true[/code] if a drag operation is successful. Alternative to [method Viewport.gui_is_drag_successful].
         *  Best used with [constant Node.NOTIFICATION_DRAG_END].
         */
        is_drag_successful(): boolean
        /** Moves the mouse cursor to [param position], relative to [member position] of this [Control].
         *  [b]Note:[/b] [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
         */
        warp_mouse(position: Vector2): void
        set_shortcut_context(node: Node): void
        get_shortcut_context(): Node
        /** Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with [method get_minimum_size] when the return value is changed. Setting [member custom_minimum_size] directly calls this method automatically. */
        update_minimum_size(): void
        set_layout_direction(direction: Control.LayoutDirection): void
        get_layout_direction(): Control.LayoutDirection
        /** Returns [code]true[/code] if layout is right-to-left. */
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        set_localize_numeral_system(enable: boolean): void
        is_localizing_numeral_system(): boolean
        /** Enables whether rendering of [CanvasItem] based children should be clipped to this control's rectangle. If [code]true[/code], parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input. */
        clip_contents: boolean
        /** The minimum size of the node's bounding rectangle. If you set it to a value greater than (0, 0), the node's bounding rectangle will always have at least this size, even if its content is smaller. If it's set to (0, 0), the node sizes automatically to fit its content, be it a texture or child nodes. */
        custom_minimum_size: Vector2
        /** Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        layout_direction: number /*i64*/
        layout_mode: number /*i64*/
        anchors_preset: number /*i64*/
        /** Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        grow_horizontal: number /*i64*/
        /** Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        grow_vertical: number /*i64*/
        /** The size of the node's bounding rectangle, in the node's coordinate system. [Container] nodes update this property automatically. */
        size: Vector2
        /** The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [member pivot_offset]. */
        position: Vector2
        /** The node's global position, relative to the world (usually to the [CanvasLayer]). */
        global_position: Vector2
        /** The node's rotation around its pivot, in radians. See [member pivot_offset] to change the pivot's position.
         *  [b]Note:[/b] This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
         */
        rotation: number /*f64*/
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: number /*f64*/
        /** The node's scale, relative to its [member size]. Change this property to scale the node around its [member pivot_offset]. The Control's [member tooltip_text] will also scale according to this value.
         *  [b]Note:[/b] This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]documentation[/url] instead of scaling Controls individually.
         *  [b]Note:[/b] [member FontFile.oversampling] does [i]not[/i] take [Control] [member scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling [b]Multichannel Signed Distance Field[/b] in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.
         *  [b]Note:[/b] If the Control node is a child of a [Container] node, the scale will be reset to [code]Vector2(1, 1)[/code] when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using [code]await get_tree().process_frame[/code] then set its [member scale] property.
         */
        scale: Vector2
        /** By default, the node's pivot is its top-left corner. When you change its [member rotation] or [member scale], it will rotate or scale around this pivot. Set this property to [member size] / 2 to pivot around the Control's center. */
        pivot_offset: Vector2
        /** Tells the parent [Container] nodes how they should resize and place the node on the X axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        size_flags_horizontal: number /*i64*/
        /** Tells the parent [Container] nodes how they should resize and place the node on the Y axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        size_flags_vertical: number /*i64*/
        /** If the node and at least one of its neighbors uses the [constant SIZE_EXPAND] size flag, the parent [Container] will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space. */
        size_flags_stretch_ratio: number /*f64*/
        /** Toggles if any text should automatically change to its translated version depending on the current locale.
         *  Also decides if the node's strings should be parsed for POT generation.
         */
        auto_translate: boolean
        /** If [code]true[/code], automatically converts code line numbers, list indices, [SpinBox] and [ProgressBar] values from the Western Arabic (0..9) to the numeral systems used in current locale.
         *  [b]Note:[/b] Numbers within the text are not automatically converted, it can be done manually, using [method TextServer.format_number].
         */
        localize_numeral_system: boolean
        /** The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the [member mouse_filter] property is not [constant MOUSE_FILTER_IGNORE]. The time required for the tooltip to appear can be changed with the [member ProjectSettings.gui/timers/tooltip_delay_sec] option. See also [method get_tooltip].
         *  The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding [method _make_custom_tooltip]. The default tooltip includes a [PopupPanel] and [Label] whose theme properties can be customized using [Theme] methods with the [code]"TooltipPanel"[/code] and [code]"TooltipLabel"[/code] respectively. For example:
         *  
         */
        tooltip_text: string
        /** Tells Godot which node it should give focus to if the user presses [kbd]Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_next] input action.
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
         */
        focus_next: NodePath
        /** Tells Godot which node it should give focus to if the user presses [kbd]Shift + Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_prev] input action.
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
         */
        focus_previous: NodePath
        /** The focus access mode for the control (None, Click or All). Only one Control can be focused at the same time, and it will receive keyboard, gamepad, and mouse signals. */
        focus_mode: number /*i64*/
        /** Controls whether the control will be able to receive mouse button input events through [method _gui_input] and how these events should be handled. Also controls whether the control can receive the [signal mouse_entered], and [signal mouse_exited] signals. See the constants to learn what each does. */
        mouse_filter: number /*i64*/
        /** When enabled, scroll wheel events processed by [method _gui_input] will be passed to the parent control even if [member mouse_filter] is set to [constant MOUSE_FILTER_STOP]. As it defaults to true, this allows nested scrollable containers to work out of the box.
         *  You should disable it on the root of your UI if you do not want scroll events to go to the [method Node._unhandled_input] processing.
         */
        mouse_force_pass_scroll_events: boolean
        /** The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.
         *  [b]Note:[/b] On Linux, shapes may vary depending on the cursor theme of the system.
         */
        mouse_default_cursor_shape: number /*i64*/
        /** The [Node] which must be a parent of the focused [Control] for the shortcut to be activated. If [code]null[/code], the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused. */
        shortcut_context: Object
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.
         *  [b]Note:[/b] [Window] styles will have no effect unless the window is embedded.
         */
        theme: Theme
        /** The name of a theme type variation used by this [Control] to look up its own theme items. When empty, the class name of the node is used (e.g. [code skip-lint]Button[/code] for the [Button] control), as well as the class names of all parent classes (in order of inheritance).
         *  When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See [method Theme.set_type_variation]. If the theme item cannot be found using this type or its base types, lookup falls back on the class names.
         *  [b]Note:[/b] To look up [Control]'s own items use various [code]get_theme_*[/code] methods without specifying [code]theme_type[/code].
         *  [b]Note:[/b] Theme items are looked for in the tree order, from branch to root, where each [Control] node is checked for its [member theme] property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.
         */
        theme_type_variation: string
        readonly resized: Signal
        readonly gui_input: Signal
        readonly mouse_entered: Signal
        readonly mouse_exited: Signal
        readonly focus_entered: Signal
        readonly focus_exited: Signal
        readonly size_flags_changed: Signal
        readonly minimum_size_changed: Signal
        readonly theme_changed: Signal
    }
    class ControlEditorPlugin extends EditorPlugin {
    }
    class ControlEditorPopupButton extends Button {
    }
    class ControlEditorPresetPicker extends MarginContainer {
    }
    class ControlEditorToolbar extends HBoxContainer {
    }
    /** A 2D convex polygon shape used for physics collision. */
    class ConvexPolygonShape2D extends Shape2D {
        /** Based on the set of points provided, this assigns the [member points] property using the convex hull algorithm, removing all unneeded points. See [method Geometry2D.convex_hull] for details. */
        set_point_cloud(point_cloud: PackedVector2Array): void
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        /** The polygon's list of vertices that form a convex hull. Can be in either clockwise or counterclockwise order.
         *  [b]Warning:[/b] Only set this property to a list of points that actually form a convex hull. Use [method set_point_cloud] to generate the convex hull of an arbitrary set of points.
         */
        points: PackedVector2Array
    }
    /** A 3D convex polyhedron shape used for physics collision. */
    class ConvexPolygonShape3D extends Shape3D {
        set_points(points: PackedVector3Array): void
        get_points(): PackedVector3Array
        /** The list of 3D points forming the convex polygon shape. */
        points: Array
    }
    class CreateDialog extends ConfirmationDialog {
        readonly create: Signal
        readonly favorites_updated: Signal
    }
    /** Provides access to advanced cryptographic functionalities. */
    class Crypto extends RefCounted {
        /** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size]. */
        generate_random_bytes(size: number /*i64*/): PackedByteArray
        /** Generates an RSA [CryptoKey] that can be used for creating self-signed certificates and passed to [method StreamPeerTLS.accept_stream]. */
        generate_rsa(size: number /*i64*/): CryptoKey
        /** Generates a self-signed [X509Certificate] from the given [CryptoKey] and [param issuer_name]. The certificate validity will be defined by [param not_before] and [param not_after] (first valid date and last valid date). The [param issuer_name] must contain at least "CN=" (common name, i.e. the domain name), "O=" (organization, i.e. your company name), "C=" (country, i.e. 2 lettered ISO-3166 code of the country the organization is based in).
         *  A small example to generate an RSA key and a X509 self-signed certificate.
         *  
         */
        generate_self_signed_certificate(key: CryptoKey, issuer_name: string = 'CN=myserver,O=myorganisation,C=IT', not_before: string = '20140101000000', not_after: string = '20340101000000'): X509Certificate
        /** Sign a given [param hash] of type [param hash_type] with the provided private [param key]. */
        sign(hash_type: HashingContext.HashType, hash: PackedByteArray, key: CryptoKey): PackedByteArray
        /** Verify that a given [param signature] for [param hash] of type [param hash_type] against the provided public [param key]. */
        verify(hash_type: HashingContext.HashType, hash: PackedByteArray, signature: PackedByteArray, key: CryptoKey): boolean
        /** Encrypt the given [param plaintext] with the provided public [param key].
         *  [b]Note:[/b] The maximum size of accepted plaintext is limited by the key size.
         */
        encrypt(key: CryptoKey, plaintext: PackedByteArray): PackedByteArray
        /** Decrypt the given [param ciphertext] with the provided private [param key].
         *  [b]Note:[/b] The maximum size of accepted ciphertext is limited by the key size.
         */
        decrypt(key: CryptoKey, ciphertext: PackedByteArray): PackedByteArray
        /** Generates an [url=https://en.wikipedia.org/wiki/HMAC]HMAC[/url] digest of [param msg] using [param key]. The [param hash_type] parameter is the hashing algorithm that is used for the inner and outer hashes.
         *  Currently, only [constant HashingContext.HASH_SHA256] and [constant HashingContext.HASH_SHA1] are supported.
         */
        hmac_digest(hash_type: HashingContext.HashType, key: PackedByteArray, msg: PackedByteArray): PackedByteArray
        /** Compares two [PackedByteArray]s for equality without leaking timing information in order to prevent timing attacks.
         *  See [url=https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy]this blog post[/url] for more information.
         */
        constant_time_compare(trusted: PackedByteArray, received: PackedByteArray): boolean
    }
    /** A cryptographic key (RSA). */
    class CryptoKey extends Resource {
        /** Saves a key to the given [param path]. If [param public_only] is [code]true[/code], only the public key will be saved.
         *  [b]Note:[/b] [param path] should be a "*.pub" file if [param public_only] is [code]true[/code], a "*.key" file otherwise.
         */
        save(path: string, public_only: boolean = false): GodotError
        /** Loads a key from [param path]. If [param public_only] is [code]true[/code], only the public key will be loaded.
         *  [b]Note:[/b] [param path] should be a "*.pub" file if [param public_only] is [code]true[/code], a "*.key" file otherwise.
         */
        load(path: string, public_only: boolean = false): GodotError
        /** Returns [code]true[/code] if this CryptoKey only has the public part, and not the private one. */
        is_public_only(): boolean
        /** Returns a string containing the key in PEM format. If [param public_only] is [code]true[/code], only the public key will be included. */
        save_to_string(public_only: boolean = false): string
        /** Loads a key from the given [param string_key]. If [param public_only] is [code]true[/code], only the public key will be loaded. */
        load_from_string(string_key: string, public_only: boolean = false): GodotError
    }
    /** Six square textures representing the faces of a cube. Commonly used as a skybox. */
    class Cubemap extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderCubemap]). */
        create_placeholder(): Resource
    }
    /** An array of [Cubemap]s, stored together and with a single reference. */
    class CubemapArray extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderCubemapArray]). */
        create_placeholder(): Resource
    }
    namespace Curve {
        enum TangentMode {
            TANGENT_FREE = 0,
            TANGENT_LINEAR = 1,
            TANGENT_MODE_COUNT = 2,
        }
    }
    /** A mathematical curve. */
    class Curve extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        /** Adds a point to the curve. For each side, if the [code]*_mode[/code] is [constant TANGENT_LINEAR], the [code]*_tangent[/code] angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the [code]*_tangent[/code] angle if [code]*_mode[/code] is set to [constant TANGENT_FREE]. */
        add_point(position: Vector2, left_tangent: number /*f64*/ = 0, right_tangent: number /*f64*/ = 0, left_mode: Curve.TangentMode = 0, right_mode: Curve.TangentMode = 0): number /*i64*/
        /** Removes the point at [param index] from the curve. */
        remove_point(index: number /*i64*/): void
        /** Removes all points from the curve. */
        clear_points(): void
        /** Returns the curve coordinates for the point at [param index]. */
        get_point_position(index: number /*i64*/): Vector2
        /** Assigns the vertical position [param y] to the point at [param index]. */
        set_point_value(index: number /*i64*/, y: number /*f64*/): void
        /** Sets the offset from [code]0.5[/code]. */
        set_point_offset(index: number /*i64*/, offset: number /*f64*/): number /*i64*/
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve. */
        sample(offset: number /*f64*/): number /*f64*/
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve using the baked cache. Bakes the curve's points if not already baked. */
        sample_baked(offset: number /*f64*/): number /*f64*/
        /** Returns the left tangent angle (in degrees) for the point at [param index]. */
        get_point_left_tangent(index: number /*i64*/): number /*f64*/
        /** Returns the right tangent angle (in degrees) for the point at [param index]. */
        get_point_right_tangent(index: number /*i64*/): number /*f64*/
        /** Returns the left [enum TangentMode] for the point at [param index]. */
        get_point_left_mode(index: number /*i64*/): Curve.TangentMode
        /** Returns the right [enum TangentMode] for the point at [param index]. */
        get_point_right_mode(index: number /*i64*/): Curve.TangentMode
        /** Sets the left tangent angle for the point at [param index] to [param tangent]. */
        set_point_left_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        /** Sets the right tangent angle for the point at [param index] to [param tangent]. */
        set_point_right_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        /** Sets the left [enum TangentMode] for the point at [param index] to [param mode]. */
        set_point_left_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        /** Sets the right [enum TangentMode] for the point at [param index] to [param mode]. */
        set_point_right_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        get_min_value(): number /*f64*/
        set_min_value(min: number /*f64*/): void
        get_max_value(): number /*f64*/
        set_max_value(max: number /*f64*/): void
        /** Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve. */
        clean_dupes(): void
        /** Recomputes the baked cache of points for the curve. */
        bake(): void
        get_bake_resolution(): number /*i64*/
        set_bake_resolution(resolution: number /*i64*/): void
        _get_data(): Array
        _set_data(data: Array): void
        /** The minimum value the curve can reach. */
        min_value: number /*f64*/
        /** The maximum value the curve can reach. */
        max_value: number /*f64*/
        /** The number of points to include in the baked (i.e. cached) curve data. */
        bake_resolution: number /*i64*/
        _data: number /*i64*/
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
        readonly range_changed: Signal
    }
    /** Describes a Bézier curve in 2D space. */
    class Curve2D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to [code]0[/code] and must not exceed the number of existing points in the line. See [member point_count].
         */
        add_point(position: Vector2, in_: Vector2 = Vector2.ZERO, out_: Vector2 = Vector2.ZERO, index: number /*i64*/ = -1): void
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector2): void
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
        get_point_position(idx: number /*i64*/): Vector2
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector2): void
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
        get_point_in(idx: number /*i64*/): Vector2
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector2): void
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
        get_point_out(idx: number /*i64*/): Vector2
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        /** Removes all points from the curve. */
        clear_points(): void
        /** Returns the position between the vertex [param idx] and the vertex [code]idx + 1[/code], where [param t] controls if the point is the first vertex ([code]t = 0.0[/code]), the last vertex ([code]t = 1.0[/code]), or in between. Values of [param t] outside the range ([code]0.0 >= t <=1[/code]) give strange, but predictable results.
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns [code](0, 0)[/code].
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector2
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as [code]idx[/code], and its fractional part as [code]t[/code]. */
        samplef(fofs: number /*f64*/): Vector2
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a pixel distance along the curve.
         *  To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to [code]true[/code], or linear if set to [code]false[/code].
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector2
        /** Similar to [method sample_baked], but returns [Transform2D] that includes a rotation along the curve, with [member Transform2D.origin] as the point position, [member Transform2D.x] as the sideways vector, and [member Transform2D.y] as the forward vector. Returns an empty transform if the length of the curve is [code]0[/code].
         *  
         */
        sample_baked_with_rotation(offset: number /*f64*/ = 0, cubic: boolean = false): Transform2D
        /** Returns the cache of points as a [PackedVector2Array]. */
        get_baked_points(): PackedVector2Array
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].
         *  [param to_point] must be in this curve's local space.
         */
        get_closest_point(to_point: Vector2): Vector2
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked].
         *  [param to_point] must be in this curve's local space.
         */
        get_closest_offset(to_point: Vector2): number /*f64*/
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.
         */
        tessellate(max_stages: number /*i64*/ = 5, tolerance_degrees: number /*f64*/ = 4): PackedVector2Array
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.
         */
        tessellate_even_length(max_stages: number /*i64*/ = 5, tolerance_length: number /*f64*/ = 20): PackedVector2Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
        /** The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        bake_interval: number /*f64*/
        _data: number /*i64*/
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
    }
    /** Describes a Bézier curve in 3D space. */
    class Curve3D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to [code]0[/code] and must not exceed the number of existing points in the line. See [member point_count].
         */
        add_point(position: Vector3, in_: Vector3 = new Vector3(0, 0, 0), out_: Vector3 = new Vector3(0, 0, 0), index: number /*i64*/ = -1): void
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector3): void
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0, 0)[/code]. */
        get_point_position(idx: number /*i64*/): Vector3
        /** Sets the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console.
         *  The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a [PathFollow3D], this tilt is an offset over the natural tilt the [PathFollow3D] calculates.
         */
        set_point_tilt(idx: number /*i64*/, tilt: number /*f64*/): void
        /** Returns the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code]0[/code]. */
        get_point_tilt(idx: number /*i64*/): number /*f64*/
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector3): void
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0, 0)[/code]. */
        get_point_in(idx: number /*i64*/): Vector3
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector3): void
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0, 0)[/code]. */
        get_point_out(idx: number /*i64*/): Vector3
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        /** Removes all points from the curve. */
        clear_points(): void
        /** Returns the position between the vertex [param idx] and the vertex [code]idx + 1[/code], where [param t] controls if the point is the first vertex ([code]t = 0.0[/code]), the last vertex ([code]t = 1.0[/code]), or in between. Values of [param t] outside the range ([code]0.0 >= t <=1[/code]) give strange, but predictable results.
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns [code](0, 0, 0)[/code].
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector3
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as [code]idx[/code], and its fractional part as [code]t[/code]. */
        samplef(fofs: number /*f64*/): Vector3
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        set_up_vector_enabled(enable: boolean): void
        is_up_vector_enabled(): boolean
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to [code]true[/code], or linear if set to [code]false[/code].
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector3
        /** Returns a [Transform3D] with [code]origin[/code] as point position, [code]basis.x[/code] as sideway vector, [code]basis.y[/code] as up vector, [code]basis.z[/code] as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also [method sample_baked]. */
        sample_baked_with_rotation(offset: number /*f64*/ = 0, cubic: boolean = false, apply_tilt: boolean = false): Transform3D
        /** Returns an up vector within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the [param offset] lies between, then interpolates the values. If [param apply_tilt] is [code]true[/code], an interpolated tilt is applied to the interpolated up vector.
         *  If the curve has no up vectors, the function sends an error to the console, and returns [code](0, 1, 0)[/code].
         */
        sample_baked_up_vector(offset: number /*f64*/, apply_tilt: boolean = false): Vector3
        /** Returns the cache of points as a [PackedVector3Array]. */
        get_baked_points(): PackedVector3Array
        /** Returns the cache of tilts as a [PackedFloat32Array]. */
        get_baked_tilts(): PackedFloat32Array
        /** Returns the cache of up vectors as a [PackedVector3Array].
         *  If [member up_vector_enabled] is [code]false[/code], the cache will be empty.
         */
        get_baked_up_vectors(): PackedVector3Array
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].
         *  [param to_point] must be in this curve's local space.
         */
        get_closest_point(to_point: Vector3): Vector3
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked] or [method sample_baked_up_vector].
         *  [param to_point] must be in this curve's local space.
         */
        get_closest_offset(to_point: Vector3): number /*f64*/
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.
         */
        tessellate(max_stages: number /*i64*/ = 5, tolerance_degrees: number /*f64*/ = 4): PackedVector3Array
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.
         */
        tessellate_even_length(max_stages: number /*i64*/ = 5, tolerance_length: number /*f64*/ = 0.2): PackedVector3Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
        /** The distance in meters between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        bake_interval: number /*f64*/
        _data: number /*i64*/
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
        /** If [code]true[/code], the curve will bake up vectors used for orientation. This is used when [member PathFollow3D.rotation_mode] is set to [constant PathFollow3D.ROTATION_ORIENTED]. Changing it forces the cache to be recomputed. */
        up_vector_enabled: boolean
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
    /** A 1D texture where pixel brightness corresponds to points on a curve. */
    class CurveTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_texture_mode(texture_mode: CurveTexture.TextureMode): void
        get_texture_mode(): CurveTexture.TextureMode
        _update(): void
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        width: number /*i64*/
        /** The format the texture should be generated with. When passing a CurveTexture as an input to a [Shader], this may need to be adjusted. */
        texture_mode: number /*i64*/
        /** The [Curve] that is rendered onto the texture. */
        curve: Curve
    }
    /** A 1D texture where the red, green, and blue color channels correspond to points on 3 curves. */
    class CurveXYZTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve_x(curve: Curve): void
        get_curve_x(): Curve
        set_curve_y(curve: Curve): void
        get_curve_y(): Curve
        set_curve_z(curve: Curve): void
        get_curve_z(): Curve
        _update(): void
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        width: number /*i64*/
        /** The [Curve] that is rendered onto the texture's red channel. */
        curve_x: Curve
        /** The [Curve] that is rendered onto the texture's green channel. */
        curve_y: Curve
        /** The [Curve] that is rendered onto the texture's blue channel. */
        curve_z: Curve
    }
    /** Class representing a cylindrical [PrimitiveMesh]. */
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
        /** Top radius of the cylinder. If set to [code]0.0[/code], the top faces will not be generated, resulting in a conic shape. See also [member cap_top]. */
        top_radius: number /*f64*/
        /** Bottom radius of the cylinder. If set to [code]0.0[/code], the bottom faces will not be generated, resulting in a conic shape. See also [member cap_bottom]. */
        bottom_radius: number /*f64*/
        /** Full height of the cylinder. */
        height: number /*f64*/
        /** Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance. */
        radial_segments: number /*i64*/
        /** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
        rings: number /*i64*/
        /** If [code]true[/code], generates a cap at the top of the cylinder. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. See also [member top_radius].
         *  [b]Note:[/b] If [member top_radius] is [code]0.0[/code], cap generation is always skipped even if [member cap_top] is [code]true[/code].
         */
        cap_top: boolean
        /** If [code]true[/code], generates a cap at the bottom of the cylinder. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. See also [member bottom_radius].
         *  [b]Note:[/b] If [member bottom_radius] is [code]0.0[/code], cap generation is always skipped even if [member cap_bottom] is [code]true[/code].
         */
        cap_bottom: boolean
    }
    /** A 3D cylinder shape used for physics collision. */
    class CylinderShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        /** The cylinder's height. */
        height: number /*f64*/
        /** The cylinder's radius. */
        radius: number /*f64*/
    }
    /** Helper class to implement a DTLS server. */
    class DTLSServer extends RefCounted {
        /** Setup the DTLS server to use the given [param server_options]. See [method TLSOptions.server]. */
        setup(server_options: TLSOptions): GodotError
        /** Try to initiate the DTLS handshake with the given [param udp_peer] which must be already connected (see [method PacketPeerUDP.connect_to_host]).
         *  [b]Note:[/b] You must check that the state of the return PacketPeerUDP is [constant PacketPeerDTLS.STATUS_HANDSHAKING], as it is normal that 50% of the new connections will be invalid due to cookie exchange.
         */
        take_connection(udp_peer: PacketPeerUDP): PacketPeerDTLS
    }
    /** A physics joint that connects two 2D physics bodies with a spring-like force. */
    class DampedSpringJoint2D extends Joint2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_rest_length(rest_length: number /*f64*/): void
        get_rest_length(): number /*f64*/
        set_stiffness(stiffness: number /*f64*/): void
        get_stiffness(): number /*f64*/
        set_damping(damping: number /*f64*/): void
        get_damping(): number /*f64*/
        /** The spring joint's maximum length. The two attached bodies cannot stretch it past this value. */
        length: number /*f64*/
        /** When the bodies attached to the spring joint move they stretch or squash it. The joint always tries to resize towards this length. */
        rest_length: number /*f64*/
        /** The higher the value, the less the bodies attached to the joint will deform it. The joint applies an opposing force to the bodies, the product of the stiffness multiplied by the size difference from its resting length. */
        stiffness: number /*f64*/
        /** The spring joint's damping ratio. A value between [code]0[/code] and [code]1[/code]. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [member damping] value forces the attached bodies to align faster. */
        damping: number /*f64*/
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
    /** Node that projects a texture onto a [MeshInstance3D]. */
    class Decal extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        /** Sets the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.
         *  For example, instead of [code]$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)[/code], use [code]$Decal.texture_albedo = albedo_tex[/code].
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:
         *  
         */
        set_texture(type: Decal.DecalTexture, texture: Texture2D): void
        /** Returns the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.
         *  For example, instead of [code]albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)[/code], use [code]albedo_tex = $Decal.texture_albedo[/code].
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:
         *  
         */
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
        /** Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to [code]0.001[/code] if this is not the case). The AABB goes from [code]-size/2[/code] to [code]size/2[/code].
         *  [b]Note:[/b] To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to [code]0.0[/code] and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.
         */
        size: Vector3
        /** Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [member modulate]. */
        emission_energy: number /*f64*/
        /** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
        modulate: Color
        /** Blends the albedo [Color] of the decal with albedo [Color] of the underlying mesh. This can be set to [code]0.0[/code] to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [member modulate]. */
        albedo_mix: number /*f64*/
        /** Fades the Decal if the angle between the Decal's [AABB] and the target surface becomes too large. A value of [code]0[/code] projects the Decal regardless of angle, a value of [code]1[/code] limits the Decal to surfaces that are nearly perpendicular.
         *  [b]Note:[/b] Setting [member normal_fade] to a value greater than [code]0.0[/code] has a small performance cost due to the added normal angle computations.
         */
        normal_fade: number /*f64*/
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). See also [member lower_fade]. */
        upper_fade: number /*f64*/
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). See also [member upper_fade]. */
        lower_fade: number /*f64*/
        /** If [code]true[/code], decals will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. The Decal will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance. */
        distance_fade_enabled: boolean
        /** The distance from the camera at which the Decal begins to fade away (in 3D units). */
        distance_fade_begin: number /*f64*/
        /** The distance over which the Decal fades (in 3D units). The Decal becomes slowly more transparent over this distance and is completely invisible at the end. Higher values result in a smoother fade-out transition, which is more suited when the camera moves fast. */
        distance_fade_length: number /*f64*/
        /** Specifies which [member VisualInstance3D.layers] this decal will project on. By default, Decals affect all layers. This is used so you can specify which types of objects receive the Decal and which do not. This is especially useful so you can ensure that dynamic objects don't accidentally receive a Decal intended for the terrain under them. */
        cull_mask: number /*i64*/
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
        readonly resource_removed: Signal
        readonly file_removed: Signal
        readonly folder_removed: Signal
    }
    /** Provides methods for managing directories and their content. */
    class DirAccess extends RefCounted {
        /** Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree ([code]res://folder[/code]), the user directory ([code]user://folder[/code]) or an absolute path of the user filesystem (e.g. [code]/tmp/folder[/code] or [code]C:\tmp\folder[/code]).
         *  Returns [code]null[/code] if opening the directory failed. You can use [method get_open_error] to check the error that occurred.
         */
        static open(path: string): DirAccess
        /** Returns the result of the last [method open] call in the current thread. */
        static get_open_error(): GodotError
        /** Initializes the stream used to list all files and directories using the [method get_next] function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [method list_dir_end].
         *  Affected by [member include_hidden] and [member include_navigational].
         *  [b]Note:[/b] The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [method get_files] or [method get_directories].
         */
        list_dir_begin(): GodotError
        /** Returns the next element (file or directory) in the current directory.
         *  The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [String] and closes the stream automatically (i.e. [method list_dir_end] would not be mandatory in such a case).
         */
        get_next(): string
        /** Returns whether the current item processed with the last [method get_next] call is a directory ([code].[/code] and [code]..[/code] are considered directories). */
        current_is_dir(): boolean
        /** Closes the current stream opened with [method list_dir_begin] (whether it has been fully processed with [method get_next] does not matter). */
        list_dir_end(): void
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.
         *  Affected by [member include_hidden].
         *  [b]Note:[/b] When used on a [code]res://[/code] path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level [code].godot/[/code] folder, only paths to [code]*.gd[/code] and [code]*.import[/code] files are returned (plus a few files such as [code]project.godot[/code] or [code]project.binary[/code] and the project icon). In an exported project, the list of returned files will also vary depending on whether [member ProjectSettings.editor/export/convert_text_resources_to_binary] is [code]true[/code].
         */
        get_files(): PackedStringArray
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories, at the given [param path]. The array is sorted alphabetically.
         *  Use [method get_files] if you want more control of what gets included.
         */
        static get_files_at(path: string): PackedStringArray
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files. The array is sorted alphabetically.
         *  Affected by [member include_hidden] and [member include_navigational].
         */
        get_directories(): PackedStringArray
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files, at the given [param path]. The array is sorted alphabetically.
         *  Use [method get_directories] if you want more control of what gets included.
         */
        static get_directories_at(path: string): PackedStringArray
        /** On Windows, returns the number of drives (partitions) mounted on the current filesystem.
         *  On macOS, returns the number of mounted volumes.
         *  On Linux, returns the number of mounted volumes and GTK 3 bookmarks.
         *  On other platforms, the method returns 0.
         */
        static get_drive_count(): number /*i64*/
        /** On Windows, returns the name of the drive (partition) passed as an argument (e.g. [code]C:[/code]).
         *  On macOS, returns the path to the mounted volume passed as an argument.
         *  On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.
         *  On other platforms, or if the requested drive does not exist, the method returns an empty String.
         */
        static get_drive_name(idx: number /*i64*/): string
        /** Returns the currently opened directory's drive index. See [method get_drive_name] to convert returned index to the name of the drive. */
        get_current_drive(): number /*i64*/
        /** Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. [code]newdir[/code] or [code]../newdir[/code]), or an absolute path (e.g. [code]/tmp/newdir[/code] or [code]res://somedir/newdir[/code]).
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         *  [b]Note:[/b] The new directory must be within the same scope, e.g. when you had opened a directory inside [code]res://[/code], you can't change it to [code]user://[/code] directory. If you need to open a directory in another access scope, use [method open] to create a new instance instead.
         */
        change_dir(to_dir: string): GodotError
        /** Returns the absolute path to the currently opened directory (e.g. [code]res://folder[/code] or [code]C:\tmp\folder[/code]). */
        get_current_dir(include_drive: boolean = true): string
        /** Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see [method make_dir_recursive]).
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         */
        make_dir(path: string): GodotError
        /** Static version of [method make_dir]. Supports only absolute paths. */
        static make_dir_absolute(path: string): GodotError
        /** Creates a target directory and all necessary intermediate directories in its path, by calling [method make_dir] recursively. The argument can be relative to the current directory, or an absolute path.
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         */
        make_dir_recursive(path: string): GodotError
        /** Static version of [method make_dir_recursive]. Supports only absolute paths. */
        static make_dir_recursive_absolute(path: string): GodotError
        /** Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.
         *  For a static equivalent, use [method FileAccess.file_exists].
         */
        file_exists(path: string): boolean
        /** Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path. */
        dir_exists(path: string): boolean
        /** Static version of [method dir_exists]. Supports only absolute paths. */
        static dir_exists_absolute(path: string): boolean
        /** Returns the available space on the current directory's disk, in bytes. Returns [code]0[/code] if the platform-specific method to query the available space fails. */
        get_space_left(): number /*i64*/
        /** Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.
         *  If [param chmod_flags] is different than [code]-1[/code], the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         */
        copy(from: string, to: string, chmod_flags: number /*i64*/ = -1): GodotError
        /** Static version of [method copy]. Supports only absolute paths. */
        static copy_absolute(from: string, to: string, chmod_flags: number /*i64*/ = -1): GodotError
        /** Renames (move) the [param from] file or directory to the [param to] destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         */
        rename(from: string, to: string): GodotError
        /** Static version of [method rename]. Supports only absolute paths. */
        static rename_absolute(from: string, to: string): GodotError
        /** Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.
         *  If you don't want to delete the file/directory permanently, use [method OS.move_to_trash] instead.
         *  Returns one of the [enum Error] code constants ([constant OK] on success).
         */
        remove(path: string): GodotError
        /** Static version of [method remove]. Supports only absolute paths. */
        static remove_absolute(path: string): GodotError
        set_include_navigational(enable: boolean): void
        get_include_navigational(): boolean
        set_include_hidden(enable: boolean): void
        get_include_hidden(): boolean
        /** Returns [code]true[/code] if the file system or directory use case sensitive file names.
         *  [b]Note:[/b] This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns [code]true[/code].
         */
        is_case_sensitive(path: string): boolean
        /** If [code]true[/code], [code].[/code] and [code]..[/code] are included when navigating the directory.
         *  Affects [method list_dir_begin] and [method get_directories].
         */
        include_navigational: boolean
        /** If [code]true[/code], hidden files are included when navigating the directory.
         *  Affects [method list_dir_begin], [method get_directories] and [method get_files].
         */
        include_hidden: boolean
    }
    /** Directional 2D light from a distance. */
    class DirectionalLight2D extends Light2D {
        set_max_distance(pixels: number /*f64*/): void
        get_max_distance(): number /*f64*/
        /** The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane). */
        height: number /*f64*/
        /** The maximum distance from the camera center objects can be before their shadows are culled (in pixels). Decreasing this value can prevent objects located outside the camera from casting shadows (while also improving performance). [member Camera2D.zoom] is not taken into account by [member max_distance], which means that at higher zoom values, shadows will appear to fade out sooner when zooming onto a given point. */
        max_distance: number /*f64*/
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
    /** Directional light from a distance, as from the Sun. */
    class DirectionalLight3D extends Light3D {
        set_shadow_mode(mode: DirectionalLight3D.ShadowMode): void
        get_shadow_mode(): DirectionalLight3D.ShadowMode
        set_blend_splits(enabled: boolean): void
        is_blend_splits_enabled(): boolean
        set_sky_mode(mode: DirectionalLight3D.SkyMode): void
        get_sky_mode(): DirectionalLight3D.SkyMode
        /** The light's shadow rendering algorithm. See [enum ShadowMode]. */
        directional_shadow_mode: number /*i64*/
        /** If [code]true[/code], shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [member directional_shadow_mode] is [constant SHADOW_ORTHOGONAL]. */
        directional_shadow_blend_splits: boolean
        /** Set whether this [DirectionalLight3D] is visible in the sky, in the scene, or both in the sky and in the scene. See [enum SkyMode] for options. */
        sky_mode: number /*i64*/
    }
    class DirectoryCreateDialog extends ConfirmationDialog {
        readonly dir_created: Signal
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
    /** A wrapper class for an [url=http://enet.bespin.org/group__host.html]ENetHost[/url]. */
    class ENetConnection extends RefCounted {
        /** Create an ENetHost like [method create_host] which is also bound to the given [param bind_address] and [param bind_port]. */
        create_host_bound(bind_address: string, bind_port: number /*i64*/, max_peers: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        /** Create an ENetHost that will allow up to [param max_peers] connected peers, each allocating up to [param max_channels] channels, optionally limiting bandwidth to [param in_bandwidth] and [param out_bandwidth]. */
        create_host(max_peers: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        /** Destroys the host and all resources associated with it. */
        destroy(): void
        /** Initiates a connection to a foreign [param address] using the specified [param port] and allocating the requested [param channels]. Optional [param data] can be passed during connection in the form of a 32 bit integer.
         *  [b]Note:[/b] You must call either [method create_host] or [method create_host_bound] before calling this method.
         */
        connect_to_host(address: string, port: number /*i64*/, channels: number /*i64*/ = 0, data: number /*i64*/ = 0): ENetPacketPeer
        /** Waits for events on the host specified and shuttles packets between the host and its peers. The returned [Array] will have 4 elements. An [enum EventType], the [ENetPacketPeer] which generated the event, the event associated data (if any), the event associated channel (if any). If the generated event is [constant EVENT_RECEIVE], the received packet will be queued to the associated [ENetPacketPeer].
         *  Call this function regularly to handle connections, disconnections, and to receive new packets.
         */
        service(timeout: number /*i64*/ = 0): Array
        /** Sends any queued packets on the host specified to its designated peers. */
        flush(): void
        /** Adjusts the bandwidth limits of a host. */
        bandwidth_limit(in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): void
        /** Limits the maximum allowed channels of future incoming connections. */
        channel_limit(limit: number /*i64*/): void
        /** Queues a [param packet] to be sent to all peers associated with the host over the specified [param channel]. See [ENetPacketPeer] [code]FLAG_*[/code] constants for available packet flags. */
        broadcast(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): void
        /** Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.
         *  [b]Note:[/b] Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.
         *  [b]Note:[/b] The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.
         */
        compress(mode: ENetConnection.CompressionMode): void
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet servers. Call this right after [method create_host_bound] to have ENet expect peers to connect using DTLS. See [method TLSOptions.server]. */
        dtls_server_setup(server_options: TLSOptions): GodotError
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet clients. Call this before [method connect_to_host] to have ENet connect using DTLS validating the server certificate against [param hostname]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        dtls_client_setup(hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        /** Configures the DTLS server to automatically drop new connections.
         *  [b]Note:[/b] This method is only relevant after calling [method dtls_server_setup].
         */
        refuse_new_connections(refuse: boolean): void
        /** Returns and resets host statistics. See [enum HostStatistic] for more info. */
        pop_statistic(statistic: ENetConnection.HostStatistic): number /*f64*/
        /** Returns the maximum number of channels allowed for connected peers. */
        get_max_channels(): number /*i64*/
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        /** Returns the list of peers associated with this host.
         *  [b]Note:[/b] This list might include some peers that are not fully connected or are still being disconnected.
         */
        get_peers(): Array
        /** Sends a [param packet] toward a destination from the address and port currently bound by this ENetConnection instance. 
         *  This is useful as it serves to establish entries in NAT routing tables on all devices between this bound instance and the public facing internet, allowing a prospective client's connection packets to be routed backward through the NAT device(s) between the public internet and this host.
         *  This requires forward knowledge of a prospective client's address and communication port as seen by the public internet - after any NAT devices have handled their connection request. This information can be obtained by a [url=https://en.wikipedia.org/wiki/STUN]STUN[/url] service, and must be handed off to your host by an entity that is not the prospective client. This will never work for a client behind a Symmetric NAT due to the nature of the Symmetric NAT routing algorithm, as their IP and Port cannot be known beforehand.
         */
        socket_send(destination_address: string, destination_port: number /*i64*/, packet: PackedByteArray): void
    }
    /** A MultiplayerPeer implementation using the [url=http://enet.bespin.org/index.html]ENet[/url] library. */
    class ENetMultiplayerPeer extends MultiplayerPeer {
        /** Create server that listens to connections via [param port]. The port needs to be an available, unused port between 0 and 65535. Note that ports below 1024 are privileged and may require elevated permissions depending on the platform. To change the interface the server listens on, use [method set_bind_ip]. The default IP is the wildcard [code]"*"[/code], which listens on all available interfaces. [param max_clients] is the maximum number of clients that are allowed at once, any number up to 4095 may be used, although the achievable number of simultaneous clients may be far lower and depends on the application. For additional details on the bandwidth parameters, see [method create_client]. Returns [constant OK] if a server was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the server could not be created. */
        create_server(port: number /*i64*/, max_clients: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        /** Create client that connects to a server at [param address] using specified [param port]. The given address needs to be either a fully qualified domain name (e.g. [code]"www.example.com"[/code]) or an IP address in IPv4 or IPv6 format (e.g. [code]"192.168.1.1"[/code]). The [param port] is the port the server is listening on. The [param channel_count] parameter can be used to specify the number of ENet channels allocated for the connection. The [param in_bandwidth] and [param out_bandwidth] parameters can be used to limit the incoming and outgoing bandwidth to the given number of bytes per second. The default of 0 means unlimited bandwidth. Note that ENet will strategically drop packets on specific sides of a connection between peers to ensure the peer's bandwidth is not overwhelmed. The bandwidth parameters also determine the window size of a connection which limits the amount of reliable packets that may be in transit at any given time. Returns [constant OK] if a client was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the client could not be created. If [param local_port] is specified, the client will also listen to the given port; this is useful for some NAT traversal techniques. */
        create_client(address: string, port: number /*i64*/, channel_count: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0, local_port: number /*i64*/ = 0): GodotError
        /** Initialize this [MultiplayerPeer] in mesh mode. The provided [param unique_id] will be used as the local peer network unique ID once assigned as the [member MultiplayerAPI.multiplayer_peer]. In the mesh configuration you will need to set up each new peer manually using [ENetConnection] before calling [method add_mesh_peer]. While this technique is more advanced, it allows for better control over the connection process (e.g. when dealing with NAT punch-through) and for better distribution of the network load (which would otherwise be more taxing on the server). */
        create_mesh(unique_id: number /*i64*/): GodotError
        /** Add a new remote peer with the given [param peer_id] connected to the given [param host].
         *  [b]Note:[/b] The [param host] must have exactly one peer in the [constant ENetPacketPeer.STATE_CONNECTED] state.
         */
        add_mesh_peer(peer_id: number /*i64*/, host: ENetConnection): GodotError
        /** The IP used when creating a server. This is set to the wildcard [code]"*"[/code] by default, which binds to all available interfaces. The given IP needs to be in IPv4 or IPv6 address format, for example: [code]"192.168.1.1"[/code]. */
        set_bind_ip(ip: string): void
        get_host(): ENetConnection
        /** Returns the [ENetPacketPeer] associated to the given [param id]. */
        get_peer(id: number /*i64*/): ENetPacketPeer
        /** The underlying [ENetConnection] created after [method create_client] and [method create_server]. */
        readonly host: ENetConnection
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
    /** A wrapper class for an [url=http://enet.bespin.org/group__peer.html]ENetPeer[/url]. */
    class ENetPacketPeer extends PacketPeer {
        static readonly PACKET_LOSS_SCALE = 65536
        static readonly PACKET_THROTTLE_SCALE = 32
        static readonly FLAG_RELIABLE = 1
        static readonly FLAG_UNSEQUENCED = 2
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        /** Request a disconnection from a peer. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect(data: number /*i64*/ = 0): void
        /** Request a disconnection from a peer, but only after all queued outgoing packets are sent. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect_later(data: number /*i64*/ = 0): void
        /** Force an immediate disconnection from a peer. No [constant ENetConnection.EVENT_DISCONNECT] will be generated. The foreign peer is not guaranteed to receive the disconnect notification, and is reset immediately upon return from this function. */
        peer_disconnect_now(data: number /*i64*/ = 0): void
        /** Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests. */
        ping(): void
        /** Sets the [param ping_interval] in milliseconds at which pings will be sent to a peer. Pings are used both to monitor the liveness of the connection and also to dynamically adjust the throttle during periods of low traffic so that the throttle has reasonable responsiveness during traffic spikes. The default ping interval is [code]500[/code] milliseconds. */
        ping_interval(ping_interval: number /*i64*/): void
        /** Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host. */
        reset(): void
        /** Queues a [param packet] to be sent over the specified [param channel]. See [code]FLAG_*[/code] constants for available packet flags. */
        send(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): GodotError
        /** Configures throttle parameter for a peer.
         *  Unreliable packets are dropped by ENet in response to the varying conditions of the Internet connection to the peer. The throttle represents a probability that an unreliable packet should not be dropped and thus sent by ENet to the peer. By measuring fluctuations in round trip times of reliable packets over the specified [param interval], ENet will either increase the probability by the amount specified in the [param acceleration] parameter, or decrease it by the amount specified in the [param deceleration] parameter (both are ratios to [constant PACKET_THROTTLE_SCALE]).
         *  When the throttle has a value of [constant PACKET_THROTTLE_SCALE], no unreliable packets are dropped by ENet, and so 100% of all unreliable packets will be sent.
         *  When the throttle has a value of [code]0[/code], all unreliable packets are dropped by ENet, and so 0% of all unreliable packets will be sent.
         *  Intermediate values for the throttle represent intermediate probabilities between 0% and 100% of unreliable packets being sent. The bandwidth limits of the local and foreign hosts are taken into account to determine a sensible limit for the throttle probability above which it should not raise even in the best of conditions.
         */
        throttle_configure(interval: number /*i64*/, acceleration: number /*i64*/, deceleration: number /*i64*/): void
        /** Sets the timeout parameters for a peer. The timeout parameters control how and when a peer will timeout from a failure to acknowledge reliable traffic. Timeout values are expressed in milliseconds.
         *  The [param timeout] is a factor that, multiplied by a value based on the average round trip time, will determine the timeout limit for a reliable packet. When that limit is reached, the timeout will be doubled, and the peer will be disconnected if that limit has reached [param timeout_min]. The [param timeout_max] parameter, on the other hand, defines a fixed timeout for which any packet must be acknowledged or the peer will be dropped.
         */
        set_timeout(timeout: number /*i64*/, timeout_min: number /*i64*/, timeout_max: number /*i64*/): void
        /** Returns the IP address of this peer. */
        get_remote_address(): string
        /** Returns the remote port of this peer. */
        get_remote_port(): number /*i64*/
        /** Returns the requested [param statistic] for this peer. See [enum PeerStatistic]. */
        get_statistic(statistic: ENetPacketPeer.PeerStatistic): number /*f64*/
        /** Returns the current peer state. See [enum PeerState]. */
        get_state(): ENetPacketPeer.PeerState
        /** Returns the number of channels allocated for communication with peer. */
        get_channels(): number /*i64*/
        /** Returns [code]true[/code] if the peer is currently active (i.e. the associated [ENetConnection] is still valid). */
        is_active(): boolean
    }
    class EditorAbout extends AcceptDialog {
        _version_button_pressed(): void
    }
    class EditorAssetLibrary extends PanelContainer {
        readonly install_asset: Signal
    }
    class EditorAudioBus extends PanelContainer {
        update_bus(): void
        update_send(): void
        readonly duplicate_request: Signal
        readonly delete_request: Signal
        readonly vol_reset_request: Signal
        readonly drop_end_request: Signal
        readonly dropped: Signal
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
        readonly autoload_changed: Signal
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
    /** Godot editor's command palette. */
    class EditorCommandPalette extends ConfirmationDialog {
        /** Adds a custom command to EditorCommandPalette.
         *  - [param command_name]: [String] (Name of the [b]Command[/b]. This is displayed to the user.)
         *  - [param key_name]: [String] (Name of the key for a particular [b]Command[/b]. This is used to uniquely identify the [b]Command[/b].)
         *  - [param binded_callable]: [Callable] (Callable of the [b]Command[/b]. This will be executed when the [b]Command[/b] is selected.)
         *  - [param shortcut_text]: [String] (Shortcut text of the [b]Command[/b] if available.)
         */
        add_command(command_name: string, key_name: string, binded_callable: Callable, shortcut_text: string = 'None'): void
        /** Removes the custom command from EditorCommandPalette.
         *  - [param key_name]: [String] (Name of the key for a particular [b]Command[/b].)
         */
        remove_command(key_name: string): void
    }
    class EditorDebuggerInspector extends EditorInspector {
        readonly object_selected: Signal
        readonly object_edited: Signal
        readonly object_property_updated: Signal
    }
    class EditorDebuggerNode extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        readonly goto_script_line: Signal
        readonly set_execution: Signal
        readonly clear_execution: Signal
        readonly breaked: Signal
        readonly breakpoint_toggled: Signal
        readonly breakpoint_set_in_tree: Signal
        readonly breakpoints_cleared_in_tree: Signal
    }
    /** A base class to implement debugger plugins. */
    class EditorDebuggerPlugin extends RefCounted {
        /* gdvirtual */ _setup_session(session_id: number /*i64*/): void
        /* gdvirtual */ _has_capture(capture: string): boolean
        /* gdvirtual */ _capture(message: string, data: Array, session_id: number /*i64*/): boolean
        /** Returns the [EditorDebuggerSession] with the given [param id]. */
        get_session(id: number /*i64*/): EditorDebuggerSession
        /** Returns an array of [EditorDebuggerSession] currently available to this debugger plugin.
         *  [b]Note:[/b] Sessions in the array may be inactive, check their state via [method EditorDebuggerSession.is_active].
         */
        get_sessions(): Array
    }
    class EditorDebuggerRemoteObject extends Object {
        get_title(): string
        get_variant(_unnamed_arg0: StringName): any
        clear(): void
        get_remote_object_id(): number /*i64*/
        readonly value_edited: Signal
    }
    /** A class to interact with the editor debugger. */
    class EditorDebuggerSession extends RefCounted {
        /** Sends the given [param message] to the attached remote instance, optionally passing additionally [param data]. See [EngineDebugger] for how to retrieve those messages. */
        send_message(message: string, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        /** Toggle the given [param profiler] on the attached remote instance, optionally passing additionally [param data]. See [EngineProfiler] for more details. */
        toggle_profiler(profiler: string, enable: boolean, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        /** Returns [code]true[/code] if the attached remote instance is currently in the debug loop. */
        is_breaked(): boolean
        /** Returns [code]true[/code] if the attached remote instance can be debugged. */
        is_debuggable(): boolean
        /** Returns [code]true[/code] if the debug session is currently attached to a remote instance. */
        is_active(): boolean
        /** Adds the given [param control] to the debug session UI in the debugger bottom panel. */
        add_session_tab(control: Control): void
        /** Removes the given [param control] from the debug session UI in the debugger bottom panel. */
        remove_session_tab(control: Control): void
        readonly started: Signal
        readonly stopped: Signal
        readonly breaked: Signal
        readonly continued: Signal
    }
    class EditorDebuggerTree extends Tree {
        readonly object_selected: Signal
        readonly save_node: Signal
        readonly open: Signal
    }
    class EditorDirDialog extends ConfirmationDialog {
        readonly dir_selected: Signal
    }
    class EditorExport extends Node {
        readonly export_presets_updated: Signal
    }
    class EditorExportGDScript extends EditorExportPlugin {
    }
    /** Identifies a supported export platform, and internally provides the functionality of exporting to that platform. */
    class EditorExportPlatform extends RefCounted {
        /** Returns the name of the export operating system handled by this [EditorExportPlatform] class, as a friendly string. Possible return values are [code]Windows[/code], [code]Linux[/code], [code]macOS[/code], [code]Android[/code], [code]iOS[/code], and [code]Web[/code]. */
        get_os_name(): string
    }
    /** Exporter for Android. */
    class EditorExportPlatformAndroid extends EditorExportPlatform {
    }
    /** Exporter for iOS. */
    class EditorExportPlatformIOS extends EditorExportPlatform {
    }
    /** Exporter for Linux/BSD. */
    class EditorExportPlatformLinuxBSD extends EditorExportPlatformPC {
    }
    /** Exporter for macOS. */
    class EditorExportPlatformMacOS extends EditorExportPlatform {
    }
    /** Base class for the desktop platform exporter (Windows and Linux/BSD). */
    class EditorExportPlatformPC extends EditorExportPlatform {
    }
    /** Exporter for the Web. */
    class EditorExportPlatformWeb extends EditorExportPlatform {
    }
    /** Exporter for Windows. */
    class EditorExportPlatformWindows extends EditorExportPlatformPC {
    }
    /** A script that is executed when exporting the project. */
    class EditorExportPlugin extends RefCounted {
        /* gdvirtual */ _export_file(path: string, type: string, features: PackedStringArray): void
        /* gdvirtual */ _export_begin(features: PackedStringArray, is_debug: boolean, path: string, flags: number /*i64*/): void
        /* gdvirtual */ _export_end(): void
        /* gdvirtual */ _begin_customize_resources(platform: EditorExportPlatform, features: PackedStringArray): boolean
        /* gdvirtual */ _customize_resource(resource: Resource, path: string): Resource
        /* gdvirtual */ _begin_customize_scenes(platform: EditorExportPlatform, features: PackedStringArray): boolean
        /* gdvirtual */ _customize_scene(scene: Node, path: string): Node
        /* gdvirtual */ _get_customization_configuration_hash(): number /*i64*/
        /* gdvirtual */ _end_customize_scenes(): void
        /* gdvirtual */ _end_customize_resources(): void
        /* gdvirtual */ _get_export_options(platform: EditorExportPlatform): Array
        /* gdvirtual */ _should_update_export_options(platform: EditorExportPlatform): boolean
        /* gdvirtual */ _get_export_option_warning(platform: EditorExportPlatform, option: string): string
        /* gdvirtual */ _get_export_features(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _supports_platform(platform: EditorExportPlatform): boolean
        /* gdvirtual */ _get_android_dependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _get_android_dependencies_maven_repos(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _get_android_libraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _get_android_manifest_activity_element_contents(platform: EditorExportPlatform, debug: boolean): string
        /* gdvirtual */ _get_android_manifest_application_element_contents(platform: EditorExportPlatform, debug: boolean): string
        /* gdvirtual */ _get_android_manifest_element_contents(platform: EditorExportPlatform, debug: boolean): string
        /** Adds a shared object or a directory containing only shared objects with the given [param tags] and destination [param path].
         *  [b]Note:[/b] In case of macOS exports, those shared objects will be added to [code]Frameworks[/code] directory of app bundle.
         *  In case of a directory code-sign will error if you place non code object in directory.
         */
        add_shared_object(path: string, tags: PackedStringArray, target: string): void
        /** Adds a static lib from the given [param path] to the iOS project. */
        add_ios_project_static_lib(path: string): void
        /** Adds a custom file to be exported. [param path] is the virtual path that can be used to load the file, [param file] is the binary data of the file.
         *  When called inside [method _export_file] and [param remap] is [code]true[/code], the current file will not be exported, but instead remapped to this custom file. [param remap] is ignored when called in other places.
         */
        add_file(path: string, file: PackedByteArray, remap: boolean): void
        /** Adds a static library (*.a) or dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project. */
        add_ios_framework(path: string): void
        /** Adds a dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.
         *  [b]Note:[/b] For static libraries (*.a) works in same way as [method add_ios_framework].
         *  [b]Note:[/b] This method should not be used for System libraries as they are already present on the device.
         */
        add_ios_embedded_framework(path: string): void
        /** Adds content for iOS Property List files. */
        add_ios_plist_content(plist_content: string): void
        /** Adds linker flags for the iOS export. */
        add_ios_linker_flags(flags: string): void
        /** Adds an iOS bundle file from the given [param path] to the exported project. */
        add_ios_bundle_file(path: string): void
        /** Adds a C++ code to the iOS export. The final code is created from the code appended by each active export plugin. */
        add_ios_cpp_code(code: string): void
        /** Adds file or directory matching [param path] to [code]PlugIns[/code] directory of macOS app bundle.
         *  [b]Note:[/b] This is useful only for macOS exports.
         */
        add_macos_plugin_file(path: string): void
        /** To be called inside [method _export_file]. Skips the current file, so it's not included in the export. */
        skip(): void
        /** Returns the current value of an export option supplied by [method _get_export_options]. */
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
    /** An editor feature profile which can be used to disable specific features. */
    class EditorFeatureProfile extends RefCounted {
        /** If [param disable] is [code]true[/code], disables the class specified by [param class_name]. When disabled, the class won't appear in the Create New Node dialog. */
        set_disable_class(class_name: StringName, disable: boolean): void
        /** Returns [code]true[/code] if the class specified by [param class_name] is disabled. When disabled, the class won't appear in the Create New Node dialog. */
        is_class_disabled(class_name: StringName): boolean
        /** If [param disable] is [code]true[/code], disables editing for the class specified by [param class_name]. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        set_disable_class_editor(class_name: StringName, disable: boolean): void
        /** Returns [code]true[/code] if editing for the class specified by [param class_name] is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        is_class_editor_disabled(class_name: StringName): boolean
        /** If [param disable] is [code]true[/code], disables editing for [param property] in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        set_disable_class_property(class_name: StringName, property: StringName, disable: boolean): void
        /** Returns [code]true[/code] if [param property] is disabled in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        is_class_property_disabled(class_name: StringName, property: StringName): boolean
        /** If [param disable] is [code]true[/code], disables the editor feature specified in [param feature]. When a feature is disabled, it will disappear from the editor entirely. */
        set_disable_feature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        /** Returns [code]true[/code] if the [param feature] is disabled. When a feature is disabled, it will disappear from the editor entirely. */
        is_feature_disabled(feature: EditorFeatureProfile.Feature): boolean
        /** Returns the specified [param feature]'s human-readable name. */
        get_feature_name(feature: EditorFeatureProfile.Feature): string
        /** Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's [b]Import[/b] button or the [method load_from_file] method.
         *  [b]Note:[/b] Feature profiles created via the user interface are saved in the [code]feature_profiles[/code] directory, as a file with the [code].profile[/code] extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
         */
        save_to_file(path: string): GodotError
        /** Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's [b]Export[/b] button or the [method save_to_file] method.
         *  [b]Note:[/b] Feature profiles created via the user interface are loaded from the [code]feature_profiles[/code] directory, as a file with the [code].profile[/code] extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
         */
        load_from_file(path: string): GodotError
    }
    class EditorFeatureProfileManager extends AcceptDialog {
        readonly current_feature_profile_changed: Signal
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
    /** A modified version of [FileDialog] used by the editor. */
    class EditorFileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        /** Removes all filters except for "All Files (*)". */
        clear_filters(): void
        /** Adds a comma-delimited file name [param filter] option to the [EditorFileDialog] with an optional [param description], which restricts what files can be picked.
         *  A [param filter] should be of the form [code]"filename.extension"[/code], where filename and extension can be [code]*[/code] to match any string. Filters starting with [code].[/code] (i.e. empty filenames) are not allowed.
         *  For example, a [param filter] of [code]"*.tscn, *.scn"[/code] and a [param description] of [code]"Scenes"[/code] results in filter text "Scenes (*.tscn, *.scn)".
         */
        add_filter(filter: string, description: string = ''): void
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
        /** Returns the [VBoxContainer] used to display the file system.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_vbox(): VBoxContainer
        /** Returns the LineEdit for the selected file.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
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
        /** Adds the given [param menu] to the side of the file dialog with the given [param title] text on top. Only one side menu is allowed. */
        add_side_menu(menu: Control, title: string = ''): void
        /** Notify the [EditorFileDialog] that its view of the data is no longer accurate. Updates the view contents on next view update. */
        invalidate(): void
        /** The location from which the user may select a file, including [code]res://[/code], [code]user://[/code], and the local file system. */
        access: number /*i64*/
        /** The view format in which the [EditorFileDialog] displays resources to the user. */
        display_mode: number /*i64*/
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        file_mode: number /*i64*/
        /** The currently occupied directory. */
        current_dir: string
        /** The currently selected file. */
        current_file: string
        /** The file system path in the address bar. */
        current_path: string
        /** The available file type filters. For example, this shows only [code].png[/code] and [code].gd[/code] files: [code]set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))[/code]. Multiple file types can also be specified in a single filter. [code]"*.png, *.jpg, *.jpeg ; Supported Images"[/code] will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        /** If [code]true[/code], hidden files and directories will be visible in the [EditorFileDialog]. This property is synchronized with [member EditorSettings.filesystem/file_dialog/show_hidden_files]. */
        show_hidden_files: boolean
        /** If [code]true[/code], the [EditorFileDialog] will not warn the user before overwriting files. */
        disable_overwrite_warning: boolean
        readonly file_selected: Signal
        readonly files_selected: Signal
        readonly dir_selected: Signal
    }
    class EditorFileServer extends Object {
    }
    /** Resource filesystem, as the editor sees it. */
    class EditorFileSystem extends Node {
        /** Gets the root directory object. */
        get_filesystem(): EditorFileSystemDirectory
        /** Returns [code]true[/code] if the filesystem is being scanned. */
        is_scanning(): boolean
        /** Returns the scan progress for 0 to 1 if the FS is being scanned. */
        get_scanning_progress(): number /*f64*/
        /** Scan the filesystem for changes. */
        scan(): void
        /** Check if the source of any imported resource changed. */
        scan_sources(): void
        /** Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.
         *  This will not import the file. To reimport, call [method reimport_files] or [method scan] methods.
         */
        update_file(path: string): void
        /** Returns a view into the filesystem at [param path]. */
        get_filesystem_path(path: string): EditorFileSystemDirectory
        /** Returns the resource type of the file, given the full path. This returns a string such as [code]"Resource"[/code] or [code]"GDScript"[/code], [i]not[/i] a file extension such as [code]".gd"[/code]. */
        get_file_type(path: string): string
        /** Reimports a set of files. Call this if these files or their [code].import[/code] files were directly edited by script or an external program.
         *  If the file type changed or the file was newly created, use [method update_file] or [method scan].
         *  [b]Note:[/b] This function blocks until the import is finished. However, the main loop iteration, including timers and [method Node._process], will occur during the import process due to progress bar updates. Avoid calls to [method reimport_files] or [method scan] while an import is in progress.
         */
        reimport_files(files: PackedStringArray): void
        readonly filesystem_changed: Signal
        readonly script_classes_updated: Signal
        readonly sources_changed: Signal
        readonly resources_reimported: Signal
        readonly resources_reload: Signal
    }
    /** A directory for the resource filesystem. */
    class EditorFileSystemDirectory extends Object {
        /** Returns the number of subdirectories in this directory. */
        get_subdir_count(): number /*i64*/
        /** Returns the subdirectory at index [param idx]. */
        get_subdir(idx: number /*i64*/): EditorFileSystemDirectory
        /** Returns the number of files in this directory. */
        get_file_count(): number /*i64*/
        /** Returns the name of the file at index [param idx]. */
        get_file(idx: number /*i64*/): string
        /** Returns the path to the file at index [param idx]. */
        get_file_path(idx: number /*i64*/): string
        /** Returns the resource type of the file at index [param idx]. This returns a string such as [code]"Resource"[/code] or [code]"GDScript"[/code], [i]not[/i] a file extension such as [code]".gd"[/code]. */
        get_file_type(idx: number /*i64*/): StringName
        /** Returns the name of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the [code]class_name[/code] syntax, this will return an empty string. */
        get_file_script_class_name(idx: number /*i64*/): string
        /** Returns the base class of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the [code]class_name[/code] syntax, this will return an empty string. */
        get_file_script_class_extends(idx: number /*i64*/): string
        /** Returns [code]true[/code] if the file at index [param idx] imported properly. */
        get_file_import_is_valid(idx: number /*i64*/): boolean
        /** Returns the name of this directory. */
        get_name(): string
        /** Returns the path to this directory. */
        get_path(): string
        /** Returns the parent directory for this directory or [code]null[/code] if called on a directory at [code]res://[/code] or [code]user://[/code]. */
        get_parent(): EditorFileSystemDirectory
        /** Returns the index of the file with name [param name] or [code]-1[/code] if not found. */
        find_file_index(name: string): number /*i64*/
        /** Returns the index of the directory with name [param name] or [code]-1[/code] if not found. */
        find_dir_index(name: string): number /*i64*/
    }
    /** Used to query and configure import format support. */
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
        /* gdvirtual */ _is_active(): boolean
        /* gdvirtual */ _get_file_extensions(): PackedStringArray
        /* gdvirtual */ _query(): boolean
    }
    class EditorFileSystemImportFormatSupportQueryFBX extends EditorFileSystemImportFormatSupportQuery {
    }
    class EditorFontPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorGradientPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorHelpBit extends MarginContainer {
        set_text(text: string): void
        readonly request_hide: Signal
    }
    class EditorHelpSearch extends ConfirmationDialog {
        readonly go_to_help: Signal
    }
    class EditorImagePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorImportBlendRunner extends Node {
    }
    /** Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type. */
    class EditorImportPlugin extends ResourceImporter {
        /* gdvirtual */ _get_importer_name(): string
        /* gdvirtual */ _get_visible_name(): string
        /* gdvirtual */ _get_preset_count(): number /*i64*/
        /* gdvirtual */ _get_preset_name(preset_index: number /*i64*/): string
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _get_import_options(path: string, preset_index: number /*i64*/): Array
        /* gdvirtual */ _get_save_extension(): string
        /* gdvirtual */ _get_resource_type(): string
        /* gdvirtual */ _get_priority(): number /*f64*/
        /* gdvirtual */ _get_import_order(): number /*i64*/
        /* gdvirtual */ _get_option_visibility(path: string, option_name: StringName, options: Dictionary): boolean
        /* gdvirtual */ _import(source_file: string, save_path: string, options: Dictionary, platform_variants: Array, gen_files: Array): GodotError
        /** This function can only be called during the [method _import] callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the [param custom_options]. Additionally, in cases where multiple importers can handle a file, the [param custom_importer] ca be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. [param generator_parameters] defines optional extra metadata which will be stored as [code skip-lint]generator_parameters[/code] in the [code]remap[/code] section of the [code].import[/code] file, for example to store a md5 hash of the source data. */
        append_import_external_resource(path: string, custom_options: Dictionary = <any> {} /*compound.type from 27([object Object])*/, custom_importer: string = '', generator_parameters: any = <any> {} /*compound.type from nil*/): GodotError
    }
    /** A control used to edit properties of an object. */
    class EditorInspector extends ScrollContainer {
        _edit_request_change(_unnamed_arg0: Object, _unnamed_arg1: string): void
        /** Gets the path of the currently selected property. */
        get_selected_path(): string
        /** Returns the object currently selected in this inspector. */
        get_edited_object(): Object
        readonly property_selected: Signal
        readonly property_keyed: Signal
        readonly property_deleted: Signal
        readonly resource_selected: Signal
        readonly object_id_selected: Signal
        readonly property_edited: Signal
        readonly property_toggled: Signal
        readonly edited_object_changed: Signal
        readonly restart_requested: Signal
    }
    class EditorInspectorCategory extends Control {
    }
    class EditorInspectorDefaultPlugin extends EditorInspectorPlugin {
    }
    /** Plugin for adding custom property editors on the inspector. */
    class EditorInspectorPlugin extends RefCounted {
        /* gdvirtual */ _can_handle(object: Object): boolean
        /* gdvirtual */ _parse_begin(object: Object): void
        /* gdvirtual */ _parse_category(object: Object, category: string): void
        /* gdvirtual */ _parse_group(object: Object, group: string): void
        /* gdvirtual */ _parse_property(object: Object, type: Variant.Type, name: string, hint_type: PropertyHint, hint_string: string, usage_flags: PropertyUsageFlags, wide: boolean): boolean
        /* gdvirtual */ _parse_end(object: Object): void
        /** Adds a custom control, which is not necessarily a property editor. */
        add_custom_control(control: Control): void
        /** Adds a property editor for an individual property. The [param editor] control must extend [EditorProperty]. */
        add_property_editor(property: string, editor: Control, add_to_end: boolean = false): void
        /** Adds an editor that allows modifying multiple properties. The [param editor] control must extend [EditorProperty]. */
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
        readonly name_confirmed: Signal
    }
    class EditorLocaleDialog extends ConfirmationDialog {
        readonly locale_selected: Signal
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
        readonly enable_profiling: Signal
        readonly open_request: Signal
    }
    class EditorNode extends Node {
        push_item(object: Object, property: string = '', inspector_only: boolean = false): void
        set_edited_scene(_unnamed_arg0: Node): void
        open_request(_unnamed_arg0: string): void
        edit_foreign_resource(_unnamed_arg0: Resource): void
        is_resource_read_only(_unnamed_arg0: Resource, _unnamed_arg1: boolean): boolean
        stop_child_process(_unnamed_arg0: number /*i64*/): void
        _set_main_scene_state(_unnamed_arg0: Dictionary, _unnamed_arg1: Node): void
        _update_recent_scenes(): void
        readonly request_help_search: Signal
        readonly script_add_function_request: Signal
        readonly resource_saved: Signal
        readonly scene_saved: Signal
        readonly scene_changed: Signal
        readonly scene_closed: Signal
    }
    /** Gizmo for editing [Node3D] objects. */
    class EditorNode3DGizmo extends Node3DGizmo {
        /* gdvirtual */ _redraw(): void
        /* gdvirtual */ _get_handle_name(id: number /*i64*/, secondary: boolean): string
        /* gdvirtual */ _is_handle_highlighted(id: number /*i64*/, secondary: boolean): boolean
        /* gdvirtual */ _get_handle_value(id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _set_handle(id: number /*i64*/, secondary: boolean, camera: Camera3D, point: Vector2): void
        /* gdvirtual */ _commit_handle(id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        /* gdvirtual */ _subgizmos_intersect_ray(camera: Camera3D, point: Vector2): number /*i64*/
        /* gdvirtual */ _subgizmos_intersect_frustum(camera: Camera3D, frustum: Array): PackedInt32Array
        /* gdvirtual */ _set_subgizmo_transform(id: number /*i64*/, transform: Transform3D): void
        /* gdvirtual */ _get_subgizmo_transform(id: number /*i64*/): Transform3D
        /* gdvirtual */ _commit_subgizmos(ids: PackedInt32Array, restores: Array, cancel: boolean): void
        /** Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during [method _redraw]. */
        add_lines(lines: PackedVector3Array, material: Material, billboard: boolean = false, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Adds a mesh to the gizmo with the specified [param material], local [param transform] and [param skeleton]. Call this method during [method _redraw]. */
        add_mesh(mesh: Mesh, material: Material = <any> {} /*compound.type from nil*/, transform: Transform3D = <any> {} /*compound.type from 18([object Object])*/, skeleton: SkinReference = <any> {} /*compound.type from nil*/): void
        /** Adds the specified [param segments] to the gizmo's collision shape for picking. Call this method during [method _redraw]. */
        add_collision_segments(segments: PackedVector3Array): void
        /** Adds collision triangles to the gizmo for picking. A [TriangleMesh] can be generated from a regular [Mesh] too. Call this method during [method _redraw]. */
        add_collision_triangles(triangles: TriangleMesh): void
        /** Adds an unscaled billboard for visualization and selection. Call this method during [method _redraw]. */
        add_unscaled_billboard(material: Material, default_scale: number /*f64*/ = 1, modulate: Color = new Color(1, 1, 1, 1)): void
        /** Adds a list of handles (points) which can be used to edit the properties of the gizmo's [Node3D]. The [param ids] argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the [param handles] argument order.
         *  The [param secondary] argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.
         *  There are virtual methods which will be called upon editing of these handles. Call this method during [method _redraw].
         */
        add_handles(handles: PackedVector3Array, material: Material, ids: PackedInt32Array, billboard: boolean = false, secondary: boolean = false): void
        /** Sets the reference [Node3D] node for the gizmo. [param node] must inherit from [Node3D]. */
        set_node_3d(node: Node): void
        /** Returns the [Node3D] node associated with this gizmo. */
        get_node_3d(): Node3D
        /** Returns the [EditorNode3DGizmoPlugin] that owns this gizmo. It's useful to retrieve materials using [method EditorNode3DGizmoPlugin.get_material]. */
        get_plugin(): EditorNode3DGizmoPlugin
        /** Removes everything in the gizmo including meshes, collisions and handles. */
        clear(): void
        /** Sets the gizmo's hidden state. If [code]true[/code], the gizmo will be hidden. If [code]false[/code], it will be shown. */
        set_hidden(hidden: boolean): void
        /** Returns [code]true[/code] if the given subgizmo is currently selected. Can be used to highlight selected elements during [method _redraw]. */
        is_subgizmo_selected(id: number /*i64*/): boolean
        /** Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [method _redraw]. */
        get_subgizmo_selection(): PackedInt32Array
    }
    /** A class used by the editor to define Node3D gizmo types. */
    class EditorNode3DGizmoPlugin extends Resource {
        /* gdvirtual */ _has_gizmo(for_node_3d: Node3D): boolean
        /* gdvirtual */ _create_gizmo(for_node_3d: Node3D): EditorNode3DGizmo
        /* gdvirtual */ _get_gizmo_name(): string
        /* gdvirtual */ _get_priority(): number /*i64*/
        /* gdvirtual */ _can_be_hidden(): boolean
        /* gdvirtual */ _is_selectable_when_hidden(): boolean
        /* gdvirtual */ _redraw(gizmo: EditorNode3DGizmo): void
        /* gdvirtual */ _get_handle_name(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): string
        /* gdvirtual */ _is_handle_highlighted(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): boolean
        /* gdvirtual */ _get_handle_value(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _set_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, camera: Camera3D, screen_pos: Vector2): void
        /* gdvirtual */ _commit_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        /* gdvirtual */ _subgizmos_intersect_ray(gizmo: EditorNode3DGizmo, camera: Camera3D, screen_pos: Vector2): number /*i64*/
        /* gdvirtual */ _subgizmos_intersect_frustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustum_planes: Array): PackedInt32Array
        /* gdvirtual */ _get_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/): Transform3D
        /* gdvirtual */ _set_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/, transform: Transform3D): void
        /* gdvirtual */ _commit_subgizmos(gizmo: EditorNode3DGizmo, ids: PackedInt32Array, restores: Array, cancel: boolean): void
        /** Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_mesh] and [method EditorNode3DGizmo.add_lines]. Should not be overridden. */
        create_material(name: string, color: Color, billboard: boolean = false, on_top: boolean = false, use_vertex_color: boolean = false): void
        /** Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_unscaled_billboard]. Should not be overridden. */
        create_icon_material(name: string, texture: Texture2D, on_top: boolean = false, color: Color = new Color(1, 1, 1, 1)): void
        /** Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_handles]. Should not be overridden.
         *  You can optionally provide a texture to use instead of the default icon.
         */
        create_handle_material(name: string, billboard: boolean = false, texture: Texture2D = <any> {} /*compound.type from nil*/): void
        /** Adds a new material to the internal material list for the plugin. It can then be accessed with [method get_material]. Should not be overridden. */
        add_material(name: string, material: StandardMaterial3D): void
        /** Gets material from the internal list of materials. If an [EditorNode3DGizmo] is provided, it will try to get the corresponding variant (selected and/or editable). */
        get_material(name: string, gizmo: EditorNode3DGizmo = <any> {} /*compound.type from nil*/): StandardMaterial3D
    }
    class EditorOBJImporter extends EditorSceneFormatImporter {
    }
    class EditorObjectSelector extends Button {
    }
    class EditorPackedScenePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    /** Editor-only singleton that returns paths to various OS-specific data folders and files. */
    class EditorPaths extends Object {
        /** Returns the absolute path to the user's data folder. This folder should be used for [i]persistent[/i] user data files such as installed export templates.
         *  [b]Default paths per platform:[/b]
         *  
         */
        get_data_dir(): string
        /** Returns the absolute path to the user's configuration folder. This folder should be used for [i]persistent[/i] user configuration files.
         *  [b]Default paths per platform:[/b]
         *  
         */
        get_config_dir(): string
        /** Returns the absolute path to the user's cache folder. This folder should be used for temporary data that can be removed safely whenever the editor is closed (such as generated resource thumbnails).
         *  [b]Default paths per platform:[/b]
         *  
         */
        get_cache_dir(): string
        /** Returns [code]true[/code] if the editor is marked as self-contained, [code]false[/code] otherwise. When self-contained mode is enabled, user configuration, data and cache files are saved in an [code]editor_data/[/code] folder next to the editor binary. This makes portable usage easier and ensures the Godot editor minimizes file writes outside its own folder. Self-contained mode is not available for exported projects.
         *  Self-contained mode can be enabled by creating a file named [code]._sc_[/code] or [code]_sc_[/code] in the same folder as the editor binary or macOS .app bundle while the editor is not running. See also [method get_self_contained_file].
         *  [b]Note:[/b] On macOS, quarantine flag should be manually removed before using self-contained mode, see [url=https://docs.godotengine.org/en/stable/tutorials/export/running_on_macos.html]Running on macOS[/url].
         *  [b]Note:[/b] On macOS, placing [code]_sc_[/code] or any other file inside .app bundle will break digital signature and make it non-portable, consider placing it in the same folder as the .app bundle instead.
         *  [b]Note:[/b] The Steam release of Godot uses self-contained mode by default.
         */
        is_self_contained(): boolean
        /** Returns the absolute path to the self-contained file that makes the current Godot editor instance be considered as self-contained. Returns an empty string if the current Godot editor instance isn't self-contained. See also [method is_self_contained]. */
        get_self_contained_file(): string
        /** Returns the project-specific editor settings path. Projects all have a unique subdirectory inside the settings path where project-specific editor settings are saved. */
        get_project_settings_dir(): string
    }
    class EditorPerformanceProfiler extends HSplitContainer {
    }
    class EditorPlainTextSyntaxHighlighter extends EditorSyntaxHighlighter {
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
    /** Used by the editor to extend its functionality. */
    class EditorPlugin extends Node {
        /* gdvirtual */ _forward_canvas_gui_input(event: InputEvent): boolean
        /* gdvirtual */ _forward_canvas_draw_over_viewport(viewport_control: Control): void
        /* gdvirtual */ _forward_canvas_force_draw_over_viewport(viewport_control: Control): void
        /* gdvirtual */ _forward_3d_gui_input(viewport_camera: Camera3D, event: InputEvent): number /*i64*/
        /* gdvirtual */ _forward_3d_draw_over_viewport(viewport_control: Control): void
        /* gdvirtual */ _forward_3d_force_draw_over_viewport(viewport_control: Control): void
        /* gdvirtual */ _get_plugin_name(): string
        /* gdvirtual */ _get_plugin_icon(): Texture2D
        /* gdvirtual */ _has_main_screen(): boolean
        /* gdvirtual */ _make_visible(visible: boolean): void
        /* gdvirtual */ _edit(object: Object): void
        /* gdvirtual */ _handles(object: Object): boolean
        /* gdvirtual */ _get_state(): Dictionary
        /* gdvirtual */ _set_state(state: Dictionary): void
        /* gdvirtual */ _clear(): void
        /* gdvirtual */ _get_unsaved_status(for_scene: string): string
        /* gdvirtual */ _save_external_data(): void
        /* gdvirtual */ _apply_changes(): void
        /* gdvirtual */ _get_breakpoints(): PackedStringArray
        /* gdvirtual */ _set_window_layout(configuration: ConfigFile): void
        /* gdvirtual */ _get_window_layout(configuration: ConfigFile): void
        /* gdvirtual */ _build(): boolean
        /* gdvirtual */ _enable_plugin(): void
        /* gdvirtual */ _disable_plugin(): void
        /** Adds a custom control to a container (see [enum CustomControlContainer]). There are many locations where custom controls can be added in the editor UI.
         *  Please remember that you have to manage the visibility of your custom controls yourself (and likely hide it after adding it).
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_container] and free it with [method Node.queue_free].
         */
        add_control_to_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        /** Adds a control to the bottom panel (together with Output, Debug, Animation, etc). Returns a reference to the button added. It's up to you to hide/show the button when needed. When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_bottom_panel] and free it with [method Node.queue_free]. */
        add_control_to_bottom_panel(control: Control, title: string): Button
        /** Adds the control to a specific dock slot (see [enum DockSlot] for options).
         *  If the dock is repositioned and as long as the plugin is active, the editor will save the dock position on further sessions.
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_docks] and free it with [method Node.queue_free].
         */
        add_control_to_dock(slot: EditorPlugin.DockSlot, control: Control): void
        /** Removes the control from the dock. You have to manually [method Node.queue_free] the control. */
        remove_control_from_docks(control: Control): void
        /** Removes the control from the bottom panel. You have to manually [method Node.queue_free] the control. */
        remove_control_from_bottom_panel(control: Control): void
        /** Removes the control from the specified container. You have to manually [method Node.queue_free] the control. */
        remove_control_from_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        /** Adds a custom menu item to [b]Project > Tools[/b] named [param name]. When clicked, the provided [param callable] will be called. */
        add_tool_menu_item(name: string, callable: Callable): void
        /** Adds a custom [PopupMenu] submenu under [b]Project > Tools >[/b] [param name]. Use [method remove_tool_menu_item] on plugin clean up to remove the menu. */
        add_tool_submenu_item(name: string, submenu: PopupMenu): void
        /** Removes a menu [param name] from [b]Project > Tools[/b]. */
        remove_tool_menu_item(name: string): void
        /** Returns the [PopupMenu] under [b]Scene > Export As...[/b]. */
        get_export_as_menu(): PopupMenu
        /** Adds a custom type, which will appear in the list of nodes or resources. An icon can be optionally passed.
         *  When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.
         *  [b]Note:[/b] The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.
         *  You can use the virtual method [method _handles] to check if your custom object is being edited by checking the script or using the [code]is[/code] keyword.
         *  During run-time, this will be a simple object with a script so this function does not need to be called then.
         *  [b]Note:[/b] Custom types added this way are not true classes. They are just a helper to create a node with specific script.
         */
        add_custom_type(type: string, base: string, script: Script, icon: Texture2D): void
        /** Removes a custom type added by [method add_custom_type]. */
        remove_custom_type(type: string): void
        /** Adds a script at [param path] to the Autoload list as [param name]. */
        add_autoload_singleton(name: string, path: string): void
        /** Removes an Autoload [param name] from the list. */
        remove_autoload_singleton(name: string): void
        /** Updates the overlays of the 2D and 3D editor viewport. Causes methods [method _forward_canvas_draw_over_viewport], [method _forward_canvas_force_draw_over_viewport], [method _forward_3d_draw_over_viewport] and [method _forward_3d_force_draw_over_viewport] to be called. */
        update_overlays(): number /*i64*/
        /** Makes a specific item in the bottom panel visible. */
        make_bottom_panel_item_visible(item: Control): void
        /** Minimizes the bottom panel. */
        hide_bottom_panel(): void
        /** Gets the undo/redo object. Most actions in the editor can be undoable, so use this object to make sure this happens when it's worth it. */
        get_undo_redo(): EditorUndoRedoManager
        /** Hooks a callback into the undo/redo action creation when a property is modified in the inspector. This allows, for example, to save other properties that may be lost when a given property is modified.
         *  The callback should have 4 arguments: [Object] [code]undo_redo[/code], [Object] [code]modified_object[/code], [String] [code]property[/code] and [Variant] [code]new_value[/code]. They are, respectively, the [UndoRedo] object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.
         */
        add_undo_redo_inspector_hook_callback(callable: Callable): void
        /** Removes a callback previously added by [method add_undo_redo_inspector_hook_callback]. */
        remove_undo_redo_inspector_hook_callback(callable: Callable): void
        /** Queue save the project's editor layout. */
        queue_save_layout(): void
        /** Registers a custom translation parser plugin for extracting translatable strings from custom files. */
        add_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        /** Removes a custom translation parser plugin registered by [method add_translation_parser_plugin]. */
        remove_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        /** Registers a new [EditorImportPlugin]. Import plugins are used to import custom and unsupported assets as a custom [Resource] type.
         *  If [param first_priority] is [code]true[/code], the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
         *  [b]Note:[/b] If you want to import custom 3D asset formats use [method add_scene_format_importer_plugin] instead.
         *  See [method add_inspector_plugin] for an example of how to register a plugin.
         */
        add_import_plugin(importer: EditorImportPlugin, first_priority: boolean = false): void
        /** Removes an import plugin registered by [method add_import_plugin]. */
        remove_import_plugin(importer: EditorImportPlugin): void
        /** Registers a new [EditorSceneFormatImporter]. Scene importers are used to import custom 3D asset formats as scenes.
         *  If [param first_priority] is [code]true[/code], the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
         */
        add_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter, first_priority: boolean = false): void
        /** Removes a scene format importer registered by [method add_scene_format_importer_plugin]. */
        remove_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter): void
        /** Add a [EditorScenePostImportPlugin]. These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.
         *  If [param first_priority] is [code]true[/code], the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
         */
        add_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin, first_priority: boolean = false): void
        /** Remove the [EditorScenePostImportPlugin], added with [method add_scene_post_import_plugin]. */
        remove_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin): void
        /** Registers a new [EditorExportPlugin]. Export plugins are used to perform tasks when the project is being exported.
         *  See [method add_inspector_plugin] for an example of how to register a plugin.
         */
        add_export_plugin(plugin: EditorExportPlugin): void
        /** Removes an export plugin registered by [method add_export_plugin]. */
        remove_export_plugin(plugin: EditorExportPlugin): void
        /** Registers a new [EditorNode3DGizmoPlugin]. Gizmo plugins are used to add custom gizmos to the 3D preview viewport for a [Node3D].
         *  See [method add_inspector_plugin] for an example of how to register a plugin.
         */
        add_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        /** Removes a gizmo plugin registered by [method add_node_3d_gizmo_plugin]. */
        remove_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        /** Registers a new [EditorInspectorPlugin]. Inspector plugins are used to extend [EditorInspector] and provide custom configuration tools for your object's properties.
         *  [b]Note:[/b] Always use [method remove_inspector_plugin] to remove the registered [EditorInspectorPlugin] when your [EditorPlugin] is disabled to prevent leaks and an unexpected behavior.
         *  
         */
        add_inspector_plugin(plugin: EditorInspectorPlugin): void
        /** Removes an inspector plugin registered by [method add_import_plugin] */
        remove_inspector_plugin(plugin: EditorInspectorPlugin): void
        /** Registers a new [EditorResourceConversionPlugin]. Resource conversion plugins are used to add custom resource converters to the editor inspector.
         *  See [EditorResourceConversionPlugin] for an example of how to create a resource conversion plugin.
         */
        add_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        /** Removes a resource conversion plugin registered by [method add_resource_conversion_plugin]. */
        remove_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        /** Use this method if you always want to receive inputs from 3D view screen inside [method _forward_3d_gui_input]. It might be especially usable if your plugin will want to use raycast in the scene. */
        set_input_event_forwarding_always_enabled(): void
        /** Enables calling of [method _forward_canvas_force_draw_over_viewport] for the 2D editor and [method _forward_3d_force_draw_over_viewport] for the 3D editor when their viewports are updated. You need to call this method only once and it will work permanently for this plugin. */
        set_force_draw_over_forwarding_enabled(): void
        /** Returns the [EditorInterface] singleton instance.
         *  [i]Deprecated.[/i] [EditorInterface] is a global singleton and can be accessed directly by its name.
         */
        get_editor_interface(): EditorInterface
        /** Gets the Editor's dialog used for making scripts.
         *  [b]Note:[/b] Users can configure it before use.
         *  [b]Warning:[/b] Removing and freeing this node will render a part of the editor useless and may cause a crash.
         */
        get_script_create_dialog(): ScriptCreateDialog
        /** Adds a [Script] as debugger plugin to the Debugger. The script must extend [EditorDebuggerPlugin]. */
        add_debugger_plugin(script: EditorDebuggerPlugin): void
        /** Removes the debugger plugin with given script from the Debugger. */
        remove_debugger_plugin(script: EditorDebuggerPlugin): void
        /** Provide the version of the plugin declared in the [code]plugin.cfg[/code] config file. */
        get_plugin_version(): string
        readonly scene_changed: Signal
        readonly scene_closed: Signal
        readonly main_screen_changed: Signal
        readonly resource_saved: Signal
        readonly project_settings_changed: Signal
    }
    class EditorPluginCSG extends EditorPlugin {
    }
    class EditorPluginSettings extends VBoxContainer {
    }
    class EditorProfiler extends VBoxContainer {
        readonly enable_profiling: Signal
        readonly break_request: Signal
    }
    /** Custom control for editing properties that can be added to the [EditorInspector]. */
    class EditorProperty extends Container {
        /* gdvirtual */ _update_property(): void
        /* gdvirtual */ _set_read_only(read_only: boolean): void
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
        /** Gets the edited property. If your editor is for a single property (added via [method EditorInspectorPlugin._parse_property]), then this will return the property. */
        get_edited_property(): StringName
        /** Gets the edited object. */
        get_edited_object(): Object
        /** Forces refresh of the property display. */
        update_property(): void
        /** If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed. */
        add_focusable(control: Control): void
        /** Puts the [param editor] control below the property label. The control must be previously added using [method Node.add_child]. */
        set_bottom_editor(editor: Control): void
        /** If one or several properties have changed, this must be called. [param field] is used in case your editor can modify fields separately (as an example, Vector3.x). The [param changing] argument avoids the editor requesting this property to be refreshed (leave as [code]false[/code] if unsure). */
        emit_changed(property: StringName, value: any, field: StringName = '', changing: boolean = false): void
        _update_editor_property_status(): void
        /** Set this property to change the label (if you want to show one). */
        label: string
        /** Used by the inspector, set to [code]true[/code] when the property is read-only. */
        read_only: boolean
        /** Used by the inspector, set to [code]true[/code] when the property is checkable. */
        checkable: boolean
        /** Used by the inspector, set to [code]true[/code] when the property is checked. */
        checked: boolean
        /** Used by the inspector, set to [code]true[/code] when the property is drawn with the editor theme's warning color. This is used for editable children's properties. */
        draw_warning: boolean
        /** Used by the inspector, set to [code]true[/code] when the property can add keys for animation. */
        keying: boolean
        /** Used by the inspector, set to [code]true[/code] when the property can be deleted by the user. */
        deletable: boolean
        readonly property_changed: Signal
        readonly multiple_properties_changed: Signal
        readonly property_keyed: Signal
        readonly property_deleted: Signal
        readonly property_keyed_with_value: Signal
        readonly property_checked: Signal
        readonly property_pinned: Signal
        readonly property_can_revert_changed: Signal
        readonly resource_selected: Signal
        readonly object_id_selected: Signal
        readonly selected: Signal
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
        readonly quick_open: Signal
    }
    /** Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a [StandardMaterial3D] to a [ShaderMaterial]. */
    class EditorResourceConversionPlugin extends RefCounted {
        /* gdvirtual */ _converts_to(): string
        /* gdvirtual */ _handles(resource: Resource): boolean
        /* gdvirtual */ _convert(resource: Resource): Resource
    }
    /** Godot editor's control for selecting [Resource] type properties. */
    class EditorResourcePicker extends HBoxContainer {
        /* gdvirtual */ _set_create_options(menu_node: Object): void
        /* gdvirtual */ _handle_menu_selected(id: number /*i64*/): boolean
        _update_resource_preview(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: number /*i64*/): void
        set_base_type(base_type: string): void
        get_base_type(): string
        /** Returns a list of all allowed types and subtypes corresponding to the [member base_type]. If the [member base_type] is empty, an empty list is returned. */
        get_allowed_types(): PackedStringArray
        set_edited_resource(resource: Resource): void
        get_edited_resource(): Resource
        set_toggle_mode(enable: boolean): void
        is_toggle_mode(): boolean
        /** Sets the toggle mode state for the main button. Works only if [member toggle_mode] is set to [code]true[/code]. */
        set_toggle_pressed(pressed: boolean): void
        set_editable(enable: boolean): void
        is_editable(): boolean
        /** The base type of allowed resource types. Can be a comma-separated list of several options. */
        base_type: string
        /** The edited resource value. */
        edited_resource: Resource
        /** If [code]true[/code], the value can be selected and edited. */
        editable: boolean
        /** If [code]true[/code], the main button with the resource preview works in the toggle mode. Use [method set_toggle_pressed] to manually set the state. */
        toggle_mode: boolean
        readonly resource_selected: Signal
        readonly resource_changed: Signal
    }
    /** A node used to generate previews of resources or files. */
    class EditorResourcePreview extends Node {
        /** Queue a resource file located at [param path] for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.
         *  [b]Note:[/b] If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.
         */
        queue_resource_preview(path: string, receiver: Object, receiver_func: StringName, userdata: any): void
        /** Queue the [param resource] being edited for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.
         *  [b]Note:[/b] If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.
         */
        queue_edited_resource_preview(resource: Resource, receiver: Object, receiver_func: StringName, userdata: any): void
        /** Create an own, custom preview generator. */
        add_preview_generator(generator: EditorResourcePreviewGenerator): void
        /** Removes a custom preview generator. */
        remove_preview_generator(generator: EditorResourcePreviewGenerator): void
        /** Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted. */
        check_for_invalidation(path: string): void
        readonly preview_invalidated: Signal
    }
    /** Custom generator of previews. */
    class EditorResourcePreviewGenerator extends RefCounted {
        /* gdvirtual */ _handles(type: string): boolean
        /* gdvirtual */ _generate(resource: Resource, size: Vector2i, metadata: Dictionary): Texture2D
        /* gdvirtual */ _generate_from_path(path: string, size: Vector2i, metadata: Dictionary): Texture2D
        /* gdvirtual */ _generate_small_preview_automatically(): boolean
        /* gdvirtual */ _can_generate_small_preview(): boolean
    }
    /** A plugin that advanced tooltip for its handled resource type. */
    class EditorResourceTooltipPlugin extends RefCounted {
        /* gdvirtual */ _handles(type: string): boolean
        /* gdvirtual */ _make_tooltip_for_path(path: string, metadata: Dictionary, base: Control): Control
        _thumbnail_ready(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        /** Requests a thumbnail for the given [TextureRect]. The thumbnail is created asynchronously by [EditorResourcePreview] and automatically set when available. */
        request_thumbnail(path: string, control: TextureRect): void
    }
    class EditorRunBar extends MarginContainer {
        readonly play_pressed: Signal
        readonly stop_pressed: Signal
    }
    class EditorRunNative extends HBoxContainer {
        readonly native_run: Signal
    }
    /** Imports scenes from third-parties' 3D files. */
    class EditorSceneFormatImporter extends RefCounted {
        static readonly IMPORT_SCENE = 1
        static readonly IMPORT_ANIMATION = 2
        static readonly IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4
        static readonly IMPORT_GENERATE_TANGENT_ARRAYS = 8
        static readonly IMPORT_USE_NAMED_SKIN_BINDS = 16
        static readonly IMPORT_DISCARD_MESHES_AND_MATERIALS = 32
        static readonly IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64
        /* gdvirtual */ _get_import_flags(): number /*i64*/
        /* gdvirtual */ _get_extensions(): PackedStringArray
        /* gdvirtual */ _import_scene(path: string, flags: number /*i64*/, options: Dictionary): Object
        /* gdvirtual */ _get_import_options(path: string): void
        /* gdvirtual */ _get_option_visibility(path: string, for_animation: boolean, option: string): void
    }
    /** Importer for Blender's [code].blend[/code] scene file format. */
    class EditorSceneFormatImporterBlend extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterCollada extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterESCN extends EditorSceneFormatImporter {
    }
    /** Importer for the [code].fbx[/code] scene file format. */
    class EditorSceneFormatImporterFBX extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterGLTF extends EditorSceneFormatImporter {
    }
    /** Post-processes scenes after import. */
    class EditorScenePostImport extends RefCounted {
        /* gdvirtual */ _post_import(scene: Node): Object
        /** Returns the source file path which got imported (e.g. [code]res://scene.dae[/code]). */
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
    /** Plugin to control and modifying the process of importing a scene. */
    class EditorScenePostImportPlugin extends RefCounted {
        /* gdvirtual */ _get_internal_import_options(category: number /*i64*/): void
        /* gdvirtual */ _get_internal_option_visibility(category: number /*i64*/, for_animation: boolean, option: string): void
        /* gdvirtual */ _get_internal_option_update_view_required(category: number /*i64*/, option: string): void
        /* gdvirtual */ _internal_process(category: number /*i64*/, base_node: Node, node: Node, resource: Resource): void
        /* gdvirtual */ _get_import_options(path: string): void
        /* gdvirtual */ _get_option_visibility(path: string, for_animation: boolean, option: string): void
        /* gdvirtual */ _pre_process(scene: Node): void
        /* gdvirtual */ _post_process(scene: Node): void
        /** Query the value of an option. This function can only be called from those querying visibility, or processing. */
        get_option_value(name: StringName): any
        /** Add a specific import option (name and default value only). This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        add_import_option(name: string, value: any): void
        /** Add a specific import option. This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        add_import_option_advanced(type: Variant.Type, name: string, default_value: any, hint: PropertyHint = 0, hint_string: string = '', usage_flags: number /*i64*/ = 6): void
    }
    class EditorSceneTabs extends MarginContainer {
        _tab_preview_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly tab_changed: Signal
        readonly tab_closed: Signal
    }
    /** Base script that can be used to add extension functions to the editor. */
    class EditorScript extends RefCounted {
        /* gdvirtual */ _run(): void
        /** Adds [param node] as a child of the root node in the editor context.
         *  [b]Warning:[/b] The implementation of this method is currently disabled.
         */
        add_root_node(node: Node): void
        /** Returns the Editor's currently active scene. */
        get_scene(): Node
        /** Returns the [EditorInterface] singleton instance.
         *  [i]Deprecated.[/i] [EditorInterface] is a global singleton and can be accessed directly by its name.
         */
        get_editor_interface(): EditorInterface
    }
    /** Godot editor's control for selecting the [code]script[/code] property of a [Node]. */
    class EditorScriptPicker extends EditorResourcePicker {
        set_script_owner(owner_node: Node): void
        get_script_owner(): Node
        /** The owner [Node] of the script property that holds the edited resource. */
        script_owner: Node
    }
    class EditorScriptPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    /** Manages the SceneTree selection in the editor. */
    class EditorSelection extends Object {
        /** Clear the selection. */
        clear(): void
        /** Adds a node to the selection.
         *  [b]Note:[/b] The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [method EditorInterface.edit_node].
         */
        add_node(node: Node): void
        /** Removes a node from the selection. */
        remove_node(node: Node): void
        /** Gets the list of selected nodes. */
        get_selected_nodes(): Array
        /** Gets the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc). This list avoids situations where a node is selected and also child/grandchild. */
        get_transformable_selected_nodes(): Array
        _emit_change(): void
        readonly selection_changed: Signal
    }
    /** Object that holds the project-independent editor settings. */
    class EditorSettings extends Resource {
        static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000
        /** Returns [code]true[/code] if the setting specified by [param name] exists, [code]false[/code] otherwise. */
        has_setting(name: string): boolean
        /** Sets the [param value] of the setting specified by [param name]. This is equivalent to using [method Object.set] on the EditorSettings instance. */
        set_setting(name: string, value: any): void
        /** Returns the value of the setting specified by [param name]. This is equivalent to using [method Object.get] on the EditorSettings instance. */
        get_setting(name: string): any
        /** Erases the setting whose name is specified by [param property]. */
        erase(property: string): void
        /** Sets the initial value of the setting specified by [param name] to [param value]. This is used to provide a value for the Revert button in the Editor Settings. If [param update_current] is true, the current value of the setting will be set to [param value] as well. */
        set_initial_value(name: StringName, value: any, update_current: boolean): void
        /** Adds a custom property info to a property. The dictionary must contain:
         *  - [code]name[/code]: [String] (the name of the property)
         *  - [code]type[/code]: [int] (see [enum Variant.Type])
         *  - optionally [code]hint[/code]: [int] (see [enum PropertyHint]) and [code]hint_string[/code]: [String]
         *  [b]Example:[/b]
         *  
         */
        add_property_info(info: Dictionary): void
        /** Sets project-specific metadata with the [param section], [param key] and [param data] specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also [method get_project_metadata]. */
        set_project_metadata(section: string, key: string, data: any): void
        /** Returns project-specific metadata for the [param section] and [param key] specified. If the metadata doesn't exist, [param default] will be returned instead. See also [method set_project_metadata]. */
        get_project_metadata(section: string, key: string, default_: any = <any> {} /*compound.type from nil*/): any
        /** Sets the list of favorite files and directories for this project. */
        set_favorites(dirs: PackedStringArray): void
        /** Returns the list of favorite files and directories for this project. */
        get_favorites(): PackedStringArray
        /** Sets the list of recently visited folders in the file dialog for this project. */
        set_recent_dirs(dirs: PackedStringArray): void
        /** Returns the list of recently visited folders in the file dialog for this project. */
        get_recent_dirs(): PackedStringArray
        /** Overrides the built-in editor action [param name] with the input actions defined in [param actions_list]. */
        set_builtin_action_override(name: string, actions_list: Array): void
        /** Checks if any settings with the prefix [param setting_prefix] exist in the set of changed settings. See also [method get_changed_settings]. */
        check_changed_settings_in_group(setting_prefix: string): boolean
        /** Gets an array of the settings which have been changed since the last save. Note that internally [code]changed_settings[/code] is cleared after a successful save, so generally the most appropriate place to use this method is when processing [constant NOTIFICATION_EDITOR_SETTINGS_CHANGED]. */
        get_changed_settings(): PackedStringArray
        /** Marks the passed editor setting as being changed, see [method get_changed_settings]. Only settings which exist (see [method has_setting]) will be accepted. */
        mark_setting_changed(setting: string): void
        readonly settings_changed: Signal
    }
    class EditorSettingsDialog extends AcceptDialog {
        _update_shortcuts(): void
        _settings_changed(): void
    }
    /** Godot editor's control for editing numeric values. */
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
        /** The text that displays to the left of the value. */
        label: string
        /** The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed. */
        suffix: string
        /** If [code]true[/code], the slider can't be interacted with. */
        read_only: boolean
        /** If [code]true[/code], the slider will not draw background. */
        flat: boolean
        /** If [code]true[/code], the slider and up/down arrows are hidden. */
        hide_slider: boolean
        readonly grabbed: Signal
        readonly ungrabbed: Signal
        readonly value_focus_entered: Signal
        readonly value_focus_exited: Signal
    }
    class EditorStandardSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    /** Base class for [SyntaxHighlighter] used by the [ScriptEditor]. */
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_supported_languages(): PackedStringArray
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
    /** Plugin for adding custom parsers to extract strings that are to be translated from custom files (.csv, .json etc.). */
    class EditorTranslationParserPlugin extends RefCounted {
        /* gdvirtual */ _parse_file(path: string, msgids: Array, msgids_context_plural: Array): void
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
    }
    namespace EditorUndoRedoManager {
        enum SpecialHistory {
            GLOBAL_HISTORY = 0,
            REMOTE_HISTORY = -9,
            INVALID_HISTORY = -99,
        }
    }
    /** Manages undo history of scenes opened in the editor. */
    class EditorUndoRedoManager extends Object {
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].
         *  The way actions are merged is dictated by the [param merge_mode] argument. See [enum UndoRedo.MergeMode] for details.
         *  If [param custom_context] object is provided, it will be used for deducing target history (instead of using the first operation).
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is [code]false[/code] undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, custom_context: Object = <any> {} /*compound.type from nil*/, backward_undo_ops: boolean = false): void
        /** Commit the action. If [param execute] is true (default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        /** Returns [code]true[/code] if the [EditorUndoRedoManager] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        is_committing_action(): boolean
        /** Register a method that will be called when the action is committed (i.e. the "do" action).
         *  If this is the first operation, the [param object] will be used to deduce target undo history.
         */
        add_do_method(object: Object, method: StringName, ...vargargs: any[]): void
        /** Register a method that will be called when the action is undone (i.e. the "undo" action).
         *  If this is the first operation, the [param object] will be used to deduce target undo history.
         */
        add_undo_method(object: Object, method: StringName, ...vargargs: any[]): void
        /** Register a property value change for "do".
         *  If this is the first operation, the [param object] will be used to deduce target undo history.
         */
        add_do_property(object: Object, property: StringName, value: any): void
        /** Register a property value change for "undo".
         *  If this is the first operation, the [param object] will be used to deduce target undo history.
         */
        add_undo_property(object: Object, property: StringName, value: any): void
        /** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources. */
        add_do_reference(object: Object): void
        /** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!). */
        add_undo_reference(object: Object): void
        /** Returns the history ID deduced from the given [param object]. It can be used with [method get_history_undo_redo]. */
        get_object_history_id(object: Object): number /*i64*/
        /** Returns the [UndoRedo] object associated with the given history [param id].
         *  [param id] above [code]0[/code] are mapped to the opened scene tabs (but it doesn't match their order). [param id] of [code]0[/code] or lower have special meaning (see [enum SpecialHistory]).
         *  Best used with [method get_object_history_id]. This method is only provided in case you need some more advanced methods of [UndoRedo] (but keep in mind that directly operating on the [UndoRedo] object might affect editor's stability).
         */
        get_history_undo_redo(id: number /*i64*/): UndoRedo
        readonly history_changed: Signal
        readonly version_changed: Signal
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
    /** Version Control System (VCS) interface, which reads and writes to the local VCS in use. */
    class EditorVCSInterface extends Object {
        /* gdvirtual */ _initialize(project_path: string): boolean
        /* gdvirtual */ _set_credentials(username: string, password: string, ssh_public_key_path: string, ssh_private_key_path: string, ssh_passphrase: string): void
        /* gdvirtual */ _get_modified_files_data(): Array
        /* gdvirtual */ _stage_file(file_path: string): void
        /* gdvirtual */ _unstage_file(file_path: string): void
        /* gdvirtual */ _discard_file(file_path: string): void
        /* gdvirtual */ _commit(msg: string): void
        /* gdvirtual */ _get_diff(identifier: string, area: number /*i64*/): Array
        /* gdvirtual */ _shut_down(): boolean
        /* gdvirtual */ _get_vcs_name(): string
        /* gdvirtual */ _get_previous_commits(max_commits: number /*i64*/): Array
        /* gdvirtual */ _get_branch_list(): Array
        /* gdvirtual */ _get_remotes(): Array
        /* gdvirtual */ _create_branch(branch_name: string): void
        /* gdvirtual */ _remove_branch(branch_name: string): void
        /* gdvirtual */ _create_remote(remote_name: string, remote_url: string): void
        /* gdvirtual */ _remove_remote(remote_name: string): void
        /* gdvirtual */ _get_current_branch_name(): string
        /* gdvirtual */ _checkout_branch(branch_name: string): boolean
        /* gdvirtual */ _pull(remote: string): void
        /* gdvirtual */ _push(remote: string, force: boolean): void
        /* gdvirtual */ _fetch(remote: string): void
        /* gdvirtual */ _get_line_diff(file_path: string, text: string): Array
        /** Helper function to create a [Dictionary] for storing a line diff. [param new_line_no] is the line number in the new file (can be [code]-1[/code] if the line is deleted). [param old_line_no] is the line number in the old file (can be [code]-1[/code] if the line is added). [param content] is the diff text. [param status] is a single character string which stores the line origin. */
        create_diff_line(new_line_no: number /*i64*/, old_line_no: number /*i64*/, content: string, status: string): Dictionary
        /** Helper function to create a [Dictionary] for storing diff hunk data. [param old_start] is the starting line number in old file. [param new_start] is the starting line number in new file. [param old_lines] is the number of lines in the old file. [param new_lines] is the number of lines in the new file. */
        create_diff_hunk(old_start: number /*i64*/, new_start: number /*i64*/, old_lines: number /*i64*/, new_lines: number /*i64*/): Dictionary
        /** Helper function to create a [Dictionary] for storing old and new diff file paths. */
        create_diff_file(new_file: string, old_file: string): Dictionary
        /** Helper function to create a commit [Dictionary] item. [param msg] is the commit message of the commit. [param author] is a single human-readable string containing all the author's details, e.g. the email and name configured in the VCS. [param id] is the identifier of the commit, in whichever format your VCS may provide an identifier to commits. [param unix_timestamp] is the UTC Unix timestamp of when the commit was created. [param offset_minutes] is the timezone offset in minutes, recorded from the system timezone where the commit was created. */
        create_commit(msg: string, author: string, id: string, unix_timestamp: number /*i64*/, offset_minutes: number /*i64*/): Dictionary
        /** Helper function to create a [Dictionary] used by editor to read the status of a file. */
        create_status_file(file_path: string, change_type: EditorVCSInterface.ChangeType, area: EditorVCSInterface.TreeArea): Dictionary
        /** Helper function to add an array of [param diff_hunks] into a [param diff_file]. */
        add_diff_hunks_into_diff_file(diff_file: Dictionary, diff_hunks: Array): Dictionary
        /** Helper function to add an array of [param line_diffs] into a [param diff_hunk]. */
        add_line_diffs_into_diff_hunk(diff_hunk: Dictionary, line_diffs: Array): Dictionary
        /** Pops up an error message in the editor which is shown as coming from the underlying VCS. Use this to show VCS specific error messages. */
        popup_error(msg: string): void
    }
    class EditorValidationPanel extends PanelContainer {
    }
    class EditorVisualProfiler extends VBoxContainer {
        readonly enable_profiling: Signal
    }
    class EditorZoomWidget extends HBoxContainer {
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_by_increments(increment: number /*i64*/, integer_only: boolean): void
        zoom: number /*f64*/
        readonly zoom_changed: Signal
    }
    /** Holds a reference to an [Object]'s instance ID. */
    class EncodedObjectAsID extends RefCounted {
        set_object_id(id: number /*i64*/): void
        get_object_id(): number /*i64*/
        /** The [Object] identifier stored in this [EncodedObjectAsID] instance. The object instance can be retrieved with [method @GlobalScope.instance_from_id]. */
        object_id: number /*i64*/
    }
    /** Base class for creating custom profilers. */
    class EngineProfiler extends RefCounted {
        /* gdvirtual */ _toggle(enable: boolean, options: Array): void
        /* gdvirtual */ _add_frame(data: Array): void
        /* gdvirtual */ _tick(frame_time: number /*f64*/, process_time: number /*f64*/, physics_time: number /*f64*/, physics_frame_time: number /*f64*/): void
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
    /** Resource for environment nodes (like [WorldEnvironment]) that define multiple rendering options. */
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
        /** Sets the intensity of the glow level [param idx]. A value above [code]0.0[/code] enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled. */
        set_glow_level(idx: number /*i64*/, intensity: number /*f64*/): void
        /** Returns the intensity of the glow level [param idx]. */
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
        /** The background mode. See [enum BGMode] for possible values. */
        background_mode: number /*i64*/
        /** The [Color] displayed for clear areas of the scene. Only effective when using the [constant BG_COLOR] background mode. */
        background_color: Color
        /** Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer. */
        background_energy_multiplier: number /*f64*/
        /** Luminance of background measured in nits (candela per square meter). Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default value is roughly equivalent to the sky at midday. */
        background_intensity: number /*f64*/
        /** The maximum layer ID to display. Only effective when using the [constant BG_CANVAS] background mode. */
        background_canvas_max_layer: number /*i64*/
        /** The ID of the camera feed to show in the background. */
        background_camera_feed_id: number /*i64*/
        /** The [Sky] resource used for this [Environment]. */
        sky: Sky
        /** If set to a value greater than [code]0.0[/code], overrides the field of view to use for sky rendering. If set to [code]0.0[/code], the same FOV as the current [Camera3D] is used for sky rendering. */
        sky_custom_fov: number /*f64*/
        /** The rotation to use for sky rendering. */
        sky_rotation: Vector3
        /** The ambient light source to use for rendering materials and global illumination. */
        ambient_light_source: number /*i64*/
        /** The ambient light's [Color]. Only effective if [member ambient_light_sky_contribution] is lower than [code]1.0[/code] (exclusive). */
        ambient_light_color: Color
        /** Defines the amount of light that the sky brings on the scene. A value of [code]0.0[/code] means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of [code]1.0[/code] means that [i]all[/i] the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.
         *  [b]Note:[/b] [member ambient_light_sky_contribution] is internally clamped between [code]0.0[/code] and [code]1.0[/code] (inclusive).
         */
        ambient_light_sky_contribution: number /*f64*/
        /** The ambient light's energy. The higher the value, the stronger the light. Only effective if [member ambient_light_sky_contribution] is lower than [code]1.0[/code] (exclusive). */
        ambient_light_energy: number /*f64*/
        /** The reflected (specular) light source. */
        reflected_light_source: number /*i64*/
        /** The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on a LDR display. (Godot doesn't support rendering on HDR displays yet.) */
        tonemap_mode: number /*i64*/
        /** The default exposure used for tonemapping. Higher values result in a brighter image. See also [member tonemap_white]. */
        tonemap_exposure: number /*f64*/
        /** The white reference value for tonemapping (also called "whitepoint"). Higher values can make highlights look less blown out, and will also slightly darken the whole scene as a result. Only effective if the [member tonemap_mode] isn't set to [constant TONE_MAPPER_LINEAR]. See also [member tonemap_exposure]. */
        tonemap_white: number /*f64*/
        /** If [code]true[/code], screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [VoxelGI]s or [ReflectionProbe]s, but are slower and can't reflect surfaces occluded by others.
         *  [b]Note:[/b] SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.
         */
        ssr_enabled: boolean
        /** The maximum number of steps for screen-space reflections. Higher values are slower. */
        ssr_max_steps: number /*i64*/
        /** The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). */
        ssr_fade_in: number /*f64*/
        /** The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). */
        ssr_fade_out: number /*f64*/
        /** The depth tolerance for screen-space reflections. */
        ssr_depth_tolerance: number /*f64*/
        /** If [code]true[/code], the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.
         *  [b]Note:[/b] SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.
         */
        ssao_enabled: boolean
        /** The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality. */
        ssao_radius: number /*f64*/
        /** The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion. */
        ssao_intensity: number /*f64*/
        /** The distribution of occlusion. A higher value results in darker occlusion, similar to [member ssao_intensity], but with a sharper falloff. */
        ssao_power: number /*f64*/
        /** Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image. */
        ssao_detail: number /*f64*/
        /** The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the [code]0.0-1.0[/code] range. A value of [code]1.0[/code] results in no occlusion. */
        ssao_horizon: number /*f64*/
        /** The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        ssao_sharpness: number /*f64*/
        /** The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than [code]0[/code] will make the SSAO effect visible in direct light. */
        ssao_light_affect: number /*f64*/
        /** The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than [code]0[/code] will make the SSAO effect visible in areas darkened by AO textures. */
        ssao_ao_channel_affect: number /*f64*/
        /** If [code]true[/code], the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [VoxelGI]. Screen-space indirect lighting is not affected by individual light's [member Light3D.light_indirect_energy].
         *  [b]Note:[/b] SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.
         */
        ssil_enabled: boolean
        /** The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources. */
        ssil_radius: number /*f64*/
        /** The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light. */
        ssil_intensity: number /*f64*/
        /** The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        ssil_sharpness: number /*f64*/
        /** Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera. */
        ssil_normal_rejection: number /*f64*/
        /** If [code]true[/code], enables signed distance field global illumination for meshes that have their [member GeometryInstance3D.gi_mode] set to [constant GeometryInstance3D.GI_MODE_STATIC]. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.
         *  [b]Note:[/b] SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.
         *  [b]Performance:[/b] SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [LightmapGI] instead). To improve SDFGI performance, enable [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution] in the Project Settings.
         *  [b]Note:[/b] Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.
         */
        sdfgi_enabled: boolean
        /** If [code]true[/code], SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [member sdfgi_use_occlusion] has a performance impact and should only be enabled when needed. */
        sdfgi_use_occlusion: boolean
        /** If [code]true[/code], SDFGI takes the environment lighting into account. This should be set to [code]false[/code] for interior scenes. */
        sdfgi_read_sky_light: boolean
        /** The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than [code]0.0[/code] will simulate multiple bounces, resulting in a more realistic appearance. Increasing [member sdfgi_bounce_feedback] generally has no performance impact. See also [member sdfgi_energy].
         *  [b]Note:[/b] Values greater than [code]0.5[/code] can cause infinite feedback loops and should be avoided in scenes with bright materials.
         *  [b]Note:[/b] If [member sdfgi_bounce_feedback] is [code]0.0[/code], indirect lighting will not be represented in reflections as light will only bounce one time.
         */
        sdfgi_bounce_feedback: number /*f64*/
        /** The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [member sdfgi_cascades] can often be decreased between [code]1[/code] and [code]4[/code] to improve performance. */
        sdfgi_cascades: number /*i64*/
        /** The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.
         *  [b]Note:[/b] This property is linked to [member sdfgi_max_distance] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.
         */
        sdfgi_min_cell_size: number /*f64*/
        /** [b]Note:[/b] This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_max_distance]. Changing its value will automatically change those properties as well. */
        sdfgi_cascade0_distance: number /*f64*/
        /** The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [ReflectionProbe] will be used as a fallback.
         *  [b]Note:[/b] This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.
         */
        sdfgi_max_distance: number /*f64*/
        /** The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. [member sdfgi_y_scale] should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis). */
        sdfgi_y_scale: number /*i64*/
        /** The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also [member sdfgi_bounce_feedback]. */
        sdfgi_energy: number /*f64*/
        /** The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        sdfgi_normal_bias: number /*f64*/
        /** The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        sdfgi_probe_bias: number /*f64*/
        /** If [code]true[/code], the glow effect is enabled.
         *  [b]Note:[/b] Glow is only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, glow will look different due to the lower dynamic range available in the Mobile rendering method.
         */
        glow_enabled: boolean
        /** If [code]true[/code], glow levels will be normalized so that summed together their intensities equal [code]1.0[/code]. */
        glow_normalized: boolean
        /** The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to [code]2.0[/code]), this should be increased to [code]1.5[/code] to compensate. */
        glow_intensity: number /*f64*/
        /** The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range. */
        glow_strength: number /*f64*/
        /** When using the [constant GLOW_BLEND_MODE_MIX] [member glow_blend_mode], this controls how much the source image is blended with the glow layer. A value of [code]0.0[/code] makes the glow rendering invisible, while a value of [code]1.0[/code] is equivalent to [constant GLOW_BLEND_MODE_REPLACE]. */
        glow_mix: number /*f64*/
        /** The bloom's intensity. If set to a value higher than [code]0[/code], this will make glow visible in areas darker than the [member glow_hdr_threshold]. */
        glow_bloom: number /*f64*/
        /** The glow blending mode. */
        glow_blend_mode: number /*i64*/
        /** The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to [code]2.0[/code]), this may need to be below [code]1.0[/code] for glow to be visible. A value of [code]0.9[/code] works well in this case. This value also needs to be decreased below [code]1.0[/code] when using glow in 2D, as 2D rendering is performed in SDR. */
        glow_hdr_threshold: number /*f64*/
        /** The bleed scale of the HDR glow. */
        glow_hdr_scale: number /*f64*/
        /** The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect. */
        glow_hdr_luminance_cap: number /*f64*/
        /** How strong of an impact the [member glow_map] should have on the overall glow effect. A strength of [code]0.0[/code] means the glow map has no effect on the overall glow effect. A strength of [code]1.0[/code] means the glow has a full effect on the overall glow effect (and can turn off glow entirely in specific areas of the screen if the glow map has black areas). */
        glow_map_strength: number /*f64*/
        /** The texture that should be used as a glow map to [i]multiply[/i] the resulting glow color according to [member glow_map_strength]. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.
         *  [b]Note:[/b] The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).
         */
        glow_map: Texture2D
        /** If [code]true[/code], fog effects are enabled. */
        fog_enabled: boolean
        /** The fog's color. */
        fog_light_color: Color
        /** The fog's brightness. Higher values result in brighter fog. */
        fog_light_energy: number /*f64*/
        /** If set above [code]0.0[/code], renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog. */
        fog_sun_scatter: number /*f64*/
        /** The [i]exponential[/i] fog density to use. Higher values result in a more dense fog. Fog rendering is exponential as in real life. */
        fog_density: number /*f64*/
        /** If set above [code]0.0[/code] (exclusive), blends between the fog's color and the color of the background [Sky]. This has a small performance cost when set above [code]0.0[/code]. Must have [member background_mode] set to [constant BG_SKY].
         *  This is useful to simulate [url=https://en.wikipedia.org/wiki/Aerial_perspective]aerial perspective[/url] in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to [code]1.0[/code], the fog color comes completely from the [Sky]. If set to [code]0.0[/code], aerial perspective is disabled.
         */
        fog_aerial_perspective: number /*f64*/
        /** The factor to use when affecting the sky with non-volumetric fog. [code]1.0[/code] means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with [code]0.0[/code] not affecting sky rendering at all.
         *  [b]Note:[/b] [member fog_sky_affect] has no visual effect if [member fog_aerial_perspective] is [code]1.0[/code].
         */
        fog_sky_affect: number /*f64*/
        /** The height at which the height fog effect begins. */
        fog_height: number /*f64*/
        /** The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value. */
        fog_height_density: number /*f64*/
        /** Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [FogVolume]s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.
         *  [b]Note:[/b] Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.
         */
        volumetric_fog_enabled: boolean
        /** The base [i]exponential[/i] density of the volumetric fog. Set this to the lowest density you want to have globally. [FogVolume]s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.
         *  A value of [code]0.0[/code] disables global volumetric fog while allowing [FogVolume]s to display volumetric fog in specific areas.
         *  To make volumetric fog work as a volumetric [i]lighting[/i] solution, set [member volumetric_fog_density] to the lowest non-zero value ([code]0.0001[/code]) then increase lights' [member Light3D.light_volumetric_fog_energy] to values between [code]10000[/code] and [code]100000[/code] to compensate for the very low density.
         */
        volumetric_fog_density: number /*f64*/
        /** The [Color] of the volumetric fog when interacting with lights. Mist and fog have an albedo close to [code]Color(1, 1, 1, 1)[/code] while smoke has a darker albedo. */
        volumetric_fog_albedo: Color
        /** The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows. */
        volumetric_fog_emission: Color
        /** The brightness of the emitted light from the volumetric fog. */
        volumetric_fog_emission_energy: number /*f64*/
        /** Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of [code]0.0[/code] means that Global Illumination will not impact the volumetric fog. [member volumetric_fog_gi_inject] has a small performance cost when set above [code]0.0[/code].
         *  [b]Note:[/b] This has no visible effect if [member volumetric_fog_density] is [code]0.0[/code] or if [member volumetric_fog_albedo] is a fully black color.
         *  [b]Note:[/b] Only [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) are taken into account when using [member volumetric_fog_gi_inject]. Global illumination from [LightmapGI], [ReflectionProbe] and SSIL (see [member ssil_enabled]) will be ignored by volumetric fog.
         */
        volumetric_fog_gi_inject: number /*f64*/
        /** The direction of scattered light as it goes through the volumetric fog. A value close to [code]1.0[/code] means almost all light is scattered forward. A value close to [code]0.0[/code] means light is scattered equally in all directions. A value close to [code]-1.0[/code] means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions. */
        volumetric_fog_anisotropy: number /*f64*/
        /** The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth]. */
        volumetric_fog_length: number /*f64*/
        /** The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera. */
        volumetric_fog_detail_spread: number /*f64*/
        /** Scales the strength of ambient light used in the volumetric fog. A value of [code]0.0[/code] means that ambient light will not impact the volumetric fog. [member volumetric_fog_ambient_inject] has a small performance cost when set above [code]0.0[/code].
         *  [b]Note:[/b] This has no visible effect if [member volumetric_fog_density] is [code]0.0[/code] or if [member volumetric_fog_albedo] is a fully black color.
         */
        volumetric_fog_ambient_inject: number /*f64*/
        /** The factor to use when affecting the sky with volumetric fog. [code]1.0[/code] means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with [code]0.0[/code] not affecting sky rendering at all.
         *  [b]Note:[/b] [member volumetric_fog_sky_affect] also affects [FogVolume]s, even if [member volumetric_fog_density] is [code]0.0[/code]. If you notice [FogVolume]s are disappearing when looking towards the sky, set [member volumetric_fog_sky_affect] to [code]1.0[/code].
         */
        volumetric_fog_sky_affect: number /*f64*/
        /** Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [FogVolume]s and [Light3D]s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [FogVolume]s or [Light3D]s too fast. Short-lived dynamic lighting effects should have [member Light3D.light_volumetric_fog_energy] set to [code]0.0[/code] to avoid ghosting. */
        volumetric_fog_temporal_reprojection_enabled: boolean
        /** The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible. */
        volumetric_fog_temporal_reprojection_amount: number /*f64*/
        /** If [code]true[/code], enables the [code]adjustment_*[/code] properties provided by this resource. If [code]false[/code], modifications to the [code]adjustment_*[/code] properties will have no effect on the rendered scene.
         *  [b]Note:[/b] Adjustments are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
         */
        adjustment_enabled: boolean
        /** The global brightness value of the rendered scene. Effective only if [member adjustment_enabled] is [code]true[/code]. */
        adjustment_brightness: number /*f64*/
        /** The global contrast value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is [code]true[/code]. */
        adjustment_contrast: number /*f64*/
        /** The global color saturation value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is [code]true[/code]. */
        adjustment_saturation: number /*f64*/
        /** The [Texture2D] or [Texture3D] lookup table (LUT) to use for the built-in post-process color grading. Can use a [GradientTexture1D] for a 1-dimensional LUT, or a [Texture3D] for a more complex LUT. Effective only if [member adjustment_enabled] is [code]true[/code]. */
        adjustment_color_correction: Texture2D | Texture3D
    }
    class EventListenerLineEdit extends LineEdit {
        readonly event_changed: Signal
    }
    class ExportTemplateManager extends AcceptDialog {
    }
    /** A class that stores an expression you can execute. */
    class Expression extends RefCounted {
        /** Parses the expression and returns an [enum Error] code.
         *  You can optionally specify names of variables that may appear in the expression with [param input_names], so that you can bind them when it gets executed.
         */
        parse(expression: string, input_names: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/): GodotError
        /** Executes the expression that was previously parsed by [method parse] and returns the result. Before you use the returned object, you should check if the method failed by calling [method has_execute_failed].
         *  If you defined input variables in [method parse], you can specify their values in the inputs array, in the same order.
         */
        execute(inputs: Array = <any> {} /*compound.type from 28([object Object])*/, base_instance: Object = <any> {} /*compound.type from nil*/, show_error: boolean = true, const_calls_only: boolean = false): any
        /** Returns [code]true[/code] if [method execute] has failed. */
        has_execute_failed(): boolean
        /** Returns the error text if [method parse] or [method execute] has failed. */
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
    /** Generates noise using the FastNoiseLite library. */
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
        /** The noise algorithm used. See [enum NoiseType]. */
        noise_type: number /*i64*/
        /** The random number seed for all noise types. */
        seed: number /*i64*/
        /** The frequency for all noise types. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        frequency: number /*f64*/
        /** Translate the noise input coordinates by the given [Vector3]. */
        offset: Vector3
        /** The method for combining octaves into a fractal. See [enum FractalType]. */
        fractal_type: number /*i64*/
        /** The number of noise layers that are sampled to get the final value for fractal noise types. */
        fractal_octaves: number /*i64*/
        /** Frequency multiplier between subsequent octaves. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        fractal_lacunarity: number /*f64*/
        /** Determines the strength of each subsequent layer of noise in fractal noise.
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.
         */
        fractal_gain: number /*f64*/
        /** Higher weighting means higher octaves have less impact if lower octaves have a large impact. */
        fractal_weighted_strength: number /*f64*/
        /** Sets the strength of the fractal ping pong type. */
        fractal_ping_pong_strength: number /*f64*/
        /** Determines how the distance to the nearest/second-nearest point is computed. See [enum CellularDistanceFunction] for options. */
        cellular_distance_function: number /*i64*/
        /** Maximum distance a point can move off of its grid position. Set to [code]0[/code] for an even grid. */
        cellular_jitter: number /*f64*/
        /** Return type from cellular noise calculations. See [enum CellularReturnType]. */
        cellular_return_type: number /*i64*/
        /** If enabled, another FastNoiseLite instance is used to warp the space, resulting in a distortion of the noise. */
        domain_warp_enabled: boolean
        /** Sets the warp algorithm. See [enum DomainWarpType]. */
        domain_warp_type: number /*i64*/
        /** Sets the maximum warp distance from the origin. */
        domain_warp_amplitude: number /*f64*/
        /** Frequency of the noise which warps the space. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        domain_warp_frequency: number /*f64*/
        /** The method for combining octaves into a fractal which is used to warp the space. See [enum DomainWarpFractalType]. */
        domain_warp_fractal_type: number /*i64*/
        /** The number of noise layers that are sampled to get the final value for the fractal noise which warps the space. */
        domain_warp_fractal_octaves: number /*i64*/
        /** Octave lacunarity of the fractal noise which warps the space. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        domain_warp_fractal_lacunarity: number /*f64*/
        /** Determines the strength of each subsequent layer of the noise which is used to warp the space.
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.
         */
        domain_warp_fractal_gain: number /*f64*/
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
    /** Provides methods for file reading and writing operations. */
    class FileAccess extends RefCounted {
        /** Creates a new [FileAccess] object and opens the file for writing or reading, depending on the flags.
         *  Returns [code]null[/code] if opening the file failed. You can use [method get_open_error] to check the error that occurred.
         */
        static open(path: string, flags: FileAccess.ModeFlags): FileAccess
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.
         *  [b]Note:[/b] The provided key must be 32 bytes long.
         *  Returns [code]null[/code] if opening the file failed. You can use [method get_open_error] to check the error that occurred.
         */
        static open_encrypted(path: string, mode_flags: FileAccess.ModeFlags, key: PackedByteArray): FileAccess
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.
         *  Returns [code]null[/code] if opening the file failed. You can use [method get_open_error] to check the error that occurred.
         */
        static open_encrypted_with_pass(path: string, mode_flags: FileAccess.ModeFlags, pass: string): FileAccess
        /** Creates a new [FileAccess] object and opens a compressed file for reading or writing.
         *  [b]Note:[/b] [method open_compressed] can only read files that were saved by Godot, not third-party compression formats. See [url=https://github.com/godotengine/godot/issues/28999]GitHub issue #28999[/url] for a workaround.
         *  Returns [code]null[/code] if opening the file failed. You can use [method get_open_error] to check the error that occurred.
         */
        static open_compressed(path: string, mode_flags: FileAccess.ModeFlags, compression_mode: FileAccess.CompressionMode = 0): FileAccess
        /** Returns the result of the last [method open] call in the current thread. */
        static get_open_error(): GodotError
        /** Returns the whole [param path] file contents as a [PackedByteArray] without any decoding.
         *  Returns an empty [PackedByteArray] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.
         */
        static get_file_as_bytes(path: string): PackedByteArray
        /** Returns the whole [param path] file contents as a [String]. Text is interpreted as being UTF-8 encoded.
         *  Returns an empty [String] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.
         */
        static get_file_as_string(path: string): string
        /** Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [method flush] manually before closing a file. Still, calling [method flush] can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.
         *  [b]Note:[/b] Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.
         */
        flush(): void
        /** Returns the path as a [String] for the current open file. */
        get_path(): string
        /** Returns the absolute path as a [String] for the current open file. */
        get_path_absolute(): string
        /** Returns [code]true[/code] if the file is currently opened. */
        is_open(): boolean
        /** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
        seek(position: number /*i64*/): void
        /** Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).
         *  [b]Note:[/b] This is an offset, so you should use negative numbers or the cursor will be at the end of the file.
         */
        seek_end(position: number /*i64*/ = 0): void
        /** Returns the file cursor's position. */
        get_position(): number /*i64*/
        /** Returns the size of the file in bytes. */
        get_length(): number /*i64*/
        /** Returns [code]true[/code] if the file cursor has already read past the end of the file.
         *  [b]Note:[/b] [code]eof_reached() == false[/code] cannot be used to check whether there is more data available. To loop while there is more data available, use:
         *  
         */
        eof_reached(): boolean
        /** Returns the next 8 bits from the file as an integer. See [method store_8] for details on what values can be stored and retrieved this way. */
        get_8(): number /*i64*/
        /** Returns the next 16 bits from the file as an integer. See [method store_16] for details on what values can be stored and retrieved this way. */
        get_16(): number /*i64*/
        /** Returns the next 32 bits from the file as an integer. See [method store_32] for details on what values can be stored and retrieved this way. */
        get_32(): number /*i64*/
        /** Returns the next 64 bits from the file as an integer. See [method store_64] for details on what values can be stored and retrieved this way. */
        get_64(): number /*i64*/
        /** Returns the next 32 bits from the file as a floating-point number. */
        get_float(): number /*f64*/
        /** Returns the next 64 bits from the file as a floating-point number. */
        get_double(): number /*f64*/
        /** Returns the next bits from the file as a floating-point number. */
        get_real(): number /*f64*/
        /** Returns next [param length] bytes of the file as a [PackedByteArray]. */
        get_buffer(length: number /*i64*/): PackedByteArray
        /** Returns the next line of the file as a [String].
         *  Text is interpreted as being UTF-8 encoded.
         */
        get_line(): string
        /** Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default [code]","[/code] (comma). This delimiter must be one-character long, and cannot be a double quotation mark.
         *  Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.
         *  For example, the following CSV lines are valid and will be properly parsed as two strings each:
         *  
         *  Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it [i]could[/i] very well use quotes, it was only written without for demonstration purposes. The third line must use [code]""[/code] for each quotation mark that needs to be interpreted as such instead of the end of a text value.
         */
        get_csv_line(delim: string = ','): PackedStringArray
        /** Returns the whole file as a [String]. Text is interpreted as being UTF-8 encoded.
         *  If [param skip_cr] is [code]true[/code], carriage return characters ([code]\r[/code], CR) will be ignored when parsing the UTF-8, so that only line feed characters ([code]\n[/code], LF) represent a new line (Unix convention).
         */
        get_as_text(skip_cr: boolean = false): string
        /** Returns an MD5 String representing the file at the given path or an empty [String] on failure. */
        static get_md5(path: string): string
        /** Returns a SHA-256 [String] representing the file at the given path or an empty [String] on failure. */
        static get_sha256(path: string): string
        is_big_endian(): boolean
        set_big_endian(big_endian: boolean): void
        /** Returns the last error that happened when trying to perform operations. Compare with the [code]ERR_FILE_*[/code] constants from [enum Error]. */
        get_error(): GodotError
        /** Returns the next [Variant] value from the file. If [param allow_objects] is [code]true[/code], decoding objects is allowed.
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
         *  [b]Warning:[/b] Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
         */
        get_var(allow_objects: boolean = false): any
        /** Stores an integer as 8 bits in the file.
         *  [b]Note:[/b] The [param value] should lie in the interval [code][0, 255][/code]. Any other value will overflow and wrap around.
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).
         */
        store_8(value: number /*i64*/): void
        /** Stores an integer as 16 bits in the file.
         *  [b]Note:[/b] The [param value] should lie in the interval [code][0, 2^16 - 1][/code]. Any other value will overflow and wrap around.
         *  To store a signed integer, use [method store_64] or store a signed integer from the interval [code][-2^15, 2^15 - 1][/code] (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:
         *  
         */
        store_16(value: number /*i64*/): void
        /** Stores an integer as 32 bits in the file.
         *  [b]Note:[/b] The [param value] should lie in the interval [code][0, 2^32 - 1][/code]. Any other value will overflow and wrap around.
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).
         */
        store_32(value: number /*i64*/): void
        /** Stores an integer as 64 bits in the file.
         *  [b]Note:[/b] The [param value] must lie in the interval [code][-2^63, 2^63 - 1][/code] (i.e. be a valid [int] value).
         */
        store_64(value: number /*i64*/): void
        /** Stores a floating-point number as 32 bits in the file. */
        store_float(value: number /*f64*/): void
        /** Stores a floating-point number as 64 bits in the file. */
        store_double(value: number /*f64*/): void
        /** Stores a floating-point number in the file. */
        store_real(value: number /*f64*/): void
        /** Stores the given array of bytes in the file. */
        store_buffer(buffer: PackedByteArray): void
        /** Appends [param line] to the file followed by a line return character ([code]\n[/code]), encoding the text as UTF-8. */
        store_line(line: string): void
        /** Store the given [PackedStringArray] in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default [code]","[/code] (comma). This delimiter must be one-character long.
         *  Text will be encoded as UTF-8.
         */
        store_csv_line(values: PackedStringArray, delim: string = ','): void
        /** Appends [param string] to the file without a line return, encoding the text as UTF-8.
         *  [b]Note:[/b] This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [method store_pascal_string] instead. For retrieving strings from a text file, you can use [code]get_buffer(length).get_string_from_utf8()[/code] (if you know the length) or [method get_as_text].
         */
        store_string(string_: string): void
        /** Stores any Variant value in the file. If [param full_objects] is [code]true[/code], encoding objects is allowed (and can potentially include code).
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
         *  [b]Note:[/b] Not all properties are included. Only properties that are configured with the [constant PROPERTY_USAGE_STORAGE] flag set will be serialized. You can add a new usage flag to a property by overriding the [method Object._get_property_list] method in your class. You can also check how property usage is configured by calling [method Object._get_property_list]. See [enum PropertyUsageFlags] for the possible usage flags.
         */
        store_var(value: any, full_objects: boolean = false): void
        /** Stores the given [String] as a line in the file in Pascal format (i.e. also store the length of the string).
         *  Text will be encoded as UTF-8.
         */
        store_pascal_string(string_: string): void
        /** Returns a [String] saved in Pascal format from the file.
         *  Text is interpreted as being UTF-8 encoded.
         */
        get_pascal_string(): string
        /** Closes the currently opened file and prevents subsequent read/write operations. Use [method flush] to persist the data to disk without closing the file.
         *  [b]Note:[/b] [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with [code]null[/code]. In C# the reference must be disposed after we are done using it, this can be done with the [code]using[/code] statement or calling the [code]Dispose[/code] method directly.
         */
        close(): void
        /** Returns [code]true[/code] if the file exists in the given path.
         *  [b]Note:[/b] Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.
         *  For a non-static, relative equivalent, use [method DirAccess.file_exists].
         */
        static file_exists(path: string): boolean
        /** Returns the last time the [param file] was modified in Unix timestamp format, or [code]0[/code] on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
        static get_modified_time(file: string): number /*i64*/
        /** Returns file UNIX permissions.
         *  [b]Note:[/b] This method is implemented on iOS, Linux/BSD, and macOS.
         */
        static get_unix_permissions(file: string): FileAccess.UnixPermissionFlags
        /** Sets file UNIX permissions.
         *  [b]Note:[/b] This method is implemented on iOS, Linux/BSD, and macOS.
         */
        static set_unix_permissions(file: string, permissions: FileAccess.UnixPermissionFlags): GodotError
        /** Returns [code]true[/code], if file [code]hidden[/code] attribute is set.
         *  [b]Note:[/b] This method is implemented on iOS, BSD, macOS, and Windows.
         */
        static get_hidden_attribute(file: string): boolean
        /** Sets file [b]hidden[/b] attribute.
         *  [b]Note:[/b] This method is implemented on iOS, BSD, macOS, and Windows.
         */
        static set_hidden_attribute(file: string, hidden: boolean): GodotError
        /** Sets file [b]read only[/b] attribute.
         *  [b]Note:[/b] This method is implemented on iOS, BSD, macOS, and Windows.
         */
        static set_read_only_attribute(file: string, ro: boolean): GodotError
        /** Returns [code]true[/code], if file [code]read only[/code] attribute is set.
         *  [b]Note:[/b] This method is implemented on iOS, BSD, macOS, and Windows.
         */
        static get_read_only_attribute(file: string): boolean
        /** If [code]true[/code], the file is read with big-endian [url=https://en.wikipedia.org/wiki/Endianness]endianness[/url]. If [code]false[/code], the file is read with little-endian endianness. If in doubt, leave this to [code]false[/code] as most files are written with little-endian endianness.
         *  [b]Note:[/b] [member big_endian] is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.
         *  [b]Note:[/b] This is always reset to [code]false[/code] whenever you open the file. Therefore, you must set [member big_endian] [i]after[/i] opening the file, not before.
         */
        big_endian: boolean
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
    /** A dialog for selecting files or directories in the filesystem. */
    class FileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        /** Clear all the added filters in the dialog. */
        clear_filters(): void
        /** Adds a comma-delimited file name [param filter] option to the [FileDialog] with an optional [param description], which restricts what files can be picked.
         *  A [param filter] should be of the form [code]"filename.extension"[/code], where filename and extension can be [code]*[/code] to match any string. Filters starting with [code].[/code] (i.e. empty filenames) are not allowed.
         *  For example, a [param filter] of [code]"*.png, *.jpg"[/code] and a [param description] of [code]"Images"[/code] results in filter text "Images (*.png, *.jpg)".
         */
        add_filter(filter: string, description: string = ''): void
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
        /** Returns the vertical box container of the dialog, custom controls can be added to it.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_vbox(): VBoxContainer
        /** Returns the LineEdit for the selected file.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_line_edit(): LineEdit
        set_access(access: FileDialog.Access): void
        get_access(): FileDialog.Access
        set_root_subfolder(dir: string): void
        get_root_subfolder(): string
        set_show_hidden_files(show: boolean): void
        is_showing_hidden_files(): boolean
        set_use_native_dialog(native: boolean): void
        get_use_native_dialog(): boolean
        /** Clear all currently selected items in the dialog. */
        deselect_all(): void
        /** Invalidate and update the current dialog content list. */
        invalidate(): void
        /** If [code]true[/code], changing the [member file_mode] property will set the window title accordingly (e.g. setting [member file_mode] to [constant FILE_MODE_OPEN_FILE] will change the window title to "Open a File"). */
        mode_overrides_title: boolean
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        file_mode: number /*i64*/
        /** The file system access scope. See [enum Access] constants.
         *  [b]Warning:[/b] Currently, in sandboxed environments such as Web builds or sandboxed macOS apps, FileDialog cannot access the host file system. See [url=https://github.com/godotengine/godot-proposals/issues/1123]godot-proposals#1123[/url].
         */
        access: number /*i64*/
        /** If non-empty, the given sub-folder will be "root" of this [FileDialog], i.e. user won't be able to go to its parent directory. */
        root_subfolder: string
        /** The available file type filters. For example, this shows only [code].png[/code] and [code].gd[/code] files: [code]set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))[/code]. Multiple file types can also be specified in a single filter. [code]"*.png, *.jpg, *.jpeg ; Supported Images"[/code] will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        /** If [code]true[/code], the dialog will show hidden files. */
        show_hidden_files: boolean
        /** If [code]true[/code], [member access] is set to [constant ACCESS_FILESYSTEM], and it is supported by the current [DisplayServer], OS native dialog will be used instead of custom one.
         *  [b]Note:[/b] On macOS, sandboxed apps always use native dialogs to access host filesystem.
         */
        use_native_dialog: boolean
        /** The current working directory of the file dialog. */
        current_dir: string
        /** The currently selected file of the file dialog. */
        current_file: string
        /** The currently selected file path of the file dialog. */
        current_path: string
        readonly file_selected: Signal
        readonly files_selected: Signal
        readonly dir_selected: Signal
    }
    /** Godot editor's dock for managing files in the project. */
    class FileSystemDock extends VBoxContainer {
        _update_tree(_unnamed_arg0: PackedStringArray, _unnamed_arg1: boolean, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        _file_list_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _tree_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _select_file(_unnamed_arg0: string, _unnamed_arg1: boolean): void
        /** Sets the given [param path] as currently selected, ensuring that the selected file/directory is visible. */
        navigate_to_path(path: string): void
        _update_import_dock(): void
        /** Registers a new [EditorResourceTooltipPlugin]. */
        add_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        /** Removes an [EditorResourceTooltipPlugin]. Fails if the plugin wasn't previously added. */
        remove_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        readonly inherit: Signal
        readonly instantiate: Signal
        readonly resource_removed: Signal
        readonly file_removed: Signal
        readonly folder_removed: Signal
        readonly files_moved: Signal
        readonly folder_moved: Signal
        readonly display_mode_changed: Signal
    }
    class FileSystemList extends ItemList {
        readonly item_edited: Signal
    }
    class FindInFiles extends Node {
        readonly result_found: Signal
        readonly finished: Signal
    }
    class FindInFilesDialog extends AcceptDialog {
        readonly find_requested: Signal
        readonly replace_requested: Signal
    }
    class FindInFilesPanel extends Control {
        _on_result_found(_unnamed_arg0: string, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*i64*/, _unnamed_arg3: number /*i64*/, _unnamed_arg4: string): void
        _on_finished(): void
        _draw_result_text(_unnamed_arg0: Object, _unnamed_arg1: Rect2): void
        readonly result_selected: Signal
        readonly files_modified: Signal
    }
    class FindReplaceBar extends HBoxContainer {
        _search_current(): boolean
        readonly error: Signal
    }
    namespace FlowContainer {
        enum AlignmentMode {
            ALIGNMENT_BEGIN = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_END = 2,
        }
    }
    /** A container that arranges its child controls horizontally or vertically and wraps them around at the borders. */
    class FlowContainer extends Container {
        /** Returns the current line count. */
        get_line_count(): number /*i64*/
        set_alignment(alignment: FlowContainer.AlignmentMode): void
        get_alignment(): FlowContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        alignment: number /*i64*/
        /** If [code]true[/code], the [FlowContainer] will arrange its children vertically, rather than horizontally.
         *  Can't be changed when using [HFlowContainer] and [VFlowContainer].
         */
        vertical: boolean
    }
    /** A material that controls how volumetric fog is rendered, to be assigned to a [FogVolume]. */
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
        /** The density of the [FogVolume]. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [FogVolume]s or global volumetric fog.
         *  [b]Note:[/b] Due to limited precision, [member density] values between [code]-0.001[/code] and [code]0.001[/code] (exclusive) act like [code]0.0[/code]. This does not apply to [member Environment.volumetric_fog_density].
         */
        density: number /*f64*/
        /** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
        albedo: Color
        /** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
        emission: Color
        /** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of [code]0.0[/code] results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
        height_falloff: number /*f64*/
        /** The hardness of the edges of the [FogVolume]. A higher value will result in softer edges, while a lower value will result in harder edges. */
        edge_fade: number /*f64*/
        /** The 3D texture that is used to scale the [member density] of the [FogVolume]. This can be used to vary fog density within the [FogVolume] with any kind of static pattern. For animated effects, consider using a custom [url=$DOCS_URL/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url]. */
        density_texture: Texture3D
    }
    class FogMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A region that contributes to the default volumetric fog from the world environment. */
    class FogVolume extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_shape(shape: RenderingServer.FogVolumeShape): void
        get_shape(): RenderingServer.FogVolumeShape
        set_material(material: Material): void
        get_material(): Material
        /** The size of the [FogVolume] when [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX].
         *  [b]Note:[/b] Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].
         *  [b]Note:[/b] If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.
         */
        size: Vector3
        /** The shape of the [FogVolume]. This can be set to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        shape: number /*i64*/
        /** The [Material] used by the [FogVolume]. Can be either a built-in [FogMaterial] or a custom [ShaderMaterial]. */
        material: FogMaterial | ShaderMaterial
    }
    class FogVolumeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract base class for fonts and font variations. */
    class Font extends Resource {
        set_fallbacks(fallbacks: Array): void
        get_fallbacks(): Array
        /** Returns [TextServer] RID of the font cache for specific variation. */
        find_variation(variation_coordinates: Dictionary, face_index: number /*i64*/ = 0, strength: number /*f64*/ = 0, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, spacing_top: number /*i64*/ = 0, spacing_bottom: number /*i64*/ = 0, spacing_space: number /*i64*/ = 0, spacing_glyph: number /*i64*/ = 0): RID
        /** Returns [Array] of valid [Font] [RID]s, which can be passed to the [TextServer] methods. */
        get_rids(): Array
        /** Returns the total average font height (ascent plus descent) in pixels.
         *  [b]Note:[/b] Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).
         */
        get_height(font_size: number /*i64*/ = 16): number /*f64*/
        /** Returns the average font ascent (number of pixels above the baseline).
         *  [b]Note:[/b] Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).
         */
        get_ascent(font_size: number /*i64*/ = 16): number /*f64*/
        /** Returns the average font descent (number of pixels below the baseline).
         *  [b]Note:[/b] Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).
         */
        get_descent(font_size: number /*i64*/ = 16): number /*f64*/
        /** Returns average pixel offset of the underline below the baseline.
         *  [b]Note:[/b] Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
         */
        get_underline_position(font_size: number /*i64*/ = 16): number /*f64*/
        /** Returns average thickness of the underline.
         *  [b]Note:[/b] Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
         */
        get_underline_thickness(font_size: number /*i64*/ = 16): number /*f64*/
        /** Returns font family name. */
        get_font_name(): string
        /** Returns font style name. */
        get_font_style_name(): string
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        get_ot_name_strings(): Dictionary
        /** Returns font style flags, see [enum TextServer.FontStyle]. */
        get_font_style(): TextServer.FontStyle
        /** Returns weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
        get_font_weight(): number /*i64*/
        /** Returns font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
        get_font_stretch(): number /*i64*/
        /** Returns the spacing for the given [code]type[/code] (see [enum TextServer.SpacingType]). */
        get_spacing(spacing: TextServer.SpacingType): number /*i64*/
        /** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        get_opentype_features(): Dictionary
        /** Sets LRU cache capacity for [code]draw_*[/code] methods. */
        set_cache_capacity(single_line: number /*i64*/, multi_line: number /*i64*/): void
        /** Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].
         *  For example, to get the string size as displayed by a single-line Label, use:
         *  
         *  [b]Note:[/b] Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.
         *  [b]Note:[/b] Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].
         */
        get_string_size(text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        /** Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.
         *  See also [method draw_multiline_string].
         */
        get_multiline_string_size(text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        /** Draw [param text] into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  See also [method CanvasItem.draw_string].
         */
        draw_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Breaks [param text] into lines using rules specified by [param brk_flags] and draws it into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  See also [method CanvasItem.draw_multiline_string].
         */
        draw_multiline_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Draw [param text] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  See also [method CanvasItem.draw_string_outline].
         */
        draw_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Breaks [param text] to the lines using rules specified by [param brk_flags] and draws text outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  See also [method CanvasItem.draw_multiline_string_outline].
         */
        draw_multiline_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        /** Returns the size of a character. Does not take kerning into account.
         *  [b]Note:[/b] Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.
         */
        get_char_size(char: number /*i64*/, font_size: number /*i64*/): Vector2
        /** Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  [b]Note:[/b] Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.
         */
        draw_char(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        /** Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.
         *  [b]Note:[/b] Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.
         */
        draw_char_outline(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, size: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        /** Returns [code]true[/code] if a Unicode [param char] is available in the font. */
        has_char(char: number /*i64*/): boolean
        /** Returns a string containing all the characters available in the font.
         *  If a given character is included in more than one font data source, it appears only once in the returned string.
         */
        get_supported_chars(): string
        /** Returns [code]true[/code], if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        is_language_supported(language: string): boolean
        /** Returns [code]true[/code], if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
        is_script_supported(script: string): boolean
        /** Returns list of OpenType features supported by font. */
        get_supported_feature_list(): Dictionary
        /** Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as [code]tag: Vector3i(min_value,max_value,default_value)[/code].
         *  Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.
         *  To print available variation axes of a variable font:
         *  
         *  [b]Note:[/b] To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].
         */
        get_supported_variation_list(): Dictionary
        /** Returns number of faces in the TrueType / OpenType collection. */
        get_face_count(): number /*i64*/
        /** Array of fallback [Font]s to use as a substitute if a glyph is not found in this current [Font].
         *  If this array is empty in a [FontVariation], the [member FontVariation.base_font]'s fallbacks are used instead.
         */
        fallbacks: Array
    }
    class FontEditorPlugin extends EditorPlugin {
    }
    /** Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font. */
    class FontFile extends Font {
        /** Loads an AngelCode BMFont (.fnt, .font) bitmap font from file [param path].
         *  [b]Warning:[/b] This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the [code]user://[/code] directory.
         */
        load_bitmap_font(path: string): GodotError
        /** Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].
         *  [b]Warning:[/b] This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the [code]user://[/code] directory.
         */
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
        /** Returns number of the font cache entries. */
        get_cache_count(): number /*i64*/
        /** Removes all font cache entries. */
        clear_cache(): void
        /** Removes specified font cache entry. */
        remove_cache(cache_index: number /*i64*/): void
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        get_size_cache_list(cache_index: number /*i64*/): Array
        /** Removes all font sizes from the cache entry */
        clear_size_cache(cache_index: number /*i64*/): void
        /** Removes specified font size from the cache entry. */
        remove_size_cache(cache_index: number /*i64*/, size: Vector2i): void
        /** Sets variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        set_variation_coordinates(cache_index: number /*i64*/, variation_coordinates: Dictionary): void
        /** Returns variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        get_variation_coordinates(cache_index: number /*i64*/): Dictionary
        /** Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        set_embolden(cache_index: number /*i64*/, strength: number /*f64*/): void
        /** Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        get_embolden(cache_index: number /*i64*/): number /*f64*/
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        set_transform(cache_index: number /*i64*/, transform: Transform2D): void
        /** Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        get_transform(cache_index: number /*i64*/): Transform2D
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        set_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /** Returns spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        get_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType): number /*i64*/
        /** Sets an active face index in the TrueType / OpenType collection. */
        set_face_index(cache_index: number /*i64*/, face_index: number /*i64*/): void
        /** Returns an active face index in the TrueType / OpenType collection. */
        get_face_index(cache_index: number /*i64*/): number /*i64*/
        /** Sets the font ascent (number of pixels above the baseline). */
        set_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/, ascent: number /*f64*/): void
        /** Returns the font ascent (number of pixels above the baseline). */
        get_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        /** Sets the font descent (number of pixels below the baseline). */
        set_cache_descent(cache_index: number /*i64*/, size: number /*i64*/, descent: number /*f64*/): void
        /** Returns the font descent (number of pixels below the baseline). */
        get_cache_descent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        /** Sets pixel offset of the underline below the baseline. */
        set_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/, underline_position: number /*f64*/): void
        /** Returns pixel offset of the underline below the baseline. */
        get_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        /** Sets thickness of the underline in pixels. */
        set_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/, underline_thickness: number /*f64*/): void
        /** Returns thickness of the underline in pixels. */
        get_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        /** Sets scaling factor of the color bitmap font. */
        set_cache_scale(cache_index: number /*i64*/, size: number /*i64*/, scale: number /*f64*/): void
        /** Returns scaling factor of the color bitmap font. */
        get_cache_scale(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        /** Returns number of textures used by font cache entry. */
        get_texture_count(cache_index: number /*i64*/, size: Vector2i): number /*i64*/
        /** Removes all textures from font cache entry.
         *  [b]Note:[/b] This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.
         */
        clear_textures(cache_index: number /*i64*/, size: Vector2i): void
        /** Removes specified texture from the cache entry.
         *  [b]Note:[/b] This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].
         */
        remove_texture(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): void
        /** Sets font cache texture image. */
        set_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        /** Returns a copy of the font cache texture image. */
        get_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): Image
        /** Sets array containing glyph packing data. */
        set_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        /** Returns a copy of the array containing glyph packing data. */
        get_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        /** Returns list of rendered glyphs in the cache entry. */
        get_glyph_list(cache_index: number /*i64*/, size: Vector2i): PackedInt32Array
        /** Removes all rendered glyphs information from the cache entry.
         *  [b]Note:[/b] This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.
         */
        clear_glyphs(cache_index: number /*i64*/, size: Vector2i): void
        /** Removes specified rendered glyph information from the cache entry.
         *  [b]Note:[/b] This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.
         */
        remove_glyph(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): void
        /** Sets glyph advance (offset of the next glyph).
         *  [b]Note:[/b] Advance for glyphs outlines is the same as the base glyph advance and is not saved.
         */
        set_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        /** Returns glyph advance (offset of the next glyph).
         *  [b]Note:[/b] Advance for glyphs outlines is the same as the base glyph advance and is not saved.
         */
        get_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/): Vector2
        /** Sets glyph offset from the baseline. */
        set_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        /** Returns glyph offset from the baseline. */
        get_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        /** Sets glyph size. */
        set_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        /** Returns glyph size. */
        get_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        /** Sets rectangle in the cache texture containing the glyph. */
        set_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        /** Returns rectangle in the cache texture containing the glyph. */
        get_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Rect2
        /** Sets index of the cache texture containing the glyph. */
        set_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        /** Returns index of the cache texture containing the glyph. */
        get_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        /** Returns list of the kerning overrides. */
        get_kerning_list(cache_index: number /*i64*/, size: number /*i64*/): Array
        /** Removes all kerning overrides. */
        clear_kerning_map(cache_index: number /*i64*/, size: number /*i64*/): void
        /** Removes kerning override for the pair of glyphs. */
        remove_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): void
        /** Sets kerning for the pair of glyphs. */
        set_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        /** Returns kerning for the pair of glyphs. */
        get_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        /** Renders the range of characters to the font cache texture. */
        render_range(cache_index: number /*i64*/, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        /** Renders specified glyph to the font cache texture. */
        render_glyph(cache_index: number /*i64*/, size: Vector2i, index: number /*i64*/): void
        /** Adds override for [method Font.is_language_supported]. */
        set_language_support_override(language: string, supported: boolean): void
        /** Returns [code]true[/code] if support override is enabled for the [param language]. */
        get_language_support_override(language: string): boolean
        /** Remove language support override. */
        remove_language_support_override(language: string): void
        /** Returns list of language support overrides. */
        get_language_support_overrides(): PackedStringArray
        /** Adds override for [method Font.is_script_supported]. */
        set_script_support_override(script: string, supported: boolean): void
        /** Returns [code]true[/code] if support override is enabled for the [param script]. */
        get_script_support_override(script: string): boolean
        /** Removes script support override. */
        remove_script_support_override(script: string): void
        /** Returns list of script support overrides. */
        get_script_support_overrides(): PackedStringArray
        set_opentype_feature_overrides(overrides: Dictionary): void
        get_opentype_feature_overrides(): Dictionary
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        get_glyph_index(size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        /** Returns character code associated with [param glyph_index], or [code]0[/code] if [param glyph_index] is invalid. See [method get_glyph_index]. */
        get_char_from_glyph_index(size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        /** Contents of the dynamic font source file. */
        data: PackedByteArray
        /** If set to [code]true[/code], generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        /** Font family name. */
        font_name: string
        /** Font style name. */
        style_name: string
        /** Font style flags, see [enum TextServer.FontStyle]. */
        font_style: number /*i64*/
        /** Weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
        font_weight: number /*i64*/
        /** Font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
        font_stretch: number /*i64*/
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        /** If set to [code]true[/code], glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
         *  [b]Note:[/b] If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline.
         *  [b]Note:[/b] MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.
         */
        multichannel_signed_distance_field: boolean
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of [code]16[/code] allows outline sizes up to [code]8[/code] to look correct. */
        msdf_pixel_range: number /*i64*/
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        /** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        /** If set to [code]true[/code], auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
        force_autohinter: boolean
        /** Font hinting mode. Used by dynamic fonts only. */
        hinting: number /*i64*/
        /** Font oversampling factor. If set to [code]0.0[/code], the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling). */
        oversampling: number /*f64*/
        /** Font size, used only for the bitmap fonts. */
        fixed_size: number /*i64*/
        /** Scaling mode, used only for the bitmap fonts with [member fixed_size] greater than zero. */
        fixed_size_scale_mode: number /*i64*/
        /** Font OpenType feature set override. */
        opentype_feature_overrides: Dictionary
    }
    /** A variation of a font with additional settings. */
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
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        set_spacing(spacing: TextServer.SpacingType, value: number /*i64*/): void
        /** Base font used to create a variation. If not set, default [Theme] font is used. */
        base_font: Font
        /** Font OpenType variation coordinates. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]OpenType variation tags[/url].
         *  [b]Note:[/b] This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. [code]0x77678674[/code]) and names ([String], e.g. [code]wght[/code]). Some axes might be accessible by multiple names. For example, [code]wght[/code] refers to the same axis as [code]weight[/code]. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].
         *  [b]Note:[/b] To get available variation axes of a font, use [method Font.get_supported_variation_list].
         */
        variation_opentype: Dictionary
        /** Active face index in the TrueType / OpenType collection file. */
        variation_face_index: number /*i64*/
        /** If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
         *  [b]Note:[/b] Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.
         */
        variation_embolden: number /*f64*/
        /** 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.
         *  For example, to simulate italic typeface by slanting, apply the following transform [code]Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)[/code].
         */
        variation_transform: Transform2D
        /** A set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        opentype_features: Dictionary
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
        buffer_view: number /*i64*/
        byte_offset: number /*i64*/
        component_type: number /*i64*/
        normalized: boolean
        count: number /*i64*/
        type: number /*i64*/
        min: PackedFloat64Array
        max: PackedFloat64Array
        sparse_count: number /*i64*/
        sparse_indices_buffer_view: number /*i64*/
        sparse_indices_byte_offset: number /*i64*/
        sparse_indices_component_type: number /*i64*/
        sparse_values_buffer_view: number /*i64*/
        sparse_values_byte_offset: number /*i64*/
    }
    class GLTFAnimation extends Resource {
        get_loop(): boolean
        set_loop(loop: boolean): void
        loop: boolean
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
        buffer: number /*i64*/
        byte_offset: number /*i64*/
        byte_length: number /*i64*/
        byte_stride: number /*i64*/
        indices: boolean
    }
    /** Represents a GLTF camera. */
    class GLTFCamera extends Resource {
        /** Create a new GLTFCamera instance from the given Godot [Camera3D] node. */
        static from_node(camera_node: Camera3D): GLTFCamera
        /** Converts this GLTFCamera instance into a Godot [Camera3D] node. */
        to_node(): Camera3D
        /** Creates a new GLTFCamera instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFCamera
        /** Serializes this GLTFCamera instance into a [Dictionary]. */
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
        /** Whether or not the camera is in perspective mode. If false, the camera is in orthographic/orthogonal mode. This maps to GLTF's camera [code]type[/code] property. See [member Camera3D.projection] and the GLTF spec for more information. */
        perspective: boolean
        /** The FOV of the camera. This class and GLTF define the camera FOV in radians, while Godot uses degrees. This maps to GLTF's [code]yfov[/code] property. This value is only used for perspective cameras, when [member perspective] is true. */
        fov: number /*f64*/
        /** The size of the camera. This class and GLTF define the camera size magnitude as a radius in meters, while Godot defines it as a diameter in meters. This maps to GLTF's [code]ymag[/code] property. This value is only used for orthographic/orthogonal cameras, when [member perspective] is false. */
        size_mag: number /*f64*/
        /** The distance to the far culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's [code]zfar[/code] property. */
        depth_far: number /*f64*/
        /** The distance to the near culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's [code]znear[/code] property. */
        depth_near: number /*f64*/
    }
    namespace GLTFDocument {
        enum RootNodeMode {
            ROOT_NODE_MODE_SINGLE_ROOT = 0,
            ROOT_NODE_MODE_KEEP_ROOT = 1,
            ROOT_NODE_MODE_MULTI_ROOT = 2,
        }
    }
    /** Class for importing and exporting glTF files in and out of Godot. */
    class GLTFDocument extends Resource {
        /** Takes a path to a GLTF file and imports the data at that file path to the given [GLTFState] object through the [param state] parameter.
         *  [b]Note:[/b] The [param base_path] tells [method append_from_file] where to find dependencies and can be empty.
         */
        append_from_file(path: string, state: GLTFState, flags: number /*i64*/ = 0, base_path: string = ''): GodotError
        /** Takes a [PackedByteArray] defining a GLTF and imports the data to the given [GLTFState] object through the [param state] parameter.
         *  [b]Note:[/b] The [param base_path] tells [method append_from_buffer] where to find dependencies and can be empty.
         */
        append_from_buffer(bytes: PackedByteArray, base_path: string, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        /** Takes a Godot Engine scene node and exports it and its descendants to the given [GLTFState] object through the [param state] parameter. */
        append_from_scene(node: Node, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        /** Takes a [GLTFState] object through the [param state] parameter and returns a Godot Engine scene node. */
        generate_scene(state: GLTFState, bake_fps: number /*f64*/ = 30, trimming: boolean = false, remove_immutable_tracks: boolean = true): Node
        /** Takes a [GLTFState] object through the [param state] parameter and returns a GLTF [PackedByteArray]. */
        generate_buffer(state: GLTFState): PackedByteArray
        /** Takes a [GLTFState] object through the [param state] parameter and writes a glTF file to the filesystem.
         *  [b]Note:[/b] The extension of the glTF file determines if it is a .glb binary file or a .gltf file.
         */
        write_to_filesystem(state: GLTFState, path: string): GodotError
        set_image_format(image_format: string): void
        get_image_format(): string
        set_lossy_quality(lossy_quality: number /*f64*/): void
        get_lossy_quality(): number /*f64*/
        set_root_node_mode(root_node_mode: GLTFDocument.RootNodeMode): void
        get_root_node_mode(): GLTFDocument.RootNodeMode
        /** Registers the given [GLTFDocumentExtension] instance with GLTFDocument. If [param first_priority] is true, this extension will be run first. Otherwise, it will be run last.
         *  [b]Note:[/b] Like GLTFDocument itself, all GLTFDocumentExtension classes must be stateless in order to function properly. If you need to store data, use the [code]set_additional_data[/code] and [code]get_additional_data[/code] methods in [GLTFState] or [GLTFNode].
         */
        static register_gltf_document_extension(extension: GLTFDocumentExtension, first_priority: boolean = false): void
        /** Unregisters the given [GLTFDocumentExtension] instance. */
        static unregister_gltf_document_extension(extension: GLTFDocumentExtension): void
        /** The user-friendly name of the export image format. This is used when exporting the GLTF file, including writing to a file and writing to a byte array.
         *  By default, Godot allows the following options: "None", "PNG", "JPEG", "Lossless WebP", and "Lossy WebP". Support for more image formats can be added in [GLTFDocumentExtension] classes.
         */
        image_format: string
        /** If [member image_format] is a lossy image format, this determines the lossy quality of the image. On a range of [code]0.0[/code] to [code]1.0[/code], where [code]0.0[/code] is the lowest quality and [code]1.0[/code] is the highest quality. A lossy quality of [code]1.0[/code] is not the same as lossless. */
        lossy_quality: number /*f64*/
        /** How to process the root node during export. See [enum RootNodeMode] for details. The default and recommended value is [constant ROOT_NODE_MODE_SINGLE_ROOT].
         *  [b]Note:[/b] Regardless of how the glTF file is exported, when importing, the root node type and name can be overridden in the scene import settings tab.
         */
        root_node_mode: number /*i64*/
    }
    /** [GLTFDocument] extension class. */
    class GLTFDocumentExtension extends Resource {
        /* gdvirtual */ _import_preflight(state: GLTFState, extensions: PackedStringArray): GodotError
        /* gdvirtual */ _get_supported_extensions(): PackedStringArray
        /* gdvirtual */ _parse_node_extensions(state: GLTFState, gltf_node: GLTFNode, extensions: Dictionary): GodotError
        /* gdvirtual */ _parse_image_data(state: GLTFState, image_data: PackedByteArray, mime_type: string, ret_image: Image): GodotError
        /* gdvirtual */ _get_image_file_extension(): string
        /* gdvirtual */ _parse_texture_json(state: GLTFState, texture_json: Dictionary, ret_gltf_texture: GLTFTexture): GodotError
        /* gdvirtual */ _generate_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_parent: Node): Node3D
        /* gdvirtual */ _import_post_parse(state: GLTFState): GodotError
        /* gdvirtual */ _import_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        /* gdvirtual */ _import_post(state: GLTFState, root: Node): GodotError
        /* gdvirtual */ _export_preflight(state: GLTFState, root: Node): GodotError
        /* gdvirtual */ _convert_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_node: Node): void
        /* gdvirtual */ _export_preserialize(state: GLTFState): GodotError
        /* gdvirtual */ _get_saveable_image_formats(): PackedStringArray
        /* gdvirtual */ _serialize_image_to_bytes(state: GLTFState, image: Image, image_dict: Dictionary, image_format: string, lossy_quality: number /*f64*/): PackedByteArray
        /* gdvirtual */ _save_image_at_path(state: GLTFState, image: Image, file_path: string, image_format: string, lossy_quality: number /*f64*/): GodotError
        /* gdvirtual */ _serialize_texture_json(state: GLTFState, texture_json: Dictionary, gltf_texture: GLTFTexture, image_format: string): GodotError
        /* gdvirtual */ _export_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        /* gdvirtual */ _export_post(state: GLTFState): GodotError
    }
    class GLTFDocumentExtensionConvertImporterMesh extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionPhysics extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureKTX extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureWebP extends GLTFDocumentExtension {
    }
    /** Represents a GLTF light. */
    class GLTFLight extends Resource {
        /** Create a new GLTFLight instance from the given Godot [Light3D] node. */
        static from_node(light_node: Light3D): GLTFLight
        /** Converts this GLTFLight instance into a Godot [Light3D] node. */
        to_node(): Light3D
        /** Creates a new GLTFLight instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFLight
        /** Serializes this GLTFLight instance into a [Dictionary]. */
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
        /** The [Color] of the light. Defaults to white. A black color causes the light to have no effect. */
        color: Color
        /** The intensity of the light. This is expressed in candelas (lumens per steradian) for point and spot lights, and lux (lumens per m²) for directional lights. When creating a Godot light, this value is converted to a unitless multiplier. */
        intensity: number /*f64*/
        /** The type of the light. The values accepted by Godot are "point", "spot", and "directional", which correspond to Godot's [OmniLight3D], [SpotLight3D], and [DirectionalLight3D] respectively. */
        light_type: string
        /** The range of the light, beyond which the light has no effect. GLTF lights with no range defined behave like physical lights (which have infinite range). When creating a Godot light, the range is clamped to 4096. */
        range: number /*f64*/
        /** The inner angle of the cone in a spotlight. Must be less than or equal to the outer cone angle.
         *  Within this angle, the light is at full brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. When creating a Godot [SpotLight3D], the ratio between the inner and outer cone angles is used to calculate the attenuation of the light.
         */
        inner_cone_angle: number /*f64*/
        /** The outer angle of the cone in a spotlight. Must be greater than or equal to the inner angle.
         *  At this angle, the light drops off to zero brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. If this angle is a half turn, then the spotlight emits in all directions. When creating a Godot [SpotLight3D], the outer cone angle is used as the angle of the spotlight.
         */
        outer_cone_angle: number /*f64*/
    }
    class GLTFMesh extends Resource {
        get_mesh(): ImporterMesh
        set_mesh(mesh: ImporterMesh): void
        get_blend_weights(): PackedFloat32Array
        set_blend_weights(blend_weights: PackedFloat32Array): void
        get_instance_materials(): Array
        set_instance_materials(instance_materials: Array): void
        mesh: Object
        blend_weights: PackedFloat32Array
        instance_materials: Array
    }
    /** GLTF node class. */
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
        /** Gets additional arbitrary data in this [GLTFNode] instance. This can be used to keep per-node state data in [GLTFDocumentExtension] classes, which is important because they are stateless.
         *  The argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the return value can be anything you set. If nothing was set, the return value is null.
         */
        get_additional_data(extension_name: StringName): any
        /** Sets additional arbitrary data in this [GLTFNode] instance. This can be used to keep per-node state data in [GLTFDocumentExtension] classes, which is important because they are stateless.
         *  The first argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the second argument can be anything you want.
         */
        set_additional_data(extension_name: StringName, additional_data: any): void
        /** The index of the parent node in the [GLTFState]. If -1, this node is a root node. */
        parent: number /*i64*/
        /** How deep into the node hierarchy this node is. A root node will have a height of 0, its children will have a height of 1, and so on. If -1, the height has not been calculated. */
        height: number /*i64*/
        /** The transform of the GLTF node relative to its parent. This property is usually unused since the position, rotation, and scale properties are preferred. */
        xform: Transform3D
        /** If this GLTF node is a mesh, the index of the [GLTFMesh] in the [GLTFState] that describes the mesh's properties. If -1, this node is not a mesh. */
        mesh: number /*i64*/
        /** If this GLTF node is a camera, the index of the [GLTFCamera] in the [GLTFState] that describes the camera's properties. If -1, this node is not a camera. */
        camera: number /*i64*/
        /** If this GLTF node has a skin, the index of the [GLTFSkin] in the [GLTFState] that describes the skin's properties. If -1, this node does not have a skin. */
        skin: number /*i64*/
        /** If this GLTF node has a skeleton, the index of the [GLTFSkeleton] in the [GLTFState] that describes the skeleton's properties. If -1, this node does not have a skeleton. */
        skeleton: number /*i64*/
        /** The position of the GLTF node relative to its parent. */
        position: Vector3
        /** The rotation of the GLTF node relative to its parent. */
        rotation: Quaternion
        /** The scale of the GLTF node relative to its parent. */
        scale: Vector3
        /** The indices of the child nodes in the [GLTFState]. If this GLTF node has no children, this will be an empty array. */
        children: PackedInt32Array
        /** If this GLTF node is a light, the index of the [GLTFLight] in the [GLTFState] that describes the light's properties. If -1, this node is not a light. */
        light: number /*i64*/
    }
    /** Represents a GLTF physics body. */
    class GLTFPhysicsBody extends Resource {
        /** Create a new GLTFPhysicsBody instance from the given Godot [CollisionObject3D] node. */
        static from_node(body_node: CollisionObject3D): GLTFPhysicsBody
        /** Converts this GLTFPhysicsBody instance into a Godot [CollisionObject3D] node. */
        to_node(): CollisionObject3D
        /** Creates a new GLTFPhysicsBody instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsBody
        /** Serializes this GLTFPhysicsBody instance into a [Dictionary]. */
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
        /** The type of the body. When importing, this controls what type of [CollisionObject3D] node Godot should generate. Valid values are "static", "kinematic", "character", "rigid", "vehicle", and "trigger". */
        body_type: string
        /** The mass of the physics body, in kilograms. This is only used when the body type is "rigid" or "vehicle". */
        mass: number /*f64*/
        /** The linear velocity of the physics body, in meters per second. This is only used when the body type is "rigid" or "vehicle". */
        linear_velocity: Vector3
        /** The angular velocity of the physics body, in radians per second. This is only used when the body type is "rigid" or "vehicle". */
        angular_velocity: Vector3
        /** The center of mass of the body, in meters. This is in local space relative to the body. By default, the center of the mass is the body's origin. */
        center_of_mass: Vector3
        /** The inertia tensor of the physics body, in kilogram meter squared (kg⋅m²). This is only used when the body type is "rigid" or "vehicle".
         *  When converted to a Godot [RigidBody3D] node, if this value is zero, then the inertia will be calculated automatically.
         */
        inertia_tensor: Basis
    }
    /** Represents a GLTF physics shape. */
    class GLTFPhysicsShape extends Resource {
        /** Create a new GLTFPhysicsShape instance from the given Godot [CollisionShape3D] node. */
        static from_node(shape_node: CollisionShape3D): GLTFPhysicsShape
        /** Converts this GLTFPhysicsShape instance into a Godot [CollisionShape3D] node. */
        to_node(cache_shapes: boolean = false): CollisionShape3D
        /** Creates a new GLTFPhysicsShape instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsShape
        /** Serializes this GLTFPhysicsShape instance into a [Dictionary]. */
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
        /** The type of shape this shape represents. Valid values are "box", "capsule", "cylinder", "sphere", "hull", and "trimesh". */
        shape_type: string
        /** The size of the shape, in meters. This is only used when the shape type is "box", and it represents the "diameter" of the box. This value should not be negative. */
        size: Vector3
        /** The radius of the shape, in meters. This is only used when the shape type is "capsule", "cylinder", or "sphere". This value should not be negative. */
        radius: number /*f64*/
        /** The height of the shape, in meters. This is only used when the shape type is "capsule" or "cylinder". This value should not be negative, and for "capsule" it should be at least twice the radius. */
        height: number /*f64*/
        /** If [code]true[/code], indicates that this shape is a trigger. For Godot, this means that the shape should be a child of an Area3D node.
         *  This is the only variable not used in the [method to_node] method, it's intended to be used alongside when deciding where to add the generated node as a child.
         */
        is_trigger: boolean
        /** The index of the shape's mesh in the GLTF file. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh). */
        mesh_index: number /*i64*/
        /** The [ImporterMesh] resource of the shape. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh). */
        importer_mesh: ImporterMesh
    }
    class GLTFSkeleton extends Resource {
        get_joints(): PackedInt32Array
        set_joints(joints: PackedInt32Array): void
        get_roots(): PackedInt32Array
        set_roots(roots: PackedInt32Array): void
        get_godot_skeleton(): Skeleton3D
        get_unique_names(): Array
        set_unique_names(unique_names: Array): void
        /** Returns a [Dictionary] that maps skeleton bone indices to the indices of GLTF nodes. This property is unused during import, and only set during export. In a GLTF file, a bone is a node, so Godot converts skeleton bones to GLTF nodes. */
        get_godot_bone_node(): Dictionary
        /** Sets a [Dictionary] that maps skeleton bone indices to the indices of GLTF nodes. This property is unused during import, and only set during export. In a GLTF file, a bone is a node, so Godot converts skeleton bones to GLTF nodes. */
        set_godot_bone_node(godot_bone_node: Dictionary): void
        get_bone_attachment_count(): number /*i64*/
        get_bone_attachment(idx: number /*i64*/): BoneAttachment3D
        joints: PackedInt32Array
        roots: PackedInt32Array
        unique_names: Array
        godot_bone_node: Dictionary
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
        skin_root: number /*i64*/
        joints_original: PackedInt32Array
        inverse_binds: Array
        joints: PackedInt32Array
        non_joints: PackedInt32Array
        roots: PackedInt32Array
        skeleton: number /*i64*/
        joint_i_to_bone_i: Dictionary
        joint_i_to_name: Dictionary
        godot_skin: Skin
    }
    /** Archived GLTF extension for specular/glossy materials. */
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
        /** The diffuse texture. */
        diffuse_img: Object
        /** The reflected diffuse factor of the material. */
        diffuse_factor: Color
        /** The glossiness or smoothness of the material. */
        gloss_factor: number /*f64*/
        /** The specular RGB color of the material. The alpha channel is unused. */
        specular_factor: Color
        /** The specular-glossiness texture. */
        spec_gloss_img: Object
    }
    /** Represents all data of a GLTF file. */
    class GLTFState extends Resource {
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        /** Appends an extension to the list of extensions used by this GLTF file during serialization. If [param required] is true, the extension will also be added to the list of required extensions. Do not run this in [method GLTFDocumentExtension._export_post], as that stage is too late to add extensions. The final list is sorted alphabetically. */
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
        /** Returns an array of all [GLTFNode]s in the GLTF file. These are the nodes that [member GLTFNode.children] and [member root_nodes] refer to. This includes nodes that may not be generated in the Godot scene, or nodes that may generate multiple Godot scene nodes. */
        get_nodes(): Array
        /** Sets the [GLTFNode]s in the state. These are the nodes that [member GLTFNode.children] and [member root_nodes] refer to. Some of the nodes set here may not be generated in the Godot scene, or may generate multiple Godot scene nodes. */
        set_nodes(nodes: Array): void
        get_buffers(): Array
        set_buffers(buffers: Array): void
        get_buffer_views(): Array
        set_buffer_views(buffer_views: Array): void
        get_accessors(): Array
        set_accessors(accessors: Array): void
        /** Returns an array of all [GLTFMesh]es in the GLTF file. These are the meshes that the [member GLTFNode.mesh] index refers to. */
        get_meshes(): Array
        /** Sets the [GLTFMesh]es in the state. These are the meshes that the [member GLTFNode.mesh] index refers to. */
        set_meshes(meshes: Array): void
        /** Returns the number of [AnimationPlayer] nodes in this [GLTFState]. These nodes are only used during the export process when converting Godot [AnimationPlayer] nodes to GLTF animations. */
        get_animation_players_count(idx: number /*i64*/): number /*i64*/
        /** Returns the [AnimationPlayer] node with the given index. These nodes are only used during the export process when converting Godot [AnimationPlayer] nodes to GLTF animations. */
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
        /** Retrieves the array of texture samplers that are used by the textures contained in the GLTF. */
        get_texture_samplers(): Array
        /** Sets the array of texture samplers that are used by the textures contained in the GLTF. */
        set_texture_samplers(texture_samplers: Array): void
        /** Gets the images of the GLTF file as an array of [Texture2D]s. These are the images that the [member GLTFTexture.src_image] index refers to. */
        get_images(): Array
        /** Sets the images in the state stored as an array of [Texture2D]s. This can be used during export. These are the images that the [member GLTFTexture.src_image] index refers to. */
        set_images(images: Array): void
        /** Returns an array of all [GLTFSkin]s in the GLTF file. These are the skins that the [member GLTFNode.skin] index refers to. */
        get_skins(): Array
        /** Sets the [GLTFSkin]s in the state. These are the skins that the [member GLTFNode.skin] index refers to. */
        set_skins(skins: Array): void
        /** Returns an array of all [GLTFCamera]s in the GLTF file. These are the cameras that the [member GLTFNode.camera] index refers to. */
        get_cameras(): Array
        /** Sets the [GLTFCamera]s in the state. These are the cameras that the [member GLTFNode.camera] index refers to. */
        set_cameras(cameras: Array): void
        /** Returns an array of all [GLTFLight]s in the GLTF file. These are the lights that the [member GLTFNode.light] index refers to. */
        get_lights(): Array
        /** Sets the [GLTFLight]s in the state. These are the lights that the [member GLTFNode.light] index refers to. */
        set_lights(lights: Array): void
        /** Returns an array of unique node names. This is used in both the import process and export process. */
        get_unique_names(): Array
        /** Sets the unique node names in the state. This is used in both the import process and export process. */
        set_unique_names(unique_names: Array): void
        /** Returns an array of unique animation names. This is only used during the import process. */
        get_unique_animation_names(): Array
        /** Sets the unique animation names in the state. This is only used during the import process. */
        set_unique_animation_names(unique_animation_names: Array): void
        /** Returns an array of all [GLTFSkeleton]s in the GLTF file. These are the skeletons that the [member GLTFNode.skeleton] index refers to. */
        get_skeletons(): Array
        /** Sets the [GLTFSkeleton]s in the state. These are the skeletons that the [member GLTFNode.skeleton] index refers to. */
        set_skeletons(skeletons: Array): void
        get_create_animations(): boolean
        set_create_animations(create_animations: boolean): void
        /** Returns an array of all [GLTFAnimation]s in the GLTF file. When importing, these will be generated as animations in an [AnimationPlayer] node. When exporting, these will be generated from Godot [AnimationPlayer] nodes. */
        get_animations(): Array
        /** Sets the [GLTFAnimation]s in the state. When importing, these will be generated as animations in an [AnimationPlayer] node. When exporting, these will be generated from Godot [AnimationPlayer] nodes. */
        set_animations(animations: Array): void
        /** Returns the Godot scene node that corresponds to the same index as the [GLTFNode] it was generated from. This is the inverse of [method get_node_index]. Useful during the import process.
         *  [b]Note:[/b] Not every [GLTFNode] will have a scene node generated, and not every generated scene node will have a corresponding [GLTFNode]. If there is no scene node for this [GLTFNode] index, [code]null[/code] is returned.
         */
        get_scene_node(idx: number /*i64*/): Node
        /** Returns the index of the [GLTFNode] corresponding to this Godot scene node. This is the inverse of [method get_scene_node]. Useful during the export process.
         *  [b]Note:[/b] Not every Godot scene node will have a corresponding [GLTFNode], and not every [GLTFNode] will have a scene node generated. If there is no [GLTFNode] index for this scene node, [code]-1[/code] is returned.
         */
        get_node_index(scene_node: Node): number /*i64*/
        /** Gets additional arbitrary data in this [GLTFState] instance. This can be used to keep per-file state data in [GLTFDocumentExtension] classes, which is important because they are stateless.
         *  The argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the return value can be anything you set. If nothing was set, the return value is null.
         */
        get_additional_data(extension_name: StringName): any
        /** Sets additional arbitrary data in this [GLTFState] instance. This can be used to keep per-file state data in [GLTFDocumentExtension] classes, which is important because they are stateless.
         *  The first argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the second argument can be anything you want.
         */
        set_additional_data(extension_name: StringName, additional_data: any): void
        get_handle_binary_image(): number /*i64*/
        set_handle_binary_image(method: number /*i64*/): void
        json: Dictionary
        major_version: number /*i64*/
        minor_version: number /*i64*/
        /** The copyright string in the asset header of the GLTF file. This is set during import if present and export if non-empty. See the GLTF asset header documentation for more information. */
        copyright: string
        glb_data: PackedByteArray
        use_named_skin_binds: boolean
        nodes: Array
        buffers: Array
        buffer_views: Array
        accessors: Array
        meshes: Array
        materials: Array
        /** The name of the scene. When importing, if not specified, this will be the file name. When exporting, if specified, the scene name will be saved to the GLTF file. */
        scene_name: string
        /** The folder path associated with this GLTF data. This is used to find other files the GLTF file references, like images or binary buffers. This will be set during import when appending from a file, and will be set during export when writing to a file. */
        base_path: string
        /** The file name associated with this GLTF data. If it ends with [code].gltf[/code], this is text-based GLTF, otherwise this is binary GLB. This will be set during import when appending from a file, and will be set during export when writing to a file. If writing to a buffer, this will be an empty string. */
        filename: string
        /** The root nodes of the GLTF file. Typically, a GLTF file will only have one scene, and therefore one root node. However, a GLTF file may have multiple scenes and therefore multiple root nodes, which will be generated as siblings of each other and as children of the root node of the generated Godot scene. */
        root_nodes: PackedInt32Array
        textures: Array
        texture_samplers: Array
        images: Array
        skins: Array
        cameras: Array
        lights: Array
        unique_names: Array
        unique_animation_names: Array
        skeletons: Array
        create_animations: boolean
        animations: Array
        handle_binary_image: number /*i64*/
    }
    class GLTFTexture extends Resource {
        get_src_image(): number /*i64*/
        set_src_image(src_image: number /*i64*/): void
        get_sampler(): number /*i64*/
        set_sampler(sampler: number /*i64*/): void
        /** The index of the image associated with this texture, see [method GLTFState.get_images]. If -1, then this texture does not have an image assigned. */
        src_image: number /*i64*/
        /** ID of the texture sampler to use when sampling the image. If -1, then the default texture sampler is used (linear filtering, and repeat wrapping in both axes). */
        sampler: number /*i64*/
    }
    /** Represents a GLTF texture sampler */
    class GLTFTextureSampler extends Resource {
        get_mag_filter(): number /*i64*/
        set_mag_filter(filter_mode: number /*i64*/): void
        get_min_filter(): number /*i64*/
        set_min_filter(filter_mode: number /*i64*/): void
        get_wrap_s(): number /*i64*/
        set_wrap_s(wrap_mode: number /*i64*/): void
        get_wrap_t(): number /*i64*/
        set_wrap_t(wrap_mode: number /*i64*/): void
        /** Texture's magnification filter, used when texture appears larger on screen than the source image. */
        mag_filter: number /*i64*/
        /** Texture's minification filter, used when the texture appears smaller on screen than the source image. */
        min_filter: number /*i64*/
        /** Wrapping mode to use for S-axis (horizontal) texture coordinates. */
        wrap_s: number /*i64*/
        /** Wrapping mode to use for T-axis (vertical) texture coordinates. */
        wrap_t: number /*i64*/
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
    /** A 2D particle emitter. */
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
        /** Returns a rectangle containing the positions of all existing particles.
         *  [b]Note:[/b] When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.
         */
        capture_rect(): Rect2
        /** Restarts all the existing particles. */
        restart(): void
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        /** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
        emit_particle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_trail_sections(sections: number /*i64*/): void
        get_trail_sections(): number /*i64*/
        set_trail_section_subdivisions(subdivisions: number /*i64*/): void
        get_trail_section_subdivisions(): number /*i64*/
        /** Sets this node's properties to match a given [CPUParticles2D] node. */
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        /** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        /** The number of particles to emit in one emission cycle. The effective emission rate is [code](amount * amount_ratio) / lifetime[/code] particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.
         *  [b]Note:[/b] Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.
         */
        amount: number /*i64*/
        /** The ratio of particles that should actually be emitted. If set to a value lower than [code]1.0[/code], this will set the amount of emitted particles throughout the lifetime to [code]amount * amount_ratio[/code]. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.
         *  [b]Note:[/b] Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to [code]1[/code] and change [member amount] to your liking instead.
         */
        amount_ratio: number /*f64*/
        /** Path to another [GPUParticles2D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.
         *  [b]Note:[/b] When [member sub_emitter] is set, the target [GPUParticles2D] node will no longer emit particles on its own.
         */
        sub_emitter: NodePath
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        /** Particle texture. If [code]null[/code], particles will be squares with a size of 1×1 pixels.
         *  [b]Note:[/b] To use a flipbook texture, assign a new [CanvasItemMaterial] to the [GPUParticles2D]'s [member CanvasItem.material] property, then enable [member CanvasItemMaterial.particles_animation] and set [member CanvasItemMaterial.particles_anim_h_frames], [member CanvasItemMaterial.particles_anim_v_frames], and [member CanvasItemMaterial.particles_anim_loop] to match the flipbook texture.
         */
        texture: Texture2D
        /** The amount of time each particle will exist (in seconds). The effective emission rate is [code](amount * amount_ratio) / lifetime[/code] particles per second. */
        lifetime: number /*f64*/
        /** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
        one_shot: boolean
        /** Particle system starts as if it had already run for this many seconds. */
        preprocess: number /*f64*/
        /** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
        speed_scale: number /*f64*/
        /** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
        explosiveness: number /*f64*/
        /** Emission lifetime randomness ratio. */
        randomness: number /*f64*/
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        /** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.
         *  [b]Note:[/b] This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.
         */
        interp_to_end: number /*f64*/
        /** Multiplier for particle's collision radius. [code]1.0[/code] corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].
         *  [b]Note:[/b] Particles always have a spherical collision shape.
         */
        collision_base_size: number /*f64*/
        /** The [Rect2] that determines the node's region which needs to be visible on screen for the particle system to be active.
         *  Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The [Rect2] can be grown via code or with the [b]Particles → Generate Visibility Rect[/b] editor tool.
         */
        visibility_rect: Rect2
        /** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        /** Particle draw order. Uses [enum DrawOrder] values. */
        draw_order: number /*i64*/
        /** If [code]true[/code], enables particle trails using a mesh skinning system.
         *  [b]Note:[/b] Unlike [GPUParticles3D], the number of trail sections and subdivisions is set with the [member trail_sections] and [member trail_section_subdivisions] properties.
         */
        trail_enabled: boolean
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is [code]true[/code]. */
        trail_lifetime: number /*f64*/
        /** The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_section_subdivisions]. Only effective if [member trail_enabled] is [code]true[/code]. */
        trail_sections: number /*i64*/
        /** The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_sections]. Only effective if [member trail_enabled] is [code]true[/code]. */
        trail_section_subdivisions: number /*i64*/
        readonly finished: Signal
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
    /** A 3D particle emitter. */
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
        /** Sets the [Mesh] that is drawn at index [param pass]. */
        set_draw_pass_mesh(pass: number /*i64*/, mesh: Mesh): void
        get_draw_passes(): number /*i64*/
        /** Returns the [Mesh] that is drawn at index [param pass]. */
        get_draw_pass_mesh(pass: number /*i64*/): Mesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        /** Restarts the particle emission, clearing existing particles. */
        restart(): void
        /** Returns the axis-aligned bounding box that contains all the particles that are active in the current frame. */
        capture_aabb(): AABB
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        /** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
        emit_particle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_transform_align(align: GPUParticles3D.TransformAlign): void
        get_transform_align(): GPUParticles3D.TransformAlign
        /** Sets this node's properties to match a given [CPUParticles3D] node. */
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        /** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        /** The number of particles to emit in one emission cycle. The effective emission rate is [code](amount * amount_ratio) / lifetime[/code] particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.
         *  [b]Note:[/b] Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.
         */
        amount: number /*i64*/
        /** The ratio of particles that should actually be emitted. If set to a value lower than [code]1.0[/code], this will set the amount of emitted particles throughout the lifetime to [code]amount * amount_ratio[/code]. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.
         *  [b]Note:[/b] Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to [code]1[/code] and change [member amount] to your liking instead.
         */
        amount_ratio: number /*f64*/
        /** Path to another [GPUParticles3D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.
         *  [b]Note:[/b] When [member sub_emitter] is set, the target [GPUParticles3D] node will no longer emit particles on its own.
         */
        sub_emitter: NodePath
        /** The amount of time each particle will exist (in seconds). The effective emission rate is [code](amount * amount_ratio) / lifetime[/code] particles per second. */
        lifetime: number /*f64*/
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.
         *  [b]Note:[/b] This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.
         */
        interp_to_end: number /*f64*/
        /** If [code]true[/code], only the number of particles equal to [member amount] will be emitted. */
        one_shot: boolean
        /** Amount of time to preprocess the particles before animation starts. Lets you start the animation some time after particles have started emitting. */
        preprocess: number /*f64*/
        /** Speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
        speed_scale: number /*f64*/
        /** Time ratio between each emission. If [code]0[/code], particles are emitted continuously. If [code]1[/code], all particles are emitted simultaneously. */
        explosiveness: number /*f64*/
        /** Emission randomness ratio. */
        randomness: number /*f64*/
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        /** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        /** The base diameter for particle collision in meters. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].
         *  [b]Note:[/b] Particles always have a spherical collision shape.
         */
        collision_base_size: number /*f64*/
        /** The [AABB] that determines the node's region which needs to be visible on screen for the particle system to be active. [member GeometryInstance3D.extra_cull_margin] is added on each of the AABB's axes. Particle collisions and attraction will only occur within this area.
         *  Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [AABB] can be grown via code or with the [b]Particles → Generate AABB[/b] editor tool.
         *  [b]Note:[/b] [member visibility_aabb] is overridden by [member GeometryInstance3D.custom_aabb] if that property is set to a non-default value.
         */
        visibility_aabb: AABB
        /** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        /** Particle draw order. Uses [enum DrawOrder] values.
         *  [b]Note:[/b] [constant DRAW_ORDER_INDEX] is the only option that supports motion vectors for effects like TAA. It is suggested to use this draw order if the particles are opaque to fix ghosting artifacts.
         */
        draw_order: number /*i64*/
        transform_align: number /*i64*/
        /** If [code]true[/code], enables particle trails using a mesh skinning system. Designed to work with [RibbonTrailMesh] and [TubeTrailMesh].
         *  [b]Note:[/b] [member BaseMaterial3D.use_particle_trails] must also be enabled on the particle mesh's material. Otherwise, setting [member trail_enabled] to [code]true[/code] will have no effect.
         *  [b]Note:[/b] Unlike [GPUParticles2D], the number of trail sections and subdivisions is set in the [RibbonTrailMesh] or the [TubeTrailMesh]'s properties.
         */
        trail_enabled: boolean
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is [code]true[/code]. */
        trail_lifetime: number /*f64*/
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        /** The number of draw passes when rendering particles. */
        draw_passes: number /*i64*/
        draw_skin: Skin
        readonly finished: Signal
    }
    class GPUParticles3DEditor extends GPUParticles3DEditorBase {
    }
    class GPUParticles3DEditorBase extends Control {
    }
    class GPUParticles3DEditorPlugin extends EditorPlugin {
    }
    class GPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract base class for 3D particle attractors. */
    class GPUParticlesAttractor3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        set_attenuation(attenuation: number /*f64*/): void
        get_attenuation(): number /*f64*/
        set_directionality(amount: number /*f64*/): void
        get_directionality(): number /*f64*/
        /** Adjusts the strength of the attractor. If [member strength] is negative, particles will be pushed in the opposite direction. Particles will be pushed [i]away[/i] from the attractor's origin if [member directionality] is [code]0.0[/code], or towards local +Z if [member directionality] is greater than [code]0.0[/code]. */
        strength: number /*f64*/
        /** The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges. */
        attenuation: number /*f64*/
        /** Adjusts how directional the attractor is. At [code]0.0[/code], the attractor is not directional at all: it will attract particles towards its center. At [code]1.0[/code], the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [member strength] is negative).
         *  [b]Note:[/b] If [member directionality] is greater than [code]0.0[/code], the direction in which particles are pushed can be changed by rotating the [GPUParticlesAttractor3D] node.
         */
        directionality: number /*f64*/
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the attractor. By default, all particles are affected by an attractor.
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.
         */
        cull_mask: number /*i64*/
    }
    /** A box-shaped attractor that influences particles from [GPUParticles3D] nodes. */
    class GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        /** The attractor box's size in 3D units. */
        size: Vector3
    }
    /** A spheroid-shaped attractor that influences particles from [GPUParticles3D] nodes. */
    class GPUParticlesAttractorSphere3D extends GPUParticlesAttractor3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        /** The attractor sphere's radius in 3D units.
         *  [b]Note:[/b] Stretched ellipses can be obtained by using non-uniform scaling on the [GPUParticlesAttractorSphere3D] node.
         */
        radius: number /*f64*/
    }
    /** A box-shaped attractor with varying directions and strengths defined in it that influences particles from [GPUParticles3D] nodes. */
    class GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        /** The size of the vector field box in 3D units. */
        size: Vector3
        /** The 3D texture to be used. Values are linearly interpolated between the texture's pixels.
         *  [b]Note:[/b] To get better performance, the 3D texture's resolution should reflect the [member size] of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.
         */
        texture: Texture3D
    }
    /** Abstract base class for 3D particle collision shapes affecting [GPUParticles3D] nodes. */
    class GPUParticlesCollision3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the collision shape. By default, all particles that have [member ParticleProcessMaterial.collision_mode] set to [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] will be affected by a collision shape.
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.
         */
        cull_mask: number /*i64*/
    }
    class GPUParticlesCollision3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A box-shaped 3D particle collision shape affecting [GPUParticles3D] nodes. */
    class GPUParticlesCollisionBox3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        /** The collision box's size in 3D units. */
        size: Vector3
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
    /** A real-time heightmap-shaped 3D particle collision shape affecting [GPUParticles3D] nodes. */
    class GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionHeightField3D.Resolution): void
        get_resolution(): GPUParticlesCollisionHeightField3D.Resolution
        set_update_mode(update_mode: GPUParticlesCollisionHeightField3D.UpdateMode): void
        get_update_mode(): GPUParticlesCollisionHeightField3D.UpdateMode
        set_follow_camera_enabled(enabled: boolean): void
        is_follow_camera_enabled(): boolean
        /** The collision heightmap's size in 3D units. To improve heightmap quality, [member size] should be set as small as possible while covering the parts of the scene you need. */
        size: Vector3
        /** Higher resolutions can represent small details more accurately in large scenes, at the cost of lower performance. If [member update_mode] is [constant UPDATE_MODE_ALWAYS], consider using the lowest resolution possible. */
        resolution: number /*i64*/
        /** The update policy to use for the generated heightmap. */
        update_mode: number /*i64*/
        /** If [code]true[/code], the [GPUParticlesCollisionHeightField3D] will follow the current camera in global space. The [GPUParticlesCollisionHeightField3D] does not need to be a child of the [Camera3D] node for this to work.
         *  Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering [member resolution] to improve performance if [member follow_camera_enabled] is [code]true[/code].
         */
        follow_camera_enabled: boolean
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
    /** A baked signed distance field 3D particle collision shape affecting [GPUParticles3D] nodes. */
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
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_bake_mask_value(layer_number: number /*i64*/): boolean
        /** The collision SDF's size in 3D units. To improve SDF quality, the [member size] should be set as small as possible while covering the parts of the scene you need. */
        size: Vector3
        /** The bake resolution to use for the signed distance field [member texture]. The texture must be baked again for changes to the [member resolution] property to be effective. Higher resolutions have a greater performance cost and take more time to bake. Higher resolutions also result in larger baked textures, leading to increased VRAM and storage space requirements. To improve performance and reduce bake times, use the lowest resolution possible for the object you're representing the collision of. */
        resolution: number /*i64*/
        /** The collision shape's thickness. Unlike other particle colliders, [GPUParticlesCollisionSDF3D] is actually hollow on the inside. [member thickness] can be increased to prevent particles from tunneling through the collision shape at high speeds, or when the [GPUParticlesCollisionSDF3D] is moved. */
        thickness: number /*f64*/
        /** The visual layers to account for when baking the particle collision SDF. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated particle collision SDF. By default, all objects are taken into account for the particle collision SDF baking. */
        bake_mask: number /*i64*/
        /** The 3D texture representing the signed distance field. */
        texture: Texture3D
    }
    class GPUParticlesCollisionSDF3DEditorPlugin extends EditorPlugin {
    }
    /** A sphere-shaped 3D particle collision shape affecting [GPUParticles3D] nodes. */
    class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        /** The collision sphere's radius in 3D units. */
        radius: number /*f64*/
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
    /** A physics joint that allows for complex movement and rotation between two 3D physics bodies. */
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
    /** Base node for geometry-based visual instances. */
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
        /** Set the value of a shader uniform for this instance only ([url=$DOCS_URL/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].
         *  [b]Note:[/b] For a shader uniform to be assignable on a per-instance basis, it [i]must[/i] be defined with [code]instance uniform ...[/code] rather than [code]uniform ...[/code] in the shader code.
         *  [b]Note:[/b] [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
         *  [b]Note:[/b] Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.
         */
        set_instance_shader_parameter(name: StringName, value: any): void
        /** Get the value of a shader parameter as set on this instance. */
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
        /** The material override for the whole geometry.
         *  If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.
         */
        material_override: BaseMaterial3D | ShaderMaterial
        /** The material overlay for the whole geometry.
         *  If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.
         */
        material_overlay: BaseMaterial3D | ShaderMaterial
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). [code]0.0[/code] is fully opaque, while [code]1.0[/code] is fully transparent. Values greater than [code]0.0[/code] (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than [code]0.0[/code] (exclusive) will [i]not[/i] disable shadow rendering.
         *  In spatial shaders, [code]1.0 - transparency[/code] is set as the default value of the [code]ALPHA[/code] built-in.
         *  [b]Note:[/b] [member transparency] is clamped between [code]0.0[/code] and [code]1.0[/code], so this property cannot be used to make transparent materials more opaque than they originally are.
         */
        transparency: number /*f64*/
        /** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
        cast_shadow: number /*i64*/
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        extra_cull_margin: number /*f64*/
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to [code]0.0[/code]. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as [code]AABB(-10000, -10000, -10000, 20000, 20000, 20000)[/code]. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        custom_aabb: AABB
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.
         *  Useful for testing level of detail transitions in the editor.
         */
        lod_bias: number /*f64*/
        /** If [code]true[/code], disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.
         *  [b]Note:[/b] [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as [code]AABB(-10000, -10000, -10000, 20000, 20000, 20000)[/code].
         */
        ignore_occlusion_culling: boolean
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).
         *  [b]Note:[/b] Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].
         */
        gi_mode: number /*i64*/
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes. */
        gi_lightmap_scale: number /*i64*/
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_begin: number /*f64*/
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than [code]0.0[/code] for the effect to be noticeable.
         */
        visibility_range_begin_margin: number /*f64*/
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_end: number /*f64*/
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than [code]0.0[/code] for the effect to be noticeable.
         */
        visibility_range_end_margin: number /*f64*/
        /** Controls which instances will be faded when approaching the limits of the visibility range. See [enum VisibilityRangeFadeMode] for possible values. */
        visibility_range_fade_mode: number /*i64*/
    }
    class Gizmo3DHelper extends RefCounted {
    }
    class GodotJSEditorPlugin extends EditorPlugin {
    }
    class GodotJSREPL extends Control {
    }
    class GodotJSScript extends Script {
    }
    class GodotPhysicsDirectSpaceState2D extends PhysicsDirectSpaceState2D {
    }
    class GotoLineDialog extends ConfirmationDialog {
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
    /** A color transition. */
    class Gradient extends Resource {
        /** Adds the specified color to the gradient, with the specified offset. */
        add_point(offset: number /*f64*/, color: Color): void
        /** Removes the color at index [param point]. */
        remove_point(point: number /*i64*/): void
        /** Sets the offset for the gradient color at index [param point]. */
        set_offset(point: number /*i64*/, offset: number /*f64*/): void
        /** Returns the offset of the gradient color at index [param point]. */
        get_offset(point: number /*i64*/): number /*f64*/
        /** Reverses/mirrors the gradient.
         *  [b]Note:[/b] This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].
         */
        reverse(): void
        /** Sets the color of the gradient color at index [param point]. */
        set_color(point: number /*i64*/, color: Color): void
        /** Returns the color of the gradient color at index [param point]. */
        get_color(point: number /*i64*/): Color
        /** Returns the interpolated color specified by [param offset]. */
        sample(offset: number /*f64*/): Color
        /** Returns the number of colors in the gradient. */
        get_point_count(): number /*i64*/
        set_offsets(offsets: PackedFloat32Array): void
        get_offsets(): PackedFloat32Array
        set_colors(colors: PackedColorArray): void
        get_colors(): PackedColorArray
        set_interpolation_mode(interpolation_mode: Gradient.InterpolationMode): void
        get_interpolation_mode(): Gradient.InterpolationMode
        set_interpolation_color_space(interpolation_color_space: Gradient.ColorSpace): void
        get_interpolation_color_space(): Gradient.ColorSpace
        /** The algorithm used to interpolate between points of the gradient. See [enum InterpolationMode] for available modes. */
        interpolation_mode: number /*i64*/
        /** The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [enum ColorSpace] for available modes.
         *  [b]Note:[/b] This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].
         */
        interpolation_color_space: number /*i64*/
        /** Gradient's offsets returned as a [PackedFloat32Array].
         *  [b]Note:[/b] This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_offset] method (for updating offsets individually) or assign to this property directly (for bulk-updating all offsets at once).
         */
        offsets: PackedFloat32Array
        /** Gradient's colors returned as a [PackedColorArray].
         *  [b]Note:[/b] This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_color] method (for updating colors individually) or assign to this property directly (for bulk-updating all colors at once).
         */
        colors: PackedColorArray
    }
    class GradientEditorPlugin extends EditorPlugin {
    }
    /** A 1D texture that uses colors obtained from a [Gradient]. */
    class GradientTexture1D extends Texture2D {
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: number /*i64*/): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
        /** The [Gradient] used to fill the texture. */
        gradient: Gradient
        /** The number of color samples that will be obtained from the [Gradient]. */
        width: number /*i64*/
        /** If [code]true[/code], the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is [code]true[/code]. If [code]false[/code], the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        use_hdr: boolean
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
    /** A 2D texture that creates a pattern with colors obtained from a [Gradient]. */
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
        /** The [Gradient] used to fill the texture. */
        gradient: Gradient
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        width: number /*i64*/
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        height: number /*i64*/
        /** If [code]true[/code], the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is [code]true[/code]. If [code]false[/code], the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        use_hdr: boolean
        /** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
        fill: number /*i64*/
        /** The initial offset used to fill the texture specified in UV coordinates. */
        fill_from: Vector2
        /** The final offset used to fill the texture specified in UV coordinates. */
        fill_to: Vector2
        /** The gradient repeat type, one of the [enum Repeat] values. The texture is filled starting from [member fill_from] to [member fill_to] offsets by default, but the gradient fill can be repeated to cover the entire texture. */
        repeat: number /*i64*/
    }
    class GradientTexture2DEditorPlugin extends EditorPlugin {
    }
    namespace GraphEdit {
        enum PanningScheme {
            SCROLL_ZOOMS = 0,
            SCROLL_PANS = 1,
        }
    }
    /** An editor for graph-like structures, using [GraphNode]s. */
    class GraphEdit extends Control {
        /* gdvirtual */ _is_in_input_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        /* gdvirtual */ _is_in_output_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        /* gdvirtual */ _get_connection_line(from_position: Vector2, to_position: Vector2): PackedVector2Array
        /* gdvirtual */ _is_node_hover_valid(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created. */
        connect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): GodotError
        /** Returns [code]true[/code] if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        is_node_connected(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): void
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        set_connection_activity(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/, amount: number /*f64*/): void
        /** Returns an Array containing the list of connections. A connection consists in a structure of the form [code]{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }[/code]. */
        get_connection_list(): Array
        /** Removes all connections between nodes. */
        clear_connections(): void
        /** Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.
         *  This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.
         *  [b]Note:[/b] This method suppresses any other connection request signals apart from [signal connection_drag_ended].
         */
        force_connection_drag_end(): void
        get_scroll_offset(): Vector2
        set_scroll_offset(offset: Vector2): void
        /** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
        add_valid_right_disconnect_type(type: number /*i64*/): void
        /** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
        remove_valid_right_disconnect_type(type: number /*i64*/): void
        /** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
        add_valid_left_disconnect_type(type: number /*i64*/): void
        /** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
        remove_valid_left_disconnect_type(type: number /*i64*/): void
        /** Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
         *  See also [method is_valid_connection_type] and [method remove_valid_connection_type].
         */
        add_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        /** Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
         *  See also [method is_valid_connection_type].
         */
        remove_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        /** Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
         *  See also [method add_valid_connection_type] and [method remove_valid_connection_type].
         */
        is_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): boolean
        /** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
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
        /** Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_menu_hbox(): HBoxContainer
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrange_nodes(): void
        /** Sets the specified [param node] as the one selected. */
        set_selected(node: Node): void
        /** The scroll offset. */
        scroll_offset: Vector2
        /** If [code]true[/code], the grid is visible. */
        show_grid: boolean
        /** If [code]true[/code], enables snapping. */
        snapping_enabled: boolean
        /** The snapping distance in pixels, also determines the grid line distance. */
        snapping_distance: number /*i64*/
        /** Defines the control scheme for panning with mouse wheel. */
        panning_scheme: number /*i64*/
        /** If [code]true[/code], enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        right_disconnects: boolean
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        connection_lines_curvature: number /*f64*/
        /** The thickness of the lines between the nodes. */
        connection_lines_thickness: number /*f64*/
        /** If [code]true[/code], the lines between nodes will use antialiasing. */
        connection_lines_antialiased: boolean
        /** The current zoom value. */
        zoom: number /*f64*/
        /** The lower zoom limit. */
        zoom_min: number /*f64*/
        /** The upper zoom limit. */
        zoom_max: number /*f64*/
        /** The step of each zoom level. */
        zoom_step: number /*f64*/
        /** If [code]true[/code], the minimap is visible. */
        minimap_enabled: boolean
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        minimap_size: Vector2
        /** The opacity of the minimap rectangle. */
        minimap_opacity: number /*f64*/
        /** If [code]true[/code], the menu toolbar is visible. */
        show_menu: boolean
        /** If [code]true[/code], the label with the current zoom level is visible. The zoom level is displayed in percents. */
        show_zoom_label: boolean
        /** If [code]true[/code], buttons that allow to change and reset the zoom level are visible. */
        show_zoom_buttons: boolean
        /** If [code]true[/code], buttons that allow to configure grid and snapping options are visible. */
        show_grid_buttons: boolean
        /** If [code]true[/code], the button to toggle the minimap is visible. */
        show_minimap_button: boolean
        /** If [code]true[/code], the button to automatically arrange graph nodes is visible. */
        show_arrange_button: boolean
        readonly connection_request: Signal
        readonly disconnection_request: Signal
        readonly connection_to_empty: Signal
        readonly connection_from_empty: Signal
        readonly connection_drag_started: Signal
        readonly connection_drag_ended: Signal
        readonly copy_nodes_request: Signal
        readonly paste_nodes_request: Signal
        readonly duplicate_nodes_request: Signal
        readonly delete_nodes_request: Signal
        readonly node_selected: Signal
        readonly node_deselected: Signal
        readonly popup_request: Signal
        readonly begin_node_move: Signal
        readonly end_node_move: Signal
        readonly scroll_offset_changed: Signal
    }
    class GraphEditFilter extends Control {
    }
    class GraphEditMinimap extends Control {
    }
    /** A container that represents a basic element that can be placed inside a [GraphEdit] control. */
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
        /** The offset of the GraphElement, relative to the scroll offset of the [GraphEdit]. */
        position_offset: Vector2
        /** If [code]true[/code], the user can resize the GraphElement.
         *  [b]Note:[/b] Dragging the handle will only emit the [signal resize_request] signal, the GraphElement needs to be resized manually.
         */
        resizable: boolean
        /** If [code]true[/code], the user can drag the GraphElement. */
        draggable: boolean
        /** If [code]true[/code], the user can select the GraphElement. */
        selectable: boolean
        /** If [code]true[/code], the GraphElement is selected. */
        selected: boolean
        readonly node_selected: Signal
        readonly node_deselected: Signal
        readonly raise_request: Signal
        readonly delete_request: Signal
        readonly resize_request: Signal
        readonly dragged: Signal
        readonly position_offset_changed: Signal
    }
    /** A container with connection ports, representing a node in a [GraphEdit]. */
    class GraphNode extends GraphElement {
        /* gdvirtual */ _draw_port(slot_index: number /*i64*/, position: Vector2i, left: boolean, color: Color): void
        set_title(title: string): void
        get_title(): string
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons. */
        get_titlebar_hbox(): HBoxContainer
        /** Sets properties of the slot with the given [param slot_index].
         *  If [param enable_left_port]/[param enable_right_port] is [code]true[/code], a port will appear and the slot will be able to be connected from this side.
         *  With [param type_left]/[param type_right] an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent [GraphEdit] (see [method GraphEdit.add_valid_connection_type]). Keep in mind that the [GraphEdit] has the final say in accepting the connection. Type compatibility simply allows the [signal GraphEdit.connection_request] signal to be emitted.
         *  Ports can be further customized using [param color_left]/[param color_right] and [param custom_icon_left]/[param custom_icon_right]. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.
         *  Additionally, [param draw_stylebox] can be used to enable or disable drawing of the background stylebox for each slot. See [theme_item slot].
         *  Individual properties can also be set using one of the [code]set_slot_*[/code] methods.
         *  [b]Note:[/b] This method only sets properties of the slot. To create the slot itself, add a [Control]-derived child to the GraphNode.
         */
        set_slot(slot_index: number /*i64*/, enable_left_port: boolean, type_left: number /*i64*/, color_left: Color, enable_right_port: boolean, type_right: number /*i64*/, color_right: Color, custom_icon_left: Texture2D = <any> {} /*compound.type from nil*/, custom_icon_right: Texture2D = <any> {} /*compound.type from nil*/, draw_stylebox: boolean = true): void
        /** Disables the slot with the given [param slot_index]. This will remove the corresponding input and output port from the GraphNode. */
        clear_slot(slot_index: number /*i64*/): void
        /** Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode. */
        clear_all_slots(): void
        /** Returns [code]true[/code] if left (input) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_left(slot_index: number /*i64*/): boolean
        /** Toggles the left (input) side of the slot with the given [param slot_index]. If [param enable] is [code]true[/code], a port will appear on the left side and the slot will be able to be connected from this side. */
        set_slot_enabled_left(slot_index: number /*i64*/, enable: boolean): void
        /** Sets the left (input) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        set_slot_type_left(slot_index: number /*i64*/, type: number /*i64*/): void
        /** Returns the left (input) type of the slot with the given [param slot_index]. */
        get_slot_type_left(slot_index: number /*i64*/): number /*i64*/
        /** Sets the [Color] of the left (input) side of the slot with the given [param slot_index] to [param color]. */
        set_slot_color_left(slot_index: number /*i64*/, color: Color): void
        /** Returns the left (input) [Color] of the slot with the given [param slot_index]. */
        get_slot_color_left(slot_index: number /*i64*/): Color
        /** Returns [code]true[/code] if right (output) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_right(slot_index: number /*i64*/): boolean
        /** Toggles the right (output) side of the slot with the given [param slot_index]. If [param enable] is [code]true[/code], a port will appear on the right side and the slot will be able to be connected from this side. */
        set_slot_enabled_right(slot_index: number /*i64*/, enable: boolean): void
        /** Sets the right (output) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        set_slot_type_right(slot_index: number /*i64*/, type: number /*i64*/): void
        /** Returns the right (output) type of the slot with the given [param slot_index]. */
        get_slot_type_right(slot_index: number /*i64*/): number /*i64*/
        /** Sets the [Color] of the right (output) side of the slot with the given [param slot_index] to [param color]. */
        set_slot_color_right(slot_index: number /*i64*/, color: Color): void
        /** Returns the right (output) [Color] of the slot with the given [param slot_index]. */
        get_slot_color_right(slot_index: number /*i64*/): Color
        /** Returns true if the background [StyleBox] of the slot with the given [param slot_index] is drawn. */
        is_slot_draw_stylebox(slot_index: number /*i64*/): boolean
        /** Toggles the background [StyleBox] of the slot with the given [param slot_index]. */
        set_slot_draw_stylebox(slot_index: number /*i64*/, enable: boolean): void
        /** Returns the number of slots with an enabled input port. */
        get_input_port_count(): number /*i64*/
        /** Returns the position of the input port with the given [param port_idx]. */
        get_input_port_position(port_idx: number /*i64*/): Vector2
        /** Returns the type of the input port with the given [param port_idx]. */
        get_input_port_type(port_idx: number /*i64*/): number /*i64*/
        /** Returns the [Color] of the input port with the given [param port_idx]. */
        get_input_port_color(port_idx: number /*i64*/): Color
        /** Returns the corresponding slot index of the input port with the given [param port_idx]. */
        get_input_port_slot(port_idx: number /*i64*/): number /*i64*/
        /** Returns the number of slots with an enabled output port. */
        get_output_port_count(): number /*i64*/
        /** Returns the position of the output port with the given [param port_idx]. */
        get_output_port_position(port_idx: number /*i64*/): Vector2
        /** Returns the type of the output port with the given [param port_idx]. */
        get_output_port_type(port_idx: number /*i64*/): number /*i64*/
        /** Returns the [Color] of the output port with the given [param port_idx]. */
        get_output_port_color(port_idx: number /*i64*/): Color
        /** Returns the corresponding slot index of the output port with the given [param port_idx]. */
        get_output_port_slot(port_idx: number /*i64*/): number /*i64*/
        /** The text displayed in the GraphNode's title bar. */
        title: string
        readonly slot_updated: Signal
    }
    /** A container that arranges its child controls in a grid layout. */
    class GridContainer extends Container {
        set_columns(columns: number /*i64*/): void
        get_columns(): number /*i64*/
        /** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
        columns: number /*i64*/
    }
    /** Node for 3D tile-based maps. */
    class GridMap extends Node3D {
        static readonly INVALID_CELL_ITEM = -1
        set_collision_layer(layer: number /*i64*/): void
        get_collision_layer(): number /*i64*/
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        set_collision_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_layer_value(layer_number: number /*i64*/): boolean
        set_collision_priority(priority: number /*f64*/): void
        get_collision_priority(): number /*f64*/
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
        set_cell_scale(scale: number /*f64*/): void
        get_cell_scale(): number /*f64*/
        set_octant_size(size: number /*i64*/): void
        get_octant_size(): number /*i64*/
        /** Sets the mesh index for the cell referenced by its grid coordinates.
         *  A negative item index such as [constant INVALID_CELL_ITEM] will clear the cell.
         *  Optionally, the item's orientation can be passed. For valid orientation values, see [method get_orthogonal_index_from_basis].
         */
        set_cell_item(position: Vector3i, item: number /*i64*/, orientation: number /*i64*/ = 0): void
        /** The [MeshLibrary] item index located at the given grid coordinates. If the cell is empty, [constant INVALID_CELL_ITEM] will be returned. */
        get_cell_item(position: Vector3i): number /*i64*/
        /** The orientation of the cell at the given grid coordinates. [code]-1[/code] is returned if the cell is empty. */
        get_cell_item_orientation(position: Vector3i): number /*i64*/
        /** Returns the basis that gives the specified cell its orientation. */
        get_cell_item_basis(position: Vector3i): Basis
        /** Returns one of 24 possible rotations that lie along the vectors (x,y,z) with each component being either -1, 0, or 1. For further details, refer to the Godot source code. */
        get_basis_with_orthogonal_index(index: number /*i64*/): Basis
        /** This function considers a discretization of rotations into 24 points on unit sphere, lying along the vectors (x,y,z) with each component being either -1, 0, or 1, and returns the index (in the range from 0 to 23) of the point best representing the orientation of the object. For further details, refer to the Godot source code. */
        get_orthogonal_index_from_basis(basis: Basis): number /*i64*/
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node3D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector3): Vector3i
        /** Returns the position of a grid cell in the GridMap's local coordinate space. To convert the returned value into global coordinates, use [method Node3D.to_global]. See also [method map_to_local]. */
        map_to_local(map_position: Vector3i): Vector3
        _update_octants_callback(): void
        /** [i]Obsoleted.[/i] Use [signal Resource.changed] instead. */
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
        get_used_cells_by_item(item: number /*i64*/): Array
        /** Returns an array of [Transform3D] and [Mesh] references corresponding to the non-empty cells in the grid. The transforms are specified in local space. */
        get_meshes(): Array
        /** Returns an array of [ArrayMesh]es and [Transform3D] references of all bake meshes that exist within the current GridMap. */
        get_bake_meshes(): Array
        /** Returns [RID] of a baked mesh with the given [param idx]. */
        get_bake_mesh_instance(idx: number /*i64*/): RID
        /** Clears all baked meshes. See [method make_baked_meshes]. */
        clear_baked_meshes(): void
        /** Bakes lightmap data for all meshes in the assigned [MeshLibrary]. */
        make_baked_meshes(gen_lightmap_uv: boolean = false, lightmap_uv_texel_size: number /*f64*/ = 0.1): void
        /** The assigned [MeshLibrary]. */
        mesh_library: MeshLibrary
        /** Overrides the default friction and bounce physics properties for the whole [GridMap]. */
        physics_material: PhysicsMaterial
        /** The dimensions of the grid's cells.
         *  This does not affect the size of the meshes. See [member cell_scale].
         */
        cell_size: Vector3
        /** The size of each octant measured in number of cells. This applies to all three axis. */
        cell_octant_size: number /*i64*/
        /** If [code]true[/code], grid items are centered on the X axis. */
        cell_center_x: boolean
        /** If [code]true[/code], grid items are centered on the Y axis. */
        cell_center_y: boolean
        /** If [code]true[/code], grid items are centered on the Z axis. */
        cell_center_z: boolean
        /** The scale of the cell items.
         *  This does not affect the size of the grid cells themselves, only the items in them. This can be used to make cell items overlap their neighbors.
         */
        cell_scale: number /*f64*/
        /** The physics layers this GridMap is in.
         *  GridMaps act as static bodies, meaning they aren't affected by gravity or other forces. They only affect other physics bodies that collide with them.
         */
        collision_layer: number /*i64*/
        /** The physics layers this GridMap detects collisions in. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        collision_priority: number /*f64*/
        /** If [code]true[/code], this GridMap creates a navigation region for each cell that uses a [member mesh_library] item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [MeshLibrary]'s item. */
        bake_navigation: boolean
        readonly cell_size_changed: Signal
        readonly changed: Signal
    }
    class GridMapEditor extends VBoxContainer {
        _configure(): void
        _set_selection(_unnamed_arg0: boolean, _unnamed_arg1: Vector3, _unnamed_arg2: Vector3): void
    }
    class GridMapEditorPlugin extends EditorPlugin {
    }
    /** A physics joint that restricts the movement of two 2D physics bodies to a fixed axis. */
    class GrooveJoint2D extends Joint2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_initial_offset(offset: number /*f64*/): void
        get_initial_offset(): number /*f64*/
        /** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
        length: number /*f64*/
        /** The body B's initial anchor position defined by the joint's origin and a local offset [member initial_offset] along the joint's Y axis (along the groove). */
        initial_offset: number /*f64*/
    }
    class GroupDialog extends AcceptDialog {
        _delete_group_item(_unnamed_arg0: string): void
        _add_group(_unnamed_arg0: string): void
        _rename_group_item(_unnamed_arg0: string, _unnamed_arg1: string): void
        _group_selected(): void
        readonly group_edited: Signal
    }
    class GroupsEditor extends VBoxContainer {
        update_tree(): void
        _group_selected(): void
    }
    /** A container that arranges its child controls horizontally. */
    class HBoxContainer extends BoxContainer {
    }
    /** A container that arranges its child controls horizontally and wraps them around at the borders. */
    class HFlowContainer extends FlowContainer {
    }
    /** Used to create an HMAC for a message using a key. */
    class HMACContext extends RefCounted {
        /** Initializes the HMACContext. This method cannot be called again on the same HMACContext until [method finish] has been called. */
        start(hash_type: HashingContext.HashType, key: PackedByteArray): GodotError
        /** Updates the message to be HMACed. This can be called multiple times before [method finish] is called to append [param data] to the message, but cannot be called until [method start] has been called. */
        update(data: PackedByteArray): GodotError
        /** Returns the resulting HMAC. If the HMAC failed, an empty [PackedByteArray] is returned. */
        finish(): PackedByteArray
    }
    /** A horizontal scrollbar that goes from left (min) to right (max). */
    class HScrollBar extends ScrollBar {
    }
    /** A horizontal line used for separating other controls. */
    class HSeparator extends Separator {
    }
    /** A horizontal slider that goes from left (min) to right (max). */
    class HSlider extends Slider {
    }
    /** A container that splits two child controls horizontally and provides a grabber for adjusting the split ratio. */
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
    /** Low-level hyper-text transfer protocol client. */
    class HTTPClient extends RefCounted {
        /** Connects to a host. This needs to be done before any requests are sent.
         *  If no [param port] is specified (or [code]-1[/code] is used), it is automatically set to 80 for HTTP and 443 for HTTPS. You can pass the optional [param tls_options] parameter to customize the trusted certification authorities, or the common name verification when using HTTPS. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].
         */
        connect_to_host(host: string, port: number /*i64*/ = -1, tls_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        set_connection(connection: StreamPeer): void
        get_connection(): StreamPeer
        /** Sends a raw request to the connected host.
         *  The URL parameter is usually just the part after the host, so for [code]https://somehost.com/index.php[/code], it is [code]/index.php[/code]. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, [code]*[/code] is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component ([code]host:port[/code]).
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].
         *  Sends the body data raw, as a byte array and does not encode it in any way.
         */
        request_raw(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: PackedByteArray): GodotError
        /** Sends a request to the connected host.
         *  The URL parameter is usually just the part after the host, so for [code]https://somehost.com/index.php[/code], it is [code]/index.php[/code]. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, [code]*[/code] is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component ([code]host:port[/code]).
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].
         *  To create a POST request with query strings to push to the server, do:
         *  
         *  [b]Note:[/b] The [param body] parameter is ignored if [param method] is [constant HTTPClient.METHOD_GET]. This is because GET methods can't contain request data. As a workaround, you can pass request data as a query string in the URL. See [method String.uri_encode] for an example.
         */
        request(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: string = ''): GodotError
        /** Closes the current connection, allowing reuse of this [HTTPClient]. */
        close(): void
        /** If [code]true[/code], this [HTTPClient] has a response available. */
        has_response(): boolean
        /** If [code]true[/code], this [HTTPClient] has a response that is chunked. */
        is_response_chunked(): boolean
        /** Returns the response's HTTP status code. */
        get_response_code(): number /*i64*/
        /** Returns the response headers. */
        get_response_headers(): PackedStringArray
        /** Returns all response headers as a Dictionary of structure [code]{ "key": "value1; value2" }[/code] where the case-sensitivity of the keys and values is kept like the server delivers it. A value is a simple String, this string can have more than one value where "; " is used as separator.
         *  [b]Example:[/b]
         *  
         */
        get_response_headers_as_dictionary(): Dictionary
        /** Returns the response's body length.
         *  [b]Note:[/b] Some Web servers may not send a body length. In this case, the value returned will be [code]-1[/code]. If using chunked transfer encoding, the body length will also be [code]-1[/code].
         *  [b]Note:[/b] This function always returns [code]-1[/code] on the Web platform due to browsers limitations.
         */
        get_response_body_length(): number /*i64*/
        /** Reads one chunk from the response. */
        read_response_body_chunk(): PackedByteArray
        set_read_chunk_size(bytes: number /*i64*/): void
        get_read_chunk_size(): number /*i64*/
        set_blocking_mode(enabled: boolean): void
        is_blocking_mode_enabled(): boolean
        /** Returns a [enum Status] constant. Need to call [method poll] in order to get status updates. */
        get_status(): HTTPClient.Status
        /** This needs to be called in order to have any request processed. Check results with [method get_status]. */
        poll(): GodotError
        /** Sets the proxy server for HTTP requests.
         *  The proxy server is unset if [param host] is empty or [param port] is -1.
         */
        set_http_proxy(host: string, port: number /*i64*/): void
        /** Sets the proxy server for HTTPS requests.
         *  The proxy server is unset if [param host] is empty or [param port] is -1.
         */
        set_https_proxy(host: string, port: number /*i64*/): void
        /** Generates a GET/POST application/x-www-form-urlencoded style query string from a provided dictionary, e.g.:
         *  
         *  Furthermore, if a key has a [code]null[/code] value, only the key itself is added, without equal sign and value. If the value is an array, for each value in it a pair with the same key is added.
         *  
         */
        query_string_from_dict(fields: Dictionary): string
        /** If [code]true[/code], execution will block until all data is read from the response. */
        blocking_mode_enabled: boolean
        /** The connection to use for this client. */
        connection: StreamPeer
        /** The size of the buffer used and maximum bytes to read per iteration. See [method read_response_body_chunk]. */
        read_chunk_size: number /*i64*/
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
    /** A node with the ability to send HTTP(S) requests. */
    class HTTPRequest extends Node {
        /** Creates request on the underlying [HTTPClient]. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].
         *  Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.
         *  [b]Note:[/b] When [param method] is [constant HTTPClient.METHOD_GET], the payload sent via [param request_data] might be ignored by the server or even cause the server to reject the request (check [url=https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1]RFC 7231 section 4.3.1[/url] for more details). As a workaround, you can send data as a query string in the URL (see [method String.uri_encode] for an example).
         *  [b]Note:[/b] It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.
         */
        request(url: string, custom_headers: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/, method: HTTPClient.Method = 0, request_data: string = ''): GodotError
        /** Creates request on the underlying [HTTPClient] using a raw array of bytes for the request body. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].
         *  Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.
         */
        request_raw(url: string, custom_headers: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/, method: HTTPClient.Method = 0, request_data_raw: PackedByteArray = <any> {} /*compound.type from 29([object Object])*/): GodotError
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
        set_body_size_limit(bytes: number /*i64*/): void
        get_body_size_limit(): number /*i64*/
        set_max_redirects(amount: number /*i64*/): void
        get_max_redirects(): number /*i64*/
        set_download_file(path: string): void
        get_download_file(): string
        /** Returns the number of bytes this HTTPRequest downloaded. */
        get_downloaded_bytes(): number /*i64*/
        /** Returns the response body length.
         *  [b]Note:[/b] Some Web servers may not send a body length. In this case, the value returned will be [code]-1[/code]. If using chunked transfer encoding, the body length will also be [code]-1[/code].
         */
        get_body_size(): number /*i64*/
        _request_done(_unnamed_arg0: number /*i64*/, _unnamed_arg1: number /*i64*/, _unnamed_arg2: PackedStringArray, _unnamed_arg3: PackedByteArray): void
        set_timeout(timeout: number /*f64*/): void
        get_timeout(): number /*f64*/
        set_download_chunk_size(chunk_size: number /*i64*/): void
        get_download_chunk_size(): number /*i64*/
        /** Sets the proxy server for HTTP requests.
         *  The proxy server is unset if [param host] is empty or [param port] is -1.
         */
        set_http_proxy(host: string, port: number /*i64*/): void
        /** Sets the proxy server for HTTPS requests.
         *  The proxy server is unset if [param host] is empty or [param port] is -1.
         */
        set_https_proxy(host: string, port: number /*i64*/): void
        /** The file to download into. Will output any received file into it. */
        download_file: string
        /** The size of the buffer used and maximum bytes to read per iteration. See [member HTTPClient.read_chunk_size].
         *  Set this to a lower value (e.g. 4096 for 4 KiB) when downloading small files to decrease memory usage at the cost of download speeds.
         */
        download_chunk_size: number /*i64*/
        /** If [code]true[/code], multithreading is used to improve performance. */
        use_threads: boolean
        /** If [code]true[/code], this header will be added to each request: [code]Accept-Encoding: gzip, deflate[/code] telling servers that it's okay to compress response bodies.
         *  Any Response body declaring a [code]Content-Encoding[/code] of either [code]gzip[/code] or [code]deflate[/code] will then be automatically decompressed, and the uncompressed bytes will be delivered via [signal request_completed].
         *  If the user has specified their own [code]Accept-Encoding[/code] header, then no header will be added regardless of [member accept_gzip].
         *  If [code]false[/code] no header will be added, and no decompression will be performed on response bodies. The raw bytes of the response body will be returned via [signal request_completed].
         */
        accept_gzip: boolean
        /** Maximum allowed size for response bodies. If the response body is compressed, this will be used as the maximum allowed size for the decompressed body. */
        body_size_limit: number /*i64*/
        /** Maximum number of allowed redirects. */
        max_redirects: number /*i64*/
        /** The duration to wait in seconds before a request times out. If [member timeout] is set to [code]0.0[/code] then the request will never time out. For simple requests, such as communication with a REST API, it is recommended that [member timeout] is set to a value suitable for the server response time (e.g. between [code]1.0[/code] and [code]10.0[/code]). This will help prevent unwanted timeouts caused by variation in server response times while still allowing the application to detect when a request has timed out. For larger requests such as file downloads it is suggested the [member timeout] be set to [code]0.0[/code], disabling the timeout functionality. This will help to prevent large transfers from failing due to exceeding the timeout value. */
        timeout: number /*f64*/
        readonly request_completed: Signal
    }
}
