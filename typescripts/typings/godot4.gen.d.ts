// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** A container that arranges its child controls vertically. */
    class VBoxContainer extends BoxContainer {
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders. */
    class VFlowContainer extends FlowContainer {
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max). */
    class VScrollBar extends ScrollBar {
    }
    /** A vertical line used for separating other controls. */
    class VSeparator extends Separator {
    }
    /** A vertical slider that goes from bottom (min) to top (max). */
    class VSlider extends Slider {
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio. */
    class VSplitContainer extends SplitContainer {
    }
    /** A 3D physics body that simulates the behavior of a car. */
    class VehicleBody3D extends RigidBody3D {
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to [code]true[/code] and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.
         *  [b]Note:[/b] The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.
         *  A negative value will result in the vehicle reversing.
         */
        engine_force: number /*f64*/
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        brake: number /*f64*/
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to [code]true[/code] will automatically be rotated.
         *  [b]Note:[/b] This property is edited in the inspector in degrees. In code the property is set in radians.
         */
        steering: number /*f64*/
    }
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel. */
    class VehicleWheel3D extends Node3D {
        set_radius(length: number /*f64*/): void
        get_radius(): number /*f64*/
        set_suspension_rest_length(length: number /*f64*/): void
        get_suspension_rest_length(): number /*f64*/
        set_suspension_travel(length: number /*f64*/): void
        get_suspension_travel(): number /*f64*/
        set_suspension_stiffness(length: number /*f64*/): void
        get_suspension_stiffness(): number /*f64*/
        set_suspension_max_force(length: number /*f64*/): void
        get_suspension_max_force(): number /*f64*/
        set_damping_compression(length: number /*f64*/): void
        get_damping_compression(): number /*f64*/
        set_damping_relaxation(length: number /*f64*/): void
        get_damping_relaxation(): number /*f64*/
        set_use_as_traction(enable: boolean): void
        is_used_as_traction(): boolean
        set_use_as_steering(enable: boolean): void
        is_used_as_steering(): boolean
        set_friction_slip(length: number /*f64*/): void
        get_friction_slip(): number /*f64*/
        /** Returns [code]true[/code] if this wheel is in contact with a surface. */
        is_in_contact(): boolean
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].
         *  Returns [code]null[/code] if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].
         */
        get_contact_body(): Node3D
        set_roll_influence(roll_influence: number /*f64*/): void
        get_roll_influence(): number /*f64*/
        /** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
        get_skidinfo(): number /*f64*/
        /** Returns the rotational speed of the wheel in revolutions per minute. */
        get_rpm(): number /*f64*/
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        /** Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.
         *  [b]Note:[/b] The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.
         *  A negative value will result in the wheel reversing.
         */
        engine_force: number /*f64*/
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        brake: number /*f64*/
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        steering: number /*f64*/
        /** If [code]true[/code], this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        use_as_traction: boolean
        /** If [code]true[/code], this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
        use_as_steering: boolean
        /** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over. */
        wheel_roll_influence: number /*f64*/
        /** The radius of the wheel in meters. */
        wheel_radius: number /*f64*/
        /** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
        wheel_rest_length: number /*f64*/
        /** This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.
         *  It's best to set this to 1.0 when starting out.
         */
        wheel_friction_slip: number /*f64*/
        /** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
        suspension_travel: number /*f64*/
        /** This value defines the stiffness of the suspension. Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
        suspension_stiffness: number /*f64*/
        /** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
        suspension_max_force: number /*f64*/
        /** The damping applied to the spring when the spring is being compressed. This value should be between 0.0 (no damping) and 1.0. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
        damping_compression: number /*f64*/
        /** The damping applied to the spring when relaxing. This value should be between 0.0 (no damping) and 1.0. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
        damping_relaxation: number /*f64*/
    }
    class VehicleWheel3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class VersionControlEditorPlugin extends EditorPlugin {
    }
    /** Base resource for video streams. */
    class VideoStream extends Resource {
        /* gdvirtual */ _instantiate_playback(): VideoStreamPlayback
        set_file(file: string): void
        get_file(): string
        /** The video file path or URI that this [VideoStream] resource handles.
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the [code].ogv[/code] extension.
         */
        file: string
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer]. */
    class VideoStreamPlayback extends Resource {
        /* gdvirtual */ _stop(): void
        /* gdvirtual */ _play(): void
        /* gdvirtual */ _is_playing(): boolean
        /* gdvirtual */ _set_paused(paused: boolean): void
        /* gdvirtual */ _is_paused(): boolean
        /* gdvirtual */ _get_length(): number /*f64*/
        /* gdvirtual */ _get_playback_position(): number /*f64*/
        /* gdvirtual */ _seek(time: number /*f64*/): void
        /* gdvirtual */ _set_audio_track(idx: number /*i64*/): void
        /* gdvirtual */ _get_texture(): Texture2D
        /* gdvirtual */ _update(delta: number /*f64*/): void
        /* gdvirtual */ _get_channels(): number /*i64*/
        /* gdvirtual */ _get_mix_rate(): number /*i64*/
        /** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
        mix_audio(num_frames: number /*i64*/, buffer: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/, offset: number /*i64*/ = 0): number /*i64*/
    }
    /** A control used for video playback. */
    class VideoStreamPlayer extends Control {
        set_stream(stream: VideoStream): void
        get_stream(): VideoStream
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        /** Stops the video playback and sets the stream position to 0.
         *  [b]Note:[/b] Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.
         */
        stop(): void
        /** Returns [code]true[/code] if the video is playing.
         *  [b]Note:[/b] The video is still considered playing if paused during playback.
         */
        is_playing(): boolean
        set_paused(paused: boolean): void
        is_paused(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_volume(volume: number /*f64*/): void
        get_volume(): number /*f64*/
        set_volume_db(db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_audio_track(track: number /*i64*/): void
        get_audio_track(): number /*i64*/
        /** Returns the video stream's name, or [code]"<No Stream>"[/code] if no video stream is assigned. */
        get_stream_name(): string
        /** The length of the current stream, in seconds.
         *  [b]Note:[/b] For [VideoStreamTheora] streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.
         */
        get_stream_length(): number /*f64*/
        set_stream_position(position: number /*f64*/): void
        get_stream_position(): number /*f64*/
        set_autoplay(enabled: boolean): void
        has_autoplay(): boolean
        set_expand(enable: boolean): void
        has_expand(): boolean
        set_buffering_msec(msec: number /*i64*/): void
        get_buffering_msec(): number /*i64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        /** Returns the current frame as a [Texture2D]. */
        get_video_texture(): Texture2D
        /** The embedded audio track to play. */
        audio_track: number /*i64*/
        /** The assigned video stream. See description for supported formats. */
        stream: VideoStream
        /** Audio volume in dB. */
        volume_db: number /*f64*/
        /** Audio volume as a linear value. */
        volume: number /*f64*/
        /** If [code]true[/code], playback starts when the scene loads. */
        autoplay: boolean
        /** If [code]true[/code], the video is paused. */
        paused: boolean
        /** If [code]true[/code], the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        expand: boolean
        /** If [code]true[/code], the video restarts when it reaches its end. */
        loop: boolean
        /** Amount of time in milliseconds to store in buffer while playing. */
        buffering_msec: number /*i64*/
        /** The current position of the stream, in seconds.
         *  [b]Note:[/b] Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.
         */
        stream_position: number /*f64*/
        /** Audio bus to use for sound playback. */
        bus: StringName
        readonly finished: Signal
    }
    /** [VideoStream] resource for Ogg Theora videos. */
    class VideoStreamTheora extends VideoStream {
    }
    class ViewPanner extends RefCounted {
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
            SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
            SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
            SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
            SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
            SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
            SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
            SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7,
        }
        enum Scaling3DMode {
            SCALING_3D_MODE_BILINEAR = 0,
            SCALING_3D_MODE_FSR = 1,
            SCALING_3D_MODE_FSR2 = 2,
            SCALING_3D_MODE_MAX = 3,
        }
        enum MSAA {
            MSAA_DISABLED = 0,
            MSAA_2X = 1,
            MSAA_4X = 2,
            MSAA_8X = 3,
            MSAA_MAX = 4,
        }
        enum ScreenSpaceAA {
            SCREEN_SPACE_AA_DISABLED = 0,
            SCREEN_SPACE_AA_FXAA = 1,
            SCREEN_SPACE_AA_MAX = 2,
        }
        enum RenderInfo {
            RENDER_INFO_OBJECTS_IN_FRAME = 0,
            RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            RENDER_INFO_MAX = 3,
        }
        enum RenderInfoType {
            RENDER_INFO_TYPE_VISIBLE = 0,
            RENDER_INFO_TYPE_SHADOW = 1,
            RENDER_INFO_TYPE_MAX = 2,
        }
        enum DebugDraw {
            DEBUG_DRAW_DISABLED = 0,
            DEBUG_DRAW_UNSHADED = 1,
            DEBUG_DRAW_LIGHTING = 2,
            DEBUG_DRAW_OVERDRAW = 3,
            DEBUG_DRAW_WIREFRAME = 4,
            DEBUG_DRAW_NORMAL_BUFFER = 5,
            DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            DEBUG_DRAW_SHADOW_ATLAS = 9,
            DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            DEBUG_DRAW_SCENE_LUMINANCE = 11,
            DEBUG_DRAW_SSAO = 12,
            DEBUG_DRAW_SSIL = 13,
            DEBUG_DRAW_PSSM_SPLITS = 14,
            DEBUG_DRAW_DECAL_ATLAS = 15,
            DEBUG_DRAW_SDFGI = 16,
            DEBUG_DRAW_SDFGI_PROBES = 17,
            DEBUG_DRAW_GI_BUFFER = 18,
            DEBUG_DRAW_DISABLE_LOD = 19,
            DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            DEBUG_DRAW_CLUSTER_DECALS = 22,
            DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            DEBUG_DRAW_OCCLUDERS = 24,
            DEBUG_DRAW_MOTION_VECTORS = 25,
            DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3,
        }
        enum SDFOversize {
            SDF_OVERSIZE_100_PERCENT = 0,
            SDF_OVERSIZE_120_PERCENT = 1,
            SDF_OVERSIZE_150_PERCENT = 2,
            SDF_OVERSIZE_200_PERCENT = 3,
            SDF_OVERSIZE_MAX = 4,
        }
        enum SDFScale {
            SDF_SCALE_100_PERCENT = 0,
            SDF_SCALE_50_PERCENT = 1,
            SDF_SCALE_25_PERCENT = 2,
            SDF_SCALE_MAX = 3,
        }
        enum VRSMode {
            VRS_DISABLED = 0,
            VRS_TEXTURE = 1,
            VRS_XR = 2,
            VRS_MAX = 3,
        }
    }
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world. */
    class Viewport extends Node {
        set_world_2d(world_2d: World2D): void
        get_world_2d(): World2D
        /** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
        find_world_2d(): World2D
        set_canvas_transform(xform: Transform2D): void
        get_canvas_transform(): Transform2D
        set_global_canvas_transform(xform: Transform2D): void
        get_global_canvas_transform(): Transform2D
        /** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
        get_final_transform(): Transform2D
        /** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
        get_screen_transform(): Transform2D
        /** Returns the visible rectangle in global screen coordinates. */
        get_visible_rect(): Rect2
        set_transparent_background(enable: boolean): void
        has_transparent_background(): boolean
        set_use_hdr_2d(enable: boolean): void
        is_using_hdr_2d(): boolean
        set_msaa_2d(msaa: Viewport.MSAA): void
        get_msaa_2d(): Viewport.MSAA
        set_msaa_3d(msaa: Viewport.MSAA): void
        get_msaa_3d(): Viewport.MSAA
        set_screen_space_aa(screen_space_aa: Viewport.ScreenSpaceAA): void
        get_screen_space_aa(): Viewport.ScreenSpaceAA
        set_use_taa(enable: boolean): void
        is_using_taa(): boolean
        set_use_debanding(enable: boolean): void
        is_using_debanding(): boolean
        set_use_occlusion_culling(enable: boolean): void
        is_using_occlusion_culling(): boolean
        set_debug_draw(debug_draw: Viewport.DebugDraw): void
        get_debug_draw(): Viewport.DebugDraw
        /** Returns rendering statistics of the given type. See [enum RenderInfoType] and [enum RenderInfo] for options. */
        get_render_info(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): number /*i64*/
        /** Returns the viewport's texture.
         *  [b]Note:[/b] When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.
         *  
         */
        get_texture(): ViewportTexture
        set_physics_object_picking(enable: boolean): void
        get_physics_object_picking(): boolean
        set_physics_object_picking_sort(enable: boolean): void
        get_physics_object_picking_sort(): boolean
        /** Returns the viewport's RID from the [RenderingServer]. */
        get_viewport_rid(): RID
        /** Helper method which calls the [code]set_text()[/code] method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        push_text_input(text: string): void
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.
         *  If [param in_local_coords] is [code]false[/code], the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is [code]true[/code], the event's position is in viewport coordinates.
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].
         *  Calling this method will propagate calls to child nodes for following methods in the given order:
         *  - [method Node._input]
         *  - [method Control._gui_input] for [Control] nodes
         *  - [method Node._shortcut_input]
         *  - [method Node._unhandled_key_input]
         *  - [method Node._unhandled_input]
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.
         *  If none of the methods handle the event and [member physics_object_picking] is [code]true[/code], the event is used for physics object picking.
         */
        push_input(event: InputEvent, in_local_coords: boolean = false): void
        /** Triggers the given [InputEvent] in this [Viewport]. This can be used to pass input events between viewports, or to locally apply inputs that were sent over the network or saved to a file.
         *  If [param in_local_coords] is [code]false[/code], the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is [code]true[/code], the event's position is in viewport coordinates.
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].
         *  Calling this method will propagate calls to child nodes for following methods in the given order:
         *  - [method Node._shortcut_input]
         *  - [method Node._unhandled_key_input]
         *  - [method Node._unhandled_input]
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.
         *  If none of the methods handle the event and [member physics_object_picking] is [code]true[/code], the event is used for physics object picking.
         *  [b]Note:[/b] This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.
         *  [i]Deprecated.[/i] Use [method push_input] instead.
         */
        push_unhandled_input(event: InputEvent, in_local_coords: boolean = false): void
        /** Returns the currently active 2D camera. Returns null if there are no active cameras. */
        get_camera_2d(): Camera2D
        set_as_audio_listener_2d(enable: boolean): void
        is_audio_listener_2d(): boolean
        /** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
        get_mouse_position(): Vector2
        /** Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].
         *  [b]Note:[/b] [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
         */
        warp_mouse(position: Vector2): void
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective [code]mouse_exited[/code] counterparts. */
        update_mouse_cursor_state(): void
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        gui_get_drag_data(): any
        /** Returns [code]true[/code] if the viewport is currently performing a drag operation.
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.
         */
        gui_is_dragging(): boolean
        /** Returns [code]true[/code] if the drag operation is successful. */
        gui_is_drag_successful(): boolean
        /** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
        gui_release_focus(): void
        /** Returns the [Control] having the focus within this viewport. If no [Control] has the focus, returns null. */
        gui_get_focus_owner(): Control
        set_disable_input(disable: boolean): void
        is_input_disabled(): boolean
        _gui_remove_focus_for_window(_unnamed_arg0: Node): void
        _post_gui_grab_click_focus(): void
        set_positional_shadow_atlas_size(size: number /*i64*/): void
        get_positional_shadow_atlas_size(): number /*i64*/
        set_positional_shadow_atlas_16_bits(enable: boolean): void
        get_positional_shadow_atlas_16_bits(): boolean
        set_snap_controls_to_pixels(enabled: boolean): void
        is_snap_controls_to_pixels_enabled(): boolean
        set_snap_2d_transforms_to_pixel(enabled: boolean): void
        is_snap_2d_transforms_to_pixel_enabled(): boolean
        set_snap_2d_vertices_to_pixel(enabled: boolean): void
        is_snap_2d_vertices_to_pixel_enabled(): boolean
        /** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
        set_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        /** Returns the [enum PositionalShadowAtlasQuadrantSubdiv] of the specified quadrant. */
        get_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/): Viewport.PositionalShadowAtlasQuadrantSubdiv
        /** Stops the input from propagating further down the [SceneTree].
         *  [b]Note:[/b] This does not affect the methods in [Input], only the way events are propagated.
         */
        set_input_as_handled(): void
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.
         *  If [member handle_input_locally] is set to [code]false[/code], this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.
         */
        is_input_handled(): boolean
        set_handle_input_locally(enable: boolean): void
        is_handling_input_locally(): boolean
        set_default_canvas_item_texture_filter(mode: Viewport.DefaultCanvasItemTextureFilter): void
        get_default_canvas_item_texture_filter(): Viewport.DefaultCanvasItemTextureFilter
        set_embedding_subwindows(enable: boolean): void
        is_embedding_subwindows(): boolean
        /** Returns a list of the visible embedded [Window]s inside the viewport.
         *  [b]Note:[/b] [Window]s inside other viewports will not be listed.
         */
        get_embedded_subwindows(): Array
        set_canvas_cull_mask(mask: number /*i64*/): void
        get_canvas_cull_mask(): number /*i64*/
        /** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
        set_canvas_cull_mask_bit(layer: number /*i64*/, enable: boolean): void
        /** Returns an individual bit on the rendering layer mask. */
        get_canvas_cull_mask_bit(layer: number /*i64*/): boolean
        set_default_canvas_item_texture_repeat(mode: Viewport.DefaultCanvasItemTextureRepeat): void
        get_default_canvas_item_texture_repeat(): Viewport.DefaultCanvasItemTextureRepeat
        set_sdf_oversize(oversize: Viewport.SDFOversize): void
        get_sdf_oversize(): Viewport.SDFOversize
        set_sdf_scale(scale: Viewport.SDFScale): void
        get_sdf_scale(): Viewport.SDFScale
        set_mesh_lod_threshold(pixels: number /*f64*/): void
        get_mesh_lod_threshold(): number /*f64*/
        _process_picking(): void
        set_world_3d(world_3d: World3D): void
        get_world_3d(): World3D
        /** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
        find_world_3d(): World3D
        set_use_own_world_3d(enable: boolean): void
        is_using_own_world_3d(): boolean
        /** Returns the currently active 3D camera. */
        get_camera_3d(): Camera3D
        set_as_audio_listener_3d(enable: boolean): void
        is_audio_listener_3d(): boolean
        set_disable_3d(disable: boolean): void
        is_3d_disabled(): boolean
        set_use_xr(use: boolean): void
        is_using_xr(): boolean
        set_scaling_3d_mode(scaling_3d_mode: Viewport.Scaling3DMode): void
        get_scaling_3d_mode(): Viewport.Scaling3DMode
        set_scaling_3d_scale(scale: number /*f64*/): void
        get_scaling_3d_scale(): number /*f64*/
        set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        get_fsr_sharpness(): number /*f64*/
        set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        get_texture_mipmap_bias(): number /*f64*/
        set_vrs_mode(mode: Viewport.VRSMode): void
        get_vrs_mode(): Viewport.VRSMode
        set_vrs_texture(texture: Texture2D): void
        get_vrs_texture(): Texture2D
        /** Disable 3D rendering (but keep 2D rendering). */
        disable_3d: boolean
        /** If [code]true[/code], the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        use_xr: boolean
        /** If [code]true[/code], the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        own_world_3d: boolean
        /** The custom [World3D] which can be used as 3D environment source. */
        world_3d: World3D
        /** The custom [World2D] which can be used as 2D environment source. */
        world_2d: World2D
        /** If [code]true[/code], the viewport should render its background as transparent. */
        transparent_bg: boolean
        /** If [code]true[/code], this viewport will mark incoming input events as handled by itself. If [code]false[/code], this is instead done by the first parent viewport that is set to handle input locally.
         *  A [SubViewportContainer] will automatically set this property to [code]false[/code] for the [Viewport] contained inside of it.
         *  See also [method set_input_as_handled] and [method is_input_handled].
         */
        handle_input_locally: boolean
        snap_2d_transforms_to_pixel: boolean
        snap_2d_vertices_to_pixel: boolean
        /** The multisample anti-aliasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing. */
        msaa_2d: number /*i64*/
        /** The multisample anti-aliasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. See also bilinear scaling 3d [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing. */
        msaa_3d: number /*i64*/
        /** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. */
        screen_space_aa: number /*i64*/
        /** Enables Temporal Anti-Aliasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.
         *  [b]Note:[/b] The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.
         */
        use_taa: boolean
        /** If [code]true[/code], uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is [i]not[/i] affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS]. See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding].
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.
         */
        use_debanding: boolean
        /** If [code]true[/code], [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to [code]true[/code] instead.
         *  [b]Note:[/b] Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.
         *  [b]Note:[/b] Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with [code]module_raycast_enabled=yes[/code].
         */
        use_occlusion_culling: boolean
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to [code]0.0[/code], automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.
         *  [b]Note:[/b] [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).
         */
        mesh_lod_threshold: number /*f64*/
        /** The overlay mode for test rendered geometry in debug purposes. */
        debug_draw: number /*i64*/
        /** If [code]true[/code], 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a [code]RGBA16[/code] framebuffer, while when using the Mobile renderer it will be a [code]RGB10_A2[/code] framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the [code]0-1[/code] range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.
         *  [b]Note:[/b] This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.
         */
        use_hdr_2d: boolean
        /** Sets scaling 3d mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.
         */
        scaling_3d_mode: number /*i64*/
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than [code]1.0[/code] can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than [code]1.0[/code] are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.
         */
        scaling_3d_scale: number /*f64*/
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a [code]-0.5[/code] offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a [code]-0.25[/code] offset to this value. If both TAA and FXAA are enabled at the same time, an offset of [code]-0.75[/code] is applied to this value.
         *  [b]Note:[/b] If [member scaling_3d_scale] is lower than [code]1.0[/code] (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is [code]log2(scaling_3d_scale) + mipmap_bias[/code].
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.
         */
        texture_mipmap_bias: number /*f64*/
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.
         */
        fsr_sharpness: number /*f64*/
        /** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
        vrs_mode: number /*i64*/
        /** Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].
         *  The texture [i]must[/i] use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:
         *  
         */
        vrs_texture: Texture2D
        /** Sets the default filter mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureFilter] for options. */
        canvas_item_default_texture_filter: number /*i64*/
        /** Sets the default repeat mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureRepeat] for options. */
        canvas_item_default_texture_repeat: number /*i64*/
        /** If [code]true[/code], the viewport will process 2D audio streams. */
        audio_listener_enable_2d: boolean
        /** If [code]true[/code], the viewport will process 3D audio streams. */
        audio_listener_enable_3d: boolean
        /** If [code]true[/code], the objects rendered by viewport become subjects of mouse picking process.
         *  [b]Note:[/b] The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.
         */
        physics_object_picking: boolean
        /** If [code]true[/code], objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If [code]false[/code], the order is undetermined.
         *  [b]Note:[/b] This setting is disabled by default because of its potential expensive computational cost.
         *  [b]Note:[/b] Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.
         */
        physics_object_picking_sort: boolean
        /** If [code]true[/code], the viewport will not receive input events. */
        gui_disable_input: boolean
        /** If [code]true[/code], the GUI controls on the viewport will lay pixel perfectly. */
        gui_snap_controls_to_pixels: boolean
        /** If [code]true[/code], sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If [code]false[/code], they will appear as separate windows handled by the operating system. */
        gui_embed_subwindows: boolean
        sdf_oversize: number /*i64*/
        sdf_scale: number /*i64*/
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.
         *  [b]Note:[/b] If this is set to [code]0[/code], no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
         */
        positional_shadow_atlas_size: number /*i64*/
        /** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
        positional_shadow_atlas_16_bits: boolean
        /** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
        canvas_transform: Transform2D
        /** The global canvas transform of the viewport. The canvas transform is relative to this. */
        global_canvas_transform: Transform2D
        /** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
        canvas_cull_mask: number /*i64*/
        readonly size_changed: Signal
        readonly gui_focus_changed: Signal
    }
    class ViewportNavigationControl extends Control {
    }
    class ViewportRotationControl extends Control {
    }
    /** Provides the content of a [Viewport] as a dynamic texture. */
    class ViewportTexture extends Texture2D {
        set_viewport_path_in_scene(path: NodePath): void
        get_viewport_path_in_scene(): NodePath
        /** The path to the [Viewport] node to display. This is relative to the scene root, not to the node that uses the texture.
         *  [b]Note:[/b] In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, the path may not be able to automatically update due to the inability to determine the scene root.
         */
        viewport_path: NodePath
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            ENABLE_MODE_INHERIT = 0,
            ENABLE_MODE_ALWAYS = 1,
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A rectangular region of 2D space that, when visible on screen, enables a target node. */
    class VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D {
        set_enable_mode(mode: VisibleOnScreenEnabler2D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler2D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        enable_mode: number /*i64*/
        /** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
        enable_node_path: NodePath
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            ENABLE_MODE_INHERIT = 0,
            ENABLE_MODE_ALWAYS = 1,
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node. */
    class VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D {
        set_enable_mode(mode: VisibleOnScreenEnabler3D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler3D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        enable_mode: number /*i64*/
        /** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
        enable_node_path: NodePath
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen. */
    class VisibleOnScreenNotifier2D extends Node2D {
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        /** If [code]true[/code], the bounding rectangle is on the screen.
         *  [b]Note:[/b] It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return [code]false[/code] right after it is instantiated, before the draw pass.
         */
        is_on_screen(): boolean
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        rect: Rect2
        readonly screen_entered: Signal
        readonly screen_exited: Signal
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen. */
    class VisibleOnScreenNotifier3D extends VisualInstance3D {
        set_aabb(rect: AABB): void
        /** Returns [code]true[/code] if the bounding box is on the screen.
         *  [b]Note:[/b] It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return [code]false[/code] right after it is instantiated.
         */
        is_on_screen(): boolean
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        aabb: AABB
        readonly screen_entered: Signal
        readonly screen_exited: Signal
    }
    class VisibleOnScreenNotifier3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Parent of all visual 3D nodes. */
    class VisualInstance3D extends Node3D {
        /* gdvirtual */ _get_aabb(): AABB
        /** Sets the resource that is instantiated by this [VisualInstance3D], which changes how the engine handles the [VisualInstance3D] under the hood. Equivalent to [method RenderingServer.instance_set_base]. */
        set_base(base: RID): void
        /** Returns the RID of the resource associated with this [VisualInstance3D]. For example, if the Node is a [MeshInstance3D], this will return the RID of the associated [Mesh]. */
        get_base(): RID
        /** Returns the RID of this instance. This RID is the same as the RID returned by [method RenderingServer.instance_create]. This RID is needed if you want to call [RenderingServer] functions directly on this [VisualInstance3D]. */
        get_instance(): RID
        set_layer_mask(mask: number /*i64*/): void
        get_layer_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member layers], given a [param layer_number] between 1 and 20. */
        set_layer_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member layers] is enabled, given a [param layer_number] between 1 and 20. */
        get_layer_mask_value(layer_number: number /*i64*/): boolean
        set_sorting_offset(offset: number /*f64*/): void
        get_sorting_offset(): number /*f64*/
        set_sorting_use_aabb_center(enabled: boolean): void
        is_sorting_use_aabb_center(): boolean
        /** Returns the [AABB] (also known as the bounding box) for this [VisualInstance3D]. */
        get_aabb(): AABB
        /** The render layer(s) this [VisualInstance3D] is drawn on.
         *  This object will only be visible for [Camera3D]s whose cull mask includes any of the render layers this [VisualInstance3D] is set to.
         *  For [Light3D]s, this can be used to control which [VisualInstance3D]s are affected by a specific light. For [GPUParticles3D], this can be used to control which particles are effected by a specific attractor. For [Decal]s, this can be used to control which [VisualInstance3D]s are affected by a specific decal.
         *  To adjust [member layers] more easily using a script, use [method get_layer_mask_value] and [method set_layer_mask_value].
         *  [b]Note:[/b] [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.
         */
        layers: number /*i64*/
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        sorting_offset: number /*f64*/
        /** If [code]true[/code], the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].
         */
        sorting_use_aabb_center: boolean
    }
    namespace VisualShader {
        enum Type {
            TYPE_VERTEX = 0,
            TYPE_FRAGMENT = 1,
            TYPE_LIGHT = 2,
            TYPE_START = 3,
            TYPE_PROCESS = 4,
            TYPE_COLLIDE = 5,
            TYPE_START_CUSTOM = 6,
            TYPE_PROCESS_CUSTOM = 7,
            TYPE_SKY = 8,
            TYPE_FOG = 9,
            TYPE_MAX = 10,
        }
        enum VaryingMode {
            VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
            VARYING_MODE_FRAG_TO_LIGHT = 1,
            VARYING_MODE_MAX = 2,
        }
        enum VaryingType {
            VARYING_TYPE_FLOAT = 0,
            VARYING_TYPE_INT = 1,
            VARYING_TYPE_UINT = 2,
            VARYING_TYPE_VECTOR_2D = 3,
            VARYING_TYPE_VECTOR_3D = 4,
            VARYING_TYPE_VECTOR_4D = 5,
            VARYING_TYPE_BOOLEAN = 6,
            VARYING_TYPE_TRANSFORM = 7,
            VARYING_TYPE_MAX = 8,
        }
    }
    /** A custom shader program with a visual editor. */
    class VisualShader extends Shader {
        static readonly NODE_ID_INVALID = -1
        static readonly NODE_ID_OUTPUT = 0
        /** Sets the mode of this shader. */
        set_mode(mode: Shader.Mode): void
        /** Adds the specified [param node] to the shader. */
        add_node(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: number /*i64*/): void
        /** Returns the shader node instance with specified [param type] and [param id]. */
        get_node(type: VisualShader.Type, id: number /*i64*/): VisualShaderNode
        /** Sets the position of the specified node. */
        set_node_position(type: VisualShader.Type, id: number /*i64*/, position: Vector2): void
        /** Returns the position of the specified node within the shader graph. */
        get_node_position(type: VisualShader.Type, id: number /*i64*/): Vector2
        /** Returns the list of all nodes in the shader with the specified type. */
        get_node_list(type: VisualShader.Type): PackedInt32Array
        /** Returns next valid node ID that can be added to the shader graph. */
        get_valid_node_id(type: VisualShader.Type): number /*i64*/
        /** Removes the specified node from the shader. */
        remove_node(type: VisualShader.Type, id: number /*i64*/): void
        /** Replaces the specified node with a node of new class type. */
        replace_node(type: VisualShader.Type, id: number /*i64*/, new_class: StringName): void
        /** Returns [code]true[/code] if the specified node and port connection exist. */
        is_node_connection(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        /** Returns [code]true[/code] if the specified nodes and ports can be connected together. */
        can_connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        /** Connects the specified nodes and ports. */
        connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): GodotError
        /** Connects the specified nodes and ports. */
        disconnect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        /** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
        connect_nodes_forced(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        /** Returns the list of connected nodes with the specified type. */
        get_node_connections(type: VisualShader.Type): Array
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        /** Adds a new varying value node to the shader. */
        add_varying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        /** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
        remove_varying(name: string): void
        /** Returns [code]true[/code] if the shader has a varying with the given [param name]. */
        has_varying(name: string): boolean
        _update_shader(): void
        /** The offset vector of the whole graph. */
        graph_offset: Vector2
    }
    class VisualShaderConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace VisualShaderNode {
        enum PortType {
            PORT_TYPE_SCALAR = 0,
            PORT_TYPE_SCALAR_INT = 1,
            PORT_TYPE_SCALAR_UINT = 2,
            PORT_TYPE_VECTOR_2D = 3,
            PORT_TYPE_VECTOR_3D = 4,
            PORT_TYPE_VECTOR_4D = 5,
            PORT_TYPE_BOOLEAN = 6,
            PORT_TYPE_TRANSFORM = 7,
            PORT_TYPE_SAMPLER = 8,
            PORT_TYPE_MAX = 9,
        }
    }
    /** Base class for [VisualShader] nodes. Not related to scene nodes. */
    class VisualShaderNode extends Resource {
        /** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
        get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        set_output_port_for_preview(port: number /*i64*/): void
        get_output_port_for_preview(): number /*i64*/
        _set_output_port_expanded(port: number /*i64*/, _unnamed_arg1: boolean): void
        _is_output_port_expanded(_unnamed_arg0: number /*i64*/): boolean
        _set_output_ports_expanded(values: Array): void
        _get_output_ports_expanded(): Array
        /** Sets the default [param value] for the selected input [param port]. */
        set_input_port_default_value(port: number /*i64*/, value: any, prev_value: any = <any> {} /*compound.type from nil*/): void
        /** Returns the default value of the input [param port]. */
        get_input_port_default_value(port: number /*i64*/): any
        /** Removes the default value of the input [param port]. */
        remove_input_port_default_value(port: number /*i64*/): void
        /** Clears the default input ports value. */
        clear_default_input_values(): void
        /** Sets the default input ports values using an [Array] of the form [code][index0, value0, index1, value1, ...][/code]. For example: [code][0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)][/code]. */
        set_default_input_values(values: Array): void
        /** Returns an [Array] containing default values for all of the input ports of the node in the form [code][index0, value0, index1, value1, ...][/code]. */
        get_default_input_values(): Array
        /** Sets the output port index which will be showed for preview. If set to [code]-1[/code] no port will be open for preview. */
        output_port_for_preview: number /*i64*/
        default_input_values: Array
        expanded_output_ports: Array
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            BILLBOARD_TYPE_DISABLED = 0,
            BILLBOARD_TYPE_ENABLED = 1,
            BILLBOARD_TYPE_FIXED_Y = 2,
            BILLBOARD_TYPE_PARTICLES = 3,
            BILLBOARD_TYPE_MAX = 4,
        }
    }
    /** A node that controls how the object faces the camera to be used within the visual shader graph. */
    class VisualShaderNodeBillboard extends VisualShaderNode {
        set_billboard_type(billboard_type: VisualShaderNodeBillboard.BillboardType): void
        get_billboard_type(): VisualShaderNodeBillboard.BillboardType
        set_keep_scale_enabled(enabled: boolean): void
        is_keep_scale_enabled(): boolean
        /** Controls how the object faces the camera. See [enum BillboardType]. */
        billboard_type: number /*i64*/
        /** If [code]true[/code], the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
        keep_scale: boolean
    }
    /** A boolean constant to be used within the visual shader graph. */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        set_constant(constant: boolean): void
        get_constant(): boolean
        /** A boolean constant which represents a state of this node. */
        constant: boolean
    }
    /** A boolean parameter to be used within the visual shader graph. */
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: boolean): void
        get_default_value(): boolean
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: boolean
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            OP_TYPE_FLOAT = 0,
            OP_TYPE_INT = 1,
            OP_TYPE_UINT = 2,
            OP_TYPE_VECTOR_2D = 3,
            OP_TYPE_VECTOR_3D = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_MAX = 6,
        }
    }
    /** Clamps a value within the visual shader graph. */
    class VisualShaderNodeClamp extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeClamp.OpType): void
        get_op_type(): VisualShaderNodeClamp.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** A [Color] constant to be used within the visual shader graph. */
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        set_constant(constant: Color): void
        get_constant(): Color
        /** A [Color] constant which represents a state of this node. */
        constant: Color
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            FUNC_GRAYSCALE = 0,
            FUNC_HSV2RGB = 1,
            FUNC_RGB2HSV = 2,
            FUNC_SEPIA = 3,
            FUNC_MAX = 4,
        }
    }
    /** A [Color] function to be used within the visual shader graph. */
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeColorFunc.Function): void
        get_function(): VisualShaderNodeColorFunc.Function
        /** A function to be applied to the input color. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            OP_SCREEN = 0,
            OP_DIFFERENCE = 1,
            OP_DARKEN = 2,
            OP_LIGHTEN = 3,
            OP_OVERLAY = 4,
            OP_DODGE = 5,
            OP_BURN = 6,
            OP_SOFT_LIGHT = 7,
            OP_HARD_LIGHT = 8,
            OP_MAX = 9,
        }
    }
    /** A [Color] operator to be used within the visual shader graph. */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeColorOp.Operator): void
        get_operator(): VisualShaderNodeColorOp.Operator
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A [Color] parameter to be used within the visual shader graph. */
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Color): void
        get_default_value(): Color
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: Color
    }
    /** A comment node to be placed on visual shader graph. */
    class VisualShaderNodeComment extends VisualShaderNodeResizableBase {
        set_title(title: string): void
        get_title(): string
        set_description(description: string): void
        get_description(): string
        /** A title of the node. */
        title: string
        /** An additional description which placed below the title. */
        description: string
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            CTYPE_SCALAR = 0,
            CTYPE_SCALAR_INT = 1,
            CTYPE_SCALAR_UINT = 2,
            CTYPE_VECTOR_2D = 3,
            CTYPE_VECTOR_3D = 4,
            CTYPE_VECTOR_4D = 5,
            CTYPE_BOOLEAN = 6,
            CTYPE_TRANSFORM = 7,
            CTYPE_MAX = 8,
        }
        enum Function {
            FUNC_EQUAL = 0,
            FUNC_NOT_EQUAL = 1,
            FUNC_GREATER_THAN = 2,
            FUNC_GREATER_THAN_EQUAL = 3,
            FUNC_LESS_THAN = 4,
            FUNC_LESS_THAN_EQUAL = 5,
            FUNC_MAX = 6,
        }
        enum Condition {
            COND_ALL = 0,
            COND_ANY = 1,
            COND_MAX = 2,
        }
    }
    /** A comparison function for common types within the visual shader graph. */
    class VisualShaderNodeCompare extends VisualShaderNode {
        set_comparison_type(type: VisualShaderNodeCompare.ComparisonType): void
        get_comparison_type(): VisualShaderNodeCompare.ComparisonType
        set_function(func: VisualShaderNodeCompare.Function): void
        get_function(): VisualShaderNodeCompare.Function
        set_condition(condition: VisualShaderNodeCompare.Condition): void
        get_condition(): VisualShaderNodeCompare.Condition
        /** The type to be used in the comparison. See [enum ComparisonType] for options. */
        type: number /*i64*/
        /** A comparison function. See [enum Function] for options. */
        function: number /*i64*/
        /** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
        condition: number /*i64*/
    }
    /** A base type for the constants within the visual shader graph. */
    class VisualShaderNodeConstant extends VisualShaderNode {
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_PORT = 1,
            SOURCE_MAX = 2,
        }
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_MAX = 3,
        }
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph. */
    class VisualShaderNodeCubemap extends VisualShaderNode {
        set_source(value: VisualShaderNodeCubemap.Source): void
        get_source(): VisualShaderNodeCubemap.Source
        set_cube_map(value: Cubemap): void
        get_cube_map(): Cubemap
        set_texture_type(value: VisualShaderNodeCubemap.TextureType): void
        get_texture_type(): VisualShaderNodeCubemap.TextureType
        /** Defines which source should be used for the sampling. See [enum Source] for options. */
        source: number /*i64*/
        /** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
        cube_map: Cubemap
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        texture_type: number /*i64*/
    }
    /** A [Cubemap] parameter node to be used within the visual shader graph. */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph. */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveTexture): void
        get_texture(): CurveTexture
        /** The source texture. */
        texture: CurveTexture
    }
    /** Performs a [CurveXYZTexture] lookup within the visual shader graph. */
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveXYZTexture): void
        get_texture(): CurveXYZTexture
        /** The source texture. */
        texture: CurveXYZTexture
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor. */
    class VisualShaderNodeCustom extends VisualShaderNode {
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_description(): string
        /* gdvirtual */ _get_category(): string
        /* gdvirtual */ _get_return_icon_type(): VisualShaderNode.PortType
        /* gdvirtual */ _get_input_port_count(): number /*i64*/
        /* gdvirtual */ _get_input_port_type(port: number /*i64*/): VisualShaderNode.PortType
        /* gdvirtual */ _get_input_port_name(port: number /*i64*/): string
        /* gdvirtual */ _get_input_port_default_value(port: number /*i64*/): void
        /* gdvirtual */ _get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        /* gdvirtual */ _get_output_port_count(): number /*i64*/
        /* gdvirtual */ _get_output_port_type(port: number /*i64*/): VisualShaderNode.PortType
        /* gdvirtual */ _get_output_port_name(port: number /*i64*/): string
        /* gdvirtual */ _get_property_count(): number /*i64*/
        /* gdvirtual */ _get_property_name(index: number /*i64*/): string
        /* gdvirtual */ _get_property_default_index(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_property_options(index: number /*i64*/): PackedStringArray
        /* gdvirtual */ _get_code(input_vars: Array, output_vars: Array, mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _get_func_code(mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _get_global_code(mode: Shader.Mode): string
        /* gdvirtual */ _is_highend(): boolean
        /* gdvirtual */ _is_available(mode: Shader.Mode, type: VisualShader.Type): boolean
        _set_initialized(enabled: boolean): void
        _is_initialized(): boolean
        _set_input_port_default_value(port: number /*i64*/, value: any): void
        _set_option_index(option: number /*i64*/, value: number /*i64*/): void
        _set_properties(properties: string): void
        _get_properties(): string
        /** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
        get_option_index(option: number /*i64*/): number /*i64*/
        initialized: boolean
        properties: string
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
        enum Function {
            FUNC_SUM = 0,
            FUNC_X = 1,
            FUNC_Y = 2,
            FUNC_MAX = 3,
        }
        enum Precision {
            PRECISION_NONE = 0,
            PRECISION_COARSE = 1,
            PRECISION_FINE = 2,
            PRECISION_MAX = 3,
        }
    }
    /** Calculates a derivative within the visual shader graph. */
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeDerivativeFunc.OpType): void
        get_op_type(): VisualShaderNodeDerivativeFunc.OpType
        set_function(func: VisualShaderNodeDerivativeFunc.Function): void
        get_function(): VisualShaderNodeDerivativeFunc.Function
        set_precision(precision: VisualShaderNodeDerivativeFunc.Precision): void
        get_precision(): VisualShaderNodeDerivativeFunc.Precision
        /** A type of operands and returned value. See [enum OpType] for options. */
        op_type: number /*i64*/
        /** A derivative function type. See [enum Function] for options. */
        function: number /*i64*/
        /** Sets the level of precision to use for the derivative function. See [enum Precision] for options. When using the GL Compatibility renderer, this setting has no effect. */
        precision: number /*i64*/
    }
    /** Calculates the determinant of a [Transform3D] within the visual shader graph. */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
    }
    /** A visual shader node representing distance fade effect. */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
    }
    /** Calculates a dot product of two vectors within the visual shader graph. */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
    }
    /** A custom visual shader graph expression written in Godot Shading Language. */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        set_expression(expression: string): void
        get_expression(): string
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function ([code]vertex[/code], [code]fragment[/code], or [code]light[/code]), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        expression: string
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph. */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
    }
    /** A scalar floating-point constant to be used within the visual shader graph. */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*f64*/): void
        get_constant(): number /*f64*/
        /** A floating-point constant which represents a state of this node. */
        constant: number /*f64*/
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            FUNC_SIN = 0,
            FUNC_COS = 1,
            FUNC_TAN = 2,
            FUNC_ASIN = 3,
            FUNC_ACOS = 4,
            FUNC_ATAN = 5,
            FUNC_SINH = 6,
            FUNC_COSH = 7,
            FUNC_TANH = 8,
            FUNC_LOG = 9,
            FUNC_EXP = 10,
            FUNC_SQRT = 11,
            FUNC_ABS = 12,
            FUNC_SIGN = 13,
            FUNC_FLOOR = 14,
            FUNC_ROUND = 15,
            FUNC_CEIL = 16,
            FUNC_FRACT = 17,
            FUNC_SATURATE = 18,
            FUNC_NEGATE = 19,
            FUNC_ACOSH = 20,
            FUNC_ASINH = 21,
            FUNC_ATANH = 22,
            FUNC_DEGREES = 23,
            FUNC_EXP2 = 24,
            FUNC_INVERSE_SQRT = 25,
            FUNC_LOG2 = 26,
            FUNC_RADIANS = 27,
            FUNC_RECIPROCAL = 28,
            FUNC_ROUNDEVEN = 29,
            FUNC_TRUNC = 30,
            FUNC_ONEMINUS = 31,
            FUNC_MAX = 32,
        }
    }
    /** A scalar floating-point function to be used within the visual shader graph. */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeFloatFunc.Function): void
        get_function(): VisualShaderNodeFloatFunc.Function
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_POW = 5,
            OP_MAX = 6,
            OP_MIN = 7,
            OP_ATAN2 = 8,
            OP_STEP = 9,
            OP_ENUM_SIZE = 10,
        }
    }
    /** A floating-point scalar operator to be used within the visual shader graph. */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeFloatOp.Operator): void
        get_operator(): VisualShaderNodeFloatOp.Operator
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            HINT_NONE = 0,
            HINT_RANGE = 1,
            HINT_RANGE_STEP = 2,
            HINT_MAX = 3,
        }
    }
    /** A scalar float parameter to be used within the visual shader graph. */
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        set_hint(hint: VisualShaderNodeFloatParameter.Hint): void
        get_hint(): VisualShaderNodeFloatParameter.Hint
        set_min(value: number /*f64*/): void
        get_min(): number /*f64*/
        set_max(value: number /*f64*/): void
        get_max(): number /*f64*/
        set_step(value: number /*f64*/): void
        get_step(): number /*f64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*f64*/): void
        get_default_value(): number /*f64*/
        /** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
        hint: number /*i64*/
        /** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        min: number /*f64*/
        /** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        max: number /*f64*/
        /** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
        step: number /*f64*/
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: number /*f64*/
    }
    /** A Fresnel effect to be used within the visual shader graph. */
    class VisualShaderNodeFresnel extends VisualShaderNode {
    }
    /** A custom global visual shader graph expression written in Godot Shading Language. */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph. */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        /** Defines all input ports using a [String] formatted as a colon-separated list: [code]id,type,name;[/code] (see [method add_input_port]). */
        set_inputs(inputs: string): void
        /** Returns a [String] description of the input ports as a colon-separated list using the format [code]id,type,name;[/code] (see [method add_input_port]). */
        get_inputs(): string
        /** Defines all output ports using a [String] formatted as a colon-separated list: [code]id,type,name;[/code] (see [method add_output_port]). */
        set_outputs(outputs: string): void
        /** Returns a [String] description of the output ports as a colon-separated list using the format [code]id,type,name;[/code] (see [method add_output_port]). */
        get_outputs(): string
        /** Returns [code]true[/code] if the specified port name does not override an existed port name and is valid within the shader. */
        is_valid_port_name(name: string): boolean
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_input_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        /** Removes the specified input port. */
        remove_input_port(id: number /*i64*/): void
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        get_input_port_count(): number /*i64*/
        /** Returns [code]true[/code] if the specified input port exists. */
        has_input_port(id: number /*i64*/): boolean
        /** Removes all previously specified input ports. */
        clear_input_ports(): void
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_output_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        /** Removes the specified output port. */
        remove_output_port(id: number /*i64*/): void
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        get_output_port_count(): number /*i64*/
        /** Returns [code]true[/code] if the specified output port exists. */
        has_output_port(id: number /*i64*/): boolean
        /** Removes all previously specified output ports. */
        clear_output_ports(): void
        /** Renames the specified input port. */
        set_input_port_name(id: number /*i64*/, name: string): void
        /** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
        set_input_port_type(id: number /*i64*/, type: number /*i64*/): void
        /** Renames the specified output port. */
        set_output_port_name(id: number /*i64*/, name: string): void
        /** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
        set_output_port_type(id: number /*i64*/, type: number /*i64*/): void
        /** Returns a free input port ID which can be used in [method add_input_port]. */
        get_free_input_port_id(): number /*i64*/
        /** Returns a free output port ID which can be used in [method add_output_port]. */
        get_free_output_port_id(): number /*i64*/
    }
    /** Outputs a 3D vector based on the result of a floating point comparison within the visual shader graph. */
    class VisualShaderNodeIf extends VisualShaderNode {
    }
    /** Represents the input shader parameter within the visual shader graph. */
    class VisualShaderNodeInput extends VisualShaderNode {
        set_input_name(name: string): void
        get_input_name(): string
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. [code]"ALBEDO"[/code] if the [member input_name] equal to [code]"albedo"[/code]. */
        get_input_real_name(): string
        /** One of the several input constants in lower-case style like: "vertex" ([code]VERTEX[/code]) or "point_size" ([code]POINT_SIZE[/code]). */
        input_name: StringName
        readonly input_type_changed: Signal
    }
    /** A scalar integer constant to be used within the visual shader graph. */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        /** An integer constant which represents a state of this node. */
        constant: number /*i64*/
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            FUNC_ABS = 0,
            FUNC_NEGATE = 1,
            FUNC_SIGN = 2,
            FUNC_BITWISE_NOT = 3,
            FUNC_MAX = 4,
        }
    }
    /** A scalar integer function to be used within the visual shader graph. */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeIntFunc.Function): void
        get_function(): VisualShaderNodeIntFunc.Function
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_MAX = 5,
            OP_MIN = 6,
            OP_BITWISE_AND = 7,
            OP_BITWISE_OR = 8,
            OP_BITWISE_XOR = 9,
            OP_BITWISE_LEFT_SHIFT = 10,
            OP_BITWISE_RIGHT_SHIFT = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    /** An integer scalar operator to be used within the visual shader graph. */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeIntOp.Operator): void
        get_operator(): VisualShaderNodeIntOp.Operator
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            HINT_NONE = 0,
            HINT_RANGE = 1,
            HINT_RANGE_STEP = 2,
            HINT_MAX = 3,
        }
    }
    /** A visual shader node for shader parameter (uniform) of type [int]. */
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        set_hint(hint: VisualShaderNodeIntParameter.Hint): void
        get_hint(): VisualShaderNodeIntParameter.Hint
        set_min(value: number /*i64*/): void
        get_min(): number /*i64*/
        set_max(value: number /*i64*/): void
        get_max(): number /*i64*/
        set_step(value: number /*i64*/): void
        get_step(): number /*i64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        /** Range hint of this node. Use it to customize valid parameter range. */
        hint: number /*i64*/
        /** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        min: number /*i64*/
        /** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        max: number /*i64*/
        /** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
        step: number /*i64*/
        /** If [code]true[/code], the node will have a custom default value. */
        default_value_enabled: boolean
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to [code]0[/code] otherwise. */
        default_value: number /*i64*/
    }
    namespace VisualShaderNodeIs {
        enum Function {
            FUNC_IS_INF = 0,
            FUNC_IS_NAN = 1,
            FUNC_MAX = 2,
        }
    }
    /** A boolean comparison operator to be used within the visual shader graph. */
    class VisualShaderNodeIs extends VisualShaderNode {
        set_function(func: VisualShaderNodeIs.Function): void
        get_function(): VisualShaderNodeIs.Function
        /** The comparison function. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space. */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    /** Linearly interpolates between two values within the visual shader graph. */
    class VisualShaderNodeMix extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeMix.OpType): void
        get_op_type(): VisualShaderNodeMix.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
    }
    /** Performs a fused multiply-add operation within the visual shader graph. */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeMultiplyAdd.OpType): void
        get_op_type(): VisualShaderNodeMultiplyAdd.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** Calculates an outer product of two vectors within the visual shader graph. */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
    }
    /** Represents the output shader parameters within the visual shader graph. */
    class VisualShaderNodeOutput extends VisualShaderNode {
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            QUAL_NONE = 0,
            QUAL_GLOBAL = 1,
            QUAL_INSTANCE = 2,
            QUAL_MAX = 3,
        }
    }
    /** A base type for the parameters within the visual shader graph. */
    class VisualShaderNodeParameter extends VisualShaderNode {
        set_parameter_name(name: string): void
        get_parameter_name(): string
        set_qualifier(qualifier: VisualShaderNodeParameter.Qualifier): void
        get_qualifier(): VisualShaderNodeParameter.Qualifier
        /** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
        parameter_name: StringName
        /** Defines the scope of the parameter. */
        qualifier: number /*i64*/
    }
    /** A reference to an existing [VisualShaderNodeParameter]. */
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        set_parameter_name(name: string): void
        get_parameter_name(): string
        _set_parameter_type(type: number /*i64*/): void
        _get_parameter_type(): number /*i64*/
        /** The name of the parameter which this reference points to. */
        parameter_name: StringName
        param_type: number /*i64*/
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            MODE_LINEAR = 0,
            MODE_RADIAL = 1,
            MODE_TANGENTIAL = 2,
            MODE_MAX = 3,
        }
    }
    /** A visual shader node that accelerates particles. */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        set_mode(mode: VisualShaderNodeParticleAccelerator.Mode): void
        get_mode(): VisualShaderNodeParticleAccelerator.Mode
        /** Defines in what manner the particles will be accelerated. */
        mode: number /*i64*/
    }
    /** A visual shader node that makes particles emitted in a box shape. */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles move in a cone shape. */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            EMIT_FLAG_POSITION = 1,
            EMIT_FLAG_ROT_SCALE = 2,
            EMIT_FLAG_VELOCITY = 4,
            EMIT_FLAG_COLOR = 8,
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter. */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        set_flags(flags: VisualShaderNodeParticleEmit.EmitFlags): void
        get_flags(): VisualShaderNodeParticleEmit.EmitFlags
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        flags: number /*i64*/
    }
    /** A base class for particle emitters. */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        set_mode_2d(enabled: boolean): void
        is_mode_2d(): boolean
        /** If [code]true[/code], the result of this emitter is projected to 2D space. By default it is [code]false[/code] and meant for use in 3D space. */
        mode_2d: boolean
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh]. */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_all_surfaces(enabled: boolean): void
        is_use_all_surfaces(): boolean
        set_surface_index(surface_index: number /*i64*/): void
        get_surface_index(): number /*i64*/
        /** The [Mesh] that defines emission shape. */
        mesh: Mesh
        /** If [code]true[/code], the particles will emit from all surfaces of the mesh. */
        use_all_surfaces: boolean
        /** Index of the surface that emits particles. [member use_all_surfaces] must be [code]false[/code] for this to take effect. */
        surface_index: number /*i64*/
    }
    /** A visual shader helper node for multiplying position and rotation of particles. */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        set_degrees_mode(enabled: boolean): void
        is_degrees_mode(): boolean
        /** If [code]true[/code], the angle will be interpreted in degrees instead of radians. */
        degrees_mode: boolean
    }
    /** Visual shader node that defines output values for particle emitting. */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_3D = 2,
            OP_TYPE_VECTOR_4D = 3,
            OP_TYPE_MAX = 4,
        }
    }
    /** Visual shader node for randomizing particle values. */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeParticleRandomness.OpType): void
        get_op_type(): VisualShaderNodeParticleRandomness.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** A visual shader node that makes particles emitted in a ring shape. */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles emitted in a sphere shape. */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node representing proximity fade effect. */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
    }
    /** A visual shader node that generates a pseudo-random scalar. */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
    }
    /** A visual shader node for remap function. */
    class VisualShaderNodeRemap extends VisualShaderNode {
    }
    /** Base class for resizable nodes in a visual shader graph. */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        set_size(size: Vector2): void
        get_size(): Vector2
        /** The size of the node in the visual shader graph. */
        size: Vector2
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix. */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
    }
    /** SDF raymarching algorithm to be used within the visual shader graph. */
    class VisualShaderNodeSDFRaymarch extends VisualShaderNode {
    }
    /** A function to convert an SDF (signed-distance field) to screen UV, to be used within the visual shader graph. */
    class VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_PORT = 1,
            SOURCE_MAX = 2,
        }
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph. */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        set_source(value: VisualShaderNodeSample3D.Source): void
        get_source(): VisualShaderNodeSample3D.Source
        /** An input source type. */
        source: number /*i64*/
    }
    /** A visual shader node that unpacks the screen normal texture in World Space. */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
    }
    /** A function to convert screen UV to an SDF (signed-distance field), to be used within the visual shader graph. */
    class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a SmoothStep function within the visual shader graph. */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeSmoothStep.OpType): void
        get_op_type(): VisualShaderNodeSmoothStep.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            OP_TYPE_SCALAR = 0,
            OP_TYPE_VECTOR_2D = 1,
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            OP_TYPE_VECTOR_3D = 3,
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a Step function within the visual shader graph. */
    class VisualShaderNodeStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeStep.OpType): void
        get_op_type(): VisualShaderNodeStep.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            OP_TYPE_FLOAT = 0,
            OP_TYPE_INT = 1,
            OP_TYPE_UINT = 2,
            OP_TYPE_VECTOR_2D = 3,
            OP_TYPE_VECTOR_3D = 4,
            OP_TYPE_VECTOR_4D = 5,
            OP_TYPE_BOOLEAN = 6,
            OP_TYPE_TRANSFORM = 7,
            OP_TYPE_MAX = 8,
        }
    }
    /** A selector function for use within the visual shader graph. */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeSwitch.OpType): void
        get_op_type(): VisualShaderNodeSwitch.OpType
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            SOURCE_TEXTURE = 0,
            SOURCE_SCREEN = 1,
            SOURCE_2D_TEXTURE = 2,
            SOURCE_2D_NORMAL = 3,
            SOURCE_DEPTH = 4,
            SOURCE_PORT = 5,
            SOURCE_3D_NORMAL = 6,
            SOURCE_ROUGHNESS = 7,
            SOURCE_MAX = 8,
        }
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_MAX = 3,
        }
    }
    /** Performs a 2D texture lookup within the visual shader graph. */
    class VisualShaderNodeTexture extends VisualShaderNode {
        set_source(value: VisualShaderNodeTexture.Source): void
        get_source(): VisualShaderNodeTexture.Source
        set_texture(value: Texture2D): void
        get_texture(): Texture2D
        set_texture_type(value: VisualShaderNodeTexture.TextureType): void
        get_texture_type(): VisualShaderNodeTexture.TextureType
        /** Determines the source for the lookup. See [enum Source] for options. */
        source: number /*i64*/
        /** The source texture, if needed for the selected [member source]. */
        texture: Texture2D
        /** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. See [enum TextureType] for options. */
        texture_type: number /*i64*/
    }
    /** A 2D texture uniform array to be used within the visual shader graph. */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        set_texture_array(value: Texture2DArray): void
        get_texture_array(): Texture2DArray
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        texture_array: Texture2DArray
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray]. */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
    }
    /** Provides a 2D texture parameter within the visual shader graph. */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
    }
    /** Performs a 3D texture lookup within the visual shader graph. */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        set_texture(value: Texture3D): void
        get_texture(): Texture3D
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        texture: Texture3D
    }
    /** Provides a 3D texture parameter within the visual shader graph. */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            TYPE_DATA = 0,
            TYPE_COLOR = 1,
            TYPE_NORMAL_MAP = 2,
            TYPE_ANISOTROPY = 3,
            TYPE_MAX = 4,
        }
        enum ColorDefault {
            COLOR_DEFAULT_WHITE = 0,
            COLOR_DEFAULT_BLACK = 1,
            COLOR_DEFAULT_TRANSPARENT = 2,
            COLOR_DEFAULT_MAX = 3,
        }
        enum TextureFilter {
            FILTER_DEFAULT = 0,
            FILTER_NEAREST = 1,
            FILTER_LINEAR = 2,
            FILTER_NEAREST_MIPMAP = 3,
            FILTER_LINEAR_MIPMAP = 4,
            FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
            FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
            FILTER_MAX = 7,
        }
        enum TextureRepeat {
            REPEAT_DEFAULT = 0,
            REPEAT_ENABLED = 1,
            REPEAT_DISABLED = 2,
            REPEAT_MAX = 3,
        }
        enum TextureSource {
            SOURCE_NONE = 0,
            SOURCE_SCREEN = 1,
            SOURCE_DEPTH = 2,
            SOURCE_NORMAL_ROUGHNESS = 3,
            SOURCE_MAX = 4,
        }
    }
    /** Performs a uniform texture lookup within the visual shader graph. */
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        set_texture_type(type: VisualShaderNodeTextureParameter.TextureType): void
        get_texture_type(): VisualShaderNodeTextureParameter.TextureType
        set_color_default(color: VisualShaderNodeTextureParameter.ColorDefault): void
        get_color_default(): VisualShaderNodeTextureParameter.ColorDefault
        set_texture_filter(filter: VisualShaderNodeTextureParameter.TextureFilter): void
        get_texture_filter(): VisualShaderNodeTextureParameter.TextureFilter
        set_texture_repeat(repeat: VisualShaderNodeTextureParameter.TextureRepeat): void
        get_texture_repeat(): VisualShaderNodeTextureParameter.TextureRepeat
        set_texture_source(source: VisualShaderNodeTextureParameter.TextureSource): void
        get_texture_source(): VisualShaderNodeTextureParameter.TextureSource
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        texture_type: number /*i64*/
        /** Sets the default color if no texture is assigned to the uniform. */
        color_default: number /*i64*/
        /** Sets the texture filtering mode. See [enum TextureFilter] for options. */
        texture_filter: number /*i64*/
        /** Sets the texture repeating mode. See [enum TextureRepeat] for options. */
        texture_repeat: number /*i64*/
        /** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [enum TextureSource] for options. */
        texture_source: number /*i64*/
    }
    /** Performs a uniform texture lookup with triplanar within the visual shader graph. */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
    }
    /** Performs an SDF (signed-distance field) texture lookup within the visual shader graph. */
    class VisualShaderNodeTextureSDF extends VisualShaderNode {
    }
    /** Performs an SDF (signed-distance field) normal texture lookup within the visual shader graph. */
    class VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph. */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
    }
    /** A [Transform3D] constant for use within the visual shader graph. */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        set_constant(constant: Transform3D): void
        get_constant(): Transform3D
        /** A [Transform3D] constant which represents the state of this node. */
        constant: Transform3D
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph. */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            FUNC_INVERSE = 0,
            FUNC_TRANSPOSE = 1,
            FUNC_MAX = 2,
        }
    }
    /** Computes a [Transform3D] function within the visual shader graph. */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeTransformFunc.Function): void
        get_function(): VisualShaderNodeTransformFunc.Function
        /** The function to be computed. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            OP_AxB = 0,
            OP_BxA = 1,
            OP_AxB_COMP = 2,
            OP_BxA_COMP = 3,
            OP_ADD = 4,
            OP_A_MINUS_B = 5,
            OP_B_MINUS_A = 6,
            OP_A_DIV_B = 7,
            OP_B_DIV_A = 8,
            OP_MAX = 9,
        }
    }
    /** A [Transform3D] operator to be used within the visual shader graph. */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformOp.Operator): void
        get_operator(): VisualShaderNodeTransformOp.Operator
        /** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A [Transform3D] parameter for use within the visual shader graph. */
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Transform3D): void
        get_default_value(): Transform3D
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: Transform3D
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            OP_AxB = 0,
            OP_BxA = 1,
            OP_3x3_AxB = 2,
            OP_3x3_BxA = 3,
            OP_MAX = 4,
        }
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph. */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformVecMult.Operator): void
        get_operator(): VisualShaderNodeTransformVecMult.Operator
        /** The multiplication type to be performed. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph. */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        /** An unsigned integer constant which represents a state of this node. */
        constant: number /*i64*/
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            FUNC_NEGATE = 0,
            FUNC_BITWISE_NOT = 1,
            FUNC_MAX = 2,
        }
    }
    /** An unsigned scalar integer function to be used within the visual shader graph. */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUIntFunc.Function): void
        get_function(): VisualShaderNodeUIntFunc.Function
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_MAX = 5,
            OP_MIN = 6,
            OP_BITWISE_AND = 7,
            OP_BITWISE_OR = 8,
            OP_BITWISE_XOR = 9,
            OP_BITWISE_LEFT_SHIFT = 10,
            OP_BITWISE_RIGHT_SHIFT = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph. */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeUIntOp.Operator): void
        get_operator(): VisualShaderNodeUIntOp.Operator
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int]. */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        /** If [code]true[/code], the node will have a custom default value. */
        default_value_enabled: boolean
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to [code]0[/code] otherwise. */
        default_value: number /*i64*/
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            FUNC_PANNING = 0,
            FUNC_SCALING = 1,
            FUNC_MAX = 2,
        }
    }
    /** Contains functions to modify texture coordinates ([code]uv[/code]) to be used within the visual shader graph. */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUVFunc.Function): void
        get_function(): VisualShaderNodeUVFunc.Function
        /** A function to be applied to the texture coordinates. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** A visual shader node that modifies the texture UV using polar coordinates. */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
    }
    /** A visual shader node that represents a "varying" shader value. */
    class VisualShaderNodeVarying extends VisualShaderNode {
        set_varying_name(name: string): void
        get_varying_name(): string
        set_varying_type(type: VisualShader.VaryingType): void
        get_varying_type(): VisualShader.VaryingType
        /** Name of the variable. Must be unique. */
        varying_name: StringName
        /** Type of the variable. Determines where the variable can be accessed. */
        varying_type: number /*i64*/
    }
    /** A visual shader node that gets a value of a varying. */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
    }
    /** A visual shader node that sets a value of a varying. */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
    }
    /** A [Vector2] constant to be used within the visual shader graph. */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector2): void
        get_constant(): Vector2
        /** A [Vector2] constant which represents the state of this node. */
        constant: Vector2
    }
    /** A [Vector2] parameter to be used within the visual shader graph. */
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector2): void
        get_default_value(): Vector2
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: Vector2
    }
    /** A [Vector3] constant to be used within the visual shader graph. */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector3): void
        get_constant(): Vector3
        /** A [Vector3] constant which represents the state of this node. */
        constant: Vector3
    }
    /** A [Vector3] parameter to be used within the visual shader graph. */
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector3): void
        get_default_value(): Vector3
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: Vector3
    }
    /** A 4D vector constant to be used within the visual shader graph. */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        set_constant(constant: Quaternion): void
        get_constant(): Quaternion
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        constant: Quaternion
    }
    /** A 4D vector parameter to be used within the visual shader graph. */
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector4): void
        get_default_value(): Vector4
        /** Enables usage of the [member default_value]. */
        default_value_enabled: boolean
        /** A default value to be assigned within the shader. */
        default_value: Vector4
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            OP_TYPE_VECTOR_2D = 0,
            OP_TYPE_VECTOR_3D = 1,
            OP_TYPE_VECTOR_4D = 2,
            OP_TYPE_MAX = 3,
        }
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph. */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeVectorBase.OpType): void
        get_op_type(): VisualShaderNodeVectorBase.OpType
        /** A vector type that this operation is performed on. */
        op_type: number /*i64*/
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph. */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph. */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
    }
    /** Returns the distance between two points. To be used within the visual shader graph. */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            FUNC_NORMALIZE = 0,
            FUNC_SATURATE = 1,
            FUNC_NEGATE = 2,
            FUNC_RECIPROCAL = 3,
            FUNC_ABS = 4,
            FUNC_ACOS = 5,
            FUNC_ACOSH = 6,
            FUNC_ASIN = 7,
            FUNC_ASINH = 8,
            FUNC_ATAN = 9,
            FUNC_ATANH = 10,
            FUNC_CEIL = 11,
            FUNC_COS = 12,
            FUNC_COSH = 13,
            FUNC_DEGREES = 14,
            FUNC_EXP = 15,
            FUNC_EXP2 = 16,
            FUNC_FLOOR = 17,
            FUNC_FRACT = 18,
            FUNC_INVERSE_SQRT = 19,
            FUNC_LOG = 20,
            FUNC_LOG2 = 21,
            FUNC_RADIANS = 22,
            FUNC_ROUND = 23,
            FUNC_ROUNDEVEN = 24,
            FUNC_SIGN = 25,
            FUNC_SIN = 26,
            FUNC_SINH = 27,
            FUNC_SQRT = 28,
            FUNC_TAN = 29,
            FUNC_TANH = 30,
            FUNC_TRUNC = 31,
            FUNC_ONEMINUS = 32,
            FUNC_MAX = 33,
        }
    }
    /** A vector function to be used within the visual shader graph. */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        set_function(func: VisualShaderNodeVectorFunc.Function): void
        get_function(): VisualShaderNodeVectorFunc.Function
        /** The function to be performed. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** Returns the length of a [Vector3] within the visual shader graph. */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            OP_ADD = 0,
            OP_SUB = 1,
            OP_MUL = 2,
            OP_DIV = 3,
            OP_MOD = 4,
            OP_POW = 5,
            OP_MAX = 6,
            OP_MIN = 7,
            OP_CROSS = 8,
            OP_ATAN2 = 9,
            OP_REFLECT = 10,
            OP_STEP = 11,
            OP_ENUM_SIZE = 12,
        }
    }
    /** A vector operator to be used within the visual shader graph. */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        set_operator(op: VisualShaderNodeVectorOp.Operator): void
        get_operator(): VisualShaderNodeVectorOp.Operator
        /** The operator to be used. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph. */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture. */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
    }
    namespace VoxelGI {
        enum Subdiv {
            SUBDIV_64 = 0,
            SUBDIV_128 = 1,
            SUBDIV_256 = 2,
            SUBDIV_512 = 3,
            SUBDIV_MAX = 4,
        }
    }
    /** Real-time global illumination (GI) probe. */
    class VoxelGI extends VisualInstance3D {
        set_probe_data(data: VoxelGIData): void
        get_probe_data(): VoxelGIData
        set_subdiv(subdiv: VoxelGI.Subdiv): void
        get_subdiv(): VoxelGI.Subdiv
        set_size(size: Vector3): void
        get_size(): Vector3
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is [code]true[/code], after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.
         *  [b]Note:[/b] [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.
         *  [b]Note:[/b] [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use [code]call_deferred("bake")[/code] instead of calling [method bake] directly.
         */
        bake(from_node: Node = <any> {} /*compound.type from nil*/, create_visual_debug: boolean = false): void
        /** Calls [method bake] with [code]create_visual_debug[/code] enabled. */
        debug_bake(): void
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        subdiv: number /*i64*/
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.
         *  [b]Note:[/b] Size is clamped to 1.0 unit or more on each axis.
         */
        size: Vector3
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        data: VoxelGIData
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node. */
    class VoxelGIData extends Resource {
        allocate(to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).
         *  [b]Note:[/b] If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.
         */
        get_bounds(): AABB
        get_octree_size(): Vector3
        get_to_cell_xform(): Transform3D
        get_octree_cells(): PackedByteArray
        get_data_cells(): PackedByteArray
        get_level_counts(): PackedInt32Array
        set_dynamic_range(dynamic_range: number /*f64*/): void
        get_dynamic_range(): number /*f64*/
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_normal_bias(bias: number /*f64*/): void
        get_normal_bias(): number /*f64*/
        set_propagation(propagation: number /*f64*/): void
        get_propagation(): number /*f64*/
        set_interior(interior: boolean): void
        is_interior(): boolean
        set_use_two_bounces(enable: boolean): void
        is_using_two_bounces(): boolean
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        _data: Dictionary
        /** The dynamic range to use ([code]1.0[/code] represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        dynamic_range: number /*f64*/
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        energy: number /*f64*/
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to [code]0.0[/code] and [member normal_bias] to a value between [code]1.0[/code] and [code]2.0[/code]. */
        bias: number /*f64*/
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to [code]0.0[/code] and [member normal_bias] to a value between [code]1.0[/code] and [code]2.0[/code]. */
        normal_bias: number /*f64*/
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        propagation: number /*f64*/
        /** If [code]true[/code], performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        use_two_bounces: boolean
        /** If [code]true[/code], [Environment] lighting is ignored by the [VoxelGI] node. If [code]false[/code], [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        interior: boolean
    }
    class VoxelGIEditorPlugin extends EditorPlugin {
    }
    class VoxelGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count. */
    class WeakRef extends RefCounted {
        /** Returns the [Object] this weakref is referring to. Returns [code]null[/code] if that object no longer exists. */
        get_ref(): any
    }
    namespace WebRTCDataChannel {
        enum WriteMode {
            WRITE_MODE_TEXT = 0,
            WRITE_MODE_BINARY = 1,
        }
        enum ChannelState {
            STATE_CONNECTING = 0,
            STATE_OPEN = 1,
            STATE_CLOSING = 2,
            STATE_CLOSED = 3,
        }
    }
    class WebRTCDataChannel extends PacketPeer {
        /** Reserved, but not used for now. */
        poll(): GodotError
        /** Closes this data channel, notifying the other peer. */
        close(): void
        /** Returns [code]true[/code] if the last received packet was transferred as text. See [member write_mode]. */
        was_string_packet(): boolean
        set_write_mode(write_mode: WebRTCDataChannel.WriteMode): void
        get_write_mode(): WebRTCDataChannel.WriteMode
        /** Returns the current state of this channel, see [enum ChannelState]. */
        get_ready_state(): WebRTCDataChannel.ChannelState
        /** Returns the label assigned to this channel during creation. */
        get_label(): string
        /** Returns [code]true[/code] if this channel was created with ordering enabled (default). */
        is_ordered(): boolean
        /** Returns the ID assigned to this channel during creation (or auto-assigned during negotiation).
         *  If the channel is not negotiated out-of-band the ID will only be available after the connection is established (will return [code]65535[/code] until then).
         */
        get_id(): number /*i64*/
        /** Returns the [code]maxPacketLifeTime[/code] value assigned to this channel during creation.
         *  Will be [code]65535[/code] if not specified.
         */
        get_max_packet_life_time(): number /*i64*/
        /** Returns the [code]maxRetransmits[/code] value assigned to this channel during creation.
         *  Will be [code]65535[/code] if not specified.
         */
        get_max_retransmits(): number /*i64*/
        /** Returns the sub-protocol assigned to this channel during creation. An empty string if not specified. */
        get_protocol(): string
        /** Returns [code]true[/code] if this channel was created with out-of-band configuration. */
        is_negotiated(): boolean
        /** Returns the number of bytes currently queued to be sent over this channel. */
        get_buffered_amount(): number /*i64*/
        /** The transfer mode to use when sending outgoing packet. Either text or binary. */
        write_mode: number /*i64*/
    }
    class WebRTCDataChannelExtension extends WebRTCDataChannel {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _set_write_mode(p_write_mode: WebRTCDataChannel.WriteMode): void
        /* gdvirtual */ _get_write_mode(): WebRTCDataChannel.WriteMode
        /* gdvirtual */ _was_string_packet(): boolean
        /* gdvirtual */ _get_ready_state(): WebRTCDataChannel.ChannelState
        /* gdvirtual */ _get_label(): string
        /* gdvirtual */ _is_ordered(): boolean
        /* gdvirtual */ _get_id(): number /*i64*/
        /* gdvirtual */ _get_max_packet_life_time(): number /*i64*/
        /* gdvirtual */ _get_max_retransmits(): number /*i64*/
        /* gdvirtual */ _get_protocol(): string
        /* gdvirtual */ _is_negotiated(): boolean
        /* gdvirtual */ _get_buffered_amount(): number /*i64*/
    }
    /** A simple interface to create a peer-to-peer mesh network composed of [WebRTCPeerConnection] that is compatible with the [MultiplayerAPI]. */
    class WebRTCMultiplayerPeer extends MultiplayerPeer {
        /** Initialize the multiplayer peer as a server (with unique ID of [code]1[/code]). This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).
         */
        create_server(channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        /** Initialize the multiplayer peer as a client with the given [param peer_id] (must be between 2 and 2147483647). In this mode, you should only call [method add_peer] once and with [param peer_id] of [code]1[/code]. This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).
         */
        create_client(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        /** Initialize the multiplayer peer as a mesh (i.e. all peers connect to each other) with the given [param peer_id] (must be between 1 and 2147483647). */
        create_mesh(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        /** Add a new peer to the mesh with the given [param peer_id]. The [WebRTCPeerConnection] must be in state [constant WebRTCPeerConnection.STATE_NEW].
         *  Three channels will be created for reliable, unreliable, and ordered transport. The value of [param unreliable_lifetime] will be passed to the [code]"maxPacketLifetime"[/code] option when creating unreliable and ordered channels (see [method WebRTCPeerConnection.create_data_channel]).
         */
        add_peer(peer: WebRTCPeerConnection, peer_id: number /*i64*/, unreliable_lifetime: number /*i64*/ = 1): GodotError
        /** Remove the peer with given [param peer_id] from the mesh. If the peer was connected, and [signal MultiplayerPeer.peer_connected] was emitted for it, then [signal MultiplayerPeer.peer_disconnected] will be emitted. */
        remove_peer(peer_id: number /*i64*/): void
        /** Returns [code]true[/code] if the given [param peer_id] is in the peers map (it might not be connected though). */
        has_peer(peer_id: number /*i64*/): boolean
        /** Returns a dictionary representation of the peer with given [param peer_id] with three keys. [code]"connection"[/code] containing the [WebRTCPeerConnection] to this peer, [code]"channels"[/code] an array of three [WebRTCDataChannel], and [code]"connected"[/code] a boolean representing if the peer connection is currently connected (all three channels are open). */
        get_peer(peer_id: number /*i64*/): Dictionary
        /** Returns a dictionary which keys are the peer ids and values the peer representation as in [method get_peer]. */
        get_peers(): Dictionary
    }
    namespace WebRTCPeerConnection {
        enum ConnectionState {
            STATE_NEW = 0,
            STATE_CONNECTING = 1,
            STATE_CONNECTED = 2,
            STATE_DISCONNECTED = 3,
            STATE_FAILED = 4,
            STATE_CLOSED = 5,
        }
        enum GatheringState {
            GATHERING_STATE_NEW = 0,
            GATHERING_STATE_GATHERING = 1,
            GATHERING_STATE_COMPLETE = 2,
        }
        enum SignalingState {
            SIGNALING_STATE_STABLE = 0,
            SIGNALING_STATE_HAVE_LOCAL_OFFER = 1,
            SIGNALING_STATE_HAVE_REMOTE_OFFER = 2,
            SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3,
            SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4,
            SIGNALING_STATE_CLOSED = 5,
        }
    }
    /** Interface to a WebRTC peer connection. */
    class WebRTCPeerConnection extends RefCounted {
        /** Sets the [param extension_class] as the default [WebRTCPeerConnectionExtension] returned when creating a new [WebRTCPeerConnection]. */
        static set_default_extension(extension_class: StringName): void
        /** Re-initialize this peer connection, closing any previously active connection, and going back to state [constant STATE_NEW]. A dictionary of [param configuration] options can be passed to configure the peer connection.
         *  Valid [param configuration] options are:
         *  
         */
        initialize(configuration: Dictionary = <any> {} /*compound.type from 27([object Object])*/): GodotError
        /** Returns a new [WebRTCDataChannel] (or [code]null[/code] on failure) with given [param label] and optionally configured via the [param options] dictionary. This method can only be called when the connection is in state [constant STATE_NEW].
         *  There are two ways to create a working data channel: either call [method create_data_channel] on only one of the peer and listen to [signal data_channel_received] on the other, or call [method create_data_channel] on both peers, with the same values, and the [code]"negotiated"[/code] option set to [code]true[/code].
         *  Valid [param options] are:
         *  
         *  [b]Note:[/b] You must keep a reference to channels created this way, or it will be closed.
         */
        create_data_channel(label: string, options: Dictionary = <any> {} /*compound.type from 27([object Object])*/): WebRTCDataChannel
        /** Creates a new SDP offer to start a WebRTC connection with a remote peer. At least one [WebRTCDataChannel] must have been created before calling this method.
         *  If this functions returns [constant OK], [signal session_description_created] will be called when the session is ready to be sent.
         */
        create_offer(): GodotError
        /** Sets the SDP description of the local peer. This should be called in response to [signal session_description_created].
         *  After calling this function the peer will start emitting [signal ice_candidate_created] (unless an [enum Error] different from [constant OK] is returned).
         */
        set_local_description(type: string, sdp: string): GodotError
        /** Sets the SDP description of the remote peer. This should be called with the values generated by a remote peer and received over the signaling server.
         *  If [param type] is [code]"offer"[/code] the peer will emit [signal session_description_created] with the appropriate answer.
         *  If [param type] is [code]"answer"[/code] the peer will start emitting [signal ice_candidate_created].
         */
        set_remote_description(type: string, sdp: string): GodotError
        /** Add an ice candidate generated by a remote peer (and received over the signaling server). See [signal ice_candidate_created]. */
        add_ice_candidate(media: string, index: number /*i64*/, name: string): GodotError
        /** Call this method frequently (e.g. in [method Node._process] or [method Node._physics_process]) to properly receive signals. */
        poll(): GodotError
        /** Close the peer connection and all data channels associated with it.
         *  [b]Note:[/b] You cannot reuse this object for a new connection unless you call [method initialize].
         */
        close(): void
        /** Returns the connection state. See [enum ConnectionState]. */
        get_connection_state(): WebRTCPeerConnection.ConnectionState
        /** Returns the ICE [enum GatheringState] of the connection. This lets you detect, for example, when collection of ICE candidates has finished. */
        get_gathering_state(): WebRTCPeerConnection.GatheringState
        /** Returns the [enum SignalingState] on the local end of the connection while connecting or reconnecting to another peer. */
        get_signaling_state(): WebRTCPeerConnection.SignalingState
        readonly session_description_created: Signal
        readonly ice_candidate_created: Signal
        readonly data_channel_received: Signal
    }
    class WebRTCPeerConnectionExtension extends WebRTCPeerConnection {
        /* gdvirtual */ _get_connection_state(): WebRTCPeerConnection.ConnectionState
        /* gdvirtual */ _get_gathering_state(): WebRTCPeerConnection.GatheringState
        /* gdvirtual */ _get_signaling_state(): WebRTCPeerConnection.SignalingState
        /* gdvirtual */ _initialize(p_config: Dictionary): GodotError
        /* gdvirtual */ _create_data_channel(p_label: string, p_config: Dictionary): WebRTCDataChannel
        /* gdvirtual */ _create_offer(): GodotError
        /* gdvirtual */ _set_remote_description(p_type: string, p_sdp: string): GodotError
        /* gdvirtual */ _set_local_description(p_type: string, p_sdp: string): GodotError
        /* gdvirtual */ _add_ice_candidate(p_sdp_mid_name: string, p_sdp_mline_index: number /*i64*/, p_sdp_name: string): GodotError
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _close(): void
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            TARGET_RAY_MODE_UNKNOWN = 0,
            TARGET_RAY_MODE_GAZE = 1,
            TARGET_RAY_MODE_TRACKED_POINTER = 2,
            TARGET_RAY_MODE_SCREEN = 3,
        }
    }
    /** XR interface using WebXR. */
    class WebXRInterface extends XRInterface {
        /** Checks if the given [param session_mode] is supported by the user's browser.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: [code]"immersive-vr"[/code], [code]"immersive-ar"[/code], and [code]"inline"[/code].
         *  This method returns nothing, instead it emits the [signal session_supported] signal with the result.
         */
        is_session_supported(session_mode: string): void
        set_session_mode(session_mode: string): void
        get_session_mode(): string
        set_required_features(required_features: string): void
        get_required_features(): string
        set_optional_features(optional_features: string): void
        get_optional_features(): string
        get_reference_space_type(): string
        set_requested_reference_space_types(requested_reference_space_types: string): void
        get_requested_reference_space_types(): string
        /** Returns [code]true[/code] if there is an active input source with the given [param input_source_id]. */
        is_input_source_active(input_source_id: number /*i64*/): boolean
        /** Gets an [XRPositionalTracker] for the given [param input_source_id].
         *  In the context of WebXR, an input source can be an advanced VR controller like the Oculus Touch or Index controllers, or even a tap on the screen, a spoken voice command or a button press on the device itself. When a non-traditional input source is used, interpret the position and orientation of the [XRPositionalTracker] as a ray pointing at the object the user wishes to interact with.
         *  Use this method to get information about the input source that triggered one of these signals:
         *  - [signal selectstart]
         *  - [signal select]
         *  - [signal selectend]
         *  - [signal squeezestart]
         *  - [signal squeeze]
         *  - [signal squeezestart]
         */
        get_input_source_tracker(input_source_id: number /*i64*/): XRPositionalTracker
        /** Returns the target ray mode for the given [param input_source_id].
         *  This can help interpret the input coming from that input source. See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/targetRayMode]XRInputSource.targetRayMode[/url] for more information.
         */
        get_input_source_target_ray_mode(input_source_id: number /*i64*/): WebXRInterface.TargetRayMode
        get_visibility_state(): string
        /** Returns the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It may not report an accurate value until after using [method set_display_refresh_rate]. */
        get_display_refresh_rate(): number /*f64*/
        /** Sets the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It won't take effect right away until after [signal display_refresh_rate_changed] is emitted. */
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the web browser and after the interface has been initialized. */
        get_available_display_refresh_rates(): Array
        /** The session mode used by [method XRInterface.initialize] when setting up the WebXR session.
         *  This doesn't have any effect on the interface when already initialized.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: [code]"immersive-vr"[/code], [code]"immersive-ar"[/code], and [code]"inline"[/code].
         */
        session_mode: string
        /** A comma-seperated list of required features used by [method XRInterface.initialize] when setting up the WebXR session.
         *  If a user's browser or device doesn't support one of the given features, initialization will fail and [signal session_failed] will be emitted.
         *  This doesn't have any effect on the interface when already initialized.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].
         */
        required_features: string
        /** A comma-seperated list of optional features used by [method XRInterface.initialize] when setting up the WebXR session.
         *  If a user's browser or device doesn't support one of the given features, initialization will continue, but you won't be able to use the requested feature.
         *  This doesn't have any effect on the interface when already initialized.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].
         */
        optional_features: string
        /** A comma-seperated list of reference space types used by [method XRInterface.initialize] when setting up the WebXR session.
         *  The reference space types are requested in order, and the first one supported by the users device or browser will be used. The [member reference_space_type] property contains the reference space type that was ultimately selected.
         *  This doesn't have any effect on the interface when already initialized.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].
         */
        requested_reference_space_types: string
        /** The reference space type (from the list of requested types set in the [member requested_reference_space_types] property), that was ultimately used by [method XRInterface.initialize] when setting up the WebXR session.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].
         */
        readonly reference_space_type: string
        /** Indicates if the WebXR session's imagery is visible to the user.
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including [code]"hidden"[/code], [code]"visible"[/code], and [code]"visible-blurred"[/code].
         */
        readonly visibility_state: string
        readonly session_supported: Signal
        readonly session_started: Signal
        readonly session_ended: Signal
        readonly session_failed: Signal
        readonly selectstart: Signal
        readonly select: Signal
        readonly selectend: Signal
        readonly squeezestart: Signal
        readonly squeeze: Signal
        readonly squeezeend: Signal
        readonly visibility_state_changed: Signal
        readonly reference_space_reset: Signal
        readonly display_refresh_rate_changed: Signal
    }
    namespace Window {
        enum Mode {
            MODE_WINDOWED = 0,
            MODE_MINIMIZED = 1,
            MODE_MAXIMIZED = 2,
            MODE_FULLSCREEN = 3,
            MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum Flags {
            FLAG_RESIZE_DISABLED = 0,
            FLAG_BORDERLESS = 1,
            FLAG_ALWAYS_ON_TOP = 2,
            FLAG_TRANSPARENT = 3,
            FLAG_NO_FOCUS = 4,
            FLAG_POPUP = 5,
            FLAG_EXTEND_TO_TITLE = 6,
            FLAG_MOUSE_PASSTHROUGH = 7,
            FLAG_MAX = 8,
        }
        enum ContentScaleMode {
            CONTENT_SCALE_MODE_DISABLED = 0,
            CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
            CONTENT_SCALE_MODE_VIEWPORT = 2,
        }
        enum ContentScaleAspect {
            CONTENT_SCALE_ASPECT_IGNORE = 0,
            CONTENT_SCALE_ASPECT_KEEP = 1,
            CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
            CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
            CONTENT_SCALE_ASPECT_EXPAND = 4,
        }
        enum ContentScaleStretch {
            CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
            CONTENT_SCALE_STRETCH_INTEGER = 1,
        }
        enum LayoutDirection {
            LAYOUT_DIRECTION_INHERITED = 0,
            LAYOUT_DIRECTION_LOCALE = 1,
            LAYOUT_DIRECTION_LTR = 2,
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum WindowInitialPosition {
            WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
            WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
            WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
            WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5,
        }
    }
    /** Base class for all windows, dialogs, and popups. */
    class Window extends Viewport {
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        static readonly NOTIFICATION_THEME_CHANGED = 32
        /* gdvirtual */ _get_contents_minimum_size(): Vector2
        set_title(title: string): void
        get_title(): string
        /** Returns the ID of the window. */
        get_window_id(): number /*i64*/
        set_initial_position(initial_position: Window.WindowInitialPosition): void
        get_initial_position(): Window.WindowInitialPosition
        set_current_screen(index: number /*i64*/): void
        get_current_screen(): number /*i64*/
        set_position(position: Vector2i): void
        get_position(): Vector2i
        /** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
        move_to_center(): void
        set_size(size: Vector2i): void
        get_size(): Vector2i
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling [code]set_size(Vector2i())[/code] (or any size below the minimum). */
        reset_size(): void
        /** Returns the window's position including its border. */
        get_position_with_decorations(): Vector2i
        /** Returns the window's size including its border. */
        get_size_with_decorations(): Vector2i
        set_max_size(max_size: Vector2i): void
        get_max_size(): Vector2i
        set_min_size(min_size: Vector2i): void
        get_min_size(): Vector2i
        set_mode(mode: Window.Mode): void
        get_mode(): Window.Mode
        /** Sets a specified window flag. */
        set_flag(flag: Window.Flags, enabled: boolean): void
        /** Returns [code]true[/code] if the [param flag] is set. */
        get_flag(flag: Window.Flags): boolean
        /** Returns [code]true[/code] if the window can be maximized (the maximize button is enabled). */
        is_maximize_allowed(): boolean
        /** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
        request_attention(): void
        /** Moves the [Window] on top of other windows and focuses it. */
        move_to_foreground(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        set_transient(transient: boolean): void
        is_transient(): boolean
        set_exclusive(exclusive: boolean): void
        is_exclusive(): boolean
        /** If [param unparent] is [code]true[/code], the window is automatically unparented when going invisible.
         *  [b]Note:[/b] Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.
         */
        set_unparent_when_invisible(unparent: boolean): void
        /** Returns whether the window is being drawn to the screen. */
        can_draw(): boolean
        /** Returns [code]true[/code] if the window is focused. */
        has_focus(): boolean
        /** Causes the window to grab focus, allowing it to receive user input. */
        grab_focus(): void
        /** If [param active] is [code]true[/code], enables system's native IME (Input Method Editor). */
        set_ime_active(active: boolean): void
        /** Moves IME to the given position. */
        set_ime_position(position: Vector2i): void
        /** Returns [code]true[/code] if the window is currently embedded in another window. */
        is_embedded(): boolean
        /** Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when child nodes have changed.
         *  The value returned by this method can be overridden with [method _get_contents_minimum_size].
         */
        get_contents_minimum_size(): Vector2
        set_content_scale_size(size: Vector2i): void
        get_content_scale_size(): Vector2i
        set_content_scale_mode(mode: Window.ContentScaleMode): void
        get_content_scale_mode(): Window.ContentScaleMode
        set_content_scale_aspect(aspect: Window.ContentScaleAspect): void
        get_content_scale_aspect(): Window.ContentScaleAspect
        set_content_scale_stretch(stretch: Window.ContentScaleStretch): void
        get_content_scale_stretch(): Window.ContentScaleStretch
        set_keep_title_visible(title_visible: boolean): void
        get_keep_title_visible(): boolean
        set_content_scale_factor(factor: number /*f64*/): void
        get_content_scale_factor(): number /*f64*/
        /** Enables font oversampling. This makes fonts look better when they are scaled up. */
        set_use_font_oversampling(enable: boolean): void
        /** Returns [code]true[/code] if font oversampling is enabled. See [method set_use_font_oversampling]. */
        is_using_font_oversampling(): boolean
        set_mouse_passthrough_polygon(polygon: PackedVector2Array): void
        get_mouse_passthrough_polygon(): PackedVector2Array
        set_wrap_controls(enable: boolean): void
        is_wrapping_controls(): boolean
        /** Requests an update of the [Window] size to fit underlying [Control] nodes. */
        child_controls_changed(): void
        _update_child_controls(): void
        _update_embedded_window(): void
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
         *  See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.
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
         *  See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.
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
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_icon(name: StringName, theme_type: StringName = ''): Texture2D
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_stylebox(name: StringName, theme_type: StringName = ''): StyleBox
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_font(name: StringName, theme_type: StringName = ''): Font
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_font_size(name: StringName, theme_type: StringName = ''): number /*i64*/
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for more details.
         */
        get_theme_color(name: StringName, theme_type: StringName = ''): Color
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for more details.
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
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_icon(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_stylebox(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_font(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_font_size(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_color(name: StringName, theme_type: StringName = ''): boolean
        /** Returns [code]true[/code] if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].
         *  See [method Control.get_theme_color] for details.
         */
        has_theme_constant(name: StringName, theme_type: StringName = ''): boolean
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_default_base_scale(): number /*f64*/
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_default_font(): Font
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.
         *  See [method Control.get_theme_color] for details.
         */
        get_theme_default_font_size(): number /*i64*/
        /** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        set_layout_direction(direction: Window.LayoutDirection): void
        /** Returns layout direction and text writing direction. */
        get_layout_direction(): Window.LayoutDirection
        /** Returns [code]true[/code] if layout is right-to-left. */
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window. */
        popup(rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popup_on_parent(parent_rect: Rect2i): void
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.
         *  [b]Note:[/b] Calling it with the default value of [param minsize] is equivalent to calling it with [member size].
         */
        popup_centered(minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.
         */
        popup_centered_ratio(ratio: number /*f64*/ = 0.8): void
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.
         *  [b]Note:[/b] Calling it with the default value of [param minsize] is equivalent to calling it with [member size].
         */
        popup_centered_clamped(minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/, fallback_ratio: number /*f64*/ = 0.75): void
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
         */
        popup_exclusive(from_node: Node, rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
         */
        popup_exclusive_on_parent(from_node: Node, parent_rect: Rect2i): void
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
         */
        popup_exclusive_centered(from_node: Node, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
         */
        popup_exclusive_centered_ratio(from_node: Node, ratio: number /*f64*/ = 0.8): void
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
         */
        popup_exclusive_centered_clamped(from_node: Node, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/, fallback_ratio: number /*f64*/ = 0.75): void
        /** Set's the window's current mode.
         *  [b]Note:[/b] Fullscreen mode is not exclusive full screen on Windows and Linux.
         *  [b]Note:[/b] This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.
         */
        mode: number /*i64*/
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        title: string
        /** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
        initial_position: number /*i64*/
        /** The window's position in pixels.
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is [code]false[/code], the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is [code]true[/code], the window's position is in the coordinates of its parent [Viewport].
         *  [b]Note:[/b] This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].
         */
        position: Vector2i
        /** The window's size in pixels. */
        size: Vector2i
        /** The screen the window is currently on. */
        current_screen: number /*i64*/
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
         *  
         *  [b]Note:[/b] This property is ignored if [member mouse_passthrough] is set to [code]true[/code].
         *  [b]Note:[/b] On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
         *  [b]Note:[/b] This property is implemented on Linux (X11), macOS and Windows.
         */
        mouse_passthrough_polygon: PackedVector2Array
        /** If [code]true[/code], the window is visible. */
        visible: boolean
        /** If [code]true[/code], the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.
         *  If [code]false[/code], you need to call [method child_controls_changed] manually.
         */
        wrap_controls: boolean
        /** If [code]true[/code], the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
         *  Note that behavior might be different depending on the platform.
         */
        transient: boolean
        /** If [code]true[/code], the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].
         *  Needs [member transient] enabled to work.
         */
        exclusive: boolean
        /** If non-zero, the [Window] can't be resized to be smaller than this size.
         *  [b]Note:[/b] This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.
         */
        min_size: Vector2i
        /** If non-zero, the [Window] can't be resized to be bigger than this size.
         *  [b]Note:[/b] This property will be ignored if the value is lower than [member min_size].
         */
        max_size: Vector2i
        /** If [code]true[/code], the [Window] width is expanded to keep the title bar text fully visible. */
        keep_title_visible: boolean
        /** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
        content_scale_size: Vector2i
        /** Specifies how the content is scaled when the [Window] is resized. */
        content_scale_mode: number /*i64*/
        /** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
        content_scale_aspect: number /*i64*/
        /** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
        content_scale_stretch: number /*i64*/
        /** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. */
        content_scale_factor: number /*f64*/
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        auto_translate: boolean
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.
         *  [b]Note:[/b] [Window] styles will have no effect unless the window is embedded.
         */
        theme: Theme
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        theme_type_variation: string
        readonly window_input: Signal
        readonly files_dropped: Signal
        readonly mouse_entered: Signal
        readonly mouse_exited: Signal
        readonly focus_entered: Signal
        readonly focus_exited: Signal
        readonly close_requested: Signal
        readonly go_back_requested: Signal
        readonly visibility_changed: Signal
        readonly about_to_popup: Signal
        readonly theme_changed: Signal
        readonly dpi_changed: Signal
        readonly titlebar_changed: Signal
    }
    class WindowWrapper extends MarginContainer {
        readonly window_visibility_changed: Signal
        readonly window_close_requested: Signal
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space. */
    class World2D extends Resource {
        get_canvas(): RID
        get_space(): RID
        get_navigation_map(): RID
        get_direct_space_state(): PhysicsDirectSpaceState2D
        /** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
        readonly canvas: RID
        /** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
        readonly space: RID
        /** The [RID] of this world's navigation map. Used by the [NavigationServer2D]. */
        readonly navigation_map: RID
        /** Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        readonly direct_space_state: PhysicsDirectSpaceState2D
    }
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space. */
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
        /** The World3D's [Environment]. */
        environment: Environment
        /** The World3D's fallback environment will be used if [member environment] fails or is missing. */
        fallback_environment: Environment
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        /** The World3D's physics space. */
        readonly space: RID
        /** The [RID] of this world's navigation map. Used by the [NavigationServer3D]. */
        readonly navigation_map: RID
        /** The World3D's visual scenario. */
        readonly scenario: RID
        /** Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        readonly direct_space_state: PhysicsDirectSpaceState3D
    }
    /** A 2D world boundary (half-plane) shape used for physics collision. */
    class WorldBoundaryShape2D extends Shape2D {
        set_normal(normal: Vector2): void
        get_normal(): Vector2
        set_distance(distance: number /*f64*/): void
        get_distance(): number /*f64*/
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        normal: Vector2
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as [code]abs(distance) / normal.length()[/code].
         *  In the scalar equation of the line [code]ax + by = d[/code], this is [code]d[/code], while the [code](a, b)[/code] coordinates are represented by the [member normal] property.
         */
        distance: number /*f64*/
    }
    /** A 3D world boundary (half-space) shape used for physics collision. */
    class WorldBoundaryShape3D extends Shape3D {
        set_plane(plane: Plane): void
        get_plane(): Plane
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        plane: Plane
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings). */
    class WorldEnvironment extends Node {
        set_environment(env: Environment): void
        get_environment(): Environment
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        /** The [Environment] resource used by this [WorldEnvironment], defining the default properties. */
        environment: Environment
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
    }
    /** An X509 certificate (e.g. for TLS). */
    class X509Certificate extends Resource {
        /** Saves a certificate to the given [param path] (should be a "*.crt" file). */
        save(path: string): GodotError
        /** Loads a certificate from [param path] ("*.crt" file). */
        load(path: string): GodotError
        /** Returns a string representation of the certificate, or an empty string if the certificate is invalid. */
        save_to_string(): string
        /** Loads a certificate from the given [param string]. */
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
    /** Provides a low-level interface for creating parsers for XML files. */
    class XMLParser extends RefCounted {
        /** Parses the next node in the file. This method returns an error code. */
        read(): GodotError
        /** Returns the type of the current node. Compare with [enum NodeType] constants. */
        get_node_type(): XMLParser.NodeType
        /** Returns the name of an element node. This method will raise an error if the currently parsed node is not of [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END] type. */
        get_node_name(): string
        /** Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type. */
        get_node_data(): string
        /** Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position. */
        get_node_offset(): number /*i64*/
        /** Returns the number of attributes in the currently parsed element.
         *  [b]Note:[/b] If this method is used while the currently parsed node is not [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END], this count will not be updated and will still reflect the last element.
         */
        get_attribute_count(): number /*i64*/
        /** Returns the name of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_name(idx: number /*i64*/): string
        /** Returns the value of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_value(idx: number /*i64*/): string
        /** Returns [code]true[/code] if the currently parsed element has an attribute with the [param name]. */
        has_attribute(name: string): boolean
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will raise an error if the element has no such attribute. */
        get_named_attribute_value(name: string): string
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will return an empty string if the element has no such attribute. */
        get_named_attribute_value_safe(name: string): string
        /** Returns [code]true[/code] if the currently parsed element is empty, e.g. [code]<element />[/code]. */
        is_empty(): boolean
        /** Returns the current line in the parsed file, counting from 0. */
        get_current_line(): number /*i64*/
        /** Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element. */
        skip_section(): void
        /** Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code. */
        seek(position: number /*i64*/): GodotError
        /** Opens an XML [param file] for parsing. This method returns an error code. */
        open(file: string): GodotError
        /** Opens an XML raw [param buffer] for parsing. This method returns an error code. */
        open_buffer(buffer: PackedByteArray): GodotError
    }
    /** An anchor point in AR space. */
    class XRAnchor3D extends XRNode3D {
        /** Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table. */
        get_size(): Vector3
        /** Returns a plane aligned with our anchor; handy for intersection testing. */
        get_plane(): Plane
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking. */
    class XRCamera3D extends Camera3D {
    }
    /** A spatial node representing a spatially-tracked controller. */
    class XRController3D extends XRNode3D {
        /** Returns [code]true[/code] if the button with the given [param name] is pressed. */
        is_button_pressed(name: StringName): boolean
        /** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration. */
        get_input(name: StringName): any
        /** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors. */
        get_float(name: StringName): number /*f64*/
        /** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers. */
        get_vector2(name: StringName): Vector2
        /** Returns the hand holding this controller, if known. See [enum XRPositionalTracker.TrackerHand]. */
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
    /** Base class for an XR interface implementation. */
    class XRInterface extends RefCounted {
        /** Returns the name of this interface (OpenXR, OpenVR, OpenHMD, ARKit, etc). */
        get_name(): StringName
        /** Returns a combination of [enum Capabilities] flags providing information about the capabilities of this interface. */
        get_capabilities(): number /*i64*/
        is_primary(): boolean
        set_primary(primary: boolean): void
        /** Is [code]true[/code] if this interface has been initialized. */
        is_initialized(): boolean
        /** Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.
         *  After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.
         *  [b]Note:[/b] You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.
         *  If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.
         *  While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.
         */
        initialize(): boolean
        /** Turns the interface off. */
        uninitialize(): void
        /** Returns a [Dictionary] with extra system info. Interfaces are expected to return [code]XRRuntimeName[/code] and [code]XRRuntimeVersion[/code] providing info about the used XR runtime. Additional entries may be provided specific to an interface.
         *  [b]Note:[/b]This information may only be available after [method initialize] was successfully called.
         */
        get_system_info(): Dictionary
        /** If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking. */
        get_tracking_status(): XRInterface.TrackingStatus
        /** Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform. */
        get_render_target_size(): Vector2
        /** Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic. */
        get_view_count(): number /*i64*/
        /** Triggers a haptic pulse on a device associated with this interface.
         *  [param action_name] is the name of the action for this pulse.
         *  [param tracker_name] is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.
         */
        trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        /** Call this to find out if a given play area mode is supported by this interface. */
        supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        get_play_area_mode(): XRInterface.PlayAreaMode
        /** Sets the active play area mode, will return [code]false[/code] if the mode can't be used with this interface. */
        set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        /** Returns an array of vectors that denotes the physical play area mapped to the virtual space around the [XROrigin3D] point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available. */
        get_play_area(): PackedVector3Array
        get_anchor_detection_is_enabled(): boolean
        set_anchor_detection_is_enabled(enable: boolean): void
        /** If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [CameraServer] for this interface. */
        get_camera_feed_id(): number /*i64*/
        /** Is [code]true[/code] if this interface supports passthrough. */
        is_passthrough_supported(): boolean
        /** Is [code]true[/code] if passthrough is enabled. */
        is_passthrough_enabled(): boolean
        /** Starts passthrough, will return [code]false[/code] if passthrough couldn't be started.
         *  [b]Note:[/b] The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.
         */
        start_passthrough(): boolean
        /** Stops passthrough. */
        stop_passthrough(): void
        /** Returns the transform for a view/eye.
         *  [param view] is the view/eye index.
         *  [param cam_transform] is the transform that maps device coordinates to scene coordinates, typically the [member Node3D.global_transform] of the current XROrigin3D.
         */
        get_transform_for_view(view: number /*i64*/, cam_transform: Transform3D): Transform3D
        /** Returns the projection matrix for a view/eye. */
        get_projection_for_view(view: number /*i64*/, aspect: number /*f64*/, near: number /*f64*/, far: number /*f64*/): Projection
        /** Returns the an array of supported environment blend modes, see [enum XRInterface.EnvironmentBlendMode]. */
        get_supported_environment_blend_modes(): Array
        /** Sets the active environment blend mode.
         *  [param mode] is the [enum XRInterface.EnvironmentBlendMode] starting with the next frame.
         *  [b]Note:[/b] Not all runtimes support all environment blend modes, so it is important to check this at startup. For example:
         *  
         */
        set_environment_blend_mode(mode: XRInterface.EnvironmentBlendMode): boolean
        get_environment_blend_mode(): XRInterface.EnvironmentBlendMode
        /** [code]true[/code] if this is the primary interface. */
        interface_is_primary: boolean
        /** The play area mode for this interface. */
        xr_play_area_mode: number /*i64*/
        /** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
        environment_blend_mode: number /*i64*/
        /** On an AR interface, [code]true[/code] if anchor detection is enabled. */
        ar_is_anchor_detection_enabled: boolean
        readonly play_area_changed: Signal
    }
    /** Base class for XR interface extensions (plugins). */
    class XRInterfaceExtension extends XRInterface {
        /* gdvirtual */ _get_name(): StringName
        /* gdvirtual */ _get_capabilities(): number /*i64*/
        /* gdvirtual */ _is_initialized(): boolean
        /* gdvirtual */ _initialize(): boolean
        /* gdvirtual */ _uninitialize(): void
        /* gdvirtual */ _get_system_info(): Dictionary
        /* gdvirtual */ _supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        /* gdvirtual */ _get_play_area_mode(): XRInterface.PlayAreaMode
        /* gdvirtual */ _set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        /* gdvirtual */ _get_play_area(): PackedVector3Array
        /* gdvirtual */ _get_render_target_size(): Vector2
        /* gdvirtual */ _get_view_count(): number /*i64*/
        /* gdvirtual */ _get_camera_transform(): Transform3D
        /* gdvirtual */ _get_transform_for_view(view: number /*i64*/, cam_transform: Transform3D): Transform3D
        /* gdvirtual */ _get_projection_for_view(view: number /*i64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): PackedFloat64Array
        /* gdvirtual */ _get_vrs_texture(): RID
        /* gdvirtual */ _process(): void
        /* gdvirtual */ _pre_render(): void
        /* gdvirtual */ _pre_draw_viewport(render_target: RID): boolean
        /* gdvirtual */ _post_draw_viewport(render_target: RID, screen_rect: Rect2): void
        /* gdvirtual */ _end_frame(): void
        /* gdvirtual */ _get_suggested_tracker_names(): PackedStringArray
        /* gdvirtual */ _get_suggested_pose_names(tracker_name: StringName): PackedStringArray
        /* gdvirtual */ _get_tracking_status(): XRInterface.TrackingStatus
        /* gdvirtual */ _trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        /* gdvirtual */ _get_anchor_detection_is_enabled(): boolean
        /* gdvirtual */ _set_anchor_detection_is_enabled(enabled: boolean): void
        /* gdvirtual */ _get_camera_feed_id(): number /*i64*/
        /* gdvirtual */ _get_color_texture(): RID
        /* gdvirtual */ _get_depth_texture(): RID
        /* gdvirtual */ _get_velocity_texture(): RID
        get_color_texture(): RID
        get_depth_texture(): RID
        get_velocity_texture(): RID
        /** Blits our render results to screen optionally applying lens distortion. This can only be called while processing [code]_commit_views[/code]. */
        add_blit(render_target: RID, src_rect: Rect2, dst_rect: Rect2i, use_layer: boolean, layer: number /*i64*/, apply_lens_distortion: boolean, eye_center: Vector2, k1: number /*f64*/, k2: number /*f64*/, upscale: number /*f64*/, aspect_ratio: number /*f64*/): void
        /** Returns a valid [RID] for a texture to which we should render the current frame if supported by the interface. */
        get_render_target_texture(render_target: RID): RID
    }
    /** A spatial node that has its position automatically updated by the [XRServer]. */
    class XRNode3D extends Node3D {
        set_tracker(tracker_name: StringName): void
        get_tracker(): StringName
        set_pose_name(pose: StringName): void
        get_pose_name(): StringName
        /** Returns [code]true[/code] if the [member tracker] has been registered and the [member pose] is being tracked. */
        get_is_active(): boolean
        /** Returns [code]true[/code] if the [member tracker] has current tracking data for the [member pose] being tracked. */
        get_has_tracking_data(): boolean
        /** Returns the [XRPose] containing the current state of the pose being tracked. This gives access to additional properties of this pose. */
        get_pose(): XRPose
        /** Triggers a haptic pulse on a device associated with this interface.
         *  [param action_name] is the name of the action for this pulse.
         */
        trigger_haptic_pulse(action_name: string, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        /** The name of the tracker we're bound to. Which trackers are available is not known during design time.
         *  Godot defines a number of standard trackers such as [code]left_hand[/code] and [code]right_hand[/code] but others may be configured within a given [XRInterface].
         */
        tracker: string
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.
         *  Godot defines number of standard pose names such as [code]aim[/code] and [code]grip[/code] but other may be configured within a given [XRInterface].
         */
        pose: string
        readonly tracking_changed: Signal
    }
    /** The origin point in AR/VR. */
    class XROrigin3D extends Node3D {
        set_world_scale(world_scale: number /*f64*/): void
        get_world_scale(): number /*f64*/
        set_current(enabled: boolean): void
        is_current(): boolean
        /** The scale of the game world compared to the real world. This is the same as [member XRServer.world_scale]. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        world_scale: number /*f64*/
        /** If [code]true[/code], this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        current: boolean
    }
    namespace XRPose {
        enum TrackingConfidence {
            XR_TRACKING_CONFIDENCE_NONE = 0,
            XR_TRACKING_CONFIDENCE_LOW = 1,
            XR_TRACKING_CONFIDENCE_HIGH = 2,
        }
    }
    /** This object contains all data related to a pose on a tracked object. */
    class XRPose extends RefCounted {
        set_has_tracking_data(has_tracking_data: boolean): void
        get_has_tracking_data(): boolean
        set_name(name: StringName): void
        get_name(): StringName
        set_transform(transform: Transform3D): void
        get_transform(): Transform3D
        /** Returns the [member transform] with world scale and our reference frame applied. This is the transform used to position [XRNode3D] objects. */
        get_adjusted_transform(): Transform3D
        set_linear_velocity(velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_tracking_confidence(tracking_confidence: XRPose.TrackingConfidence): void
        get_tracking_confidence(): XRPose.TrackingConfidence
        /** If [code]true[/code] our tracking data is up to date. If [code]false[/code] we're no longer receiving new tracking data and our state is whatever that last valid state was. */
        has_tracking_data: boolean
        /** The transform containing the original and transform as reported by the XR runtime. */
        transform: string
        /** The linear velocity of this pose. */
        linear_velocity: string
        /** The angular velocity for this pose. */
        angular_velocity: string
        /** The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is. */
        tracking_confidence: number /*i64*/
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            TRACKER_HAND_UNKNOWN = 0,
            TRACKER_HAND_LEFT = 1,
            TRACKER_HAND_RIGHT = 2,
        }
    }
    /** A tracked object. */
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
        /** Returns [code]true[/code] if the tracker is available and is currently tracking the bound [param name] pose. */
        has_pose(name: StringName): boolean
        /** Returns the current [XRPose] state object for the bound [param name] pose. */
        get_pose(name: StringName): XRPose
        /** Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position. */
        invalidate_pose(name: StringName): void
        /** Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by a [XRInterface] implementation and should not be used directly. */
        set_pose(name: StringName, transform: Transform3D, linear_velocity: Vector3, angular_velocity: Vector3, tracking_confidence: XRPose.TrackingConfidence): void
        /** Returns an input for this tracker. It can return a boolean, float or [Vector2] value depending on whether the input is a button, trigger or thumbstick/thumbpad. */
        get_input(name: StringName): any
        /** Changes the value for the given input. This method is called by a [XRInterface] implementation and should not be used directly. */
        set_input(name: StringName, value: any): void
        /** The type of tracker. */
        type: number /*i64*/
        /** The description of this tracker. */
        description: string
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        profile: string
        /** Defines which hand this tracker relates to. */
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
    /** Allows the creation of zip files. */
    class ZIPPacker extends RefCounted {
        /** Opens a zip file for writing at the given path using the specified write mode.
         *  This must be called before everything else.
         */
        open(path: string, append: ZIPPacker.ZipAppend = 0): GodotError
        /** Starts writing to a file within the archive. Only one file can be written at the same time.
         *  Must be called after [method open].
         */
        start_file(path: string): GodotError
        /** Write the given [param data] to the file.
         *  Needs to be called after [method start_file].
         */
        write_file(data: PackedByteArray): GodotError
        /** Stops writing to a file within the archive.
         *  It will fail if there is no open file.
         */
        close_file(): GodotError
        /** Closes the underlying resources used by this instance. */
        close(): GodotError
    }
    /** Allows reading the content of a zip file. */
    class ZIPReader extends RefCounted {
        /** Opens the zip archive at the given [param path] and reads its file index. */
        open(path: string): GodotError
        /** Closes the underlying resources used by this instance. */
        close(): GodotError
        /** Returns the list of names of all files in the loaded archive.
         *  Must be called after [method open].
         */
        get_files(): PackedStringArray
        /** Loads the whole content of a file in the loaded zip archive into memory and returns it.
         *  Must be called after [method open].
         */
        read_file(path: string, case_sensitive: boolean = true): PackedByteArray
        /** Returns [code]true[/code] if the file exists in the loaded zip archive.
         *  Must be called after [method open].
         */
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
