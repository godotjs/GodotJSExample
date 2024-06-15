// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class WindowWrapper extends MarginContainer {
        readonly window_visibility_changed: Signal
        readonly window_close_requested: Signal
    }
    class World2D extends Resource {
        get_canvas(): RID
        get_space(): RID
        get_navigation_map(): RID
        get_direct_space_state(): PhysicsDirectSpaceState2D
        readonly canvas: RID
        readonly space: RID
        readonly navigation_map: RID
        readonly direct_space_state: PhysicsDirectSpaceState2D
    }
    class World3D extends Resource {
        get_space(): RID
        get_navigation_map(): RID
        get_scenario(): RID
        set_environment(env: Environment): void
        get_environment(): Environment
        set_fallback_environment(env: Environment): void
        get_fallback_environment(): Environment
        set_camera_attributes(attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        get_direct_space_state(): PhysicsDirectSpaceState3D
        environment: Environment
        fallback_environment: Environment
        camera_attributes: any /*CameraAttributesPractical,CameraAttributesPhysical*/
        readonly space: RID
        readonly navigation_map: RID
        readonly scenario: RID
        readonly direct_space_state: PhysicsDirectSpaceState3D
    }
    class WorldBoundaryShape2D extends Shape2D {
        set_normal(normal: Vector2): void
        get_normal(): Vector2
        set_distance(distance: number /*f64*/): void
        get_distance(): number /*f64*/
        normal: Vector2
        distance: number /*f64*/
    }
    class WorldBoundaryShape3D extends Shape3D {
        set_plane(plane: Plane): void
        get_plane(): Plane
        plane: Plane
    }
    class WorldEnvironment extends Node {
        set_environment(env: Environment): void
        get_environment(): Environment
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        environment: Environment
        camera_attributes: any /*CameraAttributesPractical,CameraAttributesPhysical*/
    }
    class X509Certificate extends Resource {
        save(path: string): GodotError
        load(path: string): GodotError
        save_to_string(): string
        load_from_string(string_: string): GodotError
    }
    namespace XMLParser {
        enum NodeType {
            NODE_NONE = 0,
            NODE_ELEMENT = 1,
            NODE_ELEMENT_END = 2,
            NODE_TEXT = 3,
            NODE_COMMENT = 4,
            NODE_CDATA = 5,
            NODE_UNKNOWN = 6,
        }
    }
    class XMLParser extends RefCounted {
        read(): GodotError
        get_node_type(): XMLParser.NodeType
        get_node_name(): string
        get_node_data(): string
        get_node_offset(): number /*i64*/
        get_attribute_count(): number /*i64*/
        get_attribute_name(idx: number /*i64*/): string
        get_attribute_value(idx: number /*i64*/): string
        has_attribute(name: string): boolean
        get_named_attribute_value(name: string): string
        get_named_attribute_value_safe(name: string): string
        is_empty(): boolean
        get_current_line(): number /*i64*/
        skip_section(): void
        seek(position: number /*i64*/): GodotError
        open(file: string): GodotError
        open_buffer(buffer: PackedByteArray): GodotError
    }
    class XRAnchor3D extends XRNode3D {
        get_size(): Vector3
        get_plane(): Plane
    }
    class XRCamera3D extends Camera3D {
    }
    class XRController3D extends XRNode3D {
        is_button_pressed(name: StringName): boolean
        get_input(name: StringName): any
        get_float(name: StringName): number /*f64*/
        get_vector2(name: StringName): Vector2
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        readonly button_pressed: Signal
        readonly button_released: Signal
        readonly input_float_changed: Signal
        readonly input_vector2_changed: Signal
    }
    namespace XRInterface {
        enum Capabilities {
            XR_NONE = 0,
            XR_MONO = 1,
            XR_STEREO = 2,
            XR_QUAD = 4,
            XR_VR = 8,
            XR_AR = 16,
            XR_EXTERNAL = 32,
        }
        enum TrackingStatus {
            XR_NORMAL_TRACKING = 0,
            XR_EXCESSIVE_MOTION = 1,
            XR_INSUFFICIENT_FEATURES = 2,
            XR_UNKNOWN_TRACKING = 3,
            XR_NOT_TRACKING = 4,
        }
        enum PlayAreaMode {
            XR_PLAY_AREA_UNKNOWN = 0,
            XR_PLAY_AREA_3DOF = 1,
            XR_PLAY_AREA_SITTING = 2,
            XR_PLAY_AREA_ROOMSCALE = 3,
            XR_PLAY_AREA_STAGE = 4,
        }
        enum EnvironmentBlendMode {
            XR_ENV_BLEND_MODE_OPAQUE = 0,
            XR_ENV_BLEND_MODE_ADDITIVE = 1,
            XR_ENV_BLEND_MODE_ALPHA_BLEND = 2,
        }
    }
    class XRInterface extends RefCounted {
        get_name(): StringName
        get_capabilities(): number /*i64*/
        is_primary(): boolean
        set_primary(primary: boolean): void
        is_initialized(): boolean
        initialize(): boolean
        uninitialize(): void
        get_system_info(): Dictionary
        get_tracking_status(): XRInterface.TrackingStatus
        get_render_target_size(): Vector2
        get_view_count(): number /*i64*/
        trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        get_play_area_mode(): XRInterface.PlayAreaMode
        set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        get_play_area(): PackedVector3Array
        get_anchor_detection_is_enabled(): boolean
        set_anchor_detection_is_enabled(enable: boolean): void
        get_camera_feed_id(): number /*i64*/
        is_passthrough_supported(): boolean
        is_passthrough_enabled(): boolean
        start_passthrough(): boolean
        stop_passthrough(): void
        get_transform_for_view(view: number /*i64*/, cam_transform: Transform3D): Transform3D
        get_projection_for_view(view: number /*i64*/, aspect: number /*f64*/, near: number /*f64*/, far: number /*f64*/): Projection
        get_supported_environment_blend_modes(): Array
        set_environment_blend_mode(mode: XRInterface.EnvironmentBlendMode): boolean
        get_environment_blend_mode(): XRInterface.EnvironmentBlendMode
        interface_is_primary: boolean
        xr_play_area_mode: number /*i64*/
        environment_blend_mode: number /*i64*/
        ar_is_anchor_detection_enabled: boolean
        readonly play_area_changed: Signal
    }
    class XRInterfaceExtension extends XRInterface {
        get_color_texture(): RID
        get_depth_texture(): RID
        get_velocity_texture(): RID
        add_blit(render_target: RID, src_rect: Rect2, dst_rect: Rect2i, use_layer: boolean, layer: number /*i64*/, apply_lens_distortion: boolean, eye_center: Vector2, k1: number /*f64*/, k2: number /*f64*/, upscale: number /*f64*/, aspect_ratio: number /*f64*/): void
        get_render_target_texture(render_target: RID): RID
    }
    class XRNode3D extends Node3D {
        set_tracker(tracker_name: StringName): void
        get_tracker(): StringName
        set_pose_name(pose: StringName): void
        get_pose_name(): StringName
        get_is_active(): boolean
        get_has_tracking_data(): boolean
        get_pose(): XRPose
        trigger_haptic_pulse(action_name: string, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        tracker: string
        pose: string
        readonly tracking_changed: Signal
    }
    class XROrigin3D extends Node3D {
        set_world_scale(world_scale: number /*f64*/): void
        get_world_scale(): number /*f64*/
        set_current(enabled: boolean): void
        is_current(): boolean
        world_scale: number /*f64*/
        current: boolean
    }
    namespace XRPose {
        enum TrackingConfidence {
            XR_TRACKING_CONFIDENCE_NONE = 0,
            XR_TRACKING_CONFIDENCE_LOW = 1,
            XR_TRACKING_CONFIDENCE_HIGH = 2,
        }
    }
    class XRPose extends RefCounted {
        set_has_tracking_data(has_tracking_data: boolean): void
        get_has_tracking_data(): boolean
        set_name(name: StringName): void
        get_name(): StringName
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        get_adjusted_transform(): Transform3D
        set_linear_velocity(velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_tracking_confidence(tracking_confidence: XRPose.TrackingConfidence): void
        get_tracking_confidence(): XRPose.TrackingConfidence
        has_tracking_data: boolean
        name: string
        transform: string
        linear_velocity: string
        angular_velocity: string
        tracking_confidence: number /*i64*/
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            TRACKER_HAND_UNKNOWN = 0,
            TRACKER_HAND_LEFT = 1,
            TRACKER_HAND_RIGHT = 2,
        }
    }
    class XRPositionalTracker extends RefCounted {
        get_tracker_type(): XRServer.TrackerType
        set_tracker_type(type: XRServer.TrackerType): void
        get_tracker_name(): StringName
        set_tracker_name(name: StringName): void
        get_tracker_desc(): string
        set_tracker_desc(description: string): void
        get_tracker_profile(): string
        set_tracker_profile(profile: string): void
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        set_tracker_hand(hand: XRPositionalTracker.TrackerHand): void
        has_pose(name: StringName): boolean
        get_pose(name: StringName): XRPose
        invalidate_pose(name: StringName): void
        set_pose(name: StringName, transform: Transform3D, linear_velocity: Vector3, angular_velocity: Vector3, tracking_confidence: XRPose.TrackingConfidence): void
        get_input(name: StringName): any
        set_input(name: StringName, value: any): void
        type: number /*i64*/
        name: string
        description: string
        profile: string
        hand: number /*i64*/
        readonly pose_changed: Signal
        readonly pose_lost_tracking: Signal
        readonly button_pressed: Signal
        readonly button_released: Signal
        readonly input_float_changed: Signal
        readonly input_vector2_changed: Signal
        readonly profile_changed: Signal
    }
    namespace ZIPPacker {
        enum ZipAppend {
            APPEND_CREATE = 0,
            APPEND_CREATEAFTER = 1,
            APPEND_ADDINZIP = 2,
        }
    }
    class ZIPPacker extends RefCounted {
        open(path: string, append: ZIPPacker.ZipAppend = 0): GodotError
        start_file(path: string): GodotError
        write_file(data: PackedByteArray): GodotError
        close_file(): GodotError
        close(): GodotError
    }
    class ZIPReader extends RefCounted {
        open(path: string): GodotError
        close(): GodotError
        get_files(): PackedStringArray
        read_file(path: string, case_sensitive: boolean = true): PackedByteArray
        file_exists(path: string, case_sensitive: boolean = true): boolean
    }
    namespace Vector2 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
        }
    }
    class Vector2 {
        static readonly ZERO: Vector2
        static readonly ONE: Vector2
        static readonly INF: Vector2
        static readonly LEFT: Vector2
        static readonly RIGHT: Vector2
        static readonly UP: Vector2
        static readonly DOWN: Vector2
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2i)
        constructor(x: number /*f64*/, y: number /*f64*/)
        angle(): number /*f64*/
        angle_to(to: Vector2): number /*f64*/
        angle_to_point(to: Vector2): number /*f64*/
        direction_to(to: Vector2): Vector2
        distance_to(to: Vector2): number /*f64*/
        distance_squared_to(to: Vector2): number /*f64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        limit_length(length: number /*f64*/ = 1): Vector2
        normalized(): Vector2
        is_normalized(): boolean
        is_equal_approx(to: Vector2): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        posmod(mod: number /*f64*/): Vector2
        posmodv(modv: Vector2): Vector2
        project(b: Vector2): Vector2
        lerp(to: Vector2, weight: number /*f64*/): Vector2
        slerp(to: Vector2, weight: number /*f64*/): Vector2
        cubic_interpolate(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/): Vector2
        cubic_interpolate_in_time(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector2
        bezier_interpolate(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        bezier_derivative(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        max_axis_index(): number /*i64*/
        min_axis_index(): number /*i64*/
        move_toward(to: Vector2, delta: number /*f64*/): Vector2
        rotated(angle: number /*f64*/): Vector2
        orthogonal(): Vector2
        floor(): Vector2
        ceil(): Vector2
        round(): Vector2
        aspect(): number /*f64*/
        dot(with_: Vector2): number /*f64*/
        slide(n: Vector2): Vector2
        bounce(n: Vector2): Vector2
        reflect(n: Vector2): Vector2
        cross(with_: Vector2): number /*f64*/
        abs(): Vector2
        sign(): Vector2
        clamp(min: Vector2, max: Vector2): Vector2
        snapped(step: Vector2): Vector2
        static from_angle(angle: number /*f64*/): Vector2
        static ADD(left: Vector2, right: Vector2): Vector2
        static SUBTRACT(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: number /*f64*/, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: number /*f64*/): Vector2
        static DIVIDE(left: Vector2, right: Vector2): Vector2
        static DIVIDE(left: Vector2, right: number /*f64*/): Vector2
        static NEGATE(left: Vector2, right: any): boolean
        static EQUAL(left: Vector2, right: Vector2): boolean
        static NOT_EQUAL(left: Vector2, right: Vector2): boolean
        static LESS(left: Vector2, right: Vector2): boolean
        static LESS_EQUAL(left: Vector2, right: Vector2): boolean
        static GREATER(left: Vector2, right: Vector2): boolean
        static GREATER_EQUAL(left: Vector2, right: Vector2): boolean
        x: number /*f64*/
        y: number /*f64*/
    }
    namespace Vector2i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
        }
    }
    class Vector2i {
        static readonly ZERO: Vector2i
        static readonly ONE: Vector2i
        static readonly MIN: Vector2i
        static readonly MAX: Vector2i
        static readonly LEFT: Vector2i
        static readonly RIGHT: Vector2i
        static readonly UP: Vector2i
        static readonly DOWN: Vector2i
        constructor()
        constructor(from: Vector2i)
        constructor(from: Vector2)
        constructor(x: number /*i64*/, y: number /*i64*/)
        aspect(): number /*f64*/
        max_axis_index(): number /*i64*/
        min_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector2i
        abs(): Vector2i
        clamp(min: Vector2i, max: Vector2i): Vector2i
        snapped(step: Vector2i): Vector2i
        static ADD(left: Vector2i, right: Vector2i): Vector2i
        static SUBTRACT(left: Vector2i, right: Vector2i): Vector2i
        static MULTIPLY(left: number /*f64*/, right: Vector2i): Vector2i
        static MULTIPLY(left: Vector2i, right: Vector2i): Vector2i
        static MULTIPLY(left: Vector2i, right: number /*f64*/): Vector2i
        static DIVIDE(left: Vector2i, right: Vector2i): Vector2i
        static DIVIDE(left: Vector2i, right: number /*f64*/): Vector2i
        static NEGATE(left: Vector2i, right: any): boolean
        static EQUAL(left: Vector2i, right: Vector2i): boolean
        static NOT_EQUAL(left: Vector2i, right: Vector2i): boolean
        static LESS(left: Vector2i, right: Vector2i): boolean
        static LESS_EQUAL(left: Vector2i, right: Vector2i): boolean
        static GREATER(left: Vector2i, right: Vector2i): boolean
        static GREATER_EQUAL(left: Vector2i, right: Vector2i): boolean
        x: number /*i64*/
        y: number /*i64*/
    }
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2i)
        constructor(position: Vector2, size: Vector2)
        constructor(x: number /*f64*/, y: number /*f64*/, width: number /*f64*/, height: number /*f64*/)
        get_center(): Vector2
        get_area(): number /*f64*/
        has_area(): boolean
        has_point(point: Vector2): boolean
        is_equal_approx(rect: Rect2): boolean
        is_finite(): boolean
        intersects(b: Rect2, include_borders: boolean = false): boolean
        encloses(b: Rect2): boolean
        intersection(b: Rect2): Rect2
        merge(b: Rect2): Rect2
        expand(to: Vector2): Rect2
        grow(amount: number /*f64*/): Rect2
        grow_side(side: number /*i64*/, amount: number /*f64*/): Rect2
        grow_individual(left: number /*f64*/, top: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/): Rect2
        abs(): Rect2
        position: Vector2
        size: Vector2
        end: Vector2
    }
    class Rect2i {
        constructor()
        constructor(from: Rect2i)
        constructor(from: Rect2)
        constructor(position: Vector2i, size: Vector2i)
        constructor(x: number /*i64*/, y: number /*i64*/, width: number /*i64*/, height: number /*i64*/)
        get_center(): Vector2i
        get_area(): number /*i64*/
        has_area(): boolean
        has_point(point: Vector2i): boolean
        intersects(b: Rect2i): boolean
        encloses(b: Rect2i): boolean
        intersection(b: Rect2i): Rect2i
        merge(b: Rect2i): Rect2i
        expand(to: Vector2i): Rect2i
        grow(amount: number /*i64*/): Rect2i
        grow_side(side: number /*i64*/, amount: number /*i64*/): Rect2i
        grow_individual(left: number /*i64*/, top: number /*i64*/, right: number /*i64*/, bottom: number /*i64*/): Rect2i
        abs(): Rect2i
        position: Vector2i
        size: Vector2i
        end: Vector2i
    }
    namespace Vector3 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
        }
    }
    class Vector3 {
        static readonly ZERO: Vector3
        static readonly ONE: Vector3
        static readonly INF: Vector3
        static readonly LEFT: Vector3
        static readonly RIGHT: Vector3
        static readonly UP: Vector3
        static readonly DOWN: Vector3
        static readonly FORWARD: Vector3
        static readonly BACK: Vector3
        static readonly MODEL_LEFT: Vector3
        static readonly MODEL_RIGHT: Vector3
        static readonly MODEL_TOP: Vector3
        static readonly MODEL_BOTTOM: Vector3
        static readonly MODEL_FRONT: Vector3
        static readonly MODEL_REAR: Vector3
        constructor()
        constructor(from: Vector3)
        constructor(from: Vector3i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        angle_to(to: Vector3): number /*f64*/
        signed_angle_to(to: Vector3, axis: Vector3): number /*f64*/
        direction_to(to: Vector3): Vector3
        distance_to(to: Vector3): number /*f64*/
        distance_squared_to(to: Vector3): number /*f64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        limit_length(length: number /*f64*/ = 1): Vector3
        normalized(): Vector3
        is_normalized(): boolean
        is_equal_approx(to: Vector3): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        inverse(): Vector3
        clamp(min: Vector3, max: Vector3): Vector3
        snapped(step: Vector3): Vector3
        rotated(axis: Vector3, angle: number /*f64*/): Vector3
        lerp(to: Vector3, weight: number /*f64*/): Vector3
        slerp(to: Vector3, weight: number /*f64*/): Vector3
        cubic_interpolate(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/): Vector3
        cubic_interpolate_in_time(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector3
        bezier_interpolate(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        bezier_derivative(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        move_toward(to: Vector3, delta: number /*f64*/): Vector3
        dot(with_: Vector3): number /*f64*/
        cross(with_: Vector3): Vector3
        outer(with_: Vector3): Basis
        abs(): Vector3
        floor(): Vector3
        ceil(): Vector3
        round(): Vector3
        posmod(mod: number /*f64*/): Vector3
        posmodv(modv: Vector3): Vector3
        project(b: Vector3): Vector3
        slide(n: Vector3): Vector3
        bounce(n: Vector3): Vector3
        reflect(n: Vector3): Vector3
        sign(): Vector3
        octahedron_encode(): Vector2
        static octahedron_decode(uv: Vector2): Vector3
        static ADD(left: Vector3, right: Vector3): Vector3
        static SUBTRACT(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: number /*f64*/, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: number /*f64*/): Vector3
        static DIVIDE(left: Vector3, right: Vector3): Vector3
        static DIVIDE(left: Vector3, right: number /*f64*/): Vector3
        static NEGATE(left: Vector3, right: any): boolean
        static EQUAL(left: Vector3, right: Vector3): boolean
        static NOT_EQUAL(left: Vector3, right: Vector3): boolean
        static LESS(left: Vector3, right: Vector3): boolean
        static LESS_EQUAL(left: Vector3, right: Vector3): boolean
        static GREATER(left: Vector3, right: Vector3): boolean
        static GREATER_EQUAL(left: Vector3, right: Vector3): boolean
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
    }
    namespace Vector3i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
        }
    }
    class Vector3i {
        static readonly ZERO: Vector3i
        static readonly ONE: Vector3i
        static readonly MIN: Vector3i
        static readonly MAX: Vector3i
        static readonly LEFT: Vector3i
        static readonly RIGHT: Vector3i
        static readonly UP: Vector3i
        static readonly DOWN: Vector3i
        static readonly FORWARD: Vector3i
        static readonly BACK: Vector3i
        constructor()
        constructor(from: Vector3i)
        constructor(from: Vector3)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector3i
        abs(): Vector3i
        clamp(min: Vector3i, max: Vector3i): Vector3i
        snapped(step: Vector3i): Vector3i
        static ADD(left: Vector3i, right: Vector3i): Vector3i
        static SUBTRACT(left: Vector3i, right: Vector3i): Vector3i
        static MULTIPLY(left: number /*f64*/, right: Vector3i): Vector3i
        static MULTIPLY(left: Vector3i, right: Vector3i): Vector3i
        static MULTIPLY(left: Vector3i, right: number /*f64*/): Vector3i
        static DIVIDE(left: Vector3i, right: Vector3i): Vector3i
        static DIVIDE(left: Vector3i, right: number /*f64*/): Vector3i
        static NEGATE(left: Vector3i, right: any): boolean
        static EQUAL(left: Vector3i, right: Vector3i): boolean
        static NOT_EQUAL(left: Vector3i, right: Vector3i): boolean
        static LESS(left: Vector3i, right: Vector3i): boolean
        static LESS_EQUAL(left: Vector3i, right: Vector3i): boolean
        static GREATER(left: Vector3i, right: Vector3i): boolean
        static GREATER_EQUAL(left: Vector3i, right: Vector3i): boolean
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
    }
    class Transform2D {
        static readonly IDENTITY: Transform2D
        static readonly FLIP_X: Transform2D
        static readonly FLIP_Y: Transform2D
        constructor()
        constructor(from: Transform2D)
        constructor(rotation: number /*f64*/, position: Vector2)
        constructor(rotation: number /*f64*/, scale: Vector2, skew: number /*f64*/, position: Vector2)
        constructor(x_axis: Vector2, y_axis: Vector2, origin: Vector2)
        inverse(): Transform2D
        affine_inverse(): Transform2D
        get_rotation(): number /*f64*/
        get_origin(): Vector2
        get_scale(): Vector2
        get_skew(): number /*f64*/
        orthonormalized(): Transform2D
        rotated(angle: number /*f64*/): Transform2D
        rotated_local(angle: number /*f64*/): Transform2D
        scaled(scale: Vector2): Transform2D
        scaled_local(scale: Vector2): Transform2D
        translated(offset: Vector2): Transform2D
        translated_local(offset: Vector2): Transform2D
        determinant(): number /*f64*/
        basis_xform(v: Vector2): Vector2
        basis_xform_inv(v: Vector2): Vector2
        interpolate_with(xform: Transform2D, weight: number /*f64*/): Transform2D
        is_conformal(): boolean
        is_equal_approx(xform: Transform2D): boolean
        is_finite(): boolean
        looking_at(target: Vector2 = Vector2.ZERO): Transform2D
        static MULTIPLY(left: Transform2D, right: Transform2D): Transform2D
        static MULTIPLY(left: Transform2D, right: number /*f64*/): Transform2D
        static MULTIPLY(left: Transform2D, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Transform2D): Vector2
        static MULTIPLY(left: Transform2D, right: Rect2): Rect2
        static MULTIPLY(left: Rect2, right: Transform2D): Rect2
        static MULTIPLY(left: Transform2D, right: PackedVector2Array): PackedVector2Array
        static MULTIPLY(left: PackedVector2Array, right: Transform2D): PackedVector2Array
        static EQUAL(left: Transform2D, right: Transform2D): boolean
        static NOT_EQUAL(left: Transform2D, right: Transform2D): boolean
        x: Vector2
        y: Vector2
        origin: Vector2
    }
    namespace Vector4 {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
            AXIS_W = 3,
        }
    }
    class Vector4 {
        static readonly ZERO: Vector4
        static readonly ONE: Vector4
        static readonly INF: Vector4
        constructor()
        constructor(from: Vector4)
        constructor(from: Vector4i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*f64*/
        abs(): Vector4
        sign(): Vector4
        floor(): Vector4
        ceil(): Vector4
        round(): Vector4
        lerp(to: Vector4, weight: number /*f64*/): Vector4
        cubic_interpolate(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/): Vector4
        cubic_interpolate_in_time(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector4
        posmod(mod: number /*f64*/): Vector4
        posmodv(modv: Vector4): Vector4
        snapped(step: Vector4): Vector4
        clamp(min: Vector4, max: Vector4): Vector4
        normalized(): Vector4
        is_normalized(): boolean
        direction_to(to: Vector4): Vector4
        distance_to(to: Vector4): number /*f64*/
        distance_squared_to(to: Vector4): number /*f64*/
        dot(with_: Vector4): number /*f64*/
        inverse(): Vector4
        is_equal_approx(to: Vector4): boolean
        is_zero_approx(): boolean
        is_finite(): boolean
        static ADD(left: Vector4, right: Vector4): Vector4
        static SUBTRACT(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: number /*f64*/, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: number /*f64*/): Vector4
        static DIVIDE(left: Vector4, right: Vector4): Vector4
        static DIVIDE(left: Vector4, right: number /*f64*/): Vector4
        static NEGATE(left: Vector4, right: any): boolean
        static EQUAL(left: Vector4, right: Vector4): boolean
        static NOT_EQUAL(left: Vector4, right: Vector4): boolean
        static LESS(left: Vector4, right: Vector4): boolean
        static LESS_EQUAL(left: Vector4, right: Vector4): boolean
        static GREATER(left: Vector4, right: Vector4): boolean
        static GREATER_EQUAL(left: Vector4, right: Vector4): boolean
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
    }
    namespace Vector4i {
        enum Axis {
            AXIS_X = 0,
            AXIS_Y = 1,
            AXIS_Z = 2,
            AXIS_W = 3,
        }
    }
    class Vector4i {
        static readonly ZERO: Vector4i
        static readonly ONE: Vector4i
        static readonly MIN: Vector4i
        static readonly MAX: Vector4i
        constructor()
        constructor(from: Vector4i)
        constructor(from: Vector4)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/, w: number /*i64*/)
        min_axis_index(): number /*i64*/
        max_axis_index(): number /*i64*/
        length(): number /*f64*/
        length_squared(): number /*i64*/
        sign(): Vector4i
        abs(): Vector4i
        clamp(min: Vector4i, max: Vector4i): Vector4i
        snapped(step: Vector4i): Vector4i
        static ADD(left: Vector4i, right: Vector4i): Vector4i
        static SUBTRACT(left: Vector4i, right: Vector4i): Vector4i
        static MULTIPLY(left: number /*f64*/, right: Vector4i): Vector4i
        static MULTIPLY(left: Vector4i, right: Vector4i): Vector4i
        static MULTIPLY(left: Vector4i, right: number /*f64*/): Vector4i
        static DIVIDE(left: Vector4i, right: Vector4i): Vector4i
        static DIVIDE(left: Vector4i, right: number /*f64*/): Vector4i
        static NEGATE(left: Vector4i, right: any): boolean
        static EQUAL(left: Vector4i, right: Vector4i): boolean
        static NOT_EQUAL(left: Vector4i, right: Vector4i): boolean
        static LESS(left: Vector4i, right: Vector4i): boolean
        static LESS_EQUAL(left: Vector4i, right: Vector4i): boolean
        static GREATER(left: Vector4i, right: Vector4i): boolean
        static GREATER_EQUAL(left: Vector4i, right: Vector4i): boolean
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
        w: number /*i64*/
    }
    class Plane {
        static readonly PLANE_YZ: Plane
        static readonly PLANE_XZ: Plane
        static readonly PLANE_XY: Plane
        constructor()
        constructor(from: Plane)
        constructor(normal: Vector3)
        constructor(normal: Vector3, d: number /*f64*/)
        constructor(normal: Vector3, point: Vector3)
        constructor(point1: Vector3, point2: Vector3, point3: Vector3)
        constructor(a: number /*f64*/, b: number /*f64*/, c: number /*f64*/, d: number /*f64*/)
        normalized(): Plane
        get_center(): Vector3
        is_equal_approx(to_plane: Plane): boolean
        is_finite(): boolean
        is_point_over(point: Vector3): boolean
        distance_to(point: Vector3): number /*f64*/
        has_point(point: Vector3, tolerance: number /*f64*/ = 0.00001): boolean
        project(point: Vector3): Vector3
        intersect_3(b: Plane, c: Plane): void
        intersects_ray(from: Vector3, dir: Vector3): void
        intersects_segment(from: Vector3, to: Vector3): void
        static NEGATE(left: Plane, right: any): boolean
        static EQUAL(left: Plane, right: Plane): boolean
        static NOT_EQUAL(left: Plane, right: Plane): boolean
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        d: number /*f64*/
        normal: Vector3
    }
    class Quaternion {
        static readonly IDENTITY: Quaternion
        constructor()
        constructor(from: Quaternion)
        constructor(from: Basis)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(arc_from: Vector3, arc_to: Vector3)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        length(): number /*f64*/
        length_squared(): number /*f64*/
        normalized(): Quaternion
        is_normalized(): boolean
        is_equal_approx(to: Quaternion): boolean
        is_finite(): boolean
        inverse(): Quaternion
        log(): Quaternion
        exp(): Quaternion
        angle_to(to: Quaternion): number /*f64*/
        dot(with_: Quaternion): number /*f64*/
        slerp(to: Quaternion, weight: number /*f64*/): Quaternion
        slerpni(to: Quaternion, weight: number /*f64*/): Quaternion
        spherical_cubic_interpolate(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/): Quaternion
        spherical_cubic_interpolate_in_time(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Quaternion
        get_euler(order: number /*i64*/ = 2): Vector3
        static from_euler(euler: Vector3): Quaternion
        get_axis(): Vector3
        get_angle(): number /*f64*/
        static ADD(left: Quaternion, right: Quaternion): Quaternion
        static SUBTRACT(left: Quaternion, right: Quaternion): Quaternion
        static MULTIPLY(left: Quaternion, right: Quaternion): Quaternion
        static MULTIPLY(left: Quaternion, right: number /*f64*/): Quaternion
        static MULTIPLY(left: number /*f64*/, right: Quaternion): Quaternion
        static MULTIPLY(left: Vector3, right: Quaternion): Vector3
        static MULTIPLY(left: Quaternion, right: Vector3): Vector3
        static DIVIDE(left: Quaternion, right: number /*f64*/): Quaternion
        static NEGATE(left: Quaternion, right: any): boolean
        static EQUAL(left: Quaternion, right: Quaternion): boolean
        static NOT_EQUAL(left: Quaternion, right: Quaternion): boolean
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
    }
    class AABB {
        constructor()
        constructor(from: AABB)
        constructor(position: Vector3, size: Vector3)
        abs(): AABB
        get_center(): Vector3
        get_volume(): number /*f64*/
        has_volume(): boolean
        has_surface(): boolean
        has_point(point: Vector3): boolean
        is_equal_approx(aabb: AABB): boolean
        is_finite(): boolean
        intersects(with_: AABB): boolean
        encloses(with_: AABB): boolean
        intersects_plane(plane: Plane): boolean
        intersection(with_: AABB): AABB
        merge(with_: AABB): AABB
        expand(to_point: Vector3): AABB
        grow(by: number /*f64*/): AABB
        get_support(dir: Vector3): Vector3
        get_longest_axis(): Vector3
        get_longest_axis_index(): number /*i64*/
        get_longest_axis_size(): number /*f64*/
        get_shortest_axis(): Vector3
        get_shortest_axis_index(): number /*i64*/
        get_shortest_axis_size(): number /*f64*/
        get_endpoint(idx: number /*i64*/): Vector3
        intersects_segment(from: Vector3, to: Vector3): void
        intersects_ray(from: Vector3, dir: Vector3): void
        static EQUAL(left: AABB, right: AABB): boolean
        static NOT_EQUAL(left: AABB, right: AABB): boolean
        position: Vector3
        size: Vector3
        end: Vector3
    }
    class Basis {
        static readonly IDENTITY: Basis
        static readonly FLIP_X: Basis
        static readonly FLIP_Y: Basis
        static readonly FLIP_Z: Basis
        constructor()
        constructor(from: Basis)
        constructor(from: Quaternion)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3)
        inverse(): Basis
        transposed(): Basis
        orthonormalized(): Basis
        determinant(): number /*f64*/
        rotated(axis: Vector3, angle: number /*f64*/): Basis
        scaled(scale: Vector3): Basis
        get_scale(): Vector3
        get_euler(order: number /*i64*/ = 2): Vector3
        tdotx(with_: Vector3): number /*f64*/
        tdoty(with_: Vector3): number /*f64*/
        tdotz(with_: Vector3): number /*f64*/
        slerp(to: Basis, weight: number /*f64*/): Basis
        is_conformal(): boolean
        is_equal_approx(b: Basis): boolean
        is_finite(): boolean
        get_rotation_quaternion(): Quaternion
        static looking_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): Basis
        static from_scale(scale: Vector3): Basis
        static from_euler(euler: Vector3, order: number /*i64*/ = 2): Basis
        static MULTIPLY(left: Basis, right: Basis): Basis
        static MULTIPLY(left: Basis, right: number /*f64*/): Basis
        static MULTIPLY(left: Basis, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Basis): Vector3
        static EQUAL(left: Basis, right: Basis): boolean
        static NOT_EQUAL(left: Basis, right: Basis): boolean
        x: Vector3
        y: Vector3
        z: Vector3
    }
    class Transform3D {
        static readonly IDENTITY: Transform3D
        static readonly FLIP_X: Transform3D
        static readonly FLIP_Y: Transform3D
        static readonly FLIP_Z: Transform3D
        constructor()
        constructor(from: Transform3D)
        constructor(basis: Basis, origin: Vector3)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3, origin: Vector3)
        constructor(from: Projection)
        inverse(): Transform3D
        affine_inverse(): Transform3D
        orthonormalized(): Transform3D
        rotated(axis: Vector3, angle: number /*f64*/): Transform3D
        rotated_local(axis: Vector3, angle: number /*f64*/): Transform3D
        scaled(scale: Vector3): Transform3D
        scaled_local(scale: Vector3): Transform3D
        translated(offset: Vector3): Transform3D
        translated_local(offset: Vector3): Transform3D
        looking_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): Transform3D
        interpolate_with(xform: Transform3D, weight: number /*f64*/): Transform3D
        is_equal_approx(xform: Transform3D): boolean
        is_finite(): boolean
        static MULTIPLY(left: Transform3D, right: Transform3D): Transform3D
        static MULTIPLY(left: Transform3D, right: number /*f64*/): Transform3D
        static MULTIPLY(left: Transform3D, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Transform3D): Vector3
        static MULTIPLY(left: Transform3D, right: AABB): AABB
        static MULTIPLY(left: AABB, right: Transform3D): AABB
        static MULTIPLY(left: Transform3D, right: Plane): Plane
        static MULTIPLY(left: Plane, right: Transform3D): Plane
        static MULTIPLY(left: Transform3D, right: PackedVector3Array): PackedVector3Array
        static MULTIPLY(left: PackedVector3Array, right: Transform3D): PackedVector3Array
        static EQUAL(left: Transform3D, right: Transform3D): boolean
        static NOT_EQUAL(left: Transform3D, right: Transform3D): boolean
        basis: Basis
        origin: Vector3
    }
    namespace Projection {
        enum Planes {
            PLANE_NEAR = 0,
            PLANE_FAR = 1,
            PLANE_LEFT = 2,
            PLANE_TOP = 3,
            PLANE_RIGHT = 4,
            PLANE_BOTTOM = 5,
        }
    }
    class Projection {
        static readonly IDENTITY: Projection
        static readonly ZERO: Projection
        constructor()
        constructor(from: Projection)
        constructor(from: Transform3D)
        constructor(x_axis: Vector4, y_axis: Vector4, z_axis: Vector4, w_axis: Vector4)
        static create_depth_correction(flip_y: boolean): Projection
        static create_light_atlas_rect(rect: Rect2): Projection
        static create_perspective(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        static create_perspective_hmd(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean, eye: number /*i64*/, intraocular_dist: number /*f64*/, convergence_dist: number /*f64*/): Projection
        static create_for_hmd(eye: number /*i64*/, aspect: number /*f64*/, intraocular_dist: number /*f64*/, display_width: number /*f64*/, display_to_lens: number /*f64*/, oversample: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_orthogonal(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_orthogonal_aspect(size: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        static create_frustum(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        static create_frustum_aspect(size: number /*f64*/, aspect: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        static create_fit_aabb(aabb: AABB): Projection
        determinant(): number /*f64*/
        perspective_znear_adjusted(new_znear: number /*f64*/): Projection
        get_projection_plane(plane: number /*i64*/): Plane
        flipped_y(): Projection
        jitter_offseted(offset: Vector2): Projection
        static get_fovy(fovx: number /*f64*/, aspect: number /*f64*/): number /*f64*/
        get_z_far(): number /*f64*/
        get_z_near(): number /*f64*/
        get_aspect(): number /*f64*/
        get_fov(): number /*f64*/
        is_orthogonal(): boolean
        get_viewport_half_extents(): Vector2
        get_far_plane_half_extents(): Vector2
        inverse(): Projection
        get_pixels_per_meter(for_pixel_width: number /*i64*/): number /*i64*/
        get_lod_multiplier(): number /*f64*/
        static MULTIPLY(left: Projection, right: Projection): Projection
        static MULTIPLY(left: Projection, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Projection): Vector4
        static EQUAL(left: Projection, right: Projection): boolean
        static NOT_EQUAL(left: Projection, right: Projection): boolean
        x: Vector4
        y: Vector4
        z: Vector4
        w: Vector4
    }
    class Color {
        static readonly ALICE_BLUE: Color
        static readonly ANTIQUE_WHITE: Color
        static readonly AQUA: Color
        static readonly AQUAMARINE: Color
        static readonly AZURE: Color
        static readonly BEIGE: Color
        static readonly BISQUE: Color
        static readonly BLACK: Color
        static readonly BLANCHED_ALMOND: Color
        static readonly BLUE: Color
        static readonly BLUE_VIOLET: Color
        static readonly BROWN: Color
        static readonly BURLYWOOD: Color
        static readonly CADET_BLUE: Color
        static readonly CHARTREUSE: Color
        static readonly CHOCOLATE: Color
        static readonly CORAL: Color
        static readonly CORNFLOWER_BLUE: Color
        static readonly CORNSILK: Color
        static readonly CRIMSON: Color
        static readonly CYAN: Color
        static readonly DARK_BLUE: Color
        static readonly DARK_CYAN: Color
        static readonly DARK_GOLDENROD: Color
        static readonly DARK_GRAY: Color
        static readonly DARK_GREEN: Color
        static readonly DARK_KHAKI: Color
        static readonly DARK_MAGENTA: Color
        static readonly DARK_OLIVE_GREEN: Color
        static readonly DARK_ORANGE: Color
        static readonly DARK_ORCHID: Color
        static readonly DARK_RED: Color
        static readonly DARK_SALMON: Color
        static readonly DARK_SEA_GREEN: Color
        static readonly DARK_SLATE_BLUE: Color
        static readonly DARK_SLATE_GRAY: Color
        static readonly DARK_TURQUOISE: Color
        static readonly DARK_VIOLET: Color
        static readonly DEEP_PINK: Color
        static readonly DEEP_SKY_BLUE: Color
        static readonly DIM_GRAY: Color
        static readonly DODGER_BLUE: Color
        static readonly FIREBRICK: Color
        static readonly FLORAL_WHITE: Color
        static readonly FOREST_GREEN: Color
        static readonly FUCHSIA: Color
        static readonly GAINSBORO: Color
        static readonly GHOST_WHITE: Color
        static readonly GOLD: Color
        static readonly GOLDENROD: Color
        static readonly GRAY: Color
        static readonly GREEN: Color
        static readonly GREEN_YELLOW: Color
        static readonly HONEYDEW: Color
        static readonly HOT_PINK: Color
        static readonly INDIAN_RED: Color
        static readonly INDIGO: Color
        static readonly IVORY: Color
        static readonly KHAKI: Color
        static readonly LAVENDER: Color
        static readonly LAVENDER_BLUSH: Color
        static readonly LAWN_GREEN: Color
        static readonly LEMON_CHIFFON: Color
        static readonly LIGHT_BLUE: Color
        static readonly LIGHT_CORAL: Color
        static readonly LIGHT_CYAN: Color
        static readonly LIGHT_GOLDENROD: Color
        static readonly LIGHT_GRAY: Color
        static readonly LIGHT_GREEN: Color
        static readonly LIGHT_PINK: Color
        static readonly LIGHT_SALMON: Color
        static readonly LIGHT_SEA_GREEN: Color
        static readonly LIGHT_SKY_BLUE: Color
        static readonly LIGHT_SLATE_GRAY: Color
        static readonly LIGHT_STEEL_BLUE: Color
        static readonly LIGHT_YELLOW: Color
        static readonly LIME: Color
        static readonly LIME_GREEN: Color
        static readonly LINEN: Color
        static readonly MAGENTA: Color
        static readonly MAROON: Color
        static readonly MEDIUM_AQUAMARINE: Color
        static readonly MEDIUM_BLUE: Color
        static readonly MEDIUM_ORCHID: Color
        static readonly MEDIUM_PURPLE: Color
        static readonly MEDIUM_SEA_GREEN: Color
        static readonly MEDIUM_SLATE_BLUE: Color
        static readonly MEDIUM_SPRING_GREEN: Color
        static readonly MEDIUM_TURQUOISE: Color
        static readonly MEDIUM_VIOLET_RED: Color
        static readonly MIDNIGHT_BLUE: Color
        static readonly MINT_CREAM: Color
        static readonly MISTY_ROSE: Color
        static readonly MOCCASIN: Color
        static readonly NAVAJO_WHITE: Color
        static readonly NAVY_BLUE: Color
        static readonly OLD_LACE: Color
        static readonly OLIVE: Color
        static readonly OLIVE_DRAB: Color
        static readonly ORANGE: Color
        static readonly ORANGE_RED: Color
        static readonly ORCHID: Color
        static readonly PALE_GOLDENROD: Color
        static readonly PALE_GREEN: Color
        static readonly PALE_TURQUOISE: Color
        static readonly PALE_VIOLET_RED: Color
        static readonly PAPAYA_WHIP: Color
        static readonly PEACH_PUFF: Color
        static readonly PERU: Color
        static readonly PINK: Color
        static readonly PLUM: Color
        static readonly POWDER_BLUE: Color
        static readonly PURPLE: Color
        static readonly REBECCA_PURPLE: Color
        static readonly RED: Color
        static readonly ROSY_BROWN: Color
        static readonly ROYAL_BLUE: Color
        static readonly SADDLE_BROWN: Color
        static readonly SALMON: Color
        static readonly SANDY_BROWN: Color
        static readonly SEA_GREEN: Color
        static readonly SEASHELL: Color
        static readonly SIENNA: Color
        static readonly SILVER: Color
        static readonly SKY_BLUE: Color
        static readonly SLATE_BLUE: Color
        static readonly SLATE_GRAY: Color
        static readonly SNOW: Color
        static readonly SPRING_GREEN: Color
        static readonly STEEL_BLUE: Color
        static readonly TAN: Color
        static readonly TEAL: Color
        static readonly THISTLE: Color
        static readonly TOMATO: Color
        static readonly TRANSPARENT: Color
        static readonly TURQUOISE: Color
        static readonly VIOLET: Color
        static readonly WEB_GRAY: Color
        static readonly WEB_GREEN: Color
        static readonly WEB_MAROON: Color
        static readonly WEB_PURPLE: Color
        static readonly WHEAT: Color
        static readonly WHITE: Color
        static readonly WHITE_SMOKE: Color
        static readonly YELLOW: Color
        static readonly YELLOW_GREEN: Color
        constructor()
        constructor(from: Color)
        constructor(from: Color, alpha: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/, a: number /*f64*/)
        constructor(code: string)
        constructor(code: string, alpha: number /*f64*/)
        to_argb32(): number /*i64*/
        to_abgr32(): number /*i64*/
        to_rgba32(): number /*i64*/
        to_argb64(): number /*i64*/
        to_abgr64(): number /*i64*/
        to_rgba64(): number /*i64*/
        to_html(with_alpha: boolean = true): string
        clamp(min: Color = new Color(0, 0, 0, 0), max: Color = new Color(1, 1, 1, 1)): Color
        inverted(): Color
        lerp(to: Color, weight: number /*f64*/): Color
        lightened(amount: number /*f64*/): Color
        darkened(amount: number /*f64*/): Color
        blend(over: Color): Color
        get_luminance(): number /*f64*/
        srgb_to_linear(): Color
        linear_to_srgb(): Color
        is_equal_approx(to: Color): boolean
        static hex(hex: number /*i64*/): Color
        static hex64(hex: number /*i64*/): Color
        static html(rgba: string): Color
        static html_is_valid(color: string): boolean
        static from_string(str: string, default_: Color): Color
        static from_hsv(h: number /*f64*/, s: number /*f64*/, v: number /*f64*/, alpha: number /*f64*/ = 1): Color
        static from_ok_hsl(h: number /*f64*/, s: number /*f64*/, l: number /*f64*/, alpha: number /*f64*/ = 1): Color
        static from_rgbe9995(rgbe: number /*i64*/): Color
        static ADD(left: Color, right: Color): Color
        static SUBTRACT(left: Color, right: Color): Color
        static MULTIPLY(left: Color, right: Color): Color
        static MULTIPLY(left: Color, right: number /*f64*/): Color
        static MULTIPLY(left: number /*f64*/, right: Color): Color
        static DIVIDE(left: Color, right: Color): Color
        static DIVIDE(left: Color, right: number /*f64*/): Color
        static NEGATE(left: Color, right: any): boolean
        static EQUAL(left: Color, right: Color): boolean
        static NOT_EQUAL(left: Color, right: Color): boolean
        r: number /*f64*/
        g: number /*f64*/
        b: number /*f64*/
        a: number /*f64*/
        r8: number /*i64*/
        g8: number /*i64*/
        b8: number /*i64*/
        a8: number /*i64*/
        h: number /*f64*/
        s: number /*f64*/
        v: number /*f64*/
    }
    class NodePath {
        constructor()
        constructor(from: NodePath)
        constructor(from: string)
        is_absolute(): boolean
        get_name_count(): number /*i64*/
        get_name(idx: number /*i64*/): StringName
        get_subname_count(): number /*i64*/
        hash(): number /*i64*/
        get_subname(idx: number /*i64*/): StringName
        get_concatenated_names(): StringName
        get_concatenated_subnames(): StringName
        get_as_property_path(): NodePath
        is_empty(): boolean
        static EQUAL(left: NodePath, right: NodePath): boolean
        static NOT_EQUAL(left: NodePath, right: NodePath): boolean
    }
    class RID {
        constructor()
        constructor(from: RID)
        is_valid(): boolean
        get_id(): number /*i64*/
        static EQUAL(left: RID, right: RID): boolean
        static NOT_EQUAL(left: RID, right: RID): boolean
        static LESS(left: RID, right: RID): boolean
        static LESS_EQUAL(left: RID, right: RID): boolean
        static GREATER(left: RID, right: RID): boolean
        static GREATER_EQUAL(left: RID, right: RID): boolean
    }
    class Callable {
        constructor()
        constructor(from: Callable)
        constructor(object: Object, method: StringName)
        callv(arguments_: Array): void
        is_null(): boolean
        is_custom(): boolean
        is_standard(): boolean
        is_valid(): boolean
        get_object(): Object
        get_object_id(): number /*i64*/
        get_method(): StringName
        get_bound_arguments_count(): number /*i64*/
        get_bound_arguments(): Array
        hash(): number /*i64*/
        bindv(arguments_: Array): Callable
        unbind(argcount: number /*i64*/): Callable
        call(...vargargs: any[]): void
        call_deferred(...vargargs: any[]): void
        rpc(...vargargs: any[]): void
        rpc_id(peer_id: number /*i64*/, ...vargargs: any[]): void
        bind(...vargargs: any[]): Callable
        static EQUAL(left: Callable, right: Callable): boolean
        static NOT_EQUAL(left: Callable, right: Callable): boolean
    }
    class Signal {
        constructor()
        constructor(from: Signal)
        constructor(object: Object, signal: StringName)
        is_null(): boolean
        get_object(): Object
        get_object_id(): number /*i64*/
        get_name(): StringName
        connect(callable: Callable, flags: number /*i64*/ = 0): number /*i64*/
        disconnect(callable: Callable): void
        is_connected(callable: Callable): boolean
        get_connections(): Array
        emit(...vargargs: any[]): void
        static EQUAL(left: Signal, right: Signal): boolean
        static NOT_EQUAL(left: Signal, right: Signal): boolean
    }
    class Dictionary {
        constructor()
        constructor(from: Dictionary)
        size(): number /*i64*/
        is_empty(): boolean
        clear(): void
        merge(dictionary: Dictionary, overwrite: boolean = false): void
        has(key: any): boolean
        has_all(keys: Array): boolean
        find_key(value: any): void
        erase(key: any): boolean
        hash(): number /*i64*/
        keys(): Array
        values(): Array
        duplicate(deep: boolean = false): Dictionary
        get(key: any, default_: any = <any> {} /*compound.type from nil*/): void
        make_read_only(): void
        is_read_only(): boolean
        static EQUAL(left: Dictionary, right: Dictionary): boolean
        static NOT_EQUAL(left: Dictionary, right: Dictionary): boolean
    }
    class Array {
        constructor()
        constructor(from: Array)
        constructor(base: Array, type: number /*i64*/, class_name: StringName, script: any)
        constructor(from: PackedByteArray)
        constructor(from: PackedInt32Array)
        constructor(from: PackedInt64Array)
        constructor(from: PackedFloat32Array)
        constructor(from: PackedFloat64Array)
        constructor(from: PackedStringArray)
        constructor(from: PackedVector2Array)
        constructor(from: PackedVector3Array)
        constructor(from: PackedColorArray)
        size(): number /*i64*/
        is_empty(): boolean
        clear(): void
        hash(): number /*i64*/
        assign(array: Array): void
        push_back(value: any): void
        push_front(value: any): void
        append(value: any): void
        append_array(array: Array): void
        resize(size: number /*i64*/): number /*i64*/
        insert(position: number /*i64*/, value: any): number /*i64*/
        remove_at(position: number /*i64*/): void
        fill(value: any): void
        erase(value: any): void
        front(): void
        back(): void
        pick_random(): void
        find(what: any, from: number /*i64*/ = 0): number /*i64*/
        rfind(what: any, from: number /*i64*/ = -1): number /*i64*/
        count(value: any): number /*i64*/
        has(value: any): boolean
        pop_back(): void
        pop_front(): void
        pop_at(position: number /*i64*/): void
        sort(): void
        sort_custom(func: Callable): void
        shuffle(): void
        bsearch(value: any, before: boolean = true): number /*i64*/
        bsearch_custom(value: any, func: Callable, before: boolean = true): number /*i64*/
        reverse(): void
        duplicate(deep: boolean = false): Array
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647, step: number /*i64*/ = 1, deep: boolean = false): Array
        filter(method: Callable): Array
        map(method: Callable): Array
        reduce(method: Callable, accum: any = <any> {} /*compound.type from nil*/): void
        any(method: Callable): boolean
        all(method: Callable): boolean
        max(): void
        min(): void
        is_typed(): boolean
        is_same_typed(array: Array): boolean
        get_typed_builtin(): number /*i64*/
        get_typed_class_name(): StringName
        get_typed_script(): void
        make_read_only(): void
        is_read_only(): boolean
        static EQUAL(left: Array, right: Array): boolean
        static NOT_EQUAL(left: Array, right: Array): boolean
        static LESS(left: Array, right: Array): boolean
        static LESS_EQUAL(left: Array, right: Array): boolean
        static GREATER(left: Array, right: Array): boolean
        static GREATER_EQUAL(left: Array, right: Array): boolean
    }
    class PackedByteArray {
        constructor()
        constructor(from: PackedByteArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedByteArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        duplicate(): PackedByteArray
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
        get_string_from_ascii(): string
        get_string_from_utf8(): string
        get_string_from_utf16(): string
        get_string_from_utf32(): string
        get_string_from_wchar(): string
        hex_encode(): string
        compress(compression_mode: number /*i64*/ = 0): PackedByteArray
        decompress(buffer_size: number /*i64*/, compression_mode: number /*i64*/ = 0): PackedByteArray
        decompress_dynamic(max_output_size: number /*i64*/, compression_mode: number /*i64*/ = 0): PackedByteArray
        decode_u8(byte_offset: number /*i64*/): number /*i64*/
        decode_s8(byte_offset: number /*i64*/): number /*i64*/
        decode_u16(byte_offset: number /*i64*/): number /*i64*/
        decode_s16(byte_offset: number /*i64*/): number /*i64*/
        decode_u32(byte_offset: number /*i64*/): number /*i64*/
        decode_s32(byte_offset: number /*i64*/): number /*i64*/
        decode_u64(byte_offset: number /*i64*/): number /*i64*/
        decode_s64(byte_offset: number /*i64*/): number /*i64*/
        decode_half(byte_offset: number /*i64*/): number /*f64*/
        decode_float(byte_offset: number /*i64*/): number /*f64*/
        decode_double(byte_offset: number /*i64*/): number /*f64*/
        has_encoded_var(byte_offset: number /*i64*/, allow_objects: boolean = false): boolean
        decode_var(byte_offset: number /*i64*/, allow_objects: boolean = false): void
        decode_var_size(byte_offset: number /*i64*/, allow_objects: boolean = false): number /*i64*/
        to_int32_array(): PackedInt32Array
        to_int64_array(): PackedInt64Array
        to_float32_array(): PackedFloat32Array
        to_float64_array(): PackedFloat64Array
        encode_u8(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s8(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u16(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s16(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u32(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s32(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_u64(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_s64(byte_offset: number /*i64*/, value: number /*i64*/): void
        encode_half(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_float(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_double(byte_offset: number /*i64*/, value: number /*f64*/): void
        encode_var(byte_offset: number /*i64*/, value: any, allow_objects: boolean = false): number /*i64*/
        static EQUAL(left: PackedByteArray, right: PackedByteArray): boolean
        static NOT_EQUAL(left: PackedByteArray, right: PackedByteArray): boolean
    }
    class PackedInt32Array {
        constructor()
        constructor(from: PackedInt32Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedInt32Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedInt32Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        duplicate(): PackedInt32Array
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
        static EQUAL(left: PackedInt32Array, right: PackedInt32Array): boolean
        static NOT_EQUAL(left: PackedInt32Array, right: PackedInt32Array): boolean
    }
    class PackedInt64Array {
        constructor()
        constructor(from: PackedInt64Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*i64*/): void
        push_back(value: number /*i64*/): boolean
        append(value: number /*i64*/): boolean
        append_array(array: PackedInt64Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        fill(value: number /*i64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*i64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedInt64Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        duplicate(): PackedInt64Array
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        count(value: number /*i64*/): number /*i64*/
        static EQUAL(left: PackedInt64Array, right: PackedInt64Array): boolean
        static NOT_EQUAL(left: PackedInt64Array, right: PackedInt64Array): boolean
    }
    class PackedFloat32Array {
        constructor()
        constructor(from: PackedFloat32Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*f64*/): void
        push_back(value: number /*f64*/): boolean
        append(value: number /*f64*/): boolean
        append_array(array: PackedFloat32Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        fill(value: number /*f64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*f64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedFloat32Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*f64*/, before: boolean = true): number /*i64*/
        duplicate(): PackedFloat32Array
        find(value: number /*f64*/, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: number /*f64*/, from: number /*i64*/ = -1): number /*i64*/
        count(value: number /*f64*/): number /*i64*/
        static EQUAL(left: PackedFloat32Array, right: PackedFloat32Array): boolean
        static NOT_EQUAL(left: PackedFloat32Array, right: PackedFloat32Array): boolean
    }
    class PackedFloat64Array {
        constructor()
        constructor(from: PackedFloat64Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: number /*f64*/): void
        push_back(value: number /*f64*/): boolean
        append(value: number /*f64*/): boolean
        append_array(array: PackedFloat64Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        fill(value: number /*f64*/): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: number /*f64*/): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedFloat64Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: number /*f64*/, before: boolean = true): number /*i64*/
        duplicate(): PackedFloat64Array
        find(value: number /*f64*/, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: number /*f64*/, from: number /*i64*/ = -1): number /*i64*/
        count(value: number /*f64*/): number /*i64*/
        static EQUAL(left: PackedFloat64Array, right: PackedFloat64Array): boolean
        static NOT_EQUAL(left: PackedFloat64Array, right: PackedFloat64Array): boolean
    }
    class PackedStringArray {
        constructor()
        constructor(from: PackedStringArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: string): void
        push_back(value: string): boolean
        append(value: string): boolean
        append_array(array: PackedStringArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: string): number /*i64*/
        fill(value: string): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: string): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedStringArray
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: string, before: boolean = true): number /*i64*/
        duplicate(): PackedStringArray
        find(value: string, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: string, from: number /*i64*/ = -1): number /*i64*/
        count(value: string): number /*i64*/
        static EQUAL(left: PackedStringArray, right: PackedStringArray): boolean
        static NOT_EQUAL(left: PackedStringArray, right: PackedStringArray): boolean
    }
    class PackedVector2Array {
        constructor()
        constructor(from: PackedVector2Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Vector2): void
        push_back(value: Vector2): boolean
        append(value: Vector2): boolean
        append_array(array: PackedVector2Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Vector2): number /*i64*/
        fill(value: Vector2): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Vector2): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedVector2Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Vector2, before: boolean = true): number /*i64*/
        duplicate(): PackedVector2Array
        find(value: Vector2, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: Vector2, from: number /*i64*/ = -1): number /*i64*/
        count(value: Vector2): number /*i64*/
        static EQUAL(left: PackedVector2Array, right: PackedVector2Array): boolean
        static NOT_EQUAL(left: PackedVector2Array, right: PackedVector2Array): boolean
    }
    class PackedVector3Array {
        constructor()
        constructor(from: PackedVector3Array)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Vector3): void
        push_back(value: Vector3): boolean
        append(value: Vector3): boolean
        append_array(array: PackedVector3Array): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Vector3): number /*i64*/
        fill(value: Vector3): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Vector3): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedVector3Array
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Vector3, before: boolean = true): number /*i64*/
        duplicate(): PackedVector3Array
        find(value: Vector3, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: Vector3, from: number /*i64*/ = -1): number /*i64*/
        count(value: Vector3): number /*i64*/
        static EQUAL(left: PackedVector3Array, right: PackedVector3Array): boolean
        static NOT_EQUAL(left: PackedVector3Array, right: PackedVector3Array): boolean
    }
    class PackedColorArray {
        constructor()
        constructor(from: PackedColorArray)
        constructor(from: Array)
        size(): number /*i64*/
        is_empty(): boolean
        set(index: number /*i64*/, value: Color): void
        push_back(value: Color): boolean
        append(value: Color): boolean
        append_array(array: PackedColorArray): void
        remove_at(index: number /*i64*/): void
        insert(at_index: number /*i64*/, value: Color): number /*i64*/
        fill(value: Color): void
        resize(new_size: number /*i64*/): number /*i64*/
        clear(): void
        has(value: Color): boolean
        reverse(): void
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedColorArray
        to_byte_array(): PackedByteArray
        sort(): void
        bsearch(value: Color, before: boolean = true): number /*i64*/
        duplicate(): PackedColorArray
        find(value: Color, from: number /*i64*/ = 0): number /*i64*/
        rfind(value: Color, from: number /*i64*/ = -1): number /*i64*/
        count(value: Color): number /*i64*/
        static EQUAL(left: PackedColorArray, right: PackedColorArray): boolean
        static NOT_EQUAL(left: PackedColorArray, right: PackedColorArray): boolean
    }
    enum Side {
        SIDE_LEFT = 0,
        SIDE_TOP = 1,
        SIDE_RIGHT = 2,
        SIDE_BOTTOM = 3,
    }
    enum Corner {
        CORNER_TOP_LEFT = 0,
        CORNER_TOP_RIGHT = 1,
        CORNER_BOTTOM_RIGHT = 2,
        CORNER_BOTTOM_LEFT = 3,
    }
    enum Orientation {
        VERTICAL = 1,
        HORIZONTAL = 0,
    }
    enum ClockDirection {
        CLOCKWISE = 0,
        COUNTERCLOCKWISE = 1,
    }
    enum HorizontalAlignment {
        HORIZONTAL_ALIGNMENT_LEFT = 0,
        HORIZONTAL_ALIGNMENT_CENTER = 1,
        HORIZONTAL_ALIGNMENT_RIGHT = 2,
        HORIZONTAL_ALIGNMENT_FILL = 3,
    }
    enum VerticalAlignment {
        VERTICAL_ALIGNMENT_TOP = 0,
        VERTICAL_ALIGNMENT_CENTER = 1,
        VERTICAL_ALIGNMENT_BOTTOM = 2,
        VERTICAL_ALIGNMENT_FILL = 3,
    }
    enum InlineAlignment {
        INLINE_ALIGNMENT_TOP_TO = 0,
        INLINE_ALIGNMENT_CENTER_TO = 1,
        INLINE_ALIGNMENT_BASELINE_TO = 3,
        INLINE_ALIGNMENT_BOTTOM_TO = 2,
        INLINE_ALIGNMENT_TO_TOP = 0,
        INLINE_ALIGNMENT_TO_CENTER = 4,
        INLINE_ALIGNMENT_TO_BASELINE = 8,
        INLINE_ALIGNMENT_TO_BOTTOM = 12,
        INLINE_ALIGNMENT_TOP = 0,
        INLINE_ALIGNMENT_CENTER = 5,
        INLINE_ALIGNMENT_BOTTOM = 14,
        INLINE_ALIGNMENT_IMAGE_MASK = 3,
        INLINE_ALIGNMENT_TEXT_MASK = 12,
    }
    enum EulerOrder {
        EULER_ORDER_XYZ = 0,
        EULER_ORDER_XZY = 1,
        EULER_ORDER_YXZ = 2,
        EULER_ORDER_YZX = 3,
        EULER_ORDER_ZXY = 4,
        EULER_ORDER_ZYX = 5,
    }
    enum Key {
        KEY_NONE = 0,
        KEY_SPECIAL = 4194304,
        KEY_ESCAPE = 4194305,
        KEY_TAB = 4194306,
        KEY_BACKTAB = 4194307,
        KEY_BACKSPACE = 4194308,
        KEY_ENTER = 4194309,
        KEY_KP_ENTER = 4194310,
        KEY_INSERT = 4194311,
        KEY_DELETE = 4194312,
        KEY_PAUSE = 4194313,
        KEY_PRINT = 4194314,
        KEY_SYSREQ = 4194315,
        KEY_CLEAR = 4194316,
        KEY_HOME = 4194317,
        KEY_END = 4194318,
        KEY_LEFT = 4194319,
        KEY_UP = 4194320,
        KEY_RIGHT = 4194321,
        KEY_DOWN = 4194322,
        KEY_PAGEUP = 4194323,
        KEY_PAGEDOWN = 4194324,
        KEY_SHIFT = 4194325,
        KEY_CTRL = 4194326,
        KEY_META = 4194327,
        KEY_ALT = 4194328,
        KEY_CAPSLOCK = 4194329,
        KEY_NUMLOCK = 4194330,
        KEY_SCROLLLOCK = 4194331,
        KEY_F1 = 4194332,
        KEY_F2 = 4194333,
        KEY_F3 = 4194334,
        KEY_F4 = 4194335,
        KEY_F5 = 4194336,
        KEY_F6 = 4194337,
        KEY_F7 = 4194338,
        KEY_F8 = 4194339,
        KEY_F9 = 4194340,
        KEY_F10 = 4194341,
        KEY_F11 = 4194342,
        KEY_F12 = 4194343,
        KEY_F13 = 4194344,
        KEY_F14 = 4194345,
        KEY_F15 = 4194346,
        KEY_F16 = 4194347,
        KEY_F17 = 4194348,
        KEY_F18 = 4194349,
        KEY_F19 = 4194350,
        KEY_F20 = 4194351,
        KEY_F21 = 4194352,
        KEY_F22 = 4194353,
        KEY_F23 = 4194354,
        KEY_F24 = 4194355,
        KEY_F25 = 4194356,
        KEY_F26 = 4194357,
        KEY_F27 = 4194358,
        KEY_F28 = 4194359,
        KEY_F29 = 4194360,
        KEY_F30 = 4194361,
        KEY_F31 = 4194362,
        KEY_F32 = 4194363,
        KEY_F33 = 4194364,
        KEY_F34 = 4194365,
        KEY_F35 = 4194366,
        KEY_KP_MULTIPLY = 4194433,
        KEY_KP_DIVIDE = 4194434,
        KEY_KP_SUBTRACT = 4194435,
        KEY_KP_PERIOD = 4194436,
        KEY_KP_ADD = 4194437,
        KEY_KP_0 = 4194438,
        KEY_KP_1 = 4194439,
        KEY_KP_2 = 4194440,
        KEY_KP_3 = 4194441,
        KEY_KP_4 = 4194442,
        KEY_KP_5 = 4194443,
        KEY_KP_6 = 4194444,
        KEY_KP_7 = 4194445,
        KEY_KP_8 = 4194446,
        KEY_KP_9 = 4194447,
        KEY_MENU = 4194370,
        KEY_HYPER = 4194371,
        KEY_HELP = 4194373,
        KEY_BACK = 4194376,
        KEY_FORWARD = 4194377,
        KEY_STOP = 4194378,
        KEY_REFRESH = 4194379,
        KEY_VOLUMEDOWN = 4194380,
        KEY_VOLUMEMUTE = 4194381,
        KEY_VOLUMEUP = 4194382,
        KEY_MEDIAPLAY = 4194388,
        KEY_MEDIASTOP = 4194389,
        KEY_MEDIAPREVIOUS = 4194390,
        KEY_MEDIANEXT = 4194391,
        KEY_MEDIARECORD = 4194392,
        KEY_HOMEPAGE = 4194393,
        KEY_FAVORITES = 4194394,
        KEY_SEARCH = 4194395,
        KEY_STANDBY = 4194396,
        KEY_OPENURL = 4194397,
        KEY_LAUNCHMAIL = 4194398,
        KEY_LAUNCHMEDIA = 4194399,
        KEY_LAUNCH0 = 4194400,
        KEY_LAUNCH1 = 4194401,
        KEY_LAUNCH2 = 4194402,
        KEY_LAUNCH3 = 4194403,
        KEY_LAUNCH4 = 4194404,
        KEY_LAUNCH5 = 4194405,
        KEY_LAUNCH6 = 4194406,
        KEY_LAUNCH7 = 4194407,
        KEY_LAUNCH8 = 4194408,
        KEY_LAUNCH9 = 4194409,
        KEY_LAUNCHA = 4194410,
        KEY_LAUNCHB = 4194411,
        KEY_LAUNCHC = 4194412,
        KEY_LAUNCHD = 4194413,
        KEY_LAUNCHE = 4194414,
        KEY_LAUNCHF = 4194415,
        KEY_GLOBE = 4194416,
        KEY_KEYBOARD = 4194417,
        KEY_JIS_EISU = 4194418,
        KEY_JIS_KANA = 4194419,
        KEY_UNKNOWN = 8388607,
        KEY_SPACE = 32,
        KEY_EXCLAM = 33,
        KEY_QUOTEDBL = 34,
        KEY_NUMBERSIGN = 35,
        KEY_DOLLAR = 36,
        KEY_PERCENT = 37,
        KEY_AMPERSAND = 38,
        KEY_APOSTROPHE = 39,
        KEY_PARENLEFT = 40,
        KEY_PARENRIGHT = 41,
        KEY_ASTERISK = 42,
        KEY_PLUS = 43,
        KEY_COMMA = 44,
        KEY_MINUS = 45,
        KEY_PERIOD = 46,
        KEY_SLASH = 47,
        KEY_0 = 48,
        KEY_1 = 49,
        KEY_2 = 50,
        KEY_3 = 51,
        KEY_4 = 52,
        KEY_5 = 53,
        KEY_6 = 54,
        KEY_7 = 55,
        KEY_8 = 56,
        KEY_9 = 57,
        KEY_COLON = 58,
        KEY_SEMICOLON = 59,
        KEY_LESS = 60,
        KEY_EQUAL = 61,
        KEY_GREATER = 62,
        KEY_QUESTION = 63,
        KEY_AT = 64,
        KEY_A = 65,
        KEY_B = 66,
        KEY_C = 67,
        KEY_D = 68,
        KEY_E = 69,
        KEY_F = 70,
        KEY_G = 71,
        KEY_H = 72,
        KEY_I = 73,
        KEY_J = 74,
        KEY_K = 75,
        KEY_L = 76,
        KEY_M = 77,
        KEY_N = 78,
        KEY_O = 79,
        KEY_P = 80,
        KEY_Q = 81,
        KEY_R = 82,
        KEY_S = 83,
        KEY_T = 84,
        KEY_U = 85,
        KEY_V = 86,
        KEY_W = 87,
        KEY_X = 88,
        KEY_Y = 89,
        KEY_Z = 90,
        KEY_BRACKETLEFT = 91,
        KEY_BACKSLASH = 92,
        KEY_BRACKETRIGHT = 93,
        KEY_ASCIICIRCUM = 94,
        KEY_UNDERSCORE = 95,
        KEY_QUOTELEFT = 96,
        KEY_BRACELEFT = 123,
        KEY_BAR = 124,
        KEY_BRACERIGHT = 125,
        KEY_ASCIITILDE = 126,
        KEY_YEN = 165,
        KEY_SECTION = 167,
    }
    enum KeyModifierMask {
        KEY_CODE_MASK = 8388607,
        KEY_MODIFIER_MASK = 532676608,
        KEY_MASK_CMD_OR_CTRL = 16777216,
        KEY_MASK_SHIFT = 33554432,
        KEY_MASK_ALT = 67108864,
        KEY_MASK_META = 134217728,
        KEY_MASK_CTRL = 268435456,
        KEY_MASK_KPAD = 536870912,
        KEY_MASK_GROUP_SWITCH = 1073741824,
    }
    enum MouseButton {
        MOUSE_BUTTON_NONE = 0,
        MOUSE_BUTTON_LEFT = 1,
        MOUSE_BUTTON_RIGHT = 2,
        MOUSE_BUTTON_MIDDLE = 3,
        MOUSE_BUTTON_WHEEL_UP = 4,
        MOUSE_BUTTON_WHEEL_DOWN = 5,
        MOUSE_BUTTON_WHEEL_LEFT = 6,
        MOUSE_BUTTON_WHEEL_RIGHT = 7,
        MOUSE_BUTTON_XBUTTON1 = 8,
        MOUSE_BUTTON_XBUTTON2 = 9,
    }
    enum MouseButtonMask {
        MOUSE_BUTTON_MASK_LEFT = 1,
        MOUSE_BUTTON_MASK_RIGHT = 2,
        MOUSE_BUTTON_MASK_MIDDLE = 4,
        MOUSE_BUTTON_MASK_MB_XBUTTON1 = 128,
        MOUSE_BUTTON_MASK_MB_XBUTTON2 = 256,
    }
    enum JoyButton {
        JOY_BUTTON_INVALID = -1,
        JOY_BUTTON_A = 0,
        JOY_BUTTON_B = 1,
        JOY_BUTTON_X = 2,
        JOY_BUTTON_Y = 3,
        JOY_BUTTON_BACK = 4,
        JOY_BUTTON_GUIDE = 5,
        JOY_BUTTON_START = 6,
        JOY_BUTTON_LEFT_STICK = 7,
        JOY_BUTTON_RIGHT_STICK = 8,
        JOY_BUTTON_LEFT_SHOULDER = 9,
        JOY_BUTTON_RIGHT_SHOULDER = 10,
        JOY_BUTTON_DPAD_UP = 11,
        JOY_BUTTON_DPAD_DOWN = 12,
        JOY_BUTTON_DPAD_LEFT = 13,
        JOY_BUTTON_DPAD_RIGHT = 14,
        JOY_BUTTON_MISC1 = 15,
        JOY_BUTTON_PADDLE1 = 16,
        JOY_BUTTON_PADDLE2 = 17,
        JOY_BUTTON_PADDLE3 = 18,
        JOY_BUTTON_PADDLE4 = 19,
        JOY_BUTTON_TOUCHPAD = 20,
        JOY_BUTTON_SDL_MAX = 21,
        JOY_BUTTON_MAX = 128,
    }
    enum JoyAxis {
        JOY_AXIS_INVALID = -1,
        JOY_AXIS_LEFT_X = 0,
        JOY_AXIS_LEFT_Y = 1,
        JOY_AXIS_RIGHT_X = 2,
        JOY_AXIS_RIGHT_Y = 3,
        JOY_AXIS_TRIGGER_LEFT = 4,
        JOY_AXIS_TRIGGER_RIGHT = 5,
        JOY_AXIS_SDL_MAX = 6,
        JOY_AXIS_MAX = 10,
    }
    enum MIDIMessage {
        MIDI_MESSAGE_NONE = 0,
        MIDI_MESSAGE_NOTE_OFF = 8,
        MIDI_MESSAGE_NOTE_ON = 9,
        MIDI_MESSAGE_AFTERTOUCH = 10,
        MIDI_MESSAGE_CONTROL_CHANGE = 11,
        MIDI_MESSAGE_PROGRAM_CHANGE = 12,
        MIDI_MESSAGE_CHANNEL_PRESSURE = 13,
        MIDI_MESSAGE_PITCH_BEND = 14,
        MIDI_MESSAGE_SYSTEM_EXCLUSIVE = 240,
        MIDI_MESSAGE_QUARTER_FRAME = 241,
        MIDI_MESSAGE_SONG_POSITION_POINTER = 242,
        MIDI_MESSAGE_SONG_SELECT = 243,
        MIDI_MESSAGE_TUNE_REQUEST = 246,
        MIDI_MESSAGE_TIMING_CLOCK = 248,
        MIDI_MESSAGE_START = 250,
        MIDI_MESSAGE_CONTINUE = 251,
        MIDI_MESSAGE_STOP = 252,
        MIDI_MESSAGE_ACTIVE_SENSING = 254,
        MIDI_MESSAGE_SYSTEM_RESET = 255,
    }
    enum Error {
        OK = 0,
        FAILED = 1,
        ERR_UNAVAILABLE = 2,
        ERR_UNCONFIGURED = 3,
        ERR_UNAUTHORIZED = 4,
        ERR_PARAMETER_RANGE_ERROR = 5,
        ERR_OUT_OF_MEMORY = 6,
        ERR_FILE_NOT_FOUND = 7,
        ERR_FILE_BAD_DRIVE = 8,
        ERR_FILE_BAD_PATH = 9,
        ERR_FILE_NO_PERMISSION = 10,
        ERR_FILE_ALREADY_IN_USE = 11,
        ERR_FILE_CANT_OPEN = 12,
        ERR_FILE_CANT_WRITE = 13,
        ERR_FILE_CANT_READ = 14,
        ERR_FILE_UNRECOGNIZED = 15,
        ERR_FILE_CORRUPT = 16,
        ERR_FILE_MISSING_DEPENDENCIES = 17,
        ERR_FILE_EOF = 18,
        ERR_CANT_OPEN = 19,
        ERR_CANT_CREATE = 20,
        ERR_QUERY_FAILED = 21,
        ERR_ALREADY_IN_USE = 22,
        ERR_LOCKED = 23,
        ERR_TIMEOUT = 24,
        ERR_CANT_CONNECT = 25,
        ERR_CANT_RESOLVE = 26,
        ERR_CONNECTION_ERROR = 27,
        ERR_CANT_ACQUIRE_RESOURCE = 28,
        ERR_CANT_FORK = 29,
        ERR_INVALID_DATA = 30,
        ERR_INVALID_PARAMETER = 31,
        ERR_ALREADY_EXISTS = 32,
        ERR_DOES_NOT_EXIST = 33,
        ERR_DATABASE_CANT_READ = 34,
        ERR_DATABASE_CANT_WRITE = 35,
        ERR_COMPILATION_FAILED = 36,
        ERR_METHOD_NOT_FOUND = 37,
        ERR_LINK_FAILED = 38,
        ERR_SCRIPT_FAILED = 39,
        ERR_CYCLIC_LINK = 40,
        ERR_INVALID_DECLARATION = 41,
        ERR_DUPLICATE_SYMBOL = 42,
        ERR_PARSE_ERROR = 43,
        ERR_BUSY = 44,
        ERR_SKIP = 45,
        ERR_HELP = 46,
        ERR_BUG = 47,
        ERR_PRINTER_ON_FIRE = 48,
    }
    enum PropertyHint {
        PROPERTY_HINT_NONE = 0,
        PROPERTY_HINT_RANGE = 1,
        PROPERTY_HINT_ENUM = 2,
        PROPERTY_HINT_ENUM_SUGGESTION = 3,
        PROPERTY_HINT_EXP_EASING = 4,
        PROPERTY_HINT_LINK = 5,
        PROPERTY_HINT_FLAGS = 6,
        PROPERTY_HINT_LAYERS_2D_RENDER = 7,
        PROPERTY_HINT_LAYERS_2D_PHYSICS = 8,
        PROPERTY_HINT_LAYERS_2D_NAVIGATION = 9,
        PROPERTY_HINT_LAYERS_3D_RENDER = 10,
        PROPERTY_HINT_LAYERS_3D_PHYSICS = 11,
        PROPERTY_HINT_LAYERS_3D_NAVIGATION = 12,
        PROPERTY_HINT_LAYERS_AVOIDANCE = 37,
        PROPERTY_HINT_FILE = 13,
        PROPERTY_HINT_DIR = 14,
        PROPERTY_HINT_GLOBAL_FILE = 15,
        PROPERTY_HINT_GLOBAL_DIR = 16,
        PROPERTY_HINT_RESOURCE_TYPE = 17,
        PROPERTY_HINT_MULTILINE_TEXT = 18,
        PROPERTY_HINT_EXPRESSION = 19,
        PROPERTY_HINT_PLACEHOLDER_TEXT = 20,
        PROPERTY_HINT_COLOR_NO_ALPHA = 21,
        PROPERTY_HINT_OBJECT_ID = 22,
        PROPERTY_HINT_TYPE_STRING = 23,
        PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE = 24,
        PROPERTY_HINT_OBJECT_TOO_BIG = 25,
        PROPERTY_HINT_NODE_PATH_VALID_TYPES = 26,
        PROPERTY_HINT_SAVE_FILE = 27,
        PROPERTY_HINT_GLOBAL_SAVE_FILE = 28,
        PROPERTY_HINT_INT_IS_OBJECTID = 29,
        PROPERTY_HINT_INT_IS_POINTER = 30,
        PROPERTY_HINT_ARRAY_TYPE = 31,
        PROPERTY_HINT_LOCALE_ID = 32,
        PROPERTY_HINT_LOCALIZABLE_STRING = 33,
        PROPERTY_HINT_NODE_TYPE = 34,
        PROPERTY_HINT_HIDE_QUATERNION_EDIT = 35,
        PROPERTY_HINT_PASSWORD = 36,
        PROPERTY_HINT_MAX = 38,
    }
    enum PropertyUsageFlags {
        PROPERTY_USAGE_NONE = 0,
        PROPERTY_USAGE_STORAGE = 2,
        PROPERTY_USAGE_EDITOR = 4,
        PROPERTY_USAGE_INTERNAL = 8,
        PROPERTY_USAGE_CHECKABLE = 16,
        PROPERTY_USAGE_CHECKED = 32,
        PROPERTY_USAGE_GROUP = 64,
        PROPERTY_USAGE_CATEGORY = 128,
        PROPERTY_USAGE_SUBGROUP = 256,
        PROPERTY_USAGE_CLASS_IS_BITFIELD = 512,
        PROPERTY_USAGE_NO_INSTANCE_STATE = 1024,
        PROPERTY_USAGE_RESTART_IF_CHANGED = 2048,
        PROPERTY_USAGE_SCRIPT_VARIABLE = 4096,
        PROPERTY_USAGE_STORE_IF_NULL = 8192,
        PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 16384,
        PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 32768,
        PROPERTY_USAGE_CLASS_IS_ENUM = 65536,
        PROPERTY_USAGE_NIL_IS_VARIANT = 131072,
        PROPERTY_USAGE_ARRAY = 262144,
        PROPERTY_USAGE_ALWAYS_DUPLICATE = 524288,
        PROPERTY_USAGE_NEVER_DUPLICATE = 1048576,
        PROPERTY_USAGE_HIGH_END_GFX = 2097152,
        PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 4194304,
        PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 8388608,
        PROPERTY_USAGE_KEYING_INCREMENTS = 16777216,
        PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 33554432,
        PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 67108864,
        PROPERTY_USAGE_EDITOR_BASIC_SETTING = 134217728,
        PROPERTY_USAGE_READ_ONLY = 268435456,
        PROPERTY_USAGE_SECRET = 536870912,
        PROPERTY_USAGE_DEFAULT = 6,
        PROPERTY_USAGE_NO_EDITOR = 2,
    }
    enum MethodFlags {
        METHOD_FLAG_NORMAL = 1,
        METHOD_FLAG_EDITOR = 2,
        METHOD_FLAG_CONST = 4,
        METHOD_FLAG_VIRTUAL = 8,
        METHOD_FLAG_VARARG = 16,
        METHOD_FLAG_STATIC = 32,
        METHOD_FLAG_OBJECT_CORE = 64,
        METHOD_FLAGS_DEFAULT = 1,
    }
    namespace Variant {
        enum Type {
            TYPE_NIL = 0,
            TYPE_BOOL = 1,
            TYPE_INT = 2,
            TYPE_FLOAT = 3,
            TYPE_STRING = 4,
            TYPE_VECTOR2 = 5,
            TYPE_VECTOR2I = 6,
            TYPE_RECT2 = 7,
            TYPE_RECT2I = 8,
            TYPE_VECTOR3 = 9,
            TYPE_VECTOR3I = 10,
            TYPE_TRANSFORM2D = 11,
            TYPE_VECTOR4 = 12,
            TYPE_VECTOR4I = 13,
            TYPE_PLANE = 14,
            TYPE_QUATERNION = 15,
            TYPE_AABB = 16,
            TYPE_BASIS = 17,
            TYPE_TRANSFORM3D = 18,
            TYPE_PROJECTION = 19,
            TYPE_COLOR = 20,
            TYPE_STRING_NAME = 21,
            TYPE_NODE_PATH = 22,
            TYPE_RID = 23,
            TYPE_OBJECT = 24,
            TYPE_CALLABLE = 25,
            TYPE_SIGNAL = 26,
            TYPE_DICTIONARY = 27,
            TYPE_ARRAY = 28,
            TYPE_PACKED_BYTE_ARRAY = 29,
            TYPE_PACKED_INT32_ARRAY = 30,
            TYPE_PACKED_INT64_ARRAY = 31,
            TYPE_PACKED_FLOAT32_ARRAY = 32,
            TYPE_PACKED_FLOAT64_ARRAY = 33,
            TYPE_PACKED_STRING_ARRAY = 34,
            TYPE_PACKED_VECTOR2_ARRAY = 35,
            TYPE_PACKED_VECTOR3_ARRAY = 36,
            TYPE_PACKED_COLOR_ARRAY = 37,
            TYPE_MAX = 38,
        }
    }
    namespace Variant {
        enum Operator {
            OP_EQUAL = 0,
            OP_NOT_EQUAL = 1,
            OP_LESS = 2,
            OP_LESS_EQUAL = 3,
            OP_GREATER = 4,
            OP_GREATER_EQUAL = 5,
            OP_ADD = 6,
            OP_SUBTRACT = 7,
            OP_MULTIPLY = 8,
            OP_DIVIDE = 9,
            OP_NEGATE = 10,
            OP_POSITIVE = 11,
            OP_MODULE = 12,
            OP_POWER = 13,
            OP_SHIFT_LEFT = 14,
            OP_SHIFT_RIGHT = 15,
            OP_BIT_AND = 16,
            OP_BIT_OR = 17,
            OP_BIT_XOR = 18,
            OP_BIT_NEGATE = 19,
            OP_AND = 20,
            OP_OR = 21,
            OP_XOR = 22,
            OP_NOT = 23,
            OP_IN = 24,
            OP_MAX = 25,
        }
    }
}
