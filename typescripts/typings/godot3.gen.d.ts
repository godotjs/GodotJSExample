// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise [code]null[/code].
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor [code]^[/code] is not affected by [param offset], and the character before [param offset] will be checked for the word boundary [code]\b[/code].
         */
        search(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): RegExMatch
        /** Searches the text for the compiled pattern. Returns an array of [RegExMatch] containers for each non-overlapping result. If no results were found, an empty array is returned instead.
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor [code]^[/code] is not affected by [param offset], and the character before [param offset] will be checked for the word boundary [code]\b[/code].
         */
        search_all(subject: string, offset: number /*i64*/ = 0, end: number /*i64*/ = -1): Array
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as [code]$1[/code] and [code]$name[/code] are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor [code]^[/code] is not affected by [param offset], and the character before [param offset] will be checked for the word boundary [code]\b[/code].
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
        /** If [code]true[/code], global coordinates are used. If [code]false[/code], local coordinates are used. */
        use_global_coordinates: boolean
        /** If [code]true[/code], the remote node's position is updated. */
        update_position: boolean
        /** If [code]true[/code], the remote node's rotation is updated. */
        update_rotation: boolean
        /** If [code]true[/code], the remote node's scale is updated. */
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
        /** If [code]true[/code], global coordinates are used. If [code]false[/code], local coordinates are used. */
        use_global_coordinates: boolean
        /** If [code]true[/code], the remote node's position is updated. */
        update_position: boolean
        /** If [code]true[/code], the remote node's rotation is updated. */
        update_rotation: boolean
        /** If [code]true[/code], the remote node's scale is updated. */
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
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        /* gdvirtual */ _set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        /* gdvirtual */ _set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        /* gdvirtual */ _set_use_debanding(use_debanding: boolean): void
    }
    class RenderSceneBuffersGLES3 extends RenderSceneBuffers {
    }
    /** Abstract render scene buffer implementation for the RenderingDevice based renderers. */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        /** Returns [code]true[/code] if a cached texture exists for this name. */
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
        /** Returns [code]true[/code] if TAA is enabled. */
        get_use_taa(): boolean
    }
    namespace RenderingDevice {
        enum DeviceType {
            DEVICE_TYPE_OTHER = 0,
            DEVICE_TYPE_INTEGRATED_GPU = 1,
            DEVICE_TYPE_DISCRETE_GPU = 2,
            DEVICE_TYPE_VIRTUAL_GPU = 3,
            DEVICE_TYPE_CPU = 4,
            DEVICE_TYPE_MAX = 5,
        }
        enum DriverResource {
            DRIVER_RESOURCE_VULKAN_DEVICE = 0,
            DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE = 1,
            DRIVER_RESOURCE_VULKAN_INSTANCE = 2,
            DRIVER_RESOURCE_VULKAN_QUEUE = 3,
            DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX = 4,
            DRIVER_RESOURCE_VULKAN_IMAGE = 5,
            DRIVER_RESOURCE_VULKAN_IMAGE_VIEW = 6,
            DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT = 7,
            DRIVER_RESOURCE_VULKAN_SAMPLER = 8,
            DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET = 9,
            DRIVER_RESOURCE_VULKAN_BUFFER = 10,
            DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE = 11,
            DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE = 12,
        }
        enum DataFormat {
            DATA_FORMAT_R4G4_UNORM_PACK8 = 0,
            DATA_FORMAT_R4G4B4A4_UNORM_PACK16 = 1,
            DATA_FORMAT_B4G4R4A4_UNORM_PACK16 = 2,
            DATA_FORMAT_R5G6B5_UNORM_PACK16 = 3,
            DATA_FORMAT_B5G6R5_UNORM_PACK16 = 4,
            DATA_FORMAT_R5G5B5A1_UNORM_PACK16 = 5,
            DATA_FORMAT_B5G5R5A1_UNORM_PACK16 = 6,
            DATA_FORMAT_A1R5G5B5_UNORM_PACK16 = 7,
            DATA_FORMAT_R8_UNORM = 8,
            DATA_FORMAT_R8_SNORM = 9,
            DATA_FORMAT_R8_USCALED = 10,
            DATA_FORMAT_R8_SSCALED = 11,
            DATA_FORMAT_R8_UINT = 12,
            DATA_FORMAT_R8_SINT = 13,
            DATA_FORMAT_R8_SRGB = 14,
            DATA_FORMAT_R8G8_UNORM = 15,
            DATA_FORMAT_R8G8_SNORM = 16,
            DATA_FORMAT_R8G8_USCALED = 17,
            DATA_FORMAT_R8G8_SSCALED = 18,
            DATA_FORMAT_R8G8_UINT = 19,
            DATA_FORMAT_R8G8_SINT = 20,
            DATA_FORMAT_R8G8_SRGB = 21,
            DATA_FORMAT_R8G8B8_UNORM = 22,
            DATA_FORMAT_R8G8B8_SNORM = 23,
            DATA_FORMAT_R8G8B8_USCALED = 24,
            DATA_FORMAT_R8G8B8_SSCALED = 25,
            DATA_FORMAT_R8G8B8_UINT = 26,
            DATA_FORMAT_R8G8B8_SINT = 27,
            DATA_FORMAT_R8G8B8_SRGB = 28,
            DATA_FORMAT_B8G8R8_UNORM = 29,
            DATA_FORMAT_B8G8R8_SNORM = 30,
            DATA_FORMAT_B8G8R8_USCALED = 31,
            DATA_FORMAT_B8G8R8_SSCALED = 32,
            DATA_FORMAT_B8G8R8_UINT = 33,
            DATA_FORMAT_B8G8R8_SINT = 34,
            DATA_FORMAT_B8G8R8_SRGB = 35,
            DATA_FORMAT_R8G8B8A8_UNORM = 36,
            DATA_FORMAT_R8G8B8A8_SNORM = 37,
            DATA_FORMAT_R8G8B8A8_USCALED = 38,
            DATA_FORMAT_R8G8B8A8_SSCALED = 39,
            DATA_FORMAT_R8G8B8A8_UINT = 40,
            DATA_FORMAT_R8G8B8A8_SINT = 41,
            DATA_FORMAT_R8G8B8A8_SRGB = 42,
            DATA_FORMAT_B8G8R8A8_UNORM = 43,
            DATA_FORMAT_B8G8R8A8_SNORM = 44,
            DATA_FORMAT_B8G8R8A8_USCALED = 45,
            DATA_FORMAT_B8G8R8A8_SSCALED = 46,
            DATA_FORMAT_B8G8R8A8_UINT = 47,
            DATA_FORMAT_B8G8R8A8_SINT = 48,
            DATA_FORMAT_B8G8R8A8_SRGB = 49,
            DATA_FORMAT_A8B8G8R8_UNORM_PACK32 = 50,
            DATA_FORMAT_A8B8G8R8_SNORM_PACK32 = 51,
            DATA_FORMAT_A8B8G8R8_USCALED_PACK32 = 52,
            DATA_FORMAT_A8B8G8R8_SSCALED_PACK32 = 53,
            DATA_FORMAT_A8B8G8R8_UINT_PACK32 = 54,
            DATA_FORMAT_A8B8G8R8_SINT_PACK32 = 55,
            DATA_FORMAT_A8B8G8R8_SRGB_PACK32 = 56,
            DATA_FORMAT_A2R10G10B10_UNORM_PACK32 = 57,
            DATA_FORMAT_A2R10G10B10_SNORM_PACK32 = 58,
            DATA_FORMAT_A2R10G10B10_USCALED_PACK32 = 59,
            DATA_FORMAT_A2R10G10B10_SSCALED_PACK32 = 60,
            DATA_FORMAT_A2R10G10B10_UINT_PACK32 = 61,
            DATA_FORMAT_A2R10G10B10_SINT_PACK32 = 62,
            DATA_FORMAT_A2B10G10R10_UNORM_PACK32 = 63,
            DATA_FORMAT_A2B10G10R10_SNORM_PACK32 = 64,
            DATA_FORMAT_A2B10G10R10_USCALED_PACK32 = 65,
            DATA_FORMAT_A2B10G10R10_SSCALED_PACK32 = 66,
            DATA_FORMAT_A2B10G10R10_UINT_PACK32 = 67,
            DATA_FORMAT_A2B10G10R10_SINT_PACK32 = 68,
            DATA_FORMAT_R16_UNORM = 69,
            DATA_FORMAT_R16_SNORM = 70,
            DATA_FORMAT_R16_USCALED = 71,
            DATA_FORMAT_R16_SSCALED = 72,
            DATA_FORMAT_R16_UINT = 73,
            DATA_FORMAT_R16_SINT = 74,
            DATA_FORMAT_R16_SFLOAT = 75,
            DATA_FORMAT_R16G16_UNORM = 76,
            DATA_FORMAT_R16G16_SNORM = 77,
            DATA_FORMAT_R16G16_USCALED = 78,
            DATA_FORMAT_R16G16_SSCALED = 79,
            DATA_FORMAT_R16G16_UINT = 80,
            DATA_FORMAT_R16G16_SINT = 81,
            DATA_FORMAT_R16G16_SFLOAT = 82,
            DATA_FORMAT_R16G16B16_UNORM = 83,
            DATA_FORMAT_R16G16B16_SNORM = 84,
            DATA_FORMAT_R16G16B16_USCALED = 85,
            DATA_FORMAT_R16G16B16_SSCALED = 86,
            DATA_FORMAT_R16G16B16_UINT = 87,
            DATA_FORMAT_R16G16B16_SINT = 88,
            DATA_FORMAT_R16G16B16_SFLOAT = 89,
            DATA_FORMAT_R16G16B16A16_UNORM = 90,
            DATA_FORMAT_R16G16B16A16_SNORM = 91,
            DATA_FORMAT_R16G16B16A16_USCALED = 92,
            DATA_FORMAT_R16G16B16A16_SSCALED = 93,
            DATA_FORMAT_R16G16B16A16_UINT = 94,
            DATA_FORMAT_R16G16B16A16_SINT = 95,
            DATA_FORMAT_R16G16B16A16_SFLOAT = 96,
            DATA_FORMAT_R32_UINT = 97,
            DATA_FORMAT_R32_SINT = 98,
            DATA_FORMAT_R32_SFLOAT = 99,
            DATA_FORMAT_R32G32_UINT = 100,
            DATA_FORMAT_R32G32_SINT = 101,
            DATA_FORMAT_R32G32_SFLOAT = 102,
            DATA_FORMAT_R32G32B32_UINT = 103,
            DATA_FORMAT_R32G32B32_SINT = 104,
            DATA_FORMAT_R32G32B32_SFLOAT = 105,
            DATA_FORMAT_R32G32B32A32_UINT = 106,
            DATA_FORMAT_R32G32B32A32_SINT = 107,
            DATA_FORMAT_R32G32B32A32_SFLOAT = 108,
            DATA_FORMAT_R64_UINT = 109,
            DATA_FORMAT_R64_SINT = 110,
            DATA_FORMAT_R64_SFLOAT = 111,
            DATA_FORMAT_R64G64_UINT = 112,
            DATA_FORMAT_R64G64_SINT = 113,
            DATA_FORMAT_R64G64_SFLOAT = 114,
            DATA_FORMAT_R64G64B64_UINT = 115,
            DATA_FORMAT_R64G64B64_SINT = 116,
            DATA_FORMAT_R64G64B64_SFLOAT = 117,
            DATA_FORMAT_R64G64B64A64_UINT = 118,
            DATA_FORMAT_R64G64B64A64_SINT = 119,
            DATA_FORMAT_R64G64B64A64_SFLOAT = 120,
            DATA_FORMAT_B10G11R11_UFLOAT_PACK32 = 121,
            DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 122,
            DATA_FORMAT_D16_UNORM = 123,
            DATA_FORMAT_X8_D24_UNORM_PACK32 = 124,
            DATA_FORMAT_D32_SFLOAT = 125,
            DATA_FORMAT_S8_UINT = 126,
            DATA_FORMAT_D16_UNORM_S8_UINT = 127,
            DATA_FORMAT_D24_UNORM_S8_UINT = 128,
            DATA_FORMAT_D32_SFLOAT_S8_UINT = 129,
            DATA_FORMAT_BC1_RGB_UNORM_BLOCK = 130,
            DATA_FORMAT_BC1_RGB_SRGB_BLOCK = 131,
            DATA_FORMAT_BC1_RGBA_UNORM_BLOCK = 132,
            DATA_FORMAT_BC1_RGBA_SRGB_BLOCK = 133,
            DATA_FORMAT_BC2_UNORM_BLOCK = 134,
            DATA_FORMAT_BC2_SRGB_BLOCK = 135,
            DATA_FORMAT_BC3_UNORM_BLOCK = 136,
            DATA_FORMAT_BC3_SRGB_BLOCK = 137,
            DATA_FORMAT_BC4_UNORM_BLOCK = 138,
            DATA_FORMAT_BC4_SNORM_BLOCK = 139,
            DATA_FORMAT_BC5_UNORM_BLOCK = 140,
            DATA_FORMAT_BC5_SNORM_BLOCK = 141,
            DATA_FORMAT_BC6H_UFLOAT_BLOCK = 142,
            DATA_FORMAT_BC6H_SFLOAT_BLOCK = 143,
            DATA_FORMAT_BC7_UNORM_BLOCK = 144,
            DATA_FORMAT_BC7_SRGB_BLOCK = 145,
            DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 146,
            DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 147,
            DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 148,
            DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 149,
            DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 150,
            DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 151,
            DATA_FORMAT_EAC_R11_UNORM_BLOCK = 152,
            DATA_FORMAT_EAC_R11_SNORM_BLOCK = 153,
            DATA_FORMAT_EAC_R11G11_UNORM_BLOCK = 154,
            DATA_FORMAT_EAC_R11G11_SNORM_BLOCK = 155,
            DATA_FORMAT_ASTC_4x4_UNORM_BLOCK = 156,
            DATA_FORMAT_ASTC_4x4_SRGB_BLOCK = 157,
            DATA_FORMAT_ASTC_5x4_UNORM_BLOCK = 158,
            DATA_FORMAT_ASTC_5x4_SRGB_BLOCK = 159,
            DATA_FORMAT_ASTC_5x5_UNORM_BLOCK = 160,
            DATA_FORMAT_ASTC_5x5_SRGB_BLOCK = 161,
            DATA_FORMAT_ASTC_6x5_UNORM_BLOCK = 162,
            DATA_FORMAT_ASTC_6x5_SRGB_BLOCK = 163,
            DATA_FORMAT_ASTC_6x6_UNORM_BLOCK = 164,
            DATA_FORMAT_ASTC_6x6_SRGB_BLOCK = 165,
            DATA_FORMAT_ASTC_8x5_UNORM_BLOCK = 166,
            DATA_FORMAT_ASTC_8x5_SRGB_BLOCK = 167,
            DATA_FORMAT_ASTC_8x6_UNORM_BLOCK = 168,
            DATA_FORMAT_ASTC_8x6_SRGB_BLOCK = 169,
            DATA_FORMAT_ASTC_8x8_UNORM_BLOCK = 170,
            DATA_FORMAT_ASTC_8x8_SRGB_BLOCK = 171,
            DATA_FORMAT_ASTC_10x5_UNORM_BLOCK = 172,
            DATA_FORMAT_ASTC_10x5_SRGB_BLOCK = 173,
            DATA_FORMAT_ASTC_10x6_UNORM_BLOCK = 174,
            DATA_FORMAT_ASTC_10x6_SRGB_BLOCK = 175,
            DATA_FORMAT_ASTC_10x8_UNORM_BLOCK = 176,
            DATA_FORMAT_ASTC_10x8_SRGB_BLOCK = 177,
            DATA_FORMAT_ASTC_10x10_UNORM_BLOCK = 178,
            DATA_FORMAT_ASTC_10x10_SRGB_BLOCK = 179,
            DATA_FORMAT_ASTC_12x10_UNORM_BLOCK = 180,
            DATA_FORMAT_ASTC_12x10_SRGB_BLOCK = 181,
            DATA_FORMAT_ASTC_12x12_UNORM_BLOCK = 182,
            DATA_FORMAT_ASTC_12x12_SRGB_BLOCK = 183,
            DATA_FORMAT_G8B8G8R8_422_UNORM = 184,
            DATA_FORMAT_B8G8R8G8_422_UNORM = 185,
            DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM = 186,
            DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM = 187,
            DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM = 188,
            DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM = 189,
            DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM = 190,
            DATA_FORMAT_R10X6_UNORM_PACK16 = 191,
            DATA_FORMAT_R10X6G10X6_UNORM_2PACK16 = 192,
            DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 193,
            DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 194,
            DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 195,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 196,
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 197,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 198,
            DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 199,
            DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 200,
            DATA_FORMAT_R12X4_UNORM_PACK16 = 201,
            DATA_FORMAT_R12X4G12X4_UNORM_2PACK16 = 202,
            DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 203,
            DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 204,
            DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 205,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 206,
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 207,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 208,
            DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 209,
            DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 210,
            DATA_FORMAT_G16B16G16R16_422_UNORM = 211,
            DATA_FORMAT_B16G16R16G16_422_UNORM = 212,
            DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM = 213,
            DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM = 214,
            DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM = 215,
            DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM = 216,
            DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM = 217,
            DATA_FORMAT_MAX = 218,
        }
        enum BarrierMask {
            BARRIER_MASK_VERTEX = 1,
            BARRIER_MASK_FRAGMENT = 8,
            BARRIER_MASK_COMPUTE = 2,
            BARRIER_MASK_TRANSFER = 4,
            BARRIER_MASK_RASTER = 9,
            BARRIER_MASK_ALL_BARRIERS = 32767,
            BARRIER_MASK_NO_BARRIER = 32768,
        }
        enum TextureType {
            TEXTURE_TYPE_1D = 0,
            TEXTURE_TYPE_2D = 1,
            TEXTURE_TYPE_3D = 2,
            TEXTURE_TYPE_CUBE = 3,
            TEXTURE_TYPE_1D_ARRAY = 4,
            TEXTURE_TYPE_2D_ARRAY = 5,
            TEXTURE_TYPE_CUBE_ARRAY = 6,
            TEXTURE_TYPE_MAX = 7,
        }
        enum TextureSamples {
            TEXTURE_SAMPLES_1 = 0,
            TEXTURE_SAMPLES_2 = 1,
            TEXTURE_SAMPLES_4 = 2,
            TEXTURE_SAMPLES_8 = 3,
            TEXTURE_SAMPLES_16 = 4,
            TEXTURE_SAMPLES_32 = 5,
            TEXTURE_SAMPLES_64 = 6,
            TEXTURE_SAMPLES_MAX = 7,
        }
        enum TextureUsageBits {
            TEXTURE_USAGE_SAMPLING_BIT = 1,
            TEXTURE_USAGE_COLOR_ATTACHMENT_BIT = 2,
            TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT = 4,
            TEXTURE_USAGE_STORAGE_BIT = 8,
            TEXTURE_USAGE_STORAGE_ATOMIC_BIT = 16,
            TEXTURE_USAGE_CPU_READ_BIT = 32,
            TEXTURE_USAGE_CAN_UPDATE_BIT = 64,
            TEXTURE_USAGE_CAN_COPY_FROM_BIT = 128,
            TEXTURE_USAGE_CAN_COPY_TO_BIT = 256,
            TEXTURE_USAGE_INPUT_ATTACHMENT_BIT = 512,
        }
        enum TextureSwizzle {
            TEXTURE_SWIZZLE_IDENTITY = 0,
            TEXTURE_SWIZZLE_ZERO = 1,
            TEXTURE_SWIZZLE_ONE = 2,
            TEXTURE_SWIZZLE_R = 3,
            TEXTURE_SWIZZLE_G = 4,
            TEXTURE_SWIZZLE_B = 5,
            TEXTURE_SWIZZLE_A = 6,
            TEXTURE_SWIZZLE_MAX = 7,
        }
        enum TextureSliceType {
            TEXTURE_SLICE_2D = 0,
            TEXTURE_SLICE_CUBEMAP = 1,
            TEXTURE_SLICE_3D = 2,
        }
        enum SamplerFilter {
            SAMPLER_FILTER_NEAREST = 0,
            SAMPLER_FILTER_LINEAR = 1,
        }
        enum SamplerRepeatMode {
            SAMPLER_REPEAT_MODE_REPEAT = 0,
            SAMPLER_REPEAT_MODE_MIRRORED_REPEAT = 1,
            SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE = 2,
            SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER = 3,
            SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE = 4,
            SAMPLER_REPEAT_MODE_MAX = 5,
        }
        enum SamplerBorderColor {
            SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK = 0,
            SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK = 1,
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK = 2,
            SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK = 3,
            SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE = 4,
            SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE = 5,
            SAMPLER_BORDER_COLOR_MAX = 6,
        }
        enum VertexFrequency {
            VERTEX_FREQUENCY_VERTEX = 0,
            VERTEX_FREQUENCY_INSTANCE = 1,
        }
        enum IndexBufferFormat {
            INDEX_BUFFER_FORMAT_UINT16 = 0,
            INDEX_BUFFER_FORMAT_UINT32 = 1,
        }
        enum StorageBufferUsage {
            STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT = 1,
        }
        enum UniformType {
            UNIFORM_TYPE_SAMPLER = 0,
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE = 1,
            UNIFORM_TYPE_TEXTURE = 2,
            UNIFORM_TYPE_IMAGE = 3,
            UNIFORM_TYPE_TEXTURE_BUFFER = 4,
            UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER = 5,
            UNIFORM_TYPE_IMAGE_BUFFER = 6,
            UNIFORM_TYPE_UNIFORM_BUFFER = 7,
            UNIFORM_TYPE_STORAGE_BUFFER = 8,
            UNIFORM_TYPE_INPUT_ATTACHMENT = 9,
            UNIFORM_TYPE_MAX = 10,
        }
        enum RenderPrimitive {
            RENDER_PRIMITIVE_POINTS = 0,
            RENDER_PRIMITIVE_LINES = 1,
            RENDER_PRIMITIVE_LINES_WITH_ADJACENCY = 2,
            RENDER_PRIMITIVE_LINESTRIPS = 3,
            RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY = 4,
            RENDER_PRIMITIVE_TRIANGLES = 5,
            RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY = 6,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS = 7,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY = 8,
            RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX = 9,
            RENDER_PRIMITIVE_TESSELATION_PATCH = 10,
            RENDER_PRIMITIVE_MAX = 11,
        }
        enum PolygonCullMode {
            POLYGON_CULL_DISABLED = 0,
            POLYGON_CULL_FRONT = 1,
            POLYGON_CULL_BACK = 2,
        }
        enum PolygonFrontFace {
            POLYGON_FRONT_FACE_CLOCKWISE = 0,
            POLYGON_FRONT_FACE_COUNTER_CLOCKWISE = 1,
        }
        enum StencilOperation {
            STENCIL_OP_KEEP = 0,
            STENCIL_OP_ZERO = 1,
            STENCIL_OP_REPLACE = 2,
            STENCIL_OP_INCREMENT_AND_CLAMP = 3,
            STENCIL_OP_DECREMENT_AND_CLAMP = 4,
            STENCIL_OP_INVERT = 5,
            STENCIL_OP_INCREMENT_AND_WRAP = 6,
            STENCIL_OP_DECREMENT_AND_WRAP = 7,
            STENCIL_OP_MAX = 8,
        }
        enum CompareOperator {
            COMPARE_OP_NEVER = 0,
            COMPARE_OP_LESS = 1,
            COMPARE_OP_EQUAL = 2,
            COMPARE_OP_LESS_OR_EQUAL = 3,
            COMPARE_OP_GREATER = 4,
            COMPARE_OP_NOT_EQUAL = 5,
            COMPARE_OP_GREATER_OR_EQUAL = 6,
            COMPARE_OP_ALWAYS = 7,
            COMPARE_OP_MAX = 8,
        }
        enum LogicOperation {
            LOGIC_OP_CLEAR = 0,
            LOGIC_OP_AND = 1,
            LOGIC_OP_AND_REVERSE = 2,
            LOGIC_OP_COPY = 3,
            LOGIC_OP_AND_INVERTED = 4,
            LOGIC_OP_NO_OP = 5,
            LOGIC_OP_XOR = 6,
            LOGIC_OP_OR = 7,
            LOGIC_OP_NOR = 8,
            LOGIC_OP_EQUIVALENT = 9,
            LOGIC_OP_INVERT = 10,
            LOGIC_OP_OR_REVERSE = 11,
            LOGIC_OP_COPY_INVERTED = 12,
            LOGIC_OP_OR_INVERTED = 13,
            LOGIC_OP_NAND = 14,
            LOGIC_OP_SET = 15,
            LOGIC_OP_MAX = 16,
        }
        enum BlendFactor {
            BLEND_FACTOR_ZERO = 0,
            BLEND_FACTOR_ONE = 1,
            BLEND_FACTOR_SRC_COLOR = 2,
            BLEND_FACTOR_ONE_MINUS_SRC_COLOR = 3,
            BLEND_FACTOR_DST_COLOR = 4,
            BLEND_FACTOR_ONE_MINUS_DST_COLOR = 5,
            BLEND_FACTOR_SRC_ALPHA = 6,
            BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = 7,
            BLEND_FACTOR_DST_ALPHA = 8,
            BLEND_FACTOR_ONE_MINUS_DST_ALPHA = 9,
            BLEND_FACTOR_CONSTANT_COLOR = 10,
            BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = 11,
            BLEND_FACTOR_CONSTANT_ALPHA = 12,
            BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = 13,
            BLEND_FACTOR_SRC_ALPHA_SATURATE = 14,
            BLEND_FACTOR_SRC1_COLOR = 15,
            BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = 16,
            BLEND_FACTOR_SRC1_ALPHA = 17,
            BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = 18,
            BLEND_FACTOR_MAX = 19,
        }
        enum BlendOperation {
            BLEND_OP_ADD = 0,
            BLEND_OP_SUBTRACT = 1,
            BLEND_OP_REVERSE_SUBTRACT = 2,
            BLEND_OP_MINIMUM = 3,
            BLEND_OP_MAXIMUM = 4,
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
            INITIAL_ACTION_CLEAR = 0,
            INITIAL_ACTION_CLEAR_REGION = 1,
            INITIAL_ACTION_CLEAR_REGION_CONTINUE = 2,
            INITIAL_ACTION_KEEP = 3,
            INITIAL_ACTION_DROP = 4,
            INITIAL_ACTION_CONTINUE = 5,
            INITIAL_ACTION_MAX = 6,
        }
        enum FinalAction {
            FINAL_ACTION_READ = 0,
            FINAL_ACTION_DISCARD = 1,
            FINAL_ACTION_CONTINUE = 2,
            FINAL_ACTION_MAX = 3,
        }
        enum ShaderStage {
            SHADER_STAGE_VERTEX = 0,
            SHADER_STAGE_FRAGMENT = 1,
            SHADER_STAGE_TESSELATION_CONTROL = 2,
            SHADER_STAGE_TESSELATION_EVALUATION = 3,
            SHADER_STAGE_COMPUTE = 4,
            SHADER_STAGE_MAX = 5,
            SHADER_STAGE_VERTEX_BIT = 1,
            SHADER_STAGE_FRAGMENT_BIT = 2,
            SHADER_STAGE_TESSELATION_CONTROL_BIT = 4,
            SHADER_STAGE_TESSELATION_EVALUATION_BIT = 8,
            SHADER_STAGE_COMPUTE_BIT = 16,
        }
        enum ShaderLanguage {
            SHADER_LANGUAGE_GLSL = 0,
            SHADER_LANGUAGE_HLSL = 1,
        }
        enum PipelineSpecializationConstantType {
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL = 0,
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT = 1,
            PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT = 2,
        }
        enum Limit {
            LIMIT_MAX_BOUND_UNIFORM_SETS = 0,
            LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS = 1,
            LIMIT_MAX_TEXTURES_PER_UNIFORM_SET = 2,
            LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET = 3,
            LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET = 4,
            LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET = 5,
            LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET = 6,
            LIMIT_MAX_DRAW_INDEXED_INDEX = 7,
            LIMIT_MAX_FRAMEBUFFER_HEIGHT = 8,
            LIMIT_MAX_FRAMEBUFFER_WIDTH = 9,
            LIMIT_MAX_TEXTURE_ARRAY_LAYERS = 10,
            LIMIT_MAX_TEXTURE_SIZE_1D = 11,
            LIMIT_MAX_TEXTURE_SIZE_2D = 12,
            LIMIT_MAX_TEXTURE_SIZE_3D = 13,
            LIMIT_MAX_TEXTURE_SIZE_CUBE = 14,
            LIMIT_MAX_TEXTURES_PER_SHADER_STAGE = 15,
            LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE = 16,
            LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE = 17,
            LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE = 18,
            LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE = 19,
            LIMIT_MAX_PUSH_CONSTANT_SIZE = 20,
            LIMIT_MAX_UNIFORM_BUFFER_SIZE = 21,
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET = 22,
            LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES = 23,
            LIMIT_MAX_VERTEX_INPUT_BINDINGS = 24,
            LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE = 25,
            LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 26,
            LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE = 27,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X = 28,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y = 29,
            LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z = 30,
            LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS = 31,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X = 32,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y = 33,
            LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z = 34,
            LIMIT_MAX_VIEWPORT_DIMENSIONS_X = 35,
            LIMIT_MAX_VIEWPORT_DIMENSIONS_Y = 36,
        }
        enum MemoryType {
            MEMORY_TEXTURES = 0,
            MEMORY_BUFFERS = 1,
            MEMORY_TOTAL = 2,
        }
    }
    /** Abstraction for working with modern low-level graphics APIs. */
    class RenderingDevice extends Object {
        static readonly INVALID_ID = -1
        static readonly INVALID_FORMAT_ID = -1
        /** Creates a new texture. It can be accessed with the RID that is returned.
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
         *  [b]Note:[/b] Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.
         */
        texture_create(format: RDTextureFormat, view: RDTextureView, data: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
        texture_create_shared(view: RDTextureView, with_texture: RID): RID
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared]
         *  For 2D textures (which only have one layer), [param layer] must be [code]0[/code].
         *  [b]Note:[/b] Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.
         */
        texture_create_shared_from_slice(view: RDTextureView, with_texture: RID, layer: number /*i64*/, mipmap: number /*i64*/, mipmaps: number /*i64*/ = 1, slice_type: RenderingDevice.TextureSliceType = 0): RID
        /** Returns an RID for an existing [param image] ([code]VkImage[/code]) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], and [param layers]. This can be used to allow Godot to render onto foreign images. */
        texture_create_from_extension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usage_flags: RenderingDevice.TextureUsageBits, image: number /*i64*/, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, layers: number /*i64*/): RID
        /** Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be [code]0[/code]. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
         *  [b]Note:[/b] Updating textures is forbidden during creation of a draw or compute list.
         *  [b]Note:[/b] The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.
         *  [b]Note:[/b] The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.
         */
        texture_update(texture: RID, layer: number /*i64*/, data: PackedByteArray, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        /** Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be [code]0[/code].
         *  [b]Note:[/b] [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and a empty [PackedByteArray] is returned.
         *  [b]Note:[/b] [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and a empty [PackedByteArray] is returned.
         */
        texture_get_data(texture: RID, layer: number /*i64*/): PackedByteArray
        /** Returns [code]true[/code] if the specified [param format] is supported for the given [param usage_flags], [code]false[/code] otherwise. */
        texture_is_format_supported_for_usage(format: RenderingDevice.DataFormat, usage_flags: RenderingDevice.TextureUsageBits): boolean
        /** Returns [code]true[/code] if the [param texture] is shared, [code]false[/code] otherwise. See [RDTextureView]. */
        texture_is_shared(texture: RID): boolean
        /** Returns [code]true[/code] if the [param texture] is valid, [code]false[/code] otherwise. */
        texture_is_valid(texture: RID): boolean
        /** Copies the [param from_texture] to [param to_texture] with the specified [param from_pos], [param to_pos] and [param size] coordinates. The Z axis of the [param from_pos], [param to_pos] and [param size] must be [code]0[/code] for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being [code]0[/code] for textures without mipmaps or single-layer textures. Returns [constant @GlobalScope.OK] if the texture copy was successful or [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
         *  [b]Note:[/b] [param from_texture] texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.
         *  [b]Note:[/b] [param from_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.
         *  [b]Note:[/b] [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.
         *  [b]Note:[/b] [param to_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.
         *  [b]Note:[/b] [param from_texture] and [param to_texture] must be of the same type (color or depth).
         */
        texture_copy(from_texture: RID, to_texture: RID, from_pos: Vector3, to_pos: Vector3, size: Vector3, src_mipmap: number /*i64*/, dst_mipmap: number /*i64*/, src_layer: number /*i64*/, dst_layer: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        /** Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be [code]0[/code] and [param layer_count] must be [code]1[/code].
         *  [b]Note:[/b] [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.
         */
        texture_clear(texture: RID, color: Color, base_mipmap: number /*i64*/, mipmap_count: number /*i64*/, base_layer: number /*i64*/, layer_count: number /*i64*/, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        /** Resolves the [param from_texture] texture onto [param to_texture] with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [constant @GlobalScope.OK] if successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
         *  [b]Note:[/b] [param from_texture] and [param to_texture] textures must have the same dimension, format and type (color or depth).
         *  [b]Note:[/b] [param from_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.
         *  [b]Note:[/b] [param from_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.
         *  [b]Note:[/b] [param from_texture] must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
         *  [b]Note:[/b] [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.
         *  [b]Note:[/b] [param to_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.
         *  [b]Note:[/b] [param to_texture] texture must [b]not[/b] be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
         */
        texture_resolve_multisample(from_texture: RID, to_texture: RID, post_barrier: RenderingDevice.BarrierMask = 32767): GodotError
        /** Returns the data format used to create this texture. */
        texture_get_format(texture: RID): RDTextureFormat
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
         *  [b]Note:[/b] This function returns a [code]uint64_t[/code] which internally maps to a [code]GLuint[/code] (OpenGL) or [code]VkImage[/code] (Vulkan).
         */
        texture_get_native_handle(texture: RID): number /*i64*/
        /** Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.
         *  If [param view_count] is greater than or equal to [code]2[/code], enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.
         */
        framebuffer_format_create(attachments: Array, view_count: number /*i64*/ = 1): number /*i64*/
        /** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to [code]2[/code], enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
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
        /** Returns [code]true[/code] if the framebuffer specified by the [param framebuffer] RID is valid, [code]false[/code] otherwise. */
        framebuffer_is_valid(framebuffer: RID): boolean
        /** Creates a new sampler. It can be accessed with the RID that is returned.
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
         */
        sampler_create(state: RDSamplerState): RID
        /** Returns [code]true[/code] if implementation supports using a texture of [param format] with the given [param sampler_filter]. */
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
         *  If [param allow_cache] is [code]true[/code], make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If [param allow_cache] is [code]false[/code], Godot's shader cache is ignored and the shader will always be recompiled.
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
        /** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. [code]layout(location = ...)[/code]) of the input variables (specified in GLSL by the [code]in[/code] keyword). */
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
        /** Returns [code]true[/code] if the render pipeline specified by the [param render_pipeline] RID is valid, [code]false[/code] otherwise. */
        render_pipeline_is_valid(render_pipeline: RID): boolean
        /** Creates a new compute pipeline. It can be accessed with the RID that is returned.
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
         */
        compute_pipeline_create(shader: RID, specialization_constants: Array = <any> {} /*compound.type from 28([object Object])*/): RID
        /** Returns [code]true[/code] if the compute pipeline specified by the [param compute_pipeline] RID is valid, [code]false[/code] otherwise. */
        compute_pipeline_is_valid(compute_pipeline: RID): boolean
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the [i]window[/i] size. See also [method screen_get_height].
         *  [b]Note:[/b] Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
         */
        screen_get_width(screen: number /*i64*/ = 0): number /*i64*/
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the [i]window[/i] size. See also [method screen_get_width].
         *  [b]Note:[/b] Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
         */
        screen_get_height(screen: number /*i64*/ = 0): number /*i64*/
        /** Returns the screen's framebuffer format.
         *  [b]Note:[/b] Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
         */
        screen_get_framebuffer_format(): number /*i64*/
        /** High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.
         *  [b]Note:[/b] Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].
         */
        draw_list_begin_for_screen(screen: number /*i64*/ = 0, clear_color: Color = new Color(0, 0, 0, 1)): number /*i64*/
        /** Starts a list of raster drawing commands created with the [code]draw_*[/code] methods. The returned value should be passed to other [code]draw_list_*[/code] functions.
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
        /** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from [code]0[/code] that must match the one expected by the draw list. */
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
         *  [b]Note:[/b] The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.
         */
        draw_list_enable_scissor(draw_list: number /*i64*/, rect: Rect2 = <any> {} /*compound.type from 7([object Object])*/): void
        /** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
        draw_list_disable_scissor(draw_list: number /*i64*/): void
        /** Switches to the next draw pass and returns the split's ID. Equivalent to [method draw_list_switch_to_next_pass_split] with [code]splits[/code] set to [code]1[/code]. */
        draw_list_switch_to_next_pass(): number /*i64*/
        /** Switches to the next draw pass, with the number of splits allocated specified in [param splits]. The return value is an array containing the ID of each split. For single-split usage, see [method draw_list_switch_to_next_pass]. */
        draw_list_switch_to_next_pass_split(splits: number /*i64*/): PackedInt64Array
        /** Finishes a list of raster drawing commands created with the [code]draw_*[/code] methods. */
        draw_list_end(post_barrier: RenderingDevice.BarrierMask = 32767): void
        /** Starts a list of compute commands created with the [code]compute_*[/code] methods. The returned value should be passed to other [code]compute_list_*[/code] functions.
         *  If [param allow_draw_overlap] is [code]true[/code], you may have one draw list running at the same time as one compute list. Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].
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
        /** Finishes a list of compute commands created with the [code]compute_*[/code] methods. */
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
         *  [b]Note:[/b] Only available in local RenderingDevices.
         */
        submit(): void
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.
         *  [b]Note:[/b] Only available in local RenderingDevices.
         *  [b]Note:[/b] [method sync] can only be called after a [method submit].
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
         *  [b]Note:[/b] Resource names are only set when the engine runs in verbose mode ([method OS.is_stdout_verbose] = [code]true[/code]), or when using an engine build compiled with the [code]dev_mode=yes[/code] SCons option. The graphics driver must also support the [code]VK_EXT_DEBUG_UTILS_EXTENSION_NAME[/code] Vulkan extension for named resources to work.
         */
        set_resource_name(id: RID, name: string): void
        /** Create a command buffer debug label region that can be displayed in third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url]. All regions must be ended with a [method draw_command_end_label] call. When viewed from the linear series of submissions to a single queue, calls to [method draw_command_begin_label] and [method draw_command_end_label] must be matched and balanced.
         *  The [code]VK_EXT_DEBUG_UTILS_EXTENSION_NAME[/code] Vulkan extension must be available and enabled for command buffer debug label region to work. See also [method draw_command_insert_label] and [method draw_command_end_label].
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
        readonly reparent: Signal
    }
    class ReplicationEditor extends VBoxContainer {
        _update_config(): void
        _update_value(property: NodePath, column: number /*i64*/, value: number /*i64*/): void
    }
    /** Base class for serializable objects. */
    class Resource extends RefCounted {
        /* gdvirtual */ _get_rid(): RID
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
        /** If [member resource_local_to_scene] is set to [code]true[/code] and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns [code]null[/code]. */
        get_local_scene(): Node
        /** Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to [code]true[/code], this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance.
         *  [i]Deprecated.[/i] This method should only be called internally. Override [method _setup_local_to_scene] instead.
         */
        setup_local_to_scene(): void
        /** Emits the [signal changed] signal. This method is called automatically for some built-in resources.
         *  [b]Note:[/b] For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [Object]s depending on the resource are properly updated.
         *  
         */
        emit_changed(): void
        /** Duplicates this resource, returning a new resource with its [code]export[/code]ed or [constant PROPERTY_USAGE_STORAGE] properties copied from the original.
         *  If [param subresources] is [code]false[/code], a shallow copy is returned; nested resources within subresources are not duplicated and are shared from the original resource. If [param subresources] is [code]true[/code], a deep copy is returned; nested subresources will be duplicated and are not shared.
         *  Subresource properties with the [constant PROPERTY_USAGE_ALWAYS_DUPLICATE] flag are always duplicated even with [param subresources] set to [code]false[/code], and properties with the [constant PROPERTY_USAGE_NEVER_DUPLICATE] flag are never duplicated even with [param subresources] set to [code]true[/code].
         *  [b]Note:[/b] For custom resources, this method will fail if [method Object._init] has been defined with required parameters.
         */
        duplicate(subresources: boolean = false): Resource
        /** If [code]true[/code], the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [method PackedScene.instantiate]).
         *  [b]Note:[/b] Changing this property at run-time has no effect on already created duplicate resources.
         */
        resource_local_to_scene: boolean
        /** The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.
         *  [b]Note:[/b] Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].
         */
        resource_path: string
        /** An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.
         *  [b]Note:[/b] Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.
         */
        resource_name: string
        readonly changed: Signal
        readonly setup_local_to_scene_requested: Signal
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
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _recognize_path(path: string, type: StringName): boolean
        /* gdvirtual */ _handles_type(type: StringName): boolean
        /* gdvirtual */ _get_resource_type(path: string): string
        /* gdvirtual */ _get_resource_script_class(path: string): string
        /* gdvirtual */ _get_resource_uid(path: string): number /*i64*/
        /* gdvirtual */ _get_dependencies(path: string, add_types: boolean): PackedStringArray
        /* gdvirtual */ _rename_dependencies(path: string, renames: Dictionary): GodotError
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _get_classes_used(path: string): PackedStringArray
        /* gdvirtual */ _load(path: string, original_path: string, use_sub_threads: boolean, cache_mode: number /*i64*/): void
    }
    /** Saves a specific resource type to a file. */
    class ResourceFormatSaver extends RefCounted {
        /* gdvirtual */ _save(resource: Resource, path: string, flags: number /*i64*/): GodotError
        /* gdvirtual */ _set_uid(path: string, uid: number /*i64*/): GodotError
        /* gdvirtual */ _recognize(resource: Resource): boolean
        /* gdvirtual */ _get_recognized_extensions(resource: Resource): PackedStringArray
        /* gdvirtual */ _recognize_path(resource: Resource, path: string): boolean
    }
    namespace ResourceImporter {
        enum ImportOrder {
            IMPORT_ORDER_DEFAULT = 0,
            IMPORT_ORDER_SCENE = 100,
        }
    }
    /** Base class for resource importers. */
    class ResourceImporter extends RefCounted {
    }
    /** Imports a bitmap font in the BMFont ([code].fnt[/code]) format. */
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
        /** Returns [code]true[/code] if the preloader contains a resource associated to [param name]. */
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
            SHAPE_FLAT = 0,
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
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than [code]0[/code], the faces will be inverted. */
        curve: Curve
    }
    /** A custom effect for a [RichTextLabel]. */
    class RichTextEffect extends Resource {
        /* gdvirtual */ _process_custom_fx(char_fx: CharFXTransform): boolean
    }
    namespace RichTextLabel {
        enum ListType {
            LIST_NUMBERS = 0,
            LIST_LETTERS = 1,
            LIST_ROMAN = 2,
            LIST_DOTS = 3,
        }
        enum MenuItems {
            MENU_COPY = 0,
            MENU_SELECT_ALL = 1,
            MENU_MAX = 2,
        }
        enum ImageUpdateMask {
            UPDATE_TEXTURE = 1,
            UPDATE_SIZE = 2,
            UPDATE_COLOR = 4,
            UPDATE_ALIGNMENT = 8,
            UPDATE_REGION = 16,
            UPDATE_PAD = 32,
            UPDATE_TOOLTIP = 64,
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
        /** Removes a paragraph of content from the label. Returns [code]true[/code] if the paragraph exists.
         *  The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval [code][0, get_paragraph_count() - 1][/code].
         */
        remove_paragraph(paragraph: number /*i64*/): boolean
        /** Adds a [code skip-lint][font][/code] tag to the tag stack. Overrides default fonts for its duration.
         *  Passing [code]0[/code] to [param font_size] will use the existing default font size.
         */
        push_font(font: Font, font_size: number /*i64*/ = 0): void
        /** Adds a [code skip-lint][font_size][/code] tag to the tag stack. Overrides default font size for its duration. */
        push_font_size(font_size: number /*i64*/): void
        /** Adds a [code skip-lint][font][/code] tag with a normal font to the tag stack. */
        push_normal(): void
        /** Adds a [code skip-lint][font][/code] tag with a bold font to the tag stack. This is the same as adding a [code skip-lint][b][/code] tag if not currently in a [code skip-lint][i][/code] tag. */
        push_bold(): void
        /** Adds a [code skip-lint][font][/code] tag with a bold italics font to the tag stack. */
        push_bold_italics(): void
        /** Adds a [code skip-lint][font][/code] tag with an italics font to the tag stack. This is the same as adding an [code skip-lint][i][/code] tag if not currently in a [code skip-lint][b][/code] tag. */
        push_italics(): void
        /** Adds a [code skip-lint][font][/code] tag with a monospace font to the tag stack. */
        push_mono(): void
        /** Adds a [code skip-lint][color][/code] tag to the tag stack. */
        push_color(color: Color): void
        /** Adds a [code skip-lint][outline_size][/code] tag to the tag stack. Overrides default text outline size for its duration. */
        push_outline_size(outline_size: number /*i64*/): void
        /** Adds a [code skip-lint][outline_color][/code] tag to the tag stack. Adds text outline for its duration. */
        push_outline_color(color: Color): void
        /** Adds a [code skip-lint][p][/code] tag to the tag stack. */
        push_paragraph(alignment: HorizontalAlignment, base_direction: Control.TextDirection = 0, language: string = '', st_parser: TextServer.StructuredTextParser = 0, justification_flags: TextServer.JustificationFlag = 163, tab_stops: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/): void
        /** Adds an [code skip-lint][indent][/code] tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_indent(level: number /*i64*/): void
        /** Adds [code skip-lint][ol][/code] or [code skip-lint][ul][/code] tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        push_list(level: number /*i64*/, type: RichTextLabel.ListType, capitalize: boolean, bullet: string = '•'): void
        /** Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint][url=something]{text}[/url][/code], but supports non-[String] metadata types.
         *  [b]Note:[/b] Meta tags do nothing by default when clicked. To assign behavior when clicked, connect [signal meta_clicked] to a function that is called when the meta tag is clicked.
         */
        push_meta(data: any): void
        /** Adds a [code skip-lint][hint][/code] tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint][/code]. */
        push_hint(description: string): void
        /** Adds language code used for text shaping algorithm and Open-Type font features. */
        push_language(language: string): void
        /** Adds a [code skip-lint][u][/code] tag to the tag stack. */
        push_underline(): void
        /** Adds a [code skip-lint][s][/code] tag to the tag stack. */
        push_strikethrough(): void
        /** Adds a [code skip-lint][table=columns,inline_align][/code] tag to the tag stack. */
        push_table(columns: number /*i64*/, inline_align: InlineAlignment = 0, align_to_row: number /*i64*/ = -1): void
        /** Adds a [code skip-lint][dropcap][/code] tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        push_dropcap(string_: string, font: Font, size: number /*i64*/, dropcap_margins: Rect2 = <any> {} /*compound.type from 7([object Object])*/, color: Color = new Color(1, 1, 1, 1), outline_size: number /*i64*/ = 0, outline_color: Color = new Color(0, 0, 0, 0)): void
        /** Edits the selected column's expansion options. If [param expand] is [code]true[/code], the column expands in proportion to its expansion ratio versus the other columns' ratios.
         *  For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.
         *  If [param expand] is [code]false[/code], the column will not contribute to the total ratio.
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
        /** Adds a [code skip-lint][cell][/code] tag to the tag stack. Must be inside a [code skip-lint][table][/code] tag. See [method push_table] for details. */
        push_cell(): void
        /** Adds a [code skip-lint][fgcolor][/code] tag to the tag stack. */
        push_fgcolor(fgcolor: Color): void
        /** Adds a [code skip-lint][bgcolor][/code] tag to the tag stack. */
        push_bgcolor(bgcolor: Color): void
        /** Adds a custom effect tag to the tag stack. The effect does not need to be in [member custom_effects]. The environment is directly passed to the effect. */
        push_customfx(effect: RichTextEffect, env: Dictionary): void
        /** Adds a context marker to the tag stack. See [method pop_context]. */
        push_context(): void
        /** Terminates tags opened after the last [method push_context] call (including context marker), or all tags if there's no context marker on the stack. */
        pop_context(): void
        /** Terminates the current tag. Use after [code]push_*[/code] methods to close BBCodes manually. Does not need to follow [code]add_*[/code] methods. */
        pop(): void
        /** Terminates all tags opened by [code]push_*[/code] methods. */
        pop_all(): void
        /** Clears the tag stack.
         *  [b]Note:[/b] This method will not modify [member text], but setting [member text] to an empty string also clears the stack.
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
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
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
        /** Returns the current selection first character index if a selection is active, [code]-1[/code] otherwise. Does not include BBCodes. */
        get_selection_from(): number /*i64*/
        /** Returns the current selection last character index if a selection is active, [code]-1[/code] otherwise. Does not include BBCodes. */
        get_selection_to(): number /*i64*/
        /** Select all the text.
         *  If [member selection_enabled] is [code]false[/code], no selection will occur.
         */
        select_all(): void
        /** Returns the current selection text. Does not include BBCodes. */
        get_selected_text(): string
        /** Clears the current selection. */
        deselect(): void
        /** The assignment version of [method append_text]. Clears the tag stack and inserts the new content. */
        parse_bbcode(bbcode: string): void
        /** Parses [param bbcode] and adds tags to the tag stack as needed.
         *  [b]Note:[/b] Using this method, you can't close a tag that was opened in a previous [method append_text] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member text] instead of using [method append_text].
         */
        append_text(bbcode: string): void
        get_text(): string
        /** If [member threaded] is enabled, returns [code]true[/code] if the background thread has finished text processing, otherwise always return [code]true[/code]. */
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
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_character_line(character: number /*i64*/): number /*i64*/
        /** Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_character_paragraph(character: number /*i64*/): number /*i64*/
        /** Returns the total number of characters from text tags. Does not include BBCodes. */
        get_total_character_count(): number /*i64*/
        set_use_bbcode(enable: boolean): void
        is_using_bbcode(): boolean
        /** Returns the total number of lines in the text. Wrapped text is counted as multiple lines.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_line_count(): number /*i64*/
        /** Returns the number of visible lines.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_visible_line_count(): number /*i64*/
        /** Returns the total number of paragraphs (newlines or [code]p[/code] tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
        get_paragraph_count(): number /*i64*/
        /** Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_visible_paragraph_count(): number /*i64*/
        /** Returns the height of the content.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_content_height(): number /*i64*/
        /** Returns the width of the content.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_content_width(): number /*i64*/
        /** Returns the vertical offset of the line found at the provided index.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
         */
        get_line_offset(line: number /*i64*/): number /*f64*/
        /** Returns the vertical offset of the paragraph found at the provided index.
         *  [b]Note:[/b] If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
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
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_menu(): PopupMenu
        /** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        _thread_end(): void
        /** If [code]true[/code], the label uses BBCode formatting. */
        bbcode_enabled: boolean
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.
         *  [b]Note:[/b] If [member bbcode_enabled] is [code]true[/code], it is unadvised to use the [code]+=[/code] operator with [member text] (e.g. [code]text += "some string"[/code]) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using [code]push_*[/code] methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.
         */
        text: string
        /** If [code]true[/code], the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
        fit_content: boolean
        /** If [code]true[/code], the scrollbar is visible. Setting this to [code]false[/code] does not block scrolling completely. See [method scroll_to_line]. */
        scroll_active: boolean
        /** If [code]true[/code], the window scrolls down to display new content automatically. */
        scroll_following: boolean
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        /** The number of spaces associated with a single tab length. Does not affect [code]\t[/code] in text tags, only indent tags. */
        tab_size: number /*i64*/
        /** If [code]true[/code], a right-click displays the context menu. */
        context_menu_enabled: boolean
        /** If [code]true[/code], shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        shortcut_keys_enabled: boolean
        /** The currently installed custom effects. This is an array of [RichTextEffect]s.
         *  To add a custom effect, it's more convenient to use [method install_effect].
         */
        custom_effects: Array
        /** If [code]true[/code], the label underlines meta tags such as [code skip-lint][url]{text}[/url][/code]. These tags can call a function when clicked if [signal meta_clicked] is connected to a function. */
        meta_underlined: boolean
        /** If [code]true[/code], the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint][/code]. */
        hint_underlined: boolean
        /** If [code]true[/code], text processing is done in a background thread. */
        threaded: boolean
        /** The delay after which the loading progress bar is displayed, in milliseconds. Set to [code]-1[/code] to disable progress bar entirely.
         *  [b]Note:[/b] Progress bar is displayed only if [member threaded] is enabled.
         */
        progress_bar_delay: number /*i64*/
        /** If [code]true[/code], the label allows text selection. */
        selection_enabled: boolean
        /** If [code]true[/code], the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        /** If [code]true[/code], allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        /** The number of characters to display. If set to [code]-1[/code], all characters are displayed. This can be useful when animating the text appearing in a dialog box.
         *  [b]Note:[/b] Setting this property updates [member visible_ratio] accordingly.
         */
        visible_characters: number /*i64*/
        /** Sets the clipping behavior when [member visible_characters] or [member visible_ratio] is set. See [enum TextServer.VisibleCharactersBehavior] for more info. */
        visible_characters_behavior: number /*i64*/
        /** The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to [code]1.0[/code], all characters are displayed. If set to [code]0.5[/code], only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.
         *  [b]Note:[/b] Setting this property updates [member visible_characters] accordingly.
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
        readonly meta_clicked: Signal
        readonly meta_hover_started: Signal
        readonly meta_hover_ended: Signal
        readonly finished: Signal
    }
    namespace RigidBody2D {
        enum FreezeMode {
            FREEZE_MODE_STATIC = 0,
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            CENTER_OF_MASS_MODE_AUTO = 0,
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
            DAMP_MODE_REPLACE = 1,
        }
        enum CCDMode {
            CCD_MODE_DISABLED = 0,
            CCD_MODE_CAST_RAY = 1,
            CCD_MODE_CAST_SHAPE = 2,
        }
    }
    /** A 2D physics body that is moved by a physics simulation. */
    class RigidBody2D extends PhysicsBody2D {
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
         *  [b]Note:[/b] To retrieve the colliding bodies, use [method get_colliding_bodies].
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
         *  [b]Note:[/b] [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].
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
         *  [b]Note:[/b] [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].
         */
        apply_torque(torque: number /*f64*/): void
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with [code]constant_force = Vector2(0, 0)[/code].
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.
         */
        add_constant_central_force(force: Vector2): void
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with [code]constant_force = Vector2(0, 0)[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = 0[/code]. */
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
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to [code]true[/code] and [member max_contacts_reported] to be set high enough to detect all the collisions.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.
         */
        get_colliding_bodies(): Array
        /** The body's mass. */
        mass: number /*f64*/
        /** The physics material override for the body.
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.
         */
        physics_material_override: PhysicsMaterial
        /** Multiplies the gravity applied to the body. The body's gravity is calculated from the [b]Default Gravity[/b] value in [b]Project > Project Settings > Physics > 2d[/b] and/or any additional gravity vector applied by [Area2D]s. */
        gravity_scale: number /*f64*/
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        center_of_mass_mode: number /*i64*/
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.
         */
        center_of_mass: Vector2
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.
         *  If set to [code]0[/code], inertia is automatically computed (default value).
         *  [b]Note:[/b] This value does not change when inertia is automatically computed. Use [PhysicsServer2D] to get the computed inertia.
         *  
         */
        inertia: number /*f64*/
        /** If [code]true[/code], the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        sleeping: boolean
        /** If [code]true[/code], the body can enter sleep mode when there is no movement. See [member sleeping]. */
        can_sleep: boolean
        /** If [code]true[/code], the body cannot rotate. Gravity and forces only apply linear movement. */
        lock_rotation: boolean
        /** If [code]true[/code], the body is frozen. Gravity and forces are not applied anymore.
         *  See [member freeze_mode] to set the body's behavior when frozen.
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.
         */
        freeze: boolean
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.
         */
        freeze_mode: number /*i64*/
        /** If [code]true[/code], internal force integration is disabled for this body. Aside from collision response, the body will only move as determined by the [method _integrate_forces] function. */
        custom_integrator: boolean
        /** Continuous collision detection mode.
         *  Continuous collision detection tries to predict where a moving body will collide instead of moving it and correcting its movement after collision. Continuous collision detection is slower, but more precise and misses fewer collisions with small, fast-moving objects. Raycasting and shapecasting methods are available. See [enum CCDMode] for details.
         */
        continuous_cd: number /*i64*/
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to [code]true[/code] to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.
         *  [b]Note:[/b] The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).
         */
        max_contacts_reported: number /*i64*/
        /** If [code]true[/code], the RigidBody2D will emit signals when it collides with another body.
         *  [b]Note:[/b] By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].
         */
        contact_monitor: boolean
        /** The body's linear velocity in pixels per second. Can be used sporadically, but [b]don't set this every frame[/b], because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector2
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        /** Damps the body's movement. By default, the body will use the [b]Default Linear Damp[/b] in [b]Project > Project Settings > Physics > 2d[/b] or any value override set by an [Area2D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.
         */
        linear_damp: number /*f64*/
        /** The body's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: number /*f64*/
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        /** Damps the body's rotation. By default, the body will use the [b]Default Angular Damp[/b] in [b]Project > Project Settings > Physics > 2d[/b] or any value override set by an [Area2D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.
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
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly sleeping_state_changed: Signal
    }
    namespace RigidBody3D {
        enum FreezeMode {
            FREEZE_MODE_STATIC = 0,
            FREEZE_MODE_KINEMATIC = 1,
        }
        enum CenterOfMassMode {
            CENTER_OF_MASS_MODE_AUTO = 0,
            CENTER_OF_MASS_MODE_CUSTOM = 1,
        }
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
            DAMP_MODE_REPLACE = 1,
        }
    }
    /** A 3D physics body that is moved by a physics simulation. */
    class RigidBody3D extends PhysicsBody3D {
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
         *  [b]Note:[/b] To retrieve the colliding bodies, use [method get_colliding_bodies].
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
         *  [b]Note:[/b] [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].
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
         *  [b]Note:[/b] [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].
         */
        apply_torque(torque: Vector3): void
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with [code]constant_force = Vector3(0, 0, 0)[/code].
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.
         */
        add_constant_central_force(force: Vector3): void
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with [code]constant_force = Vector3(0, 0, 0)[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = Vector3(0, 0, 0)[/code]. */
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
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to [code]true[/code] and [member max_contacts_reported] to be set high enough to detect all the collisions.
         *  [b]Note:[/b] The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.
         */
        get_colliding_bodies(): Array
        /** The body's mass. */
        mass: number /*f64*/
        /** The physics material override for the body.
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.
         */
        physics_material_override: PhysicsMaterial
        /** This is multiplied by the global 3D gravity setting found in [b]Project > Project Settings > Physics > 3d[/b] to produce RigidBody3D's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        gravity_scale: number /*f64*/
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        center_of_mass_mode: number /*i64*/
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.
         */
        center_of_mass: Vector3
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.
         *  If set to [constant Vector3.ZERO], inertia is automatically computed (default value).
         *  [b]Note:[/b] This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.
         *  
         */
        inertia: Vector3
        /** If [code]true[/code], the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        sleeping: boolean
        /** If [code]true[/code], the body can enter sleep mode when there is no movement. See [member sleeping]. */
        can_sleep: boolean
        /** If [code]true[/code], the body cannot rotate. Gravity and forces only apply linear movement. */
        lock_rotation: boolean
        /** If [code]true[/code], the body is frozen. Gravity and forces are not applied anymore.
         *  See [member freeze_mode] to set the body's behavior when frozen.
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.
         */
        freeze: boolean
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.
         */
        freeze_mode: number /*i64*/
        /** If [code]true[/code], internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        custom_integrator: boolean
        /** If [code]true[/code], continuous collision detection is used.
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.
         */
        continuous_cd: boolean
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to [code]true[/code] to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.
         *  [b]Note:[/b] The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).
         */
        max_contacts_reported: number /*i64*/
        /** If [code]true[/code], the RigidBody3D will emit signals when it collides with another body.
         *  [b]Note:[/b] By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].
         */
        contact_monitor: boolean
        /** The body's linear velocity in units per second. Can be used sporadically, but [b]don't set this every frame[/b], because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector3
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        /** Damps the body's movement. By default, the body will use the [b]Default Linear Damp[/b] in [b]Project > Project Settings > Physics > 3d[/b] or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.
         */
        linear_damp: number /*f64*/
        /** The RigidBody3D's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: Vector3
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        /** Damps the body's rotation. By default, the body will use the [b]Default Angular Damp[/b] in [b]Project > Project Settings > Physics > 3d[/b] or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.
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
        readonly body_shape_entered: Signal
        readonly body_shape_exited: Signal
        readonly body_entered: Signal
        readonly body_exited: Signal
        readonly sleeping_state_changed: Signal
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
        /** If [code]true[/code], the grid's points will all be on the same Y coordinate ([i]local[/i] Y = 0). If [code]false[/code], the points' original Y coordinate is preserved. */
        zero_y: boolean
    }
    class RsConsole extends RefCounted {
        process_input(p_text: string): void
        register_command(p_text: string, p_callable: Callable, p_help: string): number /*i64*/
        unregister_command(p_id: number /*i64*/): void
        find_objects(p_keyword: string): PackedStringArray
        readonly on_output: Signal
        readonly on_clear: Signal
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
        readonly game_over: Signal
        readonly damage_emitted: Signal
        readonly info_updated: Signal
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
        readonly frame_changed: Signal
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
        /** Sends the given raw [param bytes] to a specific peer identified by [param id] (see [method MultiplayerPeer.set_target_peer]). Default ID is [code]0[/code], i.e. broadcast to all peers. */
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
        /** If set to a value greater than [code]0.0[/code], the maximum amount of time peers can stay in the authenticating state, after which the authentication will automatically fail. See the [signal peer_authenticating] and [signal peer_authentication_failed] signals. */
        auth_timeout: number /*f64*/
        /** If [code]true[/code], the MultiplayerAPI will allow encoding and decoding of object during RPCs.
         *  [b]Warning:[/b] Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.
         */
        allow_object_decoding: boolean
        /** If [code]true[/code], the MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] refuses new incoming connections. */
        refuse_new_connections: boolean
        /** Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is [code]false[/code], clients won't be automatically notified of other peers and won't be able to send them packets through the server.
         *  [b]Note:[/b] Changing this option while other peers are connected may lead to unexpected behaviors.
         *  [b]Note:[/b] Support for this feature may depend on the current [MultiplayerPeer] configuration. See [method MultiplayerPeer.is_server_relay_supported].
         */
        server_relay: boolean
        /** Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [MultiplayerSynchronizer]. */
        max_sync_packet_size: number /*i64*/
        /** Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [MultiplayerSynchronizer]. */
        max_delta_packet_size: number /*i64*/
        readonly peer_authenticating: Signal
        readonly peer_authentication_failed: Signal
        readonly peer_packet: Signal
    }
    class SceneRPCInterface extends RefCounted {
    }
    namespace SceneReplicationConfig {
        enum ReplicationMode {
            REPLICATION_MODE_NEVER = 0,
            REPLICATION_MODE_ALWAYS = 1,
            REPLICATION_MODE_ON_CHANGE = 2,
        }
    }
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer]. */
    class SceneReplicationConfig extends Resource {
        /** Returns a list of synchronized property [NodePath]s. */
        get_properties(): Array
        /** Adds the property identified by the given [param path] to the list of the properties being synchronized, optionally passing an [param index].
         *  [b]Note:[/b] For details on restrictions and limitations on property synchronization, see [MultiplayerSynchronizer].
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
            GEN_EDIT_STATE_DISABLED = 0,
            GEN_EDIT_STATE_INSTANCE = 1,
            GEN_EDIT_STATE_MAIN = 2,
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    /** Provides access to a scene file's information. */
    class SceneState extends RefCounted {
        /** Returns the number of nodes in the scene.
         *  The [code]idx[/code] argument used to query node data in other [code]get_node_*[/code] methods in the interval [code][0, get_node_count() - 1][/code].
         */
        get_node_count(): number /*i64*/
        /** Returns the type of the node at [param idx]. */
        get_node_type(idx: number /*i64*/): StringName
        /** Returns the name of the node at [param idx]. */
        get_node_name(idx: number /*i64*/): StringName
        /** Returns the path to the node at [param idx].
         *  If [param for_parent] is [code]true[/code], returns the path of the [param idx] node's parent instead.
         */
        get_node_path(idx: number /*i64*/, for_parent: boolean = false): NodePath
        /** Returns the path to the owner of the node at [param idx], relative to the root node. */
        get_node_owner_path(idx: number /*i64*/): NodePath
        /** Returns [code]true[/code] if the node at [param idx] is an [InstancePlaceholder]. */
        is_node_instance_placeholder(idx: number /*i64*/): boolean
        /** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
        get_node_instance_placeholder(idx: number /*i64*/): string
        /** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or [code]null[/code] if the node is not an instance. */
        get_node_instance(idx: number /*i64*/): PackedScene
        /** Returns the list of group names associated with the node at [param idx]. */
        get_node_groups(idx: number /*i64*/): PackedStringArray
        /** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
        get_node_index(idx: number /*i64*/): number /*i64*/
        /** Returns the number of exported or overridden properties for the node at [param idx].
         *  The [code]prop_idx[/code] argument used to query node property data in other [code]get_node_property_*[/code] methods in the interval [code][0, get_node_property_count() - 1][/code].
         */
        get_node_property_count(idx: number /*i64*/): number /*i64*/
        /** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_name(idx: number /*i64*/, prop_idx: number /*i64*/): StringName
        /** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
        get_node_property_value(idx: number /*i64*/, prop_idx: number /*i64*/): any
        /** Returns the number of signal connections in the scene.
         *  The [code]idx[/code] argument used to query connection metadata in other [code]get_connection_*[/code] methods in the interval [code][0, get_connection_count() - 1][/code].
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
        readonly changed: Signal
    }
    namespace SceneTree {
        enum GroupCallFlags {
            GROUP_CALL_DEFAULT = 0,
            GROUP_CALL_REVERSE = 1,
            GROUP_CALL_DEFERRED = 2,
            GROUP_CALL_UNIQUE = 4,
        }
    }
    /** Manages the game loop via a hierarchy of nodes. */
    class SceneTree extends MainLoop {
        get_root(): Window
        /** Returns [code]true[/code] if the given group exists.
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
         *  If [param process_always] is set to [code]false[/code], pausing the [SceneTree] will also pause the timer.
         *  If [param process_in_physics] is set to [code]true[/code], will update the [SceneTreeTimer] during the physics frame instead of the process frame (fixed framerate processing).
         *  If [param ignore_time_scale] is set to [code]true[/code], will ignore [member Engine.time_scale] and update the [SceneTreeTimer] with the actual frame delta.
         *  Commonly used to create a one-shot delay timer as in the following example:
         *  
         *  The timer will be automatically freed after its time elapses.
         *  [b]Note:[/b] The timer is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the timer (or [method Node._physics_process] if [param process_in_physics] is set to [code]true[/code]).
         */
        create_timer(time_sec: number /*f64*/, process_always: boolean = true, process_in_physics: boolean = false, ignore_time_scale: boolean = false): SceneTreeTimer
        /** Creates and returns a new [Tween]. The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).
         *  [b]Note:[/b] When creating a [Tween] using this method, the [Tween] will not be tied to the [Node] that called it. It will continue to animate even if the [Node] is freed, but it will automatically finish if there's nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].
         */
        create_tween(): Tween
        /** Returns an array of currently existing [Tween]s in the [SceneTree] (both running and paused). */
        get_processed_tweens(): Array
        /** Returns the number of nodes in this [SceneTree]. */
        get_node_count(): number /*i64*/
        /** Returns the current frame number, i.e. the total frame count since the application started. */
        get_frame(): number /*i64*/
        /** Quits the application at the end of the current iteration. Argument [param exit_code] can optionally be given (defaulting to 0) to customize the exit status code.
         *  By convention, an exit code of [code]0[/code] indicates success whereas a non-zero exit code indicates an error.
         *  For portability reasons, the exit code should be set between 0 and 125 (inclusive).
         *  [b]Note:[/b] On iOS this method doesn't work. Instead, as recommended by the iOS Human Interface Guidelines, the user is expected to close apps via the Home button.
         */
        quit(exit_code: number /*i64*/ = 0): void
        /** Queues the given object for deletion, delaying the call to [method Object.free] to the end of the current frame. */
        queue_delete(obj: Object): void
        /** Calls [param method] on each member of the given group, respecting the given [enum GroupCallFlags]. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.
         *  
         *  [b]Note:[/b] Group call flags are used to control the method calling behavior. By default, methods will be called immediately in a way similar to [method call_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param flags] argument, methods will be called at the end of the frame in a way similar to [method Object.set_deferred].
         */
        call_group_flags(flags: number /*i64*/, group: StringName, method: StringName, ...vargargs: any[]): void
        /** Sends the given notification to all members of the [param group], respecting the given [enum GroupCallFlags].
         *  [b]Note:[/b] Group call flags are used to control the notification sending behavior. By default, notifications will be sent immediately in a way similar to [method notify_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, notifications will be sent at the end of the current frame in a way similar to using [code]Object.call_deferred("notification", ...)[/code].
         */
        notify_group_flags(call_flags: number /*i64*/, group: StringName, notification: number /*i64*/): void
        /** Sets the given [param property] to [param value] on all members of the given group, respecting the given [enum GroupCallFlags].
         *  [b]Note:[/b] Group call flags are used to control the property setting behavior. By default, properties will be set immediately in a way similar to [method set_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, properties will be set at the end of the frame in a way similar to [method Object.call_deferred].
         */
        set_group_flags(call_flags: number /*i64*/, group: StringName, property: string, value: any): void
        /** Calls [param method] on each member of the given group. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.
         *  [b]Note:[/b] [method call_group] will call methods immediately on all members at once, which can cause stuttering if an expensive method is called on lots of members.
         */
        call_group(group: StringName, method: StringName, ...vargargs: any[]): void
        /** Sends the given notification to all members of the [param group].
         *  [b]Note:[/b] [method notify_group] will immediately notify all members at once, which can cause stuttering if an expensive method is called as a result of sending the notification to lots of members.
         */
        notify_group(group: StringName, notification: number /*i64*/): void
        /** Sets the given [param property] to [param value] on all members of the given group.
         *  [b]Note:[/b] [method set_group] will set the property immediately on all members at once, which can cause stuttering if a property with an expensive setter is set on lots of members.
         */
        set_group(group: StringName, property: string, value: any): void
        /** Returns a list of all nodes assigned to the given group. */
        get_nodes_in_group(group: StringName): Array
        /** Returns the first node in the specified group, or [code]null[/code] if the group is empty or does not exist. */
        get_first_node_in_group(group: StringName): Node
        set_current_scene(child_node: Node): void
        get_current_scene(): Node
        /** Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.
         *  Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.
         *  [b]Note:[/b] See [method change_scene_to_packed] for details on the order of operations.
         */
        change_scene_to_file(path: string): GodotError
        /** Changes the running scene to a new instance of the given [PackedScene] (which must be valid).
         *  Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.
         *  [b]Note:[/b] Operations happen in the following order when [method change_scene_to_packed] is called:
         *  1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return [code]null[/code]. [member current_scene] will be [code]null[/code], too, because the new scene is not available yet.
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
         *  [b]Note:[/b] No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for [code]"/root/Foo"[/code] setting one for [code]"/root/Foo/Bar"[/code] will cause an error.
         */
        set_multiplayer(multiplayer: MultiplayerAPI, root_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        /** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
        get_multiplayer(for_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): MultiplayerAPI
        set_multiplayer_poll_enabled(enabled: boolean): void
        is_multiplayer_poll_enabled(): boolean
        /** If [code]true[/code], the application automatically accepts quitting requests.
         *  For mobile platforms, see [member quit_on_go_back].
         */
        auto_accept_quit: boolean
        /** If [code]true[/code], the application quits automatically when navigating back (e.g. using the system "Back" button on Android).
         *  To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].
         */
        quit_on_go_back: boolean
        /** If [code]true[/code], collision shapes will be visible when running the game from the editor for debugging purposes.
         *  [b]Note:[/b] This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.
         */
        debug_collisions_hint: boolean
        /** If [code]true[/code], curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.
         *  [b]Note:[/b] This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.
         */
        debug_paths_hint: boolean
        /** If [code]true[/code], navigation polygons will be visible when running the game from the editor for debugging purposes.
         *  [b]Note:[/b] This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.
         */
        debug_navigation_hint: boolean
        /** If [code]true[/code], the [SceneTree] is paused. Doing so will have the following behavior:
         *  - 2D and 3D physics will be stopped. This includes signals and collision detection.
         *  - [method Node._process], [method Node._physics_process] and [method Node._input] will not be called anymore in nodes.
         */
        paused: boolean
        /** The root of the edited scene. */
        edited_scene_root: Node
        /** Returns the root node of the currently running scene, regardless of its structure.
         *  [b]Warning:[/b] Setting this directly might not work as expected, and will [i]not[/i] add or remove any nodes from the tree, consider using [method change_scene_to_file] or [method change_scene_to_packed] instead.
         */
        current_scene: Node
        /** The [SceneTree]'s root [Window]. */
        readonly root: Node
        /** If [code]true[/code] (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].
         *  If [code]false[/code], you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.
         */
        multiplayer_poll: boolean
        readonly tree_changed: Signal
        readonly tree_process_mode_changed: Signal
        readonly node_added: Signal
        readonly node_removed: Signal
        readonly node_renamed: Signal
        readonly node_configuration_warning_changed: Signal
        readonly process_frame: Signal
        readonly physics_frame: Signal
    }
    class SceneTreeDialog extends ConfirmationDialog {
        _cancel(): void
        readonly selected: Signal
    }
    class SceneTreeDock extends VBoxContainer {
        _set_owners(_unnamed_arg0: Node, _unnamed_arg1: Array): void
        _update_script_button(): void
        instantiate(_unnamed_arg0: string): void
        get_tree_editor(): SceneTreeEditor
        replace_node(_unnamed_arg0: Node, _unnamed_arg1: Node, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        readonly remote_tree_selected: Signal
        readonly add_node_used: Signal
        readonly node_created: Signal
    }
    class SceneTreeEditor extends Control {
        _update_tree(_unnamed_arg0: boolean = false): void
        _rename_node(_unnamed_arg0: Node, _unnamed_arg1: string): void
        _test_update_tree(): void
        update_tree(): void
        readonly node_selected: Signal
        readonly node_renamed: Signal
        readonly node_prerename: Signal
        readonly node_changed: Signal
        readonly nodes_dragged: Signal
        readonly nodes_rearranged: Signal
        readonly files_dropped: Signal
        readonly script_dropped: Signal
        readonly rmb_pressed: Signal
        readonly open: Signal
        readonly open_script: Signal
    }
    /** One-shot timer. */
    class SceneTreeTimer extends RefCounted {
        set_time_left(time: number /*f64*/): void
        get_time_left(): number /*f64*/
        /** The time remaining (in seconds). */
        time_left: number /*f64*/
        readonly timeout: Signal
    }
    class ScreenSelect extends Button {
        readonly request_open_in_screen: Signal
    }
    /** A class stored as a resource. */
    class Script extends Resource {
        /** Returns [code]true[/code] if the script can be instantiated. */
        can_instantiate(): boolean
        /** Returns [code]true[/code] if [param base_object] is an instance of this script. */
        instance_has(base_object: Object): boolean
        /** Returns [code]true[/code] if the script contains non-empty source code. */
        has_source_code(): boolean
        get_source_code(): string
        set_source_code(source: string): void
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keep_state: boolean = false): GodotError
        /** Returns the script directly inherited by this script. */
        get_base_script(): Script
        /** Returns the script's base type. */
        get_instance_base_type(): StringName
        /** Returns [code]true[/code] if the script, or a base class, defines a signal with the given name. */
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
        /** Returns [code]true[/code] if the script is a tool script. A tool script can run in the editor. */
        is_tool(): boolean
        /** Returns [code]true[/code] if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
        is_abstract(): boolean
        /** The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically. */
        source_code: string
    }
    /** Godot editor's popup dialog for creating new [Script] files. */
    class ScriptCreateDialog extends ConfirmationDialog {
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, built_in_enabled: boolean = true, load_enabled: boolean = true): void
        readonly script_created: Signal
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
         *  [b]Note:[/b] Does not apply to scripts that are already opened.
         */
        register_syntax_highlighter(syntax_highlighter: EditorSyntaxHighlighter): void
        /** Unregisters the [EditorSyntaxHighlighter] from the editor.
         *  [b]Note:[/b] The [EditorSyntaxHighlighter] will still be applied to scripts that are already opened.
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
        readonly editor_script_changed: Signal
        readonly script_close: Signal
    }
    /** Base editor for editing scripts in the [ScriptEditor]. */
    class ScriptEditorBase extends VBoxContainer {
        /** Returns the underlying [Control] used for editing scripts. For text scripts, this is a [CodeEdit]. */
        get_base_editor(): Control
        /** Adds a [EditorSyntaxHighlighter] to the open script. */
        add_syntax_highlighter(highlighter: EditorSyntaxHighlighter): void
        readonly name_changed: Signal
        readonly edited_script_changed: Signal
        readonly request_help: Signal
        readonly request_open_script_at_line: Signal
        readonly request_save_history: Signal
        readonly go_to_help: Signal
        readonly search_in_files_requested: Signal
        readonly replace_in_files_requested: Signal
        readonly go_to_method: Signal
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
        readonly started: Signal
        readonly stopped: Signal
        readonly stop_requested: Signal
        readonly stack_frame_selected: Signal
        readonly error_selected: Signal
        readonly breakpoint_selected: Signal
        readonly set_execution: Signal
        readonly clear_execution: Signal
        readonly breaked: Signal
        readonly remote_object_requested: Signal
        readonly remote_object_updated: Signal
        readonly remote_object_property_updated: Signal
        readonly remote_tree_updated: Signal
        readonly output: Signal
        readonly stack_dump: Signal
        readonly stack_frame_vars: Signal
        readonly stack_frame_var: Signal
        readonly debug_data: Signal
        readonly set_breakpoint: Signal
        readonly clear_breakpoints: Signal
        readonly errors_cleared: Signal
    }
    class ScriptEditorPlugin extends EditorPlugin {
    }
    class ScriptEditorQuickOpen extends ConfirmationDialog {
        readonly goto_line: Signal
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
            LOCATION_LOCAL = 0,
            LOCATION_PARENT_MASK = 256,
            LOCATION_OTHER_USER_CODE = 512,
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
        readonly scrolling: Signal
    }
    namespace ScrollContainer {
        enum ScrollMode {
            SCROLL_MODE_DISABLED = 0,
            SCROLL_MODE_AUTO = 1,
            SCROLL_MODE_SHOW_ALWAYS = 2,
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
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member horizontal_scroll_mode].
         */
        get_h_scroll_bar(): HScrollBar
        /** Returns the vertical scrollbar [VScrollBar] of this [ScrollContainer].
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member vertical_scroll_mode].
         */
        get_v_scroll_bar(): VScrollBar
        /** Ensures the given [param control] is visible (must be a direct or indirect child of the ScrollContainer). Used by [member follow_focus].
         *  [b]Note:[/b] This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [signal SceneTree.process_frame]:
         *  
         */
        ensure_control_visible(control: Control): void
        /** If [code]true[/code], the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible. */
        follow_focus: boolean
        /** The current horizontal scroll value.
         *  [b]Note:[/b] If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.
         *  
         */
        scroll_horizontal: number /*i64*/
        /** The current vertical scroll value.
         *  [b]Note:[/b] Setting it early needs to be deferred, just like in [member scroll_horizontal].
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
        readonly scroll_started: Signal
        readonly scroll_ended: Signal
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
        /** Like [method wait], but won't block, so if the value is zero, fails immediately and returns [code]false[/code]. If non-zero, it returns [code]true[/code] to report success. */
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
        /** If [code]false[/code] (default), the shape always separates and returns a normal along its own direction.
         *  If [code]true[/code], the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.
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
        /** If [code]false[/code] (default), the shape always separates and returns a normal along its own direction.
         *  If [code]true[/code], the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.
         */
        slide_on_slope: boolean
    }
    /** Abstract base class for separators. */
    class Separator extends Control {
    }
    namespace Shader {
        enum Mode {
            MODE_SPATIAL = 0,
            MODE_CANVAS_ITEM = 1,
            MODE_PARTICLES = 2,
            MODE_SKY = 3,
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
         *  [b]Note:[/b] [param name] must match the name of the uniform in the code exactly.
         *  [b]Note:[/b] If the sampler array is used use [param index] to access the specified texture.
         */
        set_default_texture_parameter(name: StringName, texture: Texture2D, index: number /*i64*/ = 0): void
        /** Returns the texture that is set as default for the specified parameter.
         *  [b]Note:[/b] [param name] must match the name of the uniform in the code exactly.
         *  [b]Note:[/b] If the sampler array is used use [param index] to access the specified texture.
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
        readonly shader_created: Signal
        readonly shader_include_created: Signal
    }
    class ShaderEditorPlugin extends EditorPlugin {
    }
    class ShaderFileEditor extends PanelContainer {
    }
    class ShaderFileEditorPlugin extends EditorPlugin {
    }
    class ShaderGlobalsEditor extends VBoxContainer {
        _changed(): void
        readonly globals_changed: Signal
    }
    class ShaderGlobalsEditorInterface extends Object {
        _set_var(_unnamed_arg0: StringName, _unnamed_arg1: any, _unnamed_arg2: any): void
        _var_changed(): void
        readonly var_changed: Signal
    }
    /** A node used to override global shader parameters' values in a scene. */
    class ShaderGlobalsOverride extends Node {
        _activate(): void
    }
    /** A snippet of shader code to be included in a [Shader] with [code]#include[/code]. */
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
         *  [b]Note:[/b] [param param] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
         *  [b]Note:[/b] Changes to the shader uniform will be effective on all instances using this [ShaderMaterial]. To prevent this, use per-instance uniforms with [method GeometryInstance3D.set_instance_shader_parameter] or duplicate the [ShaderMaterial] resource using [method Resource.duplicate]. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the [ShaderMaterial] when possible.
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
        /** Returns [code]true[/code] if this shape is colliding with another.
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).
         */
        collide(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): boolean
        /** Returns whether this shape would collide with another, if a given movement was applied.
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).
         */
        collide_with_motion(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): boolean
        /** Returns a list of contact point pairs where this shape touches another.
         *  If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].
         *  A collision pair A, B can be used to calculate the collision normal with [code](B - A).normalized()[/code], and the collision depth with [code](B - A).length()[/code]. This information is typically used to separate shapes, particularly in collision solvers.
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).
         */
        collide_and_get_contacts(local_xform: Transform2D, with_shape: Shape2D, shape_xform: Transform2D): PackedVector2Array
        /** Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.
         *  If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].
         *  A collision pair A, B can be used to calculate the collision normal with [code](B - A).normalized()[/code], and the collision depth with [code](B - A).length()[/code]. This information is typically used to separate shapes, particularly in collision solvers.
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).
         */
        collide_with_motion_and_get_contacts(local_xform: Transform2D, local_motion: Vector2, with_shape: Shape2D, shape_xform: Transform2D, shape_motion: Vector2): PackedVector2Array
        /** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
        draw(canvas_item: RID, color: Color): void
        /** Returns a [Rect2] representing the shapes boundary. */
        get_rect(): Rect2
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.
         *  When set to [code]0[/code], the default value from [member ProjectSettings.physics/2d/solver/default_contact_bias] is used.
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
         *  When set to [code]0[/code], the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.
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
        /** Updates the collision information for the shape immediately, without waiting for the next [code]_physics_process[/code] call. Use this method, for example, when the shape or its parent has changed state.
         *  [b]Note:[/b] [code]enabled == true[/code] is not required for this to work.
         */
        force_shapecast_update(): void
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or [code]null[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider(index: number /*i64*/): Object
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: number /*i64*/): RID
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or [code]0[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider_shape(index: number /*i64*/): number /*i64*/
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.
         *  [b]Note:[/b] this point is in the [b]global[/b] coordinate system.
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
        /** If [code]true[/code], collisions will be reported. */
        enabled: boolean
        /** The [Shape2D]-derived shape to be used for collision queries. */
        shape: Shape2D
        /** If [code]true[/code], the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        /** The shape's destination point, relative to this node's [code]position[/code]. */
        target_position: Vector2
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        margin: number /*f64*/
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        max_results: number /*i64*/
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. */
        collision_mask: number /*i64*/
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
        readonly collision_result: Array
        /** If [code]true[/code], collisions with [Area2D]s will be reported. */
        collide_with_areas: boolean
        /** If [code]true[/code], collisions with [PhysicsBody2D]s will be reported. */
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
        /** Updates the collision information for the shape immediately, without waiting for the next [code]_physics_process[/code] call. Use this method, for example, when the shape or its parent has changed state.
         *  [b]Note:[/b] [code]enabled == true[/code] is not required for this to work.
         */
        force_shapecast_update(): void
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or [code]null[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider(index: number /*i64*/): Object
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        get_collider_rid(index: number /*i64*/): RID
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or [code]0[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider_shape(index: number /*i64*/): number /*i64*/
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.
         *  [b]Note:[/b] this point is in the [b]global[/b] coordinate system.
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
        /** If [code]true[/code], collisions will be reported. */
        enabled: boolean
        /** The [Shape3D]-derived shape to be used for collision queries. */
        shape: Shape3D
        /** If [code]true[/code], the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        /** The shape's destination point, relative to this node's [code]position[/code]. */
        target_position: Vector3
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        margin: number /*f64*/
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        max_results: number /*i64*/
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
        readonly collision_result: Array
        /** If [code]true[/code], collisions with [Area3D]s will be reported. */
        collide_with_areas: boolean
        /** If [code]true[/code], collisions with [PhysicsBody3D]s will be reported. */
        collide_with_bodies: boolean
        /** The custom color to use to draw the shape in the editor and at run-time if [b]Visible Collision Shapes[/b] is enabled in the [b]Debug[/b] menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.
         *  If set to [code]Color(0.0, 0.0, 0.0)[/code] (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.
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
        readonly size_flags_selected: Signal
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
         *  [b]Note:[/b] The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!
         */
        set_bone_local_pose_override(bone_idx: number /*i64*/, override_pose: Transform2D, strength: number /*f64*/, persistent: boolean): void
        /** Returns the local pose override transform for [param bone_idx]. */
        get_bone_local_pose_override(bone_idx: number /*i64*/): Transform2D
        readonly bone_setup_changed: Signal
    }
    class Skeleton2DEditor extends Control {
    }
    class Skeleton2DEditorPlugin extends EditorPlugin {
    }
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation. */
    class Skeleton3D extends Node3D {
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        /** Adds a bone, with name [param name]. [method get_bone_count] will become the bone index. */
        add_bone(name: string): void
        /** Returns the bone index that matches [param name] as its name. */
        find_bone(name: string): number /*i64*/
        /** Returns the name of the bone at index [param bone_idx]. */
        get_bone_name(bone_idx: number /*i64*/): string
        set_bone_name(bone_idx: number /*i64*/, name: string): void
        /** Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.
         *  [b]Note:[/b] The parent bone returned will always be less than [param bone_idx].
         */
        get_bone_parent(bone_idx: number /*i64*/): number /*i64*/
        /** Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.
         *  [b]Note:[/b] [param parent_idx] must be less than [param bone_idx].
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
        /** Disables the pose for the bone at [param bone_idx] if [code]false[/code], enables the bone pose if [code]true[/code]. */
        set_bone_enabled(bone_idx: number /*i64*/, enabled: boolean = true): void
        /** Removes the global pose override on all bones in the skeleton. */
        clear_bones_global_pose_override(): void
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].
         *  [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.
         *  [b]Note:[/b] The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.
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
         *  [b]Note:[/b] Unless this value is [code]1.0[/code], the key value in animation will not match the actual position value.
         */
        motion_scale: number /*f64*/
        /** If [code]true[/code], forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited. */
        show_rest_only: boolean
        animate_physical_bones: boolean
        readonly pose_updated: Signal
        readonly bone_pose_changed: Signal
        readonly bone_enabled_changed: Signal
        readonly show_rest_only_changed: Signal
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
        /** Returns [code]true[/code] if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns [code]false[/code] if SkeletonIK is stopped or [method start] was used with the [code]one_time[/code] parameter set to [code]true[/code]. */
        is_running(): boolean
        set_min_distance(min_distance: number /*f64*/): void
        get_min_distance(): number /*f64*/
        set_max_iterations(iterations: number /*i64*/): void
        get_max_iterations(): number /*i64*/
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is [code]true[/code], this will take effect immediately but also reset on the next frame. */
        start(one_time: boolean = false): void
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        /** The name of the current root bone, the first bone in the IK chain. */
        root_bone: StringName
        /** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
        tip_bone: StringName
        /** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of [code]1.0[/code] will overwrite all skeleton bone transforms completely while a value of [code]0.0[/code] will visually disable the SkeletonIK. A value at or below [code]0.01[/code] also calls [method Skeleton3D.clear_bones_global_pose_override]. */
        interpolation: number /*f64*/
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is [code]true[/code], how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        target: Transform3D
        /** If [code]true[/code] overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
        override_tip_basis: boolean
        /** If [code]true[/code], instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
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
        /* gdvirtual */ _execute(delta: number /*f64*/): void
        /* gdvirtual */ _setup_modification(modification_stack: SkeletonModificationStack2D): void
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
        /** If [code]true[/code], the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
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
        /** Sets the bone index, [param bone_idx], of the CCDIK joint at [param joint_idx]. When possible, this will also update the [code]bone2d_node[/code] of the CCDIK joint based on data provided by the linked skeleton. */
        set_ccdik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        /** Returns the index of the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
        get_ccdik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        /** Sets whether the joint at [param joint_idx] is set to rotate from the joint, [code]true[/code], or to rotate from the tip, [code]false[/code]. */
        set_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/, rotate_from_joint: boolean): void
        /** Returns whether the joint at [param joint_idx] is set to rotate from the joint, [code]true[/code], or to rotate from the tip, [code]false[/code]. The default is to rotate from the tip. */
        get_ccdik_joint_rotate_from_joint(joint_idx: number /*i64*/): boolean
        /** Determines whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. When [code]true[/code], constraints will be enabled and taken into account when solving. */
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
        /** Sets the bone index, [param bone_idx], of the FABRIK joint at [param joint_idx]. When possible, this will also update the [code]bone2d_node[/code] of the FABRIK joint based on data provided by the linked skeleton. */
        set_fabrik_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        /** Returns the index of the [Bone2D] node assigned to the FABRIK joint at [param joint_idx]. */
        get_fabrik_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        /** Sets the magnet position vector for the joint at [param joint_idx]. */
        set_fabrik_joint_magnet_position(joint_idx: number /*i64*/, magnet_position: Vector2): void
        /** Returns the magnet position vector for the joint at [param joint_idx]. */
        get_fabrik_joint_magnet_position(joint_idx: number /*i64*/): Vector2
        /** Sets whether the joint at [param joint_idx] will use the target node's rotation rather than letting FABRIK rotate the node.
         *  [b]Note:[/b] This option only works for the tip/final joint in the chain. For all other nodes, this option will be ignored.
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
        /** If [code]true[/code], the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
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
        /** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the [code]bone2d_node[/code] of the Jiggle joint based on data provided by the linked skeleton. */
        set_jiggle_joint_bone_index(joint_idx: number /*i64*/, bone_idx: number /*i64*/): void
        /** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        get_jiggle_joint_bone_index(joint_idx: number /*i64*/): number /*i64*/
        /** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to [code]true[/code] will make the joint use its own settings rather than the default ones attached to the modification. */
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
        /** Sets whether this modification will use constraints or not. When [code]true[/code], constraints will be applied when solving the LookAt modification. */
        set_enable_constraint(enable_constraint: boolean): void
        /** Returns [code]true[/code] if the LookAt modification is using constraints. */
        get_enable_constraint(): boolean
        /** Sets the constraint's minimum allowed angle. */
        set_constraint_angle_min(angle_min: number /*f64*/): void
        /** Returns the constraint's minimum allowed angle. */
        get_constraint_angle_min(): number /*f64*/
        /** Sets the constraint's maximum allowed angle. */
        set_constraint_angle_max(angle_max: number /*f64*/): void
        /** Returns the constraint's maximum allowed angle. */
        get_constraint_angle_max(): number /*f64*/
        /** When [code]true[/code], the modification will use an inverted joint constraint.
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
         *  [b]Note:[/b] This is just the index used for this modification, not the bone index used in the [Skeleton2D].
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
        /** The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to [code]0[/code], the modification will solve without distance constraints. */
        target_minimum_distance: number /*f64*/
        /** The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to [code]0[/code], the modification will solve without distance constraints. */
        target_maximum_distance: number /*f64*/
        /** If [code]true[/code], the bones in the modification will blend outward as opposed to inwards when contracting. If [code]false[/code], the bones will bend inwards when contracting. */
        flip_bend_direction: boolean
    }
    /** A resource that holds a stack of [SkeletonModification2D]s. */
    class SkeletonModificationStack2D extends Resource {
        /** Sets up the modification stack so it can execute. This function should be called by [Skeleton2D] and shouldn't be manually called unless you know what you are doing. */
        setup(): void
        /** Executes all of the [SkeletonModification2D]s in the stack that use the same execution mode as the passed-in [param execution_mode], starting from index [code]0[/code] to [member modification_count].
         *  [b]Note:[/b] The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.
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
        /** If [code]true[/code], the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
        enabled: boolean
        /** The interpolation strength of the modifications in stack. A value of [code]0[/code] will make it where the modifications are not applied, a strength of [code]0.5[/code] will be half applied, and a strength of [code]1[/code] will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
        strength: number /*f64*/
        /** The number of modifications in the stack. */
        modification_count: any /*Modifications,modifications/*/
    }
    namespace SkeletonProfile {
        enum TailDirection {
            TAIL_DIRECTION_AVERAGE_CHILDREN = 0,
            TAIL_DIRECTION_SPECIFIC_CHILD = 1,
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
         *  [b]Note:[/b] This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.
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
        /** A bone name which will use model's height as the coefficient for normalization. For example, [SkeletonProfileHumanoid] defines it as [code]Hips[/code]. */
        scale_base_bone: StringName
        /** The amount of groups of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 4 groups.
         *  This property exists to separate the bone list into several sections in the editor.
         */
        group_size: any /*Groups,groups/*/
        /** The amount of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 56 bones.
         *  The size of elements in [BoneMap] updates when changing this property in it's assigned [SkeletonProfile].
         */
        bone_size: any /*Bones,bones/*/
        readonly profile_updated: Signal
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
            RADIANCE_SIZE_32 = 0,
            RADIANCE_SIZE_64 = 1,
            RADIANCE_SIZE_128 = 2,
            RADIANCE_SIZE_256 = 3,
            RADIANCE_SIZE_512 = 4,
            RADIANCE_SIZE_1024 = 5,
            RADIANCE_SIZE_2048 = 6,
            RADIANCE_SIZE_MAX = 7,
        }
        enum ProcessMode {
            PROCESS_MODE_AUTOMATIC = 0,
            PROCESS_MODE_QUALITY = 1,
            PROCESS_MODE_INCREMENTAL = 2,
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
         *  [b]Note:[/b] Some hardware will have trouble with higher radiance sizes, especially [constant RADIANCE_SIZE_512] and above. Only use such high values on high-end hardware.
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
        /** If [code]true[/code], the slider can be interacted with. If [code]false[/code], the value can be changed only by code. */
        editable: boolean
        /** If [code]true[/code], the value can be changed using the mouse wheel. */
        scrollable: boolean
        /** Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers. */
        tick_count: number /*i64*/
        /** If [code]true[/code], the slider will display ticks for minimum and maximum values. */
        ticks_on_borders: boolean
        readonly drag_started: Signal
        readonly drag_ended: Signal
    }
    namespace SliderJoint3D {
        enum Param {
            PARAM_LINEAR_LIMIT_UPPER = 0,
            PARAM_LINEAR_LIMIT_LOWER = 1,
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            PARAM_LINEAR_LIMIT_RESTITUTION = 3,
            PARAM_LINEAR_LIMIT_DAMPING = 4,
            PARAM_LINEAR_MOTION_SOFTNESS = 5,
            PARAM_LINEAR_MOTION_RESTITUTION = 6,
            PARAM_LINEAR_MOTION_DAMPING = 7,
            PARAM_LINEAR_ORTHOGONAL_SOFTNESS = 8,
            PARAM_LINEAR_ORTHOGONAL_RESTITUTION = 9,
            PARAM_LINEAR_ORTHOGONAL_DAMPING = 10,
            PARAM_ANGULAR_LIMIT_UPPER = 11,
            PARAM_ANGULAR_LIMIT_LOWER = 12,
            PARAM_ANGULAR_LIMIT_SOFTNESS = 13,
            PARAM_ANGULAR_LIMIT_RESTITUTION = 14,
            PARAM_ANGULAR_LIMIT_DAMPING = 15,
            PARAM_ANGULAR_MOTION_SOFTNESS = 16,
            PARAM_ANGULAR_MOTION_RESTITUTION = 17,
            PARAM_ANGULAR_MOTION_DAMPING = 18,
            PARAM_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
            PARAM_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
            PARAM_ANGULAR_ORTHOGONAL_DAMPING = 21,
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
            DISABLE_MODE_REMOVE = 0,
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
        /** Sets the pinned state of a surface vertex. When set to [code]true[/code], the optional [param attachment_path] can define a [Node3D] the pinned vertex will be attached to. */
        set_point_pinned(point_index: number /*i64*/, pinned: boolean, attachment_path: NodePath = <any> {} /*compound.type from 22([object Object])*/): void
        /** Returns [code]true[/code] if vertex is set to pinned. */
        is_point_pinned(point_index: number /*i64*/): boolean
        set_ray_pickable(ray_pickable: boolean): void
        is_ray_pickable(): boolean
        /** The physics layers this SoftBody3D [b]is in[/b]. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_layer: number /*i64*/
        /** The physics layers this SoftBody3D [b]scans[/b]. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
         *  [b]Note:[/b] Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
         */
        collision_mask: number /*i64*/
        /** [NodePath] to a [CollisionObject3D] this SoftBody3D should avoid clipping. */
        parent_collision_ignore: NodePath
        /** Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
        simulation_precision: number /*i64*/
        /** The SoftBody3D's mass. */
        total_mass: number /*f64*/
        /** Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between [code]0.0[/code] and [code]1.0[/code] (inclusive). */
        linear_stiffness: number /*f64*/
        /** The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect. */
        pressure_coefficient: number /*f64*/
        /** The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied. */
        damping_coefficient: number /*f64*/
        /** The body's drag coefficient. Higher values increase this body's air resistance.
         *  [b]Note:[/b] This value is currently unused by Godot's default physics implementation.
         */
        drag_coefficient: number /*f64*/
        /** If [code]true[/code], the [SoftBody3D] will respond to [RayCast3D]s. */
        ray_pickable: boolean
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        disable_mode: number /*i64*/
    }
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
        /** If [code]true[/code], a hemisphere is created rather than a full sphere.
         *  [b]Note:[/b] To get a regular hemisphere, the height and radius of the sphere must be equal.
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
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_line_edit(): LineEdit
        /** Changes the alignment of the underlying [LineEdit]. */
        alignment: number /*i64*/
        /** If [code]true[/code], the [SpinBox] will be editable. Otherwise, it will be read only. */
        editable: boolean
        /** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is [i]changed[/i] instead of [i]submitted[/i]. See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted]. */
        update_on_text_changed: boolean
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        prefix: string
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        suffix: string
        /** If not [code]0[/code], [member Range.value] will always be rounded to a multiple of [member custom_arrow_step] when interacting with the arrow buttons of the [SpinBox]. */
        custom_arrow_step: number /*f64*/
        /** If [code]true[/code], the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
        select_all_on_focus: boolean
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            DRAGGER_VISIBLE = 0,
            DRAGGER_HIDDEN = 1,
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
        /** The initial offset of the splitting between the two [Control]s, with [code]0[/code] being at the end of the first [Control]. */
        split_offset: number /*i64*/
        /** If [code]true[/code], the area of the first [Control] will be collapsed and the dragger will be disabled. */
        collapsed: boolean
        /** Determines the dragger's visibility. See [enum DraggerVisibility] for details. */
        dragger_visibility: number /*i64*/
        /** If [code]true[/code], the [SplitContainer] will arrange its children vertically, rather than horizontally.
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].
         */
        vertical: boolean
        readonly dragged: Signal
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
        /** Returns [code]true[/code], if the pixel at the given position is opaque and [code]false[/code] in other case.
         *  [b]Note:[/b] It also returns [code]false[/code], if the sprite's texture is [code]null[/code] or if the given position is invalid.
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
         *  [b]Example:[/b]
         *  
         */
        get_rect(): Rect2
        /** [Texture2D] object to draw. */
        texture: Texture2D
        /** If [code]true[/code], texture is centered. */
        centered: boolean
        /** The texture's drawing offset. */
        offset: Vector2
        /** If [code]true[/code], texture is flipped horizontally. */
        flip_h: boolean
        /** If [code]true[/code], texture is flipped vertically. */
        flip_v: boolean
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to [code]0[/code]. */
        hframes: number /*i64*/
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to [code]0[/code]. */
        vframes: number /*i64*/
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to [code]0[/code]. */
        frame: number /*i64*/
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2i
        /** If [code]true[/code], texture is cut from a larger atlas texture. See [member region_rect]. */
        region_enabled: boolean
        /** The region of the atlas texture to display. [member region_enabled] must be [code]true[/code]. */
        region_rect: Rect2
        /** If [code]true[/code], the outermost pixels get blurred out. [member region_enabled] must be [code]true[/code]. */
        region_filter_clip_enabled: boolean
        readonly frame_changed: Signal
        readonly texture_changed: Signal
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
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to [code]0[/code]. */
        hframes: number /*i64*/
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to [code]0[/code]. */
        vframes: number /*i64*/
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to [code]0[/code]. */
        frame: number /*i64*/
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        frame_coords: Vector2
        /** If [code]true[/code], the sprite will use [member region_rect] and display only the specified part of its texture. */
        region_enabled: boolean
        /** The region of the atlas texture to display. [member region_enabled] must be [code]true[/code]. */
        region_rect: Rect2
        readonly frame_changed: Signal
        readonly texture_changed: Signal
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            FLAG_TRANSPARENT = 0,
            FLAG_SHADED = 1,
            FLAG_DOUBLE_SIDED = 2,
            FLAG_DISABLE_DEPTH_TEST = 3,
            FLAG_FIXED_SIZE = 4,
            FLAG_MAX = 5,
        }
        enum AlphaCutMode {
            ALPHA_CUT_DISABLED = 0,
            ALPHA_CUT_DISCARD = 1,
            ALPHA_CUT_OPAQUE_PREPASS = 2,
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
        /** If [code]true[/code], the specified flag will be enabled. See [enum SpriteBase3D.DrawFlags] for a list of flags. */
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
        /** If [code]true[/code], texture will be centered. */
        centered: boolean
        /** The texture's drawing offset. */
        offset: Vector2
        /** If [code]true[/code], texture is flipped horizontally. */
        flip_h: boolean
        /** If [code]true[/code], texture is flipped vertically. */
        flip_v: boolean
        /** A color value used to [i]multiply[/i] the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.
         *  [b]Note:[/b] Unlike [member CanvasItem.modulate] for 2D, colors with values above [code]1.0[/code] (overbright) are not supported.
         *  [b]Note:[/b] If a [member GeometryInstance3D.material_override] is defined on the [SpriteBase3D], the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [member modulate] will be ignored. For a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] must be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function.
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
        /** The hashing scale for Alpha Hash. Recommended values between [code]0[/code] and [code]2[/code]. */
        alpha_hash_scale: number /*f64*/
        /** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
        alpha_antialiasing_mode: number /*i64*/
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        alpha_antialiasing_edge: number /*f64*/
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options.
         *  [b]Note:[/b] Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.
         */
        texture_filter: number /*i64*/
        /** Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.
         *  [b]Note:[/b] This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).
         *  [b]Note:[/b] This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
         */
        render_priority: number /*i64*/
    }
    class SpriteBase3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D. */
    class SpriteFrames extends Resource {
        /** Adds a new [param anim] animation to the library. */
        add_animation(anim: StringName): void
        /** Returns [code]true[/code] if the [param anim] animation exists. */
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
        /** If [param loop] is [code]true[/code], the [param anim] animation will loop when it reaches the end, or the start if it is played in reverse. */
        set_animation_loop(anim: StringName, loop: boolean): void
        /** Returns [code]true[/code] if the given animation is configured to loop when it finishes playing. Otherwise, returns [code]false[/code]. */
        get_animation_loop(anim: StringName): boolean
        /** Adds a frame to the [param anim] animation. If [param at_position] is [code]-1[/code], the frame will be added to the end of the animation. */
        add_frame(anim: StringName, texture: Texture2D, duration: number /*f64*/ = 1, at_position: number /*i64*/ = -1): void
        /** Sets the [param texture] and the [param duration] of the frame [param idx] in the [param anim] animation. */
        set_frame(anim: StringName, idx: number /*i64*/, texture: Texture2D, duration: number /*f64*/ = 1): void
        /** Removes the [param anim] animation's frame [param idx]. */
        remove_frame(anim: StringName, idx: number /*i64*/): void
        /** Returns the number of frames for the [param anim] animation. */
        get_frame_count(anim: StringName): number /*i64*/
        /** Returns the texture of the frame [param idx] in the [param anim] animation. */
        get_frame_texture(anim: StringName, idx: number /*i64*/): Texture2D
        /** Returns a relative duration of the frame [param idx] in the [param anim] animation (defaults to [code]1.0[/code]). For example, a frame with a duration of [code]2.0[/code] is displayed twice as long as a frame with a duration of [code]1.0[/code]. You can calculate the absolute duration (in seconds) of a frame using the following formula:
         *  
         *  In this example, [code]playing_speed[/code] refers to either [method AnimatedSprite2D.get_playing_speed] or [method AnimatedSprite3D.get_playing_speed].
         */
        get_frame_duration(anim: StringName, idx: number /*i64*/): number /*f64*/
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        /** Removes all animations. An empty [code]default[/code] animation will be created. */
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
         *  [b]Note:[/b] To put an ASCII string without prepending its size, you can use [method put_data]:
         *  
         */
        put_string(value: string): void
        /** Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.
         *  [b]Note:[/b] To put a UTF-8 string without prepending its size, you can use [method put_data]:
         *  
         */
        put_utf8_string(value: string): void
        /** Puts a Variant into the stream. If [param full_objects] is [code]true[/code] encoding objects is allowed (and can potentially include code).
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
        /** Gets a Variant from the stream. If [param allow_objects] is [code]true[/code], decoding objects is allowed.
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
         *  [b]Warning:[/b] Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
         */
        get_var(allow_objects: boolean = false): any
        /** If [code]true[/code], this [StreamPeer] will using big-endian format for encoding and decoding. */
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
        /** Start the stream in compression mode with the given [param buffer_size], if [param use_deflate] is [code]true[/code] uses deflate instead of GZIP. */
        start_compression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        /** Start the stream in decompression mode with the given [param buffer_size], if [param use_deflate] is [code]true[/code] uses deflate instead of GZIP. */
        start_decompression(use_deflate: boolean = false, buffer_size: number /*i64*/ = 65535): GodotError
        /** Finalizes the stream, compressing or decompressing any buffered chunk left. */
        finish(): GodotError
        /** Clears this stream, resetting the internal state. */
        clear(): void
    }
    namespace StreamPeerTCP {
        enum Status {
            STATUS_NONE = 0,
            STATUS_CONNECTING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
        }
    }
    /** A stream peer that handles TCP connections. */
    class StreamPeerTCP extends StreamPeer {
        /** Opens the TCP socket, and binds it to the specified local address.
         *  This method is generally not needed, and only used to force the subsequent call to [method connect_to_host] to use the specified [param host] and [param port] as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.
         */
        bind(port: number /*i64*/, host: string = '*'): GodotError
        /** Connects to the specified [code]host:port[/code] pair. A hostname will be resolved if valid. Returns [constant OK] on success. */
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
        /** If [param enabled] is [code]true[/code], packets will be sent immediately. If [param enabled] is [code]false[/code] (the default), packet transfers will be delayed and combined using [url=https://en.wikipedia.org/wiki/Nagle%27s_algorithm]Nagle's algorithm[/url].
         *  [b]Note:[/b] It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.
         */
        set_no_delay(enabled: boolean): void
    }
    namespace StreamPeerTLS {
        enum Status {
            STATUS_DISCONNECTED = 0,
            STATUS_HANDSHAKING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
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
        /** Returns the "offset" of a stylebox. This helper function returns a value equivalent to [code]Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))[/code]. */
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
         *  [b]Note:[/b] To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.
         */
        skew: Vector2
        /** Sets the color of the border. */
        border_color: Color
        /** If [code]true[/code], the border will fade into the background color. */
        border_blend: boolean
        /** This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.
         *  For corner radii less than 10, [code]4[/code] or [code]5[/code] should be enough. For corner radii less than 30, values between [code]8[/code] and [code]12[/code] should be enough.
         *  A corner detail of [code]1[/code] will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.
         */
        corner_detail: number /*i64*/
        /** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
        shadow_color: Color
        /** The shadow size in pixels. */
        shadow_size: number /*i64*/
        /** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
        shadow_offset: Vector2
        /** Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].
         *  [b]Note:[/b] When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to [code]false[/code] to ensure crisp visuals and avoid possible visual glitches.
         */
        anti_aliasing: boolean
        /** This changes the size of the antialiasing effect. [code]1.0[/code] is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.
         *  [b]Note:[/b] Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.
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
        /** If [code]true[/code], the line will be vertical. If [code]false[/code], the line will be horizontal. */
        vertical: boolean
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            AXIS_STRETCH_MODE_STRETCH = 0,
            AXIS_STRETCH_MODE_TILE = 1,
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
         *  If empty ([code]Rect2(0, 0, 0, 0)[/code]), the whole texture will be used.
         */
        region_rect: Rect2
        /** Modulates the color of the texture when this style box is drawn. */
        modulate_color: Color
        /** If [code]true[/code], the nine-patch texture's center tile will be drawn. */
        draw_center: boolean
    }
    namespace SubViewport {
        enum ClearMode {
            CLEAR_MODE_ALWAYS = 0,
            CLEAR_MODE_NEVER = 1,
            CLEAR_MODE_ONCE = 2,
        }
        enum UpdateMode {
            UPDATE_DISABLED = 0,
            UPDATE_ONCE = 1,
            UPDATE_WHEN_VISIBLE = 2,
            UPDATE_WHEN_PARENT_VISIBLE = 3,
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
         *  [b]Note:[/b] If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is [code]true[/code], the viewport size cannot be changed manually.
         */
        size: Vector2i
        /** The 2D size override of the sub-viewport. If either the width or height is [code]0[/code], the override is disabled. */
        size_2d_override: Vector2i
        /** If [code]true[/code], the 2D size override affects stretch as well. */
        size_2d_override_stretch: boolean
        /** The clear mode when the sub-viewport is used as a render target.
         *  [b]Note:[/b] This property is intended for 2D usage.
         */
        render_target_clear_mode: number /*i64*/
        /** The update mode when the sub-viewport is used as a render target. */
        render_target_update_mode: number /*i64*/
    }
    /** A container used for displaying the contents of a [SubViewport]. */
    class SubViewportContainer extends Container {
        /* gdvirtual */ _propagate_input_event(event: InputEvent): boolean
        set_stretch(enable: boolean): void
        is_stretch_enabled(): boolean
        set_stretch_shrink(amount: number /*i64*/): void
        get_stretch_shrink(): number /*i64*/
        /** If [code]true[/code], the sub-viewport will be automatically resized to the control's size.
         *  [b]Note:[/b] If [code]true[/code], this will prohibit changing [member SubViewport.size] of its children manually.
         */
        stretch: boolean
        /** Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.
         *  For example, a 1280×720 sub-viewport with [member stretch_shrink] set to [code]2[/code] will be rendered at 640×360 while occupying the same size in the container.
         *  [b]Note:[/b] [member stretch] must be [code]true[/code] for this property to work.
         */
        stretch_shrink: number /*i64*/
    }
    class SubViewportPreviewEditorPlugin extends EditorPlugin {
    }
    namespace SurfaceTool {
        enum CustomFormat {
            CUSTOM_RGBA8_UNORM = 0,
            CUSTOM_RGBA8_SNORM = 1,
            CUSTOM_RG_HALF = 2,
            CUSTOM_RGBA_HALF = 3,
            CUSTOM_R_FLOAT = 4,
            CUSTOM_RG_FLOAT = 5,
            CUSTOM_RGB_FLOAT = 6,
            CUSTOM_RGBA_FLOAT = 7,
            CUSTOM_MAX = 8,
        }
        enum SkinWeightCount {
            SKIN_4_WEIGHTS = 0,
            SKIN_8_WEIGHTS = 1,
        }
    }
    /** Helper tool to create geometry. */
    class SurfaceTool extends RefCounted {
        /** Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.
         *  By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS])
         *  [b]Note:[/b] This function takes an enum, not the exact number of weights.
         */
        set_skin_weight_count(count: SurfaceTool.SkinWeightCount): void
        /** By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.
         *  Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.
         *  [b]Note:[/b] This function returns an enum, not the exact number of weights.
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
         *  [b]Note:[/b] The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.
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
        /** Specifies the smooth group to use for the [i]next[/i] vertex. If this is never called, all vertices will have the default smooth group of [code]0[/code] and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to [code]-1[/code].
         *  [b]Note:[/b] This function actually takes a [code]uint32_t[/code], so C# users should use [code]uint32.MaxValue[/code] instead of [code]-1[/code] to produce a mesh with flat normals.
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
        /** Generates normals from vertices so you do not have to do it manually. If [param flip] is [code]true[/code], the resulting normals will be inverted. [method generate_normals] should be called [i]after[/i] generating geometry and [i]before[/i] committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].
         *  [b]Note:[/b] [method generate_normals] only works if the primitive type to be set to [constant Mesh.PRIMITIVE_TRIANGLES].
         *  [b]Note:[/b] [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to [code]0[/code] using [method set_smooth_group] or leave the smooth group at the default of [code]0[/code]. To generate flat normals, set the smooth group to [code]-1[/code] using [method set_smooth_group] prior to adding vertices.
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
         *  [b]FIXME:[/b] Document possible values for [param flags], it changed in 4.0. Likely some combinations of [enum Mesh.ArrayFormat].
         */
        commit(existing: ArrayMesh = <any> {} /*compound.type from nil*/, flags: number /*i64*/ = 0): ArrayMesh
        /** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] API. */
        commit_to_arrays(): Array
    }
    class SurfaceUpgradeDialog extends ConfirmationDialog {
    }
    class SurfaceUpgradeTool extends Object {
        readonly upgrade_finished: Signal
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit]. */
    class SyntaxHighlighter extends Resource {
        /* gdvirtual */ _get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        /* gdvirtual */ _clear_highlighting_cache(): void
        /* gdvirtual */ _update_cache(): void
        /** Returns syntax highlighting data for a single line. If the line is not cached, calls [method _get_line_syntax_highlighting] to calculate the data.
         *  The return [Dictionary] is column number to [Dictionary]. The column number notes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region, currently only the key "color" is supported.
         *  [b]Example return:[/b]
         *  
         *  This will color columns 0-4 red, and columns 5-eol in green.
         */
        get_line_syntax_highlighting(line: number /*i64*/): Dictionary
        /** Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.
         *  [b]Note:[/b] This is called automatically when the associated [TextEdit] node, updates its own cache.
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
        /** If set to [code]true[/code], italic or oblique font is preferred. */
        font_italic: boolean
        /** Preferred weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
        font_weight: number /*i64*/
        /** Preferred font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
        font_stretch: number /*i64*/
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        /** If set to [code]true[/code], generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        /** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        /** If set to [code]true[/code], auto-hinting is supported and preferred over font built-in hinting. */
        force_autohinter: boolean
        /** Font hinting mode. */
        hinting: number /*i64*/
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        /** If set to [code]true[/code], glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        multichannel_signed_distance_field: boolean
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of [code]16[/code] allows outline sizes up to [code]8[/code] to look correct. */
        msdf_pixel_range: number /*i64*/
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        /** Font oversampling factor, if set to [code]0.0[/code] global oversampling factor is used instead. */
        oversampling: number /*f64*/
    }
    /** A TCP server. */
    class TCPServer extends RefCounted {
        /** Listen on the [param port] binding to [param bind_address].
         *  If [param bind_address] is set as [code]"*"[/code] (default), the server will listen on all available addresses (both IPv4 and IPv6).
         *  If [param bind_address] is set as [code]"0.0.0.0"[/code] (for IPv4) or [code]"::"[/code] (for IPv6), the server will listen on all available addresses matching that IP type.
         *  If [param bind_address] is set to any valid address (e.g. [code]"192.168.1.101"[/code], [code]"::1"[/code], etc), the server will only listen on the interface with that addresses (or fail if no interface with the given address exists).
         */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        /** Returns [code]true[/code] if a connection is available for taking. */
        is_connection_available(): boolean
        /** Returns [code]true[/code] if the server is currently listening for connections. */
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
         *  You can specify a custom [param trusted_chain] of certification authorities (the default CA list will be used if [code]null[/code]), and optionally provide a [param common_name_override] if you expect the certificate to have a common name other than the server FQDN.
         *  [b]Note:[/b] On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
         */
        static client(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/, common_name_override: string = ''): TLSOptions
        /** Creates an [b]unsafe[/b] TLS client configuration where certificate validation is optional. You can optionally provide a valid [param trusted_chain], but the common name of the certificates will never be checked. Using this configuration for purposes other than testing [b]is not recommended[/b].
         *  [b]Note:[/b] On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
         */
        static client_unsafe(trusted_chain: X509Certificate = <any> {} /*compound.type from nil*/): TLSOptions
        /** Creates a TLS server configuration using the provided [param key] and [param certificate].
         *  [b]Note:[/b] The [param certificate] should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).
         */
        static server(key: CryptoKey, certificate: X509Certificate): TLSOptions
    }
    namespace TabBar {
        enum AlignmentMode {
            ALIGNMENT_LEFT = 0,
            ALIGNMENT_CENTER = 1,
            ALIGNMENT_RIGHT = 2,
            ALIGNMENT_MAX = 3,
        }
        enum CloseButtonDisplayPolicy {
            CLOSE_BUTTON_SHOW_NEVER = 0,
            CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1,
            CLOSE_BUTTON_SHOW_ALWAYS = 2,
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
        /** Selects the first available tab with lower index than the currently selected. Returns [code]true[/code] if tab selection changed. */
        select_previous_available(): boolean
        /** Selects the first available tab with greater index than the currently selected. Returns [code]true[/code] if tab selection changed. */
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
        /** Returns the icon for the tab at index [param tab_idx] or [code]null[/code] if the tab has no icon. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_tab_icon_max_width(tab_idx: number /*i64*/, width: number /*i64*/): void
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        get_tab_icon_max_width(tab_idx: number /*i64*/): number /*i64*/
        /** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a [code]null[/code] value will hide the button. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        /** Returns the icon for the right button of the tab at index [param tab_idx] or [code]null[/code] if the right button has no icon. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        /** If [param disabled] is [code]true[/code], disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        /** Returns [code]true[/code] if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        /** If [param hidden] is [code]true[/code], hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        /** Returns [code]true[/code] if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns [code]null[/code] by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        /** Removes the tab at index [param tab_idx]. */
        remove_tab(tab_idx: number /*i64*/): void
        /** Adds a new tab. */
        add_tab(title: string = '', icon: Texture2D = <any> {} /*compound.type from nil*/): void
        /** Returns the index of the tab at local coordinates [param point]. Returns [code]-1[/code] if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        set_tab_alignment(alignment: TabBar.AlignmentMode): void
        get_tab_alignment(): TabBar.AlignmentMode
        set_clip_tabs(clip_tabs: boolean): void
        get_clip_tabs(): boolean
        /** Returns the number of hidden tabs offsetted to the left. */
        get_tab_offset(): number /*i64*/
        /** Returns [code]true[/code] if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
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
        /** Select tab at index [code]tab_idx[/code]. */
        current_tab: number /*i64*/
        /** Sets the position at which tabs will be placed. See [enum AlignmentMode] for details. */
        tab_alignment: number /*i64*/
        /** If [code]true[/code], tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        /** Sets when the close button will appear on the tabs. See [enum CloseButtonDisplayPolicy] for details. */
        tab_close_display_policy: number /*i64*/
        /** Sets the maximum width which all tabs should be limited to. Unlimited if set to [code]0[/code]. */
        max_tab_width: number /*i64*/
        /** if [code]true[/code], the mouse's scroll wheel can be used to navigate the scroll view. */
        scrolling_enabled: boolean
        /** If [code]true[/code], tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        /** [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].
         *  Setting this to [code]-1[/code] will disable rearranging between [TabBar]s.
         */
        tabs_rearrange_group: number /*i64*/
        /** If [code]true[/code], the tab offset will be changed to keep the currently selected tab visible. */
        scroll_to_selected: boolean
        /** If [code]true[/code], enables selecting a tab with the right mouse button. */
        select_with_rmb: boolean
        readonly tab_selected: Signal
        readonly tab_changed: Signal
        readonly tab_clicked: Signal
        readonly tab_rmb_clicked: Signal
        readonly tab_close_pressed: Signal
        readonly tab_button_pressed: Signal
        readonly tab_hovered: Signal
        readonly active_tab_rearranged: Signal
    }
    /** A container that creates a tab for each child control, displaying only the active tab's control. */
    class TabContainer extends Container {
        /** Returns the number of tabs. */
        get_tab_count(): number /*i64*/
        set_current_tab(tab_idx: number /*i64*/): void
        get_current_tab(): number /*i64*/
        /** Returns the previously active tab index. */
        get_previous_tab(): number /*i64*/
        /** Selects the first available tab with lower index than the currently selected. Returns [code]true[/code] if tab selection changed. */
        select_previous_available(): boolean
        /** Selects the first available tab with greater index than the currently selected. Returns [code]true[/code] if tab selection changed. */
        select_next_available(): boolean
        /** Returns the child [Control] node located at the active tab index. */
        get_current_tab_control(): Control
        /** Returns the [TabBar] contained in this container.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].
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
        /** Returns the [Texture2D] for the tab at index [param tab_idx] or [code]null[/code] if the tab has no [Texture2D]. */
        get_tab_icon(tab_idx: number /*i64*/): Texture2D
        /** If [param disabled] is [code]true[/code], disables the tab at index [param tab_idx], making it non-interactable. */
        set_tab_disabled(tab_idx: number /*i64*/, disabled: boolean): void
        /** Returns [code]true[/code] if the tab at index [param tab_idx] is disabled. */
        is_tab_disabled(tab_idx: number /*i64*/): boolean
        /** If [param hidden] is [code]true[/code], hides the tab at index [param tab_idx], making it disappear from the tab area. */
        set_tab_hidden(tab_idx: number /*i64*/, hidden: boolean): void
        /** Returns [code]true[/code] if the tab at index [param tab_idx] is hidden. */
        is_tab_hidden(tab_idx: number /*i64*/): boolean
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        set_tab_metadata(tab_idx: number /*i64*/, metadata: any): void
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns [code]null[/code] by default. */
        get_tab_metadata(tab_idx: number /*i64*/): any
        /** Sets the button icon from the tab at index [param tab_idx]. */
        set_tab_button_icon(tab_idx: number /*i64*/, icon: Texture2D): void
        /** Returns the button icon from the tab at index [param tab_idx]. */
        get_tab_button_icon(tab_idx: number /*i64*/): Texture2D
        /** Returns the index of the tab at local coordinates [param point]. Returns [code]-1[/code] if the point is outside the control boundaries or if there's no tab at the queried position. */
        get_tab_idx_at_point(point: Vector2): number /*i64*/
        /** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
        get_tab_idx_from_control(control: Control): number /*i64*/
        /** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to [code]null[/code] will make it go away). Clicking it will expand the [Popup] node. */
        set_popup(popup: Node): void
        /** Returns the [Popup] node instance if one has been set already with [method set_popup].
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
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
        /** The current tab index. When set, this index's [Control] node's [code]visible[/code] property is set to [code]true[/code] and all others are set to [code]false[/code]. */
        current_tab: number /*i64*/
        /** If [code]true[/code], tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        clip_tabs: boolean
        /** If [code]true[/code], tabs are visible. If [code]false[/code], tabs' content and titles are hidden. */
        tabs_visible: boolean
        /** If [code]true[/code], all tabs are drawn in front of the panel. If [code]false[/code], inactive tabs are drawn behind the panel. */
        all_tabs_in_front: boolean
        /** If [code]true[/code], tabs can be rearranged with mouse drag. */
        drag_to_rearrange_enabled: boolean
        /** [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].
         *  Setting this to [code]-1[/code] will disable rearranging between [TabContainer]s.
         */
        tabs_rearrange_group: number /*i64*/
        /** If [code]true[/code], child [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
        use_hidden_tabs_for_min_size: boolean
        /** The focus access mode for the internal [TabBar] node. */
        tab_focus_mode: number /*i64*/
        readonly active_tab_rearranged: Signal
        readonly tab_changed: Signal
        readonly tab_clicked: Signal
        readonly tab_hovered: Signal
        readonly tab_selected: Signal
        readonly tab_button_pressed: Signal
        readonly pre_popup_pressed: Signal
    }
    namespace TextEdit {
        enum MenuItems {
            MENU_CUT = 0,
            MENU_COPY = 1,
            MENU_PASTE = 2,
            MENU_CLEAR = 3,
            MENU_SELECT_ALL = 4,
            MENU_UNDO = 5,
            MENU_REDO = 6,
            MENU_SUBMENU_TEXT_DIR = 7,
            MENU_DIR_INHERITED = 8,
            MENU_DIR_AUTO = 9,
            MENU_DIR_LTR = 10,
            MENU_DIR_RTL = 11,
            MENU_DISPLAY_UCC = 12,
            MENU_SUBMENU_INSERT_UCC = 13,
            MENU_INSERT_LRM = 14,
            MENU_INSERT_RLM = 15,
            MENU_INSERT_LRE = 16,
            MENU_INSERT_RLE = 17,
            MENU_INSERT_LRO = 18,
            MENU_INSERT_RLO = 19,
            MENU_INSERT_PDF = 20,
            MENU_INSERT_ALM = 21,
            MENU_INSERT_LRI = 22,
            MENU_INSERT_RLI = 23,
            MENU_INSERT_FSI = 24,
            MENU_INSERT_PDI = 25,
            MENU_INSERT_ZWJ = 26,
            MENU_INSERT_ZWNJ = 27,
            MENU_INSERT_WJ = 28,
            MENU_INSERT_SHY = 29,
            MENU_MAX = 30,
        }
        enum EditAction {
            ACTION_NONE = 0,
            ACTION_TYPING = 1,
            ACTION_BACKSPACE = 2,
            ACTION_DELETE = 3,
        }
        enum SearchFlags {
            SEARCH_MATCH_CASE = 1,
            SEARCH_WHOLE_WORDS = 2,
            SEARCH_BACKWARDS = 4,
        }
        enum CaretType {
            CARET_TYPE_LINE = 0,
            CARET_TYPE_BLOCK = 1,
        }
        enum SelectionMode {
            SELECTION_MODE_NONE = 0,
            SELECTION_MODE_SHIFT = 1,
            SELECTION_MODE_POINTER = 2,
            SELECTION_MODE_WORD = 3,
            SELECTION_MODE_LINE = 4,
        }
        enum LineWrappingMode {
            LINE_WRAPPING_NONE = 0,
            LINE_WRAPPING_BOUNDARY = 1,
        }
        enum GutterType {
            GUTTER_TYPE_STRING = 0,
            GUTTER_TYPE_ICON = 1,
            GUTTER_TYPE_CUSTOM = 2,
        }
    }
    /** A multiline text editor. */
    class TextEdit extends Control {
        /* gdvirtual */ _handle_unicode_input(unicode_char: number /*i64*/, caret_index: number /*i64*/): void
        /* gdvirtual */ _backspace(caret_index: number /*i64*/): void
        /* gdvirtual */ _cut(caret_index: number /*i64*/): void
        /* gdvirtual */ _copy(caret_index: number /*i64*/): void
        /* gdvirtual */ _paste(caret_index: number /*i64*/): void
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
        /** If [code]true[/code], sets the user into overtype mode. When the user types in this mode, it will override existing text. */
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
         *  [b]Note:[/b] The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than [code]1[/code].
         */
        get_line_height(): number /*i64*/
        /** Returns the number of spaces and [code]tab * tab_size[/code] before the first char. */
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
         *  [b]Note:[/b] This does not adjust the caret or selection, which as a result it can end up in an invalid position.
         */
        remove_text(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/): void
        /** Returns the last unhidden line in the entire [TextEdit]. */
        get_last_unhidden_line(): number /*i64*/
        /** Returns the count to the next visible line from [param line] to [code]line + visible_amount[/code]. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with [code]line = 1, visible_amount = 1[/code] would return 3. */
        get_next_visible_line_offset_from(line: number /*i64*/, visible_amount: number /*i64*/): number /*i64*/
        /** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, [code]x[/code] is the line, [code]y[/code] is the wrap index. */
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
        /** Returns [code]true[/code] if an "undo" action is available. */
        has_undo(): boolean
        /** Returns [code]true[/code] if a "redo" action is available. */
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
         *  In the returned vector, [code]x[/code] is the column, [code]y[/code] is the line. If no results are found, both are equal to [code]-1[/code].
         *  
         */
        search(text: string, flags: number /*i64*/, from_line: number /*i64*/, from_colum: number /*i64*/): Vector2i
        /** Provide custom tooltip text. The callback method must take the following args: [code]hovered_word: String[/code]. */
        set_tooltip_request_func(callback: Callable): void
        /** Returns the local mouse position adjusted for the text direction. */
        get_local_mouse_pos(): Vector2
        /** Returns the word at [param position]. */
        get_word_at_pos(position: Vector2): string
        /** Returns the line and column at the given position. In the returned vector, [code]x[/code] is the column, [code]y[/code] is the line. If [param allow_out_of_bounds] is [code]false[/code] and the position is not over the text, both vector values will be set to [code]-1[/code]. */
        get_line_column_at_pos(position: Vector2i, allow_out_of_bounds: boolean = true): Vector2i
        /** Returns the local position for the given [param line] and [param column]. If [code]x[/code] or [code]y[/code] of the returned vector equal [code]-1[/code], the position is outside of the viewable area of the control.
         *  [b]Note:[/b] The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.
         */
        get_pos_at_line_column(line: number /*i64*/, column: number /*i64*/): Vector2i
        /** Returns the local position and size for the grapheme at the given [param line] and [param column]. If [code]x[/code] or [code]y[/code] position of the returned rect equal [code]-1[/code], the position is outside of the viewable area of the control.
         *  [b]Note:[/b] The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.
         */
        get_rect_at_line_column(line: number /*i64*/, column: number /*i64*/): Rect2i
        /** Returns the equivalent minimap line at [param position]. */
        get_minimap_line_at_pos(position: Vector2i): number /*i64*/
        /** Returns [code]true[/code] if the user is dragging their mouse for scrolling or selecting. */
        is_dragging_cursor(): boolean
        /** Returns whether the mouse is over selection. If [param edges] is [code]true[/code], the edges are considered part of the selection. */
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
        /** Adds a new caret at the given location. Returns the index of the new caret, or [code]-1[/code] if the location is invalid. */
        add_caret(line: number /*i64*/, col: number /*i64*/): number /*i64*/
        /** Removes the given caret index.
         *  [b]Note:[/b] This can result in adjustment of all other caret indices.
         */
        remove_caret(caret: number /*i64*/): void
        /** Removes all additional carets. */
        remove_secondary_carets(): void
        /** Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.
         *  [b]Note:[/b] This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.
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
        /** Returns [code]true[/code] if the caret is visible on the screen. */
        is_caret_visible(caret_index: number /*i64*/ = 0): boolean
        /** Returns the caret pixel draw position. */
        get_caret_draw_pos(caret_index: number /*i64*/ = 0): Vector2
        /** Moves the caret to the specified [param line] index.
         *  If [param adjust_viewport] is [code]true[/code], the viewport will center at the caret position after the move occurs.
         *  If [param can_be_hidden] is [code]true[/code], the specified [param line] can be hidden.
         *  [b]Note:[/b] If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].
         */
        set_caret_line(line: number /*i64*/, adjust_viewport: boolean = true, can_be_hidden: boolean = true, wrap_index: number /*i64*/ = 0, caret_index: number /*i64*/ = 0): void
        /** Returns the line the editing caret is on. */
        get_caret_line(caret_index: number /*i64*/ = 0): number /*i64*/
        /** Moves the caret to the specified [param column] index.
         *  If [param adjust_viewport] is [code]true[/code], the viewport will center at the caret position after the move occurs.
         *  [b]Note:[/b] If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].
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
         *  If [member selecting_enabled] is [code]false[/code], no selection will occur.
         */
        select_all(): void
        /** Selects the word under the caret. */
        select_word_under_caret(caret_index: number /*i64*/ = -1): void
        /** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
        add_selection_for_next_occurrence(): void
        /** Perform selection, from line/column to line/column.
         *  If [member selecting_enabled] is [code]false[/code], no selection will occur.
         */
        select(from_line: number /*i64*/, from_column: number /*i64*/, to_line: number /*i64*/, to_column: number /*i64*/, caret_index: number /*i64*/ = 0): void
        /** Returns [code]true[/code] if the user has selected text. */
        has_selection(caret_index: number /*i64*/ = -1): boolean
        /** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value [code]-1[/code]. */
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
        /** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to [code]0[/code]. */
        center_viewport_to_caret(caret_index: number /*i64*/ = 0): void
        set_draw_minimap(enabled: boolean): void
        is_drawing_minimap(): boolean
        set_minimap_width(width: number /*i64*/): void
        get_minimap_width(): number /*i64*/
        /** Returns the number of lines that may be drawn on the minimap. */
        get_minimap_visible_lines(): number /*i64*/
        /** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of [code]-1[/code] appends the gutter to the right. */
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
        /** Set a custom draw method for the gutter. The callback method must take the following args: [code]line: int, gutter: int, Area: Rect2[/code]. */
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
        /** If [param clickable] is [code]true[/code], makes the [param gutter] on [param line] clickable. See [signal gutter_clicked]. */
        set_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/, clickable: boolean): void
        /** Returns whether the gutter on the given line is clickable. */
        is_line_gutter_clickable(line: number /*i64*/, gutter: number /*i64*/): boolean
        /** Sets the current background color of the line. Set to [code]Color(0, 0, 0, 0)[/code] for no color. */
        set_line_background_color(line: number /*i64*/, color: Color): void
        /** Returns the current background color of the line. [code]Color(0, 0, 0, 0)[/code] is returned if no color is set. */
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
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_menu(): PopupMenu
        /** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
        is_menu_visible(): boolean
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        /** String value of the [TextEdit]. */
        text: string
        /** Text shown when the [TextEdit] is empty. It is [b]not[/b] the [TextEdit]'s default value (see [member text]). */
        placeholder_text: string
        /** If [code]false[/code], existing text cannot be modified and new text cannot be added. */
        editable: boolean
        /** If [code]true[/code], a right-click displays the context menu. */
        context_menu_enabled: boolean
        /** If [code]true[/code], shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        shortcut_keys_enabled: boolean
        /** If [code]true[/code], text can be selected.
         *  If [code]false[/code], text can not be selected by the user or by the [method select] or [method select_all] methods.
         */
        selecting_enabled: boolean
        /** If [code]true[/code], the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        /** If [code]true[/code], allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        /** If [code]true[/code], the native virtual keyboard is shown when focused on platforms that support it. */
        virtual_keyboard_enabled: boolean
        /** If [code]false[/code], using middle mouse button to paste clipboard will be disabled.
         *  [b]Note:[/b] This method is only implemented on Linux.
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
        /** If [code]true[/code], [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. */
        scroll_fit_content_height: boolean
        /** If [code]true[/code], a minimap is shown, providing an outline of your source code. */
        minimap_draw: boolean
        /** The width, in pixels, of the minimap. */
        minimap_width: number /*i64*/
        /** Set the type of caret to draw. */
        caret_type: number /*i64*/
        /** If [code]true[/code], makes the caret blink. */
        caret_blink: boolean
        /** The interval at which the caret blinks (in seconds). */
        caret_blink_interval: number /*f64*/
        /** If [code]true[/code], caret will be visible when [member editable] is disabled. */
        caret_draw_when_editable_disabled: boolean
        /** If [code]true[/code], a right-click moves the caret at the mouse position before displaying the context menu.
         *  If [code]false[/code], the context menu ignores mouse location.
         */
        caret_move_on_right_click: boolean
        /** Allow moving caret, selecting and removing the individual composite character components.
         *  [b]Note:[/b] [kbd]Backspace[/kbd] is always removing individual composite character components.
         */
        caret_mid_grapheme: boolean
        /** Sets if multiple carets are allowed. */
        caret_multiple: boolean
        /** Sets the [SyntaxHighlighter] to use. */
        syntax_highlighter: SyntaxHighlighter
        /** If [code]true[/code], all occurrences of the selected text will be highlighted. */
        highlight_all_occurrences: boolean
        /** If [code]true[/code], the line containing the cursor is highlighted. */
        highlight_current_line: boolean
        /** If [code]true[/code], control characters are displayed. */
        draw_control_chars: boolean
        /** If [code]true[/code], the "tab" character will have a visible representation. */
        draw_tabs: boolean
        /** If [code]true[/code], the "space" character will have a visible representation. */
        draw_spaces: boolean
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
        readonly text_set: Signal
        readonly text_changed: Signal
        readonly lines_edited_from: Signal
        readonly caret_changed: Signal
        readonly gutter_clicked: Signal
        readonly gutter_added: Signal
        readonly gutter_removed: Signal
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
        /** If set to [code]true[/code] text will display invalid characters. */
        preserve_invalid: boolean
        /** If set to [code]true[/code] text will display control characters. */
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
        /** If [code]true[/code], all the text displays as UPPERCASE. */
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
        /** Depths of the mesh, if set to [code]0.0[/code] only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
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
        /** If set to [code]true[/code] text will display invalid characters. */
        preserve_invalid: boolean
        /** If set to [code]true[/code] text will display control characters. */
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
            FONT_ANTIALIASING_NONE = 0,
            FONT_ANTIALIASING_GRAY = 1,
            FONT_ANTIALIASING_LCD = 2,
        }
        enum FontLCDSubpixelLayout {
            FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0,
            FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1,
            FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2,
            FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3,
            FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4,
            FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5,
        }
        enum Direction {
            DIRECTION_AUTO = 0,
            DIRECTION_LTR = 1,
            DIRECTION_RTL = 2,
            DIRECTION_INHERITED = 3,
        }
        enum Orientation {
            ORIENTATION_HORIZONTAL = 0,
            ORIENTATION_VERTICAL = 1,
        }
        enum JustificationFlag {
            JUSTIFICATION_NONE = 0,
            JUSTIFICATION_KASHIDA = 1,
            JUSTIFICATION_WORD_BOUND = 2,
            JUSTIFICATION_TRIM_EDGE_SPACES = 4,
            JUSTIFICATION_AFTER_LAST_TAB = 8,
            JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16,
            JUSTIFICATION_SKIP_LAST_LINE = 32,
            JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64,
            JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128,
        }
        enum AutowrapMode {
            AUTOWRAP_OFF = 0,
            AUTOWRAP_ARBITRARY = 1,
            AUTOWRAP_WORD = 2,
            AUTOWRAP_WORD_SMART = 3,
        }
        enum LineBreakFlag {
            BREAK_NONE = 0,
            BREAK_MANDATORY = 1,
            BREAK_WORD_BOUND = 2,
            BREAK_GRAPHEME_BOUND = 4,
            BREAK_ADAPTIVE = 8,
            BREAK_TRIM_EDGE_SPACES = 16,
        }
        enum VisibleCharactersBehavior {
            VC_CHARS_BEFORE_SHAPING = 0,
            VC_CHARS_AFTER_SHAPING = 1,
            VC_GLYPHS_AUTO = 2,
            VC_GLYPHS_LTR = 3,
            VC_GLYPHS_RTL = 4,
        }
        enum OverrunBehavior {
            OVERRUN_NO_TRIMMING = 0,
            OVERRUN_TRIM_CHAR = 1,
            OVERRUN_TRIM_WORD = 2,
            OVERRUN_TRIM_ELLIPSIS = 3,
            OVERRUN_TRIM_WORD_ELLIPSIS = 4,
        }
        enum TextOverrunFlag {
            OVERRUN_NO_TRIM = 0,
            OVERRUN_TRIM = 1,
            OVERRUN_TRIM_WORD_ONLY = 2,
            OVERRUN_ADD_ELLIPSIS = 4,
            OVERRUN_ENFORCE_ELLIPSIS = 8,
            OVERRUN_JUSTIFICATION_AWARE = 16,
        }
        enum GraphemeFlag {
            GRAPHEME_IS_VALID = 1,
            GRAPHEME_IS_RTL = 2,
            GRAPHEME_IS_VIRTUAL = 4,
            GRAPHEME_IS_SPACE = 8,
            GRAPHEME_IS_BREAK_HARD = 16,
            GRAPHEME_IS_BREAK_SOFT = 32,
            GRAPHEME_IS_TAB = 64,
            GRAPHEME_IS_ELONGATION = 128,
            GRAPHEME_IS_PUNCTUATION = 256,
            GRAPHEME_IS_UNDERSCORE = 512,
            GRAPHEME_IS_CONNECTED = 1024,
            GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048,
            GRAPHEME_IS_EMBEDDED_OBJECT = 4096,
        }
        enum Hinting {
            HINTING_NONE = 0,
            HINTING_LIGHT = 1,
            HINTING_NORMAL = 2,
        }
        enum SubpixelPositioning {
            SUBPIXEL_POSITIONING_DISABLED = 0,
            SUBPIXEL_POSITIONING_AUTO = 1,
            SUBPIXEL_POSITIONING_ONE_HALF = 2,
            SUBPIXEL_POSITIONING_ONE_QUARTER = 3,
            SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20,
            SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16,
        }
        enum Feature {
            FEATURE_SIMPLE_LAYOUT = 1,
            FEATURE_BIDI_LAYOUT = 2,
            FEATURE_VERTICAL_LAYOUT = 4,
            FEATURE_SHAPING = 8,
            FEATURE_KASHIDA_JUSTIFICATION = 16,
            FEATURE_BREAK_ITERATORS = 32,
            FEATURE_FONT_BITMAP = 64,
            FEATURE_FONT_DYNAMIC = 128,
            FEATURE_FONT_MSDF = 256,
            FEATURE_FONT_SYSTEM = 512,
            FEATURE_FONT_VARIABLE = 1024,
            FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048,
            FEATURE_USE_SUPPORT_DATA = 4096,
            FEATURE_UNICODE_IDENTIFIERS = 8192,
            FEATURE_UNICODE_SECURITY = 16384,
        }
        enum ContourPointTag {
            CONTOUR_CURVE_TAG_ON = 1,
            CONTOUR_CURVE_TAG_OFF_CONIC = 0,
            CONTOUR_CURVE_TAG_OFF_CUBIC = 2,
        }
        enum SpacingType {
            SPACING_GLYPH = 0,
            SPACING_SPACE = 1,
            SPACING_TOP = 2,
            SPACING_BOTTOM = 3,
            SPACING_MAX = 4,
        }
        enum FontStyle {
            FONT_BOLD = 1,
            FONT_ITALIC = 2,
            FONT_FIXED_WIDTH = 4,
        }
        enum StructuredTextParser {
            STRUCTURED_TEXT_DEFAULT = 0,
            STRUCTURED_TEXT_URI = 1,
            STRUCTURED_TEXT_FILE = 2,
            STRUCTURED_TEXT_EMAIL = 3,
            STRUCTURED_TEXT_LIST = 4,
            STRUCTURED_TEXT_GDSCRIPT = 5,
            STRUCTURED_TEXT_CUSTOM = 6,
        }
        enum FixedSizeScaleMode {
            FIXED_SIZE_SCALE_DISABLE = 0,
            FIXED_SIZE_SCALE_INTEGER_ONLY = 1,
            FIXED_SIZE_SCALE_ENABLED = 2,
        }
    }
    /** A server interface for font management and text rendering. */
    class TextServer extends RefCounted {
        /** Returns [code]true[/code] if the server supports a feature. */
        has_feature(feature: TextServer.Feature): boolean
        /** Returns the name of the server interface. */
        get_name(): string
        /** Returns text server features, see [enum Feature]. */
        get_features(): number /*i64*/
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries).
         *  [b]Note:[/b] This function should be called before any other TextServer functions used, otherwise it won't have any effect.
         */
        load_support_data(filename: string): boolean
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        get_support_data_filename(): string
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        get_support_data_info(): string
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.
         *  [b]Note:[/b] This function is used by during project export, to include TextServer database.
         */
        save_support_data(filename: string): boolean
        /** Returns [code]true[/code] if locale is right-to-left. */
        is_locale_right_to_left(locale: string): boolean
        /** Converts readable feature, variation, script or language name to OpenType tag. */
        name_to_tag(name: string): number /*i64*/
        /** Converts OpenType tag to readable feature, variation, script or language name. */
        tag_to_name(tag: number /*i64*/): string
        /** Returns [code]true[/code] if [param rid] is valid resource owned by this text server. */
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
         *  [b]Note:[/b] This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], [method font_set_embolden], or [method font_set_transform] instead.
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
        /** Sets weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code].
         *  [b]Note:[/b] This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_embolden] instead.
         */
        font_set_weight(font_rid: RID, weight: number /*i64*/): void
        /** Returns weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
        font_get_weight(font_rid: RID): number /*i64*/
        /** Sets font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code].
         *  [b]Note:[/b] This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_transform] instead.
         */
        font_set_stretch(font_rid: RID, weight: number /*i64*/): void
        /** Returns font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
        font_get_stretch(font_rid: RID): number /*i64*/
        /** Sets font anti-aliasing mode. */
        font_set_antialiasing(font_rid: RID, antialiasing: TextServer.FontAntialiasing): void
        /** Returns font anti-aliasing mode. */
        font_get_antialiasing(font_rid: RID): TextServer.FontAntialiasing
        /** If set to [code]true[/code] font texture mipmap generation is enabled. */
        font_set_generate_mipmaps(font_rid: RID, generate_mipmaps: boolean): void
        /** Returns [code]true[/code] if font texture mipmap generation is enabled. */
        font_get_generate_mipmaps(font_rid: RID): boolean
        /** If set to [code]true[/code], glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
         *  [b]Note:[/b] MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.
         */
        font_set_multichannel_signed_distance_field(font_rid: RID, msdf: boolean): void
        /** Returns [code]true[/code] if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
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
        /** Sets bitmap font scaling mode. This property is used only if [code]fixed_size[/code] is greater than zero. */
        font_set_fixed_size_scale_mode(font_rid: RID, fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        /** Returns bitmap font scaling mode. */
        font_get_fixed_size_scale_mode(font_rid: RID): TextServer.FixedSizeScaleMode
        /** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
        font_set_allow_system_fallback(font_rid: RID, allow_system_fallback: boolean): void
        /** Returns [code]true[/code] if system fonts can be automatically used as fallbacks. */
        font_is_allow_system_fallback(font_rid: RID): boolean
        /** If set to [code]true[/code] auto-hinting is preferred over font built-in hinting. */
        font_set_force_autohinter(font_rid: RID, force_autohinter: boolean): void
        /** Returns [code]true[/code] if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only. */
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
         *  For example, to simulate italic typeface by slanting, apply the following transform [code]Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)[/code].
         */
        font_set_transform(font_rid: RID, transform: Transform2D): void
        /** Returns 2D transform applied to the font outlines. */
        font_get_transform(font_rid: RID): Transform2D
        /** Sets variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_set_variation_coordinates(font_rid: RID, variation_coordinates: Dictionary): void
        /** Returns variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        font_get_variation_coordinates(font_rid: RID): Dictionary
        /** Sets font oversampling factor, if set to [code]0.0[/code] global oversampling factor is used instead. Used by dynamic fonts only. */
        font_set_oversampling(font_rid: RID, oversampling: number /*f64*/): void
        /** Returns font oversampling factor, if set to [code]0.0[/code] global oversampling factor is used instead. Used by dynamic fonts only. */
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
         *  [b]Note:[/b] This function will not remove glyphs associated with the texture, use [method font_remove_glyph] to remove them manually.
         */
        font_clear_textures(font_rid: RID, size: Vector2i): void
        /** Removes specified texture from the cache entry.
         *  [b]Note:[/b] This function will not remove glyphs associated with the texture, remove them manually, using [method font_remove_glyph].
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
         *  [b]Note:[/b] This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.
         */
        font_clear_glyphs(font_rid: RID, size: Vector2i): void
        /** Removes specified rendered glyph information from the cache entry.
         *  [b]Note:[/b] This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.
         */
        font_remove_glyph(font_rid: RID, size: Vector2i, glyph: number /*i64*/): void
        /** Returns glyph advance (offset of the next glyph).
         *  [b]Note:[/b] Advance for glyphs outlines is the same as the base glyph advance and is not saved.
         */
        font_get_glyph_advance(font_rid: RID, size: number /*i64*/, glyph: number /*i64*/): Vector2
        /** Sets glyph advance (offset of the next glyph).
         *  [b]Note:[/b] Advance for glyphs outlines is the same as the base glyph advance and is not saved.
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
         *  [b]Note:[/b] If there are pending glyphs to render, calling this function might trigger the texture cache update.
         */
        font_get_glyph_texture_rid(font_rid: RID, size: Vector2i, glyph: number /*i64*/): RID
        /** Returns size of the cache texture containing the glyph.
         *  [b]Note:[/b] If there are pending glyphs to render, calling this function might trigger the texture cache update.
         */
        font_get_glyph_texture_size(font_rid: RID, size: Vector2i, glyph: number /*i64*/): Vector2
        /** Returns outline contours of the glyph as a [Dictionary] with the following contents:
         *  [code]points[/code]         - [PackedVector3Array], containing outline points. [code]x[/code] and [code]y[/code] are point coordinates. [code]z[/code] is the type of the point, using the [enum ContourPointTag] values.
         *  [code]contours[/code]       - [PackedInt32Array], containing indices the end points of each contour.
         *  [code]orientation[/code]    - [bool], contour orientation. If [code]true[/code], clockwise contours must be filled.
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
        /** Returns character code associated with [param glyph_index], or [code]0[/code] if [param glyph_index] is invalid. See [method font_get_glyph_index]. */
        font_get_char_from_glyph_index(font_rid: RID, size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        /** Returns [code]true[/code] if a Unicode [param char] is available in the font. */
        font_has_char(font_rid: RID, char: number /*i64*/): boolean
        /** Returns a string containing all the characters available in the font. */
        font_get_supported_chars(font_rid: RID): string
        /** Renders the range of characters to the font cache texture. */
        font_render_range(font_rid: RID, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        /** Renders specified glyph to the font cache texture. */
        font_render_glyph(font_rid: RID, size: Vector2i, index: number /*i64*/): void
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size].
         *  [b]Note:[/b] Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].
         *  [b]Note:[/b] If there are pending glyphs to render, calling this function might trigger the texture cache update.
         */
        font_draw_glyph(font_rid: RID, canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size].
         *  [b]Note:[/b] Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].
         *  [b]Note:[/b] If there are pending glyphs to render, calling this function might trigger the texture cache update.
         */
        font_draw_glyph_outline(font_rid: RID, canvas: RID, size: number /*i64*/, outline_size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color = new Color(1, 1, 1, 1)): void
        /** Returns [code]true[/code], if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        font_is_language_supported(font_rid: RID, language: string): boolean
        /** Adds override for [method font_is_language_supported]. */
        font_set_language_support_override(font_rid: RID, language: string, supported: boolean): void
        /** Returns [code]true[/code] if support override is enabled for the [param language]. */
        font_get_language_support_override(font_rid: RID, language: string): boolean
        /** Remove language support override. */
        font_remove_language_support_override(font_rid: RID, language: string): void
        /** Returns list of language support overrides. */
        font_get_language_support_overrides(font_rid: RID): PackedStringArray
        /** Returns [code]true[/code], if font supports given script (ISO 15924 code). */
        font_is_script_supported(font_rid: RID, script: string): boolean
        /** Adds override for [method font_is_script_supported]. */
        font_set_script_support_override(font_rid: RID, script: string, supported: boolean): void
        /** Returns [code]true[/code] if support override is enabled for the [param script]. */
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
         *  [b]Note:[/b] This value can be automatically changed by display server.
         */
        font_set_global_oversampling(oversampling: number /*f64*/): void
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        get_hex_code_box_size(size: number /*i64*/, index: number /*i64*/): Vector2
        /** Draws box displaying character hexadecimal code. Used for replacing missing characters. */
        draw_hex_code_box(canvas: RID, size: number /*i64*/, pos: Vector2, index: number /*i64*/, color: Color): void
        /** Creates new buffer for complex text layout, with the given [param direction] and [param orientation]. To free the resulting buffer, use [method free_rid] method.
         *  [b]Note:[/b] Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).
         *  [b]Note:[/b] Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).
         */
        create_shaped_text(direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): RID
        /** Clears text buffer (removes text and inline objects). */
        shaped_text_clear(rid: RID): void
        /** Sets desired text direction. If set to [constant DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.
         *  [b]Note:[/b] Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).
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
         *  [b]Note:[/b] Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).
         */
        shaped_text_set_orientation(shaped: RID, orientation: TextServer.Orientation = 0): void
        /** Returns text orientation. */
        shaped_text_get_orientation(shaped: RID): TextServer.Orientation
        /** If set to [code]true[/code] text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        shaped_text_set_preserve_invalid(shaped: RID, enabled: boolean): void
        /** Returns [code]true[/code] if text buffer is configured to display hexadecimal codes in place of invalid characters.
         *  [b]Note:[/b] If set to [code]false[/code], nothing is displayed in place of invalid characters.
         */
        shaped_text_get_preserve_invalid(shaped: RID): boolean
        /** If set to [code]true[/code] text buffer will display control characters. */
        shaped_text_set_preserve_control(shaped: RID, enabled: boolean): void
        /** Returns [code]true[/code] if text buffer is configured to display control characters. */
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
        /** Shapes buffer if it's not shaped. Returns [code]true[/code] if the string is shaped successfully.
         *  [b]Note:[/b] It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.
         */
        shaped_text_shape(shaped: RID): boolean
        /** Returns [code]true[/code] if buffer is successfully shaped. */
        shaped_text_is_ready(shaped: RID): boolean
        /** Returns [code]true[/code] if text buffer contains any visible characters. */
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
         *  [b]Note:[/b] Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.
         */
        shaped_text_get_ascent(shaped: RID): number /*f64*/
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).
         *  [b]Note:[/b] Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.
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
        /** Returns grapheme index at the specified pixel offset at the baseline, or [code]-1[/code] if none is found. */
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
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or [code]-1[/code] if none is found.
         *  [b]Note:[/b] This method doesn't detect invisible characters, for spoof detection use it in combination with [method spoof_check].
         *  [b]Note:[/b] Always returns [code]-1[/code] if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.
         */
        is_confusable(string_: string, dict: PackedStringArray): number /*i64*/
        /** Returns [code]true[/code] if [param string] is likely to be an attempt at confusing the reader.
         *  [b]Note:[/b] Always returns [code]false[/code] if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.
         */
        spoof_check(string_: string): boolean
        /** Strips diacritics from the string.
         *  [b]Note:[/b] The result may be longer or shorter than the original.
         */
        strip_diacritics(string_: string): string
        /** Returns [code]true[/code] if [param string] is a valid identifier.
         *  If the text server supports the [constant FEATURE_UNICODE_IDENTIFIERS] feature, a valid identifier must:
         *  - Conform to normalization form C.
         *  - Begin with a Unicode character of class XID_Start or [code]"_"[/code].
         *  - May contain Unicode characters of class XID_Continue in the other positions.
         *  - Use UAX #31 recommended scripts only (mixed scripts are allowed).
         *  If the [constant FEATURE_UNICODE_IDENTIFIERS] feature is not supported, a valid identifier must:
         *  - Begin with a Unicode character of class XID_Start or [code]"_"[/code].
         *  - May contain Unicode characters of class XID_Continue in the other positions.
         */
        is_valid_identifier(string_: string): boolean
        /** Returns the string converted to uppercase.
         *  [b]Note:[/b] Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).
         *  [b]Note:[/b] The result may be longer or shorter than the original.
         */
        string_to_upper(string_: string, language: string = ''): string
        /** Returns the string converted to lowercase.
         *  [b]Note:[/b] Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).
         *  [b]Note:[/b] The result may be longer or shorter than the original.
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
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _is_pixel_opaque(x: number /*i64*/, y: number /*i64*/): boolean
        /* gdvirtual */ _has_alpha(): boolean
        /* gdvirtual */ _draw(to_canvas_item: RID, pos: Vector2, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _draw_rect(to_canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _draw_rect_region(to_canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color, transpose: boolean, clip_uv: boolean): void
        /** Returns the texture width in pixels. */
        get_width(): number /*i64*/
        /** Returns the texture height in pixels. */
        get_height(): number /*i64*/
        /** Returns the texture size in pixels. */
        get_size(): Vector2
        /** Returns [code]true[/code] if this [Texture2D] has an alpha channel. */
        has_alpha(): boolean
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvas_item: RID, position: Vector2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect(canvas_item: RID, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        /** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
        draw_rect_region(canvas_item: RID, rect: Rect2, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        /** Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.
         *  [b]Note:[/b] This will return [code]null[/code] if this [Texture2D] is invalid.
         *  [b]Note:[/b] This will fetch the texture data from the GPU, which might cause performance problems when overused.
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
        /* gdvirtual */ _get_format(): Image.Format
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _get_depth(): number /*i64*/
        /* gdvirtual */ _has_mipmaps(): boolean
        /* gdvirtual */ _get_data(): Array
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        get_height(): number /*i64*/
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        get_depth(): number /*i64*/
        /** Returns [code]true[/code] if the [Texture3D] has generated mipmaps. */
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
            STRETCH_SCALE = 0,
            STRETCH_TILE = 1,
            STRETCH_KEEP = 2,
            STRETCH_KEEP_CENTERED = 3,
            STRETCH_KEEP_ASPECT = 4,
            STRETCH_KEEP_ASPECT_CENTERED = 5,
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
        /** Texture to display by default, when the node is [b]not[/b] in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
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
        /** If [code]true[/code], the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        ignore_texture_size: any /*bool*/
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        stretch_mode: number /*i64*/
        /** If [code]true[/code], texture is flipped horizontally. */
        flip_h: any /*bool*/
        /** If [code]true[/code], texture is flipped vertically. */
        flip_v: any /*bool*/
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
            LAYERED_TYPE_2D_ARRAY = 0,
            LAYERED_TYPE_CUBEMAP = 1,
            LAYERED_TYPE_CUBEMAP_ARRAY = 2,
        }
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format. */
    class TextureLayered extends Texture {
        /* gdvirtual */ _get_format(): Image.Format
        /* gdvirtual */ _get_layered_type(): number /*i64*/
        /* gdvirtual */ _get_width(): number /*i64*/
        /* gdvirtual */ _get_height(): number /*i64*/
        /* gdvirtual */ _get_layers(): number /*i64*/
        /* gdvirtual */ _has_mipmaps(): boolean
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
        /** Returns [code]true[/code] if the layers have generated mipmaps. */
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
            FILL_LEFT_TO_RIGHT = 0,
            FILL_RIGHT_TO_LEFT = 1,
            FILL_TOP_TO_BOTTOM = 2,
            FILL_BOTTOM_TO_TOP = 3,
            FILL_CLOCKWISE = 4,
            FILL_COUNTER_CLOCKWISE = 5,
            FILL_BILINEAR_LEFT_AND_RIGHT = 6,
            FILL_BILINEAR_TOP_AND_BOTTOM = 7,
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
        /** If [code]true[/code], Godot treats the bar's textures like in [NinePatchRect]. Use the [code]stretch_margin_*[/code] properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will enable stretching. */
        nine_patch_stretch: boolean
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        texture_under: Texture2D
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        texture_over: Texture2D
        /** [Texture2D] that clips based on the node's [code]value[/code] and [member fill_mode]. As [code]value[/code] increased, the texture fills up. It shows entirely when [code]value[/code] reaches [code]max_value[/code]. It doesn't show at all if [code]value[/code] is equal to [code]min_value[/code].
         *  The [code]value[/code] property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].
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
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's [code]value[/code] is equal to its [code]min_value[/code], the texture doesn't show up at all. When the [code]value[/code] increases, the texture fills and tends towards [member radial_fill_degrees]. */
        radial_initial_angle: number /*f64*/
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's [code]value[/code] is equal to its [code]max_value[/code], the texture fills up to this angle.
         *  See [member Range.value], [member Range.max_value].
         */
        radial_fill_degrees: number /*f64*/
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. */
        radial_center_offset: Vector2
    }
    namespace TextureRect {
        enum ExpandMode {
            EXPAND_KEEP_SIZE = 0,
            EXPAND_IGNORE_SIZE = 1,
            EXPAND_FIT_WIDTH = 2,
            EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
            EXPAND_FIT_HEIGHT = 4,
            EXPAND_FIT_HEIGHT_PROPORTIONAL = 5,
        }
        enum StretchMode {
            STRETCH_SCALE = 0,
            STRETCH_TILE = 1,
            STRETCH_KEEP = 2,
            STRETCH_KEEP_CENTERED = 3,
            STRETCH_KEEP_ASPECT = 4,
            STRETCH_KEEP_ASPECT_CENTERED = 5,
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
         *  [b]Note:[/b] Using [constant EXPAND_FIT_WIDTH], [constant EXPAND_FIT_WIDTH_PROPORTIONAL], [constant EXPAND_FIT_HEIGHT] or [constant EXPAND_FIT_HEIGHT_PROPORTIONAL] may result in unstable behavior in some containers. This functionality is being re-evaluated and will change in the future.
         */
        expand_mode: number /*i64*/
        /** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
        stretch_mode: number /*i64*/
        /** If [code]true[/code], texture is flipped horizontally. */
        flip_h: boolean
        /** If [code]true[/code], texture is flipped vertically. */
        flip_v: boolean
    }
    class TextureRegionEditor extends AcceptDialog {
        _update_rect(): void
    }
    class TextureRegionEditorPlugin extends EditorPlugin {
    }
    namespace Theme {
        enum DataType {
            DATA_TYPE_COLOR = 0,
            DATA_TYPE_CONSTANT = 1,
            DATA_TYPE_FONT = 2,
            DATA_TYPE_FONT_SIZE = 3,
            DATA_TYPE_ICON = 4,
            DATA_TYPE_STYLEBOX = 5,
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
        /** Returns [code]true[/code] if the icon property defined by [param name] and [param theme_type] exists.
         *  Returns [code]false[/code] if it doesn't exist. Use [method set_icon] to define it.
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
        /** Returns [code]true[/code] if the [StyleBox] property defined by [param name] and [param theme_type] exists.
         *  Returns [code]false[/code] if it doesn't exist. Use [method set_stylebox] to define it.
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
        /** Returns [code]true[/code] if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).
         *  Returns [code]false[/code] if neither exist. Use [method set_font] to define the property.
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
        /** Returns [code]true[/code] if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).
         *  Returns [code]false[/code] if neither exist. Use [method set_font_size] to define the property.
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
        /** Returns [code]true[/code] if the [Color] property defined by [param name] and [param theme_type] exists.
         *  Returns [code]false[/code] if it doesn't exist. Use [method set_color] to define it.
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
         *  Returns [code]0[/code] if the property doesn't exist. Use [method has_constant] to check for existence.
         */
        get_constant(name: StringName, theme_type: StringName): number /*i64*/
        /** Returns [code]true[/code] if the constant property defined by [param name] and [param theme_type] exists.
         *  Returns [code]false[/code] if it doesn't exist. Use [method set_constant] to define it.
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
        /** Returns [code]true[/code] if [member default_base_scale] has a valid value.
         *  Returns [code]false[/code] if it doesn't. The value must be greater than [code]0.0[/code] to be considered valid.
         */
        has_default_base_scale(): boolean
        set_default_font(font: Font): void
        get_default_font(): Font
        /** Returns [code]true[/code] if [member default_font] has a valid value.
         *  Returns [code]false[/code] if it doesn't.
         */
        has_default_font(): boolean
        set_default_font_size(font_size: number /*i64*/): void
        get_default_font_size(): number /*i64*/
        /** Returns [code]true[/code] if [member default_font_size] has a valid value.
         *  Returns [code]false[/code] if it doesn't. The value must be greater than [code]0[/code] to be considered valid.
         */
        has_default_font_size(): boolean
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.
         *  Fails if the [param value] type is not accepted by [param data_type].
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        set_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName, value: any): void
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        get_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): any
        /** Returns [code]true[/code] if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.
         *  Returns [code]false[/code] if it doesn't exist. Use [method set_theme_item] to define it.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        has_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): boolean
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        rename_theme_item(data_type: Theme.DataType, old_name: StringName, name: StringName, theme_type: StringName): void
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        clear_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): void
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        get_theme_item_list(data_type: Theme.DataType, theme_type: string): PackedStringArray
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.
         *  [b]Note:[/b] This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
         */
        get_theme_item_type_list(data_type: Theme.DataType): PackedStringArray
        /** Marks [param theme_type] as a variation of [param base_type].
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.
         *  [b]Note:[/b] Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].
         */
        set_type_variation(theme_type: StringName, base_type: StringName): void
        /** Returns [code]true[/code] if [param theme_type] is marked as a variation of [param base_type]. */
        is_type_variation(theme_type: StringName, base_type: StringName): boolean
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clear_type_variation(theme_type: StringName): void
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        get_type_variation_base(theme_type: StringName): StringName
        /** Returns a list of all type variations for the given [param base_type]. */
        get_type_variation_list(base_type: StringName): PackedStringArray
        /** Adds an empty theme type for every valid data type.
         *  [b]Note:[/b] Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available [code]set_*[/code] methods to add theme items.
         */
        add_type(theme_type: StringName): void
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        remove_type(theme_type: StringName): void
        /** Returns a list of all unique theme type names. Use the appropriate [code]get_*_type_list[/code] method to get a list of unique theme types for a single data type. */
        get_type_list(): PackedStringArray
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.
         *  [b]Note:[/b] This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.
         */
        merge_with(other: Theme): void
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to [code]0.0[/code], the global scale factor is used (see [member ThemeDB.fallback_base_scale]).
         *  Use [method has_default_base_scale] to check if this value is valid.
         */
        default_base_scale: number /*f64*/
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).
         *  Use [method has_default_font] to check if this value is valid.
         */
        default_font: Font
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).
         *  Values below [code]0[/code] are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.
         */
        default_font_size: number /*i64*/
    }
    class ThemeContext extends Object {
        readonly changed: Signal
    }
    class ThemeEditor extends VBoxContainer {
    }
    class ThemeEditorPlugin extends EditorPlugin {
    }
    class ThemeEditorPreview extends VBoxContainer {
        readonly control_picked: Signal
    }
    class ThemeItemEditorDialog extends AcceptDialog {
        _update_edit_types(): void
        _update_edit_item_tree(_unnamed_arg0: string): void
    }
    class ThemeItemImportTree extends VBoxContainer {
        readonly items_imported: Signal
    }
    class ThemeTypeDialog extends ConfirmationDialog {
        readonly type_selected: Signal
    }
    class ThemeTypeEditor extends MarginContainer {
        _update_type_items(): void
        _pin_leading_stylebox(_unnamed_arg0: string, _unnamed_arg1: StyleBox): void
        _unpin_leading_stylebox(): void
        _change_pinned_stylebox(): void
    }
    namespace Thread {
        enum Priority {
            PRIORITY_LOW = 0,
            PRIORITY_NORMAL = 1,
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
        /** Returns [code]true[/code] if this [Thread] has been started. Once started, this will return [code]true[/code] until it is joined using [method wait_to_finish]. For checking if a [Thread] is still executing its task, use [method is_alive]. */
        is_started(): boolean
        /** Returns [code]true[/code] if this [Thread] is currently running the provided function. This is useful for determining if [method wait_to_finish] can be called without blocking the calling thread.
         *  To check if a [Thread] is joinable, use [method is_started].
         */
        is_alive(): boolean
        /** Joins the [Thread] and waits for it to finish. Returns the output of the [Callable] passed to [method start].
         *  Should either be used when you want to retrieve the value returned from the method called by the [Thread] or before freeing the instance that contains the [Thread].
         *  To determine if this can be called without blocking the calling thread, check if [method is_alive] is [code]false[/code].
         */
        wait_to_finish(): any
        /** Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [Node]) should happen [b]on the current thread[/b].
         *  The default, for every thread, is that they are enabled (as if called with [param enabled] being [code]true[/code]).
         *  Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.
         *  Because of that, there may be cases where the user may want to disable them ([param enabled] being [code]false[/code]) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [Mutex]) for those objects that are otherwise protected by the engine.
         *  [b]Note:[/b] This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.
         *  [b]Note:[/b] This is useful for scripts running on either arbitrary [Thread] objects or tasks submitted to the [WorkerThreadPool]. It doesn't apply to code running during [Node] group processing, where the checks will be always performed.
         *  [b]Note:[/b] Even in the case of having disabled the checks in a [WorkerThreadPool] task, there's no need to re-enable them at the end. The engine will do so.
         */
        static set_thread_safety_checks_enabled(enabled: boolean): void
    }
    class TileAtlasView extends Control {
        readonly transform_changed: Signal
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
        /** If [code]true[/code], the tile will have its texture flipped horizontally. */
        flip_h: boolean
        /** If [code]true[/code], the tile will have its texture flipped vertically. */
        flip_v: boolean
        /** If [code]true[/code], the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
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
        readonly changed: Signal
    }
    namespace TileMap {
        enum VisibilityMode {
            VISIBILITY_MODE_DEFAULT = 0,
            VISIBILITY_MODE_FORCE_HIDE = 2,
            VISIBILITY_MODE_FORCE_SHOW = 1,
        }
    }
    /** Node for 2D tile-based maps. */
    class TileMap extends Node2D {
        /* gdvirtual */ _use_tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i): boolean
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
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with [code]-1[/code] adding the layer at the end of the array. */
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
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be [code]Vector2i(0, 0)[/code]),
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].
         *  If [param source_id] is set to [code]-1[/code], [param atlas_coords] to [code]Vector2i(-1, -1)[/code] or [param alternative_tile] to [code]-1[/code], the cell will be erased. An erased cell gets [b]all[/b] its identifiers automatically set to their respective invalid values, namely [code]-1[/code], [code]Vector2i(-1, -1)[/code] and [code]-1[/code].
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        set_cell(layer: number /*i64*/, coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = 0): void
        /** Erases the cell on layer [param layer] at coordinates [param coords].
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        erase_cell(layer: number /*i64*/, coords: Vector2i): void
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns [code]-1[/code] if the cell does not exist.
         *  If [param use_proxies] is [code]false[/code], ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        get_cell_source_id(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. If [param use_proxies] is [code]false[/code], ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        get_cell_atlas_coords(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): Vector2i
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords]. If [param use_proxies] is [code]false[/code], ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        get_cell_alternative_tile(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        /** Returns the [TileData] object associated with the given cell, or [code]null[/code] if the cell does not exist or is not a [TileSetAtlasSource].
         *  If [param layer] is negative, the layers are accessed from the last one.
         *  If [param use_proxies] is [code]false[/code], ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
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
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating [code]position_in_tile_map + coords_in_pattern[/code]. */
        map_pattern(position_in_tilemap: Vector2i, coords_in_pattern: Vector2i, pattern: TileMapPattern): Vector2i
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        set_pattern(layer: number /*i64*/, position: Vector2i, pattern: TileMapPattern): void
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
         *  If [param layer] is negative, the layers are accessed from the last one.
         *  [b]Note:[/b] To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
         */
        set_cells_terrain_connect(layer: number /*i64*/, cells: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
         *  If [param layer] is negative, the layers are accessed from the last one.
         *  [b]Note:[/b] To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
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
         *  [b]Warning:[/b] Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.
         */
        update_internals(): void
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.
         *  [b]Warning:[/b] Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.
         *  [b]Note:[/b] This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).
         */
        notify_runtime_tile_data_update(layer: number /*i64*/ = -1): void
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        get_surrounding_cells(coords: Vector2i): Array
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is [code]Vector2(-1, -1)[/code] and its alternative identifier is -1.
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        get_used_cells(layer: number /*i64*/): Array
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is [code]Vector2(-1, -1)[/code] and its alternative identifier is -1.
         *  If [param layer] is negative, the layers are accessed from the last one.
         */
        get_used_cells_by_id(layer: number /*i64*/, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): Array
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        get_used_rect(): Rect2i
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].
         *  [b]Note:[/b] This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.
         */
        map_to_local(map_position: Vector2i): Vector2
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector2): Vector2i
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        get_neighbor_cell(coords: Vector2i, neighbor: TileSet.CellNeighbor): Vector2i
        /** The assigned [TileSet]. */
        tile_set: TileSet
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quandrant size groups together [code]16 * 16 = 256[/code] tiles.
         *  The quadrant size does not apply on Y-sorted layers, as tiles are be grouped by Y position instead in that case.
         *  [b]Note:[/b] As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.
         */
        rendering_quadrant_size: number /*i64*/
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.
         *  [b]Note:[/b] Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.
         */
        collision_animatable: boolean
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        collision_visibility_mode: number /*i64*/
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        navigation_visibility_mode: number /*i64*/
        readonly changed: Signal
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
            TILE_SHAPE_SQUARE = 0,
            TILE_SHAPE_ISOMETRIC = 1,
            TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
            TILE_SHAPE_HEXAGON = 3,
        }
        enum TileLayout {
            TILE_LAYOUT_STACKED = 0,
            TILE_LAYOUT_STACKED_OFFSET = 1,
            TILE_LAYOUT_STAIRS_RIGHT = 2,
            TILE_LAYOUT_STAIRS_DOWN = 3,
            TILE_LAYOUT_DIAMOND_RIGHT = 4,
            TILE_LAYOUT_DIAMOND_DOWN = 5,
        }
        enum TileOffsetAxis {
            TILE_OFFSET_AXIS_HORIZONTAL = 0,
            TILE_OFFSET_AXIS_VERTICAL = 1,
        }
        enum CellNeighbor {
            CELL_NEIGHBOR_RIGHT_SIDE = 0,
            CELL_NEIGHBOR_RIGHT_CORNER = 1,
            CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
            CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
            CELL_NEIGHBOR_BOTTOM_SIDE = 4,
            CELL_NEIGHBOR_BOTTOM_CORNER = 5,
            CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
            CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
            CELL_NEIGHBOR_LEFT_SIDE = 8,
            CELL_NEIGHBOR_LEFT_CORNER = 9,
            CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
            CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
            CELL_NEIGHBOR_TOP_SIDE = 12,
            CELL_NEIGHBOR_TOP_CORNER = 13,
            CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
            CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15,
        }
        enum TerrainMode {
            TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
            TERRAIN_MODE_MATCH_CORNERS = 1,
            TERRAIN_MODE_MATCH_SIDES = 2,
        }
    }
    /** Tile library for tilemaps. */
    class TileSet extends Resource {
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        get_next_source_id(): number /*i64*/
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.
         *  The function returns the added source ID or -1 if the source could not be added.
         *  [b]Warning:[/b] A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.
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
        /** Returns if the occluders from this layer use [code]sdf_collision[/code]. */
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
            TILE_ANIMATION_MODE_DEFAULT = 0,
            TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
            TILE_ANIMATION_MODE_MAX = 2,
        }
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource. */
    class TileSetAtlasSource extends TileSetSource {
        static readonly TRANSFORM_FLIP_H = 4096
        static readonly TRANSFORM_FLIP_V = 8192
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
         *  If [param new_atlas_coords] is [code]Vector2i(-1, -1)[/code], keeps the tile's coordinates. If [param new_size] is [code]Vector2i(-1, -1)[/code], keeps the tile's size.
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].
         */
        move_tile_in_atlas(atlas_coords: Vector2i, new_atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, new_size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        get_tile_size_in_atlas(atlas_coords: Vector2i): Vector2i
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        has_room_for_tile(atlas_coords: Vector2i, size: Vector2i, animation_columns: number /*i64*/, animation_separation: Vector2i, frames_count: number /*i64*/, ignored_tile: Vector2i = <any> {} /*compound.type from 6([object Object])*/): boolean
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        get_tiles_to_be_removed_on_change(texture: Texture2D, margins: Vector2i, separation: Vector2i, texture_region_size: Vector2i): PackedVector2Array
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns [code]Vector2i(-1, -1)[/code] otherwise. */
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
        /** If [member use_texture_padding] is [code]false[/code], returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        get_runtime_texture(): Texture2D
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].
         *  [b]Note:[/b] If [member use_texture_padding] is [code]false[/code], returns the same as [method get_tile_texture_region].
         */
        get_runtime_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/): Rect2i
        /** The atlas texture. */
        texture: Texture2D
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        margins: Vector2i
        /** Separation, in pixels, between each tile texture region of the grid. */
        separation: Vector2i
        /** The base tile size in the texture (in pixel). This size must be bigger than the TileSet's [code]tile_size[/code] value. */
        texture_region_size: Vector2i
        /** If [code]true[/code], generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.
         */
        use_texture_padding: boolean
    }
    class TileSetAtlasSourceEditor extends HSplitContainer {
        _set_selection_from_array(_unnamed_arg0: Array): void
        _check_outside_tiles(): void
        readonly source_id_changed: Signal
    }
    class TileSetAtlasSourceProxyObject extends Object {
        readonly changed: Signal
    }
    class TileSetEditor extends Control {
    }
    class TileSetEditorPlugin extends EditorPlugin {
    }
    class TileSetScenesCollectionProxyObject extends Object {
        set_id(id: number /*i64*/): void
        get_id(): number /*i64*/
        id: number /*i64*/
        readonly changed: Signal
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
        readonly source_id_changed: Signal
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
            TIMER_PROCESS_PHYSICS = 0,
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
        /** Starts the timer. Sets [member wait_time] to [param time_sec] if [code]time_sec > 0[/code]. This also resets the remaining time to [member wait_time].
         *  [b]Note:[/b] This method will not resume a paused timer. See [member paused].
         */
        start(time_sec: number /*f64*/ = -1): void
        /** Stops the timer. */
        stop(): void
        set_paused(paused: boolean): void
        is_paused(): boolean
        /** Returns [code]true[/code] if the timer is stopped. */
        is_stopped(): boolean
        get_time_left(): number /*f64*/
        set_timer_process_callback(callback: Timer.TimerProcessCallback): void
        get_timer_process_callback(): Timer.TimerProcessCallback
        /** Processing callback. See [enum TimerProcessCallback]. */
        process_callback: number /*i64*/
        /** The wait time in seconds.
         *  [b]Note:[/b] Timers can only emit once per rendered frame at most (or once per physics frame if [member process_callback] is [constant TIMER_PROCESS_PHYSICS]). This means very low wait times (lower than 0.05 seconds) will behave in significantly different ways depending on the rendered framerate. For very low wait times, it is recommended to use a process loop in a script instead of using a Timer node. Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.
         */
        wait_time: number /*f64*/
        /** If [code]true[/code], the timer will stop when reaching 0. If [code]false[/code], it will restart. */
        one_shot: boolean
        /** If [code]true[/code], the timer will automatically start when entering the scene tree.
         *  [b]Note:[/b] This property is automatically set to [code]false[/code] after the timer enters the scene tree and starts.
         */
        autostart: boolean
        /** If [code]true[/code], the timer is paused and will not process until it is unpaused again, even if [method start] is called. */
        paused: boolean
        /** The timer's remaining time in seconds. Returns 0 if the timer is inactive.
         *  [b]Note:[/b] This value is read-only and cannot be set. It is based on [member wait_time], which can be set using [method start].
         */
        readonly time_left: number /*f64*/
        readonly timeout: Signal
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
            VISIBILITY_ALWAYS = 0,
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
        /** Returns [code]true[/code] if this button is currently pressed. */
        is_pressed(): boolean
        /** The button's texture for the normal state. */
        texture_normal: Texture2D
        /** The button's texture for the pressed state. */
        texture_pressed: Texture2D
        /** The button's bitmask. */
        bitmask: BitMap
        /** The button's shape. */
        shape: Shape2D
        /** If [code]true[/code], the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        shape_centered: boolean
        /** If [code]true[/code], the button's shape is visible in the editor. */
        shape_visible: boolean
        /** If [code]true[/code], the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.
         *  [b]Note:[/b] This is a "pass-by" (not "bypass") press mode.
         */
        passby_press: boolean
        /** The button's action. Actions can be handled with [InputEventAction]. */
        action: StringName
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        visibility_mode: number /*i64*/
        readonly pressed: Signal
        readonly released: Signal
    }
    /** A language translation that maps a collection of strings to their individual translations. */
    class Translation extends Resource {
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName): StringName
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
            SELECT_SINGLE = 0,
            SELECT_ROW = 1,
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            DROP_MODE_DISABLED = 0,
            DROP_MODE_ON_ITEM = 1,
            DROP_MODE_INBETWEEN = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure. */
    class Tree extends Control {
        /** Clears the tree. This removes all items. */
        clear(): void
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or [code]null[/code].
         *  If [param parent] is [code]null[/code], the root item will be the parent, or the new item will be the root itself if the tree is empty.
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.
         */
        create_item(parent: TreeItem = <any> {} /*compound.type from nil*/, index: number /*i64*/ = -1): TreeItem
        /** Returns the tree's root item, or [code]null[/code] if the tree is empty. */
        get_root(): TreeItem
        /** Overrides the calculated minimum width of a column. It can be set to [code]0[/code] to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        set_column_custom_minimum_width(column: number /*i64*/, min_width: number /*i64*/): void
        /** If [code]true[/code], the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        set_column_expand(column: number /*i64*/, expand: boolean): void
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        set_column_expand_ratio(column: number /*i64*/, ratio: number /*i64*/): void
        /** Allows to enable clipping for column's content, making the content size ignored. */
        set_column_clip_content(column: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if the column has enabled expanding (see [method set_column_expand]). */
        is_column_expanding(column: number /*i64*/): boolean
        /** Returns [code]true[/code] if the column has enabled clipping (see [method set_column_clip_content]). */
        is_column_clipping_content(column: number /*i64*/): boolean
        /** Returns the expand ratio assigned to the column. */
        get_column_expand_ratio(column: number /*i64*/): number /*i64*/
        /** Returns the column's width in pixels. */
        get_column_width(column: number /*i64*/): number /*i64*/
        set_hide_root(enable: boolean): void
        is_root_hidden(): boolean
        /** Returns the next selected [TreeItem] after the given one, or [code]null[/code] if the end is reached.
         *  If [param from] is [code]null[/code], this returns the first selected item.
         */
        get_next_selected(from: TreeItem): TreeItem
        /** Returns the currently focused item, or [code]null[/code] if no item is focused.
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
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be [code]true[/code].
         *  Returns [code]true[/code] if the item could be edited. Fails if no item is selected.
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
         *  [b]Note:[/b] Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.
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
        /** If [code]true[/code], column titles are visible. */
        column_titles_visible: boolean
        /** If [code]true[/code], the currently selected cell may be selected again. */
        allow_reselect: boolean
        /** If [code]true[/code], a right mouse button click can select items. */
        allow_rmb_select: boolean
        /** If [code]true[/code], allows navigating the [Tree] with letter keys through incremental search. */
        allow_search: boolean
        /** If [code]true[/code], the folding arrow is hidden. */
        hide_folding: boolean
        /** If [code]true[/code], recursive folding is enabled for this [Tree]. Holding down Shift while clicking the fold arrow collapses or uncollapses the [TreeItem] and all its descendants. */
        enable_recursive_folding: boolean
        /** If [code]true[/code], the tree's root is hidden. */
        hide_root: boolean
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.
         */
        drop_mode_flags: number /*i64*/
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        select_mode: number /*i64*/
        /** If [code]true[/code], enables horizontal scrolling. */
        scroll_horizontal_enabled: boolean
        /** If [code]true[/code], enables vertical scrolling. */
        scroll_vertical_enabled: boolean
        readonly item_selected: Signal
        readonly cell_selected: Signal
        readonly multi_selected: Signal
        readonly item_mouse_selected: Signal
        readonly empty_clicked: Signal
        readonly item_edited: Signal
        readonly custom_item_clicked: Signal
        readonly item_icon_double_clicked: Signal
        readonly item_collapsed: Signal
        readonly check_propagated_to_item: Signal
        readonly button_clicked: Signal
        readonly custom_popup_edited: Signal
        readonly item_activated: Signal
        readonly column_title_clicked: Signal
        readonly nothing_selected: Signal
    }
    namespace TreeItem {
        enum TreeCellMode {
            CELL_MODE_STRING = 0,
            CELL_MODE_CHECK = 1,
            CELL_MODE_RANGE = 2,
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
        /** If [param multiline] is [code]true[/code], the given [param column] is multiline editable.
         *  [b]Note:[/b] This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.
         */
        set_edit_multiline(column: number /*i64*/, multiline: boolean): void
        /** Returns [code]true[/code] if the given [param column] is multiline editable. */
        is_edit_multiline(column: number /*i64*/): boolean
        /** If [param checked] is [code]true[/code], the given [param column] is checked. Clears column's indeterminate status. */
        set_checked(column: number /*i64*/, checked: boolean): void
        /** If [param indeterminate] is [code]true[/code], the given [param column] is marked indeterminate.
         *  [b]Note:[/b] If set [code]true[/code] from [code]false[/code], then column is cleared of checked status.
         */
        set_indeterminate(column: number /*i64*/, indeterminate: boolean): void
        /** Returns [code]true[/code] if the given [param column] is checked. */
        is_checked(column: number /*i64*/): boolean
        /** Returns [code]true[/code] if the given [param column] is indeterminate. */
        is_indeterminate(column: number /*i64*/): boolean
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is [code]false[/code], then [signal Tree.check_propagated_to_item] will not be emitted. */
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
         *  If [param expr] is [code]true[/code], the edit mode slider will use an exponential scale as with [member Range.exp_edit].
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
        /** Returns [code]true[/code] if this [TreeItem], or any of its descendants, is collapsed.
         *  If [param only_visible] is [code]true[/code] it ignores non-visible [TreeItem]s.
         */
        is_any_collapsed(only_visible: boolean = false): boolean
        set_visible(enable: boolean): void
        is_visible(): boolean
        uncollapse_tree(): void
        set_custom_minimum_height(height: number /*i64*/): void
        get_custom_minimum_height(): number /*i64*/
        /** If [param selectable] is [code]true[/code], the given [param column] is selectable. */
        set_selectable(column: number /*i64*/, selectable: boolean): void
        /** Returns [code]true[/code] if the given [param column] is selectable. */
        is_selectable(column: number /*i64*/): boolean
        /** Returns [code]true[/code] if the given [param column] is selected. */
        is_selected(column: number /*i64*/): boolean
        /** Selects the given [param column]. */
        select(column: number /*i64*/): void
        /** Deselects the given column. */
        deselect(column: number /*i64*/): void
        /** If [param enabled] is [code]true[/code], the given [param column] is editable. */
        set_editable(column: number /*i64*/, enabled: boolean): void
        /** Returns [code]true[/code] if the given [param column] is editable. */
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
        /** If [code]true[/code], disables the button at index [param button_index] in the given [param column]. */
        set_button_disabled(column: number /*i64*/, button_index: number /*i64*/, disabled: boolean): void
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        set_button_color(column: number /*i64*/, button_index: number /*i64*/, color: Color): void
        /** Returns [code]true[/code] if the button at index [param button_index] for the given [param column] is disabled. */
        is_button_disabled(column: number /*i64*/, button_index: number /*i64*/): boolean
        /** Sets the given column's tooltip text. */
        set_tooltip_text(column: number /*i64*/, tooltip: string): void
        /** Returns the given column's tooltip text. */
        get_tooltip_text(column: number /*i64*/): string
        /** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
        set_text_alignment(column: number /*i64*/, text_alignment: HorizontalAlignment): void
        /** Returns the given column's text alignment. */
        get_text_alignment(column: number /*i64*/): HorizontalAlignment
        /** If [param enable] is [code]true[/code], the given [param column] is expanded to the right. */
        set_expand_right(column: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if [code]expand_right[/code] is set. */
        get_expand_right(column: number /*i64*/): boolean
        set_disable_folding(disable: boolean): void
        is_folding_disabled(): boolean
        /** Creates an item and adds it as a child.
         *  The new item will be inserted as position [param index] (the default value [code]-1[/code] means the last position), or it will be the last child if [param index] is higher than the child count.
         */
        create_child(index: number /*i64*/ = -1): TreeItem
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        add_child(child: TreeItem): void
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].
         *  [b]Note:[/b] If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].
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
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a [code]null[/code] object if there is none.
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns [code]null[/code].
         */
        get_next_in_tree(wrap: boolean = false): TreeItem
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a [code]null[/code] object if there is none.
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns [code]null[/code].
         */
        get_prev_in_tree(wrap: boolean = false): TreeItem
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a [code]null[/code] object if there is none.
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns [code]null[/code].
         */
        get_next_visible(wrap: boolean = false): TreeItem
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a [code]null[/code] object if there is none.
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns [code]null[/code].
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
        /** Returns the node's order in the tree. For example, if called on the first child item the position is [code]0[/code]. */
        get_index(): number /*i64*/
        /** Moves this TreeItem right before the given [param item].
         *  [b]Note:[/b] You can't move to the root or move the root.
         */
        move_before(item: TreeItem): void
        /** Moves this TreeItem right after the given [param item].
         *  [b]Note:[/b] You can't move to the root or move the root.
         */
        move_after(item: TreeItem): void
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        call_recursive(method: StringName, ...vargargs: any[]): void
        /** If [code]true[/code], the TreeItem is collapsed. */
        collapsed: boolean
        /** If [code]true[/code], the [TreeItem] is visible (default).
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.
         */
        visible: boolean
        /** If [code]true[/code], folding is disabled for this TreeItem. */
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
        /** The number of sides on the tube. For example, a value of [code]5[/code] means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        radial_steps: number /*i64*/
        /** The total number of sections on the tube. */
        sections: number /*i64*/
        /** The length of a section of the tube. */
        section_length: number /*f64*/
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        section_rings: number /*i64*/
        /** If [code]true[/code], generates a cap at the top of the tube. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. */
        cap_top: boolean
        /** If [code]true[/code], generates a cap at the bottom of the tube. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. */
        cap_bottom: boolean
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than [code]0[/code], the faces will be inverted. */
        curve: Curve
    }
    namespace Tween {
        enum TweenProcessMode {
            TWEEN_PROCESS_PHYSICS = 0,
            TWEEN_PROCESS_IDLE = 1,
        }
        enum TweenPauseMode {
            TWEEN_PAUSE_BOUND = 0,
            TWEEN_PAUSE_STOP = 1,
            TWEEN_PAUSE_PROCESS = 2,
        }
        enum TransitionType {
            TRANS_LINEAR = 0,
            TRANS_SINE = 1,
            TRANS_QUINT = 2,
            TRANS_QUART = 3,
            TRANS_QUAD = 4,
            TRANS_EXPO = 5,
            TRANS_ELASTIC = 6,
            TRANS_CUBIC = 7,
            TRANS_CIRC = 8,
            TRANS_BOUNCE = 9,
            TRANS_BACK = 10,
            TRANS_SPRING = 11,
        }
        enum EaseType {
            EASE_IN = 0,
            EASE_OUT = 1,
            EASE_IN_OUT = 2,
            EASE_OUT_IN = 3,
        }
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s. */
    class Tween extends RefCounted {
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.
         *  [b]Example:[/b]
         *  
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.
         *  [b]Note:[/b] You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using [code]"property:component"[/code] (eg. [code]position:x[/code]), where it would only apply to that particular component.
         *  [b]Example:[/b] Moving an object twice from the same position, with different transition types:
         *  
         */
        tween_property(object: Object, property: NodePath, final_val: any, duration: number /*f64*/): PropertyTweener
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.
         *  [b]Example:[/b] Creating an interval in code execution:
         *  
         *  [b]Example:[/b] Creating an object that moves back and forth and jumps every few seconds:
         *  
         */
        tween_interval(time: number /*f64*/): IntervalTweener
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.
         *  [b]Example:[/b] Object that keeps shooting every 1 second:
         *  
         *  [b]Example:[/b] Turning a sprite red and then blue, with 2 second delay:
         *  
         */
        tween_callback(callback: Callable): CallbackTweener
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.
         *  [b]Example:[/b] Making a 3D object look from one point to another point:
         *  
         *  [b]Example:[/b] Setting the text of a [Label], using an intermediate method and after a delay:
         *  
         */
        tween_method(method: Callable, from: any, to: any, duration: number /*f64*/): MethodTweener
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.
         *  Returns [code]true[/code] if the [Tween] still has [Tweener]s that haven't finished.
         */
        custom_step(delta: number /*f64*/): boolean
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.
         *  [b]Note:[/b] If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].
         */
        stop(): void
        /** Pauses the tweening. The animation can be resumed by using [method play].
         *  [b]Note:[/b] If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].
         */
        pause(): void
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to [code]0[/code].
         *  [b]Note:[/b] As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.
         */
        get_total_elapsed_time(): number /*f64*/
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        is_running(): boolean
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with [code]Tween.new()[/code]. Invalid [Tween]s can't have [Tweener]s appended. */
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
        /** If [param parallel] is [code]true[/code], the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.
         *  [b]Note:[/b] Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.
         *  
         */
        set_parallel(parallel: boolean = true): Tween
        /** Sets the number of times the tweening sequence will be repeated, i.e. [code]set_loops(2)[/code] will run the animation twice.
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).
         *  [b]Warning:[/b] Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].
         */
        set_loops(loops: number /*i64*/ = 0): Tween
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of [code]-1[/code] indicates an infinitely looping [Tween], and a return value of [code]0[/code] indicates that the [Tween] has already finished. */
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
         *  [b]Example:[/b]
         *  
         *  All [Tweener]s in the example will run at the same time.
         *  You can make the [Tween] parallel by default by using [method set_parallel].
         */
        parallel(): Tween
        /** Used to chain two [Tweener]s after [method set_parallel] is called with [code]true[/code].
         *  
         */
        chain(): Tween
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.
         *  [param initial_value] is the starting value of the interpolation.
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to [code]final_value - initial_value[/code].
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.
         *  [param duration] is the total time of the interpolation.
         *  [b]Note:[/b] If [param duration] is equal to [code]0[/code], the method will always return the final value, regardless of [param elapsed_time] provided.
         */
        static interpolate_value(initial_value: any, delta_value: any, elapsed_time: number /*f64*/, duration: number /*f64*/, trans_type: Tween.TransitionType, ease_type: Tween.EaseType): any
        readonly step_finished: Signal
        readonly loop_finished: Signal
        readonly finished: Signal
    }
    /** Abstract class for all Tweeners used by [Tween]. */
    class Tweener extends RefCounted {
        readonly finished: Signal
    }
    /** Helper class to implement a UDP server. */
    class UDPServer extends RefCounted {
        /** Starts the server by opening a UDP socket listening on the given [param port]. You can optionally specify a [param bind_address] to only listen for packets sent to that address. See also [method PacketPeerUDP.bind]. */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        /** Call this method at regular intervals (e.g. inside [method Node._process]) to process new packets. And packet from known address/port pair will be delivered to the appropriate [PacketPeerUDP], any packet received from an unknown address/port pair will be added as a pending connection (see [method is_connection_available], [method take_connection]). The maximum number of pending connection is defined via [member max_pending_connections]. */
        poll(): GodotError
        /** Returns [code]true[/code] if a packet with a new address/port combination was received on the socket. */
        is_connection_available(): boolean
        /** Returns the local port this server is listening to. */
        get_local_port(): number /*i64*/
        /** Returns [code]true[/code] if the socket is open and listening on a port. */
        is_listening(): boolean
        /** Returns the first pending connection (connected to the appropriate address/port). Will return [code]null[/code] if no new connection is available. See also [method is_connection_available], [method PacketPeerUDP.connect_to_host]. */
        take_connection(): PacketPeerUDP
        /** Stops the server, closing the UDP socket if open. Will close all connected [PacketPeerUDP] accepted via [method take_connection] (remote peers will not be notified). */
        stop(): void
        set_max_pending_connections(max_pending_connections: number /*i64*/): void
        get_max_pending_connections(): number /*i64*/
        /** Define the maximum number of pending connections, during [method poll], any new pending connection exceeding that value will be automatically dropped. Setting this value to [code]0[/code] effectively prevents any new pending connection to be accepted (e.g. when all your players have connected). */
        max_pending_connections: number /*i64*/
    }
    namespace UPNP {
        enum UPNPResult {
            UPNP_RESULT_SUCCESS = 0,
            UPNP_RESULT_NOT_AUTHORIZED = 1,
            UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2,
            UPNP_RESULT_INCONSISTENT_PARAMETERS = 3,
            UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4,
            UPNP_RESULT_ACTION_FAILED = 5,
            UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6,
            UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7,
            UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8,
            UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9,
            UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10,
            UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11,
            UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12,
            UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13,
            UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14,
            UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15,
            UPNP_RESULT_INVALID_GATEWAY = 16,
            UPNP_RESULT_INVALID_PORT = 17,
            UPNP_RESULT_INVALID_PROTOCOL = 18,
            UPNP_RESULT_INVALID_DURATION = 19,
            UPNP_RESULT_INVALID_ARGS = 20,
            UPNP_RESULT_INVALID_RESPONSE = 21,
            UPNP_RESULT_INVALID_PARAM = 22,
            UPNP_RESULT_HTTP_ERROR = 23,
            UPNP_RESULT_SOCKET_ERROR = 24,
            UPNP_RESULT_MEM_ALLOC_ERROR = 25,
            UPNP_RESULT_NO_GATEWAY = 26,
            UPNP_RESULT_NO_DEVICES = 27,
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
        /** Adds a mapping to forward the external [param port] (between 1 and 65535, although recommended to use port 1024 or above) on the default gateway (see [method get_gateway]) to the [param port_internal] on the local machine for the given protocol [param proto] (either [code]"TCP"[/code] or [code]"UDP"[/code], with UDP being the default). If a port mapping for the given port and protocol combination already exists on that gateway device, this method tries to overwrite it. If that is not desired, you can retrieve the gateway manually with [method get_gateway] and call [method add_port_mapping] on it, if any. Note that forwarding a well-known port (below 1024) with UPnP may fail depending on the device.
         *  Depending on the gateway device, if a mapping for that port already exists, it will either be updated or it will refuse this command due to that conflict, especially if the existing mapping for that port wasn't created via UPnP or points to a different network address (or device) than this one.
         *  If [param port_internal] is [code]0[/code] (the default), the same port number is used for both the external and the internal port (the [param port] value).
         *  The description ([param desc]) is shown in some routers management UIs and can be used to point out which application added the mapping.
         *  The mapping's lease [param duration] can be limited by specifying a duration in seconds. The default of [code]0[/code] means no duration, i.e. a permanent lease and notably some devices only support these permanent leases. Note that whether permanent or not, this is only a request and the gateway may still decide at any point to remove the mapping (which usually happens on a reboot of the gateway, when its external IP address changes, or on some models when it detects a port mapping has become inactive, i.e. had no traffic for multiple minutes). If not [code]0[/code] (permanent), the allowed range according to spec is between [code]120[/code] (2 minutes) and [code]86400[/code] seconds (24 hours).
         *  See [enum UPNPResult] for possible return values.
         */
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        /** Deletes the port mapping for the given port and protocol combination on the default gateway (see [method get_gateway]) if one exists. [param port] must be a valid port between 1 and 65535, [param proto] can be either [code]"TCP"[/code] or [code]"UDP"[/code]. May be refused for mappings pointing to addresses other than this one, for well-known ports (below 1024), or for mappings not added via UPnP. See [enum UPNPResult] for possible return values. */
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_discover_multicast_if(m_if: string): void
        get_discover_multicast_if(): string
        set_discover_local_port(port: number /*i64*/): void
        get_discover_local_port(): number /*i64*/
        set_discover_ipv6(ipv6: boolean): void
        is_discover_ipv6(): boolean
        /** Multicast interface to use for discovery. Uses the default multicast interface if empty. */
        discover_multicast_if: string
        /** If [code]0[/code], the local port to use for discovery is chosen automatically by the system. If [code]1[/code], discovery will be done from the source port 1900 (same as destination port). Otherwise, the value will be used as the port. */
        discover_local_port: number /*i64*/
        /** If [code]true[/code], IPv6 is used for [UPNPDevice] discovery. */
        discover_ipv6: boolean
    }
    namespace UPNPDevice {
        enum IGDStatus {
            IGD_STATUS_OK = 0,
            IGD_STATUS_HTTP_ERROR = 1,
            IGD_STATUS_HTTP_EMPTY = 2,
            IGD_STATUS_NO_URLS = 3,
            IGD_STATUS_NO_IGD = 4,
            IGD_STATUS_DISCONNECTED = 5,
            IGD_STATUS_UNKNOWN_DEVICE = 6,
            IGD_STATUS_INVALID_CONTROL = 7,
            IGD_STATUS_MALLOC_ERROR = 8,
            IGD_STATUS_UNKNOWN_ERROR = 9,
        }
    }
    /** Universal Plug and Play (UPnP) device. */
    class UPNPDevice extends RefCounted {
        /** Returns [code]true[/code] if this is a valid IGD (InternetGatewayDevice) which potentially supports port forwarding. */
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
            MERGE_DISABLE = 0,
            MERGE_ENDS = 1,
            MERGE_ALL = 2,
        }
    }
    /** Provides a high-level interface for implementing undo and redo operations. */
    class UndoRedo extends Object {
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].
         *  The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is [code]false[/code] undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, backward_undo_ops: boolean = false): void
        /** Commit the action. If [param execute] is [code]true[/code] (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        /** Returns [code]true[/code] if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
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
         *  Passing [code]false[/code] to [param increase_version] will prevent the version number from increasing when the history is cleared.
         */
        clear_history(increase_version: boolean = true): void
        /** Gets the name of the current action, equivalent to [code]get_action_name(get_current_action())[/code]. */
        get_current_action_name(): string
        /** Returns [code]true[/code] if an "undo" action is available. */
        has_undo(): boolean
        /** Returns [code]true[/code] if a "redo" action is available. */
        has_redo(): boolean
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.
         *  This is useful mostly to check if something changed from a saved version.
         */
        get_version(): number /*i64*/
        /** Redo the last action. */
        redo(): boolean
        /** Undo the last action. */
        undo(): boolean
        readonly version_changed: Signal
    }
}
