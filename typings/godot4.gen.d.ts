// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** Occluder shape resource for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_occluder3d.html  
     */
    class Occluder3D extends Resource {
        /** Returns the occluder shape's vertex positions. */
        get_vertices(): PackedVector3Array
        
        /** Returns the occluder shape's vertex indices. */
        get_indices(): PackedInt32Array
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_occluderinstance3d.html  
     */
    class OccluderInstance3D extends Node3D {
        set_bake_mask(mask: number /*i64*/): void
        get_bake_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_bake_mask_value(layer_number: number /*i64*/): boolean
        set_bake_simplification_distance(simplification_distance: number /*f64*/): void
        get_bake_simplification_distance(): number /*f64*/
        set_occluder(occluder: Occluder3D): void
        get_occluder(): Occluder3D
        _is_editable_3d_polygon(): boolean
        _get_editable_3d_polygon_resource(): Resource
        
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.  
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.  
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].  
         */
        occluder: Occluder3D
        
        /** The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with  *opaque*  materials are taken into account for the occluder baking.  
         *  To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].  
         */
        bake_mask: number /*i64*/
        
        /** The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.  
         *  The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry  *perceptually*  unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.  
         *  Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.  
         *      
         *  **Note:** This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.  
         */
        bake_simplification_distance: number /*f64*/
    }
    class OccluderInstance3DEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class OccluderInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace OccluderPolygon2D {
        enum CullMode {
            /** Culling is disabled. See [member cull_mode]. */
            CULL_DISABLED = 0,
            
            /** Culling is performed in the clockwise direction. See [member cull_mode]. */
            CULL_CLOCKWISE = 1,
            
            /** Culling is performed in the counterclockwise direction. See [member cull_mode]. */
            CULL_COUNTER_CLOCKWISE = 2,
        }
    }
    /** Defines a 2D polygon for LightOccluder2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_occluderpolygon2d.html  
     */
    class OccluderPolygon2D extends Resource {
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_cull_mode(cull_mode: OccluderPolygon2D.CullMode): void
        get_cull_mode(): OccluderPolygon2D.CullMode
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        
        /** If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction. */
        closed: boolean
        
        /** The culling mode to use. */
        cull_mode: number /*i64*/
        
        /** A [Vector2] array with the index for polygon's vertices positions.  
         *      
         *  **Note:** The returned value is a copy of the underlying array, rather than a reference.  
         */
        polygon: PackedVector2Array
    }
    /** A [MultiplayerPeer] which is always connected and acts as a server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_offlinemultiplayerpeer.html  
     */
    class OfflineMultiplayerPeer extends MultiplayerPeer {
    }
    /** A sequence of Ogg packets.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_oggpacketsequence.html  
     */
    class OggPacketSequence extends Resource {
        set_packet_data(packet_data: Array): void
        get_packet_data(): Array
        set_packet_granule_positions(granule_positions: PackedInt64Array): void
        get_packet_granule_positions(): PackedInt64Array
        set_sampling_rate(sampling_rate: number /*f64*/): void
        get_sampling_rate(): number /*f64*/
        
        /** The length of this stream, in seconds. */
        get_length(): number /*f64*/
        
        /** Contains the raw packets that make up this OggPacketSequence. */
        packet_data: Array
        
        /** Contains the granule positions for each page in this packet sequence. */
        granule_positions: PackedInt64Array
        
        /** Holds sample rate information about this sequence. Must be set by another class that actually understands the codec. */
        sampling_rate: number /*f64*/
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_oggpacketsequenceplayback.html */
    class OggPacketSequencePlayback extends RefCounted {
    }
    namespace OmniLight3D {
        enum ShadowMode {
            /** Shadows are rendered to a dual-paraboloid texture. Faster than [constant SHADOW_CUBE], but lower-quality. */
            SHADOW_DUAL_PARABOLOID = 0,
            
            /** Shadows are rendered to a cubemap. Slower than [constant SHADOW_DUAL_PARABOLOID], but higher-quality. */
            SHADOW_CUBE = 1,
        }
    }
    /** Omnidirectional light, such as a light bulb or a candle.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_omnilight3d.html  
     */
    class OmniLight3D extends Light3D {
        set_shadow_mode(mode: OmniLight3D.ShadowMode): void
        get_shadow_mode(): OmniLight3D.ShadowMode
        
        /** See [enum ShadowMode]. */
        omni_shadow_mode: number /*i64*/
    }
    /** Makes the OpenXR API available for GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrapiextension.html  
     */
    class OpenXRAPIExtension extends RefCounted {
        /** Returns the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrInstance.html]XrInstance[/url] created during the initialization of the OpenXR API. */
        get_instance(): number /*i64*/
        
        /** Returns the id of the system, which is a [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSystemId.html]XrSystemId[/url] cast to an integer. */
        get_system_id(): number /*i64*/
        
        /** Returns the OpenXR session, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSession.html]XrSession[/url] cast to an integer. */
        get_session(): number /*i64*/
        
        /** Creates a [Transform3D] from an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrPosef.html]XrPosef[/url]. */
        transform_from_pose(pose: number /*i64*/): Transform3D
        
        /** Returns `true` if the provided [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] (cast to an integer) is successful. Otherwise returns `false` and prints the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] converted to a string, with the specified additional information. */
        xr_result(result: number /*i64*/, format: string, args: Array): boolean
        
        /** Returns `true` if OpenXR is enabled. */
        static openxr_is_enabled(check_run_in_editor: boolean): boolean
        
        /** Returns the function pointer of the OpenXR function with the specified name, cast to an integer. If the function with the given name does not exist, the method returns `0`.  
         *      
         *  **Note:** `openxr/util.h` contains utility macros for acquiring OpenXR functions, e.g. `GDEXTENSION_INIT_XR_FUNC_V(xrCreateAction)`.  
         */
        get_instance_proc_addr(name: string): number /*i64*/
        
        /** Returns an error string for the given [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url]. */
        get_error_string(result: number /*i64*/): string
        
        /** Returns the name of the specified swapchain format. */
        get_swapchain_format_name(swapchain_format: number /*i64*/): string
        
        /** Returns `true` if OpenXR is initialized. */
        is_initialized(): boolean
        
        /** Returns `true` if OpenXR is running ([url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/xrBeginSession.html]xrBeginSession[/url] was successfully called and the swapchains were created). */
        is_running(): boolean
        
        /** Returns the play space, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSpace.html]XrSpace[/url] cast to an integer. */
        get_play_space(): number /*i64*/
        
        /** Returns the timing for the next frame. */
        get_next_frame_time(): number /*i64*/
        
        /** Returns `true` if OpenXR is initialized for rendering with an XR viewport. */
        can_render(): boolean
    }
    namespace OpenXRAction {
        enum ActionType {
            /** This action provides a boolean value. */
            OPENXR_ACTION_BOOL = 0,
            
            /** This action provides a float value between `0.0` and `1.0` for any analog input such as triggers. */
            OPENXR_ACTION_FLOAT = 1,
            
            /** This action provides a [Vector2] value and can be bound to embedded trackpads and joysticks. */
            OPENXR_ACTION_VECTOR2 = 2,
            OPENXR_ACTION_POSE = 3,
        }
    }
    /** An OpenXR action.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxraction.html  
     */
    class OpenXRAction extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_action_type(action_type: OpenXRAction.ActionType): void
        get_action_type(): OpenXRAction.ActionType
        set_toplevel_paths(toplevel_paths: PackedStringArray): void
        get_toplevel_paths(): PackedStringArray
        
        /** The localized description of this action. */
        localized_name: string
        
        /** The type of action. */
        action_type: number /*i64*/
        
        /** A collections of toplevel paths to which this action can be bound. */
        toplevel_paths: PackedStringArray
    }
    /** Collection of [OpenXRActionSet] and [OpenXRInteractionProfile] resources for the OpenXR module.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxractionmap.html  
     */
    class OpenXRActionMap extends Resource {
        set_action_sets(action_sets: Array): void
        get_action_sets(): Array
        
        /** Retrieve the number of actions sets in our action map. */
        get_action_set_count(): number /*i64*/
        
        /** Retrieve an action set by name. */
        find_action_set(name: string): OpenXRActionSet
        
        /** Retrieve the action set at this index. */
        get_action_set(idx: number /*i64*/): OpenXRActionSet
        
        /** Add an action set. */
        add_action_set(action_set: OpenXRActionSet): void
        
        /** Remove an action set. */
        remove_action_set(action_set: OpenXRActionSet): void
        set_interaction_profiles(interaction_profiles: Array): void
        get_interaction_profiles(): Array
        
        /** Retrieve the number of interaction profiles in our action map. */
        get_interaction_profile_count(): number /*i64*/
        
        /** Find an interaction profile by its name (path). */
        find_interaction_profile(name: string): OpenXRInteractionProfile
        
        /** Get the interaction profile at this index. */
        get_interaction_profile(idx: number /*i64*/): OpenXRInteractionProfile
        
        /** Add an interaction profile. */
        add_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        
        /** Remove an interaction profile. */
        remove_interaction_profile(interaction_profile: OpenXRInteractionProfile): void
        
        /** Setup this action set with our default actions. */
        create_default_action_sets(): void
        
        /** Collection of [OpenXRActionSet]s that are part of this action map. */
        action_sets: OpenXRActionSet
        
        /** Collection of [OpenXRInteractionProfile]s that are part of this action map. */
        interaction_profiles: OpenXRInteractionProfile
    }
    /** Collection of [OpenXRAction] resources that make up an action set.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxractionset.html  
     */
    class OpenXRActionSet extends Resource {
        set_localized_name(localized_name: string): void
        get_localized_name(): string
        set_priority(priority: number /*i64*/): void
        get_priority(): number /*i64*/
        
        /** Retrieve the number of actions in our action set. */
        get_action_count(): number /*i64*/
        set_actions(actions: Array): void
        get_actions(): Array
        
        /** Add an action to this action set. */
        add_action(action: OpenXRAction): void
        
        /** Remove an action from this action set. */
        remove_action(action: OpenXRAction): void
        
        /** The localized name of this action set. */
        localized_name: string
        
        /** The priority for this action set. */
        priority: number /*i64*/
        
        /** Collection of actions for this action set. */
        actions: OpenXRAction
    }
    /** Allows clients to implement OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrextensionwrapperextension.html  
     */
    class OpenXRExtensionWrapperExtension extends Object {
        /** Returns a [Dictionary] of OpenXR extensions related to this extension. The [Dictionary] should contain the name of the extension, mapped to a `bool *` cast to an integer:  
         *  - If the `bool *` is a `nullptr` this extension is mandatory.  
         *  - If the `bool *` points to a boolean, the boolean will be updated to `true` if the extension is enabled.  
         */
        /* gdvirtual */ _get_requested_extensions(): Dictionary
        
        /** Adds additional data structures when interogating OpenXR system abilities. */
        /* gdvirtual */ _set_system_properties_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when the OpenXR instance is created. */
        /* gdvirtual */ _set_instance_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when the OpenXR session is created. */
        /* gdvirtual */ _set_session_create_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Adds additional data structures when creating OpenXR swapchains. */
        /* gdvirtual */ _set_swapchain_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        
        /** Allows extensions to register additional controller metadata. This function is called even when the OpenXR API is not constructed as the metadata needs to be available to the editor.  
         *  Extensions should also provide metadata regardless of whether they are supported on the host system. The controller data is used to setup action maps for users who may have access to the relevant hardware.  
         */
        /* gdvirtual */ _on_register_metadata(): void
        
        /** Called before the OpenXR instance is created. */
        /* gdvirtual */ _on_before_instance_created(): void
        
        /** Called right after the OpenXR instance is created. */
        /* gdvirtual */ _on_instance_created(instance: number /*i64*/): void
        
        /** Called right before the OpenXR instance is destroyed. */
        /* gdvirtual */ _on_instance_destroyed(): void
        
        /** Called right after the OpenXR session is created. */
        /* gdvirtual */ _on_session_created(session: number /*i64*/): void
        
        /** Called as part of the OpenXR process handling. This happens right before general and physics processing steps of the main loop. During this step controller data is queried and made available to game logic. */
        /* gdvirtual */ _on_process(): void
        
        /** Called right before the XR viewports begin their rendering step. */
        /* gdvirtual */ _on_pre_render(): void
        
        /** Called right before the OpenXR session is destroyed. */
        /* gdvirtual */ _on_session_destroyed(): void
        
        /** Called when the OpenXR session state is changed to idle. */
        /* gdvirtual */ _on_state_idle(): void
        
        /** Called when the OpenXR session state is changed to ready. This means OpenXR is ready to set up the session. */
        /* gdvirtual */ _on_state_ready(): void
        
        /** Called when the OpenXR session state is changed to synchronized. OpenXR also returns to this state when the application loses focus. */
        /* gdvirtual */ _on_state_synchronized(): void
        
        /** Called when the OpenXR session state is changed to visible. This means OpenXR is now ready to receive frames. */
        /* gdvirtual */ _on_state_visible(): void
        
        /** Called when the OpenXR session state is changed to focused. This state is the active state when the game runs. */
        /* gdvirtual */ _on_state_focused(): void
        
        /** Called when the OpenXR session state is changed to stopping. */
        /* gdvirtual */ _on_state_stopping(): void
        
        /** Called when the OpenXR session state is changed to loss pending. */
        /* gdvirtual */ _on_state_loss_pending(): void
        
        /** Called when the OpenXR session state is changed to exiting. */
        /* gdvirtual */ _on_state_exiting(): void
        
        /** Called when there is an OpenXR event to process. When implementing, return `true` if the event was handled, return `false` otherwise. */
        /* gdvirtual */ _on_event_polled(event: number /*i64*/): boolean
        
        /** Returns the created [OpenXRAPIExtension], which can be used to access the OpenXR API. */
        get_openxr_api(): OpenXRAPIExtension
        
        /** Registers the extension. This should happen at core module initialization level. */
        register_extension_wrapper(): void
    }
    namespace OpenXRHand {
        enum Hands {
            /** Tracking the player's left hand. */
            HAND_LEFT = 0,
            
            /** Tracking the player's right hand. */
            HAND_RIGHT = 1,
            
            /** Maximum supported hands. */
            HAND_MAX = 2,
        }
        enum MotionRange {
            /** When player grips, hand skeleton will form a full fist. */
            MOTION_RANGE_UNOBSTRUCTED = 0,
            
            /** When player grips, hand skeleton conforms to the controller the player is holding. */
            MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            
            /** Maximum supported motion ranges. */
            MOTION_RANGE_MAX = 2,
        }
    }
    /** Node supporting finger tracking in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrhand.html  
     */
    class OpenXRHand extends Node3D {
        set_hand(hand: OpenXRHand.Hands): void
        get_hand(): OpenXRHand.Hands
        set_hand_skeleton(hand_skeleton: NodePath): void
        get_hand_skeleton(): NodePath
        set_motion_range(motion_range: OpenXRHand.MotionRange): void
        get_motion_range(): OpenXRHand.MotionRange
        
        /** Specifies whether this node tracks the left or right hand of the player. */
        hand: number /*i64*/
        
        /** Set the motion range (if supported) limiting the hand motion. */
        motion_range: number /*i64*/
        
        /** Set a [Skeleton3D] node for which the pose positions will be updated. */
        hand_skeleton: NodePath
    }
    /** Defines a binding between an [OpenXRAction] and an XR input or output.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxripbinding.html  
     */
    class OpenXRIPBinding extends Resource {
        set_action(action: OpenXRAction): void
        get_action(): OpenXRAction
        
        /** Get the number of input/output paths in this binding. */
        get_path_count(): number /*i64*/
        set_paths(paths: PackedStringArray): void
        get_paths(): PackedStringArray
        
        /** Returns `true` if this input/output path is part of this binding. */
        has_path(path: string): boolean
        
        /** Add an input/output path to this binding. */
        add_path(path: string): void
        
        /** Removes this input/output path from this binding. */
        remove_path(path: string): void
        
        /** [OpenXRAction] that is bound to these paths. */
        action: OpenXRAction
        
        /** Paths that define the inputs or outputs bound on the device. */
        paths: PackedStringArray
    }
    /** Suggested bindings object for OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrinteractionprofile.html  
     */
    class OpenXRInteractionProfile extends Resource {
        set_interaction_profile_path(interaction_profile_path: string): void
        get_interaction_profile_path(): string
        
        /** Get the number of bindings in this interaction profile. */
        get_binding_count(): number /*i64*/
        
        /** Retrieve the binding at this index. */
        get_binding(index: number /*i64*/): OpenXRIPBinding
        set_bindings(bindings: Array): void
        get_bindings(): Array
        
        /** The interaction profile path identifying the XR device. */
        interaction_profile_path: string
        
        /** Action bindings for this interaction profile. */
        bindings: OpenXRIPBinding
    }
    /** Meta class registering supported devices in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrinteractionprofilemetadata.html  
     */
    class OpenXRInteractionProfileMetadata extends Object {
        /** Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps. */
        register_profile_rename(old_name: string, new_name: string): void
        
        /** Registers a top level path to which profiles can be bound. For instance `/user/hand/left` refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register `/user/body/vest`.  
         *  [param display_name] is the name shown to the user. [param openxr_path] is the top level path being registered. [param openxr_extension_name] is optional and ensures the top level path is only used if the specified extension is available/enabled.  
         *  When a top level path ends up being bound by OpenXR, a [XRPositionalTracker] is instantiated to manage the state of the device.  
         */
        register_top_level_path(display_name: string, openxr_path: string, openxr_extension_name: string): void
        
        /** Registers an interaction profile using its OpenXR designation (e.g. `/interaction_profiles/khr/simple_controller` is the profile for OpenXR's simple controller profile).  
         *  [param display_name] is the description shown to the user. [param openxr_path] is the interaction profile path being registered. [param openxr_extension_name] optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.  
         */
        register_interaction_profile(display_name: string, openxr_path: string, openxr_extension_name: string): void
        
        /** Registers an input/output path for the given [param interaction_profile]. The profile should previously have been registered using [method register_interaction_profile]. [param display_name] is the description shown to the user. [param toplevel_path] specifies the bind path this input/output can be bound to (e.g. `/user/hand/left` or `/user/hand/right`). [param openxr_path] is the action input/output being registered (e.g. `/user/hand/left/input/aim/pose`). [param openxr_extension_name] restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. `XR_EXT_palm_pose` that introduces `…/input/palm_ext/pose` input paths). [param action_type] defines the type of input or output provided by OpenXR. */
        register_io_path(interaction_profile: string, display_name: string, toplevel_path: string, openxr_path: string, openxr_extension_name: string, action_type: OpenXRAction.ActionType): void
    }
    namespace OpenXRInterface {
        enum Hand {
            /** Left hand. */
            HAND_LEFT = 0,
            
            /** Right hand. */
            HAND_RIGHT = 1,
            
            /** Maximum value for the hand enum. */
            HAND_MAX = 2,
        }
        enum HandMotionRange {
            HAND_MOTION_RANGE_UNOBSTRUCTED = 0,
            HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            HAND_MOTION_RANGE_MAX = 2,
        }
        enum HandJoints {
            /** Palm joint. */
            HAND_JOINT_PALM = 0,
            
            /** Wrist joint. */
            HAND_JOINT_WRIST = 1,
            
            /** Thumb metacarpal joint. */
            HAND_JOINT_THUMB_METACARPAL = 2,
            
            /** Thumb proximal joint. */
            HAND_JOINT_THUMB_PROXIMAL = 3,
            
            /** Thumb distal joint. */
            HAND_JOINT_THUMB_DISTAL = 4,
            
            /** Thumb tip joint. */
            HAND_JOINT_THUMB_TIP = 5,
            
            /** Index metacarpal joint. */
            HAND_JOINT_INDEX_METACARPAL = 6,
            
            /** Index proximal joint. */
            HAND_JOINT_INDEX_PROXIMAL = 7,
            
            /** Index intermediate joint. */
            HAND_JOINT_INDEX_INTERMEDIATE = 8,
            
            /** Index distal joint. */
            HAND_JOINT_INDEX_DISTAL = 9,
            
            /** Index tip joint. */
            HAND_JOINT_INDEX_TIP = 10,
            
            /** Middle metacarpal joint. */
            HAND_JOINT_MIDDLE_METACARPAL = 11,
            
            /** Middle proximal joint. */
            HAND_JOINT_MIDDLE_PROXIMAL = 12,
            
            /** Middle intermediate joint. */
            HAND_JOINT_MIDDLE_INTERMEDIATE = 13,
            
            /** Middle distal joint. */
            HAND_JOINT_MIDDLE_DISTAL = 14,
            
            /** Middle tip joint. */
            HAND_JOINT_MIDDLE_TIP = 15,
            
            /** Ring metacarpal joint. */
            HAND_JOINT_RING_METACARPAL = 16,
            
            /** Ring proximal joint. */
            HAND_JOINT_RING_PROXIMAL = 17,
            
            /** Ring intermediate joint. */
            HAND_JOINT_RING_INTERMEDIATE = 18,
            
            /** Ring distal joint. */
            HAND_JOINT_RING_DISTAL = 19,
            
            /** Ring tip joint. */
            HAND_JOINT_RING_TIP = 20,
            
            /** Little metacarpal joint. */
            HAND_JOINT_LITTLE_METACARPAL = 21,
            
            /** Little proximal joint. */
            HAND_JOINT_LITTLE_PROXIMAL = 22,
            
            /** Little intermediate joint. */
            HAND_JOINT_LITTLE_INTERMEDIATE = 23,
            
            /** Little distal joint. */
            HAND_JOINT_LITTLE_DISTAL = 24,
            
            /** Little tip joint. */
            HAND_JOINT_LITTLE_TIP = 25,
            
            /** Maximum value for the hand joint enum. */
            HAND_JOINT_MAX = 26,
        }
        enum HandJointFlags {
            /** No flags are set. */
            HAND_JOINT_NONE = 0,
            
            /** If set, the orientation data is valid, otherwise, the orientation data is unreliable and should not be used. */
            HAND_JOINT_ORIENTATION_VALID = 1,
            
            /** If set, the orientation data comes from tracking data, otherwise, the orientation data contains predicted data. */
            HAND_JOINT_ORIENTATION_TRACKED = 2,
            
            /** If set, the positional data is valid, otherwise, the positional data is unreliable and should not be used. */
            HAND_JOINT_POSITION_VALID = 4,
            
            /** If set, the positional data comes from tracking data, otherwise, the positional data contains predicted data. */
            HAND_JOINT_POSITION_TRACKED = 8,
            
            /** If set, our linear velocity data is valid, otherwise, the linear velocity data is unreliable and should not be used. */
            HAND_JOINT_LINEAR_VELOCITY_VALID = 16,
            
            /** If set, our angular velocity data is valid, otherwise, the angular velocity data is unreliable and should not be used. */
            HAND_JOINT_ANGULAR_VELOCITY_VALID = 32,
        }
    }
    /** Our OpenXR interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_openxrinterface.html  
     */
    class OpenXRInterface extends XRInterface {
        get_display_refresh_rate(): number /*f64*/
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        get_render_target_size_multiplier(): number /*f64*/
        set_render_target_size_multiplier(multiplier: number /*f64*/): void
        
        /** Returns `true` if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.  
         *      
         *  **Note:** This feature is only available on the compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [member Viewport.vrs_mode] to `VRS_XR` on desktop.  
         */
        is_foveation_supported(): boolean
        get_foveation_level(): number /*i64*/
        set_foveation_level(foveation_level: number /*i64*/): void
        get_foveation_dynamic(): boolean
        set_foveation_dynamic(foveation_dynamic: boolean): void
        
        /** Returns `true` if the given action set is active. */
        is_action_set_active(name: string): boolean
        
        /** Sets the given action set as active or inactive. */
        set_action_set_active(name: string, active: boolean): void
        
        /** Returns a list of action sets registered with Godot (loaded from the action map at runtime). */
        get_action_sets(): Array
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        get_available_display_refresh_rates(): Array
        
        /** If handtracking is enabled and motion range is supported, sets the currently configured motion range for [param hand] to [param motion_range]. */
        set_motion_range(hand: OpenXRInterface.Hand, motion_range: OpenXRInterface.HandMotionRange): void
        
        /** If handtracking is enabled and motion range is supported, gets the currently configured motion range for [param hand]. */
        get_motion_range(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        
        /** If handtracking is enabled, returns flags that inform us of the validity of the tracking data. */
        get_hand_joint_flags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        
        /** If handtracking is enabled, returns the rotation of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. */
        get_hand_joint_rotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        
        /** If handtracking is enabled, returns the position of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        get_hand_joint_position(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the radius of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is without worldscale applied! */
        get_hand_joint_radius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): number /*f64*/
        
        /** If handtracking is enabled, returns the linear velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        get_hand_joint_linear_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the angular velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D]! */
        get_hand_joint_angular_velocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** Returns `true` if OpenXR's hand tracking is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        is_hand_tracking_supported(): boolean
        
        /** Returns the capabilities of the eye gaze interaction extension.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        is_eye_gaze_interaction_supported(): boolean
        
        /** The display refresh rate for the current HMD. Only functional if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        display_refresh_rate: number /*f64*/
        
        /** The render size multiplier for the current HMD. Must be set before the interface has been initialized. */
        render_target_size_multiplier: number /*f64*/
        
        /** Set foveation level from 0 (off) to 3 (high), the interface must be initialized before this is accessible. */
        foveation_level: number /*i64*/
        
        /** Enable dynamic foveation adjustment, the interface must be initialized before this is accessible. If enabled foveation will automatically adjusted between low and [member foveation_level]. */
        foveation_dynamic: boolean
        
        /** Informs our OpenXR session has been started. */
        readonly session_begun: Signal //  => void
        
        /** Informs our OpenXR session is stopping. */
        readonly session_stopping: Signal //  => void
        
        /** Informs our OpenXR session now has focus. */
        readonly session_focussed: Signal //  => void
        
        /** Informs our OpenXR session is now visible (output is being sent to the HMD). */
        readonly session_visible: Signal //  => void
        
        /** Informs the user queued a recenter of the player position. */
        readonly pose_recentered: Signal //  => void
    }
    /** An optimized translation, used by default for CSV Translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_optimizedtranslation.html  
     */
    class OptimizedTranslation extends Translation {
        /** Generates and sets an optimized translation from the given [Translation] resource. */
        generate(from: Translation): void
    }
    /** A button that brings up a dropdown with selectable options when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_optionbutton.html  
     */
    class OptionButton extends Button {
        /** Adds an item, with text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        add_item(label: string, id: number /*i64*/ = -1): void
        
        /** Adds an item, with a [param texture] icon, text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1): void
        
        /** Sets the text of the item at index [param idx]. */
        set_item_text(idx: number /*i64*/, text: string): void
        
        /** Sets the icon of the item at index [param idx]. */
        set_item_icon(idx: number /*i64*/, texture: Texture2D): void
        
        /** Sets whether the item at index [param idx] is disabled.  
         *  Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.  
         */
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        
        /** Sets the ID of the item at index [param idx]. */
        set_item_id(idx: number /*i64*/, id: number /*i64*/): void
        
        /** Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID. */
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        
        /** Sets the tooltip of the item at index [param idx]. */
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        
        /** Returns the text of the item at index [param idx]. */
        get_item_text(idx: number /*i64*/): string
        
        /** Returns the icon of the item at index [param idx]. */
        get_item_icon(idx: number /*i64*/): Texture2D
        
        /** Returns the ID of the item at index [param idx]. */
        get_item_id(idx: number /*i64*/): number /*i64*/
        
        /** Returns the index of the item with the given [param id]. */
        get_item_index(id: number /*i64*/): number /*i64*/
        
        /** Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID. */
        get_item_metadata(idx: number /*i64*/): any
        
        /** Returns the tooltip of the item at index [param idx]. */
        get_item_tooltip(idx: number /*i64*/): string
        
        /** Returns `true` if the item at index [param idx] is disabled. */
        is_item_disabled(idx: number /*i64*/): boolean
        
        /** Returns `true` if the item at index [param idx] is marked as a separator. */
        is_item_separator(idx: number /*i64*/): boolean
        
        /** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
        add_separator(text: string = ''): void
        
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.  
         *  Passing `-1` as the index deselects any currently selected item.  
         */
        select(idx: number /*i64*/): void
        get_selected(): number /*i64*/
        
        /** Returns the ID of the selected item, or `-1` if no item is selected. */
        get_selected_id(): number /*i64*/
        
        /** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
        get_selected_metadata(): any
        
        /** Removes the item at index [param idx]. */
        remove_item(idx: number /*i64*/): void
        _select_int(idx: number /*i64*/): void
        
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): PopupMenu
        
        /** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        show_popup(): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        
        /** Returns `true` if this button contains at least one item which is not disabled, or marked as a separator. */
        has_selectable_items(): boolean
        
        /** Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is `true`, the items will be searched in reverse order.  
         *  Returns `-1` if no item is found.  
         */
        get_selectable_item(from_last: boolean = false): number /*i64*/
        set_fit_to_longest_item(fit: boolean): void
        is_fit_to_longest_item(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        
        /** The number of items to select from. */
        item_count: any /*Items,popup/item_*/
        
        /** The index of the currently selected item, or `-1` if no item is selected. */
        selected: number /*i64*/
        
        /** If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.  
         *      
         *  **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.  
         */
        fit_to_longest_item: boolean
        
        /** If `true`, the currently selected item can be selected again. */
        allow_reselect: boolean
        
        /** Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly item_selected: Signal // index: number /*i64*/ => void
        
        /** Emitted when the user navigates to an item using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input actions. The index of the item selected is passed as argument. */
        readonly item_focused: Signal // index: number /*i64*/ => void
    }
    class OrphanResourcesDialog extends ConfirmationDialog {
    }
    /** Creates packages that can be loaded into a running project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pckpacker.html  
     */
    class PCKPacker extends RefCounted {
        /** Creates a new PCK file with the name [param pck_name]. The `.pck` file extension isn't added automatically, so it should be part of [param pck_name] (even though it's not required). */
        pck_start(pck_name: string, alignment: number /*i64*/ = 32, key: string = '0000000000000000000000000000000000000000000000000000000000000000', encrypt_directory: boolean = false): GodotError
        
        /** Adds the [param source_path] file to the current PCK package at the [param pck_path] internal path (should start with `res://`). */
        add_file(pck_path: string, source_path: string, encrypt: boolean = false): GodotError
        
        /** Writes the files specified using all [method add_file] calls since the last flush. If [param verbose] is `true`, a list of files added will be printed to the console for easier debugging. */
        flush(verbose: boolean = false): GodotError
    }
    /** Efficiently packs and serializes [Array] or [Dictionary].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packeddatacontainer.html  
     */
    class PackedDataContainer extends Resource {
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
        
        /** Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.  
         *      
         *  **Note:** Subsequent calls to this method will overwrite the existing data.  
         */
        pack(value: any): GodotError
        
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        __data__: PackedByteArray
    }
    /** An internal class used by [PackedDataContainer] to pack nested arrays and dictionaries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packeddatacontainerref.html  
     */
    class PackedDataContainerRef extends RefCounted {
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
    }
    namespace PackedScene {
        enum GenEditState {
            /** If passed to [method instantiate], blocks edits to the scene state. */
            GEN_EDIT_STATE_DISABLED = 0,
            
            /** If passed to [method instantiate], provides local scene resources to the local scene.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_INSTANCE = 1,
            
            /** If passed to [method instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN = 2,
            
            /** It's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.  
             *      
             *  **Note:** Only available in editor builds.  
             */
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    /** An abstraction of a serialized scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedscene.html  
     */
    class PackedScene extends Resource {
        /** Pack will ignore any sub-nodes not owned by given node. See [member Node.owner]. */
        pack(path: Node): GodotError
        
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(edit_state: PackedScene.GenEditState = 0): Node
        
        /** Returns `true` if the scene file has nodes. */
        can_instantiate(): boolean
        _set_bundled_scene(scene: Dictionary): void
        _get_bundled_scene(): Dictionary
        
        /** Returns the [SceneState] representing the scene file contents. */
        get_state(): SceneState
        
        /** A dictionary representation of the scene contents.  
         *  Available keys include "rnames" and "variants" for resources, "node_count", "nodes", "node_paths" for nodes, "editable_instances" for paths to overridden nodes, "conn_count" and "conns" for signal connections, and "version" for the format style of the PackedScene.  
         */
        _bundled: Dictionary
    }
    class PackedSceneEditorPlugin extends EditorPlugin {
    }
    class PackedSceneEditorTranslationParserPlugin extends EditorTranslationParserPlugin {
    }
    /** Abstraction and base class for packet-based protocols.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packetpeer.html  
     */
    class PacketPeer extends RefCounted {
        /** Gets a Variant. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** Sends a [Variant] as a packet. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        put_var(var_: any, full_objects: boolean = false): GodotError
        
        /** Gets a raw packet. */
        get_packet(): PackedByteArray
        
        /** Sends a raw packet. */
        put_packet(buffer: PackedByteArray): GodotError
        
        /** Returns the error state of the last packet received (via [method get_packet] and [method get_var]). */
        get_packet_error(): GodotError
        
        /** Returns the number of packets currently available in the ring-buffer. */
        get_available_packet_count(): number /*i64*/
        get_encode_buffer_max_size(): number /*i64*/
        set_encode_buffer_max_size(max_size: number /*i64*/): void
        
        /** Maximum buffer size allowed when encoding [Variant]s. Raise this value to support heavier memory allocations.  
         *  The [method put_var] method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [Variant]. If the [Variant] is bigger than [member encode_buffer_max_size], the method will error out with [constant ERR_OUT_OF_MEMORY].  
         */
        encode_buffer_max_size: number /*i64*/
    }
    namespace PacketPeerDTLS {
        enum Status {
            /** A status representing a [PacketPeerDTLS] that is disconnected. */
            STATUS_DISCONNECTED = 0,
            
            /** A status representing a [PacketPeerDTLS] that is currently performing the handshake with a remote peer. */
            STATUS_HANDSHAKING = 1,
            
            /** A status representing a [PacketPeerDTLS] that is connected to a remote peer. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [PacketPeerDTLS] in a generic error state. */
            STATUS_ERROR = 3,
            
            /** An error status that shows a mismatch in the DTLS certificate domain presented by the host and the domain requested for validation. */
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    /** DTLS packet peer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packetpeerdtls.html  
     */
    class PacketPeerDTLS extends PacketPeer {
        /** Poll the connection to check for incoming packets. Call this frequently to update the status and keep the connection working. */
        poll(): void
        
        /** Connects a [param packet_peer] beginning the DTLS handshake using the underlying [PacketPeerUDP] which must be connected (see [method PacketPeerUDP.connect_to_host]). You can optionally specify the [param client_options] to be used while verifying the TLS connections. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        connect_to_peer(packet_peer: PacketPeerUDP, hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Returns the status of the connection. See [enum Status] for values. */
        get_status(): PacketPeerDTLS.Status
        
        /** Disconnects this peer, terminating the DTLS session. */
        disconnect_from_peer(): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_packetpeerextension.html */
    class PacketPeerExtension extends PacketPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
    }
    /** Wrapper to use a PacketPeer over a StreamPeer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packetpeerstream.html  
     */
    class PacketPeerStream extends PacketPeer {
        set_stream_peer(peer: StreamPeer): void
        get_stream_peer(): StreamPeer
        set_input_buffer_max_size(max_size_bytes: number /*i64*/): void
        set_output_buffer_max_size(max_size_bytes: number /*i64*/): void
        get_input_buffer_max_size(): number /*i64*/
        get_output_buffer_max_size(): number /*i64*/
        input_buffer_max_size: number /*i64*/
        output_buffer_max_size: number /*i64*/
        
        /** The wrapped [StreamPeer] object. */
        stream_peer: StreamPeer
    }
    /** UDP packet peer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packetpeerudp.html  
     */
    class PacketPeerUDP extends PacketPeer {
        /** Binds this [PacketPeerUDP] to the specified [param port] and [param bind_address] with a buffer size [param recv_buf_size], allowing it to receive incoming packets.  
         *  If [param bind_address] is set to `"*"` (default), the peer will be bound on all available addresses (both IPv4 and IPv6).  
         *  If [param bind_address] is set to `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the peer will be bound to all available addresses matching that IP type.  
         *  If [param bind_address] is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc), the peer will only be bound to the interface with that addresses (or fail if no interface with the given address exists).  
         */
        bind(port: number /*i64*/, bind_address: string = '*', recv_buf_size: number /*i64*/ = 65536): GodotError
        
        /** Closes the [PacketPeerUDP]'s underlying UDP socket. */
        close(): void
        
        /** Waits for a packet to arrive on the bound address. See [method bind].  
         *      
         *  **Note:** [method wait] can't be interrupted once it has been called. This can be worked around by allowing the other party to send a specific "death pill" packet like this:  
         *    
         */
        wait(): GodotError
        
        /** Returns whether this [PacketPeerUDP] is bound to an address and can receive packets. */
        is_bound(): boolean
        
        /** Calling this method connects this UDP peer to the given [param host]/[param port] pair. UDP is in reality connectionless, so this option only means that incoming packets from different addresses are automatically discarded, and that outgoing packets are always sent to the connected address (future calls to [method set_dest_address] are not allowed). This method does not send any data to the remote peer, to do that, use [method PacketPeer.put_var] or [method PacketPeer.put_packet] as usual. See also [UDPServer].  
         *      
         *  **Note:** Connecting to the remote peer does not help to protect from malicious attacks like IP spoofing, etc. Think about using an encryption technique like TLS or DTLS if you feel like your application is transferring sensitive information.  
         */
        connect_to_host(host: string, port: number /*i64*/): GodotError
        
        /** Returns `true` if the UDP socket is open and has been connected to a remote address. See [method connect_to_host]. */
        is_socket_connected(): boolean
        
        /** Returns the IP of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_ip(): string
        
        /** Returns the port of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_port(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Sets the destination address and port for sending packets and variables. A hostname will be resolved using DNS if needed.  
         *      
         *  **Note:** [method set_broadcast_enabled] must be enabled before sending packets to a broadcast address (e.g. `255.255.255.255`).  
         */
        set_dest_address(host: string, port: number /*i64*/): GodotError
        
        /** Enable or disable sending of broadcast packets (e.g. `set_dest_address("255.255.255.255", 4343)`. This option is disabled by default.  
         *      
         *  **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission and this option to be enabled to receive broadcast packets too.  
         */
        set_broadcast_enabled(enabled: boolean): void
        
        /** Joins the multicast group specified by [param multicast_address] using the interface identified by [param interface_name].  
         *  You can join the same multicast group with multiple interfaces. Use [method IP.get_local_interfaces] to know which are available.  
         *      
         *  **Note:** Some Android devices might require the `CHANGE_WIFI_MULTICAST_STATE` permission for multicast to work.  
         */
        join_multicast_group(multicast_address: string, interface_name: string): GodotError
        
        /** Removes the interface identified by [param interface_name] from the multicast group specified by [param multicast_address]. */
        leave_multicast_group(multicast_address: string, interface_name: string): GodotError
    }
    /** A GUI control that displays a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_panel.html  
     */
    class Panel extends Control {
    }
    /** A container that keeps its child controls within the area of a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_panelcontainer.html  
     */
    class PanelContainer extends Container {
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_panoramaskymaterial.html  
     */
    class PanoramaSkyMaterial extends Material {
        set_panorama(texture: Texture2D): void
        get_panorama(): Texture2D
        set_filtering_enabled(enabled: boolean): void
        is_filtering_enabled(): boolean
        
        /** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
        panorama: Texture2D
        
        /** A boolean value to determine if the background texture should be filtered or not. */
        filter: boolean
    }
    class PanoramaSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_parallaxbackground.html  
     */
    class ParallaxBackground extends CanvasLayer {
        _camera_moved(_unnamed_arg0: Transform2D, _unnamed_arg1: Vector2): void
        set_scroll_offset(offset: Vector2): void
        get_scroll_offset(): Vector2
        set_scroll_base_offset(offset: Vector2): void
        get_scroll_base_offset(): Vector2
        set_scroll_base_scale(scale: Vector2): void
        get_scroll_base_scale(): Vector2
        set_limit_begin(offset: Vector2): void
        get_limit_begin(): Vector2
        set_limit_end(offset: Vector2): void
        get_limit_end(): Vector2
        set_ignore_camera_zoom(ignore: boolean): void
        is_ignore_camera_zoom(): boolean
        
        /** The ParallaxBackground's scroll value. Calculated automatically when using a [Camera2D], but can be used to manually manage scrolling when no camera is present. */
        scroll_offset: Vector2
        
        /** The base position offset for all [ParallaxLayer] children. */
        scroll_base_offset: Vector2
        
        /** The base motion scale for all [ParallaxLayer] children. */
        scroll_base_scale: Vector2
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than [member scroll_limit_end] to work. */
        scroll_limit_begin: Vector2
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than [member scroll_limit_begin] to work. */
        scroll_limit_end: Vector2
        
        /** If `true`, elements in [ParallaxLayer] child aren't affected by the zoom level of the camera. */
        scroll_ignore_camera_zoom: boolean
    }
    /** A parallax scrolling layer to be used with [ParallaxBackground].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_parallaxlayer.html  
     */
    class ParallaxLayer extends Node2D {
        set_motion_scale(scale: Vector2): void
        get_motion_scale(): Vector2
        set_motion_offset(offset: Vector2): void
        get_motion_offset(): Vector2
        set_mirroring(mirror: Vector2): void
        get_mirroring(): Vector2
        
        /** Multiplies the ParallaxLayer's motion. If an axis is set to `0`, it will not scroll. */
        motion_scale: Vector2
        
        /** The ParallaxLayer's offset relative to the parent ParallaxBackground's [member ParallaxBackground.scroll_offset]. */
        motion_offset: Vector2
        
        /** The interval, in pixels, at which the [ParallaxLayer] is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to `0`, the [ParallaxLayer] will be drawn only once along that direction.  
         *      
         *  **Note:** If you want the repetition to pixel-perfect match a [Texture2D] displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [Sprite2D] scaled to `0.5` to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to `Vector2(300, 0)`.  
         *      
         *  **Note:** If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [ParallaxBackground]'s position, not the layer's own position. So, if you use mirroring, **do not** change the [ParallaxLayer] position relative to its parent. Instead, if you need to adjust the background's position, set the [member CanvasLayer.offset] property in the parent [ParallaxBackground].  
         *      
         *  **Note:** Despite the name, the layer will not be mirrored, it will only be repeated.  
         */
        motion_mirroring: Vector2
    }
    namespace ParticleProcessMaterial {
        enum Parameter {
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set initial velocity properties. */
            PARAM_INITIAL_LINEAR_VELOCITY = 0,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angular velocity properties. */
            PARAM_ANGULAR_VELOCITY = 1,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set orbital velocity properties. */
            PARAM_ORBIT_VELOCITY = 2,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set linear acceleration properties. */
            PARAM_LINEAR_ACCEL = 3,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial acceleration properties. */
            PARAM_RADIAL_ACCEL = 4,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set tangential acceleration properties. */
            PARAM_TANGENTIAL_ACCEL = 5,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set damping properties. */
            PARAM_DAMPING = 6,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angle properties. */
            PARAM_ANGLE = 7,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale properties. */
            PARAM_SCALE = 8,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set hue variation properties. */
            PARAM_HUE_VARIATION = 9,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation speed properties. */
            PARAM_ANIM_SPEED = 10,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation offset properties. */
            PARAM_ANIM_OFFSET = 11,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial velocity properties. */
            PARAM_RADIAL_VELOCITY = 15,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set directional velocity properties. */
            PARAM_DIRECTIONAL_VELOCITY = 16,
            
            /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale over velocity properties. */
            PARAM_SCALE_OVER_VELOCITY = 17,
            
            /** Represents the size of the [enum Parameter] enum. */
            PARAM_MAX = 18,
            
            /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum und maximum influence on each particles velocity. */
            PARAM_TURB_VEL_INFLUENCE = 13,
            
            /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum and maximum displacement of the particles spawn position. */
            PARAM_TURB_INIT_DISPLACEMENT = 14,
            
            /** Use with [method set_param_texture] to set the turbulence influence over the particles life time. */
            PARAM_TURB_INFLUENCE_OVER_LIFE = 12,
        }
        enum ParticleFlags {
            /** Use with [method set_particle_flag] to set [member particle_flag_align_y]. */
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_rotate_y]. */
            PARTICLE_FLAG_ROTATE_Y = 1,
            
            /** Use with [method set_particle_flag] to set [member particle_flag_disable_z]. */
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_DAMPING_AS_FRICTION = 3,
            
            /** Represents the size of the [enum ParticleFlags] enum. */
            PARTICLE_FLAG_MAX = 4,
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
            
            /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle color will be modulated by [member emission_color_texture]. */
            EMISSION_SHAPE_POINTS = 4,
            
            /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle velocity and rotation will be set based on [member emission_normal_texture]. Particle color will be modulated by [member emission_color_texture]. */
            EMISSION_SHAPE_DIRECTED_POINTS = 5,
            
            /** Particles will be emitted in a ring or cylinder. */
            EMISSION_SHAPE_RING = 6,
            
            /** Represents the size of the [enum EmissionShape] enum. */
            EMISSION_SHAPE_MAX = 7,
        }
        enum SubEmitterMode {
            SUB_EMITTER_DISABLED = 0,
            SUB_EMITTER_CONSTANT = 1,
            SUB_EMITTER_AT_END = 2,
            SUB_EMITTER_AT_COLLISION = 3,
            
            /** Represents the size of the [enum SubEmitterMode] enum. */
            SUB_EMITTER_MAX = 4,
        }
        enum CollisionMode {
            /** No collision for particles. Particles will go through [GPUParticlesCollision3D] nodes. */
            COLLISION_DISABLED = 0,
            
            /** [RigidBody3D]-style collision for particles using [GPUParticlesCollision3D] nodes. */
            COLLISION_RIGID = 1,
            
            /** Hide particles instantly when colliding with a [GPUParticlesCollision3D] node. This can be combined with a subemitter that uses the [constant COLLISION_RIGID] collision mode to "replace" the parent particle with the subemitter on impact. */
            COLLISION_HIDE_ON_CONTACT = 2,
            
            /** Represents the size of the [enum CollisionMode] enum. */
            COLLISION_MAX = 3,
        }
    }
    /** Holds a particle configuration for [GPUParticles2D] or [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_particleprocessmaterial.html  
     */
    class ParticleProcessMaterial extends Material {
        set_direction(degrees: Vector3): void
        get_direction(): Vector3
        set_inherit_velocity_ratio(ratio: number /*f64*/): void
        get_inherit_velocity_ratio(): number /*f64*/
        set_spread(degrees: number /*f64*/): void
        get_spread(): number /*f64*/
        set_flatness(amount: number /*f64*/): void
        get_flatness(): number /*f64*/
        
        /** Sets the minimum value range for the given parameter. */
        set_param_min(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        
        /** Returns the minimum value range for the given parameter. */
        get_param_min(param: ParticleProcessMaterial.Parameter): number /*f64*/
        
        /** Sets the maximum value range for the given parameter. */
        set_param_max(param: ParticleProcessMaterial.Parameter, value: number /*f64*/): void
        
        /** Returns the maximum value range for the given parameter. */
        get_param_max(param: ParticleProcessMaterial.Parameter): number /*f64*/
        
        /** Sets the [Texture2D] for the specified [enum Parameter]. */
        set_param_texture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        
        /** Returns the [Texture2D] used by the specified parameter. */
        get_param_texture(param: ParticleProcessMaterial.Parameter): Texture2D
        set_color(color: Color): void
        get_color(): Color
        set_color_ramp(ramp: Texture2D): void
        get_color_ramp(): Texture2D
        set_alpha_curve(curve: Texture2D): void
        get_alpha_curve(): Texture2D
        set_emission_curve(curve: Texture2D): void
        get_emission_curve(): Texture2D
        set_color_initial_ramp(ramp: Texture2D): void
        get_color_initial_ramp(): Texture2D
        set_velocity_limit_curve(curve: Texture2D): void
        get_velocity_limit_curve(): Texture2D
        
        /** If `true`, enables the specified particle flag. See [enum ParticleFlags] for options. */
        set_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        
        /** Returns `true` if the specified particle flag is enabled. See [enum ParticleFlags] for options. */
        get_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags): boolean
        set_velocity_pivot(pivot: Vector3): void
        get_velocity_pivot(): Vector3
        set_emission_shape(shape: ParticleProcessMaterial.EmissionShape): void
        get_emission_shape(): ParticleProcessMaterial.EmissionShape
        set_emission_sphere_radius(radius: number /*f64*/): void
        get_emission_sphere_radius(): number /*f64*/
        set_emission_box_extents(extents: Vector3): void
        get_emission_box_extents(): Vector3
        set_emission_point_texture(texture: Texture2D): void
        get_emission_point_texture(): Texture2D
        set_emission_normal_texture(texture: Texture2D): void
        get_emission_normal_texture(): Texture2D
        set_emission_color_texture(texture: Texture2D): void
        get_emission_color_texture(): Texture2D
        set_emission_point_count(point_count: number /*i64*/): void
        get_emission_point_count(): number /*i64*/
        set_emission_ring_axis(axis: Vector3): void
        get_emission_ring_axis(): Vector3
        set_emission_ring_height(height: number /*f64*/): void
        get_emission_ring_height(): number /*f64*/
        set_emission_ring_radius(radius: number /*f64*/): void
        get_emission_ring_radius(): number /*f64*/
        set_emission_ring_inner_radius(inner_radius: number /*f64*/): void
        get_emission_ring_inner_radius(): number /*f64*/
        set_emission_shape_offset(emission_shape_offset: Vector3): void
        get_emission_shape_offset(): Vector3
        set_emission_shape_scale(emission_shape_scale: Vector3): void
        get_emission_shape_scale(): Vector3
        get_turbulence_enabled(): boolean
        set_turbulence_enabled(turbulence_enabled: boolean): void
        get_turbulence_noise_strength(): number /*f64*/
        set_turbulence_noise_strength(turbulence_noise_strength: number /*f64*/): void
        get_turbulence_noise_scale(): number /*f64*/
        set_turbulence_noise_scale(turbulence_noise_scale: number /*f64*/): void
        get_turbulence_noise_speed_random(): number /*f64*/
        set_turbulence_noise_speed_random(turbulence_noise_speed_random: number /*f64*/): void
        get_turbulence_noise_speed(): Vector3
        set_turbulence_noise_speed(turbulence_noise_speed: Vector3): void
        get_gravity(): Vector3
        set_gravity(accel_vec: Vector3): void
        set_lifetime_randomness(randomness: number /*f64*/): void
        get_lifetime_randomness(): number /*f64*/
        get_sub_emitter_mode(): ParticleProcessMaterial.SubEmitterMode
        set_sub_emitter_mode(mode: ParticleProcessMaterial.SubEmitterMode): void
        get_sub_emitter_frequency(): number /*f64*/
        set_sub_emitter_frequency(hz: number /*f64*/): void
        get_sub_emitter_amount_at_end(): number /*i64*/
        set_sub_emitter_amount_at_end(amount: number /*i64*/): void
        get_sub_emitter_amount_at_collision(): number /*i64*/
        set_sub_emitter_amount_at_collision(amount: number /*i64*/): void
        get_sub_emitter_keep_velocity(): boolean
        set_sub_emitter_keep_velocity(enable: boolean): void
        set_attractor_interaction_enabled(enabled: boolean): void
        is_attractor_interaction_enabled(): boolean
        set_collision_mode(mode: ParticleProcessMaterial.CollisionMode): void
        get_collision_mode(): ParticleProcessMaterial.CollisionMode
        set_collision_use_scale(radius: boolean): void
        is_collision_using_scale(): boolean
        set_collision_friction(friction: number /*f64*/): void
        get_collision_friction(): number /*f64*/
        set_collision_bounce(bounce: number /*f64*/): void
        get_collision_bounce(): number /*f64*/
        
        /** Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a [member lifetime_randomness] of `0.4` scales the lifetime between `0.6` to `1.0` of its original value. */
        lifetime_randomness: number /*f64*/
        
        /** The offset for the [member emission_shape], in local space. */
        emission_shape_offset: Vector3
        
        /** The scale of the [member emission_shape], in local space. */
        emission_shape_scale: Vector3
        
        /** Particles will be emitted inside this region. Use [enum EmissionShape] constants for values. */
        emission_shape: number /*i64*/
        
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        emission_sphere_radius: number /*f64*/
        
        /** The box's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
        emission_box_extents: Vector3
        
        /** Particles will be emitted at positions determined by sampling this texture at a random position. Used with [constant EMISSION_SHAPE_POINTS] and [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        emission_point_texture: Texture2D
        
        /** Particle velocity and rotation will be set by sampling this texture at the same point as the [member emission_point_texture]. Used only in [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        emission_normal_texture: Texture2D
        
        /** Particle color will be modulated by color determined by sampling this texture at the same point as the [member emission_point_texture].  
         *      
         *  **Note:** [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_color_texture] will have no visible effect.  
         */
        emission_color_texture: Texture2D
        
        /** The number of emission points if [member emission_shape] is set to [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        emission_point_count: number /*i64*/
        
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_axis: Vector3
        
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_height: number /*f64*/
        
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_radius: number /*f64*/
        
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        emission_ring_inner_radius: number /*f64*/
        
        /** Percentage of the velocity of the respective [GPUParticles2D] or [GPUParticles3D] inherited by each particle when spawning. */
        inherit_velocity_ratio: number /*f64*/
        
        /** A pivot point used to calculate radial and orbital velocity of particles. */
        velocity_pivot: Vector3
        
        /** Unit vector specifying the particles' emission direction. */
        direction: Vector3
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. */
        spread: number /*f64*/
        
        /** Amount of [member spread] along the Y axis. */
        flatness: number /*f64*/
        
        /** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
        velocity_limit_curve: CurveTexture
        
        /** Gravity applied to every particle. */
        gravity: Vector3
        
        /** If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
        attractor_interaction_enabled: boolean
        
        /** Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        color: Color
        
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).  
         *      
         *  **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.  
         */
        color_ramp: GradientTexture1D
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).  
         *      
         *  **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.  
         */
        color_initial_ramp: GradientTexture1D
        
        /** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime. */
        alpha_curve: CurveTexture
        
        /** Each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** This property won't have a visible effect unless the render material is marked as unshaded.  
         */
        emission_curve: CurveTexture
        
        /** If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.  
         *      
         *  **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.  
         */
        turbulence_enabled: boolean
        
        /** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
        turbulence_noise_strength: number /*f64*/
        
        /** This value controls the overall scale/frequency of the turbulence noise pattern.  
         *  A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.  
         */
        turbulence_noise_scale: number /*f64*/
        
        /** A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.  
         *  The default value of `Vector3(0, 0, 0)` turns off the scrolling.  
         */
        turbulence_noise_speed: Vector3
        
        /** The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.  
         *  A value of 0.0 will result in a fixed pattern.  
         */
        turbulence_noise_speed_random: number /*f64*/
        
        /** The particles' collision mode.  
         *      
         *  **Note:** 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].  
         *      
         *  **Note:** 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.  
         */
        collision_mode: number /*i64*/
        
        /** The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_friction: number /*f64*/
        
        /** The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_bounce: number /*f64*/
        
        /** If `true`, [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
        collision_use_scale: boolean
        
        /** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
        sub_emitter_mode: number /*i64*/
        
        /** The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_frequency: number /*f64*/
        
        /** The amount of particles to spawn from the subemitter node when the particle expires.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_amount_at_end: number /*i64*/
        
        /** The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        sub_emitter_amount_at_collision: number /*i64*/
        
        /** If `true`, the subemitter inherits the parent particle's velocity when it spawns. */
        sub_emitter_keep_velocity: boolean
    }
    class ParticleProcessMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_path2d.html  
     */
    class Path2D extends Node2D {
        set_curve(curve: Curve2D): void
        get_curve(): Curve2D
        
        /** A [Curve2D] describing the path. */
        curve: Curve2D
    }
    class Path2DEditor extends HBoxContainer {
    }
    class Path2DEditorPlugin extends EditorPlugin {
    }
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_path3d.html  
     */
    class Path3D extends Node3D {
        set_curve(curve: Curve3D): void
        get_curve(): Curve3D
        
        /** A [Curve3D] describing the path. */
        curve: Curve3D
        
        /** Emitted when the [member curve] changes. */
        readonly curve_changed: Signal //  => void
    }
    class Path3DEditorPlugin extends EditorPlugin {
    }
    class Path3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Point sampler for a [Path2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pathfollow2d.html  
     */
    class PathFollow2D extends Node2D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotates(enabled: boolean): void
        is_rotating(): boolean
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        
        /** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
        progress: number /*f64*/
        
        /** The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length. */
        progress_ratio: number /*f64*/
        
        /** The node's offset along the curve. */
        h_offset: number /*f64*/
        
        /** The node's offset perpendicular to the curve. */
        v_offset: number /*f64*/
        
        /** If `true`, this node rotates to follow the path, with the +X direction facing forward on the path. */
        rotates: boolean
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        cubic_interp: boolean
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
    }
    namespace PathFollow3D {
        enum RotationMode {
            /** Forbids the PathFollow3D to rotate. */
            ROTATION_NONE = 0,
            
            /** Allows the PathFollow3D to rotate in the Y axis only. */
            ROTATION_Y = 1,
            
            /** Allows the PathFollow3D to rotate in both the X, and Y axes. */
            ROTATION_XY = 2,
            
            /** Allows the PathFollow3D to rotate in any axis. */
            ROTATION_XYZ = 3,
            
            /** Uses the up vector information in a [Curve3D] to enforce orientation. This rotation mode requires the [Path3D]'s [member Curve3D.up_vector_enabled] property to be set to `true`. */
            ROTATION_ORIENTED = 4,
        }
    }
    /** Point sampler for a [Path3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pathfollow3d.html  
     */
    class PathFollow3D extends Node3D {
        set_progress(progress: number /*f64*/): void
        get_progress(): number /*f64*/
        set_h_offset(h_offset: number /*f64*/): void
        get_h_offset(): number /*f64*/
        set_v_offset(v_offset: number /*f64*/): void
        get_v_offset(): number /*f64*/
        set_progress_ratio(ratio: number /*f64*/): void
        get_progress_ratio(): number /*f64*/
        set_rotation_mode(rotation_mode: PathFollow3D.RotationMode): void
        get_rotation_mode(): PathFollow3D.RotationMode
        set_cubic_interpolation(enabled: boolean): void
        get_cubic_interpolation(): boolean
        set_use_model_front(enabled: boolean): void
        is_using_model_front(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_tilt_enabled(enabled: boolean): void
        is_tilt_enabled(): boolean
        
        /** Correct the [param transform]. [param rotation_mode] implicitly specifies how posture (forward, up and sideway direction) is calculated. */
        static correct_posture(transform: Transform3D, rotation_mode: PathFollow3D.RotationMode): Transform3D
        
        /** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
        progress: number /*f64*/
        
        /** The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length. */
        progress_ratio: number /*f64*/
        
        /** The node's offset along the curve. */
        h_offset: number /*f64*/
        
        /** The node's offset perpendicular to the curve. */
        v_offset: number /*f64*/
        
        /** Allows or forbids rotation on one or more axes, depending on the [enum RotationMode] constants being used. */
        rotation_mode: number /*i64*/
        
        /** If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
        use_model_front: boolean
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        cubic_interp: boolean
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
        
        /** If `true`, the tilt property of [Curve3D] takes effect. */
        tilt_enabled: boolean
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicalbone2d.html  
     */
    class PhysicalBone2D extends RigidBody2D {
        /** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
        get_joint(): Joint2D
        get_auto_configure_joint(): boolean
        set_auto_configure_joint(auto_configure_joint: boolean): void
        set_simulate_physics(simulate_physics: boolean): void
        get_simulate_physics(): boolean
        
        /** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When `true`, the PhysicalBone2D node is using physics. */
        is_simulating_physics(): boolean
        set_bone2d_nodepath(nodepath: NodePath): void
        get_bone2d_nodepath(): NodePath
        set_bone2d_index(bone_index: number /*i64*/): void
        get_bone2d_index(): number /*i64*/
        set_follow_bone_when_simulating(follow_bone: boolean): void
        get_follow_bone_when_simulating(): boolean
        
        /** The [NodePath] to the [Bone2D] that this [PhysicalBone2D] should simulate. */
        bone2d_nodepath: NodePath
        
        /** The index of the [Bone2D] that this [PhysicalBone2D] should simulate. */
        bone2d_index: number /*i64*/
        
        /** If `true`, the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
        auto_configure_joint: boolean
        
        /** If `true`, the [PhysicalBone2D] will start simulating using physics. If `false`, the [PhysicalBone2D] will follow the transform of the [Bone2D] node.  
         *      
         *  **Note:** To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.  
         */
        simulate_physics: boolean
        
        /** If `true`, the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
        follow_bone_when_simulating: boolean
    }
    namespace PhysicalBone3D {
        enum DampMode {
            /** In this mode, the body's damping value is added to any value set in areas or the default value. */
            DAMP_MODE_COMBINE = 0,
            
            /** In this mode, the body's damping value replaces any value set in areas or the default value. */
            DAMP_MODE_REPLACE = 1,
        }
        enum JointType {
            JOINT_TYPE_NONE = 0,
            JOINT_TYPE_PIN = 1,
            JOINT_TYPE_CONE = 2,
            JOINT_TYPE_HINGE = 3,
            JOINT_TYPE_SLIDER = 4,
            JOINT_TYPE_6DOF = 5,
        }
    }
    /** A physics body used to make bones in a [Skeleton3D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicalbone3d.html  
     */
    class PhysicalBone3D extends PhysicsBody3D {
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
        /* gdvirtual */ _integrate_forces(state: PhysicsDirectBodyState3D): void
        apply_central_impulse(impulse: Vector3): void
        apply_impulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        set_joint_type(joint_type: PhysicalBone3D.JointType): void
        get_joint_type(): PhysicalBone3D.JointType
        set_joint_offset(offset: Transform3D): void
        get_joint_offset(): Transform3D
        set_joint_rotation(euler: Vector3): void
        get_joint_rotation(): Vector3
        set_body_offset(offset: Transform3D): void
        get_body_offset(): Transform3D
        get_simulate_physics(): boolean
        is_simulating_physics(): boolean
        get_bone_id(): number /*i64*/
        set_mass(mass: number /*f64*/): void
        get_mass(): number /*f64*/
        set_friction(friction: number /*f64*/): void
        get_friction(): number /*f64*/
        set_bounce(bounce: number /*f64*/): void
        get_bounce(): number /*f64*/
        set_gravity_scale(gravity_scale: number /*f64*/): void
        get_gravity_scale(): number /*f64*/
        set_linear_damp_mode(linear_damp_mode: PhysicalBone3D.DampMode): void
        get_linear_damp_mode(): PhysicalBone3D.DampMode
        set_angular_damp_mode(angular_damp_mode: PhysicalBone3D.DampMode): void
        get_angular_damp_mode(): PhysicalBone3D.DampMode
        set_linear_damp(linear_damp: number /*f64*/): void
        get_linear_damp(): number /*f64*/
        set_angular_damp(angular_damp: number /*f64*/): void
        get_angular_damp(): number /*f64*/
        set_linear_velocity(linear_velocity: Vector3): void
        get_linear_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_use_custom_integrator(enable: boolean): void
        is_using_custom_integrator(): boolean
        set_can_sleep(able_to_sleep: boolean): void
        is_able_to_sleep(): boolean
        
        /** Sets the joint type. See [enum JointType] for possible values. */
        joint_type: number /*i64*/
        
        /** Sets the joint's transform. */
        joint_offset: Transform3D
        
        /** Sets the joint's rotation in radians. */
        joint_rotation: Vector3
        
        /** Sets the body's transform. */
        body_offset: Transform3D
        
        /** The body's mass. */
        mass: number /*f64*/
        
        /** The body's friction, from `0` (frictionless) to `1` (max friction). */
        friction: number /*f64*/
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicalBone3D] that preserves all its energy over time, set [member bounce] to `1.0`, [member linear_damp_mode] to [constant DAMP_MODE_REPLACE], [member linear_damp] to `0.0`, [member angular_damp_mode] to [constant DAMP_MODE_REPLACE], and [member angular_damp] to `0.0`.  
         */
        bounce: number /*f64*/
        
        /** This is multiplied by the global 3D gravity setting found in **Project > Project Settings > Physics > 3d** to produce the body's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        gravity_scale: number /*f64*/
        
        /** If `true`, internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        custom_integrator: boolean
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        
        /** Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        linear_damp: number /*f64*/
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        
        /** Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        angular_damp: number /*f64*/
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector3
        
        /** The PhysicalBone3D's rotational velocity in  *radians*  per second. */
        angular_velocity: Vector3
        
        /** If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
        can_sleep: boolean
    }
    class PhysicalBone3DEditorPlugin extends EditorPlugin {
    }
    class PhysicalBone3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicalskymaterial.html  
     */
    class PhysicalSkyMaterial extends Material {
        set_rayleigh_coefficient(rayleigh: number /*f64*/): void
        get_rayleigh_coefficient(): number /*f64*/
        set_rayleigh_color(color: Color): void
        get_rayleigh_color(): Color
        set_mie_coefficient(mie: number /*f64*/): void
        get_mie_coefficient(): number /*f64*/
        set_mie_eccentricity(eccentricity: number /*f64*/): void
        get_mie_eccentricity(): number /*f64*/
        set_mie_color(color: Color): void
        get_mie_color(): Color
        set_turbidity(turbidity: number /*f64*/): void
        get_turbidity(): number /*f64*/
        set_sun_disk_scale(scale: number /*f64*/): void
        get_sun_disk_scale(): number /*f64*/
        set_ground_color(color: Color): void
        get_ground_color(): Color
        set_energy_multiplier(multiplier: number /*f64*/): void
        get_energy_multiplier(): number /*f64*/
        set_use_debanding(use_debanding: boolean): void
        get_use_debanding(): boolean
        set_night_sky(night_sky: Texture2D): void
        get_night_sky(): Texture2D
        
        /** Controls the strength of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky. */
        rayleigh_coefficient: number /*f64*/
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red [Color] results in a Mars-looking atmosphere with a corresponding blue sunset. */
        rayleigh_color: Color
        
        /** Controls the strength of [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon. */
        mie_coefficient: number /*f64*/
        
        /** Controls the direction of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url]. A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards. */
        mie_eccentricity: number /*f64*/
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] effect. While not physically accurate, this allows for the creation of alien-looking planets. */
        mie_color: Color
        
        /** Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere. */
        turbidity: number /*f64*/
        
        /** Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth. */
        sun_disk_scale: number /*f64*/
        
        /** Modulates the [Color] on the bottom half of the sky to represent the ground. */
        ground_color: Color
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        energy_multiplier: number /*f64*/
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        use_debanding: boolean
        
        /** [Texture2D] for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day. */
        night_sky: Texture2D
    }
    class PhysicalSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Abstract base class for 2D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsbody2d.html  
     */
    class PhysicsBody2D extends CollisionObject2D {
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         */
        move_and_collide(motion: Vector2, test_only: boolean = false, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): KinematicCollision2D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
         */
        test_move(from: Transform2D, motion: Vector2, collision: KinematicCollision2D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        get_collision_exceptions(): Array
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        add_collision_exception_with(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        remove_collision_exception_with(body: Node): void
    }
    /** Abstract base class for 3D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsbody3d.html  
     */
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
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
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
    /** Provides direct access to a physics body in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate2d.html  
     */
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
        
        /** The body's rotational velocity in  *radians*  per second. */
        angular_velocity: number /*f64*/
        
        /** The body's linear velocity in pixels per second. */
        linear_velocity: Vector2
        
        /** If `true`, this body is currently sleeping (not active). */
        sleeping: boolean
        
        /** The body's transformation matrix. */
        transform: Transform2D
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate2dextension.html  
     */
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
    /** Provides direct access to a physics body in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate3d.html  
     */
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
        
        /** The body's rotational velocity in  *radians*  per second. */
        angular_velocity: Vector3
        
        /** The body's linear velocity in units per second. */
        linear_velocity: Vector3
        
        /** If `true`, this body is currently sleeping (not active). */
        sleeping: boolean
        
        /** The body's transformation matrix. */
        transform: Transform3D
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectbodystate3dextension.html  
     */
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
    /** Provides direct access to a physics space in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate2d.html  
     */
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
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate2dextension.html  
     */
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        /* gdvirtual */ _intersect_ray(from: Vector2, to: Vector2, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, hit_from_inside: boolean, result: number /*i64*/): boolean
        /* gdvirtual */ _intersect_point(position: Vector2, canvas_instance_id: number /*i64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _intersect_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, result: number /*i64*/, max_results: number /*i64*/): number /*i64*/
        /* gdvirtual */ _cast_motion(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, closest_safe: number /*i64*/, closest_unsafe: number /*i64*/): boolean
        /* gdvirtual */ _collide_shape(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, results: number /*i64*/, max_results: number /*i64*/, result_count: number /*i64*/): boolean
        /* gdvirtual */ _rest_info(shape_rid: RID, transform: Transform2D, motion: Vector2, margin: number /*f64*/, collision_mask: number /*i64*/, collide_with_bodies: boolean, collide_with_areas: boolean, rest_info: number /*i64*/): boolean
        is_body_excluded_from_query(body: RID): boolean
    }
    /** Provides direct access to a physics space in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate3d.html  
     */
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
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsdirectspacestate3dextension.html  
     */
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
    /** Holds physics-related properties of a surface, namely its roughness and bounciness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsmaterial.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicspointqueryparameters2d.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicspointqueryparameters3d.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsrayqueryparameters2d.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsrayqueryparameters3d.html  
     */
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
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsserver3drenderingserverhandler.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsshapequeryparameters2d.html  
     */
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
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicsshapequeryparameters3d.html  
     */
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
    /** Provides parameters for [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionparameters2d.html  
     */
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
    /** Provides parameters for [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionparameters3d.html  
     */
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
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionresult2d.html  
     */
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
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_physicstestmotionresult3d.html  
     */
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
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pinjoint2d.html  
     */
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
    /** A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pinjoint3d.html  
     */
    class PinJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: PinJoint3D.Param, value: number /*f64*/): void
        
        /** Returns the value of the specified parameter. */
        get_param(param: PinJoint3D.Param): number /*f64*/
    }
    /** A [Cubemap] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdercubemap.html  
     */
    class PlaceholderCubemap extends PlaceholderTextureLayered {
    }
    /** A [CubemapArray] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdercubemaparray.html  
     */
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
    }
    /** Placeholder class for a material.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdermaterial.html  
     */
    class PlaceholderMaterial extends Material {
    }
    /** Placeholder class for a mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdermesh.html  
     */
    class PlaceholderMesh extends Mesh {
        set_aabb(aabb: AABB): void
        
        /** The smallest [AABB] enclosing this mesh in local space. */
        aabb: AABB
    }
    /** Placeholder class for a 2-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture2d.html  
     */
    class PlaceholderTexture2D extends Texture2D {
        set_size(size: Vector2): void
        
        /** The texture's size (in pixels). */
        size: Vector2
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture2darray.html  
     */
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
    }
    /** Placeholder class for a 3-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexture3d.html  
     */
    class PlaceholderTexture3D extends Texture3D {
        set_size(size: Vector3i): void
        get_size(): Vector3i
        
        /** The texture's size (in pixels). */
        size: Vector3i
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_placeholdertexturelayered.html  
     */
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
    /** Class representing a planar [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_planemesh.html  
     */
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
    /** Positional 2D light source.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pointlight2d.html  
     */
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
    /** Mesh with a single Point primitive.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_pointmesh.html  
     */
    class PointMesh extends PrimitiveMesh {
    }
    /** A 2D polygon.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_polygon2d.html  
     */
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
    /** Flat 2D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_polygonoccluder3d.html  
     */
    class PolygonOccluder3D extends Occluder3D {
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        _has_editable_3d_polygon_no_depth(): boolean
        
        /** The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.  
         *  The polygon must  *not*  have intersecting lines. Otherwise, triangulation will fail (with an error message printed).  
         */
        polygon: PackedVector2Array
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_polygonpathfinder.html */
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
    /** Base class for contextual windows and panels with fixed position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popup.html  
     */
    class Popup extends Window {
        /** Emitted when the popup is hidden. */
        readonly popup_hide: Signal //  => void
    }
    /** A modal window used to display a list of options.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popupmenu.html  
     */
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
    /** A popup with a panel background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_popuppanel.html  
     */
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
    /** Provides a compressed texture for disk and/or VRAM in a way that is portable.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_portablecompressedtexture2d.html  
     */
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
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_primitivemesh.html  
     */
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
    /** Class representing a prism-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_prismmesh.html  
     */
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
    /** A material that defines a simple sky for a [Sky] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_proceduralskymaterial.html  
     */
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
        
        /** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be  *added*  to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
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
    /** A control used for visual representation of a percentage.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_progressbar.html  
     */
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
    /** Interpolates an [Object]'s property over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_propertytweener.html  
     */
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
    /** Class representing a square mesh facing the camera.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_quadmesh.html  
     */
    class QuadMesh extends PlaneMesh {
    }
    /** Flat plane shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_quadoccluder3d.html  
     */
    class QuadOccluder3D extends Occluder3D {
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The quad's size in 3D units. */
        size: Vector2
    }
    /** Attachment format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdattachmentformat.html  
     */
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
    /** Framebuffer pass attachment description (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdframebufferpass.html  
     */
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
    /** Pipeline color blend state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinecolorblendstate.html  
     */
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
    /** Pipeline color blend state attachment (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinecolorblendstateattachment.html  
     */
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
    /** Pipeline depth/stencil state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinedepthstencilstate.html  
     */
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
    /** Pipeline multisample state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinemultisamplestate.html  
     */
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
        
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [member enable_sample_shading] is `true`. If [member min_sample_shading] is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is  *not*  `1.0`. */
        min_sample_shading: number /*f64*/
        
        /** If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        enable_alpha_to_coverage: boolean
        
        /** If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is `true`. */
        enable_alpha_to_one: boolean
        
        /** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
        sample_masks: Array
    }
    /** Pipeline rasterization state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinerasterizationstate.html  
     */
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
    /** Pipeline specialization constant (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdpipelinespecializationconstant.html  
     */
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
    /** Sampler state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdsamplerstate.html  
     */
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
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshaderfile.html  
     */
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
    /** SPIR-V intermediate representation as part of a [RDShaderFile] (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshaderspirv.html  
     */
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
    /** Shader source code (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdshadersource.html  
     */
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
    /** Texture format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdtextureformat.html  
     */
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
    /** Texture view (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdtextureview.html  
     */
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
    /** Shader uniform (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rduniform.html  
     */
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
    /** Vertex attribute (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rdvertexattribute.html  
     */
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
    /** Provides methods for generating pseudo-random numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_randomnumbergenerator.html  
     */
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
         *  **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed  *before*  modifying the [member state]:  
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
    /** Abstract base class for controls that represent a number within a range.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_range.html  
     */
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
        
        /** Emitted when [member value] changes. When used on a [Slider], this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [signal value_changed], consider using a  *debouncing*  [Timer] to call the function less often.  
         *      
         *  **Note:** Unlike signals such as [signal LineEdit.text_changed], [signal value_changed] is also emitted when [param value] is set directly via code.  
         */
        readonly value_changed: Signal // value: number /*f64*/ => void
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal //  => void
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_raycast2d.html  
     */
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
    /** A ray in 3D space, used to find the first [CollisionObject3D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_raycast3d.html  
     */
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
    /** A 2D rectangle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rectangleshape2d.html  
     */
    class RectangleShape2D extends Shape2D {
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The rectangle's width and height. */
        size: Vector2
    }
    /** Base class for reference-counted objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_refcounted.html  
     */
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
    /** A rectangle hint for designing UIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_referencerect.html  
     */
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
    /** Captures its surroundings to create fast, accurate reflections from a given point.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_reflectionprobe.html  
     */
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
    /** Class for searching text for patterns using regular expressions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_regex.html  
     */
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
    /** Contains the results of a [RegEx] search.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_regexmatch.html  
     */
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
    /** RemoteTransform2D pushes its own [Transform2D] to another [Node2D] derived node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_remotetransform2d.html  
     */
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
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_remotetransform3d.html  
     */
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
    /** Abstract scene buffers object, created for each viewport for which 3D rendering is done.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffers.html  
     */
    class RenderSceneBuffers extends RefCounted {
        /** This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
        configure(config: RenderSceneBuffersConfiguration): void
    }
    /** Configuration object used to setup a [RenderSceneBuffers] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersconfiguration.html  
     */
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
    /** This class allows for a RenderSceneBuffer implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersextension.html  
     */
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
    /** Abstract render scene buffer implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_renderscenebuffersrd.html  
     */
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
        
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_height].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screen_get_width(screen: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_width].  
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
    /** Base class for serializable objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resource.html  
     */
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
         *   *Deprecated.*  This signal is only emitted when the resource is created. Override [method _setup_local_to_scene] instead.  
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
    /** Loads a specific resource type from a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceformatloader.html  
     */
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
    /** Saves a specific resource type to a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceformatsaver.html  
     */
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
            
            /** The import order for scenes, which ensures scenes are imported  *after*  all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources. */
            IMPORT_ORDER_SCENE = 100,
        }
    }
    /** Base class for resource importers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporter.html  
     */
    class ResourceImporter extends RefCounted {
    }
    /** Imports a bitmap font in the BMFont (`.fnt`) format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterbmfont.html  
     */
    class ResourceImporterBMFont extends ResourceImporter {
    }
    /** Imports a [BitMap] resource (2D array of boolean values).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterbitmap.html  
     */
    class ResourceImporterBitMap extends ResourceImporter {
    }
    /** Imports comma-separated values  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportercsvtranslation.html  
     */
    class ResourceImporterCSVTranslation extends ResourceImporter {
    }
    /** Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterdynamicfont.html  
     */
    class ResourceImporterDynamicFont extends ResourceImporter {
    }
    /** Imports a image for use in scripting, with no rendering capabilities.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterimage.html  
     */
    class ResourceImporterImage extends ResourceImporter {
    }
    /** Imports a fixed-width bitmap font where all glyphs have the same width and height.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterimagefont.html  
     */
    class ResourceImporterImageFont extends ResourceImporter {
    }
    /** Imports a 3-dimensional texture ([Texture3D]), a [Texture2DArray], a [Cubemap] or a [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterlayeredtexture.html  
     */
    class ResourceImporterLayeredTexture extends ResourceImporter {
    }
    /** Imports a MP3 audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportermp3.html  
     */
    class ResourceImporterMP3 extends ResourceImporter {
    }
    /** Imports an OBJ 3D model as an independent [Mesh] or scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterobj.html  
     */
    class ResourceImporterOBJ extends ResourceImporter {
    }
    /** Imports an Ogg Vorbis audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporteroggvorbis.html  
     */
    class ResourceImporterOggVorbis extends ResourceImporter {
        /** This method loads audio data from a PackedByteArray buffer into an AudioStreamOggVorbis object. */
        static load_from_buffer(buffer: PackedByteArray): AudioStreamOggVorbis
        
        /** This method loads audio data from a file into an AudioStreamOggVorbis object. The file path is provided as a string. */
        static load_from_file(path: string): AudioStreamOggVorbis
    }
    /** Imports a glTF, FBX, Collada or Blender 3D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterscene.html  
     */
    class ResourceImporterScene extends ResourceImporter {
    }
    /** Imports native GLSL shaders (not Godot shaders) as a [RDShaderFile].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportershaderfile.html  
     */
    class ResourceImporterShaderFile extends ResourceImporter {
    }
    /** Imports an image for use in 2D or 3D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportertexture.html  
     */
    class ResourceImporterTexture extends ResourceImporter {
    }
    /** Imports a collection of textures from a PNG image into an optimized [AtlasTexture] for 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimportertextureatlas.html  
     */
    class ResourceImporterTextureAtlas extends ResourceImporter {
    }
    /** Imports a WAV audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourceimporterwav.html  
     */
    class ResourceImporterWAV extends ResourceImporter {
    }
    /** A node used to preload sub-resources inside a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_resourcepreloader.html  
     */
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
    /** Represents a straight ribbon-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_ribbontrailmesh.html  
     */
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
    /** A custom effect for a [RichTextLabel].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_richtexteffect.html  
     */
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
    /** A control for displaying text that can contain different font styles, images, and basic formatting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_richtextlabel.html  
     */
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
    /** A 2D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rigidbody2d.html  
     */
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
        
        /** The body's rotational velocity in  *radians*  per second. */
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
    /** A 3D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rigidbody3d.html  
     */
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
        
        /** The RigidBody3D's rotational velocity in  *radians*  per second. */
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
    /** Editor-only helper for setting up root motion in [AnimationMixer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_rootmotionview.html  
     */
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
        
        /** If `true`, the grid's points will all be on the same Y coordinate ( *local*  Y = 0). If `false`, the points' original Y coordinate is preserved. */
        zero_y: boolean
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsconsole.html */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rslist.html */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsnativebridge.html */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsoutputdevice.html */
    class RsOutputDevice extends RefCounted {
        log(...vargargs: any[]): void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_rsterrain.html */
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
    /** High-level multiplayer API implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenemultiplayer.html  
     */
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
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenereplicationconfig.html  
     */
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
         *   *Deprecated.*  Use [method property_get_replication_mode] instead.  
         */
        property_get_sync(path: NodePath): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on process.  
         *   *Deprecated.*  Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ALWAYS] instead.  
         */
        property_set_sync(path: NodePath, enabled: boolean): void
        
        /** Returns whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *   *Deprecated.*  Use [method property_get_replication_mode] instead.  
         */
        property_get_watch(path: NodePath): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process.  
         *   *Deprecated.*  Use [method property_set_replication_mode] with [constant REPLICATION_MODE_ON_CHANGE] instead.  
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
    /** Provides access to a scene file's information.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_scenestate.html  
     */
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
}
