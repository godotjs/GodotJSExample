// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    namespace HashingContext {
        enum HashType {
            HASH_MD5 = 0,
            HASH_SHA1 = 1,
            HASH_SHA256 = 2,
        }
    }
    /** Provides functionality for computing cryptographic hashes chunk by chunk. */
    class HashingContext extends RefCounted {
        /** Starts a new hash computation of the given [param type] (e.g. [constant HASH_SHA256] to start computation of a SHA-256). */
        start(type: HashingContext.HashType): GodotError
        /** Updates the computation with the given [param chunk] of data. */
        update(chunk: PackedByteArray): GodotError
        /** Closes the current context, and return the computed hash. */
        finish(): PackedByteArray
    }
    /** A 3D height map shape used for physics collision. */
    class HeightMapShape3D extends Shape3D {
        set_map_width(width: number /*i64*/): void
        get_map_width(): number /*i64*/
        set_map_depth(height: number /*i64*/): void
        get_map_depth(): number /*i64*/
        set_map_data(data: PackedFloat32Array): void
        get_map_data(): PackedFloat32Array
        /** Number of vertices in the width of the height map. Changing this will resize the [member map_data]. */
        map_width: number /*i64*/
        /** Number of vertices in the depth of the height map. Changing this will resize the [member map_data]. */
        map_depth: number /*i64*/
        /** Height map data, pool array must be of [member map_width] * [member map_depth] size. */
        map_data: PackedFloat32Array
    }
    namespace HingeJoint3D {
        enum Param {
            PARAM_BIAS = 0,
            PARAM_LIMIT_UPPER = 1,
            PARAM_LIMIT_LOWER = 2,
            PARAM_LIMIT_BIAS = 3,
            PARAM_LIMIT_SOFTNESS = 4,
            PARAM_LIMIT_RELAXATION = 5,
            PARAM_MOTOR_TARGET_VELOCITY = 6,
            PARAM_MOTOR_MAX_IMPULSE = 7,
            PARAM_MAX = 8,
        }
        enum Flag {
            FLAG_USE_LIMIT = 0,
            FLAG_ENABLE_MOTOR = 1,
            FLAG_MAX = 2,
        }
    }
    /** A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. */
    class HingeJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: HingeJoint3D.Param, value: number /*f64*/): void
        /** Returns the value of the specified parameter. */
        get_param(param: HingeJoint3D.Param): number /*f64*/
        /** If [code]true[/code], enables the specified flag. */
        set_flag(flag: HingeJoint3D.Flag, enabled: boolean): void
        /** Returns the value of the specified flag. */
        get_flag(flag: HingeJoint3D.Flag): boolean
    }
    class HistoryDock extends VBoxContainer {
    }
    namespace Image {
        enum Format {
            FORMAT_L8 = 0,
            FORMAT_LA8 = 1,
            FORMAT_R8 = 2,
            FORMAT_RG8 = 3,
            FORMAT_RGB8 = 4,
            FORMAT_RGBA8 = 5,
            FORMAT_RGBA4444 = 6,
            FORMAT_RGB565 = 7,
            FORMAT_RF = 8,
            FORMAT_RGF = 9,
            FORMAT_RGBF = 10,
            FORMAT_RGBAF = 11,
            FORMAT_RH = 12,
            FORMAT_RGH = 13,
            FORMAT_RGBH = 14,
            FORMAT_RGBAH = 15,
            FORMAT_RGBE9995 = 16,
            FORMAT_DXT1 = 17,
            FORMAT_DXT3 = 18,
            FORMAT_DXT5 = 19,
            FORMAT_RGTC_R = 20,
            FORMAT_RGTC_RG = 21,
            FORMAT_BPTC_RGBA = 22,
            FORMAT_BPTC_RGBF = 23,
            FORMAT_BPTC_RGBFU = 24,
            FORMAT_ETC = 25,
            FORMAT_ETC2_R11 = 26,
            FORMAT_ETC2_R11S = 27,
            FORMAT_ETC2_RG11 = 28,
            FORMAT_ETC2_RG11S = 29,
            FORMAT_ETC2_RGB8 = 30,
            FORMAT_ETC2_RGBA8 = 31,
            FORMAT_ETC2_RGB8A1 = 32,
            FORMAT_ETC2_RA_AS_RG = 33,
            FORMAT_DXT5_RA_AS_RG = 34,
            FORMAT_ASTC_4x4 = 35,
            FORMAT_ASTC_4x4_HDR = 36,
            FORMAT_ASTC_8x8 = 37,
            FORMAT_ASTC_8x8_HDR = 38,
            FORMAT_MAX = 39,
        }
        enum Interpolation {
            INTERPOLATE_NEAREST = 0,
            INTERPOLATE_BILINEAR = 1,
            INTERPOLATE_CUBIC = 2,
            INTERPOLATE_TRILINEAR = 3,
            INTERPOLATE_LANCZOS = 4,
        }
        enum AlphaMode {
            ALPHA_NONE = 0,
            ALPHA_BIT = 1,
            ALPHA_BLEND = 2,
        }
        enum CompressMode {
            COMPRESS_S3TC = 0,
            COMPRESS_ETC = 1,
            COMPRESS_ETC2 = 2,
            COMPRESS_BPTC = 3,
            COMPRESS_ASTC = 4,
            COMPRESS_MAX = 5,
        }
        enum UsedChannels {
            USED_CHANNELS_L = 0,
            USED_CHANNELS_LA = 1,
            USED_CHANNELS_R = 2,
            USED_CHANNELS_RG = 3,
            USED_CHANNELS_RGB = 4,
            USED_CHANNELS_RGBA = 5,
        }
        enum CompressSource {
            COMPRESS_SOURCE_GENERIC = 0,
            COMPRESS_SOURCE_SRGB = 1,
            COMPRESS_SOURCE_NORMAL = 2,
        }
        enum ASTCFormat {
            ASTC_FORMAT_4x4 = 0,
            ASTC_FORMAT_8x8 = 1,
        }
    }
    /** Image datatype. */
    class Image extends Resource {
        static readonly MAX_WIDTH = 16777216
        static readonly MAX_HEIGHT = 16777216
        /** Returns the image's width. */
        get_width(): number /*i64*/
        /** Returns the image's height. */
        get_height(): number /*i64*/
        /** Returns the image's size (width and height). */
        get_size(): Vector2i
        /** Returns [code]true[/code] if the image has generated mipmaps. */
        has_mipmaps(): boolean
        /** Returns the image's format. See [enum Format] constants. */
        get_format(): Image.Format
        /** Returns a copy of the image's raw data. */
        get_data(): PackedByteArray
        /** Converts the image's format. See [enum Format] constants. */
        convert(format: Image.Format): void
        /** Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count. */
        get_mipmap_count(): number /*i64*/
        /** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
        get_mipmap_offset(mipmap: number /*i64*/): number /*i64*/
        /** Resizes the image to the nearest power of 2 for the width and height. If [param square] is [code]true[/code] then set width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize_to_po2(square: boolean = false, interpolation: Image.Interpolation = 1): void
        /** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize(width: number /*i64*/, height: number /*i64*/, interpolation: Image.Interpolation = 1): void
        /** Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4). */
        shrink_x2(): void
        /** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
        crop(width: number /*i64*/, height: number /*i64*/): void
        /** Flips the image horizontally. */
        flip_x(): void
        /** Flips the image vertically. */
        flip_y(): void
        /** Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is [code]0[/code]. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.
         *  It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.
         */
        generate_mipmaps(renormalize: boolean = false): GodotError
        /** Removes the image's mipmaps. */
        clear_mipmaps(): void
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is [code]true[/code], then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format): Image
        /** Creates a new image of given size and format. See [enum Format] constants. Fills the image with the given raw data. If [param use_mipmaps] is [code]true[/code] then loads mipmaps for this image from [param data]. See [method generate_mipmaps]. */
        static create_from_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): Image
        /** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
        set_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): void
        /** Returns [code]true[/code] if the image has no data. */
        is_empty(): boolean
        /** Loads an image from file [param path]. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.
         *  [b]Warning:[/b] This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the [code]user://[/code] directory, and may not work in exported projects.
         *  See also [ImageTexture] description for usage examples.
         */
        load(path: string): GodotError
        /** Creates a new [Image] and loads data from the specified file. */
        static load_from_file(path: string): Image
        /** Saves the image as a PNG file to the file at [param path]. */
        save_png(path: string): GodotError
        /** Saves the image as a PNG file to a byte array. */
        save_png_to_buffer(): PackedByteArray
        /** Saves the image as a JPEG file to [param path] with the specified [param quality] between [code]0.01[/code] and [code]1.0[/code] (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between [code]0.75[/code] and [code]0.90[/code]. Even at quality [code]1.00[/code], JPEG compression remains lossy.
         *  [b]Note:[/b] JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.
         */
        save_jpg(path: string, quality: number /*f64*/ = 0.75): GodotError
        /** Saves the image as a JPEG file to a byte array with the specified [param quality] between [code]0.01[/code] and [code]1.0[/code] (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between [code]0.75[/code] and [code]0.90[/code]. Even at quality [code]1.00[/code], JPEG compression remains lossy.
         *  [b]Note:[/b] JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.
         */
        save_jpg_to_buffer(quality: number /*f64*/ = 0.75): PackedByteArray
        /** Saves the image as an EXR file to [param path]. If [param grayscale] is [code]true[/code] and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.
         *  [b]Note:[/b] The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.
         */
        save_exr(path: string, grayscale: boolean = false): GodotError
        /** Saves the image as an EXR file to a byte array. If [param grayscale] is [code]true[/code] and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.
         *  [b]Note:[/b] The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return an empty byte array when it is called from an exported project.
         */
        save_exr_to_buffer(grayscale: boolean = false): PackedByteArray
        /** Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.
         *  [b]Note:[/b] The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.
         */
        save_webp(path: string, lossy: boolean = false, quality: number /*f64*/ = 0.75): GodotError
        /** Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.
         *  [b]Note:[/b] The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.
         */
        save_webp_to_buffer(lossy: boolean = false, quality: number /*f64*/ = 0.75): PackedByteArray
        /** Returns [constant ALPHA_BLEND] if the image has data for alpha values. Returns [constant ALPHA_BIT] if all the alpha values are stored in a single bit. Returns [constant ALPHA_NONE] if no data for alpha values is found. */
        detect_alpha(): Image.AlphaMode
        /** Returns [code]true[/code] if all the image's pixels have an alpha value of 0. Returns [code]false[/code] if any pixel has an alpha value higher than 0. */
        is_invisible(): boolean
        /** Returns the color channels used by this image, as one of the [enum UsedChannels] constants. If the image is compressed, the original [param source] must be specified. */
        detect_used_channels(source: Image.CompressSource = 0): Image.UsedChannels
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.
         *  The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.
         *  For ASTC compression, the [param astc_format] parameter must be supplied.
         */
        compress(mode: Image.CompressMode, source: Image.CompressSource = 0, astc_format: Image.ASTCFormat = 0): GodotError
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.
         *  This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.
         *  For ASTC compression, the [param astc_format] parameter must be supplied.
         */
        compress_from_channels(mode: Image.CompressMode, channels: Image.UsedChannels, astc_format: Image.ASTCFormat = 0): GodotError
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].
         *  [b]Note:[/b] The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.
         */
        decompress(): GodotError
        /** Returns [code]true[/code] if the image is compressed. */
        is_compressed(): boolean
        /** Rotates the image in the specified [param direction] by [code]90[/code] degrees. The width and height of the image must be greater than [code]1[/code]. If the width and height are not equal, the image will be resized. */
        rotate_90(direction: ClockDirection): void
        /** Rotates the image by [code]180[/code] degrees. The width and height of the image must be greater than [code]1[/code]. */
        rotate_180(): void
        /** Blends low-alpha pixels with nearby pixels. */
        fix_alpha_edges(): void
        /** Multiplies color values with alpha values. Resulting color values for a pixel are [code](color * alpha)/256[/code]. See also [member CanvasItemMaterial.blend_mode]. */
        premultiply_alpha(): void
        /** Converts the raw data from the sRGB colorspace to a linear scale. */
        srgb_to_linear(): void
        /** Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count. */
        normal_map_to_xy(): void
        /** Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image. */
        rgbe_to_srgb(): Image
        /** Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel. */
        bump_map_to_normal_map(bump_scale: number /*f64*/ = 1): void
        /** Compute image metrics on the current image and the compared image.
         *  The dictionary contains [code]max[/code], [code]mean[/code], [code]mean_squared[/code], [code]root_mean_squared[/code] and [code]peak_snr[/code].
         */
        compute_image_metrics(compared_image: Image, use_luma: boolean): Dictionary
        /** Copies [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image [b]must[/b] have the same format. [param src_rect] with non-positive size is treated as empty. */
        blit_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        /** Blits [param src_rect] area from [param src] image to this image at the coordinates given by [param dst], clipped accordingly to both image bounds. [param src] pixel is copied onto [param dst] if the corresponding [param mask] pixel's alpha value is not 0. This image and [param src] image [b]must[/b] have the same format. [param src] image and [param mask] image [b]must[/b] have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blit_rect_mask(src: Image, mask: Image, src_rect: Rect2i, dst: Vector2i): void
        /** Alpha-blends [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image [b]must[/b] have the same format. [param src_rect] with non-positive size is treated as empty. */
        blend_rect(src: Image, src_rect: Rect2i, dst: Vector2i): void
        /** Alpha-blends [param src_rect] from [param src] image to this image using [param mask] image at coordinates [param dst], clipped accordingly to both image bounds. Alpha channels are required for both [param src] and [param mask]. [param dst] pixels and [param src] pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and [param src] image [b]must[/b] have the same format. [param src] image and [param mask] image [b]must[/b] have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
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
        /** Returns the color of the pixel at [code](x, y)[/code].
         *  This is the same as [method get_pixelv], but with two integer arguments instead of a [Vector2i] argument.
         */
        get_pixel(x: number /*i64*/, y: number /*i64*/): Color
        /** Sets the [Color] of the pixel at [param point] to [param color].
         *  [b]Example:[/b]
         *  
         *  This is the same as [method set_pixel], but with a [Vector2i] argument instead of two integer arguments.
         */
        set_pixelv(point: Vector2i, color: Color): void
        /** Sets the [Color] of the pixel at [code](x, y)[/code] to [param color].
         *  [b]Example:[/b]
         *  
         *  This is the same as [method set_pixelv], but with a two integer arguments instead of a [Vector2i] argument.
         */
        set_pixel(x: number /*i64*/, y: number /*i64*/, color: Color): void
        /** Adjusts this image's [param brightness], [param contrast], and [param saturation] by the given values. Does not work if the image is compressed (see [method is_compressed]). */
        adjust_bcs(brightness: number /*f64*/, contrast: number /*f64*/, saturation: number /*f64*/): void
        /** Loads an image from the binary contents of a PNG file. */
        load_png_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the binary contents of a JPEG file. */
        load_jpg_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the binary contents of a WebP file. */
        load_webp_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the binary contents of a TGA file.
         *  [b]Note:[/b] This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the [code]module_tga_enabled=no[/code] SCons option.
         */
        load_tga_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the binary contents of a BMP file.
         *  [b]Note:[/b] Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.
         *  [b]Note:[/b] This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the [code]module_bmp_enabled=no[/code] SCons option.
         */
        load_bmp_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.
         *  [b]Note:[/b] Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.
         *  [b]Note:[/b] This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the [code]module_ktx_enabled=no[/code] SCons option.
         */
        load_ktx_from_buffer(buffer: PackedByteArray): GodotError
        /** Loads an image from the UTF-8 binary contents of an [b]uncompressed[/b] SVG file ([b].svg[/b]).
         *  [b]Note:[/b] Beware when using compressed SVG files (like [b].svgz[/b]), they need to be [code]decompressed[/code] before loading.
         *  [b]Note:[/b] This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the [code]module_svg_enabled=no[/code] SCons option.
         */
        load_svg_from_buffer(buffer: PackedByteArray, scale: number /*f64*/ = 1): GodotError
        /** Loads an image from the string contents of a SVG file ([b].svg[/b]).
         *  [b]Note:[/b] This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the [code]module_svg_enabled=no[/code] SCons option.
         */
        load_svg_from_string(svg_str: string, scale: number /*f64*/ = 1): GodotError
        /** Holds all the image's color data in a given format. See [enum Format] constants. */
        data: Dictionary
    }
    namespace ImageFormatLoader {
        enum LoaderFlags {
            FLAG_NONE = 0,
            FLAG_FORCE_LINEAR = 1,
            FLAG_CONVERT_COLORS = 2,
        }
    }
    /** Base class to add support for specific image formats. */
    class ImageFormatLoader extends RefCounted {
    }
    /** Base class for creating [ImageFormatLoader] extensions (adding support for extra image formats). */
    class ImageFormatLoaderExtension extends ImageFormatLoader {
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        /* gdvirtual */ _load_image(image: Image, fileaccess: FileAccess, flags: ImageFormatLoader.LoaderFlags, scale: number /*f64*/): GodotError
        /** Add this format loader to the engine, allowing it to recognize the file extensions returned by [method _get_recognized_extensions]. */
        add_format_loader(): void
        /** Remove this format loader from the engine. */
        remove_format_loader(): void
    }
    /** A [Texture2D] based on an [Image]. */
    class ImageTexture extends Texture2D {
        /** Creates a new [ImageTexture] and initializes it by allocating and setting the data from an [Image]. */
        static create_from_image(image: Image): ImageTexture
        /** Returns the format of the texture, one of [enum Image.Format]. */
        get_format(): Image.Format
        /** Replaces the texture's data with a new [Image]. This will re-allocate new memory for the texture.
         *  If you want to update the image, but don't need to change its parameters (format, size), use [method update] instead for better performance.
         */
        set_image(image: Image): void
        /** Replaces the texture's data with a new [Image].
         *  [b]Note:[/b] The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.
         */
        update(image: Image): void
        /** Resizes the texture to the specified dimensions. */
        set_size_override(size: Vector2i): void
    }
    /** Texture with 3 dimensions. */
    class ImageTexture3D extends Texture3D {
        /** Creates the [ImageTexture3D] with specified [param width], [param height], and [param depth]. See [enum Image.Format] for [param format] options. If [param use_mipmaps] is [code]true[/code], then generate mipmaps for the [ImageTexture3D]. */
        create(format: Image.Format, width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, use_mipmaps: boolean, data: Array): GodotError
        /** Replaces the texture's existing data with the layers specified in [param data]. The size of [param data] must match the parameters that were used for [method create]. In other words, the texture cannot be resized or have its format changed by calling [method update]. */
        update(data: Array): void
        _get_images(): Array
        _set_images(images: Array): void
        _images: Array
    }
    /** Base class for texture types which contain the data of multiple [ImageTexture]s. Each image is of the same size and format. */
    class ImageTextureLayered extends TextureLayered {
        /** Creates an [ImageTextureLayered] from an array of [Image]s. See [method Image.create] for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images [i]must[/i] have the same width, height, image format and mipmapping setting.
         *  Each [Image] represents one [code]layer[/code].
         */
        create_from_images(images: Array): GodotError
        /** Replaces the existing [Image] data at the given [param layer] with this new image.
         *  The given [Image] must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.
         *  If the image format is unsupported, it will be decompressed and converted to a similar and supported [enum Image.Format].
         *  The update is immediate: it's synchronized with drawing.
         */
        update_layer(image: Image, layer: number /*i64*/): void
        _get_images(): Array
        _set_images(images: Array): void
        _images: Array
    }
    /** Mesh optimized for creating geometry manually. */
    class ImmediateMesh extends Mesh {
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
    }
    class ImportDefaultsEditorSettings extends Object {
    }
    class ImportDock extends VBoxContainer {
        _reimport(): void
    }
    class ImportDockParameters extends Object {
    }
    /** A [Resource] that contains vertex array-based geometry during the import process. */
    class ImporterMesh extends Resource {
        /** Adds name for a blend shape that will be added with [method add_surface]. Must be called before surface is added. */
        add_blend_shape(name: string): void
        /** Returns the number of blend shapes that the mesh holds. */
        get_blend_shape_count(): number /*i64*/
        /** Returns the name of the blend shape at this index. */
        get_blend_shape_name(blend_shape_idx: number /*i64*/): string
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        set_blend_shape_mode(mode: Mesh.BlendShapeMode): void
        /** Returns the blend shape mode for this Mesh. */
        get_blend_shape_mode(): Mesh.BlendShapeMode
        /** Creates a new surface. [method Mesh.get_surface_count] will become the [code]surf_idx[/code] for this new surface.
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or [code]null[/code] if it is not used by the surface. For example, [code]arrays[0][/code] is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are [code]null[/code].
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents a LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of a LOD also increases the distance that the objects has to be from the camera before the LOD is used.
         *  The [param flags] argument is the bitwise or of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by [code]ARRAY_FORMAT_CUSTOMn_SHIFT[/code] for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].
         *  [b]Note:[/b] When using indices, it is recommended to only use points, lines, or triangles.
         */
        add_surface(primitive: Mesh.PrimitiveType, arrays: Array, blend_shapes: Array = <any> {} /*compound.type from 28([object Object])*/, lods: Dictionary = <any> {} /*compound.type from 27([object Object])*/, material: Material = <any> {} /*compound.type from nil*/, name: string = '', flags: number /*i64*/ = 0): void
        /** Returns the number of surfaces that the mesh holds. */
        get_surface_count(): number /*i64*/
        /** Returns the primitive type of the requested surface (see [method add_surface]). */
        get_surface_primitive_type(surface_idx: number /*i64*/): Mesh.PrimitiveType
        /** Gets the name assigned to this surface. */
        get_surface_name(surface_idx: number /*i64*/): string
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [method add_surface]. */
        get_surface_arrays(surface_idx: number /*i64*/): Array
        /** Returns a single set of blend shape arrays for the requested blend shape index for a surface. */
        get_surface_blend_shape_arrays(surface_idx: number /*i64*/, blend_shape_idx: number /*i64*/): Array
        /** Returns the number of lods that the mesh holds on a given surface. */
        get_surface_lod_count(surface_idx: number /*i64*/): number /*i64*/
        /** Returns the screen ratio which activates a lod for a surface. */
        get_surface_lod_size(surface_idx: number /*i64*/, lod_idx: number /*i64*/): number /*f64*/
        /** Returns the index buffer of a lod for a surface. */
        get_surface_lod_indices(surface_idx: number /*i64*/, lod_idx: number /*i64*/): PackedInt32Array
        /** Returns a [Material] in a given surface. Surface is rendered using this material. */
        get_surface_material(surface_idx: number /*i64*/): Material
        /** Returns the format of the surface that the mesh holds. */
        get_surface_format(surface_idx: number /*i64*/): number /*i64*/
        /** Sets a name for a given surface. */
        set_surface_name(surface_idx: number /*i64*/, name: string): void
        /** Sets a [Material] for a given surface. Surface will be rendered using this material. */
        set_surface_material(surface_idx: number /*i64*/, material: Material): void
        /** Generates all lods for this ImporterMesh.
         *  [param normal_merge_angle] and [param normal_split_angle] are in degrees and used in the same way as the importer settings in [code]lods[/code]. As a good default, use 25 and 60 respectively.
         *  The number of generated lods can be accessed using [method get_surface_lod_count], and each LOD is available in [method get_surface_lod_size] and [method get_surface_lod_indices].
         *  [param bone_transform_array] is an [Array] which can be either empty or contain [Transform3D]s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.
         */
        generate_lods(normal_merge_angle: number /*f64*/, normal_split_angle: number /*f64*/, bone_transform_array: Array): void
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
        _data: Dictionary
    }
    class ImporterMeshInstance3D extends Node3D {
        set_mesh(mesh: ImporterMesh): void
        get_mesh(): ImporterMesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_layer_mask(layer_mask: number /*i64*/): void
        get_layer_mask(): number /*i64*/
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
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
        mesh: ImporterMesh
        skin: Skin
        skeleton_path: NodePath
        layer_mask: number /*i64*/
        cast_shadow: number /*i64*/
        visibility_range_begin: number /*f64*/
        visibility_range_begin_margin: number /*f64*/
        visibility_range_end: number /*f64*/
        visibility_range_end_margin: number /*f64*/
        visibility_range_fade_mode: number /*i64*/
    }
    /** Abstract base class for input events. */
    class InputEvent extends Resource {
        set_device(device: number /*i64*/): void
        get_device(): number /*i64*/
        /** Returns [code]true[/code] if this input event matches a pre-defined action of any type.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        is_action(action: StringName, exact_match: boolean = false): boolean
        /** Returns [code]true[/code] if the given action is being pressed (and is not an echo event for [InputEventKey] events, unless [param allow_echo] is [code]true[/code]). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_action_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         */
        is_action_pressed(action: StringName, allow_echo: boolean = false, exact_match: boolean = false): boolean
        /** Returns [code]true[/code] if the given action is released (i.e. not pressed). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        is_action_released(action: StringName, exact_match: boolean = false): boolean
        /** Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [InputEventJoypadMotion].
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        get_action_strength(action: StringName, exact_match: boolean = false): number /*f64*/
        /** Returns [code]true[/code] if this input event has been canceled. */
        is_canceled(): boolean
        /** Returns [code]true[/code] if this input event is pressed. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
         *  [b]Note:[/b] Due to keyboard ghosting, [method is_pressed] may return [code]false[/code] even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
         */
        is_pressed(): boolean
        /** Returns [code]true[/code] if this input event is released. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag]. */
        is_released(): boolean
        /** Returns [code]true[/code] if this input event is an echo event (only for events of type [InputEventKey]). Any other event type returns [code]false[/code]. */
        is_echo(): boolean
        /** Returns a [String] representation of the event. */
        as_text(): string
        /** Returns [code]true[/code] if the specified [param event] matches this event. Only valid for action events i.e key ([InputEventKey]), button ([InputEventMouseButton] or [InputEventJoypadButton]), axis [InputEventJoypadMotion] or action ([InputEventAction]) events.
         *  If [param exact_match] is [code]false[/code], it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
         */
        is_match(event: InputEvent, exact_match: boolean = true): boolean
        /** Returns [code]true[/code] if this input event's type is one that can be assigned to an input action. */
        is_action_type(): boolean
        /** Returns [code]true[/code] if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).
         *  The given input event's position, global position and speed will be copied. The resulting [code]relative[/code] is a sum of both events. Both events' modifiers have to be identical.
         */
        accumulate(with_event: InputEvent): boolean
        /** Returns a copy of the given input event which has been offset by [param local_ofs] and transformed by [param xform]. Relevant for events of type [InputEventMouseButton], [InputEventMouseMotion], [InputEventScreenTouch], [InputEventScreenDrag], [InputEventMagnifyGesture] and [InputEventPanGesture]. */
        xformed_by(xform: Transform2D, local_ofs: Vector2 = Vector2.ZERO): InputEvent
        /** The event's device ID.
         *  [b]Note:[/b] This device ID will always be [code]-1[/code] for emulated mouse input from a touchscreen. This can be used to distinguish emulated mouse input from physical mouse input.
         */
        device: number /*i64*/
    }
    /** An input event type for actions. */
    class InputEventAction extends InputEvent {
        set_action(action: StringName): void
        get_action(): StringName
        set_pressed(pressed: boolean): void
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        /** The action's name. Actions are accessed via this [String]. */
        action: StringName
        /** If [code]true[/code], the action's state is pressed. If [code]false[/code], the action's state is released. */
        pressed: boolean
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is [code]false[/code]. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        strength: number /*f64*/
    }
    class InputEventConfigurationDialog extends ConfirmationDialog {
    }
    class InputEventEditorPlugin extends EditorPlugin {
    }
    /** Abstract base class for [Viewport]-based input events. */
    class InputEventFromWindow extends InputEvent {
        set_window_id(id: number /*i64*/): void
        get_window_id(): number /*i64*/
        /** The ID of a [Window] that received this event. */
        window_id: number /*i64*/
    }
    /** Abstract base class for touch gestures. */
    class InputEventGesture extends InputEventWithModifiers {
        set_position(position: Vector2): void
        get_position(): Vector2
        /** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
        position: Vector2
    }
    /** Represents a gamepad button being pressed or released. */
    class InputEventJoypadButton extends InputEvent {
        set_button_index(button_index: JoyButton): void
        get_button_index(): JoyButton
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pressed(pressed: boolean): void
        /** Button identifier. One of the [enum JoyButton] button constants. */
        button_index: number /*i64*/
        /** Represents the pressure the user puts on a pressure-sensitive button.
         *  [i]Deprecated.[/i] This property is never set by the engine and is always [code]0[/code].
         */
        pressure: number /*f64*/
        /** If [code]true[/code], the button's state is pressed. If [code]false[/code], the button's state is released. */
        pressed: boolean
    }
    /** Represents axis motions (such as joystick or analog triggers) from a gamepad. */
    class InputEventJoypadMotion extends InputEvent {
        set_axis(axis: JoyAxis): void
        get_axis(): JoyAxis
        set_axis_value(axis_value: number /*f64*/): void
        get_axis_value(): number /*f64*/
        /** Axis identifier. Use one of the [enum JoyAxis] axis constants. */
        axis: number /*i64*/
        /** Current position of the joystick on the given axis. The value ranges from [code]-1.0[/code] to [code]1.0[/code]. A value of [code]0[/code] means the axis is in its resting position. */
        axis_value: number /*f64*/
    }
    /** Represents a key on a keyboard being pressed or released. */
    class InputEventKey extends InputEventWithModifiers {
        set_pressed(pressed: boolean): void
        set_keycode(keycode: Key): void
        get_keycode(): Key
        set_physical_keycode(physical_keycode: Key): void
        get_physical_keycode(): Key
        set_key_label(key_label: Key): void
        get_key_label(): Key
        set_unicode(unicode: number /*i64*/): void
        get_unicode(): number /*i64*/
        set_echo(echo: boolean): void
        /** Returns the Latin keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use [code]OS.get_keycode_string(event.get_keycode_with_modifiers())[/code] where [code]event[/code] is the [InputEventKey].
         */
        get_keycode_with_modifiers(): Key
        /** Returns the physical keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use [code]OS.get_keycode_string(event.get_physical_keycode_with_modifiers())[/code] where [code]event[/code] is the [InputEventKey].
         */
        get_physical_keycode_with_modifiers(): Key
        /** Returns the localized key label combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use [code]OS.get_keycode_string(event.get_key_label_with_modifiers())[/code] where [code]event[/code] is the [InputEventKey].
         */
        get_key_label_with_modifiers(): Key
        /** Returns a [String] representation of the event's [member keycode] and modifiers. */
        as_text_keycode(): string
        /** Returns a [String] representation of the event's [member physical_keycode] and modifiers. */
        as_text_physical_keycode(): string
        /** Returns a [String] representation of the event's [member key_label] and modifiers. */
        as_text_key_label(): string
        /** If [code]true[/code], the key's state is pressed. If [code]false[/code], the key's state is released. */
        pressed: boolean
        /** Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.
         *  To get a human-readable representation of the [InputEventKey], use [code]OS.get_keycode_string(event.keycode)[/code] where [code]event[/code] is the [InputEventKey].
         *  
         */
        keycode: number /*i64*/
        /** Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.
         *  To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:
         *  
         */
        physical_keycode: number /*i64*/
        /** Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.
         *  For keyboard layouts with a single label on the key, it is equivalent to [member keycode].
         *  To get a human-readable representation of the [InputEventKey], use [code]OS.get_keycode_string(event.key_label)[/code] where [code]event[/code] is the [InputEventKey].
         *  
         */
        key_label: number /*i64*/
        /** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
        unicode: number /*i64*/
        /** If [code]true[/code], the key was already pressed before this event. It means the user is holding the key down. */
        echo: boolean
    }
    /** Represents a MIDI message from a MIDI device, such as a musical keyboard. */
    class InputEventMIDI extends InputEvent {
        set_channel(channel: number /*i64*/): void
        get_channel(): number /*i64*/
        set_message(message: MIDIMessage): void
        get_message(): MIDIMessage
        set_pitch(pitch: number /*i64*/): void
        get_pitch(): number /*i64*/
        set_velocity(velocity: number /*i64*/): void
        get_velocity(): number /*i64*/
        set_instrument(instrument: number /*i64*/): void
        get_instrument(): number /*i64*/
        set_pressure(pressure: number /*i64*/): void
        get_pressure(): number /*i64*/
        set_controller_number(controller_number: number /*i64*/): void
        get_controller_number(): number /*i64*/
        set_controller_value(controller_value: number /*i64*/): void
        get_controller_value(): number /*i64*/
        /** The MIDI channel of this message, ranging from [code]0[/code] to [code]15[/code]. MIDI channel [code]9[/code] is reserved for percussion instruments. */
        channel: number /*i64*/
        /** Represents the type of MIDI message (see the [enum MIDIMessage] enum).
         *  For more information, see the [url=https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes]MIDI message status byte list chart[/url].
         */
        message: number /*i64*/
        /** The pitch index number of this MIDI message. This value ranges from [code]0[/code] to [code]127[/code].
         *  On a piano, the [b]middle C[/b] is [code]60[/code], followed by a [b]C-sharp[/b] ([code]61[/code]), then a [b]D[/b] ([code]62[/code]), and so on. Each octave is split in offsets of 12. See the "MIDI note number" column of the [url=https://en.wikipedia.org/wiki/Piano_key_frequencies]piano key frequency chart[/url] a full list.
         */
        pitch: number /*i64*/
        /** The velocity of the MIDI message. This value ranges from [code]0[/code] to [code]127[/code]. For a musical keyboard, this corresponds to how quickly the key was pressed, and is rarely above [code]110[/code] in practice.
         *  [b]Note:[/b] Some MIDI devices may send a [constant MIDI_MESSAGE_NOTE_ON] message with [code]0[/code] velocity and expect it to be treated the same as a [constant MIDI_MESSAGE_NOTE_OFF] message. If necessary, this can be handled with a few lines of code:
         *  
         */
        velocity: number /*i64*/
        /** The instrument (also called [i]program[/i] or [i]preset[/i]) used on this MIDI message. This value ranges from [code]0[/code] to [code]127[/code].
         *  To see what each value means, refer to the [url=https://en.wikipedia.org/wiki/General_MIDI#Program_change_events]General MIDI's instrument list[/url]. Keep in mind that the list is off by 1 because it does not begin from 0. A value of [code]0[/code] corresponds to the acoustic grand piano.
         */
        instrument: number /*i64*/
        /** The strength of the key being pressed. This value ranges from [code]0[/code] to [code]127[/code].
         *  [b]Note:[/b] For many devices, this value is always [code]0[/code]. Other devices such as musical keyboards may simulate pressure by changing the [member velocity], instead.
         */
        pressure: number /*i64*/
        /** The unique number of the controller, if [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], otherwise this is [code]0[/code]. This value can be used to identify sliders for volume, balance, and panning, as well as switches and pedals on the MIDI device. See the [url=https://en.wikipedia.org/wiki/General_MIDI#Controller_events]General MIDI specification[/url] for a small list. */
        controller_number: number /*i64*/
        /** The value applied to the controller. If [member message] is [constant MIDI_MESSAGE_CONTROL_CHANGE], this value ranges from [code]0[/code] to [code]127[/code], otherwise it is [code]0[/code]. See also [member controller_value]. */
        controller_value: number /*i64*/
    }
    /** Represents a magnifying touch gesture. */
    class InputEventMagnifyGesture extends InputEventGesture {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
        /** The amount (or delta) of the event. This value is closer to [code]1.0[/code] the slower the gesture is performed. */
        factor: number /*f64*/
    }
    /** Base input event type for mouse events. */
    class InputEventMouse extends InputEventWithModifiers {
        set_button_mask(button_mask: MouseButtonMask): void
        get_button_mask(): MouseButtonMask
        set_position(position: Vector2): void
        get_position(): Vector2
        set_global_position(global_position: Vector2): void
        get_global_position(): Vector2
        /** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
        button_mask: number /*i64*/
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].
         */
        position: Vector2
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].
         *  When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].
         */
        global_position: Vector2
    }
    /** Represents a mouse button being pressed or released. */
    class InputEventMouseButton extends InputEventMouse {
        set_factor(factor: number /*f64*/): void
        get_factor(): number /*f64*/
        set_button_index(button_index: MouseButton): void
        get_button_index(): MouseButton
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_click(double_click: boolean): void
        is_double_click(): boolean
        /** The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be [code]0[/code] if not supported. */
        factor: number /*f64*/
        /** The mouse button identifier, one of the [enum MouseButton] button or button wheel constants. */
        button_index: number /*i64*/
        /** If [code]true[/code], the mouse button event has been canceled. */
        canceled: boolean
        /** If [code]true[/code], the mouse button's state is pressed. If [code]false[/code], the mouse button's state is released. */
        pressed: boolean
        /** If [code]true[/code], the mouse button's state is a double-click. */
        double_click: boolean
    }
    /** Represents a mouse or a pen movement. */
    class InputEventMouseMotion extends InputEventMouse {
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from [code]-1.0[/code] to [code]1.0[/code] for both axes. */
        tilt: Vector2
        /** Represents the pressure the user puts on the pen. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
        pressure: number /*f64*/
        /** Returns [code]true[/code] when using the eraser end of a stylus pen.
         *  [b]Note:[/b] This property is implemented on Linux, macOS and Windows.
         */
        pen_inverted: boolean
        /** The mouse position relative to the previous position (position at the last frame).
         *  [b]Note:[/b] Since [InputEventMouseMotion] is only emitted when the mouse moves, the last event won't have a relative position of [code]Vector2(0, 0)[/code] when the user stops moving the mouse.
         */
        relative: Vector2
        /** The mouse velocity in pixels per second. */
        velocity: Vector2
    }
    /** Represents a panning touch gesture. */
    class InputEventPanGesture extends InputEventGesture {
        set_delta(delta: Vector2): void
        get_delta(): Vector2
        /** Panning amount since last pan event. */
        delta: Vector2
    }
    /** Represents a screen drag event. */
    class InputEventScreenDrag extends InputEventFromWindow {
        set_index(index: number /*i64*/): void
        get_index(): number /*i64*/
        set_tilt(tilt: Vector2): void
        get_tilt(): Vector2
        set_pressure(pressure: number /*f64*/): void
        get_pressure(): number /*f64*/
        set_pen_inverted(pen_inverted: boolean): void
        get_pen_inverted(): boolean
        set_position(position: Vector2): void
        get_position(): Vector2
        set_relative(relative: Vector2): void
        get_relative(): Vector2
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        /** The drag event index in the case of a multi-drag event. */
        index: number /*i64*/
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from [code]-1.0[/code] to [code]1.0[/code] for both axes. */
        tilt: Vector2
        /** Represents the pressure the user puts on the pen. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
        pressure: number /*f64*/
        /** Returns [code]true[/code] when using the eraser end of a stylus pen. */
        pen_inverted: boolean
        /** The drag position in the viewport the node is in, using the coordinate system of this viewport. */
        position: Vector2
        /** The drag position relative to the previous position (position at the last frame). */
        relative: Vector2
        /** The drag velocity. */
        velocity: Vector2
    }
    /** Represents a screen touch event. */
    class InputEventScreenTouch extends InputEventFromWindow {
        set_index(index: number /*i64*/): void
        get_index(): number /*i64*/
        set_position(position: Vector2): void
        get_position(): Vector2
        set_pressed(pressed: boolean): void
        set_canceled(canceled: boolean): void
        set_double_tap(double_tap: boolean): void
        is_double_tap(): boolean
        /** The touch index in the case of a multi-touch event. One index = one finger. */
        index: number /*i64*/
        /** The touch position in the viewport the node is in, using the coordinate system of this viewport. */
        position: Vector2
        /** If [code]true[/code], the touch event has been canceled. */
        canceled: boolean
        /** If [code]true[/code], the touch's state is pressed. If [code]false[/code], the touch's state is released. */
        pressed: boolean
        /** If [code]true[/code], the touch's state is a double tap. */
        double_tap: boolean
    }
    /** Represents a triggered keyboard [Shortcut]. */
    class InputEventShortcut extends InputEvent {
        set_shortcut(shortcut: Shortcut): void
        get_shortcut(): Shortcut
        /** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return [code]true[/code] for this event. */
        shortcut: Shortcut
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd]. */
    class InputEventWithModifiers extends InputEventFromWindow {
        set_command_or_control_autoremap(enable: boolean): void
        is_command_or_control_autoremap(): boolean
        /** On macOS, returns [code]true[/code] if [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) is pressed.
         *  On other platforms, returns [code]true[/code] if [kbd]Ctrl[/kbd] is pressed.
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
        /** Automatically use [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) on macOS and [kbd]Ctrl[/kbd] on other platforms. If [code]true[/code], [member ctrl_pressed] and [member meta_pressed] cannot be set. */
        command_or_control_autoremap: boolean
        /** State of the [kbd]Alt[/kbd] modifier. */
        alt_pressed: boolean
        /** State of the [kbd]Shift[/kbd] modifier. */
        shift_pressed: boolean
        /** State of the [kbd]Ctrl[/kbd] modifier. */
        ctrl_pressed: boolean
        /** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
        meta_pressed: boolean
    }
    class InspectorDock extends VBoxContainer {
        _unref_resource(): void
        _paste_resource(): void
        _copy_resource(): void
        _menu_collapseall(): void
        _menu_expandall(): void
        edit_resource(_unnamed_arg0: Resource): void
        store_script_properties(_unnamed_arg0: Object): void
        apply_script_properties(_unnamed_arg0: Object): void
        readonly request_help: Signal
    }
    class InstallGodotJSPresetConfirmationDialog extends ConfirmationDialog {
    }
    /** Placeholder for the root [Node] of a [PackedScene]. */
    class InstancePlaceholder extends Node {
        /** Returns the list of properties that will be applied to the node when [method create_instance] is called.
         *  If [param with_order] is [code]true[/code], a key named [code].order[/code] (note the leading period) is added to the dictionary. This [code].order[/code] key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).
         */
        get_stored_values(with_order: boolean = false): Dictionary
        /** Call this method to actually load in the node. The created node will be placed as a sibling [i]above[/i] the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.
         *  [b]Note:[/b] [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.
         */
        create_instance(replace: boolean = false, custom_scene: PackedScene = <any> {} /*compound.type from nil*/): Node
        /** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
        get_instance_path(): string
    }
    /** Creates an idle interval in a [Tween] animation. */
    class IntervalTweener extends Tweener {
    }
    namespace ItemList {
        enum IconMode {
            ICON_MODE_TOP = 0,
            ICON_MODE_LEFT = 1,
        }
        enum SelectMode {
            SELECT_SINGLE = 0,
            SELECT_MULTI = 1,
        }
    }
    /** A vertical list of selectable items with one or multiple columns. */
    class ItemList extends Control {
        /** Adds an item to the item list with specified text. Returns the index of an added item.
         *  Specify an [param icon], or use [code]null[/code] as the [param icon] for a list item with no icon.
         *  If selectable is [code]true[/code], the list item will be selectable.
         */
        add_item(text: string, icon: Texture2D = <any> {} /*compound.type from nil*/, selectable: boolean = true): number /*i64*/
        /** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
        add_icon_item(icon: Texture2D, selectable: boolean = true): number /*i64*/
        /** Sets text of the item associated with the specified index. */
        set_item_text(idx: number /*i64*/, text: string): void
        /** Returns the text associated with the specified index. */
        get_item_text(idx: number /*i64*/): string
        /** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
        set_item_icon(idx: number /*i64*/, icon: Texture2D): void
        /** Returns the icon associated with the specified index. */
        get_item_icon(idx: number /*i64*/): Texture2D
        /** Sets item's text base writing direction. */
        set_item_text_direction(idx: number /*i64*/, direction: Control.TextDirection): void
        /** Returns item's text base writing direction. */
        get_item_text_direction(idx: number /*i64*/): Control.TextDirection
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_item_language(idx: number /*i64*/, language: string): void
        /** Returns item's text language code. */
        get_item_language(idx: number /*i64*/): string
        /** Sets whether the item icon will be drawn transposed. */
        set_item_icon_transposed(idx: number /*i64*/, transposed: boolean): void
        /** Returns [code]true[/code] if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
        is_item_icon_transposed(idx: number /*i64*/): boolean
        /** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
        set_item_icon_region(idx: number /*i64*/, rect: Rect2): void
        /** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
        get_item_icon_region(idx: number /*i64*/): Rect2
        /** Sets a modulating [Color] of the item associated with the specified index. */
        set_item_icon_modulate(idx: number /*i64*/, modulate: Color): void
        /** Returns a [Color] modulating item's icon at the specified index. */
        get_item_icon_modulate(idx: number /*i64*/): Color
        /** Allows or disallows selection of the item associated with the specified index. */
        set_item_selectable(idx: number /*i64*/, selectable: boolean): void
        /** Returns [code]true[/code] if the item at the specified index is selectable. */
        is_item_selectable(idx: number /*i64*/): boolean
        /** Disables (or enables) the item at the specified index.
         *  Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).
         */
        set_item_disabled(idx: number /*i64*/, disabled: boolean): void
        /** Returns [code]true[/code] if the item at the specified index is disabled. */
        is_item_disabled(idx: number /*i64*/): boolean
        /** Sets a value (of any type) to be stored with the item associated with the specified index. */
        set_item_metadata(idx: number /*i64*/, metadata: any): void
        /** Returns the metadata value of the specified index. */
        get_item_metadata(idx: number /*i64*/): any
        /** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_bg_color(idx: number /*i64*/, custom_bg_color: Color): void
        /** Returns the custom background color of the item specified by [param idx] index. */
        get_item_custom_bg_color(idx: number /*i64*/): Color
        /** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
        set_item_custom_fg_color(idx: number /*i64*/, custom_fg_color: Color): void
        /** Returns the custom foreground color of the item specified by [param idx] index. */
        get_item_custom_fg_color(idx: number /*i64*/): Color
        /** Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is [code]true[/code] the last column expands to fill the rest of the row.
         *  [b]Note:[/b] The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.
         */
        get_item_rect(idx: number /*i64*/, expand: boolean = true): Rect2
        /** Sets whether the tooltip hint is enabled for specified item index. */
        set_item_tooltip_enabled(idx: number /*i64*/, enable: boolean): void
        /** Returns [code]true[/code] if the tooltip is enabled for specified item index. */
        is_item_tooltip_enabled(idx: number /*i64*/): boolean
        /** Sets the tooltip hint for the item associated with the specified index. */
        set_item_tooltip(idx: number /*i64*/, tooltip: string): void
        /** Returns the tooltip hint associated with the specified index. */
        get_item_tooltip(idx: number /*i64*/): string
        /** Select the item at the specified index.
         *  [b]Note:[/b] This method does not trigger the item selection signal.
         */
        select(idx: number /*i64*/, single: boolean = true): void
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: number /*i64*/): void
        /** Ensures there are no items selected. */
        deselect_all(): void
        /** Returns [code]true[/code] if the item at the specified index is currently selected. */
        is_selected(idx: number /*i64*/): boolean
        /** Returns an array with the indexes of the selected items. */
        get_selected_items(): PackedInt32Array
        /** Moves item from index [param from_idx] to [param to_idx]. */
        move_item(from_idx: number /*i64*/, to_idx: number /*i64*/): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        /** Removes the item specified by [param idx] index from the list. */
        remove_item(idx: number /*i64*/): void
        /** Removes all items from the list. */
        clear(): void
        /** Sorts items in the list by their text. */
        sort_items_by_text(): void
        set_fixed_column_width(width: number /*i64*/): void
        get_fixed_column_width(): number /*i64*/
        set_same_column_width(enable: boolean): void
        is_same_column_width(): boolean
        set_max_text_lines(lines: number /*i64*/): void
        get_max_text_lines(): number /*i64*/
        set_max_columns(amount: number /*i64*/): void
        get_max_columns(): number /*i64*/
        set_select_mode(mode: ItemList.SelectMode): void
        get_select_mode(): ItemList.SelectMode
        set_icon_mode(mode: ItemList.IconMode): void
        get_icon_mode(): ItemList.IconMode
        set_fixed_icon_size(size: Vector2i): void
        get_fixed_icon_size(): Vector2i
        set_icon_scale(scale: number /*f64*/): void
        get_icon_scale(): number /*f64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        set_auto_height(enable: boolean): void
        has_auto_height(): boolean
        /** Returns [code]true[/code] if one or more items are selected. */
        is_anything_selected(): boolean
        /** Returns the item index at the given [param position].
         *  When there is no item at that point, -1 will be returned if [param exact] is [code]true[/code], and the closest item index will be returned otherwise.
         *  [b]Note:[/b] The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.
         */
        get_item_at_position(position: Vector2, exact: boolean = false): number /*i64*/
        /** Ensure current selection is visible, adjusting the scroll position as necessary. */
        ensure_current_is_visible(): void
        /** Returns the vertical scrollbar.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
         */
        get_v_scroll_bar(): VScrollBar
        set_text_overrun_behavior(overrun_behavior: TextServer.OverrunBehavior): void
        get_text_overrun_behavior(): TextServer.OverrunBehavior
        /** Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [member auto_height], change. The method can be used to trigger the update ahead of next drawing pass. */
        force_update_list_size(): void
        /** Allows single or multiple item selection. See the [enum SelectMode] constants. */
        select_mode: number /*i64*/
        /** If [code]true[/code], the currently selected item can be selected again. */
        allow_reselect: boolean
        /** If [code]true[/code], right mouse button click can select items. */
        allow_rmb_select: boolean
        /** If [code]true[/code], allows navigating the [ItemList] with letter keys through incremental search. */
        allow_search: boolean
        /** Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.
         *  [b]Note:[/b] This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.
         */
        max_text_lines: number /*i64*/
        /** If [code]true[/code], the control will automatically resize the height to fit its content. */
        auto_height: boolean
        /** Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        /** The number of items currently in the list. */
        item_count: any /*Items,item_*/
        /** Maximum columns the list will have.
         *  If greater than zero, the content will be split among the specified columns.
         *  A value of zero means unlimited columns, i.e. all items will be put in the same row.
         */
        max_columns: number /*i64*/
        /** Whether all columns will have the same width.
         *  If [code]true[/code], the width is equal to the largest column width of all columns.
         */
        same_column_width: boolean
        /** The width all columns will be adjusted to.
         *  A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.
         */
        fixed_column_width: number /*i64*/
        /** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
        icon_mode: number /*i64*/
        /** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
        icon_scale: number /*f64*/
        /** The size all icons will be adjusted to.
         *  If either X or Y component is not greater than zero, icon size won't be affected.
         */
        fixed_icon_size: Vector2i
        readonly item_selected: Signal
        readonly empty_clicked: Signal
        readonly item_clicked: Signal
        readonly multi_selected: Signal
        readonly item_activated: Signal
    }
    /** Singleton that connects the engine with Android plugins to interface with native Android code. */
    class JNISingleton extends Object {
    }
    /** Helper class for creating and parsing JSON data. */
    class JSON extends Resource {
        /** Converts a [Variant] var to JSON text and returns the result. Useful for serializing data to store or send over the network.
         *  [b]Note:[/b] The JSON specification does not define integer or float types, but only a [i]number[/i] type. Therefore, converting a Variant to JSON text will convert all numerical values to [float] types.
         *  [b]Note:[/b] If [param full_precision] is [code]true[/code], when stringifying floats, the unreliable digits are stringified in addition to the reliable digits to guarantee exact decoding.
         *  The [param indent] parameter controls if and how something is indented, the string used for this parameter will be used where there should be an indent in the output, even spaces like [code]"   "[/code] will work. [code]\t[/code] and [code]\n[/code] can also be used for a tab indent, or to make a newline for each indent respectively.
         *  [b]Example output:[/b]
         *  
         */
        static stringify(data: any, indent: string = '', sort_keys: boolean = true, full_precision: boolean = false): string
        /** Attempts to parse the [param json_string] provided and returns the parsed data. Returns [code]null[/code] if parse failed. */
        static parse_string(json_string: string): any
        /** Attempts to parse the [param json_text] provided.
         *  Returns an [enum Error]. If the parse was successful, it returns [constant OK] and the result can be retrieved using [member data]. If unsuccessful, use [method get_error_line] and [method get_error_message] for identifying the source of the failure.
         *  Non-static variant of [method parse_string], if you want custom error handling.
         *  The optional [param keep_text] argument instructs the parser to keep a copy of the original text. This text can be obtained later by using the [method get_parsed_text] function and is used when saving the resource (instead of generating new text from [member data]).
         */
        parse(json_text: string, keep_text: boolean = false): GodotError
        get_data(): any
        set_data(data: any): void
        /** Return the text parsed by [method parse] as long as the function is instructed to keep it. */
        get_parsed_text(): string
        /** Returns [code]0[/code] if the last call to [method parse] was successful, or the line number where the parse failed. */
        get_error_line(): number /*i64*/
        /** Returns an empty string if the last call to [method parse] was successful, or the error message if it failed. */
        get_error_message(): string
        /** Contains the parsed JSON data in [Variant] form. */
        data: any
    }
    namespace JSONRPC {
        enum ErrorCode {
            PARSE_ERROR = -32700,
            INVALID_REQUEST = -32600,
            METHOD_NOT_FOUND = -32601,
            INVALID_PARAMS = -32602,
            INTERNAL_ERROR = -32603,
        }
    }
    /** A helper to handle dictionaries which look like JSONRPC documents. */
    class JSONRPC extends Object {
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
        make_response_error(code: number /*i64*/, message: string, id: any = <any> {} /*compound.type from nil*/): Dictionary
    }
    class JavaClass extends RefCounted {
    }
    /** A wrapper class for web native JavaScript objects. */
    class JavaScriptObject extends RefCounted {
    }
    /** Abstract base class for all 2D physics joints. */
    class Joint2D extends Node2D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        /** Returns the joint's [RID]. */
        get_rid(): RID
        /** The first body attached to the joint. Must derive from [PhysicsBody2D]. */
        node_a: NodePath
        /** The second body attached to the joint. Must derive from [PhysicsBody2D]. */
        node_b: NodePath
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.
         *  When set to [code]0[/code], the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.
         */
        bias: number /*f64*/
        /** If [code]true[/code], [member node_a] and [member node_b] can not collide. */
        disable_collision: boolean
    }
    /** Abstract base class for all 3D physics joints. */
    class Joint3D extends Node3D {
        set_node_a(node: NodePath): void
        get_node_a(): NodePath
        set_node_b(node: NodePath): void
        get_node_b(): NodePath
        set_solver_priority(priority: number /*i64*/): void
        get_solver_priority(): number /*i64*/
        set_exclude_nodes_from_collision(enable: boolean): void
        get_exclude_nodes_from_collision(): boolean
        /** Returns the joint's [RID]. */
        get_rid(): RID
        /** The node attached to the first side (A) of the joint. */
        node_a: NodePath
        /** The node attached to the second side (B) of the joint. */
        node_b: NodePath
        /** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
        solver_priority: number /*i64*/
        /** If [code]true[/code], the two bodies of the nodes are not able to collide with each other. */
        exclude_nodes_from_collision: boolean
    }
    class Joint3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Holds collision data from the movement of a [PhysicsBody2D]. */
    class KinematicCollision2D extends RefCounted {
        /** Returns the point of collision in global coordinates. */
        get_position(): Vector2
        /** Returns the colliding body's shape's normal at the point of collision. */
        get_normal(): Vector2
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector2
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector2
        /** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
        get_angle(up_direction: Vector2 = new Vector2(0, -1)): number /*f64*/
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): number /*f64*/
        /** Returns the moving object's colliding shape. */
        get_local_shape(): Object
        /** Returns the colliding body's attached [Object]. */
        get_collider(): Object
        /** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
        get_collider_id(): number /*i64*/
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
        get_collider_rid(): RID
        /** Returns the colliding body's shape. */
        get_collider_shape(): Object
        /** Returns the colliding body's shape index. See [CollisionObject2D]. */
        get_collider_shape_index(): number /*i64*/
        /** Returns the colliding body's velocity. */
        get_collider_velocity(): Vector2
    }
    /** Holds collision data from the movement of a [PhysicsBody3D]. */
    class KinematicCollision3D extends RefCounted {
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        /** Returns the colliding body's length of overlap along the collision normal. */
        get_depth(): number /*f64*/
        /** Returns the number of detected collisions. */
        get_collision_count(): number /*i64*/
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
        get_position(collision_index: number /*i64*/ = 0): Vector3
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
        get_normal(collision_index: number /*i64*/ = 0): Vector3
        /** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
        get_angle(collision_index: number /*i64*/ = 0, up_direction: Vector3 = Vector3.ZERO): number /*f64*/
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
        get_local_shape(collision_index: number /*i64*/ = 0): Object
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
        get_collider(collision_index: number /*i64*/ = 0): Object
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
        get_collider_id(collision_index: number /*i64*/ = 0): number /*i64*/
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
        get_collider_rid(collision_index: number /*i64*/ = 0): RID
        /** Returns the colliding body's shape given a collision index (the deepest collision by default). */
        get_collider_shape(collision_index: number /*i64*/ = 0): Object
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
        get_collider_shape_index(collision_index: number /*i64*/ = 0): number /*i64*/
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
        get_collider_velocity(collision_index: number /*i64*/ = 0): Vector3
    }
    /** A control for displaying plain text. */
    class Label extends Control {
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
         *  If [param line] is set to [code]-1[/code], returns the biggest line height.
         *  If there are no lines, returns font size in pixels.
         */
        get_line_height(line: number /*i64*/ = -1): number /*i64*/
        /** Returns the number of lines of text the Label has. */
        get_line_count(): number /*i64*/
        /** Returns the number of lines shown. Useful if the [Label]'s height cannot currently display all lines. */
        get_visible_line_count(): number /*i64*/
        /** Returns the total number of printable characters in the text (excluding spaces and newlines). */
        get_total_character_count(): number /*i64*/
        set_visible_characters(amount: number /*i64*/): void
        get_visible_characters(): number /*i64*/
        get_visible_characters_behavior(): TextServer.VisibleCharactersBehavior
        set_visible_characters_behavior(behavior: TextServer.VisibleCharactersBehavior): void
        set_visible_ratio(ratio: number /*f64*/): void
        get_visible_ratio(): number /*f64*/
        set_lines_skipped(lines_skipped: number /*i64*/): void
        get_lines_skipped(): number /*i64*/
        set_max_lines_visible(lines_visible: number /*i64*/): void
        get_max_lines_visible(): number /*i64*/
        set_structured_text_bidi_override(parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(args: Array): void
        get_structured_text_bidi_override_options(): Array
        /** The text to display on screen. */
        text: string
        /** A [LabelSettings] resource that can be shared between multiple [Label] nodes. Takes priority over theme properties. */
        label_settings: LabelSettings
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        /** If [code]true[/code], the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally. */
        clip_text: boolean
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        text_overrun_behavior: number /*i64*/
        /** If [code]true[/code], all the text displays as UPPERCASE. */
        uppercase: boolean
        /** Aligns text to the given tab-stops. */
        tab_stops: PackedFloat32Array
        /** The number of the lines ignored and not displayed from the start of the [member text] value. */
        lines_skipped: number /*i64*/
        /** Limits the lines of text the node shows on screen. */
        max_lines_visible: number /*i64*/
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
    }
    namespace Label3D {
        enum DrawFlags {
            FLAG_SHADED = 0,
            FLAG_DOUBLE_SIDED = 1,
            FLAG_DISABLE_DEPTH_TEST = 2,
            FLAG_FIXED_SIZE = 3,
            FLAG_MAX = 4,
        }
        enum AlphaCutMode {
            ALPHA_CUT_DISABLED = 0,
            ALPHA_CUT_DISCARD = 1,
            ALPHA_CUT_OPAQUE_PREPASS = 2,
            ALPHA_CUT_HASH = 3,
        }
    }
    /** A node for displaying plain text in 3D space. */
    class Label3D extends GeometryInstance3D {
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
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        set_outline_render_priority(priority: number /*i64*/): void
        get_outline_render_priority(): number /*i64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_outline_size(outline_size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_line_spacing(line_spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_autowrap_mode(autowrap_mode: TextServer.AutowrapMode): void
        get_autowrap_mode(): TextServer.AutowrapMode
        set_justification_flags(justification_flags: TextServer.JustificationFlag): void
        get_justification_flags(): TextServer.JustificationFlag
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
        set_pixel_size(pixel_size: number /*f64*/): void
        get_pixel_size(): number /*f64*/
        set_offset(offset: Vector2): void
        get_offset(): Vector2
        /** If [code]true[/code], the specified flag will be enabled. See [enum Label3D.DrawFlags] for a list of flags. */
        set_draw_flag(flag: Label3D.DrawFlags, enabled: boolean): void
        /** Returns the value of the specified flag. */
        get_draw_flag(flag: Label3D.DrawFlags): boolean
        set_billboard_mode(mode: BaseMaterial3D.BillboardMode): void
        get_billboard_mode(): BaseMaterial3D.BillboardMode
        set_alpha_cut_mode(mode: Label3D.AlphaCutMode): void
        get_alpha_cut_mode(): Label3D.AlphaCutMode
        set_alpha_scissor_threshold(threshold: number /*f64*/): void
        get_alpha_scissor_threshold(): number /*f64*/
        set_alpha_hash_scale(threshold: number /*f64*/): void
        get_alpha_hash_scale(): number /*f64*/
        set_alpha_antialiasing(alpha_aa: BaseMaterial3D.AlphaAntiAliasing): void
        get_alpha_antialiasing(): BaseMaterial3D.AlphaAntiAliasing
        set_alpha_antialiasing_edge(edge: number /*f64*/): void
        get_alpha_antialiasing_edge(): number /*f64*/
        set_texture_filter(mode: BaseMaterial3D.TextureFilter): void
        get_texture_filter(): BaseMaterial3D.TextureFilter
        /** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
        generate_triangle_mesh(): TriangleMesh
        /** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
        pixel_size: number /*f64*/
        /** The text drawing offset (in pixels). */
        offset: Vector2
        /** The billboard mode to use for the label. See [enum BaseMaterial3D.BillboardMode] for possible values. */
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
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options. */
        texture_filter: number /*i64*/
        /** Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.
         *  [b]Note:[/b] This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).
         *  [b]Note:[/b] This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
         */
        render_priority: number /*i64*/
        /** Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.
         *  [b]Note:[/b] This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).
         *  [b]Note:[/b] This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
         */
        outline_render_priority: number /*i64*/
        /** Text [Color] of the [Label3D]. */
        modulate: Color
        /** The tint of text outline. */
        outline_modulate: Color
        /** The text to display on screen. */
        text: string
        /** Font configuration used to display text. */
        font: Font
        /** Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.
         *  Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.
         */
        font_size: number /*i64*/
        /** Text outline size. */
        outline_size: number /*i64*/
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        horizontal_alignment: number /*i64*/
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        vertical_alignment: number /*i64*/
        /** If [code]true[/code], all the text displays as UPPERCASE. */
        uppercase: boolean
        /** Vertical space between lines in multiline [Label3D]. */
        line_spacing: number /*f64*/
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        autowrap_mode: number /*i64*/
        /** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
        justification_flags: number /*i64*/
        /** Text width (in pixels), used for autowrap and fill alignment. */
        width: number /*f64*/
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    class Label3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Provides common settings to customize the text in a [Label]. */
    class LabelSettings extends Resource {
        set_line_spacing(spacing: number /*f64*/): void
        get_line_spacing(): number /*f64*/
        set_font(font: Font): void
        get_font(): Font
        set_font_size(size: number /*i64*/): void
        get_font_size(): number /*i64*/
        set_font_color(color: Color): void
        get_font_color(): Color
        set_outline_size(size: number /*i64*/): void
        get_outline_size(): number /*i64*/
        set_outline_color(color: Color): void
        get_outline_color(): Color
        set_shadow_size(size: number /*i64*/): void
        get_shadow_size(): number /*i64*/
        set_shadow_color(color: Color): void
        get_shadow_color(): Color
        set_shadow_offset(offset: Vector2): void
        get_shadow_offset(): Vector2
        /** Vertical space between lines when the text is multiline. */
        line_spacing: number /*f64*/
        /** [Font] used for the text. */
        font: Font
        /** Size of the text. */
        font_size: number /*i64*/
        /** Color of the text. */
        font_color: Color
        /** Text outline size. */
        outline_size: number /*i64*/
        /** The color of the outline. */
        outline_color: Color
        /** Size of the shadow effect. */
        shadow_size: number /*i64*/
        /** Color of the shadow effect. If alpha is [code]0[/code], no shadow will be drawn. */
        shadow_color: Color
        /** Offset of the shadow effect, in pixels. */
        shadow_offset: Vector2
    }
    namespace Light2D {
        enum ShadowFilter {
            SHADOW_FILTER_NONE = 0,
            SHADOW_FILTER_PCF5 = 1,
            SHADOW_FILTER_PCF13 = 2,
        }
        enum BlendMode {
            BLEND_MODE_ADD = 0,
            BLEND_MODE_SUB = 1,
            BLEND_MODE_MIX = 2,
        }
    }
    /** Casts light in a 2D environment. */
    class Light2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        set_color(color: Color): void
        get_color(): Color
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_z_range_min(z: number /*i64*/): void
        get_z_range_min(): number /*i64*/
        set_z_range_max(z: number /*i64*/): void
        get_z_range_max(): number /*i64*/
        set_layer_range_min(layer: number /*i64*/): void
        get_layer_range_min(): number /*i64*/
        set_layer_range_max(layer: number /*i64*/): void
        get_layer_range_max(): number /*i64*/
        set_item_cull_mask(item_cull_mask: number /*i64*/): void
        get_item_cull_mask(): number /*i64*/
        set_item_shadow_cull_mask(item_shadow_cull_mask: number /*i64*/): void
        get_item_shadow_cull_mask(): number /*i64*/
        set_shadow_enabled(enabled: boolean): void
        is_shadow_enabled(): boolean
        set_shadow_smooth(smooth: number /*f64*/): void
        get_shadow_smooth(): number /*f64*/
        set_shadow_filter(filter: Light2D.ShadowFilter): void
        get_shadow_filter(): Light2D.ShadowFilter
        set_shadow_color(shadow_color: Color): void
        get_shadow_color(): Color
        set_blend_mode(mode: Light2D.BlendMode): void
        get_blend_mode(): Light2D.BlendMode
        /** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        set_height(height: number /*f64*/): void
        /** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        get_height(): number /*f64*/
        /** If [code]true[/code], Light2D will emit light. */
        enabled: boolean
        /** If [code]true[/code], Light2D will only appear when editing the scene. */
        editor_only: boolean
        /** The Light2D's [Color]. */
        color: Color
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        energy: number /*f64*/
        /** The Light2D's blend mode. See [enum BlendMode] constants for values. */
        blend_mode: number /*i64*/
        /** Minimum [code]z[/code] value of objects that are affected by the Light2D. */
        range_z_min: number /*i64*/
        /** Maximum [code]z[/code] value of objects that are affected by the Light2D. */
        range_z_max: number /*i64*/
        /** Minimum layer value of objects that are affected by the Light2D. */
        range_layer_min: number /*i64*/
        /** Maximum layer value of objects that are affected by the Light2D. */
        range_layer_max: number /*i64*/
        /** The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.
         *  [b]Note:[/b] [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].
         */
        range_item_cull_mask: number /*i64*/
        /** If [code]true[/code], the Light2D will cast shadows. */
        shadow_enabled: boolean
        /** [Color] of shadows cast by the Light2D. */
        shadow_color: Color
        /** Shadow filter type. See [enum ShadowFilter] for possible values. */
        shadow_filter: number /*i64*/
        /** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
        shadow_filter_smooth: number /*f64*/
        /** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can [i]receive[/i] the light. */
        shadow_item_cull_mask: number /*i64*/
    }
    namespace Light3D {
        enum Param {
            PARAM_ENERGY = 0,
            PARAM_INDIRECT_ENERGY = 1,
            PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            PARAM_SPECULAR = 3,
            PARAM_RANGE = 4,
            PARAM_SIZE = 5,
            PARAM_ATTENUATION = 6,
            PARAM_SPOT_ANGLE = 7,
            PARAM_SPOT_ATTENUATION = 8,
            PARAM_SHADOW_MAX_DISTANCE = 9,
            PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            PARAM_SHADOW_FADE_START = 13,
            PARAM_SHADOW_NORMAL_BIAS = 14,
            PARAM_SHADOW_BIAS = 15,
            PARAM_SHADOW_PANCAKE_SIZE = 16,
            PARAM_SHADOW_OPACITY = 17,
            PARAM_SHADOW_BLUR = 18,
            PARAM_TRANSMITTANCE_BIAS = 19,
            PARAM_INTENSITY = 20,
            PARAM_MAX = 21,
        }
        enum BakeMode {
            BAKE_DISABLED = 0,
            BAKE_STATIC = 1,
            BAKE_DYNAMIC = 2,
        }
    }
    /** Provides a base class for different kinds of light nodes. */
    class Light3D extends VisualInstance3D {
        set_editor_only(editor_only: boolean): void
        is_editor_only(): boolean
        /** Sets the value of the specified [enum Light3D.Param] parameter. */
        set_param(param: Light3D.Param, value: number /*f64*/): void
        /** Returns the value of the specified [enum Light3D.Param] parameter. */
        get_param(param: Light3D.Param): number /*f64*/
        set_shadow(enabled: boolean): void
        has_shadow(): boolean
        set_negative(enabled: boolean): void
        is_negative(): boolean
        set_cull_mask(cull_mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: number /*f64*/): void
        get_distance_fade_begin(): number /*f64*/
        set_distance_fade_shadow(distance: number /*f64*/): void
        get_distance_fade_shadow(): number /*f64*/
        set_distance_fade_length(distance: number /*f64*/): void
        get_distance_fade_length(): number /*f64*/
        set_color(color: Color): void
        get_color(): Color
        set_shadow_reverse_cull_face(enable: boolean): void
        get_shadow_reverse_cull_face(): boolean
        set_bake_mode(bake_mode: Light3D.BakeMode): void
        get_bake_mode(): Light3D.BakeMode
        set_projector(projector: Texture2D): void
        get_projector(): Texture2D
        set_temperature(temperature: number /*f64*/): void
        get_temperature(): number /*f64*/
        /** Returns the [Color] of an idealized blackbody at the given [member light_temperature]. This value is calculated internally based on the [member light_temperature]. This [Color] is multiplied by [member light_color] before being sent to the [RenderingServer]. */
        get_correlated_color(): Color
        /** Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [member light_color].
         *  The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.
         */
        light_temperature: number /*f64*/
        /** The light's color. An [i]overbright[/i] color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
        light_color: Color
        /** [Texture2D] projected by light. [member shadow_enabled] must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.
         *  [b]Note:[/b] Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [member ProjectSettings.rendering/textures/light_projectors/filter].
         *  [b]Note:[/b] Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
         */
        light_projector: Texture2D
        /** If [code]true[/code], the light's effect is reversed, darkening areas and casting bright shadows. */
        light_negative: boolean
        /** The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See [enum BakeMode].
         *  [b]Note:[/b] Meshes' global illumination mode will also affect the global illumination rendering. See [member GeometryInstance3D.gi_mode].
         */
        light_bake_mode: number /*i64*/
        /** The light will affect objects in the selected layers. */
        light_cull_mask: number /*i64*/
        /** If [code]true[/code], the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [member distance_fade_enabled] to hide the light when far away from the [Camera3D]. */
        shadow_enabled: boolean
        /** If [code]true[/code], reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
        shadow_reverse_cull_face: boolean
        /** If [code]true[/code], the light will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. This acts as a form of level of detail (LOD). The light will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.
         *  [b]Note:[/b] Only effective for [OmniLight3D] and [SpotLight3D].
         */
        distance_fade_enabled: boolean
        /** The distance from the camera at which the light begins to fade away (in 3D units).
         *  [b]Note:[/b] Only effective for [OmniLight3D] and [SpotLight3D].
         */
        distance_fade_begin: number /*f64*/
        /** The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [member distance_fade_begin] + [member distance_fade_length] to further improve performance, as shadow rendering is often more expensive than light rendering itself.
         *  [b]Note:[/b] Only effective for [OmniLight3D] and [SpotLight3D], and only when [member shadow_enabled] is [code]true[/code].
         */
        distance_fade_shadow: number /*f64*/
        /** Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.
         *  [b]Note:[/b] Only effective for [OmniLight3D] and [SpotLight3D].
         */
        distance_fade_length: number /*f64*/
        /** If [code]true[/code], the light only appears in the editor and will not be visible at runtime. If [code]true[/code], the light will never be baked in [LightmapGI] regardless of its [member light_bake_mode]. */
        editor_only: boolean
    }
    class Light3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Occludes light cast by a Light2D, casting shadows. */
    class LightOccluder2D extends Node2D {
        set_occluder_polygon(polygon: OccluderPolygon2D): void
        get_occluder_polygon(): OccluderPolygon2D
        set_occluder_light_mask(mask: number /*i64*/): void
        get_occluder_light_mask(): number /*i64*/
        set_as_sdf_collision(enable: boolean): void
        is_set_as_sdf_collision(): boolean
        /** The [OccluderPolygon2D] used to compute the shadow. */
        occluder: OccluderPolygon2D
        /** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
        sdf_collision: boolean
        /** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
        occluder_light_mask: number /*i64*/
    }
    class LightOccluder2DEditor extends AbstractPolygon2DEditor {
    }
    class LightOccluder2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LightmapGI {
        enum BakeQuality {
            BAKE_QUALITY_LOW = 0,
            BAKE_QUALITY_MEDIUM = 1,
            BAKE_QUALITY_HIGH = 2,
            BAKE_QUALITY_ULTRA = 3,
        }
        enum GenerateProbes {
            GENERATE_PROBES_DISABLED = 0,
            GENERATE_PROBES_SUBDIV_4 = 1,
            GENERATE_PROBES_SUBDIV_8 = 2,
            GENERATE_PROBES_SUBDIV_16 = 3,
            GENERATE_PROBES_SUBDIV_32 = 4,
        }
        enum BakeError {
            BAKE_ERROR_OK = 0,
            BAKE_ERROR_NO_SCENE_ROOT = 1,
            BAKE_ERROR_FOREIGN_DATA = 2,
            BAKE_ERROR_NO_LIGHTMAPPER = 3,
            BAKE_ERROR_NO_SAVE_PATH = 4,
            BAKE_ERROR_NO_MESHES = 5,
            BAKE_ERROR_MESHES_INVALID = 6,
            BAKE_ERROR_CANT_CREATE_IMAGE = 7,
            BAKE_ERROR_USER_ABORTED = 8,
            BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9,
        }
        enum EnvironmentMode {
            ENVIRONMENT_MODE_DISABLED = 0,
            ENVIRONMENT_MODE_SCENE = 1,
            ENVIRONMENT_MODE_CUSTOM_SKY = 2,
            ENVIRONMENT_MODE_CUSTOM_COLOR = 3,
        }
    }
    /** Computes and stores baked lightmaps for fast global illumination. */
    class LightmapGI extends VisualInstance3D {
        set_light_data(data: LightmapGIData): void
        get_light_data(): LightmapGIData
        set_bake_quality(bake_quality: LightmapGI.BakeQuality): void
        get_bake_quality(): LightmapGI.BakeQuality
        set_bounces(bounces: number /*i64*/): void
        get_bounces(): number /*i64*/
        set_bounce_indirect_energy(bounce_indirect_energy: number /*f64*/): void
        get_bounce_indirect_energy(): number /*f64*/
        set_generate_probes(subdivision: LightmapGI.GenerateProbes): void
        get_generate_probes(): LightmapGI.GenerateProbes
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_environment_mode(mode: LightmapGI.EnvironmentMode): void
        get_environment_mode(): LightmapGI.EnvironmentMode
        set_environment_custom_sky(sky: Sky): void
        get_environment_custom_sky(): Sky
        set_environment_custom_color(color: Color): void
        get_environment_custom_color(): Color
        set_environment_custom_energy(energy: number /*f64*/): void
        get_environment_custom_energy(): number /*f64*/
        set_max_texture_size(max_texture_size: number /*i64*/): void
        get_max_texture_size(): number /*i64*/
        set_use_denoiser(use_denoiser: boolean): void
        is_using_denoiser(): boolean
        set_denoiser_strength(denoiser_strength: number /*f64*/): void
        get_denoiser_strength(): number /*f64*/
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
        quality: number /*i64*/
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to [code]0[/code], only environment lighting, direct light and emissive lighting is baked. */
        bounces: number /*i64*/
        /** The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of [code]1.0[/code] represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [member bounces] then increasing [member bounce_indirect_energy].
         *  [b]Note:[/b] [member bounce_indirect_energy] only has an effect if [member bounces] is set to a value greater than or equal to [code]1[/code].
         */
        bounce_indirect_energy: number /*f64*/
        /** If [code]true[/code], bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to [code]false[/code]). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.
         *  [b]Note:[/b] The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.
         */
        directional: boolean
        /** If [code]true[/code], a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [member use_texture_for_bounces] at its default value of [code]true[/code] if unsure.
         *  [b]Note:[/b] [member use_texture_for_bounces] only has an effect if [member bounces] is set to a value greater than or equal to [code]1[/code].
         */
        use_texture_for_bounces: boolean
        /** If [code]true[/code], ignore environment lighting when baking lightmaps. */
        interior: boolean
        /** If [code]true[/code], uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image. */
        use_denoiser: boolean
        /** The strength of denoising step applied to the generated lightmaps. Only effective if [member use_denoiser] is [code]true[/code] and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        denoiser_strength: number /*f64*/
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        bias: number /*f64*/
        /** The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [member max_texture_size] at its default value of [code]16384[/code] if unsure. */
        max_texture_size: number /*i64*/
        /** The environment mode to use when baking lightmaps. */
        environment_mode: number /*i64*/
        /** The sky to use as a source of environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_SKY]. */
        environment_custom_sky: Sky
        /** The color to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        environment_custom_color: Color
        /** The color multiplier to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        environment_custom_energy: number /*f64*/
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [LightmapGI] will have banding artifacts or may have over-exposure artifacts. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        /** The level of subdivision to use when automatically generating [LightmapProbe]s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.
         *  [b]Note:[/b] Automatically generated [LightmapProbe]s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.
         *  [b]Note:[/b] Regardless of [member generate_probes_subdiv], direct lighting on dynamic objects is always applied using [Light3D] nodes in real-time.
         */
        generate_probes_subdiv: number /*i64*/
        /** The [LightmapGIData] associated to this [LightmapGI] node. This resource is automatically created after baking, and is not meant to be created manually. */
        light_data: LightmapGIData
    }
    /** Contains baked lightmap and dynamic object probe data for [LightmapGI]. */
    class LightmapGIData extends Resource {
        _set_user_data(data: Array): void
        _get_user_data(): Array
        set_lightmap_textures(light_textures: Array): void
        get_lightmap_textures(): Array
        /** If [param uses_spherical_harmonics] is [code]true[/code], tells the engine to treat the lightmap data as if it was baked with directional information.
         *  [b]Note:[/b] Changing this value on already baked lightmaps will not cause them to be baked again. This means the material appearance will look incorrect until lightmaps are baked again, in which case the value set here is discarded as the entire [LightmapGIData] resource is replaced by the lightmapper.
         */
        set_uses_spherical_harmonics(uses_spherical_harmonics: boolean): void
        /** If [code]true[/code], lightmaps were baked with directional information. See also [member LightmapGI.directional]. */
        is_using_spherical_harmonics(): boolean
        /** Adds an object that is considered baked within this [LightmapGIData]. */
        add_user(path: NodePath, uv_scale: Rect2, slice_index: number /*i64*/, sub_instance: number /*i64*/): void
        /** Returns the number of objects that are considered baked within this [LightmapGIData]. */
        get_user_count(): number /*i64*/
        /** Returns the [NodePath] of the baked object at index [param user_idx]. */
        get_user_path(user_idx: number /*i64*/): NodePath
        /** Clear all objects that are considered baked within this [LightmapGIData]. */
        clear_users(): void
        _set_probe_data(data: Dictionary): void
        _get_probe_data(): Dictionary
        set_light_texture(light_texture: TextureLayered): void
        get_light_texture(): TextureLayered
        _set_light_textures_data(data: Array): void
        _get_light_textures_data(): Array
        /** The lightmap atlas textures generated by the lightmapper. */
        lightmap_textures: Array
        uses_spherical_harmonics: boolean
        user_data: Array
        probe_data: Dictionary
        /** The lightmap atlas texture generated by the lightmapper.
         *  [i]Deprecated.[/i] The lightmap atlas can now have multiple textures. See [member lightmap_textures].
         */
        light_texture: TextureLayered
        light_textures: Array
    }
    class LightmapGIEditorPlugin extends EditorPlugin {
        _bake(): void
    }
    class LightmapGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI]. */
    class LightmapProbe extends Node3D {
    }
    class LightmapProbeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract class extended by lightmappers, for use in [LightmapGI]. */
    class Lightmapper extends RefCounted {
    }
    /** The built-in GPU-based lightmapper for use with [LightmapGI]. */
    class LightmapperRD extends Lightmapper {
    }
    namespace Line2D {
        enum LineJointMode {
            LINE_JOINT_SHARP = 0,
            LINE_JOINT_BEVEL = 1,
            LINE_JOINT_ROUND = 2,
        }
        enum LineCapMode {
            LINE_CAP_NONE = 0,
            LINE_CAP_BOX = 1,
            LINE_CAP_ROUND = 2,
        }
        enum LineTextureMode {
            LINE_TEXTURE_NONE = 0,
            LINE_TEXTURE_TILE = 1,
            LINE_TEXTURE_STRETCH = 2,
        }
    }
    /** A 2D polyline that can optionally be textured. */
    class Line2D extends Node2D {
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        /** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
        set_point_position(index: number /*i64*/, position: Vector2): void
        /** Returns the position of the point at index [param index]. */
        get_point_position(index: number /*i64*/): Vector2
        /** Returns the number of points in the polyline. */
        get_point_count(): number /*i64*/
        /** Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].
         */
        add_point(position: Vector2, index: number /*i64*/ = -1): void
        /** Removes the point at index [param index] from the polyline. */
        remove_point(index: number /*i64*/): void
        /** Removes all points from the polyline, making it empty. */
        clear_points(): void
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_width(width: number /*f64*/): void
        get_width(): number /*f64*/
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
        set_sharp_limit(limit: number /*f64*/): void
        get_sharp_limit(): number /*f64*/
        set_round_precision(precision: number /*i64*/): void
        get_round_precision(): number /*i64*/
        set_antialiased(antialiased: boolean): void
        get_antialiased(): boolean
        /** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
        points: PackedVector2Array
        /** If [code]true[/code] and the polyline has more than 2 points, the last point and the first one will be connected by a segment.
         *  [b]Note:[/b] The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.
         *  [b]Note:[/b] The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.
         */
        closed: boolean
        /** The polyline's width. */
        width: number /*f64*/
        /** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. */
        width_curve: Curve
        /** The color of the polyline. Will not be used if a gradient is set. */
        default_color: Color
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        gradient: Gradient
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        texture: Texture2D
        /** The style to render the [member texture] of the polyline. Use [enum LineTextureMode] constants. */
        texture_mode: number /*i64*/
        /** The style of the connections between segments of the polyline. Use [enum LineJointMode] constants. */
        joint_mode: number /*i64*/
        /** The style of the beginning of the polyline, if [member closed] is [code]false[/code]. Use [enum LineCapMode] constants. */
        begin_cap_mode: number /*i64*/
        /** The style of the end of the polyline, if [member closed] is [code]false[/code]. Use [enum LineCapMode] constants. */
        end_cap_mode: number /*i64*/
        /** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
        sharp_limit: number /*f64*/
        /** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
        round_precision: number /*i64*/
        /** If [code]true[/code], the polyline's border will be anti-aliased.
         *  [b]Note:[/b] [Line2D] is not accelerated by batching when being anti-aliased.
         */
        antialiased: boolean
    }
    class Line2DEditor extends AbstractPolygon2DEditor {
    }
    class Line2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    namespace LineEdit {
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
        enum VirtualKeyboardType {
            KEYBOARD_TYPE_DEFAULT = 0,
            KEYBOARD_TYPE_MULTILINE = 1,
            KEYBOARD_TYPE_NUMBER = 2,
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            KEYBOARD_TYPE_PHONE = 4,
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            KEYBOARD_TYPE_PASSWORD = 6,
            KEYBOARD_TYPE_URL = 7,
        }
    }
    /** An input field for single-line text. */
    class LineEdit extends Control {
        _text_changed(): void
        set_horizontal_alignment(alignment: HorizontalAlignment): void
        get_horizontal_alignment(): HorizontalAlignment
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.
         *  
         */
        select(from: number /*i64*/ = 0, to: number /*i64*/ = -1): void
        /** Selects the whole [String]. */
        select_all(): void
        /** Clears the current selection. */
        deselect(): void
        /** Returns [code]true[/code] if the user has selected text. */
        has_selection(): boolean
        /** Returns the text inside the selection. */
        get_selected_text(): string
        /** Returns the selection begin column. */
        get_selection_from_column(): number /*i64*/
        /** Returns the selection end column. */
        get_selection_to_column(): number /*i64*/
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
        set_caret_column(position: number /*i64*/): void
        get_caret_column(): number /*i64*/
        /** Returns the scroll offset due to [member caret_column], as a number of characters. */
        get_scroll_offset(): number /*f64*/
        set_expand_to_text_length_enabled(enabled: boolean): void
        is_expand_to_text_length_enabled(): boolean
        set_caret_blink_enabled(enabled: boolean): void
        is_caret_blink_enabled(): boolean
        set_caret_mid_grapheme_enabled(enabled: boolean): void
        is_caret_mid_grapheme_enabled(): boolean
        set_caret_force_displayed(enabled: boolean): void
        is_caret_force_displayed(): boolean
        set_caret_blink_interval(interval: number /*f64*/): void
        get_caret_blink_interval(): number /*f64*/
        set_max_length(chars: number /*i64*/): void
        get_max_length(): number /*i64*/
        /** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
        insert_text_at_caret(text: string): void
        /** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
        delete_char_at_caret(): void
        /** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
        delete_text(from_column: number /*i64*/, to_column: number /*i64*/): void
        set_editable(enabled: boolean): void
        is_editable(): boolean
        set_secret(enabled: boolean): void
        is_secret(): boolean
        set_secret_character(character: string): void
        get_secret_character(): string
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menu_option(option: number /*i64*/): void
        /** Returns the [PopupMenu] of this [LineEdit]. By default, this menu is displayed when right-clicking on the [LineEdit].
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:
         *  
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_menu(): PopupMenu
        /** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
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
         *  [b]Note:[/b] Changing text using this property won't emit the [signal text_changed] signal.
         */
        text: string
        /** Text shown when the [LineEdit] is empty. It is [b]not[/b] the [LineEdit]'s default value (see [member text]). */
        placeholder_text: string
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        alignment: number /*i64*/
        /** Maximum number of characters that can be entered inside the [LineEdit]. If [code]0[/code], there is no limit.
         *  When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting. If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as parameter.
         *  [b]Example:[/b]
         *  
         */
        max_length: number /*i64*/
        /** If [code]false[/code], existing text cannot be modified and new text cannot be added. */
        editable: boolean
        /** If [code]true[/code], the [LineEdit] width will increase to stay longer than the [member text]. It will [b]not[/b] compress if the [member text] is shortened. */
        expand_to_text_length: boolean
        /** If [code]true[/code], the context menu will appear when right-clicked. */
        context_menu_enabled: boolean
        /** If [code]true[/code], the native virtual keyboard is shown when focused on platforms that support it. */
        virtual_keyboard_enabled: boolean
        /** Specifies the type of virtual keyboard to show. */
        virtual_keyboard_type: number /*i64*/
        /** If [code]true[/code], the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
        clear_button_enabled: boolean
        /** If [code]false[/code], using shortcuts will be disabled. */
        shortcut_keys_enabled: boolean
        /** If [code]false[/code], using middle mouse button to paste clipboard will be disabled.
         *  [b]Note:[/b] This method is only implemented on Linux.
         */
        middle_mouse_paste_enabled: boolean
        /** If [code]false[/code], it's impossible to select the text using mouse nor keyboard. */
        selecting_enabled: boolean
        /** If [code]true[/code], the selected text will be deselected when focus is lost. */
        deselect_on_focus_loss_enabled: boolean
        /** If [code]true[/code], allow drag and drop of selected text. */
        drag_and_drop_selection_enabled: boolean
        /** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to [code]false[/code]. */
        right_icon: Texture2D
        /** If [code]true[/code], the [LineEdit] doesn't display decoration. */
        flat: boolean
        /** If [code]true[/code], control characters are displayed. */
        draw_control_chars: boolean
        /** If [code]true[/code], the [LineEdit] will select the whole text when it gains focus. */
        select_all_on_focus: boolean
        /** If [code]true[/code], makes the caret blink. */
        caret_blink: boolean
        /** The interval at which the caret blinks (in seconds). */
        caret_blink_interval: number /*f64*/
        /** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
        caret_column: number /*i64*/
        /** If [code]true[/code], the [LineEdit] will always show the caret, even if focus is lost. */
        caret_force_displayed: boolean
        /** Allow moving caret, selecting and removing the individual composite character components.
         *  [b]Note:[/b] [kbd]Backspace[/kbd] is always removing individual composite character components.
         */
        caret_mid_grapheme: boolean
        /** If [code]true[/code], every character is replaced with the secret character (see [member secret_character]). */
        secret: boolean
        /** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
        secret_character: string
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        language: string
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
        readonly text_changed: Signal
        readonly text_change_rejected: Signal
        readonly text_submitted: Signal
    }
    namespace LinkButton {
        enum UnderlineMode {
            UNDERLINE_MODE_ALWAYS = 0,
            UNDERLINE_MODE_ON_HOVER = 1,
            UNDERLINE_MODE_NEVER = 2,
        }
    }
    /** A button that represents a link. */
    class LinkButton extends BaseButton {
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
        text: string
        /** The underline mode to use for the text. See [enum LinkButton.UnderlineMode] for the available modes. */
        underline: number /*i64*/
        /** The [url=https://en.wikipedia.org/wiki/Uniform_Resource_Identifier]URI[/url] for this [LinkButton]. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [method OS.shell_open]). HTTP and HTTPS URLs open the default web browser.
         *  [b]Examples:[/b]
         *  
         */
        uri: string
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
        /** Set BiDi algorithm override for the structured text. */
        structured_text_bidi_override: number /*i64*/
        /** Set additional options for BiDi override. */
        structured_text_bidi_override_options: Array
    }
    class LocalizationEditor extends VBoxContainer {
        update_translations(): void
        readonly localization_changed: Signal
    }
    /** Abstract base class for the game's main loop. */
    class MainLoop extends Object {
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        static readonly NOTIFICATION_WM_ABOUT = 2011
        static readonly NOTIFICATION_CRASH = 2012
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        /* gdvirtual */ _initialize(): void
        /* gdvirtual */ _physics_process(delta: number /*f64*/): boolean
        /* gdvirtual */ _process(delta: number /*f64*/): boolean
        /* gdvirtual */ _finalize(): void
        readonly on_request_permissions_result: Signal
    }
    /** A container that keeps a margin around its child controls. */
    class MarginContainer extends Container {
    }
    /** Generic 2D position hint for editing. */
    class Marker2D extends Node2D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        /** Size of the gizmo cross that appears in the editor. */
        gizmo_extents: number /*f64*/
    }
    /** Generic 3D position hint for editing. */
    class Marker3D extends Node3D {
        set_gizmo_extents(extents: number /*f64*/): void
        get_gizmo_extents(): number /*f64*/
        /** Size of the gizmo cross that appears in the editor. */
        gizmo_extents: number /*f64*/
    }
    class Marker3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Virtual base class for applying visual properties to an object, such as color and roughness. */
    class Material extends Resource {
        static readonly RENDER_PRIORITY_MAX = 127
        static readonly RENDER_PRIORITY_MIN = -128
        /* gdvirtual */ _get_shader_rid(): RID
        /* gdvirtual */ _get_shader_mode(): Shader.Mode
        /* gdvirtual */ _can_do_next_pass(): boolean
        /* gdvirtual */ _can_use_render_priority(): boolean
        set_next_pass(next_pass: Material): void
        get_next_pass(): Material
        set_render_priority(priority: number /*i64*/): void
        get_render_priority(): number /*i64*/
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. */
        inspect_native_shader_code(): void
        /** Creates a placeholder version of this resource ([PlaceholderMaterial]). */
        create_placeholder(): Resource
        /** Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [member render_priority] [code]1[/code] will render before all objects with [member render_priority] [code]0[/code]).
         *  [b]Note:[/b] This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".
         *  [b]Note:[/b] This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.
         */
        render_priority: number /*i64*/
        /** Sets the [Material] to be used for the next pass. This renders the object again using a different material.
         *  [b]Note:[/b] [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.
         *  [b]Note:[/b] This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".
         */
        next_pass: Material
    }
    class MaterialEditorPlugin extends EditorPlugin {
    }
    /** A horizontal menu bar that creates a [MenuButton] for each [PopupMenu] child. */
    class MenuBar extends Control {
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        /** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        set_prefer_global_menu(enabled: boolean): void
        is_prefer_global_menu(): boolean
        /** Returns [code]true[/code], if system global menu is supported and used by this [MenuBar]. */
        is_native_menu(): boolean
        /** Returns number of menu items. */
        get_menu_count(): number /*i64*/
        set_text_direction(direction: Control.TextDirection): void
        get_text_direction(): Control.TextDirection
        set_language(language: string): void
        get_language(): string
        set_flat(enabled: boolean): void
        is_flat(): boolean
        set_start_index(enabled: number /*i64*/): void
        get_start_index(): number /*i64*/
        /** Sets menu item title. */
        set_menu_title(menu: number /*i64*/, title: string): void
        /** Returns menu item title. */
        get_menu_title(menu: number /*i64*/): string
        /** Sets menu item tooltip. */
        set_menu_tooltip(menu: number /*i64*/, tooltip: string): void
        /** Returns menu item tooltip. */
        get_menu_tooltip(menu: number /*i64*/): string
        /** If [code]true[/code], menu item is disabled. */
        set_menu_disabled(menu: number /*i64*/, disabled: boolean): void
        /** Returns [code]true[/code], if menu item is disabled. */
        is_menu_disabled(menu: number /*i64*/): boolean
        /** If [code]true[/code], menu item is hidden. */
        set_menu_hidden(menu: number /*i64*/, hidden: boolean): void
        /** Returns [code]true[/code], if menu item is hidden. */
        is_menu_hidden(menu: number /*i64*/): boolean
        /** Returns [PopupMenu] associated with menu item. */
        get_menu_popup(menu: number /*i64*/): PopupMenu
        /** Flat [MenuBar] don't display item decoration. */
        flat: boolean
        /** Position in the global menu to insert first [MenuBar] item at. */
        start_index: number /*i64*/
        /** If [code]true[/code], when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
        switch_on_hover: boolean
        /** If [code]true[/code], [MenuBar] will use system global menu when supported. */
        prefer_global_menu: boolean
        /** Base text writing direction. */
        text_direction: number /*i64*/
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        language: string
    }
    /** A button that brings up a [PopupMenu] when clicked. */
    class MenuButton extends Button {
        /** Returns the [PopupMenu] contained in this button.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_popup(): PopupMenu
        /** Adjusts popup position and sizing for the [MenuButton], then shows the [PopupMenu]. Prefer this over using [code]get_popup().popup()[/code]. */
        show_popup(): void
        set_switch_on_hover(enable: boolean): void
        is_switch_on_hover(): boolean
        /** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        /** If [code]true[/code], when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
        switch_on_hover: boolean
        /** The number of items currently in the list. */
        item_count: any /*Items,popup/item_*/
        readonly about_to_popup: Signal
    }
    namespace Mesh {
        enum PrimitiveType {
            PRIMITIVE_POINTS = 0,
            PRIMITIVE_LINES = 1,
            PRIMITIVE_LINE_STRIP = 2,
            PRIMITIVE_TRIANGLES = 3,
            PRIMITIVE_TRIANGLE_STRIP = 4,
        }
        enum ArrayType {
            ARRAY_VERTEX = 0,
            ARRAY_NORMAL = 1,
            ARRAY_TANGENT = 2,
            ARRAY_COLOR = 3,
            ARRAY_TEX_UV = 4,
            ARRAY_TEX_UV2 = 5,
            ARRAY_CUSTOM0 = 6,
            ARRAY_CUSTOM1 = 7,
            ARRAY_CUSTOM2 = 8,
            ARRAY_CUSTOM3 = 9,
            ARRAY_BONES = 10,
            ARRAY_WEIGHTS = 11,
            ARRAY_INDEX = 12,
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            ARRAY_CUSTOM_RG_HALF = 2,
            ARRAY_CUSTOM_RGBA_HALF = 3,
            ARRAY_CUSTOM_R_FLOAT = 4,
            ARRAY_CUSTOM_RG_FLOAT = 5,
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            ARRAY_FORMAT_VERTEX = 1,
            ARRAY_FORMAT_NORMAL = 2,
            ARRAY_FORMAT_TANGENT = 4,
            ARRAY_FORMAT_COLOR = 8,
            ARRAY_FORMAT_TEX_UV = 16,
            ARRAY_FORMAT_TEX_UV2 = 32,
            ARRAY_FORMAT_CUSTOM0 = 64,
            ARRAY_FORMAT_CUSTOM1 = 128,
            ARRAY_FORMAT_CUSTOM2 = 256,
            ARRAY_FORMAT_CUSTOM3 = 512,
            ARRAY_FORMAT_BONES = 1024,
            ARRAY_FORMAT_WEIGHTS = 2048,
            ARRAY_FORMAT_INDEX = 4096,
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
        }
        enum BlendShapeMode {
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
    }
    /** A [Resource] that contains vertex array-based geometry. */
    class Mesh extends Resource {
        /* gdvirtual */ _get_surface_count(): number /*i64*/
        /* gdvirtual */ _surface_get_array_len(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_array_index_len(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_arrays(index: number /*i64*/): Array
        /* gdvirtual */ _surface_get_blend_shape_arrays(index: number /*i64*/): Array
        /* gdvirtual */ _surface_get_lods(index: number /*i64*/): Dictionary
        /* gdvirtual */ _surface_get_format(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_get_primitive_type(index: number /*i64*/): number /*i64*/
        /* gdvirtual */ _surface_set_material(index: number /*i64*/, material: Material): void
        /* gdvirtual */ _surface_get_material(index: number /*i64*/): Material
        /* gdvirtual */ _get_blend_shape_count(): number /*i64*/
        /* gdvirtual */ _get_blend_shape_name(index: number /*i64*/): StringName
        /* gdvirtual */ _set_blend_shape_name(index: number /*i64*/, name: StringName): void
        /* gdvirtual */ _get_aabb(): AABB
        set_lightmap_size_hint(size: Vector2i): void
        get_lightmap_size_hint(): Vector2i
        /** Returns the smallest [AABB] enclosing this mesh in local space. Not affected by [code]custom_aabb[/code].
         *  [b]Note:[/b] This is only implemented for [ArrayMesh] and [PrimitiveMesh].
         */
        get_aabb(): AABB
        /** Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle. */
        get_faces(): PackedVector3Array
        /** Returns the number of surfaces that the [Mesh] holds. This is equivalent to [method MeshInstance3D.get_surface_override_material_count]. */
        get_surface_count(): number /*i64*/
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
        surface_get_arrays(surf_idx: number /*i64*/): Array
        /** Returns the blend shape arrays for the requested surface. */
        surface_get_blend_shape_arrays(surf_idx: number /*i64*/): Array
        /** Sets a [Material] for a given surface. Surface will be rendered using this material.
         *  [b]Note:[/b] This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.
         */
        surface_set_material(surf_idx: number /*i64*/, material: Material): void
        /** Returns a [Material] in a given surface. Surface is rendered using this material.
         *  [b]Note:[/b] This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.
         */
        surface_get_material(surf_idx: number /*i64*/): Material
        /** Creates a placeholder version of this resource ([PlaceholderMesh]). */
        create_placeholder(): Resource
        /** Calculate a [ConcavePolygonShape3D] from the mesh. */
        create_trimesh_shape(): ConcavePolygonShape3D
        /** Calculate a [ConvexPolygonShape3D] from the mesh.
         *  If [param clean] is [code]true[/code] (default), duplicate and interior vertices are removed automatically. You can set it to [code]false[/code] to make the process faster if not needed.
         *  If [param simplify] is [code]true[/code], the geometry can be further simplified to reduce the number of vertices. Disabled by default.
         */
        create_convex_shape(clean: boolean = true, simplify: boolean = false): ConvexPolygonShape3D
        /** Calculate an outline mesh at a defined offset (margin) from the original mesh.
         *  [b]Note:[/b] This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).
         */
        create_outline(margin: number /*f64*/): Mesh
        /** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
        generate_triangle_mesh(): TriangleMesh
        /** Sets a hint to be used for lightmap resolution. */
        lightmap_size_hint: Vector2i
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
            CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1,
        }
    }
    /** Parameters to be used with a [Mesh] convex decomposition operation. */
    class MeshConvexDecompositionSettings extends RefCounted {
        set_max_concavity(max_concavity: number /*f64*/): void
        get_max_concavity(): number /*f64*/
        set_symmetry_planes_clipping_bias(symmetry_planes_clipping_bias: number /*f64*/): void
        get_symmetry_planes_clipping_bias(): number /*f64*/
        set_revolution_axes_clipping_bias(revolution_axes_clipping_bias: number /*f64*/): void
        get_revolution_axes_clipping_bias(): number /*f64*/
        set_min_volume_per_convex_hull(min_volume_per_convex_hull: number /*f64*/): void
        get_min_volume_per_convex_hull(): number /*f64*/
        set_resolution(min_volume_per_convex_hull: number /*i64*/): void
        get_resolution(): number /*i64*/
        set_max_num_vertices_per_convex_hull(max_num_vertices_per_convex_hull: number /*i64*/): void
        get_max_num_vertices_per_convex_hull(): number /*i64*/
        set_plane_downsampling(plane_downsampling: number /*i64*/): void
        get_plane_downsampling(): number /*i64*/
        set_convex_hull_downsampling(convex_hull_downsampling: number /*i64*/): void
        get_convex_hull_downsampling(): number /*i64*/
        set_normalize_mesh(normalize_mesh: boolean): void
        get_normalize_mesh(): boolean
        set_mode(mode: MeshConvexDecompositionSettings.Mode): void
        get_mode(): MeshConvexDecompositionSettings.Mode
        set_convex_hull_approximation(convex_hull_approximation: boolean): void
        get_convex_hull_approximation(): boolean
        set_max_convex_hulls(max_convex_hulls: number /*i64*/): void
        get_max_convex_hulls(): number /*i64*/
        set_project_hull_vertices(project_hull_vertices: boolean): void
        get_project_hull_vertices(): boolean
        /** Maximum concavity. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
        max_concavity: number /*f64*/
        /** Controls the bias toward clipping along symmetry planes. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
        symmetry_planes_clipping_bias: number /*f64*/
        /** Controls the bias toward clipping along revolution axes. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
        revolution_axes_clipping_bias: number /*f64*/
        /** Controls the adaptive sampling of the generated convex-hulls. Ranges from [code]0.0[/code] to [code]0.01[/code]. */
        min_volume_per_convex_hull: number /*f64*/
        /** Maximum number of voxels generated during the voxelization stage. */
        resolution: number /*i64*/
        /** Controls the maximum number of triangles per convex-hull. Ranges from [code]4[/code] to [code]1024[/code]. */
        max_num_vertices_per_convex_hull: number /*i64*/
        /** Controls the granularity of the search for the "best" clipping plane. Ranges from [code]1[/code] to [code]16[/code]. */
        plane_downsampling: number /*i64*/
        /** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from [code]1[/code] to [code]16[/code]. */
        convex_hull_downsampling: number /*i64*/
        /** If enabled normalizes the mesh before applying the convex decomposition. */
        normalize_mesh: boolean
        /** Mode for the approximate convex decomposition. */
        mode: number /*i64*/
        /** If enabled uses approximation for computing convex hulls. */
        convex_hull_approximation: boolean
        /** The maximum number of convex hulls to produce from the merge operation. */
        max_convex_hulls: number /*i64*/
        /** If enabled projects output convex hull vertices onto original source mesh to increase floating point accuracy of the results. */
        project_hull_vertices: boolean
    }
    /** Helper tool to access and edit [Mesh] data. */
    class MeshDataTool extends RefCounted {
        /** Clears all data currently in MeshDataTool. */
        clear(): void
        /** Uses specified surface of given [Mesh] to populate data for MeshDataTool.
         *  Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].
         */
        create_from_surface(mesh: ArrayMesh, surface: number /*i64*/): GodotError
        /** Adds a new surface to specified [Mesh] with edited data. */
        commit_to_surface(mesh: ArrayMesh, compression_flags: number /*i64*/ = 0): GodotError
        /** Returns the [Mesh]'s format. Format is an integer made up of [Mesh] format flags combined together. For example, a mesh containing both vertices and normals would return a format of [code]3[/code] because [constant Mesh.ARRAY_FORMAT_VERTEX] is [code]1[/code] and [constant Mesh.ARRAY_FORMAT_NORMAL] is [code]2[/code].
         *  See [enum Mesh.ArrayFormat] for a list of format flags.
         */
        get_format(): number /*i64*/
        /** Returns the total number of vertices in [Mesh]. */
        get_vertex_count(): number /*i64*/
        /** Returns the number of edges in this [Mesh]. */
        get_edge_count(): number /*i64*/
        /** Returns the number of faces in this [Mesh]. */
        get_face_count(): number /*i64*/
        /** Sets the position of the given vertex. */
        set_vertex(idx: number /*i64*/, vertex: Vector3): void
        /** Returns the position of the given vertex. */
        get_vertex(idx: number /*i64*/): Vector3
        /** Sets the normal of the given vertex. */
        set_vertex_normal(idx: number /*i64*/, normal: Vector3): void
        /** Returns the normal of the given vertex. */
        get_vertex_normal(idx: number /*i64*/): Vector3
        /** Sets the tangent of the given vertex. */
        set_vertex_tangent(idx: number /*i64*/, tangent: Plane): void
        /** Returns the tangent of the given vertex. */
        get_vertex_tangent(idx: number /*i64*/): Plane
        /** Sets the UV of the given vertex. */
        set_vertex_uv(idx: number /*i64*/, uv: Vector2): void
        /** Returns the UV of the given vertex. */
        get_vertex_uv(idx: number /*i64*/): Vector2
        /** Sets the UV2 of the given vertex. */
        set_vertex_uv2(idx: number /*i64*/, uv2: Vector2): void
        /** Returns the UV2 of the given vertex. */
        get_vertex_uv2(idx: number /*i64*/): Vector2
        /** Sets the color of the given vertex. */
        set_vertex_color(idx: number /*i64*/, color: Color): void
        /** Returns the color of the given vertex. */
        get_vertex_color(idx: number /*i64*/): Color
        /** Sets the bones of the given vertex. */
        set_vertex_bones(idx: number /*i64*/, bones: PackedInt32Array): void
        /** Returns the bones of the given vertex. */
        get_vertex_bones(idx: number /*i64*/): PackedInt32Array
        /** Sets the bone weights of the given vertex. */
        set_vertex_weights(idx: number /*i64*/, weights: PackedFloat32Array): void
        /** Returns bone weights of the given vertex. */
        get_vertex_weights(idx: number /*i64*/): PackedFloat32Array
        /** Sets the metadata associated with the given vertex. */
        set_vertex_meta(idx: number /*i64*/, meta: any): void
        /** Returns the metadata associated with the given vertex. */
        get_vertex_meta(idx: number /*i64*/): any
        /** Returns an array of edges that share the given vertex. */
        get_vertex_edges(idx: number /*i64*/): PackedInt32Array
        /** Returns an array of faces that share the given vertex. */
        get_vertex_faces(idx: number /*i64*/): PackedInt32Array
        /** Returns index of specified vertex connected to given edge.
         *  Vertex argument can only be 0 or 1 because edges are comprised of two vertices.
         */
        get_edge_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        /** Returns array of faces that touch given edge. */
        get_edge_faces(idx: number /*i64*/): PackedInt32Array
        /** Sets the metadata of the given edge. */
        set_edge_meta(idx: number /*i64*/, meta: any): void
        /** Returns meta information assigned to given edge. */
        get_edge_meta(idx: number /*i64*/): any
        /** Returns the specified vertex index of the given face.
         *  Vertex argument must be either 0, 1, or 2 because faces contain three vertices.
         *  [b]Example:[/b]
         *  
         */
        get_face_vertex(idx: number /*i64*/, vertex: number /*i64*/): number /*i64*/
        /** Returns specified edge associated with given face.
         *  Edge argument must be either 0, 1, or 2 because a face only has three edges.
         */
        get_face_edge(idx: number /*i64*/, edge: number /*i64*/): number /*i64*/
        /** Sets the metadata of the given face. */
        set_face_meta(idx: number /*i64*/, meta: any): void
        /** Returns the metadata associated with the given face. */
        get_face_meta(idx: number /*i64*/): any
        /** Calculates and returns the face normal of the given face. */
        get_face_normal(idx: number /*i64*/): Vector3
        /** Sets the material to be used by newly-constructed [Mesh]. */
        set_material(material: Material): void
        /** Returns the material assigned to the [Mesh]. */
        get_material(): Material
    }
    class MeshEditorPlugin extends EditorPlugin {
    }
    /** Node used for displaying a [Mesh] in 2D. */
    class MeshInstance2D extends Node2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        mesh: Mesh
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as [code]TEXTURE[/code] in CanvasItem shader. */
        texture: Texture2D
        readonly texture_changed: Signal
    }
    /** Node that instances meshes into a scenario. */
    class MeshInstance3D extends GeometryInstance3D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_skeleton_path(skeleton_path: NodePath): void
        get_skeleton_path(): NodePath
        set_skin(skin: Skin): void
        get_skin(): Skin
        /** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
        get_surface_override_material_count(): number /*i64*/
        /** Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].
         *  [b]Note:[/b] This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.
         */
        set_surface_override_material(surface: number /*i64*/, material: Material): void
        /** Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].
         *  [b]Note:[/b] This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.
         */
        get_surface_override_material(surface: number /*i64*/): Material
        /** Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.
         *  Returns [code]null[/code] if no material is active, including when [member mesh] is [code]null[/code].
         */
        get_active_material(surface: number /*i64*/): Material
        /** This helper creates a [StaticBody3D] child node with a [ConcavePolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing. */
        create_trimesh_collision(): void
        /** This helper creates a [StaticBody3D] child node with a [ConvexPolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing.
         *  If [param clean] is [code]true[/code] (default), duplicate and interior vertices are removed automatically. You can set it to [code]false[/code] to make the process faster if not needed.
         *  If [param simplify] is [code]true[/code], the geometry can be further simplified to reduce the number of vertices. Disabled by default.
         */
        create_convex_collision(clean: boolean = true, simplify: boolean = false): void
        /** This helper creates a [StaticBody3D] child node with multiple [ConvexPolygonShape3D] collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional [param settings]. */
        create_multiple_convex_collisions(settings: MeshConvexDecompositionSettings = <any> {} /*compound.type from nil*/): void
        /** Returns the number of blend shapes available. Produces an error if [member mesh] is [code]null[/code]. */
        get_blend_shape_count(): number /*i64*/
        /** Returns the index of the blend shape with the given [param name]. Returns [code]-1[/code] if no blend shape with this name exists, including when [member mesh] is [code]null[/code]. */
        find_blend_shape_by_name(name: StringName): number /*i64*/
        /** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns [code]0.0[/code] and produces an error if [member mesh] is [code]null[/code] or doesn't have a blend shape at that index. */
        get_blend_shape_value(blend_shape_idx: number /*i64*/): number /*f64*/
        /** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is [code]null[/code] or doesn't have a blend shape at that index. */
        set_blend_shape_value(blend_shape_idx: number /*i64*/, value: number /*f64*/): void
        /** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
        create_debug_tangents(): void
        /** The [Mesh] resource for the instance. */
        mesh: Mesh
        /** The [Skin] to be used by this instance. */
        skin: Skin
        /** [NodePath] to the [Skeleton3D] associated with the instance. */
        skeleton: NodePath
    }
    class MeshInstance3DEditor extends Control {
    }
    class MeshInstance3DEditorPlugin extends EditorPlugin {
    }
    class MeshInstance3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Library of meshes. */
    class MeshLibrary extends Resource {
        /** Creates a new item in the library with the given ID.
         *  You can get an unused ID from [method get_last_unused_item_id].
         */
        create_item(id: number /*i64*/): void
        /** Sets the item's name.
         *  This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].
         */
        set_item_name(id: number /*i64*/, name: string): void
        /** Sets the item's mesh. */
        set_item_mesh(id: number /*i64*/, mesh: Mesh): void
        /** Sets the transform to apply to the item's mesh. */
        set_item_mesh_transform(id: number /*i64*/, mesh_transform: Transform3D): void
        /** Sets the item's navigation mesh. */
        set_item_navigation_mesh(id: number /*i64*/, navigation_mesh: NavigationMesh): void
        /** Sets the transform to apply to the item's navigation mesh. */
        set_item_navigation_mesh_transform(id: number /*i64*/, navigation_mesh: Transform3D): void
        /** Sets the item's navigation layers bitmask. */
        set_item_navigation_layers(id: number /*i64*/, navigation_layers: number /*i64*/): void
        /** Sets an item's collision shapes.
         *  The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].
         */
        set_item_shapes(id: number /*i64*/, shapes: Array): void
        /** Sets a texture to use as the item's preview icon in the editor. */
        set_item_preview(id: number /*i64*/, texture: Texture2D): void
        /** Returns the item's name. */
        get_item_name(id: number /*i64*/): string
        /** Returns the item's mesh. */
        get_item_mesh(id: number /*i64*/): Mesh
        /** Returns the transform applied to the item's mesh. */
        get_item_mesh_transform(id: number /*i64*/): Transform3D
        /** Returns the item's navigation mesh. */
        get_item_navigation_mesh(id: number /*i64*/): NavigationMesh
        /** Returns the transform applied to the item's navigation mesh. */
        get_item_navigation_mesh_transform(id: number /*i64*/): Transform3D
        /** Returns the item's navigation layers bitmask. */
        get_item_navigation_layers(id: number /*i64*/): number /*i64*/
        /** Returns an item's collision shapes.
         *  The array consists of each [Shape3D] followed by its [Transform3D].
         */
        get_item_shapes(id: number /*i64*/): Array
        /** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
        get_item_preview(id: number /*i64*/): Texture2D
        /** Removes the item. */
        remove_item(id: number /*i64*/): void
        /** Returns the first item with the given name. */
        find_item_by_name(name: string): number /*i64*/
        /** Clears the library. */
        clear(): void
        /** Returns the list of item IDs in use. */
        get_item_list(): PackedInt32Array
        /** Gets an unused ID for a new item. */
        get_last_unused_item_id(): number /*i64*/
    }
    class MeshLibraryEditor extends Control {
    }
    class MeshLibraryEditorPlugin extends EditorPlugin {
    }
    /** Simple texture that uses a mesh to draw itself. */
    class MeshTexture extends Texture2D {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_image_size(size: Vector2): void
        get_image_size(): Vector2
        set_base_texture(texture: Texture2D): void
        get_base_texture(): Texture2D
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        mesh: Mesh
        /** Sets the base texture that the Mesh will use to draw. */
        base_texture: Texture2D
        /** Sets the size of the image, needed for reference. */
        image_size: Vector2
    }
    /** Interpolates an abstract value and supplies it to a method called over time. */
    class MethodTweener extends Tweener {
        /** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
        set_delay(delay: number /*f64*/): MethodTweener
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        set_trans(trans: Tween.TransitionType): MethodTweener
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        set_ease(ease: Tween.EaseType): MethodTweener
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes. */
    class MissingNode extends Node {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        /** Returns the name of the type this node was originally. */
        original_class: string
        recording_properties: boolean
    }
    /** An internal editor class intended for keeping the data of unrecognized resources. */
    class MissingResource extends Resource {
        set_original_class(name: string): void
        get_original_class(): string
        set_recording_properties(enable: boolean): void
        is_recording_properties(): boolean
        /** Returns the name of the class this resource was originally. */
        original_class: string
        recording_properties: boolean
    }
    /** Generic mobile VR implementation. */
    class MobileVRInterface extends XRInterface {
        set_eye_height(eye_height: number /*f64*/): void
        get_eye_height(): number /*f64*/
        set_iod(iod: number /*f64*/): void
        get_iod(): number /*f64*/
        set_display_width(display_width: number /*f64*/): void
        get_display_width(): number /*f64*/
        set_display_to_lens(display_to_lens: number /*f64*/): void
        get_display_to_lens(): number /*f64*/
        set_oversample(oversample: number /*f64*/): void
        get_oversample(): number /*f64*/
        set_k1(k: number /*f64*/): void
        get_k1(): number /*f64*/
        set_k2(k: number /*f64*/): void
        get_k2(): number /*f64*/
        /** The height at which the camera is placed in relation to the ground (i.e. [XROrigin3D] node). */
        eye_height: number /*f64*/
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        iod: number /*f64*/
        /** The width of the display in centimeters. */
        display_width: number /*f64*/
        /** The distance between the display and the lenses inside of the device in centimeters. */
        display_to_lens: number /*f64*/
        /** The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance. */
        oversample: number /*f64*/
        /** The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect. */
        k1: number /*f64*/
        /** The k2 lens factor, see k1. */
        k2: number /*f64*/
    }
    /** Abstract class for non-real-time video recording encoders. */
    class MovieWriter extends Object {
        /* gdvirtual */ _get_audio_mix_rate(): number /*i64*/
        /* gdvirtual */ _get_audio_speaker_mode(): AudioServer.SpeakerMode
        /* gdvirtual */ _handles_file(path: string): boolean
        /* gdvirtual */ _write_begin(movie_size: Vector2i, fps: number /*i64*/, base_path: string): GodotError
        /* gdvirtual */ _write_frame(frame_image: Image, audio_frame_block: number /*i64*/): GodotError
        /* gdvirtual */ _write_end(): void
        /** Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [method _handles_file].
         *  [b]Note:[/b] [method add_writer] must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.
         */
        static add_writer(writer: MovieWriter): void
    }
    class MovieWriterMJPEG extends MovieWriter {
    }
    class MovieWriterPNGWAV extends MovieWriter {
    }
    namespace MultiMesh {
        enum TransformFormat {
            TRANSFORM_2D = 0,
            TRANSFORM_3D = 1,
        }
    }
    /** Provides high-performance drawing of a mesh multiple times using GPU instancing. */
    class MultiMesh extends Resource {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_colors(enable: boolean): void
        is_using_colors(): boolean
        set_use_custom_data(enable: boolean): void
        is_using_custom_data(): boolean
        set_transform_format(format: MultiMesh.TransformFormat): void
        get_transform_format(): MultiMesh.TransformFormat
        set_instance_count(count: number /*i64*/): void
        get_instance_count(): number /*i64*/
        set_visible_instance_count(count: number /*i64*/): void
        get_visible_instance_count(): number /*i64*/
        /** Sets the [Transform3D] for a specific instance. */
        set_instance_transform(instance: number /*i64*/, transform: Transform3D): void
        /** Sets the [Transform2D] for a specific instance. */
        set_instance_transform_2d(instance: number /*i64*/, transform: Transform2D): void
        /** Returns the [Transform3D] of a specific instance. */
        get_instance_transform(instance: number /*i64*/): Transform3D
        /** Returns the [Transform2D] of a specific instance. */
        get_instance_transform_2d(instance: number /*i64*/): Transform2D
        /** Sets the color of a specific instance by [i]multiplying[/i] the mesh's existing vertex colors. This allows for different color tinting per instance.
         *  For the color to take effect, ensure that [member use_colors] is [code]true[/code] on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is [code]true[/code] on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white ([code]Color(1, 1, 1)[/code]).
         */
        set_instance_color(instance: number /*i64*/, color: Color): void
        /** Gets a specific instance's color multiplier. */
        get_instance_color(instance: number /*i64*/): Color
        /** Sets custom data for a specific instance. Although [Color] is used, it is just a container for 4 floating point numbers.
         *  For the custom data to be used, ensure that [member use_custom_data] is [code]true[/code].
         *  This custom instance data has to be manually accessed in your custom shader using [code]INSTANCE_CUSTOM[/code].
         */
        set_instance_custom_data(instance: number /*i64*/, custom_data: Color): void
        /** Returns the custom data that has been set for a specific instance. */
        get_instance_custom_data(instance: number /*i64*/): Color
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
        transform_format: number /*i64*/
        /** If [code]true[/code], the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is [code]0[/code] or less. This means that you need to call this method before setting the instance count, or temporarily reset it to [code]0[/code]. */
        use_colors: boolean
        /** If [code]true[/code], the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is [code]0[/code] or less. This means that you need to call this method before setting the instance count, or temporarily reset it to [code]0[/code]. */
        use_custom_data: boolean
        /** Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.
         *  By default, all instances are drawn but you can limit this with [member visible_instance_count].
         */
        instance_count: number /*i64*/
        /** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
        visible_instance_count: number /*i64*/
        /** [Mesh] resource to be instanced.
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].
         */
        mesh: Mesh
        buffer: PackedFloat32Array
        /** See [method set_instance_transform]. */
        transform_array: PackedVector3Array
        /** See [method set_instance_transform_2d]. */
        transform_2d_array: PackedVector2Array
        /** See [method set_instance_color]. */
        color_array: PackedColorArray
        /** See [method set_instance_custom_data]. */
        custom_data_array: PackedColorArray
    }
    class MultiMeshEditor extends Control {
    }
    class MultiMeshEditorPlugin extends EditorPlugin {
    }
    /** Node that instances a [MultiMesh] in 2D. */
    class MultiMeshInstance2D extends Node2D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        multimesh: MultiMesh
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as [code]TEXTURE[/code] in CanvasItem shader. */
        texture: Texture2D
        readonly texture_changed: Signal
    }
    /** Node that instances a [MultiMesh]. */
    class MultiMeshInstance3D extends GeometryInstance3D {
        set_multimesh(multimesh: MultiMesh): void
        get_multimesh(): MultiMesh
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        multimesh: MultiMesh
    }
    namespace MultiplayerAPI {
        enum RPCMode {
            RPC_MODE_DISABLED = 0,
            RPC_MODE_ANY_PEER = 1,
            RPC_MODE_AUTHORITY = 2,
        }
    }
    /** High-level multiplayer API interface. */
    class MultiplayerAPI extends RefCounted {
        /** Returns [code]true[/code] if there is a [member multiplayer_peer] set. */
        has_multiplayer_peer(): boolean
        get_multiplayer_peer(): MultiplayerPeer
        set_multiplayer_peer(peer: MultiplayerPeer): void
        /** Returns the unique peer ID of this MultiplayerAPI's [member multiplayer_peer]. */
        get_unique_id(): number /*i64*/
        /** Returns [code]true[/code] if this MultiplayerAPI's [member multiplayer_peer] is valid and in server mode (listening for connections). */
        is_server(): boolean
        /** Returns the sender's peer ID for the RPC currently being executed.
         *  [b]Note:[/b] If not inside an RPC this method will return 0.
         */
        get_remote_sender_id(): number /*i64*/
        /** Method used for polling the MultiplayerAPI. You only need to worry about this if you set [member SceneTree.multiplayer_poll] to [code]false[/code]. By default, [SceneTree] will poll its MultiplayerAPI(s) for you.
         *  [b]Note:[/b] This method results in RPCs being called, so they will be executed in the same context of this function (e.g. [code]_process[/code], [code]physics[/code], [Thread]).
         */
        poll(): GodotError
        /** Sends an RPC to the target [param peer]. The given [param method] will be called on the remote [param object] with the provided [param arguments]. The RPC may also be called locally depending on the implementation and RPC configuration. See [method Node.rpc] and [method Node.rpc_config].
         *  [b]Note:[/b] Prefer using [method Node.rpc], [method Node.rpc_id], or [code]my_method.rpc(peer, arg1, arg2, ...)[/code] (in GDScript), since they are faster. This method is mostly useful in conjunction with [MultiplayerAPIExtension] when augmenting or replacing the multiplayer capabilities.
         */
        rpc(peer: number /*i64*/, object: Object, method: StringName, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        /** Notifies the MultiplayerAPI of a new [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing [code]null[/code] and a valid [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.
         *  [b]Note:[/b] This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].
         */
        object_configuration_add(object: Object, configuration: any): GodotError
        /** Notifies the MultiplayerAPI to remove a [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing [code]null[/code] and an empty [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.
         *  [b]Note:[/b] This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].
         */
        object_configuration_remove(object: Object, configuration: any): GodotError
        /** Returns the peer IDs of all connected peers of this MultiplayerAPI's [member multiplayer_peer]. */
        get_peers(): PackedInt32Array
        /** Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by [SceneTree] when the engine starts. */
        static set_default_interface(interface_name: StringName): void
        /** Returns the default MultiplayerAPI implementation class name. This is usually [code]"SceneMultiplayer"[/code] when [SceneMultiplayer] is available. See [method set_default_interface]. */
        static get_default_interface(): StringName
        /** Returns a new instance of the default MultiplayerAPI. */
        static create_default_interface(): MultiplayerAPI
        /** The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with [method is_server]) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals. */
        multiplayer_peer: MultiplayerPeer
        readonly peer_connected: Signal
        readonly peer_disconnected: Signal
        readonly connected_to_server: Signal
        readonly connection_failed: Signal
        readonly server_disconnected: Signal
    }
    /** Base class used for extending the [MultiplayerAPI]. */
    class MultiplayerAPIExtension extends MultiplayerAPI {
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _set_multiplayer_peer(multiplayer_peer: MultiplayerPeer): void
        /* gdvirtual */ _get_multiplayer_peer(): MultiplayerPeer
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        /* gdvirtual */ _get_peer_ids(): PackedInt32Array
        /* gdvirtual */ _rpc(peer: number /*i64*/, object: Object, method: StringName, args: Array): GodotError
        /* gdvirtual */ _get_remote_sender_id(): number /*i64*/
        /* gdvirtual */ _object_configuration_add(object: Object, configuration: any): GodotError
        /* gdvirtual */ _object_configuration_remove(object: Object, configuration: any): GodotError
    }
    class MultiplayerEditorDebugger extends EditorDebuggerPlugin {
        readonly open_request: Signal
    }
    class MultiplayerEditorPlugin extends EditorPlugin {
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            CONNECTION_DISCONNECTED = 0,
            CONNECTION_CONNECTING = 1,
            CONNECTION_CONNECTED = 2,
        }
        enum TransferMode {
            TRANSFER_MODE_UNRELIABLE = 0,
            TRANSFER_MODE_UNRELIABLE_ORDERED = 1,
            TRANSFER_MODE_RELIABLE = 2,
        }
    }
    /** Abstract class for specialized [PacketPeer]s used by the [MultiplayerAPI]. */
    class MultiplayerPeer extends PacketPeer {
        static readonly TARGET_PEER_BROADCAST = 0
        static readonly TARGET_PEER_SERVER = 1
        set_transfer_channel(channel: number /*i64*/): void
        get_transfer_channel(): number /*i64*/
        set_transfer_mode(mode: MultiplayerPeer.TransferMode): void
        get_transfer_mode(): MultiplayerPeer.TransferMode
        /** Sets the peer to which packets will be sent.
         *  The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].
         */
        set_target_peer(id: number /*i64*/): void
        /** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_peer(): number /*i64*/
        /** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
        get_packet_channel(): number /*i64*/
        /** Returns the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
        get_packet_mode(): MultiplayerPeer.TransferMode
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        /** Disconnects the given [param peer] from this host. If [param force] is [code]true[/code] the [signal peer_disconnected] signal will not be emitted for this peer. */
        disconnect_peer(peer: number /*i64*/, force: boolean = false): void
        /** Returns the current state of the connection. See [enum ConnectionStatus]. */
        get_connection_status(): MultiplayerPeer.ConnectionStatus
        /** Returns the ID of this [MultiplayerPeer]. */
        get_unique_id(): number /*i64*/
        /** Returns a randomly generated integer that can be used as a network unique ID. */
        generate_unique_id(): number /*i64*/
        set_refuse_new_connections(enable: boolean): void
        is_refusing_new_connections(): boolean
        /** Returns true if the server can act as a relay in the current configuration (i.e. if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them). */
        is_server_relay_supported(): boolean
        /** If [code]true[/code], this [MultiplayerPeer] refuses new connections. */
        refuse_new_connections: boolean
        /** The manner in which to send packets to the target peer. See [enum TransferMode], and the [method set_target_peer] method. */
        transfer_mode: number /*i64*/
        /** The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send [b]different and independent[/b] state updates is a common way to optimize network usage and decrease latency in fast-paced games.
         *  [b]Note:[/b] The default channel ([code]0[/code]) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.
         */
        transfer_channel: number /*i64*/
        readonly peer_connected: Signal
        readonly peer_disconnected: Signal
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension. */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
        /* gdvirtual */ _get_packet_script(): PackedByteArray
        /* gdvirtual */ _put_packet_script(p_buffer: PackedByteArray): GodotError
        /* gdvirtual */ _get_packet_channel(): number /*i64*/
        /* gdvirtual */ _get_packet_mode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _set_transfer_channel(p_channel: number /*i64*/): void
        /* gdvirtual */ _get_transfer_channel(): number /*i64*/
        /* gdvirtual */ _set_transfer_mode(p_mode: MultiplayerPeer.TransferMode): void
        /* gdvirtual */ _get_transfer_mode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _set_target_peer(p_peer: number /*i64*/): void
        /* gdvirtual */ _get_packet_peer(): number /*i64*/
        /* gdvirtual */ _is_server(): boolean
        /* gdvirtual */ _poll(): void
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _disconnect_peer(p_peer: number /*i64*/, p_force: boolean): void
        /* gdvirtual */ _get_unique_id(): number /*i64*/
        /* gdvirtual */ _set_refuse_new_connections(p_enable: boolean): void
        /* gdvirtual */ _is_refusing_new_connections(): boolean
        /* gdvirtual */ _is_server_relay_supported(): boolean
        /* gdvirtual */ _get_connection_status(): MultiplayerPeer.ConnectionStatus
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers. */
    class MultiplayerSpawner extends Node {
        /** Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [member spawn_path]. */
        add_spawnable_scene(path: string): void
        /** Returns the count of spawnable scene paths. */
        get_spawnable_scene_count(): number /*i64*/
        /** Returns the spawnable scene path by index. */
        get_spawnable_scene(index: number /*i64*/): string
        /** Clears all spawnable scenes. Does not despawn existing instances on remote peers. */
        clear_spawnable_scenes(): void
        _get_spawnable_scenes(): PackedStringArray
        _set_spawnable_scenes(scenes: PackedStringArray): void
        /** Requests a custom spawn, with [param data] passed to [member spawn_function] on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [member spawn_path].
         *  [b]Note:[/b] Spawnable scenes are spawned automatically. [method spawn] is only needed for custom spawns.
         */
        spawn(data: any = <any> {} /*compound.type from nil*/): Node
        get_spawn_path(): NodePath
        set_spawn_path(path: NodePath): void
        get_spawn_limit(): number /*i64*/
        set_spawn_limit(limit: number /*i64*/): void
        get_spawn_function(): Callable
        set_spawn_function(spawn_function: Callable): void
        _spawnable_scenes: PackedStringArray
        /** Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers. */
        spawn_path: NodePath
        /** Maximum nodes that is allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.
         *  When set to [code]0[/code] (the default), there is no limit.
         */
        spawn_limit: number /*i64*/
        /** Method called on all peers when for every custom [method spawn] requested by the authority. Will receive the [code]data[/code] parameter, and should return a [Node] that is not in the scene tree.
         *  [b]Note:[/b] The returned node should [b]not[/b] be added to the scene with [method Node.add_child]. This is done automatically.
         */
        spawn_function: Callable
        readonly despawned: Signal
        readonly spawned: Signal
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            VISIBILITY_PROCESS_IDLE = 0,
            VISIBILITY_PROCESS_PHYSICS = 1,
            VISIBILITY_PROCESS_NONE = 2,
        }
    }
    /** Synchronizes properties from the multiplayer authority to the remote peers. */
    class MultiplayerSynchronizer extends Node {
        set_root_path(path: NodePath): void
        get_root_path(): NodePath
        set_replication_interval(milliseconds: number /*f64*/): void
        get_replication_interval(): number /*f64*/
        set_delta_interval(milliseconds: number /*f64*/): void
        get_delta_interval(): number /*f64*/
        set_replication_config(config: SceneReplicationConfig): void
        get_replication_config(): SceneReplicationConfig
        set_visibility_update_mode(mode: MultiplayerSynchronizer.VisibilityUpdateMode): void
        get_visibility_update_mode(): MultiplayerSynchronizer.VisibilityUpdateMode
        /** Updates the visibility of [param for_peer] according to visibility filters. If [param for_peer] is [code]0[/code] (the default), all peers' visibilties are updated. */
        update_visibility(for_peer: number /*i64*/ = 0): void
        set_visibility_public(visible: boolean): void
        is_visibility_public(): boolean
        /** Adds a peer visibility filter for this synchronizer.
         *  [param filter] should take a peer ID [int] and return a [bool].
         */
        add_visibility_filter(filter: Callable): void
        /** Removes a peer visibility filter from this synchronizer. */
        remove_visibility_filter(filter: Callable): void
        /** Sets the visibility of [param peer] to [param visible]. If [param peer] is [code]0[/code], the value of [member public_visibility] will be updated instead. */
        set_visibility_for(peer: number /*i64*/, visible: boolean): void
        /** Queries the current visibility for peer [param peer]. */
        get_visibility_for(peer: number /*i64*/): boolean
        /** Node path that replicated properties are relative to.
         *  If [member root_path] was spawned by a [MultiplayerSpawner], the node will be also be spawned and despawned based on this synchronizer visibility options.
         */
        root_path: NodePath
        /** Time interval between synchronizations. When set to [code]0.0[/code] (the default), synchronizations happen every network process frame. */
        replication_interval: number /*f64*/
        /** Time interval between delta synchronizations. When set to [code]0.0[/code] (the default), delta synchronizations happen every network process frame. */
        delta_interval: number /*f64*/
        /** Resource containing which properties to synchronize. */
        replication_config: SceneReplicationConfig
        /** Specifies when visibility filters are updated (see [enum VisibilityUpdateMode] for options). */
        visibility_update_mode: number /*i64*/
        /** Whether synchronization should be visible to all peers by default. See [method set_visibility_for] and [method add_visibility_filter] for ways of configuring fine-grained visibility options. */
        public_visibility: boolean
        readonly synchronized: Signal
        readonly delta_synchronized: Signal
        readonly visibility_changed: Signal
    }
    /** A binary [Semaphore] for synchronization of multiple [Thread]s. */
    class Mutex extends RefCounted {
        /** Locks this [Mutex], blocks until it is unlocked by the current owner.
         *  [b]Note:[/b] This function returns without blocking if the thread already has ownership of the mutex.
         */
        lock(): void
        /** Tries locking this [Mutex], but does not block. Returns [code]true[/code] on success, [code]false[/code] otherwise.
         *  [b]Note:[/b] This function returns [code]true[/code] if the thread already has ownership of the mutex.
         */
        try_lock(): boolean
        /** Unlocks this [Mutex], leaving it to other threads.
         *  [b]Note:[/b] If a thread called [method lock] or [method try_lock] multiple times while already having ownership of the mutex, it must also call [method unlock] the same number of times in order to unlock it correctly.
         *  [b]Warning:[/b] Calling [method unlock] more times that [method lock] on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.
         */
        unlock(): void
    }
    /** A 2D agent used to pathfind to a position while avoiding obstacles. */
    class NavigationAgent2D extends Node {
        /** Returns the [RID] of this agent on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters2D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters2D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters2D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters2D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the [code]agent[/code] on the NavigationServer. */
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
        distance_to_target(): number /*f64*/
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult2D
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector2Array
        /** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
        get_current_navigation_path_index(): number /*i64*/
        /** Returns true if [member target_position] is reached. It may not always be possible to reach the target position. It should always be possible to reach the final position though. See [method get_final_position]. */
        is_target_reached(): boolean
        /** Returns [code]true[/code] if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        is_target_reachable(): boolean
        /** Returns [code]true[/code] if the end of the currently loaded navigation path has been reached.
         *  [b]Note:[/b] While true prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.
         */
        is_navigation_finished(): boolean
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        get_final_position(): Vector2
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        set_debug_path_custom_line_width(line_width: number /*f64*/): void
        get_debug_path_custom_line_width(): number /*f64*/
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        target_position: Vector2
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        path_desired_distance: number /*f64*/
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        target_desired_distance: number /*f64*/
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        path_max_distance: number /*f64*/
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        navigation_layers: number /*i64*/
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        /** Additional information to return with the navigation path. */
        path_metadata_flags: number /*i64*/
        /** If [code]true[/code] the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a [code]safe_velocity[/code] Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        avoidance_enabled: boolean
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        velocity: Vector2
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.
         */
        radius: number /*f64*/
        /** The distance to search for other agents. */
        neighbor_distance: number /*f64*/
        /** The maximum number of neighbors for the agent to consider. */
        max_neighbors: number /*i64*/
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_agents: number /*f64*/
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_obstacles: number /*f64*/
        /** The maximum speed that an agent can move. */
        max_speed: number /*f64*/
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        avoidance_layers: number /*i64*/
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        avoidance_mask: number /*i64*/
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        avoidance_priority: number /*f64*/
        /** If [code]true[/code] shows debug visuals for this agent. */
        debug_enabled: boolean
        /** If [code]true[/code] uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        debug_use_custom: boolean
        /** If [member debug_use_custom] is [code]true[/code] uses this color for this agent instead of global color. */
        debug_path_custom_color: Color
        /** If [member debug_use_custom] is [code]true[/code] uses this rasterized point size for rendering path points for this agent instead of global point size. */
        debug_path_custom_point_size: number /*f64*/
        /** If [member debug_use_custom] is [code]true[/code] uses this line width for rendering paths for this agent instead of global line width. */
        debug_path_custom_line_width: number /*f64*/
        readonly path_changed: Signal
        readonly target_reached: Signal
        readonly waypoint_reached: Signal
        readonly link_reached: Signal
        readonly navigation_finished: Signal
        readonly velocity_computed: Signal
    }
    /** A 3D agent used to pathfind to a position while avoiding obstacles. */
    class NavigationAgent3D extends Node {
        /** Returns the [RID] of this agent on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        set_path_desired_distance(desired_distance: number /*f64*/): void
        get_path_desired_distance(): number /*f64*/
        set_target_desired_distance(desired_distance: number /*f64*/): void
        get_target_desired_distance(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_path_height_offset(path_height_offset: number /*f64*/): void
        get_path_height_offset(): number /*f64*/
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        set_keep_y_velocity(enabled: boolean): void
        get_keep_y_velocity(): boolean
        set_neighbor_distance(neighbor_distance: number /*f64*/): void
        get_neighbor_distance(): number /*f64*/
        set_max_neighbors(max_neighbors: number /*i64*/): void
        get_max_neighbors(): number /*i64*/
        set_time_horizon_agents(time_horizon: number /*f64*/): void
        get_time_horizon_agents(): number /*f64*/
        set_time_horizon_obstacles(time_horizon: number /*f64*/): void
        get_time_horizon_obstacles(): number /*f64*/
        set_max_speed(max_speed: number /*f64*/): void
        get_max_speed(): number /*f64*/
        set_path_max_distance(max_speed: number /*f64*/): void
        get_path_max_distance(): number /*f64*/
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_pathfinding_algorithm(pathfinding_algorithm: NavigationPathQueryParameters3D.PathfindingAlgorithm): void
        get_pathfinding_algorithm(): NavigationPathQueryParameters3D.PathfindingAlgorithm
        set_path_postprocessing(path_postprocessing: NavigationPathQueryParameters3D.PathPostProcessing): void
        get_path_postprocessing(): NavigationPathQueryParameters3D.PathPostProcessing
        set_path_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_path_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the [code]agent[/code] on the NavigationServer. */
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
        distance_to_target(): number /*f64*/
        /** Returns the path query result for the path the agent is currently following. */
        get_current_navigation_result(): NavigationPathQueryResult3D
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        get_current_navigation_path(): PackedVector3Array
        /** Returns which index the agent is currently on in the navigation path's [PackedVector3Array]. */
        get_current_navigation_path_index(): number /*i64*/
        /** Returns true if [member target_position] is reached. It may not always be possible to reach the target position. It should always be possible to reach the final position though. See [method get_final_position]. */
        is_target_reached(): boolean
        /** Returns [code]true[/code] if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        is_target_reachable(): boolean
        /** Returns [code]true[/code] if the end of the currently loaded navigation path has been reached.
         *  [b]Note:[/b] While true prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.
         */
        is_navigation_finished(): boolean
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        get_final_position(): Vector3
        _avoidance_done(new_velocity: Vector3): void
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        set_avoidance_mask(mask: number /*i64*/): void
        get_avoidance_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        set_avoidance_mask_value(mask_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        get_avoidance_mask_value(mask_number: number /*i64*/): boolean
        set_avoidance_priority(priority: number /*f64*/): void
        get_avoidance_priority(): number /*f64*/
        set_debug_enabled(enabled: boolean): void
        get_debug_enabled(): boolean
        set_debug_use_custom(enabled: boolean): void
        get_debug_use_custom(): boolean
        set_debug_path_custom_color(color: Color): void
        get_debug_path_custom_color(): Color
        set_debug_path_custom_point_size(point_size: number /*f64*/): void
        get_debug_path_custom_point_size(): number /*f64*/
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        target_position: Vector3
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
        path_desired_distance: number /*f64*/
        /** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
        target_desired_distance: number /*f64*/
        /** The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents. */
        path_height_offset: number /*f64*/
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        path_max_distance: number /*f64*/
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        navigation_layers: number /*i64*/
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        /** Additional information to return with the navigation path. */
        path_metadata_flags: number /*i64*/
        /** If [code]true[/code] the agent is registered for an RVO avoidance callback on the [NavigationServer3D]. When [member velocity] is set and the processing is completed a [code]safe_velocity[/code] Vector3 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        avoidance_enabled: boolean
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        velocity: Vector3
        /** The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone. */
        height: number /*f64*/
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.
         */
        radius: number /*f64*/
        /** The distance to search for other agents. */
        neighbor_distance: number /*f64*/
        /** The maximum number of neighbors for the agent to consider. */
        max_neighbors: number /*i64*/
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_agents: number /*f64*/
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        time_horizon_obstacles: number /*f64*/
        /** The maximum speed that an agent can move. */
        max_speed: number /*f64*/
        /** If [code]true[/code], the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.
         *  If [code]false[/code], the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [member height] are ignored.
         */
        use_3d_avoidance: boolean
        /** If [code]true[/code], and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help mitigate the most obvious clipping on uneven 3D geometry. */
        keep_y_velocity: boolean
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        avoidance_layers: number /*i64*/
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        avoidance_mask: number /*i64*/
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        avoidance_priority: number /*f64*/
        /** If [code]true[/code] shows debug visuals for this agent. */
        debug_enabled: boolean
        /** If [code]true[/code] uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        debug_use_custom: boolean
        /** If [member debug_use_custom] is [code]true[/code] uses this color for this agent instead of global color. */
        debug_path_custom_color: Color
        /** If [member debug_use_custom] is [code]true[/code] uses this rasterized point size for rendering path points for this agent instead of global point size. */
        debug_path_custom_point_size: number /*f64*/
        readonly path_changed: Signal
        readonly target_reached: Signal
        readonly waypoint_reached: Signal
        readonly link_reached: Signal
        readonly navigation_finished: Signal
        readonly velocity_computed: Signal
    }
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through. */
    class NavigationLink2D extends Node2D {
        /** Returns the [RID] of this link on the [NavigationServer2D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
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
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        /** Whether this link is currently active. If [code]false[/code], [method NavigationServer2D.map_get_path] will ignore this link. */
        enabled: boolean
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        bidirectional: boolean
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer2D.map_get_path]. */
        navigation_layers: number /*i64*/
        /** Starting position of the link.
         *  This position will search out the nearest polygon in the navigation mesh to attach to.
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].
         */
        start_position: Vector2
        /** Ending position of the link.
         *  This position will search out the nearest polygon in the navigation mesh to attach to.
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].
         */
        end_position: Vector2
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
    }
    class NavigationLink2DEditor extends Control {
    }
    class NavigationLink2DEditorPlugin extends EditorPlugin {
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through. */
    class NavigationLink3D extends Node3D {
        /** Returns the [RID] of this link on the [NavigationServer3D]. */
        get_rid(): RID
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_bidirectional(bidirectional: boolean): void
        is_bidirectional(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
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
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        /** Whether this link is currently active. If [code]false[/code], [method NavigationServer3D.map_get_path] will ignore this link. */
        enabled: boolean
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        bidirectional: boolean
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
        navigation_layers: number /*i64*/
        /** Starting position of the link.
         *  This position will search out the nearest polygon in the navigation mesh to attach to.
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].
         */
        start_position: Vector3
        /** Ending position of the link.
         *  This position will search out the nearest polygon in the navigation mesh to attach to.
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].
         */
        end_position: Vector3
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
    }
    class NavigationLink3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            SAMPLE_PARTITION_WATERSHED = 0,
            SAMPLE_PARTITION_MONOTONE = 1,
            SAMPLE_PARTITION_LAYERS = 2,
            SAMPLE_PARTITION_MAX = 3,
        }
        enum ParsedGeometryType {
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            PARSED_GEOMETRY_BOTH = 2,
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    /** A navigation mesh that defines traversable areas and obstacles. */
    class NavigationMesh extends Resource {
        set_sample_partition_type(sample_partition_type: NavigationMesh.SamplePartitionType): void
        get_sample_partition_type(): NavigationMesh.SamplePartitionType
        set_parsed_geometry_type(geometry_type: NavigationMesh.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationMesh.ParsedGeometryType
        set_collision_mask(mask: number /*i64*/): void
        get_collision_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
        set_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(mask: NavigationMesh.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationMesh.SourceGeometryMode
        set_source_group_name(mask: StringName): void
        get_source_group_name(): StringName
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_cell_height(cell_height: number /*f64*/): void
        get_cell_height(): number /*f64*/
        set_agent_height(agent_height: number /*f64*/): void
        get_agent_height(): number /*f64*/
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        set_agent_max_climb(agent_max_climb: number /*f64*/): void
        get_agent_max_climb(): number /*f64*/
        set_agent_max_slope(agent_max_slope: number /*f64*/): void
        get_agent_max_slope(): number /*f64*/
        set_region_min_size(region_min_size: number /*f64*/): void
        get_region_min_size(): number /*f64*/
        set_region_merge_size(region_merge_size: number /*f64*/): void
        get_region_merge_size(): number /*f64*/
        set_edge_max_length(edge_max_length: number /*f64*/): void
        get_edge_max_length(): number /*f64*/
        set_edge_max_error(edge_max_error: number /*f64*/): void
        get_edge_max_error(): number /*f64*/
        set_vertices_per_polygon(vertices_per_polygon: number /*f64*/): void
        get_vertices_per_polygon(): number /*f64*/
        set_detail_sample_distance(detail_sample_dist: number /*f64*/): void
        get_detail_sample_distance(): number /*f64*/
        set_detail_sample_max_error(detail_sample_max_error: number /*f64*/): void
        get_detail_sample_max_error(): number /*f64*/
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
        get_polygon_count(): number /*i64*/
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        get_polygon(idx: number /*i64*/): PackedInt32Array
        /** Clears the array of polygons, but it doesn't clear the array of vertices. */
        clear_polygons(): void
        /** Initializes the navigation mesh by setting the vertices and indices according to a [Mesh].
         *  [b]Note:[/b] The given [param mesh] must be of type [constant Mesh.PRIMITIVE_TRIANGLES] and have an index array.
         */
        create_from_mesh(mesh: Mesh): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        vertices: PackedVector3Array
        polygons: Array
        /** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
        sample_partition_type: number /*i64*/
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        geometry_parsed_geometry_type: number /*i64*/
        /** The physics layers to scan for static colliders.
         *  Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].
         */
        geometry_collision_mask: number /*i64*/
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        geometry_source_geometry_mode: number /*i64*/
        /** The name of the group to scan for geometry.
         *  Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].
         */
        geometry_source_group_name: string
        /** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
        cell_size: number /*f64*/
        /** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
        cell_height: number /*f64*/
        /** The minimum floor to ceiling height that will still allow the floor area to be considered walkable.
         *  [b]Note:[/b] While baking, this value will be rounded up to the nearest multiple of [member cell_height].
         */
        agent_height: number /*f64*/
        /** The distance to erode/shrink the walkable area of the heightfield away from obstructions.
         *  [b]Note:[/b] While baking, this value will be rounded up to the nearest multiple of [member cell_size].
         */
        agent_radius: number /*f64*/
        /** The minimum ledge height that is considered to still be traversable.
         *  [b]Note:[/b] While baking, this value will be rounded down to the nearest multiple of [member cell_height].
         */
        agent_max_climb: number /*f64*/
        /** The maximum slope that is considered walkable, in degrees. */
        agent_max_slope: number /*f64*/
        /** The minimum size of a region for it to be created.
         *  [b]Note:[/b] This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.
         */
        region_min_size: number /*f64*/
        /** Any regions with a size smaller than this will be merged with larger regions if possible.
         *  [b]Note:[/b] This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.
         */
        region_merge_size: number /*f64*/
        /** The maximum allowed length for contour edges along the border of the mesh. A value of [code]0.0[/code] disables this feature.
         *  [b]Note:[/b] While baking, this value will be rounded up to the nearest multiple of [member cell_size].
         */
        edge_max_length: number /*f64*/
        /** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
        edge_max_error: number /*f64*/
        /** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
        vertices_per_polygon: number /*f64*/
        /** The sampling distance to use when generating the detail mesh, in cell unit. */
        detail_sample_distance: number /*f64*/
        /** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
        detail_sample_max_error: number /*f64*/
        /** If [code]true[/code], marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
        filter_low_hanging_obstacles: boolean
        /** If [code]true[/code], marks spans that are ledges as non-walkable. */
        filter_ledge_spans: boolean
        /** If [code]true[/code], marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
        filter_walkable_low_height_spans: boolean
        /** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
        filter_baking_aabb: AABB
        /** The position offset applied to the [member filter_baking_aabb] [AABB]. */
        filter_baking_aabb_offset: Vector3
    }
    class NavigationMeshEditor extends Control {
    }
    class NavigationMeshEditorPlugin extends EditorPlugin {
    }
    /** Container for parsed source geometry data used in navigation mesh baking. */
    class NavigationMeshSourceGeometryData2D extends Resource {
        /** Clears the internal data. */
        clear(): void
        /** Returns [code]true[/code] when parsed source geometry data exists. */
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
        traversable_outlines: Array
        obstruction_outlines: Array
    }
    /** Container for parsed source geometry data used in navigation mesh baking. */
    class NavigationMeshSourceGeometryData3D extends Resource {
        /** Sets the parsed source geometry data vertices. The vertices need to be matched with appropriated indices.
         *  [b]Warning:[/b] Inappropriate data can crash the baking process of the involved third-party libraries.
         */
        set_vertices(vertices: PackedFloat32Array): void
        /** Returns the parsed source geometry data vertices array. */
        get_vertices(): PackedFloat32Array
        /** Sets the parsed source geometry data indices. The indices need to be matched with appropriated vertices.
         *  [b]Warning:[/b] Inappropriate data can crash the baking process of the involved third-party libraries.
         */
        set_indices(indices: PackedInt32Array): void
        /** Returns the parsed source geometry data indices array. */
        get_indices(): PackedInt32Array
        /** Clears the internal data. */
        clear(): void
        /** Returns [code]true[/code] when parsed source geometry data exists. */
        has_data(): boolean
        /** Adds the geometry data of a [Mesh] resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_mesh(mesh: Mesh, xform: Transform3D): void
        /** Adds an [Array] the size of [constant Mesh.ARRAY_MAX] and with vertices at index [constant Mesh.ARRAY_VERTEX] and indices at index [constant Mesh.ARRAY_INDEX] to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_mesh_array(mesh_array: Array, xform: Transform3D): void
        /** Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        add_faces(faces: PackedVector3Array, xform: Transform3D): void
        vertices: PackedVector3Array
        indices: PackedInt32Array
    }
    /** 2D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. */
    class NavigationObstacle2D extends Node2D {
        /** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the [code]obstacle[/code] on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_velocity(velocity: Vector2): void
        get_velocity(): Vector2
        set_vertices(vertices: PackedVector2Array): void
        get_vertices(): PackedVector2Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        /** If [code]true[/code] the obstacle affects avoidance using agents. */
        avoidance_enabled: boolean
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        velocity: Vector2
        /** Sets the avoidance radius for the obstacle. */
        radius: number /*f64*/
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        vertices: PackedVector2Array
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        avoidance_layers: number /*i64*/
    }
    class NavigationObstacle2DEditor extends AbstractPolygon2DEditor {
    }
    class NavigationObstacle2DEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    /** 3D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. */
    class NavigationObstacle3D extends Node3D {
        /** Returns the [RID] of this obstacle on the [NavigationServer3D]. */
        get_rid(): RID
        set_avoidance_enabled(enabled: boolean): void
        get_avoidance_enabled(): boolean
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the [code]obstacle[/code] on the NavigationServer. */
        set_navigation_map(navigation_map: RID): void
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        get_navigation_map(): RID
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_velocity(velocity: Vector3): void
        get_velocity(): Vector3
        set_vertices(vertices: PackedVector3Array): void
        get_vertices(): PackedVector3Array
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        set_use_3d_avoidance(enabled: boolean): void
        get_use_3d_avoidance(): boolean
        /** If [code]true[/code] the obstacle affects avoidance using agents. */
        avoidance_enabled: boolean
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        velocity: Vector3
        /** Sets the avoidance radius for the obstacle. */
        radius: number /*f64*/
        /** Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them. */
        height: number /*f64*/
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        vertices: PackedVector3Array
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        avoidance_layers: number /*i64*/
        /** If [code]true[/code] the obstacle affects 3D avoidance using agent's with obstacle [member radius].
         *  If [code]false[/code] the obstacle affects 2D avoidance using agent's with both obstacle [member vertices] as well as obstacle [member radius].
         */
        use_3d_avoidance: boolean
    }
    class NavigationObstacle3DEditor extends HBoxContainer {
        _polygon_draw(): void
    }
    class NavigationObstacle3DEditorPlugin extends EditorPlugin {
    }
    namespace NavigationPathQueryParameters2D {
        enum PathfindingAlgorithm {
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            PATH_METADATA_INCLUDE_NONE = 0,
            PATH_METADATA_INCLUDE_TYPES = 1,
            PATH_METADATA_INCLUDE_RIDS = 2,
            PATH_METADATA_INCLUDE_OWNERS = 4,
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    /** Provides parameters for 2D navigation path queries. */
    class NavigationPathQueryParameters2D extends RefCounted {
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
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters2D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters2D.PathMetadataFlags
        /** The navigation map [RID] used in the path query. */
        map: RID
        /** The pathfinding start position in global coordinates. */
        start_position: Vector2
        /** The pathfinding target position in global coordinates. */
        target_position: Vector2
        /** The navigation layers the query will use (as a bitmask). */
        navigation_layers: number /*i64*/
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        /** Additional information to include with the navigation path. */
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryParameters3D {
        enum PathfindingAlgorithm {
            PATHFINDING_ALGORITHM_ASTAR = 0,
        }
        enum PathPostProcessing {
            PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
            PATH_POSTPROCESSING_EDGECENTERED = 1,
        }
        enum PathMetadataFlags {
            PATH_METADATA_INCLUDE_NONE = 0,
            PATH_METADATA_INCLUDE_TYPES = 1,
            PATH_METADATA_INCLUDE_RIDS = 2,
            PATH_METADATA_INCLUDE_OWNERS = 4,
            PATH_METADATA_INCLUDE_ALL = 7,
        }
    }
    /** Provides parameters for 3D navigation path queries. */
    class NavigationPathQueryParameters3D extends RefCounted {
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
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        set_metadata_flags(flags: NavigationPathQueryParameters3D.PathMetadataFlags): void
        get_metadata_flags(): NavigationPathQueryParameters3D.PathMetadataFlags
        /** The navigation map [RID] used in the path query. */
        map: RID
        /** The pathfinding start position in global coordinates. */
        start_position: Vector3
        /** The pathfinding target position in global coordinates. */
        target_position: Vector3
        /** The navigation layers the query will use (as a bitmask). */
        navigation_layers: number /*i64*/
        /** The pathfinding algorithm used in the path query. */
        pathfinding_algorithm: number /*i64*/
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        path_postprocessing: number /*i64*/
        /** Additional information to include with the navigation path. */
        metadata_flags: number /*i64*/
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            PATH_SEGMENT_TYPE_REGION = 0,
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 2D pathfinding query. */
    class NavigationPathQueryResult2D extends RefCounted {
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
        path: PackedVector2Array
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        path_types: PackedInt32Array
        /** The [RID]s of the regions and links that each point of the path goes through. */
        path_rids: Array
        /** The [code]ObjectID[/code]s of the [Object]s which manage the regions and links each point of the path goes through. */
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            PATH_SEGMENT_TYPE_REGION = 0,
            PATH_SEGMENT_TYPE_LINK = 1,
        }
    }
    /** Represents the result of a 3D pathfinding query. */
    class NavigationPathQueryResult3D extends RefCounted {
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
        path: PackedVector3Array
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        path_types: PackedInt32Array
        /** The [RID]s of the regions and links that each point of the path goes through. */
        path_rids: Array
        /** The [code]ObjectID[/code]s of the [Object]s which manage the regions and links each point of the path goes through. */
        path_owner_ids: PackedInt64Array
    }
    namespace NavigationPolygon {
        enum ParsedGeometryType {
            PARSED_GEOMETRY_MESH_INSTANCES = 0,
            PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
            PARSED_GEOMETRY_BOTH = 2,
            PARSED_GEOMETRY_MAX = 3,
        }
        enum SourceGeometryMode {
            SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
            SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
            SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
            SOURCE_GEOMETRY_MAX = 3,
        }
    }
    /** A 2D navigation mesh that describes a traversable surface for pathfinding. */
    class NavigationPolygon extends Resource {
        /** Sets the vertices that can be then indexed to create polygons with the [method add_polygon] method. */
        set_vertices(vertices: PackedVector2Array): void
        /** Returns a [PackedVector2Array] containing all the vertices being used to create the polygons. */
        get_vertices(): PackedVector2Array
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        add_polygon(polygon: PackedInt32Array): void
        /** Returns the count of all polygons. */
        get_polygon_count(): number /*i64*/
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        get_polygon(idx: number /*i64*/): PackedInt32Array
        /** Clears the array of polygons, but it doesn't clear the array of outlines and vertices. */
        clear_polygons(): void
        /** Returns the [NavigationMesh] resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [method NavigationServer3D.region_set_navigation_mesh] API directly (as 2D uses the 3D server behind the scene). */
        get_navigation_mesh(): NavigationMesh
        /** Appends a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines. */
        add_outline(outline: PackedVector2Array): void
        /** Adds a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position. */
        add_outline_at_index(outline: PackedVector2Array, index: number /*i64*/): void
        /** Returns the number of outlines that were created in the editor or by script. */
        get_outline_count(): number /*i64*/
        /** Changes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        set_outline(idx: number /*i64*/, outline: PackedVector2Array): void
        /** Returns a [PackedVector2Array] containing the vertices of an outline that was created in the editor or by script. */
        get_outline(idx: number /*i64*/): PackedVector2Array
        /** Removes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        remove_outline(idx: number /*i64*/): void
        /** Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them. */
        clear_outlines(): void
        /** Creates polygons from the outlines added in the editor or by script.
         *  [i]Deprecated.[/i] This function is deprecated, and might be removed in a future release. Use [method NavigationServer2D.parse_source_geometry_data] and [method NavigationServer2D.bake_from_source_geometry_data] instead.
         */
        make_polygons_from_outlines(): void
        _set_polygons(polygons: Array): void
        _get_polygons(): Array
        _set_outlines(outlines: Array): void
        _get_outlines(): Array
        set_cell_size(cell_size: number /*f64*/): void
        get_cell_size(): number /*f64*/
        set_parsed_geometry_type(geometry_type: NavigationPolygon.ParsedGeometryType): void
        get_parsed_geometry_type(): NavigationPolygon.ParsedGeometryType
        set_parsed_collision_mask(mask: number /*i64*/): void
        get_parsed_collision_mask(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member parsed_collision_mask], given a [param layer_number] between 1 and 32. */
        set_parsed_collision_mask_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member parsed_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_parsed_collision_mask_value(layer_number: number /*i64*/): boolean
        set_source_geometry_mode(geometry_mode: NavigationPolygon.SourceGeometryMode): void
        get_source_geometry_mode(): NavigationPolygon.SourceGeometryMode
        set_source_geometry_group_name(group_name: StringName): void
        get_source_geometry_group_name(): StringName
        set_agent_radius(agent_radius: number /*f64*/): void
        get_agent_radius(): number /*f64*/
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        vertices: PackedVector2Array
        polygons: Array
        outlines: Array
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        parsed_geometry_type: number /*i64*/
        /** The physics layers to scan for static colliders.
         *  Only used when [member parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].
         */
        parsed_collision_mask: number /*i64*/
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        source_geometry_mode: number /*i64*/
        /** The group name of nodes that should be parsed for baking source geometry.
         *  Only used when [member source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].
         */
        source_geometry_group_name: string
        /** The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map. */
        cell_size: number /*f64*/
        /** The distance to erode/shrink the walkable surface when baking the navigation mesh. */
        agent_radius: number /*f64*/
    }
    class NavigationPolygonEditor extends AbstractPolygon2DEditor {
    }
    class NavigationPolygonEditorPlugin extends AbstractPolygon2DEditorPlugin {
    }
    /** A traversable 2D region that [NavigationAgent2D]s can use for pathfinding. */
    class NavigationRegion2D extends Node2D {
        /** Returns the [RID] of this region on the [NavigationServer2D]. Combined with [method NavigationServer2D.map_get_closest_point_owner] can be used to identify the [NavigationRegion2D] closest to a point on the merged navigation map. */
        get_rid(): RID
        set_navigation_polygon(navigation_polygon: NavigationPolygon): void
        get_navigation_polygon(): NavigationPolygon
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        set_navigation_map(navigation_map: RID): void
        /** Returns the current navigation map [RID] used by this region. */
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        set_constrain_avoidance(enabled: boolean): void
        get_constrain_avoidance(): boolean
        set_avoidance_layers(layers: number /*i64*/): void
        get_avoidance_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_avoidance_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_avoidance_layer_value(layer_number: number /*i64*/): boolean
        /** Returns the [RID] of this region on the [NavigationServer2D].
         *  [i]Deprecated.[/i] Use [method get_rid] instead.
         */
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        /** Bakes the [NavigationPolygon]. If [param on_thread] is set to [code]true[/code] (default), the baking is done on a separate thread. */
        bake_navigation_polygon(on_thread: boolean = true): void
        _navigation_polygon_changed(): void
        /** The [NavigationPolygon] resource to use. */
        navigation_polygon: NavigationPolygon
        /** Determines if the [NavigationRegion2D] is enabled or disabled. */
        enabled: boolean
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        use_edge_connections: boolean
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer2D.map_get_path]. */
        navigation_layers: number /*i64*/
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
        /** If [code]true[/code] constraints avoidance agent's with an avoidance mask bit that matches with a bit of the [member avoidance_layers] to the navigation polygon. Due to each navigation polygon outline creating an obstacle and each polygon edge creating an avoidance line constrain keep the navigation polygon shape as simple as possible for performance.
         *  [b]Experimental:[/b] This is an experimental feature and should not be used in production as agent's can get stuck on the navigation polygon corners and edges especially at high frame rate.
         */
        constrain_avoidance: boolean
        /** A bitfield determining all avoidance layers for the avoidance constrain. */
        avoidance_layers: number /*i64*/
        readonly navigation_polygon_changed: Signal
        readonly bake_finished: Signal
    }
    /** A traversable 3D region that [NavigationAgent3D]s can use for pathfinding. */
    class NavigationRegion3D extends Node3D {
        /** Returns the [RID] of this region on the [NavigationServer3D]. Combined with [method NavigationServer3D.map_get_closest_point_owner] can be used to identify the [NavigationRegion3D] closest to a point on the merged navigation map. */
        get_rid(): RID
        set_navigation_mesh(navigation_mesh: NavigationMesh): void
        get_navigation_mesh(): NavigationMesh
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        set_navigation_map(navigation_map: RID): void
        /** Returns the current navigation map [RID] used by this region. */
        get_navigation_map(): RID
        set_use_edge_connections(enabled: boolean): void
        get_use_edge_connections(): boolean
        set_navigation_layers(navigation_layers: number /*i64*/): void
        get_navigation_layers(): number /*i64*/
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        set_navigation_layer_value(layer_number: number /*i64*/, value: boolean): void
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        get_navigation_layer_value(layer_number: number /*i64*/): boolean
        /** Returns the [RID] of this region on the [NavigationServer3D].
         *  [i]Deprecated.[/i] Use [method get_rid] instead.
         */
        get_region_rid(): RID
        set_enter_cost(enter_cost: number /*f64*/): void
        get_enter_cost(): number /*f64*/
        set_travel_cost(travel_cost: number /*f64*/): void
        get_travel_cost(): number /*f64*/
        /** Bakes the [NavigationMesh]. If [param on_thread] is set to [code]true[/code] (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new [NavigationMesh]. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled). */
        bake_navigation_mesh(on_thread: boolean = true): void
        _bake_finished(navigation_mesh: NavigationMesh): void
        /** The [NavigationMesh] resource to use. */
        navigation_mesh: NavigationMesh
        /** Determines if the [NavigationRegion3D] is enabled or disabled. */
        enabled: boolean
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        use_edge_connections: boolean
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. */
        navigation_layers: number /*i64*/
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        enter_cost: number /*f64*/
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        travel_cost: number /*f64*/
        readonly navigation_mesh_changed: Signal
        readonly bake_finished: Signal
    }
    class NavigationRegion3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace NinePatchRect {
        enum AxisStretchMode {
            AXIS_STRETCH_MODE_STRETCH = 0,
            AXIS_STRETCH_MODE_TILE = 1,
            AXIS_STRETCH_MODE_TILE_FIT = 2,
        }
    }
    /** A control that displays a texture by keeping its corners intact, but tiling its edges and center. */
    class NinePatchRect extends Control {
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        /** Sets the size of the margin on the specified [enum Side] to [param value] pixels. */
        set_patch_margin(margin: Side, value: number /*i64*/): void
        /** Returns the size of the margin on the specified [enum Side]. */
        get_patch_margin(margin: Side): number /*i64*/
        set_region_rect(rect: Rect2): void
        get_region_rect(): Rect2
        set_draw_center(draw_center: boolean): void
        is_draw_center_enabled(): boolean
        set_h_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_h_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        set_v_axis_stretch_mode(mode: NinePatchRect.AxisStretchMode): void
        get_v_axis_stretch_mode(): NinePatchRect.AxisStretchMode
        /** The node's texture resource. */
        texture: Texture2D
        /** If [code]true[/code], draw the panel's center. Else, only draw the 9-slice's borders. */
        draw_center: boolean
        /** Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture. */
        region_rect: Rect2
        /** The stretch mode to use for horizontal stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        axis_stretch_horizontal: number /*i64*/
        /** The stretch mode to use for vertical stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        axis_stretch_vertical: number /*i64*/
        readonly texture_changed: Signal
    }
    namespace Node {
        enum ProcessMode {
            PROCESS_MODE_INHERIT = 0,
            PROCESS_MODE_PAUSABLE = 1,
            PROCESS_MODE_WHEN_PAUSED = 2,
            PROCESS_MODE_ALWAYS = 3,
            PROCESS_MODE_DISABLED = 4,
        }
        enum ProcessThreadGroup {
            PROCESS_THREAD_GROUP_INHERIT = 0,
            PROCESS_THREAD_GROUP_MAIN_THREAD = 1,
            PROCESS_THREAD_GROUP_SUB_THREAD = 2,
        }
        enum ProcessThreadMessages {
            FLAG_PROCESS_THREAD_MESSAGES = 1,
            FLAG_PROCESS_THREAD_MESSAGES_PHYSICS = 2,
            FLAG_PROCESS_THREAD_MESSAGES_ALL = 3,
        }
        enum DuplicateFlags {
            DUPLICATE_SIGNALS = 1,
            DUPLICATE_GROUPS = 2,
            DUPLICATE_SCRIPTS = 4,
            DUPLICATE_USE_INSTANTIATION = 8,
        }
        enum InternalMode {
            INTERNAL_MODE_DISABLED = 0,
            INTERNAL_MODE_FRONT = 1,
            INTERNAL_MODE_BACK = 2,
        }
    }
    /** Base class for all scene objects. */
    class Node extends Object {
        static readonly NOTIFICATION_ENTER_TREE = 10
        static readonly NOTIFICATION_EXIT_TREE = 11
        static readonly NOTIFICATION_MOVED_IN_PARENT = 12
        static readonly NOTIFICATION_READY = 13
        static readonly NOTIFICATION_PAUSED = 14
        static readonly NOTIFICATION_UNPAUSED = 15
        static readonly NOTIFICATION_PHYSICS_PROCESS = 16
        static readonly NOTIFICATION_PROCESS = 17
        static readonly NOTIFICATION_PARENTED = 18
        static readonly NOTIFICATION_UNPARENTED = 19
        static readonly NOTIFICATION_SCENE_INSTANTIATED = 20
        static readonly NOTIFICATION_DRAG_BEGIN = 21
        static readonly NOTIFICATION_DRAG_END = 22
        static readonly NOTIFICATION_PATH_RENAMED = 23
        static readonly NOTIFICATION_CHILD_ORDER_CHANGED = 24
        static readonly NOTIFICATION_INTERNAL_PROCESS = 25
        static readonly NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26
        static readonly NOTIFICATION_POST_ENTER_TREE = 27
        static readonly NOTIFICATION_DISABLED = 28
        static readonly NOTIFICATION_ENABLED = 29
        static readonly NOTIFICATION_EDITOR_PRE_SAVE = 9001
        static readonly NOTIFICATION_EDITOR_POST_SAVE = 9002
        static readonly NOTIFICATION_WM_MOUSE_ENTER = 1002
        static readonly NOTIFICATION_WM_MOUSE_EXIT = 1003
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005
        static readonly NOTIFICATION_WM_CLOSE_REQUEST = 1006
        static readonly NOTIFICATION_WM_GO_BACK_REQUEST = 1007
        static readonly NOTIFICATION_WM_SIZE_CHANGED = 1008
        static readonly NOTIFICATION_WM_DPI_CHANGE = 1009
        static readonly NOTIFICATION_VP_MOUSE_ENTER = 1010
        static readonly NOTIFICATION_VP_MOUSE_EXIT = 1011
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        static readonly NOTIFICATION_WM_ABOUT = 2011
        static readonly NOTIFICATION_CRASH = 2012
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        /* gdvirtual */ _process(delta: number /*f64*/): void
        /* gdvirtual */ _physics_process(delta: number /*f64*/): void
        /* gdvirtual */ _enter_tree(): void
        /* gdvirtual */ _exit_tree(): void
        /* gdvirtual */ _ready(): void
        /* gdvirtual */ _get_configuration_warnings(): PackedStringArray
        /* gdvirtual */ _input(event: InputEvent): void
        /* gdvirtual */ _shortcut_input(event: InputEvent): void
        /* gdvirtual */ _unhandled_input(event: InputEvent): void
        /* gdvirtual */ _unhandled_key_input(event: InputEvent): void
        /** Prints all orphan nodes (nodes outside the [SceneTree]). Useful for debugging.
         *  [b]Note:[/b] This method only works in debug builds. Does nothing in a project exported in release mode.
         */
        static print_orphan_nodes(): void
        /** Adds a [param sibling] node to this node's parent, and moves the added sibling right below this node.
         *  If [param force_readable_name] is [code]true[/code], improves the readability of the added [param sibling]. If not named, the [param sibling] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to [code]false[/code], which assigns a dummy name featuring [code]@[/code] in both situations.
         *  Use [method add_child] instead of this method if you don't need the child node to be added below a specific node in the list of children.
         *  [b]Note:[/b] If this node is internal, the added sibling will be internal too (see [method add_child]'s [code]internal[/code] parameter).
         */
        add_sibling(sibling: Node, force_readable_name: boolean = false): void
        set_name(name: string): void
        get_name(): StringName
        /** Adds a child [param node]. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.
         *  If [param force_readable_name] is [code]true[/code], improves the readability of the added [param node]. If not named, the [param node] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to [code]false[/code], which assigns a dummy name featuring [code]@[/code] in both situations.
         *  If [param internal] is different than [constant INTERNAL_MODE_DISABLED], the child will be added as internal node. These nodes are ignored by methods like [method get_children], unless their parameter [code]include_internal[/code] is [code]true[/code]. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [ColorPicker]. See [enum InternalMode] for available modes.
         *  [b]Note:[/b] If [param node] already has a parent, this method will fail. Use [method remove_child] first to remove [param node] from its current parent. For example:
         *  
         *  If you need the child node to be added below a specific node in the list of children, use [method add_sibling] instead of this method.
         *  [b]Note:[/b] If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=$DOCS_URL/tutorials/plugins/editor/index.html]editor plugins[/url]. If [method add_child] is called without setting [member owner], the newly added [Node] will not be visible in the scene tree, though it will be visible in the 2D/3D view.
         */
        add_child(node: Node, force_readable_name: boolean = false, internal: Node.InternalMode = 0): void
        /** Removes a child [param node]. The [param node], along with its children, are [b]not[/b] deleted. To delete a node, see [method queue_free].
         *  [b]Note:[/b] When this node is inside the tree, this method sets the [member owner] of the removed [param node] (or its descendants) to [code]null[/code], if their [member owner] is no longer an ancestor (see [method is_ancestor_of]).
         */
        remove_child(node: Node): void
        /** Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent.
         *  If [param keep_global_transform] is [code]true[/code], the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).
         */
        reparent(new_parent: Node, keep_global_transform: boolean = true): void
        /** Returns the number of children of this node.
         *  If [param include_internal] is [code]false[/code], internal children are not counted (see [method add_child]'s [code]internal[/code] parameter).
         */
        get_child_count(include_internal: boolean = false): number /*i64*/
        /** Returns all children of this node inside an [Array].
         *  If [param include_internal] is [code]false[/code], excludes internal children from the returned array (see [method add_child]'s [code]internal[/code] parameter).
         */
        get_children(include_internal: boolean = false): Array
        /** Fetches a child node by its index. Each child node has an index relative its siblings (see [method get_index]). The first child is at index 0. Negative values can also be used to start from the end of the list. This method can be used in combination with [method get_child_count] to iterate over this node's children. If no child exists at the given index, this method returns [code]null[/code] and an error is generated.
         *  If [param include_internal] is [code]false[/code], internal children are ignored (see [method add_child]'s [code]internal[/code] parameter).
         *  
         *  [b]Note:[/b] To fetch a node by [NodePath], use [method get_node].
         */
        get_child(idx: number /*i64*/, include_internal: boolean = false): Node
        /** Returns [code]true[/code] if the [param path] points to a valid node. See also [method get_node]. */
        has_node(path: NodePath): boolean
        /** Fetches a node. The [NodePath] can either be a relative path (from this node), or an absolute path (from the [member SceneTree.root]) to a node. If [param path] does not point to a valid node, generates an error and returns [code]null[/code]. Attempts to access methods on the return value will result in an [i]"Attempt to call <method> on a null instance."[/i] error.
         *  [b]Note:[/b] Fetching by absolute path only works when the node is inside the scene tree (see [method is_inside_tree]).
         *  [b]Example:[/b] Assume this method is called from the Character node, inside the following tree:
         *  
         *  The following calls will return a valid node:
         *  
         */
        get_node(path: NodePath): Node
        /** Fetches a node by [NodePath]. Similar to [method get_node], but does not generate an error if [param path] does not point to a valid node. */
        get_node_or_null(path: NodePath): Node
        /** Returns this node's parent node, or [code]null[/code] if the node doesn't have a parent. */
        get_parent(): Node
        /** Finds the first descendant of this node whose [member name] matches [param pattern], returning [code]null[/code] if no match is found. The matching is done against node names, [i]not[/i] their paths, through [method String.match]. As such, it is case-sensitive, [code]"*"[/code] matches zero or more characters, and [code]"?"[/code] matches any single character.
         *  If [param recursive] is [code]false[/code], only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see [code]internal[/code] parameter in [method add_child]).
         *  If [param owned] is [code]true[/code], only descendants with a valid [member owner] node are checked.
         *  [b]Note:[/b] This method can be very slow. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).
         *  [b]Note:[/b] To find all descendant nodes matching a pattern or a class type, see [method find_children].
         */
        find_child(pattern: string, recursive: boolean = true, owned: boolean = true): Node
        /** Finds all descendants of this node whose names match [param pattern], returning an empty [Array] if no match is found. The matching is done against node names, [i]not[/i] their paths, through [method String.match]. As such, it is case-sensitive, [code]"*"[/code] matches zero or more characters, and [code]"?"[/code] matches any single character.
         *  If [param type] is not empty, only ancestors inheriting from [param type] are included (see [method Object.is_class]).
         *  If [param recursive] is [code]false[/code], only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see [code]internal[/code] parameter in [method add_child]).
         *  If [param owned] is [code]true[/code], only descendants with a valid [member owner] node are checked.
         *  [b]Note:[/b] This method can be very slow. Consider storing references to the found nodes in a variable.
         *  [b]Note:[/b] To find a single descendant node matching a pattern, see [method find_child].
         */
        find_children(pattern: string, type: string = '', recursive: boolean = true, owned: boolean = true): Array
        /** Finds the first ancestor of this node whose [member name] matches [param pattern], returning [code]null[/code] if no match is found. The matching is done through [method String.match]. As such, it is case-sensitive, [code]"*"[/code] matches zero or more characters, and [code]"?"[/code] matches any single character. See also [method find_child] and [method find_children].
         *  [b]Note:[/b] As this method walks upwards in the scene tree, it can be slow in large, deeply nested nodes. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).
         */
        find_parent(pattern: string): Node
        /** Returns [code]true[/code] if [param path] points to a valid node and its subnames point to a valid [Resource], e.g. [code]Area2D/CollisionShape2D:shape[/code]. Properties that are not [Resource] types (such as nodes or other [Variant] types) are not considered. See also [method get_node_and_resource]. */
        has_node_and_resource(path: NodePath): boolean
        /** Fetches a node and its most nested resource as specified by the [NodePath]'s subname. Returns an [Array] of size [code]3[/code] where:
         *  - Element [code]0[/code] is the [Node], or [code]null[/code] if not found;
         *  - Element [code]1[/code] is the subname's last nested [Resource], or [code]null[/code] if not found;
         *  - Element [code]2[/code] is the remaining [NodePath], referring to an existing, non-[Resource] property (see [method Object.get_indexed]).
         *  [b]Example:[/b] Assume that the child's [member Sprite2D.texture] has been assigned a [AtlasTexture]:
         *  
         */
        get_node_and_resource(path: NodePath): Array
        /** Returns [code]true[/code] if this node is currently inside a [SceneTree]. See also [method get_tree]. */
        is_inside_tree(): boolean
        /** Returns [code]true[/code] if the given [param node] is a direct or indirect child of this node. */
        is_ancestor_of(node: Node): boolean
        /** Returns [code]true[/code] if the given [param node] occurs later in the scene hierarchy than this node. A node occurring later is usually processed last. */
        is_greater_than(node: Node): boolean
        /** Returns the node's absolute path, relative to the [member SceneTree.root]. If the node is not inside the scene tree, this method fails and returns an empty [NodePath]. */
        get_path(): NodePath
        /** Returns the relative [NodePath] from this node to the specified [param node]. Both nodes must be in the same [SceneTree], otherwise this method fails and returns an empty [NodePath].
         *  If [param use_unique_path] is [code]true[/code], returns the shortest path accounting for this node's unique name (see [member unique_name_in_owner]).
         *  [b]Note:[/b] If you get a relative path which starts from a unique node, the path may be longer than a normal relative path, due to the addition of the unique node's name.
         */
        get_path_to(node: Node, use_unique_path: boolean = false): NodePath
        /** Adds the node to the [param group]. Groups can be helpful to organize a subset of nodes, for example [code]"enemies"[/code] or [code]"collectables"[/code]. See notes in the description, and the group methods in [SceneTree].
         *  If [param persistent] is [code]true[/code], the group will be stored when saved inside a [PackedScene]. All groups created and displayed in the Node dock are persistent.
         *  [b]Note:[/b] To improve performance, the order of group names is [i]not[/i] guaranteed and may vary between project runs. Therefore, do not rely on the group order.
         *  [b]Note:[/b] [SceneTree]'s group methods will [i]not[/i] work on this node if not inside the tree (see [method is_inside_tree]).
         */
        add_to_group(group: StringName, persistent: boolean = false): void
        /** Removes the node from the given [param group]. Does nothing if the node is not in the [param group]. See also notes in the description, and the [SceneTree]'s group methods. */
        remove_from_group(group: StringName): void
        /** Returns [code]true[/code] if this node has been added to the given [param group]. See [method add_to_group] and [method remove_from_group]. See also notes in the description, and the [SceneTree]'s group methods. */
        is_in_group(group: StringName): boolean
        /** Moves [param child_node] to the given index. A node's index is the order among its siblings. If [param to_index] is negative, the index is counted from the end of the list. See also [method get_child] and [method get_index].
         *  [b]Note:[/b] The processing order of several engine callbacks ([method _ready], [method _process], etc.) and notifications sent through [method propagate_notification] is affected by tree order. [CanvasItem] nodes are also rendered in tree order. See also [member process_priority].
         */
        move_child(child_node: Node, to_index: number /*i64*/): void
        /** Returns an [Array] of group names that the node has been added to.
         *  [b]Note:[/b] To improve performance, the order of group names is [i]not[/i] guaranteed and may vary between project runs. Therefore, do not rely on the group order.
         *  [b]Note:[/b] This method may also return some group names starting with an underscore ([code]_[/code]). These are internally used by the engine. To avoid conflicts, do not use custom groups starting with underscores. To exclude internal groups, see the following code snippet:
         *  
         */
        get_groups(): Array
        set_owner(owner: Node): void
        get_owner(): Node
        /** Returns this node's order among its siblings. The first node's index is [code]0[/code]. See also [method get_child].
         *  If [param include_internal] is [code]false[/code], returns the index ignoring internal children. The first, non-internal child will have an index of [code]0[/code] (see [method add_child]'s [code]internal[/code] parameter).
         */
        get_index(include_internal: boolean = false): number /*i64*/
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. This method outputs [NodePath]s relative to this node, and is good for copy/pasting into [method get_node]. See also [method print_tree_pretty].
         *  [b]Example output:[/b]
         *  
         */
        print_tree(): void
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. Similar to [method print_tree], but the graphical representation looks like what is displayed in the editor's Scene dock. It is useful for inspecting larger trees.
         *  [b]Example output:[/b]
         *  
         */
        print_tree_pretty(): void
        /** Returns the tree as a [String]. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function. It also can be used in game UI/UX.
         *  [b]Example output:[/b]
         *  
         */
        get_tree_string(): string
        /** Similar to [method get_tree_string], this returns the tree as a [String]. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.
         *  [b]Example output:[/b]
         *  
         */
        get_tree_string_pretty(): string
        set_scene_file_path(scene_file_path: string): void
        get_scene_file_path(): string
        /** Calls [method Object.notification] with [param what] on this node and all of its children, recursively. */
        propagate_notification(what: number /*i64*/): void
        /** Calls the given [param method] name, passing [param args] as arguments, on this node and all of its children, recursively.
         *  If [param parent_first] is [code]true[/code], the method is called on this node first, then on all of its children. If [code]false[/code], the children's methods are called first.
         */
        propagate_call(method: StringName, args: Array = <any> {} /*compound.type from 28([object Object])*/, parent_first: boolean = false): void
        /** If set to [code]true[/code], enables physics (fixed framerate) processing. When a node is being processed, it will receive a [constant NOTIFICATION_PHYSICS_PROCESS] at a fixed (usually 60 FPS, see [member Engine.physics_ticks_per_second] to change) interval (and the [method _physics_process] callback will be called if exists). Enabled automatically if [method _physics_process] is overridden. */
        set_physics_process(enable: boolean): void
        /** Returns the time elapsed (in seconds) since the last physics callback. This value is identical to [method _physics_process]'s [code]delta[/code] parameter, and is often consistent at run-time, unless [member Engine.physics_ticks_per_second] is changed. See also [constant NOTIFICATION_PHYSICS_PROCESS]. */
        get_physics_process_delta_time(): number /*f64*/
        /** Returns [code]true[/code] if physics processing is enabled (see [method set_physics_process]). */
        is_physics_processing(): boolean
        /** Returns the time elapsed (in seconds) since the last process callback. This value is identical to [method _process]'s [code]delta[/code] parameter, and may vary from frame to frame. See also [constant NOTIFICATION_PROCESS]. */
        get_process_delta_time(): number /*f64*/
        /** If set to [code]true[/code], enables processing. When a node is being processed, it will receive a [constant NOTIFICATION_PROCESS] on every drawn frame (and the [method _process] callback will be called if exists). Enabled automatically if [method _process] is overridden. */
        set_process(enable: boolean): void
        set_process_priority(priority: number /*i64*/): void
        get_process_priority(): number /*i64*/
        set_physics_process_priority(priority: number /*i64*/): void
        get_physics_process_priority(): number /*i64*/
        /** Returns [code]true[/code] if processing is enabled (see [method set_process]). */
        is_processing(): boolean
        /** If set to [code]true[/code], enables input processing. This is not required for GUI controls! Enabled automatically if [method _input] is overridden. */
        set_process_input(enable: boolean): void
        /** Returns [code]true[/code] if the node is processing input (see [method set_process_input]). */
        is_processing_input(): boolean
        /** If set to [code]true[/code], enables shortcut processing for this node. Enabled automatically if [method _shortcut_input] is overridden. */
        set_process_shortcut_input(enable: boolean): void
        /** Returns [code]true[/code] if the node is processing shortcuts (see [method set_process_shortcut_input]). */
        is_processing_shortcut_input(): boolean
        /** If set to [code]true[/code], enables unhandled input processing. This is not required for GUI controls! It enables the node to receive all input that was not previously handled (usually by a [Control]). Enabled automatically if [method _unhandled_input] is overridden. */
        set_process_unhandled_input(enable: boolean): void
        /** Returns [code]true[/code] if the node is processing unhandled input (see [method set_process_unhandled_input]). */
        is_processing_unhandled_input(): boolean
        /** If set to [code]true[/code], enables unhandled key input processing. Enabled automatically if [method _unhandled_key_input] is overridden. */
        set_process_unhandled_key_input(enable: boolean): void
        /** Returns [code]true[/code] if the node is processing unhandled key input (see [method set_process_unhandled_key_input]). */
        is_processing_unhandled_key_input(): boolean
        set_process_mode(mode: Node.ProcessMode): void
        get_process_mode(): Node.ProcessMode
        /** Returns [code]true[/code] if the node can receive processing notifications and input callbacks ([constant NOTIFICATION_PROCESS], [method _input], etc) from the [SceneTree] and [Viewport]. The value depends on both the current [member process_mode] and [member SceneTree.paused]. Returns [code]false[/code] if the node is not inside the tree. */
        can_process(): boolean
        set_process_thread_group(mode: Node.ProcessThreadGroup): void
        get_process_thread_group(): Node.ProcessThreadGroup
        set_process_thread_messages(flags: Node.ProcessThreadMessages): void
        get_process_thread_messages(): Node.ProcessThreadMessages
        set_process_thread_group_order(order: number /*i64*/): void
        get_process_thread_group_order(): number /*i64*/
        /** If set to [code]true[/code], the node appears folded in the Scene dock. As a result, all of its children are hidden. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_displayed_folded]. */
        set_display_folded(fold: boolean): void
        /** Returns [code]true[/code] if the node is folded (collapsed) in the Scene dock. This method is intended to be used in editor plugins and tools. See also [method set_display_folded]. */
        is_displayed_folded(): boolean
        /** If set to [code]true[/code], enables internal processing for this node. Internal processing happens in isolation from the normal [method _process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([method set_process]).
         *  [b]Warning:[/b] Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.
         */
        set_process_internal(enable: boolean): void
        /** Returns [code]true[/code] if internal processing is enabled (see [method set_process_internal]). */
        is_processing_internal(): boolean
        /** If set to [code]true[/code], enables internal physics for this node. Internal physics processing happens in isolation from the normal [method _physics_process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([method set_physics_process]).
         *  [b]Warning:[/b] Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.
         */
        set_physics_process_internal(enable: boolean): void
        /** Returns [code]true[/code] if internal physics processing is enabled (see [method set_physics_process_internal]). */
        is_physics_processing_internal(): boolean
        /** Returns the [Window] that contains this node. If the node is in the main window, this is equivalent to getting the root node ([code]get_tree().get_root()[/code]). */
        get_window(): Window
        /** Returns the [Window] that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node. */
        get_last_exclusive_window(): Window
        /** Returns the [SceneTree] that contains this node. If this node is not inside the tree, generates an error and returns [code]null[/code]. See also [method is_inside_tree]. */
        get_tree(): SceneTree
        /** Creates a new [Tween] and binds it to this node. Fails if the node is not inside the tree.
         *  This is the equivalent of doing:
         *  
         *  The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).
         */
        create_tween(): Tween
        /** Duplicates the node, returning a new node with all of its properties, signals and groups copied from the original. The behavior can be tweaked through the [param flags] (see [enum DuplicateFlags]).
         *  [b]Note:[/b] For nodes with a [Script] attached, if [method Object._init] has been defined with required parameters, the duplicated node will not have a [Script].
         */
        duplicate(flags: number /*i64*/ = 15): Node
        /** Replaces this node by the given [param node]. All children of this node are moved to [param node].
         *  If [param keep_groups] is [code]true[/code], the [param node] is added to the same groups that the replaced node is in (see [method add_to_group]).
         *  [b]Warning:[/b] The replaced node is removed from the tree, but it is [b]not[/b] deleted. To prevent memory leaks, store a reference to the node in a variable, or use [method Object.free].
         */
        replace_by(node: Node, keep_groups: boolean = false): void
        /** If set to [code]true[/code], the node becomes a [InstancePlaceholder] when packed and instantiated from a [PackedScene]. See also [method get_scene_instance_load_placeholder]. */
        set_scene_instance_load_placeholder(load_placeholder: boolean): void
        /** Returns [code]true[/code] if this node is an instance load placeholder. See [InstancePlaceholder] and [method set_scene_instance_load_placeholder]. */
        get_scene_instance_load_placeholder(): boolean
        /** Set to [code]true[/code] to allow all nodes owned by [param node] to be available, and editable, in the Scene dock, even if their [member owner] is not the scene root. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_editable_instance]. */
        set_editable_instance(node: Node, is_editable: boolean): void
        /** Returns [code]true[/code] if [param node] has editable children enabled relative to this node. This method is intended to be used in editor plugins and tools. See also [method set_editable_instance]. */
        is_editable_instance(node: Node): boolean
        /** Returns the node's closest [Viewport] ancestor, if the node is inside the tree. Otherwise, returns [code]null[/code]. */
        get_viewport(): Viewport
        /** Queues this node to be deleted at the end of the current frame. When deleted, all of its children are deleted as well, and all references to the node and its children become invalid.
         *  Unlike with [method Object.free], the node is not deleted instantly, and it can still be accessed before deletion. It is also safe to call [method queue_free] multiple times. Use [method Object.is_queued_for_deletion] to check if the node will be deleted at the end of the frame.
         *  [b]Note:[/b] The node will only be freed after all other deferred calls are finished. Using this method is not always the same as calling [method Object.free] through [method Object.call_deferred].
         */
        queue_free(): void
        /** Requests [method _ready] to be called again the next time the node enters the tree. Does [b]not[/b] immediately call [method _ready].
         *  [b]Note:[/b] This method only affects the current node. If the node's children also need to request ready, this method needs to be called for each one of them. When the node and its children enter the tree again, the order of [method _ready] callbacks will be the same as normal.
         */
        request_ready(): void
        /** Returns [code]true[/code] if the node is ready, i.e. it's inside scene tree and all its children are initialized.
         *  [method request_ready] resets it back to [code]false[/code].
         */
        is_node_ready(): boolean
        /** Sets the node's multiplayer authority to the peer with the given peer [param id]. The multiplayer authority is the peer that has authority over the node on the network. Defaults to peer ID 1 (the server). Useful in conjunction with [method rpc_config] and the [MultiplayerAPI].
         *  If [param recursive] is [code]true[/code], the given peer is recursively set as the authority for all children of this node.
         *  [b]Warning:[/b] This does [b]not[/b] automatically replicate the new authority to other peers. It is the developer's responsibility to do so. You may replicate the new authority's information using [member MultiplayerSpawner.spawn_function], an RPC, or a [MultiplayerSynchronizer]. Furthermore, the parent's authority does [b]not[/b] propagate to newly added children.
         */
        set_multiplayer_authority(id: number /*i64*/, recursive: boolean = true): void
        /** Returns the peer ID of the multiplayer authority for this node. See [method set_multiplayer_authority]. */
        get_multiplayer_authority(): number /*i64*/
        /** Returns [code]true[/code] if the local system is the multiplayer authority of this node. */
        is_multiplayer_authority(): boolean
        get_multiplayer(): MultiplayerAPI
        /** Changes the RPC configuration for the given [param method]. [param config] should either be [code]null[/code] to disable the feature (as by default), or a [Dictionary] containing the following entries:
         *  - [code]rpc_mode[/code]: see [enum MultiplayerAPI.RPCMode];
         *  - [code]transfer_mode[/code]: see [enum MultiplayerPeer.TransferMode];
         *  - [code]call_local[/code]: if [code]true[/code], the method will also be called locally;
         *  - [code]channel[/code]: an [int] representing the channel to send the RPC on.
         *  [b]Note:[/b] In GDScript, this method corresponds to the [annotation @GDScript.@rpc] annotation, with various parameters passed ([code]@rpc(any)[/code], [code]@rpc(authority)[/code]...). See also the [url=$DOCS_URL/tutorials/networking/high_level_multiplayer.html]high-level multiplayer[/url] tutorial.
         */
        rpc_config(method: StringName, config: any): void
        set_editor_description(editor_description: string): void
        get_editor_description(): string
        _set_import_path(import_path: NodePath): void
        _get_import_path(): NodePath
        set_unique_name_in_owner(enable: boolean): void
        is_unique_name_in_owner(): boolean
        _set_property_pinned(property: string, pinned: boolean): void
        /** Sends a remote procedure call request for the given [param method] to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [NodePath], including the exact same [member name]. Behavior depends on the RPC configuration for the given [param method] (see [method rpc_config] and [annotation @GDScript.@rpc]). By default, methods are not exposed to RPCs.
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.
         *  [b]Note:[/b] You can only safely use RPCs on clients after you received the [signal MultiplayerAPI.connected_to_server] signal from the [MultiplayerAPI]. You also need to keep track of the connection state, either by the [MultiplayerAPI] signals like [signal MultiplayerAPI.server_disconnected] or by checking ([code]get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED[/code]).
         */
        rpc(method: StringName, ...vargargs: any[]): GodotError
        /** Sends a [method rpc] to a specific peer identified by [param peer_id] (see [method MultiplayerPeer.set_target_peer]).
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.
         */
        rpc_id(peer_id: number /*i64*/, method: StringName, ...vargargs: any[]): GodotError
        /** Refreshes the warnings displayed for this node in the Scene dock. Use [method _get_configuration_warnings] to customize the warning messages to display. */
        update_configuration_warnings(): void
        /** This function is similar to [method Object.call_deferred] except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [constant NOTIFICATION_PROCESS] or [constant NOTIFICATION_PHYSICS_PROCESS], the [method _process] or [method _physics_process] or their internal versions are called. */
        call_deferred_thread_group(method: StringName, ...vargargs: any[]): any
        /** Similar to [method call_deferred_thread_group], but for setting properties. */
        set_deferred_thread_group(property: StringName, value: any): void
        /** Similar to [method call_deferred_thread_group], but for notifications. */
        notify_deferred_thread_group(what: number /*i64*/): void
        /** This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly. */
        call_thread_safe(method: StringName, ...vargargs: any[]): any
        /** Similar to [method call_thread_safe], but for setting properties. */
        set_thread_safe(property: StringName, value: any): void
        /** Similar to [method call_thread_safe], but for notifications. */
        notify_thread_safe(what: number /*i64*/): void
        _import_path: NodePath
        /** If [code]true[/code], the node can be accessed from any node sharing the same [member owner] or from the [member owner] itself, with special [code]%Name[/code] syntax in [method get_node].
         *  [b]Note:[/b] If another node with the same [member owner] shares the same [member name] as this node, the other node will no longer be accessible as unique.
         */
        unique_name_in_owner: boolean
        /** The original scene's file path, if the node has been instantiated from a [PackedScene] file. Only scene root nodes contains this. */
        scene_file_path: string
        /** The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [PackedScene], all the nodes it owns are also saved with it. 
         *  [b]Note:[/b] In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will [b]not[/b] be saved. To prevent this, remember to set the owner after calling [method add_child]. See also (see [member unique_name_in_owner])
         */
        owner: Node
        /** The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].
         *  [b]Note:[/b] Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.
         */
        readonly multiplayer: MultiplayerAPI
        /** The node's processing behavior (see [enum ProcessMode]). To check if the node is able to process, with the current mode and [member SceneTree.paused], use [method can_process]. */
        process_mode: number /*i64*/
        /** The node's execution order of the process callbacks ([method _process], [method _physics_process], and internal processing). Nodes whose priority value is [i]lower[/i] call their process callbacks first, regardless of tree order. */
        process_priority: number /*i64*/
        /** Similar to [member process_priority] but for [constant NOTIFICATION_PHYSICS_PROCESS], [method _physics_process] or the internal version. */
        process_physics_priority: number /*i64*/
        /** Set the process thread group for this node (basically, whether it receives [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS], [method _process] or [method _physics_process] (and the internal versions) on the main thread or in a sub-thread.
         *  By default, the thread group is [constant PROCESS_THREAD_GROUP_INHERIT], which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [member process_thread_group_order]). If the value is set is [constant PROCESS_THREAD_GROUP_SUB_THREAD], this thread group will occur on a sub thread (not the main thread), otherwise if set to [constant PROCESS_THREAD_GROUP_MAIN_THREAD] it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the [i]default thread group[/i]. This default group will process on the main thread and its group order is 0.
         *  During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [method Object.call_deferred], [method call_thread_safe], [method call_deferred_thread_group] and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).
         *  To better understand process thread groups, the idea is that any node set to any other value than [constant PROCESS_THREAD_GROUP_INHERIT] will include any child (and grandchild) nodes set to inherit into its process thread group. This means that the processing of all the nodes in the group will happen together, at the same time as the node including them.
         */
        process_thread_group: number /*i64*/
        /** Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example. */
        process_thread_group_order: number /*i64*/
        /** Set whether the current thread group will process messages (calls to [method call_deferred_thread_group] on threads, and whether it wants to receive them during regular process or physics process callbacks. */
        process_thread_messages: number /*i64*/
        /** An optional description to the node. It will be displayed as a tooltip when hovering over the node in the editor's Scene dock. */
        editor_description: string
        readonly ready: Signal
        readonly renamed: Signal
        readonly tree_entered: Signal
        readonly tree_exiting: Signal
        readonly tree_exited: Signal
        readonly child_entered_tree: Signal
        readonly child_exiting_tree: Signal
        readonly child_order_changed: Signal
        readonly replacing_by: Signal
    }
    /** A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and Z index. */
    class Node2D extends CanvasItem {
        set_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_skew(radians: number /*f64*/): void
        set_scale(scale: Vector2): void
        get_position(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_skew(): number /*f64*/
        get_scale(): Vector2
        /** Applies a rotation to the node, in radians, starting from its current rotation. */
        rotate(radians: number /*f64*/): void
        /** Applies a local translation on the node's X axis based on the [method Node._process]'s [param delta]. If [param scaled] is [code]false[/code], normalizes the movement. */
        move_local_x(delta: number /*f64*/, scaled: boolean = false): void
        /** Applies a local translation on the node's Y axis based on the [method Node._process]'s [param delta]. If [param scaled] is [code]false[/code], normalizes the movement. */
        move_local_y(delta: number /*f64*/, scaled: boolean = false): void
        /** Translates the node by the given [param offset] in local coordinates. */
        translate(offset: Vector2): void
        /** Adds the [param offset] vector to the node's global position. */
        global_translate(offset: Vector2): void
        /** Multiplies the current scale by the [param ratio] vector. */
        apply_scale(ratio: Vector2): void
        set_global_position(position: Vector2): void
        get_global_position(): Vector2
        set_global_rotation(radians: number /*f64*/): void
        set_global_rotation_degrees(degrees: number /*f64*/): void
        get_global_rotation(): number /*f64*/
        get_global_rotation_degrees(): number /*f64*/
        set_global_skew(radians: number /*f64*/): void
        get_global_skew(): number /*f64*/
        set_global_scale(scale: Vector2): void
        get_global_scale(): Vector2
        set_transform(xform: Transform2D): void
        set_global_transform(xform: Transform2D): void
        /** Rotates the node so it points towards the [param point], which is expected to use global coordinates. */
        look_at(point: Vector2): void
        /** Returns the angle between the node and the [param point] in radians.
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/node2d_get_angle_to.png]Illustration of the returned angle.[/url]
         */
        get_angle_to(point: Vector2): number /*f64*/
        /** Transforms the provided global position into a position in local coordinate space. The output will be local relative to the [Node2D] it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent. */
        to_local(global_point: Vector2): Vector2
        /** Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the [Node2D] it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position. */
        to_global(local_point: Vector2): Vector2
        /** Returns the [Transform2D] relative to this node's parent. */
        get_relative_transform_to_parent(parent: Node): Transform2D
        /** Position, relative to the node's parent. */
        position: Vector2
        /** Rotation in radians, relative to the node's parent.
         *  [b]Note:[/b] This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
         */
        rotation: number /*f64*/
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: number /*f64*/
        /** The node's scale. Unscaled value: [code](1, 1)[/code].
         *  [b]Note:[/b] Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.
         */
        scale: Vector2
        /** Slants the node.
         *  [b]Note:[/b] Skew is X axis only.
         */
        skew: number /*f64*/
        /** Local [Transform2D]. */
        transform: Transform2D
        /** Global position. */
        global_position: Vector2
        /** Global rotation in radians. */
        global_rotation: number /*f64*/
        /** Helper property to access [member global_rotation] in degrees instead of radians. */
        global_rotation_degrees: number /*f64*/
        /** Global scale. */
        global_scale: Vector2
        /** Global skew in radians. */
        global_skew: number /*f64*/
        /** Global [Transform2D]. */
        global_transform: Transform2D
    }
    namespace Node3D {
        enum RotationEditMode {
            ROTATION_EDIT_MODE_EULER = 0,
            ROTATION_EDIT_MODE_QUATERNION = 1,
            ROTATION_EDIT_MODE_BASIS = 2,
        }
    }
    /** Most basic 3D game object, parent of all 3D-related nodes. */
    class Node3D extends Node {
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        static readonly NOTIFICATION_ENTER_WORLD = 41
        static readonly NOTIFICATION_EXIT_WORLD = 42
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        set_transform(local: Transform3D): void
        get_transform(): Transform3D
        set_position(position: Vector3): void
        get_position(): Vector3
        set_rotation(euler_radians: Vector3): void
        get_rotation(): Vector3
        set_rotation_degrees(euler_degrees: Vector3): void
        get_rotation_degrees(): Vector3
        set_rotation_order(order: EulerOrder): void
        get_rotation_order(): EulerOrder
        set_rotation_edit_mode(edit_mode: Node3D.RotationEditMode): void
        get_rotation_edit_mode(): Node3D.RotationEditMode
        set_scale(scale: Vector3): void
        get_scale(): Vector3
        set_quaternion(quaternion: Quaternion): void
        get_quaternion(): Quaternion
        set_basis(basis: Basis): void
        get_basis(): Basis
        set_global_transform(global: Transform3D): void
        get_global_transform(): Transform3D
        set_global_position(position: Vector3): void
        get_global_position(): Vector3
        set_global_basis(basis: Basis): void
        get_global_basis(): Basis
        set_global_rotation(euler_radians: Vector3): void
        get_global_rotation(): Vector3
        set_global_rotation_degrees(euler_degrees: Vector3): void
        get_global_rotation_degrees(): Vector3
        /** Returns the parent [Node3D], or [code]null[/code] if no parent exists, the parent is not of type [Node3D], or [member top_level] is [code]true[/code].
         *  [b]Note:[/b] Calling this method is not equivalent to [code]get_parent() as Node3D[/code], which does not take [member top_level] into account.
         */
        get_parent_node_3d(): Node3D
        /** Sets whether the node ignores notification that its transformation (global or local) changed. */
        set_ignore_transform_notification(enabled: boolean): void
        set_as_top_level(enable: boolean): void
        is_set_as_top_level(): boolean
        /** Sets whether the node uses a scale of [code](1, 1, 1)[/code] or its local transformation scale. Changes to the local transformation scale are preserved. */
        set_disable_scale(disable: boolean): void
        /** Returns whether this node uses a scale of [code](1, 1, 1)[/code] or its local transformation scale. */
        is_scale_disabled(): boolean
        /** Returns the current [World3D] resource this [Node3D] node is registered to. */
        get_world_3d(): World3D
        /** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
        force_update_transform(): void
        set_visibility_parent(path: NodePath): void
        get_visibility_parent(): NodePath
        /** Updates all the [Node3D] gizmos attached to this node. */
        update_gizmos(): void
        /** Attach an editor gizmo to this [Node3D].
         *  [b]Note:[/b] The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].
         */
        add_gizmo(gizmo: Node3DGizmo): void
        /** Returns all the gizmos attached to this [Node3D]. */
        get_gizmos(): Array
        /** Clear all gizmos attached to this [Node3D]. */
        clear_gizmos(): void
        /** Set subgizmo selection for this node in the editor.
         *  [b]Note:[/b] The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].
         */
        set_subgizmo_selection(gizmo: Node3DGizmo, id: number /*i64*/, transform: Transform3D): void
        /** Clears subgizmo selection for this node in the editor. Useful when subgizmo IDs become invalid after a property change. */
        clear_subgizmo_selection(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        /** Returns [code]true[/code] if the node is present in the [SceneTree], its [member visible] property is [code]true[/code] and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree. */
        is_visible_in_tree(): boolean
        /** Enables rendering of this node. Changes [member visible] to [code]true[/code]. */
        show(): void
        /** Disables rendering of this node. Changes [member visible] to [code]false[/code]. */
        hide(): void
        /** Sets whether the node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
        set_notify_local_transform(enable: boolean): void
        /** Returns whether node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
        is_local_transform_notification_enabled(): boolean
        /** Sets whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default, unless it is in the editor context and it has a valid gizmo. */
        set_notify_transform(enable: boolean): void
        /** Returns whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default. */
        is_transform_notification_enabled(): boolean
        /** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. */
        rotate(axis: Vector3, angle: number /*f64*/): void
        /** Rotates the global (world) transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in global coordinate system. */
        global_rotate(axis: Vector3, angle: number /*f64*/): void
        /** Scales the global (world) transformation by the given [Vector3] scale factors. */
        global_scale(scale: Vector3): void
        /** Moves the global (world) transformation by [Vector3] offset. The offset is in global coordinate system. */
        global_translate(offset: Vector3): void
        /** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in object-local coordinate system. */
        rotate_object_local(axis: Vector3, angle: number /*f64*/): void
        /** Scales the local transformation by given 3D scale factors in object-local coordinate system. */
        scale_object_local(scale: Vector3): void
        /** Changes the node's position by the given offset [Vector3] in local space. */
        translate_object_local(offset: Vector3): void
        /** Rotates the local transformation around the X axis by angle in radians. */
        rotate_x(angle: number /*f64*/): void
        /** Rotates the local transformation around the Y axis by angle in radians. */
        rotate_y(angle: number /*f64*/): void
        /** Rotates the local transformation around the Z axis by angle in radians. */
        rotate_z(angle: number /*f64*/): void
        /** Changes the node's position by the given offset [Vector3].
         *  Note that the translation [param offset] is affected by the node's scale, so if scaled by e.g. [code](10, 1, 1)[/code], a translation by an offset of [code](2, 0, 0)[/code] would actually add 20 ([code]2 * 10[/code]) to the X coordinate.
         */
        translate(offset: Vector3): void
        /** Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's [Transform3D]. */
        orthonormalize(): void
        /** Reset all transformations for this node (sets its [Transform3D] to the identity matrix). */
        set_identity(): void
        /** Rotates the node so that the local forward axis (-Z, [constant Vector3.FORWARD]) points toward the [param target] position.
         *  The local up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.
         *  The [param target] position cannot be the same as the node's position, the [param up] vector cannot be zero, and the direction from the node's position to the [param target] vector cannot be parallel to the [param up] vector.
         *  Operations take place in global space, which means that the node must be in the scene tree.
         *  If [param use_model_front] is [code]true[/code], the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
         */
        look_at(target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        /** Moves the node to the specified [param position], and then rotates the node to point toward the [param target] as per [method look_at]. Operations take place in global space. */
        look_at_from_position(position: Vector3, target: Vector3, up: Vector3 = Vector3.ZERO, use_model_front: boolean = false): void
        /** Transforms [param global_point] from world space to this node's local space. */
        to_local(global_point: Vector3): Vector3
        /** Transforms [param local_point] from this node's local space to world space. */
        to_global(local_point: Vector3): Vector3
        /** Local space [Transform3D] of this node, with respect to the parent node. */
        transform: Transform3D
        /** World3D space (global) [Transform3D] of this node. */
        global_transform: Transform3D
        /** Local position or translation of this node relative to the parent. This is equivalent to [code]transform.origin[/code]. */
        position: Vector3
        /** Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the [member rotation_order] property.
         *  [b]Note:[/b] In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
         *  [b]Note:[/b] This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
         */
        rotation: Vector3
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: Vector3
        /** Access to the node rotation as a [Quaternion]. This property is ideal for tweening complex rotations. */
        quaternion: Quaternion
        /** Direct access to the 3x3 basis of the [member transform] property. */
        basis: Basis
        /** Scale part of the local transformation.
         *  [b]Note:[/b] Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.
         *  [b]Note:[/b] Not all nodes are visually scaled by the [member scale] property. For example, [Light3D]s are not visually affected by [member scale].
         */
        scale: Vector3
        /** Specify how rotation (and scale) will be presented in the editor. */
        rotation_edit_mode: number /*i64*/
        /** Specify the axis rotation order of the [member rotation] property. The final orientation is constructed by rotating the Euler angles in the order specified by this property. */
        rotation_order: number /*i64*/
        /** If [code]true[/code], the node will not inherit its transformations from its parent. Node transformations are only in global space. */
        top_level: boolean
        /** Global position of this node. This is equivalent to [code]global_transform.origin[/code]. */
        global_position: Vector3
        /** Global basis of this node. This is equivalent to [code]global_transform.basis[/code]. */
        global_basis: Basis
        /** Rotation part of the global transformation in radians, specified in terms of YXZ-Euler angles in the format (X angle, Y angle, Z angle).
         *  [b]Note:[/b] In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
         */
        global_rotation: Vector3
        /** Helper property to access [member global_rotation] in degrees instead of radians. */
        global_rotation_degrees: Vector3
        /** If [code]true[/code], this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return [code]true[/code]). */
        visible: boolean
        /** Defines the visibility range parent for this node and its subtree. The visibility parent must be a GeometryInstance3D. Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [member GeometryInstance3D.visibility_range_begin]. Nodes hidden via the [member Node3D.visible] property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its ancestors into account. */
        visibility_parent: NodePath
        readonly visibility_changed: Signal
    }
    class Node3DEditor extends VBoxContainer {
        _get_editor_data(_unnamed_arg0: Object): Object
        _request_gizmo(_unnamed_arg0: Object): void
        _request_gizmo_for_id(_unnamed_arg0: number /*i64*/): void
        _set_subgizmo_selection(_unnamed_arg0: Object, _unnamed_arg1: Node3DGizmo, _unnamed_arg2: number /*i64*/, _unnamed_arg3: Transform3D): void
        _clear_subgizmo_selection(_unnamed_arg0: Object): void
        _refresh_menu_icons(): void
        readonly transform_key_request: Signal
        readonly item_lock_status_changed: Signal
        readonly item_group_status_changed: Signal
    }
    class Node3DEditorPlugin extends EditorPlugin {
    }
    class Node3DEditorViewport extends Control {
        update_transform_gizmo_view(): void
        readonly toggle_maximize_view: Signal
        readonly clicked: Signal
    }
    class Node3DEditorViewportContainer extends Container {
    }
    /** Abstract class to expose editor gizmos for [Node3D]. */
    class Node3DGizmo extends RefCounted {
    }
    class NodeDock extends VBoxContainer {
    }
    /** Abstract base class for noise generators. */
    class Noise extends Resource {
        /** Returns the 1D noise value at the given (x) coordinate. */
        get_noise_1d(x: number /*f64*/): number /*f64*/
        /** Returns the 2D noise value at the given position. */
        get_noise_2d(x: number /*f64*/, y: number /*f64*/): number /*f64*/
        /** Returns the 2D noise value at the given position. */
        get_noise_2dv(v: Vector2): number /*f64*/
        /** Returns the 3D noise value at the given position. */
        get_noise_3d(x: number /*f64*/, y: number /*f64*/, z: number /*f64*/): number /*f64*/
        /** Returns the 3D noise value at the given position. */
        get_noise_3dv(v: Vector3): number /*f64*/
        /** Returns an [Image] containing 2D noise values.
         *  [b]Note:[/b] With [param normalize] set to [code]false[/code], the default implementation expects the noise generator to return values in the range [code]-1.0[/code] to [code]1.0[/code].
         */
        get_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, normalize: boolean = true): Image
        /** Returns an [Image] containing seamless 2D noise values.
         *  [b]Note:[/b] With [param normalize] set to [code]false[/code], the default implementation expects the noise generator to return values in the range [code]-1.0[/code] to [code]1.0[/code].
         */
        get_seamless_image(width: number /*i64*/, height: number /*i64*/, invert: boolean = false, in_3d_space: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Image
        /** Returns an [Array] of [Image]s containing 3D noise values for use with [method ImageTexture3D.create].
         *  [b]Note:[/b] With [param normalize] set to [code]false[/code], the default implementation expects the noise generator to return values in the range [code]-1.0[/code] to [code]1.0[/code].
         */
        get_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, normalize: boolean = true): Array
        /** Returns an [Array] of [Image]s containing seamless 3D noise values for use with [method ImageTexture3D.create].
         *  [b]Note:[/b] With [param normalize] set to [code]false[/code], the default implementation expects the noise generator to return values in the range [code]-1.0[/code] to [code]1.0[/code].
         */
        get_seamless_image_3d(width: number /*i64*/, height: number /*i64*/, depth: number /*i64*/, invert: boolean = false, skirt: number /*f64*/ = 0.1, normalize: boolean = true): Array
    }
    class NoiseEditorInspectorPlugin extends EditorInspectorPlugin {
    }
    class NoiseEditorPlugin extends EditorPlugin {
    }
    /** A 2D texture filled with noise generated by a [Noise] object. */
    class NoiseTexture2D extends Texture2D {
        _update_texture(): void
        _generate_texture(): Image
        _thread_done(image: Image): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_in_3d_space(enable: boolean): void
        is_in_3d_space(): boolean
        set_generate_mipmaps(invert: boolean): void
        is_generating_mipmaps(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_as_normal_map(as_normal_map: boolean): void
        is_normal_map(): boolean
        set_bump_strength(bump_strength: number /*f64*/): void
        get_bump_strength(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        /** Width of the generated texture (in pixels). */
        width: number /*i64*/
        /** Height of the generated texture (in pixels). */
        height: number /*i64*/
        /** If [code]true[/code], inverts the noise texture. White becomes black, black becomes white. */
        invert: boolean
        /** Determines whether the noise image is calculated in 3D space. May result in reduced contrast. */
        in_3d_space: boolean
        /** Determines whether mipmaps are generated for this texture. Enabling this results in less texture aliasing in the distance, at the cost of increasing memory usage by roughly 33% and making the noise texture generation take longer.
         *  [b]Note:[/b] [member generate_mipmaps] requires mipmap filtering to be enabled on the material using the [NoiseTexture2D] to have an effect.
         */
        generate_mipmaps: boolean
        /** If [code]true[/code], a seamless texture is requested from the [Noise] resource.
         *  [b]Note:[/b] Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.
         *  [b]Note:[/b] The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.
         */
        seamless: boolean
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.
         *  [b]Note:[/b] If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.
         */
        seamless_blend_skirt: number /*f64*/
        /** If [code]true[/code], the resulting texture contains a normal map created from the original noise interpreted as a bump map. */
        as_normal_map: boolean
        /** Strength of the bump maps used in this texture. A higher value will make the bump maps appear larger while a lower value will make them appear softer. */
        bump_strength: number /*f64*/
        /** If [code]true[/code], the noise image coming from the noise generator is normalized to the range [code]0.0[/code] to [code]1.0[/code].
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.
         */
        normalize: boolean
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        color_ramp: Gradient
        /** The instance of the [Noise] object. */
        noise: Noise
    }
    /** A 3D texture filled with noise generated by a [Noise] object. */
    class NoiseTexture3D extends Texture3D {
        _update_texture(): void
        _generate_texture(): Array
        _thread_done(image: Array): void
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_depth(depth: number /*i64*/): void
        set_invert(invert: boolean): void
        get_invert(): boolean
        set_seamless(seamless: boolean): void
        get_seamless(): boolean
        set_seamless_blend_skirt(seamless_blend_skirt: number /*f64*/): void
        get_seamless_blend_skirt(): number /*f64*/
        set_normalize(normalize: boolean): void
        is_normalized(): boolean
        set_color_ramp(gradient: Gradient): void
        get_color_ramp(): Gradient
        set_noise(noise: Noise): void
        get_noise(): Noise
        /** Width of the generated texture (in pixels). */
        width: number /*i64*/
        /** Height of the generated texture (in pixels). */
        height: number /*i64*/
        /** Depth of the generated texture (in pixels). */
        depth: number /*i64*/
        /** If [code]true[/code], inverts the noise texture. White becomes black, black becomes white. */
        invert: boolean
        /** If [code]true[/code], a seamless texture is requested from the [Noise] resource.
         *  [b]Note:[/b] Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.
         *  [b]Note:[/b] The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.
         */
        seamless: boolean
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.
         *  [b]Note:[/b] If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.
         */
        seamless_blend_skirt: number /*f64*/
        /** If [code]true[/code], the noise image coming from the noise generator is normalized to the range [code]0.0[/code] to [code]1.0[/code].
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.
         */
        normalize: boolean
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        color_ramp: Gradient
        /** The instance of the [Noise] object. */
        noise: Noise
    }
    /** A PBR (Physically Based Rendering) material to be used on 3D objects. Uses an ORM texture. */
    class ORMMaterial3D extends BaseMaterial3D {
    }
    class ORMMaterial3DConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace Object {
        enum ConnectFlags {
            CONNECT_DEFERRED = 1,
            CONNECT_PERSIST = 2,
            CONNECT_ONE_SHOT = 4,
            CONNECT_REFERENCE_COUNTED = 8,
        }
    }
    /** Base class for all other classes in the engine. */
    class Object {
        static readonly NOTIFICATION_POSTINITIALIZE = 0
        static readonly NOTIFICATION_PREDELETE = 1
        static readonly NOTIFICATION_EXTENSION_RELOADED = 2
        /* gdvirtual */ free(): void
        /* gdvirtual */ _notification(what: number /*i64*/): void
        /* gdvirtual */ _set(property: StringName, value: any): boolean
        /* gdvirtual */ _get(property: StringName): void
        /* gdvirtual */ _get_property_list(): Array
        /* gdvirtual */ _validate_property(property: Dictionary): void
        /* gdvirtual */ _property_can_revert(property: StringName): boolean
        /* gdvirtual */ _property_get_revert(property: StringName): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _to_string(): string
        /** Returns the object's built-in class name, as a [String]. See also [method is_class].
         *  [b]Note:[/b] This method ignores [code]class_name[/code] declarations. If this object's script has defined a [code]class_name[/code], the base, built-in class name is returned instead.
         */
        get_class(): string
        /** Returns [code]true[/code] if the object inherits from the given [param class]. See also [method get_class].
         *  
         *  [b]Note:[/b] This method ignores [code]class_name[/code] declarations in the object's script.
         */
        is_class(class_: string): boolean
        /** Assigns [param value] to the given [param property]. If the property does not exist or the given [param value]'s type doesn't match, nothing happens.
         *  
         *  [b]Note:[/b] In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the [code]PropertyName[/code] class to avoid allocating a new [StringName] on each call.
         */
        set(property: StringName, value: any): void
        /** Returns the [Variant] value of the given [param property]. If the [param property] does not exist, this method returns [code]null[/code].
         *  
         *  [b]Note:[/b] In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the [code]PropertyName[/code] class to avoid allocating a new [StringName] on each call.
         */
        get(property: StringName): any
        /** Assigns a new [param value] to the property identified by the [param property_path]. The path should be a [NodePath] relative to this object, and can use the colon character ([code]:[/code]) to access nested properties.
         *  
         *  [b]Note:[/b] In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the [code]PropertyName[/code] class to avoid allocating a new [StringName] on each call.
         */
        set_indexed(property_path: NodePath, value: any): void
        /** Gets the object's property indexed by the given [param property_path]. The path should be a [NodePath] relative to the current object and can use the colon character ([code]:[/code]) to access nested properties.
         *  [b]Examples:[/b] [code]"position:x"[/code] or [code]"material:next_pass:blend_mode"[/code].
         *  
         *  [b]Note:[/b] In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the [code]PropertyName[/code] class to avoid allocating a new [StringName] on each call.
         *  [b]Note:[/b] This method does not support actual paths to nodes in the [SceneTree], only sub-property paths. In the context of nodes, use [method Node.get_node_and_resource] instead.
         */
        get_indexed(property_path: NodePath): any
        /** Returns the object's property list as an [Array] of dictionaries. Each [Dictionary] contains the following entries:
         *  - [code]name[/code] is the property's name, as a [String];
         *  - [code]class_name[/code] is an empty [StringName], unless the property is [constant TYPE_OBJECT] and it inherits from a class;
         *  - [code]type[/code] is the property's type, as an [int] (see [enum Variant.Type]);
         *  - [code]hint[/code] is [i]how[/i] the property is meant to be edited (see [enum PropertyHint]);
         *  - [code]hint_string[/code] depends on the hint (see [enum PropertyHint]);
         *  - [code]usage[/code] is a combination of [enum PropertyUsageFlags].
         *  [b]Note:[/b] In GDScript, all class members are treated as properties. In C# and GDExtension, it may be necessary to explicitly mark class members as Godot properties using decorators or attributes.
         */
        get_property_list(): Array
        /** Returns this object's methods and their signatures as an [Array] of dictionaries. Each [Dictionary] contains the following entries:
         *  - [code]name[/code] is the name of the method, as a [String];
         *  - [code]args[/code] is an [Array] of dictionaries representing the arguments;
         *  - [code]default_args[/code] is the default arguments as an [Array] of variants;
         *  - [code]flags[/code] is a combination of [enum MethodFlags];
         *  - [code]id[/code] is the method's internal identifier [int];
         *  - [code]return[/code] is the returned value, as a [Dictionary];
         *  [b]Note:[/b] The dictionaries of [code]args[/code] and [code]return[/code] are formatted identically to the results of [method get_property_list], although not all entries are used.
         */
        get_method_list(): Array
        /** Returns [code]true[/code] if the given [param property] has a custom default value. Use [method property_get_revert] to get the [param property]'s default value.
         *  [b]Note:[/b] This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_can_revert] to customize the default value. If [method _property_can_revert] is not implemented, this method returns [code]false[/code].
         */
        property_can_revert(property: StringName): boolean
        /** Returns the custom default value of the given [param property]. Use [method property_can_revert] to check if the [param property] has a custom default value.
         *  [b]Note:[/b] This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_get_revert] to customize the default value. If [method _property_get_revert] is not implemented, this method returns [code]null[/code].
         */
        property_get_revert(property: StringName): any
        /** Sends the given [param what] notification to all classes inherited by the object, triggering calls to [method _notification], starting from the highest ancestor (the [Object] class) and going down to the object's script.
         *  If [param reversed] is [code]true[/code], the call order is reversed.
         *  
         */
        notification(what: number /*i64*/, reversed: boolean = false): void
        /** Returns a [String] representing the object. Defaults to [code]"<ClassName#RID>"[/code]. Override [method _to_string] to customize the string representation of the object. */
        to_string(): string
        /** Returns the object's unique instance ID. This ID can be saved in [EncodedObjectAsID], and can be used to retrieve this object instance with [method @GlobalScope.instance_from_id]. */
        get_instance_id(): number /*i64*/
        /** Attaches [param script] to the object, and instantiates it. As a result, the script's [method _init] is called. A [Script] is used to extend the object's functionality.
         *  If a script already exists, its instance is detached, and its property values and state are lost. Built-in property values are still kept.
         */
        set_script(script: any): void
        /** Returns the object's [Script] instance, or [code]null[/code] if no script is attached. */
        get_script(): any
        /** Adds or changes the entry [param name] inside the object's metadata. The metadata [param value] can be any [Variant], although some types cannot be serialized correctly.
         *  If [param value] is [code]null[/code], the entry is removed. This is the equivalent of using [method remove_meta]. See also [method has_meta] and [method get_meta].
         *  [b]Note:[/b] A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
         *  [b]Note:[/b] Metadata that has a name starting with an underscore ([code]_[/code]) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
         */
        set_meta(name: StringName, value: any): void
        /** Removes the given entry [param name] from the object's metadata. See also [method has_meta], [method get_meta] and [method set_meta].
         *  [b]Note:[/b] A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
         *  [b]Note:[/b] Metadata that has a name starting with an underscore ([code]_[/code]) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
         */
        remove_meta(name: StringName): void
        /** Returns the object's metadata value for the given entry [param name]. If the entry does not exist, returns [param default]. If [param default] is [code]null[/code], an error is also generated.
         *  [b]Note:[/b] A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
         *  [b]Note:[/b] Metadata that has a name starting with an underscore ([code]_[/code]) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
         */
        get_meta(name: StringName, default_: any = <any> {} /*compound.type from nil*/): any
        /** Returns [code]true[/code] if a metadata entry is found with the given [param name]. See also [method get_meta], [method set_meta] and [method remove_meta].
         *  [b]Note:[/b] A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
         *  [b]Note:[/b] Metadata that has a name starting with an underscore ([code]_[/code]) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
         */
        has_meta(name: StringName): boolean
        /** Returns the object's metadata entry names as a [PackedStringArray]. */
        get_meta_list(): Array
        /** Adds a user-defined [param signal]. Optional arguments for the signal can be added as an [Array] of dictionaries, each defining a [code]name[/code] [String] and a [code]type[/code] [int] (see [enum Variant.Type]). See also [method has_user_signal].
         *  
         */
        add_user_signal(signal: string, arguments_: Array = <any> {} /*compound.type from 28([object Object])*/): void
        /** Returns [code]true[/code] if the given user-defined [param signal] name exists. Only signals added with [method add_user_signal] are included. */
        has_user_signal(signal: StringName): boolean
        /** Emits the given [param signal] by name. The signal must exist, so it should be a built-in signal of this class or one of its inherited classes, or a user-defined signal (see [method add_user_signal]). This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
         *  Returns [constant ERR_UNAVAILABLE] if [param signal] does not exist or the parameters are invalid.
         *  
         *  [b]Note:[/b] In C#, [param signal] must be in snake_case when referring to built-in Godot signals. Prefer using the names exposed in the [code]SignalName[/code] class to avoid allocating a new [StringName] on each call.
         */
        emit_signal(signal: StringName, ...vargargs: any[]): GodotError
        /** Calls the [param method] on the object and returns the result. This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
         *  
         *  [b]Note:[/b] In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]MethodName[/code] class to avoid allocating a new [StringName] on each call.
         */
        call(method: StringName, ...vargargs: any[]): any
        /** Calls the [param method] on the object during idle time. Always returns null, [b]not[/b] the method's result.
         *  Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.
         *  This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
         *  
         *  See also [method Callable.call_deferred].
         *  [b]Note:[/b] In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]MethodName[/code] class to avoid allocating a new [StringName] on each call.
         *  [b]Note:[/b] If you're looking to delay the function call by a frame, refer to the [signal SceneTree.process_frame] and [signal SceneTree.physics_frame] signals.
         *  
         */
        call_deferred(method: StringName, ...vargargs: any[]): any
        /** Assigns [param value] to the given [param property], at the end of the current frame. This is equivalent to calling [method set] through [method call_deferred].
         *  
         *  [b]Note:[/b] In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the [code]PropertyName[/code] class to avoid allocating a new [StringName] on each call.
         */
        set_deferred(property: StringName, value: any): void
        /** Calls the [param method] on the object and returns the result. Unlike [method call], this method expects all parameters to be contained inside [param arg_array].
         *  
         *  [b]Note:[/b] In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]MethodName[/code] class to avoid allocating a new [StringName] on each call.
         */
        callv(method: StringName, arg_array: Array): any
        /** Returns [code]true[/code] if the given [param method] name exists in the object.
         *  [b]Note:[/b] In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]MethodName[/code] class to avoid allocating a new [StringName] on each call.
         */
        has_method(method: StringName): boolean
        /** Returns [code]true[/code] if the given [param signal] name exists in the object.
         *  [b]Note:[/b] In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]SignalName[/code] class to avoid allocating a new [StringName] on each call.
         */
        has_signal(signal: StringName): boolean
        /** Returns the list of existing signals as an [Array] of dictionaries.
         *  [b]Note:[/b] Due of the implementation, each [Dictionary] is formatted very similarly to the returned values of [method get_method_list].
         */
        get_signal_list(): Array
        /** Returns an [Array] of connections for the given [param signal] name. Each connection is represented as a [Dictionary] that contains three entries:
         *  - [code skip-lint]signal[/code] is a reference to the [Signal];
         *  - [code]callable[/code] is a reference to the connected [Callable];
         *  - [code]flags[/code] is a combination of [enum ConnectFlags].
         */
        get_signal_connection_list(signal: StringName): Array
        /** Returns an [Array] of signal connections received by this object. Each connection is represented as a [Dictionary] that contains three entries:
         *  - [code]signal[/code] is a reference to the [Signal];
         *  - [code]callable[/code] is a reference to the [Callable];
         *  - [code]flags[/code] is a combination of [enum ConnectFlags].
         */
        get_incoming_connections(): Array
        /** Connects a [param signal] by name to a [param callable]. Optional [param flags] can be also added to configure the connection's behavior (see [enum ConnectFlags] constants).
         *  A signal can only be connected once to the same [Callable]. If the signal is already connected, this method returns [constant ERR_INVALID_PARAMETER] and pushes an error message, unless the signal is connected with [constant CONNECT_REFERENCE_COUNTED]. To prevent this, use [method is_connected] first to check for existing connections.
         *  If the [param callable]'s object is freed, the connection will be lost.
         *  [b]Examples with recommended syntax:[/b]
         *  Connecting signals is one of the most common operations in Godot and the API gives many options to do so, which are described further down. The code block below shows the recommended approach.
         *  
         *  [b][code skip-lint]Object.connect()[/code] or [code skip-lint]Signal.connect()[/code]?[/b]
         *  As seen above, the recommended method to connect signals is not [method Object.connect]. The code block below shows the four options for connecting signals, using either this legacy method or the recommended [method Signal.connect], and using either an implicit [Callable] or a manually defined one.
         *  
         *  While all options have the same outcome ([code]button[/code]'s [signal BaseButton.button_down] signal will be connected to [code]_on_button_down[/code]), [b]option 3[/b] offers the best validation: it will print a compile-time error if either the [code]button_down[/code] [Signal] or the [code]_on_button_down[/code] [Callable] are not defined. On the other hand, [b]option 2[/b] only relies on string names and will only be able to validate either names at runtime: it will print a runtime error if [code]"button_down"[/code] doesn't correspond to a signal, or if [code]"_on_button_down"[/code] is not a registered method in the object [code]self[/code]. The main reason for using options 1, 2, or 4 would be if you actually need to use strings (e.g. to connect signals programmatically based on strings read from a configuration file). Otherwise, option 3 is the recommended (and fastest) method.
         *  [b]Binding and passing parameters:[/b]
         *  The syntax to bind parameters is through [method Callable.bind], which returns a copy of the [Callable] with its parameters bound.
         *  When calling [method emit_signal], the signal parameters can be also passed. The examples below show the relationship between these signal parameters and bound parameters.
         *  
         */
        connect(signal: StringName, callable: Callable, flags: number /*i64*/ = 0): GodotError
        /** Disconnects a [param signal] by name from a given [param callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
        disconnect(signal: StringName, callable: Callable): void
        /** Returns [code]true[/code] if a connection exists between the given [param signal] name and [param callable].
         *  [b]Note:[/b] In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the [code]SignalName[/code] class to avoid allocating a new [StringName] on each call.
         */
        is_connected(signal: StringName, callable: Callable): boolean
        /** If set to [code]true[/code], the object becomes unable to emit signals. As such, [method emit_signal] and signal connections will not work, until it is set to [code]false[/code]. */
        set_block_signals(enable: boolean): void
        /** Returns [code]true[/code] if the object is blocking its signals from being emitted. See [method set_block_signals]. */
        is_blocking_signals(): boolean
        /** Emits the [signal property_list_changed] signal. This is mainly used to refresh the editor, so that the Inspector and editor plugins are properly updated. */
        notify_property_list_changed(): void
        /** If set to [code]true[/code], allows the object to translate messages with [method tr] and [method tr_n]. Enabled by default. See also [method can_translate_messages]. */
        set_message_translation(enable: boolean): void
        /** Returns [code]true[/code] if the object is allowed to translate messages with [method tr] and [method tr_n]. See also [method set_message_translation]. */
        can_translate_messages(): boolean
        /** Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.
         *  If [method can_translate_messages] is [code]false[/code], or no translation is available, this method returns the [param message] without changes. See [method set_message_translation].
         *  For detailed examples, see [url=$DOCS_URL/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].
         */
        tr(message: StringName, context: StringName = ''): string
        /** Translates a [param message] or [param plural_message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.
         *  If [method can_translate_messages] is [code]false[/code], or no translation is available, this method returns [param message] or [param plural_message], without changes. See [method set_message_translation].
         *  The [param n] is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.
         *  For detailed examples, see [url=$DOCS_URL/tutorials/i18n/localization_using_gettext.html]Localization using gettext[/url].
         *  [b]Note:[/b] Negative and [float] numbers may not properly apply to some countable subjects. It's recommended handling these cases with [method tr].
         */
        tr_n(message: StringName, plural_message: StringName, n: number /*i64*/, context: StringName = ''): string
        /** Returns [code]true[/code] if the [method Node.queue_free] method was called for the object. */
        is_queued_for_deletion(): boolean
        /** If this method is called during [constant NOTIFICATION_PREDELETE], this object will reject being freed and will remain allocated. This is mostly an internal function used for error handling to avoid the user from freeing objects when they are not intended to. */
        cancel_free(): void
        readonly script_changed: Signal
        readonly property_list_changed: Signal
    }
    /** Occluder shape resource for use with occlusion culling in [OccluderInstance3D]. */
    class Occluder3D extends Resource {
        /** Returns the occluder shape's vertex positions. */
        get_vertices(): PackedVector3Array
        /** Returns the occluder shape's vertex indices. */
        get_indices(): PackedInt32Array
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas. */
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
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the [b]Bake Occluders[/b] button at the top of the editor.
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].
         */
        occluder: Occluder3D
        /** The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with [i]opaque[/i] materials are taken into account for the occluder baking.
         *  To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].
         */
        bake_mask: number /*i64*/
        /** The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.
         *  The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of [code]0.01[/code] will act conservatively, and will keep geometry [i]perceptually[/i] unaffected in the occlusion culling buffer. Depending on the scene, a value of [code]0.01[/code] may still simplify the mesh noticeably compared to disabling simplification entirely.
         *  Setting this to [code]0.0[/code] disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.
         *  [b]Note:[/b] This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.
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
            CULL_DISABLED = 0,
            CULL_CLOCKWISE = 1,
            CULL_COUNTER_CLOCKWISE = 2,
        }
    }
    /** Defines a 2D polygon for LightOccluder2D. */
    class OccluderPolygon2D extends Resource {
        set_closed(closed: boolean): void
        is_closed(): boolean
        set_cull_mode(cull_mode: OccluderPolygon2D.CullMode): void
        get_cull_mode(): OccluderPolygon2D.CullMode
        set_polygon(polygon: PackedVector2Array): void
        get_polygon(): PackedVector2Array
        /** If [code]true[/code], closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction. */
        closed: boolean
        /** The culling mode to use. */
        cull_mode: number /*i64*/
        /** A [Vector2] array with the index for polygon's vertices positions.
         *  [b]Note:[/b] The returned value is a copy of the underlying array, rather than a reference.
         */
        polygon: PackedVector2Array
    }
    /** A [MultiplayerPeer] which is always connected and acts as a server. */
    class OfflineMultiplayerPeer extends MultiplayerPeer {
    }
    /** A sequence of Ogg packets. */
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
    class OggPacketSequencePlayback extends RefCounted {
    }
    namespace OmniLight3D {
        enum ShadowMode {
            SHADOW_DUAL_PARABOLOID = 0,
            SHADOW_CUBE = 1,
        }
    }
    /** Omnidirectional light, such as a light bulb or a candle. */
    class OmniLight3D extends Light3D {
        set_shadow_mode(mode: OmniLight3D.ShadowMode): void
        get_shadow_mode(): OmniLight3D.ShadowMode
        /** See [enum ShadowMode]. */
        omni_shadow_mode: number /*i64*/
    }
    /** Makes the OpenXR API available for GDExtension. */
    class OpenXRAPIExtension extends RefCounted {
        /** Returns the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrInstance.html]XrInstance[/url] created during the initialization of the OpenXR API. */
        get_instance(): number /*i64*/
        /** Returns the id of the system, which is a [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSystemId.html]XrSystemId[/url] cast to an integer. */
        get_system_id(): number /*i64*/
        /** Returns the OpenXR session, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSession.html]XrSession[/url] cast to an integer. */
        get_session(): number /*i64*/
        /** Creates a [Transform3D] from an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrPosef.html]XrPosef[/url]. */
        transform_from_pose(pose: number /*i64*/): Transform3D
        /** Returns [code]true[/code] if the provided [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] (cast to an integer) is successful. Otherwise returns [code]false[/code] and prints the [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url] converted to a string, with the specified additional information. */
        xr_result(result: number /*i64*/, format: string, args: Array): boolean
        /** Returns [code]true[/code] if OpenXR is enabled. */
        static openxr_is_enabled(check_run_in_editor: boolean): boolean
        /** Returns the function pointer of the OpenXR function with the specified name, cast to an integer. If the function with the given name does not exist, the method returns [code]0[/code].
         *  [b]Note:[/b] [code]openxr/util.h[/code] contains utility macros for acquiring OpenXR functions, e.g. [code]GDEXTENSION_INIT_XR_FUNC_V(xrCreateAction)[/code].
         */
        get_instance_proc_addr(name: string): number /*i64*/
        /** Returns an error string for the given [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html]XrResult[/url]. */
        get_error_string(result: number /*i64*/): string
        /** Returns the name of the specified swapchain format. */
        get_swapchain_format_name(swapchain_format: number /*i64*/): string
        /** Returns [code]true[/code] if OpenXR is initialized. */
        is_initialized(): boolean
        /** Returns [code]true[/code] if OpenXR is running ([url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/xrBeginSession.html]xrBeginSession[/url] was successfully called and the swapchains were created). */
        is_running(): boolean
        /** Returns the play space, which is an [url=https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSpace.html]XrSpace[/url] cast to an integer. */
        get_play_space(): number /*i64*/
        /** Returns the timing for the next frame. */
        get_next_frame_time(): number /*i64*/
        /** Returns [code]true[/code] if OpenXR is initialized for rendering with an XR viewport. */
        can_render(): boolean
    }
    namespace OpenXRAction {
        enum ActionType {
            OPENXR_ACTION_BOOL = 0,
            OPENXR_ACTION_FLOAT = 1,
            OPENXR_ACTION_VECTOR2 = 2,
            OPENXR_ACTION_POSE = 3,
        }
    }
    /** An OpenXR action. */
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
    /** Collection of [OpenXRActionSet] and [OpenXRInteractionProfile] resources for the OpenXR module. */
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
    /** Collection of [OpenXRAction] resources that make up an action set. */
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
    /** Allows clients to implement OpenXR extensions with GDExtension. */
    class OpenXRExtensionWrapperExtension extends Object {
        /* gdvirtual */ _get_requested_extensions(): Dictionary
        /* gdvirtual */ _set_system_properties_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_instance_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_session_create_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _set_swapchain_create_info_and_get_next_pointer(next_pointer: number /*i64*/): number /*i64*/
        /* gdvirtual */ _on_register_metadata(): void
        /* gdvirtual */ _on_before_instance_created(): void
        /* gdvirtual */ _on_instance_created(instance: number /*i64*/): void
        /* gdvirtual */ _on_instance_destroyed(): void
        /* gdvirtual */ _on_session_created(session: number /*i64*/): void
        /* gdvirtual */ _on_process(): void
        /* gdvirtual */ _on_pre_render(): void
        /* gdvirtual */ _on_session_destroyed(): void
        /* gdvirtual */ _on_state_idle(): void
        /* gdvirtual */ _on_state_ready(): void
        /* gdvirtual */ _on_state_synchronized(): void
        /* gdvirtual */ _on_state_visible(): void
        /* gdvirtual */ _on_state_focused(): void
        /* gdvirtual */ _on_state_stopping(): void
        /* gdvirtual */ _on_state_loss_pending(): void
        /* gdvirtual */ _on_state_exiting(): void
        /* gdvirtual */ _on_event_polled(event: number /*i64*/): boolean
        /** Returns the created [OpenXRAPIExtension], which can be used to access the OpenXR API. */
        get_openxr_api(): OpenXRAPIExtension
        /** Registers the extension. This should happen at core module initialization level. */
        register_extension_wrapper(): void
    }
    namespace OpenXRHand {
        enum Hands {
            HAND_LEFT = 0,
            HAND_RIGHT = 1,
            HAND_MAX = 2,
        }
        enum MotionRange {
            MOTION_RANGE_UNOBSTRUCTED = 0,
            MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            MOTION_RANGE_MAX = 2,
        }
    }
    /** Node supporting finger tracking in OpenXR. */
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
    /** Defines a binding between an [OpenXRAction] and an XR input or output. */
    class OpenXRIPBinding extends Resource {
        set_action(action: OpenXRAction): void
        get_action(): OpenXRAction
        /** Get the number of input/output paths in this binding. */
        get_path_count(): number /*i64*/
        set_paths(paths: PackedStringArray): void
        get_paths(): PackedStringArray
        /** Returns [code]true[/code] if this input/output path is part of this binding. */
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
    /** Suggested bindings object for OpenXR. */
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
    /** Meta class registering supported devices in OpenXR. */
    class OpenXRInteractionProfileMetadata extends Object {
        /** Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps. */
        register_profile_rename(old_name: string, new_name: string): void
        /** Registers a top level path to which profiles can be bound. For instance [code]/user/hand/left[/code] refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register [code]/user/body/vest[/code].
         *  [param display_name] is the name shown to the user. [param openxr_path] is the top level path being registered. [param openxr_extension_name] is optional and ensures the top level path is only used if the specified extension is available/enabled.
         *  When a top level path ends up being bound by OpenXR, a [XRPositionalTracker] is instantiated to manage the state of the device.
         */
        register_top_level_path(display_name: string, openxr_path: string, openxr_extension_name: string): void
        /** Registers an interaction profile using its OpenXR designation (e.g. [code]/interaction_profiles/khr/simple_controller[/code] is the profile for OpenXR's simple controller profile).
         *  [param display_name] is the description shown to the user. [param openxr_path] is the interaction profile path being registered. [param openxr_extension_name] optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.
         */
        register_interaction_profile(display_name: string, openxr_path: string, openxr_extension_name: string): void
        /** Registers an input/output path for the given [param interaction_profile]. The profile should previously have been registered using [method register_interaction_profile]. [param display_name] is the description shown to the user. [param toplevel_path] specifies the bind path this input/output can be bound to (e.g. [code]/user/hand/left[/code] or [code]/user/hand/right[/code]). [param openxr_path] is the action input/output being registered (e.g. [code]/user/hand/left/input/aim/pose[/code]). [param openxr_extension_name] restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. [code]XR_EXT_palm_pose[/code] that introduces [code]…/input/palm_ext/pose[/code] input paths). [param action_type] defines the type of input or output provided by OpenXR. */
        register_io_path(interaction_profile: string, display_name: string, toplevel_path: string, openxr_path: string, openxr_extension_name: string, action_type: OpenXRAction.ActionType): void
    }
    namespace OpenXRInterface {
        enum Hand {
            HAND_LEFT = 0,
            HAND_RIGHT = 1,
            HAND_MAX = 2,
        }
        enum HandMotionRange {
            HAND_MOTION_RANGE_UNOBSTRUCTED = 0,
            HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER = 1,
            HAND_MOTION_RANGE_MAX = 2,
        }
        enum HandJoints {
            HAND_JOINT_PALM = 0,
            HAND_JOINT_WRIST = 1,
            HAND_JOINT_THUMB_METACARPAL = 2,
            HAND_JOINT_THUMB_PROXIMAL = 3,
            HAND_JOINT_THUMB_DISTAL = 4,
            HAND_JOINT_THUMB_TIP = 5,
            HAND_JOINT_INDEX_METACARPAL = 6,
            HAND_JOINT_INDEX_PROXIMAL = 7,
            HAND_JOINT_INDEX_INTERMEDIATE = 8,
            HAND_JOINT_INDEX_DISTAL = 9,
            HAND_JOINT_INDEX_TIP = 10,
            HAND_JOINT_MIDDLE_METACARPAL = 11,
            HAND_JOINT_MIDDLE_PROXIMAL = 12,
            HAND_JOINT_MIDDLE_INTERMEDIATE = 13,
            HAND_JOINT_MIDDLE_DISTAL = 14,
            HAND_JOINT_MIDDLE_TIP = 15,
            HAND_JOINT_RING_METACARPAL = 16,
            HAND_JOINT_RING_PROXIMAL = 17,
            HAND_JOINT_RING_INTERMEDIATE = 18,
            HAND_JOINT_RING_DISTAL = 19,
            HAND_JOINT_RING_TIP = 20,
            HAND_JOINT_LITTLE_METACARPAL = 21,
            HAND_JOINT_LITTLE_PROXIMAL = 22,
            HAND_JOINT_LITTLE_INTERMEDIATE = 23,
            HAND_JOINT_LITTLE_DISTAL = 24,
            HAND_JOINT_LITTLE_TIP = 25,
            HAND_JOINT_MAX = 26,
        }
        enum HandJointFlags {
            HAND_JOINT_NONE = 0,
            HAND_JOINT_ORIENTATION_VALID = 1,
            HAND_JOINT_ORIENTATION_TRACKED = 2,
            HAND_JOINT_POSITION_VALID = 4,
            HAND_JOINT_POSITION_TRACKED = 8,
            HAND_JOINT_LINEAR_VELOCITY_VALID = 16,
            HAND_JOINT_ANGULAR_VELOCITY_VALID = 32,
        }
    }
    /** Our OpenXR interface. */
    class OpenXRInterface extends XRInterface {
        get_display_refresh_rate(): number /*f64*/
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        get_render_target_size_multiplier(): number /*f64*/
        set_render_target_size_multiplier(multiplier: number /*f64*/): void
        /** Returns [code]true[/code] if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.
         *  [b]Note:[/b] This feature is only available on the compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [member Viewport.vrs_mode] to [code]VRS_XR[/code] on desktop.
         */
        is_foveation_supported(): boolean
        get_foveation_level(): number /*i64*/
        set_foveation_level(foveation_level: number /*i64*/): void
        get_foveation_dynamic(): boolean
        set_foveation_dynamic(foveation_dynamic: boolean): void
        /** Returns [code]true[/code] if the given action set is active. */
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
        /** Returns [code]true[/code] if OpenXR's hand tracking is supported and enabled.
         *  [b]Note:[/b] This only returns a valid value after OpenXR has been initialized.
         */
        is_hand_tracking_supported(): boolean
        /** Returns the capabilities of the eye gaze interaction extension.
         *  [b]Note:[/b] This only returns a valid value after OpenXR has been initialized.
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
        readonly session_begun: Signal
        readonly session_stopping: Signal
        readonly session_focussed: Signal
        readonly session_visible: Signal
        readonly pose_recentered: Signal
    }
    /** An optimized translation, used by default for CSV Translations. */
    class OptimizedTranslation extends Translation {
        /** Generates and sets an optimized translation from the given [Translation] resource. */
        generate(from: Translation): void
    }
    /** A button that brings up a dropdown with selectable options when pressed. */
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
        /** Returns [code]true[/code] if the item at index [param idx] is disabled. */
        is_item_disabled(idx: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at index [param idx] is marked as a separator. */
        is_item_separator(idx: number /*i64*/): boolean
        /** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
        add_separator(text: string = ''): void
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.
         *  Passing [code]-1[/code] as the index deselects any currently selected item.
         */
        select(idx: number /*i64*/): void
        get_selected(): number /*i64*/
        /** Returns the ID of the selected item, or [code]-1[/code] if no item is selected. */
        get_selected_id(): number /*i64*/
        /** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
        get_selected_metadata(): any
        /** Removes the item at index [param idx]. */
        remove_item(idx: number /*i64*/): void
        _select_int(idx: number /*i64*/): void
        /** Returns the [PopupMenu] contained in this button.
         *  [b]Warning:[/b] This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
         */
        get_popup(): PopupMenu
        /** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using [code]get_popup().popup()[/code]. */
        show_popup(): void
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        /** Returns [code]true[/code] if this button contains at least one item which is not disabled, or marked as a separator. */
        has_selectable_items(): boolean
        /** Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is [code]true[/code], the items will be searched in reverse order.
         *  Returns [code]-1[/code] if no item is found.
         */
        get_selectable_item(from_last: boolean = false): number /*i64*/
        set_fit_to_longest_item(fit: boolean): void
        is_fit_to_longest_item(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        /** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
        set_disable_shortcuts(disabled: boolean): void
        /** The number of items to select from. */
        item_count: any /*Items,popup/item_*/
        /** The index of the currently selected item, or [code]-1[/code] if no item is selected. */
        selected: number /*i64*/
        /** If [code]true[/code], minimum size will be determined by the longest item's text, instead of the currently selected one's.
         *  [b]Note:[/b] For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.
         */
        fit_to_longest_item: boolean
        /** If [code]true[/code], the currently selected item can be selected again. */
        allow_reselect: boolean
        readonly item_selected: Signal
        readonly item_focused: Signal
    }
    class OrphanResourcesDialog extends ConfirmationDialog {
    }
    /** Creates packages that can be loaded into a running project. */
    class PCKPacker extends RefCounted {
        /** Creates a new PCK file with the name [param pck_name]. The [code].pck[/code] file extension isn't added automatically, so it should be part of [param pck_name] (even though it's not required). */
        pck_start(pck_name: string, alignment: number /*i64*/ = 32, key: string = '0000000000000000000000000000000000000000000000000000000000000000', encrypt_directory: boolean = false): GodotError
        /** Adds the [param source_path] file to the current PCK package at the [param pck_path] internal path (should start with [code]res://[/code]). */
        add_file(pck_path: string, source_path: string, encrypt: boolean = false): GodotError
        /** Writes the files specified using all [method add_file] calls since the last flush. If [param verbose] is [code]true[/code], a list of files added will be printed to the console for easier debugging. */
        flush(verbose: boolean = false): GodotError
    }
    /** Efficiently packs and serializes [Array] or [Dictionary]. */
    class PackedDataContainer extends Resource {
        _set_data(data: PackedByteArray): void
        _get_data(): PackedByteArray
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
        /** Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.
         *  [b]Note:[/b] Subsequent calls to this method will overwrite the existing data.
         */
        pack(value: any): GodotError
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        __data__: PackedByteArray
    }
    /** An internal class used by [PackedDataContainer] to pack nested arrays and dictionaries. */
    class PackedDataContainerRef extends RefCounted {
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): number /*i64*/
        _iter_init(_unnamed_arg0: Array): any
        _iter_get(_unnamed_arg0: any): any
        _iter_next(_unnamed_arg0: Array): any
    }
    namespace PackedScene {
        enum GenEditState {
            GEN_EDIT_STATE_DISABLED = 0,
            GEN_EDIT_STATE_INSTANCE = 1,
            GEN_EDIT_STATE_MAIN = 2,
            GEN_EDIT_STATE_MAIN_INHERITED = 3,
        }
    }
    /** An abstraction of a serialized scene. */
    class PackedScene extends Resource {
        /** Pack will ignore any sub-nodes not owned by given node. See [member Node.owner]. */
        pack(path: Node): GodotError
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(edit_state: PackedScene.GenEditState = 0): Node
        /** Returns [code]true[/code] if the scene file has nodes. */
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
    /** Abstraction and base class for packet-based protocols. */
    class PacketPeer extends RefCounted {
        /** Gets a Variant. If [param allow_objects] is [code]true[/code], decoding objects is allowed.
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
         *  [b]Warning:[/b] Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
         */
        get_var(allow_objects: boolean = false): any
        /** Sends a [Variant] as a packet. If [param full_objects] is [code]true[/code], encoding objects is allowed (and can potentially include code).
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
            STATUS_DISCONNECTED = 0,
            STATUS_HANDSHAKING = 1,
            STATUS_CONNECTED = 2,
            STATUS_ERROR = 3,
            STATUS_ERROR_HOSTNAME_MISMATCH = 4,
        }
    }
    /** DTLS packet peer. */
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
    class PacketPeerExtension extends PacketPeer {
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
    }
    /** Wrapper to use a PacketPeer over a StreamPeer. */
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
    /** UDP packet peer. */
    class PacketPeerUDP extends PacketPeer {
        /** Binds this [PacketPeerUDP] to the specified [param port] and [param bind_address] with a buffer size [param recv_buf_size], allowing it to receive incoming packets.
         *  If [param bind_address] is set to [code]"*"[/code] (default), the peer will be bound on all available addresses (both IPv4 and IPv6).
         *  If [param bind_address] is set to [code]"0.0.0.0"[/code] (for IPv4) or [code]"::"[/code] (for IPv6), the peer will be bound to all available addresses matching that IP type.
         *  If [param bind_address] is set to any valid address (e.g. [code]"192.168.1.101"[/code], [code]"::1"[/code], etc), the peer will only be bound to the interface with that addresses (or fail if no interface with the given address exists).
         */
        bind(port: number /*i64*/, bind_address: string = '*', recv_buf_size: number /*i64*/ = 65536): GodotError
        /** Closes the [PacketPeerUDP]'s underlying UDP socket. */
        close(): void
        /** Waits for a packet to arrive on the bound address. See [method bind].
         *  [b]Note:[/b] [method wait] can't be interrupted once it has been called. This can be worked around by allowing the other party to send a specific "death pill" packet like this:
         *  
         */
        wait(): GodotError
        /** Returns whether this [PacketPeerUDP] is bound to an address and can receive packets. */
        is_bound(): boolean
        /** Calling this method connects this UDP peer to the given [param host]/[param port] pair. UDP is in reality connectionless, so this option only means that incoming packets from different addresses are automatically discarded, and that outgoing packets are always sent to the connected address (future calls to [method set_dest_address] are not allowed). This method does not send any data to the remote peer, to do that, use [method PacketPeer.put_var] or [method PacketPeer.put_packet] as usual. See also [UDPServer].
         *  [b]Note:[/b] Connecting to the remote peer does not help to protect from malicious attacks like IP spoofing, etc. Think about using an encryption technique like TLS or DTLS if you feel like your application is transferring sensitive information.
         */
        connect_to_host(host: string, port: number /*i64*/): GodotError
        /** Returns [code]true[/code] if the UDP socket is open and has been connected to a remote address. See [method connect_to_host]. */
        is_socket_connected(): boolean
        /** Returns the IP of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_ip(): string
        /** Returns the port of the remote peer that sent the last packet(that was received with [method PacketPeer.get_packet] or [method PacketPeer.get_var]). */
        get_packet_port(): number /*i64*/
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        /** Sets the destination address and port for sending packets and variables. A hostname will be resolved using DNS if needed.
         *  [b]Note:[/b] [method set_broadcast_enabled] must be enabled before sending packets to a broadcast address (e.g. [code]255.255.255.255[/code]).
         */
        set_dest_address(host: string, port: number /*i64*/): GodotError
        /** Enable or disable sending of broadcast packets (e.g. [code]set_dest_address("255.255.255.255", 4343)[/code]. This option is disabled by default.
         *  [b]Note:[/b] Some Android devices might require the [code]CHANGE_WIFI_MULTICAST_STATE[/code] permission and this option to be enabled to receive broadcast packets too.
         */
        set_broadcast_enabled(enabled: boolean): void
        /** Joins the multicast group specified by [param multicast_address] using the interface identified by [param interface_name].
         *  You can join the same multicast group with multiple interfaces. Use [method IP.get_local_interfaces] to know which are available.
         *  [b]Note:[/b] Some Android devices might require the [code]CHANGE_WIFI_MULTICAST_STATE[/code] permission for multicast to work.
         */
        join_multicast_group(multicast_address: string, interface_name: string): GodotError
        /** Removes the interface identified by [param interface_name] from the multicast group specified by [param multicast_address]. */
        leave_multicast_group(multicast_address: string, interface_name: string): GodotError
    }
    /** A GUI control that displays a [StyleBox]. */
    class Panel extends Control {
    }
    /** A container that keeps its child controls within the area of a [StyleBox]. */
    class PanelContainer extends Container {
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama. */
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
    /** A node used to create a parallax scrolling background. */
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
        /** If [code]true[/code], elements in [ParallaxLayer] child aren't affected by the zoom level of the camera. */
        scroll_ignore_camera_zoom: boolean
    }
    /** A parallax scrolling layer to be used with [ParallaxBackground]. */
    class ParallaxLayer extends Node2D {
        set_motion_scale(scale: Vector2): void
        get_motion_scale(): Vector2
        set_motion_offset(offset: Vector2): void
        get_motion_offset(): Vector2
        set_mirroring(mirror: Vector2): void
        get_mirroring(): Vector2
        /** Multiplies the ParallaxLayer's motion. If an axis is set to [code]0[/code], it will not scroll. */
        motion_scale: Vector2
        /** The ParallaxLayer's offset relative to the parent ParallaxBackground's [member ParallaxBackground.scroll_offset]. */
        motion_offset: Vector2
        /** The interval, in pixels, at which the [ParallaxLayer] is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to [code]0[/code], the [ParallaxLayer] will be drawn only once along that direction.
         *  [b]Note:[/b] If you want the repetition to pixel-perfect match a [Texture2D] displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [Sprite2D] scaled to [code]0.5[/code] to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to [code]Vector2(300, 0)[/code].
         *  [b]Note:[/b] If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [ParallaxBackground]'s position, not the layer's own position. So, if you use mirroring, [b]do not[/b] change the [ParallaxLayer] position relative to its parent. Instead, if you need to adjust the background's position, set the [member CanvasLayer.offset] property in the parent [ParallaxBackground].
         *  [b]Note:[/b] Despite the name, the layer will not be mirrored, it will only be repeated.
         */
        motion_mirroring: Vector2
    }
    namespace ParticleProcessMaterial {
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
            PARAM_RADIAL_VELOCITY = 15,
            PARAM_DIRECTIONAL_VELOCITY = 16,
            PARAM_SCALE_OVER_VELOCITY = 17,
            PARAM_MAX = 18,
            PARAM_TURB_VEL_INFLUENCE = 13,
            PARAM_TURB_INIT_DISPLACEMENT = 14,
            PARAM_TURB_INFLUENCE_OVER_LIFE = 12,
        }
        enum ParticleFlags {
            PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
            PARTICLE_FLAG_ROTATE_Y = 1,
            PARTICLE_FLAG_DISABLE_Z = 2,
            PARTICLE_FLAG_DAMPING_AS_FRICTION = 3,
            PARTICLE_FLAG_MAX = 4,
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
        enum SubEmitterMode {
            SUB_EMITTER_DISABLED = 0,
            SUB_EMITTER_CONSTANT = 1,
            SUB_EMITTER_AT_END = 2,
            SUB_EMITTER_AT_COLLISION = 3,
            SUB_EMITTER_MAX = 4,
        }
        enum CollisionMode {
            COLLISION_DISABLED = 0,
            COLLISION_RIGID = 1,
            COLLISION_HIDE_ON_CONTACT = 2,
            COLLISION_MAX = 3,
        }
    }
    /** Holds a particle configuration for [GPUParticles2D] or [GPUParticles3D] nodes. */
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
        /** If [code]true[/code], enables the specified particle flag. See [enum ParticleFlags] for options. */
        set_particle_flag(particle_flag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        /** Returns [code]true[/code] if the specified particle flag is enabled. See [enum ParticleFlags] for options. */
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
        /** Particle lifetime randomness ratio. The equation for the lifetime of a particle is [code]lifetime * (1.0 - randf() * lifetime_randomness)[/code]. For example, a [member lifetime_randomness] of [code]0.4[/code] scales the lifetime between [code]0.6[/code] to [code]1.0[/code] of its original value. */
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
         *  [b]Note:[/b] [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member emission_color_texture] will have no visible effect.
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
        /** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. */
        spread: number /*f64*/
        /** Amount of [member spread] along the Y axis. */
        flatness: number /*f64*/
        /** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
        velocity_limit_curve: CurveTexture
        /** Gravity applied to every particle. */
        gravity: Vector3
        /** If [code]true[/code], interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
        attractor_interaction_enabled: boolean
        /** Each particle's initial color. If the [GPUParticles2D]'s [code]texture[/code] is defined, it will be multiplied by this color.
         *  [b]Note:[/b] [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color] will have no visible effect.
         */
        color: Color
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).
         *  [b]Note:[/b] [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color_ramp] will have no visible effect.
         */
        color_ramp: GradientTexture1D
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).
         *  [b]Note:[/b] [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] [i]must[/i] be [code]true[/code]. For a [ShaderMaterial], [code]ALBEDO *= COLOR.rgb;[/code] must be inserted in the shader's [code]fragment()[/code] function. Otherwise, [member color_initial_ramp] will have no visible effect.
         */
        color_initial_ramp: GradientTexture1D
        /** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime. */
        alpha_curve: CurveTexture
        /** Each particle's color will be multiplied by this [CurveTexture] over its lifetime.
         *  [b]Note:[/b] This property won't have a visible effect unless the render material is marked as unshaded.
         */
        emission_curve: CurveTexture
        /** If [code]true[/code], enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.
         *  [b]Note:[/b] Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.
         */
        turbulence_enabled: boolean
        /** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
        turbulence_noise_strength: number /*f64*/
        /** This value controls the overall scale/frequency of the turbulence noise pattern.
         *  A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.
         */
        turbulence_noise_scale: number /*f64*/
        /** A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.
         *  The default value of [code]Vector3(0, 0, 0)[/code] turns off the scrolling.
         */
        turbulence_noise_speed: Vector3
        /** The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.
         *  A value of 0.0 will result in a fixed pattern.
         */
        turbulence_noise_speed_random: number /*f64*/
        /** The particles' collision mode.
         *  [b]Note:[/b] 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].
         *  [b]Note:[/b] 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.
         */
        collision_mode: number /*i64*/
        /** The particles' friction. Values range from [code]0[/code] (frictionless) to [code]1[/code] (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_friction: number /*f64*/
        /** The particles' bounciness. Values range from [code]0[/code] (no bounce) to [code]1[/code] (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        collision_bounce: number /*f64*/
        /** If [code]true[/code], [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
        collision_use_scale: boolean
        /** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
        sub_emitter_mode: number /*i64*/
        /** The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.
         *  [b]Note:[/b] This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
         */
        sub_emitter_frequency: number /*f64*/
        /** The amount of particles to spawn from the subemitter node when the particle expires.
         *  [b]Note:[/b] This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
         */
        sub_emitter_amount_at_end: number /*i64*/
        /** The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.
         *  [b]Note:[/b] This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the [i]subemitter node[/i] (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
         */
        sub_emitter_amount_at_collision: number /*i64*/
        /** If [code]true[/code], the subemitter inherits the parent particle's velocity when it spawns. */
        sub_emitter_keep_velocity: boolean
    }
    class ParticleProcessMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow. */
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
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow. */
    class Path3D extends Node3D {
        set_curve(curve: Curve3D): void
        get_curve(): Curve3D
        /** A [Curve3D] describing the path. */
        curve: Curve3D
        readonly curve_changed: Signal
    }
    class Path3DEditorPlugin extends EditorPlugin {
    }
    class Path3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Point sampler for a [Path2D]. */
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
        /** If [code]true[/code], this node rotates to follow the path, with the +X direction facing forward on the path. */
        rotates: boolean
        /** If [code]true[/code], the position between two cached points is interpolated cubically, and linearly otherwise.
         *  The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.
         */
        cubic_interp: boolean
        /** If [code]true[/code], any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
    }
    namespace PathFollow3D {
        enum RotationMode {
            ROTATION_NONE = 0,
            ROTATION_Y = 1,
            ROTATION_XY = 2,
            ROTATION_XYZ = 3,
            ROTATION_ORIENTED = 4,
        }
    }
    /** Point sampler for a [Path3D]. */
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
        /** If [code]true[/code], the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
        use_model_front: boolean
        /** If [code]true[/code], the position between two cached points is interpolated cubically, and linearly otherwise.
         *  The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.
         */
        cubic_interp: boolean
        /** If [code]true[/code], any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        loop: boolean
        /** If [code]true[/code], the tilt property of [Curve3D] takes effect. */
        tilt_enabled: boolean
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics. */
    class PhysicalBone2D extends RigidBody2D {
        /** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
        get_joint(): Joint2D
        get_auto_configure_joint(): boolean
        set_auto_configure_joint(auto_configure_joint: boolean): void
        set_simulate_physics(simulate_physics: boolean): void
        get_simulate_physics(): boolean
        /** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When [code]true[/code], the PhysicalBone2D node is using physics. */
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
        /** If [code]true[/code], the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
        auto_configure_joint: boolean
        /** If [code]true[/code], the [PhysicalBone2D] will start simulating using physics. If [code]false[/code], the [PhysicalBone2D] will follow the transform of the [Bone2D] node.
         *  [b]Note:[/b] To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.
         */
        simulate_physics: boolean
        /** If [code]true[/code], the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
        follow_bone_when_simulating: boolean
    }
    namespace PhysicalBone3D {
        enum DampMode {
            DAMP_MODE_COMBINE = 0,
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
    /** A physics body used to make bones in a [Skeleton3D] react to physics. */
    class PhysicalBone3D extends PhysicsBody3D {
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
        /** The body's friction, from [code]0[/code] (frictionless) to [code]1[/code] (max friction). */
        friction: number /*f64*/
        /** The body's bounciness. Values range from [code]0[/code] (no bounce) to [code]1[/code] (full bounciness).
         *  [b]Note:[/b] Even with [member bounce] set to [code]1.0[/code], some energy will be lost over time due to linear and angular damping. To have a [PhysicalBone3D] that preserves all its energy over time, set [member bounce] to [code]1.0[/code], [member linear_damp_mode] to [constant DAMP_MODE_REPLACE], [member linear_damp] to [code]0.0[/code], [member angular_damp_mode] to [constant DAMP_MODE_REPLACE], and [member angular_damp] to [code]0.0[/code].
         */
        bounce: number /*f64*/
        /** This is multiplied by the global 3D gravity setting found in [b]Project > Project Settings > Physics > 3d[/b] to produce the body's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
        gravity_scale: number /*f64*/
        /** If [code]true[/code], internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
        custom_integrator: boolean
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        linear_damp_mode: number /*i64*/
        /** Damps the body's movement. By default, the body will use the [b]Default Linear Damp[/b] in [b]Project > Project Settings > Physics > 3d[/b] or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.
         */
        linear_damp: number /*f64*/
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        angular_damp_mode: number /*i64*/
        /** Damps the body's rotation. By default, the body will use the [b]Default Angular Damp[/b] in [b]Project > Project Settings > Physics > 3d[/b] or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.
         */
        angular_damp: number /*f64*/
        /** The body's linear velocity in units per second. Can be used sporadically, but [b]don't set this every frame[/b], because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        linear_velocity: Vector3
        /** The PhysicalBone3D's rotational velocity in [i]radians[/i] per second. */
        angular_velocity: Vector3
        /** If [code]true[/code], the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
        can_sleep: boolean
    }
    class PhysicalBone3DEditorPlugin extends EditorPlugin {
    }
    class PhysicalBone3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties. */
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
        /** Controls the direction of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url]. A value of [code]1[/code] means that when light hits a particle it's passing through straight forward. A value of [code]-1[/code] means that all light is scatter backwards. */
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
        /** If [code]true[/code], enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        use_debanding: boolean
        /** [Texture2D] for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day. */
        night_sky: Texture2D
    }
    class PhysicalSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** Abstract base class for 2D game objects affected by physics. */
    class PhysicsBody2D extends CollisionObject2D {
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using [code]delta[/code].
         *  Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.
         *  If [param test_only] is [code]true[/code], the body does not move but the would-be collision information is given.
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).
         *  If [param recovery_as_collision] is [code]true[/code], any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.
         */
        move_and_collide(motion: Vector2, test_only: boolean = false, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): KinematicCollision2D
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using [code]delta[/code].
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns [code]true[/code] if a collision would stop the body from moving along the whole path.
         *  [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).
         *  If [param recovery_as_collision] is [code]true[/code], any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would [i]touch[/i] any other bodies.
         */
        test_move(from: Transform2D, motion: Vector2, collision: KinematicCollision2D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.08, recovery_as_collision: boolean = false): boolean
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        get_collision_exceptions(): Array
        /** Adds a body to the list of bodies that this body can't collide with. */
        add_collision_exception_with(body: Node): void
        /** Removes a body from the list of bodies that this body can't collide with. */
        remove_collision_exception_with(body: Node): void
    }
    /** Abstract base class for 3D game objects affected by physics. */
    class PhysicsBody3D extends CollisionObject3D {
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using [code]delta[/code].
         *  The body will stop if it collides. Returns a [KinematicCollision3D], which contains information about the collision when stopped, or when touching another body along the motion.
         *  If [param test_only] is [code]true[/code], the body does not move but the would-be collision information is given.
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).
         *  If [param recovery_as_collision] is [code]true[/code], any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.
         *  [param max_collisions] allows to retrieve more than one collision result.
         */
        move_and_collide(motion: Vector3, test_only: boolean = false, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): KinematicCollision3D
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using [code]delta[/code].
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform3D], then tries to move the body along the vector [param motion]. Returns [code]true[/code] if a collision would stop the body from moving along the whole path.
         *  [param collision] is an optional object of type [KinematicCollision3D], which contains additional information about the collision when stopped, or when touching another body along the motion.
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).
         *  If [param recovery_as_collision] is [code]true[/code], any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would [i]touch[/i] any other bodies.
         *  [param max_collisions] allows to retrieve more than one collision result.
         */
        test_move(from: Transform3D, motion: Vector3, collision: KinematicCollision3D = <any> {} /*compound.type from nil*/, safe_margin: number /*f64*/ = 0.001, recovery_as_collision: boolean = false, max_collisions: number /*i64*/ = 1): boolean
        /** Locks or unlocks the specified linear or rotational [param axis] depending on the value of [param lock]. */
        set_axis_lock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        /** Returns [code]true[/code] if the specified linear or rotational [param axis] is locked. */
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
         *  [b]Note:[/b] [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].
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
         *  [b]Note:[/b] [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].
         */
        apply_torque(torque: number /*f64*/): void
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with [code]constant_force = Vector2(0, 0)[/code].
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.
         */
        add_constant_central_force(force: Vector2 = Vector2.ZERO): void
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with [code]constant_force = Vector2(0, 0)[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        add_constant_force(force: Vector2, position: Vector2 = Vector2.ZERO): void
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = 0[/code]. */
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
         *  [b]Note:[/b] By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody2D.contact_monitor].
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
        /** If [code]true[/code], this body is currently sleeping (not active). */
        sleeping: boolean
        /** The body's transformation matrix. */
        transform: Transform2D
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations. */
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        /* gdvirtual */ _get_total_gravity(): Vector2
        /* gdvirtual */ _get_total_linear_damp(): number /*f64*/
        /* gdvirtual */ _get_total_angular_damp(): number /*f64*/
        /* gdvirtual */ _get_center_of_mass(): Vector2
        /* gdvirtual */ _get_center_of_mass_local(): Vector2
        /* gdvirtual */ _get_inverse_mass(): number /*f64*/
        /* gdvirtual */ _get_inverse_inertia(): number /*f64*/
        /* gdvirtual */ _set_linear_velocity(velocity: Vector2): void
        /* gdvirtual */ _get_linear_velocity(): Vector2
        /* gdvirtual */ _set_angular_velocity(velocity: number /*f64*/): void
        /* gdvirtual */ _get_angular_velocity(): number /*f64*/
        /* gdvirtual */ _set_transform(transform: Transform2D): void
        /* gdvirtual */ _get_transform(): Transform2D
        /* gdvirtual */ _get_velocity_at_local_position(local_position: Vector2): Vector2
        /* gdvirtual */ _apply_central_impulse(impulse: Vector2): void
        /* gdvirtual */ _apply_impulse(impulse: Vector2, position: Vector2): void
        /* gdvirtual */ _apply_torque_impulse(impulse: number /*f64*/): void
        /* gdvirtual */ _apply_central_force(force: Vector2): void
        /* gdvirtual */ _apply_force(force: Vector2, position: Vector2): void
        /* gdvirtual */ _apply_torque(torque: number /*f64*/): void
        /* gdvirtual */ _add_constant_central_force(force: Vector2): void
        /* gdvirtual */ _add_constant_force(force: Vector2, position: Vector2): void
        /* gdvirtual */ _add_constant_torque(torque: number /*f64*/): void
        /* gdvirtual */ _set_constant_force(force: Vector2): void
        /* gdvirtual */ _get_constant_force(): Vector2
        /* gdvirtual */ _set_constant_torque(torque: number /*f64*/): void
        /* gdvirtual */ _get_constant_torque(): number /*f64*/
        /* gdvirtual */ _set_sleep_state(enabled: boolean): void
        /* gdvirtual */ _is_sleeping(): boolean
        /* gdvirtual */ _get_contact_count(): number /*i64*/
        /* gdvirtual */ _get_contact_local_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_local_normal(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_local_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_local_velocity_at_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_collider(contact_idx: number /*i64*/): RID
        /* gdvirtual */ _get_contact_collider_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_collider_id(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_object(contact_idx: number /*i64*/): Object
        /* gdvirtual */ _get_contact_collider_shape(contact_idx: number /*i64*/): number /*i64*/
        /* gdvirtual */ _get_contact_collider_velocity_at_position(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_contact_impulse(contact_idx: number /*i64*/): Vector2
        /* gdvirtual */ _get_step(): number /*f64*/
        /* gdvirtual */ _integrate_forces(): void
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
         *  [b]Note:[/b] [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].
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
         *  [b]Note:[/b] [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].
         */
        apply_torque(torque: Vector3): void
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with [code]constant_force = Vector3(0, 0, 0)[/code].
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.
         */
        add_constant_central_force(force: Vector3 = new Vector3(0, 0, 0)): void
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with [code]constant_force = Vector3(0, 0, 0)[/code].
         *  [param position] is the offset from the body origin in global coordinates.
         */
        add_constant_force(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = Vector3(0, 0, 0)[/code]. */
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
         *  [b]Note:[/b] By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody3D.contact_monitor].
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
        /** If [code]true[/code], this body is currently sleeping (not active). */
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
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
         *  [b]Note:[/b] [ConcavePolygonShape2D]s and [CollisionPolygon2D]s in [code]Segments[/code] build mode are not solid shapes. Therefore, they will not be detected.
         */
        intersect_point(parameters: PhysicsPointQueryParameters2D, max_results: number /*i64*/ = 32): Array
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters2D]. The returned object is a dictionary with the following fields:
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]normal[/code]: The object's surface normal at the intersection point, or [code]Vector2(0, 0)[/code] if the ray starts inside the shape and [member PhysicsRayQueryParameters2D.hit_from_inside] is [code]true[/code].
         *  [code]position[/code]: The intersection point.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.
         */
        intersect_ray(parameters: PhysicsRayQueryParameters2D): Dictionary
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
         */
        intersect_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        /** Checks how far a [Shape2D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters2D] object.
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of [code][1.0, 1.0][/code] will be returned.
         *  [b]Note:[/b] Any [Shape2D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape2D]s that the shape is already colliding with.
         */
        cast_motion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters2D] object, second one is in the collided shape from the physics space.
         */
        collide_shape(parameters: PhysicsShapeQueryParameters2D, max_results: number /*i64*/ = 32): Array
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. If it collides with more than one shape, the nearest one is selected. If the shape did not intersect anything, then an empty dictionary is returned instead.
         *  [b]Note:[/b] This method does not take into account the [code]motion[/code] property of the object. The returned object is a dictionary containing the following fields:
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]linear_velocity[/code]: The colliding object's velocity [Vector2]. If the object is an [Area2D], the result is [code](0, 0)[/code].
         *  [code]normal[/code]: The object's surface normal at the intersection point.
         *  [code]point[/code]: The intersection point.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
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
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
         */
        intersect_point(parameters: PhysicsPointQueryParameters3D, max_results: number /*i64*/ = 32): Array
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters3D]. The returned object is a dictionary with the following fields:
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]normal[/code]: The object's surface normal at the intersection point, or [code]Vector3(0, 0, 0)[/code] if the ray starts inside the shape and [member PhysicsRayQueryParameters3D.hit_from_inside] is [code]true[/code].
         *  [code]position[/code]: The intersection point.
         *  [code]face_index[/code]: The face index at the intersection point.
         *  [b]Note:[/b] Returns a valid number only if the intersected shape is a [ConcavePolygonShape3D]. Otherwise, [code]-1[/code] is returned.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.
         */
        intersect_ray(parameters: PhysicsRayQueryParameters3D): Dictionary
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:
         *  [code]collider[/code]: The colliding object.
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
         *  [b]Note:[/b] This method does not take into account the [code]motion[/code] property of the object.
         */
        intersect_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        /** Checks how far a [Shape3D] can move without colliding. All the parameters for the query, including the shape, are supplied through a [PhysicsShapeQueryParameters3D] object.
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of [code][1.0, 1.0][/code] will be returned.
         *  [b]Note:[/b] Any [Shape3D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape3D]s that the shape is already colliding with.
         */
        cast_motion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters3D] object, second one is in the collided shape from the physics space.
         *  [b]Note:[/b] This method does not take into account the [code]motion[/code] property of the object.
         */
        collide_shape(parameters: PhysicsShapeQueryParameters3D, max_results: number /*i64*/ = 32): Array
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:
         *  [code]collider_id[/code]: The colliding object's ID.
         *  [code]linear_velocity[/code]: The colliding object's velocity [Vector3]. If the object is an [Area3D], the result is [code](0, 0, 0)[/code].
         *  [code]normal[/code]: The object's surface normal at the intersection point.
         *  [code]point[/code]: The intersection point.
         *  [code]rid[/code]: The intersecting object's [RID].
         *  [code]shape[/code]: The shape index of the colliding shape.
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.
         *  [b]Note:[/b] This method does not take into account the [code]motion[/code] property of the object.
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
        /** The body's friction. Values range from [code]0[/code] (frictionless) to [code]1[/code] (maximum friction). */
        friction: number /*f64*/
        /** If [code]true[/code], the physics engine will use the friction of the object marked as "rough" when two objects collide. If [code]false[/code], the physics engine will use the lowest friction of all colliding objects instead. If [code]true[/code] for both colliding objects, the physics engine will use the highest friction. */
        rough: boolean
        /** The body's bounciness. Values range from [code]0[/code] (no bounce) to [code]1[/code] (full bounciness).
         *  [b]Note:[/b] Even with [member bounce] set to [code]1.0[/code], some energy will be lost over time due to linear and angular damping. To have a [PhysicsBody3D] that preserves all its energy over time, set [member bounce] to [code]1.0[/code], the body's linear damp mode to [b]Replace[/b] (if applicable), its linear damp to [code]0.0[/code], its angular damp mode to [b]Replace[/b] (if applicable), and its angular damp to [code]0.0[/code].
         */
        bounce: number /*f64*/
        /** If [code]true[/code], subtracts the bounciness from the colliding object's bounciness instead of adding it. */
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
        /** If different from [code]0[/code], restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].
         *  If [code]0[/code], restricts the query to the Viewport's default canvas layer.
         */
        canvas_instance_id: number /*i64*/
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude: Array
        /** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area2D]s into account. */
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
        /** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area3D]s into account. */
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
        /** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area2D]s into account. */
        collide_with_areas: boolean
        /** If [code]true[/code], the query will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector2(0, 0)[/code]. Does not affect concave polygon shapes. */
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
        /** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area3D]s into account. */
        collide_with_areas: boolean
        /** If [code]true[/code], the query will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector3(0, 0, 0)[/code]. Does not affect concave polygon shapes or heightmap shapes. */
        hit_from_inside: boolean
        /** If [code]true[/code], the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        hit_back_faces: boolean
    }
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies. */
    class PhysicsServer3DRenderingServerHandler extends Object {
        /* gdvirtual */ _set_vertex(vertex_id: number /*i64*/, vertex: Vector3): void
        /* gdvirtual */ _set_normal(vertex_id: number /*i64*/, normal: Vector3): void
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
        /** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area2D]s into account. */
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
        /** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
        collide_with_bodies: boolean
        /** If [code]true[/code], the query will take [Area3D]s into account. */
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
        /** If set to [code]true[/code], shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.
         *  If set to [code]false[/code], shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.
         */
        collide_separation_ray: boolean
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        exclude_bodies: Array
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        exclude_objects: Array
        /** If set to [code]true[/code], any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.
         *  If set to [code]false[/code], only collisions resulting from the motion are reported, which is generally the desired behavior.
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
        /** Maximum number of returned collisions, between [code]1[/code] and [code]32[/code]. Always returns the deepest detected collisions. */
        max_collisions: number /*i64*/
        /** If set to [code]true[/code], shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.
         *  If set to [code]false[/code], shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.
         */
        collide_separation_ray: boolean
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        exclude_bodies: Array
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        exclude_objects: Array
        /** If set to [code]true[/code], any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.
         *  If set to [code]false[/code], only collisions resulting from the motion are reported, which is generally the desired behavior.
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
        /** Returns the maximum fraction of the motion that can occur without a collision, between [code]0[/code] and [code]1[/code]. */
        get_collision_safe_fraction(): number /*f64*/
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between [code]0[/code] and [code]1[/code]. */
        get_collision_unsafe_fraction(): number /*f64*/
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion]. */
    class PhysicsTestMotionResult3D extends RefCounted {
        /** Returns the moving object's travel before collision. */
        get_travel(): Vector3
        /** Returns the moving object's remaining movement vector. */
        get_remainder(): Vector3
        /** Returns the maximum fraction of the motion that can occur without a collision, between [code]0[/code] and [code]1[/code]. */
        get_collision_safe_fraction(): number /*f64*/
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between [code]0[/code] and [code]1[/code]. */
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
        /** If [code]true[/code], the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
        angular_limit_enabled: boolean
        /** The minimum rotation. Only active if [member angular_limit_enabled] is [code]true[/code]. */
        angular_limit_lower: number /*f64*/
        /** The maximum rotation. Only active if [member angular_limit_enabled] is [code]true[/code]. */
        angular_limit_upper: number /*f64*/
        /** When activated, a motor turns the pin. */
        motor_enabled: boolean
        /** Target speed for the motor. In radians per second. */
        motor_target_velocity: number /*f64*/
    }
    namespace PinJoint3D {
        enum Param {
            PARAM_BIAS = 0,
            PARAM_DAMPING = 1,
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
            FACE_X = 0,
            FACE_Y = 1,
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
        readonly plugin_ready: Signal
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
        /** If [code]true[/code], polygon edges will be anti-aliased. */
        antialiased: boolean
        /** The polygon's fill texture. Use [member uv] to set texture coordinates. */
        texture: Texture2D
        /** Amount to offset the polygon's [member texture]. If set to [code]Vector2(0, 0)[/code], the texture's origin (its top-left corner) will be placed at the polygon's position. */
        texture_offset: Vector2
        /** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
        texture_scale: Vector2
        /** The texture's rotation in radians. */
        texture_rotation: number /*f64*/
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        skeleton: NodePath
        /** If [code]true[/code], the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
        invert_enabled: boolean
        /** Added padding applied to the bounding box when [member invert_enabled] is set to [code]true[/code]. Setting this value too small may result in a "Bad Polygon" error. */
        invert_border: number /*f64*/
        /** The polygon's list of vertices. The final point will be connected to the first.
         *  [b]Note:[/b] This returns a copy of the [PackedVector2Array] rather than a reference.
         */
        polygon: PackedVector2Array
        /** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use [code]Vector2(0, 0)[/code]. */
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
        readonly popup_hide: Signal
    }
    /** A modal window used to display a list of options. */
    class PopupMenu extends Popup {
        /** Checks the provided [param event] against the [PopupMenu]'s shortcuts and accelerators, and activates the first item with matching events. If [param for_global_only] is [code]true[/code], only shortcuts and accelerators with [code]global[/code] set to [code]true[/code] will be called.
         *  Returns [code]true[/code] if an item was successfully activated.
         *  [b]Note:[/b] Certain [Control]s, such as [MenuButton], will call this method automatically.
         */
        activate_item_by_event(event: InputEvent, for_global_only: boolean = false): boolean
        /** Adds a new item with text [param label].
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
         *  [b]Note:[/b] The provided [param id] is used only in [signal id_pressed] and [signal id_focused] signals. It's not related to the [code]index[/code] arguments in e.g. [method set_item_checked].
         */
        add_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        /** Adds a new item with text [param label] and icon [param texture].
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
         */
        add_icon_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        /** Adds a new checkable item with text [param label].
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
         */
        add_check_item(label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        /** Adds a new checkable item with text [param label] and icon [param texture].
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
         */
        add_icon_check_item(texture: Texture2D, label: string, id: number /*i64*/ = -1, accel: Key = 0): void
        /** Adds a new radio check button with text [param label].
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
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
         *  If [param allow_echo] is [code]true[/code], the shortcut can be activated with echo events.
         */
        add_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        /** Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
         *  If [param allow_echo] is [code]true[/code], the shortcut can be activated with echo events.
         */
        add_icon_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false, allow_echo: boolean = false): void
        /** Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
         */
        add_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        /** Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
         */
        add_icon_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        /** Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
         */
        add_radio_check_shortcut(shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        /** Same as [method add_icon_check_shortcut], but uses a radio check button. */
        add_icon_radio_check_shortcut(texture: Texture2D, shortcut: Shortcut, id: number /*i64*/ = -1, global: boolean = false): void
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the [code]ui_select[/code] or [code]ui_right[/code] input actions.
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
        /** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]). */
        set_item_accelerator(index: number /*i64*/, accel: Key): void
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
        set_item_metadata(index: number /*i64*/, metadata: any): void
        /** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
        set_item_disabled(index: number /*i64*/, disabled: boolean): void
        /** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
        set_item_submenu(index: number /*i64*/, submenu: string): void
        /** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If [code]false[/code], sets the type of the item to plain text. */
        set_item_as_separator(index: number /*i64*/, enable: boolean): void
        /** Sets whether the item at the given [param index] has a checkbox. If [code]false[/code], sets the type of the item to plain text.
         *  [b]Note:[/b] Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.
         */
        set_item_as_checkable(index: number /*i64*/, enable: boolean): void
        /** Sets the type of the item at the given [param index] to radio button. If [code]false[/code], sets the type of the item to plain text. */
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
        /** Returns [code]true[/code] if the item at the given [param index] is checked. */
        is_item_checked(index: number /*i64*/): boolean
        /** Returns the ID of the item at the given [param index]. [code]id[/code] can be manually assigned, while index can not. */
        get_item_id(index: number /*i64*/): number /*i64*/
        /** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
        get_item_index(id: number /*i64*/): number /*i64*/
        /** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns [code]0[/code] (corresponding to [constant @GlobalScope.KEY_NONE]). */
        get_item_accelerator(index: number /*i64*/): Key
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
        get_item_metadata(index: number /*i64*/): any
        /** Returns [code]true[/code] if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.
         *  See [method set_item_disabled] for more info on how to disable an item.
         */
        is_item_disabled(index: number /*i64*/): boolean
        /** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
        get_item_submenu(index: number /*i64*/): string
        /** Returns [code]true[/code] if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
        is_item_separator(index: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.
         *  [b]Note:[/b] Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.
         */
        is_item_checkable(index: number /*i64*/): boolean
        /** Returns [code]true[/code] if the item at the given [param index] has radio button-style checkability.
         *  [b]Note:[/b] This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
         */
        is_item_radio_checkable(index: number /*i64*/): boolean
        /** Returns [code]true[/code] if the specified item's shortcut is disabled. */
        is_item_shortcut_disabled(index: number /*i64*/): boolean
        /** Returns the tooltip associated with the item at the given [param index]. */
        get_item_tooltip(index: number /*i64*/): string
        /** Returns the [Shortcut] associated with the item at the given [param index]. */
        get_item_shortcut(index: number /*i64*/): Shortcut
        /** Returns the horizontal offset of the item at the given [param index]. */
        get_item_indent(index: number /*i64*/): number /*i64*/
        /** Sets the currently focused item as the given [param index].
         *  Passing [code]-1[/code] as the index makes so that no item is focused.
         */
        set_focused_item(index: number /*i64*/): void
        /** Returns the index of the currently focused item. Returns [code]-1[/code] if no item is focused. */
        get_focused_item(): number /*i64*/
        set_item_count(count: number /*i64*/): void
        get_item_count(): number /*i64*/
        /** Moves the scroll view to make the item at the given [param index] visible. */
        scroll_to_item(index: number /*i64*/): void
        /** Removes the item at the given [param index] from the menu.
         *  [b]Note:[/b] The indices of items after the removed item will be shifted by one.
         */
        remove_item(index: number /*i64*/): void
        /** Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.
         *  A [param label] can optionally be provided, which will appear at the center of the separator.
         */
        add_separator(label: string = '', id: number /*i64*/ = -1): void
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is [code]true[/code], the submenu nodes are automatically freed. */
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
        /** If [code]true[/code], hides the [PopupMenu] when an item is selected. */
        hide_on_item_selection: boolean
        /** If [code]true[/code], hides the [PopupMenu] when a checkbox or radio button is selected. */
        hide_on_checkable_item_selection: boolean
        /** If [code]true[/code], hides the [PopupMenu] when a state item is selected. */
        hide_on_state_item_selection: boolean
        /** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
        submenu_popup_delay: number /*f64*/
        /** If [code]true[/code], allows navigating [PopupMenu] with letter keys. */
        allow_search: boolean
        /** The number of items currently in the list. */
        item_count: any /*Items,item_*/
        readonly id_pressed: Signal
        readonly id_focused: Signal
        readonly index_pressed: Signal
        readonly menu_changed: Signal
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
        /** If [code]true[/code], enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        use_debanding: boolean
    }
    class ProceduralSkyMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    namespace ProgressBar {
        enum FillMode {
            FILL_BEGIN_TO_END = 0,
            FILL_END_TO_BEGIN = 1,
            FILL_TOP_TO_BOTTOM = 2,
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
        /** If [code]true[/code], the fill percentage is displayed on the bar. */
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
        readonly texture_format_enabled: Signal
    }
    class ProjectSettingsEditor extends AcceptDialog {
        queue_save(): void
        _update_action_map_editor(): void
    }
    class PropertySelector extends ConfirmationDialog {
        readonly selected: Signal
    }
    /** Interpolates an [Object]'s property over time. */
    class PropertyTweener extends Tweener {
        /** Sets a custom initial value to the [PropertyTweener].
         *  [b]Example:[/b]
         *  
         */
        from(value: any): PropertyTweener
        /** Makes the [PropertyTweener] use the current property value (i.e. at the time of creating this [PropertyTweener]) as a starting point. This is equivalent of using [method from] with the current value. These two calls will do the same:
         *  
         */
        from_current(): PropertyTweener
        /** When called, the final value will be used as a relative value instead.
         *  [b]Example:[/b]
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
        /** If [code]true[/code], performs the logic operation defined in [member logic_op]. */
        enable_logic_op: boolean
        /** The logic operation to perform for blending. Only effective if [member enable_logic_op] is [code]true[/code]. */
        logic_op: number /*i64*/
        /** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
        blend_constant: Color
        /** The attachments that are blended together. */
        attachments: Array
    }
    /** Pipeline color blend state attachment (used by [RenderingDevice]). */
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        /** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to [code]true[/code], [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
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
        /** If [code]true[/code], performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
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
        /** If [code]true[/code], writes the new red color channel to the final result. */
        write_r: boolean
        /** If [code]true[/code], writes the new green color channel to the final result. */
        write_g: boolean
        /** If [code]true[/code], writes the new blue color channel to the final result. */
        write_b: boolean
        /** If [code]true[/code], writes the new alpha channel to the final result. */
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
        /** If [code]true[/code], enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If [code]false[/code], objects will appear in the order they were drawn (like in Godot's 2D renderer). */
        enable_depth_test: boolean
        /** If [code]true[/code], writes to the depth buffer whenever the depth test returns true. Only works when enable_depth_test is also true. */
        enable_depth_write: boolean
        /** The method used for comparing the previous and current depth values. */
        depth_compare_operator: number /*i64*/
        /** If [code]true[/code], each depth value will be tested to see if it is between [member depth_range_min] and [member depth_range_max]. If it is outside of these values, it is discarded. */
        enable_depth_range: boolean
        /** The minimum depth that returns true for [member enable_depth_range]. */
        depth_range_min: number /*f64*/
        /** The maximum depth that returns true for [member enable_depth_range]. */
        depth_range_max: number /*f64*/
        /** If [code]true[/code], enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each. */
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
        /** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is [code]true[/code]) to perform. Higher values result in better antialiasing, at the cost of performance. */
        sample_count: number /*i64*/
        /** If [code]true[/code], enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
        enable_sample_shading: boolean
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between [code]0.0[/code] and [code]1.0[/code] (inclusive). Only effective if [member enable_sample_shading] is [code]true[/code]. If [member min_sample_shading] is [code]1.0[/code], fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is [i]not[/i] [code]1.0[/code]. */
        min_sample_shading: number /*f64*/
        /** If [code]true[/code], alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        enable_alpha_to_coverage: boolean
        /** If [code]true[/code], alpha is forced to either [code]0.0[/code] or [code]1.0[/code]. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is [code]true[/code]. */
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
        /** If [code]true[/code], primitives are discarded immediately before the rasterization stage. */
        discard_primitives: boolean
        /** If [code]true[/code], performs wireframe rendering for triangles instead of flat or textured rendering. */
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
        /** The identifier of the specialization constant. This is a value starting from [code]0[/code] and that increments for every different specialization constant for a given shader. */
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
        /** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between [code]-0.5[/code] and [code]0.0[/code]. Only effective if the sampler has mipmaps available. */
        lod_bias: number /*f64*/
        /** If [code]true[/code], perform anisotropic sampling. See [member anisotropy_max]. */
        use_anisotropy: boolean
        /** Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is [code]true[/code]. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to [code]16.0[/code].
         *  If [member anisotropy_max] is [code]1.0[/code], forcibly disables anisotropy even if [member use_anisotropy] is [code]true[/code].
         */
        anisotropy_max: number /*f64*/
        /** If [code]true[/code], returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
        enable_compare: boolean
        /** The compare operation to use. Only effective if [member enable_compare] is [code]true[/code]. */
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
        /** The texture's depth (in pixels). This is always [code]1[/code] for 2D textures. */
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
        /** Returns a pseudo-random 32-bit unsigned integer between [code]0[/code] and [code]4294967295[/code] (inclusive). */
        randi(): number /*i64*/
        /** Returns a pseudo-random float between [code]0.0[/code] and [code]1.0[/code] (inclusive). */
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
         *  [b]Note:[/b] The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.
         *  [b]Note:[/b] Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed [i]before[/i] modifying the [member state]:
         *  [b]Note:[/b] The default value of this property is pseudo-random, and changes when calling [method randomize]. The [code]0[/code] value documented here is a placeholder, and not the actual default seed.
         *  
         */
        seed: number /*i64*/
        /** The current state of the random number generator. Save and restore this property to restore the generator to a previous state:
         *  
         *  [b]Note:[/b] Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.
         *  [b]Note:[/b] The default value of this property is pseudo-random, and changes when calling [method randomize]. The [code]0[/code] value documented here is a placeholder, and not the actual default seed.
         */
        state: number /*i64*/
    }
    /** Abstract base class for controls that represent a number within a range. */
    class Range extends Control {
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
        /** If greater than 0, [member value] will always be rounded to a multiple of this property's value. If [member rounded] is also [code]true[/code], [member value] will first be rounded to a multiple of this property's value, then rounded to the nearest integer. */
        step: number /*f64*/
        /** Page size. Used mainly for [ScrollBar]. ScrollBar's length is its size multiplied by [member page] over the difference between [member min_value] and [member max_value]. */
        page: number /*f64*/
        /** Range's current value. Changing this property (even via code) will trigger [signal value_changed] signal. Use [method set_value_no_signal] if you want to avoid it. */
        value: number /*f64*/
        /** The value mapped between 0 and 1. */
        ratio: number /*f64*/
        /** If [code]true[/code], and [member min_value] is greater than 0, [member value] will be represented exponentially rather than linearly. */
        exp_edit: boolean
        /** If [code]true[/code], [member value] will always be rounded to the nearest integer. */
        rounded: boolean
        /** If [code]true[/code], [member value] may be greater than [member max_value]. */
        allow_greater: boolean
        /** If [code]true[/code], [member value] may be less than [member min_value]. */
        allow_lesser: boolean
        readonly value_changed: Signal
        readonly changed: Signal
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects. */
    class RayCast2D extends Node2D {
        set_enabled(enabled: boolean): void
        is_enabled(): boolean
        set_target_position(local_point: Vector2): void
        get_target_position(): Vector2
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        is_colliding(): boolean
        /** Updates the collision information for the ray immediately, without waiting for the next [code]_physics_process[/code] call. Use this method, for example, when the ray or its parent has changed state.
         *  [b]Note:[/b] [member enabled] does not need to be [code]true[/code] for this to work.
         */
        force_raycast_update(): void
        /** Returns the first object that the ray intersects, or [code]null[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider(): Object
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider_rid(): RID
        /** Returns the shape ID of the first object that the ray intersects, or [code]0[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]).
         *  To get the intersected shape node, for a [CollisionObject2D] target, use:
         *  
         */
        get_collider_shape(): number /*i64*/
        /** Returns the collision point at which the ray intersects the closest object. If [member hit_from_inside] is [code]true[/code] and the ray starts inside of a collision shape, this function will return the origin point of the ray.
         *  [b]Note:[/b] This point is in the [b]global[/b] coordinate system.
         */
        get_collision_point(): Vector2
        /** Returns the normal of the intersecting object's shape at the collision point, or [code]Vector2(0, 0)[/code] if the ray starts inside the shape and [member hit_from_inside] is [code]true[/code]. */
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
        /** If [code]true[/code], collisions will be reported. */
        enabled: boolean
        /** If [code]true[/code], the parent node will be excluded from collision detection. */
        exclude_parent: boolean
        /** The ray's destination point, relative to the RayCast's [code]position[/code]. */
        target_position: Vector2
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** If [code]true[/code], the ray will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector2(0, 0)[/code]. Does not affect concave polygon shapes. */
        hit_from_inside: boolean
        /** If [code]true[/code], collisions with [Area2D]s will be reported. */
        collide_with_areas: boolean
        /** If [code]true[/code], collisions with [PhysicsBody2D]s will be reported. */
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
        /** Updates the collision information for the ray immediately, without waiting for the next [code]_physics_process[/code] call. Use this method, for example, when the ray or its parent has changed state.
         *  [b]Note:[/b] [member enabled] does not need to be [code]true[/code] for this to work.
         */
        force_raycast_update(): void
        /** Returns the first object that the ray intersects, or [code]null[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider(): Object
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
        get_collider_rid(): RID
        /** Returns the shape ID of the first object that the ray intersects, or [code]0[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]).
         *  To get the intersected shape node, for a [CollisionObject3D] target, use:
         *  
         */
        get_collider_shape(): number /*i64*/
        /** Returns the collision point at which the ray intersects the closest object. If [member hit_from_inside] is [code]true[/code] and the ray starts inside of a collision shape, this function will return the origin point of the ray.
         *  [b]Note:[/b] This point is in the [b]global[/b] coordinate system.
         */
        get_collision_point(): Vector3
        /** Returns the normal of the intersecting object's shape at the collision point, or [code]Vector3(0, 0, 0)[/code] if the ray starts inside the shape and [member hit_from_inside] is [code]true[/code]. */
        get_collision_normal(): Vector3
        /** Returns the collision object's face index at the collision point, or [code]-1[/code] if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
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
        /** If [code]true[/code], collisions will be reported. */
        enabled: boolean
        /** If [code]true[/code], collisions will be ignored for this RayCast3D's immediate parent. */
        exclude_parent: boolean
        /** The ray's destination point, relative to the RayCast's [code]position[/code]. */
        target_position: Vector3
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        collision_mask: number /*i64*/
        /** If [code]true[/code], the ray will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector3(0, 0, 0)[/code]. Does not affect shapes with no volume like concave polygon or heightmap. */
        hit_from_inside: boolean
        /** If [code]true[/code], the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        hit_back_faces: boolean
        /** If [code]true[/code], collisions with [Area3D]s will be reported. */
        collide_with_areas: boolean
        /** If [code]true[/code], collisions with [PhysicsBody3D]s will be reported. */
        collide_with_bodies: boolean
        /** The custom color to use to draw the shape in the editor and at run-time if [b]Visible Collision Shapes[/b] is enabled in the [b]Debug[/b] menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.
         *  If set to [code]Color(0.0, 0.0, 0.0)[/code] (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.
         */
        debug_shape_custom_color: Color
        /** If set to [code]1[/code], a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires [b]Visible Collision Shapes[/b] to be enabled in the [b]Debug[/b] menu for the debug shape to be visible at run-time. */
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
         *  Returns [code]true[/code] if the increment was successful, [code]false[/code] otherwise.
         */
        reference(): boolean
        /** Decrements the internal reference counter. Use this only if you really know what you are doing.
         *  Returns [code]true[/code] if the object should be freed after the decrement, [code]false[/code] otherwise.
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
        /** If [code]true[/code], the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
        editor_only: boolean
    }
    namespace ReflectionProbe {
        enum UpdateMode {
            UPDATE_ONCE = 0,
            UPDATE_ALWAYS = 1,
        }
        enum AmbientMode {
            AMBIENT_DISABLED = 0,
            AMBIENT_ENVIRONMENT = 1,
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
         *  [b]Note:[/b] The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [member max_distance] will not always cull objects from reflections, especially if the reflection probe's box defined by its [member size] is already large.
         */
        max_distance: number /*f64*/
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.
         *  [b]Note:[/b] To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.
         */
        size: Vector3
        /** Sets the origin offset to be used when this [ReflectionProbe] is in [member box_projection] mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection. */
        origin_offset: Vector3
        /** If [code]true[/code], enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.
         *  [b]Note:[/b] To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the [ReflectionProbe] node.
         */
        box_projection: boolean
        /** If [code]true[/code], reflections will ignore sky contribution. */
        interior: boolean
        /** If [code]true[/code], computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [constant UPDATE_ALWAYS] [member update_mode]. */
        enable_shadows: boolean
        /** Sets the cull mask which determines what objects are drawn by this probe. Every [VisualInstance3D] with a layer included in this cull mask will be rendered by the probe. To improve performance, it is best to only include large objects which are likely to take up a lot of space in the reflection. */
        cull_mask: number /*i64*/
        /** The automatic LOD bias to use for meshes rendered within the [ReflectionProbe] (this is analog to [member Viewport.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to [code]0.0[/code], automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail, especially when using the [constant UPDATE_ALWAYS] [member update_mode].
         *  [b]Note:[/b] [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).
         */
        mesh_lod_threshold: number /*f64*/
        /** The ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. The ambient color will smoothly blend with other [ReflectionProbe]s and the rest of the scene (outside the [ReflectionProbe]'s box defined by its [member size]). */
        ambient_mode: number /*i64*/
        /** The custom ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        ambient_color: Color
        /** The custom ambient color energy to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        ambient_color_energy: number /*f64*/
    }
}
