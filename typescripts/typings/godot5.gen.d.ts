// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class SoftBody3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Class representing a spherical [PrimitiveMesh]. */
    class SphereMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(radial_segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_is_hemisphere(is_hemisphere: boolean): void
        get_is_hemisphere(): boolean
        
        /** Radius of sphere. */
        radius: number /*f64*/
        
        /** Full height of the sphere. */
        height: number /*f64*/
        
        /** Number of radial segments on the sphere. */
        radial_segments: number /*i64*/
        
        /** Number of segments along the height of the sphere. */
        rings: number /*i64*/
        
        /** If `true`, a hemisphere is created rather than a full sphere.  
         *      
         *  **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.  
         */
        is_hemisphere: boolean
    }
    /** Spherical shape for use with occlusion culling in [OccluderInstance3D]. */
    class SphereOccluder3D extends Occluder3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The sphere's radius in 3D units. */
        radius: number /*f64*/
    }
    /** A 3D sphere shape used for physics collision. */
    class SphereShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The sphere's radius. The shape's diameter is double the radius. */
        radius: number /*f64*/
    }
    /** An input field for numbers. */
    class SpinBox extends Range {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_suffix(suffix: string): void
        get_suffix(): string
        set_prefix(prefix: string): void
        get_prefix(): string
        set_editable(enabled: boolean): void
        set_custom_arrow_step(arrow_step: number /*f64*/): void
        get_custom_arrow_step(): number /*f64*/
        is_editable(): boolean
        set_update_on_text_changed(enabled: boolean): void
        get_update_on_text_changed(): boolean
        set_select_all_on_focus(enabled: boolean): void
        is_select_all_on_focus(): boolean
        
        /** Applies the current value of this [SpinBox]. */
        apply(): void
        
        /** Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_line_edit(): LineEdit
        
        /** Changes the alignment of the underlying [LineEdit]. */
        alignment: number /*i64*/
        
        /** If `true`, the [SpinBox] will be editable. Otherwise, it will be read only. */
        editable: boolean
        
        /** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is [i]changed[/i] instead of [i]submitted[/i]. See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted]. */
        update_on_text_changed: boolean
        
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        prefix: string
        
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        suffix: string
        
        /** If not `0`, [member Range.value] will always be rounded to a multiple of [member custom_arrow_step] when interacting with the arrow buttons of the [SpinBox]. */
        custom_arrow_step: number /*f64*/
        
        /** If `true`, the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
        select_all_on_focus: boolean
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            /** The split dragger is visible when the cursor hovers it. */
            DRAGGER_VISIBLE = 0,
            
            /** The split dragger is never visible. */
            DRAGGER_HIDDEN = 1,
            
            /** The split dragger is never visible and its space collapsed. */
            DRAGGER_HIDDEN_COLLAPSED = 2,
        }
    }
    /** A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio. */
    class SplitContainer extends Container {
        set_split_offset(offset: number /*i64*/): void
        get_split_offset(): number /*i64*/
        
        /** Clamps the [member split_offset] value to not go outside the currently possible minimal and maximum values. */
        clamp_split_offset(): void
        set_collapsed(collapsed: boolean): void
        is_collapsed(): boolean
        set_dragger_visibility(mode: SplitContainer.DraggerVisibility): void
        get_dragger_visibility(): SplitContainer.DraggerVisibility
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The initial offset of the splitting between the two [Control]s, with `0` being at the end of the first [Control]. */
        split_offset: number /*i64*/
        
        /** If `true`, the area of the first [Control] will be collapsed and the dragger will be disabled. */
        collapsed: boolean
        
        /** Determines the dragger's visibility. See [enum DraggerVisibility] for details. */
        dragger_visibility: number /*i64*/
        
        /** If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].  
         */
        vertical: boolean
        
        /** Emitted when the dragger is dragged by user. */
        readonly dragged: Signal // offset: number /*i64*/ => void
    }
    class SplitContainerDragger extends Control {
    }
    /** A spotlight, such as a reflector spotlight or a lantern. */
    class SpotLight3D extends Light3D {
    }
    /** A 3D raycast that dynamically moves its children near the collision point. */
    class SpringArm3D extends Node3D {
        /** Returns the spring arm's current length. */
        get_hit_length(): number /*f64*/
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_shape(shape: Shape3D): void
        get_shape(): Shape3D
        
        /** Adds the [PhysicsBody3D] object with the given [RID] to the list of [PhysicsBody3D] objects excluded from the collision check. */
        add_excluded_object(RID: RID): void
        
        /** Removes the given [RID] from the list of [PhysicsBody3D] objects excluded from the collision check. */
        remove_excluded_object(RID: RID): boolean
        
        /** Clears the list of [PhysicsBody3D] objects excluded from the collision check. */
        clear_excluded_objects(): void
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        set_margin(margin: number /*f64*/): void
        get_margin(): number /*f64*/
        
        /** The layers against which the collision check shall be done. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        
        /** The [Shape3D] to use for the SpringArm3D.  
         *  When the shape is set, the SpringArm3D will cast the [Shape3D] on its z axis instead of performing a ray cast.  
         */
        shape: Shape3D
        
        /** The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.  
         *  To know more about how to perform a shape cast or a ray cast, please consult the [PhysicsDirectSpaceState3D] documentation.  
         */
        spring_length: number /*f64*/
        
        /** When the collision check is made, a candidate length for the SpringArm3D is given.  
         *  The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.  
         *  This margin is useful for when the SpringArm3D has a [Camera3D] as a child node: without the margin, the [Camera3D] would be placed on the exact point of collision, while with the margin the [Camera3D] would be placed close to the point of collision.  
         */
        margin: number /*f64*/
    }
    class SpringArm3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** General-purpose sprite node. */
    class Sprite2D extends Node2D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        
        /** Returns `true`, if the pixel at the given position is opaque and `false` in other case.  
         *      
         *  **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.  
         */
        is_pixel_opaque(pos: Vector2): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_region_filter_clip_enabled(enabled: boolean): void
        is_region_filter_clip_enabled(): boolean
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        
        /** Returns a [Rect2] representing the Sprite2D's boundary in local coordinates. Can be used to detect if the Sprite2D was clicked.  
         *  **Example:**  
         *    
         */
        get_rect(): Rect2
        
        /** [Texture2D] object to draw. */
        texture: Texture2D
        
        /** If `true`, texture is centered. */
        centered: boolean
        
        /** The texture's drawing offset. */
        offset: Vector2
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        hframes: number /*i64*/
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        vframes: number /*i64*/
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        frame: number /*i64*/
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2i
        
        /** If `true`, texture is cut from a larger atlas texture. See [member region_rect]. */
        region_enabled: boolean
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        region_rect: Rect2
        
        /** If `true`, the outermost pixels get blurred out. [member region_enabled] must be `true`. */
        region_filter_clip_enabled: boolean
        
        /** Emitted when the [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the [member texture] changes. */
        readonly texture_changed: Signal //  => void
    }
    class Sprite2DEditor extends Control {
        _add_as_sibling_or_child(_unnamed_arg0: Node, _unnamed_arg1: Node): void
    }
    class Sprite2DEditorPlugin extends EditorPlugin {
    }
    /** 2D sprite node in a 3D world. */
    class Sprite3D extends SpriteBase3D {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_region_enabled(enabled: boolean): void
        is_region_enabled(): boolean
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_frame(frame: number /*i64*/): void
        get_frame(): number /*i64*/
        set_frame_coords(coords: Vector2i): void
        get_frame_coords(): Vector2i
        set_vframes(vframes: number /*i64*/): void
        get_vframes(): number /*i64*/
        set_hframes(hframes: number /*i64*/): void
        get_hframes(): number /*i64*/
        
        /** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
        texture: Texture2D
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        hframes: number /*i64*/
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        vframes: number /*i64*/
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        frame: number /*i64*/
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2
        
        /** If `true`, the sprite will use [member region_rect] and display only the specified part of its texture. */
        region_enabled: boolean
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        region_rect: Rect2
        
        /** Emitted when the [member frame] changes. */
        readonly frame_changed: Signal //  => void
        
        /** Emitted when the [member texture] changes. */
        readonly texture_changed: Signal //  => void
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            /** If set, the texture's transparency and the opacity are used to make those parts of the sprite invisible. */
            FLAG_TRANSPARENT = 0,
            
            /** If set, lights in the environment affect the sprite. */
            FLAG_SHADED = 1,
            
            /** If set, texture can be seen from the back as well. If not, the texture is invisible when looking at it from behind. */
            FLAG_DOUBLE_SIDED = 2,
            
            /** Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it. */
            FLAG_DISABLE_DEPTH_TEST = 3,
            
            /** Label is scaled by depth so that it always appears the same size on screen. */
            FLAG_FIXED_SIZE = 4,
            
            /** Represents the size of the [enum DrawFlags] enum. */
            FLAG_MAX = 5,
        }
        enum AlphaCutMode {
            /** This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. */
            ALPHA_CUT_DISABLED = 0,
            
            /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). On the bright side, this mode doesn't suffer from transparency sorting issues when multiple transparent materials are overlapping. This mode is also known as [i]alpha testing[/i] or [i]1-bit transparency[/i]. */
            ALPHA_CUT_DISCARD = 1,
            
            /** This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting. */
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            
            /** This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque. */
            ALPHA_CUT_HASH = 3,
        }
    }
    /** 2D sprite node in 3D environment. */
    class SpriteBase3D extends GeometryInstance3D {
        set_centered(centered: boolean): void
        is_centered(): boolean
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_flip_h(flip_h: boolean): void
        is_flipped_h(): boolean
        set_flip_v(flip_v: boolean): void
        is_flipped_v(): boolean
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_axis(axis: Vector3.Axis): void
        get_axis(): Vector3.Axis
        
        /** If `true`, the specified flag will be enabled. See [enum SpriteBase3D.DrawFlags] for a list of flags. */
        set_draw_flag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        get_draw_flag(flag: SpriteBase3D.DrawFlags): boolean
        set_alpha_cut_mode(mode: SpriteBase3D.AlphaCutMode): void
        get_alpha_cut_mode(): SpriteBase3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        
        /** Returns the rectangle representing this sprite. */
        get_item_rect(): Rect2
        
        /** Returns a [TriangleMesh] with the sprite's vertices following its current configuration (such as its [member axis] and [member pixel_size]). */
        generate_triangle_mesh(): TriangleMesh
        
        /** If `true`, texture will be centered. */
        centered: boolean
        
        /** The texture's drawing offset. */
        offset: Vector2
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
        
        /** A color value used to [i]multiply[/i] the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.  
         *      
         *  **Note:** Unlike [member CanvasItem.modulate] for 2D, colors with values above `1.0` (overbright) are not supported.  
         *      
         *  **Note:** If a [member GeometryInstance3D.material_override] is defined on the [SpriteBase3D], the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [member modulate] will be ignored. For a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] must be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.  
         */
        modulate: Color
        
        /** The size of one pixel's width on the sprite to scale it in 3D. */
        pixel_size: number /*f64*/
        
        /** The direction in which the front of the texture faces. */
        axis: number /*i64*/
        
        /** The billboard mode to use for the sprite. See [enum BaseMaterial3D.BillboardMode] for possible values. */
        billboard: number /*i64*/
        
        /** The alpha cutting mode to use for the sprite. See [enum AlphaCutMode] for possible values. */
        alpha_cut: number /*i64*/
        
        /** Threshold at which the alpha scissor will discard values. */
        alpha_scissor_threshold: number /*f64*/
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        alpha_hash_scale: number /*f64*/
        
        /** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
        alpha_antialiasing_mode: number /*i64*/
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        alpha_antialiasing_edge: number /*f64*/
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options.  
         *      
         *  **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.  
         */
        texture_filter: number /*i64*/
        
        /** Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        render_priority: number /*i64*/
    }
    class SpriteBase3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D. */
    class SpriteFrames extends Resource {
        /** Adds a new [param anim] animation to the library. */
        add_animation(anim: StringName): void
        
        /** Returns `true` if the [param anim] animation exists. */
        has_animation(anim: StringName): boolean
        
        /** Removes the [param anim] animation. */
        remove_animation(anim: StringName): void
        
        /** Changes the [param anim] animation's name to [param newname]. */
        rename_animation(anim: StringName, newname: StringName): void
        
        /** Returns an array containing the names associated to each animation. Values are placed in alphabetical order. */
        get_animation_names(): PackedStringArray
        
        /** Sets the speed for the [param anim] animation in frames per second. */
        set_animation_speed(anim: StringName, fps: number /*f64*/): void
        
        /** Returns the speed in frames per second for the [param anim] animation. */
        get_animation_speed(anim: StringName): number /*f64*/
        
        /** If [param loop] is `true`, the [param anim] animation will loop when it reaches the end, or the start if it is played in reverse. */
        set_animation_loop(anim: StringName, loop: boolean): void
        
        /** Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`. */
        get_animation_loop(anim: StringName): boolean
        
        /** Adds a frame to the [param anim] animation. If [param at_position] is `-1`, the frame will be added to the end of the animation. */
        add_frame(anim: StringName, texture: Texture2D, duration: number /*f64*/ = 1, at_position: number /*i64*/ = -1): void
        
        /** Sets the [param texture] and the [param duration] of the frame [param idx] in the [param anim] animation. */
        set_frame(anim: StringName, idx: number /*i64*/, texture: Texture2D, duration: number /*f64*/ = 1): void
        
        /** Removes the [param anim] animation's frame [param idx]. */
        remove_frame(anim: StringName, idx: number /*i64*/): void
        
        /** Returns the number of frames for the [param anim] animation. */
        get_frame_count(anim: StringName): number /*i64*/
        
        /** Returns the texture of the frame [param idx] in the [param anim] animation. */
        get_frame_texture(anim: StringName, idx: number /*i64*/): Texture2D
        
        /** Returns a relative duration of the frame [param idx] in the [param anim] animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:  
         *    
         *  In this example, `playing_speed` refers to either [method AnimatedSprite2D.get_playing_speed] or [method AnimatedSprite3D.get_playing_speed].  
         */
        get_frame_duration(anim: StringName, idx: number /*i64*/): number /*f64*/
        
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        
        /** Removes all animations. An empty `default` animation will be created. */
        clear_all(): void
        _set_animations(animations: Array): void
        _get_animations(): Array
        animations: Array
    }
    class SpriteFramesEditor extends HSplitContainer {
        _update_library(skipsel: boolean = false): void
        _select_animation(name: string, update_node: boolean = true): void
    }
    class SpriteFramesEditorPlugin extends EditorPlugin {
    }
    /** A PBR (Physically Based Rendering) material to be used on 3D objects. */
    class StandardMaterial3D extends BaseMaterial3D {
    }
    class StandardMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path. */
    class StaticBody2D extends PhysicsBody2D {
        set_constant_linear_velocity(vel: Vector2): void
        set_constant_angular_velocity(vel: number /*f64*/): void
        get_constant_linear_velocity(): Vector2
        get_constant_angular_velocity(): number /*f64*/
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        constant_linear_velocity: Vector2
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        constant_angular_velocity: number /*f64*/
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path. */
    class StaticBody3D extends PhysicsBody3D {
        set_constant_linear_velocity(vel: Vector3): void
        set_constant_angular_velocity(vel: Vector3): void
        get_constant_linear_velocity(): Vector3
        get_constant_angular_velocity(): Vector3
        set_physics_material_override(physics_material_override: PhysicsMaterial): void
        get_physics_material_override(): PhysicsMaterial
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        physics_material_override: PhysicsMaterial
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        constant_linear_velocity: Vector3
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        constant_angular_velocity: Vector3
    }
    /** Abstract base class for interacting with streams. */
    class StreamPeer extends RefCounted {
        /** Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [enum Error] code. */
        put_data(data: PackedByteArray): GodotError
        
        /** Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [enum Error] code and an integer, describing how much data was actually sent. */
        put_partial_data(data: PackedByteArray): Array
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [enum Error] code and a data array. */
        get_data(bytes: number /*i64*/): Array
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the "bytes" argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values, an [enum Error] code, and a data array. */
        get_partial_data(bytes: number /*i64*/): Array
        
        /** Returns the number of bytes this [StreamPeer] has available. */
        get_available_bytes(): number /*i64*/
        set_big_endian(enable: boolean): void
        is_big_endian_enabled(): boolean
        
        /** Puts a signed byte into the stream. */
        put_8(value: number /*i64*/): void
        
        /** Puts an unsigned byte into the stream. */
        put_u8(value: number /*i64*/): void
        
        /** Puts a signed 16-bit value into the stream. */
        put_16(value: number /*i64*/): void
        
        /** Puts an unsigned 16-bit value into the stream. */
        put_u16(value: number /*i64*/): void
        
        /** Puts a signed 32-bit value into the stream. */
        put_32(value: number /*i64*/): void
        
        /** Puts an unsigned 32-bit value into the stream. */
        put_u32(value: number /*i64*/): void
        
        /** Puts a signed 64-bit value into the stream. */
        put_64(value: number /*i64*/): void
        
        /** Puts an unsigned 64-bit value into the stream. */
        put_u64(value: number /*i64*/): void
        
        /** Puts a single-precision float into the stream. */
        put_float(value: number /*f64*/): void
        
        /** Puts a double-precision float into the stream. */
        put_double(value: number /*f64*/): void
        
        /** Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.  
         *      
         *  **Note:** To put an ASCII string without prepending its size, you can use [method put_data]:  
         *    
         */
        put_string(value: string): void
        
        /** Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.  
         *      
         *  **Note:** To put a UTF-8 string without prepending its size, you can use [method put_data]:  
         *    
         */
        put_utf8_string(value: string): void
        
        /** Puts a Variant into the stream. If [param full_objects] is `true` encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        put_var(value: any, full_objects: boolean = false): void
        
        /** Gets a signed byte from the stream. */
        get_8(): number /*i64*/
        
        /** Gets an unsigned byte from the stream. */
        get_u8(): number /*i64*/
        
        /** Gets a signed 16-bit value from the stream. */
        get_16(): number /*i64*/
        
        /** Gets an unsigned 16-bit value from the stream. */
        get_u16(): number /*i64*/
        
        /** Gets a signed 32-bit value from the stream. */
        get_32(): number /*i64*/
        
        /** Gets an unsigned 32-bit value from the stream. */
        get_u32(): number /*i64*/
        
        /** Gets a signed 64-bit value from the stream. */
        get_64(): number /*i64*/
        
        /** Gets an unsigned 64-bit value from the stream. */
        get_u64(): number /*i64*/
        
        /** Gets a single-precision float from the stream. */
        get_float(): number /*f64*/
        
        /** Gets a double-precision float from the stream. */
        get_double(): number /*f64*/
        
        /** Gets an ASCII string with byte-length [param bytes] from the stream. If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_string]. */
        get_string(bytes: number /*i64*/ = -1): string
        
        /** Gets a UTF-8 string with byte-length [param bytes] from the stream (this decodes the string sent as UTF-8). If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_utf8_string]. */
        get_utf8_string(bytes: number /*i64*/ = -1): string
        
        /** Gets a Variant from the stream. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** If `true`, this [StreamPeer] will using big-endian format for encoding and decoding. */
        big_endian: boolean
    }
    /** A stream peer used to handle binary data streams. */
    class StreamPeerBuffer extends StreamPeer {
        /** Moves the cursor to the specified position. [param position] must be a valid index of [member data_array]. */
        seek(position: number /*i64*/): void
        
        /** Returns the size of [member data_array]. */
        get_size(): number /*i64*/
        
        /** Returns the current cursor position. */
        get_position(): number /*i64*/
        
        /** Resizes the [member data_array]. This [i]doesn't[/i] update the cursor. */
        resize(size: number /*i64*/): void
        set_data_array(data: PackedByteArray): void
        get_data_array(): PackedByteArray
        
        /** Clears the [member data_array] and resets the cursor. */
        clear(): void
        
        /** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
        duplicate(): StreamPeerBuffer
        
        /** The underlying data buffer. Setting this value resets the cursor. */
        data_array: PackedByteArray
    }
    class StreamPeerExtension extends StreamPeer {
        /* gdvirtual */ _get_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _get_partial_data(r_buffer: number /*i64*/, r_bytes: number /*i64*/, r_received: number /*i64*/): GodotError
        /* gdvirtual */ _put_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _put_partial_data(p_data: number /*i64*/, p_bytes: number /*i64*/, r_sent: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_bytes(): number /*i64*/
    }
    /** A stream peer that handles GZIP and deflate compression/decompression. */
    class StreamPeerGZIP extends StreamPeer {
        /** Start the stream in compression mode with the given [param buffer_size], if [param use_deflate] is `true` uses deflate instead of GZIP. */
        start_compression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        
        /** Start the stream in decompression mode with the given [param buffer_size], if [param use_deflate] is `true` uses deflate instead of GZIP. */
        start_decompression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        
        /** Finalizes the stream, compressing or decompressing any buffered chunk left. */
        finish(): GodotError
        
        /** Clears this stream, resetting the internal state. */
        clear(): void
    }
    namespace StreamPeerTCP {
        enum Status {
            /** The initial status of the [StreamPeerTCP]. This is also the status after disconnecting. */
            STATUS_NONE = 0,
            
            /** A status representing a [StreamPeerTCP] that is connecting to a host. */
            STATUS_CONNECTING = 1,
            
            /** A status representing a [StreamPeerTCP] that is connected to a host. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [StreamPeerTCP] in error state. */
            STATUS_ERROR = 3,
        }
    }
    /** A stream peer that handles TCP connections. */
    class StreamPeerTCP extends StreamPeer {
        /** Opens the TCP socket, and binds it to the specified local address.  
         *  This method is generally not needed, and only used to force the subsequent call to [method connect_to_host] to use the specified [param host] and [param port] as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.  
         */
        bind(port: number /*i64*/, host: string = '*'): GodotError
        
        /** Connects to the specified `host:port` pair. A hostname will be resolved if valid. Returns [constant OK] on success. */
        connect_to_host(host: string, port: number /*i64*/): GodotError
        
        /** Poll the socket, updating its state. See [method get_status]. */
        poll(): GodotError
        
        /** Returns the status of the connection, see [enum Status]. */
        get_status(): StreamPeerTCP.Status
        
        /** Returns the IP of this peer. */
        get_connected_host(): string
        
        /** Returns the port of this peer. */
        get_connected_port(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Disconnects from host. */
        disconnect_from_host(): void
        
        /** If [param enabled] is `true`, packets will be sent immediately. If [param enabled] is `false` (the default), packet transfers will be delayed and combined using [url=https://en.wikipedia.org/wiki/Nagle%27s_algorithm]Nagle's algorithm[/url].  
         *      
         *  **Note:** It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.  
         */
        set_no_delay(enabled: boolean): void
    }
    namespace StreamPeerTLS {
        enum Status {
            /** A status representing a [StreamPeerTLS] that is disconnected. */
            STATUS_DISCONNECTED = 0,
            
            /** A status representing a [StreamPeerTLS] during handshaking. */
            STATUS_HANDSHAKING = 1,
            
            /** A status representing a [StreamPeerTLS] that is connected to a host. */
            STATUS_CONNECTED = 2,
            
            /** A status representing a [StreamPeerTLS] in error state. */
            STATUS_ERROR = 3,
            
            /** An error status that shows a mismatch in the TLS certificate domain presented by the host and the domain requested for validation. */
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    /** A stream peer that handles TLS connections. */
    class StreamPeerTLS extends StreamPeer {
        /** Poll the connection to check for incoming bytes. Call this right before [method StreamPeer.get_available_bytes] for it to work properly. */
        poll(): void
        
        /** Accepts a peer connection as a server using the given [param server_options]. See [method TLSOptions.server]. */
        accept_stream(stream: StreamPeer, server_options: TLSOptions): GodotError
        
        /** Connects to a peer using an underlying [StreamPeer] [param stream] and verifying the remote certificate is correctly signed for the given [param common_name]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        connect_to_stream(stream: StreamPeer, common_name: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Returns the status of the connection. See [enum Status] for values. */
        get_status(): StreamPeerTLS.Status
        
        /** Returns the underlying [StreamPeer] connection, used in [method accept_stream] or [method connect_to_stream]. */
        get_stream(): StreamPeer
        
        /** Disconnects from host. */
        disconnect_from_stream(): void
    }
    /** Abstract base class for defining stylized boxes for UI elements. */
    class StyleBox extends Resource {
        /* gdvirtual */ _draw(to_canvas_item: RID, rect: Rect2): void
        /* gdvirtual */ _get_draw_rect(rect: Rect2): Rect2
        
        /** Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [method get_minimum_size] only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes. */
        /* gdvirtual */ _get_minimum_size(): Vector2
        /* gdvirtual */ _test_mask(point: Vector2, rect: Rect2): boolean
        
        /** Returns the minimum size that this stylebox can be shrunk to. */
        get_minimum_size(): Vector2
        
        /** Sets the default value of the specified [enum Side] to [param offset] pixels. */
        set_content_margin(margin: Side, offset: number /*f64*/): void
        
        /** Sets the default margin to [param offset] pixels for all sides. */
        set_content_margin_all(offset: number /*f64*/): void
        
        /** Returns the default margin of the specified [enum Side]. */
        get_content_margin(margin: Side): number /*f64*/
        
        /** Returns the content margin offset for the specified [enum Side].  
         *  Positive values reduce size inwards, unlike [Control]'s margin values.  
         */
        get_margin(margin: Side): number /*f64*/
        
        /** Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`. */
        get_offset(): Vector2
        
        /** Draws this stylebox using a canvas item identified by the given [RID].  
         *  The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].  
         */
        draw(canvas_item: RID, rect: Rect2): void
        
        /** Returns the [CanvasItem] that handles its [constant CanvasItem.NOTIFICATION_DRAW] or [method CanvasItem._draw] callback at this moment. */
        get_current_item_drawn(): CanvasItem
        
        /** Test a position in a rectangle, return whether it passes the mask test. */
        test_mask(point: Vector2, rect: Rect2): boolean
    }
    class StyleBoxEditorPlugin extends EditorPlugin {
    }
    /** An empty [StyleBox] (does not display anything). */
    class StyleBoxEmpty extends StyleBox {
    }
    /** A customizable [StyleBox] that doesn't use a texture. */
    class StyleBoxFlat extends StyleBox {
        set_bg_color(color: Color): void
        get_bg_color(): Color
        set_border_color(color: Color): void
        get_border_color(): Color
        
        /** Sets the border width to [param width] pixels for all sides. */
        set_border_width_all(width: number /*i64*/): void
        
        /** Returns the smallest border width out of all four borders. */
        get_border_width_min(): number /*i64*/
        
        /** Sets the specified [enum Side]'s border width to [param width] pixels. */
        set_border_width(margin: Side, width: number /*i64*/): void
        
        /** Returns the specified [enum Side]'s border width. */
        get_border_width(margin: Side): number /*i64*/
        set_border_blend(blend: boolean): void
        get_border_blend(): boolean
        
        /** Sets the corner radius to [param radius] pixels for all corners. */
        set_corner_radius_all(radius: number /*i64*/): void
        
        /** Sets the corner radius to [param radius] pixels for the given [param corner]. See [enum Corner] for possible values. */
        set_corner_radius(corner: Corner, radius: number /*i64*/): void
        
        /** Returns the given [param corner]'s radius. See [enum Corner] for possible values. */
        get_corner_radius(corner: Corner): number /*i64*/
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        set_expand_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        set_expand_margin_all(size: number /*f64*/): void
        
        /** Returns the size of the specified [enum Side]'s expand margin. */
        get_expand_margin(margin: Side): number /*f64*/
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_skew(skew: Vector2): void
        get_skew(): Vector2
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        set_anti_aliased(anti_aliased: boolean): void
        is_anti_aliased(): boolean
        set_aa_size(size: number /*f64*/): void
        get_aa_size(): number /*f64*/
        set_corner_detail(detail: number /*i64*/): void
        get_corner_detail(): number /*i64*/
        
        /** The background color of the stylebox. */
        bg_color: Color
        
        /** Toggles drawing of the inner part of the stylebox. */
        draw_center: boolean
        
        /** If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).  
         *      
         *  **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.  
         */
        skew: Vector2
        
        /** Sets the color of the border. */
        border_color: Color
        
        /** If `true`, the border will fade into the background color. */
        border_blend: boolean
        
        /** This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.  
         *  For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.  
         *  A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.  
         */
        corner_detail: number /*i64*/
        
        /** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
        shadow_color: Color
        
        /** The shadow size in pixels. */
        shadow_size: number /*i64*/
        
        /** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
        shadow_offset: Vector2
        
        /** Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].  
         *      
         *  **Note:** When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to `false` to ensure crisp visuals and avoid possible visual glitches.  
         */
        anti_aliasing: boolean
        
        /** This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.  
         *      
         *  **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.  
         */
        anti_aliasing_size: number /*f64*/
    }
    /** A [StyleBox] that displays a single line of a given color and thickness. */
    class StyleBoxLine extends StyleBox {
        set_color(color: Color): void
        get_color(): Color
        set_thickness(thickness: number /*i64*/): void
        get_thickness(): number /*i64*/
        set_grow_begin(offset: number /*f64*/): void
        get_grow_begin(): number /*f64*/
        set_grow_end(offset: number /*f64*/): void
        get_grow_end(): number /*f64*/
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The line's color. */
        color: Color
        
        /** The number of pixels the line will extend before the [StyleBoxLine]'s bounds. If set to a negative value, the line will begin inside the [StyleBoxLine]'s bounds. */
        grow_begin: number /*f64*/
        
        /** The number of pixels the line will extend past the [StyleBoxLine]'s bounds. If set to a negative value, the line will end inside the [StyleBoxLine]'s bounds. */
        grow_end: number /*f64*/
        
        /** The line's thickness in pixels. */
        thickness: number /*i64*/
        
        /** If `true`, the line will be vertical. If `false`, the line will be horizontal. */
        vertical: boolean
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            /** Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly. */
            AXIS_STRETCH_MODE_STRETCH = 0,
            
            /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. */
            AXIS_STRETCH_MODE_TILE = 1,
            
            /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike [constant AXIS_STRETCH_MODE_TILE], the texture may be slightly stretched to make the nine-patch texture tile seamlessly. */
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    /** A texture-based nine-patch [StyleBox]. */
    class StyleBoxTexture extends StyleBox {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** Sets the margin to [param size] pixels for the specified [enum Side]. */
        set_texture_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the margin to [param size] pixels for all sides. */
        set_texture_margin_all(size: number /*f64*/): void
        
        /** Returns the margin size of the specified [enum Side]. */
        get_texture_margin(margin: Side): number /*f64*/
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        set_expand_margin(margin: Side, size: number /*f64*/): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        set_expand_margin_all(size: number /*f64*/): void
        
        /** Returns the expand margin size of the specified [enum Side]. */
        get_expand_margin(margin: Side): number /*f64*/
        set_region_rect(region: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(enable: boolean): void
        is_draw_center_enabled(): boolean
        set_modulate(color: Color): void
        get_modulate(): Color
        set_h_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_h_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        set_v_axis_stretch_mode(mode: StyleBoxTexture.AxisStretchMode): void
        get_v_axis_stretch_mode(): StyleBoxTexture.AxisStretchMode
        
        /** The texture to use when drawing this style box. */
        texture: Texture2D
        
        /** Controls how the stylebox's texture will be stretched or tiled horizontally. See [enum AxisStretchMode] for possible values. */
        axis_stretch_horizontal: number /*i64*/
        
        /** Controls how the stylebox's texture will be stretched or tiled vertically. See [enum AxisStretchMode] for possible values. */
        axis_stretch_vertical: number /*i64*/
        
        /** Species a sub-region of the texture to use.  
         *  This is equivalent to first wrapping the texture in an [AtlasTexture] with the same region.  
         *  If empty (`Rect2(0, 0, 0, 0)`), the whole texture will be used.  
         */
        region_rect: Rect2
        
        /** Modulates the color of the texture when this style box is drawn. */
        modulate_color: Color
        
        /** If `true`, the nine-patch texture's center tile will be drawn. */
        draw_center: boolean
    }
    namespace SubViewport {
        enum ClearMode {
            /** Always clear the render target before drawing. */
            CLEAR_MODE_ALWAYS = 0,
            
            /** Never clear the render target. */
            CLEAR_MODE_NEVER = 1,
            
            /** Clear the render target on the next frame, then switch to [constant CLEAR_MODE_NEVER]. */
            CLEAR_MODE_ONCE = 2,
        }
        enum UpdateMode {
            /** Do not update the render target. */
            UPDATE_DISABLED = 0,
            
            /** Update the render target once, then switch to [constant UPDATE_DISABLED]. */
            UPDATE_ONCE = 1,
            
            /** Update the render target only when it is visible. This is the default value. */
            UPDATE_WHEN_VISIBLE = 2,
            
            /** Update the render target only when its parent is visible. */
            UPDATE_WHEN_PARENT_VISIBLE = 3,
            
            /** Always update the render target. */
            UPDATE_ALWAYS = 4,
        }
    }
    /** An interface to a game world that doesn't create a window or draw to the screen directly. */
    class SubViewport extends Viewport {
        set_size(size: Vector2i): void
        get_size(): Vector2i
        set_size_2d_override(size: Vector2i): void
        get_size_2d_override(): Vector2i
        set_size_2d_override_stretch(enable: boolean): void
        is_size_2d_override_stretch_enabled(): boolean
        set_update_mode(mode: SubViewport.UpdateMode): void
        get_update_mode(): SubViewport.UpdateMode
        set_clear_mode(mode: SubViewport.ClearMode): void
        get_clear_mode(): SubViewport.ClearMode
        
        /** The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.  
         *      
         *  **Note:** If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is `true`, the viewport size cannot be changed manually.  
         */
        size: Vector2i
        
        /** The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled. */
        size_2d_override: Vector2i
        
        /** If `true`, the 2D size override affects stretch as well. */
        size_2d_override_stretch: boolean
        
        /** The clear mode when the sub-viewport is used as a render target.  
         *      
         *  **Note:** This property is intended for 2D usage.  
         */
        render_target_clear_mode: number /*i64*/
        
        /** The update mode when the sub-viewport is used as a render target. */
        render_target_update_mode: number /*i64*/
    }
    /** A container used for displaying the contents of a [SubViewport]. */
    class SubViewportContainer extends Container {
        /** Virtual method to be implemented by the user. If it returns `true`, the [param event] is propagated to [SubViewport] children. Propagation doesn't happen if it returns `false`. If the function is not implemented, all events are propagated to SubViewports. */
        /* gdvirtual */ _propagate_input_event(event: InputEvent): boolean
        set_stretch(enable: boolean): void
        is_stretch_enabled(): boolean
        set_stretch_shrink(amount: number /*i64*/): void
        get_stretch_shrink(): number /*i64*/
        
        /** If `true`, the sub-viewport will be automatically resized to the control's size.  
         *      
         *  **Note:** If `true`, this will prohibit changing [member SubViewport.size] of its children manually.  
         */
        stretch: boolean
        
        /** Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.  
         *  For example, a 1280×720 sub-viewport with [member stretch_shrink] set to `2` will be rendered at 640×360 while occupying the same size in the container.  
         *      
         *  **Note:** [member stretch] must be `true` for this property to work.  
         */
        stretch_shrink: number /*i64*/
    }
    class SubViewportPreviewEditorPlugin extends EditorPlugin {
    }
    namespace SurfaceTool {
        enum CustomFormat {
            /** Limits range of data passed to [method set_custom] to unsigned normalized 0 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_UNORM]. */
            CUSTOM_RGBA8_UNORM = 0,
            
            /** Limits range of data passed to [method set_custom] to signed normalized -1 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_SNORM]. */
            CUSTOM_RGBA8_SNORM = 1,
            
            /** Stores data passed to [method set_custom] as half precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_HALF]. */
            CUSTOM_RG_HALF = 2,
            
            /** Stores data passed to [method set_custom] as half precision floats and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_HALF]. */
            CUSTOM_RGBA_HALF = 3,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red color channel. See [constant Mesh.ARRAY_CUSTOM_R_FLOAT]. */
            CUSTOM_R_FLOAT = 4,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_FLOAT]. */
            CUSTOM_RG_FLOAT = 5,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses only red, green and blue color channels. See [constant Mesh.ARRAY_CUSTOM_RGB_FLOAT]. */
            CUSTOM_RGB_FLOAT = 6,
            
            /** Stores data passed to [method set_custom] as full precision floats, and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_FLOAT]. */
            CUSTOM_RGBA_FLOAT = 7,
            
            /** Used to indicate a disabled custom channel. */
            CUSTOM_MAX = 8,
        }
        enum SkinWeightCount {
            /** Each individual vertex can be influenced by only 4 bone weights. */
            SKIN_4_WEIGHTS = 0,
            
            /** Each individual vertex can be influenced by up to 8 bone weights. */
            SKIN_8_WEIGHTS = 1,
        }
    }
    /** Helper tool to create geometry. */
    class SurfaceTool extends RefCounted {
        /** Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.  
         *  By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS])  
         *      
         *  **Note:** This function takes an enum, not the exact number of weights.  
         */
        set_skin_weight_count(count: SurfaceTool.SkinWeightCount): void
        
        /** By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.  
         *  Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.  
         *      
         *  **Note:** This function returns an enum, not the exact number of weights.  
         */
        get_skin_weight_count(): SurfaceTool.SkinWeightCount
        
        /** Sets the color format for this custom [param channel_index]. Use [constant CUSTOM_MAX] to disable.  
         *  Must be invoked after [method begin] and should be set before [method commit] or [method commit_to_arrays].  
         */
        set_custom_format(channel_index: number /*i64*/, format: SurfaceTool.CustomFormat): void
        
        /** Returns the format for custom [param channel_index] (currently up to 4). Returns [constant CUSTOM_MAX] if this custom channel is unused. */
        get_custom_format(channel_index: number /*i64*/): SurfaceTool.CustomFormat
        
        /** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
        begin(primitive: Mesh.PrimitiveType): void
        
        /** Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV). */
        add_vertex(vertex: Vector3): void
        
        /** Specifies a [Color] to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.  
         *      
         *  **Note:** The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.  
         */
        set_color(color: Color): void
        
        /** Specifies a normal to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_normal(normal: Vector3): void
        
        /** Specifies a tangent to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_tangent(tangent: Plane): void
        
        /** Specifies a set of UV coordinates to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_uv(uv: Vector2): void
        
        /** Specifies an optional second set of UV coordinates to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_uv2(uv2: Vector2): void
        
        /** Specifies an array of bones to use for the [i]next[/i] vertex. [param bones] must contain 4 integers. */
        set_bones(bones: PackedInt32Array): void
        
        /** Specifies weight values to use for the [i]next[/i] vertex. [param weights] must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        set_weights(weights: PackedFloat32Array): void
        
        /** Sets the custom value on this vertex for [param channel_index].  
         *  [method set_custom_format] must be called first for this [param channel_index]. Formats which are not RGBA will ignore other color channels.  
         */
        set_custom(channel_index: number /*i64*/, custom_color: Color): void
        
        /** Specifies the smooth group to use for the [i]next[/i] vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.  
         *      
         *  **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.  
         */
        set_smooth_group(index: number /*i64*/): void
        
        /** Inserts a triangle fan made of array data into [Mesh] being constructed.  
         *  Requires the primitive type be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        add_triangle_fan(vertices: PackedVector3Array, uvs: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, colors: PackedColorArray = <any> {} /*compound.type from 37([object Object])*/, uv2s: PackedVector2Array = <any> {} /*compound.type from 35([object Object])*/, normals: PackedVector3Array = <any> {} /*compound.type from 36([object Object])*/, tangents: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices. */
        add_index(index: number /*i64*/): void
        
        /** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
        index(): void
        
        /** Removes the index array by expanding the vertex array. */
        deindex(): void
        
        /** Generates normals from vertices so you do not have to do it manually. If [param flip] is `true`, the resulting normals will be inverted. [method generate_normals] should be called [i]after[/i] generating geometry and [i]before[/i] committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].  
         *      
         *  **Note:** [method generate_normals] only works if the primitive type to be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         *      
         *  **Note:** [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [method set_smooth_group] or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [method set_smooth_group] prior to adding vertices.  
         */
        generate_normals(flip: boolean = false): void
        
        /** Generates a tangent vector for each vertex. Requires that each vertex have UVs and normals set already (see [method generate_normals]). */
        generate_tangents(): void
        
        /** Optimizes triangle sorting for performance. Requires that [method get_primitive_type] is [constant Mesh.PRIMITIVE_TRIANGLES]. */
        optimize_indices_for_cache(): void
        
        /** Returns the axis-aligned bounding box of the vertex positions. */
        get_aabb(): AABB
        
        /** Generates a LOD for a given [param nd_threshold] in linear units (square root of quadric error metric), using at most [param target_index_count] indices.  
         *  [i]Deprecated.[/i] Unused internally and fails to preserve normals or UVs. Consider using [method ImporterMesh.generate_lods] instead.  
         */
        generate_lod(nd_threshold: number /*f64*/, target_index_count: number /*i64*/ = 3): PackedInt32Array
        
        /** Sets [Material] to be used by the [Mesh] you are constructing. */
        set_material(material: Material): void
        
        /** Returns the type of mesh geometry, such as [constant Mesh.PRIMITIVE_TRIANGLES]. */
        get_primitive_type(): Mesh.PrimitiveType
        
        /** Clear all information passed into the surface tool so far. */
        clear(): void
        
        /** Creates a vertex array from an existing [Mesh]. */
        create_from(existing: Mesh, surface: number /*i64*/): void
        
        /** Creates a vertex array from the specified blend shape of an existing [Mesh]. This can be used to extract a specific pose from a blend shape. */
        create_from_blend_shape(existing: Mesh, surface: number /*i64*/, blend_shape: string): void
        
        /** Append vertices from a given [Mesh] surface onto the current vertex array with specified [Transform3D]. */
        append_from(existing: Mesh, surface: number /*i64*/, transform: Transform3D): void
        
        /** Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].  
         *  **FIXME:** Document possible values for [param flags], it changed in 4.0. Likely some combinations of [enum Mesh.ArrayFormat].  
         */
        commit(existing: ArrayMesh = <any> {} /*compound.type from nil*/, flags: number /*i64*/ = 0): ArrayMesh
        
        /** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] API. */
        commit_to_arrays(): Array
    }
    class SurfaceUpgradeDialog extends ConfirmationDialog {
    }
    class SurfaceUpgradeTool extends Object {
        readonly upgrade_finished: Signal //  => void
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit]. */
    class SyntaxHighlighter extends Resource {
        /** Virtual method which can be overridden to return syntax highlighting data.  
         *  See [method get_line_syntax_highlighting] for more details.  
         */
        /* gdvirtual */ _get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        
        /** Virtual method which can be overridden to clear any local caches. */
        /* gdvirtual */ _clear_highlighting_cache(): void
        
        /** Virtual method which can be overridden to update any local caches. */
        /* gdvirtual */ _update_cache(): void
        
        /** Returns syntax highlighting data for a single line. If the line is not cached, calls [method _get_line_syntax_highlighting] to calculate the data.  
         *  The return [Dictionary] is column number to [Dictionary]. The column number notes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region, currently only the key "color" is supported.  
         *  **Example return:**  
         *    
         *  This will color columns 0-4 red, and columns 5-eol in green.  
         */
        get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        
        /** Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.  
         *      
         *  **Note:** This is called automatically when the associated [TextEdit] node, updates its own cache.  
         */
        update_cache(): void
        
        /** Clears all cached syntax highlighting data.  
         *  Then calls overridable method [method _clear_highlighting_cache].  
         */
        clear_highlighting_cache(): void
        
        /** Returns the associated [TextEdit] node. */
        get_text_edit(): TextEdit
    }
    /** A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS. */
    class SystemFont extends Font {
        set_antialiasing(antialiasing: TextServer.FontAntialiasing): void
        get_antialiasing(): TextServer.FontAntialiasing
        set_generate_mipmaps(generate_mipmaps: boolean): void
        get_generate_mipmaps(): boolean
        set_allow_system_fallback(allow_system_fallback: boolean): void
        is_allow_system_fallback(): boolean
        set_force_autohinter(force_autohinter: boolean): void
        is_force_autohinter(): boolean
        set_hinting(hinting: TextServer.Hinting): void
        get_hinting(): TextServer.Hinting
        set_subpixel_positioning(subpixel_positioning: TextServer.SubpixelPositioning): void
        get_subpixel_positioning(): TextServer.SubpixelPositioning
        set_multichannel_signed_distance_field(msdf: boolean): void
        is_multichannel_signed_distance_field(): boolean
        set_msdf_pixel_range(msdf_pixel_range: number /*i64*/): void
        get_msdf_pixel_range(): number /*i64*/
        set_msdf_size(msdf_size: number /*i64*/): void
        get_msdf_size(): number /*i64*/
        set_oversampling(oversampling: number /*f64*/): void
        get_oversampling(): number /*f64*/
        get_font_names(): PackedStringArray
        set_font_names(names: PackedStringArray): void
        get_font_italic(): boolean
        set_font_italic(italic: boolean): void
        set_font_weight(weight: number /*i64*/): void
        set_font_stretch(stretch: number /*i64*/): void
        
        /** Array of font family names to search, first matching font found is used. */
        font_names: PackedStringArray
        
        /** If set to `true`, italic or oblique font is preferred. */
        font_italic: boolean
        
        /** Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_weight: number /*i64*/
        
        /** Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_stretch: number /*i64*/
        
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        
        /** If set to `true`, generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. */
        force_autohinter: boolean
        
        /** Font hinting mode. */
        hinting: number /*i64*/
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        multichannel_signed_distance_field: boolean
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        msdf_pixel_range: number /*i64*/
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        
        /** Font oversampling factor, if set to `0.0` global oversampling factor is used instead. */
        oversampling: number /*f64*/
    }
    /** A TCP server. */
    class TCPServer extends RefCounted {
        /** Listen on the [param port] binding to [param bind_address].  
         *  If [param bind_address] is set as `"*"` (default), the server will listen on all available addresses (both IPv4 and IPv6).  
         *  If [param bind_address] is set as `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the server will listen on all available addresses matching that IP type.  
         *  If [param bind_address] is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc), the server will only listen on the interface with that addresses (or fail if no interface with the given address exists).  
         */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        
        /** Returns `true` if a connection is available for taking. */
        is_connection_available(): boolean
        
        /** Returns `true` if the server is currently listening for connections. */
        is_listening(): boolean
        
        /** Returns the local port this server is listening to. */
        get_local_port(): number /*i64*/
        
        /** If a connection is available, returns a StreamPeerTCP with the connection. */
        take_connection(): StreamPeerTCP
        
        /** Stops listening. */
        stop(): void
    }
    /** TLS configuration for clients and servers. */
    class TLSOptions extends RefCounted {
        /** Creates a TLS client configuration which validates certificates and their common names (fully qualified domain names).  
         *  You can specify a custom [param trusted_chain] of certification authorities (the default CA list will be used if `null`), and optionally provide a [param common_name_override] if you expect the certificate to have a common name other than the server FQDN.  
         *      
         *  **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.  
         */
        static client(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/, common_name_override: string = ''): TLSOptions
        
        /** Creates an **unsafe** TLS client configuration where certificate validation is optional. You can optionally provide a valid [param trusted_chain], but the common name of the certificates will never be checked. Using this configuration for purposes other than testing **is not recommended**.  
         *      
         *  **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.  
         */
        static client_unsafe(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/): TLSOptions
        
        /** Creates a TLS server configuration using the provided [param key] and [param certificate].  
         *      
         *  **Note:** The [param certificate] should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).  
         */
        static server(key: CryptoKey, certificate: X509Certificate): TLSOptions
    }
    namespace TabBar {
        enum AlignmentMode {
            /** Places tabs to the left. */
            ALIGNMENT_LEFT = 0,
            
            /** Places tabs in the middle. */
            ALIGNMENT_CENTER = 1,
            
            /** Places tabs to the right. */
            ALIGNMENT_RIGHT = 2,
            
            /** Represents the size of the [enum AlignmentMode] enum. */
            ALIGNMENT_MAX = 3,
        }
        enum CloseButtonDisplayPolicy {
            /** Never show the close buttons. */
            CLOSE_BUTTON_SHOW_NEVER = 0,
            
            /** Only show the close button on the currently active tab. */
            CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1,
            
            /** Show the close button on all tabs. */
            CLOSE_BUTTON_SHOW_ALWAYS = 2,
            
            /** Represents the size of the [enum CloseButtonDisplayPolicy] enum. */
            CLOSE_BUTTON_MAX = 3,
        }
    }
    /** A control that provides a horizontal bar with tabs. */
    class TabBar extends Control {
        set_tab_count(count: number /*i64*/): void
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        
        /** Returns the previously active tab index. */
        get_previous_tab(): number /*i64*/
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        select_previous_available(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        select_next_available(): boolean
        
        /** Sets a [param title] for the tab at index [param tab_idx]. */
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. */
        get_tab_title(tab_idx: number /*i64*/): string
        
        /** Sets tab title base writing direction. */
        set_tab_text_direction(tab_idx: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns tab title text base writing direction. */
        get_tab_text_direction(tab_idx: number /*i64*/): Control.TextDirection
        
        /** Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_tab_language(tab_idx: number /*i64*/, language: string): void
        
        /** Returns tab title language code. */
        get_tab_language(tab_idx: number /*i64*/): string
        
        /** Sets an [param icon] for the tab at index [param tab_idx]. */
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon for the tab at index [param tab_idx] or `null` if the tab has no icon. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_tab_icon_max_width(tab_idx: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        get_tab_icon_max_width(tab_idx: number /*i64*/): number /*i64*/
        
        /** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a `null` value will hide the button. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon for the right button of the tab at index [param tab_idx] or `null` if the right button has no icon. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        
        /** Removes the tab at index [param tab_idx]. */
        remove_tab(tab_idx: number /*i64*/): void
        
        /** Adds a new tab. */
        add_tab(title: string = '', icon: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        
        /** Returns the number of hidden tabs offsetted to the left. */
        get_tab_offset(): number /*i64*/
        
        /** Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
        get_offset_buttons_visible(): boolean
        
        /** Moves the scroll view to make the tab visible. */
        ensure_tab_visible(idx: number /*i64*/): void
        
        /** Returns tab [Rect2] with local position and size. */
        get_tab_rect(tab_idx: number /*i64*/): Rect2
        
        /** Moves a tab from [param from] to [param to]. */
        move_tab(from: number /*i64*/, to: number /*i64*/): void
        set_tab_close_display_policy(policy: TabBar.CloseButtonDisplayPolicy): void
        get_tab_close_display_policy(): TabBar.CloseButtonDisplayPolicy
        set_max_tab_width(width: number /*i64*/): void
        get_max_tab_width(): number /*i64*/
        set_scrolling_enabled(enabled: boolean): void
        get_scrolling_enabled(): boolean
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_scroll_to_selected(enabled: boolean): void
        get_scroll_to_selected(): boolean
        set_select_with_rmb(enabled: boolean): void
        get_select_with_rmb(): boolean
        
        /** Clears all tabs. */
        clear_tabs(): void
        
        /** The number of tabs currently in the bar. */
        tab_count: any /*Tabs,tab_*/
        
        /** Select tab at index `tab_idx`. */
        current_tab: number /*i64*/
        
        /** Sets the position at which tabs will be placed. See [enum AlignmentMode] for details. */
        tab_alignment: number /*i64*/
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        
        /** Sets when the close button will appear on the tabs. See [enum CloseButtonDisplayPolicy] for details. */
        tab_close_display_policy: number /*i64*/
        
        /** Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`. */
        max_tab_width: number /*i64*/
        
        /** if `true`, the mouse's scroll wheel can be used to navigate the scroll view. */
        scrolling_enabled: boolean
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        
        /** [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabBar]s.  
         */
        tabs_rearrange_group: number /*i64*/
        
        /** If `true`, the tab offset will be changed to keep the currently selected tab visible. */
        scroll_to_selected: boolean
        
        /** If `true`, enables selecting a tab with the right mouse button. */
        select_with_rmb: boolean
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tab_selected: Signal // tab: number /*i64*/ => void
        
        /** Emitted when switching to another tab. */
        readonly tab_changed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tab_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is right-clicked. [member select_with_rmb] must be enabled. */
        readonly tab_rmb_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab's close button is pressed.  
         *      
         *  **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:  
         *    
         */
        readonly tab_close_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab's right button is pressed. See [method set_tab_button_icon]. */
        readonly tab_button_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tab_hovered: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly active_tab_rearranged: Signal // idx_to: number /*i64*/ => void
    }
    /** A container that creates a tab for each child control, displaying only the active tab's control. */
    class TabContainer extends Container {
        /** Returns the number of tabs. */
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        
        /** Returns the previously active tab index. */
        get_previous_tab(): number /*i64*/
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        select_previous_available(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        select_next_available(): boolean
        
        /** Returns the child [Control] node located at the active tab index. */
        get_current_tab_control(): Control
        
        /** Returns the [TabBar] contained in this container.  
         *  **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].  
         */
        get_tab_bar(): TabBar
        
        /** Returns the [Control] node from the tab at index [param tab_idx]. */
        get_tab_control(tab_idx: number /*i64*/): Control
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        set_tabs_visible(visible: boolean): void
        are_tabs_visible(): boolean
        set_all_tabs_in_front(is_front: boolean): void
        is_all_tabs_in_front(): boolean
        
        /** Sets a custom title for the tab at index [param tab_idx] (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again. */
        set_tab_title(tab_idx: number /*i64*/, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. Tab titles default to the name of the indexed child node, but this can be overridden with [method set_tab_title]. */
        get_tab_title(tab_idx: number /*i64*/): string
        
        /** Sets an icon for the tab at index [param tab_idx]. */
        set_tab_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the [Texture2D] for the tab at index [param tab_idx] or `null` if the tab has no [Texture2D]. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        
        /** Sets the button icon from the tab at index [param tab_idx]. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        
        /** Returns the button icon from the tab at index [param tab_idx]. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        
        /** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
        get_tab_idx_from_control(control: Control): number /*i64*/
        
        /** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to `null` will make it go away). Clicking it will expand the [Popup] node. */
        set_popup(popup: Node): void
        
        /** Returns the [Popup] node instance if one has been set already with [method set_popup].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): Popup
        set_drag_to_rearrange_enabled(enabled: boolean): void
        get_drag_to_rearrange_enabled(): boolean
        set_tabs_rearrange_group(group_id: number /*i64*/): void
        get_tabs_rearrange_group(): number /*i64*/
        set_use_hidden_tabs_for_min_size(enabled: boolean): void
        get_use_hidden_tabs_for_min_size(): boolean
        set_tab_focus_mode(focus_mode: Control.FocusMode): void
        get_tab_focus_mode(): Control.FocusMode
        
        /** Sets the position at which tabs will be placed. See [enum TabBar.AlignmentMode] for details. */
        tab_alignment: number /*i64*/
        
        /** The current tab index. When set, this index's [Control] node's `visible` property is set to `true` and all others are set to `false`. */
        current_tab: number /*i64*/
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        
        /** If `true`, tabs are visible. If `false`, tabs' content and titles are hidden. */
        tabs_visible: boolean
        
        /** If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel. */
        all_tabs_in_front: boolean
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        
        /** [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabContainer]s.  
         */
        tabs_rearrange_group: number /*i64*/
        
        /** If `true`, child [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
        use_hidden_tabs_for_min_size: boolean
        
        /** The focus access mode for the internal [TabBar] node. */
        tab_focus_mode: number /*i64*/
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly active_tab_rearranged: Signal // idx_to: number /*i64*/ => void
        
        /** Emitted when switching to another tab. */
        readonly tab_changed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tab_clicked: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tab_hovered: Signal // tab: number /*i64*/ => void
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tab_selected: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the user clicks on the button icon on this tab. */
        readonly tab_button_pressed: Signal // tab: number /*i64*/ => void
        
        /** Emitted when the [TabContainer]'s [Popup] button is clicked. See [method set_popup] for details. */
        readonly pre_popup_pressed: Signal //  => void
    }
    namespace TextEdit {
        enum MenuItems {
            /** Cuts (copies and clears) the selected text. */
            MENU_CUT = 0,
            
            /** Copies the selected text. */
            MENU_COPY = 1,
            
            /** Pastes the clipboard text over the selected text (or at the cursor's position). */
            MENU_PASTE = 2,
            
            /** Erases the whole [TextEdit] text. */
            MENU_CLEAR = 3,
            
            /** Selects the whole [TextEdit] text. */
            MENU_SELECT_ALL = 4,
            
            /** Undoes the previous action. */
            MENU_UNDO = 5,
            
            /** Redoes the previous action. */
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
        enum EditAction {
            /** No current action. */
            ACTION_NONE = 0,
            
            /** A typing action. */
            ACTION_TYPING = 1,
            
            /** A backwards delete action. */
            ACTION_BACKSPACE = 2,
            
            /** A forward delete action. */
            ACTION_DELETE = 3,
        }
        enum SearchFlags {
            /** Match case when searching. */
            SEARCH_MATCH_CASE = 1,
            
            /** Match whole words when searching. */
            SEARCH_WHOLE_WORDS = 2,
            
            /** Search from end to beginning. */
            SEARCH_BACKWARDS = 4,
        }
        enum CaretType {
            /** Vertical line caret. */
            CARET_TYPE_LINE = 0,
            
            /** Block caret. */
            CARET_TYPE_BLOCK = 1,
        }
        enum SelectionMode {
            /** Not selecting. */
            SELECTION_MODE_NONE = 0,
            
            /** Select as if `shift` is pressed. */
            SELECTION_MODE_SHIFT = 1,
            
            /** Select single characters as if the user single clicked. */
            SELECTION_MODE_POINTER = 2,
            
            /** Select whole words as if the user double clicked. */
            SELECTION_MODE_WORD = 3,
            
            /** Select whole lines as if the user triple clicked. */
            SELECTION_MODE_LINE = 4,
        }
        enum LineWrappingMode {
            /** Line wrapping is disabled. */
            LINE_WRAPPING_NONE = 0,
            
            /** Line wrapping occurs at the control boundary, beyond what would normally be visible. */
            LINE_WRAPPING_BOUNDARY = 1,
        }
        enum GutterType {
            /** Draw a string. */
            GUTTER_TYPE_STRING = 0,
            
            /** Draw an icon. */
            GUTTER_TYPE_ICON = 1,
            
            /** Custom draw. */
            GUTTER_TYPE_CUSTOM = 2,
        }
    }
    /** A multiline text editor. */
    class TextEdit extends Control {
        /** Override this method to define what happens when the user types in the provided key [param unicode_char]. */
        /* gdvirtual */ _handle_unicode_input(unicode_char: number /*i64*/, caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user presses the backspace key. */
        /* gdvirtual */ _backspace(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a cut operation. */
        /* gdvirtual */ _cut(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a copy operation. */
        /* gdvirtual */ _copy(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a paste operation. */
        /* gdvirtual */ _paste(caret_index: number /*i64*/): void
        
        /** Override this method to define what happens when the user performs a paste operation with middle mouse button.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        /* gdvirtual */ _paste_primary_clipboard(caret_index: number /*i64*/): void
        _text_changed_emit(): void
        
        /** Returns if the user has IME text. */
        has_ime_text(): boolean
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        
        /** Sets the tab size for the [TextEdit] to use. */
        set_tab_size(size: number /*i64*/): void
        
        /** Returns the [TextEdit]'s' tab size. */
        get_tab_size(): number /*i64*/
        
        /** If `true`, sets the user into overtype mode. When the user types in this mode, it will override existing text. */
        set_overtype_mode_enabled(enabled: boolean): void
        
        /** Returns whether the user is in overtype mode. */
        is_overtype_mode_enabled(): boolean
        set_context_menu_enabled(enabled: boolean): void
        is_context_menu_enabled(): boolean
        set_shortcut_keys_enabled(enabled: boolean): void
        is_shortcut_keys_enabled(): boolean
        set_virtual_keyboard_enabled(enabled: boolean): void
        is_virtual_keyboard_enabled(): boolean
        set_middle_mouse_paste_enabled(enabled: boolean): void
        is_middle_mouse_paste_enabled(): boolean
        
        /** Performs a full reset of [TextEdit], including undo history. */
        clear(): void
        set_text(text: string): void
        get_text(): string
        
        /** Returns the number of lines in the text. */
        get_line_count(): number /*i64*/
        set_placeholder(text: string): void
        get_placeholder(): string
        
        /** Sets the text for a specific line. */
        set_line(line: number /*i64*/, new_text: string): void
        
        /** Returns the text of a specific line. */
        get_line(line: number /*i64*/): string
        
        /** Returns the width in pixels of the [param wrap_index] on [param line]. */
        get_line_width(line: number /*i64*/, wrap_index: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the maximum value of the line height among all lines.  
         *      
         *  **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.  
         */
        get_line_height(): number /*i64*/
        
        /** Returns the number of spaces and `tab * tab_size` before the first char. */
        get_indent_level(line: number /*i64*/): number /*i64*/
        
        /** Returns the first column containing a non-whitespace character. */
        get_first_non_whitespace_column(line: number /*i64*/): number /*i64*/
        
        /** Swaps the two lines. */
        swap_lines(from_line: number /*i64*/, to_line: number /*i64*/): void
        
        /** Inserts a new line with [param text] at [param line]. */
        insert_line_at(line: number /*i64*/, text: string): void
        
        /** Insert the specified text at the caret position. */
        insert_text_at_caret(text: string, caret_index: number /*i64*/ = -1): void
        
        /** Removes text between the given positions.  
         *      
         *  **Note:** This does not adjust the caret or selection, which as a result it can end up in an invalid position.  
         */
        remove_text(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/): void
        
        /** Returns the last unhidden line in the entire [TextEdit]. */
        get_last_unhidden_line(): number /*i64*/
        
        /** Returns the count to the next visible line from [param line] to `line + visible_amount`. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3. */
        get_next_visible_line_offset_from(line: number /*i64*/, visible_amount: number /*i64*/): number /*i64*/
        
        /** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index. */
        get_next_visible_line_index_offset_from(line: number /*i64*/, wrap_index: number /*i64*/, visible_amount: number /*i64*/): Vector2i
        
        /** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
        backspace(caret_index: number /*i64*/ = -1): void
        
        /** Cut's the current selection. Can be overridden with [method _cut]. */
        cut(caret_index: number /*i64*/ = -1): void
        
        /** Copies the current text selection. Can be overridden with [method _copy]. */
        copy(caret_index: number /*i64*/ = -1): void
        
        /** Paste at the current location. Can be overridden with [method _paste]. */
        paste(caret_index: number /*i64*/ = -1): void
        
        /** Pastes the primary clipboard. */
        paste_primary_clipboard(caret_index: number /*i64*/ = -1): void
        
        /** Starts an action, will end the current action if [param action] is different.  
         *  An action will also end after a call to [method end_action], after [member ProjectSettings.gui/timers/text_edit_idle_detect_sec] is triggered or a new undoable step outside the [method start_action] and [method end_action] calls.  
         */
        start_action(action: TextEdit.EditAction): void
        
        /** Marks the end of steps in the current action started with [method start_action]. */
        end_action(): void
        
        /** Starts a multipart edit. All edits will be treated as one action until [method end_complex_operation] is called. */
        begin_complex_operation(): void
        
        /** Ends a multipart edit, started with [method begin_complex_operation]. If called outside a complex operation, the current operation is pushed onto the undo/redo stack. */
        end_complex_operation(): void
        
        /** Returns `true` if an "undo" action is available. */
        has_undo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        has_redo(): boolean
        
        /** Perform undo operation. */
        undo(): void
        
        /** Perform redo operation. */
        redo(): void
        
        /** Clears the undo history. */
        clear_undo_history(): void
        
        /** Tag the current version as saved. */
        tag_saved_version(): void
        
        /** Returns the current version of the [TextEdit]. The version is a count of recorded operations by the undo/redo history. */
        get_version(): number /*i64*/
        
        /** Returns the last tagged saved version from [method tag_saved_version]. */
        get_saved_version(): number /*i64*/
        
        /** Sets the search text. See [method set_search_flags]. */
        set_search_text(search_text: string): void
        
        /** Sets the search [param flags]. This is used with [method set_search_text] to highlight occurrences of the searched text. Search flags can be specified from the [enum SearchFlags] enum. */
        set_search_flags(flags: number /*i64*/): void
        
        /** Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.  
         *  In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.  
         *    
         */
        search(text: string, flags: number /*i64*/, from_line: number /*i64*/, from_colum: number /*i64*/): Vector2i
        
        /** Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`. */
        set_tooltip_request_func(callback: Callable): void
        
        /** Returns the local mouse position adjusted for the text direction. */
        get_local_mouse_pos(): Vector2
        
        /** Returns the word at [param position]. */
        get_word_at_pos(position: Vector2): string
        
        /** Returns the line and column at the given position. In the returned vector, `x` is the column, `y` is the line. If [param allow_out_of_bounds] is `false` and the position is not over the text, both vector values will be set to `-1`. */
        get_line_column_at_pos(position: Vector2i, allow_out_of_bounds: boolean = true): Vector2i
        
        /** Returns the local position for the given [param line] and [param column]. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.  
         */
        get_pos_at_line_column(line: number /*i64*/, column: number /*i64*/): Vector2i
        
        /** Returns the local position and size for the grapheme at the given [param line] and [param column]. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.  
         */
        get_rect_at_line_column(line: number /*i64*/, column: number /*i64*/): Rect2i
        
        /** Returns the equivalent minimap line at [param position]. */
        get_minimap_line_at_pos(position: Vector2i): number /*i64*/
        
        /** Returns `true` if the user is dragging their mouse for scrolling or selecting. */
        is_dragging_cursor(): boolean
        
        /** Returns whether the mouse is over selection. If [param edges] is `true`, the edges are considered part of the selection. */
        is_mouse_over_selection(edges: boolean, caret_index: number /*i64*/ = -1): boolean
        _emit_caret_changed(): void
        set_caret_type(type: TextEdit.CaretType): void
        get_caret_type(): TextEdit.CaretType
        set_caret_blink_enabled(enable: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_draw_caret_when_editable_disabled(enable: boolean): void
        is_drawing_caret_when_editable_disabled(): boolean
        set_move_caret_on_right_click_enabled(enable: boolean): void
        is_move_caret_on_right_click_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_multiple_carets_enabled(enabled: boolean): void
        is_multiple_carets_enabled(): boolean
        
        /** Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid. */
        add_caret(line: number /*i64*/, col: number /*i64*/): number /*i64*/
        
        /** Removes the given caret index.  
         *      
         *  **Note:** This can result in adjustment of all other caret indices.  
         */
        remove_caret(caret: number /*i64*/): void
        
        /** Removes all additional carets. */
        remove_secondary_carets(): void
        
        /** Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.  
         *      
         *  **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.  
         */
        merge_overlapping_carets(): void
        
        /** Returns the number of carets in this [TextEdit]. */
        get_caret_count(): number /*i64*/
        
        /** Adds an additional caret above or below every caret. If [param below] is true the new caret will be added below and above otherwise. */
        add_caret_at_carets(below: boolean): void
        
        /** Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [method insert_text_at_caret] are applied. */
        get_caret_index_edit_order(): PackedInt32Array
        
        /** Reposition the carets affected by the edit. This assumes edits are applied in edit order, see [method get_caret_index_edit_order]. */
        adjust_carets_after_edit(caret: number /*i64*/, from_line: number /*i64*/, from_col: number /*i64*/, to_line: number /*i64*/, to_col: number /*i64*/): void
        
        /** Returns `true` if the caret is visible on the screen. */
        is_caret_visible(caret_index: number /*i64*/ = 0): boolean
        
        /** Returns the caret pixel draw position. */
        get_caret_draw_pos(caret_index: number /*i64*/ = 0): Vector2
        
        /** Moves the caret to the specified [param line] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *  If [param can_be_hidden] is `true`, the specified [param line] can be hidden.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        set_caret_line(line: number /*i64*/, adjust_viewport: boolean = true, can_be_hidden: boolean = true, wrap_index: number /*i64*/ = 0, caret_index: number /*i64*/ = 0): void
        
        /** Returns the line the editing caret is on. */
        get_caret_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Moves the caret to the specified [param column] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        set_caret_column(column: number /*i64*/, adjust_viewport: boolean = true, caret_index: number /*i64*/ = 0): void
        
        /** Returns the column the editing caret is at. */
        get_caret_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the wrap index the editing caret is on. */
        get_caret_wrap_index(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns a [String] text with the word under the caret's location. */
        get_word_under_caret(caret_index: number /*i64*/ = -1): string
        set_selecting_enabled(enable: boolean): void
        is_selecting_enabled(): boolean
        set_deselect_on_focus_loss_enabled(enable: boolean): void
        is_deselect_on_focus_loss_enabled(): boolean
        set_drag_and_drop_selection_enabled(enable: boolean): void
        is_drag_and_drop_selection_enabled(): boolean
        
        /** Sets the current selection mode. */
        set_selection_mode(mode: TextEdit.SelectionMode, line: number /*i64*/ = -1, column: number /*i64*/ = -1, caret_index: number /*i64*/ = 0): void
        
        /** Returns the current selection mode. */
        get_selection_mode(): TextEdit.SelectionMode
        
        /** Select all the text.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        select_all(): void
        
        /** Selects the word under the caret. */
        select_word_under_caret(caret_index: number /*i64*/ = -1): void
        
        /** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
        add_selection_for_next_occurrence(): void
        
        /** Perform selection, from line/column to line/column.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        select(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/, caret_index: number /*i64*/ = 0): void
        
        /** Returns `true` if the user has selected text. */
        has_selection(caret_index: number /*i64*/ = -1): boolean
        
        /** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value `-1`. */
        get_selected_text(caret_index: number /*i64*/ = -1): string
        
        /** Returns the original start line of the selection. */
        get_selection_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the original start column of the selection. */
        get_selection_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection begin line. */
        get_selection_from_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection begin column. */
        get_selection_from_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection end line. */
        get_selection_to_line(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Returns the selection end column. */
        get_selection_to_column(caret_index: number /*i64*/ = 0): number /*i64*/
        
        /** Deselects the current selection. */
        deselect(caret_index: number /*i64*/ = -1): void
        
        /** Deletes the selected text. */
        delete_selection(caret_index: number /*i64*/ = -1): void
        _update_wrap_at_column(force: boolean = false): void
        set_line_wrapping_mode(mode: TextEdit.LineWrappingMode): void
        get_line_wrapping_mode(): TextEdit.LineWrappingMode
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        
        /** Returns if the given line is wrapped. */
        is_line_wrapped(line: number /*i64*/): boolean
        
        /** Returns the number of times the given line is wrapped. */
        get_line_wrap_count(line: number /*i64*/): number /*i64*/
        
        /** Returns the wrap index of the given line column. */
        get_line_wrap_index_at_column(line: number /*i64*/, column: number /*i64*/): number /*i64*/
        
        /** Returns an array of [String]s representing each wrapped index. */
        get_line_wrapped_text(line: number /*i64*/): PackedStringArray
        set_smooth_scroll_enabled(enable: boolean): void
        is_smooth_scroll_enabled(): boolean
        
        /** Returns the [VScrollBar] of the [TextEdit]. */
        get_v_scroll_bar(): VScrollBar
        
        /** Returns the [HScrollBar] used by [TextEdit]. */
        get_h_scroll_bar(): HScrollBar
        set_v_scroll(value: number /*f64*/): void
        get_v_scroll(): number /*f64*/
        set_h_scroll(value: number /*i64*/): void
        get_h_scroll(): number /*i64*/
        set_scroll_past_end_of_file_enabled(enable: boolean): void
        is_scroll_past_end_of_file_enabled(): boolean
        set_v_scroll_speed(speed: number /*f64*/): void
        get_v_scroll_speed(): number /*f64*/
        set_fit_content_height_enabled(enabled: boolean): void
        is_fit_content_height_enabled(): boolean
        
        /** Returns the scroll position for [param wrap_index] of [param line]. */
        get_scroll_pos_for_line(line: number /*i64*/, wrap_index: number /*i64*/ = 0): number /*f64*/
        
        /** Positions the [param wrap_index] of [param line] at the top of the viewport. */
        set_line_as_first_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Returns the first visible line. */
        get_first_visible_line(): number /*i64*/
        
        /** Positions the [param wrap_index] of [param line] at the center of the viewport. */
        set_line_as_center_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Positions the [param wrap_index] of [param line] at the bottom of the viewport. */
        set_line_as_last_visible(line: number /*i64*/, wrap_index: number /*i64*/ = 0): void
        
        /** Returns the last visible line. Use [method get_last_full_visible_line_wrap_index] for the wrap index. */
        get_last_full_visible_line(): number /*i64*/
        
        /** Returns the last visible wrap index of the last visible line. */
        get_last_full_visible_line_wrap_index(): number /*i64*/
        
        /** Returns the number of visible lines, including wrapped text. */
        get_visible_line_count(): number /*i64*/
        
        /** Returns the total number of visible + wrapped lines between the two lines. */
        get_visible_line_count_in_range(from_line: number /*i64*/, to_line: number /*i64*/): number /*i64*/
        
        /** Returns the number of lines that may be drawn. */
        get_total_visible_line_count(): number /*i64*/
        
        /** Adjust the viewport so the caret is visible. */
        adjust_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        
        /** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to `0`. */
        center_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        set_draw_minimap(enabled: boolean): void
        is_drawing_minimap(): boolean
        set_minimap_width(width: number /*i64*/): void
        get_minimap_width(): number /*i64*/
        
        /** Returns the number of lines that may be drawn on the minimap. */
        get_minimap_visible_lines(): number /*i64*/
        
        /** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of `-1` appends the gutter to the right. */
        add_gutter(at: number /*i64*/ = -1): void
        
        /** Removes the gutter from this [TextEdit]. */
        remove_gutter(gutter: number /*i64*/): void
        
        /** Returns the number of gutters registered. */
        get_gutter_count(): number /*i64*/
        
        /** Sets the name of the gutter. */
        set_gutter_name(gutter: number /*i64*/, name: string): void
        
        /** Returns the name of the gutter at the given index. */
        get_gutter_name(gutter: number /*i64*/): string
        
        /** Sets the type of gutter. */
        set_gutter_type(gutter: number /*i64*/, type: TextEdit.GutterType): void
        
        /** Returns the type of the gutter at the given index. */
        get_gutter_type(gutter: number /*i64*/): TextEdit.GutterType
        
        /** Set the width of the gutter. */
        set_gutter_width(gutter: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the width of the gutter at the given index. */
        get_gutter_width(gutter: number /*i64*/): number /*i64*/
        
        /** Sets whether the gutter should be drawn. */
        set_gutter_draw(gutter: number /*i64*/, draw: boolean): void
        
        /** Returns whether the gutter is currently drawn. */
        is_gutter_drawn(gutter: number /*i64*/): boolean
        
        /** Sets the gutter as clickable. This will change the mouse cursor to a pointing hand when hovering over the gutter. */
        set_gutter_clickable(gutter: number /*i64*/, clickable: boolean): void
        
        /** Returns whether the gutter is clickable. */
        is_gutter_clickable(gutter: number /*i64*/): boolean
        
        /** Sets the gutter to overwritable. See [method merge_gutters]. */
        set_gutter_overwritable(gutter: number /*i64*/, overwritable: boolean): void
        
        /** Returns whether the gutter is overwritable. */
        is_gutter_overwritable(gutter: number /*i64*/): boolean
        
        /** Merge the gutters from [param from_line] into [param to_line]. Only overwritable gutters will be copied. */
        merge_gutters(from_line: number /*i64*/, to_line: number /*i64*/): void
        
        /** Set a custom draw method for the gutter. The callback method must take the following args: `line: int, gutter: int, Area: Rect2`. */
        set_gutter_custom_draw(column: number /*i64*/, draw_callback: Callable): void
        
        /** Returns the total width of all gutters and internal padding. */
        get_total_gutter_width(): number /*i64*/
        
        /** Sets the metadata for [param gutter] on [param line] to [param metadata]. */
        set_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/, metadata: any): void
        
        /** Returns the metadata currently in [param gutter] at [param line]. */
        get_line_gutter_metadata(line: number /*i64*/, gutter: number /*i64*/): any
        
        /** Sets the text for [param gutter] on [param line] to [param text]. */
        set_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/, text: string): void
        
        /** Returns the text currently in [param gutter] at [param line]. */
        get_line_gutter_text(line: number /*i64*/, gutter: number /*i64*/): string
        
        /** Sets the icon for [param gutter] on [param line] to [param icon]. */
        set_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/, icon: Texture2D): void
        
        /** Returns the icon currently in [param gutter] at [param line]. */
        get_line_gutter_icon(line: number /*i64*/, gutter: number /*i64*/): Texture2D
        
        /** Sets the color for [param gutter] on [param line] to [param color]. */
        set_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/, color: Color): void
        
        /** Returns the color currently in [param gutter] at [param line]. */
        get_line_gutter_item_color(line: number /*i64*/, gutter: number /*i64*/): Color
        
        /** If [param clickable] is `true`, makes the [param gutter] on [param line] clickable. See [signal gutter_clicked]. */
        set_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/, clickable: boolean): void
        
        /** Returns whether the gutter on the given line is clickable. */
        is_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/): boolean
        
        /** Sets the current background color of the line. Set to `Color(0, 0, 0, 0)` for no color. */
        set_line_background_color(line: number /*i64*/, color: Color): void
        
        /** Returns the current background color of the line. `Color(0, 0, 0, 0)` is returned if no color is set. */
        get_line_background_color(line: number /*i64*/): Color
        set_syntax_highlighter(syntax_highlighter: SyntaxHighlighter): void
        get_syntax_highlighter(): SyntaxHighlighter
        set_highlight_current_line(enabled: boolean): void
        is_highlight_current_line_enabled(): boolean
        set_highlight_all_occurrences(enabled: boolean): void
        is_highlight_all_occurrences_enabled(): boolean
        get_draw_control_chars(): boolean
        set_draw_control_chars(enabled: boolean): void
        set_draw_tabs(enabled: boolean): void
        is_drawing_tabs(): boolean
        set_draw_spaces(enabled: boolean): void
        is_drawing_spaces(): boolean
        
        /** Returns the [PopupMenu] of this [TextEdit]. By default, this menu is displayed when right-clicking on the [TextEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_menu(): PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        
        /** String value of the [TextEdit]. */
        text: string
        
        /** Text shown when the [TextEdit] is empty. It is **not** the [TextEdit]'s default value (see [member text]). */
        placeholder_text: string
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        editable: boolean
        
        /** If `true`, a right-click displays the context menu. */
        context_menu_enabled: boolean
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        shortcut_keys_enabled: boolean
        
        /** If `true`, text can be selected.  
         *  If `false`, text can not be selected by the user or by the [method select] or [method select_all] methods.  
         */
        selecting_enabled: boolean
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        
        /** If `true`, allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        
        /** If `true`, the native virtual keyboard is shown when focused on platforms that support it. */
        virtual_keyboard_enabled: boolean
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        middle_mouse_paste_enabled: boolean
        
        /** Sets the line wrapping mode to use. */
        wrap_mode: number /*i64*/
        
        /** If [member wrap_mode] is set to [constant LINE_WRAPPING_BOUNDARY], sets text wrapping mode. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Scroll smoothly over the text rather than jumping to the next location. */
        scroll_smooth: boolean
        
        /** Sets the scroll speed with the minimap or when [member scroll_smooth] is enabled. */
        scroll_v_scroll_speed: number /*f64*/
        
        /** Allow scrolling past the last line into "virtual" space. */
        scroll_past_end_of_file: boolean
        
        /** If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line. */
        scroll_vertical: number /*f64*/
        
        /** If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels. */
        scroll_horizontal: number /*i64*/
        
        /** If `true`, [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. */
        scroll_fit_content_height: boolean
        
        /** If `true`, a minimap is shown, providing an outline of your source code. */
        minimap_draw: boolean
        
        /** The width, in pixels, of the minimap. */
        minimap_width: number /*i64*/
        
        /** Set the type of caret to draw. */
        caret_type: number /*i64*/
        
        /** If `true`, makes the caret blink. */
        caret_blink: boolean
        
        /** The interval at which the caret blinks (in seconds). */
        caret_blink_interval: number /*f64*/
        
        /** If `true`, caret will be visible when [member editable] is disabled. */
        caret_draw_when_editable_disabled: boolean
        
        /** If `true`, a right-click moves the caret at the mouse position before displaying the context menu.  
         *  If `false`, the context menu ignores mouse location.  
         */
        caret_move_on_right_click: boolean
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        caret_mid_grapheme: boolean
        
        /** Sets if multiple carets are allowed. */
        caret_multiple: boolean
        
        /** Sets the [SyntaxHighlighter] to use. */
        syntax_highlighter: SyntaxHighlighter
        
        /** If `true`, all occurrences of the selected text will be highlighted. */
        highlight_all_occurrences: boolean
        
        /** If `true`, the line containing the cursor is highlighted. */
        highlight_current_line: boolean
        
        /** If `true`, control characters are displayed. */
        draw_control_chars: boolean
        
        /** If `true`, the "tab" character will have a visible representation. */
        draw_tabs: boolean
        
        /** If `true`, the "space" character will have a visible representation. */
        draw_spaces: boolean
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
        
        /** Emitted when [method clear] is called or [member text] is set. */
        readonly text_set: Signal //  => void
        
        /** Emitted when the text changes. */
        readonly text_changed: Signal //  => void
        
        /** Emitted immediately when the text changes.  
         *  When text is added [param from_line] will be less than [param to_line]. On a remove [param to_line] will be less than [param from_line].  
         */
        readonly lines_edited_from: Signal // from_line: number /*i64*/, to_line: number /*i64*/ => void
        
        /** Emitted when the caret changes position. */
        readonly caret_changed: Signal //  => void
        
        /** Emitted when a gutter is clicked. */
        readonly gutter_clicked: Signal // line: number /*i64*/, gutter: number /*i64*/ => void
        
        /** Emitted when a gutter is added. */
        readonly gutter_added: Signal //  => void
        
        /** Emitted when a gutter is removed. */
        readonly gutter_removed: Signal //  => void
    }
    /** Holds a line of text. */
    class TextLine extends RefCounted {
        /** Clears text line (removes text and inline objects). */
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        set_bidi_override(override: Array): void
        
        /** Adds text span and font to draw it. */
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        
        /** Aligns text to the given tab-stops. */
        tab_align(tab_stops: PackedFloat32Array): void
        set_flags(flags: TextServer.JustificationFlag): void
        get_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        
        /** Returns array of inline objects. */
        get_objects(): Array
        
        /** Returns bounding rectangle of the inline object. */
        get_object_rect(key: any): Rect2
        
        /** Returns size of the bounding box of the text. */
        get_size(): Vector2
        
        /** Returns TextServer buffer RID. */
        get_rid(): RID
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        get_line_ascent(): number /*f64*/
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        get_line_descent(): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        get_line_width(): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        get_line_underline_position(): number /*f64*/
        
        /** Returns thickness of the underline. */
        get_line_underline_thickness(): number /*f64*/
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        hit_test(coords: number /*f64*/): number /*i64*/
        
        /** Text writing direction. */
        direction: number /*i64*/
        
        /** Text orientation. */
        orientation: number /*i64*/
        
        /** If set to `true` text will display invalid characters. */
        preserve_invalid: boolean
        
        /** If set to `true` text will display control characters. */
        preserve_control: boolean
        
        /** Text line width. */
        width: number /*f64*/
        
        /** Sets text alignment within the line as if the line was horizontal. */
        alignment: number /*i64*/
        
        /** Line alignment rules. For more info see [TextServer]. */
        flags: number /*i64*/
        
        /** Sets the clipping behavior when the text exceeds the text line's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
    }
    /** Generate an [PrimitiveMesh] from the text. */
    class TextMesh extends PrimitiveMesh {
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        set_vertical_alignment(alignment: VerticalAlignment): void
        get_vertical_alignment(): VerticalAlignment
        set_text(text: string): void
        get_text(): string
        set_font(font: Font): void
        get_font(): Font
        set_font_size(font_size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_depth(depth: number /*f64*/): void
        get_depth(): number /*f64*/
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        set_curve_step(curve_step: number /*f64*/): void
        get_curve_step(): number /*f64*/
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
        _font_changed(): void
        
        /** The text to generate mesh from. */
        text: string
        
        /** Font configuration used to display text. */
        font: Font
        
        /** Font size of the [TextMesh]'s text. */
        font_size: number /*i64*/
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        
        /** If `true`, all the text displays as UPPERCASE. */
        uppercase: boolean
        
        /** Vertical space between lines in multiline [TextMesh]. */
        line_spacing: number /*f64*/
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** The size of one pixel's width on the text to scale it in 3D. */
        pixel_size: number /*f64*/
        
        /** Step (in pixels) used to approximate Bézier curves. */
        curve_step: number /*f64*/
        
        /** Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
        depth: number /*f64*/
        
        /** Text width (in pixels), used for fill alignment. */
        width: number /*f64*/
        
        /** The text drawing offset (in pixels). */
        offset: Vector2
        
        /** Base text writing direction. */
        text_direction: number /*i64*/
        
        /** Language code used for text shaping algorithms, if left empty current locale is used instead. */
        language: string
        
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    /** Holds a paragraph of text. */
    class TextParagraph extends RefCounted {
        /** Clears text paragraph (removes text and inline objects). */
        clear(): void
        set_direction(direction: TextServer.Direction): void
        get_direction(): TextServer.Direction
        set_custom_punctuation(custom_punctuation: string): void
        get_custom_punctuation(): string
        set_orientation(orientation: TextServer.Orientation): void
        get_orientation(): TextServer.Orientation
        set_preserve_invalid(enabled: boolean): void
        get_preserve_invalid(): boolean
        set_preserve_control(enabled: boolean): void
        get_preserve_control(): boolean
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        set_bidi_override(override: Array): void
        
        /** Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        set_dropcap(text: string, font: Font, font_size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, language: string = ''): boolean
        
        /** Removes dropcap. */
        clear_dropcap(): void
        
        /** Adds text span and font to draw it. */
        add_string(text: string, font: Font, font_size: number /*i64*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        add_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        resize_object(key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        set_alignment(alignment: HorizontalAlignment): void
        get_alignment(): HorizontalAlignment
        
        /** Aligns paragraph to the given tab-stops. */
        tab_align(tab_stops: PackedFloat32Array): void
        set_break_flags(flags: TextServer.LineBreakFlag): void
        get_break_flags(): TextServer.LineBreakFlag
        set_justification_flags(flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        
        /** Returns the size of the bounding box of the paragraph, without line breaks. */
        get_non_wrapped_size(): Vector2
        
        /** Returns the size of the bounding box of the paragraph. */
        get_size(): Vector2
        
        /** Returns TextServer full string buffer RID. */
        get_rid(): RID
        
        /** Returns TextServer line buffer RID. */
        get_line_rid(line: number /*i64*/): RID
        
        /** Returns drop cap text buffer RID. */
        get_dropcap_rid(): RID
        
        /** Returns number of lines in the paragraph. */
        get_line_count(): number /*i64*/
        set_max_lines_visible(max_lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        
        /** Returns array of inline objects in the line. */
        get_line_objects(line: number /*i64*/): Array
        
        /** Returns bounding rectangle of the inline object. */
        get_line_object_rect(line: number /*i64*/, key: any): Rect2
        
        /** Returns size of the bounding box of the line of text. */
        get_line_size(line: number /*i64*/): Vector2
        
        /** Returns character range of the line. */
        get_line_range(line: number /*i64*/): Vector2i
        
        /** Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        get_line_ascent(line: number /*i64*/): number /*f64*/
        
        /** Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        get_line_descent(line: number /*i64*/): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the line of text. */
        get_line_width(line: number /*i64*/): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        get_line_underline_position(line: number /*i64*/): number /*f64*/
        
        /** Returns thickness of the underline. */
        get_line_underline_thickness(line: number /*i64*/): number /*f64*/
        
        /** Returns drop cap bounding box size. */
        get_dropcap_size(): Vector2
        
        /** Returns number of lines used by dropcap. */
        get_dropcap_lines(): number /*i64*/
        
        /** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1), dc_color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_line(canvas: RID, pos: Vector2, line: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw outline of the single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_line_outline(canvas: RID, pos: Vector2, line: number /*i64*/, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_dropcap(canvas: RID, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw drop cap outline into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw_dropcap_outline(canvas: RID, pos: Vector2, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns caret character offset at the specified coordinates. This function always returns a valid position. */
        hit_test(coords: Vector2): number /*i64*/
        
        /** Text writing direction. */
        direction: number /*i64*/
        
        /** Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        custom_punctuation: string
        
        /** Text orientation. */
        orientation: number /*i64*/
        
        /** If set to `true` text will display invalid characters. */
        preserve_invalid: boolean
        
        /** If set to `true` text will display control characters. */
        preserve_control: boolean
        
        /** Paragraph horizontal alignment. */
        alignment: number /*i64*/
        
        /** Line breaking rules. For more info see [TextServer]. */
        break_flags: number /*i64*/
        
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        
        /** Sets the clipping behavior when the text exceeds the paragraph's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        
        /** Paragraph width. */
        width: number /*f64*/
        
        /** Limits the lines of text shown. */
        max_lines_visible: number /*i64*/
    }
    namespace TextServer {
        enum FontAntialiasing {
            /** Font glyphs are rasterized as 1-bit bitmaps. */
            FONT_ANTIALIASING_NONE = 0,
            
            /** Font glyphs are rasterized as 8-bit grayscale anti-aliased bitmaps. */
            FONT_ANTIALIASING_GRAY = 1,
            
            /** Font glyphs are rasterized for LCD screens.  
             *  LCD subpixel layout is determined by the value of `gui/theme/lcd_subpixel_layout` project settings.  
             *  LCD subpixel anti-aliasing mode is suitable only for rendering horizontal, unscaled text in 2D.  
             */
            FONT_ANTIALIASING_LCD = 2,
        }
        enum FontLCDSubpixelLayout {
            /** Unknown or unsupported subpixel layout, LCD subpixel antialiasing is disabled. */
            FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0,
            
            /** Horizontal RGB subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1,
            
            /** Horizontal BGR subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2,
            
            /** Vertical RGB subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3,
            
            /** Vertical BGR subpixel layout. */
            FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4,
            
            /** Represents the size of the [enum FontLCDSubpixelLayout] enum. */
            FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5,
        }
        enum Direction {
            /** Text direction is determined based on contents and current locale. */
            DIRECTION_AUTO = 0,
            
            /** Text is written from left to right. */
            DIRECTION_LTR = 1,
            
            /** Text is written from right to left. */
            DIRECTION_RTL = 2,
            
            /** Text writing direction is the same as base string writing direction. Used for BiDi override only. */
            DIRECTION_INHERITED = 3,
        }
        enum Orientation {
            /** Text is written horizontally. */
            ORIENTATION_HORIZONTAL = 0,
            
            /** Left to right text is written vertically from top to bottom.  
             *  Right to left text is written vertically from bottom to top.  
             */
            ORIENTATION_VERTICAL = 1,
        }
        enum JustificationFlag {
            /** Do not justify text. */
            JUSTIFICATION_NONE = 0,
            
            /** Justify text by adding and removing kashidas. */
            JUSTIFICATION_KASHIDA = 1,
            
            /** Justify text by changing width of the spaces between the words. */
            JUSTIFICATION_WORD_BOUND = 2,
            
            /** Remove trailing and leading spaces from the justified text. */
            JUSTIFICATION_TRIM_EDGE_SPACES = 4,
            
            /** Only apply justification to the part of the text after the last tab. */
            JUSTIFICATION_AFTER_LAST_TAB = 8,
            
            /** Apply justification to the trimmed line with ellipsis. */
            JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16,
            
            /** Do not apply justification to the last line of the paragraph. */
            JUSTIFICATION_SKIP_LAST_LINE = 32,
            
            /** Do not apply justification to the last line of the paragraph with visible characters (takes precedence over [constant JUSTIFICATION_SKIP_LAST_LINE]). */
            JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64,
            
            /** Always apply justification to the paragraphs with a single line ([constant JUSTIFICATION_SKIP_LAST_LINE] and [constant JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS] are ignored). */
            JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128,
        }
        enum AutowrapMode {
            /** Autowrap is disabled. */
            AUTOWRAP_OFF = 0,
            
            /** Wraps the text inside the node's bounding rectangle by allowing to break lines at arbitrary positions, which is useful when very limited space is available. */
            AUTOWRAP_ARBITRARY = 1,
            
            /** Wraps the text inside the node's bounding rectangle by soft-breaking between words. */
            AUTOWRAP_WORD = 2,
            
            /** Behaves similarly to [constant AUTOWRAP_WORD], but force-breaks a word if that single word does not fit in one line. */
            AUTOWRAP_WORD_SMART = 3,
        }
        enum LineBreakFlag {
            /** Do not break the line. */
            BREAK_NONE = 0,
            
            /** Break the line at the line mandatory break characters (e.g. `"\n"`). */
            BREAK_MANDATORY = 1,
            
            /** Break the line between the words. */
            BREAK_WORD_BOUND = 2,
            
            /** Break the line between any unconnected graphemes. */
            BREAK_GRAPHEME_BOUND = 4,
            
            /** Should be used only in conjunction with [constant BREAK_WORD_BOUND], break the line between any unconnected graphemes, if it's impossible to break it between the words. */
            BREAK_ADAPTIVE = 8,
            
            /** Remove edge spaces from the broken line segments. */
            BREAK_TRIM_EDGE_SPACES = 16,
        }
        enum VisibleCharactersBehavior {
            /** Trims text before the shaping. e.g, increasing [member Label.visible_characters] or [member RichTextLabel.visible_characters] value is visually identical to typing the text. */
            VC_CHARS_BEFORE_SHAPING = 0,
            
            /** Displays glyphs that are mapped to the first [member Label.visible_characters] or [member RichTextLabel.visible_characters] characters from the beginning of the text. */
            VC_CHARS_AFTER_SHAPING = 1,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left or from the right, depending on [member Control.layout_direction] value. */
            VC_GLYPHS_AUTO = 2,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left. */
            VC_GLYPHS_LTR = 3,
            
            /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the right. */
            VC_GLYPHS_RTL = 4,
        }
        enum OverrunBehavior {
            /** No text trimming is performed. */
            OVERRUN_NO_TRIMMING = 0,
            
            /** Trims the text per character. */
            OVERRUN_TRIM_CHAR = 1,
            
            /** Trims the text per word. */
            OVERRUN_TRIM_WORD = 2,
            
            /** Trims the text per character and adds an ellipsis to indicate that parts are hidden. */
            OVERRUN_TRIM_ELLIPSIS = 3,
            
            /** Trims the text per word and adds an ellipsis to indicate that parts are hidden. */
            OVERRUN_TRIM_WORD_ELLIPSIS = 4,
        }
        enum TextOverrunFlag {
            /** No trimming is performed. */
            OVERRUN_NO_TRIM = 0,
            
            /** Trims the text when it exceeds the given width. */
            OVERRUN_TRIM = 1,
            
            /** Trims the text per word instead of per grapheme. */
            OVERRUN_TRIM_WORD_ONLY = 2,
            
            /** Determines whether an ellipsis should be added at the end of the text. */
            OVERRUN_ADD_ELLIPSIS = 4,
            
            /** Determines whether the ellipsis at the end of the text is enforced and may not be hidden. */
            OVERRUN_ENFORCE_ELLIPSIS = 8,
            
            /** Accounts for the text being justified before attempting to trim it (see [enum JustificationFlag]). */
            OVERRUN_JUSTIFICATION_AWARE = 16,
        }
        enum GraphemeFlag {
            /** Grapheme is supported by the font, and can be drawn. */
            GRAPHEME_IS_VALID = 1,
            
            /** Grapheme is part of right-to-left or bottom-to-top run. */
            GRAPHEME_IS_RTL = 2,
            
            /** Grapheme is not part of source text, it was added by justification process. */
            GRAPHEME_IS_VIRTUAL = 4,
            
            /** Grapheme is whitespace. */
            GRAPHEME_IS_SPACE = 8,
            
            /** Grapheme is mandatory break point (e.g. `"\n"`). */
            GRAPHEME_IS_BREAK_HARD = 16,
            
            /** Grapheme is optional break point (e.g. space). */
            GRAPHEME_IS_BREAK_SOFT = 32,
            
            /** Grapheme is the tabulation character. */
            GRAPHEME_IS_TAB = 64,
            
            /** Grapheme is kashida. */
            GRAPHEME_IS_ELONGATION = 128,
            
            /** Grapheme is punctuation character. */
            GRAPHEME_IS_PUNCTUATION = 256,
            
            /** Grapheme is underscore character. */
            GRAPHEME_IS_UNDERSCORE = 512,
            
            /** Grapheme is connected to the previous grapheme. Breaking line before this grapheme is not safe. */
            GRAPHEME_IS_CONNECTED = 1024,
            
            /** It is safe to insert a U+0640 before this grapheme for elongation. */
            GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048,
            
            /** Grapheme is an object replacement character for the embedded object. */
            GRAPHEME_IS_EMBEDDED_OBJECT = 4096,
        }
        enum Hinting {
            /** Disables font hinting (smoother but less crisp). */
            HINTING_NONE = 0,
            
            /** Use the light font hinting mode. */
            HINTING_LIGHT = 1,
            
            /** Use the default font hinting mode (crisper but less smooth).  
             *      
             *  **Note:** This hinting mode changes both horizontal and vertical glyph metrics. If applied to monospace font, some glyphs might have different width.  
             */
            HINTING_NORMAL = 2,
        }
        enum SubpixelPositioning {
            /** Glyph horizontal position is rounded to the whole pixel size, each glyph is rasterized once. */
            SUBPIXEL_POSITIONING_DISABLED = 0,
            
            /** Glyph horizontal position is rounded based on font size.  
             *  - To one quarter of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE].  
             *  - To one half of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE].  
             *  - To the whole pixel size for larger fonts.  
             */
            SUBPIXEL_POSITIONING_AUTO = 1,
            
            /** Glyph horizontal position is rounded to one half of the pixel size, each glyph is rasterized up to two times. */
            SUBPIXEL_POSITIONING_ONE_HALF = 2,
            
            /** Glyph horizontal position is rounded to one quarter of the pixel size, each glyph is rasterized up to four times. */
            SUBPIXEL_POSITIONING_ONE_QUARTER = 3,
            
            /** Maximum font size which will use one half of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
            SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20,
            
            /** Maximum font size which will use one quarter of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
            SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16,
        }
        enum Feature {
            /** TextServer supports simple text layouts. */
            FEATURE_SIMPLE_LAYOUT = 1,
            
            /** TextServer supports bidirectional text layouts. */
            FEATURE_BIDI_LAYOUT = 2,
            
            /** TextServer supports vertical layouts. */
            FEATURE_VERTICAL_LAYOUT = 4,
            
            /** TextServer supports complex text shaping. */
            FEATURE_SHAPING = 8,
            
            /** TextServer supports justification using kashidas. */
            FEATURE_KASHIDA_JUSTIFICATION = 16,
            
            /** TextServer supports complex line/word breaking rules (e.g. dictionary based). */
            FEATURE_BREAK_ITERATORS = 32,
            
            /** TextServer supports loading bitmap fonts. */
            FEATURE_FONT_BITMAP = 64,
            
            /** TextServer supports loading dynamic (TrueType, OpeType, etc.) fonts. */
            FEATURE_FONT_DYNAMIC = 128,
            
            /** TextServer supports multichannel signed distance field dynamic font rendering. */
            FEATURE_FONT_MSDF = 256,
            
            /** TextServer supports loading system fonts. */
            FEATURE_FONT_SYSTEM = 512,
            
            /** TextServer supports variable fonts. */
            FEATURE_FONT_VARIABLE = 1024,
            
            /** TextServer supports locale dependent and context sensitive case conversion. */
            FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048,
            
            /** TextServer require external data file for some features, see [method load_support_data]. */
            FEATURE_USE_SUPPORT_DATA = 4096,
            
            /** TextServer supports UAX #31 identifier validation, see [method is_valid_identifier]. */
            FEATURE_UNICODE_IDENTIFIERS = 8192,
            
            /** TextServer supports [url=https://unicode.org/reports/tr36/]Unicode Technical Report #36[/url] and [url=https://unicode.org/reports/tr39/]Unicode Technical Standard #39[/url] based spoof detection features. */
            FEATURE_UNICODE_SECURITY = 16384,
        }
        enum ContourPointTag {
            /** Contour point is on the curve. */
            CONTOUR_CURVE_TAG_ON = 1,
            
            /** Contour point isn't on the curve, but serves as a control point for a conic (quadratic) Bézier arc. */
            CONTOUR_CURVE_TAG_OFF_CONIC = 0,
            
            /** Contour point isn't on the curve, but serves as a control point for a cubic Bézier arc. */
            CONTOUR_CURVE_TAG_OFF_CUBIC = 2,
        }
        enum SpacingType {
            /** Spacing for each glyph. */
            SPACING_GLYPH = 0,
            
            /** Spacing for the space character. */
            SPACING_SPACE = 1,
            
            /** Spacing at the top of the line. */
            SPACING_TOP = 2,
            
            /** Spacing at the bottom of the line. */
            SPACING_BOTTOM = 3,
            
            /** Represents the size of the [enum SpacingType] enum. */
            SPACING_MAX = 4,
        }
        enum FontStyle {
            /** Font is bold. */
            FONT_BOLD = 1,
            
            /** Font is italic or oblique. */
            FONT_ITALIC = 2,
            
            /** Font have fixed-width characters. */
            FONT_FIXED_WIDTH = 4,
        }
        enum StructuredTextParser {
            /** Use default Unicode BiDi algorithm. */
            STRUCTURED_TEXT_DEFAULT = 0,
            
            /** BiDi override for URI. */
            STRUCTURED_TEXT_URI = 1,
            
            /** BiDi override for file path. */
            STRUCTURED_TEXT_FILE = 2,
            
            /** BiDi override for email. */
            STRUCTURED_TEXT_EMAIL = 3,
            
            /** BiDi override for lists. Structured text options: list separator [String]. */
            STRUCTURED_TEXT_LIST = 4,
            
            /** BiDi override for GDScript. */
            STRUCTURED_TEXT_GDSCRIPT = 5,
            
            /** User defined structured text BiDi override function. */
            STRUCTURED_TEXT_CUSTOM = 6,
        }
        enum FixedSizeScaleMode {
            /** Bitmap font is not scaled. */
            FIXED_SIZE_SCALE_DISABLE = 0,
            
            /** Bitmap font is scaled to the closest integer multiple of the font's fixed size. This is the recommended option for pixel art fonts. */
            FIXED_SIZE_SCALE_INTEGER_ONLY = 1,
            
            /** Bitmap font is scaled to an arbitrary (fractional) size. This is the recommended option for non-pixel art fonts. */
            FIXED_SIZE_SCALE_ENABLED = 2,
        }
    }
    /** A server interface for font management and text rendering. */
    class TextServer extends RefCounted {
        /** Returns `true` if the server supports a feature. */
        has_feature(feature: TextServer.Feature): boolean
        
        /** Returns the name of the server interface. */
        get_name(): string
        
        /** Returns text server features, see [enum Feature]. */
        get_features(): number /*i64*/
        
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries).  
         *      
         *  **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.  
         */
        load_support_data(filename: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        get_support_data_filename(): string
        
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        get_support_data_info(): string
        
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.  
         *      
         *  **Note:** This function is used by during project export, to include TextServer database.  
         */
        save_support_data(filename: string): boolean
        
        /** Returns `true` if locale is right-to-left. */
        is_locale_right_to_left(locale: string): boolean
        
        /** Converts readable feature, variation, script or language name to OpenType tag. */
        name_to_tag(name: string): number /*i64*/
        
        /** Converts OpenType tag to readable feature, variation, script or language name. */
        tag_to_name(tag: number /*i64*/): string
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        has(rid: RID): boolean
        
        /** Frees an object created by this [TextServer]. */
        free_rid(rid: RID): void
        
        /** Creates a new, empty font cache entry resource. To free the resulting resource, use the [method free_rid] method. */
        create_font(): RID
        
        /** Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the [method free_rid] method. */
        create_font_linked_variation(font_rid: RID): RID
        
        /** Sets font source data, e.g contents of the dynamic font source file. */
        font_set_data(font_rid: RID, data: PackedByteArray): void
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        font_get_face_index(font_rid: RID): number /*i64*/
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        font_get_face_count(font_rid: RID): number /*i64*/
        
        /** Sets the font style flags, see [enum FontStyle].  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], [method font_set_embolden], or [method font_set_transform] instead.  
         */
        font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        
        /** Returns font style flags, see [enum FontStyle]. */
        font_get_style(font_rid: RID): TextServer.FontStyle
        
        /** Sets the font family name. */
        font_set_name(font_rid: RID, name: string): void
        
        /** Returns font family name. */
        font_get_name(font_rid: RID): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        font_get_ot_name_strings(font_rid: RID): Dictionary
        
        /** Sets the font style name. */
        font_set_style_name(font_rid: RID, name: string): void
        
        /** Returns font style name. */
        font_get_style_name(font_rid: RID): string
        
        /** Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_embolden] instead.  
         */
        font_set_weight(font_rid: RID, weight: number /*i64*/): void
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_get_weight(font_rid: RID): number /*i64*/
        
        /** Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_transform] instead.  
         */
        font_set_stretch(font_rid: RID, weight: number /*i64*/): void
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_get_stretch(font_rid: RID): number /*i64*/
        
        /** Sets font anti-aliasing mode. */
        font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        
        /** Returns font anti-aliasing mode. */
        font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        
        /** If set to `true` font texture mipmap generation is enabled. */
        font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        
        /** Returns `true` if font texture mipmap generation is enabled. */
        font_get_generate_mipmaps(font_rid: RID): boolean
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        
        /** Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        
        /** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
        font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        
        /** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
        font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        
        /** Sets source font size used to generate MSDF textures. */
        font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        
        /** Returns source font size used to generate MSDF textures. */
        font_get_msdf_size(font_rid: RID): number /*i64*/
        
        /** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
        font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        
        /** Returns bitmap font fixed size. */
        font_get_fixed_size(font_rid: RID): number /*i64*/
        
        /** Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero. */
        font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        
        /** Returns bitmap font scaling mode. */
        font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        
        /** Returns `true` if system fonts can be automatically used as fallbacks. */
        font_is_allow_system_fallback(font_rid: RID): boolean
        
        /** If set to `true` auto-hinting is preferred over font built-in hinting. */
        font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        
        /** Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only. */
        font_is_force_autohinter(font_rid: RID): boolean
        
        /** Sets font hinting mode. Used by dynamic fonts only. */
        font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        
        /** Returns the font hinting mode. Used by dynamic fonts only. */
        font_get_hinting(font_rid: RID): TextServer.Hinting
        
        /** Sets font subpixel glyph positioning mode. */
        font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        
        /** Returns font subpixel glyph positioning mode. */
        font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        
        /** Returns font embolden strength. */
        font_get_embolden(font_rid: RID): number /*f64*/
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Returns the spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        font_set_transform(font_rid: RID, transform: Transform2D): void
        
        /** Returns 2D transform applied to the font outlines. */
        font_get_transform(font_rid: RID): Transform2D
        
        /** Sets variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_get_variation_coordinates(font_rid: RID): Dictionary
        
        /** Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only. */
        font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        
        /** Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only. */
        font_get_oversampling(font_rid: RID): number /*f64*/
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        font_get_size_cache_list(font_rid: RID): Array
        
        /** Removes all font sizes from the cache entry. */
        font_clear_size_cache(font_rid: RID): void
        
        /** Removes specified font size from the cache entry. */
        font_remove_size_cache(font_rid: RID, size: Vector2i): void
        
        /** Sets the font ascent (number of pixels above the baseline). */
        font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets the font descent (number of pixels below the baseline). */
        font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets pixel offset of the underline below the baseline. */
        font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        
        /** Returns pixel offset of the underline below the baseline. */
        font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets thickness of the underline in pixels. */
        font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        
        /** Returns thickness of the underline in pixels. */
        font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Sets scaling factor of the color bitmap font. */
        font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        
        /** Returns scaling factor of the color bitmap font. */
        font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        
        /** Returns number of textures used by font cache entry. */
        font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method font_remove_glyph] to remove them manually.  
         */
        font_clear_textures(font_rid: RID, size: Vector2i): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, remove them manually, using [method font_remove_glyph].  
         */
        font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        
        /** Sets font cache texture image data. */
        font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        
        /** Returns font cache texture image data. */
        font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        
        /** Sets array containing glyph packing data. */
        font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        
        /** Returns array containing glyph packing data. */
        font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        
        /** Removes all rendered glyphs information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        font_clear_glyphs(font_rid: RID, size: Vector2i): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets glyph offset from the baseline. */
        font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        
        /** Returns size of the glyph. */
        font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets size of the glyph. */
        font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        
        /** Returns index of the cache texture containing the glyph. */
        font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        
        /** Sets index of the cache texture containing the glyph. */
        font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        
        /** Returns resource ID of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        
        /** Returns size of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Returns outline contours of the glyph as a [Dictionary] with the following contents:  
         *  `points`         - [PackedVector3Array], containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the [enum ContourPointTag] values.  
         *  `contours`       - [PackedInt32Array], containing indices the end points of each contour.  
         *  `orientation`    - [bool], contour orientation. If `true`, clockwise contours must be filled.  
         */
        font_get_glyph_contours(font: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        
        /** Returns list of the kerning overrides. */
        font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        
        /** Removes all kerning overrides. */
        font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        
        /** Removes kerning override for the pair of glyphs. */
        font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        
        /** Sets kerning for the pair of glyphs. */
        font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. See [method font_get_char_from_glyph_index]. */
        font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method font_get_glyph_index]. */
        font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        font_has_char(font_rid: RID, char: number /*i64*/): boolean
        
        /** Returns a string containing all the characters available in the font. */
        font_get_supported_chars(font_rid: RID): string
        
        /** Renders the range of characters to the font cache texture. */
        font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        
        /** Renders specified glyph to the font cache texture. */
        font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size].  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size].  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        font_is_language_supported(font_rid: RID, language: string): boolean
        
        /** Adds override for [method font_is_language_supported]. */
        font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        font_get_language_support_override(font_rid: RID, language: string): boolean
        
        /** Remove language support override. */
        font_remove_language_support_override(font_rid: RID, language: string): void
        
        /** Returns list of language support overrides. */
        font_get_language_support_overrides(font_rid: RID): PackedStringArray
        
        /** Returns `true`, if font supports given script (ISO 15924 code). */
        font_is_script_supported(font_rid: RID, script: string): boolean
        
        /** Adds override for [method font_is_script_supported]. */
        font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        font_get_script_support_override(font_rid: RID, script: string): boolean
        
        /** Removes script support override. */
        font_remove_script_support_override(font_rid: RID, script: string): void
        
        /** Returns list of script support overrides. */
        font_get_script_support_overrides(font_rid: RID): PackedStringArray
        
        /** Sets font OpenType feature set override. */
        font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        
        /** Returns font OpenType feature set override. */
        font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        
        /** Returns the dictionary of the supported OpenType features. */
        font_supported_feature_list(font_rid: RID): Dictionary
        
        /** Returns the dictionary of the supported OpenType variation coordinates. */
        font_supported_variation_list(font_rid: RID): Dictionary
        
        /** Returns the font oversampling factor, shared by all fonts in the TextServer. */
        font_get_global_oversampling(): number /*f64*/
        
        /** Sets oversampling factor, shared by all font in the TextServer.  
         *      
         *  **Note:** This value can be automatically changed by display server.  
         */
        font_set_global_oversampling(oversampling: number /*f64*/): void
        
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        
        /** Draws box displaying character hexadecimal code. Used for replacing missing characters. */
        draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        
        /** Creates new buffer for complex text layout, with the given [param direction] and [param orientation]. To free the resulting buffer, use [method free_rid] method.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        create_shaped_text(direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): RID
        
        /** Clears text buffer (removes text and inline objects). */
        shaped_text_clear(rid: RID): void
        
        /** Sets desired text direction. If set to [constant DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shaped_text_set_direction(shaped: RID, direction: TextServer.Direction = 0): void
        
        /** Returns direction of the text. */
        shaped_text_get_direction(shaped: RID): TextServer.Direction
        
        /** Returns direction of the text, inferred by the BiDi algorithm. */
        shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        shaped_text_set_bidi_override(shaped: RID, override: Array): void
        
        /** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        
        /** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shaped_text_get_custom_punctuation(shaped: RID): string
        
        /** Sets desired text orientation.  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation = 0): void
        
        /** Returns text orientation. */
        shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        
        /** If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.  
         *      
         *  **Note:** If set to `false`, nothing is displayed in place of invalid characters.  
         */
        shaped_text_get_preserve_invalid(shaped: RID): boolean
        
        /** If set to `true` text buffer will display control characters. */
        shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display control characters. */
        shaped_text_get_preserve_control(shaped: RID): boolean
        
        /** Sets extra spacing added between glyphs or lines in pixels. */
        shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Returns extra spacing added between glyphs or lines in pixels. */
        shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        
        /** Adds text span and font to draw it to the text buffer. */
        shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/, language: string = '', meta: any = <any> {} /*compound.type from nil*/): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, length: number /*i64*/ = 1, baseline: number /*f64*/ = 0): boolean
        
        /** Sets new size and alignment of embedded object. */
        shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment = 5, baseline: number /*f64*/ = 0): boolean
        
        /** Returns number of text spans added using [method shaped_text_add_string] or [method shaped_text_add_object]. */
        shaped_get_span_count(shaped: RID): number /*i64*/
        
        /** Returns text span metadata. */
        shaped_get_span_meta(shaped: RID, index: number /*i64*/): any
        
        /** Changes text span font, font size and OpenType features, without changing the text. */
        shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary = <any> {} /*compound.type from 27([object Object])*/): void
        
        /** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
        shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        
        /** Returns the parent buffer from which the substring originates. */
        shaped_text_get_parent(shaped: RID): RID
        
        /** Adjusts text width to fit to specified width, returns new text width. */
        shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag = 3): number /*f64*/
        
        /** Aligns shaped text to the given tab-stops. */
        shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        
        /** Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.  
         *      
         *  **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.  
         */
        shaped_text_shape(shaped: RID): boolean
        
        /** Returns `true` if buffer is successfully shaped. */
        shaped_text_is_ready(shaped: RID): boolean
        
        /** Returns `true` if text buffer contains any visible characters. */
        shaped_text_has_visible_chars(shaped: RID): boolean
        
        /** Returns an array of glyphs in the visual order. */
        shaped_text_get_glyphs(shaped: RID): Array
        
        /** Returns text glyphs in the logical order. */
        shaped_text_sort_logical(shaped: RID): Array
        
        /** Returns number of glyphs in the buffer. */
        shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        
        /** Returns substring buffer character range in the parent buffer. */
        shaped_text_get_range(shaped: RID): Vector2i
        
        /** Breaks text to the lines and columns. Returns character ranges for each segment. */
        shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/ = 0, once: boolean = true, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        
        /** Breaks text to the lines and returns character ranges for each line. */
        shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/ = 0, break_flags: TextServer.LineBreakFlag = 3): PackedInt32Array
        
        /** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking (see [enum GraphemeFlag]). */
        shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag = 264): PackedInt32Array
        
        /** Returns the position of the overrun trim. */
        shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        
        /** Returns position of the ellipsis. */
        shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        
        /** Returns array of the glyphs in the ellipsis. */
        shaped_text_get_ellipsis_glyphs(shaped: RID): Array
        
        /** Returns number of glyphs in the ellipsis. */
        shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        
        /** Trims text if it exceeds the given width. */
        shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/ = 0, overrun_trim_flags: TextServer.TextOverrunFlag = 0): void
        
        /** Returns array of inline objects. */
        shaped_text_get_objects(shaped: RID): Array
        
        /** Returns bounding rectangle of the inline object. */
        shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        
        /** Returns size of the text. */
        shaped_text_get_size(shaped: RID): Vector2
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).  
         *      
         *  **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.  
         */
        shaped_text_get_ascent(shaped: RID): number /*f64*/
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).  
         *      
         *  **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.  
         */
        shaped_text_get_descent(shaped: RID): number /*f64*/
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        shaped_text_get_width(shaped: RID): number /*f64*/
        
        /** Returns pixel offset of the underline below the baseline. */
        shaped_text_get_underline_position(shaped: RID): number /*f64*/
        
        /** Returns thickness of the underline. */
        shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        
        /** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
        shaped_text_get_carets(shaped: RID, position: number /*i64*/): Dictionary
        
        /** Returns selection rectangles for the specified character range. */
        shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        
        /** Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found. */
        shaped_text_hit_test_grapheme(shaped: RID, coords: number /*f64*/): number /*i64*/
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        shaped_text_hit_test_position(shaped: RID, coords: number /*f64*/): number /*i64*/
        
        /** Returns composite character's bounds as offsets from the start of the line. */
        shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        
        /** Returns grapheme end position closest to the [param pos]. */
        shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns grapheme start position closest to the [param pos]. */
        shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns array of the composite character boundaries. */
        shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        
        /** Returns composite character end position closest to the [param pos]. */
        shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns composite character start position closest to the [param pos]. */
        shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Returns composite character position closest to the [param pos]. */
        shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        
        /** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). */
        shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). */
        shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/ = -1, clip_r: number /*f64*/ = -1, outline_size: number /*i64*/ = 1, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Returns dominant direction of in the range of text. */
        shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): TextServer.Direction
        
        /** Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language].  
         *  If [param language] is omitted, the active locale will be used.  
         */
        format_number(number: string, language: string = ''): string
        
        /** Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9). */
        parse_number(number: string, language: string = ''): string
        
        /** Returns percent sign used in the [param language]. */
        percent_sign(language: string = ''): string
        
        /** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.  
         *  When [param chars_per_line] is greater than zero, line break boundaries are returned instead.  
         *    
         */
        string_get_word_breaks(string_: string, language: string = '', chars_per_line: number /*i64*/ = 0): PackedInt32Array
        
        /** Returns array of the composite character boundaries.  
         *    
         */
        string_get_character_breaks(string_: string, language: string = ''): PackedInt32Array
        
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found.  
         *      
         *  **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with [method spoof_check].  
         *      
         *  **Note:** Always returns `-1` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        
        /** Returns `true` if [param string] is likely to be an attempt at confusing the reader.  
         *      
         *  **Note:** Always returns `false` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        spoof_check(string_: string): boolean
        
        /** Strips diacritics from the string.  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        strip_diacritics(string_: string): string
        
        /** Returns `true` if [param string] is a valid identifier.  
         *  If the text server supports the [constant FEATURE_UNICODE_IDENTIFIERS] feature, a valid identifier must:  
         *  - Conform to normalization form C.  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         *  - Use UAX #31 recommended scripts only (mixed scripts are allowed).  
         *  If the [constant FEATURE_UNICODE_IDENTIFIERS] feature is not supported, a valid identifier must:  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         */
        is_valid_identifier(string_: string): boolean
        
        /** Returns the string converted to uppercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        string_to_upper(string_: string, language: string = ''): string
        
        /** Returns the string converted to lowercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        string_to_lower(string_: string, language: string = ''): string
        
        /** Default implementation of the BiDi algorithm override function. See [enum StructuredTextParser] for more info. */
        parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
    }
    /** An advanced text server with support for BiDi, complex text layout, and contextual OpenType features. Used in Godot by default. */
    class TextServerAdvanced extends TextServerExtension {
    }
    /** A dummy text server that can't render text or manage fonts. */
    class TextServerDummy extends TextServerExtension {
    }
    /** Base class for custom [TextServer] implementations (plugins). */
    class TextServerExtension extends TextServer {
        /* gdvirtual */ _has_feature(feature: TextServer.Feature): boolean
        /* gdvirtual */ _get_name(): string
        /* gdvirtual */ _get_features(): number /*i64*/
        /* gdvirtual */ _free_rid(rid: RID): void
        /* gdvirtual */ _has(rid: RID): boolean
        /* gdvirtual */ _load_support_data(filename: string): boolean
        /* gdvirtual */ _get_support_data_filename(): string
        /* gdvirtual */ _get_support_data_info(): string
        /* gdvirtual */ _save_support_data(filename: string): boolean
        /* gdvirtual */ _is_locale_right_to_left(locale: string): boolean
        /* gdvirtual */ _name_to_tag(name: string): number /*i64*/
        /* gdvirtual */ _tag_to_name(tag: number /*i64*/): string
        /* gdvirtual */ _create_font(): RID
        /* gdvirtual */ _create_font_linked_variation(font_rid: RID): RID
        /* gdvirtual */ _font_set_data(font_rid: RID, data: PackedByteArray): void
        /* gdvirtual */ _font_set_data_ptr(font_rid: RID, data_ptr: number /*i64*/, data_size: number /*i64*/): void
        /* gdvirtual */ _font_set_face_index(font_rid: RID, face_index: number /*i64*/): void
        /* gdvirtual */ _font_get_face_index(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_get_face_count(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_style(font_rid: RID, style: TextServer.FontStyle): void
        /* gdvirtual */ _font_get_style(font_rid: RID): TextServer.FontStyle
        /* gdvirtual */ _font_set_name(font_rid: RID, name: string): void
        /* gdvirtual */ _font_get_name(font_rid: RID): string
        /* gdvirtual */ _font_get_ot_name_strings(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_style_name(font_rid: RID, name_style: string): void
        /* gdvirtual */ _font_get_style_name(font_rid: RID): string
        /* gdvirtual */ _font_set_weight(font_rid: RID, weight: number /*i64*/): void
        /* gdvirtual */ _font_get_weight(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_stretch(font_rid: RID, stretch: number /*i64*/): void
        /* gdvirtual */ _font_get_stretch(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        /* gdvirtual */ _font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        /* gdvirtual */ _font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        /* gdvirtual */ _font_get_generate_mipmaps(font_rid: RID): boolean
        /* gdvirtual */ _font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        /* gdvirtual */ _font_is_multichannel_signed_distance_field(font_rid: RID): boolean
        /* gdvirtual */ _font_set_msdf_pixel_range(font_rid: RID, msdf_pixel_range: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_pixel_range(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_msdf_size(font_rid: RID, msdf_size: number /*i64*/): void
        /* gdvirtual */ _font_get_msdf_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size(font_rid: RID, fixed_size: number /*i64*/): void
        /* gdvirtual */ _font_get_fixed_size(font_rid: RID): number /*i64*/
        /* gdvirtual */ _font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        /* gdvirtual */ _font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        /* gdvirtual */ _font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        /* gdvirtual */ _font_is_allow_system_fallback(font_rid: RID): boolean
        /* gdvirtual */ _font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        /* gdvirtual */ _font_is_force_autohinter(font_rid: RID): boolean
        /* gdvirtual */ _font_set_hinting(font_rid: RID, hinting: TextServer.Hinting): void
        /* gdvirtual */ _font_get_hinting(font_rid: RID): TextServer.Hinting
        /* gdvirtual */ _font_set_subpixel_positioning(font_rid: RID, subpixel_positioning: TextServer.SubpixelPositioning): void
        /* gdvirtual */ _font_get_subpixel_positioning(font_rid: RID): TextServer.SubpixelPositioning
        /* gdvirtual */ _font_set_embolden(font_rid: RID, strength: number /*f64*/): void
        /* gdvirtual */ _font_get_embolden(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_set_spacing(font_rid: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _font_get_spacing(font_rid: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _font_set_transform(font_rid: RID, transform: Transform2D): void
        /* gdvirtual */ _font_get_transform(font_rid: RID): Transform2D
        /* gdvirtual */ _font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        /* gdvirtual */ _font_get_variation_coordinates(font_rid: RID): Dictionary
        /* gdvirtual */ _font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        /* gdvirtual */ _font_get_oversampling(font_rid: RID): number /*f64*/
        /* gdvirtual */ _font_get_size_cache_list(font_rid: RID): Array
        /* gdvirtual */ _font_clear_size_cache(font_rid: RID): void
        /* gdvirtual */ _font_remove_size_cache(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_set_ascent(font_rid: RID, size: number /*i64*/, ascent: number /*f64*/): void
        /* gdvirtual */ _font_get_ascent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_descent(font_rid: RID, size: number /*i64*/, descent: number /*f64*/): void
        /* gdvirtual */ _font_get_descent(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_position(font_rid: RID, size: number /*i64*/, underline_position: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_position(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_underline_thickness(font_rid: RID, size: number /*i64*/, underline_thickness: number /*f64*/): void
        /* gdvirtual */ _font_get_underline_thickness(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_set_scale(font_rid: RID, size: number /*i64*/, scale: number /*f64*/): void
        /* gdvirtual */ _font_get_scale(font_rid: RID, size: number /*i64*/): number /*f64*/
        /* gdvirtual */ _font_get_texture_count(font_rid: RID, size: Vector2i): number /*i64*/
        /* gdvirtual */ _font_clear_textures(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_texture(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): void
        /* gdvirtual */ _font_set_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        /* gdvirtual */ _font_get_texture_image(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): Image
        /* gdvirtual */ _font_set_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        /* gdvirtual */ _font_get_texture_offsets(font_rid: RID, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _font_get_glyph_list(font_rid: RID, size: Vector2i): PackedInt32Array
        /* gdvirtual */ _font_clear_glyphs(font_rid: RID, size: Vector2i): void
        /* gdvirtual */ _font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        /* gdvirtual */ _font_get_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_offset(font_rid: RID, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        /* gdvirtual */ _font_get_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_set_glyph_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        /* gdvirtual */ _font_get_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Rect2
        /* gdvirtual */ _font_set_glyph_uv_rect(font_rid: RID, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        /* gdvirtual */ _font_get_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_set_glyph_texture_idx(font_rid: RID, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        /* gdvirtual */ _font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        /* gdvirtual */ _font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /* gdvirtual */ _font_get_glyph_contours(font_rid: RID, size: number /*i64*/, index: number /*i64*/): Dictionary
        /* gdvirtual */ _font_get_kerning_list(font_rid: RID, size: number /*i64*/): Array
        /* gdvirtual */ _font_clear_kerning_map(font_rid: RID, size: number /*i64*/): void
        /* gdvirtual */ _font_remove_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): void
        /* gdvirtual */ _font_set_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        /* gdvirtual */ _font_get_kerning(font_rid: RID, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        /* gdvirtual */ _font_get_glyph_index(font_rid: RID, size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _font_has_char(font_rid: RID, char: number /*i64*/): boolean
        /* gdvirtual */ _font_get_supported_chars(font_rid: RID): string
        /* gdvirtual */ _font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        /* gdvirtual */ _font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        /* gdvirtual */ _font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _font_is_language_supported(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        /* gdvirtual */ _font_get_language_support_override(font_rid: RID, language: string): boolean
        /* gdvirtual */ _font_remove_language_support_override(font_rid: RID, language: string): void
        /* gdvirtual */ _font_get_language_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_is_script_supported(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        /* gdvirtual */ _font_get_script_support_override(font_rid: RID, script: string): boolean
        /* gdvirtual */ _font_remove_script_support_override(font_rid: RID, script: string): void
        /* gdvirtual */ _font_get_script_support_overrides(font_rid: RID): PackedStringArray
        /* gdvirtual */ _font_set_opentype_feature_overrides(font_rid: RID, overrides: Dictionary): void
        /* gdvirtual */ _font_get_opentype_feature_overrides(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_feature_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_supported_variation_list(font_rid: RID): Dictionary
        /* gdvirtual */ _font_get_global_oversampling(): number /*f64*/
        /* gdvirtual */ _font_set_global_oversampling(oversampling: number /*f64*/): void
        /* gdvirtual */ _get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        /* gdvirtual */ _draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /* gdvirtual */ _create_shaped_text(direction: TextServer.Direction, orientation: TextServer.Orientation): RID
        /* gdvirtual */ _shaped_text_clear(shaped: RID): void
        /* gdvirtual */ _shaped_text_set_direction(shaped: RID, direction: TextServer.Direction): void
        /* gdvirtual */ _shaped_text_get_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_get_inferred_direction(shaped: RID): TextServer.Direction
        /* gdvirtual */ _shaped_text_set_bidi_override(shaped: RID, override: Array): void
        /* gdvirtual */ _shaped_text_set_custom_punctuation(shaped: RID, punct: string): void
        /* gdvirtual */ _shaped_text_get_custom_punctuation(shaped: RID): string
        /* gdvirtual */ _shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation): void
        /* gdvirtual */ _shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        /* gdvirtual */ _shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_invalid(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        /* gdvirtual */ _shaped_text_get_preserve_control(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_set_spacing(shaped: RID, spacing: TextServer.SpacingType, value: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_spacing(shaped: RID, spacing: TextServer.SpacingType): number /*i64*/
        /* gdvirtual */ _shaped_text_add_string(shaped: RID, text: string, fonts: Array, size: number /*i64*/, opentype_features: Dictionary, language: string, meta: any): boolean
        /* gdvirtual */ _shaped_text_add_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, length: number /*i64*/, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_text_resize_object(shaped: RID, key: any, size: Vector2, inline_align: InlineAlignment, baseline: number /*f64*/): boolean
        /* gdvirtual */ _shaped_get_span_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_get_span_meta(shaped: RID, index: number /*i64*/): void
        /* gdvirtual */ _shaped_set_span_update_font(shaped: RID, index: number /*i64*/, fonts: Array, size: number /*i64*/, opentype_features: Dictionary): void
        /* gdvirtual */ _shaped_text_substr(shaped: RID, start: number /*i64*/, length: number /*i64*/): RID
        /* gdvirtual */ _shaped_text_get_parent(shaped: RID): RID
        /* gdvirtual */ _shaped_text_fit_to_width(shaped: RID, width: number /*f64*/, justification_flags: TextServer.JustificationFlag): number /*f64*/
        /* gdvirtual */ _shaped_text_tab_align(shaped: RID, tab_stops: PackedFloat32Array): number /*f64*/
        /* gdvirtual */ _shaped_text_shape(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_breaks(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_update_justification_ops(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_is_ready(shaped: RID): boolean
        /* gdvirtual */ _shaped_text_get_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_sort_logical(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_range(shaped: RID): Vector2i
        /* gdvirtual */ _shaped_text_get_line_breaks_adv(shaped: RID, width: PackedFloat32Array, start: number /*i64*/, once: boolean, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_line_breaks(shaped: RID, width: number /*f64*/, start: number /*i64*/, break_flags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_word_breaks(shaped: RID, grapheme_flags: TextServer.GraphemeFlag): PackedInt32Array
        /* gdvirtual */ _shaped_text_get_trim_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_pos(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyph_count(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_get_ellipsis_glyphs(shaped: RID): number /*i64*/
        /* gdvirtual */ _shaped_text_overrun_trim_to_width(shaped: RID, width: number /*f64*/, trim_flags: TextServer.TextOverrunFlag): void
        /* gdvirtual */ _shaped_text_get_objects(shaped: RID): Array
        /* gdvirtual */ _shaped_text_get_object_rect(shaped: RID, key: any): Rect2
        /* gdvirtual */ _shaped_text_get_size(shaped: RID): Vector2
        /* gdvirtual */ _shaped_text_get_ascent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_descent(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_width(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_position(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_underline_thickness(shaped: RID): number /*f64*/
        /* gdvirtual */ _shaped_text_get_dominant_direction_in_range(shaped: RID, start: number /*i64*/, end: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_carets(shaped: RID, position: number /*i64*/, caret: number /*i64*/): void
        /* gdvirtual */ _shaped_text_get_selection(shaped: RID, start: number /*i64*/, end: number /*i64*/): PackedVector2Array
        /* gdvirtual */ _shaped_text_hit_test_grapheme(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_hit_test_position(shaped: RID, coord: number /*f64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_draw(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, color: Color): void
        /* gdvirtual */ _shaped_text_draw_outline(shaped: RID, canvas: RID, pos: Vector2, clip_l: number /*f64*/, clip_r: number /*f64*/, outline_size: number /*i64*/, color: Color): void
        /* gdvirtual */ _shaped_text_get_grapheme_bounds(shaped: RID, pos: number /*i64*/): Vector2
        /* gdvirtual */ _shaped_text_next_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_grapheme_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_get_character_breaks(shaped: RID): PackedInt32Array
        /* gdvirtual */ _shaped_text_next_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_prev_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _shaped_text_closest_character_pos(shaped: RID, pos: number /*i64*/): number /*i64*/
        /* gdvirtual */ _format_number(string_: string, language: string): string
        /* gdvirtual */ _parse_number(string_: string, language: string): string
        /* gdvirtual */ _percent_sign(language: string): string
        /* gdvirtual */ _strip_diacritics(string_: string): string
        /* gdvirtual */ _is_valid_identifier(string_: string): boolean
        /* gdvirtual */ _string_get_word_breaks(string_: string, language: string, chars_per_line: number /*i64*/): PackedInt32Array
        /* gdvirtual */ _string_get_character_breaks(string_: string, language: string): PackedInt32Array
        /* gdvirtual */ _is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        /* gdvirtual */ _spoof_check(string_: string): boolean
        /* gdvirtual */ _string_to_upper(string_: string, language: string): string
        /* gdvirtual */ _string_to_lower(string_: string, language: string): string
        /* gdvirtual */ _parse_structured_text(parser_type: TextServer.StructuredTextParser, args: Array, text: string): Array
        /* gdvirtual */ _cleanup(): void
    }
    /** Base class for all texture types. */
    class Texture extends Resource {
    }
    /** Texture for 2D and 3D. */
    class Texture2D extends Texture {
        /** Called when the [Texture2D]'s width is queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [Texture2D]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when a pixel's opaque state in the [Texture2D] is queried at the specified `(x, y)` position. */
        /* gdvirtual */ _is_pixel_opaque(x: number /*i64*/, y: number /*i64*/): boolean
        
        /** Called when the presence of an alpha channel in the [Texture2D] is queried. */
        /* gdvirtual */ _has_alpha(): boolean
        
        /** Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw(to_canvas_item: RID, pos: Vector2, modulate: Color, transpose: boolean): void
        
        /** Called when the [Texture2D] is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw_rect(to_canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        
        /** Called when a part of the [Texture2D] specified by [param src_rect]'s coordinates is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw_rect_region(to_canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        
        /** Returns the texture width in pixels. */
        get_width(): number /*i64*/
        
        /** Returns the texture height in pixels. */
        get_height(): number /*i64*/
        
        /** Returns the texture size in pixels. */
        get_size(): Vector2
        
        /** Returns `true` if this [Texture2D] has an alpha channel. */
        has_alpha(): boolean
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvas_item: RID, position: Vector2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect(canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect_region(canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        
        /** Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.  
         *      
         *  **Note:** This will return `null` if this [Texture2D] is invalid.  
         *      
         *  **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused.  
         */
        get_image(): Image
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture2D]). */
        create_placeholder(): Resource
    }
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels. */
    class Texture2DArray extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
        create_placeholder(): Resource
    }
    /** Texture Array for 2D that is bound to a texture created on the [RenderingDevice]. */
    class Texture2DArrayRD extends TextureLayeredRD {
    }
    /** Texture for 2D that is bound to a texture created on the [RenderingDevice]. */
    class Texture2DRD extends Texture2D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    /** Base class for 3-dimensional textures. */
    class Texture3D extends Texture {
        /** Called when the [Texture3D]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the [Texture3D]'s width is queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [Texture3D]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the [Texture3D]'s depth is queried. */
        /* gdvirtual */ _get_depth(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [Texture3D] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the [Texture3D]'s data is queried. */
        /* gdvirtual */ _get_data(): Array
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        get_depth(): number /*i64*/
        
        /** Returns `true` if the [Texture3D] has generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a [i]slice[/i] of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
        get_data(): Array
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
        create_placeholder(): Resource
    }
    class Texture3DEditorPlugin extends EditorPlugin {
    }
    /** Texture for 3D that is bound to a texture created on the [RenderingDevice]. */
    class Texture3DRD extends Texture3D {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    namespace TextureButton {
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** Texture-based button. Supports Pressed, Hover, Disabled and Focused states. */
    class TextureButton extends BaseButton {
        set_texture_normal(texture: Texture2D): void
        set_texture_pressed(texture: Texture2D): void
        set_texture_hover(texture: Texture2D): void
        set_texture_disabled(texture: Texture2D): void
        set_texture_focused(texture: Texture2D): void
        set_click_mask(mask: BitMap): void
        set_ignore_texture_size(ignore: boolean): void
        set_stretch_mode(mode: TextureButton.StretchMode): void
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        get_texture_normal(): Texture2D
        get_texture_pressed(): Texture2D
        get_texture_hover(): Texture2D
        get_texture_disabled(): Texture2D
        get_texture_focused(): Texture2D
        get_click_mask(): BitMap
        get_ignore_texture_size(): boolean
        get_stretch_mode(): TextureButton.StretchMode
        
        /** Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
        texture_normal: Texture2D
        
        /** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. */
        texture_pressed: Texture2D
        
        /** Texture to display when the mouse hovers the node. */
        texture_hover: Texture2D
        
        /** Texture to display when the node is disabled. See [member BaseButton.disabled]. */
        texture_disabled: Texture2D
        
        /** Texture to display when the node has mouse or keyboard focus. [member texture_focused] is displayed [i]over[/i] the base texture, so a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
        texture_focused: Texture2D
        
        /** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
        texture_click_mask: BitMap
        
        /** If `true`, the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        ignore_texture_size: bool
        
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        stretch_mode: number /*i64*/
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: bool
        
        /** If `true`, texture is flipped vertically. */
        flip_v: bool
    }
    /** Texture Array for Cubemaps that is bound to a texture created on the [RenderingDevice]. */
    class TextureCubemapArrayRD extends TextureLayeredRD {
    }
    /** Texture for Cubemap that is bound to a texture created on the [RenderingDevice]. */
    class TextureCubemapRD extends TextureLayeredRD {
    }
    class TextureEditorPlugin extends EditorPlugin {
    }
    namespace TextureLayered {
        enum LayeredType {
            /** Texture is a generic [Texture2DArray]. */
            LAYERED_TYPE_2D_ARRAY = 0,
            
            /** Texture is a [Cubemap], with each side in its own layer (6 in total). */
            LAYERED_TYPE_CUBEMAP = 1,
            
            /** Texture is a [CubemapArray], with each cubemap being made of 6 layers. */
            LAYERED_TYPE_CUBEMAP_ARRAY = 2,
        }
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format. */
    class TextureLayered extends Texture {
        /** Called when the [TextureLayered]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the layers' type in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layered_type(): number /*i64*/
        
        /** Called when the [TextureLayered]'s width queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [TextureLayered]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the number of layers in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layers(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [TextureLayered] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the data for a layer in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layer_data(layer_index: number /*i64*/): Image
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
        get_layered_type(): TextureLayered.LayeredType
        
        /** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the number of referenced [Image]s. */
        get_layers(): number /*i64*/
        
        /** Returns `true` if the layers have generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns an [Image] resource with the data from specified [param layer]. */
        get_layer_data(layer: number /*i64*/): Image
    }
    class TextureLayeredEditorPlugin extends EditorPlugin {
    }
    /** Abstract base class for layered texture RD types. */
    class TextureLayeredRD extends TextureLayered {
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        texture_rd_rid: RID
    }
    namespace TextureProgressBar {
        enum FillMode {
            /** The [member texture_progress] fills from left to right. */
            FILL_LEFT_TO_RIGHT = 0,
            
            /** The [member texture_progress] fills from right to left. */
            FILL_RIGHT_TO_LEFT = 1,
            
            /** The [member texture_progress] fills from top to bottom. */
            FILL_TOP_TO_BOTTOM = 2,
            
            /** The [member texture_progress] fills from bottom to top. */
            FILL_BOTTOM_TO_TOP = 3,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills clockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE = 4,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_COUNTER_CLOCKWISE = 5,
            
            /** The [member texture_progress] fills from the center, expanding both towards the left and the right. */
            FILL_BILINEAR_LEFT_AND_RIGHT = 6,
            
            /** The [member texture_progress] fills from the center, expanding both towards the top and the bottom. */
            FILL_BILINEAR_TOP_AND_BOTTOM = 7,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills radially from the center, expanding both clockwise and counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8,
        }
    }
    /** Texture-based progress bar. Useful for loading screens and life or stamina bars. */
    class TextureProgressBar extends Range {
        set_under_texture(tex: Texture2D): void
        get_under_texture(): Texture2D
        set_progress_texture(tex: Texture2D): void
        get_progress_texture(): Texture2D
        set_over_texture(tex: Texture2D): void
        get_over_texture(): Texture2D
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_tint_under(tint: Color): void
        get_tint_under(): Color
        set_tint_progress(tint: Color): void
        get_tint_progress(): Color
        set_tint_over(tint: Color): void
        get_tint_over(): Color
        set_texture_progress_offset(offset: Vector2): void
        get_texture_progress_offset(): Vector2
        set_radial_initial_angle(mode: number /*f64*/): void
        get_radial_initial_angle(): number /*f64*/
        set_radial_center_offset(mode: Vector2): void
        get_radial_center_offset(): Vector2
        set_fill_degrees(mode: number /*f64*/): void
        get_fill_degrees(): number /*f64*/
        
        /** Sets the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        set_stretch_margin(margin: Side, value: number /*i64*/): void
        
        /** Returns the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        get_stretch_margin(margin: Side): number /*i64*/
        set_nine_patch_stretch(stretch: boolean): void
        get_nine_patch_stretch(): boolean
        
        /** The fill direction. See [enum FillMode] for possible values. */
        fill_mode: number /*i64*/
        
        /** If `true`, Godot treats the bar's textures like in [NinePatchRect]. Use the `stretch_margin_*` properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will enable stretching. */
        nine_patch_stretch: boolean
        
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        texture_under: Texture2D
        
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        texture_over: Texture2D
        
        /** [Texture2D] that clips based on the node's `value` and [member fill_mode]. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.  
         *  The `value` property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].  
         */
        texture_progress: Texture2D
        
        /** The offset of [member texture_progress]. Useful for [member texture_over] and [member texture_under] with fancy borders, to avoid transparent margins in your progress texture. */
        texture_progress_offset: Vector2
        
        /** Multiplies the color of the bar's [member texture_under] texture. */
        tint_under: Color
        
        /** Multiplies the color of the bar's [member texture_over] texture. The effect is similar to [member CanvasItem.modulate], except it only affects this specific texture instead of the entire node. */
        tint_over: Color
        
        /** Multiplies the color of the bar's [member texture_progress] texture. */
        tint_progress: Color
        
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [member radial_fill_degrees]. */
        radial_initial_angle: number /*f64*/
        
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.  
         *  See [member Range.value], [member Range.max_value].  
         */
        radial_fill_degrees: number /*f64*/
        
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. */
        radial_center_offset: Vector2
    }
    namespace TextureRect {
        enum ExpandMode {
            /** The minimum size will be equal to texture size, i.e. [TextureRect] can't be smaller than the texture. */
            EXPAND_KEEP_SIZE = 0,
            
            /** The size of the texture won't be considered for minimum size calculation, so the [TextureRect] can be shrunk down past the texture size. */
            EXPAND_IGNORE_SIZE = 1,
            
            /** The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [HBoxContainer]. */
            EXPAND_FIT_WIDTH = 2,
            
            /** Same as [constant EXPAND_FIT_WIDTH], but keeps texture's aspect ratio. */
            EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
            
            /** The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [VBoxContainer]. */
            EXPAND_FIT_HEIGHT = 4,
            
            /** Same as [constant EXPAND_FIT_HEIGHT], but keeps texture's aspect ratio. */
            EXPAND_FIT_HEIGHT_PROPORTIONAL = 5,
        }
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** A control that displays a texture. */
    class TextureRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_expand_mode(expand_mode: TextureRect.ExpandMode): void
        get_expand_mode(): TextureRect.ExpandMode
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        set_stretch_mode(stretch_mode: TextureRect.StretchMode): void
        get_stretch_mode(): TextureRect.StretchMode
        
        /** The node's [Texture2D] resource. */
        texture: Texture2D
        
        /** Defines how minimum size is determined based on the texture's size. See [enum ExpandMode] for options.  
         *      
         *  **Note:** Using [constant EXPAND_FIT_WIDTH], [constant EXPAND_FIT_WIDTH_PROPORTIONAL], [constant EXPAND_FIT_HEIGHT] or [constant EXPAND_FIT_HEIGHT_PROPORTIONAL] may result in unstable behavior in some containers. This functionality is being re-evaluated and will change in the future.  
         */
        expand_mode: number /*i64*/
        
        /** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
        stretch_mode: number /*i64*/
        
        /** If `true`, texture is flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, texture is flipped vertically. */
        flip_v: boolean
    }
    class TextureRegionEditor extends AcceptDialog {
        _update_rect(): void
    }
    class TextureRegionEditorPlugin extends EditorPlugin {
    }
    namespace Theme {
        enum DataType {
            /** Theme's [Color] item type. */
            DATA_TYPE_COLOR = 0,
            
            /** Theme's constant item type. */
            DATA_TYPE_CONSTANT = 1,
            
            /** Theme's [Font] item type. */
            DATA_TYPE_FONT = 2,
            
            /** Theme's font size item type. */
            DATA_TYPE_FONT_SIZE = 3,
            
            /** Theme's icon [Texture2D] item type. */
            DATA_TYPE_ICON = 4,
            
            /** Theme's [StyleBox] item type. */
            DATA_TYPE_STYLEBOX = 5,
            
            /** Maximum value for the DataType enum. */
            DATA_TYPE_MAX = 6,
        }
    }
    /** A resource used for styling/skinning [Control]s and [Window]s. */
    class Theme extends Resource {
        /** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
        set_icon(name: StringName, theme_type: StringName, texture: Texture2D): void
        
        /** Returns the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.  
         */
        get_icon(name: StringName, theme_type: StringName): Texture2D
        
        /** Returns `true` if the icon property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_icon] to define it.  
         */
        has_icon(name: StringName, theme_type: StringName): boolean
        
        /** Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.  
         */
        rename_icon(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_icon] to check for existence.  
         */
        clear_icon(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
        get_icon_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_icon_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
        set_stylebox(name: StringName, theme_type: StringName, texture: StyleBox): void
        
        /** Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.  
         */
        get_stylebox(name: StringName, theme_type: StringName): StyleBox
        
        /** Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.  
         */
        has_stylebox(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.  
         */
        rename_stylebox(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_stylebox] to check for existence.  
         */
        clear_stylebox(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
        get_stylebox_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_stylebox_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
        set_font(name: StringName, theme_type: StringName, font: Font): void
        
        /** Returns the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.  
         *  Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).  
         */
        get_font(name: StringName, theme_type: StringName): Font
        
        /** Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).  
         *  Returns `false` if neither exist. Use [method set_font] to define the property.  
         */
        has_font(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.  
         */
        rename_font(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font] to check for existence.  
         */
        clear_font(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
        get_font_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_type_list(): PackedStringArray
        
        /** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
        set_font_size(name: StringName, theme_type: StringName, font_size: number /*i64*/): void
        
        /** Returns the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.  
         *  Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).  
         */
        get_font_size(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).  
         *  Returns `false` if neither exist. Use [method set_font_size] to define the property.  
         */
        has_font_size(name: StringName, theme_type: StringName): boolean
        
        /** Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.  
         */
        rename_font_size(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font_size] to check for existence.  
         */
        clear_font_size(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
        get_font_size_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_size_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
        set_color(name: StringName, theme_type: StringName, color: Color): void
        
        /** Returns the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.  
         */
        get_color(name: StringName, theme_type: StringName): Color
        
        /** Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_color] to define it.  
         */
        has_color(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.  
         */
        rename_color(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_color] to check for existence.  
         */
        clear_color(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
        get_color_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_color_type_list(): PackedStringArray
        
        /** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
        set_constant(name: StringName, theme_type: StringName, constant: number /*i64*/): void
        
        /** Returns the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.  
         */
        get_constant(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the constant property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_constant] to define it.  
         */
        has_constant(name: StringName, theme_type: StringName): boolean
        
        /** Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.  
         */
        rename_constant(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_constant] to check for existence.  
         */
        clear_constant(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
        get_constant_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_constant_type_list(): PackedStringArray
        set_default_base_scale(base_scale: number /*f64*/): void
        get_default_base_scale(): number /*f64*/
        
        /** Returns `true` if [member default_base_scale] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.  
         */
        has_default_base_scale(): boolean
        set_default_font(font: Font): void
        get_default_font(): Font
        
        /** Returns `true` if [member default_font] has a valid value.  
         *  Returns `false` if it doesn't.  
         */
        has_default_font(): boolean
        set_default_font_size(font_size: number /*i64*/): void
        get_default_font_size(): number /*i64*/
        
        /** Returns `true` if [member default_font_size] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.  
         */
        has_default_font_size(): boolean
        
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.  
         *  Fails if the [param value] type is not accepted by [param data_type].  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        set_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName, value: any): void
        
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): any
        
        /** Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        has_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): boolean
        
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        rename_theme_item(data_type: Theme.DataType, old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        clear_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_list(data_type: Theme.DataType, theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_type_list(data_type: Theme.DataType): PackedStringArray
        
        /** Marks [param theme_type] as a variation of [param base_type].  
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.  
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.  
         *      
         *  **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].  
         */
        set_type_variation(theme_type: StringName, base_type: StringName): void
        
        /** Returns `true` if [param theme_type] is marked as a variation of [param base_type]. */
        is_type_variation(theme_type: StringName, base_type: StringName): boolean
        
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clear_type_variation(theme_type: StringName): void
        
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        get_type_variation_base(theme_type: StringName): StringName
        
        /** Returns a list of all type variations for the given [param base_type]. */
        get_type_variation_list(base_type: StringName): PackedStringArray
        
        /** Adds an empty theme type for every valid data type.  
         *      
         *  **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.  
         */
        add_type(theme_type: StringName): void
        
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        remove_type(theme_type: StringName): void
        
        /** Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type. */
        get_type_list(): PackedStringArray
        
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.  
         *      
         *  **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.  
         */
        merge_with(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).  
         *  Use [method has_default_base_scale] to check if this value is valid.  
         */
        default_base_scale: number /*f64*/
        
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).  
         *  Use [method has_default_font] to check if this value is valid.  
         */
        default_font: Font
        
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).  
         *  Values below `0` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.  
         */
        default_font_size: number /*i64*/
    }
    class ThemeContext extends Object {
        readonly changed: Signal //  => void
    }
    class ThemeEditor extends VBoxContainer {
    }
    class ThemeEditorPlugin extends EditorPlugin {
    }
    class ThemeEditorPreview extends VBoxContainer {
        readonly control_picked: Signal // class_name: string => void
    }
    class ThemeItemEditorDialog extends AcceptDialog {
        _update_edit_types(): void
        _update_edit_item_tree(_unnamed_arg0: string): void
    }
    class ThemeItemImportTree extends VBoxContainer {
        readonly items_imported: Signal //  => void
    }
    class ThemeTypeDialog extends ConfirmationDialog {
        readonly type_selected: Signal // type_name: string => void
    }
    class ThemeTypeEditor extends MarginContainer {
        _update_type_items(): void
        _pin_leading_stylebox(_unnamed_arg0: string, _unnamed_arg1: StyleBox): void
        _unpin_leading_stylebox(): void
        _change_pinned_stylebox(): void
    }
    namespace Thread {
        enum Priority {
            /** A thread running with lower priority than normally. */
            PRIORITY_LOW = 0,
            
            /** A thread with a standard priority. */
            PRIORITY_NORMAL = 1,
            
            /** A thread running with higher priority than normally. */
            PRIORITY_HIGH = 2,
        }
    }
    /** A unit of execution in a process. */
    class Thread extends RefCounted {
        /** Starts a new [Thread] that calls [param callable].  
         *  If the method takes some arguments, you can pass them using [method Callable.bind].  
         *  The [param priority] of the [Thread] can be changed by passing a value from the [enum Priority] enum.  
         *  Returns [constant OK] on success, or [constant ERR_CANT_CREATE] on failure.  
         */
        start(callable: Callable, priority: Thread.Priority = 1): GodotError
        
        /** Returns the current [Thread]'s ID, uniquely identifying it among all threads. If the [Thread] has not started running or if [method wait_to_finish] has been called, this returns an empty string. */
        get_id(): string
        
        /** Returns `true` if this [Thread] has been started. Once started, this will return `true` until it is joined using [method wait_to_finish]. For checking if a [Thread] is still executing its task, use [method is_alive]. */
        is_started(): boolean
        
        /** Returns `true` if this [Thread] is currently running the provided function. This is useful for determining if [method wait_to_finish] can be called without blocking the calling thread.  
         *  To check if a [Thread] is joinable, use [method is_started].  
         */
        is_alive(): boolean
        
        /** Joins the [Thread] and waits for it to finish. Returns the output of the [Callable] passed to [method start].  
         *  Should either be used when you want to retrieve the value returned from the method called by the [Thread] or before freeing the instance that contains the [Thread].  
         *  To determine if this can be called without blocking the calling thread, check if [method is_alive] is `false`.  
         */
        wait_to_finish(): any
        
        /** Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [Node]) should happen **on the current thread**.  
         *  The default, for every thread, is that they are enabled (as if called with [param enabled] being `true`).  
         *  Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.  
         *  Because of that, there may be cases where the user may want to disable them ([param enabled] being `false`) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [Mutex]) for those objects that are otherwise protected by the engine.  
         *      
         *  **Note:** This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.  
         *      
         *  **Note:** This is useful for scripts running on either arbitrary [Thread] objects or tasks submitted to the [WorkerThreadPool]. It doesn't apply to code running during [Node] group processing, where the checks will be always performed.  
         *      
         *  **Note:** Even in the case of having disabled the checks in a [WorkerThreadPool] task, there's no need to re-enable them at the end. The engine will do so.  
         */
        static set_thread_safety_checks_enabled(enabled: boolean): void
    }
    class TileAtlasView extends Control {
        readonly transform_changed: Signal // zoom: number /*f64*/, scroll: Vector2 => void
    }
    /** Settings for a single tile in a [TileSet]. */
    class TileData extends Object {
        set_flip_h(flip_h: boolean): void
        get_flip_h(): boolean
        set_flip_v(flip_v: boolean): void
        get_flip_v(): boolean
        set_transpose(transpose: boolean): void
        get_transpose(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_texture_origin(texture_origin: Vector2i): void
        get_texture_origin(): Vector2i
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_z_index(z_index: number /*i64*/): void
        get_z_index(): number /*i64*/
        set_y_sort_origin(y_sort_origin: number /*i64*/): void
        get_y_sort_origin(): number /*i64*/
        
        /** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
        set_occluder(layer_id: number /*i64*/, occluder_polygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id]. */
        get_occluder(layer_id: number /*i64*/): OccluderPolygon2D
        
        /** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
        set_constant_linear_velocity(layer_id: number /*i64*/, velocity: Vector2): void
        
        /** Returns the constant linear velocity applied to objects colliding with this tile. */
        get_constant_linear_velocity(layer_id: number /*i64*/): Vector2
        
        /** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
        set_constant_angular_velocity(layer_id: number /*i64*/, velocity: number /*f64*/): void
        
        /** Returns the constant angular velocity applied to objects colliding with this tile. */
        get_constant_angular_velocity(layer_id: number /*i64*/): number /*f64*/
        
        /** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
        set_collision_polygons_count(layer_id: number /*i64*/, polygons_count: number /*i64*/): void
        
        /** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
        get_collision_polygons_count(layer_id: number /*i64*/): number /*i64*/
        
        /** Adds a collision polygon to the tile on the given TileSet physics layer. */
        add_collision_polygon(layer_id: number /*i64*/): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        remove_collision_polygon(layer_id: number /*i64*/, polygon_index: number /*i64*/): void
        
        /** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/, polygon: PackedVector2Array): void
        
        /** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/): PackedVector2Array
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way: boolean): void
        
        /** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        is_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/): boolean
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way_margin: number /*f64*/): void
        
        /** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/): number /*f64*/
        set_terrain_set(terrain_set: number /*i64*/): void
        get_terrain_set(): number /*i64*/
        set_terrain(terrain: number /*i64*/): void
        get_terrain(): number /*i64*/
        
        /** Sets the tile's terrain bit for the given [param peering_bit] direction. */
        set_terrain_peering_bit(peering_bit: TileSet.CellNeighbor, terrain: number /*i64*/): void
        
        /** Returns the tile's terrain bit for the given [param peering_bit] direction. */
        get_terrain_peering_bit(peering_bit: TileSet.CellNeighbor): number /*i64*/
        
        /** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
        set_navigation_polygon(layer_id: number /*i64*/, navigation_polygon: NavigationPolygon): void
        
        /** Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id]. */
        get_navigation_polygon(layer_id: number /*i64*/): NavigationPolygon
        set_probability(probability: number /*f64*/): void
        get_probability(): number /*f64*/
        
        /** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
        set_custom_data(layer_name: string, value: any): void
        
        /** Returns the custom data value for custom data layer named [param layer_name]. */
        get_custom_data(layer_name: string): any
        
        /** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
        set_custom_data_by_layer_id(layer_id: number /*i64*/, value: any): void
        
        /** Returns the custom data value for custom data layer with index [param layer_id]. */
        get_custom_data_by_layer_id(layer_id: number /*i64*/): any
        
        /** If `true`, the tile will have its texture flipped horizontally. */
        flip_h: boolean
        
        /** If `true`, the tile will have its texture flipped vertically. */
        flip_v: boolean
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        transpose: boolean
        
        /** Offsets the position of where the tile is drawn. */
        texture_origin: Vector2i
        
        /** Color modulation of the tile. */
        modulate: Color
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        material: CanvasItemMaterial | ShaderMaterial
        
        /** Ordering index of this tile, relative to [TileMap]. */
        z_index: number /*i64*/
        
        /** Vertical point of the tile used for determining y-sorted order. */
        y_sort_origin: number /*i64*/
        
        /** ID of the terrain set that the tile uses. */
        terrain_set: number /*i64*/
        
        /** ID of the terrain from the terrain set that the tile uses. */
        terrain: number /*i64*/
        
        /** Relative probability of this tile being selected when drawing a pattern of random tiles. */
        probability: number /*f64*/
        
        /** Emitted when any of the properties are changed. */
        readonly changed: Signal //  => void
    }
    namespace TileMap {
        enum VisibilityMode {
            /** Use the debug settings to determine visibility. */
            VISIBILITY_MODE_DEFAULT = 0,
            
            /** Always hide. */
            VISIBILITY_MODE_FORCE_HIDE = 2,
            
            /** Always show. */
            VISIBILITY_MODE_FORCE_SHOW = 1,
        }
    }
    /** Node for 2D tile-based maps. */
    class TileMap extends Node2D {
        /** Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.  
         *  **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _use_tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i): boolean
        
        /** Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i, tile_data: TileData): void
        
        /** See [method set_layer_navigation_map]. */
        set_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** See [method get_layer_navigation_map]. */
        get_navigation_map(layer: number /*i64*/): RID
        
        /** [i]Deprecated.[/i] See [method notify_runtime_tile_data_update] and [method update_internals]. */
        force_update(layer: number /*i64*/ = -1): void
        set_tileset(tileset: TileSet): void
        get_tileset(): TileSet
        set_rendering_quadrant_size(size: number /*i64*/): void
        get_rendering_quadrant_size(): number /*i64*/
        
        /** Returns the number of layers in the TileMap. */
        get_layers_count(): number /*i64*/
        
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with `-1` adding the layer at the end of the array. */
        add_layer(to_position: number /*i64*/): void
        
        /** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
        move_layer(layer: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the layer at index [param layer]. */
        remove_layer(layer: number /*i64*/): void
        
        /** Sets a layer's name. This is mostly useful in the editor.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_name(layer: number /*i64*/, name: string): void
        
        /** Returns a TileMap layer's name.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_name(layer: number /*i64*/): string
        
        /** Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc...).  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer is enabled.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_modulate(layer: number /*i64*/, modulate: Color): void
        
        /** Returns a TileMap layer's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_modulate(layer: number /*i64*/): Color
        
        /** Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.  
         *  Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_enabled(layer: number /*i64*/, y_sort_enabled: boolean): void
        
        /** Returns if a layer Y-sorts its tiles.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_y_sort_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.  
         *  This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_origin(layer: number /*i64*/, y_sort_origin: number /*i64*/): void
        
        /** Returns a TileMap layer's Y sort origin.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_y_sort_origin(layer: number /*i64*/): number /*i64*/
        
        /** Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_z_index(layer: number /*i64*/, z_index: number /*i64*/): void
        
        /** Returns a TileMap layer's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_z_index(layer: number /*i64*/): number /*i64*/
        
        /** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
        set_layer_navigation_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer's built-in navigation regions generation is enabled. */
        is_layer_navigation_enabled(layer: number /*i64*/): boolean
        
        /** Assigns a [NavigationServer2D] navigation map [RID] to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** Returns the [NavigationServer2D] navigation map [RID] currently assigned to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_navigation_map(layer: number /*i64*/): RID
        set_collision_animatable(enabled: boolean): void
        is_collision_animatable(): boolean
        set_collision_visibility_mode(collision_visibility_mode: TileMap.VisibilityMode): void
        get_collision_visibility_mode(): TileMap.VisibilityMode
        set_navigation_visibility_mode(navigation_visibility_mode: TileMap.VisibilityMode): void
        get_navigation_visibility_mode(): TileMap.VisibilityMode
        
        /** Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_cell(layer: number /*i64*/, coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = 0): void
        
        /** Erases the cell on layer [param layer] at coordinates [param coords].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        erase_cell(layer: number /*i64*/, coords: Vector2i): void
        
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_source_id(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_atlas_coords(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): Vector2i
        
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_alternative_tile(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *    
         */
        get_cell_tile_data(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): TileData
        
        /** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_coords_for_body_rid(body: RID): Vector2i
        
        /** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_layer_for_body_rid(body: RID): number /*i64*/
        
        /** Creates a new [TileMapPattern] from the given layer and set of cells.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_pattern(layer: number /*i64*/, coords_array: Array): TileMapPattern
        
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        map_pattern(position_in_tilemap: Vector2i, coords_in_pattern: Vector2i, pattern: TileMapPattern): Vector2i
        
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_pattern(layer: number /*i64*/, position: Vector2i, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_connect(layer: number /*i64*/, cells: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_path(layer: number /*i64*/, path: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Clears cells that do not exist in the tileset. */
        fix_invalid_tiles(): void
        
        /** Clears all cells on the given layer.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        clear_layer(layer: number /*i64*/): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        update_internals(): void
        
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.  
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notify_runtime_tile_data_update(layer: number /*i64*/ = -1): void
        
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        get_surrounding_cells(coords: Vector2i): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells(layer: number /*i64*/): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells_by_id(layer: number /*i64*/, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): Array
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        get_used_rect(): Rect2i
        
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        map_to_local(map_position: Vector2i): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector2): Vector2i
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        get_neighbor_cell(coords: Vector2i, neighbor: TileSet.CellNeighbor): Vector2i
        
        /** The assigned [TileSet]. */
        tile_set: TileSet
        
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quandrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on Y-sorted layers, as tiles are be grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.  
         */
        rendering_quadrant_size: number /*i64*/
        
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.  
         *      
         *  **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.  
         */
        collision_animatable: boolean
        
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        collision_visibility_mode: number /*i64*/
        
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        navigation_visibility_mode: number /*i64*/
        
        /** Emitted when the [TileSet] of this TileMap changes. */
        readonly changed: Signal //  => void
    }
    class TileMapEditor extends VBoxContainer {
    }
    class TileMapEditorPlugin extends EditorPlugin {
    }
    class TileMapEditorTerrainsPlugin extends Object {
    }
    class TileMapEditorTilesPlugin extends Object {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _set_tile_map_selection(selection: Array): void
        _get_tile_map_selection(): Array
    }
    /** Holds a pattern to be copied from or pasted into [TileMap]s. */
    class TileMapPattern extends Resource {
        /** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
        set_cell(coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): void
        
        /** Returns whether the pattern has a tile at the given coordinates. */
        has_cell(coords: Vector2i): boolean
        
        /** Remove the cell at the given coordinates. */
        remove_cell(coords: Vector2i, update_size: boolean): void
        
        /** Returns the tile source ID of the cell at [param coords]. */
        get_cell_source_id(coords: Vector2i): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell at [param coords]. */
        get_cell_atlas_coords(coords: Vector2i): Vector2i
        
        /** Returns the tile alternative ID of the cell at [param coords]. */
        get_cell_alternative_tile(coords: Vector2i): number /*i64*/
        
        /** Returns the list of used cell coordinates in the pattern. */
        get_used_cells(): Array
        
        /** Returns the size, in cells, of the pattern. */
        get_size(): Vector2i
        
        /** Sets the size of the pattern. */
        set_size(size: Vector2i): void
        
        /** Returns whether the pattern is empty or not. */
        is_empty(): boolean
    }
    class TileProxiesManagerDialog extends ConfirmationDialog {
        _update_lists(): void
        _unhandled_key_input(_unnamed_arg0: InputEvent): void
    }
    namespace TileSet {
        enum TileShape {
            /** Rectangular tile shape. */
            TILE_SHAPE_SQUARE = 0,
            
            /** Diamond tile shape (for isometric look).  
             *      
             *  **Note:** Isometric [TileSet] works best if [TileMap] and all its layers have Y-sort enabled.  
             */
            TILE_SHAPE_ISOMETRIC = 1,
            
            /** Rectangular tile shape with one row/column out of two offset by half a tile. */
            TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
            
            /** Hexagonal tile shape. */
            TILE_SHAPE_HEXAGON = 3,
        }
        enum TileLayout {
            /** Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis. */
            TILE_LAYOUT_STACKED = 0,
            
            /** Same as [constant TILE_LAYOUT_STACKED], but the first half-offset is negative instead of positive. */
            TILE_LAYOUT_STACKED_OFFSET = 1,
            
            /** Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right. */
            TILE_LAYOUT_STAIRS_RIGHT = 2,
            
            /** Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right. */
            TILE_LAYOUT_STAIRS_DOWN = 3,
            
            /** Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right. */
            TILE_LAYOUT_DIAMOND_RIGHT = 4,
            
            /** Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left. */
            TILE_LAYOUT_DIAMOND_DOWN = 5,
        }
        enum TileOffsetAxis {
            /** Horizontal half-offset. */
            TILE_OFFSET_AXIS_HORIZONTAL = 0,
            
            /** Vertical half-offset. */
            TILE_OFFSET_AXIS_VERTICAL = 1,
        }
        enum CellNeighbor {
            /** Neighbor on the right side. */
            CELL_NEIGHBOR_RIGHT_SIDE = 0,
            
            /** Neighbor in the right corner. */
            CELL_NEIGHBOR_RIGHT_CORNER = 1,
            
            /** Neighbor on the bottom right side. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
            
            /** Neighbor in the bottom right corner. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
            
            /** Neighbor on the bottom side. */
            CELL_NEIGHBOR_BOTTOM_SIDE = 4,
            
            /** Neighbor in the bottom corner. */
            CELL_NEIGHBOR_BOTTOM_CORNER = 5,
            
            /** Neighbor on the bottom left side. */
            CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
            
            /** Neighbor in the bottom left corner. */
            CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
            
            /** Neighbor on the left side. */
            CELL_NEIGHBOR_LEFT_SIDE = 8,
            
            /** Neighbor in the left corner. */
            CELL_NEIGHBOR_LEFT_CORNER = 9,
            
            /** Neighbor on the top left side. */
            CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
            
            /** Neighbor in the top left corner. */
            CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
            
            /** Neighbor on the top side. */
            CELL_NEIGHBOR_TOP_SIDE = 12,
            
            /** Neighbor in the top corner. */
            CELL_NEIGHBOR_TOP_CORNER = 13,
            
            /** Neighbor on the top right side. */
            CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
            
            /** Neighbor in the top right corner. */
            CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15,
        }
        enum TerrainMode {
            /** Requires both corners and side to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
            
            /** Requires corners to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS = 1,
            
            /** Requires sides to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_SIDES = 2,
        }
    }
    /** Tile library for tilemaps. */
    class TileSet extends Resource {
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        get_next_source_id(): number /*i64*/
        
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.  
         *  The function returns the added source ID or -1 if the source could not be added.  
         *  **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.  
         */
        add_source(source: TileSetSource, atlas_source_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Removes the source with the given source ID. */
        remove_source(source_id: number /*i64*/): void
        
        /** Changes a source's ID. */
        set_source_id(source_id: number /*i64*/, new_source_id: number /*i64*/): void
        
        /** Returns the number of [TileSetSource] in this TileSet. */
        get_source_count(): number /*i64*/
        
        /** Returns the source ID for source with index [param index]. */
        get_source_id(index: number /*i64*/): number /*i64*/
        
        /** Returns if this TileSet has a source for the given source ID. */
        has_source(source_id: number /*i64*/): boolean
        
        /** Returns the [TileSetSource] with ID [param source_id]. */
        get_source(source_id: number /*i64*/): TileSetSource
        set_tile_shape(shape: TileSet.TileShape): void
        get_tile_shape(): TileSet.TileShape
        set_tile_layout(layout: TileSet.TileLayout): void
        get_tile_layout(): TileSet.TileLayout
        set_tile_offset_axis(alignment: TileSet.TileOffsetAxis): void
        get_tile_offset_axis(): TileSet.TileOffsetAxis
        set_tile_size(size: Vector2i): void
        get_tile_size(): Vector2i
        set_uv_clipping(uv_clipping: boolean): void
        is_uv_clipping(): boolean
        
        /** Returns the occlusion layers count. */
        get_occlusion_layers_count(): number /*i64*/
        
        /** Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Occlusion layers allow assigning occlusion polygons to atlas tiles.  
         */
        add_occlusion_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_occlusion_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_occlusion_layer(layer_index: number /*i64*/): void
        
        /** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_light_mask(layer_index: number /*i64*/, light_mask: number /*i64*/): void
        
        /** Returns the light mask of the occlusion layer. */
        get_occlusion_layer_light_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_sdf_collision(layer_index: number /*i64*/, sdf_collision: boolean): void
        
        /** Returns if the occluders from this layer use `sdf_collision`. */
        get_occlusion_layer_sdf_collision(layer_index: number /*i64*/): boolean
        
        /** Returns the physics layers count. */
        get_physics_layers_count(): number /*i64*/
        
        /** Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Physics layers allow assigning collision polygons to atlas tiles.  
         */
        add_physics_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_physics_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_physics_layer(layer_index: number /*i64*/): void
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_layer(layer_index: number /*i64*/, layer: number /*i64*/): void
        
        /** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
        get_physics_layer_collision_layer(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_mask(layer_index: number /*i64*/, mask: number /*i64*/): void
        
        /** Returns the collision mask of bodies on the given TileSet's physics layer. */
        get_physics_layer_collision_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics material for bodies in the given TileSet physics layer. */
        set_physics_layer_physics_material(layer_index: number /*i64*/, physics_material: PhysicsMaterial): void
        
        /** Returns the physics material of bodies on the given TileSet's physics layer. */
        get_physics_layer_physics_material(layer_index: number /*i64*/): PhysicsMaterial
        
        /** Returns the terrain sets count. */
        get_terrain_sets_count(): number /*i64*/
        
        /** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain_set(to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain_set(terrain_set: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain_set(terrain_set: number /*i64*/): void
        
        /** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
        set_terrain_set_mode(terrain_set: number /*i64*/, mode: TileSet.TerrainMode): void
        
        /** Returns a terrain set mode. */
        get_terrain_set_mode(terrain_set: number /*i64*/): TileSet.TerrainMode
        
        /** Returns the number of terrains in the given terrain set. */
        get_terrains_count(terrain_set: number /*i64*/): number /*i64*/
        
        /** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain(terrain_set: number /*i64*/, to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/): void
        
        /** Sets a terrain's name. */
        set_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/, name: string): void
        
        /** Returns a terrain's name. */
        get_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/): string
        
        /** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
        set_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/, color: Color): void
        
        /** Returns a terrain's color. */
        get_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/): Color
        
        /** Returns the navigation layers count. */
        get_navigation_layers_count(): number /*i64*/
        
        /** Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Navigation layers allow assigning a navigable area to atlas tiles.  
         */
        add_navigation_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_navigation_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_navigation_layer(layer_index: number /*i64*/): void
        
        /** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
        set_navigation_layer_layers(layer_index: number /*i64*/, layers: number /*i64*/): void
        
        /** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
        get_navigation_layer_layers(layer_index: number /*i64*/): number /*i64*/
        
        /** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
        set_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
        get_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/): boolean
        
        /** Returns the custom data layers count. */
        get_custom_data_layers_count(): number /*i64*/
        
        /** Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Custom data layers allow assigning custom properties to atlas tiles.  
         */
        add_custom_data_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_custom_data_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_custom_data_layer(layer_index: number /*i64*/): void
        
        /** Returns the index of the custom data layer identified by the given name. */
        get_custom_data_layer_by_name(layer_name: string): number /*i64*/
        
        /** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
        set_custom_data_layer_name(layer_index: number /*i64*/, layer_name: string): void
        
        /** Returns the name of the custom data layer identified by the given index. */
        get_custom_data_layer_name(layer_index: number /*i64*/): string
        
        /** Sets the type of the custom data layer identified by the given index. */
        set_custom_data_layer_type(layer_index: number /*i64*/, layer_type: Variant.Type): void
        
        /** Returns the type of the custom data layer identified by the given index. */
        get_custom_data_layer_type(layer_index: number /*i64*/): Variant.Type
        
        /** Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.  
         *  This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_source_level_tile_proxy(source_from: number /*i64*/, source_to: number /*i64*/): void
        
        /** Returns the source-level proxy for the given source identifier.  
         *  If the TileSet has no proxy for the given identifier, returns -1.  
         */
        get_source_level_tile_proxy(source_from: number /*i64*/): number /*i64*/
        
        /** Returns if there is a source-level proxy for the given source ID. */
        has_source_level_tile_proxy(source_from: number /*i64*/): boolean
        
        /** Removes a source-level tile proxy. */
        remove_source_level_tile_proxy(source_from: number /*i64*/): void
        
        /** Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_coords_level_tile_proxy(p_source_from: number /*i64*/, coords_from: Vector2i, source_to: number /*i64*/, coords_to: Vector2i): void
        
        /** Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): Array
        
        /** Returns if there is a coodinates-level proxy for the given identifiers. */
        has_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): boolean
        
        /** Removes a coordinates-level proxy for the given identifiers. */
        remove_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): void
        
        /** Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/, source_to: number /*i64*/, coords_to: Vector2i, alternative_to: number /*i64*/): void
        
        /** Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Returns if there is an alternative-level proxy for the given identifiers. */
        has_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): boolean
        
        /** Removes an alternative-level proxy for the given identifiers. */
        remove_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): void
        
        /** According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.  
         *  This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.  
         *  If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.  
         */
        map_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Clears tile proxies pointing to invalid tiles. */
        cleanup_invalid_tile_proxies(): void
        
        /** Clears all tile proxies. */
        clear_tile_proxies(): void
        
        /** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
        add_pattern(pattern: TileMapPattern, index: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the [TileMapPattern] at the given [param index]. */
        get_pattern(index: number /*i64*/ = -1): TileMapPattern
        
        /** Remove the [TileMapPattern] at the given index. */
        remove_pattern(index: number /*i64*/): void
        
        /** Returns the number of [TileMapPattern] this tile set handles. */
        get_patterns_count(): number /*i64*/
        
        /** The tile shape. */
        tile_shape: number /*i64*/
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid. */
        tile_layout: number /*i64*/
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
        tile_offset_axis: number /*i64*/
        
        /** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
        tile_size: Vector2i
        
        /** Enables/Disable uv clipping when rendering the tiles. */
        uv_clipping: boolean
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            /** Tile animations start at same time, looking identical. */
            TILE_ANIMATION_MODE_DEFAULT = 0,
            
            /** Tile animations start at random times, looking varied. */
            TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
            
            /** Represents the size of the [enum TileAnimationMode] enum. */
            TILE_ANIMATION_MODE_MAX = 2,
        }
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource. */
    class TileSetAtlasSource extends TileSetSource {
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMap] to flip placed tiles by altering their alternative IDs.  
         *    
         */
        static readonly TRANSFORM_FLIP_H = 4096
        
        /** Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_FLIP_V = 8192
        
        /** Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_TRANSPOSE = 16384
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_margins(margins: Vector2i): void
        get_margins(): Vector2i
        set_separation(separation: Vector2i): void
        get_separation(): Vector2i
        set_texture_region_size(texture_region_size: Vector2i): void
        get_texture_region_size(): Vector2i
        set_use_texture_padding(use_texture_padding: boolean): void
        get_use_texture_padding(): boolean
        
        /** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
        create_tile(atlas_coords: Vector2i, size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Remove a tile and its alternative at coordinates [param atlas_coords]. */
        remove_tile(atlas_coords: Vector2i): void
        
        /** Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.  
         *  If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.  
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].  
         */
        move_tile_in_atlas(atlas_coords: Vector2i, new_atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, new_size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        get_tile_size_in_atlas(atlas_coords: Vector2i): Vector2i
        
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        has_room_for_tile(atlas_coords: Vector2i, size: Vector2i, animation_columns: number /*i64*/, animation_separation: Vector2i, frames_count: number /*i64*/, ignored_tile: Vector2i = <any> {} /*compound.type from 6([object Object])*/): boolean
        
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        get_tiles_to_be_removed_on_change(texture: Texture2D, margins: Vector2i, separation: Vector2i, texture_region_size: Vector2i): PackedVector2Array
        
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise. */
        get_tile_at_coords(atlas_coords: Vector2i): Vector2i
        
        /** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
        has_tiles_outside_texture(): boolean
        
        /** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
        clear_tiles_outside_texture(): void
        
        /** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
        set_tile_animation_columns(atlas_coords: Vector2i, frame_columns: number /*i64*/): void
        
        /** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
        get_tile_animation_columns(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_separation(atlas_coords: Vector2i, separation: Vector2i): void
        
        /** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
        get_tile_animation_separation(atlas_coords: Vector2i): Vector2i
        
        /** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_speed(atlas_coords: Vector2i, speed: number /*f64*/): void
        
        /** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
        get_tile_animation_speed(atlas_coords: Vector2i): number /*f64*/
        
        /** Sets the [enum TileAnimationMode] of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
        set_tile_animation_mode(atlas_coords: Vector2i, mode: TileSetAtlasSource.TileAnimationMode): void
        
        /** Returns the [enum TileAnimationMode] of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
        get_tile_animation_mode(atlas_coords: Vector2i): TileSetAtlasSource.TileAnimationMode
        
        /** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_frames_count(atlas_coords: Vector2i, frames_count: number /*i64*/): void
        
        /** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frames_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        set_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/, duration: number /*f64*/): void
        
        /** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/): number /*f64*/
        
        /** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
        get_tile_animation_total_duration(atlas_coords: Vector2i): number /*f64*/
        
        /** Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.  
         *  Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].  
         */
        create_alternative_tile(atlas_coords: Vector2i, alternative_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Remove a tile's alternative with alternative ID [param alternative_tile].  
         *  Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.  
         */
        remove_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): void
        
        /** Change a tile's alternative ID from [param alternative_tile] to [param new_id].  
         *  Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.  
         */
        set_alternative_tile_id(atlas_coords: Vector2i, alternative_tile: number /*i64*/, new_id: number /*i64*/): void
        
        /** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
        get_next_alternative_tile_id(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
        get_tile_data(atlas_coords: Vector2i, alternative_tile: number /*i64*/): TileData
        
        /** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
        get_atlas_grid_size(): Vector2i
        
        /** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
        get_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/ = 0): Rect2i
        _update_padded_texture(): void
        
        /** If [member use_texture_padding] is `false`, returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        get_runtime_texture(): Texture2D
        
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].  
         *      
         *  **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].  
         */
        get_runtime_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/): Rect2i
        
        /** The atlas texture. */
        texture: Texture2D
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        margins: Vector2i
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        separation: Vector2i
        
        /** The base tile size in the texture (in pixel). This size must be bigger than the TileSet's `tile_size` value. */
        texture_region_size: Vector2i
        
        /** If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.  
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.  
         */
        use_texture_padding: boolean
    }
    class TileSetAtlasSourceEditor extends HSplitContainer {
        _set_selection_from_array(_unnamed_arg0: Array): void
        _check_outside_tiles(): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    class TileSetAtlasSourceProxyObject extends Object {
        readonly changed: Signal // what: string => void
    }
    class TileSetEditor extends Control {
    }
    class TileSetEditorPlugin extends EditorPlugin {
    }
    class TileSetScenesCollectionProxyObject extends Object {
        set_id(id: number /*i64*/): void
        get_id(): number /*i64*/
        id: number /*i64*/
        readonly changed: Signal // what: string => void
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource. */
    class TileSetScenesCollectionSource extends TileSetSource {
        /** Returns the number or scene tiles this TileSet source has. */
        get_scene_tiles_count(): number /*i64*/
        
        /** Returns the scene tile ID of the scene tile at [param index]. */
        get_scene_tile_id(index: number /*i64*/): number /*i64*/
        
        /** Returns whether this TileSet source has a scene tile with [param id]. */
        has_scene_tile_id(id: number /*i64*/): boolean
        
        /** Creates a scene-based tile out of the given scene.  
         *  Returns a newly generated unique ID.  
         */
        create_scene_tile(packed_scene: PackedScene, id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
        set_scene_tile_id(id: number /*i64*/, new_id: number /*i64*/): void
        
        /** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap. */
        set_scene_tile_scene(id: number /*i64*/, packed_scene: PackedScene): void
        
        /** Returns the [PackedScene] resource of scene tile with [param id]. */
        get_scene_tile_scene(id: number /*i64*/): PackedScene
        
        /** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
        set_scene_tile_display_placeholder(id: number /*i64*/, display_placeholder: boolean): void
        
        /** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
        get_scene_tile_display_placeholder(id: number /*i64*/): boolean
        
        /** Remove the scene tile with [param id]. */
        remove_scene_tile(id: number /*i64*/): void
        
        /** Returns the scene ID a following call to [method create_scene_tile] would return. */
        get_next_scene_tile_id(): number /*i64*/
    }
    class TileSetScenesCollectionSourceEditor extends HBoxContainer {
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    /** Exposes a set of tiles for a [TileSet] resource. */
    class TileSetSource extends Resource {
        /** Returns how many tiles this atlas source defines (not including alternative tiles). */
        get_tiles_count(): number /*i64*/
        
        /** Returns the tile coordinates ID of the tile with index [param index]. */
        get_tile_id(index: number /*i64*/): Vector2i
        
        /** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
        has_tile(atlas_coords: Vector2i): boolean
        
        /** Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].  
         *  For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.  
         *  Returns -1 if there is not tile at the given coords.  
         */
        get_alternative_tiles_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
        get_alternative_tile_id(atlas_coords: Vector2i, index: number /*i64*/): number /*i64*/
        
        /** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
        has_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): boolean
    }
    class TileSourceInspectorPlugin extends EditorInspectorPlugin {
    }
    class TilesEditorUtils extends Object {
    }
    namespace Timer {
        enum TimerProcessCallback {
            /** Update the timer during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            TIMER_PROCESS_PHYSICS = 0,
            
            /** Update the timer during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            TIMER_PROCESS_IDLE = 1,
        }
    }
    /** A countdown timer. */
    class Timer extends Node {
        set_wait_time(time_sec: number /*f64*/): void
        get_wait_time(): number /*f64*/
        set_one_shot(enable: boolean): void
        is_one_shot(): boolean
        set_autostart(enable: boolean): void
        has_autostart(): boolean
        
        /** Starts the timer. Sets [member wait_time] to [param time_sec] if `time_sec > 0`. This also resets the remaining time to [member wait_time].  
         *      
         *  **Note:** This method will not resume a paused timer. See [member paused].  
         */
        start(time_sec: number /*f64*/ = -1): void
        
        /** Stops the timer. */
        stop(): void
        set_paused(paused: boolean): void
        is_paused(): boolean
        
        /** Returns `true` if the timer is stopped. */
        is_stopped(): boolean
        get_time_left(): number /*f64*/
        set_timer_process_callback(callback: Timer.TimerProcessCallback): void
        get_timer_process_callback(): Timer.TimerProcessCallback
        
        /** Processing callback. See [enum TimerProcessCallback]. */
        process_callback: number /*i64*/
        
        /** The wait time in seconds.  
         *      
         *  **Note:** Timers can only emit once per rendered frame at most (or once per physics frame if [member process_callback] is [constant TIMER_PROCESS_PHYSICS]). This means very low wait times (lower than 0.05 seconds) will behave in significantly different ways depending on the rendered framerate. For very low wait times, it is recommended to use a process loop in a script instead of using a Timer node. Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.  
         */
        wait_time: number /*f64*/
        
        /** If `true`, the timer will stop when reaching 0. If `false`, it will restart. */
        one_shot: boolean
        
        /** If `true`, the timer will automatically start when entering the scene tree.  
         *      
         *  **Note:** This property is automatically set to `false` after the timer enters the scene tree and starts.  
         */
        autostart: boolean
        
        /** If `true`, the timer is paused and will not process until it is unpaused again, even if [method start] is called. */
        paused: boolean
        
        /** The timer's remaining time in seconds. Returns 0 if the timer is inactive.  
         *      
         *  **Note:** This value is read-only and cannot be set. It is based on [member wait_time], which can be set using [method start].  
         */
        readonly time_left: number /*f64*/
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal //  => void
    }
    /** Class representing a torus [PrimitiveMesh]. */
    class TorusMesh extends PrimitiveMesh {
        set_inner_radius(radius: number /*f64*/): void
        get_inner_radius(): number /*f64*/
        set_outer_radius(radius: number /*f64*/): void
        get_outer_radius(): number /*f64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_ring_segments(rings: number /*i64*/): void
        get_ring_segments(): number /*i64*/
        
        /** The inner radius of the torus. */
        inner_radius: number /*f64*/
        
        /** The outer radius of the torus. */
        outer_radius: number /*f64*/
        
        /** The number of slices the torus is constructed of. */
        rings: number /*i64*/
        
        /** The number of edges each ring of the torus is constructed of. */
        ring_segments: number /*i64*/
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            /** Always visible. */
            VISIBILITY_ALWAYS = 0,
            
            /** Visible on touch screens only. */
            VISIBILITY_TOUCHSCREEN_ONLY = 1,
        }
    }
    /** Button for touch screen devices for gameplay use. */
    class TouchScreenButton extends Node2D {
        set_texture_normal(texture: Texture2D): void
        get_texture_normal(): Texture2D
        set_texture_pressed(texture: Texture2D): void
        get_texture_pressed(): Texture2D
        set_bitmask(bitmask: BitMap): void
        get_bitmask(): BitMap
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_shape_centered(bool: boolean): void
        is_shape_centered(): boolean
        set_shape_visible(bool: boolean): void
        is_shape_visible(): boolean
        set_action(action: string): void
        get_action(): string
        set_visibility_mode(mode: TouchScreenButton.VisibilityMode): void
        get_visibility_mode(): TouchScreenButton.VisibilityMode
        set_passby_press(enabled: boolean): void
        is_passby_press_enabled(): boolean
        
        /** Returns `true` if this button is currently pressed. */
        is_pressed(): boolean
        
        /** The button's texture for the normal state. */
        texture_normal: Texture2D
        
        /** The button's texture for the pressed state. */
        texture_pressed: Texture2D
        
        /** The button's bitmask. */
        bitmask: BitMap
        
        /** The button's shape. */
        shape: Shape2D
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        shape_centered: boolean
        
        /** If `true`, the button's shape is visible in the editor. */
        shape_visible: boolean
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        passby_press: boolean
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        action: StringName
        
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        visibility_mode: number /*i64*/
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal //  => void
        
        /** Emitted when the button is released (up). */
        readonly released: Signal //  => void
    }
    /** A language translation that maps a collection of strings to their individual translations. */
    class Translation extends Resource {
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _get_message(src_message: StringName, context: StringName): StringName
        set_locale(locale: string): void
        get_locale(): string
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_message(src_message: StringName, xlated_message: StringName, context: StringName = ''): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_plural_message(src_message: StringName, xlated_messages: PackedStringArray, context: StringName = ''): void
        
        /** Returns a message's translation. */
        get_message(src_message: StringName, context: StringName = ''): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName = ''): StringName
        
        /** Erases a message. */
        erase_message(src_message: StringName, context: StringName = ''): void
        
        /** Returns all the messages (keys). */
        get_message_list(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        get_translated_message_list(): PackedStringArray
        
        /** Returns the number of existing messages. */
        get_message_count(): number /*i64*/
        _set_messages(messages: Dictionary): void
        _get_messages(): Dictionary
        messages: Dictionary
        
        /** The locale of the translation. */
        locale: string
    }
    namespace Tree {
        enum SelectMode {
            /** Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_SINGLE = 0,
            
            /** Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_ROW = 1,
            
            /** Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.  
             *  The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.  
             */
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            /** Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].  
             *      
             *  **Note:** This is the default flag, it has no effect when combined with other flags.  
             */
            DROP_MODE_DISABLED = 0,
            
            /** Enables the "on item" drop section. This drop section covers the entire item.  
             *  When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.  
             */
            DROP_MODE_ON_ITEM = 1,
            
            /** Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.  
             *  When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.  
             */
            DROP_MODE_INBETWEEN = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure. */
    class Tree extends Control {
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        create_item(parent: TreeItem = <any> {} /*compound.type from nil*/, index: number /*i64*/ = -1): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        get_root(): TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        set_column_custom_minimum_width(column: number /*i64*/, min_width: number /*i64*/): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        set_column_expand(column: number /*i64*/, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        set_column_expand_ratio(column: number /*i64*/, ratio: number /*i64*/): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        set_column_clip_content(column: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        is_column_expanding(column: number /*i64*/): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        is_column_clipping_content(column: number /*i64*/): boolean
        
        /** Returns the expand ratio assigned to the column. */
        get_column_expand_ratio(column: number /*i64*/): number /*i64*/
        
        /** Returns the column's width in pixels. */
        get_column_width(column: number /*i64*/): number /*i64*/
        set_hide_root(enable: boolean): void
        is_root_hidden(): boolean
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        get_next_selected(from: TreeItem): TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        get_selected(): TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        set_selected(item: TreeItem, column: number /*i64*/): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        get_selected_column(): number /*i64*/
        
        /** Returns the last pressed button's index. */
        get_pressed_button(): number /*i64*/
        set_select_mode(mode: Tree.SelectMode): void
        get_select_mode(): Tree.SelectMode
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselect_all(): void
        set_columns(amount: number /*i64*/): void
        get_columns(): number /*i64*/
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        get_edited(): TreeItem
        
        /** Returns the column for the currently edited item. */
        get_edited_column(): number /*i64*/
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        edit_selected(force_edit: boolean = false): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        get_custom_popup_rect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        get_item_area_rect(item: TreeItem, column: number /*i64*/ = -1, button_index: number /*i64*/ = -1): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        get_item_at_position(position: Vector2): TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        get_column_at_position(position: Vector2): number /*i64*/
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        get_drop_section_at_position(position: Vector2): number /*i64*/
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        get_button_id_at_position(position: Vector2): number /*i64*/
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensure_cursor_is_visible(): void
        set_column_titles_visible(visible: boolean): void
        are_column_titles_visible(): boolean
        
        /** Sets the title of a column. */
        set_column_title(column: number /*i64*/, title: string): void
        
        /** Returns the column's title. */
        get_column_title(column: number /*i64*/): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        set_column_title_alignment(column: number /*i64*/, title_alignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        get_column_title_alignment(column: number /*i64*/): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        set_column_title_direction(column: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        get_column_title_direction(column: number /*i64*/): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_column_title_language(column: number /*i64*/, language: string): void
        
        /** Returns column title language code. */
        get_column_title_language(column: number /*i64*/): string
        
        /** Returns the current scrolling position. */
        get_scroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scroll_to_item(item: TreeItem, center_on_item: boolean = false): void
        set_h_scroll_enabled(h_scroll: boolean): void
        is_h_scroll_enabled(): boolean
        set_v_scroll_enabled(h_scroll: boolean): void
        is_v_scroll_enabled(): boolean
        set_hide_folding(hide: boolean): void
        is_folding_hidden(): boolean
        set_enable_recursive_folding(enable: boolean): void
        is_recursive_folding_enabled(): boolean
        set_drop_mode_flags(flags: number /*i64*/): void
        get_drop_mode_flags(): number /*i64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        
        /** The number of columns. */
        columns: number /*i64*/
        
        /** If `true`, column titles are visible. */
        column_titles_visible: boolean
        
        /** If `true`, the currently selected cell may be selected again. */
        allow_reselect: boolean
        
        /** If `true`, a right mouse button click can select items. */
        allow_rmb_select: boolean
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        allow_search: boolean
        
        /** If `true`, the folding arrow is hidden. */
        hide_folding: boolean
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down Shift while clicking the fold arrow collapses or uncollapses the [TreeItem] and all its descendants. */
        enable_recursive_folding: boolean
        
        /** If `true`, the tree's root is hidden. */
        hide_root: boolean
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        drop_mode_flags: number /*i64*/
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        select_mode: number /*i64*/
        
        /** If `true`, enables horizontal scrolling. */
        scroll_horizontal_enabled: boolean
        
        /** If `true`, enables vertical scrolling. */
        scroll_vertical_enabled: boolean
        
        /** Emitted when an item is selected. */
        readonly item_selected: Signal //  => void
        
        /** Emitted when a cell is selected. */
        readonly cell_selected: Signal //  => void
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multi_selected: Signal // item: TreeItem, column: number /*i64*/, selected: boolean => void
        
        /** Emitted when an item is selected with a mouse button. */
        readonly item_mouse_selected: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly empty_clicked: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item is edited. */
        readonly item_edited: Signal //  => void
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly custom_item_clicked: Signal // mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly item_icon_double_clicked: Signal //  => void
        
        /** Emitted when an item is collapsed by a click on the folding arrow. */
        readonly item_collapsed: Signal // item: TreeItem => void
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly check_propagated_to_item: Signal // item: TreeItem, column: number /*i64*/ => void
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly button_clicked: Signal // item: TreeItem, column: number /*i64*/, id: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly custom_popup_edited: Signal // arrow_clicked: boolean => void
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly item_activated: Signal //  => void
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly column_title_clicked: Signal // column: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothing_selected: Signal //  => void
    }
    namespace TreeItem {
        enum TreeCellMode {
            /** Cell contains a string. */
            CELL_MODE_STRING = 0,
            
            /** Cell contains a checkbox. */
            CELL_MODE_CHECK = 1,
            
            /** Cell contains a range. */
            CELL_MODE_RANGE = 2,
            
            /** Cell contains an icon. */
            CELL_MODE_ICON = 3,
            CELL_MODE_CUSTOM = 4,
        }
    }
    /** An internal control for a single item inside [Tree]. */
    class TreeItem extends Object {
        /** Sets the given column's cell mode to [param mode]. See [enum TreeCellMode] constants. */
        set_cell_mode(column: number /*i64*/, mode: TreeItem.TreeCellMode): void
        
        /** Returns the column's cell mode. */
        get_cell_mode(column: number /*i64*/): TreeItem.TreeCellMode
        
        /** If [param multiline] is `true`, the given [param column] is multiline editable.  
         *      
         *  **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.  
         */
        set_edit_multiline(column: number /*i64*/, multiline: boolean): void
        
        /** Returns `true` if the given [param column] is multiline editable. */
        is_edit_multiline(column: number /*i64*/): boolean
        
        /** If [param checked] is `true`, the given [param column] is checked. Clears column's indeterminate status. */
        set_checked(column: number /*i64*/, checked: boolean): void
        
        /** If [param indeterminate] is `true`, the given [param column] is marked indeterminate.  
         *      
         *  **Note:** If set `true` from `false`, then column is cleared of checked status.  
         */
        set_indeterminate(column: number /*i64*/, indeterminate: boolean): void
        
        /** Returns `true` if the given [param column] is checked. */
        is_checked(column: number /*i64*/): boolean
        
        /** Returns `true` if the given [param column] is indeterminate. */
        is_indeterminate(column: number /*i64*/): boolean
        
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is `false`, then [signal Tree.check_propagated_to_item] will not be emitted. */
        propagate_check(column: number /*i64*/, emit_signal: boolean = true): void
        
        /** Sets the given column's text value. */
        set_text(column: number /*i64*/, text: string): void
        
        /** Returns the given column's text. */
        get_text(column: number /*i64*/): string
        
        /** Sets item's text base writing direction. */
        set_text_direction(column: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        get_text_direction(column: number /*i64*/): Control.TextDirection
        
        /** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
        set_autowrap_mode(column: number /*i64*/, autowrap_mode: TextServer.AutowrapMode): void
        
        /** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
        get_autowrap_mode(column: number /*i64*/): TextServer.AutowrapMode
        
        /** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
        set_text_overrun_behavior(column: number /*i64*/, overrun_behavior: TextServer.OverrunBehavior): void
        
        /** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
        get_text_overrun_behavior(column: number /*i64*/): TextServer.OverrunBehavior
        set_structured_text_bidi_override(column: number /*i64*/, parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(column: number /*i64*/): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(column: number /*i64*/, args: Array): void
        get_structured_text_bidi_override_options(column: number /*i64*/): Array
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_language(column: number /*i64*/, language: string): void
        
        /** Returns item's text language code. */
        get_language(column: number /*i64*/): string
        
        /** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
        set_suffix(column: number /*i64*/, text: string): void
        
        /** Gets the suffix string shown after the column value. */
        get_suffix(column: number /*i64*/): string
        
        /** Sets the given column's icon [Texture2D]. */
        set_icon(column: number /*i64*/, texture: Texture2D): void
        
        /** Returns the given column's icon [Texture2D]. Error if no icon is set. */
        get_icon(column: number /*i64*/): Texture2D
        
        /** Sets the given column's icon's texture region. */
        set_icon_region(column: number /*i64*/, region: Rect2): void
        
        /** Returns the icon [Texture2D] region as [Rect2]. */
        get_icon_region(column: number /*i64*/): Rect2
        
        /** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_icon_max_width(column: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the maximum allowed width of the icon in the given [param column]. */
        get_icon_max_width(column: number /*i64*/): number /*i64*/
        
        /** Modulates the given column's icon with [param modulate]. */
        set_icon_modulate(column: number /*i64*/, modulate: Color): void
        
        /** Returns the [Color] modulating the column's icon. */
        get_icon_modulate(column: number /*i64*/): Color
        
        /** Sets the value of a [constant CELL_MODE_RANGE] column. */
        set_range(column: number /*i64*/, value: number /*f64*/): void
        
        /** Returns the value of a [constant CELL_MODE_RANGE] column. */
        get_range(column: number /*i64*/): number /*f64*/
        
        /** Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.  
         *  If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].  
         */
        set_range_config(column: number /*i64*/, min: number /*f64*/, max: number /*f64*/, step: number /*f64*/, expr: boolean = false): void
        
        /** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
        get_range_config(column: number /*i64*/): Dictionary
        
        /** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
        set_metadata(column: number /*i64*/, meta: any): void
        
        /** Returns the metadata value that was set for the given column using [method set_metadata]. */
        get_metadata(column: number /*i64*/): any
        
        /** Sets the given column's custom draw callback to [param callback] method on [param object].  
         *  The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        set_custom_draw(column: number /*i64*/, object: Object, callback: StringName): void
        set_collapsed(enable: boolean): void
        is_collapsed(): boolean
        
        /** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
        set_collapsed_recursive(enable: boolean): void
        
        /** Returns `true` if this [TreeItem], or any of its descendants, is collapsed.  
         *  If [param only_visible] is `true` it ignores non-visible [TreeItem]s.  
         */
        is_any_collapsed(only_visible: boolean = false): boolean
        set_visible(enable: boolean): void
        is_visible(): boolean
        uncollapse_tree(): void
        set_custom_minimum_height(height: number /*i64*/): void
        get_custom_minimum_height(): number /*i64*/
        
        /** If [param selectable] is `true`, the given [param column] is selectable. */
        set_selectable(column: number /*i64*/, selectable: boolean): void
        
        /** Returns `true` if the given [param column] is selectable. */
        is_selectable(column: number /*i64*/): boolean
        
        /** Returns `true` if the given [param column] is selected. */
        is_selected(column: number /*i64*/): boolean
        
        /** Selects the given [param column]. */
        select(column: number /*i64*/): void
        
        /** Deselects the given column. */
        deselect(column: number /*i64*/): void
        
        /** If [param enabled] is `true`, the given [param column] is editable. */
        set_editable(column: number /*i64*/, enabled: boolean): void
        
        /** Returns `true` if the given [param column] is editable. */
        is_editable(column: number /*i64*/): boolean
        
        /** Sets the given column's custom color. */
        set_custom_color(column: number /*i64*/, color: Color): void
        
        /** Returns the custom color of column [param column]. */
        get_custom_color(column: number /*i64*/): Color
        
        /** Resets the color for the given column to default. */
        clear_custom_color(column: number /*i64*/): void
        
        /** Sets custom font used to draw text in the given [param column]. */
        set_custom_font(column: number /*i64*/, font: Font): void
        
        /** Returns custom font used to draw text in the column [param column]. */
        get_custom_font(column: number /*i64*/): Font
        
        /** Sets custom font size used to draw text in the given [param column]. */
        set_custom_font_size(column: number /*i64*/, font_size: number /*i64*/): void
        
        /** Returns custom font size used to draw text in the column [param column]. */
        get_custom_font_size(column: number /*i64*/): number /*i64*/
        
        /** Sets the given column's custom background color and whether to just use it as an outline. */
        set_custom_bg_color(column: number /*i64*/, color: Color, just_outline: boolean = false): void
        
        /** Resets the background color for the given column to default. */
        clear_custom_bg_color(column: number /*i64*/): void
        
        /** Returns the custom background color of column [param column]. */
        get_custom_bg_color(column: number /*i64*/): Color
        set_custom_as_button(column: number /*i64*/, enable: boolean): void
        is_custom_set_as_button(column: number /*i64*/): boolean
        
        /** Adds a button with [Texture2D] [param button] at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. */
        add_button(column: number /*i64*/, button: Texture2D, id: number /*i64*/ = -1, disabled: boolean = false, tooltip_text: string = ''): void
        
        /** Returns the number of buttons in column [param column]. */
        get_button_count(column: number /*i64*/): number /*i64*/
        
        /** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
        get_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/): string
        
        /** Returns the ID for the button at index [param button_index] in column [param column]. */
        get_button_id(column: number /*i64*/, button_index: number /*i64*/): number /*i64*/
        
        /** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
        get_button_by_id(column: number /*i64*/, id: number /*i64*/): number /*i64*/
        
        /** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
        get_button(column: number /*i64*/, button_index: number /*i64*/): Texture2D
        
        /** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
        set_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/, tooltip: string): void
        
        /** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
        set_button(column: number /*i64*/, button_index: number /*i64*/, button: Texture2D): void
        
        /** Removes the button at index [param button_index] in column [param column]. */
        erase_button(column: number /*i64*/, button_index: number /*i64*/): void
        
        /** If `true`, disables the button at index [param button_index] in the given [param column]. */
        set_button_disabled(column: number /*i64*/, button_index: number /*i64*/, disabled: boolean): void
        
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        set_button_color(column: number /*i64*/, button_index: number /*i64*/, color: Color): void
        
        /** Returns `true` if the button at index [param button_index] for the given [param column] is disabled. */
        is_button_disabled(column: number /*i64*/, button_index: number /*i64*/): boolean
        
        /** Sets the given column's tooltip text. */
        set_tooltip_text(column: number /*i64*/, tooltip: string): void
        
        /** Returns the given column's tooltip text. */
        get_tooltip_text(column: number /*i64*/): string
        
        /** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
        set_text_alignment(column: number /*i64*/, text_alignment: HorizontalAlignment): void
        
        /** Returns the given column's text alignment. */
        get_text_alignment(column: number /*i64*/): HorizontalAlignment
        
        /** If [param enable] is `true`, the given [param column] is expanded to the right. */
        set_expand_right(column: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if `expand_right` is set. */
        get_expand_right(column: number /*i64*/): boolean
        set_disable_folding(disable: boolean): void
        is_folding_disabled(): boolean
        
        /** Creates an item and adds it as a child.  
         *  The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.  
         */
        create_child(index: number /*i64*/ = -1): TreeItem
        
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        add_child(child: TreeItem): void
        
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].  
         *      
         *  **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].  
         */
        remove_child(child: TreeItem): void
        
        /** Returns the [Tree] that owns this TreeItem. */
        get_tree(): Tree
        
        /** Returns the next sibling TreeItem in the tree or a null object if there is none. */
        get_next(): TreeItem
        
        /** Returns the previous sibling TreeItem in the tree or a null object if there is none. */
        get_prev(): TreeItem
        
        /** Returns the parent TreeItem or a null object if there is none. */
        get_parent(): TreeItem
        
        /** Returns the TreeItem's first child. */
        get_first_child(): TreeItem
        
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.  
         */
        get_next_in_tree(wrap: boolean = false): TreeItem
        
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_in_tree(wrap: boolean = false): TreeItem
        
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.  
         */
        get_next_visible(wrap: boolean = false): TreeItem
        
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_visible(wrap: boolean = false): TreeItem
        
        /** Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.  
         *  Negative indices access the children from the last one.  
         */
        get_child(index: number /*i64*/): TreeItem
        
        /** Returns the number of child items. */
        get_child_count(): number /*i64*/
        
        /** Returns an array of references to the item's children. */
        get_children(): Array
        
        /** Returns the node's order in the tree. For example, if called on the first child item the position is `0`. */
        get_index(): number /*i64*/
        
        /** Moves this TreeItem right before the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_before(item: TreeItem): void
        
        /** Moves this TreeItem right after the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_after(item: TreeItem): void
        
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        call_recursive(method: StringName, ...vargargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        collapsed: boolean
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        visible: boolean
        
        /** If `true`, folding is disabled for this TreeItem. */
        disable_folding: boolean
        
        /** The custom minimum height. */
        custom_minimum_height: number /*i64*/
    }
    /** Internal mesh type. */
    class TriangleMesh extends RefCounted {
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width. */
    class TubeTrailMesh extends PrimitiveMesh {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_radial_steps(radial_steps: number /*i64*/): void
        get_radial_steps(): number /*i64*/
        set_sections(sections: number /*i64*/): void
        get_sections(): number /*i64*/
        set_section_length(section_length: number /*f64*/): void
        get_section_length(): number /*f64*/
        set_section_rings(section_rings: number /*i64*/): void
        get_section_rings(): number /*i64*/
        set_cap_top(cap_top: boolean): void
        is_cap_top(): boolean
        set_cap_bottom(cap_bottom: boolean): void
        is_cap_bottom(): boolean
        set_curve(curve: Curve): void
        get_curve(): Curve
        
        /** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
        radius: number /*f64*/
        
        /** The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        radial_steps: number /*i64*/
        
        /** The total number of sections on the tube. */
        sections: number /*i64*/
        
        /** The length of a section of the tube. */
        section_length: number /*f64*/
        
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        section_rings: number /*i64*/
        
        /** If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        cap_top: boolean
        
        /** If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        cap_bottom: boolean
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. */
        curve: Curve
    }
    namespace Tween {
        enum TweenProcessMode {
            /** The [Tween] updates after each physics frame (see [method Node._physics_process]). */
            TWEEN_PROCESS_PHYSICS = 0,
            
            /** The [Tween] updates after each process frame (see [method Node._process]). */
            TWEEN_PROCESS_IDLE = 1,
        }
        enum TweenPauseMode {
            /** If the [Tween] has a bound node, it will process when that node can process (see [member Node.process_mode]). Otherwise it's the same as [constant TWEEN_PAUSE_STOP]. */
            TWEEN_PAUSE_BOUND = 0,
            
            /** If [SceneTree] is paused, the [Tween] will also pause. */
            TWEEN_PAUSE_STOP = 1,
            
            /** The [Tween] will process regardless of whether [SceneTree] is paused. */
            TWEEN_PAUSE_PROCESS = 2,
        }
        enum TransitionType {
            /** The animation is interpolated linearly. */
            TRANS_LINEAR = 0,
            
            /** The animation is interpolated using a sine function. */
            TRANS_SINE = 1,
            
            /** The animation is interpolated with a quintic (to the power of 5) function. */
            TRANS_QUINT = 2,
            
            /** The animation is interpolated with a quartic (to the power of 4) function. */
            TRANS_QUART = 3,
            
            /** The animation is interpolated with a quadratic (to the power of 2) function. */
            TRANS_QUAD = 4,
            
            /** The animation is interpolated with an exponential (to the power of x) function. */
            TRANS_EXPO = 5,
            
            /** The animation is interpolated with elasticity, wiggling around the edges. */
            TRANS_ELASTIC = 6,
            
            /** The animation is interpolated with a cubic (to the power of 3) function. */
            TRANS_CUBIC = 7,
            
            /** The animation is interpolated with a function using square roots. */
            TRANS_CIRC = 8,
            
            /** The animation is interpolated by bouncing at the end. */
            TRANS_BOUNCE = 9,
            
            /** The animation is interpolated backing out at ends. */
            TRANS_BACK = 10,
            
            /** The animation is interpolated like a spring towards the end. */
            TRANS_SPRING = 11,
        }
        enum EaseType {
            /** The interpolation starts slowly and speeds up towards the end. */
            EASE_IN = 0,
            
            /** The interpolation starts quickly and slows down towards the end. */
            EASE_OUT = 1,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is slowest at both ends. */
            EASE_IN_OUT = 2,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is fastest at both ends. */
            EASE_OUT_IN = 3,
        }
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s. */
    class Tween extends RefCounted {
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.  
         *  **Example:**  
         *    
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.  
         *      
         *  **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.  
         *  **Example:** Moving an object twice from the same position, with different transition types:  
         *    
         */
        tween_property(object: Object, property: NodePath, final_val: any, duration: number /*f64*/): PropertyTweener
        
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.  
         *  **Example:** Creating an interval in code execution:  
         *    
         *  **Example:** Creating an object that moves back and forth and jumps every few seconds:  
         *    
         */
        tween_interval(time: number /*f64*/): IntervalTweener
        
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.  
         *  **Example:** Object that keeps shooting every 1 second:  
         *    
         *  **Example:** Turning a sprite red and then blue, with 2 second delay:  
         *    
         */
        tween_callback(callback: Callable): CallbackTweener
        
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.  
         *  **Example:** Making a 3D object look from one point to another point:  
         *    
         *  **Example:** Setting the text of a [Label], using an intermediate method and after a delay:  
         *    
         */
        tween_method(method: Callable, from: any, to: any, duration: number /*f64*/): MethodTweener
        
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.  
         *  Returns `true` if the [Tween] still has [Tweener]s that haven't finished.  
         */
        custom_step(delta: number /*f64*/): boolean
        
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.  
         *      
         *  **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        stop(): void
        
        /** Pauses the tweening. The animation can be resumed by using [method play].  
         *      
         *  **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        pause(): void
        
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.  
         *      
         *  **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.  
         */
        get_total_elapsed_time(): number /*f64*/
        
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        is_running(): boolean
        
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid [Tween]s can't have [Tweener]s appended. */
        is_valid(): boolean
        
        /** Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.  
         *  For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].  
         */
        bind_node(node: Node): Tween
        
        /** Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).  
         *  Default value is [constant TWEEN_PROCESS_IDLE].  
         */
        set_process_mode(mode: Tween.TweenProcessMode): Tween
        
        /** Determines the behavior of the [Tween] when the [SceneTree] is paused. Check [enum TweenPauseMode] for options.  
         *  Default value is [constant TWEEN_PAUSE_BOUND].  
         */
        set_pause_mode(mode: Tween.TweenPauseMode): Tween
        
        /** If [param parallel] is `true`, the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.  
         *      
         *  **Note:** Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.  
         *    
         */
        set_parallel(parallel: boolean = true): Tween
        
        /** Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.  
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).  
         *  **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].  
         */
        set_loops(loops: number /*i64*/ = 0): Tween
        
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of `-1` indicates an infinitely looping [Tween], and a return value of `0` indicates that the [Tween] has already finished. */
        get_loops_left(): number /*i64*/
        
        /** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
        set_speed_scale(speed: number /*f64*/): Tween
        
        /** Sets the default transition type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].  
         *  If not specified, the default value is [constant TRANS_LINEAR].  
         */
        set_trans(trans: Tween.TransitionType): Tween
        
        /** Sets the default ease type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].  
         *  If not specified, the default value is [constant EASE_IN_OUT].  
         */
        set_ease(ease: Tween.EaseType): Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *  **Example:**  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): Tween
        
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.  
         *  [param initial_value] is the starting value of the interpolation.  
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.  
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.  
         *  [param duration] is the total time of the interpolation.  
         *      
         *  **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.  
         */
        static interpolate_value(initial_value: any, delta_value: any, elapsed_time: number /*f64*/, duration: number /*f64*/, trans_type: Tween.TransitionType, ease_type: Tween.EaseType): any
        
        /** Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel. */
        readonly step_finished: Signal // idx: number /*i64*/ => void
        
        /** Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case. */
        readonly loop_finished: Signal // loop_count: number /*i64*/ => void
        
        /** Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]). */
        readonly finished: Signal //  => void
    }
    /** Abstract class for all Tweeners used by [Tween]. */
    class Tweener extends RefCounted {
        /** Emitted when the [Tweener] has just finished its job. */
        readonly finished: Signal //  => void
    }
    /** Helper class to implement a UDP server. */
    class UDPServer extends RefCounted {
        /** Starts the server by opening a UDP socket listening on the given [param port]. You can optionally specify a [param bind_address] to only listen for packets sent to that address. See also [method PacketPeerUDP.bind]. */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        
        /** Call this method at regular intervals (e.g. inside [method Node._process]) to process new packets. And packet from known address/port pair will be delivered to the appropriate [PacketPeerUDP], any packet received from an unknown address/port pair will be added as a pending connection (see [method is_connection_available], [method take_connection]). The maximum number of pending connection is defined via [member max_pending_connections]. */
        poll(): GodotError
        
        /** Returns `true` if a packet with a new address/port combination was received on the socket. */
        is_connection_available(): boolean
        
        /** Returns the local port this server is listening to. */
        get_local_port(): number /*i64*/
        
        /** Returns `true` if the socket is open and listening on a port. */
        is_listening(): boolean
        
        /** Returns the first pending connection (connected to the appropriate address/port). Will return `null` if no new connection is available. See also [method is_connection_available], [method PacketPeerUDP.connect_to_host]. */
        take_connection(): PacketPeerUDP
        
        /** Stops the server, closing the UDP socket if open. Will close all connected [PacketPeerUDP] accepted via [method take_connection] (remote peers will not be notified). */
        stop(): void
        set_max_pending_connections(max_pending_connections: number /*i64*/): void
        get_max_pending_connections(): number /*i64*/
        
        /** Define the maximum number of pending connections, during [method poll], any new pending connection exceeding that value will be automatically dropped. Setting this value to `0` effectively prevents any new pending connection to be accepted (e.g. when all your players have connected). */
        max_pending_connections: number /*i64*/
    }
    namespace UPNP {
        enum UPNPResult {
            /** UPNP command or discovery was successful. */
            UPNP_RESULT_SUCCESS = 0,
            
            /** Not authorized to use the command on the [UPNPDevice]. May be returned when the user disabled UPNP on their router. */
            UPNP_RESULT_NOT_AUTHORIZED = 1,
            
            /** No port mapping was found for the given port, protocol combination on the given [UPNPDevice]. */
            UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2,
            
            /** Inconsistent parameters. */
            UPNP_RESULT_INCONSISTENT_PARAMETERS = 3,
            
            /** No such entry in array. May be returned if a given port, protocol combination is not found on an [UPNPDevice]. */
            UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4,
            
            /** The action failed. */
            UPNP_RESULT_ACTION_FAILED = 5,
            
            /** The [UPNPDevice] does not allow wildcard values for the source IP address. */
            UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6,
            
            /** The [UPNPDevice] does not allow wildcard values for the external port. */
            UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7,
            
            /** The [UPNPDevice] does not allow wildcard values for the internal port. */
            UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8,
            
            /** The remote host value must be a wildcard. */
            UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9,
            
            /** The external port value must be a wildcard. */
            UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10,
            
            /** No port maps are available. May also be returned if port mapping functionality is not available. */
            UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11,
            
            /** Conflict with other mechanism. May be returned instead of [constant UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING] if a port mapping conflicts with an existing one. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12,
            
            /** Conflict with an existing port mapping. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13,
            
            /** External and internal port values must be the same. */
            UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14,
            
            /** Only permanent leases are supported. Do not use the `duration` parameter when adding port mappings. */
            UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15,
            
            /** Invalid gateway. */
            UPNP_RESULT_INVALID_GATEWAY = 16,
            
            /** Invalid port. */
            UPNP_RESULT_INVALID_PORT = 17,
            
            /** Invalid protocol. */
            UPNP_RESULT_INVALID_PROTOCOL = 18,
            
            /** Invalid duration. */
            UPNP_RESULT_INVALID_DURATION = 19,
            
            /** Invalid arguments. */
            UPNP_RESULT_INVALID_ARGS = 20,
            
            /** Invalid response. */
            UPNP_RESULT_INVALID_RESPONSE = 21,
            
            /** Invalid parameter. */
            UPNP_RESULT_INVALID_PARAM = 22,
            
            /** HTTP error. */
            UPNP_RESULT_HTTP_ERROR = 23,
            
            /** Socket error. */
            UPNP_RESULT_SOCKET_ERROR = 24,
            
            /** Error allocating memory. */
            UPNP_RESULT_MEM_ALLOC_ERROR = 25,
            
            /** No gateway available. You may need to call [method discover] first, or discovery didn't detect any valid IGDs (InternetGatewayDevices). */
            UPNP_RESULT_NO_GATEWAY = 26,
            
            /** No devices available. You may need to call [method discover] first, or discovery didn't detect any valid [UPNPDevice]s. */
            UPNP_RESULT_NO_DEVICES = 27,
            
            /** Unknown error. */
            UPNP_RESULT_UNKNOWN_ERROR = 28,
        }
    }
    /** Universal Plug and Play (UPnP) functions for network device discovery, querying and port forwarding. */
    class UPNP extends RefCounted {
        /** Returns the number of discovered [UPNPDevice]s. */
        get_device_count(): number /*i64*/
        
        /** Returns the [UPNPDevice] at the given [param index]. */
        get_device(index: number /*i64*/): UPNPDevice
        
        /** Adds the given [UPNPDevice] to the list of discovered devices. */
        add_device(device: UPNPDevice): void
        
        /** Sets the device at [param index] from the list of discovered devices to [param device]. */
        set_device(index: number /*i64*/, device: UPNPDevice): void
        
        /** Removes the device at [param index] from the list of discovered devices. */
        remove_device(index: number /*i64*/): void
        
        /** Clears the list of discovered devices. */
        clear_devices(): void
        
        /** Returns the default gateway. That is the first discovered [UPNPDevice] that is also a valid IGD (InternetGatewayDevice). */
        get_gateway(): UPNPDevice
        
        /** Discovers local [UPNPDevice]s. Clears the list of previously discovered devices.  
         *  Filters for IGD (InternetGatewayDevice) type devices by default, as those manage port forwarding. [param timeout] is the time to wait for responses in milliseconds. [param ttl] is the time-to-live; only touch this if you know what you're doing.  
         *  See [enum UPNPResult] for possible return values.  
         */
        discover(timeout: number /*i64*/ = 2000, ttl: number /*i64*/ = 2, device_filter: string = 'InternetGatewayDevice'): number /*i64*/
        
        /** Returns the external [IP] address of the default gateway (see [method get_gateway]) as string. Returns an empty string on error. */
        query_external_address(): string
        
        /** Adds a mapping to forward the external [param port] (between 1 and 65535, although recommended to use port 1024 or above) on the default gateway (see [method get_gateway]) to the [param port_internal] on the local machine for the given protocol [param proto] (either `"TCP"` or `"UDP"`, with UDP being the default). If a port mapping for the given port and protocol combination already exists on that gateway device, this method tries to overwrite it. If that is not desired, you can retrieve the gateway manually with [method get_gateway] and call [method add_port_mapping] on it, if any. Note that forwarding a well-known port (below 1024) with UPnP may fail depending on the device.  
         *  Depending on the gateway device, if a mapping for that port already exists, it will either be updated or it will refuse this command due to that conflict, especially if the existing mapping for that port wasn't created via UPnP or points to a different network address (or device) than this one.  
         *  If [param port_internal] is `0` (the default), the same port number is used for both the external and the internal port (the [param port] value).  
         *  The description ([param desc]) is shown in some routers management UIs and can be used to point out which application added the mapping.  
         *  The mapping's lease [param duration] can be limited by specifying a duration in seconds. The default of `0` means no duration, i.e. a permanent lease and notably some devices only support these permanent leases. Note that whether permanent or not, this is only a request and the gateway may still decide at any point to remove the mapping (which usually happens on a reboot of the gateway, when its external IP address changes, or on some models when it detects a port mapping has become inactive, i.e. had no traffic for multiple minutes). If not `0` (permanent), the allowed range according to spec is between `120` (2 minutes) and `86400` seconds (24 hours).  
         *  See [enum UPNPResult] for possible return values.  
         */
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        
        /** Deletes the port mapping for the given port and protocol combination on the default gateway (see [method get_gateway]) if one exists. [param port] must be a valid port between 1 and 65535, [param proto] can be either `"TCP"` or `"UDP"`. May be refused for mappings pointing to addresses other than this one, for well-known ports (below 1024), or for mappings not added via UPnP. See [enum UPNPResult] for possible return values. */
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_discover_multicast_if(m_if: string): void
        get_discover_multicast_if(): string
        set_discover_local_port(port: number /*i64*/): void
        get_discover_local_port(): number /*i64*/
        set_discover_ipv6(ipv6: boolean): void
        is_discover_ipv6(): boolean
        
        /** Multicast interface to use for discovery. Uses the default multicast interface if empty. */
        discover_multicast_if: string
        
        /** If `0`, the local port to use for discovery is chosen automatically by the system. If `1`, discovery will be done from the source port 1900 (same as destination port). Otherwise, the value will be used as the port. */
        discover_local_port: number /*i64*/
        
        /** If `true`, IPv6 is used for [UPNPDevice] discovery. */
        discover_ipv6: boolean
    }
    namespace UPNPDevice {
        enum IGDStatus {
            /** OK. */
            IGD_STATUS_OK = 0,
            
            /** HTTP error. */
            IGD_STATUS_HTTP_ERROR = 1,
            
            /** Empty HTTP response. */
            IGD_STATUS_HTTP_EMPTY = 2,
            
            /** Returned response contained no URLs. */
            IGD_STATUS_NO_URLS = 3,
            
            /** Not a valid IGD. */
            IGD_STATUS_NO_IGD = 4,
            
            /** Disconnected. */
            IGD_STATUS_DISCONNECTED = 5,
            
            /** Unknown device. */
            IGD_STATUS_UNKNOWN_DEVICE = 6,
            
            /** Invalid control. */
            IGD_STATUS_INVALID_CONTROL = 7,
            
            /** Memory allocation error. */
            IGD_STATUS_MALLOC_ERROR = 8,
            
            /** Unknown error. */
            IGD_STATUS_UNKNOWN_ERROR = 9,
        }
    }
    /** Universal Plug and Play (UPnP) device. */
    class UPNPDevice extends RefCounted {
        /** Returns `true` if this is a valid IGD (InternetGatewayDevice) which potentially supports port forwarding. */
        is_valid_gateway(): boolean
        
        /** Returns the external IP address of this [UPNPDevice] or an empty string. */
        query_external_address(): string
        
        /** Adds a port mapping to forward the given external port on this [UPNPDevice] for the given protocol to the local machine. See [method UPNP.add_port_mapping]. */
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        
        /** Deletes the port mapping identified by the given port and protocol combination on this device. See [method UPNP.delete_port_mapping]. */
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_description_url(url: string): void
        get_description_url(): string
        set_service_type(type: string): void
        get_service_type(): string
        set_igd_control_url(url: string): void
        get_igd_control_url(): string
        set_igd_service_type(type: string): void
        get_igd_service_type(): string
        set_igd_our_addr(addr: string): void
        get_igd_our_addr(): string
        set_igd_status(status: UPNPDevice.IGDStatus): void
        get_igd_status(): UPNPDevice.IGDStatus
        
        /** URL to the device description. */
        description_url: string
        
        /** Service type. */
        service_type: string
        
        /** IDG control URL. */
        igd_control_url: string
        
        /** IGD service type. */
        igd_service_type: string
        
        /** Address of the local machine in the network connecting it to this [UPNPDevice]. */
        igd_our_addr: string
        
        /** IGD status. See [enum IGDStatus]. */
        igd_status: number /*i64*/
    }
    namespace UndoRedo {
        enum MergeMode {
            /** Makes "do"/"undo" operations stay in separate actions. */
            MERGE_DISABLE = 0,
            
            /** Makes so that the action's "undo" operations are from the first action created and the "do" operations are from the last subsequent action with the same name. */
            MERGE_ENDS = 1,
            
            /** Makes subsequent actions with the same name be merged into one. */
            MERGE_ALL = 2,
        }
    }
    /** Provides a high-level interface for implementing undo and redo operations. */
    class UndoRedo extends Object {
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, backward_undo_ops: boolean = false): void
        
        /** Commit the action. If [param execute] is `true` (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        
        /** Returns `true` if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        is_committing_action(): boolean
        
        /** Register a [Callable] that will be called when the action is committed. */
        add_do_method(callable: Callable): void
        
        /** Register a [Callable] that will be called when the action is undone. */
        add_undo_method(callable: Callable): void
        
        /** Register a [param property] that would change its value to [param value] when the action is committed. */
        add_do_property(object: Object, property: StringName, value: any): void
        
        /** Register a [param property] that would change its value to [param value] when the action is undone. */
        add_undo_property(object: Object, property: StringName, value: any): void
        
        /** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources.  
         *    
         */
        add_do_reference(object: Object): void
        
        /** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!).  
         *    
         */
        add_undo_reference(object: Object): void
        
        /** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
        start_force_keep_in_merge_ends(): void
        
        /** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
        end_force_keep_in_merge_ends(): void
        
        /** Returns how many elements are in the history. */
        get_history_count(): number /*i64*/
        
        /** Gets the index of the current action. */
        get_current_action(): number /*i64*/
        
        /** Gets the action name from its index. */
        get_action_name(id: number /*i64*/): string
        
        /** Clear the undo/redo history and associated references.  
         *  Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.  
         */
        clear_history(increase_version: boolean = true): void
        
        /** Gets the name of the current action, equivalent to `get_action_name(get_current_action())`. */
        get_current_action_name(): string
        
        /** Returns `true` if an "undo" action is available. */
        has_undo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        has_redo(): boolean
        
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.  
         *  This is useful mostly to check if something changed from a saved version.  
         */
        get_version(): number /*i64*/
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        
        /** Called when [method undo] or [method redo] was called. */
        readonly version_changed: Signal //  => void
    }
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
        
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to `true` and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the vehicle reversing.  
         */
        engine_force: number /*f64*/
        
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        brake: number /*f64*/
        
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to `true` will automatically be rotated.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.  
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
        
        /** Returns `true` if this wheel is in contact with a surface. */
        is_in_contact(): boolean
        
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].  
         *  Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].  
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
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the wheel reversing.  
         */
        engine_force: number /*f64*/
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        brake: number /*f64*/
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        steering: number /*f64*/
        
        /** If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        use_as_traction: boolean
        
        /** If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
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
        /** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
        /* gdvirtual */ _instantiate_playback(): VideoStreamPlayback
        set_file(file: string): void
        get_file(): string
        
        /** The video file path or URI that this [VideoStream] resource handles.  
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.  
         */
        file: string
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer]. */
    class VideoStreamPlayback extends Resource {
        /** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return false once stopped. */
        /* gdvirtual */ _stop(): void
        
        /** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return true once playing. */
        /* gdvirtual */ _play(): void
        
        /** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
        /* gdvirtual */ _is_playing(): boolean
        
        /** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
        /* gdvirtual */ _set_paused(paused: boolean): void
        
        /** Returns the paused status, as set by [method _set_paused]. */
        /* gdvirtual */ _is_paused(): boolean
        
        /** Returns the video duration in seconds, if known, or 0 if unknown. */
        /* gdvirtual */ _get_length(): number /*f64*/
        
        /** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
        /* gdvirtual */ _get_playback_position(): number /*f64*/
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: number /*f64*/): void
        
        /** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
        /* gdvirtual */ _set_audio_track(idx: number /*i64*/): void
        
        /** Allocates a [Texture2D] in which decoded video frames will be drawn. */
        /* gdvirtual */ _get_texture(): Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as [method _is_paused] and [method _is_playing] return true. */
        /* gdvirtual */ _update(delta: number /*f64*/): void
        
        /** Returns the number of audio channels. */
        /* gdvirtual */ _get_channels(): number /*i64*/
        
        /** Returns the audio sample rate used for mixing. */
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
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        
        /** Returns `true` if the video is playing.  
         *      
         *  **Note:** The video is still considered playing if paused during playback.  
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
        
        /** Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned. */
        get_stream_name(): string
        
        /** The length of the current stream, in seconds.  
         *      
         *  **Note:** For [VideoStreamTheora] streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.  
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
        
        /** If `true`, playback starts when the scene loads. */
        autoplay: boolean
        
        /** If `true`, the video is paused. */
        paused: boolean
        
        /** If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        expand: boolean
        
        /** If `true`, the video restarts when it reaches its end. */
        loop: boolean
        
        /** Amount of time in milliseconds to store in buffer while playing. */
        buffering_msec: number /*i64*/
        
        /** The current position of the stream, in seconds.  
         *      
         *  **Note:** Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.  
         */
        stream_position: number /*f64*/
        
        /** Audio bus to use for sound playback. */
        bus: StringName
        
        /** Emitted when playback is finished. */
        readonly finished: Signal //  => void
    }
    /** [VideoStream] resource for Ogg Theora videos. */
    class VideoStreamTheora extends VideoStream {
    }
    class ViewPanner extends RefCounted {
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            /** This quadrant will not be used. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
            
            /** This quadrant will only be used by one shadow map. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
            
            /** This quadrant will be split in 4 and used by up to 4 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
            
            /** This quadrant will be split 16 ways and used by up to 16 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
            
            /** This quadrant will be split 64 ways and used by up to 64 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
            
            /** This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
            
            /** This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
            
            /** Represents the size of the [enum PositionalShadowAtlasQuadrantSubdiv] enum. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7,
        }
        enum Scaling3DMode {
            /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_BILINEAR = 0,
            
            /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_FSR = 1,
            
            /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
            SCALING_3D_MODE_FSR2 = 2,
            
            /** Represents the size of the [enum Scaling3DMode] enum. */
            SCALING_3D_MODE_MAX = 3,
        }
        enum MSAA {
            /** Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting. */
            MSAA_DISABLED = 0,
            
            /** Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better. */
            MSAA_2X = 1,
            
            /** Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality. */
            MSAA_4X = 2,
            
            /** Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware. */
            MSAA_8X = 3,
            
            /** Represents the size of the [enum MSAA] enum. */
            MSAA_MAX = 4,
        }
        enum ScreenSpaceAA {
            /** Do not perform any antialiasing in the full screen post-process. */
            SCREEN_SPACE_AA_DISABLED = 0,
            
            /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
            SCREEN_SPACE_AA_FXAA = 1,
            
            /** Represents the size of the [enum ScreenSpaceAA] enum. */
            SCREEN_SPACE_AA_MAX = 2,
        }
        enum RenderInfo {
            /** Amount of objects in frame. */
            RENDER_INFO_OBJECTS_IN_FRAME = 0,
            
            /** Amount of vertices in frame. */
            RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            
            /** Amount of draw calls in frame. */
            RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            
            /** Represents the size of the [enum RenderInfo] enum. */
            RENDER_INFO_MAX = 3,
        }
        enum RenderInfoType {
            RENDER_INFO_TYPE_VISIBLE = 0,
            RENDER_INFO_TYPE_SHADOW = 1,
            RENDER_INFO_TYPE_MAX = 2,
        }
        enum DebugDraw {
            /** Objects are displayed normally. */
            DEBUG_DRAW_DISABLED = 0,
            
            /** Objects are displayed without light information. */
            DEBUG_DRAW_UNSHADED = 1,
            DEBUG_DRAW_LIGHTING = 2,
            
            /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others. */
            DEBUG_DRAW_OVERDRAW = 3,
            
            /** Objects are displayed in wireframe style. */
            DEBUG_DRAW_WIREFRAME = 4,
            DEBUG_DRAW_NORMAL_BUFFER = 5,
            
            /** Objects are displayed with only the albedo value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            
            /** Objects are displayed with only the lighting value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            
            /** Objects are displayed with only the emission color from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            
            /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_SHADOW_ATLAS = 9,
            
            /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            DEBUG_DRAW_SCENE_LUMINANCE = 11,
            
            /** Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSAO = 12,
            
            /** Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSIL = 13,
            
            /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow. */
            DEBUG_DRAW_PSSM_SPLITS = 14,
            
            /** Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport]. */
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
            
            /** Draws the internal resolution buffer of the scene before post-processing is applied. */
            DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            
            /** Max value for [enum DefaultCanvasItemTextureFilter] enum. */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
            
            /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
            
            /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
            
            /** Max value for [enum DefaultCanvasItemTextureRepeat] enum. */
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
            /** VRS is disabled. */
            VRS_DISABLED = 0,
            
            /** VRS uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
            VRS_TEXTURE = 1,
            
            /** VRS texture is supplied by the primary [XRInterface]. */
            VRS_XR = 2,
            
            /** Represents the size of the [enum VRSMode] enum. */
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
         *      
         *  **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.  
         *    
         */
        get_texture(): ViewportTexture
        set_physics_object_picking(enable: boolean): void
        get_physics_object_picking(): boolean
        set_physics_object_picking_sort(enable: boolean): void
        get_physics_object_picking_sort(): boolean
        
        /** Returns the viewport's RID from the [RenderingServer]. */
        get_viewport_rid(): RID
        
        /** Helper method which calls the `set_text()` method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        push_text_input(text: string): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._input]  
         *  - [method Control._gui_input] for [Control] nodes  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         */
        push_input(event: InputEvent, in_local_coords: boolean = false): void
        
        /** Triggers the given [InputEvent] in this [Viewport]. This can be used to pass input events between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         *      
         *  **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.  
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
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warp_mouse(position: Vector2): void
        
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective `mouse_exited` counterparts. */
        update_mouse_cursor_state(): void
        
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        gui_get_drag_data(): any
        
        /** Returns `true` if the viewport is currently performing a drag operation.  
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.  
         */
        gui_is_dragging(): boolean
        
        /** Returns `true` if the drag operation is successful. */
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
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        set_input_as_handled(): void
        
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].  
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.  
         *  If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.  
         */
        is_input_handled(): boolean
        set_handle_input_locally(enable: boolean): void
        is_handling_input_locally(): boolean
        set_default_canvas_item_texture_filter(mode: Viewport.DefaultCanvasItemTextureFilter): void
        get_default_canvas_item_texture_filter(): Viewport.DefaultCanvasItemTextureFilter
        set_embedding_subwindows(enable: boolean): void
        is_embedding_subwindows(): boolean
        
        /** Returns a list of the visible embedded [Window]s inside the viewport.  
         *      
         *  **Note:** [Window]s inside other viewports will not be listed.  
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
        
        /** If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        use_xr: boolean
        
        /** If `true`, the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        own_world_3d: boolean
        
        /** The custom [World3D] which can be used as 3D environment source. */
        world_3d: World3D
        
        /** The custom [World2D] which can be used as 2D environment source. */
        world_2d: World2D
        
        /** If `true`, the viewport should render its background as transparent. */
        transparent_bg: boolean
        
        /** If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.  
         *  A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.  
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
         *      
         *  **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.  
         */
        use_taa: boolean
        
        /** If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is [i]not[/i] affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS]. See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding].  
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.  
         */
        use_debanding: boolean
        
        /** If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.  
         *      
         *  **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.  
         *      
         *  **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.  
         */
        use_occlusion_culling: boolean
        
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        mesh_lod_threshold: number /*f64*/
        
        /** The overlay mode for test rendered geometry in debug purposes. */
        debug_draw: number /*i64*/
        
        /** If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a `RGBA16` framebuffer, while when using the Mobile renderer it will be a `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.  
         *      
         *  **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.  
         */
        use_hdr_2d: boolean
        
        /** Sets scaling 3d mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.  
         */
        scaling_3d_mode: number /*i64*/
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.  
         */
        scaling_3d_scale: number /*f64*/
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).  
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.  
         *      
         *  **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.  
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
        
        /** If `true`, the viewport will process 2D audio streams. */
        audio_listener_enable_2d: boolean
        
        /** If `true`, the viewport will process 3D audio streams. */
        audio_listener_enable_3d: boolean
        
        /** If `true`, the objects rendered by viewport become subjects of mouse picking process.  
         *      
         *  **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.  
         */
        physics_object_picking: boolean
        
        /** If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.  
         *      
         *  **Note:** This setting is disabled by default because of its potential expensive computational cost.  
         *      
         *  **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.  
         */
        physics_object_picking_sort: boolean
        
        /** If `true`, the viewport will not receive input events. */
        gui_disable_input: boolean
        
        /** If `true`, the GUI controls on the viewport will lay pixel perfectly. */
        gui_snap_controls_to_pixels: boolean
        
        /** If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system. */
        gui_embed_subwindows: boolean
        sdf_oversize: number /*i64*/
        sdf_scale: number /*i64*/
        
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
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
        
        /** Emitted when the size of the viewport is changed, whether by resizing of window, or some other means. */
        readonly size_changed: Signal //  => void
        
        /** Emitted when a Control node grabs keyboard focus. */
        readonly gui_focus_changed: Signal // node: Control => void
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
         *      
         *  **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, the path may not be able to automatically update due to the inability to determine the scene root.  
         */
        viewport_path: NodePath
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
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
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
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
        
        /** If `true`, the bounding rectangle is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.  
         */
        is_on_screen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        rect: Rect2
        
        /** Emitted when the VisibleOnScreenNotifier2D enters the screen. */
        readonly screen_entered: Signal //  => void
        
        /** Emitted when the VisibleOnScreenNotifier2D exits the screen. */
        readonly screen_exited: Signal //  => void
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen. */
    class VisibleOnScreenNotifier3D extends VisualInstance3D {
        set_aabb(rect: AABB): void
        
        /** Returns `true` if the bounding box is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.  
         */
        is_on_screen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        aabb: AABB
        
        /** Emitted when the [VisibleOnScreenNotifier3D] enters the screen. */
        readonly screen_entered: Signal //  => void
        
        /** Emitted when the [VisibleOnScreenNotifier3D] exits the screen. */
        readonly screen_exited: Signal //  => void
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
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        layers: number /*i64*/
        
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        sorting_offset: number /*f64*/
        
        /** If `true`, the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.  
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].  
         */
        sorting_use_aabb_center: boolean
    }
    namespace VisualShader {
        enum Type {
            /** A vertex shader, operating on vertices. */
            TYPE_VERTEX = 0,
            
            /** A fragment shader, operating on fragments (pixels). */
            TYPE_FRAGMENT = 1,
            
            /** A shader for light calculations. */
            TYPE_LIGHT = 2,
            
            /** A function for the "start" stage of particle shader. */
            TYPE_START = 3,
            
            /** A function for the "process" stage of particle shader. */
            TYPE_PROCESS = 4,
            
            /** A function for the "collide" stage (particle collision handler) of particle shader. */
            TYPE_COLLIDE = 5,
            
            /** A function for the "start" stage of particle shader, with customized output. */
            TYPE_START_CUSTOM = 6,
            
            /** A function for the "process" stage of particle shader, with customized output. */
            TYPE_PROCESS_CUSTOM = 7,
            
            /** A shader for 3D environment's sky. */
            TYPE_SKY = 8,
            
            /** A compute shader that runs for each froxel of the volumetric fog map. */
            TYPE_FOG = 9,
            
            /** Represents the size of the [enum Type] enum. */
            TYPE_MAX = 10,
        }
        enum VaryingMode {
            /** Varying is passed from `Vertex` function to `Fragment` and `Light` functions. */
            VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
            
            /** Varying is passed from `Fragment` function to `Light` function. */
            VARYING_MODE_FRAG_TO_LIGHT = 1,
            
            /** Represents the size of the [enum VaryingMode] enum. */
            VARYING_MODE_MAX = 2,
        }
        enum VaryingType {
            /** Varying is of type [float]. */
            VARYING_TYPE_FLOAT = 0,
            
            /** Varying is of type [int]. */
            VARYING_TYPE_INT = 1,
            
            /** Varying is of type unsigned [int]. */
            VARYING_TYPE_UINT = 2,
            
            /** Varying is of type [Vector2]. */
            VARYING_TYPE_VECTOR_2D = 3,
            
            /** Varying is of type [Vector3]. */
            VARYING_TYPE_VECTOR_3D = 4,
            
            /** Varying is of type [Vector4]. */
            VARYING_TYPE_VECTOR_4D = 5,
            
            /** Varying is of type [bool]. */
            VARYING_TYPE_BOOLEAN = 6,
            
            /** Varying is of type [Transform3D]. */
            VARYING_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum VaryingType] enum. */
            VARYING_TYPE_MAX = 8,
        }
    }
    /** A custom shader program with a visual editor. */
    class VisualShader extends Shader {
        /** Denotes invalid [VisualShader] node. */
        static readonly NODE_ID_INVALID = -1
        
        /** Denotes output node of [VisualShader]. */
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
        
        /** Returns `true` if the specified node and port connection exist. */
        is_node_connection(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        
        /** Returns `true` if the specified nodes and ports can be connected together. */
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
        
        /** Returns `true` if the shader has a varying with the given [param name]. */
        has_varying(name: string): boolean
        _update_shader(): void
        
        /** The offset vector of the whole graph. */
        graph_offset: Vector2
    }
    class VisualShaderConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace VisualShaderNode {
        enum PortType {
            /** Floating-point scalar. Translated to [code skip-lint]float` type in shader code. */
            PORT_TYPE_SCALAR = 0,
            
            /** Integer scalar. Translated to [code skip-lint]int` type in shader code. */
            PORT_TYPE_SCALAR_INT = 1,
            
            /** Unsigned integer scalar. Translated to [code skip-lint]uint` type in shader code. */
            PORT_TYPE_SCALAR_UINT = 2,
            
            /** 2D vector of floating-point values. Translated to [code skip-lint]vec2` type in shader code. */
            PORT_TYPE_VECTOR_2D = 3,
            
            /** 3D vector of floating-point values. Translated to [code skip-lint]vec3` type in shader code. */
            PORT_TYPE_VECTOR_3D = 4,
            
            /** 4D vector of floating-point values. Translated to [code skip-lint]vec4` type in shader code. */
            PORT_TYPE_VECTOR_4D = 5,
            
            /** Boolean type. Translated to [code skip-lint]bool` type in shader code. */
            PORT_TYPE_BOOLEAN = 6,
            
            /** Transform type. Translated to [code skip-lint]mat4` type in shader code. */
            PORT_TYPE_TRANSFORM = 7,
            
            /** Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes. */
            PORT_TYPE_SAMPLER = 8,
            
            /** Represents the size of the [enum PortType] enum. */
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
        
        /** Sets the default input ports values using an [Array] of the form `[index0, value0, index1, value1, ...]`. For example: `[0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)]`. */
        set_default_input_values(values: Array): void
        
        /** Returns an [Array] containing default values for all of the input ports of the node in the form `[index0, value0, index1, value1, ...]`. */
        get_default_input_values(): Array
        
        /** Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview. */
        output_port_for_preview: number /*i64*/
        default_input_values: Array
        expanded_output_ports: Array
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            /** Billboarding is disabled and the node does nothing. */
            BILLBOARD_TYPE_DISABLED = 0,
            
            /** A standard billboarding algorithm is enabled. */
            BILLBOARD_TYPE_ENABLED = 1,
            
            /** A billboarding algorithm to rotate around Y-axis is enabled. */
            BILLBOARD_TYPE_FIXED_Y = 2,
            
            /** A billboarding algorithm designed to use on particles is enabled. */
            BILLBOARD_TYPE_PARTICLES = 3,
            
            /** Represents the size of the [enum BillboardType] enum. */
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
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
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
            /** A floating-point scalar. */
            OP_TYPE_FLOAT = 0,
            
            /** An integer scalar. */
            OP_TYPE_INT = 1,
            
            /** An unsigned integer scalar. */
            OP_TYPE_UINT = 2,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** Represents the size of the [enum OpType] enum. */
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
            /** Converts the color to grayscale using the following formula:  
             *    
             */
            FUNC_GRAYSCALE = 0,
            
            /** Converts HSV vector to RGB equivalent. */
            FUNC_HSV2RGB = 1,
            
            /** Converts RGB vector to HSV equivalent. */
            FUNC_RGB2HSV = 2,
            
            /** Applies sepia tone effect using the following formula:  
             *    
             */
            FUNC_SEPIA = 3,
            
            /** Represents the size of the [enum Function] enum. */
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
            /** Produce a screen effect with the following formula:  
             *    
             */
            OP_SCREEN = 0,
            
            /** Produce a difference effect with the following formula:  
             *    
             */
            OP_DIFFERENCE = 1,
            
            /** Produce a darken effect with the following formula:  
             *    
             */
            OP_DARKEN = 2,
            
            /** Produce a lighten effect with the following formula:  
             *    
             */
            OP_LIGHTEN = 3,
            
            /** Produce an overlay effect with the following formula:  
             *    
             */
            OP_OVERLAY = 4,
            
            /** Produce a dodge effect with the following formula:  
             *    
             */
            OP_DODGE = 5,
            
            /** Produce a burn effect with the following formula:  
             *    
             */
            OP_BURN = 6,
            
            /** Produce a soft light effect with the following formula:  
             *    
             */
            OP_SOFT_LIGHT = 7,
            
            /** Produce a hard light effect with the following formula:  
             *    
             */
            OP_HARD_LIGHT = 8,
            
            /** Represents the size of the [enum Operator] enum. */
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
            /** A floating-point scalar. */
            CTYPE_SCALAR = 0,
            
            /** An integer scalar. */
            CTYPE_SCALAR_INT = 1,
            
            /** An unsigned integer scalar. */
            CTYPE_SCALAR_UINT = 2,
            
            /** A 2D vector type. */
            CTYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            CTYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            CTYPE_VECTOR_4D = 5,
            
            /** A boolean type. */
            CTYPE_BOOLEAN = 6,
            
            /** A transform (`mat4`) type. */
            CTYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum ComparisonType] enum. */
            CTYPE_MAX = 8,
        }
        enum Function {
            /** Comparison for equality (`a == b`). */
            FUNC_EQUAL = 0,
            
            /** Comparison for inequality (`a != b`). */
            FUNC_NOT_EQUAL = 1,
            
            /** Comparison for greater than (`a > b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN = 2,
            
            /** Comparison for greater than or equal (`a >= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN_EQUAL = 3,
            
            /** Comparison for less than (`a < b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN = 4,
            
            /** Comparison for less than or equal (`a <= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN_EQUAL = 5,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 6,
        }
        enum Condition {
            /** The result will be true if all of component in vector satisfy the comparison condition. */
            COND_ALL = 0,
            
            /** The result will be true if any of component in vector satisfy the comparison condition. */
            COND_ANY = 1,
            
            /** Represents the size of the [enum Condition] enum. */
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
}
