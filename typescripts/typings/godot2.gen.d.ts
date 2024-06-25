// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
         *  **Warning:** Only set this property to a list of points that actually form a convex hull. Use [method set_point_cloud] to generate the convex hull of an arbitrary set of points.  
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
        readonly create: Signal //  => void
        readonly favorites_updated: Signal //  => void
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
         *      
         *  **Note:** The maximum size of accepted plaintext is limited by the key size.  
         */
        encrypt(key: CryptoKey, plaintext: PackedByteArray): PackedByteArray
        
        /** Decrypt the given [param ciphertext] with the provided private [param key].  
         *      
         *  **Note:** The maximum size of accepted ciphertext is limited by the key size.  
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
        /** Saves a key to the given [param path]. If [param public_only] is `true`, only the public key will be saved.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        save(path: string, public_only: boolean = false): GodotError
        
        /** Loads a key from [param path]. If [param public_only] is `true`, only the public key will be loaded.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        load(path: string, public_only: boolean = false): GodotError
        
        /** Returns `true` if this CryptoKey only has the public part, and not the private one. */
        is_public_only(): boolean
        
        /** Returns a string containing the key in PEM format. If [param public_only] is `true`, only the public key will be included. */
        save_to_string(public_only: boolean = false): string
        
        /** Loads a key from the given [param string_key]. If [param public_only] is `true`, only the public key will be loaded. */
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
            /** The tangent on this side of the point is user-defined. */
            TANGENT_FREE = 0,
            
            /** The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point. */
            TANGENT_LINEAR = 1,
            
            /** The total number of available tangent modes. */
            TANGENT_MODE_COUNT = 2,
        }
    }
    /** A mathematical curve. */
    class Curve extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        
        /** Adds a point to the curve. For each side, if the `*_mode` is [constant TANGENT_LINEAR], the `*_tangent` angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the `*_tangent` angle if `*_mode` is set to [constant TANGENT_FREE]. */
        add_point(position: Vector2, left_tangent: number /*f64*/ = 0, right_tangent: number /*f64*/ = 0, left_mode: Curve.TangentMode = 0, right_mode: Curve.TangentMode = 0): number /*i64*/
        
        /** Removes the point at [param index] from the curve. */
        remove_point(index: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the curve coordinates for the point at [param index]. */
        get_point_position(index: number /*i64*/): Vector2
        
        /** Assigns the vertical position [param y] to the point at [param index]. */
        set_point_value(index: number /*i64*/, y: number /*f64*/): void
        
        /** Sets the offset from `0.5`. */
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
        
        /** Emitted when [member max_value] or [member min_value] is changed. */
        readonly range_changed: Signal //  => void
    }
    /** Describes a Bézier curve in 2D space. */
    class Curve2D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        add_point(position: Vector2, in_: Vector2 = Vector2.ZERO, out_: Vector2 = Vector2.ZERO, index: number /*i64*/ = -1): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_position(idx: number /*i64*/): Vector2
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_in(idx: number /*i64*/): Vector2
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_out(idx: number /*i64*/): Vector2
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.  
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector2
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: number /*f64*/): Vector2
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a pixel distance along the curve.  
         *  To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector2
        
        /** Similar to [method sample_baked], but returns [Transform2D] that includes a rotation along the curve, with [member Transform2D.origin] as the point position, [member Transform2D.x] as the sideways vector, and [member Transform2D.y] as the forward vector. Returns an empty transform if the length of the curve is `0`.  
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
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        add_point(position: Vector3, in_: Vector3 = new Vector3(0, 0, 0), out_: Vector3 = new Vector3(0, 0, 0), index: number /*i64*/ = -1): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_position(idx: number /*i64*/): Vector3
        
        /** Sets the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console.  
         *  The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a [PathFollow3D], this tilt is an offset over the natural tilt the [PathFollow3D] calculates.  
         */
        set_point_tilt(idx: number /*i64*/, tilt: number /*f64*/): void
        
        /** Returns the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `0`. */
        get_point_tilt(idx: number /*i64*/): number /*f64*/
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_in(idx: number /*i64*/): Vector3
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_out(idx: number /*i64*/): Vector3
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.  
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector3
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: number /*f64*/): Vector3
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        set_up_vector_enabled(enable: boolean): void
        is_up_vector_enabled(): boolean
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector3
        
        /** Returns a [Transform3D] with `origin` as point position, `basis.x` as sideway vector, `basis.y` as up vector, `basis.z` as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also [method sample_baked]. */
        sample_baked_with_rotation(offset: number /*f64*/ = 0, cubic: boolean = false, apply_tilt: boolean = false): Transform3D
        
        /** Returns an up vector within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the [param offset] lies between, then interpolates the values. If [param apply_tilt] is `true`, an interpolated tilt is applied to the interpolated up vector.  
         *  If the curve has no up vectors, the function sends an error to the console, and returns `(0, 1, 0)`.  
         */
        sample_baked_up_vector(offset: number /*f64*/, apply_tilt: boolean = false): Vector3
        
        /** Returns the cache of points as a [PackedVector3Array]. */
        get_baked_points(): PackedVector3Array
        
        /** Returns the cache of tilts as a [PackedFloat32Array]. */
        get_baked_tilts(): PackedFloat32Array
        
        /** Returns the cache of up vectors as a [PackedVector3Array].  
         *  If [member up_vector_enabled] is `false`, the cache will be empty.  
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
        
        /** If `true`, the curve will bake up vectors used for orientation. This is used when [member PathFollow3D.rotation_mode] is set to [constant PathFollow3D.ROTATION_ORIENTED]. Changing it forces the cache to be recomputed. */
        up_vector_enabled: boolean
    }
    class CurveEditorPlugin extends EditorPlugin {
    }
    class CurvePreviewGenerator extends EditorResourcePreviewGenerator {
    }
    namespace CurveTexture {
        enum TextureMode {
            /** Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values. */
            TEXTURE_MODE_RGB = 0,
            
            /** Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this. */
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
        
        /** Top radius of the cylinder. If set to `0.0`, the top faces will not be generated, resulting in a conic shape. See also [member cap_top]. */
        top_radius: number /*f64*/
        
        /** Bottom radius of the cylinder. If set to `0.0`, the bottom faces will not be generated, resulting in a conic shape. See also [member cap_bottom]. */
        bottom_radius: number /*f64*/
        
        /** Full height of the cylinder. */
        height: number /*f64*/
        
        /** Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance. */
        radial_segments: number /*i64*/
        
        /** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
        rings: number /*i64*/
        
        /** If `true`, generates a cap at the top of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member top_radius].  
         *      
         *  **Note:** If [member top_radius] is `0.0`, cap generation is always skipped even if [member cap_top] is `true`.  
         */
        cap_top: boolean
        
        /** If `true`, generates a cap at the bottom of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member bottom_radius].  
         *      
         *  **Note:** If [member bottom_radius] is `0.0`, cap generation is always skipped even if [member cap_bottom] is `true`.  
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
         *      
         *  **Note:** You must check that the state of the return PacketPeerUDP is [constant PacketPeerDTLS.STATUS_HANDSHAKING], as it is normal that 50% of the new connections will be invalid due to cookie exchange.  
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
        
        /** The spring joint's damping ratio. A value between `0` and `1`. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [member damping] value forces the attached bodies to align faster. */
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
            /** [Texture2D] corresponding to [member texture_albedo]. */
            TEXTURE_ALBEDO = 0,
            
            /** [Texture2D] corresponding to [member texture_normal]. */
            TEXTURE_NORMAL = 1,
            
            /** [Texture2D] corresponding to [member texture_orm]. */
            TEXTURE_ORM = 2,
            
            /** [Texture2D] corresponding to [member texture_emission]. */
            TEXTURE_EMISSION = 3,
            
            /** Max size of [enum DecalTexture] enum. */
            TEXTURE_MAX = 4,
        }
    }
    /** Node that projects a texture onto a [MeshInstance3D]. */
    class Decal extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** Sets the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)`, use `$Decal.texture_albedo = albedo_tex`.  
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:  
         *    
         */
        set_texture(type: Decal.DecalTexture, texture: Texture2D): void
        
        /** Returns the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)`, use `albedo_tex = $Decal.texture_albedo`.  
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
        
        /** Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.  
         *      
         *  **Note:** To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to `0.0` and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.  
         */
        size: Vector3
        
        /** Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [member modulate]. */
        emission_energy: number /*f64*/
        
        /** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
        modulate: Color
        
        /** Blends the albedo [Color] of the decal with albedo [Color] of the underlying mesh. This can be set to `0.0` to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [member modulate]. */
        albedo_mix: number /*f64*/
        
        /** Fades the Decal if the angle between the Decal's [AABB] and the target surface becomes too large. A value of `0` projects the Decal regardless of angle, a value of `1` limits the Decal to surfaces that are nearly perpendicular.  
         *      
         *  **Note:** Setting [member normal_fade] to a value greater than `0.0` has a small performance cost due to the added normal angle computations.  
         */
        normal_fade: number /*f64*/
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member lower_fade]. */
        upper_fade: number /*f64*/
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member upper_fade]. */
        lower_fade: number /*f64*/
        
        /** If `true`, decals will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. The Decal will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance. */
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
        readonly resource_removed: Signal // obj: Object => void
        readonly file_removed: Signal // file: string => void
        readonly folder_removed: Signal // folder: string => void
    }
    /** Provides methods for managing directories and their content. */
    class DirAccess extends RefCounted {
        /** Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).  
         *  Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string): DirAccess
        
        /** Returns the result of the last [method open] call in the current thread. */
        static get_open_error(): GodotError
        
        /** Initializes the stream used to list all files and directories using the [method get_next] function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [method list_dir_end].  
         *  Affected by [member include_hidden] and [member include_navigational].  
         *      
         *  **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [method get_files] or [method get_directories].  
         */
        list_dir_begin(): GodotError
        
        /** Returns the next element (file or directory) in the current directory.  
         *  The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [String] and closes the stream automatically (i.e. [method list_dir_end] would not be mandatory in such a case).  
         */
        get_next(): string
        
        /** Returns whether the current item processed with the last [method get_next] call is a directory (`.` and `..` are considered directories). */
        current_is_dir(): boolean
        
        /** Closes the current stream opened with [method list_dir_begin] (whether it has been fully processed with [method get_next] does not matter). */
        list_dir_end(): void
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.  
         *  Affected by [member include_hidden].  
         *      
         *  **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`.  
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
        
        /** On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).  
         *  On macOS, returns the path to the mounted volume passed as an argument.  
         *  On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.  
         *  On other platforms, or if the requested drive does not exist, the method returns an empty String.  
         */
        static get_drive_name(idx: number /*i64*/): string
        
        /** Returns the currently opened directory's drive index. See [method get_drive_name] to convert returned index to the name of the drive. */
        get_current_drive(): number /*i64*/
        
        /** Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         *      
         *  **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use [method open] to create a new instance instead.  
         */
        change_dir(to_dir: string): GodotError
        
        /** Returns the absolute path to the currently opened directory (e.g. `res://folder` or `C:\tmp\folder`). */
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
        
        /** Returns the available space on the current directory's disk, in bytes. Returns `0` if the platform-specific method to query the available space fails. */
        get_space_left(): number /*i64*/
        
        /** Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.  
         *  If [param chmod_flags] is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.  
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
        
        /** Returns `true` if the file system or directory use case sensitive file names.  
         *      
         *  **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.  
         */
        is_case_sensitive(path: string): boolean
        
        /** If `true`, `.` and `..` are included when navigating the directory.  
         *  Affects [method list_dir_begin] and [method get_directories].  
         */
        include_navigational: boolean
        
        /** If `true`, hidden files are included when navigating the directory.  
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
            /** Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects. */
            SHADOW_ORTHOGONAL = 0,
            
            /** Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [constant SHADOW_ORTHOGONAL] and [constant SHADOW_PARALLEL_4_SPLITS] in terms of performance. */
            SHADOW_PARALLEL_2_SPLITS = 1,
            
            /** Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode. */
            SHADOW_PARALLEL_4_SPLITS = 2,
        }
        enum SkyMode {
            /** Makes the light visible in both scene lighting and sky rendering. */
            SKY_MODE_LIGHT_AND_SKY = 0,
            
            /** Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders. */
            SKY_MODE_LIGHT_ONLY = 1,
            
            /** Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example). */
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
        
        /** If `true`, shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [member directional_shadow_mode] is [constant SHADOW_ORTHOGONAL]. */
        directional_shadow_blend_splits: boolean
        
        /** Set whether this [DirectionalLight3D] is visible in the sky, in the scene, or both in the sky and in the scene. See [enum SkyMode] for options. */
        sky_mode: number /*i64*/
    }
    class DirectoryCreateDialog extends ConfirmationDialog {
        readonly dir_created: Signal //  => void
    }
    class DynamicFontImportSettings extends ConfirmationDialog {
    }
    class DynamicFontImportSettingsData extends RefCounted {
    }
    namespace ENetConnection {
        enum CompressionMode {
            /** No compression. This uses the most bandwidth, but has the upside of requiring the fewest CPU resources. This option may also be used to make network debugging using tools like Wireshark easier. */
            COMPRESS_NONE = 0,
            
            /** ENet's built-in range encoding. Works well on small packets, but is not the most efficient algorithm on packets larger than 4 KB. */
            COMPRESS_RANGE_CODER = 1,
            
            /** [url=https://fastlz.org/]FastLZ[/url] compression. This option uses less CPU resources compared to [constant COMPRESS_ZLIB], at the expense of using more bandwidth. */
            COMPRESS_FASTLZ = 2,
            
            /** [url=https://www.zlib.net/]Zlib[/url] compression. This option uses less bandwidth compared to [constant COMPRESS_FASTLZ], at the expense of using more CPU resources. */
            COMPRESS_ZLIB = 3,
            
            /** [url=https://facebook.github.io/zstd/]Zstandard[/url] compression. Note that this algorithm is not very efficient on packets smaller than 4 KB. Therefore, it's recommended to use other compression algorithms in most cases. */
            COMPRESS_ZSTD = 4,
        }
        enum EventType {
            /** An error occurred during [method service]. You will likely need to [method destroy] the host and recreate it. */
            EVENT_ERROR = -1,
            
            /** No event occurred within the specified time limit. */
            EVENT_NONE = 0,
            
            /** A connection request initiated by enet_host_connect has completed. The array will contain the peer which successfully connected. */
            EVENT_CONNECT = 1,
            
            /** A peer has disconnected. This event is generated on a successful completion of a disconnect initiated by [method ENetPacketPeer.peer_disconnect], if a peer has timed out, or if a connection request initialized by [method connect_to_host] has timed out. The array will contain the peer which disconnected. The data field contains user supplied data describing the disconnection, or 0, if none is available. */
            EVENT_DISCONNECT = 2,
            
            /** A packet has been received from a peer. The array will contain the peer which sent the packet and the channel number upon which the packet was received. The received packet will be queued to the associated [ENetPacketPeer]. */
            EVENT_RECEIVE = 3,
        }
        enum HostStatistic {
            /** Total data sent. */
            HOST_TOTAL_SENT_DATA = 0,
            
            /** Total UDP packets sent. */
            HOST_TOTAL_SENT_PACKETS = 1,
            
            /** Total data received. */
            HOST_TOTAL_RECEIVED_DATA = 2,
            
            /** Total UDP packets received. */
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
         *      
         *  **Note:** You must call either [method create_host] or [method create_host_bound] before calling this method.  
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
        
        /** Queues a [param packet] to be sent to all peers associated with the host over the specified [param channel]. See [ENetPacketPeer] `FLAG_*` constants for available packet flags. */
        broadcast(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): void
        
        /** Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.  
         *      
         *  **Note:** Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.  
         *      
         *  **Note:** The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.  
         */
        compress(mode: ENetConnection.CompressionMode): void
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet servers. Call this right after [method create_host_bound] to have ENet expect peers to connect using DTLS. See [method TLSOptions.server]. */
        dtls_server_setup(server_options: TLSOptions): GodotError
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet clients. Call this before [method connect_to_host] to have ENet connect using DTLS validating the server certificate against [param hostname]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        dtls_client_setup(hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Configures the DTLS server to automatically drop new connections.  
         *      
         *  **Note:** This method is only relevant after calling [method dtls_server_setup].  
         */
        refuse_new_connections(refuse: boolean): void
        
        /** Returns and resets host statistics. See [enum HostStatistic] for more info. */
        pop_statistic(statistic: ENetConnection.HostStatistic): number /*f64*/
        
        /** Returns the maximum number of channels allowed for connected peers. */
        get_max_channels(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Returns the list of peers associated with this host.  
         *      
         *  **Note:** This list might include some peers that are not fully connected or are still being disconnected.  
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
        /** Create server that listens to connections via [param port]. The port needs to be an available, unused port between 0 and 65535. Note that ports below 1024 are privileged and may require elevated permissions depending on the platform. To change the interface the server listens on, use [method set_bind_ip]. The default IP is the wildcard `"*"`, which listens on all available interfaces. [param max_clients] is the maximum number of clients that are allowed at once, any number up to 4095 may be used, although the achievable number of simultaneous clients may be far lower and depends on the application. For additional details on the bandwidth parameters, see [method create_client]. Returns [constant OK] if a server was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the server could not be created. */
        create_server(port: number /*i64*/, max_clients: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        
        /** Create client that connects to a server at [param address] using specified [param port]. The given address needs to be either a fully qualified domain name (e.g. `"www.example.com"`) or an IP address in IPv4 or IPv6 format (e.g. `"192.168.1.1"`). The [param port] is the port the server is listening on. The [param channel_count] parameter can be used to specify the number of ENet channels allocated for the connection. The [param in_bandwidth] and [param out_bandwidth] parameters can be used to limit the incoming and outgoing bandwidth to the given number of bytes per second. The default of 0 means unlimited bandwidth. Note that ENet will strategically drop packets on specific sides of a connection between peers to ensure the peer's bandwidth is not overwhelmed. The bandwidth parameters also determine the window size of a connection which limits the amount of reliable packets that may be in transit at any given time. Returns [constant OK] if a client was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the client could not be created. If [param local_port] is specified, the client will also listen to the given port; this is useful for some NAT traversal techniques. */
        create_client(address: string, port: number /*i64*/, channel_count: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0, local_port: number /*i64*/ = 0): GodotError
        
        /** Initialize this [MultiplayerPeer] in mesh mode. The provided [param unique_id] will be used as the local peer network unique ID once assigned as the [member MultiplayerAPI.multiplayer_peer]. In the mesh configuration you will need to set up each new peer manually using [ENetConnection] before calling [method add_mesh_peer]. While this technique is more advanced, it allows for better control over the connection process (e.g. when dealing with NAT punch-through) and for better distribution of the network load (which would otherwise be more taxing on the server). */
        create_mesh(unique_id: number /*i64*/): GodotError
        
        /** Add a new remote peer with the given [param peer_id] connected to the given [param host].  
         *      
         *  **Note:** The [param host] must have exactly one peer in the [constant ENetPacketPeer.STATE_CONNECTED] state.  
         */
        add_mesh_peer(peer_id: number /*i64*/, host: ENetConnection): GodotError
        
        /** The IP used when creating a server. This is set to the wildcard `"*"` by default, which binds to all available interfaces. The given IP needs to be in IPv4 or IPv6 address format, for example: `"192.168.1.1"`. */
        set_bind_ip(ip: string): void
        get_host(): ENetConnection
        
        /** Returns the [ENetPacketPeer] associated to the given [param id]. */
        get_peer(id: number /*i64*/): ENetPacketPeer
        
        /** The underlying [ENetConnection] created after [method create_client] and [method create_server]. */
        readonly host: ENetConnection
    }
    namespace ENetPacketPeer {
        enum PeerState {
            /** The peer is disconnected. */
            STATE_DISCONNECTED = 0,
            
            /** The peer is currently attempting to connect. */
            STATE_CONNECTING = 1,
            
            /** The peer has acknowledged the connection request. */
            STATE_ACKNOWLEDGING_CONNECT = 2,
            
            /** The peer is currently connecting. */
            STATE_CONNECTION_PENDING = 3,
            
            /** The peer has successfully connected, but is not ready to communicate with yet ([constant STATE_CONNECTED]). */
            STATE_CONNECTION_SUCCEEDED = 4,
            
            /** The peer is currently connected and ready to communicate with. */
            STATE_CONNECTED = 5,
            
            /** The peer is slated to disconnect after it has no more outgoing packets to send. */
            STATE_DISCONNECT_LATER = 6,
            
            /** The peer is currently disconnecting. */
            STATE_DISCONNECTING = 7,
            
            /** The peer has acknowledged the disconnection request. */
            STATE_ACKNOWLEDGING_DISCONNECT = 8,
            
            /** The peer has lost connection, but is not considered truly disconnected (as the peer didn't acknowledge the disconnection request). */
            STATE_ZOMBIE = 9,
        }
        enum PeerStatistic {
            /** Mean packet loss of reliable packets as a ratio with respect to the [constant PACKET_LOSS_SCALE]. */
            PEER_PACKET_LOSS = 0,
            
            /** Packet loss variance. */
            PEER_PACKET_LOSS_VARIANCE = 1,
            
            /** The time at which packet loss statistics were last updated (in milliseconds since the connection started). The interval for packet loss statistics updates is 10 seconds, and at least one packet must have been sent since the last statistics update. */
            PEER_PACKET_LOSS_EPOCH = 2,
            
            /** Mean packet round trip time for reliable packets. */
            PEER_ROUND_TRIP_TIME = 3,
            
            /** Variance of the mean round trip time. */
            PEER_ROUND_TRIP_TIME_VARIANCE = 4,
            
            /** Last recorded round trip time for a reliable packet. */
            PEER_LAST_ROUND_TRIP_TIME = 5,
            
            /** Variance of the last trip time recorded. */
            PEER_LAST_ROUND_TRIP_TIME_VARIANCE = 6,
            
            /** The peer's current throttle status. */
            PEER_PACKET_THROTTLE = 7,
            
            /** The maximum number of unreliable packets that should not be dropped. This value is always greater than or equal to `1`. The initial value is equal to [constant PACKET_THROTTLE_SCALE]. */
            PEER_PACKET_THROTTLE_LIMIT = 8,
            
            /** Internal value used to increment the packet throttle counter. The value is hardcoded to `7` and cannot be changed. You probably want to look at [constant PEER_PACKET_THROTTLE_ACCELERATION] instead. */
            PEER_PACKET_THROTTLE_COUNTER = 9,
            
            /** The time at which throttle statistics were last updated (in milliseconds since the connection started). The interval for throttle statistics updates is [constant PEER_PACKET_THROTTLE_INTERVAL]. */
            PEER_PACKET_THROTTLE_EPOCH = 10,
            
            /** The throttle's acceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent [i]more[/i] often. The default value is `2`. */
            PEER_PACKET_THROTTLE_ACCELERATION = 11,
            
            /** The throttle's deceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent [i]less[/i] often. The default value is `2`. */
            PEER_PACKET_THROTTLE_DECELERATION = 12,
            
            /** The interval over which the lowest mean round trip time should be measured for use by the throttle mechanism (in milliseconds). The default value is `5000`. */
            PEER_PACKET_THROTTLE_INTERVAL = 13,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__peer.html]ENetPeer[/url]. */
    class ENetPacketPeer extends PacketPeer {
        /** The reference scale for packet loss. See [method get_statistic] and [constant PEER_PACKET_LOSS]. */
        static readonly PACKET_LOSS_SCALE = 65536
        
        /** The reference value for throttle configuration. The default value is `32`. See [method throttle_configure]. */
        static readonly PACKET_THROTTLE_SCALE = 32
        
        /** Mark the packet to be sent as reliable. */
        static readonly FLAG_RELIABLE = 1
        
        /** Mark the packet to be sent unsequenced (unreliable). */
        static readonly FLAG_UNSEQUENCED = 2
        
        /** Mark the packet to be sent unreliable even if the packet is too big and needs fragmentation (increasing the chance of it being dropped). */
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        
        /** Request a disconnection from a peer. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect(data: number /*i64*/ = 0): void
        
        /** Request a disconnection from a peer, but only after all queued outgoing packets are sent. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect_later(data: number /*i64*/ = 0): void
        
        /** Force an immediate disconnection from a peer. No [constant ENetConnection.EVENT_DISCONNECT] will be generated. The foreign peer is not guaranteed to receive the disconnect notification, and is reset immediately upon return from this function. */
        peer_disconnect_now(data: number /*i64*/ = 0): void
        
        /** Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests. */
        ping(): void
        
        /** Sets the [param ping_interval] in milliseconds at which pings will be sent to a peer. Pings are used both to monitor the liveness of the connection and also to dynamically adjust the throttle during periods of low traffic so that the throttle has reasonable responsiveness during traffic spikes. The default ping interval is `500` milliseconds. */
        ping_interval(ping_interval: number /*i64*/): void
        
        /** Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host. */
        reset(): void
        
        /** Queues a [param packet] to be sent over the specified [param channel]. See `FLAG_*` constants for available packet flags. */
        send(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): GodotError
        
        /** Configures throttle parameter for a peer.  
         *  Unreliable packets are dropped by ENet in response to the varying conditions of the Internet connection to the peer. The throttle represents a probability that an unreliable packet should not be dropped and thus sent by ENet to the peer. By measuring fluctuations in round trip times of reliable packets over the specified [param interval], ENet will either increase the probability by the amount specified in the [param acceleration] parameter, or decrease it by the amount specified in the [param deceleration] parameter (both are ratios to [constant PACKET_THROTTLE_SCALE]).  
         *  When the throttle has a value of [constant PACKET_THROTTLE_SCALE], no unreliable packets are dropped by ENet, and so 100% of all unreliable packets will be sent.  
         *  When the throttle has a value of `0`, all unreliable packets are dropped by ENet, and so 0% of all unreliable packets will be sent.  
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
        
        /** Returns `true` if the peer is currently active (i.e. the associated [ENetConnection] is still valid). */
        is_active(): boolean
    }
    class EditorAbout extends AcceptDialog {
        _version_button_pressed(): void
    }
    class EditorAssetLibrary extends PanelContainer {
        readonly install_asset: Signal // zip_path: string, name: string => void
    }
    class EditorAudioBus extends PanelContainer {
        update_bus(): void
        update_send(): void
        readonly duplicate_request: Signal //  => void
        readonly delete_request: Signal //  => void
        readonly vol_reset_request: Signal //  => void
        readonly drop_end_request: Signal //  => void
        readonly dropped: Signal //  => void
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
        readonly autoload_changed: Signal //  => void
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
         *  - [param command_name]: [String] (Name of the **Command**. This is displayed to the user.)  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)  
         *  - [param binded_callable]: [Callable] (Callable of the **Command**. This will be executed when the **Command** is selected.)  
         *  - [param shortcut_text]: [String] (Shortcut text of the **Command** if available.)  
         */
        add_command(command_name: string, key_name: string, binded_callable: Callable, shortcut_text: string = 'None'): void
        
        /** Removes the custom command from EditorCommandPalette.  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**.)  
         */
        remove_command(key_name: string): void
    }
    class EditorDebuggerInspector extends EditorInspector {
        readonly object_selected: Signal // id: number /*i64*/ => void
        readonly object_edited: Signal // id: number /*i64*/, property: string, : any /*value*/ => void
        readonly object_property_updated: Signal // id: number /*i64*/, property: string => void
    }
    class EditorDebuggerNode extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        readonly goto_script_line: Signal //  => void
        readonly set_execution: Signal // : any /*script*/, line: number /*i64*/ => void
        readonly clear_execution: Signal // : any /*script*/ => void
        readonly breaked: Signal // reallydid: boolean, can_debug: boolean => void
        readonly breakpoint_toggled: Signal // path: string, line: number /*i64*/, enabled: boolean => void
        readonly breakpoint_set_in_tree: Signal // : any /*script*/, line: number /*i64*/, enabled: boolean, debugger: number /*i64*/ => void
        readonly breakpoints_cleared_in_tree: Signal // debugger: number /*i64*/ => void
    }
    /** A base class to implement debugger plugins. */
    class EditorDebuggerPlugin extends RefCounted {
        /** Override this method to be notified whenever a new [EditorDebuggerSession] is created (the session may be inactive during this stage). */
        /* gdvirtual */ _setup_session(session_id: number /*i64*/): void
        
        /** Override this method to enable receiving messages from the debugger. If [param capture] is "my_message" then messages starting with "my_message:" will be passes to the [method _capture] method. */
        /* gdvirtual */ _has_capture(capture: string): boolean
        
        /** Override this method to process incoming messages. The [param session_id] is the ID of the [EditorDebuggerSession] that received the message (which you can retrieve via [method get_session]). */
        /* gdvirtual */ _capture(message: string, data: Array, session_id: number /*i64*/): boolean
        
        /** Returns the [EditorDebuggerSession] with the given [param id]. */
        get_session(id: number /*i64*/): EditorDebuggerSession
        
        /** Returns an array of [EditorDebuggerSession] currently available to this debugger plugin.  
         *      
         *  **Note:** Sessions in the array may be inactive, check their state via [method EditorDebuggerSession.is_active].  
         */
        get_sessions(): Array
    }
    class EditorDebuggerRemoteObject extends Object {
        get_title(): string
        get_variant(_unnamed_arg0: StringName): any
        clear(): void
        get_remote_object_id(): number /*i64*/
        readonly value_edited: Signal // object_id: number /*i64*/, property: string, : any /*value*/ => void
    }
    /** A class to interact with the editor debugger. */
    class EditorDebuggerSession extends RefCounted {
        /** Sends the given [param message] to the attached remote instance, optionally passing additionally [param data]. See [EngineDebugger] for how to retrieve those messages. */
        send_message(message: string, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Toggle the given [param profiler] on the attached remote instance, optionally passing additionally [param data]. See [EngineProfiler] for more details. */
        toggle_profiler(profiler: string, enable: boolean, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Returns `true` if the attached remote instance is currently in the debug loop. */
        is_breaked(): boolean
        
        /** Returns `true` if the attached remote instance can be debugged. */
        is_debuggable(): boolean
        
        /** Returns `true` if the debug session is currently attached to a remote instance. */
        is_active(): boolean
        
        /** Adds the given [param control] to the debug session UI in the debugger bottom panel. */
        add_session_tab(control: Control): void
        
        /** Removes the given [param control] from the debug session UI in the debugger bottom panel. */
        remove_session_tab(control: Control): void
        
        /** Emitted when a remote instance is attached to this session (i.e. the session becomes active). */
        readonly started: Signal //  => void
        
        /** Emitted when a remote instance is detached from this session (i.e. the session becomes inactive). */
        readonly stopped: Signal //  => void
        
        /** Emitted when the attached remote instance enters a break state. If [param can_debug] is `true`, the remote instance will enter the debug loop. */
        readonly breaked: Signal // can_debug: boolean => void
        
        /** Emitted when the attached remote instance exits a break state. */
        readonly continued: Signal //  => void
    }
    class EditorDebuggerTree extends Tree {
        readonly object_selected: Signal // object_id: number /*i64*/, debugger: number /*i64*/ => void
        readonly save_node: Signal // object_id: number /*i64*/, filename: string, debugger: number /*i64*/ => void
        readonly open: Signal //  => void
    }
    class EditorDirDialog extends ConfirmationDialog {
        readonly dir_selected: Signal // dir: string => void
    }
    class EditorExport extends Node {
        readonly export_presets_updated: Signal //  => void
    }
    class EditorExportGDScript extends EditorExportPlugin {
    }
    /** Identifies a supported export platform, and internally provides the functionality of exporting to that platform. */
    class EditorExportPlatform extends RefCounted {
        /** Returns the name of the export operating system handled by this [EditorExportPlatform] class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`. */
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
        /** Virtual method to be overridden by the user. Called for each exported file, providing arguments that can be used to identify the file. [param path] is the path of the file, [param type] is the [Resource] represented by the file (e.g. [PackedScene]) and [param features] is the list of features for the export.  
         *  Calling [method skip] inside this callback will make the file not included in the export.  
         */
        /* gdvirtual */ _export_file(path: string, type: string, features: PackedStringArray): void
        
        /** Virtual method to be overridden by the user. It is called when the export starts and provides all information about the export. [param features] is the list of features for the export, [param is_debug] is `true` for debug builds, [param path] is the target path for the exported project. [param flags] is only used when running a runnable profile, e.g. when using native run on Android. */
        /* gdvirtual */ _export_begin(features: PackedStringArray, is_debug: boolean, path: string, flags: number /*i64*/): void
        
        /** Virtual method to be overridden by the user. Called when the export is finished. */
        /* gdvirtual */ _export_end(): void
        
        /** Return `true` if this plugin will customize resources based on the platform and features used.  
         *  When enabled, [method _get_customization_configuration_hash], [method _customize_resource] and [method _customize_scene] will be called and must be implemented.  
         */
        /* gdvirtual */ _begin_customize_resources(platform: EditorExportPlatform, features: PackedStringArray): boolean
        
        /** Customize a resource. If changes are made to it, return the same or a new resource. Otherwise, return `null`.  
         *  The [i]path[/i] argument is only used when customizing an actual file, otherwise this means that this resource is part of another one and it will be empty.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         */
        /* gdvirtual */ _customize_resource(resource: Resource, path: string): Resource
        
        /** Return true if this plugin will customize scenes based on the platform and features used. */
        /* gdvirtual */ _begin_customize_scenes(platform: EditorExportPlatform, features: PackedStringArray): boolean
        
        /** Customize a scene. If changes are made to it, return the same or a new scene. Otherwise, return `null`. If a new scene is returned, it is up to you to dispose of the old one.  
         *  Implementing this method is required if [method _begin_customize_scenes] returns `true`.  
         */
        /* gdvirtual */ _customize_scene(scene: Node, path: string): Node
        
        /** Return a hash based on the configuration passed (for both scenes and resources). This helps keep separate caches for separate export configurations.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         */
        /* gdvirtual */ _get_customization_configuration_hash(): number /*i64*/
        
        /** This is called when the customization process for scenes ends. */
        /* gdvirtual */ _end_customize_scenes(): void
        
        /** This is called when the customization process for resources ends. */
        /* gdvirtual */ _end_customize_resources(): void
        
        /** Return a list of export options that can be configured for this export plugin.  
         *  Each element in the return value is a [Dictionary] with the following keys:  
         *  - `option`: A dictionary with the structure documented by [method Object.get_property_list], but all keys are optional.  
         *  - `default_value`: The default value for this option.  
         *  - `update_visibility`: An optional boolean value. If set to `true`, the preset will emit [signal Object.property_list_changed] when the option is changed.  
         */
        /* gdvirtual */ _get_export_options(platform: EditorExportPlatform): Array
        
        /** Return `true`, if the result of [method _get_export_options] has changed and the export options of preset corresponding to [param platform] should be updated. */
        /* gdvirtual */ _should_update_export_options(platform: EditorExportPlatform): boolean
        
        /** Check the requirements for the given [param option] and return a non-empty warning string if they are not met.  
         *      
         *  **Note:** Use [method get_option] to check the value of the export options.  
         */
        /* gdvirtual */ _get_export_option_warning(platform: EditorExportPlatform, option: string): string
        
        /** Return a [PackedStringArray] of additional features this preset, for the given [param platform], should have. */
        /* gdvirtual */ _get_export_features(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Return the name identifier of this plugin (for future identification by the exporter). The plugins are sorted by name before exporting.  
         *  Implementing this method is required.  
         */
        /* gdvirtual */ _get_name(): string
        
        /** Return `true` if the plugin supports the given [param platform]. */
        /* gdvirtual */ _supports_platform(platform: EditorExportPlatform): boolean
        
        /** Virtual method to be overridden by the user. This is called to retrieve the set of Android dependencies provided by this plugin. Each returned Android dependency should have the format of an Android remote binary dependency: `org.godot.example:my-plugin:0.0.0`  
         *  For more information see [url=https://developer.android.com/build/dependencies?agpversion=4.1#dependency-types]Android documentation on dependencies[/url].  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_dependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the URLs of Maven repositories for the set of Android dependencies provided by this plugin.  
         *  For more information see [url=https://docs.gradle.org/current/userguide/dependency_management.html#sec:maven_repo]Gradle documentation on dependency management[/url].  
         *      
         *  **Note:** Google's Maven repo and the Maven Central repo are already included by default.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_dependencies_maven_repos(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the local paths of the Android libraries archive (AAR) files provided by this plugin.  
         *      
         *  **Note:** Relative paths **must** be relative to Godot's `res://addons/` directory. For example, an AAR file located under `res://addons/hello_world_plugin/HelloWorld.release.aar` can be returned as an absolute path using `res://addons/hello_world_plugin/HelloWorld.release.aar` or a relative path using `hello_world_plugin/HelloWorld.release.aar`.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_libraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `activity` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_activity_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `application` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_application_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `manifest` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Adds a shared object or a directory containing only shared objects with the given [param tags] and destination [param path].  
         *      
         *  **Note:** In case of macOS exports, those shared objects will be added to `Frameworks` directory of app bundle.  
         *  In case of a directory code-sign will error if you place non code object in directory.  
         */
        add_shared_object(path: string, tags: PackedStringArray, target: string): void
        
        /** Adds a static lib from the given [param path] to the iOS project. */
        add_ios_project_static_lib(path: string): void
        
        /** Adds a custom file to be exported. [param path] is the virtual path that can be used to load the file, [param file] is the binary data of the file.  
         *  When called inside [method _export_file] and [param remap] is `true`, the current file will not be exported, but instead remapped to this custom file. [param remap] is ignored when called in other places.  
         */
        add_file(path: string, file: PackedByteArray, remap: boolean): void
        
        /** Adds a static library (*.a) or dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project. */
        add_ios_framework(path: string): void
        
        /** Adds a dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.  
         *      
         *  **Note:** For static libraries (*.a) works in same way as [method add_ios_framework].  
         *      
         *  **Note:** This method should not be used for System libraries as they are already present on the device.  
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
        
        /** Adds file or directory matching [param path] to `PlugIns` directory of macOS app bundle.  
         *      
         *  **Note:** This is useful only for macOS exports.  
         */
        add_macos_plugin_file(path: string): void
        
        /** To be called inside [method _export_file]. Skips the current file, so it's not included in the export. */
        skip(): void
        
        /** Returns the current value of an export option supplied by [method _get_export_options]. */
        get_option(name: StringName): any
    }
    namespace EditorFeatureProfile {
        enum Feature {
            /** The 3D editor. If this feature is disabled, the 3D editor won't display but 3D nodes will still display in the Create New Node dialog. */
            FEATURE_3D = 0,
            
            /** The Script tab, which contains the script editor and class reference browser. If this feature is disabled, the Script tab won't display. */
            FEATURE_SCRIPT = 1,
            
            /** The AssetLib tab. If this feature is disabled, the AssetLib tab won't display. */
            FEATURE_ASSET_LIB = 2,
            
            /** Scene tree editing. If this feature is disabled, the Scene tree dock will still be visible but will be read-only. */
            FEATURE_SCENE_TREE = 3,
            
            /** The Node dock. If this feature is disabled, signals and groups won't be visible and modifiable from the editor. */
            FEATURE_NODE_DOCK = 4,
            
            /** The FileSystem dock. If this feature is disabled, the FileSystem dock won't be visible. */
            FEATURE_FILESYSTEM_DOCK = 5,
            
            /** The Import dock. If this feature is disabled, the Import dock won't be visible. */
            FEATURE_IMPORT_DOCK = 6,
            
            /** The History dock. If this feature is disabled, the History dock won't be visible. */
            FEATURE_HISTORY_DOCK = 7,
            
            /** Represents the size of the [enum Feature] enum. */
            FEATURE_MAX = 8,
        }
    }
    /** An editor feature profile which can be used to disable specific features. */
    class EditorFeatureProfile extends RefCounted {
        /** If [param disable] is `true`, disables the class specified by [param class_name]. When disabled, the class won't appear in the Create New Node dialog. */
        set_disable_class(class_name: StringName, disable: boolean): void
        
        /** Returns `true` if the class specified by [param class_name] is disabled. When disabled, the class won't appear in the Create New Node dialog. */
        is_class_disabled(class_name: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for the class specified by [param class_name]. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        set_disable_class_editor(class_name: StringName, disable: boolean): void
        
        /** Returns `true` if editing for the class specified by [param class_name] is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        is_class_editor_disabled(class_name: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for [param property] in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        set_disable_class_property(class_name: StringName, property: StringName, disable: boolean): void
        
        /** Returns `true` if [param property] is disabled in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        is_class_property_disabled(class_name: StringName, property: StringName): boolean
        
        /** If [param disable] is `true`, disables the editor feature specified in [param feature]. When a feature is disabled, it will disappear from the editor entirely. */
        set_disable_feature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        
        /** Returns `true` if the [param feature] is disabled. When a feature is disabled, it will disappear from the editor entirely. */
        is_feature_disabled(feature: EditorFeatureProfile.Feature): boolean
        
        /** Returns the specified [param feature]'s human-readable name. */
        get_feature_name(feature: EditorFeatureProfile.Feature): string
        
        /** Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's **Import** button or the [method load_from_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are saved in the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        save_to_file(path: string): GodotError
        
        /** Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's **Export** button or the [method save_to_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        load_from_file(path: string): GodotError
    }
    class EditorFeatureProfileManager extends AcceptDialog {
        readonly current_feature_profile_changed: Signal //  => void
    }
    namespace EditorFileDialog {
        enum FileMode {
            /** The [EditorFileDialog] can select only one file. Accepting the window will open the file. */
            FILE_MODE_OPEN_FILE = 0,
            
            /** The [EditorFileDialog] can select multiple files. Accepting the window will open all files. */
            FILE_MODE_OPEN_FILES = 1,
            
            /** The [EditorFileDialog] can select only one directory. Accepting the window will open the directory. */
            FILE_MODE_OPEN_DIR = 2,
            
            /** The [EditorFileDialog] can select a file or directory. Accepting the window will open it. */
            FILE_MODE_OPEN_ANY = 3,
            
            /** The [EditorFileDialog] can select only one file. Accepting the window will save the file. */
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            /** The [EditorFileDialog] can only view `res://` directory contents. */
            ACCESS_RESOURCES = 0,
            
            /** The [EditorFileDialog] can only view `user://` directory contents. */
            ACCESS_USERDATA = 1,
            
            /** The [EditorFileDialog] can view the entire local file system. */
            ACCESS_FILESYSTEM = 2,
        }
        enum DisplayMode {
            /** The [EditorFileDialog] displays resources as thumbnails. */
            DISPLAY_THUMBNAILS = 0,
            
            /** The [EditorFileDialog] displays resources as a list of filenames. */
            DISPLAY_LIST = 1,
        }
    }
    /** A modified version of [FileDialog] used by the editor. */
    class EditorFileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        
        /** Removes all filters except for "All Files (*)". */
        clear_filters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [EditorFileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.tscn, *.scn"` and a [param description] of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".  
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
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_vbox(): VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
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
        
        /** The location from which the user may select a file, including `res://`, `user://`, and the local file system. */
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
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        
        /** If `true`, hidden files and directories will be visible in the [EditorFileDialog]. This property is synchronized with [member EditorSettings.filesystem/file_dialog/show_hidden_files]. */
        show_hidden_files: boolean
        
        /** If `true`, the [EditorFileDialog] will not warn the user before overwriting files. */
        disable_overwrite_warning: boolean
        
        /** Emitted when a file is selected. */
        readonly file_selected: Signal // path: string => void
        
        /** Emitted when multiple files are selected. */
        readonly files_selected: Signal // paths: PackedStringArray => void
        
        /** Emitted when a directory is selected. */
        readonly dir_selected: Signal // dir: string => void
    }
    class EditorFileServer extends Object {
    }
    /** Resource filesystem, as the editor sees it. */
    class EditorFileSystem extends Node {
        /** Gets the root directory object. */
        get_filesystem(): EditorFileSystemDirectory
        
        /** Returns `true` if the filesystem is being scanned. */
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
        
        /** Returns the resource type of the file, given the full path. This returns a string such as `"Resource"` or `"GDScript"`, [i]not[/i] a file extension such as `".gd"`. */
        get_file_type(path: string): string
        
        /** Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.  
         *  If the file type changed or the file was newly created, use [method update_file] or [method scan].  
         *      
         *  **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and [method Node._process], will occur during the import process due to progress bar updates. Avoid calls to [method reimport_files] or [method scan] while an import is in progress.  
         */
        reimport_files(files: PackedStringArray): void
        
        /** Emitted if the filesystem changed. */
        readonly filesystem_changed: Signal //  => void
        
        /** Emitted when the list of global script classes gets updated. */
        readonly script_classes_updated: Signal //  => void
        
        /** Emitted if the source of any imported file changed. */
        readonly sources_changed: Signal // exist: boolean => void
        
        /** Emitted if a resource is reimported. */
        readonly resources_reimported: Signal // resources: PackedStringArray => void
        
        /** Emitted if at least one resource is reloaded when the filesystem is scanned. */
        readonly resources_reload: Signal // resources: PackedStringArray => void
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
        
        /** Returns the resource type of the file at index [param idx]. This returns a string such as `"Resource"` or `"GDScript"`, [i]not[/i] a file extension such as `".gd"`. */
        get_file_type(idx: number /*i64*/): StringName
        
        /** Returns the name of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        get_file_script_class_name(idx: number /*i64*/): string
        
        /** Returns the base class of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        get_file_script_class_extends(idx: number /*i64*/): string
        
        /** Returns `true` if the file at index [param idx] imported properly. */
        get_file_import_is_valid(idx: number /*i64*/): boolean
        
        /** Returns the name of this directory. */
        get_name(): string
        
        /** Returns the path to this directory. */
        get_path(): string
        
        /** Returns the parent directory for this directory or `null` if called on a directory at `res://` or `user://`. */
        get_parent(): EditorFileSystemDirectory
        
        /** Returns the index of the file with name [param name] or `-1` if not found. */
        find_file_index(name: string): number /*i64*/
        
        /** Returns the index of the directory with name [param name] or `-1` if not found. */
        find_dir_index(name: string): number /*i64*/
    }
    /** Used to query and configure import format support. */
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
        /** Return whether this importer is active. */
        /* gdvirtual */ _is_active(): boolean
        
        /** Return the file extensions supported. */
        /* gdvirtual */ _get_file_extensions(): PackedStringArray
        
        /** Query support. Return false if import must not continue. */
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
        readonly request_hide: Signal //  => void
    }
    class EditorHelpSearch extends ConfirmationDialog {
        readonly go_to_help: Signal //  => void
    }
    class EditorImagePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorImportBlendRunner extends Node {
    }
    /** Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type. */
    class EditorImportPlugin extends ResourceImporter {
        /** Gets the unique name of the importer. */
        /* gdvirtual */ _get_importer_name(): string
        
        /** Gets the name to display in the import window. You should choose this name as a continuation to "Import as", e.g. "Import as Special Mesh". */
        /* gdvirtual */ _get_visible_name(): string
        
        /** Gets the number of initial presets defined by the plugin. Use [method _get_import_options] to get the default options for the preset and [method _get_preset_name] to get the name of the preset. */
        /* gdvirtual */ _get_preset_count(): number /*i64*/
        
        /** Gets the name of the options preset at this index. */
        /* gdvirtual */ _get_preset_name(preset_index: number /*i64*/): string
        
        /** Gets the list of file extensions to associate with this loader (case-insensitive). e.g. `["obj"]`. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        
        /** Gets the options and default values for the preset at this index. Returns an Array of Dictionaries with the following keys: `name`, `default_value`, `property_hint` (optional), `hint_string` (optional), `usage` (optional). */
        /* gdvirtual */ _get_import_options(path: string, preset_index: number /*i64*/): Array
        
        /** Gets the extension used to save this resource in the `.godot/imported` directory (see [member ProjectSettings.application/config/use_hidden_project_data_directory]). */
        /* gdvirtual */ _get_save_extension(): string
        
        /** Gets the Godot resource type associated with this loader. e.g. `"Mesh"` or `"Animation"`. */
        /* gdvirtual */ _get_resource_type(): string
        
        /** Gets the priority of this plugin for the recognized extension. Higher priority plugins will be preferred. The default priority is `1.0`. */
        /* gdvirtual */ _get_priority(): number /*f64*/
        
        /** Gets the order of this importer to be run when importing resources. Importers with [i]lower[/i] import orders will be called first, and higher values will be called later. Use this to ensure the importer runs after the dependencies are already imported. The default import order is `0` unless overridden by a specific importer. See [enum ResourceImporter.ImportOrder] for some predefined values. */
        /* gdvirtual */ _get_import_order(): number /*i64*/
        
        /** This method can be overridden to hide specific import options if conditions are met. This is mainly useful for hiding options that depend on others if one of them is disabled. For example:  
         *    
         *  Returns `true` to make all options always visible.  
         */
        /* gdvirtual */ _get_option_visibility(path: string, option_name: StringName, options: Dictionary): boolean
        
        /** Imports [param source_file] into [param save_path] with the import [param options] specified. The [param platform_variants] and [param gen_files] arrays will be modified by this function.  
         *  This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.  
         */
        /* gdvirtual */ _import(source_file: string, save_path: string, options: Dictionary, platform_variants: Array, gen_files: Array): GodotError
        
        /** This function can only be called during the [method _import] callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the [param custom_options]. Additionally, in cases where multiple importers can handle a file, the [param custom_importer] ca be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. [param generator_parameters] defines optional extra metadata which will be stored as [code skip-lint]generator_parameters` in the `remap` section of the `.import` file, for example to store a md5 hash of the source data. */
        append_import_external_resource(path: string, custom_options: Dictionary = <any> {} /*compound.type from 27([object Object])*/, custom_importer: string = '', generator_parameters: any = <any> {} /*compound.type from nil*/): GodotError
    }
    /** A control used to edit properties of an object. */
    class EditorInspector extends ScrollContainer {
        _edit_request_change(_unnamed_arg0: Object, _unnamed_arg1: string): void
        
        /** Gets the path of the currently selected property. */
        get_selected_path(): string
        
        /** Returns the object currently selected in this inspector. */
        get_edited_object(): Object
        
        /** Emitted when a property is selected in the inspector. */
        readonly property_selected: Signal // property: string => void
        
        /** Emitted when a property is keyed in the inspector. Properties can be keyed by clicking the "key" icon next to a property when the Animation panel is toggled. */
        readonly property_keyed: Signal // property: string, value: any, advance: boolean => void
        
        /** Emitted when a property is removed from the inspector. */
        readonly property_deleted: Signal // property: string => void
        
        /** Emitted when a resource is selected in the inspector. */
        readonly resource_selected: Signal // resource: Resource, path: string => void
        
        /** Emitted when the Edit button of an [Object] has been pressed in the inspector. This is mainly used in the remote scene tree Inspector. */
        readonly object_id_selected: Signal // id: number /*i64*/ => void
        
        /** Emitted when a property is edited in the inspector. */
        readonly property_edited: Signal // property: string => void
        
        /** Emitted when a boolean property is toggled in the inspector.  
         *      
         *  **Note:** This signal is never emitted if the internal `autoclear` property enabled. Since this property is always enabled in the editor inspector, this signal is never emitted by the editor itself.  
         */
        readonly property_toggled: Signal // property: string, checked: boolean => void
        
        /** Emitted when the object being edited by the inspector has changed. */
        readonly edited_object_changed: Signal //  => void
        
        /** Emitted when a property that requires a restart to be applied is edited in the inspector. This is only used in the Project Settings and Editor Settings. */
        readonly restart_requested: Signal //  => void
    }
    class EditorInspectorCategory extends Control {
    }
    class EditorInspectorDefaultPlugin extends EditorInspectorPlugin {
    }
    /** Plugin for adding custom property editors on the inspector. */
    class EditorInspectorPlugin extends RefCounted {
        /** Returns `true` if this object can be handled by this plugin. */
        /* gdvirtual */ _can_handle(object: Object): boolean
        
        /** Called to allow adding controls at the beginning of the property list for [param object]. */
        /* gdvirtual */ _parse_begin(object: Object): void
        
        /** Called to allow adding controls at the beginning of a category in the property list for [param object]. */
        /* gdvirtual */ _parse_category(object: Object, category: string): void
        
        /** Called to allow adding controls at the beginning of a group or a sub-group in the property list for [param object]. */
        /* gdvirtual */ _parse_group(object: Object, group: string): void
        
        /** Called to allow adding property-specific editors to the property list for [param object]. The added editor control must extend [EditorProperty]. Returning `true` removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one. */
        /* gdvirtual */ _parse_property(object: Object, type: Variant.Type, name: string, hint_type: PropertyHint, hint_string: string, usage_flags: PropertyUsageFlags, wide: boolean): boolean
        
        /** Called to allow adding controls at the end of the property list for [param object]. */
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
        readonly name_confirmed: Signal // name: string => void
    }
    class EditorLocaleDialog extends ConfirmationDialog {
        readonly locale_selected: Signal // locale: string => void
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
        readonly enable_profiling: Signal // enable: boolean => void
        readonly open_request: Signal // path: string => void
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
        readonly request_help_search: Signal //  => void
        readonly script_add_function_request: Signal // obj: Object, function: string, args: PackedStringArray => void
        readonly resource_saved: Signal // obj: Object => void
        readonly scene_saved: Signal // path: string => void
        readonly scene_changed: Signal //  => void
        readonly scene_closed: Signal // path: string => void
    }
    /** Gizmo for editing [Node3D] objects. */
    class EditorNode3DGizmo extends Node3DGizmo {
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(): void
        
        /** Override this method to return the name of an edited handle (handles must have been previously added by [method add_handles]). Handles can be named for reference to the user when editing.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _get_handle_name(id: number /*i64*/, secondary: boolean): string
        
        /** Override this method to return `true` whenever the given handle should be highlighted in the editor.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _is_handle_highlighted(id: number /*i64*/, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _get_handle_value(id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(id: number /*i64*/, secondary: boolean): void
        
        /** Override this method to update the node properties when the user drags a gizmo handle (previously added with [method add_handles]). The provided [param point] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _set_handle(id: number /*i64*/, secondary: boolean, camera: Camera3D, point: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method add_handles]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _commit_handle(id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param point] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmos_intersect_ray(camera: Camera3D, point: Vector2): number /*i64*/
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and a [param frustum], this method should return which subgizmos are contained within the frustum. The [param frustum] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmos_intersect_frustum(camera: Camera3D, frustum: Array): PackedInt32Array
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the [Node3D]'s local coordinate system. */
        /* gdvirtual */ _set_subgizmo_transform(id: number /*i64*/, transform: Transform3D): void
        
        /** Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the `restore` argument in [method _commit_subgizmos]. */
        /* gdvirtual */ _get_subgizmo_transform(id: number /*i64*/): Transform3D
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action.  
         */
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
        
        /** Sets the gizmo's hidden state. If `true`, the gizmo will be hidden. If `false`, it will be shown. */
        set_hidden(hidden: boolean): void
        
        /** Returns `true` if the given subgizmo is currently selected. Can be used to highlight selected elements during [method _redraw]. */
        is_subgizmo_selected(id: number /*i64*/): boolean
        
        /** Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [method _redraw]. */
        get_subgizmo_selection(): PackedInt32Array
    }
    /** A class used by the editor to define Node3D gizmo types. */
    class EditorNode3DGizmoPlugin extends Resource {
        /** Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a [Node3D] node is added to a scene this method is called, if it returns `true` the node gets a generic [EditorNode3DGizmo] assigned and is added to this plugin's list of active gizmos. */
        /* gdvirtual */ _has_gizmo(for_node_3d: Node3D): boolean
        
        /** Override this method to return a custom [EditorNode3DGizmo] for the spatial nodes of your choice, return `null` for the rest of nodes. See also [method _has_gizmo]. */
        /* gdvirtual */ _create_gizmo(for_node_3d: Node3D): EditorNode3DGizmo
        
        /** Override this method to provide the name that will appear in the gizmo visibility menu. */
        /* gdvirtual */ _get_gizmo_name(): string
        
        /** Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.  
         *  All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.  
         */
        /* gdvirtual */ _get_priority(): number /*i64*/
        
        /** Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns `true` if not overridden. */
        /* gdvirtual */ _can_be_hidden(): boolean
        
        /** Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden. */
        /* gdvirtual */ _is_selectable_when_hidden(): boolean
        
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method EditorNode3DGizmo.clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(gizmo: EditorNode3DGizmo): void
        
        /** Override this method to provide gizmo's handle names. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _get_handle_name(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): string
        
        /** Override this method to return `true` whenever to given handle should be highlighted in the editor. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _is_handle_highlighted(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _get_handle_value(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        
        /** Override this method to update the node's properties when the user drags a gizmo handle (previously added with [method EditorNode3DGizmo.add_handles]). The provided [param screen_pos] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _set_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, camera: Camera3D, screen_pos: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method EditorNode3DGizmo.add_handles] during [method _redraw]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _commit_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param screen_pos] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmos_intersect_ray(gizmo: EditorNode3DGizmo, camera: Camera3D, screen_pos: Vector2): number /*i64*/
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and [param frustum_planes], this method should return which subgizmos are contained within the frustums. The [param frustum_planes] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmos_intersect_frustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustum_planes: Array): PackedInt32Array
        
        /** Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the `restore` argument in [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _get_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/): Transform3D
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the Node3D's local coordinate system. Called for this plugin's active gizmos. */
        /* gdvirtual */ _set_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/, transform: Transform3D): void
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.  
         */
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
         *  **Default paths per platform:**  
         *    
         */
        get_data_dir(): string
        
        /** Returns the absolute path to the user's configuration folder. This folder should be used for [i]persistent[/i] user configuration files.  
         *  **Default paths per platform:**  
         *    
         */
        get_config_dir(): string
        
        /** Returns the absolute path to the user's cache folder. This folder should be used for temporary data that can be removed safely whenever the editor is closed (such as generated resource thumbnails).  
         *  **Default paths per platform:**  
         *    
         */
        get_cache_dir(): string
        
        /** Returns `true` if the editor is marked as self-contained, `false` otherwise. When self-contained mode is enabled, user configuration, data and cache files are saved in an `editor_data/` folder next to the editor binary. This makes portable usage easier and ensures the Godot editor minimizes file writes outside its own folder. Self-contained mode is not available for exported projects.  
         *  Self-contained mode can be enabled by creating a file named `._sc_` or `_sc_` in the same folder as the editor binary or macOS .app bundle while the editor is not running. See also [method get_self_contained_file].  
         *      
         *  **Note:** On macOS, quarantine flag should be manually removed before using self-contained mode, see [url=https://docs.godotengine.org/en/stable/tutorials/export/running_on_macos.html]Running on macOS[/url].  
         *      
         *  **Note:** On macOS, placing `_sc_` or any other file inside .app bundle will break digital signature and make it non-portable, consider placing it in the same folder as the .app bundle instead.  
         *      
         *  **Note:** The Steam release of Godot uses self-contained mode by default.  
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
            /** Main editor toolbar, next to play buttons. */
            CONTAINER_TOOLBAR = 0,
            
            /** The toolbar that appears when 3D editor is active. */
            CONTAINER_SPATIAL_EDITOR_MENU = 1,
            
            /** Left sidebar of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_SIDE_LEFT = 2,
            
            /** Right sidebar of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT = 3,
            
            /** Bottom panel of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_BOTTOM = 4,
            
            /** The toolbar that appears when 2D editor is active. */
            CONTAINER_CANVAS_EDITOR_MENU = 5,
            
            /** Left sidebar of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_SIDE_LEFT = 6,
            
            /** Right sidebar of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_SIDE_RIGHT = 7,
            
            /** Bottom panel of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_BOTTOM = 8,
            
            /** Bottom section of the inspector. */
            CONTAINER_INSPECTOR_BOTTOM = 9,
            
            /** Tab of Project Settings dialog, to the left of other tabs. */
            CONTAINER_PROJECT_SETTING_TAB_LEFT = 10,
            
            /** Tab of Project Settings dialog, to the right of other tabs. */
            CONTAINER_PROJECT_SETTING_TAB_RIGHT = 11,
        }
        enum DockSlot {
            /** Dock slot, left side, upper-left (empty in default layout). */
            DOCK_SLOT_LEFT_UL = 0,
            
            /** Dock slot, left side, bottom-left (empty in default layout). */
            DOCK_SLOT_LEFT_BL = 1,
            
            /** Dock slot, left side, upper-right (in default layout includes Scene and Import docks). */
            DOCK_SLOT_LEFT_UR = 2,
            
            /** Dock slot, left side, bottom-right (in default layout includes FileSystem dock). */
            DOCK_SLOT_LEFT_BR = 3,
            
            /** Dock slot, right side, upper-left (in default layout includes Inspector, Node, and History docks). */
            DOCK_SLOT_RIGHT_UL = 4,
            
            /** Dock slot, right side, bottom-left (empty in default layout). */
            DOCK_SLOT_RIGHT_BL = 5,
            
            /** Dock slot, right side, upper-right (empty in default layout). */
            DOCK_SLOT_RIGHT_UR = 6,
            
            /** Dock slot, right side, bottom-right (empty in default layout). */
            DOCK_SLOT_RIGHT_BR = 7,
            
            /** Represents the size of the [enum DockSlot] enum. */
            DOCK_SLOT_MAX = 8,
        }
        enum AfterGUIInput {
            /** Forwards the [InputEvent] to other EditorPlugins. */
            AFTER_GUI_INPUT_PASS = 0,
            
            /** Prevents the [InputEvent] from reaching other Editor classes. */
            AFTER_GUI_INPUT_STOP = 1,
            
            /** Pass the [InputEvent] to other editor plugins except the main [Node3D] one. This can be used to prevent node selection changes and work with sub-gizmos instead. */
            AFTER_GUI_INPUT_CUSTOM = 2,
        }
    }
    /** Used by the editor to extend its functionality. */
    class EditorPlugin extends Node {
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented and an [InputEvent] happens in the 2D viewport. Intercepts the [InputEvent], if `return true` [EditorPlugin] consumes the [param event], otherwise forwards [param event] to other Editor classes.  
         *  **Example:**  
         *    
         *  Must `return false` in order to forward the [InputEvent] to other Editor classes.  
         *  **Example:**  
         *    
         */
        /* gdvirtual */ _forward_canvas_gui_input(event: InputEvent): boolean
        
        /** Called by the engine when the 2D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forward_canvas_draw_over_viewport(viewport_control: Control): void
        
        /** This method is the same as [method _forward_canvas_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forward_canvas_force_draw_over_viewport(viewport_control: Control): void
        
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented, and an [InputEvent] happens in the 3D viewport. The return value decides whether the [InputEvent] is consumed or forwarded to other [EditorPlugin]s. See [enum AfterGUIInput] for options.  
         *  **Example:**  
         *    
         *  Must `return EditorPlugin.AFTER_GUI_INPUT_PASS` in order to forward the [InputEvent] to other Editor classes.  
         *  **Example:**  
         *    
         */
        /* gdvirtual */ _forward_3d_gui_input(viewport_camera: Camera3D, event: InputEvent): number /*i64*/
        
        /** Called by the engine when the 3D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forward_3d_draw_over_viewport(viewport_control: Control): void
        
        /** This method is the same as [method _forward_3d_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forward_3d_force_draw_over_viewport(viewport_control: Control): void
        
        /** Override this method in your plugin to provide the name of the plugin when displayed in the Godot editor.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.  
         */
        /* gdvirtual */ _get_plugin_name(): string
        
        /** Override this method in your plugin to return a [Texture2D] in order to give it an icon.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.  
         *  Ideally, the plugin icon should be white with a transparent background and 16x16 pixels in size.  
         *    
         */
        /* gdvirtual */ _get_plugin_icon(): Texture2D
        
        /** Returns `true` if this is a main screen editor plugin (it goes in the workspace selector together with **2D**, **3D**, **Script** and **AssetLib**).  
         *  When the plugin's workspace is selected, other main screen plugins will be hidden, but your plugin will not appear automatically. It needs to be added as a child of [method EditorInterface.get_base_control] and made visible inside [method _make_visible].  
         *  Use [method _get_plugin_name] and [method _get_plugin_icon] to customize the plugin button's appearance.  
         *    
         */
        /* gdvirtual */ _has_main_screen(): boolean
        
        /** This function will be called when the editor is requested to become visible. It is used for plugins that edit a specific object type.  
         *  Remember that you have to manage the visibility of all your editor controls manually.  
         */
        /* gdvirtual */ _make_visible(visible: boolean): void
        
        /** This function is used for plugins that edit specific object types (nodes or resources). It requests the editor to edit the given object.  
         *  [param object] can be `null` if the plugin was editing an object, but there is no longer any selected object handled by this plugin. It can be used to cleanup editing state.  
         */
        /* gdvirtual */ _edit(object: Object): void
        
        /** Implement this function if your plugin edits a specific type of object (Resource or Node). If you return `true`, then you will get the functions [method _edit] and [method _make_visible] called when the editor requests them. If you have declared the methods [method _forward_canvas_gui_input] and [method _forward_3d_gui_input] these will be called too.  
         *      
         *  **Note:** Each plugin should handle only one type of objects at a time. If a plugin handles more types of objects and they are edited at the same time, it will result in errors.  
         */
        /* gdvirtual */ _handles(object: Object): boolean
        
        /** Override this method to provide a state data you want to be saved, like view position, grid settings, folding, etc. This is used when saving the scene (so state is kept when opening it again) and for switching tabs (so state can be restored when the tab returns). This data is automatically saved for each scene in an `editstate` file in the editor metadata folder. If you want to store global (scene-independent) editor data for your plugin, you can use [method _get_window_layout] instead.  
         *  Use [method _set_state] to restore your saved state.  
         *      
         *  **Note:** This method should not be used to save important settings that should persist with the project.  
         *      
         *  **Note:** You must implement [method _get_plugin_name] for the state to be stored and restored correctly.  
         *    
         */
        /* gdvirtual */ _get_state(): Dictionary
        
        /** Restore the state saved by [method _get_state]. This method is called when the current scene tab is changed in the editor.  
         *      
         *  **Note:** Your plugin must implement [method _get_plugin_name], otherwise it will not be recognized and this method will not be called.  
         *    
         */
        /* gdvirtual */ _set_state(state: Dictionary): void
        
        /** Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene. */
        /* gdvirtual */ _clear(): void
        
        /** Override this method to provide a custom message that lists unsaved changes. The editor will call this method when exiting or when closing a scene, and display the returned string in a confirmation dialog. Return empty string if the plugin has no unsaved changes.  
         *  When closing a scene, [param for_scene] is the path to the scene being closed. You can use it to handle built-in resources in that scene.  
         *  If the user confirms saving, [method _save_external_data] will be called, before closing the editor.  
         *    
         *  If the plugin has no scene-specific changes, you can ignore the calls when closing scenes:  
         *    
         */
        /* gdvirtual */ _get_unsaved_status(for_scene: string): string
        
        /** This method is called after the editor saves the project or when it's closed. It asks the plugin to save edited external scenes/resources. */
        /* gdvirtual */ _save_external_data(): void
        
        /** This method is called when the editor is about to save the project, switch to another tab, etc. It asks the plugin to apply any pending state changes to ensure consistency.  
         *  This is used, for example, in shader editors to let the plugin know that it must apply the shader code being written by the user to the object.  
         */
        /* gdvirtual */ _apply_changes(): void
        
        /** This is for editors that edit script-based objects. You can return a list of breakpoints in the format (`script:line`), for example: `res://path_to_script.gd:25`. */
        /* gdvirtual */ _get_breakpoints(): PackedStringArray
        
        /** Restore the plugin GUI layout and data saved by [method _get_window_layout]. This method is called for every plugin on editor startup. Use the provided [param configuration] file to read your saved data.  
         *    
         */
        /* gdvirtual */ _set_window_layout(configuration: ConfigFile): void
        
        /** Override this method to provide the GUI layout of the plugin or any other data you want to be stored. This is used to save the project's editor layout when [method queue_save_layout] is called or the editor layout was changed (for example changing the position of a dock). The data is stored in the `editor_layout.cfg` file in the editor metadata directory.  
         *  Use [method _set_window_layout] to restore your saved layout.  
         *    
         */
        /* gdvirtual */ _get_window_layout(configuration: ConfigFile): void
        
        /** This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.  
         *  This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [method _build] methods from running.  
         */
        /* gdvirtual */ _build(): boolean
        
        /** Called by the engine when the user enables the [EditorPlugin] in the Plugin tab of the project settings window. */
        /* gdvirtual */ _enable_plugin(): void
        
        /** Called by the engine when the user disables the [EditorPlugin] in the Plugin tab of the project settings window. */
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
        
        /** Adds a custom menu item to **Project > Tools** named [param name]. When clicked, the provided [param callable] will be called. */
        add_tool_menu_item(name: string, callable: Callable): void
        
        /** Adds a custom [PopupMenu] submenu under **Project > Tools >** [param name]. Use [method remove_tool_menu_item] on plugin clean up to remove the menu. */
        add_tool_submenu_item(name: string, submenu: PopupMenu): void
        
        /** Removes a menu [param name] from **Project > Tools**. */
        remove_tool_menu_item(name: string): void
        
        /** Returns the [PopupMenu] under **Scene > Export As...**. */
        get_export_as_menu(): PopupMenu
        
        /** Adds a custom type, which will appear in the list of nodes or resources. An icon can be optionally passed.  
         *  When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.  
         *      
         *  **Note:** The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.  
         *  You can use the virtual method [method _handles] to check if your custom object is being edited by checking the script or using the `is` keyword.  
         *  During run-time, this will be a simple object with a script so this function does not need to be called then.  
         *      
         *  **Note:** Custom types added this way are not true classes. They are just a helper to create a node with specific script.  
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
         *  The callback should have 4 arguments: [Object] `undo_redo`, [Object] `modified_object`, [String] `property` and [Variant] `new_value`. They are, respectively, the [UndoRedo] object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.  
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
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         *      
         *  **Note:** If you want to import custom 3D asset formats use [method add_scene_format_importer_plugin] instead.  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        add_import_plugin(importer: EditorImportPlugin, first_priority: boolean = false): void
        
        /** Removes an import plugin registered by [method add_import_plugin]. */
        remove_import_plugin(importer: EditorImportPlugin): void
        
        /** Registers a new [EditorSceneFormatImporter]. Scene importers are used to import custom 3D asset formats as scenes.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         */
        add_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter, first_priority: boolean = false): void
        
        /** Removes a scene format importer registered by [method add_scene_format_importer_plugin]. */
        remove_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter): void
        
        /** Add a [EditorScenePostImportPlugin]. These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
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
         *      
         *  **Note:** Always use [method remove_inspector_plugin] to remove the registered [EditorInspectorPlugin] when your [EditorPlugin] is disabled to prevent leaks and an unexpected behavior.  
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
         *      
         *  **Note:** Users can configure it before use.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        get_script_create_dialog(): ScriptCreateDialog
        
        /** Adds a [Script] as debugger plugin to the Debugger. The script must extend [EditorDebuggerPlugin]. */
        add_debugger_plugin(script: EditorDebuggerPlugin): void
        
        /** Removes the debugger plugin with given script from the Debugger. */
        remove_debugger_plugin(script: EditorDebuggerPlugin): void
        
        /** Provide the version of the plugin declared in the `plugin.cfg` config file. */
        get_plugin_version(): string
        
        /** Emitted when the scene is changed in the editor. The argument will return the root node of the scene that has just become active. If this scene is new and empty, the argument will be `null`. */
        readonly scene_changed: Signal // scene_root: Node => void
        
        /** Emitted when user closes a scene. The argument is file path to a closed scene. */
        readonly scene_closed: Signal // filepath: string => void
        
        /** Emitted when user changes the workspace (**2D**, **3D**, **Script**, **AssetLib**). Also works with custom screens defined by plugins. */
        readonly main_screen_changed: Signal // screen_name: string => void
        
        /** Emitted when the given [param resource] was saved on disc. */
        readonly resource_saved: Signal // resource: Resource => void
        
        /** Emitted when any project setting has changed.  
         *  [i]Deprecated.[/i] Use [signal ProjectSettings.settings_changed] instead.  
         */
        readonly project_settings_changed: Signal //  => void
    }
    class EditorPluginCSG extends EditorPlugin {
    }
    class EditorPluginSettings extends VBoxContainer {
    }
    class EditorProfiler extends VBoxContainer {
        readonly enable_profiling: Signal // enable: boolean => void
        readonly break_request: Signal //  => void
    }
    /** Custom control for editing properties that can be added to the [EditorInspector]. */
    class EditorProperty extends Container {
        /** When this virtual function is called, you must update your editor. */
        /* gdvirtual */ _update_property(): void
        
        /** Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state. */
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
        
        /** If one or several properties have changed, this must be called. [param field] is used in case your editor can modify fields separately (as an example, Vector3.x). The [param changing] argument avoids the editor requesting this property to be refreshed (leave as `false` if unsure). */
        emit_changed(property: StringName, value: any, field: StringName = '', changing: boolean = false): void
        _update_editor_property_status(): void
        
        /** Set this property to change the label (if you want to show one). */
        label: string
        
        /** Used by the inspector, set to `true` when the property is read-only. */
        read_only: boolean
        
        /** Used by the inspector, set to `true` when the property is checkable. */
        checkable: boolean
        
        /** Used by the inspector, set to `true` when the property is checked. */
        checked: boolean
        
        /** Used by the inspector, set to `true` when the property is drawn with the editor theme's warning color. This is used for editable children's properties. */
        draw_warning: boolean
        
        /** Used by the inspector, set to `true` when the property can add keys for animation. */
        keying: boolean
        
        /** Used by the inspector, set to `true` when the property can be deleted by the user. */
        deletable: boolean
        
        /** Do not emit this manually, use the [method emit_changed] method instead. */
        readonly property_changed: Signal // property: StringName, value: any, field: StringName, changing: boolean => void
        
        /** Emit it if you want multiple properties modified at the same time. Do not use if added via [method EditorInspectorPlugin._parse_property]. */
        readonly multiple_properties_changed: Signal // properties: PackedStringArray, value: Array => void
        
        /** Emit it if you want to add this value as an animation key (check for keying being enabled first). */
        readonly property_keyed: Signal // property: StringName => void
        
        /** Emitted when a property was deleted. Used internally. */
        readonly property_deleted: Signal // property: StringName => void
        
        /** Emit it if you want to key a property with a single value. */
        readonly property_keyed_with_value: Signal // property: StringName, value: any => void
        
        /** Emitted when a property was checked. Used internally. */
        readonly property_checked: Signal // property: StringName, checked: boolean => void
        
        /** Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.  
         *  The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.  
         */
        readonly property_pinned: Signal // property: StringName, pinned: boolean => void
        
        /** Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed. */
        readonly property_can_revert_changed: Signal // property: StringName, can_revert: boolean => void
        
        /** If you want a sub-resource to be edited, emit this signal with the resource. */
        readonly resource_selected: Signal // path: string, resource: Resource => void
        
        /** Used by sub-inspectors. Emit it if what was selected was an Object ID. */
        readonly object_id_selected: Signal // property: StringName, id: number /*i64*/ => void
        
        /** Emitted when selected. Used internally. */
        readonly selected: Signal // path: string, focusable_idx: number /*i64*/ => void
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
        readonly quick_open: Signal //  => void
    }
    /** Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a [StandardMaterial3D] to a [ShaderMaterial]. */
    class EditorResourceConversionPlugin extends RefCounted {
        /** Returns the class name of the target type of [Resource] that this plugin converts source resources to. */
        /* gdvirtual */ _converts_to(): string
        
        /** Called to determine whether a particular [Resource] can be converted to the target resource type by this plugin. */
        /* gdvirtual */ _handles(resource: Resource): boolean
        
        /** Takes an input [Resource] and converts it to the type given in [method _converts_to]. The returned [Resource] is the result of the conversion, and the input [Resource] remains unchanged. */
        /* gdvirtual */ _convert(resource: Resource): Resource
    }
    /** Godot editor's control for selecting [Resource] type properties. */
    class EditorResourcePicker extends HBoxContainer {
        /** This virtual method is called when updating the context menu of [EditorResourcePicker]. Implement this method to override the "New ..." items with your own options. [param menu_node] is a reference to the [PopupMenu] node.  
         *      
         *  **Note:** Implement [method _handle_menu_selected] to handle these custom items.  
         */
        /* gdvirtual */ _set_create_options(menu_node: Object): void
        
        /** This virtual method can be implemented to handle context menu items not handled by default. See [method _set_create_options]. */
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
        
        /** Sets the toggle mode state for the main button. Works only if [member toggle_mode] is set to `true`. */
        set_toggle_pressed(pressed: boolean): void
        set_editable(enable: boolean): void
        is_editable(): boolean
        
        /** The base type of allowed resource types. Can be a comma-separated list of several options. */
        base_type: string
        
        /** The edited resource value. */
        edited_resource: Resource
        
        /** If `true`, the value can be selected and edited. */
        editable: boolean
        
        /** If `true`, the main button with the resource preview works in the toggle mode. Use [method set_toggle_pressed] to manually set the state. */
        toggle_mode: boolean
        
        /** Emitted when the resource value was set and user clicked to edit it. When [param inspect] is `true`, the signal was caused by the context menu "Edit" or "Inspect" option. */
        readonly resource_selected: Signal // resource: Resource, inspect: boolean => void
        
        /** Emitted when the value of the edited resource was changed. */
        readonly resource_changed: Signal // resource: Resource => void
    }
    /** A node used to generate previews of resources or files. */
    class EditorResourcePreview extends Node {
        /** Queue a resource file located at [param path] for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.  
         */
        queue_resource_preview(path: string, receiver: Object, receiver_func: StringName, userdata: any): void
        
        /** Queue the [param resource] being edited for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.  
         */
        queue_edited_resource_preview(resource: Resource, receiver: Object, receiver_func: StringName, userdata: any): void
        
        /** Create an own, custom preview generator. */
        add_preview_generator(generator: EditorResourcePreviewGenerator): void
        
        /** Removes a custom preview generator. */
        remove_preview_generator(generator: EditorResourcePreviewGenerator): void
        
        /** Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted. */
        check_for_invalidation(path: string): void
        
        /** Emitted if a preview was invalidated (changed). [param path] corresponds to the path of the preview. */
        readonly preview_invalidated: Signal // path: string => void
    }
    /** Custom generator of previews. */
    class EditorResourcePreviewGenerator extends RefCounted {
        /** Returns `true` if your generator supports the resource of type [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Generate a preview from a given resource with the specified size. This must always be implemented.  
         *  Returning an empty texture is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generate(resource: Resource, size: Vector2i, metadata: Dictionary): Texture2D
        
        /** Generate a preview directly from a path with the specified size. Implementing this is optional, as default code will load and call [method _generate].  
         *  Returning an empty texture is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generate_from_path(path: string, size: Vector2i, metadata: Dictionary): Texture2D
        
        /** If this function returns `true`, the generator will automatically generate the small previews from the normal preview texture generated by the methods [method _generate] or [method _generate_from_path].  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _generate_small_preview_automatically(): boolean
        
        /** If this function returns `true`, the generator will call [method _generate] or [method _generate_from_path] for small previews as well.  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _can_generate_small_preview(): boolean
    }
    /** A plugin that advanced tooltip for its handled resource type. */
    class EditorResourceTooltipPlugin extends RefCounted {
        /** Return `true` if the plugin is going to handle the given [Resource] [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Create and return a tooltip that will be displayed when the user hovers a resource under the given [param path] in filesystem dock.  
         *  The [param metadata] dictionary is provided by preview generator (see [method EditorResourcePreviewGenerator._generate]).  
         *  [param base] is the base default tooltip, which is a [VBoxContainer] with a file name, type and size labels. If another plugin handled the same file type, [param base] will be output from the previous plugin. For best result, make sure the base tooltip is part of the returned [Control].  
         *      
         *  **Note:** It's unadvised to use [method ResourceLoader.load], especially with heavy resources like models or textures, because it will make the editor unresponsive when creating the tooltip. You can use [method request_thumbnail] if you want to display a preview in your tooltip.  
         *      
         *  **Note:** If you decide to discard the [param base], make sure to call [method Node.queue_free], because it's not freed automatically.  
         *    
         */
        /* gdvirtual */ _make_tooltip_for_path(path: string, metadata: Dictionary, base: Control): Control
        _thumbnail_ready(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        
        /** Requests a thumbnail for the given [TextureRect]. The thumbnail is created asynchronously by [EditorResourcePreview] and automatically set when available. */
        request_thumbnail(path: string, control: TextureRect): void
    }
    class EditorRunBar extends MarginContainer {
        readonly play_pressed: Signal //  => void
        readonly stop_pressed: Signal //  => void
    }
    class EditorRunNative extends HBoxContainer {
        readonly native_run: Signal // preset: any /*EditorExportPreset*/ => void
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
    /** Importer for Blender's `.blend` scene file format. */
    class EditorSceneFormatImporterBlend extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterCollada extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterESCN extends EditorSceneFormatImporter {
    }
    /** Importer for the `.fbx` scene file format. */
    class EditorSceneFormatImporterFBX extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterGLTF extends EditorSceneFormatImporter {
    }
    /** Post-processes scenes after import. */
    class EditorScenePostImport extends RefCounted {
        /** Called after the scene was imported. This method must return the modified version of the scene. */
        /* gdvirtual */ _post_import(scene: Node): Object
        
        /** Returns the source file path which got imported (e.g. `res://scene.dae`). */
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
        /** Override to add internal import options. These will appear in the 3D scene import dialog. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _get_internal_import_options(category: number /*i64*/): void
        
        /** Return true or false whether a given option should be visible. Return null to ignore. */
        /* gdvirtual */ _get_internal_option_visibility(category: number /*i64*/, for_animation: boolean, option: string): void
        
        /** Return true whether updating the 3D view of the import dialog needs to be updated if an option has changed. */
        /* gdvirtual */ _get_internal_option_update_view_required(category: number /*i64*/, option: string): void
        
        /** Process a specific node or resource for a given category. */
        /* gdvirtual */ _internal_process(category: number /*i64*/, base_node: Node, node: Node, resource: Resource): void
        
        /** Override to add general import options. These will appear in the main import dock on the editor. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _get_import_options(path: string): void
        
        /** Return true or false whether a given option should be visible. Return null to ignore. */
        /* gdvirtual */ _get_option_visibility(path: string, for_animation: boolean, option: string): void
        
        /** Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made. */
        /* gdvirtual */ _pre_process(scene: Node): void
        
        /** Post process the scene. This function is called after the final scene has been configured. */
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
        readonly tab_changed: Signal // tab_index: number /*i64*/ => void
        readonly tab_closed: Signal // tab_index: number /*i64*/ => void
    }
    /** Base script that can be used to add extension functions to the editor. */
    class EditorScript extends RefCounted {
        /** This method is executed by the Editor when **File > Run** is used. */
        /* gdvirtual */ _run(): void
        
        /** Adds [param node] as a child of the root node in the editor context.  
         *  **Warning:** The implementation of this method is currently disabled.  
         */
        add_root_node(node: Node): void
        
        /** Returns the Editor's currently active scene. */
        get_scene(): Node
        
        /** Returns the [EditorInterface] singleton instance.  
         *  [i]Deprecated.[/i] [EditorInterface] is a global singleton and can be accessed directly by its name.  
         */
        get_editor_interface(): EditorInterface
    }
    /** Godot editor's control for selecting the `script` property of a [Node]. */
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
         *      
         *  **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [method EditorInterface.edit_node].  
         */
        add_node(node: Node): void
        
        /** Removes a node from the selection. */
        remove_node(node: Node): void
        
        /** Gets the list of selected nodes. */
        get_selected_nodes(): Array
        
        /** Gets the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc). This list avoids situations where a node is selected and also child/grandchild. */
        get_transformable_selected_nodes(): Array
        _emit_change(): void
        
        /** Emitted when the selection changes. */
        readonly selection_changed: Signal //  => void
    }
    /** Object that holds the project-independent editor settings. */
    class EditorSettings extends Resource {
        /** Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes. */
        static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000
        
        /** Returns `true` if the setting specified by [param name] exists, `false` otherwise. */
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
         *  - `name`: [String] (the name of the property)  
         *  - `type`: [int] (see [enum Variant.Type])  
         *  - optionally `hint`: [int] (see [enum PropertyHint]) and `hint_string`: [String]  
         *  **Example:**  
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
        
        /** Gets an array of the settings which have been changed since the last save. Note that internally `changed_settings` is cleared after a successful save, so generally the most appropriate place to use this method is when processing [constant NOTIFICATION_EDITOR_SETTINGS_CHANGED]. */
        get_changed_settings(): PackedStringArray
        
        /** Marks the passed editor setting as being changed, see [method get_changed_settings]. Only settings which exist (see [method has_setting]) will be accepted. */
        mark_setting_changed(setting: string): void
        
        /** Emitted after any editor setting has changed. */
        readonly settings_changed: Signal //  => void
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
        
        /** If `true`, the slider can't be interacted with. */
        read_only: boolean
        
        /** If `true`, the slider will not draw background. */
        flat: boolean
        
        /** If `true`, the slider and up/down arrows are hidden. */
        hide_slider: boolean
        
        /** Emitted when the spinner/slider is grabbed. */
        readonly grabbed: Signal //  => void
        
        /** Emitted when the spinner/slider is ungrabbed. */
        readonly ungrabbed: Signal //  => void
        
        /** Emitted when the value form gains focus. */
        readonly value_focus_entered: Signal //  => void
        
        /** Emitted when the value form loses focus. */
        readonly value_focus_exited: Signal //  => void
    }
    class EditorStandardSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    /** Base class for [SyntaxHighlighter] used by the [ScriptEditor]. */
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        /** Virtual method which can be overridden to return the syntax highlighter name. */
        /* gdvirtual */ _get_name(): string
        
        /** Virtual method which can be overridden to return the supported language names. */
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
        /** Override this method to define a custom parsing logic to extract the translatable strings. */
        /* gdvirtual */ _parse_file(path: string, msgids: Array, msgids_context_plural: Array): void
        
        /** Gets the list of file extensions to associate with this parser, e.g. `["csv"]`. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
    }
    namespace EditorUndoRedoManager {
        enum SpecialHistory {
            /** Global history not associated with any scene, but with external resources etc. */
            GLOBAL_HISTORY = 0,
            
            /** History associated with remote inspector. Used when live editing a running project. */
            REMOTE_HISTORY = -9,
            
            /** Invalid "null" history. It's a special value, not associated with any object. */
            INVALID_HISTORY = -99,
        }
    }
    /** Manages undo history of scenes opened in the editor. */
    class EditorUndoRedoManager extends Object {
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by the [param merge_mode] argument. See [enum UndoRedo.MergeMode] for details.  
         *  If [param custom_context] object is provided, it will be used for deducing target history (instead of using the first operation).  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, custom_context: Object = <any> {} /*compound.type from nil*/, backward_undo_ops: boolean = false): void
        
        /** Commit the action. If [param execute] is true (default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        
        /** Returns `true` if the [EditorUndoRedoManager] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
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
         *  [param id] above `0` are mapped to the opened scene tabs (but it doesn't match their order). [param id] of `0` or lower have special meaning (see [enum SpecialHistory]).  
         *  Best used with [method get_object_history_id]. This method is only provided in case you need some more advanced methods of [UndoRedo] (but keep in mind that directly operating on the [UndoRedo] object might affect editor's stability).  
         */
        get_history_undo_redo(id: number /*i64*/): UndoRedo
        
        /** Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared. */
        readonly history_changed: Signal //  => void
        
        /** Emitted when the version of any history has changed as a result of undo or redo call. */
        readonly version_changed: Signal //  => void
    }
    namespace EditorVCSInterface {
        enum ChangeType {
            /** A new file has been added. */
            CHANGE_TYPE_NEW = 0,
            
            /** An earlier added file has been modified. */
            CHANGE_TYPE_MODIFIED = 1,
            
            /** An earlier added file has been renamed. */
            CHANGE_TYPE_RENAMED = 2,
            
            /** An earlier added file has been deleted. */
            CHANGE_TYPE_DELETED = 3,
            
            /** An earlier added file has been typechanged. */
            CHANGE_TYPE_TYPECHANGE = 4,
            
            /** A file is left unmerged. */
            CHANGE_TYPE_UNMERGED = 5,
        }
        enum TreeArea {
            /** A commit is encountered from the commit area. */
            TREE_AREA_COMMIT = 0,
            
            /** A file is encountered from the staged area. */
            TREE_AREA_STAGED = 1,
            
            /** A file is encountered from the unstaged area. */
            TREE_AREA_UNSTAGED = 2,
        }
    }
    /** Version Control System (VCS) interface, which reads and writes to the local VCS in use. */
    class EditorVCSInterface extends Object {
        /** Initializes the VCS plugin when called from the editor. Returns whether or not the plugin was successfully initialized. A VCS project is initialized at [param project_path]. */
        /* gdvirtual */ _initialize(project_path: string): boolean
        
        /** Set user credentials in the underlying VCS. [param username] and [param password] are used only during HTTPS authentication unless not already mentioned in the remote URL. [param ssh_public_key_path], [param ssh_private_key_path], and [param ssh_passphrase] are only used during SSH authentication. */
        /* gdvirtual */ _set_credentials(username: string, password: string, ssh_public_key_path: string, ssh_private_key_path: string, ssh_passphrase: string): void
        
        /** Returns an [Array] of [Dictionary] items (see [method create_status_file]), each containing the status data of every modified file in the project folder. */
        /* gdvirtual */ _get_modified_files_data(): Array
        
        /** Stages the file present at [param file_path] to the staged area. */
        /* gdvirtual */ _stage_file(file_path: string): void
        
        /** Unstages the file present at [param file_path] from the staged area to the unstaged area. */
        /* gdvirtual */ _unstage_file(file_path: string): void
        
        /** Discards the changes made in a file present at [param file_path]. */
        /* gdvirtual */ _discard_file(file_path: string): void
        
        /** Commits the currently staged changes and applies the commit [param msg] to the resulting commit. */
        /* gdvirtual */ _commit(msg: string): void
        
        /** Returns an array of [Dictionary] items (see [method create_diff_file], [method create_diff_hunk], [method create_diff_line], [method add_line_diffs_into_diff_hunk] and [method add_diff_hunks_into_diff_file]), each containing information about a diff. If [param identifier] is a file path, returns a file diff, and if it is a commit identifier, then returns a commit diff. */
        /* gdvirtual */ _get_diff(identifier: string, area: number /*i64*/): Array
        
        /** Shuts down VCS plugin instance. Called when the user either closes the editor or shuts down the VCS plugin through the editor UI. */
        /* gdvirtual */ _shut_down(): boolean
        
        /** Returns the name of the underlying VCS provider. */
        /* gdvirtual */ _get_vcs_name(): string
        
        /** Returns an [Array] of [Dictionary] items (see [method create_commit]), each containing the data for a past commit. */
        /* gdvirtual */ _get_previous_commits(max_commits: number /*i64*/): Array
        
        /** Gets an instance of an [Array] of [String]s containing available branch names in the VCS. */
        /* gdvirtual */ _get_branch_list(): Array
        
        /** Returns an [Array] of [String]s, each containing the name of a remote configured in the VCS. */
        /* gdvirtual */ _get_remotes(): Array
        
        /** Creates a new branch named [param branch_name] in the VCS. */
        /* gdvirtual */ _create_branch(branch_name: string): void
        
        /** Remove a branch from the local VCS. */
        /* gdvirtual */ _remove_branch(branch_name: string): void
        
        /** Creates a new remote destination with name [param remote_name] and points it to [param remote_url]. This can be an HTTPS remote or an SSH remote. */
        /* gdvirtual */ _create_remote(remote_name: string, remote_url: string): void
        
        /** Remove a remote from the local VCS. */
        /* gdvirtual */ _remove_remote(remote_name: string): void
        
        /** Gets the current branch name defined in the VCS. */
        /* gdvirtual */ _get_current_branch_name(): string
        
        /** Checks out a [param branch_name] in the VCS. */
        /* gdvirtual */ _checkout_branch(branch_name: string): boolean
        
        /** Pulls changes from the remote. This can give rise to merge conflicts. */
        /* gdvirtual */ _pull(remote: string): void
        
        /** Pushes changes to the [param remote]. If [param force] is `true`, a force push will override the change history already present on the remote. */
        /* gdvirtual */ _push(remote: string, force: boolean): void
        
        /** Fetches new changes from the [param remote], but doesn't write changes to the current working directory. Equivalent to `git fetch`. */
        /* gdvirtual */ _fetch(remote: string): void
        
        /** Returns an [Array] of [Dictionary] items (see [method create_diff_hunk]), each containing a line diff between a file at [param file_path] and the [param text] which is passed in. */
        /* gdvirtual */ _get_line_diff(file_path: string, text: string): Array
        
        /** Helper function to create a [Dictionary] for storing a line diff. [param new_line_no] is the line number in the new file (can be `-1` if the line is deleted). [param old_line_no] is the line number in the old file (can be `-1` if the line is added). [param content] is the diff text. [param status] is a single character string which stores the line origin. */
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
        readonly enable_profiling: Signal // enable: boolean => void
    }
    class EditorZoomWidget extends HBoxContainer {
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_by_increments(increment: number /*i64*/, integer_only: boolean): void
        zoom: number /*f64*/
        readonly zoom_changed: Signal // zoom: number /*f64*/ => void
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
        /** Called when the profiler is enabled/disabled, along with a set of [param options]. */
        /* gdvirtual */ _toggle(enable: boolean, options: Array): void
        
        /** Called when data is added to profiler using [method EngineDebugger.profiler_add_frame_data]. */
        /* gdvirtual */ _add_frame(data: Array): void
        
        /** Called once every engine iteration when the profiler is active with information about the current frame. All time values are in seconds. Lower values represent faster processing times and are therefore considered better. */
        /* gdvirtual */ _tick(frame_time: number /*f64*/, process_time: number /*f64*/, physics_time: number /*f64*/, physics_frame_time: number /*f64*/): void
    }
    namespace Environment {
        enum BGMode {
            /** Clears the background using the clear color defined in [member ProjectSettings.rendering/environment/defaults/default_clear_color]. */
            BG_CLEAR_COLOR = 0,
            
            /** Clears the background using a custom clear color. */
            BG_COLOR = 1,
            
            /** Displays a user-defined sky in the background. */
            BG_SKY = 2,
            
            /** Displays a [CanvasLayer] in the background. */
            BG_CANVAS = 3,
            
            /** Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera. */
            BG_KEEP = 4,
            
            /** Displays a camera feed in the background. */
            BG_CAMERA_FEED = 5,
            
            /** Represents the size of the [enum BGMode] enum. */
            BG_MAX = 6,
        }
        enum AmbientSource {
            /** Gather ambient light from whichever source is specified as the background. */
            AMBIENT_SOURCE_BG = 0,
            
            /** Disable ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
            AMBIENT_SOURCE_DISABLED = 1,
            
            /** Specify a specific [Color] for ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
            AMBIENT_SOURCE_COLOR = 2,
            
            /** Gather ambient light from the [Sky] regardless of what the background is. */
            AMBIENT_SOURCE_SKY = 3,
        }
        enum ReflectionSource {
            /** Use the background for reflections. */
            REFLECTION_SOURCE_BG = 0,
            
            /** Disable reflections. This provides a slight performance boost over other options. */
            REFLECTION_SOURCE_DISABLED = 1,
            
            /** Use the [Sky] for reflections regardless of what the background is. */
            REFLECTION_SOURCE_SKY = 2,
        }
        enum ToneMapper {
            /** Linear tonemapper operator. Reads the linear data and passes it on unmodified. This can cause bright lighting to look blown out, with noticeable clipping in the output colors. */
            TONE_MAPPER_LINEAR = 0,
            
            /** Reinhardt tonemapper operator. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull. */
            TONE_MAPPER_REINHARDT = 1,
            
            /** Filmic tonemapper operator. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [constant TONE_MAPPER_REINHARDT]. */
            TONE_MAPPER_FILMIC = 2,
            
            /** Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [constant TONE_MAPPER_REINHARDT] and [constant TONE_MAPPER_FILMIC].  
             *      
             *  **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.  
             */
            TONE_MAPPER_ACES = 3,
        }
        enum GlowBlendMode {
            /** Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources. */
            GLOW_BLEND_MODE_ADDITIVE = 0,
            
            /** Screen glow blending mode. Increases brightness, used frequently with bloom. */
            GLOW_BLEND_MODE_SCREEN = 1,
            
            /** Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom). */
            GLOW_BLEND_MODE_SOFTLIGHT = 2,
            
            /** Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness. */
            GLOW_BLEND_MODE_REPLACE = 3,
            
            /** Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect. */
            GLOW_BLEND_MODE_MIX = 4,
        }
        enum SDFGIYScale {
            /** Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality. */
            SDFGI_Y_SCALE_50_PERCENT = 0,
            
            /** Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales. */
            SDFGI_Y_SCALE_75_PERCENT = 1,
            
            /** Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings. */
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
        
        /** Sets the intensity of the glow level [param idx]. A value above `0.0` enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled. */
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
        
        /** If set to a value greater than `0.0`, overrides the field of view to use for sky rendering. If set to `0.0`, the same FOV as the current [Camera3D] is used for sky rendering. */
        sky_custom_fov: number /*f64*/
        
        /** The rotation to use for sky rendering. */
        sky_rotation: Vector3
        
        /** The ambient light source to use for rendering materials and global illumination. */
        ambient_light_source: number /*i64*/
        
        /** The ambient light's [Color]. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        ambient_light_color: Color
        
        /** Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that [i]all[/i] the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.  
         *      
         *  **Note:** [member ambient_light_sky_contribution] is internally clamped between `0.0` and `1.0` (inclusive).  
         */
        ambient_light_sky_contribution: number /*f64*/
        
        /** The ambient light's energy. The higher the value, the stronger the light. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        ambient_light_energy: number /*f64*/
        
        /** The reflected (specular) light source. */
        reflected_light_source: number /*i64*/
        
        /** The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on a LDR display. (Godot doesn't support rendering on HDR displays yet.) */
        tonemap_mode: number /*i64*/
        
        /** The default exposure used for tonemapping. Higher values result in a brighter image. See also [member tonemap_white]. */
        tonemap_exposure: number /*f64*/
        
        /** The white reference value for tonemapping (also called "whitepoint"). Higher values can make highlights look less blown out, and will also slightly darken the whole scene as a result. Only effective if the [member tonemap_mode] isn't set to [constant TONE_MAPPER_LINEAR]. See also [member tonemap_exposure]. */
        tonemap_white: number /*f64*/
        
        /** If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [VoxelGI]s or [ReflectionProbe]s, but are slower and can't reflect surfaces occluded by others.  
         *      
         *  **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        ssr_enabled: boolean
        
        /** The maximum number of steps for screen-space reflections. Higher values are slower. */
        ssr_max_steps: number /*i64*/
        
        /** The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        ssr_fade_in: number /*f64*/
        
        /** The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        ssr_fade_out: number /*f64*/
        
        /** The depth tolerance for screen-space reflections. */
        ssr_depth_tolerance: number /*f64*/
        
        /** If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.  
         *      
         *  **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
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
        
        /** The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the `0.0-1.0` range. A value of `1.0` results in no occlusion. */
        ssao_horizon: number /*f64*/
        
        /** The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        ssao_sharpness: number /*f64*/
        
        /** The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than `0` will make the SSAO effect visible in direct light. */
        ssao_light_affect: number /*f64*/
        
        /** The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than `0` will make the SSAO effect visible in areas darkened by AO textures. */
        ssao_ao_channel_affect: number /*f64*/
        
        /** If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [VoxelGI]. Screen-space indirect lighting is not affected by individual light's [member Light3D.light_indirect_energy].  
         *      
         *  **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
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
        
        /** If `true`, enables signed distance field global illumination for meshes that have their [member GeometryInstance3D.gi_mode] set to [constant GeometryInstance3D.GI_MODE_STATIC]. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.  
         *      
         *  **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         *  **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [LightmapGI] instead). To improve SDFGI performance, enable [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution] in the Project Settings.  
         *      
         *  **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.  
         */
        sdfgi_enabled: boolean
        
        /** If `true`, SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [member sdfgi_use_occlusion] has a performance impact and should only be enabled when needed. */
        sdfgi_use_occlusion: boolean
        
        /** If `true`, SDFGI takes the environment lighting into account. This should be set to `false` for interior scenes. */
        sdfgi_read_sky_light: boolean
        
        /** The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing [member sdfgi_bounce_feedback] generally has no performance impact. See also [member sdfgi_energy].  
         *      
         *  **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.  
         *      
         *  **Note:** If [member sdfgi_bounce_feedback] is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.  
         */
        sdfgi_bounce_feedback: number /*f64*/
        
        /** The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [member sdfgi_cascades] can often be decreased between `1` and `4` to improve performance. */
        sdfgi_cascades: number /*i64*/
        
        /** The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.  
         *      
         *  **Note:** This property is linked to [member sdfgi_max_distance] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
         */
        sdfgi_min_cell_size: number /*f64*/
        
        /**     
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_max_distance]. Changing its value will automatically change those properties as well.  
         */
        sdfgi_cascade0_distance: number /*f64*/
        
        /** The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [ReflectionProbe] will be used as a fallback.  
         *      
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
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
        
        /** If `true`, the glow effect is enabled.  
         *      
         *  **Note:** Glow is only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, glow will look different due to the lower dynamic range available in the Mobile rendering method.  
         */
        glow_enabled: boolean
        
        /** If `true`, glow levels will be normalized so that summed together their intensities equal `1.0`. */
        glow_normalized: boolean
        
        /** The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this should be increased to `1.5` to compensate. */
        glow_intensity: number /*f64*/
        
        /** The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range. */
        glow_strength: number /*f64*/
        
        /** When using the [constant GLOW_BLEND_MODE_MIX] [member glow_blend_mode], this controls how much the source image is blended with the glow layer. A value of `0.0` makes the glow rendering invisible, while a value of `1.0` is equivalent to [constant GLOW_BLEND_MODE_REPLACE]. */
        glow_mix: number /*f64*/
        
        /** The bloom's intensity. If set to a value higher than `0`, this will make glow visible in areas darker than the [member glow_hdr_threshold]. */
        glow_bloom: number /*f64*/
        
        /** The glow blending mode. */
        glow_blend_mode: number /*i64*/
        
        /** The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this may need to be below `1.0` for glow to be visible. A value of `0.9` works well in this case. This value also needs to be decreased below `1.0` when using glow in 2D, as 2D rendering is performed in SDR. */
        glow_hdr_threshold: number /*f64*/
        
        /** The bleed scale of the HDR glow. */
        glow_hdr_scale: number /*f64*/
        
        /** The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect. */
        glow_hdr_luminance_cap: number /*f64*/
        
        /** How strong of an impact the [member glow_map] should have on the overall glow effect. A strength of `0.0` means the glow map has no effect on the overall glow effect. A strength of `1.0` means the glow has a full effect on the overall glow effect (and can turn off glow entirely in specific areas of the screen if the glow map has black areas). */
        glow_map_strength: number /*f64*/
        
        /** The texture that should be used as a glow map to [i]multiply[/i] the resulting glow color according to [member glow_map_strength]. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.  
         *      
         *  **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).  
         */
        glow_map: Texture2D
        
        /** If `true`, fog effects are enabled. */
        fog_enabled: boolean
        
        /** The fog's color. */
        fog_light_color: Color
        
        /** The fog's brightness. Higher values result in brighter fog. */
        fog_light_energy: number /*f64*/
        
        /** If set above `0.0`, renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog. */
        fog_sun_scatter: number /*f64*/
        
        /** The [i]exponential[/i] fog density to use. Higher values result in a more dense fog. Fog rendering is exponential as in real life. */
        fog_density: number /*f64*/
        
        /** If set above `0.0` (exclusive), blends between the fog's color and the color of the background [Sky]. This has a small performance cost when set above `0.0`. Must have [member background_mode] set to [constant BG_SKY].  
         *  This is useful to simulate [url=https://en.wikipedia.org/wiki/Aerial_perspective]aerial perspective[/url] in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the [Sky]. If set to `0.0`, aerial perspective is disabled.  
         */
        fog_aerial_perspective: number /*f64*/
        
        /** The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member fog_sky_affect] has no visual effect if [member fog_aerial_perspective] is `1.0`.  
         */
        fog_sky_affect: number /*f64*/
        
        /** The height at which the height fog effect begins. */
        fog_height: number /*f64*/
        
        /** The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value. */
        fog_height_density: number /*f64*/
        
        /** Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [FogVolume]s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.  
         *      
         *  **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        volumetric_fog_enabled: boolean
        
        /** The base [i]exponential[/i] density of the volumetric fog. Set this to the lowest density you want to have globally. [FogVolume]s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.  
         *  A value of `0.0` disables global volumetric fog while allowing [FogVolume]s to display volumetric fog in specific areas.  
         *  To make volumetric fog work as a volumetric [i]lighting[/i] solution, set [member volumetric_fog_density] to the lowest non-zero value (`0.0001`) then increase lights' [member Light3D.light_volumetric_fog_energy] to values between `10000` and `100000` to compensate for the very low density.  
         */
        volumetric_fog_density: number /*f64*/
        
        /** The [Color] of the volumetric fog when interacting with lights. Mist and fog have an albedo close to `Color(1, 1, 1, 1)` while smoke has a darker albedo. */
        volumetric_fog_albedo: Color
        
        /** The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows. */
        volumetric_fog_emission: Color
        
        /** The brightness of the emitted light from the volumetric fog. */
        volumetric_fog_emission_energy: number /*f64*/
        
        /** Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. [member volumetric_fog_gi_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         *      
         *  **Note:** Only [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) are taken into account when using [member volumetric_fog_gi_inject]. Global illumination from [LightmapGI], [ReflectionProbe] and SSIL (see [member ssil_enabled]) will be ignored by volumetric fog.  
         */
        volumetric_fog_gi_inject: number /*f64*/
        
        /** The direction of scattered light as it goes through the volumetric fog. A value close to `1.0` means almost all light is scattered forward. A value close to `0.0` means light is scattered equally in all directions. A value close to `-1.0` means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions. */
        volumetric_fog_anisotropy: number /*f64*/
        
        /** The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth]. */
        volumetric_fog_length: number /*f64*/
        
        /** The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera. */
        volumetric_fog_detail_spread: number /*f64*/
        
        /** Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. [member volumetric_fog_ambient_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         */
        volumetric_fog_ambient_inject: number /*f64*/
        
        /** The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member volumetric_fog_sky_affect] also affects [FogVolume]s, even if [member volumetric_fog_density] is `0.0`. If you notice [FogVolume]s are disappearing when looking towards the sky, set [member volumetric_fog_sky_affect] to `1.0`.  
         */
        volumetric_fog_sky_affect: number /*f64*/
        
        /** Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [FogVolume]s and [Light3D]s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [FogVolume]s or [Light3D]s too fast. Short-lived dynamic lighting effects should have [member Light3D.light_volumetric_fog_energy] set to `0.0` to avoid ghosting. */
        volumetric_fog_temporal_reprojection_enabled: boolean
        
        /** The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible. */
        volumetric_fog_temporal_reprojection_amount: number /*f64*/
        
        /** If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene.  
         *      
         *  **Note:** Adjustments are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        adjustment_enabled: boolean
        
        /** The global brightness value of the rendered scene. Effective only if [member adjustment_enabled] is `true`. */
        adjustment_brightness: number /*f64*/
        
        /** The global contrast value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        adjustment_contrast: number /*f64*/
        
        /** The global color saturation value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        adjustment_saturation: number /*f64*/
        
        /** The [Texture2D] or [Texture3D] lookup table (LUT) to use for the built-in post-process color grading. Can use a [GradientTexture1D] for a 1-dimensional LUT, or a [Texture3D] for a more complex LUT. Effective only if [member adjustment_enabled] is `true`. */
        adjustment_color_correction: Texture2D | Texture3D
    }
    class EventListenerLineEdit extends LineEdit {
        readonly event_changed: Signal // event: InputEvent => void
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
        
        /** Returns `true` if [method execute] has failed. */
        has_execute_failed(): boolean
        
        /** Returns the error text if [method parse] or [method execute] has failed. */
        get_error_text(): string
    }
    class FBXImporterManager extends ConfirmationDialog {
    }
    namespace FastNoiseLite {
        enum NoiseType {
            /** A lattice of points are assigned random values then interpolated based on neighboring values. */
            TYPE_VALUE = 5,
            
            /** Similar to Value noise, but slower. Has more variance in peaks and valleys.  
             *  Cubic noise can be used to avoid certain artifacts when using value noise to create a bumpmap. In general, you should always use this mode if the value noise is being used for a heightmap or bumpmap.  
             */
            TYPE_VALUE_CUBIC = 4,
            
            /** A lattice of random gradients. Their dot products are interpolated to obtain values in between the lattices. */
            TYPE_PERLIN = 3,
            
            /** Cellular includes both Worley noise and Voronoi diagrams which creates various regions of the same value. */
            TYPE_CELLULAR = 2,
            
            /** As opposed to [constant TYPE_PERLIN], gradients exist in a simplex lattice rather than a grid lattice, avoiding directional artifacts. */
            TYPE_SIMPLEX = 0,
            
            /** Modified, higher quality version of [constant TYPE_SIMPLEX], but slower. */
            TYPE_SIMPLEX_SMOOTH = 1,
        }
        enum FractalType {
            /** No fractal noise. */
            FRACTAL_NONE = 0,
            
            /** Method using Fractional Brownian Motion to combine octaves into a fractal. */
            FRACTAL_FBM = 1,
            
            /** Method of combining octaves into a fractal resulting in a "ridged" look. */
            FRACTAL_RIDGED = 2,
            
            /** Method of combining octaves into a fractal with a ping pong effect. */
            FRACTAL_PING_PONG = 3,
        }
        enum CellularDistanceFunction {
            /** Euclidean distance to the nearest point. */
            DISTANCE_EUCLIDEAN = 0,
            
            /** Squared Euclidean distance to the nearest point. */
            DISTANCE_EUCLIDEAN_SQUARED = 1,
            
            /** Manhattan distance (taxicab metric) to the nearest point. */
            DISTANCE_MANHATTAN = 2,
            
            /** Blend of [constant DISTANCE_EUCLIDEAN] and [constant DISTANCE_MANHATTAN] to give curved cell boundaries */
            DISTANCE_HYBRID = 3,
        }
        enum CellularReturnType {
            /** The cellular distance function will return the same value for all points within a cell. */
            RETURN_CELL_VALUE = 0,
            
            /** The cellular distance function will return a value determined by the distance to the nearest point. */
            RETURN_DISTANCE = 1,
            
            /** The cellular distance function returns the distance to the second-nearest point. */
            RETURN_DISTANCE2 = 2,
            
            /** The distance to the nearest point is added to the distance to the second-nearest point. */
            RETURN_DISTANCE2_ADD = 3,
            
            /** The distance to the nearest point is subtracted from the distance to the second-nearest point. */
            RETURN_DISTANCE2_SUB = 4,
            
            /** The distance to the nearest point is multiplied with the distance to the second-nearest point. */
            RETURN_DISTANCE2_MUL = 5,
            
            /** The distance to the nearest point is divided by the distance to the second-nearest point. */
            RETURN_DISTANCE2_DIV = 6,
        }
        enum DomainWarpType {
            /** The domain is warped using the simplex noise algorithm. */
            DOMAIN_WARP_SIMPLEX = 0,
            
            /** The domain is warped using a simplified version of the simplex noise algorithm. */
            DOMAIN_WARP_SIMPLEX_REDUCED = 1,
            
            /** The domain is warped using a simple noise grid (not as smooth as the other methods, but more performant). */
            DOMAIN_WARP_BASIC_GRID = 2,
        }
        enum DomainWarpFractalType {
            /** No fractal noise for warping the space. */
            DOMAIN_WARP_FRACTAL_NONE = 0,
            
            /** Warping the space progressively, octave for octave, resulting in a more "liquified" distortion. */
            DOMAIN_WARP_FRACTAL_PROGRESSIVE = 1,
            
            /** Warping the space independently for each octave, resulting in a more chaotic distortion. */
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
        
        /** Maximum distance a point can move off of its grid position. Set to `0` for an even grid. */
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
            /** Opens the file for read operations. The cursor is positioned at the beginning of the file. */
            READ = 1,
            
            /** Opens the file for write operations. The file is created if it does not exist, and truncated if it does.  
             *      
             *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive]).  
             */
            WRITE = 2,
            
            /** Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file. */
            READ_WRITE = 3,
            
            /** Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.  
             *      
             *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive]).  
             */
            WRITE_READ = 7,
        }
        enum CompressionMode {
            /** Uses the [url=https://fastlz.org/]FastLZ[/url] compression method. */
            COMPRESSION_FASTLZ = 0,
            
            /** Uses the [url=https://en.wikipedia.org/wiki/DEFLATE]DEFLATE[/url] compression method. */
            COMPRESSION_DEFLATE = 1,
            
            /** Uses the [url=https://facebook.github.io/zstd/]Zstandard[/url] compression method. */
            COMPRESSION_ZSTD = 2,
            
            /** Uses the [url=https://www.gzip.org/]gzip[/url] compression method. */
            COMPRESSION_GZIP = 3,
            
            /** Uses the [url=https://github.com/google/brotli]brotli[/url] compression method (only decompression is supported). */
            COMPRESSION_BROTLI = 4,
        }
        enum UnixPermissionFlags {
            /** Read for owner bit. */
            UNIX_READ_OWNER = 256,
            
            /** Write for owner bit. */
            UNIX_WRITE_OWNER = 128,
            
            /** Execute for owner bit. */
            UNIX_EXECUTE_OWNER = 64,
            
            /** Read for group bit. */
            UNIX_READ_GROUP = 32,
            
            /** Write for group bit. */
            UNIX_WRITE_GROUP = 16,
            
            /** Execute for group bit. */
            UNIX_EXECUTE_GROUP = 8,
            
            /** Read for other bit. */
            UNIX_READ_OTHER = 4,
            
            /** Write for other bit. */
            UNIX_WRITE_OTHER = 2,
            
            /** Execute for other bit. */
            UNIX_EXECUTE_OTHER = 1,
            
            /** Set user id on execution bit. */
            UNIX_SET_USER_ID = 2048,
            
            /** Set group id on execution bit. */
            UNIX_SET_GROUP_ID = 1024,
            
            /** Restricted deletion (sticky) bit. */
            UNIX_RESTRICTED_DELETE = 512,
        }
    }
    /** Provides methods for file reading and writing operations. */
    class FileAccess extends RefCounted {
        /** Creates a new [FileAccess] object and opens the file for writing or reading, depending on the flags.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string, flags: FileAccess.ModeFlags): FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.  
         *      
         *  **Note:** The provided key must be 32 bytes long.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open_encrypted(path: string, mode_flags: FileAccess.ModeFlags, key: PackedByteArray): FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open_encrypted_with_pass(path: string, mode_flags: FileAccess.ModeFlags, pass: string): FileAccess
        
        /** Creates a new [FileAccess] object and opens a compressed file for reading or writing.  
         *      
         *  **Note:** [method open_compressed] can only read files that were saved by Godot, not third-party compression formats. See [url=https://github.com/godotengine/godot/issues/28999]GitHub issue #28999[/url] for a workaround.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
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
         *      
         *  **Note:** Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.  
         */
        flush(): void
        
        /** Returns the path as a [String] for the current open file. */
        get_path(): string
        
        /** Returns the absolute path as a [String] for the current open file. */
        get_path_absolute(): string
        
        /** Returns `true` if the file is currently opened. */
        is_open(): boolean
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
        seek(position: number /*i64*/): void
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).  
         *      
         *  **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.  
         */
        seek_end(position: number /*i64*/ = 0): void
        
        /** Returns the file cursor's position. */
        get_position(): number /*i64*/
        
        /** Returns the size of the file in bytes. */
        get_length(): number /*i64*/
        
        /** Returns `true` if the file cursor has already read past the end of the file.  
         *      
         *  **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:  
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
        
        /** Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.  
         *  Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.  
         *  For example, the following CSV lines are valid and will be properly parsed as two strings each:  
         *    
         *  Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it [i]could[/i] very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.  
         */
        get_csv_line(delim: string = ','): PackedStringArray
        
        /** Returns the whole file as a [String]. Text is interpreted as being UTF-8 encoded.  
         *  If [param skip_cr] is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).  
         */
        get_as_text(skip_cr: boolean = false): string
        
        /** Returns an MD5 String representing the file at the given path or an empty [String] on failure. */
        static get_md5(path: string): string
        
        /** Returns a SHA-256 [String] representing the file at the given path or an empty [String] on failure. */
        static get_sha256(path: string): string
        is_big_endian(): boolean
        set_big_endian(big_endian: boolean): void
        
        /** Returns the last error that happened when trying to perform operations. Compare with the `ERR_FILE_*` constants from [enum Error]. */
        get_error(): GodotError
        
        /** Returns the next [Variant] value from the file. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** Stores an integer as 8 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store_8(value: number /*i64*/): void
        
        /** Stores an integer as 16 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64] or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:  
         *    
         */
        store_16(value: number /*i64*/): void
        
        /** Stores an integer as 32 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store_32(value: number /*i64*/): void
        
        /** Stores an integer as 64 bits in the file.  
         *      
         *  **Note:** The [param value] must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [int] value).  
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
        
        /** Appends [param line] to the file followed by a line return character (`\n`), encoding the text as UTF-8. */
        store_line(line: string): void
        
        /** Store the given [PackedStringArray] in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long.  
         *  Text will be encoded as UTF-8.  
         */
        store_csv_line(values: PackedStringArray, delim: string = ','): void
        
        /** Appends [param string] to the file without a line return, encoding the text as UTF-8.  
         *      
         *  **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [method store_pascal_string] instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or [method get_as_text].  
         */
        store_string(string_: string): void
        
        /** Stores any Variant value in the file. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         *      
         *  **Note:** Not all properties are included. Only properties that are configured with the [constant PROPERTY_USAGE_STORAGE] flag set will be serialized. You can add a new usage flag to a property by overriding the [method Object._get_property_list] method in your class. You can also check how property usage is configured by calling [method Object._get_property_list]. See [enum PropertyUsageFlags] for the possible usage flags.  
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
         *      
         *  **Note:** [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.  
         */
        close(): void
        
        /** Returns `true` if the file exists in the given path.  
         *      
         *  **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.  
         *  For a non-static, relative equivalent, use [method DirAccess.file_exists].  
         */
        static file_exists(path: string): boolean
        
        /** Returns the last time the [param file] was modified in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
        static get_modified_time(file: string): number /*i64*/
        
        /** Returns file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static get_unix_permissions(file: string): FileAccess.UnixPermissionFlags
        
        /** Sets file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static set_unix_permissions(file: string, permissions: FileAccess.UnixPermissionFlags): GodotError
        
        /** Returns `true`, if file `hidden` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static get_hidden_attribute(file: string): boolean
        
        /** Sets file **hidden** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static set_hidden_attribute(file: string, hidden: boolean): GodotError
        
        /** Sets file **read only** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static set_read_only_attribute(file: string, ro: boolean): GodotError
        
        /** Returns `true`, if file `read only` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static get_read_only_attribute(file: string): boolean
        
        /** If `true`, the file is read with big-endian [url=https://en.wikipedia.org/wiki/Endianness]endianness[/url]. If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.  
         *      
         *  **Note:** [member big_endian] is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.  
         *      
         *  **Note:** This is always reset to `false` whenever you open the file. Therefore, you must set [member big_endian] [i]after[/i] opening the file, not before.  
         */
        big_endian: boolean
    }
    namespace FileDialog {
        enum FileMode {
            /** The dialog allows selecting one, and only one file. */
            FILE_MODE_OPEN_FILE = 0,
            
            /** The dialog allows selecting multiple files. */
            FILE_MODE_OPEN_FILES = 1,
            
            /** The dialog only allows selecting a directory, disallowing the selection of any file. */
            FILE_MODE_OPEN_DIR = 2,
            
            /** The dialog allows selecting one file or directory. */
            FILE_MODE_OPEN_ANY = 3,
            
            /** The dialog will warn when a file exists. */
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            /** The dialog only allows accessing files under the [Resource] path (`res://`). */
            ACCESS_RESOURCES = 0,
            
            /** The dialog only allows accessing files under user data path (`user://`). */
            ACCESS_USERDATA = 1,
            
            /** The dialog allows accessing files on the whole file system. */
            ACCESS_FILESYSTEM = 2,
        }
    }
    /** A dialog for selecting files or directories in the filesystem. */
    class FileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        
        /** Clear all the added filters in the dialog. */
        clear_filters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [FileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.png, *.jpg"` and a [param description] of `"Images"` results in filter text "Images (*.png, *.jpg)".  
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
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_vbox(): VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
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
        
        /** If `true`, changing the [member file_mode] property will set the window title accordingly (e.g. setting [member file_mode] to [constant FILE_MODE_OPEN_FILE] will change the window title to "Open a File"). */
        mode_overrides_title: boolean
        
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        file_mode: number /*i64*/
        
        /** The file system access scope. See [enum Access] constants.  
         *  **Warning:** Currently, in sandboxed environments such as Web builds or sandboxed macOS apps, FileDialog cannot access the host file system. See [url=https://github.com/godotengine/godot-proposals/issues/1123]godot-proposals#1123[/url].  
         */
        access: number /*i64*/
        
        /** If non-empty, the given sub-folder will be "root" of this [FileDialog], i.e. user won't be able to go to its parent directory. */
        root_subfolder: string
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        
        /** If `true`, the dialog will show hidden files. */
        show_hidden_files: boolean
        
        /** If `true`, [member access] is set to [constant ACCESS_FILESYSTEM], and it is supported by the current [DisplayServer], OS native dialog will be used instead of custom one.  
         *      
         *  **Note:** On macOS, sandboxed apps always use native dialogs to access host filesystem.  
         */
        use_native_dialog: boolean
        
        /** The current working directory of the file dialog. */
        current_dir: string
        
        /** The currently selected file of the file dialog. */
        current_file: string
        
        /** The currently selected file path of the file dialog. */
        current_path: string
        
        /** Emitted when the user selects a file by double-clicking it or pressing the **OK** button. */
        readonly file_selected: Signal // path: string => void
        
        /** Emitted when the user selects multiple files. */
        readonly files_selected: Signal // paths: PackedStringArray => void
        
        /** Emitted when the user selects a directory. */
        readonly dir_selected: Signal // dir: string => void
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
        
        /** Emitted when a new scene is created that inherits the scene at [param file] path. */
        readonly inherit: Signal // file: string => void
        
        /** Emitted when the given scenes are being instantiated in the editor. */
        readonly instantiate: Signal // files: PackedStringArray => void
        
        /** Emitted when an external [param resource] had its file removed. */
        readonly resource_removed: Signal // resource: Resource => void
        
        /** Emitted when the given [param file] was removed. */
        readonly file_removed: Signal // file: string => void
        
        /** Emitted when the given [param folder] was removed. */
        readonly folder_removed: Signal // folder: string => void
        
        /** Emitted when a file is moved from [param old_file] path to [param new_file] path. */
        readonly files_moved: Signal // old_file: string, new_file: string => void
        
        /** Emitted when a folder is moved from [param old_folder] path to [param new_folder] path. */
        readonly folder_moved: Signal // old_folder: string, new_folder: string => void
        
        /** Emitted when the user switches file display mode or split mode. */
        readonly display_mode_changed: Signal //  => void
    }
    class FileSystemList extends ItemList {
        readonly item_edited: Signal //  => void
    }
    class FindInFiles extends Node {
        readonly result_found: Signal // path: string, line_number: number /*i64*/, begin: number /*i64*/, end: number /*i64*/, text: string => void
        readonly finished: Signal //  => void
    }
    class FindInFilesDialog extends AcceptDialog {
        readonly find_requested: Signal //  => void
        readonly replace_requested: Signal //  => void
    }
    class FindInFilesPanel extends Control {
        _on_result_found(_unnamed_arg0: string, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*i64*/, _unnamed_arg3: number /*i64*/, _unnamed_arg4: string): void
        _on_finished(): void
        _draw_result_text(_unnamed_arg0: Object, _unnamed_arg1: Rect2): void
        readonly result_selected: Signal // path: string, line_number: number /*i64*/, begin: number /*i64*/, end: number /*i64*/ => void
        readonly files_modified: Signal // paths: string => void
    }
    class FindReplaceBar extends HBoxContainer {
        _search_current(): boolean
        readonly error: Signal //  => void
    }
    namespace FlowContainer {
        enum AlignmentMode {
            /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
            ALIGNMENT_BEGIN = 0,
            
            /** The child controls will be centered in the container. */
            ALIGNMENT_CENTER = 1,
            
            /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
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
        
        /** If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.  
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
         *      
         *  **Note:** Due to limited precision, [member density] values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [member Environment.volumetric_fog_density].  
         */
        density: number /*f64*/
        
        /** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
        albedo: Color
        
        /** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
        emission: Color
        
        /** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
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
         *      
         *  **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].  
         *      
         *  **Note:** If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.  
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
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).  
         */
        get_height(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns the average font ascent (number of pixels above the baseline).  
         *      
         *  **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).  
         */
        get_ascent(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns the average font descent (number of pixels below the baseline).  
         *      
         *  **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).  
         */
        get_descent(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns average pixel offset of the underline below the baseline.  
         *      
         *  **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        get_underline_position(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns average thickness of the underline.  
         *      
         *  **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
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
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get_font_weight(): number /*i64*/
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get_font_stretch(): number /*i64*/
        
        /** Returns the spacing for the given `type` (see [enum TextServer.SpacingType]). */
        get_spacing(spacing: TextServer.SpacingType): number /*i64*/
        
        /** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        get_opentype_features(): Dictionary
        
        /** Sets LRU cache capacity for `draw_*` methods. */
        set_cache_capacity(single_line: number /*i64*/, multi_line: number /*i64*/): void
        
        /** Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].  
         *  For example, to get the string size as displayed by a single-line Label, use:  
         *    
         *      
         *  **Note:** Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].  
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
         *      
         *  **Note:** Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.  
         */
        get_char_size(char: number /*i64*/, font_size: number /*i64*/): Vector2
        
        /** Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        draw_char(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        
        /** Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top, [i]ascent[/i] must be added to the Y axis.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        draw_char_outline(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, size: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        has_char(char: number /*i64*/): boolean
        
        /** Returns a string containing all the characters available in the font.  
         *  If a given character is included in more than one font data source, it appears only once in the returned string.  
         */
        get_supported_chars(): string
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        is_language_supported(language: string): boolean
        
        /** Returns `true`, if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
        is_script_supported(script: string): boolean
        
        /** Returns list of OpenType features supported by font. */
        get_supported_feature_list(): Dictionary
        
        /** Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.  
         *  Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.  
         *  To print available variation axes of a variable font:  
         *    
         *      
         *  **Note:** To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].  
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
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        load_bitmap_font(path: string): GodotError
        
        /** Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
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
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.  
         */
        clear_textures(cache_index: number /*i64*/, size: Vector2i): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].  
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
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        clear_glyphs(cache_index: number /*i64*/, size: Vector2i): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        remove_glyph(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): void
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        set_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
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
        
        /** Returns `true` if support override is enabled for the [param language]. */
        get_language_support_override(language: string): boolean
        
        /** Remove language support override. */
        remove_language_support_override(language: string): void
        
        /** Returns list of language support overrides. */
        get_language_support_overrides(): PackedStringArray
        
        /** Adds override for [method Font.is_script_supported]. */
        set_script_support_override(script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        get_script_support_override(script: string): boolean
        
        /** Removes script support override. */
        remove_script_support_override(script: string): void
        
        /** Returns list of script support overrides. */
        get_script_support_overrides(): PackedStringArray
        set_opentype_feature_overrides(overrides: Dictionary): void
        get_opentype_feature_overrides(): Dictionary
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        get_glyph_index(size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method get_glyph_index]. */
        get_char_from_glyph_index(size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        
        /** Contents of the dynamic font source file. */
        data: PackedByteArray
        
        /** If set to `true`, generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        
        /** Font family name. */
        font_name: string
        
        /** Font style name. */
        style_name: string
        
        /** Font style flags, see [enum TextServer.FontStyle]. */
        font_style: number /*i64*/
        
        /** Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_weight: number /*i64*/
        
        /** Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_stretch: number /*i64*/
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        multichannel_signed_distance_field: boolean
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        msdf_pixel_range: number /*i64*/
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
        force_autohinter: boolean
        
        /** Font hinting mode. Used by dynamic fonts only. */
        hinting: number /*i64*/
        
        /** Font oversampling factor. If set to `0.0`, the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling). */
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
         *      
         *  **Note:** This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names ([String], e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].  
         *      
         *  **Note:** To get available variation axes of a font, use [method Font.get_supported_variation_list].  
         */
        variation_opentype: Dictionary
        
        /** Active face index in the TrueType / OpenType collection file. */
        variation_face_index: number /*i64*/
        
        /** If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.  
         *      
         *  **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.  
         */
        variation_embolden: number /*f64*/
        
        /** 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
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
        
        /** Whether or not the camera is in perspective mode. If false, the camera is in orthographic/orthogonal mode. This maps to GLTF's camera `type` property. See [member Camera3D.projection] and the GLTF spec for more information. */
        perspective: boolean
        
        /** The FOV of the camera. This class and GLTF define the camera FOV in radians, while Godot uses degrees. This maps to GLTF's `yfov` property. This value is only used for perspective cameras, when [member perspective] is true. */
        fov: number /*f64*/
        
        /** The size of the camera. This class and GLTF define the camera size magnitude as a radius in meters, while Godot defines it as a diameter in meters. This maps to GLTF's `ymag` property. This value is only used for orthographic/orthogonal cameras, when [member perspective] is false. */
        size_mag: number /*f64*/
        
        /** The distance to the far culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `zfar` property. */
        depth_far: number /*f64*/
        
        /** The distance to the near culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `znear` property. */
        depth_near: number /*f64*/
    }
    namespace GLTFDocument {
        enum RootNodeMode {
            /** Treat the Godot scene's root node as the root node of the glTF file, and mark it as the single root node via the `GODOT_single_root` glTF extension. This will be parsed the same as [constant ROOT_NODE_MODE_KEEP_ROOT] if the implementation does not support `GODOT_single_root`. */
            ROOT_NODE_MODE_SINGLE_ROOT = 0,
            
            /** Treat the Godot scene's root node as the root node of the glTF file, but do not mark it as anything special. An extra root node will be generated when importing into Godot. This uses only vanilla glTF features. This is equivalent to the behavior in Godot 4.1 and earlier. */
            ROOT_NODE_MODE_KEEP_ROOT = 1,
            
            /** Treat the Godot scene's root node as the name of the glTF scene, and add all of its children as root nodes of the glTF file. This uses only vanilla glTF features. This avoids an extra root node, but only the name of the Godot scene's root node will be preserved, as it will not be saved as a node. */
            ROOT_NODE_MODE_MULTI_ROOT = 2,
        }
    }
    /** Class for importing and exporting glTF files in and out of Godot. */
    class GLTFDocument extends Resource {
        /** Takes a path to a GLTF file and imports the data at that file path to the given [GLTFState] object through the [param state] parameter.  
         *      
         *  **Note:** The [param base_path] tells [method append_from_file] where to find dependencies and can be empty.  
         */
        append_from_file(path: string, state: GLTFState, flags: number /*i64*/ = 0, base_path: string = ''): GodotError
        
        /** Takes a [PackedByteArray] defining a GLTF and imports the data to the given [GLTFState] object through the [param state] parameter.  
         *      
         *  **Note:** The [param base_path] tells [method append_from_buffer] where to find dependencies and can be empty.  
         */
        append_from_buffer(bytes: PackedByteArray, base_path: string, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        
        /** Takes a Godot Engine scene node and exports it and its descendants to the given [GLTFState] object through the [param state] parameter. */
        append_from_scene(node: Node, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        
        /** Takes a [GLTFState] object through the [param state] parameter and returns a Godot Engine scene node. */
        generate_scene(state: GLTFState, bake_fps: number /*f64*/ = 30, trimming: boolean = false, remove_immutable_tracks: boolean = true): Node
        
        /** Takes a [GLTFState] object through the [param state] parameter and returns a GLTF [PackedByteArray]. */
        generate_buffer(state: GLTFState): PackedByteArray
        
        /** Takes a [GLTFState] object through the [param state] parameter and writes a glTF file to the filesystem.  
         *      
         *  **Note:** The extension of the glTF file determines if it is a .glb binary file or a .gltf file.  
         */
        write_to_filesystem(state: GLTFState, path: string): GodotError
        set_image_format(image_format: string): void
        get_image_format(): string
        set_lossy_quality(lossy_quality: number /*f64*/): void
        get_lossy_quality(): number /*f64*/
        set_root_node_mode(root_node_mode: GLTFDocument.RootNodeMode): void
        get_root_node_mode(): GLTFDocument.RootNodeMode
        
        /** Registers the given [GLTFDocumentExtension] instance with GLTFDocument. If [param first_priority] is true, this extension will be run first. Otherwise, it will be run last.  
         *      
         *  **Note:** Like GLTFDocument itself, all GLTFDocumentExtension classes must be stateless in order to function properly. If you need to store data, use the `set_additional_data` and `get_additional_data` methods in [GLTFState] or [GLTFNode].  
         */
        static register_gltf_document_extension(extension: GLTFDocumentExtension, first_priority: boolean = false): void
        
        /** Unregisters the given [GLTFDocumentExtension] instance. */
        static unregister_gltf_document_extension(extension: GLTFDocumentExtension): void
        
        /** The user-friendly name of the export image format. This is used when exporting the GLTF file, including writing to a file and writing to a byte array.  
         *  By default, Godot allows the following options: "None", "PNG", "JPEG", "Lossless WebP", and "Lossy WebP". Support for more image formats can be added in [GLTFDocumentExtension] classes.  
         */
        image_format: string
        
        /** If [member image_format] is a lossy image format, this determines the lossy quality of the image. On a range of `0.0` to `1.0`, where `0.0` is the lowest quality and `1.0` is the highest quality. A lossy quality of `1.0` is not the same as lossless. */
        lossy_quality: number /*f64*/
        
        /** How to process the root node during export. See [enum RootNodeMode] for details. The default and recommended value is [constant ROOT_NODE_MODE_SINGLE_ROOT].  
         *      
         *  **Note:** Regardless of how the glTF file is exported, when importing, the root node type and name can be overridden in the scene import settings tab.  
         */
        root_node_mode: number /*i64*/
    }
    /** [GLTFDocument] extension class. */
    class GLTFDocumentExtension extends Resource {
        /** Part of the import process. This method is run first, before all other parts of the import process.  
         *  The return value is used to determine if this [GLTFDocumentExtension] instance should be used for importing a given GLTF file. If [constant OK], the import will use this [GLTFDocumentExtension] instance. If not overridden, [constant OK] is returned.  
         */
        /* gdvirtual */ _import_preflight(state: GLTFState, extensions: PackedStringArray): GodotError
        
        /** Part of the import process. This method is run after [method _import_preflight] and before [method _parse_node_extensions].  
         *  Returns an array of the GLTF extensions supported by this GLTFDocumentExtension class. This is used to validate if a GLTF file with required extensions can be loaded.  
         */
        /* gdvirtual */ _get_supported_extensions(): PackedStringArray
        
        /** Part of the import process. This method is run after [method _get_supported_extensions] and before [method _import_post_parse].  
         *  Runs when parsing the node extensions of a GLTFNode. This method can be used to process the extension JSON data into a format that can be used by [method _generate_scene_node]. The return value should be a member of the [enum Error] enum.  
         */
        /* gdvirtual */ _parse_node_extensions(state: GLTFState, gltf_node: GLTFNode, extensions: Dictionary): GodotError
        
        /** Part of the import process. This method is run after [method _parse_node_extensions] and before [method _parse_texture_json].  
         *  Runs when parsing image data from a GLTF file. The data could be sourced from a separate file, a URI, or a buffer, and then is passed as a byte array.  
         */
        /* gdvirtual */ _parse_image_data(state: GLTFState, image_data: PackedByteArray, mime_type: string, ret_image: Image): GodotError
        
        /** Returns the file extension to use for saving image data into, for example, `".png"`. If defined, when this extension is used to handle images, and the images are saved to a separate file, the image bytes will be copied to a file with this extension. If this is set, there should be a [ResourceImporter] class able to import the file. If not defined or empty, Godot will save the image into a PNG file. */
        /* gdvirtual */ _get_image_file_extension(): string
        
        /** Part of the import process. This method is run after [method _parse_image_data] and before [method _generate_scene_node].  
         *  Runs when parsing the texture JSON from the GLTF textures array. This can be used to set the source image index to use as the texture.  
         */
        /* gdvirtual */ _parse_texture_json(state: GLTFState, texture_json: Dictionary, ret_gltf_texture: GLTFTexture): GodotError
        
        /** Part of the import process. This method is run after [method _import_post_parse] and before [method _import_node].  
         *  Runs when generating a Godot scene node from a GLTFNode. The returned node will be added to the scene tree. Multiple nodes can be generated in this step if they are added as a child of the returned node.  
         *      
         *  **Note:** The [param scene_parent] parameter may be null if this is the single root node.  
         */
        /* gdvirtual */ _generate_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_parent: Node): Node3D
        
        /** Part of the import process. This method is run after [method _parse_node_extensions] and before [method _generate_scene_node].  
         *  This method can be used to modify any of the data imported so far, including any scene nodes, before running the final per-node import step.  
         */
        /* gdvirtual */ _import_post_parse(state: GLTFState): GodotError
        
        /** Part of the import process. This method is run after [method _generate_scene_node] and before [method _import_post].  
         *  This method can be used to make modifications to each of the generated Godot scene nodes.  
         */
        /* gdvirtual */ _import_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        
        /** Part of the import process. This method is run last, after all other parts of the import process.  
         *  This method can be used to modify the final Godot scene generated by the import process.  
         */
        /* gdvirtual */ _import_post(state: GLTFState, root: Node): GodotError
        
        /** Part of the export process. This method is run first, before all other parts of the export process.  
         *  The return value is used to determine if this [GLTFDocumentExtension] instance should be used for exporting a given GLTF file. If [constant OK], the export will use this [GLTFDocumentExtension] instance. If not overridden, [constant OK] is returned.  
         */
        /* gdvirtual */ _export_preflight(state: GLTFState, root: Node): GodotError
        
        /** Part of the export process. This method is run after [method _export_preflight] and before [method _export_preserialize].  
         *  Runs when converting the data from a Godot scene node. This method can be used to process the Godot scene node data into a format that can be used by [method _export_node].  
         */
        /* gdvirtual */ _convert_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_node: Node): void
        
        /** Part of the export process. This method is run after [method _convert_scene_node] and before [method _get_saveable_image_formats].  
         *  This method can be used to alter the state before performing serialization. It runs every time when generating a buffer with [method GLTFDocument.generate_buffer] or writing to the file system with [method GLTFDocument.write_to_filesystem].  
         */
        /* gdvirtual */ _export_preserialize(state: GLTFState): GodotError
        
        /** Part of the export process. This method is run after [method _convert_scene_node] and before [method _export_node].  
         *  Returns an array of the image formats that can be saved/exported by this extension. This extension will only be selected as the image exporter if the [GLTFDocument]'s [member GLTFDocument.image_format] is in this array. If this [GLTFDocumentExtension] is selected as the image exporter, one of the [method _save_image_at_path] or [method _serialize_image_to_bytes] methods will run next, otherwise [method _export_node] will run next. If the format name contains `"Lossy"`, the lossy quality slider will be displayed.  
         */
        /* gdvirtual */ _get_saveable_image_formats(): PackedStringArray
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _serialize_texture_json].  
         *  This method is run when embedding images in the GLTF file. When images are saved separately, [method _save_image_at_path] runs instead. Note that these methods only run when this [GLTFDocumentExtension] is selected as the image exporter.  
         *  This method must set the image MIME type in the [param image_dict] with the `"mimeType"` key. For example, for a PNG image, it would be set to `"image/png"`. The return value must be a [PackedByteArray] containing the image data.  
         */
        /* gdvirtual */ _serialize_image_to_bytes(state: GLTFState, image: Image, image_dict: Dictionary, image_format: string, lossy_quality: number /*f64*/): PackedByteArray
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _serialize_texture_json].  
         *  This method is run when saving images separately from the GLTF file. When images are embedded, [method _serialize_image_to_bytes] runs instead. Note that these methods only run when this [GLTFDocumentExtension] is selected as the image exporter.  
         */
        /* gdvirtual */ _save_image_at_path(state: GLTFState, image: Image, file_path: string, image_format: string, lossy_quality: number /*f64*/): GodotError
        
        /** Part of the export process. This method is run after [method _save_image_at_path] or [method _serialize_image_to_bytes], and before [method _export_node]. Note that this method only runs when this [GLTFDocumentExtension] is selected as the image exporter.  
         *  This method can be used to set up the extensions for the texture JSON by editing [param texture_json]. The extension must also be added as used extension with [method GLTFState.add_used_extension], be sure to set `required` to `true` if you are not providing a fallback.  
         */
        /* gdvirtual */ _serialize_texture_json(state: GLTFState, texture_json: Dictionary, gltf_texture: GLTFTexture, image_format: string): GodotError
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _export_post]. If this [GLTFDocumentExtension] is used for exporting images, this runs after [method _serialize_texture_json].  
         *  This method can be used to modify the final JSON of each node.  
         */
        /* gdvirtual */ _export_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        
        /** Part of the export process. This method is run last, after all other parts of the export process.  
         *  This method can be used to modify the final JSON of the generated GLTF file.  
         */
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
        
        /** If `true`, indicates that this shape is a trigger. For Godot, this means that the shape should be a child of an Area3D node.  
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
        /** Discards all embedded textures and uses untextured materials. */
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        
        /** Extracts embedded textures to be reimported and compressed. Editor only. Acts as uncompressed at runtime. */
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        
        /** Embeds textures VRAM compressed with Basis Universal into the generated scene. */
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        
        /** Embeds textures compressed losslessly into the generated scene, matching old behavior. */
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
         *      
         *  **Note:** Not every [GLTFNode] will have a scene node generated, and not every generated scene node will have a corresponding [GLTFNode]. If there is no scene node for this [GLTFNode] index, `null` is returned.  
         */
        get_scene_node(idx: number /*i64*/): Node
        
        /** Returns the index of the [GLTFNode] corresponding to this Godot scene node. This is the inverse of [method get_scene_node]. Useful during the export process.  
         *      
         *  **Note:** Not every Godot scene node will have a corresponding [GLTFNode], and not every [GLTFNode] will have a scene node generated. If there is no [GLTFNode] index for this scene node, `-1` is returned.  
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
        
        /** The file name associated with this GLTF data. If it ends with `.gltf`, this is text-based GLTF, otherwise this is binary GLB. This will be set during import when appending from a file, and will be set during export when writing to a file. If writing to a buffer, this will be an empty string. */
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
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
            
            /** Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
            DRAW_ORDER_REVERSE_LIFETIME = 2,
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
         *      
         *  **Note:** When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.  
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
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        
        /** The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.  
         *      
         *  **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.  
         */
        amount: number /*i64*/
        
        /** The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.  
         *      
         *  **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.  
         */
        amount_ratio: number /*f64*/
        
        /** Path to another [GPUParticles2D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.  
         *      
         *  **Note:** When [member sub_emitter] is set, the target [GPUParticles2D] node will no longer emit particles on its own.  
         */
        sub_emitter: NodePath
        
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        
        /** Particle texture. If `null`, particles will be squares with a size of 1×1 pixels.  
         *      
         *  **Note:** To use a flipbook texture, assign a new [CanvasItemMaterial] to the [GPUParticles2D]'s [member CanvasItem.material] property, then enable [member CanvasItemMaterial.particles_animation] and set [member CanvasItemMaterial.particles_anim_h_frames], [member CanvasItemMaterial.particles_anim_v_frames], and [member CanvasItemMaterial.particles_anim_loop] to match the flipbook texture.  
         */
        texture: Texture2D
        
        /** The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. */
        lifetime: number /*f64*/
        
        /** If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end. */
        one_shot: boolean
        
        /** Particle system starts as if it had already run for this many seconds. */
        preprocess: number /*f64*/
        
        /** Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles. */
        speed_scale: number /*f64*/
        
        /** How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins. */
        explosiveness: number /*f64*/
        
        /** Emission lifetime randomness ratio. */
        randomness: number /*f64*/
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.  
         *      
         *  **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.  
         */
        interp_to_end: number /*f64*/
        
        /** Multiplier for particle's collision radius. `1.0` corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].  
         *      
         *  **Note:** Particles always have a spherical collision shape.  
         */
        collision_base_size: number /*f64*/
        
        /** The [Rect2] that determines the node's region which needs to be visible on screen for the particle system to be active.  
         *  Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The [Rect2] can be grown via code or with the **Particles → Generate Visibility Rect** editor tool.  
         */
        visibility_rect: Rect2
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        
        /** Particle draw order. Uses [enum DrawOrder] values. */
        draw_order: number /*i64*/
        
        /** If `true`, enables particle trails using a mesh skinning system.  
         *      
         *  **Note:** Unlike [GPUParticles3D], the number of trail sections and subdivisions is set with the [member trail_sections] and [member trail_section_subdivisions] properties.  
         */
        trail_enabled: boolean
        
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is `true`. */
        trail_lifetime: number /*f64*/
        
        /** The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_section_subdivisions]. Only effective if [member trail_enabled] is `true`. */
        trail_sections: number /*i64*/
        
        /** The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_sections]. Only effective if [member trail_enabled] is `true`. */
        trail_section_subdivisions: number /*i64*/
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.  
         *      
         *  **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.  
         */
        readonly finished: Signal //  => void
    }
    class GPUParticles2DEditorPlugin extends EditorPlugin {
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
    /** A 3D particle emitter. */
    class GPUParticles3D extends GeometryInstance3D {
        /** Maximum number of draw passes supported. */
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
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        
        /** The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.  
         *      
         *  **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.  
         */
        amount: number /*i64*/
        
        /** The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.  
         *      
         *  **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.  
         */
        amount_ratio: number /*f64*/
        
        /** Path to another [GPUParticles3D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.  
         *      
         *  **Note:** When [member sub_emitter] is set, the target [GPUParticles3D] node will no longer emit particles on its own.  
         */
        sub_emitter: NodePath
        
        /** The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. */
        lifetime: number /*f64*/
        
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.  
         *      
         *  **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.  
         */
        interp_to_end: number /*f64*/
        
        /** If `true`, only the number of particles equal to [member amount] will be emitted. */
        one_shot: boolean
        
        /** Amount of time to preprocess the particles before animation starts. Lets you start the animation some time after particles have started emitting. */
        preprocess: number /*f64*/
        
        /** Speed scaling ratio. A value of `0` can be used to pause the particles. */
        speed_scale: number /*f64*/
        
        /** Time ratio between each emission. If `0`, particles are emitted continuously. If `1`, all particles are emitted simultaneously. */
        explosiveness: number /*f64*/
        
        /** Emission randomness ratio. */
        randomness: number /*f64*/
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        
        /** The base diameter for particle collision in meters. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].  
         *      
         *  **Note:** Particles always have a spherical collision shape.  
         */
        collision_base_size: number /*f64*/
        
        /** The [AABB] that determines the node's region which needs to be visible on screen for the particle system to be active. [member GeometryInstance3D.extra_cull_margin] is added on each of the AABB's axes. Particle collisions and attraction will only occur within this area.  
         *  Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [AABB] can be grown via code or with the **Particles → Generate AABB** editor tool.  
         *      
         *  **Note:** [member visibility_aabb] is overridden by [member GeometryInstance3D.custom_aabb] if that property is set to a non-default value.  
         */
        visibility_aabb: AABB
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        
        /** Particle draw order. Uses [enum DrawOrder] values.  
         *      
         *  **Note:** [constant DRAW_ORDER_INDEX] is the only option that supports motion vectors for effects like TAA. It is suggested to use this draw order if the particles are opaque to fix ghosting artifacts.  
         */
        draw_order: number /*i64*/
        transform_align: number /*i64*/
        
        /** If `true`, enables particle trails using a mesh skinning system. Designed to work with [RibbonTrailMesh] and [TubeTrailMesh].  
         *      
         *  **Note:** [member BaseMaterial3D.use_particle_trails] must also be enabled on the particle mesh's material. Otherwise, setting [member trail_enabled] to `true` will have no effect.  
         *      
         *  **Note:** Unlike [GPUParticles2D], the number of trail sections and subdivisions is set in the [RibbonTrailMesh] or the [TubeTrailMesh]'s properties.  
         */
        trail_enabled: boolean
        
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is `true`. */
        trail_lifetime: number /*f64*/
        
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        
        /** The number of draw passes when rendering particles. */
        draw_passes: number /*i64*/
        draw_skin: Skin
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.  
         *      
         *  **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.  
         */
        readonly finished: Signal //  => void
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
        
        /** Adjusts the strength of the attractor. If [member strength] is negative, particles will be pushed in the opposite direction. Particles will be pushed [i]away[/i] from the attractor's origin if [member directionality] is `0.0`, or towards local +Z if [member directionality] is greater than `0.0`. */
        strength: number /*f64*/
        
        /** The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges. */
        attenuation: number /*f64*/
        
        /** Adjusts how directional the attractor is. At `0.0`, the attractor is not directional at all: it will attract particles towards its center. At `1.0`, the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [member strength] is negative).  
         *      
         *  **Note:** If [member directionality] is greater than `0.0`, the direction in which particles are pushed can be changed by rotating the [GPUParticlesAttractor3D] node.  
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
         *      
         *  **Note:** Stretched ellipses can be obtained by using non-uniform scaling on the [GPUParticlesAttractorSphere3D] node.  
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
         *      
         *  **Note:** To get better performance, the 3D texture's resolution should reflect the [member size] of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.  
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
        
        /** If `true`, the [GPUParticlesCollisionHeightField3D] will follow the current camera in global space. The [GPUParticlesCollisionHeightField3D] does not need to be a child of the [Camera3D] node for this to work.  
         *  Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering [member resolution] to improve performance if [member follow_camera_enabled] is `true`.  
         */
        follow_camera_enabled: boolean
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
            /** Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [VoxelGI] and SDFGI, the geometry will [i]receive[/i] indirect lighting and reflections but the geometry will not be considered in GI baking. */
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
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it [i]must[/i] be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.  
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
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will [i]not[/i] disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         */
        transparency: number /*f64*/
        
        /** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
        cast_shadow: number /*i64*/
        
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        extra_cull_margin: number /*f64*/
        
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to `0.0`. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        custom_aabb: AABB
        
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.  
         *  Useful for testing level of detail transitions in the editor.  
         */
        lod_bias: number /*f64*/
        
        /** If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.  
         *      
         *  **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.  
         */
        ignore_occlusion_culling: boolean
        
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).  
         *      
         *  **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].  
         */
        gi_mode: number /*i64*/
        
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes. */
        gi_lightmap_scale: number /*i64*/
        
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_begin: number /*f64*/
        
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        visibility_range_begin_margin: number /*f64*/
        
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_end: number /*f64*/
        
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
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
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
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
         *      
         *  **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        interpolation_color_space: number /*i64*/
        
        /** Gradient's offsets returned as a [PackedFloat32Array].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_offset] method (for updating offsets individually) or assign to this property directly (for bulk-updating all offsets at once).  
         */
        offsets: PackedFloat32Array
        
        /** Gradient's colors returned as a [PackedColorArray].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_color] method (for updating colors individually) or assign to this property directly (for bulk-updating all colors at once).  
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
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        use_hdr: boolean
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
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
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
            /** [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view. */
            SCROLL_ZOOMS = 0,
            
            /** [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom. */
            SCROLL_PANS = 1,
        }
    }
    /** An editor for graph-like structures, using [GraphNode]s. */
    class GraphEdit extends Control {
        /** Returns whether the [param mouse_position] is in the input hot zone.  
         *  By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_input_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        
        /** Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_output_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        
        /** Virtual method which can be overridden to customize how connections are drawn. */
        /* gdvirtual */ _get_connection_line(from_position: Vector2, to_position: Vector2): PackedVector2Array
        
        /** This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.  
         *  Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.  
         *  In this example a connection to same node is suppressed:  
         *    
         */
        /* gdvirtual */ _is_node_hover_valid(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created. */
        connect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): GodotError
        
        /** Returns `true` if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        is_node_connected(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): void
        
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        set_connection_activity(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/, amount: number /*f64*/): void
        
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
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_menu_hbox(): HBoxContainer
        
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrange_nodes(): void
        
        /** Sets the specified [param node] as the one selected. */
        set_selected(node: Node): void
        
        /** The scroll offset. */
        scroll_offset: Vector2
        
        /** If `true`, the grid is visible. */
        show_grid: boolean
        
        /** If `true`, enables snapping. */
        snapping_enabled: boolean
        
        /** The snapping distance in pixels, also determines the grid line distance. */
        snapping_distance: number /*i64*/
        
        /** Defines the control scheme for panning with mouse wheel. */
        panning_scheme: number /*i64*/
        
        /** If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        right_disconnects: boolean
        
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        connection_lines_curvature: number /*f64*/
        
        /** The thickness of the lines between the nodes. */
        connection_lines_thickness: number /*f64*/
        
        /** If `true`, the lines between nodes will use antialiasing. */
        connection_lines_antialiased: boolean
        
        /** The current zoom value. */
        zoom: number /*f64*/
        
        /** The lower zoom limit. */
        zoom_min: number /*f64*/
        
        /** The upper zoom limit. */
        zoom_max: number /*f64*/
        
        /** The step of each zoom level. */
        zoom_step: number /*f64*/
        
        /** If `true`, the minimap is visible. */
        minimap_enabled: boolean
        
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        minimap_size: Vector2
        
        /** The opacity of the minimap rectangle. */
        minimap_opacity: number /*f64*/
        
        /** If `true`, the menu toolbar is visible. */
        show_menu: boolean
        
        /** If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents. */
        show_zoom_label: boolean
        
        /** If `true`, buttons that allow to change and reset the zoom level are visible. */
        show_zoom_buttons: boolean
        
        /** If `true`, buttons that allow to configure grid and snapping options are visible. */
        show_grid_buttons: boolean
        
        /** If `true`, the button to toggle the minimap is visible. */
        show_minimap_button: boolean
        
        /** If `true`, the button to automatically arrange graph nodes is visible. */
        show_arrange_button: boolean
        
        /** Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created. */
        readonly connection_request: Signal // from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/ => void
        
        /** Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed. */
        readonly disconnection_request: Signal // from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/ => void
        
        /** Emitted when user drags a connection from an output port into the empty space of the graph. */
        readonly connection_to_empty: Signal // from_node: StringName, from_port: number /*i64*/, release_position: Vector2 => void
        
        /** Emitted when user drags a connection from an input port into the empty space of the graph. */
        readonly connection_from_empty: Signal // to_node: StringName, to_port: number /*i64*/, release_position: Vector2 => void
        
        /** Emitted at the beginning of a connection drag. */
        readonly connection_drag_started: Signal // from_node: StringName, from_port: number /*i64*/, is_output: boolean => void
        
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
        
        /** If `true`, the user can resize the GraphElement.  
         *      
         *  **Note:** Dragging the handle will only emit the [signal resize_request] signal, the GraphElement needs to be resized manually.  
         */
        resizable: boolean
        
        /** If `true`, the user can drag the GraphElement. */
        draggable: boolean
        
        /** If `true`, the user can select the GraphElement. */
        selectable: boolean
        
        /** If `true`, the GraphElement is selected. */
        selected: boolean
        
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
    /** A container with connection ports, representing a node in a [GraphEdit]. */
    class GraphNode extends GraphElement {
        /* gdvirtual */ _draw_port(slot_index: number /*i64*/, position: Vector2i, left: boolean, color: Color): void
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
        set_slot(slot_index: number /*i64*/, enable_left_port: boolean, type_left: number /*i64*/, color_left: Color, enable_right_port: boolean, type_right: number /*i64*/, color_right: Color, custom_icon_left: Texture2D = <any> {} /*compound.type from nil*/, custom_icon_right: Texture2D = <any> {} /*compound.type from nil*/, draw_stylebox: boolean = true): void
        
        /** Disables the slot with the given [param slot_index]. This will remove the corresponding input and output port from the GraphNode. */
        clear_slot(slot_index: number /*i64*/): void
        
        /** Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode. */
        clear_all_slots(): void
        
        /** Returns `true` if left (input) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_left(slot_index: number /*i64*/): boolean
        
        /** Toggles the left (input) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the left side and the slot will be able to be connected from this side. */
        set_slot_enabled_left(slot_index: number /*i64*/, enable: boolean): void
        
        /** Sets the left (input) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        set_slot_type_left(slot_index: number /*i64*/, type: number /*i64*/): void
        
        /** Returns the left (input) type of the slot with the given [param slot_index]. */
        get_slot_type_left(slot_index: number /*i64*/): number /*i64*/
        
        /** Sets the [Color] of the left (input) side of the slot with the given [param slot_index] to [param color]. */
        set_slot_color_left(slot_index: number /*i64*/, color: Color): void
        
        /** Returns the left (input) [Color] of the slot with the given [param slot_index]. */
        get_slot_color_left(slot_index: number /*i64*/): Color
        
        /** Returns `true` if right (output) side of the slot with the given [param slot_index] is enabled. */
        is_slot_enabled_right(slot_index: number /*i64*/): boolean
        
        /** Toggles the right (output) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the right side and the slot will be able to be connected from this side. */
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
        
        /** Emitted when any GraphNode's slot is updated. */
        readonly slot_updated: Signal // slot_index: number /*i64*/ => void
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
        /** Invalid cell item that can be used in [method set_cell_item] to clear cells (or represent an empty cell in [method get_cell_item]). */
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
        
        /** The orientation of the cell at the given grid coordinates. `-1` is returned if the cell is empty. */
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
        
        /** If `true`, grid items are centered on the X axis. */
        cell_center_x: boolean
        
        /** If `true`, grid items are centered on the Y axis. */
        cell_center_y: boolean
        
        /** If `true`, grid items are centered on the Z axis. */
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
        
        /** If `true`, this GridMap creates a navigation region for each cell that uses a [member mesh_library] item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [MeshLibrary]'s item. */
        bake_navigation: boolean
        
        /** Emitted when [member cell_size] changes. */
        readonly cell_size_changed: Signal // cell_size: Vector3 => void
        
        /** Emitted when the [MeshLibrary] of this GridMap changes. */
        readonly changed: Signal //  => void
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
        readonly group_edited: Signal //  => void
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
            
            /** [i]Deprecated.[/i] HTTP status code `305 Use Proxy`. */
            RESPONSE_USE_PROXY = 305,
            
            /** [i]Deprecated.[/i] HTTP status code `306 Switch Proxy`. */
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
    /** Low-level hyper-text transfer protocol client. */
    class HTTPClient extends RefCounted {
        /** Connects to a host. This needs to be done before any requests are sent.  
         *  If no [param port] is specified (or `-1` is used), it is automatically set to 80 for HTTP and 443 for HTTPS. You can pass the optional [param tls_options] parameter to customize the trusted certification authorities, or the common name verification when using HTTPS. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         */
        connect_to_host(host: string, port: number /*i64*/ = -1, tls_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        set_connection(connection: StreamPeer): void
        get_connection(): StreamPeer
        
        /** Sends a raw request to the connected host.  
         *  The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).  
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].  
         *  Sends the body data raw, as a byte array and does not encode it in any way.  
         */
        request_raw(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: PackedByteArray): GodotError
        
        /** Sends a request to the connected host.  
         *  The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).  
         *  Headers are HTTP request headers. For available HTTP methods, see [enum Method].  
         *  To create a POST request with query strings to push to the server, do:  
         *    
         *      
         *  **Note:** The [param body] parameter is ignored if [param method] is [constant HTTPClient.METHOD_GET]. This is because GET methods can't contain request data. As a workaround, you can pass request data as a query string in the URL. See [method String.uri_encode] for an example.  
         */
        request(method: HTTPClient.Method, url: string, headers: PackedStringArray, body: string = ''): GodotError
        
        /** Closes the current connection, allowing reuse of this [HTTPClient]. */
        close(): void
        
        /** If `true`, this [HTTPClient] has a response available. */
        has_response(): boolean
        
        /** If `true`, this [HTTPClient] has a response that is chunked. */
        is_response_chunked(): boolean
        
        /** Returns the response's HTTP status code. */
        get_response_code(): number /*i64*/
        
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
         *  Furthermore, if a key has a `null` value, only the key itself is added, without equal sign and value. If the value is an array, for each value in it a pair with the same key is added.  
         *    
         */
        query_string_from_dict(fields: Dictionary): string
        
        /** If `true`, execution will block until all data is read from the response. */
        blocking_mode_enabled: boolean
        
        /** The connection to use for this client. */
        connection: StreamPeer
        
        /** The size of the buffer used and maximum bytes to read per iteration. See [method read_response_body_chunk]. */
        read_chunk_size: number /*i64*/
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
    /** A node with the ability to send HTTP(S) requests. */
    class HTTPRequest extends Node {
        /** Creates request on the underlying [HTTPClient]. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].  
         *  Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.  
         *      
         *  **Note:** When [param method] is [constant HTTPClient.METHOD_GET], the payload sent via [param request_data] might be ignored by the server or even cause the server to reject the request (check [url=https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1]RFC 7231 section 4.3.1[/url] for more details). As a workaround, you can send data as a query string in the URL (see [method String.uri_encode] for an example).  
         *      
         *  **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.  
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
         *      
         *  **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.  
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
        
        /** If `true`, multithreading is used to improve performance. */
        use_threads: boolean
        
        /** If `true`, this header will be added to each request: `Accept-Encoding: gzip, deflate` telling servers that it's okay to compress response bodies.  
         *  Any Response body declaring a `Content-Encoding` of either `gzip` or `deflate` will then be automatically decompressed, and the uncompressed bytes will be delivered via [signal request_completed].  
         *  If the user has specified their own `Accept-Encoding` header, then no header will be added regardless of [member accept_gzip].  
         *  If `false` no header will be added, and no decompression will be performed on response bodies. The raw bytes of the response body will be returned via [signal request_completed].  
         */
        accept_gzip: boolean
        
        /** Maximum allowed size for response bodies. If the response body is compressed, this will be used as the maximum allowed size for the decompressed body. */
        body_size_limit: number /*i64*/
        
        /** Maximum number of allowed redirects. */
        max_redirects: number /*i64*/
        
        /** The duration to wait in seconds before a request times out. If [member timeout] is set to `0.0` then the request will never time out. For simple requests, such as communication with a REST API, it is recommended that [member timeout] is set to a value suitable for the server response time (e.g. between `1.0` and `10.0`). This will help prevent unwanted timeouts caused by variation in server response times while still allowing the application to detect when a request has timed out. For larger requests such as file downloads it is suggested the [member timeout] be set to `0.0`, disabling the timeout functionality. This will help to prevent large transfers from failing due to exceeding the timeout value. */
        timeout: number /*f64*/
        
        /** Emitted when a request is completed. */
        readonly request_completed: Signal // result: number /*i64*/, response_code: number /*i64*/, headers: PackedStringArray, body: PackedByteArray => void
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
    /** A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. */
    class HingeJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: HingeJoint3D.Param, value: number /*f64*/): void
        
        /** Returns the value of the specified parameter. */
        get_param(param: HingeJoint3D.Param): number /*f64*/
        
        /** If `true`, enables the specified flag. */
        set_flag(flag: HingeJoint3D.Flag, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        get_flag(flag: HingeJoint3D.Flag): boolean
    }
    class HistoryDock extends VBoxContainer {
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
    /** Image datatype. */
    class Image extends Resource {
        /** The maximal width allowed for [Image] resources. */
        static readonly MAX_WIDTH = 16777216
        
        /** The maximal height allowed for [Image] resources. */
        static readonly MAX_HEIGHT = 16777216
        
        /** Returns the image's width. */
        get_width(): number /*i64*/
        
        /** Returns the image's height. */
        get_height(): number /*i64*/
        
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
        get_mipmap_count(): number /*i64*/
        
        /** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
        get_mipmap_offset(mipmap: number /*i64*/): number /*i64*/
        
        /** Resizes the image to the nearest power of 2 for the width and height. If [param square] is `true` then set width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
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
        
        /** Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.  
         *  It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.  
         */
        generate_mipmaps(renormalize: boolean = false): GodotError
        
        /** Removes the image's mipmaps. */
        clear_mipmaps(): void
        
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is `true`, then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format): Image
        
        /** Creates a new image of given size and format. See [enum Format] constants. Fills the image with the given raw data. If [param use_mipmaps] is `true` then loads mipmaps for this image from [param data]. See [method generate_mipmaps]. */
        static create_from_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): Image
        
        /** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
        set_data(width: number /*i64*/, height: number /*i64*/, use_mipmaps: boolean, format: Image.Format, data: PackedByteArray): void
        
        /** Returns `true` if the image has no data. */
        is_empty(): boolean
        
        /** Loads an image from file [param path]. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.  
         *  See also [ImageTexture] description for usage examples.  
         */
        load(path: string): GodotError
        
        /** Creates a new [Image] and loads data from the specified file. */
        static load_from_file(path: string): Image
        
        /** Saves the image as a PNG file to the file at [param path]. */
        save_png(path: string): GodotError
        
        /** Saves the image as a PNG file to a byte array. */
        save_png_to_buffer(): PackedByteArray
        
        /** Saves the image as a JPEG file to [param path] with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.  
         */
        save_jpg(path: string, quality: number /*f64*/ = 0.75): GodotError
        
        /** Saves the image as a JPEG file to a byte array with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.  
         */
        save_jpg_to_buffer(quality: number /*f64*/ = 0.75): PackedByteArray
        
        /** Saves the image as an EXR file to [param path]. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        save_exr(path: string, grayscale: boolean = false): GodotError
        
        /** Saves the image as an EXR file to a byte array. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return an empty byte array when it is called from an exported project.  
         */
        save_exr_to_buffer(grayscale: boolean = false): PackedByteArray
        
        /** Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        save_webp(path: string, lossy: boolean = false, quality: number /*f64*/ = 0.75): GodotError
        
        /** Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        save_webp_to_buffer(lossy: boolean = false, quality: number /*f64*/ = 0.75): PackedByteArray
        
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
        compress(mode: Image.CompressMode, source: Image.CompressSource = 0, astc_format: Image.ASTCFormat = 0): GodotError
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress_from_channels(mode: Image.CompressMode, channels: Image.UsedChannels, astc_format: Image.ASTCFormat = 0): GodotError
        
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].  
         *      
         *  **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.  
         */
        decompress(): GodotError
        
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
        bump_map_to_normal_map(bump_scale: number /*f64*/ = 1): void
        
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
        get_pixel(x: number /*i64*/, y: number /*i64*/): Color
        
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
         *      
         *  **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.  
         */
        load_tga_from_buffer(buffer: PackedByteArray): GodotError
        
        /** Loads an image from the binary contents of a BMP file.  
         *      
         *  **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.  
         *      
         *  **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.  
         */
        load_bmp_from_buffer(buffer: PackedByteArray): GodotError
        
        /** Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.  
         *      
         *  **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.  
         *      
         *  **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.  
         */
        load_ktx_from_buffer(buffer: PackedByteArray): GodotError
        
        /** Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).  
         *      
         *  **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        load_svg_from_buffer(buffer: PackedByteArray, scale: number /*f64*/ = 1): GodotError
        
        /** Loads an image from the string contents of a SVG file (**.svg**).  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
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
        /** Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        
        /** Loads the content of [param fileaccess] into the provided [param image]. */
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
         *      
         *  **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.  
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.  
         */
        update(image: Image): void
        
        /** Resizes the texture to the specified dimensions. */
        set_size_override(size: Vector2i): void
    }
    /** Texture with 3 dimensions. */
    class ImageTexture3D extends Texture3D {
        /** Creates the [ImageTexture3D] with specified [param width], [param height], and [param depth]. See [enum Image.Format] for [param format] options. If [param use_mipmaps] is `true`, then generate mipmaps for the [ImageTexture3D]. */
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
         *  Each [Image] represents one `layer`.  
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
        
        /** Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.  
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].  
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.  
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.  
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents a LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of a LOD also increases the distance that the objects has to be from the camera before the LOD is used.  
         *  The [param flags] argument is the bitwise or of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         *      
         *  **Note:** When using indices, it is recommended to only use points, lines, or triangles.  
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
         *  [param normal_merge_angle] and [param normal_split_angle] are in degrees and used in the same way as the importer settings in `lods`. As a good default, use 25 and 60 respectively.  
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
}
