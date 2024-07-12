// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    namespace XRInterface {
        enum Capabilities {
            /** No XR capabilities. */
            XR_NONE = 0,
            
            /** This interface can work with normal rendering output (non-HMD based AR). */
            XR_MONO = 1,
            
            /** This interface supports stereoscopic rendering. */
            XR_STEREO = 2,
            
            /** This interface supports quad rendering (not yet supported by Godot). */
            XR_QUAD = 4,
            
            /** This interface supports VR. */
            XR_VR = 8,
            
            /** This interface supports AR (video background and real world tracking). */
            XR_AR = 16,
            
            /** This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of [method get_render_target_size]). Using a separate viewport node frees up the main viewport for other purposes. */
            XR_EXTERNAL = 32,
        }
        enum TrackingStatus {
            /** Tracking is behaving as expected. */
            XR_NORMAL_TRACKING = 0,
            
            /** Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up). */
            XR_EXCESSIVE_MOTION = 1,
            
            /** Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc. */
            XR_INSUFFICIENT_FEATURES = 2,
            
            /** We don't know the status of the tracking or this interface does not provide feedback. */
            XR_UNKNOWN_TRACKING = 3,
            
            /** Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.). */
            XR_NOT_TRACKING = 4,
        }
        enum PlayAreaMode {
            /** Play area mode not set or not available. */
            XR_PLAY_AREA_UNKNOWN = 0,
            
            /** Play area only supports orientation tracking, no positional tracking, area will center around player. */
            XR_PLAY_AREA_3DOF = 1,
            
            /** Player is in seated position, limited positional tracking, fixed guardian around player. */
            XR_PLAY_AREA_SITTING = 2,
            
            /** Player is free to move around, full positional tracking. */
            XR_PLAY_AREA_ROOMSCALE = 3,
            
            /** Same as [constant XR_PLAY_AREA_ROOMSCALE] but origin point is fixed to the center of the physical space, [method XRServer.center_on_hmd] disabled. */
            XR_PLAY_AREA_STAGE = 4,
        }
        enum EnvironmentBlendMode {
            /** Opaque blend mode. This is typically used for VR devices. */
            XR_ENV_BLEND_MODE_OPAQUE = 0,
            
            /** Additive blend mode. This is typically used for AR devices or VR devices with passthrough. */
            XR_ENV_BLEND_MODE_ADDITIVE = 1,
            
            /** Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode. */
            XR_ENV_BLEND_MODE_ALPHA_BLEND = 2,
        }
    }
    /** Base class for an XR interface implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrinterface.html  
     */
    class XRInterface extends RefCounted {
        constructor(identifier?: any)
        /** Returns the name of this interface (OpenXR, OpenVR, OpenHMD, ARKit, etc). */
        get_name(): StringName
        
        /** Returns a combination of [enum Capabilities] flags providing information about the capabilities of this interface. */
        get_capabilities(): number /*i64*/
        is_primary(): boolean
        set_primary(primary: boolean): void
        
        /** Is `true` if this interface has been initialized. */
        is_initialized(): boolean
        
        /** Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.  
         *  After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.  
         *      
         *  **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.  
         *  If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.  
         *  While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.  
         */
        initialize(): boolean
        
        /** Turns the interface off. */
        uninitialize(): void
        
        /** Returns a [Dictionary] with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.  
         *      
         *  **Note:**This information may only be available after [method initialize] was successfully called.  
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
        
        /** Sets the active play area mode, will return `false` if the mode can't be used with this interface. */
        set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns an array of vectors that denotes the physical play area mapped to the virtual space around the [XROrigin3D] point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available. */
        get_play_area(): PackedVector3Array
        get_anchor_detection_is_enabled(): boolean
        set_anchor_detection_is_enabled(enable: boolean): void
        
        /** If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [CameraServer] for this interface. */
        get_camera_feed_id(): number /*i64*/
        
        /** Is `true` if this interface supports passthrough. */
        is_passthrough_supported(): boolean
        
        /** Is `true` if passthrough is enabled. */
        is_passthrough_enabled(): boolean
        
        /** Starts passthrough, will return `false` if passthrough couldn't be started.  
         *      
         *  **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.  
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
         *      
         *  **Note:** Not all runtimes support all environment blend modes, so it is important to check this at startup. For example:  
         *    
         */
        set_environment_blend_mode(mode: XRInterface.EnvironmentBlendMode): boolean
        get_environment_blend_mode(): XRInterface.EnvironmentBlendMode
        
        /** `true` if this is the primary interface. */
        get interface_is_primary(): boolean
        set interface_is_primary(value: boolean)
        
        /** The play area mode for this interface. */
        get xr_play_area_mode(): number /*i64*/
        set xr_play_area_mode(value: number /*i64*/)
        
        /** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
        get environment_blend_mode(): number /*i64*/
        set environment_blend_mode(value: number /*i64*/)
        
        /** On an AR interface, `true` if anchor detection is enabled. */
        get ar_is_anchor_detection_enabled(): boolean
        set ar_is_anchor_detection_enabled(value: boolean)
        
        /** Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation. */
        readonly play_area_changed: Signal // mode: number /*i64*/ => void
    }
    /** Base class for XR interface extensions (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrinterfaceextension.html  
     */
    class XRInterfaceExtension extends XRInterface {
        constructor(identifier?: any)
        /** Returns the name of this interface. */
        /* gdvirtual */ _get_name(): StringName
        
        /** Returns the capabilities of this interface. */
        /* gdvirtual */ _get_capabilities(): number /*i64*/
        
        /** Returns `true` if this interface has been initialized. */
        /* gdvirtual */ _is_initialized(): boolean
        
        /** Initializes the interface, returns `true` on success. */
        /* gdvirtual */ _initialize(): boolean
        
        /** Uninitialize the interface. */
        /* gdvirtual */ _uninitialize(): void
        
        /** Returns a [Dictionary] with system information related to this interface. */
        /* gdvirtual */ _get_system_info(): Dictionary
        
        /** Returns `true` if this interface supports this play area mode. */
        /* gdvirtual */ _supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns the [enum XRInterface.PlayAreaMode] that sets up our play area. */
        /* gdvirtual */ _get_play_area_mode(): XRInterface.PlayAreaMode
        
        /** Set the play area mode for this interface. */
        /* gdvirtual */ _set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns an [PackedVector3Array] that denotes the play areas boundaries (if applicable). */
        /* gdvirtual */ _get_play_area(): PackedVector3Array
        
        /** Returns the size of our render target for this interface, this overrides the size of the [Viewport] marked as the xr viewport. */
        /* gdvirtual */ _get_render_target_size(): Vector2
        
        /** Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic. */
        /* gdvirtual */ _get_view_count(): number /*i64*/
        
        /** Returns the [Transform3D] that positions the [XRCamera3D] in the world. */
        /* gdvirtual */ _get_camera_transform(): Transform3D
        
        /** Returns a [Transform3D] for a given view. */
        /* gdvirtual */ _get_transform_for_view(view: number /*i64*/, cam_transform: Transform3D): Transform3D
        
        /** Returns the projection matrix for the given view as a [PackedFloat64Array]. */
        /* gdvirtual */ _get_projection_for_view(view: number /*i64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): PackedFloat64Array
        /* gdvirtual */ _get_vrs_texture(): RID
        
        /** Called if this [XRInterfaceExtension] is active before our physics and game process is called. Most XR interfaces will update its [XRPositionalTracker]s at this point in time. */
        /* gdvirtual */ _process(): void
        
        /** Called if this [XRInterfaceExtension] is active before rendering starts. Most XR interfaces will sync tracking at this point in time. */
        /* gdvirtual */ _pre_render(): void
        
        /** Called if this is our primary [XRInterfaceExtension] before we start processing a [Viewport] for every active XR [Viewport], returns `true` if that viewport should be rendered. An XR interface may return `false` if the user has taken off their headset and we can pause rendering. */
        /* gdvirtual */ _pre_draw_viewport(render_target: RID): boolean
        
        /** Called after the XR [Viewport] draw logic has completed. */
        /* gdvirtual */ _post_draw_viewport(render_target: RID, screen_rect: Rect2): void
        
        /** Called if interface is active and queues have been submitted. */
        /* gdvirtual */ _end_frame(): void
        
        /** Returns a [PackedStringArray] with tracker names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _get_suggested_tracker_names(): PackedStringArray
        
        /** Returns a [PackedStringArray] with pose names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _get_suggested_pose_names(tracker_name: StringName): PackedStringArray
        
        /** Returns a [enum XRInterface.TrackingStatus] specifying the current status of our tracking. */
        /* gdvirtual */ _get_tracking_status(): XRInterface.TrackingStatus
        
        /** Triggers a haptic pulse to be emitted on the specified tracker. */
        /* gdvirtual */ _trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        
        /** Return `true` if anchor detection is enabled for this interface. */
        /* gdvirtual */ _get_anchor_detection_is_enabled(): boolean
        
        /** Enables anchor detection on this interface if supported. */
        /* gdvirtual */ _set_anchor_detection_is_enabled(enabled: boolean): void
        
        /** Returns the camera feed ID for the [CameraFeed] registered with the [CameraServer] that should be presented as the background on an AR capable device (if applicable). */
        /* gdvirtual */ _get_camera_feed_id(): number /*i64*/
        
        /** Return color texture into which to render (if applicable). */
        /* gdvirtual */ _get_color_texture(): RID
        
        /** Return depth texture into which to render (if applicable). */
        /* gdvirtual */ _get_depth_texture(): RID
        
        /** Return velocity texture into which to render (if applicable). */
        /* gdvirtual */ _get_velocity_texture(): RID
        get_color_texture(): RID
        get_depth_texture(): RID
        get_velocity_texture(): RID
        
        /** Blits our render results to screen optionally applying lens distortion. This can only be called while processing `_commit_views`. */
        add_blit(render_target: RID, src_rect: Rect2, dst_rect: Rect2i, use_layer: boolean, layer: number /*i64*/, apply_lens_distortion: boolean, eye_center: Vector2, k1: number /*f64*/, k2: number /*f64*/, upscale: number /*f64*/, aspect_ratio: number /*f64*/): void
        
        /** Returns a valid [RID] for a texture to which we should render the current frame if supported by the interface. */
        get_render_target_texture(render_target: RID): RID
    }
    /** A spatial node that has its position automatically updated by the [XRServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrnode3d.html  
     */
    class XRNode3D extends Node3D {
        constructor(identifier?: any)
        set_tracker(tracker_name: StringName): void
        get_tracker(): StringName
        set_pose_name(pose: StringName): void
        get_pose_name(): StringName
        
        /** Returns `true` if the [member tracker] has been registered and the [member pose] is being tracked. */
        get_is_active(): boolean
        
        /** Returns `true` if the [member tracker] has current tracking data for the [member pose] being tracked. */
        get_has_tracking_data(): boolean
        
        /** Returns the [XRPose] containing the current state of the pose being tracked. This gives access to additional properties of this pose. */
        get_pose(): XRPose
        
        /** Triggers a haptic pulse on a device associated with this interface.  
         *  [param action_name] is the name of the action for this pulse.  
         */
        trigger_haptic_pulse(action_name: string, frequency: number /*f64*/, amplitude: number /*f64*/, duration_sec: number /*f64*/, delay_sec: number /*f64*/): void
        
        /** The name of the tracker we're bound to. Which trackers are available is not known during design time.  
         *  Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [XRInterface].  
         */
        get tracker(): string
        set tracker(value: string)
        
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.  
         *  Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].  
         */
        get pose(): string
        set pose(value: string)
        
        /** Emitted when the [member tracker] starts or stops receiving updated tracking data for the [member pose] being tracked. The [param tracking] argument indicates whether the tracker is getting updated tracking data. */
        readonly tracking_changed: Signal // tracking: boolean => void
    }
    /** The origin point in AR/VR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrorigin3d.html  
     */
    class XROrigin3D extends Node3D {
        constructor(identifier?: any)
        set_world_scale(world_scale: number /*f64*/): void
        get_world_scale(): number /*f64*/
        set_current(enabled: boolean): void
        is_current(): boolean
        
        /** The scale of the game world compared to the real world. This is the same as [member XRServer.world_scale]. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        get world_scale(): number /*f64*/
        set world_scale(value: number /*f64*/)
        
        /** If `true`, this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        get current(): boolean
        set current(value: boolean)
    }
    namespace XRPose {
        enum TrackingConfidence {
            /** No tracking information is available for this pose. */
            XR_TRACKING_CONFIDENCE_NONE = 0,
            
            /** Tracking information may be inaccurate or estimated. For example, with inside out tracking this would indicate a controller may be (partially) obscured. */
            XR_TRACKING_CONFIDENCE_LOW = 1,
            
            /** Tracking information is deemed accurate and up to date. */
            XR_TRACKING_CONFIDENCE_HIGH = 2,
        }
    }
    /** This object contains all data related to a pose on a tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrpose.html  
     */
    class XRPose extends RefCounted {
        constructor(identifier?: any)
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
        
        /** If `true` our tracking data is up to date. If `false` we're no longer receiving new tracking data and our state is whatever that last valid state was. */
        get has_tracking_data(): boolean
        set has_tracking_data(value: boolean)
        
        /** The transform containing the original and transform as reported by the XR runtime. */
        get transform(): string
        set transform(value: string)
        
        /** The linear velocity of this pose. */
        get linear_velocity(): string
        set linear_velocity(value: string)
        
        /** The angular velocity for this pose. */
        get angular_velocity(): string
        set angular_velocity(value: string)
        
        /** The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is. */
        get tracking_confidence(): number /*i64*/
        set tracking_confidence(value: number /*i64*/)
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            /** The hand this tracker is held in is unknown or not applicable. */
            TRACKER_HAND_UNKNOWN = 0,
            
            /** This tracker is the left hand controller. */
            TRACKER_HAND_LEFT = 1,
            
            /** This tracker is the right hand controller. */
            TRACKER_HAND_RIGHT = 2,
        }
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrpositionaltracker.html  
     */
    class XRPositionalTracker extends RefCounted {
        constructor(identifier?: any)
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
        
        /** Returns `true` if the tracker is available and is currently tracking the bound [param name] pose. */
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
        get type(): number /*i64*/
        set type(value: number /*i64*/)
        
        /** The description of this tracker. */
        get description(): string
        set description(value: string)
        
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        get profile(): string
        set profile(value: string)
        
        /** Defines which hand this tracker relates to. */
        get hand(): number /*i64*/
        set hand(value: number /*i64*/)
        
        /** Emitted when the state of a pose tracked by this tracker changes. */
        readonly pose_changed: Signal // pose: XRPose => void
        
        /** Emitted when a pose tracked by this tracker stops getting updated tracking data. */
        readonly pose_lost_tracking: Signal // pose: XRPose => void
        
        /** Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons. */
        readonly button_pressed: Signal // name: string => void
        
        /** Emitted when a button on this tracker is released. */
        readonly button_released: Signal // name: string => void
        
        /** Emitted when a trigger or similar input on this tracker changes value. */
        readonly input_float_changed: Signal // name: string, value: number /*f64*/ => void
        
        /** Emitted when a thumbstick or thumbpad on this tracker moves. */
        readonly input_vector2_changed: Signal // name: string, vector: Vector2 => void
        
        /** Emitted when the profile of our tracker changes. */
        readonly profile_changed: Signal // role: string => void
    }
    namespace ZIPPacker {
        enum ZipAppend {
            /** Create a new zip archive at the given path. */
            APPEND_CREATE = 0,
            
            /** Append a new zip archive to the end of the already existing file at the given path. */
            APPEND_CREATEAFTER = 1,
            
            /** Add new files to the existing zip archive at the given path. */
            APPEND_ADDINZIP = 2,
        }
    }
    /** Allows the creation of zip files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_zippacker.html  
     */
    class ZIPPacker extends RefCounted {
        constructor(identifier?: any)
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
    /** Allows reading the content of a zip file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_zipreader.html  
     */
    class ZIPReader extends RefCounted {
        constructor(identifier?: any)
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
        
        /** Returns `true` if the file exists in the loaded zip archive.  
         *  Must be called after [method open].  
         */
        file_exists(path: string, case_sensitive: boolean = true): boolean
    }
    namespace Vector2 {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
        }
    }
    /** A 2D vector using floating point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector2.html  
     */
    class Vector2 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector2
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector2
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector2
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Vector2
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Vector2
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Vector2
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Vector2
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2i)
        constructor(x: number /*f64*/, y: number /*f64*/)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.  
         *  For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/vector2_angle.png]Illustration of the returned angle.[/url]  
         *  Equivalent to the result of [method @GlobalScope.atan2] when called with the vector's [member y] and [member x] as parameters: `atan2(y, x)`.  
         */
        angle(): number /*f64*/
        
        /** Returns the angle to the given vector, in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/vector2_angle_to.png]Illustration of the returned angle.[/url]  
         */
        angle_to(to: Vector2): number /*f64*/
        
        /** Returns the angle between the line connecting the two points and the X axis, in radians.  
         *  `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/vector2_angle_to_point.png]Illustration of the returned angle.[/url]  
         */
        angle_to_point(to: Vector2): number /*f64*/
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        direction_to(to: Vector2): Vector2
        
        /** Returns the distance between this vector and [param to]. */
        distance_to(to: Vector2): number /*f64*/
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distance_squared_to(to: Vector2): number /*f64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*f64*/
        
        /** Returns the vector with a maximum length by limiting its length to [param length]. */
        limit_length(length: number /*f64*/ = 1): Vector2
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector2
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        is_normalized(): boolean
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Vector2): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        is_zero_approx(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: number /*f64*/): Vector2
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector2): Vector2
        
        /** Returns the result of projecting the vector onto the given vector [param b]. */
        project(b: Vector2): Vector2
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector2, weight: number /*f64*/): Vector2
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector2, weight: number /*f64*/): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubic_interpolate(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubic_interpolate_in_time(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector2
        
        /** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_interpolate(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        
        /** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_derivative(control_1: Vector2, control_2: Vector2, end: Vector2, t: number /*f64*/): Vector2
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Y]. */
        min_axis_index(): number /*i64*/
        
        /** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
        move_toward(to: Vector2, delta: number /*f64*/): Vector2
        
        /** Returns the result of rotating this vector by [param angle] (in radians). See also [method @GlobalScope.deg_to_rad]. */
        rotated(angle: number /*f64*/): Vector2
        
        /** Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length. */
        orthogonal(): Vector2
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector2
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector2
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector2
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): number /*f64*/
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a straight angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector2): number /*f64*/
        
        /** Returns the result of sliding the vector along a plane defined by the given normal. */
        slide(n: Vector2): Vector2
        
        /** Returns a new vector "bounced off" from a plane defined by the given normal. */
        bounce(n: Vector2): Vector2
        
        /** Returns the result of reflecting the vector from a line defined by the given direction vector [param n]. */
        reflect(n: Vector2): Vector2
        
        /** Returns the 2D analog of the cross product for this vector and [param with].  
         *  This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.  
         *      
         *  **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.  
         */
        cross(with_: Vector2): number /*f64*/
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2, max: Vector2): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector2): Vector2
        
        /** Creates a unit [Vector2] rotated to the given [param angle] in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.  
         *    
         */
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
        get x(): number /*f64*/
        set x(value: number /*f64*/)
        get y(): number /*f64*/
        set y(value: number /*f64*/)
    }
    namespace Vector2i {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
        }
    }
    /** A 2D vector using integer coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector2i.html  
     */
    class Vector2i {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector2i
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector2i
        
        /** Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector2.INF]. */
        static readonly MIN: Vector2i
        
        /** Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector2.INF]. */
        static readonly MAX: Vector2i
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Vector2i
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Vector2i
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Vector2i
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Vector2i
        constructor()
        constructor(from: Vector2i)
        constructor(from: Vector2)
        constructor(x: number /*i64*/, y: number /*i64*/)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): number /*f64*/
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Y]. */
        min_axis_index(): number /*i64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*i64*/
        
        /** Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2i
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2i
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2i, max: Vector2i): Vector2i
        
        /** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
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
        get x(): number /*i64*/
        set x(value: number /*i64*/)
        get y(): number /*i64*/
        set y(value: number /*i64*/)
    }
    /** A 2D axis-aligned bounding box using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rect2.html  
     */
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2i)
        constructor(position: Vector2, size: Vector2)
        constructor(x: number /*f64*/, y: number /*f64*/, width: number /*f64*/, height: number /*f64*/)
        
        /** Returns the center point of the rectangle. This is the same as `position + (size / 2.0)`. */
        get_center(): Vector2
        
        /** Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also [method has_area]. */
        get_area(): number /*f64*/
        
        /** Returns `true` if this rectangle has positive width and height. See also [method get_area]. */
        has_area(): boolean
        
        /** Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.  
         *      
         *  **Note:** This method is not reliable for [Rect2] with a  *negative*  [member size]. Use [method abs] first to get a valid rectangle.  
         */
        has_point(point: Vector2): boolean
        
        /** Returns `true` if this rectangle and [param rect] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        is_equal_approx(rect: Rect2): boolean
        
        /** Returns `true` if this rectangle's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        is_finite(): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is `true`. */
        intersects(b: Rect2, include_borders: boolean = false): boolean
        
        /** Returns `true` if this rectangle  *completely*  encloses the [param b] rectangle. */
        encloses(b: Rect2): boolean
        
        /** Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2].  
         *    
         *      
         *  **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.  
         */
        intersection(b: Rect2): Rect2
        
        /** Returns a [Rect2] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
        merge(b: Rect2): Rect2
        
        /** Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.  
         *    
         */
        expand(to: Vector2): Rect2
        
        /** Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].  
         *    
         */
        grow(amount: number /*f64*/): Rect2
        
        /** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
        grow_side(side: number /*i64*/, amount: number /*f64*/): Rect2
        
        /** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
        grow_individual(left: number /*f64*/, top: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/): Rect2
        
        /** Returns a [Rect2] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.  
         */
        abs(): Rect2
        get position(): Vector2
        set position(value: Vector2)
        get size(): Vector2
        set size(value: Vector2)
        get end(): Vector2
        set end(value: Vector2)
    }
    /** A 2D axis-aligned bounding box using integer coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rect2i.html  
     */
    class Rect2i {
        constructor()
        constructor(from: Rect2i)
        constructor(from: Rect2)
        constructor(position: Vector2i, size: Vector2i)
        constructor(x: number /*i64*/, y: number /*i64*/, width: number /*i64*/, height: number /*i64*/)
        
        /** Returns the center point of the rectangle. This is the same as `position + (size / 2)`.  
         *      
         *  **Note:** If the [member size] is odd, the result will be rounded towards [member position].  
         */
        get_center(): Vector2i
        
        /** Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also [method has_area]. */
        get_area(): number /*i64*/
        
        /** Returns `true` if this rectangle has positive width and height. See also [method get_area]. */
        has_area(): boolean
        
        /** Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.  
         *      
         *  **Note:** This method is not reliable for [Rect2i] with a  *negative*  [member size]. Use [method abs] first to get a valid rectangle.  
         */
        has_point(point: Vector2i): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded. */
        intersects(b: Rect2i): boolean
        
        /** Returns `true` if this [Rect2i] completely encloses another one. */
        encloses(b: Rect2i): boolean
        
        /** Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2i].  
         *    
         *      
         *  **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.  
         */
        intersection(b: Rect2i): Rect2i
        
        /** Returns a [Rect2i] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
        merge(b: Rect2i): Rect2i
        
        /** Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.  
         *    
         */
        expand(to: Vector2i): Rect2i
        
        /** Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].  
         *    
         */
        grow(amount: number /*i64*/): Rect2i
        
        /** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
        grow_side(side: number /*i64*/, amount: number /*i64*/): Rect2i
        
        /** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
        grow_individual(left: number /*i64*/, top: number /*i64*/, right: number /*i64*/, bottom: number /*i64*/): Rect2i
        
        /** Returns a [Rect2i] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.  
         */
        abs(): Rect2i
        get position(): Vector2i
        set position(value: Vector2i)
        get size(): Vector2i
        set size(value: Vector2i)
        get end(): Vector2i
        set end(value: Vector2i)
    }
    namespace Vector3 {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
            
            /** Enumerated value for the Z axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Z = 2,
        }
    }
    /** A 3D vector using floating point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector3.html  
     */
    class Vector3 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector3
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector3
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector3
        
        /** Left unit vector. Represents the local direction of left, and the global direction of west. */
        static readonly LEFT: Vector3
        
        /** Right unit vector. Represents the local direction of right, and the global direction of east. */
        static readonly RIGHT: Vector3
        
        /** Up unit vector. */
        static readonly UP: Vector3
        
        /** Down unit vector. */
        static readonly DOWN: Vector3
        
        /** Forward unit vector. Represents the local direction of forward, and the global direction of north. Keep in mind that the forward direction for lights, cameras, etc is different from 3D assets like characters, which face towards the camera by convention. Use [constant Vector3.MODEL_FRONT] and similar constants when working in 3D asset space. */
        static readonly FORWARD: Vector3
        
        /** Back unit vector. Represents the local direction of back, and the global direction of south. */
        static readonly BACK: Vector3
        
        /** Unit vector pointing towards the left side of imported 3D assets. */
        static readonly MODEL_LEFT: Vector3
        
        /** Unit vector pointing towards the right side of imported 3D assets. */
        static readonly MODEL_RIGHT: Vector3
        
        /** Unit vector pointing towards the top side (up) of imported 3D assets. */
        static readonly MODEL_TOP: Vector3
        
        /** Unit vector pointing towards the bottom side (down) of imported 3D assets. */
        static readonly MODEL_BOTTOM: Vector3
        
        /** Unit vector pointing towards the front side (facing forward) of imported 3D assets. */
        static readonly MODEL_FRONT: Vector3
        
        /** Unit vector pointing towards the rear side (back) of imported 3D assets. */
        static readonly MODEL_REAR: Vector3
        constructor()
        constructor(from: Vector3)
        constructor(from: Vector3i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Z]. */
        min_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the unsigned minimum angle to the given vector, in radians. */
        angle_to(to: Vector3): number /*f64*/
        
        /** Returns the signed angle to the given vector, in radians. The sign of the angle is positive in a counter-clockwise direction and negative in a clockwise direction when viewed from the side specified by the [param axis]. */
        signed_angle_to(to: Vector3, axis: Vector3): number /*f64*/
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        direction_to(to: Vector3): Vector3
        
        /** Returns the distance between this vector and [param to]. */
        distance_to(to: Vector3): number /*f64*/
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distance_squared_to(to: Vector3): number /*f64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*f64*/
        
        /** Returns the vector with a maximum length by limiting its length to [param length]. */
        limit_length(length: number /*f64*/ = 1): Vector3
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector3
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        is_normalized(): boolean
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Vector3): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        is_zero_approx(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns the inverse of the vector. This is the same as `Vector3(1.0 / v.x, 1.0 / v.y, 1.0 / v.z)`. */
        inverse(): Vector3
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector3, max: Vector3): Vector3
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector3): Vector3
        
        /** Returns the result of rotating this vector around a given axis by [param angle] (in radians). The axis must be a normalized vector. See also [method @GlobalScope.deg_to_rad]. */
        rotated(axis: Vector3, angle: number /*f64*/): Vector3
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector3, weight: number /*f64*/): Vector3
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector3, weight: number /*f64*/): Vector3
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubic_interpolate(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/): Vector3
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubic_interpolate_in_time(b: Vector3, pre_a: Vector3, post_b: Vector3, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector3
        
        /** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_interpolate(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        
        /** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_derivative(control_1: Vector3, control_2: Vector3, end: Vector3, t: number /*f64*/): Vector3
        
        /** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
        move_toward(to: Vector3, delta: number /*f64*/): Vector3
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a straight angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector3): number /*f64*/
        
        /** Returns the cross product of this vector and [param with].  
         *  This returns a vector perpendicular to both this and [param with], which would be the normal vector of the plane defined by the two vectors. As there are two such vectors, in opposite directions, this method returns the vector defined by a right-handed coordinate system. If the two vectors are parallel this returns an empty vector, making it useful for testing if two vectors are parallel.  
         */
        cross(with_: Vector3): Vector3
        
        /** Returns the outer product with [param with]. */
        outer(with_: Vector3): Basis
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector3
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector3
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector3
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: number /*f64*/): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector3): Vector3
        
        /** Returns the result of projecting the vector onto the given vector [param b]. */
        project(b: Vector3): Vector3
        
        /** Returns a new vector slid along a plane defined by the given normal. */
        slide(n: Vector3): Vector3
        
        /** Returns the vector "bounced off" from a plane defined by the given normal. */
        bounce(n: Vector3): Vector3
        
        /** Returns the result of reflecting the vector from a plane defined by the given normal [param n]. */
        reflect(n: Vector3): Vector3
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector3
        
        /** Returns the octahedral-encoded (oct32) form of this [Vector3] as a [Vector2]. Since a [Vector2] occupies 1/3 less memory compared to [Vector3], this form of compression can be used to pass greater amounts of [method normalized] [Vector3]s without increasing storage or memory requirements. See also [method octahedron_decode].  
         *      
         *  **Note:** [method octahedron_encode] can only be used for [method normalized] vectors. [method octahedron_encode] does  *not*  check whether this [Vector3] is normalized, and will return a value that does not decompress to the original value if the [Vector3] is not normalized.  
         *      
         *  **Note:** Octahedral compression is  *lossy* , although visual differences are rarely perceptible in real world scenarios.  
         */
        octahedron_encode(): Vector2
        
        /** Returns the [Vector3] from an octahedral-compressed form created using [method octahedron_encode] (stored as a [Vector2]). */
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
        get x(): number /*f64*/
        set x(value: number /*f64*/)
        get y(): number /*f64*/
        set y(value: number /*f64*/)
        get z(): number /*f64*/
        set z(value: number /*f64*/)
    }
    namespace Vector3i {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
            
            /** Enumerated value for the Z axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Z = 2,
        }
    }
    /** A 3D vector using integer coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector3i.html  
     */
    class Vector3i {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector3i
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector3i
        
        /** Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector3.INF]. */
        static readonly MIN: Vector3i
        
        /** Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector3.INF]. */
        static readonly MAX: Vector3i
        
        /** Left unit vector. Represents the local direction of left, and the global direction of west. */
        static readonly LEFT: Vector3i
        
        /** Right unit vector. Represents the local direction of right, and the global direction of east. */
        static readonly RIGHT: Vector3i
        
        /** Up unit vector. */
        static readonly UP: Vector3i
        
        /** Down unit vector. */
        static readonly DOWN: Vector3i
        
        /** Forward unit vector. Represents the local direction of forward, and the global direction of north. */
        static readonly FORWARD: Vector3i
        
        /** Back unit vector. Represents the local direction of back, and the global direction of south. */
        static readonly BACK: Vector3i
        constructor()
        constructor(from: Vector3i)
        constructor(from: Vector3)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Z]. */
        min_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*i64*/
        
        /** Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector3i
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector3i
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector3i, max: Vector3i): Vector3i
        
        /** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
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
        get x(): number /*i64*/
        set x(value: number /*i64*/)
        get y(): number /*i64*/
        set y(value: number /*i64*/)
        get z(): number /*i64*/
        set z(value: number /*i64*/)
    }
    /** A 2×3 matrix representing a 2D transformation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_transform2d.html  
     */
    class Transform2D {
        /** The identity [Transform2D] with no translation, rotation or scaling applied. When applied to other data structures, [constant IDENTITY] performs no transformation. */
        static readonly IDENTITY: Transform2D
        
        /** The [Transform2D] that will flip something along the X axis. */
        static readonly FLIP_X: Transform2D
        
        /** The [Transform2D] that will flip something along the Y axis. */
        static readonly FLIP_Y: Transform2D
        constructor()
        constructor(from: Transform2D)
        constructor(rotation: number /*f64*/, position: Vector2)
        constructor(rotation: number /*f64*/, scale: Vector2, skew: number /*f64*/, position: Vector2)
        constructor(x_axis: Vector2, y_axis: Vector2, origin: Vector2)
        set_indexed(index: number, value: Vector2)
        get_indexed(index: number): Vector2
        
        /** Returns the inverse of the transform, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not). Use [method affine_inverse] for non-orthonormal transforms (e.g. with scaling). */
        inverse(): Transform2D
        
        /** Returns the inverse of the transform, under the assumption that the basis is invertible (must have non-zero determinant). */
        affine_inverse(): Transform2D
        
        /** Returns the transform's rotation (in radians). */
        get_rotation(): number /*f64*/
        
        /** Returns the transform's origin (translation). */
        get_origin(): Vector2
        
        /** Returns the scale. */
        get_scale(): Vector2
        
        /** Returns the transform's skew (in radians). */
        get_skew(): number /*f64*/
        
        /** Returns the transform with the basis orthogonal (90 degrees), and normalized axis vectors (scale of 1 or -1). */
        orthonormalized(): Transform2D
        
        /** Returns a copy of the transform rotated by the given [param angle] (in radians).  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        rotated(angle: number /*f64*/): Transform2D
        
        /** Returns a copy of the transform rotated by the given [param angle] (in radians).  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        rotated_local(angle: number /*f64*/): Transform2D
        
        /** Returns a copy of the transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        scaled(scale: Vector2): Transform2D
        
        /** Returns a copy of the transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        scaled_local(scale: Vector2): Transform2D
        
        /** Returns a copy of the transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        translated(offset: Vector2): Transform2D
        
        /** Returns a copy of the transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        translated_local(offset: Vector2): Transform2D
        
        /** Returns the determinant of the basis matrix. If the basis is uniformly scaled, then its determinant equals the square of the scale factor.  
         *  A negative determinant means the basis was flipped, so one part of the scale is negative. A zero determinant means the basis isn't invertible, and is usually considered invalid.  
         */
        determinant(): number /*f64*/
        
        /** Returns a vector transformed (multiplied) by the basis matrix.  
         *  This method does not account for translation (the [member origin] vector).  
         */
        basis_xform(v: Vector2): Vector2
        
        /** Returns a vector transformed (multiplied) by the inverse basis matrix, under the assumption that the basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).  
         *  This method does not account for translation (the [member origin] vector).  
         *  `transform.basis_xform_inv(vector)` is equivalent to `transform.inverse().basis_xform(vector)`. See [method inverse].  
         *  For non-orthonormal transforms (e.g. with scaling) `transform.affine_inverse().basis_xform(vector)` can be used instead. See [method affine_inverse].  
         */
        basis_xform_inv(v: Vector2): Vector2
        
        /** Returns a transform interpolated between this transform and another by a given [param weight] (on the range of 0.0 to 1.0). */
        interpolate_with(xform: Transform2D, weight: number /*f64*/): Transform2D
        
        /** Returns `true` if the transform's basis is conformal, meaning it preserves angles and distance ratios, and may only be composed of rotation and uniform scale. Returns `false` if the transform's basis has non-uniform scale or shear/skew. This can be used to validate if the transform is non-distorted, which is important for physics and other use cases. */
        is_conformal(): boolean
        
        /** Returns `true` if this transform and [param xform] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(xform: Transform2D): boolean
        
        /** Returns `true` if this transform is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns a copy of the transform rotated such that the rotated X-axis points towards the [param target] position.  
         *  Operations take place in global space.  
         */
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
        get x(): Vector2
        set x(value: Vector2)
        get y(): Vector2
        set y(value: Vector2)
        get origin(): Vector2
        set origin(value: Vector2)
    }
    namespace Vector4 {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
            
            /** Enumerated value for the Z axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Z = 2,
            
            /** Enumerated value for the W axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_W = 3,
        }
    }
    /** A 4D vector using floating point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector4.html  
     */
    class Vector4 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector4
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector4
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector4
        constructor()
        constructor(from: Vector4)
        constructor(from: Vector4i)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_W]. */
        min_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*f64*/
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector4
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector4
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector4
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector4
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector4
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector4, weight: number /*f64*/): Vector4
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubic_interpolate(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/): Vector4
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubic_interpolate_in_time(b: Vector4, pre_a: Vector4, post_b: Vector4, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: number /*f64*/): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector4): Vector4
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector4): Vector4
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector4, max: Vector4): Vector4
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector4
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        is_normalized(): boolean
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        direction_to(to: Vector4): Vector4
        
        /** Returns the distance between this vector and [param to]. */
        distance_to(to: Vector4): number /*f64*/
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distance_squared_to(to: Vector4): number /*f64*/
        
        /** Returns the dot product of this vector and [param with]. */
        dot(with_: Vector4): number /*f64*/
        
        /** Returns the inverse of the vector. This is the same as `Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)`. */
        inverse(): Vector4
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Vector4): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        is_zero_approx(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
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
        get x(): number /*f64*/
        set x(value: number /*f64*/)
        get y(): number /*f64*/
        set y(value: number /*f64*/)
        get z(): number /*f64*/
        set z(value: number /*f64*/)
        get w(): number /*f64*/
        set w(value: number /*f64*/)
    }
    namespace Vector4i {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
            
            /** Enumerated value for the Z axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Z = 2,
            
            /** Enumerated value for the W axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_W = 3,
        }
    }
    /** A 4D vector using integer coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vector4i.html  
     */
    class Vector4i {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector4i
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector4i
        
        /** Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector4.INF]. */
        static readonly MIN: Vector4i
        
        /** Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector4.INF]. */
        static readonly MAX: Vector4i
        constructor()
        constructor(from: Vector4i)
        constructor(from: Vector4)
        constructor(x: number /*i64*/, y: number /*i64*/, z: number /*i64*/, w: number /*i64*/)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_W]. */
        min_axis_index(): number /*i64*/
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): number /*i64*/
        
        /** Returns the length (magnitude) of this vector. */
        length(): number /*f64*/
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): number /*i64*/
        
        /** Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector4i
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector4i
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector4i, max: Vector4i): Vector4i
        
        /** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
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
        get x(): number /*i64*/
        set x(value: number /*i64*/)
        get y(): number /*i64*/
        set y(value: number /*i64*/)
        get z(): number /*i64*/
        set z(value: number /*i64*/)
        get w(): number /*i64*/
        set w(value: number /*i64*/)
    }
    /** A plane in Hessian normal form.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_plane.html  
     */
    class Plane {
        /** A plane that extends in the Y and Z axes (normal vector points +X). */
        static readonly PLANE_YZ: Plane
        
        /** A plane that extends in the X and Z axes (normal vector points +Y). */
        static readonly PLANE_XZ: Plane
        
        /** A plane that extends in the X and Y axes (normal vector points +Z). */
        static readonly PLANE_XY: Plane
        constructor()
        constructor(from: Plane)
        constructor(normal: Vector3)
        constructor(normal: Vector3, d: number /*f64*/)
        constructor(normal: Vector3, point: Vector3)
        constructor(point1: Vector3, point2: Vector3, point3: Vector3)
        constructor(a: number /*f64*/, b: number /*f64*/, c: number /*f64*/, d: number /*f64*/)
        
        /** Returns a copy of the plane, with normalized [member normal] (so it's a unit vector). Returns `Plane(0, 0, 0, 0)` if [member normal] can't be normalized (it has zero length). */
        normalized(): Plane
        
        /** Returns the center of the plane. */
        get_center(): Vector3
        
        /** Returns `true` if this plane and [param to_plane] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to_plane: Plane): boolean
        
        /** Returns `true` if this plane is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns `true` if [param point] is located above the plane. */
        is_point_over(point: Vector3): boolean
        
        /** Returns the shortest distance from the plane to the position [param point]. If the point is above the plane, the distance will be positive. If below, the distance will be negative. */
        distance_to(point: Vector3): number /*f64*/
        
        /** Returns `true` if [param point] is inside the plane. Comparison uses a custom minimum [param tolerance] threshold. */
        has_point(point: Vector3, tolerance: number /*f64*/ = 0.00001): boolean
        
        /** Returns the orthogonal projection of [param point] into a point in the plane. */
        project(point: Vector3): Vector3
        
        /** Returns the intersection point of the three planes [param b], [param c] and this plane. If no intersection is found, `null` is returned. */
        intersect_3(b: Plane, c: Plane): void
        
        /** Returns the intersection point of a ray consisting of the position [param from] and the direction normal [param dir] with this plane. If no intersection is found, `null` is returned. */
        intersects_ray(from: Vector3, dir: Vector3): void
        
        /** Returns the intersection point of a segment from position [param from] to position [param to] with this plane. If no intersection is found, `null` is returned. */
        intersects_segment(from: Vector3, to: Vector3): void
        static NEGATE(left: Plane, right: any): boolean
        static EQUAL(left: Plane, right: Plane): boolean
        static NOT_EQUAL(left: Plane, right: Plane): boolean
        get x(): number /*f64*/
        set x(value: number /*f64*/)
        get y(): number /*f64*/
        set y(value: number /*f64*/)
        get z(): number /*f64*/
        set z(value: number /*f64*/)
        get d(): number /*f64*/
        set d(value: number /*f64*/)
        get normal(): Vector3
        set normal(value: Vector3)
    }
    /** A unit quaternion used for representing 3D rotations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_quaternion.html  
     */
    class Quaternion {
        /** The identity quaternion, representing no rotation. This has the same rotation as [constant Basis.IDENTITY].  
         *  If a [Vector3] is rotated (multiplied) by this quaternion, it does not change.  
         */
        static readonly IDENTITY: Quaternion
        constructor()
        constructor(from: Quaternion)
        constructor(from: Basis)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(arc_from: Vector3, arc_to: Vector3)
        constructor(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/, w: number /*f64*/)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns this quaternion's length, also called magnitude. */
        length(): number /*f64*/
        
        /** Returns this quaternion's length, squared.  
         *      
         *  **Note:** This method is faster than [method length], so prefer it if you only need to compare quaternion lengths.  
         */
        length_squared(): number /*f64*/
        
        /** Returns a copy of this quaternion, normalized so that its length is `1.0`. See also [method is_normalized]. */
        normalized(): Quaternion
        
        /** Returns `true` if this quaternion is normalized. See also [method normalized]. */
        is_normalized(): boolean
        
        /** Returns `true` if this quaternion and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Quaternion): boolean
        
        /** Returns `true` if this quaternion is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns the inverse version of this quaternion, inverting the sign of every component except [member w]. */
        inverse(): Quaternion
        
        /** Returns the logarithm of this quaternion. Multiplies this quaternion's rotation axis by its rotation angle, and stores the result in the returned quaternion's vector part ([member x], [member y], and [member z]). The returned quaternion's real part ([member w]) is always `0.0`. */
        log(): Quaternion
        
        /** Returns the exponential of this quaternion. The rotation axis of the result is the normalized rotation axis of this quaternion, the angle of the result is the length of the vector part of this quaternion. */
        exp(): Quaternion
        
        /** Returns the angle between this quaternion and [param to]. This is the magnitude of the angle you would need to rotate by to get from one to the other.  
         *      
         *  **Note:** The magnitude of the floating-point error for this method is abnormally high, so methods such as `is_zero_approx` will not work reliably.  
         */
        angle_to(to: Quaternion): number /*f64*/
        
        /** Returns the dot product between this quaternion and [param with].  
         *  This is equivalent to `(quat.x * with.x) + (quat.y * with.y) + (quat.z * with.z) + (quat.w * with.w)`.  
         */
        dot(with_: Quaternion): number /*f64*/
        
        /** Performs a spherical-linear interpolation with the [param to] quaternion, given a [param weight] and returns the result. Both this quaternion and [param to] must be normalized. */
        slerp(to: Quaternion, weight: number /*f64*/): Quaternion
        
        /** Performs a spherical-linear interpolation with the [param to] quaternion, given a [param weight] and returns the result. Unlike [method slerp], this method does not check if the rotation path is smaller than 90 degrees. Both this quaternion and [param to] must be normalized. */
        slerpni(to: Quaternion, weight: number /*f64*/): Quaternion
        
        /** Performs a spherical cubic interpolation between quaternions [param pre_a], this vector, [param b], and [param post_b], by the given amount [param weight]. */
        spherical_cubic_interpolate(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/): Quaternion
        
        /** Performs a spherical cubic interpolation between quaternions [param pre_a], this vector, [param b], and [param post_b], by the given amount [param weight].  
         *  It can perform smoother interpolation than [method spherical_cubic_interpolate] by the time values.  
         */
        spherical_cubic_interpolate_in_time(b: Quaternion, pre_a: Quaternion, post_b: Quaternion, weight: number /*f64*/, b_t: number /*f64*/, pre_a_t: number /*f64*/, post_b_t: number /*f64*/): Quaternion
        
        /** Returns this quaternion's rotation as a [Vector3] of [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians.  
         *  The order of each consecutive rotation can be changed with [param order] (see [enum EulerOrder] constants). By default, the YXZ convention is used ([constant EULER_ORDER_YXZ]): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method [method from_euler], this order is reversed.  
         */
        get_euler(order: number /*i64*/ = 2): Vector3
        
        /** Constructs a new [Quaternion] from the given [Vector3] of [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians. This method always uses the YXZ convention ([constant EULER_ORDER_YXZ]). */
        static from_euler(euler: Vector3): Quaternion
        
        /** Returns the rotation axis of the rotation represented by this quaternion. */
        get_axis(): Vector3
        
        /** Returns the angle of the rotation represented by this quaternion.  
         *      
         *  **Note:** The quaternion must be normalized.  
         */
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
        get x(): number /*f64*/
        set x(value: number /*f64*/)
        get y(): number /*f64*/
        set y(value: number /*f64*/)
        get z(): number /*f64*/
        set z(value: number /*f64*/)
        get w(): number /*f64*/
        set w(value: number /*f64*/)
    }
    /** A 3D axis-aligned bounding box.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_aabb.html  
     */
    class AABB {
        constructor()
        constructor(from: AABB)
        constructor(position: Vector3, size: Vector3)
        
        /** Returns an [AABB] equivalent to this bounding box, with its width, height, and depth modified to be non-negative values.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member size]'s components are greater than `0`.  
         */
        abs(): AABB
        
        /** Returns the center point of the bounding box. This is the same as `position + (size / 2.0)`. */
        get_center(): Vector3
        
        /** Returns the bounding box's volume. This is equivalent to `size.x * size.y * size.z`. See also [method has_volume]. */
        get_volume(): number /*f64*/
        
        /** Returns `true` if this bounding box's width, height, and depth are all positive. See also [method get_volume]. */
        has_volume(): boolean
        
        /** Returns `true` if this bounding box has a surface or a length, that is, at least one component of [member size] is greater than `0`. Otherwise, returns `false`. */
        has_surface(): boolean
        
        /** Returns `true` if the bounding box contains the given [param point]. By convention, points exactly on the right, top, and front sides are **not** included.  
         *      
         *  **Note:** This method is not reliable for [AABB] with a  *negative*  [member size]. Use [method abs] first to get a valid bounding box.  
         */
        has_point(point: Vector3): boolean
        
        /** Returns `true` if this bounding box and [param aabb] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        is_equal_approx(aabb: AABB): boolean
        
        /** Returns `true` if this bounding box's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        is_finite(): boolean
        
        /** Returns `true` if this bounding box overlaps with the box [param with]. The edges of both boxes are  *always*  excluded. */
        intersects(with_: AABB): boolean
        
        /** Returns `true` if this bounding box  *completely*  encloses the [param with] box. The edges of both boxes are included.  
         *    
         */
        encloses(with_: AABB): boolean
        
        /** Returns `true` if this bounding box is on both sides of the given [param plane]. */
        intersects_plane(plane: Plane): boolean
        
        /** Returns the intersection between this bounding box and [param with]. If the boxes do not intersect, returns an empty [AABB]. If the boxes intersect at the edge, returns a flat [AABB] with no volume (see [method has_surface] and [method has_volume]).  
         *    
         *      
         *  **Note:** If you only need to know whether two bounding boxes are intersecting, use [method intersects], instead.  
         */
        intersection(with_: AABB): AABB
        
        /** Returns an [AABB] that encloses both this bounding box and [param with] around the edges. See also [method encloses]. */
        merge(with_: AABB): AABB
        
        /** Returns a copy of this bounding box expanded to align the edges with the given [param to_point], if necessary.  
         *    
         */
        expand(to_point: Vector3): AABB
        
        /** Returns a copy of this bounding box extended on all sides by the given amount [param by]. A negative amount shrinks the box instead.  
         *    
         */
        grow(by: number /*f64*/): AABB
        
        /** Returns the vertex's position of this bounding box that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms. */
        get_support(dir: Vector3): Vector3
        
        /** Returns the longest normalized axis of this bounding box's [member size], as a [Vector3] ([constant Vector3.RIGHT], [constant Vector3.UP], or [constant Vector3.BACK]).  
         *    
         *  See also [method get_longest_axis_index] and [method get_longest_axis_size].  
         */
        get_longest_axis(): Vector3
        
        /** Returns the index to the longest axis of this bounding box's [member size] (see [constant Vector3.AXIS_X], [constant Vector3.AXIS_Y], and [constant Vector3.AXIS_Z]).  
         *  For an example, see [method get_longest_axis].  
         */
        get_longest_axis_index(): number /*i64*/
        
        /** Returns the longest dimension of this bounding box's [member size].  
         *  For an example, see [method get_longest_axis].  
         */
        get_longest_axis_size(): number /*f64*/
        
        /** Returns the shortest normaalized axis of this bounding box's [member size], as a [Vector3] ([constant Vector3.RIGHT], [constant Vector3.UP], or [constant Vector3.BACK]).  
         *    
         *  See also [method get_shortest_axis_index] and [method get_shortest_axis_size].  
         */
        get_shortest_axis(): Vector3
        
        /** Returns the index to the shortest axis of this bounding box's [member size] (see [constant Vector3.AXIS_X], [constant Vector3.AXIS_Y], and [constant Vector3.AXIS_Z]).  
         *  For an example, see [method get_shortest_axis].  
         */
        get_shortest_axis_index(): number /*i64*/
        
        /** Returns the shortest dimension of this bounding box's [member size].  
         *  For an example, see [method get_shortest_axis].  
         */
        get_shortest_axis_size(): number /*f64*/
        
        /** Returns the position of one of the 8 vertices that compose this bounding box. With a [param idx] of `0` this is the same as [member position], and a [param idx] of `7` is the same as [member end]. */
        get_endpoint(idx: number /*i64*/): Vector3
        
        /** Returns the first point where this bounding box and the given segment intersect, as a [Vector3]. If no intersection occurs, returns `null`.  
         *  The segment begins at [param from] and ends at [param to].  
         */
        intersects_segment(from: Vector3, to: Vector3): void
        
        /** Returns the first point where this bounding box and the given ray intersect, as a [Vector3]. If no intersection occurs, returns `null`.  
         *  The ray begin at [param from], faces [param dir] and extends towards infinity.  
         */
        intersects_ray(from: Vector3, dir: Vector3): void
        static EQUAL(left: AABB, right: AABB): boolean
        static NOT_EQUAL(left: AABB, right: AABB): boolean
        get position(): Vector3
        set position(value: Vector3)
        get size(): Vector3
        set size(value: Vector3)
        get end(): Vector3
        set end(value: Vector3)
    }
    /** A 3×3 matrix for representing 3D rotation and scale.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_basis.html  
     */
    class Basis {
        /** The identity basis. This is a basis with no rotation, no shear, and its scale being `1`. This means that:  
         *  - The [member x] points right ([constant Vector3.RIGHT]);  
         *  - The [member y] points up ([constant Vector3.UP]);  
         *  - The [member z] points back ([constant Vector3.BACK]).  
         *    
         *  This is identical to creating [constructor Basis] without any parameters. This constant can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Basis
        
        /** When any basis is multiplied by [constant FLIP_X], it negates all components of the [member x] axis (the X column).  
         *  When [constant FLIP_X] is multiplied by any basis, it negates the [member Vector3.x] component of all axes (the X row).  
         */
        static readonly FLIP_X: Basis
        
        /** When any basis is multiplied by [constant FLIP_Y], it negates all components of the [member y] axis (the Y column).  
         *  When [constant FLIP_Y] is multiplied by any basis, it negates the [member Vector3.y] component of all axes (the Y row).  
         */
        static readonly FLIP_Y: Basis
        
        /** When any basis is multiplied by [constant FLIP_Z], it negates all components of the [member z] axis (the Z column).  
         *  When [constant FLIP_Z] is multiplied by any basis, it negates the [member Vector3.z] component of all axes (the Z row).  
         */
        static readonly FLIP_Z: Basis
        constructor()
        constructor(from: Basis)
        constructor(from: Quaternion)
        constructor(axis: Vector3, angle: number /*f64*/)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3)
        set_indexed(index: number, value: Vector3)
        get_indexed(index: number): Vector3
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverse of this basis's matrix[/url]. */
        inverse(): Basis
        
        /** Returns the transposed version of this basis. This turns the basis matrix's columns into rows, and its rows into columns.  
         *    
         */
        transposed(): Basis
        
        /** Returns the orthonormalized version of this basis. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1`), which also means it can only represent rotation.  
         *  It is often useful to call this method to avoid rounding errors on a rotating basis:  
         *    
         */
        orthonormalized(): Basis
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Determinant]determinant[/url] of this basis's matrix. For advanced math, this number can be used to determine a few attributes:  
         *  - If the determinant is exactly `0`, the basis is not invertible (see [method inverse]).  
         *  - If the determinant is a negative number, the basis represents a negative scale.  
         *      
         *  **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.  
         */
        determinant(): number /*f64*/
        
        /** Returns this basis rotated around the given [param axis] by [param angle] (in radians). The [param axis] must be a normalized vector (see [method Vector3.normalized]).  
         *  Positive values rotate this basis clockwise around the axis, while negative values rotate it counterclockwise.  
         *    
         */
        rotated(axis: Vector3, angle: number /*f64*/): Basis
        
        /** Returns this basis with each axis's components scaled by the given [param scale]'s components.  
         *  The basis matrix's rows are multiplied by [param scale]'s components. This operation is a global scale (relative to the parent).  
         *    
         */
        scaled(scale: Vector3): Basis
        
        /** Returns the length of each axis of this basis, as a [Vector3]. If the basis is not sheared, this is the scaling factor. It is not affected by rotation.  
         *    
         *      
         *  **Note:** If the value returned by [method determinant] is negative, the scale is also negative.  
         */
        get_scale(): Vector3
        
        /** Returns this basis's rotation as a [Vector3] of [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians.  
         *  - The [member Vector3.x] contains the angle around the [member x] axis (pitch);  
         *  - The [member Vector3.y] contains the angle around the [member y] axis (yaw);  
         *  - The [member Vector3.z] contains the angle around the [member z] axis (roll).  
         *  The order of each consecutive rotation can be changed with [param order] (see [enum EulerOrder] constants). By default, the YXZ convention is used ([constant EULER_ORDER_YXZ]): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method [method from_euler], this order is reversed.  
         *      
         *  **Note:** Euler angles are much more intuitive but are not suitable for 3D math. Because of this, consider using the [method get_rotation_quaternion] method instead, which returns a [Quaternion].  
         *      
         *  **Note:** In the Inspector dock, a basis's rotation is often displayed in Euler angles (in degrees), as is the case with the [member Node3D.rotation] property.  
         */
        get_euler(order: number /*i64*/ = 2): Vector3
        
        /** Returns the transposed dot product between [param with] and the [member x] axis (see [method transposed]).  
         *  This is equivalent to `basis.x.dot(vector)`.  
         */
        tdotx(with_: Vector3): number /*f64*/
        
        /** Returns the transposed dot product between [param with] and the [member y] axis (see [method transposed]).  
         *  This is equivalent to `basis.y.dot(vector)`.  
         */
        tdoty(with_: Vector3): number /*f64*/
        
        /** Returns the transposed dot product between [param with] and the [member z] axis (see [method transposed]).  
         *  This is equivalent to `basis.z.dot(vector)`.  
         */
        tdotz(with_: Vector3): number /*f64*/
        
        /** Performs a spherical-linear interpolation with the [param to] basis, given a [param weight]. Both this basis and [param to] should represent a rotation.  
         *  **Example:** Smoothly rotate a [Node3D] to the target basis over time, with a [Tween].  
         *    
         */
        slerp(to: Basis, weight: number /*f64*/): Basis
        
        /** Returns `true` if this basis is conformal. A conformal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *uniform*  (the axes share the same length). This method can be especially useful during physics calculations. */
        is_conformal(): boolean
        
        /** Returns `true` if this basis and [param b] are approximately equal, by calling [method @GlobalScope.is_equal_approx] on all vector components. */
        is_equal_approx(b: Basis): boolean
        
        /** Returns `true` if this basis is finite, by calling [method @GlobalScope.is_finite] on all vector components. */
        is_finite(): boolean
        
        /** Returns this basis's rotation as a [Quaternion].  
         *      
         *  **Note:** Quatenions are much more suitable for 3D math but are less intuitive. For user interfaces, consider using the [method get_euler] method, which returns Euler angles.  
         */
        get_rotation_quaternion(): Quaternion
        
        /** Creates a new [Basis] with a rotation such that the forward axis (-Z) points towards the [param target] position.  
         *  By default, the -Z axis (camera forward) is treated as forward (implies +X is right). If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position.  
         *  The up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the forward axis. The returned basis is orthonormalized (see [method orthonormalized]). The [param target] and [param up] vectors cannot be [constant Vector3.ZERO], and cannot be parallel to each other.  
         */
        static looking_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): Basis
        
        /** Constructs a new [Basis] that only represents scale, with no rotation or shear, from the given [param scale] vector.  
         *    
         *      
         *  **Note:** In linear algebra, the matrix of this basis is also known as a [url=https://en.wikipedia.org/wiki/Diagonal_matrix]diagonal matrix[/url].  
         */
        static from_scale(scale: Vector3): Basis
        
        /** Constructs a new [Basis] that only represents rotation from the given [Vector3] of [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians.  
         *  - The [member Vector3.x] should contain the angle around the [member x] axis (pitch).  
         *  - The [member Vector3.y] should contain the angle around the [member y] axis (yaw).  
         *  - The [member Vector3.z] should contain the angle around the [member z] axis (roll).  
         *    
         *  The order of each consecutive rotation can be changed with [param order] (see [enum EulerOrder] constants). By default, the YXZ convention is used ([constant EULER_ORDER_YXZ]): the basis rotates first around the Y axis (yaw), then X (pitch), and lastly Z (roll). When using the opposite method [method get_euler], this order is reversed.  
         */
        static from_euler(euler: Vector3, order: number /*i64*/ = 2): Basis
        static MULTIPLY(left: Basis, right: Basis): Basis
        static MULTIPLY(left: Basis, right: number /*f64*/): Basis
        static MULTIPLY(left: Basis, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Basis): Vector3
        static EQUAL(left: Basis, right: Basis): boolean
        static NOT_EQUAL(left: Basis, right: Basis): boolean
        get x(): Vector3
        set x(value: Vector3)
        get y(): Vector3
        set y(value: Vector3)
        get z(): Vector3
        set z(value: Vector3)
    }
    /** A 3×4 matrix representing a 3D transformation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_transform3d.html  
     */
    class Transform3D {
        /** A transform with no translation, no rotation, and its scale being `1`. Its [member basis] is equal to [constant Basis.IDENTITY].  
         *  When multiplied by another [Variant] such as [AABB] or another [Transform3D], no transformation occurs.  
         */
        static readonly IDENTITY: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the YZ plane. Its [member basis] is equal to [constant Basis.FLIP_X]. */
        static readonly FLIP_X: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the XZ plane. Its [member basis] is equal to [constant Basis.FLIP_Y]. */
        static readonly FLIP_Y: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the XY plane. Its [member basis] is equal to [constant Basis.FLIP_Z]. */
        static readonly FLIP_Z: Transform3D
        constructor()
        constructor(from: Transform3D)
        constructor(basis: Basis, origin: Vector3)
        constructor(x_axis: Vector3, y_axis: Vector3, z_axis: Vector3, origin: Vector3)
        constructor(from: Projection)
        
        /** Returns the inverted version of this transform. See also [method Basis.inverse].  
         *      
         *  **Note:** For this method to return correctly, the transform's [member basis] needs to be  *orthonormal*  (see [method Basis.orthonormalized]). That means, the basis should only represent a rotation. If it does not, use [method affine_inverse] instead.  
         */
        inverse(): Transform3D
        
        /** Returns the inverted version of this transform. Unlike [method inverse], this method works with almost any [member basis], including non-uniform ones, but is slower. See also [method Basis.inverse].  
         *      
         *  **Note:** For this method to return correctly, the transform's [member basis] needs to have a determinant that is not exactly `0` (see [method Basis.determinant]).  
         */
        affine_inverse(): Transform3D
        
        /** Returns a copy of this transform with its [member basis] orthonormalized. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1`), which also means it can only represent rotation. See also [method Basis.orthonormalized]. */
        orthonormalized(): Transform3D
        
        /** Returns a copy of this transform rotated around the given [param axis] by the given [param angle] (in radians).  
         *  The [param axis] must be a normalized vector.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        rotated(axis: Vector3, angle: number /*f64*/): Transform3D
        
        /** Returns a copy of this transform rotated around the given [param axis] by the given [param angle] (in radians).  
         *  The [param axis] must be a normalized vector.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        rotated_local(axis: Vector3, angle: number /*f64*/): Transform3D
        
        /** Returns a copy of this transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        scaled(scale: Vector3): Transform3D
        
        /** Returns a copy of this transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        scaled_local(scale: Vector3): Transform3D
        
        /** Returns a copy of this transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        translated(offset: Vector3): Transform3D
        
        /** Returns a copy of this transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        translated_local(offset: Vector3): Transform3D
        
        /** Returns a copy of this transform rotated so that the forward axis (-Z) points towards the [param target] position.  
         *  The up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the forward axis. The resulting transform is orthonormalized. The existing rotation, scale, and skew information from the original transform is discarded. The [param target] and [param up] vectors cannot be zero, cannot be parallel to each other, and are defined in global/parent space.  
         *  If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).  
         */
        looking_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): Transform3D
        
        /** Returns the result of the linear interpolation between this transform and [param xform] by the given [param weight].  
         *  The [param weight] should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform  *extrapolation*  instead.  
         */
        interpolate_with(xform: Transform3D, weight: number /*f64*/): Transform3D
        
        /** Returns `true` if this transform and [param xform] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(xform: Transform3D): boolean
        
        /** Returns `true` if this transform is finite, by calling [method @GlobalScope.is_finite] on each component. */
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
        get basis(): Basis
        set basis(value: Basis)
        get origin(): Vector3
        set origin(value: Vector3)
    }
    namespace Projection {
        enum Planes {
            /** The index value of the projection's near clipping plane. */
            PLANE_NEAR = 0,
            
            /** The index value of the projection's far clipping plane. */
            PLANE_FAR = 1,
            
            /** The index value of the projection's left clipping plane. */
            PLANE_LEFT = 2,
            
            /** The index value of the projection's top clipping plane. */
            PLANE_TOP = 3,
            
            /** The index value of the projection's right clipping plane. */
            PLANE_RIGHT = 4,
            
            /** The index value of the projection bottom clipping plane. */
            PLANE_BOTTOM = 5,
        }
    }
    /** A 4×4 matrix for 3D projective transformations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_projection.html  
     */
    class Projection {
        /** A [Projection] with no transformation defined. When applied to other data structures, no transformation is performed. */
        static readonly IDENTITY: Projection
        
        /** A [Projection] with all values initialized to 0. When applied to other data structures, they will be zeroed. */
        static readonly ZERO: Projection
        constructor()
        constructor(from: Projection)
        constructor(from: Transform3D)
        constructor(x_axis: Vector4, y_axis: Vector4, z_axis: Vector4, w_axis: Vector4)
        set_indexed(index: number, value: Vector4)
        get_indexed(index: number): Vector4
        
        /** Creates a new [Projection] that projects positions from a depth range of `-1` to `1` to one that ranges from `0` to `1`, and flips the projected positions vertically, according to [param flip_y]. */
        static create_depth_correction(flip_y: boolean): Projection
        
        /** Creates a new [Projection] that projects positions into the given [Rect2]. */
        static create_light_atlas_rect(rect: Rect2): Projection
        
        /** Creates a new [Projection] that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping planes.  
         *  [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.  
         */
        static create_perspective(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        
        /** Creates a new [Projection] that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping distances. The projection is adjusted for a head-mounted display with the given distance between eyes and distance to a point that can be focused on.  
         *  [param eye] creates the projection for the left eye when set to 1, or the right eye when set to 2.  
         *  [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.  
         */
        static create_perspective_hmd(fovy: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean, eye: number /*i64*/, intraocular_dist: number /*f64*/, convergence_dist: number /*f64*/): Projection
        
        /** Creates a new [Projection] for projecting positions onto a head-mounted display with the given X:Y aspect ratio, distance between eyes, display width, distance to lens, oversampling factor, and depth clipping planes.  
         *  [param eye] creates the projection for the left eye when set to 1, or the right eye when set to 2.  
         */
        static create_for_hmd(eye: number /*i64*/, aspect: number /*f64*/, intraocular_dist: number /*f64*/, display_width: number /*f64*/, display_to_lens: number /*f64*/, oversample: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        
        /** Creates a new [Projection] that projects positions using an orthogonal projection with the given clipping planes. */
        static create_orthogonal(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        
        /** Creates a new [Projection] that projects positions using an orthogonal projection with the given size, X:Y aspect ratio, and clipping planes.  
         *  [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.  
         */
        static create_orthogonal_aspect(size: number /*f64*/, aspect: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        
        /** Creates a new [Projection] that projects positions in a frustum with the given clipping planes. */
        static create_frustum(left: number /*f64*/, right: number /*f64*/, bottom: number /*f64*/, top: number /*f64*/, z_near: number /*f64*/, z_far: number /*f64*/): Projection
        
        /** Creates a new [Projection] that projects positions in a frustum with the given size, X:Y aspect ratio, offset, and clipping planes.  
         *  [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.  
         */
        static create_frustum_aspect(size: number /*f64*/, aspect: number /*f64*/, offset: Vector2, z_near: number /*f64*/, z_far: number /*f64*/, flip_fov: boolean = false): Projection
        
        /** Creates a new [Projection] that scales a given projection to fit around a given [AABB] in projection space. */
        static create_fit_aabb(aabb: AABB): Projection
        
        /** Returns a scalar value that is the signed factor by which areas are scaled by this matrix. If the sign is negative, the matrix flips the orientation of the area.  
         *  The determinant can be used to calculate the invertibility of a matrix or solve linear systems of equations involving the matrix, among other applications.  
         */
        determinant(): number /*f64*/
        
        /** Returns a [Projection] with the near clipping distance adjusted to be [param new_znear].  
         *      
         *  **Note:** The original [Projection] must be a perspective projection.  
         */
        perspective_znear_adjusted(new_znear: number /*f64*/): Projection
        
        /** Returns the clipping plane of this [Projection] whose index is given by [param plane].  
         *  [param plane] should be equal to one of [constant PLANE_NEAR], [constant PLANE_FAR], [constant PLANE_LEFT], [constant PLANE_TOP], [constant PLANE_RIGHT], or [constant PLANE_BOTTOM].  
         */
        get_projection_plane(plane: number /*i64*/): Plane
        
        /** Returns a copy of this [Projection] with the signs of the values of the Y column flipped. */
        flipped_y(): Projection
        
        /** Returns a [Projection] with the X and Y values from the given [Vector2] added to the first and second values of the final column respectively. */
        jitter_offseted(offset: Vector2): Projection
        
        /** Returns the vertical field of view of the projection (in degrees) associated with the given horizontal field of view (in degrees) and aspect ratio. */
        static get_fovy(fovx: number /*f64*/, aspect: number /*f64*/): number /*f64*/
        
        /** Returns the distance for this [Projection] beyond which positions are clipped. */
        get_z_far(): number /*f64*/
        
        /** Returns the distance for this [Projection] before which positions are clipped. */
        get_z_near(): number /*f64*/
        
        /** Returns the X:Y aspect ratio of this [Projection]'s viewport. */
        get_aspect(): number /*f64*/
        
        /** Returns the horizontal field of view of the projection (in degrees). */
        get_fov(): number /*f64*/
        
        /** Returns `true` if this [Projection] performs an orthogonal projection. */
        is_orthogonal(): boolean
        
        /** Returns the dimensions of the viewport plane that this [Projection] projects positions onto, divided by two. */
        get_viewport_half_extents(): Vector2
        
        /** Returns the dimensions of the far clipping plane of the projection, divided by two. */
        get_far_plane_half_extents(): Vector2
        
        /** Returns a [Projection] that performs the inverse of this [Projection]'s projective transformation. */
        inverse(): Projection
        
        /** Returns the number of pixels with the given pixel width displayed per meter, after this [Projection] is applied. */
        get_pixels_per_meter(for_pixel_width: number /*i64*/): number /*i64*/
        
        /** Returns the factor by which the visible level of detail is scaled by this [Projection]. */
        get_lod_multiplier(): number /*f64*/
        static MULTIPLY(left: Projection, right: Projection): Projection
        static MULTIPLY(left: Projection, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Projection): Vector4
        static EQUAL(left: Projection, right: Projection): boolean
        static NOT_EQUAL(left: Projection, right: Projection): boolean
        get x(): Vector4
        set x(value: Vector4)
        get y(): Vector4
        set y(value: Vector4)
        get z(): Vector4
        set z(value: Vector4)
        get w(): Vector4
        set w(value: Vector4)
    }
    /** A color represented in RGBA format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_color.html  
     */
    class Color {
        /** Alice blue color. */
        static readonly ALICE_BLUE: Color
        
        /** Antique white color. */
        static readonly ANTIQUE_WHITE: Color
        
        /** Aqua color. */
        static readonly AQUA: Color
        
        /** Aquamarine color. */
        static readonly AQUAMARINE: Color
        
        /** Azure color. */
        static readonly AZURE: Color
        
        /** Beige color. */
        static readonly BEIGE: Color
        
        /** Bisque color. */
        static readonly BISQUE: Color
        
        /** Black color. In GDScript, this is the default value of any color. */
        static readonly BLACK: Color
        
        /** Blanched almond color. */
        static readonly BLANCHED_ALMOND: Color
        
        /** Blue color. */
        static readonly BLUE: Color
        
        /** Blue violet color. */
        static readonly BLUE_VIOLET: Color
        
        /** Brown color. */
        static readonly BROWN: Color
        
        /** Burlywood color. */
        static readonly BURLYWOOD: Color
        
        /** Cadet blue color. */
        static readonly CADET_BLUE: Color
        
        /** Chartreuse color. */
        static readonly CHARTREUSE: Color
        
        /** Chocolate color. */
        static readonly CHOCOLATE: Color
        
        /** Coral color. */
        static readonly CORAL: Color
        
        /** Cornflower blue color. */
        static readonly CORNFLOWER_BLUE: Color
        
        /** Cornsilk color. */
        static readonly CORNSILK: Color
        
        /** Crimson color. */
        static readonly CRIMSON: Color
        
        /** Cyan color. */
        static readonly CYAN: Color
        
        /** Dark blue color. */
        static readonly DARK_BLUE: Color
        
        /** Dark cyan color. */
        static readonly DARK_CYAN: Color
        
        /** Dark goldenrod color. */
        static readonly DARK_GOLDENROD: Color
        
        /** Dark gray color. */
        static readonly DARK_GRAY: Color
        
        /** Dark green color. */
        static readonly DARK_GREEN: Color
        
        /** Dark khaki color. */
        static readonly DARK_KHAKI: Color
        
        /** Dark magenta color. */
        static readonly DARK_MAGENTA: Color
        
        /** Dark olive green color. */
        static readonly DARK_OLIVE_GREEN: Color
        
        /** Dark orange color. */
        static readonly DARK_ORANGE: Color
        
        /** Dark orchid color. */
        static readonly DARK_ORCHID: Color
        
        /** Dark red color. */
        static readonly DARK_RED: Color
        
        /** Dark salmon color. */
        static readonly DARK_SALMON: Color
        
        /** Dark sea green color. */
        static readonly DARK_SEA_GREEN: Color
        
        /** Dark slate blue color. */
        static readonly DARK_SLATE_BLUE: Color
        
        /** Dark slate gray color. */
        static readonly DARK_SLATE_GRAY: Color
        
        /** Dark turquoise color. */
        static readonly DARK_TURQUOISE: Color
        
        /** Dark violet color. */
        static readonly DARK_VIOLET: Color
        
        /** Deep pink color. */
        static readonly DEEP_PINK: Color
        
        /** Deep sky blue color. */
        static readonly DEEP_SKY_BLUE: Color
        
        /** Dim gray color. */
        static readonly DIM_GRAY: Color
        
        /** Dodger blue color. */
        static readonly DODGER_BLUE: Color
        
        /** Firebrick color. */
        static readonly FIREBRICK: Color
        
        /** Floral white color. */
        static readonly FLORAL_WHITE: Color
        
        /** Forest green color. */
        static readonly FOREST_GREEN: Color
        
        /** Fuchsia color. */
        static readonly FUCHSIA: Color
        
        /** Gainsboro color. */
        static readonly GAINSBORO: Color
        
        /** Ghost white color. */
        static readonly GHOST_WHITE: Color
        
        /** Gold color. */
        static readonly GOLD: Color
        
        /** Goldenrod color. */
        static readonly GOLDENROD: Color
        
        /** Gray color. */
        static readonly GRAY: Color
        
        /** Green color. */
        static readonly GREEN: Color
        
        /** Green yellow color. */
        static readonly GREEN_YELLOW: Color
        
        /** Honeydew color. */
        static readonly HONEYDEW: Color
        
        /** Hot pink color. */
        static readonly HOT_PINK: Color
        
        /** Indian red color. */
        static readonly INDIAN_RED: Color
        
        /** Indigo color. */
        static readonly INDIGO: Color
        
        /** Ivory color. */
        static readonly IVORY: Color
        
        /** Khaki color. */
        static readonly KHAKI: Color
        
        /** Lavender color. */
        static readonly LAVENDER: Color
        
        /** Lavender blush color. */
        static readonly LAVENDER_BLUSH: Color
        
        /** Lawn green color. */
        static readonly LAWN_GREEN: Color
        
        /** Lemon chiffon color. */
        static readonly LEMON_CHIFFON: Color
        
        /** Light blue color. */
        static readonly LIGHT_BLUE: Color
        
        /** Light coral color. */
        static readonly LIGHT_CORAL: Color
        
        /** Light cyan color. */
        static readonly LIGHT_CYAN: Color
        
        /** Light goldenrod color. */
        static readonly LIGHT_GOLDENROD: Color
        
        /** Light gray color. */
        static readonly LIGHT_GRAY: Color
        
        /** Light green color. */
        static readonly LIGHT_GREEN: Color
        
        /** Light pink color. */
        static readonly LIGHT_PINK: Color
        
        /** Light salmon color. */
        static readonly LIGHT_SALMON: Color
        
        /** Light sea green color. */
        static readonly LIGHT_SEA_GREEN: Color
        
        /** Light sky blue color. */
        static readonly LIGHT_SKY_BLUE: Color
        
        /** Light slate gray color. */
        static readonly LIGHT_SLATE_GRAY: Color
        
        /** Light steel blue color. */
        static readonly LIGHT_STEEL_BLUE: Color
        
        /** Light yellow color. */
        static readonly LIGHT_YELLOW: Color
        
        /** Lime color. */
        static readonly LIME: Color
        
        /** Lime green color. */
        static readonly LIME_GREEN: Color
        
        /** Linen color. */
        static readonly LINEN: Color
        
        /** Magenta color. */
        static readonly MAGENTA: Color
        
        /** Maroon color. */
        static readonly MAROON: Color
        
        /** Medium aquamarine color. */
        static readonly MEDIUM_AQUAMARINE: Color
        
        /** Medium blue color. */
        static readonly MEDIUM_BLUE: Color
        
        /** Medium orchid color. */
        static readonly MEDIUM_ORCHID: Color
        
        /** Medium purple color. */
        static readonly MEDIUM_PURPLE: Color
        
        /** Medium sea green color. */
        static readonly MEDIUM_SEA_GREEN: Color
        
        /** Medium slate blue color. */
        static readonly MEDIUM_SLATE_BLUE: Color
        
        /** Medium spring green color. */
        static readonly MEDIUM_SPRING_GREEN: Color
        
        /** Medium turquoise color. */
        static readonly MEDIUM_TURQUOISE: Color
        
        /** Medium violet red color. */
        static readonly MEDIUM_VIOLET_RED: Color
        
        /** Midnight blue color. */
        static readonly MIDNIGHT_BLUE: Color
        
        /** Mint cream color. */
        static readonly MINT_CREAM: Color
        
        /** Misty rose color. */
        static readonly MISTY_ROSE: Color
        
        /** Moccasin color. */
        static readonly MOCCASIN: Color
        
        /** Navajo white color. */
        static readonly NAVAJO_WHITE: Color
        
        /** Navy blue color. */
        static readonly NAVY_BLUE: Color
        
        /** Old lace color. */
        static readonly OLD_LACE: Color
        
        /** Olive color. */
        static readonly OLIVE: Color
        
        /** Olive drab color. */
        static readonly OLIVE_DRAB: Color
        
        /** Orange color. */
        static readonly ORANGE: Color
        
        /** Orange red color. */
        static readonly ORANGE_RED: Color
        
        /** Orchid color. */
        static readonly ORCHID: Color
        
        /** Pale goldenrod color. */
        static readonly PALE_GOLDENROD: Color
        
        /** Pale green color. */
        static readonly PALE_GREEN: Color
        
        /** Pale turquoise color. */
        static readonly PALE_TURQUOISE: Color
        
        /** Pale violet red color. */
        static readonly PALE_VIOLET_RED: Color
        
        /** Papaya whip color. */
        static readonly PAPAYA_WHIP: Color
        
        /** Peach puff color. */
        static readonly PEACH_PUFF: Color
        
        /** Peru color. */
        static readonly PERU: Color
        
        /** Pink color. */
        static readonly PINK: Color
        
        /** Plum color. */
        static readonly PLUM: Color
        
        /** Powder blue color. */
        static readonly POWDER_BLUE: Color
        
        /** Purple color. */
        static readonly PURPLE: Color
        
        /** Rebecca purple color. */
        static readonly REBECCA_PURPLE: Color
        
        /** Red color. */
        static readonly RED: Color
        
        /** Rosy brown color. */
        static readonly ROSY_BROWN: Color
        
        /** Royal blue color. */
        static readonly ROYAL_BLUE: Color
        
        /** Saddle brown color. */
        static readonly SADDLE_BROWN: Color
        
        /** Salmon color. */
        static readonly SALMON: Color
        
        /** Sandy brown color. */
        static readonly SANDY_BROWN: Color
        
        /** Sea green color. */
        static readonly SEA_GREEN: Color
        
        /** Seashell color. */
        static readonly SEASHELL: Color
        
        /** Sienna color. */
        static readonly SIENNA: Color
        
        /** Silver color. */
        static readonly SILVER: Color
        
        /** Sky blue color. */
        static readonly SKY_BLUE: Color
        
        /** Slate blue color. */
        static readonly SLATE_BLUE: Color
        
        /** Slate gray color. */
        static readonly SLATE_GRAY: Color
        
        /** Snow color. */
        static readonly SNOW: Color
        
        /** Spring green color. */
        static readonly SPRING_GREEN: Color
        
        /** Steel blue color. */
        static readonly STEEL_BLUE: Color
        
        /** Tan color. */
        static readonly TAN: Color
        
        /** Teal color. */
        static readonly TEAL: Color
        
        /** Thistle color. */
        static readonly THISTLE: Color
        
        /** Tomato color. */
        static readonly TOMATO: Color
        
        /** Transparent color (white with zero alpha). */
        static readonly TRANSPARENT: Color
        
        /** Turquoise color. */
        static readonly TURQUOISE: Color
        
        /** Violet color. */
        static readonly VIOLET: Color
        
        /** Web gray color. */
        static readonly WEB_GRAY: Color
        
        /** Web green color. */
        static readonly WEB_GREEN: Color
        
        /** Web maroon color. */
        static readonly WEB_MAROON: Color
        
        /** Web purple color. */
        static readonly WEB_PURPLE: Color
        
        /** Wheat color. */
        static readonly WHEAT: Color
        
        /** White color. */
        static readonly WHITE: Color
        
        /** White smoke color. */
        static readonly WHITE_SMOKE: Color
        
        /** Yellow color. */
        static readonly YELLOW: Color
        
        /** Yellow green color. */
        static readonly YELLOW_GREEN: Color
        constructor()
        constructor(from: Color)
        constructor(from: Color, alpha: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/)
        constructor(r: number /*f64*/, g: number /*f64*/, b: number /*f64*/, a: number /*f64*/)
        constructor(code: string)
        constructor(code: string, alpha: number /*f64*/)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns the color converted to a 32-bit integer in ARGB format (each component is 8 bits). ARGB is more compatible with DirectX.  
         *    
         */
        to_argb32(): number /*i64*/
        
        /** Returns the color converted to a 32-bit integer in ABGR format (each component is 8 bits). ABGR is the reversed version of the default RGBA format.  
         *    
         */
        to_abgr32(): number /*i64*/
        
        /** Returns the color converted to a 32-bit integer in RGBA format (each component is 8 bits). RGBA is Godot's default format.  
         *    
         */
        to_rgba32(): number /*i64*/
        
        /** Returns the color converted to a 64-bit integer in ARGB format (each component is 16 bits). ARGB is more compatible with DirectX.  
         *    
         */
        to_argb64(): number /*i64*/
        
        /** Returns the color converted to a 64-bit integer in ABGR format (each component is 16 bits). ABGR is the reversed version of the default RGBA format.  
         *    
         */
        to_abgr64(): number /*i64*/
        
        /** Returns the color converted to a 64-bit integer in RGBA format (each component is 16 bits). RGBA is Godot's default format.  
         *    
         */
        to_rgba64(): number /*i64*/
        
        /** Returns the color converted to an HTML hexadecimal color [String] in RGBA format, without the hash (`#`) prefix.  
         *  Setting [param with_alpha] to `false`, excludes alpha from the hexadecimal string, using RGB format instead of RGBA format.  
         *    
         */
        to_html(with_alpha: boolean = true): string
        
        /** Returns a new color with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Color = new Color(0, 0, 0, 0), max: Color = new Color(1, 1, 1, 1)): Color
        
        /** Returns the color with its [member r], [member g], and [member b] components inverted (`(1 - r, 1 - g, 1 - b, a)`).  
         *    
         */
        inverted(): Color
        
        /** Returns the linear interpolation between this color's components and [param to]'s components. The interpolation factor [param weight] should be between 0.0 and 1.0 (inclusive). See also [method @GlobalScope.lerp].  
         *    
         */
        lerp(to: Color, weight: number /*f64*/): Color
        
        /** Returns a new color resulting from making this color lighter by the specified [param amount], which should be a ratio from 0.0 to 1.0. See also [method darkened].  
         *    
         */
        lightened(amount: number /*f64*/): Color
        
        /** Returns a new color resulting from making this color darker by the specified [param amount] (ratio from 0.0 to 1.0). See also [method lightened].  
         *    
         */
        darkened(amount: number /*f64*/): Color
        
        /** Returns a new color resulting from overlaying this color over the given color. In a painting program, you can imagine it as the [param over] color painted over this color (including alpha).  
         *    
         */
        blend(over: Color): Color
        
        /** Returns the light intensity of the color, as a value between 0.0 and 1.0 (inclusive). This is useful when determining light or dark color. Colors with a luminance smaller than 0.5 can be generally considered dark.  
         *      
         *  **Note:** [method get_luminance] relies on the color being in the linear color space to return an accurate relative luminance value. If the color is in the sRGB color space, use [method srgb_to_linear] to convert it to the linear color space first.  
         */
        get_luminance(): number /*f64*/
        
        /** Returns the color converted to the linear color space. This method assumes the original color already is in the sRGB color space. See also [method linear_to_srgb] which performs the opposite operation. */
        srgb_to_linear(): Color
        
        /** Returns the color converted to the [url=https://en.wikipedia.org/wiki/SRGB]sRGB[/url] color space. This method assumes the original color is in the linear color space. See also [method srgb_to_linear] which performs the opposite operation. */
        linear_to_srgb(): Color
        
        /** Returns `true` if this color and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Color): boolean
        
        /** Returns the [Color] associated with the provided [param hex] integer in 32-bit RGBA format (8 bits per channel).  
         *  In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRGGBBAA"`).  
         *    
         */
        static hex(hex: number /*i64*/): Color
        
        /** Returns the [Color] associated with the provided [param hex] integer in 64-bit RGBA format (16 bits per channel).  
         *  In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRRRGGGGBBBBAAAA"`).  
         */
        static hex64(hex: number /*i64*/): Color
        
        /** Returns a new color from [param rgba], an HTML hexadecimal color string. [param rgba] is not case-sensitive, and may be prefixed by a hash sign (`#`).  
         *  [param rgba] must be a valid three-digit or six-digit hexadecimal color string, and may contain an alpha channel value. If [param rgba] does not contain an alpha channel value, an alpha channel value of 1.0 is applied. If [param rgba] is invalid, returns an empty color.  
         *    
         */
        static html(rgba: string): Color
        
        /** Returns `true` if [param color] is a valid HTML hexadecimal color string. The string must be a hexadecimal value (case-insensitive) of either 3, 4, 6 or 8 digits, and may be prefixed by a hash sign (`#`). This method is identical to [method String.is_valid_html_color].  
         *    
         */
        static html_is_valid(color: string): boolean
        
        /** Creates a [Color] from the given string, which can be either an HTML color code or a named color (case-insensitive). Returns [param default] if the color cannot be inferred from the string. */
        static from_string(str: string, default_: Color): Color
        
        /** Constructs a color from an [url=https://en.wikipedia.org/wiki/HSL_and_HSV]HSV profile[/url]. The hue ([param h]), saturation ([param s]), and value ([param v]) are typically between 0.0 and 1.0.  
         *    
         */
        static from_hsv(h: number /*f64*/, s: number /*f64*/, v: number /*f64*/, alpha: number /*f64*/ = 1): Color
        
        /** Constructs a color from an [url=https://bottosson.github.io/posts/colorpicker/]OK HSL profile[/url]. The hue ([param h]), saturation ([param s]), and lightness ([param l]) are typically between 0.0 and 1.0.  
         *    
         */
        static from_ok_hsl(h: number /*f64*/, s: number /*f64*/, l: number /*f64*/, alpha: number /*f64*/ = 1): Color
        
        /** Decodes a [Color] from a RGBE9995 format integer. See [constant Image.FORMAT_RGBE9995]. */
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
        get r(): number /*f64*/
        set r(value: number /*f64*/)
        get g(): number /*f64*/
        set g(value: number /*f64*/)
        get b(): number /*f64*/
        set b(value: number /*f64*/)
        get a(): number /*f64*/
        set a(value: number /*f64*/)
        get r8(): number /*i64*/
        set r8(value: number /*i64*/)
        get g8(): number /*i64*/
        set g8(value: number /*i64*/)
        get b8(): number /*i64*/
        set b8(value: number /*i64*/)
        get a8(): number /*i64*/
        set a8(value: number /*i64*/)
        get h(): number /*f64*/
        set h(value: number /*f64*/)
        get s(): number /*f64*/
        set s(value: number /*f64*/)
        get v(): number /*f64*/
        set v(value: number /*f64*/)
    }
    /** A pre-parsed scene tree path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_nodepath.html  
     */
    class NodePath {
        constructor()
        constructor(from: NodePath)
        constructor(from: string)
        
        /** Returns `true` if the node path is absolute (as opposed to relative), which means that it starts with a slash character (`/`). Absolute node paths can be used to access the root node (`"/root"`) or autoloads (e.g. `"/global"` if a "global" autoload was registered). */
        is_absolute(): boolean
        
        /** Gets the number of node names which make up the path. Subnames (see [method get_subname_count]) are not included.  
         *  For example, `"Path2D/PathFollow2D/Sprite2D"` has 3 names.  
         */
        get_name_count(): number /*i64*/
        
        /** Gets the node name indicated by [param idx] (0 to [method get_name_count] - 1).  
         *    
         */
        get_name(idx: number /*i64*/): StringName
        
        /** Gets the number of resource or property names ("subnames") in the path. Each subname is listed after a colon character (`:`) in the node path.  
         *  For example, `"Path2D/PathFollow2D/Sprite2D:texture:load_path"` has 2 subnames.  
         */
        get_subname_count(): number /*i64*/
        
        /** Returns the 32-bit hash value representing the [NodePath]'s contents. */
        hash(): number /*i64*/
        
        /** Gets the resource or property name indicated by [param idx] (0 to [method get_subname_count] - 1).  
         *    
         */
        get_subname(idx: number /*i64*/): StringName
        
        /** Returns all paths concatenated with a slash character (`/`) as separator without subnames. */
        get_concatenated_names(): StringName
        
        /** Returns all subnames concatenated with a colon character (`:`) as separator, i.e. the right side of the first colon in a node path.  
         *    
         */
        get_concatenated_subnames(): StringName
        
        /** Returns a node path with a colon character (`:`) prepended, transforming it to a pure property path with no node name (defaults to resolving from the current node).  
         *    
         */
        get_as_property_path(): NodePath
        
        /** Returns `true` if the node path is empty. */
        is_empty(): boolean
        static EQUAL(left: NodePath, right: NodePath): boolean
        static NOT_EQUAL(left: NodePath, right: NodePath): boolean
    }
    /** A handle for a [Resource]'s unique identifier.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rid.html  
     */
    class RID {
        constructor()
        constructor(from: RID)
        
        /** Returns `true` if the [RID] is not `0`. */
        is_valid(): boolean
        
        /** Returns the ID of the referenced low-level resource. */
        get_id(): number /*i64*/
        static EQUAL(left: RID, right: RID): boolean
        static NOT_EQUAL(left: RID, right: RID): boolean
        static LESS(left: RID, right: RID): boolean
        static LESS_EQUAL(left: RID, right: RID): boolean
        static GREATER(left: RID, right: RID): boolean
        static GREATER_EQUAL(left: RID, right: RID): boolean
    }
    /** A built-in type representing a method or a standalone function.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_callable.html  
     */
    class Callable {
        constructor()
        constructor(from: Callable)
        constructor(object: Object, method: StringName)
        
        /** Calls the method represented by this [Callable]. Unlike [method call], this method expects all arguments to be contained inside the [param arguments] [Array]. */
        callv(arguments_: Array): void
        
        /** Returns `true` if this [Callable] has no target to call the method on. */
        is_null(): boolean
        
        /** Returns `true` if this [Callable] is a custom callable. Custom callables are created from [method bind] or [method unbind]. In GDScript, lambda functions are also custom callables. */
        is_custom(): boolean
        
        /** Returns `true` if this [Callable] is a standard callable. This method is the opposite of [method is_custom]. Returns `false` if this callable is a lambda function. */
        is_standard(): boolean
        
        /** Returns `true` if the callable's object exists and has a valid method name assigned, or is a custom callable. */
        is_valid(): boolean
        
        /** Returns the object on which this [Callable] is called. */
        get_object(): Object
        
        /** Returns the ID of this [Callable]'s object (see [method Object.get_instance_id]). */
        get_object_id(): number /*i64*/
        
        /** Returns the name of the method represented by this [Callable]. If the callable is a GDScript lambda function, returns the function's name or `"<anonymous lambda>"`. */
        get_method(): StringName
        
        /** Returns the total amount of arguments bound (or unbound) via successive [method bind] or [method unbind] calls. If the amount of arguments unbound is greater than the ones bound, this function returns a value less than zero. */
        get_bound_arguments_count(): number /*i64*/
        
        /** Return the bound arguments (as long as [method get_bound_arguments_count] is greater than zero), or empty (if [method get_bound_arguments_count] is less than or equal to zero). */
        get_bound_arguments(): Array
        
        /** Returns the 32-bit hash value of this [Callable]'s object.  
         *      
         *  **Note:** [Callable]s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does  *not*  imply the callables are equal, because different callables can have identical hash values due to hash collisions. The engine uses a 32-bit hash algorithm for [method hash].  
         */
        hash(): number /*i64*/
        
        /** Returns a copy of this [Callable] with one or more arguments bound, reading them from an array. When called, the bound arguments are passed  *after*  the arguments supplied by [method call]. See also [method unbind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         */
        bindv(arguments_: Array): Callable
        
        /** Returns a copy of this [Callable] with a number of arguments unbound. In other words, when the new callable is called the last few arguments supplied by the user are ignored, according to [param argcount]. The remaining arguments are passed to the callable. This allows to use the original callable in a context that attempts to pass more arguments than this callable can handle, e.g. a signal with a fixed number of arguments. See also [method bind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         *    
         */
        unbind(argcount: number /*i64*/): Callable
        
        /** Calls the method represented by this [Callable]. Arguments can be passed and should match the method's signature. */
        call(...vargargs: any[]): void
        
        /** Calls the method represented by this [Callable] in deferred mode, i.e. at the end of the current frame. Arguments can be passed and should match the method's signature.  
         *    
         *      
         *  **Note:** Deferred calls are processed at idle time. Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.  
         *  See also [method Object.call_deferred].  
         */
        call_deferred(...vargargs: any[]): void
        
        /** Perform an RPC (Remote Procedure Call) on all connected peers. This is used for multiplayer and is normally not available, unless the function being called has been marked as  *RPC*  (using [annotation @GDScript.@rpc] or [method Node.rpc_config]). Calling this method on unsupported functions will result in an error. See [method Node.rpc]. */
        rpc(...vargargs: any[]): void
        
        /** Perform an RPC (Remote Procedure Call) on a specific peer ID (see multiplayer documentation for reference). This is used for multiplayer and is normally not available unless the function being called has been marked as  *RPC*  (using [annotation @GDScript.@rpc] or [method Node.rpc_config]). Calling this method on unsupported functions will result in an error. See [method Node.rpc_id]. */
        rpc_id(peer_id: number /*i64*/, ...vargargs: any[]): void
        
        /** Returns a copy of this [Callable] with one or more arguments bound. When called, the bound arguments are passed  *after*  the arguments supplied by [method call]. See also [method unbind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         */
        bind(...vargargs: any[]): Callable
        static EQUAL(left: Callable, right: Callable): boolean
        static NOT_EQUAL(left: Callable, right: Callable): boolean
    }
    /** A built-in type representing a signal of an [Object].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_signal.html  
     */
    class Signal {
        constructor()
        constructor(from: Signal)
        constructor(object: Object, signal: StringName)
        
        /** Returns `true` if the signal's name does not exist in its object, or the object is not valid. */
        is_null(): boolean
        
        /** Returns the object emitting this signal. */
        get_object(): Object
        
        /** Returns the ID of the object emitting this signal (see [method Object.get_instance_id]). */
        get_object_id(): number /*i64*/
        
        /** Returns the name of this signal. */
        get_name(): StringName
        
        /** Connects this signal to the specified [param callable]. Optional [param flags] can be also added to configure the connection's behavior (see [enum Object.ConnectFlags] constants). You can provide additional arguments to the connected [param callable] by using [method Callable.bind].  
         *  A signal can only be connected once to the same [Callable]. If the signal is already connected, returns [constant ERR_INVALID_PARAMETER] and pushes an error message, unless the signal is connected with [constant Object.CONNECT_REFERENCE_COUNTED]. To prevent this, use [method is_connected] first to check for existing connections.  
         *    
         */
        connect(callable: Callable, flags: number /*i64*/ = 0): number /*i64*/
        
        /** Disconnects this signal from the specified [Callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
        disconnect(callable: Callable): void
        
        /** Returns `true` if the specified [Callable] is connected to this signal. */
        is_connected(callable: Callable): boolean
        
        /** Returns an [Array] of connections for this signal. Each connection is represented as a [Dictionary] that contains three entries:  
         *  - `signal` is a reference to this signal;  
         *  - `callable` is a reference to the connected [Callable];  
         *  - `flags` is a combination of [enum Object.ConnectFlags].  
         */
        get_connections(): Array
        
        /** Emits this signal. All [Callable]s connected to this signal will be triggered. This method supports a variable number of arguments, so parameters can be passed as a comma separated list. */
        emit(...vargargs: any[]): void
        static EQUAL(left: Signal, right: Signal): boolean
        static NOT_EQUAL(left: Signal, right: Signal): boolean
    }
    /** A built-in data structure that holds key-value pairs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_dictionary.html  
     */
    class Dictionary {
        constructor()
        constructor(from: Dictionary)
        set_indexed(index: number, value: any)
        get_indexed(index: number): any
        
        /** Returns the number of entries in the dictionary. Empty dictionaries (`{ }`) always return `0`. See also [method is_empty]. */
        size(): number /*i64*/
        
        /** Returns `true` if the dictionary is empty (its size is `0`). See also [method size]. */
        is_empty(): boolean
        
        /** Clears the dictionary, removing all entries from it. */
        clear(): void
        
        /** Adds entries from [param dictionary] to this dictionary. By default, duplicate keys are not copied over, unless [param overwrite] is `true`.  
         *    
         *      
         *  **Note:** [method merge] is  *not*  recursive. Nested dictionaries are considered as keys that can be overwritten or not depending on the value of [param overwrite], but they will never be merged together.  
         */
        merge(dictionary: Dictionary, overwrite: boolean = false): void
        
        /** Returns `true` if the dictionary contains an entry with the given [param key].  
         *    
         *  In GDScript, this is equivalent to the `in` operator:  
         *    
         *      
         *  **Note:** This method returns `true` as long as the [param key] exists, even if its corresponding value is `null`.  
         */
        has(key: any): boolean
        
        /** Returns `true` if the dictionary contains all keys in the given [param keys] array.  
         *    
         */
        has_all(keys: Array): boolean
        
        /** Finds and returns the first key whose associated value is equal to [param value], or `null` if it is not found.  
         *      
         *  **Note:** `null` is also a valid key. If inside the dictionary, [method find_key] may give misleading results.  
         */
        find_key(value: any): void
        
        /** Removes the dictionary entry by key, if it exists. Returns `true` if the given [param key] existed in the dictionary, otherwise `false`.  
         *      
         *  **Note:** Do not erase entries while iterating over the dictionary. You can iterate over the [method keys] array instead.  
         */
        erase(key: any): boolean
        
        /** Returns a hashed 32-bit integer value representing the dictionary contents.  
         *    
         *      
         *  **Note:** Dictionaries with the same entries but in a different order will not have the same hash.  
         *      
         *  **Note:** Dictionaries with equal hash values are  *not*  guaranteed to be the same, because of hash collisions. On the contrary, dictionaries with different hash values are guaranteed to be different.  
         */
        hash(): number /*i64*/
        
        /** Returns the list of keys in the dictionary. */
        keys(): Array
        
        /** Returns the list of values in this dictionary. */
        values(): Array
        
        /** Creates and returns a new copy of the dictionary. If [param deep] is `true`, inner [Dictionary] and [Array] keys and values are also copied, recursively. */
        duplicate(deep: boolean = false): Dictionary
        
        /** Returns the corresponding value for the given [param key] in the dictionary. If the [param key] does not exist, returns [param default], or `null` if the parameter is omitted. */
        get(key: any, default_: any = <any> {} /*compound.type from nil*/): void
        
        /** Makes the dictionary read-only, i.e. disables modification of the dictionary's contents. Does not apply to nested content, e.g. content of nested dictionaries. */
        make_read_only(): void
        
        /** Returns `true` if the dictionary is read-only. See [method make_read_only]. Dictionaries are automatically read-only if declared with `const` keyword. */
        is_read_only(): boolean
        static EQUAL(left: Dictionary, right: Dictionary): boolean
        static NOT_EQUAL(left: Dictionary, right: Dictionary): boolean
    }
    /** A built-in data structure that holds a sequence of elements.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_array.html  
     */
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
        set_indexed(index: number, value: any)
        get_indexed(index: number): any
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns a hashed 32-bit integer value representing the array and its contents.  
         *      
         *  **Note:** [Array]s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does  *not*  imply the arrays are equal, because different arrays can have identical hash values due to hash collisions.  
         */
        hash(): number /*i64*/
        
        /** Assigns elements of another [param array] into the array. Resizes the array to match [param array]. Performs type conversions if the array is typed. */
        assign(array: Array): void
        
        /** Appends an element at the end of the array. See also [method push_front]. */
        push_back(value: any): void
        
        /** Adds an element at the beginning of the array. See also [method push_back].  
         *      
         *  **Note:** On large arrays, this method is much slower than [method push_back] as it will reindex all the array's elements every time it's called. The larger the array, the slower [method push_front] will be.  
         */
        push_front(value: any): void
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: any): void
        
        /** Appends another array at the end of this array.  
         *    
         */
        append_array(array: Array): void
        
        /** Resizes the array to contain a different number of elements. If the array size is smaller, elements are cleared, if bigger, new elements are `null`. Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         *  Calling [method resize] once and assigning the new values is faster than adding new elements one by one.  
         *      
         *  **Note:** This method acts in-place and doesn't return a modified array.  
         */
        resize(size: number /*i64*/): number /*i64*/
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`pos == size()`). Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         *      
         *  **Note:** This method acts in-place and doesn't return a modified array.  
         *      
         *  **Note:** On large arrays, this method will be slower if the inserted element is close to the beginning of the array (index 0). This is because all elements placed after the newly inserted element have to be reindexed.  
         */
        insert(position: number /*i64*/, value: any): number /*i64*/
        
        /** Removes an element from the array by index. If the index does not exist in the array, nothing happens. To remove an element by searching for its value, use [method erase] instead.  
         *      
         *  **Note:** This method acts in-place and doesn't return a modified array.  
         *      
         *  **Note:** On large arrays, this method will be slower if the removed element is close to the beginning of the array (index 0). This is because all elements placed after the removed element have to be reindexed.  
         *      
         *  **Note:** [param position] cannot be negative. To remove an element relative to the end of the array, use `arr.remove_at(arr.size() - (i + 1))`. To remove the last element from the array without returning the value, use `arr.resize(arr.size() - 1)`.  
         */
        remove_at(position: number /*i64*/): void
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements:  
         *    
         *      
         *  **Note:** If [param value] is of a reference type ([Object]-derived, [Array], [Dictionary], etc.) then the array is filled with the references to the same object, i.e. no duplicates are created.  
         */
        fill(value: any): void
        
        /** Removes the first occurrence of a value from the array. If the value does not exist in the array, nothing happens. To remove an element by index, use [method remove_at] instead.  
         *      
         *  **Note:** This method acts in-place and doesn't return a modified array.  
         *      
         *  **Note:** On large arrays, this method will be slower if the removed element is close to the beginning of the array (index 0). This is because all elements placed after the removed element have to be reindexed.  
         *      
         *  **Note:** Do not erase entries while iterating over the array.  
         */
        erase(value: any): void
        
        /** Returns the first element of the array. Prints an error and returns `null` if the array is empty.  
         *      
         *  **Note:** Calling this function is not the same as writing `array[0]`. If the array is empty, accessing by index will pause project execution when running from the editor.  
         */
        front(): void
        
        /** Returns the last element of the array. Prints an error and returns `null` if the array is empty.  
         *      
         *  **Note:** Calling this function is not the same as writing `array[-1]`. If the array is empty, accessing by index will pause project execution when running from the editor.  
         */
        back(): void
        
        /** Returns a random value from the target array. Prints an error and returns `null` if the array is empty.  
         *    
         */
        pick_random(): void
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(what: any, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(what: any, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
        count(value: any): number /*i64*/
        
        /** Returns `true` if the array contains the given value.  
         *    
         *      
         *  **Note:** This is equivalent to using the `in` operator as follows:  
         *    
         */
        has(value: any): boolean
        
        /** Removes and returns the last element of the array. Returns `null` if the array is empty, without printing an error message. See also [method pop_front]. */
        pop_back(): void
        
        /** Removes and returns the first element of the array. Returns `null` if the array is empty, without printing an error message. See also [method pop_back].  
         *      
         *  **Note:** On large arrays, this method is much slower than [method pop_back] as it will reindex all the array's elements every time it's called. The larger the array, the slower [method pop_front] will be.  
         */
        pop_front(): void
        
        /** Removes and returns the element of the array at index [param position]. If negative, [param position] is considered relative to the end of the array. Leaves the array unchanged and returns `null` if the array is empty or if it's accessed out of bounds. An error message is printed when the array is accessed out of bounds, but not when the array is empty.  
         *      
         *  **Note:** On large arrays, this method can be slower than [method pop_back] as it will reindex the array's elements that are located after the removed element. The larger the array and the lower the index of the removed element, the slower [method pop_at] will be.  
         */
        pop_at(position: number /*i64*/): void
        
        /** Sorts the array.  
         *      
         *  **Note:** The sorting algorithm used is not [url=https://en.wikipedia.org/wiki/Sorting_algorithm#Stability]stable[/url]. This means that values considered equal may have their order changed when using [method sort].  
         *      
         *  **Note:** Strings are sorted in alphabetical order (as opposed to natural order). This may lead to unexpected behavior when sorting an array of strings ending with a sequence of numbers. Consider the following example:  
         *    
         *  To perform natural order sorting, you can use [method sort_custom] with [method String.naturalnocasecmp_to] as follows:  
         *    
         */
        sort(): void
        
        /** Sorts the array using a custom method. The custom method receives two arguments (a pair of elements from the array) and must return either `true` or `false`. For two elements `a` and `b`, if the given method returns `true`, element `b` will be after element `a` in the array.  
         *      
         *  **Note:** The sorting algorithm used is not [url=https://en.wikipedia.org/wiki/Sorting_algorithm#Stability]stable[/url]. This means that values considered equal may have their order changed when using [method sort_custom].  
         *      
         *  **Note:** You cannot randomize the return value as the heapsort algorithm expects a deterministic result. Randomizing the return value will result in unexpected behavior.  
         *    
         */
        sort_custom(func: Callable): void
        
        /** Shuffles the array such that the items will have a random order. This method uses the global random number generator common to methods such as [method @GlobalScope.randi]. Call [method @GlobalScope.randomize] to ensure that a new seed will be used each time if you want non-reproducible shuffling. */
        shuffle(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *    
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: any, before: boolean = true): number /*i64*/
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search and a custom comparison method. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array. The custom method receives two arguments (an element from the array and the value searched for) and must return `true` if the first argument is less than the second, and return `false` otherwise.  
         *      
         *  **Note:** The custom method must accept the two arguments in any order, you cannot rely on that the first argument will always be from the array.  
         *      
         *  **Note:** Calling [method bsearch_custom] on an unsorted array results in unexpected behavior.  
         */
        bsearch_custom(value: any, func: Callable, before: boolean = true): number /*i64*/
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns a copy of the array.  
         *  If [param deep] is `true`, a deep copy is performed: all nested arrays and dictionaries are duplicated and will not be shared with the original array. If `false`, a shallow copy is made and references to the original nested arrays and dictionaries are kept, so that modifying a sub-array or dictionary in the copy will also impact those referenced in the source array. Note that any [Object]-derived elements will be shallow copied regardless of the [param deep] setting.  
         */
        duplicate(deep: boolean = false): Array
        
        /** Returns the slice of the [Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         *  If specified, [param step] is the relative index between source elements. It can be negative, then [param begin] must be higher than [param end]. For example, `[0, 1, 2, 3, 4, 5].slice(5, 1, -2)` returns `[5, 3]`.  
         *  If [param deep] is true, each element will be copied by value rather than by reference.  
         *      
         *  **Note:** To include the first element when [param step] is negative, use `arr.slice(begin, -arr.size() - 1, step)` (i.e. `[0, 1, 2].slice(1, -4, -1)` returns `[1, 0]`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647, step: number /*i64*/ = 1, deep: boolean = false): Array
        
        /** Calls the provided [Callable] on each element in the array and returns a new array with the elements for which the method returned `true`.  
         *  The callable's method should take one [Variant] parameter (the current array element) and return a boolean value.  
         *    
         *  See also [method any], [method all], [method map] and [method reduce].  
         */
        filter(method: Callable): Array
        
        /** Calls the provided [Callable] for each element in the array and returns a new array filled with values returned by the method.  
         *  The callable's method should take one [Variant] parameter (the current array element) and can return any [Variant].  
         *    
         *  See also [method filter], [method reduce], [method any] and [method all].  
         */
        map(method: Callable): Array
        
        /** Calls the provided [Callable] for each element in array and accumulates the result in [param accum].  
         *  The callable's method takes two arguments: the current value of [param accum] and the current array element. If [param accum] is `null` (default value), the iteration will start from the second element, with the first one used as initial value of [param accum].  
         *    
         *  See also [method map], [method filter], [method any] and [method all].  
         */
        reduce(method: Callable, accum: any = <any> {} /*compound.type from nil*/): void
        
        /** Calls the provided [Callable] on each element in the array and returns `true` if the [Callable] returns `true` for  *one or more*  elements in the array. If the [Callable] returns `false` for all elements in the array, this method returns `false`.  
         *  The callable's method should take one [Variant] parameter (the current array element) and return a boolean value.  
         *    
         *  See also [method all], [method filter], [method map] and [method reduce].  
         *      
         *  **Note:** Unlike relying on the size of an array returned by [method filter], this method will return as early as possible to improve performance (especially with large arrays).  
         *      
         *  **Note:** For an empty array, this method always returns `false`.  
         */
        any(method: Callable): boolean
        
        /** Calls the provided [Callable] on each element in the array and returns `true` if the [Callable] returns `true` for  *all*  elements in the array. If the [Callable] returns `false` for one array element or more, this method returns `false`.  
         *  The callable's method should take one [Variant] parameter (the current array element) and return a boolean value.  
         *    
         *  See also [method any], [method filter], [method map] and [method reduce].  
         *      
         *  **Note:** Unlike relying on the size of an array returned by [method filter], this method will return as early as possible to improve performance (especially with large arrays).  
         *      
         *  **Note:** For an empty array, this method [url=https://en.wikipedia.org/wiki/Vacuous_truth]always[/url] returns `true`.  
         */
        all(method: Callable): boolean
        
        /** Returns the maximum value contained in the array if all elements are of comparable types. If the elements can't be compared, `null` is returned.  
         *  To find the maximum value using a custom comparator, you can use [method reduce]. In this example every array element is checked and the first maximum value is returned:  
         *    
         */
        max(): void
        
        /** Returns the minimum value contained in the array if all elements are of comparable types. If the elements can't be compared, `null` is returned.  
         *  See also [method max] for an example of using a custom comparator.  
         */
        min(): void
        
        /** Returns `true` if the array is typed. Typed arrays can only store elements of their associated type and provide type safety for the `[]` operator. Methods of typed array still return [Variant]. */
        is_typed(): boolean
        
        /** Returns `true` if the array is typed the same as [param array]. */
        is_same_typed(array: Array): boolean
        
        /** Returns the built-in type of the typed array as a [enum Variant.Type] constant. If the array is not typed, returns [constant TYPE_NIL]. */
        get_typed_builtin(): number /*i64*/
        
        /** Returns the **native** class name of the typed array if the built-in type is [constant TYPE_OBJECT]. Otherwise, this method returns an empty string. */
        get_typed_class_name(): StringName
        
        /** Returns the script associated with the typed array. This method returns a [Script] instance or `null`. */
        get_typed_script(): void
        
        /** Makes the array read-only, i.e. disabled modifying of the array's elements. Does not apply to nested content, e.g. content of nested arrays. */
        make_read_only(): void
        
        /** Returns `true` if the array is read-only. See [method make_read_only]. Arrays are automatically read-only if declared with `const` keyword. */
        is_read_only(): boolean
        static EQUAL(left: Array, right: Array): boolean
        static NOT_EQUAL(left: Array, right: Array): boolean
        static LESS(left: Array, right: Array): boolean
        static LESS_EQUAL(left: Array, right: Array): boolean
        static GREATER(left: Array, right: Array): boolean
        static GREATER_EQUAL(left: Array, right: Array): boolean
    }
    /** A packed array of bytes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedbytearray.html  
     */
    class PackedByteArray {
        constructor()
        constructor(from: PackedByteArray)
        constructor(from: Array)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the byte at the given index. */
        set(index: number /*i64*/, value: number /*i64*/): void
        
        /** Appends an element at the end of the array. */
        push_back(value: number /*i64*/): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: number /*i64*/): boolean
        
        /** Appends a [PackedByteArray] at the end of this array. */
        append_array(array: PackedByteArray): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: number /*i64*/): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: number /*i64*/): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedByteArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedByteArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedByteArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
        count(value: number /*i64*/): number /*i64*/
        
        /** Converts ASCII/Latin-1 encoded array to [String]. Fast alternative to [method get_string_from_utf8] if the content is ASCII/Latin-1 only. Unlike the UTF-8 function this function maps every byte to a character in the array. Multibyte sequences will not be interpreted correctly. For parsing user input always use [method get_string_from_utf8]. This is the inverse of [method String.to_ascii_buffer]. */
        get_string_from_ascii(): string
        
        /** Converts UTF-8 encoded array to [String]. Slower than [method get_string_from_ascii] but supports UTF-8 encoded data. Use this function if you are unsure about the source of the data. For user input this function should always be preferred. Returns empty string if source array is not valid UTF-8 string. This is the inverse of [method String.to_utf8_buffer]. */
        get_string_from_utf8(): string
        
        /** Converts UTF-16 encoded array to [String]. If the BOM is missing, system endianness is assumed. Returns empty string if source array is not valid UTF-16 string. This is the inverse of [method String.to_utf16_buffer]. */
        get_string_from_utf16(): string
        
        /** Converts UTF-32 encoded array to [String]. System endianness is assumed. Returns empty string if source array is not valid UTF-32 string. This is the inverse of [method String.to_utf32_buffer]. */
        get_string_from_utf32(): string
        
        /** Converts wide character (`wchar_t`, UTF-16 on Windows, UTF-32 on other platforms) encoded array to [String]. Returns empty string if source array is not valid wide string. This is the inverse of [method String.to_wchar_buffer]. */
        get_string_from_wchar(): string
        
        /** Returns a hexadecimal representation of this array as a [String].  
         *    
         */
        hex_encode(): string
        
        /** Returns a new [PackedByteArray] with the data compressed. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. */
        compress(compression_mode: number /*i64*/ = 0): PackedByteArray
        
        /** Returns a new [PackedByteArray] with the data decompressed. Set [param buffer_size] to the size of the uncompressed data. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants.  
         *      
         *  **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.  
         */
        decompress(buffer_size: number /*i64*/, compression_mode: number /*i64*/ = 0): PackedByteArray
        
        /** Returns a new [PackedByteArray] with the data decompressed. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. **This method only accepts brotli, gzip, and deflate compression modes.**  
         *  This method is potentially slower than [method decompress], as it may have to re-allocate its output buffer multiple times while decompressing, whereas [method decompress] knows it's output buffer size from the beginning.  
         *  GZIP has a maximal compression ratio of 1032:1, meaning it's very possible for a small compressed payload to decompress to a potentially very large output. To guard against this, you may provide a maximum size this function is allowed to allocate in bytes via [param max_output_size]. Passing -1 will allow for unbounded output. If any positive value is passed, and the decompression exceeds that amount in bytes, then an error will be returned.  
         *      
         *  **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.  
         */
        decompress_dynamic(max_output_size: number /*i64*/, compression_mode: number /*i64*/ = 0): PackedByteArray
        
        /** Decodes a 8-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_u8(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 8-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_s8(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 16-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_u16(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 16-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_s16(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 32-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_u32(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 32-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_s32(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 64-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_u64(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 64-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded. */
        decode_s64(byte_offset: number /*i64*/): number /*i64*/
        
        /** Decodes a 16-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded. */
        decode_half(byte_offset: number /*i64*/): number /*f64*/
        
        /** Decodes a 32-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded. */
        decode_float(byte_offset: number /*i64*/): number /*f64*/
        
        /** Decodes a 64-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded. */
        decode_double(byte_offset: number /*i64*/): number /*f64*/
        
        /** Returns `true` if a valid [Variant] value can be decoded at the [param byte_offset]. Returns `false` otherwise or when the value is [Object]-derived and [param allow_objects] is `false`. */
        has_encoded_var(byte_offset: number /*i64*/, allow_objects: boolean = false): boolean
        
        /** Decodes a [Variant] from the bytes starting at [param byte_offset]. Returns `null` if a valid variant can't be decoded or the value is [Object]-derived and [param allow_objects] is `false`. */
        decode_var(byte_offset: number /*i64*/, allow_objects: boolean = false): void
        
        /** Decodes a size of a [Variant] from the bytes starting at [param byte_offset]. Requires at least 4 bytes of data starting at the offset, otherwise fails. */
        decode_var_size(byte_offset: number /*i64*/, allow_objects: boolean = false): number /*i64*/
        
        /** Returns a copy of the data converted to a [PackedInt32Array], where each block of 4 bytes has been converted to a signed 32-bit integer (C++ `int32_t`).  
         *  The size of the input array must be a multiple of 4 (size of 32-bit integer). The size of the new array will be `byte_array.size() / 4`.  
         *  If the original data can't be converted to signed 32-bit integers, the resulting data is undefined.  
         */
        to_int32_array(): PackedInt32Array
        
        /** Returns a copy of the data converted to a [PackedInt64Array], where each block of 8 bytes has been converted to a signed 64-bit integer (C++ `int64_t`, Godot [int]).  
         *  The size of the input array must be a multiple of 8 (size of 64-bit integer). The size of the new array will be `byte_array.size() / 8`.  
         *  If the original data can't be converted to signed 64-bit integers, the resulting data is undefined.  
         */
        to_int64_array(): PackedInt64Array
        
        /** Returns a copy of the data converted to a [PackedFloat32Array], where each block of 4 bytes has been converted to a 32-bit float (C++ [code skip-lint]float`).  
         *  The size of the input array must be a multiple of 4 (size of 32-bit float). The size of the new array will be `byte_array.size() / 4`.  
         *  If the original data can't be converted to 32-bit floats, the resulting data is undefined.  
         */
        to_float32_array(): PackedFloat32Array
        
        /** Returns a copy of the data converted to a [PackedFloat64Array], where each block of 8 bytes has been converted to a 64-bit float (C++ `double`, Godot [float]).  
         *  The size of the input array must be a multiple of 8 (size of 64-bit double). The size of the new array will be `byte_array.size() / 8`.  
         *  If the original data can't be converted to 64-bit floats, the resulting data is undefined.  
         */
        to_float64_array(): PackedFloat64Array
        
        /** Encodes a 8-bit unsigned integer number (byte) at the index of [param byte_offset] bytes. The array must have at least 1 byte of space, starting at the offset. */
        encode_u8(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 8-bit signed integer number (signed byte) at the index of [param byte_offset] bytes. The array must have at least 1 byte of space, starting at the offset. */
        encode_s8(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 16-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
        encode_u16(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 16-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
        encode_s16(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 32-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
        encode_u32(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 32-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
        encode_s32(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 64-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of space, starting at the offset. */
        encode_u64(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 64-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of space, starting at the offset. */
        encode_s64(byte_offset: number /*i64*/, value: number /*i64*/): void
        
        /** Encodes a 16-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
        encode_half(byte_offset: number /*i64*/, value: number /*f64*/): void
        
        /** Encodes a 32-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
        encode_float(byte_offset: number /*i64*/, value: number /*f64*/): void
        
        /** Encodes a 64-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of allocated space, starting at the offset. */
        encode_double(byte_offset: number /*i64*/, value: number /*f64*/): void
        
        /** Encodes a [Variant] at the index of [param byte_offset] bytes. A sufficient space must be allocated, depending on the encoded variant's size. If [param allow_objects] is `false`, [Object]-derived values are not permitted and will instead be serialized as ID-only. */
        encode_var(byte_offset: number /*i64*/, value: any, allow_objects: boolean = false): number /*i64*/
        static EQUAL(left: PackedByteArray, right: PackedByteArray): boolean
        static NOT_EQUAL(left: PackedByteArray, right: PackedByteArray): boolean
    }
    /** A packed array of 32-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedint32array.html  
     */
    class PackedInt32Array {
        constructor()
        constructor(from: PackedInt32Array)
        constructor(from: Array)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: number /*i64*/, value: number /*i64*/): void
        
        /** Appends a value to the array. */
        push_back(value: number /*i64*/): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: number /*i64*/): boolean
        
        /** Appends a [PackedInt32Array] at the end of this array. */
        append_array(array: PackedInt32Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: number /*i64*/): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: number /*i64*/): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedInt32Array
        
        /** Returns a copy of the data converted to a [PackedByteArray], where each element have been encoded as 4 bytes.  
         *  The size of the new array will be `int32_array.size() * 4`.  
         */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
        count(value: number /*i64*/): number /*i64*/
        static EQUAL(left: PackedInt32Array, right: PackedInt32Array): boolean
        static NOT_EQUAL(left: PackedInt32Array, right: PackedInt32Array): boolean
    }
    /** A packed array of 64-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedint64array.html  
     */
    class PackedInt64Array {
        constructor()
        constructor(from: PackedInt64Array)
        constructor(from: Array)
        set_indexed(index: number, value: number /*i64*/)
        get_indexed(index: number): number /*i64*/
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: number /*i64*/, value: number /*i64*/): void
        
        /** Appends a value to the array. */
        push_back(value: number /*i64*/): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: number /*i64*/): boolean
        
        /** Appends a [PackedInt64Array] at the end of this array. */
        append_array(array: PackedInt64Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: number /*i64*/): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: number /*i64*/): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: number /*i64*/): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedInt64Array
        
        /** Returns a copy of the data converted to a [PackedByteArray], where each element have been encoded as 8 bytes.  
         *  The size of the new array will be `int64_array.size() * 8`.  
         */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: number /*i64*/, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: number /*i64*/, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: number /*i64*/, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
        count(value: number /*i64*/): number /*i64*/
        static EQUAL(left: PackedInt64Array, right: PackedInt64Array): boolean
        static NOT_EQUAL(left: PackedInt64Array, right: PackedInt64Array): boolean
    }
    /** A packed array of 32-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedfloat32array.html  
     */
    class PackedFloat32Array {
        constructor()
        constructor(from: PackedFloat32Array)
        constructor(from: Array)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the float at the given index. */
        set(index: number /*i64*/, value: number /*f64*/): void
        
        /** Appends an element at the end of the array. */
        push_back(value: number /*f64*/): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: number /*f64*/): boolean
        
        /** Appends a [PackedFloat32Array] at the end of this array. */
        append_array(array: PackedFloat32Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: number /*f64*/): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: number /*f64*/): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedFloat32Array
        
        /** Returns a copy of the data converted to a [PackedByteArray], where each element have been encoded as 4 bytes.  
         *  The size of the new array will be `float32_array.size() * 4`.  
         */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: number /*f64*/, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: number /*f64*/, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: number /*f64*/, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: number /*f64*/): number /*i64*/
        static EQUAL(left: PackedFloat32Array, right: PackedFloat32Array): boolean
        static NOT_EQUAL(left: PackedFloat32Array, right: PackedFloat32Array): boolean
    }
    /** A packed array of 64-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedfloat64array.html  
     */
    class PackedFloat64Array {
        constructor()
        constructor(from: PackedFloat64Array)
        constructor(from: Array)
        set_indexed(index: number, value: number /*f64*/)
        get_indexed(index: number): number /*f64*/
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the float at the given index. */
        set(index: number /*i64*/, value: number /*f64*/): void
        
        /** Appends an element at the end of the array. */
        push_back(value: number /*f64*/): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: number /*f64*/): boolean
        
        /** Appends a [PackedFloat64Array] at the end of this array. */
        append_array(array: PackedFloat64Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: number /*f64*/): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: number /*f64*/): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: number /*f64*/): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedFloat64Array
        
        /** Returns a copy of the data converted to a [PackedByteArray], where each element have been encoded as 8 bytes.  
         *  The size of the new array will be `float64_array.size() * 8`.  
         */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: number /*f64*/, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: number /*f64*/, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: number /*f64*/, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: number /*f64*/): number /*i64*/
        static EQUAL(left: PackedFloat64Array, right: PackedFloat64Array): boolean
        static NOT_EQUAL(left: PackedFloat64Array, right: PackedFloat64Array): boolean
    }
    /** A packed array of [String]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedstringarray.html  
     */
    class PackedStringArray {
        constructor()
        constructor(from: PackedStringArray)
        constructor(from: Array)
        set_indexed(index: number, value: string)
        get_indexed(index: number): string
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [String] at the given index. */
        set(index: number /*i64*/, value: string): void
        
        /** Appends a string element at end of the array. */
        push_back(value: string): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: string): boolean
        
        /** Appends a [PackedStringArray] at the end of this array. */
        append_array(array: PackedStringArray): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: string): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: string): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: string): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedStringArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedStringArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedStringArray
        
        /** Returns a [PackedByteArray] with each string encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: string, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedStringArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: string, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: string, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
        count(value: string): number /*i64*/
        static EQUAL(left: PackedStringArray, right: PackedStringArray): boolean
        static NOT_EQUAL(left: PackedStringArray, right: PackedStringArray): boolean
    }
    /** A packed array of [Vector2]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedvector2array.html  
     */
    class PackedVector2Array {
        constructor()
        constructor(from: PackedVector2Array)
        constructor(from: Array)
        set_indexed(index: number, value: Vector2)
        get_indexed(index: number): Vector2
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Vector2] at the given index. */
        set(index: number /*i64*/, value: Vector2): void
        
        /** Inserts a [Vector2] at the end. */
        push_back(value: Vector2): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector2): boolean
        
        /** Appends a [PackedVector2Array] at the end of this array. */
        append_array(array: PackedVector2Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: Vector2): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector2): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: Vector2): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedVector2Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector2Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedVector2Array
        
        /** Returns a [PackedByteArray] with each vector encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: Vector2, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector2Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector2, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector2, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector2): number /*i64*/
        static EQUAL(left: PackedVector2Array, right: PackedVector2Array): boolean
        static NOT_EQUAL(left: PackedVector2Array, right: PackedVector2Array): boolean
    }
    /** A packed array of [Vector3]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedvector3array.html  
     */
    class PackedVector3Array {
        constructor()
        constructor(from: PackedVector3Array)
        constructor(from: Array)
        set_indexed(index: number, value: Vector3)
        get_indexed(index: number): Vector3
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Vector3] at the given index. */
        set(index: number /*i64*/, value: Vector3): void
        
        /** Inserts a [Vector3] at the end. */
        push_back(value: Vector3): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector3): boolean
        
        /** Appends a [PackedVector3Array] at the end of this array. */
        append_array(array: PackedVector3Array): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: Vector3): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector3): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: Vector3): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedVector3Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector3Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedVector3Array
        
        /** Returns a [PackedByteArray] with each vector encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: Vector3, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector3Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector3, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector3, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector3): number /*i64*/
        static EQUAL(left: PackedVector3Array, right: PackedVector3Array): boolean
        static NOT_EQUAL(left: PackedVector3Array, right: PackedVector3Array): boolean
    }
    /** A packed array of [Color]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedcolorarray.html  
     */
    class PackedColorArray {
        constructor()
        constructor(from: PackedColorArray)
        constructor(from: Array)
        set_indexed(index: number, value: Color)
        get_indexed(index: number): Color
        
        /** Returns the number of elements in the array. */
        size(): number /*i64*/
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Color] at the given index. */
        set(index: number /*i64*/, value: Color): void
        
        /** Appends a value to the array. */
        push_back(value: Color): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Color): boolean
        
        /** Appends a [PackedColorArray] at the end of this array. */
        append_array(array: PackedColorArray): void
        
        /** Removes an element from the array by index. */
        remove_at(index: number /*i64*/): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: number /*i64*/, value: Color): number /*i64*/
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Color): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: number /*i64*/): number /*i64*/
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: Color): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedColorArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedColorArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: number /*i64*/, end: number /*i64*/ = 2147483647): PackedColorArray
        
        /** Returns a [PackedByteArray] with each color encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: Color, before: boolean = true): number /*i64*/
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedColorArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: Color, from: number /*i64*/ = 0): number /*i64*/
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: Color, from: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the number of times an element is in the array. */
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
    static function sin(angle_rad: number /*f64*/): number /*f64*/
    static function cos(angle_rad: number /*f64*/): number /*f64*/
    static function tan(angle_rad: number /*f64*/): number /*f64*/
    static function sinh(x: number /*f64*/): number /*f64*/
    static function cosh(x: number /*f64*/): number /*f64*/
    static function tanh(x: number /*f64*/): number /*f64*/
    static function asin(x: number /*f64*/): number /*f64*/
    static function acos(x: number /*f64*/): number /*f64*/
    static function atan(x: number /*f64*/): number /*f64*/
    static function atan2(y: number /*f64*/, x: number /*f64*/): number /*f64*/
    static function asinh(x: number /*f64*/): number /*f64*/
    static function acosh(x: number /*f64*/): number /*f64*/
    static function atanh(x: number /*f64*/): number /*f64*/
    static function sqrt(x: number /*f64*/): number /*f64*/
    static function fmod(x: number /*f64*/, y: number /*f64*/): number /*f64*/
    static function fposmod(x: number /*f64*/, y: number /*f64*/): number /*f64*/
    static function posmod(x: number /*i64*/, y: number /*i64*/): number /*i64*/
    static function floor(x: any): void
    static function floorf(x: number /*f64*/): number /*f64*/
    static function floori(x: number /*f64*/): number /*i64*/
    static function ceil(x: any): void
    static function ceilf(x: number /*f64*/): number /*f64*/
    static function ceili(x: number /*f64*/): number /*i64*/
    static function round(x: any): void
    static function roundf(x: number /*f64*/): number /*f64*/
    static function roundi(x: number /*f64*/): number /*i64*/
    static function abs(x: any): void
    static function absf(x: number /*f64*/): number /*f64*/
    static function absi(x: number /*i64*/): number /*i64*/
    static function sign(x: any): void
    static function signf(x: number /*f64*/): number /*f64*/
    static function signi(x: number /*i64*/): number /*i64*/
    static function snapped(x: any, step: any): void
    static function snappedf(x: number /*f64*/, step: number /*f64*/): number /*f64*/
    static function snappedi(x: number /*f64*/, step: number /*i64*/): number /*i64*/
    static function pow(base: number /*f64*/, exp: number /*f64*/): number /*f64*/
    static function log(x: number /*f64*/): number /*f64*/
    static function exp(x: number /*f64*/): number /*f64*/
    static function is_nan(x: number /*f64*/): boolean
    static function is_inf(x: number /*f64*/): boolean
    static function is_equal_approx(a: number /*f64*/, b: number /*f64*/): boolean
    static function is_zero_approx(x: number /*f64*/): boolean
    static function is_finite(x: number /*f64*/): boolean
    static function ease(x: number /*f64*/, curve: number /*f64*/): number /*f64*/
    static function step_decimals(x: number /*f64*/): number /*i64*/
    static function lerp(from: any, to: any, weight: any): void
    static function lerpf(from: number /*f64*/, to: number /*f64*/, weight: number /*f64*/): number /*f64*/
    static function cubic_interpolate(from: number /*f64*/, to: number /*f64*/, pre: number /*f64*/, post: number /*f64*/, weight: number /*f64*/): number /*f64*/
    static function cubic_interpolate_angle(from: number /*f64*/, to: number /*f64*/, pre: number /*f64*/, post: number /*f64*/, weight: number /*f64*/): number /*f64*/
    static function cubic_interpolate_in_time(from: number /*f64*/, to: number /*f64*/, pre: number /*f64*/, post: number /*f64*/, weight: number /*f64*/, to_t: number /*f64*/, pre_t: number /*f64*/, post_t: number /*f64*/): number /*f64*/
    static function cubic_interpolate_angle_in_time(from: number /*f64*/, to: number /*f64*/, pre: number /*f64*/, post: number /*f64*/, weight: number /*f64*/, to_t: number /*f64*/, pre_t: number /*f64*/, post_t: number /*f64*/): number /*f64*/
    static function bezier_interpolate(start: number /*f64*/, control_1: number /*f64*/, control_2: number /*f64*/, end: number /*f64*/, t: number /*f64*/): number /*f64*/
    static function bezier_derivative(start: number /*f64*/, control_1: number /*f64*/, control_2: number /*f64*/, end: number /*f64*/, t: number /*f64*/): number /*f64*/
    static function angle_difference(from: number /*f64*/, to: number /*f64*/): number /*f64*/
    static function lerp_angle(from: number /*f64*/, to: number /*f64*/, weight: number /*f64*/): number /*f64*/
    static function inverse_lerp(from: number /*f64*/, to: number /*f64*/, weight: number /*f64*/): number /*f64*/
    static function remap(value: number /*f64*/, istart: number /*f64*/, istop: number /*f64*/, ostart: number /*f64*/, ostop: number /*f64*/): number /*f64*/
    static function smoothstep(from: number /*f64*/, to: number /*f64*/, x: number /*f64*/): number /*f64*/
    static function move_toward(from: number /*f64*/, to: number /*f64*/, delta: number /*f64*/): number /*f64*/
    static function rotate_toward(from: number /*f64*/, to: number /*f64*/, delta: number /*f64*/): number /*f64*/
    static function deg_to_rad(deg: number /*f64*/): number /*f64*/
    static function rad_to_deg(rad: number /*f64*/): number /*f64*/
    static function linear_to_db(lin: number /*f64*/): number /*f64*/
    static function db_to_linear(db: number /*f64*/): number /*f64*/
    static function wrap(value: any, min: any, max: any): void
    static function wrapi(value: number /*i64*/, min: number /*i64*/, max: number /*i64*/): number /*i64*/
    static function wrapf(value: number /*f64*/, min: number /*f64*/, max: number /*f64*/): number /*f64*/
    static function max(...vargargs: any[]): void
    static function maxi(a: number /*i64*/, b: number /*i64*/): number /*i64*/
    static function maxf(a: number /*f64*/, b: number /*f64*/): number /*f64*/
    static function min(...vargargs: any[]): void
    static function mini(a: number /*i64*/, b: number /*i64*/): number /*i64*/
    static function minf(a: number /*f64*/, b: number /*f64*/): number /*f64*/
    static function clamp(value: any, min: any, max: any): void
    static function clampi(value: number /*i64*/, min: number /*i64*/, max: number /*i64*/): number /*i64*/
    static function clampf(value: number /*f64*/, min: number /*f64*/, max: number /*f64*/): number /*f64*/
    static function nearest_po2(value: number /*i64*/): number /*i64*/
    static function pingpong(value: number /*f64*/, length: number /*f64*/): number /*f64*/
    static function randomize(): void
    static function randi(): number /*i64*/
    static function randf(): number /*f64*/
    static function randi_range(from: number /*i64*/, to: number /*i64*/): number /*i64*/
    static function randf_range(from: number /*f64*/, to: number /*f64*/): number /*f64*/
    static function randfn(mean: number /*f64*/, deviation: number /*f64*/): number /*f64*/
    static function seed(base: number /*i64*/): void
    static function rand_from_seed(seed: number /*i64*/): PackedInt64Array
    static function weakref(obj: any): void
    // [INVALID_NAME]: static function typeof(variable: any): number /*i64*/
    static function type_convert(variant: any, type: number /*i64*/): void
    static function str(...vargargs: any[]): string
    static function error_string(error: number /*i64*/): string
    static function type_string(type: number /*i64*/): string
    static function print(...vargargs: any[]): void
    static function print_rich(...vargargs: any[]): void
    static function printerr(...vargargs: any[]): void
    static function printt(...vargargs: any[]): void
    static function prints(...vargargs: any[]): void
    static function printraw(...vargargs: any[]): void
    static function print_verbose(...vargargs: any[]): void
    static function push_error(...vargargs: any[]): void
    static function push_warning(...vargargs: any[]): void
    static function var_to_str(variable: any): string
    static function str_to_var(string_: string): void
    static function var_to_bytes(variable: any): PackedByteArray
    static function bytes_to_var(bytes: PackedByteArray): void
    static function var_to_bytes_with_objects(variable: any): PackedByteArray
    static function bytes_to_var_with_objects(bytes: PackedByteArray): void
    static function hash(variable: any): number /*i64*/
    static function instance_from_id(instance_id: number /*i64*/): Object
    static function is_instance_id_valid(id: number /*i64*/): boolean
    static function is_instance_valid(instance: any): boolean
    static function rid_allocate_id(): number /*i64*/
    static function rid_from_int64(base: number /*i64*/): RID
    static function is_same(a: any, b: any): boolean
}
